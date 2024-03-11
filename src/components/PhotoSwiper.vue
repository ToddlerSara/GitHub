<script setup>
import { ref } from 'vue';
import Swiper from "swiper";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Autoplay, Pagination, Navigation, EffectCoverflow, Keyboard, Mousewheel } from 'swiper/modules';
import { onMounted } from "vue";

onMounted(() => {
    var swiper = new Swiper(".mySwiper", {
        modules: [Autoplay, Pagination, Navigation, EffectCoverflow, Keyboard, Mousewheel],
        // loop: true,
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: 2,
        observer: true,
        observeParents: true,
        observeSlideChildren: true,
        effect: 'coverflow',
        coverflowEffect: {
            rotate: 0,
            stretch: -70,
            depth: 500,
            modifier: 1,
            slideShadows: true,
        },
        autoplay: { delay: 3000, pauseOnMouseEnter: true, disableOnInteraction: false },
        // If we need pagination
        mousewheel: true,
        keyboard: {
            enabled: true,
        },
        pagination:
        {
            el: ".swiper-pagination",
            clickable: true,
        },
        // Navigation arrows
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });
})

const list = ref([
    { imgUrl: '/src/assets/Main/1.jpg' },
    { imgUrl: '/src/assets/Main/2.jpg' },
    { imgUrl: '/src/assets/Main/3.jpg' },
    { imgUrl: '/src/assets/Main/4.jpg' },
    { imgUrl: '/src/assets/Main/5.jpg' },
    { imgUrl: '/src/assets/Main/6.jpg' },
    { imgUrl: '/src/assets/Main/7.jpg' },
    { imgUrl: '/src/assets/Main/8.jpg' },
]);

</script>

<template>
    <div class="swiper mySwiper">
        <div class="swiper-wrapper">
            <div class="swiper-slide" v-for="( i, idx ) in  list ">
                <img class="frameBox" v-bind:src="i.imgUrl" />
            </div>
        </div>
        <div class="swiper-pagination"></div>
        <div class="swiper-button-prev"></div>
        <div class="swiper-button-next"></div>
    </div>
</template>

<style lang="scss" scoped>
.swiper {
    width: 100%;
    padding-top: 30px;
    padding-bottom: 30px;
    background-color: rgba(219, 223, 221, 0.411);
}

.swiper-slide {
    background-position: center;
    background-size: cover;
    height: 400px;
}

.swiper-button-prev,
.swiper-button-next {
    position: absolute;
    top: 50%;
    color: rgb(234, 247, 248);
}

//相框
.frameBox {
    width: 100%;
    height: 100%;
    object-fit: cover;
}
</style>