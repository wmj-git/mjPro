import request from '@/utils/request'


export function list(obj) {

  return request({
     url:obj.listUrl,
     method:'get',
     params: obj.params
  })
}

export function table(obj) {
  return request({
    url:obj.table_url,
    method: 'get',
    params:obj.params
  })
}

