<template>
  <div>
    <IModal v-model="newPlayerModalIsVisible">
      <template #header>New player </template>
      <NewPlayerForm @new-player="addPlayer" />
    </IModal>

    <main>
      <div v-if="players.length > 0" class="_margin-top:2">
        <h4 class="_margin-top:2">Players list</h4>

        <span>{{ selectedPlayers.length }} selected</span>
        <PlayersList
          v-model="players"
          @wanna-delete-player="deletePlayer"
          class="_margin-top:1"
        />
      </div>
      <div
        v-else
        class="_display:flex! _justify-content:center! _flex _items-center"
      >
        <div>
          <img :src="football" class="no-players-illustration" />
          <p class="_text-align:center!">Add some player</p>
        </div>
      </div>
      <IButton
        @click="toggleModal"
        color="primary"
        outline
        block
        class="_margin-top:1"
      >
        <IIcon name="fas-plus" />
        New player
      </IButton>
    </main>

    <IButton
      v-if="players.length > 2"
      block
      :disabled="selectedPlayers.length < 3"
      color="success"
      size="lg"
      to="/suggestions"
      class="_margin-top:2"
    >
      <IIcon name="fas-balance-scale" color="primary" />
      Balance
    </IButton>
  </div>
</template>

<script setup lang="ts">
import NewPlayerForm from "@/components/NewPlayerForm.vue";
import PlayersList from "@/components/PlayersList.vue";
import { usePlayersStore } from "@/stores/players";
import { storeToRefs } from "pinia";
import { ref } from "vue";
import type { Player } from "@/models/Player";
import football from "@/assets/football.png";

const playersStore = usePlayersStore();
const { players, selectedPlayers } = storeToRefs(playersStore);
const { deletePlayer: remove, addPlayer: add } = playersStore;

const deletePlayer = (player: Player) => {
  remove(player);
};

const addPlayer = (player: Player) => {
  try {
    add(player);
  } catch (error) {}
};

const newPlayerModalIsVisible = ref(false);
const toggleModal = () =>
  (newPlayerModalIsVisible.value = !newPlayerModalIsVisible.value);
</script>

<style scoped>
.no-players-illustration {
  width: 100%;
  max-width: 400px;
}
</style>
