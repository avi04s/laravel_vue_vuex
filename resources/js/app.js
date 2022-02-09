/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

window.Vue = require('vue').default;

import VueRouter from 'vue-router';
import router from './router'; 
import VueAxios from 'vue-axios';
import axios from 'axios';
import Vue from 'vue';
import store from './store/index.js';

axios.defaults.withCredentials = true;
axios.defaults.baseURL = 'http://127.0.0.1:8000/api/auth/';
const token = localStorage.getItem('token');
if(token){
  axios.defaults.headers.common['Authorization'] = token;
}

// manage error and expire token

axios.interceptors.response.use(undefined, function(error){

  if(error){
      const originalRequest = error.config;
      if(error.response.status == 401 && !originalRequest._retry) {
        originalRequest._retry = true;
        store.dispatch('logout')
        return router.push('/login')
      }
      else {
          store.commit('handle_error', JSON.parse(error.response.data.error));
      }
  }


})

Vue.use(VueRouter);
Vue.use(VueAxios,axios);


/**
 * The following block of code may be used to automatically register your
 * Vue components. It will recursively scan this directory for the Vue
 * components and automatically register them with their "basename".
 *
 * Eg. ./components/ExampleComponent.vue -> <example-component></example-component>
 */

// const files = require.context('./', true, /\.vue$/i)
// files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key).default))

//Vue.component('example-component', require('./components/ExampleComponent.vue').default);
//Vue.component('user', require('./components/User.vue'));

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

const app = new Vue({
    store,
    router,
    el: '#app',
});
