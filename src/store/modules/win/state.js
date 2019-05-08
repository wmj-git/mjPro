export default {
  data: null,
  win: [
    {
      id: "menu",
      title: "系统管理",
      top: "20%",
      left: 20,
      width:100,
      height:600,
      show:false,
      resizable:false,
      maximizable:false,
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
      width:"45%",
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
        operation:[
          {
            type:"complex_em_input",
            select:[
              {
                name:"类型名",
                params:"accountNumber"
              },
              {
                name:"英文名",
                params:"userEname"
              }
            ]

          },
          {
            type:"em_button",
            icon:"el-icon-search",
            operate:"查询",
            control_id:"type_manage_table",
            fn:"search"
          },
          {
            type:"em_button",
            icon:"el-icon-plus",
            operate:"添加",
            control_id:"type_manage_table",
            fn:"add",
            url:"/user/userext/addPeopleInfo"
          },
          {
            type:"em_button",
            icon:"el-icon-edit",
            operate:"修改",
            control_id:"type_manage_table",
            fn:"modify",
          },
          {
            type:"em_button",
            icon:"el-icon-delete",
            operate:"删除",
            control_id:"type_manage_table",
            fn:"dele",
            url:""
          }
        ],
        table:{
          id:"type_manage_table",
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
      id:"role_manage",
      title: "角色管理",
      top:80,
      left:400,
      width:700,
      height:400,
      class:"em-table-window",
      show: false,
      component: "sole_table",
      component_data:{
        operation:[
          {
            type:"em_input",
            placeholder:"中文名",
            params:"roleCname"

          },
          {
            type:"em_button",
            icon:"el-icon-search",
            operate:"查询",
            control_id:"role_manage_table",
            fn:"search"
          },
          {
            type:"em_button",
            icon:"el-icon-plus",
            operate:"添加",
            control_id:"role_manage_table",
            fn:"add",
            url:"/user/userext/addPeopleInfo"
          },
          {
            type:"em_button",
            icon:"el-icon-edit",
            operate:"修改",
            control_id:"role_manage_table",
            fn:"modify",
          },
          {
            type:"em_button",
            icon:"el-icon-delete",
            operate:"删除",
            control_id:"role_manage_table",
            fn:"dele",
            url:""
          }

        ],
        table:{
          id:"role_manage_table",
          table_url:"/user/role/queryPage",
          label:[
            {
              name:"英文名",
              prop:"roleEname",
              width:"100"
            },
            {
              name:"中文名",
              prop:"roleCname",
              width:"100"
            },

            {
              name:"角色编码",
              prop:"roleCode",
              width:"80"
            },
            {
              name:"备注",
              prop:"remark",
              width:"80"
            },




          ]
        }
      }
    },
    {
      id: "system_record",
      title:  "系统日志",
      top:80,
      left:400,
      width:700,
      height:400,
      class:"em-table-window",
      show: false,
      component: "sole_table",
      component_data:{
        operation:[
          {
            type:"em_date",

          },
          {
             type:"em_input",
             placeholder:"用户名",
             params:"userCname"
          },
          {
            type:"em_button",
            icon:"el-icon-search",
            operate:"查询",
            fn:"search",
            url:"/logs/select",
            control_id:"system_record_table",
          }
        ],
        table:{
          id:"system_record_table",
          table_url:"/logs/select",
          label:[
            {
              name:"用户名",
              prop:"loginName",
              width:"100"
            },
            {
              name:"操作",
              prop:"methodName",
              width:"120"
            },
            {
              name:"操作内容",
              prop:"operateContent",
              width:"200"
            },
            {
              name:"请求IP",
              prop:"requestIp",
              width:"120"
            },
            {
              name:"请求地址",
              prop:"requestUrl"
            },
            {
              name:"生成时间",
              prop:"syslogTime",
              width:"140"
            },




          ]
        }
      }
    },
    {
      id:"account_manage",
      title: "账户管理",
      top:80,
      left:400,
      width:"55%",
      height:400,
      show: false,
      class:"em-table-window",
      component: "sole_table",
      component_data:{
        operation:[
          {
            type:"complex_em_input",
            select:[
              {
                name:"帐户",
                params:"accountNumber"
              },
              {
                name:"英文名",
                params:"userEname"
              },
              {
                name:"中文名",
                params:"userCname"
              },
            ]

          },
          {
            type:"em_button",
            icon:"el-icon-search",
            operate:"查询",
            control_id:"people_manage_table",
            fn:"search"
          },
          {
            type:"em_button",
            icon:"el-icon-plus",
            operate:"添加",
            control_id:"account_manage_table",
            fn:"add",
            url:"/user/userext/addPeopleInfo"
          },
          {
            type:"em_button",
            icon:"el-icon-edit",
            operate:"修改",
            control_id:"account_manage_table",
            fn:"modify",
          },
          {
            type:"em_button",
            icon:"el-icon-delete",
            operate:"删除",
            control_id:"account_manage_table",
            fn:"dele",
            url:"/user/userext/deletePeopleInfo"
          },
          {
            type:"em_button",
            icon:"el-icon-excel_out",
            operate:"导入excel",
            fn:"import",
            control_id:"account_manage_table",
          },
          {
            type:"em_button",
            icon:"el-icon-excel_out",
            operate:"导出excel",
            control_id:"account_manage_table",
            fn:"export"
          }
        ],
        table:{
          id:"account_manage_table",
          table_url:"/user/userext/queryUserExt",
          label:[{
            name:"账户",
            prop:"accountNumber",
            width:"100"
          },
            {
              name:"中文名",
              prop:"userCname",
              width:"100"
            },
            {
              name:"英文名",
              prop:"userEname",
              width:"100"
            },
            {
              name:"状态",
              prop:"userStateCvalue",
              width:"80"
            },
            {
              name:"性别",
              prop:"userSexCvalue",
              width:"80"
            },
            {
              name:"电话",
              prop:"phoneNumber",
              width:"140"
            },
            {
              name:"年龄",
              prop:"userAge",
              width:"80"
            },
            {
              name:"部门",
              prop:"deptFullName",
              width:"80"
            },
            {
              name:"人员类型",
              prop:"userTypeCvalue",
              width:"180"
            }



          ]
        }
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
      width:800,
      class:"em-table-window",
      component: "sole_table",
      component_data:{
        operation:[
          {
            type:"em_date",

          },
          {
            type:"em_input",
            placeholder:"用户名",
            params:"userCname"
          },
          {
            type:"em_button",
            icon:"el-icon-search",
            operate:"查询",
            fn:"search",
            url:"http://localhost:5000",
            control_id:"grid_scope_table",
          }
        ],
        table:{
          id:"grid_scope_table",
          table_url:"http://localhost:5000/db",
          label:[
            {
              name:"名称",
              prop:"grid_name",
              width:"100"
            },
            {
              name:"网格id",
              prop:"grid_id",
              width:"120"
            },
            {
              name:"网格位置",
              prop:"grid_position",
              width:"200"
            },
            {
              name:"备注",
              prop:"memo",
              width:"120"
            }




          ]
        }
      }
    },
    {
      id: "protect_company",
      title:  "维护单位",
      top:80,
      left:400,
      show: false,
      class:"em-table-window",
      component:"sole_table",
      component_data:{
        operation:[

          {
            type:"em_input",
            placeholder:"用户名",
            params:"userCname"
          },
          {
            type:"em_button",
            icon:"el-icon-search",
            operate:"查询",
            control_id:"type_manage_table",
            fn:"search"
          },
          {
            type:"em_button",
            icon:"el-icon-plus",
            operate:"添加",
            control_id:"type_manage_table",
            fn:"add",
            url:"/user/userext/addPeopleInfo"
          },
          {
            type:"em_button",
            icon:"el-icon-edit",
            operate:"修改",
            control_id:"type_manage_table",
            fn:"modify",
          },
          {
            type:"em_button",
            icon:"el-icon-delete",
            operate:"删除",
            control_id:"type_manage_table",
            fn:"dele",
            url:""
          }

        ],
        table:{
          id:"protect_company_table",
          table_url:"/gardens/ent/queryAllByPage",
          label:[
            {
              name:"名称",
              prop:"entName",
              width:"100"
            },
            {
              name:"单位地址",
              prop:"orgAddr",
              width:"120"
            },
            {
              name:"联系人",
              prop:"contactMan",
              width:"200"
            },
            {
              name:"联系电话",
              prop:"tel",
              width:"120"
            },
            {
              name:"所属行政区域",
              prop:"areaCode"
            },
            {
              name:"排序号",
              prop:"orderNo",
              width:"140"
            },
            {
              name:"创建日期",
              prop:"createDate",
              width:"180"
            },
            {
              name:"注释",
              prop:"memo",
              width:"140"
            },



          ]
        }
      }
    },
    {
      id:"tree_distribution",
      title: "特殊树木分布",
      top:80,
      left:400,
      show: false,
      class:"em-table-window",
      component: "",
      component_data:{
        name:""
      }
    },
    {
      id:"tree_statistic",
      title: "特殊树木统计分析",
      top:80,
      left:400,
      width:"50%",
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
      width:"50%",
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
      width:"50%",
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
      width:"50%",
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
      width:"50%",
      height:400,
      show: false,
      class:"em-table-window",
      component: "echart_table",
      component_data:{
        table:{

        },
        chart:{
          type:"bar",
          id:"bar1",
          chart_url:'http://localhost:4000/chartdata'
        }
      }
    },
    {
      id:"people_manage",
      title: "人员管理",
      top:80,
      left:400,
      width:"55%",
      height:400,
      show: false,
      class:"em-table-window",
      component: "sole_table",
      component_data:{
          operation:[
            {
              type:"complex_em_input",
              select:[
                {
                  name:"帐户",
                  params:"accountNumber"
                },
                {
                  name:"英文名",
                  params:"userEname"
                },
                {
                  name:"中文名",
                  params:"userCname"
                },
              ]

            },
          {
            type:"em_button",
            icon:"el-icon-search",
            operate:"查询",
            control_id:"people_manage_table",
            fn:"search"
          },
          {
            type:"em_button",
            icon:"el-icon-plus",
            operate:"添加",
            control_id:"people_manage_table",
            fn:"add",
            url:"/user/userext/addPeopleInfo"
          },
          {
            type:"em_button",
            icon:"el-icon-edit",
            operate:"修改",
            control_id:"people_manage_table",
            fn:"modify",
          },
          {
            type:"em_button",
            icon:"el-icon-delete",
            operate:"删除",
            control_id:"people_manage_table",
            fn:"dele",
            url:"/user/userext/deletePeopleInfo"
          },
            {
              type:"em_button",
              icon:"el-icon-excel_out",
              operate:"导入excel",
              fn:"import"
            },
          {
            type:"em_button",
            icon:"el-icon-excel_out",
            operate:"导出excel",
            fn:"export"
          }
        ],
          table:{
            id:"people_manage_table",
              table_url:"/gardens/person/queryAllByPage",
               label:[{
                 name:"姓名",
                 prop:"name",
                 width:"100"
               },
                 {
                   name:"性别",
                   prop:"sex",
                   width:"100"
                 },
                 {
                   name:"职务",
                   prop:"duty",
                   width:"100"
                 },
                 {
                   name:"人员类型",
                   prop:"personTypeName",
                   width:"80"
                 },
                 {
                   name:"电话",
                   prop:"telephone",
                   width:"140"
                 },
                 {
                   name:"从事专业",
                   prop:"professional",
                   width:"140"
                 },
                 {
                   name:"工作单位",
                   prop:"entId",
                   width:"100"
                 },
                 {
                   name:"备注",
                   prop:"memo",
                   width:"80"
                 },
                 {
                   name:"创建日期",
                   prop:"createDate",
                   width:"180"
                 },
                 {
                   name:"排序号",
                   prop:"orderNo",
                   width:"100"
                 }



                ]
          }
      }



    },
    {
      id:"protect_company_manage",
      title: "维护单位管理",
      top:80,
      left:400,
      height:400,
      show: false,
      class:"em-table-window",
      component: "sole_table",
      component_data:{
        operation:[
          {
            type:"em_input",
            placeholder:"简称",
            params:"shortName"

          },
          {
            type:"em_button",
            icon:"el-icon-search",
            operate:"查询",
            control_id:"protect_company_manage_table",
            fn:"search"
          },
          {
            type:"em_button",
            icon:"el-icon-plus",
            operate:"添加",
            control_id:"protect_company_manage_table",
            fn:"add",
            url:"/user/userext/addPeopleInfo"
          },
          {
            type:"em_button",
            icon:"el-icon-edit",
            operate:"修改",
            control_id:"protect_company_manage_table",
            fn:"modify",
          },
          {
            type:"em_button",
            icon:"el-icon-delete",
            operate:"删除",
            control_id:"protect_company_manage_table",
            fn:"dele",
            url:"/user/userext/deletePeopleInfo"
          },
          {
            type:"em_button",
            icon:"el-icon-excel_out",
            operate:"导入excel",
            control_id:"protect_company_manage_table",
            fn:"import"
          },
          {
            type:"em_button",
            icon:"el-icon-excel_out",
            operate:"导出excel",
            control_id:"protect_company_manage_table",
            fn:"export"
          }
        ],
        table:{
          id:"protect_company_manage_table",
          table_url:"/user/dept/queryAllUsableDeptInfo",
          label:[{
            name:"全称",
            prop:"fullName",
            width:"140"
          },
            {
              name:"简称",
              prop:"shortName",
              width:"100"
            },
            {
              name:"单位编码",
              prop:"deptCode",
              width:"80"
            },
            {
              name:"电话",
              prop:"phoneNumber",
              width:"140"
            },

            {
              name:"备注",
              prop:"remark",
              width:"100"
            }



          ]
        }

      }
    },
    {
      id:"tree_type_manage",
      title:"树种类型管理",
      top:80,
      left:400,
      height:400,
      show: false,
      class:"em-table-window",
      component: "sole_table",
      component_data:{
        operation:[
          {
            type:"em_input",
            placeholder:"简称",
            params:"shortName"

          },
          {
            type:"em_button",
            icon:"el-icon-search",
            operate:"查询",
            control_id:"tree_type_manage_table",
            fn:"search"
          },
          {
            type:"em_button",
            icon:"el-icon-plus",
            operate:"添加",
            control_id:"tree_type_manage_table",
            fn:"add",
            url:"/gardens/tree/add"
          },
          {
            type:"em_button",
            icon:"el-icon-edit",
            operate:"修改",
            control_id:"tree_type_manage_table",
            fn:"modify",
          },
          {
            type:"em_button",
            icon:"el-icon-delete",
            operate:"删除",
            control_id:"tree_type_manage_table",
            fn:"dele",
            url:"/user/userext/deletePeopleInfo"
          }
        ],
        table:{
          id:"tree_type_manage_table",
          table_url:"/gardens/treetype/queryAllByPage",
          label:[
            {
            name:"类型编号",
            prop:"treeTypeNo",
            width:"140"
          },
            {
              name:"树种类型名称",
              prop:"treeTypeName",
              width:"100"
            },
            {
              name:"是否特殊树种",
              prop:"isSpecial",
              width:"200"
            },
            {
              name:"注释",
              prop:"memo",
              width:"200"
            }

          ]
        }
      }
    },
    {
      id:"plant_type_manage",
      title:"植物类型管理",
      top:80,
      left:400,
      height:400,
      show: false,
      class:"em-table-window",
      component: "sole_table",
      component_data:{
        operation:[
          {
            type:"em_input",
            placeholder:"简称",
            params:"shortName"

          },
          {
            type:"em_button",
            icon:"el-icon-search",
            operate:"查询",
            control_id:"plant_type_manage_table",
            fn:"search"
          },
          {
            type:"em_button",
            icon:"el-icon-plus",
            operate:"添加",
            control_id:"plant_type_manage_table",
            fn:"add",
            url:"/user/userext/addPeopleInfo"
          },
          {
            type:"em_button",
            icon:"el-icon-edit",
            operate:"修改",
            control_id:"plant_type_manage_table",
            fn:"modify",
          },
          {
            type:"em_button",
            icon:"el-icon-delete",
            operate:"删除",
            control_id:"plant_type_manage_table",
            fn:"dele",
            url:"/user/userext/deletePeopleInfo"
          }
        ],
        table:{
          id:"plant_type_manage_table",
          table_url:"/gardens/planttype/queryAllByPage",
          label:[
            {
            name:"植物类型编码",
            prop:"plantTypeNo",
            width:"140"
          },
            {
              name:"植物类型",
              prop:"plantTypeName",
              width:"100"
            },
            {
              name:"注释",
              prop:"memo",
              width:"120"
            }



          ]
        }
      }
    },
    {
      id:"tree_material_manage",
      title:"特殊树木资料管理",
      top:80,
      left:400,
      height:400,
      show: false,
      class:"em-table-window",
      component: "sole_table",
      component_data:{
        operation:[
          {
            type:"em_input",
            placeholder:"名称",
            params:"fullName"
          },
          {
            type:"em_button",
            icon:"el-icon-search",
            operate:"查询",
            control_id:"tree_material_manage_table",
            fn:"search"
          },
          {
            type:"em_button",
            icon:"el-icon-plus",
            operate:"添加",
            control_id:"tree_material_manage_table",
            fn:"add",
            url:""
          },
          {
            type:"em_button",
            icon:"el-icon-edit",
            operate:"修改",
            control_id:"tree_material_manage_table",
            fn:"modify",
          },
          {
            type:"em_button",
            icon:"el-icon-delete",
            operate:"删除",
            control_id:"tree_material_manage_table",
            fn:"dele",
            url:""
          }
        ],
        table:{
          id:"tree_material_manage_table",
          table_url:"/gardens/tree/queryAllByPage",
          label:[
            {
              name:"植物编号",
              prop:"treeNo",
              width:"140"
            },
            {
              name:"植物名称",
              prop:"treeName",
              width:"100"
            },
            {
              name:"植物种类型",
              prop:"plantTypeName",
              width:"120"
            },
            {
              name:"树种类型",
              prop:"treeTypeName",
              width:"120"
            },
            {
              name:"创建人ID",
              prop:"creatorId",
              width:"120"
            },
            {
              name:"创建日期",
              prop:"createDate",
              width:"250"
            },
            {
              name:"更新时间",
              prop:"updateDate",
              width:"250"
            },
            {
              name:"等级",
              prop:"rankValue",
              width:"80"
            },
            {
              name:"高度",
              prop:"height",
              width:"80"
            },
            {
              name:"直径",
              prop:"diameter",
              width:"80"
            },
            {
              name:"所属网格",
              prop:"gridId",
              width:"120"
            },
            {
              name:"行政区划",
              prop:"districtName",
              width:"120"
            },
            {
              name:"种植位置",
              prop:"position",
              width:"220"
            },
            {
              name:"精度",
              prop:"longitude",
              width:"200"
            },
            {
              name:"纬度",
              prop:"latitude",
              width:"200"
            },
            {
              name:"责任人Id",
              prop:"personId",
              width:"140"
            },
            {
              name:"特征描述",
              prop:"memo",
              width:"100"
            }

          ]
        }
      }
    },
    {
      id:"grid_manage",
      title:"网格管理",
      top:80,
      left:400,
      width:700,
      show: false,
      class:"em-table-window",
      component: "sole_table",
      component_data:{
        operation:[
          {
            type:"complex_em_input",
            select:[
              {
                name:"网格名称",
                params:"accountNumber"
              }
            ]

          },
          {
            type:"em_button",
            icon:"el-icon-search",
            operate:"查询",
            control_id:"grid_manage_table",
            fn:"search"
          },
          {
            type:"em_button",
            icon:"el-icon-plus",
            operate:"添加",
            control_id:"grid_manage_table",
            fn:"add",
            url:""
          },
          {
            type:"em_button",
            icon:"el-icon-edit",
            operate:"修改",
            control_id:"grid_manage_table",
            fn:"modify",
          },
          {
            type:"em_button",
            icon:"el-icon-delete",
            operate:"删除",
            control_id:"grid_manage_table",
            fn:"dele",
            url:""
          },
          {
            type:"em_button",
            icon:"el-icon-excel_out",
            operate:"导入excel",
            fn:"import"
          },
          {
            type:"em_button",
            icon:"el-icon-excel_out",
            operate:"导出excel",
            fn:"export"
          }
        ],
        table:{
          id:"grid_manage_table",
          table_url:"/gardens/grid/queryAllByPage",
          label:[
            {
              name:"编号",
              prop:"gridNo",
              width:"100"
            },
            {
              name:"名称",
              prop:"gridName",
              width:"100"
            },
            {
              name:"面积",
              prop:"gridArea",
              width:"100"
            },
            {
              name:"创建人姓名",
              prop:"creatorName",
              width:"140"
            },
            {
              name:"创建人日期",
              prop:"createDate",
              width:"200"
            },
            {
              name:"责任单位",
              prop:"entId",
              width:"120"
            },
            {
              name:"责任人",
              prop:"personId",
              width:"100"
            },
            {
              name:"所属行政区域",
              prop:"areaCode",
              width:"200"
            },
          ]
        }
      }
    },
    {
      id:"oil_tempature_manage",
      title:"土壤温度监测点管理",
      top:80,
      left:400,
      width:700,
      height:400,
      show: false,
      class:"em-table-window",
      component: "sole_table",
      component_data:{
        operation:[
          {
            type:"complex_em_input",
            select:[
              {
                name:"监测点名称",
                params:"accountNumber"
              }
            ]

          },
          {
            type:"em_button",
            icon:"el-icon-search",
            operate:"查询",
            control_id:"oil_tempature_manage_table",
            fn:"search"
          },
          {
            type:"em_button",
            icon:"el-icon-plus",
            operate:"添加",
            control_id:"oil_tempature_manage_table",
            fn:"add",
            url:""
          },
          {
            type:"em_button",
            icon:"el-icon-edit",
            operate:"修改",
            control_id:"oil_tempature_manage_table",
            fn:"modify",
          },
          {
            type:"em_button",
            icon:"el-icon-delete",
            operate:"删除",
            control_id:"oil_tempature_manage_table",
            fn:"dele",
            url:""
          },
          {
            type:"em_button",
            icon:"el-icon-excel_out",
            operate:"导入excel",
            fn:"import"
          },
          {
            type:"em_button",
            icon:"el-icon-excel_out",
            operate:"导出excel",
            fn:"export"
          }
        ],
        table:{
          id:"oil_tempature_manage_table",
          table_url:"/gardens/temhumpoints/queryAllByPage",
          label:[
            {
              name:"编号",
              prop:"pointsNo",
              width:"100"
            },
            {
              name:"名称",
              prop:"poiName",
              width:"100"
            },
            {
              name:"安装位置",
              prop:"position",
              width:"140"
            },
            {
              name:"精度",
              prop:"longitude",
              width:"200"
            },
            {
              name:"纬度",
              prop:"latitude",
              width:"160"
            },
            {
              name:"责任单位",
              prop:"entId",
              width:"100"
            },
            {
              name:"责任人",
              prop:"gridId",
              width:"100"
            },
            {
              name:"上限报警阀值",
              prop:"upperLimit",
              width:"100"
            },
            {
              name:"下限报警阀值",
              prop:"lowerLimit",
              width:"180"
            },
            {
              name:"所在网格",
              prop:"gridId",
              width:"100"
            },
            {
              name:"备注",
              prop:"memo",
              width:"100"
            }
          ]
        }
      }
    },
    {
      id:"oil_humidity_manage",
      title:"土壤湿度监测点管理",
      top:80,
      left:400,
      width:700,
      height:400,
      show: false,
      class:"em-table-window",
      component: "sole_table",
      component_data:{
        operation:[
          {
            type:"complex_em_input",
            select:[
              {
                name:"监测点名称",
                params:"accountNumber"
              }
            ]

          },
          {
            type:"em_button",
            icon:"el-icon-search",
            operate:"查询",
            control_id:"oil_tempature_manage_table",
            fn:"search"
          },
          {
            type:"em_button",
            icon:"el-icon-plus",
            operate:"添加",
            control_id:"oil_tempature_manage_table",
            fn:"add",
            url:""
          },
          {
            type:"em_button",
            icon:"el-icon-edit",
            operate:"修改",
            control_id:"oil_tempature_manage_table",
            fn:"modify",
          },
          {
            type:"em_button",
            icon:"el-icon-delete",
            operate:"删除",
            control_id:"oil_tempature_manage_table",
            fn:"dele",
            url:""
          },
          {
            type:"em_button",
            icon:"el-icon-excel_out",
            operate:"导入excel",
            fn:"import"
          },
          {
            type:"em_button",
            icon:"el-icon-excel_out",
            operate:"导出excel",
            fn:"export"
          }
        ],
        table:{
          id:"oil_humidity_manage_table",
          table_url:"/gardens/temhumpoints/queryAllByPage",
          label:[
            {
              name:"编号",
              prop:"pointsNo",
              width:"100"
            },
            {
              name:"名称",
              prop:"poiName",
              width:"100"
            },
            {
              name:"安装位置",
              prop:"position",
              width:"140"
            },
            {
              name:"精度",
              prop:"longitude",
              width:"200"
            },
            {
              name:"纬度",
              prop:"latitude",
              width:"160"
            },
            {
              name:"责任单位",
              prop:"entId",
              width:"100"
            },
            {
              name:"责任人",
              prop:"gridId",
              width:"100"
            },
            {
              name:"上限报警阀值",
              prop:"upperLimit",
              width:"180"
            },
            {
              name:"下限报警阀值",
              prop:"lowerLimit",
              width:"180"
            },
            {
              name:"所在网格",
              prop:"gridId",
              width:"100"
            },
            {
              name:"备注",
              prop:"memo",
              width:"100"
            }
          ]
        }
      }
    },
    {
      id:"population_manage",
      title:"人流量监测点管理",
      top:80,
      left:400,
      width:700,
      height:400,
      show: false,
      class:"em-table-window",
      component: "sole_table",
      component_data:{
        operation:[
          {
            type:"complex_em_input",
            select:[
              {
                name:"监测点名称",
                params:"accountNumber"
              }
            ]

          },
          {
            type:"em_button",
            icon:"el-icon-search",
            operate:"查询",
            control_id:"population_manage_table",
            fn:"search"
          },
          {
            type:"em_button",
            icon:"el-icon-plus",
            operate:"添加",
            control_id:"population_manage_table",
            fn:"add",
            url:""
          },
          {
            type:"em_button",
            icon:"el-icon-delete",
            operate:"删除",
            control_id:"population_manage_table",
            fn:"dele",
            url:""
          }
        ],
        table:{
          id:"population_manage_table",
          table_url:"/gardens/humantraffic/queryAllByPage",
          label:[
            {
              name:"编号",
              prop:"pointsNo",
              width:"100"
            },
            {
              name:"名称",
              prop:"monitorName",
              width:"100"
            },
            {
              name:"安装位置",
              prop:"position",
              width:"140"
            },
            {
              name:"精度",
              prop:"longitude",
              width:"200"
            },
            {
              name:"纬度",
              prop:"latitude",
              width:"160"
            },
            {
              name:"责任单位",
              prop:"entId",
              width:"100"
            },
            {
              name:"责任人",
              prop:"gridId",
              width:"100"
            },
            {
              name:"橙色预警阀值",
              prop:"orangeWarning",
              width:"100"
            },
            {
              name:"红色预警阀值",
              prop:"redWarning",
              width:"180"
            },
            {
              name:"所在网格",
              prop:"gridId",
              width:"100"
            },
            {
              name:"备注",
              prop:"memo",
              width:"100"
            }
          ]
        }
      }
    },
    {
      id:"air_tempature_manage",
      title:"空气温度监测点管理",
      top:80,
      left:400,
      height:400,
      show: false,
      class:"em-table-window",
      component: "sole_table",
      component_data:{
        operation:[
          {
            type:"complex_em_input",
            select:[
              {
                name:"监测点名称",
                params:"accountNumber"
              }
            ]

          },
          {
            type:"em_button",
            icon:"el-icon-search",
            operate:"查询",
            control_id:"air_tempature_manage_table",
            fn:"search"
          },
          {
            type:"em_button",
            icon:"el-icon-plus",
            operate:"添加",
            control_id:"air_tempature_manage_table",
            fn:"add",
            url:""
          },
          {
            type:"em_button",
            icon:"el-icon-edit",
            operate:"修改",
            control_id:"air_tempature_manage_table",
            fn:"modify",
          },
          {
            type:"em_button",
            icon:"el-icon-delete",
            operate:"删除",
            control_id:"air_tempature_manage_table",
            fn:"dele",
            url:""
          },
          {
            type:"em_button",
            icon:"el-icon-excel_out",
            operate:"导入excel",
            fn:"import"
          },
          {
            type:"em_button",
            icon:"el-icon-excel_out",
            operate:"导出excel",
            fn:"export"
          }
        ],
        table:{
          id:"air_tempature_manage_table",
          table_url:"/gardens/temhumpoints/queryAllByPage",
          label:[
            {
              name:"编号",
              prop:"pointsNo",
              width:"100"
            },
            {
              name:"名称",
              prop:"poiName",
              width:"100"
            },
            {
              name:"安装位置",
              prop:"position",
              width:"140"
            },
            {
              name:"精度",
              prop:"longitude",
              width:"200"
            },
            {
              name:"纬度",
              prop:"latitude",
              width:"160"
            },
            {
              name:"责任单位",
              prop:"entId",
              width:"100"
            },
            {
              name:"责任人",
              prop:"gridId",
              width:"100"
            },
            {
              name:"上限报警阀值",
              prop:"upperLimit",
              width:"100"
            },
            {
              name:"下限报警阀值",
              prop:"lowerLimit",
              width:"180"
            },
            {
              name:"所在网格",
              prop:"gridId",
              width:"100"
            },
            {
              name:"备注",
              prop:"memo",
              width:"100"
            }
          ]
        }
      }
    },
    {
      id:"air_humidity_manage",
      title:"空气湿度监测点管理",
      top:80,
      left:400,
      width:700,
      height:400,
      show: false,
      class:"em-table-window",
      component: "sole_table",
      component_data:{
        operation:[
          {
            type:"complex_em_input",
            select:[
              {
                name:"监测点名称",
                params:"accountNumber"
              }
            ]

          },
          {
            type:"em_button",
            icon:"el-icon-search",
            operate:"查询",
            control_id:"air_tempature_manage_table",
            fn:"search"
          },
          {
            type:"em_button",
            icon:"el-icon-plus",
            operate:"添加",
            control_id:"air_tempature_manage_table",
            fn:"add",
            url:""
          },
          {
            type:"em_button",
            icon:"el-icon-edit",
            operate:"修改",
            control_id:"air_tempature_manage_table",
            fn:"modify",
          },
          {
            type:"em_button",
            icon:"el-icon-delete",
            operate:"删除",
            control_id:"air_tempature_manage_table",
            fn:"dele",
            url:""
          },
          {
            type:"em_button",
            icon:"el-icon-excel_out",
            operate:"导入excel",
            fn:"import"
          },
          {
            type:"em_button",
            icon:"el-icon-excel_out",
            operate:"导出excel",
            fn:"export"
          }
        ],
        table:{
          id:"air_humidity_manage",
          table_url:"/gardens/temhumpoints/queryAllByPage",
          label:[
            {
              name:"编号",
              prop:"pointsNo",
              width:"100"
            },
            {
              name:"名称",
              prop:"poiName",
              width:"100"
            },
            {
              name:"安装位置",
              prop:"position",
              width:"140"
            },
            {
              name:"精度",
              prop:"longitude",
              width:"200"
            },
            {
              name:"纬度",
              prop:"latitude",
              width:"160"
            },
            {
              name:"责任单位",
              prop:"entId",
              width:"100"
            },
            {
              name:"责任人",
              prop:"gridId",
              width:"100"
            },
            {
              name:"上限报警阀值",
              prop:"upperLimit",
              width:"100"
            },
            {
              name:"下限报警阀值",
              prop:"lowerLimit",
              width:"180"
            },
            {
              name:"所在网格",
              prop:"gridId",
              width:"100"
            },
            {
              name:"备注",
              prop:"memo",
              width:"100"
            }
          ]
        }
      }
    },
    {
      id:"fire_alert_manage",
      title:"火灾报警点管理",
      top:80,
      left:400,
      height:400,
      show: false,
      class:"em-table-window",
      component: "sole_table",
      component_data:{
        operation:[
          {
            type:"complex_em_input",
            select:[
              {
                name:"监测点名称",
                params:"accountNumber"
              }
            ]

          },
          {
            type:"em_button",
            icon:"el-icon-search",
            operate:"查询",
            control_id:"fire_alert_manage_table",
            fn:"search"
          },
          {
            type:"em_button",
            icon:"el-icon-plus",
            operate:"添加",
            control_id:"fire_alert_manage_table",
            fn:"add",
            url:""
          },
          {
            type:"em_button",
            icon:"el-icon-edit",
            operate:"修改",
            control_id:"fire_alert_manage_table",
            fn:"modify",
          },
          {
            type:"em_button",
            icon:"el-icon-delete",
            operate:"删除",
            control_id:"fire_alert_manage_table",
            fn:"dele",
            url:""
          },
          {
            type:"em_button",
            icon:"el-icon-excel_out",
            operate:"导入excel",
            fn:"import"
          },
          {
            type:"em_button",
            icon:"el-icon-excel_out",
            operate:"导出excel",
            fn:"export"
          }
        ],
        table:{
          id:"fire_alert_manage_table",
          table_url:"/gardens/firealarm/queryAllByPage",
          label:[
            {
              name:"编号",
              prop:"pointsNo",
              width:"100"
            },
            {
              name:"名称",
              prop:"fireAlarmName",
              width:"100"
            },
            {
              name:"安装位置",
              prop:"position",
              width:"140"
            },
            {
              name:"精度",
              prop:"longitude",
              width:"200"
            },
            {
              name:"纬度",
              prop:"latitude",
              width:"160"
            },
            {
              name:"责任单位",
              prop:"entId",
              width:"100"
            },
            {
              name:"责任人",
              prop:"gridId",
              width:"100"
            },
            {
              name:"所在网格",
              prop:"gridId",
              width:"100"
            },
            {
              name:"备注",
              prop:"memo",
              width:"100"
            }
          ]
        }
      }
    }
  ],
  // dialog: [
  //   {
  //     id: "people_manage_add_operation",
  //     title: "人员添加",
  //     show: false,
  //     type: "dome",
  //     data:[ {
  //       type:"em_input",
  //       placeholder:"账户",
  //       name:"账户",
  //       params:""
  //
  //     },
  //       {
  //         type:"em_input",
  //         placeholder:"中文名",
  //         name:"中文名",
  //         params:""
  //
  //       },
  //       {
  //         type:"em_input",
  //         placeholder:"英文名",
  //         name:"英文名",
  //         params:""
  //
  //       },
  //       {
  //         type:"em_select",
  //         name:"状态",
  //         options:[{
  //           value: '选项1',
  //           label: '在职'
  //         },
  //           {
  //             value: '选项2',
  //             label: '离职'
  //           }
  //         ]
  //
  //       },
  //       {
  //         type:"em_input",
  //         placeholder:"性别",
  //         name:"性别",
  //         params:""
  //
  //       },
  //       {
  //         type:"em_input",
  //         placeholder:"年龄",
  //         name:"年龄",
  //         params:""
  //
  //       },
  //       {
  //         type:"em_input",
  //         placeholder:"电话",
  //         name:"电话",
  //         params:""
  //
  //       },
  //       {
  //         type:"em_input",
  //         placeholder:"部门",
  //         name:"部门",
  //         params:""
  //
  //       },]
  //   },
  //   {
  //     id: "edit_operation",
  //     title: "人员修改",
  //     show: false,
  //     type: "dome",
  //     data:{
  //       name:""
  //     }
  //   },
  //   {
  //     id: "type_manage_add_operation",
  //     title: "添加",
  //     show: false,
  //     type: "dome",
  //     data:[ {
  //       type:"em_input",
  //       placeholder:"账户",
  //       name:"账户",
  //       params:""
  //
  //     },
  //       {
  //         type:"em_input",
  //         placeholder:"中文名",
  //         name:"中文名",
  //         params:""
  //
  //       },
  //       {
  //         type:"em_input",
  //         placeholder:"英文名",
  //         name:"英文名",
  //         params:""
  //
  //       },
  //     ]
  //
  //   },
  //
  // ]
}
