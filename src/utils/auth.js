export function getToken(name) {
    let token = sessionStorage.getItem(`${name}_token`)
    if (token) {
        return token
    }else {
       return ''
    }

}

export function setToken(name,token) {
    sessionStorage.setItem(`${name}_token`, token)
}

export function removeToken(name) {
    return sessionStorage.removeItem(`${name}_token`)
}

export function getUserInfo(name) {
    const data = sessionStorage.getItem(`${name}_info`)
    //eslint-disable-next-line
    console.log(data)
    // if(data){
    //     return JSON.parse(data)
    // }else {
    //     return null
    // }

}

export function setUserInfo(name,data) {
    if(typeof data === 'object'){
        data = JSON.stringify(data)
    }
    sessionStorage.setItem(`${name}_info`,data)
    //eslint-disable-next-line
    console.log(data)
}

export function removeUserInfo(name) {
    return sessionStorage.removeItem(`${name}_info`)
}

export function setLogin(name,data) {
    return sessionStorage.setItem(`${name}_isLogin`,data)
}

export function getLogin(name) {
    return sessionStorage.getItem(`${name}_isLogin`)
}

export function removeLogin (name) {
    return sessionStorage.removeItem(`${name}_isLogin`)
}

export function setScratchProjectUrl (name, url) {
    return sessionStorage.setItem(`${name}_scratch_project_url`, url)
}

export function getScratchProjectUrl (name) {
    return sessionStorage.getItem(`${name}_scratch_project_url`)
}

export function setType (name, type) {
    if (typeof type === 'object') {
        type = JSON.stringify(type)
    }
    return sessionStorage.setItem(`${name}_type`, type)
}

export function getType (name) {
    return sessionStorage.getItem(`${name}_type`)
}

export function removeType (name) {
    return sessionStorage.removeItem(`${name}_type`)
}

export function setLastType (name, type) {
    return sessionStorage.setItem(`${name}_last_type`, type)
}

export function getLastType (name) {
    return sessionStorage.getItem(`${name}_last_type`)
}

export function setFetchCurrentSectionParams (name, info) {
    return sessionStorage.setItem(`${name}_fetch_current_section_params`, JSON.stringify(info))
}

export function getFetchCurrentSectionParams (name) {
    return JSON.parse(sessionStorage.getItem(`${name}_fetch_current_section_params`))
}

export function removeFetchCurrentSectionParams (name) {
    return sessionStorage.removeItem(`${name}_fetch_current_section_params`)
}

export function setActiveTabName (name, tabName) {
    return sessionStorage.setItem(`${name}_active_tab_name`, JSON.stringify(tabName))
}

export function getActiveTabName (name) {
    return JSON.parse(sessionStorage.getItem(`${name}_active_tab_name`))
}

export function removeActiveTabName (name) {
    return sessionStorage.removeItem(`${name}_active_tab_name`)
}

export default {
    getToken,
    setToken,
    removeToken,
    getUserInfo,
    setUserInfo,
    removeUserInfo,
    setLogin,
    getLogin,
    removeLogin,
    setScratchProjectUrl,
    getScratchProjectUrl,
    setType,
    getType,
    removeType,
    setLastType,
    getLastType,
    setFetchCurrentSectionParams,
    getFetchCurrentSectionParams,
    removeFetchCurrentSectionParams,
    setActiveTabName,
    getActiveTabName,
    removeActiveTabName
}
