<template>
  <div class="relative w-full h-full">
    <div class="w-full flex py-3 absolute inset-x-0 z-50 px-14 bg-white" :class="!fullscreen ? 'top-[100px]' : 'top-[40px]'">
      <!-- <primary-button text="Length" @click="submenu('len')" :active="submenus.len" class="ml-0" /> -->
      <primary-button text="PVC Color" @click="submenu('colors')" :active="submenus.colors" class="ml-0 mr-auto" />
      <primary-button icon="camera" @click="submenu('snapshot')" :active="submenus.snapshot" />
      <primary-button icon="envelope" @click="emailModal = true" :active="emailModal" />
      <primary-button :icon="!fullscreen ? 'expand' : 'compress'" @click="toggleFullscreen" :active="fullscreen" />
    </div>
    <div v-if="submenus.colors" class="scroll-smooth overflow-hidden flex flex-col pt-1 pb-3 absolute inset-x-0 z-50 bg-white colors-container w-[92%] ml-14 animate-top" :class="!fullscreen ? 'animate-top-large' : 'animate-top-small'">
      <div class="fixed flex">
        <div class="rounded-full h-5 w-5 cursor-pointer border-2 mr-2" @click="selectCategory('All')" :class="colorCategory === 'All' && 'border-primary'">
          <img src="/images/shared/colors.png" alt="Colors">
        </div>
        <div v-for="cat in colorCategories" :key="cat.id" class="rounded-full h-5 w-5 cursor-pointer border-2 mr-2" :class="colorCategory === cat.category && 'border-primary'" @click="selectCategory(cat.category)" :style="{ backgroundColor: cat.hex }" />
      </div>
      <div class="relative flex scroll-smooth mt-7">
        <div class="self-center z-50 left-2 text-white transition cursor-pointer fixed min-h-[100px] flex items-center items-start border-2 border-primary bg-primary hover:bg-white hover:text-primary rounded-md" :class="fullscreen ? 'top-22' : 'top-44'" @click="scroller('left')">
          <font-awesome-icon icon="chevron-left" fixed-width size="xl" />
        </div>
        <color-button v-for="col in colors" :key="col.code" :data="col" :hex="col.hex" :margin="col.code !== 9018 ? 'mr-3' : 'mr-0'" :active="col.hex === baseColor" @click="colorChange(col.hex)" />
        <div class="self-center z-50 right-2 text-white transition cursor-pointer fixed min-h-[100px] flex items-center items-start border-2 border-primary bg-primary hover:bg-white hover:text-primary rounded-md" :class="fullscreen ? 'top-22' : 'top-44'" @click="scroller('right')">
          <font-awesome-icon icon="chevron-right" fixed-width size="xl" />
        </div>
      </div>
    </div>
    <div v-if="submenus.snapshot" class="scroll-smooth overflow-hidden min-h-[100px] flex py-3 absolute inset-x-0 z-50 bg-white colors-container w-[89%] ml-14 animate-top" :class="!fullscreen ? 'animate-top-large' : 'animate-top-small'">
      <div class="relative flex scroll-smooth">
        <div class="self-center z-50 left-2 text-white transition cursor-pointer fixed min-h-[100px] flex items-center items-start border-2 border-primary bg-primary hover:bg-white hover:text-primary rounded-md" :class="fullscreen ? 'top-22' : 'top-44'" @click="scroller('left')">
          <font-awesome-icon icon="chevron-left" fixed-width size="xl" />
        </div>
        <snap-span v-for="(snap, index) in snaps" :key="index" :data="snap" :margin="index !== snaps.length ? 'mr-3' : 'mr-0'" @trash="trashSnapshot" @zoom="zoomSnapshot" @download="downloadSnapshot" />

        <div class="self-center z-50 right-12 text-white transition cursor-pointer fixed min-h-[100px] flex items-center items-start border-2 border-primary bg-primary hover:bg-white hover:text-primary rounded-md" :class="fullscreen ? 'top-22' : 'top-44'" @click="takeSnapshot()">
          <font-awesome-icon icon="plus" fixed-width size="xl" />
        </div>
        <div class="self-center z-50 right-2 text-white transition cursor-pointer fixed min-h-[100px] flex items-center items-start border-2 border-primary bg-primary hover:bg-white hover:text-primary rounded-md" :class="fullscreen ? 'top-22' : 'top-44'" @click="scroller('right')">
          <font-awesome-icon icon="chevron-right" fixed-width size="xl" />
        </div>
      </div>
    </div>
    <!-- <div v-if="submenus.len" class="scroll-smooth overflow-hidden flex py-3 absolute inset-x-0 z-50 bg-white colors-container pl-14 mr-auto animate-top" :class="!fullscreen ? 'animate-top-large' : 'animate-top-small'">
      <primary-button v-for="(len, index) in lengths" :key="len" :text="len + ' meters'" @click="dimensionChange(len, 'len')" :active="len === length" :class="index === 0 && 'ml-0'" />
    </div>
    <div v-if="submenus.doors" class="scroll-smooth overflow-hidden flex py-3 absolute left-0 z-50 bg-white/50 max-w-1/3 w-1/3 mr-auto animate-top" :class="!fullscreen ? 'animate-top-large' : 'animate-top-small'">
      <div class="relative flex flex-col scroll-smooth w-full items-start justify-start py-3 pl-14 min-h-[100vh] font-semibold text-sm">
        <p class="mb-5">You have selected {{ buildingSide }} side of the building.</p>
        <p>{{ doorsText }}</p>
        <div class="flex items-center mt-3">
          <primary-button text="Add Main Door" @click="submenu('mainDoors')" class="ml-0" />
          <primary-button text="Add Personnel Door" @click="submenu('personnelDoors')" />
        </div>
        <div class="flex flex-col mt-52">
          <primary-button text="Remove Doors" @click="removeDoors()" class="ml-0" :disabled="doorsNumbers.main[buildingSide] === 0 && doorsNumbers.personnel[buildingSide] === 0" />
          <p v-if="doorsNumbers.main[buildingSide] > 0 || doorsNumbers.personnel[buildingSide] > 0" class="font-semibold text-sm mt-2"><font-awesome-icon icon="warning" fixed-width class="mr-2 text-red-500" />This will remove all doors on the {{ buildingSide }} side.</p>
        </div>
      </div>
    </div> -->
    <div v-if="submenus.mainDoors" class="scroll-smooth overflow-hidden flex py-3 absolute left-0 z-50 bg-white/50 max-w-1/3 w-1/3 mr-auto animate-top" :class="!fullscreen ? 'animate-top-large' : 'animate-top-small'">
      <div class="relative flex flex-col scroll-smooth w-full items-start justify-start py-3 pl-14 min-h-[100vh]">
        <p class="text-sm font-semibold mb-5">Pick a door which you would like to add.</p>
        <div class="flex flex-col items-start">
          <div v-for="(door, index) in mainDoors" :key="index" @click="addDoor(door, 'main')" class="flex flex-col cursor-pointer justify-start items-start mb-4">
            <img :src="'images/doors/' + door + '.jpg'" :alt="door" class="w-auto h-24 object-cover">
            <p class="text-sm font-semibold ml-px mt-2">{{ door }}</p>
          </div>
          <primary-button text="Back" @click="submenu('doors')" class="ml-0 mt-5" />
        </div>
      </div>
    </div>
    <div v-if="submenus.personnelDoors" class="scroll-smooth overflow-hidden flex py-3 absolute left-0 z-50 bg-white/50 max-w-1/3 w-1/3 mr-auto animate-top" :class="!fullscreen ? 'animate-top-large' : 'animate-top-small'">
      <div class="relative flex flex-col scroll-smooth w-full items-start justify-start py-3 pl-14 min-h-[100vh]">
        <p class="text-sm font-semibold mb-5">Pick a door which you would like to add.</p>
        <div class="flex flex-col items-start">
          <div v-for="(door, index) in presonnelDoors" :key="index" @click="addDoor(door, 'personnel')" class="flex flex-col cursor-pointer justify-start items-start mb-4">
            <img :src="'images/doors/Personnel ' + door + '.jpg'" :alt="door" class="w-auto h-44 object-cover">
            <p class="text-sm font-semibold ml-px mt-2">{{ door }}</p>
          </div>
          <primary-button text="Back" @click="submenu('doors')" class="ml-0 mt-5" />
        </div>
      </div>
    </div>
    <canvas class="canvas" />
    <div class="quote-button" :class="fullscreen ? 'bottom-14' : 'bottom-10'" @click="quoteModal = true">
      Get A Quote
    </div>
  </div>

  <modal v-model="emailModal" @confirm="confirmEmail" confirmText="Send" :transition="modalTransition">
    <template v-slot:title>Great!</template>
    <p class="text-sm ml-1">We'll send the configuration to your email.</p>
    <input type="email" v-model="email" placeholder="john@doe.com" class="mt-2 mx-[1px] w-5/6 text-sm px-2 border-2 border-gray-300 hover:border-primary focus:border-primary ring-0 outline-0 focus:outline-0 hover:outline-0 rounded-md transition">
  </modal>

  <modal v-model="imageModal" :transition="modalTransition" :wide="true">
    <img class="object-cover modal-image">
  </modal>

  <modal v-model="quoteModal" @confirm="confirmQuote" confirmText="Send" :transition="modalTransition">
    <template v-slot:title>Brilliant!</template>
    <p class="text-sm ml-1">We'll get back to you soon.</p>
    <label class="relative w-5/6 mt-2 block mx-[1px]">
      <div class="absolute h-5 w-5 p-5 rounded-r-md flex justify-center items-center inset-y-0 right-0 z-50 bg-primary text-white">
        <font-awesome-icon icon="user" fixed-width size="xl" />
      </div>
      <input type="text" v-model="quote.name" placeholder="John Doe" class="text-sm px-2 border-2 w-full border-gray-300 hover:border-primary focus:border-primary ring-0 outline-0 focus:outline-0 hover:outline-0 rounded-md transition">
    </label>
    <label class="relative w-5/6 mt-2 block mx-[1px]">
      <div class="absolute h-5 w-5 p-5 rounded-r-md flex justify-center items-center inset-y-0 right-0 z-50 bg-primary text-white">
        <font-awesome-icon icon="envelope" fixed-width size="xl" />
      </div>
      <input type="email" v-model="quote.email" placeholder="john@doe.com" class="text-sm px-2 border-2 w-full border-gray-300 hover:border-primary focus:border-primary ring-0 outline-0 focus:outline-0 hover:outline-0 rounded-md transition">
    </label>
    <label class="relative w-5/6 mt-2 block mx-[1px]">
      <div class="absolute h-5 w-5 p-5 rounded-r-md flex justify-center items-center inset-y-0 right-0 z-50 bg-primary text-white">
        <font-awesome-icon icon="building" fixed-width size="xl" />
      </div>
      <input type="text" v-model="quote.company" placeholder="Kit building Systems" class="text-sm px-2 border-2 w-full border-gray-300 hover:border-primary focus:border-primary ring-0 outline-0 focus:outline-0 hover:outline-0 rounded-md transition">
    </label>
    <label class="relative w-5/6 mt-2 block mx-[1px]">
      <div class="absolute h-5 w-5 p-5 rounded-r-md flex justify-center items-center inset-y-0 right-0 z-50 bg-primary text-white">
        <font-awesome-icon icon="mobile-alt" fixed-width size="xl" />
      </div>
      <input type="text" v-model="quote.phone" placeholder="020 8617 8606" class="text-sm px-2 border-2 w-full border-gray-300 hover:border-primary focus:border-primary ring-0 outline-0 focus:outline-0 hover:outline-0 rounded-md transition">
    </label>
    <label v-for="extra in extras" :key="extra" class="relative w-5/6 mt-5 flex items-center mx-[1px]">
      <input type="checkbox" v-model="additions" class="mr-3 ml-1">
      <p class="text-sm font-semibold">{{ extra }}</p>
    </label>
  </modal>
</template>

<script>
import { defineComponent } from 'vue'
import * as BABYLON from '@babylonjs/core'
import { GridMaterial } from '@babylonjs/materials/grid'
import { OBJFileLoader } from '@babylonjs/loaders'
import PrimaryButton from '../components/Button.vue'
import ColorButton from '../components/Color.vue'
import SnapSpan from '../components/SnapSpan.vue'
import Modal from '../components/Modal.vue'
import { colors, colorCategories } from '../data/colors'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

export default defineComponent({
  emits: ['colorScroll'],

  components: {
    Modal,
    PrimaryButton,
    SnapSpan,
    ColorButton,
    FontAwesomeIcon,
  },

  props: {
    mainColor: {
      type: String,
      default: '#ffffff',
    },
    lineColor: {
      type: String,
      default: '#eeeeee',
    },
  },

  data() {
    return {
      modalTransition: {
        'enter-active-class': 'transition duration-200 ease-in-out transform',
        'enter-from-class': 'translate-y-full',
        'enter-to-class': 'translate-y-0',
        'leave-active-class': 'transition duration-200 ease-in-out transform',
        'leave-to-class': 'translate-y-full',
        'leave-from-class': 'translate-y-0',
      },
      additions: false,
      emailModal: false,
      quoteModal: false,
      imageModal: false,
      email: '',
      quote: {
        name: '',
        email: '',
        company: '',
        phone: '',
      },
      scene: undefined,
      camera: undefined,
      logoPlane: undefined,
      fullscreen: false,
      buildingMaterial: undefined,
      baseColor: '#a0a5a8',
      widths: [6, 8, 10, 15],
      lengths: [9.2, 11, 15],
      length: 11,
      width: 15,
      height: 12,
      buildingSide: '',
      doorsNumbers: {
        main: { front: 0, back: 0 },
        personnel: { front: 0, back: 0 },
      },
      mainDoors: ['Manual Roll Up PVC Door', 'Sliding Rail Door'],
      presonnelDoors: ['Metal Door', 'PVC Door'],
      extras: ['PE inner fabric to help with condensation'],
      colors: colors,
      colorCategories: colorCategories,
      colorCategory: 'All',
      snaps: [],
      submenus: {
        len: false,
        doors: false,
        mainDoors: false,
        personnelDoors: false,
        snapshot: false,
        colors: false,
      },
      rootMesh: undefined,
      doorMeshes: {
        main: { front: [], back: [] },
        personnel: { front: [], back: [] },
      },
    }
  },

  computed: {
    doorsText() {
      let areIs, mainS, personnelS

      if (this.doorsNumbers.main[this.buildingSide] > 1 || this.doorsNumbers.main[this.buildingSide] === 0) {
        areIs = ' are '
        mainS = 's'
      } else {
        areIs = ' is '
        mainS = ''
      }

      if (this.doorsNumbers.personnel[this.buildingSide] > 1 || this.doorsNumbers.personnel[this.buildingSide] === 0) personnelS = 's'
      else personnelS = ''

      let str = 'There' + areIs + 'currently ' + this.doorsNumbers.main[this.buildingSide].toString() + ' main door' + mainS + ' and ' + this.doorsNumbers.personnel[this.buildingSide].toString() + ' personnel door' + personnelS + ' on this side of the building.'
      return str
    },
  },

  mounted() {
    window.addEventListener('resize', (evt) => {
      if ((document.fullscreenElement && document.fullscreenElement !== null) || (document.webkitFullscreenElement && document.webkitFullscreenElement !== null) || (document.mozFullScreenElement && document.mozFullScreenElement !== null) || (document.msFullscreenElement && document.msFullscreenElement !== null)) this.fullscreen = true
      else this.fullscreen = false
    })

    const canvas = document.getElementsByClassName('canvas')[0]
    canvas.getContext('webgl', { preserveDrawingBuffer: true })
    const engine = new BABYLON.Engine(canvas)

    let scene = new BABYLON.Scene(engine)
    scene.clearColor = new BABYLON.Color3.FromHexString(this.mainColor)

    let camera = new BABYLON.ArcRotateCamera('camera', Math.PI / 2, Math.PI / 2, 2, new BABYLON.Vector3(0 , 0, -10), scene);

    camera.useAutoRotationBehavior = true
    camera.autoRotationBehavior.idleRotationSpinupTime = 0.02
    camera.autoRotationBehavior.idleRotationSpeed = 0.02
    camera.autoRotationBehavior.idleRotationWaitTime = 0.01
    camera.upperBetaLimit = 1.4
    camera.lowerBetaLimit = 0.6
    camera.radius = 3
    camera.alpha = -0.1
    camera.rotationOffset = 0
    camera.heightOffset = 0.5
    camera.maxCameraSpeed = 0.5
    camera.upperRadiusLimit = 4
    camera.lowerRadiusLimit = 2

    camera.attachControl(canvas, true)

    let bottomLight = new BABYLON.HemisphericLight('light', new BABYLON.Vector3(2 -1, 2), scene)
    let upperLight = new BABYLON.HemisphericLight('light', new BABYLON.Vector3(2, 1, 1), scene)
    let backLight = new BABYLON.HemisphericLight('light', new BABYLON.Vector3(-2, 0, -2), scene)
    bottomLight.intensity = 0.5
    upperLight.intensity = 0.5
    backLight.intensity = 0.5

    let gridMaterial = new GridMaterial('grid', scene)
    gridMaterial.mainColor = new BABYLON.Color3.FromHexString(this.mainColor)
    gridMaterial.lineColor = new BABYLON.Color3.FromHexString(this.lineColor)
    gridMaterial.gridRatio = 0.25

    let colorMaterial = new BABYLON.StandardMaterial('color', scene)
    colorMaterial.diffuseColor = new BABYLON.Color3.FromHexString(this.baseColor)
    colorMaterial.specularColor = new BABYLON.Color3.FromHexString(this.baseColor)

    let logoMaterial = new BABYLON.StandardMaterial('logoMaterial', scene)
    logoMaterial.diffuseTexture = logoMaterial.opacityTexture = new BABYLON.Texture('./images/shared/kit-buildings-logo-gray.png', scene)
    logoMaterial.specularColor = new BABYLON.Color3(0, 0, 0)
    logoMaterial.backFaceCulling = false

    let logoPlane = BABYLON.Mesh.CreatePlane('logoPlane', 0.5, scene)
    logoPlane.scaling = new BABYLON.Vector3(1.5, 0.6569, 0.1)
    logoPlane.rotation.x = Math.PI / 2
    logoPlane.rotation.z = Math.PI / 2
    logoPlane.position.y = 0.0011
    logoPlane.position.x = 5 * this.length / 200 + 0.4
    logoPlane.material = logoMaterial

    let building = BABYLON.SceneLoader.ImportMesh('', './models/buildings/container-canopy/', 'container-canopy.gltf', scene, (meshes) => {
      meshes[0].scaling = new BABYLON.Vector3(5 * this.length / 10, 5 * this.height / 10, 5 * this.width / 10)
      meshes[0].position.y = 0
      meshes[3].material = colorMaterial

      this.rootMesh = meshes[0]
      camera.lockedTarget = meshes[0]
      this.buildingMaterial = meshes[3]

      for (var i = 1; i < 3; i++) {
        meshes[i].actionManager = new BABYLON.ActionManager(scene)
        meshes[i].actionManager.registerAction(new BABYLON.ExecuteCodeAction(BABYLON.ActionManager.OnPickTrigger, this.pickBuilding))
      }
    })

    // let mainDoor = BABYLON.SceneLoader.ImportMesh('', './models/doors/manual-roll-up-pvc-door/', 'manual-roll-up-pvc-door.gltf', scene, (meshes) => {
    //   meshes[0].scaling = new BABYLON.Vector3(1, 1.5 * 4, 1.5 * 3.5)
    //   meshes[0].position.y = 0
    //   meshes[0].position.x = 5 * this.length / 200 + 0.0011
    //
    //   meshes[0].addBehavior(new BABYLON.PointerDragBehavior({ dragAxis: new BABYLON.Vector3(0, 0, 1) }))
    //   setTimeout(() => { this.doorMeshes.main.front.push(meshes[0]) }, 300)
    // })

    building.OPTIMIZE_WITH_UV = true
    building.IMPORT_VERTEX_COLORS = true
    building.COMPUTE_NORMALS = true
    building.OPTIMIZE_NORMALS = true

    let ground = BABYLON.MeshBuilder.CreateDisc('ground', { radius: 5 }, scene)
    ground.rotation.x = Math.PI / 2
    ground.material = gridMaterial

    engine.runRenderLoop(() => {
      scene.render()
    })

    this.scene = scene
    this.camera = camera
    this.logoPlane = logoPlane
  },

  methods: {
    pickBuilding(meshEvent) {
      this.camera.useAutoRotationBehavior = false
      let pickedMesh = meshEvent.meshUnderPointer
      this.buildingSide = pickedMesh.name
      if (!this.submenus.doors) this.submenu('doors')
      setTimeout(() => {
        this.camera.useAutoRotationBehavior = true
      }, 1000)
    },
    removeDoors() {
      for (const key in this.doorMeshes) {
        this.doorsNumbers[key][this.buildingSide] = 0
        for (let i = 0; i < this.doorMeshes[key][this.buildingSide].length; i++) {
          this.doorMeshes[key][this.buildingSide][i].dispose()
        }
      }
    },
    positionDoor(mesh) {
      mesh.addBehavior(new BABYLON.PointerDragBehavior({ dragAxis: new BABYLON.Vector3(0, 0, 1) }))
      mesh.scaling = new BABYLON.Vector3(1, 1.5 * 4, 1.5 * 3.5)
      mesh.position.y = 0

      switch (this.buildingSide) {
        case 'front':
          mesh.position.x = 5 * this.length / 200 + 0.0011
          break
        case 'back':
          mesh.position.x = -(5 * this.length / 200 + 0.0011)
          break
      }
    },
    positionPersonnelDoor(mesh) {
      switch (this.buildingSide) {
        case 'front':
          mesh.position.z = 5 * this.width / 300 + 0.0011
          break
        case 'back':
          mesh.position.z = -(5 * this.width / 300 + 0.0011)
          break
      }
    },
    addDoor(door, type) {
      let scene = this.scene
      switch (type) {
        case 'main':
          this.doorsNumbers.main[this.buildingSide] = this.doorsNumbers.main[this.buildingSide] + 1

          switch (door) {
            case 'Manual Roll Up PVC Door':
              BABYLON.SceneLoader.ImportMesh('', './models/doors/manual-roll-up-pvc-door/', 'manual-roll-up-pvc-door.gltf', scene, (meshes) => {
                setTimeout(() => { this.doorMeshes.main[this.buildingSide].push(meshes[0]) }, 300)
                this.positionDoor(meshes[0])
              })
              break
            case 'Sliding Rail Door':
              BABYLON.SceneLoader.ImportMesh('', './models/doors/sliding-rail-door/', 'sliding-rail-door.gltf', scene, (meshes) => {
                setTimeout(() => { this.doorMeshes.main[this.buildingSide].push(meshes[0]) }, 300)
                this.positionDoor(meshes[0])
              })
              break
          }
          break
        case 'personnel':
          this.doorsNumbers.personnel[this.buildingSide] = this.doorsNumbers.personnel[this.buildingSide] + 1

          if (door === 'Metal Door') {
            BABYLON.SceneLoader.ImportMesh('', './models/doors/personnel-metal-door/', 'personnel-metal-door.gltf', scene, (meshes) => {
              setTimeout(() => { this.doorMeshes.personnel[this.buildingSide].push(meshes[0]) }, 300)
              this.positionDoor(meshes[0])
              this.positionPersonnelDoor(meshes[0])
            })
          } else {
            BABYLON.SceneLoader.ImportMesh('', './models/doors/personnel-pvc-door/', 'personnel-pvc-door.gltf', scene, (meshes) => {
              setTimeout(() => { this.doorMeshes.personnel[this.buildingSide].push(meshes[0]) }, 300)
              this.positionDoor(meshes[0])
              this.positionPersonnelDoor(meshes[0])
            })
          }
          break
      }
    },
    toggleFullscreen() {
      const body = document.getElementsByTagName('body')[0]

      if (!this.fullscreen) {
        if (body.requestFullscreen) body.requestFullscreen()
        else if (body.mozRequestFullScreen) body.mozRequestFullScreen()
        else if (body.webkitRequestFullScreen) body.webkitRequestFullScreen()
        else if (body.msRequestFullscreen) body.msRequestFullscreen()
      } else {
        if (document.exitFullscreen) document.exitFullscreen()
        else if (document.webkitExitFullscreen) document.webkitExitFullscreen()
        else if (document.mozCancelFullScreen) document.mozCancelFullScreen()
        else if (document.msExitFullscreen) document.msExitFullscreen()
      }
    },
    submenu(feature) {
      if (this.submenus.len !== this.submenus[feature]) this.submenus.len = false
      if (this.submenus.doors !== this.submenus[feature]) this.submenus.doors = false
      if (this.submenus.mainDoors !== this.submenus[feature]) this.submenus.mainDoors = false
      if (this.submenus.personnelDoors !== this.submenus[feature]) this.submenus.personnelDoors = false
      if (this.submenus.colors !== this.submenus[feature]) this.submenus.colors = false
      if (this.submenus.snapshot !== this.submenus[feature]) this.submenus.snapshot = false

      this.submenus[feature] = !this.submenus[feature]
    },
    colorChange(color) {
      this.baseColor = color

      let colorMaterial = new BABYLON.StandardMaterial('color', this.scene)
      colorMaterial.diffuseColor = new BABYLON.Color3.FromHexString(color)
      colorMaterial.specularColor = new BABYLON.Color3.FromHexString(color)

      this.buildingMaterial.material = colorMaterial
    },
    selectCategory(cat) {
      this.colorCategory = cat

      if (cat === 'All') this.colors = colors
      else {
        this.colors = colors
        this.colors = this.colors.filter((col) => col.category === cat)
      }
    },
    scroller(dir) {
      let col = document.getElementsByClassName('colors-container')[0]

      switch (dir) {
        case 'left':
          if (col.scrollLeft !== 0) col.scrollLeft = col.scrollLeft - 502
          break
        case 'right':
          col.scrollLeft = col.scrollLeft + 502
          break
      }
    },
    confirmEmail() {
      this.emailModal = false
    },
    confirmQuote() {
      this.quoteModal = false
    },
    dimensionChange(val, dir) {
      switch (dir) {
        case 'len':
          this.length = val
          if (this.lengthWarning) this.removeSideDoors('z-axis')
          this.moveDoors('x-axis')
          break
      }

      this.rootMesh.scaling = new BABYLON.Vector3(5 * this.length / 10, 5 * this.height / 10, 5 * this.width / 10)
      this.logoPlane.position.x = 5 * this.length / 200 + 0.4
    },
    moveDoors(axis) {
      switch (axis) {
        case 'x-axis':
          for (const key in this.doorMeshes) {
            for (let i = 0; i < this.doorMeshes[key].front.length; i++) {
              let mesh = this.doorMeshes[key].front[i]
              mesh.position.x = 5 * this.length / 200 + 0.0011
            }
            for (let i = 0; i < this.doorMeshes[key].back.length; i++) {
              let mesh = this.doorMeshes[key].back[i]
              mesh.position.x = -(5 * this.length / 200 + 0.0011)
            }
          }
          break
      }
    },
    removeSideDoors(axis) {
      switch (axis) {
        case 'x-axis':
          for (const key in this.doorMeshes) {
            this.doorsNumbers[key].front = 0
            this.doorsNumbers[key].back = 0
            for (let i = 0; i < this.doorMeshes[key].front.length; i++) this.doorMeshes[key].front[i].dispose()
            for (let i = 0; i < this.doorMeshes[key].back.length; i++) this.doorMeshes[key].back[i].dispose()
          }

          break
      }
    },
    takeSnapshot() {
      let canvas = document.getElementsByClassName('canvas')[0]
      let strDataURI = canvas.toDataURL()
      this.snaps.push(strDataURI)
    },
    trashSnapshot(data) {
      const index = this.snaps.indexOf(data)
      if (index > -1) this.snaps.splice(index, 1)
    },
    zoomSnapshot(data) {
      this.imageModal = true
      let img = document.getElementsByClassName('modal-image')[0]
      img.src = data
    },
    downloadSnapshot(data) {
      let link = document.createElement('a')
      link.download = 'Storage Building'
      link.href = data
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
    },
  },
})
</script>
