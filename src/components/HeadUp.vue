<script setup>
import { onMounted, ref } from 'vue';
import SaraNameLog from '@/assets/Sara_name.png'

const headMeauFormList = ref([
  { name: 'Hello', path: '/' },
  { name: 'About me', path: '/sara' },
  { name: 'Practice', path: '/' },
])
const Sng = `url('${SaraNameLog}')`;


</script>
<template>
  <div class="header">
    <div class="name_H"></div>
    <div class="menu">
      <div class="formstytle" v-for="(formList, idx) in headMeauFormList">
        <router-link :to="formList.path">{{ formList.name }}</router-link>
      </div>
      <div class="formstytle"><a href="Luna_textform.html">Luna_textform</a> </div>
    </div>
    <div class="name">contant me</div>
  </div>
</template>

<style lang="scss" scoped>
// class='header'
.header {
  display: flex; //水平排列
  align-items: center; //文字上下置中
  justify-content: space-between; // 空間固定分配
  padding: 0 20px 0 20PX; //上右下左蘭寬
}

.name_H {
  position: static;
  min-width: 75px;
  height: 75px;
  background-image: v-bind(Sng);
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
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