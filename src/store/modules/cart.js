import { ref } from 'vue'
import Cookies from 'js-cookie'
import axios from 'axios'


const CART_STORAGE_KEY = "cart"

export default {
state: {
    cartItems: JSON.parse(localStorage.getItem(CART_STORAGE_KEY)) || []
    },
  mutations: {
    addToCart(state, item) {
      item = {
        id: item.id,
        name: item.name,
        price: item.price,
        image: item.image,
        category: item.category,

      }
      const existingItem = state.cartItems.find(
        (cartItem) => cartItem.id === item.id
      )

      if (existingItem) {
        existingItem.quantity++
        existingItem.total_priceitem = Number(existingItem.price * existingItem.quantity)
      } else {
        state.cartItems.push({ ...item, quantity: 1,  total_priceitem: ref(item.price )})
      }

      localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(state.cartItems))

      if (Cookies.get('tokenJWT')) {
        axios.post(process.env.VUE_APP_API_BASE+ 'api/shop/cart', 
          {'pcart': state.cartItems},
          {
            headers: {'Authorization': `Bearer ${Cookies.get('tokenJWT')}`},
          }
        )
      }
    },
    removeFromCart(state, item) {
      state.cartItems = state.cartItems.filter(
        (cartItem) => cartItem.id !== item.id
      )

      localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(state.cartItems))
      if (Cookies.get('tokenJWT')) {
        axios.post(process.env.VUE_APP_API_BASE + 'api/shop/cart', 
          {'pcart': state.cartItems},
          {
            headers: {'Authorization': `Bearer ${Cookies.get('tokenJWT')}`},
          }
        )
      }
    },
    updateQuantity(state, item) {
      const existingItem = state.cartItems.find(
        (cartItem) => cartItem.id === item.id
        )

      if (existingItem) {
        existingItem.quantity = item.quantity
        existingItem.total_priceitem = existingItem.price * existingItem.quantity

      }

      localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(state.cartItems))
      if (Cookies.get('tokenJWT')) {
        axios.post(process.env.VUE_APP_API_BASE + 'api/shop/cart', 
          {'pcart': state.cartItems},
          {
            headers: {'Authorization': `Bearer ${Cookies.get('tokenJWT')}`},
          }
        
        )
      }

    },
    setCart(state, items) {
      localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(items) )
      for (let i = 0; i < items.length; i++) {
        state.cartItems.push(items[i])
      }
        

    },
    clearCart(state) {
      state.cartItems = []
    }
    
  },

  actions: {
    addToCart({ commit }, item) {
      commit('addToCart', item)
    },
    removeFromCart({ commit }, item) {
      commit('removeFromCart', item)
    },
    updateQuantity({ commit }, payload) {
      commit('updateQuantity', payload)
    },
    setCart({commit}, item) {
      commit('addToCart', item)
    },
    clearCart({ commit }) {
      commit('clearCart')
    }
  },
  getters: {
    cartItemCount(state) {
      return state.cartItems.reduce((count, item) => count + item.quantity, 0)
    },
    cartTotal(state) {
      return state.cartItems.reduce(
        (total, item) => total + item.price * item.quantity,
        0
      )
      },
    getCart(state) {
        return state.cartItems
    },
  }
}
