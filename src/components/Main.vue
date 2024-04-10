

<!-- Javascript -->
<script>

// componenti
import Main_jumbotron from './partials/Main_jumbotron.vue'
import Main_photo_dashboard from './partials/Main_photo_dashboard.vue'
import Main_limitless from './partials/Main_limitless.vue'
import Main_recent_courses from './partials/Main_recent_courses.vue'
import Main_proud from './partials/Main_proud.vue'
import Main_popular_courses from './partials/Main_popular_courses.vue'
import Main_become from './partials/Main_become.vue'
import Main_come from './partials/Main_come.vue'



export default {
  components:{
    Main_jumbotron,
    Main_photo_dashboard,
    Main_limitless,
    Main_recent_courses,
    Main_proud,
    Main_popular_courses,
    Main_become,
    Main_come
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

  <Main_limitless />
  
  <Main_recent_courses />

  <Main_proud />

  <Main_popular_courses />

  <Main_become />

  <Main_come />

</template>



<!-- CSS -->
<style lang="scss" scoped>

@use '../assets/scss/partials/variables' as *;



</style>