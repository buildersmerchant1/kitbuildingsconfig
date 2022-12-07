<template>
  <vue-final-modal v-slot="{ params, close }" v-bind="$attrs" classes="flex justify-center items-center" :content-class="!wide ? 'w-[350px] modal-content' : 'w-[80%] modal-content'">
    <span class="mr-8 text-sm ml-[1px] font-semibold">
      <slot name="title"></slot>
    </span>
    <div class="flex-grow overflow-y-auto py-7">
      <slot :params="params"></slot>
    </div>
    <div v-if="confirmText !== 'default'" class="flex-shrink-0 flex justify-center items-center mr-auto">
      <primary-button @click="$emit('confirm', close)" :text="confirmText" class="ml-0" />
    </div>
    <div class="absolute top-0 right-0 mt-5 mr-5 text-gray-300 hover:text-primary transition cursor-pointer" @click="close">
      <font-awesome-icon icon="times" fixed-width />
    </div>
  </vue-final-modal>
</template>

<script>
import { VueFinalModal } from 'vue-final-modal'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import PrimaryButton from './Button.vue'

export default {
  props: {
    confirmText: {
      type: String,
      default: 'default'
    },
    wide: {
      type: Boolean,
      default: false
    },
  },

  inheritAttrs: false,

  emits: ['cancel', 'confirm'],

  components: {
    PrimaryButton,
    FontAwesomeIcon,
    VueFinalModal,
  }
}
</script>
