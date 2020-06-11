<template>
    <div class="btn-group desktop">
        <button v-for="(button,index) in Buttons" :class="{ 'active': index === valActive }" v-on:click="selectSize($event,index)" :key="index" class="btn-class">
            <div>
                <h4>{{index + 1}}</h4>
                <p>{{button.desc}}</p>
            </div>
        </button>
    </div>  
</template>

<script>
export default {
    name: 'ButtonGroup',
    props: {
        Buttons:{
            type: Array
        }
    },
    data () {
        return {
            active: false,
            valActive:0
        }
    },
    methods: {
        selectSize(event,value){
            for(let i=0;i < document.getElementsByClassName('btn-group')[0].children.length;i++) {
                	document.getElementsByClassName('btn-group')[0].children[i].classList.remove('active')
            }
            document.getElementsByClassName('btn-group')[0].children[value].classList.add('active')
            this.$emit('changePackageView', value)
        },
    }
}
</script>

<style lang="scss" scoped>
@import '../../../scss/app.scss';
@include breakpoint(iphoneX) {
    .btn-group {
        justify-content: flex-start;
        .btn-class {
            margin: 5px 0;
        }
    }
}
.btn-group {
    display:flex;
    justify-content: flex-start;
    flex-grow: inherit;
    flex-wrap: wrap;
    .btn-class {
        background: transparent;
        border: 1px solid $grey-color;
        color: $grey-color;
        padding: 0 1rem;
        flex: 0 1 auto;
        margin: 5px;
        width: 17.33%;
        div {
            h4 {
                font-size: 1.2rem;
                margin:10px 0 0 0;

            }
            p {
                font-size: 0.65rem;
                margin: 10px 0;
            }
        }
    }
    .btn-class.active{
        background: $green-color;
        color: $white-color;
        border: 0.5px solid $green-color;
    }
    .btn-class.focus{
        outline: $green-color auto 1px !important;
    }
    .btn-class:hover{
        background: $green-color;
        color: $white-color;
        border:0.5px solid $green-color;
    }
}
@include breakpoint(smallDevice) {

        .btn-group {
            display:flex;
            justify-content: flex-start;
            flex-grow: inherit;
            flex-wrap: wrap;
            .btn-class {
                padding: 0 0.5rem;
                margin: 5px;
                width: 30.33%;
                background: transparent;
                border: 1px solid $grey-color;
                color: $grey-color;
                flex: 0 1 auto;
                div {
                    h4 {
                        font-size: 1.2rem;
                        margin:10px 0 0 0;

                    }
                    p {
                        font-size: 0.75rem;
                        margin: 5px 0;
                    }
                }
            }
        }
    }
</style>