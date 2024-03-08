<script setup>
import Swiper from "swiper";
import 'swiper/css';
import { Navigation, Pagination } from 'swiper/modules';
import { onMounted } from "vue";

onMounted(() => {
    var swiper = new Swiper(".mySwiper", {
        modules: [Navigation, Pagination],
        loop: true,
        slidesPerView: 3,
        spaceBetween: 10,
        breakpoints: {
            576: {
                slidesPerView: 2,
            },
            '@1.5': {
                slidesPerView: 3,
            }
        },
        // If we need pagination
        pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
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
.swiper-top {
    position: relative;
    width: 100%;
    margin: auto;
}

.mySwiper {
    width: calc(100% - 100px);
    margin: auto;
    height: 200px;
}

.swiper-slide img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.swiper-pagination.swiper-pagination-1 {
    bottom: -2rem;
}
</style>