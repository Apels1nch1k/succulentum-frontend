<template>
  <div class="">

    
    <VHeader/>
    <VBasePage/>
          <transition name="menu"
              enter-active-class ="menu-enter-active"
              leave-active-class ="menu-leave-active"
              :duration="1000"
          >
            <VMenuMain v-show="isVisibleMenu" @closeMenu="setMenu()"/>
          </transition>
          <transition name="cart"
              enter-active-class ="cart-enter-active"
              leave-active-class ="cart-leave-active"
              :duration="1000"
          >
              <vCart v-show="isVisibleCart" @closeCart="setCart()"/>
          </transition>


  </div>
</template>
 
<script setup>

import VMenuMain from './components/menu/v-menu-main.vue';
import vCart from './components/cart/v-cart.vue';
import VHeader from './components/v-header';
import VBasePage from './components/v-base-page.vue';
import { useStore } from 'vuex';
import { computed } from 'vue';

const store = useStore()
const isVisibleCart = computed(() => store.getters.isVisibleCart)
const isVisibleMenu = computed(() => store.getters.isVisibleMenu)

const setCart = () => store.dispatch('setVisibleCart')


const setMenu = () => store.dispatch('setVisibleMenu')
// const isAuthenticated = computed(() => store.getters.isAuthenticated).value










</script>

<style lang="less">


.menu-enter-active{
    animation: animateSlideMenuOpen .5s  linear forwards;
}


.menu-leave-active{
    animation: animateSlideMenuClose .5s linear forwards ;
}

.cart-enter-active{
    animation: animateSlideCartOpen .5s  linear forwards;
}


.cart-leave-active{
    animation: animateSlideCartClose .5s linear forwards ;
}


</style>
