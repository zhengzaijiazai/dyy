import axios from 'axios'
import { ElMessage } from 'element-plus';

//axios的使用和vue2没有什么区别
//创建axios实例
const request = axios.create({
    baseURL:'/api',
    timeout:5000,
    headers:{}
})

//请求拦截器
request.interceptors.request.use(config =>{
    return config
},error => Promise.reject(error))
//响应拦截器
request.interceptors.response.use(response =>{
    return response.data
},error => {
    let status = error.response.status
    switch(status){
        case 404:
            //错误提示信息
            ElMessage({
                type:'error',
                message:'请求路径错误'
            })
            break;
        case 500|501|502|503|504|505:
            ElMessage({
                type:error,
                message:'服务器无响应'
            })
            break;
    }
    return Promise.reject(new Error(error.message))
});

//暴露
export default request