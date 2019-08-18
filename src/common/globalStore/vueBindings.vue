<template>
  <Provider
    :mapDispatchToProps="mapDispatchToProps"
    :mapStateToProps="mapStateToProps"
    :store="store"
  >
    <template #default="props">
      <slot v-bind="props"></slot>
    </template>
  </Provider>
</template>

<script>
import { store } from "./index";
import Provider from "vuejs-redux";

export default {
  props: ["mapDispatchToProps", "mapStateToProps"],

  components: {
    Provider
  },

  data: () => ({
    store
  })
};
</script>
