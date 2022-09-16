import request from '../utils/request'


// GET /admin/acl/index/info


// POST /admin/acl/index/login


// POST /admin/acl/index/logout

interface loginParamsModel {
  username: string,
  password: string,
}



export default {
  login(loginParams: loginParamsModel) {
    return request.post('/admin/acl/index/login', loginParams)
  },
  info() {
    return request.get('/admin/acl/index/info')
  },
  logout() {
    return request.post('/admin/acl/index/logout')
  }
}


