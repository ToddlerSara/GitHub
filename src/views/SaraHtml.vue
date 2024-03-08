<script setup>
import { ref } from 'vue';
import PhotoSwiper from '@/components/PhotoSwiper.vue';
import Hello from '@/views/Home.vue'
import MySwiperSet from '@/components/MySwiperSet.vue';

const tabs = ref(['自我介紹', '工作經歷', '基本技能']);
const currentTab = ref(0);
const changeTab = (index) => {
    currentTab.value = index;
};
</script>

<template>
    <div class="body">
        <div>
            <div class="banner">
                <div v-for="(tab, index) in tabs" :key="index" @click="changeTab(index)"
                    :class="{ 'selected': currentTab === index }" class="tab-item">
                    <div>{{ tab }}</div>
                    <div v-if="currentTab === index" class="ontabline"></div>
                </div>
            </div>
            <div v-for="(a, index) in tabs" :key="index" v-show="currentTab === index">
                <div id="A" v-if="currentTab === 0">
                    <PhotoSwiper />
                </div>
                <div id="B" v-if="currentTab === 1">
                    <Hello />
                </div>
                <div id="C" v-if="currentTab === 2">
                    C
                    <MySwiperSet />
                </div>
            </div>
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
.banner {
    display: flex;
    justify-content: flex-end;

    >* {
        margin: 5px 1px 0 1px;
        padding: 10px;
        background-color: rgba(219, 223, 221, 0.411);
        border-radius: 10% 10% 0 0;
    }
}

.tab-item {
    cursor: pointer;
    position: relative;
    color: #202020;
    font-size: 16px;
    font-family: "Indie Flower", cursive;

    &:hover {
        background: linear-gradient(transparent 15%, rgba(219, 223, 221, 0.411) 50%);
    }
}

.ontabline {
    position: absolute;
    left: 0%;
    width: 100%;
    height: 30px;
    background: linear-gradient(transparent 0%, rgb(121, 235, 209) 80%);
    transform: translateY(-70%);
}
</style>