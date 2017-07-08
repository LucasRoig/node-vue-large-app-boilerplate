import Vuex from 'vuex'
import Vue from 'vue'
import {store as modules} from '../app'
Vue.use(Vuex);

export default new Vuex.Store({
    strict: process.env.NODE_ENV !== 'production',
    modules,
    state:{

    },
    getters:{

    },
    actions:{

    },
    mutations:{

    }
})