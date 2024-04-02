<template>
    <div class="">
      
      <div class="columns">
        
        <sideMenu></sideMenu>
        <div class="column">
         <studenstList></studenstList>
        </div>
      </div>

    
    </div>
</template>
  
<script>
import sideMenu from '@/components/admin/side-menu.vue';
import studenstList from '@/components/admin/students-list.vue'
 
  export default {
    name: 'BarChart',
   components: { 
    sideMenu,
    studenstList
   },
    data() {
      return {

      }
    }
  }
  </script>