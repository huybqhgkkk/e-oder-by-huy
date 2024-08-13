import ReactApexChart from "react-apexcharts";

// components
import { BreadcrumbAdmin } from "@/components";

// data
import { datetimeScatterChart, scatterChart } from "./data";

const ScatterApex = () => {
  return (
    <div className="w-full lg:ps-64">
      <div className="page-content space-y-6 p-6">
        <BreadcrumbAdmin title="Scatter" subtitle="Scatter" />
        <div className="grid xl:grid-cols-2 gap-6">
          <div className="rounded-lg border border-default-200">
            <div className="p-6">
              <h4 className="card-title mb-4">Scatter (XY) Chart</h4>
              <div dir="ltr">
                <ReactApexChart
                  className="apex-charts"
                  options={scatterChart}
                  height={380}
                  series={scatterChart.series}
                  type="scatter"
                />
              </div>
            </div>
          </div>

          <div className="rounded-lg border border-default-200">
            <div className="p-6">
              <h4 className="card-title mb-4">Scatter Chart - Datetime</h4>
              <div dir="ltr">
                <ReactApexChart
                  className="apex-charts"
                  options={datetimeScatterChart}
                  height={380}
                  series={datetimeScatterChart.series}
                  type="scatter"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScatterApex;
