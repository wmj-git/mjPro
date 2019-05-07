<template>
    <div class="em_slider">
          <win :id="win.id" :data="win">
              <div class="block">
                <el-slider v-model="value"></el-slider>
              </div>
          </win>
    </div>
</template>

<script>
  import win from "@/components/win/win"
    export default {
        props: {
        },
        components:{
            win
        },
        data(){
            return{
              win: {
                id: "em_slider",
                title: "",
                top: 100,
                left: 30,
                show: true,
                resizable:false,
                width:400,
                class:"em-slider-window"
              },
              value: 50,
            }
        },
        created(){
            var bodyheight=Number(document.body.clientHeight);
            this.win.top=bodyheight-150;
        }
    };
</script>
<style lang="scss" scoped>
  @import "em_slider";
</style>
