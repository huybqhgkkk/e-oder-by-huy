import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { TextFormInput } from "@/components";
import { useNavigate } from "react-router-dom";
import { forgotPasswordCheckMail } from "@/service/apis.jsx";
import { toast } from "sonner";
import {useEffect, useState} from "react";
import { useTranslation } from 'react-i18next';

const ForgotPasswordForm = () => {
    const { t } = useTranslation();
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const registerFormSchema = yup.object({
        email: yup
            .string()
            .email(t('enter_valid_email'))
            .required(t('enter_email')),
    });

    const { control, handleSubmit, reset, getValues } = useForm({
        resolver: yupResolver(registerFormSchema),
    });

    useEffect(() => {
        reset(getValues());
    }, [t]);

    const submit = (values) => {
        setLoading(true);
        forgotPasswordCheckMail(values?.email)
            .then((res) => {
                toast.success(t('request_successful'), {
                    position: "top-right",
                    duration: 2000,
                });
                navigate(`/auth/reset-password?email=${values?.email}`);
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
            <TextFormInput
                name="email"
                control={control}
                type="text"
                placeholder={t('email_placeholder')}
                className="bg-white"
                label={t('email')}
                containerClassName="mb-6"
                fullWidth
            />
            <button
                disabled={loading}
                className="w-full rounded-lg bg-primary px-6 py-3 text-base capitalize text-white transition-all hover:bg-primary-500"
            >
                {t('submit')}
            </button>
        </form>
    );
};

export default ForgotPasswordForm;
