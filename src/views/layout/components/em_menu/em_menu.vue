<template>
  <div class="menu">
    <el-menu :default-active="activeIndex" class=""
             @open="handleOpen"
             @close="handleClose"
             @select="handleSelect"
             :collapse="isCollapse">
      <template v-for="item in group">
        <el-menu-item :index="item.id">
          <i :class="item.icon"></i>
          <span slot="title">{{item.name}}</span>
        </el-menu-item>
      </template>
    </el-menu>

  </div>
</template>

<script>
  import VueEvent from "@/utils/VueEvent"
  import win from "@/components/win/win"

  export default {
    name:"em_menu",
    data() {
      return {
        id:"menu",
        group: [],
        activeIndex: '',
        isCollapse: false
      }
    },
    props: ["data"],
    components: {
      win
    },
    methods: {
      init() {
        // this.group =;
      },
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      },
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
        this.$store.commit('win/win_open', {
          win_obj: {
            id: key
          }
        });

      }
    },
    created() {

      // 非父子信息通信
      VueEvent.$on(this.id, function (obj) {
        console.log(obj);
         $("#"+this.id).window("setTitle",obj.title);
         $("#"+this.id).window("resize",{
             width:obj.width
         });
        this.group = obj.list;
      }.bind(this));

    },
    mounted() {

    }
  };
</script>
<style lang="scss" scoped>
  @import "_menu.scss";
</style>




