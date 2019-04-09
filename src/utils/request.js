import axios from 'axios'
import qs from 'qs'
import auth from './auth'

const TOKEN_KEY = 'teacher'
class CIRequest {
    constructor (request, config) {
        this.request = this.initRequest(request, config)
        this.token = config.token
    }

    initRequest (request, config) {
        return request.create({
            baseURL: 'http://test.teachapi.xiaomawang.com/',
            timeout: config.timeout || 5000
        })
    }

    async get (url, data, config) {
        data = this.appendToken(data)
        // url = `${url}?${qs.stringify(data)}`
        let res = await this.request.get(url, { params: data }, config)
        return this.handleResponse(res)
    }

    async post (url, data, config) {
        // data = this.appendToken(data)
        let res = await this.request.post(url, qs.stringify(data), config)
        // let res = await this.request.post(url, data, config)
        return this.handleResponse(res)
    }

    // async put (url, data, config) {
    //     // data = this.appendToken(data)
    //     let res = await this.request.put(url, data, config)
    //     return this.handleResponse(res)
    // }

    appendToken (data) {
        data = data || {}
        data.token = auth.getToken(TOKEN_KEY)
        return data
    }

    // appendCategoryName (data) {
    //     data = data || {}
    //     data.category_name = auth.getType(TOKEN_KEY)
    //     return data
    // }

    handleResponse (res) {
        if (res.status === 200) {
            if (res.data.code === 20000) {
                return res.data
            } else if (res.data.status === 200) {
                return res.data.result
            } else {
                throw res.data
            }
        } else {
            // throw res
            console.log('utils.request ERROR', res)
        }
    }
}
let request = new CIRequest(axios, {
    apiBase: 'http://test.teachapi.xiaomawang.com/',
    token: auth.getToken(TOKEN_KEY)
})

export default request
