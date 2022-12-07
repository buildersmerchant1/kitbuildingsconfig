import { createRouter, createWebHistory } from 'vue-router'

export default createRouter({
  // history: createWebHistory(),
  history: createWebHistory('/buildings/'),
  routes: [
    {
      path: '/',
      component: () => import('./views/Home.vue'),
    },
    {
      path: '/homepage',
      beforeEnter() { location.href = 'https://www.kitbuildings.com/' }
    },
    {
      path: '/buildings',
      beforeEnter() { location.href = '/buildings' }
    },
    {
      path: '/template',
      component: () => import('./views/Template.vue'),
    },
    {
      path: '/storage-building',
      component: () => import('./views/StorageBuilding.vue'),
    },
    {
      path: '/round-storage-building',
      component: () => import('./views/RoundStorageBuilding.vue'),
    },
    {
      path: '/aircraft-hangar',
      component: () => import('./views/AircraftHangar.vue'),
    },
    {
      path: '/container-canopy',
      component: () => import('./views/ContainerCanopy.vue'),
    },
    {
      path: '/enclosed-livestock',
      component: () => import('./views/EnclosedLivestock.vue'),
    },
    {
      path: '/open-livestock',
      component: () => import('./views/Template.vue'),
    },
    {
      path: '/lorry-shelter',
      component: () => import('./views/LorryShelter.vue'),
    },
    {
      path: '/vehicle-canopy',
      component: () => import('./views/VehicleCanopy.vue'),
    },
    {
      path: '/metal-field-shelter',
      component: () => import('./views/Template.vue'),
    },
    {
      path: '/steel-building',
      component: () => import('./views/Template.vue'),
    },
    {
      path: '/about-us',
      beforeEnter() { location.href = 'https://www.kitbuildings.com/about-us/' }
    },
    {
      path: '/service-installation',
      beforeEnter() { location.href = 'https://www.kitbuildings.com/service-installation/' }
    },
    {
      path: '/our-buildings',
      beforeEnter() { location.href = 'https://www.kitbuildings.com/our-buildings/' }
    },
    {
      path: '/resource-centre',
      beforeEnter() { location.href = 'https://www.kitbuildings.com/resource-centre/' }
    },
    {
      path: '/contact-us',
      beforeEnter() { location.href = 'https://www.kitbuildings.com/contact-us/' }
    }
  ],
})
