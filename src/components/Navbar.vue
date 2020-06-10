<template>
    <div>
        <div  v-if="!mobile">
            <div class="normal-layout">
                <div class="logo-wrapper">
                    <div class="logo-image" :style="{ backgroundImage: 'url(' + logoImg + ')' }"/>
                </div>
                <nav class="middle-section">
                    <ul>
                        <li class="active">Gratis Testpaket</li>
                        <li>Flexibles Abo</li>
                        <li v-on:click="openNavProduct('product')">Produkte</li>
                    </ul>
                </nav>
                <nav class="end-section">
                    <ul>
                        <li>Magazin</li>
                        <li v-on:click="openNavLilly('lillydoo')">Über LILLYDOO</li>
                    </ul>
                </nav>
            </div>
            <AccordionComponent  :showArrow="false">
                <div slot="AccordionData" class="alignedComp"> 
                    <AlignerComponent  direction="column" class="alignComponent" alignedItems="center" :marginProvided="'20px 50px'" justify="center" v-for="(imageNameValue,index) in imageName" :key="index" :padLeft="'0px 0px 0px 40px'">
                        <ImageComponent class="padLeft" slot="left" :imgSrc="imageNameValue.imgSrc" :rounded="false" imgWidth="40px" imgHeight="40px"></ImageComponent>
                        <div slot="right">
                            <h5>{{imageNameValue.headLine}}</h5>
                            <p>{{imageNameValue.description}}</p>
                        </div>
                    </AlignerComponent>
                </div> 
            </AccordionComponent>
        </div>
        <div  v-if="mobile">
            <div class="mobile-layout" >
                <nav>
                    <div class="menu">
                        <i class="fa fa-bars" aria-hidden="true"></i>  
                    </div>
                    <div class="mobile-logo">
                        <div class="mobile-logo-image" :style="{ backgroundImage: 'url(' + logoImg + ')' }"/>
                    </div>
                    <div class="mobile-bag">
        
                    </div>
                </nav>
            </div>
            <AccordionComponent  :showArrow="false">
                <div slot="AccordionData"> 
                    <AlignerComponent  direction="column" class="alignedComp" alignedItems="center" :marginProvided="'20px 20px'" justify="center" v-for="(imageNameValue,index) in imageName" :key="index" :padLeft="'0px 0px 0px 40px'">
                        <ImageComponent class="padLeft" slot="left" :imgSrc="imageNameValue.imgSrc" :rounded="true" imgWidth="100px" imgHeight="100px"></ImageComponent>
                        <div  slot="right">

                        </div>
                    </AlignerComponent>
                </div> 
            </AccordionComponent>    
        </div>


  
    </div>
</template>

<script>
import image from '../assets/sprites@2x.png';
import bag from '../assets/bag.png';
import AlignerComponent from './shared/AlignerComponent'
import AccordionComponent from './shared/AccordionComponent'
import ImageComponent from './shared/ImageComponent' 
import{ bus } from '../main'
export default {
    name: 'Navbar',
    components: {
        AlignerComponent,
        AccordionComponent,
        ImageComponent
    },
    data() {
        return {
            logoImg: image,
            bagImg: bag,
            windowWidth: 0,
            windowHeight: 0,
            mobile:this.getWindowWidth(),
            dropdownProduct: false,
            dropdownLilly: false,
            imageName:[],
            openStateDropdown: false,
            Products: [
                {
                    imgSrc:'icon-lillydoo-premium.png',
                    headLine:'LILLYDOO',
                    description:'Unsere hautfreundlichen Babypflegeprodukte'
                },
                {
                    imgSrc:'icon-lillydoo-kids.png',
                    headLine:'LILLYDOO kids',
                    description:'Kleine Entdecker auf großen Abenteuern'
                }
            ],
            lillyDoo:[
                {
                    imgSrc:'icon-lillydoo-our-philosophy.svg',
                    headLine:'Unsere Philosophie',
                },
                {
                    imgSrc:'icon-lillydoo-product-philosophy.svg',
                    headLine:'Unsere Produktphilosophie',
                },
                {
                    imgSrc:'icon-lillydoo-lillydoo-club.svg',
                    headLine:'LILLYDOO Club',
                },
                {
                    imgSrc:'icon-lillydoo-refer-a-friend.svg',
                    headLine:'Freunde einladen',
                },
                {
                    imgSrc:'icon-lillydoo-lillydooing-good.svg',
                    headLine:'LILLYDOOING good',
                }
            ]
        }
    },
    mounted() {
        this.$nextTick(function() {
            window.addEventListener('resize', this.getWindowWidth)
            window.addEventListener('resize', this.getWindowHeight)
            this.getWindowWidth()
            this.getWindowHeight()
        })
    },
    methods: {
        getWindowWidth(event) {
            this.windowWidth = document.documentElement.clientWidth
            this.mobile = this.windowWidth > 768 ? false : true
        },
        getWindowHeight(event) {
            this.windowHeight = document.documentElement.clientHeight
        },
        openNavProduct(value) {
            this.dropdownLilly = false;
            this.dropdownProduct = true;
            if (!this.openStateDropdown) {
                bus.$emit('open');
            } else if (this.openStateDropdown && (this.imageName === this.Products)) {
                bus.$emit('open');
            }
            this.imageName = this.Products;
        },
        openNavLilly(value) {
            this.dropdownProduct = false;
            this.dropdownLilly = true;
            if (!this.openStateDropdown) {
                bus.$emit('open');
            } else if (this.openStateDropdown && (this.imageName === this.lillyDoo)) {
                bus.$emit('open');
            }
            this.imageName = this.lillyDoo;

        }
    },
    created() {
            bus.$on('openStateFinder', (value) => {
                this.openStateDropdown = value
                console.log(this.openStateDropdown)
            })
    }
}
</script>

<style lang="scss" scoped>
@import './shared/main.scss';
    .alignedComp {
        display: flex;
        flex-direction: row;
        justify-content: center;
    }
    .alignComponent {
        cursor: pointer;
        h5 {
            color:$black-color;
            margin:0;
            margin-top:1em;
            font-size: $font-size-small;
            @include fontChanges();
        }
        h5:hover {
            color:$green-color;
        }
        p {
            color:$grey-color;
            font-size: $font-size-small;
            margin:0;
        }
    }
    .normal-layout {
        display: flex;
        flex-direction: row;
        justify-content: center;
        margin-bottom: 0;
        height: 70px;
        background-color: $container-light-grey-back;
    }
    .middle-section, .end-section {
        margin-top: 0.5em;
        ul {
            display:flex;
            flex-direction: row;
            li {
                list-style: none;
                padding-right: 2em;
                color: $black-color;
                font-size: 1rem;
            }
            li .active {
                color: $green-color;
            }
            li:hover {
                color: $green-color;
                cursor: pointer;
            }
        }
    }
    .logo-wrapper {
        width: 319px;
        height: 65px;
        .logo-image {
            background-repeat: no-repeat;
            background-position: 0 0;
            width: 100%;
            height: 100%;
            background-size: cover;
        }
    }
    .mobile-layout {
        .menu:hover {
            cursor: pointer;
        }
        nav {
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            align-items: center;
                .mobile-logo {
                    width: 230px;
                    height: 36px;
                .mobile-logo-image {
                    background-repeat: no-repeat;
                    background-position: -50px -78px;
                    /* width: 96%; */
                    height: 100%;
                    background-size: cover;
                }

            }
        }
    }
@include breakpoint(iphoneX) {
    .middle-section {
        margin-top:0;
    }
    .logo-wrapper {
        height: 51px;
    }
}
</style>