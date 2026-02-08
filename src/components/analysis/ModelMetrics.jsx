import React, { useEffect, useState } from "react";
import axios from "axios";
import { Bar, Radar } from "react-chartjs-2";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  RadialLinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  RadialLinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend
);

const ModelMetrics = () => {
  const [metrics, setMetrics] = useState(null);

  useEffect(() => {
    axios
      .get("http://127.0.0.1:5000/metrics")
      .then(res => setMetrics(res.data))
      .catch(err => console.error(err));
  }, []);

  if (!metrics) return <h3>Loading metrics...</h3>;

  /* ---------------- SAFE HELPERS ---------------- */

  const classLabels = Object.keys(metrics.per_class_accuracy || {});

  const getAccuracy = cls =>
    typeof metrics.per_class_accuracy?.[cls] === "number"
      ? metrics.per_class_accuracy[cls]
      : 0;

  const getMetric = (cls, key) => {
    const val = metrics.per_class_metrics?.[cls]?.[key];
    return typeof val === "number" ? val * 100 : 0;
  };



  const barData = {
    labels: classLabels,
    datasets: [
      {
        label: "Per Class Accuracy (%)",
        data: classLabels.map(getAccuracy),
        backgroundColor: "rgba(54, 162, 235, 0.6)"
      }
    ]
  };


  const radarData = {
    labels: classLabels,
    datasets: [
      {
        label: "Precision",
        data: classLabels.map(cls => getMetric(cls, "precision")),
        borderColor: "rgba(255,99,132,1)",
        borderWidth: 2,
        fill: false
      },
      {
        label: "Recall",
        data: classLabels.map(cls => getMetric(cls, "recall")),
        borderColor: "rgba(75,192,192,1)",
        borderWidth: 2,
        fill: false
      },
      {
        label: "F1 Score",
        data: classLabels.map(cls => getMetric(cls, "f1_score")),
        borderColor: "rgba(153,102,255,1)",
        borderWidth: 2,
        fill: false
      }
    ]
  };

  const radarOptions = {
    responsive: true,
    scales: {
      r: {
        min: 0,
        max: 100,
        ticks: { stepSize: 20 }
      }
    }
  };

  

  return (
    <div style={{ padding: "30px" }}>
      <h1>Skin Disease Model Performance</h1>

      <h3>
        Final Accuracy ({metrics.accuracy_label.toUpperCase()}):
        <span style={{ color: "green" }}> {metrics.accuracy}%</span>
      </h3>

      <h4>Total Samples: {metrics.total_samples}</h4>

      <div style={{ marginTop: "40px" }}>
        <h2>Per-Class Accuracy</h2>
        <Bar data={barData} />
      </div>

      <div style={{ marginTop: "40px" }}>
        <h2>Precision / Recall / F1 Score</h2>
        <Radar data={radarData} options={radarOptions} />
      </div>
    </div>
  );
};

export default ModelMetrics;
