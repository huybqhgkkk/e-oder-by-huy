import { BreadcrumbAdmin } from "@/components";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import CustomDataTable from "@/components/data-tables/CustomerDataTable";
import { LuPencil, LuTrash2 } from "react-icons/lu";
import { EmployeeAPIs } from "@/service/apis";
import { pageSizaDefault } from "@/common/constants";
import Pagination from "@/components/data-tables/Pagination";
import ConfirmModal from "@/components/modals/comfirmModal";
import TableSearchBox from "@/components/data-tables/TableSearchBox";
import { useTranslation } from "react-i18next";
import {errorMessage, successMessage} from "@/helpers/message.js";

const EmployeeList = () => {
  const { t } = useTranslation();

  const [isLoading, setIsLoading] = useState(true);
  const [dataTable, setDataTable] = useState([]);
  const [currentUser, setCurrentUser] = useState(null);
  const [pagination, setPagination] = useState({
    pageNumber: 1,
    pageSize: pageSizaDefault,
    totalElements: 0,
    totalPages: 1,
  });
  const [keywords, setKeywords] = useState({ name: "", phone: "", email: "" });

  const columns = [
    {
      key: "name",
      name: t("employee_name"),
      render: (value, row) => <div>{`${row.firstName} ${row.lastName}`}</div>,
    },
    { key: "email", name: t("email") },
    { key: "phone", name: t("phone") },
    { key: "role", name: t("role") },
    {
      key: "action",
      name: t("actions"),
      render: (value, row) => (
          <div className="flex flex-wrap gap-1">
            <Link
                to={`/admin/edit-employee?id=${row?.userId}`}
                className="py-2 px-3 inline-flex font-semibold text-sm bg-info text-white rounded-lg"
            >
              <LuPencil size={16} className="transition-colors group-hover:text-blue-700" />
            </Link>
            <button
                type="button"
                data-hs-overlay="#confirm-modal"
                onClick={() => setCurrentUser(row)}
                className="py-2 px-3 inline-flex font-semibold text-sm bg-danger text-white rounded-lg hover:text-red-500 hover:bg-slate-100"
            >
              <LuTrash2 size={16} className="transition-colors hover:text-red-500" />
            </button>
          </div>
      ),
    },
  ];

  const getDataList = async (pageNum = pagination.pageNumber) => {
    setIsLoading(true);
    try {
      const res = await EmployeeAPIs.getList({
        branchId: 8,
        pageNumber: pageNum,
        pageSize: pagination.pageSize,
        ...keywords,
      });

      if (res) {
        setDataTable(res?.data?.content);
        setPagination({
          ...pagination,
          totalElements: res?.data?.pageable?.totalElements,
          totalPages: res?.data?.pageable?.totalPages,
        });
      }
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSearch = () => {
    getDataList(1);
  };

  const handleDeleteUser = async () => {
    try {
      const res = await EmployeeAPIs.deleteEmployee(currentUser.email);
      if (res) {
        successMessage(t("success"))
        getDataList();
      }
    } catch (error) {
      errorMessage(t("something_went_wrong"));
      console.error(error);
    }
  };

  useEffect(() => {
    getDataList();
  }, [pagination.pageNumber]);

  const handlePageChange = (pageNumber) => {
    setPagination((prev) => ({ ...prev, pageNumber }));
  };

  return (
      <div className="w-full lg:ps-64">
        <div className="page-content space-y-6 p-6">
          <BreadcrumbAdmin title={t("employees_list")} subtitle={t("employees")} />
          <CustomDataTable
              rows={dataTable}
              columns={columns}
              title={t("employees")}
              buttonText={t("add_new")}
              buttonLink="/admin/add-employee"
              isLoading={isLoading}
              searchElement={
                <div className="flex flex-col gap-4 md:flex-row">
                  <TableSearchBox
                      label={t("name")}
                      value={keywords.name}
                      onChange={(e) => setKeywords({ ...keywords, name: e.target.value })}
                      onKeyPress={(e) => {
                        if (e.key === 'Enter') {
                          getDataList(1);
                        }
                      }}
                  />
                  <TableSearchBox
                      label={t("email")}
                      value={keywords.email}
                      onChange={(e) => setKeywords({ ...keywords, email: e.target.value })}
                      onKeyPress={(e) => {
                        if (e.key === 'Enter') {
                          getDataList(1);
                        }
                      }}
                  />
                  <TableSearchBox
                      label={t("phone")}
                      value={keywords.phone}
                      onChange={(e) => setKeywords({ ...keywords, phone: e.target.value })}
                      onKeyPress={(e) => {
                        if (e.key === 'Enter') {
                          getDataList(1);
                        }
                      }}
                  />
                </div>

              }
              onSearch={handleSearch}
          />
          <Pagination
              currentPage={pagination.pageNumber}
              totalCount={pagination.totalElements}
              onPageChange={handlePageChange}
              pageSize={pagination.pageSize}
          />
        </div>
        {dataTable && currentUser && (
            <ConfirmModal
                contentText={t("Are_you_sure_that_delete_employee", { name: `${currentUser?.firstName} ${currentUser?.lastName}` })}
                title={t("delete_employee")}
                handleConfirmed={handleDeleteUser}
            />
        )}
      </div>
  );
};

export default EmployeeList;
