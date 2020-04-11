import 'babel-polyfill'
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import mixins from './mixins'
import './directive'
import './plugin'

Vue.config.productionTip = false
// 全局混合
Vue.mixin(mixins)

new Vue({
    el: '#root',
    mixins,
    router,
    store,
    render: h => h(App)
})
