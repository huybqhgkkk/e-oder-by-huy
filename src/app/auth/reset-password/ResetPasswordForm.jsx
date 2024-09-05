import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { PasswordFormInput } from "@/components";
import TextFormInput from "@/components/form/TextFormInput.jsx";
import { useNavigate } from "react-router-dom";
import {useEffect, useState} from "react";
import { forgotPassword, reSendOtp } from "@/service/apis.jsx";
import { toast } from "sonner";
import { useTranslation } from 'react-i18next';

const ResetPasswordForm = ({ email }) => {
    const { t } = useTranslation();
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const registerFormSchema = yup.object({
        passwordResetToken: yup.string().required(t('enter_reset_token')),
        password: yup
            .string()
            .required(t('enter_new_password')),
        confirmPassword: yup
            .string()
            .oneOf(
                [yup.ref("password")],
                t('confirm_password_mismatch')
            )
            .required(t('enter_new_password_again')),
    });

    const { control, handleSubmit, reset, getValues } = useForm({
        resolver: yupResolver(registerFormSchema),
    });

    useEffect(() => {
        reset(getValues());
    }, [t]);

    const submit = async (value) => {
        setLoading(true);
        forgotPassword(email)
            .then((res) => {
                toast.success(t('password_reset_successful'), {
                    position: "top-right",
                    duration: 2000,
                });
                navigate("/auth/login");
            })
            .catch((err) => {
                toast.error(err?.response?.data?.result?.errorMessage || t('error_request'), {
                    position: "top-right",
                    duration: 2000,
                });
            })
            .finally(() => {
                setLoading(false);
            });
    };

    return (
        <form onSubmit={handleSubmit((v) => submit(v))}>
            <div className="mb-6">
                <TextFormInput
                    name="passwordResetToken"
                    label={t('reset_token_label')}
                    type="text"
                    placeholder={t('reset_token_placeholder')}
                    control={control}
                    fullWidth
                />
            </div>

            <PasswordFormInput
                name="password"
                control={control}
                label={t('new_password_label')}
                labelClassName="block text-sm font-medium text-default-900 mb-2"
                containerClassName="mb-6"
                fullWidth
            />

            <PasswordFormInput
                name="confirmPassword"
                control={control}
                label={t('confirm_new_password_label')}
                labelClassName="block text-sm font-medium text-default-900 mb-2"
                containerClassName="mb-6"
                fullWidth
            />

            <button
                type="submit"
                disabled={loading}
                className="w-full rounded-lg bg-primary px-6 py-3 text-base capitalize text-white transition-all hover:bg-primary-500"
            >
                {t('reset_password_button')}
            </button>
        </form>
    );
};

export default ResetPasswordForm;
