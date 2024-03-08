<script>
export default {
    date() {
        return {
            name: "MySwiper",
            prop: {
                imgs: { type: Array, default() { return []; }, },
                SlideStyle: { type: Object, default() { return []; }, },
            },
            components: { Swiper, SwiperSlide },
            setup() {
                let swiper_options = reactive({
                    autoplay: { disableOnInteraction: false, delay: 4000, },
                    speed: 500,
                    loop: true,
                    slidesPerView: "auto",
                    centeredSlides: ture,
                    spaceBetween: 20,
                    EffectCoverflow: { rotate: 0, stretch: -10, depth: 100, modifier: 1 },
                }),
                return { swiper_options };
            }
        }
    }
}
</script>