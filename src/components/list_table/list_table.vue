<template>
  <div class="list_table" style="width: 100%;height: 100%">
    <el-row style="height: 100%">
      <el-col :span="10" style="height: 100%;" class="table-classification">
          <p>{{list.title}}</p>
          <ul>
            <li v-for="(item,index) in list.data" @click="get_tableData(item.id)"  :id="item.id">{{item.typeCname}}</li>
          </ul>
      </el-col>
      <el-col :span="38" style="height: 100%" class="table-container">
        <div class="table digital_table" style="height: 100%">
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
            <el-button class="em-btn-gradient em-btn-uniform-gradient" @click="exportExcel">导出excel</el-button>
            <el-button class="em-btn-gradient em-btn-uniform-gradient">打印</el-button>
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
              :page-sizes="[10, 20, 30, 40]"
              :page-size="5"
              :pager-count="5"
              layout="total, sizes, prev, pager, next, jumper"
              :total="tableData.length">
            </el-pagination>
          </div>

        </div>

      </el-col>
    </el-row>
  </div>
</template>

<script>
  import FileSaver from "file-saver";
  import {list, table} from "@/api/list_table";

  import XLSX from "xlsx";

  export default {
    name: "compone",
    data() {
      return {
        id:"type_manage",
        list: {
          id:"type_manage_list",
          title: "",
          data:[]
        },
        label: [],
        tableData: [

        ],
        currentRow: null,
        multipleSelection: [],
        input: '',
        currentPage: 1,
        pageSize: 10,
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
    created() {
         this.list.title=this.data.list.title;
         this.label=this.data.table.label;
         list({
           listUrl:this.data.list.list_url,
           params: this.data.list.params

         }).then(res=>{
             this.list.data=res.data.data.filter(val=>{
                 return val[this.data.list.keyObj.keyName]==this.data.list.keyObj.keyValue;
             });
             console.log(this.list.data);
             this.tableData=res.data.data.filter(val=>{
               return val[this.data.list.keyObj.keyName]!=this.data.list.keyObj.keyValue;

             });
             console.log(this.tableData);
         })

    },
    methods: {
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
        this.currentPage = val;
        console.log(this.currentPage)
      },
      handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
        this.pageSize = val;
      },
      exportExcel() {
        /* generate workbook object from table */
        var wb = XLSX.utils.table_to_book(document.querySelector('.el-table'))
        /* get binary string as output */
        var wbout = XLSX.write(wb, {bookType: 'xlsx', bookSST: true, type: 'array'})
        try {
          FileSaver.saveAs(new Blob([wbout], {type: 'application/octet-stream'}), 'sheetjs.xlsx')
        } catch (e) {
          if (typeof console !== 'undefined') console.log(e, wbout)
        }
        return wbout
      },
      get_tableData(id){
           console.log(id)
          table({
              table_url:this.data.table.table_url,
              params: {
                parentId:id,
                pageNum:this.currentPage,
                pageSize:this.pageSize
              }
          }).then(res=>{
               console.log(res.data.data.data);
               this.tableData=res.data.data.data;
               // console.log(this.tableData)
          })
      }
    }
  }
</script>

<style scoped lang="scss">
  @import "list_table";
</style>
