import AddEmployeeForm from "./AddEmployeeForm.jsx";
import { BreadcrumbAdmin } from "@/components";
import { useTranslation } from "react-i18next";

const AddEmployee = () => {
  const { t } = useTranslation();

  return (
    <div className="w-full lg:ps-64">
      <div className="page-content space-y-6 p-6">
        <BreadcrumbAdmin
          title={t("add_employee_title")}
          subtitle={t("employees_subtitle")} 
          link="/admin/employees"
        />
        <AddEmployeeForm />
      </div>
    </div>
  );
};

export default AddEmployee;
