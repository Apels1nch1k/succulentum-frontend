<template>
    <div class="v-modal-filter">
        <div class="v-modal-filter__container">
            <p @click="searchCategory('')">Все категории</p>
            <p v-for="category in allCategory" :key="category.id" :value="category" >
            <span @click="searchCategory(category.id)"
            >
                {{ category.name }}
            </span>
        </p>
        </div>
    </div>
</template>

<script setup>
import { useStore } from 'vuex'
import { computed} from 'vue'

const store = useStore()

const allCategory = computed(() => store.getters.allCategory)

store.dispatch('getAllCategory')
function searchCategory(category) {
    store.dispatch('getAllProduct', '', category)
}

</script>

<style lang="less" scoped>
.v-modal-filter{
    position: absolute;
    margin-top: 12vh;
    right: 12vw;
    background: white;
    border: 2px solid @light_green;
    min-width: 10vw;
    font-size: 20px;
    transition: .3s;
    @media @breakpoint-modile {

        min-width: 80vw;
    }
    p{
        cursor: pointer;
    }
    p:hover{
        opacity: 70%;
    }
}

.v-modal-filter__container {

}


</style>