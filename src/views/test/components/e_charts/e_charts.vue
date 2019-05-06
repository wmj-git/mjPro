<template>
  <div class="e_charts">
    <el-button @click="c">按钮</el-button>
    <div id="bar" style="width: 30%;height: 400px;float: left;background: #fff3f3;"></div>
    <div id="line" style="width: 30%;height: 400px;float: left;background: #fff3f3;"></div>
  </div>
</template>

<script>

  export default {
    name: "e_charts",
    data() {
      return {
        c1: "",
        data: ""
      }
    },
    props: {},
    created() {

    },
    mounted() {
      this.init();
    },
    methods: {
      init() {
        let c1 = this.$echarts.init(document.getElementById('bar'));
        this.c1 = c1;
        let pie_option = {
          color: ['#3398DB'],
          tooltip: {
            trigger: 'axis',
            axisPointer: {            // 坐标轴指示器，坐标轴触发有效
              type: 'line'        // 默认为直线，可选为：'line' | 'shadow'
            }
          },
          grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
          },
          xAxis: [
            {
              type: 'category',
              data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
              axisTick: {
                alignWithLabel: true
              }
            }
          ],
          yAxis: [
            {
              type: 'value'
            },
            {
              type: 'value'
            }
          ],
          series: [
            {
              name: '直接访问',
              type: 'bar',
              barWidth: '60%',
              data: [10, 52, 200, 334, 390, 330, 220]
            }
          ]
        };
        c1.setOption(pie_option);

        let c2 = this.$echarts.init(document.getElementById('line'));
        let line_option = {
          title: {
            text: '折线图堆叠'
          },
          tooltip: {
            trigger: 'axis'
          },
          legend: {
            data: ['邮件营销', '联盟广告', '视频广告', '直接访问', '搜索引擎']
          },
          grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
          },
          toolbox: {
            feature: {
              saveAsImage: {}
            }
          },
          xAxis: {
            type: 'category',
            boundaryGap: false,
            data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
          },
          yAxis: {
            type: 'value'
          },
          series: [
            {
              name: '邮件营销',
              type: 'line',
              stack: '总量',
              data: [120, 132, 101, 134, 90, 230, 210]
            },
            {
              name: '联盟广告',
              type: 'line',
              stack: '总量',
              data: [220, 182, 191, 234, 290, 330, 310]
            },
            {
              name: '视频广告',
              type: 'line',
              stack: '总量',
              data: [150, 232, 201, 154, 190, 330, 410]
            },
            {
              name: '直接访问',
              type: 'line',
              stack: '总量',
              data: [320, 332, 301, 334, 390, 330, 320]
            },
            {
              name: '搜索引擎',
              type: 'line',
              stack: '总量',
              data: [820, 932, 901, 934, 1290, 1330, 1320]
            }
          ]
        };
        c2.setOption(line_option);
        console.log(c2);
      },
      c() {
        this.c1.getOption("color");

        this.c1.setOption({
          yAxis: [
            {
              type: 'time',
              name:"start"
            }
          ]
        });
      }
    }

  };
</script>
