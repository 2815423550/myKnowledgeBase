<template>

  <div class="app-container">
    <!-- banner列表 -->
    <el-form :inline="true" class="demo-form-inline">

<el-form-item>
        <el-input v-model="searchObj.post" placeholder="医院名称" />
      </el-form-item>
      
  <!-- <el-select v-model="value" placeholder="请选择">
    <el-option
      v-for="item in options"
      :key="item.value"
      :label="item.label"
      :value="item.value"
      @change="sss">
    </el-option>
  </el-select> -->

      <el-form-item>
        <el-input v-model="searchObj.hosname" placeholder="医院名称" />
      </el-form-item>
      <el-form-item>
        <el-input v-model="searchObj.hoscode" placeholder="医院编号" />
      </el-form-item>
      <el-button type="primary" icon="el-icon-search" @click="getList()"
        >查询</el-button
      >
    </el-form>

    <el-table :data="list" stripe style="width: 100%">
      <el-table-column type="index" width="50" />
      <el-table-column prop="hosname" label="医院名称" />
      <el-table-column prop="hoscode" label="医院编号" />
      <!-- <el-table-column prop="apiUrl" label="api基础路径" width="200" /> -->
      <!-- <el-table-column prop="contactsName" label="联系人姓名" /> -->
      <el-table-column prop="workTime" label="上班时间" />
      <el-table-column prop="contactsPhone" label="联系电话" />
      <el-table-column prop="post" label="地址" />
      <!-- <el-table-column label="状态" width="80">
        <template slot-scope="scope">
          {{ scope.row.status === 1 ? "可用" : "不可用" }}
        </template>
      </el-table-column> -->
      
      <el-table-column label="网址" width="180" prop="address">
        <a :href="scope.row.address" slot-scope="scope">
          {{ scope.row.address }}
        </a>
      </el-table-column>

      <!-- <el-table-column prop="address" label="地址" />                         ????????  -->
    </el-table>

    <el-pagination
      :current-page="current"
      :page-size="limit"
      :total="total"
      style="padding: 30px 0; text-align: center"
      layout="total, prev, pager, next, jumper"
      @current-change="getList"
    />
  </div>
</template>
<script>
import hospset from "@/api/hospset";

export default {
  data() {
    return {
      current: 1, //当前页
      limit: 5, //每页最多显示条数
      searchObj: {}, //条件封装对象
      list: [], //每页数据
      total: 0,
       options: [{
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
        value: ''

      // value: [],
      //  options:[{
      //    value:"yy1",
      //     label: '广东省',
      //  },{
      //    value:"yy2",
      //     label: 'www',
      //  },]

      };
  },
  created() {
    this.getList();
  },
  methods: {
    getList(page = 1) {
      this.current = page;
      hospset
        .getHospSetList(this.current, this.limit, this.searchObj)
        .then((res) => {
          this.list = res.data.data.records;
          this.total = res.data.data.total;
          // this.list=res.data
          console.log(res);
          // console.log(this.value)
        })
        .catch((error) => {
          console.log("出现异常");
        });
    },

    handleChange(value) {
        // console.log(value[0]);
        // searchObj.post=value[0];
        axios.get("value.json").then(res=>{
          console.log(res)
        })
      },
  },
};
</script>

