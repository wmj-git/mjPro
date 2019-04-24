<template>
  <div class="button_group">
    <el-row>
      <div style="width: 120px;text-align: center">
        <el-button type="primary" icon="el-icon-edit" @click="fn('/home/scene')">btn2</el-button>
        <el-button type="primary" icon="el-icon-edit" @click="fn('/test')">btn3</el-button>
        <el-button type="primary" icon="el-icon-edit" @click="fn('/home/btn')">btn4</el-button>
      </div>
    </el-row>
  </div>

</template>

<script>

  export default {
    name: "button_group",
    data() {
      return {}
    },
    props: ["data"],
    components: {},
    methods: {
      init() {
        console.log(this.data);
      },
      fn(path) {
        this.$router.push(path);
      }
    },
    created() {
      this.init();
    },
    mounted() {

    }
  }
</script>

<style lang="scss" scoped>
  @import "button_group";
</style>
