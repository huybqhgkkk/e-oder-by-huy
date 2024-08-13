import { BreadcrumbAdmin } from "@/components";
import { sellersData } from "@/assets/data";
import { useEffect, useState } from "react";
import { EmployeeAPIs } from "../../../../service/apis";
import { Link } from "react-router-dom";
import CustomDataTable from "../../../../components/data-tables/CustomerDataTable";
import { LuPencil, LuTrash2 } from "react-icons/lu";

const EmployeeList = () => {

  const [dataTable, setDataTable] = useState([]);
  const [pagination, setPagination] = useState({
    pageNumber: 0,
    pageSize: 20,
    totalElements: 5,
    totalPages: 1
  })
  // Define
  const columns = [
    {
      key: "name",
      name: "Customer Name",
      render: (value, row) => {
        return <Link to={"/"}>
          {`${row.firstName} ${row.lastName}`} &nbsp;
        </Link>
      }
    },
    {
      key: "email",
      name: "Email",
    },
    {
      key: "phone",
      name: "Phone",
    },
    // {
    //   key: "orders",
    //   name: "Orders",
    // },
    // {
    //   key: "order_total",
    //   name: "Order Total",
    // },
    {
      key: "role",
      name: "Role",
    },
    {
      key: "action",
      name: "Actions",
      render: (value, row) => {
        return (<div className="flex flex-wrap gap-1">
          <button type="button" class="py-2 px-3 inline-flex font-semibold tracking-wide align-middle duration-500 text-sm text-center bg-info text-white  rounded-lg">
            <Link
              to={`/admin/edit-employee?id=${row?.userId}`}
            >
              <LuPencil
                size={16}
                className="cursor-pointer transition-colors group-hover:fill-white group-hover:text-blue-700"
              />
            </Link>
          </button>
          <button type="button" class="py-2 px-3 inline-flex font-semibold tracking-wide align-middle duration-500 text-sm text-center bg-danger text-white rounded-lg hover:text-red-500 hover:bg-slate-100 ">
            <LuTrash2
              size={16}
              className="cursor-pointer transition-colors hover:text-red-500"
            />

          </button>
        </div>
        )
      }
    },
  ];

  // Funcs
  const getDataList = async () => {
    try {
      let res = await EmployeeAPIs.GetList({
        branchId: 8,
        // pageNumber: 1,
        // pageSize:20
      });
      console.log(res);
      if (res) {
        setDataTable(res?.data?.content)
        setPagination(res?.data?.pageable)
      }
    } catch (error) {

    }
  }

  useEffect(() => {
    getDataList();
  }, [])

  return (
    <div className="w-full lg:ps-64">
      <div className="page-content space-y-6 p-6">
        <BreadcrumbAdmin title="Employees List" subtitle="Employees" />
        {dataTable && <CustomDataTable
          rows={dataTable}
          columns={columns}
          title="Employees"
          buttonText="Add new"
          buttonLink="/admin/add-employee"
        />}
      </div>
    </div>
  );
};

export default EmployeeList;
