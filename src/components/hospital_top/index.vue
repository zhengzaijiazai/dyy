<template>
    <div class="top">
        <div class="content">
            <div class="content-left" @click="goHome">
                <img src="../../assets/images/logo.png" alt="">
                <p>冬预约</p>
                <p>预约挂号统一平台</p>
            </div>
            <div class="content-right">
                <p>帮助中心</p>
                <p v-if="User.userInfo.token">
                    <el-dropdown>
                        <span class="el-dropdown-link">
                            {{User.userInfo.name}}
                        </span>
                        <template #dropdown>
                            <el-dropdown-menu>
                                <el-dropdown-item>实名认证</el-dropdown-item>
                                <el-dropdown-item>订单挂号</el-dropdown-item>
                                <el-dropdown-item>就诊人管理</el-dropdown-item>
                                <el-dropdown-item @click="outLogin">退出登录</el-dropdown-item>

                            </el-dropdown-menu>
                        </template>
                    </el-dropdown>
                </p>
                <p v-else>
                    <Login />
                </p>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';

//引入计算属性
import useUser from "@/store/modules/user";

//user小仓库
let User = useUser();

let $router = useRouter()
const goHome = () => {
    //编程式导航跳转首页
    $router.push({ path: '/Home' })
}

//退出登录 删token和切换显示
const outLogin = () => {
    //删除token页面刷新
    //还需要删除仓库的数据 因为仓库的数据已经得到
    User.loginOut();
    //路由跳转
    $router.push({path:'/Home'});
}

//判断是否有data
</script>

<style scoped lang="scss">
.top {
    width: 100%;
    height: 70px;
    background-color: #fff;
    position: fixed;
    z-index: 999;
    top: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    border-bottom: 1px solid rgba(128, 128, 128, 0.1);

    .content {
        width: 1200px;
        height: 70px;
        display: flex;
        justify-content: space-between;
        background-color: #fff;

        .content-left {
            display: flex;
            justify-content: center;
            align-items: center;

            img {
                height: 50px;
            }

            p {
                margin-left: 10px;
                font-size: 1.7em;
                color: #4da4ff;
            }
        }

        .content-right {
            display: flex;
            justify-content: center;
            align-items: center;

            p {
                margin-right: 10px;
                cursor: pointer;
                font-size: 15px;
                color: grey;

                &:hover {
                    color: #4da4ff;
                    font-weight: 900;
                }
            }
        }
    }
}
</style>