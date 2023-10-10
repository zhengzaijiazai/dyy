/// <reference types="vite/client" />

// 解决main.ts找不到app.vue解决方法
declare module '*.vue' {
    import type { DefineComponent } from "vue";
    const vueComponent: DefineComponent<{},{},any>
    export default vueComponent
}