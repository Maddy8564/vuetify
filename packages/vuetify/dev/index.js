import Vue from "vue";
import App from "./App";
import router from "./router";
import vuetify from "./vuetify";
import components from './components';

Vue.config.performance = true;

const vm = new Vue({
  components,
  data: () => ({ isLoaded: document.readyState === "complete" }),
  vuetify,
  router,
  render(h) {
    return this.isLoaded ? h(App) : undefined;
  }
}).$mount("#app");

// Prevent layout jump while waiting for styles
vm.isLoaded ||
  window.addEventListener("load", () => {
    vm.isLoaded = true;
  });
