<template>
    <div  class="jumbotronImg">
        <div class="jumbotron-data">
            <div class="glass-box" v-if="!mobile">
                <h1>Dein gratis Testpaket</h1>
                <a href="#" class="Btn btn-jumbotron">Wähle Deine Größe</a>
            </div>
            <div class="glass-box-mobile" v-if="mobile">
                <h1>Dein gratis Testpaket</h1>
                <a href="#" class="Btn btn-jumbotron">Wähle Deine Größe</a>
            </div>
        </div>    
    </div>

</template>

<script>

import desktopImg from '../assets/images/header-trialbox-desktop.jpg';
import mobileImg from '../assets/images/header-trialbox-mobile.jpg';
export default {
    name:'Jumbotron',
    props:{
        mobile:{
            type: Boolean
        }
    },
    data() {
        return {
            img: this.mobile ? mobileImg : desktopImg
        }
    }
}
</script>

<style lang="scss" scoped>
@import '../scss/app.scss';
$desktop-img: '../assets/images/header-trialbox-desktop.jpg';
$mobile-img: '../assets/images/header-trialbox-tablet.jpg';

    .jumbotronImg {
        background: url($desktop-img) no-repeat center;
        background-size: cover;
        height: 100vh;
        width: 100%;
        top: 0;
        left: 0;    
    }
    .jumbotron-data {
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: flex-end;
        align-items: center;
    }
    .glass-box {
        width: 40%;
        right: 40px;
        height: 25%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        background: rgba(255, 255, 255, 0.65);
        position: relative;
        h1 {
            font-family: Museo-300,Helvetica,Roboto,Arial,sans-serif;
            font-size: 2.625rem;
            line-height: 1.1;
            margin: 2.5rem 0 2rem 0;
            @include fontChanges(); 
        }
        .btn-jumbotron {
            max-width: 18.1rem;
            margin: 1.5rem auto .5rem;
            font-weight: 500;
            font-size: 1.063rem;
            padding: .6875rem 1.25rem .5625rem 1.25rem;
            line-height: 1.4375rem;
        }
    }


    @include breakpoint(smallDevice) {
        .jumbotronImg {
            background: url($mobile-img) no-repeat center;
            background-size: cover;
            height: 95vh;
        }     
        .jumbotron-data {
            align-items: flex-end;
            justify-content: center;
        }
        .glass-box-mobile {
            height: 145px;
            background: rgba(255, 255, 255, 0.65);
            width: 100%;
        }   
    }

    @include breakpoint(iphoneX) {
        .glass-box {
            height: 60%;
        }
    }
</style>