<script setup>
import { ref } from 'vue';
import { useRouter } from "vue-router"
import SaraNameLog from '@/assets/Sara_name.png'

const headMeauFormList = ref([
  { name: 'Home', path: '/' },
  { name: 'About me', path: '/sara' },
  { name: 'Project', path: '/homework' },
])
// const Sng = `url('${SaraNameLog}')`;

//use router
const router = useRouter();
const goto = () => {
  // router.push('/home');
  router.push({
    path: '/'
  })
}
</script>

<template>
  <div class="header">

    <!-- 可以不使用@click,router index.js 就有import 可以直接使用裡面的name/path -->
    <!-- <a href="/home"> -->
    <a @click="goto">
      <div>
        <!-- 使用圖片 -->
        <!-- <img :src="SaraNameLog" class="name_H"> -->
        <h1>Sara's Work Section</h1>
      </div>
    </a>
    <div class="menu">
      <div class="formstytle" v-for="(formList, idx) in headMeauFormList">
        <router-link :to="formList.path" class="router-link-class">{{ formList.name }}</router-link>
      </div>
      <!-- 練習參考網 -->
      <!-- <div class="formstytle"><a href="Luna_textform.html" class="router-link-class">Luna_textform</a> </div> -->
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

h1 {
  font-family: "Indie Flower", cursive;
  font-size: 30px;
  font-weight: 700;
}

// .name_H {
//   position: static;
//   min-width: 75px;
//   max-width: 75px;
//   height: 40px;
//   position: relative;
// }

.menu {
  display: inline-flex;
  align-items: center;
}

.formstytle {
  padding: 0 20px; //上下 左右
  font-size: 1rem;

  &:not(:first-child) {
    border-left: 1px solid #020202; //框線顏色
  }
}

//使用deep，可以取代class='router-link-class'，針對解譯後的'a'有影響。
// :deep(a) {}
.router-link-class {

  //連結未被訪問過
  &:link {
    text-decoration: none;
    color: #020202
  }

  //連結已被訪問過
  &:visited {
    color: #020202
  }

  //滑鼠游標移到元素上
  &:hover {
    color: rgb(202, 102, 8);
    transition: all cubic-bezier(0.46, 0.03, 0.52, 0.96) 1s;
    background: linear-gradient(transparent 70%, #FFD43C 50%);
  }

  //滑鼠點擊到放開前
  &:active {
    color: rgb(202, 102, 8);
  }

  &.router-link-exact-active {
    content: "";
    background: linear-gradient(transparent 70%, #FFD43C 50%);
    border-radius: 50px;
    color: rgb(202, 102, 8);
  }
}
</style>