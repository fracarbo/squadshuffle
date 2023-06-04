<template>
  <template v-if="props.opposite">
    <IRow>
      <IColumn class="_clearfix">
        <IBadge color="primary" size="lg" class="_float:right _margin-bottom:2!"
          >{{ team.value }}
        </IBadge>
      </IColumn>
    </IRow>
    <IListGroup :border="false" size="md">
      <IListGroupItem v-for="player in team.players" class="_clearfix">
        <div class="_float:right">
          {{ player.name }}
          <IIcon name="fas-user" color="primary" />
        </div>
      </IListGroupItem>
    </IListGroup>
  </template>
  <template v-else>
    <IRow>
      <IColumn>
        <IBadge color="primary" size="lg" class="_margin-bottom:2!"
          >{{ team.value }}
        </IBadge>
      </IColumn>
    </IRow>
    <IListGroup :border="false" size="md">
      <IListGroupItem v-for="player in team.players">
        <IIcon name="fas-user" color="primary" />
        {{ player.name }}
      </IListGroupItem>
    </IListGroup>
  </template>
</template>

<script setup lang="ts">
import type { Player } from "@/models/Player";

const props = defineProps<{
  team: {
    value: number;
    players: Player[];
  };
  opposite?: boolean;
}>();
</script>

<style scoped></style>
