<template>
        <div class="description">
            <p>Teste jetzt unsere hautfreundlichen Windeln und erhalte unsere Feuchttücher mit 99 % Wasser zu Größe 1 - 3 oder die Sensitiven Feuchttücher zu Größe 4 - 5.</p>
            <ul>
                <li>Wir zahlen die Produkte, Du nur den Versand.</li>
                <li class="active">Automatischer Übergang ins jederzeit kündbare Windel-Abo für 49,50 € pro Lieferung.</li>
                <li>Preise inkl. MwSt., ggf. zzgl. <span class="active"> Versandkosten</span></li>
            </ul>
        </div>
</template>

<script>
import ButtonGroup from './ButtonGroup'
export default {
    name: 'DiscoverDescription',
    components: {
        ButtonGroup
    },
    data () {
        return {
        }

    },
    methods:{

    }
}
</script>

<style lang="scss" scoped>
@import '../../../scss/app.scss';
.description {
    text-align: left;
}
.active {
    color: $green-color;
}
@include breakpoint(smallDevice) { 
    .description {
        padding:0 1rem;
    }
}
</style>