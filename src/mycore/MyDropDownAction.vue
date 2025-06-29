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
      
      <b-dropdown-text v-for="(action, aci) in actionDetail.actions" :key="aci"   tag="div" style="cursor:pointer;" class="font-weight-bold navi-item">
        <div  class="navi-link" @click="storeAction(itemId,action)" >
          <!-- <i class="flaticon2-drop"></i> -->
          <span  class="svg-icon svg-icon-md svg-icon-primary">
                        <inline-svg
                          :src="concatText('/media/svg/icons', action.icon)"
                        />
          </span>
          <span class="navi-text pl-4 bolder">
              {{action.display}}
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
  name: "dropdown-action",
  components: {},
  props:{
    itemId: {
      type: String,
      default: '',
    },
    actionDetail: {
      type: Object
    },
    code: {
      type: String,
      default: '',
    },
  },
  mounted() {
    // console.log("actionDetail>>> ",this.actionDetail);
  },
  methods: {
    storeAction(itemId , aact){
      
      let p = aact.action + itemId;
      // console.log("All ACTION", aact);
      // console.log("All path", p);
      // console.log("All itemId", itemId);


      if(aact.actionType === "anotherPage")
      { 
        // let path = aact.action + itemId;
        this.$router.push(p);
      }else{
        aact.itemId = itemId
        this.$store.dispatch(aact.storeAction, aact);
      }
        
     

    
    },

    concatText(text1, text2){
      return text1 + text2;
    }
  },
};
</script>
