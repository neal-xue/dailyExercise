import axios from 'axios'
import qs from 'qs'
//import { mes,njoin} from '../config/config';
// axios 配置
axios.defaults.timeout = 5000;
axios.defaults.headers = {
    'Content-Type' : 'application/json;charset=UTF-8',
    'Access-Control-Allow-Origin':'*'
}
//axios.defaults.baseURL = 'http://10.99.2.205:4600';

//POST传参序列化
axios.interceptors.request.use((config) => {
    if(config.method  === 'post'){
        config.data = qs.stringify(config.data);
    }
    // config.headers={
    //     'Content-Type':'application/x-www-form-urlencoded'
    // }
    return config;
},(error) =>{
    // _.toast("错误的传参", 'fail');
    return Promise.reject(error);
});

//返回状态判断
axios.interceptors.response.use((res) =>{
    if(!res.data.status===2000){
        // _.toast(res.data.msg);
        return Promise.reject(res);
    }
    return res;
}, (error) => {
   // _.toast("网络异常", 'fail');
    return Promise.reject(error);
});

export function postFetch(url, params) {
    // var params = params || {};
    return new Promise((resolve, reject) => {
        axios.post(url, params)
            .then(response => {
                resolve(response.data);
            }, err => {
                reject(err);
            })
            .catch((error) => {
               reject(error)
            })
    })
}
export function getFetch(url, params) {
    // var params = params || {};
    return new Promise((resolve, reject) => {
        axios.get(url, {params:params})
            .then(response => {
                resolve(response.data);
            }, err => {
                reject(err);
            })
            .catch((error) => {
               reject(error)
            })
    })
}

