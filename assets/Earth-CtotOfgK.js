import{r as t,j as s}from"./index-D5HOTA-i.js";import{u as n,a as l,b as u,c as p,B as m,C as f,L as d,S as x}from"./BackToMain-Dh9NA4IQ.js";n.preload("/3D_Scroll_Animations/earth.glb");function j(){const o=t.useRef(null),{animations:r,scene:e}=n("/3D_Scroll_Animations/earth.glb"),{actions:i}=l(r,e),c=u();return t.useEffect(()=>{const a=i["Base Stack"];a&&(a.play().paused=!0)},[]),p(()=>{const a=i["Base Stack"];a&&(a.time=a.getClip().duration*c.offset)}),s.jsx("group",{ref:o,position:[0,0,0],children:s.jsx("primitive",{object:e})})}function S(){return s.jsxs("div",{className:"relative h-[100vh]",children:[s.jsx(m,{}),s.jsxs(f,{gl:{antialias:!0},dpr:[1,1.5],camera:{position:[0,1,3],fov:50},children:[s.jsx("ambientLight",{intensity:.5}),s.jsx(t.Suspense,{fallback:s.jsx(d,{}),children:s.jsx(x,{damping:.3,pages:3,children:s.jsx(j,{})})})]})]})}export{S as default};
