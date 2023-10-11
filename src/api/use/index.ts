import request from '@/utils/request'

//引入数据类型
import { userLoginData,postData } from './type'

enum API{
    //验证码基本路径
    // GET /api/sms/send/{phone}
    LOGINMESSAGE = '/sms/send/',

    //POST /api/user/login
    //用户登录接口
    USERLOGIN = '/user/login'
}

//短信请求方法
export const reqLoginMessage = (phone:string) => request.get<any>(API.LOGINMESSAGE+phone);

//用户登录方法
export const userLogin =  (data:postData) => request.post<any,userLoginData>('/user/login',data);