"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2678],{32610:function(e,t,r){var n=r(64836);t.Z=void 0;var i=n(r(64938)),o=r(85893),a=(0,i.default)((0,o.jsx)("path",{d:"M11 18c0 1.1-.9 2-2 2s-2-.9-2-2 .9-2 2-2 2 .9 2 2zm-2-8c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0-6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm6 4c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"}),"DragIndicator");t.Z=a},75503:function(e,t,r){var n=r(64836);t.Z=void 0;var i=n(r(64938)),o=r(85893),a=(0,i.default)((0,o.jsx)("path",{d:"M7.41 8.59 12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"}),"KeyboardArrowDown");t.Z=a},7145:function(e,t,r){var n=r(83454);function i(e){return"object"!=typeof e||"toString"in e?e:Object.prototype.toString.call(e).slice(8,-1)}Object.defineProperty(t,"__esModule",{value:!0});var o="object"==typeof n;function a(e,t){if(!e){if(o)throw Error("Invariant failed");throw Error(t())}}t.invariant=a;var s=Object.prototype.hasOwnProperty,c=Array.prototype.splice,u=Object.prototype.toString;function d(e){return u.call(e).slice(8,-1)}var l=Object.assign||function(e,t){return g(t).forEach(function(r){s.call(t,r)&&(e[r]=t[r])}),e},g="function"==typeof Object.getOwnPropertySymbols?function(e){return Object.keys(e).concat(Object.getOwnPropertySymbols(e))}:function(e){return Object.keys(e)};function h(e){return Array.isArray(e)?l(e.constructor(e.length),e):"Map"===d(e)?new Map(e):"Set"===d(e)?new Set(e):e&&"object"==typeof e?l(Object.create(Object.getPrototypeOf(e)),e):e}var p=function(){function e(){this.commands=l({},f),this.update=this.update.bind(this),this.update.extend=this.extend=this.extend.bind(this),this.update.isEquals=function(e,t){return e===t},this.update.newContext=function(){return new e().update}}return Object.defineProperty(e.prototype,"isEquals",{get:function(){return this.update.isEquals},set:function(e){this.update.isEquals=e},enumerable:!0,configurable:!0}),e.prototype.extend=function(e,t){this.commands[e]=t},e.prototype.update=function(e,t){var r=this,n="function"==typeof t?{$apply:t}:t;Array.isArray(e)&&Array.isArray(n)||a(!Array.isArray(n),function(){return"update(): You provided an invalid spec to update(). The spec may not contain an array except as the value of $set, $push, $unshift, $splice or any custom command allowing an array value."}),a("object"==typeof n&&null!==n,function(){return"update(): You provided an invalid spec to update(). The spec and every included key path must be plain objects containing one of the following commands: "+Object.keys(r.commands).join(", ")+"."});var i=e;return g(n).forEach(function(t){if(s.call(r.commands,t)){var o=e===i;i=r.commands[t](n[t],i,n,e),o&&r.isEquals(i,e)&&(i=e)}else{var a="Map"===d(e)?r.update(e.get(t),n[t]):r.update(e[t],n[t]),c="Map"===d(i)?i.get(t):i[t];r.isEquals(a,c)&&(void 0!==a||s.call(e,t))||(i===e&&(i=h(e)),"Map"===d(i)?i.set(t,a):i[t]=a)}}),i},e}();t.Context=p;var f={$push:function(e,t,r){return y(t,r,"$push"),e.length?t.concat(e):t},$unshift:function(e,t,r){return y(t,r,"$unshift"),e.length?e.concat(t):t},$splice:function(e,t,r,n){var o;return a(Array.isArray(o=t),function(){return"Expected $splice target to be an array; got "+i(o)}),w(r.$splice),e.forEach(function(e){w(e),t===n&&e.length&&(t=h(n)),c.apply(t,e)}),t},$set:function(e,t,r){return a(1===Object.keys(r).length,function(){return"Cannot have more than one key in an object with $set"}),e},$toggle:function(e,t){b(e,"$toggle");var r=e.length?h(t):t;return e.forEach(function(e){r[e]=!t[e]}),r},$unset:function(e,t,r,n){return b(e,"$unset"),e.forEach(function(e){Object.hasOwnProperty.call(t,e)&&(t===n&&(t=h(n)),delete t[e])}),t},$add:function(e,t,r,n){return S(t,"$add"),b(e,"$add"),"Map"===d(t)?e.forEach(function(e){var r=e[0],i=e[1];t===n&&t.get(r)!==i&&(t=h(n)),t.set(r,i)}):e.forEach(function(e){t!==n||t.has(e)||(t=h(n)),t.add(e)}),t},$remove:function(e,t,r,n){return S(t,"$remove"),b(e,"$remove"),e.forEach(function(e){t===n&&t.has(e)&&(t=h(n)),t.delete(e)}),t},$merge:function(e,t,r,n){var o;return o=t,a(e&&"object"==typeof e,function(){return"update(): $merge expects a spec of type 'object'; got "+i(e)}),a(o&&"object"==typeof o,function(){return"update(): $merge expects a target of type 'object'; got "+i(o)}),g(e).forEach(function(r){e[r]!==t[r]&&(t===n&&(t=h(n)),t[r]=e[r])}),t},$apply:function(e,t){return a("function"==typeof e,function(){return"update(): expected spec of $apply to be a function; got "+i(e)+"."}),e(t)}},v=new p;function y(e,t,r){a(Array.isArray(e),function(){return"update(): expected target of "+i(r)+" to be an array; got "+i(e)+"."}),b(t[r],r)}function b(e,t){a(Array.isArray(e),function(){return"update(): expected spec of "+i(t)+" to be an array; got "+i(e)+". Did you forget to wrap your parameter in an array?"})}function w(e){a(Array.isArray(e),function(){return"update(): expected spec of $splice to be an array of arrays; got "+i(e)+". Did you forget to wrap your parameters in an array?"})}function S(e,t){var r=d(e);a("Map"===r||"Set"===r,function(){return"update(): "+i(t)+" expects a target of type Set or Map; got "+i(r)})}t.isEquals=v.update.isEquals,t.extend=v.extend,t.default=v.update,t.default.default=e.exports=l(t.default,t)},49294:function(e,t,r){r.d(t,{c:function(){return b}});var n=r(14912),i=r(98672),o=r(72203),a=r(67294),s=r(46580),c=r(98697),u=r(41317);class d{receiveHandlerId(e){this.handlerId!==e&&(this.handlerId=e,this.reconnect())}get connectTarget(){return this.dragSource}get dragSourceOptions(){return this.dragSourceOptionsInternal}set dragSourceOptions(e){this.dragSourceOptionsInternal=e}get dragPreviewOptions(){return this.dragPreviewOptionsInternal}set dragPreviewOptions(e){this.dragPreviewOptionsInternal=e}reconnect(){let e=this.reconnectDragSource();this.reconnectDragPreview(e)}reconnectDragSource(){let e=this.dragSource,t=this.didHandlerIdChange()||this.didConnectedDragSourceChange()||this.didDragSourceOptionsChange();return(t&&this.disconnectDragSource(),this.handlerId)?e?(t&&(this.lastConnectedHandlerId=this.handlerId,this.lastConnectedDragSource=e,this.lastConnectedDragSourceOptions=this.dragSourceOptions,this.dragSourceUnsubscribe=this.backend.connectDragSource(this.handlerId,e,this.dragSourceOptions)),t):(this.lastConnectedDragSource=e,t):t}reconnectDragPreview(e=!1){let t=this.dragPreview,r=e||this.didHandlerIdChange()||this.didConnectedDragPreviewChange()||this.didDragPreviewOptionsChange();if(r&&this.disconnectDragPreview(),this.handlerId){if(!t){this.lastConnectedDragPreview=t;return}r&&(this.lastConnectedHandlerId=this.handlerId,this.lastConnectedDragPreview=t,this.lastConnectedDragPreviewOptions=this.dragPreviewOptions,this.dragPreviewUnsubscribe=this.backend.connectDragPreview(this.handlerId,t,this.dragPreviewOptions))}}didHandlerIdChange(){return this.lastConnectedHandlerId!==this.handlerId}didConnectedDragSourceChange(){return this.lastConnectedDragSource!==this.dragSource}didConnectedDragPreviewChange(){return this.lastConnectedDragPreview!==this.dragPreview}didDragSourceOptionsChange(){return!(0,s.w)(this.lastConnectedDragSourceOptions,this.dragSourceOptions)}didDragPreviewOptionsChange(){return!(0,s.w)(this.lastConnectedDragPreviewOptions,this.dragPreviewOptions)}disconnectDragSource(){this.dragSourceUnsubscribe&&(this.dragSourceUnsubscribe(),this.dragSourceUnsubscribe=void 0)}disconnectDragPreview(){this.dragPreviewUnsubscribe&&(this.dragPreviewUnsubscribe(),this.dragPreviewUnsubscribe=void 0,this.dragPreviewNode=null,this.dragPreviewRef=null)}get dragSource(){return this.dragSourceNode||this.dragSourceRef&&this.dragSourceRef.current}get dragPreview(){return this.dragPreviewNode||this.dragPreviewRef&&this.dragPreviewRef.current}clearDragSource(){this.dragSourceNode=null,this.dragSourceRef=null}clearDragPreview(){this.dragPreviewNode=null,this.dragPreviewRef=null}constructor(e){this.hooks=(0,u.p)({dragSource:(e,t)=>{this.clearDragSource(),this.dragSourceOptions=t||null,(0,c.d)(e)?this.dragSourceRef=e:this.dragSourceNode=e,this.reconnectDragSource()},dragPreview:(e,t)=>{this.clearDragPreview(),this.dragPreviewOptions=t||null,(0,c.d)(e)?this.dragPreviewRef=e:this.dragPreviewNode=e,this.reconnectDragPreview()}}),this.handlerId=null,this.dragSourceRef=null,this.dragSourceOptionsInternal=null,this.dragPreviewRef=null,this.dragPreviewOptionsInternal=null,this.lastConnectedHandlerId=null,this.lastConnectedDragSource=null,this.lastConnectedDragSourceOptions=null,this.lastConnectedDragPreview=null,this.lastConnectedDragPreviewOptions=null,this.backend=e}}var l=r(5109),g=r(66618);let h=!1,p=!1;class f{receiveHandlerId(e){this.sourceId=e}getHandlerId(){return this.sourceId}canDrag(){(0,n.k)(!h,"You may not call monitor.canDrag() inside your canDrag() implementation. Read more: http://react-dnd.github.io/react-dnd/docs/api/drag-source-monitor");try{return h=!0,this.internalMonitor.canDragSource(this.sourceId)}finally{h=!1}}isDragging(){if(!this.sourceId)return!1;(0,n.k)(!p,"You may not call monitor.isDragging() inside your isDragging() implementation. Read more: http://react-dnd.github.io/react-dnd/docs/api/drag-source-monitor");try{return p=!0,this.internalMonitor.isDraggingSource(this.sourceId)}finally{p=!1}}subscribeToStateChange(e,t){return this.internalMonitor.subscribeToStateChange(e,t)}isDraggingSource(e){return this.internalMonitor.isDraggingSource(e)}isOverTarget(e,t){return this.internalMonitor.isOverTarget(e,t)}getTargetIds(){return this.internalMonitor.getTargetIds()}isSourcePublic(){return this.internalMonitor.isSourcePublic()}getSourceId(){return this.internalMonitor.getSourceId()}subscribeToOffsetChange(e){return this.internalMonitor.subscribeToOffsetChange(e)}canDragSource(e){return this.internalMonitor.canDragSource(e)}canDropOnTarget(e){return this.internalMonitor.canDropOnTarget(e)}getItemType(){return this.internalMonitor.getItemType()}getItem(){return this.internalMonitor.getItem()}getDropResult(){return this.internalMonitor.getDropResult()}didDrop(){return this.internalMonitor.didDrop()}getInitialClientOffset(){return this.internalMonitor.getInitialClientOffset()}getInitialSourceClientOffset(){return this.internalMonitor.getInitialSourceClientOffset()}getSourceClientOffset(){return this.internalMonitor.getSourceClientOffset()}getClientOffset(){return this.internalMonitor.getClientOffset()}getDifferenceFromInitialOffset(){return this.internalMonitor.getDifferenceFromInitialOffset()}constructor(e){this.sourceId=null,this.internalMonitor=e.getMonitor()}}var v=r(55872);class y{beginDrag(){let e=this.spec,t=this.monitor,r=null;return null!=(r="object"==typeof e.item?e.item:"function"==typeof e.item?e.item(t):{})?r:null}canDrag(){let e=this.spec,t=this.monitor;return"boolean"==typeof e.canDrag?e.canDrag:"function"!=typeof e.canDrag||e.canDrag(t)}isDragging(e,t){let r=this.spec,n=this.monitor,{isDragging:i}=r;return i?i(n):t===e.getSourceId()}endDrag(){let e=this.spec,t=this.monitor,r=this.connector,{end:n}=e;n&&n(t.getItem(),t),r.reconnect()}constructor(e,t,r){this.spec=e,this.monitor=t,this.connector=r}}function b(e,t){let r=(0,o.w)(e,t);(0,n.k)(!r.begin,"useDrag::spec.begin was deprecated in v14. Replace spec.begin() with spec.item(). (see more here - https://react-dnd.github.io/react-dnd/docs/api/use-drag)");let s=function(){let e=(0,l.N)();return(0,a.useMemo)(()=>new f(e),[e])}(),c=function(e,t){let r=(0,l.N)(),n=(0,a.useMemo)(()=>new d(r.getBackend()),[r]);return(0,g.L)(()=>(n.dragSourceOptions=e||null,n.reconnect(),()=>n.disconnectDragSource()),[n,e]),(0,g.L)(()=>(n.dragPreviewOptions=t||null,n.reconnect(),()=>n.disconnectDragPreview()),[n,t]),n}(r.options,r.previewOptions);return!function(e,t,r){let i=(0,l.N)(),o=function(e,t,r){let n=(0,a.useMemo)(()=>new y(e,t,r),[t,r]);return(0,a.useEffect)(()=>{n.spec=e},[e]),n}(e,t,r),s=(0,a.useMemo)(()=>{let t=e.type;return(0,n.k)(null!=t,"spec.type must be defined"),t},[e]);(0,g.L)(function(){if(null!=s){let[e,n]=(0,v.w)(s,o,i);return t.receiveHandlerId(e),r.receiveHandlerId(e),n}},[i,t,r,o,s])}(r,s,c),[(0,i.J)(r.collect,s,c),(0,a.useMemo)(()=>c.hooks.dragSource(),[c]),(0,a.useMemo)(()=>c.hooks.dragPreview(),[c])]}}}]);