import Vue from "vue"
import VueRouter from "vue-router"
import Home from "./views/home"
import Products from "./views/product"
import About from "./views/about"
import Detail from "./views/detail"
Vue.use(VueRouter)

const mainRouter = new VueRouter({
    routes: [
        {
            path: "/",
            name: "Home",
            component: Home,
        },
        {
            path: "/prod",
            name: "products",
            component: Products,
        },
        {
            path: "/about",
            name: "about",
            component: About,
        },
        {
            path: "/detail",
            name: "detail",
            component: Detail,
            props: true,
        },
    ],
})

export default mainRouter
