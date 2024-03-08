<script setup>
import { ref } from 'vue';
import Photo from '@/components/PhotoSwiper.vue';

const tabs = ref(['自我介紹', '工作經歷', '基本技能']);
const contents = ref(['Content 1', 'Content 2', 'Content 3']);
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
                    <span>{{ tab }}</span>
                    <div v-if="currentTab === index" class="underline"></div>
                </div>
            </div>
            <div class="content-container">
                <div v-for="(content, index) in contents" :key="index" v-show="currentTab === index">
                    {{ content }}
                </div>
            </div>
        </div>
        <Photo />
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
        color: #202020;
        font-size: 16px;
        font-family: "Noto Sans TC", sans-serif, "微軟正黑體", arial;
    }

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
}

.tab-item {
    cursor: pointer;
    margin-right: 20px;
    position: relative;
}

.underline {
    position: absolute;
    bottom: 0;
    left: 50%;
    width: 100%;
    height: 10px;
    background-color: rgb(238, 255, 0);
    transform: translateX(-50%);
}

.content-container {
    margin-top: 20px;
}
</style>