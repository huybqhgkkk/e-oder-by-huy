import {Link} from "react-router-dom";
import {LuCopy, LuLock, LuMail, LuShield, LuUser} from "react-icons/lu";
import useLogin from "./useLogin";
import {PasswordFormInput, TextFormInput} from "@/components";
import {useTranslation} from 'react-i18next';

const LoginForm = () => {
    const {loading, login, control} = useLogin();
    const {t} = useTranslation();

    return (
        <>
            <form onSubmit={login}>
                <TextFormInput
                    name="username"
                    control={control}
                    type="text"
                    className="bg-white"
                    placeholder={t('enter_your_username')}
                    label={t('username')}
                    containerClassName="mb-6"
                    fullWidth
                />

                <PasswordFormInput
                    name="password"
                    control={control}
                    label={t('password')}
                    placeholder={t('enter_your_password')}
                    labelClassName="block text-sm font-medium text-default-900 mb-2"
                    containerClassName="mb-1"
                    fullWidth
                />

                <Link
                    to="/auth/forgot-password"
                    className="float-right text-end text-sm text-default-600 underline"
                >
                    {t('forgot_password')}
                </Link>

                <button
                    type="submit"
                    className="mt-5 w-full rounded-lg bg-primary px-6 py-3 text-base capitalize text-white transition-all hover:bg-primary-500"
                    disabled={loading}
                >
                    {t('log_in')}
                </button>
            </form>
        </>
    );
};

export default LoginForm;
