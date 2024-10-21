import {useGLTF, useAnimations, useScroll} from "@react-three/drei";
import {useEffect, useRef} from "react";
import {Group} from "three";
import {useFrame} from "@react-three/fiber";

useGLTF.preload('/broken_steampunk_clock.glb')

export default function Model() {
  const group = useRef<Group>(null);
  const { animations, scene} = useGLTF('/broken_steampunk_clock.glb');

  const {actions} = useAnimations(animations, scene);
  const scroll = useScroll();



  useEffect(() => {
    actions["Take 001"].play().paused = true;
  }, []);

  useFrame(() =>
    (actions["Take 001"].time =
      (actions["Take 001"].getClip().duration * scroll.offset) )
  )


  return <group  ref={group} >
    <primitive object={scene}/>
  </group>
}