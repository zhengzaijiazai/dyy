import { ResponseData } from '../home/type';

// 登录请求数据
export interface postData{
    code:string,
    phone:string
}
//响应登录数据
export interface userMessage{
    name:string,
    token:string
}

export interface userLoginData extends ResponseData{
    data:userMessage
}

export interface wxLoginMessage{
    "redirectUri": string,
    "appid": string,
    "scope": string,
    "state": string
} 
export interface wxLoginMessageData extends ResponseData{
    data:wxLoginMessage
}
