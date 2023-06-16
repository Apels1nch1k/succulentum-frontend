<template>
    <div class="v-order">
        <div class="v-order__container">
            <div class="">
                <div class="v-order__title">
                    <h2>Оформление заказа </h2>
                </div>
                <div class="v-order__list_order">
                    <vOrderItem v-for="order in orders" :key="order.id" :order="order"/>
                </div>
            </div>
                <div class="v-order__ordering">
                    <h3>Заполните ваши данные:</h3>
                    <form @submit.prevent="submit()">
                        <div class="">
                        <UIVInput
                        placeholder="Ваш город"
                        v-model="order.city"
                        :errors='error.city.length'
                        />
                        <span v-show="error.city.length">{{ error.city[0] }}</span>

                        </div>
                        <div class="">
                        <UIVInput
                        placeholder="Улица"
                        v-model="order.street"
                        :errors='error.street.length'
                        />
                        <span v-show="error.street.length">{{ error.street[0] }}</span>

                        </div>
                       
                        <div class="">
                        <UIVInput
                        placeholder="Номер дома "
                        v-model="order.house_number"
                        :errors='error.house_number.length'
                        />
                        <span v-show="error.house_number.length">{{ error.house_number[0] }}</span>
                        
                        </div>
                        <div class="">
                        <UIVInput
                        placeholder="Номер квартиры"
                        v-model="order.apartment_number"
                        :errors='error.apartment_number.length'
                        />
                        <span v-show="error.apartment_number.length">{{ error.apartment_number[0] }}</span>
                        
                        </div>
                        
                        <UIVButton
                        :bgColor="'#6aa172'"
                        :widthVW="20"
                        >
                            Оплатить заказ
                        </UIVButton>
                        

                    </form>
                </div>

                


        </div>
    </div>
</template>

<script setup>
import vOrderItem from './v-order-item.vue';
import { useStore } from 'vuex'
import { computed, reactive } from 'vue'

const Allproduct = function () {
    const products = []
    for (let i = 0; i < orders.value.length; i++) {
        products.push({
            product: orders.value[i].id,
            price: orders.value[i].price,
            quantity: orders.value[i].quantity
        })
    }
    return products
}

const store = useStore()
const orders = computed(() => store.getters.getCart)
const error = computed(() => store.getters.getOrderError)
const cartTotal = computed(() => store.getters.cartTotal).value

const order = reactive({
    city: null,
    street: null,
    house_number: null,
    apartment_number: null,
    products: Allproduct(),
    total_price: cartTotal

})




const submit = async () => store.dispatch('createOrder', order)



</script>

<style lang="less" scoped>

.v-order{
    padding: 5vh 10vw;    
}
.v-order__container {
    display: flex;
    flex-direction: row;
    @media @breakpoint-modile {
        flex-direction: column;

    }
}

.v-order__title {
    margin: 5vh 0;
}

.v-order__list_order{
    display: flex;
    flex-direction: column;
    gap: 1vh;
    width: 50vw;
        @media @breakpoint-modile {
            width: 80vw;
        }
}
.v-order__ordering{

    width: 30vw;
    padding: 0.5vh;
    border-radius: 1vh;
    @media @breakpoint-modile {
            width: 80vw;
        }
    h3{
        display: flex;
        justify-content: center;
    }
    
}
form{
    display: flex;
    flex-direction: column;
    padding: 10vh 10vh;
    justify-content: center;
    gap: 3vh;
    align-items: center;

    span{
        font-size: 12px;
    }

}
</style>