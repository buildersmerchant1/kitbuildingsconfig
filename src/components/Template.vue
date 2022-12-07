<template>
  <canvas class="canvas relative" />
</template>

<script>
import { defineComponent } from 'vue'
import * as BABYLON from '@babylonjs/core'
import { GridMaterial } from '@babylonjs/materials/grid'
import { OBJFileLoader } from '@babylonjs/loaders'

export default defineComponent({
  props: {
    mainColor: {
      type: String,
      default: '#ffffff',
    },
    lineColor: {
      type: String,
      default: '#eeeeee',
    }
  },

  mounted() {
    const canvas = document.getElementsByClassName('canvas')[0]
    const engine = new BABYLON.Engine(canvas)

    let scene = new BABYLON.Scene(engine)
    scene.clearColor = new BABYLON.Color3.FromHexString(this.mainColor)

    let camera = new BABYLON.ArcRotateCamera('camera', Math.PI / 2, Math.PI / 2, 2, new BABYLON.Vector3(0 , 0, -10), scene);

    camera.useAutoRotationBehavior = true
    camera.autoRotationBehavior.idleRotationSpinupTime = 0.02
    camera.autoRotationBehavior.idleRotationSpeed = 0.02
    camera.autoRotationBehavior.idleRotationWaitTime = 0.01
    camera.upperBetaLimit = 1.5
    camera.lowerBetaLimit = 1.4
    camera.upperAlphaLimit = 1.8
    camera.lowerAlphaLimit = 1.2
    camera.radius = 21
    camera.rotationOffset = 0
    camera.heightOffset = 3
    camera.maxCameraSpeed = 1
    camera.upperRadiusLimit = 3
    camera.lowerRadiusLimit = 2
    camera.attachControl(canvas, true)

    let light = new BABYLON.HemisphericLight('light', new BABYLON.Vector3(0, 0, 0), scene)
    light.intensity = 1.9

    let gridMaterial = new GridMaterial('grid', scene)
    gridMaterial.mainColor = new BABYLON.Color3.FromHexString(this.mainColor)
    gridMaterial.lineColor = new BABYLON.Color3.FromHexString(this.lineColor)
    gridMaterial.gridRatio = 1

    let colorMaterial = new BABYLON.StandardMaterial('color', scene)
    colorMaterial.diffuseColor = new BABYLON.Color3.FromHexString('#02008d')
    colorMaterial.specularColor = new BABYLON.Color3.FromHexString('#02008d')
    colorMaterial.ambientColor = new BABYLON.Color3.FromHexString('#02008d')

    let building = BABYLON.SceneLoader.ImportMesh('', './models/construction/', 'construction.gltf', scene, (meshes) => {
      meshes[0].scaling = new BABYLON.Vector3(2.5, 2.5, 2.5)
      meshes[0].position.y = 0.03

      for (var i = 1; i < meshes.length; i++) {
        meshes[i].material = colorMaterial
      }

      camera.lockedTarget = meshes[0]
    })

    building.OPTIMIZE_WITH_UV = true
    building.IMPORT_VERTEX_COLORS = true
    building.COMPUTE_NORMALS = true
    building.OPTIMIZE_NORMALS = true

    let ground = BABYLON.MeshBuilder.CreateDisc('ground', { radius: 144 }, scene)
    ground.rotation.x = Math.PI / 2
    ground.material = gridMaterial

    engine.runRenderLoop(() => {
      scene.render()
    })
  },
})
</script>
