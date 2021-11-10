import { reactive } from 'vue'

// NOTE AppState is a reactive object to contain app level data
let ElementalFire =
  [
    { name: 'Fireball', damage: 20, longterm: false, longtermDamage: 0, longtermTime: 0, requiredEnergy: 8 },
    { name: 'FireWave', damage: 3, longterm: true, longtermDamage: 3, longtermTime: 3, requiredEnergy: 5 },
    { name: 'Heater', damage: 0, longterm: true, longtermDamage: 2, longtermTime: 20, requiredEnergy: 2 },
  ]
let WeaponType =
  [
    { name: 'Fire', weakness: 'Water', trumps: 'Terra' },
    { name: 'Water', weakness: 'Terra', trumps: 'Fire' },
    { name: 'Terra', weakness: 'Fire', trumps: 'Water' },
    { name: 'Steel', weakness: '', trumps: '' }
  ]
let Fists = {
  name: 'Fists',
  damage: 2,
  durability: 100,
  type: WeaponType.Fire,
  Size: 0
}
let Sword = {
  name: 'Sword',
  damage: 5,
  durability: 4,
  type: WeaponType.Steel,
  Size: 1
}
let BadGuy = {
  health: 100,
  maxHealth: 100,
  name: 'BadGuy',
  weapon: Fists,
  element: ElementalFire
}
export const AppState = reactive({
  user: {},
  account: {},
  target: { BadGuy },
  basicFighterPlayer: {}
})
