<template>
  <div class="em_tool">
    <win :id="win.id" :data="win">
      <div class="nav">
      <input type="checkbox" class="nav__cb" id="menu-cb">
      <div class="nav__content">
        <ul class="nav__items">
          <li v-for="item in tool" class="nav__item">
            <span class="nav__item-text">{{item}}</span>
          </li>
        </ul>
      </div>
      <label class="nav__btn" for="menu-cb"></label>
      </div>
    </win>
  </div>
</template>

<script>
  import win from "@/components/win/win"
  export default {
    name: "em_bottom",
    components: {
      win
    },
    data(){
      return {
        win: {
          id: "em_tool",
          title: "",
          top: 0,
          show: true,
          width:450,
          resizable:false,
          class:"em-tool-window"
        },
        input:'',
        tool:["监控","透明","坐标","数据","面积","距离","高度","标签"]
      }
    },
    created() {
      var bodywidth=Number(document.body.clientWidth);
      var bodyheight=Number(document.body.clientHeight);
      console.log(bodywidth);
      this.win.left=bodywidth-450;
      this.win.top=bodyheight-130;
    }
  }
</script>

<style lang="scss" scoped>
  @import "_em_tools.scss";
</style>

