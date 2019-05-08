<template>
  <div class="bottom">
    <win :id="win.id" :data="win">
      <div style="width: 100%;" class="em-bottom-container">
        <el-input v-model="input" placeholder="请输入内容" style="width: 150px"></el-input>
        <el-button class="data_button em-btn-border-animation  svg-style"><svg>
          <rect x="0" y="0" fill="none" width="100%" height="100%"></rect>
        </svg>密码修改</el-button>
        <el-button class="data_button em-btn-border-animation  svg-style"><svg>
          <rect x="0" y="0" fill="none" width="100%" height="100%"></rect>
        </svg>退&emsp;&emsp;出</el-button>
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
               id: "bottom",
               title: "",
               top: "94%",
               left: 20,
               show: true,
               resizable:false,
               width:"98%",
               class:"em-bottom-window"
             },
             input:''
           }
      },
      created() {
          var bodyheight=Number(document.body.clientHeight);
          var bodywidth=Number(document.body.clientWidth);
          console.log(bodyheight);
         /* this.win.top=bodyheight-53;*/

      },
      mounted(){

      }
    }
</script>

<style lang="scss" scoped>
  @import "_em_bottom.scss";
</style>

