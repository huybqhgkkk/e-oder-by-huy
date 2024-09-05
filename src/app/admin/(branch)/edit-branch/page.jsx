import AddBranchForm from "../add-branch/AddBranchForm.jsx";
import { BreadcrumbAdmin } from "@/components";
import { useEffect, useState } from "react";
import {BranchAPIs, EmployeeAPIs} from "@/service/apis.jsx";
import { useTranslation } from 'react-i18next';
import {useLocation} from "react-router-dom";
import queryString from "query-string";

const EditBranch = () => {
  const { t } = useTranslation();
  const location = useLocation();
  const queryParams = queryString.parse(location.search);
  const id = queryParams.id;
  const [data, setData] = useState();

  useEffect(() => {
      BranchAPIs.getBranchDetail(id)
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
              title={t('edit_branch')}
              subtitle={t('branchs_subtitle')}
              link="/admin/branch"
          />
          <AddBranchForm type="edit" initialData={data} id={id} />
        </div>
      </div>
  );
};

export default EditBranch;
