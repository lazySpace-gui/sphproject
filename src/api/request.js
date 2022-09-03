//对于axios进行二次封装
import axios from 'axios';

//1.利用axios对象的方法create，去创建一个axios实例
//2.request是axios的实例对象
const requests=axios.create({
  //配置对象
  //基础路径，发请求的时候
  baseURL:'/api',
  //代表请求超时事件5s
  timeout:5000
})

//请求拦截器：在发请求之前，请求拦截器可以检测扫，可以在请求发出去之前做一些事情
requests.interceptors.request.use((config)=>{
  //config是一个配置对象，对象里面有一个属性很重要，header请求头
  // console.log(config);
  return config
})

//响应拦截器：
requests.interceptors.response.use(
  (res)=>{
    // console.log(res);
    return res.data
  },
  (err)=>{
    return Promise.reject(new Error('faile'))
  }
)

//对外暴露
export default requests;