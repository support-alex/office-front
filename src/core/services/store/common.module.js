
import axios from 'axios'
import store from "@/core/services/store";


const envBaseURL = process.env.VUE_APP_API;
const envImgUrl = process.env.VUE_APP_IMAGE_URL;

const state = {
   baseUrl: envBaseURL,
  imageUrl: envImgUrl,
   loadingActive: true,
   
};

const getters = {

  baseUrl: state => state.baseUrl,
  imageUrl: state => state.imageUrl,
  loadingActive: state => state.loadingActive,
  // auth() {
  //   return state.auth;
  // },
  // currentUser(state) {
  //   return state.user;
  // },
  // isAuthenticated(state) {
  //   return state.isAuthenticated;
  // }
};

const actions = {
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


  openLoading(state) {
    state.loadingActive = true;

    console.log("@@@@@@@@@@@@@@@@@@@@@ openLoading >>> ",state.loadingActive);
  },
  closeLoading(state) {
    state.loadingActive = false;
    console.log("@@@@@@@@@@@@@@@@@@@@@ closeLoading >>> ",state.loadingActive);
  }
  // [UPDATE_AUTH](state, new_auth) {
  //   // console.log("mutations/UPDATE_AUTH ", new_auth);
  //   state.auth = new_auth;
  // },
  // [UPDATE_TOKEN](state) {

  //   var tk = localStorage.getItem("id_token");
  //   // var tkpaser = JSON.parse(tk);
  //   state.apiHeader = {
  //     headers: {
  //       Authorization: "bearer " + tk
  //     }
  //   };
  //   console.log( state.apiHeader );
  // },
  // [SET_HEADER](state, tk) {
  //   state.apiHeader = {
  //     headers: {
  //       Authorization: "bearer " + tk
  //     }
  //   }
  //   // state.errors = error;
  // },
  // [SET_ERROR](state, error) {
  //   state.errors = error;
  // },
  // [SET_AUTH](state, user) {
  //   state.isAuthenticated = true;
  //   state.user = user;
  //   state.errors = {};
  //   JwtService.saveToken(state.user.token);
  //   console.log("SET_AUTH >>> JwtService.saveToken");
  // },
  // [SET_PASSWORD](state, password) {
  //   state.user.password = password;
  // },
  // [PURGE_AUTH](state) {
  //   state.isAuthenticated = false;
  //   state.user = {};
  //   state.errors = {};
  //   JwtService.destroyToken();
  //    console.log("PURGE_AUTH >>> JwtService.destroyToken");
  // }
};

export default {
  isRegistered: false,
  namespaced: true,
  state,
  actions,
  mutations,
  getters
};
