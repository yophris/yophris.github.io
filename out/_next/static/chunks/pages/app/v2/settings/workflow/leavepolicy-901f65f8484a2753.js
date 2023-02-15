(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3498],{22170:function(e,a,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/app/v2/settings/workflow/leavepolicy",function(){return t(71146)}])},71146:function(e,a,t){"use strict";t.r(a),t.d(a,{default:function(){return f}});var l=t(85893),i=t(52802),n=t(86886),r=t(49701),s=t(88345),d=t(53531),o=t(69745);t(76595);var c=t(16405),u=t(77339),p=t(26309),y=t(54742),m=t(88767),v=t(558);let b=[{element:u.Z,attr:{label:"Leave Policy Name",name:"leavePolicy.name"},xs:6},{element:s.Z,attr:{label:"Select Workweek",name:"leavePolicy.workweekId",asyncData:{endpointApi:v.$8,endpoint:"settings/workweek",key:"workweek"}},children:{element:c.Z,attr:{name:"leavePolicy.workReadonly",lookup:"leavePolicy.workweekId"},xs:12,md:6},xs:12},{element:s.Z,attr:{label:"Select Holiday Calendar",name:"leavePolicy.holidayCalendarId",asyncData:{endpointApi:v.$8,endpoint:"settings/workweek",key:"workweek"}},children:{element:r.Z,attr:{name:"leavePolicy.calendarSideView",lookup:"leavePolicy.holidayCalendarId"},xs:12,md:6},xs:12}],x=[{element:o.Z,attr:{label:"Select Start Month",name:"policyPeriod.startMonth",options:[{text:"January 2022",value:"jan"},{text:"February 2022",value:"feb"},{text:"March 2022",value:"mar"}]},xs:6},{element:o.Z,attr:{label:"Select End Month",name:"policyPeriod.endMonth",options:[{text:"September 2022",value:"sep"},{text:"November 2022",value:"nov"},{text:"December 2022",value:"dec"}]},xs:6},{element:u.Z,attr:{label:"Applicable from start date",name:"policyPeriod.startDate",options:[{text:"September 2022",value:"sep"},{text:"November 2022",value:"nov"},{text:"December 2022",value:"dec"}]},xs:6},{element:o.Z,attr:{label:"Select Approval Heirarchy Type",name:"policyPeriod.heirarchyType",options:[{text:"Heirarchy 1",value:"h1"},{text:"Heirarchy 2",value:"h2"},{text:"Heirarchy 3",value:"h3"}]},xs:6}],h=[{element:p.Z,type:"group",name:"leaveType",fieldForArray:{leaveTypeId:"",accurateRule:{balanceType:"",startDate:""},balanceRule:{limit:"",daysToReq:"",carryForwardType:""},requestRule:{restrictBackdated:!1,limit:""}},tabs:[{id:"accurateRule",text:"Accurat Rule",fields:[{element:o.Z,attr:{label:"Select Balance Type",name:"accurateRule.balanceType",options:[{text:"Fixed Balance 1",value:"f1"},{text:"Fixed Balance 2",value:"f2"},{text:"Fixed Balance 3",value:"f3"}]}},{element:u.Z,attr:{inputAdornment:{text:"Days",placement:"end"},label:"Accurate Rate",name:"accurateRule.startDate"}}]},{id:"balanceRule",text:"Balance Rules",fields:[{element:u.Z,attr:{label:"Enter Limit",name:"balanceRule.limit",inputAdornment:{text:"Days",placement:"end"}}},{element:u.Z,attr:{label:"Enter Days to request when balance is “0”",name:"balanceRule.daysToReq",inputAdornment:{text:"Days",placement:"end"}}},{element:o.Z,attr:{label:"Select carry forward type",name:"balanceRule.carryForwardType",options:[{text:"Total remaining count",value:"trc"},{text:"Limit count",value:"lc"}]}}]},{id:"requestRule",text:"Request Rules",fields:[{element:d.Z,attr:{label:"Restrict back-dated leave action",name:"requestRule.restrictBackdated"}},{element:u.Z,attr:{label:"Enter Days to limit to requested at once",name:"requestRule.limit",inputAdornment:{text:"Days",placement:"end"}}}]}],xs:12}],g={key:"leavePolicy",form:[{header:"",fields:b},{header:"Policy Period",fields:x},{header:"Leave Type Rules Setting",fields:h}],defaultValues:{leavePolicy:{name:"",workweekId:""},policyPeriod:{startMonth:"",endMonth:"",startDate:"",heirarchyType:""},leaveType:[h.fieldForArray]},endpoint:"settings/leavePolicy",texts:{title:"Leave",key:"holidayName",breadcrumbText:"Leave",drawerTitle:"Add Leave",mainTitle:"Add New Leave Calendar",mainDescription:"It is short description for leavePolicy",sideTitle:"Add Leave from templates",sideDescription:"It is a long established fact thats a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)."},getAllFn:v.$8,postFn:v.fj,putFn:v.m7,deleteFn:v.WN};function f(){return(0,m.useMutation)(e=>g.postFn(g.endpoint,e),{onSuccess(){qc.invalidateQueries("get"+g.key),alert.success((null==response?void 0:response.data)?"Updated":"Company Created")},onError(e){alert.error("Failed")}}),(0,l.jsx)(y.Z,{texts:g.texts,children:(0,l.jsx)(n.ZP,{container:!0,sx:{overflowY:"auto"},children:(0,l.jsx)(i.Z,{plan:{section:{fields:[{label:"Leave Policy Name",type:"Text",id:"leavePolicyName",gridSizes:{xs:12,sm:6,md:6,lg:6},config:{placeholder:"Leave Policy Name"},validations:[{type:"required"}]},{label:"Select Workweek",type:"Select",gridSizes:{xs:12,sm:6,md:6,lg:6},id:"workweek",validations:[{type:"required"}],select:{type:"inLine",options:[{value:"30",label:"30 Days"},{value:"60",label:"60 Days"},{value:"90",label:"90 Days"}]}},{label:"Select Holiday Calendar",type:"Select",gridSizes:{xs:12,sm:6,md:6,lg:6},id:"holidayCalendar",validations:[{type:"required"}],select:{type:"inLine",options:[{value:"30",label:"30 Days"},{value:"60",label:"60 Days"},{value:"90",label:"90 Days"}]}},{type:"Divider"},{type:"Title",title:"Policy Period",gridSizes:{md:12}},{label:"Select Start Month",type:"Select",gridSizes:{xs:12,sm:6,md:6,lg:6},id:"startMonth",validations:[{type:"required"}],select:{type:"inLine",options:[{value:"30",label:"30 Days"},{value:"60",label:"60 Days"},{value:"90",label:"90 Days"}]}},{label:"Select End Month",type:"Select",gridSizes:{xs:12,sm:6,md:6,lg:6},id:"endMonth",validations:[{type:"required"}],select:{type:"inLine",options:[{value:"30",label:"30 Days"},{value:"60",label:"60 Days"},{value:"90",label:"90 Days"}]}},{label:"Applicable from start date",type:"Text",id:"fromStartDate",gridSizes:{xs:12,sm:6,md:6,lg:6},config:{placeholder:"Applicable from start date"},validations:[{type:"required"}]},{label:"Select Approval Heirarchy Type",type:"Select",gridSizes:{xs:12,sm:6,md:6,lg:6},id:"approvalHeirarchyType",validations:[{type:"required"}],select:{type:"inLine",options:[{value:"30",label:"30 Days"},{value:"60",label:"60 Days"},{value:"90",label:"90 Days"}]}},{type:"Divider"},{type:"Title",gridSizes:{md:12},title:"Leave Type Rules Setting"},{id:"LeaveRules",appendButtonText:"+ Add another Leave Type ",type:"FieldArray",gridSizes:{xs:12,sm:6,md:3},arrayFields:[{label:"Leave Type",type:"Select",gridSizes:{xs:12,sm:6,md:3},fieldName:"leaveType",validations:[{type:"required"}],select:{type:"inLine",options:[{value:"sickLeave",label:"Sick Leave"},{value:"earnedLeave",label:"Earned Leave"},{value:"annualLeave",label:"Annual Leave"}]}},{isInFieldArray:!0,gridSizes:{md:12,sm:12},fieldName:"rules",type:"Tabs",tabs:[{text:"Accural Rules",fields:[{label:"Select Balance Type",type:"Select",gridSizes:{xs:12,sm:6,md:3},id:"accuralRules.balanceType",validations:[{type:"required"}],select:{type:"inLine",options:[{value:"sickLeave",label:"Sick Leave"},{value:"earnedLeave",label:"Earned Leave"},{value:"annualLeave",label:"Annual Leave"}]}},{label:"Accural Rate",type:"Text",id:"accuralRules.accuralType",gridSizes:{xs:12,sm:6,md:6,lg:6},inputAdornment:{placement:"end",text:"Days"},config:{placeholder:"Accural Rate"},validations:[{type:"required"}]}]},{text:"Balance Rule",fields:[{label:"Enter Limit",type:"Text",id:"balanceRules.limit",gridSizes:{xs:12,sm:6,md:6,lg:6},inputAdornment:{placement:"end",text:"Days"},config:{placeholder:"Enter Limit"},validations:[{type:"required"}]},{label:"Enter Days to request when balance is “0”",type:"Text",id:"balanceRules.daysWhenZeroBalance",gridSizes:{xs:12,sm:6,md:6,lg:6},inputAdornment:{placement:"end",text:"Days"},config:{placeholder:"Enter Days"},validations:[{type:"required"}]},{label:"Select carry forward type",type:"Select",gridSizes:{xs:12,sm:6,md:3},id:"balanceRules.carryForwardType",validations:[{type:"required"}],select:{type:"inLine",options:[{value:"totalRemainingCount",label:"Total remaining Count"},{value:"limitCount",label:"Limit count"},{value:"annualLeave",label:"Annual Leave"}]}}]},{text:"Request Rules",fields:[{type:"Checkbox",label:"Restrict back-dated leave action",id:"requestRules.RestrictBackDatedLeave"},{label:"Enter Days to limit to requested at once",type:"Text",id:"requestRules.limit",gridSizes:{xs:12,sm:6,md:6,lg:6},inputAdornment:{placement:"end",text:"Days"},config:{placeholder:"Enter Days"},validations:[{type:"required"}]}]}]}]}]}}})})})}}},function(e){e.O(0,[3662,3552,4885,5675,7655,129,3169,5242,8360,7417,9912,5003,7757,3513,3910,9482,2802,3729,9774,2888,179],function(){return e(e.s=22170)}),_N_E=e.O()}]);