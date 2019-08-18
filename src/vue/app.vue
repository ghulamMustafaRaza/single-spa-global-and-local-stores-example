<template>
  <div id="vue-app">
    <div v-bind:style="{border: border}">
      <div v-if="showFramework">(built with Vue.js)</div>
      <form id="search">
        <div class="row">
          <div class="input-field col s12">
            <div class="input-field">
              <input name="query" v-model="searchQuery" />
              <label class="active" for="query">Search</label>
            </div>
          </div>
        </div>
      </form>
      <demo-grid :data="gridData" :columns="gridColumns" :filter-key="searchQuery"></demo-grid>
    </div>
  </div>
</template>

<script>
import DemoGrid from "./components/demo-grid";

export default {
  components: {
    "demo-grid": DemoGrid
  },
  data() {
    return {
      showFramework: false,
      border: "",
      searchQuery: "",
      gridColumns: ["name", "power"],
      gridData: [
        { name: "Chuck Norris", power: Infinity },
        { name: "Bruce Lee", power: 9000 },
        { name: "Jackie Chan", power: 7000 },
        { name: "Jet Li", power: 8000 }
      ]
    };
  }
};
</script>

<style>
</style>