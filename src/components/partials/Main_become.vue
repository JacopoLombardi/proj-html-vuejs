

<!-- Javascript -->
<script>

import {store} from '../.././data/store'

// importo gli oggetti dal file JS dedicato
import {becomeArray} from '../../../public/jsFolder/main'


export default {

  data(){
    return{
      store,
      becomeArray
    };
  },

  methods:{

  },
};
</script>



<!-- HTML -->
<template>

   <!-- become -->
   <section class="d-flex  justify-content-center">
      <div class="_container_custom  d-flex  justify-content-between">

         <div
           v-for="(item, i) in becomeArray"
           :key="item.id"
           :class="{'me-5': i === 0}"
           class="d-flex  border  p-5  w-50"
         >
            <div>
               <img 
                  :src="item.src" 
                  :alt="item.alt"
               >
            </div>

            <div class="ms-5">
               <h3 class="fw-normal  fs-1">{{ item.title }}</h3>
               <p class="fs-5  my-4">{{ item.text }}</p>
               <button class="btn  btn-primary  uppercase_  rounded-5  px-4  py-2">{{ item.btnText }}</button>
            </div>
         </div>

      </div>
   </section>

</template>



<!-- CSS -->
<style lang="scss" scoped>



</style>