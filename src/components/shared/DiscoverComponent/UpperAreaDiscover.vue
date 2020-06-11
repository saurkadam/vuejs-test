<template>
    <div class="headers">
        <h2>Entdecke unsere Hautfreundlichkeit</h2>
        <h5 class="subtitle">Wähle Deine Größe</h5>
        <ButtonGroup :Buttons="Buttons" @changePackageView="changePackageView"/>
    </div>
</template>

<script>
import ButtonGroup from './ButtonGroup'

export default {
    name: 'UpperAreaDiscover',
    components :{
        ButtonGroup
    },
    props:{ 
        Buttons:{
            type: Array
        }
    },
    data () {
        return {

        }
    },
    methods: {
        changePackageView(value){
            this.$emit('changePackageFromButtonGroup', value)
        },
    }
}
</script>

<style scoped lang="scss">
@import '../../../scss/app.scss';
.headers {
    display:flex;
    flex-direction: column;
    width: 100%;
    h2 {
        margin:0;
        font-size: 1.688rem;
        line-height: 1.2;
        text-transform: none;
        margin-bottom: 10px;
        @include fontChanges();
    }
}
.subtitle {
    text-transform: uppercase;
    color: $grey-color;
    font-size: $font-size-small;
    @include fontChanges();
}
@include breakpoint(smallDevice) { 
    .headers {  
        h2, .subtitle{
            margin:0;
            padding-left: 0.3em;
        }
    }
}
</style>