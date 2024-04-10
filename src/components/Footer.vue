

<!-- Javascript -->
<script>

// componenti
import Footer_about from './partials/Footer_about.vue'
import Footer_contact from './partials/Footer_contact.vue'
import Footer_pages from './partials/Footer_pages.vue'





export default {

  components:{
    Footer_about,
    Footer_contact,
    Footer_pages,


  },

  data(){
    return{

    };
  },
};
</script>



<!-- HTML -->
<template>

  <div class="d-flex  justify-content-center">
    <div class="_box  _container_custom_sm  row  border">

      <Footer_about />

      <Footer_contact />

      <Footer_pages />



      


    </div>
  </div>

</template>



<!-- CSS -->
<style lang="scss" scoped>

@use '../assets/scss/partials/variables' as *;


._box{
  margin: 70px;
}

</style>