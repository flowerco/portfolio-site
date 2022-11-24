import { Suspense, useState, useRef, useLayoutEffect, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { NewModel } from "./SamModel4";
import { useProgress } from "@react-three/drei";
import { useLoading } from "../state/LoadingContext";


export const ThreeJsModel = () => {

  // Use the native react-drei progress % to set the progress in the global context
  const { progress } = useProgress();
  const { setProgress } = useLoading();
  let sizes = useWindowState();
  
  useEffect(() => {
    // Ensure the body of the page doesn't scroll until loading is complete
    if (progress >= 100) {
      document.body.style.overflowY = 'auto';
    }
    // Update the global progress state with the progress of the three.js model
    setProgress(progress);
  }, [progress, setProgress]);
  
  function useWindowState() {
    const [windowState, setWindowState] = useState({
      height: window.innerHeight,
      width: window.innerWidth,
      startPosition: window.innerWidth < 900 ? [0, -1.7, -10] : [3, -1.7, -10]
    });
    useLayoutEffect(() => {
      let timeoutId = null;
      // When the screen is dragged to a different size it will rerender on every small
      // drag movement. Put a time delay in the resize listener so it doesn't respond to eveny movement.
      const resizeListener = () => {
        // Prevent execution of previous setTimeout
        clearTimeout(timeoutId);
        // Change width of the state object after 150ms
        timeoutId = setTimeout(() => {
          setWindowState({
            height: window.innerHeight,
            width: window.innerWidth,
            startPosition: window.innerWidth < 900 ? [0, -1.7, -10] : [3, -1.7, -10]
          });
          
        }, 150);
      }
      window.addEventListener('resize', resizeListener);

      // Clear up and remove the listener when the component unmounts.
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
    
    return (
      <>
        <Suspense fallback={null}>
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
