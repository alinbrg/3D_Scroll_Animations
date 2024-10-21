import {NavLink} from "react-router-dom";

export default function Home() {
  return (
    <div className="flex flex-col text-center items-center justify-center gap-4 h-screen">
      <h1 className="text-6xl font-bold text-white">3D Scroll Animations</h1>
      <div>
        <nav className='flex flex-col gap-4 items-center'>
          <NavLink to={'/robot-playground'} className="text-white text-base">🤖 Robot Playground</NavLink>
          <NavLink to={'/clock'} className="text-white text-base">🕰 Broken Clock</NavLink>
          <NavLink to={'/earth'} className="text-white text-base">🌎 Earth</NavLink>
        </nav>
      </div>
    </div>
  )
}