<template>
  <section class="mb-4 card">
    <div class="card-body">
      <h3 class="card-title">New player</h3>
      <form @submit.prevent="addPlayer">
        <div class="row mb-2">
          <div class="col">
            <label>Name</label>
            <input
              id="newPlayerNameField"
              v-model="newPlayer.name"
              class="form-control mb-2"
              placeholder="Cristiano Ronaldo"
              required
            />
          </div>
          <div class="col-sm-6">
            <label class="form-label">Value: {{ newPlayer.overall }}</label>
            <input
              v-model.number="newPlayer.overall"
              type="range"
              class="form-range"
              min="1"
              max="10"
            />
          </div>
        </div>
        <div class="d-grid gap-2">
          <button class="btn btn-outline-primary">
            <i class="fa fa-plus"></i> Add player
          </button>
        </div>
      </form>
    </div>
  </section>
</template>

<script setup lang="ts">
import type { Player } from "@/models/Player";
import { ref, computed } from "vue";

const emit = defineEmits<{
  (e: "newPlayer", player: Player): void;
}>();

const newPlayer = ref<Player>({
  name: "",
  overall: 5,
});

const formIsValid = computed(() => true); // TODO

const addPlayer = () => {
  if (!formIsValid.value) {
    return;
  }
  emit("newPlayer", { ...newPlayer.value });
};
</script>

<style scoped></style>
