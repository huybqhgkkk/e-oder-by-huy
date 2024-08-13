import { BreadcrumbAdmin } from "@/components";
import { LuBriefcase, LuBuilding2, LuUsers2 } from "react-icons/lu";

const Pricing = () => {
  return (
    <div className="w-full lg:ps-64">
      <div className="page-content space-y-6 p-6">
        <BreadcrumbAdmin title="Pricing" subtitle="Extra Pages" />
        <div className="2xl:px-32 mx-auto ">
          <div className="max-w-lg mx-auto text-center">
            <h2 className="text-2xl font-medium text-default-900 mb-2">
              Our <span className="font-bold">Plans</span>
            </h2>
            <p className="text-default-600">
              We have plans and prices that fit your business perfectly. Make
              your client site a success with our products.
            </p>
          </div>

          <div className="mt-10">
            <div className="grid lg:grid-cols-3 gap-6">
              <div className="rounded-lg border border-default-200">
                <div className="text-center p-6">
                  <h6 className="uppercase">Professional Pack</h6>
                  <div className="bg-primary/20 text-primary border border-primary/50 rounded-full text-2xl flex items-center justify-center w-16 h-16 mx-auto my-6">
                    <LuUsers2 />
                  </div>
                  <h2 className="text-3xl mb-6">
                    $19{" "}
                    <span className="text-sm uppercase font-medium text-gray-400">
                      / Month
                    </span>
                  </h2>

                  <ul className="flex flex-col gap-6">
                    <li>10 GB Storage</li>
                    <li>500 GB Bandwidth</li>
                    <li>No Domain</li>
                    <li>1 User</li>
                    <li>Email Support</li>
                    <li>24x7 Support</li>
                  </ul>

                  <div className="mt-14">
                    <button
                      type="button"
                      className="inline-block tracking-wide align-middle  bg-primary rounded-lg px-6 py-2.5 text-center text-sm font-semibold text-white shadow-sm transition-all duration-200 hover:bg-primary-500 w-full"
                    >
                      Change Plan
                    </button>
                  </div>
                </div>
              </div>

              <div className="rounded-lg border border-default-200">
                <div className="text-center p-6">
                  <h6 className="uppercase">Business Pack</h6>
                  <div className="bg-red-400/20 text-red-400 border border-red-400/50 rounded-full text-2xl flex items-center justify-center w-16 h-16 mx-auto my-6">
                    <LuBriefcase />
                  </div>
                  <h2 className="text-3xl mb-6">
                    $29{" "}
                    <span className="text-sm uppercase font-medium text-gray-400">
                      / Month
                    </span>
                  </h2>

                  <ul className="flex flex-col gap-6">
                    <li>50 GB Storage</li>
                    <li>900 GB Bandwidth</li>
                    <li>2 Domain</li>
                    <li>10 User</li>
                    <li>Email Support</li>
                    <li>24x7 Support</li>
                  </ul>

                  <div className="mt-14">
                    <button
                      type="button"
                      className="inline-block tracking-wide align-middle bg-red-400 rounded-lg px-6 py-2.5 text-center text-sm font-semibold text-white shadow-sm transition-all duration-200 hover:bg-red-500 w-full"
                    >
                      Current Plan
                    </button>
                  </div>
                </div>
              </div>

              <div className="rounded-lg border border-default-200">
                <div className="text-center p-6">
                  <h6 className="uppercase">Enterprise Pack</h6>
                  <div className="bg-primary/20 text-primary border border-primary/50 rounded-full text-2xl flex items-center justify-center w-16 h-16 mx-auto my-6">
                    <LuBuilding2 />
                  </div>
                  <h2 className="text-3xl mb-6">
                    $39{" "}
                    <span className="text-sm uppercase font-medium text-gray-400">
                      / Month
                    </span>
                  </h2>

                  <ul className="flex flex-col gap-6">
                    <li>100 GB Storage</li>
                    <li>Unlimited Bandwidth</li>
                    <li>10 Domain</li>
                    <li>Unlimited User</li>
                    <li>Email Support</li>
                    <li>24x7 Support</li>
                  </ul>

                  <div className="mt-14">
                    <button
                      type="button"
                      className="inline-block tracking-wide align-middle  bg-primary rounded-lg px-6 py-2.5 text-center text-sm font-semibold text-white shadow-sm transition-all duration-200 hover:bg-primary-500 w-full"
                    >
                      Change Plan
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

export default Pricing;
