"use client"

import { Suspense, useRef, useEffect } from "react"
import { Canvas, useThree } from "@react-three/fiber"
import { OrbitControls, useGLTF } from "@react-three/drei"
import * as THREE from "three"

function AvatarModel() {
  const { scene } = useGLTF("/models/avatar.glb") // scene= container that holds everything you want to render
  const ref = useRef<THREE.Object3D | null>(null) //reference to the avatar in the scene, so we can manipulate position, scale, etc
  const { camera, size: viewport } = useThree() //{ width, height } in pixel

  useEffect(() => {
    if (!ref.current) return

    // 1) Raw bounding box
    const box = new THREE.Box3().setFromObject(ref.current) //Creates a bounding box around the 3D object.
    const size = new THREE.Vector3() //The width, height, depth of the model: size.x, size.y, size.z.
    const center = new THREE.Vector3() //The center of the model: center.x, center.y, center.z
    box.getSize(size)
    box.getCenter(center)

    if (size.y <= 0.0001) return //check to avoid zero-height models, which would break scaling formulas.

    const perspectiveCamera = camera as THREE.PerspectiveCamera //Ensures camera is perspective (not orthographic),
    if (!perspectiveCamera.isPerspectiveCamera) return

    // 2) FOV in radians
    const fovRad = (perspectiveCamera.fov * Math.PI) / 180 //Field of View is the angle of the camera’s vision converting from degree to radian 

    // 3) Scale factor: fit the avatar to fill the container
    // Since the container is square, use width or height interchangeably
    const containerHeight = viewport.height
    const containerWidth = viewport.width
    const maxDim = Math.max(size.y, size.x, size.z) // the largest dimension of the avatar (width, height, or depth).Goal: make the avatar fit nicely inside the canva

    // 4) Camera distance to fill container-how far the camera should be to see the entire model.
    const desiredCameraZ = (maxDim * 1.1) / (2 * Math.tan(fovRad / 2)) // 1.1 margin

    perspectiveCamera.position.set(0, 0, desiredCameraZ)
    perspectiveCamera.near = Math.max(0.1, desiredCameraZ * 0.001)
    perspectiveCamera.far = Math.max(1000, desiredCameraZ * 10)
    perspectiveCamera.updateProjectionMatrix() //applies changes to camera.

    // 5) Compute final scale to fill container
    const viewHeight = 2 * Math.tan(fovRad / 2) * desiredCameraZ
    const scaleFactor = 0.8
    const finalScale = (viewHeight / size.y) * scaleFactor
    ref.current.scale.setScalar(finalScale)

    // 6) Center avatar in container-This shifts it so the center of the model is at the origin.
    ref.current.position.y = -center.y * finalScale
    ref.current.position.x = -center.x * finalScale
    ref.current.position.z = -center.z * finalScale

    perspectiveCamera.lookAt(0, 0, 0) // focus camera at the center 
    console.log(scene)
  }, [camera]) //dependency array, re-run if camera changes.

  return <primitive ref={ref} object={scene} />
}

export default function AvatarViewer() {
  return (
    <Canvas
      style={{ width: "100%", height: "100%" }}
      shadows
      camera={{ fov: 40, near: 0.1, far: 2000, position: [0, 0, 5] }}
    >
      <ambientLight intensity={0.9} />
      <directionalLight position={[10, 10, 10]} intensity={1.2} castShadow />
      <Suspense fallback={null}>
        <AvatarModel />
      </Suspense>
      <OrbitControls enablePan={false} enableZoom enableRotate={false} />
    </Canvas>
  )
}

useGLTF.preload("/models/avatar.glb")


//canvas = A 3D rendering canvas provided by react-three-fiber
//useThree: Gives access to the Three.js scene, camera, and viewport inside React.
//OrbitControls: Lets the user rotate, zoom, and pan the camera interactively.
//useGLTF: Loads a .glb or .gltf 3D model into Three.js scene.
//THREE: The core Three.js library (Vector3, Box3, PerspectiveCamera, etc).
