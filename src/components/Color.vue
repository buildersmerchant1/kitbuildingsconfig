<template>
  <div class="flex flex-col h-auto items-center align-center justify-center cursor-pointer z-40" :class="margin" @mouseover="over = true" @mouseleave="over = false">
    <div class="w-36 h-14 flex items-center justify-center border-2 rounded-md transition" :style="'background-color: ' + hex" :class="over || active ? 'border-primary' : 'border-gray-300'" @mouseover="over = true" @mouseleave="over = false" />
    <div class="w-36 flex items-center justify-center pt-1 text-xs font-semibold transition" :class="over || active ? 'text-primary' : 'text-gray-300'" @mouseover="over = true" @mouseleave="over = false">
      {{ data.name }}
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    data: {
      type: Object,
      default: {},
    },
    hex: {
      type: String,
      default: '',
    },
    margin: {
      type: String,
      default: 'm-0',
    },
    active: {
      type: Boolean,
      dafault: false,
    },
  },

  data() {
    return {
      over: false,
    }
  },
})
</script>
