<script setup>
import { useStore } from 'vuex'
import { computed} from 'vue'
import  vCardOrder  from './v-card-order'

const store = useStore()
const getUSer = computed(() => store.getters.getUSer)
const getOrders = computed(() => store.getters.getOrders)

// const user= ref(getUSer).value
console.log(getOrders);

</script>
<template>
    <div class="v-profil">
        <div class="v-profil__container">
            <div class="v-profil__info">
                <div class="v-profil__info_username">
                    Добро пожаловать, <span>{{ getUSer.username }}</span>
                </div>
                <div class="v-profil__info__number">
                    История заказов:
                </div>
            </div>
            <div>
                <div class="v-profil__container__orders" v-if="getOrders.length">
                    <vCardOrder v-for="order in getOrders" :key="order.id" :order="order"/>
                </div>
                <span  v-else> Заказов у вас нету</span>
            </div>
        </div>
    </div>
</template>



<style lang="less" scoped>

.v-profil{
    padding: 5vh 10vw;
}


.v-profil__info{
    display: flex;
    width: 80vw;
    flex-direction: column;
    gap: 1vh;
    margin-bottom: 2vh;

}

.v-profil__info_username{
    font-size: 3vh;
    font-weight: 500;
    span{
        font-family: 'Unbounded';
        color: @light_green;
    }

}
.v-profil__info__number{
    font-size: 3vh;
    font-weight: 500;

}


.v-profil__container__orders{
    display: flex;
    flex-direction: column;
    gap: 2vh;
}

</style>