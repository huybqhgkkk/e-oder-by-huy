import ReactApexChart from "react-apexcharts";

// components
import { BreadcrumbAdmin } from "@/components";

// data
import {
  basicBoxplotChart,
  horizontalBoxplotChart,
  scatterBoxplotChart,
} from "./data";

const BoxPlotApex = () => {
  return (
    <div className="w-full lg:ps-64">
      <div className="page-content space-y-6 p-6">
        <BreadcrumbAdmin title="Boxplot" subtitle="Charts" />
        <div className="grid xl:grid-cols-2 gap-6">
          <div className="rounded-lg border border-default-200">
            <div className="p-6">
              <h4 className="card-title mb-4">Basic Boxplot</h4>
              <div dir="ltr">
                <ReactApexChart
                  className="apex-charts"
                  options={basicBoxplotChart}
                  height={350}
                  series={basicBoxplotChart.series}
                  type="boxPlot"
                />
              </div>
            </div>
          </div>

          <div className="rounded-lg border border-default-200">
            <div className="p-6">
              <h4 className="card-title mb-4">Scatter Boxplot </h4>
              <div dir="ltr">
                <ReactApexChart
                  className="apex-charts"
                  options={scatterBoxplotChart}
                  height={350}
                  series={scatterBoxplotChart.series}
                  type="boxPlot"
                />
              </div>
            </div>
          </div>

          <div className="rounded-lg border border-default-200">
            <div className="p-6">
              <h4 className="card-title mb-4">Horizontal BoxPlot</h4>
              <div dir="ltr">
                <ReactApexChart
                  className="apex-charts"
                  options={horizontalBoxplotChart}
                  height={350}
                  series={horizontalBoxplotChart.series}
                  type="boxPlot"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BoxPlotApex;
