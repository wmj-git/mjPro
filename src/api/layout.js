import request from '@/utils/request'
export function fetchCircle() {
  return request({
    url: '/rest/hydrant/queryHydrant',
    method: 'get',
    params: {
      pageNum: 1,
      pageSize: 20
    }
  })
}

export function test() {
  return request({
    url: '/data',
    method: 'post',
    data:{
      sdf:"s",
      sdg:"i9"
    }
  })
}
