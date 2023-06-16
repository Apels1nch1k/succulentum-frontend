<template>
    <div class="v-shop__container__main">
        <div class="v-shop__container">
            <div class="v-shop__filter">
                <div class="v-shop__filter__search">
                    <IconSearch24  class="v-shop_filter__search__icon"/>
                    <input type="search" placeholder="Поиск" v-model="obj.search">
                </div>                
                <div class="v-shop__filter_category__icon" @click="modalFilter()"> 
                    <IconFilterAlt/>
                </div>
                    <vModalFilterVue v-show="modalFilterBoolean" />
            </div>
            <div class="v-shop">
                <div class="v-shop__list" >
                   <VProductCard v-for="product in products" :key="product.id"
                    :product="product"
                    
                   />
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import IconSearch24 from '@/components/icons/IconSearch24.vue'
import IconFilterAlt from '@/components/icons/IconFilterAlt.vue'
import VProductCard from './v-product-card.vue'
import { useStore } from 'vuex'
import { reactive, computed, watch} from 'vue'
import vModalFilterVue from './v-modal-filter.vue'

const store = useStore()
const search = ''
const obj = reactive({
    search
})
const products = computed(() => store.getters.allProducts)
const modalFilterBoolean = computed(() => store.getters.modalFilter)
console.log(modalFilterBoolean.value);
const modalFilter = ()=> store.dispatch('modalFilter')
store.dispatch('getAllProduct')
watch(() => obj.search,
    (search) => {
    store.dispatch('getAllProduct', search)
})
</script>

<style lang="less" scoped>

.v-shop__container{    
    min-width: 80vw;
    width: 80vw;
    height: auto;

}
.v-shop__container__main{
    display: flex;
    justify-content: center;
}
.v-shop__filter{
    display: flex;


    border-radius: 2vh;
    align-items: center;

    padding: 0 1vh;
}


.v-shop__filter__search{
    display: flex;
    align-items: center;
    border-bottom: 2px solid @light_green;
    
    input {
        height: 3.5vh;
        width: 74vw;
        outline-style: none;
        border: none;
        border-radius: 1vh;
        padding: 0 2vh;
    }
    div{
        display: flex;
        align-items: center;

        position: relative;
        z-index: 1;
        margin-left: 0.5vw;
    }
}

.v-shop__list{
    display: flex;
    padding-top: 10vh;
    flex-wrap: wrap;
    gap: 2vw;
    max-width: 80vw;
    margin-bottom: 5vh;
}

</style>