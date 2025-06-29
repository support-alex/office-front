<template>
  <b-dropdown
    size="sm"
    variant="link"
    toggle-class="custom-v-dropdown btn btn-clean btn-hover-light-primary btn-sm btn-icon"
    no-caret
    right
    no-flip
  >
    <template v-slot:button-content>
      <slot></slot>
    </template>
    <!--begin::Navigation-->
    <div class="navi navi-hover min-w-md-250px">
      
      <b-dropdown-text @click="updateTrial(code)" tag="div" style="cursor:pointer;" class="font-weight-bold navi-item">
        <div class="navi-link">
          <!-- <i class="flaticon2-drop"></i> -->
          <span class="navi-text pl-4">
               Update Trial
          </span>
        </div>
      </b-dropdown-text>
      <b-dropdown-text @click="updatePackage(code)" tag="div" style="cursor:pointer;" class="font-weight-bold navi-item">
        <div class="navi-link">
          <!-- <i class="flaticon2-drop"></i> -->
          <span class="navi-text pl-4">
               Update Package
          </span>
        </div>
      </b-dropdown-text>
      <b-dropdown-text @click="renewPackage(code)" tag="div" style="cursor:pointer;" class="font-weight-bold navi-item">
       <div class="navi-link">
          <!-- <i class="flaticon2-drop"></i> -->
          <span class="navi-text pl-4">
               Renew Package
          </span>
        </div>
      </b-dropdown-text>
    
    </div>
    <!--end::Navigation-->
  </b-dropdown>
</template>

<style lang="scss">
.custom-v-dropdown {
  &.dropdown-toggle {
    padding: 0;
    &:hover {
      text-decoration: none;
    }

    &.dropdown-toggle-no-caret {
      &:after {
        content: none;
      }
    }
  }

  &.dropdown-menu {
    margin: 0;
    padding: 0;
    outline: none;
    .b-dropdown-text {
      padding: 0;
    }
  }
}
</style>

<script>
import Swal from "sweetalert2";

export default {
  name: "dropdown-update-package",
  components: {},
  props:{
    code: {
      type: String,
      default: '',
    },
  },
  mounted() {
    // console.log("shop code >>> ",this.code);
  },
  methods: {
    updateTrial(code){
      if(code === null || code === undefined || code === ''){
        Swal.fire({
            title: "ร้านค้าไม่มีรหัสร้านค้า",
            // text: "ร้านค้าไม่มีรหัสร้านค้า",
            icon: "warning",
            confirmButtonClass: "btn btn-warning"
          });
      }

      this.$store.commit("UPDATE_CURRENT_SHOP_CODE",code);
      var pathto = "/update-trial/"+code;
      this.$router.push(pathto);


    },
    updatePackage(code){
      if(code === null || code === undefined || code === ''){
        Swal.fire({
            title: "ร้านค้าไม่มีรหัสร้านค้า",
            // text: "ร้านค้าไม่มีรหัสร้านค้า",
            icon: "warning",
            confirmButtonClass: "btn btn-warning"
          });
      }

      this.$store.commit("UPDATE_CURRENT_SHOP_CODE",code);
      var pathto = "/update-package/"+code;
      this.$router.push(pathto);
    },
    renewPackage(code){
        if(code === null || code === undefined || code === ''){
        Swal.fire({
            title: "ร้านค้าไม่มีรหัสร้านค้า",
            // text: "ร้านค้าไม่มีรหัสร้านค้า",
            icon: "warning",
            confirmButtonClass: "btn btn-warning"
          });
      }

      this.$store.commit("UPDATE_CURRENT_SHOP_CODE",code);
      var pathto = "/renew-package/"+code;
      this.$router.push(pathto);
    }
  },
};
</script>
