

<!-- Javascript -->
<script>

import {store} from '../.././data/store'

// importo gli oggetti dal file JS dedicato
import {proudArray} from '../../../public/jsFolder/main'


export default {

  data(){
    return{
      store,
      proudArray
    };
  },

  methods:{

  },
};
</script>



<!-- HTML -->
<template>
   
   <!-- proud -->
   <section class="bg_light  d-flex  justify-content-center">
      <div class="_container_custom_sm  d-flex  flex-column  align-items-center">

         <!-- title -->
         <div class="text-center  w-50  mt-5">
            <h2 class="fw-light  fs-1  mb-4">We are Proud</h2>
            <p class="fs-5">Certificate courses are instructed by highly educated and qualified instructors who hold doctoral and master's level degrees.</p>
         </div>

         <!-- data -->
         <div class="d-flex">

            <div
              v-for="(item, i) in proudArray"
              :key="item.id"
              :class="{'border-end': i != proudArray.length -1}"
              class="_data  text-center"
            >
               <p>{{ item.number }}</p>
               <p class="uppercase_">{{ item.type }}</p>
            </div>

         </div>

      </div>
   </section>


   <!-- subscribe -->
   <section class="bg_green  d-flex  justify-content-center  align-items-center  text-white">

      <div class="box_text  me-4  pe-2">
         <h4 class="fw-normal">Subscribe our newsletter</h4>
         <p>There are many variations of passages of Lorem Ipsum avaible, but the majority have suffered alteration in some form, by injected humor, or randomised words</p>
      </div>


      <div>
      <h5 class="uppercase_  mb-3">your e-mail addres</h5>
         <div class="search_  d-flex">
            <input type="email" class="border-0  py-2  ps-3 pe-5" placeholder="Enter your E-mail">
            <button class="btn  btn-primary  rounded-0  uppercase_  fw-semibold  px-3  py-2">subscribe</button>
         </div>
      </div>

   </section>

</template>



<!-- CSS -->
<style lang="scss" scoped>


.bg_light{
   margin-top: 130px;
   height: 600px;
   background-image: url(../../../public/img/we_proud.png);
   background-color: #f0f4fa;
   background-repeat: no-repeat;
   background-position-y: bottom;
   ._data{
      margin-top: 80px;
      padding: 0 100px;
      & p:nth-child(1){
         font-size: 50px;
         font-weight: 300;
      }
      & p:nth-child(2){
         font-size: 16px;
      }
   }
}
.bg_green{
   height: 200px;
   background-color: #4ed7a8;
   .box_text{
      width: 35%;
   }
   h5{
      font-size: 15px;
   }
}


</style>