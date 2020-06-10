<template>
    <div class="payment-container">
        <div>
            <p class="header-alignment">Sicher bezahlen mit:</p>
            <nav class="listLinks">
                <ul class="list">
                    <li v-for="(listItem,key) in leftPayment" :key="key"><img class="listImage" :src="renderPic(listItem)"></li>
                </ul>
            </nav>
        </div>
        <div>
            <p class="header-alignment">Unser Versandpartner:</p>
            <nav class="listLinks">
                <ul class="list">
                    <li v-for="(listItem,key) in rightPayment" :key="key"><img class="listImage" :src="renderPic(listItem)"></li>
                </ul>
            </nav>
        </div>
    </div>
</template>

<script>
export default {
  name: 'Payment',
  props: {
    leftPayment: {
      type: Array
    },
    rightPayment: {
      type: Array
    }
  },
  data () {
    return {
      leftData: [],
      rightData: []
    }
  },
  methods: {
    renderPic (value) {
      var images = require.context('../assets/images/', false, /\.png|.svg$/)
      return images('./' + value + '.svg')
    }
  }
}
</script>

<style scoped lang="scss">
@import '../scss/app.scss';
    .payment-container {
        background:$container-light-grey-back;
        padding:20px;
        display:flex;
        justify-content: space-evenly;
        flex-direction: row;
        flex-wrap: wrap;
        font-size: .800rem;
    }
    nav ul {
        list-style: none;
        margin: 0;
        display: flex;
        flex-direction: row;
    }
    nav ul li {
        padding-right: .75rem;
    }
    .list{
      padding-left: 0;
      font-size: 0.800rem;
      font-family: cera_proregular,Helvetica,Roboto,Arial,sans-serif;
      margin: 0;
      flex-wrap: wrap;
    }
    .listImage {
        height:60px;
        width:60px;
    }
    .header-alignment {
        text-align: left;
        margin:0;
    }
    @include breakpoint(smallDevice) {
        .header-alignment {
            text-align: center;
        }
        .list {
            justify-content: center;
        }
    }
</style>
