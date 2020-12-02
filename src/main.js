import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import ElementUi from 'element-ui'
import '../node_modules/element-ui/lib/theme-chalk/index.css'
import './plugins/element.js'
Vue.use(ElementUi)


Vue.config.productionTip = false;

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount("#app");