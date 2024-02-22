import request from '@/utils/request'

// 接口
export const login = (data) => {
    return request('/login', 'post', data)
}