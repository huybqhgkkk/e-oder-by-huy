
export const ErrorModals = ({title, errorText, handleComfirmed}) => {
  return (
    <div className="w-full">
      <div className="flex flex-wrap items-end gap-2">
        <div>
          
        <div
                  id="modal-Error"
                  className="hs-overlay hidden w-full h-full fixed top-1/3 left-0 z-[70] overflow-x-hidden overflow-y-auto"
                >
                  <div className="hs-overlay-open:opacity-100 hs-overlay-open:duration-500 opacity-0 transition-all sm:max-w-lg sm:w-full m-3 sm:mx-auto">
                    <div className="flex flex-col bg-white border border-default-200 shadow-sm rounded dark:bg-default-50">
                      <div className="flex justify-between items-center py-3 px-4">
                        <h3 className="font-bold text-gray-800 dark:text-white">
                          {title ?? "Error"}
                        </h3>
                        <button
                          type="button"
                          className="hs-dropdown-toggle inline-flex flex-shrink-0 justify-center items-center h-8 w-8 rounded text-gray-500 hover:text-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 focus:ring-offset-white transition-all text-sm dark:focus:ring-gray-700 dark:focus:ring-offset-gray-800"
                          data-hs-overlay="#modal-Error"
                          id="btn-close-error-modal"
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
                              className=" text-danger "
                            />
                          </div>
                          <h4 className="text-base text-danger font-medium mt-3 mb-2.5">
                          Something went wrong!!!
                          </h4>
                          <p className="mt-6 mb-4 dark:text-gray-400">
                          {errorText}
                          </p>
                          <button
                            type="button"
                            className="py-2 px-5 inline-flex font-semibold tracking-wide border align-middle duration-500 text-sm text-center border-primary rounded-full text-primary my-2"
                            // data-hs-overlay="#modal-Error"
                            onClick={async ()=>{
                              await handleComfirmed();
                              document.getElementById("btn-close-error-modal").click();
                            }}
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
  );
};
