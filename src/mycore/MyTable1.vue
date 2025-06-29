<template>
  <div class="card card-custom card-stretch gutter-b  ">
    
     
    <!--begin::Header-->
    <div class=" flex items-center row  py-6 "   :class="tableDetail.tableClass" >
      <div class="  col-lg-4 col-md-6 col-sm-12  ">
        <h2 class="card-title flex justify-center flex-column  pl-4">
          <span class="card-label font-weight-bolder text-dark text-3xl mitr-font">
            {{tableDetail.tableHeader}}
          </span>
          <span class="text-muted mt-3 font-weight-bold font-size-sm mitr-font">
            {{tableDetail.tableSubHeader}}
          </span>
        </h2>
      </div>


     <div class="flex  col-lg-8 col-md-6 col-sm-12  gap-4">
      <div class="row d-flex justify-end w-full">
        
        
          <div class="col-xl-3 col-lg-3 col-md-6 col-sm-12 pb-6" v-for="(btn, btn_index) in tableDetail.tableButton" v-bind:key="btn_index" >
                  <div v-if="btn.type==='redirect'" @click="linkTo(btn.redirectTo)" :class="concatText('btn-', btn.color )"  class="btn btn-{btn.color} font-weight-bolder font-size-sm text-lg mitr-font" style="width:100%; height:3.2rem;  margin-right:2px; cursor: pointer;" >
                    {{btn.text}}
                  </div>
                  <div v-if="btn.type==='callStore'" @click="callStoreAction(btn)" :class="concatText('btn-', btn.color )"  class="btn btn-{btn.color} font-weight-bolder font-size-sm text-lg mitr-font" style="width:100%; height:3.2rem;  margin-right:2px; cursor: pointer;" >
                    {{btn.text}}
                  </div>
                  <div v-if="btn.type==='exportExcel'"  >
                      <vue-excel-xlsx
                          style="font-size:1rem; font-family: mitr; width:120px;"
                          class="btn py-3"
                          :class="[concatText('btn-', btn.color )]"
                          :data="selectedList"
                          :columns="columns"
                          :file-name="'exported_file'"
                          :file-type="'xlsx'"
                          :sheet-name="'sheetname'"
                          >
                          Export excel
                      </vue-excel-xlsx>
                </div>
          </div> 
          

          <slot name="dynamicComponent" ></slot>

       
       
        </div>
      </div>


     
    </div>
    <!--end::Header-->

    <!--begin::Search Form-->
      <div class="mb-7 px-4"  :class="tableDetail.tableClass" >
        <div class="row align-items-start">
          <div class="col-lg-10 col-xl-10">
            <div class="row align-items-center justify-content-end">
              <!-- Begin : Text Inbox -->

              <div v-for="(filterParam, fi) in tableDetail.tableFilter"  v-bind:key="fi" class="col-md-4 my-2 my-md-0 py-3" >
                    <div class="input-icon" v-if="filterParam['type'] === 'text'"  >
                      <input type="text" class="form-control" :placeholder="filterParam['placeholder']" v-model="$data['filParam'][fi]"  />
                      <span>
                        <i :class="['flaticon2-search-1', 'text-muted']"></i>
                      </span>
                    </div> <!-- TEXT INPUT -->

                    <div class="d-flex align-items-center" v-if="filterParam['type'] === 'select'"  >
                      <label class="mr-3 mb-0 d-none d-md-block">{{filterParam['label']}}</label>
                      <select   class="form-control"  v-model="$data['filParam'][fi]" >
                        <option v-for="(optionItem, opi) in filterParam['option']" v-bind:key="opi" :value="optionItem['value']">{{optionItem["display"]}}</option>
                      </select>
                    </div> <!-- SELECT -->
              </div> <!-- FOR -->


            </div> <!-- ROW -->
          </div> <!-- col-lg-9 col-xl-8 -->
          <div class="col-lg-2 col-xl-2 mt-5 mt-lg-0 align-items-start pt-3">
            <!-- filterButton -->
            <div v-if="tableDetail.filterButton !== null && tableDetail.filterButton !== undefined"  @click="submitFilter()" class="btn btn-light-primary px-6 font-weight-bold" :class="[concatText( 'btn-light-', tableDetail.filterButton.color)]"  >{{tableDetail.filterButton.label}}</div>
            <!-- clearButton -->
            <!-- <div v-if="tableDetail.filterClear !== null && tableDetail.filterClear !== undefined"  @click="clearFilter()" class="btn btn-light-primary px-6 font-weight-bold ml-2"  :class="[concatText( 'btn-light-', tableDetail.filterClear.color)]" >{{tableDetail.filterClear.label}}</div> -->
            <i  v-if="tableDetail.filterClear !== null && tableDetail.filterClear !== undefined"  @click="clearFade()" class="ml-4 far fa-times-circle icon-lg cursor-pointer fa-flag">
              <div v-if="clearEffect===true"  class="at-container" style="position:absolute; color: red;">
                  <span  class="at-item font-mitr" style="color: red;"> 
                    cleared
                  </span>
            </div>
            </i>
            <!-- <div v-if="clearEffect===true" class="at-container" style="position:absolute; color: red;">
                  <span  class="at-item font-mitr" style="color: red;"> 
                    clear
                  </span>
            </div> -->
            

            

          </div>
        </div>
      </div>
    <!--end::Search Form-->

     <!-- begin: pagination TOP -->
        <b-container v-if="tableDetail.page.show === true && (tableDetail.page.topbottom === 2 ||  tableDetail.page.topbottom === 3)" >
          <b-row class="py-6">
            <b-col cols="12"  md="6" lg="6" class="d-flex justify-start align-items-center" >
                <span class="mr-3"> Showing {{pageData.startIndex}} to {{pageData.endIndex }} of {{pageData.itemCount}} </span>
                <label class="mr-3 mb-0 d-none d-md-block">แสดง:</label>
                <select class="form-control mr-2 " style="width: 60px;" v-model="pageSize">
                  <option :value="page_item"  v-for="(page_item, page_index) in pageOption" v-bind:key="page_index" >{{page_item}}</option>
                </select>
                <span class="mr-3">รายการ</span>
                
            </b-col>
              
            <b-col cols="12"  md="6" lg="6" class="d-flex justify-end align-items-center"  >
              
              <span class="mr-3"> หน้า:</span>
              <select class="form-control mr-2 " style="width: 60px;" v-model="currentPage">
                  <option :value="curr_index"  v-for="curr_index in pageData.pageCount" v-bind:key="curr_index" >{{curr_index}}</option>
                </select>
              <!-- Use text in props -->
                <b-pagination-nav
                  pills
                  v-model="currentPage"
                  :number-of-pages="pageData.pageCount"
                  base-url="#"
                  first-text="First"
                  prev-text="Prev"
                  next-text="Next"
                  last-text="Last"
                  align="right"
                ></b-pagination-nav>
            </b-col>
          </b-row>
      </b-container>
      <!-- end: pagination -->
      <!-- b-pagination -->



    <!-- Table strcture used -->
    <!--begin::Body-->
    <div class="card-body py-0" :class="tableDetail.tableClass" >
      <!--begin::Table-->
      <div v-if="tableDetail.itemSelection.show === true" >
        <span @click="addSelectedAll()" style="width: 100px; border: 1px solid #d7d7d7;  padding: 5px 10px; cursor: pointer;">Select All</span>
        <span @click="removeAll()" style="width: 100px; border: 1px solid #d7d7d7;  padding: 5px 10px; border-left: 0; cursor: pointer;">Unselect All</span>
      </div>
      <div class="mitr-font table-responsive"   >
        <table
          
          class="table table-head-custom table-vertical-center mitr-font"
          style="font-family:mitr;"
        >
          <thead>
            <tr class="text-left">
            <!-- SELECT ALL -->
              <th class="pl-0" style="width: 40px"  v-if="tableDetail.itemSelection.show === true" >
                  <!-- <input
                    type="checkbox"
                    :checked="selectedAllCheck"
                    @click="addSelectedAll()"
                  /> -->
                  <!-- <input
                    type="checkbox"
                    :checked="selectedAllCheck"
                    @click="addSelectedAll()"
                  /> -->
                  <div  style="background-color: red; color:white; padding: 5px 8px; border-radius: 10px; width: 40px; text-align:center" >{{selectedList.length}}</div>
              </th>
              <!-- SELECT ALL -->

              <!-- <th class="pr-0" style="width: 50px">authors</th> -->
              <!-- <th style="min-width: 200px"></th> -->
              <th v-for="(header, hi) in tableStructure"  v-bind:key="hi" :style="header.width">{{header.columnName}}</th>
              <!-- <th style="min-width: 150px">progress</th> -->
              <th v-if="tableDetail.tableAction.show === true" class="pr-0 text-right" style="min-width: 150px">action</th> 
            </tr>
          </thead>
          <tbody>
            <template >
              <tr v-for="(item, i) in data" v-bind:key="i"  @click.right.prevent="openMenu($event,  item[$store.getters[tableDetail.useStore + '/itemId']] )"  >

                <!-- BEGIN:  ITEM SELECTION  -->


                <!-- SELECT COLUMN -->
                <td  class="pl-0" v-if="tableDetail.itemSelection.show  === true" >
                  <label class="checkbox checkbox-lg checkbox-single">
                    
                    <input  @click="addSelectedList(item, $event)" type="checkbox" value="1" :checked="selectedCheck[i]"  />
                    <span></span>
                  </label>
                </td>
                
               

                <!-- END:  ITEM SELECTION  -->
                <!-- *** image *** -->
                <td v-for="(col, ci) in tableStructure"  v-bind:key="ci"   >
                  <!-- BEGIN: *** image *** -->
                  <div v-if="col['type'] === 'image'" class="mt-1">
                    <span class="symbol-label">
                      <img 
                      :style="col.style"
                        :src="getFullPath(item[col.mainText])"
                        alt="img"
                      />
                    </span>
                  </div>
                   <!-- END: *** image *** -->


                   <!-- BEGIN: *** text *** -->
                  <div v-if="col['type'] === 'text'" class="symbol symbol-50 symbol-light mt-1">
                  <!-- *** Main Text *** -->
                  <div v-if="col['mainText']"
                    class="text-dark-75 font-weight-bolder text-hover-primary mb-1 font-size-lg "
                    :style="col['mainTextStyle']"
                    style="font-family:mitr;" 
                    >
                        {{item[col['mainText']]}} 
                  </div>

                   <!-- *** Main Red Text *** -->
                  <div v-if="col['mainRedText']"
                    class="text-dark-75 font-weight-bolder text-hover-primary mb-1 font-size-lg "
                    style="color: #f64e60 !important; font-family:'mitr';"
                    :style="col['mainRedTextStyle']"
                    >
                        {{item[col['mainRedText']]}} 
                  </div>

                   <!-- *** Main Blue Text *** -->
                   <div v-if="col['mainBlueText']"
                    class="text-dark-75 font-weight-bolder text-hover-primary mb-1 font-size-lg "
                    style="color: #2372ce !important; font-family:'mitr';"
                    :style="col['mainBlueTextStyle']"
                    >
                        {{item[col['mainBlueText']]}} 
                  </div>


                  

                  <!-- *** Copy Blue Text *** -->
                   <div v-if="col['copyBlueText']"
                    class="text-dark-75 font-weight-bolder text-hover-primary mb-1 font-size-lg "
                    style="color: #2372ce !important; font-family:'mitr'; cursor:pointer;"
                    :style="col['copyBlueTextStyle']"
                    v-clipboard:copy="item[col['copyBlueTextValue']]"

                    @click="copyText(item[col['copyBlueTextValue']], i)"

                    >
                        <div v-if="copyConfirm[i]===true" class="at-container" style="position:absolute;">
                              <span  class="at-item"> 
                                copied
                              </span>
                        </div>
                        {{item[col['copyBlueText']]}} 
                        
                        
                         
                  </div>
                 
                 



                  <div  v-if="col['linkText1']"
                    class="text-primary-75 font-weight-bolder  d-block text-hover-primary mb-1 font-size-md "
                    style="color: #2372ce; cursor:pointer; "
                    :style="col['linkText1Style']"
                    @click="linkTo(item[col['linkUrl1']])"
                    >
                         {{ item[col['linkText1']] }}   
                  </div>
                  <div v-if="col['subText']"
                    class="text-muted font-weight-bold text-muted d-block"
                    >
                        {{item[col['subText']]}}
                  </div>
                  <div v-if="col['subText2']"
                    class="text-muted font-weight-bold text-muted d-block"
                    >
                        {{item[col['subText2']]}}
                  </div>


                  <!-- *** Sub Blue Text *** -->
                   <div v-if="col['subBlueText']"
                    class="text-muted font-weight-bold text-muted d-block"
                    style="color: #2372ce !important; font-family:'mitr';"
                    >
                        {{item[col['subBlueText']]}} 
                  </div>

                  <!-- *** Sub Red Text *** -->
                   <div v-if="col['subRedText']"
                    class="text-muted font-weight-bold text-muted d-block"
                    style="color: #f64e60 !important; font-family:'mitr';"
                    >
                        {{item[col['subRedText']]}} 
                  </div>


                  </div>
                  <!-- END: *** text *** -->
                  

                  <!-- BEGIN: *** date *** -->
                  <div v-if="col['type'] === 'date'" class="symbol symbol-50 symbol-light mt-1">
                  <span v-if="col['mainText']"
                    class="text-dark-75 font-weight-bolder text-hover-primary mb-1 font-size-lg "
                    >
                        {{ dateFormatSelect( item[col['mainText']], col['format'] )  }} 
                  </span>
                   <span v-if="col['mainRedText']"
                    class="text-dark-75 font-weight-bolder text-hover-primary mb-1 font-size-lg "
                    style="color: #f64e60 !important;"
                    >
                    {{ dateFormatSelect( item[col['mainRedText']], col['format'] )  }} 
                  </span>
                   <span v-if="col['mainBlueText']"
                    class="text-dark-75 font-weight-bolder text-hover-primary mb-1 font-size-lg "
                    style="color: #2372ce !important;"
                    >
                        {{ dateFormatSelect( item[col['mainBlueText']], col['format'] )  }} 
                  </span>
                  <span  v-if="col['linkText1']"
                    class="text-primary-75 font-weight-bolder  d-block text-hover-primary mb-1 font-size-md "
                    style="color: #2372ce; cursor:pointer;"
                    @click="linkTo(col['linkUrl1'])"
                    >
                         {{ item[col['linkText1']] }}   
                  </span>
                  <span v-if="col['subText']"
                    class="text-muted font-weight-bold text-muted d-block "
                    >
                        {{item[col['subText']]}}
                  </span>
                  <span v-if="col['subText2']"
                    class="text-muted font-weight-bold text-muted d-block "
                    >
                        {{item[col['subText2']]}}
                  </span>
                  </div>
                   <!-- END: *** date *** -->


                  <!-- BEGIN: *** progress *** -->
                  <div v-if="col['type'] === 'progress'" class="d-flex flex-column w-90 mr-4">
                  <div
                      class="d-flex align-items-center justify-content-between mb-2"
                    >
                      <span
                        class="text-muted p-2mr-2 font-size-sm font-weight-bold py-2"
                        > {{item[col['subText']]}}</span
                      >
                      <span class="text-muted font-size-sm font-weight-bold py-2"
                        > {{item[col['subText2']]}}</span
                      >
                    </div>


                    <div class="progress progress-xs w-100">
                      <div
                        v-if="item"
                        class="progress-bar"
                        role="progressbar"
                        :style="{ 'width': progressBarPercent(item[col['start']] ,  item[col['end']] ) }"
                        v-bind:class="concatText('bg-',item[col['color']] )"
                        aria-valuenow="30"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      ></div>
                    </div>


                  </div>
                <!-- END: *** progress *** -->

                <!-- BEGIN: *** status *** -->
                <div v-if="col['type'] === 'status'" class="d-flex flex-column  mr-2 justify-content-center ">
                 
                    <span
                      class="label label-lg font-weight-bold label-light-primary label-inline p-4 " style="width: fit-content ;font-family: mitr; font-size: 1rem;"
                      v-bind:class="concatText('label-light-', item[col['color']] )"
                    >
                      {{ item[col['mainText']] }}
                    </span>
                    <span v-if="col['subText']"
                      class="text-muted font-weight-bold text-muted d-block pt-3"
                      >
                          {{item[col['subText']]}}
                    </span>
                    <span v-if="col['subText2']"
                      class="text-muted font-weight-bold text-muted d-block"
                      >
                          {{item[col['subText2']]}}
                    </span>
                    <span v-if="col['subText3']"
                      class="text-muted font-weight-bold text-muted d-block"
                      >
                          {{item[col['subText3']]}}
                    </span>
                  
                </div>
                <!-- END: *** status *** -->



                </td>
                 
                <td class="pr-0 text-right"  v-if="tableDetail.tableAction.show === true" >
                 <!-- <div v-for="(tableAct, tai) in tableDetail.tableAction.actions"  v-bind:key="tai" > -->
										<DropDownAction  v-if="tableDetail.tableAction.type === 'dropdown'" :itemId="item[$store.getters[tableDetail.useStore + '/itemId']]" :actionDetail="tableDetail.tableAction" ><i class="ki ki-bold-more-hor"></i></DropDownAction>

                    <IconAction :anItem="item"  :itemId="item[$store.getters[tableDetail.useStore + '/itemId']]" :actionDetail="tableDetail.tableAction" ></IconAction>
                 <!-- </div> -->
                  
                    <!-- <template v-if="tableDetail.tableAction.type === 'button'">
                          <div v-for=""
                            class="btn btn-icon btn-light btn-hover-primary btn-sm"
                          >
                            <span class="svg-icon svg-icon-md svg-icon-primary">
                              <inline-svg
                                src="/media/svg/icons/General/Settings-1.svg"
                              />
                            </span>
                          </div>
                          <div
                            class="btn btn-icon btn-light btn-hover-primary btn-sm mx-3"
                          >
                            <span class="svg-icon svg-icon-md svg-icon-primary">
                              <inline-svg
                                src="/media/svg/icons/Communication/Write.svg"
                              />
                            </span>
                          </div>
                          <div
                            class="btn btn-icon btn-light btn-hover-primary btn-sm"
                          >
                            <span class="svg-icon svg-icon-md svg-icon-primary">
                              <inline-svg src="/media/svg/icons/General/Trash.svg" />
                            </span>
                          </div>
                  </template> -->
                </td> 
              </tr>
            </template>
          </tbody>
        </table>
      </div>
      <!--end::Table-->
        
        <!-- begin: pagination  BOTTOM -->
        <b-container v-if="tableDetail.page.show === true && (tableDetail.page.topbottom === 1 ||  tableDetail.page.topbottom === 3)" >
          <b-row class="py-6">
            <b-col cols="12"  md="6" lg="6" class="d-flex justify-start align-items-center" >
                <span class="mr-3"> Showing {{pageData.startIndex}} to {{pageData.endIndex }} of {{pageData.itemCount}} </span>
                <label class="mr-3 mb-0 d-none d-md-block">แสดง:</label>
                <select class="form-control mr-2 " style="width: 60px;" v-model="pageSize">
                  <option :value="page_item"  v-for="(page_item, page_index) in pageOption" v-bind:key="page_index" >{{page_item}}</option>
                </select>
                <span class="mr-3">รายการ</span>
                
            </b-col>
              
            <b-col cols="12"  md="6" lg="6" class="d-flex justify-end align-items-center"  >
              
              <span class="mr-3"> หน้า:</span>
              <select class="form-control mr-2 " style="width: 60px;" v-model="currentPage">
                  <option :value="curr_index"  v-for="curr_index in pageData.pageCount" v-bind:key="curr_index" >{{curr_index}}</option>
                </select>
              <!-- Use text in props -->
                <b-pagination-nav
                  pills
                  v-model="currentPage"
                  :number-of-pages="pageData.pageCount"
                  base-url="#"
                  first-text="First"
                  prev-text="Prev"
                  next-text="Next"
                  last-text="Last"
                  align="right"
                ></b-pagination-nav>
            </b-col>
          </b-row>
      </b-container>
      <!-- end: pagination -->
      <!-- b-pagination -->
      
    </div>


    <!-- RIGHT CLICK -->
    <ul id="right-click-menu"  tabindex="-1" ref="right"  v-if="viewMenu===true && tableDetail.rightClick.show===true" v-click-outside="closeMenu"  :style="{top:top, left:left, position:'fixed', cursor:'pointer'}" >
        <li>{{this.item_id}}</li>
        <li>First menu item</li>
        <li>Second menu item</li>
    </ul>
    <!-- RIGHT CLICK -->



    <!--end::Body-->
  </div>
</template>

<script>
import shapeFormat from '@/mixins/shapeFormat.js';
import store from '@/core/services/store'; 
import Swal from "sweetalert2";

import DropDownAction from "@/mycore/MyDropDownAction.vue";
import IconAction from "@/mycore/MyIconAction.vue";

import { mapGetters } from "vuex";

import Vue from 'vue'

export default {
  name: "MyTable1",
  mixins: [shapeFormat],
  props: {
    tableDetail:{
      type: Object
    }
  },
  data() {
    return {

                exportFilename : "",
                columns : [
                          {
                              label: "Coupon Code",
                              field: "couponCode",
                          },
                          {
                              label: "Link",
                              field: "couponUrl",
                          },
                          {
                              label: "ชื่อลูกค้า",
                              field: "customerName",
                          },
                          {
                              label: "เบอร์โทรลูกค้า",
                              field: "phone",
                          },
                          {
                              label: "อีเมล",
                              field: "email",
                          },
                           {
                              label: "สถานะ",
                              field: "couponStatus",
                          },
                          {
                              label: "วันที่เริ่ม",
                              field: "startDateTime",
                          },
                          {
                              label: "วันสุดท้าย",
                              field: "endDateTime",
                          },
                          
                          // {
                          //     label: "Price",
                          //     field: "price",
                          //     dataFormat: this.priceFormat
                          // },
                          
                      ],
                      // excelData : [
                      //     {
                      //         product: "Beverage",
                      //         price: 10,
                      //         quantity: 2,
                      //         address: {
                      //             country: 'Armenia',
                      //             city: 'Yerevan',
                      //         }
                      //     },
                      //     {
                      //         product: "Snack",
                      //         price: 12,
                      //         quantity: 6,
                      //         address: {
                      //             country: 'Armenia',
                      //             city: 'Yerevan',
                      //         }
                      //     },
                      //     {
                      //         product: "Beverage",
                      //         price: 10,
                      //         quantity: 5,
                      //         address: {
                      //             country: 'Armenia',
                      //             city: 'Yerevan',
                      //         }
                      //     },
                      //     {
                      //         product: "Snack",
                      //         price: 12,
                      //         quantity: 3,
                      //         address: {
                      //             country: 'Armenia',
                      //             city: 'Yerevan',
                      //         }
                      //     }
                      // ],

      itemSelection: true,
      tableStructure:  [],
      // data: [],
      currentPage: 1,
      pageSize: 1,
      totalPages: 1,
      calPage : {},
      filParam: [],
      checked: false,
      selectedAllCheck: false,
      selectedCheck: [],
      httpBodyReq : {},

      /***** BEGIN: FOR RIGHT CLICK */
      viewMenu: false,
      top: '0px',
      left: '0px',
      /***** END: FOR RIGHT CLICK */

      item_id: "",

      copySucceeded: null,
      copyConfirm: [],
      clearEffect: false,
      
    };
  },

  
 
  async created() {


// this.$loading.show();
    if(this.tableDetail.page.show === true)
    {
        this.pageSize = this.tableDetail.page.pageSize ;

    }

    this.copyConfirm.forEach( (item, ind) => {
          item = false;
      } 
    );

    

    this.itemSelection = this.tableDetail.itemSelection;

    this.tableStructure = this.tableDetail.tableStructure;

    // this.data = this.tableDetail.data;

    // await this.$store.dispatch(this.tableDetail.reload.storeAction);
    await this.reload();


    // this.totalPages = Math.ceil(this.tableDetail.data.length  / this.pageSize);
    
    // this.calPage =  this.calculatePage(this.totalItems, this.currentPage, this.pageSize);
    

    // console.log("his.$store.getters[ coupon /itemCount] >>> ",this.$store.getters[ this.tableDetail.useStore + "/itemCount"]);

    

    //  console.log("cols >>> ",cols);


  },
  mounted() {
    // let cols = [];

    // if(this.data !== null && this.data !== undefined )
    // {
    //   cols = Object.keys(this.data[0]);
    // }

    //  this.tableColumns = cols;
    
  },
  computed:{
      // ...mapGetters(["items"]),
      data: {
        set(){
          // this.calPage =  this.calculatePage(this.totalItems, this.currentPage, this.pageSize);
          // console.log("this.calPage >>> ",this.calPage);
        },
        get(){
          // console.log("this.$store.getters[] >>> ",this.$store.getters["table/items"]);
          // console.log("his.tableDetail.reload.storeGetter >>> ",this.tableDetail.reload);
          return this.$store.getters[this.tableDetail.reload.dataList] ;
        }
      },
      // totalItems: {
      //    set(){
      //     //  this.calPage =  this.calculatePage(this.totalItems, this.currentPage, this.pageSize);
      //   },
      //   get(){
      //     console.log("this.$store.getters[ this.tableDetail.useStore + /itemCount] >>> ",this.$store.getters[ this.tableDetail.useStore + "/itemCount"]);
      //     return this.$store.getters[ this.tableDetail.useStore + "/itemCount"];
      //   }
      // },
      pageData: {
         set(){
          //  this.calPage =  this.calculatePage(this.totalItems, this.currentPage, this.pageSize);
        },
        get(){
          
          return this.$store.getters[ this.tableDetail.useStore + "/pageData"];
        }
      },
      pageOption: {
         set(){
        },
        get(){
          return this.tableDetail.page.pageOption === null ||  this.tableDetail.page.pageOption === undefined ? [1] : this.tableDetail.page.pageOption;
        }
      },
      selectedList:{
         set(){
        },
        get(){
          return this.$store.getters[ this.tableDetail.itemSelection.store + "/selected"];
        }
      }
  },
  watch:{
          // filParam:{
          //   handler(){
          //     // console.log("this.filParam >>>>> ",this.filParam);  
                  
          //   },
          //   deep:true
          // },
          async currentPage(){
            // this.calPage = this.calculatePage(this.totalItems, this.currentPage, this.pageSize);
            // return this.calPage.currentPage;
            await this.reload();
          },
          async pageSize(){
              // this.calPage = this.calculatePage(this.totalItems, this.currentPage, this.pageSize);
              // console.log("PAGESIZE CHANGE this.totalItems >>>>> ",this.totalItems);  
              // console.log("PAGESIZE CHANGE this.currentPage >>>>> ",this.currentPage); 
              // console.log("PAGESIZE CHANGE this.pageSize >>>>> ",this.pageSize); 
              // console.log("PAGESIZE CHANGE this.calPage >>>>> ",this.calPage);  
              // return this.calPage.pageSize;
              await this.reload();

              
          },
          selectedList:{
             handler(){

                this.changeSelectedList()

                    
              },
              deep:true
          },

          pageData:{
             handler(){

                // console.log("pageData >>> ",this.$store.getters[ this.tableDetail.useStore + "/pageData"]);
                // console.log("this.tableDetail.useStore >>> ",this.tableDetail.useStore);

                    
              },
              deep:true
          },

    },

  components: {
    DropDownAction,
    IconAction
  },
  methods: {

    // hello(){
    //   console.log("HELLO");
    // },

    async reload(){

      //*** table filter
      // this.prepareFilter();
      

      //*** add pagination
      if(this.tableDetail.page !== null && this.tableDetail.page !== undefined && this.tableDetail.page.show === true )
      {
        this.httpBodyReq["page"] = this.currentPage;
        this.httpBodyReq["pageSize"] = this.pageSize;
      }
      
     

      let params = {
        apiUrl: this.tableDetail.reload.apiUrl,
        params: this.httpBodyReq,
      };

      await this.$store.dispatch(this.tableDetail.reload.storeAction, params);
      // this.data = store.getters["table/items"];

      this.changeSelectedList()

    },

    prepareFilter(){

      // console.log("items >>> ",this.items);

      // this.filParam = [];


      const inputParam = this.tableDetail.tableFilter;

      if(inputParam === null || inputParam === undefined || inputParam.length <= 0){
        Swal.fire({
          icon: 'warning',
          title: 'ไม่มีข้อมูลสำหรับฟิลเตอร์',
        });
        return ;
      }

      this.httpBodyReq = {};

      inputParam.forEach((item , ind) => {
        //  console.log("ind >>> ",ind," inputParam[ind]['mapTo'] >>>> ",inputParam[ind]["mapTo"], " this.filParam[ind] >>> ",this.filParam[ind]);
         if(inputParam[ind]["type"] === "number")
         {
            this.httpBodyReq[inputParam[ind]["param"]] = isNaN(Number(this.filParam[ind])) ? 0 :  Number(this.filParam[ind]);
         }else if(inputParam[ind]["type"] === "datetime")
         {
           this.httpBodyReq[inputParam[ind]["param"]] = this.formatDate(this.filParam[ind]);
         }
         else{
            this.httpBodyReq[inputParam[ind]["param"]] = this.filParam[ind];
         }
      });

      // await this.reload();
    },

    
    //*** Search Button 
    async submitFilter(){
      // this.filParam = [];


      const inputParam = this.tableDetail.tableFilter;

      //  console.log("inputParam >>> ",inputParam);

      if(inputParam === null || inputParam === undefined || inputParam.length <= 0){
        Swal.fire({
          icon: 'warning',
          title: 'ไม่มีข้อมูลสำหรับฟิลเตอร์',
        });
        return ;
      }

      this.httpBodyReq = {};
      this.currentPage = 1;

      inputParam.forEach((item , ind) => {
        //  console.log("ind >>> ",ind," inputParam[ind]['mapTo'] >>>> ",inputParam[ind]["mapTo"], " this.filParam[ind] >>> ",this.filParam[ind]);
         if(inputParam[ind]["type"] === "number")
         {
            this.httpBodyReq[inputParam[ind]["param"]] = isNaN(Number(this.filParam[ind])) ? 0 :  Number(this.filParam[ind]);
         }else if(inputParam[ind]["type"] === "datetime")
         {
           this.httpBodyReq[inputParam[ind]["param"]] = this.formatDate(this.filParam[ind]);
         }
         else if(inputParam[ind]["type"] === "text")
         {
           this.httpBodyReq[inputParam[ind]["param"]] = this.filParam[ind];
         }
         else{
            this.httpBodyReq[inputParam[ind]["param"]] = this.filParam[ind];
         }
      });

      // console.log("this.httpBodyReq >>> ",this.httpBodyReq);

      await this.reload();

    },

    //*** Search Button 
    async clearFilter(){

      this.filParam = [];

      const inputParam = this.tableDetail.tableFilter;

      this.httpBodyReq = {};

      this.currentPage = 1;

      // this.removeAll();

      await this.reload();

    },

     async addSelectedList(tr, event) {
      event.stopPropagation();

      let data = this.tableDetail.itemSelection.store + "/addSelected";

      this.$store.dispatch(
       data
       ,
        tr
      );
     },

    addSelectedAll() {
      let data = this.tableDetail.itemSelection.store + "/SELECTED_All";
      this.$store.commit(data);
    },

    changeSelectedList(){
             const uid = this.tableDetail.useStore + "/itemId";

              
               this.selectedCheck = [];
              
              for(let chi = 0; chi < this.data.length; chi++)
               {

                 let check = false;


                  let selectedIndex = this.selectedList.findIndex( p => p[this.$store.getters[uid]] === this.data[chi][this.$store.getters[uid]]   );

                  if(selectedIndex === null || selectedIndex < 0 || selectedIndex === undefined){
                      check = false;
                  }else{
                      check = true;
                  }

                  Vue.set(this.selectedCheck, chi, check);


               }

               if(this.selectedList.length === this.data.length)
               {
                 this.selectedAllCheck = true;

                 

               }else{
                 this.selectedAllCheck = false;
               }


                // console.log("this.selectedList >>>>> ",this.selectedList);  
                // console.log("this.selectedCheck >>>>> ",this.selectedCheck); 
    },

    removeAll() {
     let data = this.tableDetail.itemSelection.store + "/UNSELECTED_All";
      this.$store.commit(data);
    },
    concatText(text1 , text2){
      return text1 + text2;
    },
    linkTo(url){
      window.open( url, "_blank");
    },

    callStoreAction(btn){
      this.$store.dispatch(btn.storeAction, btn);
    },

    getText(){
      // console.log("Hello text");
    },

    //******************** FOR RIGHT CLICK ************************/

    setMenu(top, left) {
          
            // largestHeight = window.innerHeight - this.$$.right.offsetHeight - 25;
            // largestWidth = window.innerWidth - this.$$.right.offsetWidth - 25;

            // if (top > largestHeight) top = largestHeight;

            // if (left > largestWidth) left = largestWidth;

            this.top = top + 'px';
            this.left = left + 'px';

        },
        

        closeMenu() {
            this.viewMenu = false;
        },

        openMenu(e, item_id) {
            // console.log("e.y >>> ",e.y);
            // console.log("e.x >>> ",e.x);

            // console.log("e.clientY >>> ",e.clientY);
            // console.log("e.clientX >>> ",e.clientX);
            
            
            // console.log("e.pageY >>> ",e.pageY);
            // console.log("e.pageX >>> ",e.pageX);

            
            // console.log("e.screenY >>> ", e.screenY);
            // console.log("e.screenX >>> ",e.screenX);

            if(!this.tableDetail.rightClick){
              return;
            }

            if(this.tableDetail.rightClick.show!==true){
              return;
            }

            this.item_id = item_id;

            this.viewMenu = true;

            this.$nextTick(() => {
                // this.$$.right.focus();

                // this.$refs.right.focus();

                this.setMenu(e.y, e.x);
            });
            // this.$$.right.focus();

            // this.setMenu(e.y, e.x)
            
            e.preventDefault();
        },

    //******************** FOR RIGHT CLICK ************************/


    // handleCopyStatus(val){
    //   this.copySucceeded = val;
    //   console.log("val >>> ",val);

    //   if(val === true)
    //   {


    //      this.$bvToast.toast(`copy ข้อมูล `, {
    //         title: "ทำการ copy ข้อมูลสำเร็จแล้ว",
    //         toaster: "b-toaster-top-center",
    //         solid: true,
    //         variant: "success",
    //         appendToast: false
    //       });
    //   }
    // }
    // ,

     copyText(val, i){
       Vue.set(this.copyConfirm , i , true);
       setTimeout(() => {
          Vue.set(this.copyConfirm , i , false);
        }, 3000);
       
    },
    clearFade(){
      this.clearEffect = true;
      this.clearFilter();
       setTimeout(() => {
          this.clearEffect = false;
        }, 3000);
       
    } ,
    
    uuid() {
      // console.log("HELLO");
      return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
      });
    },

    progressBarPercent(start, end){

      if(start === null || start === undefined || start === "ไม่ระบุ" || end === null || end === undefined || end === "ไม่ระบุ"){
        return "0%"
      }
      
      let today = new Date;
      let allDate = this.date_diff_indays(start , end);
      let usedDate = this.date_diff_indays(start , today);
      let percenTage = 0;
      if (allDate === 0){
        return "0%"
      }
      else if( this.formatDate(today)  >=  this.formatDate(end) ){
        return "100%"
      }
      percenTage =  ( (usedDate + 1) / (allDate + 1) ) * 100
      
      return percenTage.toString().concat("%")

    }
    
   
  }
};
</script>


<style>
  .symbol-label{
    background-color: white !important;
  }

   .mitr-font{
     font-family: "mitr" !important;
   }

   #right-click-menu{
    background: #FAFAFA;
    border: 1px solid #BDBDBD;
    box-shadow: 0 2px 2px 0 rgba(0,0,0,.14),0 3px 1px -2px rgba(0,0,0,.2),0 1px 5px 0 rgba(0,0,0,.12);
    display: block;
    list-style: none;
    margin: 0;
    padding: 0;
    position: absolute;
    width: 250px;
    z-index: 999999;
}

#right-click-menu li {
    border-bottom: 1px solid #E0E0E0;
    margin: 0;
    padding: 5px 35px;
}

#right-click-menu li:last-child {
    border-bottom: none;
}

#right-click-menu li:hover {
    background: #1E88E5;
    color: #FAFAFA;
}

/****** animation  */
div.at-container {
  display: flex;
  align-items: center;
  font-size: 0.9rem;
  /* justify-content: center; */
  /* height: 100%; */
}
.at-item {
  /* width: 100px;
  height: 100px;
  background-color:#ffe672; */
  /* animation-name: fade-out-top;
  animation-duration: 1s;
  animation-timing-function: ease;
  animation-delay: 2s;
  animation-iteration-count: 5;
  animation-direction: normal;
  animation-fill-mode: none; */
  /* shorthand */
  animation: fade-out-top 3s ease 0s 1 normal none;
 
}
@keyframes fade-out-top {
  0%{
    transform: translateY(0);
    opacity: 1;
  }
  100%{
    transform: translateY(-50px);
    opacity: 0;
  }
}

.fa-flag:hover {
    color: red;
}

</style>
