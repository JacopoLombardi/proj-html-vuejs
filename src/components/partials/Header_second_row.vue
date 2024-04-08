

<!-- Javascript -->
<script>

import {store} from '../.././data/store'

// importo gli oggetti dal file JS dedicato
// import {} from '../../../public/jsFolder/header'

export default {

  data(){
    return{
      store,
    };
  },

  methods:{

  },
};
</script>



<!-- HTML -->
<template>

  <!-- second row -->
   <section class="d-flex  align-items-center  justify-content-between  mt-4">

      <!-- logo -->
      <div>
         <img src="../../../public/img/MasterStudy_logo.svg" alt="">
      </div>

      <!-- input -->
      <div class="input_  d-flex  align-items-center">
         <div class="category_  d-flex  align-items-center">
            <i class="fa-solid  fa-bars  me-1"></i>
            <p class="fw-semibold  uppercase_  me-3">category</p>
         </div>

         <div class="search_  d-flex">
            <input type="text" class="" placeholder="Search courses">
            <p class="bg-primary"><i class="fa-solid  fa-magnifying-glass  text-white  p-2"></i></p>
         </div>
      </div>

      <!-- become -->
      <div class="d-flex">
         <div class="d-flex  me-4">
            <p><i class="fa-solid  fa-bullhorn  blue_  me-2"></i></p>
            <p class="capitalized_">become an instructor</p>
         </div>

         <div class="d-flex">
            <p><i class="fa-solid  fa-briefcase  blue_  me-2"></i></p>
            <p class="capitalized_">for enterprise</p>
         </div>
      </div>

      <!-- sign up -->
      <div class="d-flex  align-items-center">
         <div class="d-flex">
            <p><i class="fa-regular  fa-user  blue_  me-1"></i></p>
            <p class="blue_">Log in</p>
         </div>

         <button class="btn  btn-primary  uppercase_  rounded-5  fw-semibold  mx-4  py-3  px-5">sign up</button>

         <p><i class="fa-regular  fa-bookmark  blue_  fs-5"></i></p>
      </div>

   </section>

</template>



<!-- CSS -->
<style lang="scss" scoped>

.category_{
  p{
    font-size: 13px;
  }
}

</style>