'use client';

import { Canvas } from '@react-three/fiber';
import {Suspense} from "react";
import Model from "./Model.tsx";
import {ScrollControls} from "@react-three/drei";
import Loader from "../common/Loader.tsx";
import BackToMain from "../common/BackToMain.tsx";

export default function Scene() {
  return (
    <div className="relative h-[100vh]">
      <BackToMain />
      <Canvas gl={{antialias: true}} dpr={[1, 1.5]}  camera={{ position: [0, 0.7, 5], fov: 50 }}>
        <directionalLight position={[-5, -5, 5]} intensity={4}/>
        <Suspense fallback={<Loader/>}>
          <ScrollControls damping={0.3} pages={4}>
            <Model/>
          </ScrollControls>
        </Suspense>
      </Canvas>
    </div>
  )
}