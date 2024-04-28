// eslint-disable-next-line no-unused-vars
import React, { Suspense, useEffect, useState } from "react";
// import { Canvas } from "@react-three/fiber";
// import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import { Avatar } from "@readyplayerme/visage";

// import CanvasLoader from "../Loader";

const modelSrc = "https://models.readyplayer.me/64d9d43dc603b299c0fbd8c4.glb"; // this can be a relative or absolute URL

function ShowAvatar() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Add a listener for changes to the screen size
    const mediaQuery = window.matchMedia("(max-width: 500px)");

    // Set the initial value of the `isMobile` state variable
    setIsMobile(mediaQuery.matches);

    // Define a callback function to handle changes to the media query
    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    // Add the callback function as a listener for changes to the media query
    mediaQuery.addEventListener("change", handleMediaQueryChange);

    // Remove the listener when the component is unmounted
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  return (
    <>
      {isMobile ? (
        <Avatar
          modelSrc={modelSrc + "?quality=low?useDracoMeshCompression=true"}
          // headMovement={true}
          cameraInitialDistance={3}
          // idleRotation={trues}
          halfBody={false}
          useHands={false}
          scale={0.9}
        />
      ) : (
        <Avatar
          modelSrc={modelSrc}
          cameraInitialDistance={2.2}
          halfBody={false}
          useHands={false}
          scale={1}
          emotion={{
            eyeSquintLeft: 0.4,
            eyeSquintRight: 0.2,
            mouthSmileLeft: 0.97,
            mouthSmileRight: 0.96,
            mouthShrugUpper: 0.27,
            browInnerUp: 0.3,
            browOuterUpLeft: 0.37,
            browOuterUpRight: 0.49,
          }}
        />
      )}
    </>
  );
}

export default ShowAvatar;

// const MyAvatar = ({ isMobile }) => {
//   const computer = useGLTF("./desktop_pc/avatarscene.glb");

//   return (
//     <mesh>
//       <hemisphereLight intensity={0.15} groundColor="black" />
//       <spotLight
//         position={[-20, 50, 10]}
//         angle={0.22}
//         penumbra={1}
//         intensity={1}
//         castShadow
//         shadow-mapSize={1024}
//       />
//       <pointLight intensity={1} />
//       <primitive
//         object={computer.scene}
//         scale={isMobile ? 0.7 : 3.5}
//         position={isMobile ? [0, -3, -2.2] : [1, -3.25, -3.5]}
//         rotation={[-0.01, -0.2, -0.1]}
//       />
//     </mesh>
//   );
// };

// const AvatarCanvas = () => {
//   const [isMobile, setIsMobile] = useState(false);

//   useEffect(() => {
//     // Add a listener for changes to the screen size
//     const mediaQuery = window.matchMedia("(max-width: 500px)");

//     // Set the initial value of the `isMobile` state variable
//     setIsMobile(mediaQuery.matches);

//     // Define a callback function to handle changes to the media query
//     const handleMediaQueryChange = (event) => {
//       setIsMobile(event.matches);
//     };

//     // Add the callback function as a listener for changes to the media query
//     mediaQuery.addEventListener("change", handleMediaQueryChange);

//     // Remove the listener when the component is unmounted
//     return () => {
//       mediaQuery.removeEventListener("change", handleMediaQueryChange);
//     };
//   }, []);

//   return (
//     <Canvas
//       frameloop="demand"
//       shadows
//       dpr={[1, 2]}
//       camera={{ position: [20, 3, 5], fov: 25 }}
//       gl={{ preserveDrawingBuffer: true }}
//     >
//       <Suspense fallback={<CanvasLoader />}>
//         <OrbitControls
//           enableZoom={false}
//           maxPolarAngle={Math.PI / 2}
//           minPolarAngle={Math.PI / 2}
//         />
//         <MyAvatar isMobile={isMobile} />
//       </Suspense>

//       <Preload all />
//     </Canvas>
//   );
// };
