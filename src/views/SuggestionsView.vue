<template>
  <div>
    <h4 class="_margin-top:2">Suggested teams</h4>

    <IRow>
      <IColumn v-for="suggestion in balancedTeams" md="6">
        <SuggestionCard
          :suggestion="suggestion"
          class="_margin-y:2 suggestion-card"
        />
      </IColumn>
    </IRow>

    <IButton block to="/">
      <IIcon name="fas-chevron-left" class="_margin-right:1/2" /> Back
    </IButton>
  </div>
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
