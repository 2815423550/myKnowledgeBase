import request from '@/utils/request'

// export function getList(params) {
//   return request({
//     url: '/table/list',
//     method: 'get',
//     params
//   })
// }

export default{
  // gethesuanList是自己定义的一个方法名，随便起
  gethesuanList(current,limit,searchObj){
    return request({
      url: `/admin/hosp/hesuanList/findPagehesuanList/${current}/${limit}`,
      // 注意上面所用的引号，是` `
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
