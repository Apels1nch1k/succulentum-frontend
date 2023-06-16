<template>
    <div class="v-order-item">
        <div class="v-order-item__image">
            <img :src="order.image" alt="order.name">
        </div>
        <div class="v-order-item__info">
            <span class="v-order-item__info__name">
                <router-link :to="{ name: 'product-detail', params: { id: order.id } }">
                    <p>{{ order.name }}</p>
                </router-link>
            </span>
            <span>
                <p>Цена: {{ order.total_priceitem }}</p>
            </span>
            <span>
                <p>Количество : {{ order.quantity }}</p>
            </span>
        </div>
    </div>
</template>

<script setup>
import { defineProps} from 'vue'

defineProps({
    order:  Object

})


</script>

<style lang="less" scoped>

.v-order-item{
    height: 20vh;
    display: flex;
    flex-direction: row;
    gap: 1vh;
    align-items: center;
    width: 50vw;
        @media @breakpoint-modile {
        width: inherit;

    }
}

.v-order-item__image{
    width: 12vw;
    height: 20vh;



    img{
        width: inherit;
        height: 18vh;   
        object-fit: fill;
        
    }    
    @media @breakpoint-modile {
        width: 16vh;
        height: 16vh;
    }
}
// .v-order-item__info{
//     width: 40vh;
// }

.v-order-item__info__name p{
    color: black;
    transition: .3s;
}
.v-order-item__info__name p:hover{
    opacity: 70%;
}
</style>