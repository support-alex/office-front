import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "@/core/services/store";
import ApiService from "@/core/services/api.service";
// import MockService from "@/core/mock/mock.service";
// import { VERIFY_AUTH } from "@/core/services/store/auth.module";
// import { RESET_LAYOUT_CONFIG } from "@/core/services/store/config.module";

Vue.config.productionTip = false;

// Global 3rd party plugins
import "popper.js";
import "tooltip.js";
import PerfectScrollbar from "perfect-scrollbar";
window.PerfectScrollbar = PerfectScrollbar;
import ClipboardJS from "clipboard";
window.ClipboardJS = ClipboardJS;

// Vue 3rd party plugins
import i18n from "@/core/plugins/vue-i18n";
import vuetify from "@/core/plugins/vuetify";
import "@/core/plugins/portal-vue";
import "@/core/plugins/bootstrap-vue";
import "@/core/plugins/perfect-scrollbar";
import "@/core/plugins/highlight-js";
import "@/core/plugins/inline-svg";
import "@/core/plugins/apexcharts";
import "@/core/plugins/metronic";
import "@/core/plugins/treeselect";
import "@mdi/font/css/materialdesignicons.css";

// import { VERIFY_AUTH } from "@/core/services/store/auth.module";
// import { RESET_LAYOUT_CONFIG } from "@/core/services/store/config.module";

import VueClipboard from 'vue-clipboard2'
Vue.use(VueClipboard);

// API service init
ApiService.init();


import VueElementLoading from 'vue-element-loading'
Vue.component(VueElementLoading)

// --- ส่วนสำคัญ ---
import GAuth from 'vue-google-oauth2' 
// const gauthOption = {
//   clientId: '753065350883-71sqo61a56gr9gv0b8noc53bc7oe33f1.apps.googleusercontent.com',
//   scope: 'profile email',
//   prompt: 'select_account',
//   ux_mode: 'redirect', // <--- เพิ่มบรรทัดนี้
//   redirect_uri: 'http://localhost:8080' // <--- เพิ่ม URL ที่จะให้ Google Redirect กลับมา
// }

// Vue.use(GAuth, gauthOption)
// --- สิ้นสุดส่วนสำคัญ ---
    

// import Loading from 'vue-loading-overlay';
// // Import stylesheet
// import 'vue-loading-overlay/dist/vue-loading.css';
// // Init plugin
// Vue.use(Loading);

// import VueLoading from 'vue-loading-overlay';
// // import 'vue-loading-overlay/dist/vue-loading.css';
// Vue.use(VueLoading);



// Remove this to disable mock API
// MockService.init();

// router.beforeEach((to, from, next) => {
//   // Ensure we checked auth before each page load.
//   Promise.all([store.dispatch(VERIFY_AUTH)]).then(next);
//   // reset config to initial state
//   store.dispatch(RESET_LAYOUT_CONFIG);

//   // Scroll page to top on every route change
//   // setTimeout(() => {
//   //   window.scrollTo(0, 0);
//   // }, 100);
// });

new Vue({
  router,
  store,
  i18n,
  vuetify,
  render: h => h(App)
}).$mount("#app");
