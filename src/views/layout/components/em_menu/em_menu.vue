<template>
  <div class="menu">
    <el-menu :default-active="activeIndex" class=""
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
    methods: {
      handleSelect(key, keyPath) {
        console.log(key);
        this.$store.commit('win/win_open', {
          win_obj: {
            id: key
          }
        });

      }
    },
    created() {

      // 非父子信息通信
      this.bus.$on(this.id, function (obj) {
        console.log(obj);
         $("#"+this.id).window("setTitle",obj.title);
         $("#"+this.id).window("resize",{
             width:obj.width
         });
        this.group = obj.list;
      }.bind(this));

    }
  };
</script>
<style lang="scss" scoped>
  @import "_menu.scss";
</style>




