<template>
  <div v-if="icon !== 'default' && !small" class="w-max flex items-center justify-center py-2 px-3 bg-primary text-white text-sm font-semibold cursor-pointer border-2 border-primary rounded-md hover:bg-white hover:text-primary transition ml-3" :class="active && ' bg-white text-primary'">
    <font-awesome-icon :icon="icon" fixed-width size="2x" />
  </div>
  <font-awesome-icon v-else-if="icon !== 'default' && small" :icon="icon" fixed-width class="text-primary cursor-pointer hover:bg-white" />
  <button v-else class="w-max flex items-center justify-center py-2 px-3 bg-primary text-white text-sm font-semibold cursor-pointer border-2 border-primary rounded-md hover:bg-white hover:text-primary transition ml-3" :class="active && ' bg-white text-primary'" :disabled="disabled">
    {{ text }}
  </button>
</template>

<script>
import { defineComponent } from 'vue'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

export default defineComponent({
  components: {
    FontAwesomeIcon,
  },

  props: {
    text: {
      type: String,
      default: '',
    },
    icon: {
      type: String,
      default: 'default',
    },
    active: {
      type: Boolean,
      default: false,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    small: {
      type: Boolean,
      default: false,
    },
  },
})
</script>
