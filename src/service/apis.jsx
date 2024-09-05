import { get, post, put, del } from "@/helpers/api.js";

// Authentication APIs
const loginAccount = (data) => post("/api/v1/auth/login", data);
const registerAccount = (data) => post("/api/v1/auth/register", data);
const reSendOtp = (email) => put(`/api/v1/auth/regenerate-otp?email=${email}`);
const verifyAccount = (data) => post(`/api/v1/auth/verify-account?email=${data?.email}&otp=${data?.otp}`);
const forgotPassword = (data) => put("/api/v1/auth/forgot-password", data);
const logoutAccount = () => post("/api/v1/logout");
const forgotPasswordCheckMail = (email) => post(`/api/v1/auth/forgot-password/check-mail?email=${email}`);
const changePassword = (data) => post("/api/v1/change-password", data);
const getInfo = () => get("/api/v1/management/user/info");
const editInfo = (data) => post("/api/v1/user/info", data);
const getMapDetail = (placeId) => get("/api/v1/maps/detail", { params: { placeId } });
const getAuthGmail = (code_challenge) => get("/auth/url/v2", { params: { code_challenge } });
const loginGmail = (payload) => get("/auth/callback/v2", payload);

// Language APIs
export const LanguageAPIs = {
  getLanguage: () => get("/api/v1/management/user/language"),
  setLanguage: (lang) => post(`/api/v1/management/user/language?lang=${lang}`),
};

// Branch APIs
export const BranchAPIs = {
  getBranchList: (data) => post("/api/v1/management/branch/list", data),
  addBranch: (data) => post("/api/v1/management/branch", data),
  editBranch: (data) => put("/api/v1/management/branch", data),
  deleteBranch: (id) => del(`/api/v1/management/branch`, { data: { id } }),
  getBranchDetail: (id) => get(`/api/v1/management/branch?branchId=${id}`),
};

// Employee APIs
export const EmployeeAPIs = {
  getList: ({ branchId = 8, ...params }) => get("/api/v1/management/employees", { params: { branchId, ...params } }),
  addEmployee: (data) => post("/api/v1/management/employee/add", data),
  editEmployee: (data) => put("/api/v1/management/employee/edit", data),
  getEmployee: (id) => get(`/api/v1/management/employee/info?id=${id}`),
  changeEmployee: (data) => post("/api/v1/management/employee/change-password", data),
  deleteEmployee: (emailOrUsername) => del("/api/v1/management/employee/delete", { data: { emailOrUsername } }),
};

// Menu APIs
export const MenuAPIs = {
  GetList: ({ branchId, ...params }) => get("/api/v1/management/menu", { params: { branchId, ...params } }),
  EditItem: (data) => put("/api/v1/management/menu", data),
    GetOne: async (id) => {
        return await get(`/api/v1/management/menu/info/${id}`);
    },
};

// Category Item APIs
export const CategoryItemAPIs = {
  GetList: ({ branchId, name }) => get("/api/v1/management/categories", { params: { branchId, name } }),
};

// Branch Item APIs
export const BranchItemAPIs = {
  GetList: ({ branchId, name }) => get("/api/v1/management/branch/option", { params: { branchId, name } }),
};

export {
  loginAccount,
  registerAccount,
  reSendOtp,
  verifyAccount,
  forgotPassword,
  logoutAccount,
  forgotPasswordCheckMail,
  changePassword,
  getInfo,
  editInfo,
  getMapDetail,
  getAuthGmail,
  loginGmail,
};
