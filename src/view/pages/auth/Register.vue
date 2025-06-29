<template>
  <div>
    <!--begin::Content header-->
    <div
      class="position-absolute top-0 right-0 text-right mt-5 mb-15 mb-lg-0 flex-column-auto justify-content-center py-5 px-10"
    >
      <span class="font-weight-bold font-size-3 text-dark-60">
        Already have an account?
      
      </span>
      <!-- <router-link
        class="font-weight-bold font-size-3 ml-2"
        :to="{ name: 'login' }"
      >
        Sign In!
      </router-link> -->

       <GoogleLogin :params="params" :renderParams="renderParams" :onSuccess="onSuccess" :onFailure="onFailure"></GoogleLogin>
    </div>
    <!--end::Content header-->

    <!--begin::Signup-->
    <div class="login-form login-signin">
      <div class="text-center mb-10 mb-lg-20">
        <h3 class="font-size-h1">Sign Up</h3>
        <p class="text-muted font-weight-semi-bold">
          Enter your details to create your account
             
        </p>
        <div @click="test()"  class="btn btn-success"  >
                
                  Log in
                </div>
      </div>

      <!--begin::Form-->
      <b-form class="form" @submit.stop.prevent="onSubmit">
        <b-form-group
          id="example-input-group-0"
          label=""
          label-for="example-input-0"
        >
          <b-form-input
            class="form-control form-control-solid h-auto py-5 px-6"
            id="example-input-0"
            name="example-input-0"
            v-model="$v.form.username.$model"
            :state="validateState('username')"
            aria-describedby="input-0-live-feedback"
            placeholder="Username"
          ></b-form-input>

          <b-form-invalid-feedback id="input-0-live-feedback">
            Username is required.
          </b-form-invalid-feedback>
        </b-form-group>

        <b-form-group
          id="example-input-group-1"
          label=""
          label-for="example-input-1"
        >
          <b-form-input
            class="form-control form-control-solid h-auto py-5 px-6"
            id="example-input-1"
            name="example-input-1"
            v-model="$v.form.email.$model"
            :state="validateState('email')"
            aria-describedby="input-1-live-feedback"
            placeholder="Email address"
          ></b-form-input>

          <b-form-invalid-feedback id="input-1-live-feedback">
            Email is required and a valid email address.
          </b-form-invalid-feedback>
        </b-form-group>

        <b-form-group
          id="example-input-group-2"
          label=""
          label-for="example-input-2"
        >
          <b-form-input
            class="form-control form-control-solid h-auto py-5 px-6"
            type="password"
            id="example-input-2"
            name="example-input-2"
            v-model="$v.form.password.$model"
            :state="validateState('password')"
            aria-describedby="input-2-live-feedback"
            placeholder="Password"
          ></b-form-input>

          <b-form-invalid-feedback id="input-2-live-feedback">
            Password is required.
          </b-form-invalid-feedback>
        </b-form-group>

        <!--begin::Action-->
        <div class="form-group d-flex flex-wrap flex-center">
          <button
            type="submit"
            ref="kt_login_signup_submit"
            class="btn btn-primary font-weight-bold px-9 py-4 my-3 font-size-3 mx-4"
          >
            Submit
          </button>
          <button
            v-on:click="$router.push('login')"
            class="btn btn-light-primary font-weight-bold px-9 py-4 my-3 font-size-3 mx-4"
          >
            Cancel
          </button>
        </div>
        <!--end::Action-->
      </b-form>
      <!--end::Form-->
    </div>
    <!--end::Signup-->
  </div>
</template>

<style lang="scss" scoped>
.spinner.spinner-right {
  padding-right: 3.5rem !important;
}
</style>

<script>
import axios from 'axios';
import { mapState } from "vuex";
import { REGISTER } from "@/core/services/store/auth.module";
import { LOGOUT } from "@/core/services/store/auth.module";

import { validationMixin } from "vuelidate";
import { email, required, minLength } from "vuelidate/lib/validators";

import GoogleLogin from 'vue-google-login';

export default {
  mixins: [validationMixin],
  name: "register",
  data() {
    return {
      // Remove this dummy login info
      form: {
        email: "admin@demo.com",
        password: "demo"
      },
      // client_id is the only required property but you can add several more params, full list down bellow on the Auth api section
      params: {
          client_id: "753065350883-71sqo61a56gr9gv0b8noc53bc7oe33f1.apps.googleusercontent.com"
      },
      // only needed if you want to render the button with the google ui
      renderParams: {
          width: 250,
          height: 50,
          longtitle: true
      }
    };
  },
  validations: {
    form: {
      username: {
        required,
        minLength: minLength(3)
      },
      email: {
        required,
        email
      },
      password: {
        required,
        minLength: minLength(3)
      }
    }
  },
  methods: {
    
    async test(){

      var res1 = null;

       try {
    res1 = await axios.post(
      "http://localhost:8000/gauth/xxx", {}
    );
    // console.log("response from server", res1.data);
  } catch (error) {
    // console.log("ERROR11111 >>>>> ", error);
    
    // this.shapeFormat.noticeError(error);
  }

    },
    validateState(name) {
      const { $dirty, $error } = this.$v.form[name];
      return $dirty ? !$error : null;
    },
    resetForm() {
      this.form = {
        username: null,
        email: null,
        password: null
      };

      this.$nextTick(() => {
        this.$v.$reset();
      });
    },
    onSubmit() {
      this.$v.form.$touch();
      if (this.$v.form.$anyError) {
        return;
      }

      const username = this.$v.form.username.$model;
      const email = this.$v.form.email.$model;
      const password = this.$v.form.password.$model;

      // clear existing errors
      this.$store.dispatch(LOGOUT);

      // set spinner to submit button
      const submitButton = this.$refs["kt_login_signup_submit"];
      submitButton.classList.add("spinner", "spinner-light", "spinner-right");

      // dummy delay
      setTimeout(() => {
        // send register request
        this.$store
          .dispatch(REGISTER, {
            email: email,
            password: password,
            username: username
          })
          .then(() => this.$router.push({ name: "dashboard" }));

        submitButton.classList.remove(
          "spinner",
          "spinner-light",
          "spinner-right"
        );
      }, 2000);
    }
  },
  computed: {
    GoogleLogin,
    ...mapState({
      errors: state => state.auth.errors
    })
  }
};
</script>
