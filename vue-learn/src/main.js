import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from "element-ui"

Vue.use(ElementUI)

Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  template: '<App />',
  components: { App }
})

// Vue.component('my-header', {
//   template: '<Header/>',
//   components:{Header}
// })
