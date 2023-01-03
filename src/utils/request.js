import axios from "axios";
import { ElLoading,ElNotification } from "element-plus";
// import store from "../store/index"
var loading;
const instance = axios.create({
  baseURL: "/api",
  timeout: 1000,
});
// 添加请求拦截器
instance.interceptors.request.use(
  function (config) {
    // store.commit('setFlag',true)
    let token = localStorage.getItem('token')
    if(token) config.headers.token = token
    loading = ElLoading.service()
    // 在发送请求之前做些什么
    return config;
  },
  function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
  }
);

// 添加响应拦截器
instance.interceptors.response.use(
  function (response) {
    // store.commit('setFlag',false)
    if (response.status === 200) {
      loading.close();
      return response.data;
    }
    // 对响应数据做点什么
    return response;
  },
  function (error) {
    console.log(error);
    if(error.response.status===400){
      ElNotification.error({
        title: error.response.data.msg,
        type: 'error',
      })
    }
    loading.close();
    // 对响应错误做点什么
    return Promise.reject(error);
  }
);

const request = (options) => {
  options.method = options.method || "get";
  if (options.method.toLocaleLowerCase() === "get") {
    options.params = options.data || options.params;
    delete options.data;
  }
  return instance(options);
};

export default request;
