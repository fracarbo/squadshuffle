<template>
  <div>
    <IButton
      block
      :disabled="players.length < 3"
      @click="balanceTeams"
      color="success"
      size="lg"
    >
      <IIcon name="fas-balance-scale" color="primary" />

      Balance</IButton
    >

    <section v-if="balancedTeams?.length > 0">
      <h3 class="_margin-y:2">Team suggestions</h3>
      <IRow class="scrolling-wrapper _flex-wrap:nowrap" id="balancedTeams">
        <div v-for="suggestion in balancedTeams" class="suggestion-card">
          <SuggestionCard :suggestion="suggestion" />
        </div>
      </IRow>
    </section>
  </div>
</template>

<script setup lang="ts">
import type { Player } from "@/models/Player";
import { ref } from "vue";
import { balanceTeamsSuggestions } from "@/services/balancer.js";
import SuggestionCard from "./SuggestionCard.vue";

const props = defineProps<{
  players: Player[];
}>();
const maxSuggestions = 5;

const balancedTeams = ref();
const balanceTeams = () => {
  balancedTeams.value = balanceTeamsSuggestions(props.players, maxSuggestions);
};
</script>

<style scoped>
.scrolling-wrapper {
  overflow-x: auto;
  white-space: nowrap; /* Impedisce il ritorno a capo dei contenuti delle carte */
}

.suggestion-card {
  min-width: 400px !important;
  width: 500px !important;
  margin-right: 2rem;
}
</style>
