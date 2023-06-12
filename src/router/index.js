import { createRouter, createWebHistory } from "vue-router";
// import HomeView from "../views/HomeView.vue";
// import Brazil from "../views/BrazilPais.vue";
// import Hawai from "../views/HawaiPais.vue";
// import Jamaica from "@/views/JamaicaPais.vue";
// import Panama from "@/views/PanamaPais.vue";




const routes = [
  {
    path: "/",
    name: "home",
    component: () => import("@/views/HomeView.vue") ,
  },
 
    //exemplo de rota dinamica -- lazy loading
  {
    path: "/brazil",
    name: "brazil",
    // Esta forma é mais eficiente
    component: () => import("@/views/BrazilPais.vue") ,
  },
  {
    path: "/hawaii",
    name: "Hawaii",
    component: () => import("@/views/HawaiPais.vue"),
  },
  {
    path: "/jamaica",
    name: "jamaica",
    component: () => import("@/views/JamaicaPais.vue"),
  },
  {
    path: "/panama",
    name: "panama",
    component: () => import("@/views/PanamaPais.vue"),
  },
  {
    // path: "/vue-school-traveler/:id",
    path: "/destination/:id/:slug/",
    name: "destination.show",
    component: () => import("./../views/DestinationShow.vue"),
    props: route=> ({...route.params, id: parseInt(route.params.id)}),
    // criando um children property para exibir o conteúdo da experiencia na mesma página que destination
    //na página destination foi criado um router-view para corresponder
    children:[
      {
        // path: '/destionation/:id/:slug/:experienceSlug',
        // O Path foi mudado aqui com : na rota
        path: ':experienceSlug',
        name: 'experience.show',
        component: () => import("@/views/ExperienceShow.vue"),
        props: route=> ({...route.params, id: parseInt(route.params.id)})
      }

    ]
       
  },

 




];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  linkActiveClass: 'vue-school-active-link'
});

export default router;
