import { lazy } from "react";
import { useLocation, useNavigate, useSearchParams } from "react-router-dom";
import { createPortal } from "react-dom";
import { LuSearch } from "react-icons/lu";
import { useFilterContext } from "@/context";
const FloatingSearchBar = lazy(() => import("./FloatingSearchBar"));

const ProductSearchBar = () => {
  const { search, updateSearch } = useFilterContext();

  const pagesWithDishes = ["/dishes", "/dishes-list"];
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const [searchParams] = useSearchParams();
  const queryParams = Object.fromEntries([...searchParams]);

  const handleSearch = (e) => {
    updateSearch(e.target.value);
    setTimeout(() => {
      if (!pagesWithDishes.includes(pathname)) {
        navigate(`/dishes? + ${new URLSearchParams(queryParams).toString()}`);
      }
    }, 10);
  };

  return (
    <form>
      <div className="relative w-72">
        <input
          type="search"
          placeholder="Search for items..."
          value={search ?? ""}
          onChange={handleSearch}
          className={
            "form-input w-full rounded-full  border-transparent bg-primary-400/20 px-4 py-1.5 ps-10 placeholder-primary-500 dark:bg-default-50"
          }
        />
        <span className="absolute start-3 top-1/2 -translate-y-1/2">
          <LuSearch className="text-primary-500" />
        </span>
      </div>

      <button className="hidden" type="submit" />
      {createPortal(
        <FloatingSearchBar handleSearch={handleSearch} searchValue={search} />,
        document.body
      )}
    </form>
  );
};

export default ProductSearchBar;
