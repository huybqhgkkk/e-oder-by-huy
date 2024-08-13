import {Link} from "react-router-dom";

import {
    logoDarkImg,
    logoLightImg,
    googleIconImg,
    facebookIconImg,
} from "@/assets/data/images";
import {useEffect} from "react";

const AuthFormLayout = ({
                            authTitle,
                            helpText,
                            children,
                            bottomLink,
                            hasThirdPartyAuth,
                        }) => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <div className="flex items-center justify-center min-h-screen px-4 py-8">
            <div className="flex flex-col w-full max-w-lg p-6 bg-white shadow-lg rounded-lg">
                <div className="flex items-center justify-center mb-6">
                    <Link to="/" className="flex items-center">
                        <img
                            width={156}
                            height={48}
                            src={logoDarkImg}
                            alt="logo"
                            className="h-12 dark:hidden"
                        />
                        <img
                            width={156}
                            height={48}
                            src={logoLightImg}
                            alt="logo"
                            className="hidden h-12 dark:flex"
                        />
                    </Link>
                </div>

                <div className="text-center mb-8">
                    <h1 className="text-2xl font-semibold text-gray-800">{authTitle}</h1>
                    <p className="text-sm text-gray-500 mt-2">{helpText}</p>
                </div>

                <div className="flex flex-col gap-6">
                    {children}

                    {hasThirdPartyAuth && (
                        <div className="flex items-center justify-center gap-4 mt-6">
                            <img
                                height={32}
                                width={32}
                                alt="social-login-google"
                                src={googleIconImg}
                                className="h-8 w-8"
                            />
                            <img
                                height={32}
                                width={32}
                                alt="social-login-facebook"
                                src={facebookIconImg}
                                className="h-8 w-8"
                            />
                        </div>
                    )}
                </div>

                {bottomLink && (
                    <div className="flex justify-center mt-8">
                        {bottomLink}
                    </div>
                )}
            </div>
        </div>
    );
};

export default AuthFormLayout;
