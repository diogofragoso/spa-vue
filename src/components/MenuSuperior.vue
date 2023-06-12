<template>
    <div>
    <nav>
       <!-- <router-link to="/">Home</router-link>  -->
       <router-link id="logo" to="/">Viagem Escolar</router-link>
    <!--
      <router-link to="/about">About</router-link> 
      <router-link to="/brazil">Brazil</router-link> 
      <router-link to="/hawaii"> Hawaii</router-link> 
      <router-link to="/jamaica"> Jamaica</router-link> 
      <router-link to="/panama"> Panama</router-link>  -->
      <!-- <router-link to="/destination"> Destinos</router-link>  -->
      <router-link
        v-for="destination in destinations"
        :key="destination.id"
        :to="{name: 'destination.show', params:{id: destination.id, slug: destination.slug}}"
         >
        {{ destination.name }}
       
      </router-link>

    </nav>

    </div>
</template>


<script>

import sourceData from '../../src/data.json'
export default{
    data(){
        return {
            destinations: sourceData.destinations
        }
    }
}

</script>





<style lang="css">
nav .vue-school-active-link{
color: rgb(198, 238, 243);
border-bottom: 2px solid rgb(133, 220, 247) ;

}


</style>