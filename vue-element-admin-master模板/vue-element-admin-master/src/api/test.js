import request from '@/utils/request'

export default{
    gethesuanList(){
      return request({
        url: `/admin/hosp/hesuanList02/peopleNumberAnalyse`,
        method: 'get'
      })
    }
}