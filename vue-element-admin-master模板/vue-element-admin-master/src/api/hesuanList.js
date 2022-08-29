import request from '@/utils/request'

// export function getList(params) {
//   return request({
//     url: '/table/list',
//     method: 'get',
//     params
//   })
// }

export default{
  gethesuanList(current,limit,searchObj){
    return request({
      url: `/admin/hosp/hesuanList/findPagehesuanList/${current}/${limit}`,
      method: 'post',
      data:searchObj
    })
  },

  //添加
  savehesuanList(hesuanList){
    return request({
      url: `/admin/hosp/hesuanList/addHesuanList`,
      method: 'post',
      data:hesuanList
    })
  }
}
