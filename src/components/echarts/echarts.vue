<template>
  <div class="echart">
      <div  :id="id" style="height: 100%;width: 100%;"></div>
  </div>
</template>
<script>
  export default {
    name: "Chart",
    data(){
       return{
            chart:""
       }
    },
    props: {
      id: {
        type: String
      },
      option: {
        type: Object
      },
      data:{
        type:Array
      },
      series:{
         type:Array
      }
    },
    mounted() {
       setTimeout(()=>{
         this.init();
       });
      this.bus.$on("echart",()=>{
        this.init();
      })
    },
    watch: {
      //观察option的变化
      option: {
        handler(newVal, oldVal) {
          if (this.chart) {
            if (newVal) {
              this.chart.setOption(newVal,true);
            } else {
              this.chart.setOption(oldVal,true);
            }
          } else {
            this.init();
          }
        },
        deep: true //对象内部属性的监听，关键。
      },
      data:{
        handler(newVal, oldVal) {
          if (this.chart) {
            if (newVal) {
              this.chart.setOption({
                series: [{
                  data:newVal
                }]
              });
            } else {
              this.chart.setOption({
                series: [{
                  data:oldVal
                }]
              });
            }
          } else {
            this.init();
          }
        },
        deep: true //对象内部属性的监听，关键。
      },
      series:{
        handler(newVal, oldVal) {
          if (this.chart) {
            if (newVal) {
              this.chart.setOption({
                series:newVal
              });
            } else {
              this.chart.setOption({
                series:oldVal
              });
            }
          } else {
            this.init();
          }
        },
        deep: true //对象内部属性的监听，关键。
      }
    },
    methods:{
       init(){
         let _width=$("#"+this.id).width();
         let _height=$("#"+this.id).height();
         this.chart=this.$echarts.init(document.getElementById(this.id));
         console.log(this.option);
        this.chart.resize({
           width:_width,
           height:_height
         });
         this.chart.setOption(this.option,true);
       }
    }
  }
</script>

<style scoped lang="scss">
@import "echarts";
</style>
