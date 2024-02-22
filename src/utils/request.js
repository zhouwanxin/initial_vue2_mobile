import axios from 'axios'
import { Toast } from 'vant';
import { getToken } from '@/utils/auth'

const service = axios.create({
    baseURL: process.env.NODE_ENV === 'development' ? window.g.Api_DEV_Url : window.g.Api_PRO_Url,
    headers: {
        'Content-Type': 'application/json;charset=utf-8'
    },
    withCredentials: true, // send cookies when cross-domain requests
    timeout: 30000,
})

service.interceptors.request.use(
    (config) => {
        // 在发送请求之前做些什么
        config.headers['Authorization'] = getToken() ? getToken() : '';
        return config
    },
    (error) => {
        return Promise.reject(error)
    },
)

service.interceptors.response.use(
    (response) => {
        const res = response.data
        if (res.code && res.code !== 200) {
            Toast.fail(res.message || res.msg || '请求错误，请稍后重试')

            return Promise.reject(new Error(res.message || res.msg || 'Error'))
        } else {
            return res
        }
    },
    (error) => {
        Toast.fail(res.message || res.msg || '请求错误，请稍后重试')

        return Promise.reject(error)
    },
)
/**
 * 封装接口请求方法
 * @param url 域名后需补齐的接口地址
 * @param method 接口请求方式
 * @param data data下的其他数据体
 * @param responseType 接口响应数据类型
 */
const request = (url, method, data, responseType) => {
    let res = {
        url,
        method,
    }

    if (method == 'get') {
        res.params = data
    } else {
        res.data = data
    }

    if (responseType) {
        res.responseType = responseType
    }
    return service(res)
}

export default request
