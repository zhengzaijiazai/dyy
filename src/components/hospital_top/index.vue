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
                <p><Login/></p>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';

let $router = useRouter()
const goHome = ()=>{
    //编程式导航跳转首页
    $router.push({path:'/Home'})
}
</script>

<style scoped lang="scss">
.top{
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
    .content{
        width: 1200px;
        height: 70px;
        display: flex;
        justify-content: space-between;
        background-color: #fff;

        .content-left{
            display: flex;
            justify-content: center;
            align-items: center;
            img{
                height: 50px;
            }
            p{
                margin-left: 10px;
                font-size: 1.7em;
                color: #4da4ff;
            }
        }
        .content-right{
            display: flex;
            justify-content: center;
            align-items: center;
            p{
                margin-right: 10px;
                cursor: pointer;
                font-size: 15px;
                color: grey;
                &:hover{
                    color: #4da4ff;
                    font-weight: 900;
                }
            }
        }
    }
}
</style>