import {createRouter,createWebHistory} from 'vue-router'
//和3版本写法还是很不同的 引入createRouter 
//创建路由实例 管理多个路由

export default createRouter({
    //这是路由4的写法 反正对应vue3 用多少引入多少
    //createRouter是创建路由实例  实例里面的两个参数
    //路由模式  history  routes
    //createWebHistory 是一个方法 用来指定history的应该还有一个createWebHashHistory但是没用到
    history:createWebHistory(),
    routes:[
        {
            path:"/Home",
            component: ()=> import('@/pages/Home/index.vue')
        },
        {
            path:"/Hospital",
            component: ()=> import ('@/pages/Hospital/index.vue'),
            children:[
               {
                path:'reservation',
                component: () => import ('@/pages/Hospital/reservation/index.vue'),
               },
               {
                path:'close',
                component: () => import ('@/pages/Hospital/close/index.vue'),
               },{
                path:'detail',
                component: () => import ('@/pages/Hospital/detail/index.vue'),
               },{
                path:'query',
                component: () => import ('@/pages/Hospital/query/index.vue'),
               },{
                path:'notice',
                component: () => import ('@/pages/Hospital/notice/index.vue'),
               }

            ]
        },
        {
            path:"/",
            redirect:'Home',
        }
    ],
    scrollBehavior(){
        return {
            left:0,
            top:0
        }
    }
})