//引入pinia仓库
import { createPinia } from 'pinia'
//引入插件实现持久化数据
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'

//创建pinia实例
// const pinia = createPinia()
// pinia.use(piniaPluginPersistedstate)

export default createPinia()