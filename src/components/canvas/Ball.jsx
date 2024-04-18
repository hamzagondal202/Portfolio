import React, { Suspense, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import {
  Decal,
  Float,
  OrbitControls,
  Preload,
  useTexture,
} from "@react-three/drei";

import CanvasLoader from "../Loader";

const Ball = (props) => {
  const [decal] = useTexture([props.imgUrl]);
  // const mesh = useRef();
  // useFrame(() => {
  //   mesh.current.rotation.y = mesh.current.rotation.x += 0.01;
  // });
  return (
    <mesh position={[1, 0, 0]}>
      <sphereGeometry
        attach="geometry"
        args={[2.2, 22, 50]} // Width, Height and Depth of the sphere
        smoothness={5}
        {...props}
      />
      <meshPhongMaterial
        color="#420faf"
        attach="material"
        roughness={0.1}
        metalness={0.1}
      />
      <Decal
        position={[0, 0, 1]}
        rotation={[2 * Math.PI, 0, 6.25]}
        scale={3}
        map={decal}
      />
    </mesh>
  );
};

const BallCanvas = ({ icon }) => {
  return (
    <Canvas frameloop="demand " dpr={1} gl={{ preserveDrawingBuffer: true }}>
      <Suspense fallback={<CanvasLoader />}>
        <ambientLight intensity={1.25} />
        <directionalLight position={[0, 0, 0.05]} />

        {/* <OrbitControls enableZoom={false} /> */}
        <Ball imgUrl={icon} />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default BallCanvas;
