import ReactApexCharts from "react-apexcharts";

const ChartWidget = ({ text, amount, price, chartColor }) => {
  const labelsSales = [];
  for (let i = 1; i <= 10; i++) {
    labelsSales.push("2018-09-" + i);
  }

  const viewsApexOpts = {
    chart: {
      type: "area",
      height: 160,
      sparkline: {
        enabled: true,
      },
    },
    stroke: {
      width: 3,
      curve: "smooth",
    },
    fill: {
      opacity: 1,
    },
    series: [
      {
        name: "Data",
        data: [47, 45, 54, 38, 56, 24, 65, 31, 37, 39],
      },
    ],
    xaxis: {
      type: "datetime",
    },
    yaxis: {
      min: 0,
    },
    colors: [chartColor],
    labels: labelsSales,
    title: {
      text: price ? price : amount,
      offsetX: 5,
      offsetY: 10,
      margin: 0,
      style: {
        fontSize: "24px",
      },
    },
    subtitle: {
      text: text,
      offsetX: 5,
      offsetY: 45,
      margin: 0,
      style: {
        fontSize: "16px",
      },
    },
  };

  return (
    <>
      <div className="rounded-lg border border-default-200">
        <div className="p-0">
          <ReactApexCharts
            className="apex-charts"
            options={viewsApexOpts}
            series={viewsApexOpts.series}
            type="area"
            height={160}
            width={520}
          />
        </div>
      </div>
    </>
  );
};

export default ChartWidget;
