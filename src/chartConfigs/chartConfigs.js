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
          beginAtZero: false,
        },
        gridLines: {
          display: true,
          color: "rgba(107, 114, 128)",
          lineWidth: 1,
        },
      },
    ],
    xAxes: [
      {
        type: "time",
        time: {
          displayFormats: {
            hour: "HH:mm",
            month: " MMM YY",
          },
        },
        distribution: "linear",
        ticks: {
          fontColor: "white",
          fontSize: 12,
        },
        gridLines: {
          display: true,
          color: "white",
          lineWidth: 1,
          drawOnChartArea: false,
        },
      },
    ],
  },
};
