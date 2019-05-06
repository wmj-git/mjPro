<template>
  <div class="echart">

      <div  :id="id"></div>

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
        this.init();
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
         this.chart=this.$echarts.init(document.getElementById(this.id));
         console.log(this.option)
         this.chart.setOption(this.option,true);
       }
    }
  }
</script>

<style scoped lang="scss">
   .echart{
      background: rgba(0,0,0,0.2);
      width: 100%;
      height: 100%;
   }
   #circle,#line,#pie,#bar,#pie1,#line1,#line2,#line3{
     width:380px;
     height:343px;

   }
</style>
