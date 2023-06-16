<template>
    <div class="v-cart-item__container" >
        <div class="v-cart-item__body">
            <div class="v-cart-item_photo">
                <img :src="item.image" alt="">
            </div>
            <div class="v-cart-item__info">
                <div class="v-cart-item__info__name">
                    {{ item.name }}
                </div>
                <div class="v-cart-item__info__price">
                    Стоимость:  {{ item.price }} руб
                </div>
                <div class="v-cart-item__info__quantity">
                    <UIVQuantity v-model="item.quantity" @click="updateQuantity(item)"/>
                </div>

                <div class="v-cart-item__info__delete-total_price">
                    
                    
                    <div class="v-cart-item__info__total_price">
                        Сумма: {{ item.total_priceitem }}
                    </div>
                    <div class="v-cart-item__info__delete">
                        <iconDelte24 @click="removeFromCart(item)" />
                    </div>
                </div>
                

            </div>

        </div>
    </div>
</template>

<script setup>


import { ref, defineProps } from 'vue'
import { useStore } from 'vuex'
import iconDelte24 from '@/components/icons/IconDelete24.vue'

const store = useStore()

const props = defineProps({
    item_cart: {
                type: Object,
            }
})
const item = ref(props.item_cart)
const removeFromCart = (item) => store.dispatch('removeFromCart', item)
const updateQuantity = (item) => store.dispatch('updateQuantity', item)



</script>

<style lang="less" scoped>

.v-cart-item__container{

    border-bottom: 1px solid @light_green;

}

.v-cart-item__body{
    display: flex;
    column-gap: 1vw;
    padding: 1vh 0.1vh;
}
.v-cart-item_photo{
    display: flex;
    align-items: center;
    img{
        height: 14vh;
        width: 16vh;

    }
    
}
.v-cart-item__info {
    display: flex;
    flex-direction: column;
    // gap: 1.5vh;
        @media @breakpoint-modile {
        font-size: 14px;
        width: 60vw;
    }
}
.v-cart-item__info__name {
    font-weight: 500;

}


.v-cart-item__info__delete-total_price{
    margin-top: 10px;
    display: flex;
    gap: 8vh;
    justify-content: space-between;

}
.v-cart-item__info__delete{
    display: flex;
    width: max-content;
}
</style>