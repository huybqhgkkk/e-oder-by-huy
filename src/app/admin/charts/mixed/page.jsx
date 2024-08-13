import ReactApexChart from "react-apexcharts";

// components
import { BreadcrumbAdmin } from "@/components";

// data
import {
  lineAreaChart,
  lineColumnAreaChart,
  lineColumnChart,
  multipleYAxisChart,
} from "./data";

const MixedApex = () => {
  return (
    <div className="w-full lg:ps-64">
      <div className="page-content space-y-6 p-6">
        <BreadcrumbAdmin title="Mixed" subtitle="Charts" />
        <div className="grid xl:grid-cols-2 gap-6">
          <div className="rounded-lg border border-default-200">
            <div className="p-6">
              <h4 className="card-title">Line &amp; Column Chart</h4>
              <div dir="ltr">
                <ReactApexChart
                  className="apex-charts"
                  options={lineColumnChart}
                  height={380}
                  series={lineColumnChart.series}
                  type="line"
                />
              </div>
            </div>
          </div>

          <div className="rounded-lg border border-default-200">
            <div className="p-6">
              <h4 className="card-title">Multiple Y-Axis Chart</h4>
              <div dir="ltr">
                <ReactApexChart
                  className="apex-charts"
                  options={multipleYAxisChart}
                  height={380}
                  series={multipleYAxisChart.series}
                  type="line"
                />
              </div>
            </div>
          </div>

          <div className="rounded-lg border border-default-200">
            <div className="p-6">
              <h4 className="card-title">Line &amp; Area Chart</h4>
              <div dir="ltr">
                <ReactApexChart
                  className="apex-charts"
                  options={lineAreaChart}
                  height={380}
                  series={lineAreaChart.series}
                  type="line"
                />
              </div>
            </div>
          </div>

          <div className="rounded-lg border border-default-200">
            <div className="p-6">
              <h4 className="card-title">Line, Column &amp; Area Chart</h4>
              <div dir="ltr">
                <ReactApexChart
                  className="apex-charts"
                  options={lineColumnAreaChart}
                  height={380}
                  series={lineColumnAreaChart.series}
                  type="line"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MixedApex;
