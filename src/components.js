import Vue from 'vue'

Vue.component('ButtonString', {
  template: '<button @click="click">Click ButtonString {{ count }} times</button>',
  data() {
    return {
      count: 0
    };
  },
  methods: {
    click() {
      this.count++;
    }
  }
})

Vue.component('ButtonTemplateString', {
  template: `
    <button @click="click">
      Click ButtonTemplateString {{ count }} times
    </button>
  `,
  data() {
    return {
      count: 0
    };
  },
  methods: {
    click() {
      this.count++;
    }
  }
})
