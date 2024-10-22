import {useGLTF, useAnimations, useScroll} from "@react-three/drei";
import {useEffect, useRef} from "react";
import {Group} from "three";
import {useFrame} from "@react-three/fiber";

useGLTF.preload(`${process.env.PUBLIC_URL}/robot_playground.glb`)

export default function Model() {
  const group = useRef<Group>(null);
  const { animations, scene} = useGLTF(`${process.env.PUBLIC_URL}/robot_playground.glb`);

  const {actions} = useAnimations(animations, scene);
  const scroll = useScroll();

  useEffect(() => {
    const action =  actions["Experiment"];
    if(action) action.play().paused = true;
  }, []);

  useFrame(() => {
    const action = actions["Experiment"]
    if (action) (action.time = (action.getClip().duration * scroll.offset))
  })


  return <group ref={group} position={[0, -1, 0]} >
    <primitive object={scene}/>
  </group>
}