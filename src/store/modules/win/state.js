export default {
  data: null,
  win: [
    {
      id: "menu",
      title: "系统管理",
      top: "20%",
      left: 4,
      width:100,
      height:400,
      show:false,
      resizable:false,
      class:"em-menu-window",
      component: "em_menu",
      component_data:{
        name:""
      }
    },
    {
      id: "type_manage",
      title: "类型管理",
      top:"20%",
      left:"20%",
      width:700,
      height:400,
      show: false,
      class:"em-table-window",
      component: "list_table",
      component_data:{
        list:{
          list_url:"/rest/type/queryType",
          params:{relevanceId: 1},
          title:"分类",
          keyObj:{
            keyName:"parentId",
            keyValue:"0"
          },
        },
        table:{
          table_url:"/rest/type/queryTypeByPages",
          label:[
            {
              name:"id",
              prop:"id",
              width:"80"
            },
            {
              name:"类型名称",
              prop:"typeCname",
              width:"140"
            },
            {
              name:"类型编码",
              prop:"typeCode",
              width:"180"
            },
            {
              name:"英文名",
              prop:"typeEname",
              width:"180"
            }, {
              name:"备注",
              prop:"remark",
              width:"180"
            }, {
              name:"父类型",
              prop:"parentId",
              width:"60"
            },
            ]
        }
      }
    },
    {
      id: "account_manage",
      title: "账户管理",
      top:80,
      left:400,
      width:510,
      height:400,
      class:"em-table-window",
      show: false,
      component: "sole_table",
      component_data:{

      }
    },
    {
      id:"role_manage",
      title: "角色管理",
      top:80,
      left:400,
      width:510,
      height:400,
      class:"em-table-window",
      show: false,
      component: "sole_table",
      component_data:{
        name:""
      }
    },
    {
      id: "system_record",
      title:  "系统日志",
      top:80,
      left:400,
      width:510,
      height:400,
      class:"em-table-window",
      show: false,
      component: "sole_table",
      component_data:{
        name:""
      }
    },
    {
      id: "time_detective",
      title:  "实时监测",
      top:80,
      left:400,
      show: false,
      class:"em-table-window",
      component: "test",
      component_data:{
        name:""
      }
    },
    {
      id: "oil_detetive",
      title:  "土壤监测",
      top:80,
      left:400,
      show: false,
      class:"em-table-window",
      component: "test",
      component_data:{
        name:""
      }
    },
    {
      id: "population_detective",
      title:  "人流量监测",
      top:80,
      left:400,
      class:"em-table-window",
      show: false,
      component: "test",
      component_data:{
        name:""
      }
    },
    {
      id: "air__detective",
      title: "空气监测",
      top:80,
      left:400,
      show: false,
      class:"em-table-window",
      component: "test",
      component_data:{
        name:""
      }
    },
    {
      id: "fire_alert",
      title:  "火灾报警",
      top:80,
      left:400,
      show: false,
      class:"em-table-window",
      component: "test",
      component_data:{
        name:""
      }
    },
    {
      id: "grid_scope",
      title:   "网格范围",
      top:80,
      left:400,
      show: false,
      class:"em-table-window",
      component: "test",
      component_data:{
        name:""
      }
    },
    {
      id: "protect_company",
      title:  "维护单位",
      top:80,
      left:400,
      show: false,
      class:"em-table-window",
      component: "test",
      component_data:{
        name:""
      }
    },
    {
      id:"tree_distribution",
      title: "特殊树木分布",
      top:80,
      left:400,
      show: false,
      class:"em-table-window",
      component: "echart_table",
      component_data:{
        name:""
      }
    },
    {
      id:"tree_statistic",
      title: "特殊树木统计分析",
      top:80,
      left:400,
      width:880,
      height:400,
      show: false,
      class:"em-table-window",
      component: "echart_table",
      component_data:{
          table:{

          },
          chart:{
            type:"pie",
            id:"pie1",
            chart_url:'http://localhost:3000/chartdata'
          }
      }
    },
    {
      id: "oil_temparature_analysis",
      title:  "土壤温湿度统计分析",
      top:80,
      left:400,
      width:880,
      height:400,
      show: false,
      class:"em-table-window",
      component: "echart_table",
      component_data:{
        table:{

        },
        chart:{
          type:"line",
          id:"line1",
          chart_url:'http://localhost:4000/chartdata'
        }
      }
    },
    {
      id: "population_analysis",
      title: "人流量统计分析",
      top:80,
      left:400,
      width:880,
      height:400,
      show: false,
      class:"em-table-window",
      component: "echart_table",
      component_data:{
        table:{

        },
        chart:{
          type:"line",
          id:"line2",
          chart_url:'http://localhost:4000/chartdata'
        }
      }
    },
    {
      id:"air_temparature_analysis",
      title: "空气温湿度统计分析",
      top:80,
      left:400,
      height:400,
      width:880,
      show: false,
      class:"em-table-window",
      component: "echart_table",
      component_data:{
        table:{

        },
        chart:{
          type:"line",
          id:"line3",
          chart_url:'http://localhost:4000/chartdata'
        }
      }
    },
    {
      id:"fire_alert_anaysis",
      title: "火险报警统计分析",
      top:80,
      left:400,
      show: false,
      class:"em-table-window",
      component: "test",
      component_data:{
        name:""
      }
    },
    {
      id:"people_manage",
      title: "人员管理",
      top:80,
      left:400,
      show: false,
      class:"em-table-window",
      component: "sole_table",
      component_data:{
          table:{
              table_url:"/user/userext/queryUserExt",
               label:[{
                 name:"id",
                 prop:"id",
                 width:"80"
               },
                ]
          }
      }
    },
    {
      id:"protect_company_manage",
      title: "维护单位管理",
      top:80,
      left:400,
      show: false,
      class:"em-table-window",
      component: "sole_table",
      component_data:{
        name:""
      }
    },
    {
      id:"tree_type_manage",
      title:"树种类管理",
      top:80,
      left:400,
      show: false,
      class:"em-table-window",
      component: "sole_table",
      component_data:{
        name:""
      }
    },
    {
      id:"plant_type_manage",
      title:"植物类型管理",
      top:80,
      left:400,
      show: false,
      class:"em-table-window",
      component: "sole_table",
      component_data:{
        name:""
      }
    },
    {
      id:"tree_material_manage",
      title:"特殊树木资料管理",
      top:80,
      left:400,
      show: false,
      class:"em-table-window",
      component: "sole_table",
      component_data:{
        name:""
      }
    },{
      id:"grid_manage",
      title:"网格管理",
      top:80,
      left:400,
      show: false,
      class:"em-table-window",
      component: "sole_table",
      component_data:{
        name:""
      }
    },{
      id:"oil_tempature_manage",
      title:"土壤温度监测点管理",
      top:80,
      left:400,
      show: false,
      class:"em-table-window",
      component: "sole_table",
      component_data:{
        name:""
      }
    },{
      id:"population_manage",
      title:"人流量监测点管理",
      top:80,
      left:400,
      show: false,
      class:"em-table-window",
      component: "sole_table",
      component_data:{
        name:""
      }
    },{
      id:"air_tempature_manage",
      title:"空气温度监测点管理",
      top:80,
      left:400,
      show: false,
      class:"em-table-window",
      component: "sole_table",
      component_data:{
        name:""
      }
    },{
      id:"air_humidity_manage",
      title:"空气湿度监测点管理",
      top:80,
      left:400,
      show: false,
      class:"em-table-window",
      component: "sole_able",
      component_data:{
        name:""
      }
    },{
      id:"fire_alert_manage",
      title:"火灾报警点管理",
      top:80,
      left:400,
      show: false,
      class:"em-table-window",
      component: "sole_table",
      component_data:{
        name:""
      }
    }
  ],
  dialog: [
    {
      id: "m1",
      title: "qeqe",
      show: false,
      type: "dome",
      data:{
        name:""
      }
    },
    {
      id: "m2",
      title: "qeqe2",
      show: false,
      type: "dome",
      data:{
        name:""
      }
    }
  ]
}
