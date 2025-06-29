import React, { Suspense, useState, useEffect } from "react";
import { Canvas, useLoader } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei/core/OrbitControls";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import spaceBackground from "../assets/11824.jpg";

// Separate component for the 3D model
function Model() {
  const modelPath = "/model/robo_obj_pose4.glb";
  const gltf = useLoader(GLTFLoader, modelPath);
  
  useEffect(() => {
    console.log("Model loaded successfully:", gltf);
  }, [gltf]);
  
  return (
    <primitive 
      object={gltf.scene} 
      scale={0.3} 
      position={[0, -2, 0]} 
      rotation={[0, Math.PI / 4, 0]} 
    />
  );
}

// 3D fallback component (works inside Canvas)
function LoadingFallback() {
  return (
    <mesh>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color="hotpink" wireframe />
    </mesh>
  );
}

export function Model3d() {
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    console.log("Model3d component mounted");
    
    fetch("/model/robo_obj_pose4.glb")
      .then(response => {
        if (response.ok) {
          console.log("GLB file exists at specified path");
        } else {
          console.error("GLB file not found at specified path", response.status);
          setHasError(true);
        }
      })
      .catch(err => {
        console.error("Error checking for GLB file:", err);
        setHasError(true);
      });
  }, []);

  // Style cho full-width background container
  const fullWidthContainerStyle = {
    width: "100vw",          // Full width viewport
    height: "100vh",         // Full height viewport
    margin: 0,
    padding: 0,
    overflow: "hidden",
    position: "relative",
    backgroundImage: `url(${spaceBackground})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  };

  const blackOverlayStyle = {
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  backgroundColor: "rgba(0, 0, 0, 0.6)", // Độ mờ lớp phủ
  zIndex: 0,
};

  // Style cho model container
  const modelContainerStyle = {
    width: "900px",
    height: "550px",
    position: "relative",
    borderRadius: "8px",
    overflow: "hidden",
    boxShadow: "0 4px 20px rgba(0, 0, 0, 0.25)",
  };

  if (hasError) {
    return (
      <div style={fullWidthContainerStyle}>
        <div style={{ 
          width: "600px", 
          height: "600px", 
          background: "rgba(0, 0, 0, 0.7)", 
          color: "#fff", 
          display: "flex", 
          flexDirection: "column",
          justifyContent: "center", 
          alignItems: "center",
          padding: "10px",
          textAlign: "center",
          borderRadius: "8px"
        }}>
          <h3>Không thể tải mô hình 3D</h3>
          <p>Vui lòng kiểm tra đường dẫn đến tệp GLB và thử lại.</p>
          <p>Đường dẫn hiện tại: /model/robo_obj_pose4.glb</p>
        </div>
      </div>
    );
  }

  return (
  <div style={fullWidthContainerStyle}>
    {/* ✅ Lớp phủ đen */}
    <div style={blackOverlayStyle}></div>

    {/* ✅ Container chứa mô hình 3D */}
    <div style={{ ...modelContainerStyle, zIndex: 1 }}>
      <ErrorBoundary onError={(error) => {
        console.error("ErrorBoundary caught:", error);
        setHasError(true);
      }}>
        <Suspense fallback={
          <div style={{ 
            width: "100%", 
            height: "100%", 
            display: "flex", 
            justifyContent: "center", 
            alignItems: "center",
            background: "rgba(0, 0, 0, 0.5)",
            color: "#fff",
            fontSize: "18px",
            fontWeight: "bold"
          }}>
            Đang tải mô hình 3D...
          </div>
        }>
          <Canvas 
            camera={{ position: [5, 2, 5], fov: 45 }}
            style={{ background: "transparent" }}
          >
            <ambientLight intensity={0.7} />
            <pointLight position={[10, 10, 10]} intensity={1.5} />
            <directionalLight position={[-5, 5, 5]} intensity={0.5} />
            
            <Suspense fallback={<LoadingFallback />}>
              <Model />
              <OrbitControls 
                enableZoom={true}
                enablePan={true}
                enableRotate={true}
                zoomSpeed={0.6}
                panSpeed={0.5}
                rotateSpeed={0.6}
              />
            </Suspense>
          </Canvas>
        </Suspense>
      </ErrorBoundary>
    </div>
  </div>
);
}

// Error boundary component
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    console.error("getDerivedStateFromError caught:", error);
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error("Model3d error:", error, errorInfo);
    if (this.props.onError) {
      this.props.onError(error);
    }
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={{ 
          width: "100%", 
          height: "100%", 
          display: "flex", 
          justifyContent: "center", 
          alignItems: "center",
          background: "rgba(0, 0, 0, 0.7)",
          color: "#fff",
          padding: "20px",
          textAlign: "center"
        }}>
          Không thể tải mô hình 3D. Vui lòng thử lại sau.
        </div>
      );
    }

    return this.props.children;
  }
}