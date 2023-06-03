<template>
  <div class="_position:fixed-bottom _background:dark!">
    <IContainer class="_padding:1!">
      <div class="_display:flex! _align-items:center!">
        <div class="_flex-grow:1!">
          <span> Team Balancer (v{{ appVersion }}) </span>
        </div>
        <div>
          <IButton
            link
            color="light"
            href="https://github.com/fracarbo"
            target="blank"
          >
            <IIcon name="fab-github" />
          </IButton>
        </div>
        <div>
          <IButton
            link
            color="light"
            href="https://www.linkedin.com/in/francesco-carbonetto/"
            target="blank"
          >
            <IIcon name="fab-linkedin" />
          </IButton>
        </div>
      </div>
    </IContainer>
  </div>
</template>

<script setup lang="ts">
import pkg from "@/../package.json";
import { computed } from "vue";
const appVersion = computed(() => pkg.version);
</script>

<style scoped></style>
