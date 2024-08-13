import {useEffect} from "react";
import {LuEraser, LuSave} from "react-icons/lu";
import {useForm} from "react-hook-form";
import * as yup from "yup";
import {yupResolver} from "@hookform/resolvers/yup";
import {
    PasswordFormInput,
    SelectFormInput,
    TextFormInput,
} from "@/components";
import {EmployeeAPIs} from "@/service/apis.jsx";
import {toast} from "sonner";
import {useTranslation} from "react-i18next";

const initValue = (data) => {
    const {firstName, lastName, emailOrUsername, email, phoneNumber, phone, role, permissions} = data || {};
    const transformedPermissions = permissions?.map(permission => ({
        value: permission,
        label: permission
    }));

    const roleConvert = role ? {
        label: data.role,
        value: data.role
    } : {};

    return {
        firstName,
        lastName,
        emailOrUsername : emailOrUsername || email,
        phoneNumber: phoneNumber || phone,
        permissions: transformedPermissions,
        role: roleConvert,
    };
};


const AddEmployeeForm = ({type, initialData}) => {
    const {t} = useTranslation();

    const addEmployeeFormSchema = yup.object({
        firstName: yup
            .string()
            .min(3, t('first_name_min_length'))
            .max(20, t('first_name_max_length'))
            .required(t('enter_first_name')),
        lastName: yup
            .string()
            .min(3, t('last_name_min_length'))
            .max(20, t('last_name_max_length'))
            .required(t('enter_last_name')),
        emailOrUsername: yup
            .string()
            .min(5, t('last_name_min_length'))
            .max(20, t('last_name_max_length'))
            // .matches(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/, t('invalid_email'))
            .required(t('enter_email_or_username')),
        phoneNumber: yup
            .string()
            .matches(/^(0?((3[2-9]|5[25689]|7[06-9]|8[1-689]|9[0-46-9])[0-9]{7}|2[0-9]{9}))$/, t('invalid_phone_number'))
            .required(t('enter_phone_number')),
        role: yup.object().required(t('select_role')),
        password: type !== "edit" ? yup
            .string()
            .matches(/^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&+=!])(?=\S+$).{6,}$/, t('invalid_password'))
            .required(t('enter_password')) : yup.string().notRequired(),
        confirmPassword: type !== "edit" ? yup
            .string()
            .oneOf([yup.ref("password")], t('passwords_must_match'))
            .required(t('confirm_password')) : yup.string().notRequired(),
        permissions: yup
            .array()
            .min(1, t('select_at_least_one_permission'))
            .required(t('select_permissions')),
        partnerCode: yup.string().required(t('enter_partner_code')),
        branchId: yup.string().required(t('enter_branch_id')),
    });

    const {control, handleSubmit, reset, setValue} = useForm({
        resolver: yupResolver(addEmployeeFormSchema),
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
        if (type === "edit" && initialData) {
            Object.keys(initValue(initialData)).forEach(key => {
                setValue(key, initValue(initialData)[key]);
            });
        }
    }, [type, initialData]);

    const onSubmit = (data) => {
        const payload = {
            ...data,
            role: data?.role?.value,
            permissions: data?.permissions?.map(permission => permission?.value).join(',')?.split(','),
        }
        const apiCall = type === "edit" ? EmployeeAPIs.EditEmployee : EmployeeAPIs.AddEmployee;
        apiCall(payload)
            .then((res) => {

                toast.success(
                    type === "edit" ? t('edit_employee_successful') : t('add_employee_successful'),
                    {
                        position: "top-right",
                        duration: 2000,
                    }
                );
                navigate("/admin/employees");
            })
            .catch((err) => {
                toast.error(err?.response?.data?.result?.errorMessage || t('error_request'), {
                    position: "top-right",
                    duration: 2000,
                });
            });
    };

    return (
        <div className="rounded-lg border border-default-200">
            <form onSubmit={handleSubmit(v => onSubmit(v))} className="p-6">
                <div className="mb-6 grid gap-6 lg:grid-cols-2">
                    <TextFormInput
                        name="firstName"
                        label={t('first_name')}
                        type="text"
                        placeholder={t('enter_first_name')}
                        control={control}
                        fullWidth
                    />
                    <TextFormInput
                        name="lastName"
                        label={t('last_name')}
                        type="text"
                        placeholder={t('enter_last_name')}
                        control={control}
                        fullWidth
                    />
                    <TextFormInput
                        name="emailOrUsername"
                        label={t('email_or_username')}
                        type="text"
                        placeholder={t('enter_email_or_username')}
                        control={control}
                        fullWidth
                    />
                    <TextFormInput
                        name="phoneNumber"
                        label={t('phone_number')}
                        type="text"
                        placeholder={t('enter_phone_number')}
                        control={control}
                        fullWidth
                    />
                    <SelectFormInput
                        name="role"
                        label={t('role')}
                        control={control}
                        id="role-select"
                        placeholder={"deletc"}
                        instanceId="role-select"
                        options={[
                            {value: "USER", label: t('user')},
                            {value: "STAFF", label: t('staff')},
                            {value: "MANAGER_BRANCH", label: t('manager_branch')},
                        ]}
                    />
                    {
                        type === "edit" ? "" :
                            <>
                                <PasswordFormInput
                                    name="password"
                                    label={t('password')}
                                    placeholder={t('enter_password')}
                                    control={control}
                                    fullWidth
                                />
                                <PasswordFormInput
                                    name="confirmPassword"
                                    label={t('confirm_password')}
                                    placeholder={t('confirm_password')}
                                    control={control}
                                    fullWidth
                                />
                            </>
                    }
                    <SelectFormInput
                        name="permissions"
                        label={t('permissions')}
                        control={control}
                        id="permissions-select"
                        instanceId="permissions-select"
                        options={[
                            {value: "APPROVE_ORDER", label: t('approve_order')},
                            {value: "APPROVE_COOKING", label: t('approve_cooking')},
                            {value: "PROCESS_PAYMENT", label: t('process_payment')},
                            {value: "ADD_ITEM", label: t('add_item')},
                            {value: "EDIT_ITEM", label: t('edit_item')},
                            {value: "DELETE_ITEM", label: t('delete_item')},
                            {value: "ADD_TABLE", label: t('add_table')},
                            {value: "EDIT_TABLE", label: t('edit_table')},
                            {value: "DELETE_TABLE", label: t('delete_table')},
                        ]}
                        isMulti
                    />
                    <TextFormInput
                        name="partnerCode"
                        label={t('partner_code')}
                        type="text"
                        placeholder={t('enter_partner_code')}
                        className="bg-gray-200"
                        control={control}
                        fullWidth
                        disabled
                    />
                    <TextFormInput
                        name="branchId"
                        label={t('branch_id')}
                        type="text"
                        placeholder={t('enter_branch_id')}
                        className="bg-gray-200"
                        control={control}
                        fullWidth
                        disabled
                    />
                </div>
                <div className="flex flex-wrap justify-end gap-4">
                    <button
                        type="reset"
                        onClick={() => reset()}
                        className="flex items-center justify-center gap-2 rounded-lg bg-red-500/10 px-6 py-2.5 text-center text-sm font-semibold text-red-500 shadow-sm transition-colors duration-200 hover:bg-red-500 hover:text-white"
                    >
                        <LuEraser size={20}/>
                        {t('clear')}
                    </button>
                    <button
                        type="submit"
                        className="flex items-center justify-center gap-2 rounded-lg bg-primary px-6 py-2.5 text-center text-sm font-semibold text-white shadow-sm transition-all duration-200 hover:bg-primary-500"
                    >
                        <LuSave size={20}/>
                        {t('submit')}
                    </button>
                </div>
            </form>
        </div>
    );
};

export default AddEmployeeForm;
