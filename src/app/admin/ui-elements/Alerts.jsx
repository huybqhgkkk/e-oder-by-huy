import { LuX } from "react-icons/lu";

import Img1 from "/favicon.ico";

const Alerts = () => {
  return (
    <div className="grid 2xl:grid-cols-2 gap-6">
      <div className="rounded-lg border border-default-200">
        <div className="p-8">
          <h4 className="font-medium text-base text-default-600 mb-4">
            Alerts
          </h4>
          <p className="text-default-600">
            Provide contextual feedback messages for typical user actions with
            the handful of available and flexible alert messages.
          </p>
          <div className="pt-5">
            <div className="space-y-4">
              <div
                className="bg-primary/10 text-primary border border-primary/20 text-sm rounded py-3 px-5"
                role="alert"
              >
                <span className="font-bold">
                  A simple Primary alert—check it out!
                </span>
              </div>
              <div
                className="bg-secondary/10 text-secondary border border-secondary/20 text-sm rounded py-3 px-5"
                role="alert"
              >
                <span className="font-bold">
                  A simple Secondary alert—check it out!
                </span>
              </div>
              <div
                id="dismiss-alert"
                className="bg-success/10 text-success border border-success/20 text-sm rounded py-3 px-5 flex items-center justify-between"
              >
                <p>
                  <span className="font-bold">
                    A simple Success alert—check it out!
                  </span>
                </p>
                <button
                  className="text-xl/[0]"
                  data-hs-remove-element="#dismiss-alert"
                  type="button"
                >
                  <LuX size={20} />
                </button>
              </div>
              <div
                id="dismiss-example-secondary"
                className="bg-danger/10 text-danger border border-danger/20 text-sm rounded py-3 px-5 flex justify-between items-center"
              >
                <p>
                  <span className="font-bold">
                    A simple Danger alert—check it out!
                  </span>
                </p>
                <button
                  className="text-xl/[0]"
                  data-hs-remove-element="#dismiss-example-secondary"
                  type="button"
                >
                  <LuX size={20} />
                </button>
              </div>
              <div
                id="dismiss-example-success"
                className="bg-warning/10 text-warning border border-warning/20 text-sm rounded py-3 px-5 flex justify-between items-center"
              >
                <p>
                  <span className="font-bold">
                    A simple Warning alert—check it out!
                  </span>
                </p>
                <button
                  className="text-xl/[0]"
                  data-hs-remove-element="#dismiss-example-success"
                  type="button"
                >
                  <LuX size={20} />
                </button>
              </div>
              <div
                className="bg-info/10 text-info border border-info/20 text-sm rounded py-3 px-5"
                role="alert"
              >
                <span className="font-bold">
                  A simple Info alert—check it out!
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="rounded-lg border border-default-200">
        <div className="p-8">
          <h4 className="font-medium text-base text-default-600 mb-4">
            Toasts
          </h4>
          <p className="text-default-600 mb-6">
            Push notifications to your visitors with a toast, a lightweight and
            easily customizable alert message
          </p>
          <div className="space-y-3">
            {[11, 12, 15, 21].map((time, idx) => {
              return (
                <div key={idx}>
                  <div className="max-w-xs relative border border-default-200 bg-white dark:bg-default-50 rounded transition-all duration-300">
                    <div id={`dismiss-flex${idx + 1}`} className="rounded ">
                      <div className="absolute end-2 top-2 flex items-center gap-2">
                        <small className="text-gray-400">{time} mins ago</small>
                        <button
                          className="text-xl/[0]"
                          data-hs-remove-element={`#dismiss-flex${idx + 1}`}
                          type="button"
                        >
                          <LuX size={16} />
                        </button>
                      </div>
                      <div>
                        <h3 className="p-2 text-lg font-bold text-default-800 flex items-center ">
                          <img
                            src={Img1}
                            alt="brand-logo"
                            className="me-1 h-5"
                          />
                          <strong className="me-auto text-sm text-default-600">
                            Yum
                          </strong>
                        </h3>
                        <hr className="border-default-200" />
                        <p className="p-3 text-xs font-medium uppercase text-default-600">
                          Hello, world! This is a toast message.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Alerts;
