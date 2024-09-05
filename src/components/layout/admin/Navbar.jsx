import { useNavigate } from "react-router-dom";
import SimplebarReactClient from "../../SimplebarReactClient";
import { LuX } from "react-icons/lu";
import { logoDarkImg, logoLightImg } from "@/assets/data/images";
import VerticalMenu from "./VerticalMenu";
import { getAdminVerticalMenuItems } from "@/helpers";
import {useRef} from "react";

const MenuAdmin = () => {
  const navigate = useNavigate();
  const sidebarRef = useRef(null);
  const closeOverlayAndBackdrop = () => {
    if (sidebarRef.current) {
      const overlayInstance = window.HSOverlay.getInstance(sidebarRef.current);
      if (overlayInstance) {
        overlayInstance.hide();
      }
    }

    const backdrop = document.querySelector('[data-hs-overlay-backdrop-template]');
    if (backdrop) {
      backdrop.remove();
    }

    navigate("/home");

    document.documentElement.classList.add("selection:bg-primary", "selection:text-white");

    const elementsWithOverflowHidden = document.querySelectorAll('[style*="overflow: hidden"]');
    elementsWithOverflowHidden.forEach(element => {
      element.style.overflow = '';
    });
  };


  return (
      <div
          id="application-sidebar"
          className="hs-overlay fixed inset-y-0 start-0 z-70 hidden w-64 -translate-x-full transform overflow-y-auto border-e border-default-200 bg-white transition-all duration-300 hs-overlay-open:translate-x-0 dark:bg-default-50 lg:bottom-0 lg:right-auto lg:block lg:translate-x-0 hide-in-print"
      >
        <div
            className="sticky top-0 z-70 flex h-18 w-full border-b border-default-200 bg-white dark:bg-default-50 hide-in-print"
        >
          <div className="flex w-full items-center gap-4 px-6">
            <button
                type="button"
                className="text-default-500 hover:text-default-600 lg:hidden"
                data-hs-overlay="#application-sidebar"
                aria-controls="application-sidebar"
                aria-label="Toggle navigation"
            >
              <LuX size={24} />
            </button>
            <div
                className="cursor-pointer"
                onClick={() =>closeOverlayAndBackdrop()}
            >
              <img
                  src={logoDarkImg}
                  height={40}
                  width={130}
                  alt="logo"
                  className="flex h-10 dark:hidden"
              />
              <img
                  src={logoLightImg}
                  height={40}
                  width={130}
                  alt="logo"
                  className="hidden h-10 dark:flex"
              />
            </div>
          </div>
        </div>

        <SimplebarReactClient className="h-[calc(100%-72px)]">
          <VerticalMenu menuItems={getAdminVerticalMenuItems()} />
        </SimplebarReactClient>
      </div>
  );
};

export default MenuAdmin;
