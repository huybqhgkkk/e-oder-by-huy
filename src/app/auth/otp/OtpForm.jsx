import {useEffect, useState} from "react";
import {useForm, Controller} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import * as yup from "yup";
import {useNavigate} from "react-router-dom";
import {reSendOtp, verifyAccount} from "@/service/apis.jsx";
import {toast} from "sonner";
import {useTranslation} from "react-i18next";


const OTPForm = ({email}) => {
    const {t} = useTranslation();
    const [timer, setTimer] = useState(60);
    const [loading, setLoading] = useState(false);
    const [isResendEnabled, setIsResendEnabled] = useState(false);
    const navigate = useNavigate();
    const otpFormSchema = yup.object({
        otp: yup
            .string()
            .matches(/^\d{6}$/, t('invalid_otp'))
            .required(t('enter_otp')),
    });
    const {control, handleSubmit, formState: {errors}} = useForm({
        resolver: yupResolver(otpFormSchema),
        defaultValues: {
            otp: "",
        },
    });

    useEffect(() => {
        let countdown;
        if (timer > 0) {
            countdown = setInterval(() => {
                setTimer((prevTimer) => prevTimer - 1);
            }, 1000);
        } else {
            setIsResendEnabled(true);
        }
        return () => clearInterval(countdown);
    }, [timer]);

    const handleResendOTP = async () => {
        setLoading(true);
        reSendOtp(email)
            .then(() => {
                setTimer(60);
                setIsResendEnabled(false);
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

    const onSubmit = async (data) => {
        if (email) {
            setLoading(true);
            const dataSubmit = {...data, email};
            verifyAccount(dataSubmit)
                .then(() => {
                    toast.success(t('otp_verified_redirecting'), {
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
        }
    };

    return (
        <div className="max-w-md mx-auto p-4 bg-white shadow-md rounded-lg">
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="mb-6 mt-10">
                    <Controller
                        name="otp"
                        control={control}
                        render={({field: {onChange, onBlur, value}}) => (
                            <input
                                type="text"
                                inputMode="numeric"
                                maxLength={6}
                                value={value}
                                onChange={(e) => {
                                    const normalizedValue = e.target.value.replace(/\D/g, '');
                                    onChange(normalizedValue);
                                }}
                                onBlur={onBlur}
                                className={`w-full bg-gray-100 text-center text-xl rounded-lg border-2 ${errors.otp ? 'border-red-500' : 'border-gray-300'} focus:outline-none`}
                            />
                        )}
                    />
                    {errors.otp && (
                        <p className="text-red-500 text-sm mt-2">{errors.otp.message}</p>
                    )}
                </div>

                <button
                    type="submit"
                    disabled={loading || !email}
                    className="w-full rounded-lg bg-primary px-6 py-3 text-base capitalize text-white transition-all hover:bg-primary-500"
                >
                    {t('verify_otp')}
                </button>

                <div className="mt-4 text-center">
                    {isResendEnabled ? (
                        <button
                            type="button"
                            disabled={loading || !email}
                            onClick={handleResendOTP}
                            className="text-primary underline"
                        >
                            {t('resend_otp')}
                        </button>
                    ) : (
                        <p>{t('resend_otp_in') + timer + t('seconds')}</p>
                    )}
                </div>
            </form>
        </div>
    );
};

export default OTPForm;
