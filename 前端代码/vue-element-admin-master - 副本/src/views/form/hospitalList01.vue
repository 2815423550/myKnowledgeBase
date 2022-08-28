<template>
  <div class="app-container">
    <!-- banner列表 -->
    <el-form :inline="true" class="demo-form-inline">
      <el-form-item>
        <el-input v-model="searchObj.name" placeholder="名字" />
      </el-form-item>
      <el-form-item>
        <el-input v-model="searchObj.id" placeholder="预约号" />
      </el-form-item>
      <el-button type="primary" icon="el-icon-search" @click="getList()"
        >查询</el-button
      >
    </el-form>

    <el-table :data="list" stripe style="width: 100%">
      <el-table-column type="index" width="50" />
      <el-table-column prop="name" label="姓名" />
      <el-table-column prop="id" label="预约号" />
      <el-table-column prop="uid" label="排号" />
      <el-table-column prop="date" label="日期" />                                        
      <el-table-column prop="more" label="其他" />
      <!-- <el-table-column label="状态" width="80">
        <a slot-scope="scope">
          {{ scope.row.status === 1 ? "可用" : "不可用" }}
        </a>
      </el-table-column> -->

     <!--  <el-table-column label="网址" width="180" prop="address">
      <a :href="scope.row.address" >{{scope.row.address}} </a>
      </el-table-column> -->
      
      <!-- <el-table-column label="网址" width="180" prop="address">
        <a :href="scope.row.address" slot-scope="scope">
          {{ scope.row.address }}
        </a>
      </el-table-column> -->

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
import hesuanList from '@/api/hesuanList'
export default {
  data() {
    return {
      current: 1, //当前页
      limit: 5, //每页最多显示条数
      searchObj: {}, //条件封装对象
      list: [], //每页数据
      total: 0,
    }
  },
  created(){
    this.getList();
  },
  methods: {
    getList(page = 1) {
      this.current = page;
        hesuanList.gethesuanList(this.current, this.limit, this.searchObj)
        .then((res) => {
          this.list = res.data.data.records;
          this.total = res.data.data.total;
          // this.searchObj=res.data.searchObj;
          console.log(res);
        })
        .catch((error) => {
          console.log("出现异常");
        });
    },
  }
}
</script>

<style scoped>
.line{
  text-align: center;
}
</style>

