<template>
  <div class="card card-custom card-stretch gutter-b card-shadowless  ">

     <MyTable1 :tableDetail="tableDetail">
       <!-- <template v-slot:dynamicComponent>
         <div class="" v-for="(cmp, cmp_index) in tableDetail.tableComponent" v-bind:key="cmp_index" >
              <component  :is="cmp.component" :componentDetail="cmp.detail"   >
              </component>
          </div> 
        
      </template> -->
     </MyTable1>
  </div>
  
</template>

<script>

import MyTable1 from "@/mycore/MyTable1.vue";
import store from '@/core/services/store'; 


import { mapGetters } from "vuex";

// import  sidebarImport from "@/view/alex/eCouponSidebarImport.vue";


export default {
  name: "CouponListTable",
  data() {
    return {  

      isLoading: true,

      tableDetail: {
           
            tableHeader: "Shop list",
            // tableSubHeader: "ข้อมูลทั้งหมด",

            page:{
              show: false,
              topbottom: 1, //*** {1: show only bottom, 2: show only top, 3: show both }
              pageSize: 20,
              pageOption: [10,20,50,100,200],

            },

            useStore: "shop",
            // tableClass : ['px-40'],
             itemSelection: {
              show : true,
              store: "shop",
              items : "shop/selected",
            },
            tableAction: {
              show: true,
              display: "จัดการ",
              type: "dropdown", // {"dropdown" , "button"}
              color: "primary",
              actions: [
                {
                  type: "dropdown",
                  actionType: "anotherPage",  //*** {anotherPage, editPanel , editSideBar}  เอา panel หรือ slidebar ออกมาเพื่อเปลี่ยน data
                  panelName: "updateTrial",
                  display: "update trial",
                  icon:  "/General/Update.svg",
                  //*** see at :  https://preview.keenthemes.com/metronic/demo1/features/icons/svg.html 
                  action: "/update-trial/", //*** ชื่อ panel หรือ sidebar */
                  param: "uid"
                },
                {
                  type: "dropdown",
                  actionType: "anotherPage",  //*** {anotherPage, editPanel , editSideBar}  เอา panel หรือ slidebar ออกมาเพื่อเปลี่ยน data
                  panelName: "updatePackage",
                  display: "update package",
                  icon:  "/General/Settings-1.svg",
                  //*** see at :  https://preview.keenthemes.com/metronic/demo1/features/icons/svg.html 
                  icon:  "/General/Settings-1.svg",
                  action: "/update-package/", //*** ชื่อ panel หรือ sidebar */
                  param: "uid"
                },
                {
                  type: "dropdown",
                  actionType: "anotherPage",  //*** {anotherPage, editPanel , editSideBar}  เอา panel หรือ slidebar ออกมาเพื่อเปลี่ยน data
                  panelName: "renewPackage",
                  display: "renew package",
                  //*** see at :  https://preview.keenthemes.com/metronic/demo1/features/icons/svg.html 
                  icon:  "/General/Star.svg",
                  action: "/renew-package/", //*** ชื่อ panel หรือ sidebar */
                  param: "uid"
                },
                // {
                //   type: "delete", //*** delete เอา panel ขึ้รมาเตือนก่อนลบ 
                //   display: "delete",
                //   //*** see at :  https://preview.keenthemes.com/metronic/demo1/features/icons/svg.html 
                //   icon:  "/General/Trash.svg",
                //   action: "coupon/update", //*** ชื่อ store action */
                //   param: "uid"
                // },
                // {
                //   type: "editPanel",  //*** {editPanel , editSideBar}  เอา panel หรือ slidebar ออกมาเพื่อเปลี่ยน data
                //   panelName: "updateBrand",
                //   display: "update",
                //   //*** see at :  https://preview.keenthemes.com/metronic/demo1/features/icons/svg.html 
                //   icon:  "/General/Settings-1.svg",
                //   action: "coupon/update", //*** ชื่อ panel หรือ sidebar */
                //   param: "uid"
                // },
                // {
                //   type: "delete", //*** delete เอา panel ขึ้รมาเตือนก่อนลบ 
                //   display: "delete",
                //   //*** see at :  https://preview.keenthemes.com/metronic/demo1/features/icons/svg.html 
                //   icon:  "/General/Trash.svg",
                //   action: "coupon/update", //*** ชื่อ store action */
                //   param: "uid"
                // },
                // {
                //   type: "change", //*** ทำการเปลี่ยนแปลงเลย 
                //   display: "update status",
                //   //*** see at :  https://preview.keenthemes.com/metronic/demo1/features/icons/svg.html 
                //   icon:  "/Communication/Write.svg",
                //   action: "coupon/updateStatus", //*** ชื่อ store action */
                //   param: "uid"
                // },
               
                // {
                //   type: "button", //*** ทำการเปลี่ยนแปลงเลย {redirect , storeAction}
                //   display: "sending",
                //   conditionLogic:{
                //     param: "couponStatus",
                //     cond: "in", //*** greater , less , eq , ineq , contain , in (array), notin */
                //     value: "",
                //     compareParam: "",
                //     condList: ["ว่างอยู่", "ส่งออก"],
                //   },
                //   //*** see at :  https://preview.keenthemes.com/metronic/demo1/features/icons/svg.html 
                //   icon:  "/Communication/Sending.svg",
                //   // action: "/dashboard", //*** ชื่อ route ที่จะ redirect */
                //   storeAction: "coupon/sendSingleSms",
                //   apiUrl : "/ecoupon-api/ecoupon/sending-single-sms/",
                //   params: {},
                //   nextAction: "callasync", //*** {redirect , callasync, call} */
                //   callAction: "coupon/loadData",
                //   callApi: "/ecoupon-api/ecoupon/coupon-list/".concat(this.$route.params.campaignId),
                //   param: "uid"
                // },

                
                
              ]

            },
            reload: {
            //   apiUrl: "/ecoupon-api/ecoupon/coupon-list/".concat(this.$route.params.campaignId),
              storeAction: "shop/loadData",
              dataList : "shop/items",
            },

            //*** ปุ่มบนตารางเพื่อจะ redirect หรือทำบางอย่าง e.g. export excel
            tableButton:  [
            //   {
            //     type: "callStore", //*** {redirect , callStore} */
            //     text : "ส่ง SMS",
            //     color : "warning",
            //     storeAction: "coupon/sendSms",
            //     apiUrl : "/ecoupon-api/ecoupon/sending-multiple-sms",
            //     params: {},
            //     nextAction: "callasync", //*** {redirect , callasync, call} */
            //     callAction: "coupon/loadData",
            //     callApi: "/ecoupon-api/ecoupon/coupon-list/".concat(this.$route.params.campaignId),
            //     callParam: {},
            //     // redirectTo: "/brand-list",
            //   },

            //   //*** [add-26May2022]
            //   {
            //     type: "callStore", //*** {redirect , callStore} */
            //     text : "สร้างคูปอง",
            //     color : "success",
            //     storeAction: "coupon/genCoupon",
            //     apiUrl : "/ecoupon-api/ecoupon/gen-coupon/".concat(this.$route.params.campaignId),
            //     params: {},
            //     nextAction: "callasync", //*** {redirect , callasync, call} */
            //     callAction: "coupon/loadData",
            //     callApi: "/ecoupon-api/ecoupon/coupon-list/".concat(this.$route.params.campaignId),
            //     callParam: {},
            //     // redirectTo: "/brand-list",
            //   },

            //   //*** [add-26May2022]
            //   {
            //     type: "exportExcel", //*** {redirect , callStore} */
            //     text : "Export excel",
            //     color : "primary",
            //     storeAction: "coupon/export",
            //     apiUrl : "",
            //     params: {},
            //     // nextAction: "callasync", //*** {redirect , callasync, call} */
            //     // callAction: "coupon/loadData",
            //     // callApi: "/ecoupon-api/ecoupon/coupon-list/".concat(this.$route.params.campaignId),
            //     // callParam: {},
            //     // redirectTo: "/brand-list",
            //   },

            //   //*** [add-26May2022]
            //   {
            //     type: "callStore", //*** {redirect , callStore} */
            //     text : "ยกเลิกคูปอง",
            //     color : "dark",
            //     storeAction: "coupon/cancelCoupon",
            //     apiUrl : "/ecoupon-api/ecoupon/cancel-coupon",
            //     params: {},
            //     nextAction: "callasync", //*** {redirect , callasync, call} */
            //     callAction: "coupon/loadData",
            //     callApi: "/ecoupon-api/ecoupon/coupon-list/".concat(this.$route.params.campaignId),
            //     callParam: {},
            //   },

            ],


            // tableComponent:  [
            //   {
            //     component: sidebarImport,
            //     detail: {
            //       componentId : "abc",
            //       componentMessage : "Upload Excel",
            //       iconClass: ["fa", "fa-file-excel", "icon-md"],
            //       content : [
            //         {
            //           type : "form",
            //           detail: {},
            //         }
            //       ]
            //     },
            //   },

            //   // {
            //   //   component: sidebarImport,
            //   //   detail: {
            //   //     componentId : "def",
            //   //     componentType : "form",
            //   //     componentMessage : "My name is chicky",
            //   //     iconClass: ["fa", "fa-fill-drip", "icon-md"],
            //   //   },
                
            //   // },

            // ],

            //*** รูปบบข้อมูลที่อยู่แต่ละคอลัมน์ตาราง
           filterButton: {
              label : "search",
              color: "danger",
            //   apiUrl: "/ecoupon-api/ecoupon/coupon-list/".concat(this.$route.params.campaignId),
              storeAction: "shop/loadData",
              dataList : "shop/items",
            },
            filterClear: {
              label : "clear",
              color: "warning",
              // apiUrl: "/ecoupon-api/ecoupon/brand-list",
              // storeAction: "brand/loadData",
              // dataList : "brand/items",
            },
            apiName: "filter-coupon",
            tableFilter:  [
              {
                type: "text",
                param: "searchText",
                mapTo: "t1",
                dataType: "string",
                placeholder: "search",
                icon: ["flaticon2-search-1", "text-muted"],
              },
              
             
              { 
                type: "select",
                param: "status",
                mapTo: "t3",
                dataType: "string",
                label: "Status:",

                option: [
                  {
                    display: "ทั้งหมด",
                    value: ""
                  },
                  {
                    display: "active",
                    value: "active"
                  },
                  {
                    display: "expired",
                    value: "expired"
                  },
                  {
                    display: "onHold",
                    value: "onHold"
                  },
                  {
                    display: "trial",
                    value: "trial"
                  },

                ]
              },

            ],

            //*** รูปบบข้อมูลที่อยู่แต่ละคอลัมน์ตาราง
            tableStructure:  [
              // {
              //   columnName: "Coupon", //** ชื่อ columns ที่จะปรากฏในตาราง */
              //   width:  {'width': '25%'},
              //   type: "text", //*** {image, text, status , date , progress, link, number} */
              //   // mainText:  "text1",
              //   // mainTextStyle: {'font-size':'1.2rem', 'font-family': 'mitr'},
              //   // linkText1: "couponCode",
              //   // linkText1Style: {'font-size':'1.2rem'},
              //   copyBlueText: "couponCode",
              //   copyBlueTextValue: "couponUrl",
              //   copyBlueTextStyle: {'font-size':'1.2rem'},
              //   linkUrl1:  "campaignlink",
              //   // subText: "description",
              //   // subText2: "text4",
              // },

              {
                columnName: "รูป", //** ชื่อ columns ที่จะปรากฏในตาราง */
                style:  {'width': '100px'},
                type: "image", //*** {image, text, status , date , progress, link, number} */
                mainText: "logoUrl",
                
              },

              {
                columnName: "ข้อมูลลูกค้า", //** ชื่อ columns ที่จะปรากฏในตาราง */
                width:  {'width': '30%'},
                type: "text", //*** {image, text, status , date , progress, link, number} */
                mainText:  "name",
                mainTextStyle: {'font-size':'1.2rem', 'font-family': 'mitr'},
                // copyText: "text21",
                // copyTextStyle: "text22",
                // linkText1: "customerName",
                // linkText1Style: {'font-size':'1.2rem'},
                // linkUrl1:  "campaignlink",
                subText: "packageText",
                subBlueText: "createBy",

                subRedText: "createDateTimeTh",

              },


              {
                columnName: "ช่วงเวลาทดลอง", //** ชื่อ columns ที่จะปรากฏในตาราง */
                width: {'width': ' 30%'},
                type: "progress", //*** {image, text, status , date , progress, link, number} */
                mainText:  "progressPercent",
                subText: "trialStartDateTimeTh",
                subText2: "trialEndDateTimeTh",
                percentage: "percentage",
                start: "trialStartDateTime",
                end: "trialEndDateTime",
                color: "trialProgressColor",
              },

              {
                columnName: "ช่วงเวลาใช้จริง", //** ชื่อ columns ที่จะปรากฏในตาราง */
                width: {'width': '30%'},
                type: "progress", //*** {image, text, status , date , progress, link, number} */
                mainText:  "progressPercent",
                subText: "startDateTimeTh",
                subText2: "endDateTimeTh",
                start: "startDateTime",
                end: "endDateTime",
                percentage: "percentage",
                color: "progressColor",
              },

              


             
            
              {
                columnName: "สถานะ", //** ชื่อ columns ที่จะปรากฏในตาราง */
                width: {'min-width': '10%'},
                type: "status", //*** {image, text, status , date , progress, link, number} */
                mainText:  "statusInfo",
                // subText: "statusInfo",
                // subText2: "expired",
                // subText3: "used",
                color: "statusColor",
              },

              // {
              //   columnName: "วันที่สร้าง", //** ชื่อ columns ที่จะปรากฏในตาราง */
              //   width: {'max-width': '200px'},
              //   type: "date", //*** {image, text, status , date , progress, link, number} */
              //   // mainText:  "text9",
              //   mainRedText:  "createDateTime",
              //   // mainBlueText:  "text9",
              //   subText: "staff",
              //   // subText2: "text12",
              //   format: "en",  //*** dash , slash , en , th */

              // },

            ] // end: tableStructure 
            ,
            data: []
      }
     
   }
  },

  async created() {

    // this.sidebarDetail1.formButton.apiUrl = "/ecoupon-api/file/upload-excel/" + this.$route.params.campaignId;

    // this.tableDetail.tableComponent[0].detail.content[0].detail = this.sidebarDetail1;

    // console.log("Alex Shop List Table >>>" , this.$store.getters["shop/items"]);
    
    
    

  },
  computed: {
    // ...mapGetters(["couponList"])
  },

  components: {
    // sidebarImport,
    MyTable1
  },
  methods: {
    // setCheck(checked) {
    //   this.checked = checked;
    // }
  }
};
</script>


