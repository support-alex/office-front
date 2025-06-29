import ApiService from "@/core/services/api.service";
import JwtService from "@/core/services/jwt.service";
import axios from 'axios'
import store from "@/core/services/store";



const state = {
  menuSeq: 1
};

const getters = {
  menuSeq() {
    return state.menuSeq;
  },
  // currentUser(state) {
  //   return state.user;
  // },
  // isAuthenticated(state) {
  //   return state.isAuthenticated;
  // }
};

const actions = {
 
};

const mutations = {

  CHANGE_MENU(state, newValue) {
    // console.log("mutations/UPDATE_AUTH ", new_auth);
    state.menuSeq = newValue;
  },
  RESET_MENU(state, newValue) {
    // console.log("mutations/UPDATE_AUTH ", new_auth);
    state.menuSeq = 1;
  },
  
};

export default {
  state,
  actions,
  mutations,
  getters
};
