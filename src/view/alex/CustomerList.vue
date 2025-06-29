/* eslint-disable prettier/prettier */
/* eslint-disable prettier/prettier */
<template>
 <div class="d-flex flex-column flex-root">
			<!--begin::Page-->
			<div class="d-flex flex-row flex-column-fluid page">
				
				<!--begin::Wrapper-->
				<div class="d-flex flex-column flex-row-fluid wrapper" style="padding-top:0;" id="kt_wrapper">
					
					<!--begin::Content-->
					<div class="content d-flex flex-column flex-column-fluid" id="kt_content">
						<!--begin::Subheader-->
						<div class="subheader py-2 py-lg-4 subheader-transparent" id="kt_subheader">
							<div class="container d-flex align-items-center justify-content-between flex-wrap flex-sm-nowrap">
								<!--begin::Details-->
								<div class="d-flex align-items-center flex-wrap mr-2">
									<!--begin::Title-->
									<h5 class="text-dark font-weight-bold mt-2 mb-2 mr-5">ข้อมูลลูกค้า</h5>
									<!--end::Title-->
									<!--begin::Separator-->
									<div class="subheader-separator subheader-separator-ver mt-2 mb-2 mr-5 bg-gray-200"></div>
									<!--end::Separator-->
									<!--begin::Search Form-->
									<div class="d-flex align-items-center" id="kt_subheader_search">
										<!-- <form class="ml-5"> -->
											<div class="input-group input-group-sm input-group-solid" style="max-width: 175px">
												<input type="text" class="form-control" id="kt_subheader_search_form" placeholder="Search..." v-model="searchText" />
												<div class="input-group-append">
													<span class="input-group-text">
														<span class="svg-icon">
															
														</span>
														<!--<i class="flaticon2-search-1 icon-sm"></i>-->
													</span>
												</div>
											</div>
										<!-- </form> -->
									</div>
									<!--end::Search Form-->
									<!--begin::Group Actions-->
									<div class="d-flex align-items-center flex-wrap mr-2 d-none" id="kt_subheader_group_actions">
										<div class="text-dark-50 font-weight-bold">
										<span id="kt_subheader_group_selected_rows"> แสดงอยู่ {{apiData.length}} </span> 
										<span class="text-dark-50 font-weight-bold" id="kt_subheader_total"> จากทั้งหมด {{backupData.length}}</span>

									</div>
										<div class="d-flex ml-6">
											
										</div>
									</div>
									<!--end::Group Actions-->
								</div>
								<!--end::Details-->
								<!--begin::Toolbar-->
								<div class="d-flex align-items-center">
									<!--begin::Button-->
									<a href="#" class=""></a>
									<!--end::Button-->
									<!--begin::Button-->
									<div @click="$router.push('dashboard-register')" class="btn btn-light-primary font-weight-bold ml-2">เพิ่มลูกค้าใหม่</div>
									<!--end::Button-->
									<!--begin::Dropdown-->
									
									<!--end::Dropdown-->
								</div>
								<!--end::Toolbar-->
							</div>
						</div>
						<!--end::Subheader-->
						<!--begin::Entry-->
						<div class="d-flex flex-column-fluid">
							<!--begin::Container-->
							<div class="container">
								<!--begin::Row-->
								<div class="row">
									<!--begin::Col-->
									<div class="col-xl-4 col-lg-4 col-md-6 col-sm-12"  v-for="(item, ind) in apiData" :key="ind"  >
										<!--begin::Card-->
										<div class="card card-custom gutter-b card-stretch">
											<!--begin::Body-->
											<div class="card-body pt-4">
												<!--begin::Toolbar-->
												<div class="d-flex justify-content-end">
													<!--begin::Navigation-->
														<div class="dropdown dropdown-inline">
															<DropDownUpdatePackage :code="item.shopInfo.shopInfoId" ><i class="ki ki-bold-more-hor"></i></DropDownUpdatePackage>
														</div>
													<!--end::Navigation-->

													<!-- <div class="dropdown dropdown-inline" data-toggle="tooltip" title="Quick actions" data-placement="left">
														<div  class="btn btn-clean btn-hover-light-primary btn-sm btn-icon" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
														</div>
														
													</div> -->
												</div>
												<!--end::Toolbar-->
												<!--begin::User-->
												<div class="d-flex align-items-center mb-7">
													<!--begin::Pic-->
													<div style="height:75px;" class="d-flex align-items-center flex-shrink-0 mr-4">
														<div class="d-flex align-items-center symbol-lg-75 ">
															<img style="width:75px;" :src="getImage(item.shopInfo.shopInfoId,item.shopInfo.logo)" alt="image" />
														</div>
													</div>
													<!--end::Pic-->
													<!--begin::Title-->
													<div class="d-flex flex-column">
														<div  class="text-dark font-weight-bold text-hover-primary font-size-h4 mb-0">{{item.shopInfo.name}}</div>
														<span class="text-muted font-weight-bold">---------</span>
													</div>
													<!--end::Title-->
												</div>
												<!--end::User-->
												<!--begin::Desc-->
												<p class="mb-7">ทดลองใช้ <span v-if="item.trial !== null && item.trial !== undefined" >{{formatAlphabet(item.trial.startDateTime)}} ~ {{formatAlphabet(item.trial.endDateTime)}}</span>
												<!-- <a href="#" class="text-primary pr-1">#xrs-54pq</a></p> -->
												<!--end::Desc-->
												<!--begin::Info-->
												<div class="mb-12">
													<div class="d-flex justify-content-between align-items-center">
														<span class="text-dark-75 font-weight-bolder mr-2">Package:</span>
														<div class="text-muted text-hover-primary text-uppercase"><b>{{item.shopInfo.package}}</b></div>
													</div>
													<div class="d-flex justify-content-between align-items-cente my-1">
														<span class="text-dark-75 font-weight-bolder mr-2">start:</span>
														<div  class="text-muted text-hover-primary"><span v-if="item.package !== null && item.package !== undefined" >{{formatAlphabet(item.package.startDateTime)}}</span></div>
													</div>
													<div class="d-flex justify-content-between align-items-center">
														<span class="text-dark-75 font-weight-bolder mr-2">expired:</span>
														<div class="text-muted font-weight-bold"><span v-if="item.package !== null && item.package !== undefined" >{{formatAlphabet(item.package.endDateTime)}}</span></div>
													</div>
													<div class="d-flex justify-content-between align-items-cente my-1">
														<span class="text-dark-75 font-weight-bolder mr-2">Owner:</span>
														<div class="text-muted text-hover-primary">{{item.shopInfo.createBy}}</div>
													</div>
													
													<div class="d-flex justify-content-between align-items-center">
														<span class="text-dark-75 font-weight-bolder mr-2">จำนวนครั้งที่ซื้อ</span>
														<div class="text-muted font-weight-bold"><span v-if="item.package !== null && item.package !== undefined" >{{item.package.numberOfUse}}</span> <span v-else>0</span> ครั้ง</div>
													</div>
													<div class="d-flex justify-content-between align-items-center">
														<span class="text-dark-75 font-weight-bolder mr-2">เริ่มใช้ครั้งแรก</span>
														<span class="text-muted font-weight-bold">{{formatAlphabet(item.firstTimeOfUse)}}</span>
													</div>
													
												</div>
												<!--end::Info-->
												<div class="btn btn-block btn-sm  font-weight-bolder text-uppercase py-4" :class="[checkStatusBtn(item.shopInfo.statusInfo)]" >{{checkStatusText(item.shopInfo.statusInfo)}}</div>
											</div>
											<!--end::Body-->
										</div>
										<!--end:: Card-->
									</div>
									<!--end::Col-->
									

								</div>
								<!--end::Row-->
								
							</div>
							<!--end::Container-->
						</div>
						<!--end::Entry-->
					</div>
				
				</div>
				<!--end::Wrapper-->
			</div>
			<!--end::Page-->
</div>
<!--end::Main-->
</template>
<script>

import shapeFormat from '@/mixins/shapeFormat.js'
import Swal from "sweetalert2";
import axios from "axios";
import DropDownUpdatePackage from "@/view/content/dropdown/DropDownUpdatePackage.vue";

export default {
   name: "ListApp",
   props: ["msg"],
   mixins: [shapeFormat],
   data() {
       return {

		   searchText : "",
           actionList: ["active","trial","expired","notStart","onHold"],
           bgColorList: ["btn-light-success", "btn-light-warning" , "btn-light-primary", "btn-light-info", "btn-light-info"],
		   textList: ["ใช้งานอยู่", "อยู่ในช่วงทดสอบใช้งาน" , "หมดอายุ", "ยังไม่เริ่ม", "หยุดไว้ก่อน"],



           apiData: [
		
           
           ],
		   backupData: [
		
           
           ]
           
   };
},
watch: {
	searchText(value){
		// console.log('this.apiData >>> ',this.apiData);
		let forfil = this.backupData;
		let newData = forfil.filter(x => x.shopInfo.name.toLowerCase().includes(value.toLowerCase()));
		this.apiData = newData;
	}
},
async created() {
	 
	 
	 var res1 = null;
	 var data = {};

	// console.log(">>>>>>>>>>>>>>. ",this.$store.state.common.baseUrl);

	 var url = this.$store.state.common.baseUrl + "/office-api/shop/get-all-shop";
      try {
        res1 = await axios.post(
          url, data, this.$store.state.auth.apiHeader
        );
      } catch (error) {
        // console.log(error);
          Swal.fire({
            title: "",
            text: "ดึงข้อมูลไม่สำเร็จ",
            icon: "warning",
            confirmButtonClass: "btn btn-warning"
          })
        
          ;
        
      }

	  this.apiData = res1.data.allList;
	  this.backupData = res1.data.allList;
},
methods: {
    
	getImage(shopId, imagePath){
		var url = "";
		if(imagePath === null || imagePath === undefined || imagePath === ""){
			url = this.$store.state.common.imageUrl + "/" + shopId + "/" + "default_shop.png"
		}else{
			url = this.$store.state.common.imageUrl + "/" + shopId + "/" + imagePath ;
		}
		return url
	},
    checkStatusBtn(input){
        const res = this.actionList.indexOf(input);
        if(res > -1){
            return this.bgColorList[res]
        }else{
            return "btn-light-dark";
        }
    },
	checkStatusText(input){
        const res = this.actionList.indexOf(input);
        if(res > -1){
            return this.textList[res]
        }else{
            return "ยังไม่เริ่ม";
        }
    },
  
},
components: {
   DropDownUpdatePackage
}
};
</script>
 
<style >
 
</style>