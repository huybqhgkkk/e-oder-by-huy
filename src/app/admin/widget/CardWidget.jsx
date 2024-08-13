import ReactApexCharts from "react-apexcharts";

// icons
import { LuArrowDown, LuArrowUp } from "react-icons/lu";

const CardWidget = ({ text, amount, price, color, chartColor, percentage }) => {
  const viewsApexOpts = {
    chart: {
      type: "area",
      height: 45,
      width: 90,
      sparkline: {
        enabled: true,
      },
    },
    series: [
      {
        data: [25, 66, 41, 85, 63, 25, 44, 12, 36, 9, 54],
      },
    ],
    stroke: {
      width: 2,
      curve: "smooth",
    },
    markers: {
      size: 0,
    },
    colors: [chartColor],
    tooltip: {
      fixed: {
        enabled: false,
      },
      x: {
        show: false,
      },
      y: {},
      marker: {
        show: false,
      },
    },
    fill: {
      type: "gradient",
      gradient: {
        type: "vertical",
        shadeIntensity: 1,
        inverseColors: false,
        opacityFrom: 0.45,
        opacityTo: 0.05,
        stops: [45, 100],
      },
    },
  };

  return (
    <div className="rounded-lg border border-default-200">
      <div className="p-5">
        <div className="flex">
          <div className="flex-grow">
            <span className="text-default-600 uppercase font-medium">
              {text}
            </span>
            <h3 className="text-2xl text-default-700">
              {price ? `$${price}` : amount}
            </h3>
          </div>
          <div className="text-center flex-shrink-0">
            <ReactApexCharts
              className="apex-charts"
              options={viewsApexOpts}
              series={viewsApexOpts.series}
              type="area"
              height={45}
              width={90}
            />
            <span className={`text-${color} fw-bold fs-13 flex`}>
              {color === "success" ? (
                <LuArrowUp size={14} className="mt-1 me-1" />
              ) : (
                <LuArrowDown size={14} className="mt-1 me-1" />
              )}
              {percentage}%
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardWidget;
