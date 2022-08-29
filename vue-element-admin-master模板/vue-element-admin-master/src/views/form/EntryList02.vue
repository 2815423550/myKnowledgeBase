<template>
  <div class="app-container">
    <el-form ref="form" :model="hesuanListData" label-width="120px">
      <!-- <el-form-item label="排号">
        <el-input v-model="hesuanListData.id"/>
      </el-form-item> -->
      <el-form-item label="姓名">
        <el-input v-model="hesuanListData.name"/>
      </el-form-item>
      <el-form-item label="身份证号">
        <el-input v-model="hesuanListData.cardid"/>
      </el-form-item>
      <el-form-item label="电话号码">
        <el-input v-model="hesuanListData.phonenumber"/>
      </el-form-item>
      <el-form-item label="选择日期">
        <el-date-picker
          v-model="hesuanListData.date"
          type="datetime"
          placeholder="选择日期时间"
        >
        </el-date-picker>
      </el-form-item>
      <el-form-item label="其他">
        <el-input v-model="hesuanListData.more" type="textarea"/>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">提交</el-button>
        <el-button @click="onCancel">取消</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import hesuanList from '@/api/hesuanList02'
export default {
  data() {
    return {
      hesuanListData:{

      }
    }
  },
  created(){

  },
  methods: {
    onSubmit() {
      hesuanList.savehesuanList(this.hesuanListData)
      .then(res=>{
        this.$message({
          type:'success',
          message:'添加成功'
        })
        this.$router.push({path:'/hospitalList/hospitalList02'})                                //!!!!!!
        // <route-link to="http://localhost:9528/#/form/index"></route-link>
      })
      .catch(res=>{
        console.log("添加失败")
      })
    },
    onCancel() {
      // this.$message({
      //   message: 'cancel!',
      //   type: 'warning'
      // })
      this.$router.push({path:'/entry/list'})
    }
  }
}
</script>

<style scoped>
.line{
  text-align: center;
}
</style>

