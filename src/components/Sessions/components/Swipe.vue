<template>
<swiper :options="swiperOption" id="swiper">
  <swiper-slide v-for="picture in pictures"><img :src="picture.url"></swiper-slide>
  <div class="swiper-pagination" slot="pagination"></div>
</swiper>
</template>

<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper';

export default {
  name:'Swipe',
  data () {
      return {
        swiperOption: {
          autoplay: 3000,
          pagination: '.swiper-pagination',
          paginationClickable: true,
          slidesPerView: 1,
          paginationClickable: true,
          loop: true
        },
        pictures:[],
      }
    },
  components: {
    swiper,
    swiperSlide
  },
  mounted () {
    this.$http.get('../../../../static/data/session/swiper.json').then(function(response){
      this.pictures=response.body
    },function(error){
      // error callback
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/*轮播图*/
.swiper-slide img {
  width: 100%;
  height: 56.23667%;
}

.swiper-pagination-bullet-active {
  background: #ccc !important;
}
</style>
