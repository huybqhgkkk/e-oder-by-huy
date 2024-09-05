import {useForm} from "react-hook-form";
import * as yup from "yup";
import {yupResolver} from "@hookform/resolvers/yup";
import {PasswordFormInput, TextFormInput} from "@/components";
import {useTranslation} from "react-i18next";
import {useEffect, useState} from "react";
import {EmployeeAPIs} from "@/service/apis.jsx";
import {maxLength, minLength, requiredField, validateConfirmPassword, validatePassword} from "@/helpers/validation.js";
import {errorMessage, successMessage} from "@/helpers/message.js";

const ChangePasswordEmployeeForm = ({email}) => {
    const {t} = useTranslation();
    const [loading, setLoading] = useState(false);

    const registerFormSchema = yup.object({
        emailOrUsername: minLength(5, `${t('min_length')} 5 ${t('character')}`).concat(maxLength(20, `${t('max_length')} 20 ${t('character')}`)).concat(requiredField(t('email_or_username'))),
        password: validatePassword(t).concat(requiredField(t('password'))),
        confirmPassword: validateConfirmPassword(t)
    });

    const {control, handleSubmit, setValue} = useForm({
        resolver: yupResolver(registerFormSchema),
        defaultValues:{
            emailOrUsername: email,
        }
    });

    useEffect(() => {
        setValue('emailOrUsername', email)
    }, [email]);

    const submit = async (value) => {
        setLoading(true);
        EmployeeAPIs.changeEmployee(value)
            .then((res) => {
                successMessage(t('password_reset_successful'))
            })
            .catch((err) => {
                errorMessage(err?.response?.data?.result?.errorMessage || t('error_request'))
            })
            .finally(() => {
                setLoading(false);
            });
    };

    return (
        <form onSubmit={handleSubmit((v) => submit(v))}>
            <h4 className="mb-4 text-xl font-medium text-default-900">
                {t('create_new_password')}
            </h4>
            <TextFormInput
                name="emailOrUsername"
                className="mb-4 bg-gray-200"
                label={t('email_or_username')}
                type="text"
                placeholder={t('enter_email_or_username')}
                control={control}
                fullWidth
                disabled
            />
            <PasswordFormInput
                name="password"
                label={t('new_password')}
                containerClassName="mb-4"
                placeholder="Enter your new password"
                control={control}
                fullWidth
            />
            <PasswordFormInput
                name="confirmPassword"
                label={t('confirm_new_password')}
                containerClassName="mb-4"
                placeholder={t('enter_confirm_password')}
                control={control}
                fullWidth
            />
            <div>
                <button
                    type="submit"
                    disabled={loading}
                    className="flex items-center justify-center gap-2 rounded-lg border border-primary bg-primary px-6 py-2.5 text-center text-sm font-semibold text-white shadow-sm transition-all duration-200  hover:bg-primary-500"
                >
                    {t('submit')}
                </button>
            </div>
        </form>
    );
};

export default ChangePasswordEmployeeForm;
