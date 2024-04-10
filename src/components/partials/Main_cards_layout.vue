

<!-- Javascript -->
<script>

import {store} from '../.././data/store'


export default {

   props:{
      cards: Object
   },

  data(){
    return{
      store,
      
    };
  },

  methods:{

   starsVote(){
      return '../../../public/img/starfull.svg'
   }
  },
};
</script>



<!-- HTML -->
<template>

   <!-- layout card -->
   <li class="card  bg-light  border  col-2  mx-2  p-0  mb-5">
      <img
        :src="('../../../public/img/' + cards.src)"
        alt=""
        class="card-img-top"
      >
      <div class="card-body">
         <p class="_type  text_grey  capitalized_">{{ cards.type }} ></p>
         <p class="_title  fw-semibold  fs-5  my-3  pb-3">{{ cards.text }}</p>

         <div class="d-flex  justify-content-between">
            <div class="clock_box_Or_Stars  d-flex ">

               <!-- hours of courses -->
               <div
                  v-if="cards.timeOrStars.iconClock"
                  class="d-flex"
               >
                  <p 
                     v-html="cards.timeOrStars.iconClock"
                     class="text_light_grey  me-1"
                  >
                  </p>

                  <p 
                     class="text_light_grey  me-1"
                  >
                     {{ cards.timeOrStars.courseLength }}
                  </p>
               </div>
               
               <!-- stars -->
               <div
                  v-else
                  class="d-flex  align-items-center"
               > 
                  <img
                     v-for="item in 5"
                     :key="item.id"
                     :src="starsVote()"
                     class="_star"
                  >
                  <p class="ms-1">5</p>
               </div>
            </div>

            <!-- price -->
            <div>
               <p
                  v-if="cards.priceAndDiscount.discount"
                  class="text_light_grey  line_through  fw-semibold"
               >
                  ${{ cards.priceAndDiscount.discount }}
               </p>

               <p
                 v-if="cards.priceAndDiscount.price"
                 class="fs-5  fw-semibold"
               >
                  {{ cards.priceAndDiscount.price === 'Free' ? cards.priceAndDiscount.price : '$' + cards.priceAndDiscount.price }}
               </p>
            </div>
         </div>

      </div>
   </li>  
   
</template>



<!-- CSS -->
<style lang="scss" scoped>


.card{
   max-width: 270px;
   .card-body{
      ._type{
         font-size: 14px;
      }
   }
   .card-body{
      ._title{
         border-bottom: 1px solid rgb(214, 214, 214);
      }
      ._star{
         width: 20px;
      }
   }
}



</style>