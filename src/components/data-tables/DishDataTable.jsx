import { Link } from "react-router-dom";
import { LuEye, LuEyeOff, LuPencil, LuTrash2 } from "react-icons/lu";
import GoToAddButton from "./GoToAddButton";
import { cn } from "@/utils";
import { Modal } from "antd";
import { MenuAPIs } from "../../service/apis";

const DishDataTable = ({
  rows,
  columns,
  title,
  buttonText,
  buttonLink,
  changeStatus,
}) => {
  const editStatus = async (data) => {
    data.status = toggleStatus(data.status);
    try {
      let res = await MenuAPIs.EditItem(data);
      if (res) {
        changeStatus(true);
      }
    } catch (err) {
      changeStatus(false);
    }
  };
  const toggleStatus = (currentStatus) => {
    return currentStatus === 1 ? 0 : 1;
  };

  const handleStatusChange = (row) => {
    const textMessage =
      row.name + " sang " + (row.status == 1 ? "Inactive" : "Active ?");
    Modal.confirm({
      title: "Xác nhận thay đổi trạng thái",
      content: "Bạn có chắc chắn muốn thay đổi trạng thái của " + textMessage,
      okText: "Xác nhận",
      cancelText: "Hủy",
      onOk: () => {
        editStatus(row);
      },
    });
  };
  return (
    <>
      <div className="overflow-hidden px-6 py-4 ">
        <div className="flex flex-wrap items-center justify-between gap-4 md:flex-nowrap">
          <h2 className="text-xl font-semibold text-default-800">{title}</h2>
          <div className="flex flex-wrap items-center gap-4">
            <GoToAddButton buttonText={buttonText} buttonLink={buttonLink} />
          </div>
        </div>
      </div>

      <div className="relative overflow-x-auto">
        <div className="inline-block min-w-full align-middle">
          <div className="overflow-hidden">
            <table className="min-w-full divide-y divide-default-200">
              <thead className="bg-default-100">
                <tr className="text-start">
                  {columns?.map((column) => (
                    <th
                      key={column.key}
                      className="whitespace-nowrap px-6 py-3 text-start text-sm font-medium text-default-800"
                    >
                      {column.name}
                    </th>
                  ))}
                  <th className="whitespace-nowrap px-6 py-3 text-start text-sm font-medium text-default-800">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-default-200">
                {rows?.map((row, rowIndex) => {
                  const categories = columns.map((column) => {
                    const valueData = row[column.key];
                    const cellKey = `${column.key}-${rowIndex}`; // Generate a unique key
                    if (column.key === "id") {
                      return (
                        <td
                          className="whitespace-nowrap px-6 py-4 text-sm font-medium text-default-500"
                          key={cellKey}
                        >
                          {rowIndex + 1}
                        </td>
                      );
                    }
                    if (column.key === "name") {
                      return (
                        <td
                          key={cellKey}
                          className="whitespace-nowrap px-6 py-4 text-sm font-medium text-default-800"
                        >
                          <Link
                            to={`/admin/dishes/${row.id}`}
                            className="flex items-center  gap-3"
                          >
                            <div className="h-12 w-12 shrink-0 overflow-hidden rounded-lg border border-gray-200">
                              <img
                                src={
                                  row.imageUrl ||
                                  "https://placehold.jp/150x150.png"
                                }
                                alt={valueData}
                                className="object-cover h-full w-full"
                              />
                            </div>
                            <p className="m-0 max-w-xs overflow-hidden text-ellipsis whitespace-nowrap text-base text-default-500 transition-all hover:text-primary">
                              {valueData}
                            </p>
                          </Link>
                        </td>
                      );
                    } else if (column.key === "status") {
                      const colorClassName =
                        valueData === 1
                          ? "bg-green-500/10 text-green-500"
                          : valueData === 0
                            ? "bg-yellow-500/10 text-yellow-500"
                            : "bg-pink-500/10 text-pink-500";
                      return (
                        <td key={cellKey} className="px-6 py-4">
                          <span
                            className={cn(
                              "rounded-md px-3 py-1 text-xs font-medium",
                              colorClassName
                            )}
                          >
                            {valueData === 1
                              ? "active"
                              : valueData == 0
                                ? "inactive"
                                : ""}
                          </span>
                        </td>
                      );
                    } else {
                      return (
                        <td
                          key={cellKey}
                          className="whitespace-nowrap px-6 py-4 text-sm font-medium text-default-500"
                        >
                          {valueData}
                        </td>
                      );
                    }
                  });

                  return (
                    <tr key={row.id || rowIndex}>
                      {categories}
                      <td className="px-6 py-4">
                        <div className="flex gap-3">
                          <LuPencil
                            size={20}
                            className="cursor-pointer transition-colors hover:text-primary"
                          />
                          {row.status === 1 ? (
                            <LuEyeOff
                              size={20}
                              className="cursor-pointer transition-colors hover:text-primary"
                              onClick={() => handleStatusChange(row)}
                            />
                          ) : (
                            <LuEye
                              size={20}
                              className="cursor-pointer transition-colors hover:text-primary"
                              onClick={() => handleStatusChange(row)}
                            />
                          )}
                          <LuTrash2
                            size={20}
                            className="cursor-pointer transition-colors hover:text-red-500"
                          />
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default DishDataTable;
