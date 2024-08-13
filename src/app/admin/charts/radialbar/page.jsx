import ReactApexChart from "react-apexcharts";

// components
import { BreadcrumbAdmin } from "@/components";

// data
import {
  basicRadialBarChart,
  customAngleRadialBarChart,
  gradientRadialBarChart,
  imageRadialBarChart,
  multipleRadialBarChart,
  semiCircleRadialBarChart,
  strokedRadialBarChart,
} from "./data";

const RadialbarApex = () => {
  return (
    <div className="w-full lg:ps-64">
      <div className="page-content space-y-6 p-6">
        <BreadcrumbAdmin title="Radialbar" subtitle="Charts" />
        <div className="grid xl:grid-cols-2 gap-6">
          <div className="rounded-lg border border-default-200">
            <div className="p-6">
              <h4 className="card-title mb-4">Basic RadialBar Chart</h4>
              <div dir="ltr">
                <ReactApexChart
                  className="apex-charts"
                  options={basicRadialBarChart}
                  height={320}
                  series={basicRadialBarChart.series}
                  type="radialBar"
                />
              </div>
            </div>
          </div>

          <div className="rounded-lg border border-default-200">
            <div className="p-6">
              <h4 className="card-title mb-4">Multiple RadialBars</h4>
              <div dir="ltr">
                <ReactApexChart
                  className="apex-charts"
                  options={multipleRadialBarChart}
                  height={320}
                  series={multipleRadialBarChart.series}
                  type="radialBar"
                />
              </div>
            </div>
          </div>

          <div className="rounded-lg border border-default-200">
            <div className="p-6">
              <h4 className="card-title mb-4">Circle Chart - Custom Angle</h4>
              <div className="text-center" dir="ltr">
                <ReactApexChart
                  className="apex-charts"
                  options={customAngleRadialBarChart}
                  height={380}
                  series={customAngleRadialBarChart.series}
                  type="radialBar"
                />
              </div>
            </div>
          </div>

          <div className="rounded-lg border border-default-200">
            <div className="p-6">
              <h4 className="card-title mb-4">Circle Chart with Image</h4>
              <div dir="ltr">
                <ReactApexChart
                  className="apex-charts"
                  options={imageRadialBarChart}
                  height={360}
                  series={imageRadialBarChart.series}
                  type="radialBar"
                />
              </div>
            </div>
          </div>

          <div className="rounded-lg border border-default-200">
            <div className="p-6">
              <h4 className="card-title mb-4">Stroked Circular Guage</h4>
              <div dir="ltr">
                <ReactApexChart
                  className="apex-charts"
                  options={strokedRadialBarChart}
                  height={380}
                  series={strokedRadialBarChart.series}
                  type="radialBar"
                />
              </div>
            </div>
          </div>

          <div className="rounded-lg border border-default-200">
            <div className="p-6">
              <h4 className="card-title mb-4">Gradient Circular Chart</h4>
              <div dir="ltr">
                <ReactApexChart
                  className="apex-charts"
                  options={gradientRadialBarChart}
                  height={330}
                  series={gradientRadialBarChart.series}
                  type="radialBar"
                />
              </div>
            </div>
          </div>

          <div className="rounded-lg border border-default-200">
            <div className="p-6">
              <h4 className="card-title mb-4">Semi Circle Gauge</h4>
              <div dir="ltr">
                <ReactApexChart
                  className="apex-charts"
                  options={semiCircleRadialBarChart}
                  height={625}
                  series={semiCircleRadialBarChart.series}
                  type="radialBar"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RadialbarApex;
