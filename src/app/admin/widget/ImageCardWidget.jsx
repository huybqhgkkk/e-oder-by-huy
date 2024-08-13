import { Link } from "react-router-dom";
import Dropdown from "./Dropdown";
// images
import Img1 from "@/assets/images/avatars/avatar7.jpg";
import Img2 from "@/assets/images/covers/2.jpg";
import Img3 from "@/assets/images/small/img-4.jpg";
import Img4 from "@/assets/images/small/img-5.jpg";
import Img5 from "@/assets/images/small/img-6.jpg";
import { LuCalendar, LuEye, LuFileText, LuUsers } from "react-icons/lu";

const ImageCardWidget = () => {
  return (
    <>
      <div className="rounded-lg border border-default-200">
        <div className="p-6 pb-0">
          <div className="text-center mt-2">
            <img src={Img1} alt="" className="mx-auto h-24 rounded-full" />
            <h4 className="text-lg mt-2 mb-0 dark:text-gray-300">Yum N</h4>
            <h6 className="text-gray-500 mt-2 mb-3 dark:text-gray-400">
              User Experience Specialist
            </h6>
            <button
              type="button"
              className="py-2 px-4 inline-flex font-semibold tracking-wide align-middle duration-500 text-sm text-center rounded-lg bg-primary/90 text-white hover:bg-primary me-1"
            >
              Follow
            </button>
            <button
              type="button"
              className="py-2 px-4 inline-flex font-semibold tracking-wide align-middle duration-500 text-sm text-center rounded-lg bg-white border border-gray-200 hover:bg-light hover:border-transparent dark:bg-transparent dark:border-gray-600 dark:hover:bg-secondary/20"
            >
              Message
            </button>
            <div className="mt-7 pt-5 border-t text-start dark:border-gray-600">
              <p className="text-gray-500 mb-2 dark:text-gray-400">
                Hi I'm Yum. I am user experience and user type designer. I have
                been working on UI &amp; UX since last 10 years.
              </p>
              <p className="mb-2">
                <span className="inline-flex items-center gap-1.5 py-0.5 px-1.5 rounded text-xs font-medium bg-success/10 text-success">
                  UI &amp; UX
                </span>
                <span className="inline-flex items-center gap-1.5 py-0.5 px-1.5 rounded text-xs font-medium bg-success/10 text-success">
                  Frontend Development
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="rounded-lg border border-default-200 relative">
        <img src={Img2} alt="Yum" className="w-full" />
        <div className="h-4 absolute top-5 end-5">
          <Dropdown />
        </div>
        <div className="p-6 text-center pt-0 -mt-12">
          <div className="profile-info pb-3">
            <img src={Img1} alt="" className="mx-auto h-24 rounded-full" />
            <h4 className="text-lg mt-2 mb-0 dark:text-gray-300">Yum N</h4>
            <h6 className="text-gray-500 mt-2 mb-3 dark:text-gray-400">
              User Experience Specialist
            </h6>
            <button
              type="button"
              className="rounded-lg py-2 px-4 font-semibold tracking-wide justify-center duration-500 text-sm text-center rounded-lg-sm bg-primary/90 text-white hover:bg-primary me-1"
            >
              Follow
            </button>
            <button
              type="button"
              className="align-middle justify-center duration-500 text-sm text-center rounded-lg py-2 px-4 font-semibold tracking-wide  bg-white border border-gray-200 hover:bg-light hover:border-transparent dark:bg-transparent dark:border-gray-600 dark:hover:bg-secondary/20"
            >
              Message
            </button>
          </div>
        </div>
      </div>

      <div className="rounded-lg border border-default-200">
        <div className="p-6">
          <div className="flex gap-5">
            <img src={Img1} className="h-20 rounded-full" alt="Yum" />
            <div className="flex-grow">
              <h4 className="text-lg mt-2 mb-0 dark:text-gray-300">Yum N</h4>
              <h6 className="text-gray-500 font-normal mt-1 mb-4 dark:text-gray-400">
                New York, USA
              </h6>
            </div>
            <div className="h-4">
              <Dropdown />
            </div>
          </div>
          <div className="flex items-center justify-between mb-2 mt-7">
            <div>
              <span className="fs-15 flex gap-1 items-center">
                <LuCalendar size={16} className="me-1" />
                40 Days Ago
              </span>
            </div>
            <div>
              <span className="fs-15 flex gap-1 items-center">
                <LuUsers size={16} className="me-1" />
                12,001
              </span>
            </div>
            <div>
              <span className="fs-15 flex gap-1 items-center">
                <LuCalendar size={16} className="me-1" />
                1200
              </span>
            </div>
          </div>
          <div className="mt-1 pt-2 border-t text-start dark:border-gray-600">
            <p className="text-gray-500 mb-2 dark:text-gray-400">
              Hi I'm Yum. I am foodie and love to eat different cuisine!
            </p>
          </div>
          <div className="flex items-center gap-5 mt-3">
            <div>
              <img src={Img3} alt="" className="img-fluid rounded shadow" />
            </div>
            <div>
              <img src={Img4} alt="" className="img-fluid rounded shadow" />
            </div>
            <div>
              <img src={Img5} alt="" className="img-fluid rounded shadow" />
            </div>
          </div>
          <div className="flex items-center gap-5 mt-10">
            <div className="w-full">
              <button
                type="button"
                className="justify-center rounded-lg py-2 px-4 inline-flex font-semibold tracking-wide align-middle duration-500 text-sm text-center rounded-lg-sm w-full bg-primary/90 text-white hover:bg-primary me-1"
              >
                Follow
              </button>
            </div>
            <div className="w-full">
              <button
                type="button"
                className="justify-center rounded-lg w-full py-2 px-4 inline-flex font-semibold tracking-wide align-middle duration-500 text-sm text-center rounded-lg-sm bg-white border border-gray-200 hover:bg-light hover:border-transparent dark:bg-transparent dark:border-gray-600 dark:hover:bg-secondary/20"
              >
                Message
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="space-y-5">
        <div className="rounded-lg border border-default-200">
          <div className="grid md:grid-cols-3 items-center">
            <div>
              <img src={Img1} className="h-full" alt="Yum" />
            </div>
            <div className="md:col-span-2">
              <div className="p-6 py-0">
                <h5 className="text-lg mt-2 mb-0 dark:text-gray-300">Yum N</h5>
                <h6 className="text-gray-500 font-normal mt-0 mb-3 dark:text-gray-400">
                  New York, USA
                </h6>
                <div className="flex items-center gap-5 mt-5">
                  <div className="w-full">
                    <button
                      type="button"
                      className="justify-center rounded-lg py-2 px-4 inline-flex font-semibold tracking-wide align-middle duration-500 text-sm text-center rounded-lg-sm w-full bg-primary/90 text-white hover:bg-primary me-1"
                    >
                      Follow
                    </button>
                  </div>
                  <div className="w-full">
                    <button
                      type="button"
                      className="justify-center rounded-lg py-2 px-4 inline-flex font-semibold tracking-wide align-middle duration-500 text-sm text-center rounded-lg-sm bg-white border border-gray-200 hover:bg-light hover:border-transparent dark:bg-transparent dark:border-gray-600 dark:hover:bg-secondary/20"
                    >
                      Message
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="rounded-lg border border-default-200">
          <div className="p-6">
            <div className="flex items-center gap-5">
              <img src={Img1} className="h-20 rounded" alt="Yum" />
              <div className="flex-grow-1">
                <h5 className="mt-1 mb-0 dark:text-gray-300">Yum N</h5>
                <h6 className="text-primary mt-1 mb-1">
                  <Link to="">@yum</Link>
                </h6>
                <p className="text-default-600">
                  Designer | Creative | Thinker
                </p>
              </div>
            </div>
            <div className="flex items-center justify-between border-t pt-4 mt-6 dark:border-gray-600">
              <div>
                <div className="flex items-center gap-2">
                  <LuUsers className="w-6 h-6 fill-secondary/20 stroke-secondary" />
                  <div className="flex-grow">
                    <h5 className="mt-2 pt-1 mb-0 fs-16">1.9M</h5>
                    <h6 className="fw-normal mt-0">Followers</h6>
                  </div>
                </div>
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <LuEye className="w-6 h-6 fill-secondary/20 stroke-secondary" />
                  <div className="flex-grow">
                    <h5 className="mt-2 pt-1 mb-0 fs-16">19M</h5>
                    <h6 className="fw-normal mt-0">Views</h6>
                  </div>
                </div>
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <LuFileText className="w-6 h-6 fill-secondary/20 stroke-secondary" />
                  <div className="flex-grow">
                    <h5 className="mt-2 pt-1 mb-0 fs-16">1k</h5>
                    <h6 className="fw-normal mt-0">Posts</h6>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-5 mt-10">
              <div className="w-full">
                <button
                  type="button"
                  className="justify-center rounded-lg py-2 px-4 inline-flex font-semibold tracking-wide align-middle duration-500 text-sm text-center rounded-lg-sm w-full bg-primary/90 text-white hover:bg-primary me-1"
                >
                  Follow
                </button>
              </div>
              <div className="w-full">
                <button
                  type="button"
                  className="justify-center rounded-lg w-full py-2 px-4 inline-flex font-semibold tracking-wide align-middle duration-500 text-sm text-center rounded-lg-sm bg-white border border-gray-200 hover:bg-light hover:border-transparent dark:bg-transparent dark:border-gray-600 dark:hover:bg-secondary/20"
                >
                  Message
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ImageCardWidget;
