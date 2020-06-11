<template>
    <div class="discover-view" id="select">
        <UpperAreaDiscover :Buttons="Buttons" @changePackageFromButtonGroup="changePackageFromButtonGroup" v-if="mobile"/>
        <AlignerComponent  direction="row" class="alignComponent" alignedItems="center" justify="center">
            <ImageComponent class="imageDiscover" slot="left" :imgSrc="imgSrcValue" :rounded="false"></ImageComponent>
            <div slot="right" class="top-header">
                <UpperAreaDiscover :Buttons="Buttons"  @changePackageFromButtonGroup="changePackageFromButtonGroup" v-if="!mobile"/>
                <div>
                    <DiscoverDescription/>
                </div>
                <div class="discover-cta">
                    <div>
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
import ButtonGroup from './shared/DiscoverComponent/ButtonGroup'
import DiscoverDescription from './shared/DiscoverComponent/DiscoverDescription'
import UpperAreaDiscover from './shared/DiscoverComponent/UpperAreaDiscover'

export default {
    name: 'Discover',
    props: {
        mobile: {
            type:Boolean
        }
    },
    components: {
        AlignerComponent,
        ImageComponent,
        ButtonGroup,
        DiscoverDescription,
        UpperAreaDiscover
    },
    data () {
        return {
            imgSrcValue: 'lillydoo-testpaket-10.jpg',
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
                
            ]
        }
    },
    methods: {
        changePackageFromButtonGroup(value) {
            this.imgSrcValue = this.Buttons[value].img
            this.$emit('sendtoApp', value)
        }
    }
}
</script>

<style lang="scss" scoped>
@import '../scss/app.scss';
.discover-view {
    margin: 5rem 4rem;
}
.active {
    color: $green-color;
}
.headers {
    text-align: left;
}
.imageDiscover {
    max-width: 60%;
    padding-right: 10em;
}
.top-header {
    max-width: 28%;
    display:flex;
    flex-direction: column;
    align-items: flex-start;
}
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

.discover-view {
    margin: 0;
}
.section-two {
    display:flex;
    flex-direction: column;
}
.mobile {
    display: block;
    padding: 0 1rem;
}
.alignComponent {
    .padLeft {
        padding: 0 !important;
    }
}
.discover-cta {
    width: 100%;
    div {
        display: flex;
        a{
            width: 100%;
        }
    }
    padding: 0 1rem;
}
@media (max-width: 1024px) {
    .top-header  {
        max-width: 45%;
    }
    .imageDiscover{ 
        padding-right: 5em;
    }
}
@include breakpoint(smallDevice) {
    .discover-view {
        margin: 5rem 2rem;
    }
    .alignComponent {
        flex-direction: column !important;
    }
    .top-header {
        max-width: 100%;
    }
    .imageDiscover {
        max-width: 100%;
        padding-right:0;
    }
    .discover-cta {
        width: 100%;
        div {
            display: flex;
            a{
                width: 80%;
            }
        }
        padding: 0 1rem;
    }
}


</style>