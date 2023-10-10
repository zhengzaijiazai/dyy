//发送请求的接口一般会单独有一个文档来写
//因为多个页面可以用到一个请求 后面地址改变就需要一个一个去改
//写在一个文档里面就只改一次

import request from '@/utils/request'

//引入返回数据的类型文件
import type { HospitalResponseData,HospitalLevelAndRegionResponseData,HospitalInfo } from './type'

//枚举获取已有的医院数据接口
enum API {
    //获取医院信息接口前路径
    HOSPITAL_URL = '/hosp/hospital/',
    //这是获取等级和地区的基本路径
    HOSPITALALLLEVELANDREGION = '/cmn/dict/findByDictCode/',
    //通过关键字去获取内容
    HOSPITALNAME = '/hosp/hospital/findByHosname/'
}

//获取医院数据请求
export const reqHospital = (page: number, limit: number, hostype='', districtCode='') => request.get<any, HospitalResponseData>(API.HOSPITAL_URL + `${page}/${limit}?hostype=${hostype}&districtCode=${districtCode}`)

//获取等级和地区请求
export const reqHospitalLevelAndRegion = (dictCode: string) => request.get<any,HospitalLevelAndRegionResponseData>(API.HOSPITALALLLEVELANDREGION + `${dictCode}`)

// 通关关键字获取医院列表
export const reqHospitalName = (name:string) => request.get<any,HospitalInfo>(API.HOSPITALNAME + name);