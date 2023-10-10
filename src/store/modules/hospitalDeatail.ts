import { defineStore } from 'pinia'
//引入请求方法
import { reqHospitaiDetail } from '@/api/hospital/index'
//引入类型
import type { HospitalDetailData,HospitalDetail } from '@/api/hospital/type'


//pinia两种写法 组合式写法和选择式写法

const useDetailStore = defineStore('detail',{
    state: ()=>{
        return {
            //医院详情信息
            hospitaiDetail:({} as HospitalDetail)
        }
    },
    actions:{
        //获取医院信息
        async getHospitalDetailData(hoscode:string){
            let result:HospitalDetailData = await reqHospitaiDetail(hoscode); 
            // console.log(result);
            if(result.code == 200){
                this.hospitaiDetail = result.data;
            }
        }
    },
    getters:{
        
    }
})
export default useDetailStore