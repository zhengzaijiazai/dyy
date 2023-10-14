import request from '@/utils/request'

//引入数据类型
import { userLoginData,postData,wxLoginMessageData } from './type'

enum API{
    //验证码基本路径
    // GET /api/sms/send/{phone}
    LOGINMESSAGE = '/sms/send/',

    //POST /api/user/login
    //用户登录接口
    USERLOGIN = '/user/login',
    //用户退出登录路径
    // USEROUTLOGIN = '',
    //微信登录获取基本信息基本路径
    //GET /api/user/weixin/getLoginParam
    WXLOGIN = '/user/weixin/getLoginParam'
}

//短信请求方法
export const reqLoginMessage = (phone:string) => request.get<any>(API.LOGINMESSAGE+phone);

//用户登录方法
export const userLogin =  (data:postData) => request.post<any,userLoginData>(API.USERLOGIN,data);

//退出登录接口
// export const reqOutLogin =  () => request.get<any>('');

//微信登录请求接口
export const reqWxloginMessage = (wxRedirectUri:string) => request.get<any,wxLoginMessageData>(API.WXLOGIN+`?wxRedirectUri=${wxRedirectUri}`)