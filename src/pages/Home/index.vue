<template>
  <div>
    <!-- 轮播图 -->
    <Carousel></Carousel>

    <!-- 输入框 -->
    <Search />

    <!-- 下方主体类型 -->
    <el-row gutter="20">
      <!-- 左侧页面 -->
      <el-col :span="20">
        <!-- //等级组件 -->
        <!-- 触发自定义事件的时候不需要再这里写接收参数 直接在后面写就好了 -->
        <Level :levelArr="levelArr" :regionArr="regionArr" @getdata="getdata" />

        <!-- 医院卡片 -->
        <!-- 医院没有的时候显示一个空的  element plus 里面有这样的组件 -->
        <div class="hospital" v-if="HospitalArr.length > 0">
          <Card 
            v-for="(item, index) in HospitalArr" 
            :key="index" 
            :hospitalInfo=item
            @click="gotoDetail(item.hoscode)"
          ></Card>
        </div>
        <el-empty v-else description="没有适合的医院" />

        <!-- 分页器 -->
        <div class="example-pagination-block">
          <el-pagination v-model:current-page=pageNo v-model:page-size=pageSize :page-sizes="[4, 10, 20]" :background="true"
            layout="total,prev, pager, next, jumper,sizes" :total=total @current-change="currentChange"
            @size-change="sizeChange" />
        </div>
      </el-col>
      <!-- 右侧小框 -->
      <el-col :span="4">
        <Tip/>
      </el-col>
    </el-row>
  </div>
</template>

<script setup lang="ts">
//引入组件  vue3 直接引入就可以 不需要再注册了
// 轮播图
import Carousel from './carousel/index.vue'
//搜索框
import Search from './Search/index.vue'
//等级框
import Level from './level/index.vue'
//卡片框
import Card from './Card/index.vue'
//引入右侧侧边栏
import Tip from './tip/index.vue'
//引入ref和onMounted
import { ref, onMounted } from 'vue'
//引入请求方法
import { reqHospital, reqHospitalLevelAndRegion } from '@/api/home/index.ts'
//引入路由
import { useRouter } from 'vue-router'
//引入数据医院类型 
import type { Content, HospitalResponseData, HospitalLevelAndRegionResponseData, HospitalLevelAndRegionArr } from '@/api/home/type'
//创建路由实例
let $router = useRouter();
//当前页数
let pageNo = ref<number>(1);
//显示几条数据
let pageSize = ref<number>(10);
//多少条数据
let total = ref<number>(20);
//点击传回的数据 等级和地区数据改变
//等级码
let hosType = ref<string>('');
//地区码
let districtCode = ref<string>('');

//存储医院数据
let HospitalArr = ref<Content>([]);
//等级类型
let levelArr = ref<HospitalLevelAndRegionArr>([])
//地区类型
let regionArr = ref<HospitalLevelAndRegionArr>([])

onMounted(() => {
  getHospitalInfo()
  getHospitalRegion()
  getHospitalLevel()
})
//获取医院数据方法
const getHospitalInfo = async () => {
  let result: HospitalResponseData = await reqHospital(pageNo.value, pageSize.value, hosType.value, districtCode.value);
  // console.log(result.data);
  if (result.code == 200) {
    HospitalArr = result.data.content;
    total.value = result.data.totalElements;
  }
}



//获取首页等级和地区请求  getHospitalLevelAndRegion
//地区请求
const getHospitalRegion = async () => {
  const result: HospitalLevelAndRegionResponseData = await reqHospitalLevelAndRegion('Beijin');
  console.log(result);
  if (result.code == 200) {
    regionArr = result.data;
  }
}
//等级请求
const getHospitalLevel = async () => {
  const result: HospitalLevelAndRegionResponseData = await reqHospitalLevelAndRegion('Hostype');
  // console.log(result);
  if (result.code == 200) {
    levelArr = result.data;
  }
}
//点击跳转请求方法
const getdata = (level: string, region: string) => {
  console.log(level, region);

  hosType.value = level;
  districtCode.value = region;
  getHospitalInfo();
}



//分页器点击跳转发送请求函数
const currentChange = () => {
  getHospitalInfo();
}
//当分页器size变换的时候调用
const sizeChange = (e: number) => {
  pageNo.value = 1;
  pageSize.value = e;
  getHospitalInfo();
}


//点击卡片路由跳转
const gotoDetail = (hoscode:string)=>{
  // console.log(hoscode);
  
  $router.push({path:'/Hospital/reservation',query:{hoscode}})
}
</script>

<style scoped lang="scss">
//医院列表
.hospital {
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  justify-content: space-between;

  div {
    width: 49%;
  }
}

//分页器
.el-pagination {
  justify-content: center;
}
</style>