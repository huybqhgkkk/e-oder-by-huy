import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { PasswordFormInput } from "@/components";
import {useTranslation} from "react-i18next";
import {useState} from "react";
import {useNavigate} from "react-router-dom";
import {changePassword} from "@/service/apis.jsx";
import {toast} from "sonner";

const CredentialsManagementForm = () => {
    const { t } = useTranslation();
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const registerFormSchema = yup.object({
        oldPassword: yup.string().required(t('enter_old_password')),
        password: yup
            .string()
            .notOneOf(
                [yup.ref("oldPassword")],
                t('new_password_same_as_current')
            )
            .required(t('enter_new_password')),
        confirmPassword: yup
            .string()
            .oneOf(
                [yup.ref("password")],
                t('confirm_password_mismatch')
            )
            .required(t('confirm_new_password')),
    });

    const { control, handleSubmit } = useForm({
        resolver: yupResolver(registerFormSchema),
    });

    const submit = async (value) => {
        setLoading(true);
        changePassword(value)
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
      <h4 className="mb-4 text-xl font-medium text-default-900">
          {t('create_new_password')}
      </h4>
      <PasswordFormInput
        name="oldPassword"
        label={t('current_password')}
        containerClassName="mb-4"
        placeholder={t('enter_your_password')}
        control={control}
        fullWidth
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

export default CredentialsManagementForm;
