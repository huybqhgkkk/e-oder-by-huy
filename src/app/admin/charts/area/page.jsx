import ReactApexChart from "react-apexcharts";

// components

// data
import {
  areaNullValuechart,
  irregulartimeSerieschart,
  basicareachart,
  datetimeareachart,
  negativeareachart,
  splineareachart,
  stackedareachart,
} from "./data";
import { BreadcrumbAdmin } from "@/components";

const AreaApex = () => {
  return (
    <div className="w-full lg:ps-64">
      <div className="page-content space-y-6 p-6">
        <BreadcrumbAdmin title="Area" subtitle="Charts" />
        <div className="grid xl:grid-cols-2 gap-6">
          <div className="rounded-lg border border-default-200">
            <div className="p-6">
              <h4 className="card-title mb-4">Basic Area Chart</h4>
              <div dir="ltr">
                <ReactApexChart
                  className="apex-charts"
                  options={basicareachart}
                  height={380}
                  series={basicareachart.series}
                  type="area"
                />
              </div>
            </div>
          </div>
          <div className="rounded-lg border border-default-200">
            <div className="p-6">
              <h4 className="card-title mb-4">Spline Area</h4>
              <div dir="ltr">
                <ReactApexChart
                  className="apex-charts"
                  options={splineareachart}
                  height={380}
                  series={splineareachart.series}
                  type="area"
                />
              </div>
            </div>
          </div>
          <div className="rounded-lg border border-default-200">
            <div className="p-6">
              <h4 className="card-title mb-4">Area Chart - Datetime X-axis</h4>
              <div className="toolbar apex-toolbar">
                <button
                  id="one_month"
                  className="py-2 px-5 inline-block font-semibold tracking-wide border align-middle duration-500 text-sm text-center btn-sm btn-light"
                >
                  1M
                </button>
                <button
                  id="six_months"
                  className="py-2 px-5 inline-block font-semibold tracking-wide border align-middle duration-500 text-sm text-center btn-sm btn-light"
                >
                  6M
                </button>
                <button
                  id="one_year"
                  className="py-2 px-5 inline-block font-semibold tracking-wide border align-middle duration-500 text-sm text-center btn-sm btn-light active"
                >
                  1Y
                </button>
                <button
                  id="ytd"
                  className="py-2 px-5 inline-block font-semibold tracking-wide border align-middle duration-500 text-sm text-center btn-sm btn-light"
                >
                  YTD
                </button>
                <button
                  id="all"
                  className="py-2 px-5 inline-block font-semibold tracking-wide border align-middle duration-500 text-sm text-center btn-sm btn-light"
                >
                  ALL
                </button>
              </div>
              <div dir="ltr">
                <ReactApexChart
                  className="apex-charts"
                  options={datetimeareachart}
                  height={350}
                  series={datetimeareachart.series}
                  type="area"
                />
              </div>
            </div>
          </div>
          <div className="rounded-lg border border-default-200">
            <div className="p-6">
              <h4 className="card-title mb-4">Area with Negative Values</h4>
              <div dir="ltr">
                <ReactApexChart
                  className="apex-charts"
                  options={negativeareachart}
                  height={380}
                  series={negativeareachart.series}
                  type="area"
                />
              </div>
            </div>
          </div>
          <div className="rounded-lg border border-default-200">
            <div className="p-6">
              <h4 className="card-title mb-4">Stacked Area</h4>
              <div dir="ltr">
                <ReactApexChart
                  className="apex-charts"
                  options={stackedareachart}
                  height={420}
                  series={stackedareachart.series}
                  type="area"
                />
              </div>
            </div>
          </div>
          <div className="rounded-lg border border-default-200">
            <div className="p-6">
              <h4 className="card-title mb-4">Irregular TimeSeries</h4>
              <div dir="ltr">
                <ReactApexChart
                  className="apex-charts"
                  options={irregulartimeSerieschart}
                  height={380}
                  series={irregulartimeSerieschart.series}
                  type="area"
                />
              </div>
            </div>
          </div>
          <div className="rounded-lg border border-default-200">
            <div className="p-6">
              <h4 className="card-title mb-4">Area Chart with Null values</h4>
              <div dir="ltr">
                <ReactApexChart
                  className="apex-charts"
                  options={areaNullValuechart}
                  height={380}
                  series={areaNullValuechart.series}
                  type="area"
                />
              </div>
            </div>
          </div>
          {/* end card */}
        </div>
      </div>
    </div>
  );
};

export default AreaApex;
