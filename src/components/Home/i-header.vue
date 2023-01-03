<template>
  <div class="header">
    <div class="left">
      <div class="loog">
        <el-icon>
          <ElemeFilled />
        </el-icon>
        <div class="name">积云商城</div>
        <el-icon style="margin: 0 30px 0 80px"><Expand /></el-icon>
        <el-icon><Refresh /></el-icon>
      </div>
    </div>
    <div class="right">
      <el-icon><FullScreen /></el-icon>
      <el-dropdown @command="handleCommand">
        <span class="el-dropdown-link">
          名字
          <el-icon class="el-icon--right">
            <arrow-down />
          </el-icon>
        </span>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item command="a">修改密码</el-dropdown-item>
            <el-dropdown-item command="b">退出登录</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
  </div>
</template>

<script setup>
import { useStore } from "vuex";
import { useRouter } from "vue-router";
import { ElNotification } from "element-plus";
const store = useStore();
const router = useRouter();
const handleCommand = async (e) => {
  if (e === "b") {
    const res = await store.dispatch("login/handleLoginOut");
    if (res.msg === "ok") {
      if (!store.getters.TOKEN) {
        console.log(123);
        router.push("/login");
      }
      ElNotification({
        message: "退出成功",
        type: "success",
      });
    }
  }
};
</script>

<style scoped lang="scss">
.header {
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px 0 50px;
  color: #fff;
  .left {
    .loog {
      display: flex;
      align-items: center;
      .name {
        margin-left: 5px;
      }
      .el-icon {
        font-size: 22px;
      }
    }
  }
  .right {
    .el-dropdown {
      margin-left: 30px;
      color: #fff;
    }
  }
}
</style>
