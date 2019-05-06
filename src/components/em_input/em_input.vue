<template>
    <div class="em_input">
      <el-input v-model="input" :placeholder="operation.placeholder"></el-input>
    </div>
</template>

<script>
    export default {
        props: {
          operation:{
            type:Object
          }
        },
      created(){
          console.log(this.operation)
      },
      data(){
           return {
               input:"",
               params:this.operation.params
           }
      }
    };
</script>
<style lang="scss" scoped>
    .em_input{
       display: inline-block;
    }
</style>
