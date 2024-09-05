import {
    BreadcrumbAdmin,
} from "@/components";
import {useEffect, useState} from "react";
import {BranchAPIs} from "@/service/apis.jsx";
import Pagination from "@/components/data-tables/Pagination.jsx";
import BranchListCard from "@/app/admin/(branch)/restaurants/branchListCard.jsx";
import {restaurantsData} from "@/assets/data/index.js";
import {useNavigate} from "react-router-dom";
import {LuPlus, LuSearch} from "react-icons/lu";
import TableSearchBox from "@/components/data-tables/TableSearchBox.jsx";
import {useDispatch} from "react-redux";
import {setLoading} from "@/store/reduce/authSlice.js";
import {useTranslation} from "react-i18next";

const BranchList = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const {t} = useTranslation();
    const [data, setData] = useState([]);
    const [pagination, setPagination] = useState({
        pageNumber: 1,
        pageSize: 8,
        totalElements: 0,
        totalPages: 1
    });
    const [keywords, setKeywords] = useState({name: "", phone: "", email: "", partnerCode: ""});

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    useEffect(() => {
        getDataList();
    }, [pagination.pageNumber]);

    const getDataList = (page) => {
        const currentPage = page || pagination?.pageNumber;
        const payload = {
            page: currentPage,
            pageSize: pagination?.pageSize,
            orderByParams: [
                {
                    key: "name",
                    value: "desc"
                }
            ],
            containByParams: Object.entries(keywords || {})
                .filter(([_, value]) => value)
                .map(([key, value]) => ({ key, value }))
        };

        dispatch(setLoading(true));

        BranchAPIs.getBranchList(payload)
            .then((res) => {
                const branchDataList = res?.data?.branchDataList;
                const pageable = res?.data?.pageable;

                setData(branchDataList);
                setPagination({
                    ...pagination,
                    totalElements: pageable?.totalElements,
                    totalPages: pageable?.totalPages,
                });
            })
            .catch((err) => {
                console.error('Failed to fetch branch data:', err);
            })
            .finally(() => {
                dispatch(setLoading(false));
            });
    };

    const handlePageChange = (pageNumber) => {
        setPagination({...pagination, pageNumber});
    }


    return (
        <>
            <div className="w-full lg:ps-64">
                <div className="page-content space-y-6 p-6">
                    <BreadcrumbAdmin title={t('branchs_subtitle_list')} subtitle={t('branchs_subtitle')}/>
                    <div className="flex justify-end">
                        <div
                            onClick={() => navigate("/admin/add-branch")}
                            className="w-full md:w-fit justify-center inline-flex rounded-md bg-primary px-6 py-2.5 text-sm text-white hover:bg-primary-500 cursor-pointer">
                            <LuPlus size={20} className="me-2 inline-flex align-middle"/>
                            {t('add_new_branch')}
                        </div>
                    </div>

                    <div className="flex flex-col md:flex-row justify-between">
                        <div className="flex flex-col md:flex-row gap-4">
                            <TableSearchBox
                                label={t('partnerCode')}
                                value={keywords.partnerCode}
                                // placeholder={t('partnerCode_ex')}
                                onChange={(e) => {
                                    setKeywords({...keywords, partnerCode: e.target.value});
                                }}
                                onKeyPress={(e) => {
                                    if (e.key === 'Enter') {
                                        getDataList(1);
                                    }
                                }}
                            />
                            <TableSearchBox
                                // placeholder={t('name_branch')}
                                label={t('ex_name_branch')}
                                value={keywords.name}
                                onChange={(e) => {
                                    setKeywords({...keywords, name: e.target.value});
                                }}
                                onKeyPress={(e) => {
                                    if (e.key === 'Enter') {
                                        getDataList(1);
                                    }
                                }}
                            />
                            <TableSearchBox
                                // placeholder={t('email')}
                                label={t('email')}
                                value={keywords.email}
                                onChange={(e) => {
                                    setKeywords({...keywords, email: e.target.value});
                                }}
                                onKeyPress={(e) => {
                                    if (e.key === 'Enter') {
                                        getDataList(1);
                                    }
                                }}
                            />
                            <TableSearchBox
                                // placeholder={t('phone_number')}
                                label={t('phone_number')}
                                value={keywords.phone}
                                onChange={(e) => {
                                    setKeywords({...keywords, phoneNumber: e.target.value});
                                }}
                                onKeyPress={(e) => {
                                    if (e.key === 'Enter') {
                                        getDataList(1);
                                    }
                                }}
                            />
                        </div>
                        <div className="relative max-w-full mt-4 md:mt-0 md:ml-4 min-w-[121px]">
                            <span className="mb-2 block text-sm font-medium text-default-900">&nbsp;</span>
                            <button
                                onClick={() => getDataList(1)}
                                className="inline-flex w-full md:w-auto rounded-md bg-primary px-5 py-3 text-sm text-white hover:bg-primary-500 flex-row gap-1 justify-center items-center">
                                <LuSearch className="min-w-[14px]"/>
                                <span>{t('search')}</span>
                            </button>
                        </div>
                    </div>


                    <div className="mb-6 grid gap-6 md:grid-cols-2 2xl:grid-cols-4">
                        {data?.map((e, index) => (
                            <BranchListCard key={index} data={e} reload={getDataList}/>
                        ))}
                    </div>
                    {
                        data && data?.length === 0 && <div className="mb-4 text-2xl font-medium text-default-800 text-center">{t('no_data')}</div>
                    }
                    <Pagination
                        currentPage={pagination.pageNumber}
                        totalCount={pagination.totalElements}
                        onPageChange={handlePageChange}
                        pageSize={pagination.pageSize}
                    />
                </div>
            </div>
        </>
    );
};

export default BranchList;
