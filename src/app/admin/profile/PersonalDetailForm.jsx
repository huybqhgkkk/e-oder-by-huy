import { useEffect, useState, useMemo } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { FilePond, registerPlugin } from "react-filepond";
import FilePondPluginImageExifOrientation from "filepond-plugin-image-exif-orientation";
import FilePondPluginImagePreview from "filepond-plugin-image-preview";
import FilePondPluginImageCrop from "filepond-plugin-image-crop";
import { TextFormInput } from "@/components";

import "filepond/dist/filepond.min.css";
import "filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css";
import { editInfo, getInfo } from "@/service/apis.jsx";
import { useTranslation } from "react-i18next";
import { errorMessage, successMessage } from "@/helpers/message.js";
import { useDispatch, useSelector } from "react-redux";
import { setInfo, setLoading } from "@/store/reduce/authSlice.js";
import { maxLength, minLength, requiredField, validatePhone } from "@/helpers/validation.js";
import FilePondImagePreview from "filepond-plugin-image-preview";
import 'filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css';

registerPlugin(
    FilePondPluginImageExifOrientation,
    FilePondPluginImagePreview,
    FilePondPluginImageCrop,
    FilePondImagePreview
);
import imageCompression from 'browser-image-compression';
import {avatarDefault} from "@/assets/data/index.js";

const options = {
    maxSizeMB: 0.5,
    maxWidthOrHeight: 800,
    useWebWorker: true,
};

const PersonalDetailForm = () => {
    const { t } = useTranslation();
    const dispatch = useDispatch();
    const data = useSelector((state) => state.auth.info);
    const initData = {
        firstName: data?.firstName,
        lastName: data?.lastName,
        phoneNumber: data?.phone,
        locale: data?.address,
    };
    const [files, setFiles] = useState([]);
    const personalDetailsFormSchema = yup.object({
        firstName: minLength(3, `${t('min_length')} 3 ${t('character')}`).concat(maxLength(20, `${t('max_length')} 20 ${t('character')}`)).concat(requiredField(t('first_name'))),
        lastName: minLength(3, `${t('min_length')} 3 ${t('character')}`).concat(maxLength(20, `${t('max_length')} 20 ${t('character')}`)).concat(requiredField(t('last_name'))),
        phoneNumber: validatePhone(t).concat(requiredField(t("phone_number"))),
        locale: yup.string().concat(requiredField(t("address_required"))),
    });

    const { control, handleSubmit, setValue, reset, getValues } = useForm({
        resolver: yupResolver(personalDetailsFormSchema),
        defaultValues: initData || {},
    });

    useEffect(() => {
        reset(getValues());
    }, [t]);

    useEffect(() => {
        if (initData) {
            Object.keys(initData).forEach((key) => {
                setValue(key, initData[key]);
            });
        }
        if (data?.avatarImgUrl) {
            fetch(data?.avatarImgUrl)
                .then((res) => res.blob())
                .then((blob) => {
                    const file = new File([blob], "avatar.jpg", { type: blob.type });
                    setFiles([
                        {
                            source: file,
                            options: {
                                type: 'local',
                            },
                        },
                    ]);
                })
                .catch((error) => {
                    console.error('Error loading the image:', error);
                });
        }else {
            setFiles([
                {
                    source: avatarDefault,
                    options: {
                        type: 'local',
                    },
                },
            ]);
        }
    }, [data]);

    const handleUpdateFiles = (fileItems) => {
        const allowedExtensions = ['png', 'jpeg', 'jpg', 'gif'];
        const validFiles = [];

        fileItems.forEach(fileItem => {
            const fileExtension = fileItem.file.name.split('.').pop().toLowerCase();
            if (allowedExtensions.includes(fileExtension)) {
                validFiles.push(fileItem);
            } else {
                errorMessage(t('ivalid_img'), "top-center")
            }
        });

        setFiles(validFiles);
    };

    const onSubmit = async (value) => {
        let base64Image = null;

        if (files?.length > 0) {
            try {
                const compressedFile = await imageCompression(files[0].file, options);
                base64Image = await imageCompression.getDataUrlFromFile(compressedFile);
            } catch (error) {
                console.error('Error processing the image:', error);
            }
        }
        const cleanBase64String = base64Image?.replace('data:image/png;base64,', '');
        const payload = { ...value, avatarFile: cleanBase64String || "" };

        dispatch(setLoading(true));

        try {
            await editInfo(payload);
            successMessage(t('edit_success'));

            const res = await getInfo();
            dispatch(setInfo(res?.data));
        } catch (err) {
            const errorMsg = err?.response?.data?.result?.errorMessage || t('error_request');
            errorMessage(errorMsg);
        } finally {
            dispatch(setLoading(false));
        }
    };

    return (
        <div className="mb-6 rounded-lg border border-default-200 p-6">
            <div>
                <h4 className="mb-4 text-xl font-medium text-default-900">
                    {t('personal_details')}
                </h4>
                <div className="grid gap-6 xl:grid-cols-5">
                    <div className="xl:col-span-1 ">
                        <div className="mx-auto">
                            <FilePond
                                className="mx-auto h-44 w-44 lg:h-48 lg:w-48 cursor-pointer"
                                labelIdle={t('add_photo')}
                                imagePreviewHeight={110}
                                imageCropAspectRatio="1:1"
                                stylePanelLayout="compact circle"
                                styleButtonRemoveItemPosition="center bottom"
                                files={files}
                                onupdatefiles={handleUpdateFiles}
                                allowMultiple={false}
                            />
                        </div>
                    </div>
                    <div className="xl:col-span-4">
                        <form
                            onSubmit={handleSubmit((data) => onSubmit(data))}
                            className="grid gap-6 lg:grid-cols-2"
                        >
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
                                name="phoneNumber"
                                label={t('phone_number')}
                                type="text"
                                placeholder={t('enter_phone_number')}
                                control={control}
                                fullWidth
                            />
                            <TextFormInput
                                name="locale"
                                label={t('address')}
                                type="text"
                                placeholder={t('enter_locale')}
                                control={control}
                                fullWidth
                            />
                            <div>
                                <button
                                    type="submit"
                                    disabled={files.length === 0}
                                    className="w-full md:w-fit flex items-center justify-center gap-2 rounded-lg border border-primary bg-primary px-6 py-2.5 text-center text-sm font-semibold text-white shadow-sm transition-all duration-200 hover:bg-primary-500"
                                >
                                    {t('save')}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PersonalDetailForm;
