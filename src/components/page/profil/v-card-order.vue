<template>
    <div class="v-card-order">
        <div class="v-card-order__number__order">
            Номер заказа: {{ order.id }}
        </div>
        <div class="v-card-order__shipping__addresses">
            
            Адрес доставки:
            {{ order.city}}
            {{order.street}}
            {{ order.house_number }}
            {{ order.apartment_number }}
        </div>

        <div class="v-card-order_products">
           <div class="v-card-order_product__card" v-for="product in order.products" :key="product.id">
                <div class="">
                    <div class="v-card-order_product__card__image">
                        <img :src="product.product.image" />
                    </div>
                    <div class="v-card-order_product__name">
                        <router-link :to="{ name: 'product-detail', params: { id: product.product.id } }">
                                    <p>{{ product.product.name }}</p>
                            
                        </router-link>
                        <p>Количество: {{product.quantity }}</p>
                        <p>Сумма: {{ product.price }}</p>
                    </div>
                </div>
            </div> 
        </div>
            <div class="v-card-order_info">
                <div class="v-card-order__status-order">
                    Статус заказа:  {{ order.status_order }}
                </div>
                <div class="v-card-order__total_cost">
                    Сумма заказа: {{ order.total_cost }} руб
                </div>

            </div>
    </div>
</template>

<script setup>
import { defineProps } from 'vue'


defineProps({
    order: Object
})

</script>

<style lang="less" scoped>

.v-card-order{
    background: rgba(128, 128, 128, 0.096);
    padding: 10px 20px;
    border-radius: 10px;

        @media @breakpoint-modile {
        
        font-size: 14px;

    } 

}

.v-card-order_products{
    margin: 20px 0 20px 0;
    display: flex;
    flex-direction: row;
    width: 80vw;

    @media @breakpoint-modile {
        display: flex;
        gap: 4px;
        width: inherit;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }

}

.v-card-order_product__card{
    width: 25vh;
    display: flex;
    justify-content: center;
}



.v-card-order_product__card__image{


    img{
        height: 15vh;
        width: 20vh;
        @media @breakpoint-modile {
            height: 15vh;
            width: 20vh;
    } 
        
    }
    
    
}

.v-card-order_info{
    display: flex;
    justify-content: space-between;
    align-items: center;
        @media @breakpoint-modile {
            
            flex-direction: column;
            div{
                font-size: 14px;
            }
    } 


}
.v-card-order__total_cost{
    font-size: 20px;

}

.v-card-order__status-order{
    font-size: 20px;



}

</style>