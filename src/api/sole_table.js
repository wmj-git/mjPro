import request from '@/utils/request'
export function sole_table(obj) {
  return request({
    url: obj.table_url,
    method: 'get',
    params: obj.params
  })
}
