<template>
  <IListGroup color="dark">
    <IListGroupItem v-for="player in players" :key="player.name">
      <label class="_display:flex! _align-items:center!">
        <div class="_flex-grow:1">
          <ICheckbox v-model="player.selected">
            <IBadge class="_margin-right:1/2" color="info">
              {{ player.overall }}
            </IBadge>
            <span class="_color:light!">{{ player.name }}</span>
          </ICheckbox>
        </div>
        <div class="_margin-left:auto!">
          <IButton color="danger" link @click="removePlayer(player)">
            <IIcon name="fas-trash" color="primary" />
          </IButton>
        </div>
      </label>
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
