<template>
  <div class="login">
    <el-row class="boxRow">
      <el-col :span="24" :md="12" :lg="16" class="bbb">
        <div class="grid-content ep-bg-purple tac">欢迎光临</div>
      </el-col>
      <el-col :span="24" :md="12" :lg="8" class="aaa">
        <div class="grid-content ep-bg-purple-light right">
          <h2>欢迎回来</h2>
          <div class="loginTitle">
            <span>账号密码登录</span>
          </div>
          <div class="from">
            <el-form :model="rulesForm" :rules="rules" ref="ruleFormRef">
              <el-form-item label="" prop="username">
                <el-input v-model="rulesForm.username" placeholder="请输入用户名" :prefix-icon="User" />
              </el-form-item>
              <el-form-item label="" prop="password">
                <el-input v-model="rulesForm.password" placeholder="请输入密码" :prefix-icon="Lock" />
              </el-form-item>
              <el-form-item label="">
                <el-button type="primary" @click="submitForm(ruleFormRef)">登录</el-button>
              </el-form-item>
            </el-form>
          </div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script setup>
import { useStore } from "vuex";
import { useRouter } from "vue-router";
import { reactive, ref } from "vue";
import loginApi from "../api/login";
import { User, Lock } from "@element-plus/icons-vue";
import { ElNotification } from 'element-plus'
const store = useStore();
const router = useRouter()
const ruleFormRef = ref()

const rulesForm = reactive({
  username: "",
  password: "",
});
const rules = reactive({
  username: [
    { required: true, message: "请输入用户名", trigger: "blur" },
    { min: 3, max: 5, message: "用户名在3-5位之间", trigger: "blur" },
  ],
  password: [
    { required: true, message: "请输入密码", trigger: "blur" },
    { min: 3, max: 5, message: "密码在3-5位之间", trigger: "blur" },
  ],
});

const submitForm = async (formEl) => {
  if (!formEl) return;
  await formEl.validate(async (valid, fields) => {
    if (valid) {
      const res = await store.dispatch('login/handleLogin', rulesForm)
      if (res.msg === 'ok') {
        ElNotification({
          title: '登陆成功',
          type: 'success',
        })
        router.push('/')
      }
    } else {
      console.log("error submit!", fields);
    }
  });
};
</script>

<style scoped lang="scss">
.boxRow {
  background-color: #f3f4f6;
  height: 100vh;

  .aaa {
    background-color: #fff;
    display: flex;
    align-items: center;

    .right {
      width: 100%;
      // background-color: #6366f1;
      display: flex;
      flex-direction: column;
      align-items: center;

      h2 {
        font-size: 30px;
      }

      .loginTitle {
        display: flex;
        justify-content: space-between;
        align-items: center;
        position: relative;
        margin-top: 20px;
        span {
          color: #ccc;
          position: relative;

          &::after,
          &::before {
            position: absolute;
            top: 50%;
            right: -65px;
            content: "";
            width: 60px;
            height: 10px;
            border-top: 1px solid #e5e7eb;
          }

          &::before {
            left: -65px;
          }
        }
      }

      .from {
        margin-top: 20px;
        width: 250px;

        .el-form {
          .el-button {
            width: 100%;
            border-radius: 25px;
            background-color: #626aef;
            border: 0;
          }
        }
      }
    }
  }

  .bbb {
    background-color: #6366f1;
    display: flex;
    align-items: center;
    justify-content: center;

    .tac {
      color: #fff;
      font-size: 14px;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
}
</style>
