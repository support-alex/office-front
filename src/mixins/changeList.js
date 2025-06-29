export default {
  data() {
    return {

    }
  },
  watch: {
    orders: {
      handler() {
        this.mixin_incomeTotal = 0;
        this.mixin_grandTotal = 0;

        for (var i = 0; i < this.orders.length; i++) {
          this.mixin_incomeTotal =
            this.mixin_incomeTotal +
            this.orders[i].incomeAm


        }
        this.mixin_grandTotal =
          this.mixin_grandTotal + this.mixin_incomeTotal;
      },
      deep: true
    }
  }
}
