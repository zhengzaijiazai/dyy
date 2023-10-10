import { defineStore } from "pinia";
//引入科室数据请求方法
import { reqHospitalDepartment } from "@/api/hospital/index";

//引入数据类型
import type { HospitalDepartmentData,HospitalDepartment } from '@/api/hospital/type'


const useDepartmentData = defineStore('Department',{
    state:()=> {
        return{
            DepartmentData:([] as HospitalDepartment)
        }
    },
    actions:{
        async getHospitalDepartmentData(hoscode:string){
            let result:HospitalDepartmentData = await reqHospitalDepartment(hoscode);
            console.log(result);
            if(result.code == 200){
                this.DepartmentData = result.data
            }
            
        }
    },
    getters:{
        
    }
})

export default useDepartmentData