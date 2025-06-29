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
      <div class="col-xl-12 col-lg-12 ">
        <admin-register></admin-register>
      </div>
      <!-- <div class="col-xl-6 col-lg-6 ">
        <LoginLog></LoginLog>
      </div> -->
    
    </div>
  </div>
</template>

<script>
import { SET_BREADCRUMB } from "@/core/services/store/breadcrumbs.module";
// import EngageWidget1 from "@/view/content/widgets/engage/Widget1.vue";
import ListWidget1 from "@/view/alex/Widget1.vue";
import AdminRegister from "@/view/alex/AdminRegister.vue";



export default {
  name: "dashboard",
  components: {
    // EngageWidget1,
    ListWidget1,
    AdminRegister,
   
  },
  mounted() {

    this.$store.dispatch(SET_BREADCRUMB, [{ title: "Dashboard" }]);
    this.$store.commit("CHANGE_MENU", 2);
  },
  methods: {
   
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