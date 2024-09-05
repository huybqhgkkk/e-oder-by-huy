import AddBranchForm from "./AddBranchForm.jsx";
import { BreadcrumbAdmin } from "@/components";
import { useTranslation } from "react-i18next";

const AddBranch = () => {
  const { t } = useTranslation();

  return (
      <div className="w-full lg:ps-64">
        <div className="page-content space-y-6 p-6">
          <BreadcrumbAdmin
              title={t("add_branch_title")}
              subtitle={t("branchs_subtitle")}
              link="/admin/branch"
          />
          <AddBranchForm />
        </div>
      </div>
  );
};

export default AddBranch;
