import axios from 'axios'
import { message } from "ant-design-vue";
import { useLoading } from '@/store/store';
const instance = axios.create({
  // axios 的一些配置，baseURL  timeout
  baseURL: '/api',
  timeout: 5000
})
const Loading = useLoading()
instance.interceptors.request.use(config => {
  Loading.changeSpinning(true)
  // 将token存到请求头
  // const userStore =useUserStore()
  // const token =userStore.userInfo.token
  // if (token) {
  //   config.headers.Authorization = `Bearer ${token}`
  // }
  // token ? config.headers.Authorization = `Bearer ${token}` : ''
  //token过期
  // if (e.response.status===401){
  //清除用户信息
  //跳转到登陆页面
  // }
  console.log('请求的携带的数据', config.data);
  return config
}, err => {
  return Promise.reject(err)
})

instance.interceptors.response.use(res => {
  Loading.changeSpinning(false)
  console.log(res);
  res.data.Tag == 1 ? message['success'](res.data.Message) : message['error'](res.data.Message)
  return res.data
}, resError => {
  Loading.changeSpinning(false)
  console.log(resError);
  // if (resError && resError.response) {
  //   switch (resError.response.status) {
  //     case 400:
  //       resError.message = "请求错误(400)";
  //       break;
  //     case 401:
  //       resError.message = "未授权，请重新登录(401)";
  //       break;
  //     case 403:
  //       resError.message = "拒绝访问(403)";
  //       break;
  //     case 404:
  //       resError.message = "请求出错(404)";
  //       break;
  //     case 408:
  //       resError.message = "请求超时(408)";
  //       break;
  //     case 500:
  //       resError.message = "服务器错误(500)";
  //       break;
  //     case 501:
  //       resError.message = "服务未实现(501)";
  //       break;
  //     case 503:
  //       resError.message = "服务不可用(503)";
  //       break;
  //     case 505:
  //       resError.message = "HTTP版本不受支持(505)";
  //       break;
  //     default:
  //       resError.message = `连接出错(${resError.response.status})!`;
  //   }
  // }
  return Promise.reject(resError)
})


export default instance