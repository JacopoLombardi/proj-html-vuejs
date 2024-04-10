

<!-- Javascript -->
<script>

import {store} from '../.././data/store'

// importo gli oggetti dal file JS dedicato
import {languageArray, optionArray, socialArray} from '../../../public/jsFolder/header'

export default {

  data(){
    return{
      store,
      languageArray,
      optionArray,
      socialArray
    };
  },

  methods:{

  },
};
</script>



<!-- HTML -->
<template>

   <!-- first row -->
   <section class="d-flex  justify-content-between  text_grey  py-4  m-0">

      <!-- language -->
      <div>
         <select class="border-0  capitalized  cursor_pointer  fw-semibold  text_grey">
            <option
               v-for="(item, i) in languageArray"
               :key="i"
            >
               {{ item }}
            </option>
         </select>
      </div>


      <div class="d-flex">
         <!-- option -->
         <ul class="_option  d-flex  fs-5  fw-semibold  me-5  mb-0">
            <li
               v-for="item in optionArray"
               :key="item.id"
               class="capitalized_  position-relative  cursor_pointer  rounded-5  mx-1  px-3"
            >
               {{ item.name }}
               
               <!-- badges -->
               <span
                 :class="{'d-none': item.new === false}"
                 class="badge  text-bg-danger  position-absolute">
                 New
               </span>

            </li>
         </ul>

         <!-- social -->
         <ul class="d-flex  mb-0">
            <li
               v-for="item in socialArray"
               :key="item.id"
               v-html="item"
               class="_social_icon  cursor_pointer  fs-5  mx-2"
            >
            </li>
         </ul>
      </div>

   </section>

</template>



<!-- CSS -->
<style lang="scss" scoped>


section{
   padding: 0 80px;
   ._option li:hover{
      transition: all 0.4s ease;
      background-color: rgba(214, 214, 214, 0.524);
      color: rgba(0, 153, 255, 0.637);
   }
   .badge{
      font-size: 12px;
      bottom: 24px;
      right: 0;
      border-bottom-left-radius: 0;
   }
}

</style>