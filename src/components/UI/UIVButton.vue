

<script setup>
import { defineProps} from 'vue'

defineProps({
    widthVW: {
        type: Number,
        require: true,
        default: 10
    },
    heightVH: {
        type: Number,
        require: true,
        default: 3
    },
    bgColor: {
        type: String
    },
    textColor: {
        type: String,
        default: 'white',
    }
})
</script>
<template>
    <div class="v-button"
    >
        <button type="submit"
            :style = "{
                    'width': widthVW + 'vh',
                    'height': heightVH + 'vh',
                    'background' : bgColor ,
                    'color' : textColor,      
                }"
        >
            <slot >
            </slot>
        </button>
    </div>
</template>
<style lang="less" scoped>
.v-button {
    display: flex;
    justify-content: center;
}
button {
    border: none;
    outline: none;
    cursor: pointer;
    transition: .4s;
}

button:hover {
    opacity: 70%;
}

</style>