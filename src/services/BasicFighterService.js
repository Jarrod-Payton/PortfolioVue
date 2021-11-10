import { AppState } from "../AppState"
import { logger } from "../utils/Logger"
import Pop from "../utils/Pop"

class BasicFighterService {
  Basic() {
    let target = AppState.target.BadGuy
    if (target.weapon.durability <= 0) {
      target.health -= target.weapon.damage
      target.weapon.durability--
    }
    else {
      Pop.toast(`No Durability on your ${target.weapon.name}`)
    }
  }

  Fireball(health) {
    let target = AppState.target.BadGuy
    if (health >= target.maxHealth / 2) {

    }
  }
}

export const basicFighterService = new BasicFighterService()