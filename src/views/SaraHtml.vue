<script setup>
import { ref } from 'vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Autoplay, Pagination, Navigation, Scrollbar } from 'swiper';

const modules = [Autoplay, Pagination, Navigation, Scrollbar]
// const navigation = ref({
//     nextE1: ".swiper-button-next",
//     pervE1: ".swiper-button-perv",
// });

// const pervE1 = (item, index) => {
//     console.log('上一張' + index + item)
// };
// const nextE1 = () => {
//     console.log('下一張')
// }
const onSlideChange = (swiper) => {
    console.log(swiper.activeIndex)
}

const list = ref([
    { imgUrl: '/src/assets/Main/1.jpg' },
    { imgUrl: '/src/assets/Main/2.jpg' },
    { imgUrl: '/src/assets/Main/3.jpg' },
    { imgUrl: '/src/assets/Main/4.jpg' },
    { imgUrl: '/src/assets/Main/5.jpg' },
    { imgUrl: '/src/assets/Main/6.jpg' },
    { imgUrl: '/src/assets/Main/7.jpg' },
    { imgUrl: '/src/assets/Main/8.jpg' },
])

</script>

<template>
    <div class="body">
        <div>
            <div class="banner">
                <div>自我介紹</div>
                <div>工作經歷</div>
                <div>基本技能</div>
            </div>
        </div>

        <div class="bgc">
            <!-- <div>動態照片列</div> -->
            <swiper :modules="modules" :loop="true" :slides-per-view="1" :space-between="30"
                :autoplay="{ delay: 4000, disableOnInteraction: false }" :navigation="navigation"
                :pagination="{ clickable: true }" :scrollbar="{ draggable: false }" @slideChange="onSlideChange">
                <swiper-slide v-for="(i, idx) in list">
                    <img class="frameBox" v-bind:src="i.imgUrl" />
                </swiper-slide>
                <!-- 一般html照片放法
                <swiper-slide><img class="frameBox" src="@/assets/Main/1.jpg" /></swiper-slide> -->
                <!-- 左右兩側箭頭 -->
                <!-- <div class="swiper-button-prev" @click.stop="pervE1(item, index)"></div>
                <div class="swiper-button-next" @click.stop="nextE1"></div> -->
            </swiper>
        </div>
        <div>
            <div>快速認識我
                <div>104求職網</div>
                <div>blog</div>
                <div>IG</div>
                <div>facebook</div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.body {
    >* {
        border: 1px solid #fffefe; //框線顏色
        // margin: 5px;
        // padding: 5px;
        color: #202020; // 字體顏色
        font-size: 16px; //主要用來改字體大小 px
        font-family: "Noto Sans TC", sans-serif, "微軟正黑體", arial;
    }

    .banner {
        display: flex;
        justify-content: flex-end;

        >* {
            margin: 1px;
            padding: 5px;
            background-color: rgba(219, 223, 221, 0.411);
            border-radius: 10% 10% 0 0;
        }
    }
}

.bgc {
    background-color: rgba(219, 223, 221, 0.411);
    border: 5px solid rgba(219, 223, 221, 0.411);
}

.swiper {
    width: auto;
    height: 500px;
    max-width: 600px;
    max-height: 600px;
    margin: auto;
    margin-left: auto;
    margin-right: auto;
}

//相框
.frameBox {
    width: 100%;
    height: 90%;
    object-fit: cover;
}
</style>