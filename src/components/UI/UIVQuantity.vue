<template>
    <div class="v-quantity">
        <div class="" @click="ValueAdd()" >-</div>
        <input type="number" v-model.number="value" min="1"> 
        <div class="" @click="value++">+</div>
    </div>
</template>

<script setup>


import {defineProps, defineEmits, ref, watch} from 'vue'

const emits = defineEmits(['update:modelValue'])
const props = defineProps({
    modelValue: Number
})
const value = ref(props.modelValue);

function ValueAdd(){
    if(value.value === 0){
        value.value + 0   
    }
    else{
        value.value--
    }
}


watch(value, () => {
    emits('update:modelValue', value)
})

</script>

<style lang="less" scoped>
.v-quantity {
    display: flex;
    flex-direction: row;
    gap: 1vh;
    border: 1px solid @light_green;
    width: 10vh;
    height: 4vh;
    font-size: 4vh;
    border-radius: 0.5vh;
    align-items: center;
    justify-content: center;
    color: @light_green;
    div {
        user-select: none;
        cursor: pointer;
        transition: .4s;
        font-weight: 200;

    }
    div:hover {
        opacity: 70%;
        
    }

        @media @breakpoint-modile {
            width: 12vh;
            height: 5vh;
    }
}
.v-quantity input {
    width: 4vh;
    text-align: center;
    border: none;
    font-size: 2vh;
    outline: none;
}



</style>