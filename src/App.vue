<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <Navbar></Navbar>    
    <Jumbotron :mobile="mobile"></Jumbotron>
    <Discover :mobile="mobile" @sendtoApp="packageChange"></Discover>
    <Features></Features>
    <Package :data="PackageData" ></Package>
    <Testimonial></Testimonial>
    <Convince></Convince>
    <Contact></Contact>
    <Payment :leftPayment="leftArrayPayment" :rightPayment="rightArrayPayment"/>
    <Footer :listLinks="listLinksData"/>
  </div>
</template>

<script>
import Footer from './components/Footer'
import Payment from './components/Payment'
import Contact from './components/Contact'
import Convince from './components/Convince'
import Testimonial from './components/Testimonial'
import Features from './components/Features'
import Navbar from './components/Navbar'
import Discover from './components/Discover'
import Package from './components/Package'
import pack from './assets/json/packageProducts'
import Jumbotron from './components/Jumbotron'

export default {
  name: 'App',
  components: {
    Footer,
    Payment,
    Contact,
    Convince,
    Testimonial,
    Features,
    Navbar,
    Discover,
    Package,
    Jumbotron
  },
  data () {
    return {
      listLinksData: ['LILLYDOO App', 'Zahlung & Versand', 'Karriere', 'Presse', 'AGB', 'Datenschutzerklärung', 'Impressum'],
      leftArrayPayment: ['visa', 'mastercard', 'paypal', 'rechnung', 'sepa'],
      rightArrayPayment: ['dhl'],
      windowWidth: 0,
      windowHeight: 0,
      mobile:this.getWindowWidth(),
      PackageData:pack[0]
    }
  },
  methods: {
        getWindowWidth(event) {
            this.windowWidth = document.documentElement.clientWidth
            this.mobile = this.windowWidth > 768 ? false : true
        },
        getWindowHeight(event) {
            this.windowHeight = document.documentElement.clientHeight
        },
        packageChange(value) {
              console.log(value);
              this.PackageData = pack[value]
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
}
</script>

<style>
@import './scss/app.scss';
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
body {
    font-family: cera_proregular,Helvetica,Roboto,Arial,sans-serif;
    font-style: normal;
    font-weight: 400;
    line-height: 1.5;
    margin:0;
}
html,body
{
    width: 100%;
    height: 100%;
    margin: 0px;
    padding: 0px;
    overflow-x: hidden; 
}
</style>
