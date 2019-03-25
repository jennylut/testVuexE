import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import user from './modules/user'

const store = new  Vuex.Store({
    modules: {
        user
    },
    getters: {
        token:state => state.user.token,
        avatar:state => state.userinfo.avatar,
        name:state => state.userinfo.nickname,
        type:state => state.user.type,
    }
})

export default store