<template>
  <IRow>
    <IColumn>
      <IBadge color="primary" class="_margin-bottom:2!"
        >{{ team.value }}
      </IBadge>
    </IColumn>
  </IRow>
  <IListGroup :border="false" size="md">
    <IListGoupItem v-for="player in team.players" class="_margin-bottom:1!">
      <IIcon name="fas-user" color="primary" />
      {{ player.name }}
    </IListGoupItem>
  </IListGroup>
</template>

<script setup lang="ts">
import type { Player } from "@/models/Player";

const props = defineProps<{
  team: {
    value: number;
    players: Player[];
  };
}>();
</script>

<style scoped></style>
