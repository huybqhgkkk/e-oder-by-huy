import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

import LoginForm from "./LoginForm";
import { AuthFormLayout, PageTitle } from "@/components";

const BottomLink = () => {
  const { t } = useTranslation();
  
  return (
    <p className="mt-auto text-center text-default-950">
      {t("don't_have_an_account")}{" "}
      <Link to="/auth/register" className="ms-1 text-primary">
        <span className="font-medium">{t("register")}</span>
      </Link>
    </p>
  );
};

const Login = () => {
  const { t } = useTranslation();

  return (
    <AuthFormLayout
      authTitle={t("login")}
      helpText={t("enter_your_credentials")}
      bottomLink={<BottomLink />}
      hasThirdPartyAuth
    >
      <PageTitle title={t("login")} />
      <LoginForm />
    </AuthFormLayout>
  );
};

export default Login;