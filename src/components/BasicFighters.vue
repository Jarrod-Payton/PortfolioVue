<template>
  <div class="text-center">
    <h2></h2>
    <button @click="Basic">Basic Weapon Attack</button>
    <button @click="Fireball(target.health)">Fireball</button>
    <button @click="Basic">Punch</button>
  </div>
</template>

<script>
import { computed } from "@vue/reactivity";
import { basicFighterService } from "../services/BasicFighterService";
import { AppState } from "../AppState";
export default {
  setup() {
    return {
      Basic() {
        basicFighterService.Basic();
      },
      Fireball(health) {
        basicFighterService.Fireball(health);
      },
      target: computed(() => AppState.target.BadGuy),
    };
  },
};
</script>

<style scoped>
</style>