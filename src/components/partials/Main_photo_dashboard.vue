

<!-- Javascript -->
<script>

import {store} from '../.././data/store'

// importo gli oggetti dal file JS dedicato
import {photoDashboardArray} from '../../../public/jsFolder/main'

export default {
  data(){
    return{
      store,
      photoDashboardArray
    };
  },

  methods:{

  },
};
</script>



<!-- HTML -->
<template>
  
   <section class="d-flex  justify-content-center  mb-5">
      <div class="_container_custom_sm  _container_photo">

         <!-- upper row -->
         <div class="_upper  d-flex">
            <div 
               v-for="item in photoDashboardArray.bigPhoto"
               :key="item.id"
               class="big_photo  pe-5"
            >
               <img 
                  :src="item.src" 
                  :alt="item.alt"
               >
               <div class="box_text">
                  <h4>{{ item.title }}</h4>
                  <p>{{ item.text }}</p>
               </div>
            </div>


            <div class="right_to_big_photo  d-flex  flex-column  justify-content-between">
               <div 
                  v-for="item in photoDashboardArray.rightToBigPhoto"
                  :key="item.id"
               >
                  <img 
                     :src="item.src" 
                     :alt="item.alt"
                  >
                  <div class="box_text">
                     <h4>{{ item.title }}</h4>
                     <p>{{ item.text }}</p>
                  </div>
               </div>
            </div>
         </div>


         <!-- down row -->
         <div class="_down  d-flex  mt-4">
            <div 
               v-for="(item,i) in photoDashboardArray.downPhoto"
               :key="item.id"
               :class="{'mx-5': i === 1}"
            >
               <img 
                  :src="item.src" 
                  :alt="item.alt"
               >
               <div class="box_text">
                  <h4>{{ item.title }}</h4>
                  <p>{{ item.text }}</p>
               </div>
            </div>
         </div>

      </div>
   </section>

</template>



<!-- CSS -->
<style lang="scss" scoped>


section{
   margin-top: 150px;
   .box_text{
      display: flex;
      justify-content: space-between;
      margin-top: 10px;
      h4{
      font-size: 21px;
      }
      p{
         font-weight: 500;
         font-size: 20px;
         text-transform: capitalize;
      }
   }
}


</style>