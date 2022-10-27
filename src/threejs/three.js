import { Suspense, useState, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { DuckModel } from "./DuckModel";
import { SamModel } from "./SamModel";
import { OrbitControls } from "@react-three/drei";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

export const ThreeJsModel = () => {
  // Scroll logic
  const scrollHandler = (camera) => {
    const scrollY = window.scrollY;
  };

  const sizes = {
    width: window.innerWidth,
    height: window.innerHeight,
  };

  // function MyControls() {
  // 	const distToRotate = (72 * Math.PI) / 180;
  // 	const targetIterations = distToRotate / 0.01;
  // 	let counter = 0;

  //     const [status, setStatus] = useState('NO');

  // 	// camera logic
  // 	useFrame((state) => {
  // 		if (status === 'STARTUP') {
  // 			state.camera.rotation.x = state.camera.rotation.z = 0;
  // 			state.camera.rotation.y = -1.55;
  // 		}
  // 		if (status === 'RUNNINGRIGHT') {
  // 			console.log('Trying to turn right');
  // 			state.camera.rotation.y -= 0.01;
  // 			counter++;
  // 			if (counter > targetIterations) {
  // 				setStatus('STOP');
  // 				counter = 0;
  // 			}
  // 		}
  // 		if (status === 'RUNNINGLEFT') {
  // 			state.camera.rotation.y += 0.01;
  // 			counter--;
  // 			if (counter < -125.66) {
  // 				setStatus('STOP');
  // 				counter = 0;
  // 			}
  // 		}
  // 	});
  // }

  gsap.registerPlugin(ScrollTrigger);

  var rotate = new gsap.timeline({
    scrollTrigger: {
      trigger: "body",
      start: "top top",
      end: "bottom bottom",
      markers: true,
      scrub: true,
      toggleActions: "restart pause resume pause",
    },
  });

  // const duck = useRef();
  // rotate.to(duck, {
  //     rotation: 360*5,
  //     duration: 1,
  //     ease: 'none'
  // })

  function MyDuck() {
    const duck = useRef();

    useFrame(({ clock }) => {
      // duck.current.rotation.y = clock.getElapsedTime();
      duck.current.rotation.y = (window.scrollY * 2 * Math.PI) / sizes.height;
      // duck.current.position.y = -window.scrollY;
      // canvas.current.position
      // console.log(clock.getElapsedTime());
    });

    return (
      <DuckModel
        innerRef={duck}
        position={[1.2, -0.7, -1]}
        rotation={[0.5, -2.5, 0]}
      />
    );
  }

  function MyModel() {
    const sam = useRef();

    useFrame(({ clock }) => {
      // duck.current.rotation.y = clock.getElapsedTime();
      sam.current.rotation.y = (window.scrollY * 2 * Math.PI) / sizes.height;
    //   light.current.rotation.y = (window.scrollY * 2 * Math.PI) / sizes.height;
      // duck.current.position.y = -window.scrollY;
      // canvas.current.position
      // console.log(clock.getElapsedTime());
    });

    return (
      <>
        {/* <pointLight ref={light} position={[10, 10, 10]} /> */}
        <Suspense fallback={null}>
            <SamModel
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
