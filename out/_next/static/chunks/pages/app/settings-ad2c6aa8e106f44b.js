(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[877],{93147:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/app/settings",function(){return r(8093)}])},8093:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return J}});var a=r(85893),i=r(67294),o=r(26447),n=r(90629),l=r(67720),s=r(86886),d=r(15861),c=r(41664),u=r.n(c),p=r(11496),m=r(63366),h=r(87462),f=r(86010),b=r(94780),g=r(70917),v=r(41796),y=r(98216),w=r(2734),x=r(33616),Z=r(1588),k=r(34867);function C(e){return(0,k.Z)("MuiLinearProgress",e)}let P=(0,Z.Z)("MuiLinearProgress",["root","colorPrimary","colorSecondary","determinate","indeterminate","buffer","query","dashed","dashedColorPrimary","dashedColorSecondary","bar","barColorPrimary","barColorSecondary","bar1Indeterminate","bar1Determinate","bar1Buffer","bar2Indeterminate","bar2Buffer"]),j=["className","color","value","valueBuffer","variant"],_=e=>e,R,S,$,I,L,D,E=(0,g.F4)(R||(R=_`
  0% {
    left: -35%;
    right: 100%;
  }

  60% {
    left: 100%;
    right: -90%;
  }

  100% {
    left: 100%;
    right: -90%;
  }
`)),B=(0,g.F4)(S||(S=_`
  0% {
    left: -200%;
    right: 100%;
  }

  60% {
    left: 107%;
    right: -8%;
  }

  100% {
    left: 107%;
    right: -8%;
  }
`)),N=(0,g.F4)($||($=_`
  0% {
    opacity: 1;
    background-position: 0 -23px;
  }

  60% {
    opacity: 0;
    background-position: 0 -23px;
  }

  100% {
    opacity: 1;
    background-position: -200px -23px;
  }
`)),q=e=>{let{classes:t,variant:r,color:a}=e,i={root:["root",`color${(0,y.Z)(a)}`,r],dashed:["dashed",`dashedColor${(0,y.Z)(a)}`],bar1:["bar",`barColor${(0,y.Z)(a)}`,("indeterminate"===r||"query"===r)&&"bar1Indeterminate","determinate"===r&&"bar1Determinate","buffer"===r&&"bar1Buffer"],bar2:["bar","buffer"!==r&&`barColor${(0,y.Z)(a)}`,"buffer"===r&&`color${(0,y.Z)(a)}`,("indeterminate"===r||"query"===r)&&"bar2Indeterminate","buffer"===r&&"bar2Buffer"]};return(0,b.Z)(i,C,t)},M=(e,t)=>"inherit"===t?"currentColor":e.vars?e.vars.palette.LinearProgress[`${t}Bg`]:"light"===e.palette.mode?(0,v.$n)(e.palette[t].main,.62):(0,v._j)(e.palette[t].main,.5),T=(0,p.ZP)("span",{name:"MuiLinearProgress",slot:"Root",overridesResolver(e,t){let{ownerState:r}=e;return[t.root,t[`color${(0,y.Z)(r.color)}`],t[r.variant]]}})(({ownerState:e,theme:t})=>(0,h.Z)({position:"relative",overflow:"hidden",display:"block",height:4,zIndex:0,"@media print":{colorAdjust:"exact"},backgroundColor:M(t,e.color)},"inherit"===e.color&&"buffer"!==e.variant&&{backgroundColor:"none","&::before":{content:'""',position:"absolute",left:0,top:0,right:0,bottom:0,backgroundColor:"currentColor",opacity:.3}},"buffer"===e.variant&&{backgroundColor:"transparent"},"query"===e.variant&&{transform:"rotate(180deg)"})),F=(0,p.ZP)("span",{name:"MuiLinearProgress",slot:"Dashed",overridesResolver(e,t){let{ownerState:r}=e;return[t.dashed,t[`dashedColor${(0,y.Z)(r.color)}`]]}})(({ownerState:e,theme:t})=>{let r=M(t,e.color);return(0,h.Z)({position:"absolute",marginTop:0,height:"100%",width:"100%"},"inherit"===e.color&&{opacity:.3},{backgroundImage:`radial-gradient(${r} 0%, ${r} 16%, transparent 42%)`,backgroundSize:"10px 10px",backgroundPosition:"0 -23px"})},(0,g.iv)(I||(I=_`
    animation: ${0} 3s infinite linear;
  `),N)),O=(0,p.ZP)("span",{name:"MuiLinearProgress",slot:"Bar1",overridesResolver(e,t){let{ownerState:r}=e;return[t.bar,t[`barColor${(0,y.Z)(r.color)}`],("indeterminate"===r.variant||"query"===r.variant)&&t.bar1Indeterminate,"determinate"===r.variant&&t.bar1Determinate,"buffer"===r.variant&&t.bar1Buffer]}})(({ownerState:e,theme:t})=>(0,h.Z)({width:"100%",position:"absolute",left:0,bottom:0,top:0,transition:"transform 0.2s linear",transformOrigin:"left",backgroundColor:"inherit"===e.color?"currentColor":(t.vars||t).palette[e.color].main},"determinate"===e.variant&&{transition:"transform .4s linear"},"buffer"===e.variant&&{zIndex:1,transition:"transform .4s linear"}),({ownerState:e})=>("indeterminate"===e.variant||"query"===e.variant)&&(0,g.iv)(L||(L=_`
      width: auto;
      animation: ${0} 2.1s cubic-bezier(0.65, 0.815, 0.735, 0.395) infinite;
    `),E)),W=(0,p.ZP)("span",{name:"MuiLinearProgress",slot:"Bar2",overridesResolver(e,t){let{ownerState:r}=e;return[t.bar,t[`barColor${(0,y.Z)(r.color)}`],("indeterminate"===r.variant||"query"===r.variant)&&t.bar2Indeterminate,"buffer"===r.variant&&t.bar2Buffer]}})(({ownerState:e,theme:t})=>(0,h.Z)({width:"100%",position:"absolute",left:0,bottom:0,top:0,transition:"transform 0.2s linear",transformOrigin:"left"},"buffer"!==e.variant&&{backgroundColor:"inherit"===e.color?"currentColor":(t.vars||t).palette[e.color].main},"inherit"===e.color&&{opacity:.3},"buffer"===e.variant&&{backgroundColor:M(t,e.color),transition:"transform .4s linear"}),({ownerState:e})=>("indeterminate"===e.variant||"query"===e.variant)&&(0,g.iv)(D||(D=_`
      width: auto;
      animation: ${0} 2.1s cubic-bezier(0.165, 0.84, 0.44, 1) 1.15s infinite;
    `),B)),z=i.forwardRef(function(e,t){let r=(0,x.Z)({props:e,name:"MuiLinearProgress"}),{className:i,color:o="primary",value:n,valueBuffer:l,variant:s="indeterminate"}=r,d=(0,m.Z)(r,j),c=(0,h.Z)({},r,{color:o,variant:s}),u=q(c),p=(0,w.Z)(),b={},g={bar1:{},bar2:{}};if(("determinate"===s||"buffer"===s)&&void 0!==n){b["aria-valuenow"]=Math.round(n),b["aria-valuemin"]=0,b["aria-valuemax"]=100;let v=n-100;"rtl"===p.direction&&(v=-v),g.bar1.transform=`translateX(${v}%)`}if("buffer"===s&&void 0!==l){let y=(l||0)-100;"rtl"===p.direction&&(y=-y),g.bar2.transform=`translateX(${y}%)`}return(0,a.jsxs)(T,(0,h.Z)({className:(0,f.Z)(u.root,i),ownerState:c,role:"progressbar"},b,{ref:t},d,{children:["buffer"===s?(0,a.jsx)(F,{className:u.dashed,ownerState:c}):null,(0,a.jsx)(O,{className:u.bar1,ownerState:c,style:g.bar1}),"determinate"===s?null:(0,a.jsx)(W,{className:u.bar2,ownerState:c,style:g.bar2})]}))}),A=(0,p.ZP)(z)(e=>{let{theme:t,progresscolor:r}=e;return{height:10,borderRadius:5,["&.".concat(P.colorPrimary)]:{backgroundColor:t.palette.grey["light"===t.palette.mode?200:800]},["& .".concat(P.bar)]:{borderRadius:5,backgroundColor:r}}});function G(e){let{total:t,consumed:r,light:i=!0,colorVal:n="#FEDF88"}=e;return(0,a.jsxs)(o.Z,{sx:{height:"100%"},justifyContent:"space-around",children:[(0,a.jsxs)(d.Z,{variant:i?"body_medium_light":"body_medium_muted",children:[r," of ",t," completed"]}),(0,a.jsx)(A,{variant:"determinate",value:r/t*100,sx:{"& .MuiLinearProgress-bar":{backgroundColor:n}}})]})}var X=r(25675),H=r.n(X);function U(e){let{settingsData:t,completedData:r}=e,{title:i,subtitle:c,settings:p=[]}=t;return(0,a.jsxs)(n.Z,{sx:{borderRadius:2.5,minWidth:280,width:"100%",height:"auto"},variant:"outlined",children:[(0,a.jsxs)(o.Z,{direction:"row",flexWrap:"wrap",rowGap:1,columnGap:1,justifyContent:"space-between",sx:{padding:2,height:"100%"},children:[(0,a.jsxs)(o.Z,{children:[(0,a.jsx)(d.Z,{variant:"h2_bold_secondary",component:"h2",children:i}),(0,a.jsx)(d.Z,{variant:"body_medium_muted",component:"p",children:c})]}),(0,a.jsx)(d.Z,{variant:"body_bold_primary",children:(0,a.jsx)(G,{total:"10",consumed:"4",light:!1,colorVal:"tertiary.main"})})]}),(0,a.jsx)(l.Z,{orientation:"horizontal",sx:{borderColor:"#EFEFEF"}}),(0,a.jsx)(s.ZP,{container:!0,sx:{padding:2},rowSpacing:2,columnSpacing:{xs:4,md:3},children:p.map((e,t)=>(0,a.jsxs)(s.ZP,{item:!0,md:4,sx:{rowGap:1},flexWrap:!0,children:[(0,a.jsx)(d.Z,{variant:"h3_medium_secondary",component:"h3",children:e.title}),(0,a.jsx)(o.Z,{direction:"row",alignItems:"center",sx:{flexWrap:"wrap",rowGap:.6,marginTop:1},children:e.types.map((t,i)=>{let o,n="",s="";return"object"==typeof t&&(n=t.path,s=t.title,o=null==r?void 0:r[t.id]),(0,a.jsxs)("span",{children:[o&&(0,a.jsx)(H(),{src:"/images/circleTickBgGreen.svg",width:11,height:11,style:{marginRight:"4px"},alt:"completed"}),(0,a.jsx)(u(),{href:"/app/settings/".concat(n.toString().toLowerCase()),children:(0,a.jsx)(d.Z,{variant:"body_medium_primary",children:s})}),i!==e.types.length-1&&(0,a.jsx)(l.Z,{sx:{display:"inline",borderColor:"text.muted",height:"10px",margin:"0 8px"},orientation:"vertical"})]},i)})})]},t))})]})}var Q=r(558),V=r(88767);function J(){let{isLoading:e,data:t,error:r}=(0,V.useQuery)("overview",()=>(0,Q.$8)("settings/overview",{page:1}));return(0,a.jsx)(o.Z,{spacing:2,sx:{margin:2},children:e?"loading...":K.map((e,r)=>(0,a.jsx)(U,{settingsData:e,completedData:null==t?void 0:t.data},r))})}let K=[{title:"General Setting",subtitle:"It is a long established fact that a reader will be distracted",settings:[{title:"Organization",types:[{id:"Company",path:"general/Company",title:"Company"},{id:"Division",path:"general/division",title:"Division"},{id:"Department",path:"general/department",title:"Department"},{id:"Station",path:"general/station",title:"Station"},{id:"Team",path:"general/teams",title:"Teams"},{id:"CompanyDocument",path:"general/company-documents",title:"Organization Document"}]},{title:"Roles & Privileges",types:[{id:"UserRoles",path:"general/user-roles",title:"User Roles"}]}]},{title:"Employee Information System",subtitle:"It is a long established fact that a reader will be distracted",settings:[{title:"On-boarding Setting",types:[{id:"OnboardingChecklist",path:"onboarding_checklist",title:"Checklist"}]},{title:"Off-boarding Setting",types:[{id:"OffboardingChecklist",path:"offboarding_checklist",title:"Checklist"}]}]},{title:"Workflow Management",subtitle:"It is a long established fact that a reader will be distracted",settings:[{title:"Leave Setting",types:[{id:"Leavepolicyitem",path:"workflow/leavepolicy",title:"Leave Policy"},{id:"Leave",path:"workflow/leavetype",title:"Leave Type"},{id:"Holiday",path:"workflow/holidayCalendar",title:"Holiday Calender"},{id:"Workweek",path:"workflow/workweek",title:"Work Week"},{id:"approval",path:"workflow/approval",title:"WorkFlow Approval"}]},{title:"Reimbursement Setting",types:[{id:"Reimbursementpolicy",path:"workflow/reimbursementpolicy",title:"Reimbursement Policy"},{id:"Reimbursementtype",path:"workflow/reimbursementtype",title:"Reimbursement Type"}]},{title:"Approval Heirachy",types:[{id:"Approvaltype",path:"approval_type",title:"Approval Type"},{id:"Approvalhierarchy",path:"approval_hierarchy",title:"Approval Hierarchy"}]}]},{title:" Finance / Payroll Managemnet",subtitle:"It is a long established fact that a reader will be distracted",settings:[{title:"Organization",types:[{id:"Finance",path:"finance/empPayroll",title:"Payroll"}]}]}]},80681:function(e,t,r){"use strict";var a=r(70594);let i=a.Z.create({baseURL:"http://localhost:5000/api/v1/"});var o=r(80129);let n=async e=>{let{path:t="/",method:r="get",data:a=null,secure:n=!0,uploadProgessCB:l=()=>{}}=e;if("get"==r&&a){let s=o.stringify(a,{addQueryPrefix:!0});t+=s}try{let{data:d,status:c}=await i({url:t,method:r,data:a,headers:{"X-TENANT-ID":"b4915dd7-166a-4887-93c7-8b59b6c23adb"},onUploadProgress(e){let t=Math.round(100*e.loaded/e.total);l(t)}});return{success:!0,data:(null==d?void 0:d.data)?d.data:d,status:c,message:"success"}}catch(u){if(console.log(u),u.response)throw{success:!1,data:u.response.data,status:u.response.status,message:"Response Error"};if(u.request)throw console.log(u.request),{success:!1,data:null,status:null,message:"Request Error"};throw{success:!1,data:null,status:null,message:"Request Set up Error"}}};t.Z=n},558:function(e,t,r){"use strict";r.d(t,{$8:function(){return i},WN:function(){return l},fj:function(){return o},m7:function(){return n}});var a=r(80681);let i=(e,t)=>(0,a.Z)({path:e,method:"get",data:t}),o=(e,t,r)=>(0,a.Z)({path:e,method:"post",data:t,uploadProgessCB:r}),n=(e,t,r,i)=>(0,a.Z)({path:e+"/"+t,method:"put",data:r,uploadProgessCB:i}),l=(e,t)=>(0,a.Z)({path:e+"/"+(null==t?void 0:t.id),method:"delete"})},24654:function(){}},function(e){e.O(0,[675,839,774,888,179],function(){return e(e.s=93147)}),_N_E=e.O()}]);