//配置路由的地方
import Vue from 'vue';
import VueRouter from 'vue-router'

//使用插件
Vue.use(VueRouter)
//引入路由组件
import Home from '@/views/Home/Home.vue'
import Search from '@/views/Search/Search.vue'
import Login from '@/views/Login/Login.vue'
import Register from '@/views/Register/Register.vue'

//先把VueRouter身上的push备份
let originPush=VueRouter.prototype.push
let originReplace=VueRouter.prototype.replace


//重写push|replace方法
//第一个参数：告诉原来的push方法，往哪里跳，传递哪些参数
//第二个参数，成功回调
//第三个参数，失败回调
VueRouter.prototype.push=function(location,resolve,reject){
  if(resolve&&reject){
    //call||apply区别；相同点，都可以调用函数一次，而且都可以篡改函数上下文
    //不同点：call传递参数用逗号隔开，apply传递数组
    originPush.call(this,location,resolve,reject)
  }else{
    originPush.call(this,location,()=>{},()=>{})
  }
}

VueRouter.prototype.replace=function(location,resolve,reject){
  if(resolve&&reject){
    originReplace.call(this,location,resolve,reject)
  }else{
    originReplace.call(this,location,()=>{},()=>{})
  }
}
//配置路由
export default new VueRouter({
  //配置路由
  routes:[
    {
      path:'/home',
      component:Home,
      meta:{
        footerShow:true
      }
    },
    {
      path:'/search/:keyword?',
      component:Search,
      meta:{
        footerShow:true
      },
      name:"search",
      props:($route)=>{
        return{
          keyword:$route.params.keyword,
          k:$route.query.k
        }
      }
    },
    {
      path:'/login',
      component:Login,
      meta:{
        footerShow:false
      }
    },
    {
      path:'/register',
      component:Register,
      meta:{
        footerShow:false
      }
    },
    //重定向，在项目跑起来的时候，访问/，立马让他定向到首页
    {
      path:'*',
      redirect:'/home'
    }

  ]
})