import { LuAlertCircle, LuArrowLeft, LuX } from "react-icons/lu";
import { Link } from "react-router-dom";

const Modals = () => {
  return (
    <div className="rounded-lg border border-default-200">
      <div className="p-6">
        <h2 className="font-medium text-base text-default-600 mb-4">Modals</h2>
        <p className="text-gray-500 mb-5 dark:text-gray-400">
          A rendered modal with header, body, and set of actions in the footer.
        </p>
        <div className="grid 2xl:grid-cols-3 gap-6">
          <div className="w-full">
            <h4 className="mb-6 text-default-600">Examples</h4>
            <div>
              <button
                type="button"
                className="py-2 px-5 inline-flex font-semibold tracking-wide align-middle duration-500 text-sm text-center bg-primary text-white rounded-lg"
                data-hs-overlay="#hs-basic-modal"
              >
                Standard Modal
              </button>
              <div
                id="hs-basic-modal"
                className="hs-overlay hidden w-full h-full fixed top-0 left-0 z-[70] overflow-x-hidden overflow-y-auto"
              >
                <div className="hs-overlay-open:opacity-100 hs-overlay-open:duration-500 opacity-0 transition-all sm:max-w-lg sm:w-full m-3 sm:mx-auto">
                  <div className="flex flex-col bg-white border border-default-200 shadow-sm rounded dark:bg-default-50">
                    <div className="flex justify-between items-center py-3 px-4">
                      <h3 className="font-bold text-default-800">
                        Modal Heading
                      </h3>
                      <button
                        type="button"
                        className="hs-dropdown-toggle inline-flex flex-shrink-0 justify-center items-center h-8 w-8 rounded text-gray-500 hover:text-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 focus:ring-offset-white transition-all text-sm dark:focus:ring-gray-700 dark:focus:ring-offset-gray-800"
                        data-hs-overlay="#hs-basic-modal"
                      >
                        <span className="sr-only">Close</span>
                        <LuX size={24} />
                      </button>
                    </div>
                    <div className="p-4 overflow-y-auto">
                      <h5 className="mb-2.5 text-base text-default-600">
                        Text in a modal
                      </h5>
                      <p className="text-sm mb-4 text-default-600">
                        Duis mollis, est non commodo luctus, nisi erat porttitor
                        ligula.
                      </p>
                      <hr className="my-5 dark:border-gray-600" />
                      <h5 className="mb-2.5 text-base dark:text-gray-400">
                        Overflowing text to show scroll behavior
                      </h5>
                      <p className="text-sm mb-4 dark:text-gray-400">
                        Cras mattis consectetur purus sit amet fermentum. Cras
                        justo odio, dapibus ac facilisis in, egestas eget quam.
                        Morbi leo risus, porta ac consectetur ac, vestibulum at
                        eros.
                      </p>
                      <p className="text-sm mb-4 dark:text-gray-400">
                        Praesent commodo cursus magna, vel scelerisque nisl
                        consectetur et. Vivamus sagittis lacus vel augue laoreet
                        rutrum faucibus dolor auctor.
                      </p>
                      <p className="text-sm dark:text-gray-400">
                        Aenean lacinia bibendum nulla sed consectetur. Praesent
                        commodo cursus magna, vel scelerisque nisl consectetur
                        et. Donec sed odio dui. Donec ullamcorper nulla non
                        metus auctor fringilla.
                      </p>
                    </div>
                    <div className="flex justify-end items-center gap-2 p-4 ">
                      <button
                        className="py-2 px-5 inline-flex font-semibold tracking-wide align-middle duration-500 text-sm text-center bg-default-100 text-default-800 transition-all rounded-lg"
                        type="button"
                        data-hs-overlay="#hs-basic-modal"
                      >
                        Close
                      </button>
                      <Link
                        className="py-2 px-5 inline-flex font-semibold tracking-wide align-middle duration-500 text-sm text-center bg-primary text-white rounded-lg"
                        to=""
                      >
                        Save Changes
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full">
            <h4 className="mb-6 text-default-600">Pill Badges</h4>
            <div className="flex flex-wrap gap-3">
              <div>
                <button
                  type="button"
                  className="py-2 px-5 inline-flex font-semibold tracking-wide rounded-lg align-middle duration-500 text-sm text-center bg-secondary text-white"
                  data-hs-overlay="#hs-basic-modal1"
                >
                  Extra large modal
                </button>
                <div
                  id="hs-basic-modal1"
                  className="hs-overlay hidden w-full h-full fixed top-0 left-0 z-[70] overflow-x-hidden overflow-y-auto"
                >
                  <div className="hs-overlay-open:opacity-100 hs-overlay-open:duration-500 opacity-0 transition-all sm:max-w-7xl sm:w-full m-3 sm:mx-auto">
                    <div className="flex flex-col bg-white border border-default-200 shadow-sm rounded dark:bg-default-50">
                      <div className="flex justify-between items-center py-3 px-4">
                        <h3 className="font-bold text-gray-800 dark:text-white">
                          Modal Title
                        </h3>
                        <button
                          type="button"
                          className="hs-dropdown-toggle inline-flex flex-shrink-0 justify-center items-center h-8 w-8 rounded text-gray-500 hover:text-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 focus:ring-offset-white transition-all text-sm dark:focus:ring-gray-700 dark:focus:ring-offset-gray-800"
                          data-hs-overlay="#hs-basic-modal1"
                        >
                          <span className="sr-only">Close</span>
                          <LuX size={24} />
                        </button>
                      </div>
                      <div className="p-4 overflow-y-auto">
                        <p className="text-gray-800 dark:text-gray-400">...</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <button
                  type="button"
                  className="py-2 px-5 inline-flex font-semibold rounded-lg tracking-wide align-middle duration-500 text-sm text-center bg-success text-white"
                  data-hs-overlay="#hs-basic-modal2"
                >
                  Large Modal
                </button>
                <div
                  id="hs-basic-modal2"
                  className="hs-overlay hidden w-full h-full fixed top-0 left-0 z-[70] overflow-x-hidden overflow-y-auto"
                >
                  <div className="hs-overlay-open:opacity-100 hs-overlay-open:duration-500 opacity-0 transition-all sm:max-w-3xl sm:w-full m-3 sm:mx-auto">
                    <div className="flex flex-col bg-white border border-default-200 shadow-sm rounded dark:bg-default-50">
                      <div className="flex justify-between items-center py-3 px-4">
                        <h3 className="font-bold text-gray-800 dark:text-white">
                          Modal Title
                        </h3>
                        <button
                          type="button"
                          className="hs-dropdown-toggle inline-flex flex-shrink-0 justify-center items-center h-8 w-8 rounded text-gray-500 hover:text-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 focus:ring-offset-white transition-all text-sm dark:focus:ring-gray-700 dark:focus:ring-offset-gray-800"
                          data-hs-overlay="#hs-basic-modal2"
                        >
                          <span className="sr-only">Close</span>
                          <LuX size={24} />
                        </button>
                      </div>
                      <div className="p-4 overflow-y-auto">
                        <p className="text-gray-800 dark:text-gray-400">...</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <button
                  type="button"
                  className="py-2 px-5 inline-flex font-semibold tracking-wide rounded-lg align-middle duration-500 text-sm text-center bg-info text-white"
                  data-hs-overlay="#hs-basic-modal3"
                >
                  Small Modal
                </button>
                <div
                  id="hs-basic-modal3"
                  className="hs-overlay hidden w-full h-full fixed top-0 left-0 z-[70] overflow-x-hidden overflow-y-auto"
                >
                  <div className="hs-overlay-open:opacity-100 hs-overlay-open:duration-500 opacity-0 transition-all sm:max-w-sm sm:w-full m-3 sm:mx-auto">
                    <div className="flex flex-col bg-white border border-default-200 shadow-sm rounded dark:bg-default-50">
                      <div className="flex justify-between items-center py-3 px-4">
                        <h3 className="font-bold text-gray-800 dark:text-white">
                          Modal Title
                        </h3>
                        <button
                          type="button"
                          className="hs-dropdown-toggle inline-flex flex-shrink-0 justify-center items-center h-8 w-8 rounded text-gray-500 hover:text-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 focus:ring-offset-white transition-all text-sm dark:focus:ring-gray-700 dark:focus:ring-offset-gray-800"
                          data-hs-overlay="#hs-basic-modal3"
                        >
                          <span className="sr-only">Close</span>
                          <LuX size={24} />
                        </button>
                      </div>
                      <div className="p-4 overflow-y-auto">
                        <p className="text-gray-800 dark:text-gray-400">...</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full">
            <h4 className="mb-6 text-default-600">Badges Lighten</h4>
            <div className="flex flex-wrap items-end gap-2">
              <div>
                <button
                  type="button"
                  className="py-2 px-5 inline-flex font-semibold tracking-wide rounded-lg align-middle duration-500 text-sm text-center bg-secondary text-white"
                  data-hs-overlay="#hs-basic-modal4"
                >
                  Center Modal
                </button>
                <div
                  id="hs-basic-modal4"
                  className="hs-overlay hidden w-full h-full fixed top-1/3 left-0 z-[70] overflow-x-hidden overflow-y-auto"
                >
                  <div className="hs-overlay-open:opacity-100 hs-overlay-open:duration-500 opacity-0 transition-all sm:max-w-lg sm:w-full m-3 sm:mx-auto">
                    <div className="flex flex-col bg-white border border-default-200 shadow-sm rounded dark:bg-default-50">
                      <div className="flex justify-between items-center py-3 px-4">
                        <h3 className="font-bold text-gray-800 dark:text-white">
                          Center modal
                        </h3>
                        <button
                          type="button"
                          className="hs-dropdown-toggle inline-flex flex-shrink-0 justify-center items-center h-8 w-8 rounded text-gray-500 hover:text-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 focus:ring-offset-white transition-all text-sm dark:focus:ring-gray-700 dark:focus:ring-offset-gray-800"
                          data-hs-overlay="#hs-basic-modal4"
                        >
                          <span className="sr-only">Close</span>
                          <LuX size={24} />
                        </button>
                      </div>
                      <div className="p-4 overflow-y-auto">
                        <h5 className="text-base text-default-600">
                          Overflowing text to show scroll behavior
                        </h5>
                        <p className="dark:text-gray-400">
                          Cras mattis consectetur purus sit amet fermentum. Cras
                          justo odio, dapibus ac facilisis in, egestas eget
                          quam. Morbi leo risus, porta ac consectetur ac,
                          vestibulum at eros.
                        </p>
                        <p className="mb-0 dark:text-gray-400">
                          Praesent commodo cursus magna, vel scelerisque nisl
                          consectetur et. Vivamus sagittis lacus vel augue
                          laoreet rutrum faucibus dolor auctor.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <button
                  type="button"
                  className="py-2 px-5 inline-flex font-semibold rounded-lg tracking-wide align-middle duration-500 text-sm text-center bg-primary text-white"
                  data-hs-overlay="#hs-scroll-inside-body-modal"
                >
                  Scrollable Modal
                </button>
                <div
                  id="hs-scroll-inside-body-modal"
                  className="hs-overlay hidden w-full h-full fixed top-0 left-0 z-[70] overflow-x-hidden overflow-y-auto"
                >
                  <div className="hs-overlay-open:mt-7 hs-overlay-open:opacity-100 hs-overlay-open:duration-500 mt-0 opacity-0 ease-out transition-all sm:max-w-lg sm:w-full m-3 sm:mx-auto h-[calc(100%-3.5rem)]">
                    <div className="max-h-full overflow-hidden flex flex-col bg-white border border-default-200 sm rounded-xl dark:bg-default-50">
                      <div className="flex justify-between items-center py-3 px-4 border-b border-default-200">
                        <h3 className="font-bold text-gray-800 dark:text-white">
                          Modal title
                        </h3>
                        <button
                          type="button"
                          className="hs-dropdown-toggle inline-flex flex-shrink-0 justify-center items-center h-8 w-8 rounded text-gray-500 hover:text-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 focus:ring-offset-white transition-all text-sm dark:focus:ring-gray-700 dark:focus:ring-offset-gray-800"
                          data-hs-overlay="#hs-scroll-inside-body-modal"
                        >
                          <span className="sr-only">Close</span>
                          <svg
                            className="w-3.5 h-3.5"
                            width={8}
                            height={8}
                            viewBox="0 0 8 8"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M0.258206 1.00652C0.351976 0.912791 0.479126 0.860131 0.611706 0.860131C0.744296 0.860131 0.871447 0.912791 0.965207 1.00652L3.61171 3.65302L6.25822 1.00652C6.30432 0.958771 6.35952 0.920671 6.42052 0.894471C6.48152 0.868271 6.54712 0.854471 6.61352 0.853901C6.67992 0.853321 6.74572 0.865971 6.80722 0.891111C6.86862 0.916251 6.92442 0.953381 6.97142 1.00032C7.01832 1.04727 7.05552 1.1031 7.08062 1.16454C7.10572 1.22599 7.11842 1.29183 7.11782 1.35822C7.11722 1.42461 7.10342 1.49022 7.07722 1.55122C7.05102 1.61222 7.01292 1.6674 6.96522 1.71352L4.31871 4.36002L6.96522 7.00648C7.05632 7.10078 7.10672 7.22708 7.10552 7.35818C7.10442 7.48928 7.05182 7.61468 6.95912 7.70738C6.86642 7.80018 6.74102 7.85268 6.60992 7.85388C6.47882 7.85498 6.35252 7.80458 6.25822 7.71348L3.61171 5.06702L0.965207 7.71348C0.870907 7.80458 0.744606 7.85498 0.613506 7.85388C0.482406 7.85268 0.357007 7.80018 0.264297 7.70738C0.171597 7.61468 0.119017 7.48928 0.117877 7.35818C0.116737 7.22708 0.167126 7.10078 0.258206 7.00648L2.90471 4.36002L0.258206 1.71352C0.164476 1.61976 0.111816 1.4926 0.111816 1.36002C0.111816 1.22744 0.164476 1.10028 0.258206 1.00652Z"
                              fill="currentColor"
                            />
                          </svg>
                        </button>
                      </div>
                      <div className="p-4 overflow-y-auto">
                        <h5 className="mb-2.5 text-base text-default-600">
                          Text in a modal
                        </h5>
                        <p className="text-sm mb-4 dark:text-gray-400">
                          Duis mollis, est non commodo luctus, nisi erat
                          porttitor ligula.
                        </p>
                        <hr className="my-5 dark:border-gray-600" />
                        <h5 className="mb-2.5 text-base text-default-600">
                          Overflowing text to show scroll behavior
                        </h5>
                        <p className="dark:text-gray-400">
                          Cras mattis consectetur purus sit amet fermentum. Cras
                          justo odio, dapibus ac facilisis in, egestas eget
                          quam. Morbi leo risus, porta ac consectetur ac,
                          vestibulum at eros.
                        </p>
                        <p className="dark:text-gray-400">
                          Praesent commodo cursus magna, vel scelerisque nisl
                          consectetur et. Vivamus sagittis lacus vel augue
                          laoreet rutrum faucibus dolor auctor.
                        </p>
                        <p className="dark:text-gray-400">
                          Aenean lacinia bibendum nulla sed consectetur.
                          Praesent commodo cursus magna, vel scelerisque nisl
                          consectetur et. Donec sed odio dui. Donec ullamcorper
                          nulla non metus auctor fringilla.
                        </p>
                        <p className="dark:text-gray-400">
                          Cras mattis consectetur purus sit amet fermentum. Cras
                          justo odio, dapibus ac facilisis in, egestas eget
                          quam. Morbi leo risus, porta ac consectetur ac,
                          vestibulum at eros.
                        </p>
                        <p className="dark:text-gray-400">
                          Praesent commodo cursus magna, vel scelerisque nisl
                          consectetur et. Vivamus sagittis lacus vel augue
                          laoreet rutrum faucibus dolor auctor.
                        </p>
                        <p className="dark:text-gray-400">
                          Aenean lacinia bibendum nulla sed consectetur.
                          Praesent commodo cursus magna, vel scelerisque nisl
                          consectetur et. Donec sed odio dui. Donec ullamcorper
                          nulla non metus auctor fringilla.
                        </p>
                        <p className="dark:text-gray-400">
                          Cras mattis consectetur purus sit amet fermentum. Cras
                          justo odio, dapibus ac facilisis in, egestas eget
                          quam. Morbi leo risus, porta ac consectetur ac,
                          vestibulum at eros.
                        </p>
                        <p className="dark:text-gray-400">
                          Praesent commodo cursus magna, vel scelerisque nisl
                          consectetur et. Vivamus sagittis lacus vel augue
                          laoreet rutrum faucibus dolor auctor.
                        </p>
                        <p className="dark:text-gray-400">
                          Aenean lacinia bibendum nulla sed consectetur.
                          Praesent commodo cursus magna, vel scelerisque nisl
                          consectetur et. Donec sed odio dui. Donec ullamcorper
                          nulla non metus auctor fringilla.
                        </p>
                        <p className="dark:text-gray-400">
                          Cras mattis consectetur purus sit amet fermentum. Cras
                          justo odio, dapibus ac facilisis in, egestas eget
                          quam. Morbi leo risus, porta ac consectetur ac,
                          vestibulum at eros.
                        </p>
                        <p className="dark:text-gray-400">
                          Praesent commodo cursus magna, vel scelerisque nisl
                          consectetur et. Vivamus sagittis lacus vel augue
                          laoreet rutrum faucibus dolor auctor.
                        </p>
                        <p className="dark:text-gray-400">
                          Aenean lacinia bibendum nulla sed consectetur.
                          Praesent commodo cursus magna, vel scelerisque nisl
                          consectetur et. Donec sed odio dui. Donec ullamcorper
                          nulla non metus auctor fringilla.
                        </p>
                        <p className="dark:text-gray-400">
                          Cras mattis consectetur purus sit amet fermentum. Cras
                          justo odio, dapibus ac facilisis in, egestas eget
                          quam. Morbi leo risus, porta ac consectetur ac,
                          vestibulum at eros.
                        </p>
                        <p className="dark:text-gray-400">
                          Praesent commodo cursus magna, vel scelerisque nisl
                          consectetur et. Vivamus sagittis lacus vel augue
                          laoreet rutrum faucibus dolor auctor.
                        </p>
                        <p className="dark:text-gray-400">
                          Aenean lacinia bibendum nulla sed consectetur.
                          Praesent commodo cursus magna, vel scelerisque nisl
                          consectetur et. Donec sed odio dui. Donec ullamcorper
                          nulla non metus auctor fringilla.
                        </p>
                        <p className="dark:text-gray-400">
                          Cras mattis consectetur purus sit amet fermentum. Cras
                          justo odio, dapibus ac facilisis in, egestas eget
                          quam. Morbi leo risus, porta ac consectetur ac,
                          vestibulum at eros.
                        </p>
                        <p className="dark:text-gray-400">
                          Praesent commodo cursus magna, vel scelerisque nisl
                          consectetur et. Vivamus sagittis lacus vel augue
                          laoreet rutrum faucibus dolor auctor.
                        </p>
                        <p className="dark:text-gray-400">
                          Aenean lacinia bibendum nulla sed consectetur.
                          Praesent commodo cursus magna, vel scelerisque nisl
                          consectetur et. Donec sed odio dui. Donec ullamcorper
                          nulla non metus auctor fringilla.
                        </p>
                      </div>
                      <div className="flex justify-end items-center gap-2 p-4 border-t dark:border-slate-700">
                        <button
                          className="py-2 px-5 inline-flex font-semibold tracking-wide rounded-lg align-middle duration-500 text-sm text-center bg-light text-gray-800 transition-all dark:bg-secondary/50 dark:text-white"
                          type="button"
                          data-hs-overlay="#hs-scroll-inside-body-modal"
                        >
                          Close
                        </button>
                        <Link
                          className="py-2 px-5 inline-flex font-semibold tracking-wide rounded-lg align-middle duration-500 text-sm text-center bg-primary text-white"
                          to=""
                        >
                          Save Changes
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <button
                  type="button"
                  className="py-2 px-5 inline-flex font-semibold rounded-lg tracking-wide align-middle duration-500 text-sm text-center bg-danger text-white"
                  data-hs-overlay="#hs-basic-modal-Error"
                >
                  Danger Alert
                </button>
                <div
                  id="hs-basic-modal-Error"
                  className="hs-overlay hidden w-full h-full fixed top-1/3 left-0 z-[70] overflow-x-hidden overflow-y-auto"
                >
                  <div className="hs-overlay-open:opacity-100 hs-overlay-open:duration-500 opacity-0 transition-all sm:max-w-lg sm:w-full m-3 sm:mx-auto">
                    <div className="flex flex-col bg-white border border-default-200 shadow-sm rounded dark:bg-default-50">
                      <div className="flex justify-between items-center py-3 px-4">
                        <h3 className="font-bold text-gray-800 dark:text-white">
                          Error modal
                        </h3>
                        <button
                          type="button"
                          className="hs-dropdown-toggle inline-flex flex-shrink-0 justify-center items-center h-8 w-8 rounded text-gray-500 hover:text-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 focus:ring-offset-white transition-all text-sm dark:focus:ring-gray-700 dark:focus:ring-offset-gray-800"
                          data-hs-overlay="#hs-basic-modal-Error"
                        >
                          <span className="sr-only">Close</span>
                          <LuX size={24} />
                        </button>
                      </div>
                      <div className="p-9 overflow-y-auto">
                        <div className="text-center">
                          <div className="flex justify-center">
                            <LuAlertCircle
                              size={48}
                              className=" text-warning "
                            />
                          </div>
                          <h4 className="text-base text-danger font-medium mt-3 mb-2.5">
                            Page not Found
                          </h4>
                          <p className="mt-6 mb-4 dark:text-gray-400">
                            Praesent commodo cursus magna, vel scelerisque nisl
                            consectetur et.
                          </p>
                          <button
                            type="button"
                            className="py-2 px-5 inline-flex font-semibold tracking-wide border align-middle duration-500 text-sm text-center border-primary rounded-full text-primary my-2"
                            data-hs-overlay="#hs-basic-modal-Error"
                          >
                            <LuArrowLeft size={20} className="me-2" />
                            Back
                          </button>
                        </div>
                      </div>
                    </div>
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

export default Modals;
