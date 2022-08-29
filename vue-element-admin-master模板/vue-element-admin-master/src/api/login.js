// 这里又调用了utils/request，所以我们去utils/request，按住ctrl点击就可以
import request from '@/utils/request'

// 登录
export function loginByUsername(username, password) {
  const data = {
    username,
    password
  }
  return request({
    // url是接口的路径
    url: '/login/login',
    method: 'post',
    data
  })
}

// 登出
export function logout() {
  return request({
    url: '/login/logout',
    method: 'post'
  })
}

// 获取用户信息
export function getUserInfo(token) {
  return request({
    url: '/user/info',
    method: 'get',
    params: { token }
  })
}

