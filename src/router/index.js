import { createRouter, createWebHistory } from 'vue-router'
import PokemonList from '@/components/PokemonList.vue'

import PokemonView from '@/components/PokemonView.vue'

const routes = [
  {
    path: '/',
    name: 'pokemon-list',
    component: PokemonList
  },
  {
    path: '/view/:id',
    name: 'pokemon-view',
    component: PokemonView
  },

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

