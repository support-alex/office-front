import Vue from "vue";
import axios from "axios";
import VueAxios from "vue-axios";
import JwtService from "@/core/services/jwt.service";

import store from "@/core/services/store";

/**
 * Service to call HTTP request via Axios
 */
const ApiService = {
  init() {
    Vue.use(VueAxios, axios);
    // Vue.axios.defaults.baseURL = "http://localhost:8000";
    Vue.axios.defaults.baseURL = store.state.common.baseUrl;
  },



  /**
   * Set the default HTTP request headers
   */
  setHeader() {
    Vue.axios.defaults.headers.common[
      "Authorization"
    ] = `Bearer ${JwtService.getToken()}`;
  },

  query(resource, params) {
    return Vue.axios.get(resource, params).catch(error => {
      // console.log(error);
      throw new Error(`[KT] ApiService ${error}`);
    });
  },

  /**
   * Send the GET HTTP request
   * @param resource
   * @param slug
   * @returns {*}
   */
  get(resource, slug = "") {
    return Vue.axios.get(`${resource}/${slug}`).catch(error => {
      // console.log(error);
      throw new Error(`[KT] ApiService ${error}`);
    });
  },

  /**
   * Set the POST HTTP request
   * @param resource
   * @param params
   * @returns {*}
   */
  post(resource, params) {
    // console.log();
    return Vue.axios.post(`${resource}`, params);
  },

  /**
   * Send the UPDATE HTTP request
   * @param resource
   * @param slug
   * @param params
   * @returns {IDBRequest<IDBValidKey> | Promise<void>}
   */
  update(resource, slug, params) {
    return Vue.axios.put(`${resource}/${slug}`, params);
  },

  /**
   * Send the PUT HTTP request
   * @param resource
   * @param params
   * @returns {IDBRequest<IDBValidKey> | Promise<void>}
   */
  put(resource, params) {
    return Vue.axios.put(`${resource}`, params);
  },

  /**
   * Send the DELETE HTTP request
   * @param resource
   * @returns {*}
   */
  delete(resource) {
    return Vue.axios.delete(resource).catch(error => {
      // console.log(error);
      throw new Error(`[RWV] ApiService ${error}`);
    });
  },
  async checkAuthentication(){
    var tk = localStorage.getItem('id_token');
 

      var authenticated = false;

      if (tk !== null && tk !== undefined && tk !== "") {
        var config = {
          headers: {
            'Authorization': "bearer " + tk
          }
        };

        var resp;
        var url = store.state.common.baseUrl + "/office-api/auth/check-authentication";
        try {
          resp = await axios.post(url, {}, config);
        } catch (err) {
          resp = null;
          // console.log("BEFORE ROOT >>>> /office-api/auth/check-authentication resp >>> ", resp);
        }
        
        if (resp !== null && resp !== undefined) {
              if (resp.status === 200) {
                // console.log("BEFORE ROOT >>>> STATUS 200", resp.data);

                authenticated = true;
                

              } else {
                authenticated = false;
              }
        }
        else {
          authenticated = false;
        }
      } else {
        authenticated = false;
    }
    // console.log("&^%^$$^^checkAuthentication >>>>>>> ", authenticated);
    store.commit("updateAuth", authenticated);
  }
};



export default ApiService;
