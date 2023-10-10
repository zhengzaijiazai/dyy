import { ResponseData } from '../home/type';
 
export interface HospitalDetail {
        "bookingRule": {
            "cycle": number,
            "releaseTime": string,
            "stopTime": string,
            "quitDay": number,
            "quitTime": string,
            "rule": string[]
        },
        "hospital": {
            "id": string,
            "createTime": string,
            "updateTime": string,
            "isDeleted": number,
            "param": {
                "hostypeString": string,
                "fullAddress": string
            },
            "hoscode": string,
            "hosname": string,
            "hostype": string,
            "provinceCode": string,
            "cityCode": string,
            "districtCode": string,
            "address": string,
            "logoData":string,             
            "intro": string,
            "route": string,
            "status": number,
            "bookingRule": null
        }
}

export interface HospitalDetailData extends ResponseData{
    data:HospitalDetail;
}


//医院科室的数据类型
export interface Department{
    "depcode": string,
    "depname": string,
    "children"?: Department[]
}

export type HospitalDepartment = Department[];

export interface HospitalDepartmentData extends ResponseData{
    data:HospitalDepartment,
}