import AddEmployeeForm from "./AddEmployeeForm.jsx";
import { BreadcrumbAdmin } from "@/components";

const AddSeller = () => {
  return (
    <div className="w-full lg:ps-64">
      <div className="page-content space-y-6 p-6">
        <BreadcrumbAdmin
          title="Add Employee"
          subtitle="Employees"
          link="/admin/employees"
        />
        <AddEmployeeForm />
      </div>
    </div>
  );
};

export default AddSeller;
