// src/api/axios.ts
import axios, { AxiosInstance, AxiosResponse, InternalAxiosRequestConfig } from 'axios';

// 从 Vite 的环境变量中获取配置
const apiTimeout = Number(import.meta.env.VITE_API_TIMEOUT) || 10000; // 默认 10000 毫秒

// 创建 axios 实例
const instance: AxiosInstance = axios.create({
    baseURL: '', // 代理会自动处理请求
    timeout: apiTimeout, // 使用从环境变量中获取的 timeout 设置
});

// 请求拦截器
instance.interceptors.request.use(
    (config: InternalAxiosRequestConfig) => {  // 修改类型为 InternalAxiosRequestConfig
        const token = localStorage.getItem('token'); // 假设 token 存储在 localStorage 中
        if (token) {
            config.headers['Authorization'] = `Bearer ${token}`; // 设置认证 token
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

// 响应拦截器
instance.interceptors.response.use(
    (response: AxiosResponse) => {
        return response.data;  // 直接返回响应的数据
    },
    (error) => {
        const message = error.response ? error.response.data.message : 'Network Error';
        console.error(`API Error: ${message}`);
        return Promise.reject(error);
    }
);

// 封装请求方法
const api = {
    get<T>(url: string, params?: Record<string, any>): Promise<T> {
        return instance.get(url, { params }).then(response => response.data);
    },

    post<T>(url: string, data: Record<string, any>): Promise<T> {
        return instance.post(url, data).then(response => response.data);
    },

    put<T>(url: string, data: Record<string, any>): Promise<T> {
        return instance.put(url, data).then(response => response.data);
    },

    delete<T>(url: string): Promise<T> {
        return instance.delete(url).then(response => response.data);
    },

    handleError(error: any): void {
        console.error('Request failed:', error);
    }
};

export default api;
