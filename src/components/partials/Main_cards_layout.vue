

<!-- Javascript -->
<script>

import {store} from '../.././data/store'


export default {

   props:{
      recentCoursesArray: Object
   },

  data(){
    return{
      store,
      
    };
  },

  methods:{

  },

  mounted(){
   console.log(this.recentCoursesArray)
  }
};
</script>



<!-- HTML -->
<template>
  
  

</template>



<!-- CSS -->
<style lang="scss" scoped>




</style>