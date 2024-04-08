

<!-- Javascript -->
<script>

// importo gli oggetti dal file JS dedicato
import {optionArray, socialArray} from '../../public/jsFolder/header'

export default {

  data(){
    return{
      optionArray,
      socialArray,
    };
  },

  methods:{

  },
};
</script>



<!-- HTML -->
<template>

  <!-- first row -->
  <section class="language_and_social  d-flex  justify-content-between  align-items-center">

    <!-- language -->
    <div>
      <select class="border-0  fw-semibold">
        <option selected>English</option>
        <option value="1">Italian</option>
        <option value="2">Spanish</option>
        <option value="3">German</option>
      </select>
    </div>


    <div class="d-flex">

      <!-- option -->
      <div class="d-flex  fs-5  fw-semibold  me-5">
        <p
          v-for="item in optionArray"
          :key="item.id"
          class="mx-3  my-0">
          {{ item.name }}
        </p>
      </div>


      <!-- social -->
      <div class="d-flex">
        <p
          v-for="item in socialArray"
          :key="item.id"
          v-html="item"
          class="_social_icon  fs-5  mx-2  my-0">
          
        </p>
      </div>

    </div>

  </section>



  <!-- secondo row -->
  <section>




  </section>

</template>



<!-- CSS -->
<style lang="scss" scoped>

@use '../assets/scss/partials/variables' as *;


.language_and_social{
  height: 50px;
}






</style>