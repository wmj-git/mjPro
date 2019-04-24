import request from '@/utils/request'
export function fetchCircle() {
  return request({
    url: '/rest/hydrant/queryHydrant',
    method: 'get',
    params: {
      key:"qweqwe"
    }
  })
}
