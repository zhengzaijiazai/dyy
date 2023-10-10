<template>
    <div class='level'>
        <h1>医院</h1>
        <div class='content'>
            <div class="left">等级:</div>
            <ul>
                <li :class="{ active: activeLevelFlag == '' }" @click="changeLevel('')">全部</li>
                <li v-for="(item, index) in levelArr" :key="item.id" :class="{ active: activeLevelFlag === item.value }"
                    @click="changeLevel(item.value)">
                    {{ item.name }}
                </li>
            </ul>
        </div>
        <div class='content'>
            <div class="left">等级:</div>
            <ul>
                <li :class="{ active: activeRegionFlag == '' }" @click="changeRegion('')">全部</li>
                <li v-for="(item, index) in regionArr" :key="item.id" :class="{ active: activeRegionFlag === item.value }"
                    @click="changeRegion(item.value)">
                    {{ item.name }}
                </li>
            </ul>
        </div>
    </div>
</template>

<script lang="ts">
//这是为了在vuetool里面能快速区别是哪一个组件
export default {
    //在vuetool里面显示就是level
    name: 'Level'
}
</script>

<script setup lang="ts">
import { ref } from 'vue'
//接受的数据
defineProps(['levelArr', 'regionArr'])


//高亮显示]
//等级高亮
let activeLevelFlag = ref<string>('');
//地区高亮
let activeRegionFlag = ref<string>('');

//定义自定义事件 写法和vue2有区别
let $emit = defineEmits(['getdata'])


//点击请求方法
const changeLevel = (value: string) => {
    activeLevelFlag.value = value
    $emit('getdata', value, activeRegionFlag.value)
}
const changeRegion = (value: string) => {
    activeRegionFlag.value = value
    $emit('getdata', activeLevelFlag.value, value);
}

</script>

<style scoped lang="scss">
.level {
    color: #7f7f7f;

    h1 {
        margin-bottom: 20px;
    }

    .content {
        display: flex;
        justify-content: start;
        align-items: center;
        margin-bottom: 20px;

        .left {
            width: 5%;
            font-weight: 900;
            justify-content: start;
            align-self: start;
            padding-top: 0.75%;
        }

        ul {
            display: flex;
            margin-left: 20px;
            flex-wrap: wrap;

            li {
                margin: 8px;

                &.active {
                    color: #4da4ff;
                }

                &:hover {
                    color: #4da4ff;
                    cursor: pointer;
                }
            }
        }
    }
}
</style>