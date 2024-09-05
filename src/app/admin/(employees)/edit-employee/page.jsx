import AddEmployeeForm from "../add-employee/AddEmployeeForm.jsx";
import { BreadcrumbAdmin } from "@/components";
import { useEffect, useState } from "react";
import { EmployeeAPIs } from "@/service/apis.jsx";
import { useTranslation } from 'react-i18next';
import {useLocation} from "react-router-dom";
import queryString from "query-string";
import CredentialsManagementForm from "./ChangePasswordEmployeeForm.jsx";

const EditEmployee = () => {
  const { t } = useTranslation();
  const location = useLocation();
  const queryParams = queryString.parse(location.search);
  const id = queryParams.id;
  const [data, setData] = useState();

  useEffect(() => {
    EmployeeAPIs.getEmployee(id)
      .then((res) => {
        setData(res?.data);
      })
      .catch((err) => {})
      .finally(() => {});
  }, [id]);

  return (
    <div className="w-full lg:ps-64">
      <div className="page-content space-y-6 p-6">
        <BreadcrumbAdmin
          title={t('edit_Employee')}
          subtitle={t('Employees')}
          link="/admin/Employees"
        />
        <AddEmployeeForm type="edit" initialData={data} />
        <div className="mb-6 rounded-lg border border-default-200 p-6">
          <CredentialsManagementForm email={data?.email || data?.emailOrUsername} />
        </div>
      </div>
    </div>
  );
};

export default EditEmployee;
