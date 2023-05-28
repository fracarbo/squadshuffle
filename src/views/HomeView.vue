<template>
  <main>
    <NewPlayerForm @new-player="addPlayer" />

    <section>
      <div v-if="players.length > 0" class="mb-4 card">
        <div class="card-body">
          <h3 class="card-title mb-4">Players list</h3>
          <span>Selected: {{ selectedPlayers.length }}</span>
          <PlayersList v-model="players" @wanna-delete-player="deletePlayer" />
        </div>
      </div>
      <p v-else>Add some player</p>
    </section>

    <BalancedTeams :players="selectedPlayers" />
  </main>
</template>

<script setup lang="ts">
import NewPlayerForm from "@/components/NewPlayerForm.vue";
import PlayersList from "@/components/PlayersList.vue";
import BalancedTeams from "@/components/BalancedTeams.vue";

import type { PlayerSelectable } from "@/models/PlayerSelectable";
import { computed, ref } from "vue";
import type { Player } from "@/models/Player";

const players = ref<PlayerSelectable[]>([]);
const selectedPlayers = computed(() => players.value.filter((p) => p.selected));

const addPlayer = (newPlayer: Player) => {
  console.log(newPlayer);
  players.value.push({ ...newPlayer, selected: true });
};

const deletePlayer = (toDelete: Player) => {
  players.value = players.value.filter((p: Player) => p.name !== toDelete.name);
};
</script>
