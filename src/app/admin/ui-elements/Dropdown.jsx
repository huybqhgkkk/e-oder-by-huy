import { Link } from "react-router-dom";
import { LuChevronDown } from "react-icons/lu";
import { toSentenceCase } from "@/utils";
import { DemoFilterDropdown } from "@/components";

const Dropdown = () => {
  const colors1 = ["primary", "secondary", "success"];
  const colors2 = ["info", "warning", "danger"];

  return (
    <div className="grid lg:grid-cols-2 gap-6">
      <div className="rounded-lg border border-default-200">
        <div className="p-6">
          <h4 className="font-medium text-base text-default-600 mb-4">
            Dropdown Examples
          </h4>
          <p className="text-gray-500 mb-8">
            The best part is you can do this with any button variant, too:
          </p>
          <div className="flex flex-wrap gap-2">
            {colors1.map((color, idx) => (
              <DemoFilterDropdown
                key={idx}
                filterType={toSentenceCase(color)}
                filterOptions={[
                  "Action",
                  " Another Action",
                  " Something else here",
                  "Separated link",
                ]}
                buttonClassName={`bg-${color} text-white`}
              />
            ))}

            {colors2.map((color, idx) => (
              <DemoFilterDropdown
                key={idx}
                filterType={toSentenceCase(color)}
                filterOptions={[
                  "Action",
                  " Another Action",
                  " Something else here",
                  "Separated link",
                ]}
                buttonClassName={`bg-${color} text-white`}
              />
            ))}
          </div>
        </div>
      </div>
      <div className="rounded-lg border border-default-200">
        <div className="p-6">
          <h4 className="font-medium text-base text-default-600 mb-4">
            Dropdown - More Examples
          </h4>
          <p className="text-gray-500 mb-8 dark:text-gray-400">
            The best part is you can do this with any button variant, too:
          </p>
          <div className="flex flex-wrap gap-2">
            <div className="hs-dropdown relative">
              <button
                type="button"
                className="hs-dropdown-toggle py-2 px-5 inline-flex font-semibold tracking-wide align-middle duration-500 text-sm text-center items-center bg-primary text-white rounded-lg"
              >
                Simple text <LuChevronDown size={16} className="ms-2" />
              </button>
              <div className="hs-dropdown-menu transition-[opacity,margin] duration hs-dropdown-open:opacity-100 opacity-0 hidden bg-white shadow rounded border border-default-200 dark:bg-default-50 py-2 z-10">
                <div className="p-5 text-gray-500">
                  <p className="dark:text-gray-400">
                    Some example text that's free-flowing <br /> within the
                    dropdown menu.
                  </p>
                  <p className="mt-4 dark:text-gray-400">
                    And this is more example text.
                  </p>
                </div>
              </div>
            </div>
            <div className="hs-dropdown relative">
              <button
                type="button"
                className="hs-dropdown-toggle py-2 px-5 inline-flex font-semibold tracking-wide align-middle duration-500 text-sm text-center items-center bg-secondary text-white rounded-lg"
              >
                Dropdown menu Forms <LuChevronDown size={16} className="ms-2" />
              </button>
              <div className="hs-dropdown-menu transition-[opacity,margin] duration hs-dropdown-open:opacity-100 opacity-0 relative z-10 hidden bg-white shadow rounded border border-default-200 dark:bg-default-50">
                <div className="p-5">
                  <form className="w-72">
                    <div className="mb-3">
                      <label
                        htmlFor="exampleInputEmail1"
                        className="mb-2 dark:text-gray-300"
                      >
                        Email address
                      </label>
                      <input
                        type="email"
                        className="w-full form-input rounded-lg border border-default-200 px-4 py-2.5 dark:bg-default-50"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                        placeholder="email@example.com"
                      />
                    </div>
                    <div className="mb-3">
                      <label
                        htmlFor="exampleInputPassword1"
                        className="mb-2 dark:text-gray-300"
                      >
                        Password
                      </label>
                      <input
                        type="password"
                        className="w-full form-input rounded-lg border border-default-200 px-4 py-2.5 dark:bg-default-50"
                        id="exampleInputPassword1"
                        placeholder="Password"
                      />
                    </div>
                    <div className="flex items-center gap-2 mb-3">
                      <input
                        type="checkbox"
                        className="form-checkbox rounded border border-gray-200"
                        id="checkmeout0"
                      />
                      <label
                        className="text-default-800 text-sm font-medium inline-block"
                        htmlFor="checkmeout0"
                      >
                        Remember me
                      </label>
                    </div>
                    <button
                      type="submit"
                      className="py-2 px-5 inline-flex rounded-lg font-semibold tracking-wide align-middle duration-500 text-sm text-center bg-primary text-white"
                    >
                      Sign in
                    </button>
                  </form>
                </div>
              </div>
            </div>
            <div className="hs-dropdown relative">
              <button
                type="button"
                className="hs-dropdown-toggle py-2 px-5 inline-flex font-semibold tracking-wide align-middle duration-500 text-sm text-center items-center bg-success text-white rounded-lg"
              >
                Right Align <LuChevronDown size={16} className="ms-2" />
              </button>
              <div className="hs-dropdown-menu transition-[opacity,margin] duration hs-dropdown-open:opacity-100 opacity-0 hidden bg-white shadow rounded border border-default-200 dark:bg-default-50 py-2 z-10">
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
            <div className="hs-dropdown relative inline-flex [--placement:right-top]">
              <button
                id="hs-dropright"
                type="button"
                className="hs-dropdown-toggle py-2 px-5 inline-flex font-semibold tracking-wide align-middle duration-500 text-sm text-center items-center bg-info text-white rounded-lg"
              >
                Drop Right <LuChevronDown size={16} className="ms-2" />
              </button>
              <div
                className="hs-dropdown-menu transition-[opacity,margin] duration hs-dropdown-open:opacity-100 opacity-0 hidden z-10 bg-white shadow rounded p-2 border border-default-200 dark:bg-default-50"
                aria-labelledby="hs-dropright"
              >
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
                <hr className="my-2 border-default-200" />
                <Link
                  className="flex items-center gap-x-3.5 py-2 px-3 text-sm text-default-800 hover:bg-default-100"
                  to=""
                >
                  Separated link
                </Link>
              </div>
            </div>
            <div className="hs-dropdown relative inline-flex [--placement:left-top]">
              <button
                id="hs-dropright"
                type="button"
                className="hs-dropdown-toggle py-2 px-5 inline-flex font-semibold tracking-wide align-middle duration-500 text-sm text-center items-center bg-danger text-white rounded-lg"
              >
                Drop Left <LuChevronDown size={16} className="ms-2" />
              </button>
              <div
                className="hs-dropdown-menu transition-[opacity,margin] duration hs-dropdown-open:opacity-100 opacity-0 hidden z-10 bg-white shadow rounded p-2 border border-default-200 dark:bg-default-50"
                aria-labelledby="hs-dropright"
              >
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
                <hr className="my-2 border-default-200" />
                <Link
                  className="flex items-center gap-x-3.5 py-2 px-3 text-sm text-default-800 hover:bg-default-100"
                  to=""
                >
                  Separated link
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dropdown;
