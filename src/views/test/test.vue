<template>
  <div class="test">
    <div style="width: 200px;height:120px;background: #fff3f3;color:#ff0000">
      {{name}}
      {{$store.getters["user/token"]}}

    </div>
    <el-button type="text" @click="fn()">点击打开 Dialog</el-button>
    <el-button type="primary" @click="get()">同步数据</el-button>
    <el-button type="primary" @click="no_get()">异步数据</el-button>
    <el-button type="primary" @click="login">登录</el-button>
    <el-button type="primary" @click="data_fn">data</el-button>
    <!--<router-view name="ui"></router-view>-->

    <!--<e_charts></e_charts>-->
  </div>
</template>

<script>
  import {fetchCircle, test} from "@/api/layout"
  import {loginByUsername} from "@/api/login"

  import e_charts from "./components/e_charts/e_charts"

  export default {
    data() {
      return {
        dialogVisible: false,
        name: '测试组件'
      }
    },
    components:{
      e_charts
    },
    props: ['data'],
    methods: {
      init() {
        console.log((typeof this.data));
        if ((typeof this.data) != "undefined") {
          this.name = this.data.name;
        }
      },
      fn() {
        this.$store.commit("win/dialog_open", {
          obj: {
            id: "add_operation"
          }
        });
      },
      data_fn() {
        test().then((res) => {
          console.log(res);
        });
      },
      login() {
        // this.$store.commit("user/set_token", "sdf");
        this.$store.dispatch("user/LoginByUsername", {
          username: "admin",
          password: "123456"
        }).then((response) => {
          console.log(response);
          if (response.statusCode === 200) {
            // this.$router.push("/home");
          }
        });
      },
      no_get() {//异步
        let _dara = fetchCircle().then((response) => {
          console.log(response);
          this.name = name;
        });
        console.log(_dara);
        console.log("123123");
      },
      async get() {//同步
        let _dara = await fetchCircle().then((response) => {
          console.log(response);
          return response.data;
        });
        this.name = _dara.mgs;
        console.log(_dara);
        console.log("123123");
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
  @import "test";
</style>
