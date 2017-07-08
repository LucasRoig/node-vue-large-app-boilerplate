import VueRouter from 'vue-router'
import {routes} from '../app'

export default new VueRouter({
    mode:'history',
    base: __dirname,
    routes,
    //utile avec semantic-ui
    //linkActiveClass: 'active'
});