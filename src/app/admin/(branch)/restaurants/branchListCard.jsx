import {Link, useNavigate} from "react-router-dom";
import {
    LuCheckCircle,
    LuCode,
    LuEye,
    LuMail,
    LuMapPin,
    LuPencil,
    LuPhone,
    LuTrash2
} from "react-icons/lu";
import {restaurant1Img} from "@/assets/data/index.js";
import {BranchAPIs} from "@/service/apis.jsx";
import {errorMessage, successMessage} from "@/helpers/message.js";
import ComfirmModals from "@/components/modals/comfirmModal-v2.jsx";
import {useState} from "react";
import {useTranslation} from "react-i18next";

const BranchListCard = ({data, reload}) => {
    const {
        phoneNumber,
        address,
        email,
        logo = restaurant1Img,
        partnerCode,
        name,
        description,
        id,
        status,
    } = data;
    const {t} =useTranslation();
    const navigate = useNavigate();
    const [openModal, setOpenModal] = useState(false);
    const deleteBranch = () => {
        BranchAPIs.deleteBranch(id)
            .then(() => {
                reload(1);
                successMessage(t('delete_success'))
            })
            .catch((err) => {
                errorMessage(err?.response?.data?.result?.errorMessage || t('error_request'))
            })
    }
    const onConfirm = async () => {
        await deleteBranch()
        setOpenModal(false)
    }
    const onClose = () => {
        setOpenModal(false)
    }

    return (
        <>
            {openModal &&  <ComfirmModals onClose={onClose} onConfirm={onConfirm} title={t('delete_branch')} contentText={t('delete_branch_content') + " " + name} /> }

            <div className="relative rounded-lg border border-default-200 p-6">
                <img
                    src={logo}
                    width={56}
                    height={56}
                    className="mx-auto mb-4 h-14 w-14"
                    alt="data"
                />
                <h4 className="text-center text-base font-medium uppercase text-default-900">
                    {name}
                </h4>
                <h3 className="mb-10 text-center text-base font-normal text-default-600">
                    {description}
                </h3>
                <div className="mb-6 space-y-5">
                    <div className="flex gap-3">
                        <div className="flex-shrink">
                            <LuCode size={20} className="text-default-800"/>
                        </div>
                        <p className="d text-sm text-default-700">{partnerCode}</p>
                    </div>
                    <div className="flex gap-3">
                        <div className="flex-shrink">
                            <LuMail size={20} className="text-default-800"/>
                        </div>
                        <p className="d text-sm text-default-700">{email}</p>
                    </div>
                    <div className="flex gap-3">
                        <div className="flex-shrink">
                            <LuPhone size={20} className="text-default-800"/>
                        </div>
                        <p className="d text-sm text-default-700">{phoneNumber}</p>
                    </div>
                    <div className="flex gap-3">
                        <div className="flex-shrink">
                            <LuMapPin size={20} className="text-default-800"/>
                        </div>
                        <p className="d text-sm text-default-700">{address}</p>
                    </div>


                    <div className="flex gap-3">
                        <div className="flex-shrink">
                            <LuCheckCircle size={20} className="text-default-800"/>
                        </div>
                        <p className="d text-sm text-default-700">{status === 0 ? "Không hoạt động" : "Đang hoạt động"}</p>
                    </div>

                </div>
                <div className="text-center">
                    <div className="flex gap-3 justify-center">
                        {/*<button*/}
                        {/*    onClick={() => navigate(`/admin/edit-employee?id=${row?.userId}`)}*/}
                        {/*    type="button"*/}
                        {/*    className="py-2 px-3 inline-flex font-semibold tracking-wide align-middle duration-500 text-sm text-center bg-info text-white  rounded-lg">*/}
                        {/*    <LuEye*/}
                        {/*        size={16}*/}
                        {/*        className="cursor-pointer transition-colors group-hover:fill-white group-hover:text-blue-700"*/}
                        {/*    />*/}
                        {/*</button>*/}
                        <button
                            onClick={() => navigate(`/admin/edit-branch?id=${id}`)}
                            type="button"
                            className="py-2 px-3 inline-flex font-semibold tracking-wide align-middle duration-500 text-sm text-center bg-info text-white rounded-lg hover:text-blue-700 hover:bg-slate-100">
                            <LuPencil
                                size={16}
                                className="cursor-pointer transition-colors group-hover:fill-white group-hover:text-blue-700"
                            />
                        </button>
                        <button
                            type="button"
                            onClick={() => setOpenModal(true)}
                            className="py-2 px-3 inline-flex font-semibold tracking-wide align-middle duration-500 text-sm text-center bg-danger text-white rounded-lg hover:text-red-500 hover:bg-slate-100 ">
                            <LuTrash2
                                size={16}
                                className="cursor-pointer transition-colors hover:text-red-500"
                            />

                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default BranchListCard;
