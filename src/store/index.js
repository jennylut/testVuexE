import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import user from './modules/user'
import test from './modules/test'

const store = new  Vuex.Store({
    modules: {
        user,
        test
    },
    getters: {
        // token:state => state.user.token,
        // avatar:state => state.userinfo.avatar,
        // name:state => state.userinfo.nickname,
        // type:state => state.user.type,
        // goods_obj:state => state.test.goods,
        // goods_length:state => state.test.goods.length
    }
})

export default store