import { Link, useLocation } from "react-router-dom";
import { AuthFormLayout, PageTitle } from "@/components";
import ResetPasswordForm from "./ResetPasswordForm";
import queryString from 'query-string';
import { useTranslation } from 'react-i18next';

const BottomLink = () => {
  const { t } = useTranslation();
  
  return (
    <p className="mt-auto text-center text-default-950">
      {t('back_to') + " "}
      <Link to="/auth/login" className="ms-1 text-primary">
        <span className="font-medium">{t('login')}</span>
      </Link>
    </p>
  );
};

const ResetPassword = () => {
  const { t } = useTranslation();
  const location = useLocation();
  const queryParams = queryString.parse(location.search);
  const email = queryParams.email;

  return (
    <AuthFormLayout
      authTitle={t('reset_password')}
      helpText={t('create_new_password')}
      bottomLink={<BottomLink />}
      hasThirdPartyAuth
    >
      <PageTitle title={t('reset_password')} />
      <ResetPasswordForm email={email} />
    </AuthFormLayout>
  );
};

export default ResetPassword;
