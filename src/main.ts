//创建Vue3实例
import { createApp } from 'vue'
//清除默认样式
import "@/style/reset.scss"
//引入根组件app 
import App from '@/App.vue'
// 引入路由
import router from './router'
//引入element plus
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
//引入中文
//@ts-ignore
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'
//引入全局组件  
//头部组件
import HospitalTop from '@/components/hospital_top/index.vue'
//底部组件
import HospitalBottom from '@/components/hospital_bottom/index.vue'
//登录组件
import login from '@/components/login/index.vue'


import pinia from '@/store/index'
// 挂载app
const app = createApp(App)

//注册全局组件
app.component('HospitalTop', HospitalTop);
app.component('HospitalBottom', HospitalBottom);
app.component('Login',login);

//注册路由
app.use(router)
//注册element plus
//引入中文
app.use(ElementPlus, {
    locale: zhCn,
})
//注册pinia
app.use(pinia)

//挂载
app.mount('#app');
// createApp(App).mount('#app')
