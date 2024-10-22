import './App.css'
import dynamic  from "next/dynamic";
import Home from "./components/Home.tsx";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

const Scene = dynamic(() => import('./components/robot/Scene.tsx'), { ssr: false });
const Clock = dynamic(() => import('./components/clock/Clock.tsx'), { ssr: false });
const Earth = dynamic(() => import('./components/earth/Earth.tsx'), { ssr: false });

function App() {

  return   <Router basename='/3D_Scroll_Animations'>
    <main className="h-[100vh] w-[100vw] bg-black">
      <Routes>
        <Route path="" element={<Home/>} />
        <Route path="/robot-playground" element={<Scene />} />
        <Route path="/clock" element={<Clock />} />
        <Route path="/earth" element={<Earth />} />
      </Routes>
    </main>
  </Router>
}

export default App
