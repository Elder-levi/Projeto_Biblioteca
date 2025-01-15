import { createRouter,createWebHistory } from "vue-router";
import Livro from "@/components/Livro.vue";
import forms from "@/components/forms.vue";
import Listagaem from "@/components/Listagaem.vue";

let Autetica = false;


const routes = [
  { path:'/',
    component: Livro,
 },
  {
      path:'/Listagem',
      component: Listagaem,
      beforeEnter:(to, from, next)=>{
          if(Autetica){
              next();
              alert('logado com sucesso')
          } else {
              alert('Você precisa fazer login para acessar essa pagina')
              next('/');
          }
      }
  }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export const setAuthentication = (value) =>{
  Autetica = value
}


export default router;