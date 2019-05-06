<template>
  <div class="sole_table table-container" style="width: 100%;height: 100%">
    <div class="table digital_table">
      <el-row class="operation">
        <template v-for="item in this.data.operation">
          <component :is="item.type" :operation="item" ref="child"></component>
        </template>
      </el-row>
      <el-table
        height="calc(100% - 92px)"
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
  </div>


</template>

<script>
  import {add, dele, modify, find} from "@/api/table_operate"
  import em_button from "@/components/em_button/em_button"
  import em_input from "@/components/em_input/em_input"
  // import em_select from "@/components/em_select/em_select"
  import complex_em_input from "@/components/complex_em_input/complex_em_input"
  import em_date from "@/components/em_date/em_date"
  import em_dialog from "@/components/em_dialog/em_dialog"

  export default {
    name: "sole_table",
    components: {
      em_button,
      em_input,
      complex_em_input,
      em_date
    },
    data() {
      return {
        label: [],
        tableData: [],
        currentRow: null,
        multipleSelection: [],
        ids: [],
        input: '',
        currentPage: 1,
        pageSize: 10,
        totalSize: null,
        table_list: [],
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
        formLabelWidth: '120px',
        dialogVisible: false
      }
    },
    props: ["data"],
    mounted() {
      this.label = this.data.table.label;
      this.init(); //初始化表格数据

      this.bus.$on(this.data.table.id, obj => {
        this.control(obj)
      });

    },
    methods: {

      handleSelectionChange(val) {    //多选框（选中删除）
        this.multipleSelection = val;
        console.log(this.multipleSelection);

      },
      handleCurrentChange(val) {     //单选行 （选中修改）
        this.currentRow = val;
        // console.log(this.currentRow)
      },
      handleCurrentChangepage(val) {        //当前页
        console.log(`当前页: ${val}`);
        this.currentPage = val;
        // console.log(this.currentPage);
        this.init();
      },
      handleSizeChange(val) {                 //每页几条
        console.log(`每页 ${val} 条`);
        this.pageSize = val;
        this.init();  //重新请求表格数据
      },
      init() {

        let obj = {
          pageNum: this.currentPage,
          pageSize: this.pageSize
        };
        if (this.$refs.child[0].time1) {
          let time1 = this.$refs.child[0].time1;    //时间范围查询参数
          if (time1) {
            obj.startTime = time1.getTime();

          }
        }
        if (this.$refs.child[0].time2) {
          let time2 = this.$refs.child[0].time2;
          if (time2) {
            obj.endTime = time2.getTime();
          }
        }
        if (this.$refs.child[1].input && this.$refs.child[1].params) {
          let input = this.$refs.child[1].input;        //input框是操作中第二个组件时
          let params = this.$refs.child[1].params;
          if (input && params) {
            obj[params] = input;
          }
        }
        if (this.$refs.child[0].complex_em_input_select && this.$refs.child[0].input) {   //选择参数进行查询
          let comlex_input = this.$refs.child[0].complex_em_input_select;
          let commo_input = this.$refs.child[0].input;
          obj[comlex_input] = commo_input;
        }
        if (this.$refs.child[0].input && this.$refs.child[0].params) {                              //input框是操作中第二个组件时
          let role_manage_input = this.$refs.child[0].input;
          let params = this.$refs.child[0].params;
          obj[params] = role_manage_input;
        }

        find({                      //页面渲染时拿表格数据
          url: this.data.table.table_url,
          params: obj
        }).then(res => {
          console.log(res);
          this.tableData = res.data.list;
          this.totalSize = res.data.total;
        })
      },
      control(obj) {
        this[obj.fn](obj);

      },
      add(obj) {
        // this.$store.commit("win/dialog_open", {
        //   obj: {
        //     id: "people_manage_add_operation"
        //   }
        // });
        console.log(this.label);
      },
      dele(obj) {
        this.multipleSelection.forEach(val => {
          console.log(val);
          this.ids.push(val.id);   //提取出需要传给后台的参数ids
        });
        if (this.ids.length != 0) {
          dele({
            url: obj.url,
            params: this.ids

          }).then(res => {
            console.log(res);
            this.ids = [];
            this.open3();
            this.init();


          })
        }
      },
      search() {
        this.init();
      },
      modify() {
        this.$store.commit("win/dialog_open", {
          obj: {
            id: "edit_operation"
          }
        });
        console.log("modify")
      },
      open3() {
        const h = this.$createElement;
        this.$notify({
          title: '成功',
          message: h('i', {style: 'color: teal'}, '删除成功啦'),
          type: 'success'
        });
      },
      handleClose(done) {
        this.$confirm('确认关闭？')
          .then(_ => {
            done();
          })
          .catch(_ => {});
      }
    }
  }
</script>

<style scoped lang="scss">
  @import "sole_table";
</style>
