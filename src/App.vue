<template>
<div id="app">
    <!-- <loading-screen :is-loading="isLoading"></loading-screen> -->
     <!-- <vue-element-loading :active="isLoading" :is-full-screen="true"/> -->
    <router-view></router-view>

</div>
</template>

<style lang="scss">
// 3rd party plugins css
@import "~bootstrap-vue/dist/bootstrap-vue.css";
@import "~perfect-scrollbar/css/perfect-scrollbar.css";
@import "~socicon/css/socicon.css";
@import "~animate.css";
@import "~@fortawesome/fontawesome-free/css/all.css";
@import "~line-awesome/dist/line-awesome/css/line-awesome.css";
@import "assets/plugins/flaticon/flaticon.css";
@import "assets/plugins/flaticon2/flaticon.css";
@import "assets/plugins/keenthemes-icons/font/ki.css";

// Main demo style scss
@import "assets/sass/style.vue";
// Check documentation for RTL css
// Update HTML with RTL attribute at public/index.html
/*@import "assets/css/style.vue.rtl";*/
</style>

<script>
import { OVERRIDE_LAYOUT_CONFIG } from "@/core/services/store/config.module";
// import LoadingScreen from  "@/view/alex/LoadingScreen";
import VueElementLoading from 'vue-element-loading'

export default {
  name: "Alex-Office",
  data() {
    return {
      // isLoading: false,
      isActive: true
    }
  },
  computed: {
    isLoading:{
      get(){
        return this.$store.getters["common/loadingActive"];
      },
      set(){

      }
    }

  },
  mounted() {
    /**
     * this is to override the layout config using saved data from localStorage
     * remove this to use config only from static json (@/core/config/layout.config.json)
     */
    this.$store.dispatch(OVERRIDE_LAYOUT_CONFIG);

    setTimeout(() => {
      this.isLoading = false
    }, 2000)
  },
  components:{
    // LoadingScreen,
    // VueElementLoading
  }
};
</script>
