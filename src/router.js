import Vue from "vue";
import Router from "vue-router";
import store from "@/core/services/store";
import axios from 'axios';

// import { VERIFY_AUTH } from "@/core/services/store/auth.module";
// import { RESET_LAYOUT_CONFIG } from "@/core/services/store/config.module";

Vue.use(Router);
const router = new Router({
// export default new Router({
  mode: 'history',
  routes: [
    {
      path: "/",
      redirect: "/shop-list",
      component: () => import("@/view/layout/Layout"),
      children: [
        {
          path: "/dashboard",
          name: "dashboard",
          component: () => import("@/view/pages/Dashboard.vue")
        },
        {
          path: "/dashboard-register",
          name: "dashboard-register",
          component: () => import("@/view/pages/DashboardRegister.vue")
        },
        // {
        //   path: "/dashboard-customer",
        //   name: "dashboard-customer",
        //   component: () => import("@/view/alex/DashboardCustomer.vue")
        // },
       
        {
          path: "/update-package/:shopCode",
          name: "update-package",
          component: () => import("@/view/alex/UpdatePackage.vue")
        },
        {
          path: "/update-trial/:shopCode",
          name: "update-trial",
          component: () => import("@/view/alex/UpdateTrial.vue")
        },
         {
          path: "/renew-package/:shopCode",
          name: "renew-package",
          component: () => import("@/view/alex/UpRenewPackage.vue")
        },

        {
          path: "/shop-list",
          name: "shop-list",
          component: () => import("@/view/alex/AlexShopList.vue")
        },

        {
          path: "/builder",
          name: "builder",
          component: () => import("@/view/pages/Builder.vue")
        },
        
        
        {
          path: "/custom-wizard",
          name: "wizard",
          component: () => import("@/view/pages/wizard/Wizard.vue"),
          children: [
            {
              path: "wizard-1",
              name: "wizard-1",
              component: () => import("@/view/pages/wizard/Wizard-1.vue")
            },
            {
              path: "wizard-2",
              name: "wizard-2",
              component: () => import("@/view/pages/wizard/Wizard-2.vue")
            },
            {
              path: "wizard-3",
              name: "wizard-3",
              component: () => import("@/view/pages/wizard/Wizard-3.vue")
            },
            {
              path: "wizard-4",
              name: "wizard-4",
              component: () => import("@/view/pages/wizard/Wizard-4.vue")
            }
          ]
        },
        {
          path: "/custom-plugins",
          name: "plugins",
          component: () => import("@/view/pages/plugins/Plugins.vue"),
          children: [
            {
              path: "cropper",
              name: "cropper",
              component: () => import("@/view/pages/plugins/Cropper.vue")
            },
            {
              path: "treeselect",
              name: "treeselect",
              component: () => import("@/view/pages/plugins/Treeselect.vue")
            }
          ]
        },
        {
          path: "/profile",
          name: "profile",
          component: () => import("@/view/pages/profile/Profile.vue"),
          children: [
            {
              path: "profile-1",
              name: "profile-1",
              component: () => import("@/view/pages/profile/Profile-1.vue")
            },
            {
              path: "profile-2",
              name: "profile-2",
              component: () => import("@/view/pages/profile/Profile-2.vue")
            },
            {
              path: "profile-3",
              name: "profile-3",
              component: () => import("@/view/pages/profile/Profile-3.vue")
            },
            {
              path: "profile-4",
              name: "profile-4",
              component: () => import("@/view/pages/profile/Profile-4.vue")
            }
          ]
        }
      ]
    },
    {
      path: "/custom-error",
      name: "error",
      component: () => import("@/view/pages/error/Error.vue"),
      children: [
        {
          path: "error-1",
          name: "error-1",
          component: () => import("@/view/pages/error/Error-1.vue")
        },
        {
          path: "error-2",
          name: "error-2",
          component: () => import("@/view/pages/error/Error-2.vue")
        },
        {
          path: "error-3",
          name: "error-3",
          component: () => import("@/view/pages/error/Error-3.vue")
        },
        {
          path: "error-4",
          name: "error-4",
          component: () => import("@/view/pages/error/Error-4.vue")
        },
        {
          path: "error-5",
          name: "error-5",
          component: () => import("@/view/pages/error/Error-5.vue")
        },
        {
          path: "error-6",
          name: "error-6",
          component: () => import("@/view/pages/error/Error-6.vue")
        }
      ]
    },
    {
      path: "/",
      component: () => import("@/view/pages/auth/login_pages/Login-1.vue"),
      children: [
        {
          name: "login",
          path: "/login",
          component: () => import("@/view/pages/auth/login_pages/Login-1.vue")
        },
        // {
        //   name: "authen",
        //   path: "/authen",
        //   component: () => import("@/view/pages/auth/Auth.vue")
        // },
        {
          name: "register",
          path: "/register",
          component: () => import("@/view/pages/auth/Register.vue")
        }
      ]
    },
    {
      path: "*",
      redirect: "/404"
    },
    {
      // the 404 route, when none of the above matches
      path: "/404",
      name: "404",
      component: () => import("@/view/pages/error/Error-1.vue")
    }
  ]
})

router.beforeEach(async (to, from, next) => {
  // Ensure we checked auth before each page load.
  // REPLACE BY BELL
  var tk = localStorage.getItem('id_token');
 

  var authenticated = false;

  if (tk !== null && tk !== undefined && tk !== "") {
    var config = {
      headers: {
        'Authorization': "bearer " + tk
      }
    };

    store.commit("auth/SET_HEADER", tk);

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
        // var resauth = await store.dispatch('auth/getAuth');

        //   if (!resauth) {
        //     authenticated = false;
        //     // console.log("resauth ");
        //   }


        // } else {
        //   authenticated = false;
        // }

        // console.log("BEFORE ROOT >>>> DATA IS OK");

      } else {
        authenticated = false;
        // console.log("BEFORE ROOT >>>>STATUS NOT 200");
      }

    }
    else {
      authenticated = false;
    }
  } else {
    authenticated = false;
  }

  // console.log("TO.PATH ", to.path);
  // console.log("BEFORE ROOT authenticated is ***** >>>>> ", authenticated);

  // *** next next next next next

  if (!authenticated && to.path !== '/login' ) {
    // console.log("1111111111111");
     return next({
      path: "/login"
      // save the location we were at to come back later
     });
    // return;
  }
  
  else if (!authenticated && to.path === '/login')
  {
    // console.log("2222222222");
    next();
    return ;
  }
  else {
    if (to.path === '/login') {
      return next({
      path: "/"
      // save the location we were at to come back later
     });
      
    }
    else {
      next();
    }
    
  }

  // *** next next next next next

});

export default router
