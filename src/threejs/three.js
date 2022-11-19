import { Suspense, useState, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { SamModel3 } from "./SamModel3";
import { SmartModel } from "./SmartModel";
import { OrbitControls } from "@react-three/drei";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

export const ThreeJsModel = () => {
  const sizes = {
    width: window.innerWidth,
    height: window.innerHeight,
  };

  function MyModel() {
    const sam = useRef();

    useFrame(({ clock }) => {
        if (sam.current) sam.current.rotation.y =
        (window.scrollY * 2 * Math.PI) / sizes.height;

    //   if (sam.current) {
    //     if (window.scrollY < sizes.height) {
    //       sam.current.rotation.y =
    //         (window.scrollY * 2 * Math.PI) / sizes.height;
    //     } else {
    //       sam.current.rotation.y =
    //         -1 * (window.scrollY * 2 * Math.PI) / sizes.height;
    //     }
    //   }
    });

    return (
      <>
        <Suspense fallback={null}>
          <SamModel3
            innerRef={sam}
            position={[3, -1.7, -10]}
            rotation={[0.5, -2.5, 0]}
          />
        </Suspense>
      </>
    );
  }

  // Create a control component which accepts the canvas and the model, and moves them both
  function MyControls({ canvas, model }) {
    useFrame(({ clock }) => {
      // duck.current.rotation.y = clock.getElapsedTime();
      // canvas.current.position.y = -window.scrollY;
      // canvas.current.position
      // console.log(clock.getElapsedTime());
    });
  }

  // function animate() {
  //     requestAnimationFrame(animate);
  //     // controls.update();
  //     renderer.render(scene, camera);
  // }

  return (
    <div className="p-8 w-full h-full border-2 border-black">
      <Canvas camera={{ position: [0, 0, 3], fov: 55 }}>
        <ambientLight intensity={0.35} />
        {/* <pointLight ref={light} position={[10, 10, 10]} />
        <Suspense fallback={null}>
          <MyModel />
        </Suspense> */}
        <MyModel />
      </Canvas>
    </div>
  );
};
