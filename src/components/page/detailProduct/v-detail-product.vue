<template>
    <div class="v-detail-product" v-if="product">
        <div class="v-detail-product-info">
            <div class="v-detail-product-info-card">
                <div class="v-detail-product__image">
                    <img :src="product.image" alt="" >
                </div>
                <div class="v-detail-product-info-section">
                    <div class="v-detail-product__name">
                        {{ product.name }}
                    </div>
                    <div class="v-detail-product__price">
                        <p>{{ product.price }} руб.</p>
                    </div>
                    <div class="v-detail-product__addcart" >
                        <UIVButton :bgColor="'#6aa172'" :heightVH="5"
                        :widthVW="20"
                        @click="addToCart(product)"
                        v-if="!isCart(getCart, product.id)">
                            Добавить в корзину
                        </UIVButton>
                        <span v-else>
                            Уже корзине
                        </span>
                    </div>
                    <div class="v-detail-product__description">
                        <span> <strong>Описание:</strong> </span>
                        <p>{{ product.description }}</p>
                    </div>
                </div>          
            </div>
            
        </div>
        <!-- <div class="v-detail-product__comment">
            <div class="v-detail-product__comment__title">
                <h2>
                    Комментарии
                </h2>
            </div>
            <div class="v-detail-product__comment__created" v-if="isAuthenticated">
                <input type="text" placeholder="Написать комментари" v-model="comment" @keyup.enter="createComment({comment, product})">
            </div>
            <div class="v-detail-product__comment_section" >
                <div class="v-detail-product__comment__user" 
                v-for="comment  in getComments" :key="comment.id"
               
                > 
                <div class="" v-if="getComments.length">
                    <p>
                        {{  comment.user.username }}
                    </p>

                    <span> {{ comment.text }}</span>
                </div>


            
            </div>
            </div>

        </div> -->
    </div>
</template>

<script setup>

import { useStore } from 'vuex'
import { computed} from 'vue'
import  { useRoute }from 'vue-router'


const store = useStore()
const productId = useRoute().params.id
// const isAuthenticated = computed(() => store.getters.isAuthenticated )
const getCart = computed(() => store.getters.getCart )
// const getComments = computed(() => store.getters.getComment)
const product = computed(() => store.getters.getProductDetail)
console.log(productId);
function isCart(array, id) {
    return Boolean(array.find(obj => obj.id === id))
}


const addToCart = (product) => store.dispatch('addToCart', product)
store.dispatch('getDetailProduct', productId)





</script>s

<style lang="less" scoped>

.v-detail-product{
    padding: 5vh 15vh;
    display: flex;
    flex-flow: column wrap;
    gap: 2vh;
    justify-content: center;
    @media @breakpoint-modile {

        padding: 5vh 2vh;
    }
}

.v-detail-product-info{
    display: flex;
    justify-content: center;
    flex-direction: column;

}    
.v-detail-product-info-card{
        display: flex;
        flex-direction: row;
        
        @media @breakpoint-modile {

            display: flex;
            align-items: center;
            flex-direction: column;
            
            // padding: 0px 1vh;
    }
    }
.v-detail-product-info-section{
    display: flex;
    flex-direction: column;
    width: 50vh;
    gap: 8px;
        @media @breakpoint-modile {
                width: 90vw;
            }
    div {
        padding: 0px 2vh;
        @media @breakpoint-modile {
                padding: 0px;

            }
    }
}

.v-detail-product__image {
    overflow: hidden;


    img{
        height: 70vh;
        width: 50vw;
        @media @breakpoint-modile {
            height: 40vh;
            width: 90vw;
        }
    }
}
.v-detail-product__name {
    font-size: 3vh;
            @media @breakpoint-modile {
            font-size: 24px;

            padding: 0px 6vh;
        }
}


.v-detail-product__price {
    font-size: 2vh;
}

.v-detail-product__addcart {
    display: flex;
    div{
        padding: 0;

    }
}
.v-detail-product__description{
    

    span{
        font-size: 2vh;
    }
}

.v-detail-product__comment__created {
    margin-top: 2vh;
    border-bottom: 2px solid @light_green;
    input{
        height: 2vh;
        padding: 0px 0.5vh;
        font-size: 2vh;
    }
}

.v-detail-product__comment_section{
    margin-top: 4vh;
    display: flex;
    flex-flow: column wrap;
    gap: 5vh;
}
</style>