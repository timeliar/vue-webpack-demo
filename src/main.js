import Vue from 'vue'
import App from './App.vue'
import Header from './Header.vue'
import User from './page/User.vue'
import 'vue-material/dist/vue-material.css'
import VueMaterial from 'vue-material'

Vue.use(VueMaterial);
// Vue.material.registerTheme('blue', {
//     primary: 'blue',
//     accent: 'red',
//     warn: 'red',
//     background: 'grey'
// });
new Vue({
  el: '#header',
  render: h => h(Header)
});
new Vue({
  el: '#app',
  render: h => h(App)
});
new Vue({
    el: '#user',
    render: h => h(User)
});