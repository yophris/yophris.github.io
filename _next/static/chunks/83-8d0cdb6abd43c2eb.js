(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[83],{39272:function(e,n,t){"use strict";t.d(n,{I:function(){return o},w:function(){return function e(n){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:new FormData,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;return i.forEach(n,(n,o)=>{if(null===n)return;let s=i.isEmpty(r)?o:"".concat(r,"[").concat(o,"]");n instanceof File?t.set(s,n):n instanceof Array?i.forEach(n,e=>{t.append("".concat(s),e)}):n instanceof Object?e(n,t,s):t.set(s,n)}),t}}});let r=t(18998),i=t(96486),o=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",t=r(n),i=t.evaluate(e);return console.log("expression",i),i}},44057:function(e,n,t){"use strict";t.d(n,{Z:function(){return o}});var r=t(85893);t(67294);var i=t(83321);function o(e){let{children:n,variant:t="contained",styleOverrides:o,...s}=e;return(0,r.jsx)(i.Z,{variant:t,sx:{fontSize:"1.2rem",fontWeight:500,padding:"8px 32px",borderRadius:1.25,textTransform:"none",...o},...s,children:n})}},1574:function(e,n,t){"use strict";t.d(n,{Z:function(){return o}});var r=t(85893);t(67294);var i=t(87357);function o(e){let{colorVal:n="#377DFF",size:t=12,...o}=e;return(0,r.jsx)(i.Z,{sx:{width:t,height:t,backgroundColor:n,borderRadius:50},...o})}},9576:function(e,n,t){"use strict";var r=t(85893),i=t(67720);t(67294);let o=e=>{let{direction:n="horizontal",borderColor:t="#EFEFEF",rest:o}=e;return(0,r.jsx)(i.Z,{sx:{borderColor:t},...o,orientation:n,flexItem:!0})};n.Z=o},76595:function(e,n,t){"use strict";t.d(n,{Z:function(){return v}});var r=t(85893),i=t(67294),o=t(47533),s=t(26447),l=t(86886),a=t(15861),d=t(90629),c=t(67720),u=t(87536),h=t(39272),x=t(7258);let m=e=>(console.log(e,"formmm"),function e(n){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,r={};for(let i in n)"validation"in n[i]?(console.log("Has validation",n[i].validation),n[i].validation&&(r[i]=function(e){let{id:n,validationType:t,validations:r=[]}=e,i=x[t]();return r.forEach(e=>{let{params:n,type:t}=e;i[t]&&(console.log(t,n),i=i[t](...n))}),i}(n[i].validation))):r[i]=e(n[i],t+1);return x.object().shape(r)}(function(e){let n={};for(let t in e){let r=t.split("."),i=n;for(;r.length>1;){let o=r.shift();i=i[o]=i[o]||{}}i[r[0]]=e[t]}return console.log("Deep",n),n}((0,h.I)(e,'**.fields.{\n        "key":attr.name,\n        "validation":validation\n    }').reduce((e,n)=>(e[n.key]={validation:null==n?void 0:n.validation},e),{}))));var p=t(44057),f=t(90438),v=function(e){let{form:n,defaultValues:t,submitData:h,edit:x,validationSchema:v,showButtons:g=!0,padding:j=3,cancelDrawer:Z=()=>{}}=e,{register:b,control:y,handleSubmit:E,setValue:F,getFieldState:w,reset:_,resetField:k,watch:P,formState:{errors:C},getValues:S}=(0,u.cI)({resolver:(0,o.X)(m(n)),defaultValues:t}),T=(e,n)=>{var t,i,o;let{attr:s}=e,l=e.element,[a,d]=s.name.split(".");return(0,r.jsx)(r.Fragment,{children:(0,r.jsx)(l,{...s,control:y,register:b(s.name),error:w(s.name).error,setValue:F,isRequired:null===(t=null===(i=null==v?void 0:v.fields[a])||void 0===i?void 0:i.fields[d])||void 0===t?void 0:null===(o=t.exclusiveTests)||void 0===o?void 0:o.required,watch:P,reset:_,resetField:k,getValues:S})})};return i.useEffect(e=>{x&&_(x),console.log("Data for Edit",x)},[x]),(0,r.jsx)(r.Fragment,{children:(0,r.jsxs)("form",{onSubmit:E(h),style:{height:"100%"},children:[(0,r.jsxs)(s.Z,{justifyContent:"space-between",sx:{height:"100%"},children:[(0,r.jsx)(s.Z,{sx:{padding:j,flex:1,overflow:"auto"},children:(0,r.jsx)(l.ZP,{container:!0,spacing:3,children:null==n?void 0:n.map((e,n)=>{var t;return(0,r.jsxs)(i.Fragment,{children:[(null==e?void 0:e.header)&&(0,r.jsxs)(r.Fragment,{children:[n>0&&!e.noDivider&&(0,r.jsx)(l.ZP,{item:!0,xs:12,children:(0,r.jsx)(c.Z,{orientation:"horizontal",flexItem:!0,sx:{borderColor:"#EFEFEF",marginTop:2,width:"100%"}})}),(0,r.jsx)(l.ZP,{item:!0,xs:12,children:(0,r.jsxs)(s.Z,{sx:{m:0,p:0},children:[(0,r.jsx)(a.Z,{variant:"h3_bold_secondary",component:"h3",sx:{marginTop:1},children:null==e?void 0:e.header}),(null==e?void 0:e.subHeader)&&(0,r.jsx)(a.Z,{variant:"body_medium_muted",component:"p",children:e.subHeader})]})})]}),null==e?void 0:null===(t=e.fields)||void 0===t?void 0:t.map((e,n)=>"group"===e.type?(0,r.jsx)(e.element,{setValue:F,renderFields:T,getValues:S,control:y,watch:P,errors:C,...e},n):(0,r.jsx)(l.ZP,{item:!0,sx:{paddingLeft:0,margin:0,width:"100%"},...e,children:e.children?(0,r.jsxs)(l.ZP,{container:!0,direction:"row",alignItems:"flex-start",spacing:3,children:[(0,r.jsx)(l.ZP,{item:!0,...e.children,children:T(e,C)}),(0,r.jsx)(l.ZP,{item:!0,...e.children,children:T(e.children,C)})]}):T(e,C)},n))]},n)})})}),g&&(0,r.jsx)(d.Z,{sx:{padding:1.25},square:!0,elevation:1,children:(0,r.jsxs)(s.Z,{direction:"row",justifyContent:"flex-end",spacing:1,children:[Z&&(0,r.jsx)(p.Z,{variant:"outlined",onClick:Z,children:"Cancel"}),(0,r.jsx)(p.Z,{type:"submit",variant:"contained",children:x?"Update":"Save"})]})})]}),(0,r.jsx)(f.DevTool,{control:y,placement:"top-right"})]})})}},77339:function(e,n,t){"use strict";t.d(n,{Z:function(){return a}});var r=t(85893);t(67294);var i=t(15861),o=t(26447),s=t(87357),l=t(13970);function a(e){let{headLabel:n,label:t,unit:s="",inputAdornment:a={text:"",placement:"start"},register:c,name:u,error:h,isRequired:x,isMultiline:m,setValue:p,...f}=e;return(0,r.jsxs)("div",{children:[n&&(0,r.jsx)(i.Z,{variant:"h3_bold_secondary",component:"h3",mb:1,children:n}),(0,r.jsxs)(i.Z,{variant:"body_medium_muted",component:"p",mb:1,children:[t,x&&(0,r.jsx)(i.Z,{variant:"body_bold",sx:{marginLeft:"4px",color:"#F53E40"},children:"*"})]}),(0,r.jsxs)(o.Z,{direction:"row",justifyContent:"space-between",sx:{alignItems:"center",backgroundColor:"background.main",border:"1px solid #EFEFEF",borderRadius:2,display:"flex",margin:0,overflow:"hidden"},children:["start"===a.placement&&""!==a.text&&(0,r.jsx)(d,{text:a.text}),(0,r.jsx)(l.ZP,{size:"small",sx:{width:"100%",p:1.4,fontSize:"1.4rem",fontWeight:500,color:"text.secondary","& .MuiInputBase-input":{p:0}},error:!!(null==h?void 0:h.message),placeholder:t,inputProps:{"aria-label":t},...c&&c,...f,multiline:m,rows:4}),"end"===a.placement&&""!==a.text&&(0,r.jsx)(d,{text:a.text})]}),(null==h?void 0:h.message)&&(0,r.jsx)(i.Z,{variant:"h6",sx:{marginLeft:"4px",color:"red"},children:h.message})]})}let d=e=>{let{text:n}=e;return(0,r.jsx)(s.Z,{sx:{background:"#fff",px:2.5,py:1.4,height:"100%"},children:(0,r.jsx)(i.Z,{variant:"body_medium_secondary",children:n})})}},71666:function(e,n,t){"use strict";var r=t(85893),i=t(67294),o=t(77533),s=t(26447),l=t(90629),a=t(15861),d=t(93946),c=t(50594),u=t(87357);n.Z=function(e){let{open:n=!1,callback:t,title:h,children:x}=e,[m,p]=i.useState(n);return(0,r.jsx)("div",{children:(0,r.jsx)(o.ZP,{anchor:"right",open:m,sx:{"& .MuiDrawer-paper":{width:"50%"}},children:(0,r.jsx)(u.Z,{role:"presentation",children:(0,r.jsxs)(s.Z,{sx:{height:"100vh"},children:[(0,r.jsx)(l.Z,{square:!0,elevation:2,children:(0,r.jsxs)(s.Z,{direction:"row",justifyContent:"space-between",sx:{margin:1.25,flexBasis:"auto"},children:[(0,r.jsx)(s.Z,{alignItems:"center",justifyContent:"center",children:(0,r.jsx)(a.Z,{variant:"h1_bold_secondary",component:"h1",children:h})}),(0,r.jsx)(s.Z,{children:(0,r.jsx)(d.Z,{onClick(e){e&&"keydown"===e.type&&("Tab"===e.key||"Shift"===e.key)||(t(!1),p(!1))},sx:{padding:0},children:(0,r.jsx)(c.Z,{sx:{fontSize:"2.2rem",margin:"15px",color:"#000"}})})})]})}),x]})})})})}},54742:function(e,n,t){"use strict";var r=t(85893),i=t(67294),o=t(98396),s=t(23795),l=t(87357),a=t(26447),d=t(12963),c=t(90629),u=t(86886),h=t(15861);t(41664),t(9576),n.Z=i.memo(function(e){let{children:n,texts:t,SideChildren:i}=e,x=(0,o.Z)("(max-width:900px)"),m=[(0,r.jsx)(s.Z,{href:"/app/settings",sx:{fontSize:"1.6rem",fontWeight:600,color:"primary.main",cursor:"pointer"},underline:"hover",color:"inherit",children:"SETTINGS"},"1"),(0,r.jsx)(h.Z,{variant:"h3_bold_secondary",children:null==t?void 0:t.breadcrumbText},"2")];return(0,r.jsxs)(l.Z,{children:[(0,r.jsx)(a.Z,{sx:{padding:2,background:"#FAFBFC",borderBottom:"1px solid #EBEBEB"},children:(0,r.jsx)(d.Z,{separator:">",sx:{"& .MuiBreadcrumbs-separator":{fontSize:"2rem",fontWeight:500}},"aria-label":"breadcrumb",children:m})}),(0,r.jsx)(a.Z,{sx:{margin:2,background:"#F5F6FA"},children:(0,r.jsx)(c.Z,{sx:{border:"1px solid #EFEFEF",borderRadius:2.5,overflow:"hidden"},variant:"outlined",children:(0,r.jsxs)(u.ZP,{container:!0,direction:"row",children:[(0,r.jsxs)(u.ZP,{item:!0,md:8,xs:12,sx:!x&&{borderRight:"1px solid #EFEFEF"},children:[(0,r.jsxs)(l.Z,{sx:{px:2.5,pt:2.5},children:[(0,r.jsx)(h.Z,{variant:"h2_bold_secondary",component:"h2",children:null==t?void 0:t.mainTitle}),(0,r.jsx)(h.Z,{variant:"body_medium_muted",component:"p",children:null==t?void 0:t.mainDescription})]}),(0,r.jsx)(a.Z,{sx:{height:"80vh"},children:n})]}),(0,r.jsx)(u.ZP,{item:!0,md:4,sx:x?{display:"none"}:{display:"block"},children:(0,r.jsxs)(a.Z,{sx:{margin:2.5},spacing:1,children:[(0,r.jsx)(h.Z,{variant:"h2_bold_secondary",children:null==t?void 0:t.sideTitle}),(0,r.jsx)(h.Z,{variant:"body_medium_muted",children:null==t?void 0:t.sideDescription}),i&&(0,r.jsx)(i,{})]})})]})})})]})})},80681:function(e,n,t){"use strict";var r=t(70594);let i=r.Z.create({baseURL:"http://localhost:5000/api/v1/"});var o=t(80129);let s=async e=>{let{path:n="/",method:t="get",data:r=null,secure:s=!0,uploadProgessCB:l=()=>{}}=e;if("get"==t&&r){let a=o.stringify(r,{addQueryPrefix:!0});n+=a}try{let{data:d,status:c}=await i({url:n,method:t,data:r,headers:{"X-TENANT-ID":"b4915dd7-166a-4887-93c7-8b59b6c23adb"},onUploadProgress(e){let n=Math.round(100*e.loaded/e.total);l(n)}});return{success:!0,data:(null==d?void 0:d.data)?d.data:d,status:c,message:"success"}}catch(u){if(console.log(u),u.response)throw{success:!1,data:u.response.data,status:u.response.status,message:"Response Error"};if(u.request)throw console.log(u.request),{success:!1,data:null,status:null,message:"Request Error"};throw{success:!1,data:null,status:null,message:"Request Set up Error"}}};n.Z=s},558:function(e,n,t){"use strict";t.d(n,{$8:function(){return i},WN:function(){return l},fj:function(){return o},m7:function(){return s}});var r=t(80681);let i=(e,n)=>(0,r.Z)({path:e,method:"get",data:n}),o=(e,n,t)=>(0,r.Z)({path:e,method:"post",data:n,uploadProgessCB:t}),s=(e,n,t,i)=>(0,r.Z)({path:e+"/"+n,method:"put",data:t,uploadProgessCB:i}),l=(e,n)=>(0,r.Z)({path:e+"/"+(null==n?void 0:n.id),method:"delete"})},24654:function(){}}]);