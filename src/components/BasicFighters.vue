<template>
  <div>
    <h2>{{ target.health }}</h2>
    <button @click="slap"></button>
  </div>
</template>

<script>
import { computed } from "@vue/reactivity";
import { basicFighterService } from "../services/BasicFighterService";
import { AppState } from "../AppState";
export default {
  setup() {
    return {
      slap() {
        basicFighterService.Slap();
      },
      target: computed(() => AppState.target.BadGuy),
    };
  },
};
</script>

<style scoped>
</style>