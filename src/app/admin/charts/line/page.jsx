import ReactApexChart from "react-apexcharts";

// components
import { BreadcrumbAdmin } from "@/components";

// data
import {
  annotationsLineChart,
  brushLineChart,
  brushLineChart2,
  dashedLineChart,
  dataLabelsLineChart,
  gradientLineChart,
  nullLineChart,
  simpleLineChart,
  stepLineChart,
  syncingLineChart,
  syncingLineChart2,
  zoomableTimeseriesChart,
} from "./data";

const LineApex = () => {
  return (
    <div className="w-full lg:ps-64">
      <div className="page-content space-y-6 p-6">
        <BreadcrumbAdmin title="Line" subtitle="Charts" />
        <div className="grid xl:grid-cols-2 gap-6">
          <div className="rounded-lg border border-default-200">
            <div className="p-6">
              <h4 className="card-title">Simple line chart</h4>
              <div dir="ltr">
                <ReactApexChart
                  className="apex-charts"
                  options={simpleLineChart}
                  height={380}
                  series={simpleLineChart.series}
                  type="line"
                />
              </div>
            </div>
          </div>

          <div className="rounded-lg border border-default-200">
            <div className="p-6">
              <h4 className="card-title">Line with Data Labels</h4>
              <div dir="ltr">
                <ReactApexChart
                  className="apex-charts"
                  options={dataLabelsLineChart}
                  height={380}
                  series={dataLabelsLineChart.series}
                  type="line"
                />
              </div>
            </div>
          </div>

          <div className="rounded-lg border border-default-200">
            <div className="p-6">
              <h4 className="card-title">Zoomable Timeseries</h4>
              <div dir="ltr">
                <ReactApexChart
                  className="apex-charts"
                  options={zoomableTimeseriesChart}
                  height={380}
                  series={zoomableTimeseriesChart.series}
                  type="line"
                />
              </div>
            </div>
          </div>

          <div className="rounded-lg border border-default-200">
            <div className="p-6">
              <h4 className="card-title">Line Chart with Annotations</h4>
              <div dir="ltr">
                <ReactApexChart
                  className="apex-charts"
                  options={annotationsLineChart}
                  height={380}
                  series={annotationsLineChart.series}
                  type="line"
                />
              </div>
            </div>
          </div>

          <div className="rounded-lg border border-default-200">
            <div className="p-6">
              <h4 className="card-title">Syncing charts</h4>
              <ReactApexChart
                className="apex-charts"
                options={syncingLineChart}
                height={200}
                series={syncingLineChart.series}
                type="line"
              />
              <div dir="ltr">
                <ReactApexChart
                  className="apex-charts"
                  options={syncingLineChart2}
                  height={160}
                  series={syncingLineChart2.series}
                  type="line"
                />
              </div>
            </div>
          </div>

          <div className="rounded-lg border border-default-200">
            <div className="p-6">
              <h4 className="card-title">Gradient Line Chart</h4>
              <div dir="ltr">
                <ReactApexChart
                  className="apex-charts"
                  options={gradientLineChart}
                  height={380}
                  series={gradientLineChart.series}
                  type="line"
                />
              </div>
            </div>
          </div>

          <div className="rounded-lg border border-default-200">
            <div className="p-6">
              <h4 className="card-title">Missing / Null values</h4>
              <div dir="ltr">
                <ReactApexChart
                  className="apex-charts"
                  options={nullLineChart}
                  height={380}
                  series={nullLineChart.series}
                  type="line"
                />
              </div>
            </div>
          </div>

          <div className="rounded-lg border border-default-200">
            <div className="p-6">
              <h4 className="card-title">Dashed Line Chart</h4>
              <div dir="ltr">
                <ReactApexChart
                  className="apex-charts"
                  options={dashedLineChart}
                  height={380}
                  series={dashedLineChart.series}
                  type="line"
                />
              </div>
            </div>
          </div>

          <div className="rounded-lg border border-default-200">
            <div className="p-6">
              <h4 className="card-title">Stepline Chart</h4>
              <div dir="ltr">
                <ReactApexChart
                  className="apex-charts"
                  options={stepLineChart}
                  height={380}
                  series={stepLineChart.series}
                  type="line"
                />
              </div>
            </div>
          </div>

          <div className="rounded-lg border border-default-200">
            <div className="p-6">
              <h4 className="card-title">Brush Chart</h4>
              <div dir="ltr">
                <ReactApexChart
                  className="apex-charts"
                  options={brushLineChart}
                  height={230}
                  series={brushLineChart.series}
                  type="line"
                />
                {/* <div id="chart-line2" data-colors="#3e60d5" /> */}
                <ReactApexChart
                  className="apex-charts"
                  options={brushLineChart2}
                  height={130}
                  series={brushLineChart2.series}
                  type="line"
                />
                {/* <div id="chart-line" data-colors="#39afd1" /> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LineApex;
