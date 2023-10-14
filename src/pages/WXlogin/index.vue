<template>
    <div>

    </div>
</template>

<script setup lang="ts">
//这个页面是专门为了微信扫码登录 重定向的页面
//重定向的时候会接受到query参数  用户信息就在这个参数里面
//所以我们再这进行用户信息本地化
import { useRoute } from 'vue-router';
let $route = useRoute();

localStorage.setItem('user',JSON.stringify($route.query));

// 这里是将微信扫码登录结束后 跳转的网页给隐藏(好看一点) 如果不隐藏 就会造成重定向我们的主页在ifarme里面就很丑
let html:any = document.querySelector('html');
html.style.display = 'none'
</script>

<style scoped>

</style>