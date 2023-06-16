<template>
    <div class="v-product-card">
        <div class="v-product-card__image" >
            <img :src="product.image" alt="" >
        </div>
        <div class="v-product-card__info">
            <div class="v-product-card__info__section">
                    <div class="v-product-card__info__name">
                        <router-link :to="{ name: 'product-detail', params: {id: product.id} }">
                            <p>{{ product.name}}</p>
                        
                        </router-link>
                    </div>
                    <div class="v-product-card__info__price">
                        <p>{{ product.price }} руб.</p>
                    </div>
                
            </div>
            
            
            <UIVButton @click="addToCart(product)" v-if="!isCart(getCart, product.id)" :bgColor="'#6aa172'" :widthVW="70" :heightVH="3.5"> В корзину</UIVButton>
            <p v-else class="v-product-card__info__inCart">Уже в корзине</p>
        </div>
    </div>
</template>

<script setup>
import { useStore } from 'vuex'
import { defineProps, computed, ref} from 'vue'

const store = useStore()

const props = defineProps({
    product: Object
})
const getCart = computed(() =>store.getters.getCart)
const addToCart = (product) => store.dispatch('addToCart', product)
const product = ref(props.product)

function isCart(array, id) {
    return Boolean(array.find(obj => obj.id === id))
}


</script>

<style lang="less" scoped>

.v-product-card{
    display: flex;
    flex-direction: column;
    height: 25vw;
    width: 25vw;
    @media @breakpoint-modile {
        width: 80vw;
        height: 40vh;  

    }

}
.v-product-card__image{
    overflow: hidden;
        @media @breakpoint-modile {
            width: 80vw;
            height: 34vh; 
        } 
        img {   
            width: 25vw;
            height: 45vh;
            

            @media @breakpoint-modile {
                    overflow: hidden;

                    width: 80vw;
                    height: 34vh; 
                    object-fit: cover;
                }

        }
}


.v-product-card__info{
    display: flex;
    flex-direction: column;

}
.v-product-card__info__section{
    display: flex;
    justify-content: space-between;
}
.v-product-card__info__name{
    display: flex;
    color: black;
    p{
        color: black;
        transition: .3s;
    }
    p:hover{
        opacity: 70%;
    }
}
.v-product-card__info__inCart{
    display: flex;
    justify-content: center;
}
</style>