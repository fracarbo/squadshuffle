<template>
  <IListGroup color="dark">
    <IListGroupItem v-for="player in players" :key="player.name">
      <div class="_display:flex!">
        <div>
          <ICheckbox v-model="player.selected"
            ><span class="_color:light!">{{ player.name }}</span></ICheckbox
          >
        </div>
        <div class="_margin-left:2">
          <IBadge color="info">{{ player.overall }}</IBadge>
        </div>
        <div class="_margin-left:auto!">
          <IButton color="danger" outline @click="removePlayer(player)">
            <IIcon name="fas-trash" color="primary" />
          </IButton>
        </div>
      </div>
    </IListGroupItem>
  </IListGroup>
</template>

<script setup lang="ts">
import type { PlayerSelectable } from "@/models/PlayerSelectable";
import { computed } from "vue";

const props = defineProps<{
  modelValue: PlayerSelectable[];
}>();

const emit = defineEmits<{
  (e: "update:modelValue", player: PlayerSelectable[]): void;
  (e: "wannaDeletePlayer", player: PlayerSelectable): void;
}>();
const players = computed(() => props.modelValue);

const removePlayer = (player: PlayerSelectable) =>
  emit("wannaDeletePlayer", { ...player });
</script>

<style scoped></style>
