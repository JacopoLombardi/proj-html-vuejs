

<!-- Javascript -->
<script>

import {store} from '../.././data/store'

// importo gli oggetti dal file JS dedicato
import {pagesArray} from '../../../public/jsFolder/footer'


export default {

  data(){
    return{
      store,
      pagesArray
    };
  },

  methods:{

  },
};
</script>



<!-- HTML -->
<template>

  <!-- pages -->
   <section class="col-3">
      <div>
        <h5 class="capitalized_  fw-bold">pages</h5>

        <ul class="d-flex  flex-column  flex-wrap  mt-4  ps-4">
          <li 
            v-for="item in pagesArray"
            :key="item.id"
            class="capitalized_  me-5"
          >
            {{ item }}
          </li>
        </ul>

      </div>
   </section>

</template>



<!-- CSS -->
<style lang="scss" scoped>


ul{
  max-height: 130px;
  list-style: disc;
  li{
    font-size: 17px;
    line-height: 200%;
  }
}

</style>