<template>
    <div class="wrapper"
    
            :style="{
                'width': widthVW + 'vw',
                'height': heightVH + 'vh'
            }">
        <div class="v-carousel"
            :style="{
                'margin-left': '-' +   (100 * paginationNumber) + '%',

            }"   
        >
            <v-carousel-item
            v-for="item in carousel_data"
            :key="item.id"
            :item_data="item"
            :widthVW="widthVW"
            :heightVH="heightVH"
            />

        </div>         
        <div v-if="pagination" class="v-carousel__pagination" 
        :style="{
            'width' : widthVW + 'vw',
            'justify-content': positionPagination,
        }">
            <div class="">
                <span v-for="n in carousel_data.length" :key="n-1" @click="pickSlide(n-1)" 
                :style="{

                }">
                    <div class="v-carousel__pagination__active" v-if="(n-1) == paginationNumber"></div>
                </span>
            </div>

        </div>
    </div>
</template>

<script setup>
import vCarouselItem from './v-carousel-item.vue'
import { defineProps, ref, reactive } from 'vue'

const paginationNumber = ref(0)
const obj = reactive({
    paginationNumber
})
console.log(paginationNumber)
const props = defineProps({
    carousel_data: {
        type: Array,
        default: () => []
    },
    interval: {
        type: Number,
        default: 0,
    },
    widthVW: {
        type: Number,
        require: true

    },
    heightVH: {
        type: Number,
        require: true
    },
    pagination: {
        type: Boolean,
        default: false,
    },
    positionPagination: {
        type: String,
        default: 'center',
    }
})

console.log(props.carousel_data);
let carousel_length = ref(props.carousel_data.length)
let interval = ref(props.interval)
const nextSlide = () => {
    if (obj.paginationNumber >= carousel_length.value - 1) {
        obj.paginationNumber = 0
    }
    else {
        obj.paginationNumber++
    }
}

const pickSlide = (numberSlide) =>{
            console.log(numberSlide)
            obj.paginationNumber = numberSlide
            
        }

if (interval.value > 0) {
    setInterval(function () {
        nextSlide()
    }, interval.value)
}


//     methods: {


//     mounted() { 
//         if (this.interval > 0) {
//             let vm = this
//             setInterval(function () {
//                 vm.nextSlide()
//             }, vm.interval)
//         }
//         console.log(this.positionPagination)
//     }
//     }
</script>

<style lang="less" scoped>

.wrapper{

    overflow: hidden;
    margin: 0 auto;
    // width: 100vw;
    // height: 40vh;
}
.v-carousel{
    display: inline-flex;
    transition: all ease-in-out 2s;
}
.v-carousel__pagination {
    position: absolute;
    display: flex;
    top: 55vh;
    z-index: 5;
    div{
        display: inherit;
        flex-direction: row;
        gap: 8px;

        span{
            border: 3px solid @dark_green;
            width: 1.5vh;
            height: 1.5vh;
            border-radius: 1vh;
            cursor: pointer;
            transition: .3s;
            overflow-y: hidden;
            
        }
        span:hover{
            opacity: 80%;
        }

    }
    
    
}

.v-carousel__pagination__active{
    width: inherit;
    height: inherit;
    background: @light_green;
}


</style>