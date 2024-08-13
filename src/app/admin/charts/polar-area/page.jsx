import ReactApexChart from "react-apexcharts";

// components
import { BreadcrumbAdmin } from "@/components";

// data
import { basicPolarAreaChart, monochromePolarAreaChart } from "./data";

const PolarAreaApex = () => {
  return (
    <div className="w-full lg:ps-64">
      <div className="page-content space-y-6 p-6">
        <BreadcrumbAdmin title="Polar" subtitle="Charts" />
        <div className="grid xl:grid-cols-2 gap-6">
          <div className="rounded-lg border border-default-200">
            <div className="p-6">
              <h4 className="card-title">Basic Polar Area Chart</h4>
              <div dir="ltr">
                <ReactApexChart
                  className="apex-charts"
                  options={basicPolarAreaChart}
                  height={380}
                  series={basicPolarAreaChart.series}
                  type="polarArea"
                />
              </div>
            </div>
          </div>

          <div className="rounded-lg border border-default-200">
            <div className="p-6">
              <h4 className="card-title">Monochrome Polar Area</h4>
              <div dir="ltr">
                <ReactApexChart
                  className="apex-charts"
                  options={monochromePolarAreaChart}
                  height={380}
                  series={monochromePolarAreaChart.series}
                  type="polarArea"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PolarAreaApex;
