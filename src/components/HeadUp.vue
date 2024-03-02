<script setup>
import { ref } from 'vue';
import SaraNameLog from '@/assets/Sara_name.png'

const headMeauFormList = ref([
  { name: 'Hello', path: '/home' },
  { name: 'About me', path: '/sara' },
  { name: 'Practice', path: '/homework' },
])
const Sng = `url('${SaraNameLog}')`;


</script>
<template>
  <div class="header">
    <div class="name_H"></div>
    <div class="menu">
      <div class="formstytle" v-for="(formList, idx) in headMeauFormList">
        <router-link :to="formList.path" class="router-link-class">{{ formList.name }}</router-link>
      </div>
      <div class="formstytle"><a href="Luna_textform.html">Luna_textform</a> </div>
      <div class="formstytle">contant me</div>
    </div>
  </div>
</template>

<!-- 当在style标签上加上scoped属性，则style标签下的样式只能在本组件中使用，可以使得组件之间的样式不互相污染。
如果每一个vue组件的style标签都加上了scoped，那就实现了样式的模块化。 -->
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
  padding: 0 10px; //上下 左右

  &:not(:first-child) {
    border-left: 1px solid #020202; //框線顏色
  }
}

//使用deep，可以取代class='router-link-class'，針對解譯後的'a'有影響。
// .router-link-class {
:deep(a) {
  &:link {
    text-decoration: none;
    color: #020202
  }

  &:visited {
    color: #020202
  }

  &:hover {
    color: rgb(202, 102, 8);
  }

  &:active {
    color: rgb(202, 102, 8);
  }
}
</style>