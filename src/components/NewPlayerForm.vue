<template>
  <IForm @submit.prevent="addPlayer">
    <IFormGroup>
      <IFormLabel>Name</IFormLabel>
      <IInput
        v-model.trim="newPlayer.name"
        clearable
        placeholder="Cristiano Ronaldo"
        required
      />
      <label class="error" v-show="playerAlreadyExists"
        >{{ newPlayer.name }} already exists</label
      >
    </IFormGroup>
    <IFormGroup>
      <IFormLabel>Overall: {{ newPlayer.overall }}</IFormLabel>
      <IInput
        v-model.number="newPlayer.overall"
        type="range"
        class="form-range"
        min="1"
        max="10"
      />
    </IFormGroup>
    <IButton
      :disabled="!formIsValid"
      block
      type="submit"
      color="primary"
      class="_margin-top:2!"
    >
      <IIcon name="fas-plus" />
      Add player
    </IButton>
  </IForm>
</template>

<script setup lang="ts">
import type { Player } from "@/models/Player";
import { ref, computed, watchEffect } from "vue";
import { usePlayersStore } from "@/stores/players";
import { IInput } from "@inkline/inkline";
import capitalize from "capitalize";

const emit = defineEmits<{
  (e: "newPlayer", player: Player): void;
}>();

const store = usePlayersStore();

const newPlayer = ref<Player>({
  name: "",
  overall: 5,
});

watchEffect(
  () => (newPlayer.value.name = capitalize.words(newPlayer.value.name))
);
const playerAlreadyExists = computed(() => store.exists(newPlayer.value.name));

const formIsValid = computed(() => !playerAlreadyExists.value); // TODO

const addPlayer = () => {
  emit("newPlayer", { ...newPlayer.value });

  newPlayer.value.name = "";
};
</script>

<style>
.error {
  color: var(--color-red);
  font-size: 12px;
}

input[type="range"] {
  -webkit-appearance: none;
  width: 100%;
  height: 5px;
  background: var(--color-info);
  outline: none;
  opacity: 0.7;
  transition: opacity 0.2s;
}

input[type="range"]::-webkit-slider-thumb {
  -webkit-appearance: none;
  appearance: none;
  width: 15px;
  height: 15px;
  background: var(--color-info);
  border-radius: 50%;
  cursor: pointer;
}
</style>
