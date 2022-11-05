import axios, {AxiosRequestConfig} from 'axios'
import {getToken} from "@/utils/token";

export function request(config: AxiosRequestConfig) {
    // 1.创建axios的实例
    const instance = axios.create({
        baseURL: 'http://geek.itheima.net/v1_0',
        //设置请求超时时间
        timeout: 5000,
    })

    // 2.axios的拦截器，用不到的可以忽略这节
    // 2.1.请求拦截的作用
    instance.interceptors.request.use(config => {
        const token = getToken();
        if (token) {
            config.headers!.Authorization = `Bearer ${token}`;
        }
        return config;
    }, err => {
        console.log('请求拦截err: ' + err);
        return Promise.reject(err);
    })

    // 2.2.响应拦截
    instance.interceptors.response.use(res => {
        return res.data;
    }, err => {
        if (err.response.status === 401) {
            location.assign("/login");
        }
        console.log('请求拦截err: ' + err);
        return Promise.reject(err);
    })

    // 3.发送真正的网络请求
    return instance(config)
}

