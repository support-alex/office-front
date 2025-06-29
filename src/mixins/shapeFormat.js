import axios from 'axios';
import store from "@/core/services/store"
import Swal from 'sweetalert2'

export default {
  watch: {

  },
  data() {
    return {
      theHeader: {}
    }
  },
  computed: {
//  *** BEGIN : 2020-04-06 : TAX INFO
    taxInfo(){
      return store.getters["shop/tax"];
    }
  },
  async created() {
     await store.dispatch('shop/fetch');
    // var tk = localStorage.getItem("token");
    // var theToken = JSON.parse(tk);
    // this.$store.state.auth.apiHeader = {
    //   headers: {
    //     Authorization: "bearer " + theToken
    //   }
    // };
  },
  methods: {
    // *** 2021-04-013 ระบภาษี
    // *** rentalPriceTotal1 = this.rentalPriceTotal

    // ยอดเช่าสุทธิ

    rentalPriceTotal_final(rentalPrice, rentalDiscount){
      //  CASE1 กรณี อยู่ในระบบ VAT | ไม่มีส่วนลด | ราคารวม VAT
      if(this.taxInfo.vatSystem===true && this.taxInfo.inVat===true && this.isRentalDiscount(rentalDiscount) === false)
        return this.rentalPriceTotal1(rentalPrice);
      //  CASE2 กรณี อยู่ในระบบ VAT | ไม่มีส่วนลด | ราคาไม่รวม
      if(this.taxInfo.vatSystem===true && this.taxInfo.inVat===false && this.isRentalDiscount(rentalDiscount) === false)
        return this.rentalPriceTotal2(rentalPrice);
      //  CASE3 กรณี อยู่ในระบบ VAT | มีส่วนลด | ราคารวม VAT
      if(this.taxInfo.vatSystem===true && this.taxInfo.inVat===true && this.isRentalDiscount(rentalDiscount) === true)
        return this.rentalPriceTotal3(rentalPrice, rentalDiscount);
      //  CASE4 กรณี อยู่ในระบบ VAT | มีส่วนลด | ราคาไม่รวม VAT
      if(this.taxInfo.vatSystem===true && this.taxInfo.inVat===false && this.isRentalDiscount(rentalDiscount) === true)
        return this.rentalPriceTotal4(rentalPrice, rentalDiscount);
    },
    vat_final(rentalPrice, rentalDiscount){
      //  CASE1 กรณี อยู่ในระบบ VAT | ไม่มีส่วนลด | ราคารวม VAT
      if(this.taxInfo.vatSystem===true && this.taxInfo.inVat===true && this.isRentalDiscount(rentalDiscount) === false)
        return this.vat1(rentalPrice);
      //  CASE2 กรณี อยู่ในระบบ VAT | ไม่มีส่วนลด | ราคาไม่รวม
      if(this.taxInfo.vatSystem===true && this.taxInfo.inVat===false && this.isRentalDiscount(rentalDiscount) === false)
        return this.vat2(rentalPrice);
      //  CASE3 กรณี อยู่ในระบบ VAT | มีส่วนลด | ราคารวม VAT
      if(this.taxInfo.vatSystem===true && this.taxInfo.inVat===true && this.isRentalDiscount(rentalDiscount) === true)
        return this.vat3(rentalPrice, rentalDiscount);
      //  CASE4 กรณี อยู่ในระบบ VAT | มีส่วนลด | ราคาไม่รวม VAT
      if(this.taxInfo.vatSystem===true && this.taxInfo.inVat===false && this.isRentalDiscount(rentalDiscount) === true)
        return this.vat4(rentalPrice, rentalDiscount);
    },
    beforeVat_final(rentalPrice, rentalDiscount){
      //  CASE1 กรณี อยู่ในระบบ VAT | ไม่มีส่วนลด | ราคารวม VAT
      if(this.taxInfo.vatSystem===true && this.taxInfo.inVat===true && this.isRentalDiscount(rentalDiscount) === false)
        return this.beforeVat1(rentalPrice);
      //  CASE2 กรณี อยู่ในระบบ VAT | ไม่มีส่วนลด | ราคาไม่รวม
      if(this.taxInfo.vatSystem===true && this.taxInfo.inVat===false && this.isRentalDiscount(rentalDiscount) === false)
        return this.beforeVat2(rentalPrice);
      //  CASE3 กรณี อยู่ในระบบ VAT | มีส่วนลด | ราคารวม VAT
      if(this.taxInfo.vatSystem===true && this.taxInfo.inVat===true && this.isRentalDiscount(rentalDiscount) === true)
        return this.beforeVat3(rentalPrice, rentalDiscount);
      //  CASE4 กรณี อยู่ในระบบ VAT | มีส่วนลด | ราคาไม่รวม VAT
      if(this.taxInfo.vatSystem===true && this.taxInfo.inVat===false && this.isRentalDiscount(rentalDiscount) === true)
        return this.beforeVat4(rentalPrice, rentalDiscount);
    },
    beforeVat1(rentalPrice){
      // ไม่มีส่วนลด ราคาในสต็อครวมภาษี (VAT1)
      return rentalPrice - this.vat1(rentalPrice);
    },
    vat1(rentalPrice){
      // ไม่มีส่วนลด ราคาในสต็อครวมภาษี (VAT1)
      return rentalPrice * (this.taxInfo.taxRate / (100 + this.taxInfo.taxRate) );
    },
    rentalPriceTotal1(rentalPrice){
      // ไม่มีส่วนลด ราคาในสต็อครวมภาษี (VAT1)
      return rentalPrice ;

    },
    // ================================

    beforeVat2(rentalPrice){
      // ไม่มีส่วนลด ราคาในสต็อคไม่รวมภาษี (VAT2)
      return rentalPrice;
    },
    vat2(rentalPrice){
      // ไม่มีส่วนลด ราคาในสต็อคไม่รวมภาษี (VAT2)
      return rentalPrice * (this.taxInfo.taxRate / 100);
    },
    rentalPriceTotal2(rentalPrice){
      // ไม่มีส่วนลด ราคาในสต็อคไม่รวมภาษี (VAT2)
      return rentalPrice + this.vat2(rentalPrice);

    },

    // ================================

    beforeVat3(rentalPrice, rentalDiscount){
      // มีส่วนลด ราคาในสต็อครวมภาษี (VAT3)
      var discount = 0;
      if(this.isRentalDiscount(rentalDiscount)){
          discount = rentalDiscount;
      }
      return this.rentalPriceTotal3(rentalPrice, discount) - this.vat3(rentalPrice, discount);
    },
    vat3(rentalPrice, rentalDiscount ){
      // มีส่วนลด ราคาในสต็อครวมภาษี (VAT3)
      var discount = 0;
      if(this.isRentalDiscount(rentalDiscount)){
          discount = rentalDiscount;
      }

      return this.rentalPriceTotal3(rentalPrice, discount) * (this.taxInfo.taxRate  / (100 + this.taxInfo.taxRate ) );
    },
    rentalPriceTotal3(rentalPrice, rentalDiscount){
      var discount = 0;
      if(this.isRentalDiscount(rentalDiscount)){
          discount = rentalDiscount;
      }
      // มีส่วนลด ราคาในสต็อครวมภาษี (VAT3)
      return rentalPrice - discount;

    },
    // ================================
     beforeVat4(rentalPrice, rentalDiscount){
      // มีส่วนลด ราคาในสต็อคไม่รวมภาษี (VAT4)
       var discount = 0;
      if(this.isRentalDiscount(rentalDiscount)){
          discount = rentalDiscount;
      }
      return rentalPrice - discount;
    },
    vat4(rentalPrice, rentalDiscount){
      // มีส่วนลด ราคาในสต็อคไม่รวมภาษี (VAT4)
       var discount = 0;
      if(this.isRentalDiscount(rentalDiscount)){
          discount = rentalDiscount;
      }
      return  this.beforeVat4(rentalPrice, discount)  * (this.taxInfo.taxRate  / 100);
    },
    rentalPriceTotal4(rentalPrice, rentalDiscount){
       var discount = 0;
      if(this.isRentalDiscount(rentalDiscount)){
          discount = rentalDiscount;
      }

      return this.beforeVat4(rentalPrice, discount)  + this.vat4(rentalPrice, discount);
    },
    isRentalDiscount(rentalDiscount){
         if(
              rentalDiscount > 0 &&
                  rentalDiscount != undefined &&
                  rentalDiscount != null
         )
         return true;
         else return false;
    },
    // *** 2021-04-013 ระบภาษี

    // blueLight(event) {
    //   if (event.target.className == "choose") {
    //     event.target.className = "notChoose";
    //   } else {
    //     event.target.className = "choose";
    //   }
    // },

    getShopLineScore(shopInfo){
      var lineNumber = 0;
      var spCount;
      var sptStr = "<p>";
      var weight = 4;

      if(shopInfo.termAndCondition === null || shopInfo.termAndCondition === undefined || shopInfo.termAndCondition === "")
      {
          return 0;
      }else{
          spCount = shopInfo.termAndCondition.split(sptStr);
      }
      lineNumber = spCount.length - 1;

      return Math.ceil(lineNumber/weight);

    },

    async checkQueueShare(list) {
      var res = null;
      try {
        res = await axios.post(
          store.state.apiURL + "/api/orderdetail/checkq",
          list,
          this.$store.state.auth.apiHeader
        );
      } catch (error) {
        // this.noticeError(error);
        return null;

      }

      return await res.data;
    },

    generateRandom(length) {
      var result = '';
      var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
      var charactersLength = characters.length;
      for (var i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
      }
      return result;
    },
    numRange(num) {
      var arr = [] // create an empty array with length #num
      for (var i = 0; i < num; i++) {
        arr.push(i);
      }
      return arr;
    },
    filteringMore(
      list /* Array of object list */ ,
      filtering /* Array single list */ ,
      filedName
    ) {
      // console.log('@filteringMore / orginalList', list);
      // console.log('@filteringMore / filtering', filtering);

      var templist = [];
      if (filtering.length >= 1) {
        for (var i = 0; i < list.length; i++) {
          for (var j = 0; j < filtering.length; j++) {
            if (list[i][filedName] === filtering[j]) {
              // console.log('@filteringMore / list[i][filedName]', list[i][filedName]);
              // console.log('@filteringMore / filtering[j]', filtering[j]);
              templist.push(list[i]);
            }
          }
        }
      }
      return templist;
    },
    automapper(list, keys) {
      var newlist = [];
      for (let i = 0; i < list.length; i++) {
        var item = {};
        for (let j = 0; j < keys.length; j++) {
          if (list[0].hasOwnProperty(keys[j])) {
            item[keys[j]] = list[i][keys[j]];
          }

        }
        const it = Object.assign({}, item);
        newlist.push(it);
      }

      return newlist;

    },

    convertToArray(list, prop) {
      var newlist = [];

      for (var i = 0; i < list.length; i++) {
        newlist.push(list[i][prop]);
      }

      return newlist;
    },


    cloneArray(original) {
      var newlist = [];

      for (var i = 0; i < original.length; i++) {
        newlist.push(original[i]);
      }

      return newlist;
    },


    searchByDate(list, startDate, endDate, filedName) {
      // console.log('@searchByDate startDate >>> ', this.formatDate(startDate));
      // console.log('@searchByDate endDate >>> ', this.formatDate(endDate));

      var templist = [];
      for (var i = 0; i < list.length; i++) {
        var listdate = this.formatDate(list[i][filedName]);
        var ckin = this.formatDate(startDate);
        var ckout = this.formatDate(endDate);


        if (listdate >= ckin && listdate <= ckout) {
          templist.push(list[i]);
        }
      }
      // console.log("searchByDate", templist);

      return templist;
    },


    descendingSortShare(inputList, sortingField) {
      var list = [];
      for (var i = 0; i < inputList.length; i++) {
        list.push(inputList[i]);
      }
      list.sort((a, b) => b[sortingField] - a[sortingField]);
      return list;
    },
    descendingDateSortShare(inputList, sortingField) {
      var list = [];
      for (var i = 0; i < inputList.length; i++) {
        list.push(inputList[i]);
      }
      list.sort((a, b) => new Date(b[sortingField]) - new Date(a[sortingField]));
      return list;
    },

    ascendingSortShare(inputList, sortingField) {
      var list = [];
      for (var i = 0; i < inputList.length; i++) {
        list.push(inputList[i]);
      }
      list.sort((a, b) => a[sortingField] - b[sortingField]);
      return list;
    },

    ascendingDateSortShare(inputList, sortingField) {
      var list = [];
      for (var i = 0; i < inputList.length; i++) {
        list.push(inputList[i]);
      }
      list.sort((a, b) => new Date(a[sortingField]) - new Date(b[sortingField]));
      return list;
    },



    date_diff_indays(date1, date2) {
      var dt1 = new Date(date1);
      var dt2 = new Date(date2);

      // https://masteringjs.io/tutorials/fundamentals/typeof-date
      if (dt1 <= 0 || dt2 <= 0) {
        return 0;
      }

      return Math.floor(
        (Date.UTC(dt2.getFullYear(), dt2.getMonth(), dt2.getDate()) -
          Date.UTC(dt1.getFullYear(), dt1.getMonth(), dt1.getDate())) /
        (1000 * 60 * 60 * 24)
      );
    },

    getdate(dad, amount) {


      var newdate = new Date(dad);

      newdate.setDate(newdate.getDate() + amount);

      var dd = newdate.getDate();
      var mm = newdate.getMonth() + 1;
      var y = newdate.getFullYear();

      var someFormattedDate = y + '-' + mm + '-' + dd;
      return someFormattedDate;
    },

    addDay(date, days) {
      const copy = new Date(Number(date));
      copy.setDate(date.getDate() + days);
      return copy;
    },
    realRentalPrice(rentalPrice, rentalDiscount, promotionDiscount) {
      var rp = isNaN(Number(rentalPrice)) ? 0 : Number(rentalPrice);

      var rd = isNaN(Number(rentalDiscount)) ? 0 : Number(rentalDiscount);

      var pd = isNaN(Number(promotionDiscount)) ? 0 : Number(promotionDiscount);

      return this.formatPrice(rp - rd - pd);
    },
    realBail(bailTotal, bailDiscount) {
      var bt = isNaN(Number(bailTotal)) ? 0 : Number(bailTotal);
      var bd = isNaN(Number(bailDiscount)) ? 0 : Number(bailDiscount);
      return this.formatPrice(bt - bd);
    },
    realReturn(bailTotal, bailDiscount, deduction) {
      var bt = isNaN(Number(bailTotal)) ? 0 : Number(bailTotal);
      var bd = isNaN(Number(bailDiscount)) ? 0 : Number(bailDiscount);
      var dd = isNaN(Number(deduction)) ? 0 : Number(deduction);
      return this.formatPrice(bt - bd - dd);
    },
    getPermission() {
      return store.state.auth.permission;
    },
    checkPermissionShare(roles) {
      var pm = roles.filter(
        x =>
        x.roleName === "owner" ||
        x.roleName === "admin" ||
        x.roleName === "accountingadmin" ||
        x.roleName === "useradmin"
      );
      if (pm.length >= 1) {
        return "admin";
      } else {
        return "staff";
      }
    },

    async getList(url) {
      // this.$vs.loading({
      //   type: "radius"
      // });
      var response = null;
      try {
        response = await axios.get(
          store.state.apiURL + url, store.state.auth.apiHeader
        );
      } catch (error) {
        setTimeout(() => {
          // this.$vs.loading.close();
        }, 1000);
        // // this.noticeError(error);
        return null;

      }

      setTimeout(() => {
        // this.$vs.loading.close();
      }, 1000);

      return await response.data;
    },
    async getOne(url) {
      // this.$vs.loading({
      //   type: "radius"
      // });
      var response = null;
      try {
        response = await axios.get(
          store.state.apiURL + url, store.state.auth.apiHeader
        );
      } catch (error) {
        setTimeout(() => {
          // this.$vs.loading.close();
        }, 1000);
        // this.noticeError(error);
        return null;

      }

      setTimeout(() => {
        // this.$vs.loading.close();
      }, 1000);
      return await response.data;
    },
    async updateShare(url, item, id) {
      // this.$vs.loading({
      //   type: "radius"
      // });
      var response;
      try {
        response = await this.$http.put(
          this.$store.state.apiURL + url + "/" + id,
          item,
          store.state.auth.apiHeader
        );

      } catch (error) {
        setTimeout(() => {
          // this.$vs.loading.close();
        }, 300);
        // this.noticeError(error);
        return null;
      }
      setTimeout(() => {
        this.noticeSuccess("บันทึกสำเร็จ");
        this.$vs.loading.close();
      }, 300);

      return await response.data;
    },

    async put(url, item, id) {
      var response;
      try {
        response = await axios.put(store.state.apiURL + url + "/" + id, item, this.$store.state.auth.apiHeader);
      } catch (error) {
        if (error.response) {
          //   console.log("error.response >>> ", error.response);
          return error.response;
        } else {
          return null;
        }
      }

      return await response.data;
    },



    async createShare(url, item) {
      this.$vs.loading({
        type: "radius"
      });
      var response;
      try {
        response = await this.$http.post(
          this.$store.state.apiURL + url,
          item,
          store.state.auth.apiHeader
        );

      } catch (error) {
        setTimeout(() => {
          this.$vs.loading.close();
        }, 300);
        // this.noticeError(error);
        return null;
      }
      setTimeout(() => {
        this.noticeSuccess("บันทึกสำเร็จ");
        this.$vs.loading.close();
      }, 300);

      return await response.data;
    },

    remaining(maxText, theText){
      if(theText === undefined || theText === null) theText = "";
      this.blockText = theText;
      this.previousText
      var t = maxText - theText.length;
      if(t <= 0) return 0;
      else
        return t;
    },

    async post(url, item) {
      var response;

      try {
        response = await axios.post(store.state.apiURL + url, item, this.$store.state.auth.apiHeader);
      } catch (error) {
        if (error.response) {
          //   console.log("error.response >>> ", error.response);
          return error.response;
        } else {
          return null;
        }
      }

      return await response.data;
    },


    async loadAllWebOrderShare() {
      var response = null;
      try {
        response = await axios.get(
          store.state.apiURL + "/api/Nbs4u0m9pehXse/weborder", this.$store.state.auth.apiHeader

        );
      } catch (error) {
        // // this.noticeError(error);
        return null;

      }

      return await response.data;
    },

    async loadAllOrderShare() {
      var response = null;
      try {
        response = await axios.get(
          store.state.apiURL + "/api/orderheader", this.$store.state.auth.apiHeader


        );
      } catch (error) {
        // this.noticeError(error);
        return null;

      }

      return await response.data;
    },
    async loadAllDetailShare() {
      var response;
      try {
        response = await axios.get(
          store.state.apiURL + "/api/orderdetail",
          store.state.auth.apiHeader
        );
      } catch (error) {
        // this.noticeError(error);
      }

      return await response.data;
    },
    async loadDetailShare(orderId) {
      var response;
      try {
        response = await axios.get(
          store.state.apiURL + "/api/orderdetail/" + orderId,
          this.$store.state.auth.apiHeader
        );
      } catch (error) {
        // this.noticeError(error);
      }

      return await response.data;
    },

    async loadBranchShare(id) {
      var response = null;
      try {
        response = await axios.get(
          store.state.apiURL + "/api/branch/" + id,
          this.$store.state.auth.apiHeader
        );
      } catch (error) {
        // this.noticeError(error);
        return null;
      }

      return await response.data;
    },

    async loadBranchOrderShare(branchId) {
      var response;
      try {
        response = await axios.get(
          store.state.apiURL + "/api/orderheader/branch/" + branchId,
          this.$store.state.auth.apiHeader
        );
      } catch (error) {
        // this.noticeError(error);
      }

      return await response.data;
    },
    async loadOrderByBranchShared(branchlist) {
      var response;
      try {
        response = await axios.post(
          store.state.apiURL + "/api/orderheader/bybranches" ,
          branchlist,
          this.$store.state.auth.apiHeader
        );
      } catch (error) {
        // this.
        // this.noticeError(error);
      }

      return await response.data;
    },
    async loadOrderByBranchObjectShared(aBranch) {
      var response;
      var arr = [];
      // แปลงเป็น array ก่อน
      arr.push(aBranch);
      try {
        response = await axios.post(
          store.state.apiURL + "/api/orderheader/bybranches" ,
          arr,
          this.$store.state.auth.apiHeader
        );
      } catch (error) {
        // this.
        // this.noticeError(error);
      }

      return await response.data;
    },
  //   validateEmail(email) {
  //     const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  //     return re.test(String(email).toLowerCase());
  //  },
    async loadBranchOrderPickupdateSortShare(branchId) {
      var response;
      try {
        response = await axios.get(
          store.state.apiURL + "/api/orderheader/branch/pickupdate-sort/" + branchId,
          this.$store.state.auth.apiHeader
        );
      } catch (error) {
        // this.noticeError(error);
      }

      return await response.data;
    },
    async getBranchByCode(code) {

      var br = await this.loadAllBranchShare();
      var aBranch = null;

      if (br === null || br === undefined || br.length === 0) {
        aBranch = await br.find(x => x.code === "0");
      } else {
        aBranch = await br.find(x => x.code === code);

      }

      return aBranch;

    },

    async getBranchShare(id) {

      var response;
      try {
        response = await axios.get(
          store.state.apiURL + "/api/branch/" + id,
          this.$store.state.auth.apiHeader
        );
      } catch (error) {
        // this.noticeError(error);
        return null;
      }

      return await response.data;


    },

    async getAllBranch() {

      var response;
      try {
        response = await axios.get(
          store.state.apiURL + "/api/branch",
          this.$store.state.auth.apiHeader
        );
      } catch (error) {
        // this.noticeError(error);
        Swal.fire({
          icon: 'error',
          title: 'มียางอย่างผิดพลาด',
          // text: 'Something went wrong!',
        });
        return null;
      }

      return await response.data;


    },
    getImage(shopId, imagePath){
      var url = "";
      if(imagePath === null || imagePath === undefined || imagePath === ""){
        url = this.$store.state.common.imageUrl + "/" + shopId + "/" + "default_shop.png"
      }else{
        url = this.$store.state.common.imageUrl + "/" + shopId + "/" + imagePath ;
      }
      return url
	},

    getImagepath(mainImage) {
      if (
        mainImage === undefined ||
        mainImage === null ||
        mainImage === "" ||
        mainImage === this.$store.state.imageStore
      ) {
        return this.$store.state.defaultImage;
      } else {
        if (mainImage.startsWith("https://"))
          return mainImage;
        else
          return this.$store.state.imageStore + mainImage;
      }
    },

    getFullPath(mainImage) {
      if (mainImage === undefined || mainImage === null || mainImage === "") {

        return store.state.common.imageUrl + "/" + "defaultimage.png";
      } else {
        return store.state.common.imageUrl+ "/" + mainImage;
      }
    },
    baseImagePath(mainImage) {
      if (mainImage === undefined || mainImage === null || mainImage === "") {

        return store.state.imageStore + "defaultimage.png";
      } else {
        return store.state.baseImageStore + mainImage;
      }
    },
    getWebPath(mainImage) {
      if (mainImage === undefined || mainImage === null || mainImage === "") {

        return store.state.imageStore + "defaultimage.png";
      } else {
        return store.state.webImage + mainImage;
      }
    },

    async loadAllBranchShare() {
      var response;
      try {
        response = await axios.get(
          store.state.apiURL + "/api/branch",
          this.$store.state.auth.apiHeader
        );
      } catch (error) {
        // this.noticeError(error);
        return null;
      }

      return await response.data;
    },

    //*** 2021-03-09 : BEGIN For ABB RECEIPT

    calculateScoreForAbbReceipt(shopLineScore, recordScore) {
  //   คำอธิบาย 3 บรรทัด ตีเป็น 1 record
  //   เฉลิี่ยจะมี 6 บรรทัด หรือ 2 record สำหรับ ข้อตกลงการเช่าชุด

  //   ----------------------------------------------------------------------------------------
  // 1 Record ความสูง 64px หรือประมาณ 16.93333
  // 1 px ~ 0.2645833333 mm
  // 1 Records ประมาณ 16.9333333312 mm
  // 5 Records ประมาณ 85 mm

  //  1. up to 3 records (1 record + 6 lines) 300mm / 310mm (html / pagesize)
  //  2. up to 4 - 5 records (2 records + 3 records)  320mm / 330mm (html / pagesize)
  //  3. up to 6 - 7 records (2 records + 5 records)  350mm / 360mm  (html / pagesize)
  //  4. up to 8 - 12 records  450mm / 460mm (html / pagesize)
  //  5. up to 13 - 17 records  550mm / 560mm (html / pagesize)
  //  6. up to 18 - 22 records  650mm / 660mm (html / pagesize)
  //  7. up to 23 - 27 records  750mm / 760mm (html / pagesize)



      var total = shopLineScore + recordScore;

      // console.log('total score >>> ', total);

      if (total <= 3) {
        return 1;
      } else if (total >= 4 && total <= 5) {
        return 2
      } else if (total >= 6 && total <= 8) {
        return 3
      } else if (total >= 9 && total <= 12) {
        return 4
      } else if (total >= 13 && total <= 17) {
        return 5
      } else if (total >= 14 && total <= 22) {
        return 6
      } else if (total >= 23 && total <= 27) {
        return 7
      }


      // if (total <= 3) {
      //   return 1;
      // } else if (total >= 4 && total <= 5) {
      //   return 2
      // } else if (total >= 6 && total <= 7) {
      //   return 3
      // } else if (total >= 8 && total <= 12) {
      //   return 4
      // } else if (total >= 13 && total <= 17) {
      //   return 5
      // } else if (total >= 18 && total <= 22) {
      //   return 6
      // } else if (total >= 23 && total <= 27) {
      //   return 7
      // }
    },

    //*** 2021-03-09 : END For ABB RECEIPT

    async getShopInfo() {
      var response;
      try {
        response = await axios.get(
          store.state.apiURL + "/api/shopinfo",
          this.$store.state.auth.apiHeader
        );
      } catch (err) {
        // this.noticeError(error);
        Swal.fire({
          icon: 'error',
          title: 'มียางอย่างผิดพลาด',
          // text: 'Something went wrong!',
        });
        return null;
      }

      return await response.data;
    },
    onCopy() {
            this.$vs.notify({
                title: 'Success',
                text: 'Text copied successfully',
                color: 'success',
                iconPack: 'feather',
                position: 'top-center',
                icon: 'icon-check-circle'
            })
        },
        onError() {
            this.$vs.notify({
                title: 'Failed',
                text: 'Error in copying text',
                color: 'danger',
                iconPack: 'feather',
                position: 'top-center',
                icon: 'icon-alert-circle'
            })
        },

    noticeSuccess(text) {
      this.$vs.notify({
        title: "ดำเนินการสำเร็จ",
        position: "top-center",
        text: text,
        iconPack: "feather",
        icon: "icon-alert-circle",
        color: "success"
      });
    },
    noticeError(text) {
      this.$vs.notify({
        title: "เกิดข้อผิดพลาด",
        position: "top-center",
        text: text,
        iconPack: "feather",
        icon: "icon-alert-circle",
        color: "danger"
      });
    },
    noticeWarning(title, text) {
      this.$vs.notify({
        title: title,
        position: "top-center",
        text: text,
        iconPack: "feather",
        icon: "icon-alert-circle",
        color: "warning"
      });
    },
    noticeInfo(text) {
      this.$vs.notify({
        title: "เกิดข้อผิดพลาด",
        position: "top-center",
        text: text,
        iconPack: "feather",
        icon: "icon-alert-circle",
        color: "info"
      });
    },

    dateFormatSelect(date, fmt) {


      if (fmt === "slash") {
        return this.format_ddmmyyy(date);
        
      } else if (fmt === "en") {
        return this.formatAlphabet(date);
        
      } else if (fmt === "th") {
        return this.formatThai(date);

      } else if (fmt === "dash") {
        return this.formatDate(date);

      } else {
        return this.formatDate(date);
      }
      
    },

    formatDate(date) {
      var d = new Date(date),
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear();

      if (month.length < 2) month = '0' + month;
      if (day.length < 2) day = '0' + day;

      return [year, month, day].join('-');
    },

    format_ddmmyyy(date) {
      var d = new Date(date),
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear();

      if (month.length < 2) month = '0' + month;
      if (day.length < 2) day = '0' + day;

      return [ day, month ,  year].join('/');
    },

    formatAlphabet(date) {
      var d = new Date(date),
        month_ind = d.getMonth() ,
        day =  d.getDate(),
        year = d.getFullYear();

      var month_arr = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"];

      var month_str = month_arr[month_ind];

      // if (month.length < 2) month = '0' + month;
      // if (day.length < 2) day = '0' + day;

      return [ day, month_str ,  year].join(' ');
    },

    formatThai(date) {
      var d = new Date(date),
        month_ind = d.getMonth() ,
        day =  d.getDate(),
        year = d.getFullYear();

      var month_arr = ["มกราคม", "กุมภาพันธ์", "มีนาคม", "เมษายน", "พฤษภาคม", "มิถุนายน", "กรกฎาคม", "สิงหาคม", "กันยายน", "ตุลาคม", "พฤศจิกายน", "ธันวาคม"];

      var month_str = month_arr[month_ind];

      // if (month.length < 2) month = '0' + month;
      // if (day.length < 2) day = '0' + day;

      return [ day, month_str ,  year].join(' ');
    },

    formatAMPM(date_str) {

      
      if (typeof (date_str) === "string")
      {
        var spl = date_str.split(' ');
        if (spl.length < 2) {
          return "";
        }
      }

      var date = new Date(date_str);
      var hours = date.getHours();

      

      // console.log("AMPM in hours >>>> ",typeof(date));

      var minutes = date.getMinutes();
      var ampm = hours >= 12 ? 'pm' : 'am';
      hours = hours % 12;
      hours = hours ? hours : 12; // the hour '0' should be '12'
      minutes = minutes < 10 ? '0'+minutes : minutes;
      var strTime = hours + ':' + minutes + ' ' + ampm;
      return strTime;
    },


    formatDateLocal(date) {
      return this.formatDate(date) + "T00:00:00.000Z";
    },
    formatPrice(value) {
      // var number = +value.replace(/[^\d.]/g, "");
      value = this.convertToNum(value);
      var amount = isNaN(value) ? 0 : value;

      return amount.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
    },

    formatPrice2Point(value) {
      let val = (value / 1).toFixed(2).replace(",", ".");
      return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    },
    convertToNum(value) {
      if (typeof value === 'string') {

        value = Number(value.replace(",", ""));
      }
      if (isNaN(value)) {
        value = 0;
      }
      return value;
    },
    numberFormat(value) {
      if (isNaN(Number(value))) return 0;
      return Number(value);
    },
    formatNumber(value) {
      if (isNaN(Number(value))) return 0;
      return Number(value);
    },
    // Returns if value is a date object
    isDate(value) {
      return value instanceof Date;
    },
    
  }
}
