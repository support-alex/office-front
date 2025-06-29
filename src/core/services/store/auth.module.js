import ApiService from "@/core/services/api.service";
import JwtService from "@/core/services/jwt.service";
import axios from 'axios'
import store from "@/core/services/store";

// action types
export const VERIFY_AUTH = "verifyAuth";
export const LOGIN = "login";
export const GOOGLE_LOGIN = "google_login";
export const LOGOUT = "logout";
export const REGISTER = "register";
export const UPDATE_PASSWORD = "updateUser";

// mutation types
export const PURGE_AUTH = "logOut";
export const SET_AUTH = "SET_AUTH";
export const SET_PASSWORD = "setPassword";
export const SET_ERROR = "setError";

// export const SET_HEADER = "setHeader";

export const UPDATE_TOKEN = "updateToken";

export const UPDATE_AUTH = "updateAuth";


const state = {
  apiHeader: null,
  errors: null,
  user: {},
  isAuthenticated: !!JwtService.getToken(),
  auth: false
};

const getters = {
  auth() {
    return state.auth;
  },
  currentUser(state) {
    return state.user;
  },
  isAuthenticated(state) {
    return state.isAuthenticated;
  }
};

const actions = {

  async LOGIN({
    commit
  }, param) {

    
    let url = "/office-api/auth/api_login";
    let data = param;

    console.log("auth/login >> param",data);
    //  let form = param.formDetail

    
    let res = null;
    
    // store.commit("common/BUTTON_LOCK");

    try {
      res = await axios.post(store.state.common.baseUrl + url, data);
      
      console.log("LOGIN >>> ", res.data)
      // res = state.items;

      
      commit("SET_AUTH", res.data);
      
      // console.log("state.apiHeade >> ",state.apiHeader);
      window.location.href = "/";


      // if (form.nextAction === "redirect") {
      //   // redirectTo
      //   // window.location.href = form.redirectTo;
      //   router.push(form.redirectTo)
      // }



    } catch (err) {
      //  Swal.fire({
      //       icon: 'warning',
      //       text: 'Username หรือ Password ไม่ถูกต้อง',
      //  });
      // store.commit("common/BUTTON_UNLOCK");
    }
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

  [GOOGLE_LOGIN](context, credentials) {
    return new Promise(resolve => {
      ApiService.post("http://localhost:8000/gauth/xxx", credentials)
        .then(({ data }) => {
          // console.log("Here what post returns", data);
          context.commit(SET_AUTH, data);
          resolve(data);
        })
        .catch(({ response }) => {
          // console.log("ERROR >>> ",response);
          // context.commit(SET_ERROR, response.data.errors);
        });
    });
  },

  LOGOUT(context) {
    context.commit(PURGE_AUTH);
    window.location.href = "/login";
  },
  [REGISTER](context, credentials) {
    return new Promise(resolve => {
      ApiService.post("login", credentials)
        .then(({ data }) => {
          context.commit(SET_AUTH, data);
          resolve(data);
        })
        .catch(({ response }) => {
          context.commit(SET_ERROR, response.data.errors);
        });
    });
  },
  async [VERIFY_AUTH]() {
    // let res = null;

    // console.log("VERIFY_AUTH >>> ",store.auth.state.apiHeader)
    var url = store.state.common.baseUrl + "/office-api/auth/check-authentication";
    try {
      await axios.post(url, {}, store.auth.state.apiHeader);
      
        // context.commit(SET_AUTH, res.data);
    }
    catch (err) {
        // console.log("VERIFY_AUTH ERROR !!! >>> ", err.response)
    }
  },
  // [VERIFY_AUTH](context) {
  //   if (JwtService.getToken()) {
  //     ApiService.setHeader();
  //     ApiService.post("/office-api/auth/check-authentication", {})
  //       .then(({ data }) => {
  //         context.commit(SET_AUTH, data);
  //       })
  //       .catch(({ response }) => {
  //         context.commit(SET_ERROR, response.data.errors);
  //         // this.$router.push({ name: "login" });
  //       });
  //   } else {
  //     // context.commit(PURGE_AUTH);
  //     // this.$router.push({ name: "login" });
  //   }
  // },
  [UPDATE_PASSWORD](context, payload) {
    const password = payload;

    return ApiService.put("password", password).then(({ data }) => {
      context.commit(SET_PASSWORD, data);
      return data;
    });
  }
};

const mutations = {

  UPDATE_AUTH(state, new_auth) {
    // console.log("mutations/UPDATE_AUTH ", new_auth);
    state.auth = new_auth;
  },
  UPDATE_TOKEN(state) {

    
    var tk = localStorage.getItem("id_token");
    // var tkpaser = JSON.parse(tk);
    state.apiHeader = {
      headers: {
        Authorization: "bearer " + tk,
        "Access-Control-Allow-Origin": "*"
      }
    };
    console.log( state.apiHeader );
  },

  SET_HEADER(state, tk) {
    state.apiHeader = {
      headers: {
        Authorization: "bearer " + tk
      }
    }
    console.log("@@@@@@@@@@ SET_HEADER state.apiHeader >>> ",state.apiHeader);

    // state.errors = error;
  },

  [SET_ERROR](state, error) {
    state.errors = error;
  },

 

  // [SET_AUTH] FOR GOOGLE(state, user) {
  // SET_AUTH(state, user) {
  //   state.isAuthenticated = true;
  //   state.user = user;
  //   state.errors = {};
  //   JwtService.saveToken(state.user.token);
  //   // console.log("SET_AUTH >>> JwtService.saveToken");
  // },

 SET_AUTH(state, item) {

    state.isAuthenticated = true;
    state.userData = item.userData;
    state.errors = {};
    JwtService.saveToken(item.accessToken);
    // localStorage.setItem("doaminId", token);
    state.apiHeader = {
      headers: {
        Authorization: "bearer " + item.accessToken
      }
    };
    // console.log("SET_AUTH >>> JwtService.saveToken");

  },




  [SET_PASSWORD](state, password) {
    state.user.password = password;
  },
  // [PURGE_AUTH](state) FOR GOOGLE {
  // PURGE_AUTH(state) {
  //   state.apiHeader = {};
  //   state.isAuthenticated = false;
  //   state.user = {};
  //   state.errors = {};
  //   JwtService.destroyToken();
  //   //  console.log("PURGE_AUTH >>> JwtService.destroyToken");
  // }

   PURGE_AUTH(state) {

    state.isAuthenticated = false;
    state.user = {};
    state.errors = {};
    JwtService.destroyToken();
    state.apiHeader = {};

    //  console.log("PURGE_AUTH >>> JwtService.destroyToken");
  }
};

export default {
  isRegistered: false,
  namespaced: true,
  state,
  actions,
  mutations,
  getters
};
