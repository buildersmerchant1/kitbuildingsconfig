<template>
  <div class="relative">
    <div class="grid grid-cols-5 gap-5 px-12 pt-44 justify-center">
      <card name="Storage Building" image="pvc-storage-building-single-truss" link="/storage-building" />
      <card name="Round Storage" image="round-pvc-storage-building" link="/round-storage-building" />
      <card name="Aircraft Hangar" image="aircraft-hangar" link="/aircraft-hangar" />
      <card name="Container Canopy" image="container-canopy" link="/container-canopy" />
      <card name="Enclosed Livestock" image="enclosed-livestock-shelter-pvc" link="/enclosed-livestock" />
      <card name="Open Livestock" image="open-livestock-shelter" />
      <card name="Lorry Shelter" image="lorry-shelter" link="lorry-shelter" />
      <card name="Vehicle Canopy" image="vehicle-canopy" link="/vehicle-canopy" />
      <card name="Metal Field Shelter" image="metal-field-shelter" />
      <card name="Steel Building" image="steel-buildings" link="/template" />
    </div>
    <footer class="fixed inset-x-0 w-full bottom-0 bg-primary text-white flex items-center justify-center text-sm h-[60px]">Buildings Configurator © 2022 Kit Buildings</footer>
  </div>
</template>

<script>
import { defineComponent } from 'vue'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import Card from '../components/Card.vue'

export default defineComponent({
  components: {
    FontAwesomeIcon,
    Card,
  },
})
</script>
