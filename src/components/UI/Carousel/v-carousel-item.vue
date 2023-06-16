<template>

    <div class="v-carousel-item">
        <img :src="item_data.photo" alt=""
        :style="{
            'width': this.widthVW + 'vw',
            'height': this.heightVH  + 'vh'
        }
        "

        >

    </div>
</template>

<script>
export default {
    name: 'v-carousel-item',
    props: {
        item_data: {
            type: Object,
            default: () => {}
        },
        widthVW: {
            type: Number,
            require: true

        },
        heightVH: {
            type: Number,
            require: true
        }
    }
}
</script>

<style lang="less" scoped>

.v-carousel-item{
    user-select: none;


    img {
        object-fit: cover;
        user-select: none;
    }
}


</style>