import React, { Suspense, useState, useEffect } from "react";
import { Canvas, useLoader } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei/core/OrbitControls";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import spaceBackground from "../assets/11824.jpg";
import "./Model3d.css";

/**
 * 3D primitive Model loader component.
 * @returns {JSX.Element} Primitive 3D component.
 */
function Model() {
  const gltf = useLoader(GLTFLoader, "/model/robo_obj_pose4.glb");
  return (
    <primitive 
      object={gltf.scene} 
      scale={0.3} 
      position={[0, -2, 0]} 
      rotation={[0, Math.PI / 4, 0]} 
    />
  );
}

/**
 * Model3d component for rendering the 3D Robot in space.
 * @returns {JSX.Element} The rendered section.
 */
export function Model3d() {
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    fetch("/model/robo_obj_pose4.glb")
      .then(res => { if (!res.ok) setHasError(true); })
      .catch(() => setHasError(true));
  }, []);

  if (hasError) {
    return (
      <div className="model-3d-wrapper" style={{ backgroundImage: `url(${spaceBackground})` }}>
        <div className="model-3d-overlay"></div>
        <div style={{ zIndex: 1, color: "#fff", background: "rgba(0,0,0,0.7)", padding: "20px", borderRadius: "8px" }}>
          <h3>Không thể tải mô hình 3D</h3>
          <p>Đường dẫn: /model/robo_obj_pose4.glb</p>
        </div>
      </div>
    );
  }

  return (
    <div className="model-3d-wrapper" style={{ backgroundImage: `url(${spaceBackground})` }}>
      <div className="model-3d-overlay"></div>
      <div className="model-3d-container">
        <Suspense fallback={<div className="loading-fallback">Đang tải mô hình 3D...</div>}>
          <Canvas camera={{ position: [5, 2, 5], fov: 45 }} style={{ background: "transparent" }} frameloop="demand">
            <ambientLight intensity={0.7} />
            <pointLight position={[10, 10, 10]} intensity={1.5} />
            <directionalLight position={[-5, 5, 5]} intensity={0.5} />
            <Suspense fallback={null}>
              <Model />
              <OrbitControls enableZoom enablePan enableRotate zoomSpeed={0.6} panSpeed={0.5} rotateSpeed={0.6} />
            </Suspense>
          </Canvas>
        </Suspense>
      </div>
    </div>
  );
}