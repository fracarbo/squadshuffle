<script setup lang="ts">
import { RouterView } from "vue-router";
import TheNavbar from "./components/TheNavbar.vue";
</script>

<template>
  <header>
    <TheNavbar />
  </header>
  <IContainer>
    <RouterView />
  </IContainer>
  <IToastContainer />
</template>

<style scoped></style>
