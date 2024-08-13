import ReactApexChart from "react-apexcharts";

// components
import { BreadcrumbAdmin } from "@/components";

// data
import {
  categoryCandlestickChart,
  lineCandlestickChart,
  simpleCandlestickChart,
} from "./data";

const CandleStickApex = () => {
  return (
    <div className="w-full lg:ps-64">
      <div className="page-content space-y-6 p-6">
        <BreadcrumbAdmin title="Candlestick" subtitle="Charts" />
        <div className="grid xl:grid-cols-2 gap-6">
          <div className="rounded-lg border border-default-200">
            <div className="p-6">
              <h4 className="card-title">Simple Candlestick Chart</h4>
              <div dir="ltr">
                <ReactApexChart
                  className="apex-charts"
                  options={simpleCandlestickChart}
                  height={380}
                  series={simpleCandlestickChart.series}
                  type="candlestick"
                />
              </div>
            </div>
          </div>

          <div className="rounded-lg border border-default-200">
            <div className="p-6">
              <h4 className="card-title mb-3">Category X-Axis</h4>
              <div dir="ltr">
                <ReactApexChart
                  className="apex-charts"
                  options={categoryCandlestickChart}
                  height={380}
                  series={categoryCandlestickChart.series}
                  type="candlestick"
                />
              </div>
            </div>
          </div>

          <div className="rounded-lg border border-default-200">
            <div className="p-6">
              <h4 className="card-title mb-3">Candlestick with Line</h4>
              <div dir="ltr">
                <ReactApexChart
                  className="apex-charts"
                  options={lineCandlestickChart}
                  height={380}
                  series={lineCandlestickChart.series}
                  type="candlestick"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CandleStickApex;
