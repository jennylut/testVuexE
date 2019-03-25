
import auth from '@/utils/auth'
import request from '@/utils/request'

const TOKEN_KEY = 'teacher'

const user = {
    state: {
        isLogin:Boolean(auth.getLogin(TOKEN_KEY)),
        userInfo:auth.getUserInfo(TOKEN_KEY),
        token:auth.getToken(TOKEN_KEY),
        type:''
    },
    mutations:{
        SET_TOKEN:(state,token)=>{
            state.token = token
            auth.setToken(TOKEN_KEY,token)
        },
        SET_USER_INFO: (state, userInfo) => {
            state.userInfo = userInfo
            auth.setUserInfo(TOKEN_KEY, userInfo)
        },

        SET_IS_LOGIN: (state, boolean) => {
            state.isLogin = boolean
            auth.setLogin(TOKEN_KEY, boolean)
        },

        SET_TYPE: (state, type) => {
            state.type = type
            auth.setType(TOKEN_KEY, type)
        },
        LOGOOT:(state)=>{
           state.isLogin = false,
           state.userInfo = '',
           state.token ='',
           state.type = '',
           auth.removeLogin(TOKEN_KEY),
           auth.removeToken(TOKEN_KEY),
           auth.removeUserInfo(TOKEN_KEY),
           auth.removeType(TOKEN_KEY)
        }
    },

    actions:{
        LoginByUserName({ commit },userInfo) {
            return new Promise((resolve,reject)=>{
                request.post('sesuapi/account/user/login',{
                    username: userInfo.username,
                    password: userInfo.password,
                    token: ''
                }).then((res)=>{
                    // eslint-disable-next-line
                    console.log(res.data)
                    commit('SET_IS_LOGIN', true)
                    commit('SET_TOKEN', res.data.token)
                    commit('SET_USER_INFO', res.data.userinfo)
                    resolve()
                }, err=>{
                    // eslint-disable-next-line
                    console.log(err)
                    reject('err')
                })
            })
        },

        SetType({ commit },type) {
            commit('SET_TYPE',type)
        },

        LogOut ({ commit}) {
            return new Promise((resolve)=>{
                commit('LOGOUT')
                resolve()
            })
        }
    }
}


export default user