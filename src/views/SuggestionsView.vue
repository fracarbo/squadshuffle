<template>
  <h3 class="_margin-top:2">Suggested teams</h3>

  <SuggestionCard
    v-for="suggestion in balancedTeams"
    :suggestion="suggestion"
    class="_margin-y:2"
  />

  <IButton to="/">
    <IIcon name="fas-chevron-left" class="_margin-right:1/2" /> Back
  </IButton>
</template>

<script setup lang="ts">
import type { Player } from "@/models/Player";
import { ref } from "vue";
import { balanceTeamsSuggestions } from "@/services/balancer.js";
import SuggestionCard from "@/components/SuggestionCard.vue";
import { usePlayersStore } from "@/stores/players";
import { storeToRefs } from "pinia";

const { selectedPlayers: players } = storeToRefs(usePlayersStore());
const maxSuggestions = 5;

const balancedTeams = ref(
  balanceTeamsSuggestions(players.value, maxSuggestions)
);
</script>

<style scoped></style>
