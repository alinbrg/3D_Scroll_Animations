'use client';

import { Canvas } from '@react-three/fiber';
import {Suspense} from "react";
import Model from "./Model.tsx";
import {ScrollControls} from "@react-three/drei";
import Loader from "../common/Loader.tsx";
import BackToMain from "../common/BackToMain.tsx";

export default function Clock() {
  return (
    <div className="relative h-[100vh]">
      <BackToMain />
      <Canvas gl={{antialias: true}} dpr={[1, 1.5]} camera={{ position: [0, 0, 120], fov: 50 }}>
        <directionalLight position={[50, 50, 100]} intensity={0.4}/>
        {/*<pointLight position={[0, 0, 150]} intensity={0.5}/>*/}
        <Suspense fallback={<Loader/>}>
          <ScrollControls damping={0.5} pages={2} >
            <Model/>
          </ScrollControls>
        </Suspense>
      </Canvas>
    </div>
  )
}