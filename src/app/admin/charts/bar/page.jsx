import ReactApexChart from "react-apexcharts";

// components
import { BreadcrumbAdmin } from "@/components";

// data
import {
  barNegativeValueChart,
  basicBarChart,
  customDataLabelsBarChart,
  fullStackedBarChart,
  groupedBarChart,
  imageFillBarChart,
  markersBarChart,
  patternedBarChart,
  reversedBarChart,
  stackedBarChart,
} from "./data";

const BarApex = () => {
  return (
    <div className="w-full lg:ps-64">
      <div className="page-content space-y-6 p-6">
        <BreadcrumbAdmin title="Bar" subtitle="Charts" />
        <div className="grid xl:grid-cols-2 gap-6">
          <div className="rounded-lg border border-default-200">
            <div className="p-6">
              <h4 className="card-title mb-4">Basic Bar Chart</h4>
              <div dir="ltr">
                <ReactApexChart
                  className="apex-charts"
                  options={basicBarChart}
                  height={380}
                  series={basicBarChart.series}
                  type="bar"
                />
              </div>
            </div>
          </div>

          <div className="rounded-lg border border-default-200">
            <div className="p-6">
              <h4 className="card-title mb-4">Grouped Bar Chart</h4>
              <div dir="ltr">
                <ReactApexChart
                  className="apex-charts"
                  options={groupedBarChart}
                  height={380}
                  series={groupedBarChart.series}
                  type="bar"
                />
              </div>
            </div>
          </div>

          <div className="rounded-lg border border-default-200">
            <div className="p-6">
              <h4 className="card-title mb-4">Stacked Bar Chart</h4>
              <div dir="ltr">
                <ReactApexChart
                  className="apex-charts"
                  options={stackedBarChart}
                  height={380}
                  series={stackedBarChart.series}
                  type="bar"
                />
              </div>
            </div>
          </div>

          <div className="rounded-lg border border-default-200">
            <div className="p-6">
              <h4 className="card-title mb-4">100% Stacked Bar Chart</h4>
              <div dir="ltr">
                <ReactApexChart
                  className="apex-charts"
                  options={fullStackedBarChart}
                  height={380}
                  series={fullStackedBarChart.series}
                  type="bar"
                />
              </div>
            </div>
          </div>

          <div className="rounded-lg border border-default-200">
            <div className="p-6">
              <h4 className="card-title mb-4">Bar with Negative Values</h4>
              <div dir="ltr">
                <ReactApexChart
                  className="apex-charts"
                  options={barNegativeValueChart}
                  height={380}
                  series={barNegativeValueChart.series}
                  type="bar"
                />
              </div>
            </div>
          </div>

          <div className="rounded-lg border border-default-200">
            <div className="p-6">
              <h4 className="card-title mb-4">Reversed Bar Chart</h4>
              <div dir="ltr">
                <ReactApexChart
                  className="apex-charts"
                  options={reversedBarChart}
                  height={380}
                  series={reversedBarChart.series}
                  type="bar"
                />
              </div>
            </div>
          </div>

          <div className="rounded-lg border border-default-200">
            <div className="p-6">
              <h4 className="card-title mb-4">Bar with Image Fill</h4>
              <div dir="ltr">
                <ReactApexChart
                  className="apex-charts"
                  options={imageFillBarChart}
                  height={380}
                  series={imageFillBarChart.series}
                  type="bar"
                />
              </div>
            </div>
          </div>

          <div className="rounded-lg border border-default-200">
            <div className="p-6">
              <h4 className="card-title mb-4">Custom DataLabels Bar</h4>
              <div dir="ltr">
                <ReactApexChart
                  className="apex-charts"
                  options={customDataLabelsBarChart}
                  height={380}
                  series={customDataLabelsBarChart.series}
                  type="bar"
                />
              </div>
            </div>
          </div>

          <div className="rounded-lg border border-default-200">
            <div className="p-6">
              <h4 className="card-title mb-4">Patterned Bar Chart</h4>
              <div dir="ltr">
                <ReactApexChart
                  className="apex-charts"
                  options={patternedBarChart}
                  height={380}
                  series={patternedBarChart.series}
                  type="bar"
                />
              </div>
            </div>
          </div>

          <div className="rounded-lg border border-default-200">
            <div className="p-6">
              <h4 className="card-title mb-4">Bar with Markers</h4>
              <div dir="ltr">
                <ReactApexChart
                  className="apex-charts"
                  options={markersBarChart}
                  height={380}
                  series={markersBarChart.series}
                  type="bar"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BarApex;
