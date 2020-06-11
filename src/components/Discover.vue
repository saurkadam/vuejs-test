<template>
    <div class="discover-view" id="select">
        <div class="headers mobile">
            <h2>Entdecke unsere Hautfreundlichkeit</h2>
            <h5 class="subtitle">Wähle Deine Größe</h5>
            <div class="btn-group" v-if="mobile">
                <button v-for="(button,index) in Buttons" :class="{ 'active': index === valActive }" v-on:click="selectSize($event,index)" :key="index" class="btn-class">
                    <div>
                        <h4>{{index + 1}}</h4>
                        <p>{{button.desc}}</p>
                    </div>
                </button>
            </div>             
        </div>
        <AlignerComponent  direction="row" class="alignComponent" alignedItems="center" justify="center">
            <ImageComponent class="padLeft" slot="left" :imgSrc="imgSrcValue" :rounded="false"></ImageComponent>
            <div slot="right" class="top-header">
                <div class="section-two">
                    <div class="headers desktop">
                        <h2>Entdecke unsere Hautfreundlichkeit</h2>
                        <h5 class="subtitle">Wähle Deine Größe</h5>                
                    </div>
                    <div class="btn-group desktop">
                        <button v-for="(button,index) in Buttons" :class="{ 'active': index === valActive }" v-on:click="selectSize($event,index)" :key="index" class="btn-class">
                            <div>
                                <h4>{{index + 1}}</h4>
                                <p>{{button.desc}}</p>
                            </div>
                        </button>
                    </div>
                    <div class="description">
                        <p>Teste jetzt unsere hautfreundlichen Windeln und erhalte unsere Feuchttücher mit 99 % Wasser zu Größe 1 - 3 oder die Sensitiven Feuchttücher zu Größe 4 - 5.</p>
                        <ul>
                            <li>Wir zahlen die Produkte, Du nur den Versand.</li>
                            <li class="active">Automatischer Übergang ins jederzeit kündbare Windel-Abo für 49,50 € pro Lieferung.</li>
                            <li>Preise inkl. MwSt., ggf. zzgl. <span class="active"> Versandkosten</span></li>
                        </ul>
                    </div>
                    <div class="btn-discover">
                        <a href="#" class="Btn btn-discover">Jetzt gratis testen</a>
                    </div>                
                </div>

            </div>
        </AlignerComponent>
    </div>
</template>

<script>
import AlignerComponent from './shared/AlignerComponent'
import ImageComponent from './shared/ImageComponent'


export default {
    name: 'Discover',
    props: {
        mobile: {
            type:Boolean
        }
    },
    components: {
        AlignerComponent,
        ImageComponent
    },
    data () {
        return {
            Buttons: [
                {
                    value:'1',
                    desc:'(2-5 KG)',
                    img:'lillydoo-testpaket-10.jpg'
                },
                {
                    value:'2nd',
                    desc:'(4-8 KG)',
                    img:'lillydoo-testpaket-20.jpg'
                },
                {
                    value:'3rd',
                    desc:'(6-10 KG)',
                    img:'lillydoo-testpaket-30.jpg'
                },
                {
                    value:'4th',
                    desc:'(9-14 KG)',
                    img:'lillydoo-testpaket-40.jpg'
                },
                {
                    value:'5',
                    desc:'(11-16 KG)',
                    img:'lillydoo-testpaket-50.jpg'
                },                
                
            ],
            imgSrcValue: 'lillydoo-testpaket-10.jpg',
            active: false,
            valActive:0,

        }
    },
    methods: {
        selectSize(event,value){
            for(let i=0;i < document.getElementsByClassName('btn-group')[0].children.length;i++) {
                	document.getElementsByClassName('btn-group')[0].children[i].classList.remove('active')
            }
            document.getElementsByClassName('btn-group')[0].children[value].classList.add('active')
            this.imgSrcValue = this.Buttons[value].img
            this.$emit('changePackageView', value)
        },


    },

}
</script>

<style lang="scss" scoped>
@import '../scss/app.scss';
.discover-view {
    margin:120px;
}
.headers, .description {
    text-align: left;
    h2 {
        @include fontChanges();
    }

}
.desktop {
    display: block;
}
.mobile {
    display: none;
}
.subtitle {
    text-transform: uppercase;
    color: $grey-color;
    font-size: $font-size-small;
    @include fontChanges();
}

.section-two{
    padding: 0 2rem;
    .description {
        text-align: left;
        p{
            font-size:$font-size-small;
        }
        ul {
            li {
                font-size:$font-size-small;  
            }
        }
    }
}
.mobile-hack {
    display:flex;
    flex-direction: column;
}
.active {
    color: $green-color;
}
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
    justify-content: space-between;
    flex-grow: inherit;
    flex-wrap: wrap;
    .btn-class {
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
    .btn-discover {
        display:flex;
        justify-content: center;
        a{
            width: 100%;
        }
    }
    @include breakpoint(smallDevice) {
        .discover-view {
            margin: 0;
        }
        .section-two {
            display:flex;
            flex-direction: column;
        }
        .mobile {
            display: block;
            padding: 0 2rem;
        }
        .alignComponent {
            flex-direction: column !important;
            .padLeft {
                padding: 0 !important;
            }
        }
        .btn-group {
            display:flex;
            justify-content: flex-start;
            flex-grow: inherit;
            flex-wrap: wrap;
            .btn-class {
                padding: 0 1rem;
                margin: 5px;
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
                        width: 65px;
                    }
                }
            }
        }
        .desktop {
            display: none;
        }
    }

</style>