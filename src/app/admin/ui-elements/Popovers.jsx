import { Link } from "react-router-dom";

const Popovers = () => {
  return (
    <div className="grid lg:grid-cols-2 gap-6">
      <div className="rounded-lg border border-default-200">
        <div className="p-6">
          <h4 className="font-medium text-base text-default-600 mb-4">
            Popovers
          </h4>
          <p className="text-gray-500 mb-4 dark:text-gray-400">
            Add small overlays of content, like those on the iPad, to any
            element for housing secondary information.
          </p>
          <div className="flex flex-wrap gap-3">
            <div className="hs-tooltip inline-block [--trigger:click] [--placement:top]">
              <Link className="hs-tooltip-toggle block text-center" to="">
                <div className="py-2 inline-flex font-semibold tracking-wide rounded-lg align-middle duration-500 text-sm text-center bg-primary text-white px-3">
                  Popover on Top
                </div>
                <div
                  className="hs-tooltip-content hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible transition-opacity opacity-0 relative hidden px-3 py-1 rounded border bg-white w-60 z-50 dark:bg-gray-600 dark:border-gray-600 dark:text-gray-400"
                  role="tooltip"
                >
                  Vivamus sagittis lacus vel augue laoreet rutrum faucibus.
                  <div className="bg-white border w-2.5 h-2.5 rotate-45 absolute -bottom-1 start-1/2 -z-10 rounded-[1px] dark:bg-gray-600 dark:border-gray-600" />
                </div>
              </Link>
            </div>
            <div className="hs-tooltip inline-block [--trigger:click] [--placement:bottom]">
              <Link className="hs-tooltip-toggle block text-center" to="">
                <div className="py-2 inline-flex font-semibold tracking-wide rounded-lg align-middle duration-500 text-sm text-center bg-primary text-white px-3">
                  Popover on Bottom
                </div>
                <div
                  className="hs-tooltip-content hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible transition-opacity opacity-0 relative hidden px-3 py-1 rounded border bg-white w-60 z-50 dark:bg-gray-600 dark:border-gray-600 dark:text-gray-400"
                  role="tooltip"
                >
                  Vivamus sagittis lacus vel augue laoreet rutrum faucibus.
                  <div className="bg-white border w-2.5 h-2.5 rotate-45 absolute -top-1 start-1/2 -z-10 rounded-[1px] dark:bg-gray-600 dark:border-gray-600" />
                </div>
              </Link>
            </div>
            <div className="hs-tooltip inline-block [--trigger:click] [--placement:left]">
              <Link className="hs-tooltip-toggle block text-center" to="">
                <div className="py-2 inline-flex font-semibold tracking-wide rounded-lg align-middle duration-500 text-sm text-center bg-primary text-white px-3">
                  Popover on Left
                </div>
                <div
                  className="hs-tooltip-content hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible transition-opacity opacity-0 relative hidden px-3 py-1 rounded border bg-white w-60 z-50 dark:bg-gray-600 dark:border-gray-600 dark:text-gray-400"
                  role="tooltip"
                >
                  Vivamus sagittis lacus vel augue laoreet rutrum faucibus.
                  <div className="bg-white border w-2.5 h-2.5 rotate-45 absolute top-1/2 -end-1 rtl:-start-1 -z-10 rounded-[1px] dark:bg-gray-600 dark:border-gray-600" />
                </div>
              </Link>
            </div>
            <div className="hs-tooltip inline-block [--trigger:click] [--placement:right]">
              <Link className="hs-tooltip-toggle block text-center" to="">
                <div className="py-2  inline-flex font-semibold tracking-wide rounded-lg align-middle duration-500 text-sm text-center bg-primary text-white px-3">
                  Popover on Right
                </div>
                <div
                  className="hs-tooltip-content hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible transition-opacity opacity-0 relative hidden px-3 py-1 rounded border bg-white w-60 z-50 dark:bg-gray-600 dark:border-gray-600 dark:text-gray-400"
                  role="tooltip"
                >
                  Vivamus sagittis lacus vel augue laoreet rutrum faucibus.
                  <div className="bg-white border w-2.5 h-2.5 rotate-45 absolute top-1/2 -start-1 -z-10 rounded-[1px] dark:bg-gray-600 dark:border-gray-600" />
                </div>
              </Link>
            </div>
            <div className="hs-tooltip inline-block [--trigger:click] [--placement:right]">
              <Link className="hs-tooltip-toggle block text-center" to="">
                <div className="py-2 inline-flex font-semibold tracking-wide rounded-lg align-middle duration-500 text-sm text-center bg-primary text-white px-3">
                  Dismissible popover
                </div>
                <div
                  className="hs-tooltip-content hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible transition-opacity opacity-0 relative hidden px-3 py-1 rounded border bg-white w-60 z-50 dark:bg-gray-600 dark:border-gray-600 dark:text-gray-400"
                  role="tooltip"
                >
                  And here's some amazing content. It's very engaging Right?
                  <div className="bg-white border w-2.5 h-2.5 rotate-45 absolute top-1/2 -start-1 -z-10 rounded-[1px] dark:bg-gray-600 dark:border-gray-600" />
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="rounded-lg border border-default-200">
        <div className="p-6">
          <h4 className="font-medium text-base text-default-600 mb-4">
            Popovers
          </h4>
          <p className="text-gray-500 mb-4 dark:text-gray-400">
            Add small overlays of content, like those on the iPad, to any
            element for housing secondary information.
          </p>
          <div className="flex flex-wrap gap-3">
            <div className="hs-tooltip inline-block [--trigger:hover] [--placement:top]">
              <Link className="hs-tooltip-toggle block text-center" to="">
                <div className="py-2 inline-flex font-semibold tracking-wide rounded-lg align-middle duration-500 text-sm text-center bg-primary text-white px-3">
                  Popover on Top
                </div>
                <div
                  className="hs-tooltip-content hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible transition-opacity opacity-0 relative hidden px-3 py-1 rounded bg-black text-white z-50"
                  role="tooltip"
                >
                  Top popover
                  <div className="bg-black w-2.5 h-2.5 rotate-45 absolute -bottom-1 start-1/2 -z-10 rounded-[1px" />
                </div>
              </Link>
            </div>
            <div className="hs-tooltip inline-block [--trigger:hover] [--placement:bottom]">
              <Link className="hs-tooltip-toggle block text-center" to="">
                <div className="py-2 inline-flex font-semibold tracking-wide rounded-lg align-middle duration-500 text-sm text-center bg-primary text-white px-3">
                  Popover on Bottom
                </div>
                <div
                  className="hs-tooltip-content hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible transition-opacity opacity-0 relative hidden px-3 py-1 rounded bg-black text-white z-50"
                  role="tooltip"
                >
                  Bottom popover
                  <div className="bg-black w-2.5 h-2.5 rotate-45 absolute -top-1 start-1/2 -z-10 rounded-[1px" />
                </div>
              </Link>
            </div>
            <div className="hs-tooltip inline-block [--trigger:hover] [--placement:left]">
              <Link className="hs-tooltip-toggle block text-center" to="">
                <div className="py-2 inline-flex font-semibold tracking-wide rounded-lg align-middle duration-500 text-sm text-center bg-primary text-white px-3">
                  Popover on Left
                </div>
                <div
                  className="hs-tooltip-content hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible transition-opacity opacity-0 relative hidden px-3 py-1 rounded bg-black text-white z-50"
                  role="tooltip"
                >
                  Left popover
                  <div className="bg-black w-2.5 h-2.5 rotate-45 absolute top-1/3 -end-1 rtl:-start-1 -z-10 rounded-[1px" />
                </div>
              </Link>
            </div>
            <div className="hs-tooltip inline-block [--trigger:hover] [--placement:right]">
              <Link className="hs-tooltip-toggle block text-center" to="">
                <div className="py-2 inline-flex font-semibold tracking-wide rounded-lg align-middle duration-500 text-sm text-center bg-primary text-white px-3">
                  Popover on Right
                </div>
                <div
                  className="hs-tooltip-content hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible transition-opacity opacity-0 relative hidden px-3 py-1 rounded bg-black text-white z-50"
                  role="tooltip"
                >
                  Right popover
                  <div className="bg-black w-2.5 h-2.5 rotate-45 absolute top-1/3 -start-1 rtl:-end-1 -z-10 rounded-[1px" />
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Popovers;
