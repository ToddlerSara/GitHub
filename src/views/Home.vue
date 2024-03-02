<script setup>
import { ref } from 'vue';
import HelloMeImg from '@/assets/hello.jpg'

// const himeImg = `url('${HelloMeImg}')`;

</script>
<template>
    <div class="body">
        <div>
            <!-- 畫框包覆 -->
            <!-- <div class="frames"> -->
            <!-- <div class="myphoto"></div> -->
            <!-- </div> -->
            <!-- 直接放圖 -->
            <div class="photoArea">
                <img :src="HelloMeImg" />
            </div>
            <div class="aboutArea">
                <div class="SecondRoll">
                    <div>
                        <h1>Big Hello(right_up)</h1>
                    </div>
                    <div>
                        <p>A Bit About Me(right_senter)</p>
                    </div>
                    <div>
                        <p>I'm a paragraph. Click here to add your own text and edit me. I’m a great place for you to tell a
                            story and let your users know a little more about you.(right_down)</p>
                    </div>
                </div>
                <div class="">
                    <div>Resume</div>
                    <div>project</div>
                    <div>contant</div>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.body {
    >* {
        display: flex;
        justify-content: space-around;
        padding: 10px; //上下 左右
        margin: 5px;
        min-width: 980px
    }

    .photoArea {
        margin: 35px;
        width: 480px;
        height: 480px;
        position: relative;
        border-radius: 50%;
        overflow: hidden;

        img {
            width: 100%;
        }
    }

    // .frames {
    //     position: relative;
    //     align-self: start;
    //     overflow: hidden;
    //     width: 480px;
    //     height: 480px;
    //     margin: 35px;
    // }

    // .myphoto {
    //     background-image: v-bind(himeImg);
    //     background-repeat: no-repeat;
    //     background-position: right 55% bottom 85%;
    //     background-size: cover;
    //     box-sizing: content-box;
    //     height: 100%;
    //     width: 100%;
    //     padding-bottom: 30%;
    // }

    .aboutArea {
        flex: 1;
    }

    .SecondRoll {
        display: inline;
        justify-content: space-around;
        padding: 0 10px; //上下 左右
        margin: 5px;
        width: min-content;
    }


}
</style>