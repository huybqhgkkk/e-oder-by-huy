import { colorVariants } from "@/common";

const Spinners = () => {
  return (
    <div className="rounded-lg border border-default-200">
      <div className="p-6">
        <h2 className="font-medium text-base text-default-600 mb-4">
          Spinners
        </h2>
        <div className="grid 2xl:grid-cols-2 gap-6">
          <div className="w-full">
            <h4 className="mb-1 text-default-700">Border spinner</h4>
            <p className="text-default-600 mb-6">
              Use the border spinners for a lightweight loading indicator.
            </p>
            <div className="flex flex-wrap gap-6">
              {colorVariants.map((color, idx) => {
                return (
                  <div
                    key={idx}
                    className={`animate-spin w-8 h-8 border-[3px] border-current border-t-transparent text-${color} rounded-full`}
                    role="status"
                    aria-label="loading"
                  >
                    <span className="sr-only">Loading...</span>
                  </div>
                );
              })}
              <div
                className="animate-spin w-8 h-8 border-[3px] border-current border-t-transparent text-light rounded-full"
                role="status"
                aria-label="loading"
              >
                <span className="sr-only">Loading...</span>
              </div>
              <div
                className="animate-spin w-8 h-8 border-[3px] border-current border-t-transparent text-dark rounded-full"
                role="status"
                aria-label="loading"
              >
                <span className="sr-only">Loading...</span>
              </div>
            </div>
          </div>
          <div className="w-full">
            <h4 className="mb-1 text-default-700">Growing spinner</h4>
            <p className="text-default-600 mb-6">
              If you don’t fancy a border spinner, switch to the grow spinner.
              While it doesn’t technically spin, it does repeatedly grow!
            </p>
            <div className="flex flex-wrap gap-10">
              {colorVariants.map((color, idx) => {
                return (
                  <div key={idx} className="size-5">
                    <span
                      className={`animate-ping inline-flex h-full w-full rounded-full bg-${color}/75`}
                    />
                  </div>
                );
              })}
              <div className="h-5 w-5">
                <span className="animate-ping inline-flex h-full w-full rounded-full bg-light/75" />
              </div>
              <div className="h-5 w-5">
                <span className="animate-ping inline-flex h-full w-full rounded-full bg-dark/75" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Spinners;
