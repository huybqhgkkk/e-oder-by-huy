import ReactApexChart from "react-apexcharts";

// components
import { BreadcrumbAdmin } from "@/components";

// data
import {
  basicTreemap,
  colorRangeTreemap,
  distributedTreemap,
  multipleSeriesTreemap,
} from "./data";

const TreemapApex = () => {
  return (
    <div className="w-full lg:ps-64">
      <div className="page-content space-y-6 p-6">
        <BreadcrumbAdmin title="Treemap" subtitle="Charts" />
        <div className="grid xl:grid-cols-2 gap-6">
          <div className="rounded-lg border border-default-200">
            <div className="p-6">
              <h4 className="card-title mb-4">Basic Treemap</h4>
              <div dir="ltr">
                <ReactApexChart
                  className="apex-charts"
                  options={basicTreemap}
                  height={350}
                  series={basicTreemap.series}
                  type="treemap"
                />
              </div>
            </div>
          </div>

          <div className="rounded-lg border border-default-200">
            <div className="p-6">
              <h4 className="card-title mb-4">Treemap Multiple Series</h4>
              <div dir="ltr">
                <ReactApexChart
                  className="apex-charts"
                  options={multipleSeriesTreemap}
                  height={350}
                  series={multipleSeriesTreemap.series}
                  type="treemap"
                />
              </div>
            </div>
          </div>

          <div className="rounded-lg border border-default-200">
            <div className="p-6">
              <h4 className="card-title mb-4">Distributed Treemap</h4>
              <div dir="ltr">
                <ReactApexChart
                  className="apex-charts"
                  options={distributedTreemap}
                  height={350}
                  series={distributedTreemap.series}
                  type="treemap"
                />
              </div>
            </div>
          </div>

          <div className="rounded-lg border border-default-200">
            <div className="p-6">
              <h4 className="card-title mb-4">Color Range Treemap</h4>
              <div dir="ltr">
                <ReactApexChart
                  className="apex-charts"
                  options={colorRangeTreemap}
                  height={350}
                  series={colorRangeTreemap.series}
                  type="treemap"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TreemapApex;
