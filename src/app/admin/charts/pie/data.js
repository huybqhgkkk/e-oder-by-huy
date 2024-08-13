// images
import small1 from "@/assets/images/small/img-1.jpg";
import small2 from "@/assets/images/small/img-2.jpg";
import small3 from "@/assets/images/small/img-3.jpg";
import small4 from "@/assets/images/small/img-4.jpg";

// Simple Pie Chart
export const simplePieChart = {
  chart: {
    height: 320,
    type: "pie",
  },
  series: [44, 55, 41, 17, 15],
  labels: ["Series 1", "Series 2", "Series 3", "Series 4", "Series 5"],
  colors: ["#3e60d5", "#6c757d", "#47ad77", "#fa5c7c", "#e3eaef"],
  legend: {
    show: true,
    position: "bottom",
    horizontalAlign: "center",
    // verticalAlign: "middle",
    floating: false,
    fontSize: "14px",
    offsetX: 0,
    offsetY: 7,
  },
  responsive: [
    {
      breakpoint: 600,
      options: {
        chart: {
          height: 240,
        },
        legend: {
          show: false,
        },
      },
    },
  ],
};

// Simple Donut Chart
export const simpleDonutChart = {
  chart: {
    height: 320,
    type: "donut",
  },
  series: [44, 55, 41, 17, 15],
  legend: {
    show: true,
    position: "bottom",
    horizontalAlign: "center",
    // verticalAlign: 'middle',
    floating: false,
    fontSize: "14px",
    offsetX: 0,
    offsetY: 7,
  },
  labels: ["Series 1", "Series 2", "Series 3", "Series 4", "Series 5"],
  colors: ["#39afd1", "#ffbc00", "#313a46", "#fa5c7c", "#47ad77"],
  responsive: [
    {
      breakpoint: 600,
      options: {
        chart: {
          height: 240,
        },
        legend: {
          show: false,
        },
      },
    },
  ],
};

// Monochrome Pie Chart
export const monochromePieChart = {
  chart: {
    height: 320,
    type: "pie",
  },
  series: [25, 15, 44, 55, 41, 17],
  labels: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
  legend: {
    show: true,
    position: "bottom",
    horizontalAlign: "center",
    // verticalAlign: 'middle',
    floating: false,
    fontSize: "14px",
    offsetX: 0,
    offsetY: 7,
  },
  theme: {
    monochrome: {
      enabled: true,
    },
  },
  responsive: [
    {
      breakpoint: 600,
      options: {
        chart: {
          height: 240,
        },
        legend: {
          show: false,
        },
      },
    },
  ],
};

// Gradient Donut Chart
export const gradientDonutChart = {
  chart: {
    height: 320,
    type: "donut",
  },
  series: [44, 55, 41, 17, 15],
  legend: {
    show: true,
    position: "bottom",
    horizontalAlign: "center",
    // verticalAlign: "middle",
    floating: false,
    fontSize: "14px",
    offsetX: 0,
    offsetY: 7,
  },
  labels: ["Series 1", "Series 2", "Series 3", "Series 4", "Series 5"],
  colors: ["#3e60d5", "#6c757d", "#47ad77", "#fa5c7c", "#e3eaef"],
  responsive: [
    {
      breakpoint: 600,
      options: {
        chart: {
          height: 240,
        },
        legend: {
          show: false,
        },
      },
    },
  ],
  fill: {
    type: "gradient",
  },
};

// Patterned Donut Chart
export const patternedDonutChart = {
  chart: {
    height: 320,
    type: "donut",
    dropShadow: {
      enabled: true,
      color: "#111",
      top: -1,
      left: 3,
      blur: 3,
      opacity: 0.2,
    },
  },
  stroke: {
    show: true,
    width: 2,
  },
  series: [44, 55, 41, 17, 15],
  colors: ["#39afd1", "#ffbc00", "#313a46", "#fa5c7c", "#47ad77"],
  labels: ["Comedy", "Action", "SciFi", "Drama", "Horror"],
  dataLabels: {
    dropShadow: {
      blur: 3,
      opacity: 0.8,
    },
  },
  fill: {
    type: "pattern",
    opacity: 1,
    pattern: {
      // enabled: true,
      style: [
        "verticalLines",
        "squares",
        "horizontalLines",
        "circles",
        "slantedLines",
      ],
    },
  },
  states: {
    hover: {
      // enabled: false
    },
  },
  legend: {
    show: true,
    position: "bottom",
    horizontalAlign: "center",
    // verticalAlign: 'middle',
    floating: false,
    fontSize: "14px",
    offsetX: 0,
    offsetY: 7,
  },
  responsive: [
    {
      breakpoint: 600,
      options: {
        chart: {
          height: 240,
        },
        legend: {
          show: false,
        },
      },
    },
  ],
};

// Pie Chart with Image fill
export const imageFillPieChart = {
  chart: {
    height: 320,
    type: "pie",
  },
  labels: ["Series 1", "Series 2", "Series 3", "Series 4"],
  colors: ["#39afd1", "#ffbc00", "#3e60d5", "#47ad77"],
  series: [44, 33, 54, 45],
  fill: {
    type: "image",
    opacity: 0.85,
    image: {
      src: [small1, small2, small3, small4],
      width: 25,
      // imagedHeight: 25
    },
  },
  stroke: {
    width: 4,
  },
  dataLabels: {
    enabled: false,
  },
  legend: {
    show: true,
    position: "bottom",
    horizontalAlign: "center",
    // verticalAlign: 'middle',
    floating: false,
    fontSize: "14px",
    offsetX: 0,
    offsetY: 7,
  },
  responsive: [
    {
      breakpoint: 600,
      options: {
        chart: {
          height: 240,
        },
        legend: {
          show: false,
        },
      },
    },
  ],
};

// Donut Update
export const donutUpdateChart = {
  chart: {
    height: 320,
    type: "donut",
  },
  dataLabels: {
    enabled: false,
  },
  series: [44, 55, 13, 33],
  colors: ["#3e60d5", "#6c757d", "#47ad77", "#fa5c7c"],
  legend: {
    show: true,
    position: "bottom",
    horizontalAlign: "center",
    // verticalAlign: "middle",
    floating: false,
    fontSize: "14px",
    offsetX: 0,
    offsetY: 7,
  },
  responsive: [
    {
      breakpoint: 600,
      options: {
        chart: {
          height: 240,
        },
        legend: {
          show: false,
        },
      },
    },
  ],
};
