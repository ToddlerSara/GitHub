<script setup>
import { onMounted, ref } from 'vue';
import HelloWorld from './components/HelloWorld.vue'
import TheWelcome from './components/TheWelcome.vue'
import Iframe from './components/Iframe.vue'
const msg1 = ref(null);
const clas = 'logo'
const articleList = ref([
  { name: 'article A', content: '測試A' },
  { name: 'article B', content: '測試B' },
  { name: 'article C', content: '測試C' },
])

//ctrl+KC為註解，ctrl+KU取消註解
// onMounted(()=>{
//   msg1.value = 'Hey you';
// })

</script>

<template>
  <div class="body">
    <div class="header">
      <div class="name">left</div>
      <div class="menu">
        <ul>
          <li class="formstytle">Hello</li>
          <li class="formstytle">About me</li>
          <li class="formstytle">Practice</li>
        </ul>
      </div>
    </div>
    <div class="banner">
      <div class="context-up">
        <p>測試</p>
      </div>
    </div>
    <div class="articleArea">
      <div v-for="(article, idx) in articleList">
        <h2>{{ article.name }}</h2>
        <p>{{ article.content }}</p>
      </div>
    </div>
    <div class="footerArea">
      footer
    </div>
  </div>


  <!-- 
  <header>
    <img alt="Vue logo" 
     src="./assets/logo.svg" width="125" height="125"/>
    <div class="wrapper">
      <HelloWorld :msg="msg1" :show="false"/>
      <p>This<i> is </i>some content HTML <br><strong>練習測試</strong></p>
      <br>
      <template v-for="i in 1">
        {{ i }}
        <Iframe src="https://www.youtube.com/embed/LdOUKrbVc0I?si=qXhqrSeWNkDa_XeR" />
      </template>
      <ul>
        <li v-for="(i, idx) in 10">List {{ i }}</li>
      </ul><br>
      <ol>
        <li>List 1</li>
        <li>List 2</li>
        <li>List 3</li>
      </ol>
    </div>
    <img alt="Vue logo" class="logo" src="https://blog.hamibook.com.tw/wp-content/uploads/2019/04/%E8%81%AF%E5%90%88%E5%A0%B120190416-00.jpg" width="150" height="150"/>
  </header>

  <main>
    <TheWelcome />
    <form>
      name<input type="text">
      password<input type="password">
      <br>
      <input type="radio" name="gender">mail
      <input type="radio" name="gender">femail
      <br>
      tick me<input type="checkbox">
      <input type="submit">
      <br>
      <select>
        <option>option 1</option>
        <option>option 2</option>
        <option>option 3</option>        
      </select>
      <br>
      <textarea></textarea>
    </form>
  </main> -->
</template>

<style lang="scss" scoped>
.body {
  >* {
    border: 1px solid #000;
    margin: 5px;
    padding: 10px;
  }

  .formstytle {
    display: inline-block;
    margin: 5px;
    padding: 5px;
  }

  //新增背景圖
  .banner {
    block-size: 150px;
    writing-mode: horizontal-tb;
    background-image: url("https://i.imgur.com/W7xqcWS.jpeg");
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
  }

  //調整文字在上
  .context-up {
    position: absolute;
    color: #8a0707;
    font-size: 36px;
    margin: 0 auto;
    left: 0;
    right: 0;
    text-align: center;
  }
}

.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
}


header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

//RWD 1024px up
@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper .content .header .right {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
