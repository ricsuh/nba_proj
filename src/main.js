import Vue from 'vue'
import App from './App.vue'
import router from './router'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import nbaPlayers from './players.js'
import nbaTeams from './teams.js'

Vue.config.productionTip = false
Vue.use(BootstrapVue)

let data = {
   players: nbaPlayers,
   teams: nbaTeams,
}

new Vue({
  router,
  data,
  render: h => h(App)
}).$mount('#app')
