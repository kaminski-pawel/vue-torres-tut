window.Event = new Vue();

Vue.component('coupon', {
  template: '<input placeholder="Enter your coupon code" @blur="onCouponApplied">',
  methods: {
    onCouponApplied(){
      Event.$emit('coupon-was-applied');
    }
}
});

new Vue({
  el: '#root',
  data: {
    couponApplied: false
  },
  created() {
    Event.$on('coupon-was-applied', ()=>alert('Handling it!'))
  }
})
