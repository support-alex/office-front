<template>
      
        <div>
              <!-- see at https://preview.keenthemes.com/metronic/demo1/features/icons/svg.html -->

              <div v-for="(aact, aci) in actionDetail.actions" :key="aci" >
                  <div v-if="cl(aact) === true"  class="btn btn-icon btn-light btn-hover-primary btn-sm mr-1" >
                      <span  @click="storeAction(itemId,aact)" class="svg-icon svg-icon-md svg-icon-primary">
                        <inline-svg
                          :src="concatText('/media/svg/icons', aact.icon)"
                        />
                      </span>
                  </div>
                </div>

      </div>
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
    anItem: {
      type: Object,
    },
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
     cl(aact){
      let finalRes = false;
      let conditionLogic = aact.conditionLogic;


       if (conditionLogic.cond === "in") {

          if (conditionLogic.condList === null || conditionLogic.condList === undefined) return false;

          if(conditionLogic.condList.length <= 0 ) return false;

          finalRes = conditionLogic.condList.filter(y => y === this.anItem.couponStatus);

          if(this.anItem.phone === null || this.anItem.phone === null || this.anItem.phone === "")
            return false;
          
          if (finalRes.length > 0) return true;
          else return false;
          
        }else{
          return false;
        }
      
    },
    storeAction(itemId , aact){

      // let param = {
      //   apiUrl : aact.apiUrl + itemId,
      //   params : aact,

      // };
      aact.itemId = itemId

      this.$store.dispatch(aact.storeAction, aact);
     

    
    },

    concatText(text1, text2){
      return text1 + text2;
    }
  },
};
</script>
