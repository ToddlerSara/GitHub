<script setup>
import { ref } from 'vue';

const FooterList = ref([
    { name: 'Phone', content: '09123456789' },
    { name: 'Email', content: 'w096753@gmail.com' },
    { name: 'Follow me', content: 'Img Facebook' },
    { content: '© 2035 By Sara Rider. \n Powered and secured by Wix' }
])
</script>

<template>
    <div class="body">
        <div>
            <div class="demarcation"></div>
        </div>
        <div>
            <div class="FooterList">
                <div v-for="(foot, idx) in FooterList">
                    <h2>{{ foot.name }}</h2>
                    <p>{{ foot.content }}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.body {
    >* {
        padding: 5px;
        margin: 5px 50px;
    }

    .demarcation {
        padding: 3px;
        margin: 5px 50px 5px 50px;
        border-top: 1px solid #747da76e;
    }

    .FooterList {
        display: flex;
        padding: 5px;
        margin: 5px;
        justify-content: space-between;

        p {
            white-space: pre-wrap;
        }
    }

}
</style>