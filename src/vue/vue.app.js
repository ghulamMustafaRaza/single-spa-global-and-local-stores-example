import Vue from 'vue/dist/vue.min.js';
import singleSpaVue from 'single-spa-vue';
import app from './app.vue';
import { showFrameworkObservable, getBorder } from 'src/common/colored-border.js';

const vueLifecycles = singleSpaVue({
  Vue,
  appOptions: {
    el: '#vue-app',
    template: `<app />`,
    components: {
      "app": app
    },
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
