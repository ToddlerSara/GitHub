<script setup>
import { ref } from 'vue';
const headMeauFormList = ref([
  { name: 'Hello', path: '/' },
  { name: 'About me', path: '/sara' },
  { name: 'Practice', path: '/' },
])
</script>
<template>
  <div class="header">
    <div class="name">left</div>
    <div class="menu">
      <div class="formstytle" v-for="(formList, idx) in headMeauFormList">
        <router-link :to="formList.path">{{ formList.name }}</router-link>
      </div>
      <div class="formstytle"><a href="Luna_textform.html">Luna_textform</a> </div>
      <!-- <div class="formstytle">Hello</div>
        <div class="formstytle">About me</div>
        <div class="formstytle">Practice</div> -->
    </div>
    <div>contant me</div>
  </div>
  <router-view />
</template>
<style lang="scss" scoped>
// class='header'
.header {
  display: flex; //水平排列
  align-items: center; //文字上下置中
  justify-content: space-between; // 空間平均分配
}

.menu {
  display: inline-flex;
  align-items: center;
}

.formstytle {
  margin: 5px;
  padding: 5px;
}
</style>