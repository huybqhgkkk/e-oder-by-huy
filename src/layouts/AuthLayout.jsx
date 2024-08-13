import {Suspense} from "react";
import {authBgOtherImg, waveOtherImg} from "@/assets/data";
import {OfferAdBanner} from "@/components/index.js";

const AuthLayout = ({children}) => {
    return (
        <>
            <OfferAdBanner />
            <div className="relative bg-gradient-to-b from-primary/5 via-primary/5 to-primary/10">
                <div className="relative flex items-center bg-gradient-to-b from-primary/5 via-primary/5 to-primary/10 ">
                    <div className="container mx-auto px-4">
                        <Suspense>{children}</Suspense>
                    </div>

                    <div className="absolute inset-0 -z-10">
                        <div className="absolute inset-x-0 bottom-0 transform -translate-y-1/3">
                            <img
                                src={waveOtherImg}
                                alt="Wave background"
                                className="w-full object-cover opacity-50"
                            />
                        </div>
                        <div className="absolute inset-0 hidden xl:block">
                            <img
                                src={authBgOtherImg}
                                alt="Auth background"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>

    );
};

export default AuthLayout;
