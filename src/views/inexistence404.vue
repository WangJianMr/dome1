<template>
  <div class="box">
    <el-result icon="warning" title="404提示" sub-title="你找的页面走丢啦~~">
      <template #extra>
        <el-button type="primary" @click="toPath">回到首页</el-button>
      </template>
    </el-result>
  </div>
</template>
<script setup>
import { useRouter } from "vue-router";
const router = useRouter();
const toPath = () => {
  router.push("/");
};
</script>
<style scoped>
.box {
  width: 100vw;
  height: 100vh;
  background-color: #f3f4f6;
}
</style>
