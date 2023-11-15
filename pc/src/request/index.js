import axios from 'axios'

const instance = axios.create({
  // axios 的一些配置，baseURL  timeout
  baseURL: 'http://pcapi-xiaotuxian-front-devtest.itheima.net',
  timeout: 5000
})

instance.interceptors.request.use(config => {
  // 将token存到请求头
  // const userStore =useUserStore()
  // const token =userStore.userInfo.token
  // if(token){
  //   config.headers.Authorization=`Bearer ${token}`
  // }
  //token过期
  // if (e.response.status===401){
    //清除用户信息
    //跳转到登陆页面
  // }
  return config
}, err => {
  return Promise.reject(err)
})

instance.interceptors.response.use(res=>res.data,e=>{
  //统一错误提示
  // e就是错误的返回
  return Promise.reject(e)
})


export default instance