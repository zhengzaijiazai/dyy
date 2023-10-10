<template>
  <div class="contain">
    <HospitalTop></HospitalTop>
    <div class="content">
		<router-view></router-view>
    </div>
	<HospitalBottom/>
  </div>
</template>

<script setup lang="ts">
// import request from '@/utils/request'
import { onMounted } from 'vue'
onMounted(()=>{
	//发送请求测试
	// request.get('/hosp/hospital/1/10').then(res=>{
	// 	console.log('app组件',res);
	// })
})
</script>

<style scoped lang="scss">
.contain{
	display: flex;
	flex-direction: column;
	align-items: center;
  	.content{
		width: 1200px;
		min-height: 700px;
		margin-top: 70px;
  	}
}
</style>@/utils/request
@/util/request