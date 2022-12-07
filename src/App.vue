<template>
<div class="flex flex-col items-start justify-start h-screen w-screen relative overflow-hidden">
  <img src="/images/shared/construction-site.jpg" alt="Background" class="absolute inset-0 object-cover w-full h-full">
  <div v-if="!fullscreen" class="w-full fixed inset-0 z-50 h-[100px]">
    <nav class="flex items-center justify-center w-full h-[100px] bg-primary text-white px-14">
      <router-link to="/homepage" class="flex items-center mr-auto">
        <img src="/images/shared/kit-buildings-logo.png" alt="Kit Buildings Logo" class="w-[150px]">
      </router-link>
      <router-link to="/homepage" class="flex items-center text-sm font-semibold mr-3">
        <p class="ml-3">Home</p>
      </router-link>
      <router-link to="/buildings" class="flex items-center text-sm font-semibold mr-3">
        <p class="ml-3">Building Configurator</p>
      </router-link>
      <router-link to="/about-us" class="flex items-center text-sm font-semibold mr-3">
        <p class="ml-3">About Us</p>
      </router-link>
      <router-link to="/service-installation" class="flex items-center text-sm font-semibold mr-3">
        <p class="ml-3">Service &amp; Installation</p>
      </router-link>
      <router-link to="/our-buildings" class="flex items-center text-sm font-semibold mr-3">
        <p class="ml-3">Our Buildings</p>
      </router-link>
      <router-link to="/resource-centre" class="flex items-center text-sm font-semibold mr-3">
        <p class="ml-3">Resource Centre</p>
      </router-link>
      <router-link to="/contact-us" class="flex items-center text-sm font-semibold">
        <p class="ml-3">Contact Us</p>
      </router-link>
      <a href="tel:02086178606" class="font-bold rounded-md flex items-center px-5 py-3 border-2 border-white ml-auto bg-transparent hover:bg-white hover:text-primary transition">
        <font-awesome-icon icon="phone" class="rotate-[270deg]" />
        <p class="ml-2">020 8617 8606</p>
      </a>
    </nav>
  </div>
  <router-view />
</div>
</template>

<script>
import { defineComponent } from 'vue'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

export default defineComponent({
  components: {
    FontAwesomeIcon,
  },

  data() {
    return {
      fullscreen: false,
    }
  },

  mounted() {
    window.addEventListener('resize', (evt) => {
      if ((document.fullscreenElement && document.fullscreenElement !== null) || (document.webkitFullscreenElement && document.webkitFullscreenElement !== null) || (document.mozFullScreenElement && document.mozFullScreenElement !== null) || (document.msFullscreenElement && document.msFullscreenElement !== null)) this.fullscreen = true
      else this.fullscreen = false
    })
  },
})
</script>
