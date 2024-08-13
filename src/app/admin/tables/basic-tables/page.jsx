import { BreadcrumbAdmin } from "@/components";
import { Link } from "react-router-dom";
import {
  basicTable,
  contextualTable,
  nestingTable,
  responsiveTable,
} from "../data";

const BasicTables = () => {
  return (
    <div className="w-full lg:ps-64">
      <div className="page-content space-y-6 p-6">
        <BreadcrumbAdmin title="Basic Tables" subtitle="Tables" />
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-6">
          <div className="border border-default-200 rounded-lg">
            <div className="p-6">
              <h3 className="font-medium text-base text-default-600 mb-4">
                Basic example
              </h3>
              <p className="text-default-600 mb-4">
                For basic styling—light padding and only horizontal dividers—add
                the base class <code className="text-danger">table</code> to any
                <code className="text-danger">&lt;table&gt;</code>.
              </p>
              <div className="overflow-auto">
                <div className="min-w-full inline-block align-middle">
                  <div className="overflow-hidden">
                    <table className="min-w-full divide-y divide-default-200">
                      <thead>
                        <tr>
                          <th
                            scope="col"
                            className="px-4 py-4 text-start text-sm font-semibold text-default-600"
                          >
                            #
                          </th>
                          <th
                            scope="col"
                            className="px-4 py-4 text-start text-sm font-semibold text-default-600"
                          >
                            First
                          </th>
                          <th
                            scope="col"
                            className="px-4 py-4 text-start text-sm font-semibold text-default-600"
                          >
                            Last
                          </th>
                          <th
                            scope="col"
                            className="px-4 py-4 text-start text-sm font-semibold text-default-600"
                          >
                            Handle
                          </th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-default-200">
                        {(basicTable || []).map((value, idx) => {
                          return (
                            <tr key={idx}>
                              <td className="px-4 py-4 whitespace-nowrap text-sm font-medium text-default-600">
                                {value.id}
                              </td>
                              <td className="px-4 py-4 whitespace-nowrap text-sm text-default-600">
                                {value.firstName}
                              </td>
                              <td className="px-4 py-4 whitespace-nowrap text-sm text-default-600">
                                {value.lastName}
                              </td>
                              <td className="px-4 py-4 whitespace-nowrap text-start text-default-600">
                                {value.username}
                              </td>
                            </tr>
                          );
                        })}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="border border-default-200 rounded-lg">
            <div className="p-6">
              <h3 className="font-medium text-base text-default-600 mb-4">
                Table Dark
              </h3>
              <p className="text-default-600 mb-4">
                You can also invert the colors—with light text on dark
                backgrounds—with <code className="text-danger">bg-dark</code>.
              </p>
              <div className="overflow-auto">
                <div className="min-w-full inline-block align-middle">
                  <div className="border overflow-hidden bg-slate-900 border-slate-800">
                    <table className="min-w-full divide-y divide-slate-800">
                      <thead>
                        <tr>
                          <th
                            scope="col"
                            className="px-4 py-4 text-start text-sm font-medium text-white"
                          >
                            #
                          </th>
                          <th
                            scope="col"
                            className="px-4 py-4 text-start text-sm font-medium text-white"
                          >
                            First
                          </th>
                          <th
                            scope="col"
                            className="px-4 py-4 text-start text-sm font-medium text-white"
                          >
                            Last
                          </th>
                          <th
                            scope="col"
                            className="px-4 py-4 text-start text-sm font-medium text-white"
                          >
                            Handle
                          </th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-default-200">
                        {(basicTable || []).map((value, idx) => {
                          return (
                            <tr key={idx}>
                              <td className="px-4 py-4 whitespace-nowrap text-sm font-medium text-white">
                                {value.id}
                              </td>
                              <td className="px-4 py-4 whitespace-nowrap text-sm text-white">
                                {value.firstName}
                              </td>
                              <td className="px-4 py-4 whitespace-nowrap text-sm text-white">
                                {value.lastName}
                              </td>
                              <td className="px-4 py-4 whitespace-nowrap text-white">
                                {value.username}
                              </td>
                            </tr>
                          );
                        })}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="border border-default-200 rounded-lg">
            <div className="p-6">
              <h3 className="font-medium text-base text-default-600 mb-4">
                Table head light
              </h3>
              <p className="text-default-600 mb-4">
                Similar to tables and dark tables, use the modifier classes
                <code className="text-danger">.bg-light</code> to make
                <code className="text-danger">&lt;thead&gt;</code>s appear light
                or dark gray.
              </p>
              <div className="overflow-auto">
                <div className="min-w-full inline-block align-middle">
                  <div className="overflow-hidden">
                    <table className="min-w-full divide-y divide-default-200">
                      <thead>
                        <tr className="bg-default-100">
                          <th
                            scope="col"
                            className="px-4 py-4 text-start text-sm font-semibold text-default-800"
                          >
                            #
                          </th>
                          <th
                            scope="col"
                            className="px-4 py-4 text-start text-sm font-semibold text-default-800"
                          >
                            First
                          </th>
                          <th
                            scope="col"
                            className="px-4 py-4 text-start text-sm font-semibold text-default-800"
                          >
                            Last
                          </th>
                          <th
                            scope="col"
                            className="px-4 py-4 text-start text-sm font-semibold text-default-800"
                          >
                            Handle
                          </th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-default-200">
                        {(basicTable || []).map((value, idx) => {
                          return (
                            <tr key={idx}>
                              <td className="px-4 py-4 whitespace-nowrap text-sm font-medium text-default-600">
                                {value.id}
                              </td>
                              <td className="px-4 py-4 whitespace-nowrap text-sm text-default-600">
                                {value.firstName}
                              </td>
                              <td className="px-4 py-4 whitespace-nowrap text-sm text-default-600">
                                {value.lastName}
                              </td>
                              <td className="px-4 py-4 whitespace-nowrap text-start text-default-600">
                                {value.username}
                              </td>
                            </tr>
                          );
                        })}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="border border-default-200 rounded-lg">
            <div className="p-6">
              <h3 className="font-medium text-base text-default-600 mb-4">
                Table head dark
              </h3>
              <p className="text-default-600 mb-4">
                Similar to tables and dark tables, use the modifier classes
                <code className="text-danger">.bg-dark</code> to make
                <code className="text-danger">&lt;thead&gt;</code>s appear light
                or dark gray.
              </p>
              <div className="overflow-auto">
                <div className="min-w-full inline-block align-middle">
                  <div className="overflow-hidden">
                    <table className="min-w-full divide-y divide-default-200">
                      <thead>
                        <tr className="bg-slate-900">
                          <th
                            scope="col"
                            className="px-4 py-4 text-start text-sm font-semibold text-slate-100"
                          >
                            #
                          </th>
                          <th
                            scope="col"
                            className="px-4 py-4 text-start text-sm font-semibold text-slate-100"
                          >
                            First
                          </th>
                          <th
                            scope="col"
                            className="px-4 py-4 text-start text-sm font-semibold text-slate-100"
                          >
                            Last
                          </th>
                          <th
                            scope="col"
                            className="px-4 py-4 text-start text-sm font-semibold text-slate-100"
                          >
                            Handle
                          </th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-default-200">
                        {(basicTable || []).map((value, idx) => {
                          return (
                            <tr key={idx}>
                              <td className="px-4 py-4 whitespace-nowrap text-sm font-medium text-default-600">
                                {value.id}
                              </td>
                              <td className="px-4 py-4 whitespace-nowrap text-sm text-default-600">
                                {value.firstName}
                              </td>
                              <td className="px-4 py-4 whitespace-nowrap text-sm text-default-600">
                                {value.lastName}
                              </td>
                              <td className="px-4 py-4 whitespace-nowrap text-start text-default-600">
                                {value.username}
                              </td>
                            </tr>
                          );
                        })}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="border border-default-200 rounded-lg">
            <div className="p-6">
              <h3 className="font-medium text-base text-default-600 mb-4">
                Bordered table
              </h3>
              <p className="text-default-600 mb-4">
                Add <code className="text-danger">border</code> for borders on
                all sides of the table and cells.
              </p>
              <div className="relative overflow-auto">
                <table className="border-collapse min-w-full border border-default-200 bg-white dark:bg-transparent text-sm shadow-sm">
                  <thead>
                    <tr>
                      <th className="border border-default-200 font-semibold px-4 py-4 text-slate-900 dark:text-default-400 text-start">
                        #
                      </th>
                      <th className="border border-default-200 font-semibold px-4 py-4 text-slate-900 dark:text-default-400 text-start">
                        First
                      </th>
                      <th className="border border-default-200 font-semibold px-4 py-4 text-slate-900 dark:text-default-400 text-start">
                        Last
                      </th>
                      <th className="border border-default-200 font-semibold px-4 py-4 text-slate-900 dark:text-default-400 text-center">
                        Handle
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {(basicTable || []).map((value, idx) => {
                      return (
                        <tr key={idx}>
                          <th
                            scope="row"
                            className={`flex items-center gap-2 px-4 py-4 text-default-900 whitespace-nowrap dark:text-default-400 ${
                              value.id !== 1
                                ? "border-t border-default-200"
                                : ""
                            }`}
                          >
                            {value.id}
                          </th>
                          {value.id === 3 ? (
                            <td
                              colSpan={2}
                              className="border border-default-200 px-4 py-4 text-slate-500 dark:text-default-400"
                            >
                              {value.firstName} {value.lastName}
                            </td>
                          ) : (
                            <>
                              <td className="border border-default-200 px-4 py-4 text-slate-500 dark:text-default-400">
                                {value.firstName}
                              </td>
                              <td className="border border-default-200 px-4 py-4 text-slate-500 dark:text-default-400">
                                {value.lastName}
                              </td>
                            </>
                          )}
                          <td className="border border-default-200 px-4 py-4 text-slate-500 dark:text-default-400 text-center">
                            <Link to="">{value.username}</Link>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          <div className="border border-default-200 rounded-lg">
            <div className="p-6">
              <h3 className="font-medium text-base text-default-600 mb-4">
                Border Color
              </h3>
              <p className="text-default-600 mb-4">
                Add <code className="text-danger">border-primary</code> for
                borders on all sides of the table and cells.
              </p>
              <div className="relative overflow-auto">
                <table className="border-collapse min-w-full border border-primary dark:border-primary bg-white dark:bg-transparent text-sm shadow-sm">
                  <thead>
                    <tr>
                      <th className="border border-primary dark:border-primary font-semibold px-4 py-4 text-slate-900 dark:text-default-400 text-start">
                        #
                      </th>
                      <th className="border border-primary dark:border-primary font-semibold px-4 py-4 text-slate-900 dark:text-default-400 text-start">
                        First
                      </th>
                      <th className="border border-primary dark:border-primary font-semibold px-4 py-4 text-slate-900 dark:text-default-400 text-start">
                        Last
                      </th>
                      <th className="border border-primary dark:border-primary font-semibold px-4 py-4 text-slate-900 dark:text-default-400 text-center">
                        Handle
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {(basicTable || []).map((value, idx) => {
                      return (
                        <tr key={idx}>
                          <th
                            scope="row"
                            className={`flex items-center gap-2 px-4 py-4 text-default-900 whitespace-nowrap dark:text-default-400 ${
                              value.id !== 1
                                ? "border-t border-primary dark:border-primary"
                                : ""
                            }`}
                          >
                            {value.id}
                          </th>
                          {value.id === 3 ? (
                            <td
                              colSpan={2}
                              className="border border-primary dark:border-primary px-4 py-4 text-slate-500 dark:text-default-400"
                            >
                              {value.firstName} {value.lastName}
                            </td>
                          ) : (
                            <>
                              <td className="border border-primary dark:border-primary px-4 py-4 text-slate-500 dark:text-default-400">
                                {value.firstName}
                              </td>
                              <td className="border border-primary dark:border-primary px-4 py-4 text-slate-500 dark:text-default-400">
                                {value.lastName}
                              </td>
                            </>
                          )}
                          <td className="border border-primary dark:border-primary px-4 py-4 text-slate-500 dark:text-default-400 text-center">
                            <Link to="">{value.username}</Link>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          <div className="border border-default-200 rounded-lg">
            <div className="p-6">
              <h3 className="font-medium text-base text-default-600 mb-4">
                Borderless table
              </h3>
              <p className="text-default-600">
                Add <code className=" text-danger">divide</code> for a table
                without borders.
              </p>
              <div className="overflow-auto">
                <div className="min-w-full inline-block align-middle">
                  <div className="overflow-hidden">
                    <table className="min-w-full">
                      <thead>
                        <tr>
                          <th
                            scope="col"
                            className="px-4 py-4 text-start text-sm font-semibold text-default-600"
                          >
                            #
                          </th>
                          <th
                            scope="col"
                            className="px-4 py-4 text-start text-sm font-semibold text-default-600"
                          >
                            First
                          </th>
                          <th
                            scope="col"
                            className="px-4 py-4 text-start text-sm font-semibold text-default-600"
                          >
                            Last
                          </th>
                          <th
                            scope="col"
                            className="px-4 py-4 text-start text-sm font-semibold text-default-600"
                          >
                            Handle
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {(basicTable || []).map((value, idx) => {
                          return (
                            <tr key={idx}>
                              <td className="px-4 py-4 whitespace-nowrap text-sm font-medium text-default-600">
                                {value.id}
                              </td>
                              <td className="px-4 py-4 whitespace-nowrap text-sm text-default-600">
                                {value.firstName}
                              </td>
                              <td className="px-4 py-4 whitespace-nowrap text-sm text-default-600">
                                {value.lastName}
                              </td>
                              <td className="px-4 py-4 whitespace-nowrap text-start text-default-600">
                                {value.username}
                              </td>
                            </tr>
                          );
                        })}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="border border-default-200 rounded-lg">
            <div className="p-6">
              <h3 className="font-medium text-base text-default-600 mb-4">
                Small table
              </h3>
              <p className="text-default-600 mb-4">
                Add to make tables more compact by cutting cell padding in half.
              </p>
              <div className="overflow-auto">
                <div className="min-w-full inline-block align-middle">
                  <div className="overflow-hidden">
                    <table className="min-w-full divide-y divide-default-200">
                      <thead>
                        <tr>
                          <th
                            scope="col"
                            className="px-4 py-2 text-start text-sm font-semibold text-default-600"
                          >
                            #
                          </th>
                          <th
                            scope="col"
                            className="px-4 py-2 text-start text-sm font-semibold text-default-600"
                          >
                            First
                          </th>
                          <th
                            scope="col"
                            className="px-4 py-2 text-start text-sm font-semibold text-default-600"
                          >
                            Last
                          </th>
                          <th
                            scope="col"
                            className="px-4 py-2 text-start text-sm font-semibold text-default-600"
                          >
                            Handle
                          </th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-default-200">
                        {(basicTable || []).map((value, idx) => {
                          return (
                            <tr key={idx}>
                              <td className="px-4 py-2 whitespace-nowrap text-sm font-medium text-default-600">
                                {value.id}
                              </td>
                              {value.id === 3 ? (
                                <td
                                  colSpan={2}
                                  className="px-4 py-2 whitespace-nowrap text-sm text-default-600"
                                >
                                  {value.firstName} {value.lastName}
                                </td>
                              ) : (
                                <>
                                  <td className="px-4 py-2 whitespace-nowrap text-sm text-default-600">
                                    {value.firstName}
                                  </td>
                                  <td className="px-4 py-2 whitespace-nowrap text-sm text-default-600">
                                    {value.lastName}
                                  </td>
                                </>
                              )}
                              <td className="px-4 py-2 whitespace-nowrap text-start text-default-600">
                                {value.username}
                              </td>
                            </tr>
                          );
                        })}
                        <tr>
                          <td className="px-4 py-2 whitespace-nowrap text-sm font-medium text-default-600">
                            4
                          </td>
                          <td className="px-4 py-2 whitespace-nowrap text-sm text-default-600">
                            Mark
                          </td>
                          <td className="px-4 py-2 whitespace-nowrap text-sm text-default-600">
                            Mark
                          </td>
                          <td className="px-4 py-2 whitespace-nowrap text-start text-default-600">
                            @mdo
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="border border-default-200 rounded-lg">
            <div className="p-6">
              <h3 className="font-medium text-base text-default-600 mb-4">
                Hoverable rows
              </h3>
              <p className="text-default-600 mb-4">
                Add
                <code className="text-danger">
                  hover:{"{"}color{"}"}-*
                </code>
                to enable a hover state on table rows within a
                <code>&lt;tbody&gt;</code>.
              </p>
              <div className="overflow-auto">
                <div className="min-w-full inline-block align-middle">
                  <div className="overflow-hidden">
                    <table className="min-w-full divide-y divide-default-200">
                      <thead>
                        <tr>
                          <th
                            scope="col"
                            className="px-4 py-4 text-start text-sm font-semibold text-default-600"
                          >
                            #
                          </th>
                          <th
                            scope="col"
                            className="px-4 py-4 text-start text-sm font-semibold text-default-600"
                          >
                            First
                          </th>
                          <th
                            scope="col"
                            className="px-4 py-4 text-start text-sm font-semibold text-default-600"
                          >
                            Last
                          </th>
                          <th
                            scope="col"
                            className="px-4 py-4 text-start text-sm font-semibold text-default-600"
                          >
                            Handle
                          </th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-default-200">
                        {(basicTable || []).map((value, idx) => {
                          return (
                            <tr
                              key={idx}
                              className="hover:bg-default-100 dark:hover:bg-transparent"
                            >
                              <td className="px-4 py-4 whitespace-nowrap text-sm font-medium text-default-600">
                                {value.id}
                              </td>
                              <td className="px-4 py-4 whitespace-nowrap text-sm text-default-600">
                                {value.firstName}
                              </td>
                              <td className="px-4 py-4 whitespace-nowrap text-sm text-default-600">
                                {value.lastName}
                              </td>
                              <td className="px-4 py-4 whitespace-nowrap text-start text-default-600">
                                {value.username}
                              </td>
                            </tr>
                          );
                        })}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="border border-default-200 rounded-lg">
            <div className="p-6">
              <h3 className="font-medium text-base text-default-600 mb-4">
                Active Tables
              </h3>
              <p className="text-default-600 mb-4">
                Add
                <code className="text-danger">
                  hover:{"{"}color{"}"}-*
                </code>
                to enable a hover state on table rows within a
                <code>&lt;tbody&gt;</code>.
              </p>
              <div className="overflow-auto">
                <div className="min-w-full inline-block align-middle">
                  <div className="overflow-hidden">
                    <table className="min-w-full divide-y divide-default-200">
                      <thead>
                        <tr>
                          <th
                            scope="col"
                            className="px-4 py-4 text-start text-sm font-semibold text-default-600"
                          >
                            #
                          </th>
                          <th
                            scope="col"
                            className="px-4 py-4 text-start text-sm font-semibold text-default-600"
                          >
                            First
                          </th>
                          <th
                            scope="col"
                            className="px-4 py-4 text-start text-sm font-semibold text-default-600"
                          >
                            Last
                          </th>
                          <th
                            scope="col"
                            className="px-4 py-4 text-start text-sm font-semibold text-default-600"
                          >
                            Handle
                          </th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-default-200">
                        {(basicTable || []).map((value, idx) => {
                          return (
                            <tr
                              key={idx}
                              className={`${
                                value.id === 1
                                  ? "bg-default-100 dark:bg-transparent"
                                  : "hover:bg-default-100 dark:hover:bg-transparent"
                              }`}
                            >
                              <td className="px-4 py-4 whitespace-nowrap text-sm font-medium text-default-600">
                                {value.id}
                              </td>
                              {value.id === 3 ? (
                                <td
                                  colSpan={2}
                                  className="px-4 py-4 whitespace-nowrap text-sm text-default-600 bg-default-100 dark:bg-transparent"
                                >
                                  {value.firstName} {value.lastName}
                                </td>
                              ) : (
                                <>
                                  <td className="px-4 py-4 whitespace-nowrap text-sm text-default-600">
                                    {value.firstName}
                                  </td>
                                  <td className="px-4 py-4 whitespace-nowrap text-sm text-default-600">
                                    {value.lastName}
                                  </td>
                                </>
                              )}
                              <td className="px-4 py-4 whitespace-nowrap text-start text-default-600">
                                {value.username}
                              </td>
                            </tr>
                          );
                        })}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="border border-default-200 rounded-lg">
            <div className="p-6">
              <h3 className="font-medium text-base text-default-600 mb-4">
                Striped rows
              </h3>
              <p className="text-default-600 mb-4">
                Use .table-striped to add zebra-striping to any table row within
                the .
              </p>
              <div className="overflow-auto">
                <div className="min-w-full inline-block align-middle">
                  <div className="overflow-hidden">
                    <table className="min-w-full divide-y divide-default-200">
                      <thead>
                        <tr>
                          <th
                            scope="col"
                            className="px-4 py-4 text-start text-sm font-semibold text-default-600"
                          >
                            #
                          </th>
                          <th
                            scope="col"
                            className="px-4 py-4 text-start text-sm font-semibold text-default-600"
                          >
                            First
                          </th>
                          <th
                            scope="col"
                            className="px-4 py-4 text-start text-sm font-semibold text-default-600"
                          >
                            Last
                          </th>
                          <th
                            scope="col"
                            className="px-4 py-4 text-start text-sm font-semibold text-default-600"
                          >
                            Handle
                          </th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-default-200">
                        {(basicTable || []).map((value, idx) => {
                          return (
                            <tr
                              key={idx}
                              className={`${
                                value.id !== 2
                                  ? "bg-default-100 dark:bg-transparent"
                                  : ""
                              }`}
                            >
                              <td className="px-4 py-4 whitespace-nowrap text-sm font-medium text-default-600">
                                {value.id}
                              </td>
                              <td className="px-4 py-4 whitespace-nowrap text-sm text-default-600">
                                {value.firstName}
                              </td>
                              <td className="px-4 py-4 whitespace-nowrap text-sm text-default-600">
                                {value.lastName}
                              </td>
                              <td className="px-4 py-4 whitespace-nowrap text-start text-default-600">
                                {value.username}
                              </td>
                            </tr>
                          );
                        })}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="border border-default-200 rounded-lg">
            <div className="p-6">
              <h3 className="font-medium text-base text-default-600 mb-4">
                Captions
              </h3>
              <p className="text-default-600 mb-4">
                A functions like a heading for a table. It helps users with
                screen readers to find a table and understand what it’s about
                and decide if they want to read it.
              </p>
              <div className="overflow-auto">
                <div className="min-w-full inline-block align-middle">
                  <div className="overflow-hidden">
                    <table className="min-w-full divide-y divide-default-200">
                      <thead>
                        <tr>
                          <th
                            scope="col"
                            className="px-4 py-4 text-start text-sm font-semibold text-default-600"
                          >
                            #
                          </th>
                          <th
                            scope="col"
                            className="px-4 py-4 text-start text-sm font-semibold text-default-600"
                          >
                            First
                          </th>
                          <th
                            scope="col"
                            className="px-4 py-4 text-start text-sm font-semibold text-default-600"
                          >
                            Last
                          </th>
                          <th
                            scope="col"
                            className="px-4 py-4 text-start text-sm font-semibold text-default-600"
                          >
                            Handle
                          </th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-default-200">
                        {(basicTable.slice(0, 2) || []).map((value, idx) => {
                          return (
                            <tr key={idx}>
                              <td className="px-4 py-4 whitespace-nowrap text-sm font-medium text-default-600">
                                {value.id}
                              </td>
                              <td className="px-4 py-4 whitespace-nowrap text-sm text-default-600">
                                {value.firstName}
                              </td>
                              <td className="px-4 py-4 whitespace-nowrap text-sm text-default-600">
                                {value.lastName}
                              </td>
                              <td className="px-4 py-4 whitespace-nowrap text-start text-default-600">
                                {value.username}
                              </td>
                            </tr>
                          );
                        })}
                      </tbody>
                    </table>
                    <p className="ps-2 text-default-600">List of users</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="border border-default-200 rounded-lg">
            <div className="p-6">
              <h3 className="font-medium text-base text-default-600 mb-4">
                Contextual classes
              </h3>
              <p className="text-default-600 mb-4">
                Use contextual classes to color table rows or individual cells.
              </p>
              <div className="overflow-auto">
                <div className="min-w-full inline-block align-middle">
                  <div className="overflow-hidden">
                    <table className="min-w-full divide-y divide-default-200">
                      <thead>
                        <tr>
                          <th
                            scope="col"
                            className="px-4 py-4 text-start text-sm font-semibold text-default-600"
                          >
                            #
                          </th>
                          <th
                            scope="col"
                            className="px-4 py-4 text-start text-sm font-semibold text-default-600"
                          >
                            Column heading
                          </th>
                          <th
                            scope="col"
                            className="px-4 py-4 text-start text-sm font-semibold text-default-600"
                          >
                            Column heading
                          </th>
                          <th
                            scope="col"
                            className="px-4 py-4 text-start text-sm font-semibold text-default-600"
                          >
                            Column heading
                          </th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-default-200">
                        {(contextualTable || []).map((value, idx) => {
                          return (
                            <tr
                              key={idx}
                              className={`${
                                value.id === 1
                                  ? `bg-${value.variant}-100 dark:bg-transparent`
                                  : `bg-${value.variant}/40`
                              }`}
                            >
                              <td className="px-4 py-4 whitespace-nowrap text-sm font-medium text-default-600">
                                {value.id}
                              </td>
                              <td className="px-4 py-4 whitespace-nowrap text-sm text-default-600">
                                Column content
                              </td>
                              <td className="px-4 py-4 whitespace-nowrap text-sm text-default-600">
                                Column content
                              </td>
                              <td className="px-4 py-4 whitespace-nowrap text-start text-default-600">
                                Column content
                              </td>
                            </tr>
                          );
                        })}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="border border-default-200 rounded-lg">
            <div className="p-6">
              <h3 className="font-medium text-base text-default-600 mb-4">
                Nesting tables
              </h3>
              <div className="overflow-x-auto">
                <div className="min-w-full inline-block align-middle">
                  <div className="overflow-hidden">
                    <table className="min-w-full">
                      <thead>
                        <tr>
                          <th
                            scope="col"
                            className="px-4 py-4 text-start text-sm font-semibold text-default-600"
                          >
                            #
                          </th>
                          <th
                            scope="col"
                            className="px-4 py-4 text-start text-sm font-semibold text-default-600"
                          >
                            First
                          </th>
                          <th
                            scope="col"
                            className="px-4 py-4 text-start text-sm font-semibold text-default-600"
                          >
                            Last
                          </th>
                          <th
                            scope="col"
                            className="px-4 py-4 text-start text-sm font-semibold text-default-600"
                          >
                            Handle
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {(basicTable || []).map((value, idx) => {
                          return (
                            <tr
                              key={idx}
                              className={`${
                                value.id !== 2
                                  ? "bg-default-50 border-y border-default-200"
                                  : ""
                              }`}
                            >
                              {value.id === 2 ? (
                                <td colSpan={4} className="p-4">
                                  <table className="min-w-full divide-y divide-default-200">
                                    <thead>
                                      <tr>
                                        <th
                                          scope="col"
                                          className="px-2 py-4 text-start text-sm font-semibold text-default-600"
                                        >
                                          header
                                        </th>
                                        <th
                                          scope="col"
                                          className="px-2 py-4 text-start text-sm font-semibold text-default-600"
                                        >
                                          header
                                        </th>
                                        <th
                                          scope="col"
                                          className="px-2 py-4 text-start text-sm font-semibold text-default-600"
                                        >
                                          header
                                        </th>
                                      </tr>
                                    </thead>
                                    <tbody>
                                      {(nestingTable || []).map((item, idx) => {
                                        return (
                                          <tr
                                            key={idx}
                                            className="border-b border-default-200 dark:border-default-600"
                                          >
                                            <td className="px-2 py-4 whitespace-nowrap text-sm font-semibold text-default-600">
                                              {item}
                                            </td>
                                            <td className="px-2 py-4 whitespace-nowrap text-sm text-default-600">
                                              first
                                            </td>
                                            <td className="px-2 py-4 whitespace-nowrap text-start text-default-600">
                                              last
                                            </td>
                                          </tr>
                                        );
                                      })}
                                    </tbody>
                                  </table>
                                </td>
                              ) : (
                                <>
                                  <td className="px-4 py-4 whitespace-nowrap text-sm font-semibold text-default-600">
                                    {value.id}
                                  </td>
                                  <td className="px-4 py-4 whitespace-nowrap text-sm text-default-600">
                                    {value.firstName}
                                  </td>
                                  <td className="px-4 py-4 whitespace-nowrap text-sm text-default-600">
                                    {value.lastName}
                                  </td>
                                  <td className="px-4 py-4 whitespace-nowrap text-start text-default-600">
                                    {value.username}
                                  </td>
                                </>
                              )}
                            </tr>
                          );
                        })}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="xl:col-span-2">
            <div className="border border-default-200 rounded-lg">
              <div className="p-6">
                <h3 className="font-medium text-base text-default-600 mb-4">
                  Responsive tables
                </h3>
                <div className="overflow-x-auto">
                  <div className="min-w-full inline-block align-middle">
                    <div className="overflow-hidden">
                      <table className="min-w-full divide-y divide-default-200">
                        <thead>
                          <tr>
                            <th
                              scope="col"
                              className="px-4 py-4 text-start text-sm font-semibold text-default-700 dark:text-default-400"
                            >
                              #
                            </th>
                            <th
                              scope="col"
                              className="px-4 py-4 text-start text-sm font-semibold text-default-700 dark:text-default-400"
                            >
                              Table heading
                            </th>
                            <th
                              scope="col"
                              className="px-4 py-4 text-start text-sm font-semibold text-default-700 dark:text-default-400"
                            >
                              Table heading
                            </th>
                            <th
                              scope="col"
                              className="px-4 py-4 text-start text-sm font-semibold text-default-700 dark:text-default-400"
                            >
                              Table heading
                            </th>
                            <th
                              scope="col"
                              className="px-4 py-4 text-start text-sm font-semibold text-default-700 dark:text-default-400"
                            >
                              Table heading
                            </th>
                            <th
                              scope="col"
                              className="px-4 py-4 text-start text-sm font-semibold text-default-700 dark:text-default-400"
                            >
                              Table heading
                            </th>
                            <th
                              scope="col"
                              className="px-4 py-4 text-start text-sm font-semibold text-default-700 dark:text-default-400"
                            >
                              Table heading
                            </th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-default-200">
                          {(responsiveTable || []).map((value, idx) => {
                            return (
                              <tr key={idx}>
                                <th
                                  scope="col"
                                  className="px-4 py-4 text-start text-sm font-medium text-default-600"
                                >
                                  {value}
                                </th>
                                <td className="px-4 py-4 whitespace-nowrap text-sm font-medium text-default-600">
                                  Table cell
                                </td>
                                <td className="px-4 py-4 whitespace-nowrap text-sm font-medium text-default-600">
                                  Table cell
                                </td>
                                <td className="px-4 py-4 whitespace-nowrap text-sm font-medium text-default-600">
                                  Table cell
                                </td>
                                <td className="px-4 py-4 whitespace-nowrap text-sm font-medium text-default-600">
                                  Table cell
                                </td>
                                <td className="px-4 py-4 whitespace-nowrap text-sm font-medium text-default-600">
                                  Table cell
                                </td>
                                <td className="px-4 py-4 whitespace-nowrap text-sm font-medium text-default-600">
                                  Table cell
                                </td>
                              </tr>
                            );
                          })}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* end card */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BasicTables;
