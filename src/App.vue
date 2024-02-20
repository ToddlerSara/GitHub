<script setup>
import { onMounted, ref } from 'vue';
import HelloWorld from './components/HelloWorld.vue'
import TheWelcome from './components/TheWelcome.vue'
import Iframe from './components/Iframe.vue'
const msg1 = ref(null);

onMounted(()=>{
  msg1.value = 'Hey you';
})

</script>

<template>
  <header>
    <img alt="Vue logo" class="logo" src="./assets/logo.svg" width="125" height="125"/>
    <div class="wrapper">
      <HelloWorld :msg="msg1" :show="false"/>
      <p>This<i> is </i>some content HTML <br><strong>練習測試</strong></p>
      <br>
      <template v-for="i in 1">
        {{ i }}
        <Iframe src="https://www.youtube.com/embed/LdOUKrbVc0I?si=qXhqrSeWNkDa_XeR" />
      </template>
      <ul>
        <li v-for="i in 10">List {{ i }}</li>
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
  </main>
</template>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
