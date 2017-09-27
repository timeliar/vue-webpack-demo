import Vue from 'vue'
import App from './App.vue'
import Header from './Header.vue'
import "bootstrap/dist/css/bootstrap.css"
import "jquery/dist/jquery"
import "bootstrap/dist/js/bootstrap"

new Vue({
  el: '#app',
  render: h => h(App)
});
new Vue({
    el: '#header',
    render: h => h(Header)
});
