# GitHub

這次第一次學寫網頁，邊摸邊爬文。<br>
這一個練習主要是在練 HTML 切版和 CSS 的使用。<br>
<br>
學網頁之前要先安裝好工具<br>
參考網址https://ithelp.ithome.com.tw/articles/10327426<br>
主要學習 Vue3，所以參考資料是 Vue2 時，要認識有何不同，可以看這個參考網址>https://juejin.cn/post/7225267685763907621<br>
<br>
學習網頁切版與認識 View Model Control<br>
<br>
<---script setup---><br>
<br>
練習 import<br>
const & ref 定義<br>
以及.value<br>
<br>
為什麼要用----mounted----，要看一下 Vue "Lifecycle"<br>
https://ithelp.ithome.com.tw/articles/10242633<br>
<br>
Vue.js 寫法官網學習<br>
https://vuejs.org/guide/essentials/application.html<br>
<br>
要常用---->console.log('') 檢查<br>
這個也要會~function =()=>{}<br>
<br>
<---/script---><br>
<br>
<---template---><br>
練習<--div--><--/div-->切版(主要呈現甚麼畫面要在這邊畫)<br>
<br>
參考網址<br>
參考教學>https://htmlcssroom.medium.com/%E5%88%87%E7%89%88%E7%B7%B4%E7%BF%92%E5%AE%A4-%E5%88%9D%E5%AD%B8%E8%80%85%E5%A6%82%E4%BD%95%E9%96%8B%E5%A7%8B%E4%B8%A6%E6%9C%89%E6%95%88%E5%9C%B0%E7%B7%B4%E7%BF%92%E5%88%87%E7%89%88-html-css-%E6%8A%80%E5%B7%A7-74cb322910f5<br>
<br>
数据绑定最常见的形式就是使用 {-{...}-}（双大括号）的文本插值<br>
模板語法 | 菜鳥教學網>https://www.runoob.com/vue3/vue3-template-syntax.html<br>
<br>
<---/template---><br>
<br>
<---style lang="scss" scoped---><br>
Flex 布局語法參考教學>https://www.runoob.com/w3cnote/flex-grammar.html<br>
<---/style---><br>
<br>
執行時 npm run dev~~~<br>
<br>
了解 components 的使用<br>
將頁面裡的功能區塊編輯獨立在 import<br>
<br>
練習使用以下 vue<br>
• v-show: 根據綁定條件(truthy / falsy)切換元素的 inline CSS<br>
• v-if、v-else-if、v-else: 根據綁定條件(truthy / falsy)決定是否渲染或銷毀該元素<br>
• v-for: 根據綁定的陣列、物件或數值渲染多個元素<br>
• v-on: 為元素綁定事件監聽，可以縮寫為 ----> @<br>
• v-bind: 為元素動態綁定一個或多個屬性，可以縮寫為 ----> :<br>
• v-model: 為 input、select、textarea 或元件做值與輸入的"雙向綁定"，也就是接收與回傳<br>
• v-slot: 參數為 slot 名稱，能在 template 內放入對應的 slot 內容<br>
<br>
認識 Router 使用及安裝 //router.js<br>
如何安裝參考網址<br>
參考教學>https://ithelp.ithome.com.tw/articles/10227276<br>
參考教學>https://ithelp.ithome.com.tw/articles/10316532<br>
參考教學>https://juejin.cn/post/6963205355702583303<br>
<br>
認識輪播圖的使用 //MySwiperSet.vue<br>
參考網址<br>
官網>https://swiperjs.com/demos#infinite-loop<br>
參考教學>https://loganluo.medium.com/%E5%A5%BD%E7%94%A8%E7%9A%84%E6%8F%92%E4%BB%B6-swiper-%E5%9C%96%E7%89%87%E6%BB%91%E5%8B%95%E8%BC%AA%E6%92%AD-ii-2d23096a1c43#:~:text=%E9%80%B2%E5%85%A5%20Swiper%20API%20%E6%8C%89%E7%85%A7%E7%B6%B2%E7%AB%99%E6%8F%90%E4%BE%9B%E7%9A%84%E7%AF%84%E4%BE%8B%EF%BC%8C%E7%AD%89%E4%B8%80%E4%B8%8B%E8%A6%81%E6%B7%BB%E5%8A%A0%E3%80%81%E4%BF%AE%E6%94%B9%E7%9A%84%E5%8F%83%E6%95%B8%E9%83%BD%E5%BF%85%E9%A0%88%E6%94%BE%E5%9C%A8%E7%B4%85%E6%A1%86%E7%9A%84%E4%BD%8D%E7%BD%AE%E3%80%82,%E5%9C%A8API%E8%A3%A1%E5%8F%AF%E4%BB%A5%E7%9C%8B%E5%88%B0%E6%89%80%E6%9C%89%E5%8F%AF%E8%AA%BF%E6%95%B4%E7%9A%84%E5%8F%83%E6%95%B8%E3%80%82%20%E5%B0%87%E8%A6%81%E8%AA%BF%E6%95%B4%E7%9A%84%22%E5%8F%83%E6%95%B8%E5%90%8D%E7%A8%B1%E5%8F%8A%E6%95%B8%E5%80%BC%22%EF%BC%8C%E6%8C%89%E7%85%A7%E7%AF%84%E4%BE%8B%E5%85%AC%E5%BC%8F%E5%AF%AB%E9%80%B2JavaScript%E3%80%82%20%E8%A6%81%E6%B3%A8%E6%84%8F%E6%95%B8%E5%80%BC%E7%9A%84%E9%A1%9E%E5%9E%8B%20%28%E5%B8%83%E6%9E%97%E3%80%81%E6%95%B8%E5%AD%97%E3%80%81%E5%AD%97%E4%B8%B2%29%E3%80%82%20%E5%A6%82%E6%9E%9C%E6%98%AF%E5%AD%97%E4%B8%B2%EF%BC%8C%E5%BF%85%E9%A0%88%E8%A6%81%E5%A1%AB%E5%85%A5%22%E5%8F%83%E6%95%B8%E6%8F%8F%E8%BF%B0%22%E5%85%A7%E6%8C%87%E5%AE%9A%E7%9A%84%E5%AD%97%E4%B8%B2%E5%85%A7%E5%AE%B9%E3%80%82<br>
參考教學>https://blog.csdn.net/Shivy_/article/details/129121407#:~:text=%E4%BD%BF%E7%94%A8%E5%91%BD%E4%BB%A4%20npm%20install%20swiper%20%E5%AE%89%E8%A3%85%20swiper%20%E6%8F%92%E4%BB%B6%EF%BC%9B%20%E5%9C%A8,%27.%2Frouter%27%20import%20VueAwesomeSwiper%20from%20%27vue-awesome-swiper%27%3B%20import%20%27swiper%2Fcss%27%3B%20createApp%28App%29.use%28VueAwesomeSwiper%29.use%28router%29.mount%28%27%23app%27%29<br>
<br>
認識 Tab 頁面切換使用 //SaraHtml.vue<br>
參考教學>https://juejin.cn/post/7341340317659430921<br>
<br>
slot 的功能 //WelcomeItem.vue
