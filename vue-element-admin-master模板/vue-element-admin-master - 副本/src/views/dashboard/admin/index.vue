<template>
  <div class="dashboard-editor-container">

    <!-- github图标 -->
    <!-- <github-corner style="position: absolute; top: 0px; border: 0; right: 0;"/> -->

<!-- 四个数据 -->
    <panel-group @handleSetLineChartData="handleSetLineChartData"/>

<!-- 图表 -->
    <el-row style="background:#fff;padding:16px 16px 0;margin-bottom:32px;">
      <line-chart :chart-data="lineChartData"/>
    </el-row>

    <el-row :gutter="32">
      <el-col :xs="24" :sm="24" :lg="8">
        <div class="chart-wrapper">
          <raddar-chart/>
        </div>
      </el-col>
      <el-col :xs="24" :sm="24" :lg="8">
        <div class="chart-wrapper">
          <pie-chart/>
        </div>
      </el-col>
      <el-col :xs="24" :sm="24" :lg="8">
        <div class="chart-wrapper">
          <bar-chart/>
        </div>
      </el-col>
    </el-row>

    <el-row :gutter="8">
      <el-col :xs="{span: 24}" :sm="{span: 24}" :md="{span: 24}" :lg="{span: 12}" :xl="{span: 12}" style="padding-right:8px;margin-bottom:30px;">
        <transaction-table/>
      </el-col>
      <el-col :xs="{span: 24}" :sm="{span: 12}" :md="{span: 12}" :lg="{span: 6}" :xl="{span: 6}" style="margin-bottom:30px;">
        <todo-list/>
      </el-col>
      <el-col :xs="{span: 24}" :sm="{span: 12}" :md="{span: 12}" :lg="{span: 6}" :xl="{span: 6}" style="margin-bottom:30px;">
        <box-card/>
      </el-col>
    </el-row>

<!-- 倒数第二个大的折线图 -->
<div class="chart-container">
    <chart height="100%" width="100%"/>
</div>

<!-- 最后一个图 -->
<div class="chart-container2">
    <chart2 height="100%" width="100%"/>
</div>

  </div>
  
  
</template>

<script>
import PanelGroup from './components/PanelGroup'
import LineChart from './components/LineChart'
import RaddarChart from './components/RaddarChart'
import PieChart from './components/PieChart'
import BarChart from './components/BarChart'
import TransactionTable from './components/TransactionTable'
import TodoList from './components/TodoList'
import Chart from '@/components/Charts/lineMarker'
import chart2 from '@/components/Charts/mixChart'
import BoxCard from './components/BoxCard'

const lineChartData = {
  // 图表的轨迹
  newVisitis: {
    expectedData: [2022, 2164, 2666, 2593, 14288, 8570, 2163],
    actualData: [711, 667, 709, 648, 614, 848, 806]
  },
  messages: {
    expectedData: [922627, 1296023, 2263365, 1546697, 2402755, 351316, 829070],
    actualData: [951758, 911013, 680623, 1870543, 1338274, 3269356, 1039139]
  },
  purchases: {
    expectedData: [80, 100, 121, 104, 105, 90, 100],
    actualData: [120, 90, 100, 138, 142, 130, 130]
  },
  shoppings: {
    expectedData: [130, 140, 141, 142, 145, 150, 160],
    actualData: [120, 82, 91, 154, 162, 140, 130]
  }
}

export default {
  name: 'DashboardAdmin',
  components: {
    PanelGroup,
    LineChart,
    RaddarChart,
    PieChart,
    BarChart,
    TransactionTable,
    TodoList,
    BoxCard,
    Chart,
    chart2
  },
  data() {
    return {
      lineChartData: lineChartData.newVisitis
    }
  },
  methods: {
    handleSetLineChartData(type) {
      this.lineChartData = lineChartData[type]
    }
  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
.dashboard-editor-container {
  padding: 32px;
  background-color: rgb(240, 242, 245);
  .chart-wrapper {
    background: #fff;
    padding: 16px 16px 0;
    margin-bottom: 32px;
  }
}
</style>

<style scoped>
.chart-container{
  position: relative;
  width: 100%;
  height: calc(100vh - 84px);
}
</style>

<style scoped>
.chart-container2{
  position: relative;
  width: 100%;
  height: calc(100vh - 84px);
}
</style>