<!-- Rotas dinamicas -->
<template>
    <!-- Para a transição funcionar add uma div aqui com a classe css -->
<div>
   
    <!-- existem um delay ao consumir a api, naquele fraçao de segundo destination é null entao verificamos
            se destination é true ou seja se já foi carregado -->
    <section v-if="destination" class="destination">

        <!-- <h2>Meus Destinos{{ $route.params.id }}</h2> -->
        <GoBack></GoBack>
        <h1>{{ destination.name }}</h1>

        <div class="destination-details">
            <img :src="`/images/${destination.image}`" :alt="destination.name">
            <p>{{ destination.description }}</p>

        </div>


    </section>

    <section class="experiences">
        <h2>Melhor Experiência - {{ destination.name }}</h2>

        <div class="cards">
            <router-link
                    v-for="experience in destination.experiences" 
                    :key="experience.slug"
                    :to="{name: 'experience.show', params:{experienceSlug: experience.slug} }"
                
            >

                <ExperienceCard                    
                    :experience="experience"

            />
         


            </router-link>     
                    
         </div>
         <!-- Ao clicar na experiencia o conteúdo é carregado em uma nova página
        podemos carregar dentro da própria página add um router-view -->
        <router-view />

    </section>
</div>
</template>

<script>

// import sourceData from "../../src/data.json"
import sourceData from "@/data.json"
import ExperienceCard from "@/components/ExperienceCard.vue";
import GoBack from "@/components/GoBack.vue";



export default {

    components: {
    ExperienceCard,
    GoBack,
},
    // exemplo de uso de propriedade nas rotas
    props: {
        id: { type: Number, required: true, },        

    },


    // como usamos props  podemos subistituir o destinationId
    computed: {
        // destinationId(){
        //     return parseInt(this.$route.params.id)
        // },


        //função pode ser substituida pelo uso da API
        destination() {
            // return sourceData.destinations.find(destination => destination.id === this.destinationId)
            return sourceData.destinations.find(
                (destination) => destination.id === this.id
            );
        },

        // destination(){
        //     return sourceData.destinations.find(
        //         (destination) => destinationId == this.destinationId
        //     )
        // },

    }
}






</script>



<!-- <ExperienceCard 
v-for="experience in destination.experiences" 
:key="experience.slug"
:experience="experience"

/> -->
