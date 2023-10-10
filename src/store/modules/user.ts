import { defineStore } from 'pinia';


const useUser = defineStore('user',{
    state: ()=>{
        return {
            dialogFormVisible:false
        }
    },
    actions:{

    },
    getters:{

    }
})

export default useUser