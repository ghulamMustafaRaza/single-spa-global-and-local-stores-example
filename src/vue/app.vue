<template>
  <div id="vue-app">
    <div v-bind:style="{border: border}">
      <h2>Local store</h2>
      count: {{count}}
      <button @click="increment">increment</button>
      <button @click="decrement">decrement</button>
      <demo-grid :data="gridData" :columns="gridColumns" :filter-key="searchQuery"></demo-grid>
    </div>
  </div>
</template>

<script>
import DemoGrid from "./components/demo-grid";
import { mapState, mapMutations } from "vuex";
export default {
  components: {
    "demo-grid": DemoGrid
  },
  computed: mapState(["count"]),
  methods: mapMutations(["increment", "decrement"]),
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