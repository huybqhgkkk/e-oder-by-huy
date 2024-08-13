import ReactApexChart from "react-apexcharts";

// components
import { BreadcrumbAdmin } from "@/components";

// data
import { d3BubleChart, simpleBubleChart } from "./data";

const BubbleApex = () => {
  return (
    <div className="w-full lg:ps-64">
      <div className="page-content space-y-6 p-6">
        <BreadcrumbAdmin title="Bubble" subtitle="Charts" />
        <div className="grid xl:grid-cols-2 gap-6">
          <div className="rounded-lg border border-default-200">
            <div className="p-6">
              <h4 className="card-title">Simple Bubble Chart</h4>
              <div dir="ltr">
                <ReactApexChart
                  className="apex-charts"
                  options={simpleBubleChart}
                  height={380}
                  series={simpleBubleChart.series}
                  type="bubble"
                />
              </div>
            </div>
          </div>

          <div className="rounded-lg border border-default-200">
            <div className="p-6">
              <h4 className="card-title">3D Bubble Chart</h4>
              <div dir="ltr">
                <ReactApexChart
                  className="apex-charts"
                  options={d3BubleChart}
                  height={380}
                  series={d3BubleChart.series}
                  type="bubble"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BubbleApex;
