<template>
    <div class="em_select">
      <el-select v-model="value" placeholder="请选择">
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value">
        </el-option>
      </el-select>
    </div>
</template>

<script>
    export default {
        props: {
          operation:{
            type:Object
          },

        },
        created(){
           this.options=this.operation.options;
        },
        data(){
           return{
               options:"",
               value: ''
           }
        }
    };
</script>
