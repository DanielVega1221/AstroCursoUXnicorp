import{j as t}from"./jsx-runtime.D_zvdyIk.js";import{r as s}from"./index.D55ewHcJ.js";import{c}from"./createLucideIcon.B-sDueUh.js";/**
 * @license lucide-react v0.556.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const n=[["path",{d:"M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401",key:"kfwtm"}]],m=c("moon",n);/**
 * @license lucide-react v0.556.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const l=[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"m17.66 17.66 1.41 1.41",key:"ptbguv"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.34 17.66-1.41 1.41",key:"1m8zz5"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}]],d=c("sun",l);function k(){const[o,a]=s.useState("light");s.useEffect(()=>{const e=document.documentElement.classList.contains("dark");a(e?"dark":"light")},[]);const r=()=>{const e=o==="light"?"dark":"light";e==="dark"?document.documentElement.classList.add("dark"):document.documentElement.classList.remove("dark"),localStorage.setItem("theme",e),a(e)};return t.jsx("button",{onClick:r,className:"p-2 rounded-lg bg-[rgb(var(--color-bg-secondary))] hover:bg-[rgb(var(--color-border))] transition-all duration-200 hover:scale-105 active:scale-95","aria-label":"Toggle theme",children:o==="light"?t.jsx(m,{className:"w-5 h-5"}):t.jsx(d,{className:"w-5 h-5"})})}export{k as default};
