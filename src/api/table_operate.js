import request from '@/utils/request'
export function add(obj) {
  switch (obj.id) {
    case "soil_temperature_manage_table":
      obj.params.pointType = "S";
      obj.params.temperatureOrHumidity = "T";
      // obj.params.stat=0;
      break;
    case "soil_humidity_manage_table":
      obj.params.pointType = "S";
      obj.params.temperatureOrHumidity = "H";
      // obj.params.stat=0;
      break;
    case "air_temperature_manage_table":
      obj.params.pointType = "A";
      obj.params.temperatureOrHumidity = "T";
      // obj.params.stat=0;
      break;
    case "air_humidity_manage_table":
      obj.params.pointType = "A";
      obj.params.temperatureOrHumidity = "H";
    // obj.params.stat=0;

  }
  return request({
    url: obj.url,
    method: 'post',
    data: obj.params
  })
}

  export function dele(obj) {          //表格数据删
    return request({
      url: obj.url,
      method: 'delete',
      data: obj.params
    })
  }

  export function find(obj) {         //表格数据查
    return request({
      url: obj.url,
      method: 'get',
      params: obj.params
    })
  }

  export function modify(obj) {        //表格数据改
    return request({
      url: obj.url,
      method: 'post',
      data: obj.params
    })
  }

  export function selectUrl(obj) {        //增加和修改的弹出来select获取数据
    return request({
      url: obj.url,
      method: 'get',
    })
  }

export function downCsvmodel(obj) {         //表格数据查
  return request({
    url: obj.url,
    method: 'get',
  })
}
export function upLoad(obj) {         //表格数据查
  return request({
    url: obj.url,
    method: 'post',
  })
}
