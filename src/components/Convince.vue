<template>
    <div>
        <div class="upperSection">
            <h2 class="convince-urself">Überzeug Dich selbst</h2>
            <a href="#" class="Btn">Jetzt gratis testen</a>
        </div>
        <div class="fox" :style="{ backgroundImage: 'url(' + img + ')' }">
        </div>
    </div>
</template>
<script>
import image from '../assets/images/pusteblume-pattern-04.png';
export default {
  name: 'Convince',
  data () {
      return {
          img: image
      }
  }
}
</script>
<style lang="scss" scoped>
@import '../scss/app.scss';

.fox {
    height: 15.875rem;
    background-size: contain;
}

.convince-urself {
    font-size: 1.688rem;
    line-height: 1.2;
    text-transform: none;
    margin-bottom: 30px;
    font-style: normal;
    font-weight: 400;
}
.upperSection {
    margin-bottom: 50px;
}
</style>
