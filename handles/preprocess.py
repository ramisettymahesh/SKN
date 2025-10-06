import os
import glob
import keras
from keras_vggface.vggface import VGGFace
from keras_vggface.utils import preprocess_input
from keras.models import load_model
from .config import *

Height = 32
Width  = 32
BatchSize = 32
__v = 1

baseDir   = 'E:/PROJ-12/train'
modelName = os.listdir(baseDir)
modelPath = '../model/'

TrainPath = 'E:/PROJ-12/train/actual/' + str(__v) + '/train'
ValidPath = 'E:/PROJ-12/train/actual/' + str(__v) + '/valid'
TestPath  = 'E:/PROJ-12/train/actual/' + str(__v) + '/test'

print("Loading:", modelPath)
model = load_model(modelPath)

def preprocess_input_new(x):
    img = preprocess_input(keras.preprocessing.image.img_to_array(x), version = 2)
    return keras.preprocessing.image.array_to_img(img)

ValidGen = keras.preprocessing.image.ImageDataGenerator(
        preprocessing_function=preprocess_input_new).flow_from_directory(
        TestPath,
        target_size=(Height, Width),
        batch_size=BatchSize,
        shuffle=False)

results = model.evaluate_generator(ValidGen, verbose=0)
print("RESULTS : ",results)