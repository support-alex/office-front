import axios from 'axios';
import store from "@/core/services/store";
import Swal from 'sweetalert2';

import { dataTransform,dataFlattening } from '@/mycore/util.js';

const envBaseURL = process.env.VUE_APP_API;
const envImgUrl = process.env.VUE_APP_IMAGE_URL;

const state = {
  currentShopCode: "",

  //****  TEST
  itemId: "uid",
  
  searchParameters: {},
  transform: 
    [
      {
        type: "condition",
        keyCondition: "statusInfo",
        keyResult: "statusColor",
        defaultTo: "warning",
        mapping: [
          { /* [3] */ from:"active"  /* [4] : item[ele["keyCondition"]]   */, to: "success"},  /* [1] => index = 1 */
          { /* [3] */ from:"trial"  /* [4] : item[ele["keyCondition"]]   */ , to:"warning"}, /* [1] => index = 2 */
          { /* [3] */ from:"notStart"  /* [4] : item[ele["keyCondition"]]   */ , to:"dark"}, /* [1] => index = 2 */
          { /* [3] */ from:"expired" /* [4] : item[ele["keyCondition"]]   */ , to: "danger"}, /* [1] => index = 3 */
          { /* [3] */ from:"onHold" /* [4] : item[ele["keyCondition"]]   */ , to: "info"}, /* [1] => index = 3 */
            
        ]
      },

      {
        type: "condition",
        keyCondition: "statusInfo",
        keyResult: "trialProgressColor",
        defaultTo: "warning",
        mapping: [
          { /* [3] */ from:"nothing"  /* [4] : item[ele["keyCondition"]]   */, to: "warning"},  /* [1] => index = 1 */
        ]
      },

       {
        type: "conditionLogic",
        keyCondition: "progressPercent",
        keyResult: "progressColor",
        defaultTo: "success",
        mapping: [
          { logic: "gteq", comparison: 50, to: "warning" },  /* [1] => index = 1 */
          // { logic:"gt" , comparison : 80  , to: "success"},  /* [1] => index = 1 */
          // { logic:"gteq" , comparison : 20  , to:"warning"}, /* [1] => index = 2 */
          // { logic:"ls" , comparison : 20  , to:"warning"}, /* [1] => index = 2 */
          // { logic:"eq" , comparison : ""   , to:"dark"}, /* [1] => index = 2 */
          // { logic:"inq" , comparison : ""  , to: "danger"}, /* [1] => index = 3 */
          // { logic:"in" , comparison : ""   , to: "info"}, /* [1] => index = 3 */
            
        ]
      },

      {
        type: "condition",
        keyCondition: "statusInfo",
        keyResult: "progressColor",
        defaultTo: "success",
        mapping: [
          { /* [3] */ from:"expired" /* [4] : item[ele["keyCondition"]]   */ , to: "danger"}, /* [1] => index = 3 */
        ]
      },

   

      {
        type: "concat",
         keyResult: "packageText",
         default: "ไม่มีข้อมูล",
        mapTextPrefix: "Package: ",
        // mapTextBetween: "/",
        // mapTextSuffix: "/",
        useField1: "packageSize",
        // useField2 : ""
      },
      {
        type: "concat",
         keyResult: "logoUrl",
         default: "https://brand.bisinnoco.com/mobile-coupon/",
        mapTextPrefix: "",
        useField1: "uid",
        mapTextBetween: "/",
        useField2 : "shopLogo",
        // mapTextSuffix: "/",

      },
      {
        type: "concat2",
         keyResult: "expired",
         default: "",
          mapTextPrefix: "exp ",
          useField1: "expireDateTime",
        // mapTextBetween: "/",
        // useField2 : "",
        // mapTextSuffix: "/",

      },
      {
        type: "concat2",
         keyResult: "used",
         default: "",
          mapTextPrefix: "used ",
          useField1: "usedDateTime",
          field1Type: "datetime"
        // mapTextBetween: "/",
        // useField2 : "",
        // mapTextSuffix: "/",

      },
      {
        type: "concat2",
         keyResult: "access",
         default: "",
        mapTextPrefix: "เข้าถึง ",
        useField1: "accessCount",
        mapTextBetween: " ครั้ง",
        // useField2 : "",
        // mapTextSuffix: "/",

      },

      {
        type: "date_th",
         keyResult: "startDateTimeTh",
         default: "",
        useField: "startDateTime",
        

      },

      {
        type: "date_th",
         keyResult: "endDateTimeTh",
         default: "",
        useField: "endDateTime",
        

      },

      {
        type: "date_th",
         keyResult: "trialStartDateTimeTh",
         default: "",
        useField: "trialStartDateTime",
        

      },

      {
        type: "date_th",
         keyResult: "trialEndDateTimeTh",
         default: "",
        useField: "trialEndDateTime",

      },

      {
        type: "date_th",
         keyResult: "createDateTimeTh",
         default: "",
        useField: "createDateTime",

      },
    ]
  ,
  pageData: {},
  items: [
              {
                uid: "0001",
                couponCode: "YB7FH9UT65",
                // description: "บริษัทเซ็นทรัล",
                customerName: "John Part",
                phone: "0979889878",
                email: "johnpar@admin.com",
                couponStatus: "ว่างอยู่",
                createDateTime: "2022-01-03",
                createBy: "admin1@lotus.com",
                progressPercent: "52",
                progressStart: "ใช้ไป 200",
                progressEnd: "ทั้งหมด 500"
               
              },
              {
                uid: "0002",
                couponCode: "H7BF5KGHJ",
                customerName: "Poe et",
                phone: "0999999997",
                email: "poet.et@gmail.com",
                description: "บริษัท ใบชา จำกัด",
                couponStatus: "หมดอายุ",
                createDateTime: "2022-02-28",
                createBy: "admin2@lotus.com",
                progressPercent: "32",
                progressStart: "ใช้ไป 300",
                progressEnd: "ทั้งหมด 1000"
                
              },
              {
                uid: "0003",
                couponCode: "A8FYU6XT76",
                customerName: "Amber See",
                phone: "0876756321",
                email: "amber.see@gmail.com",
                // description: "โลตัส",
                couponStatus: "ส่งออก",
                accessCount: 34,
                expireDateTime: "2022-11-09",
                createDateTime: "2022-02-28",
                createBy: "admin1@lotus.com",
                progressPercent: "62",
                progressStart: "ใช้ไป 20",
                progressEnd: "ทั้งหมด 100"
              },
              {
                id: "0004",
                couponCode: "ABFH3R5GV",
                customerName: "Ethan Chor",
                phone: "098989348",
                email: "ethan.chor@gmail.com",
                // description: "โลตัส",
                couponStatus: "ใช้แล้ว",
                createDateTime: "2022-02-28",
                createBy: "admin1@lotus.com",
                progressPercent: "2",
                progressStart: "ใช้ไป 7",
                progressEnd: "ทั้งหมด 10"
              }
    ], // end: data,
  selected: [],
    
  flatten: [
    { from: "firstTimeOfUse", to: "firstTimeOfUse" },
    { from: "shopInfo.shopInfoId", to: "uid" },
    { from: "shopInfo.name", to: "name" },
    { from: "shopInfo.package", to: "packageSize" },
    { from: "shopInfo.createDateTime", to: "createDateTime" },
    { from: "package.numberOfUse", to: "numberOfUse" },
    { from: "package.startDateTime", to: "startDateTime" },
    { from: "package.endDateTime", to: "endDateTime" },
    { from: "shopInfo.statusInfo", to: "statusInfo" },
    { from: "shopInfo.logo", to: "shopLogo" },
    { from: "shopInfo.createBy", to: "createBy" },
    { from: "trial.startDateTime", to: "trialStartDateTime" },
    { from: "trial.endDateTime", to: "trialEndDateTime" },
  ],

    formData: {},
  

  
};

const getters = {
  currentShopCode() {
    return state.currentShopCode;
  },

  pageData: state => state.pageData,
  items: state => state.items,
  itemId: state => state.itemId,
  searchParameters: state => state.searchParameters,
  selected: state => state.selected,
  // currentUser(state) {
  //   return state.user;
  // },
  // isAuthenticated(state) {
  //   return state.isAuthenticated;
  // }
};

const actions = {

  async loadData({
   commit
  },param) {

    let res = null;
    let list = [];

    // let url = param.apiUrl;
    let data = param.params === null || param.params === undefined ? {page:1, pageSize: 20} :  param.params ;
    // let url = param.apiURL;
    // let data = param.params;
    // let form = param.formDetail

    let  url = "/office-api/shop/get-all-shop"

    // console.log("%%%%%%%%%% loadData url >>> ",url);
    // console.log("loadData loadDataloadDataloadData %%%%%%%%%% loadData data >>> ",data);
    // console.log("%%%%%%%%%% loadData data >>> ",data);

    // console.log("%%%%%%%%%% loadData BEFORE TRANSFORM >>> ");

    // console.log("%%%%%%%%%% 1 store.state.auth.apiHeader >>> ",store.state.auth.apiHeader);

    try {

      store.commit("common/openLoading");

      res = await axios.post(store.state.common.baseUrl + url, data, store.state.auth.apiHeader);

      //  console.log("%%%%%%%%%% 2 store.state.auth.apiHeader >>> ",store.state.auth.apiHeader);
      // console.log("%%%%%%%%%% loadData BEFORE TRANSFORM >>> ",res.data.allList);

      let newlist = dataFlattening(res.data, state.flatten);  
      
      let item = { list: newlist, transform: state.transform };

      // commit("FLATTENING", res.data.allList);
      commit("TRANSFORM", item);

      // res = state.items;
      // let item = {list: state.items , transform:  state.transform};

      // commit("TRANSFORM", item);
      // commit("SET_ITEMCOUNT", 50);
    
     


      //  console.log("%%%%%%%%%% SET_ITEMCOUNT >>> ",res.data.itemCount);

      store.commit("common/closeLoading");

    } catch (err) {
      // console.log("err >>> ",err.message);
       Swal.fire({
            icon: 'warning',
            title: 'ไม่สามารถรับข้อมูลได้',
       });
      store.commit("common/closeLoading");
    
    }

    
    return list;
  },

  // [LOGIN](context, credentials) {
  //   return new Promise(resolve => {
  //     ApiService.post("login", credentials)
  //       .then(({ data }) => {
  //         // console.log("Here what post returns", data);
  //         context.commit(SET_AUTH, data);
  //         resolve(data);
  //       })
  //       .catch(({ response }) => {
  //         context.commit(SET_ERROR, response.data.errors);
  //       });
  //   });
  // },

  // [GOOGLE_LOGIN](context, credentials) {
  //   return new Promise(resolve => {
  //     ApiService.post("http://localhost:8000/gauth/xxx", credentials)
  //       .then(({ data }) => {
  //         console.log("Here what post returns", data);
  //         // context.commit(SET_AUTH, data);
  //         resolve(data);
  //       })
  //       .catch(({ response }) => {
  //         console.log("ERROR >>> ",response);
  //         // context.commit(SET_ERROR, response.data.errors);
  //       });
  //   });
  // },

  // [LOGOUT](context) {
  //   context.commit(PURGE_AUTH);
  //   window.location.href = "/login";
  // },
  // [REGISTER](context, credentials) {
  //   return new Promise(resolve => {
  //     ApiService.post("login", credentials)
  //       .then(({ data }) => {
  //         context.commit(SET_AUTH, data);
  //         resolve(data);
  //       })
  //       .catch(({ response }) => {
  //         context.commit(SET_ERROR, response.data.errors);
  //       });
  //   });
  // },
  
};

const mutations = {


  //*** BEGIN : LIST ACTION */
 FLATTENING(state, item) {

    let list = item;
    let transform = state.flatten;
    newlist = dataFlattening(list, transform);  
    
    // console.log("@@@@@@@@@@@@@@@@@@@ state.items @@@@@@@@@@@@ ", state.items);
    

  },
  
    TRANSFORM(state, item) {

    let list = item.list;
    let transform = item.transform;
    state.items =  dataTransform(list, transform);   
    
    // console.log("@@@@@@@@@@@@@@@@@@@ state.items @@@@@@@@@@@@ ", state.items);

   

    },

  SET_ITEMS(state, items) {
        Object.assign(state.items, items)
    },
  SET_ITEMCOUNT(state, pageData) {
      // console.log("@@@@@@@@@@@@@ pageData >>> ",pageData);
        Object.assign(state.pageData, pageData)
    },

    ADD_SELECTED(state, item) {

      var fil = state.selected.filter(x => x[state.itemId] === item[state.itemId]);
      if (fil.length < 1) {
          state.selected.push(item);
      } else {
        const ItemIndex = state.selected.findIndex((p) => p[state.itemId] == item[state.itemId])
        state.selected.splice(ItemIndex, 1);
      }

      // console.log("selected >>> ",state.selected);
      // console.log("selected number >>> ",state.selected.length);

  },
  SELECTED_All(state) {
        let allItems = state.items;

    // if (list)
      if (state.selected.length < state.items.length) {
             state.selected = [];
              state.selected.push(...allItems);
      } else {
         state.selected = [];
      }
    
    },

  UNSELECTED_All(state) {
        state.selected = [];
    },
    CLEAR_ALL(state) {
        state.selected = [];
        state.selectedNumber = 0;

    },

  UPDATE_CURRENT_SHOP_CODE(state, item) {
    // console.log("mutations/UPDATE_CURRENT_SHOP_CODE ", item);
    state.currentShopCode = item;
  },
  
};

export default {
  isRegistered: false,
  namespaced: true,
  state,
  actions,
  mutations,
  getters
};
