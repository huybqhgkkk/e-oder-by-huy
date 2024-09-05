import { LuChevronLeft, LuChevronRight } from "react-icons/lu";
import { DOTS, usePagination } from "../../hooks/usePagination";

const Pagination = ({
  onPageChange,
  totalCount,
  siblingCount = 1,
  currentPage,
  pageSize,
  className
}) => {
  const paginationRange = usePagination({
    currentPage,
    totalCount,
    siblingCount,
    pageSize
  });

  if (!paginationRange || currentPage === 0 || paginationRange?.length < 2) {
    return null;
  }

  const onNext = () => {
    onPageChange(currentPage + 1);
  };

  const onPrevious = () => {
    onPageChange(currentPage - 1);
  };

  let lastPage = paginationRange[paginationRange?.length - 1];
  return (
    <div className="flex flex-wrap justify-center gap-x-10 gap-y-6 pt-6 md:flex-nowrap md:justify-start">
      <nav>
        <ul className="inline-flex items-center space-x-2 rounded-md text-sm">
          <li>
            <button
              onClick={onPrevious}
              disabled={currentPage === 1}
              className={`inline-flex h-9 w-9 cursor-pointer items-center justify-center rounded-full bg-default-100 text-default-800 transition-all duration-500 hover:bg-primary hover:text-white ${currentPage === paginationRange[0] ? "cursor-not-allowed opacity-50" : ""
                }`}
            >
              <LuChevronLeft size={16} />
            </button>
          </li>
          {paginationRange.map(pageNumber => {
            if (pageNumber === DOTS) {
              return <li className="inline-flex h-9 w-9 items-center justify-center text-default-800">&#8230;</li>;
            }

            return (
              <li key={pageNumber}>
                <button
                  onClick={() => onPageChange(pageNumber)}
                  className={`inline-flex h-9 w-9 cursor-pointer items-center justify-center rounded-full ${pageNumber === currentPage
                    ? "bg-primary text-white"
                    : "bg-default-100 text-default-800 transition-all duration-500 hover:bg-primary hover:text-white"
                    }`}
                >
                  {pageNumber}
                </button>
              </li>
            );
          })}
          <li>
            <button
              onClick={onNext}
              disabled={currentPage === lastPage}
              className={`inline-flex h-9 w-9 cursor-pointer items-center justify-center rounded-full bg-default-100 text-default-800 transition-all duration-500 hover:bg-primary hover:text-white ${currentPage === lastPage ? "cursor-not-allowed opacity-50" : ""
                }`}
            >
              <LuChevronRight size={16} />
            </button>
          </li>

        </ul>
      </nav>
    </div>
  );
};

export default Pagination;