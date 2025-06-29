<template>
  <div class="card card-custom p-10 d-flex justify-content-center">
     <div class="blockui"></div>
     <!-- TITLE -->
    <div class="row pb-8">
        <div class="col-xl-9" style="margin-left:auto; margin-right:auto;">
              <h2 class="text-dark font-weight-bold mt-2 mb-2 mr-5 font-weight-bolder">Update Package</h2>
        </div><!-- col-xl-9 -->
    </div> <!-- row -->

    <!-- SHOP INFO -->
      <!--begin::Shop Info-->
            <div class="d-flex align-items-center justify-content-center mb-7">
              <!--begin::Pic-->
              <div style="height:75px;" class="d-flex align-items-center flex-shrink-0 mr-4">
                <div class="d-flex align-items-center symbol-lg-75 ">
                  <img style="width:120px;" :src="getImage(shopInfo.shop.shopInfoId,shopInfo.shop.logo)" alt="image" />
                </div>
              </div>
              <!--end::Pic-->
              <!--begin::Title-->
              <div class="d-flex flex-column">
                <div  class="text-dark font-weight-bold text-hover-primary font-size-h4 mb-0">{{shopInfo.shop.name}}</div>
                <span class="text-muted font-weight-bold">---------</span>
                <span class="font-weight-bold">สถานะ : {{shopInfo.shop.statusInfo}}</span>
                 <span class="text-muted font-weight-bold">{{systemDesc1}}</span>
                 <span class="text-muted font-weight-bold">{{systemDesc2}}</span>
              </div>
              <!--end::Title-->
            </div>
      <!--end::Shop Info-->

    <!-- EIDT FORM -->
     <div class="row">
        <div class="col-xl-9" style="margin-left:auto; margin-right:auto;">

                  <!-- เลือก Status --> 
                    <div class="row pt-10">
                      <!-- Shop Status Info -->
                      <!-- col-xl-6 -->
                      <div class="col-xl-6">
                            <div class="form-group">
                              <label>ใช้งาน / ยังไม่เริ่ม / หยุดไว้ก่อน</label>
                              <b-form-select
                                name="shopStatusInfo"
                                class="form-control form-control-solid form-control-lg"
                                v-model="shopStatusInfo"
                                :state="shopStatusInfoState"
                              >
                                <option value="" selected>-- เลือกว่าทดลองก่อน/ใช้จริง --</option
                                >
                                <option value="active">ใช้งาน</option>
                                <option value="notStart">ยังไม่เริ่ม</option>
                                <option value="expired">หมดอายุ</option>
                                <option value="onHold">หยุดไว้ก่อน</option>
                              </b-form-select>
                            </div> <!-- form-group -->
                      </div> <!-- col-xl-6 -->

                      <!-- Shop Package -->
                      <!-- col-xl-6 -->
                       <div class="col-xl-6">
                            <div class="form-group">
                              <label>Package Size</label>
                              <b-form-select
                                name="Package"
                                class="form-control form-control-solid form-control-lg"
                                v-model="shopPackage"
                                :state="shopPackageState"
                              >
                                <option value="" selected>-- เลือก package ไซส์ S,M,L --</option
                                >
                                <option value="s">ธุรกิจเริ่มต้น (S)</option>
                                <option value="m">ธุรกิจขนาดกลาง (M)</option>
                                <option value="l">ธุรกิจกำลังเติบโต (L)</option>
                              </b-form-select>
                            </div> <!-- form-group -->
                      </div> <!-- col-xl-6 -->

                   
                    </div> <!-- row วันที่เริ่มใช้ package --> 
                <!-- การจ่ายเงิน payment --> 
                  <div class="row d-flex pt-10 pb-10">
                      <!-- Paid -->
                      <div class="col-xl-6 d-flex align-items-center" style=" border-radius: 10px;">
                            
                            <!-- ชำระเงิน (check ถูกเมื่อลูกค้าชำระแล้ว) -->
                            <b-form-checkbox class="bg-light-info px-10 py-4" style="border-radius: 20px;"  id="paid-checkbox" v-model="paid" name="paid-checkbox" size="lg">ชำระเงิน (check ถูกเมื่อลูกค้าชำระแล้ว)</b-form-checkbox>
                      </div> 
                  
                    </div> <!-- row -->


                   


                    <!-- วันที่เริ่ม  PACKAGE --> 
                    <div class="row">
                      <div class="col-xl-6">
                            <div class="form-group">
                              <label>เริ่ม Package</label>
                              <b-form-datepicker
                              class="form-control form-control-solid form-control-lg"
                                id="datepicker-package-start"
                                today-button
                                reset-button
                                close-button
                                locale="th"
                                v-model="packageStart"
                                :state="packageStartState"
                              ></b-form-datepicker>
                            </div> 
                      </div> 
                      <div class="col-xl-6">
                            <div class="form-group">
                              <label>สิ้นสุด Package</label>
                              <b-form-datepicker
                              class="form-control form-control-solid form-control-lg"
                                id="datepicker-package-end"
                                today-button
                                reset-button
                                close-button
                                locale="th"
                                v-model="packageEnd"
                                :state="packageEndState"
                              ></b-form-datepicker>
                            </div> 
                      </div> 
                    </div> 
                    <!-- row วันที่เริ่มใช้ package --> 

                     <!--begin:  Actions -->
                    <div class="d-flex justify-content-between pt-10">
                      <!-- <div class="mr-2">-->
                      <div
                      @click="backToList()"
                        class="btn btn-light-primary font-weight-bold text-uppercase px-9 py-4"
                      >
                        Previous
                      </div>
                      <div>
                        <button
                          v-on:click="submit"
                          class="btn btn-success font-weight-bold text-uppercase px-9 py-4"
                          data-wizard-type="action-submit"
                        >
                          Submit
                        </button>
                        <!-- <div
                          v-on:click="nextStep"
                          class="btn btn-primary font-weight-bold text-uppercase px-9 py-4"
                          v-if="myWizardStep < 3"
                        >
                          Next Step
                        </div> -->
                        
                      </div>
                    </div>
                <!--end:  Actions -->

     </div>
     
    </div>
    <!--end::Dashboard-->
  </div>
</template>

<script>
import { SET_BREADCRUMB } from "@/core/services/store/breadcrumbs.module";
import EngageWidget1 from "@/view/content/widgets/engage/Widget1.vue";
import ListWidget1 from "@/view/alex/Widget1.vue";

import { mapGetters } from "vuex";

import Swal from "sweetalert2";
import axios from "axios";

import shapeFormat from '@/mixins/shapeFormat.js'



export default {
  name: "update-package",
  mixins: [shapeFormat],
  
  data() {
    return {
      shopInfo: {},
      shopName: "",
      shopNameState: null,
      shopDescription: "",
      shopPackage: "",
      shopPackageState: null,
      packageStart: null,
      packageStartState: null,
      packageEnd:  null,
      packageEndState: null,
      trialStart: null,
      trialStartState: null,
      trialEnd:  null,
      trialEndState: null,
      shopCategory: "",
      shopCategoryState: null,
      shopPhone:"",
      shopPhoneState: null,
      shopLine: "",
      shopLineState: null,
      paid: false,
      shopStatusInfo: "",
      shopStatusInfoState : null,
      disableBtn : false,
      systemDesc1: "",
      systemDesc2: ""
    }
  },
   computed: {
    // ...mapGetters(["currentShopCode"])
  },
  async created(){
    this.currentShopCode = this.$route.params.shopCode;
    await this.init();
  },
  mounted() {

    // this.$store.dispatch(SET_BREADCRUMB, [{ title: "Dashboard" }]);
    // this.$store.commit("CHANGE_MENU", 3);
  },
  methods: {

    async init(){
     var url = this.$store.state.common.baseUrl + "/office-api/shop/get-one-shop/" + this.currentShopCode;

    var res1 = null;   
      try {
        res1 = await axios.get(
          url, this.$store.state.auth.apiHeader
        );

        this.shopInfo = res1.data;

      // console.log("this.shopInfo >>> ",this.shopInfo);

        //*** params 
        this.shopPackage = this.shopInfo.shop.package;
        this.paid = this.shopInfo.package.paid;
        this.shopStatusInfo = this.shopInfo.shop.statusInfo;
        this.packageStart = this.shopInfo.package.startDateTime;
        this.packageEnd = this.shopInfo.package.endDateTime;



        //*** system describes */

        var paid_desc = this.shopInfo.package.paid === true?'ชำระเงินแล้ว':'ยังไม่ชำระเงิน';
        var duration = this.shopInfo.package.startDateTime === null || this.shopInfo.package.endDateTime === null ? 'ไม่ได้กำหนด' : "ตั้งแต่ " + this.format_ddmmyyy(this.shopInfo.package.startDateTime) + " ถึง " + this.format_ddmmyyy(this.shopInfo.package.endDateTime);

        this.systemDesc1 = "แพ็คเกจปัจจุบันคือครั้งที่ " + this.shopInfo.package.numberOfUse + " ระยะเวลา " + duration + "\n" 
        this.systemDesc2 = "Packge size : " + this.shopInfo.shop.package + " " + paid_desc;


      } catch (error) {
        // console.log(error);
          Swal.fire({
            title: "",
            text: "ดึงข้อมูลไม่สำเร็จ",
            icon: "warning",
            confirmButtonClass: "btn btn-warning"
          });
        
      }
   },

    checkAllRequired(){
     this.shopPackageStateCheck();
     this.shopStatusInfoStateCheck();
     this.packageStartCheck();
     this.packageEndCheck();
   },

    shopPackageStateCheck(){
      this.shopPackageState = this.validate_select(this.shopPackage);

    },

    shopStatusInfoStateCheck(){
      this.shopStatusInfoState = this.validate_select(this.shopStatusInfo);
      // console.log("shopStatusInfoStateCheck >>> ",this.shopStatusInfoState , this.shopStatusInfo);

    },
    packageStartCheck(){
      this.packageStartState = this.validate_date(this.packageStart);
    },

    packageEndCheck(){
      this.packageEndState = this.validate_date(this.packageEnd);
    },
    
    validate_date(date){
      if(date === null || date === undefined|| date === ""){
        return false;
      }else{
        return true;
      }
    },
    validate_text_required(textLength, text){
      return (text.length >= textLength && text.length > 0 && text.length !== null) ? true : false;
    },
    validate_select(value){
        if(value !== null && value !== "" && value !== undefined){
          return true;
        }else{
          return false;
        }
      },

    async submit(e) {

      var checkState = false;

      this.checkAllRequired();

      if(this.shopPackageState && this.shopStatusInfoState && this.packageStartState && this.packageEndState){
        checkState = true;
      }

  

      if(checkState === false){
          this.disableBtn = false;
          Swal.fire({
            title: "",
            text: "ยังใส่ข้อมูลไม่ครบถ้วน",
            icon: "warning",
            confirmButtonClass: "btn btn-secondary"
          });
          
          return;
      }

      this.disableBtn = true;

      const data = {
        
        shopCode: this.shopInfo.shop.shopInfoId,
        shopPackage : this.shopPackage,
        shopStatusInfo : this.shopStatusInfo,
        paid: this.paid,
        packageStart: this.formatDate(this.packageStart) ,
        packageEnd: this.formatDate(this.packageEnd),
        // packageStart: this.formatDate(this.packageStart) ,
        // packageEnd: this.formatDate(this.packageEnd),
      }


      var res1 = null;

      var theUrl = this.$store.state.common.baseUrl + "/office-api/shop/update-package";
      try {
        res1 = await axios.post(
          theUrl, data, this.$store.state.auth.apiHeader
        );
      } catch (error) {
        // console.log(error);
          Swal.fire({
            title: "",
            text: "อัพเดตข้อมูลไม่สำเร็จ",
            icon: "warning",
            confirmButtonClass: "btn btn-warning"
          })
        
          ;
        
      }
      

      Swal.fire({
        title: "",
        text: "อัพเดตข้อมูล package ร้อยแล้ว",
        icon: "success",
        confirmButtonClass: "btn btn-secondary"
      })
      .then(result => {
        // console.log("confirm result >>> ",result)
        // if (result.value) {
          this.$router.push("/shop-list")
        // }
      });
      ;

      e.preventDefault();
      
    },
    backToList(){
      this.$router.push("/shop-list");
    }
  },
  watch:{
    shopStatusInfo(){
       this.shopStatusInfoStateCheck();
     },
     shopPackage(){
       this.shopPackageStateCheck();
     },
    packageStart(){
       this.packageStartCheck();

     },
      packageEnd(){
        this.packageEndCheck();

     },
  }
};
</script>
<style lang="scss">
@import "@/assets/sass/pages/wizard/wizard-2.scss";
</style>
<style>
  .grey-border{
    border: 1px #e7e7e7 solid;
    border-radius: 10px;
    padding : 20px;
    margin-top:20px;
  }
</style>