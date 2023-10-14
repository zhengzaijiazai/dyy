<template>
    <div class="yuyue">
        <div class="top">
            <div class="left">{{ DetailStore.hospitaiDetail.hospital?.hosname }}</div>
            <div class="right">
                <span>
                    <svg t="1696756159158" class="icon" viewBox="0 0 1024 1024" version="1.1"
                        xmlns="http://www.w3.org/2000/svg" p-id="6884" width="16" height="16">
                        <path
                            d="M758.278079 944.873872 547.287691 944.873872c-100.787474 0-161.863505-50.627051-184.855148-69.687152-0.013303-0.011256-0.026606-0.022513-0.040932-0.033769-2.64934-2.193968-5.983271-3.39533-9.423627-3.39533l-43.014676 0c-11.04966 0-20.007683-8.958022-20.007683-20.007683L289.945625 434.489672c0-11.04966 8.958022-20.007683 20.007683-20.007683l37.262672 0c13.036921-0.756223 82.824357-35.603893 124.526131-106.597807 13.31526-22.648836 20.002566-49.751101 24.63405-99.899244 0.847298-18.690688-0.061398-35.022655-0.862647-49.445132-1.546216-27.789926-2.76702-49.741891 11.976776-64.801888 0.148379-0.150426 0.299829-0.300852 0.453325-0.447185 3.939729-3.777023 13.165858-12.600993 59.734476-11.248182 19.515473 0.574075 45.288462 3.124154 59.09491 8.55791 53.226249 21.004383 68.561515 59.446927 72.057129 87.998193 12.636808 102.726639-35.005258 199.411679-45.065382 218.423685-1.682315 4.01136-1.302669 8.124028 1.029446 11.761881 2.309602 3.589758 6.288217 5.664 10.897188 5.664l179.036629 0c75.977415 0 116.137067 38.145785 116.137067 110.313431 0 74.061786-46.677089 212.747405-74.566276 295.608601-7.375991 21.916149-13.201673 39.225373-15.471366 47.559179-0.107447 0.355087-0.210801 0.695848-0.318248 1.050935C854.680686 915.791509 811.66601 944.873872 758.278079 944.873872z"
                            fill="#272636" p-id="6885"></path>
                        <path
                            d="M209.915917 871.926466 84.531232 871.926466c-11.04966 0-20.007683-8.958022-20.007683-20.007683L64.523549 434.489672c0-11.048637 8.958022-20.007683 20.007683-20.007683l125.384685 0c11.04966 0 20.007683 8.958022 20.007683 20.007683l0 417.429111C229.9236 862.96742 220.966601 871.926466 209.915917 871.926466z"
                            fill="#272636" p-id="6886"></path>
                    </svg>
                </span>
                <span>
                    {{ DetailStore.hospitaiDetail.hospital?.param.hostypeString }}
                </span>
            </div>
        </div>
        <div class="content">
            <div class="cleft">
                <img :src="`data:image/jpeg;base64,${DetailStore.hospitaiDetail.hospital?.logoData}`" alt="">
            </div>
            <div class="cright">
                <div>挂号规则</div>
                <div class="time">
                    预约周期:10天 放号时间:{{
                        DetailStore.hospitaiDetail.bookingRule?.releaseTime
                    }}
                    停挂时间:{{ DetailStore.hospitaiDetail.bookingRule?.stopTime }}
                </div>
                <div class="address">
                    具体位置:{{ DetailStore.hospitaiDetail.hospital?.param.fullAddress }}
                </div>
                <div class="route">具体路线:{{ DetailStore.hospitaiDetail.hospital?.route }}</div>
                <div class="releasetime">
                    退号时间:就诊前一工作日{{
                        DetailStore.hospitaiDetail.bookingRule?.quitTime
                    }}前取消
                </div>
                <div class="rule">医院挂号规则</div>
                <div class="ruleInfo" v-for="(item, index) in DetailStore.hospitaiDetail.bookingRule?.rule" :key="index">
                    {{ item }}
                </div>
            </div>
        </div>
        <!-- 这是科室数据 -->
        <el-tabs :tab-position="tabPosition" class="demo-tabs">
            <el-tab-pane 
                :label="Department?.depname"
                v-for="(Department, index1) in DepartmentData.DepartmentData"
                lazy
            >
                <div class="title">{{ Department?.depname }}</div>
                <ul class="elcontent">
                    <li v-for="(item,index2) in Department.children" @click="changedialog(item)">
                        {{ item.depname }}
                    </li>
                </ul>
            </el-tab-pane>
            <!-- <el-tab-pane label="Config">Config</el-tab-pane>
            <el-tab-pane label="Role">Role</el-tab-pane>
            <el-tab-pane label="Task">Task</el-tab-pane> -->
        </el-tabs>
    </div>
</template>

<script lang="ts">
export default {
    name: 'reservation'
}
</script>
<script setup lang="ts">
//引入pinia仓库
//医院详情仓库
import useDetailStore from '@/store/modules/hospitalDeatail'
//医院科室仓库
import useDepartmentData from '@/store/modules/DepartmentData'
//引入user仓库
import useUser from '@/store/modules/user';
import { ref } from 'vue';

//引入路由 
import { useRouter,useRoute } from 'vue-router';

//详情数据
let DetailStore = useDetailStore()
//科室数据
let DepartmentData = useDepartmentData()
//用户小仓库
let User = useUser();
// console.log(DepartmentData);

//引入路由router
let $router = useRouter();
let $route = useRoute();


//elementplus 属性
const tabPosition = ref<string>('left')

//这是预约挂号页面  点击跳转
const changedialog = (item:any)=>{
    if(!localStorage.getItem('user')){
        User.dialogFormVisible = true;
    }
    //路由跳转加带参 发请求
    console.log($route);
    console.log(item);
    
    
    $router.push(
        {
            path:'/Hospital/reservation_step1',
            query:{hoscode:$route.query.hoscode,depcode:item.depcode}
        }
    );
}


//这里发请求不太好 因为这里发会照成重复  子路由跳转的时候也会发 这就没必要了
//引入科室数据请求方法
// import { reqHospitalDepartment } from "@/api/hospital/index";
//引入生命周期函数
// import { onMounted } from 'vue';
//引入数据类型
// import type { HospitalDepartmentData } from '@/api/hospital/type'
//引入路由
// import { useRoute, useRouter } from 'vue-router';
//pinia
// console.log(DetailStore);
// let $route = useRoute()
// console.log($route);

// onMounted(()=>{
//     getHospitalDepartment()
// })
//科室请求方法
// const getHospitalDepartment = async ()=>{
//     let result:HospitalDepartmentData = await reqHospitalDepartment($route.query.hoscode as string)
//     console.log(result);
// }

</script>

<style scoped lang="scss">
.yuyue {
    margin-top: 20px;
    margin-left: 20px;

    .top {
        display: flex;

        .left {
            font-size: 25px;
            margin-right: 10px;

        }

        .right {
            position: relative;
            top: 5px;

            svg {
                position: relative;
                top: 2px;
            }
        }
    }

    .content {
        display: flex;
        margin-top: 20px;
        margin-bottom: 40px;

        .cleft {
            img {
                width: 100px;
            }
        }

        .cright {
            margin-top: 4%;
            flex: 1;
            font-size: 14px;
            margin-left: 20px;

            .time,
            .address,
            .route,
            .releasetime,
            .ruleInfo {
                margin-top: 10px;
                color: #7f7f7f;
            }

            .rule {
                margin: 10px 0px;
            }
        }
    }

    .demo-tabs>.el-tabs__content {
        padding: 32px;
        color: #6b778c;
        font-size: 32px;
        font-weight: 600;
    }

    .el-tabs--right .el-tabs__content,
    .el-tabs--left .el-tabs__content {
        height: 100%;
        background-color: #6b778c;
    }
    .title{
        width: 100%;
        height: 30px;
        line-height: 30px;
        margin-bottom: 20px;
        text-indent: 2em;
        font-weight: 900;
        background-color: #f8f8f8;
    }
    .elcontent{
        display: flex;
        flex-wrap: wrap;
        li{
            width: 30%;
            height: 30px;
            margin: 0 10px 10px 10px;
            cursor: pointer;
        }
    }
}
</style>