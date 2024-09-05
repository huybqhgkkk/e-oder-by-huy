import * as yup from "yup";

export const minLength = (min, mess) => yup.string().min(min, mess);
export const maxLength = (max, mess) => yup.string().max(max, mess);

export const validatePhone = (t) =>
    yup
        .string()
        .matches(/^(0?((3[2-9]|5[25689]|7[06-9]|8[1-689]|9[0-46-9])[0-9]{7}|2[0-9]{9}))$/, t("invalid_phone_number"));

export const validatePassword = (t) =>
    yup
        .string()
        .matches(/^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&+=!])(?=\S+$).{6,}$/, t("invalid_password"));

export const validateConfirmPassword = (t) =>
    yup
        .string()
        .oneOf([yup.ref("password")], t("passwords_must_match"))
        .required(t("confirm_password"));

export const requiredField = (mess) => yup.string().required(mess);
export const validateEmail = (t) =>
    yup
        .string()
        .matches(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/, t("enter_valid_email"));
