

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
  
   <section class="d-flex  justify-content-center  align-items-center">
      <div class="_container_custom_sm">

         <div class="_description">
            <h2 class="fw-normal  fs-1">Limitless learning, more possibilities</h2>
            <p class="fw-semibold  fs-5  my-4">Online courses open the opportunity for learning to almost anyone, regardless of their sheduling commitments.</p>
            <button class="btn  btn-primary  rounded-5  fw-semibold  uppercase_  py-2  px-4">read more</button>
         </div>

      </div>
   </section>

</template>



<!-- CSS -->
<style lang="scss" scoped>


section{
   margin-top: 150px;
   padding: 160px 0;
   background-image: url(../../../public/img/Untitled-1-1-1-1-1.png);
   ._description{
      width: 40%;
      h2{
         margin-right: 100px;
      }
   }
}

</style>