

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
   <section class="d-flex  justify-content-between  text_grey  py-2  m-0">

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
         <ul class="d-flex  fs-5  fw-semibold  me-5  mb-0">
            <li
               v-for="item in optionArray"
               :key="item.id"
               class="capitalized_  cursor_pointer  mx-3"
            >
               {{ item.name }}
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
}

</style>