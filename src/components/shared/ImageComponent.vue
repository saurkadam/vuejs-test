<template>
  <div  v-bind:style="{width:imgWidth,height:imgHeight}">
    <img :src="renderPic(imgSrc)" alt="" :class="{'rounded':rounded}">
  </div>
</template>

<script>
export default {
    name: 'ImageComponent',
    props: {
        imgSrc: {
            type: String,
            required: true
        },
        rounded: {
            type: Boolean
        },
        imgWidth: {
            type: String
        },
        imgHeight: {
            type: String
        }

    },
    data () {
        return {

        }
    },
    methods: {
        renderPic (value) {
        var images = require.context('../../assets/images/', false, /\.png|.svg|.jpg$/)
        return images('./' + value)
        }
    }
}
</script>

<style lang="scss" scoped>
@import './main.scss';
    .rounded {
        border-radius: 50%;
    }
    div {
        img {
            height: 100%;
            width: 100%;
        }
    }
    @include breakpoint(smallDevice) {
        div {
            img {
                height: 60%;
                width: 75%;
            }
        }       
    }
</style>