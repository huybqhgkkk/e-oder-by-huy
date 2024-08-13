import { LuAlertCircle, LuChevronUp } from "react-icons/lu";

const NavTabs = () => {
  return (
    <div className="rounded-lg border border-default-200">
      <div className="p-6">
        <div className="flex justify-between items-center">
          <h4 className="font-medium text-base text-default-600 mb-4">
            Nav Tabs
          </h4>
        </div>
        <div className="pt-5">
          <div>
            <nav
              className="flex space-x-3 border-b dark:border-gray-600"
              aria-label="Tabs"
              role="tablist"
            >
              <button
                type="button"
                className="hs-tab-active:font-semibold hs-tab-active:border-primary hs-tab-active:text-primary py-4 px-1 inline-flex items-center gap-2 border-b-2 border-transparent -mb-px transition-all text-sm whitespace-nowrap text-gray-500 hover:text-primary dark:text-gray-300"
                id="tabs-with-underline-item-1"
                data-hs-tab="#tabs-with-underline-1"
                aria-controls="tabs-with-underline-1"
                role="tab"
              >
                Home
              </button>
              <button
                type="button"
                className="hs-tab-active:font-semibold hs-tab-active:border-primary hs-tab-active:text-primary py-4 px-1 inline-flex items-center gap-2 border-b-2 border-transparent -mb-px transition-all text-sm whitespace-nowrap text-gray-500 hover:text-primary dark:text-gray-300"
                id="tabs-with-underline-item-2"
                data-hs-tab="#tabs-with-underline-2"
                aria-controls="tabs-with-underline-2"
                role="tab"
              >
                Profile
              </button>
              <button
                type="button"
                className="hs-tab-active:font-semibold hs-tab-active:border-primary hs-tab-active:text-primary py-4 px-1 inline-flex items-center gap-2 border-b-2 border-transparent -mb-px transition-all text-sm whitespace-nowrap text-gray-500 hover:text-primary dark:text-gray-300 active "
                id="tabs-with-underline-item-3"
                data-hs-tab="#tabs-with-underline-3"
                aria-controls="tabs-with-underline-3"
                role="tab"
              >
                Messages
              </button>
            </nav>
            <div className="mt-3 overflow-hidden">
              <div
                id="tabs-with-underline-1"
                role="tabpanel"
                aria-labelledby="tabs-with-underline-item-1"
                className="transition-all duration-300 transform hidden"
              >
                <p className="text-default-600">
                  Vakal text here dolor sit amet, consectetuer adipiscing elit.
                  Aenean commodo ligula eget dolor. Aenean massa. Cum sociis
                  natoque penatibus et magnis dis parturient montes, nascetur
                  ridiculus mus. Donec quam felis, ultricies nec, pellentesque
                  eu, pretium quis, sem. Nulla consequat massa quis enim.
                </p>
                <p className="text-default-600 mt-5">
                  Donec pede justo, fringilla vel, aliquet nec, vulputate eget,
                  arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae,
                  justo. Nullam dictum felis eu pede mollis pretium. Integer
                  tincidunt.Cras dapibus. Vivamus elementum semper nisi. Aenean
                  vulputate eleifend tellus. Aenean leo ligula, porttitor eu,
                  consequat vitae, eleifend ac, enim.
                </p>
              </div>
              <div
                id="tabs-with-underline-2"
                role="tabpanel"
                aria-labelledby="tabs-with-underline-item-2"
                className="transition-all duration-300 transform hidden"
              >
                <p className="text-default-600">
                  Donec pede justo, fringilla vel, aliquet nec, vulputate eget,
                  arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae,
                  justo. Nullam dictum felis eu pede mollis pretium. Integer
                  tincidunt.Cras dapibus. Vivamus elementum semper nisi. Aenean
                  vulputate eleifend tellus. Aenean leo ligula, porttitor eu,
                  consequat vitae, eleifend ac, enim.
                </p>
                <p className="text-default-600 mt-5">
                  Vakal text here dolor sit amet, consectetuer adipiscing elit.
                  Aenean commodo ligula eget dolor. Aenean massa. Cum sociis
                  natoque penatibus et magnis dis parturient montes, nascetur
                  ridiculus mus. Donec quam felis, ultricies nec, pellentesque
                  eu, pretium quis, sem. Nulla consequat massa quis enim.
                </p>
              </div>
              <div
                id="tabs-with-underline-3"
                role="tabpanel"
                aria-labelledby="tabs-with-underline-item-3"
                className="transition-all duration-300 transform active"
              >
                <p className="text-default-600">
                  Vakal text here dolor sit amet, consectetuer adipiscing elit.
                  Aenean commodo ligula eget dolor. Aenean massa. Cum sociis
                  natoque penatibus et magnis dis parturient montes, nascetur
                  ridiculus mus. Donec quam felis, ultricies nec, pellentesque
                  eu, pretium quis, sem. Nulla consequat massa quis enim.
                </p>
                <p className="text-default-600 mt-5">
                  Donec pede justo, fringilla vel, aliquet nec, vulputate eget,
                  arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae,
                  justo. Nullam dictum felis eu pede mollis pretium. Integer
                  tincidunt.Cras dapibus. Vivamus elementum semper nisi. Aenean
                  vulputate eleifend tellus. Aenean leo ligula, porttitor eu,
                  consequat vitae, eleifend ac, enim.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const NavPillsTab = () => {
  return (
    <div className="rounded-lg border border-default-200">
      <div className="p-6">
        <div className="flex justify-between items-center">
          <h4 className="font-medium text-base text-default-600 mb-4">
            Nav Pills
          </h4>
        </div>
        <div className="pt-5">
          <div>
            <nav
              className="flex items-center justify-around rounded space-x-3 bg-gray-100 p-2 dark:bg-gray-900/40"
              aria-label="Tabs"
              role="tablist"
            >
              <button
                type="button"
                className="hs-tab-active:-semibold hs-tab-active:bg-white dark:hs-tab-active:bg-gray-600/50 w-full flex justify-center py-2 rounded items-center gap-2 border-b-2 border-transparent -mb-px transition-all text-sm whitespace-nowrap text-gray-500 dark:text-gray-300"
                id="tabs-with-underline-item-4"
                data-hs-tab="#tabs-with-underline-4"
                aria-controls="tabs-with-underline-4"
                role="tab"
              >
                Home
              </button>
              <button
                type="button"
                className="hs-tab-active:-semibold hs-tab-active:bg-white dark:hs-tab-active:bg-gray-600/50 w-full flex justify-center py-2 rounded items-center gap-2 border-b-2 border-transparent -mb-px transition-all text-sm whitespace-nowrap text-gray-500 dark:text-gray-300"
                id="tabs-with-underline-item-5"
                data-hs-tab="#tabs-with-underline-5"
                aria-controls="tabs-with-underline-5"
                role="tab"
              >
                Profile
              </button>
              <button
                type="button"
                className="hs-tab-active:-semibold hs-tab-active:bg-white dark:hs-tab-active:bg-gray-600/50 w-full flex justify-center py-2 rounded items-center gap-2 border-b-2 border-transparent -mb-px transition-all text-sm whitespace-nowrap text-gray-500 dark:text-gray-300 active"
                id="tabs-with-underline-item-6"
                data-hs-tab="#tabs-with-underline-6"
                aria-controls="tabs-with-underline-6"
                role="tab"
              >
                Messages
              </button>
            </nav>
            <div className="mt-3 overflow-hidden">
              <div
                id="tabs-with-underline-4"
                className=" transition-all duration-300 transform hidden"
                role="tabpanel"
                aria-labelledby="tabs-with-underline-item-1"
              >
                <p className="text-default-600">
                  Vakal text here dolor sit amet, consectetuer adipiscing elit.
                  Aenean commodo ligula eget dolor. Aenean massa. Cum sociis
                  natoque penatibus et magnis dis parturient montes, nascetur
                  ridiculus mus. Donec quam felis, ultricies nec, pellentesque
                  eu, pretium quis, sem. Nulla consequat massa quis enim.
                </p>
                <p className="text-default-600 mt-5">
                  Donec pede justo, fringilla vel, aliquet nec, vulputate eget,
                  arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae,
                  justo. Nullam dictum felis eu pede mollis pretium. Integer
                  tincidunt.Cras dapibus. Vivamus elementum semper nisi. Aenean
                  vulputate eleifend tellus. Aenean leo ligula, porttitor eu,
                  consequat vitae, eleifend ac, enim.
                </p>
              </div>
              <div
                id="tabs-with-underline-5"
                className="transition-all duration-300 transform  hidden"
                role="tabpanel"
                aria-labelledby="tabs-with-underline-item-2"
              >
                <p className="text-default-600">
                  Donec pede justo, fringilla vel, aliquet nec, vulputate eget,
                  arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae,
                  justo. Nullam dictum felis eu pede mollis pretium. Integer
                  tincidunt.Cras dapibus. Vivamus elementum semper nisi. Aenean
                  vulputate eleifend tellus. Aenean leo ligula, porttitor eu,
                  consequat vitae, eleifend ac, enim.
                </p>
                <p className="text-default-600 mt-5">
                  Vakal text here dolor sit amet, consectetuer adipiscing elit.
                  Aenean commodo ligula eget dolor. Aenean massa. Cum sociis
                  natoque penatibus et magnis dis parturient montes, nascetur
                  ridiculus mus. Donec quam felis, ultricies nec, pellentesque
                  eu, pretium quis, sem. Nulla consequat massa quis enim.
                </p>
              </div>
              <div
                id="tabs-with-underline-6"
                className="transition-all duration-300 transform  active"
                role="tabpanel"
                aria-labelledby="tabs-with-underline-item-3"
              >
                <p className="text-default-600">
                  Vakal text here dolor sit amet, consectetuer adipiscing elit.
                  Aenean commodo ligula eget dolor. Aenean massa. Cum sociis
                  natoque penatibus et magnis dis parturient montes, nascetur
                  ridiculus mus. Donec quam felis, ultricies nec, pellentesque
                  eu, pretium quis, sem. Nulla consequat massa quis enim.
                </p>
                <p className="text-default-600 mt-5">
                  Donec pede justo, fringilla vel, aliquet nec, vulputate eget,
                  arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae,
                  justo. Nullam dictum felis eu pede mollis pretium. Integer
                  tincidunt.Cras dapibus. Vivamus elementum semper nisi. Aenean
                  vulputate eleifend tellus. Aenean leo ligula, porttitor eu,
                  consequat vitae, eleifend ac, enim.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const ExampleAccordions = () => {
  return (
    <div className="rounded-lg border border-default-200">
      <div className="flex justify-between items-center p-5">
        <h4 className="font-medium text-base text-default-600 mb-4">
          Accordions Example
        </h4>
      </div>
      <div className="w-full p-5 pt-0 mx-auto">
        <div>
          <div className="hs-accordion-group space-y-3">
            <div className="rounded-lg border border-default-200">
              <div
                className="hs-accordion active"
                id="hs-basic-with-title-and-arrow-stretched-heading-one"
              >
                <button
                  className="hs-accordion-toggle group p-3 inline-flex items-center gap-x-3 w-full font-semibold text-left text-gray-800 transition hover:text-gray-500 dark:text-gray-300 dark:hover:text-gray-400 fc-collapse open"
                  aria-controls="hs-basic-with-title-and-arrow-stretched-collapse-one"
                >
                  What is Lorem Ipsum?
                  <LuChevronUp
                    size={20}
                    className="fc-collapse-open:rotate-180 ms-auto transition-all"
                  />
                </button>
                <div
                  id="hs-basic-with-title-and-arrow-stretched-collapse-one"
                  className="hs-accordion-content w-full overflow-hidden transition-[height] duration-300"
                  aria-labelledby="hs-basic-with-title-and-arrow-stretched-heading-one"
                >
                  <div className="border-t p-3 border-gray-200 dark:border-gray-600">
                    <p className="text-gray-800 dark:text-gray-400">
                      Anim pariatur cliche reprehenderit, enim eiusmod high life
                      accusamus terry richardson ad squid. 3 wolf moon officia
                      aute, non cupidatat skateboard dolor brunch. Food truck
                      quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon
                      tempor, sunt aliqua put a bird on it squid single-origin
                      coffee nulla assumenda shoreditch et. Nihil anim keffiyeh
                      helvetica, craft beer labore wes anderson cred nesciunt
                      sapiente ea proident. Ad vegan excepteur butcher vice
                      lomo. Leggings occaecat craft beer farm-to-table, raw
                      denim aesthetic synth nesciunt you probably haven't heard
                      of them accusamus labore sustainable VHS.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="rounded-lg border border-default-200">
              <div
                className="hs-accordion"
                id="hs-basic-with-title-and-arrow-stretched-heading-two"
              >
                <button
                  className="hs-accordion-toggle group p-3 inline-flex items-center gap-x-3 w-full font-semibold text-left text-gray-800 transition hover:text-gray-500 dark:text-gray-300 dark:hover:text-gray-400 fc-collapse"
                  aria-controls="hs-basic-with-title-and-arrow-stretched-collapse-two"
                >
                  Why do we use it?
                  <LuChevronUp
                    size={20}
                    className="fc-collapse-open:rotate-180 ms-auto transition-all"
                  />
                </button>
                <div
                  id="hs-basic-with-title-and-arrow-stretched-collapse-two"
                  className="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300"
                  aria-labelledby="hs-basic-with-title-and-arrow-stretched-heading-two"
                >
                  <div className="border-t p-3 border-gray-200 dark:border-gray-600">
                    <p className="text-gray-800 dark:text-gray-400">
                      Anim pariatur cliche reprehenderit, enim eiusmod high life
                      accusamus terry richardson ad squid. 3 wolf moon officia
                      aute, non cupidatat skateboard dolor brunch. Food truck
                      quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon
                      tempor, sunt aliqua put a bird on it squid single-origin
                      coffee nulla assumenda shoreditch et. Nihil anim keffiyeh
                      helvetica, craft beer labore wes anderson cred nesciunt
                      sapiente ea proident. Ad vegan excepteur butcher vice
                      lomo. Leggings occaecat craft beer farm-to-table, raw
                      denim aesthetic synth nesciunt you probably haven't heard
                      of them accusamus labore sustainable VHS.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="rounded-lg border border-default-200">
              <div
                className="hs-accordion"
                id="hs-basic-with-title-and-arrow-stretched-heading-three"
              >
                <button
                  className="hs-accordion-toggle group p-3 inline-flex items-center gap-x-3 w-full font-semibold text-left text-gray-800 transition hover:text-gray-500 dark:text-gray-300 dark:hover:text-gray-400 fc-collapse"
                  aria-controls="hs-basic-with-title-and-arrow-stretched-collapse-three"
                >
                  Where does it come from?
                  <LuChevronUp
                    size={20}
                    className="fc-collapse-open:rotate-180 ms-auto transition-all"
                  />
                </button>
                <div
                  id="hs-basic-with-title-and-arrow-stretched-collapse-three"
                  className="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300"
                  aria-labelledby="hs-basic-with-title-and-arrow-stretched-heading-three"
                >
                  <div className="border-t p-3 border-gray-200 dark:border-gray-600">
                    <p className="text-gray-800 dark:text-gray-400">
                      Anim pariatur cliche reprehenderit, enim eiusmod high life
                      accusamus terry richardson ad squid. 3 wolf moon officia
                      aute, non cupidatat skateboard dolor brunch. Food truck
                      quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon
                      tempor, sunt aliqua put a bird on it squid single-origin
                      coffee nulla assumenda shoreditch et. Nihil anim keffiyeh
                      helvetica, craft beer labore wes anderson cred nesciunt
                      sapiente ea proident. Ad vegan excepteur butcher vice
                      lomo. Leggings occaecat craft beer farm-to-table, raw
                      denim aesthetic synth nesciunt you probably haven't heard
                      of them accusamus labore sustainable VHS.
                    </p>
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

const CustomAccordions = () => {
  return (
    <div className="rounded-lg border border-default-200">
      <div className="flex justify-between items-center p-5">
        <h4 className="font-medium text-base text-default-600 mb-4">
          Custom Accordion
        </h4>
      </div>
      <div className="p-5 ps-8 pt-0">
        <div className="hs-accordion-group ps-8 border-dashed border-s-2 dark:border-gray-600">
          <div
            className="hs-accordion active"
            id="hs-basic-with-title-and-arrow-stretched-heading-one"
          >
            <button
              className="hs-accordion-toggle p-3 bg-gray-100 rounded inline-flex items-center gap-x-3 w-full font-semibold text-left text-gray-800 transition hover:text-gray-500 dark:text-gray-300 dark:hover:text-gray-400 dark:bg-gray-600/50 open"
              aria-controls="hs-basic-with-title-and-arrow-stretched-collapse-one"
            >
              <div className="p-3 relative text-center flex items-center before:absolute before:-start-[25px] before:border before:top-[10px] before:w-[15px] h-[2px] before:bg-gray-100 before:z-10 dark:before:border-gray-600">
                <h5 className="m-0">
                  <LuAlertCircle
                    size={24}
                    className=" text-primary absolute -start-[57px] -top-0.5 bg-white border-full me-[1px] dark:bg-default-50"
                  />
                  What is Anim text here?
                </h5>
              </div>
            </button>
            <div
              id="hs-basic-with-title-and-arrow-stretched-collapse-one"
              className="hs-accordion-content w-full overflow-hidden transition-[height] duration-300"
              aria-labelledby="hs-basic-with-title-and-arrow-stretched-heading-one"
            >
              <div className="p-3 border-gray-200">
                <p className="text-gray-800 dark:text-gray-400">
                  Anim pariatur cliche reprehenderit, enim eiusmod high life
                  accusamus terry richardson ad squid. 3 wolf moon officia aute,
                  non cupidatat skateboard dolor brunch. Food truck quinoa
                  nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt
                  aliqua put a bird on it squid single-origin coffee nulla
                  assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft
                  beer labore wes anderson cred nesciunt sapiente ea proident.
                  Ad vegan excepteur butcher vice lomo. Leggings occaecat craft
                  beer farm-to-table, raw denim aesthetic synth nesciunt you
                  probably haven't heard of them accusamus labore sustainable
                  VHS.
                </p>
              </div>
            </div>
          </div>
          <div
            className="hs-accordion mt-3"
            id="hs-basic-with-title-and-arrow-stretched-heading-two"
          >
            <button className="hs-accordion-toggle p-3 bg-gray-100 rounded inline-flex items-center gap-x-3 w-full font-semibold text-left text-gray-800 transition hover:text-gray-500 dark:text-gray-300 dark:hover:text-gray-400 dark:bg-gray-600/50">
              <div className="p-3 relative text-center flex items-center before:absolute before:-start-[25px] before:border before:top-[10px] before:w-[15px] h-[2px] before:bg-gray-100 before:z-10 dark:before:border-gray-600">
                <h5 className="m-0">
                  <LuAlertCircle
                    size={24}
                    className="text-primary absolute -start-[57px] -top-0.5 bg-white border-full me-[1px] dark:bg-default-50"
                  />
                  Why do we use it?
                </h5>
              </div>
            </button>
            <div
              id="hs-basic-with-title-and-arrow-stretched-collapse-two"
              className="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300"
              aria-labelledby="hs-basic-with-title-and-arrow-stretched-heading-two"
            >
              <div className="p-3 border-gray-200">
                <p className="text-gray-800 dark:text-gray-400">
                  Anim pariatur cliche reprehenderit, enim eiusmod high life
                  accusamus terry richardson ad squid. 3 wolf moon officia aute,
                  non cupidatat skateboard dolor brunch. Food truck quinoa
                  nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt
                  aliqua put a bird on it squid single-origin coffee nulla
                  assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft
                  beer labore wes anderson cred nesciunt sapiente ea proident.
                  Ad vegan excepteur butcher vice lomo. Leggings occaecat craft
                  beer farm-to-table, raw denim aesthetic synth nesciunt you
                  probably haven't heard of them accusamus labore sustainable
                  VHS.
                </p>
              </div>
            </div>
          </div>
          <div
            className="hs-accordion mt-3"
            id="hs-basic-with-title-and-arrow-stretched-heading-three"
          >
            <button className="hs-accordion-toggle p-3 bg-gray-100 rounded inline-flex items-center gap-x-3 w-full font-semibold text-left text-gray-800 transition hover:text-gray-500 dark:text-gray-300 dark:hover:text-gray-400 dark:bg-gray-600/50">
              <div className="p-3 relative text-center flex items-center before:absolute before:-start-[25px] before:border before:top-[10px] before:w-[15px] h-[2px] before:bg-gray-100 before:z-10 dark:before:border-gray-600">
                <h5 className="m-0">
                  <LuAlertCircle
                    size={24}
                    className="text-primary absolute -start-[57px] -top-0.5 bg-white border-full me-[1px] dark:bg-default-50"
                  />
                  Where does it come from?
                </h5>
              </div>
            </button>
            <div
              id="hs-basic-with-title-and-arrow-stretched-collapse-three"
              className="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300"
              aria-labelledby="hs-basic-with-title-and-arrow-stretched-heading-three"
            >
              <div className="p-3 border-gray-200">
                <p className="text-gray-800 dark:text-gray-400">
                  Anim pariatur cliche reprehenderit, enim eiusmod high life
                  accusamus terry richardson ad squid. 3 wolf moon officia aute,
                  non cupidatat skateboard dolor brunch. Food truck quinoa
                  nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt
                  aliqua put a bird on it squid single-origin coffee nulla
                  assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft
                  beer labore wes anderson cred nesciunt sapiente ea proident.
                  Ad vegan excepteur butcher vice lomo. Leggings occaecat craft
                  beer farm-to-table, raw denim aesthetic synth nesciunt you
                  probably haven't heard of them accusamus labore sustainable
                  VHS.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const TabAndAccordions = () => {
  return (
    <>
      <div className="grid 2xl:grid-cols-2 gap-6">
        <NavTabs />
        <NavPillsTab />
      </div>
      <div className="grid lg:grid-cols-2 gap-6">
        <ExampleAccordions />
        <CustomAccordions />
      </div>
    </>
  );
};

export default TabAndAccordions;
