import ReactApexChart from "react-apexcharts";

// components
import { BreadcrumbAdmin } from "@/components";

// data
import {
  donutUpdateChart,
  gradientDonutChart,
  imageFillPieChart,
  monochromePieChart,
  patternedDonutChart,
  simpleDonutChart,
  simplePieChart,
} from "./data";

const PieApex = () => {
  return (
    <div className="w-full lg:ps-64">
      <div className="page-content space-y-6 p-6">
        <BreadcrumbAdmin title="Pie" subtitle="Charts" />
        <div className="grid xl:grid-cols-2 gap-6">
          <div className="rounded-lg border border-default-200">
            <div className="p-6">
              <h4 className="card-title mb-4">Simple Pie Chart</h4>
              <div dir="ltr">
                <ReactApexChart
                  className="apex-charts"
                  options={simplePieChart}
                  height={320}
                  series={simplePieChart.series}
                  type="pie"
                />
              </div>
            </div>
          </div>

          <div className="rounded-lg border border-default-200">
            <div className="p-6">
              <h4 className="card-title mb-4">Simple Donut Chart</h4>
              <div dir="ltr">
                <ReactApexChart
                  className="apex-charts"
                  options={simpleDonutChart}
                  height={320}
                  series={simpleDonutChart.series}
                  type="donut"
                />
              </div>
            </div>
          </div>

          <div className="rounded-lg border border-default-200">
            <div className="p-6">
              <h4 className="card-title mb-4">Monochrome Pie Chart</h4>
              <div dir="ltr">
                <ReactApexChart
                  className="apex-charts"
                  options={monochromePieChart}
                  height={320}
                  series={monochromePieChart.series}
                  type="pie"
                />
              </div>
            </div>
          </div>

          <div className="rounded-lg border border-default-200">
            <div className="p-6">
              <h4 className="card-title mb-4">Gradient Donut Chart</h4>
              <div dir="ltr">
                <ReactApexChart
                  className="apex-charts"
                  options={gradientDonutChart}
                  height={320}
                  series={gradientDonutChart.series}
                  type="donut"
                />
              </div>
            </div>
          </div>

          <div className="rounded-lg border border-default-200">
            <div className="p-6">
              <h4 className="card-title mb-4">Patterned Donut Chart</h4>
              <div dir="ltr">
                <ReactApexChart
                  className="apex-charts"
                  options={patternedDonutChart}
                  height={320}
                  series={patternedDonutChart.series}
                  type="donut"
                />
              </div>
            </div>
          </div>

          <div className="rounded-lg border border-default-200">
            <div className="p-6">
              <h4 className="card-title mb-4">Pie Chart with Image fill</h4>
              <div dir="ltr">
                <ReactApexChart
                  className="apex-charts"
                  options={imageFillPieChart}
                  height={320}
                  series={imageFillPieChart.series}
                  type="donut"
                />
              </div>
            </div>
          </div>

          <div className="rounded-lg border border-default-200">
            <div className="p-6">
              <h4 className="card-title mb-4">Donut Update</h4>
              <div dir="ltr">
                <ReactApexChart
                  className="apex-charts"
                  options={donutUpdateChart}
                  height={320}
                  series={donutUpdateChart.series}
                  type="donut"
                />
              </div>
              <div className="text-center mt-2">
                <button
                  className="py-2 px-5 inline-block font-semibold tracking-wide border align-middle duration-500 text-sm text-center btn-sm btn-primary"
                  id="randomize"
                >
                  RANDOMIZE
                </button>
                <button
                  className="py-2 px-5 inline-block font-semibold tracking-wide border align-middle duration-500 text-sm text-center btn-sm btn-primary"
                  id="add"
                >
                  ADD
                </button>
                <button
                  className="py-2 px-5 inline-block font-semibold tracking-wide border align-middle duration-500 text-sm text-center btn-sm btn-primary"
                  id="remove"
                >
                  REMOVE
                </button>
                <button
                  className="py-2 px-5 inline-block font-semibold tracking-wide border align-middle duration-500 text-sm text-center btn-sm btn-primary"
                  id="reset"
                >
                  RESET
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PieApex;
