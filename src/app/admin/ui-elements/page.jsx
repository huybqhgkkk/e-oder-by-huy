import { BreadcrumbAdmin } from "@/components";
import Alerts from "./Alerts";
import Badges from "./Badges";
import Buttons from "./Buttons";
import Cards from "./Cards";
import Dropdown from "./Dropdown";
import Modals from "./Modals";
import Offcanvas from "./Offcanvas";
import Popovers from "./Popovers";
import Progressbars from "./Progressbars";
import Spinners from "./Spinners";
import TabAndAccordions from "./TabAndAccordions";

const UiElements = () => {
  return (
    <div className="w-full lg:ps-64">
      <div className="page-content space-y-6 p-6">
        <BreadcrumbAdmin title="Ui Elements" subtitle="admin" />
        <div className="flex flex-col gap-6">
          <Alerts />
          <Buttons />
          <Badges />
          <Cards />
          <Dropdown />
          <TabAndAccordions />
          <Modals />
          <Progressbars />
          <Popovers />
          <Spinners />
          <Offcanvas />
        </div>
      </div>
    </div>
  );
};

export default UiElements;
