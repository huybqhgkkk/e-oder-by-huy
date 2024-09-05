import {Navigate, Route, Routes, useLocation, useNavigate} from "react-router-dom";
import {
    AuthLayout,
    ClientLayout,
    DefaultLayout,
    AdminLayout,
} from "../layouts";
import {
    allAuthFlattedRoutes,
    clientPublicFlattedRoutes,
    clientProtectedFlattedRoutes,
    allAdminFlattedRoutes,
    allBlankFlattedRoutes,
} from "./index";
import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {getAuth, getToken, setAuth, setRefreshToken, setToken} from "@/helpers/auth.js";
import {getInfo, LanguageAPIs, loginGmail} from "@/service/apis.jsx";
import {errorMessage} from "@/helpers/message.js";
import {useTranslation} from "react-i18next";
import {setInfo, setIsAuthenticated, setLanguage, setLoading, setRole} from "@/store/reduce/authSlice.js";
import Loading from "@/components/loading/page.jsx";
import queryString from "query-string";
import {toast} from "sonner";

const AllRoutes = (props) => {
    const role = useSelector((state) => state.auth.role);
    const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
    const token = getToken();
    const [loading, setLoading] = useState();
    const {t} = useTranslation();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const location = useLocation();
    const queryParams = queryString.parse(location.search);
    const code = queryParams.code;

    useEffect(() => {
        fetchData();
    }, [token]);

    const fetchData = async () => {
        try {
            setLoading(true);
            if (!token) return;

            const [infoResponse, languageResponse] = await Promise.all([
                getInfo(),
                LanguageAPIs.getLanguage(),
            ]);

            const userInfo = infoResponse?.data;
            const userLanguage = languageResponse?.data || "vn";

            dispatch(setInfo(userInfo));
            dispatch(setIsAuthenticated(true));
            dispatch(setRole(userInfo?.role));
            setAuth({
                isAuthenticated: true,
                role: userInfo?.role,
            });

            dispatch(setLanguage(userLanguage));

        } catch (error) {
            errorMessage(t('error_request'));
            // navigate("/auth/login");
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        if (code) {
            const verifier = localStorage.getItem('verifier');
            const payload = {
                params: {
                    code: code,
                    code_verifier: verifier
                }
            }
            loginGmail(payload)
                .then(res => {
                    dispatch(setIsAuthenticated(true));
                    setAuth({
                        isAuthenticated: true,
                        // role: decoded?.role?.[0]
                    })
                    setToken(res?.data?.accessToken)
                    setRefreshToken(res?.data?.refreshToken)
                    toast.success("Successfully logged in. Redirecting....", {
                        position: "top-right",
                        duration: 2000,
                    });
                    navigate("/")
                })
                .catch(err => errorMessage(err?.response?.data?.result?.errorMessage || t("error_request")))
                .finally(()=> dispatch(setLoading(false)))
        }
    }, [code])

    return (
        <>
            {loading && <Loading />}
            <Routes>
                {allBlankFlattedRoutes.map((route, idx) => (
                    <Route
                        key={idx}
                        path={route.path}
                        element={<DefaultLayout {...props}>{route.element}</DefaultLayout>}
                    />
                ))}

                {allAuthFlattedRoutes.map((route, idx) => (
                    <Route
                        key={idx}
                        path={route.path}
                        element={<AuthLayout {...props}>{route.element}</AuthLayout>}
                    />
                ))}

                {clientPublicFlattedRoutes.map((route, idx) => (
                    <Route
                        key={idx}
                        path={route.path}
                        element={<ClientLayout {...props}>{route.element}</ClientLayout>}
                    />
                ))}

                {clientProtectedFlattedRoutes.map((route, idx) => (
                    <Route
                        key={idx}
                        path={route.path}
                        element={
                            isAuthenticated && role === "USER" ? (
                                <ClientLayout {...props}>{route.element}</ClientLayout>
                            ) : (
                                <Navigate to="/auth/login"/>
                            )
                        }
                    />
                ))}

                {allAdminFlattedRoutes.map((route, idx) => (
                    <Route
                        key={idx}
                        path={route.path}
                        element={
                            isAuthenticated && ['MANAGER', 'ROLE_MANAGER'].includes(role)? (
                                <AdminLayout {...props}>{route.element}</AdminLayout>
                            ) : (
                                <Navigate to="/auth/login"/>
                            )
                        }
                        // element={<AdminLayout {...props}>{route.element}</AdminLayout>}
                    />
                ))}
            </Routes>
        </>
    );
};

export default AllRoutes;
