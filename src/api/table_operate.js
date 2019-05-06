import request from '@/utils/request'
export function add(obj) {
  return request({
    url: obj.table_url,
    method: 'post',
    params: obj.params
})
}
export function dele(obj){
  return request({
    url: obj.url,
    method: 'post',
    data:obj.params
  })
  }
export function find(obj) {
  return request({
    url: obj.url,
    method: 'get',
    params: obj.params
  })
}

export function modify(obj){
  return request({
    url: obj.table_url,
    method: 'post',
    params: obj.params
  })
}
