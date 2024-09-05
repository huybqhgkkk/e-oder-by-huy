import { Link } from "react-router-dom";
import { AuthFormLayout, PageTitle } from "@/components";
import { useAuthContext } from "@/context";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setIsAuthenticated } from "@/store/reduce/authSlice.js";
import { logoutAccount } from "@/service/apis.jsx";
import { useTranslation } from 'react-i18next';

const BottomLink = () => {
  const { t } = useTranslation();

  return (
    <p className="mt-auto text-center text-default-950">
      {t('please_come_back_and')}{" "}
      <Link to="/auth/login" className="ms-1 text-primary">
        <span className="font-medium">{t('login')}</span>
      </Link>
    </p>
  );
};

const Logout = () => {
  const { t } = useTranslation();
  const { removeSession } = useAuthContext();
  const dispatch = useDispatch();

  useEffect(() => {
    const logout = async () => {
      try {
        await logoutAccount();
        await dispatch(setIsAuthenticated(false));
        await localStorage.clear();
        removeSession();
      } catch (error) {
        console.error(t('logout_failed'), error);
      }
    };

    logout();
  }, [removeSession]);

  return (
    <AuthFormLayout
      authTitle={t('logout')}
      helpText={t('logout_help_text')}
      bottomLink={<BottomLink />}
    >
      <PageTitle title={t('logout')} />
      <div></div>
    </AuthFormLayout>
  );
};

export default Logout;
