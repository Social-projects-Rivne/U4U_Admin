<template>
  <div class="header-search">
    <input
      type="text"
      class="header-input"
      placeholder="Search..."
      v-model="search"
      @keyup.enter="submit"
      id="search"
    />
    <button for="search" class="header-button" @click="submit">
      <font-awesome-icon icon="search" />search
    </button>
    <button class="header-button" @click="clear">clear</button>
  </div>
</template>

<script>
import { EventBus } from "../../../event-bus.js";
export default {
  name: "app-search",
  data() {
    return {
      search: ""
    };
  },
  methods: {
    submit() {
      EventBus.$emit("inputData", this.search);
    },
    clear() {
      this.search = "";
      EventBus.$emit("inputData", this.search);
    }
  }
};
</script>

<style lang="scss" scoped>
@import "dashboard.scss";
</style>