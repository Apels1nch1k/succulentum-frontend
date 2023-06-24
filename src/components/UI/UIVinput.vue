<script setup>
import { defineProps, defineEmits, ref, watch} from 'vue'


const emits = defineEmits(['update:modelValue'])
const props = defineProps({
    modelValue: String,
    placeholder: String,
    type: {
        type: String,
        default: 'text',
        validator: (val) => [
            'text',
            'textarea',
            'email',
            'tel',
            'password',
            'search'
        ].includes(val),
        
    },
    rows: Number,
    height: {
        type: String,
        default: '3vh',
        require: false,

    },
    width: {
        type: String,
        default: '30vh',
        require: false,
    },
    errors: {
        type: Number,
        require: false,
    }

})

const value = ref(props.modelValue)

watch(value, () => {
    emits('update:modelValue', value)
})


</script>

<template>
    <div class="ui-input">
        <input 
        v-if="type !== 'textarea'"
        :type="type"
        :placeholder="placeholder"
        
        v-model="value"
        :style="{
            'height': height,
            'width': width,

        }"
        :class="{
            'error': errors >= 1,
        }"

        >

        <textarea
        v-else
        :placeholder="placeholder"
        :rows="rows"
        v-model="value"
        :style="{
            'height': height,
            'width': width,

        }"
        :class="{
            'error': errors >= 1
        }"
        >

        </textarea>        
        
    </div>
</template>



<style lang="less" scoped>

input, textarea {
    border-bottom: 2px solid @light_green;

}
.error {
    border-bottom: 2px solid rgba(133, 0, 0, 0.808);

}




</style>