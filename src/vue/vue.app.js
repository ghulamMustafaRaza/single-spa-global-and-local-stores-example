import Vue from 'vue';
import singleSpaVue from 'single-spa-vue';
import app from './app.vue';
import store from './store';

const vueLifecycles = singleSpaVue({
  Vue,
  appOptions: {
    el: '#vue-app',
    render: (h) => h(app),
    store
  }
});

export const bootstrap = [
  vueLifecycles.bootstrap,
];

export const mount = [
  vueLifecycles.mount,
];

export const unmount = [
  vueLifecycles.unmount,
];
