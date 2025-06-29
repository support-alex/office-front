<template>
  <div>
    <!--begin::Dashboard-->
      <div class="row ">
        <div class="col-xl-8">
          <ListWidget1></ListWidget1>
        </div>
      <div class="col-xl-4">
        <!-- <EngageWidget1></EngageWidget1> -->
      </div>
    </div>

     <div class="row ">
      <div class="col-xl-6 col-lg-6 ">
        <Timeline1></Timeline1>
      </div>
      <div class="col-xl-6 col-lg-6 ">
        <LoginLog></LoginLog>
      </div>
    
    </div>
  </div>
</template>

<script>
import { SET_BREADCRUMB } from "@/core/services/store/breadcrumbs.module";
// import AdvancedTableWidget2 from "@/view/content/widgets/advance-table/Widget2.vue";
import EngageWidget1 from "@/view/content/widgets/engage/Widget1.vue";
import ListWidget1 from "@/view/alex/Widget1.vue";
// import ListWidget2 from "@/view/content/widgets/list/Widget2.vue";
// import ListWidget3 from "@/view/content/widgets/list/Widget3.vue";
// import ListWidget5 from "@/view/content/widgets/list/Widget5.vue";
// import ListWidget8 from "@/view/content/widgets/list/Widget8.vue";
// import ListWidget10 from "@/view/content/widgets/list/Widget10.vue";
// import ListWidget11 from "@/view/content/widgets/list/Widget11.vue";
// import ListWidget12 from "@/view/content/widgets/list/Widget12.vue";

import ListApp from "@/view/alex/ListApp.vue";
import Timeline1 from "@/view/alex/Timeline1.vue";
import LoginLog from "@/view/alex/LoginLog.vue";

export default {
  name: "dashboard",
  components: {
    Timeline1,
    LoginLog,
    // AdvancedTableWidget2,
    // EngageWidget1,
    ListWidget1,
    // ListApp
    // ListWidget2,
    // ListWidget3,
    // ListWidget5,
    // ListWidget8,
    // ListWidget10,
    // ListWidget11,
    // ListWidget12
  },
  mounted() {

    this.$store.dispatch(SET_BREADCRUMB, [{ title: "Dashboard" }]);
    this.$store.commit("CHANGE_MENU", 1);
  },
  methods: {
    setActiveTab1(event) {
      this.tabIndex = this.setActiveTab(event);
    },
    setActiveTab2(event) {
      this.tabIndex2 = this.setActiveTab(event);
    },
    /**
     * Set current active on click
     * @param event
     */
    setActiveTab(event) {
      // get all tab links
      const tab = event.target.closest('[role="tablist"]');
      const links = tab.querySelectorAll(".nav-link");
      // remove active tab links
      for (let i = 0; i < links.length; i++) {
        links[i].classList.remove("active");
      }

      // set current active tab
      event.target.classList.add("active");

      // set clicked tab index to bootstrap tab
      return parseInt(event.target.getAttribute("data-tab"));
    }
  }
};
</script>

<style>
  .grey-border{
    border: 1px #e7e7e7 solid;
    border-radius: 10px;
    padding : 20px;
    margin-top:20px;
  }
</style>