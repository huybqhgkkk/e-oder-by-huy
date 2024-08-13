import { Link } from "react-router-dom";
import { LuChevronDown } from "react-icons/lu";

const Offcanvas = () => {
  return (
    <div className="rounded-lg border border-default-200">
      <div className="p-6">
        <div className="w-full">
          <h4 className="font-medium text-base text-default-600 mb-4">
            Offcanvas
          </h4>
          <p className="text-default-600 mb-6">
            Four options are available: top, bottom, left and right aligned.
          </p>
          <div className="flex flex-wrap items-center gap-5">
            <div>
              <button
                type="button"
                className="py-2 px-5 inline-flex font-semibold tracking-wide rounded-lg align-middle duration-500 text-sm text-center bg-primary text-white"
                data-hs-overlay="#hs-overlay-top"
              >
                Top offcanvas
              </button>
              <div
                id="hs-overlay-top"
                className="hs-overlay hs-overlay-open:translate-y-0 -translate-y-full fixed top-0 inset-x-0 transition-all duration-300 transform max-h-60 h-full w-full z-[80] bg-white border-b border-default-200 dark:bg-default-50 hidden"
                tabIndex={-1}
              >
                <div className="flex justify-between items-center py-3 px-4 border-b border-default-200">
                  <h3 className="font-bold text-default-800">
                    Offcanvas title
                  </h3>
                  <button
                    type="button"
                    className="inline-flex flex-shrink-0 justify-center items-center h-8 w-8 rounded text-default-600 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 focus:ring-offset-white text-sm dark:text-gray-500 dark:hover:text-gray-400 dark:focus:ring-gray-700 dark:focus:ring-offset-gray-800"
                    data-hs-overlay="#hs-overlay-top"
                  >
                    <span className="sr-only">Close modal</span>
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
                <div className="p-4 pb-20">
                  <p className="text-default-800">
                    Some text as placeholder. In real life you can have the
                    elements you have chosen. Like, text, images, lists, etc.
                  </p>
                  <div className="mt-5 mb-20">
                    <div className="hs-dropdown relative">
                      <button
                        type="button"
                        className="hs-dropdown-toggle items-center py-2 px-5 inline-flex font-semibold tracking-wide rounded-lg align-middle duration-500 text-sm text-center bg-secondary text-white"
                      >
                        Dropdown button
                        <LuChevronDown size={16} className="ms-1" />
                      </button>
                      <div className="hs-dropdown-menu transition-[opacity,margin] duration hs-dropdown-open:opacity-100 opacity-0 hidden bg-white shadow rounded border border-default-200 dark:bg-default-50">
                        <Link
                          className="flex items-center gap-x-3.5 py-2 px-3 text-sm text-default-800 hover:bg-default-100"
                          to=""
                        >
                          Action
                        </Link>
                        <Link
                          className="flex items-center gap-x-3.5 py-2 px-3 text-sm text-default-800 hover:bg-default-100"
                          to=""
                        >
                          Another Action
                        </Link>
                        <Link
                          className="flex items-center gap-x-3.5 py-2 px-3 text-sm text-default-800 hover:bg-default-100"
                          to=""
                        >
                          Something else here
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <button
                type="button"
                className="py-2 px-5 inline-flex font-semibold tracking-wide rounded-lg align-middle duration-500 text-sm text-center bg-primary text-white"
                data-hs-overlay="#hs-overlay-bottom"
              >
                Bottom offcanvas
              </button>
              <div
                id="hs-overlay-bottom"
                className="hs-overlay hs-overlay-open:translate-y-0 translate-y-full fixed bottom-0 inset-x-0 transition-all duration-300 transform max-h-80 h-full w-full z-[80] bg-white border-b border-default-200 dark:bg-default-50 hidden"
                tabIndex={-1}
              >
                <div className="flex justify-between items-center py-3 px-4 border-b border-default-200">
                  <h3 className="font-bold text-default-800">
                    Offcanvas title
                  </h3>
                  <button
                    type="button"
                    className="inline-flex flex-shrink-0 justify-center items-center h-8 w-8 rounded text-default-600 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 focus:ring-offset-white text-sm dark:text-gray-500 dark:hover:text-gray-400 dark:focus:ring-gray-700 dark:focus:ring-offset-gray-800"
                    data-hs-overlay="#hs-overlay-bottom"
                  >
                    <span className="sr-only">Close modal</span>
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
                <div className="p-4">
                  <p className="text-default-800">
                    Some text as placeholder. In real life you can have the
                    elements you have chosen. Like, text, images, lists, etc.
                  </p>
                  <div className="mt-5">
                    <div className="hs-dropdown relative">
                      <button
                        type="button"
                        className="hs-dropdown-toggle items-center py-2 px-5 inline-flex font-semibold tracking-wide rounded-lg align-middle duration-500 text-sm text-center bg-secondary text-white"
                      >
                        Dropdown button
                        <LuChevronDown size={16} className="ms-1" />
                      </button>
                      <div className="hs-dropdown-menu transition-[opacity,margin] duration hs-dropdown-open:opacity-100 opacity-0 hidden bg-white shadow rounded border border-default-200 dark:bg-default-50">
                        <Link
                          className="flex items-center gap-x-3.5 py-2 px-3 text-sm text-default-800 hover:bg-default-100"
                          to=""
                        >
                          Action
                        </Link>
                        <Link
                          className="flex items-center gap-x-3.5 py-2 px-3 text-sm text-default-800 hover:bg-default-100"
                          to=""
                        >
                          Another Action
                        </Link>
                        <Link
                          className="flex items-center gap-x-3.5 py-2 px-3 text-sm text-default-800 hover:bg-default-100"
                          to=""
                        >
                          Something else here
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <button
                type="button"
                className="py-2 px-5 inline-flex font-semibold tracking-wide rounded-lg align-middle duration-500 text-sm text-center bg-primary text-white"
                data-hs-overlay="#hs-overlay-example"
              >
                Left offcanvas
              </button>
              <div
                id="hs-overlay-example"
                className="hs-overlay hs-overlay-open:translate-x-0 -translate-x-full fixed top-0 left-0 transition-all duration-300 transform h-full max-w-xs w-full z-[80] bg-white border-r border-default-200 dark:bg-default-50 hidden"
                tabIndex={-1}
              >
                <div className="flex justify-between items-center py-3 px-4 border-b border-default-200">
                  <h3 className="font-bold text-default-800">
                    Offcanvas title
                  </h3>
                  <button
                    type="button"
                    className="inline-flex flex-shrink-0 justify-center items-center h-8 w-8 rounded text-default-600 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 focus:ring-offset-white text-sm dark:text-gray-500 dark:hover:text-gray-400 dark:focus:ring-gray-700 dark:focus:ring-offset-gray-800"
                    data-hs-overlay="#hs-overlay-example"
                  >
                    <span className="sr-only">Close modal</span>
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
                <div className="p-4">
                  <p className="text-default-800">
                    Some text as placeholder. In real life you can have the
                    elements you have chosen. Like, text, images, lists, etc.
                  </p>
                  <div className="mt-10">
                    <div className="hs-dropdown relative">
                      <button
                        type="button"
                        className="hs-dropdown-toggle items-center py-2 px-5 inline-flex font-semibold tracking-wide rounded-lg align-middle duration-500 text-sm text-center bg-secondary text-white"
                      >
                        Dropdown button
                        <LuChevronDown size={16} className="ms-1" />
                      </button>
                      <div className="hs-dropdown-menu transition-[opacity,margin] duration hs-dropdown-open:opacity-100 opacity-0 hidden bg-white shadow rounded border border-default-200 dark:bg-default-50">
                        <Link
                          className="flex items-center gap-x-3.5 py-2 px-3 text-sm text-default-800 hover:bg-default-100"
                          to=""
                        >
                          Action
                        </Link>
                        <Link
                          className="flex items-center gap-x-3.5 py-2 px-3 text-sm text-default-800 hover:bg-default-100"
                          to=""
                        >
                          Another Action
                        </Link>
                        <Link
                          className="flex items-center gap-x-3.5 py-2 px-3 text-sm text-default-800 hover:bg-default-100"
                          to=""
                        >
                          Something else here
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <button
                type="button"
                className="py-2 px-5 inline-flex font-semibold tracking-wide rounded-lg align-middle duration-500 text-sm text-center bg-primary text-white"
                data-hs-overlay="#hs-overlay-right"
              >
                Right offcanvas
              </button>
              <div
                id="hs-overlay-right"
                className="hs-overlay hs-overlay-open:translate-x-0 translate-x-full fixed top-0 right-0 transition-all duration-300 transform h-full max-w-xs w-full z-[80] bg-white border-l border-default-200 dark:bg-default-50 hidden"
                tabIndex={-1}
              >
                <div className="flex justify-between items-center py-3 px-4 border-b border-default-200">
                  <h3 className="font-bold text-default-800">
                    Offcanvas title
                  </h3>
                  <button
                    type="button"
                    className="inline-flex flex-shrink-0 justify-center items-center h-8 w-8 rounded text-default-600 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 focus:ring-offset-white text-sm dark:text-gray-500 dark:hover:text-gray-400 dark:focus:ring-gray-700 dark:focus:ring-offset-gray-800"
                    data-hs-overlay="#hs-overlay-right"
                  >
                    <span className="sr-only">Close modal</span>
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
                <div className="p-4">
                  <p className="text-default-800">
                    Some text as placeholder. In real life you can have the
                    elements you have chosen. Like, text, images, lists, etc.
                  </p>
                  <div className="mt-10">
                    <div className="hs-dropdown relative">
                      <button
                        type="button"
                        className="hs-dropdown-toggle items-center py-2 px-5 inline-flex font-semibold tracking-wide rounded-lg align-middle duration-500 text-sm text-center bg-secondary text-white"
                      >
                        Dropdown button
                        <LuChevronDown size={16} className="ms-1" />
                      </button>
                      <div className="hs-dropdown-menu transition-[opacity,margin] duration hs-dropdown-open:opacity-100 opacity-0 hidden bg-white shadow rounded border border-default-200 dark:bg-default-50">
                        <Link
                          className="flex items-center gap-x-3.5 py-2 px-3 text-sm text-default-800 hover:bg-default-100"
                          to=""
                        >
                          Action
                        </Link>
                        <Link
                          className="flex items-center gap-x-3.5 py-2 px-3 text-sm text-default-800 hover:bg-default-100"
                          to=""
                        >
                          Another Action
                        </Link>
                        <Link
                          className="flex items-center gap-x-3.5 py-2 px-3 text-sm text-default-800 hover:bg-default-100"
                          to=""
                        >
                          Something else here
                        </Link>
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

export default Offcanvas;
