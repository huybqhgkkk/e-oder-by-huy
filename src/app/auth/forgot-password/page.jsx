import { Link } from "react-router-dom";
import ForgotPasswordForm from "./ForgotPasswordForm";
import { AuthFormLayout, PageTitle } from "@/components";
import { useTranslation } from 'react-i18next';

const BottomLink = () => {
  const { t } = useTranslation();

  return (
    <p className="mt-auto text-center text-default-950">
      {t('back_to_login')}{" "}
      <Link to="/auth/login" className="ms-1 text-primary">
        <span className="font-medium">{t('login')}</span>
      </Link>
    </p>
  );
};

const RecoverPassword = () => {
  const { t } = useTranslation();

  return (
    <AuthFormLayout
      authTitle={t('forgot_password')}
      helpText={t('forgot_password_help_text')}
      bottomLink={<BottomLink />}
    >
      <PageTitle title={t('recover_password')} />
      <ForgotPasswordForm />
    </AuthFormLayout>
  );
};

export default RecoverPassword;
