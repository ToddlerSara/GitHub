<script setup>
import Headup from '@/components/HeadUp.vue'
import FooterDown from '@/components/Footer.vue'
</script>

<template>
  <Headup />
  <!-- 畫面轉場延遲秒數 -->
  <router-view v-slot="{ Component, route }">
    <transition name="fade">
      <component :is="Component" :key="route.path" />
    </transition>
  </router-view>
  <!-- <router-view /> -->
  <FooterDown />
</template>

<style lang="scss" scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

// vue限制复制
* {
  user-select: none;
}

.prohibitSel {
  user-select: none;
}
</style>