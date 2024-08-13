import { useState } from "react";
import ReactApexChart from "react-apexcharts";

// components
import { BreadcrumbAdmin } from "@/components";

// data
import {
  basicRadarChart,
  fillPolygonRadarChart,
  multipleSeriesRadarChart,
} from "./data";

const RadarApex = () => {
  const [data, setData] = useState([
    {
      name: "Series 1",
      data: [80, 50, 30, 40, 100, 20],
    },
    {
      name: "Series 2",
      data: [20, 30, 40, 80, 20, 80],
    },
    {
      name: "Series 3",
      data: [44, 76, 78, 13, 43, 10],
    },
  ]);

  function update() {
    function randomSeries() {
      const arr = [];
      for (let i = 0; i < 6; i++) {
        arr.push(Math.floor(Math.random() * 100));
      }
      return arr;
    }

    setData([
      {
        name: "Series 1",
        data: randomSeries(),
      },
      {
        name: "Series 2",
        data: randomSeries(),
      },
      {
        name: "Series 3",
        data: randomSeries(),
      },
    ]);
  }

  return (
    <div className="w-full lg:ps-64">
      <div className="page-content space-y-6 p-6">
        <BreadcrumbAdmin title="Radar" subtitle="Charts" />
        <div className="grid xl:grid-cols-2 gap-6">
          <div className="rounded-lg border border-default-200">
            <div className="p-6">
              <h4 className="card-title mb-3">Basic Radar Chart</h4>
              <div dir="ltr">
                <ReactApexChart
                  className="apex-charts"
                  options={basicRadarChart}
                  height={350}
                  series={basicRadarChart.series}
                  type="radar"
                />
              </div>
            </div>
          </div>

          <div className="rounded-lg border border-default-200">
            <div className="p-6">
              <h4 className="card-title mb-3">Radar with Polygon-fill</h4>
              <div dir="ltr">
                <ReactApexChart
                  className="apex-charts"
                  options={fillPolygonRadarChart}
                  height={350}
                  series={fillPolygonRadarChart.series}
                  type="radar"
                />
              </div>
            </div>
          </div>

          <div className="rounded-lg border border-default-200">
            <div className="p-6">
              <h4 className="card-title mb-3">Radar – Multiple Series</h4>
              <div dir="ltr">
                <ReactApexChart
                  className="apex-charts"
                  options={multipleSeriesRadarChart}
                  height={350}
                  series={data}
                  type="radar"
                />
                <div className="text-center mt-2">
                  <button
                    onClick={update}
                    className="py-2 px-5 inline-block text-white rounded-lg font-semibold tracking-wide border align-middle duration-500 text-sm text-center btn-sm bg-primary"
                  >
                    Update
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RadarApex;
