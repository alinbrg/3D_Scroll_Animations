import {useGLTF, useAnimations, useScroll} from "@react-three/drei";
import {useEffect, useRef} from "react";
import {Group} from "three";
import {useFrame} from "@react-three/fiber";

useGLTF.preload(`/3D_Scroll_Animations/earth.glb`)

export default function Model() {
  const group = useRef<Group>(null);
  const { animations, scene} = useGLTF(`/3D_Scroll_Animations/earth.glb`);

  const {actions} = useAnimations(animations, scene);
  const scroll = useScroll();

  useEffect(() => {
    const action = actions["Base Stack"];
    if(action) action.play().paused = true;
  }, []);

  useFrame(() => {
    const action = actions["Base Stack"];
    if(action) (action.time = (action.getClip().duration * scroll.offset))
  })


  return <group ref={group} position={[0, 0, 0]} >
    <primitive object={scene}/>
  </group>
}