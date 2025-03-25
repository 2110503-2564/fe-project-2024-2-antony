(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[678],{4712:(e,r,s)=>{"use strict";s.r(r),s.d(r,{default:()=>l});var t=s(5155),a=s(2115),n=s(5695);function l(){let[e,r]=(0,a.useState)(""),[s,l]=(0,a.useState)(""),[o,u]=(0,a.useState)(""),[d,i]=(0,a.useState)(""),[c,m]=(0,a.useState)(""),[g,x]=(0,a.useState)(""),[h,p]=(0,a.useState)(""),f=(0,n.useRouter)(),b=async()=>{if(!e||!s||!o||!d||!c||!g){p("All fields are required");return}if(c!==g){p("Passwords do not match");return}try{let r=await fetch("https://antony-massage-backend-production.up.railway.app/api/v1/auth/register",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:e,username:s,email:o,password:c,role:"user",tel:d})}),t=await r.json();if(!r.ok)throw Error(t.message||"Registration failed");f.push("/login")}catch(e){p(e.message)}};return(0,a.useEffect)(()=>{localStorage.getItem("token")&&f.push("/")},[]),(0,t.jsx)("div",{className:"flex flex-col items-center justify-center min-h-screen bg-gray-100 p-20",children:(0,t.jsxs)("div",{className:"bg-white shadow-lg rounded-lg p-6 w-[200%] max-w-md",children:[(0,t.jsxs)("h1",{className:"text-3xl font-bold text-center mb-2",children:[(0,t.jsx)("span",{className:"text-red-600",children:"Antony"})," ",(0,t.jsx)("span",{className:"text-gray-900",children:"Massage"})]}),(0,t.jsx)("h2",{className:"text-2xl font-semibold text-center text-gray-700 mb-3",children:"Register"}),h&&(0,t.jsx)("p",{className:"text-red-600 text-center mb-3",children:h}),(0,t.jsxs)("div",{className:"mb-3",children:[(0,t.jsx)("label",{className:"block text-sm font-medium text-gray-600 mb-2",children:"Name"}),(0,t.jsx)("input",{type:"text",placeholder:"Enter your name",value:e,onChange:e=>r(e.target.value),className:"w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 text-gray-700",required:!0})]}),(0,t.jsxs)("div",{className:"mb-3",children:[(0,t.jsx)("label",{className:"block text-sm font-medium text-gray-600 mb-2",children:"Username"}),(0,t.jsx)("input",{type:"text",placeholder:"Enter your username",value:s,onChange:e=>l(e.target.value),className:"w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 text-gray-700",required:!0})]}),(0,t.jsxs)("div",{className:"mb-3",children:[(0,t.jsx)("label",{className:"block text-sm font-medium text-gray-600 mb-2",children:"Email"}),(0,t.jsx)("input",{type:"email",placeholder:"Enter your email",value:o,onChange:e=>u(e.target.value),className:"w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 text-gray-700",required:!0})]}),(0,t.jsxs)("div",{className:"mb-3",children:[(0,t.jsx)("label",{className:"block text-sm font-medium text-gray-600 mb-2",children:"Telephone"}),(0,t.jsx)("input",{type:"tel",placeholder:"Enter your phone number",value:d,onChange:e=>i(e.target.value),className:"w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 text-gray-700",required:!0})]}),(0,t.jsxs)("div",{className:"mb-3",children:[(0,t.jsx)("label",{className:"block text-sm font-medium text-gray-600 mb-2",children:"Password"}),(0,t.jsx)("input",{type:"password",placeholder:"Enter your password",value:c,onChange:e=>m(e.target.value),className:"w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 text-gray-700",required:!0})]}),(0,t.jsxs)("div",{className:"mb-3",children:[(0,t.jsx)("label",{className:"block text-sm font-medium text-gray-600 mb-2",children:"Confirm Password"}),(0,t.jsx)("input",{type:"password",placeholder:"Confirm your password",value:g,onChange:e=>x(e.target.value),className:"w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 text-gray-700",required:!0})]}),(0,t.jsx)("button",{onClick:b,className:"hover:cursor-pointer w-full bg-red-600 text-white py-3 rounded-lg font-semibold text-lg hover:bg-red-700 transition",children:"Register"}),(0,t.jsx)("div",{className:"mt-3 text-center",children:(0,t.jsxs)("p",{className:"text-gray-600",children:["Already have an account?"," ",(0,t.jsx)("a",{href:"/login",className:"text-red-600 hover:underline font-medium",children:"Login"})]})})]})})}},4993:(e,r,s)=>{Promise.resolve().then(s.bind(s,4712))},5695:(e,r,s)=>{"use strict";var t=s(8999);s.o(t,"usePathname")&&s.d(r,{usePathname:function(){return t.usePathname}}),s.o(t,"useRouter")&&s.d(r,{useRouter:function(){return t.useRouter}}),s.o(t,"useSearchParams")&&s.d(r,{useSearchParams:function(){return t.useSearchParams}})}},e=>{var r=r=>e(e.s=r);e.O(0,[441,684,358],()=>r(4993)),_N_E=e.O()}]);