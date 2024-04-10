

<!-- Javascript -->
<script>

import {store} from '../.././data/store'

// importo i componenti
import Main_cards_layout from './Main_cards_layout.vue'

// importo gli oggetti dal file JS dedicato
import {recentCoursesArray} from '../../../public/jsFolder/main'


export default {

   components:{
      Main_cards_layout
   },

  data(){
    return{
      store,
      recentCoursesArray
    };
  },

  methods:{

  },
};
</script>



<!-- HTML -->
<template>

   <!-- popular courses -->
   <section>
      <div class="d-flex  flex-column  align-items-center">

         <!-- title -->
         <div class="text-center  w-25">
            <h2 class="fw-light  fs-1  mb-4">Popular courses</h2>
            <p class="fs-5">Discover our most popular courses for self learning</p>
         </div>

         <!-- cards wrapper -->
         <div class="d-flex  justify-content-center  mt-5">
            <div class="container-fluid">
               <div class="d-flex  row  flex-nowrap  justify-content-center">

                  <Main_cards_layout 
                     v-for="(item, i) in recentCoursesArray.cards"
                     :key="item.id"
                     :cards="item"
                     :class="{'d-none': i > 5}"
                  />

               </div>

               <!-- button next/prev -->
               <div class="box_btn  d-flex  justify-content-center  mb-5">
                  <button class="btn  "><i class="fa-solid  fa-chevron-left  p-2"></i></button>
                  <button class="btn  "><i class="fa-solid  fa-chevron-right  p-2"></i></button>
               </div>
               
            </div>
         </div>

      </div>
   </section>

</template>



<!-- CSS -->
<style lang="scss" scoped>


section{
   margin-top: 0;
   padding-top: 120px;
   background-color: #f0f4fa;
   button{
      border: 1px solid rgb(196, 196, 196);
      &:hover{
         transition: all 0.5s ease;
         background-color: rgb(234, 234, 234);
         border: 1px solid rgba(144, 144, 144, 0.627);
      }
      i{
         color: rgb(196, 196, 196);
      }
   }
}


</style>