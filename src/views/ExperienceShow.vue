<template>
    <section>
        <h1>{{ experience.name }}</h1>
        <!-- <img :src="`/images/brazil.jpg}`" :alt="experience.name"> -->       
        <img :src="`/images/${experience.image}`" :alt="experience.name">
        <p>{{ experience.description }}</p>
    </section>
</template>


<script>

    import sourceData from '@/data.json'

    export default {
        props: {
            id: {type: Number, required: true, },
            experienceSlug: {type: String, required: true,},

        },

        computed:{
            destination(){
              
                return sourceData.destinations.find(
                    destination => destination.id === this.id
                )

            },


            experience(){
                return this.destination.experiences.find(
                    experience => experience.slug === this.experienceSlug
                )
                    
              




                // return sourceData.destinations.find(
                // (experience) => experience.slug === this.experienceSlug
                // )

            //     return this.destination.experience.find(
            //         experience=> experience.slug === this.experienceSlug
            //     )
             }
        }


    }

</script>