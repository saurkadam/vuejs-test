<template>
  <div class="footer">
    <nav class="listLinks">
        <ul class="list">
            <li v-for="(listItem,key) in listLinks" :key="key"><a href="#" class="footer-hover">{{listItem}}</a></li>
        </ul>
    </nav>
    <div class="logos-footer listLinks">
      <div id="trustmark">
        <img src="../assets/images/trustmark_180x180.png" class="img" alt="">
      </div>
      <div class="logo-img">
        <img src="../assets/images/reddot-logo.svg" class="img" alt="">
      </div>
    </div>
    <div class="copyright">
      <p>© 2020 LILLYDOO GmbH</p>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Footer',
  props: {
    listLinks: {
      type: Array
    }
  },
  data () {
    return {

    }
  }
}
</script>

<style scoped lang="scss">
@import '../scss/app.scss';
    .footer {
      display:flex;
      justify-content: center;
      flex-direction: column;
      margin: 40px 0 0 0;
    }
    .listLinks{
        display: flex;
        flex-direction: row;
        justify-content: center;
        flex-basis: 0;
        flex-grow: 1;
        max-width: 100%;
    }
    nav ul {
        list-style: none;
        margin: 0;
        display: flex;
        flex-direction: row;
    }
    nav ul li {
        padding-right: .75rem;
        padding-left: .75rem;
        margin-bottom: 1rem;
    }
    .list{
      padding-left: 0;
      font-size: 0.800rem;
      margin: 0;
      flex-wrap: wrap;
      justify-content: center;
    }
    .footer-hover {
      text-decoration: none;
      color:#000;
    }
    .footer-hover:hover {
      color: #00afab;
    }
    .logos-footer {
      display: flex;
      flex-direction: row;
      margin-bottom: 1.875rem;
    }
    .logo-img {
      padding-left:0.5em;
      width: 60px;
      height: 45px;
    }
    .img {
      height:100%;
      width:100%;
    }
    #trustmark {
      border-right: 1px solid #ddd;
      padding-right: 0.5em;
      width:40px;
      height:40px;
    }
    .copyright {
      font-size: .800rem;
      margin-bottom: 15px;
      font-family: cera_proregular,Helvetica,Roboto,Arial,sans-serif;
      font-weight: 400;
      line-height: 1.4;
      margin-bottom: 2rem;
      text-rendering: optimizeLegibility;
    }
</style>
