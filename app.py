import io
import json
import numpy as np
import pandas as pd
from flask import Flask, request, jsonify
from flask_cors import CORS
from PIL import Image
import tensorflow as tf
from tensorflow.keras.preprocessing import image
from sklearn.metrics import accuracy_score, classification_report
from skimage.feature import hog
from skimage.color import rgb2gray

app = Flask(__name__)
CORS(app, resources={r"/*": {"origins": "*"}})

model_path = "./model"
results_csv = "./classification_results.csv"

model = None
input_shape = None
MODEL_METRICS = {}

class_labels = {
    0: "akiec",
    1: "bcc",
    2: "bkl",
    3: "df",
    4: "mel",
    5: "nv",
    6: "vasc"
}
try:
    df = pd.read_csv(results_csv)

    report = classification_report(
        df["true_dx"],
        df["predicted_dx"],
        output_dict=True
    )

    per_class_accuracy = {}

    for cls in df["true_dx"].unique():
        cls_df = df[df["true_dx"] == cls]
        acc_cls = (
            (cls_df["true_dx"] == cls_df["predicted_dx"]).sum()
            / len(cls_df)
        ) * 100
        per_class_accuracy[cls] = round(acc_cls, 2)

    MODEL_METRICS = {
        "accuracy": per_class_accuracy.get("df", 0.0),
        "accuracy_label": "nv",
        "total_samples": int(len(df)),
        "per_class_accuracy": per_class_accuracy,
        "per_class_metrics": {
            cls: {
                "precision": round(report[cls]["precision"], 3),
                "recall": round(report[cls]["recall"], 3),
                "f1_score": round(report[cls]["f1-score"], 3),
                "support": int(report[cls]["support"])
            }
            for cls in report
            if cls not in ["accuracy", "macro avg", "weighted avg"]
        }
    }

    with open("model_metrics.json", "w") as f:
        json.dump(MODEL_METRICS, f, indent=4)

    print("Metrics loaded")

except Exception as e:
    print("Metrics load error:", e)


def preprocess_image(img):
    img = img.resize(input_shape)
    img_array = image.img_to_array(img)
    img_array = np.expand_dims(img_array, axis=0)
    return img_array / 255.0

def extract_features(img):
    try:
        img_gray = rgb2gray(np.array(img.resize((64, 64))))
        features, _ = hog(
            img_gray,
            pixels_per_cell=(16, 16),
            cells_per_block=(2, 2),
            feature_vector=True,
            visualize=True
        )
        norm = np.linalg.norm(features)
        return (features / norm).tolist() if norm > 0 else features.tolist()
    except:
        return None

@app.route("/predict", methods=["POST"])
def predict():
    if "file" not in request.files:
        return jsonify({"error": "No file provided"}), 400

    try:
        img = Image.open(io.BytesIO(request.files["file"].read()))
        processed = preprocess_image(img)
        preds = model.predict(processed)
        idx = int(np.argmax(preds))
        confidence = float(preds[0][idx]) * 100

        extract_features(img)

        return jsonify({
            "predicted_class": class_labels[idx],
            "confidence": round(confidence, 2)
        })

    except Exception as e:
        return jsonify({"error": str(e)}), 500

@app.route("/metrics", methods=["GET"])
def metrics():
    return jsonify(MODEL_METRICS)

if __name__ == "__main__":
    app.run(debug=False)
