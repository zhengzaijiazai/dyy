import { defineStore } from 'pinia';

//引入请求方法
//reqOutLogin 退出请求
import { reqLoginMessage, userLogin } from '@/api/use/index.ts'
import type { userLoginData,postData } from '@/api/use/type'


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

        },
        //退出登录
        //退出登录 删token和切换显示 发送退出请求
        loginOut(){
                //删除token页面刷新
             //还需要删除仓库的数据 因为仓库的数据已经指定  
            localStorage.removeItem('user');
            this.userInfo = {};
            // reqOutLogin();
        },
        //这个方法是判断微信登录是否成功 是否关闭对话框  对仓库的信息进行赋值
        queryStatus(){
            let timer = setInterval(()=>{
                if(localStorage.getItem('user')){
                    this.dialogFormVisible = false,
                    this.userInfo = JSON.parse(localStorage.getItem('user') as string);
                    clearInterval(timer);
                }
            },1000)
        }
    },
    getters: {

    }
})

export default useUser