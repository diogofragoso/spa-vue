
<!-- :to="destination.name" alternativa da linha 12-->
<!-- :to="{name: 'destination.show', params:{id: destination.id}}"  -->
<template>
  
    <div class="home">
      <h1>Todos os destinos</h1>
      <div class="destinations">

        <router-link
        v-for="destination in destinations"
        :key="destination.id"
        :to="{name: 'destination.show', params:{id: destination.id, slug: destination.slug}}"
         >

        <h2>{{ destination.name }}</h2>
        <img :src="`/images/${destination.image}`" :alt="destination.name">
      </router-link>
      </div>

    
    </div>
  

</template>

<script>
// @ is an alias to /src

import sourceData from "@/data.json"

export default {
  data(){
    return {
      destinations: sourceData.destinations
    }
  },



}
</script>
