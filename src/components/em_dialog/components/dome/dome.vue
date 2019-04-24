<template>
  <div class="dome">
    <el-dialog
      :title="title"
      :visible.sync="show"
      width="30%"
      :before-close="fn">
      <span>这是一段信息</span>
      <span slot="footer" class="dialog-footer">
        <el-button @click="fn">取 消</el-button>
        <el-button type="primary" @click="fn">确 定</el-button>
        </span>
    </el-dialog>
  </div>


</template>

<script>
  export default {
    name: "dome",
    data() {
      return {
        id:"",
        title: "标题",
        show:false
      }
    },
    props:["data"],
    methods: {
      init() {
        this.id = this.data.id;
        this.title = this.data.title;
        this.show = this.data.show;
      },
      fn() {
        let _this=this;
        this.$store.commit("win/dialog_close", {id: _this.id});
      }
    },
    created(){
      this.init();
    },
    mounted(){

    }
  }
</script>

<style lang="scss" scoped>
  @import "dome";
</style>
