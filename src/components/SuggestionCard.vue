<template>
  <ICard>
    <IRow>
      <IColumn xs="5">
        <SuggestionTeam :team="suggestion[0]" />
      </IColumn>
      <IColumn
        xs="2"
        class="_display:flex _align-items:center _justify-content:center"
      >
        <span class="_text:bold _text:lg">VS</span>
      </IColumn>
      <IColumn xs="5">
        <SuggestionTeam opposite :team="suggestion[1]" />
      </IColumn>
    </IRow>

    <template #footer>
      <div class="_clearfix!">
        <IButton
          link
          @click="shareTeams(suggestion)"
          color="light"
          class="_float:right!"
        >
          <IIcon name="fas-share" color="primary" />
        </IButton>
      </div>
    </template>
  </ICard>
</template>

<script setup lang="ts">
import type { Player } from "@/models/Player";
import SuggestionTeam from "./SuggestionTeam.vue";

const props = defineProps<{
  suggestion: any;
}>();

const shareTeams = (suggestion: any) => {
  const teamsText = {
    a: suggestion[0].players.map((p: Player) => p.name).join("\n"),
    b: suggestion[1].players.map((p: Player) => p.name).join("\n"),
  };
  const text = `
        Team A\n${teamsText.a}\n\nTeam B\n${teamsText.b}\n\nGenerated by: ${window.location.href}`;
  navigator.share({
    url: "", //TODO
    text: text,
  });
};
</script>
