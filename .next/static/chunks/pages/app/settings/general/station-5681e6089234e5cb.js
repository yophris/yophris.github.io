(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[413],{8602:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/app/settings/general/station",function(){return n(22)}])},6282:function(e,t,n){"use strict";n.d(t,{Z:function(){return c}});var a=n(5893),i=n(7294),s=n(9630),o=n(8330),r=n(1538),l=n(7074),d=n(1011),m=n(5503);function c(e){let{label:t,options:n=[{text:"",value:""}],register:l,name:d,setValue:c,error:p,isRequired:f,getValues:x,watch:b}=e,[g,h]=i.useState("");return(0,i.useEffect)(e=>{let t=b(d);t&&(c(d,t),h(t))},[b(d)]),(0,a.jsxs)("div",{children:[(0,a.jsxs)(s.Z,{variant:"body_medium_muted",component:"p",mb:1,children:[t,f&&(0,a.jsx)(s.Z,{variant:"body_bold",sx:{marginLeft:"4px",color:"#F53E40"},children:"*"})]}),(0,a.jsxs)(o.Z,{...l(d),input:(0,a.jsx)(u,{}),IconComponent:m.Z,sx:{fontSize:"1.4rem",fontWeight:500,color:"text.secondary"},value:g,children:[(0,a.jsx)(r.Z,{sx:{fontSize:"1.4rem",color:"text.secondary",fontStyle:"italic"},value:"",children:"None"}),n.map((e,t)=>(0,a.jsx)(r.Z,{sx:{fontSize:"1.4rem",fontWeight:500,color:"text.secondary"},value:e.value,children:e.text},t))]}),(null==p?void 0:p.message)&&(0,a.jsx)(s.Z,{variant:"h6",sx:{marginLeft:"4px",color:"red"},children:p.message})]})}let u=(0,l.ZP)(d.ZP)(e=>{let{theme:t}=e;return{alignItems:"center",backgroundColor:t.palette.background.main,border:"1px solid #EFEFEF",borderRadius:t.spacing(1),display:"flex",fontSize:"1.4rem",transition:t.transitions.create(["border-color","box-shadow"]),"&:focus":{borderRadius:4,borderColor:"#80bdff",boxShadow:"0 0 0 0.2rem rgba(0,123,255,.25)"},"label + &":{marginTop:t.spacing(3)},"& .MuiInputBase-input":{color:t.palette.text.secondary,padding:"".concat(t.spacing(1.25)," ").concat(t.spacing(2))},"& .MuiSvgIcon-root":{fontSize:"2rem",marginRight:2,color:t.palette.text.tertiary}}})},22:function(e,t,n){"use strict";n.r(t),n.d(t,{addressFields:function(){return m},default:function(){return u}});var a=n(5893);n(7294);var i=n(7339);n(7258);var s=n(558),o=n(4742),r=n(1244),l=n(6282);let d=[{element:i.Z,attr:{label:"Station Name",name:"station.stationName"},size:6},{element:l.Z,attr:{label:"Is main station?",name:"station.isMainStation",options:[{text:"Yes",value:!0},{text:"No",value:!1}]},size:6},{element:l.Z,attr:{label:"Station Head",name:"station.stationHead",options:[{text:"Employee 1",value:"e1"},{text:"Employee 2",value:"e2"}]},size:12}],m=[{element:i.Z,attr:{label:"Address Line 1",name:"address.addressLn1"},size:12},{element:i.Z,attr:{label:"Address Line 2",name:"address.addressLn2"},size:12},{element:i.Z,attr:{label:"City",name:"address.city"},size:6},{element:i.Z,attr:{label:"State",name:"address.state"},size:6},{element:i.Z,attr:{label:"Postal Code",name:"address.postalCode"},size:6},{element:i.Z,attr:{label:"Country",name:"address.country"},size:6},{element:i.Z,attr:{label:"Phone",name:"address.phone1"},size:6}],c={key:"stationName",form:[{header:"",fields:d},{header:"Station Address",fields:m}],endpoint:"settings/station",texts:{key:"stationName",breadcrumbText:"Station",drawerTitle:"Add Station",mainTitle:"List of Stations",mainDescription:"this is short description for division",sideTitle:"Station",sideDescription:"this is long long long for division saldkf skflas asfkjdsadklfsadf salkdfklajsfkjlsad lorem description Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui quidem neque exercitationem aperiam laboriosam at, tempore ipsam natus alias repellat dolorum. Totam commodi eius dolorem laudantium dolores explicabo ex id."},getAllFn:s.$8,postFn:s.fj,putFn:s.m7,deleteFn:s.WN};function u(){return(0,a.jsx)(o.Z,{texts:c.texts,children:(0,a.jsx)(r.Z,{config:c})})}}},function(e){e.O(0,[662,552,720,703,750,774,888,179],function(){return e(e.s=8602)}),_N_E=e.O()}]);