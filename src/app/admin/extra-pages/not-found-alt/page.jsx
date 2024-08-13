import { BreadcrumbAdmin } from "@/components";
import { LuHome } from "react-icons/lu";
import { Link } from "react-router-dom";

const Error404Alt = () => {
  return (
    <div className="w-full lg:ps-64">
      <div className="page-content space-y-6 p-6">
        <BreadcrumbAdmin title="Error 404 Alt" subtitle="Extra Pages" />
        <div className="flex flex-col items-center justify-center">
          <div className="text-center max-w-xl">
            <h1 className="text-primary text-7xl drop-shadow-xl">404</h1>
            <h4 className="text-red-500 text-lg uppercase my-7">
              Page Not Found
            </h4>
            <p>
              It's looking like you may have taken a wrong turn. Don't worry...
              it happens to the best of us. Here's a little tip that might help
              you get back on track.
            </p>
            <Link
              to="/"
              className="items-center rounded-lg py-2 px-5 inline-flex font-semibold tracking-wide align-middle duration-500 text-sm text-center bg-primary hover:bg-primary-600 text-white mt-10"
            >
              <LuHome className="me-2"></LuHome> Back to Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Error404Alt;
