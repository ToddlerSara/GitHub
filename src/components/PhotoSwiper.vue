<script setup>
import { ref } from 'vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Autoplay, Pagination, Navigation } from 'swiper';

const modules = [Autoplay, Pagination, Navigation]

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
    <div class="bgc">
        <swiper :modules="modules" :loop="true" :slides-per-view="1" :loopedSlides="2" :space-between="0"
            :autoplay="{ delay: 2000, pauseOnMouseEnter: true, disableOnInteraction: false }" :navigation="{
            nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev'
        }" :pagination="{ clickable: true }">
            <swiper-slide v-for="( i, idx ) in  list ">
                <img class="frameBox" v-bind:src="i.imgUrl" />
            </swiper-slide>
            <div class="swiper-button-prev"></div>
            <div class="swiper-button-next"></div>
        </swiper>
    </div>
</template>

<style lang="scss" scoped>
.bgc {
    background-color: rgba(219, 223, 221, 0.411);
    width: auto;
    overflow: hidden;
}

.swiper {
    width: auto;
    height: 500px;
    max-width: 600px;
    max-height: 600px;
    margin: auto;
    overflow: visible; // hidden
}

.swiper-button-prev,
.swiper-button-next {
    position: absolute;
    top: 50%;
    color: rgb(3, 45, 47);
}

.swiper-button-next {
    right: -50px;
    left: auto;
}

.swiper-button-prev {
    right: auto;
    left: -50px;
}

//相框
.frameBox {
    width: 100%;
    height: 90%;
    object-fit: cover;
}
</style>