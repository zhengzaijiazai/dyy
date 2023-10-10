import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

// 安装@types/node声明文件包,描述node.js核心模块和第三方库的类型信息
// pnpm i @types/node --save-dev
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve:{
    alias:{
      "@":path.resolve(__dirname,'src'),
    }
  },
    server: {
      proxy: {
        // 带选项写法：http://localhost:5173/api/bar -> http://jsonplaceholder.typicode.com/bar
        '/api': {
          target: 'http://syt.atguigu.cn',
          changeOrigin: true,
        },
      },
    },
})
