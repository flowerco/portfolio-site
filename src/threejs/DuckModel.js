import React, { useRef } from "react";
import { useGLTF, PerspectiveCamera } from "@react-three/drei";

export function DuckModel(props) {
  const { nodes, materials } = useGLTF("/models/Duck.glb");
  return (
    <group {...props} dispose={null}>
      <group scale={0.01}>
        <mesh
          ref={props.innerRef}
          castShadow
          receiveShadow
          geometry={nodes.LOD3spShape.geometry}
          material={materials["blinn3-fx"]}
          position={props.position}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/models/Duck.glb");
