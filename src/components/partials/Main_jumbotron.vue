

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
  
  <section class="d-flex  justify-content-center  mt-5">
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

</style>