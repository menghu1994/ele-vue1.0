import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'


import "common/stylus/index.styl"

Vue.use(VueAxios,axios)

Vue.filter("formatDate",function(date){
  var d = new Date(date);
  var year = d.getFullYear();
  var month = d.getMonth() + 1;
  var day = d.getDate() <10 ? '0' + d.getDate() : '' + d.getDate();
  var hour = d.getHours();
  var minutes = d.getMinutes();
  var seconds = d.getSeconds();
  return  year+ '-' + month + '-' + day + ' ' + hour + ':' + minutes + ':' + seconds;
})

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
