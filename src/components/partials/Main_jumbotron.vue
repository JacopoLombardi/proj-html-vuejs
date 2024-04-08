

<!-- Javascript -->
<script>

import {store} from '../.././data/store'

export default {
  data(){
    return{
      store
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
         <div class="w-50">
         <h1 class="capitalized_  fw-normal">start investing in you</h1>
         <p class=" fw-semibold  fs-5  my-4">With over 1200 courses in 18 subjects, you're guaranteed to find something that's right for you.</p>
         <button class="btn  btn-primary  uppercase_  fw-semibold  rounded-5  py-3  px-4">join for free</button>
         </div>

         <!-- composizione dell'immagine -->
         <div class="position-relative  ms-5">
         <img class="img_base" src="../../../public/img/base.png" alt="">
         <img class="img_book1  position-absolute" src="../../../public/img/book1.png" alt="">
         <img class="img_book2  position-absolute" src="../../../public/img/book2.png" alt="">
         <img class="img_lens  position-absolute" src="../../../public/img/magnifier.png" alt="">
         <img class="img_bubblespeech  position-absolute" src="../../../public/img/bubblespeech.png" alt="">
         </div>
      </div>

      
      <div class="_cards  _container_custom_sm  d-flex  justify-content-between">
         <div class="_card">
            <p><i class="fa-solid fa-globe  blue_"></i></p>
            <h4 class="my-4">Worldwide Recognize</h4>
            <p class="text_grey  w-100">Our online course certificates can be used around the world and also in most popular universities and companies</p>
         </div>

         <div class="_card">
            <p><i class="fa-solid fa-desktop  blue_"></i></p>
            <h4 class="my-4">Mostly Online Learning (sd)</h4>
            <p class="text_grey">Masterstudy online certificates can be obtained in a range of specialized areas and typically take about a year to complete</p>
         </div>

         <div class="_card">
            <p><i class="fa-solid fa-calendar-days  blue_"></i></p>
            <h4 class="my-4">Graduate in as little as 1 Year</h4>
            <p class="text_grey">Online post-graduate certificates are a popular way to develop your professional qualifications of Masterstudy</p>
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
   padding: 30px;
   padding-bottom: 15px;
   background-color: #f2f6fb;
      i{
         font-size: 100px;
      }
   }
}

</style>