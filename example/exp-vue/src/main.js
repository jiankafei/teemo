import './polyfill';
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import burypoint from './burypoint.es';

burypoint.init({
  dsn: 'http://www.exp.com/dsn',
  track_attrs: ['data-bp-click'],
  track_class_name: ['el-button'],
  debug: true,
});

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
