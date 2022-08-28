import request from '@/utils/request'

// export function getList(params) {
//   return request({
//     url: '/table/list',
//     method: 'get',
//     params
//   })
// }

export default{
    getHospSetList(current,limit,searchObj){
      return request({
        url: `/admin/hosp/hospitalSet/findPageHospSet/${current}/${limit}`,
        method: 'post',
        data:searchObj
      })
    }
}
