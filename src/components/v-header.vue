<template>
    <div>
        <header>
            <div class="v-header__container">
                <div class="">
                    <IconMenu class="" @click="setMenu()"/>
                </div>
                <div class="v-header__name_shop">
                    <h1>
                        succulentum
                    </h1>
                </div>
                <div class="" >
                    <IconShoppingBag  class="" @click="setCart()"/>
                    <div class="v-header__cart__count">
                        <span > {{ cartItemCount }}</span>
                    </div>
                    
                </div>
            </div>
        </header>
    </div>
</template>

<script setup>


import IconMenu from './icons/IconMenu';
import IconShoppingBag from './icons/IconShoppingBag48.vue';
import { useStore} from 'vuex';
import { computed } from 'vue';


const store = useStore()

const setCart = () => store.dispatch('setVisibleCart')

const setMenu = () => store.dispatch('setVisibleMenu')

const cartItemCount = computed(() => store.getters.cartItemCount)

    
</script>

<style lang="less" scoped>



header{
    z-index: 5;
    background: white;
    position: fixed;
    visibility: visible;
    width: 100vw;
}
.v-header__container{
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 10vh;
    padding: 2vh 3vw;
}

.v-header__name_shop h1{
    font-family: 'Unbounded';
    font-style: bold;
    text-transform: uppercase;
    cursor: pointer;
    user-select: none;
    color: @light_green;
    @media @breakpoint-modile {
        font-size: 1.5rem;
    }
}

.v-header__name_shop h1:hover{
    opacity: 70%;
}


.v-header__cart__count{
    display: flex;
    justify-content: center;
    align-items: center;
    user-select: none;
    position: absolute;
    z-index: 30;
    top: 6vh;
    right: 6vh;
    background: @light_green;
    height: 2.5vh;
    width: 2.5vh;
    border-radius: 100px;    
    span{
        font-size: 12px;
        font-family: 'Unbounded';
        font-style: bold;
        color: white;
 


    }
       @media @breakpoint-modile {
        right: 1vh;
    }

}

</style>