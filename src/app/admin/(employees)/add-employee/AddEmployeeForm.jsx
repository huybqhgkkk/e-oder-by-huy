import { useEffect, useState } from "react";
import { LuSave } from "react-icons/lu";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import {
    PasswordFormInput,
    SelectFormInput,
    TextFormInput,
} from "@/components";
import { EmployeeAPIs } from "@/service/apis";
import { useTranslation } from "react-i18next";
import {
    minLength,
    maxLength,
    validatePhone,
    validatePassword,
    validateConfirmPassword,
    requiredField,
} from "@/helpers/validation";
import { errorMessage, successMessage } from "@/helpers/message";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const AddEmployeeForm = ({ type, initialData }) => {
    const { t } = useTranslation();
    const navigate = useNavigate();
    const role = useSelector((state) => state?.auth?.role);

    const permissionOptions = [
        "APPROVE_ORDER", "APPROVE_COOKING", "PROCESS_PAYMENT", "ADD_ITEM", "EDIT_ITEM",
        "DELETE_ITEM", "ADD_EMPLOYEE", "EDIT_EMPLOYEE", "DELETE_EMPLOYEE", "ADD_TABLE",
        "EDIT_TABLE", "DELETE_TABLE", "VIEW_REPORTS", "GENERATE_REPORTS", "MANAGE_SETTINGS",
        "VIEW_AUDIT_LOGS", "BACKUP_DATA", "RESTORE_DATA", "MANAGE_ROLES", "VIEW_USER_ACTIVITY",
        "ALL_PERMISSIONS"
    ].map((perm) => ({ value: perm, label: t(perm.toLowerCase()) }));

    const [selectedPermissions, setSelectedPermissions] = useState(permissionOptions);

    const roleOptions = [
        { value: "USER", label: t("user") },
        { value: "STAFF", label: t("staff") },
        ...(['MANAGER', 'ROLE_MANAGER'].includes(role) ? [{ value: "MANAGER_BRANCH", label: t("manager_branch") }] : []),
    ];

    const initializeValues = (data) => {
        if (!data) return {};
        const {
            firstName, lastName, emailOrUsername, email, phoneNumber, phone, role, permissions
        } = data;

        return {
            firstName,
            lastName,
            emailOrUsername: emailOrUsername || email,
            phoneNumber: phoneNumber || phone,
            permissions: permissions?.map((perm) => ({
                value: perm,
                label: t(perm.toLowerCase()),
            })),
            role: roleOptions.find((r) => r.value === role) || {},
        };
    };

    const validationSchema = yup.object({
        firstName: minLength(3, `${t("min_length")} 3 ${t("character")}`)
            .concat(maxLength(20, `${t("max_length")} 20 ${t("character")}`))
            .concat(requiredField(t("first_name"))),
        lastName: minLength(3, `${t("min_length")} 3 ${t("character")}`)
            .concat(maxLength(20, `${t("max_length")} 20 ${t("character")}`))
            .concat(requiredField(t("last_name"))),
        emailOrUsername: minLength(5, `${t("min_length")} 5 ${t("character")}`)
            .concat(maxLength(20, `${t("max_length")} 20 ${t("character")}`))
            .concat(requiredField(t("email_or_username"))),
        phoneNumber: validatePhone(t).concat(requiredField(t("phone_number"))),
        role: yup.object().required(t("select_role")),
        password: type !== "edit" ? validatePassword(t).concat(requiredField(t("password"))) : yup.string(),
        confirmPassword: type !== "edit" ? validateConfirmPassword(t) : yup.string(),
        permissions: yup.array().min(1, t("select_at_least_one_permission")).required(t("select_permissions")),
        partnerCode: requiredField(t("partner_code")),
        branchId: requiredField(t("branch_id")),
    });

    const { control, handleSubmit, reset, setValue, getValues } = useForm({
        resolver: yupResolver(validationSchema),
        defaultValues: {
            role: {},
            permissions: [],
            partnerCode: "CODE001",
            branchId: 8,
            password: "",
            confirmPassword: "",
        },
    });

    useEffect(() => {
        reset(getValues());
    }, [t]);

    useEffect(() => {
        if (type === "edit" && initialData) {
            Object.entries(initializeValues(initialData)).forEach(([key, value]) => {
                setValue(key, value);
            });
        }
    }, [type, initialData]);

    const onSubmit = async (data) => {
        try {
            const payload = {
                ...data,
                role: data.role?.value,
                permissions: data.permissions.map((perm) => perm.value),
            };
            const apiCall = type === "edit" ? EmployeeAPIs.editEmployee : EmployeeAPIs.addEmployee;
            await apiCall(payload);
            successMessage(t(type === "edit" ? "edit_employee_successful" : "add_employee_successful"));
            navigate("/admin/employees");
        } catch (err) {
            errorMessage(err?.response?.data?.result?.errorMessage || t("error_request"));
        }
    };

    const handlePermissionChange = (selectedOptions) => {
        if (selectedOptions.some((option) => option.value === "ALL_PERMISSIONS")) {
            setValue("permissions", [{ value: "ALL_PERMISSIONS", label: t("all_permissions") }]);
            setSelectedPermissions([{ value: "ALL_PERMISSIONS", label: t("all_permissions") }]);
        } else {
            setSelectedPermissions(permissionOptions);
        }
    };

    return (
        <div className="rounded-lg border border-default-200">
            <form onSubmit={handleSubmit(onSubmit)} className="p-6">
                <div className="mb-6 grid gap-6 lg:grid-cols-2">
                    <TextFormInput
                        name="partnerCode"
                        label={t("partner_code")}
                        type="text"
                        placeholder={t('enter_partner_code')}
                        className="bg-gray-200"
                        control={control}
                        fullWidth
                        disabled
                    />
                    <TextFormInput
                        name="branchId"
                        label={t("branch_id")}
                        type="text"
                        placeholder={t('enter_branch_id')}
                        className="bg-gray-200"
                        control={control}
                        fullWidth
                        disabled
                    />
                    <TextFormInput
                        name="firstName"
                        label={t("first_name")}
                        type="text"
                        placeholder={t("enter_first_name")}
                        control={control}
                        fullWidth
                    />
                    <TextFormInput
                        name="lastName"
                        label={t("last_name")}
                        type="text"
                        placeholder={t("enter_last_name")}
                        control={control}
                        fullWidth
                    />
                    <TextFormInput
                        name="emailOrUsername"
                        label={t("email_or_username")}
                        type="text"
                        placeholder={t("enter_email_or_username")}
                        control={control}
                        fullWidth
                    />
                    <TextFormInput
                        name="phoneNumber"
                        label={t("phone_number")}
                        type="text"
                        placeholder={t("enter_phone_number")}
                        control={control}
                        fullWidth
                    />
                    <SelectFormInput
                        name="role"
                        label={t("role")}
                        control={control}
                        placeholder={t("select_role")}
                        options={roleOptions}
                    />
                    <SelectFormInput
                        name="permissions"
                        label={t("permissions")}
                        control={control}
                        placeholder={t("select_permissions")}
                        options={selectedPermissions}
                        onChange={handlePermissionChange}
                        isMulti
                    />
                    {type !== "edit" && (
                        <>
                            <PasswordFormInput
                                name="password"
                                label={t("password")}
                                placeholder={t("enter_password")}
                                control={control}
                                fullWidth
                            />
                            <PasswordFormInput
                                name="confirmPassword"
                                label={t("confirm_password")}
                                placeholder={t("confirm_password")}
                                control={control}
                                fullWidth
                            />
                        </>
                    )}
                </div>
                <div className="flex flex-wrap justify-end gap-4">
                    <button
                        type="submit"
                        className="w-full md:w-fit flex items-center justify-center gap-2 rounded-lg bg-primary px-6 py-2.5 text-center text-sm font-semibold text-white shadow-sm transition-all duration-200 hover:bg-primary-500"
                    >
                        <LuSave size={20} />
                        {t("submit")}
                    </button>
                </div>
            </form>
        </div>
    );
};

export default AddEmployeeForm;
