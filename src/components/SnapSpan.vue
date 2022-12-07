<template>
  <div class="rounded-md h-20 w-40 mr-3 relative z-50 border-2 border-gray-300 hover:border-primary cursor-pointer">
    <img :src="data" class="object-contain w-full h-full rounded">
    <div class="flex items-center w-full absolute bottom-1 inset-x-0">
      <primary-button icon="trash" :small="true" @click="$emit('trash', data)" class="mx-1" />
      <primary-button icon="magnifying-glass" :small="true" @click="$emit('zoom', data)" />
      <primary-button icon="download" :small="true" @click="$emit('download', data)" class="ml-auto mr-1" />
    </div>
  </div>
</template>

<script>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import PrimaryButton from './Button.vue'

export default {
  props: {
    data: {
      type: String,
      default: '',
    },
  },

  components: {
    FontAwesomeIcon,
    PrimaryButton
  },
}
</script>
