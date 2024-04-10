

<!-- Javascript -->
<script>

import {store} from '../.././data/store'

// importo gli oggetti dal file JS dedicato
import {comeArray} from '../../../public/jsFolder/main'


export default {

  data(){
    return{
      store,
      comeArray
    };
  },

  methods:{

  },
};
</script>



<!-- HTML -->
<template>

   <section class="position-relative">
      <div
        v-for="item in comeArray"
        :key="item.id"
        class="box_text  position-absolute  bg-light"
      >
         <h2 class="fw-normal  fs-1">{{ item.titlePrincipal }}</h2>
         <p class="fs-5  text_grey  my-4">{{ item.textPrincipal }}</p>

         <h4 class="capitalized_">{{ item.titleScondary }}</h4>
         <p class="capitalized_  fw-semibold">{{ item.textSecondary }}</p>
      </div>

      <div class="_square  position-absolute bg-light"></div>
   </section>

</template>



<!-- CSS -->
<style lang="scss" scoped>


section{
   margin-top: 130px;
   height: 700px;
   background-image: url(../../../public/img/brooke-cagle-224821-unsplash-1-1920x700.jpg);
   .box_text{
      padding: 70px 100px;
      max-width: 700px;
      top: 50%;
      right: 45%;
      transform: translatey(-50%);
   }
   ._square{
      width: 50px;
      aspect-ratio: 1;
      top: 50%;
      right: 43.7%;
      transform: translatey(-50%);
      transform: rotate(45deg);
   }
}


</style>