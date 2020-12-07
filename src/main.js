import Vue from "vue"
import App from "./App.vue"
// import Sample from "./Sample1"
import routes from "./routes"

Vue.config.productionTip = false

new Vue({
    router: routes,
    render: (h) => h(App),
}).$mount("#app")
