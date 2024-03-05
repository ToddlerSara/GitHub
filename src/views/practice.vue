<script setup>
import { onMounted, ref } from 'vue';
import TheWelcome from '@/components/TheWelcome.vue'
import backgroundImg from '@/assets/pixel-background.jpg'

//連結影片用
import Iframe from '@/components/Iframe.vue'

const articleList = ref([
    { name: 'article A', content: '測試A', url: backgroundImg },
    { name: 'article B', content: '測試B' },
    { name: 'article C', content: '測試C' },
])
const bgImg = `url('${backgroundImg}')`;

//ctrl+KC為註解，ctrl+KU取消註解
// 元件的生命週期與更新機制lifecycle
// const msg1 = ref(null);
// onMounted(()=>{
//   msg1.value = 'Hey you';
// })

</script>

<template>
    <div class="body">
        <div>
            <div class="banner"></div>
            <div class="context-up">
                <p title="textbar">測試</p>
                <address>
                    written by: Sara
                    <br>
                    contant Author at:
                    <a href="mailto:w096753@gmail.com">Sara's mail</a>
                    <br>
                    Or you can visit facebook:
                    <a href="http://facebook.com">Sara's facebook</a>
                </address>
            </div>
        </div>
        <div class="articleArea">
            <div v-for="(article, idx) in articleList">
                <!-- <img v-if="article.url" :src="article.url" class="banner"> -->
                <h2>{{ article.name }}</h2>
                <p>{{ article.content }}</p>
            </div>
        </div>
        <div>
            <TheWelcome />
        </div>

    </div>
</template>

<style lang="scss" scoped>
* {
    position: relative;
}

.body {
    >* {
        border: 1px solid #f5f4f4; //框線顏色
        margin: 5px;
        padding: 5px;
        color: #202020; // 字體顏色
        font-size: 16px; //主要用來改字體大小 px
        font-family: "Noto Sans TC", sans-serif, "微軟正黑體", arial;
    }

    //新增背景圖
    .banner {
        // 相對位置
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        writing-mode: horizontal-tb;
        background-image: v-bind(bgImg);
        background-repeat: no-repeat;
        background-position: center;
        background-size: cover;
        opacity: 0.5;
    }

    //調整文字在上
    .context-up {
        height: auto;
        color: #8a0707;
        font-size: 36px;
        margin: 0 auto;
        text-align: center;
    }

    .articleArea {
        display: flex;
        align-items: center;
        justify-content: space-around;
    }
}

// 沒有'. or #'的是HTML Tag <header>
header {
    line-height: 1.5;
}

//RWD 1024px up
@media (min-width: 1024px) {
    header {
        display: flex;
        place-items: center;
    }
}
</style>
