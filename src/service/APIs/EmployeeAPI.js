import {get, post, put, del, uploadImage} from "@/helpers/api.js"


const getEmployees = (data) => {
}


export const EmployeeAPIs = {
    GetList: ()=>{
        return  get("/management/employees")
    }
}