

<!-- Javascript -->
<script>

import {store} from '../.././data/store'

// importo gli oggetti dal file JS dedicato
import {blogArray} from '../../../public/jsFolder/footer'


export default {

  data(){
    return{
      store,
      blogArray
    };
  },

  methods:{

  },
};
</script>



<!-- HTML -->
<template>

   <section class="col-3">
      <div>

        <h5 class="capitalized_  fw-bold  mb-4">blog</h5>

         <div
            v-for="item in blogArray"
            :key="item.id"
            class="d-flex  mb-5"
         >
            <div>
               <img 
                  :src="'../../../public/img/' + item.src" 
                  :alt="item.alt"
               >
            </div>

            <div class="box_text  ms-4">
               <p class="fw-semibold  text_light_grey">{{ item.text }}</p>
               <p class="">{{ item.date }}</p>
            </div>
         </div>

      </div>
   </section>

</template>



<!-- CSS -->
<style lang="scss" scoped>


.box_text{
   color: rgb(209, 209, 209);
   line-height: 120%;
}


</style>