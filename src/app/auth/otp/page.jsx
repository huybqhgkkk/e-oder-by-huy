import { Link, useLocation } from "react-router-dom";
import { AuthFormLayout, PageTitle } from "@/components";
import OTPForm from "@/app/auth/otp/OtpForm.jsx";
import queryString from 'query-string';
import { useTranslation } from 'react-i18next';

const BottomLink = () => {
    const { t } = useTranslation();

    return (
        <div>
            <p className="mt-auto text-center text-default-950">
                {t('already_have_account')}{" "}
                <Link to="/auth/login" className="ms-1 text-primary">
                    <span className="font-medium">{t('login')}</span>
                </Link>
            </p>
            <p className="mt-auto text-center text-default-950">
                {t('back_to_register')}{" "}
                <Link to="/auth/register" className="ms-1 text-primary">
                    <span className="font-medium">{t('register')}</span>
                </Link>
            </p>
        </div>
    );
};

const Otp = () => {
    const { t } = useTranslation();
    const location = useLocation();
    const queryParams = queryString.parse(location.search);
    const email = queryParams.email;

    return (
        <AuthFormLayout
            authTitle={t('otp')}
            helpText={t('otp_help_text', { email })}
            bottomLink={<BottomLink />}
            hasThirdPartyAuth
        >
            <PageTitle title={t('otp')} />
            <OTPForm email={email} />
        </AuthFormLayout>
    );
};

export default Otp;