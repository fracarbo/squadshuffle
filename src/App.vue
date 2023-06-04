<script setup lang="ts">
import { RouterView } from "vue-router";
import TheNavbar from "./components/TheNavbar.vue";
import TheFooter from "./components/TheFooter.vue";
</script>

<template>
  <header>
    <TheNavbar />
  </header>

  <IContainer class="main-view">
    <router-view v-slot="{ Component }">
      <transition name="fade" mode="out-in">
        <component :is="Component" />
      </transition>
    </router-view>
  </IContainer>
  <TheFooter class="_margin-top:2" />
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.main-view {
  display: flex;
  flex-direction: column;
  min-height: calc(100vh - 25vh);
}
</style>
