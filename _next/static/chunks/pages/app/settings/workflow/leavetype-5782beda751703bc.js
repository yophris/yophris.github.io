(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3326],{75503:function(e,t,a){"use strict";var i=a(64836);t.Z=void 0;var r=i(a(64938)),n=a(85893),l=(0,r.default)((0,n.jsx)("path",{d:"M7.41 8.59 12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"}),"KeyboardArrowDown");t.Z=l},42761:function(e,t,a){"use strict";var i=a(64836);t.Z=void 0;var r=i(a(64938)),n=a(85893),l=(0,r.default)((0,n.jsx)("path",{d:"M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"}),"Search");t.Z=l},7571:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/app/settings/workflow/leavetype",function(){return a(43454)}])},69745:function(e,t,a){"use strict";a.d(t,{Z:function(){return c}});var i=a(85893);a(67294);var r=a(87357),n=a(15861),l=a(18360),o=a(18972),s=a(90948),d=a(13970),u=a(75503);function c(e){let{label:t,name:a,options:s,register:d,setValue:c,error:m,isRequired:v,getValues:x,watch:f,hideLabel:g=!1,...y}=e;return(0,i.jsxs)(r.Z,{sx:{width:"100%"},children:[!g&&(0,i.jsxs)(n.Z,{variant:"body_medium_muted",component:"p",mb:1,children:[t,v&&(0,i.jsx)(n.Z,{variant:"body_bold",sx:{marginLeft:"4px",color:"#F53E40"},children:"*"})]}),(0,i.jsxs)(l.Z,{...d&&d,...y,input:(0,i.jsx)(p,{}),IconComponent:u.Z,sx:{fontSize:"1.4rem",fontWeight:500,color:"text.secondary",width:"100%"},children:[(0,i.jsx)(o.Z,{selected:!0,sx:{fontSize:"1.4rem",color:"text.secondary",fontStyle:"italic"},value:"",children:"None"}),s.length&&s.map((e,t)=>(0,i.jsx)(o.Z,{sx:{fontSize:"1.4rem",fontWeight:500,color:"text.secondary"},value:e.value,disabled:e.disabled,children:e.text},t))]}),(null==m?void 0:m.message)&&(0,i.jsx)(n.Z,{variant:"h6",sx:{marginLeft:"4px",color:"red"},children:m.message})]})}let p=(0,s.ZP)(d.ZP)(e=>{let{theme:t}=e;return{alignItems:"center",backgroundColor:t.palette.background.main,border:"1px solid #EFEFEF",borderRadius:t.spacing(1),display:"flex",fontSize:"1.4rem",transition:t.transitions.create(["border-color","box-shadow"]),"&:focus":{borderRadius:4,borderColor:"#80bdff",boxShadow:"0 0 0 0.2rem rgba(0,123,255,.25)"},"label + &":{marginTop:t.spacing(3)},"& .MuiInputBase-input":{color:t.palette.text.secondary,padding:"".concat(t.spacing(1.25)," ").concat(t.spacing(2))},"& .MuiSvgIcon-root":{fontSize:"2rem",marginRight:2,color:t.palette.text.tertiary}}})},19716:function(e,t,a){"use strict";a.d(t,{Z:function(){return o}});var i=a(85893),r=a(42761),n=a(13970),l=a(90629);function o(e){let{...t}=e;return(0,i.jsxs)(l.Z,{elevation:0,sx:{alignItems:"center",backgroundColor:"background.main",border:"1px solid #EFEFEF",borderRadius:2,display:"flex",marginTop:0,flex:"auto"},children:[(0,i.jsx)(r.Z,{sx:{fontSize:"1.4rem",margin:"15px 12px 15px 20px",color:"text.muted"}}),(0,i.jsx)(n.ZP,{sx:{ml:1,flex:1,fontSize:"1.4rem",color:"text.secondary"},placeholder:"Search Department",inputProps:{"aria-label":"search department"}})]})}a(67294)},32530:function(e,t,a){"use strict";var i=a(85893),r=a(26447),n=a(44057),l=a(9576),o=a(76595),s=a(19716),d=a(67294),u=a(34578),c=a(88767);a(80681);var p=a(38560),m=a(39272),v=a(42019),x=a(71666);let f=e=>{var t,a;let{config:f}=e,{endpoint:g,texts:y,getAllFn:h,postFn:b,key:Z,deleteFn:T,validation:j,putFn:w,transform:S=e=>e}=f,k=(0,p.Z)(e=>e.setProgress),E=(0,u.VY)(),F=(0,c.useQueryClient)(),[L,_]=d.useState(!1),[C,M]=(0,d.useState)(null),{isLoading:q,data:z,error:D}=(0,c.useQuery)("get"+Z,()=>h(g,{page:1})),N=(0,c.useMutation)(e=>C?w(g,C,S(e),k):b(g,S(e),k),{onSuccess(){_(!1),F.invalidateQueries("get"+Z),E.success(C?"Updated":"created")},onError(e){E.error("Failed")}}),P=(0,c.useMutation)(e=>T(g,e),{onSuccess(){F.invalidateQueries("get"+Z),E("Deleted"),_(!1)},onError(e){E("Failed")}}),R=e=>{_(!0),M(e)},Q=e=>{window.confirm("Do you want to delete this ? ")&&P.mutate({id:e})};return(0,d.useEffect)(e=>{L||M(null)},[L]),(0,i.jsxs)(r.Z,{spacing:2,m:2,divider:(0,i.jsx)(l.Z,{}),children:[(0,i.jsxs)(r.Z,{direction:"row",spacing:3,children:[(0,i.jsx)(s.Z,{sx:{flex:1}}),(0,i.jsx)(n.Z,{variant:"contained",onClick:()=>_(!0),children:null==y?void 0:y.drawerTitle}),L&&(0,i.jsx)(x.Z,{open:L,callback:_,title:C?null==y?void 0:null===(t=y.drawerTitle)||void 0===t?void 0:t.replace("Add","Update"):null==y?void 0:y.drawerTitle,children:(0,i.jsx)(o.Z,{form:f.form,edit:C?{...z.data.find(e=>e.id==C)}:null,submitData:e=>N.mutate({...e}),validationSchema:j,cancelDrawer:()=>_(!1)})})]}),(0,i.jsx)(r.Z,{sx:{rowGap:1},children:q?"Loading":null==z?void 0:null===(a=z.data)||void 0===a?void 0:a.map((e,t)=>(0,i.jsx)(v.Z,{label:(0,m.Im)(e,"**.".concat(y.key)),cb:{Edit:()=>R(e.id),Delete:()=>Q(e.id)}},t))})]})};t.Z=f},43454:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return m}});var i=a(85893),r=a(69745),n=a(77339),l=a(32530),o=a(54742);a(67294);var s=a(34578),d=a(88767),u=a(558);let c=[{element:n.Z,attr:{label:"Enter Leave Type Name",name:"leaveType.leaveTypeName"},validation:{validationType:"string",validations:[{type:"required",params:["Leave type name is Required"]}]},xs:12},{element:n.Z,attr:{label:"Description",name:"leaveType.description",isMultiline:!0},xs:12},{element:r.Z,attr:{label:"For Gender",name:"leaveType.gender",options:[{text:"Male",value:"male"},{text:"Female",value:"female"},{text:"Otrers",value:"others"}]},validation:{validationType:"string",validations:[{type:"required",params:["Gender is Required"]}]},xs:6},{element:r.Z,attr:{label:"For Marital Status",name:"leaveType.maritalStatus",options:[{text:"Single",value:"single"},{text:"Married",value:"married"}]},validation:{validationType:"string",validations:[{type:"required",params:["Marital status is Required"]}]},xs:6},{element:r.Z,attr:{label:"Leave is",name:"leaveType.maritalStatus",options:[{text:"Paid Leave",value:"pl"},{text:"Loss of pay",value:"lop"}]},validation:{validationType:"string",validations:[{type:"required",params:["Leave type is Required"]}]},xs:12}],p={key:"leaveType",form:[{header:"",fields:c}],endpoint:"settings/leave/",texts:{key:"leaveType",breadcrumbText:"Leave Type",drawerTitle:"Add Leave Type",mainTitle:"Leave Type",mainDescription:"this is short description for division",sideTitle:"Leave Types",sideDescription:"this is long long long for division saldkf skflas asfkjdsadklfsadf salkdfklajsfkjlsad lorem description Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui quidem neque exercitationem aperiam laboriosam at, tempore ipsam natus alias repellat dolorum. Totam commodi eius dolorem laudantium dolores explicabo ex id."},getAllFn:u.$8,postFn:u.fj,putFn:u.m7,deleteFn:u.WN};function m(){(0,d.useQueryClient)(),(0,s.VY)();let{isLoading:e,data:t,error:a}=(0,d.useQuery)("get"+p.key,()=>p.getAllFn(p.endpoint));return(0,i.jsx)(o.Z,{texts:p.texts,children:(0,i.jsx)(l.Z,{config:p})})}}},function(e){e.O(0,[3662,3552,5675,6886,3213,4409,129,5229,8360,9482,9774,2888,179],function(){return e(e.s=7571)}),_N_E=e.O()}]);