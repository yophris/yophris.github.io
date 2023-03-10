(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5722],{74261:function(r,e,t){"use strict";t.d(e,{Z:function(){return V}});var a=t(85893),o=t(67294),n=t(90629),i=t(26447),s=t(67720),l=t(86886),d=t(15861),u=t(41664),c=t.n(u),m=t(90948),f=t(63366),p=t(87462),b=t(86010),h=t(94780),g=t(70917),v=t(41796),x=t(98216),Z=t(2734),y=t(71657),C=t(1588),w=t(34867);function j(r){return(0,w.Z)("MuiLinearProgress",r)}let P=(0,C.Z)("MuiLinearProgress",["root","colorPrimary","colorSecondary","determinate","indeterminate","buffer","query","dashed","dashedColorPrimary","dashedColorSecondary","bar","barColorPrimary","barColorSecondary","bar1Indeterminate","bar1Determinate","bar1Buffer","bar2Indeterminate","bar2Buffer"]),_=["className","color","value","valueBuffer","variant"],k=r=>r,$,I,B,R,E,N,S=(0,g.F4)($||($=k`
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
`)),q=(0,g.F4)(I||(I=k`
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
`)),L=(0,g.F4)(B||(B=k`
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
`)),M=r=>{let{classes:e,variant:t,color:a}=r,o={root:["root",`color${(0,x.Z)(a)}`,t],dashed:["dashed",`dashedColor${(0,x.Z)(a)}`],bar1:["bar",`barColor${(0,x.Z)(a)}`,("indeterminate"===t||"query"===t)&&"bar1Indeterminate","determinate"===t&&"bar1Determinate","buffer"===t&&"bar1Buffer"],bar2:["bar","buffer"!==t&&`barColor${(0,x.Z)(a)}`,"buffer"===t&&`color${(0,x.Z)(a)}`,("indeterminate"===t||"query"===t)&&"bar2Indeterminate","buffer"===t&&"bar2Buffer"]};return(0,h.Z)(o,j,e)},D=(r,e)=>"inherit"===e?"currentColor":r.vars?r.vars.palette.LinearProgress[`${e}Bg`]:"light"===r.palette.mode?(0,v.$n)(r.palette[e].main,.62):(0,v._j)(r.palette[e].main,.5),F=(0,m.ZP)("span",{name:"MuiLinearProgress",slot:"Root",overridesResolver(r,e){let{ownerState:t}=r;return[e.root,e[`color${(0,x.Z)(t.color)}`],e[t.variant]]}})(({ownerState:r,theme:e})=>(0,p.Z)({position:"relative",overflow:"hidden",display:"block",height:4,zIndex:0,"@media print":{colorAdjust:"exact"},backgroundColor:D(e,r.color)},"inherit"===r.color&&"buffer"!==r.variant&&{backgroundColor:"none","&::before":{content:'""',position:"absolute",left:0,top:0,right:0,bottom:0,backgroundColor:"currentColor",opacity:.3}},"buffer"===r.variant&&{backgroundColor:"transparent"},"query"===r.variant&&{transform:"rotate(180deg)"})),T=(0,m.ZP)("span",{name:"MuiLinearProgress",slot:"Dashed",overridesResolver(r,e){let{ownerState:t}=r;return[e.dashed,e[`dashedColor${(0,x.Z)(t.color)}`]]}})(({ownerState:r,theme:e})=>{let t=D(e,r.color);return(0,p.Z)({position:"absolute",marginTop:0,height:"100%",width:"100%"},"inherit"===r.color&&{opacity:.3},{backgroundImage:`radial-gradient(${t} 0%, ${t} 16%, transparent 42%)`,backgroundSize:"10px 10px",backgroundPosition:"0 -23px"})},(0,g.iv)(R||(R=k`
    animation: ${0} 3s infinite linear;
  `),L)),z=(0,m.ZP)("span",{name:"MuiLinearProgress",slot:"Bar1",overridesResolver(r,e){let{ownerState:t}=r;return[e.bar,e[`barColor${(0,x.Z)(t.color)}`],("indeterminate"===t.variant||"query"===t.variant)&&e.bar1Indeterminate,"determinate"===t.variant&&e.bar1Determinate,"buffer"===t.variant&&e.bar1Buffer]}})(({ownerState:r,theme:e})=>(0,p.Z)({width:"100%",position:"absolute",left:0,bottom:0,top:0,transition:"transform 0.2s linear",transformOrigin:"left",backgroundColor:"inherit"===r.color?"currentColor":(e.vars||e).palette[r.color].main},"determinate"===r.variant&&{transition:"transform .4s linear"},"buffer"===r.variant&&{zIndex:1,transition:"transform .4s linear"}),({ownerState:r})=>("indeterminate"===r.variant||"query"===r.variant)&&(0,g.iv)(E||(E=k`
      width: auto;
      animation: ${0} 2.1s cubic-bezier(0.65, 0.815, 0.735, 0.395) infinite;
    `),S)),G=(0,m.ZP)("span",{name:"MuiLinearProgress",slot:"Bar2",overridesResolver(r,e){let{ownerState:t}=r;return[e.bar,e[`barColor${(0,x.Z)(t.color)}`],("indeterminate"===t.variant||"query"===t.variant)&&e.bar2Indeterminate,"buffer"===t.variant&&e.bar2Buffer]}})(({ownerState:r,theme:e})=>(0,p.Z)({width:"100%",position:"absolute",left:0,bottom:0,top:0,transition:"transform 0.2s linear",transformOrigin:"left"},"buffer"!==r.variant&&{backgroundColor:"inherit"===r.color?"currentColor":(e.vars||e).palette[r.color].main},"inherit"===r.color&&{opacity:.3},"buffer"===r.variant&&{backgroundColor:D(e,r.color),transition:"transform .4s linear"}),({ownerState:r})=>("indeterminate"===r.variant||"query"===r.variant)&&(0,g.iv)(N||(N=k`
      width: auto;
      animation: ${0} 2.1s cubic-bezier(0.165, 0.84, 0.44, 1) 1.15s infinite;
    `),q)),W=o.forwardRef(function(r,e){let t=(0,y.Z)({props:r,name:"MuiLinearProgress"}),{className:o,color:n="primary",value:i,valueBuffer:s,variant:l="indeterminate"}=t,d=(0,f.Z)(t,_),u=(0,p.Z)({},t,{color:n,variant:l}),c=M(u),m=(0,Z.Z)(),h={},g={bar1:{},bar2:{}};if(("determinate"===l||"buffer"===l)&&void 0!==i){h["aria-valuenow"]=Math.round(i),h["aria-valuemin"]=0,h["aria-valuemax"]=100;let v=i-100;"rtl"===m.direction&&(v=-v),g.bar1.transform=`translateX(${v}%)`}if("buffer"===l&&void 0!==s){let x=(s||0)-100;"rtl"===m.direction&&(x=-x),g.bar2.transform=`translateX(${x}%)`}return(0,a.jsxs)(F,(0,p.Z)({className:(0,b.Z)(c.root,o),ownerState:u,role:"progressbar"},h,{ref:e},d,{children:["buffer"===l?(0,a.jsx)(T,{className:c.dashed,ownerState:u}):null,(0,a.jsx)(z,{className:c.bar1,ownerState:u,style:g.bar1}),"determinate"===l?null:(0,a.jsx)(G,{className:c.bar2,ownerState:u,style:g.bar2})]}))}),X=(0,m.ZP)(W)(r=>{let{theme:e,progresscolor:t}=r;return{height:10,borderRadius:5,["&.".concat(P.colorPrimary)]:{backgroundColor:e.palette.grey["light"===e.palette.mode?200:800]},["& .".concat(P.bar)]:{borderRadius:5,backgroundColor:t}}});function A(r){let{total:e,consumed:t,light:o=!0,colorVal:n="#FEDF88"}=r;return(0,a.jsxs)(i.Z,{sx:{height:"100%"},justifyContent:"space-around",children:[(0,a.jsxs)(d.Z,{variant:o?"body_medium_light":"body_medium_muted",children:[t," of ",e," completed"]}),(0,a.jsx)(X,{variant:"determinate",value:t/e*100,sx:{"& .MuiLinearProgress-bar":{backgroundColor:n}}})]})}var U=t(25675),O=t.n(U);function V(r){let{settingsData:e,completedData:t}=r,{title:o,subtitle:u,settings:m=[]}=e;return(0,a.jsxs)(n.Z,{sx:{borderRadius:2.5,minWidth:280,width:"100%",height:"auto"},variant:"outlined",children:[(0,a.jsxs)(i.Z,{direction:"row",flexWrap:"wrap",rowGap:1,columnGap:1,justifyContent:"space-between",sx:{padding:2,height:"100%"},children:[(0,a.jsxs)(i.Z,{children:[(0,a.jsx)(d.Z,{variant:"h2_bold_secondary",component:"h2",children:o}),(0,a.jsx)(d.Z,{variant:"body_medium_muted",component:"p",children:u})]}),(0,a.jsx)(d.Z,{variant:"body_bold_primary",children:(0,a.jsx)(A,{total:"10",consumed:"4",light:!1,colorVal:"tertiary.main"})})]}),(0,a.jsx)(s.Z,{orientation:"horizontal",sx:{borderColor:"#EFEFEF"}}),(0,a.jsx)(l.ZP,{container:!0,sx:{padding:2},rowSpacing:2,columnSpacing:{xs:4,md:3},children:m.map((r,e)=>(0,a.jsxs)(l.ZP,{item:!0,md:4,sx:{rowGap:1},flexWrap:!0,children:[(0,a.jsx)(d.Z,{variant:"h3_medium_secondary",component:"h3",children:r.title}),(0,a.jsx)(i.Z,{direction:"row",alignItems:"center",sx:{flexWrap:"wrap",rowGap:.6,marginTop:1},children:r.types.map((e,o)=>{let n,i="",l="";return"object"==typeof e&&(i=e.path,l=e.title,n=null==t?void 0:t[e.id]),(0,a.jsxs)("span",{children:[n&&(0,a.jsx)(O(),{src:"/images/circleTickBgGreen.svg",width:11,height:11,style:{marginRight:"4px"},alt:"completed"}),(0,a.jsx)(c(),{href:"/app/v2/settings/".concat(i.toString().toLowerCase()),children:(0,a.jsx)(d.Z,{variant:"body_medium_primary",children:l})}),o!==r.types.length-1&&(0,a.jsx)(s.Z,{sx:{display:"inline",borderColor:"text.muted",height:"10px",margin:"0 8px"},orientation:"vertical"})]},o)})})]},e))})]})}},80681:function(r,e,t){"use strict";var a=t(70594),o=t(83454);let n=a.Z.create({baseURL:"http://ec2-3-95-8-3.compute-1.amazonaws.com:3000/api/v1/"});var i=t(80129);let s=async r=>{let{path:e="/",method:t="get",data:a=null,secure:s=!0,uploadProgessCB:l=()=>{}}=r;if("get"==t&&a){let d=i.stringify(a,{addQueryPrefix:!0});e+=d}try{let{data:u,status:c}=await n({url:e,method:t,data:a,headers:{"X-TENANT-ID":o.env.NEXT_PUBLIC_DEV_TENANT_ID||localStorage.getItem("tenantId")},onUploadProgress(r){let e=Math.round(100*r.loaded/r.total);l(e)}});return{success:!0,data:(null==u?void 0:u.data)?u.data:u,status:c,message:"success"}}catch(m){if(console.log(m),m.response)throw{success:!1,data:m.response.data,status:m.response.status,message:"Response Error"};if(m.request)throw console.log(m.request),{success:!1,data:null,status:null,message:"Request Error"};throw{success:!1,data:null,status:null,message:"Request Set up Error"}}};e.Z=s},558:function(r,e,t){"use strict";t.d(e,{$8:function(){return o},WN:function(){return s},fj:function(){return n},m7:function(){return i}});var a=t(80681);let o=(r,e)=>(0,a.Z)({path:r,method:"get",data:e}),n=(r,e,t)=>(0,a.Z)({path:r,method:"post",data:e,uploadProgessCB:t}),i=(r,e,t,o)=>(0,a.Z)({path:r+"/"+e,method:"put",data:t,uploadProgessCB:o}),s=(r,e)=>(0,a.Z)({path:r+"/"+(null==e?void 0:e.id),method:"delete"})},24654:function(){}}]);