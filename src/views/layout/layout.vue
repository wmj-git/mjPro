<template>
  <div class="em_layout">
    <!--顶部标题-->
    <em_logo_title></em_logo_title>
    <!--报警器-->
    <em_warn></em_warn>
    <!--风险等级数据监测-->
    <!--<em_venture></em_venture>-->
    <!--主菜单-->
    <em_nav></em_nav>
    <!--工具栏-->
    <em_tools></em_tools>
    <!--功能窗口-->
    <template v-for="win in wins" v-if="win.show">
      <win :id="win.id" :data="win">
        <component :is="win.component" :data="win.component_data"></component>
      </win>
    </template>
    <!--对话框-->
    <!--<template v-for="dialog in dialogGroup" v-if="dialog.show">-->
      <!--<em_dialog :data="dialog"></em_dialog>-->
    <!--</template>-->
    <!--<em_chart_window></em_chart_window>-->
    <!--场景-->
    <router-view name="scene"/>
    <!--底部-->
    <em_bottom></em_bottom>
  </div>
</template>

<script>

  import win from "@/components/win/win"
  import sole_table from "@/components/sole_table/sole_table"
  import list_table from "@/components/list_table/list_table"
  import echart_table from "@/components/echart_table/echart_table"
  import em_dialog from "@/components/em_dialog/em_dialog"
  import button_group from "@/components/button_group/button_group"
  import em_menu from "./components/em_menu/em_menu"
  import em_nav from "./components/em_nav/em_nav"
  import test from "@/views/test/test"
  import em_bottom from "./components/em_bottom/em_bottom"
  import em_logo_title from "./components/em_title/em_logotitle"
  import em_warn from "./components/em_warn/em_warn"
  import em_venture from "./components/em_venture/em_venture"
  import em_chart_window from "./components/em_chart_window/em_chart_window"
  import  em_tools from "./components/em_tools/em_tools"
  export default {
    data() {
      return {
        wins: [],
        dialogGroup: []
      }
    },
    components: {
      win,
      em_dialog,
      button_group,
      em_menu,
      em_nav,
      test,
      em_bottom,
      em_logo_title,
      em_warn,
      em_venture,
      sole_table,
      list_table,
      echart_table,
      em_chart_window,
      em_tools
    },
    methods: {
      init() {
        this.wins = this.$store.state.win.win;
        this.dialogGroup = this.$store.state.win.dialog;

      },
      fn() {

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
  @import "layout";
</style>
