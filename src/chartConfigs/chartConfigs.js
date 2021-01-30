export const historyOptions = {
  lineHeightAnnotation: {
    always: true,
    hover: false,
    lineWeight: 1.5,
  },
  legend: {
    display: false,
  },

  animation: {
    duration: 2000,
  },
  maintainAspectRatio: false,
  responsive: true,
  scales: {
    yAxes: [
      {
        ticks: {
          fontColor: "white",
          fontSize: 12,
          beginAtZero: true,
        },
      },
    ],
    xAxes: [
      {
        type: "time",
        distribution: "linear",
        ticks: {
          fontColor: "white",
          fontSize: 12,
        },
      },
    ],
  },
};
