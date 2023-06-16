import axios from "axios"

export default {
  state: {
    modalFilter: false,
    isVisibleMenu: false,
    isVisibleCart: false,
    singUpShow: false,
    singInShow: true,
    isVisibleAuth: false,
    slider_data : [] || [
      { id: 1, img: 'slide.jpg' },
      { id: 2, img: 'slide2.jpg' },
      { id: 3, img: 'slide.jpg' },
      { id: 4, img: 'slide2.jpg' },
  ]
  },
  getters: {
    modalFilter(state) {
      return state.modalFilter
    },
    isVisibleMenu(state) {
      return state.isVisibleMenu
    },
    isVisibleCart(state) {
      return state.isVisibleCart
    },
    singUpShow(state) {
      return state.singUpShow
    },
    singInShow(state) {
      return state.singInShow
    },
    isVisibleAuth(state) {
      return state.isVisibleAuth
    },
    getSliderData(state) {
      return state.slider_data
    }
  },
  mutations: {
    setModalFilter(state) {
      state.modalFilter = !state.modalFilter
    },
    isVisibleMenu(state) {
      state.isVisibleMenu = !state.isVisibleMenu
      console.log(!state.isVisibleMenu)
    },
    isVisibleCart(state) {
      state.isVisibleCart = !state.isVisibleCart
    },
    singUpShow(state) {
      state.singUpShow = !state.singUpShow
    },
    singInShow(state) {
      state.singInShow = !state.singInShow
    },
    isVisibleAuth(state) {
      state.isVisibleAuth = !state.isVisibleAuth
    },
    setSliderData(state, sliders) {
      state.slider_data = sliders
    }
  },
  actions: {
    modalFilter(ctx) {
      ctx.commit('setModalFilter')
    },
    setVisibleMenu(ctx) {
      ctx.commit('isVisibleMenu')
    },
    setVisibleCart(ctx) {
      ctx.commit('isVisibleCart')
    },
    setSingUpShow(ctx) {
      ctx.commit('singUpShow')
      ctx.commit('singInShow')

    },
    setSingInShow(ctx) {
      ctx.commit('singInShow')
      ctx.commit('singUpShow')

    },
    setVisibleAuth(ctx) {
      ctx.commit('isVisibleAuth')
    },
    async setSliderData(ctx) {
      const res = await (await axios.get(process.env.VUE_APP_API_BASE + `api/shop/allSlider`)).data
      console.log(res);
      ctx.commit('setSliderData', res)
    }
  }
}