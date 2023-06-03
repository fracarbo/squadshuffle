<script setup lang="ts">
import { RouterView } from "vue-router";
import TheNavbar from "./components/TheNavbar.vue";
import TheFooter from "./components/TheFooter.vue";
</script>

<template>
  <header>
    <TheNavbar />
  </header>
  <IContainer>
    <RouterView />
  </IContainer>
  <!--<TheFooter />-->
</template>

<style scoped></style>
