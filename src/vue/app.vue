<template>
  <div id="vue-app">
    <div>
      <h5>Local store</h5>
      count: {{count}}
      <button @click="increment">increment</button>
      <button @click="decrement">decrement</button>
      <GlobalStoreProvider
        :mapDispatchToProps="mapDispatchToProps"
        :mapStateToProps="mapStateToProps"
      >
        <template slot-scope="{ countGlobal, actions }">
          <div>
            <h5>Global store</h5>
            count: {{countGlobal}}
            <button @click="actions.incrementGlobal">increment</button>
            <button @click="actions.decrementGlobal">decrement</button>
          </div>
        </template>
      </GlobalStoreProvider>
      <!-- <demo-grid :data="gridData" :columns="gridColumns" :filter-key="searchQuery"></demo-grid> -->
    </div>
  </div>
</template>

<script>
import Provider from "vuejs-redux";
import { bindActionCreators } from "redux";
import {
  increment as incrementGlobal,
  decrement as decrementGlobal
} from "globalStore";
import GlobalStoreProvider from "globalStore/vueBindings";

import DemoGrid from "./components/demo-grid";
import { mapState, mapMutations } from "vuex";
export default {
  components: {
    "demo-grid": DemoGrid,
    GlobalStoreProvider
  },
  computed: mapState(["count"]),
  methods: {
    ...mapMutations(["increment", "decrement"]),
    mapStateToProps(state) {
      return { countGlobal: state.count };
    },
    mapDispatchToProps(dispatch) {
      return {
        actions: bindActionCreators(
          { incrementGlobal, decrementGlobal },
          dispatch
        )
      };
    }
  },
  data() {
    return {
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