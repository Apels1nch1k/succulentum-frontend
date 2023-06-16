import { createStore } from 'vuex'
import user from '@/store/modules/user'
import shop from '@/store/modules/shop'
import cart from '@/store/modules/cart'
import main from '@/store/modules/main'



export default createStore({
  
  modules: {
    user,
    shop,
    cart,
    main,
  }
})
