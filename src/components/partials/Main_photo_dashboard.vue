

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
  
   <section class="d-flex  justify-content-center  mb-5">
      <div class="_container_custom_sm  _container_photo">

         <!-- upper row -->
         <div class="_upper  d-flex">
            <div class="big_photo">
               <img src="../../../public/img/cat_1-1540x750.jpg" alt="">
               <div class="d-flex  justify-content-between  mt-2">
                  <p>software development</p>
                  <p>5 courses</p>
               </div>
            </div>

            <div class="right_to_big_photo  d-flex  flex-column  justify-content-between">
               <div>
                  <img src="../../../public/img/cat_2-740x310.jpg" alt="">
                  <div class="d-flex  justify-content-between  mt-2">
                     <p>art</p>
                     <p>8 courses</p>
                  </div>
               </div>

               <div>
                  <img src="../../../public/img/cat_3-740x310.jpg" alt="">
                  <div class="d-flex  justify-content-between  mt-2">
                     <p>material design</p>
                     <p>5 courses</p>
                  </div>
               </div>
            </div>
         </div>


         <!-- down row -->
         <div class="_down  d-flex  mt-4">
            <div>
               <img src="../../../public/img/cat_4-740x310.jpg" alt="">
               <div class="d-flex  justify-content-between  mt-2">
                  <p>music</p>
                  <p>5 courses</p>
               </div>
            </div>

            <div class="mx-5">
               <img src="../../../public/img/cat_5-740x310.jpg" alt="">
               <div class="d-flex  justify-content-between  mt-2">
                  <p>exercise</p>
                  <p>7 courses</p>
               </div>
            </div>

            <div>
               <img src="../../../public/img/cat_6-740x310.jpg" alt="">
               <div class="d-flex  justify-content-between  mt-2">
                  <p>photography</p>
                  <p>4 courses</p>
               </div>
            </div>
         </div>

      </div>

   </section>

</template>



<!-- CSS -->
<style lang="scss" scoped>


p{
   font-weight: 500;
   font-size: 20px;
   text-transform: capitalize;
}

section{
   margin-top: 150px;
   .big_photo{
      padding: 0 40px 0 0;
   }
}


</style>