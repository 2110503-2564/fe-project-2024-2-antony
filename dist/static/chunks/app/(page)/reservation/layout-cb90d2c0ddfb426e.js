(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[679],{1027:function(t){var e,s,a;e="minute",s=/[+-]\d\d(?::?\d\d)?/g,a=/([+-]|\d\d)/g,t.exports=function(t,r,i){var o=r.prototype;i.utc=function(t){var e={date:t,utc:!0,args:arguments};return new r(e)},o.utc=function(t){var s=i(this.toDate(),{locale:this.$L,utc:!0});return t?s.add(this.utcOffset(),e):s},o.local=function(){return i(this.toDate(),{locale:this.$L,utc:!1})};var n=o.parse;o.parse=function(t){t.utc&&(this.$u=!0),this.$utils().u(t.$offset)||(this.$offset=t.$offset),n.call(this,t)};var l=o.init;o.init=function(){if(this.$u){var t=this.$d;this.$y=t.getUTCFullYear(),this.$M=t.getUTCMonth(),this.$D=t.getUTCDate(),this.$W=t.getUTCDay(),this.$H=t.getUTCHours(),this.$m=t.getUTCMinutes(),this.$s=t.getUTCSeconds(),this.$ms=t.getUTCMilliseconds()}else l.call(this)};var c=o.utcOffset;o.utcOffset=function(t,r){var i=this.$utils().u;if(i(t))return this.$u?0:i(this.$offset)?c.call(this):this.$offset;if("string"==typeof t&&null===(t=function(t){void 0===t&&(t="");var e=t.match(s);if(!e)return null;var r=(""+e[0]).match(a)||["-",0,0],i=r[0],o=60*+r[1]+ +r[2];return 0===o?0:"+"===i?o:-o}(t)))return this;var o=16>=Math.abs(t)?60*t:t,n=this;if(r)return n.$offset=o,n.$u=0===t,n;if(0!==t){var l=this.$u?this.toDate().getTimezoneOffset():-1*this.utcOffset();(n=this.local().add(o+l,e)).$offset=o,n.$x.$localOffset=l}else n=this.utc();return n};var u=o.format;o.format=function(t){var e=t||(this.$u?"YYYY-MM-DDTHH:mm:ss[Z]":"");return u.call(this,e)},o.valueOf=function(){var t=this.$utils().u(this.$offset)?0:this.$offset+(this.$x.$localOffset||this.$d.getTimezoneOffset());return this.$d.valueOf()-6e4*t},o.isUTC=function(){return!!this.$u},o.toISOString=function(){return this.toDate().toISOString()},o.toString=function(){return this.toDate().toUTCString()};var h=o.toDate;o.toDate=function(t){return"s"===t&&this.$offset?i(this.format("YYYY-MM-DD HH:mm:ss:SSS")).toDate():h.call(this)};var f=o.diff;o.diff=function(t,e,s){if(t&&this.$u===t.$u)return f.call(this,t,e,s);var a=this.local(),r=i(t).local();return f.call(a,r,e,s)}}},6771:(t,e,s)=>{"use strict";s.d(e,{A:()=>a});let a=async()=>{let t=await fetch("https://antony-massage-backend-production.up.railway.app/api/v1/massage-shops");if(!t.ok)throw Error("Failed to fetch shops");return await t.json()}},9216:(t,e,s)=>{"use strict";s.d(e,{A:()=>n});var a=s(5155),r=s(7404),i=s(5571),o=s(9952);function n(t){let{selectedDate:e,setSelectedDate:s}=t;return(0,a.jsx)(i.$,{dateAdapter:o.R,children:(0,a.jsx)("div",{className:"w-full",children:(0,a.jsx)(r.l,{className:"w-full bg-gray-100",value:e,onChange:t=>s(t),slotProps:{textField:{sx:{width:"100%",backgroundColor:"#F3F4F6",borderRadius:"8px",color:"#374151","& .MuiOutlinedInput-root":{"& fieldset":{border:"none"}},"& .MuiInputBase-input":{color:"#374151",fontSize:"16px",height:"10px"},"& .MuiSvgIcon-root":{color:"#374151"}}}}})})})}},9668:(t,e,s)=>{Promise.resolve().then(s.bind(s,9934))},9934:(t,e,s)=>{"use strict";s.r(e),s.d(e,{default:()=>d});var a=s(5155),r=s(2115),i=s(5695),o=s(9216),n=s(6771);async function l(t){let{massageShopId:e,reserveDate:s,token:a}=t;console.log("createReservation",e,s,a);try{let t=await fetch("https://antony-massage-backend-production.up.railway.app/api/v1/massage-shops/".concat(e,"/reservations"),{method:"POST",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(a)},body:JSON.stringify({reserveDate:s})}),r=await t.text();if(!t.ok)throw console.error("API Error:",r),Error(JSON.parse(r).message);return JSON.parse(r)}catch(t){throw t}}var c=s(832),u=s.n(c),h=s(1027),f=s.n(h);function d(){let[t,e]=(0,r.useState)([]),[s,c]=(0,r.useState)(""),[u,h]=(0,r.useState)(null),f=(0,i.useRouter)(),d=(0,i.useSearchParams)();(0,r.useEffect)(()=>{let t=d.get("shopId");t&&c(t)},[d]),(0,r.useEffect)(()=>{if(!localStorage.getItem("token")){f.push("/login");return}(async()=>{try{let t=await (0,n.A)();e(t.data)}catch(t){console.error("Failed to fetch shops:",t)}})()},[f]);let g=async()=>{let t=localStorage.getItem("token");if(!s||!u||!t){alert("Please select both a shop and a date.");return}try{await l({massageShopId:s,reserveDate:u.format("YYYY-MM-DD"),token:t}),alert("Reservation successful!"),c(""),h(null)}catch(t){console.error("Error making reservation:",t),alert("Error: ".concat(t.message))}};return(0,a.jsx)("div",{className:"flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6",children:(0,a.jsxs)("div",{className:"bg-white shadow-lg rounded-lg p-8 w-full max-w-md",children:[(0,a.jsxs)("div",{className:"mb-4 w-full",children:[(0,a.jsx)("label",{className:"block text-lg font-semibold mb-2 w-full",children:"Date Reservation"}),(0,a.jsx)(o.A,{selectedDate:u,setSelectedDate:h})]}),(0,a.jsxs)("div",{className:"mb-6",children:[(0,a.jsx)("label",{className:"block text-lg font-semibold mb-2",children:"Massage Shop"}),(0,a.jsxs)("select",{className:"w-full rounded-lg p-3 bg-gray-100 text-gray-700 hover:cursor-pointer",value:s,onChange:t=>c(t.target.value),children:[(0,a.jsx)("option",{value:"",disabled:!0,children:"Select Massage Shop"}),t.map(t=>(0,a.jsx)("option",{value:t._id,children:t.name},t._id))]})]}),(0,a.jsx)("button",{onClick:g,className:"hover:cursor-pointer w-full bg-red-600 text-white py-3 rounded-lg font-semibold text-lg hover:bg-red-500 transition",children:"Make a reservation"})]})})}u().extend(f())}},t=>{var e=e=>t(t.s=e);t.O(0,[484,404,441,684,358],()=>e(9668)),_N_E=t.O()}]);