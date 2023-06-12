<template>
  <menu-superior/>
  <div class="container">
    <!-- adicionando transição entre as rotas -->
    <router-view v-slot="{Component}">

            <transition name="moveUp">
                <component :is="Component" :key="$route.path"></component>
                <!-- <component :is="Component"></component> -->
            </transition>


    </router-view>

         

    <!-- <router-view :key="$route.path"></router-view> -->
  </div>
</template>


<script>
  import MenuSuperior from './components/MenuSuperior.vue';


  export default {
    components: {
      MenuSuperior,
    }
  }


</script>

<style lang="css">



/*
  Enter and leave animations can use different
  durations and timing functions.
*/
/* .slide-fade-enter-active {
  transition: all 0.5s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(20px);
  opacity: 0;
} */







/* .fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
} */


 
 

.moveUp-enter-active{
  animation: fadeIn 1s ease-in;
}

@keyframes fadeIn {

0% { opacity: 0; }
50% { opacity: 0.5; }
100% { opacity: 1; }

}
.moveUp-leave-active {
  animation: moveUp 0.5s ease-in;
}

@keyframes moveUp {
  0% { transform: translateY(0); }
  100% { transform: translateY(-400px);}
}  








/* .slide-enter-active,
.slide-leave-active{
  transition: opacity 1s, transform 1s;
}

.slide-enter-from,
.slide-leave-to{
  opacity: 0;
  transform: translateX(-30%);
} */

</style>
