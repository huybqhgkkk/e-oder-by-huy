import { useTranslation } from "react-i18next";
import { Loading } from "../loadings/loading";
import GoToAddButton from "./GoToAddButton";
import { LuSearch } from "react-icons/lu";

const CustomDataTable = ({
                             rows = [],
                             columns = [],
                             title,
                             buttonLink,
                             buttonText,
                             searchElement,
                             onSearch,
                             isLoading,
                             btnElement
                         }) => {
    const { t } = useTranslation();

    return (
        <div className="rounded-lg border border-default-200">
            <div className="border-b border-b-default-200 px-6 py-4">
                <div className="flex flex-wrap items-center justify-between gap-6">
                    <h2 className="text-xl font-medium text-default-900">{title}</h2>
                    <GoToAddButton buttonText={buttonText} buttonLink={buttonLink} />
                </div>
            </div>

            <div className="p-6">
                <div className="flex flex-col md:flex-row justify-between">
                    {searchElement}
                    {searchElement && (
                        btnElement || (
                            <div className="relative max-w-full mt-0 md:ml-4 min-w-[121px]">
                                <span className="mb-2 block text-sm font-medium text-default-900">&nbsp;</span>
                                <button
                                    onClick={onSearch}
                                    className="w-full inline-flex rounded-md bg-primary px-5 py-3 text-sm text-white hover:bg-primary-500 flex-row gap-1 justify-center items-center"
                                >
                                    <LuSearch />
                                    <span>{t("search")}</span>
                                </button>
                            </div>
                        )
                    )}
                </div>
            </div>

            <div className="relative overflow-x-auto border-t border-default-200">
                <div className="inline-block min-w-full align-middle">
                    <div className="overflow-hidden">
                        <table className="min-w-full divide-y divide-default-200">
                            <thead className="bg-default-100">
                            <tr>
                                {columns.map((column) => (
                                    <th
                                        key={column.key}
                                        scope="col"
                                        className="whitespace-nowrap px-6 py-4 text-start text-sm font-medium text-default-500"
                                    >
                                        {column.name}
                                    </th>
                                ))}
                            </tr>
                            </thead>
                            <tbody className="divide-y divide-default-200">
                            {rows.length > 0 && !isLoading ? (
                                rows.map((row, rowIndex) => (
                                    <tr key={rowIndex}>
                                        {columns.map((column, colIndex) => {
                                            const value = row[column.key];
                                            return (
                                                <td
                                                    key={`${value ?? ""}-${row.userId}-${colIndex}`}
                                                    className="whitespace-nowrap px-6 py-4 text-base text-default-800"
                                                >
                                                    {column.render ? column.render(value, row) : value}
                                                </td>
                                            );
                                        })}
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan={columns.length} className="w-full flex justify-center items-center my-9">
                                        <Loading />
                                    </td>
                                </tr>
                            )}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CustomDataTable;
