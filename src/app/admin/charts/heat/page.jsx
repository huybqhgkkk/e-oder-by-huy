import ReactApexChart from "react-apexcharts";

// components
import { BreadcrumbAdmin } from "@/components";

// data
import {
  colorRangeHeatmap,
  multipleSeriesHeatmap,
  roundedHeatmap,
  singleSeriesHeatmap,
} from "./data";

const HeatApex = () => {
  return (
    <div className="w-full lg:ps-64">
      <div className="page-content space-y-6 p-6">
        <BreadcrumbAdmin title="Heatmap" subtitle="Charts" />
        <div className="grid xl:grid-cols-2 gap-6">
          <div className="rounded-lg border border-default-200">
            <div className="p-6">
              <h4 className="card-title">Basic Heatmap - Single Series</h4>
              <div dir="ltr">
                <ReactApexChart
                  className="apex-charts"
                  options={singleSeriesHeatmap}
                  height={380}
                  series={singleSeriesHeatmap.series}
                  type="heatmap"
                />
              </div>
            </div>
          </div>

          <div className="rounded-lg border border-default-200">
            <div className="p-6">
              <h4 className="card-title">Heatmap - Multiple Series</h4>
              <div dir="ltr">
                <ReactApexChart
                  className="apex-charts"
                  options={multipleSeriesHeatmap}
                  height={380}
                  series={multipleSeriesHeatmap.series}
                  type="heatmap"
                />
              </div>
            </div>
          </div>

          <div className="rounded-lg border border-default-200">
            <div className="p-6">
              <h4 className="card-title">Heatmap - Color Range</h4>
              <div dir="ltr">
                <ReactApexChart
                  className="apex-charts"
                  options={colorRangeHeatmap}
                  height={380}
                  series={colorRangeHeatmap.series}
                  type="heatmap"
                />
              </div>
            </div>
          </div>

          <div className="rounded-lg border border-default-200">
            <div className="p-6">
              <h4 className="card-title">Heatmap - Range without Shades</h4>
              <div dir="ltr">
                <ReactApexChart
                  className="apex-charts"
                  options={roundedHeatmap}
                  height={380}
                  series={roundedHeatmap.series}
                  type="heatmap"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeatApex;
