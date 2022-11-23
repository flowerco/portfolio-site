import React, { useRef, useEffect, useState } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";
import * as THREE from 'three'
import url from '../assets/videos/screenRec.mp4'

export function NewModel(props) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF("/models/SamModel4.glb");
  const { actions } = useAnimations(animations, group);

  useEffect(() => {
    const animAction = actions['Armature.001|mixamo.com|Layer0'];
    animAction.play();
  });

  const [video] = useState(()=> {
    const vid = document.createElement('video');
    vid.src = url;
    vid.crossOrigin='Anonymous';
    vid.loop=true;
    vid.muted=true;
    vid.play();
    return vid;
  })

  return (
    <group ref={group} {...props} dispose={null}>
      <group ref={props.innerRef} name="Scene">
        <pointLight position={[0, 10, 0]} />
        <group name="Armature" position={[0.9, -0.19, -4.13]} scale={4.5}>
          <primitive object={nodes.Hips} />
          <skinnedMesh
            name="Wolf3D_Glasses"
            frustumCulled={false}
            geometry={nodes.Wolf3D_Glasses.geometry}
            material={materials["Wolf3D_Glasses.001"]}
            skeleton={nodes.Wolf3D_Glasses.skeleton}
          />
          <skinnedMesh
            name="Wolf3D_Body"
            frustumCulled={false}
            geometry={nodes.Wolf3D_Body.geometry}
            material={materials["Wolf3D_Body.001"]}
            skeleton={nodes.Wolf3D_Body.skeleton}
          />
          <skinnedMesh
            name="Wolf3D_Hair"
            frustumCulled={false}
            geometry={nodes.Wolf3D_Hair.geometry}
            material={materials["Wolf3D_Hair.001"]}
            skeleton={nodes.Wolf3D_Hair.skeleton}
          />
          <skinnedMesh
            name="Wolf3D_Outfit_Bottom"
            frustumCulled={false}
            geometry={nodes.Wolf3D_Outfit_Bottom.geometry}
            material={materials["Wolf3D_Outfit_Bottom.001"]}
            skeleton={nodes.Wolf3D_Outfit_Bottom.skeleton}
          />
          <skinnedMesh
            name="Wolf3D_Outfit_Footwear"
            frustumCulled={false}
            geometry={nodes.Wolf3D_Outfit_Footwear.geometry}
            material={materials["Wolf3D_Outfit_Footwear.001"]}
            skeleton={nodes.Wolf3D_Outfit_Footwear.skeleton}
          />
          <skinnedMesh
            name="Wolf3D_Outfit_Top"
            frustumCulled={false}
            geometry={nodes.Wolf3D_Outfit_Top.geometry}
            material={materials["Wolf3D_Outfit_Top.001"]}
            skeleton={nodes.Wolf3D_Outfit_Top.skeleton}
          />
          <skinnedMesh
            name="EyeLeft"
            geometry={nodes.EyeLeft.geometry}
            material={materials["Wolf3D_Eye.001"]}
            skeleton={nodes.EyeLeft.skeleton}
            morphTargetDictionary={nodes.EyeLeft.morphTargetDictionary}
            morphTargetInfluences={nodes.EyeLeft.morphTargetInfluences}
          />
          <skinnedMesh
            name="EyeRight"
            geometry={nodes.EyeRight.geometry}
            material={materials["Wolf3D_Eye.001"]}
            skeleton={nodes.EyeRight.skeleton}
            morphTargetDictionary={nodes.EyeRight.morphTargetDictionary}
            morphTargetInfluences={nodes.EyeRight.morphTargetInfluences}
          />
          <skinnedMesh
            name="Wolf3D_Teeth"
            geometry={nodes.Wolf3D_Teeth.geometry}
            material={materials["Wolf3D_Teeth.001"]}
            skeleton={nodes.Wolf3D_Teeth.skeleton}
            morphTargetDictionary={nodes.Wolf3D_Teeth.morphTargetDictionary}
            morphTargetInfluences={nodes.Wolf3D_Teeth.morphTargetInfluences}
          />
          <skinnedMesh
            name="Wolf3D_Head"
            frustumCulled={false}
            geometry={nodes.Wolf3D_Head.geometry}
            material={materials["Wolf3D_Skin.001"]}
            skeleton={nodes.Wolf3D_Head.skeleton}
            morphTargetDictionary={nodes.Wolf3D_Head.morphTargetDictionary}
            morphTargetInfluences={nodes.Wolf3D_Head.morphTargetInfluences}
          />
        </group>
        <group
          name="SketchUp001"
          position={[-0.53, -0.5, -2.54]}
          scale={0.11}
        />
        <group
          name="Cube"
          position={[0.76, 5.25, 0.54]}
          scale={[1.96, 1, -0.06]}
        >
          <mesh
            name="Cube006_1"
            castShadow
            receiveShadow
            geometry={nodes.Cube006_1.geometry}
            material={materials["Computer.001"]}
          />
          <mesh
            name="Cube006_2"
            castShadow
            receiveShadow
            geometry={nodes.Cube006_2.geometry}
            material={materials["Screen.001"]}
          />
        </group>
        <mesh
          name="Table_Foot"
          castShadow
          receiveShadow
          geometry={nodes.Table_Foot.geometry}
          material={materials["Table Leg.001"]}
          position={[3.5, 0.02, -0.03]}
          scale={[0.3, 0.07, 1.67]}
        />
        <group
          name="Table_Leg"
          position={[3.5, 0.17, -0.03]}
          scale={[0.33, -0.12, 0.29]}
        >
          <mesh
            name="Cube018_1"
            castShadow
            receiveShadow
            geometry={nodes.Cube018_1.geometry}
            material={materials["Table Leg.001"]}
          />
          <mesh
            name="Cube018_2"
            castShadow
            receiveShadow
            geometry={nodes.Cube018_2.geometry}
            material={materials["Table Leg Black.001"]}
          />
        </group>
        <mesh
          name="Table_Top"
          castShadow
          receiveShadow
          geometry={nodes.Table_Top.geometry}
          material={materials["Table Top.001"]}
          position={[0.09, 2.82, -0.25]}
          scale={[4.41, -0.13, 1.75]}
        />
        <mesh
          name="Table_Top001"
          castShadow
          receiveShadow
          geometry={nodes.Table_Top001.geometry}
          material={materials["Table Top.001"]}
          position={[0.7, 3.62, 0.44]}
          scale={[3.12, -0.08, 0.61]}
        />
        <mesh
          name="Table_Top004"
          castShadow
          receiveShadow
          geometry={nodes.Table_Top004.geometry}
          material={materials["Keyboard.001"]}
          position={[-0.32, 3.01, -0.9]}
          rotation={[0, 0.01, 0]}
          scale={[-0.37, -0.05, 0.23]}
        />
        <mesh
          name="Board"
          castShadow
          receiveShadow
          geometry={nodes.Board.geometry}
          material={materials["Keyboard.001"]}
          position={[1.23, 3.01, -1.07]}
          scale={[1.08, -0.05, 0.49]}
        />
        <mesh
          name="Cube001"
          castShadow
          receiveShadow
          geometry={nodes.Cube001.geometry}
          material={materials["Key.001"]}
          position={[2.16, 3.07, -0.7]}
          rotation={[-0.04, 0, 0]}
          scale={[-0.05, 0.03, -0.06]}
        />
        <mesh
          name="Cube002"
          castShadow
          receiveShadow
          geometry={nodes.Cube002.geometry}
          material={materials["Key.001"]}
          position={[2.16, 3.07, -0.7]}
          rotation={[-0.04, 0, 0]}
          scale={[-0.05, 0.03, -0.06]}
        />
        <mesh
          name="Cube003"
          castShadow
          receiveShadow
          geometry={nodes.Cube003.geometry}
          material={materials["Key.001"]}
          position={[2.16, 3.07, -0.7]}
          rotation={[-0.04, 0, 0]}
          scale={[-0.05, 0.03, -0.06]}
        />
        <mesh
          name="Cube004"
          castShadow
          receiveShadow
          geometry={nodes.Cube004.geometry}
          material={materials["Key.001"]}
          position={[2.16, 3.07, -0.7]}
          rotation={[-0.04, 0, 0]}
          scale={[-0.05, 0.03, -0.06]}
        />
        {/* Screen here! */}
        <mesh
          name="Cube005"
          castShadow
          receiveShadow
          geometry={nodes.Cube005.geometry}
          material={materials.Key}
          position={[2.16, 3.07, -0.7]}
          rotation={[-0.04, 0, 0]}
          scale={[-0.05, 0.03, -0.06]}
        />
        <mesh rotation={[0,Math.PI,0]} position={[0.75,5.25,0.5]} >
          <planeGeometry args={[3.85,1.95]}/>
          <meshStandardMaterial emissive={"white"} side={THREE.DoubleSide}>
            <videoTexture attach="map" args={[video]}/>
            <videoTexture attach="emissiveMap" args={[video]} />
          </meshStandardMaterial>
        </mesh> 
        <mesh
          name="Cube006"
          castShadow
          receiveShadow
          geometry={nodes.Cube006.geometry}
          material={materials["Key.001"]}
          position={[2.16, 3.07, -0.7]}
          rotation={[-0.04, 0, 0]}
          scale={[-0.05, 0.03, -0.06]}
        />
        <mesh
          name="Cube007"
          castShadow
          receiveShadow
          geometry={nodes.Cube007.geometry}
          material={materials["Key.001"]}
          position={[2.16, 3.07, -0.7]}
          rotation={[-0.04, 0, 0]}
          scale={[-0.05, 0.03, -0.06]}
        />
        <mesh
          name="Cube008"
          castShadow
          receiveShadow
          geometry={nodes.Cube008.geometry}
          material={materials["Key.001"]}
          position={[2.16, 3.07, -0.7]}
          rotation={[-0.04, 0, 0]}
          scale={[-0.05, 0.03, -0.06]}
        />
        <mesh
          name="Cube009"
          castShadow
          receiveShadow
          geometry={nodes.Cube009.geometry}
          material={materials["Key.001"]}
          position={[2.16, 3.07, -0.7]}
          rotation={[-0.04, 0, 0]}
          scale={[-0.05, 0.03, -0.06]}
        />
        <mesh
          name="Cube010"
          castShadow
          receiveShadow
          geometry={nodes.Cube010.geometry}
          material={materials["Key.001"]}
          position={[2.16, 3.07, -0.7]}
          rotation={[-0.04, 0, 0]}
          scale={[-0.05, 0.03, -0.06]}
        />
        <mesh
          name="Cube011"
          castShadow
          receiveShadow
          geometry={nodes.Cube011.geometry}
          material={materials["Key.001"]}
          position={[1.38, 3.04, -1.45]}
          rotation={[-0.04, 0, 0]}
          scale={[0.36, 0.02, -0.05]}
        />
        <mesh
          name="Cube012"
          castShadow
          receiveShadow
          geometry={nodes.Cube012.geometry}
          material={materials["Key.001"]}
          position={[2, 3.04, -1.3]}
          rotation={[-0.04, 0, 0]}
          scale={[0.21, 0.02, -0.05]}
        />
        <mesh
          name="Cube013"
          castShadow
          receiveShadow
          geometry={nodes.Cube013.geometry}
          material={materials["Key.001"]}
          position={[2.08, 3.05, -1.15]}
          rotation={[-0.04, 0, 0]}
          scale={[0.13, 0.02, -0.05]}
        />
        <mesh
          name="Cube014"
          castShadow
          receiveShadow
          geometry={nodes.Cube014.geometry}
          material={materials["Key.001"]}
          position={[2.16, 3.07, -0.7]}
          rotation={[-0.04, 0, 0]}
          scale={[-0.05, 0.03, -0.06]}
        />
        <mesh
          name="Cube015"
          castShadow
          receiveShadow
          geometry={nodes.Cube015.geometry}
          material={materials["Key.001"]}
          position={[2.16, 3.07, -0.7]}
          rotation={[-0.04, 0, 0]}
          scale={[-0.05, 0.03, -0.06]}
        />
        <mesh
          name="Cube016"
          castShadow
          receiveShadow
          geometry={nodes.Cube016.geometry}
          material={materials["Key.001"]}
          position={[2.16, 3.07, -0.7]}
          rotation={[-0.04, 0, 0]}
          scale={[-0.05, 0.03, -0.06]}
        />
        <mesh
          name="Cube017"
          castShadow
          receiveShadow
          geometry={nodes.Cube017.geometry}
          material={materials["Key.001"]}
          position={[2.16, 3.07, -0.7]}
          rotation={[-0.04, 0, 0]}
          scale={[-0.05, 0.03, -0.06]}
        />
        <mesh
          name="Cube018"
          castShadow
          receiveShadow
          geometry={nodes.Cube018.geometry}
          material={materials["Key.001"]}
          position={[2.16, 3.07, -0.7]}
          rotation={[-0.04, 0, 0]}
          scale={[-0.05, 0.03, -0.06]}
        />
        <mesh
          name="Cube019"
          castShadow
          receiveShadow
          geometry={nodes.Cube019.geometry}
          material={materials["Key.001"]}
          position={[2.16, 3.07, -0.7]}
          rotation={[-0.04, 0, 0]}
          scale={[-0.05, 0.03, -0.06]}
        />
        <mesh
          name="Cube020"
          castShadow
          receiveShadow
          geometry={nodes.Cube020.geometry}
          material={materials["Key.001"]}
          position={[2.16, 3.07, -0.7]}
          rotation={[-0.04, 0, 0]}
          scale={[-0.05, 0.03, -0.06]}
        />
        <mesh
          name="Cube021"
          castShadow
          receiveShadow
          geometry={nodes.Cube021.geometry}
          material={materials["Key.001"]}
          position={[2.16, 3.07, -0.7]}
          rotation={[-0.04, 0, 0]}
          scale={[-0.05, 0.03, -0.06]}
        />
        <mesh
          name="Cube022"
          castShadow
          receiveShadow
          geometry={nodes.Cube022.geometry}
          material={materials["Key.001"]}
          position={[2.16, 3.07, -0.7]}
          rotation={[-0.04, 0, 0]}
          scale={[-0.05, 0.03, -0.06]}
        />
        <mesh
          name="Cube023"
          castShadow
          receiveShadow
          geometry={nodes.Cube023.geometry}
          material={materials["Key.001"]}
          position={[2.16, 3.07, -0.7]}
          rotation={[-0.04, 0, 0]}
          scale={[-0.05, 0.03, -0.06]}
        />
        <mesh
          name="Cube024"
          castShadow
          receiveShadow
          geometry={nodes.Cube024.geometry}
          material={materials["Key.001"]}
          position={[2.08, 3.06, -1]}
          rotation={[-0.04, 0, 0]}
          scale={[0.13, 0.02, -0.05]}
        />
        <mesh
          name="Cube025"
          castShadow
          receiveShadow
          geometry={nodes.Cube025.geometry}
          material={materials["Key.001"]}
          position={[2.15, 3.07, -0.68]}
          rotation={[-0.04, 0, 0]}
          scale={[-0.05, 0.03, -0.06]}
        />
        <mesh
          name="Cube026"
          castShadow
          receiveShadow
          geometry={nodes.Cube026.geometry}
          material={materials["Key.001"]}
          position={[2.15, 3.07, -0.68]}
          rotation={[-0.04, 0, 0]}
          scale={[-0.05, 0.03, -0.06]}
        />
        <mesh
          name="Cube029"
          castShadow
          receiveShadow
          geometry={nodes.Cube029.geometry}
          material={materials["Key.001"]}
          position={[2.16, 3.07, -0.7]}
          rotation={[-0.04, 0, 0]}
          scale={[-0.05, 0.03, -0.06]}
        />
        <mesh
          name="Cube030"
          castShadow
          receiveShadow
          geometry={nodes.Cube030.geometry}
          material={materials["Key.001"]}
          position={[2.16, 3.07, -0.7]}
          rotation={[-0.04, 0, 0]}
          scale={[-0.05, 0.03, -0.06]}
        />
        <mesh
          name="Cube031"
          castShadow
          receiveShadow
          geometry={nodes.Cube031.geometry}
          material={materials["Key.001"]}
          position={[2.16, 3.07, -0.7]}
          rotation={[-0.04, 0, 0]}
          scale={[-0.05, 0.03, -0.06]}
        />
        <mesh
          name="Cube032"
          castShadow
          receiveShadow
          geometry={nodes.Cube032.geometry}
          material={materials["Key.001"]}
          position={[2.16, 3.07, -0.7]}
          rotation={[-0.04, 0, 0]}
          scale={[-0.05, 0.03, -0.06]}
        />
        <mesh
          name="Cube033"
          castShadow
          receiveShadow
          geometry={nodes.Cube033.geometry}
          material={materials["Key.001"]}
          position={[2.16, 3.07, -0.7]}
          rotation={[-0.04, 0, 0]}
          scale={[-0.05, 0.03, -0.06]}
        />
        <mesh
          name="Cube034"
          castShadow
          receiveShadow
          geometry={nodes.Cube034.geometry}
          material={materials["Key.001"]}
          position={[2.16, 3.07, -0.7]}
          rotation={[-0.04, 0, 0]}
          scale={[-0.05, 0.03, -0.06]}
        />
        <mesh
          name="Cube035"
          castShadow
          receiveShadow
          geometry={nodes.Cube035.geometry}
          material={materials["Key.001"]}
          position={[2.16, 3.07, -0.7]}
          rotation={[-0.04, 0, 0]}
          scale={[-0.05, 0.03, -0.06]}
        />
        <mesh
          name="Cube036"
          castShadow
          receiveShadow
          geometry={nodes.Cube036.geometry}
          material={materials["Key.001"]}
          position={[2.16, 3.07, -0.7]}
          rotation={[-0.04, 0, 0]}
          scale={[-0.05, 0.03, -0.06]}
        />
        <mesh
          name="Cube038"
          castShadow
          receiveShadow
          geometry={nodes.Cube038.geometry}
          material={materials["Key.001"]}
          position={[2.15, 3.07, -0.68]}
          rotation={[-0.04, 0, 0]}
          scale={[-0.05, 0.03, -0.06]}
        />
        <mesh
          name="Cube039"
          castShadow
          receiveShadow
          geometry={nodes.Cube039.geometry}
          material={materials["Key.001"]}
          position={[2.15, 3.07, -0.68]}
          rotation={[-0.04, 0, 0]}
          scale={[-0.05, 0.03, -0.06]}
        />
        <mesh
          name="Cube042"
          castShadow
          receiveShadow
          geometry={nodes.Cube042.geometry}
          material={materials["Key.001"]}
          position={[2.16, 3.07, -0.7]}
          rotation={[-0.04, 0, 0]}
          scale={[-0.05, 0.03, -0.06]}
        />
        <mesh
          name="Cube043"
          castShadow
          receiveShadow
          geometry={nodes.Cube043.geometry}
          material={materials["Key.001"]}
          position={[2.16, 3.07, -0.7]}
          rotation={[-0.04, 0, 0]}
          scale={[-0.05, 0.03, -0.06]}
        />
        <mesh
          name="Cube044"
          castShadow
          receiveShadow
          geometry={nodes.Cube044.geometry}
          material={materials["Key.001"]}
          position={[2.16, 3.07, -0.7]}
          rotation={[-0.04, 0, 0]}
          scale={[-0.05, 0.03, -0.06]}
        />
        <mesh
          name="Cube045"
          castShadow
          receiveShadow
          geometry={nodes.Cube045.geometry}
          material={materials["Key.001"]}
          position={[2.16, 3.07, -0.7]}
          rotation={[-0.04, 0, 0]}
          scale={[-0.05, 0.03, -0.06]}
        />
        <mesh
          name="Cube046"
          castShadow
          receiveShadow
          geometry={nodes.Cube046.geometry}
          material={materials["Key.001"]}
          position={[2.16, 3.07, -0.7]}
          rotation={[-0.04, 0, 0]}
          scale={[-0.05, 0.03, -0.06]}
        />
        <mesh
          name="Cube047"
          castShadow
          receiveShadow
          geometry={nodes.Cube047.geometry}
          material={materials["Key.001"]}
          position={[2.16, 3.07, -0.7]}
          rotation={[-0.04, 0, 0]}
          scale={[-0.05, 0.03, -0.06]}
        />
        <mesh
          name="Cube048"
          castShadow
          receiveShadow
          geometry={nodes.Cube048.geometry}
          material={materials["Key.001"]}
          position={[2.16, 3.07, -0.7]}
          rotation={[-0.04, 0, 0]}
          scale={[-0.05, 0.03, -0.06]}
        />
        <mesh
          name="Cube049"
          castShadow
          receiveShadow
          geometry={nodes.Cube049.geometry}
          material={materials["Key.001"]}
          position={[2.16, 3.07, -0.7]}
          rotation={[-0.04, 0, 0]}
          scale={[-0.05, 0.03, -0.06]}
        />
        <mesh
          name="Cube051"
          castShadow
          receiveShadow
          geometry={nodes.Cube051.geometry}
          material={materials["Key.001"]}
          position={[2.15, 3.07, -0.68]}
          rotation={[-0.04, 0, 0]}
          scale={[-0.05, 0.03, -0.06]}
        />
        <mesh
          name="Cube052"
          castShadow
          receiveShadow
          geometry={nodes.Cube052.geometry}
          material={materials["Key.001"]}
          position={[2.15, 3.07, -0.68]}
          rotation={[-0.04, 0, 0]}
          scale={[-0.05, 0.03, -0.06]}
        />
        <mesh
          name="Cube056"
          castShadow
          receiveShadow
          geometry={nodes.Cube056.geometry}
          material={materials["Key.001"]}
          position={[2.16, 3.07, -0.7]}
          rotation={[-0.04, 0, 0]}
          scale={[-0.05, 0.03, -0.06]}
        />
        <mesh
          name="Cube057"
          castShadow
          receiveShadow
          geometry={nodes.Cube057.geometry}
          material={materials["Key.001"]}
          position={[2.16, 3.07, -0.7]}
          rotation={[-0.04, 0, 0]}
          scale={[-0.05, 0.03, -0.06]}
        />
        <mesh
          name="Cube058"
          castShadow
          receiveShadow
          geometry={nodes.Cube058.geometry}
          material={materials["Key.001"]}
          position={[2.16, 3.07, -0.7]}
          rotation={[-0.04, 0, 0]}
          scale={[-0.05, 0.03, -0.06]}
        />
        <mesh
          name="Cube059"
          castShadow
          receiveShadow
          geometry={nodes.Cube059.geometry}
          material={materials["Key.001"]}
          position={[2.16, 3.07, -0.7]}
          rotation={[-0.04, 0, 0]}
          scale={[-0.05, 0.03, -0.06]}
        />
        <mesh
          name="Cube060"
          castShadow
          receiveShadow
          geometry={nodes.Cube060.geometry}
          material={materials["Key.001"]}
          position={[2.16, 3.07, -0.7]}
          rotation={[-0.04, 0, 0]}
          scale={[-0.05, 0.03, -0.06]}
        />
        <mesh
          name="Cube061"
          castShadow
          receiveShadow
          geometry={nodes.Cube061.geometry}
          material={materials["Key.001"]}
          position={[2.16, 3.07, -0.7]}
          rotation={[-0.04, 0, 0]}
          scale={[-0.05, 0.03, -0.06]}
        />
        <mesh
          name="Cube062"
          castShadow
          receiveShadow
          geometry={nodes.Cube062.geometry}
          material={materials["Key.001"]}
          position={[2.16, 3.07, -0.7]}
          rotation={[-0.04, 0, 0]}
          scale={[-0.05, 0.03, -0.06]}
        />
        <mesh
          name="Cube063"
          castShadow
          receiveShadow
          geometry={nodes.Cube063.geometry}
          material={materials["Key.001"]}
          position={[2.16, 3.07, -0.7]}
          rotation={[-0.04, 0, 0]}
          scale={[-0.05, 0.03, -0.06]}
        />
        <mesh
          name="Cube064"
          castShadow
          receiveShadow
          geometry={nodes.Cube064.geometry}
          material={materials["Key.001"]}
          position={[2.15, 3.07, -0.68]}
          rotation={[-0.04, 0, 0]}
          scale={[-0.05, 0.03, -0.06]}
        />
        <mesh
          name="Cube065"
          castShadow
          receiveShadow
          geometry={nodes.Cube065.geometry}
          material={materials["Key.001"]}
          position={[2.15, 3.07, -0.68]}
          rotation={[-0.04, 0, 0]}
          scale={[-0.05, 0.03, -0.06]}
        />
        <mesh
          name="Cube066"
          castShadow
          receiveShadow
          geometry={nodes.Cube066.geometry}
          material={materials["Key.001"]}
          position={[2.16, 3.07, -0.7]}
          rotation={[-0.04, 0, 0]}
          scale={[-0.05, 0.03, -0.06]}
        />
        <mesh
          name="Cube067"
          castShadow
          receiveShadow
          geometry={nodes.Cube067.geometry}
          material={materials["Key.001"]}
          position={[2.16, 3.07, -0.7]}
          rotation={[-0.04, 0, 0]}
          scale={[-0.05, 0.03, -0.06]}
        />
        <mesh
          name="Cube068"
          castShadow
          receiveShadow
          geometry={nodes.Cube068.geometry}
          material={materials["Key.001"]}
          position={[2.16, 3.07, -0.7]}
          rotation={[-0.04, 0, 0]}
          scale={[-0.05, 0.03, -0.06]}
        />
        <mesh
          name="Cube074"
          castShadow
          receiveShadow
          geometry={nodes.Cube074.geometry}
          material={materials["Key.001"]}
          position={[2.16, 3.07, -0.7]}
          rotation={[-0.04, 0, 0]}
          scale={[-0.05, 0.03, -0.06]}
        />
        <mesh
          name="Cube075"
          castShadow
          receiveShadow
          geometry={nodes.Cube075.geometry}
          material={materials["Key.001"]}
          position={[2.16, 3.07, -0.7]}
          rotation={[-0.04, 0, 0]}
          scale={[-0.05, 0.03, -0.06]}
        />
        <mesh
          name="Cube076"
          castShadow
          receiveShadow
          geometry={nodes.Cube076.geometry}
          material={materials["Key.001"]}
          position={[2.16, 3.07, -0.7]}
          rotation={[-0.04, 0, 0]}
          scale={[-0.05, 0.03, -0.06]}
        />
        <mesh
          name="Cube077"
          castShadow
          receiveShadow
          geometry={nodes.Cube077.geometry}
          material={materials["Key.001"]}
          position={[2.16, 3.07, -0.7]}
          rotation={[-0.04, 0, 0]}
          scale={[-0.05, 0.03, -0.06]}
        />
        <group
          name="Cylinder"
          position={[-3.34, 3.37, 0.56]}
          scale={[0.51, 0.39, 0.51]}
        >
          <mesh
            name="Cylinder001"
            castShadow
            receiveShadow
            geometry={nodes.Cylinder001.geometry}
            material={materials["Dirt.001"]}
          />
          <mesh
            name="Cylinder001_1"
            castShadow
            receiveShadow
            geometry={nodes.Cylinder001_1.geometry}
            material={materials["Pot.001"]}
          />
        </group>
        <mesh
          name="Leaf"
          castShadow
          receiveShadow
          geometry={nodes.Leaf.geometry}
          material={materials["Plant.001"]}
          position={[-3.24, 3.59, 0.8]}
          rotation={[0, -0.46, 0]}
          scale={0.17}
        />
        <mesh
          name="Leaf001"
          castShadow
          receiveShadow
          geometry={nodes.Leaf001.geometry}
          material={materials["Plant.001"]}
          position={[-3.14, 3.71, 0.61]}
          rotation={[0, 0.63, 0]}
          scale={[0.2, 0.23, 0.2]}
        />
        <mesh
          name="Leaf002"
          castShadow
          receiveShadow
          geometry={nodes.Leaf002.geometry}
          material={materials["Plant.001"]}
          position={[-3.43, 3.49, 0.61]}
          rotation={[-Math.PI, 0.41, -Math.PI]}
          scale={[0.2, 0.26, 0.2]}
        />
        <mesh
          name="Leaf003"
          castShadow
          receiveShadow
          geometry={nodes.Leaf003.geometry}
          material={materials["Plant.001"]}
          position={[-3.27, 3.67, 0.56]}
          rotation={[0, 1.55, 0]}
          scale={[0.22, 0.24, 0.22]}
        />
        <mesh
          name="Leaf004"
          castShadow
          receiveShadow
          geometry={nodes.Leaf004.geometry}
          material={materials["Plant.001"]}
          position={[-3.48, 3.59, 0.3]}
          rotation={[Math.PI, -1.32, Math.PI]}
          scale={[0.22, 0.24, 0.22]}
        />
        <mesh
          name="Leaf005"
          castShadow
          receiveShadow
          geometry={nodes.Leaf005.geometry}
          material={materials["Plant.001"]}
          position={[-3.29, 3.61, 0.34]}
          rotation={[0, 1.08, 0]}
          scale={[0.15, 0.14, 0.15]}
        />
        <mesh
          name="Leaf006"
          castShadow
          receiveShadow
          geometry={nodes.Leaf006.geometry}
          material={materials["Plant.001"]}
          position={[-3.18, 3.67, 0.69]}
          rotation={[0, -0.26, 0]}
          scale={[0.22, 0.24, 0.22]}
        />
        <group name="SketchUp" position={[-0.53, -0.5, -2.54]} scale={0.11}>
          <mesh
            name="ID464001"
            castShadow
            receiveShadow
            geometry={nodes.ID464001.geometry}
            material={materials["material.001"]}
          />
          <mesh
            name="ID464001_1"
            castShadow
            receiveShadow
            geometry={nodes.ID464001_1.geometry}
            material={materials["material_0.001"]}
          />
          <group name="instance_0052" position={[13.22, 0, -14.52]} />
          <group name="instance_0053" position={[13.22, 0, -14.52]} />
          <group name="instance_0054" position={[13.22, 0, -14.52]} />
          <group name="instance_0055" position={[13.22, 0, -14.52]} />
          <group name="instance_0056" position={[13.22, 0, -14.52]} />
          <group
            name="skp_camera_Last_Saved_SketchUp_View"
            position={[74.57, 52.11, 42.54]}
            rotation={[1.33, 0.24, -0.76]}
          />
          <group
            name="skp_camera_Scene_1"
            position={[74.57, 52.11, 42.54]}
            rotation={[1.33, 0.24, -0.76]}
          />
          <mesh
            name="instance_0"
            castShadow
            receiveShadow
            geometry={nodes.instance_0.geometry}
            material={materials["material_2.001"]}
            position={[13.22, 2.98, -14.52]}
          />
          <group name="instance_0001" position={[13.22, 2.98, -14.52]}>
            <mesh
              name="ID20001"
              castShadow
              receiveShadow
              geometry={nodes.ID20001.geometry}
              material={materials["material.001"]}
            />
            <mesh
              name="ID20001_1"
              castShadow
              receiveShadow
              geometry={nodes.ID20001_1.geometry}
              material={materials["material_3.001"]}
            />
          </group>
          <mesh
            name="instance_0002"
            castShadow
            receiveShadow
            geometry={nodes.instance_0002.geometry}
            material={materials["material_2.001"]}
            position={[13.22, 2.98, -14.52]}
          />
          <group
            name="instance_0003"
            position={[13.22, 6.76, -14.52]}
            scale={[1, 0.57, 1]}
          >
            <mesh
              name="ID40001"
              castShadow
              receiveShadow
              geometry={nodes.ID40001.geometry}
              material={materials["material.001"]}
            />
            <mesh
              name="ID40001_1"
              castShadow
              receiveShadow
              geometry={nodes.ID40001_1.geometry}
              material={materials["material_1.001"]}
            />
          </group>
          <group name="instance_0004" position={[13.22, 2.98, -14.52]}>
            <mesh
              name="ID52001"
              castShadow
              receiveShadow
              geometry={nodes.ID52001.geometry}
              material={materials["material.001"]}
            />
            <mesh
              name="ID52001_1"
              castShadow
              receiveShadow
              geometry={nodes.ID52001_1.geometry}
              material={materials["material_3.001"]}
            />
          </group>
          <group name="instance_0005" position={[13.22, 2.98, -14.52]}>
            <mesh
              name="ID60001"
              castShadow
              receiveShadow
              geometry={nodes.ID60001.geometry}
              material={materials["material.001"]}
            />
            <mesh
              name="ID60001_1"
              castShadow
              receiveShadow
              geometry={nodes.ID60001_1.geometry}
              material={materials["material_3.001"]}
            />
          </group>
          <group name="instance_0006" position={[13.22, 2.98, -14.52]}>
            <mesh
              name="ID68001"
              castShadow
              receiveShadow
              geometry={nodes.ID68001.geometry}
              material={materials["material.001"]}
            />
            <mesh
              name="ID68001_1"
              castShadow
              receiveShadow
              geometry={nodes.ID68001_1.geometry}
              material={materials["material_3.001"]}
            />
          </group>
          <group name="instance_0007" position={[13.22, 2.98, -14.52]}>
            <mesh
              name="ID76001"
              castShadow
              receiveShadow
              geometry={nodes.ID76001.geometry}
              material={materials["material.001"]}
            />
            <mesh
              name="ID76001_1"
              castShadow
              receiveShadow
              geometry={nodes.ID76001_1.geometry}
              material={materials["material_3.001"]}
            />
          </group>
          <group name="instance_0008" position={[13.22, 2.98, -14.52]}>
            <mesh
              name="ID84001"
              castShadow
              receiveShadow
              geometry={nodes.ID84001.geometry}
              material={materials["material.001"]}
            />
            <mesh
              name="ID84001_1"
              castShadow
              receiveShadow
              geometry={nodes.ID84001_1.geometry}
              material={materials["material_3.001"]}
            />
          </group>
          <group name="instance_0009" position={[13.22, 2.98, -14.52]}>
            <mesh
              name="ID92001"
              castShadow
              receiveShadow
              geometry={nodes.ID92001.geometry}
              material={materials["material.001"]}
            />
            <mesh
              name="ID92001_1"
              castShadow
              receiveShadow
              geometry={nodes.ID92001_1.geometry}
              material={materials["material_3.001"]}
            />
          </group>
          <group name="instance_0010" position={[13.22, 2.98, -14.52]}>
            <mesh
              name="ID100001"
              castShadow
              receiveShadow
              geometry={nodes.ID100001.geometry}
              material={materials["material.001"]}
            />
            <mesh
              name="ID100001_1"
              castShadow
              receiveShadow
              geometry={nodes.ID100001_1.geometry}
              material={materials["material_3.001"]}
            />
          </group>
          <group name="instance_0011" position={[13.22, 2.98, -14.52]}>
            <mesh
              name="ID108001"
              castShadow
              receiveShadow
              geometry={nodes.ID108001.geometry}
              material={materials["material.001"]}
            />
            <mesh
              name="ID108001_1"
              castShadow
              receiveShadow
              geometry={nodes.ID108001_1.geometry}
              material={materials["material_3.001"]}
            />
          </group>
          <group name="instance_0012" position={[13.22, 2.98, -14.52]}>
            <mesh
              name="ID116001"
              castShadow
              receiveShadow
              geometry={nodes.ID116001.geometry}
              material={materials["material.001"]}
            />
            <mesh
              name="ID116001_1"
              castShadow
              receiveShadow
              geometry={nodes.ID116001_1.geometry}
              material={materials["material_3.001"]}
            />
          </group>
          <group name="instance_0013" position={[13.22, 2.98, -14.52]}>
            <mesh
              name="ID124001"
              castShadow
              receiveShadow
              geometry={nodes.ID124001.geometry}
              material={materials["material.001"]}
            />
            <mesh
              name="ID124001_1"
              castShadow
              receiveShadow
              geometry={nodes.ID124001_1.geometry}
              material={materials["material_3.001"]}
            />
          </group>
          <group name="instance_0014" position={[13.22, 2.98, -14.52]}>
            <mesh
              name="ID132001"
              castShadow
              receiveShadow
              geometry={nodes.ID132001.geometry}
              material={materials["material.001"]}
            />
            <mesh
              name="ID132001_1"
              castShadow
              receiveShadow
              geometry={nodes.ID132001_1.geometry}
              material={materials["material_3.001"]}
            />
          </group>
          <group name="instance_0015" position={[13.22, 2.98, -14.52]}>
            <mesh
              name="ID140001"
              castShadow
              receiveShadow
              geometry={nodes.ID140001.geometry}
              material={materials["material_2.001"]}
            />
            <mesh
              name="ID140001_1"
              castShadow
              receiveShadow
              geometry={nodes.ID140001_1.geometry}
              material={materials["material.001"]}
            />
          </group>
          <group name="instance_0016" position={[13.22, 2.98, -14.52]}>
            <mesh
              name="ID148001"
              castShadow
              receiveShadow
              geometry={nodes.ID148001.geometry}
              material={materials["material_2.001"]}
            />
            <mesh
              name="ID148001_1"
              castShadow
              receiveShadow
              geometry={nodes.ID148001_1.geometry}
              material={materials["material.001"]}
            />
          </group>
          <group name="instance_0017" position={[13.22, 2.98, -14.52]}>
            <mesh
              name="ID156001"
              castShadow
              receiveShadow
              geometry={nodes.ID156001.geometry}
              material={materials["material_2.001"]}
            />
            <mesh
              name="ID156001_1"
              castShadow
              receiveShadow
              geometry={nodes.ID156001_1.geometry}
              material={materials["material.001"]}
            />
          </group>
          <group name="instance_0018" position={[13.22, 2.98, -14.52]}>
            <mesh
              name="ID164001"
              castShadow
              receiveShadow
              geometry={nodes.ID164001.geometry}
              material={materials["material_2.001"]}
            />
            <mesh
              name="ID164001_1"
              castShadow
              receiveShadow
              geometry={nodes.ID164001_1.geometry}
              material={materials["material.001"]}
            />
          </group>
          <group name="instance_0019" position={[13.22, 2.98, -14.52]}>
            <mesh
              name="ID172001"
              castShadow
              receiveShadow
              geometry={nodes.ID172001.geometry}
              material={materials["material_2.001"]}
            />
            <mesh
              name="ID172001_1"
              castShadow
              receiveShadow
              geometry={nodes.ID172001_1.geometry}
              material={materials["material.001"]}
            />
          </group>
          <group name="instance_0020" position={[13.22, 2.98, -14.52]}>
            <mesh
              name="ID180001"
              castShadow
              receiveShadow
              geometry={nodes.ID180001.geometry}
              material={materials["material_2.001"]}
            />
            <mesh
              name="ID180001_1"
              castShadow
              receiveShadow
              geometry={nodes.ID180001_1.geometry}
              material={materials["material.001"]}
            />
          </group>
          <group name="instance_0021" position={[13.22, 2.98, -14.52]}>
            <mesh
              name="ID188001"
              castShadow
              receiveShadow
              geometry={nodes.ID188001.geometry}
              material={materials["material.001"]}
            />
            <mesh
              name="ID188001_1"
              castShadow
              receiveShadow
              geometry={nodes.ID188001_1.geometry}
              material={materials["material_3.001"]}
            />
          </group>
          <group name="instance_0022" position={[13.22, 2.98, -14.52]}>
            <mesh
              name="ID196001"
              castShadow
              receiveShadow
              geometry={nodes.ID196001.geometry}
              material={materials["material.001"]}
            />
            <mesh
              name="ID196001_1"
              castShadow
              receiveShadow
              geometry={nodes.ID196001_1.geometry}
              material={materials["material_3.001"]}
            />
          </group>
          <group name="instance_0023" position={[13.22, 2.98, -14.52]}>
            <mesh
              name="ID204001"
              castShadow
              receiveShadow
              geometry={nodes.ID204001.geometry}
              material={materials["material_2.001"]}
            />
            <mesh
              name="ID204001_1"
              castShadow
              receiveShadow
              geometry={nodes.ID204001_1.geometry}
              material={materials["material.001"]}
            />
          </group>
          <group name="instance_0024" position={[13.22, 2.98, -14.52]}>
            <mesh
              name="ID212001"
              castShadow
              receiveShadow
              geometry={nodes.ID212001.geometry}
              material={materials["material_2.001"]}
            />
            <mesh
              name="ID212001_1"
              castShadow
              receiveShadow
              geometry={nodes.ID212001_1.geometry}
              material={materials["material.001"]}
            />
          </group>
          <group name="instance_0025" position={[13.22, 2.98, -14.52]}>
            <mesh
              name="ID220001"
              castShadow
              receiveShadow
              geometry={nodes.ID220001.geometry}
              material={materials["material_2.001"]}
            />
            <mesh
              name="ID220001_1"
              castShadow
              receiveShadow
              geometry={nodes.ID220001_1.geometry}
              material={materials["material.001"]}
            />
          </group>
          <group name="instance_0026" position={[13.22, 2.98, -14.52]}>
            <mesh
              name="ID228001"
              castShadow
              receiveShadow
              geometry={nodes.ID228001.geometry}
              material={materials["material_2.001"]}
            />
            <mesh
              name="ID228001_1"
              castShadow
              receiveShadow
              geometry={nodes.ID228001_1.geometry}
              material={materials["material.001"]}
            />
          </group>
          <group name="instance_0027" position={[13.22, 2.98, -14.52]}>
            <mesh
              name="ID236001"
              castShadow
              receiveShadow
              geometry={nodes.ID236001.geometry}
              material={materials["material_2.001"]}
            />
            <mesh
              name="ID236001_1"
              castShadow
              receiveShadow
              geometry={nodes.ID236001_1.geometry}
              material={materials["material.001"]}
            />
          </group>
          <group name="instance_0028" position={[13.22, 2.98, -14.52]}>
            <mesh
              name="ID244001"
              castShadow
              receiveShadow
              geometry={nodes.ID244001.geometry}
              material={materials["material_2.001"]}
            />
            <mesh
              name="ID244001_1"
              castShadow
              receiveShadow
              geometry={nodes.ID244001_1.geometry}
              material={materials["material.001"]}
            />
          </group>
          <group name="instance_0029" position={[13.22, 2.98, -14.52]}>
            <mesh
              name="ID252001"
              castShadow
              receiveShadow
              geometry={nodes.ID252001.geometry}
              material={materials["material_2.001"]}
            />
            <mesh
              name="ID252001_1"
              castShadow
              receiveShadow
              geometry={nodes.ID252001_1.geometry}
              material={materials["material.001"]}
            />
          </group>
          <group name="instance_0030" position={[13.22, 2.98, -14.52]}>
            <mesh
              name="ID260001"
              castShadow
              receiveShadow
              geometry={nodes.ID260001.geometry}
              material={materials["material_2.001"]}
            />
            <mesh
              name="ID260001_1"
              castShadow
              receiveShadow
              geometry={nodes.ID260001_1.geometry}
              material={materials["material.001"]}
            />
          </group>
          <group name="instance_0031" position={[13.22, 2.98, -14.52]}>
            <mesh
              name="ID268001"
              castShadow
              receiveShadow
              geometry={nodes.ID268001.geometry}
              material={materials["material_2.001"]}
            />
            <mesh
              name="ID268001_1"
              castShadow
              receiveShadow
              geometry={nodes.ID268001_1.geometry}
              material={materials["material.001"]}
            />
          </group>
          <group name="instance_0032" position={[13.22, 2.98, -14.52]}>
            <mesh
              name="ID276001"
              castShadow
              receiveShadow
              geometry={nodes.ID276001.geometry}
              material={materials["material_2.001"]}
            />
            <mesh
              name="ID276001_1"
              castShadow
              receiveShadow
              geometry={nodes.ID276001_1.geometry}
              material={materials["material.001"]}
            />
          </group>
          <group name="instance_0033" position={[13.22, 2.98, -14.52]}>
            <mesh
              name="ID284001"
              castShadow
              receiveShadow
              geometry={nodes.ID284001.geometry}
              material={materials["material_2.001"]}
            />
            <mesh
              name="ID284001_1"
              castShadow
              receiveShadow
              geometry={nodes.ID284001_1.geometry}
              material={materials["material.001"]}
            />
          </group>
          <group name="instance_0034" position={[13.22, 2.98, -14.52]}>
            <mesh
              name="ID292001"
              castShadow
              receiveShadow
              geometry={nodes.ID292001.geometry}
              material={materials["material_2.001"]}
            />
            <mesh
              name="ID292001_1"
              castShadow
              receiveShadow
              geometry={nodes.ID292001_1.geometry}
              material={materials["material.001"]}
            />
          </group>
          <group name="instance_0035" position={[13.22, 2.98, -14.52]}>
            <mesh
              name="ID300001"
              castShadow
              receiveShadow
              geometry={nodes.ID300001.geometry}
              material={materials["material_2.001"]}
            />
            <mesh
              name="ID300001_1"
              castShadow
              receiveShadow
              geometry={nodes.ID300001_1.geometry}
              material={materials["material.001"]}
            />
          </group>
          <group name="instance_0036" position={[13.22, 2.98, -14.52]}>
            <mesh
              name="ID308001"
              castShadow
              receiveShadow
              geometry={nodes.ID308001.geometry}
              material={materials["material_2.001"]}
            />
            <mesh
              name="ID308001_1"
              castShadow
              receiveShadow
              geometry={nodes.ID308001_1.geometry}
              material={materials["material.001"]}
            />
          </group>
          <mesh
            name="instance_0037"
            castShadow
            receiveShadow
            geometry={nodes.instance_0037.geometry}
            material={materials["material_4.001"]}
            position={[13.22, 0, -14.52]}
          />
          <mesh
            name="instance_0038"
            castShadow
            receiveShadow
            geometry={nodes.instance_0038.geometry}
            material={materials["material_4.001"]}
            position={[13.22, 0, -14.52]}
          />
          <group name="instance_0039" position={[13.22, 0, -14.52]}>
            <mesh
              name="ID336001"
              castShadow
              receiveShadow
              geometry={nodes.ID336001.geometry}
              material={materials["material.001"]}
            />
            <mesh
              name="ID336001_1"
              castShadow
              receiveShadow
              geometry={nodes.ID336001_1.geometry}
              material={materials["material_5.001"]}
            />
          </group>
          <group name="instance_0040" position={[13.22, 0, -14.52]}>
            <mesh
              name="ID348001"
              castShadow
              receiveShadow
              geometry={nodes.ID348001.geometry}
              material={materials["material.001"]}
            />
            <mesh
              name="ID348001_1"
              castShadow
              receiveShadow
              geometry={nodes.ID348001_1.geometry}
              material={materials["material_5.001"]}
            />
          </group>
          <group name="instance_0041" position={[13.22, 0, -14.52]}>
            <mesh
              name="ID356001"
              castShadow
              receiveShadow
              geometry={nodes.ID356001.geometry}
              material={materials["material.001"]}
            />
            <mesh
              name="ID356001_1"
              castShadow
              receiveShadow
              geometry={nodes.ID356001_1.geometry}
              material={materials["material_5.001"]}
            />
          </group>
          <group name="instance_0042" position={[13.22, 0, -14.52]}>
            <mesh
              name="ID364001"
              castShadow
              receiveShadow
              geometry={nodes.ID364001.geometry}
              material={materials["material.001"]}
            />
            <mesh
              name="ID364001_1"
              castShadow
              receiveShadow
              geometry={nodes.ID364001_1.geometry}
              material={materials["material_5.001"]}
            />
          </group>
          <group name="instance_0043" position={[13.22, 0, -14.52]}>
            <mesh
              name="ID372001"
              castShadow
              receiveShadow
              geometry={nodes.ID372001.geometry}
              material={materials["material.001"]}
            />
            <mesh
              name="ID372001_1"
              castShadow
              receiveShadow
              geometry={nodes.ID372001_1.geometry}
              material={materials["material_5.001"]}
            />
          </group>
          <group name="instance_0044" position={[13.22, 0, -14.52]}>
            <mesh
              name="ID380001"
              castShadow
              receiveShadow
              geometry={nodes.ID380001.geometry}
              material={materials["material.001"]}
            />
            <mesh
              name="ID380001_1"
              castShadow
              receiveShadow
              geometry={nodes.ID380001_1.geometry}
              material={materials["material_5.001"]}
            />
          </group>
          <group name="instance_0045" position={[13.22, 0, -14.52]}>
            <mesh
              name="ID388001"
              castShadow
              receiveShadow
              geometry={nodes.ID388001.geometry}
              material={materials["material.001"]}
            />
            <mesh
              name="ID388001_1"
              castShadow
              receiveShadow
              geometry={nodes.ID388001_1.geometry}
              material={materials["material_5.001"]}
            />
          </group>
          <group name="instance_0046" position={[13.22, 0, -14.52]}>
            <mesh
              name="ID396001"
              castShadow
              receiveShadow
              geometry={nodes.ID396001.geometry}
              material={materials["material.001"]}
            />
            <mesh
              name="ID396001_1"
              castShadow
              receiveShadow
              geometry={nodes.ID396001_1.geometry}
              material={materials["material_5.001"]}
            />
          </group>
          <group name="instance_0047" position={[13.22, 0, -14.52]}>
            <mesh
              name="ID404001"
              castShadow
              receiveShadow
              geometry={nodes.ID404001.geometry}
              material={materials["material.001"]}
            />
            <mesh
              name="ID404001_1"
              castShadow
              receiveShadow
              geometry={nodes.ID404001_1.geometry}
              material={materials["material_5.001"]}
            />
          </group>
          <group name="instance_0048" position={[13.22, 0, -14.52]}>
            <mesh
              name="ID412001"
              castShadow
              receiveShadow
              geometry={nodes.ID412001.geometry}
              material={materials["material.001"]}
            />
            <mesh
              name="ID412001_1"
              castShadow
              receiveShadow
              geometry={nodes.ID412001_1.geometry}
              material={materials["material_5.001"]}
            />
          </group>
          <group name="instance_0049" position={[13.22, 0, -14.52]}>
            <mesh
              name="ID420001"
              castShadow
              receiveShadow
              geometry={nodes.ID420001.geometry}
              material={materials["material.001"]}
            />
            <mesh
              name="ID420001_1"
              castShadow
              receiveShadow
              geometry={nodes.ID420001_1.geometry}
              material={materials["material_5.001"]}
            />
          </group>
          <group name="instance_0050" position={[13.22, 0, -14.52]}>
            <mesh
              name="ID428001"
              castShadow
              receiveShadow
              geometry={nodes.ID428001.geometry}
              material={materials["material_2.001"]}
            />
            <mesh
              name="ID428001_1"
              castShadow
              receiveShadow
              geometry={nodes.ID428001_1.geometry}
              material={materials["material.001"]}
            />
          </group>
          <group name="instance_0051" position={[13.22, 0, -14.52]}>
            <mesh
              name="ID436001"
              castShadow
              receiveShadow
              geometry={nodes.ID436001.geometry}
              material={materials["material_2.001"]}
            />
            <mesh
              name="ID436001_1"
              castShadow
              receiveShadow
              geometry={nodes.ID436001_1.geometry}
              material={materials["material.001"]}
            />
          </group>
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/models/SamModel4.glb");