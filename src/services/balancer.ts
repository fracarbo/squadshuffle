/*
  target = (somma di tutti i value / 2)
  playersPerTeam = lunghezza playersList / 2
  combinations = tutte le combinazioni di playersPerTeam elementi sulla playersList
  per ogni combinazione
    team.value = somma dei valori dei singoli giocatori
    team.delta = |target - team.value|
  ordino le combinations secondo d in ordine crescente
  mi prendo solo i primi nOfResult risultati
*/
import { orderBy} from 'lodash'
import 'lodash.combinations';
import _ from 'lodash';
import type { Player } from "@/models/Player";

type Team = Player[]

const teamValue = (team: Team) => team.reduce((sum, player) => sum + player.overall, 0)

const otherTeam = (team: Team, playersList: Player[]) => {
  const teamPlayersNames = new Set(team.map(p => p.name))
  const otherTeam = playersList.filter(p => !teamPlayersNames.has(p.name))
  return otherTeam
}

const formatTeam = (team: Team) => {
  return {
    players: team,
    value: teamValue(team)
  }
}

export function balanceTeamsSuggestions(playersList: Player[], nOfResults: number) {
  const target = playersList.reduce((sum, player) => sum + player.overall, 0) / 2
  const playersPerTeam = Math.floor(playersList.length / 2)
  let possibleTeams = _.combinations(playersList, playersPerTeam)
  possibleTeams.forEach((team: any) => {
    team.value = teamValue(team)
    team.delta = Math.abs(team.value - target)
  })
  possibleTeams = orderBy(possibleTeams, "delta").slice(0, nOfResults)
  const teamCouples = possibleTeams.map((team: any) => [formatTeam(team), formatTeam(otherTeam(team, playersList))])
  return teamCouples
}