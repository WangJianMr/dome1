<template>
  <div class="common-layout">
    <el-container>
      <el-header>
        <iHeader></iHeader>
      </el-header>
      <el-container>
        <el-aside width="200px">Aside</el-aside>
        <el-main>Main</el-main>
      </el-container>
    </el-container>
  </div>
</template>
<script setup>
import iHeader from "../components/Home/i-header.vue"
</script>

<style scoped lang="scss">
.common-layout{
.el-container{
    .el-header{
        background-color: #4338ca;
        padding: 0;
    }
}
}
</style>
