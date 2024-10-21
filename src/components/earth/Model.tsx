import {useGLTF, useAnimations, useScroll} from "@react-three/drei";
import {useEffect, useRef} from "react";
import {Group} from "three";
import {useFrame} from "@react-three/fiber";

useGLTF.preload('/earth.glb')

export default function Model() {
  const group = useRef<Group>(null);
  const { animations, scene} = useGLTF('/earth.glb');

  const {actions} = useAnimations(animations, scene);
  const scroll = useScroll();

  useEffect(() => {
    actions["Base Stack"].play().paused = true;
  }, []);

  useFrame(() =>
    (actions["Base Stack"].time =
      (actions["Base Stack"].getClip().duration * scroll.offset) )
  )


  return <group ref={group} position={[0, 0, 0]} >
    <primitive object={scene}/>
  </group>
}