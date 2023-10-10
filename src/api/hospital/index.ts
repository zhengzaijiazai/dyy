import request from "@/utils/request.ts";
import type {HospitalDetailData,HospitalDepartmentData} from './type'

enum API{
    //请求医院详情信息路径
    HOSPITALDETAIL = '/hosp/hospital/',
    HOSPITALKESHI = '/hosp/hospital/department/'
}
//获取医院详情信息
export const reqHospitaiDetail = (hoscode:string) => request.get<any,HospitalDetailData>(API.HOSPITALDETAIL + hoscode);

//获取医院详情里面的科室信息
export const reqHospitalDepartment = (hoscode:string) => request.get<any,HospitalDepartmentData>(API.HOSPITALKESHI+hoscode);