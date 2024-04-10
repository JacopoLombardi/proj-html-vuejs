

<!-- Javascript -->
<script>

import {store} from './data/store'

// import componenti
import Header from './components/Header.vue'
import Main from './components/Main.vue'
import Footer from './components/Footer.vue'


export default {
  components:{
    Header,
    Main,
    Footer
  },

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

  <Header />

  <Main />

  <Footer />

</template>



<!-- CSS -->
<style lang="scss">

@use './assets/scss/main';

</style>