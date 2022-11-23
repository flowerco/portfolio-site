import { Suspense, useState, useRef, useLayoutEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { NewModel } from "./SamModel4";
import { Html, useProgress } from '@react-three/drei'
import PacmanLoader from 'react-spinners/PacmanLoader';


export const ThreeJsModel = () => {
  
  function Loader() {
    const { progress } = useProgress()
    return <Html center>
      <PacmanLoader size={150} color={'#ffff00'} />
      <p>{progress}% loaded</p>
    </Html>
  }

  function useWindowState() {
    const [windowState, setWindowState] = useState({
      height: window.innerHeight,
      width: window.innerWidth,
      startPosition: window.innerWidth < 760 ? [0, -1.7, -10] : [3, -1.7, -10]
    });
    useLayoutEffect(() => {
      let timeoutId = null;
      const resizeListener = () => {
        // Prevent execution of previous setTimeout
        clearTimeout(timeoutId);
        // Change width of the state object after 150ms
        timeoutId = setTimeout(() => {
          setWindowState({
            height: window.innerHeight,
            width: window.innerWidth,
            startPosition: window.innerWidth < 760 ? [0, -1.7, -10] : [3, -1.7, -10]
          });

        }, 150);
      }
      window.addEventListener('resize', resizeListener);

      return () => window.removeEventListener('resize', resizeListener);
    }, []);
    return windowState;
  }

  function MyModel() {
    const sam = useRef();

    useFrame(({ clock }) => {
      if (sam.current) {
        if (window.scrollY / sizes.height  < 0.9 ) {
          sam.current.rotation.y = (window.scrollY * 2 * Math.PI) / sizes.height;
        }
      }
    });

    let sizes = useWindowState();

    return (
      <>
        {/* <pointLight ref={light} position={[10, 10, 10]} /> */}
        <Suspense fallback={<Loader />}>
            <NewModel
            innerRef={sam}
            position={sizes.startPosition}
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
        <MyModel />
      </Canvas>
    </div>
  );
};
