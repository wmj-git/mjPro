<template>
    <div class="em_button">
         <el-button :icon="operation.icon" @click="onclick(operation.fn,operation.url)" class="em-btn-simple">{{operation.operate}}</el-button>
    </div>
</template>

<script>
    export default {
        props: {
          operation:{
            type:Object
          }
        },
      create(){

      },
      methods:{
           onclick(fn,url){
             this.bus.$emit(this.operation.control_id,{fn:fn,url:url});
             console.log(this.operation.control_id)
           }

      }
    };
</script>
<style lang="scss" scoped>
    @import "em_button";
</style>
