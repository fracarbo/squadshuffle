import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import type { Player } from '@/models/Player'
import type { PlayerSelectable } from '@/models/PlayerSelectable'
import { useStorage } from '@vueuse/core'

export const usePlayersStore = defineStore('players', () => {
  const players = useStorage<PlayerSelectable[]>('players', [])

  const selectedPlayers = computed(() => players.value.filter((p) => p.selected));

  const addPlayer = (newPlayer: Player) => {
    if(exists(newPlayer.name)) {
      throw new Error('Player already exists')
    }
    players.value.push({ ...newPlayer, selected: true });
  };
  
  const deletePlayer = (toDelete: Player) => {
    players.value = players.value.filter((p: Player) => p.name !== toDelete.name);
  };

  const exists = (playerName: string): boolean => {
    return Boolean(players.value.find((p: PlayerSelectable) => p.name === playerName))
  }

  return { players, selectedPlayers, addPlayer, deletePlayer, exists }
})
