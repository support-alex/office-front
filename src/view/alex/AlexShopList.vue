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

     <div class="row">
        <div class="col-xl-12">
          <ShopListTable></ShopListTable>
        </div>
     
    </div>
    <!--end::Dashboard-->
  </div>
</template>

<script>
import { SET_BREADCRUMB } from "@/core/services/store/breadcrumbs.module";
import EngageWidget1 from "@/view/content/widgets/engage/Widget1.vue";
import ListWidget1 from "@/view/alex/Widget1.vue";


import ShopListTable from "@/view/alex/AlexShopListTable.vue";
import Timeline1 from "@/view/alex/Timeline1.vue";
import LoginLog from "@/view/alex/LoginLog.vue";

export default {
  name: "dashboard",
  components: {
    
    ListWidget1,
    ShopListTable
   
  },
  mounted() {

    this.$store.dispatch(SET_BREADCRUMB, [{ title: "Dashboard" }]);
    this.$store.commit("CHANGE_MENU", 3);
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