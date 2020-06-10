<template>
<div class="contact-section">
  <p>Wir wollen mehr für Dich sein, nicht nur Wickeln und Tschüss. Also ruf gerne an oder schreib uns!</p>
  <div class="contact-info-section">
    <div class="social">
      <span>
        <i class="fa fa-envelope  icons" aria-hidden="true"></i>
      </span>
      <a class="noDecoration" href="mailto:service@lillydoo.com">service@lillydoo.com</a>
      </div>
    <div class="social">
      <span>
        <i class="fa fa-phone  icons" aria-hidden="true"></i>
      </span>
      <a class="noDecoration" href="tel:+4906964357420">+49 (0) 69 - 643 57 420
      </a>
    </div>
    <div class="social">
        <a href="#" class="fb"><i class="fa fa-facebook-square  icons" aria-hidden="true"></i></a>
        <a href="#" class="insta"><i class="fa fa-instagram  icons" aria-hidden="true"></i></a>
        <a href="#" class="yt"><i class="fa fa-youtube-square  icons" aria-hidden="true"></i></a>
    </div>
  </div>
</div>

</template>

<script>
export default {
  name: 'Contact',
  data () {
    return {

    }
  }
}
</script>

<style scoped lang="scss">
@import './shared/main.scss';

    .contact-section {
        display: flex;
        flex-direction: column;
        background: $green-color;
        color:$white-color;
    }
    .contact-info-section {
        display:flex;
        flex-direction: row;
        justify-content: space-evenly;
        margin-bottom: 1.25em;
    }
    .icons {
      color:$white-color;
      padding-right: 0.30em;
      font-size: 2em;
    }
    .noDecoration {
      text-decoration: none;
      color:$white-color;
    }
    .social {
      display:flex;
      align-items: center;
    }
   @include breakpoint(smallDevice) {
      .contact-info-section {
        flex-direction: column;
        justify-content: center;
        align-items: center;
      }
      .social {
        padding-bottom:20px;
      }
     }
</style>
