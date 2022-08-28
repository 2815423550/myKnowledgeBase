import request from '@/utils/request'

// export function getList(params) {
//   return request({
//     url: '/table/list',
//     method: 'get',
//     params
//   })
// }

export default{
    getHospSetList(){
      return request({
        url: `/admin/hosp/hospitalSet/findListNumber`,
        method: 'get',
      })
    }
}
