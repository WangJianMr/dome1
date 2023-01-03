<script setup>
import { useStore } from "vuex";
const store = useStore();
</script>

<template>
  <div>
    <!-- <div v-show="$store.state.flag">
      <el-progress :indeterminate="true" 
      :percentage="50" :show-text="false"/>
        <el-icon>
            <Clock />
        </el-icon>
    </div> -->
    <router-view></router-view>
  </div>
</template>

<style scoped></style>
