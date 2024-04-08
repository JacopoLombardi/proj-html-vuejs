

<!-- Javascript -->
<script>

// componenti
import Main_jumbotron from './partials/Main_jumbotron.vue'
import Main_photo_dashboard from './partials/Main_photo_dashboard.vue'



export default {
  components:{
    Main_jumbotron,
    Main_photo_dashboard,


  },

  data(){
    return{

    };
  },

  methods:{

  },
};
</script>



<!-- HTML -->
<template>

  <Main_jumbotron />

  <Main_photo_dashboard />


  


</template>



<!-- CSS -->
<style lang="scss" scoped>

@use '../assets/scss/partials/variables' as *;



</style>