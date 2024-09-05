import {useEffect, useState} from "react";
import { LuSave } from "react-icons/lu";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { TextFormInput } from "@/components";
import { BranchAPIs, getMapDetail } from "@/service/apis.jsx";
import { useTranslation } from "react-i18next";
import {
    minLength,
    maxLength,
    validatePhone,
    validateEmail,
    requiredField,
} from "@/helpers/validation.js";
import { errorMessage, successMessage } from "@/helpers/message.js";
import { useNavigate } from "react-router-dom";
import SelectAsyn from "@/components/form/SelectAsyn.jsx";
import { useDispatch, useSelector } from "react-redux";
import { setLoading } from "@/store/reduce/authSlice.js";

const AddBranchForm = ({ type, initialData, id }) => {
    const { t } = useTranslation();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const loading = useSelector((state) => state.auth.loading);
    const [locationValue, setLocationValue] = useState({});

    const addBranchFormSchema = yup.object({
        partnerCode: requiredField(t("partner_code_required")),
        name: minLength(3, `${t("min_length")} 3 ${t("character")}`)
            .concat(maxLength(50, `${t("max_length")} 50 ${t("character")}`))
            .concat(requiredField(t("name"))),
        phoneNumber: validatePhone(t).concat(requiredField(t("phone_number"))),
        email: validateEmail(t).concat(requiredField(t("email"))),
        location: yup.object().required(t("select_location")),
        description: maxLength(255, `${t("max_length")} 255 ${t("character")}`).concat(
            requiredField(t("description_required"))
        ),
    });

    const {
        control,
        handleSubmit,
        reset,
        setValue,
        getValues,
    } = useForm({
        resolver: yupResolver(addBranchFormSchema),
        defaultValues: {
            partnerCode: "",
            name: "",
            location: {},
            phoneNumber: "",
            email: "",
            description: "",
        },
    });

    useEffect(() => {
        reset(getValues());
    }, [t]);

    useEffect(() => {
        if (type === "edit" && initialData) {
            const data = {
                partnerCode: initialData?.partnerCode,
                name: initialData?.name,
                phoneNumber: initialData?.phoneNumber,
                email: initialData?.email,
                description: initialData?.description,
                location: {
                    label: initialData?.address,
                    value: initialData?.placeId,
                },
            };
            Object.keys(data).forEach((key) => {
                setValue(key, data[key]);
            });
            setLocationValue(data?.location);
        }
    }, [type, initialData]);

    const onSubmit = async (formData) => {
        try {
            dispatch(setLoading(true));
            let payload = {
                partnerCode: formData.partnerCode,
                name: formData.name,
                address: formData.location.label,
                placeId: formData.location.value,
                phoneNumber: formData.phoneNumber,
                email: formData.email,
                description: formData.description,
            };

            const mapDetails = await getMapDetail(formData.location.value);
            payload = {
                ...payload,
                latitude: mapDetails?.data?.geometry?.location?.lat,
                longitude: mapDetails?.data?.geometry?.location?.lng,
            };

            if (type === "edit") {
                payload = { ...payload, id };
            }

            const apiCall = type === "edit" ? BranchAPIs.editBranch : BranchAPIs.addBranch;
            await apiCall(payload);

            successMessage(type === "edit" ? t("edit_success") : t("add_success"));
            navigate("/admin/branch");
        } catch (err) {
            errorMessage(err?.response?.data?.result?.errorMessage || t("error_request"));
        } finally {
            dispatch(setLoading(false));
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
                        placeholder={t("enter_partner_code")}
                        control={control}
                        fullWidth
                        disabled={type === "edit"}
                    />
                    <TextFormInput
                        name="name"
                        label={t("name_branch")}
                        type="text"
                        placeholder={t("enter_name_branch")}
                        control={control}
                        fullWidth
                    />
                    <SelectAsyn
                        name="location"
                        label={t("location")}
                        placeholder={t("enter_location")}
                        control={control}
                        fullWidth
                        fetchOptionsUrl="/api/v1/maps/auto-complete"
                        initValue={locationValue}
                    />
                    <TextFormInput
                        name="phoneNumber"
                        label={t("phone_number")}
                        type="text"
                        placeholder={t("enter_phone_number")}
                        control={control}
                        fullWidth
                    />
                    <TextFormInput
                        name="email"
                        label={t("email")}
                        type="text"
                        placeholder={t("enter_email")}
                        control={control}
                        fullWidth
                    />
                    <TextFormInput
                        name="description"
                        label={t("description")}
                        type="text"
                        placeholder={t("enter_description")}
                        control={control}
                        fullWidth
                    />
                </div>
                <div className="flex flex-wrap justify-end gap-4">
                    <button
                        disabled={loading}
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

export default AddBranchForm;
