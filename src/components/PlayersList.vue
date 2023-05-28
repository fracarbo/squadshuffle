<template>
  <div class="list-group list-group-flush mb-4">
    <label v-for="player in players" :key="player.name" class="list-group-item">
      <input
        type="checkbox"
        v-model="player.selected"
        class="form-check-input me-1"
      />
      {{ player.name }}
      <span class="badge bg-success rounded-pill">{{ player.overall }}</span>
      <button
        @click="removePlayer(player)"
        class="btn btn-light btn-sm float-end"
      >
        <i class="fa fa-trash"></i> Elimina
      </button>
    </label>
  </div>
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
