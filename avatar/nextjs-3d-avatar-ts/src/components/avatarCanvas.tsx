"use client"

import { Suspense, useRef, useEffect } from "react"
import { Canvas, useThree } from "@react-three/fiber"
import { OrbitControls, useGLTF } from "@react-three/drei"
import * as THREE from "three"

function AvatarModel() {
  const { scene } = useGLTF("/models/avatar.glb")
  const ref = useRef<THREE.Object3D>(null)
  const { camera, gl } = useThree()

  useEffect(() => {
    if (ref.current) {
      // Compute bounding box of the model
      const box = new THREE.Box3().setFromObject(ref.current)
      const size = new THREE.Vector3()
      const center = new THREE.Vector3()
      box.getSize(size)
      box.getCenter(center)

      // Center the model
      ref.current.position.sub(center)

      // Ensure we're working with a PerspectiveCamera
      const perspectiveCamera = camera as THREE.PerspectiveCamera
      if (perspectiveCamera.isPerspectiveCamera) {
        const fov = perspectiveCamera.fov * (Math.PI / 180)
        const maxDim = Math.max(size.x, size.y, size.z)

        // Calculate a good Z distance to fit the model in view
        const cameraZ = maxDim / (2 * Math.tan(fov / 2))

        // Position camera a bit further back for padding
        perspectiveCamera.position.set(0, 0, cameraZ * 2)
        perspectiveCamera.lookAt(0, 0, 0)
      }

      // Scale model proportionally to viewport
      const maxDim = Math.max(size.x, size.y, size.z)
      const scaleFactor = 2 / maxDim
      ref.current.scale.setScalar(scaleFactor)
    }

    // Resize renderer automatically on window resize
    const handleResize = () => {
      gl.setSize(window.innerWidth, window.innerHeight)
    }
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [camera, gl])

  return <primitive ref={ref} object={scene} />
}

export default function AvatarViewer() {
  return (
    <div className="w-full h-screen flex items-center justify-center bg-white">
      <Canvas
        style={{ width: "100%", height: "100%" }}
        camera={{ fov: 35, near: 0.1, far: 1000 }}
      >
        <ambientLight intensity={1.2} />
        <directionalLight position={[5, 5, 5]} intensity={1} />
        <Suspense fallback={null}>
          <AvatarModel />
        </Suspense>
        <OrbitControls enablePan={false} enableZoom enableRotate />
      </Canvas>
    </div>
  )
}

useGLTF.preload("/models/avatar.glb")

