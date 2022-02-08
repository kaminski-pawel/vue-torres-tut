Vue.component('message', {
  props: ['msgTitle', 'msgBody'],
  data(){
    return {
      isVisible: true
    };
  },
  template: `<article class="message is-primary" v-show="isVisible">
    <div class="message-header">
      <p>{{ msgTitle }}</p>
      <button class="delete" aria-label="delete" @click="isVisible = false"></button>
    </div>
    <div class="message-body">
      {{ msgBody }}
    </div>
  </article>`,
});

new Vue({
  el: '#root'
})
