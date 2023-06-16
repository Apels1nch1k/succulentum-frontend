import  axios from "axios"

import Cookies from 'js-cookie'



export default {
    state: {
        tokenJWT: Cookies.get('tokenJWT') || null,
        errorSingUp: {
            username: null || [],
            email: null|| [],
            password: null|| [],
            password_repeat: null|| [],
        },
        errorSingIn: {
            username: null || [],
            password: null|| [],
        },
        user: JSON.parse(localStorage.getItem('user')) || {},
        orders: {}
  },
    getters: {
        getToken(state) {
            return state.tokenJWT
        },
        isAuthenticated(state) {
            return state.tokenJWT !== null
        },
        getErrorsSingUp(state) {
            return state.errorSingUp
        },
        getErrorsSingIn(state) {
            return state.errorSingIn
        },
        getUSer(state) {
            return state.user
        },
        getOrders(state) {
            return state.orders
        }

  },
    mutations: {
        setOrdersUser(state, orders) {
            state.orders = orders
        },

        setUser(state, user) {
            state.user = user;
            localStorage.setItem('user', JSON.stringify(user));
        },
        clearUser(state) {
            state.user = {};
            localStorage.removeItem('user');
        },
        setToken(state, tokenJWT) {
            state.tokenJWT = tokenJWT
            Cookies.set('tokenJWT', tokenJWT, { expires: 7 })
        },
        clearToken(state) {
            state.tokenJWT = null
            localStorage.clear('cart')
            Cookies.remove('tokenJWT')
        },
        setErrorsSingUp(state, error) {
            state.errorSingUp = {
                username: error.username || [],
                email: error.email || [],
                password: error.password ||  [],
                password_repeat: error.password_repeat|| [],
            }
                
        },
        setErrorsSingIn(state, error) {
            state.errorSingIn = {
                username: error.username || [],
                password: error.password ||  [],
            }
                
        },
        clearErrorsSingUp(state) {
                state.errorSingUp = {
                    username: [],
                    email:  [],
                    password:  [],
                    password_repeat:  [],
            }
        },
        clearErrorsSingIn(state) {
                state.errorSingIn = {
                    username: [],
                    password:  [],
            }
        },

  },
    actions: {
        ordersUser({rootGetters, commit}) {
            axios.get(process.env.VUE_APP_API_BASE + 'api/account/user/orders', {
                            headers: {
                            'Authorization': `Bearer ${rootGetters['getToken']}`
                            }
            })
            .then(function (response) {
                    const data = response.data
                    commit('setOrdersUser', data);

            })
            
                .catch(function (errors) {
                console.log(errors.data);
            })
        },

        setUserDetail({rootGetters, commit}) {
            axios.get(process.env.VUE_APP_API_BASE + 'api/account/user/me', {
                            headers: {
                            'Authorization': `Bearer ${rootGetters['getToken']}`
                            }
            })
                .then(function (response) {
                    const data = response.data
                    commit('setUser', data)

                })
                .catch(function (response) {
                    console.log(response.data);
            })
        },
        async SingUp({commit, dispatch}, data) {
            await axios.post(
                process.env.VUE_APP_API_BASE + 'api/account/register',
                data,
                { "Content-type": "application/json" }

            )
                .catch(function (errors) {
                    if (errors.response.data) { 
                        commit('setErrorsSingUp', errors.response.data)
                    }
                })
                .then(function (response) {
                    if (response) {
                        commit('clearErrorsSingUp')
                        dispatch('setSingInShow')  
                    }
                })
        },
        SingIn({commit, dispatch}, data) {
            axios.post(
                process.env.VUE_APP_API_BASE + 'api/account/token',
                data,
                {
                    "Content-type": "application/json" 
                }
                

            )   
                .catch(function (errors) {
                    if (errors.response.data) {
                        commit('setErrorsSingIn', errors.response.data)

                    }
                })
                .then(function (response) {
                    if (response){
                    const token = response.data['access']
                    commit('setToken', token)
                    commit('clearErrorsSingIn')
                        dispatch('setUserDetail')
                        dispatch('ordersUser')
                    axios.get(process.env.VUE_APP_API_BASE + 'api/shop/cart', {
                            headers: {
                            'Authorization': `Bearer ${token}`
                            }
                        })
                        .then(function (res) {
 
                                if (JSON.stringify(res.data[0]['pcart']) != '[]' && Boolean(res.data[0]['pcart'])) {
                                    const payload = res.data[0]['pcart']
                                    console.log(payload)
                                    commit('setCart', payload, { root: true })
                                }
                        } )}
                }
                
                
            )
        },
        logout({ commit }) {
            commit('clearCart')
            commit('clearToken')
            commit('clearUser')
        }


  },
  modules: {
  }
}