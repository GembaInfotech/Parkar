"use strict";(self.webpackChunkclient=self.webpackChunkclient||[]).push([[0],{1e3:(e,s,a)=>{a.r(s),a.d(s,{default:()=>d});var t=a(2791),i=a(7689),l=a(1243),n=a(2675),c=a(9282),r=a(184);const d=()=>{const[e,s]=(0,t.useState)(!1),[a,d]=(0,t.useState)(""),o=(0,i.s0)(),{token:u}=(0,i.UO)(),m=(0,t.useCallback)((()=>{s(!0);const e="".concat(c.Z.apiBaseUrl,"activate/activate-account/").concat(u);l.Z.get(e).then((e=>{200===e.status&&(o("/email-verified"),d(""),s(!1))})).catch((e=>{var a,t;d((null===(a=e.response)||void 0===a||null===(t=a.data)||void 0===t?void 0:t.message)||"Failed to verify, please try again."),s(!1)}))}),[u,o]);return(0,t.useEffect)((()=>{"Email is already verified"===a&&o("/signin")}),[a,o]),(0,r.jsx)("div",{className:"fixed inset-0 z-10 overflow-y-auto",children:(0,r.jsx)("div",{className:"flex min-h-screen items-center justify-center",children:(0,r.jsxs)("div",{className:"rounded-md bg-white p-6 shadow-md",children:[(0,r.jsx)("h2",{className:"mb-4 text-2xl font-bold",children:"Verify your email address"}),(0,r.jsx)("p",{className:"mb-4",children:"Click the button below to verify your email."}),a&&(0,r.jsx)("div",{className:"mb-4 text-sm text-red-500",children:a}),(0,r.jsx)("button",{disabled:e,className:"rounded-lg bg-blue-500 px-4 py-2 text-white hover:bg-blue-600",onClick:m,children:e?(0,r.jsx)(n.Z,{loadingText:"Verifying..."}):"Verify"}),(0,r.jsx)("button",{className:"ml-4 rounded-lg bg-gray-300 px-4 py-2 text-gray-800 hover:bg-gray-400",onClick:()=>{o("/signup")},children:"Cancel"})]})})})}}}]);
//# sourceMappingURL=0.4af1160f.chunk.js.map