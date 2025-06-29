<template>
  <div class="card card-custom">
    <div class="blockui"></div>
    <div class="card-body p-0">
      <!--begin: Wizard-->
      <div
        class="wizard wizard-2"
        id="kt_wizard_v2"
        data-wizard-state="step-first"
        data-wizard-clickable="true"
      >
        <!--begin: Wizard Nav -->
        <div class="wizard-nav border-right py-8 px-8 py-lg-20 px-lg-10">
          <div class="wizard-steps">
            <div
              class="wizard-step"
              data-wizard-type="step"
              data-wizard-state="current"
            >
              <div class="wizard-wrapper">
                <div class="wizard-icon">
                  <span class="svg-icon svg-icon-2x">
                    <inline-svg src="media/svg/icons/General/User.svg" />
                  </span>
                </div>
                <div class="wizard-label">
                  <h3 class="wizard-title">
                    Account Settings
                  </h3>
                  <div class="wizard-desc">
                    ข้อมูลบัญชีของลูกค้า
                  </div>
                </div>
              </div>
            </div>
            <div class="wizard-step" data-wizard-type="step">
              <div class="wizard-wrapper">
                <div class="wizard-icon">
                  <span class="svg-icon svg-icon-2x">
                    <inline-svg src="media/svg/icons/Home/Door-open.svg" />
                  </span>
                </div>
                <div class="wizard-label">
                  <h3 class="wizard-title">
                    Shop Information
                  </h3>
                  <div class="wizard-desc">
                    ข้อมูลร้านค้า
                  </div>
                </div>
              </div>
            </div>
            <div class="wizard-step" data-wizard-type="step"  >
              <div class="wizard-wrapper">
                <div class="wizard-icon">
                  <span class="svg-icon svg-icon-2x">
                    <inline-svg src="media/svg/icons/General/Like.svg" />
                  </span>
                </div>
                <div class="wizard-label">
                  <h3 class="wizard-title">
                    Review and Submit
                  </h3>
                  <div class="wizard-desc">
                    ข้อมูลทั้งหมดและส่งข้อมูลเพื่อสร้าง account
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!--end: Wizard Nav -->

        <!--begin: Wizard Body -->
        <div class="wizard-body py-8 px-8 py-lg-20 px-lg-10">
          <!--begin: Wizard Form-->
          <div class="row">
            <div class="offset-xxl-2 col-xxl-8">
              <form class="form" id="kt_form">
                <!--begin: Wizard Step 1-->
                <div
                  class="pb-5"
                  data-wizard-type="step-content"
                  data-wizard-state="current"
                >
                  <h4 class="mb-10 font-weight-bold text-dark">
                    Enter your Account Details
                  </h4>
                  <div class="form-group">
                    <label>Username</label>
                    <b-form-input
                      type="text"
                      class="form-control form-control-solid form-control-lg"
                      name="username"
                      placeholder="example@email.com"
                      v-model="username"
                      :state="usernameState"
                      aria-describedby="input-username-help"
                      @blur="usernameCheck()"
                    />
                     <b-form-invalid-feedback id="input-username-help">
                      ใส่ username เป็น email เท่านั้น
                    </b-form-invalid-feedback>
                    <span class="form-text text-muted"
                      >ใส่ username ของลูกค้า (ใช้ email เท่านั้น)</span
                    >
                  </div>
                  <div class="form-group">
                    <label>Password</label>
                    <b-form-input
                      type="password"
                      class="form-control form-control-solid form-control-lg"
                      name="password"
                      placeholder="**********"
                      v-model="password"
                      :state="passwordState"
                      aria-describedby="input-password-help"
                      @blur="passwordCheck()"
                    />
                    <b-form-invalid-feedback id="input-password-help">
                      password อย่างน้อย 6 ตัวอักษร
                    </b-form-invalid-feedback>
                          
                    <span class="form-text text-muted"
                      >ใส่ password ของลูกค้า</span
                    >
                  </div>

                </div>
                <!--end: Wizard Step 1-->

               

                <!--begin: ข้อมูลหน้าร้านของลูกค้า -->
                <div class="pb-5" data-wizard-type="step-content">
                  <h4 class="mb-10 font-weight-bold text-dark">
                    ข้อมูลหน้าร้านของลูกค้า
                  </h4>
                 <div class="row">
                      <div class="col-xl-12">
                          <div class="form-group">
                            <label>ชื่อร้าน</label>
                            <b-form-input
                              type="text"
                              class="form-control form-control-solid form-control-lg"
                              name="shopName"
                              placeholder="Alice Shop"
                              v-model="shopName"
                              :state="shopNameState"
                              aria-describedby="input-shopName-help"
                              @blur="shopNameStateCheck()"
                            />
                            <b-form-invalid-feedback id="input-shopName-help">
                              กรุณาใส่ชื่อร้าน
                            </b-form-invalid-feedback>
                          
                          </div> <!-- form-group -->
                      </div> <!-- col-xl-12 -->
                      <div class="col-xl-12">
                          <div class="form-group">
                            <label>คำอธิบาย</label>
                            <input
                              type="text"
                              class="form-control form-control-solid form-control-lg"
                              name="shopDescription"
                              placeholder="ร้าน alice shop ร้าน demo สำหรับลูกค้า"
                              v-model="shopDescription"
                            />
                          
                          </div> <!-- form-group -->
                      </div> <!-- col-xl-12 -->
                  </div> <!-- row -->

                   <div class="row">
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

                      <div class="col-xl-6">
                            <div class="form-group">
                              <label>ประเภทร้าน</label>
                              <b-form-select
                                name="shopCategory"
                                class="form-control form-control-solid form-control-lg"
                                v-model="shopCategory"
                                :state="shopCategoryState"
                              >
                                <option value="" selected>-- เลือกประเภทของร้าน --</option
                                >
                                <option value="เสื้อผ้าแบรนด์">เสื้อผ้าแบรนด์</option>
                                <option value="ชุดราตรี">ชุดราตรี</option>
                                <option value="ร้านชุดแต่งงาน">ร้านชุดแต่งงาน</option>
                                <option value="ร้านชุดสูท">ร้านชุดสูท</option>
                                <option value="ร้านชุดกันหนาว">ร้านชุดกันหนาว</option>
                                <option value="ชุดไทย">ชุดไทย</option>
                              </b-form-select>
                            </div> <!-- form-group -->
                      </div> <!-- col-xl-6 -->
                  </div> <!-- row -->

                   <!-- ติดต่อ --> 
                  <div class="row">
                      <div class="col-xl-6">
                          <div class="form-group">
                            <label>เบอร์โทรร้าน</label>
                            <b-form-input
                              type="text"
                              class="form-control form-control-solid form-control-lg"
                              name="shopPhone"
                              placeholder="0899999999"
                              v-model="shopPhone"
                              aria-describedby="input-shopPhone-help"
                              @blur="shopPhoneStateCheck()"
                            />
                            <!-- This will only be shown if the preceding input has an invalid state -->
                            <!-- <b-form-invalid-feedback id="input-shopPhone-help">
                              เบอร์โทรศัพท์อย่างน้อย 9 ตัว 
                            </b-form-invalid-feedback> -->
                            <span class="form-text text-muted">
                              ตัวเลข 10 ตัวสำหรับเบอร์มือถือ
                            </span>
                          </div> <!-- form-group -->
                      </div> <!-- col-xl-6 -->

                      <div class="col-xl-6">
                           <div class="form-group">
                            <label>ไลน์ร้าน</label>
                            <b-form-input
                              type="text"
                              class="form-control form-control-solid form-control-lg"
                              name="shopLine"
                              placeholder="@AliceShop"
                              v-model="shopLine"
                              aria-describedby="input-shopLine-help"
                              @blur="shopLineStateCheck()"
                            />
                            <!-- <b-form-invalid-feedback id="input-shopLine-help">
                              ใส่ตัวอักษรอย่างน้อย 3 ตัว 
                            </b-form-invalid-feedback> -->
                            <span class="form-text text-muted">
                              ไลน์ของร้านลูกค้า
                            </span>
                          </div> <!-- form-group -->
                      </div> <!-- col-xl-6 -->
                  </div> <!-- row -->

                  <div class="row">
                    <div class="col-xl-6">

                    </div>
                  </div>
                 
                  <!-- วันที่เริ่ม  TRIAL --> 
                  <div class="row">
                      <div class="col-xl-6">
                            <div class="form-group">
                              <label>เริ่มทดลอง</label>
                              <b-form-datepicker
                              class="form-control form-control-solid form-control-lg"
                                id="datepicker-trial-start"
                                today-button
                                reset-button
                                close-button
                                locale="th"
                                v-model="trialStart"
                                :state="trialStartState"
                              ></b-form-datepicker>
                            </div> <!-- form-group -->
                      </div> <!-- col-xl-6 -->
                      <div class="col-xl-6">
                            <div class="form-group">
                              <label>สิ้นสุด</label>
                              <b-form-datepicker
                              class="form-control form-control-solid form-control-lg"
                                id="datepicker-trial-end"
                                today-button
                                reset-button
                                close-button
                                locale="th"
                                v-model="trialEnd"
                                :state="trialEndState"
                              ></b-form-datepicker>
                            </div> <!-- form-group -->
                      </div> <!-- col-xl-6 -->
                    </div> <!-- row -->


                    <!-- การชำระเงิน --> 
                    <div class="row pt-10 pb-10">
                      <div class="col-xl-6 d-flex align-items-center" style=" border-radius: 10px;">
                            <!-- <b-form-checkbox
                              id="paid-checkbox"
                              v-model="paid"
                              name="paid-checkbox"
                              
                            >
                              ชำระเงิน (check ถูกเมื่อลูกค้าชำระแล้ว)
                            </b-form-checkbox> -->
                            <b-form-checkbox class="bg-light-info px-10 py-4" style="border-radius: 20px;"  id="paid-checkbox" v-model="paid" name="paid-checkbox" size="lg">ชำระเงิน (check ถูกเมื่อลูกค้าชำระแล้ว)</b-form-checkbox>
                      </div> <!-- col-xl-6 -->
                      <div class="col-xl-6">
                            <div class="form-group">
                              <label>ทดลองก่อน/ใช้จริง</label>
                              <b-form-select
                                name="shopStatusInfo"
                                class="form-control form-control-solid form-control-lg"
                                v-model="shopStatusInfo"
                                :state="shopStatusInfoState"
                              >
                                <option value="" selected>-- เลือกว่าทดลองก่อน/ใช้จริง --</option
                                >
                                <option value="trial">ทดลองก่อน</option>
                                <option value="active">ใช้จริง</option>
                                <option value="notStart">ยังไม่เริ่ม</option>
                              </b-form-select>
                            </div> <!-- form-group -->
                      </div> <!-- col-xl-6 -->

                   
                    </div> <!-- row วันที่เริ่มใช้ package --> 


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
                            </div> <!-- form-group -->
                      </div> <!-- col-xl-6 -->
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
                            </div> <!-- form-group -->
                      </div> <!-- col-xl-6 -->
                    </div> <!-- row วันที่เริ่มใช้ package --> 

                </div>
                <!--end: ข้อมูลหน้าร้านของลูกค้า-->

       
               
                <!--begin: Wizard Step 6-->
                <div class="pb-5" data-wizard-type="step-content">
                  <h4 class="mb-10 font-weight-bold text-dark">
                    Review your Details and Submit
                  </h4>
                  <div class="border-bottom mb-5 pb-5">
                    <div class="font-weight-bold mb-3">
                      <b>Account Details:</b>
                    </div>
                    <div class="line-height-md">
                      <!-- John Wick
                      <br />
                      Phone: +61412345678 <br /> -->
                      Email: {{username}}
                    </div>
                  </div>
                  <div class="border-bottom mb-5 pb-5">
                    <div class="font-weight-bold mb-3">
                      <b>Customer's shop details:</b>
                    </div>
                    <div class="line-height-md">
                      <b>ชื่อร้าน :</b> {{shopName}}
                      <br />
                      <b>คำอธิบาย :</b> {{shopDescription}} 
                      <br />
                      <b>Package :</b> {{shopPackage}} 
                       <br />
                      <b>ประเภทร้าน :</b> {{shopCategory}} 
                      <br />
                      <b>เบอร์โทรร้าน :</b> {{shopPhone}} 
                      <br />
                      <b>ไลน์ร้าน :</b> {{shopLine}} 
                    </div>
                  </div>


                  <div class="border-bottom mb-5 pb-5">
                    <div class="font-weight-bold mb-3">
                      <b>ข้อมูลการใช้งาน:</b>
                    </div>
                    <div class="line-height-md">
                      <b>การจ่ายเงิน :</b> {{payment(paid)}}  
                      <br />
                      <b>ลูกค้าต้องการ :</b> {{trialOrProduction(shopStatusInfo)}}  
                      <br />
                      <b>วันทดลอง :</b> {{formatAlphabet(trialStart)}} ~ {{formatAlphabet(trialEnd)}}
                      <br />
                      <b>วันเริ่ม Package :</b> {{formatAlphabet(packageStart)}} ~ {{formatAlphabet(packageEnd)}}
                    </div>
                  </div>
                </div>
                <!--end: Wizard Step 2-->

                <!--begin: Wizard Actions -->
                <div class="d-flex justify-content-between pt-10">
                  <div class="mr-2">
                    <div
                    v-if="myWizardStep === 2 || myWizardStep === 3"
                      class="btn btn-light-primary font-weight-bold text-uppercase px-9 py-4"
                      v-on:click="previousStep"
                    >
                      Previous
                    </div>
                  </div>
                  <div>
                    <button
                      v-on:click="submit"
                      class="btn btn-success font-weight-bold text-uppercase px-9 py-4"
                      data-wizard-type="action-submit"
                    >
                      Submit
                    </button>
                    <div
                      v-on:click="nextStep"
                      class="btn btn-primary font-weight-bold text-uppercase px-9 py-4"
                      v-if="myWizardStep < 3"
                    >
                      Next Step
                    </div>
                    
                  </div>
                </div>
                <!--end: Wizard Actions -->
              </form>
            </div>
            <!--end: Wizard-->
          </div>
        </div>
        <!--end: Wizard Body -->
      </div>
      <!--end: Wizard-->
    </div>
  </div>
</template>

<style lang="scss">
@import "@/assets/sass/pages/wizard/wizard-2.scss";
</style>

<script>
import { SET_BREADCRUMB } from "@/core/services/store/breadcrumbs.module";
import KTUtil from "@/assets/js/components/util";
import KTWizard from "@/assets/js/components/wizard";
import Swal from "sweetalert2";
import axios from "axios";

import shapeFormat from '@/mixins/shapeFormat.js'

export default {
  name: "Wizard-2",
  mixins: [shapeFormat],
  data() {
    return {
      myWizard: null,
      myWizardStep: 1,
      username: "",
      usernameState: null,
      password: "",
      passwordState: null,
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

    }
  },
  created() {
    // this.packageEnd = this.addDay(new Date(this.packageStart), 7);
  },
  computed: {
    //  shopPhoneState() {
    //    return this.shopPhone.length > 10 ? true : false
    //  }
   },
   component:{

   },
   watch:{
     shopPhone(){
       this.shopPhoneStateCheck();
     },
     shopLine(){
       this.shopLineState = this.validate_text_required(3,this.shopLine);
      //  console.log("this.shopLine >>> ",this.shopLine);
      //  console.log("this.shopLineState >>> ",this.shopLineState);

     },
     shopName(){
       this.shopNameState = this.validate_text_required(0,this.shopName);
     },
     shopPackage(){
       this.shopPackageStateCheck();
     },
     shopCategory(){
       this.shopCategoryStateCheck();
     },
     username(){
       this.usernameCheck();
     },

    shopStatusInfo(){
       this.shopStatusInfoStateCheck();
     },
     password(){
       this.passwordCheck();
     },
     packageStart(){
       this.packageStartCheck();

     },
      packageEnd(){
        this.packageEndCheck();

     },
     trialStart(){
       this.trialStartCheck();

     },
      trialEnd(){
        this.trialEndCheck();

     },
   },
  mounted() {


    this.$store.dispatch(SET_BREADCRUMB, [
      { title: "Wizard", route: "wizard-1" },
      { title: "Wizard-2" }
    ]);

    // const ktui = new KTUtil();
    // KTApp.blockPage();


    // Initialize form wizard
    const wizard = new KTWizard("kt_wizard_v2", {
      startStep: 1, // initial active step number
      clickableSteps: false // allow step clicking
    });


    

    this.myWizard = wizard;
  },

  methods: {
    trialOrProduction(statusInfo){
      if(statusInfo === 'production'){
        return "ใช้จริงเลย"
      }else if(statusInfo === 'trial'){
        return "ทดลองก่อน"
      }else{
        return "ไม่ระบุ"
      }
    },
    payment(paid){
      if(paid === true)
      {
        return "ชำระแล้ว"
      }else{
        return "ยังไม่ชำระ"
      }
    },
    nextStep(){
        
        // console.log("wizard.getStep() >>> ",this.myWizard.getStep());
        if(this.myWizard.getStep() === 1){
          this.usernameCheck();
          this.passwordCheck();
          if(this.usernameState === true && this.passwordState === true){
            this.myWizard.goNext();
            this.myWizardStep++;
          }
        }
        else if(this.myWizard.getStep() === 2){
          this.shopNameStateCheck();
          // this.shopPhoneStateCheck();
          // this.shopLineStateCheck();
          this.shopPackageStateCheck();
          this.shopCategoryStateCheck();
          this.shopStatusInfoStateCheck();
          if(this.shopNameState === true && this.shopPackageState === true && this.shopCategoryState === true && this.shopStatusInfoState === true){
            this.myWizard.goNext();
            this.myWizardStep++;
          }
        }

    },
    previousStep(){
      this.myWizard.goPrev();
      this.myWizardStep--;
    },
    shopPhoneStateCheck(){
      if(this.shopPhone.length >= 9)this.shopPhoneState = true; else  this.shopPhoneState = false;

    },
    shopLineStateCheck(){
      this.shopLineState = this.validate_text_required(3,this.shopLine);

    },
    shopNameStateCheck(){
      this.shopNameState = this.validate_text_required(0,this.shopName);

    },
    shopStatusInfoStateCheck(){
      this.shopStatusInfoState = this.validate_select(this.shopStatusInfo);
      // console.log("shopStatusInfoStateCheck >>> ",this.shopStatusInfoState , this.shopStatusInfo);

    },
    shopPackageStateCheck(){
      this.shopPackageState = this.validate_select(this.shopPackage);

    },
    shopCategoryStateCheck(){
      this.shopCategoryState = this.validate_select(this.shopCategory);
    },

    usernameCheck(){
      this.usernameState = this.validate_email(this.username);
    },
    passwordCheck(){
      this.passwordState = this.validate_text_required(6,this.password);
    },

    packageStartCheck(){
      this.packageStartState = this.validate_date(this.packageStart);
    },

    packageEndCheck(){
      this.packageEndState = this.validate_date(this.packageEnd);
    },
    trialStartCheck(){
      this.trialStartState = this.validate_date(this.trialStart);
    },

    trialEndCheck(){
      this.trialEndState = this.validate_date(this.trialEnd);
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
      validate_email(email_address){
        if(email_address.length <= 0)
        {
          return false;
        }
        let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if (email_address.match(regexEmail)) {
          return true; 
        } else {
          return false; 
        }
    },
    async submit(e) {

      var checkState = false;

      if(this.usernameState && this.passwordState && this.shopNameState && this.shopCategoryState && this.shopPackageState && this.shopStatusInfoState){
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
        username: this.username,
        password: this.password,
        shopName: this.shopName,
        shopCode: this.shopCode,
        shopPackage : this.shopPackage,
        shopLine : this.shopLine,
        shopPhone : this.shopPhone,
        shopDescription: this.shopDescription,
        shopCategory: this.shopCategory,
        shopStatusInfo : this.shopStatusInfo,
        paid : this.paid,
        // ShopAge : this.shopAge,
        // ShopBranchNumber : this.shopBranchNumber,
        trialStart: this.formatDate(this.trialStart) ,
        trialEnd: this.formatDate(this.trialEnd),
        packageStart: this.formatDate(this.packageStart) ,
        packageEnd: this.formatDate(this.packageEnd),
      }


      var res1 = null;

      var theUrl = this.$store.state.common.baseUrl + "/office-api/shop/create-shop";
      try {
        res1 = await axios.post(
          theUrl, data, this.$store.state.auth.apiHeader
        );
      } catch (error) {
        // console.log(error);
          Swal.fire({
            title: "",
            text: "สร้างไม่สำเร็จ",
            icon: "warning",
            confirmButtonClass: "btn btn-warning"
          })
        
          ;
        
      }
      

      Swal.fire({
        title: "",
        text: "สร้างร้านค้าเรียบร้อยแล้ว โปรดทดลอง login เข้าระบบ",
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

      
    }
  }
};
</script>
