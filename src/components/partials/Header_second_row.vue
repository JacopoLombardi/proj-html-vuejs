

<!-- Javascript -->
<script>

import {store} from '../.././data/store'

// importo gli oggetti dal file JS dedicato
import {logoArray, becomeArray} from '../../../public/jsFolder/header'

export default {

  data(){
    return{
      store,
      logoArray,
      becomeArray
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
      <div
         v-for="item in logoArray"
         :key="item.id"
      >
         <img 
            :src="item.src" 
            :alt="item.alt"
            class="cursor_pointer"
            >
      </div>

      <!-- input -->
      <div class="input_  d-flex  align-items-center">
         <div class="category_  d-flex  align-items-center">
            <i class="fa-solid  fa-bars  me-1"></i>
            <p class="fw-semibold  uppercase_  me-3">category</p>
         </div>

         <div class="search_  d-flex">
            <input type="text" class="border-0  py-2  ps-3 pe-5" placeholder="Search courses">
            <button class="btn  btn-primary  rounded-0"> <i class="fa-solid  fa-magnifying-glass  fs-5  py-1  px-2  mt-1  h-100"></i> </button>
         </div>
      </div>

      <!-- become -->
      <div class="d-flex">
         <div 
            v-for="(item, i) in becomeArray"
            :key="i"
            :class="{'me-4': i === 0}"
            class="d-flex"
         >
            <p>
               <i
                 :class="item.icon"
                 class="fa-solid  blue_  me-2">
               </i>
            </p>
            <p class="capitalized_">{{ item.text }}</p>
         </div>
      </div>

      <!-- sign up -->
      <div class="d-flex  align-items-center">
         <div class="d-flex  cursor_pointer">
            <p> <i class="fa-regular  fa-user  blue_  me-1"></i> </p>
            <p class="blue_">Log in</p>
         </div>

         <button class="btn  btn-primary  uppercase_  rounded-5  fw-semibold  mx-4  py-3  px-5">sign up</button>
         <p> <i class="fa-regular  fa-bookmark  blue_  cursor_pointer  fs-5"></i> </p>
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
.search_{
   input{
      background-color: rgb(239, 239, 239);
   }
}

</style>