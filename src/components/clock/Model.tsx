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
    const action = actions["Take 001"];
    if(action) action.play().paused = true;
  }, []);

  useFrame(() => {
    const action = actions["Take 001"];

    if(action) (action.time = (action.getClip().duration * scroll.offset))
  })


  return <group  ref={group} >
    <primitive object={scene}/>
  </group>
}