Vue.component('task-list', {
  template: `<div><task v-for="task in tasks">{{ task.description }}</task></div>`,
  // data in component is not linked to any single instance, thus we must define it as a function
  data(){
    return {
      tasks: [
        {description: 'Do something', completed: true},
        {description: 'Do something else', completed: false},
        {description: 'Make sth', completed: false},
        {description: 'Make sth else', completed: true}
      ]
    }
  }
});

Vue.component('task', {
  template: '<li><slot></slot></li>',
});

new Vue({
  el: '#root'
});
