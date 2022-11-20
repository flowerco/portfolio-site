import { Suspense, useState, useRef, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from 'three';
import { SamModel3 } from "./SamModel3";

export const ThreeJsModel = () => {
  let sizes = {
    width: window.innerWidth,
    height: window.innerHeight,
  };

  let startPosition = [3, -1.7, -10];

  useEffect(() => {
    // sizes = {
    //   width: window.innerWidth,
    //   height: window.innerHeight,
    // }
    if (sizes.width < 500) startPosition = [0, -1.7, -10];
  }, [sizes])
  // const endPosition = [6, -1.7, -7];

  // const startVector = new THREE.Vector3(...startPosition);
  // const endVector = new THREE.Vector3(...endPosition);


  function MyModel() {
    const sam = useRef();
    let prevScroll = 0;

    useFrame(({ clock }) => {
      // console.log((window.scrollY/sizes.height)%1);
      if (sam.current) {
        const deltaScroll = window.scrollY - prevScroll;
        if (window.scrollY / sizes.height  < 1 ) {
          sam.current.rotation.y = (window.scrollY * 2 * Math.PI) / sizes.height;
        } 
        // else {
          // const scrollPcnt =  (window.scrollY / sizes.height) % 1;
  
          
          // if (deltaScroll < 0) {
          //   sam.current.position.lerp(endVector, 0.1);
          // } else if (deltaScroll > 0) {
          //   sam.current.position.lerp(startVector, 0.1);
          // }

          // console.log('Scroll Pcnt: ', scrollPcnt);
          // console.log('deltaDist: ', deltaDist);
          // console.log('X Position: ', sam.current.position.x);
          
          // sam.current.position.x -= deltaScroll/100;
          // sam.current.position.z -= deltaScroll/100;
          // console.log('X Position: ', sam.current.position.x);
          // console.log('Delta Scroll: ', deltaScroll);
          // const deltaDist = -1 * (deltaScroll/100) * (sizes.height/sizes.width);
          // const direction = new THREE.Vector3(deltaDist, 0, deltaDist);
          // sam.current.position.add(direction);
          // const startVector = new THREE.Vector3(...startPosition);
          // const currMove = -1 * (window.scrollY/sizes.height)%1;
          // sam.current.position.set(startVector + new THREE.Vector3(currMove, 0, currMove));
      //   } 
      //   prevScroll = window.scrollY;
      // }

      //   if (sam.current) {
      //     if (window.scrollY < sizes.height) {
      //       sam.current.rotation.y =
      //         (window.scrollY * 2 * Math.PI) / sizes.height;
      //     } else {
      //       sam.current.rotation.y =
      //         -1 * (window.scrollY * 2 * Math.PI) / sizes.height;
      //     }
        }
    });

    return (
      <>
        <Suspense fallback={null}>
          <SamModel3
            innerRef={sam}
            position={startPosition}
            rotation={[0.5, -2.5, 0]}
          />
        </Suspense>
      </>
    );
  }


  return (
    <div className="p-8 w-full h-full">
      <Canvas camera={{ position: [0, 0, 3], fov: 55 }}>
        <ambientLight intensity={0.35} />
        <MyModel/>
      </Canvas>
    </div>
  );
};
