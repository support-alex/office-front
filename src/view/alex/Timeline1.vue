/* eslint-disable prettier/prettier */
/* eslint-disable prettier/prettier */
<template>
 
  <div class="timeline timeline-5 grey-border">
        <!--begin::Header-->
        <div class="card-header border-0" style="padding:10px;">
        <h3 class="card-title font-weight-bolder text-dark">ประวัติการใช้งาน</h3>
        <!-- <div class="card-toolbar">
            <div class="dropdown dropdown-inline">
            <Dropdown2></Dropdown2>
            </div>
        </div> -->
        </div>
        <!--end::Header-->

        <div class="timeline-items">
            <!--begin::Item-->
            <div class="timeline-item"  v-for="(item, ind) in apiMockData" :key="ind">
                
            <!--begin::Icon-->
                <div class="timeline-media " :class="checkActionBg(item.action)" >
                    <i class="fa fa-envelope-open-text " :class="[checkModule(item.module), checkActionText(item.action)]"></i>
                </div>
                <!--end::Icon-->
                

                <!--begin::Info-->
                <div class="timeline-desc timeline-desc-light-primary">
                    <span class="font-weight-bolder "  :class="checkActionText(item.action)" >{{formatAlphabet(item.createDateTime)}} {{formatAMPM(item.createDateTime)}} </span>
                    <!--begin::SHOP INFO-->
                    <div class="row">
                            <div class="col-lg-3">
                            <img :src="item.shopLogo" class="shop-logo" />
                            </div>
                            <div class="col-lg-8 d-flex align-items-center justify-content-start" >
                            <!-- <p class="font-weight-normal text-dark-50 pb-2 "> -->
                                {{item.shopName}}
                                <!-- </p> -->
                            </div>
                    </div>
                    <!--end::SHOP INFO-->
                    <p class="text-dark-100 " style="font-weight:bold;font-size: 1.2rem; margin-bottom:0 !important;">
                        {{item.code}}
                    </p>
                    <p class="font-weight-normal text-dark-50 " style="font-size: 1rem; ">
                        {{item.description}}
                    </p>
                
                    
                </div>
                <!--end::Info-->
            </div>
            <!--end::Item-->

        
        </div>


        


        




    </div>
</template>
<script>

import shapeFormat from '@/mixins/shapeFormat.js'

export default {
   name: "timeline1",
   props: ["msg"],
   mixins: [shapeFormat],
   data() {
       return {
           moduleList : ["user","order", "shop", "config", "checkqueue", "product"],
           iconList : ["fa-user-plus","fa-shopping-cart", "fa-store", "fa-tools", "fa-calendar-check" , "fa-tshirt"],
           actionList: ["add","update","delete","info","other"],
           bgColorList: ["bg-light-success", "bg-light-warning" , "bg-light-primary", "bg-light-info", "bg-light-dark"],
           textColorList: ["text-success", "text-warning" , "text-primary", "text-info", "text-dark"],



           apiMockData: [{
                createDateTime: "2021-08-16",
                crateBy: "support@alexrental.com",
                shopName: "Alex2",
                shopLogo: "https://demo002.alexrental.app/images/162c8139-fb70-4ede-86f3-61b5e056f772.png",
                code: "ADD_ORDER_HEADER",
                action: "add",
                module: "order",
                description: "staff1@gmail.com เพิ่ม order หมายเลข OR121091300001"
            },
            {
                createDateTime: "2021-07-14 15:25:32.278853",
                crateBy: "support@alexrental.com",
                shopName: "Alex2",
                shopLogo: "https://demo002.alexrental.app/images/162c8139-fb70-4ede-86f3-61b5e056f772.png",
                code: "ADD_USER",
                action: "add",
                module: "user",
                description: "support@gmail.com เพิ่มผู้ใช้งาน chris@gmail.com"
            },
            {
                createDateTime: "2021-03-01 15:25:32.278853",
                crateBy: "support@alexrental.com",
                shopName: "Alex2",
                shopLogo: "https://demo002.alexrental.app/images/162c8139-fb70-4ede-86f3-61b5e056f772.png",
                code: "CHECKQUEUE",
                action: "info",
                module: "checkqueue",
                description: "pha@gmail.com เช็คคิวชุด"
            },
            {
                createDateTime: "2021-03-01 15:25:32.278853",
                crateBy: "support@alexrental.com",
                shopName: "Alex2",
                shopLogo: "https://demo002.alexrental.app/images/162c8139-fb70-4ede-86f3-61b5e056f772.png",
                code: "UPDATE_SHOP",
                action: "update",
                module: "shop",
                description: "pha@gmail.com เช็คคิวชุด"
            },
            {
                createDateTime: "2021-03-01 15:25:32.278853",
                crateBy: "support@alexrental.com",
                shopName: "Alex2",
                shopLogo: "https://demo002.alexrental.app/images/162c8139-fb70-4ede-86f3-61b5e056f772.png",
                code: "UPDATE_PRODUCT",
                action: "delete",
                module: "product",
                description: "pha@gmail.com ลบสินค้า 0001fafam"
            },
           
           ]
           
   };
},
methods: {
    checkModule(input){
        const res = this.moduleList.indexOf(input);
        if(res > -1){
            return this.iconList[res]
        }else{
            return "";
        }

    },
    checkActionText(input){
        const res = this.actionList.indexOf(input);
        if(res > -1){
            return this.textColorList[res]
        }else{
            return "text-dark";
        }
    },
    checkActionBg(input){
        const res = this.actionList.indexOf(input);
        if(res > -1){
            return this.bgColorList[res]
        }else{
            return "bg-light-dark";
        }
    },
  
},
components: {
   
}
};
</script>
 
<style >
 
</style>