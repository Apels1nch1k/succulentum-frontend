<template>
    <div class="v-cart__cart__bg">
        <div class="v-cart__container">
            <div class="">
                <div class="v-cart__header">
                    
                    <div class="v-cart__title">
                        Корзина
                    </div>
                    <div class="v-cart__close">
                        <IconCloseVue @click="setCart()" class=""/>
                    </div>
                </div>
                <div class="v-cart__body__cart">
                    <div class="v-cart__body__cart__items"  >
                        <div class="" v-if="getCart.length">
                            <vCartItemVue v-for="product_info in getCart"
                            :item_cart="product_info"
                            :key="product_info.id"/>
                        </div>
                        <div class="" v-else>
                            <p> Корзина пуста </p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="">
                <span>Сумма заказа:</span> {{ cartTotal }} <span>руб</span>
            </div>
            <div class="">
                <UIVButton :widthVW="100" :bgColor="'#6aa172'" :heightVH="5">
                    <router-link to="/order" class="order-button" @click="setCart()" v-if="isAuthenticated"> Оформить заказ</router-link>
                    <span class="order-button" v-else> Оформить заказ</span>
                </UIVButton >

            </div>
        </div>
    </div>
</template>

<script setup>
import IconCloseVue from '../icons/IconClose.vue'
import vCartItemVue from './v-cart-item.vue'
import { useStore } from 'vuex'
import { computed } from 'vue'


const store = useStore()


const setCart = () => store.dispatch('setVisibleCart')
const getCart = computed(() => store.getters.getCart)
// const cartItemCount = computed(() => store.getters.cartItemCount)
const cartTotal = computed(() => store.getters.cartTotal)
const isAuthenticated = computed(() => store.getters.isAuthenticated)


</script>

<style lang="less" scoped>



.v-cart__cart__bg {
    height: 100vh;
    width: 25vw;
    background: white;
    z-index: 10;
    position: fixed;
    border-left: 1px solid @light_green;
    top: 0;
    right: 0;
        @media @breakpoint-modile {
            width: 100vw;
            height: 100vh;
            border: none;
    }
}

.v-cart__container{

    div{
        padding: 0.5vh 0.5vh;
    }
}

.v-cart__header{
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.v-cart__title{
    font-family: 'Unbounded';
    font-style: bold;
    font-size: 3vh;
    color: @light_green;
}

.v-cart__body__cart{
    height: 80vh;
}



.v-cart__body__cart__items{
    height: 80vh;
    display: flex;
    flex-direction: column;
    column-gap: 1vh;
}
.order-button{
    color: white;
    width: 100vw;
    height: inherit;
    transition: 0.3s;
}
.order-button:hover{
    opacity: 70%;
}

</style>