import React, { useRef, useEffect, useState, useLayoutEffect } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";
import url from "../assets/videos/screenRec.mp4"
import * as THREE from 'three';

export function SamModel(props) {
  const group = useRef();
  const { scene, nodes, materials, animations } = useGLTF("/models/Typing3.glb");
  const { actions } = useAnimations(animations, group);

  useEffect(() => {
    const animAction = actions['Armature|mixamo.com|Layer0'];
    console.log(animAction);
    animAction.play();

    // scene.traverse((element) => {
    //   if (['SkinnedMesh', 'Mesh'].includes(element.type)){
    //     element.castShadow = true;
    //     element.receiveShadow = true;
    //   }
    // });
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
        <group
          name="Sun"
          position={[0.14, 9.51, 3.01]}
          rotation={[-2.22, -0.14, 3.07]}
        />
        <pointLight position={[0, 10, 10]} intensity={1} color={'white'} />
        <group name="Armature" position={[0.9, -0.19, -4.13]} scale={4.5}>
          <primitive object={nodes.Hips} />
          <skinnedMesh
            name="Wolf3D_Teeth"
            castShadow
            receiveShadow
            frustumCulled={false}
            geometry={nodes.Wolf3D_Teeth.geometry}
            material={materials.Wolf3D_Teeth}
            skeleton={nodes.Wolf3D_Teeth.skeleton}
            morphTargetDictionary={nodes.Wolf3D_Teeth.morphTargetDictionary}
            morphTargetInfluences={nodes.Wolf3D_Teeth.morphTargetInfluences}
          />
          <skinnedMesh
            frustumCulled={false}
            name="Wolf3D_Glasses"
            castShadow
            receiveShadow
            geometry={nodes.Wolf3D_Glasses.geometry}
            material={materials["Wolf3D_Glasses.001"]}
            skeleton={nodes.Wolf3D_Glasses.skeleton}
          />
          <skinnedMesh
            name="Wolf3D_Body"
            castShadow
            receiveShadow
            frustumCulled={false}
            geometry={nodes.Wolf3D_Body.geometry}
            material={materials["Wolf3D_Body.001"]}
            skeleton={nodes.Wolf3D_Body.skeleton}
          />
          <skinnedMesh
            name="Wolf3D_Hair"
            castShadow
            receiveShadow
            frustumCulled={false}
            geometry={nodes.Wolf3D_Hair.geometry}
            material={materials["Wolf3D_Hair.001"]}
            skeleton={nodes.Wolf3D_Hair.skeleton}
          />
          <skinnedMesh
            name="EyeLeft"
            frustumCulled={false}
            geometry={nodes.EyeLeft.geometry}
            material={materials["Wolf3D_Eye.001"]}
            skeleton={nodes.EyeLeft.skeleton}
            morphTargetDictionary={nodes.EyeLeft.morphTargetDictionary}
            morphTargetInfluences={nodes.EyeLeft.morphTargetInfluences}
          />
          <skinnedMesh
            name="EyeRight"
            frustumCulled={false}
            geometry={nodes.EyeRight.geometry}
            material={materials["Wolf3D_Eye.001"]}
            skeleton={nodes.EyeRight.skeleton}
            morphTargetDictionary={nodes.EyeRight.morphTargetDictionary}
            morphTargetInfluences={nodes.EyeRight.morphTargetInfluences}
          />
          <skinnedMesh
            name="Wolf3D_Outfit_Footwear"
            castShadow
            receiveShadow
            frustumCulled={false}
            geometry={nodes.Wolf3D_Outfit_Footwear.geometry}
            material={materials["Wolf3D_Outfit_Footwear.001"]}
            skeleton={nodes.Wolf3D_Outfit_Footwear.skeleton}
          />
          <skinnedMesh
            name="Wolf3D_Outfit_Bottom"
            frustumCulled={false}
            geometry={nodes.Wolf3D_Outfit_Bottom.geometry}
            material={materials["Wolf3D_Outfit_Bottom.001"]}
            skeleton={nodes.Wolf3D_Outfit_Bottom.skeleton}
          />
          <skinnedMesh
            name="Wolf3D_Outfit_Top"
            frustumCulled={false}
            geometry={nodes.Wolf3D_Outfit_Top.geometry}
            material={materials["Wolf3D_Outfit_Top.001"]}
            skeleton={nodes.Wolf3D_Outfit_Top.skeleton}
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
            name="Cube005_1"
            castShadow
            receiveShadow
            geometry={nodes.Cube005_1.geometry}
            material={materials.Computer}
          />
          <mesh
            name="Cube005_2"
            castShadow
            receiveShadow
            geometry={nodes.Cube005_2.geometry}
            material={materials.Screen}
          />
        </group>
        <mesh
          name="Table_Foot"
          castShadow
          receiveShadow
          geometry={nodes.Table_Foot.geometry}
          material={materials["Table Leg"]}
          position={[3.5, 0.02, -0.03]}
          scale={[0.3, 0.07, 1.67]}
        />
        <group
          name="Table_Leg"
          position={[3.5, 0.17, -0.03]}
          scale={[0.33, -0.12, 0.29]}
        >
          <mesh
            name="Cube003_1"
            castShadow
            receiveShadow
            geometry={nodes.Cube003_1.geometry}
            material={materials["Table Leg"]}
          />
          <mesh
            name="Cube003_2"
            castShadow
            receiveShadow
            geometry={nodes.Cube003_2.geometry}
            material={materials["Table Leg Black"]}
          />
        </group>
        <mesh
          name="Table_Top"
          castShadow
          receiveShadow
          geometry={nodes.Table_Top.geometry}
          material={materials["Table Top"]}
          position={[0.09, 2.82, -0.25]}
          scale={[4.41, -0.13, 1.75]}
        />
        <mesh
          name="Table_Top001"
          castShadow
          receiveShadow
          geometry={nodes.Table_Top001.geometry}
          material={materials["Table Top"]}
          position={[0.7, 3.62, 0.44]}
          scale={[3.12, -0.08, 0.61]}
        />
        <mesh
          name="Table_Top004"
          castShadow
          receiveShadow
          geometry={nodes.Table_Top004.geometry}
          material={materials.Keyboard}
          position={[-0.32, 3.01, -0.9]}
          rotation={[0, 0.01, 0]}
          scale={[-0.37, -0.05, 0.23]}
        />
        <mesh
          name="Board"
          castShadow
          receiveShadow
          geometry={nodes.Board.geometry}
          material={materials.Keyboard}
          position={[1.23, 3.01, -1.07]}
          scale={[1.08, -0.05, 0.49]}
        />
        <mesh
          name="Cube001"
          castShadow
          receiveShadow
          geometry={nodes.Cube001.geometry}
          material={materials.Key}
          position={[2.16, 3.07, -0.7]}
          rotation={[-0.04, 0, 0]}
          scale={[-0.05, 0.03, -0.06]}
        />
        <mesh
          name="Cube002"
          castShadow
          receiveShadow
          geometry={nodes.Cube002.geometry}
          material={materials.Key}
          position={[2.16, 3.07, -0.7]}
          rotation={[-0.04, 0, 0]}
          scale={[-0.05, 0.03, -0.06]}
        />
        <mesh
          name="Cube003"
          castShadow
          receiveShadow
          geometry={nodes.Cube003.geometry}
          material={materials.Key}
          position={[2.16, 3.07, -0.7]}
          rotation={[-0.04, 0, 0]}
          scale={[-0.05, 0.03, -0.06]}
        />
        <mesh
          name="Cube004"
          castShadow
          receiveShadow
          geometry={nodes.Cube004.geometry}
          material={materials.Key}
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
          material={materials.Key}
          position={[2.16, 3.07, -0.7]}
          rotation={[-0.04, 0, 0]}
          scale={[-0.05, 0.03, -0.06]}
        />
        <mesh
          name="Cube007"
          castShadow
          receiveShadow
          geometry={nodes.Cube007.geometry}
          material={materials.Key}
          position={[2.16, 3.07, -0.7]}
          rotation={[-0.04, 0, 0]}
          scale={[-0.05, 0.03, -0.06]}
        />
        <mesh
          name="Cube008"
          castShadow
          receiveShadow
          geometry={nodes.Cube008.geometry}
          material={materials.Key}
          position={[2.16, 3.07, -0.7]}
          rotation={[-0.04, 0, 0]}
          scale={[-0.05, 0.03, -0.06]}
        />
        <mesh
          name="Cube009"
          castShadow
          receiveShadow
          geometry={nodes.Cube009.geometry}
          material={materials.Key}
          position={[2.16, 3.07, -0.7]}
          rotation={[-0.04, 0, 0]}
          scale={[-0.05, 0.03, -0.06]}
        />
        <mesh
          name="Cube010"
          castShadow
          receiveShadow
          geometry={nodes.Cube010.geometry}
          material={materials.Key}
          position={[2.16, 3.07, -0.7]}
          rotation={[-0.04, 0, 0]}
          scale={[-0.05, 0.03, -0.06]}
        />
        <mesh
          name="Cube011"
          castShadow
          receiveShadow
          geometry={nodes.Cube011.geometry}
          material={materials.Key}
          position={[1.38, 3.04, -1.45]}
          rotation={[-0.04, 0, 0]}
          scale={[0.36, 0.02, -0.05]}
        />
        <mesh
          name="Cube012"
          castShadow
          receiveShadow
          geometry={nodes.Cube012.geometry}
          material={materials.Key}
          position={[2, 3.04, -1.3]}
          rotation={[-0.04, 0, 0]}
          scale={[0.21, 0.02, -0.05]}
        />
        <mesh
          name="Cube013"
          castShadow
          receiveShadow
          geometry={nodes.Cube013.geometry}
          material={materials.Key}
          position={[2.08, 3.05, -1.15]}
          rotation={[-0.04, 0, 0]}
          scale={[0.13, 0.02, -0.05]}
        />
        <mesh
          name="Cube014"
          castShadow
          receiveShadow
          geometry={nodes.Cube014.geometry}
          material={materials.Key}
          position={[2.16, 3.07, -0.7]}
          rotation={[-0.04, 0, 0]}
          scale={[-0.05, 0.03, -0.06]}
        />
        <mesh
          name="Cube015"
          castShadow
          receiveShadow
          geometry={nodes.Cube015.geometry}
          material={materials.Key}
          position={[2.16, 3.07, -0.7]}
          rotation={[-0.04, 0, 0]}
          scale={[-0.05, 0.03, -0.06]}
        />
        <mesh
          name="Cube016"
          castShadow
          receiveShadow
          geometry={nodes.Cube016.geometry}
          material={materials.Key}
          position={[2.16, 3.07, -0.7]}
          rotation={[-0.04, 0, 0]}
          scale={[-0.05, 0.03, -0.06]}
        />
        <mesh
          name="Cube017"
          castShadow
          receiveShadow
          geometry={nodes.Cube017.geometry}
          material={materials.Key}
          position={[2.16, 3.07, -0.7]}
          rotation={[-0.04, 0, 0]}
          scale={[-0.05, 0.03, -0.06]}
        />
        <mesh
          name="Cube018"
          castShadow
          receiveShadow
          geometry={nodes.Cube018.geometry}
          material={materials.Key}
          position={[2.16, 3.07, -0.7]}
          rotation={[-0.04, 0, 0]}
          scale={[-0.05, 0.03, -0.06]}
        />
        <mesh
          name="Cube019"
          castShadow
          receiveShadow
          geometry={nodes.Cube019.geometry}
          material={materials.Key}
          position={[2.16, 3.07, -0.7]}
          rotation={[-0.04, 0, 0]}
          scale={[-0.05, 0.03, -0.06]}
        />
        <mesh
          name="Cube020"
          castShadow
          receiveShadow
          geometry={nodes.Cube020.geometry}
          material={materials.Key}
          position={[2.16, 3.07, -0.7]}
          rotation={[-0.04, 0, 0]}
          scale={[-0.05, 0.03, -0.06]}
        />
        <mesh
          name="Cube021"
          castShadow
          receiveShadow
          geometry={nodes.Cube021.geometry}
          material={materials.Key}
          position={[2.16, 3.07, -0.7]}
          rotation={[-0.04, 0, 0]}
          scale={[-0.05, 0.03, -0.06]}
        />
        <mesh
          name="Cube022"
          castShadow
          receiveShadow
          geometry={nodes.Cube022.geometry}
          material={materials.Key}
          position={[2.16, 3.07, -0.7]}
          rotation={[-0.04, 0, 0]}
          scale={[-0.05, 0.03, -0.06]}
        />
        <mesh
          name="Cube023"
          castShadow
          receiveShadow
          geometry={nodes.Cube023.geometry}
          material={materials.Key}
          position={[2.16, 3.07, -0.7]}
          rotation={[-0.04, 0, 0]}
          scale={[-0.05, 0.03, -0.06]}
        />
        <mesh
          name="Cube024"
          castShadow
          receiveShadow
          geometry={nodes.Cube024.geometry}
          material={materials.Key}
          position={[2.08, 3.06, -1]}
          rotation={[-0.04, 0, 0]}
          scale={[0.13, 0.02, -0.05]}
        />
        <mesh
          name="Cube025"
          castShadow
          receiveShadow
          geometry={nodes.Cube025.geometry}
          material={materials.Key}
          position={[2.15, 3.07, -0.68]}
          rotation={[-0.04, 0, 0]}
          scale={[-0.05, 0.03, -0.06]}
        />
        <mesh
          name="Cube026"
          castShadow
          receiveShadow
          geometry={nodes.Cube026.geometry}
          material={materials.Key}
          position={[2.15, 3.07, -0.68]}
          rotation={[-0.04, 0, 0]}
          scale={[-0.05, 0.03, -0.06]}
        />
        <mesh
          name="Cube029"
          castShadow
          receiveShadow
          geometry={nodes.Cube029.geometry}
          material={materials.Key}
          position={[2.16, 3.07, -0.7]}
          rotation={[-0.04, 0, 0]}
          scale={[-0.05, 0.03, -0.06]}
        />
        <mesh
          name="Cube030"
          castShadow
          receiveShadow
          geometry={nodes.Cube030.geometry}
          material={materials.Key}
          position={[2.16, 3.07, -0.7]}
          rotation={[-0.04, 0, 0]}
          scale={[-0.05, 0.03, -0.06]}
        />
        <mesh
          name="Cube031"
          castShadow
          receiveShadow
          geometry={nodes.Cube031.geometry}
          material={materials.Key}
          position={[2.16, 3.07, -0.7]}
          rotation={[-0.04, 0, 0]}
          scale={[-0.05, 0.03, -0.06]}
        />
        <mesh
          name="Cube032"
          castShadow
          receiveShadow
          geometry={nodes.Cube032.geometry}
          material={materials.Key}
          position={[2.16, 3.07, -0.7]}
          rotation={[-0.04, 0, 0]}
          scale={[-0.05, 0.03, -0.06]}
        />
        <mesh
          name="Cube033"
          castShadow
          receiveShadow
          geometry={nodes.Cube033.geometry}
          material={materials.Key}
          position={[2.16, 3.07, -0.7]}
          rotation={[-0.04, 0, 0]}
          scale={[-0.05, 0.03, -0.06]}
        />
        <mesh
          name="Cube034"
          castShadow
          receiveShadow
          geometry={nodes.Cube034.geometry}
          material={materials.Key}
          position={[2.16, 3.07, -0.7]}
          rotation={[-0.04, 0, 0]}
          scale={[-0.05, 0.03, -0.06]}
        />
        <mesh
          name="Cube035"
          castShadow
          receiveShadow
          geometry={nodes.Cube035.geometry}
          material={materials.Key}
          position={[2.16, 3.07, -0.7]}
          rotation={[-0.04, 0, 0]}
          scale={[-0.05, 0.03, -0.06]}
        />
        <mesh
          name="Cube036"
          castShadow
          receiveShadow
          geometry={nodes.Cube036.geometry}
          material={materials.Key}
          position={[2.16, 3.07, -0.7]}
          rotation={[-0.04, 0, 0]}
          scale={[-0.05, 0.03, -0.06]}
        />
        <mesh
          name="Cube038"
          castShadow
          receiveShadow
          geometry={nodes.Cube038.geometry}
          material={materials.Key}
          position={[2.15, 3.07, -0.68]}
          rotation={[-0.04, 0, 0]}
          scale={[-0.05, 0.03, -0.06]}
        />
        <mesh
          name="Cube039"
          castShadow
          receiveShadow
          geometry={nodes.Cube039.geometry}
          material={materials.Key}
          position={[2.15, 3.07, -0.68]}
          rotation={[-0.04, 0, 0]}
          scale={[-0.05, 0.03, -0.06]}
        />
        <mesh
          name="Cube042"
          castShadow
          receiveShadow
          geometry={nodes.Cube042.geometry}
          material={materials.Key}
          position={[2.16, 3.07, -0.7]}
          rotation={[-0.04, 0, 0]}
          scale={[-0.05, 0.03, -0.06]}
        />
        <mesh
          name="Cube043"
          castShadow
          receiveShadow
          geometry={nodes.Cube043.geometry}
          material={materials.Key}
          position={[2.16, 3.07, -0.7]}
          rotation={[-0.04, 0, 0]}
          scale={[-0.05, 0.03, -0.06]}
        />
        <mesh
          name="Cube044"
          castShadow
          receiveShadow
          geometry={nodes.Cube044.geometry}
          material={materials.Key}
          position={[2.16, 3.07, -0.7]}
          rotation={[-0.04, 0, 0]}
          scale={[-0.05, 0.03, -0.06]}
        />
        <mesh
          name="Cube045"
          castShadow
          receiveShadow
          geometry={nodes.Cube045.geometry}
          material={materials.Key}
          position={[2.16, 3.07, -0.7]}
          rotation={[-0.04, 0, 0]}
          scale={[-0.05, 0.03, -0.06]}
        />
        <mesh
          name="Cube046"
          castShadow
          receiveShadow
          geometry={nodes.Cube046.geometry}
          material={materials.Key}
          position={[2.16, 3.07, -0.7]}
          rotation={[-0.04, 0, 0]}
          scale={[-0.05, 0.03, -0.06]}
        />
        <mesh
          name="Cube047"
          castShadow
          receiveShadow
          geometry={nodes.Cube047.geometry}
          material={materials.Key}
          position={[2.16, 3.07, -0.7]}
          rotation={[-0.04, 0, 0]}
          scale={[-0.05, 0.03, -0.06]}
        />
        <mesh
          name="Cube048"
          castShadow
          receiveShadow
          geometry={nodes.Cube048.geometry}
          material={materials.Key}
          position={[2.16, 3.07, -0.7]}
          rotation={[-0.04, 0, 0]}
          scale={[-0.05, 0.03, -0.06]}
        />
        <mesh
          name="Cube049"
          castShadow
          receiveShadow
          geometry={nodes.Cube049.geometry}
          material={materials.Key}
          position={[2.16, 3.07, -0.7]}
          rotation={[-0.04, 0, 0]}
          scale={[-0.05, 0.03, -0.06]}
        />
        <mesh
          name="Cube051"
          castShadow
          receiveShadow
          geometry={nodes.Cube051.geometry}
          material={materials.Key}
          position={[2.15, 3.07, -0.68]}
          rotation={[-0.04, 0, 0]}
          scale={[-0.05, 0.03, -0.06]}
        />
        <mesh
          name="Cube052"
          castShadow
          receiveShadow
          geometry={nodes.Cube052.geometry}
          material={materials.Key}
          position={[2.15, 3.07, -0.68]}
          rotation={[-0.04, 0, 0]}
          scale={[-0.05, 0.03, -0.06]}
        />
        <mesh
          name="Cube056"
          castShadow
          receiveShadow
          geometry={nodes.Cube056.geometry}
          material={materials.Key}
          position={[2.16, 3.07, -0.7]}
          rotation={[-0.04, 0, 0]}
          scale={[-0.05, 0.03, -0.06]}
        />
        <mesh
          name="Cube057"
          castShadow
          receiveShadow
          geometry={nodes.Cube057.geometry}
          material={materials.Key}
          position={[2.16, 3.07, -0.7]}
          rotation={[-0.04, 0, 0]}
          scale={[-0.05, 0.03, -0.06]}
        />
        <mesh
          name="Cube058"
          castShadow
          receiveShadow
          geometry={nodes.Cube058.geometry}
          material={materials.Key}
          position={[2.16, 3.07, -0.7]}
          rotation={[-0.04, 0, 0]}
          scale={[-0.05, 0.03, -0.06]}
        />
        <mesh
          name="Cube059"
          castShadow
          receiveShadow
          geometry={nodes.Cube059.geometry}
          material={materials.Key}
          position={[2.16, 3.07, -0.7]}
          rotation={[-0.04, 0, 0]}
          scale={[-0.05, 0.03, -0.06]}
        />
        <mesh
          name="Cube060"
          castShadow
          receiveShadow
          geometry={nodes.Cube060.geometry}
          material={materials.Key}
          position={[2.16, 3.07, -0.7]}
          rotation={[-0.04, 0, 0]}
          scale={[-0.05, 0.03, -0.06]}
        />
        <mesh
          name="Cube061"
          castShadow
          receiveShadow
          geometry={nodes.Cube061.geometry}
          material={materials.Key}
          position={[2.16, 3.07, -0.7]}
          rotation={[-0.04, 0, 0]}
          scale={[-0.05, 0.03, -0.06]}
        />
        <mesh
          name="Cube062"
          castShadow
          receiveShadow
          geometry={nodes.Cube062.geometry}
          material={materials.Key}
          position={[2.16, 3.07, -0.7]}
          rotation={[-0.04, 0, 0]}
          scale={[-0.05, 0.03, -0.06]}
        />
        <mesh
          name="Cube063"
          castShadow
          receiveShadow
          geometry={nodes.Cube063.geometry}
          material={materials.Key}
          position={[2.16, 3.07, -0.7]}
          rotation={[-0.04, 0, 0]}
          scale={[-0.05, 0.03, -0.06]}
        />
        <mesh
          name="Cube064"
          castShadow
          receiveShadow
          geometry={nodes.Cube064.geometry}
          material={materials.Key}
          position={[2.15, 3.07, -0.68]}
          rotation={[-0.04, 0, 0]}
          scale={[-0.05, 0.03, -0.06]}
        />
        <mesh
          name="Cube065"
          castShadow
          receiveShadow
          geometry={nodes.Cube065.geometry}
          material={materials.Key}
          position={[2.15, 3.07, -0.68]}
          rotation={[-0.04, 0, 0]}
          scale={[-0.05, 0.03, -0.06]}
        />
        <mesh
          name="Cube066"
          castShadow
          receiveShadow
          geometry={nodes.Cube066.geometry}
          material={materials.Key}
          position={[2.16, 3.07, -0.7]}
          rotation={[-0.04, 0, 0]}
          scale={[-0.05, 0.03, -0.06]}
        />
        <mesh
          name="Cube067"
          castShadow
          receiveShadow
          geometry={nodes.Cube067.geometry}
          material={materials.Key}
          position={[2.16, 3.07, -0.7]}
          rotation={[-0.04, 0, 0]}
          scale={[-0.05, 0.03, -0.06]}
        />
        <mesh
          name="Cube068"
          castShadow
          receiveShadow
          geometry={nodes.Cube068.geometry}
          material={materials.Key}
          position={[2.16, 3.07, -0.7]}
          rotation={[-0.04, 0, 0]}
          scale={[-0.05, 0.03, -0.06]}
        />
        <mesh
          name="Cube074"
          castShadow
          receiveShadow
          geometry={nodes.Cube074.geometry}
          material={materials.Key}
          position={[2.16, 3.07, -0.7]}
          rotation={[-0.04, 0, 0]}
          scale={[-0.05, 0.03, -0.06]}
        />
        <mesh
          name="Cube075"
          castShadow
          receiveShadow
          geometry={nodes.Cube075.geometry}
          material={materials.Key}
          position={[2.16, 3.07, -0.7]}
          rotation={[-0.04, 0, 0]}
          scale={[-0.05, 0.03, -0.06]}
        />
        <mesh
          name="Cube076"
          castShadow
          receiveShadow
          geometry={nodes.Cube076.geometry}
          material={materials.Key}
          position={[2.16, 3.07, -0.7]}
          rotation={[-0.04, 0, 0]}
          scale={[-0.05, 0.03, -0.06]}
        />
        <mesh
          name="Cube077"
          castShadow
          receiveShadow
          geometry={nodes.Cube077.geometry}
          material={materials.Key}
          position={[2.16, 3.07, -0.7]}
          rotation={[-0.04, 0, 0]}
          scale={[-0.05, 0.03, -0.06]}
        />
        <group name="SketchUp" position={[-0.53, -0.5, -2.54]} scale={0.11}>
          <mesh
            name="ID464"
            castShadow
            receiveShadow
            geometry={nodes.ID464.geometry}
            material={materials.material}
          />
          <mesh
            name="ID464_1"
            castShadow
            receiveShadow
            geometry={nodes.ID464_1.geometry}
            material={materials.material_0}
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
            material={materials.material_2}
            position={[13.22, 2.98, -14.52]}
          />
          <group name="instance_0001" position={[13.22, 2.98, -14.52]}>
            <mesh
              name="ID20"
              castShadow
              receiveShadow
              geometry={nodes.ID20.geometry}
              material={materials.material}
            />
            <mesh
              name="ID20_1"
              castShadow
              receiveShadow
              geometry={nodes.ID20_1.geometry}
              material={materials.material_3}
            />
          </group>
          <mesh
            name="instance_0002"
            castShadow
            receiveShadow
            geometry={nodes.instance_0002.geometry}
            material={materials.material_2}
            position={[13.22, 2.98, -14.52]}
          />
          <group
            name="instance_0003"
            position={[13.22, 6.76, -14.52]}
            scale={[1, 0.57, 1]}
          >
            <mesh
              name="ID40"
              castShadow
              receiveShadow
              geometry={nodes.ID40.geometry}
              material={materials.material}
            />
            <mesh
              name="ID40_1"
              castShadow
              receiveShadow
              geometry={nodes.ID40_1.geometry}
              material={materials.material_1}
            />
          </group>
          <group name="instance_0004" position={[13.22, 2.98, -14.52]}>
            <mesh
              name="ID52"
              castShadow
              receiveShadow
              geometry={nodes.ID52.geometry}
              material={materials.material}
            />
            <mesh
              name="ID52_1"
              castShadow
              receiveShadow
              geometry={nodes.ID52_1.geometry}
              material={materials.material_3}
            />
          </group>
          <group name="instance_0005" position={[13.22, 2.98, -14.52]}>
            <mesh
              name="ID60"
              castShadow
              receiveShadow
              geometry={nodes.ID60.geometry}
              material={materials.material}
            />
            <mesh
              name="ID60_1"
              castShadow
              receiveShadow
              geometry={nodes.ID60_1.geometry}
              material={materials.material_3}
            />
          </group>
          <group name="instance_0006" position={[13.22, 2.98, -14.52]}>
            <mesh
              name="ID68"
              castShadow
              receiveShadow
              geometry={nodes.ID68.geometry}
              material={materials.material}
            />
            <mesh
              name="ID68_1"
              castShadow
              receiveShadow
              geometry={nodes.ID68_1.geometry}
              material={materials.material_3}
            />
          </group>
          <group name="instance_0007" position={[13.22, 2.98, -14.52]}>
            <mesh
              name="ID76"
              castShadow
              receiveShadow
              geometry={nodes.ID76.geometry}
              material={materials.material}
            />
            <mesh
              name="ID76_1"
              castShadow
              receiveShadow
              geometry={nodes.ID76_1.geometry}
              material={materials.material_3}
            />
          </group>
          <group name="instance_0008" position={[13.22, 2.98, -14.52]}>
            <mesh
              name="ID84"
              castShadow
              receiveShadow
              geometry={nodes.ID84.geometry}
              material={materials.material}
            />
            <mesh
              name="ID84_1"
              castShadow
              receiveShadow
              geometry={nodes.ID84_1.geometry}
              material={materials.material_3}
            />
          </group>
          <group name="instance_0009" position={[13.22, 2.98, -14.52]}>
            <mesh
              name="ID92"
              castShadow
              receiveShadow
              geometry={nodes.ID92.geometry}
              material={materials.material}
            />
            <mesh
              name="ID92_1"
              castShadow
              receiveShadow
              geometry={nodes.ID92_1.geometry}
              material={materials.material_3}
            />
          </group>
          <group name="instance_0010" position={[13.22, 2.98, -14.52]}>
            <mesh
              name="ID100"
              castShadow
              receiveShadow
              geometry={nodes.ID100.geometry}
              material={materials.material}
            />
            <mesh
              name="ID100_1"
              castShadow
              receiveShadow
              geometry={nodes.ID100_1.geometry}
              material={materials.material_3}
            />
          </group>
          <group name="instance_0011" position={[13.22, 2.98, -14.52]}>
            <mesh
              name="ID108"
              castShadow
              receiveShadow
              geometry={nodes.ID108.geometry}
              material={materials.material}
            />
            <mesh
              name="ID108_1"
              castShadow
              receiveShadow
              geometry={nodes.ID108_1.geometry}
              material={materials.material_3}
            />
          </group>
          <group name="instance_0012" position={[13.22, 2.98, -14.52]}>
            <mesh
              name="ID116"
              castShadow
              receiveShadow
              geometry={nodes.ID116.geometry}
              material={materials.material}
            />
            <mesh
              name="ID116_1"
              castShadow
              receiveShadow
              geometry={nodes.ID116_1.geometry}
              material={materials.material_3}
            />
          </group>
          <group name="instance_0013" position={[13.22, 2.98, -14.52]}>
            <mesh
              name="ID124"
              castShadow
              receiveShadow
              geometry={nodes.ID124.geometry}
              material={materials.material}
            />
            <mesh
              name="ID124_1"
              castShadow
              receiveShadow
              geometry={nodes.ID124_1.geometry}
              material={materials.material_3}
            />
          </group>
          <group name="instance_0014" position={[13.22, 2.98, -14.52]}>
            <mesh
              name="ID132"
              castShadow
              receiveShadow
              geometry={nodes.ID132.geometry}
              material={materials.material}
            />
            <mesh
              name="ID132_1"
              castShadow
              receiveShadow
              geometry={nodes.ID132_1.geometry}
              material={materials.material_3}
            />
          </group>
          <group name="instance_0015" position={[13.22, 2.98, -14.52]}>
            <mesh
              name="ID140"
              castShadow
              receiveShadow
              geometry={nodes.ID140.geometry}
              material={materials.material_2}
            />
            <mesh
              name="ID140_1"
              castShadow
              receiveShadow
              geometry={nodes.ID140_1.geometry}
              material={materials.material}
            />
          </group>
          <group name="instance_0016" position={[13.22, 2.98, -14.52]}>
            <mesh
              name="ID148"
              castShadow
              receiveShadow
              geometry={nodes.ID148.geometry}
              material={materials.material_2}
            />
            <mesh
              name="ID148_1"
              castShadow
              receiveShadow
              geometry={nodes.ID148_1.geometry}
              material={materials.material}
            />
          </group>
          <group name="instance_0017" position={[13.22, 2.98, -14.52]}>
            <mesh
              name="ID156"
              castShadow
              receiveShadow
              geometry={nodes.ID156.geometry}
              material={materials.material_2}
            />
            <mesh
              name="ID156_1"
              castShadow
              receiveShadow
              geometry={nodes.ID156_1.geometry}
              material={materials.material}
            />
          </group>
          <group name="instance_0018" position={[13.22, 2.98, -14.52]}>
            <mesh
              name="ID164"
              castShadow
              receiveShadow
              geometry={nodes.ID164.geometry}
              material={materials.material_2}
            />
            <mesh
              name="ID164_1"
              castShadow
              receiveShadow
              geometry={nodes.ID164_1.geometry}
              material={materials.material}
            />
          </group>
          <group name="instance_0019" position={[13.22, 2.98, -14.52]}>
            <mesh
              name="ID172"
              castShadow
              receiveShadow
              geometry={nodes.ID172.geometry}
              material={materials.material_2}
            />
            <mesh
              name="ID172_1"
              castShadow
              receiveShadow
              geometry={nodes.ID172_1.geometry}
              material={materials.material}
            />
          </group>
          <group name="instance_0020" position={[13.22, 2.98, -14.52]}>
            <mesh
              name="ID180"
              castShadow
              receiveShadow
              geometry={nodes.ID180.geometry}
              material={materials.material_2}
            />
            <mesh
              name="ID180_1"
              castShadow
              receiveShadow
              geometry={nodes.ID180_1.geometry}
              material={materials.material}
            />
          </group>
          <group name="instance_0021" position={[13.22, 2.98, -14.52]}>
            <mesh
              name="ID188"
              castShadow
              receiveShadow
              geometry={nodes.ID188.geometry}
              material={materials.material}
            />
            <mesh
              name="ID188_1"
              castShadow
              receiveShadow
              geometry={nodes.ID188_1.geometry}
              material={materials.material_3}
            />
          </group>
          <group name="instance_0022" position={[13.22, 2.98, -14.52]}>
            <mesh
              name="ID196"
              castShadow
              receiveShadow
              geometry={nodes.ID196.geometry}
              material={materials.material}
            />
            <mesh
              name="ID196_1"
              castShadow
              receiveShadow
              geometry={nodes.ID196_1.geometry}
              material={materials.material_3}
            />
          </group>
          <group name="instance_0023" position={[13.22, 2.98, -14.52]}>
            <mesh
              name="ID204"
              castShadow
              receiveShadow
              geometry={nodes.ID204.geometry}
              material={materials.material_2}
            />
            <mesh
              name="ID204_1"
              castShadow
              receiveShadow
              geometry={nodes.ID204_1.geometry}
              material={materials.material}
            />
          </group>
          <group name="instance_0024" position={[13.22, 2.98, -14.52]}>
            <mesh
              name="ID212"
              castShadow
              receiveShadow
              geometry={nodes.ID212.geometry}
              material={materials.material_2}
            />
            <mesh
              name="ID212_1"
              castShadow
              receiveShadow
              geometry={nodes.ID212_1.geometry}
              material={materials.material}
            />
          </group>
          <group name="instance_0025" position={[13.22, 2.98, -14.52]}>
            <mesh
              name="ID220"
              castShadow
              receiveShadow
              geometry={nodes.ID220.geometry}
              material={materials.material_2}
            />
            <mesh
              name="ID220_1"
              castShadow
              receiveShadow
              geometry={nodes.ID220_1.geometry}
              material={materials.material}
            />
          </group>
          <group name="instance_0026" position={[13.22, 2.98, -14.52]}>
            <mesh
              name="ID228"
              castShadow
              receiveShadow
              geometry={nodes.ID228.geometry}
              material={materials.material_2}
            />
            <mesh
              name="ID228_1"
              castShadow
              receiveShadow
              geometry={nodes.ID228_1.geometry}
              material={materials.material}
            />
          </group>
          <group name="instance_0027" position={[13.22, 2.98, -14.52]}>
            <mesh
              name="ID236"
              castShadow
              receiveShadow
              geometry={nodes.ID236.geometry}
              material={materials.material_2}
            />
            <mesh
              name="ID236_1"
              castShadow
              receiveShadow
              geometry={nodes.ID236_1.geometry}
              material={materials.material}
            />
          </group>
          <group name="instance_0028" position={[13.22, 2.98, -14.52]}>
            <mesh
              name="ID244"
              castShadow
              receiveShadow
              geometry={nodes.ID244.geometry}
              material={materials.material_2}
            />
            <mesh
              name="ID244_1"
              castShadow
              receiveShadow
              geometry={nodes.ID244_1.geometry}
              material={materials.material}
            />
          </group>
          <group name="instance_0029" position={[13.22, 2.98, -14.52]}>
            <mesh
              name="ID252"
              castShadow
              receiveShadow
              geometry={nodes.ID252.geometry}
              material={materials.material_2}
            />
            <mesh
              name="ID252_1"
              castShadow
              receiveShadow
              geometry={nodes.ID252_1.geometry}
              material={materials.material}
            />
          </group>
          <group name="instance_0030" position={[13.22, 2.98, -14.52]}>
            <mesh
              name="ID260"
              castShadow
              receiveShadow
              geometry={nodes.ID260.geometry}
              material={materials.material_2}
            />
            <mesh
              name="ID260_1"
              castShadow
              receiveShadow
              geometry={nodes.ID260_1.geometry}
              material={materials.material}
            />
          </group>
          <group name="instance_0031" position={[13.22, 2.98, -14.52]}>
            <mesh
              name="ID268"
              castShadow
              receiveShadow
              geometry={nodes.ID268.geometry}
              material={materials.material_2}
            />
            <mesh
              name="ID268_1"
              castShadow
              receiveShadow
              geometry={nodes.ID268_1.geometry}
              material={materials.material}
            />
          </group>
          <group name="instance_0032" position={[13.22, 2.98, -14.52]}>
            <mesh
              name="ID276"
              castShadow
              receiveShadow
              geometry={nodes.ID276.geometry}
              material={materials.material_2}
            />
            <mesh
              name="ID276_1"
              castShadow
              receiveShadow
              geometry={nodes.ID276_1.geometry}
              material={materials.material}
            />
          </group>
          <group name="instance_0033" position={[13.22, 2.98, -14.52]}>
            <mesh
              name="ID284"
              castShadow
              receiveShadow
              geometry={nodes.ID284.geometry}
              material={materials.material_2}
            />
            <mesh
              name="ID284_1"
              castShadow
              receiveShadow
              geometry={nodes.ID284_1.geometry}
              material={materials.material}
            />
          </group>
          <group name="instance_0034" position={[13.22, 2.98, -14.52]}>
            <mesh
              name="ID292"
              castShadow
              receiveShadow
              geometry={nodes.ID292.geometry}
              material={materials.material_2}
            />
            <mesh
              name="ID292_1"
              castShadow
              receiveShadow
              geometry={nodes.ID292_1.geometry}
              material={materials.material}
            />
          </group>
          <group name="instance_0035" position={[13.22, 2.98, -14.52]}>
            <mesh
              name="ID300"
              castShadow
              receiveShadow
              geometry={nodes.ID300.geometry}
              material={materials.material_2}
            />
            <mesh
              name="ID300_1"
              castShadow
              receiveShadow
              geometry={nodes.ID300_1.geometry}
              material={materials.material}
            />
          </group>
          <group name="instance_0036" position={[13.22, 2.98, -14.52]}>
            <mesh
              name="ID308"
              castShadow
              receiveShadow
              geometry={nodes.ID308.geometry}
              material={materials.material_2}
            />
            <mesh
              name="ID308_1"
              castShadow
              receiveShadow
              geometry={nodes.ID308_1.geometry}
              material={materials.material}
            />
          </group>
          <group name="instance_0037" position={[13.22, 0, -14.52]}>
            <mesh
              name="ID316"
              castShadow
              receiveShadow
              geometry={nodes.ID316.geometry}
              material={materials.material_4}
            />
            <mesh
              name="ID316_1"
              castShadow
              receiveShadow
              geometry={nodes.ID316_1.geometry}
              material={materials.material_4}
            />
          </group>
          <group name="instance_0038" position={[13.22, 0, -14.52]}>
            <mesh
              name="ID328"
              castShadow
              receiveShadow
              geometry={nodes.ID328.geometry}
              material={materials.material_4}
            />
            <mesh
              name="ID328_1"
              castShadow
              receiveShadow
              geometry={nodes.ID328_1.geometry}
              material={materials.material_4}
            />
          </group>
          <group name="instance_0039" position={[13.22, 0, -14.52]}>
            <mesh
              name="ID336"
              castShadow
              receiveShadow
              geometry={nodes.ID336.geometry}
              material={materials.material}
            />
            <mesh
              name="ID336_1"
              castShadow
              receiveShadow
              geometry={nodes.ID336_1.geometry}
              material={materials.material_5}
            />
          </group>
          <group name="instance_0040" position={[13.22, 0, -14.52]}>
            <mesh
              name="ID348"
              castShadow
              receiveShadow
              geometry={nodes.ID348.geometry}
              material={materials.material}
            />
            <mesh
              name="ID348_1"
              castShadow
              receiveShadow
              geometry={nodes.ID348_1.geometry}
              material={materials.material_5}
            />
          </group>
          <group name="instance_0041" position={[13.22, 0, -14.52]}>
            <mesh
              name="ID356"
              castShadow
              receiveShadow
              geometry={nodes.ID356.geometry}
              material={materials.material}
            />
            <mesh
              name="ID356_1"
              castShadow
              receiveShadow
              geometry={nodes.ID356_1.geometry}
              material={materials.material_5}
            />
          </group>
          <group name="instance_0042" position={[13.22, 0, -14.52]}>
            <mesh
              name="ID364"
              castShadow
              receiveShadow
              geometry={nodes.ID364.geometry}
              material={materials.material}
            />
            <mesh
              name="ID364_1"
              castShadow
              receiveShadow
              geometry={nodes.ID364_1.geometry}
              material={materials.material_5}
            />
          </group>
          <group name="instance_0043" position={[13.22, 0, -14.52]}>
            <mesh
              name="ID372"
              castShadow
              receiveShadow
              geometry={nodes.ID372.geometry}
              material={materials.material}
            />
            <mesh
              name="ID372_1"
              castShadow
              receiveShadow
              geometry={nodes.ID372_1.geometry}
              material={materials.material_5}
            />
          </group>
          <group name="instance_0044" position={[13.22, 0, -14.52]}>
            <mesh
              name="ID380"
              castShadow
              receiveShadow
              geometry={nodes.ID380.geometry}
              material={materials.material}
            />
            <mesh
              name="ID380_1"
              castShadow
              receiveShadow
              geometry={nodes.ID380_1.geometry}
              material={materials.material_5}
            />
          </group>
          <group name="instance_0045" position={[13.22, 0, -14.52]}>
            <mesh
              name="ID388"
              castShadow
              receiveShadow
              geometry={nodes.ID388.geometry}
              material={materials.material}
            />
            <mesh
              name="ID388_1"
              castShadow
              receiveShadow
              geometry={nodes.ID388_1.geometry}
              material={materials.material_5}
            />
          </group>
          <group name="instance_0046" position={[13.22, 0, -14.52]}>
            <mesh
              name="ID396"
              castShadow
              receiveShadow
              geometry={nodes.ID396.geometry}
              material={materials.material}
            />
            <mesh
              name="ID396_1"
              castShadow
              receiveShadow
              geometry={nodes.ID396_1.geometry}
              material={materials.material_5}
            />
          </group>
          <group name="instance_0047" position={[13.22, 0, -14.52]}>
            <mesh
              name="ID404"
              castShadow
              receiveShadow
              geometry={nodes.ID404.geometry}
              material={materials.material}
            />
            <mesh
              name="ID404_1"
              castShadow
              receiveShadow
              geometry={nodes.ID404_1.geometry}
              material={materials.material_5}
            />
          </group>
          <group name="instance_0048" position={[13.22, 0, -14.52]}>
            <mesh
              name="ID412"
              castShadow
              receiveShadow
              geometry={nodes.ID412.geometry}
              material={materials.material}
            />
            <mesh
              name="ID412_1"
              castShadow
              receiveShadow
              geometry={nodes.ID412_1.geometry}
              material={materials.material_5}
            />
          </group>
          <group name="instance_0049" position={[13.22, 0, -14.52]}>
            <mesh
              name="ID420"
              castShadow
              receiveShadow
              geometry={nodes.ID420.geometry}
              material={materials.material}
            />
            <mesh
              name="ID420_1"
              castShadow
              receiveShadow
              geometry={nodes.ID420_1.geometry}
              material={materials.material_5}
            />
          </group>
          <group name="instance_0050" position={[13.22, 0, -14.52]}>
            <mesh
              name="ID428"
              castShadow
              receiveShadow
              geometry={nodes.ID428.geometry}
              material={materials.material_2}
            />
            <mesh
              name="ID428_1"
              castShadow
              receiveShadow
              geometry={nodes.ID428_1.geometry}
              material={materials.material}
            />
          </group>
          <group name="instance_0051" position={[13.22, 0, -14.52]}>
            <mesh
              name="ID436"
              castShadow
              receiveShadow
              geometry={nodes.ID436.geometry}
              material={materials.material_2}
            />
            <mesh
              name="ID436_1"
              castShadow
              receiveShadow
              geometry={nodes.ID436_1.geometry}
              material={materials.material}
            />
          </group>
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/models/Typing3.glb");