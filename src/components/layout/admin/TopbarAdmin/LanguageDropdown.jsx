import { usaImg, vnImg, jpImg } from "@/assets/data/images";
import { LuGlobe } from "react-icons/lu";
import { useTranslation } from "react-i18next";
import {useEffect, useState} from "react";

const languages = [
    {
        name: "Vietnamese",
        image: vnImg,
        code: "vn",
    },
    {
        name: "Japanese",
        image: jpImg,
        code: "jp",
    },
    {
        name: "English",
        image: usaImg,
        code: "en",
    },
];

const LanguageDropdown = () => {
    const { i18n } = useTranslation();
    const [currentLanguage, setCurrentLanguage] = useState("vn");

    useEffect(() => {
        if (i18n.language !== "vn") {
            i18n.changeLanguage("vn");
        }
        setCurrentLanguage(i18n.language);
    }, [i18n]);

    const changeLanguage = (code) => {
        i18n.changeLanguage(code);
        setCurrentLanguage(code);
    };


    return (
        <div className="hs-dropdown relative inline-flex [--placement:bottom-right]">
            <button
                id="hs-dropdown-with-header"
                type="button"
                className="hs-dropdown-toggle inline-flex h-10 w-10 flex-shrink-0 items-center justify-center gap-2 rounded-full bg-default-100 align-middle text-xs font-medium text-default-700 transition-all hover:text-primary"
            >
                <LuGlobe size={24} />
            </button>
            <div className="hs-dropdown-menu duration mt-2 hidden min-w-[12rem] rounded-lg border border-default-200 bg-white p-2 opacity-0 shadow-md transition-[opacity,margin] hs-dropdown-open:opacity-100 dark:bg-default-50">
                {languages.map((language) => (
                    <button
                        key={language.name}
                        onClick={() => changeLanguage(language.code)}
                        className={`flex w-full items-center gap-x-3.5 rounded px-3 py-2 text-sm transition-all hover:bg-default-100 ${
                            currentLanguage === language.code ? "bg-default-200" : ""
                        }`}
                    >
                        <img
                            src={language.image}
                            width={24}
                            height={16}
                            alt={`${language.name} flag`}
                            className="h-4"
                        />
                        <span className="align-middle">{language.name}</span>
                    </button>
                ))}
            </div>
        </div>
    );
};

export default LanguageDropdown;
