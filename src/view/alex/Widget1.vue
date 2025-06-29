<template>
  <div
    class="card card-custom card-shadowless gutter-b card-stretch card-shadowless p-0"
  >
    <!--begin::Nav Tabs-->
    <ul
      class="dashboard-tabs nav nav-pills nav-danger row row-paddingless m-0 p-0 flex-column flex-sm-row"
      role="tablist"
    >
      <!--begin::Item : ประวัติการใช้งาน -->
      <li
        class="nav-item d-flex col flex-grow-1 flex-shrink-0 mr-3 mb-3 mb-lg-0 cursor-pointer"
        @click="activeMenu(1,'dashboard')"
      >
        <div
          class="nav-link  border py-10 d-flex flex-grow-1 rounded flex-column align-items-center"
          :class="{active: menuSeq === 1}"
          data-toggle="pill"
        >
          <span class="nav-icon py-2 w-auto">
            <span class="svg-icon svg-icon-3x">
              <!--begin::Svg Icon | path:assets/media/svg/icons/Home/Library.svg-->
              <inline-svg src="media/svg/icons/Home/Library.svg" />
              <!--end::Svg Icon-->
            </span>
          </span>
          <span class="nav-text font-size-lg py-2 font-weight-bold text-center"
            >ประวัติการใช้งาน</span
          >
        </div>
      </li>
      <!--end::Item-->
      <!--begin::Item : ลงทะเบียนลูกค้าใหม่ -->
      <li
        class="nav-item d-flex col flex-grow-1 flex-shrink-0 mr-3 mb-3 mb-lg-0 cursor-pointer"
        @click="activeMenu(2,'dashboard-register')"
      >
        <div
          class="nav-link border py-10 d-flex flex-grow-1 rounded flex-column align-items-center"
          :class="{active: menuSeq === 2}"
          data-toggle="pill"
        >
          <span class="nav-icon py-2 w-auto">
            <span class="svg-icon svg-icon-3x">
              <!--begin::Svg Icon | path:assets/media/svg/icons/Layout/Layout-4-blocks.svg-->
              <inline-svg src="media/svg/icons/Layout/Layout-4-blocks.svg" />
              <!--end::Svg Icon-->
            </span>
          </span>
          <span
            class="nav-text font-size-lg py-2 font-weight-bolder text-center"
            >ลงทะเบียนลูกค้าใหม่</span
          >
        </div>
      </li>
      <!--end::Item-->

      <!--begin::Item-->
      <li
         class="nav-item d-flex col flex-grow-1 flex-shrink-0 mr-3 mb-3 mb-lg-0 cursor-pointer"
        @click="activeMenu(3,'shop-list')"
      >
        <div
          class="nav-link border py-10 d-flex flex-grow-1 rounded flex-column align-items-center"
          data-toggle="pill"
          href="#tab_forms_widget_5"
          :class="{active: menuSeq === 3}"
        >
          <span class="nav-icon py-2 w-auto">
            <span class="svg-icon svg-icon-3x">
              <inline-svg src="media/svg/icons/Communication/Group.svg" />
            </span>
          </span>
          <span
            class="nav-text font-size-lg py-2 font-weight-bolder text-center"
            >รายการลูกค้า</span
          >
        </div>
      </li>
      <!--end::Item-->


      <!--begin::Item-->
      <li
        class="nav-item d-flex col flex-grow-1 flex-shrink-0 mr-3 mb-3 mb-lg-0"
      >
        <div
          class="nav-link border py-10 d-flex flex-grow-1 rounded flex-column align-items-center"
          data-toggle="pill"
          href="#tab_forms_widget_4"
        >
          <span class="nav-icon py-2 w-auto">
            <span class="svg-icon svg-icon-3x">
              <!--begin::Svg Icon | path:assets/media/svg/icons/Media/Equalizer.svg-->
              <inline-svg src="media/svg/icons/Media/Equalizer.svg" />
              <!--end::Svg Icon-->
            </span>
          </span>
          <span
            class="nav-text font-size-lg py-2 font-weight-bolder text-center"
            >Sales Statistics</span
          >
        </div>
      </li>
      <!--end::Item-->
      <!--begin::Item-->
      <li class="nav-item d-flex col flex-grow-1 flex-shrink-0 mr-3">
        <div
          class="nav-link border py-10 d-flex flex-grow-1 rounded flex-column align-items-center"
          data-toggle="pill"
          href="#tab_forms_widget_5"
        >
          <span class="nav-icon py-2 w-auto">
            <span class="svg-icon svg-icon-3x">
              <inline-svg src="media/svg/icons/General/Shield-check.svg" />
            </span>
          </span>
          <span
            class="nav-text font-size-lg py-2 font-weight-bolder text-center"
            >System Security</span
          >
        </div>
      </li>
      <!--end::Item-->

    </ul>
    <!--end::Nav Tabs-->
    <!--begin::Nav Content-->
    <div class="tab-content m-0 p-0">
      <div
        class="tab-pane active"
        id="forms_widget_tab_1"
        role="tabpanel"
      ></div>
      <div class="tab-pane" id="forms_widget_tab_2" role="tabpanel"></div>
      <div class="tab-pane" id="forms_widget_tab_3" role="tabpanel"></div>
      <div class="tab-pane" id="forms_widget_tab_4" role="tabpanel"></div>
      <div class="tab-pane" id="forms_widget_tab_6" role="tabpanel"></div>
    </div>
    <!--end::Nav Content-->
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "widget-1",
  data() {
    return {
      activeSetting: 1,
      // list: [
      //   {
      //     title: "Top Authors",
      //     desc: "Mark, Rowling, Esther",
      //     profit: "+82$",
      //     img: "media/svg/misc/006-plurk.svg"
      //   },
      //   {
      //     title: "Popular Authors",
      //     desc: "Randy, Steve, Mike",
      //     profit: "+280$",
      //     img: "media/svg/misc/015-telegram.svg"
      //   },
      //   {
      //     title: "New Users",
      //     desc: "John, Pat, Jimmy",
      //     profit: "+4500$",
      //     img: "media/svg/misc/003-puzzle.svg"
      //   },
      //   {
      //     title: "Active Customers",
      //     desc: "Sandra, Tim, Louis",
      //     profit: "+4500$",
      //     img: "media/svg/misc/005-bebo.svg"
      //   },
      //   {
      //     title: "Bestseller Theme",
      //     desc: "Sandra, Tim, Louis",
      //     profit: "+4500$",
      //     img: "media/svg/misc/014-kickstarter.svg"
      //   }
      // ]
    };
  },
  computed:{
    ...mapGetters(["menuSeq"])
  },
  methods: {
    activeMenu(number, menuName){
      this.activeSetting = number;
      // this.$store.commit("CHANGE_MENU", number);
      this.$router.push(menuName);
    }
  },
};
</script>
