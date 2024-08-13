import ReactApexChart from "react-apexcharts";

// components
import { BreadcrumbAdmin } from "@/components";

// data
import {
  advancedTimelineChart,
  basicTimelineChart,
  distributedTimelineChart,
  multiSeriesTimelineChart,
  multipleSeriesTimelineChart,
} from "./data";

const TimelineApex = () => {
  return (
    <div className="w-full lg:ps-64">
      <div className="page-content space-y-6 p-6">
        <BreadcrumbAdmin title="Timeline" subtitle="Charts" />
        <div className="grid xl:grid-cols-2 gap-6">
          <div className="rounded-lg border border-default-200">
            <div className="p-6">
              <h4 className="card-title mb-4">Basic Timeline</h4>
              <div dir="ltr">
                <ReactApexChart
                  className="apex-charts"
                  options={basicTimelineChart}
                  height={350}
                  series={basicTimelineChart.series}
                  type="rangeBar"
                />
              </div>
            </div>
          </div>

          <div className="rounded-lg border border-default-200">
            <div className="p-6">
              <h4 className="card-title mb-4">Distributed Timeline </h4>
              <div dir="ltr">
                <ReactApexChart
                  className="apex-charts"
                  options={distributedTimelineChart}
                  height={350}
                  series={distributedTimelineChart.series}
                  type="rangeBar"
                />
              </div>
            </div>
          </div>

          <div className="rounded-lg border border-default-200">
            <div className="p-6">
              <h4 className="card-title mb-4">Multi Series Timeline</h4>
              <div dir="ltr">
                <ReactApexChart
                  className="apex-charts"
                  options={multiSeriesTimelineChart}
                  height={350}
                  series={multiSeriesTimelineChart.series}
                  type="rangeBar"
                />
              </div>
            </div>
          </div>

          <div className="rounded-lg border border-default-200">
            <div className="p-6">
              <h4 className="card-title mb-4">Advanced Timeline</h4>
              <div dir="ltr">
                <ReactApexChart
                  className="apex-charts"
                  options={advancedTimelineChart}
                  height={350}
                  series={advancedTimelineChart.series}
                  type="rangeBar"
                />
              </div>
            </div>
          </div>

          <div className="rounded-lg border border-default-200">
            <div className="p-6">
              <h4 className="card-title mb-4">Multiple Series - Group Rows</h4>
              <div dir="ltr">
                <ReactApexChart
                  className="apex-charts"
                  options={multipleSeriesTimelineChart}
                  height={350}
                  series={multipleSeriesTimelineChart.series}
                  type="rangeBar"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TimelineApex;
