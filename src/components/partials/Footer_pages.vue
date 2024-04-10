

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

   <section class="col-3  p-0">
      <div>
        <h4 class="capitalized_">pages</h4>

        <ul class="d-flex  flex-column  flex-wrap  mt-4">
          <li 
            v-for="item in pagesArray"
            :key="item.id"
            class="capitalized_  fs-5  me-5"
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
  max-height: 100px;
  list-style: disc;
}

</style>