<template>
  <div class="search">
    <el-autocomplete
      v-model="name"
      clearable
      class="inline-input w-50"
      placeholder="请输入医院名称"
      :fetch-suggestions="fecthData"
      :trigger-on-focus='false'
      @select="goDetail"
    />
    <el-button type="primary" :icon="Search"></el-button>
  </div>
</template>

<script lang="ts">
export default {
  name: "Search",
};
</script>
<script setup lang="ts">
//引入element plus图标库
//            css   less    scss
//深度选择器   >>>   /deep/  :deep(选择器)
import { Search } from "@element-plus/icons-vue";
import { ref } from "vue";
//引入路由
import { useRouter } from "vue-router";

//引入请求方法和数据类型
import { reqHospitalName } from '@/api/home'
import type { HospitalInfo } from '@/api/home/type'
//绑定搜索框数据
let name = ref<string>("");

//创建路由对象
let $router = useRouter();

//输入后的回调函数 封装了防抖和节流
const fecthData = async(name:string,cb:any)=>{
    const result:HospitalInfo = await reqHospitalName(name);
    //数据处理 因为element plus的fecthData回调函数里面cb里面传的值就是搜索框下面的提示文字的数据
    //但是需要数据里面的value才能显示在搜索框下面
    let showData = result.data.map((item)=>{
      return {
        value:item.hosname,
        hoscode:item.hoscode,
      }
    })
    // console.log(showData);
    
    cb(showData)
}

//输入框点击推荐后触发的事件
const goDetail = (item:any)=>{
  //选择回调函数
  console.log(item);
  //跳转到点击医院详情页
  console.log(item.hoscode);
  
  $router.push({path:`/Hospital/reservation`,query:{hoscode:item.hoscode}})
}
</script>

<style scoped lang="scss">
.search {
  width: 100%;
  height: 70px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 15px 0;

  :deep(.el-input__wrapper) {
    width: 600px;
    margin-right: 10px;
  }
}
</style>