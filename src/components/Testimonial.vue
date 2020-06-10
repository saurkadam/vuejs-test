<template>
    <div class="testimonial-back">
        <div>
            <h2 class="header-testimonial">Was andere über unsere Windeln sagen</h2>
            <AlignerComponent direction="row" class="alignedComp" alignedItems="center" :marginProvided="'20px 20px'" justify="center" v-for="(imageNameValue,index) in imageName" :key="index" :padLeft="'0px 0px 0px 40px'">
                <ImageComponent class="padLeft" slot="left" :imgSrc="imageNameValue.imgSrc" :rounded="true" imgWidth="100px" imgHeight="100px"></ImageComponent>
                <div class="info" slot="right">
                    <p class="data-info">{{imageNameValue.data}}</p>
                    <div class="nameHeadline">
                        <span class="name"><b>{{imageNameValue.name}}</b> - <a href="#" class="headline">{{imageNameValue.headLine}}</a></span>
                    </div>
                </div>
            </AlignerComponent>    
        </div>
    </div>  
</template>

<script>
import AlignerComponent from './shared/AlignerComponent'
import ImageComponent from './shared/ImageComponent'
export default {
    name: 'Testimonial',
    components: {
        AlignerComponent,
        ImageComponent
    },
    data() {
        return {
            imageName:[
                {
                    imgSrc:'testimonial-uwe-gensheimer.png',
                    data:'"Wir lieben das praktische Windelabo von LILLYDOO, das uns sogar bis nach Frankreich versorgt. Dazu bleibt mit diesen Windeln bei unserem kleinen Racker – trotz viel Bewegung – alles schön trocken."',
                    headLine:"Kapitän der deutschen Handball-Nationalmannschaft",
                    name:"Uwe Gensheimer"
                }, 
                {
                    imgSrc: 'testimonial-nina-bott.png',
                    data: '"Ehrlich gesagt hattet ihr mich schon beim Design – aber seit mein Langschläfer auch morgens noch ganz trocken ist, will ich keine andere Windel mehr für meinen Lio!"',
                    headLine:"Schauspielerin",
                    name:"Nina Bott"
                }, 
                { 
                    imgSrc:'testimonial-mari-baby-kind-meer.png',
                    data: '"Die LILLYDOO Windeln gefallen uns besser als alle anderen Windeln, die wir zuvor ausprobiert haben. Und das waren mit drei Kindern so einige. Wir sind absolut begeistert!"',
                    headLine:"Baby, Kind & Meer",
                    name:"Mari – Bloggerin "
                }]
        }
    }
}
</script>

<style lang="scss" scoped>
@import '../scss/app.scss';
    .padLeft{
        padding-right: 2em;
    }
    .info {
        display: flex;
        flex-direction: column;
        align-items: start;
        width: 80%;
        font-size:$font-size-small;
        .nameHeadline {
            display: flex;
            flex-direction: row;
            align-items: center;
            width: 100%;
            text-align: left;
        }
        .data-info {
            text-align: left;
        }
        .headline {
            color:$green-color;
            text-decoration: none;
            padding-left:1em;
        }
        .headline:hover {
            color:#009793
        }
        .name {
            padding-right:0.5em;
            margin: 0;
            width: 100%;
        }
    }
    .header-testimonial {
        line-height: 1.2;
        text-transform: none;
        margin-bottom: 30px;
        @include fontChanges();
        @include addFontHeader();
    }
    .testimonial-back {
        background:$container-light-grey-back;
        padding: 2rem 0 2rem 0;
        div {
            display: flex;
            flex-direction: column;
            align-items: center;
        }
    }
    .alignedComp {
        max-width: 60%;
    }
    @include breakpoint(tablet) {
        .alignedComp {
            max-width:100%; 
        } 
    }
</style>