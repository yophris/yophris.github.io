(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[26],{75071:function(e,a,t){"use strict";var i=t(64836);a.Z=void 0;var n=i(t(64938)),r=t(85893),o=(0,n.default)((0,r.jsx)("path",{d:"M22 24H2v-4h20v4zM13.06 5.19l3.75 3.75L7.75 18H4v-3.75l9.06-9.06zm4.82 2.68-3.75-3.75 1.83-1.83c.39-.39 1.02-.39 1.41 0l2.34 2.34c.39.39.39 1.02 0 1.41l-1.83 1.83z"}),"BorderColor");a.Z=o},41733:function(e,a,t){"use strict";var i=t(64836);a.Z=void 0;var n=i(t(64938)),r=t(85893),o=(0,n.default)((0,r.jsx)("path",{d:"M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"}),"Delete");a.Z=o},57976:function(e,a,t){"use strict";var i=t(64836);a.Z=void 0;var n=i(t(64938)),r=t(85893),o=(0,n.default)((0,r.jsx)("path",{d:"M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"}),"MoreVert");a.Z=o},42761:function(e,a,t){"use strict";var i=t(64836);a.Z=void 0;var n=i(t(64938)),r=t(85893),o=(0,n.default)((0,r.jsx)("path",{d:"M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"}),"Search");a.Z=o},59323:function(e,a,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/app/settings/general/company",function(){return t(81927)}])},81927:function(e,a,t){"use strict";t.r(a);var i=t(85893),n=t(69745),r=t(76595),o=t(77339),s=t(54742),l=t(34578),d=t(88767),u=t(558),m=t(7258),c=t(90022);let p=[{element:o.Z,attr:{label:"Organization Name",name:"company.companyName"},xs:12},{element:o.Z,attr:{label:"Start Year",name:"company.startYear"},xs:4},{element:o.Z,attr:{label:"Country",name:"company.country"},xs:4},{element:n.Z,attr:{label:"Language",name:"company.language",defaultValue:{text:"English",value:"en"},options:[{text:"English",value:"en"},{text:"Arabic",value:"ar",disabled:!0}]},xs:4}],g=m.object().shape({company:m.object().shape({companyName:m.string().required(" name required."),industry:m.string().required("type required."),description:m.string().required("description required."),language:m.string().required("language required.")})}),v={key:"company",form:[{header:"Organisation Details",fields:p},{header:"Primary Address",fields:c.addressFields.map(e=>{var a,t,i,n;return{...e,attr:{...e.attr,name:"primary."+e.attr.name,asyncData:{...null===(a=e.attr)||void 0===a?void 0:a.asyncData,lookup:null===(t=e.attr)||void 0===t?void 0:null===(i=t.asyncData)||void 0===i?void 0:null===(n=i.lookup)||void 0===n?void 0:n.map(e=>"primary."+e)}}}})},{header:"Emergency Address",fields:c.addressFields.map(e=>{var a,t,i,n;return{...e,attr:{...e.attr,name:"emergency."+e.attr.name,asyncData:{...null===(a=e.attr)||void 0===a?void 0:a.asyncData,lookup:null===(t=e.attr)||void 0===t?void 0:null===(i=t.asyncData)||void 0===i?void 0:null===(n=i.lookup)||void 0===n?void 0:n.map(e=>"emergency."+e)}}}})}],endpoint:"settings/company",texts:{title:"Organization",key:"companyName",breadcrumbText:"Organization",drawerTitle:"Add Organization",mainTitle:"List of Organization",mainDescription:"It is short description for Organization",sideTitle:"List of Organization",sideDescription:"This is long long long for Organization saldkf skflas asfkjdsadklfsadf salkdfklajsfkjlsad lorem description Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui quidem neque exercitationem aperiam laboriosam at, tempore ipsam natus alias repellat dolorum. Totam commodi eius dolorem laudantium dolores explicabo ex id."},validation:g,getAllFn:u.$8,postFn:u.fj,putFn:u.m7,deleteFn:u.WN},h=()=>{let e=(0,d.useQueryClient)(),a=(0,l.VY)(),{isLoading:t,data:n,error:o}=(0,d.useQuery)("get"+v.key,()=>v.getAllFn(v.endpoint)),u=(0,d.useMutation)(e=>(null==n?void 0:n.data)?v.putFn(v.endpoint,n.data.id,e):v.postFn(v.endpoint,e),{onSuccess(){e.invalidateQueries("get"+v.key),a.success((null==n?void 0:n.data)?"Updated":"Company Created")},onError(e){a.error("Failed")}});return(0,i.jsx)(i.Fragment,{children:(0,i.jsx)(s.Z,{texts:{breadcrumbText:"Organization",mainTitle:"Organization Setting",mainDescription:"It is a long established fact that a reader will be distracted",sideTitle:"Organization Setting",sideDescription:"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)."},children:(0,i.jsx)(r.Z,{form:v.form,submitData:e=>u.mutate({...e}),validationSchema:v.validation,edit:null==n?void 0:n.data,cancelDrawer:null})})})};a.default=h}},function(e){e.O(0,[662,552,675,839,371,676,733,83,22,774,888,179],function(){return e(e.s=59323)}),_N_E=e.O()}]);