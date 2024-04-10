

<!-- Javascript -->
<script>

import {store} from '../.././data/store'

// importo gli oggetti dal file JS dedicato
import {aboutArray} from '../../../public/jsFolder/footer'


export default {

  data(){
    return{
      store,
      aboutArray
    };
  },

  methods:{

  },
};
</script>



<!-- HTML -->
<template>

   <section class="col-3  me-3  p-0">
     <div
         v-for="item in aboutArray.dataText"
         :key="item.id"
      >
         <h4 class="capitalized_">{{ item.title }}</h4>
         <p class="mt-4"><span>{{ item.mainText.blueWord }}</span> {{ item.mainText.text }}</p>
         <p>{{ item.secondaryText.text }} <span>{{ item.secondaryText.blueWord }}</span>.</p>

         <ul class="d-flex  mt-4  p-0">
            <li 
               v-for="item in aboutArray.iconSocial"
               :key="item.id"
               v-html="item"
               class="me-4"
            >
            </li>
         </ul>

      </div>
   </section>

</template>



<!-- CSS -->
<style lang="scss" scoped>


span{
   color: rgb(0, 123, 255);
}


</style>