<template>
  <div class="list_table" style="width: 100%;height: 100%">
    <el-row style="height: 100%">
      <el-col :span="28" style="height: 100%" class="table-container">
        <div class="table digital_table" style="height: 100%">
          <el-row class="operation">
            <el-col :span="26">
              <div class="data_pick">    <!--时间选择器-->
                <el-date-picker
                  v-model="time1"
                  type="date"
                  placeholder="开始日期"
                  :picker-options="pickerOptions0" style="width: 120px">
                </el-date-picker>
                <span style="color: white">-</span>
                <el-date-picker
                  v-model="time2"
                  type="date"
                  placeholder="结束日期"
                  :picker-options="pickerOptions1" style="width: 120px">
                </el-date-picker>
              </div>
            </el-col>
            <el-col :span="22">
                <div class="monitor_point">
                       <span style="color: white">监测点</span>
                        <el-select v-model="value" placeholder="请选择" style="width: 100px;">
                          <el-option
                            v-for="item in options"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value">
                          </el-option>
                        </el-select>
                        <el-button class="em-btn-simple">查询</el-button>
                </div>
            </el-col>
          </el-row>
          <el-table
            height="calc(100% - 82px)"
            highlight-current-row
            @current-change="handleCurrentChange"
            ref="multipleTable"
            tooltip-effect="dark"
            :data="tableData.slice((currentPage-1)*pageSize,currentPage*pageSize)"
            @selection-change="handleSelectionChange">
            style="width: 100%"
            >
            <el-table-column
              type="index"
              fixed="left"
              align="center"
            >
            </el-table-column>
            <el-table-column
              align="center"
              type="selection"
              width="55">
            </el-table-column>
            <el-table-column v-for="(item,index) in label"
                             :key="index"
                             :prop="item.En"
                             :label="item.Ch"
                             :min-width="item.width"
                             align="center"
            >
            </el-table-column>
          </el-table>
          <div class="pages">
            <el-pagination
              @size-change="handleSizeChange"
              @current-change="handleCurrentChangepage"
              :current-page="currentPage"
              :page-sizes="[5, 10, 15, 20]"
              :page-size="5"
              :pager-count="5"
              layout="total, sizes, prev, pager, next, jumper"
              :total="tableData.length">
            </el-pagination>
          </div>

        </div>

      </el-col>

      <el-col :span="20" style="height: 100%;">
           <ehcarts :id="echart_id" :option="option" :data="data1" :series="series"></ehcarts>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  import FileSaver from "file-saver";
  import {list, table} from "@/api/list_table";
  import ehcarts from "@/components/echarts/echarts"
  import options from '@/echart_options/options'
  import {fetchChart} from "@/api/chart"
  import  {fetchPie} from "@/api/chart";
  import XLSX from "xlsx";

  export default {
    name: "echart_table",
    data() {
      return {
        id:"type_manage",
        label:[{Ch:"日期",En:"date",width:"180"},{Ch:"姓名",En:"name",width:"180"},{Ch:"地址",En:"address",width:"300"}],
        tableData: [
          {
            date: '2016-05-02',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1518 弄'
          }, {
            date: '2016-05-04',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1517 弄'
          }, {
            date: '2016-05-01',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1519 弄'
          }, {
            date: '2016-05-03',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1516 弄'
          }, {
            date: '2016-05-06',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1516 弄'
          }, {
            date: '2016-05-07',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1516 弄'
          }, {
            date: '2016-05-08',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1516 弄'
          }, {
            date: '2016-05-09',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1516 弄'
          }, {
            date: '2016-05-10',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1516 弄'
          }, {
            date: '2016-05-11',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1516 弄'
          }, {
            date: '2016-05-12',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1516 弄'
          }, {
            date: '2016-05-13',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1516 弄'
          }, {
            date: '2016-05-14',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1516 弄'
          }, {
            date: '2016-05-15',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1516 弄'
          }, {
            date: '2016-05-16',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1516 弄'
          }
        ],
        currentRow: null,
        multipleSelection: [],
        input: '',
        currentPage: 1,
        pageSize: 5,
        options: [{               //对应下拉选择框
          value: '选项1',
          label: '黄金糕'
        }, {
          value: '选项2',
          label: '双皮奶'
        }, {
          value: '选项3',
          label: '蚵仔煎'
        }, {
          value: '选项4',
          label: '龙须面'
        }, {
          value: '选项5',
          label: '北京烤鸭'
        }],
        value: '',
        option:"",
        echart_id:"pie1",
        data1:[],
        series:[],
        time1:'',               //对应时间选择器
        time2:'',
        pickerOptions0: {
          disabledDate: (time) => {
            if (this.time2 != "") {
              let currentTime = this.time2;
              let threeMonths = currentTime.setMonth(currentTime.getMonth()-1);
              currentTime.setMonth(currentTime.getMonth()+1);
              return time.getTime() > this.time2 || time.getTime() < threeMonths ;
            } else {
              return time.getTime() > Date.now();
            }

          }
        },
        pickerOptions1: {
          disabledDate:(time) => {
            if( this.time1 != ""){
              let currentTime = this.time1;
              let threeMonths = currentTime.setMonth(currentTime.getMonth()+1);
              currentTime.setMonth(currentTime.getMonth()-1)
              return time.getTime() < this.time1 || time.getTime() > threeMonths ;
            }else {
              return time.getTime() > Date.now();
            }

          }
        }
      }
    },
    components:{
      ehcarts
    },
    props:["data"],
    created() {
      // console.log(this.data.chart.type);
      this.option=options[this.data.chart.type];
      this.echart_id=this.data.chart.id;
      // fetchPie().then(res=>{
      //   console.log(res.data.pie);
      //   this.data1=res.data.pie
      //
      // })
      fetchChart({
        option:this.data.chart.type,
        chart_url:this.data.chart.chart_url
      }).then(res=>{
           if(this.data.chart.type=="pie"){
             this.data1=res.data[this.data.chart.type];
             // console.log(this.data1)
      }
           else{
               this.series=res.data[this.data.chart.type];
               // console.log(this.series)
           }

      })

    },
    methods: {
      handleSelectionChange(val) {
        console.log(val);
        this.multipleSelection = val;
        console.log(this.multipleSelection)
      },
      handleCurrentChange(val) {
        this.currentRow = val;
        console.log(this.currentRow)
      },
      handleCurrentChangepage(val) {

        console.log(`当前页: ${val}`);
        this.currentPage = val;
        console.log(this.currentPage)
      },
      handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
        this.pageSize = val;
      }
    }
  }
</script>

<style scoped lang="scss">
  @import "_echart_table";
</style>
