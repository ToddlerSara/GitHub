<script setup>
import { ref } from 'vue';
import HelloMeImg from '@/assets/hello.jpg'

const headMeauFormList = ref([
    { name: 'About me', path: '/sara', color: ' rgb(255, 128, 0)' },
    { name: 'Project', path: '/homework', color: 'rgb(255, 0, 0)' },
    { name: 'Contant', path: '/', color: 'rgb(0, 255, 217)' },
])
const linkStyle = (a) => {
    if (a.c) {
        return { "background-color": a.c };
    }
    return { "background-color": a.color };
}
// const mouseover = (e) => {
//     console.log(e)
// }
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
                        <h1>Hello</h1>
                    </div>
                    <div>
                        <h2>A Bit About Me</h2>
                    </div>
                    <div>
                        <p>I'm a paragraph. Click here to add your own text and edit me. I’m a great place for you to
                            tell a
                            story and let your users know a little more about you.</p>
                    </div>
                </div>
                <div class="linkpage">
                    <div v-for="(formList, idx) in headMeauFormList">
                        <!-- @mouseover & @mouseleave 使用-->
                        <router-link class="router-link-class" v-bind:to="formList.path"
                            v-bind:style="linkStyle(formList)" @mouseover="formList.c = 'white'"
                            @mouseleave="formList.c = ''">
                            {{ formList.name }}</router-link>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.body {
    >* {
        display: flex;
        justify-content: center;
        // padding: 80px; //上下 左右
        margin: 10px 100px;
        min-width: 980px
    }

    .photoArea {
        margin: 35px;
        min-width: 480px;
        max-width: 480px;
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
    }

    h1 {
        margin: 30px 0 5px 0;
        font-family: "Indie Flower", cursive;
        font-size: 130px;
    }

    h2 {
        margin: 0 0 5px 0;
        font-family: "Madimi One", sans-serif;
        font-size: 30px;
    }

    p {
        margin: 0 80px 25px 0;
        font-family: "PT Sans", sans-serif;
        font-size: 16px;
    }

    .linkpage {
        display: grid;
        grid-template-columns: 140px 140px 140px;
        grid-template-rows: 140px;
        gap: 5px;
        position: relative;
        // justify-content: space-between;
    }

    .router-link-class {
        border: 1px solid;
        color: #020202;
        border-radius: 50%;
        // background-color: rgb(0, 255, 217);
        text-decoration: none;
        text-align: center;
        justify-content: center;
        display: flex;
        padding: 35px;
    }
}
</style>