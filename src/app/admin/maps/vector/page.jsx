// components
import { BreadcrumbAdmin } from "@/components";

// maps
import CanadaVectorMap from "./maps/CanadaVectorMap";
import IraqVectorMap from "./maps/IraqVectorMap";
import ItalyVectorMap from "./maps/ItalyVectorMap";
import RussiaVectorMap from "./maps/RussiaVectorMap";
import SpainVectorMap from "./maps/SpainVectorMap";
import UsaVectorMap from "./maps/UsaVectorMap";
import WorldMap from "./maps/WorldMap";

// data
import {
  canadaMapOpts,
  iraqMapOpts,
  italyMapOpts,
  russiaMapOpts,
  spainMapOpts,
  usaMapOpts,
  worldMapOpts,
} from "./data";

const VectorMaps = () => {
  return (
    <div className="w-full lg:ps-64">
      <div className="page-content space-y-6 p-6">
        <BreadcrumbAdmin title="Vector" subtitle="Maps" />
        <div>
          <div className="border border-default-200 rounded-lg w-full">
            <div className="p-5">
              <h4 className="text-base mb-3 text-default-700">
                World Vector Map
              </h4>

              <div className="mb-3">
                <WorldMap height="420px" width="100%" options={worldMapOpts} />
              </div>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-5 mt-5">
            <div>
              <div className="rounded-lg border border-default-200">
                <div className="p-5">
                  <h4 className="text-base mb-3 text-default-700">
                    USA Vector Map
                  </h4>

                  <div className="mb-3">
                    <UsaVectorMap
                      height="350px"
                      width="100%"
                      options={usaMapOpts}
                    />
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div className="rounded-lg border border-default-200">
                <div className="p-5">
                  <h4 className="text-base mb-3 text-default-700">
                    Russia Vector Map
                  </h4>

                  <div className="mb-3">
                    <RussiaVectorMap
                      height="350px"
                      width="100%"
                      options={russiaMapOpts}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="rounded-lg border border-default-200">
                <div className="p-5">
                  <h4 className="text-base mb-3 text-default-700">
                    Canada Vector Map
                  </h4>

                  <div className="mb-3">
                    <CanadaVectorMap
                      height="350px"
                      width="100%"
                      options={canadaMapOpts}
                    />
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div className="rounded-lg border border-default-200">
                <div className="p-5">
                  <h4 className="text-base mb-3 text-default-700">
                    Italy Vector Map
                  </h4>

                  <div className="mb-3">
                    <ItalyVectorMap
                      height="350px"
                      width="100%"
                      options={italyMapOpts}
                    />
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div className="rounded-lg border border-default-200">
                <div className="p-5">
                  <h4 className="text-base mb-3 text-default-700">
                    Iraq Vector Map
                  </h4>

                  <div className="mb-3">
                    <IraqVectorMap
                      height="350px"
                      width="100%"
                      options={iraqMapOpts}
                    />
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div className="rounded-lg border border-default-200">
                <div className="p-5">
                  <h4 className="text-base mb-3 text-default-700">
                    Spain Vector Map
                  </h4>

                  <div className="mb-3">
                    <SpainVectorMap
                      height="350px"
                      width="100%"
                      options={spainMapOpts}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VectorMaps;
