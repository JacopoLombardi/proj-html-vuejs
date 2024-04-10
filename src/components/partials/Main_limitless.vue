

<!-- Javascript -->
<script>

import {store} from '../.././data/store'

// importo gli oggetti dal file JS dedicato
import {limitlesTextArray} from '../../../public/jsFolder/main'

export default {

  data(){
    return{
      store,
      limitlesTextArray
    };
  },

  methods:{

  },
};
</script>


 
<!-- HTML -->
<template>
  
   <!-- limitless -->
   <section class="d-flex  justify-content-center  align-items-center">
      <div class="_container_custom_sm">

         <div
           v-for="item in limitlesTextArray"
           :key="item.id"
           class="_description"
           >
            <h2 class="fw-light  fs-1">{{item.title}}</h2>
            <p class="fs-5  my-4">{{ item.text }}</p>
            <button class="btn  btn-primary  rounded-5  fw-semibold  uppercase_  py-2  px-4">{{ item.textBtn }}</button>
         </div>

      </div>
   </section>

</template>



<!-- CSS -->
<style lang="scss" scoped>


section{
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