<template>
  <div class="em_nav">
    <win :id="win.id" :data="win">
      <el-menu
        :default-active="activeIndex"
        class="el-menu-demo em-nav-menu"
        mode="horizontal"
        @select="handleSelect"
      >

        <template v-for="item in buttongroup">
          <el-menu-item :index="item.index">{{item.title}}</el-menu-item>
        </template>
      </el-menu>

    </win>
  </div>
</template>

<script>

  // import VueEvent from "@/utils/VueEvent"
  import win from "@/components/win/win"


  export default {
    data() {
      return {
        win: {
          id: "nav",
          title: "",
          top: "87.5%",
          left: "",
          show: true,
          resizable: false,
          class: "em-nav-window"
        },
        buttongroup: [
          {
            show:false,
            index: "detectdata",
            title: "监测数据",
            width: 160,
            list: [
              {
                "icon": "icon-real-time-monitoring",
                "id": "time_detective",
                "name": "实时监测",
                "show": false
              },
              {
                "icon": "icon-dispatching-command",
                "id": "oil_detetive",
                "name": "土壤监测",
                "show": false,
              },
              {
                "icon": "icon-patrol-management",
                "id": "population_detective",
                "name": "人流量监测",
                "show": false
              },
              {
                "icon": "icon-maintenance-management",
                "id": "air__detective",
                "name": "空气监测",
                "show": false
              },
              {"icon": "icon-data-analysis", "id": "fire_alert", "name": "火灾报警", "show": false}
            ]

          },
          {
            show:false,
            index: "greenprotect",
            title: "绿化养护",
            width: 155,
            list: [
              {
                "icon": "icon-real-time-monitoring",
                "id": "grid_scope",
                "name": "网格范围",
                "show": false
              },
              {
                "icon": "icon-dispatching-command",
                "id": "protect_company",
                "name": "维护单位",
                "show": false
              },
              {
                "icon": "icon-patrol-management",
                "id": "tree_distribution",
                "name": "特殊树木分布",
                "show": false
              }
            ]
          },
          {
            show:false,
            index: "querystatics",
            title: "查询统计",
            width: 200,
            list: [
              {
                "icon": "icon-real-time-monitoring",
                "id": "tree_statistic",
                "name": "特殊树木统计分析",
                "show": false
              },
              {
                "icon": "icon-dispatching-command",
                "id": "oil_temparature_analysis",
                "name": "土壤温湿度统计分析",
                "show": false
              },
              {
                "icon": "icon-patrol-management",
                "id": "population_analysis",
                "name": "人流量统计分析",
                "show": false
              },
              {
                "icon": "icon-maintenance-management",
                "id": "air_temparature_analysis",
                "name": "空气温湿度统计分析",
                "show": false
              },
              {
                "icon": "icon-data-analysis",
                "id": "fire_alert_anaysis",
                "name": "火险报警统计分析",
                "show": false
              }
            ]
          },
          {
            show:false,
            index: "database",
            title: "基础数据",
            width: 200,
            list: [
              {
                "icon": "icon-system-manager",
                "id": "people_manage",
                "name": "人员管理",
                "show": false
              },
              {
                "icon": "icon-real-time-monitoring",
                "id": "protect_company_manage",
                "name": "维护单位管理",
                "show": false
              },
              {
                "icon": "icon-dispatching-command",
                "id": "tree_type_manage",
                "name": "树种类型管理",
                "show": false
              },
              {
                "icon": "icon-patrol-management",
                "id": "plant_type_manage",
                "name": "植物类型管理",
                "show": false
              },
              {
                "icon": "icon-maintenance-management",
                "id": "tree_material_manage",
                "name": "特殊树木资料管理",
                "show": false
              },
              {
                "icon": "icon-data-analysis",
                "id": "grid_manage",
                "name": "网格管理",
                "show": false
              },
              {
                "icon": "icon-system-manager",
                "id": "oil_tempature_manage",
                "name": "土壤温度监测点管理",
                "show": false
              },
              {
                "icon": "icon-system-manager",
                "id": "oil_humidity_manage",
                "name": "土壤湿度监测点管理",
                "show": false
              },
              {
                "icon": "icon-system-manager",
                "id": "population_manage",
                "name": "人流量监测点管理",
                "show": false
              },
              {
                "icon": "icon-system-manager",
                "id": "air_tempature_manage",
                "name": "空气温度监测点管理",
                "show": false
              },
              {
                "icon": "icon-system-manager",
                "id": "air_humidity_manage",
                "name": "空气湿度监测点管理",
                "show": false
              },
              {
                "icon": "icon-system-manager",
                "id": "fire_alert_manage",
                "name": "火灾报警点管理",
                "show": false
              }
            ]
          },
          {
            show:false,
            index: "systemmanage",
            title: "系统管理",
            width: 130,
            list: [
              {
                "icon": "icon-real-time-monitoring",
                "id": "type_manage",
                "name": "类型管理",
                "show": false
              },
              {
                "icon": "icon-patrol-management",
                "id": "role_manage",
                "name": "角色管理",
                "show": false
              },
              {
                "icon": "icon-maintenance-management",
                "id": "system_record",
                "name": "系统日志",
                "show": false
              },
              {
                "icon": "icon-maintenance-management",
                "id": "account_manage",
                "name": "账户管理",
                "show": false
              }
            ]
          }
        ],
        control_id: "menu",
        activeIndex: ''
      }
    },
    components: {
      win
    },
    methods: {
      init() {

      },
      handleSelect(key, keyPath) {
        console.log(key);

        // console.log(keyPath);
        let _controlId=this.control_id;
        let _title = null;
        let _list = null;
        let _width = null;
        this.buttongroup.forEach(function (obj) {

          if (obj.index === key) {
            _title = obj.title;
            _list = obj.list;
            _width = obj.width;
          }
        });
        let _show = null;
        this.$store.state.win.win.forEach(function (el) {
          if (el.id === _controlId) {
            _show=el.show;
          }
        });
        // let _show = null;
        // this.buttongroup.forEach(function (obj) {
        //
        //   if (obj.index === key) {
        //     _title = obj.title;
        //     _list = obj.list;
        //     _width = obj.width;
        //     _show=obj.show;
        //   }
        // });
        if (_show){
          this.bus.$emit(this.control_id, {
            title: _title,
            list: _list,
            width: _width
          });

        } else {
          this.$store.commit('win/win_open', {
            win_obj: {
              id: _controlId,
              data:{
                title: _title,
                list: _list,
                width: _width
              }
            }
          });
        }
      }
    },
    created() {
      this.init();
    },
    mounted() {

    }

  };
</script>
<style lang="scss" scoped>
  @import "_nav.scss";
</style>
