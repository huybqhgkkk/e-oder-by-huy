import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { PasswordFormInput } from "@/components";
import { useNavigate } from "react-router-dom";
import { changePassword } from "@/service/apis.jsx";
import { toast } from "sonner";
import { useState } from "react";
import { useTranslation } from 'react-i18next';

const ChangePasswordForm = () => {
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
      <PasswordFormInput
        name="oldPassword"
        control={control}
        label={t('current_password')}
        labelClassName="block text-sm font-medium text-default-900 mb-2"
        containerClassName="mb-6"
        fullWidth
      />

      <PasswordFormInput
        name="password"
        control={control}
        label={t('new_password')}
        labelClassName="block text-sm font-medium text-default-900 mb-2"
        containerClassName="mb-6"
        fullWidth
      />

      <PasswordFormInput
        name="confirmPassword"
        control={control}
        label={t('confirm_new_password')}
        labelClassName="block text-sm font-medium text-default-900 mb-2"
        containerClassName="mb-6"
        fullWidth
      />

      <button
        type="submit"
        disabled={loading}
        className="w-full rounded-lg bg-primary px-6 py-3 text-base capitalize text-white transition-all hover:bg-primary-500"
      >
        {t('reset_password')}
      </button>
    </form>
  );
};

export default ChangePasswordForm;
