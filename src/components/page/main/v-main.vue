<script setup>
import vCarouselVue from '@/components/UI/Carousel/v-carousel.vue';
import { useStore } from 'vuex'
import { computed } from 'vue'


const store = useStore() 
const setSliderData = async () => store.dispatch('setSliderData')
setSliderData()
// const slider_item =  [
//                 { id: 1, img: 'slide.jpg' },
//                 { id: 2, img: 'slide2.jpg' },
//                 { id: 3, img: 'slide.jpg' },
//                 { id: 4, img: 'slide2.jpg' },

//             ]

const getSliderData = computed(() => store.getters.getSliderData)
console.log(getSliderData);

    
</script>
<template>
    <div>
        <div class="v-main__carousel">
            <vCarouselVue
            :carousel_data="getSliderData"
            :interval="10000"
            :widthVW="100"
            :heightVH="50"
            :pagination="true"
            :positionPagination="'center'"
            >
            </vCarouselVue>
        </div>
        <div class="v-main__text__proposals">
            <div class="v-main__text__proposals__container">

                    

                    <span><strong>Succulentum</strong> - это небольшой, но очень тёплый и уютный магазинчик, который влюбляет в суккуленты!</span>
                    <span>Мы - ваши проводники в большой мир маленьких суккулентов.</span>


            </div>
        </div>
    </div>
</template>



<style lang="less" scoped>

.v-main__text__proposals {
    display: flex;
    justify-content: center;
    text-align: center;
    padding: 10vh 2vh;
}
.v-main__text__proposals__container{
    display: flex;
    flex-direction: column;
    gap: 0.5vh;
    height: 20vh;
    width: 80vw;
    font-family: 'Montserrat';
    font-weight: normal;
    letter-spacing: 2px;
    font-size: 2vh;
    @media @breakpoint-modile {
        font-size: 2vh;
    }
}

</style>