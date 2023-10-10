vite 新一代构建工具  更快的创建项目  node版本16以上

直接进去vite官网   

pnpm全局安装   npm install -g  pnpm

pnpm  说的是比npm快1倍

pnpm创建项目  pnpm create vite

这个创建完项目后没有node_modules 需要pnpm i

启动项目pnpm run dev

设置@路径的时候在vite.config.ts里面去配置

*pnpm i @types/node --save-dev* 安装@types/node 这个是提示包 代码提示

设置运行项目就开启浏览器 --open 在package.json里面的调试dev设置

安装element plus 这是一个专门vue3的ui库  
里面有一个提示信息的组件
import { ElMessage } from 'element-plus';
具体可以去官网里面搜索

axios的封装  拦截器
