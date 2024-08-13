import {get, post, put, del, uploadImage} from "@/helpers/api.js"
import { api } from "../helpers/api";

const loginAccount = (data) => {
  return post("/auth/login", data);
}
const registerAccount = (data) => {
  return  post("/auth/register", data);
}
const reSendOtp = (email) => {
  return  put(`/auth/regenerate-otp?email=${email}`);
}
const verifyAccount = (data) => {
  return  post(`/auth/verify-account?email=${encodeURIComponent(data?.email)}&otp=${encodeURIComponent(data?.otp)}`);
}
const forgotPassword = (data) => {
  return  put("/auth/forgot-password", data);
}
const logoutAccount = () => {
  return  post("/logout");
}
const forgotPasswordCheckMail = (email) => {
  return  post(`/auth/forgot-password/check-mail?email=${email}`)
}
const changePassword = (data) => {
  return  post("/change-password", data)
}
const getEmployees = (data) => {
  return  get("/management/employees", data)
}


export {
  loginAccount,
  registerAccount,
  reSendOtp,
  verifyAccount,
  forgotPassword,
  logoutAccount,
  forgotPasswordCheckMail,
  changePassword,
  getEmployees,
}

export const EmployeeAPIs = {
  GetList: async ({branchId = 8, name, status, createdDateFrom, createdDateTo, lastUpdatedDateFrom, lastUpdatedDateTo, pageNumber, pageSize})=>{
    const payload = {params:{branchId, name, status, createdDateFrom, createdDateTo, lastUpdatedDateFrom, lastUpdatedDateTo, pageNumber, pageSize}};
    return await get("/management/employees", payload);
  },
  AddEmployee: async (data) => {
    return await post("/management/employee/add", data)
  },
  EditEmployee: async (data) => {
    return await post("/management/employee/edit", data)
  },
  getEmployee: async (id) => {
    return await get(`/management/employee/info?id=${id}`)
  }
}