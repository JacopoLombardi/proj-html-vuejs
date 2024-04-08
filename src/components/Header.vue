

<!-- Javascript -->
<script>

import Header_first_row from './partials/Header_first_row.vue'
import Header_second_row from './partials/Header_second_row.vue'

export default {
  components:{
    Header_first_row,
    Header_second_row
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

  <div class="container-fluid  d-flex  flex-column  align-items-center  p-0">

    <div class="container-fluid  border-bottom">
      <Header_first_row />
    </div>


    <div class="_container_custom">
      <Header_second_row />
    </div>

  </div>

</template>



<!-- CSS -->
<style lang="scss" scoped>

@use '../assets/scss/partials/variables' as *;



</style>