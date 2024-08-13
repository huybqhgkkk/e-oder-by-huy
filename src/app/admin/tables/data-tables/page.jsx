import { Grid } from "gridjs-react";
import { BreadcrumbAdmin } from "@/components";

// data
import { basicDataTable, paginationDataTable } from "../data";

const DataTables = () => {
  return (
    <div className="w-full lg:ps-64">
      <div className="page-content space-y-6 p-6">
        <BreadcrumbAdmin title="Data Tables" subtitle="Tables" />
        <div className="flex flex-col gap-6">
          <div className="border border-default-200 rounded-lg">
            <div className="px-6 py-3 border-b border-default-200">
              <div className="flex justify-between items-center">
                <h4 className="card-title">Basic</h4>
              </div>
            </div>
            <div className="p-6">
              <p className="text-sm text-slate-700 dark:text-slate-400 mb-4">
                The most basic list group is an unordered list with list items
                and the proper classes. Build upon it with the options that
                follow, or with your own CSS as needed.
              </p>

              <Grid
                data={basicDataTable}
                columns={[
                  "id",
                  "Name",
                  "Email",
                  "Position",
                  "Company",
                  "Country",
                  "Action",
                ]}
                pagination={{ enabled: true, limit: 5 }}
                search={true}
                sort={true}
              />
            </div>
          </div>

          <div className="border border-default-200 rounded-lg">
            <div className="px-6 py-3 border-b border-default-200">
              <div className="flex justify-between items-center">
                <h4 className="card-title">Pagination</h4>
              </div>
            </div>
            <div className="p-6">
              <p className="text-sm text-slate-700 dark:text-slate-400 mb-4">
                Pagination can be enabled by setting{" "}
                <code>pagination: true</code>&nbsp; :
              </p>

              <Grid
                data={paginationDataTable}
                columns={["id", "Name", "Date", "Total", "Status", "Action"]}
                pagination={{ enabled: true, limit: 5 }}
              />
            </div>
          </div>

          <div className="border border-default-200 rounded-lg">
            <div className="px-6 py-3 border-b border-default-200">
              <div className="flex justify-between items-center">
                <h4 className="card-title">Search</h4>
              </div>
            </div>
            <div className="p-6">
              <p className="text-sm text-slate-700 dark:text-slate-400 mb-4">
                Grid.js supports global search on all rows and columns.
                Set&nbsp;
                <code>search: true</code> to enable the search plugin:
              </p>

              <Grid
                data={basicDataTable}
                columns={["Name", "Email", "Position", "Company", "Country"]}
                pagination={{ enabled: true, limit: 5 }}
                search={true}
              />
            </div>
          </div>

          <div className="border border-default-200 rounded-lg">
            <div className="px-6 py-3 border-b border-default-200">
              <div className="flex justify-between items-center">
                <h4 className="card-title">Sorting</h4>
              </div>
            </div>
            <div className="p-6">
              <p className="text-sm text-slate-700 dark:text-slate-400 mb-4">
                To enable sorting, simply add <code>sort: true</code> to your
                config:
              </p>

              <Grid
                data={basicDataTable}
                columns={["Name", "Email", "Position", "Company", "Country"]}
                pagination={{ enabled: true, limit: 5 }}
                sort={true}
              />
            </div>
          </div>
          <div className="border border-default-200 rounded-lg">
            <div className="px-6 py-3 border-b border-default-200">
              <div className="flex justify-between items-center">
                <h4 className="card-title">Fixed Header</h4>
              </div>
            </div>
            <div className="p-6">
              <p className="text-sm text-slate-700 dark:text-slate-400 mb-4">
                The most basic list group is an unordered list with list items
                and the proper classes. Build upon it with the options that
                follow, or with your own CSS as needed.
              </p>

              <Grid
                data={basicDataTable}
                columns={["Name", "Email", "Position", "Company", "Country"]}
                height="300px"
                fixedHeader={true}
                pagination={{ enabled: true, limit: 10 }}
              />
            </div>
          </div>

          <div className="border border-default-200 rounded-lg">
            <div className="px-6 py-3 border-b border-default-200">
              <div className="flex justify-between items-center">
                <h4 className="card-title">Hidden Columns</h4>
              </div>
            </div>
            <div className="p-6">
              <p className="text-sm text-slate-700 dark:text-slate-400 mb-4">
                Add <code>hidden: true</code> to the columns definition to hide
                them.
              </p>

              <Grid
                data={basicDataTable}
                columns={[
                  {
                    id: "id",
                    hidden: true,
                  },
                  "Name",
                  "Email",
                  "Position",
                  "Company",
                  {
                    country: "Country",
                    hidden: true,
                  },
                ]}
                sort={true}
                pagination={{ enabled: true, limit: 5 }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DataTables;
