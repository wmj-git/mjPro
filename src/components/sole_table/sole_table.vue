<template>
  <div class="sole_table table-container" style="width: 100%;height: 100%">

    <div class="table digital_table">
      <el-row class="operation">
        <el-dialog title="收货地址" :visible.sync="dialogFormVisible1" :modal-append-to-body="false">
          <el-form :model="form">
            <el-form-item label="活动名称" :label-width="formLabelWidth">
              <el-input v-model="form.name" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="活动区域" :label-width="formLabelWidth">
              <el-select v-model="form.region" placeholder="请选择活动区域">
                <el-option label="区域一" value="shanghai"></el-option>
                <el-option label="区域二" value="beijing"></el-option>
              </el-select>
            </el-form-item>
          </el-form>
          <div slot="footer" class="dialog-footer">
            <el-button @click="dialogFormVisible1 = false">取 消</el-button>
            <el-button type="primary" @click="dialogFormVisible1 = false">确 定</el-button>
          </div>
        </el-dialog>
        <el-dialog title="收货地址" :visible.sync="dialogFormVisible2" width="30%" :modal-append-to-body="false">
          <el-form :model="form">
            <el-form-item label="活动名称" :label-width="formLabelWidth">
              <el-input v-model="form.name" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="活动区域" :label-width="formLabelWidth">
              <el-select v-model="form.region" placeholder="请选择活动区域">
                <el-option label="区域一" value="shanghai"></el-option>
                <el-option label="区域二" value="beijing"></el-option>
              </el-select>
            </el-form-item>
          </el-form>
          <div slot="footer" class="dialog-footer">
            <el-button @click="dialogFormVisible2 = false">取 消</el-button>
            <el-button type="primary" @click="dialogFormVisible2 = false">确 定</el-button>
          </div>
        </el-dialog>
        <el-input v-model="input" placeholder="类型名称"></el-input>
        <el-button class="em-btn-gradient em-btn-uniform-gradient">查询</el-button>
        <el-button class="em-btn-gradient em-btn-uniform-gradient" @click="dialogFormVisible1 = true">添加</el-button>
        <el-button class="em-btn-gradient em-btn-uniform-gradient" @click="dialogFormVisible2 = true">修改</el-button>
        <el-button class="em-btn-gradient em-btn-uniform-gradient">删除</el-button>
        <el-button class="em-btn-gradient em-btn-uniform-gradient">导入excel</el-button>
        <el-button class="em-btn-gradient em-btn-uniform-gradient">导出excel</el-button>
        <el-button class="em-btn-gradient em-btn-uniform-gradient">打印</el-button>
      </el-row>
      <el-table
        height="calc(100% - 92px)"
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
          layout="total, sizes, prev, pager, next, jumper"
          :total="tableData.length">
        </el-pagination>
      </div>

    </div>

  </div>


</template>

<script>
  import {sole_table} from "@/api/sole_table";
  export default {
    name: "sole_table",
    data() {
      return {
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
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄'
        }, {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄'
        }, {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄'
        }, {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄'
        }, {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄'
        }, {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄'
        }, {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄'
        }, {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄'
        }, {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄'
        }, {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄'
        }, {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄'
        }
        ],
        currentRow: null,
        multipleSelection: [],
        input: '',
        currentPage: 1,
        pageSize:5,
        dialogFormVisible1: false,
        dialogFormVisible2: false,
        form: {
          name: '',
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: ''
        },
        formLabelWidth: '120px'
      }
    },
    props:["data"],
    created(){
       console.log(this.data.table.table_url);
       sole_table({
         table_url:this.data.table.table_url,
         params:{
           pageNum:this.currentPage,
           pageSize:this.pageSize
         }
       }).then(res=>{
           console.log(res)
       })

    },
    methods:{

      handleSelectionChange(val) {
        console.log(val)
        this.multipleSelection = val;
        console.log(this.multipleSelection)
      },
      handleCurrentChange(val) {
        this.currentRow = val;
        console.log(this.currentRow)
      },
      handleCurrentChangepage(val) {
        console.log(`当前页: ${val}`);
        this.currentPage=val;
        console.log(this.currentPage)
      },
      handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
        this.pageSize=val;
      },

    }
  }
</script>

<style scoped lang="scss">
@import "sole_table";
</style>
