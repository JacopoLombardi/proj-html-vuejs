

<!-- Javascript -->
<script>

import {store} from '../.././data/store'

// importo gli oggetti dal file JS dedicato
import {contactArray} from '../../../public/jsFolder/footer'


export default {

  data(){
    return{
      store,
      contactArray
    };
  },

  methods:{

  },
};
</script>



<!-- HTML -->
<template>

   <section class="col-3">
      <div
         v-for="item in contactArray"
         :key="item.id"
      >
         <h5 class="capitalized_    fw-bold">{{ item.title }}</h5>
         <p class="_text  my-4">{{ item.text }}</p>

         <p>{{ item.number }}</p>
         <p>{{ item.fax }}</p>

         <p class="text_light_grey  mt-3">{{ item.email }}</p>
      </div>
   </section>

</template>



<!-- CSS -->
<style lang="scss" scoped>



</style>