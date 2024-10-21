import {useGLTF, useAnimations, useScroll} from "@react-three/drei";
import {useEffect, useRef} from "react";
import {Group} from "three";
import {useFrame} from "@react-three/fiber";

useGLTF.preload('/robot_playground.glb')

export default function Model() {
  const group = useRef<Group>(null);
  const { animations, scene} = useGLTF('/robot_playground.glb');

  const {actions} = useAnimations(animations, scene);
  const scroll = useScroll();

  useEffect(() => {
    actions["Experiment"].play().paused = true;
  }, []);

  useFrame(() =>
    (actions["Experiment"].time =
      (actions["Experiment"].getClip().duration * scroll.offset) )
  )


  return <group ref={group} position={[0, -1, 0]} >
    <primitive object={scene}/>
  </group>
}