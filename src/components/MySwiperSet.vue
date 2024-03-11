<script setup>
import Swiper from "swiper";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination } from 'swiper/modules';
import { onMounted } from "vue";

onMounted(() => {
    var swiper = new Swiper(".mySwiper", {
        modules: [Navigation, Pagination],
        // loop: true,
        slidesPerView: 3,
        spaceBetween: 10,
        // If we need pagination
        pagination: {
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

</script>

<template>
    <div class="mySwiper">
        <div class="swiper-wrapper">
            <div class="swiper-slide">
                <img src="https://picsum.photos/id/777/1000/500" alt="">
            </div>
            <div class="swiper-slide">
                <img src="https://picsum.photos/id/778/1000/500" alt="">
            </div>
            <div class="swiper-slide">
                <img src="https://picsum.photos/id/779/1000/500" alt="">
            </div>
            <div class="swiper-slide">
                <img src="https://picsum.photos/id/780/1000/500" alt="">
            </div>
            <div class="swiper-slide">
                <img src="https://picsum.photos/id/781/1000/500" alt="">
            </div>
        </div>
        <div class="swiper-pagination"></div>
        <div class="swiper-button-prev"></div>
        <div class="swiper-button-next"></div>
    </div>
</template>

<style lang="scss" scoped>
.mySwiper {
    height: 400px;
    overflow: hidden;
    position: relative;
}

.swiper-wrapper {
    box-sizing: content-box;
}

img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.swiper-button-next {
    position: absolute;
    top: 50%;
}
</style>