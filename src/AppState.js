import { reactive } from 'vue'

// NOTE AppState is a reactive object to contain app level data

let Fists = {
  name: 'Fists',
  damage: 2,
  durability: 100
}

let BadGuy = {
  health: 100,
  maxHealth: 100,
  name: 'BadGuy',
  weapon: Fists
}
export const AppState = reactive({
  user: {},
  account: {},
  target: { BadGuy },
  basicFighterPlayer: {}
})
