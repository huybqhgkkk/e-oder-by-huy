import { Link } from "react-router-dom";
import {
  LuAppWindow,
  LuChevronDown,
  LuFile,
  LuHeart,
  LuKeyboard,
  LuStar,
} from "react-icons/lu";
import { colorVariants } from "@/common";
import { toSentenceCase } from "@/utils";

const ButtonEXample = () => {
  return (
    <div className="p-6">
      <h4 className="font-medium text-base text-default-600 mb-4">Buttons</h4>
      <p className="mb-6 text-default-600 ">
        Use the button classes on an
        <Link to="#" className="text-danger ms-1">
          bg-[color]
        </Link>
      </p>
      <div className="flex flex-wrap items-center gap-3">
        {colorVariants.map((color, idx) => {
          return (
            <button
              key={idx}
              type="button"
              className={`py-2 px-5 inline-flex font-semibold tracking-wide align-middle duration-500 text-sm text-center bg-${color} text-white py-2 px-3 rounded-lg`}
            >
              {toSentenceCase(color)}
            </button>
          );
        })}
        <button
          type="button"
          className="py-2 px-5 inline-flex font-semibold tracking-wide align-middle duration-500 text-sm text-center bg-light text-slate-900 dark:text-slate-200 dark:bg-gray-600/30 rounded-lg"
        >
          Light
        </button>
        <button
          type="button"
          className="py-2 px-5 inline-block font-semibold tracking-wide align-middle duration-500 text-sm text-center bg-default-800 hover:bg-default-950 text-default-50 rounded-lg"
        >
          Dark
        </button>
      </div>
    </div>
  );
};

const OutlinesButton = () => {
  return (
    <div className="p-6">
      <h4 className="mb-1 text-default-700">Outline buttons</h4>
      <p className="mb-6 text-default-600">
        Use a classes
        <Link to="#" className="text-danger ms-1">
          border- *
        </Link>
      </p>
      <div className="flex flex-wrap items-center gap-3">
        {colorVariants.map((color, idx) => {
          return (
            <button
              key={idx}
              type="button"
              className={`py-2 px-5 inline-flex border rounded-lg font-semibold tracking-wide align-middle duration-500 text-sm text-center border-${color} text-${color} hover:bg-${color} ${
                color == "warning" || color == "info"
                  ? "hover:text-gray-800"
                  : "hover:text-white"
              } py-2 px-3 rounded`}
            >
              {toSentenceCase(color)}
            </button>
          );
        })}
        <button
          type="button"
          className="border inline-flex font-semibold tracking-wide align-middle duration-500 text-sm text-center border-dark text-dark hover:bg-dark hover:text-white dark:border-gray-400 dark:text-gray-400 dark:hover:bg-gray-400 dark:hover:text-white py-2 px-3 rounded-lg"
        >
          Dark
        </button>
      </div>
    </div>
  );
};

const SoftButtons = () => {
  return (
    <div className="p-6">
      <h4 className="mb-1 text-default-700">Soft buttons</h4>
      <p className="mb-6 text-default-600">
        Use a classes
        <Link to="#" className="text-danger ms-1">
          bg-[color]/ *
        </Link>
      </p>
      <div className="flex flex-wrap items-center gap-3">
        {colorVariants.map((color, idx) => {
          return (
            <button
              key={idx}
              type="button"
              className={`py-2 px-5 rounded-lg inline-flex font-semibold tracking-wide align-middle duration-500 text-sm text-center bg-${color}/20 text-${color} hover:bg-${color} ${
                color === "warning" ? "hover:text-gray-800" : "hover:text-white"
              } py-2 px-3 rounded`}
            >
              {toSentenceCase(color)}
            </button>
          );
        })}
        <button
          type="button"
          className=" rounded-lg inline-flex font-semibold tracking-wide align-middle duration-500 text-sm text-center bg-dark/20 text-dark hover:bg-dark hover:text-white py-2 px-3  dark:border-gray-400 dark:text-gray-400 dark:bg-gray-400/20"
        >
          Dark
        </button>
      </div>
    </div>
  );
};

const RoundedButtons = () => {
  return (
    <div className="p-6">
      <h4 className="mb-1 text-default-700">Button Rounded</h4>
      <p className="mb-6 text-default-600">
        Use a classes&nbsp;
        <Link to="#" className="text-danger">
          rounded-full
        </Link>
      </p>
      <div className="flex flex-wrap items-center gap-3">
        {colorVariants.map((color, idx) => {
          return (
            <button
              key={idx}
              type="button"
              className={`py-2 px-5 inline-flex font-semibold tracking-wide align-middle duration-500 text-sm text-center bg-${color} text-white rounded-full`}
            >
              {toSentenceCase(color)}
            </button>
          );
        })}
        <button
          type="button"
          className="py-2 px-5 inline-block font-semibold tracking-wide align-middle duration-500 text-sm text-center bg-default-800 hover:bg-default-950 text-default-50 rounded-full"
        >
          Dark
        </button>
      </div>
    </div>
  );
};

const IconsButtons = () => {
  const buttonIcon = [
    {
      variant: "success",
      icon: LuHeart,
    },
    {
      variant: "danger",
      icon: LuAppWindow,
    },
    {
      variant: "info",
      icon: LuFile,
    },
    {
      variant: "warning",
      icon: LuStar,
    },
    {
      variant: "primary",
      icon: LuKeyboard,
    },
  ];

  return (
    <div className="p-6 pb-0">
      <h4 className="font-medium text-base text-default-600 mb-4">
        Icons Buttons
      </h4>
      <p className="mb-6 text-default-600">
        Use the button classes on an&nbsp;
        <Link to="#" className="text-danger">
          bg-[color]
        </Link>
      </p>
      <div className="flex flex-wrap items-center gap-3">
        {buttonIcon.map((item, idx) => {
          return (
            <button
              key={idx}
              type="button"
              className={`py-2 px-5 inline-flex font-semibold rounded-lg tracking-wide align-middle duration-500 text-sm text-center text-white bg-${item.variant}`}
            >
              <item.icon size={18} />
            </button>
          );
        })}
      </div>
    </div>
  );
};

const BLockBUttons = () => {
  return (
    <div className="p-6">
      <h4 className="uppercase mb-1 text-default-700">Block Buttons</h4>
      <p className="mb-6 text-default-600">
        Use the button classes on an&nbsp;
        <Link to="#" className="text-danger">
          Block-*
        </Link>
      </p>
      <div className="flex flex-wrap flex-col items-center gap-3">
        <button
          type="button"
          className="py-2 px-5 inline-flex font-semibold tracking-wide align-middle duration-500 rounded-lg text-center bg-primary text-white text-lg w-full"
        >
          Block Button
        </button>
        <button
          type="button"
          className="py-2 px-5 inline-flex font-semibold tracking-wide align-middle duration-500 rounded-lg text-center bg-info text-white text-sm w-full"
        >
          Block Button
        </button>
        <button
          type="button"
          className="py-2 px-5 inline-flex font-semibold tracking-wide align-middle duration-500 rounded-lg text-center bg-success text-white text-xs w-full"
        >
          Block Button
        </button>
      </div>
    </div>
  );
};

const GroupBUttons = () => {
  return (
    <div className="p-6 pt-1">
      <h4 className="uppercase mb-1 text-default-700">Button Group</h4>
      <p className="mb-6 text-default-600">
        Use the button classes on an&nbsp;
        <Link to="#" className="text-danger">
          flex-*
        </Link>
      </p>
      <div className="flex flex-wrap items-center gap-10">
        <div>
          <div className="inline-flex overflow-hidden rounded-sm mb-2">
            <button
              type="button"
              className="border-e border-default-200/50 py-2 px-5 inline-flex font-semibold tracking-wide align-middle duration-500 text-sm text-center bg-info text-white rounded-s-lg"
            >
              Left
            </button>
            <button
              type="button"
              className="border-e border-default-200/50 py-2 px-5 inline-flex font-semibold tracking-wide align-middle duration-500 text-sm text-center bg-info text-white rounded-none"
            >
              Middle
            </button>
            <button
              type="button"
              className="py-2 px-5 inline-flex font-semibold tracking-wide align-middle duration-500 text-sm text-center bg-info text-white rounded-e-lg"
            >
              Right
            </button>
          </div>
          <div className="flex flex-wrap gap-1">
            <div className="inline-flex overflow-hidden rounded-sm mb-2">
              <button
                type="button"
                className="border-e border-default-200/50 py-2 px-5 inline-flex font-semibold tracking-wide align-middle duration-500 text-sm text-center bg-primary text-white rounded-s-lg"
              >
                1
              </button>
              <button
                type="button"
                className="border-e border-default-200/50 py-2 px-5 inline-flex font-semibold tracking-wide align-middle duration-500 text-sm text-center bg-primary text-white rounded-none"
              >
                2
              </button>
              <button
                type="button"
                className="border-e border-default-200/50 py-2 px-5 inline-flex font-semibold tracking-wide align-middle duration-500 text-sm text-center bg-primary text-white rounded-none"
              >
                3
              </button>
              <button
                type="button"
                className="py-2 px-5 inline-flex font-semibold tracking-wide align-middle duration-500 text-sm text-center bg-primary text-white rounded-e-lg"
              >
                4
              </button>
            </div>
            <div className="inline-flex overflow-hidden rounded-sm mb-2">
              <button
                type="button"
                className="border-e border-default-200/50 py-2 px-5 inline-flex font-semibold tracking-wide align-middle duration-500 text-sm text-center bg-danger text-white rounded-s-lg"
              >
                5
              </button>
              <button
                type="button"
                className="border-e border-default-200/50 py-2 px-5 inline-flex font-semibold tracking-wide align-middle duration-500 text-sm text-center bg-danger text-white rounded-none"
              >
                6
              </button>
              <button
                type="button"
                className="py-2 px-5 inline-flex font-semibold tracking-wide align-middle duration-500 text-sm text-center bg-danger text-white rounded-e-lg"
              >
                7
              </button>
            </div>
            <div className="inline-flex overflow-hidden rounded-sm mb-2">
              <button
                type="button"
                className="py-2 px-5 inline-flex font-semibold tracking-wide align-middle duration-500 text-sm text-center bg-success text-white rounded-lg"
              >
                8
              </button>
            </div>
          </div>
          <div className="inline-flex overflow-hidden rounded-sm mb-2">
            <button
              type="button"
              className="border-e border-default-200/50 py-2 px-5 inline-flex font-semibold tracking-wide align-middle duration-500 text-sm text-center bg-info text-white rounded-s-lg"
            >
              1
            </button>
            <button
              type="button"
              className="border-e border-default-200/50 py-2 px-5 inline-flex font-semibold tracking-wide align-middle duration-500 text-sm text-center bg-info text-white rounded-none"
            >
              2
            </button>
            <button
              type="button"
              className="border-e border-default-200/50 py-2 px-5 inline-flex font-semibold tracking-wide align-middle duration-500 text-sm text-center bg-info text-white rounded-none"
            >
              3
            </button>
            <div className="hs-dropdown relative">
              <button
                type="button"
                className="hs-dropdown-toggle items-center py-2 px-5 inline-flex font-semibold tracking-wide align-middle duration-500 text-sm text-center bg-primary text-white rounded-e-lg"
              >
                Dropdown <LuChevronDown size={16} className="ms-1" />
              </button>
              <div className="hs-dropdown-menu transition-[opacity,margin] duration hs-dropdown-open:opacity-100 opacity-0 hidden bg-white shadow rounded dark:bg-gray-800 dark:border dark:border-gray-700 py-2 z-10">
                <Link
                  className="flex items-center py-2 px-6 rounded-sm text-gray-800 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300"
                  to="#"
                >
                  Dropdown link
                </Link>
                <Link
                  className="flex items-center py-2 px-6 rounded-sm text-gray-800 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300"
                  to="#"
                >
                  Dropdown link
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="flex gap-14">
            <div className="inline-flex flex-col overflow-hidden rounded-sm mb-2">
              <button
                type="button"
                className="border-b border-default-200/50 py-2 px-5 inline-flex font-semibold tracking-wide align-middle duration-500 text-sm text-center bg-primary text-white rounded-t-lg"
              >
                Top
              </button>
              <button
                type="button"
                className="border-b border-default-200/50 py-2 px-5 inline-flex font-semibold tracking-wide align-middle duration-500 text-sm text-center bg-primary text-white rounded-none"
              >
                Middle
              </button>
              <button
                type="button"
                className="py-2 px-5 inline-flex font-semibold tracking-wide align-middle duration-500 text-sm text-center bg-primary text-white rounded-b-lg"
              >
                Bottom
              </button>
            </div>
            <div className="inline-flex flex-col overflow-hidden rounded-sm mb-2">
              <button
                type="button"
                className="border-b border-default-200/50 py-2 px-5 inline-flex font-semibold tracking-wide align-middle duration-500 text-sm text-center bg-info text-white rounded-t-lg"
              >
                Button 1
              </button>
              <button
                type="button"
                className="border-b border-default-200/50 py-2 px-5 inline-flex font-semibold tracking-wide align-middle duration-500 text-sm text-center bg-info text-white rounded-none"
              >
                Button 2
              </button>
              <div className="hs-dropdown relative">
                <button
                  type="button"
                  className="hs-dropdown-toggle items-center py-2 px-5 inline-flex font-semibold tracking-wide align-middle duration-500 text-sm text-center bg-info text-white rounded-b-lg"
                >
                  Dropdown <LuChevronDown size={16} className="ms-1" />
                </button>
                <div className="hs-dropdown-menu transition-[opacity,margin] duration hs-dropdown-open:opacity-100 opacity-0 hidden bg-white shadow rounded dark:bg-gray-800 dark:border dark:border-gray-700 py-2 z-10">
                  <Link
                    className="flex items-center py-2 px-6 rounded-sm text-gray-800 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300"
                    to="#"
                  >
                    Dropdown link
                  </Link>
                  <Link
                    className="flex items-center py-2 px-6 rounded-sm text-gray-800 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300"
                    to="#"
                  >
                    Dropdown link
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Buttons = () => {
  return (
    <div className="grid 2xl:grid-cols-2 gap-6">
      <div className="rounded-lg border border-default-200">
        <ButtonEXample />
        <OutlinesButton />
        <SoftButtons />
        <RoundedButtons />
      </div>
      <div className="rounded-lg border border-default-200">
        <IconsButtons />
        <BLockBUttons />
        <GroupBUttons />
      </div>
    </div>
  );
};

export default Buttons;
