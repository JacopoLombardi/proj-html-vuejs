

<!-- Javascript -->
<script>

import {store} from '../.././data/store'

// importo gli oggetti dal file JS dedicato
import {titleAndTextArray, imageCompositionArray, cardsArray} from '../../../public/jsFolder/main'


export default {

  data(){
    return{
      store,
      titleAndTextArray,
      imageCompositionArray,
      cardsArray
    };
  },

  methods:{

  },
};
</script>



<!-- HTML -->
<template>
  
  <section class="d-flex  flex-column  align-items-center  mt-5">

      <div class="_container_custom_sm  _jumbotron  d-flex  align-items-center">
         <!-- titolo e testo -->
        <div 
          v-for="item in titleAndTextArray"
          :key="item.id"
          class="w-50"
        >
          <h1 class="capitalized_  fw-normal">{{ item.title }}</h1>
          <p class=" fw-semibold  fs-5  my-4">{{ item.text }}</p>
          <button class="btn  btn-primary  uppercase_  fw-semibold  rounded-5  py-3  px-4">{{ item.textBtn }}</button>
        </div>

         <!-- composizione dell'immagine -->
        <div class="position-relative  ms-5">
          <img 
            v-for="(item, i) in imageCompositionArray"
            :key="item.id"
            :class="[{'position-absolute': i != 0}, item.class]"
            :src="item.src"     
            :alt="item.alt"
            >
        </div>
      </div>

      <!-- cards -->
      <div class="_cards  _container_custom_sm  d-flex  justify-content-between">
        <div
          v-for="item in cardsArray"
          :key="item.id"
          class="_card"
          >
          <p>
            <i 
              :class="item.class"
              class="fa-solid  blue_">
            </i>
          </p>
          <h4 class="my-4">{{ item.title }}</h4>
          <p class="text_grey">{{ item.text }}</p>
        </div>
      </div>

  </section>

</template>



<!-- CSS -->
<style lang="scss" scoped>


._jumbotron{
  .img_book1{
    left: 63%;
    bottom: 38%;
  }
  .img_book2{
    left: 35%;
    bottom: 10%;
  }
  .img_lens{
    left: 75%;
    bottom: 23%;
  }
  .img_bubblespeech{
   left: 82%;
    bottom: 73%;
  }
}


._cards{
   margin-top: 100px;
   ._card{
   max-width: 410px;
   padding: 35px;
   background-color: #f2f6fb;
      i{
         font-size: 80px;
      }
   }
}

</style>