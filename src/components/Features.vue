<template>
    <div class="features-back">
    <h2 class="header-features">Wie es funktioniert</h2>
    <div class="features">
        
        <div class="feature-provided" v-for="(feat,index) in srcData" :key="index">
            <img :src="renderPic(feat.imgSrc)" alt="">
            <span class="head-space"><b>{{feat.featName}}</b></span>
            <p>{{feat.description}}</p>
        </div>

    </div>
    <a class="footer-features">Erfahre hier mehr über das <br/> LILLYDOO Windel-Abo.</a>
    </div>

</template>

<script>
export default {
    name: 'Features',
    data () {
        return {
            srcData: [
                {
                    imgSrc:'lillydoo-your-trialbox-icon.svg',
                    featName: 'DEIN TESTPAKET',
                    description: 'Wir schenken Dir die Produkte, Du übernimmst nur das Porto.'
                },
                {
                    imgSrc:'lillydoo-your-flexibility-icon.svg',
                    featName: 'DEINE FLEXIBILITÄT',
                    description: 'Erste Monatsbox nach 14 Tagen für 49,50 € erhalten. Oder noch vor der ersten Lieferung kündigen.'
                },
                {
                    imgSrc:'lillydoo-your-subscription-icon.svg',
                    featName: 'DEINE MONATSBOX',
                    description: 'Jederzeit Windelgröße, Designs und Lieferintervalle anpassen oder weitere Produkte hinzufügen.'
                }
            ]
        }
    },
    methods: {
        renderPic (value) {
        var images = require.context('../assets/', false, /\.png|.svg$/)
        return images('./' + value)
        }
    }
}
</script>

<style lang="scss">
@import "./shared/main.scss";
    .features-back {
        padding:20px;
        background:$container-light-grey-back;
    }
    .header-features {
        line-height: 1.2;
        text-transform: none;
        margin-bottom: 50px;
        @include fontChanges();
        @include addFontHeader();
    }
    .footer-features {
        line-height: 1.2;
        text-transform: none;
        margin-top: 20px;
        @include fontChanges();
        font-size: 0.9rem;
        color: $green-color;
        cursor: pointer;
    }
    .features {
        display:flex;
        flex-direction: row;
        min-width:60px;
        align-items: center;
        justify-content: center;
        margin: 0 120px;
        @include fontChanges;
    }
    .head-space {
        padding-top: 1.5em;
        @include fontChanges();
    }
    .feature-provided {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: 33.33%;
        @include fontChanges;
    }
    @include breakpoint (smallDevice) {
        .features {
            flex-direction: column;
            align-items: center;
            justify-content: center;
            min-width:100%;
            margin:0;
        }
        .feature-provided {
            width: 100%;
        }
    }
</style>