import { Suspense, useEffect, useState } from "react";

import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import CanvasLoader from "../Loader";

interface Props {
  isMobile: boolean;
}

const Computers: React.FC<Props> = ({ isMobile }) => {
  var { scene } = useGLTF("./desktop_pc/scene.gltf");
  return (
    <group
      scale={isMobile ? 0.395 : 0.7}
      position={isMobile ? [1, -3.0, -0.5] : [1, -3.5, -1]}
      rotation={[0.0, -0.2, -0.1]}
    >
      <hemisphereLight intensity={0.15} />
      <pointLight intensity={1} />
      <spotLight
        position={[0, 5, 2]}
        angle={3.5}
        penumbra={1}
        intensity={20}
        color={"white"}
      />
      <primitive object={scene} />
    </group>
  );
};

const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width:768px)");

    setIsMobile(mediaQuery.matches);

    const handelMediaQueryChange = (event: MediaQueryListEvent) => {
      setIsMobile(event.matches);
    };

    mediaQuery.addEventListener("change", handelMediaQueryChange);

    return () => {
      mediaQuery.removeEventListener("change", handelMediaQueryChange);
    };
  }, []);

  return (
    <Canvas
      frameloop="demand"
      shadows
      camera={{ position: [20, 3, 5], fov: 31 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          minPolarAngle={Math.PI / 2}
          maxPolarAngle={Math.PI / 1.8}
        />
        <Computers isMobile={isMobile} />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default ComputersCanvas;
