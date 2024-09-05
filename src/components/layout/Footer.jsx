import { Link } from "react-router-dom";
import { LuHeart } from "react-icons/lu";
import { cn } from "@/utils";

const Footer = ({ hideLinks }) => {
  return (
    <footer
      className={cn(
        "absolute w-full border-t border-default-200 p-6 hide-in-print",
        hideLinks ? "lg:ps-64" : "lg:ps-8"
      )}
    >
      <div className={cn("container", hideLinks && "ms-2")}>
        <div className="grid items-center gap-6 lg:grid-cols-2">
          <p className="text-default-600">
           coded with{" "}
            <LuHeart size={16} className="inline fill-red-500 text-red-500" />{" "}
            by E-team
          </p>

          {!hideLinks && (
            <div className="flex justify-end gap-6">
              <Link to="" className="font-medium text-default-500">
                Terms
              </Link>
              <Link to="" className="font-medium text-default-500">
                Privacy
              </Link>
              <Link to="" className="font-medium text-default-500">
                Cookies
              </Link>
            </div>
          )}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
