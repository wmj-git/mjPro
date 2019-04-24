<template>
  <div class="login_container" id="login_container" ref="loginPage">
   <!--<video autoplay="autoplay" loop="900">
      您的浏览器不支持 video 标签。
      <source src="../../assets/image/login_bg1.mp4" type="video/mp4">
    </video>-->
    <el-col>
      <div class="login_title">
        <p>智慧龙华可视化管理平台</p>
      </div>
      <div class="login_content">
        <el-row>
          <el-form ref="form" :model="form" label-width="80px" class="login_form">
            <el-form-item label="用户：" class="login_label">
              <el-col :span="44">
                <el-input v-model="form.name" type="text" placeholder="请输入用户名" ref="input1" prefix-icon="el-icon-users"></el-input>
              </el-col>
            </el-form-item>
            <el-form-item label="密码：" class="login_label">
              <el-col :span="44">
                <el-input v-model="form.pwd" type="password" placeholder="请输入密码" ref="input2" prefix-icon="el-icon-pwd"></el-input>
              </el-col>
            </el-form-item>
            <el-form-item>
              <el-row class="forgetPwd"><a>忘记密码？</a></el-row>
              <el-row>
                <el-button class="reset_btn em-btn-bubbles" @click="reset">重置</el-button>
                <el-button class="login_btn em-btn-bubbles" @click="loginFn">登录</el-button>
              </el-row>
            </el-form-item>
          </el-form>
        </el-row>
      </div>
    </el-col>
  </div>
</template>
<script>
  export default{
    name: "Login",
    data(){
      return {
        form: {
          name: '',
          pwd: ''
        }
      }
    },
    methods: {
      reset(){
        this.$refs.input1.value = ""
        this.$refs.input2.value = ""
      },
      loginFn() {
        let _username=this.$refs.input1.value;//获取用户名
        let _password=this.$refs.input2.value;//获取密码

        this.$store.dispatch("user/LoginByUsername", {
          username: _username,
          password: _password
        }).then((response) => {
          console.log(response);
          if (response.statusCode === 200) {
            this.$router.push("/home");
          }
        });
      }
    }
  }
</script>
<style  lang="scss" scoped>
  @import "_login";
</style>
