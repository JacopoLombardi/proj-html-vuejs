

<!-- Javascript -->
<script>

import {store} from '../.././data/store'

// importo i componenti
import Main_cards_layout from './Main_cards_layout.vue'

// importo gli oggetti dal file JS dedicato
import {recentCoursesArray} from '../../../public/jsFolder/main'


export default {

  components:{
    Main_cards_layout
  },

  data(){
    return{
      store,
      recentCoursesArray
    };
  },

  methods:{

  },
};
</script>



<!-- HTML -->
<template>
  
  <section>

    <!-- titolo e menu -->
    <div class="bg-light  d-flex  flex-column  align-items-center">
      <h2 class="fw-normal  fs-1  mb-5">Recent courses</h2>

      <ul class="box_title  d-flex">
        <li
          v-for="item in recentCoursesArray.menu"
          :key="item.id"
          class="blue_  capitalized_  fw-semibold  cursor_pointer  rounded-5  px-4  py-2  mx-4"
        >
            {{ item }}
        </li>
      </ul>

    </div>




    <!-- cards wrapper -->
    <div>



      <Main_cards_layout 
        v-for="item in recentCoursesArray"
        :key="item.id"
        :recentCoursesArray="item"
      />



    </div>



  </section>

</template>



<!-- CSS -->
<style lang="scss" scoped>


section{
  margin-top: 130px;
   height: 800px;
   .box_title{
    & li:hover{
      transition: all 0.6s ease;
      background-color: rgb(228, 228, 228);
      color: rgb(150, 150, 150);
    }
   }
}


</style>