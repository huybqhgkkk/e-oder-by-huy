import { BreadcrumbAdmin, DishDataTable } from "../../../../components";
import {
  BranchItemAPIs,
  CategoryItemAPIs,
  MenuAPIs,
} from "../../../../service/apis";
import { useEffect, useState } from "react";
import Pagination from "../../../../components/data-tables/Pagination";
import FilterComponent from "../../../../components/filter/ItemFilter";
import { LuX } from "react-icons/lu";

const columns = [
  {
    key: "id",
    name: "Id",
  },
  {
    key: "name",
    name: "Item Name",
  },
  {
    key: "branchName",
    name: "Branch",
  },
  {
    key: "categoryName",
    name: "Category",
  },
  {
    key: "price",
    name: "Price",
  },
  {
    key: "status",
    name: "Status",
  },
];

const ProductList = () => {
  const [showAlert, setShowAlert] = useState(false);
  const [dataTable, setDataTable] = useState([]);
  const [pagination, setPagination] = useState({
    pageNumber: 1,
    pageSize: 20,
    totalElements: 5,
    totalPages: 1,
  });
  const [filterData, setFilterData] = useState(null);
  const [categories, setCategories] = useState([]);
  const [branches, setBranches] = useState([]);

  const handleDismissAlert = () => {
    setShowAlert(false);
  };
  // Funcs
  const getDataList = async (filterData, pageNumber) => {
    let req = {
      pageSize: 20,
      pageNumber: pageNumber,
    };
    if (filterData) {
      req = { ...req, ...filterData };
    }
    try {
      let res = await MenuAPIs.GetList(req);
      if (res) {
        setDataTable(res?.data?.content);
        setPagination(res?.data?.pageable);
      }
    } catch (err) {}
  };

  // Funcs
  const getDataListInit = async (pageNumber) => {
    try {
      let res = await MenuAPIs.GetList({
        pageNumber: pageNumber,
        pageSize: 20,
      });
      if (res) {
        setDataTable(res?.data?.content);
        setPagination(res?.data?.pageable);
        fetchData();
      }
    } catch (err) {}
  };

  // Fetch categories and branches data

  const fetchData = async () => {
    try {
      const [branchRes, categoryRes] = await Promise.all([
        BranchItemAPIs.GetList({}),
        CategoryItemAPIs.GetList({}),
      ]);
      if (branchRes) setBranches(branchRes.data);
      if (categoryRes) setCategories(categoryRes.data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    getDataListInit(1);
  }, []);

  const handlePageChange = (e) => {
    if (filterData) {
      getDataList(filterData, e);
    } else {
      getDataListInit(e);
    }
  };

  const handleChangeStatus = (data) => {
    if (data) {
      setShowAlert(true);
      getDataListInit(1);
      setTimeout(() => {
        setShowAlert(false);
      }, 3000);
    }
  };

  const handleFilterChange = ({
    branchId,
    name,
    categories,
    status,
    minPrice,
    maxPrice,
  }) => {
    let filter = {};
    if (branchId) {
      filter = { ...filter, branchId };
    }
    if (name) {
      filter = { ...filter, name };
    }
    if (categories && categories.length > 0) {
      filter = {
        ...filter,
        itemCategoryId: categories.join(","),
      };
    }
    if (status) {
      filter = { ...filter, status };
    }
    if (minPrice) {
      filter = { ...filter, priceMin: minPrice };
    }
    if (maxPrice) {
      filter = { ...filter, priceMax: maxPrice };
    }
    setFilterData(filter);
    getDataList(filter, 1);
  };

  return (
    <div className="w-full lg:ps-64">
      <div className="page-content space-y-6 p-6">
        <BreadcrumbAdmin title="Menu" subtitle="Menu" />
        <FilterComponent
          handleFilterChange={handleFilterChange}
          categories={categories}
          branches={branches}
        />
        {showAlert && (
          <div className="fixed top-12 right-4 z-50 max-w-xs w-full bg-success/20 text-success border border-success/20 text-sm rounded-lg shadow-lg py-3 px-5 flex items-center justify-between">
            <p>
              <span className="font-bold">Update successfully!</span>
            </p>
            <button
              className="text-xl cursor-pointer hover:text-success-dark"
              onClick={handleDismissAlert}
            >
              <LuX size={20} />
            </button>
          </div>
        )}
        <div className="grid grid-cols-1">
          <div className="rounded-lg border border-default-200">
            <DishDataTable
              rows={dataTable}
              columns={columns}
              title="Menu"
              buttonLink="/admin/add-dish"
              buttonText="Add Dish"
              changeStatus={(e) => handleChangeStatus(e)}
            />
            <Pagination
              currentPage={pagination.pageNumber}
              totalCount={pagination.totalElements}
              onPageChange={(e) => handlePageChange(e)}
              pageSize={pagination.pageSize}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductList;
