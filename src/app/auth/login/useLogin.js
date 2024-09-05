import {useEffect, useState} from "react";
import {useNavigate, useSearchParams} from "react-router-dom";
import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import * as yup from "yup";
import {toast} from "sonner";
import {useAuthContext} from "@/context";
import {post} from "@/helpers/api.js"
import {setAuth, setRefreshToken, setToken} from "@/helpers/auth.js";
import {jwtDecode} from 'jwt-decode';
import {useDispatch} from "react-redux";
import {setIsAuthenticated, setRole} from "@/store/reduce/authSlice.js";
import {loginAccount} from "@/service/apis.jsx";
import {useTranslation} from "react-i18next";

const useLogin = () => {
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const {session, saveSession} = useAuthContext();
    const [searchParams] = useSearchParams();
    const dispatch = useDispatch();
    const {t} = useTranslation();

    const loginFormSchema = yup.object({
        username: yup.string().required("Please enter your username"),
        password: yup.string().required("Please enter your password"),
    });

    const {control, handleSubmit, reset, getValues} = useForm({
        resolver: yupResolver(loginFormSchema),
    });

    useEffect(() => {
        reset(getValues());
    }, [t]);

    const login = handleSubmit(async (values) => {
        setLoading(true);
        loginAccount(values)
            .then((res) => {
                const decoded = jwtDecode(res?.data?.accessToken);
                if (decoded?.role?.findIndex(e => e === "ROLE_MANAGER") > -1) {
                    navigate("/admin/dashboard")
                }else {

                }
                dispatch(setIsAuthenticated(true));
                dispatch(setRole(decoded?.role?.[0]));
                setAuth({
                    isAuthenticated: true,
                    role: decoded?.role?.[0]
                })
                setToken(res?.data?.accessToken)
                setRefreshToken(res?.data?.refreshToken)
                toast.success("Successfully logged in. Redirecting....", {
                    position: "top-right",
                    duration: 2000,
                });
            })
            .catch((err) => {
                toast.error(err?.response?.data?.result?.errorMessage || "Error request", {
                    position: "top-right",
                    duration: 2000,
                });
            })
            .finally(() => {
                setLoading(false)
            })
    });

    return {loading, login, control};

}

export default useLogin;
