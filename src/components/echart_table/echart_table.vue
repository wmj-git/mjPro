<template>
  <div class="echart_table" style="width: 100%;height: 100%">
    <em_dialogs ref="dialog" :label="label_input"   @eventFromDialog="recieveObj"></em_dialogs>
    <el-row style="height: 100%">
          <el-col :span="28" style="height: 100%" class="table-container">
            <div class="table digital_table" style="height: 100%">
              <el-row class="operation">
                <template v-for="item in this.data.operation">
                  <component :is="item.type" :operation="item" :table_id="table_id" ref="child"></component>
                </template>
              </el-row>
              <el-table
                height="calc(100% - 70px)"
                highlight-current-row
                @current-change="handleCurrentChange"
                ref="multipleTable"
                tooltip-effect="dark"
                :data="tableData"
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
                                 :prop="item.prop"
                                 :label="item.name"
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
                  :page-sizes="[10, 20,30,40]"
                  :page-size="10"
                  layout="total, sizes, prev, pager, next, jumper"
                  :total="totalSize">
                </el-pagination>
              </div>

            </div>
          </el-col>
        <el-col :span="20" style="height: 100%;">
             <ehcarts :id="echart_id" :option="option" :data="data1" :series="series" :xAxis_data="xAxis_data"></ehcarts>
        </el-col>
    </el-row>

  </div>
</template>

<script>
  import {add, dele, modify, find, downCsvmodel,upLoad} from "@/api/table_operate"
  import {list, table} from "@/api/list_table";
  import ehcarts from "@/components/echarts/echarts"
  import options from '@/echart_options/options'
  import {fetchChart} from "@/api/chart"
  import  {fetchPie} from "@/api/chart";
  import em_button from "@/components/em_button/em_button"
  import em_input from "@/components/em_input/em_input"
  import em_dialogs from "@/components/em_dialogs/em_dialogs"
  import complex_em_input from "@/components/complex_em_input/complex_em_input"
  import em_date from "@/components/em_date/em_date"
  export default {
    name: "echart_table",
    data() {
      return {
        id:"",
        table_id:"",
        label:[],
        tableData: [],
        currentRow: null,
        multipleSelection: [],
        input: '',
        currentPage: 1,
        totalSize:null,
        value: '',
        option:{},
        echart_id:"pie1",
        data1:[],
        series:[],
        pageSize:10,
        label_input:[],
        xAxis_data:[]

      }
    },
    components:{
      ehcarts,
      em_button,
      em_input,
      em_dialogs,
      complex_em_input,
      em_date,
    },
    props:["data"],
    mounted() {
      let _this=this;
      this.bus.$on(this.data.table.id, obj => {
        this.control(obj);
        console.log(obj);
      });
      console.log(this.data);
      this.label=this.data.table.label;
      this.option=options[this.data.chart.type];
      this.echart_id=this.data.chart.id;
       this.init();
    },
    methods: {
      resize() {
        console.log('resize')
      },
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
        this.init();
      },
      handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
        this.pageSize = val;
        this.init();
      },
      formatDate(date,format){
         var paddNum = function(num){
          num += "";
          return num.replace(/^(\d)$/,"0$1");
        };
        //指定格式字符
        var cfg = {
          yyyy : date.getFullYear() ,//年 : 4位
          yy : date.getFullYear().toString().substring(2),//年 : 2位
          M  : date.getMonth() + 1 , //月 : 如果1位的时候不补0
          MM : paddNum(date.getMonth() + 1), //月 : 如果1位的时候补0
          d  : date.getDate() ,  //日 : 如果1位的时候不补0
          dd : paddNum(date.getDate()),//日 : 如果1位的时候补0
          hh : date.getHours(),  //时
          mm : date.getMinutes() ,//分
          ss : date.getSeconds() //秒
        };
          format || (format = "yyyy-MM-dd hh:mm:ss");
          return format.replace(/([a-z])(\1)*/ig,function(m){return cfg[m];});
  },
  init() {                               //表格加载数据

        let obj = {
          pageNum: this.currentPage,
          pageSize: this.pageSize
        };
        let obj1={};
        if (this.$refs.child[0].time1) {
          let time1 = this.$refs.child[0].time1;    //时间范围查询参数
          if (time1) {
            obj.startTime = time1.getTime();
            obj1.startTime = time1.getTime();
            console.log( obj.startTime)
          }
        }
        if (this.$refs.child[0].time2) {
          let time2 = this.$refs.child[0].time2;
          if (time2) {
            obj.endTime = time2.getTime();
            obj1.endTime = time2.getTime();
            console.log( obj.endTime)
          }
        }
        find({                      //页面渲染时拿表格数据
          url: this.data.table.table_url,
          params: obj
        }).then(res => {
          console.log(res);
          this.totalSize = res.data.pageData.total;
          if(res.data.list){
            this.tableData =res.data.list;
          }
          else{
            this.tableData =res.data.pageData.list;
          }

        });
    fetchChart({
      option:this.data.chart.type,
      chart_url:this.data.chart.chart_url,
      params:obj1
    }).then(res=>{
      console.log(res);
      if(this.data.chart.type=="pie"){
        // this.data1=res.data[this.data.chart.type];
        // console.log(this.data1)
      }
      else{
        let temObj = {};
        res.data.listData.forEach((val)=>{
          this.xAxis_data.push(val.createDate);
          if(!temObj[val.pointsId])
            temObj[val.pointsId] = [];
          if(val.temValue){
            temObj[val.pointsId].push(val.temValue)
          }
          if(val.humValue){
            temObj[val.pointsId].push(val.humValue)
          }
        });

        this.xAxis_data=Array.from(new Set(this.xAxis_data));
        this.xAxis_data.sort();

        for(let k in  res.data.grupData){
          for(let n in res.data.grupData[k]){
            let _arr=[];
            this.xAxis_data.forEach(function (_time,_i) {
              res.data.grupData[k][n].forEach(function (_val) {
                if(_val.createDate===_time){
                  _arr[_i]=_val.temValue||_val.humValue;
                }else if(!_arr[_i]){
                  _arr[_i]="-";
                }
              })
            });
            temObj[n]=_arr;
          }
        }


        console.log( this.xAxis_data);
        console.log(temObj);
        let attr;
        for(attr in temObj){
          this.series.push({
            name:attr,
            data: temObj[attr],
            type: 'line',
            itemStyle: {       //线的样式
              normal: {
                lineStyle: {
                  width:1
                }
              }
            },
          })
        }
      }

    });
    console.log(this.series);
      },
      recieveObj(val){              //把dialog表单里的数据拿到
        console.log(this.delever_obj.url);
        console.log(this.delever_obj.id);
        if(val.fn=="add"){
          add({
            url: this.delever_obj.url,
            params:val.form,
            id:this.delever_obj.table_id
          }).then(res=>{
            console.log(res);
            if(res.statusCode==200){
              this.$message({
                message: '恭喜你，添加成功',
                type: 'success'
              });
              this.init();
            }

          });
        }
        if(val.fn=="modify"){
          modify({
            url: this.delever_obj.url,
            params:val.form
          }).then(res=>{
            console.log(res);
            if(res.statusCode==200){
              this.$message({
                message: '恭喜你，修改成功',
                type: 'success'
              });
              this.init();
            }
          });
        }



      },
      control(obj) {
        this[obj.fn](obj);

      },
      add(obj) {
        this.$refs.dialog.showdialog(obj);  //调用子组件em_dialogs的方法显示弹出框;
        this.delever_obj=obj;
        console.log(this.delever_obj)
      },
      search() {
        this.init();
      }
    }
  }
</script>

<style scoped lang="scss">
  @import "_echart_table";
  .table{
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
  }
</style>
