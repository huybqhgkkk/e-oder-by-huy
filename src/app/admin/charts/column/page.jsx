import ReactApexChart from "react-apexcharts";

// components
import { BreadcrumbAdmin } from "@/components";
import DynamicLoaded from "./DynamicLoaded";

// data
import {
  basicColumnChart,
  datalabelsColumnChart,
  distributedColumnChart,
  fullStackedColumnChart,
  groupLabelColumnChart,
  labelsColumnChart,
  markersColumnChart,
  negativeValuesColumnChart,
  rangeColumnChart,
  stackedColumnChart,
} from "./data";

const ColumnApex = () => {
  return (
    <div className="w-full lg:ps-64">
      <div className="page-content space-y-6 p-6">
        <BreadcrumbAdmin title="Column" subtitle="Charts" />
        <div className="grid xl:grid-cols-2 gap-6">
          <div className="rounded-lg border border-default-200">
            <div className="p-6">
              <h4 className="card-title">Basic Column Chart</h4>
              <div dir="ltr">
                <ReactApexChart
                  className="apex-charts"
                  options={basicColumnChart}
                  height={396}
                  series={basicColumnChart.series}
                  type="bar"
                />
              </div>
            </div>
          </div>

          <div className="rounded-lg border border-default-200">
            <div className="p-6">
              <h4 className="card-title mb-3">Column Chart with Datalabels</h4>
              <div dir="ltr">
                <ReactApexChart
                  className="apex-charts"
                  options={datalabelsColumnChart}
                  height={380}
                  series={datalabelsColumnChart.series}
                  type="bar"
                />
              </div>
            </div>
          </div>

          <div className="rounded-lg border border-default-200">
            <div className="p-6">
              <h4 className="card-title">Stacked Column Chart</h4>
              <div dir="ltr">
                <ReactApexChart
                  className="apex-charts"
                  options={stackedColumnChart}
                  height={380}
                  series={stackedColumnChart.series}
                  type="bar"
                />
              </div>
            </div>
          </div>

          <div className="rounded-lg border border-default-200">
            <div className="p-6">
              <h4 className="card-title">100% Stacked Column Chart</h4>
              <div dir="ltr">
                <ReactApexChart
                  className="apex-charts"
                  options={fullStackedColumnChart}
                  height={380}
                  series={fullStackedColumnChart.series}
                  type="bar"
                />
              </div>
            </div>
          </div>

          <div className="rounded-lg border border-default-200">
            <div className="p-6">
              <h4 className="card-title">Column with Markers</h4>
              <div dir="ltr">
                <ReactApexChart
                  className="apex-charts"
                  options={markersColumnChart}
                  height={380}
                  series={markersColumnChart.series}
                  type="bar"
                />
              </div>
            </div>
          </div>

          <div className="rounded-lg border border-default-200">
            <div className="p-6">
              <h4 className="card-title">Column with Group Label</h4>
              <div dir="ltr">
                <ReactApexChart
                  className="apex-charts"
                  options={groupLabelColumnChart}
                  height={380}
                  series={groupLabelColumnChart.series}
                  type="bar"
                />
              </div>
            </div>
          </div>

          <div className="rounded-lg border border-default-200">
            <div className="p-6">
              <h4 className="card-title">
                Column Chart with rotated labels &amp; Annotations
              </h4>
              <div dir="ltr">
                <ReactApexChart
                  className="apex-charts"
                  options={labelsColumnChart}
                  height={380}
                  series={labelsColumnChart.series}
                  type="bar"
                />
              </div>
            </div>
          </div>

          <div className="rounded-lg border border-default-200">
            <div className="p-6">
              <h4 className="card-title">Column Chart with negative values</h4>
              <div dir="ltr">
                <ReactApexChart
                  className="apex-charts"
                  options={negativeValuesColumnChart}
                  height={380}
                  series={negativeValuesColumnChart.series}
                  type="bar"
                />
              </div>
            </div>
          </div>

          <div className="rounded-lg border border-default-200">
            <div className="p-6">
              <h4 className="card-title">Distributed Column Chart</h4>
              <div dir="ltr">
                <ReactApexChart
                  className="apex-charts"
                  options={distributedColumnChart}
                  height={380}
                  series={distributedColumnChart.series}
                  type="bar"
                />
              </div>
            </div>
          </div>

          <div className="rounded-lg border border-default-200">
            <div className="p-6">
              <h4 className="card-title">Range Column Chart</h4>
              <div dir="ltr">
                <ReactApexChart
                  className="apex-charts"
                  options={rangeColumnChart}
                  height={380}
                  series={rangeColumnChart.series}
                  type="rangeBar"
                />
              </div>
            </div>
          </div>

          <div className="xl:col-span-2">
            <div className="rounded-lg border border-default-200">
              <div className="p-6">
                <div className="flex items-center justify-between">
                  <h4 className="card-title mb-4">Dynamic Loaded Chart</h4>
                  <div className="flex-shrink-0">
                    <select id="model" className="form-select form-select-sm">
                      <option value="iphone5">iPhone 5</option>
                      <option value="iphone6">iPhone 6</option>
                      <option value="iphone7">iPhone 7</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="p-6 pt-0">
                <h4 className="card-title" />
                <div dir="ltr">
                  <DynamicLoaded />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ColumnApex;
