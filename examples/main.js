import Vue from 'vue'
import App from './App.vue'
import ConjeeUi from '../packages'
// 引入路由
import router from './router'
// 引入全局样式
import '../public/css/global.css'

Vue.use(ConjeeUi);

/* import hljs from 'highlight.js'
import 'highlight.js/styles/idea.css'  
Vue.use(hljs.vuePlugin); */

import VueHighlightJS from 'vue-highlightjs'
import 'highlight.js/styles/atom-one-dark.css'
Vue.use(VueHighlightJS)

Vue.config.productionTip = false

new Vue({
  router,
  beforeCreate() {
    Vue.prototype.$bus = this
  },
  render: h => h(App),
}).$mount('#app')
