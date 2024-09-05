import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { PasswordFormInput, TextFormInput } from "@/components";
import { useNavigate } from "react-router-dom";
import {useEffect, useState} from "react";
import { registerAccount } from "@/service/apis.jsx";
import { toast } from "sonner";
import { useTranslation } from 'react-i18next';

const RegisterForm = () => {
    const { t } = useTranslation();
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const registerFormSchema = yup.object({
        firstName: yup.string().required(t('enter_first_name')),
        lastName: yup.string().required(t('enter_last_name')),
        email: yup
            .string()
            .email(t('enter_valid_email'))
            .required(t('enter_email')),
        password: yup.string().required(t('enter_password')),
        confirmPassword: yup
            .string()
            .oneOf([yup.ref('password'), null], t('passwords_must_match'))
            .required(t('confirm_password')),
    });

    const { control, handleSubmit, reset, getValues } = useForm({
        resolver: yupResolver(registerFormSchema),
        defaultValues: {
            firstName: "",
            lastName: "",
            email: "",
            password: "",
            confirmPassword: "",
        },
    });

    useEffect(() => {
        reset(getValues());
    }, [t]);
    const submit = async (values) => {
        setLoading(true);
        registerAccount(values)
            .then((res) => {
                navigate(`/auth/otp?email=${values?.email}`);
                toast.success(t('register_successful'), {
                    position: "top-right",
                    duration: 2000,
                });
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
        <form onSubmit={handleSubmit((values) => submit(values))}>
            <TextFormInput
                name="firstName"
                control={control}
                type="text"
                className="bg-white"
                placeholder={t('first_name_placeholder')}
                containerClassName="mb-6"
                label={t('first_name')}
                fullWidth
            />

            <TextFormInput
                name="lastName"
                control={control}
                type="text"
                className="bg-white"
                placeholder={t('last_name_placeholder')}
                containerClassName="mb-6"
                label={t('last_name')}
                fullWidth
            />

            <TextFormInput
                name="email"
                control={control}
                type="email"
                placeholder={t('email_placeholder')}
                className="bg-white"
                containerClassName="mb-6"
                label={t('email')}
                fullWidth
            />

            <PasswordFormInput
                name="password"
                control={control}
                label={t('password')}
                containerClassName="mb-6"
                fullWidth
            />

            <PasswordFormInput
                name="confirmPassword"
                control={control}
                label={t('confirm_password')}
                containerClassName="mb-6"
                fullWidth
            />

            <button
                type="submit"
                disabled={loading}
                className="w-full rounded-lg bg-primary px-6 py-3 text-base capitalize text-white transition-all hover:bg-primary-500"
            >
                {t('register')}
            </button>
        </form>
    );
};

export default RegisterForm;
