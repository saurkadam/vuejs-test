<template>
    <div>
        <div>
            <li v-on:click="openPanel()" class="accordion">
                <slot name="AccordionTitle"></slot>
                <img v-show="showArrow" v-bind:class="{'open':open, 'close':!open}" :src="renderPic(imgValue)"/>
            </li>
            <div>
                <transition name="fade">
                    <div v-show="open">
                        <slot name="AccordionData"></slot>
                    </div>
                </transition>            
            </div>

        </div>    
    </div>
</template>

<script>

export default {
    name: 'AccordionComponent',
    props: {
        showArrow: {
            type:Boolean
        },
        allClose: {
            type: Boolean
        },
        openAccordion: {
            type: Boolean
        }
    },
    data () {
        return {
            open: this.openAccordion,
            openImg: 'expand_more.svg',
            closeImg: 'expand_less.svg',
            imgValue: 'expand_less.svg',

        }
    },
    methods: {
        openPanel() {
            if(!this.open) {
                this.imgValue = this.openImg;
            } else {
                this.imgValue = this.closeImg;
            }
            this.open = !this.open
            this.$emit('openStateFinder', this.open)
        },
        renderPic (value) {
            var images = require.context('../../assets/images/', false, /\.png|.svg$/)
            return images('./' + value)
        }
    },
    watch: {
        openAccordion(val, oldVal) {
            if(val === oldVal) {
                return
            }
            this.openPanel()
        }
    }
}
</script>

<style lang="scss" scoped>
    .fade-enter-active, .fade-leave-active {
    transition: opacity .5s;
    }
    .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
    opacity: 0;
    }
    li {
        list-style: none;
    }
    .accordion {
        display: flex;
        justify-content: space-between;
    }
</style>