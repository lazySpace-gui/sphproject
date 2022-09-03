import Vue from 'vue'
import App from './App.vue'

//三级联动组件---全局组件
import TypeNav from '@/views/Home/TypeNav'
//第一个参数，全局组件的名字，第二个参数，哪一个组件
Vue.component(TypeNav.name,TypeNav)
//引入路由
import router from '@/router'

//测试
import {reqCategoryList} from '@/api'
reqCategoryList()

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
