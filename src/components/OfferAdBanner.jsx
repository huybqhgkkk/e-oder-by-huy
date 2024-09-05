import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { usaImg, vnImg, jpImg } from "@/assets/data/images";
import {useDispatch, useSelector} from "react-redux";
import {setLanguage} from "@/store/reduce/authSlice.js";

const OfferAdBanner = () => {
  const { i18n } = useTranslation();
  const disaptch = useDispatch();
  const currentLanguage = useSelector(state => state.auth.language);

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    disaptch(setLanguage(lng));
  };

  const getLanguageDetails = () => {
    switch (currentLanguage) {
      case "vn":
        return { img: vnImg, label: "Tiếng Việt" };
      case "en":
        return { img: usaImg, label: "English (USA)" };
      case "jp":
        return { img: jpImg, label: "日本語" };
      default:
        return { img: vnImg, label: "Tiếng Việt" };
    }
  };

  const { img, label } = getLanguageDetails();

  return (
      <div className="w-full h-8 items-center bg-primary-950 text-white flex">
        <div className="container">
          <nav className="flex justify-between">
            <div className="flex">
              <div className="hs-dropdown relative inline-flex [--placement:bottom] [--trigger:hover]">
                <button className="hs-dropdown-toggle relative flex items-center text-base after:absolute after:inset-0 hover:after:-bottom-10">
                  <img
                      alt="Image"
                      height={14}
                      width={21}
                      className="me-3 h-3.5"
                      src={img}
                  />
                  <span className="text-xs font-medium">{label}</span>
                </button>
                <div className="absolute hs-dropdown-menu z-50 mt-4 min-w-[140px] rounded-lg border border-default-100 bg-white p-1.5 opacity-0 shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px] transition-[opacity,margin] hs-dropdown-open:opacity-100 dark:bg-default-50">
                  <ul className="flex flex-col gap-1">
                    <li>
                      <button
                          className="flex w-full items-center gap-2 rounded px-3 py-2 font-normal text-default-600 transition-all hover:bg-default-100 hover:text-default-700"
                          onClick={() => changeLanguage("vn")}
                      >
                        <img
                            src={vnImg}
                            height={16}
                            width={24}
                            alt="flag"
                            className="h-4"
                        />
                        Tiếng Việt
                      </button>
                    </li>
                    <li>
                      <button
                          className="flex w-full items-center gap-2 rounded px-3 py-2 font-normal text-default-600 transition-all hover:bg-default-100 hover:text-default-700"
                          onClick={() => changeLanguage("jp")}
                      >
                        <img
                            src={jpImg}
                            height={16}
                            width={24}
                            alt="flag"
                            className="h-4"
                        />
                        日本語
                      </button>
                    </li>
                    <li>
                      <button
                          className="flex w-full items-center gap-2 rounded px-3 py-2 font-normal text-default-600 transition-all hover:bg-default-100 hover:text-default-700"
                          onClick={() => changeLanguage("en")}
                      >
                        <img
                            src={usaImg}
                            height={16}
                            width={24}
                            alt="flag"
                            className="h-4"
                        />
                        English (USA)
                      </button>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div>
              <ul className="flex items-center justify-end mb-0">
                <li className="menu-item flex items-center mr-4">
                  <Link className="text-sm hover:text-primary" to="/faqs">
                    Help
                  </Link>
                </li>
                <li className="menu-item flex">
                  <Link className="text-sm hover:text-primary" to="/contact-us">
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
  );
};

export default OfferAdBanner;
