import { defineStore } from 'pinia';

//引入请求方法
import { reqLoginMessage, userLogin } from '@/api/use/index.ts'
import type { userLoginData,postData,userMessage } from '@/api/use/type'


const useUser = defineStore('user', {
    state: () => {
        return {
            //登录框是否弹出
            dialogFormVisible: false,
            //这是验证码数据
            code: '',
            userInfo: JSON.parse(localStorage.getItem('user') as string) || {}
        }
    },
    actions: {
        //获取验证码消息
        async getCode(phone: string) {
            let result: any = await reqLoginMessage(phone)
            if (result.code == 200) {
                this.code = result.data
            }
        },
        //登录方法
        async goLogin(data:postData) {
            let result: userLoginData = await userLogin(data);
            console.log(result);

            if (result.code == 200) {
                this.userInfo = result.data;
                this.dialogFormVisible = false;
                localStorage.setItem('user', JSON.stringify(result.data));
                return 'ok'
            }else{
                return Promise.reject(new Error(result.message));
            }

        }
    },
    getters: {

    }
})

export default useUser