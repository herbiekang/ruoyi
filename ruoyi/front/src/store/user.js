const user = {
    state: {
        token: '',
        name: '',
        avatar: '',
        roles: [],
        permissions: []
    },

    mutations: {
        SET_TOKEN: (state, token)=> {
            state.token = token
        }
    },

    actions: {
        Login({commit}, userInfo) {
            return new Promise((resolve, reject) => {
                commit('SET_TOKEN', '123456')
                resolve()
            }).catch(error => {
                reject(error)
            })
        },
    }
}

export default user
