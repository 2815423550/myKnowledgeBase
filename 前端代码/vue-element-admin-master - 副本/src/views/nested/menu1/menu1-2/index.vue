<template>
  <div style="padding:30px;">
    <el-alert :closable="false" title="这里是第二阶级" type="success">
      <router-view />
    </el-alert>
  </div>
</template>
