/* eslint-disable prettier/prettier */
/* eslint-disable prettier/prettier */
<template>
 
  <div class="timeline timeline-5 grey-border">
     <!--begin::Header-->
    <div class="card-header border-0" style="padding:10px;">
      <h3 class="card-title font-weight-bolder text-dark">ประวัติการ Login ของ ลูกค้า</h3>
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
            <div class="timeline-media bg-light-primary">
                 <i class="fa fa-envelope-open-text text-primary"></i>
            </div>
            <!--end::Icon-->
            

            <!--begin::Info-->
            <div class="timeline-desc timeline-desc-light-primary">
                <span class="font-weight-bolder text-primary">{{formatAlphabet(item.createDateTime)}} {{formatAMPM(item.createDateTime)}} </span>
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
                    {{item.action}}
                </p>
                <p class="font-weight-normal text-dark-50 " style="font-size: 1rem; ">
                    {{item.description}}
                </p>
              
                
            </div>
            <!--end::Info-->
        </div>
        <!--end::Item-->

        <!--begin::Item-->
        <div class="timeline-item">
            <!--begin::Icon-->
            <div class="timeline-media bg-light-warning">
                <span class="svg-icon-warning svg-icon-md">
                <i class="flaticon2-layers text-success "></i>
                </span>
            </div>
            <!--end::Icon-->

            <!--begin::Info-->
            <div class="timeline-desc timeline-desc-light-warning">
                <span class="font-weight-bolder text-warning">2:45 PM</span>
                <p class="font-weight-normal text-dark-50 pt-1 pb-2">
                    To start a blog, think of a topic about and first brainstorm ways to write details
                </p>
            </div>
            <!--end::Info-->
        </div>
        <!--end::Item-->

        <!--begin::Item-->
        <div class="timeline-item">
            <!--begin::Icon-->
            <div class="timeline-media bg-light-success">
                <span class="svg-icon-success svg-icon-md">
                <i class="flaticon2-layers text-success "></i>
                </span>
            </div>
            <!--end::Icon-->

            <!--begin::Info-->
            <div class="timeline-desc timeline-desc-light-success">
                <span class="font-weight-bolder text-success">3:12 PM</span>
                <p class="font-weight-normal text-dark-50 pt-1 pb-2">
                    To start a blog, think of a topic about and first brainstorm ways to write details
                </p>
            </div>
            <!--end::Info-->
        </div>
        <!--end::Item-->

        <!--begin::Item-->
        <div class="timeline-item">
            <!--begin::Icon-->
            <div class="timeline-media bg-light-danger">
                <span class="svg-icon-danger svg-icon-md">
                <i class="flaticon2-layers text-success "></i>
                </span>
            </div>
            <!--end::Icon-->

            <!--begin::Info-->
            <div class="timeline-desc timeline-desc-light-danger">
                <span class="font-weight-bolder text-danger">7:05 PM</span>
                <p class="font-weight-normal text-dark-50 pt-1">
                    To start a blog, think of a topic about and first brainstorm ways to write details
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
   name: "LoginLog",
   props: ["msg"],
   mixins: [shapeFormat],
   data() {
       return {
           apiMockData: [{
                createDateTime: "2021-08-16",
                crateBy: "support@alexrental.com",
                shopName: "Alex2",
                shopLogo: "https://demo002.alexrental.app/images/162c8139-fb70-4ede-86f3-61b5e056f772.png",
                action: "ADD_ORDER-HEADER",
                description: "staff1@gmail.com เพิ่ม order หมายเลข OR121091300001"
            },
            {
                createDateTime: "2021-07-14 15:25:32.278853",
                crateBy: "support@alexrental.com",
                shopName: "Alex2",
                shopLogo: "https://demo002.alexrental.app/images/162c8139-fb70-4ede-86f3-61b5e056f772.png",
                action: "ADD_USER",
                description: "support@gmail.com เพิ่มผู้ใช้งาน chris@gmail.com"
            },
            {
                createDateTime: "2021-03-01 15:25:32.278853",
                crateBy: "support@alexrental.com",
                shopName: "Alex2",
                shopLogo: "https://demo002.alexrental.app/images/162c8139-fb70-4ede-86f3-61b5e056f772.png",
                action: "CHECKQUEUE",
                description: "pha@gmail.com เช็คคิวชุด"
            },
           
           ]
           
   };
},
methods: {
  
},
components: {
   
}
};
</script>
 
<style >
 
</style>