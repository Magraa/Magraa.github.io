(()=>{var s2=Object.create;var D0=Object.defineProperty;var c2=Object.getOwnPropertyDescriptor;var u2=Object.getOwnPropertyNames;var d2=Object.getPrototypeOf,_2=Object.prototype.hasOwnProperty;var Ol=(e,t)=>()=>{try{return t||e((t={exports:{}}).exports,t),t.exports}catch(n){throw t=0,n}};var f2=(e,t,n,l)=>{if(t&&typeof t=="object"||typeof t=="function")for(let o of u2(t))!_2.call(e,o)&&o!==n&&D0(e,o,{get:()=>t[o],enumerable:!(l=c2(t,o))||l.enumerable});return e};var Te=(e,t,n)=>(n=e!=null?s2(d2(e)):{},f2(t||!e||!e.__esModule?D0(n,"default",{value:e,enumerable:!0}):n,e));var X0=Ol(Le=>{"use strict";var Ed=Symbol.for("react.transitional.element"),h2=Symbol.for("react.portal"),m2=Symbol.for("react.fragment"),g2=Symbol.for("react.strict_mode"),p2=Symbol.for("react.profiler"),y2=Symbol.for("react.consumer"),b2=Symbol.for("react.context"),x2=Symbol.for("react.forward_ref"),v2=Symbol.for("react.suspense"),w2=Symbol.for("react.memo"),B0=Symbol.for("react.lazy"),k2=Symbol.for("react.activity"),R0=Symbol.iterator;function S2(e){return e===null||typeof e!="object"?null:(e=R0&&e[R0]||e["@@iterator"],typeof e=="function"?e:null)}var $0={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},H0=Object.assign,U0={};function ei(e,t,n){this.props=e,this.context=t,this.refs=U0,this.updater=n||$0}ei.prototype.isReactComponent={};ei.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};ei.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Y0(){}Y0.prototype=ei.prototype;function Td(e,t,n){this.props=e,this.context=t,this.refs=U0,this.updater=n||$0}var Ad=Td.prototype=new Y0;Ad.constructor=Td;H0(Ad,ei.prototype);Ad.isPureReactComponent=!0;var L0=Array.isArray;function Md(){}var Lt={H:null,A:null,T:null,S:null},j0=Object.prototype.hasOwnProperty;function Nd(e,t,n){var l=n.ref;return{$$typeof:Ed,type:e,key:t,ref:l!==void 0?l:null,props:n}}function C2(e,t){return Nd(e.type,t,e.props)}function Dd(e){return typeof e=="object"&&e!==null&&e.$$typeof===Ed}function M2(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var z0=/\/+/g;function Cd(e,t){return typeof e=="object"&&e!==null&&e.key!=null?M2(""+e.key):t.toString(36)}function E2(e){switch(e.status){case"fulfilled":return e.value;case"rejected":throw e.reason;default:switch(typeof e.status=="string"?e.then(Md,Md):(e.status="pending",e.then(function(t){e.status==="pending"&&(e.status="fulfilled",e.value=t)},function(t){e.status==="pending"&&(e.status="rejected",e.reason=t)})),e.status){case"fulfilled":return e.value;case"rejected":throw e.reason}}throw e}function Pa(e,t,n,l,o){var a=typeof e;(a==="undefined"||a==="boolean")&&(e=null);var i=!1;if(e===null)i=!0;else switch(a){case"bigint":case"string":case"number":i=!0;break;case"object":switch(e.$$typeof){case Ed:case h2:i=!0;break;case B0:return i=e._init,Pa(i(e._payload),t,n,l,o)}}if(i)return o=o(e),i=l===""?"."+Cd(e,0):l,L0(o)?(n="",i!=null&&(n=i.replace(z0,"$&/")+"/"),Pa(o,t,n,"",function(d){return d})):o!=null&&(Dd(o)&&(o=C2(o,n+(o.key==null||e&&e.key===o.key?"":(""+o.key).replace(z0,"$&/")+"/")+i)),t.push(o)),1;i=0;var r=l===""?".":l+":";if(L0(e))for(var s=0;s<e.length;s++)l=e[s],a=r+Cd(l,s),i+=Pa(l,t,n,a,o);else if(s=S2(e),typeof s=="function")for(e=s.call(e),s=0;!(l=e.next()).done;)l=l.value,a=r+Cd(l,s++),i+=Pa(l,t,n,a,o);else if(a==="object"){if(typeof e.then=="function")return Pa(E2(e),t,n,l,o);throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.")}return i}function Zs(e,t,n){if(e==null)return e;var l=[],o=0;return Pa(e,l,"","",function(a){return t.call(n,a,o++)}),l}function T2(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var O0=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},A2={map:Zs,forEach:function(e,t,n){Zs(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return Zs(e,function(){t++}),t},toArray:function(e){return Zs(e,function(t){return t})||[]},only:function(e){if(!Dd(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};Le.Activity=k2;Le.Children=A2;Le.Component=ei;Le.Fragment=m2;Le.Profiler=p2;Le.PureComponent=Td;Le.StrictMode=g2;Le.Suspense=v2;Le.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=Lt;Le.__COMPILER_RUNTIME={__proto__:null,c:function(e){return Lt.H.useMemoCache(e)}};Le.cache=function(e){return function(){return e.apply(null,arguments)}};Le.cacheSignal=function(){return null};Le.cloneElement=function(e,t,n){if(e==null)throw Error("The argument must be a React element, but you passed "+e+".");var l=H0({},e.props),o=e.key;if(t!=null)for(a in t.key!==void 0&&(o=""+t.key),t)!j0.call(t,a)||a==="key"||a==="__self"||a==="__source"||a==="ref"&&t.ref===void 0||(l[a]=t[a]);var a=arguments.length-2;if(a===1)l.children=n;else if(1<a){for(var i=Array(a),r=0;r<a;r++)i[r]=arguments[r+2];l.children=i}return Nd(e.type,o,l)};Le.createContext=function(e){return e={$$typeof:b2,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null},e.Provider=e,e.Consumer={$$typeof:y2,_context:e},e};Le.createElement=function(e,t,n){var l,o={},a=null;if(t!=null)for(l in t.key!==void 0&&(a=""+t.key),t)j0.call(t,l)&&l!=="key"&&l!=="__self"&&l!=="__source"&&(o[l]=t[l]);var i=arguments.length-2;if(i===1)o.children=n;else if(1<i){for(var r=Array(i),s=0;s<i;s++)r[s]=arguments[s+2];o.children=r}if(e&&e.defaultProps)for(l in i=e.defaultProps,i)o[l]===void 0&&(o[l]=i[l]);return Nd(e,a,o)};Le.createRef=function(){return{current:null}};Le.forwardRef=function(e){return{$$typeof:x2,render:e}};Le.isValidElement=Dd;Le.lazy=function(e){return{$$typeof:B0,_payload:{_status:-1,_result:e},_init:T2}};Le.memo=function(e,t){return{$$typeof:w2,type:e,compare:t===void 0?null:t}};Le.startTransition=function(e){var t=Lt.T,n={};Lt.T=n;try{var l=e(),o=Lt.S;o!==null&&o(n,l),typeof l=="object"&&l!==null&&typeof l.then=="function"&&l.then(Md,O0)}catch(a){O0(a)}finally{t!==null&&n.types!==null&&(t.types=n.types),Lt.T=t}};Le.unstable_useCacheRefresh=function(){return Lt.H.useCacheRefresh()};Le.use=function(e){return Lt.H.use(e)};Le.useActionState=function(e,t,n){return Lt.H.useActionState(e,t,n)};Le.useCallback=function(e,t){return Lt.H.useCallback(e,t)};Le.useContext=function(e){return Lt.H.useContext(e)};Le.useDebugValue=function(){};Le.useDeferredValue=function(e,t){return Lt.H.useDeferredValue(e,t)};Le.useEffect=function(e,t){return Lt.H.useEffect(e,t)};Le.useEffectEvent=function(e){return Lt.H.useEffectEvent(e)};Le.useId=function(){return Lt.H.useId()};Le.useImperativeHandle=function(e,t,n){return Lt.H.useImperativeHandle(e,t,n)};Le.useInsertionEffect=function(e,t){return Lt.H.useInsertionEffect(e,t)};Le.useLayoutEffect=function(e,t){return Lt.H.useLayoutEffect(e,t)};Le.useMemo=function(e,t){return Lt.H.useMemo(e,t)};Le.useOptimistic=function(e,t){return Lt.H.useOptimistic(e,t)};Le.useReducer=function(e,t,n){return Lt.H.useReducer(e,t,n)};Le.useRef=function(e){return Lt.H.useRef(e)};Le.useState=function(e){return Lt.H.useState(e)};Le.useSyncExternalStore=function(e,t,n){return Lt.H.useSyncExternalStore(e,t,n)};Le.useTransition=function(){return Lt.H.useTransition()};Le.version="19.2.8"});var zt=Ol((W6,q0)=>{"use strict";q0.exports=X0()});var P0=Ol(Ht=>{"use strict";function Od(e,t){var n=e.length;e.push(t);e:for(;0<n;){var l=n-1>>>1,o=e[l];if(0<Ks(o,t))e[l]=t,e[n]=o,n=l;else break e}}function Bl(e){return e.length===0?null:e[0]}function Ps(e){if(e.length===0)return null;var t=e[0],n=e.pop();if(n!==t){e[0]=n;e:for(var l=0,o=e.length,a=o>>>1;l<a;){var i=2*(l+1)-1,r=e[i],s=i+1,d=e[s];if(0>Ks(r,n))s<o&&0>Ks(d,r)?(e[l]=d,e[s]=n,l=s):(e[l]=r,e[i]=n,l=i);else if(s<o&&0>Ks(d,n))e[l]=d,e[s]=n,l=s;else break e}}return t}function Ks(e,t){var n=e.sortIndex-t.sortIndex;return n!==0?n:e.id-t.id}Ht.unstable_now=void 0;typeof performance=="object"&&typeof performance.now=="function"?(I0=performance,Ht.unstable_now=function(){return I0.now()}):(Rd=Date,Q0=Rd.now(),Ht.unstable_now=function(){return Rd.now()-Q0});var I0,Rd,Q0,eo=[],Mo=[],N2=1,al=null,wn=3,Bd=!1,mr=!1,gr=!1,$d=!1,V0=typeof setTimeout=="function"?setTimeout:null,F0=typeof clearTimeout=="function"?clearTimeout:null,W0=typeof setImmediate<"u"?setImmediate:null;function Js(e){for(var t=Bl(Mo);t!==null;){if(t.callback===null)Ps(Mo);else if(t.startTime<=e)Ps(Mo),t.sortIndex=t.expirationTime,Od(eo,t);else break;t=Bl(Mo)}}function Hd(e){if(gr=!1,Js(e),!mr)if(Bl(eo)!==null)mr=!0,ni||(ni=!0,ti());else{var t=Bl(Mo);t!==null&&Ud(Hd,t.startTime-e)}}var ni=!1,pr=-1,Z0=5,K0=-1;function J0(){return $d?!0:!(Ht.unstable_now()-K0<Z0)}function Ld(){if($d=!1,ni){var e=Ht.unstable_now();K0=e;var t=!0;try{e:{mr=!1,gr&&(gr=!1,F0(pr),pr=-1),Bd=!0;var n=wn;try{t:{for(Js(e),al=Bl(eo);al!==null&&!(al.expirationTime>e&&J0());){var l=al.callback;if(typeof l=="function"){al.callback=null,wn=al.priorityLevel;var o=l(al.expirationTime<=e);if(e=Ht.unstable_now(),typeof o=="function"){al.callback=o,Js(e),t=!0;break t}al===Bl(eo)&&Ps(eo),Js(e)}else Ps(eo);al=Bl(eo)}if(al!==null)t=!0;else{var a=Bl(Mo);a!==null&&Ud(Hd,a.startTime-e),t=!1}}break e}finally{al=null,wn=n,Bd=!1}t=void 0}}finally{t?ti():ni=!1}}}var ti;typeof W0=="function"?ti=function(){W0(Ld)}:typeof MessageChannel<"u"?(zd=new MessageChannel,G0=zd.port2,zd.port1.onmessage=Ld,ti=function(){G0.postMessage(null)}):ti=function(){V0(Ld,0)};var zd,G0;function Ud(e,t){pr=V0(function(){e(Ht.unstable_now())},t)}Ht.unstable_IdlePriority=5;Ht.unstable_ImmediatePriority=1;Ht.unstable_LowPriority=4;Ht.unstable_NormalPriority=3;Ht.unstable_Profiling=null;Ht.unstable_UserBlockingPriority=2;Ht.unstable_cancelCallback=function(e){e.callback=null};Ht.unstable_forceFrameRate=function(e){0>e||125<e?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Z0=0<e?Math.floor(1e3/e):5};Ht.unstable_getCurrentPriorityLevel=function(){return wn};Ht.unstable_next=function(e){switch(wn){case 1:case 2:case 3:var t=3;break;default:t=wn}var n=wn;wn=t;try{return e()}finally{wn=n}};Ht.unstable_requestPaint=function(){$d=!0};Ht.unstable_runWithPriority=function(e,t){switch(e){case 1:case 2:case 3:case 4:case 5:break;default:e=3}var n=wn;wn=e;try{return t()}finally{wn=n}};Ht.unstable_scheduleCallback=function(e,t,n){var l=Ht.unstable_now();switch(typeof n=="object"&&n!==null?(n=n.delay,n=typeof n=="number"&&0<n?l+n:l):n=l,e){case 1:var o=-1;break;case 2:o=250;break;case 5:o=1073741823;break;case 4:o=1e4;break;default:o=5e3}return o=n+o,e={id:N2++,callback:t,priorityLevel:e,startTime:n,expirationTime:o,sortIndex:-1},n>l?(e.sortIndex=n,Od(Mo,e),Bl(eo)===null&&e===Bl(Mo)&&(gr?(F0(pr),pr=-1):gr=!0,Ud(Hd,n-l))):(e.sortIndex=o,Od(eo,e),mr||Bd||(mr=!0,ni||(ni=!0,ti()))),e};Ht.unstable_shouldYield=J0;Ht.unstable_wrapCallback=function(e){var t=wn;return function(){var n=wn;wn=t;try{return e.apply(this,arguments)}finally{wn=n}}}});var tm=Ol((V6,em)=>{"use strict";em.exports=P0()});var lm=Ol(Mn=>{"use strict";var D2=zt();function nm(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function Eo(){}var Cn={d:{f:Eo,r:function(){throw Error(nm(522))},D:Eo,C:Eo,L:Eo,m:Eo,X:Eo,S:Eo,M:Eo},p:0,findDOMNode:null},R2=Symbol.for("react.portal");function L2(e,t,n){var l=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:R2,key:l==null?null:""+l,children:e,containerInfo:t,implementation:n}}var yr=D2.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function ec(e,t){if(e==="font")return"";if(typeof t=="string")return t==="use-credentials"?t:""}Mn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=Cn;Mn.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)throw Error(nm(299));return L2(e,t,null,n)};Mn.flushSync=function(e){var t=yr.T,n=Cn.p;try{if(yr.T=null,Cn.p=2,e)return e()}finally{yr.T=t,Cn.p=n,Cn.d.f()}};Mn.preconnect=function(e,t){typeof e=="string"&&(t?(t=t.crossOrigin,t=typeof t=="string"?t==="use-credentials"?t:"":void 0):t=null,Cn.d.C(e,t))};Mn.prefetchDNS=function(e){typeof e=="string"&&Cn.d.D(e)};Mn.preinit=function(e,t){if(typeof e=="string"&&t&&typeof t.as=="string"){var n=t.as,l=ec(n,t.crossOrigin),o=typeof t.integrity=="string"?t.integrity:void 0,a=typeof t.fetchPriority=="string"?t.fetchPriority:void 0;n==="style"?Cn.d.S(e,typeof t.precedence=="string"?t.precedence:void 0,{crossOrigin:l,integrity:o,fetchPriority:a}):n==="script"&&Cn.d.X(e,{crossOrigin:l,integrity:o,fetchPriority:a,nonce:typeof t.nonce=="string"?t.nonce:void 0})}};Mn.preinitModule=function(e,t){if(typeof e=="string")if(typeof t=="object"&&t!==null){if(t.as==null||t.as==="script"){var n=ec(t.as,t.crossOrigin);Cn.d.M(e,{crossOrigin:n,integrity:typeof t.integrity=="string"?t.integrity:void 0,nonce:typeof t.nonce=="string"?t.nonce:void 0})}}else t==null&&Cn.d.M(e)};Mn.preload=function(e,t){if(typeof e=="string"&&typeof t=="object"&&t!==null&&typeof t.as=="string"){var n=t.as,l=ec(n,t.crossOrigin);Cn.d.L(e,n,{crossOrigin:l,integrity:typeof t.integrity=="string"?t.integrity:void 0,nonce:typeof t.nonce=="string"?t.nonce:void 0,type:typeof t.type=="string"?t.type:void 0,fetchPriority:typeof t.fetchPriority=="string"?t.fetchPriority:void 0,referrerPolicy:typeof t.referrerPolicy=="string"?t.referrerPolicy:void 0,imageSrcSet:typeof t.imageSrcSet=="string"?t.imageSrcSet:void 0,imageSizes:typeof t.imageSizes=="string"?t.imageSizes:void 0,media:typeof t.media=="string"?t.media:void 0})}};Mn.preloadModule=function(e,t){if(typeof e=="string")if(t){var n=ec(t.as,t.crossOrigin);Cn.d.m(e,{as:typeof t.as=="string"&&t.as!=="script"?t.as:void 0,crossOrigin:n,integrity:typeof t.integrity=="string"?t.integrity:void 0})}else Cn.d.m(e)};Mn.requestFormReset=function(e){Cn.d.r(e)};Mn.unstable_batchedUpdates=function(e,t){return e(t)};Mn.useFormState=function(e,t,n){return yr.H.useFormState(e,t,n)};Mn.useFormStatus=function(){return yr.H.useHostTransitionStatus()};Mn.version="19.2.8"});var br=Ol((Z6,am)=>{"use strict";function om(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(om)}catch(e){console.error(e)}}om(),am.exports=lm()});var py=Ol(Cu=>{"use strict";var nn=tm(),D1=zt(),z2=br();function H(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function R1(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function as(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function L1(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function z1(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function im(e){if(as(e)!==e)throw Error(H(188))}function O2(e){var t=e.alternate;if(!t){if(t=as(e),t===null)throw Error(H(188));return t!==e?null:e}for(var n=e,l=t;;){var o=n.return;if(o===null)break;var a=o.alternate;if(a===null){if(l=o.return,l!==null){n=l;continue}break}if(o.child===a.child){for(a=o.child;a;){if(a===n)return im(o),e;if(a===l)return im(o),t;a=a.sibling}throw Error(H(188))}if(n.return!==l.return)n=o,l=a;else{for(var i=!1,r=o.child;r;){if(r===n){i=!0,n=o,l=a;break}if(r===l){i=!0,l=o,n=a;break}r=r.sibling}if(!i){for(r=a.child;r;){if(r===n){i=!0,n=a,l=o;break}if(r===l){i=!0,l=a,n=o;break}r=r.sibling}if(!i)throw Error(H(189))}}if(n.alternate!==l)throw Error(H(190))}if(n.tag!==3)throw Error(H(188));return n.stateNode.current===n?e:t}function O1(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=O1(e),t!==null)return t;e=e.sibling}return null}var $t=Object.assign,B2=Symbol.for("react.element"),tc=Symbol.for("react.transitional.element"),Er=Symbol.for("react.portal"),si=Symbol.for("react.fragment"),B1=Symbol.for("react.strict_mode"),b_=Symbol.for("react.profiler"),$1=Symbol.for("react.consumer"),so=Symbol.for("react.context"),mf=Symbol.for("react.forward_ref"),x_=Symbol.for("react.suspense"),v_=Symbol.for("react.suspense_list"),gf=Symbol.for("react.memo"),To=Symbol.for("react.lazy"),w_=Symbol.for("react.activity"),$2=Symbol.for("react.memo_cache_sentinel"),rm=Symbol.iterator;function xr(e){return e===null||typeof e!="object"?null:(e=rm&&e[rm]||e["@@iterator"],typeof e=="function"?e:null)}var H2=Symbol.for("react.client.reference");function k_(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===H2?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case si:return"Fragment";case b_:return"Profiler";case B1:return"StrictMode";case x_:return"Suspense";case v_:return"SuspenseList";case w_:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case Er:return"Portal";case so:return e.displayName||"Context";case $1:return(e._context.displayName||"Context")+".Consumer";case mf:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case gf:return t=e.displayName||null,t!==null?t:k_(e.type)||"Memo";case To:t=e._payload,e=e._init;try{return k_(e(t))}catch{}}return null}var Tr=Array.isArray,xe=D1.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,_t=z2.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ka={pending:!1,data:null,method:null,action:null},S_=[],ci=-1;function jl(e){return{current:e}}function an(e){0>ci||(e.current=S_[ci],S_[ci]=null,ci--)}function Nt(e,t){ci++,S_[ci]=e.current,e.current=t}var Yl=jl(null),Qr=jl(null),Uo=jl(null),zc=jl(null);function Oc(e,t){switch(Nt(Uo,t),Nt(Qr,e),Nt(Yl,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?h1(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=h1(t),e=ly(t,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}an(Yl),Nt(Yl,e)}function Ei(){an(Yl),an(Qr),an(Uo)}function C_(e){e.memoizedState!==null&&Nt(zc,e);var t=Yl.current,n=ly(t,e.type);t!==n&&(Nt(Qr,e),Nt(Yl,n))}function Bc(e){Qr.current===e&&(an(Yl),an(Qr)),zc.current===e&&(an(zc),ns._currentValue=ka)}var Yd,sm;function ba(e){if(Yd===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Yd=t&&t[1]||"",sm=-1<n.stack.indexOf(`
    at`)?" (<anonymous>)":-1<n.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Yd+e+sm}var jd=!1;function Xd(e,t){if(!e||jd)return"";jd=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var l={DetermineComponentFrameRoot:function(){try{if(t){var _=function(){throw Error()};if(Object.defineProperty(_.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(_,[])}catch(v){var m=v}Reflect.construct(e,[],_)}else{try{_.call()}catch(v){m=v}e.call(_.prototype)}}else{try{throw Error()}catch(v){m=v}(_=e())&&typeof _.catch=="function"&&_.catch(function(){})}}catch(v){if(v&&m&&typeof v.stack=="string")return[v.stack,m.stack]}return[null,null]}};l.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var o=Object.getOwnPropertyDescriptor(l.DetermineComponentFrameRoot,"name");o&&o.configurable&&Object.defineProperty(l.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var a=l.DetermineComponentFrameRoot(),i=a[0],r=a[1];if(i&&r){var s=i.split(`
`),d=r.split(`
`);for(o=l=0;l<s.length&&!s[l].includes("DetermineComponentFrameRoot");)l++;for(;o<d.length&&!d[o].includes("DetermineComponentFrameRoot");)o++;if(l===s.length||o===d.length)for(l=s.length-1,o=d.length-1;1<=l&&0<=o&&s[l]!==d[o];)o--;for(;1<=l&&0<=o;l--,o--)if(s[l]!==d[o]){if(l!==1||o!==1)do if(l--,o--,0>o||s[l]!==d[o]){var h=`
`+s[l].replace(" at new "," at ");return e.displayName&&h.includes("<anonymous>")&&(h=h.replace("<anonymous>",e.displayName)),h}while(1<=l&&0<=o);break}}}finally{jd=!1,Error.prepareStackTrace=n}return(n=e?e.displayName||e.name:"")?ba(n):""}function U2(e,t){switch(e.tag){case 26:case 27:case 5:return ba(e.type);case 16:return ba("Lazy");case 13:return e.child!==t&&t!==null?ba("Suspense Fallback"):ba("Suspense");case 19:return ba("SuspenseList");case 0:case 15:return Xd(e.type,!1);case 11:return Xd(e.type.render,!1);case 1:return Xd(e.type,!0);case 31:return ba("Activity");default:return""}}function cm(e){try{var t="",n=null;do t+=U2(e,n),n=e,e=e.return;while(e);return t}catch(l){return`
Error generating stack: `+l.message+`
`+l.stack}}var M_=Object.prototype.hasOwnProperty,pf=nn.unstable_scheduleCallback,qd=nn.unstable_cancelCallback,Y2=nn.unstable_shouldYield,j2=nn.unstable_requestPaint,Qn=nn.unstable_now,X2=nn.unstable_getCurrentPriorityLevel,H1=nn.unstable_ImmediatePriority,U1=nn.unstable_UserBlockingPriority,$c=nn.unstable_NormalPriority,q2=nn.unstable_LowPriority,Y1=nn.unstable_IdlePriority,I2=nn.log,Q2=nn.unstable_setDisableYieldValue,is=null,Wn=null;function zo(e){if(typeof I2=="function"&&Q2(e),Wn&&typeof Wn.setStrictMode=="function")try{Wn.setStrictMode(is,e)}catch{}}var Gn=Math.clz32?Math.clz32:V2,W2=Math.log,G2=Math.LN2;function V2(e){return e>>>=0,e===0?32:31-(W2(e)/G2|0)|0}var nc=256,lc=262144,oc=4194304;function xa(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function cu(e,t,n){var l=e.pendingLanes;if(l===0)return 0;var o=0,a=e.suspendedLanes,i=e.pingedLanes;e=e.warmLanes;var r=l&134217727;return r!==0?(l=r&~a,l!==0?o=xa(l):(i&=r,i!==0?o=xa(i):n||(n=r&~e,n!==0&&(o=xa(n))))):(r=l&~a,r!==0?o=xa(r):i!==0?o=xa(i):n||(n=l&~e,n!==0&&(o=xa(n)))),o===0?0:t!==0&&t!==o&&(t&a)===0&&(a=o&-o,n=t&-t,a>=n||a===32&&(n&4194048)!==0)?t:o}function rs(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function F2(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function j1(){var e=oc;return oc<<=1,(oc&62914560)===0&&(oc=4194304),e}function Id(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function ss(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function Z2(e,t,n,l,o,a){var i=e.pendingLanes;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=n,e.entangledLanes&=n,e.errorRecoveryDisabledLanes&=n,e.shellSuspendCounter=0;var r=e.entanglements,s=e.expirationTimes,d=e.hiddenUpdates;for(n=i&~n;0<n;){var h=31-Gn(n),_=1<<h;r[h]=0,s[h]=-1;var m=d[h];if(m!==null)for(d[h]=null,h=0;h<m.length;h++){var v=m[h];v!==null&&(v.lane&=-536870913)}n&=~_}l!==0&&X1(e,l,0),a!==0&&o===0&&e.tag!==0&&(e.suspendedLanes|=a&~(i&~t))}function X1(e,t,n){e.pendingLanes|=t,e.suspendedLanes&=~t;var l=31-Gn(t);e.entangledLanes|=t,e.entanglements[l]=e.entanglements[l]|1073741824|n&261930}function q1(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var l=31-Gn(n),o=1<<l;o&t|e[l]&t&&(e[l]|=t),n&=~o}}function I1(e,t){var n=t&-t;return n=(n&42)!==0?1:yf(n),(n&(e.suspendedLanes|t))!==0?0:n}function yf(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function bf(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function Q1(){var e=_t.p;return e!==0?e:(e=window.event,e===void 0?32:hy(e.type))}function um(e,t){var n=_t.p;try{return _t.p=e,t()}finally{_t.p=n}}var Jo=Math.random().toString(36).slice(2),_n="__reactFiber$"+Jo,$n="__reactProps$"+Jo,Hi="__reactContainer$"+Jo,E_="__reactEvents$"+Jo,K2="__reactListeners$"+Jo,J2="__reactHandles$"+Jo,dm="__reactResources$"+Jo,cs="__reactMarker$"+Jo;function xf(e){delete e[_n],delete e[$n],delete e[E_],delete e[K2],delete e[J2]}function ui(e){var t=e[_n];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Hi]||n[_n]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=b1(e);e!==null;){if(n=e[_n])return n;e=b1(e)}return t}e=n,n=e.parentNode}return null}function Ui(e){if(e=e[_n]||e[Hi]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function Ar(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(H(33))}function xi(e){var t=e[dm];return t||(t=e[dm]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function on(e){e[cs]=!0}var W1=new Set,G1={};function La(e,t){Ti(e,t),Ti(e+"Capture",t)}function Ti(e,t){for(G1[e]=t,e=0;e<t.length;e++)W1.add(t[e])}var P2=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),_m={},fm={};function eb(e){return M_.call(fm,e)?!0:M_.call(_m,e)?!1:P2.test(e)?fm[e]=!0:(_m[e]=!0,!1)}function bc(e,t,n){if(eb(t))if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":e.removeAttribute(t);return;case"boolean":var l=t.toLowerCase().slice(0,5);if(l!=="data-"&&l!=="aria-"){e.removeAttribute(t);return}}e.setAttribute(t,""+n)}}function ac(e,t,n){if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttribute(t,""+n)}}function to(e,t,n,l){if(l===null)e.removeAttribute(n);else{switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttributeNS(t,n,""+l)}}function rl(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function V1(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function tb(e,t,n){var l=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&typeof l<"u"&&typeof l.get=="function"&&typeof l.set=="function"){var o=l.get,a=l.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return o.call(this)},set:function(i){n=""+i,a.call(this,i)}}),Object.defineProperty(e,t,{enumerable:l.enumerable}),{getValue:function(){return n},setValue:function(i){n=""+i},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function T_(e){if(!e._valueTracker){var t=V1(e)?"checked":"value";e._valueTracker=tb(e,t,""+e[t])}}function F1(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),l="";return e&&(l=V1(e)?e.checked?"true":"false":e.value),e=l,e!==n?(t.setValue(e),!0):!1}function Hc(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var nb=/[\n"\\]/g;function ul(e){return e.replace(nb,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function A_(e,t,n,l,o,a,i,r){e.name="",i!=null&&typeof i!="function"&&typeof i!="symbol"&&typeof i!="boolean"?e.type=i:e.removeAttribute("type"),t!=null?i==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+rl(t)):e.value!==""+rl(t)&&(e.value=""+rl(t)):i!=="submit"&&i!=="reset"||e.removeAttribute("value"),t!=null?N_(e,i,rl(t)):n!=null?N_(e,i,rl(n)):l!=null&&e.removeAttribute("value"),o==null&&a!=null&&(e.defaultChecked=!!a),o!=null&&(e.checked=o&&typeof o!="function"&&typeof o!="symbol"),r!=null&&typeof r!="function"&&typeof r!="symbol"&&typeof r!="boolean"?e.name=""+rl(r):e.removeAttribute("name")}function Z1(e,t,n,l,o,a,i,r){if(a!=null&&typeof a!="function"&&typeof a!="symbol"&&typeof a!="boolean"&&(e.type=a),t!=null||n!=null){if(!(a!=="submit"&&a!=="reset"||t!=null)){T_(e);return}n=n!=null?""+rl(n):"",t=t!=null?""+rl(t):n,r||t===e.value||(e.value=t),e.defaultValue=t}l=l??o,l=typeof l!="function"&&typeof l!="symbol"&&!!l,e.checked=r?e.checked:!!l,e.defaultChecked=!!l,i!=null&&typeof i!="function"&&typeof i!="symbol"&&typeof i!="boolean"&&(e.name=i),T_(e)}function N_(e,t,n){t==="number"&&Hc(e.ownerDocument)===e||e.defaultValue===""+n||(e.defaultValue=""+n)}function vi(e,t,n,l){if(e=e.options,t){t={};for(var o=0;o<n.length;o++)t["$"+n[o]]=!0;for(n=0;n<e.length;n++)o=t.hasOwnProperty("$"+e[n].value),e[n].selected!==o&&(e[n].selected=o),o&&l&&(e[n].defaultSelected=!0)}else{for(n=""+rl(n),t=null,o=0;o<e.length;o++){if(e[o].value===n){e[o].selected=!0,l&&(e[o].defaultSelected=!0);return}t!==null||e[o].disabled||(t=e[o])}t!==null&&(t.selected=!0)}}function K1(e,t,n){if(t!=null&&(t=""+rl(t),t!==e.value&&(e.value=t),n==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=n!=null?""+rl(n):""}function J1(e,t,n,l){if(t==null){if(l!=null){if(n!=null)throw Error(H(92));if(Tr(l)){if(1<l.length)throw Error(H(93));l=l[0]}n=l}n==null&&(n=""),t=n}n=rl(t),e.defaultValue=n,l=e.textContent,l===n&&l!==""&&l!==null&&(e.value=l),T_(e)}function Ai(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var lb=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function hm(e,t,n){var l=t.indexOf("--")===0;n==null||typeof n=="boolean"||n===""?l?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="":l?e.setProperty(t,n):typeof n!="number"||n===0||lb.has(t)?t==="float"?e.cssFloat=n:e[t]=(""+n).trim():e[t]=n+"px"}function P1(e,t,n){if(t!=null&&typeof t!="object")throw Error(H(62));if(e=e.style,n!=null){for(var l in n)!n.hasOwnProperty(l)||t!=null&&t.hasOwnProperty(l)||(l.indexOf("--")===0?e.setProperty(l,""):l==="float"?e.cssFloat="":e[l]="");for(var o in t)l=t[o],t.hasOwnProperty(o)&&n[o]!==l&&hm(e,o,l)}else for(var a in t)t.hasOwnProperty(a)&&hm(e,a,t[a])}function vf(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ob=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),ab=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function xc(e){return ab.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function co(){}var D_=null;function wf(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var di=null,wi=null;function mm(e){var t=Ui(e);if(t&&(e=t.stateNode)){var n=e[$n]||null;e:switch(e=t.stateNode,t.type){case"input":if(A_(e,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll('input[name="'+ul(""+t)+'"][type="radio"]'),t=0;t<n.length;t++){var l=n[t];if(l!==e&&l.form===e.form){var o=l[$n]||null;if(!o)throw Error(H(90));A_(l,o.value,o.defaultValue,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name)}}for(t=0;t<n.length;t++)l=n[t],l.form===e.form&&F1(l)}break e;case"textarea":K1(e,n.value,n.defaultValue);break e;case"select":t=n.value,t!=null&&vi(e,!!n.multiple,t,!1)}}}var Qd=!1;function eg(e,t,n){if(Qd)return e(t,n);Qd=!0;try{var l=e(t);return l}finally{if(Qd=!1,(di!==null||wi!==null)&&(vu(),di&&(t=di,e=wi,wi=di=null,mm(t),e)))for(t=0;t<e.length;t++)mm(e[t])}}function Wr(e,t){var n=e.stateNode;if(n===null)return null;var l=n[$n]||null;if(l===null)return null;n=l[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(e=e.type,l=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!l;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(H(231,t,typeof n));return n}var mo=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),R_=!1;if(mo)try{li={},Object.defineProperty(li,"passive",{get:function(){R_=!0}}),window.addEventListener("test",li,li),window.removeEventListener("test",li,li)}catch{R_=!1}var li,Oo=null,kf=null,vc=null;function tg(){if(vc)return vc;var e,t=kf,n=t.length,l,o="value"in Oo?Oo.value:Oo.textContent,a=o.length;for(e=0;e<n&&t[e]===o[e];e++);var i=n-e;for(l=1;l<=i&&t[n-l]===o[a-l];l++);return vc=o.slice(e,1<l?1-l:void 0)}function wc(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function ic(){return!0}function gm(){return!1}function Hn(e){function t(n,l,o,a,i){this._reactName=n,this._targetInst=o,this.type=l,this.nativeEvent=a,this.target=i,this.currentTarget=null;for(var r in e)e.hasOwnProperty(r)&&(n=e[r],this[r]=n?n(a):a[r]);return this.isDefaultPrevented=(a.defaultPrevented!=null?a.defaultPrevented:a.returnValue===!1)?ic:gm,this.isPropagationStopped=gm,this}return $t(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=ic)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=ic)},persist:function(){},isPersistent:ic}),t}var za={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},uu=Hn(za),us=$t({},za,{view:0,detail:0}),ib=Hn(us),Wd,Gd,vr,du=$t({},us,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Sf,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==vr&&(vr&&e.type==="mousemove"?(Wd=e.screenX-vr.screenX,Gd=e.screenY-vr.screenY):Gd=Wd=0,vr=e),Wd)},movementY:function(e){return"movementY"in e?e.movementY:Gd}}),pm=Hn(du),rb=$t({},du,{dataTransfer:0}),sb=Hn(rb),cb=$t({},us,{relatedTarget:0}),Vd=Hn(cb),ub=$t({},za,{animationName:0,elapsedTime:0,pseudoElement:0}),db=Hn(ub),_b=$t({},za,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),fb=Hn(_b),hb=$t({},za,{data:0}),ym=Hn(hb),mb={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},gb={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},pb={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function yb(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=pb[e])?!!t[e]:!1}function Sf(){return yb}var bb=$t({},us,{key:function(e){if(e.key){var t=mb[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=wc(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?gb[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Sf,charCode:function(e){return e.type==="keypress"?wc(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?wc(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),xb=Hn(bb),vb=$t({},du,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),bm=Hn(vb),wb=$t({},us,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Sf}),kb=Hn(wb),Sb=$t({},za,{propertyName:0,elapsedTime:0,pseudoElement:0}),Cb=Hn(Sb),Mb=$t({},du,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Eb=Hn(Mb),Tb=$t({},za,{newState:0,oldState:0}),Ab=Hn(Tb),Nb=[9,13,27,32],Cf=mo&&"CompositionEvent"in window,Rr=null;mo&&"documentMode"in document&&(Rr=document.documentMode);var Db=mo&&"TextEvent"in window&&!Rr,ng=mo&&(!Cf||Rr&&8<Rr&&11>=Rr),xm=" ",vm=!1;function lg(e,t){switch(e){case"keyup":return Nb.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function og(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var _i=!1;function Rb(e,t){switch(e){case"compositionend":return og(t);case"keypress":return t.which!==32?null:(vm=!0,xm);case"textInput":return e=t.data,e===xm&&vm?null:e;default:return null}}function Lb(e,t){if(_i)return e==="compositionend"||!Cf&&lg(e,t)?(e=tg(),vc=kf=Oo=null,_i=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return ng&&t.locale!=="ko"?null:t.data;default:return null}}var zb={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function wm(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!zb[e.type]:t==="textarea"}function ag(e,t,n,l){di?wi?wi.push(l):wi=[l]:di=l,t=nu(t,"onChange"),0<t.length&&(n=new uu("onChange","change",null,n,l),e.push({event:n,listeners:t}))}var Lr=null,Gr=null;function Ob(e){ey(e,0)}function _u(e){var t=Ar(e);if(F1(t))return e}function km(e,t){if(e==="change")return t}var ig=!1;mo&&(mo?(sc="oninput"in document,sc||(Fd=document.createElement("div"),Fd.setAttribute("oninput","return;"),sc=typeof Fd.oninput=="function"),rc=sc):rc=!1,ig=rc&&(!document.documentMode||9<document.documentMode));var rc,sc,Fd;function Sm(){Lr&&(Lr.detachEvent("onpropertychange",rg),Gr=Lr=null)}function rg(e){if(e.propertyName==="value"&&_u(Gr)){var t=[];ag(t,Gr,e,wf(e)),eg(Ob,t)}}function Bb(e,t,n){e==="focusin"?(Sm(),Lr=t,Gr=n,Lr.attachEvent("onpropertychange",rg)):e==="focusout"&&Sm()}function $b(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return _u(Gr)}function Hb(e,t){if(e==="click")return _u(t)}function Ub(e,t){if(e==="input"||e==="change")return _u(t)}function Yb(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Fn=typeof Object.is=="function"?Object.is:Yb;function Vr(e,t){if(Fn(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),l=Object.keys(t);if(n.length!==l.length)return!1;for(l=0;l<n.length;l++){var o=n[l];if(!M_.call(t,o)||!Fn(e[o],t[o]))return!1}return!0}function Cm(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Mm(e,t){var n=Cm(e);e=0;for(var l;n;){if(n.nodeType===3){if(l=e+n.textContent.length,e<=t&&l>=t)return{node:n,offset:t-e};e=l}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Cm(n)}}function sg(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?sg(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function cg(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=Hc(e.document);t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Hc(e.document)}return t}function Mf(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}var jb=mo&&"documentMode"in document&&11>=document.documentMode,fi=null,L_=null,zr=null,z_=!1;function Em(e,t,n){var l=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;z_||fi==null||fi!==Hc(l)||(l=fi,"selectionStart"in l&&Mf(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),zr&&Vr(zr,l)||(zr=l,l=nu(L_,"onSelect"),0<l.length&&(t=new uu("onSelect","select",null,t,n),e.push({event:t,listeners:l}),t.target=fi)))}function ya(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var hi={animationend:ya("Animation","AnimationEnd"),animationiteration:ya("Animation","AnimationIteration"),animationstart:ya("Animation","AnimationStart"),transitionrun:ya("Transition","TransitionRun"),transitionstart:ya("Transition","TransitionStart"),transitioncancel:ya("Transition","TransitionCancel"),transitionend:ya("Transition","TransitionEnd")},Zd={},ug={};mo&&(ug=document.createElement("div").style,"AnimationEvent"in window||(delete hi.animationend.animation,delete hi.animationiteration.animation,delete hi.animationstart.animation),"TransitionEvent"in window||delete hi.transitionend.transition);function Oa(e){if(Zd[e])return Zd[e];if(!hi[e])return e;var t=hi[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in ug)return Zd[e]=t[n];return e}var dg=Oa("animationend"),_g=Oa("animationiteration"),fg=Oa("animationstart"),Xb=Oa("transitionrun"),qb=Oa("transitionstart"),Ib=Oa("transitioncancel"),hg=Oa("transitionend"),mg=new Map,O_="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");O_.push("scrollEnd");function Ml(e,t){mg.set(e,t),La(t,[e])}var Uc=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},il=[],mi=0,Ef=0;function fu(){for(var e=mi,t=Ef=mi=0;t<e;){var n=il[t];il[t++]=null;var l=il[t];il[t++]=null;var o=il[t];il[t++]=null;var a=il[t];if(il[t++]=null,l!==null&&o!==null){var i=l.pending;i===null?o.next=o:(o.next=i.next,i.next=o),l.pending=o}a!==0&&gg(n,o,a)}}function hu(e,t,n,l){il[mi++]=e,il[mi++]=t,il[mi++]=n,il[mi++]=l,Ef|=l,e.lanes|=l,e=e.alternate,e!==null&&(e.lanes|=l)}function Tf(e,t,n,l){return hu(e,t,n,l),Yc(e)}function Ba(e,t){return hu(e,null,null,t),Yc(e)}function gg(e,t,n){e.lanes|=n;var l=e.alternate;l!==null&&(l.lanes|=n);for(var o=!1,a=e.return;a!==null;)a.childLanes|=n,l=a.alternate,l!==null&&(l.childLanes|=n),a.tag===22&&(e=a.stateNode,e===null||e._visibility&1||(o=!0)),e=a,a=a.return;return e.tag===3?(a=e.stateNode,o&&t!==null&&(o=31-Gn(n),e=a.hiddenUpdates,l=e[o],l===null?e[o]=[t]:l.push(t),t.lane=n|536870912),a):null}function Yc(e){if(50<qr)throw qr=0,nf=null,Error(H(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var gi={};function Qb(e,t,n,l){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function qn(e,t,n,l){return new Qb(e,t,n,l)}function Af(e){return e=e.prototype,!(!e||!e.isReactComponent)}function _o(e,t){var n=e.alternate;return n===null?(n=qn(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&65011712,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n.refCleanup=e.refCleanup,n}function pg(e,t){e.flags&=65011714;var n=e.alternate;return n===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=n.childLanes,e.lanes=n.lanes,e.child=n.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=n.memoizedProps,e.memoizedState=n.memoizedState,e.updateQueue=n.updateQueue,e.type=n.type,t=n.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function kc(e,t,n,l,o,a){var i=0;if(l=e,typeof e=="function")Af(e)&&(i=1);else if(typeof e=="string")i=Vx(e,n,Yl.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case w_:return e=qn(31,n,t,o),e.elementType=w_,e.lanes=a,e;case si:return Sa(n.children,o,a,t);case B1:i=8,o|=24;break;case b_:return e=qn(12,n,t,o|2),e.elementType=b_,e.lanes=a,e;case x_:return e=qn(13,n,t,o),e.elementType=x_,e.lanes=a,e;case v_:return e=qn(19,n,t,o),e.elementType=v_,e.lanes=a,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case so:i=10;break e;case $1:i=9;break e;case mf:i=11;break e;case gf:i=14;break e;case To:i=16,l=null;break e}i=29,n=Error(H(130,e===null?"null":typeof e,"")),l=null}return t=qn(i,n,t,o),t.elementType=e,t.type=l,t.lanes=a,t}function Sa(e,t,n,l){return e=qn(7,e,l,t),e.lanes=n,e}function Kd(e,t,n){return e=qn(6,e,null,t),e.lanes=n,e}function yg(e){var t=qn(18,null,null,0);return t.stateNode=e,t}function Jd(e,t,n){return t=qn(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var Tm=new WeakMap;function dl(e,t){if(typeof e=="object"&&e!==null){var n=Tm.get(e);return n!==void 0?n:(t={value:e,source:t,stack:cm(t)},Tm.set(e,t),t)}return{value:e,source:t,stack:cm(t)}}var pi=[],yi=0,jc=null,Fr=0,sl=[],cl=0,Vo=null,$l=1,Hl="";function io(e,t){pi[yi++]=Fr,pi[yi++]=jc,jc=e,Fr=t}function bg(e,t,n){sl[cl++]=$l,sl[cl++]=Hl,sl[cl++]=Vo,Vo=e;var l=$l;e=Hl;var o=32-Gn(l)-1;l&=~(1<<o),n+=1;var a=32-Gn(t)+o;if(30<a){var i=o-o%5;a=(l&(1<<i)-1).toString(32),l>>=i,o-=i,$l=1<<32-Gn(t)+o|n<<o|l,Hl=a+e}else $l=1<<a|n<<o|l,Hl=e}function Nf(e){e.return!==null&&(io(e,1),bg(e,1,0))}function Df(e){for(;e===jc;)jc=pi[--yi],pi[yi]=null,Fr=pi[--yi],pi[yi]=null;for(;e===Vo;)Vo=sl[--cl],sl[cl]=null,Hl=sl[--cl],sl[cl]=null,$l=sl[--cl],sl[cl]=null}function xg(e,t){sl[cl++]=$l,sl[cl++]=Hl,sl[cl++]=Vo,$l=t.id,Hl=t.overflow,Vo=e}var fn=null,Bt=null,Ve=!1,Yo=null,_l=!1,B_=Error(H(519));function Fo(e){var t=Error(H(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Zr(dl(t,e)),B_}function Am(e){var t=e.stateNode,n=e.type,l=e.memoizedProps;switch(t[_n]=e,t[$n]=l,n){case"dialog":Ie("cancel",t),Ie("close",t);break;case"iframe":case"object":case"embed":Ie("load",t);break;case"video":case"audio":for(n=0;n<es.length;n++)Ie(es[n],t);break;case"source":Ie("error",t);break;case"img":case"image":case"link":Ie("error",t),Ie("load",t);break;case"details":Ie("toggle",t);break;case"input":Ie("invalid",t),Z1(t,l.value,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name,!0);break;case"select":Ie("invalid",t);break;case"textarea":Ie("invalid",t),J1(t,l.value,l.defaultValue,l.children)}n=l.children,typeof n!="string"&&typeof n!="number"&&typeof n!="bigint"||t.textContent===""+n||l.suppressHydrationWarning===!0||ny(t.textContent,n)?(l.popover!=null&&(Ie("beforetoggle",t),Ie("toggle",t)),l.onScroll!=null&&Ie("scroll",t),l.onScrollEnd!=null&&Ie("scrollend",t),l.onClick!=null&&(t.onclick=co),t=!0):t=!1,t||Fo(e,!0)}function Nm(e){for(fn=e.return;fn;)switch(fn.tag){case 5:case 31:case 13:_l=!1;return;case 27:case 3:_l=!0;return;default:fn=fn.return}}function oi(e){if(e!==fn)return!1;if(!Ve)return Nm(e),Ve=!0,!1;var t=e.tag,n;if((n=t!==3&&t!==27)&&((n=t===5)&&(n=e.type,n=!(n!=="form"&&n!=="button")||sf(e.type,e.memoizedProps)),n=!n),n&&Bt&&Fo(e),Nm(e),t===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(H(317));Bt=y1(e)}else if(t===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(H(317));Bt=y1(e)}else t===27?(t=Bt,Po(e.type)?(e=_f,_f=null,Bt=e):Bt=t):Bt=fn?hl(e.stateNode.nextSibling):null;return!0}function Ta(){Bt=fn=null,Ve=!1}function Pd(){var e=Yo;return e!==null&&(On===null?On=e:On.push.apply(On,e),Yo=null),e}function Zr(e){Yo===null?Yo=[e]:Yo.push(e)}var $_=jl(null),$a=null,uo=null;function No(e,t,n){Nt($_,t._currentValue),t._currentValue=n}function fo(e){e._currentValue=$_.current,an($_)}function H_(e,t,n){for(;e!==null;){var l=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,l!==null&&(l.childLanes|=t)):l!==null&&(l.childLanes&t)!==t&&(l.childLanes|=t),e===n)break;e=e.return}}function U_(e,t,n,l){var o=e.child;for(o!==null&&(o.return=e);o!==null;){var a=o.dependencies;if(a!==null){var i=o.child;a=a.firstContext;e:for(;a!==null;){var r=a;a=o;for(var s=0;s<t.length;s++)if(r.context===t[s]){a.lanes|=n,r=a.alternate,r!==null&&(r.lanes|=n),H_(a.return,n,e),l||(i=null);break e}a=r.next}}else if(o.tag===18){if(i=o.return,i===null)throw Error(H(341));i.lanes|=n,a=i.alternate,a!==null&&(a.lanes|=n),H_(i,n,e),i=null}else i=o.child;if(i!==null)i.return=o;else for(i=o;i!==null;){if(i===e){i=null;break}if(o=i.sibling,o!==null){o.return=i.return,i=o;break}i=i.return}o=i}}function Yi(e,t,n,l){e=null;for(var o=t,a=!1;o!==null;){if(!a){if((o.flags&524288)!==0)a=!0;else if((o.flags&262144)!==0)break}if(o.tag===10){var i=o.alternate;if(i===null)throw Error(H(387));if(i=i.memoizedProps,i!==null){var r=o.type;Fn(o.pendingProps.value,i.value)||(e!==null?e.push(r):e=[r])}}else if(o===zc.current){if(i=o.alternate,i===null)throw Error(H(387));i.memoizedState.memoizedState!==o.memoizedState.memoizedState&&(e!==null?e.push(ns):e=[ns])}o=o.return}e!==null&&U_(t,e,n,l),t.flags|=262144}function Xc(e){for(e=e.firstContext;e!==null;){if(!Fn(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function Aa(e){$a=e,uo=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function hn(e){return vg($a,e)}function cc(e,t){return $a===null&&Aa(e),vg(e,t)}function vg(e,t){var n=t._currentValue;if(t={context:t,memoizedValue:n,next:null},uo===null){if(e===null)throw Error(H(308));uo=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else uo=uo.next=t;return n}var Wb=typeof AbortController<"u"?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(n,l){e.push(l)}};this.abort=function(){t.aborted=!0,e.forEach(function(n){return n()})}},Gb=nn.unstable_scheduleCallback,Vb=nn.unstable_NormalPriority,Zt={$$typeof:so,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Rf(){return{controller:new Wb,data:new Map,refCount:0}}function ds(e){e.refCount--,e.refCount===0&&Gb(Vb,function(){e.controller.abort()})}var Or=null,Y_=0,Ni=0,ki=null;function Fb(e,t){if(Or===null){var n=Or=[];Y_=0,Ni=lh(),ki={status:"pending",value:void 0,then:function(l){n.push(l)}}}return Y_++,t.then(Dm,Dm),t}function Dm(){if(--Y_===0&&Or!==null){ki!==null&&(ki.status="fulfilled");var e=Or;Or=null,Ni=0,ki=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function Zb(e,t){var n=[],l={status:"pending",value:null,reason:null,then:function(o){n.push(o)}};return e.then(function(){l.status="fulfilled",l.value=t;for(var o=0;o<n.length;o++)(0,n[o])(t)},function(o){for(l.status="rejected",l.reason=o,o=0;o<n.length;o++)(0,n[o])(void 0)}),l}var Rm=xe.S;xe.S=function(e,t){Op=Qn(),typeof t=="object"&&t!==null&&typeof t.then=="function"&&Fb(e,t),Rm!==null&&Rm(e,t)};var Ca=jl(null);function Lf(){var e=Ca.current;return e!==null?e:Mt.pooledCache}function Sc(e,t){t===null?Nt(Ca,Ca.current):Nt(Ca,t.pool)}function wg(){var e=Lf();return e===null?null:{parent:Zt._currentValue,pool:e}}var ji=Error(H(460)),zf=Error(H(474)),mu=Error(H(542)),qc={then:function(){}};function Lm(e){return e=e.status,e==="fulfilled"||e==="rejected"}function kg(e,t,n){switch(n=e[n],n===void 0?e.push(t):n!==t&&(t.then(co,co),t=n),t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,Om(e),e;default:if(typeof t.status=="string")t.then(co,co);else{if(e=Mt,e!==null&&100<e.shellSuspendCounter)throw Error(H(482));e=t,e.status="pending",e.then(function(l){if(t.status==="pending"){var o=t;o.status="fulfilled",o.value=l}},function(l){if(t.status==="pending"){var o=t;o.status="rejected",o.reason=l}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,Om(e),e}throw Ma=t,ji}}function va(e){try{var t=e._init;return t(e._payload)}catch(n){throw n!==null&&typeof n=="object"&&typeof n.then=="function"?(Ma=n,ji):n}}var Ma=null;function zm(){if(Ma===null)throw Error(H(459));var e=Ma;return Ma=null,e}function Om(e){if(e===ji||e===mu)throw Error(H(483))}var Si=null,Kr=0;function uc(e){var t=Kr;return Kr+=1,Si===null&&(Si=[]),kg(Si,e,t)}function wr(e,t){t=t.props.ref,e.ref=t!==void 0?t:null}function dc(e,t){throw t.$$typeof===B2?Error(H(525)):(e=Object.prototype.toString.call(t),Error(H(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)))}function Sg(e){function t(p,x){if(e){var g=p.deletions;g===null?(p.deletions=[x],p.flags|=16):g.push(x)}}function n(p,x){if(!e)return null;for(;x!==null;)t(p,x),x=x.sibling;return null}function l(p){for(var x=new Map;p!==null;)p.key!==null?x.set(p.key,p):x.set(p.index,p),p=p.sibling;return x}function o(p,x){return p=_o(p,x),p.index=0,p.sibling=null,p}function a(p,x,g){return p.index=g,e?(g=p.alternate,g!==null?(g=g.index,g<x?(p.flags|=67108866,x):g):(p.flags|=67108866,x)):(p.flags|=1048576,x)}function i(p){return e&&p.alternate===null&&(p.flags|=67108866),p}function r(p,x,g,S){return x===null||x.tag!==6?(x=Kd(g,p.mode,S),x.return=p,x):(x=o(x,g),x.return=p,x)}function s(p,x,g,S){var W=g.type;return W===si?h(p,x,g.props.children,S,g.key):x!==null&&(x.elementType===W||typeof W=="object"&&W!==null&&W.$$typeof===To&&va(W)===x.type)?(x=o(x,g.props),wr(x,g),x.return=p,x):(x=kc(g.type,g.key,g.props,null,p.mode,S),wr(x,g),x.return=p,x)}function d(p,x,g,S){return x===null||x.tag!==4||x.stateNode.containerInfo!==g.containerInfo||x.stateNode.implementation!==g.implementation?(x=Jd(g,p.mode,S),x.return=p,x):(x=o(x,g.children||[]),x.return=p,x)}function h(p,x,g,S,W){return x===null||x.tag!==7?(x=Sa(g,p.mode,S,W),x.return=p,x):(x=o(x,g),x.return=p,x)}function _(p,x,g){if(typeof x=="string"&&x!==""||typeof x=="number"||typeof x=="bigint")return x=Kd(""+x,p.mode,g),x.return=p,x;if(typeof x=="object"&&x!==null){switch(x.$$typeof){case tc:return g=kc(x.type,x.key,x.props,null,p.mode,g),wr(g,x),g.return=p,g;case Er:return x=Jd(x,p.mode,g),x.return=p,x;case To:return x=va(x),_(p,x,g)}if(Tr(x)||xr(x))return x=Sa(x,p.mode,g,null),x.return=p,x;if(typeof x.then=="function")return _(p,uc(x),g);if(x.$$typeof===so)return _(p,cc(p,x),g);dc(p,x)}return null}function m(p,x,g,S){var W=x!==null?x.key:null;if(typeof g=="string"&&g!==""||typeof g=="number"||typeof g=="bigint")return W!==null?null:r(p,x,""+g,S);if(typeof g=="object"&&g!==null){switch(g.$$typeof){case tc:return g.key===W?s(p,x,g,S):null;case Er:return g.key===W?d(p,x,g,S):null;case To:return g=va(g),m(p,x,g,S)}if(Tr(g)||xr(g))return W!==null?null:h(p,x,g,S,null);if(typeof g.then=="function")return m(p,x,uc(g),S);if(g.$$typeof===so)return m(p,x,cc(p,g),S);dc(p,g)}return null}function v(p,x,g,S,W){if(typeof S=="string"&&S!==""||typeof S=="number"||typeof S=="bigint")return p=p.get(g)||null,r(x,p,""+S,W);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case tc:return p=p.get(S.key===null?g:S.key)||null,s(x,p,S,W);case Er:return p=p.get(S.key===null?g:S.key)||null,d(x,p,S,W);case To:return S=va(S),v(p,x,g,S,W)}if(Tr(S)||xr(S))return p=p.get(g)||null,h(x,p,S,W,null);if(typeof S.then=="function")return v(p,x,g,uc(S),W);if(S.$$typeof===so)return v(p,x,g,cc(x,S),W);dc(x,S)}return null}function k(p,x,g,S){for(var W=null,J=null,z=x,K=x=0,O=null;z!==null&&K<g.length;K++){z.index>K?(O=z,z=null):O=z.sibling;var F=m(p,z,g[K],S);if(F===null){z===null&&(z=O);break}e&&z&&F.alternate===null&&t(p,z),x=a(F,x,K),J===null?W=F:J.sibling=F,J=F,z=O}if(K===g.length)return n(p,z),Ve&&io(p,K),W;if(z===null){for(;K<g.length;K++)z=_(p,g[K],S),z!==null&&(x=a(z,x,K),J===null?W=z:J.sibling=z,J=z);return Ve&&io(p,K),W}for(z=l(z);K<g.length;K++)O=v(z,p,K,g[K],S),O!==null&&(e&&O.alternate!==null&&z.delete(O.key===null?K:O.key),x=a(O,x,K),J===null?W=O:J.sibling=O,J=O);return e&&z.forEach(function(re){return t(p,re)}),Ve&&io(p,K),W}function A(p,x,g,S){if(g==null)throw Error(H(151));for(var W=null,J=null,z=x,K=x=0,O=null,F=g.next();z!==null&&!F.done;K++,F=g.next()){z.index>K?(O=z,z=null):O=z.sibling;var re=m(p,z,F.value,S);if(re===null){z===null&&(z=O);break}e&&z&&re.alternate===null&&t(p,z),x=a(re,x,K),J===null?W=re:J.sibling=re,J=re,z=O}if(F.done)return n(p,z),Ve&&io(p,K),W;if(z===null){for(;!F.done;K++,F=g.next())F=_(p,F.value,S),F!==null&&(x=a(F,x,K),J===null?W=F:J.sibling=F,J=F);return Ve&&io(p,K),W}for(z=l(z);!F.done;K++,F=g.next())F=v(z,p,K,F.value,S),F!==null&&(e&&F.alternate!==null&&z.delete(F.key===null?K:F.key),x=a(F,x,K),J===null?W=F:J.sibling=F,J=F);return e&&z.forEach(function(Z){return t(p,Z)}),Ve&&io(p,K),W}function M(p,x,g,S){if(typeof g=="object"&&g!==null&&g.type===si&&g.key===null&&(g=g.props.children),typeof g=="object"&&g!==null){switch(g.$$typeof){case tc:e:{for(var W=g.key;x!==null;){if(x.key===W){if(W=g.type,W===si){if(x.tag===7){n(p,x.sibling),S=o(x,g.props.children),S.return=p,p=S;break e}}else if(x.elementType===W||typeof W=="object"&&W!==null&&W.$$typeof===To&&va(W)===x.type){n(p,x.sibling),S=o(x,g.props),wr(S,g),S.return=p,p=S;break e}n(p,x);break}else t(p,x);x=x.sibling}g.type===si?(S=Sa(g.props.children,p.mode,S,g.key),S.return=p,p=S):(S=kc(g.type,g.key,g.props,null,p.mode,S),wr(S,g),S.return=p,p=S)}return i(p);case Er:e:{for(W=g.key;x!==null;){if(x.key===W)if(x.tag===4&&x.stateNode.containerInfo===g.containerInfo&&x.stateNode.implementation===g.implementation){n(p,x.sibling),S=o(x,g.children||[]),S.return=p,p=S;break e}else{n(p,x);break}else t(p,x);x=x.sibling}S=Jd(g,p.mode,S),S.return=p,p=S}return i(p);case To:return g=va(g),M(p,x,g,S)}if(Tr(g))return k(p,x,g,S);if(xr(g)){if(W=xr(g),typeof W!="function")throw Error(H(150));return g=W.call(g),A(p,x,g,S)}if(typeof g.then=="function")return M(p,x,uc(g),S);if(g.$$typeof===so)return M(p,x,cc(p,g),S);dc(p,g)}return typeof g=="string"&&g!==""||typeof g=="number"||typeof g=="bigint"?(g=""+g,x!==null&&x.tag===6?(n(p,x.sibling),S=o(x,g),S.return=p,p=S):(n(p,x),S=Kd(g,p.mode,S),S.return=p,p=S),i(p)):n(p,x)}return function(p,x,g,S){try{Kr=0;var W=M(p,x,g,S);return Si=null,W}catch(z){if(z===ji||z===mu)throw z;var J=qn(29,z,null,p.mode);return J.lanes=S,J.return=p,J}}}var Na=Sg(!0),Cg=Sg(!1),Ao=!1;function Of(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function j_(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function jo(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Xo(e,t,n){var l=e.updateQueue;if(l===null)return null;if(l=l.shared,(dt&2)!==0){var o=l.pending;return o===null?t.next=t:(t.next=o.next,o.next=t),l.pending=t,t=Yc(e),gg(e,null,n),t}return hu(e,l,t,n),Yc(e)}function Br(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194048)!==0)){var l=t.lanes;l&=e.pendingLanes,n|=l,t.lanes=n,q1(e,n)}}function e_(e,t){var n=e.updateQueue,l=e.alternate;if(l!==null&&(l=l.updateQueue,n===l)){var o=null,a=null;if(n=n.firstBaseUpdate,n!==null){do{var i={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};a===null?o=a=i:a=a.next=i,n=n.next}while(n!==null);a===null?o=a=t:a=a.next=t}else o=a=t;n={baseState:l.baseState,firstBaseUpdate:o,lastBaseUpdate:a,shared:l.shared,callbacks:l.callbacks},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}var X_=!1;function $r(){if(X_){var e=ki;if(e!==null)throw e}}function Hr(e,t,n,l){X_=!1;var o=e.updateQueue;Ao=!1;var a=o.firstBaseUpdate,i=o.lastBaseUpdate,r=o.shared.pending;if(r!==null){o.shared.pending=null;var s=r,d=s.next;s.next=null,i===null?a=d:i.next=d,i=s;var h=e.alternate;h!==null&&(h=h.updateQueue,r=h.lastBaseUpdate,r!==i&&(r===null?h.firstBaseUpdate=d:r.next=d,h.lastBaseUpdate=s))}if(a!==null){var _=o.baseState;i=0,h=d=s=null,r=a;do{var m=r.lane&-536870913,v=m!==r.lane;if(v?(Ge&m)===m:(l&m)===m){m!==0&&m===Ni&&(X_=!0),h!==null&&(h=h.next={lane:0,tag:r.tag,payload:r.payload,callback:null,next:null});e:{var k=e,A=r;m=t;var M=n;switch(A.tag){case 1:if(k=A.payload,typeof k=="function"){_=k.call(M,_,m);break e}_=k;break e;case 3:k.flags=k.flags&-65537|128;case 0:if(k=A.payload,m=typeof k=="function"?k.call(M,_,m):k,m==null)break e;_=$t({},_,m);break e;case 2:Ao=!0}}m=r.callback,m!==null&&(e.flags|=64,v&&(e.flags|=8192),v=o.callbacks,v===null?o.callbacks=[m]:v.push(m))}else v={lane:m,tag:r.tag,payload:r.payload,callback:r.callback,next:null},h===null?(d=h=v,s=_):h=h.next=v,i|=m;if(r=r.next,r===null){if(r=o.shared.pending,r===null)break;v=r,r=v.next,v.next=null,o.lastBaseUpdate=v,o.shared.pending=null}}while(!0);h===null&&(s=_),o.baseState=s,o.firstBaseUpdate=d,o.lastBaseUpdate=h,a===null&&(o.shared.lanes=0),Ko|=i,e.lanes=i,e.memoizedState=_}}function Mg(e,t){if(typeof e!="function")throw Error(H(191,e));e.call(t)}function Eg(e,t){var n=e.callbacks;if(n!==null)for(e.callbacks=null,e=0;e<n.length;e++)Mg(n[e],t)}var Di=jl(null),Ic=jl(0);function Bm(e,t){e=bo,Nt(Ic,e),Nt(Di,t),bo=e|t.baseLanes}function q_(){Nt(Ic,bo),Nt(Di,Di.current)}function Bf(){bo=Ic.current,an(Di),an(Ic)}var Zn=jl(null),fl=null;function Do(e){var t=e.alternate;Nt(Qt,Qt.current&1),Nt(Zn,e),fl===null&&(t===null||Di.current!==null||t.memoizedState!==null)&&(fl=e)}function I_(e){Nt(Qt,Qt.current),Nt(Zn,e),fl===null&&(fl=e)}function Tg(e){e.tag===22?(Nt(Qt,Qt.current),Nt(Zn,e),fl===null&&(fl=e)):Ro(e)}function Ro(){Nt(Qt,Qt.current),Nt(Zn,Zn.current)}function Xn(e){an(Zn),fl===e&&(fl=null),an(Qt)}var Qt=jl(0);function Qc(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||uf(n)||df(n)))return t}else if(t.tag===19&&(t.memoizedProps.revealOrder==="forwards"||t.memoizedProps.revealOrder==="backwards"||t.memoizedProps.revealOrder==="unstable_legacy-backwards"||t.memoizedProps.revealOrder==="together")){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var go=0,Oe=null,kt=null,Vt=null,Wc=!1,Ci=!1,Da=!1,Gc=0,Jr=0,Mi=null,Kb=0;function Xt(){throw Error(H(321))}function $f(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Fn(e[n],t[n]))return!1;return!0}function Hf(e,t,n,l,o,a){return go=a,Oe=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,xe.H=e===null||e.memoizedState===null?ap:Ff,Da=!1,a=n(l,o),Da=!1,Ci&&(a=Ng(t,n,l,o)),Ag(e),a}function Ag(e){xe.H=Pr;var t=kt!==null&&kt.next!==null;if(go=0,Vt=kt=Oe=null,Wc=!1,Jr=0,Mi=null,t)throw Error(H(300));e===null||Kt||(e=e.dependencies,e!==null&&Xc(e)&&(Kt=!0))}function Ng(e,t,n,l){Oe=e;var o=0;do{if(Ci&&(Mi=null),Jr=0,Ci=!1,25<=o)throw Error(H(301));if(o+=1,Vt=kt=null,e.updateQueue!=null){var a=e.updateQueue;a.lastEffect=null,a.events=null,a.stores=null,a.memoCache!=null&&(a.memoCache.index=0)}xe.H=ip,a=t(n,l)}while(Ci);return a}function Jb(){var e=xe.H,t=e.useState()[0];return t=typeof t.then=="function"?_s(t):t,e=e.useState()[0],(kt!==null?kt.memoizedState:null)!==e&&(Oe.flags|=1024),t}function Uf(){var e=Gc!==0;return Gc=0,e}function Yf(e,t,n){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~n}function jf(e){if(Wc){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}Wc=!1}go=0,Vt=kt=Oe=null,Ci=!1,Jr=Gc=0,Mi=null}function En(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Vt===null?Oe.memoizedState=Vt=e:Vt=Vt.next=e,Vt}function Wt(){if(kt===null){var e=Oe.alternate;e=e!==null?e.memoizedState:null}else e=kt.next;var t=Vt===null?Oe.memoizedState:Vt.next;if(t!==null)Vt=t,kt=e;else{if(e===null)throw Oe.alternate===null?Error(H(467)):Error(H(310));kt=e,e={memoizedState:kt.memoizedState,baseState:kt.baseState,baseQueue:kt.baseQueue,queue:kt.queue,next:null},Vt===null?Oe.memoizedState=Vt=e:Vt=Vt.next=e}return Vt}function gu(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function _s(e){var t=Jr;return Jr+=1,Mi===null&&(Mi=[]),e=kg(Mi,e,t),t=Oe,(Vt===null?t.memoizedState:Vt.next)===null&&(t=t.alternate,xe.H=t===null||t.memoizedState===null?ap:Ff),e}function pu(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return _s(e);if(e.$$typeof===so)return hn(e)}throw Error(H(438,String(e)))}function Xf(e){var t=null,n=Oe.updateQueue;if(n!==null&&(t=n.memoCache),t==null){var l=Oe.alternate;l!==null&&(l=l.updateQueue,l!==null&&(l=l.memoCache,l!=null&&(t={data:l.data.map(function(o){return o.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),n===null&&(n=gu(),Oe.updateQueue=n),n.memoCache=t,n=t.data[t.index],n===void 0)for(n=t.data[t.index]=Array(e),l=0;l<e;l++)n[l]=$2;return t.index++,n}function po(e,t){return typeof t=="function"?t(e):t}function Cc(e){var t=Wt();return qf(t,kt,e)}function qf(e,t,n){var l=e.queue;if(l===null)throw Error(H(311));l.lastRenderedReducer=n;var o=e.baseQueue,a=l.pending;if(a!==null){if(o!==null){var i=o.next;o.next=a.next,a.next=i}t.baseQueue=o=a,l.pending=null}if(a=e.baseState,o===null)e.memoizedState=a;else{t=o.next;var r=i=null,s=null,d=t,h=!1;do{var _=d.lane&-536870913;if(_!==d.lane?(Ge&_)===_:(go&_)===_){var m=d.revertLane;if(m===0)s!==null&&(s=s.next={lane:0,revertLane:0,gesture:null,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null}),_===Ni&&(h=!0);else if((go&m)===m){d=d.next,m===Ni&&(h=!0);continue}else _={lane:0,revertLane:d.revertLane,gesture:null,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null},s===null?(r=s=_,i=a):s=s.next=_,Oe.lanes|=m,Ko|=m;_=d.action,Da&&n(a,_),a=d.hasEagerState?d.eagerState:n(a,_)}else m={lane:_,revertLane:d.revertLane,gesture:d.gesture,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null},s===null?(r=s=m,i=a):s=s.next=m,Oe.lanes|=_,Ko|=_;d=d.next}while(d!==null&&d!==t);if(s===null?i=a:s.next=r,!Fn(a,e.memoizedState)&&(Kt=!0,h&&(n=ki,n!==null)))throw n;e.memoizedState=a,e.baseState=i,e.baseQueue=s,l.lastRenderedState=a}return o===null&&(l.lanes=0),[e.memoizedState,l.dispatch]}function t_(e){var t=Wt(),n=t.queue;if(n===null)throw Error(H(311));n.lastRenderedReducer=e;var l=n.dispatch,o=n.pending,a=t.memoizedState;if(o!==null){n.pending=null;var i=o=o.next;do a=e(a,i.action),i=i.next;while(i!==o);Fn(a,t.memoizedState)||(Kt=!0),t.memoizedState=a,t.baseQueue===null&&(t.baseState=a),n.lastRenderedState=a}return[a,l]}function Dg(e,t,n){var l=Oe,o=Wt(),a=Ve;if(a){if(n===void 0)throw Error(H(407));n=n()}else n=t();var i=!Fn((kt||o).memoizedState,n);if(i&&(o.memoizedState=n,Kt=!0),o=o.queue,If(zg.bind(null,l,o,e),[e]),o.getSnapshot!==t||i||Vt!==null&&Vt.memoizedState.tag&1){if(l.flags|=2048,Ri(9,{destroy:void 0},Lg.bind(null,l,o,n,t),null),Mt===null)throw Error(H(349));a||(go&127)!==0||Rg(l,t,n)}return n}function Rg(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=Oe.updateQueue,t===null?(t=gu(),Oe.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Lg(e,t,n,l){t.value=n,t.getSnapshot=l,Og(t)&&Bg(e)}function zg(e,t,n){return n(function(){Og(t)&&Bg(e)})}function Og(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Fn(e,n)}catch{return!0}}function Bg(e){var t=Ba(e,2);t!==null&&Bn(t,e,2)}function Q_(e){var t=En();if(typeof e=="function"){var n=e;if(e=n(),Da){zo(!0);try{n()}finally{zo(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:po,lastRenderedState:e},t}function $g(e,t,n,l){return e.baseState=n,qf(e,kt,typeof l=="function"?l:po)}function Pb(e,t,n,l,o){if(bu(e))throw Error(H(485));if(e=t.action,e!==null){var a={payload:o,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(i){a.listeners.push(i)}};xe.T!==null?n(!0):a.isTransition=!1,l(a),n=t.pending,n===null?(a.next=t.pending=a,Hg(t,a)):(a.next=n.next,t.pending=n.next=a)}}function Hg(e,t){var n=t.action,l=t.payload,o=e.state;if(t.isTransition){var a=xe.T,i={};xe.T=i;try{var r=n(o,l),s=xe.S;s!==null&&s(i,r),$m(e,t,r)}catch(d){W_(e,t,d)}finally{a!==null&&i.types!==null&&(a.types=i.types),xe.T=a}}else try{a=n(o,l),$m(e,t,a)}catch(d){W_(e,t,d)}}function $m(e,t,n){n!==null&&typeof n=="object"&&typeof n.then=="function"?n.then(function(l){Hm(e,t,l)},function(l){return W_(e,t,l)}):Hm(e,t,n)}function Hm(e,t,n){t.status="fulfilled",t.value=n,Ug(t),e.state=n,t=e.pending,t!==null&&(n=t.next,n===t?e.pending=null:(n=n.next,t.next=n,Hg(e,n)))}function W_(e,t,n){var l=e.pending;if(e.pending=null,l!==null){l=l.next;do t.status="rejected",t.reason=n,Ug(t),t=t.next;while(t!==l)}e.action=null}function Ug(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function Yg(e,t){return t}function Um(e,t){if(Ve){var n=Mt.formState;if(n!==null){e:{var l=Oe;if(Ve){if(Bt){t:{for(var o=Bt,a=_l;o.nodeType!==8;){if(!a){o=null;break t}if(o=hl(o.nextSibling),o===null){o=null;break t}}a=o.data,o=a==="F!"||a==="F"?o:null}if(o){Bt=hl(o.nextSibling),l=o.data==="F!";break e}}Fo(l)}l=!1}l&&(t=n[0])}}return n=En(),n.memoizedState=n.baseState=t,l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Yg,lastRenderedState:t},n.queue=l,n=np.bind(null,Oe,l),l.dispatch=n,l=Q_(!1),a=Vf.bind(null,Oe,!1,l.queue),l=En(),o={state:t,dispatch:null,action:e,pending:null},l.queue=o,n=Pb.bind(null,Oe,o,a,n),o.dispatch=n,l.memoizedState=e,[t,n,!1]}function Ym(e){var t=Wt();return jg(t,kt,e)}function jg(e,t,n){if(t=qf(e,t,Yg)[0],e=Cc(po)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var l=_s(t)}catch(i){throw i===ji?mu:i}else l=t;t=Wt();var o=t.queue,a=o.dispatch;return n!==t.memoizedState&&(Oe.flags|=2048,Ri(9,{destroy:void 0},ex.bind(null,o,n),null)),[l,a,e]}function ex(e,t){e.action=t}function jm(e){var t=Wt(),n=kt;if(n!==null)return jg(t,n,e);Wt(),t=t.memoizedState,n=Wt();var l=n.queue.dispatch;return n.memoizedState=e,[t,l,!1]}function Ri(e,t,n,l){return e={tag:e,create:n,deps:l,inst:t,next:null},t=Oe.updateQueue,t===null&&(t=gu(),Oe.updateQueue=t),n=t.lastEffect,n===null?t.lastEffect=e.next=e:(l=n.next,n.next=e,e.next=l,t.lastEffect=e),e}function Xg(){return Wt().memoizedState}function Mc(e,t,n,l){var o=En();Oe.flags|=e,o.memoizedState=Ri(1|t,{destroy:void 0},n,l===void 0?null:l)}function yu(e,t,n,l){var o=Wt();l=l===void 0?null:l;var a=o.memoizedState.inst;kt!==null&&l!==null&&$f(l,kt.memoizedState.deps)?o.memoizedState=Ri(t,a,n,l):(Oe.flags|=e,o.memoizedState=Ri(1|t,a,n,l))}function Xm(e,t){Mc(8390656,8,e,t)}function If(e,t){yu(2048,8,e,t)}function tx(e){Oe.flags|=4;var t=Oe.updateQueue;if(t===null)t=gu(),Oe.updateQueue=t,t.events=[e];else{var n=t.events;n===null?t.events=[e]:n.push(e)}}function qg(e){var t=Wt().memoizedState;return tx({ref:t,nextImpl:e}),function(){if((dt&2)!==0)throw Error(H(440));return t.impl.apply(void 0,arguments)}}function Ig(e,t){return yu(4,2,e,t)}function Qg(e,t){return yu(4,4,e,t)}function Wg(e,t){if(typeof t=="function"){e=e();var n=t(e);return function(){typeof n=="function"?n():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Gg(e,t,n){n=n!=null?n.concat([e]):null,yu(4,4,Wg.bind(null,t,e),n)}function Qf(){}function Vg(e,t){var n=Wt();t=t===void 0?null:t;var l=n.memoizedState;return t!==null&&$f(t,l[1])?l[0]:(n.memoizedState=[e,t],e)}function Fg(e,t){var n=Wt();t=t===void 0?null:t;var l=n.memoizedState;if(t!==null&&$f(t,l[1]))return l[0];if(l=e(),Da){zo(!0);try{e()}finally{zo(!1)}}return n.memoizedState=[l,t],l}function Wf(e,t,n){return n===void 0||(go&1073741824)!==0&&(Ge&261930)===0?e.memoizedState=t:(e.memoizedState=n,e=$p(),Oe.lanes|=e,Ko|=e,n)}function Zg(e,t,n,l){return Fn(n,t)?n:Di.current!==null?(e=Wf(e,n,l),Fn(e,t)||(Kt=!0),e):(go&42)===0||(go&1073741824)!==0&&(Ge&261930)===0?(Kt=!0,e.memoizedState=n):(e=$p(),Oe.lanes|=e,Ko|=e,t)}function Kg(e,t,n,l,o){var a=_t.p;_t.p=a!==0&&8>a?a:8;var i=xe.T,r={};xe.T=r,Vf(e,!1,t,n);try{var s=o(),d=xe.S;if(d!==null&&d(r,s),s!==null&&typeof s=="object"&&typeof s.then=="function"){var h=Zb(s,l);Ur(e,t,h,Vn(e))}else Ur(e,t,l,Vn(e))}catch(_){Ur(e,t,{then:function(){},status:"rejected",reason:_},Vn())}finally{_t.p=a,i!==null&&r.types!==null&&(i.types=r.types),xe.T=i}}function nx(){}function G_(e,t,n,l){if(e.tag!==5)throw Error(H(476));var o=Jg(e).queue;Kg(e,o,t,ka,n===null?nx:function(){return Pg(e),n(l)})}function Jg(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:ka,baseState:ka,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:po,lastRenderedState:ka},next:null};var n={};return t.next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:po,lastRenderedState:n},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function Pg(e){var t=Jg(e);t.next===null&&(t=e.alternate.memoizedState),Ur(e,t.next.queue,{},Vn())}function Gf(){return hn(ns)}function ep(){return Wt().memoizedState}function tp(){return Wt().memoizedState}function lx(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var n=Vn();e=jo(n);var l=Xo(t,e,n);l!==null&&(Bn(l,t,n),Br(l,t,n)),t={cache:Rf()},e.payload=t;return}t=t.return}}function ox(e,t,n){var l=Vn();n={lane:l,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null},bu(e)?lp(t,n):(n=Tf(e,t,n,l),n!==null&&(Bn(n,e,l),op(n,t,l)))}function np(e,t,n){var l=Vn();Ur(e,t,n,l)}function Ur(e,t,n,l){var o={lane:l,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null};if(bu(e))lp(t,o);else{var a=e.alternate;if(e.lanes===0&&(a===null||a.lanes===0)&&(a=t.lastRenderedReducer,a!==null))try{var i=t.lastRenderedState,r=a(i,n);if(o.hasEagerState=!0,o.eagerState=r,Fn(r,i))return hu(e,t,o,0),Mt===null&&fu(),!1}catch{}if(n=Tf(e,t,o,l),n!==null)return Bn(n,e,l),op(n,t,l),!0}return!1}function Vf(e,t,n,l){if(l={lane:2,revertLane:lh(),gesture:null,action:l,hasEagerState:!1,eagerState:null,next:null},bu(e)){if(t)throw Error(H(479))}else t=Tf(e,n,l,2),t!==null&&Bn(t,e,2)}function bu(e){var t=e.alternate;return e===Oe||t!==null&&t===Oe}function lp(e,t){Ci=Wc=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function op(e,t,n){if((n&4194048)!==0){var l=t.lanes;l&=e.pendingLanes,n|=l,t.lanes=n,q1(e,n)}}var Pr={readContext:hn,use:pu,useCallback:Xt,useContext:Xt,useEffect:Xt,useImperativeHandle:Xt,useLayoutEffect:Xt,useInsertionEffect:Xt,useMemo:Xt,useReducer:Xt,useRef:Xt,useState:Xt,useDebugValue:Xt,useDeferredValue:Xt,useTransition:Xt,useSyncExternalStore:Xt,useId:Xt,useHostTransitionStatus:Xt,useFormState:Xt,useActionState:Xt,useOptimistic:Xt,useMemoCache:Xt,useCacheRefresh:Xt};Pr.useEffectEvent=Xt;var ap={readContext:hn,use:pu,useCallback:function(e,t){return En().memoizedState=[e,t===void 0?null:t],e},useContext:hn,useEffect:Xm,useImperativeHandle:function(e,t,n){n=n!=null?n.concat([e]):null,Mc(4194308,4,Wg.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Mc(4194308,4,e,t)},useInsertionEffect:function(e,t){Mc(4,2,e,t)},useMemo:function(e,t){var n=En();t=t===void 0?null:t;var l=e();if(Da){zo(!0);try{e()}finally{zo(!1)}}return n.memoizedState=[l,t],l},useReducer:function(e,t,n){var l=En();if(n!==void 0){var o=n(t);if(Da){zo(!0);try{n(t)}finally{zo(!1)}}}else o=t;return l.memoizedState=l.baseState=o,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:o},l.queue=e,e=e.dispatch=ox.bind(null,Oe,e),[l.memoizedState,e]},useRef:function(e){var t=En();return e={current:e},t.memoizedState=e},useState:function(e){e=Q_(e);var t=e.queue,n=np.bind(null,Oe,t);return t.dispatch=n,[e.memoizedState,n]},useDebugValue:Qf,useDeferredValue:function(e,t){var n=En();return Wf(n,e,t)},useTransition:function(){var e=Q_(!1);return e=Kg.bind(null,Oe,e.queue,!0,!1),En().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,n){var l=Oe,o=En();if(Ve){if(n===void 0)throw Error(H(407));n=n()}else{if(n=t(),Mt===null)throw Error(H(349));(Ge&127)!==0||Rg(l,t,n)}o.memoizedState=n;var a={value:n,getSnapshot:t};return o.queue=a,Xm(zg.bind(null,l,a,e),[e]),l.flags|=2048,Ri(9,{destroy:void 0},Lg.bind(null,l,a,n,t),null),n},useId:function(){var e=En(),t=Mt.identifierPrefix;if(Ve){var n=Hl,l=$l;n=(l&~(1<<32-Gn(l)-1)).toString(32)+n,t="_"+t+"R_"+n,n=Gc++,0<n&&(t+="H"+n.toString(32)),t+="_"}else n=Kb++,t="_"+t+"r_"+n.toString(32)+"_";return e.memoizedState=t},useHostTransitionStatus:Gf,useFormState:Um,useActionState:Um,useOptimistic:function(e){var t=En();t.memoizedState=t.baseState=e;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=n,t=Vf.bind(null,Oe,!0,n),n.dispatch=t,[e,t]},useMemoCache:Xf,useCacheRefresh:function(){return En().memoizedState=lx.bind(null,Oe)},useEffectEvent:function(e){var t=En(),n={impl:e};return t.memoizedState=n,function(){if((dt&2)!==0)throw Error(H(440));return n.impl.apply(void 0,arguments)}}},Ff={readContext:hn,use:pu,useCallback:Vg,useContext:hn,useEffect:If,useImperativeHandle:Gg,useInsertionEffect:Ig,useLayoutEffect:Qg,useMemo:Fg,useReducer:Cc,useRef:Xg,useState:function(){return Cc(po)},useDebugValue:Qf,useDeferredValue:function(e,t){var n=Wt();return Zg(n,kt.memoizedState,e,t)},useTransition:function(){var e=Cc(po)[0],t=Wt().memoizedState;return[typeof e=="boolean"?e:_s(e),t]},useSyncExternalStore:Dg,useId:ep,useHostTransitionStatus:Gf,useFormState:Ym,useActionState:Ym,useOptimistic:function(e,t){var n=Wt();return $g(n,kt,e,t)},useMemoCache:Xf,useCacheRefresh:tp};Ff.useEffectEvent=qg;var ip={readContext:hn,use:pu,useCallback:Vg,useContext:hn,useEffect:If,useImperativeHandle:Gg,useInsertionEffect:Ig,useLayoutEffect:Qg,useMemo:Fg,useReducer:t_,useRef:Xg,useState:function(){return t_(po)},useDebugValue:Qf,useDeferredValue:function(e,t){var n=Wt();return kt===null?Wf(n,e,t):Zg(n,kt.memoizedState,e,t)},useTransition:function(){var e=t_(po)[0],t=Wt().memoizedState;return[typeof e=="boolean"?e:_s(e),t]},useSyncExternalStore:Dg,useId:ep,useHostTransitionStatus:Gf,useFormState:jm,useActionState:jm,useOptimistic:function(e,t){var n=Wt();return kt!==null?$g(n,kt,e,t):(n.baseState=e,[e,n.queue.dispatch])},useMemoCache:Xf,useCacheRefresh:tp};ip.useEffectEvent=qg;function n_(e,t,n,l){t=e.memoizedState,n=n(l,t),n=n==null?t:$t({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var V_={enqueueSetState:function(e,t,n){e=e._reactInternals;var l=Vn(),o=jo(l);o.payload=t,n!=null&&(o.callback=n),t=Xo(e,o,l),t!==null&&(Bn(t,e,l),Br(t,e,l))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var l=Vn(),o=jo(l);o.tag=1,o.payload=t,n!=null&&(o.callback=n),t=Xo(e,o,l),t!==null&&(Bn(t,e,l),Br(t,e,l))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Vn(),l=jo(n);l.tag=2,t!=null&&(l.callback=t),t=Xo(e,l,n),t!==null&&(Bn(t,e,n),Br(t,e,n))}};function qm(e,t,n,l,o,a,i){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(l,a,i):t.prototype&&t.prototype.isPureReactComponent?!Vr(n,l)||!Vr(o,a):!0}function Im(e,t,n,l){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,l),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,l),t.state!==e&&V_.enqueueReplaceState(t,t.state,null)}function Ra(e,t){var n=t;if("ref"in t){n={};for(var l in t)l!=="ref"&&(n[l]=t[l])}if(e=e.defaultProps){n===t&&(n=$t({},n));for(var o in e)n[o]===void 0&&(n[o]=e[o])}return n}function rp(e){Uc(e)}function sp(e){console.error(e)}function cp(e){Uc(e)}function Vc(e,t){try{var n=e.onUncaughtError;n(t.value,{componentStack:t.stack})}catch(l){setTimeout(function(){throw l})}}function Qm(e,t,n){try{var l=e.onCaughtError;l(n.value,{componentStack:n.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(o){setTimeout(function(){throw o})}}function F_(e,t,n){return n=jo(n),n.tag=3,n.payload={element:null},n.callback=function(){Vc(e,t)},n}function up(e){return e=jo(e),e.tag=3,e}function dp(e,t,n,l){var o=n.type.getDerivedStateFromError;if(typeof o=="function"){var a=l.value;e.payload=function(){return o(a)},e.callback=function(){Qm(t,n,l)}}var i=n.stateNode;i!==null&&typeof i.componentDidCatch=="function"&&(e.callback=function(){Qm(t,n,l),typeof o!="function"&&(qo===null?qo=new Set([this]):qo.add(this));var r=l.stack;this.componentDidCatch(l.value,{componentStack:r!==null?r:""})})}function ax(e,t,n,l,o){if(n.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){if(t=n.alternate,t!==null&&Yi(t,n,o,!0),n=Zn.current,n!==null){switch(n.tag){case 31:case 13:return fl===null?Pc():n.alternate===null&&qt===0&&(qt=3),n.flags&=-257,n.flags|=65536,n.lanes=o,l===qc?n.flags|=16384:(t=n.updateQueue,t===null?n.updateQueue=new Set([l]):t.add(l),f_(e,l,o)),!1;case 22:return n.flags|=65536,l===qc?n.flags|=16384:(t=n.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([l])},n.updateQueue=t):(n=t.retryQueue,n===null?t.retryQueue=new Set([l]):n.add(l)),f_(e,l,o)),!1}throw Error(H(435,n.tag))}return f_(e,l,o),Pc(),!1}if(Ve)return t=Zn.current,t!==null?((t.flags&65536)===0&&(t.flags|=256),t.flags|=65536,t.lanes=o,l!==B_&&(e=Error(H(422),{cause:l}),Zr(dl(e,n)))):(l!==B_&&(t=Error(H(423),{cause:l}),Zr(dl(t,n))),e=e.current.alternate,e.flags|=65536,o&=-o,e.lanes|=o,l=dl(l,n),o=F_(e.stateNode,l,o),e_(e,o),qt!==4&&(qt=2)),!1;var a=Error(H(520),{cause:l});if(a=dl(a,n),Xr===null?Xr=[a]:Xr.push(a),qt!==4&&(qt=2),t===null)return!0;l=dl(l,n),n=t;do{switch(n.tag){case 3:return n.flags|=65536,e=o&-o,n.lanes|=e,e=F_(n.stateNode,l,e),e_(n,e),!1;case 1:if(t=n.type,a=n.stateNode,(n.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||a!==null&&typeof a.componentDidCatch=="function"&&(qo===null||!qo.has(a))))return n.flags|=65536,o&=-o,n.lanes|=o,o=up(o),dp(o,e,n,l),e_(n,o),!1}n=n.return}while(n!==null);return!1}var Zf=Error(H(461)),Kt=!1;function dn(e,t,n,l){t.child=e===null?Cg(t,null,n,l):Na(t,e.child,n,l)}function Wm(e,t,n,l,o){n=n.render;var a=t.ref;if("ref"in l){var i={};for(var r in l)r!=="ref"&&(i[r]=l[r])}else i=l;return Aa(t),l=Hf(e,t,n,i,a,o),r=Uf(),e!==null&&!Kt?(Yf(e,t,o),yo(e,t,o)):(Ve&&r&&Nf(t),t.flags|=1,dn(e,t,l,o),t.child)}function Gm(e,t,n,l,o){if(e===null){var a=n.type;return typeof a=="function"&&!Af(a)&&a.defaultProps===void 0&&n.compare===null?(t.tag=15,t.type=a,_p(e,t,a,l,o)):(e=kc(n.type,null,l,t,t.mode,o),e.ref=t.ref,e.return=t,t.child=e)}if(a=e.child,!Kf(e,o)){var i=a.memoizedProps;if(n=n.compare,n=n!==null?n:Vr,n(i,l)&&e.ref===t.ref)return yo(e,t,o)}return t.flags|=1,e=_o(a,l),e.ref=t.ref,e.return=t,t.child=e}function _p(e,t,n,l,o){if(e!==null){var a=e.memoizedProps;if(Vr(a,l)&&e.ref===t.ref)if(Kt=!1,t.pendingProps=l=a,Kf(e,o))(e.flags&131072)!==0&&(Kt=!0);else return t.lanes=e.lanes,yo(e,t,o)}return Z_(e,t,n,l,o)}function fp(e,t,n,l){var o=l.children,a=e!==null?e.memoizedState:null;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),l.mode==="hidden"){if((t.flags&128)!==0){if(a=a!==null?a.baseLanes|n:n,e!==null){for(l=t.child=e.child,o=0;l!==null;)o=o|l.lanes|l.childLanes,l=l.sibling;l=o&~a}else l=0,t.child=null;return Vm(e,t,a,n,l)}if((n&536870912)!==0)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&Sc(t,a!==null?a.cachePool:null),a!==null?Bm(t,a):q_(),Tg(t);else return l=t.lanes=536870912,Vm(e,t,a!==null?a.baseLanes|n:n,n,l)}else a!==null?(Sc(t,a.cachePool),Bm(t,a),Ro(t),t.memoizedState=null):(e!==null&&Sc(t,null),q_(),Ro(t));return dn(e,t,o,n),t.child}function Nr(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function Vm(e,t,n,l,o){var a=Lf();return a=a===null?null:{parent:Zt._currentValue,pool:a},t.memoizedState={baseLanes:n,cachePool:a},e!==null&&Sc(t,null),q_(),Tg(t),e!==null&&Yi(e,t,l,!0),t.childLanes=o,null}function Ec(e,t){return t=Fc({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function Fm(e,t,n){return Na(t,e.child,null,n),e=Ec(t,t.pendingProps),e.flags|=2,Xn(t),t.memoizedState=null,e}function ix(e,t,n){var l=t.pendingProps,o=(t.flags&128)!==0;if(t.flags&=-129,e===null){if(Ve){if(l.mode==="hidden")return e=Ec(t,l),t.lanes=536870912,Nr(null,e);if(I_(t),(e=Bt)?(e=ay(e,_l),e=e!==null&&e.data==="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:Vo!==null?{id:$l,overflow:Hl}:null,retryLane:536870912,hydrationErrors:null},n=yg(e),n.return=t,t.child=n,fn=t,Bt=null)):e=null,e===null)throw Fo(t);return t.lanes=536870912,null}return Ec(t,l)}var a=e.memoizedState;if(a!==null){var i=a.dehydrated;if(I_(t),o)if(t.flags&256)t.flags&=-257,t=Fm(e,t,n);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(H(558));else if(Kt||Yi(e,t,n,!1),o=(n&e.childLanes)!==0,Kt||o){if(l=Mt,l!==null&&(i=I1(l,n),i!==0&&i!==a.retryLane))throw a.retryLane=i,Ba(e,i),Bn(l,e,i),Zf;Pc(),t=Fm(e,t,n)}else e=a.treeContext,Bt=hl(i.nextSibling),fn=t,Ve=!0,Yo=null,_l=!1,e!==null&&xg(t,e),t=Ec(t,l),t.flags|=4096;return t}return e=_o(e.child,{mode:l.mode,children:l.children}),e.ref=t.ref,t.child=e,e.return=t,e}function Tc(e,t){var n=t.ref;if(n===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof n!="function"&&typeof n!="object")throw Error(H(284));(e===null||e.ref!==n)&&(t.flags|=4194816)}}function Z_(e,t,n,l,o){return Aa(t),n=Hf(e,t,n,l,void 0,o),l=Uf(),e!==null&&!Kt?(Yf(e,t,o),yo(e,t,o)):(Ve&&l&&Nf(t),t.flags|=1,dn(e,t,n,o),t.child)}function Zm(e,t,n,l,o,a){return Aa(t),t.updateQueue=null,n=Ng(t,l,n,o),Ag(e),l=Uf(),e!==null&&!Kt?(Yf(e,t,a),yo(e,t,a)):(Ve&&l&&Nf(t),t.flags|=1,dn(e,t,n,a),t.child)}function Km(e,t,n,l,o){if(Aa(t),t.stateNode===null){var a=gi,i=n.contextType;typeof i=="object"&&i!==null&&(a=hn(i)),a=new n(l,a),t.memoizedState=a.state!==null&&a.state!==void 0?a.state:null,a.updater=V_,t.stateNode=a,a._reactInternals=t,a=t.stateNode,a.props=l,a.state=t.memoizedState,a.refs={},Of(t),i=n.contextType,a.context=typeof i=="object"&&i!==null?hn(i):gi,a.state=t.memoizedState,i=n.getDerivedStateFromProps,typeof i=="function"&&(n_(t,n,i,l),a.state=t.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof a.getSnapshotBeforeUpdate=="function"||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(i=a.state,typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount(),i!==a.state&&V_.enqueueReplaceState(a,a.state,null),Hr(t,l,a,o),$r(),a.state=t.memoizedState),typeof a.componentDidMount=="function"&&(t.flags|=4194308),l=!0}else if(e===null){a=t.stateNode;var r=t.memoizedProps,s=Ra(n,r);a.props=s;var d=a.context,h=n.contextType;i=gi,typeof h=="object"&&h!==null&&(i=hn(h));var _=n.getDerivedStateFromProps;h=typeof _=="function"||typeof a.getSnapshotBeforeUpdate=="function",r=t.pendingProps!==r,h||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(r||d!==i)&&Im(t,a,l,i),Ao=!1;var m=t.memoizedState;a.state=m,Hr(t,l,a,o),$r(),d=t.memoizedState,r||m!==d||Ao?(typeof _=="function"&&(n_(t,n,_,l),d=t.memoizedState),(s=Ao||qm(t,n,s,l,m,d,i))?(h||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(t.flags|=4194308)):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=l,t.memoizedState=d),a.props=l,a.state=d,a.context=i,l=s):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),l=!1)}else{a=t.stateNode,j_(e,t),i=t.memoizedProps,h=Ra(n,i),a.props=h,_=t.pendingProps,m=a.context,d=n.contextType,s=gi,typeof d=="object"&&d!==null&&(s=hn(d)),r=n.getDerivedStateFromProps,(d=typeof r=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(i!==_||m!==s)&&Im(t,a,l,s),Ao=!1,m=t.memoizedState,a.state=m,Hr(t,l,a,o),$r();var v=t.memoizedState;i!==_||m!==v||Ao||e!==null&&e.dependencies!==null&&Xc(e.dependencies)?(typeof r=="function"&&(n_(t,n,r,l),v=t.memoizedState),(h=Ao||qm(t,n,h,l,m,v,s)||e!==null&&e.dependencies!==null&&Xc(e.dependencies))?(d||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(l,v,s),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(l,v,s)),typeof a.componentDidUpdate=="function"&&(t.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof a.componentDidUpdate!="function"||i===e.memoizedProps&&m===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||i===e.memoizedProps&&m===e.memoizedState||(t.flags|=1024),t.memoizedProps=l,t.memoizedState=v),a.props=l,a.state=v,a.context=s,l=h):(typeof a.componentDidUpdate!="function"||i===e.memoizedProps&&m===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||i===e.memoizedProps&&m===e.memoizedState||(t.flags|=1024),l=!1)}return a=l,Tc(e,t),l=(t.flags&128)!==0,a||l?(a=t.stateNode,n=l&&typeof n.getDerivedStateFromError!="function"?null:a.render(),t.flags|=1,e!==null&&l?(t.child=Na(t,e.child,null,o),t.child=Na(t,null,n,o)):dn(e,t,n,o),t.memoizedState=a.state,e=t.child):e=yo(e,t,o),e}function Jm(e,t,n,l){return Ta(),t.flags|=256,dn(e,t,n,l),t.child}var l_={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function o_(e){return{baseLanes:e,cachePool:wg()}}function a_(e,t,n){return e=e!==null?e.childLanes&~n:0,t&&(e|=In),e}function hp(e,t,n){var l=t.pendingProps,o=!1,a=(t.flags&128)!==0,i;if((i=a)||(i=e!==null&&e.memoizedState===null?!1:(Qt.current&2)!==0),i&&(o=!0,t.flags&=-129),i=(t.flags&32)!==0,t.flags&=-33,e===null){if(Ve){if(o?Do(t):Ro(t),(e=Bt)?(e=ay(e,_l),e=e!==null&&e.data!=="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:Vo!==null?{id:$l,overflow:Hl}:null,retryLane:536870912,hydrationErrors:null},n=yg(e),n.return=t,t.child=n,fn=t,Bt=null)):e=null,e===null)throw Fo(t);return df(e)?t.lanes=32:t.lanes=536870912,null}var r=l.children;return l=l.fallback,o?(Ro(t),o=t.mode,r=Fc({mode:"hidden",children:r},o),l=Sa(l,o,n,null),r.return=t,l.return=t,r.sibling=l,t.child=r,l=t.child,l.memoizedState=o_(n),l.childLanes=a_(e,i,n),t.memoizedState=l_,Nr(null,l)):(Do(t),K_(t,r))}var s=e.memoizedState;if(s!==null&&(r=s.dehydrated,r!==null)){if(a)t.flags&256?(Do(t),t.flags&=-257,t=i_(e,t,n)):t.memoizedState!==null?(Ro(t),t.child=e.child,t.flags|=128,t=null):(Ro(t),r=l.fallback,o=t.mode,l=Fc({mode:"visible",children:l.children},o),r=Sa(r,o,n,null),r.flags|=2,l.return=t,r.return=t,l.sibling=r,t.child=l,Na(t,e.child,null,n),l=t.child,l.memoizedState=o_(n),l.childLanes=a_(e,i,n),t.memoizedState=l_,t=Nr(null,l));else if(Do(t),df(r)){if(i=r.nextSibling&&r.nextSibling.dataset,i)var d=i.dgst;i=d,l=Error(H(419)),l.stack="",l.digest=i,Zr({value:l,source:null,stack:null}),t=i_(e,t,n)}else if(Kt||Yi(e,t,n,!1),i=(n&e.childLanes)!==0,Kt||i){if(i=Mt,i!==null&&(l=I1(i,n),l!==0&&l!==s.retryLane))throw s.retryLane=l,Ba(e,l),Bn(i,e,l),Zf;uf(r)||Pc(),t=i_(e,t,n)}else uf(r)?(t.flags|=192,t.child=e.child,t=null):(e=s.treeContext,Bt=hl(r.nextSibling),fn=t,Ve=!0,Yo=null,_l=!1,e!==null&&xg(t,e),t=K_(t,l.children),t.flags|=4096);return t}return o?(Ro(t),r=l.fallback,o=t.mode,s=e.child,d=s.sibling,l=_o(s,{mode:"hidden",children:l.children}),l.subtreeFlags=s.subtreeFlags&65011712,d!==null?r=_o(d,r):(r=Sa(r,o,n,null),r.flags|=2),r.return=t,l.return=t,l.sibling=r,t.child=l,Nr(null,l),l=t.child,r=e.child.memoizedState,r===null?r=o_(n):(o=r.cachePool,o!==null?(s=Zt._currentValue,o=o.parent!==s?{parent:s,pool:s}:o):o=wg(),r={baseLanes:r.baseLanes|n,cachePool:o}),l.memoizedState=r,l.childLanes=a_(e,i,n),t.memoizedState=l_,Nr(e.child,l)):(Do(t),n=e.child,e=n.sibling,n=_o(n,{mode:"visible",children:l.children}),n.return=t,n.sibling=null,e!==null&&(i=t.deletions,i===null?(t.deletions=[e],t.flags|=16):i.push(e)),t.child=n,t.memoizedState=null,n)}function K_(e,t){return t=Fc({mode:"visible",children:t},e.mode),t.return=e,e.child=t}function Fc(e,t){return e=qn(22,e,null,t),e.lanes=0,e}function i_(e,t,n){return Na(t,e.child,null,n),e=K_(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Pm(e,t,n){e.lanes|=t;var l=e.alternate;l!==null&&(l.lanes|=t),H_(e.return,t,n)}function r_(e,t,n,l,o,a){var i=e.memoizedState;i===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:l,tail:n,tailMode:o,treeForkCount:a}:(i.isBackwards=t,i.rendering=null,i.renderingStartTime=0,i.last=l,i.tail=n,i.tailMode=o,i.treeForkCount=a)}function mp(e,t,n){var l=t.pendingProps,o=l.revealOrder,a=l.tail;l=l.children;var i=Qt.current,r=(i&2)!==0;if(r?(i=i&1|2,t.flags|=128):i&=1,Nt(Qt,i),dn(e,t,l,n),l=Ve?Fr:0,!r&&e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Pm(e,n,t);else if(e.tag===19)Pm(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(o){case"forwards":for(n=t.child,o=null;n!==null;)e=n.alternate,e!==null&&Qc(e)===null&&(o=n),n=n.sibling;n=o,n===null?(o=t.child,t.child=null):(o=n.sibling,n.sibling=null),r_(t,!1,o,n,a,l);break;case"backwards":case"unstable_legacy-backwards":for(n=null,o=t.child,t.child=null;o!==null;){if(e=o.alternate,e!==null&&Qc(e)===null){t.child=o;break}e=o.sibling,o.sibling=n,n=o,o=e}r_(t,!0,n,null,a,l);break;case"together":r_(t,!1,null,null,void 0,l);break;default:t.memoizedState=null}return t.child}function yo(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Ko|=t.lanes,(n&t.childLanes)===0)if(e!==null){if(Yi(e,t,n,!1),(n&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(H(153));if(t.child!==null){for(e=t.child,n=_o(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=_o(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Kf(e,t){return(e.lanes&t)!==0?!0:(e=e.dependencies,!!(e!==null&&Xc(e)))}function rx(e,t,n){switch(t.tag){case 3:Oc(t,t.stateNode.containerInfo),No(t,Zt,e.memoizedState.cache),Ta();break;case 27:case 5:C_(t);break;case 4:Oc(t,t.stateNode.containerInfo);break;case 10:No(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,I_(t),null;break;case 13:var l=t.memoizedState;if(l!==null)return l.dehydrated!==null?(Do(t),t.flags|=128,null):(n&t.child.childLanes)!==0?hp(e,t,n):(Do(t),e=yo(e,t,n),e!==null?e.sibling:null);Do(t);break;case 19:var o=(e.flags&128)!==0;if(l=(n&t.childLanes)!==0,l||(Yi(e,t,n,!1),l=(n&t.childLanes)!==0),o){if(l)return mp(e,t,n);t.flags|=128}if(o=t.memoizedState,o!==null&&(o.rendering=null,o.tail=null,o.lastEffect=null),Nt(Qt,Qt.current),l)break;return null;case 22:return t.lanes=0,fp(e,t,n,t.pendingProps);case 24:No(t,Zt,e.memoizedState.cache)}return yo(e,t,n)}function gp(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps)Kt=!0;else{if(!Kf(e,n)&&(t.flags&128)===0)return Kt=!1,rx(e,t,n);Kt=(e.flags&131072)!==0}else Kt=!1,Ve&&(t.flags&1048576)!==0&&bg(t,Fr,t.index);switch(t.lanes=0,t.tag){case 16:e:{var l=t.pendingProps;if(e=va(t.elementType),t.type=e,typeof e=="function")Af(e)?(l=Ra(e,l),t.tag=1,t=Km(null,t,e,l,n)):(t.tag=0,t=Z_(null,t,e,l,n));else{if(e!=null){var o=e.$$typeof;if(o===mf){t.tag=11,t=Wm(null,t,e,l,n);break e}else if(o===gf){t.tag=14,t=Gm(null,t,e,l,n);break e}}throw t=k_(e)||e,Error(H(306,t,""))}}return t;case 0:return Z_(e,t,t.type,t.pendingProps,n);case 1:return l=t.type,o=Ra(l,t.pendingProps),Km(e,t,l,o,n);case 3:e:{if(Oc(t,t.stateNode.containerInfo),e===null)throw Error(H(387));l=t.pendingProps;var a=t.memoizedState;o=a.element,j_(e,t),Hr(t,l,null,n);var i=t.memoizedState;if(l=i.cache,No(t,Zt,l),l!==a.cache&&U_(t,[Zt],n,!0),$r(),l=i.element,a.isDehydrated)if(a={element:l,isDehydrated:!1,cache:i.cache},t.updateQueue.baseState=a,t.memoizedState=a,t.flags&256){t=Jm(e,t,l,n);break e}else if(l!==o){o=dl(Error(H(424)),t),Zr(o),t=Jm(e,t,l,n);break e}else for(e=t.stateNode.containerInfo,e.nodeType===9?e=e.body:e=e.nodeName==="HTML"?e.ownerDocument.body:e,Bt=hl(e.firstChild),fn=t,Ve=!0,Yo=null,_l=!0,n=Cg(t,null,l,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Ta(),l===o){t=yo(e,t,n);break e}dn(e,t,l,n)}t=t.child}return t;case 26:return Tc(e,t),e===null?(n=v1(t.type,null,t.pendingProps,null))?t.memoizedState=n:Ve||(n=t.type,e=t.pendingProps,l=lu(Uo.current).createElement(n),l[_n]=t,l[$n]=e,mn(l,n,e),on(l),t.stateNode=l):t.memoizedState=v1(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return C_(t),e===null&&Ve&&(l=t.stateNode=iy(t.type,t.pendingProps,Uo.current),fn=t,_l=!0,o=Bt,Po(t.type)?(_f=o,Bt=hl(l.firstChild)):Bt=o),dn(e,t,t.pendingProps.children,n),Tc(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&Ve&&((o=l=Bt)&&(l=Ox(l,t.type,t.pendingProps,_l),l!==null?(t.stateNode=l,fn=t,Bt=hl(l.firstChild),_l=!1,o=!0):o=!1),o||Fo(t)),C_(t),o=t.type,a=t.pendingProps,i=e!==null?e.memoizedProps:null,l=a.children,sf(o,a)?l=null:i!==null&&sf(o,i)&&(t.flags|=32),t.memoizedState!==null&&(o=Hf(e,t,Jb,null,null,n),ns._currentValue=o),Tc(e,t),dn(e,t,l,n),t.child;case 6:return e===null&&Ve&&((e=n=Bt)&&(n=Bx(n,t.pendingProps,_l),n!==null?(t.stateNode=n,fn=t,Bt=null,e=!0):e=!1),e||Fo(t)),null;case 13:return hp(e,t,n);case 4:return Oc(t,t.stateNode.containerInfo),l=t.pendingProps,e===null?t.child=Na(t,null,l,n):dn(e,t,l,n),t.child;case 11:return Wm(e,t,t.type,t.pendingProps,n);case 7:return dn(e,t,t.pendingProps,n),t.child;case 8:return dn(e,t,t.pendingProps.children,n),t.child;case 12:return dn(e,t,t.pendingProps.children,n),t.child;case 10:return l=t.pendingProps,No(t,t.type,l.value),dn(e,t,l.children,n),t.child;case 9:return o=t.type._context,l=t.pendingProps.children,Aa(t),o=hn(o),l=l(o),t.flags|=1,dn(e,t,l,n),t.child;case 14:return Gm(e,t,t.type,t.pendingProps,n);case 15:return _p(e,t,t.type,t.pendingProps,n);case 19:return mp(e,t,n);case 31:return ix(e,t,n);case 22:return fp(e,t,n,t.pendingProps);case 24:return Aa(t),l=hn(Zt),e===null?(o=Lf(),o===null&&(o=Mt,a=Rf(),o.pooledCache=a,a.refCount++,a!==null&&(o.pooledCacheLanes|=n),o=a),t.memoizedState={parent:l,cache:o},Of(t),No(t,Zt,o)):((e.lanes&n)!==0&&(j_(e,t),Hr(t,null,null,n),$r()),o=e.memoizedState,a=t.memoizedState,o.parent!==l?(o={parent:l,cache:l},t.memoizedState=o,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=o),No(t,Zt,l)):(l=a.cache,No(t,Zt,l),l!==o.cache&&U_(t,[Zt],n,!0))),dn(e,t,t.pendingProps.children,n),t.child;case 29:throw t.pendingProps}throw Error(H(156,t.tag))}function no(e){e.flags|=4}function s_(e,t,n,l,o){if((t=(e.mode&32)!==0)&&(t=!1),t){if(e.flags|=16777216,(o&335544128)===o)if(e.stateNode.complete)e.flags|=8192;else if(Yp())e.flags|=8192;else throw Ma=qc,zf}else e.flags&=-16777217}function e1(e,t){if(t.type!=="stylesheet"||(t.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!cy(t))if(Yp())e.flags|=8192;else throw Ma=qc,zf}function _c(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag!==22?j1():536870912,e.lanes|=t,Li|=t)}function kr(e,t){if(!Ve)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var l=null;n!==null;)n.alternate!==null&&(l=n),n=n.sibling;l===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:l.sibling=null}}function Ot(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,l=0;if(t)for(var o=e.child;o!==null;)n|=o.lanes|o.childLanes,l|=o.subtreeFlags&65011712,l|=o.flags&65011712,o.return=e,o=o.sibling;else for(o=e.child;o!==null;)n|=o.lanes|o.childLanes,l|=o.subtreeFlags,l|=o.flags,o.return=e,o=o.sibling;return e.subtreeFlags|=l,e.childLanes=n,t}function sx(e,t,n){var l=t.pendingProps;switch(Df(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ot(t),null;case 1:return Ot(t),null;case 3:return n=t.stateNode,l=null,e!==null&&(l=e.memoizedState.cache),t.memoizedState.cache!==l&&(t.flags|=2048),fo(Zt),Ei(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(oi(t)?no(t):e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,Pd())),Ot(t),null;case 26:var o=t.type,a=t.memoizedState;return e===null?(no(t),a!==null?(Ot(t),e1(t,a)):(Ot(t),s_(t,o,null,l,n))):a?a!==e.memoizedState?(no(t),Ot(t),e1(t,a)):(Ot(t),t.flags&=-16777217):(e=e.memoizedProps,e!==l&&no(t),Ot(t),s_(t,o,e,l,n)),null;case 27:if(Bc(t),n=Uo.current,o=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==l&&no(t);else{if(!l){if(t.stateNode===null)throw Error(H(166));return Ot(t),null}e=Yl.current,oi(t)?Am(t,e):(e=iy(o,l,n),t.stateNode=e,no(t))}return Ot(t),null;case 5:if(Bc(t),o=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==l&&no(t);else{if(!l){if(t.stateNode===null)throw Error(H(166));return Ot(t),null}if(a=Yl.current,oi(t))Am(t,a);else{var i=lu(Uo.current);switch(a){case 1:a=i.createElementNS("http://www.w3.org/2000/svg",o);break;case 2:a=i.createElementNS("http://www.w3.org/1998/Math/MathML",o);break;default:switch(o){case"svg":a=i.createElementNS("http://www.w3.org/2000/svg",o);break;case"math":a=i.createElementNS("http://www.w3.org/1998/Math/MathML",o);break;case"script":a=i.createElement("div"),a.innerHTML="<script><\/script>",a=a.removeChild(a.firstChild);break;case"select":a=typeof l.is=="string"?i.createElement("select",{is:l.is}):i.createElement("select"),l.multiple?a.multiple=!0:l.size&&(a.size=l.size);break;default:a=typeof l.is=="string"?i.createElement(o,{is:l.is}):i.createElement(o)}}a[_n]=t,a[$n]=l;e:for(i=t.child;i!==null;){if(i.tag===5||i.tag===6)a.appendChild(i.stateNode);else if(i.tag!==4&&i.tag!==27&&i.child!==null){i.child.return=i,i=i.child;continue}if(i===t)break e;for(;i.sibling===null;){if(i.return===null||i.return===t)break e;i=i.return}i.sibling.return=i.return,i=i.sibling}t.stateNode=a;e:switch(mn(a,o,l),o){case"button":case"input":case"select":case"textarea":l=!!l.autoFocus;break e;case"img":l=!0;break e;default:l=!1}l&&no(t)}}return Ot(t),s_(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,n),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==l&&no(t);else{if(typeof l!="string"&&t.stateNode===null)throw Error(H(166));if(e=Uo.current,oi(t)){if(e=t.stateNode,n=t.memoizedProps,l=null,o=fn,o!==null)switch(o.tag){case 27:case 5:l=o.memoizedProps}e[_n]=t,e=!!(e.nodeValue===n||l!==null&&l.suppressHydrationWarning===!0||ny(e.nodeValue,n)),e||Fo(t,!0)}else e=lu(e).createTextNode(l),e[_n]=t,t.stateNode=e}return Ot(t),null;case 31:if(n=t.memoizedState,e===null||e.memoizedState!==null){if(l=oi(t),n!==null){if(e===null){if(!l)throw Error(H(318));if(e=t.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(H(557));e[_n]=t}else Ta(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Ot(t),e=!1}else n=Pd(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=n),e=!0;if(!e)return t.flags&256?(Xn(t),t):(Xn(t),null);if((t.flags&128)!==0)throw Error(H(558))}return Ot(t),null;case 13:if(l=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(o=oi(t),l!==null&&l.dehydrated!==null){if(e===null){if(!o)throw Error(H(318));if(o=t.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(H(317));o[_n]=t}else Ta(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Ot(t),o=!1}else o=Pd(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=o),o=!0;if(!o)return t.flags&256?(Xn(t),t):(Xn(t),null)}return Xn(t),(t.flags&128)!==0?(t.lanes=n,t):(n=l!==null,e=e!==null&&e.memoizedState!==null,n&&(l=t.child,o=null,l.alternate!==null&&l.alternate.memoizedState!==null&&l.alternate.memoizedState.cachePool!==null&&(o=l.alternate.memoizedState.cachePool.pool),a=null,l.memoizedState!==null&&l.memoizedState.cachePool!==null&&(a=l.memoizedState.cachePool.pool),a!==o&&(l.flags|=2048)),n!==e&&n&&(t.child.flags|=8192),_c(t,t.updateQueue),Ot(t),null);case 4:return Ei(),e===null&&oh(t.stateNode.containerInfo),Ot(t),null;case 10:return fo(t.type),Ot(t),null;case 19:if(an(Qt),l=t.memoizedState,l===null)return Ot(t),null;if(o=(t.flags&128)!==0,a=l.rendering,a===null)if(o)kr(l,!1);else{if(qt!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(a=Qc(e),a!==null){for(t.flags|=128,kr(l,!1),e=a.updateQueue,t.updateQueue=e,_c(t,e),t.subtreeFlags=0,e=n,n=t.child;n!==null;)pg(n,e),n=n.sibling;return Nt(Qt,Qt.current&1|2),Ve&&io(t,l.treeForkCount),t.child}e=e.sibling}l.tail!==null&&Qn()>Kc&&(t.flags|=128,o=!0,kr(l,!1),t.lanes=4194304)}else{if(!o)if(e=Qc(a),e!==null){if(t.flags|=128,o=!0,e=e.updateQueue,t.updateQueue=e,_c(t,e),kr(l,!0),l.tail===null&&l.tailMode==="hidden"&&!a.alternate&&!Ve)return Ot(t),null}else 2*Qn()-l.renderingStartTime>Kc&&n!==536870912&&(t.flags|=128,o=!0,kr(l,!1),t.lanes=4194304);l.isBackwards?(a.sibling=t.child,t.child=a):(e=l.last,e!==null?e.sibling=a:t.child=a,l.last=a)}return l.tail!==null?(e=l.tail,l.rendering=e,l.tail=e.sibling,l.renderingStartTime=Qn(),e.sibling=null,n=Qt.current,Nt(Qt,o?n&1|2:n&1),Ve&&io(t,l.treeForkCount),e):(Ot(t),null);case 22:case 23:return Xn(t),Bf(),l=t.memoizedState!==null,e!==null?e.memoizedState!==null!==l&&(t.flags|=8192):l&&(t.flags|=8192),l?(n&536870912)!==0&&(t.flags&128)===0&&(Ot(t),t.subtreeFlags&6&&(t.flags|=8192)):Ot(t),n=t.updateQueue,n!==null&&_c(t,n.retryQueue),n=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),l=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(l=t.memoizedState.cachePool.pool),l!==n&&(t.flags|=2048),e!==null&&an(Ca),null;case 24:return n=null,e!==null&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),fo(Zt),Ot(t),null;case 25:return null;case 30:return null}throw Error(H(156,t.tag))}function cx(e,t){switch(Df(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return fo(Zt),Ei(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return Bc(t),null;case 31:if(t.memoizedState!==null){if(Xn(t),t.alternate===null)throw Error(H(340));Ta()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(Xn(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(H(340));Ta()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return an(Qt),null;case 4:return Ei(),null;case 10:return fo(t.type),null;case 22:case 23:return Xn(t),Bf(),e!==null&&an(Ca),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return fo(Zt),null;case 25:return null;default:return null}}function pp(e,t){switch(Df(t),t.tag){case 3:fo(Zt),Ei();break;case 26:case 27:case 5:Bc(t);break;case 4:Ei();break;case 31:t.memoizedState!==null&&Xn(t);break;case 13:Xn(t);break;case 19:an(Qt);break;case 10:fo(t.type);break;case 22:case 23:Xn(t),Bf(),e!==null&&an(Ca);break;case 24:fo(Zt)}}function fs(e,t){try{var n=t.updateQueue,l=n!==null?n.lastEffect:null;if(l!==null){var o=l.next;n=o;do{if((n.tag&e)===e){l=void 0;var a=n.create,i=n.inst;l=a(),i.destroy=l}n=n.next}while(n!==o)}}catch(r){yt(t,t.return,r)}}function Zo(e,t,n){try{var l=t.updateQueue,o=l!==null?l.lastEffect:null;if(o!==null){var a=o.next;l=a;do{if((l.tag&e)===e){var i=l.inst,r=i.destroy;if(r!==void 0){i.destroy=void 0,o=t;var s=n,d=r;try{d()}catch(h){yt(o,s,h)}}}l=l.next}while(l!==a)}}catch(h){yt(t,t.return,h)}}function yp(e){var t=e.updateQueue;if(t!==null){var n=e.stateNode;try{Eg(t,n)}catch(l){yt(e,e.return,l)}}}function bp(e,t,n){n.props=Ra(e.type,e.memoizedProps),n.state=e.memoizedState;try{n.componentWillUnmount()}catch(l){yt(e,t,l)}}function Yr(e,t){try{var n=e.ref;if(n!==null){switch(e.tag){case 26:case 27:case 5:var l=e.stateNode;break;case 30:l=e.stateNode;break;default:l=e.stateNode}typeof n=="function"?e.refCleanup=n(l):n.current=l}}catch(o){yt(e,t,o)}}function Ul(e,t){var n=e.ref,l=e.refCleanup;if(n!==null)if(typeof l=="function")try{l()}catch(o){yt(e,t,o)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof n=="function")try{n(null)}catch(o){yt(e,t,o)}else n.current=null}function xp(e){var t=e.type,n=e.memoizedProps,l=e.stateNode;try{e:switch(t){case"button":case"input":case"select":case"textarea":n.autoFocus&&l.focus();break e;case"img":n.src?l.src=n.src:n.srcSet&&(l.srcset=n.srcSet)}}catch(o){yt(e,e.return,o)}}function c_(e,t,n){try{var l=e.stateNode;Ax(l,e.type,n,t),l[$n]=t}catch(o){yt(e,e.return,o)}}function vp(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Po(e.type)||e.tag===4}function u_(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||vp(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Po(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function J_(e,t,n){var l=e.tag;if(l===5||l===6)e=e.stateNode,t?(n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n).insertBefore(e,t):(t=n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n,t.appendChild(e),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=co));else if(l!==4&&(l===27&&Po(e.type)&&(n=e.stateNode,t=null),e=e.child,e!==null))for(J_(e,t,n),e=e.sibling;e!==null;)J_(e,t,n),e=e.sibling}function Zc(e,t,n){var l=e.tag;if(l===5||l===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(l!==4&&(l===27&&Po(e.type)&&(n=e.stateNode),e=e.child,e!==null))for(Zc(e,t,n),e=e.sibling;e!==null;)Zc(e,t,n),e=e.sibling}function wp(e){var t=e.stateNode,n=e.memoizedProps;try{for(var l=e.type,o=t.attributes;o.length;)t.removeAttributeNode(o[0]);mn(t,l,n),t[_n]=e,t[$n]=n}catch(a){yt(e,e.return,a)}}var ro=!1,Ft=!1,d_=!1,t1=typeof WeakSet=="function"?WeakSet:Set,ln=null;function ux(e,t){if(e=e.containerInfo,af=ru,e=cg(e),Mf(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var l=n.getSelection&&n.getSelection();if(l&&l.rangeCount!==0){n=l.anchorNode;var o=l.anchorOffset,a=l.focusNode;l=l.focusOffset;try{n.nodeType,a.nodeType}catch{n=null;break e}var i=0,r=-1,s=-1,d=0,h=0,_=e,m=null;t:for(;;){for(var v;_!==n||o!==0&&_.nodeType!==3||(r=i+o),_!==a||l!==0&&_.nodeType!==3||(s=i+l),_.nodeType===3&&(i+=_.nodeValue.length),(v=_.firstChild)!==null;)m=_,_=v;for(;;){if(_===e)break t;if(m===n&&++d===o&&(r=i),m===a&&++h===l&&(s=i),(v=_.nextSibling)!==null)break;_=m,m=_.parentNode}_=v}n=r===-1||s===-1?null:{start:r,end:s}}else n=null}n=n||{start:0,end:0}}else n=null;for(rf={focusedElem:e,selectionRange:n},ru=!1,ln=t;ln!==null;)if(t=ln,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,ln=e;else for(;ln!==null;){switch(t=ln,a=t.alternate,e=t.flags,t.tag){case 0:if((e&4)!==0&&(e=t.updateQueue,e=e!==null?e.events:null,e!==null))for(n=0;n<e.length;n++)o=e[n],o.ref.impl=o.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&a!==null){e=void 0,n=t,o=a.memoizedProps,a=a.memoizedState,l=n.stateNode;try{var k=Ra(n.type,o);e=l.getSnapshotBeforeUpdate(k,a),l.__reactInternalSnapshotBeforeUpdate=e}catch(A){yt(n,n.return,A)}}break;case 3:if((e&1024)!==0){if(e=t.stateNode.containerInfo,n=e.nodeType,n===9)cf(e);else if(n===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":cf(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(H(163))}if(e=t.sibling,e!==null){e.return=t.return,ln=e;break}ln=t.return}}function kp(e,t,n){var l=n.flags;switch(n.tag){case 0:case 11:case 15:oo(e,n),l&4&&fs(5,n);break;case 1:if(oo(e,n),l&4)if(e=n.stateNode,t===null)try{e.componentDidMount()}catch(i){yt(n,n.return,i)}else{var o=Ra(n.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(o,t,e.__reactInternalSnapshotBeforeUpdate)}catch(i){yt(n,n.return,i)}}l&64&&yp(n),l&512&&Yr(n,n.return);break;case 3:if(oo(e,n),l&64&&(e=n.updateQueue,e!==null)){if(t=null,n.child!==null)switch(n.child.tag){case 27:case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}try{Eg(e,t)}catch(i){yt(n,n.return,i)}}break;case 27:t===null&&l&4&&wp(n);case 26:case 5:oo(e,n),t===null&&l&4&&xp(n),l&512&&Yr(n,n.return);break;case 12:oo(e,n);break;case 31:oo(e,n),l&4&&Mp(e,n);break;case 13:oo(e,n),l&4&&Ep(e,n),l&64&&(e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(n=bx.bind(null,n),$x(e,n))));break;case 22:if(l=n.memoizedState!==null||ro,!l){t=t!==null&&t.memoizedState!==null||Ft,o=ro;var a=Ft;ro=l,(Ft=t)&&!a?ao(e,n,(n.subtreeFlags&8772)!==0):oo(e,n),ro=o,Ft=a}break;case 30:break;default:oo(e,n)}}function Sp(e){var t=e.alternate;t!==null&&(e.alternate=null,Sp(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&xf(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var Ut=null,zn=!1;function lo(e,t,n){for(n=n.child;n!==null;)Cp(e,t,n),n=n.sibling}function Cp(e,t,n){if(Wn&&typeof Wn.onCommitFiberUnmount=="function")try{Wn.onCommitFiberUnmount(is,n)}catch{}switch(n.tag){case 26:Ft||Ul(n,t),lo(e,t,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&(n=n.stateNode,n.parentNode.removeChild(n));break;case 27:Ft||Ul(n,t);var l=Ut,o=zn;Po(n.type)&&(Ut=n.stateNode,zn=!1),lo(e,t,n),Ir(n.stateNode),Ut=l,zn=o;break;case 5:Ft||Ul(n,t);case 6:if(l=Ut,o=zn,Ut=null,lo(e,t,n),Ut=l,zn=o,Ut!==null)if(zn)try{(Ut.nodeType===9?Ut.body:Ut.nodeName==="HTML"?Ut.ownerDocument.body:Ut).removeChild(n.stateNode)}catch(a){yt(n,t,a)}else try{Ut.removeChild(n.stateNode)}catch(a){yt(n,t,a)}break;case 18:Ut!==null&&(zn?(e=Ut,g1(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,n.stateNode),$i(e)):g1(Ut,n.stateNode));break;case 4:l=Ut,o=zn,Ut=n.stateNode.containerInfo,zn=!0,lo(e,t,n),Ut=l,zn=o;break;case 0:case 11:case 14:case 15:Zo(2,n,t),Ft||Zo(4,n,t),lo(e,t,n);break;case 1:Ft||(Ul(n,t),l=n.stateNode,typeof l.componentWillUnmount=="function"&&bp(n,t,l)),lo(e,t,n);break;case 21:lo(e,t,n);break;case 22:Ft=(l=Ft)||n.memoizedState!==null,lo(e,t,n),Ft=l;break;default:lo(e,t,n)}}function Mp(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{$i(e)}catch(n){yt(t,t.return,n)}}}function Ep(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{$i(e)}catch(n){yt(t,t.return,n)}}function dx(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new t1),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new t1),t;default:throw Error(H(435,e.tag))}}function fc(e,t){var n=dx(e);t.forEach(function(l){if(!n.has(l)){n.add(l);var o=xx.bind(null,e,l);l.then(o,o)}})}function Rn(e,t){var n=t.deletions;if(n!==null)for(var l=0;l<n.length;l++){var o=n[l],a=e,i=t,r=i;e:for(;r!==null;){switch(r.tag){case 27:if(Po(r.type)){Ut=r.stateNode,zn=!1;break e}break;case 5:Ut=r.stateNode,zn=!1;break e;case 3:case 4:Ut=r.stateNode.containerInfo,zn=!0;break e}r=r.return}if(Ut===null)throw Error(H(160));Cp(a,i,o),Ut=null,zn=!1,a=o.alternate,a!==null&&(a.return=null),o.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)Tp(t,e),t=t.sibling}var Cl=null;function Tp(e,t){var n=e.alternate,l=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:Rn(t,e),Ln(e),l&4&&(Zo(3,e,e.return),fs(3,e),Zo(5,e,e.return));break;case 1:Rn(t,e),Ln(e),l&512&&(Ft||n===null||Ul(n,n.return)),l&64&&ro&&(e=e.updateQueue,e!==null&&(l=e.callbacks,l!==null&&(n=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=n===null?l:n.concat(l))));break;case 26:var o=Cl;if(Rn(t,e),Ln(e),l&512&&(Ft||n===null||Ul(n,n.return)),l&4){var a=n!==null?n.memoizedState:null;if(l=e.memoizedState,n===null)if(l===null)if(e.stateNode===null){e:{l=e.type,n=e.memoizedProps,o=o.ownerDocument||o;t:switch(l){case"title":a=o.getElementsByTagName("title")[0],(!a||a[cs]||a[_n]||a.namespaceURI==="http://www.w3.org/2000/svg"||a.hasAttribute("itemprop"))&&(a=o.createElement(l),o.head.insertBefore(a,o.querySelector("head > title"))),mn(a,l,n),a[_n]=e,on(a),l=a;break e;case"link":var i=k1("link","href",o).get(l+(n.href||""));if(i){for(var r=0;r<i.length;r++)if(a=i[r],a.getAttribute("href")===(n.href==null||n.href===""?null:n.href)&&a.getAttribute("rel")===(n.rel==null?null:n.rel)&&a.getAttribute("title")===(n.title==null?null:n.title)&&a.getAttribute("crossorigin")===(n.crossOrigin==null?null:n.crossOrigin)){i.splice(r,1);break t}}a=o.createElement(l),mn(a,l,n),o.head.appendChild(a);break;case"meta":if(i=k1("meta","content",o).get(l+(n.content||""))){for(r=0;r<i.length;r++)if(a=i[r],a.getAttribute("content")===(n.content==null?null:""+n.content)&&a.getAttribute("name")===(n.name==null?null:n.name)&&a.getAttribute("property")===(n.property==null?null:n.property)&&a.getAttribute("http-equiv")===(n.httpEquiv==null?null:n.httpEquiv)&&a.getAttribute("charset")===(n.charSet==null?null:n.charSet)){i.splice(r,1);break t}}a=o.createElement(l),mn(a,l,n),o.head.appendChild(a);break;default:throw Error(H(468,l))}a[_n]=e,on(a),l=a}e.stateNode=l}else S1(o,e.type,e.stateNode);else e.stateNode=w1(o,l,e.memoizedProps);else a!==l?(a===null?n.stateNode!==null&&(n=n.stateNode,n.parentNode.removeChild(n)):a.count--,l===null?S1(o,e.type,e.stateNode):w1(o,l,e.memoizedProps)):l===null&&e.stateNode!==null&&c_(e,e.memoizedProps,n.memoizedProps)}break;case 27:Rn(t,e),Ln(e),l&512&&(Ft||n===null||Ul(n,n.return)),n!==null&&l&4&&c_(e,e.memoizedProps,n.memoizedProps);break;case 5:if(Rn(t,e),Ln(e),l&512&&(Ft||n===null||Ul(n,n.return)),e.flags&32){o=e.stateNode;try{Ai(o,"")}catch(k){yt(e,e.return,k)}}l&4&&e.stateNode!=null&&(o=e.memoizedProps,c_(e,o,n!==null?n.memoizedProps:o)),l&1024&&(d_=!0);break;case 6:if(Rn(t,e),Ln(e),l&4){if(e.stateNode===null)throw Error(H(162));l=e.memoizedProps,n=e.stateNode;try{n.nodeValue=l}catch(k){yt(e,e.return,k)}}break;case 3:if(Dc=null,o=Cl,Cl=ou(t.containerInfo),Rn(t,e),Cl=o,Ln(e),l&4&&n!==null&&n.memoizedState.isDehydrated)try{$i(t.containerInfo)}catch(k){yt(e,e.return,k)}d_&&(d_=!1,Ap(e));break;case 4:l=Cl,Cl=ou(e.stateNode.containerInfo),Rn(t,e),Ln(e),Cl=l;break;case 12:Rn(t,e),Ln(e);break;case 31:Rn(t,e),Ln(e),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,fc(e,l)));break;case 13:Rn(t,e),Ln(e),e.child.flags&8192&&e.memoizedState!==null!=(n!==null&&n.memoizedState!==null)&&(xu=Qn()),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,fc(e,l)));break;case 22:o=e.memoizedState!==null;var s=n!==null&&n.memoizedState!==null,d=ro,h=Ft;if(ro=d||o,Ft=h||s,Rn(t,e),Ft=h,ro=d,Ln(e),l&8192)e:for(t=e.stateNode,t._visibility=o?t._visibility&-2:t._visibility|1,o&&(n===null||s||ro||Ft||wa(e)),n=null,t=e;;){if(t.tag===5||t.tag===26){if(n===null){s=n=t;try{if(a=s.stateNode,o)i=a.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none";else{r=s.stateNode;var _=s.memoizedProps.style,m=_!=null&&_.hasOwnProperty("display")?_.display:null;r.style.display=m==null||typeof m=="boolean"?"":(""+m).trim()}}catch(k){yt(s,s.return,k)}}}else if(t.tag===6){if(n===null){s=t;try{s.stateNode.nodeValue=o?"":s.memoizedProps}catch(k){yt(s,s.return,k)}}}else if(t.tag===18){if(n===null){s=t;try{var v=s.stateNode;o?p1(v,!0):p1(s.stateNode,!1)}catch(k){yt(s,s.return,k)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;n===t&&(n=null),t=t.return}n===t&&(n=null),t.sibling.return=t.return,t=t.sibling}l&4&&(l=e.updateQueue,l!==null&&(n=l.retryQueue,n!==null&&(l.retryQueue=null,fc(e,n))));break;case 19:Rn(t,e),Ln(e),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,fc(e,l)));break;case 30:break;case 21:break;default:Rn(t,e),Ln(e)}}function Ln(e){var t=e.flags;if(t&2){try{for(var n,l=e.return;l!==null;){if(vp(l)){n=l;break}l=l.return}if(n==null)throw Error(H(160));switch(n.tag){case 27:var o=n.stateNode,a=u_(e);Zc(e,a,o);break;case 5:var i=n.stateNode;n.flags&32&&(Ai(i,""),n.flags&=-33);var r=u_(e);Zc(e,r,i);break;case 3:case 4:var s=n.stateNode.containerInfo,d=u_(e);J_(e,d,s);break;default:throw Error(H(161))}}catch(h){yt(e,e.return,h)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Ap(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;Ap(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function oo(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)kp(e,t.alternate,t),t=t.sibling}function wa(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:Zo(4,t,t.return),wa(t);break;case 1:Ul(t,t.return);var n=t.stateNode;typeof n.componentWillUnmount=="function"&&bp(t,t.return,n),wa(t);break;case 27:Ir(t.stateNode);case 26:case 5:Ul(t,t.return),wa(t);break;case 22:t.memoizedState===null&&wa(t);break;case 30:wa(t);break;default:wa(t)}e=e.sibling}}function ao(e,t,n){for(n=n&&(t.subtreeFlags&8772)!==0,t=t.child;t!==null;){var l=t.alternate,o=e,a=t,i=a.flags;switch(a.tag){case 0:case 11:case 15:ao(o,a,n),fs(4,a);break;case 1:if(ao(o,a,n),l=a,o=l.stateNode,typeof o.componentDidMount=="function")try{o.componentDidMount()}catch(d){yt(l,l.return,d)}if(l=a,o=l.updateQueue,o!==null){var r=l.stateNode;try{var s=o.shared.hiddenCallbacks;if(s!==null)for(o.shared.hiddenCallbacks=null,o=0;o<s.length;o++)Mg(s[o],r)}catch(d){yt(l,l.return,d)}}n&&i&64&&yp(a),Yr(a,a.return);break;case 27:wp(a);case 26:case 5:ao(o,a,n),n&&l===null&&i&4&&xp(a),Yr(a,a.return);break;case 12:ao(o,a,n);break;case 31:ao(o,a,n),n&&i&4&&Mp(o,a);break;case 13:ao(o,a,n),n&&i&4&&Ep(o,a);break;case 22:a.memoizedState===null&&ao(o,a,n),Yr(a,a.return);break;case 30:break;default:ao(o,a,n)}t=t.sibling}}function Jf(e,t){var n=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==n&&(e!=null&&e.refCount++,n!=null&&ds(n))}function Pf(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&ds(e))}function Sl(e,t,n,l){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)Np(e,t,n,l),t=t.sibling}function Np(e,t,n,l){var o=t.flags;switch(t.tag){case 0:case 11:case 15:Sl(e,t,n,l),o&2048&&fs(9,t);break;case 1:Sl(e,t,n,l);break;case 3:Sl(e,t,n,l),o&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&ds(e)));break;case 12:if(o&2048){Sl(e,t,n,l),e=t.stateNode;try{var a=t.memoizedProps,i=a.id,r=a.onPostCommit;typeof r=="function"&&r(i,t.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(s){yt(t,t.return,s)}}else Sl(e,t,n,l);break;case 31:Sl(e,t,n,l);break;case 13:Sl(e,t,n,l);break;case 23:break;case 22:a=t.stateNode,i=t.alternate,t.memoizedState!==null?a._visibility&2?Sl(e,t,n,l):jr(e,t):a._visibility&2?Sl(e,t,n,l):(a._visibility|=2,ii(e,t,n,l,(t.subtreeFlags&10256)!==0||!1)),o&2048&&Jf(i,t);break;case 24:Sl(e,t,n,l),o&2048&&Pf(t.alternate,t);break;default:Sl(e,t,n,l)}}function ii(e,t,n,l,o){for(o=o&&((t.subtreeFlags&10256)!==0||!1),t=t.child;t!==null;){var a=e,i=t,r=n,s=l,d=i.flags;switch(i.tag){case 0:case 11:case 15:ii(a,i,r,s,o),fs(8,i);break;case 23:break;case 22:var h=i.stateNode;i.memoizedState!==null?h._visibility&2?ii(a,i,r,s,o):jr(a,i):(h._visibility|=2,ii(a,i,r,s,o)),o&&d&2048&&Jf(i.alternate,i);break;case 24:ii(a,i,r,s,o),o&&d&2048&&Pf(i.alternate,i);break;default:ii(a,i,r,s,o)}t=t.sibling}}function jr(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var n=e,l=t,o=l.flags;switch(l.tag){case 22:jr(n,l),o&2048&&Jf(l.alternate,l);break;case 24:jr(n,l),o&2048&&Pf(l.alternate,l);break;default:jr(n,l)}t=t.sibling}}var Dr=8192;function ai(e,t,n){if(e.subtreeFlags&Dr)for(e=e.child;e!==null;)Dp(e,t,n),e=e.sibling}function Dp(e,t,n){switch(e.tag){case 26:ai(e,t,n),e.flags&Dr&&e.memoizedState!==null&&Fx(n,Cl,e.memoizedState,e.memoizedProps);break;case 5:ai(e,t,n);break;case 3:case 4:var l=Cl;Cl=ou(e.stateNode.containerInfo),ai(e,t,n),Cl=l;break;case 22:e.memoizedState===null&&(l=e.alternate,l!==null&&l.memoizedState!==null?(l=Dr,Dr=16777216,ai(e,t,n),Dr=l):ai(e,t,n));break;default:ai(e,t,n)}}function Rp(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function Sr(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var n=0;n<t.length;n++){var l=t[n];ln=l,zp(l,e)}Rp(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Lp(e),e=e.sibling}function Lp(e){switch(e.tag){case 0:case 11:case 15:Sr(e),e.flags&2048&&Zo(9,e,e.return);break;case 3:Sr(e);break;case 12:Sr(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,Ac(e)):Sr(e);break;default:Sr(e)}}function Ac(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var n=0;n<t.length;n++){var l=t[n];ln=l,zp(l,e)}Rp(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:Zo(8,t,t.return),Ac(t);break;case 22:n=t.stateNode,n._visibility&2&&(n._visibility&=-3,Ac(t));break;default:Ac(t)}e=e.sibling}}function zp(e,t){for(;ln!==null;){var n=ln;switch(n.tag){case 0:case 11:case 15:Zo(8,n,t);break;case 23:case 22:if(n.memoizedState!==null&&n.memoizedState.cachePool!==null){var l=n.memoizedState.cachePool.pool;l!=null&&l.refCount++}break;case 24:ds(n.memoizedState.cache)}if(l=n.child,l!==null)l.return=n,ln=l;else e:for(n=e;ln!==null;){l=ln;var o=l.sibling,a=l.return;if(Sp(l),l===n){ln=null;break e}if(o!==null){o.return=a,ln=o;break e}ln=a}}}var _x={getCacheForType:function(e){var t=hn(Zt),n=t.data.get(e);return n===void 0&&(n=e(),t.data.set(e,n)),n},cacheSignal:function(){return hn(Zt).controller.signal}},fx=typeof WeakMap=="function"?WeakMap:Map,dt=0,Mt=null,Qe=null,Ge=0,pt=0,jn=null,Bo=!1,Xi=!1,eh=!1,bo=0,qt=0,Ko=0,Ea=0,th=0,In=0,Li=0,Xr=null,On=null,P_=!1,xu=0,Op=0,Kc=1/0,Jc=null,qo=null,tn=0,Io=null,zi=null,ho=0,ef=0,tf=null,Bp=null,qr=0,nf=null;function Vn(){return(dt&2)!==0&&Ge!==0?Ge&-Ge:xe.T!==null?lh():Q1()}function $p(){if(In===0)if((Ge&536870912)===0||Ve){var e=lc;lc<<=1,(lc&3932160)===0&&(lc=262144),In=e}else In=536870912;return e=Zn.current,e!==null&&(e.flags|=32),In}function Bn(e,t,n){(e===Mt&&(pt===2||pt===9)||e.cancelPendingCommit!==null)&&(Oi(e,0),$o(e,Ge,In,!1)),ss(e,n),((dt&2)===0||e!==Mt)&&(e===Mt&&((dt&2)===0&&(Ea|=n),qt===4&&$o(e,Ge,In,!1)),Xl(e))}function Hp(e,t,n){if((dt&6)!==0)throw Error(H(327));var l=!n&&(t&127)===0&&(t&e.expiredLanes)===0||rs(e,t),o=l?gx(e,t):__(e,t,!0),a=l;do{if(o===0){Xi&&!l&&$o(e,t,0,!1);break}else{if(n=e.current.alternate,a&&!hx(n)){o=__(e,t,!1),a=!1;continue}if(o===2){if(a=t,e.errorRecoveryDisabledLanes&a)var i=0;else i=e.pendingLanes&-536870913,i=i!==0?i:i&536870912?536870912:0;if(i!==0){t=i;e:{var r=e;o=Xr;var s=r.current.memoizedState.isDehydrated;if(s&&(Oi(r,i).flags|=256),i=__(r,i,!1),i!==2){if(eh&&!s){r.errorRecoveryDisabledLanes|=a,Ea|=a,o=4;break e}a=On,On=o,a!==null&&(On===null?On=a:On.push.apply(On,a))}o=i}if(a=!1,o!==2)continue}}if(o===1){Oi(e,0),$o(e,t,0,!0);break}e:{switch(l=e,a=o,a){case 0:case 1:throw Error(H(345));case 4:if((t&4194048)!==t)break;case 6:$o(l,t,In,!Bo);break e;case 2:On=null;break;case 3:case 5:break;default:throw Error(H(329))}if((t&62914560)===t&&(o=xu+300-Qn(),10<o)){if($o(l,t,In,!Bo),cu(l,0,!0)!==0)break e;ho=t,l.timeoutHandle=oy(n1.bind(null,l,n,On,Jc,P_,t,In,Ea,Li,Bo,a,"Throttled",-0,0),o);break e}n1(l,n,On,Jc,P_,t,In,Ea,Li,Bo,a,null,-0,0)}}break}while(!0);Xl(e)}function n1(e,t,n,l,o,a,i,r,s,d,h,_,m,v){if(e.timeoutHandle=-1,_=t.subtreeFlags,_&8192||(_&16785408)===16785408){_={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:co},Dp(t,a,_);var k=(a&62914560)===a?xu-Qn():(a&4194048)===a?Op-Qn():0;if(k=Zx(_,k),k!==null){ho=a,e.cancelPendingCommit=k(o1.bind(null,e,t,a,n,l,o,i,r,s,h,_,null,m,v)),$o(e,a,i,!d);return}}o1(e,t,a,n,l,o,i,r,s)}function hx(e){for(var t=e;;){var n=t.tag;if((n===0||n===11||n===15)&&t.flags&16384&&(n=t.updateQueue,n!==null&&(n=n.stores,n!==null)))for(var l=0;l<n.length;l++){var o=n[l],a=o.getSnapshot;o=o.value;try{if(!Fn(a(),o))return!1}catch{return!1}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function $o(e,t,n,l){t&=~th,t&=~Ea,e.suspendedLanes|=t,e.pingedLanes&=~t,l&&(e.warmLanes|=t),l=e.expirationTimes;for(var o=t;0<o;){var a=31-Gn(o),i=1<<a;l[a]=-1,o&=~i}n!==0&&X1(e,n,t)}function vu(){return(dt&6)===0?(hs(0,!1),!1):!0}function nh(){if(Qe!==null){if(pt===0)var e=Qe.return;else e=Qe,uo=$a=null,jf(e),Si=null,Kr=0,e=Qe;for(;e!==null;)pp(e.alternate,e),e=e.return;Qe=null}}function Oi(e,t){var n=e.timeoutHandle;n!==-1&&(e.timeoutHandle=-1,Rx(n)),n=e.cancelPendingCommit,n!==null&&(e.cancelPendingCommit=null,n()),ho=0,nh(),Mt=e,Qe=n=_o(e.current,null),Ge=t,pt=0,jn=null,Bo=!1,Xi=rs(e,t),eh=!1,Li=In=th=Ea=Ko=qt=0,On=Xr=null,P_=!1,(t&8)!==0&&(t|=t&32);var l=e.entangledLanes;if(l!==0)for(e=e.entanglements,l&=t;0<l;){var o=31-Gn(l),a=1<<o;t|=e[o],l&=~a}return bo=t,fu(),n}function Up(e,t){Oe=null,xe.H=Pr,t===ji||t===mu?(t=zm(),pt=3):t===zf?(t=zm(),pt=4):pt=t===Zf?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,jn=t,Qe===null&&(qt=1,Vc(e,dl(t,e.current)))}function Yp(){var e=Zn.current;return e===null?!0:(Ge&4194048)===Ge?fl===null:(Ge&62914560)===Ge||(Ge&536870912)!==0?e===fl:!1}function jp(){var e=xe.H;return xe.H=Pr,e===null?Pr:e}function Xp(){var e=xe.A;return xe.A=_x,e}function Pc(){qt=4,Bo||(Ge&4194048)!==Ge&&Zn.current!==null||(Xi=!0),(Ko&134217727)===0&&(Ea&134217727)===0||Mt===null||$o(Mt,Ge,In,!1)}function __(e,t,n){var l=dt;dt|=2;var o=jp(),a=Xp();(Mt!==e||Ge!==t)&&(Jc=null,Oi(e,t)),t=!1;var i=qt;e:do try{if(pt!==0&&Qe!==null){var r=Qe,s=jn;switch(pt){case 8:nh(),i=6;break e;case 3:case 2:case 9:case 6:Zn.current===null&&(t=!0);var d=pt;if(pt=0,jn=null,bi(e,r,s,d),n&&Xi){i=0;break e}break;default:d=pt,pt=0,jn=null,bi(e,r,s,d)}}mx(),i=qt;break}catch(h){Up(e,h)}while(!0);return t&&e.shellSuspendCounter++,uo=$a=null,dt=l,xe.H=o,xe.A=a,Qe===null&&(Mt=null,Ge=0,fu()),i}function mx(){for(;Qe!==null;)qp(Qe)}function gx(e,t){var n=dt;dt|=2;var l=jp(),o=Xp();Mt!==e||Ge!==t?(Jc=null,Kc=Qn()+500,Oi(e,t)):Xi=rs(e,t);e:do try{if(pt!==0&&Qe!==null){t=Qe;var a=jn;t:switch(pt){case 1:pt=0,jn=null,bi(e,t,a,1);break;case 2:case 9:if(Lm(a)){pt=0,jn=null,l1(t);break}t=function(){pt!==2&&pt!==9||Mt!==e||(pt=7),Xl(e)},a.then(t,t);break e;case 3:pt=7;break e;case 4:pt=5;break e;case 7:Lm(a)?(pt=0,jn=null,l1(t)):(pt=0,jn=null,bi(e,t,a,7));break;case 5:var i=null;switch(Qe.tag){case 26:i=Qe.memoizedState;case 5:case 27:var r=Qe;if(i?cy(i):r.stateNode.complete){pt=0,jn=null;var s=r.sibling;if(s!==null)Qe=s;else{var d=r.return;d!==null?(Qe=d,wu(d)):Qe=null}break t}}pt=0,jn=null,bi(e,t,a,5);break;case 6:pt=0,jn=null,bi(e,t,a,6);break;case 8:nh(),qt=6;break e;default:throw Error(H(462))}}px();break}catch(h){Up(e,h)}while(!0);return uo=$a=null,xe.H=l,xe.A=o,dt=n,Qe!==null?0:(Mt=null,Ge=0,fu(),qt)}function px(){for(;Qe!==null&&!Y2();)qp(Qe)}function qp(e){var t=gp(e.alternate,e,bo);e.memoizedProps=e.pendingProps,t===null?wu(e):Qe=t}function l1(e){var t=e,n=t.alternate;switch(t.tag){case 15:case 0:t=Zm(n,t,t.pendingProps,t.type,void 0,Ge);break;case 11:t=Zm(n,t,t.pendingProps,t.type.render,t.ref,Ge);break;case 5:jf(t);default:pp(n,t),t=Qe=pg(t,bo),t=gp(n,t,bo)}e.memoizedProps=e.pendingProps,t===null?wu(e):Qe=t}function bi(e,t,n,l){uo=$a=null,jf(t),Si=null,Kr=0;var o=t.return;try{if(ax(e,o,t,n,Ge)){qt=1,Vc(e,dl(n,e.current)),Qe=null;return}}catch(a){if(o!==null)throw Qe=o,a;qt=1,Vc(e,dl(n,e.current)),Qe=null;return}t.flags&32768?(Ve||l===1?e=!0:Xi||(Ge&536870912)!==0?e=!1:(Bo=e=!0,(l===2||l===9||l===3||l===6)&&(l=Zn.current,l!==null&&l.tag===13&&(l.flags|=16384))),Ip(t,e)):wu(t)}function wu(e){var t=e;do{if((t.flags&32768)!==0){Ip(t,Bo);return}e=t.return;var n=sx(t.alternate,t,bo);if(n!==null){Qe=n;return}if(t=t.sibling,t!==null){Qe=t;return}Qe=t=e}while(t!==null);qt===0&&(qt=5)}function Ip(e,t){do{var n=cx(e.alternate,e);if(n!==null){n.flags&=32767,Qe=n;return}if(n=e.return,n!==null&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!t&&(e=e.sibling,e!==null)){Qe=e;return}Qe=e=n}while(e!==null);qt=6,Qe=null}function o1(e,t,n,l,o,a,i,r,s){e.cancelPendingCommit=null;do ku();while(tn!==0);if((dt&6)!==0)throw Error(H(327));if(t!==null){if(t===e.current)throw Error(H(177));if(a=t.lanes|t.childLanes,a|=Ef,Z2(e,n,a,i,r,s),e===Mt&&(Qe=Mt=null,Ge=0),zi=t,Io=e,ho=n,ef=a,tf=o,Bp=l,(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,vx($c,function(){return Fp(),null})):(e.callbackNode=null,e.callbackPriority=0),l=(t.flags&13878)!==0,(t.subtreeFlags&13878)!==0||l){l=xe.T,xe.T=null,o=_t.p,_t.p=2,i=dt,dt|=4;try{ux(e,t,n)}finally{dt=i,_t.p=o,xe.T=l}}tn=1,Qp(),Wp(),Gp()}}function Qp(){if(tn===1){tn=0;var e=Io,t=zi,n=(t.flags&13878)!==0;if((t.subtreeFlags&13878)!==0||n){n=xe.T,xe.T=null;var l=_t.p;_t.p=2;var o=dt;dt|=4;try{Tp(t,e);var a=rf,i=cg(e.containerInfo),r=a.focusedElem,s=a.selectionRange;if(i!==r&&r&&r.ownerDocument&&sg(r.ownerDocument.documentElement,r)){if(s!==null&&Mf(r)){var d=s.start,h=s.end;if(h===void 0&&(h=d),"selectionStart"in r)r.selectionStart=d,r.selectionEnd=Math.min(h,r.value.length);else{var _=r.ownerDocument||document,m=_&&_.defaultView||window;if(m.getSelection){var v=m.getSelection(),k=r.textContent.length,A=Math.min(s.start,k),M=s.end===void 0?A:Math.min(s.end,k);!v.extend&&A>M&&(i=M,M=A,A=i);var p=Mm(r,A),x=Mm(r,M);if(p&&x&&(v.rangeCount!==1||v.anchorNode!==p.node||v.anchorOffset!==p.offset||v.focusNode!==x.node||v.focusOffset!==x.offset)){var g=_.createRange();g.setStart(p.node,p.offset),v.removeAllRanges(),A>M?(v.addRange(g),v.extend(x.node,x.offset)):(g.setEnd(x.node,x.offset),v.addRange(g))}}}}for(_=[],v=r;v=v.parentNode;)v.nodeType===1&&_.push({element:v,left:v.scrollLeft,top:v.scrollTop});for(typeof r.focus=="function"&&r.focus(),r=0;r<_.length;r++){var S=_[r];S.element.scrollLeft=S.left,S.element.scrollTop=S.top}}ru=!!af,rf=af=null}finally{dt=o,_t.p=l,xe.T=n}}e.current=t,tn=2}}function Wp(){if(tn===2){tn=0;var e=Io,t=zi,n=(t.flags&8772)!==0;if((t.subtreeFlags&8772)!==0||n){n=xe.T,xe.T=null;var l=_t.p;_t.p=2;var o=dt;dt|=4;try{kp(e,t.alternate,t)}finally{dt=o,_t.p=l,xe.T=n}}tn=3}}function Gp(){if(tn===4||tn===3){tn=0,j2();var e=Io,t=zi,n=ho,l=Bp;(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?tn=5:(tn=0,zi=Io=null,Vp(e,e.pendingLanes));var o=e.pendingLanes;if(o===0&&(qo=null),bf(n),t=t.stateNode,Wn&&typeof Wn.onCommitFiberRoot=="function")try{Wn.onCommitFiberRoot(is,t,void 0,(t.current.flags&128)===128)}catch{}if(l!==null){t=xe.T,o=_t.p,_t.p=2,xe.T=null;try{for(var a=e.onRecoverableError,i=0;i<l.length;i++){var r=l[i];a(r.value,{componentStack:r.stack})}}finally{xe.T=t,_t.p=o}}(ho&3)!==0&&ku(),Xl(e),o=e.pendingLanes,(n&261930)!==0&&(o&42)!==0?e===nf?qr++:(qr=0,nf=e):qr=0,hs(0,!1)}}function Vp(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,ds(t)))}function ku(){return Qp(),Wp(),Gp(),Fp()}function Fp(){if(tn!==5)return!1;var e=Io,t=ef;ef=0;var n=bf(ho),l=xe.T,o=_t.p;try{_t.p=32>n?32:n,xe.T=null,n=tf,tf=null;var a=Io,i=ho;if(tn=0,zi=Io=null,ho=0,(dt&6)!==0)throw Error(H(331));var r=dt;if(dt|=4,Lp(a.current),Np(a,a.current,i,n),dt=r,hs(0,!1),Wn&&typeof Wn.onPostCommitFiberRoot=="function")try{Wn.onPostCommitFiberRoot(is,a)}catch{}return!0}finally{_t.p=o,xe.T=l,Vp(e,t)}}function a1(e,t,n){t=dl(n,t),t=F_(e.stateNode,t,2),e=Xo(e,t,2),e!==null&&(ss(e,2),Xl(e))}function yt(e,t,n){if(e.tag===3)a1(e,e,n);else for(;t!==null;){if(t.tag===3){a1(t,e,n);break}else if(t.tag===1){var l=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(qo===null||!qo.has(l))){e=dl(n,e),n=up(2),l=Xo(t,n,2),l!==null&&(dp(n,l,t,e),ss(l,2),Xl(l));break}}t=t.return}}function f_(e,t,n){var l=e.pingCache;if(l===null){l=e.pingCache=new fx;var o=new Set;l.set(t,o)}else o=l.get(t),o===void 0&&(o=new Set,l.set(t,o));o.has(n)||(eh=!0,o.add(n),e=yx.bind(null,e,t,n),t.then(e,e))}function yx(e,t,n){var l=e.pingCache;l!==null&&l.delete(t),e.pingedLanes|=e.suspendedLanes&n,e.warmLanes&=~n,Mt===e&&(Ge&n)===n&&(qt===4||qt===3&&(Ge&62914560)===Ge&&300>Qn()-xu?(dt&2)===0&&Oi(e,0):th|=n,Li===Ge&&(Li=0)),Xl(e)}function Zp(e,t){t===0&&(t=j1()),e=Ba(e,t),e!==null&&(ss(e,t),Xl(e))}function bx(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Zp(e,n)}function xx(e,t){var n=0;switch(e.tag){case 31:case 13:var l=e.stateNode,o=e.memoizedState;o!==null&&(n=o.retryLane);break;case 19:l=e.stateNode;break;case 22:l=e.stateNode._retryCache;break;default:throw Error(H(314))}l!==null&&l.delete(t),Zp(e,n)}function vx(e,t){return pf(e,t)}var eu=null,ri=null,lf=!1,tu=!1,h_=!1,Ho=0;function Xl(e){e!==ri&&e.next===null&&(ri===null?eu=ri=e:ri=ri.next=e),tu=!0,lf||(lf=!0,kx())}function hs(e,t){if(!h_&&tu){h_=!0;do for(var n=!1,l=eu;l!==null;){if(!t)if(e!==0){var o=l.pendingLanes;if(o===0)var a=0;else{var i=l.suspendedLanes,r=l.pingedLanes;a=(1<<31-Gn(42|e)+1)-1,a&=o&~(i&~r),a=a&201326741?a&201326741|1:a?a|2:0}a!==0&&(n=!0,i1(l,a))}else a=Ge,a=cu(l,l===Mt?a:0,l.cancelPendingCommit!==null||l.timeoutHandle!==-1),(a&3)===0||rs(l,a)||(n=!0,i1(l,a));l=l.next}while(n);h_=!1}}function wx(){Kp()}function Kp(){tu=lf=!1;var e=0;Ho!==0&&Dx()&&(e=Ho);for(var t=Qn(),n=null,l=eu;l!==null;){var o=l.next,a=Jp(l,t);a===0?(l.next=null,n===null?eu=o:n.next=o,o===null&&(ri=n)):(n=l,(e!==0||(a&3)!==0)&&(tu=!0)),l=o}tn!==0&&tn!==5||hs(e,!1),Ho!==0&&(Ho=0)}function Jp(e,t){for(var n=e.suspendedLanes,l=e.pingedLanes,o=e.expirationTimes,a=e.pendingLanes&-62914561;0<a;){var i=31-Gn(a),r=1<<i,s=o[i];s===-1?((r&n)===0||(r&l)!==0)&&(o[i]=F2(r,t)):s<=t&&(e.expiredLanes|=r),a&=~r}if(t=Mt,n=Ge,n=cu(e,e===t?n:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),l=e.callbackNode,n===0||e===t&&(pt===2||pt===9)||e.cancelPendingCommit!==null)return l!==null&&l!==null&&qd(l),e.callbackNode=null,e.callbackPriority=0;if((n&3)===0||rs(e,n)){if(t=n&-n,t===e.callbackPriority)return t;switch(l!==null&&qd(l),bf(n)){case 2:case 8:n=U1;break;case 32:n=$c;break;case 268435456:n=Y1;break;default:n=$c}return l=Pp.bind(null,e),n=pf(n,l),e.callbackPriority=t,e.callbackNode=n,t}return l!==null&&l!==null&&qd(l),e.callbackPriority=2,e.callbackNode=null,2}function Pp(e,t){if(tn!==0&&tn!==5)return e.callbackNode=null,e.callbackPriority=0,null;var n=e.callbackNode;if(ku()&&e.callbackNode!==n)return null;var l=Ge;return l=cu(e,e===Mt?l:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),l===0?null:(Hp(e,l,t),Jp(e,Qn()),e.callbackNode!=null&&e.callbackNode===n?Pp.bind(null,e):null)}function i1(e,t){if(ku())return null;Hp(e,t,!0)}function kx(){Lx(function(){(dt&6)!==0?pf(H1,wx):Kp()})}function lh(){if(Ho===0){var e=Ni;e===0&&(e=nc,nc<<=1,(nc&261888)===0&&(nc=256)),Ho=e}return Ho}function r1(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:xc(""+e)}function s1(e,t){var n=t.ownerDocument.createElement("input");return n.name=t.name,n.value=t.value,e.id&&n.setAttribute("form",e.id),t.parentNode.insertBefore(n,t),e=new FormData(e),n.parentNode.removeChild(n),e}function Sx(e,t,n,l,o){if(t==="submit"&&n&&n.stateNode===o){var a=r1((o[$n]||null).action),i=l.submitter;i&&(t=(t=i[$n]||null)?r1(t.formAction):i.getAttribute("formAction"),t!==null&&(a=t,i=null));var r=new uu("action","action",null,l,o);e.push({event:r,listeners:[{instance:null,listener:function(){if(l.defaultPrevented){if(Ho!==0){var s=i?s1(o,i):new FormData(o);G_(n,{pending:!0,data:s,method:o.method,action:a},null,s)}}else typeof a=="function"&&(r.preventDefault(),s=i?s1(o,i):new FormData(o),G_(n,{pending:!0,data:s,method:o.method,action:a},a,s))},currentTarget:o}]})}}for(hc=0;hc<O_.length;hc++)mc=O_[hc],c1=mc.toLowerCase(),u1=mc[0].toUpperCase()+mc.slice(1),Ml(c1,"on"+u1);var mc,c1,u1,hc;Ml(dg,"onAnimationEnd");Ml(_g,"onAnimationIteration");Ml(fg,"onAnimationStart");Ml("dblclick","onDoubleClick");Ml("focusin","onFocus");Ml("focusout","onBlur");Ml(Xb,"onTransitionRun");Ml(qb,"onTransitionStart");Ml(Ib,"onTransitionCancel");Ml(hg,"onTransitionEnd");Ti("onMouseEnter",["mouseout","mouseover"]);Ti("onMouseLeave",["mouseout","mouseover"]);Ti("onPointerEnter",["pointerout","pointerover"]);Ti("onPointerLeave",["pointerout","pointerover"]);La("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));La("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));La("onBeforeInput",["compositionend","keypress","textInput","paste"]);La("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));La("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));La("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var es="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Cx=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(es));function ey(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var l=e[n],o=l.event;l=l.listeners;e:{var a=void 0;if(t)for(var i=l.length-1;0<=i;i--){var r=l[i],s=r.instance,d=r.currentTarget;if(r=r.listener,s!==a&&o.isPropagationStopped())break e;a=r,o.currentTarget=d;try{a(o)}catch(h){Uc(h)}o.currentTarget=null,a=s}else for(i=0;i<l.length;i++){if(r=l[i],s=r.instance,d=r.currentTarget,r=r.listener,s!==a&&o.isPropagationStopped())break e;a=r,o.currentTarget=d;try{a(o)}catch(h){Uc(h)}o.currentTarget=null,a=s}}}}function Ie(e,t){var n=t[E_];n===void 0&&(n=t[E_]=new Set);var l=e+"__bubble";n.has(l)||(ty(t,e,2,!1),n.add(l))}function m_(e,t,n){var l=0;t&&(l|=4),ty(n,e,l,t)}var gc="_reactListening"+Math.random().toString(36).slice(2);function oh(e){if(!e[gc]){e[gc]=!0,W1.forEach(function(n){n!=="selectionchange"&&(Cx.has(n)||m_(n,!1,e),m_(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[gc]||(t[gc]=!0,m_("selectionchange",!1,t))}}function ty(e,t,n,l){switch(hy(t)){case 2:var o=Px;break;case 8:o=ev;break;default:o=sh}n=o.bind(null,t,n,e),o=void 0,!R_||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(o=!0),l?o!==void 0?e.addEventListener(t,n,{capture:!0,passive:o}):e.addEventListener(t,n,!0):o!==void 0?e.addEventListener(t,n,{passive:o}):e.addEventListener(t,n,!1)}function g_(e,t,n,l,o){var a=l;if((t&1)===0&&(t&2)===0&&l!==null)e:for(;;){if(l===null)return;var i=l.tag;if(i===3||i===4){var r=l.stateNode.containerInfo;if(r===o)break;if(i===4)for(i=l.return;i!==null;){var s=i.tag;if((s===3||s===4)&&i.stateNode.containerInfo===o)return;i=i.return}for(;r!==null;){if(i=ui(r),i===null)return;if(s=i.tag,s===5||s===6||s===26||s===27){l=a=i;continue e}r=r.parentNode}}l=l.return}eg(function(){var d=a,h=wf(n),_=[];e:{var m=mg.get(e);if(m!==void 0){var v=uu,k=e;switch(e){case"keypress":if(wc(n)===0)break e;case"keydown":case"keyup":v=xb;break;case"focusin":k="focus",v=Vd;break;case"focusout":k="blur",v=Vd;break;case"beforeblur":case"afterblur":v=Vd;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":v=pm;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":v=sb;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":v=kb;break;case dg:case _g:case fg:v=db;break;case hg:v=Cb;break;case"scroll":case"scrollend":v=ib;break;case"wheel":v=Eb;break;case"copy":case"cut":case"paste":v=fb;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":v=bm;break;case"toggle":case"beforetoggle":v=Ab}var A=(t&4)!==0,M=!A&&(e==="scroll"||e==="scrollend"),p=A?m!==null?m+"Capture":null:m;A=[];for(var x=d,g;x!==null;){var S=x;if(g=S.stateNode,S=S.tag,S!==5&&S!==26&&S!==27||g===null||p===null||(S=Wr(x,p),S!=null&&A.push(ts(x,S,g))),M)break;x=x.return}0<A.length&&(m=new v(m,k,null,n,h),_.push({event:m,listeners:A}))}}if((t&7)===0){e:{if(m=e==="mouseover"||e==="pointerover",v=e==="mouseout"||e==="pointerout",m&&n!==D_&&(k=n.relatedTarget||n.fromElement)&&(ui(k)||k[Hi]))break e;if((v||m)&&(m=h.window===h?h:(m=h.ownerDocument)?m.defaultView||m.parentWindow:window,v?(k=n.relatedTarget||n.toElement,v=d,k=k?ui(k):null,k!==null&&(M=as(k),A=k.tag,k!==M||A!==5&&A!==27&&A!==6)&&(k=null)):(v=null,k=d),v!==k)){if(A=pm,S="onMouseLeave",p="onMouseEnter",x="mouse",(e==="pointerout"||e==="pointerover")&&(A=bm,S="onPointerLeave",p="onPointerEnter",x="pointer"),M=v==null?m:Ar(v),g=k==null?m:Ar(k),m=new A(S,x+"leave",v,n,h),m.target=M,m.relatedTarget=g,S=null,ui(h)===d&&(A=new A(p,x+"enter",k,n,h),A.target=g,A.relatedTarget=M,S=A),M=S,v&&k)t:{for(A=Mx,p=v,x=k,g=0,S=p;S;S=A(S))g++;S=0;for(var W=x;W;W=A(W))S++;for(;0<g-S;)p=A(p),g--;for(;0<S-g;)x=A(x),S--;for(;g--;){if(p===x||x!==null&&p===x.alternate){A=p;break t}p=A(p),x=A(x)}A=null}else A=null;v!==null&&d1(_,m,v,A,!1),k!==null&&M!==null&&d1(_,M,k,A,!0)}}e:{if(m=d?Ar(d):window,v=m.nodeName&&m.nodeName.toLowerCase(),v==="select"||v==="input"&&m.type==="file")var J=km;else if(wm(m))if(ig)J=Ub;else{J=$b;var z=Bb}else v=m.nodeName,!v||v.toLowerCase()!=="input"||m.type!=="checkbox"&&m.type!=="radio"?d&&vf(d.elementType)&&(J=km):J=Hb;if(J&&(J=J(e,d))){ag(_,J,n,h);break e}z&&z(e,m,d),e==="focusout"&&d&&m.type==="number"&&d.memoizedProps.value!=null&&N_(m,"number",m.value)}switch(z=d?Ar(d):window,e){case"focusin":(wm(z)||z.contentEditable==="true")&&(fi=z,L_=d,zr=null);break;case"focusout":zr=L_=fi=null;break;case"mousedown":z_=!0;break;case"contextmenu":case"mouseup":case"dragend":z_=!1,Em(_,n,h);break;case"selectionchange":if(jb)break;case"keydown":case"keyup":Em(_,n,h)}var K;if(Cf)e:{switch(e){case"compositionstart":var O="onCompositionStart";break e;case"compositionend":O="onCompositionEnd";break e;case"compositionupdate":O="onCompositionUpdate";break e}O=void 0}else _i?lg(e,n)&&(O="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(O="onCompositionStart");O&&(ng&&n.locale!=="ko"&&(_i||O!=="onCompositionStart"?O==="onCompositionEnd"&&_i&&(K=tg()):(Oo=h,kf="value"in Oo?Oo.value:Oo.textContent,_i=!0)),z=nu(d,O),0<z.length&&(O=new ym(O,e,null,n,h),_.push({event:O,listeners:z}),K?O.data=K:(K=og(n),K!==null&&(O.data=K)))),(K=Db?Rb(e,n):Lb(e,n))&&(O=nu(d,"onBeforeInput"),0<O.length&&(z=new ym("onBeforeInput","beforeinput",null,n,h),_.push({event:z,listeners:O}),z.data=K)),Sx(_,e,d,n,h)}ey(_,t)})}function ts(e,t,n){return{instance:e,listener:t,currentTarget:n}}function nu(e,t){for(var n=t+"Capture",l=[];e!==null;){var o=e,a=o.stateNode;if(o=o.tag,o!==5&&o!==26&&o!==27||a===null||(o=Wr(e,n),o!=null&&l.unshift(ts(e,o,a)),o=Wr(e,t),o!=null&&l.push(ts(e,o,a))),e.tag===3)return l;e=e.return}return[]}function Mx(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function d1(e,t,n,l,o){for(var a=t._reactName,i=[];n!==null&&n!==l;){var r=n,s=r.alternate,d=r.stateNode;if(r=r.tag,s!==null&&s===l)break;r!==5&&r!==26&&r!==27||d===null||(s=d,o?(d=Wr(n,a),d!=null&&i.unshift(ts(n,d,s))):o||(d=Wr(n,a),d!=null&&i.push(ts(n,d,s)))),n=n.return}i.length!==0&&e.push({event:t,listeners:i})}var Ex=/\r\n?/g,Tx=/\u0000|\uFFFD/g;function _1(e){return(typeof e=="string"?e:""+e).replace(Ex,`
`).replace(Tx,"")}function ny(e,t){return t=_1(t),_1(e)===t}function wt(e,t,n,l,o,a){switch(n){case"children":typeof l=="string"?t==="body"||t==="textarea"&&l===""||Ai(e,l):(typeof l=="number"||typeof l=="bigint")&&t!=="body"&&Ai(e,""+l);break;case"className":ac(e,"class",l);break;case"tabIndex":ac(e,"tabindex",l);break;case"dir":case"role":case"viewBox":case"width":case"height":ac(e,n,l);break;case"style":P1(e,l,a);break;case"data":if(t!=="object"){ac(e,"data",l);break}case"src":case"href":if(l===""&&(t!=="a"||n!=="href")){e.removeAttribute(n);break}if(l==null||typeof l=="function"||typeof l=="symbol"||typeof l=="boolean"){e.removeAttribute(n);break}l=xc(""+l),e.setAttribute(n,l);break;case"action":case"formAction":if(typeof l=="function"){e.setAttribute(n,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof a=="function"&&(n==="formAction"?(t!=="input"&&wt(e,t,"name",o.name,o,null),wt(e,t,"formEncType",o.formEncType,o,null),wt(e,t,"formMethod",o.formMethod,o,null),wt(e,t,"formTarget",o.formTarget,o,null)):(wt(e,t,"encType",o.encType,o,null),wt(e,t,"method",o.method,o,null),wt(e,t,"target",o.target,o,null)));if(l==null||typeof l=="symbol"||typeof l=="boolean"){e.removeAttribute(n);break}l=xc(""+l),e.setAttribute(n,l);break;case"onClick":l!=null&&(e.onclick=co);break;case"onScroll":l!=null&&Ie("scroll",e);break;case"onScrollEnd":l!=null&&Ie("scrollend",e);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(H(61));if(n=l.__html,n!=null){if(o.children!=null)throw Error(H(60));e.innerHTML=n}}break;case"multiple":e.multiple=l&&typeof l!="function"&&typeof l!="symbol";break;case"muted":e.muted=l&&typeof l!="function"&&typeof l!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(l==null||typeof l=="function"||typeof l=="boolean"||typeof l=="symbol"){e.removeAttribute("xlink:href");break}n=xc(""+l),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",n);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":l!=null&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(n,""+l):e.removeAttribute(n);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":l&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(n,""):e.removeAttribute(n);break;case"capture":case"download":l===!0?e.setAttribute(n,""):l!==!1&&l!=null&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(n,l):e.removeAttribute(n);break;case"cols":case"rows":case"size":case"span":l!=null&&typeof l!="function"&&typeof l!="symbol"&&!isNaN(l)&&1<=l?e.setAttribute(n,l):e.removeAttribute(n);break;case"rowSpan":case"start":l==null||typeof l=="function"||typeof l=="symbol"||isNaN(l)?e.removeAttribute(n):e.setAttribute(n,l);break;case"popover":Ie("beforetoggle",e),Ie("toggle",e),bc(e,"popover",l);break;case"xlinkActuate":to(e,"http://www.w3.org/1999/xlink","xlink:actuate",l);break;case"xlinkArcrole":to(e,"http://www.w3.org/1999/xlink","xlink:arcrole",l);break;case"xlinkRole":to(e,"http://www.w3.org/1999/xlink","xlink:role",l);break;case"xlinkShow":to(e,"http://www.w3.org/1999/xlink","xlink:show",l);break;case"xlinkTitle":to(e,"http://www.w3.org/1999/xlink","xlink:title",l);break;case"xlinkType":to(e,"http://www.w3.org/1999/xlink","xlink:type",l);break;case"xmlBase":to(e,"http://www.w3.org/XML/1998/namespace","xml:base",l);break;case"xmlLang":to(e,"http://www.w3.org/XML/1998/namespace","xml:lang",l);break;case"xmlSpace":to(e,"http://www.w3.org/XML/1998/namespace","xml:space",l);break;case"is":bc(e,"is",l);break;case"innerText":case"textContent":break;default:(!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(n=ob.get(n)||n,bc(e,n,l))}}function of(e,t,n,l,o,a){switch(n){case"style":P1(e,l,a);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(H(61));if(n=l.__html,n!=null){if(o.children!=null)throw Error(H(60));e.innerHTML=n}}break;case"children":typeof l=="string"?Ai(e,l):(typeof l=="number"||typeof l=="bigint")&&Ai(e,""+l);break;case"onScroll":l!=null&&Ie("scroll",e);break;case"onScrollEnd":l!=null&&Ie("scrollend",e);break;case"onClick":l!=null&&(e.onclick=co);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!G1.hasOwnProperty(n))e:{if(n[0]==="o"&&n[1]==="n"&&(o=n.endsWith("Capture"),t=n.slice(2,o?n.length-7:void 0),a=e[$n]||null,a=a!=null?a[n]:null,typeof a=="function"&&e.removeEventListener(t,a,o),typeof l=="function")){typeof a!="function"&&a!==null&&(n in e?e[n]=null:e.hasAttribute(n)&&e.removeAttribute(n)),e.addEventListener(t,l,o);break e}n in e?e[n]=l:l===!0?e.setAttribute(n,""):bc(e,n,l)}}}function mn(e,t,n){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Ie("error",e),Ie("load",e);var l=!1,o=!1,a;for(a in n)if(n.hasOwnProperty(a)){var i=n[a];if(i!=null)switch(a){case"src":l=!0;break;case"srcSet":o=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(H(137,t));default:wt(e,t,a,i,n,null)}}o&&wt(e,t,"srcSet",n.srcSet,n,null),l&&wt(e,t,"src",n.src,n,null);return;case"input":Ie("invalid",e);var r=a=i=o=null,s=null,d=null;for(l in n)if(n.hasOwnProperty(l)){var h=n[l];if(h!=null)switch(l){case"name":o=h;break;case"type":i=h;break;case"checked":s=h;break;case"defaultChecked":d=h;break;case"value":a=h;break;case"defaultValue":r=h;break;case"children":case"dangerouslySetInnerHTML":if(h!=null)throw Error(H(137,t));break;default:wt(e,t,l,h,n,null)}}Z1(e,a,r,s,d,i,o,!1);return;case"select":Ie("invalid",e),l=i=a=null;for(o in n)if(n.hasOwnProperty(o)&&(r=n[o],r!=null))switch(o){case"value":a=r;break;case"defaultValue":i=r;break;case"multiple":l=r;default:wt(e,t,o,r,n,null)}t=a,n=i,e.multiple=!!l,t!=null?vi(e,!!l,t,!1):n!=null&&vi(e,!!l,n,!0);return;case"textarea":Ie("invalid",e),a=o=l=null;for(i in n)if(n.hasOwnProperty(i)&&(r=n[i],r!=null))switch(i){case"value":l=r;break;case"defaultValue":o=r;break;case"children":a=r;break;case"dangerouslySetInnerHTML":if(r!=null)throw Error(H(91));break;default:wt(e,t,i,r,n,null)}J1(e,l,o,a);return;case"option":for(s in n)n.hasOwnProperty(s)&&(l=n[s],l!=null)&&(s==="selected"?e.selected=l&&typeof l!="function"&&typeof l!="symbol":wt(e,t,s,l,n,null));return;case"dialog":Ie("beforetoggle",e),Ie("toggle",e),Ie("cancel",e),Ie("close",e);break;case"iframe":case"object":Ie("load",e);break;case"video":case"audio":for(l=0;l<es.length;l++)Ie(es[l],e);break;case"image":Ie("error",e),Ie("load",e);break;case"details":Ie("toggle",e);break;case"embed":case"source":case"link":Ie("error",e),Ie("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(d in n)if(n.hasOwnProperty(d)&&(l=n[d],l!=null))switch(d){case"children":case"dangerouslySetInnerHTML":throw Error(H(137,t));default:wt(e,t,d,l,n,null)}return;default:if(vf(t)){for(h in n)n.hasOwnProperty(h)&&(l=n[h],l!==void 0&&of(e,t,h,l,n,void 0));return}}for(r in n)n.hasOwnProperty(r)&&(l=n[r],l!=null&&wt(e,t,r,l,n,null))}function Ax(e,t,n,l){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var o=null,a=null,i=null,r=null,s=null,d=null,h=null;for(v in n){var _=n[v];if(n.hasOwnProperty(v)&&_!=null)switch(v){case"checked":break;case"value":break;case"defaultValue":s=_;default:l.hasOwnProperty(v)||wt(e,t,v,null,l,_)}}for(var m in l){var v=l[m];if(_=n[m],l.hasOwnProperty(m)&&(v!=null||_!=null))switch(m){case"type":a=v;break;case"name":o=v;break;case"checked":d=v;break;case"defaultChecked":h=v;break;case"value":i=v;break;case"defaultValue":r=v;break;case"children":case"dangerouslySetInnerHTML":if(v!=null)throw Error(H(137,t));break;default:v!==_&&wt(e,t,m,v,l,_)}}A_(e,i,r,s,d,h,a,o);return;case"select":v=i=r=m=null;for(a in n)if(s=n[a],n.hasOwnProperty(a)&&s!=null)switch(a){case"value":break;case"multiple":v=s;default:l.hasOwnProperty(a)||wt(e,t,a,null,l,s)}for(o in l)if(a=l[o],s=n[o],l.hasOwnProperty(o)&&(a!=null||s!=null))switch(o){case"value":m=a;break;case"defaultValue":r=a;break;case"multiple":i=a;default:a!==s&&wt(e,t,o,a,l,s)}t=r,n=i,l=v,m!=null?vi(e,!!n,m,!1):!!l!=!!n&&(t!=null?vi(e,!!n,t,!0):vi(e,!!n,n?[]:"",!1));return;case"textarea":v=m=null;for(r in n)if(o=n[r],n.hasOwnProperty(r)&&o!=null&&!l.hasOwnProperty(r))switch(r){case"value":break;case"children":break;default:wt(e,t,r,null,l,o)}for(i in l)if(o=l[i],a=n[i],l.hasOwnProperty(i)&&(o!=null||a!=null))switch(i){case"value":m=o;break;case"defaultValue":v=o;break;case"children":break;case"dangerouslySetInnerHTML":if(o!=null)throw Error(H(91));break;default:o!==a&&wt(e,t,i,o,l,a)}K1(e,m,v);return;case"option":for(var k in n)m=n[k],n.hasOwnProperty(k)&&m!=null&&!l.hasOwnProperty(k)&&(k==="selected"?e.selected=!1:wt(e,t,k,null,l,m));for(s in l)m=l[s],v=n[s],l.hasOwnProperty(s)&&m!==v&&(m!=null||v!=null)&&(s==="selected"?e.selected=m&&typeof m!="function"&&typeof m!="symbol":wt(e,t,s,m,l,v));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var A in n)m=n[A],n.hasOwnProperty(A)&&m!=null&&!l.hasOwnProperty(A)&&wt(e,t,A,null,l,m);for(d in l)if(m=l[d],v=n[d],l.hasOwnProperty(d)&&m!==v&&(m!=null||v!=null))switch(d){case"children":case"dangerouslySetInnerHTML":if(m!=null)throw Error(H(137,t));break;default:wt(e,t,d,m,l,v)}return;default:if(vf(t)){for(var M in n)m=n[M],n.hasOwnProperty(M)&&m!==void 0&&!l.hasOwnProperty(M)&&of(e,t,M,void 0,l,m);for(h in l)m=l[h],v=n[h],!l.hasOwnProperty(h)||m===v||m===void 0&&v===void 0||of(e,t,h,m,l,v);return}}for(var p in n)m=n[p],n.hasOwnProperty(p)&&m!=null&&!l.hasOwnProperty(p)&&wt(e,t,p,null,l,m);for(_ in l)m=l[_],v=n[_],!l.hasOwnProperty(_)||m===v||m==null&&v==null||wt(e,t,_,m,l,v)}function f1(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function Nx(){if(typeof performance.getEntriesByType=="function"){for(var e=0,t=0,n=performance.getEntriesByType("resource"),l=0;l<n.length;l++){var o=n[l],a=o.transferSize,i=o.initiatorType,r=o.duration;if(a&&r&&f1(i)){for(i=0,r=o.responseEnd,l+=1;l<n.length;l++){var s=n[l],d=s.startTime;if(d>r)break;var h=s.transferSize,_=s.initiatorType;h&&f1(_)&&(s=s.responseEnd,i+=h*(s<r?1:(r-d)/(s-d)))}if(--l,t+=8*(a+i)/(o.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var af=null,rf=null;function lu(e){return e.nodeType===9?e:e.ownerDocument}function h1(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function ly(e,t){if(e===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&t==="foreignObject"?0:e}function sf(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var p_=null;function Dx(){var e=window.event;return e&&e.type==="popstate"?e===p_?!1:(p_=e,!0):(p_=null,!1)}var oy=typeof setTimeout=="function"?setTimeout:void 0,Rx=typeof clearTimeout=="function"?clearTimeout:void 0,m1=typeof Promise=="function"?Promise:void 0,Lx=typeof queueMicrotask=="function"?queueMicrotask:typeof m1<"u"?function(e){return m1.resolve(null).then(e).catch(zx)}:oy;function zx(e){setTimeout(function(){throw e})}function Po(e){return e==="head"}function g1(e,t){var n=t,l=0;do{var o=n.nextSibling;if(e.removeChild(n),o&&o.nodeType===8)if(n=o.data,n==="/$"||n==="/&"){if(l===0){e.removeChild(o),$i(t);return}l--}else if(n==="$"||n==="$?"||n==="$~"||n==="$!"||n==="&")l++;else if(n==="html")Ir(e.ownerDocument.documentElement);else if(n==="head"){n=e.ownerDocument.head,Ir(n);for(var a=n.firstChild;a;){var i=a.nextSibling,r=a.nodeName;a[cs]||r==="SCRIPT"||r==="STYLE"||r==="LINK"&&a.rel.toLowerCase()==="stylesheet"||n.removeChild(a),a=i}}else n==="body"&&Ir(e.ownerDocument.body);n=o}while(n);$i(t)}function p1(e,t){var n=e;e=0;do{var l=n.nextSibling;if(n.nodeType===1?t?(n._stashedDisplay=n.style.display,n.style.display="none"):(n.style.display=n._stashedDisplay||"",n.getAttribute("style")===""&&n.removeAttribute("style")):n.nodeType===3&&(t?(n._stashedText=n.nodeValue,n.nodeValue=""):n.nodeValue=n._stashedText||""),l&&l.nodeType===8)if(n=l.data,n==="/$"){if(e===0)break;e--}else n!=="$"&&n!=="$?"&&n!=="$~"&&n!=="$!"||e++;n=l}while(n)}function cf(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var n=t;switch(t=t.nextSibling,n.nodeName){case"HTML":case"HEAD":case"BODY":cf(n),xf(n);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(n.rel.toLowerCase()==="stylesheet")continue}e.removeChild(n)}}function Ox(e,t,n,l){for(;e.nodeType===1;){var o=n;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!l&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(l){if(!e[cs])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(a=e.getAttribute("rel"),a==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(a!==o.rel||e.getAttribute("href")!==(o.href==null||o.href===""?null:o.href)||e.getAttribute("crossorigin")!==(o.crossOrigin==null?null:o.crossOrigin)||e.getAttribute("title")!==(o.title==null?null:o.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(a=e.getAttribute("src"),(a!==(o.src==null?null:o.src)||e.getAttribute("type")!==(o.type==null?null:o.type)||e.getAttribute("crossorigin")!==(o.crossOrigin==null?null:o.crossOrigin))&&a&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(t==="input"&&e.type==="hidden"){var a=o.name==null?null:""+o.name;if(o.type==="hidden"&&e.getAttribute("name")===a)return e}else return e;if(e=hl(e.nextSibling),e===null)break}return null}function Bx(e,t,n){if(t==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!n||(e=hl(e.nextSibling),e===null))return null;return e}function ay(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!t||(e=hl(e.nextSibling),e===null))return null;return e}function uf(e){return e.data==="$?"||e.data==="$~"}function df(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function $x(e,t){var n=e.ownerDocument;if(e.data==="$~")e._reactRetry=t;else if(e.data!=="$?"||n.readyState!=="loading")t();else{var l=function(){t(),n.removeEventListener("DOMContentLoaded",l)};n.addEventListener("DOMContentLoaded",l),e._reactRetry=l}}function hl(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?"||t==="$~"||t==="&"||t==="F!"||t==="F")break;if(t==="/$"||t==="/&")return null}}return e}var _f=null;function y1(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"||n==="/&"){if(t===0)return hl(e.nextSibling);t--}else n!=="$"&&n!=="$!"&&n!=="$?"&&n!=="$~"&&n!=="&"||t++}e=e.nextSibling}return null}function b1(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"){if(t===0)return e;t--}else n!=="/$"&&n!=="/&"||t++}e=e.previousSibling}return null}function iy(e,t,n){switch(t=lu(n),e){case"html":if(e=t.documentElement,!e)throw Error(H(452));return e;case"head":if(e=t.head,!e)throw Error(H(453));return e;case"body":if(e=t.body,!e)throw Error(H(454));return e;default:throw Error(H(451))}}function Ir(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);xf(e)}var ml=new Map,x1=new Set;function ou(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var xo=_t.d;_t.d={f:Hx,r:Ux,D:Yx,C:jx,L:Xx,m:qx,X:Qx,S:Ix,M:Wx};function Hx(){var e=xo.f(),t=vu();return e||t}function Ux(e){var t=Ui(e);t!==null&&t.tag===5&&t.type==="form"?Pg(t):xo.r(e)}var qi=typeof document>"u"?null:document;function ry(e,t,n){var l=qi;if(l&&typeof t=="string"&&t){var o=ul(t);o='link[rel="'+e+'"][href="'+o+'"]',typeof n=="string"&&(o+='[crossorigin="'+n+'"]'),x1.has(o)||(x1.add(o),e={rel:e,crossOrigin:n,href:t},l.querySelector(o)===null&&(t=l.createElement("link"),mn(t,"link",e),on(t),l.head.appendChild(t)))}}function Yx(e){xo.D(e),ry("dns-prefetch",e,null)}function jx(e,t){xo.C(e,t),ry("preconnect",e,t)}function Xx(e,t,n){xo.L(e,t,n);var l=qi;if(l&&e&&t){var o='link[rel="preload"][as="'+ul(t)+'"]';t==="image"&&n&&n.imageSrcSet?(o+='[imagesrcset="'+ul(n.imageSrcSet)+'"]',typeof n.imageSizes=="string"&&(o+='[imagesizes="'+ul(n.imageSizes)+'"]')):o+='[href="'+ul(e)+'"]';var a=o;switch(t){case"style":a=Bi(e);break;case"script":a=Ii(e)}ml.has(a)||(e=$t({rel:"preload",href:t==="image"&&n&&n.imageSrcSet?void 0:e,as:t},n),ml.set(a,e),l.querySelector(o)!==null||t==="style"&&l.querySelector(ms(a))||t==="script"&&l.querySelector(gs(a))||(t=l.createElement("link"),mn(t,"link",e),on(t),l.head.appendChild(t)))}}function qx(e,t){xo.m(e,t);var n=qi;if(n&&e){var l=t&&typeof t.as=="string"?t.as:"script",o='link[rel="modulepreload"][as="'+ul(l)+'"][href="'+ul(e)+'"]',a=o;switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":a=Ii(e)}if(!ml.has(a)&&(e=$t({rel:"modulepreload",href:e},t),ml.set(a,e),n.querySelector(o)===null)){switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(n.querySelector(gs(a)))return}l=n.createElement("link"),mn(l,"link",e),on(l),n.head.appendChild(l)}}}function Ix(e,t,n){xo.S(e,t,n);var l=qi;if(l&&e){var o=xi(l).hoistableStyles,a=Bi(e);t=t||"default";var i=o.get(a);if(!i){var r={loading:0,preload:null};if(i=l.querySelector(ms(a)))r.loading=5;else{e=$t({rel:"stylesheet",href:e,"data-precedence":t},n),(n=ml.get(a))&&ah(e,n);var s=i=l.createElement("link");on(s),mn(s,"link",e),s._p=new Promise(function(d,h){s.onload=d,s.onerror=h}),s.addEventListener("load",function(){r.loading|=1}),s.addEventListener("error",function(){r.loading|=2}),r.loading|=4,Nc(i,t,l)}i={type:"stylesheet",instance:i,count:1,state:r},o.set(a,i)}}}function Qx(e,t){xo.X(e,t);var n=qi;if(n&&e){var l=xi(n).hoistableScripts,o=Ii(e),a=l.get(o);a||(a=n.querySelector(gs(o)),a||(e=$t({src:e,async:!0},t),(t=ml.get(o))&&ih(e,t),a=n.createElement("script"),on(a),mn(a,"link",e),n.head.appendChild(a)),a={type:"script",instance:a,count:1,state:null},l.set(o,a))}}function Wx(e,t){xo.M(e,t);var n=qi;if(n&&e){var l=xi(n).hoistableScripts,o=Ii(e),a=l.get(o);a||(a=n.querySelector(gs(o)),a||(e=$t({src:e,async:!0,type:"module"},t),(t=ml.get(o))&&ih(e,t),a=n.createElement("script"),on(a),mn(a,"link",e),n.head.appendChild(a)),a={type:"script",instance:a,count:1,state:null},l.set(o,a))}}function v1(e,t,n,l){var o=(o=Uo.current)?ou(o):null;if(!o)throw Error(H(446));switch(e){case"meta":case"title":return null;case"style":return typeof n.precedence=="string"&&typeof n.href=="string"?(t=Bi(n.href),n=xi(o).hoistableStyles,l=n.get(t),l||(l={type:"style",instance:null,count:0,state:null},n.set(t,l)),l):{type:"void",instance:null,count:0,state:null};case"link":if(n.rel==="stylesheet"&&typeof n.href=="string"&&typeof n.precedence=="string"){e=Bi(n.href);var a=xi(o).hoistableStyles,i=a.get(e);if(i||(o=o.ownerDocument||o,i={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},a.set(e,i),(a=o.querySelector(ms(e)))&&!a._p&&(i.instance=a,i.state.loading=5),ml.has(e)||(n={rel:"preload",as:"style",href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},ml.set(e,n),a||Gx(o,e,n,i.state))),t&&l===null)throw Error(H(528,""));return i}if(t&&l!==null)throw Error(H(529,""));return null;case"script":return t=n.async,n=n.src,typeof n=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(t=Ii(n),n=xi(o).hoistableScripts,l=n.get(t),l||(l={type:"script",instance:null,count:0,state:null},n.set(t,l)),l):{type:"void",instance:null,count:0,state:null};default:throw Error(H(444,e))}}function Bi(e){return'href="'+ul(e)+'"'}function ms(e){return'link[rel="stylesheet"]['+e+"]"}function sy(e){return $t({},e,{"data-precedence":e.precedence,precedence:null})}function Gx(e,t,n,l){e.querySelector('link[rel="preload"][as="style"]['+t+"]")?l.loading=1:(t=e.createElement("link"),l.preload=t,t.addEventListener("load",function(){return l.loading|=1}),t.addEventListener("error",function(){return l.loading|=2}),mn(t,"link",n),on(t),e.head.appendChild(t))}function Ii(e){return'[src="'+ul(e)+'"]'}function gs(e){return"script[async]"+e}function w1(e,t,n){if(t.count++,t.instance===null)switch(t.type){case"style":var l=e.querySelector('style[data-href~="'+ul(n.href)+'"]');if(l)return t.instance=l,on(l),l;var o=$t({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return l=(e.ownerDocument||e).createElement("style"),on(l),mn(l,"style",o),Nc(l,n.precedence,e),t.instance=l;case"stylesheet":o=Bi(n.href);var a=e.querySelector(ms(o));if(a)return t.state.loading|=4,t.instance=a,on(a),a;l=sy(n),(o=ml.get(o))&&ah(l,o),a=(e.ownerDocument||e).createElement("link"),on(a);var i=a;return i._p=new Promise(function(r,s){i.onload=r,i.onerror=s}),mn(a,"link",l),t.state.loading|=4,Nc(a,n.precedence,e),t.instance=a;case"script":return a=Ii(n.src),(o=e.querySelector(gs(a)))?(t.instance=o,on(o),o):(l=n,(o=ml.get(a))&&(l=$t({},n),ih(l,o)),e=e.ownerDocument||e,o=e.createElement("script"),on(o),mn(o,"link",l),e.head.appendChild(o),t.instance=o);case"void":return null;default:throw Error(H(443,t.type))}else t.type==="stylesheet"&&(t.state.loading&4)===0&&(l=t.instance,t.state.loading|=4,Nc(l,n.precedence,e));return t.instance}function Nc(e,t,n){for(var l=n.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),o=l.length?l[l.length-1]:null,a=o,i=0;i<l.length;i++){var r=l[i];if(r.dataset.precedence===t)a=r;else if(a!==o)break}a?a.parentNode.insertBefore(e,a.nextSibling):(t=n.nodeType===9?n.head:n,t.insertBefore(e,t.firstChild))}function ah(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.title==null&&(e.title=t.title)}function ih(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.integrity==null&&(e.integrity=t.integrity)}var Dc=null;function k1(e,t,n){if(Dc===null){var l=new Map,o=Dc=new Map;o.set(n,l)}else o=Dc,l=o.get(n),l||(l=new Map,o.set(n,l));if(l.has(e))return l;for(l.set(e,null),n=n.getElementsByTagName(e),o=0;o<n.length;o++){var a=n[o];if(!(a[cs]||a[_n]||e==="link"&&a.getAttribute("rel")==="stylesheet")&&a.namespaceURI!=="http://www.w3.org/2000/svg"){var i=a.getAttribute(t)||"";i=e+i;var r=l.get(i);r?r.push(a):l.set(i,[a])}}return l}function S1(e,t,n){e=e.ownerDocument||e,e.head.insertBefore(n,t==="title"?e.querySelector("head > title"):null)}function Vx(e,t,n){if(n===1||t.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;return t.rel==="stylesheet"?(e=t.disabled,typeof t.precedence=="string"&&e==null):!0;case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function cy(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function Fx(e,t,n,l){if(n.type==="stylesheet"&&(typeof l.media!="string"||matchMedia(l.media).matches!==!1)&&(n.state.loading&4)===0){if(n.instance===null){var o=Bi(l.href),a=t.querySelector(ms(o));if(a){t=a._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(e.count++,e=au.bind(e),t.then(e,e)),n.state.loading|=4,n.instance=a,on(a);return}a=t.ownerDocument||t,l=sy(l),(o=ml.get(o))&&ah(l,o),a=a.createElement("link"),on(a);var i=a;i._p=new Promise(function(r,s){i.onload=r,i.onerror=s}),mn(a,"link",l),n.instance=a}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(n,t),(t=n.state.preload)&&(n.state.loading&3)===0&&(e.count++,n=au.bind(e),t.addEventListener("load",n),t.addEventListener("error",n))}}var y_=0;function Zx(e,t){return e.stylesheets&&e.count===0&&Rc(e,e.stylesheets),0<e.count||0<e.imgCount?function(n){var l=setTimeout(function(){if(e.stylesheets&&Rc(e,e.stylesheets),e.unsuspend){var a=e.unsuspend;e.unsuspend=null,a()}},6e4+t);0<e.imgBytes&&y_===0&&(y_=62500*Nx());var o=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&Rc(e,e.stylesheets),e.unsuspend)){var a=e.unsuspend;e.unsuspend=null,a()}},(e.imgBytes>y_?50:800)+t);return e.unsuspend=n,function(){e.unsuspend=null,clearTimeout(l),clearTimeout(o)}}:null}function au(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Rc(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var iu=null;function Rc(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,iu=new Map,t.forEach(Kx,e),iu=null,au.call(e))}function Kx(e,t){if(!(t.state.loading&4)){var n=iu.get(e);if(n)var l=n.get(null);else{n=new Map,iu.set(e,n);for(var o=e.querySelectorAll("link[data-precedence],style[data-precedence]"),a=0;a<o.length;a++){var i=o[a];(i.nodeName==="LINK"||i.getAttribute("media")!=="not all")&&(n.set(i.dataset.precedence,i),l=i)}l&&n.set(null,l)}o=t.instance,i=o.getAttribute("data-precedence"),a=n.get(i)||l,a===l&&n.set(null,o),n.set(i,o),this.count++,l=au.bind(this),o.addEventListener("load",l),o.addEventListener("error",l),a?a.parentNode.insertBefore(o,a.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(o,e.firstChild)),t.state.loading|=4}}var ns={$$typeof:so,Provider:null,Consumer:null,_currentValue:ka,_currentValue2:ka,_threadCount:0};function Jx(e,t,n,l,o,a,i,r,s){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Id(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Id(0),this.hiddenUpdates=Id(null),this.identifierPrefix=l,this.onUncaughtError=o,this.onCaughtError=a,this.onRecoverableError=i,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=s,this.incompleteTransitions=new Map}function uy(e,t,n,l,o,a,i,r,s,d,h,_){return e=new Jx(e,t,n,i,s,d,h,_,r),t=1,a===!0&&(t|=24),a=qn(3,null,null,t),e.current=a,a.stateNode=e,t=Rf(),t.refCount++,e.pooledCache=t,t.refCount++,a.memoizedState={element:l,isDehydrated:n,cache:t},Of(a),e}function dy(e){return e?(e=gi,e):gi}function _y(e,t,n,l,o,a){o=dy(o),l.context===null?l.context=o:l.pendingContext=o,l=jo(t),l.payload={element:n},a=a===void 0?null:a,a!==null&&(l.callback=a),n=Xo(e,l,t),n!==null&&(Bn(n,e,t),Br(n,e,t))}function C1(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function rh(e,t){C1(e,t),(e=e.alternate)&&C1(e,t)}function fy(e){if(e.tag===13||e.tag===31){var t=Ba(e,67108864);t!==null&&Bn(t,e,67108864),rh(e,67108864)}}function M1(e){if(e.tag===13||e.tag===31){var t=Vn();t=yf(t);var n=Ba(e,t);n!==null&&Bn(n,e,t),rh(e,t)}}var ru=!0;function Px(e,t,n,l){var o=xe.T;xe.T=null;var a=_t.p;try{_t.p=2,sh(e,t,n,l)}finally{_t.p=a,xe.T=o}}function ev(e,t,n,l){var o=xe.T;xe.T=null;var a=_t.p;try{_t.p=8,sh(e,t,n,l)}finally{_t.p=a,xe.T=o}}function sh(e,t,n,l){if(ru){var o=ff(l);if(o===null)g_(e,t,l,su,n),E1(e,l);else if(nv(o,e,t,n,l))l.stopPropagation();else if(E1(e,l),t&4&&-1<tv.indexOf(e)){for(;o!==null;){var a=Ui(o);if(a!==null)switch(a.tag){case 3:if(a=a.stateNode,a.current.memoizedState.isDehydrated){var i=xa(a.pendingLanes);if(i!==0){var r=a;for(r.pendingLanes|=2,r.entangledLanes|=2;i;){var s=1<<31-Gn(i);r.entanglements[1]|=s,i&=~s}Xl(a),(dt&6)===0&&(Kc=Qn()+500,hs(0,!1))}}break;case 31:case 13:r=Ba(a,2),r!==null&&Bn(r,a,2),vu(),rh(a,2)}if(a=ff(l),a===null&&g_(e,t,l,su,n),a===o)break;o=a}o!==null&&l.stopPropagation()}else g_(e,t,l,null,n)}}function ff(e){return e=wf(e),ch(e)}var su=null;function ch(e){if(su=null,e=ui(e),e!==null){var t=as(e);if(t===null)e=null;else{var n=t.tag;if(n===13){if(e=L1(t),e!==null)return e;e=null}else if(n===31){if(e=z1(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return su=e,null}function hy(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(X2()){case H1:return 2;case U1:return 8;case $c:case q2:return 32;case Y1:return 268435456;default:return 32}default:return 32}}var hf=!1,Qo=null,Wo=null,Go=null,ls=new Map,os=new Map,Lo=[],tv="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function E1(e,t){switch(e){case"focusin":case"focusout":Qo=null;break;case"dragenter":case"dragleave":Wo=null;break;case"mouseover":case"mouseout":Go=null;break;case"pointerover":case"pointerout":ls.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":os.delete(t.pointerId)}}function Cr(e,t,n,l,o,a){return e===null||e.nativeEvent!==a?(e={blockedOn:t,domEventName:n,eventSystemFlags:l,nativeEvent:a,targetContainers:[o]},t!==null&&(t=Ui(t),t!==null&&fy(t)),e):(e.eventSystemFlags|=l,t=e.targetContainers,o!==null&&t.indexOf(o)===-1&&t.push(o),e)}function nv(e,t,n,l,o){switch(t){case"focusin":return Qo=Cr(Qo,e,t,n,l,o),!0;case"dragenter":return Wo=Cr(Wo,e,t,n,l,o),!0;case"mouseover":return Go=Cr(Go,e,t,n,l,o),!0;case"pointerover":var a=o.pointerId;return ls.set(a,Cr(ls.get(a)||null,e,t,n,l,o)),!0;case"gotpointercapture":return a=o.pointerId,os.set(a,Cr(os.get(a)||null,e,t,n,l,o)),!0}return!1}function my(e){var t=ui(e.target);if(t!==null){var n=as(t);if(n!==null){if(t=n.tag,t===13){if(t=L1(n),t!==null){e.blockedOn=t,um(e.priority,function(){M1(n)});return}}else if(t===31){if(t=z1(n),t!==null){e.blockedOn=t,um(e.priority,function(){M1(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Lc(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=ff(e.nativeEvent);if(n===null){n=e.nativeEvent;var l=new n.constructor(n.type,n);D_=l,n.target.dispatchEvent(l),D_=null}else return t=Ui(n),t!==null&&fy(t),e.blockedOn=n,!1;t.shift()}return!0}function T1(e,t,n){Lc(e)&&n.delete(t)}function lv(){hf=!1,Qo!==null&&Lc(Qo)&&(Qo=null),Wo!==null&&Lc(Wo)&&(Wo=null),Go!==null&&Lc(Go)&&(Go=null),ls.forEach(T1),os.forEach(T1)}function pc(e,t){e.blockedOn===t&&(e.blockedOn=null,hf||(hf=!0,nn.unstable_scheduleCallback(nn.unstable_NormalPriority,lv)))}var yc=null;function A1(e){yc!==e&&(yc=e,nn.unstable_scheduleCallback(nn.unstable_NormalPriority,function(){yc===e&&(yc=null);for(var t=0;t<e.length;t+=3){var n=e[t],l=e[t+1],o=e[t+2];if(typeof l!="function"){if(ch(l||n)===null)continue;break}var a=Ui(n);a!==null&&(e.splice(t,3),t-=3,G_(a,{pending:!0,data:o,method:n.method,action:l},l,o))}}))}function $i(e){function t(s){return pc(s,e)}Qo!==null&&pc(Qo,e),Wo!==null&&pc(Wo,e),Go!==null&&pc(Go,e),ls.forEach(t),os.forEach(t);for(var n=0;n<Lo.length;n++){var l=Lo[n];l.blockedOn===e&&(l.blockedOn=null)}for(;0<Lo.length&&(n=Lo[0],n.blockedOn===null);)my(n),n.blockedOn===null&&Lo.shift();if(n=(e.ownerDocument||e).$$reactFormReplay,n!=null)for(l=0;l<n.length;l+=3){var o=n[l],a=n[l+1],i=o[$n]||null;if(typeof a=="function")i||A1(n);else if(i){var r=null;if(a&&a.hasAttribute("formAction")){if(o=a,i=a[$n]||null)r=i.formAction;else if(ch(o)!==null)continue}else r=i.action;typeof r=="function"?n[l+1]=r:(n.splice(l,3),l-=3),A1(n)}}}function gy(){function e(a){a.canIntercept&&a.info==="react-transition"&&a.intercept({handler:function(){return new Promise(function(i){return o=i})},focusReset:"manual",scroll:"manual"})}function t(){o!==null&&(o(),o=null),l||setTimeout(n,20)}function n(){if(!l&&!navigation.transition){var a=navigation.currentEntry;a&&a.url!=null&&navigation.navigate(a.url,{state:a.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var l=!1,o=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",t),navigation.addEventListener("navigateerror",t),setTimeout(n,100),function(){l=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",t),navigation.removeEventListener("navigateerror",t),o!==null&&(o(),o=null)}}}function uh(e){this._internalRoot=e}Su.prototype.render=uh.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(H(409));var n=t.current,l=Vn();_y(n,l,e,t,null,null)};Su.prototype.unmount=uh.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;_y(e.current,2,null,e,null,null),vu(),t[Hi]=null}};function Su(e){this._internalRoot=e}Su.prototype.unstable_scheduleHydration=function(e){if(e){var t=Q1();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Lo.length&&t!==0&&t<Lo[n].priority;n++);Lo.splice(n,0,e),n===0&&my(e)}};var N1=D1.version;if(N1!=="19.2.8")throw Error(H(527,N1,"19.2.8"));_t.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(H(188)):(e=Object.keys(e).join(","),Error(H(268,e)));return e=O2(t),e=e!==null?O1(e):null,e=e===null?null:e.stateNode,e};var ov={bundleType:0,version:"19.2.8",rendererPackageName:"react-dom",currentDispatcherRef:xe,reconcilerVersion:"19.2.8"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"&&(Mr=__REACT_DEVTOOLS_GLOBAL_HOOK__,!Mr.isDisabled&&Mr.supportsFiber))try{is=Mr.inject(ov),Wn=Mr}catch{}var Mr;Cu.createRoot=function(e,t){if(!R1(e))throw Error(H(299));var n=!1,l="",o=rp,a=sp,i=cp;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(l=t.identifierPrefix),t.onUncaughtError!==void 0&&(o=t.onUncaughtError),t.onCaughtError!==void 0&&(a=t.onCaughtError),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=uy(e,1,!1,null,null,n,l,null,o,a,i,gy),e[Hi]=t.current,oh(e),new uh(t)};Cu.hydrateRoot=function(e,t,n){if(!R1(e))throw Error(H(299));var l=!1,o="",a=rp,i=sp,r=cp,s=null;return n!=null&&(n.unstable_strictMode===!0&&(l=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onUncaughtError!==void 0&&(a=n.onUncaughtError),n.onCaughtError!==void 0&&(i=n.onCaughtError),n.onRecoverableError!==void 0&&(r=n.onRecoverableError),n.formState!==void 0&&(s=n.formState)),t=uy(e,1,!0,t,n??null,l,o,s,a,i,r,gy),t.context=dy(null),n=t.current,l=Vn(),l=yf(l),o=jo(l),o.callback=null,Xo(n,o,l),n=l,t.current.lanes=n,ss(t,n),Xl(t),e[Hi]=t.current,oh(e),new Su(t)};Cu.version="19.2.8"});var xy=Ol((J6,by)=>{"use strict";function yy(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(yy)}catch(e){console.error(e)}}yy(),by.exports=py()});var wy=Ol(Mu=>{"use strict";var av=Symbol.for("react.transitional.element"),iv=Symbol.for("react.fragment");function vy(e,t,n){var l=null;if(n!==void 0&&(l=""+n),t.key!==void 0&&(l=""+t.key),"key"in t){n={};for(var o in t)o!=="key"&&(n[o]=t[o])}else n=t;return t=n.ref,{$$typeof:av,type:e,key:l,ref:t!==void 0?t:null,props:n}}Mu.Fragment=iv;Mu.jsx=vy;Mu.jsxs=vy});var Jt=Ol((e3,ky)=>{"use strict";ky.exports=wy()});var O5=Te(zt()),B5=Te(xy());var Wu=Te(zt(),1),C=Te(zt(),1),Vu=Te(zt(),1),d5=Te(br(),1),Ji=Te(zt(),1),Pi=Te(zt(),1),_5=Te(br(),1),f5=Te(Jt(),1),rn=Te(zt(),1),Ms=Te(zt(),1),m5=Te(zt(),1),kn=Te(zt(),1),et=Te(Jt(),1),Sh=Te(Jt(),1),te=Te(Jt(),1),Il=Te(zt(),1),y5=Te(br(),1),ja=Te(Jt(),1),Ch=Te(Jt(),1),Ya=Te(Jt(),1),st=Te(zt(),1),u=Te(Jt(),1),Et=Te(Jt(),1),sn=Te(zt(),1),la=Te(zt(),1),c=Te(Jt(),1),Se=Te(zt(),1),Ze=Te(Jt(),1),o6=Te(zt(),1),Un=Te(zt(),1),Rh=Te(Jt(),1),gl=Te(zt(),1),ql=Te(Jt(),1),na=Te(zt(),1),Ts=Te(Jt(),1),R5=Te(zt(),1),Vi=Te(Jt(),1),Fi=Te(Jt(),1),le=Te(Jt(),1),Zu=Te(zt(),1),As=Te(Jt(),1),I=Te(Jt(),1),L5=Te(zt(),1),l5=["data-feedback-toolbar","data-annotation-popup","data-annotation-marker"],dh=l5.flatMap(e=>[`:not([${e}])`,`:not([${e}] *)`]).join(""),wh="feedback-freeze-styles",kh="__agentation_freeze";function rv(){return typeof window>"u"?{frozen:!1,installed:!0,origSetTimeout:setTimeout,origSetInterval:setInterval,origRAF:t=>0,pausedAnimations:[],frozenTimeoutQueue:[],frozenRAFQueue:[]}:window[kh]??{frozen:!1,installed:!1,origSetTimeout:window.setTimeout.bind(window),origSetInterval:window.setInterval.bind(window),origRAF:window.requestAnimationFrame.bind(window),pausedAnimations:[],frozenTimeoutQueue:[],frozenRAFQueue:[]}}var We=rv();function o5(){if(typeof window>"u")return;let e=window;We=e[kh]??(e[kh]=We),!We.installed&&(window.setTimeout=(t,n,...l)=>typeof t=="string"?We.origSetTimeout(t,n):We.origSetTimeout((...o)=>{We.frozen?We.frozenTimeoutQueue.push(()=>t(...o)):t(...o)},n,...l),window.setInterval=(t,n,...l)=>typeof t=="string"?We.origSetInterval(t,n):We.origSetInterval((...o)=>{We.frozen||t(...o)},n,...l),window.requestAnimationFrame=t=>We.origRAF(n=>{We.frozen?We.frozenRAFQueue.push(t):t(n)}),We.installed=!0)}var rt=We.origSetTimeout,a5=We.origSetInterval,Iu=We.origRAF;function sv(e){return e?l5.some(t=>!!e.closest?.(`[${t}]`)):!1}function cv(){if(typeof document>"u"||(o5(),We.frozen))return;We.frozen=!0,We.frozenTimeoutQueue=[],We.frozenRAFQueue=[];let e=document.getElementById(wh);e||(e=document.createElement("style"),e.id=wh),e.textContent=`
    *${dh},
    *${dh}::before,
    *${dh}::after {
      animation-play-state: paused !important;
      transition: none !important;
    }
  `,document.head.appendChild(e),We.pausedAnimations=[];try{document.getAnimations().forEach(t=>{if(t.playState!=="running")return;let n=t.effect?.target;sv(n)||(t.pause(),We.pausedAnimations.push(t))})}catch{}document.querySelectorAll("video").forEach(t=>{t.paused||(t.dataset.wasPaused="false",t.pause())})}function Sy(){if(typeof document>"u"||!We.frozen)return;We.frozen=!1;let e=We.frozenTimeoutQueue;We.frozenTimeoutQueue=[];for(let n of e)We.origSetTimeout(()=>{if(We.frozen){We.frozenTimeoutQueue.push(n);return}try{n()}catch(l){console.warn("[agentation] Error replaying queued timeout:",l)}},0);let t=We.frozenRAFQueue;We.frozenRAFQueue=[];for(let n of t)We.origRAF(l=>{if(We.frozen){We.frozenRAFQueue.push(n);return}n(l)});for(let n of We.pausedAnimations)try{n.play()}catch(l){console.warn("[agentation] Error resuming animation:",l)}We.pausedAnimations=[],document.getElementById(wh)?.remove(),document.querySelectorAll("video").forEach(n=>{n.dataset.wasPaused==="false"&&(n.play().catch(()=>{}),delete n.dataset.wasPaused)})}function Cy(){let e=(0,Wu.useMemo)(()=>{let t=0,n=new Set,l=()=>(n.forEach(clearTimeout),n.clear(),++t),o=i=>i===t;return{start:l,isCurrent:o,schedule:(i,r,s)=>{if(!o(i))return;let d=rt(()=>{n.delete(d),o(i)&&r()},s);n.add(d)}}},[]);return(0,Wu.useEffect)(()=>()=>{e.start()},[e]),e}function uv(e,t,n,l){let o=d=>l.get(d.id)??d.id,a=new Map(e.map(d=>[o(d),d])),i=new Map(t.map(d=>[o(d),d])),r=new Set(n.map(d=>d.id)),s=[];for(let d of n){let h=a.get(d.id),_=i.get(d.id);if(h&&!_)continue;let m=_&&h&&_.comment!==h.comment;s.push(m?{...d,comment:_.comment}:d)}for(let[d,h]of i)!a.has(d)&&!r.has(d)&&s.push(h);return s}function Ns(e){if(e.tagName!=="IFRAME")return null;try{return e.contentDocument}catch{return null}}function Kn(e,t=document){if(e===t)return null;try{return e.defaultView?.frameElement}catch{return null}}function Lh(e){return e.nodeType===11&&"host"in e}function Ki(e){let t=e.getBoundingClientRect(),n=e.offsetWidth?t.width/e.offsetWidth:1,l=e.offsetHeight?t.height/e.offsetHeight:1,o=e.ownerDocument.defaultView?.getComputedStyle(e),a=h=>parseFloat(h||"0")||0,i=a(o?.paddingLeft),r=a(o?.paddingTop),s=e.clientWidth-i-a(o?.paddingRight),d=e.clientHeight-r-a(o?.paddingBottom);return{x:t.left+(e.clientLeft+i)*n,y:t.top+(e.clientTop+r)*l,sx:n,sy:l,width:s*n,height:d*l}}function My(e){try{let t=new URL(e);return t.origin+t.pathname}catch{return e}}function dv(e,t,n,l=document){let o=Kn(e,l);for(;o;){let a=Ki(o);t=a.x+t*a.sx,n=a.y+n*a.sy,o=Kn(o.ownerDocument,l)}return{x:t,y:n}}function Pt(e,t=document){let n=e.getBoundingClientRect();return i5(e.ownerDocument,n,t)}function i5(e,t,n){if(!Kn(e,n))return t;let l=t.left,o=t.top,a=t.right,i=t.bottom,r=Kn(e,n);for(;r;){let s=Ki(r);l=Math.max(s.x,s.x+l*s.sx),o=Math.max(s.y,s.y+o*s.sy),a=Math.min(s.x+s.width,s.x+a*s.sx),i=Math.min(s.y+s.height,s.y+i*s.sy),r=Kn(r.ownerDocument,n)}return new DOMRect(l,o,Math.max(0,a-l),Math.max(0,i-o))}function Gu(e){let t=[];for(let n of e.querySelectorAll("*"))n.tagName==="IFRAME"&&t.push(n),n.shadowRoot&&n.tagName!=="AGENTATION-TOOLBAR"&&t.push(...Gu(n.shadowRoot));return t}function _v(e,t,n,l=document){let o=[];for(let _=Kn(e.ownerDocument,l);_;_=Kn(_.ownerDocument,l))o.unshift(_);if(!o.length)return;let a=o.map(_=>{let m=Ki(_);return t=(t-m.x)/m.sx,n=(n-m.y)/m.sy,{index:Gu(_.ownerDocument).indexOf(_),id:_.id||void 0,url:Ns(_)?.URL??""}}),i=e.ownerDocument.defaultView,r=!1;for(let _=e;_;_=_.parentElement)if(["fixed","sticky"].includes(i.getComputedStyle(_).position)){r=!0;break}let s=r?0:i.scrollX,d=r?0:i.scrollY,h=e.getBoundingClientRect();return{path:a,x:t+s,y:n+d,fixed:r,boundingBox:{x:h.left+s,y:h.top+d,width:h.width,height:h.height}}}function fv(e=document){let t=new Map,n=l=>{let o=t.get(l);return o||(o=Gu(l),t.set(l,o)),o};return l=>hv(l,e,n)}function hv(e,t=document,n=Gu){let l=e.frame;if(!l)return e;let o=t;for(let v of l.path){let k=n(o),A=v.id?k.find(p=>p.id===v.id):k[v.index],M=A&&Ns(A);if(!M||My(M.URL)!==My(v.url))return null;o=M}let a=o.defaultView,i=l.fixed?0:a.scrollX,r=l.fixed?0:a.scrollY,s=l.x-i,d=l.y-r;for(let v=o,k=Kn(o,t);k;k=Kn(v,t)){let A=v.defaultView;if(s<0||d<0||s>A.innerWidth||d>A.innerHeight)return null;let M=Ki(k);if(M.width<=0||M.height<=0)return null;s=M.x+s*M.sx,d=M.y+d*M.sy,v=k.ownerDocument}let h=l.boundingBox,_=i5(o,new DOMRect(h.x-i,h.y-r,h.width,h.height),t),m=t.defaultView;return{...e,x:s/m.innerWidth*100,y:d+(e.isFixed?0:m.scrollY),boundingBox:{x:_.x,y:_.y+(e.isFixed?0:m.scrollY),width:_.width,height:_.height}}}function mv(e,t,n){if(!("clientX"in e)||t===n)return e;let l=dv(t,e.clientX,e.clientY,n);return new Proxy(e,{get(o,a){if(a==="clientX")return l.x;if(a==="clientY")return l.y;let i=Reflect.get(o,a,o);return typeof i=="function"?i.bind(o):i}})}function gv(e,t){let n=new Set([e]),l=new Set,o=[],a=new Set,i=!1,r=!1,s,d=(_,m)=>{let v=k=>_.listener(mv(k,m,e));_.handlers.set(m,v),m.addEventListener(_.type,v,_.options)},h=()=>{if(i=!1,!r)return;let _=new Set,m=new Set,v=[],k=A=>{v.push(A);for(let M of A.querySelectorAll("*"))if(!M.matches("agentation-toolbar, [data-agentation-portal]")&&(M.shadowRoot&&k(M.shadowRoot),M.tagName==="IFRAME")){m.add(M);let p=Ns(M);p&&!_.has(p)&&(_.add(p),k(p))}};_.add(e),k(e);for(let A of n)if(!_.has(A)){for(let M of l){let p=M.handlers.get(A);p&&A.removeEventListener(M.type,p,M.options),M.handlers.delete(A)}n.delete(A)}for(let A of _)if(!n.has(A)){n.add(A);for(let M of l)d(M,A)}for(let A of a)m.has(A)||A.removeEventListener("load",h);for(let A of m)a.has(A)||A.addEventListener("load",h);a=m,s?.disconnect(),a.forEach(A=>s?.observe(A)),o.forEach(A=>A.disconnect()),o=v.map(A=>{let M=new MutationObserver(p=>{p.some(g=>[...g.addedNodes,...g.removedNodes].some(S=>S.nodeType===1&&!S.closest("agentation-toolbar, [data-agentation-portal]")&&(S.tagName==="IFRAME"||!!S.shadowRoot||!!S.querySelector("iframe"))))&&!i&&(i=!0,queueMicrotask(h))});return M.observe(A,{childList:!0,subtree:!0}),M}),t?.()};return{start(){r||(r=!0,typeof ResizeObserver=="function"&&(s=new ResizeObserver(()=>t?.())),h())},stop(){r=!1,s?.disconnect(),s=void 0,o.forEach(_=>_.disconnect()),o=[];for(let _ of a)_.removeEventListener("load",h);a.clear();for(let _ of l)for(let[m,v]of _.handlers)m.removeEventListener(_.type,v,_.options);l.clear(),n.clear(),n.add(e)},addEventListener(_,m,v){let k={type:_,listener:m,options:v,handlers:new Map};l.add(k);for(let A of n)d(k,A)},removeEventListener(_,m,v){for(let k of l)if(k.type===_&&k.listener===m){for(let[A,M]of k.handlers)A.removeEventListener(_,M,k.options);l.delete(k)}},querySelectorAll(_){return[...n].flatMap(m=>[...m.querySelectorAll(_)])}}}var zh=["data-testid","data-test","data-qa","data-cy","data-component"];function ks(e,t=zh){let n={};for(let l of[...new Set(t)].slice(0,16)){if(!/^[a-zA-Z_][\w:.-]*$/.test(l))continue;let o=e.getAttribute(l);o!=null&&o.length<=500&&Object.defineProperty(n,l,{value:o,enumerable:!0})}return n}function pv(e,t=zh){return Object.entries(ks(e,t)).filter(([n,l])=>/^data-[a-z0-9_-]+$/.test(n)&&l.length<=120).slice(0,2).map(([n,l])=>`[${n}="${l.replace(/[\\"\n\r\f\0]/g,o=>o==="\\"||o==='"'?`\\${o}`:`\\${o.charCodeAt(0).toString(16)} `)}"]`).join("")}function Zi(e){if(e.parentElement)return e.parentElement;let t=e.getRootNode();return Lh(t)?t.host:null}function pn(e,t){let n=e;for(;n;){if(n.matches(t))return n;n=Zi(n)}return null}function r5(e,t=4,n){let l=[],o=e,a=0;for(;o&&a<t;){let r=o.tagName.toLowerCase();if(r==="html"||r==="body"){l.length===0&&l.push(r);break}let s=r;if(o.id)s=`#${o.id}`;else if(o.className&&typeof o.className=="string"){let h=o.className.split(/\s+/).find(_=>_.length>2&&!_.match(/^[a-z]{1,2}$/)&&!_.match(/[A-Z0-9]{5,}/));h&&(s=`.${h.split("_")[0]}`)}s+=pv(o,n);let d=Zi(o);!o.parentElement&&d&&(s=`\u27E8shadow\u27E9 ${s}`),l.unshift(s),o=d,a++}let i=Kn(e.ownerDocument);return(i?r5(i,2)+" > \u27E8iframe\u27E9 ":"")+l.join(" > ")}function yv(e){let t="";for(let n of e.childNodes)if(n.nodeType===Node.TEXT_NODE){let l=n.textContent?.trim();l&&(t+=(t?" ":"")+l)}return t}function Gi(e,t){let n=r5(e,4,t);if(e.dataset.element)return{name:e.dataset.element,path:n};let l=e.tagName.toLowerCase();if(["path","circle","rect","line","g"].includes(l)){let o=pn(e,"svg");if(o){let a=Zi(o);if(a?.namespaceURI==="http://www.w3.org/1999/xhtml")return{name:`graphic in ${Gi(a).name}`,path:n}}return{name:"graphic element",path:n}}if(l==="svg"){let o=Zi(e);if(o?.tagName.toLowerCase()==="button"){let a=o.textContent?.trim();return{name:a?`icon in "${a}" button`:"button icon",path:n}}return{name:"icon",path:n}}if(l==="button"){let o=e.textContent?.trim(),a=e.getAttribute("aria-label");return a?{name:`button [${a}]`,path:n}:{name:o?`button "${o.slice(0,25)}"`:"button",path:n}}if(l==="a"){let o=e.textContent?.trim(),a=e.getAttribute("href");return o?{name:`link "${o.slice(0,25)}"`,path:n}:a?{name:`link to ${a.slice(0,30)}`,path:n}:{name:"link",path:n}}if(l==="input"){let o=e.getAttribute("type")||"text",a=e.getAttribute("placeholder"),i=e.getAttribute("name");return a?{name:`input "${a}"`,path:n}:i?{name:`input [${i}]`,path:n}:{name:`${o} input`,path:n}}if(["h1","h2","h3","h4","h5","h6"].includes(l)){let o=e.textContent?.trim();return{name:o?`${l} "${o.slice(0,35)}"`:l,path:n}}if(l==="p"){let o=e.textContent?.trim();return o?{name:`paragraph: "${o.slice(0,40)}${o.length>40?"...":""}"`,path:n}:{name:"paragraph",path:n}}if(l==="span"||l==="label"){let o=e.textContent?.trim();return o&&o.length<40?{name:`"${o}"`,path:n}:{name:l,path:n}}if(l==="li"){let o=e.textContent?.trim();return o&&o.length<40?{name:`list item: "${o.slice(0,35)}"`,path:n}:{name:"list item",path:n}}if(l==="blockquote")return{name:"blockquote",path:n};if(l==="code"){let o=e.textContent?.trim();return o&&o.length<30?{name:`code: \`${o}\``,path:n}:{name:"code",path:n}}if(l==="pre")return{name:"code block",path:n};if(l==="img"){let o=e.getAttribute("alt");return{name:o?`image "${o.slice(0,30)}"`:"image",path:n}}if(l==="video")return{name:"video",path:n};if(["div","section","article","nav","header","footer","aside","main"].includes(l)){let o=e.className,a=e.getAttribute("role"),i=e.getAttribute("aria-label");if(i)return{name:`${l} [${i}]`,path:n};if(a)return{name:`${a}`,path:n};let r=yv(e);if(r&&r.length<50)return{name:`"${r}"`,path:n};if(typeof o=="string"&&o){let s=o.split(/[\s_-]+/).map(d=>d.replace(/[A-Z0-9]{5,}.*$/,"")).filter(d=>d.length>2&&!/^[a-z]{1,2}$/.test(d)).slice(0,2);if(s.length>0)return{name:s.join(" "),path:n}}return{name:l==="div"?"container":l,path:n}}return{name:l,path:n}}function ps(e){let t=[],n=e.textContent?.trim();n&&n.length<100&&t.push(n);let l=e.previousElementSibling;if(l){let a=l.textContent?.trim();a&&a.length<50&&t.unshift(`[before: "${a.slice(0,40)}"]`)}let o=e.nextElementSibling;if(o){let a=o.textContent?.trim();a&&a.length<50&&t.push(`[after: "${a.slice(0,40)}"]`)}return t.join(" ")}function Eu(e){let t=Zi(e);if(!t)return"";let n=e.getRootNode(),o=(Lh(n)&&e.parentElement?Array.from(e.parentElement.children):Array.from(t.children)).filter(h=>h!==e&&h.namespaceURI==="http://www.w3.org/1999/xhtml");if(o.length===0)return"";let a=o.slice(0,4).map(h=>{let _=h.tagName.toLowerCase(),m=h.className,v="";if(typeof m=="string"&&m){let k=m.split(/\s+/).map(A=>A.replace(/[_][a-zA-Z0-9]{5,}.*$/,"")).find(A=>A.length>2&&!/^[a-z]{1,2}$/.test(A));k&&(v=`.${k}`)}if(_==="button"||_==="a"){let k=h.textContent?.trim().slice(0,15);if(k)return`${_}${v} "${k}"`}return`${_}${v}`}),r=t.tagName.toLowerCase();if(typeof t.className=="string"&&t.className){let h=t.className.split(/\s+/).map(_=>_.replace(/[_][a-zA-Z0-9]{5,}.*$/,"")).find(_=>_.length>2&&!/^[a-z]{1,2}$/.test(_));h&&(r=`.${h}`)}let s=t.children.length,d=s>a.length+1?` (${s} total in ${r})`:"";return a.join(", ")+d}function ys(e){let t=e.className;return typeof t!="string"||!t?"":t.split(/\s+/).filter(l=>l.length>0).map(l=>{let o=l.match(/^([a-zA-Z][a-zA-Z0-9_-]*?)(?:_[a-zA-Z0-9]{5,})?$/);return o?o[1]:l}).filter((l,o,a)=>a.indexOf(l)===o).join(", ")}var s5=new Set(["none","normal","auto","0px","rgba(0, 0, 0, 0)","transparent","static","visible"]),bv=new Set(["p","span","h1","h2","h3","h4","h5","h6","label","li","td","th","blockquote","figcaption","caption","legend","dt","dd","pre","code","em","strong","b","i","a","time","cite","q"]),xv=new Set(["input","textarea","select"]),vv=new Set(["img","video","canvas","svg"]),wv=new Set(["div","section","article","nav","header","footer","aside","main","ul","ol","form","fieldset"]);function Tu(e){if(typeof window>"u")return{};let t=(e.ownerDocument.defaultView??window).getComputedStyle(e),n={},l=e.tagName.toLowerCase(),o;bv.has(l)?o=["color","fontSize","fontWeight","fontFamily","lineHeight"]:l==="button"||l==="a"&&e.getAttribute("role")==="button"?o=["backgroundColor","color","padding","borderRadius","fontSize"]:xv.has(l)?o=["backgroundColor","color","padding","borderRadius","fontSize"]:vv.has(l)?o=["width","height","objectFit","borderRadius"]:wv.has(l)?o=["display","padding","margin","gap","backgroundColor"]:o=["color","fontSize","margin","padding","backgroundColor"];for(let a of o){let i=a.replace(/([A-Z])/g,"-$1").toLowerCase(),r=t.getPropertyValue(i);r&&!s5.has(r)&&(n[a]=r)}return n}var kv=["color","backgroundColor","borderColor","fontSize","fontWeight","fontFamily","lineHeight","letterSpacing","textAlign","width","height","padding","margin","border","borderRadius","display","position","top","right","bottom","left","zIndex","flexDirection","justifyContent","alignItems","gap","opacity","visibility","overflow","boxShadow","transform"];function Au(e){if(typeof window>"u")return"";let t=(e.ownerDocument.defaultView??window).getComputedStyle(e),n=[];for(let l of kv){let o=l.replace(/([A-Z])/g,"-$1").toLowerCase(),a=t.getPropertyValue(o);a&&!s5.has(a)&&n.push(`${o}: ${a}`)}return n.join("; ")}function Sv(e){if(!e)return;let t={},n=e.split(";").map(l=>l.trim()).filter(Boolean);for(let l of n){let o=l.indexOf(":");if(o>0){let a=l.slice(0,o).trim(),i=l.slice(o+1).trim();a&&i&&(t[a]=i)}}return Object.keys(t).length>0?t:void 0}function Nu(e){let t=[],n=e.getAttribute("role"),l=e.getAttribute("aria-label"),o=e.getAttribute("aria-describedby"),a=e.getAttribute("tabindex"),i=e.getAttribute("aria-hidden");return n&&t.push(`role="${n}"`),l&&t.push(`aria-label="${l}"`),o&&t.push(`aria-describedby="${o}"`),a&&t.push(`tabindex=${a}`),i==="true"&&t.push("aria-hidden"),e.matches("a, button, input, select, textarea, [tabindex]")&&t.push("focusable"),t.join(", ")}function Ss(e){let t=[],n=e;for(;n&&n.tagName.toLowerCase()!=="html";){let o=n.tagName.toLowerCase(),a=o;if(n.id)a=`${o}#${n.id}`;else if(n.className&&typeof n.className=="string"){let r=n.className.split(/\s+/).map(s=>s.replace(/[_][a-zA-Z0-9]{5,}.*$/,"")).find(s=>s.length>2);r&&(a=`${o}.${r}`)}let i=Zi(n);!n.parentElement&&i&&(a=`\u27E8shadow\u27E9 ${a}`),t.unshift(a),n=i}let l=Kn(e.ownerDocument);return(l?Ss(l)+" > \u27E8iframe\u27E9 ":"")+t.join(" > ")}var c5="agentation-toolbar, [data-agentation-root], [data-feedback-toolbar], [data-annotation-popup], [data-annotation-marker]",Cv=new Set(["DIV","SPAN","SECTION","ARTICLE","MAIN","ASIDE","HEADER","FOOTER","NAV"]);function Xu(e,t){let n=document.elementFromPoint(e,t),l=new Set;for(;n&&!l.has(n);){l.add(n);let o=Ns(n),a;if(o){let i=Ki(n);e=(e-i.x)/i.sx,t=(t-i.y)/i.sy,a=o.elementFromPoint?.(e,t)}else a=n.shadowRoot?.elementFromPoint?.(e,t);if(!a||a===n)break;n=a}return n}function Mv(e){if(typeof e.checkVisibility=="function")return e.checkVisibility({checkOpacity:!0,checkVisibilityCSS:!0});let t=getComputedStyle(e);if(t.visibility==="hidden"||t.visibility==="collapse")return!1;let n=e;for(;n;){let l=getComputedStyle(n);if(l.opacity==="0"||l.display==="none"||l.contentVisibility==="hidden")return!1;let o=n.getRootNode();n=n.parentElement||(Lh(o)?o.host:null)}return!0}function u5(e,t){let n=[],l=new Set,o=(a,i,r)=>{for(let s of a){if(l.has(s))continue;if(l.add(s),s.shadowRoot){let h=s.shadowRoot,_=h.elementsFromPoint?.(i,r)??[];o(_.length?_:[h.elementFromPoint?.(i,r)].filter(Boolean),i,r)}let d=Ns(s);if(d){let h=Ki(s),_=(i-h.x)/h.sx,m=(r-h.y)/h.sy;o(d.elementsFromPoint?.(_,m)??[d.elementFromPoint?.(_,m)].filter(Boolean),_,m)}s!==s.ownerDocument.body&&s!==s.ownerDocument.documentElement&&!pn(s,c5)&&Mv(s)&&n.push(s)}};return o(document.elementsFromPoint?.(e,t)??[document.elementFromPoint(e,t)].filter(Boolean),e,t),n}function Du(e,t,n){if(n.width<=0||n.height<=0)return null;let l=null,o=1/0;for(let a of u5(e,t)){let i=Pt(a),r=i.width/n.width,s=i.height/n.height;if(r<.5||r>2||s<.5||s>2)continue;let d=Math.abs(Math.log(r))+Math.abs(Math.log(s));d<o&&(l=a,o=d)}return l}function Ey(e,t){let n=Xu(e,t);if(!n||pn(n,c5))return null;let l=u5(e,t);for(let i of l)if(!Cv.has(i.tagName)&&!i.shadowRoot||Array.from(i.childNodes).some(r=>r.nodeType===Node.TEXT_NODE&&r.textContent?.trim()))return i;let o=null,a=1/0;for(let i of l){let r=Pt(i),s=r.width*r.height;s>0&&s<a&&(o=i,a=s)}return o}function Ev(e){let t=(0,Vu.useCallback)(n=>e?(window.addEventListener("hashchange",n),window.addEventListener("popstate",n),()=>{window.removeEventListener("hashchange",n),window.removeEventListener("popstate",n)}):()=>{},[e]);return(0,Vu.useSyncExternalStore)(t,()=>window.location.pathname+(e?window.location.hash:""),()=>"/")}var Ru=new Map;function Tv(e,t){let n=(Ru.get(e)??Promise.resolve()).then(t),l=n.then(()=>{},()=>{});return Ru.set(e,l),l.then(()=>{Ru.get(e)===l&&Ru.delete(e)}),n}function Av(e,t,n){try{let l=new URL(e,n);return l.origin===n&&l.pathname+l.hash===t}catch{return!1}}var Ty=typeof window>"u"?Ji.useEffect:Ji.useLayoutEffect;function Nv(e){let[t,n]=(0,Ji.useState)(null);return Ty(()=>{let l=document.createElement("div");return l.setAttribute("data-agentation-portal",""),l.style.display="contents",n(l),()=>l.remove()},[]),Ty(()=>{if(!t)return;let l=e??document.body;if(l.ownerDocument!==document){console.warn("[Agentation] portalContainer belongs to another document; the toolbar will not render.");return}let o=document.activeElement;for(;o?.shadowRoot?.activeElement;)o=o.shadowRoot.activeElement;let a=o&&t.contains(document.activeElement)?o:null;typeof t.hidePopover=="function"&&t.matches(":popover-open")&&t.hidePopover(),l.appendChild(t),e&&typeof t.showPopover=="function"?(t.setAttribute("popover","manual"),t.style.cssText="position:fixed;inset:0 auto auto 0;margin:0;padding:0;border:0;background:transparent;width:0;height:0;overflow:visible;pointer-events:none",t.showPopover()):(t.removeAttribute("popover"),t.style.cssText="display:contents"),a?.focus({preventScroll:!0})},[t,e]),t}var Dv=({mode:e="open",delegatesFocus:t,slotAssignment:n,host:l="div",children:o,className:a,...i})=>{let r=(0,Pi.useRef)(null),[s,d]=(0,Pi.useState)(null);return(0,Pi.useLayoutEffect)(()=>{let _=r.current;if(!_||_.shadowRoot)return;let m=_.attachShadow({mode:e,delegatesFocus:t,slotAssignment:n});d(m)},[]),(0,f5.jsx)(l,{ref:r,...i,...l.includes("-")?{class:a}:{className:a},children:s&&(0,_5.createPortal)(o,s)})};function Oh(e,t,n){let l=(0,Ms.useRef)(n);(0,Ms.useLayoutEffect)(()=>{l.current=n},[n]),(0,Ms.useLayoutEffect)(()=>{let o=e.current;if(!t||!o)return;let a=!1,i=o.getAnimations?.()??[];return Promise.allSettled(i.map(r=>r.finished)).then(()=>{a||l.current()}),()=>{a=!0}},[e,t])}var h5=`@charset "UTF-8";
.styles-module__popup___IhzrD svg[fill=none] {
  fill: none !important;
}
.styles-module__popup___IhzrD svg[fill=none] :not([fill]) {
  fill: none !important;
}

@keyframes styles-module__popupEnter___AuQDN {
  from {
    opacity: 0;
    transform: translateX(-50%) scale(0.95) translateY(4px);
  }
  to {
    opacity: 1;
    transform: translateX(-50%) scale(1) translateY(0);
  }
}
@keyframes styles-module__popupExit___JJKQX {
  from {
    opacity: 1;
    transform: translateX(-50%) scale(1) translateY(0);
  }
  to {
    opacity: 0;
    transform: translateX(-50%) scale(0.95) translateY(4px);
  }
}
@keyframes styles-module__shake___jdbWe {
  0%, 100% {
    transform: translateX(-50%) scale(1) translateY(0) translateX(0);
  }
  20% {
    transform: translateX(-50%) scale(1) translateY(0) translateX(-3px);
  }
  40% {
    transform: translateX(-50%) scale(1) translateY(0) translateX(3px);
  }
  60% {
    transform: translateX(-50%) scale(1) translateY(0) translateX(-2px);
  }
  80% {
    transform: translateX(-50%) scale(1) translateY(0) translateX(2px);
  }
}
.styles-module__popup___IhzrD {
  position: fixed;
  transform: translateX(-50%);
  width: 280px;
  padding: 0.75rem 1rem;
  background: #1a1a1a;
  border-radius: 16px;
  box-shadow: 0 4px 24px rgba(0, 0, 0, 0.3), 0 0 0 1px rgba(255, 255, 255, 0.08);
  z-index: 100001;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  will-change: transform, opacity;
  opacity: 0;
}
.styles-module__popup___IhzrD.styles-module__enter___L7U7N {
  animation: styles-module__popupEnter___AuQDN 0.2s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}
.styles-module__popup___IhzrD.styles-module__entered___COX-w {
  opacity: 1;
  transform: translateX(-50%) scale(1) translateY(0);
}
.styles-module__popup___IhzrD.styles-module__exit___5eGjE {
  pointer-events: none;
  animation: styles-module__popupExit___JJKQX 0.15s ease-in forwards;
}
.styles-module__popup___IhzrD.styles-module__entered___COX-w.styles-module__shake___jdbWe {
  animation: styles-module__shake___jdbWe 0.25s ease-out;
}

.styles-module__header___wWsSi {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 0.5625rem;
}

.styles-module__element___fTV2z {
  font-size: 0.75rem;
  font-weight: 400;
  color: rgba(255, 255, 255, 0.5);
  max-width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  flex: 1;
}

.styles-module__headerToggle___WpW0b {
  display: flex;
  align-items: center;
  gap: 0.25rem;
  background: none;
  border: none;
  padding: 0;
  cursor: pointer;
  flex: 1;
  min-width: 0;
  text-align: left;
}
.styles-module__headerToggle___WpW0b .styles-module__element___fTV2z {
  flex: 1;
}

.styles-module__chevron___ZZJlR {
  color: rgba(255, 255, 255, 0.5);
  transition: transform 0.25s cubic-bezier(0.16, 1, 0.3, 1);
  flex-shrink: 0;
}
.styles-module__chevron___ZZJlR.styles-module__expanded___2Hxgv {
  transform: rotate(90deg);
}

.styles-module__stylesWrapper___pnHgy {
  display: grid;
  grid-template-rows: 0fr;
  transition: grid-template-rows 0.3s cubic-bezier(0.16, 1, 0.3, 1);
}
.styles-module__stylesWrapper___pnHgy.styles-module__expanded___2Hxgv {
  grid-template-rows: 1fr;
}

.styles-module__stylesInner___YYZe2 {
  overflow: hidden;
}

.styles-module__stylesBlock___VfQKn {
  background: rgba(255, 255, 255, 0.05);
  border-radius: 0.375rem;
  padding: 0.5rem 0.625rem;
  margin-bottom: 0.5rem;
  font-family: ui-monospace, SFMono-Regular, "SF Mono", Menlo, Consolas, monospace;
  font-size: 0.6875rem;
  line-height: 1.5;
}

.styles-module__styleLine___1YQiD {
  color: rgba(255, 255, 255, 0.85);
  word-break: break-word;
}

.styles-module__styleProperty___84L1i {
  color: #c792ea;
}

.styles-module__styleValue___q51-h {
  color: rgba(255, 255, 255, 0.85);
}

.styles-module__timestamp___Dtpsv {
  font-size: 0.625rem;
  font-weight: 500;
  color: rgba(255, 255, 255, 0.35);
  font-variant-numeric: tabular-nums;
  margin-left: 0.5rem;
  flex-shrink: 0;
}

.styles-module__quote___mcMmQ {
  font-size: 12px;
  font-style: italic;
  color: rgba(255, 255, 255, 0.6);
  margin-bottom: 0.5rem;
  padding: 0.4rem 0.5rem;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 0.25rem;
  line-height: 1.45;
}

.styles-module__textarea___jrSae {
  box-sizing: border-box;
  width: 100%;
  padding: 0.5rem 0.625rem;
  font-size: 0.8125rem;
  font-family: inherit;
  background: rgba(255, 255, 255, 0.05);
  color: #fff;
  border: 1px solid rgba(255, 255, 255, 0.15);
  border-radius: 8px;
  resize: none;
  outline: none;
  transition: border-color 0.15s ease;
}
.styles-module__textarea___jrSae:focus {
  border-color: var(--agentation-color-blue);
}
.styles-module__textarea___jrSae.styles-module__green___99l3h:focus {
  border-color: var(--agentation-color-green);
}
.styles-module__textarea___jrSae::placeholder {
  color: rgba(255, 255, 255, 0.35);
}
.styles-module__textarea___jrSae::-webkit-scrollbar {
  width: 6px;
}
.styles-module__textarea___jrSae::-webkit-scrollbar-track {
  background: transparent;
}
.styles-module__textarea___jrSae::-webkit-scrollbar-thumb {
  background: rgba(255, 255, 255, 0.2);
  border-radius: 3px;
}

.styles-module__actions___D6x3f {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 0.375rem;
  margin-top: 0.75rem;
}

.styles-module__sourceAction___EabJb {
  display: block;
  max-width: 100%;
  margin: -2px 0 8px;
  padding: 2px 0;
  background: transparent;
  color: #fff;
  font: inherit;
  font-size: 11px;
  border: 0;
  cursor: pointer;
  opacity: 0.6;
  transition: opacity 0.15s ease;
}
.styles-module__sourceAction___EabJb:hover, .styles-module__sourceAction___EabJb:focus-visible {
  opacity: 1;
}
.styles-module__sourceAction___EabJb:focus-visible {
  outline: 2px solid currentColor;
  outline-offset: 3px;
}

.styles-module__light___6AaSQ .styles-module__sourceAction___EabJb {
  color: #111;
}

.styles-module__cancel___hRjnL,
.styles-module__submit___K-mIR,
.styles-module__deleteButton___4VuAE {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 1.875rem;
  padding: 0.375rem 0.875rem;
  font-size: 0.75rem;
  font-weight: 500;
  border-radius: 1rem;
  border: none;
  cursor: pointer;
  transition: background-color 0.15s ease, color 0.15s ease, opacity 0.15s ease;
}

.styles-module__cancel___hRjnL {
  background: transparent;
  color: rgba(255, 255, 255, 0.5);
}
.styles-module__cancel___hRjnL:hover {
  background: rgba(255, 255, 255, 0.1);
  color: rgba(255, 255, 255, 0.8);
}

.styles-module__submit___K-mIR {
  color: white;
}
.styles-module__submit___K-mIR:hover:not(:disabled) {
  filter: brightness(0.9);
}
.styles-module__submit___K-mIR:disabled {
  cursor: not-allowed;
}

.styles-module__deleteWrapper___oSjdo {
  display: flex;
  margin-right: auto;
}

.styles-module__deleteButton___4VuAE {
  background: transparent;
  color: rgba(255, 255, 255, 0.4);
  transition: background-color 0.15s ease, color 0.15s ease, transform 0.1s ease;
}
.styles-module__deleteButton___4VuAE:hover {
  background-color: color-mix(in srgb, var(--agentation-color-red) 25%, transparent);
  color: var(--agentation-color-red);
}
.styles-module__deleteButton___4VuAE:active {
  transform: scale(0.92);
}

.styles-module__light___6AaSQ.styles-module__popup___IhzrD {
  background: #fff;
  box-shadow: 0 4px 24px rgba(0, 0, 0, 0.12), 0 0 0 1px rgba(0, 0, 0, 0.06);
}
.styles-module__light___6AaSQ .styles-module__element___fTV2z {
  color: rgba(0, 0, 0, 0.6);
}
.styles-module__light___6AaSQ .styles-module__timestamp___Dtpsv {
  color: rgba(0, 0, 0, 0.4);
}
.styles-module__light___6AaSQ .styles-module__chevron___ZZJlR {
  color: rgba(0, 0, 0, 0.4);
}
.styles-module__light___6AaSQ .styles-module__stylesBlock___VfQKn {
  background: rgba(0, 0, 0, 0.03);
}
.styles-module__light___6AaSQ .styles-module__styleLine___1YQiD {
  color: rgba(0, 0, 0, 0.75);
}
.styles-module__light___6AaSQ .styles-module__styleProperty___84L1i {
  color: #7c3aed;
}
.styles-module__light___6AaSQ .styles-module__styleValue___q51-h {
  color: rgba(0, 0, 0, 0.75);
}
.styles-module__light___6AaSQ .styles-module__quote___mcMmQ {
  color: rgba(0, 0, 0, 0.55);
  background: rgba(0, 0, 0, 0.04);
}
.styles-module__light___6AaSQ .styles-module__textarea___jrSae {
  background: rgba(0, 0, 0, 0.03);
  color: #1a1a1a;
  border-color: rgba(0, 0, 0, 0.12);
}
.styles-module__light___6AaSQ .styles-module__textarea___jrSae::placeholder {
  color: rgba(0, 0, 0, 0.4);
}
.styles-module__light___6AaSQ .styles-module__textarea___jrSae::-webkit-scrollbar-thumb {
  background: rgba(0, 0, 0, 0.15);
}
.styles-module__light___6AaSQ .styles-module__cancel___hRjnL {
  color: rgba(0, 0, 0, 0.5);
}
.styles-module__light___6AaSQ .styles-module__cancel___hRjnL:hover {
  background: rgba(0, 0, 0, 0.06);
  color: rgba(0, 0, 0, 0.75);
}
.styles-module__light___6AaSQ .styles-module__deleteButton___4VuAE {
  color: rgba(0, 0, 0, 0.4);
}
.styles-module__light___6AaSQ .styles-module__deleteButton___4VuAE:hover {
  background-color: color-mix(in srgb, var(--agentation-color-red) 25%, transparent);
  color: var(--agentation-color-red);
}

@media (prefers-reduced-motion: reduce) {
  .styles-module__popup___IhzrD.styles-module__enter___L7U7N, .styles-module__popup___IhzrD.styles-module__exit___5eGjE {
    animation-duration: 1ms;
    animation-delay: 0ms !important;
  }
}
.styles-module__sharedForm___8GvQl {
  --card-motion: 200ms cubic-bezier(0.2, 0.8, 0.2, 1);
  padding: 0.75rem 1rem;
  transition: padding var(--card-motion);
}
.styles-module__sharedForm___8GvQl .styles-module__header___wWsSi {
  transition: margin-bottom var(--card-motion);
}
.styles-module__sharedForm___8GvQl .styles-module__element___fTV2z {
  font-style: italic;
  color: rgba(255, 255, 255, 0.6);
}
.styles-module__sharedForm___8GvQl .styles-module__previewExcerpt___DCOIL {
  display: none;
}
.styles-module__sharedForm___8GvQl .styles-module__headerToggle___WpW0b .styles-module__chevron___ZZJlR {
  opacity: 1;
  margin-left: 0;
  transition: margin-left var(--card-motion), opacity 100ms ease-out, transform var(--card-motion);
}
.styles-module__sharedForm___8GvQl .styles-module__sharedNote___OYVi5 {
  position: relative;
  height: var(--editor-field-height, 57px);
  border-radius: 8px;
  overflow: clip;
  transition: height var(--card-motion);
}
.styles-module__sharedForm___8GvQl .styles-module__sharedNote___OYVi5::before {
  content: "";
  position: absolute;
  inset: 0;
  border: 1px solid var(--field-border, rgba(255, 255, 255, 0.15));
  border-radius: inherit;
  background: rgba(255, 255, 255, 0.05);
  pointer-events: none;
  transition: opacity var(--card-motion), border-color var(--card-motion);
}
.styles-module__sharedForm___8GvQl .styles-module__sharedNoteContent___6q3KD {
  position: relative;
  width: 100%;
  height: 100%;
  overflow: clip;
  transition: width var(--card-motion);
}
.styles-module__sharedForm___8GvQl .styles-module__sharedNote___OYVi5[data-truncated]::after {
  content: "\u2026";
  position: absolute;
  right: 0;
  top: 0;
  color: #fff;
  font-size: 13px;
  line-height: 1.4;
  opacity: 0;
  pointer-events: none;
  transition: opacity 80ms ease-out;
}
.styles-module__sharedForm___8GvQl .styles-module__textarea___jrSae {
  display: block;
  width: calc(280px - 2rem);
  max-width: calc(100vw - 24px - 2rem);
  margin: 0;
  background: transparent !important;
  border-color: transparent !important;
  transform: translate(0, 0);
  transition: transform var(--card-motion), color var(--card-motion);
}
.styles-module__sharedForm___8GvQl .styles-module__sharedExtra___RUBKC, .styles-module__sharedForm___8GvQl .styles-module__sharedActions___6Glpl {
  display: grid;
  grid-template-rows: 1fr;
  opacity: 1;
  transition: grid-template-rows var(--card-motion), opacity 80ms ease-out;
}
.styles-module__sharedForm___8GvQl .styles-module__sharedActions___6Glpl {
  transition-delay: 0ms, 120ms;
}
.styles-module__sharedForm___8GvQl .styles-module__sharedExtraInner___EuUh4 {
  min-height: 0;
  overflow: hidden;
}
.styles-module__sharedForm___8GvQl .styles-module__actions___D6x3f {
  min-height: 0;
  overflow: hidden;
  transition: margin-top var(--card-motion);
}
.styles-module__sharedForm___8GvQl[data-preview] {
  padding: 8px 12px;
}
.styles-module__sharedForm___8GvQl[data-preview] .styles-module__header___wWsSi {
  margin-bottom: 5px;
}
.styles-module__sharedForm___8GvQl[data-preview] .styles-module__previewExcerpt___DCOIL {
  display: inline;
}
.styles-module__sharedForm___8GvQl[data-preview] .styles-module__element___fTV2z {
  line-height: 1.4;
}
.styles-module__sharedForm___8GvQl[data-preview] .styles-module__chevron___ZZJlR {
  opacity: 0;
  margin-left: -18px;
}
.styles-module__sharedForm___8GvQl[data-preview] .styles-module__sharedNote___OYVi5 {
  height: 20.2px;
  border-radius: 0;
}
.styles-module__sharedForm___8GvQl[data-preview] .styles-module__sharedNote___OYVi5::before {
  opacity: 0;
}
.styles-module__sharedForm___8GvQl[data-preview] .styles-module__textarea___jrSae {
  transform: translate(-11px, calc(-9px + (1.4em - 1lh) / 2));
  color: #fff;
  overflow: hidden;
  cursor: default;
}
.styles-module__sharedForm___8GvQl[data-preview] .styles-module__sharedExtra___RUBKC, .styles-module__sharedForm___8GvQl[data-preview] .styles-module__sharedActions___6Glpl {
  grid-template-rows: 0fr;
  opacity: 0;
  transition-delay: 0ms;
}
.styles-module__sharedForm___8GvQl[data-preview] .styles-module__actions___D6x3f {
  margin-top: 0;
}
.styles-module__sharedForm___8GvQl[data-preview] .styles-module__stylesWrapper___pnHgy {
  grid-template-rows: 0fr;
}
.styles-module__sharedForm___8GvQl[data-preview] .styles-module__sharedNote___OYVi5[data-truncated] .styles-module__sharedNoteContent___6q3KD {
  width: calc(100% - 12px);
}
.styles-module__sharedForm___8GvQl[data-preview] .styles-module__sharedNote___OYVi5[data-truncated]::after {
  opacity: 1;
}

.styles-module__light___6AaSQ .styles-module__sharedForm___8GvQl .styles-module__sharedNote___OYVi5::before {
  border-color: var(--field-border, rgba(0, 0, 0, 0.12));
  background: rgba(0, 0, 0, 0.03);
}

.styles-module__light___6AaSQ .styles-module__sharedForm___8GvQl .styles-module__element___fTV2z {
  color: rgba(0, 0, 0, 0.5);
}

.styles-module__light___6AaSQ .styles-module__sharedForm___8GvQl[data-preview] .styles-module__textarea___jrSae, .styles-module__light___6AaSQ .styles-module__sharedForm___8GvQl[data-preview] .styles-module__sharedNote___OYVi5::after {
  color: rgba(0, 0, 0, 0.85);
}

@media (prefers-reduced-motion: reduce) {
  .styles-module__sharedForm___8GvQl {
    --card-motion: 1ms linear;
  }
  .styles-module__sharedForm___8GvQl .styles-module__sharedActions___6Glpl, .styles-module__sharedForm___8GvQl .styles-module__headerToggle___WpW0b .styles-module__chevron___ZZJlR {
    transition: opacity 100ms ease-out;
    transition-delay: 0ms;
  }
}`,$e={popup:"styles-module__popup___IhzrD",enter:"styles-module__enter___L7U7N",popupEnter:"styles-module__popupEnter___AuQDN",entered:"styles-module__entered___COX-w",exit:"styles-module__exit___5eGjE",popupExit:"styles-module__popupExit___JJKQX",shake:"styles-module__shake___jdbWe",header:"styles-module__header___wWsSi",element:"styles-module__element___fTV2z",headerToggle:"styles-module__headerToggle___WpW0b",chevron:"styles-module__chevron___ZZJlR",expanded:"styles-module__expanded___2Hxgv",stylesWrapper:"styles-module__stylesWrapper___pnHgy",stylesInner:"styles-module__stylesInner___YYZe2",stylesBlock:"styles-module__stylesBlock___VfQKn",styleLine:"styles-module__styleLine___1YQiD",styleProperty:"styles-module__styleProperty___84L1i",styleValue:"styles-module__styleValue___q51-h",timestamp:"styles-module__timestamp___Dtpsv",quote:"styles-module__quote___mcMmQ",textarea:"styles-module__textarea___jrSae",green:"styles-module__green___99l3h",actions:"styles-module__actions___D6x3f",sourceAction:"styles-module__sourceAction___EabJb",light:"styles-module__light___6AaSQ",cancel:"styles-module__cancel___hRjnL",submit:"styles-module__submit___K-mIR",deleteButton:"styles-module__deleteButton___4VuAE",deleteWrapper:"styles-module__deleteWrapper___oSjdo",sharedForm:"styles-module__sharedForm___8GvQl",previewExcerpt:"styles-module__previewExcerpt___DCOIL",sharedNote:"styles-module__sharedNote___OYVi5",sharedNoteContent:"styles-module__sharedNoteContent___6q3KD",sharedExtra:"styles-module__sharedExtra___RUBKC",sharedActions:"styles-module__sharedActions___6Glpl",sharedExtraInner:"styles-module__sharedExtraInner___EuUh4"},_h="data-agentation-styles";function g5(e,t,n){if(!n||!e)return;let l=e.nodeType===9?e.head:e.nodeType===11?e:null;if(!l||typeof l.querySelector!="function"||l.querySelector(`style[${_h}~="toolbar"], style[${_h}~="${t}"]`))return;let a=(e.nodeType===9?e:e.ownerDocument).createElement("style");a.setAttribute(_h,t),a.textContent=n,l.appendChild(a)}function Bh(e,t){return(0,m5.useCallback)(n=>{n&&g5(n.getRootNode(),e,t)},[e,t])}function Ay(e){if(!e)return;let t=n=>n.stopImmediatePropagation();document.addEventListener("focusin",t,!0),document.addEventListener("focusout",t,!0);try{e.focus({preventScroll:!0})}finally{document.removeEventListener("focusin",t,!0),document.removeEventListener("focusout",t,!0)}}var p5=(0,kn.forwardRef)(function({element:t,timestamp:n,selectedText:l,placeholder:o="What should change?",initialValue:a="",submitLabel:i="Add",onSubmit:r,onCancel:s,onDelete:d,onOpenSource:h,allowEmpty:_=!1,accentColor:m="#3c82f7",computedStyles:v,disabled:k=!1,preview:A=!1,resetOnPreview:M=!0,variant:p="popup"},x){let g=p==="card",[S,W]=(0,kn.useState)(a),[J,z]=(0,kn.useState)(!1),[K,O]=(0,kn.useState)(!1),F=(0,kn.useRef)(null),re=(0,kn.useRef)(null),Z=l?` "${l.slice(0,30)}${l.length>30?"...":""}"`:"";(0,kn.useLayoutEffect)(()=>{let se=re.current,he=F.current;if(!g||!se||!he)return;let Dt=()=>{se.style.setProperty("--editor-field-height",`${he.offsetHeight}px`)};if(Dt(),"CanvasRenderingContext2D"in window){let tt=document.createElement("canvas").getContext("2d");if(tt){let Ye=getComputedStyle(he).fontFamily;tt.font=`13px ${Ye}`;let xt=tt.measureText(a.replace(/\s+/g," ")).width;tt.font=`italic 12px ${Ye}`;let cn=tt.measureText(t+Z).width,An=Math.min(200,Math.max(120,Math.ceil(Math.max(xt,cn))+24));se.closest("[data-annotation-card]")?.style.setProperty("--preview-width",`${An}px`);let De=se.querySelector("[data-shared-note]");De&&De.toggleAttribute("data-truncated",xt>An-24)}}let Ue=typeof ResizeObserver<"u"?new ResizeObserver(Dt):null;return Ue?.observe(he),()=>Ue?.disconnect()},[g,t,a,Z]),(0,kn.useLayoutEffect)(()=>{A&&M&&(W(a),O(!1),F.current&&(F.current.scrollTop=0,F.current.scrollLeft=0))},[A,M,a]),(0,kn.useImperativeHandle)(x,()=>({focus(){let se=F.current;Ay(se),se&&(se.selectionStart=se.selectionEnd=se.value.length,se.scrollTop=g?0:se.scrollHeight)}}),[g]);let _e=(0,kn.useCallback)(()=>{k||!S.trim()&&!_||r(S.trim())},[k,S,_,r]),oe=se=>{se.stopPropagation(),!se.nativeEvent.isComposing&&(se.key==="Enter"&&!se.shiftKey&&(se.preventDefault(),_e()),se.key==="Escape"&&s())};return(0,et.jsxs)("div",{ref:re,className:g?$e.sharedForm:void 0,style:g?void 0:{display:"contents"},"data-annotation-editor":!0,"data-preview":A||void 0,children:[(0,et.jsxs)("div",{className:$e.header,"data-editor-heading":!0,children:[v&&Object.keys(v).length>0?(0,et.jsxs)("button",{className:$e.headerToggle,onClick:()=>{let se=K;O(!K),se&&rt(()=>Ay(F.current),0)},type:"button",children:[(0,et.jsx)("svg",{className:`${$e.chevron} ${K?$e.expanded:""}`,width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,et.jsx)("path",{d:"M5.5 10.25L9 7.25L5.75 4",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})}),(0,et.jsxs)("span",{className:$e.element,children:[t,g&&Z&&(0,et.jsx)("span",{className:$e.previewExcerpt,children:Z})]})]}):(0,et.jsxs)("span",{className:$e.element,children:[t,g&&Z&&(0,et.jsx)("span",{className:$e.previewExcerpt,children:Z})]}),n&&(0,et.jsx)("span",{className:$e.timestamp,children:n})]}),h&&(0,et.jsx)("div",{className:g?$e.sharedExtra:void 0,style:g?void 0:{display:"contents"},children:(0,et.jsx)("div",{className:g?$e.sharedExtraInner:void 0,style:g?void 0:{display:"contents"},children:(0,et.jsx)("button",{type:"button",className:$e.sourceAction,onClick:h,children:"Open in editor"})})}),v&&Object.keys(v).length>0&&(0,et.jsx)("div",{className:`${$e.stylesWrapper} ${K?$e.expanded:""}`,children:(0,et.jsx)("div",{className:$e.stylesInner,children:(0,et.jsx)("div",{className:$e.stylesBlock,children:Object.entries(v).map(([se,he])=>(0,et.jsxs)("div",{className:$e.styleLine,children:[(0,et.jsx)("span",{className:$e.styleProperty,children:se.replace(/([A-Z])/g,"-$1").toLowerCase()}),": ",(0,et.jsx)("span",{className:$e.styleValue,children:he}),";"]},se))})})}),l&&(0,et.jsx)("div",{className:g?$e.sharedExtra:void 0,style:g?void 0:{display:"contents"},children:(0,et.jsx)("div",{className:g?$e.sharedExtraInner:void 0,style:g?void 0:{display:"contents"},children:(0,et.jsxs)("div",{className:$e.quote,children:["\u201C",l.slice(0,80),l.length>80?"...":"","\u201D"]})})}),(0,et.jsx)("div",{"data-shared-note":!0,className:g?$e.sharedNote:void 0,style:g?{"--field-border":J?m:void 0}:{display:"contents"},children:(0,et.jsx)("div",{className:g?$e.sharedNoteContent:void 0,style:g?void 0:{display:"contents"},children:(0,et.jsx)("textarea",{ref:F,className:$e.textarea,readOnly:A,"aria-hidden":A,style:g?void 0:{borderColor:J?m:void 0},placeholder:o,value:A?S.replace(/\s+/g," "):S,onChange:se=>W(se.target.value),onFocus:()=>z(!0),onBlur:()=>z(!1),rows:2,onKeyDown:oe})})}),(0,et.jsx)("div",{"data-editor-actions":!0,className:g?$e.sharedActions:void 0,style:g?void 0:{display:"contents"},children:(0,et.jsxs)("div",{className:$e.actions,children:[d&&(0,et.jsx)("div",{className:$e.deleteWrapper,children:(0,et.jsx)("button",{className:$e.deleteButton,onClick:d,type:"button","aria-label":"Delete annotation",children:"Delete"})}),(0,et.jsx)("button",{className:$e.cancel,onClick:s,children:"Cancel"}),(0,et.jsx)("button",{className:$e.submit,style:{backgroundColor:m,opacity:S.trim()||_?1:.4},onClick:_e,disabled:k||!S.trim()&&!_,children:i})]})})]})}),$h=(0,rn.forwardRef)(function({element:t,timestamp:n,selectedText:l,placeholder:o="What should change?",initialValue:a="",submitLabel:i="Add",onSubmit:r,onCancel:s,onDelete:d,onOpenSource:h,allowEmpty:_=!1,style:m,accentColor:v="#3c82f7",isExiting:k=!1,onExitComplete:A,lightMode:M=!1,computedStyles:p},x){let[g,S]=(0,rn.useState)(!1),[W,J]=(0,rn.useState)("initial"),z=(0,rn.useRef)(null),K=(0,rn.useRef)(null);(0,rn.useEffect)(()=>{g5(K.current?.getRootNode(),"annotation-popup",h5)},[]);let O=(0,rn.useRef)(null);(0,rn.useEffect)(()=>{let oe=rt(()=>{J(se=>se==="initial"?"enter":se)},0);return()=>{clearTimeout(oe),O.current&&clearTimeout(O.current)}},[]),(0,rn.useEffect)(()=>{if(k)return;let oe=rt(()=>z.current?.focus(),50);return()=>clearTimeout(oe)},[k]);let F=(0,rn.useCallback)(()=>{O.current&&clearTimeout(O.current),S(!0),O.current=rt(()=>{S(!1),z.current?.focus()},250)},[]);(0,rn.useImperativeHandle)(x,()=>({shake:F}),[F]);let re=(0,rn.useCallback)(()=>{if(A){s();return}J("exit")},[s,A]),Z=k?"exit":W;Oh(K,Z==="exit",()=>{k?A?.():s()});let _e=[$e.popup,M?$e.light:"",Z==="enter"?$e.enter:"",Z==="entered"?$e.entered:"",Z==="exit"?$e.exit:"",g&&Z!=="exit"?$e.shake:""].filter(Boolean).join(" ");return(0,Sh.jsx)("div",{ref:K,className:_e,"data-annotation-popup":!0,style:m,onAnimationEnd:oe=>{oe.target===oe.currentTarget&&oe.animationName.includes("popupEnter")&&!k&&J("entered")},onKeyDownCapture:oe=>{oe.key!=="Escape"||oe.nativeEvent.isComposing||(oe.preventDefault(),oe.stopPropagation(),re())},onClick:oe=>oe.stopPropagation(),children:(0,Sh.jsx)(p5,{ref:z,element:t,timestamp:n,selectedText:l,placeholder:o,initialValue:a,submitLabel:i,onSubmit:r,onCancel:re,onDelete:d,onOpenSource:h,allowEmpty:_,accentColor:v,computedStyles:p,disabled:Z==="exit"})})}),Fu=`.icon-transitions-module__iconState___uqK9J {
  transition: opacity 0.2s ease, transform 0.2s ease;
  transform-origin: center;
}

.icon-transitions-module__iconStateFast___HxlMm {
  transition: opacity 0.15s ease, transform 0.15s ease;
  transform-origin: center;
}

.icon-transitions-module__iconFade___nPwXg {
  transition: opacity 0.2s ease;
}

.icon-transitions-module__iconFadeFast___Ofb2t {
  transition: opacity 0.15s ease;
}

.icon-transitions-module__visible___PlHsU {
  opacity: 1 !important;
}

.icon-transitions-module__visibleScaled___8Qog- {
  opacity: 1 !important;
  transform: scale(1);
}

.icon-transitions-module__hidden___ETykt {
  opacity: 0 !important;
}

.icon-transitions-module__hiddenScaled___JXn-m {
  opacity: 0 !important;
  transform: scale(0.8);
}

.icon-transitions-module__sending___uaLN- {
  opacity: 0.5 !important;
  transform: scale(0.8);
}`,St={iconState:"icon-transitions-module__iconState___uqK9J",iconStateFast:"icon-transitions-module__iconStateFast___HxlMm",iconFade:"icon-transitions-module__iconFade___nPwXg",iconFadeFast:"icon-transitions-module__iconFadeFast___Ofb2t",visible:"icon-transitions-module__visible___PlHsU",visibleScaled:"icon-transitions-module__visibleScaled___8Qog-",hidden:"icon-transitions-module__hidden___ETykt",hiddenScaled:"icon-transitions-module__hiddenScaled___JXn-m",sending:"icon-transitions-module__sending___uaLN-"};var Rv=({size:e=16})=>(0,te.jsx)("svg",{width:e,height:e,viewBox:"0 0 16 16",fill:"none",children:(0,te.jsx)("path",{d:"M8 3v10M3 8h10",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"})});var Lv=({size:e=20,...t})=>(0,te.jsxs)("svg",{width:e,height:e,viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",...t,children:[(0,te.jsx)("circle",{cx:"10",cy:"10",r:"5.375",stroke:"currentColor",strokeWidth:"1.25"}),(0,te.jsx)("path",{d:"M8.5 8.5C8.73 7.85 9.31 7.49 10 7.5C10.86 7.51 11.5 8.13 11.5 9C11.5 10.08 10 10.5 10 10.5V10.75",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"}),(0,te.jsx)("circle",{cx:"10",cy:"12.625",r:"0.625",fill:"currentColor"})]});var zv=({size:e=24,copied:t=!1,tint:n})=>(0,te.jsxs)("svg",{ref:Bh("icon-transitions",Fu),width:e,height:e,viewBox:"0 0 24 24",fill:"none",style:n?{color:n,transition:"color 0.3s ease"}:void 0,children:[(0,te.jsxs)("g",{className:`${St.iconState} ${t?St.hiddenScaled:St.visibleScaled}`,children:[(0,te.jsx)("path",{d:"M4.75 11.25C4.75 10.4216 5.42157 9.75 6.25 9.75H12.75C13.5784 9.75 14.25 10.4216 14.25 11.25V17.75C14.25 18.5784 13.5784 19.25 12.75 19.25H6.25C5.42157 19.25 4.75 18.5784 4.75 17.75V11.25Z",stroke:"currentColor",strokeWidth:"1.5"}),(0,te.jsx)("path",{d:"M17.25 14.25H17.75C18.5784 14.25 19.25 13.5784 19.25 12.75V6.25C19.25 5.42157 18.5784 4.75 17.75 4.75H11.25C10.4216 4.75 9.75 5.42157 9.75 6.25V6.75",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"})]}),(0,te.jsxs)("g",{className:`${St.iconState} ${t?St.visibleScaled:St.hiddenScaled}`,children:[(0,te.jsx)("path",{d:"M12 20C7.58172 20 4 16.4182 4 12C4 7.58172 7.58172 4 12 4C16.4182 4 20 7.58172 20 12C20 16.4182 16.4182 20 12 20Z",stroke:"var(--agentation-color-green)",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),(0,te.jsx)("path",{d:"M15 10L11 14.25L9.25 12.25",stroke:"var(--agentation-color-green)",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})]})]}),Ov=({size:e=24,state:t="idle"})=>{let n=t==="idle",l=t==="sent",o=t==="failed",a=t==="sending";return(0,te.jsxs)("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",children:[(0,te.jsx)("g",{className:`${St.iconStateFast} ${n?St.visibleScaled:a?St.sending:St.hiddenScaled}`,children:(0,te.jsx)("path",{d:"M9.875 14.125L12.3506 19.6951C12.7184 20.5227 13.9091 20.4741 14.2083 19.6193L18.8139 6.46032C19.0907 5.6695 18.3305 4.90933 17.5397 5.18611L4.38072 9.79174C3.52589 10.0909 3.47731 11.2816 4.30494 11.6494L9.875 14.125ZM9.875 14.125L13.375 10.625",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})}),(0,te.jsxs)("g",{className:`${St.iconStateFast} ${l?St.visibleScaled:St.hiddenScaled}`,children:[(0,te.jsx)("path",{d:"M12 20C7.58172 20 4 16.4182 4 12C4 7.58172 7.58172 4 12 4C16.4182 4 20 7.58172 20 12C20 16.4182 16.4182 20 12 20Z",stroke:"var(--agentation-color-green)",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),(0,te.jsx)("path",{d:"M15 10L11 14.25L9.25 12.25",stroke:"var(--agentation-color-green)",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})]}),(0,te.jsxs)("g",{className:`${St.iconStateFast} ${o?St.visibleScaled:St.hiddenScaled}`,children:[(0,te.jsx)("path",{d:"M12 20C7.58172 20 4 16.4182 4 12C4 7.58172 7.58172 4 12 4C16.4182 4 20 7.58172 20 12C20 16.4182 16.4182 20 12 20Z",stroke:"var(--agentation-color-red)",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),(0,te.jsx)("path",{d:"M12 8V12",stroke:"var(--agentation-color-red)",strokeWidth:"1.5",strokeLinecap:"round"}),(0,te.jsx)("circle",{cx:"12",cy:"15",r:"0.5",fill:"var(--agentation-color-red)",stroke:"var(--agentation-color-red)",strokeWidth:"1"})]})]})};var Bv=({size:e=24,isOpen:t=!0})=>(0,te.jsxs)("svg",{ref:Bh("icon-transitions",Fu),width:e,height:e,viewBox:"0 0 24 24",fill:"none",children:[(0,te.jsxs)("g",{className:`${St.iconFade} ${t?St.visible:St.hidden}`,children:[(0,te.jsx)("path",{d:"M3.91752 12.7539C3.65127 12.2996 3.65037 11.7515 3.9149 11.2962C4.9042 9.59346 7.72688 5.49994 12 5.49994C16.2731 5.49994 19.0958 9.59346 20.0851 11.2962C20.3496 11.7515 20.3487 12.2996 20.0825 12.7539C19.0908 14.4459 16.2694 18.4999 12 18.4999C7.73064 18.4999 4.90918 14.4459 3.91752 12.7539Z",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),(0,te.jsx)("path",{d:"M12 14.8261C13.5608 14.8261 14.8261 13.5608 14.8261 12C14.8261 10.4392 13.5608 9.17392 12 9.17392C10.4392 9.17392 9.17391 10.4392 9.17391 12C9.17391 13.5608 10.4392 14.8261 12 14.8261Z",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})]}),(0,te.jsxs)("g",{className:`${St.iconFade} ${t?St.hidden:St.visible}`,children:[(0,te.jsx)("path",{d:"M18.6025 9.28503C18.9174 8.9701 19.4364 8.99481 19.7015 9.35271C20.1484 9.95606 20.4943 10.507 20.7342 10.9199C21.134 11.6086 21.1329 12.4454 20.7303 13.1328C20.2144 14.013 19.2151 15.5225 17.7723 16.8193C16.3293 18.1162 14.3852 19.2497 12.0008 19.25C11.4192 19.25 10.8638 19.1823 10.3355 19.0613C9.77966 18.934 9.63498 18.2525 10.0382 17.8493C10.2412 17.6463 10.5374 17.573 10.8188 17.6302C11.1993 17.7076 11.5935 17.75 12.0008 17.75C13.8848 17.7497 15.4867 16.8568 16.7693 15.7041C18.0522 14.5511 18.9606 13.1867 19.4363 12.375C19.5656 12.1543 19.5659 11.8943 19.4373 11.6729C19.2235 11.3049 18.921 10.8242 18.5364 10.3003C18.3085 9.98991 18.3302 9.5573 18.6025 9.28503ZM12.0008 4.75C12.5814 4.75006 13.1358 4.81803 13.6632 4.93953C14.2182 5.06741 14.362 5.74812 13.9593 6.15091C13.7558 6.35435 13.4589 6.42748 13.1771 6.36984C12.7983 6.29239 12.4061 6.25006 12.0008 6.25C10.1167 6.25 8.51415 7.15145 7.23028 8.31543C5.94678 9.47919 5.03918 10.8555 4.56426 11.6729C4.43551 11.8945 4.43582 12.1542 4.56524 12.375C4.77587 12.7343 5.07189 13.2012 5.44718 13.7105C5.67623 14.0213 5.65493 14.4552 5.38193 14.7282C5.0671 15.0431 4.54833 15.0189 4.28292 14.6614C3.84652 14.0736 3.50813 13.5369 3.27129 13.1328C2.86831 12.4451 2.86717 11.6088 3.26739 10.9199C3.78185 10.0345 4.77959 8.51239 6.22247 7.2041C7.66547 5.89584 9.61202 4.75 12.0008 4.75Z",fill:"currentColor"}),(0,te.jsx)("path",{d:"M5 19L19 5",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"})]})]}),$v=({size:e=24,isPaused:t=!1})=>(0,te.jsxs)("svg",{ref:Bh("icon-transitions",Fu),width:e,height:e,viewBox:"0 0 24 24",fill:"none",children:[(0,te.jsxs)("g",{className:`${St.iconFadeFast} ${t?St.hidden:St.visible}`,children:[(0,te.jsx)("path",{d:"M8 6L8 18",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"}),(0,te.jsx)("path",{d:"M16 18L16 6",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"})]}),(0,te.jsx)("path",{className:`${St.iconFadeFast} ${t?St.visible:St.hidden}`,d:"M17.75 10.701C18.75 11.2783 18.75 12.7217 17.75 13.299L8.75 18.4952C7.75 19.0725 6.5 18.3509 6.5 17.1962L6.5 6.80384C6.5 5.64914 7.75 4.92746 8.75 5.50481L17.75 10.701Z",stroke:"currentColor",strokeWidth:"1.5"})]});var Hv=({size:e=16})=>(0,te.jsxs)("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",children:[(0,te.jsx)("path",{d:"M10.6504 5.81117C10.9939 4.39628 13.0061 4.39628 13.3496 5.81117C13.5715 6.72517 14.6187 7.15891 15.4219 6.66952C16.6652 5.91193 18.0881 7.33479 17.3305 8.57815C16.8411 9.38134 17.2748 10.4285 18.1888 10.6504C19.6037 10.9939 19.6037 13.0061 18.1888 13.3496C17.2748 13.5715 16.8411 14.6187 17.3305 15.4219C18.0881 16.6652 16.6652 18.0881 15.4219 17.3305C14.6187 16.8411 13.5715 17.2748 13.3496 18.1888C13.0061 19.6037 10.9939 19.6037 10.6504 18.1888C10.4285 17.2748 9.38135 16.8411 8.57815 17.3305C7.33479 18.0881 5.91193 16.6652 6.66952 15.4219C7.15891 14.6187 6.72517 13.5715 5.81117 13.3496C4.39628 13.0061 4.39628 10.9939 5.81117 10.6504C6.72517 10.4285 7.15891 9.38134 6.66952 8.57815C5.91193 7.33479 7.33479 5.91192 8.57815 6.66952C9.38135 7.15891 10.4285 6.72517 10.6504 5.81117Z",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),(0,te.jsx)("circle",{cx:"12",cy:"12",r:"2.5",stroke:"currentColor",strokeWidth:"1.5"})]});var Uv=({size:e=16})=>(0,te.jsx)("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",children:(0,te.jsx)("path",{d:"M13.5 4C14.7426 4 15.75 5.00736 15.75 6.25V7H18.5C18.9142 7 19.25 7.33579 19.25 7.75C19.25 8.16421 18.9142 8.5 18.5 8.5H17.9678L17.6328 16.2217C17.61 16.7475 17.5912 17.1861 17.5469 17.543C17.5015 17.9087 17.4225 18.2506 17.2461 18.5723C16.9747 19.0671 16.5579 19.4671 16.0518 19.7168C15.7227 19.8791 15.3772 19.9422 15.0098 19.9717C14.6514 20.0004 14.2126 20 13.6865 20H10.3135C9.78735 20 9.34856 20.0004 8.99023 19.9717C8.62278 19.9422 8.27729 19.8791 7.94824 19.7168C7.44205 19.4671 7.02532 19.0671 6.75391 18.5723C6.57751 18.2506 6.49853 17.9087 6.45312 17.543C6.40883 17.1861 6.39005 16.7475 6.36719 16.2217L6.03223 8.5H5.5C5.08579 8.5 4.75 8.16421 4.75 7.75C4.75 7.33579 5.08579 7 5.5 7H8.25V6.25C8.25 5.00736 9.25736 4 10.5 4H13.5ZM7.86621 16.1562C7.89013 16.7063 7.90624 17.0751 7.94141 17.3584C7.97545 17.6326 8.02151 17.7644 8.06934 17.8516C8.19271 18.0763 8.38239 18.2577 8.6123 18.3711C8.70153 18.4151 8.83504 18.4545 9.11035 18.4766C9.39482 18.4994 9.76335 18.5 10.3135 18.5H13.6865C14.2367 18.5 14.6052 18.4994 14.8896 18.4766C15.165 18.4545 15.2985 18.4151 15.3877 18.3711C15.6176 18.2577 15.8073 18.0763 15.9307 17.8516C15.9785 17.7644 16.0245 17.6326 16.0586 17.3584C16.0938 17.0751 16.1099 16.7063 16.1338 16.1562L16.4668 8.5H7.5332L7.86621 16.1562ZM9.97656 10.75C10.3906 10.7371 10.7371 11.0626 10.75 11.4766L10.875 15.4766C10.8879 15.8906 10.5624 16.2371 10.1484 16.25C9.73443 16.2629 9.38794 15.9374 9.375 15.5234L9.25 11.5234C9.23706 11.1094 9.56255 10.7629 9.97656 10.75ZM14.0244 10.75C14.4384 10.7635 14.7635 11.1105 14.75 11.5244L14.6201 15.5244C14.6066 15.9384 14.2596 16.2634 13.8457 16.25C13.4317 16.2365 13.1067 15.8896 13.1201 15.4756L13.251 11.4756C13.2645 11.0617 13.6105 10.7366 14.0244 10.75ZM10.5 5.5C10.0858 5.5 9.75 5.83579 9.75 6.25V7H14.25V6.25C14.25 5.83579 13.9142 5.5 13.5 5.5H10.5Z",fill:"currentColor"})});var Yv=({size:e=16})=>(0,te.jsxs)("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",children:[(0,te.jsxs)("g",{clipPath:"url(#clip0_2_53)",children:[(0,te.jsx)("path",{d:"M16.25 16.25L7.75 7.75",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),(0,te.jsx)("path",{d:"M7.75 16.25L16.25 7.75",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})]}),(0,te.jsx)("defs",{children:(0,te.jsx)("clipPath",{id:"clip0_2_53",children:(0,te.jsx)("rect",{width:"24",height:"24",fill:"white"})})})]});var jv=({size:e=16})=>(0,te.jsxs)("svg",{width:e,height:e,viewBox:"0 0 20 20",fill:"none",children:[(0,te.jsx)("path",{d:"M9.99999 12.7082C11.4958 12.7082 12.7083 11.4956 12.7083 9.99984C12.7083 8.50407 11.4958 7.2915 9.99999 7.2915C8.50422 7.2915 7.29166 8.50407 7.29166 9.99984C7.29166 11.4956 8.50422 12.7082 9.99999 12.7082Z",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"}),(0,te.jsx)("path",{d:"M10 3.9585V5.05698",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"}),(0,te.jsx)("path",{d:"M10 14.9429V16.0414",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"}),(0,te.jsx)("path",{d:"M5.7269 5.72656L6.50682 6.50649",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"}),(0,te.jsx)("path",{d:"M13.4932 13.4932L14.2731 14.2731",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"}),(0,te.jsx)("path",{d:"M3.95834 10H5.05683",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"}),(0,te.jsx)("path",{d:"M14.9432 10H16.0417",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"}),(0,te.jsx)("path",{d:"M5.7269 14.2731L6.50682 13.4932",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"}),(0,te.jsx)("path",{d:"M13.4932 6.50649L14.2731 5.72656",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"})]}),Xv=({size:e=16})=>(0,te.jsx)("svg",{width:e,height:e,viewBox:"0 0 20 20",fill:"none",children:(0,te.jsx)("path",{d:"M15.5 10.4955C15.4037 11.5379 15.0124 12.5314 14.3721 13.3596C13.7317 14.1878 12.8688 14.8165 11.8841 15.1722C10.8995 15.5278 9.83397 15.5957 8.81217 15.3679C7.79038 15.1401 6.8546 14.6259 6.11434 13.8857C5.37408 13.1454 4.85995 12.2096 4.63211 11.1878C4.40427 10.166 4.47215 9.10048 4.82781 8.11585C5.18346 7.13123 5.81218 6.26825 6.64039 5.62791C7.4686 4.98756 8.46206 4.59634 9.5045 4.5C8.89418 5.32569 8.60049 6.34302 8.67685 7.36695C8.75321 8.39087 9.19454 9.35339 9.92058 10.0794C10.6466 10.8055 11.6091 11.2468 12.6331 11.3231C13.657 11.3995 14.6743 11.1058 15.5 10.4955Z",stroke:"currentColor",strokeWidth:"1.13793",strokeLinecap:"round",strokeLinejoin:"round"})}),qv=({size:e=16})=>(0,te.jsx)("svg",{width:e,height:e,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,te.jsx)("path",{d:"M11.3799 6.9572L9.05645 4.63375M11.3799 6.9572L6.74949 11.5699C6.61925 11.6996 6.45577 11.791 6.277 11.8339L4.29549 12.3092C3.93194 12.3964 3.60478 12.0683 3.69297 11.705L4.16585 9.75693C4.20893 9.57947 4.29978 9.4172 4.42854 9.28771L9.05645 4.63375M11.3799 6.9572L12.3455 5.98759C12.9839 5.34655 12.9839 4.31002 12.3455 3.66897C11.7033 3.02415 10.6594 3.02415 10.0172 3.66897L9.06126 4.62892L9.05645 4.63375",stroke:"currentColor",strokeWidth:"0.9",strokeLinecap:"round",strokeLinejoin:"round"})});var Iv=({size:e=16})=>(0,te.jsx)("svg",{width:e,height:e,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,te.jsx)("path",{d:"M8.5 3.5L4 8L8.5 12.5",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})});var Qv=({size:e=24})=>(0,te.jsxs)("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",children:[(0,te.jsx)("rect",{x:"3",y:"3",width:"18",height:"18",rx:"2",stroke:"currentColor",strokeWidth:"1.5"}),(0,te.jsx)("line",{x1:"3",y1:"9",x2:"21",y2:"9",stroke:"currentColor",strokeWidth:"1.5"}),(0,te.jsx)("line",{x1:"9",y1:"9",x2:"9",y2:"21",stroke:"currentColor",strokeWidth:"1.5"})]}),Wv=({content:e,children:t,...n})=>{let[l,o]=(0,Il.useState)(!1),[a,i]=(0,Il.useState)(!1),[r,s]=(0,Il.useState)({top:0,right:0}),d=(0,Il.useRef)(null),h=(0,Il.useRef)(null),_=(0,Il.useRef)(null),m=()=>{if(d.current){let A=d.current.getBoundingClientRect();s({top:A.top+A.height/2,right:window.innerWidth-A.left+8})}},v=()=>{i(!0),_.current&&(clearTimeout(_.current),_.current=null),m(),h.current=rt(()=>{o(!0)},500)},k=()=>{h.current&&(clearTimeout(h.current),h.current=null),o(!1),_.current=rt(()=>{i(!1)},150)};return(0,Il.useEffect)(()=>()=>{h.current&&clearTimeout(h.current),_.current&&clearTimeout(_.current)},[]),(0,ja.jsxs)(ja.Fragment,{children:[(0,ja.jsx)("span",{ref:d,onMouseEnter:v,onMouseLeave:k,...n,children:t}),a&&(0,y5.createPortal)((0,ja.jsx)("div",{"data-feedback-toolbar":!0,style:{position:"fixed",top:r.top,right:r.right,transform:"translateY(-50%)",padding:"6px 10px",background:"#383838",color:"rgba(255, 255, 255, 0.7)",fontSize:"11px",fontWeight:400,lineHeight:"14px",borderRadius:"10px",width:"180px",textAlign:"left",zIndex:100020,pointerEvents:"none",boxShadow:"0px 1px 8px rgba(0, 0, 0, 0.28)",opacity:l?1:0,transition:"opacity 0.15s ease"},children:e}),document.body)]})},Gv=`.styles-module__tooltip___mcXL2 {
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: help;
}

.styles-module__tooltipIcon___Nq2nD {
  transform: translateY(0.5px);
  color: #fff;
  opacity: 0.2;
  transition: opacity 0.15s ease;
  will-change: transform;
}
.styles-module__tooltip___mcXL2:hover .styles-module__tooltipIcon___Nq2nD {
  opacity: 0.5;
}
[data-agentation-theme=light] .styles-module__tooltipIcon___Nq2nD {
  color: #000;
}`,Ny={tooltip:"styles-module__tooltip___mcXL2",tooltipIcon:"styles-module__tooltipIcon___Nq2nD"},Ua=({content:e})=>(0,Ch.jsx)(Wv,{className:Ny.tooltip,content:e,children:(0,Ch.jsx)(Lv,{className:Ny.tooltipIcon})}),Vv=`.styles-module__toolbar___wNsdK svg[fill=none],
.styles-module__markersLayer___-25j1 svg[fill=none],
.styles-module__fixedMarkersLayer___ffyX6 svg[fill=none] {
  fill: none !important;
}
.styles-module__toolbar___wNsdK svg[fill=none] :not([fill]),
.styles-module__markersLayer___-25j1 svg[fill=none] :not([fill]),
.styles-module__fixedMarkersLayer___ffyX6 svg[fill=none] :not([fill]) {
  fill: none !important;
}

.styles-module__controlsContent___9GJWU :where(button, input, select, textarea, label) {
  background: unset;
  border: unset;
  border-radius: unset;
  padding: unset;
  margin: unset;
  color: unset;
  font-family: unset;
  font-weight: unset;
  font-style: unset;
  line-height: unset;
  letter-spacing: unset;
  text-transform: unset;
  text-decoration: unset;
  box-shadow: unset;
  outline: unset;
}

@keyframes styles-module__toolbarEnter___u8RRu {
  from {
    opacity: 0;
    transform: scale(0.5) rotate(90deg);
  }
  to {
    opacity: 1;
    transform: scale(1) rotate(0deg);
  }
}
@keyframes styles-module__toolbarHide___y8kaT {
  from {
    opacity: 1;
    transform: scale(1);
  }
  to {
    opacity: 0;
    transform: scale(0.8);
  }
}
@keyframes styles-module__badgeEnter___mVQLj {
  from {
    opacity: 0;
    transform: scale(0);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}
@keyframes styles-module__scaleIn___c-r1K {
  from {
    opacity: 0;
    transform: scale(0.85);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}
@keyframes styles-module__scaleOut___Wctwz {
  from {
    opacity: 1;
    transform: scale(1);
  }
  to {
    opacity: 0;
    transform: scale(0.85);
  }
}
@keyframes styles-module__slideUp___kgD36 {
  from {
    opacity: 0;
    transform: scale(0.85) translateY(8px);
  }
  to {
    opacity: 1;
    transform: scale(1) translateY(0);
  }
}
@keyframes styles-module__slideDown___zcdje {
  from {
    opacity: 1;
    transform: scale(1) translateY(0);
  }
  to {
    opacity: 0;
    transform: scale(0.85) translateY(8px);
  }
}
@keyframes styles-module__fadeIn___b9qmf {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
@keyframes styles-module__fadeOut___6Ut6- {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}
@keyframes styles-module__hoverHighlightIn___6WYHY {
  from {
    opacity: 0;
    transform: scale(0.98);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}
@keyframes styles-module__hoverTooltipIn___FYGQx {
  from {
    opacity: 0;
    transform: scale(0.95) translateY(4px);
  }
  to {
    opacity: 1;
    transform: scale(1) translateY(0);
  }
}
.styles-module__disableTransitions___EopxO :is(*, *::before, *::after) {
  transition: none !important;
}

:host {
  /* Set here rather than inline so a consumer className rule can still hide the toolbar. */
  display: contents;
  position: fixed;
  top: auto;
  left: auto;
  bottom: 1.25rem;
  right: 1.25rem;
  z-index: 100000;
}

.styles-module__positionContext___AZFHE,
.styles-module__toolbar___wNsdK {
  position: inherit;
  top: inherit;
  left: inherit;
  bottom: inherit;
  right: inherit;
  z-index: inherit;
}

.styles-module__toolbar___wNsdK {
  width: 337px;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  pointer-events: none;
  transition: left 0.36s cubic-bezier(0.19, 1, 0.22, 1), top 0s, right 0s, bottom 0s;
}
.styles-module__toolbar___wNsdK[data-dragging=true] {
  transition: none;
}

.styles-module__toolbarContainer___dIhma {
  position: relative;
  -webkit-user-select: none;
  user-select: none;
  margin-left: auto;
  align-self: flex-end;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #1a1a1a;
  color: #fff;
  border: none;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2), 0 4px 16px rgba(0, 0, 0, 0.1);
  pointer-events: auto;
  transition: width 0.36s cubic-bezier(0.19, 1, 0.22, 1), transform 0.36s cubic-bezier(0.19, 1, 0.22, 1);
}
.styles-module__toolbarContainer___dIhma.styles-module__entrance___sgHd8 {
  animation: styles-module__toolbarEnter___u8RRu 0.5s cubic-bezier(0.34, 1.2, 0.64, 1) forwards;
}
.styles-module__toolbarContainer___dIhma.styles-module__hiding___1td44 {
  animation: styles-module__toolbarHide___y8kaT 0.4s cubic-bezier(0.4, 0, 1, 1) forwards;
  pointer-events: none;
}
.styles-module__toolbarContainer___dIhma.styles-module__collapsed___Rydsn {
  width: 44px;
  height: 44px;
  border-radius: 22px;
  padding: 0;
  cursor: pointer;
}
.styles-module__toolbarContainer___dIhma.styles-module__collapsed___Rydsn:hover {
  background: #2a2a2a;
}
.styles-module__toolbarContainer___dIhma.styles-module__collapsed___Rydsn:active {
  transform: scale(0.95);
}
.styles-module__toolbarContainer___dIhma.styles-module__expanded___ofKPx {
  height: 44px;
  border-radius: 22px;
  padding: 5px;
  width: 297px;
}
.styles-module__toolbarContainer___dIhma.styles-module__expanded___ofKPx.styles-module__serverConnected___Gfbou {
  width: 337px;
}

@media (prefers-reduced-motion: reduce) {
  .styles-module__toolbar___wNsdK,
  .styles-module__toolbarContainer___dIhma {
    transition: none;
  }
}
.styles-module__buttonWrapper___rBcdv.styles-module__toggleWrapper___7N0-q {
  position: absolute;
  top: 0;
  right: 0;
  width: 44px;
  height: 44px;
}

.styles-module__togglePlaceholder___wnqrL {
  width: 34px;
  flex: 0 0 34px;
  height: 34px;
}

.styles-module__toggleContent___0yfyP {
  position: absolute;
  top: 0;
  right: 0;
  width: 44px;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 0;
  border-radius: 50%;
  padding: 0;
  margin: 0;
  background: transparent;
  color: #fff;
  cursor: pointer;
  transition: color 0.15s ease;
}
.styles-module__toggleContent___0yfyP::before {
  content: "";
  position: absolute;
  inset: 5px;
  border-radius: 50%;
  pointer-events: none;
  background: transparent;
  transition: background-color 0.15s ease, transform 0.1s ease;
}
.styles-module__toggleContent___0yfyP.styles-module__expandedToggle___F7SRN {
  color: rgba(255, 255, 255, 0.85);
}
.styles-module__toggleContent___0yfyP.styles-module__expandedToggle___F7SRN:hover {
  color: #fff;
}
.styles-module__toggleContent___0yfyP.styles-module__expandedToggle___F7SRN:hover::before {
  background: rgba(255, 255, 255, 0.12);
}
.styles-module__toggleContent___0yfyP.styles-module__expandedToggle___F7SRN:active::before, .styles-module__toggleContent___0yfyP.styles-module__expandedToggle___F7SRN:active .styles-module__toggleGlyph___R7Oom {
  transform: scale(0.92);
}

.styles-module__toggleIcon___Jbtus {
  transform: translateY(-0.5px);
  transition: transform 0.3s cubic-bezier(0.22, 1, 0.36, 1);
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
}

.styles-module__expandedToggle___F7SRN .styles-module__toggleIcon___Jbtus {
  transform: none;
}

.styles-module__toggleGlyph___R7Oom {
  overflow: visible;
  transition: transform 0.1s ease;
}
.styles-module__toggleGlyph___R7Oom path {
  transform-box: fill-box;
  transform-origin: center;
  transition: transform 0.3s cubic-bezier(0.22, 1, 0.36, 1), opacity 0.16s ease;
}

.styles-module__toggleTopLine___hQaCm,
.styles-module__toggleMiddleLine___sFFVe {
  vector-effect: non-scaling-stroke;
}

.styles-module__toggleBottomLine___V-jX3 {
  transform-origin: left center;
}

.styles-module__toggleGlyph___R7Oom[data-active=true] .styles-module__toggleTopLine___hQaCm {
  transform: translateY(5.25px) rotate(45deg) scaleX(1.1422494);
}
.styles-module__toggleGlyph___R7Oom[data-active=true] .styles-module__toggleMiddleLine___sFFVe {
  transform: translateX(3.5px) rotate(-45deg) scaleX(2.4748737);
}
.styles-module__toggleGlyph___R7Oom[data-active=true] .styles-module__toggleBottomLine___V-jX3 {
  transform: scaleX(0);
  opacity: 0;
}
.styles-module__toggleGlyph___R7Oom[data-active=true] .styles-module__toggleSparkle___eeF99 {
  transform: scale(0);
  opacity: 0;
}

.styles-module__toggleContent___0yfyP:focus-visible,
.styles-module__controlButton___8Q0jc:focus-visible {
  outline: 2px solid var(--agentation-color-accent);
  outline-offset: 3px;
}

.styles-module__controlsContent___9GJWU {
  display: flex;
  align-items: center;
  gap: 6px;
  transition: filter 0.14s ease-out, opacity 0.14s ease-out, transform 0.36s cubic-bezier(0.19, 1, 0.22, 1);
}
.styles-module__controlsContent___9GJWU.styles-module__visible___KHwEW {
  transition: filter 0.3s cubic-bezier(0.22, 1, 0.36, 1), opacity 0.24s ease-out, transform 0.42s cubic-bezier(0.19, 1, 0.22, 1);
  opacity: 1;
  filter: blur(0px);
  transform: scale(1);
  visibility: visible;
  pointer-events: auto;
}
.styles-module__controlsContent___9GJWU.styles-module__hidden___Ae8H4 {
  pointer-events: none;
  opacity: 0;
  filter: blur(6px);
  transform: scale(0.4);
}

@media (prefers-reduced-motion: reduce) {
  .styles-module__controlsContent___9GJWU,
  .styles-module__controlsContent___9GJWU.styles-module__visible___KHwEW,
  .styles-module__toggleContent___0yfyP,
  .styles-module__toggleContent___0yfyP::before,
  .styles-module__toggleGlyph___R7Oom,
  .styles-module__toggleIcon___Jbtus,
  .styles-module__toggleGlyph___R7Oom path {
    transition: none;
  }
  .styles-module__controlsContent___9GJWU.styles-module__hidden___Ae8H4 {
    filter: none;
    transform: none;
  }
}
.styles-module__badge___2XsgF {
  position: absolute;
  top: -13px;
  right: -13px;
  -webkit-user-select: none;
  user-select: none;
  min-width: 18px;
  height: 18px;
  padding: 0 5px;
  border-radius: 9px;
  background-color: var(--agentation-color-accent);
  color: white;
  font-size: 0.625rem;
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.15), inset 0 0 0 1px rgba(255, 255, 255, 0.04);
  opacity: 1;
  transition: transform 0.3s ease, opacity 0.2s ease;
  transform: scale(1);
}
.styles-module__badge___2XsgF.styles-module__fadeOut___6Ut6- {
  opacity: 0;
  transform: scale(0);
  pointer-events: none;
}
.styles-module__badge___2XsgF.styles-module__entrance___sgHd8 {
  animation: styles-module__badgeEnter___mVQLj 0.3s cubic-bezier(0.34, 1.2, 0.64, 1) 0.4s both;
}

.styles-module__controlButton___8Q0jc {
  position: relative;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 34px;
  height: 34px;
  border-radius: 50%;
  border: none;
  background: transparent;
  color: rgba(255, 255, 255, 0.85);
  transition: background-color 0.15s ease, color 0.15s ease, transform 0.1s ease, opacity 0.2s ease;
}
.styles-module__controlButton___8Q0jc:hover:not(:disabled):not([data-active=true]):not([data-failed=true]):not([data-auto-sync=true]):not([data-error=true]):not([data-no-hover=true]) {
  background: rgba(255, 255, 255, 0.12);
  color: #fff;
}
.styles-module__controlButton___8Q0jc:active:not(:disabled) {
  transform: scale(0.92);
}
.styles-module__controlButton___8Q0jc:disabled {
  opacity: 0.35;
  cursor: not-allowed;
}
.styles-module__controlButton___8Q0jc[data-active=true] {
  color: var(--agentation-color-blue);
  background-color: color-mix(in srgb, var(--agentation-color-blue) 25%, transparent);
}
.styles-module__controlButton___8Q0jc[data-error=true] {
  color: var(--agentation-color-red);
  background-color: color-mix(in srgb, var(--agentation-color-red) 25%, transparent);
}
.styles-module__controlButton___8Q0jc[data-danger]:hover:not(:disabled):not([data-active=true]):not([data-failed=true]) {
  background-color: color-mix(in srgb, var(--agentation-color-red) 25%, transparent);
  color: var(--agentation-color-red);
}
.styles-module__controlButton___8Q0jc[data-no-hover=true], .styles-module__controlButton___8Q0jc.styles-module__statusShowing___te6iu {
  cursor: default;
  pointer-events: none;
  background: transparent !important;
}
.styles-module__controlButton___8Q0jc[data-auto-sync=true] {
  color: var(--agentation-color-green);
  background: transparent;
  cursor: default;
}
.styles-module__controlButton___8Q0jc[data-failed=true] {
  color: var(--agentation-color-red);
  background-color: color-mix(in srgb, var(--agentation-color-red) 25%, transparent);
}

.styles-module__buttonBadge___NeFWb {
  position: absolute;
  top: 0px;
  right: 0px;
  min-width: 16px;
  height: 16px;
  padding: 0 4px;
  border-radius: 8px;
  background-color: var(--agentation-color-accent);
  color: white;
  font-size: 0.625rem;
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 0 0 2px #1a1a1a, 0 1px 3px rgba(0, 0, 0, 0.2);
  pointer-events: none;
}
[data-agentation-theme=light] .styles-module__buttonBadge___NeFWb {
  box-shadow: 0 0 0 2px #fff, 0 1px 3px rgba(0, 0, 0, 0.2);
}

@keyframes styles-module__mcpIndicatorPulseConnected___EDodZ {
  0%, 100% {
    box-shadow: 0 0 0 0 color-mix(in srgb, var(--agentation-color-green) 50%, transparent);
  }
  50% {
    box-shadow: 0 0 0 5px color-mix(in srgb, var(--agentation-color-green) 0%, transparent);
  }
}
@keyframes styles-module__mcpIndicatorPulseConnecting___cCYte {
  0%, 100% {
    box-shadow: 0 0 0 0 color-mix(in srgb, var(--agentation-color-yellow) 50%, transparent);
  }
  50% {
    box-shadow: 0 0 0 5px color-mix(in srgb, var(--agentation-color-yellow) 0%, transparent);
  }
}
.styles-module__mcpIndicator___zGJeL {
  position: absolute;
  top: 3px;
  right: 3px;
  width: 6px;
  height: 6px;
  border-radius: 50%;
  pointer-events: none;
  transition: background-color 0.3s ease, opacity 0.15s ease, transform 0.15s ease;
  opacity: 1;
  transform: scale(1);
}
.styles-module__mcpIndicator___zGJeL.styles-module__connected___7c28g {
  background-color: var(--agentation-color-green);
  animation: styles-module__mcpIndicatorPulseConnected___EDodZ 2.5s ease-in-out infinite;
}
.styles-module__mcpIndicator___zGJeL.styles-module__connecting___uo-CW {
  background-color: var(--agentation-color-yellow);
  animation: styles-module__mcpIndicatorPulseConnecting___cCYte 1.5s ease-in-out infinite;
}
.styles-module__mcpIndicator___zGJeL.styles-module__hidden___Ae8H4 {
  opacity: 0;
  transform: scale(0);
  animation: none;
}

@keyframes styles-module__connectionPulse___-Zycw {
  0%, 100% {
    opacity: 1;
    transform: scale(1);
  }
  50% {
    opacity: 0.6;
    transform: scale(0.9);
  }
}
.styles-module__connectionIndicatorWrapper___L-e-3 {
  width: 8px;
  height: 34px;
  margin-left: 6px;
  margin-right: 6px;
}

.styles-module__connectionIndicator___afk9p {
  position: relative;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  opacity: 0;
  transition: opacity 0.3s ease, background-color 0.3s ease;
  cursor: default;
}

.styles-module__connectionIndicatorVisible___C-i5B {
  opacity: 1;
}

.styles-module__connectionIndicatorConnected___IY8pR {
  background-color: var(--agentation-color-green);
  animation: styles-module__connectionPulse___-Zycw 2.5s ease-in-out infinite;
}

.styles-module__connectionIndicatorDisconnected___kmpaZ {
  background-color: var(--agentation-color-red);
  animation: none;
}

.styles-module__connectionIndicatorConnecting___QmSLH {
  background-color: var(--agentation-color-yellow);
  animation: styles-module__connectionPulse___-Zycw 1s ease-in-out infinite;
}

.styles-module__buttonWrapper___rBcdv {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
}
.styles-module__buttonWrapper___rBcdv:hover .styles-module__buttonTooltip___Burd9 {
  opacity: 1;
  visibility: visible;
  transform: translateX(-50%) scale(1);
  transition-delay: 0.85s;
}
.styles-module__buttonWrapper___rBcdv:has(.styles-module__controlButton___8Q0jc:disabled):hover .styles-module__buttonTooltip___Burd9 {
  opacity: 0;
  visibility: hidden;
}

.styles-module__tooltipsInSession___-0lHH .styles-module__buttonWrapper___rBcdv:hover .styles-module__buttonTooltip___Burd9 {
  transition-delay: 0s;
}

.styles-module__sendButtonWrapper___UUxG6 {
  width: 0;
  opacity: 0;
  overflow: hidden;
  pointer-events: none;
  margin-left: -6px;
  transition: width 0.36s cubic-bezier(0.19, 1, 0.22, 1), opacity 0.2s cubic-bezier(0.19, 1, 0.22, 1), margin 0.36s cubic-bezier(0.19, 1, 0.22, 1);
}
.styles-module__sendButtonWrapper___UUxG6 .styles-module__controlButton___8Q0jc {
  transform: scale(0.8);
  transition: transform 0.36s cubic-bezier(0.19, 1, 0.22, 1);
}
.styles-module__sendButtonWrapper___UUxG6.styles-module__sendButtonVisible___WPSQU {
  width: 34px;
  opacity: 1;
  overflow: visible;
  pointer-events: auto;
  margin-left: 0;
}
.styles-module__sendButtonWrapper___UUxG6.styles-module__sendButtonVisible___WPSQU .styles-module__controlButton___8Q0jc {
  transform: scale(1);
}

.styles-module__buttonTooltip___Burd9 {
  position: absolute;
  bottom: calc(100% + 14px);
  left: 50%;
  transform: translateX(-50%) scale(0.95);
  padding: 6px 10px;
  background: #1a1a1a;
  color: rgba(255, 255, 255, 0.9);
  font-size: 12px;
  font-weight: 500;
  border-radius: 8px;
  white-space: nowrap;
  opacity: 0;
  visibility: hidden;
  pointer-events: none;
  z-index: 100001;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
  transition: opacity 0.135s ease, transform 0.135s ease, visibility 0.135s ease;
}
.styles-module__buttonTooltip___Burd9::after {
  content: "";
  position: absolute;
  top: calc(100% - 4px);
  left: 50%;
  transform: translateX(-50%) rotate(45deg);
  width: 8px;
  height: 8px;
  background: #1a1a1a;
  border-radius: 0 0 2px 0;
}

.styles-module__shortcut___lEAQk {
  margin-left: 4px;
  opacity: 0.5;
}

.styles-module__tooltipBelow___m6ats .styles-module__buttonTooltip___Burd9 {
  bottom: auto;
  top: calc(100% + 14px);
  transform: translateX(-50%) scale(0.95);
}
.styles-module__tooltipBelow___m6ats .styles-module__buttonTooltip___Burd9::after {
  top: -4px;
  bottom: auto;
  border-radius: 2px 0 0 0;
}

.styles-module__tooltipBelow___m6ats .styles-module__buttonWrapper___rBcdv:hover .styles-module__buttonTooltip___Burd9 {
  transform: translateX(-50%) scale(1);
}

.styles-module__tooltipsHidden___VtLJG .styles-module__buttonTooltip___Burd9 {
  opacity: 0 !important;
  visibility: hidden !important;
  transition: none !important;
}

.styles-module__tooltipVisible___0jcCv,
.styles-module__tooltipsHidden___VtLJG .styles-module__tooltipVisible___0jcCv {
  opacity: 1 !important;
  visibility: visible !important;
  transform: translateX(-50%) scale(1) !important;
  transition-delay: 0s !important;
}

.styles-module__buttonWrapperAlignLeft___myzIp .styles-module__buttonTooltip___Burd9 {
  left: 50%;
  transform: translateX(-12px) scale(0.95);
}
.styles-module__buttonWrapperAlignLeft___myzIp .styles-module__buttonTooltip___Burd9::after {
  left: 16px;
}
.styles-module__buttonWrapperAlignLeft___myzIp:hover .styles-module__buttonTooltip___Burd9 {
  transform: translateX(-12px) scale(1);
}

.styles-module__tooltipBelow___m6ats .styles-module__buttonWrapperAlignLeft___myzIp .styles-module__buttonTooltip___Burd9 {
  transform: translateX(-12px) scale(0.95);
}
.styles-module__tooltipBelow___m6ats .styles-module__buttonWrapperAlignLeft___myzIp:hover .styles-module__buttonTooltip___Burd9 {
  transform: translateX(-12px) scale(1);
}

.styles-module__buttonWrapperAlignRight___HCQFR .styles-module__buttonTooltip___Burd9 {
  left: 50%;
  transform: translateX(calc(-100% + 12px)) scale(0.95);
}
.styles-module__buttonWrapperAlignRight___HCQFR .styles-module__buttonTooltip___Burd9::after {
  left: auto;
  right: 8px;
}
.styles-module__buttonWrapperAlignRight___HCQFR:hover .styles-module__buttonTooltip___Burd9 {
  transform: translateX(calc(-100% + 12px)) scale(1);
}

.styles-module__tooltipBelow___m6ats .styles-module__buttonWrapperAlignRight___HCQFR .styles-module__buttonTooltip___Burd9 {
  transform: translateX(calc(-100% + 12px)) scale(0.95);
}
.styles-module__tooltipBelow___m6ats .styles-module__buttonWrapperAlignRight___HCQFR:hover .styles-module__buttonTooltip___Burd9 {
  transform: translateX(calc(-100% + 12px)) scale(1);
}

.styles-module__divider___c--s1 {
  width: 1px;
  height: 12px;
  background: rgba(255, 255, 255, 0.15);
  margin: 0 3px;
}

.styles-module__overlay___Q1O9y {
  position: fixed;
  inset: 0;
  z-index: 99997;
  pointer-events: none;
}
.styles-module__overlay___Q1O9y > * {
  pointer-events: auto;
}

.styles-module__hoverHighlight___ogakW {
  position: fixed;
  border: 2px solid color-mix(in srgb, var(--agentation-color-accent) 50%, transparent);
  border-radius: 4px;
  background-color: color-mix(in srgb, var(--agentation-color-accent) 4%, transparent);
  pointer-events: none !important;
  box-sizing: border-box;
  will-change: opacity;
  contain: layout style;
}
.styles-module__hoverHighlight___ogakW.styles-module__enter___WFIki {
  animation: styles-module__hoverHighlightIn___6WYHY 0.12s ease-out forwards;
}

.styles-module__multiSelectOutline___cSJ-m {
  position: fixed;
  border: 2px dashed color-mix(in srgb, var(--agentation-color-green) 60%, transparent);
  border-radius: 4px;
  pointer-events: none !important;
  background-color: color-mix(in srgb, var(--agentation-color-green) 5%, transparent);
  box-sizing: border-box;
  will-change: opacity;
}
.styles-module__multiSelectOutline___cSJ-m.styles-module__enter___WFIki {
  animation: styles-module__fadeIn___b9qmf 0.15s ease-out forwards;
}
.styles-module__multiSelectOutline___cSJ-m.styles-module__exit___fyOJ0 {
  animation: styles-module__fadeOut___6Ut6- 0.15s ease-out forwards;
}

.styles-module__singleSelectOutline___QhX-O {
  position: fixed;
  border: 2px solid color-mix(in srgb, var(--agentation-color-blue) 60%, transparent);
  border-radius: 4px;
  pointer-events: none !important;
  background-color: color-mix(in srgb, var(--agentation-color-blue) 5%, transparent);
  box-sizing: border-box;
  will-change: opacity;
}
.styles-module__singleSelectOutline___QhX-O.styles-module__enter___WFIki {
  animation: styles-module__fadeIn___b9qmf 0.15s ease-out forwards;
}
.styles-module__singleSelectOutline___QhX-O.styles-module__exit___fyOJ0 {
  animation: styles-module__fadeOut___6Ut6- 0.15s ease-out forwards;
}

.styles-module__hoverTooltip___bvLk7 {
  position: fixed;
  z-index: 99999;
  font-size: 0.6875rem;
  font-weight: 500;
  color: #fff;
  background: rgba(0, 0, 0, 0.85);
  padding: 0.35rem 0.6rem;
  border-radius: 0.375rem;
  pointer-events: none !important;
  white-space: nowrap;
  max-width: min(280px, 100vw - 16px - 1.2rem);
  overflow: hidden;
  text-overflow: ellipsis;
}
.styles-module__hoverTooltip___bvLk7.styles-module__enter___WFIki {
  animation: styles-module__hoverTooltipIn___FYGQx 0.1s ease-out forwards;
}

.styles-module__hoverReactPath___gx1IJ {
  font-size: 0.625rem;
  color: rgba(255, 255, 255, 0.6);
  margin-bottom: 0.15rem;
  overflow: hidden;
  text-overflow: ellipsis;
}

.styles-module__hoverElementName___QMLMl {
  overflow: hidden;
  text-overflow: ellipsis;
}

.styles-module__markersLayer___-25j1 {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 0;
  z-index: 99998;
  pointer-events: none;
}
.styles-module__markersLayer___-25j1 > * {
  pointer-events: auto;
}

.styles-module__fixedMarkersLayer___ffyX6 {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 99998;
  pointer-events: none;
}
.styles-module__fixedMarkersLayer___ffyX6 > * {
  pointer-events: auto;
}

.styles-module__marker___6sQrs {
  position: absolute;
  width: 22px;
  height: 22px;
  background: var(--agentation-color-blue);
  color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.6875rem;
  font-weight: 600;
  transform: translate(-50%, -50%) scale(1);
  opacity: 1;
  cursor: pointer;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2), inset 0 0 0 1px rgba(0, 0, 0, 0.04);
  -webkit-user-select: none;
  user-select: none;
  will-change: transform, opacity;
  contain: layout style;
  z-index: 1;
}
.styles-module__marker___6sQrs:hover {
  z-index: 2;
}
.styles-module__marker___6sQrs:not(.styles-module__enter___WFIki):not(.styles-module__exit___fyOJ0):not(.styles-module__clearing___FQ--7) {
  transition: background-color 0.15s ease, transform 0.1s ease;
}
.styles-module__marker___6sQrs.styles-module__enter___WFIki {
  animation: styles-module__markerIn___5FaAP 0.25s cubic-bezier(0.22, 1, 0.36, 1) both;
}
.styles-module__marker___6sQrs.styles-module__exit___fyOJ0 {
  animation: styles-module__markerOut___GU5jX 0.2s ease-out both;
  pointer-events: none;
}
.styles-module__marker___6sQrs.styles-module__clearing___FQ--7 {
  animation: styles-module__markerOut___GU5jX 0.15s ease-out both;
  pointer-events: none;
}
.styles-module__marker___6sQrs:not(.styles-module__enter___WFIki):not(.styles-module__exit___fyOJ0):not(.styles-module__clearing___FQ--7):hover {
  transform: translate(-50%, -50%) scale(1.1);
}
.styles-module__marker___6sQrs.styles-module__pending___2IHLC {
  position: fixed;
  background-color: var(--agentation-color-blue);
  cursor: default;
}
.styles-module__marker___6sQrs.styles-module__fixed___dBMHC {
  position: fixed;
}
.styles-module__marker___6sQrs.styles-module__multiSelect___YWiuz {
  background-color: var(--agentation-color-green);
  width: 26px;
  height: 26px;
  border-radius: 6px;
  font-size: 0.75rem;
}
.styles-module__marker___6sQrs.styles-module__multiSelect___YWiuz.styles-module__pending___2IHLC {
  background-color: var(--agentation-color-green);
}
.styles-module__marker___6sQrs.styles-module__hovered___ZgXIy {
  background-color: var(--agentation-color-red);
}

.styles-module__renumber___nCTxD {
  display: block;
  animation: styles-module__renumberRoll___Wgbq3 0.2s ease-out;
}

@keyframes styles-module__renumberRoll___Wgbq3 {
  0% {
    transform: translateX(-40%);
    opacity: 0;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
}
.styles-module__markerTooltip___aLJID {
  position: absolute;
  top: calc(100% + 10px);
  left: 50%;
  transform: translateX(-50%) scale(0.909);
  z-index: 100002;
  background: #1a1a1a;
  padding: 8px 0.75rem;
  border-radius: 0.75rem;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  font-weight: 400;
  color: #fff;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3), 0 0 0 1px rgba(255, 255, 255, 0.08);
  min-width: 120px;
  max-width: 200px;
  pointer-events: none;
  cursor: default;
}
.styles-module__markerTooltip___aLJID.styles-module__enter___WFIki {
  animation: styles-module__tooltipIn___0N31w 0.1s ease-out forwards;
}

.styles-module__markerQuote___FHmrz {
  display: block;
  font-size: 12px;
  font-style: italic;
  color: rgba(255, 255, 255, 0.6);
  margin-bottom: 0.3125rem;
  line-height: 1.4;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.styles-module__markerNote___QkrrS {
  display: block;
  font-size: 13px;
  font-weight: 400;
  line-height: 1.4;
  color: #fff;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  padding-bottom: 2px;
}

.styles-module__markerHint___2iF-6 {
  display: block;
  font-size: 0.625rem;
  font-weight: 400;
  color: rgba(255, 255, 255, 0.6);
  margin-top: 0.375rem;
  white-space: nowrap;
}

.styles-module__settingsPanel___OxX3Y {
  position: absolute;
  right: 5px;
  bottom: calc(100% + 0.5rem);
  z-index: 1;
  overflow: hidden;
  background: #1c1c1c;
  border-radius: 1rem;
  padding: 13px 0 16px;
  min-width: 205px;
  cursor: default;
  opacity: 1;
  box-shadow: 0 1px 8px rgba(0, 0, 0, 0.25), 0 0 0 1px rgba(0, 0, 0, 0.04);
  transition: background-color 0.25s ease, box-shadow 0.25s ease;
}
.styles-module__settingsPanel___OxX3Y::before, .styles-module__settingsPanel___OxX3Y::after {
  content: "";
  position: absolute;
  top: 0;
  bottom: 0;
  width: 16px;
  z-index: 2;
  pointer-events: none;
}
.styles-module__settingsPanel___OxX3Y::before {
  left: 0;
  background: linear-gradient(to right, #1c1c1c 0%, transparent 100%);
}
.styles-module__settingsPanel___OxX3Y::after {
  right: 0;
  background: linear-gradient(to left, #1c1c1c 0%, transparent 100%);
}
.styles-module__settingsPanel___OxX3Y .styles-module__settingsHeader___pwDY9,
.styles-module__settingsPanel___OxX3Y .styles-module__settingsBrand___0gJeM,
.styles-module__settingsPanel___OxX3Y .styles-module__settingsBrandSlash___uTG18,
.styles-module__settingsPanel___OxX3Y .styles-module__settingsVersion___TUcFq,
.styles-module__settingsPanel___OxX3Y .styles-module__settingsSection___m-YM2,
.styles-module__settingsPanel___OxX3Y .styles-module__settingsLabel___8UjfX,
.styles-module__settingsPanel___OxX3Y .styles-module__cycleButton___FMKfw,
.styles-module__settingsPanel___OxX3Y .styles-module__cycleDot___nPgLY,
.styles-module__settingsPanel___OxX3Y .styles-module__dropdownButton___16NPz,
.styles-module__settingsPanel___OxX3Y .styles-module__toggleLabel___Xm8Aa,
.styles-module__settingsPanel___OxX3Y .styles-module__customCheckbox___U39ax,
.styles-module__settingsPanel___OxX3Y .styles-module__sliderLabel___U8sPr,
.styles-module__settingsPanel___OxX3Y .styles-module__slider___GLdxp,
.styles-module__settingsPanel___OxX3Y .styles-module__themeToggle___2rUjA {
  transition: background-color 0.25s ease, color 0.25s ease, border-color 0.25s ease;
}
.styles-module__settingsPanel___OxX3Y.styles-module__enter___WFIki {
  opacity: 1;
  transform: translateY(0) scale(1);
  filter: blur(0px);
  transition: opacity 0.2s ease, transform 0.2s ease, filter 0.2s ease;
}
.styles-module__settingsPanel___OxX3Y.styles-module__exit___fyOJ0 {
  opacity: 0;
  transform: translateY(8px) scale(0.95);
  filter: blur(5px);
  pointer-events: none;
  transition: opacity 0.1s ease, transform 0.1s ease, filter 0.1s ease;
}
[data-agentation-theme=dark] .styles-module__settingsPanel___OxX3Y {
  background: #1a1a1a;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3), 0 0 0 1px rgba(255, 255, 255, 0.08);
}
[data-agentation-theme=dark] .styles-module__settingsPanel___OxX3Y .styles-module__settingsLabel___8UjfX {
  color: rgba(255, 255, 255, 0.6);
}
[data-agentation-theme=dark] .styles-module__settingsPanel___OxX3Y .styles-module__settingsOption___UNa12 {
  color: rgba(255, 255, 255, 0.85);
}
[data-agentation-theme=dark] .styles-module__settingsPanel___OxX3Y .styles-module__settingsOption___UNa12:hover {
  background: rgba(255, 255, 255, 0.1);
}
[data-agentation-theme=dark] .styles-module__settingsPanel___OxX3Y .styles-module__settingsOption___UNa12.styles-module__selected___OwRqP {
  background: rgba(255, 255, 255, 0.15);
  color: #fff;
}
[data-agentation-theme=dark] .styles-module__settingsPanel___OxX3Y .styles-module__toggleLabel___Xm8Aa {
  color: rgba(255, 255, 255, 0.85);
}

.styles-module__settingsPanelContainer___Xksv8 {
  overflow: visible;
  position: relative;
  display: flex;
  padding: 0 1rem;
}

.styles-module__settingsPage___6YfHH {
  min-width: 100%;
  flex-shrink: 0;
  transition: transform 0.2s ease, opacity 0.2s ease;
  transition-delay: 0s;
  opacity: 1;
}

.styles-module__settingsPage___6YfHH.styles-module__slideLeft___Ps01J {
  transform: translateX(-24px);
  opacity: 0;
  pointer-events: none;
}

.styles-module__automationsPage___uvCq6 {
  position: absolute;
  top: 0;
  left: 24px;
  width: 100%;
  height: 100%;
  padding: 3px 1rem 0;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  transition: transform 0.2s ease, opacity 0.2s ease;
  opacity: 0;
  pointer-events: none;
}

.styles-module__automationsPage___uvCq6.styles-module__slideIn___4-qXe {
  transform: translateX(-24px);
  opacity: 1;
  pointer-events: auto;
}

.styles-module__settingsNavLink___wCzJt {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 0;
  border: none;
  background: transparent;
  font-family: inherit;
  font-size: 0.8125rem;
  font-weight: 400;
  color: rgba(255, 255, 255, 0.5);
  cursor: pointer;
  transition: color 0.15s ease;
}
.styles-module__settingsNavLink___wCzJt:hover {
  color: rgba(255, 255, 255, 0.9);
}
[data-agentation-theme=light] .styles-module__settingsNavLink___wCzJt {
  color: rgba(0, 0, 0, 0.5);
}
[data-agentation-theme=light] .styles-module__settingsNavLink___wCzJt:hover {
  color: rgba(0, 0, 0, 0.8);
}
.styles-module__settingsNavLink___wCzJt svg {
  color: rgba(255, 255, 255, 0.4);
  transition: color 0.15s ease;
}
.styles-module__settingsNavLink___wCzJt:hover svg {
  color: #fff;
}
[data-agentation-theme=light] .styles-module__settingsNavLink___wCzJt svg {
  color: rgba(0, 0, 0, 0.25);
}
[data-agentation-theme=light] .styles-module__settingsNavLink___wCzJt:hover svg {
  color: rgba(0, 0, 0, 0.8);
}

.styles-module__settingsNavLinkRight___ZWwhj {
  display: flex;
  align-items: center;
  gap: 6px;
}

.styles-module__mcpNavIndicator___cl9pO {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  flex-shrink: 0;
}
.styles-module__mcpNavIndicator___cl9pO.styles-module__connected___7c28g {
  background-color: var(--agentation-color-green);
  animation: styles-module__mcpPulse___uNggr 2.5s ease-in-out infinite;
}
.styles-module__mcpNavIndicator___cl9pO.styles-module__connecting___uo-CW {
  background-color: var(--agentation-color-yellow);
  animation: styles-module__mcpPulse___uNggr 1.5s ease-in-out infinite;
}

.styles-module__settingsBackButton___bIe2j {
  display: flex;
  align-items: center;
  gap: 4px;
  padding: 6px 0 12px 0;
  margin: -6px 0 0.5rem 0;
  border: none;
  border-bottom: 1px solid rgba(255, 255, 255, 0.07);
  border-radius: 0;
  background: transparent;
  font-family: inherit;
  font-size: 0.8125rem;
  font-weight: 500;
  letter-spacing: -0.15px;
  color: #fff;
  cursor: pointer;
  transition: transform 0.12s cubic-bezier(0.32, 0.72, 0, 1);
}
.styles-module__settingsBackButton___bIe2j svg {
  opacity: 0.4;
  flex-shrink: 0;
  transition: opacity 0.15s ease, transform 0.18s cubic-bezier(0.32, 0.72, 0, 1);
}
.styles-module__settingsBackButton___bIe2j:hover {
  border-bottom-color: rgba(255, 255, 255, 0.07);
}
.styles-module__settingsBackButton___bIe2j:hover svg {
  opacity: 1;
}
[data-agentation-theme=light] .styles-module__settingsBackButton___bIe2j {
  color: rgba(0, 0, 0, 0.85);
  border-bottom-color: rgba(0, 0, 0, 0.08);
}
[data-agentation-theme=light] .styles-module__settingsBackButton___bIe2j:hover {
  border-bottom-color: rgba(0, 0, 0, 0.08);
}

.styles-module__automationHeader___InP0r {
  display: flex;
  align-items: center;
  gap: 0.125rem;
  font-size: 0.8125rem;
  font-weight: 400;
  color: #fff;
}
[data-agentation-theme=light] .styles-module__automationHeader___InP0r {
  color: rgba(0, 0, 0, 0.85);
}

.styles-module__automationDescription___NKlmo {
  font-size: 0.6875rem;
  font-weight: 300;
  color: rgba(255, 255, 255, 0.5);
  margin-top: 2px;
  line-height: 14px;
}
[data-agentation-theme=light] .styles-module__automationDescription___NKlmo {
  color: rgba(0, 0, 0, 0.5);
}

.styles-module__learnMoreLink___8xv-x {
  color: rgba(255, 255, 255, 0.8);
  text-decoration: underline dotted;
  text-decoration-color: rgba(255, 255, 255, 0.2);
  text-underline-offset: 2px;
  transition: color 0.15s ease;
}
.styles-module__learnMoreLink___8xv-x:hover {
  color: #fff;
}
[data-agentation-theme=light] .styles-module__learnMoreLink___8xv-x {
  color: rgba(0, 0, 0, 0.6);
  text-decoration-color: rgba(0, 0, 0, 0.2);
}
[data-agentation-theme=light] .styles-module__learnMoreLink___8xv-x:hover {
  color: rgba(0, 0, 0, 0.85);
}

.styles-module__autoSendRow___UblX5 {
  display: flex;
  align-items: center;
  gap: 8px;
}

.styles-module__autoSendLabel___icDc2 {
  font-size: 0.6875rem;
  font-weight: 400;
  color: rgba(255, 255, 255, 0.4);
  transition: color 0.15s ease;
}
.styles-module__autoSendLabel___icDc2.styles-module__active___-zoN6 {
  color: #66b8ff;
  color: color(display-p3 0.4 0.72 1);
}
[data-agentation-theme=light] .styles-module__autoSendLabel___icDc2 {
  color: rgba(0, 0, 0, 0.4);
}
[data-agentation-theme=light] .styles-module__autoSendLabel___icDc2.styles-module__active___-zoN6 {
  color: var(--agentation-color-blue);
}

.styles-module__webhookUrlInput___2375C {
  display: block;
  width: 100%;
  flex: 1;
  min-height: 60px;
  box-sizing: border-box;
  margin-top: 11px;
  padding: 8px 10px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 6px;
  background: rgba(255, 255, 255, 0.03);
  font-family: inherit;
  font-size: 0.75rem;
  font-weight: 400;
  color: #fff;
  outline: none;
  resize: none;
  user-select: text;
  transition: border-color 0.15s ease, background-color 0.15s ease, box-shadow 0.15s ease;
}
.styles-module__webhookUrlInput___2375C::placeholder {
  color: rgba(255, 255, 255, 0.3);
}
.styles-module__webhookUrlInput___2375C:focus {
  border-color: rgba(255, 255, 255, 0.3);
  background: rgba(255, 255, 255, 0.08);
}
[data-agentation-theme=light] .styles-module__webhookUrlInput___2375C {
  border-color: rgba(0, 0, 0, 0.1);
  background: rgba(0, 0, 0, 0.03);
  color: rgba(0, 0, 0, 0.85);
}
[data-agentation-theme=light] .styles-module__webhookUrlInput___2375C::placeholder {
  color: rgba(0, 0, 0, 0.3);
}
[data-agentation-theme=light] .styles-module__webhookUrlInput___2375C:focus {
  border-color: rgba(0, 0, 0, 0.25);
  background: rgba(0, 0, 0, 0.05);
}

.styles-module__settingsHeader___pwDY9 {
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: 24px;
  margin-bottom: 0.5rem;
  padding-bottom: 9px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.07);
}

.styles-module__settingsBrand___0gJeM {
  font-size: 0.8125rem;
  font-weight: 600;
  letter-spacing: -0.0094em;
  color: #fff;
  text-decoration: none;
}

.styles-module__settingsBrandSlash___uTG18 {
  color: var(--agentation-color-accent);
  transition: color 0.2s ease;
}

.styles-module__settingsVersion___TUcFq {
  font-size: 11px;
  font-weight: 400;
  color: rgba(255, 255, 255, 0.4);
  margin-left: auto;
  letter-spacing: -0.0094em;
}

.styles-module__settingsSection___m-YM2 + .styles-module__settingsSection___m-YM2 {
  margin-top: 0.5rem;
  padding-top: 0.5rem;
  border-top: 1px solid rgba(255, 255, 255, 0.07);
}
.styles-module__settingsSection___m-YM2.styles-module__settingsSectionExtraPadding___jdhFV {
  padding-top: calc(0.5rem + 4px);
}

.styles-module__settingsSectionGrow___h-5HZ {
  flex: 1;
  display: flex;
  flex-direction: column;
}

.styles-module__settingsRow___3sdhc {
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: 24px;
}
.styles-module__settingsRow___3sdhc.styles-module__settingsRowMarginTop___zA0Sp {
  margin-top: 8px;
}

.styles-module__dropdownContainer___BVnxe {
  position: relative;
}

.styles-module__dropdownButton___16NPz {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.25rem 0.5rem;
  border: none;
  border-radius: 0.375rem;
  background: transparent;
  font-size: 0.8125rem;
  font-weight: 600;
  color: #fff;
  cursor: pointer;
  transition: background-color 0.15s ease, color 0.15s ease;
  letter-spacing: -0.0094em;
}
.styles-module__dropdownButton___16NPz:hover {
  background: rgba(255, 255, 255, 0.08);
}
.styles-module__dropdownButton___16NPz svg {
  opacity: 0.6;
}

.styles-module__cycleButton___FMKfw {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0;
  border: none;
  background: transparent;
  font-size: 0.8125rem;
  font-weight: 500;
  color: #fff;
  cursor: pointer;
  letter-spacing: -0.0094em;
}
[data-agentation-theme=light] .styles-module__cycleButton___FMKfw {
  color: rgba(0, 0, 0, 0.85);
}
.styles-module__cycleButton___FMKfw:disabled {
  opacity: 0.35;
  cursor: not-allowed;
}

.styles-module__settingsRowDisabled___EgS0V .styles-module__settingsLabel___8UjfX {
  color: rgba(255, 255, 255, 0.2);
}
[data-agentation-theme=light] .styles-module__settingsRowDisabled___EgS0V .styles-module__settingsLabel___8UjfX {
  color: rgba(0, 0, 0, 0.2);
}
.styles-module__settingsRowDisabled___EgS0V .styles-module__toggleSwitch___l4Ygm {
  opacity: 0.4;
  cursor: not-allowed;
}

@keyframes styles-module__cycleTextIn___Q6zJf {
  0% {
    opacity: 0;
    transform: translateY(-6px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}
.styles-module__cycleButtonText___fD1LR {
  display: inline-block;
  animation: styles-module__cycleTextIn___Q6zJf 0.2s ease-out;
}

.styles-module__cycleDots___LWuoQ {
  display: flex;
  flex-direction: column;
  gap: 2px;
}

.styles-module__cycleDot___nPgLY {
  width: 3px;
  height: 3px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.3);
  transform: scale(0.667);
  transition: background-color 0.25s ease-out, transform 0.25s ease-out;
}
.styles-module__cycleDot___nPgLY.styles-module__active___-zoN6 {
  background: #fff;
  transform: scale(1);
}
[data-agentation-theme=light] .styles-module__cycleDot___nPgLY {
  background: rgba(0, 0, 0, 0.2);
}
[data-agentation-theme=light] .styles-module__cycleDot___nPgLY.styles-module__active___-zoN6 {
  background: rgba(0, 0, 0, 0.7);
}

.styles-module__dropdownMenu___k73ER {
  position: absolute;
  right: 0;
  top: calc(100% + 0.25rem);
  background: #1a1a1a;
  border-radius: 0.5rem;
  padding: 0.25rem;
  min-width: 120px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3), 0 0 0 1px rgba(255, 255, 255, 0.1);
  z-index: 10;
  animation: styles-module__scaleIn___c-r1K 0.15s ease-out;
}

.styles-module__dropdownItem___ylsLj {
  width: 100%;
  display: flex;
  align-items: center;
  padding: 0.5rem 0.625rem;
  border: none;
  border-radius: 0.375rem;
  background: transparent;
  font-size: 0.8125rem;
  font-weight: 500;
  color: rgba(255, 255, 255, 0.85);
  cursor: pointer;
  text-align: left;
  transition: background-color 0.15s ease, color 0.15s ease;
  letter-spacing: -0.0094em;
}
.styles-module__dropdownItem___ylsLj:hover {
  background: rgba(255, 255, 255, 0.08);
}
.styles-module__dropdownItem___ylsLj.styles-module__selected___OwRqP {
  background: rgba(255, 255, 255, 0.12);
  color: #fff;
  font-weight: 600;
}

.styles-module__settingsLabel___8UjfX {
  font-size: 0.8125rem;
  font-weight: 400;
  letter-spacing: -0.0094em;
  color: rgba(255, 255, 255, 0.5);
  display: flex;
  align-items: center;
  gap: 0.125rem;
}
[data-agentation-theme=light] .styles-module__settingsLabel___8UjfX {
  color: rgba(0, 0, 0, 0.5);
}

.styles-module__settingsLabelMarker___ewdtV {
  padding-top: 3px;
  margin-bottom: 10px;
}

.styles-module__settingsOptions___LyrBA {
  display: flex;
  gap: 0.25rem;
}

.styles-module__settingsOption___UNa12 {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.25rem;
  padding: 0.375rem 0.5rem;
  border: none;
  border-radius: 0.375rem;
  background: transparent;
  font-size: 0.6875rem;
  font-weight: 500;
  color: rgba(0, 0, 0, 0.7);
  cursor: pointer;
  transition: background-color 0.15s ease, color 0.15s ease;
}
.styles-module__settingsOption___UNa12:hover {
  background: rgba(0, 0, 0, 0.05);
}
.styles-module__settingsOption___UNa12.styles-module__selected___OwRqP {
  background: color-mix(in srgb, var(--agentation-color-blue) 15%, transparent);
  color: var(--agentation-color-blue);
}

.styles-module__sliderContainer___ducXj {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.styles-module__slider___GLdxp {
  -webkit-appearance: none;
  appearance: none;
  width: 100%;
  height: 4px;
  background: rgba(255, 255, 255, 0.15);
  border-radius: 2px;
  outline: none;
  cursor: pointer;
}
.styles-module__slider___GLdxp::-webkit-slider-thumb {
  -webkit-appearance: none;
  appearance: none;
  width: 14px;
  height: 14px;
  background: white;
  border-radius: 50%;
  cursor: pointer;
  transition: transform 0.15s ease, box-shadow 0.15s ease;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
}
.styles-module__slider___GLdxp::-moz-range-thumb {
  width: 14px;
  height: 14px;
  background: white;
  border: none;
  border-radius: 50%;
  cursor: pointer;
  transition: transform 0.15s ease, box-shadow 0.15s ease;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
}
.styles-module__slider___GLdxp:hover::-webkit-slider-thumb {
  transform: scale(1.15);
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.4);
}
.styles-module__slider___GLdxp:hover::-moz-range-thumb {
  transform: scale(1.15);
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.4);
}

.styles-module__sliderLabels___FhLDB {
  display: flex;
  justify-content: space-between;
}

.styles-module__sliderLabel___U8sPr {
  font-size: 0.625rem;
  font-weight: 500;
  color: rgba(255, 255, 255, 0.4);
  cursor: pointer;
  transition: color 0.15s ease;
}
.styles-module__sliderLabel___U8sPr:hover {
  color: rgba(255, 255, 255, 0.7);
}
.styles-module__sliderLabel___U8sPr.styles-module__active___-zoN6 {
  color: rgba(255, 255, 255, 0.9);
}

.styles-module__colorOptions___iHCNX {
  display: flex;
  gap: 0.5rem;
  margin-top: 0.375rem;
  margin-bottom: 1px;
}

.styles-module__colorOption___IodiY {
  display: block;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  border: 2px solid transparent;
  background-color: var(--swatch);
  cursor: pointer;
  transition: transform 0.2s cubic-bezier(0.25, 1, 0.5, 1);
}
@supports (color: color(display-p3 0 0 0)) {
  .styles-module__colorOption___IodiY {
    background-color: var(--swatch-p3);
  }
}
.styles-module__colorOption___IodiY:hover {
  transform: scale(1.15);
}
.styles-module__colorOption___IodiY.styles-module__selected___OwRqP {
  transform: scale(0.83);
}

.styles-module__colorOptionRing___U2xpo {
  display: flex;
  width: 24px;
  height: 24px;
  border: 2px solid transparent;
  border-radius: 50%;
  transition: border-color 0.3s ease;
}
.styles-module__colorOptionRing___U2xpo.styles-module__selected___OwRqP {
  border-color: var(--swatch);
}
@supports (color: color(display-p3 0 0 0)) {
  .styles-module__colorOptionRing___U2xpo.styles-module__selected___OwRqP {
    border-color: var(--swatch-p3);
  }
}

.styles-module__settingsToggle___fBrFn {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  cursor: pointer;
}
.styles-module__settingsToggle___fBrFn + .styles-module__settingsToggle___fBrFn {
  margin-top: calc(0.5rem + 6px);
}
.styles-module__settingsToggle___fBrFn input[type=checkbox] {
  position: absolute;
  opacity: 0;
  width: 0;
  height: 0;
}
.styles-module__settingsToggle___fBrFn.styles-module__settingsToggleMarginBottom___MZUyF {
  margin-bottom: calc(0.5rem + 6px);
}

@keyframes styles-module__mcpPulse___uNggr {
  0% {
    box-shadow: 0 0 0 0 color-mix(in srgb, var(--agentation-color-green) 50%, transparent);
  }
  70% {
    box-shadow: 0 0 0 6px color-mix(in srgb, var(--agentation-color-green) 0%, transparent);
  }
  100% {
    box-shadow: 0 0 0 0 color-mix(in srgb, var(--agentation-color-green) 0%, transparent);
  }
}
@keyframes styles-module__mcpPulseError___fov9B {
  0% {
    box-shadow: 0 0 0 0 color-mix(in srgb, var(--agentation-color-red) 50%, transparent);
  }
  70% {
    box-shadow: 0 0 0 6px color-mix(in srgb, var(--agentation-color-red) 0%, transparent);
  }
  100% {
    box-shadow: 0 0 0 0 color-mix(in srgb, var(--agentation-color-red) 0%, transparent);
  }
}
.styles-module__mcpStatusDot___ibgkc {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  flex-shrink: 0;
}
.styles-module__mcpStatusDot___ibgkc.styles-module__connecting___uo-CW {
  background-color: var(--agentation-color-yellow);
  animation: styles-module__mcpPulse___uNggr 1.5s infinite;
}
.styles-module__mcpStatusDot___ibgkc.styles-module__connected___7c28g {
  background-color: var(--agentation-color-green);
  animation: styles-module__mcpPulse___uNggr 2.5s ease-in-out infinite;
}
.styles-module__mcpStatusDot___ibgkc.styles-module__disconnected___cHPxR {
  background-color: var(--agentation-color-red);
  animation: styles-module__mcpPulseError___fov9B 2s infinite;
}

.styles-module__drawCanvas___7cG9U {
  position: fixed;
  inset: 0;
  z-index: 99996;
  pointer-events: none !important;
}
.styles-module__drawCanvas___7cG9U.styles-module__active___-zoN6 {
  pointer-events: auto !important;
  cursor: crosshair !important;
}
.styles-module__drawCanvas___7cG9U.styles-module__active___-zoN6[data-stroke-hover] {
  cursor: pointer !important;
}

.styles-module__dragSelection___kZLq2 {
  position: fixed;
  top: 0;
  left: 0;
  border: 2px solid color-mix(in srgb, var(--agentation-color-green) 60%, transparent);
  border-radius: 4px;
  background-color: color-mix(in srgb, var(--agentation-color-green) 8%, transparent);
  pointer-events: none;
  z-index: 99997;
  will-change: transform, width, height;
  contain: layout style;
}

.styles-module__dragCount___KM90j {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: var(--agentation-color-green);
  color: white;
  font-size: 0.875rem;
  font-weight: 600;
  padding: 0.25rem 0.5rem;
  border-radius: 1rem;
  min-width: 1.5rem;
  text-align: center;
}

.styles-module__highlightsContainer___-0xzG {
  position: fixed;
  top: 0;
  left: 0;
  pointer-events: none;
  z-index: 99996;
}

.styles-module__selectedElementHighlight___fyVlI {
  position: fixed;
  top: 0;
  left: 0;
  border: 2px solid color-mix(in srgb, var(--agentation-color-green) 50%, transparent);
  border-radius: 4px;
  background: color-mix(in srgb, var(--agentation-color-green) 6%, transparent);
  pointer-events: none;
  will-change: transform, width, height;
  contain: layout style;
}

[data-agentation-theme=light] .styles-module__toolbarContainer___dIhma {
  background: #fff;
  color: rgba(0, 0, 0, 0.85);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08), 0 4px 16px rgba(0, 0, 0, 0.06), 0 0 0 1px rgba(0, 0, 0, 0.04);
}
[data-agentation-theme=light] .styles-module__toolbarContainer___dIhma.styles-module__collapsed___Rydsn:hover {
  background: #f5f5f5;
}
[data-agentation-theme=light] .styles-module__toggleContent___0yfyP {
  color: rgba(0, 0, 0, 0.85);
}
[data-agentation-theme=light] .styles-module__toggleContent___0yfyP.styles-module__expandedToggle___F7SRN {
  color: rgba(0, 0, 0, 0.5);
}
[data-agentation-theme=light] .styles-module__toggleContent___0yfyP.styles-module__expandedToggle___F7SRN:hover {
  color: rgba(0, 0, 0, 0.85);
}
[data-agentation-theme=light] .styles-module__toggleContent___0yfyP.styles-module__expandedToggle___F7SRN:hover::before {
  background: rgba(0, 0, 0, 0.06);
}
[data-agentation-theme=light] .styles-module__controlButton___8Q0jc {
  color: rgba(0, 0, 0, 0.5);
}
[data-agentation-theme=light] .styles-module__controlButton___8Q0jc:hover:not(:disabled):not([data-active=true]):not([data-failed=true]):not([data-auto-sync=true]):not([data-error=true]):not([data-no-hover=true]) {
  background: rgba(0, 0, 0, 0.06);
  color: rgba(0, 0, 0, 0.85);
}
[data-agentation-theme=light] .styles-module__controlButton___8Q0jc[data-active=true] {
  color: var(--agentation-color-blue);
  background: color-mix(in srgb, var(--agentation-color-blue) 15%, transparent);
}
[data-agentation-theme=light] .styles-module__controlButton___8Q0jc[data-error=true] {
  color: var(--agentation-color-red);
  background: color-mix(in srgb, var(--agentation-color-red) 15%, transparent);
}
[data-agentation-theme=light] .styles-module__controlButton___8Q0jc[data-danger]:hover:not(:disabled):not([data-active=true]):not([data-failed=true]) {
  color: var(--agentation-color-red);
  background: color-mix(in srgb, var(--agentation-color-red) 15%, transparent);
}
[data-agentation-theme=light] .styles-module__controlButton___8Q0jc[data-auto-sync=true] {
  color: var(--agentation-color-green);
  background: transparent;
}
[data-agentation-theme=light] .styles-module__controlButton___8Q0jc[data-failed=true] {
  color: var(--agentation-color-red);
  background: color-mix(in srgb, var(--agentation-color-red) 15%, transparent);
}
[data-agentation-theme=light] .styles-module__buttonTooltip___Burd9 {
  background: #fff;
  color: rgba(0, 0, 0, 0.85);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08), 0 4px 16px rgba(0, 0, 0, 0.06), 0 0 0 1px rgba(0, 0, 0, 0.04);
}
[data-agentation-theme=light] .styles-module__buttonTooltip___Burd9::after {
  background: #fff;
}
[data-agentation-theme=light] .styles-module__divider___c--s1 {
  background: rgba(0, 0, 0, 0.1);
}`,Y={toolbar:"styles-module__toolbar___wNsdK",markersLayer:"styles-module__markersLayer___-25j1",fixedMarkersLayer:"styles-module__fixedMarkersLayer___ffyX6",controlsContent:"styles-module__controlsContent___9GJWU",disableTransitions:"styles-module__disableTransitions___EopxO",positionContext:"styles-module__positionContext___AZFHE",toolbarContainer:"styles-module__toolbarContainer___dIhma",entrance:"styles-module__entrance___sgHd8",toolbarEnter:"styles-module__toolbarEnter___u8RRu",hiding:"styles-module__hiding___1td44",toolbarHide:"styles-module__toolbarHide___y8kaT",collapsed:"styles-module__collapsed___Rydsn",expanded:"styles-module__expanded___ofKPx",serverConnected:"styles-module__serverConnected___Gfbou",buttonWrapper:"styles-module__buttonWrapper___rBcdv",toggleWrapper:"styles-module__toggleWrapper___7N0-q",togglePlaceholder:"styles-module__togglePlaceholder___wnqrL",toggleContent:"styles-module__toggleContent___0yfyP",expandedToggle:"styles-module__expandedToggle___F7SRN",toggleGlyph:"styles-module__toggleGlyph___R7Oom",toggleIcon:"styles-module__toggleIcon___Jbtus",toggleTopLine:"styles-module__toggleTopLine___hQaCm",toggleMiddleLine:"styles-module__toggleMiddleLine___sFFVe",toggleBottomLine:"styles-module__toggleBottomLine___V-jX3",toggleSparkle:"styles-module__toggleSparkle___eeF99",controlButton:"styles-module__controlButton___8Q0jc",visible:"styles-module__visible___KHwEW",hidden:"styles-module__hidden___Ae8H4",badge:"styles-module__badge___2XsgF",fadeOut:"styles-module__fadeOut___6Ut6-",badgeEnter:"styles-module__badgeEnter___mVQLj",statusShowing:"styles-module__statusShowing___te6iu",buttonBadge:"styles-module__buttonBadge___NeFWb",mcpIndicator:"styles-module__mcpIndicator___zGJeL",connected:"styles-module__connected___7c28g",mcpIndicatorPulseConnected:"styles-module__mcpIndicatorPulseConnected___EDodZ",connecting:"styles-module__connecting___uo-CW",mcpIndicatorPulseConnecting:"styles-module__mcpIndicatorPulseConnecting___cCYte",connectionIndicatorWrapper:"styles-module__connectionIndicatorWrapper___L-e-3",connectionIndicator:"styles-module__connectionIndicator___afk9p",connectionIndicatorVisible:"styles-module__connectionIndicatorVisible___C-i5B",connectionIndicatorConnected:"styles-module__connectionIndicatorConnected___IY8pR",connectionPulse:"styles-module__connectionPulse___-Zycw",connectionIndicatorDisconnected:"styles-module__connectionIndicatorDisconnected___kmpaZ",connectionIndicatorConnecting:"styles-module__connectionIndicatorConnecting___QmSLH",buttonTooltip:"styles-module__buttonTooltip___Burd9",tooltipsInSession:"styles-module__tooltipsInSession___-0lHH",sendButtonWrapper:"styles-module__sendButtonWrapper___UUxG6",sendButtonVisible:"styles-module__sendButtonVisible___WPSQU",shortcut:"styles-module__shortcut___lEAQk",tooltipBelow:"styles-module__tooltipBelow___m6ats",tooltipsHidden:"styles-module__tooltipsHidden___VtLJG",tooltipVisible:"styles-module__tooltipVisible___0jcCv",buttonWrapperAlignLeft:"styles-module__buttonWrapperAlignLeft___myzIp",buttonWrapperAlignRight:"styles-module__buttonWrapperAlignRight___HCQFR",divider:"styles-module__divider___c--s1",overlay:"styles-module__overlay___Q1O9y",hoverHighlight:"styles-module__hoverHighlight___ogakW",enter:"styles-module__enter___WFIki",hoverHighlightIn:"styles-module__hoverHighlightIn___6WYHY",multiSelectOutline:"styles-module__multiSelectOutline___cSJ-m",fadeIn:"styles-module__fadeIn___b9qmf",exit:"styles-module__exit___fyOJ0",singleSelectOutline:"styles-module__singleSelectOutline___QhX-O",hoverTooltip:"styles-module__hoverTooltip___bvLk7",hoverTooltipIn:"styles-module__hoverTooltipIn___FYGQx",hoverReactPath:"styles-module__hoverReactPath___gx1IJ",hoverElementName:"styles-module__hoverElementName___QMLMl",marker:"styles-module__marker___6sQrs",clearing:"styles-module__clearing___FQ--7",markerIn:"styles-module__markerIn___5FaAP",markerOut:"styles-module__markerOut___GU5jX",pending:"styles-module__pending___2IHLC",fixed:"styles-module__fixed___dBMHC",multiSelect:"styles-module__multiSelect___YWiuz",hovered:"styles-module__hovered___ZgXIy",renumber:"styles-module__renumber___nCTxD",renumberRoll:"styles-module__renumberRoll___Wgbq3",markerTooltip:"styles-module__markerTooltip___aLJID",tooltipIn:"styles-module__tooltipIn___0N31w",markerQuote:"styles-module__markerQuote___FHmrz",markerNote:"styles-module__markerNote___QkrrS",markerHint:"styles-module__markerHint___2iF-6",settingsPanel:"styles-module__settingsPanel___OxX3Y",settingsHeader:"styles-module__settingsHeader___pwDY9",settingsBrand:"styles-module__settingsBrand___0gJeM",settingsBrandSlash:"styles-module__settingsBrandSlash___uTG18",settingsVersion:"styles-module__settingsVersion___TUcFq",settingsSection:"styles-module__settingsSection___m-YM2",settingsLabel:"styles-module__settingsLabel___8UjfX",cycleButton:"styles-module__cycleButton___FMKfw",cycleDot:"styles-module__cycleDot___nPgLY",dropdownButton:"styles-module__dropdownButton___16NPz",toggleLabel:"styles-module__toggleLabel___Xm8Aa",customCheckbox:"styles-module__customCheckbox___U39ax",sliderLabel:"styles-module__sliderLabel___U8sPr",slider:"styles-module__slider___GLdxp",themeToggle:"styles-module__themeToggle___2rUjA",settingsOption:"styles-module__settingsOption___UNa12",selected:"styles-module__selected___OwRqP",settingsPanelContainer:"styles-module__settingsPanelContainer___Xksv8",settingsPage:"styles-module__settingsPage___6YfHH",slideLeft:"styles-module__slideLeft___Ps01J",automationsPage:"styles-module__automationsPage___uvCq6",slideIn:"styles-module__slideIn___4-qXe",settingsNavLink:"styles-module__settingsNavLink___wCzJt",settingsNavLinkRight:"styles-module__settingsNavLinkRight___ZWwhj",mcpNavIndicator:"styles-module__mcpNavIndicator___cl9pO",mcpPulse:"styles-module__mcpPulse___uNggr",settingsBackButton:"styles-module__settingsBackButton___bIe2j",automationHeader:"styles-module__automationHeader___InP0r",automationDescription:"styles-module__automationDescription___NKlmo",learnMoreLink:"styles-module__learnMoreLink___8xv-x",autoSendRow:"styles-module__autoSendRow___UblX5",autoSendLabel:"styles-module__autoSendLabel___icDc2",active:"styles-module__active___-zoN6",webhookUrlInput:"styles-module__webhookUrlInput___2375C",settingsSectionExtraPadding:"styles-module__settingsSectionExtraPadding___jdhFV",settingsSectionGrow:"styles-module__settingsSectionGrow___h-5HZ",settingsRow:"styles-module__settingsRow___3sdhc",settingsRowMarginTop:"styles-module__settingsRowMarginTop___zA0Sp",dropdownContainer:"styles-module__dropdownContainer___BVnxe",settingsRowDisabled:"styles-module__settingsRowDisabled___EgS0V",toggleSwitch:"styles-module__toggleSwitch___l4Ygm",cycleButtonText:"styles-module__cycleButtonText___fD1LR",cycleTextIn:"styles-module__cycleTextIn___Q6zJf",cycleDots:"styles-module__cycleDots___LWuoQ",dropdownMenu:"styles-module__dropdownMenu___k73ER",scaleIn:"styles-module__scaleIn___c-r1K",dropdownItem:"styles-module__dropdownItem___ylsLj",settingsLabelMarker:"styles-module__settingsLabelMarker___ewdtV",settingsOptions:"styles-module__settingsOptions___LyrBA",sliderContainer:"styles-module__sliderContainer___ducXj",sliderLabels:"styles-module__sliderLabels___FhLDB",colorOptions:"styles-module__colorOptions___iHCNX",colorOption:"styles-module__colorOption___IodiY",colorOptionRing:"styles-module__colorOptionRing___U2xpo",settingsToggle:"styles-module__settingsToggle___fBrFn",settingsToggleMarginBottom:"styles-module__settingsToggleMarginBottom___MZUyF",mcpStatusDot:"styles-module__mcpStatusDot___ibgkc",disconnected:"styles-module__disconnected___cHPxR",mcpPulseError:"styles-module__mcpPulseError___fov9B",drawCanvas:"styles-module__drawCanvas___7cG9U",dragSelection:"styles-module__dragSelection___kZLq2",dragCount:"styles-module__dragCount___KM90j",highlightsContainer:"styles-module__highlightsContainer___-0xzG",selectedElementHighlight:"styles-module__selectedElementHighlight___fyVlI",scaleOut:"styles-module__scaleOut___Wctwz",slideUp:"styles-module__slideUp___kgD36",slideDown:"styles-module__slideDown___zcdje"};function Fv({active:e}){return(0,Ya.jsxs)("svg",{className:Y.toggleGlyph,"data-active":e,width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",children:[(0,Ya.jsx)("path",{className:Y.toggleTopLine,d:"M5.5 6.75H18.5"}),(0,Ya.jsx)("path",{className:Y.toggleMiddleLine,d:"M5.5 12H11.5"}),(0,Ya.jsx)("path",{className:Y.toggleBottomLine,d:"M5.5 17.25H9.25"}),(0,Ya.jsx)("path",{className:Y.toggleSparkle,d:"M16 12.75L16.5179 13.9677C16.8078 14.6494 17.3506 15.1922 18.0323 15.4821L19.25 16L18.0323 16.5179C17.3506 16.8078 16.8078 17.3506 16.5179 18.0323L16 19.25L15.4821 18.0323C15.1922 17.3506 14.6494 16.8078 13.9677 16.5179L12.75 16L13.9677 15.4821C14.6494 15.1922 15.1922 14.6494 15.4821 13.9677L16 12.75Z"})]})}var ne={navigation:{width:800,height:56},hero:{width:800,height:320},header:{width:800,height:80},section:{width:800,height:400},sidebar:{width:240,height:400},footer:{width:800,height:160},modal:{width:480,height:300},card:{width:280,height:240},text:{width:400,height:120},image:{width:320,height:200},video:{width:480,height:270},table:{width:560,height:220},grid:{width:600,height:300},list:{width:300,height:180},chart:{width:400,height:240},button:{width:140,height:40},input:{width:280,height:56},form:{width:360,height:320},tabs:{width:480,height:240},dropdown:{width:200,height:200},toggle:{width:44,height:24},search:{width:320,height:44},avatar:{width:48,height:48},badge:{width:80,height:28},breadcrumb:{width:300,height:24},pagination:{width:300,height:36},progress:{width:240,height:8},divider:{width:600,height:1},accordion:{width:400,height:200},carousel:{width:600,height:300},toast:{width:320,height:64},tooltip:{width:180,height:40},pricing:{width:300,height:360},testimonial:{width:360,height:200},cta:{width:600,height:160},alert:{width:400,height:56},banner:{width:800,height:48},stat:{width:200,height:120},stepper:{width:480,height:48},tag:{width:72,height:28},rating:{width:160,height:28},map:{width:480,height:300},timeline:{width:360,height:320},fileUpload:{width:360,height:180},codeBlock:{width:480,height:200},calendar:{width:300,height:300},notification:{width:360,height:72},productCard:{width:280,height:360},profile:{width:280,height:200},drawer:{width:320,height:400},popover:{width:240,height:160},logo:{width:120,height:40},faq:{width:560,height:320},gallery:{width:560,height:360},checkbox:{width:20,height:20},radio:{width:20,height:20},slider:{width:240,height:32},datePicker:{width:300,height:320},skeleton:{width:320,height:120},chip:{width:96,height:32},icon:{width:24,height:24},spinner:{width:32,height:32},feature:{width:360,height:200},team:{width:560,height:280},login:{width:360,height:360},contact:{width:400,height:320}},b5=[{section:"Layout",items:[{type:"navigation",label:"Navigation",...ne.navigation},{type:"header",label:"Header",...ne.header},{type:"hero",label:"Hero",...ne.hero},{type:"section",label:"Section",...ne.section},{type:"sidebar",label:"Sidebar",...ne.sidebar},{type:"footer",label:"Footer",...ne.footer},{type:"modal",label:"Modal",...ne.modal},{type:"banner",label:"Banner",...ne.banner},{type:"drawer",label:"Drawer",...ne.drawer},{type:"popover",label:"Popover",...ne.popover},{type:"divider",label:"Divider",...ne.divider}]},{section:"Content",items:[{type:"card",label:"Card",...ne.card},{type:"text",label:"Text",...ne.text},{type:"image",label:"Image",...ne.image},{type:"video",label:"Video",...ne.video},{type:"table",label:"Table",...ne.table},{type:"grid",label:"Grid",...ne.grid},{type:"list",label:"List",...ne.list},{type:"chart",label:"Chart",...ne.chart},{type:"codeBlock",label:"Code Block",...ne.codeBlock},{type:"map",label:"Map",...ne.map},{type:"timeline",label:"Timeline",...ne.timeline},{type:"calendar",label:"Calendar",...ne.calendar},{type:"accordion",label:"Accordion",...ne.accordion},{type:"carousel",label:"Carousel",...ne.carousel},{type:"logo",label:"Logo",...ne.logo},{type:"faq",label:"FAQ",...ne.faq},{type:"gallery",label:"Gallery",...ne.gallery}]},{section:"Controls",items:[{type:"button",label:"Button",...ne.button},{type:"input",label:"Input",...ne.input},{type:"search",label:"Search",...ne.search},{type:"form",label:"Form",...ne.form},{type:"tabs",label:"Tabs",...ne.tabs},{type:"dropdown",label:"Dropdown",...ne.dropdown},{type:"toggle",label:"Toggle",...ne.toggle},{type:"stepper",label:"Stepper",...ne.stepper},{type:"rating",label:"Rating",...ne.rating},{type:"fileUpload",label:"File Upload",...ne.fileUpload},{type:"checkbox",label:"Checkbox",...ne.checkbox},{type:"radio",label:"Radio",...ne.radio},{type:"slider",label:"Slider",...ne.slider},{type:"datePicker",label:"Date Picker",...ne.datePicker}]},{section:"Elements",items:[{type:"avatar",label:"Avatar",...ne.avatar},{type:"badge",label:"Badge",...ne.badge},{type:"tag",label:"Tag",...ne.tag},{type:"breadcrumb",label:"Breadcrumb",...ne.breadcrumb},{type:"pagination",label:"Pagination",...ne.pagination},{type:"progress",label:"Progress",...ne.progress},{type:"alert",label:"Alert",...ne.alert},{type:"toast",label:"Toast",...ne.toast},{type:"notification",label:"Notification",...ne.notification},{type:"tooltip",label:"Tooltip",...ne.tooltip},{type:"stat",label:"Stat",...ne.stat},{type:"skeleton",label:"Skeleton",...ne.skeleton},{type:"chip",label:"Chip",...ne.chip},{type:"icon",label:"Icon",...ne.icon},{type:"spinner",label:"Spinner",...ne.spinner}]},{section:"Blocks",items:[{type:"pricing",label:"Pricing",...ne.pricing},{type:"testimonial",label:"Testimonial",...ne.testimonial},{type:"cta",label:"CTA",...ne.cta},{type:"productCard",label:"Product Card",...ne.productCard},{type:"profile",label:"Profile",...ne.profile},{type:"feature",label:"Feature",...ne.feature},{type:"team",label:"Team",...ne.team},{type:"login",label:"Login",...ne.login},{type:"contact",label:"Contact",...ne.contact}]}],El={};for(let e of b5)for(let t of e.items)El[t.type]=t;function j({w:e,h:t=3,strong:n}){return(0,u.jsx)("div",{style:{width:typeof e=="number"?`${e}px`:e,height:t,borderRadius:2,background:n?"var(--agd-bar-strong)":"var(--agd-bar)",flexShrink:0}})}function bt({w:e,h:t,radius:n=3,style:l}){return(0,u.jsx)("div",{style:{width:typeof e=="number"?`${e}px`:e,height:typeof t=="number"?`${t}px`:t,borderRadius:n,border:"1px dashed var(--agd-stroke)",background:"var(--agd-fill)",flexShrink:0,...l}})}function Tn({size:e}){return(0,u.jsx)("div",{style:{width:e,height:e,borderRadius:"50%",border:"1px dashed var(--agd-stroke)",background:"var(--agd-fill)",flexShrink:0}})}function Zv({width:e,height:t}){let n=Math.max(8,t*.2);return(0,u.jsxs)("div",{style:{display:"flex",alignItems:"center",height:"100%",padding:`0 ${n}px`,gap:e*.02},children:[(0,u.jsx)(bt,{w:Math.max(20,t*.5),h:Math.max(12,t*.4),radius:2}),(0,u.jsxs)("div",{style:{flex:1,display:"flex",gap:e*.03,marginLeft:e*.04},children:[(0,u.jsx)(j,{w:e*.06}),(0,u.jsx)(j,{w:e*.07}),(0,u.jsx)(j,{w:e*.05}),(0,u.jsx)(j,{w:e*.06})]}),(0,u.jsx)(bt,{w:e*.1,h:Math.min(28,t*.5),radius:4})]})}function Kv({width:e,height:t,text:n}){return(0,u.jsxs)("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",height:"100%",gap:t*.05},children:[n?(0,u.jsx)("span",{style:{fontSize:Math.min(20,t*.08),fontWeight:600,color:"var(--agd-text-3)",textAlign:"center",maxWidth:"80%"},children:n}):(0,u.jsx)(j,{w:e*.5,h:Math.max(6,t*.04),strong:!0}),(0,u.jsx)(j,{w:e*.6}),(0,u.jsx)(j,{w:e*.4}),(0,u.jsx)(bt,{w:Math.min(140,e*.2),h:Math.min(36,t*.12),radius:6,style:{marginTop:t*.06}})]})}function Jv({width:e,height:t}){let n=Math.max(3,Math.floor(t/36));return(0,u.jsxs)("div",{style:{padding:e*.08,display:"flex",flexDirection:"column",gap:t*.03},children:[(0,u.jsx)(j,{w:e*.6,h:4,strong:!0}),Array.from({length:n},(l,o)=>(0,u.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:6},children:[(0,u.jsx)(bt,{w:10,h:10,radius:2}),(0,u.jsx)(j,{w:e*(.4+o*17%30/100)})]},o))]})}function Pv({width:e,height:t}){let n=Math.max(2,Math.min(4,Math.floor(e/160)));return(0,u.jsx)("div",{style:{display:"flex",padding:`${t*.12}px ${e*.03}px`,gap:e*.05},children:Array.from({length:n},(l,o)=>(0,u.jsxs)("div",{style:{flex:1,display:"flex",flexDirection:"column",gap:4},children:[(0,u.jsx)(j,{w:"60%",h:3,strong:!0}),(0,u.jsx)(j,{w:"80%",h:2}),(0,u.jsx)(j,{w:"70%",h:2}),(0,u.jsx)(j,{w:"60%",h:2})]},o))})}function ew({width:e,height:t}){return(0,u.jsxs)("div",{style:{height:"100%",display:"flex",flexDirection:"column"},children:[(0,u.jsxs)("div",{style:{padding:"10px 12px",borderBottom:"1px solid var(--agd-stroke)",display:"flex",alignItems:"center",justifyContent:"space-between"},children:[(0,u.jsx)(j,{w:e*.3,h:4,strong:!0}),(0,u.jsx)("div",{style:{width:14,height:14,border:"1px solid var(--agd-stroke)",borderRadius:3}})]}),(0,u.jsxs)("div",{style:{flex:1,padding:12,display:"flex",flexDirection:"column",gap:6},children:[(0,u.jsx)(j,{w:"90%"}),(0,u.jsx)(j,{w:"70%"}),(0,u.jsx)(j,{w:"80%"})]}),(0,u.jsxs)("div",{style:{padding:"10px 12px",borderTop:"1px solid var(--agd-stroke)",display:"flex",justifyContent:"flex-end",gap:8},children:[(0,u.jsx)(bt,{w:70,h:26,radius:4}),(0,u.jsx)(bt,{w:70,h:26,radius:4,style:{background:"var(--agd-bar)"}})]})]})}function tw({width:e,height:t}){return(0,u.jsxs)("div",{style:{height:"100%",display:"flex",flexDirection:"column"},children:[(0,u.jsx)("div",{style:{height:"40%",background:"var(--agd-fill)",borderBottom:"1px dashed var(--agd-stroke)"}}),(0,u.jsxs)("div",{style:{flex:1,padding:10,display:"flex",flexDirection:"column",gap:5},children:[(0,u.jsx)(j,{w:"70%",h:4,strong:!0}),(0,u.jsx)(j,{w:"95%",h:2}),(0,u.jsx)(j,{w:"85%",h:2}),(0,u.jsx)(j,{w:"50%",h:2})]})]})}function nw({width:e,height:t,text:n}){if(n)return(0,u.jsx)("div",{style:{padding:4,fontSize:Math.min(14,t*.3),lineHeight:1.5,color:"var(--agd-text-3)",wordBreak:"break-word",overflow:"hidden"},children:n});let l=Math.max(2,Math.floor(t/18));return(0,u.jsxs)("div",{style:{display:"flex",flexDirection:"column",gap:6,padding:4},children:[(0,u.jsx)(j,{w:e*.6,h:5,strong:!0}),Array.from({length:l},(o,a)=>(0,u.jsx)(j,{w:`${70+a*13%25}%`,h:2},a))]})}function lw({width:e,height:t}){return(0,u.jsx)("div",{style:{height:"100%",position:"relative"},children:(0,u.jsxs)("svg",{width:"100%",height:"100%",viewBox:`0 0 ${e} ${t}`,preserveAspectRatio:"none",fill:"none",children:[(0,u.jsx)("line",{x1:"0",y1:"0",x2:e,y2:t,stroke:"var(--agd-stroke)",strokeWidth:"1"}),(0,u.jsx)("line",{x1:e,y1:"0",x2:"0",y2:t,stroke:"var(--agd-stroke)",strokeWidth:"1"}),(0,u.jsx)("circle",{cx:e*.3,cy:t*.3,r:Math.min(e,t)*.08,fill:"var(--agd-fill)",stroke:"var(--agd-stroke)",strokeWidth:"0.8"})]})})}function ow({width:e,height:t}){let n=Math.max(2,Math.min(5,Math.floor(e/100))),l=Math.max(2,Math.min(6,Math.floor(t/32)));return(0,u.jsxs)("div",{style:{height:"100%",display:"flex",flexDirection:"column"},children:[(0,u.jsx)("div",{style:{display:"flex",borderBottom:"1px solid var(--agd-stroke)",padding:"6px 0"},children:Array.from({length:n},(o,a)=>(0,u.jsx)("div",{style:{flex:1,padding:"0 8px"},children:(0,u.jsx)(j,{w:"70%",h:3,strong:!0})},a))}),Array.from({length:l},(o,a)=>(0,u.jsx)("div",{style:{display:"flex",borderBottom:"1px solid rgba(255,255,255,0.03)",padding:"6px 0"},children:Array.from({length:n},(i,r)=>(0,u.jsx)("div",{style:{flex:1,padding:"0 8px"},children:(0,u.jsx)(j,{w:`${50+(a*7+r*13)%40}%`,h:2})},r))},a))]})}function aw({width:e,height:t}){let n=Math.max(2,Math.floor(t/28));return(0,u.jsx)("div",{style:{display:"flex",flexDirection:"column",gap:4,padding:4},children:Array.from({length:n},(l,o)=>(0,u.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:8,padding:"4px 0"},children:[(0,u.jsx)(Tn,{size:8}),(0,u.jsx)(j,{w:`${55+o*17%35}%`,h:2})]},o))})}function iw({width:e,height:t,text:n}){return(0,u.jsx)("div",{style:{height:"100%",borderRadius:Math.min(8,t/3),border:"1px solid var(--agd-stroke)",background:"var(--agd-fill)",display:"flex",alignItems:"center",justifyContent:"center"},children:n?(0,u.jsx)("span",{style:{fontSize:Math.min(13,t*.4),fontWeight:500,color:"var(--agd-text-3)",letterSpacing:"-0.01em"},children:n}):(0,u.jsx)(j,{w:Math.max(20,e*.5),h:3,strong:!0})})}function rw({width:e,height:t}){return(0,u.jsxs)("div",{style:{display:"flex",flexDirection:"column",gap:4,height:"100%",justifyContent:"center"},children:[(0,u.jsx)(j,{w:Math.min(80,e*.3),h:2}),(0,u.jsx)("div",{style:{height:Math.min(36,t*.6),borderRadius:4,border:"1px dashed var(--agd-stroke)",background:"var(--agd-fill)",display:"flex",alignItems:"center",paddingLeft:8},children:(0,u.jsx)(j,{w:"40%",h:2})})]})}function sw({width:e,height:t}){let n=Math.max(2,Math.min(5,Math.floor(t/56)));return(0,u.jsxs)("div",{style:{display:"flex",flexDirection:"column",gap:t*.04,padding:8},children:[Array.from({length:n},(l,o)=>(0,u.jsxs)("div",{style:{display:"flex",flexDirection:"column",gap:4},children:[(0,u.jsx)(j,{w:60+o*17%30,h:2}),(0,u.jsx)(bt,{w:"100%",h:28,radius:4})]},o)),(0,u.jsx)(bt,{w:Math.min(120,e*.35),h:30,radius:6,style:{marginTop:8,alignSelf:"flex-end",background:"var(--agd-bar)"}})]})}function cw({width:e,height:t}){let n=Math.max(2,Math.min(4,Math.floor(e/120)));return(0,u.jsxs)("div",{style:{height:"100%",display:"flex",flexDirection:"column"},children:[(0,u.jsx)("div",{style:{display:"flex",gap:2,borderBottom:"1px solid var(--agd-stroke)"},children:Array.from({length:n},(l,o)=>(0,u.jsx)("div",{style:{padding:"8px 12px",borderBottom:o===0?"2px solid var(--agd-bar-strong)":"none"},children:(0,u.jsx)(j,{w:60,h:3,strong:o===0})},o))}),(0,u.jsxs)("div",{style:{flex:1,padding:12,display:"flex",flexDirection:"column",gap:6},children:[(0,u.jsx)(j,{w:"80%",h:2}),(0,u.jsx)(j,{w:"65%",h:2}),(0,u.jsx)(j,{w:"75%",h:2})]})]})}function uw({width:e,height:t}){let n=Math.min(e,t)/2;return(0,u.jsxs)("svg",{width:"100%",height:"100%",viewBox:`0 0 ${e} ${t}`,fill:"none",children:[(0,u.jsx)("circle",{cx:e/2,cy:t/2,r:n-1,stroke:"var(--agd-stroke)",fill:"var(--agd-fill)",strokeWidth:"1.5",strokeDasharray:"3 2"}),(0,u.jsx)("circle",{cx:e/2,cy:t*.38,r:n*.28,stroke:"var(--agd-stroke)",fill:"var(--agd-fill)",strokeWidth:"0.8"}),(0,u.jsx)("path",{d:`M${e/2-n*.55} ${t*.78} C${e/2-n*.55} ${t*.55} ${e/2+n*.55} ${t*.55} ${e/2+n*.55} ${t*.78}`,stroke:"var(--agd-stroke)",fill:"var(--agd-fill)",strokeWidth:"0.8"})]})}function dw({width:e,height:t}){return(0,u.jsx)("div",{style:{height:"100%",borderRadius:t/2,border:"1px solid var(--agd-stroke)",background:"var(--agd-fill)",display:"flex",alignItems:"center",justifyContent:"center"},children:(0,u.jsx)(j,{w:Math.max(16,e*.5),h:2,strong:!0})})}function _w({width:e,height:t}){return(0,u.jsxs)("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",height:"100%",gap:t*.08},children:[(0,u.jsx)(j,{w:e*.5,h:Math.max(5,t*.06),strong:!0}),(0,u.jsx)(j,{w:e*.35})]})}function fw({width:e,height:t}){return(0,u.jsxs)("div",{style:{display:"flex",flexDirection:"column",height:"100%",gap:t*.04,padding:e*.04},children:[(0,u.jsx)(j,{w:e*.3,h:4,strong:!0}),(0,u.jsx)(j,{w:e*.7}),(0,u.jsx)(j,{w:e*.5}),(0,u.jsxs)("div",{style:{flex:1,display:"flex",gap:e*.03,marginTop:t*.06},children:[(0,u.jsx)(bt,{w:"33%",h:"100%",radius:4}),(0,u.jsx)(bt,{w:"33%",h:"100%",radius:4}),(0,u.jsx)(bt,{w:"33%",h:"100%",radius:4})]})]})}function hw({width:e,height:t}){let n=Math.max(2,Math.min(4,Math.floor(e/140))),l=Math.max(1,Math.min(3,Math.floor(t/120)));return(0,u.jsx)("div",{style:{display:"grid",gridTemplateColumns:`repeat(${n}, 1fr)`,gridTemplateRows:`repeat(${l}, 1fr)`,gap:6,height:"100%"},children:Array.from({length:n*l},(o,a)=>(0,u.jsx)(bt,{w:"100%",h:"100%",radius:4},a))})}function mw({width:e,height:t}){let n=Math.max(2,Math.floor((t-32)/28));return(0,u.jsxs)("div",{style:{height:"100%",display:"flex",flexDirection:"column"},children:[(0,u.jsx)("div",{style:{padding:"6px 8px",borderBottom:"1px solid var(--agd-stroke)"},children:(0,u.jsx)(j,{w:e*.5,h:3,strong:!0})}),(0,u.jsx)("div",{style:{flex:1,padding:4,display:"flex",flexDirection:"column",gap:2},children:Array.from({length:n},(l,o)=>(0,u.jsx)("div",{style:{padding:"4px 6px",borderRadius:3,background:o===0?"var(--agd-fill)":"transparent"},children:(0,u.jsx)(j,{w:`${50+o*17%35}%`,h:2,strong:o===0})},o))})]})}function gw({width:e,height:t}){let n=Math.min(e,t)/2;return(0,u.jsxs)("svg",{width:"100%",height:"100%",viewBox:`0 0 ${e} ${t}`,fill:"none",children:[(0,u.jsx)("rect",{x:"1",y:"1",width:e-2,height:t-2,rx:n,stroke:"var(--agd-stroke)",strokeWidth:"1"}),(0,u.jsx)("circle",{cx:e-n,cy:t/2,r:n*.7,fill:"var(--agd-bar)"})]})}function pw({width:e,height:t}){let n=Math.min(t/2,20);return(0,u.jsxs)("div",{style:{height:"100%",borderRadius:n,border:"1px dashed var(--agd-stroke)",background:"var(--agd-fill)",display:"flex",alignItems:"center",padding:`0 ${n*.6}px`,gap:6},children:[(0,u.jsx)(Tn,{size:Math.min(14,t*.4)}),(0,u.jsx)(j,{w:"50%",h:2})]})}function yw({width:e,height:t}){return(0,u.jsxs)("div",{style:{height:"100%",borderRadius:8,border:"1px dashed var(--agd-stroke)",background:"var(--agd-fill)",display:"flex",alignItems:"center",padding:"0 10px",gap:8},children:[(0,u.jsx)(Tn,{size:Math.min(20,t*.5)}),(0,u.jsxs)("div",{style:{flex:1,display:"flex",flexDirection:"column",gap:3},children:[(0,u.jsx)(j,{w:"60%",h:3,strong:!0}),(0,u.jsx)(j,{w:"80%",h:2})]}),(0,u.jsx)("div",{style:{width:14,height:14,border:"1px solid var(--agd-stroke)",borderRadius:3,flexShrink:0}})]})}function bw({width:e,height:t}){return(0,u.jsxs)("svg",{width:"100%",height:"100%",viewBox:`0 0 ${e} ${t}`,fill:"none",children:[(0,u.jsx)("rect",{x:"0",y:"0",width:e,height:t,rx:t/2,stroke:"var(--agd-stroke)",strokeWidth:"0.8"}),(0,u.jsx)("rect",{x:"1",y:"1",width:e*.65,height:t-2,rx:(t-2)/2,fill:"var(--agd-bar)"})]})}function xw({width:e,height:t}){let n=Math.max(3,Math.min(7,Math.floor(e/50))),l=e/(n*2);return(0,u.jsx)("div",{style:{height:"100%",display:"flex",alignItems:"flex-end",justifyContent:"space-around",padding:"0 4px",borderBottom:"1px solid var(--agd-stroke)"},children:Array.from({length:n},(o,a)=>{let i=30+(a*37+17)%55;return(0,u.jsx)(bt,{w:l,h:`${i}%`,radius:2},a)})})}function vw({width:e,height:t}){let n=Math.min(e,t)*.12;return(0,u.jsxs)("div",{style:{height:"100%",position:"relative",display:"flex",alignItems:"center",justifyContent:"center"},children:[(0,u.jsx)(bt,{w:"100%",h:"100%",radius:4}),(0,u.jsx)("div",{style:{position:"absolute",width:n*2,height:n*2,borderRadius:"50%",border:"1.5px solid var(--agd-stroke)",background:"var(--agd-fill)",display:"flex",alignItems:"center",justifyContent:"center"},children:(0,u.jsx)("div",{style:{width:0,height:0,borderLeft:`${n*.6}px solid var(--agd-bar-strong)`,borderTop:`${n*.4}px solid transparent`,borderBottom:`${n*.4}px solid transparent`,marginLeft:n*.15}})})]})}function ww({width:e,height:t}){return(0,u.jsxs)("div",{style:{height:"100%",display:"flex",flexDirection:"column",alignItems:"center"},children:[(0,u.jsx)("div",{style:{flex:1,width:"100%",borderRadius:6,border:"1px dashed var(--agd-stroke)",background:"var(--agd-fill)",display:"flex",alignItems:"center",justifyContent:"center"},children:(0,u.jsx)(j,{w:"60%",h:2})}),(0,u.jsx)("div",{style:{width:8,height:8,background:"var(--agd-fill)",border:"1px dashed var(--agd-stroke)",borderTop:"none",borderLeft:"none",transform:"rotate(45deg)",marginTop:-5}})]})}function kw({width:e,height:t}){let n=Math.max(2,Math.min(4,Math.floor(e/80)));return(0,u.jsx)("div",{style:{display:"flex",alignItems:"center",height:"100%",gap:4},children:Array.from({length:n},(l,o)=>(0,u.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:4},children:[o>0&&(0,u.jsx)("span",{style:{color:"var(--agd-stroke)",fontSize:10},children:"/"}),(0,u.jsx)(j,{w:40+o*13%20,h:2,strong:o===n-1})]},o))})}function Sw({width:e,height:t}){let n=Math.max(3,Math.min(5,Math.floor(e/40))),l=Math.min(28,t*.8);return(0,u.jsx)("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",height:"100%",gap:4},children:Array.from({length:n},(o,a)=>(0,u.jsx)(bt,{w:l,h:l,radius:4,style:a===1?{background:"var(--agd-bar)"}:void 0},a))})}function Cw({width:e}){return(0,u.jsx)("div",{style:{display:"flex",alignItems:"center",height:"100%"},children:(0,u.jsx)("div",{style:{width:"100%",height:1,background:"var(--agd-stroke)"}})})}function Mw({width:e,height:t}){let n=Math.max(2,Math.min(4,Math.floor(t/40)));return(0,u.jsx)("div",{style:{display:"flex",flexDirection:"column",height:"100%"},children:Array.from({length:n},(l,o)=>(0,u.jsxs)("div",{style:{borderBottom:"1px solid var(--agd-stroke)",padding:"8px 6px",display:"flex",alignItems:"center",justifyContent:"space-between",flex:o===0?2:1},children:[(0,u.jsx)(j,{w:`${40+o*17%25}%`,h:3,strong:!0}),(0,u.jsx)("span",{style:{fontSize:8,color:"var(--agd-stroke)"},children:o===0?"\u25BC":"\u25B6"})]},o))})}function Ew({width:e,height:t}){return(0,u.jsxs)("div",{style:{height:"100%",display:"flex",flexDirection:"column",gap:6},children:[(0,u.jsxs)("div",{style:{flex:1,display:"flex",gap:6,alignItems:"center"},children:[(0,u.jsx)("span",{style:{fontSize:12,color:"var(--agd-stroke)"},children:"\u2039"}),(0,u.jsx)(bt,{w:"100%",h:"100%",radius:4}),(0,u.jsx)("span",{style:{fontSize:12,color:"var(--agd-stroke)"},children:"\u203A"})]}),(0,u.jsxs)("div",{style:{display:"flex",justifyContent:"center",gap:4},children:[(0,u.jsx)(Tn,{size:5}),(0,u.jsx)(Tn,{size:5}),(0,u.jsx)(Tn,{size:5})]})]})}function Tw({width:e,height:t}){return(0,u.jsxs)("div",{style:{height:"100%",display:"flex",flexDirection:"column",alignItems:"center",padding:10,gap:t*.04},children:[(0,u.jsx)(j,{w:e*.4,h:3,strong:!0}),(0,u.jsx)(j,{w:e*.3,h:6,strong:!0}),(0,u.jsx)("div",{style:{flex:1,display:"flex",flexDirection:"column",gap:4,width:"100%",padding:"8px 0"},children:Array.from({length:4},(n,l)=>(0,u.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:4},children:[(0,u.jsx)(Tn,{size:5}),(0,u.jsx)(j,{w:`${50+l*17%35}%`,h:2})]},l))}),(0,u.jsx)(bt,{w:e*.7,h:Math.min(32,t*.1),radius:6,style:{background:"var(--agd-bar)"}})]})}function Aw({width:e,height:t}){return(0,u.jsxs)("div",{style:{height:"100%",display:"flex",flexDirection:"column",padding:10,gap:8},children:[(0,u.jsx)("span",{style:{fontSize:18,lineHeight:1,color:"var(--agd-stroke)",fontFamily:"serif"},children:"\u201C"}),(0,u.jsxs)("div",{style:{flex:1,display:"flex",flexDirection:"column",gap:4},children:[(0,u.jsx)(j,{w:"90%",h:2}),(0,u.jsx)(j,{w:"75%",h:2}),(0,u.jsx)(j,{w:"60%",h:2})]}),(0,u.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:6},children:[(0,u.jsx)(Tn,{size:20}),(0,u.jsxs)("div",{style:{display:"flex",flexDirection:"column",gap:2},children:[(0,u.jsx)(j,{w:60,h:3,strong:!0}),(0,u.jsx)(j,{w:40,h:2})]})]})]})}function Nw({width:e,height:t}){return(0,u.jsxs)("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",height:"100%",gap:t*.08},children:[(0,u.jsx)(j,{w:e*.5,h:Math.max(4,t*.05),strong:!0}),(0,u.jsx)(j,{w:e*.35}),(0,u.jsx)(bt,{w:Math.min(140,e*.25),h:Math.min(32,t*.15),radius:6,style:{marginTop:t*.04,background:"var(--agd-bar)"}})]})}function Dw({width:e,height:t}){return(0,u.jsxs)("div",{style:{height:"100%",borderRadius:6,border:"1px dashed var(--agd-stroke)",background:"var(--agd-fill)",display:"flex",alignItems:"center",padding:"0 10px",gap:8},children:[(0,u.jsx)("div",{style:{width:16,height:16,borderRadius:"50%",border:"1.5px solid var(--agd-bar-strong)",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0},children:(0,u.jsx)("div",{style:{width:2,height:6,background:"var(--agd-bar-strong)",borderRadius:1}})}),(0,u.jsxs)("div",{style:{flex:1,display:"flex",flexDirection:"column",gap:3},children:[(0,u.jsx)(j,{w:"40%",h:3,strong:!0}),(0,u.jsx)(j,{w:"70%",h:2})]})]})}function Rw({width:e,height:t}){return(0,u.jsxs)("div",{style:{height:"100%",background:"var(--agd-fill)",display:"flex",alignItems:"center",justifyContent:"center",gap:8,padding:"0 12px"},children:[(0,u.jsx)(j,{w:e*.4,h:3,strong:!0}),(0,u.jsx)(bt,{w:60,h:Math.min(24,t*.6),radius:4})]})}function Lw({width:e,height:t}){return(0,u.jsxs)("div",{style:{height:"100%",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",gap:t*.06},children:[(0,u.jsx)(j,{w:e*.5,h:2}),(0,u.jsx)(j,{w:e*.4,h:Math.max(8,t*.18),strong:!0}),(0,u.jsx)(j,{w:e*.3,h:2})]})}function zw({width:e,height:t}){let n=Math.max(3,Math.min(5,Math.floor(e/100))),l=Math.min(12,t*.35);return(0,u.jsx)("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",height:"100%",padding:"0 8px"},children:Array.from({length:n},(o,a)=>(0,u.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:0,flex:1},children:[(0,u.jsx)("div",{style:{width:l,height:l,borderRadius:"50%",border:"1.5px solid var(--agd-stroke)",background:a===0?"var(--agd-bar)":"transparent",flexShrink:0}}),a<n-1&&(0,u.jsx)("div",{style:{flex:1,height:1,background:"var(--agd-stroke)",margin:"0 4px"}})]},a))})}function Ow({width:e,height:t}){return(0,u.jsxs)("div",{style:{height:"100%",borderRadius:4,border:"1px solid var(--agd-stroke)",background:"var(--agd-fill)",display:"flex",alignItems:"center",justifyContent:"center",gap:4,padding:"0 6px"},children:[(0,u.jsx)(j,{w:Math.max(16,e*.5),h:2,strong:!0}),(0,u.jsx)("div",{style:{width:8,height:8,borderRadius:"50%",border:"1px solid var(--agd-stroke)",flexShrink:0}})]})}function Bw({width:e,height:t}){let l=Math.min(t*.7,e/7.5);return(0,u.jsx)("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",height:"100%",gap:l*.2},children:Array.from({length:5},(o,a)=>(0,u.jsx)("svg",{width:l,height:l,viewBox:"0 0 16 16",fill:"none",children:(0,u.jsx)("path",{d:"M8 1.5l2 4 4.5.7-3.25 3.1.75 4.5L8 11.4l-4 2.4.75-4.5L1.5 6.2 6 5.5z",stroke:"var(--agd-stroke)",strokeWidth:"0.8",fill:a<3?"var(--agd-bar)":"none"})},a))})}function $w({width:e,height:t}){return(0,u.jsxs)("div",{style:{height:"100%",position:"relative",borderRadius:4,border:"1px dashed var(--agd-stroke)",background:"var(--agd-fill)",overflow:"hidden"},children:[(0,u.jsxs)("svg",{width:"100%",height:"100%",viewBox:`0 0 ${e} ${t}`,fill:"none",style:{position:"absolute",inset:0},children:[(0,u.jsx)("line",{x1:0,y1:t*.3,x2:e,y2:t*.7,stroke:"var(--agd-stroke)",strokeWidth:"0.5",opacity:".2"}),(0,u.jsx)("line",{x1:0,y1:t*.6,x2:e,y2:t*.2,stroke:"var(--agd-stroke)",strokeWidth:"0.5",opacity:".15"}),(0,u.jsx)("line",{x1:e*.4,y1:0,x2:e*.6,y2:t,stroke:"var(--agd-stroke)",strokeWidth:"0.5",opacity:".15"})]}),(0,u.jsx)("div",{style:{position:"absolute",left:"50%",top:"40%",transform:"translate(-50%, -100%)"},children:(0,u.jsxs)("svg",{width:"16",height:"22",viewBox:"0 0 16 22",fill:"none",children:[(0,u.jsx)("path",{d:"M8 0C3.6 0 0 3.6 0 8c0 6 8 14 8 14s8-8 8-14c0-4.4-3.6-8-8-8z",fill:"var(--agd-bar)",opacity:".4"}),(0,u.jsx)("circle",{cx:"8",cy:"8",r:"3",fill:"var(--agd-fill)"})]})})]})}function Hw({width:e,height:t}){let n=Math.max(3,Math.min(5,Math.floor(t/60)));return(0,u.jsxs)("div",{style:{display:"flex",height:"100%",padding:"8px 0"},children:[(0,u.jsx)("div",{style:{width:16,display:"flex",flexDirection:"column",alignItems:"center"},children:Array.from({length:n},(l,o)=>(0,u.jsxs)("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",flex:1},children:[(0,u.jsx)(Tn,{size:8}),o<n-1&&(0,u.jsx)("div",{style:{flex:1,width:1,background:"var(--agd-stroke)"}})]},o))}),(0,u.jsx)("div",{style:{flex:1,display:"flex",flexDirection:"column",justifyContent:"space-around",paddingLeft:8},children:Array.from({length:n},(l,o)=>(0,u.jsxs)("div",{style:{display:"flex",flexDirection:"column",gap:3},children:[(0,u.jsx)(j,{w:`${35+o*13%25}%`,h:3,strong:!0}),(0,u.jsx)(j,{w:`${50+o*17%30}%`,h:2})]},o))})]})}function Uw({width:e,height:t}){return(0,u.jsxs)("div",{style:{height:"100%",borderRadius:8,border:"2px dashed var(--agd-stroke)",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",gap:t*.06},children:[(0,u.jsxs)("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",children:[(0,u.jsx)("path",{d:"M12 16V4m0 0l-4 4m4-4l4 4",stroke:"var(--agd-stroke)",strokeWidth:"1.5"}),(0,u.jsx)("path",{d:"M4 17v2a1 1 0 001 1h14a1 1 0 001-1v-2",stroke:"var(--agd-stroke)",strokeWidth:"1.5"})]}),(0,u.jsx)(j,{w:e*.4,h:2}),(0,u.jsx)(j,{w:e*.25,h:2})]})}function Yw({width:e,height:t}){let n=Math.max(3,Math.min(8,Math.floor(t/20)));return(0,u.jsxs)("div",{style:{height:"100%",borderRadius:6,background:"var(--agd-fill)",border:"1px solid var(--agd-stroke)",padding:8,display:"flex",flexDirection:"column",gap:4},children:[(0,u.jsxs)("div",{style:{display:"flex",gap:3,marginBottom:4},children:[(0,u.jsx)(Tn,{size:6}),(0,u.jsx)(Tn,{size:6}),(0,u.jsx)(Tn,{size:6})]}),Array.from({length:n},(l,o)=>(0,u.jsx)("div",{style:{display:"flex",gap:6,paddingLeft:o>0&&o<n-1?12:0},children:(0,u.jsx)(j,{w:`${25+o*23%50}%`,h:2,strong:o===0})},o))]})}function jw({width:e,height:t}){let o=Math.min((e-16)/7,(t-40)/6);return(0,u.jsxs)("div",{style:{height:"100%",display:"flex",flexDirection:"column"},children:[(0,u.jsxs)("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"6px 8px"},children:[(0,u.jsx)("span",{style:{fontSize:8,color:"var(--agd-stroke)"},children:"\u2039"}),(0,u.jsx)(j,{w:e*.3,h:3,strong:!0}),(0,u.jsx)("span",{style:{fontSize:8,color:"var(--agd-stroke)"},children:"\u203A"})]}),(0,u.jsxs)("div",{style:{display:"grid",gridTemplateColumns:"repeat(7, 1fr)",gap:2,padding:"0 4px",flex:1},children:[Array.from({length:7},(a,i)=>(0,u.jsx)("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",height:o*.6},children:(0,u.jsx)(j,{w:o*.5,h:2})},`h${i}`)),Array.from({length:35},(a,i)=>(0,u.jsx)("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",height:o},children:(0,u.jsx)("div",{style:{width:o*.6,height:o*.6,borderRadius:"50%",background:i===12?"var(--agd-bar)":"transparent",display:"flex",alignItems:"center",justifyContent:"center"},children:(0,u.jsx)("div",{style:{width:2,height:2,borderRadius:1,background:"var(--agd-bar-strong)",opacity:i===12?1:.3}})})},i))]})]})}function Xw({width:e,height:t}){return(0,u.jsxs)("div",{style:{height:"100%",borderRadius:8,border:"1px dashed var(--agd-stroke)",background:"var(--agd-fill)",display:"flex",alignItems:"center",padding:"0 10px",gap:8},children:[(0,u.jsx)(Tn,{size:Math.min(32,t*.55)}),(0,u.jsxs)("div",{style:{flex:1,display:"flex",flexDirection:"column",gap:3},children:[(0,u.jsx)(j,{w:"50%",h:3,strong:!0}),(0,u.jsx)(j,{w:"75%",h:2})]}),(0,u.jsx)(j,{w:30,h:2})]})}function qw({width:e,height:t}){return(0,u.jsxs)("div",{style:{height:"100%",display:"flex",flexDirection:"column"},children:[(0,u.jsx)("div",{style:{height:"50%",background:"var(--agd-fill)",borderBottom:"1px dashed var(--agd-stroke)"}}),(0,u.jsxs)("div",{style:{flex:1,padding:10,display:"flex",flexDirection:"column",gap:5},children:[(0,u.jsx)(j,{w:"65%",h:4,strong:!0}),(0,u.jsx)(j,{w:"40%",h:3}),(0,u.jsx)("div",{style:{flex:1}}),(0,u.jsxs)("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between"},children:[(0,u.jsx)(j,{w:"30%",h:5,strong:!0}),(0,u.jsx)(bt,{w:Math.min(70,e*.3),h:26,radius:4,style:{background:"var(--agd-bar)"}})]})]})]})}function Iw({width:e,height:t}){let n=Math.min(48,t*.3);return(0,u.jsxs)("div",{style:{height:"100%",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",gap:t*.06},children:[(0,u.jsx)(Tn,{size:n}),(0,u.jsx)(j,{w:e*.45,h:4,strong:!0}),(0,u.jsx)(j,{w:e*.3,h:2}),(0,u.jsxs)("div",{style:{display:"flex",gap:e*.08,marginTop:t*.04},children:[(0,u.jsxs)("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:2},children:[(0,u.jsx)(j,{w:20,h:3,strong:!0}),(0,u.jsx)(j,{w:28,h:2})]}),(0,u.jsxs)("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:2},children:[(0,u.jsx)(j,{w:20,h:3,strong:!0}),(0,u.jsx)(j,{w:28,h:2})]}),(0,u.jsxs)("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:2},children:[(0,u.jsx)(j,{w:20,h:3,strong:!0}),(0,u.jsx)(j,{w:28,h:2})]})]})]})}function Qw({width:e,height:t}){let n=Math.max(e*.6,80),l=Math.max(3,Math.floor(t/40));return(0,u.jsxs)("div",{style:{height:"100%",display:"flex"},children:[(0,u.jsx)("div",{style:{width:e-n,background:"var(--agd-fill)",opacity:.3}}),(0,u.jsxs)("div",{style:{flex:1,borderLeft:"1px solid var(--agd-stroke)",display:"flex",flexDirection:"column",padding:e*.04},children:[(0,u.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:t*.06},children:[(0,u.jsx)(j,{w:n*.4,h:4,strong:!0}),(0,u.jsx)("div",{style:{width:12,height:12,border:"1px solid var(--agd-stroke)",borderRadius:3}})]}),Array.from({length:l},(o,a)=>(0,u.jsx)("div",{style:{padding:"6px 0"},children:(0,u.jsx)(j,{w:`${50+a*17%35}%`,h:2,strong:a===0})},a))]})]})}function Ww({width:e,height:t}){return(0,u.jsxs)("div",{style:{height:"100%",display:"flex",flexDirection:"column",alignItems:"center"},children:[(0,u.jsxs)("div",{style:{flex:1,width:"100%",borderRadius:8,border:"1px dashed var(--agd-stroke)",background:"var(--agd-fill)",padding:10,display:"flex",flexDirection:"column",gap:5},children:[(0,u.jsx)(j,{w:"70%",h:3,strong:!0}),(0,u.jsx)(j,{w:"90%",h:2}),(0,u.jsx)(j,{w:"60%",h:2})]}),(0,u.jsx)("div",{style:{width:10,height:10,background:"var(--agd-fill)",border:"1px dashed var(--agd-stroke)",borderTop:"none",borderLeft:"none",transform:"rotate(45deg)",marginTop:-6}})]})}function Gw({width:e,height:t}){let n=Math.min(t*.7,e*.3);return(0,u.jsxs)("div",{style:{height:"100%",display:"flex",alignItems:"center",gap:e*.08},children:[(0,u.jsx)(bt,{w:n,h:n,radius:n*.25}),(0,u.jsx)(j,{w:e*.45,h:Math.max(4,t*.2),strong:!0})]})}function Vw({width:e,height:t}){let n=Math.max(2,Math.min(5,Math.floor(t/56)));return(0,u.jsx)("div",{style:{display:"flex",flexDirection:"column",height:"100%"},children:Array.from({length:n},(l,o)=>(0,u.jsxs)("div",{style:{borderBottom:"1px solid var(--agd-stroke)",padding:"8px 6px",display:"flex",alignItems:"center",justifyContent:"space-between",flex:o===0?2:1},children:[(0,u.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:6},children:[(0,u.jsx)("span",{style:{fontSize:9,fontWeight:700,color:"var(--agd-stroke)"},children:"Q"}),(0,u.jsx)(j,{w:e*(.3+o*13%25/100),h:3,strong:!0})]}),(0,u.jsx)("span",{style:{fontSize:8,color:"var(--agd-stroke)"},children:o===0?"\u25BC":"\u25B6"})]},o))})}function Fw({width:e,height:t}){let n=Math.max(2,Math.min(4,Math.floor(e/120))),l=Math.max(1,Math.min(3,Math.floor(t/120)));return(0,u.jsx)("div",{style:{display:"grid",gridTemplateColumns:`repeat(${n}, 1fr)`,gridTemplateRows:`repeat(${l}, 1fr)`,gap:4,height:"100%"},children:Array.from({length:n*l},(o,a)=>(0,u.jsx)("div",{style:{borderRadius:4,border:"1px dashed var(--agd-stroke)",background:"var(--agd-fill)",position:"relative",overflow:"hidden"},children:(0,u.jsxs)("svg",{width:"100%",height:"100%",viewBox:"0 0 100 100",preserveAspectRatio:"none",fill:"none",children:[(0,u.jsx)("line",{x1:"0",y1:"0",x2:"100",y2:"100",stroke:"var(--agd-stroke)",strokeWidth:"0.5"}),(0,u.jsx)("line",{x1:"100",y1:"0",x2:"0",y2:"100",stroke:"var(--agd-stroke)",strokeWidth:"0.5"})]})},a))})}function Zw({width:e,height:t}){let n=Math.min(e,t);return(0,u.jsxs)("svg",{width:"100%",height:"100%",viewBox:`0 0 ${e} ${t}`,fill:"none",children:[(0,u.jsx)("rect",{x:"1",y:(t-n+2)/2,width:n-2,height:n-2,rx:n*.15,stroke:"var(--agd-stroke)",strokeWidth:"1.5"}),(0,u.jsx)("path",{d:`M${n*.25} ${t/2}l${n*.2} ${n*.2} ${n*.3}-${n*.35}`,stroke:"var(--agd-bar)",strokeWidth:"1.5",fill:"none",strokeLinecap:"round",strokeLinejoin:"round"})]})}function Kw({width:e,height:t}){let n=Math.min(e,t)/2-1;return(0,u.jsxs)("svg",{width:"100%",height:"100%",viewBox:`0 0 ${e} ${t}`,fill:"none",children:[(0,u.jsx)("circle",{cx:e/2,cy:t/2,r:n,stroke:"var(--agd-stroke)",strokeWidth:"1.5"}),(0,u.jsx)("circle",{cx:e/2,cy:t/2,r:n*.45,fill:"var(--agd-bar)"})]})}function Jw({width:e,height:t}){let n=Math.max(2,t*.12),l=Math.min(t*.35,10),o=e*.55;return(0,u.jsxs)("div",{style:{height:"100%",display:"flex",alignItems:"center",position:"relative"},children:[(0,u.jsx)("div",{style:{width:"100%",height:n,borderRadius:n/2,background:"var(--agd-fill)",border:"1px solid var(--agd-stroke)",position:"relative"},children:(0,u.jsx)("div",{style:{width:o,height:"100%",borderRadius:n/2,background:"var(--agd-bar)"}})}),(0,u.jsx)("div",{style:{position:"absolute",left:o-l,width:l*2,height:l*2,borderRadius:"50%",border:"1.5px solid var(--agd-stroke)",background:"var(--agd-fill)"}})]})}function Pw({width:e,height:t}){let n=Math.min(36,t*.15),l=7,o=4,a=Math.min((e-16)/l,(t-n-40)/(o+1));return(0,u.jsxs)("div",{style:{height:"100%",display:"flex",flexDirection:"column",gap:4},children:[(0,u.jsxs)("div",{style:{height:n,borderRadius:4,border:"1px dashed var(--agd-stroke)",background:"var(--agd-fill)",display:"flex",alignItems:"center",padding:"0 8px",justifyContent:"space-between"},children:[(0,u.jsx)(j,{w:"40%",h:2}),(0,u.jsxs)("svg",{width:"12",height:"12",viewBox:"0 0 16 16",fill:"none",children:[(0,u.jsx)("rect",{x:"2",y:"3",width:"12",height:"11",rx:"1",stroke:"var(--agd-stroke)",strokeWidth:"1"}),(0,u.jsx)("line",{x1:"2",y1:"6",x2:"14",y2:"6",stroke:"var(--agd-stroke)",strokeWidth:"0.5"})]})]}),(0,u.jsxs)("div",{style:{flex:1,borderRadius:6,border:"1px dashed var(--agd-stroke)",background:"var(--agd-fill)",display:"flex",flexDirection:"column"},children:[(0,u.jsxs)("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"4px 6px"},children:[(0,u.jsx)("span",{style:{fontSize:7,color:"var(--agd-stroke)"},children:"\u2039"}),(0,u.jsx)(j,{w:e*.25,h:2,strong:!0}),(0,u.jsx)("span",{style:{fontSize:7,color:"var(--agd-stroke)"},children:"\u203A"})]}),(0,u.jsx)("div",{style:{display:"grid",gridTemplateColumns:`repeat(${l}, 1fr)`,gap:1,padding:"0 4px",flex:1},children:Array.from({length:l*o},(i,r)=>(0,u.jsx)("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",height:a},children:(0,u.jsx)("div",{style:{width:a*.5,height:a*.5,borderRadius:"50%",background:r===10?"var(--agd-bar)":"transparent"},children:(0,u.jsx)("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center"},children:(0,u.jsx)("div",{style:{width:1.5,height:1.5,borderRadius:1,background:"var(--agd-bar-strong)",opacity:r===10?1:.25}})})})},r))})]})]})}function e4({width:e,height:t}){return(0,u.jsxs)("div",{style:{height:"100%",display:"flex",flexDirection:"column",gap:t*.08,padding:4},children:[(0,u.jsx)("div",{style:{width:"100%",height:t*.2,borderRadius:4,background:"var(--agd-fill)"}}),(0,u.jsx)("div",{style:{width:"70%",height:Math.max(6,t*.1),borderRadius:3,background:"var(--agd-fill)"}}),(0,u.jsx)("div",{style:{width:"90%",height:Math.max(4,t*.06),borderRadius:3,background:"var(--agd-fill)"}}),(0,u.jsx)("div",{style:{width:"50%",height:Math.max(4,t*.06),borderRadius:3,background:"var(--agd-fill)"}})]})}function t4({width:e,height:t}){return(0,u.jsx)("div",{style:{height:"100%",display:"flex",alignItems:"center",gap:6},children:(0,u.jsxs)("div",{style:{height:"100%",flex:1,borderRadius:t/2,border:"1px solid var(--agd-stroke)",background:"var(--agd-fill)",display:"flex",alignItems:"center",padding:`0 ${t*.3}px`,gap:4},children:[(0,u.jsx)(j,{w:"60%",h:2,strong:!0}),(0,u.jsx)("div",{style:{width:Math.max(6,t*.3),height:Math.max(6,t*.3),borderRadius:"50%",border:"1px solid var(--agd-stroke)",flexShrink:0,marginLeft:"auto"}})]})})}function n4({width:e,height:t}){let n=Math.min(e,t);return(0,u.jsx)("svg",{width:"100%",height:"100%",viewBox:`0 0 ${e} ${t}`,fill:"none",children:(0,u.jsx)("path",{d:`M${e/2} ${(t-n)/2+n*.1}l${n*.12} ${n*.25} ${n*.28} ${n*.04}-${n*.2} ${n*.2} ${n*.05} ${n*.28}-${n*.25}-${n*.12}-${n*.25} ${n*.12} ${n*.05}-${n*.28}-${n*.2}-${n*.2} ${n*.28}-${n*.04}z`,stroke:"var(--agd-stroke)",strokeWidth:"1",fill:"var(--agd-fill)"})})}function l4({width:e,height:t}){let n=Math.min(e,t)/2-2;return(0,u.jsxs)("svg",{width:"100%",height:"100%",viewBox:`0 0 ${e} ${t}`,fill:"none",children:[(0,u.jsx)("circle",{cx:e/2,cy:t/2,r:n,stroke:"var(--agd-stroke)",strokeWidth:"1.5",opacity:".2"}),(0,u.jsx)("path",{d:`M${e/2} ${t/2-n}a${n} ${n} 0 0 1 ${n} ${n}`,stroke:"var(--agd-bar-strong)",strokeWidth:"1.5",strokeLinecap:"round"})]})}function o4({width:e,height:t}){let n=Math.min(36,t*.25,e*.12),l=Math.max(1,Math.min(3,Math.floor(t/80)));return(0,u.jsx)("div",{style:{display:"flex",flexDirection:"column",height:"100%",justifyContent:"space-around",padding:8},children:Array.from({length:l},(o,a)=>(0,u.jsxs)("div",{style:{display:"flex",gap:e*.04,alignItems:"flex-start"},children:[(0,u.jsx)(bt,{w:n,h:n,radius:n*.25}),(0,u.jsxs)("div",{style:{flex:1,display:"flex",flexDirection:"column",gap:4},children:[(0,u.jsx)(j,{w:`${40+a*13%20}%`,h:3,strong:!0}),(0,u.jsx)(j,{w:`${60+a*17%25}%`,h:2})]})]},a))})}function a4({width:e,height:t}){let n=Math.max(2,Math.min(4,Math.floor(e/120))),l=Math.min(36,t*.25);return(0,u.jsxs)("div",{style:{height:"100%",display:"flex",flexDirection:"column",alignItems:"center",gap:t*.06,padding:t*.06},children:[(0,u.jsx)(j,{w:e*.3,h:4,strong:!0}),(0,u.jsx)("div",{style:{display:"flex",gap:e*.06,justifyContent:"center",flex:1,alignItems:"center"},children:Array.from({length:n},(o,a)=>(0,u.jsxs)("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:6},children:[(0,u.jsx)(Tn,{size:l}),(0,u.jsx)(j,{w:e*.12,h:3,strong:!0}),(0,u.jsx)(j,{w:e*.08,h:2})]},a))})]})}function i4({width:e,height:t}){let n=Math.max(2,Math.min(3,Math.floor(t/80)));return(0,u.jsxs)("div",{style:{height:"100%",display:"flex",flexDirection:"column",alignItems:"center",padding:e*.06,gap:t*.04},children:[(0,u.jsx)(j,{w:e*.5,h:Math.max(5,t*.04),strong:!0}),(0,u.jsx)(j,{w:e*.35,h:2}),(0,u.jsx)("div",{style:{width:"100%",display:"flex",flexDirection:"column",gap:t*.03,marginTop:t*.04},children:Array.from({length:n},(l,o)=>(0,u.jsxs)("div",{style:{display:"flex",flexDirection:"column",gap:3},children:[(0,u.jsx)(j,{w:Math.min(60,e*.2),h:2}),(0,u.jsx)(bt,{w:"100%",h:Math.min(32,t*.1),radius:4})]},o))}),(0,u.jsx)(bt,{w:"100%",h:Math.min(36,t*.12),radius:6,style:{marginTop:t*.03,background:"var(--agd-bar)"}}),(0,u.jsx)(j,{w:e*.4,h:2})]})}function r4({width:e,height:t}){return(0,u.jsxs)("div",{style:{height:"100%",display:"flex",flexDirection:"column",padding:e*.04,gap:t*.03},children:[(0,u.jsx)(j,{w:e*.4,h:4,strong:!0}),(0,u.jsx)(j,{w:e*.6,h:2}),(0,u.jsxs)("div",{style:{display:"flex",gap:6,marginTop:t*.03},children:[(0,u.jsxs)("div",{style:{flex:1,display:"flex",flexDirection:"column",gap:3},children:[(0,u.jsx)(j,{w:50,h:2}),(0,u.jsx)(bt,{w:"100%",h:Math.min(28,t*.1),radius:4})]}),(0,u.jsxs)("div",{style:{flex:1,display:"flex",flexDirection:"column",gap:3},children:[(0,u.jsx)(j,{w:40,h:2}),(0,u.jsx)(bt,{w:"100%",h:Math.min(28,t*.1),radius:4})]})]}),(0,u.jsxs)("div",{style:{display:"flex",flexDirection:"column",gap:3},children:[(0,u.jsx)(j,{w:50,h:2}),(0,u.jsx)(bt,{w:"100%",h:Math.min(28,t*.1),radius:4})]}),(0,u.jsxs)("div",{style:{display:"flex",flexDirection:"column",gap:3,flex:1},children:[(0,u.jsx)(j,{w:60,h:2}),(0,u.jsx)(bt,{w:"100%",h:"100%",radius:4})]}),(0,u.jsx)(bt,{w:Math.min(120,e*.3),h:Math.min(30,t*.1),radius:6,style:{alignSelf:"flex-end",background:"var(--agd-bar)"}})]})}var s4={navigation:Zv,hero:Kv,sidebar:Jv,footer:Pv,modal:ew,card:tw,text:nw,image:lw,table:ow,list:aw,button:iw,input:rw,form:sw,tabs:cw,avatar:uw,badge:dw,header:_w,section:fw,grid:hw,dropdown:mw,toggle:gw,search:pw,toast:yw,progress:bw,chart:xw,video:vw,tooltip:ww,breadcrumb:kw,pagination:Sw,divider:Cw,accordion:Mw,carousel:Ew,pricing:Tw,testimonial:Aw,cta:Nw,alert:Dw,banner:Rw,stat:Lw,stepper:zw,tag:Ow,rating:Bw,map:$w,timeline:Hw,fileUpload:Uw,codeBlock:Yw,calendar:jw,notification:Xw,productCard:qw,profile:Iw,drawer:Qw,popover:Ww,logo:Gw,faq:Vw,gallery:Fw,checkbox:Zw,radio:Kw,slider:Jw,datePicker:Pw,skeleton:e4,chip:t4,icon:n4,spinner:l4,feature:o4,team:a4,login:i4,contact:r4};function c4({type:e,width:t,height:n,text:l}){let o=s4[e];return o?(0,u.jsx)("div",{style:{width:"100%",height:"100%",padding:8,position:"relative",pointerEvents:"none"},children:(0,u.jsx)(o,{width:t,height:n,text:l})}):(0,u.jsx)("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center"},children:(0,u.jsx)("span",{style:{fontSize:10,fontWeight:600,color:"var(--agd-text-3)",textTransform:"uppercase",letterSpacing:"0.06em",opacity:.5},children:e})})}var u4=`.styles-module__overlay___aWh-q svg[fill=none],
.styles-module__rearrangeOverlay___-3R3t svg[fill=none] {
  fill: none !important;
}
.styles-module__overlay___aWh-q svg[fill=none] :not([fill]),
.styles-module__rearrangeOverlay___-3R3t svg[fill=none] :not([fill]) {
  fill: none !important;
}

.styles-module__overlayExiting___iEmYr {
  opacity: 0 !important;
  transition: opacity 0.25s ease !important;
  pointer-events: none !important;
}

.styles-module__overlay___aWh-q {
  position: fixed;
  inset: 0;
  z-index: 99995;
  pointer-events: auto;
  cursor: default;
  animation: styles-module__overlayFadeIn___aECVy 0.15s ease;
  --agd-stroke: rgba(59, 130, 246, 0.35);
  --agd-fill: rgba(59, 130, 246, 0.06);
  --agd-bar: rgba(59, 130, 246, 0.18);
  --agd-bar-strong: rgba(59, 130, 246, 0.28);
  --agd-text-3: rgba(255, 255, 255, 0.6);
  --agd-surface: #fff;
}
.styles-module__overlay___aWh-q.styles-module__light___ORIft {
  --agd-surface: #fff;
}
.styles-module__overlay___aWh-q:not(.styles-module__light___ORIft) {
  --agd-surface: #141414;
}
.styles-module__overlay___aWh-q.styles-module__wireframe___itvQU {
  --agd-stroke: rgba(249, 115, 22, 0.35);
  --agd-fill: rgba(249, 115, 22, 0.06);
  --agd-bar: rgba(249, 115, 22, 0.18);
  --agd-bar-strong: rgba(249, 115, 22, 0.28);
}
.styles-module__overlay___aWh-q.styles-module__placing___45yD8 {
  cursor: crosshair;
}
.styles-module__overlay___aWh-q.styles-module__passthrough___xaFeE {
  pointer-events: none;
}

.styles-module__blankCanvas___t2Eue {
  position: fixed;
  inset: 0;
  z-index: 99994;
  background: #fff;
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.25s ease;
}
.styles-module__blankCanvas___t2Eue.styles-module__visible___OKKqX {
  opacity: var(--canvas-opacity, 1);
  pointer-events: auto;
}
.styles-module__blankCanvas___t2Eue::after {
  content: "";
  position: absolute;
  inset: 0;
  background-image: radial-gradient(circle, rgba(0, 0, 0, 0.08) 1px, transparent 1px);
  background-size: 24px 24px;
  background-position: 12px 12px;
  pointer-events: none;
  transition: opacity 0.2s ease;
}
.styles-module__blankCanvas___t2Eue.styles-module__gridActive___OZ-cf::after {
  opacity: 1;
  background-image: radial-gradient(circle, rgba(0, 0, 0, 0.22) 1px, transparent 1px);
}

.styles-module__paletteHeader___-Q5gQ {
  padding: 0 1rem 0.375rem;
}

.styles-module__paletteHeaderTitle___oHqZC {
  font-size: 0.8125rem;
  font-weight: 500;
  color: #fff;
  letter-spacing: -0.0094em;
}
.styles-module__light___ORIft .styles-module__paletteHeaderTitle___oHqZC {
  color: rgba(0, 0, 0, 0.85);
}

.styles-module__paletteHeaderDesc___6i74T {
  font-size: 0.6875rem;
  font-weight: 300;
  color: rgba(255, 255, 255, 0.45);
  margin-top: 2px;
  line-height: 14px;
}
.styles-module__light___ORIft .styles-module__paletteHeaderDesc___6i74T {
  color: rgba(0, 0, 0, 0.45);
}
.styles-module__paletteHeaderDesc___6i74T a {
  color: rgba(255, 255, 255, 0.8);
  text-decoration: underline dotted;
  text-decoration-color: rgba(255, 255, 255, 0.2);
  text-underline-offset: 2px;
  transition: color 0.15s ease;
}
.styles-module__paletteHeaderDesc___6i74T a:hover {
  color: #fff;
}
.styles-module__light___ORIft .styles-module__paletteHeaderDesc___6i74T a {
  color: rgba(0, 0, 0, 0.6);
  text-decoration-color: rgba(0, 0, 0, 0.2);
}
.styles-module__light___ORIft .styles-module__paletteHeaderDesc___6i74T a:hover {
  color: rgba(0, 0, 0, 0.85);
}

.styles-module__wireframePurposeWrap___To-tS {
  display: grid;
  grid-template-rows: 1fr;
  transition: grid-template-rows 0.2s ease, opacity 0.15s ease;
  opacity: 1;
}
.styles-module__wireframePurposeWrap___To-tS.styles-module__collapsed___Ms9vS {
  grid-template-rows: 0fr;
  opacity: 0;
}

.styles-module__wireframePurposeInner___Lrahs {
  overflow: hidden;
}

.styles-module__wireframePurposeInput___7EtBN {
  display: block;
  width: calc(100% - 2rem);
  margin: 0.25rem 1rem 0.375rem;
  padding: 0.375rem 0.5rem;
  font-size: 0.8125rem;
  font-family: inherit;
  color: rgba(255, 255, 255, 0.85);
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 0.375rem;
  resize: none;
  outline: none;
  transition: border-color 0.15s ease;
  letter-spacing: -0.0094em;
}
.styles-module__wireframePurposeInput___7EtBN::placeholder {
  color: rgba(255, 255, 255, 0.3);
}
.styles-module__wireframePurposeInput___7EtBN:focus {
  border-color: rgba(255, 255, 255, 0.3);
  background: rgba(255, 255, 255, 0.05);
}
.styles-module__light___ORIft .styles-module__wireframePurposeInput___7EtBN {
  color: rgba(0, 0, 0, 0.7);
  background: rgba(0, 0, 0, 0.03);
  border-color: rgba(0, 0, 0, 0.1);
}
.styles-module__light___ORIft .styles-module__wireframePurposeInput___7EtBN::placeholder {
  color: rgba(0, 0, 0, 0.3);
}
.styles-module__light___ORIft .styles-module__wireframePurposeInput___7EtBN:focus {
  border-color: rgba(0, 0, 0, 0.25);
  background: rgba(0, 0, 0, 0.05);
}

.styles-module__canvasToggle___-QqSy {
  width: calc(100% - 2rem);
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.375rem;
  margin: 0.25rem 1rem 0.25rem;
  padding: 0.375rem 0.5rem;
  border-radius: 0.5rem;
  cursor: pointer;
  border: 1px dashed rgba(255, 255, 255, 0.1);
  background: transparent;
  transition: background 0.15s ease, border-color 0.15s ease;
}
.styles-module__canvasToggle___-QqSy:hover {
  background: rgba(255, 255, 255, 0.04);
  border-color: rgba(255, 255, 255, 0.15);
}
.styles-module__canvasToggle___-QqSy.styles-module__active___hosp7 {
  background: #f97316;
  border-color: transparent;
  border-style: solid;
  box-shadow: none;
}
.styles-module__light___ORIft .styles-module__canvasToggle___-QqSy {
  border-color: rgba(0, 0, 0, 0.08);
}
.styles-module__light___ORIft .styles-module__canvasToggle___-QqSy:hover {
  background: rgba(0, 0, 0, 0.02);
  border-color: rgba(0, 0, 0, 0.12);
}
.styles-module__light___ORIft .styles-module__canvasToggle___-QqSy.styles-module__active___hosp7 {
  background: #f97316;
  border-color: transparent;
  border-style: solid;
  box-shadow: none;
}

.styles-module__canvasToggleIcon___7pJ82 {
  width: 14px;
  height: 14px;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  color: rgba(255, 255, 255, 0.35);
}
.styles-module__active___hosp7 .styles-module__canvasToggleIcon___7pJ82 {
  color: rgba(255, 255, 255, 0.85);
}
.styles-module__light___ORIft .styles-module__canvasToggleIcon___7pJ82 {
  color: rgba(0, 0, 0, 0.25);
}
.styles-module__light___ORIft .styles-module__active___hosp7 .styles-module__canvasToggleIcon___7pJ82 {
  color: rgba(255, 255, 255, 0.85);
}

.styles-module__canvasToggleLabel___OanpY {
  font-size: 0.8125rem;
  font-weight: 400;
  color: rgba(255, 255, 255, 0.6);
  letter-spacing: -0.0094em;
}
.styles-module__active___hosp7 .styles-module__canvasToggleLabel___OanpY {
  color: #fff;
}
.styles-module__light___ORIft .styles-module__canvasToggleLabel___OanpY {
  color: rgba(0, 0, 0, 0.5);
}
.styles-module__light___ORIft .styles-module__active___hosp7 .styles-module__canvasToggleLabel___OanpY {
  color: #fff;
}

.styles-module__placement___zcxv8 {
  position: absolute;
  border: 1.5px dashed rgba(59, 130, 246, 0.4);
  border-radius: 6px;
  background: rgba(59, 130, 246, 0.08);
  cursor: grab;
  transition: box-shadow 0.15s, border-color 0.15s, opacity 0.15s ease, transform 0.15s ease;
  -webkit-user-select: none;
  user-select: none;
  pointer-events: auto;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.08);
  animation: styles-module__placementEnter___TdRhf 0.25s cubic-bezier(0.34, 1.2, 0.64, 1);
}
.styles-module__placement___zcxv8:active {
  cursor: grabbing;
}
.styles-module__placement___zcxv8:hover {
  border-color: rgba(59, 130, 246, 0.5);
  background: rgba(59, 130, 246, 0.1);
  box-shadow: 0 2px 8px rgba(59, 130, 246, 0.12);
}
.styles-module__placement___zcxv8.styles-module__selected___6yrp6 {
  border-color: #3c82f7;
  border-style: solid;
  background: rgba(59, 130, 246, 0.1);
  box-shadow: 0 0 0 2px rgba(59, 130, 246, 0.15), 0 2px 8px rgba(59, 130, 246, 0.15);
}
.styles-module__placement___zcxv8.styles-module__selected___6yrp6:hover {
  box-shadow: 0 0 0 2px rgba(59, 130, 246, 0.15), 0 2px 8px rgba(59, 130, 246, 0.15);
}
.styles-module__wireframe___itvQU .styles-module__placement___zcxv8 {
  border-color: rgba(249, 115, 22, 0.4);
  background: rgba(249, 115, 22, 0.08);
}
.styles-module__wireframe___itvQU .styles-module__placement___zcxv8:hover {
  border-color: rgba(249, 115, 22, 0.5);
  background: rgba(249, 115, 22, 0.1);
  box-shadow: 0 2px 8px rgba(249, 115, 22, 0.12);
}
.styles-module__wireframe___itvQU .styles-module__placement___zcxv8.styles-module__selected___6yrp6 {
  border-color: #f97316;
  background: rgba(249, 115, 22, 0.1);
  box-shadow: 0 0 0 2px rgba(249, 115, 22, 0.15), 0 2px 8px rgba(249, 115, 22, 0.15);
}
.styles-module__wireframe___itvQU .styles-module__placement___zcxv8.styles-module__selected___6yrp6:hover {
  box-shadow: 0 0 0 2px rgba(249, 115, 22, 0.15), 0 2px 8px rgba(249, 115, 22, 0.15);
}
.styles-module__placement___zcxv8.styles-module__dragging___le6KZ {
  opacity: 0.85;
  z-index: 50;
}
.styles-module__placement___zcxv8.styles-module__exiting___YrM8F {
  opacity: 0;
  transform: scale(0.97);
  pointer-events: none;
  animation: none;
  transition: opacity 0.2s ease, transform 0.2s cubic-bezier(0.32, 0.72, 0, 1);
}

.styles-module__placementContent___f64A4 {
  width: 100%;
  height: 100%;
  overflow: hidden;
  pointer-events: none;
}

.styles-module__placementLabel___0KvWl {
  position: absolute;
  top: -18px;
  left: 0;
  font-size: 10px;
  font-weight: 600;
  color: rgba(59, 130, 246, 0.7);
  white-space: nowrap;
  pointer-events: none;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  text-shadow: 0 0 4px rgba(255, 255, 255, 0.8), 0 0 8px rgba(255, 255, 255, 0.5);
}
.styles-module__selected___6yrp6 .styles-module__placementLabel___0KvWl {
  color: #3c82f7;
}
.styles-module__wireframe___itvQU .styles-module__placementLabel___0KvWl {
  color: rgba(249, 115, 22, 0.7);
}
.styles-module__wireframe___itvQU .styles-module__selected___6yrp6 .styles-module__placementLabel___0KvWl {
  color: #f97316;
}

.styles-module__placementAnnotation___78pTr {
  position: absolute;
  bottom: -18px;
  left: 0;
  right: 0;
  font-weight: 450;
  color: rgba(0, 0, 0, 0.5);
  font-size: 10px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  pointer-events: none;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  text-shadow: 0 0 4px rgba(255, 255, 255, 0.9), 0 0 8px rgba(255, 255, 255, 0.6);
  opacity: 0;
  transform: translateY(-2px);
  transition: opacity 0.2s ease, transform 0.2s ease;
}
.styles-module__placementAnnotation___78pTr.styles-module__annotationVisible___mrUyA {
  opacity: 1;
  transform: translateY(0);
}

.styles-module__sectionAnnotation___aUIs0 {
  position: absolute;
  bottom: -18px;
  left: 0;
  right: 0;
  font-weight: 450;
  color: rgba(59, 130, 246, 0.6);
  font-size: 10px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  pointer-events: none;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  text-shadow: 0 0 4px rgba(255, 255, 255, 0.9), 0 0 8px rgba(255, 255, 255, 0.6);
  opacity: 0;
  transform: translateY(-2px);
  transition: opacity 0.2s ease, transform 0.2s ease;
}
.styles-module__sectionAnnotation___aUIs0.styles-module__annotationVisible___mrUyA {
  opacity: 1;
  transform: translateY(0);
}

.styles-module__handle___Ikbxm {
  position: absolute;
  width: 8px;
  height: 8px;
  background: #fff;
  border: 1.5px solid #3c82f7;
  border-radius: 2px;
  z-index: 12;
  box-shadow: 0 0 0 0.5px rgba(0, 0, 0, 0.1), 0 1px 2px rgba(0, 0, 0, 0.12);
  opacity: 0;
  transform: scale(0.3);
  pointer-events: none;
  will-change: opacity, transform;
  transition: opacity 0.2s ease-out, transform 0.25s cubic-bezier(0.34, 1.56, 0.64, 1);
}
.styles-module__placement___zcxv8:hover .styles-module__handle___Ikbxm, .styles-module__sectionOutline___s0hy-:hover .styles-module__handle___Ikbxm, .styles-module__ghostOutline___po-kO:hover .styles-module__handle___Ikbxm, .styles-module__placement___zcxv8:active .styles-module__handle___Ikbxm, .styles-module__sectionOutline___s0hy-:active .styles-module__handle___Ikbxm, .styles-module__ghostOutline___po-kO:active .styles-module__handle___Ikbxm, .styles-module__selected___6yrp6 .styles-module__handle___Ikbxm {
  opacity: 1;
  transform: scale(1);
  pointer-events: auto;
}
.styles-module__sectionOutline___s0hy- .styles-module__handle___Ikbxm {
  border-color: inherit;
}
.styles-module__wireframe___itvQU .styles-module__handle___Ikbxm {
  border-color: #f97316;
}

.styles-module__handleNw___4TMIj {
  top: -4px;
  left: -4px;
  cursor: nw-resize;
}

.styles-module__handleNe___mnsTh {
  top: -4px;
  right: -4px;
  cursor: ne-resize;
}

.styles-module__handleSe___oSFnk {
  bottom: -4px;
  right: -4px;
  cursor: se-resize;
}

.styles-module__handleSw___pi--Z {
  bottom: -4px;
  left: -4px;
  cursor: sw-resize;
}

.styles-module__handleN___aBA-Q,
.styles-module__handleE___0hM5u,
.styles-module__handleS___JjDRv,
.styles-module__handleW___ERWGQ {
  opacity: 0 !important;
  pointer-events: none !important;
}

.styles-module__edgeHandle___XxXdT {
  position: absolute;
  z-index: 11;
  display: flex;
  align-items: center;
  justify-content: center;
}
.styles-module__edgeHandle___XxXdT::after {
  content: "";
  position: absolute;
  border-radius: 4px;
  background: #3c82f7;
}
.styles-module__wireframe___itvQU .styles-module__edgeHandle___XxXdT::after {
  background: #f97316;
}
.styles-module__edgeHandle___XxXdT::after {
  opacity: 0;
  transition: opacity 0.1s ease, transform 0.1s ease;
  transform: scale(0.8);
}
.styles-module__edgeHandle___XxXdT:hover::after {
  opacity: 0.85;
  transform: scale(1);
}
.styles-module__edgeHandle___XxXdT svg {
  position: relative;
  z-index: 1;
  opacity: 0;
  transition: opacity 0.1s ease;
  filter: drop-shadow(0 0 2px var(--agd-surface));
}
.styles-module__edgeHandle___XxXdT:hover svg {
  opacity: 1;
}

.styles-module__edgeN___-JJDj,
.styles-module__edgeS___66lMX {
  left: 12px;
  right: 12px;
  height: 12px;
  cursor: n-resize;
}
.styles-module__edgeN___-JJDj::after,
.styles-module__edgeS___66lMX::after {
  width: 24px;
  height: 4px;
}

.styles-module__edgeN___-JJDj {
  top: -6px;
}

.styles-module__edgeS___66lMX {
  bottom: -6px;
  cursor: s-resize;
}

.styles-module__edgeE___1bGDa,
.styles-module__edgeW___lHQNo {
  top: 12px;
  bottom: 12px;
  width: 12px;
  cursor: e-resize;
}
.styles-module__edgeE___1bGDa::after,
.styles-module__edgeW___lHQNo::after {
  width: 4px;
  height: 24px;
}

.styles-module__edgeE___1bGDa {
  right: -6px;
}

.styles-module__edgeW___lHQNo {
  left: -6px;
  cursor: w-resize;
}

.styles-module__deleteButton___LkGCb {
  position: absolute;
  top: -8px;
  right: -8px;
  width: 18px;
  height: 18px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(8px);
  border: 1px solid rgba(0, 0, 0, 0.08);
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  color: rgba(0, 0, 0, 0.35);
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 10px;
  line-height: 1;
  z-index: 15;
  pointer-events: none;
  opacity: 0;
  transform: scale(0.8);
  will-change: opacity, transform;
  transition: opacity 0.2s ease-out, transform 0.2s cubic-bezier(0.34, 1.56, 0.64, 1), background 0.12s ease, color 0.12s ease, border-color 0.12s ease, box-shadow 0.12s ease;
}
.styles-module__placement___zcxv8:hover .styles-module__deleteButton___LkGCb, .styles-module__selected___6yrp6 .styles-module__deleteButton___LkGCb, .styles-module__sectionOutline___s0hy-:hover .styles-module__deleteButton___LkGCb, .styles-module__sectionOutline___s0hy-.styles-module__selected___6yrp6 .styles-module__deleteButton___LkGCb, .styles-module__ghostOutline___po-kO:hover .styles-module__deleteButton___LkGCb, .styles-module__ghostOutline___po-kO.styles-module__selected___6yrp6 .styles-module__deleteButton___LkGCb {
  opacity: 1;
  transform: scale(1);
  pointer-events: auto;
}
.styles-module__deleteButton___LkGCb:hover {
  background: #ef4444;
  color: #fff;
  border-color: #ef4444;
  box-shadow: 0 1px 4px rgba(239, 68, 68, 0.3);
  transform: scale(1.1);
}
.styles-module__overlay___aWh-q:not(.styles-module__light___ORIft) .styles-module__deleteButton___LkGCb, .styles-module__rearrangeOverlay___-3R3t:not(.styles-module__light___ORIft) .styles-module__deleteButton___LkGCb {
  background: rgba(40, 40, 40, 0.9);
  border-color: rgba(255, 255, 255, 0.1);
  color: rgba(255, 255, 255, 0.5);
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.25);
}
.styles-module__overlay___aWh-q:not(.styles-module__light___ORIft) .styles-module__deleteButton___LkGCb:hover, .styles-module__rearrangeOverlay___-3R3t:not(.styles-module__light___ORIft) .styles-module__deleteButton___LkGCb:hover {
  background: #ef4444;
  color: #fff;
  border-color: #ef4444;
}

.styles-module__drawBox___BrVAa {
  position: fixed;
  pointer-events: none;
  z-index: 99996;
  border: 2px solid #3c82f7;
  border-radius: 6px;
  background: rgba(59, 130, 246, 0.15);
}

.styles-module__selectBox___Iu8kB {
  position: fixed;
  pointer-events: none;
  z-index: 99996;
  border: 1px dashed #3c82f7;
  background: rgba(59, 130, 246, 0.08);
  border-radius: 2px;
}

.styles-module__sizeIndicator___7zJ4y {
  position: fixed;
  pointer-events: none;
  z-index: 100001;
  font-size: 10px;
  color: #fff;
  background: #3c82f7;
  padding: 2px 6px;
  border-radius: 4px;
  white-space: nowrap;
  font-weight: 500;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);
}

.styles-module__guideLine___DUQY2 {
  pointer-events: none;
  z-index: 100001;
  background: #f0f;
  opacity: 0.5;
}

.styles-module__dragPreview___onPbU {
  position: fixed;
  z-index: 100002;
  pointer-events: none;
  border: 1.5px dashed #3c82f7;
  border-radius: 6px;
  background: rgba(59, 130, 246, 0.1);
  backdrop-filter: blur(8px);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 9px;
  font-weight: 600;
  color: #3c82f7;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  text-transform: uppercase;
  letter-spacing: 0.04em;
  box-shadow: 0 4px 16px rgba(59, 130, 246, 0.15);
  transition: width 0.08s ease, height 0.08s ease, opacity 0.08s ease;
}

.styles-module__dragPreviewWireframe___jsg0G {
  border-color: #f97316;
  background: rgba(249, 115, 22, 0.1);
  color: #f97316;
  box-shadow: 0 4px 16px rgba(249, 115, 22, 0.15);
}

.styles-module__palette___C7iSH {
  position: absolute;
  right: 5px;
  bottom: calc(100% + 0.5rem);
  width: 256px;
  overflow: hidden;
  background: #1c1c1c;
  border: none;
  border-radius: 1rem;
  padding: 13px 0 16px;
  box-shadow: 0 1px 8px rgba(0, 0, 0, 0.25), 0 0 0 1px rgba(0, 0, 0, 0.04);
  z-index: 100001;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  cursor: default;
  opacity: 0;
  filter: blur(5px);
}
.styles-module__palette___C7iSH .styles-module__paletteItem___6TlnA,
.styles-module__palette___C7iSH .styles-module__paletteItemLabel___6ncO4,
.styles-module__palette___C7iSH .styles-module__paletteSectionTitle___PqnjX,
.styles-module__palette___C7iSH .styles-module__paletteFooter___QYnAG {
  transition: background 0.25s ease, color 0.25s ease, border-color 0.25s ease;
}
.styles-module__palette___C7iSH {
  opacity: 0;
  transform: translateY(var(--panel-offset-y, 4px)) scale(0.98);
  transform-origin: var(--panel-origin, bottom right);
  filter: blur(2px);
  pointer-events: none;
  visibility: hidden;
  transition: opacity 120ms cubic-bezier(0.25, 0.46, 0.45, 0.94), transform 120ms cubic-bezier(0.25, 0.46, 0.45, 0.94), filter 120ms cubic-bezier(0.25, 0.46, 0.45, 0.94);
}
.styles-module__palette___C7iSH[data-panel-present=true] {
  visibility: visible;
}
.styles-module__palette___C7iSH[data-panel-open=true] {
  opacity: 1;
  transform: translateY(0) scale(1);
  filter: blur(0);
  pointer-events: auto;
  transition-duration: 160ms;
}
@media (prefers-reduced-motion: reduce) {
  .styles-module__palette___C7iSH {
    transition: none;
    transform: none;
    filter: none;
  }
}
.styles-module__palette___C7iSH.styles-module__light___ORIft {
  background: #fff;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08), 0 4px 16px rgba(0, 0, 0, 0.06), 0 0 0 1px rgba(0, 0, 0, 0.04);
}

.styles-module__paletteSection___V8DEA {
  padding: 0 1rem;
}
.styles-module__paletteSection___V8DEA + .styles-module__paletteSection___V8DEA {
  margin-top: 0.5rem;
  padding-top: 0.5rem;
  border-top: 1px solid rgba(255, 255, 255, 0.07);
}
.styles-module__light___ORIft .styles-module__paletteSection___V8DEA + .styles-module__paletteSection___V8DEA {
  border-top-color: rgba(0, 0, 0, 0.07);
}

.styles-module__paletteSectionTitle___PqnjX {
  font-size: 0.6875rem;
  font-weight: 500;
  color: rgba(255, 255, 255, 0.5);
  letter-spacing: -0.0094em;
  padding: 0 0 3px 3px;
}
.styles-module__light___ORIft .styles-module__paletteSectionTitle___PqnjX {
  color: rgba(0, 0, 0, 0.4);
}

.styles-module__paletteItem___6TlnA {
  width: 100%;
  text-align: left;
  background: transparent;
  display: flex;
  align-items: center;
  gap: 0.375rem;
  padding: 0.25rem 0.25rem;
  margin-bottom: 1px;
  border-radius: 0.375rem;
  cursor: pointer;
  transition: background-color 0.15s ease, border-color 0.15s ease;
  border: 1px solid transparent;
  -webkit-user-select: none;
  user-select: none;
  min-height: 24px;
}
.styles-module__paletteItem___6TlnA:hover {
  background: rgba(255, 255, 255, 0.1);
}
.styles-module__paletteItem___6TlnA.styles-module__active___hosp7 {
  background: #3c82f7;
  border-color: transparent;
}
.styles-module__paletteItem___6TlnA.styles-module__wireframe___itvQU.styles-module__active___hosp7 {
  background: #f97316;
}
.styles-module__light___ORIft .styles-module__paletteItem___6TlnA:hover {
  background: rgba(0, 0, 0, 0.05);
}
.styles-module__light___ORIft .styles-module__paletteItem___6TlnA.styles-module__active___hosp7 {
  background: #3c82f7;
  border-color: transparent;
}
.styles-module__light___ORIft .styles-module__paletteItem___6TlnA.styles-module__wireframe___itvQU.styles-module__active___hosp7 {
  background: #f97316;
}

.styles-module__paletteItemIcon___0NPQK {
  width: 20px;
  height: 16px;
  border-radius: 2px;
  border: 1px dashed rgba(255, 255, 255, 0.15);
  background: rgba(255, 255, 255, 0.04);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  overflow: hidden;
  color: rgba(255, 255, 255, 0.45);
}
.styles-module__paletteItemIcon___0NPQK svg {
  display: block;
  width: 20px;
  height: 16px;
}
.styles-module__active___hosp7 .styles-module__paletteItemIcon___0NPQK {
  border-color: rgba(255, 255, 255, 0.3);
  background: rgba(255, 255, 255, 0.15);
  color: #fff;
}
.styles-module__light___ORIft .styles-module__paletteItemIcon___0NPQK {
  border-color: rgba(0, 0, 0, 0.12);
  background: rgba(0, 0, 0, 0.02);
  color: rgba(0, 0, 0, 0.4);
}
.styles-module__light___ORIft .styles-module__active___hosp7 .styles-module__paletteItemIcon___0NPQK {
  border-color: rgba(255, 255, 255, 0.3);
  background: rgba(255, 255, 255, 0.15);
  color: #fff;
}

.styles-module__paletteItemLabel___6ncO4 {
  font-size: 0.8125rem;
  font-weight: 500;
  color: rgba(255, 255, 255, 0.85);
  letter-spacing: -0.0094em;
  line-height: 1;
  min-width: 0;
}
.styles-module__active___hosp7 .styles-module__paletteItemLabel___6ncO4 {
  color: #fff;
  font-weight: 600;
}
.styles-module__light___ORIft .styles-module__paletteItemLabel___6ncO4 {
  color: rgba(0, 0, 0, 0.7);
}
.styles-module__light___ORIft .styles-module__active___hosp7 .styles-module__paletteItemLabel___6ncO4 {
  color: #fff;
  font-weight: 600;
}

.styles-module__placeScroll___7sClM {
  max-height: 240px;
  overflow-y: auto;
  overflow-x: hidden;
  padding-top: 0.25rem;
}
.styles-module__placeScroll___7sClM.styles-module__fadeTop___KT9tF {
  -webkit-mask-image: linear-gradient(to bottom, transparent 0, black 32px);
  mask-image: linear-gradient(to bottom, transparent 0, black 32px);
}
.styles-module__placeScroll___7sClM.styles-module__fadeBottom___x3ShT {
  -webkit-mask-image: linear-gradient(to bottom, black calc(100% - 32px), transparent 100%);
  mask-image: linear-gradient(to bottom, black calc(100% - 32px), transparent 100%);
}
.styles-module__placeScroll___7sClM.styles-module__fadeTop___KT9tF.styles-module__fadeBottom___x3ShT {
  -webkit-mask-image: linear-gradient(to bottom, transparent 0, black 32px, black calc(100% - 32px), transparent 100%);
  mask-image: linear-gradient(to bottom, transparent 0, black 32px, black calc(100% - 32px), transparent 100%);
}
.styles-module__placeScroll___7sClM::-webkit-scrollbar {
  width: 3px;
}
.styles-module__placeScroll___7sClM::-webkit-scrollbar-thumb {
  background: rgba(255, 255, 255, 0.12);
  border-radius: 2px;
}
.styles-module__light___ORIft .styles-module__placeScroll___7sClM::-webkit-scrollbar-thumb {
  background: rgba(0, 0, 0, 0.1);
}

.styles-module__paletteFooterWrap___71-fI {
  display: grid;
  grid-template-rows: 1fr;
  transition: grid-template-rows 0.25s cubic-bezier(0.32, 0.72, 0, 1);
}
.styles-module__paletteFooterWrap___71-fI.styles-module__footerHidden___fJUik {
  grid-template-rows: 0fr;
}

.styles-module__paletteFooterInnerContent___VC26h {
  opacity: 1;
  transform: translateY(0);
  transition: opacity 0.15s ease, transform 0.15s ease;
}
.styles-module__footerHidden___fJUik .styles-module__paletteFooterInnerContent___VC26h {
  opacity: 0;
  transform: translateY(4px);
}

.styles-module__paletteFooterInner___dfylY {
  overflow: hidden;
}

.styles-module__paletteFooter___QYnAG {
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: 24px;
  padding: 0 1rem;
  margin-top: 0.5rem;
  padding-top: 0.5rem;
  border-top: 1px solid rgba(255, 255, 255, 0.07);
}
.styles-module__light___ORIft .styles-module__paletteFooter___QYnAG {
  border-top-color: rgba(0, 0, 0, 0.07);
}

.styles-module__paletteFooterCount___D3Fia {
  font-size: 0.8125rem;
  font-weight: 400;
  letter-spacing: -0.0094em;
  color: rgba(255, 255, 255, 0.5);
}
.styles-module__light___ORIft .styles-module__paletteFooterCount___D3Fia {
  color: rgba(0, 0, 0, 0.5);
}

.styles-module__paletteFooterClear___ybBoa {
  font-size: 0.8125rem;
  font-weight: 400;
  letter-spacing: -0.0094em;
  color: rgba(255, 255, 255, 0.5);
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
  font-family: inherit;
  transition: color 0.15s ease;
}
.styles-module__paletteFooterClear___ybBoa:hover {
  color: rgba(255, 255, 255, 0.7);
}
.styles-module__light___ORIft .styles-module__paletteFooterClear___ybBoa {
  color: rgba(0, 0, 0, 0.5);
}
.styles-module__light___ORIft .styles-module__paletteFooterClear___ybBoa:hover {
  color: rgba(0, 0, 0, 0.6);
}

.styles-module__paletteFooterActions___fLzv8 {
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

.styles-module__rollingWrap___S75jM {
  display: inline-block;
  overflow: hidden;
  height: 1.15em;
  position: relative;
  vertical-align: bottom;
}

.styles-module__rollingNum___1RKDx {
  position: absolute;
  left: 0;
  top: 0;
}

.styles-module__exitUp___AFDRW {
  animation: styles-module__numExitUp___FRQqx 0.25s cubic-bezier(0.32, 0.72, 0, 1) forwards;
}

.styles-module__enterUp___CPlXb {
  animation: styles-module__numEnterUp___2Yd-w 0.25s cubic-bezier(0.32, 0.72, 0, 1) forwards;
}

.styles-module__exitDown___-1yAy {
  animation: styles-module__numExitDown___xm5by 0.25s cubic-bezier(0.32, 0.72, 0, 1) forwards;
}

.styles-module__enterDown___DDuFR {
  animation: styles-module__numEnterDown___hpxBk 0.25s cubic-bezier(0.32, 0.72, 0, 1) forwards;
}

@keyframes styles-module__numExitUp___FRQqx {
  from {
    transform: translateY(0);
    opacity: 1;
  }
  to {
    transform: translateY(-110%);
    opacity: 0;
  }
}
@keyframes styles-module__numEnterUp___2Yd-w {
  from {
    transform: translateY(110%);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}
@keyframes styles-module__numExitDown___xm5by {
  from {
    transform: translateY(0);
    opacity: 1;
  }
  to {
    transform: translateY(110%);
    opacity: 0;
  }
}
@keyframes styles-module__numEnterDown___hpxBk {
  from {
    transform: translateY(-110%);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}
.styles-module__rearrangeOverlay___-3R3t {
  position: fixed;
  inset: 0;
  z-index: 99995;
  pointer-events: none;
  cursor: default;
  -webkit-user-select: none;
  user-select: none;
  animation: styles-module__overlayFadeIn___aECVy 0.15s ease;
}

.styles-module__hoverHighlight___8eT-v {
  position: fixed;
  pointer-events: none;
  z-index: 99994;
  border: 2px dashed rgba(59, 130, 246, 0.5);
  border-radius: 4px;
  background: rgba(59, 130, 246, 0.06);
  animation: styles-module__highlightFadeIn___Lg7KY 0.12s ease;
}

.styles-module__sectionOutline___s0hy- {
  position: fixed;
  border: 2px solid;
  border-radius: 4px;
  cursor: grab;
}
.styles-module__sectionOutline___s0hy-:active {
  cursor: grabbing;
}
.styles-module__sectionOutline___s0hy- {
  transition: box-shadow 0.15s, border-color 0.3s, background-color 0.3s, border-style 0s;
  -webkit-user-select: none;
  user-select: none;
  pointer-events: auto;
  animation: styles-module__sectionEnter___-8BXT 0.2s ease;
}
.styles-module__sectionOutline___s0hy-:hover {
  box-shadow: 0 0 0 1px rgba(255, 255, 255, 0.1), 0 4px 12px rgba(0, 0, 0, 0.15);
}
.styles-module__sectionOutline___s0hy-.styles-module__selected___6yrp6 {
  border-style: solid;
  box-shadow: 0 0 0 2px rgba(59, 130, 246, 0.15), 0 2px 8px rgba(59, 130, 246, 0.15);
}
.styles-module__sectionOutline___s0hy-.styles-module__selected___6yrp6:hover {
  box-shadow: 0 0 0 2px rgba(59, 130, 246, 0.15), 0 2px 8px rgba(59, 130, 246, 0.15);
}
.styles-module__sectionOutline___s0hy-.styles-module__settled___b5U5o:not(.styles-module__selected___6yrp6) {
  border: 1.5px dashed rgba(150, 150, 150, 0.35);
  background-color: transparent !important;
  box-shadow: none;
}
.styles-module__sectionOutline___s0hy-.styles-module__settled___b5U5o:not(.styles-module__selected___6yrp6):hover {
  border-color: rgba(150, 150, 150, 0.6);
  box-shadow: none;
}
.styles-module__sectionOutline___s0hy-.styles-module__settled___b5U5o:not(.styles-module__selected___6yrp6) .styles-module__sectionLabel___F80HQ {
  opacity: 0;
  transition: opacity 0.15s ease;
}
.styles-module__sectionOutline___s0hy-.styles-module__settled___b5U5o:not(.styles-module__selected___6yrp6):hover .styles-module__sectionLabel___F80HQ {
  opacity: 1;
}
.styles-module__sectionOutline___s0hy-.styles-module__settled___b5U5o:not(.styles-module__selected___6yrp6) .styles-module__movedBadge___s8z-q,
.styles-module__sectionOutline___s0hy-.styles-module__settled___b5U5o:not(.styles-module__selected___6yrp6) .styles-module__sectionDimensions___RcJSL {
  opacity: 0;
  transition: opacity 0.15s ease;
}
.styles-module__sectionOutline___s0hy-.styles-module__settled___b5U5o:not(.styles-module__selected___6yrp6):hover .styles-module__sectionDimensions___RcJSL {
  opacity: 1;
}
.styles-module__sectionOutline___s0hy-.styles-module__exiting___YrM8F {
  opacity: 0;
  transform: scale(0.97);
  pointer-events: none;
  animation: none;
  transition: opacity 0.2s ease, transform 0.2s cubic-bezier(0.32, 0.72, 0, 1);
}

.styles-module__sectionLabel___F80HQ {
  position: absolute;
  top: 4px;
  left: 4px;
  font-size: 10px;
  font-weight: 600;
  color: #fff;
  padding: 2px 8px;
  border-radius: 4px;
  white-space: nowrap;
  pointer-events: none;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.2);
  max-width: calc(100% - 8px);
  overflow: hidden;
  text-overflow: ellipsis;
}

.styles-module__movedBadge___s8z-q {
  position: absolute;
  bottom: 22px;
  right: 4px;
  font-size: 9px;
  font-weight: 700;
  color: #fff;
  background: #22c55e;
  padding: 2px 6px;
  border-radius: 4px;
  white-space: nowrap;
  pointer-events: none;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  text-transform: uppercase;
  letter-spacing: 0.04em;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.2);
  opacity: 0;
  transform: scale(0.8);
  transition: opacity 0.15s ease, transform 0.15s ease;
}
.styles-module__movedBadge___s8z-q.styles-module__badgeVisible___npbdS {
  opacity: 1;
  transform: scale(1);
  transition: opacity 0.2s cubic-bezier(0.34, 1.2, 0.64, 1), transform 0.2s cubic-bezier(0.34, 1.2, 0.64, 1);
}

.styles-module__resizedBadge___u51V8 {
  background: #3c82f7;
  bottom: 40px;
}

.styles-module__sectionDimensions___RcJSL {
  position: absolute;
  bottom: 4px;
  right: 4px;
  font-size: 9px;
  font-weight: 500;
  color: rgba(255, 255, 255, 0.7);
  background: rgba(0, 0, 0, 0.5);
  padding: 1px 5px;
  border-radius: 3px;
  white-space: nowrap;
  pointer-events: none;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
}
.styles-module__light___ORIft .styles-module__sectionDimensions___RcJSL {
  color: rgba(0, 0, 0, 0.5);
  background: rgba(255, 255, 255, 0.7);
}

.styles-module__wireframeNotice___4GJyB {
  position: fixed;
  bottom: 16px;
  left: 24px;
  z-index: 99995;
  font-size: 9.5px;
  font-weight: 400;
  color: rgba(0, 0, 0, 0.4);
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  pointer-events: auto;
  animation: styles-module__overlayFadeIn___aECVy 0.3s ease;
  line-height: 1.5;
  max-width: 280px;
}

.styles-module__wireframeOpacityRow___CJXzi {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 8px;
}

.styles-module__wireframeOpacityLabel___afkfT {
  font-size: 9px;
  font-weight: 500;
  color: rgba(0, 0, 0, 0.32);
  letter-spacing: 0.02em;
  white-space: nowrap;
  -webkit-user-select: none;
  user-select: none;
}

.styles-module__wireframeOpacitySlider___YcoEs {
  -webkit-appearance: none;
  appearance: none;
  width: 56px;
  height: 4px;
  background: rgba(0, 0, 0, 0.08);
  border-radius: 2px;
  outline: none;
  cursor: pointer;
  flex-shrink: 0;
  transition: background 0.15s ease;
}
.styles-module__wireframeOpacitySlider___YcoEs:hover {
  background: rgba(0, 0, 0, 0.13);
}
.styles-module__wireframeOpacitySlider___YcoEs::-webkit-slider-thumb {
  -webkit-appearance: none;
  appearance: none;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: #f97316;
  cursor: pointer;
  transition: background 0.15s ease;
}
.styles-module__wireframeOpacitySlider___YcoEs::-webkit-slider-thumb:hover {
  background: rgb(88.0082041185%, 37.39404381%, 2.2663056855%);
}
.styles-module__wireframeOpacitySlider___YcoEs::-moz-range-thumb {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: #f97316;
  border: none;
  cursor: pointer;
}
.styles-module__wireframeOpacitySlider___YcoEs::-moz-range-track {
  background: rgba(0, 0, 0, 0.08);
  height: 4px;
  border-radius: 2px;
}

.styles-module__wireframeNoticeTitleRow___PJqyG {
  display: flex;
  align-items: center;
  gap: 0;
  margin-bottom: 2px;
}

.styles-module__wireframeNoticeTitle___okr08 {
  font-weight: 600;
  color: rgba(0, 0, 0, 0.55);
}

.styles-module__wireframeNoticeDivider___PNKQ6 {
  width: 1px;
  height: 8px;
  background: rgba(0, 0, 0, 0.12);
  margin: 0 8px;
  flex-shrink: 0;
}

.styles-module__wireframeStartOver___YFk-I {
  font-size: 9.5px;
  font-weight: 500;
  color: rgba(0, 0, 0, 0.35);
  cursor: pointer;
  background: none;
  border: none;
  padding: 0;
  font-family: inherit;
  text-decoration: none;
  transition: color 0.12s ease;
  white-space: nowrap;
}
.styles-module__wireframeStartOver___YFk-I:hover {
  color: rgba(0, 0, 0, 0.6);
}

.styles-module__ghostOutline___po-kO {
  position: fixed;
  border: 1.5px dashed rgba(59, 130, 246, 0.4);
  border-radius: 4px;
  background: rgba(59, 130, 246, 0.04);
  cursor: grab;
  opacity: 0.5;
  -webkit-user-select: none;
  user-select: none;
  pointer-events: auto;
  animation: styles-module__ghostEnter___EC3Mb 0.25s ease;
  transition: box-shadow 0.15s, border-color 0.3s, opacity 0.25s;
}
.styles-module__ghostOutline___po-kO:active {
  cursor: grabbing;
}
.styles-module__ghostOutline___po-kO:hover {
  opacity: 0.7;
  box-shadow: 0 0 0 1px rgba(59, 130, 246, 0.1), 0 4px 12px rgba(0, 0, 0, 0.08);
}
.styles-module__ghostOutline___po-kO.styles-module__selected___6yrp6 {
  opacity: 1;
  border-style: solid;
  border-width: 2px;
  border-color: #3c82f7;
  background: rgba(59, 130, 246, 0.08);
  box-shadow: 0 0 0 2px rgba(59, 130, 246, 0.15), 0 2px 8px rgba(59, 130, 246, 0.15);
}
.styles-module__ghostOutline___po-kO.styles-module__exiting___YrM8F {
  opacity: 0;
  transform: scale(0.97);
  pointer-events: none;
  animation: none;
  transition: opacity 0.2s ease, transform 0.2s cubic-bezier(0.32, 0.72, 0, 1);
}

.styles-module__ghostBadge___tsQUK {
  position: absolute;
  bottom: calc(100% + 4px);
  left: -1px;
  font-size: 9px;
  font-weight: 600;
  color: rgba(59, 130, 246, 0.9);
  background: rgba(59, 130, 246, 0.08);
  border: 1px solid rgba(59, 130, 246, 0.2);
  padding: 1px 5px;
  border-radius: 3px;
  white-space: nowrap;
  pointer-events: none;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  letter-spacing: 0.02em;
  line-height: 1.2;
  animation: styles-module__badgeSlideIn___typJ7 0.2s ease both;
}

@keyframes styles-module__badgeSlideIn___typJ7 {
  from {
    opacity: 0;
    transform: translateY(4px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
.styles-module__ghostBadgeExtra___6CVoD {
  display: inline;
  animation: styles-module__badgeExtraIn___i4W8F 0.2s ease both;
}

@keyframes styles-module__badgeExtraIn___i4W8F {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
.styles-module__originalOutline___Y6DD1 {
  position: fixed;
  border: 1.5px dashed rgba(150, 150, 150, 0.3);
  border-radius: 4px;
  background: transparent;
  pointer-events: none;
  -webkit-user-select: none;
  user-select: none;
  animation: styles-module__sectionEnter___-8BXT 0.2s ease;
}

.styles-module__originalLabel___HqI9g {
  position: absolute;
  top: 4px;
  left: 4px;
  font-size: 9px;
  font-weight: 500;
  color: rgba(150, 150, 150, 0.5);
  padding: 1px 6px;
  border-radius: 3px;
  white-space: nowrap;
  pointer-events: none;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  background: rgba(150, 150, 150, 0.08);
}

.styles-module__connectorSvg___Lovld {
  position: fixed;
  inset: 0;
  width: 100vw;
  height: 100vh;
  pointer-events: none;
  z-index: 99996;
}

.styles-module__connectorLine___XeWh- {
  transition: opacity 0.2s ease;
  animation: styles-module__connectorDraw___8sK5I 0.3s ease both;
}

.styles-module__connectorDot___yvf7C {
  transform-box: fill-box;
  transform-origin: center;
  animation: styles-module__connectorDotIn___NwTUq 0.25s cubic-bezier(0.34, 1.56, 0.64, 1) 0.15s both;
}

@keyframes styles-module__connectorDraw___8sK5I {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
@keyframes styles-module__connectorDotIn___NwTUq {
  from {
    transform: scale(0);
    opacity: 0;
  }
  to {
    transform: scale(1);
    opacity: 1;
  }
}
.styles-module__connectorExiting___2lLOs {
  animation: styles-module__connectorOut___5QoPl 0.2s ease forwards;
}
.styles-module__connectorExiting___2lLOs .styles-module__connectorDot___yvf7C {
  animation: styles-module__connectorDotOut___FEq7e 0.2s ease forwards;
}

@keyframes styles-module__connectorOut___5QoPl {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}
@keyframes styles-module__connectorDotOut___FEq7e {
  from {
    transform: scale(1);
    opacity: 1;
  }
  to {
    transform: scale(0);
    opacity: 0;
  }
}
@keyframes styles-module__placementEnter___TdRhf {
  from {
    opacity: 0;
    transform: scale(0.85);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}
@keyframes styles-module__sectionEnter___-8BXT {
  from {
    opacity: 0;
    transform: scale(0.96);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}
@keyframes styles-module__highlightFadeIn___Lg7KY {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
@keyframes styles-module__overlayFadeIn___aECVy {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
@keyframes styles-module__ghostEnter___EC3Mb {
  from {
    opacity: 0;
    transform: scale(0.96);
  }
  to {
    opacity: 0.6;
    transform: scale(1);
  }
}
.styles-module__canvasToggle___-QqSy:focus-visible,
.styles-module__paletteItem___6TlnA:focus-visible {
  outline: 2px solid var(--agentation-color-accent);
  outline-offset: -2px;
}`,$={overlay:"styles-module__overlay___aWh-q",rearrangeOverlay:"styles-module__rearrangeOverlay___-3R3t",overlayExiting:"styles-module__overlayExiting___iEmYr",overlayFadeIn:"styles-module__overlayFadeIn___aECVy",light:"styles-module__light___ORIft",wireframe:"styles-module__wireframe___itvQU",placing:"styles-module__placing___45yD8",passthrough:"styles-module__passthrough___xaFeE",blankCanvas:"styles-module__blankCanvas___t2Eue",visible:"styles-module__visible___OKKqX",gridActive:"styles-module__gridActive___OZ-cf",paletteHeader:"styles-module__paletteHeader___-Q5gQ",paletteHeaderTitle:"styles-module__paletteHeaderTitle___oHqZC",paletteHeaderDesc:"styles-module__paletteHeaderDesc___6i74T",wireframePurposeWrap:"styles-module__wireframePurposeWrap___To-tS",collapsed:"styles-module__collapsed___Ms9vS",wireframePurposeInner:"styles-module__wireframePurposeInner___Lrahs",wireframePurposeInput:"styles-module__wireframePurposeInput___7EtBN",canvasToggle:"styles-module__canvasToggle___-QqSy",active:"styles-module__active___hosp7",canvasToggleIcon:"styles-module__canvasToggleIcon___7pJ82",canvasToggleLabel:"styles-module__canvasToggleLabel___OanpY",placement:"styles-module__placement___zcxv8",placementEnter:"styles-module__placementEnter___TdRhf",selected:"styles-module__selected___6yrp6",dragging:"styles-module__dragging___le6KZ",exiting:"styles-module__exiting___YrM8F",placementContent:"styles-module__placementContent___f64A4",placementLabel:"styles-module__placementLabel___0KvWl",placementAnnotation:"styles-module__placementAnnotation___78pTr",annotationVisible:"styles-module__annotationVisible___mrUyA",sectionAnnotation:"styles-module__sectionAnnotation___aUIs0",handle:"styles-module__handle___Ikbxm",sectionOutline:"styles-module__sectionOutline___s0hy-",ghostOutline:"styles-module__ghostOutline___po-kO",handleNw:"styles-module__handleNw___4TMIj",handleNe:"styles-module__handleNe___mnsTh",handleSe:"styles-module__handleSe___oSFnk",handleSw:"styles-module__handleSw___pi--Z",handleN:"styles-module__handleN___aBA-Q",handleE:"styles-module__handleE___0hM5u",handleS:"styles-module__handleS___JjDRv",handleW:"styles-module__handleW___ERWGQ",edgeHandle:"styles-module__edgeHandle___XxXdT",edgeN:"styles-module__edgeN___-JJDj",edgeS:"styles-module__edgeS___66lMX",edgeE:"styles-module__edgeE___1bGDa",edgeW:"styles-module__edgeW___lHQNo",deleteButton:"styles-module__deleteButton___LkGCb",drawBox:"styles-module__drawBox___BrVAa",selectBox:"styles-module__selectBox___Iu8kB",sizeIndicator:"styles-module__sizeIndicator___7zJ4y",guideLine:"styles-module__guideLine___DUQY2",dragPreview:"styles-module__dragPreview___onPbU",dragPreviewWireframe:"styles-module__dragPreviewWireframe___jsg0G",palette:"styles-module__palette___C7iSH",paletteItem:"styles-module__paletteItem___6TlnA",paletteItemLabel:"styles-module__paletteItemLabel___6ncO4",paletteSectionTitle:"styles-module__paletteSectionTitle___PqnjX",paletteFooter:"styles-module__paletteFooter___QYnAG",paletteSection:"styles-module__paletteSection___V8DEA",paletteItemIcon:"styles-module__paletteItemIcon___0NPQK",placeScroll:"styles-module__placeScroll___7sClM",fadeTop:"styles-module__fadeTop___KT9tF",fadeBottom:"styles-module__fadeBottom___x3ShT",paletteFooterWrap:"styles-module__paletteFooterWrap___71-fI",footerHidden:"styles-module__footerHidden___fJUik",paletteFooterInnerContent:"styles-module__paletteFooterInnerContent___VC26h",paletteFooterInner:"styles-module__paletteFooterInner___dfylY",paletteFooterCount:"styles-module__paletteFooterCount___D3Fia",paletteFooterClear:"styles-module__paletteFooterClear___ybBoa",paletteFooterActions:"styles-module__paletteFooterActions___fLzv8",rollingWrap:"styles-module__rollingWrap___S75jM",rollingNum:"styles-module__rollingNum___1RKDx",exitUp:"styles-module__exitUp___AFDRW",numExitUp:"styles-module__numExitUp___FRQqx",enterUp:"styles-module__enterUp___CPlXb",numEnterUp:"styles-module__numEnterUp___2Yd-w",exitDown:"styles-module__exitDown___-1yAy",numExitDown:"styles-module__numExitDown___xm5by",enterDown:"styles-module__enterDown___DDuFR",numEnterDown:"styles-module__numEnterDown___hpxBk",hoverHighlight:"styles-module__hoverHighlight___8eT-v",highlightFadeIn:"styles-module__highlightFadeIn___Lg7KY",sectionEnter:"styles-module__sectionEnter___-8BXT",settled:"styles-module__settled___b5U5o",sectionLabel:"styles-module__sectionLabel___F80HQ",movedBadge:"styles-module__movedBadge___s8z-q",sectionDimensions:"styles-module__sectionDimensions___RcJSL",badgeVisible:"styles-module__badgeVisible___npbdS",resizedBadge:"styles-module__resizedBadge___u51V8",wireframeNotice:"styles-module__wireframeNotice___4GJyB",wireframeOpacityRow:"styles-module__wireframeOpacityRow___CJXzi",wireframeOpacityLabel:"styles-module__wireframeOpacityLabel___afkfT",wireframeOpacitySlider:"styles-module__wireframeOpacitySlider___YcoEs",wireframeNoticeTitleRow:"styles-module__wireframeNoticeTitleRow___PJqyG",wireframeNoticeTitle:"styles-module__wireframeNoticeTitle___okr08",wireframeNoticeDivider:"styles-module__wireframeNoticeDivider___PNKQ6",wireframeStartOver:"styles-module__wireframeStartOver___YFk-I",ghostEnter:"styles-module__ghostEnter___EC3Mb",ghostBadge:"styles-module__ghostBadge___tsQUK",badgeSlideIn:"styles-module__badgeSlideIn___typJ7",ghostBadgeExtra:"styles-module__ghostBadgeExtra___6CVoD",badgeExtraIn:"styles-module__badgeExtraIn___i4W8F",originalOutline:"styles-module__originalOutline___Y6DD1",originalLabel:"styles-module__originalLabel___HqI9g",connectorSvg:"styles-module__connectorSvg___Lovld",connectorLine:"styles-module__connectorLine___XeWh-",connectorDraw:"styles-module__connectorDraw___8sK5I",connectorDot:"styles-module__connectorDot___yvf7C",connectorDotIn:"styles-module__connectorDotIn___NwTUq",connectorExiting:"styles-module__connectorExiting___2lLOs",connectorOut:"styles-module__connectorOut___5QoPl",connectorDotOut:"styles-module__connectorDotOut___FEq7e"},Qi=24,Lu=5;function Dy(e,t,n,l,o){let a=1/0,i=1/0,r=e.x,s=e.x+e.width,d=e.x+e.width/2,h=e.y,_=e.y+e.height,m=e.y+e.height/2,v=!l,k=v?[r,s,d]:[...l.left?[r]:[],...l.right?[s]:[]],A=v?[h,_,m]:[...l.top?[h]:[],...l.bottom?[_]:[]],M=[];for(let re of t)n.has(re.id)||M.push(re);o&&M.push(...o);for(let re of M){let Z=re.x,_e=re.x+re.width,oe=re.x+re.width/2,se=re.y,he=re.y+re.height,Dt=re.y+re.height/2;for(let Ue of k)for(let tt of[Z,_e,oe]){let Ye=tt-Ue;Math.abs(Ye)<Lu&&Math.abs(Ye)<Math.abs(a)&&(a=Ye)}for(let Ue of A)for(let tt of[se,he,Dt]){let Ye=tt-Ue;Math.abs(Ye)<Lu&&Math.abs(Ye)<Math.abs(i)&&(i=Ye)}}let p=Math.abs(a)<Lu?a:0,x=Math.abs(i)<Lu?i:0,g=[],S=new Set,W=r+p,J=s+p,z=d+p,K=h+x,O=_+x,F=m+x;for(let re of M){let Z=re.x,_e=re.x+re.width,oe=re.x+re.width/2,se=re.y,he=re.y+re.height,Dt=re.y+re.height/2;for(let Ue of[Z,oe,_e])for(let tt of[W,z,J])if(Math.abs(tt-Ue)<.5){let Ye=`x:${Math.round(Ue)}`;S.has(Ye)||(S.add(Ye),g.push({axis:"x",pos:Ue}))}for(let Ue of[se,Dt,he])for(let tt of[K,F,O])if(Math.abs(tt-Ue)<.5){let Ye=`y:${Math.round(Ue)}`;S.has(Ye)||(S.add(Ye),g.push({axis:"y",pos:Ue}))}}return{dx:p,dy:x,guides:g}}function Ry(){return`dp-${Date.now()}-${Math.random().toString(36).slice(2,7)}`}function d4({placements:e,onChange:t,activeComponent:n,onActiveComponentChange:l,isDarkMode:o,exiting:a,onInteractionChange:i,className:r,passthrough:s,extraSnapRects:d,onSelectionChange:h,deselectSignal:_,onDragMove:m,onDragEnd:v,clearingPlacements:k,wireframe:A}){let[M,p]=(0,st.useState)(new Set),[x,g]=(0,st.useState)(null),[S,W]=(0,st.useState)(null),[J,z]=(0,st.useState)(null),[K,O]=(0,st.useState)([]),[F,re]=(0,st.useState)(null),[Z,_e]=(0,st.useState)(!1),oe=(0,st.useRef)(!1),[se,he]=(0,st.useState)(new Set),Dt=(0,st.useRef)(new Map),Ue=(0,st.useRef)(null),tt=(0,st.useRef)(null),Ye=(0,st.useRef)(e);Ye.current=e;let xt=(0,st.useRef)(h);xt.current=h;let cn=(0,st.useRef)(m);cn.current=m;let An=(0,st.useRef)(v);An.current=v;let De=(0,st.useRef)(_);(0,st.useEffect)(()=>{_!==De.current&&(De.current=_,p(new Set))},[_]),(0,st.useEffect)(()=>{k?.length&&(p(V=>new Set([...V].filter(fe=>!k.some(Ae=>Ae.id===fe)))),tt.current=null)},[k]),(0,st.useEffect)(()=>{let V=fe=>{let Ae=fe.composedPath()[0]||fe.target;if(!(Ae.tagName==="INPUT"||Ae.tagName==="TEXTAREA"||Ae.isContentEditable)){if((fe.key==="Backspace"||fe.key==="Delete")&&M.size>0){fe.preventDefault();let ve=new Set(M);he(ve),p(new Set),rt(()=>{t(Ye.current.filter(nt=>!ve.has(nt.id))),he(new Set)},180);return}if(["ArrowUp","ArrowDown","ArrowLeft","ArrowRight"].includes(fe.key)&&M.size>0){fe.preventDefault();let ve=fe.shiftKey?20:1,nt=fe.key==="ArrowLeft"?-ve:fe.key==="ArrowRight"?ve:0,Xe=fe.key==="ArrowUp"?-ve:fe.key==="ArrowDown"?ve:0;t(e.map(Ke=>M.has(Ke.id)?{...Ke,x:Math.max(0,Ke.x+nt),y:Math.max(0,Ke.y+Xe)}:Ke));return}if(fe.key==="Escape"){n?l(null):M.size>0&&p(new Set);return}}};return document.addEventListener("keydown",V),()=>document.removeEventListener("keydown",V)},[M,n,e,t,l]);let pl=(0,st.useCallback)(V=>{if(V.button!==0||s||V.target.closest(`.${$.placement}`))return;V.preventDefault(),V.stopPropagation();let Ae=window.scrollY,Ce=V.clientX,ve=V.clientY;if(n){tt.current="place",i?.(!0);let nt=!1,Xe=Ce,Ke=ve,Fe=T=>{Xe=T.clientX,Ke=T.clientY;let D=Math.abs(Xe-Ce),U=Math.abs(Ke-ve);if((D>5||U>5)&&(nt=!0),nt){let X=Math.min(Ce,Xe),P=Math.min(ve,Ke),ee=Math.abs(Xe-Ce),Q=Math.abs(Ke-ve);g({x:X,y:P,w:ee,h:Q}),z({x:T.clientX+12,y:T.clientY+12,text:`${Math.round(ee)} \xD7 ${Math.round(Q)}`})}},q=T=>{window.removeEventListener("mousemove",Fe),window.removeEventListener("mouseup",q),g(null),z(null),tt.current=null,i?.(!1);let D=ne[n],U,X,P,ee;nt?(U=Math.min(Ce,Xe),X=Math.min(ve,Ke)+Ae,P=Math.max(Qi,Math.abs(Xe-Ce)),ee=Math.max(Qi,Math.abs(Ke-ve))):(P=D.width,ee=D.height,U=Ce-P/2,X=ve+Ae-ee/2),U=Math.max(0,U),X=Math.max(0,X);let Q={id:Ry(),type:n,x:U,y:X,width:P,height:ee,scrollY:Ae,timestamp:Date.now()},ce=[...e,Q];t(ce),p(new Set([Q.id])),l(null)};window.addEventListener("mousemove",Fe),window.addEventListener("mouseup",q)}else{V.shiftKey||p(new Set),tt.current="select";let nt=!1,Xe=Fe=>{let q=Math.abs(Fe.clientX-Ce),T=Math.abs(Fe.clientY-ve);if((q>4||T>4)&&(nt=!0),nt){let D=Math.min(Ce,Fe.clientX),U=Math.min(ve,Fe.clientY);W({x:D,y:U,w:Math.abs(Fe.clientX-Ce),h:Math.abs(Fe.clientY-ve)})}},Ke=Fe=>{if(window.removeEventListener("mousemove",Xe),window.removeEventListener("mouseup",Ke),tt.current=null,nt){let q=Math.min(Ce,Fe.clientX),T=Math.min(ve,Fe.clientY)+Ae,D=Math.abs(Fe.clientX-Ce),U=Math.abs(Fe.clientY-ve),X=new Set(V.shiftKey?M:new Set);for(let P of e){let ee=P.y-Ae;P.x+P.width>q&&P.x<q+D&&P.y+P.height>T&&P.y<T+U&&X.add(P.id)}p(X)}W(null)};window.addEventListener("mousemove",Xe),window.addEventListener("mouseup",Ke)}},[n,s,e,t,M]),Ql=(0,st.useCallback)((V,fe)=>{if(V.button!==0)return;let Ae=V.target;if(Ae.closest(`.${$.handle}`)||Ae.closest(`.${$.deleteButton}`))return;V.preventDefault(),V.stopPropagation();let Ce;V.shiftKey?(Ce=new Set(M),Ce.has(fe)?Ce.delete(fe):Ce.add(fe)):M.has(fe)?Ce=new Set(M):Ce=new Set([fe]),p(Ce),(Ce.size!==M.size||[...Ce].some(ce=>!M.has(ce)))&&xt.current?.(Ce,V.shiftKey);let nt=window.scrollY,Xe=V.clientX,Ke=V.clientY,Fe=new Map;for(let ce of e)Ce.has(ce.id)&&Fe.set(ce.id,{x:ce.x,y:ce.y});tt.current="move",i?.(!0);let q=!1,T=!1,D=e,U=0,X=0,P=new Map;for(let ce of e)Fe.has(ce.id)&&P.set(ce.id,{w:ce.width,h:ce.height});let ee=ce=>{let we=ce.clientX-Xe,ze=ce.clientY-Ke;if((Math.abs(we)>2||Math.abs(ze)>2)&&(q=!0),!q)return;if(ce.altKey&&!T){T=!0;let vt=[];for(let gt of e)Fe.has(gt.id)&&vt.push({...gt,id:Ry(),timestamp:Date.now()});D=[...e,...vt]}let ct=1/0,ht=1/0,lt=-1/0,qe=-1/0;for(let[vt,gt]of Fe){let ae=P.get(vt);ae&&(ct=Math.min(ct,gt.x+we),ht=Math.min(ht,gt.y+ze),lt=Math.max(lt,gt.x+we+ae.w),qe=Math.max(qe,gt.y+ze+ae.h))}let Ne={x:ct,y:ht,width:lt-ct,height:qe-ht},{dx:Tt,dy:Ct,guides:mt}=Dy(Ne,D,new Set(Fe.keys()),void 0,d);O(mt);let Be=we+Tt,ot=ze+Ct;U=Be,X=ot,t(D.map(vt=>{let gt=Fe.get(vt.id);return gt?{...vt,x:Math.max(0,gt.x+Be),y:Math.max(0,gt.y+ot)}:vt})),cn.current?.(Be,ot)},Q=()=>{window.removeEventListener("mousemove",ee),window.removeEventListener("mouseup",Q),tt.current=null,i?.(!1),O([]),An.current?.(U,X,q)};window.addEventListener("mousemove",ee),window.addEventListener("mouseup",Q)},[M,e,t,i]),vo=(0,st.useCallback)((V,fe,Ae)=>{V.preventDefault(),V.stopPropagation();let Ce=e.find(X=>X.id===fe);if(!Ce)return;p(new Set([fe])),tt.current="resize",i?.(!0);let ve=V.clientX,nt=V.clientY,Xe=Ce.width,Ke=Ce.height,Fe=Ce.x,q=Ce.y,T={left:Ae.includes("w"),right:Ae.includes("e"),top:Ae.includes("n"),bottom:Ae.includes("s")},D=X=>{let P=X.clientX-ve,ee=X.clientY-nt,Q=Xe,ce=Ke,we=Fe,ze=q;Ae.includes("e")&&(Q=Math.max(Qi,Xe+P)),Ae.includes("w")&&(Q=Math.max(Qi,Xe-P),we=Fe+Xe-Q),Ae.includes("s")&&(ce=Math.max(Qi,Ke+ee)),Ae.includes("n")&&(ce=Math.max(Qi,Ke-ee),ze=q+Ke-ce);let ct={x:we,y:ze,width:Q,height:ce},{dx:ht,dy:lt,guides:qe}=Dy(ct,Ye.current,new Set([fe]),T,d);O(qe),ht!==0&&(T.right?Q+=ht:T.left&&(we+=ht,Q-=ht)),lt!==0&&(T.bottom?ce+=lt:T.top&&(ze+=lt,ce-=lt)),t(Ye.current.map(Ne=>Ne.id===fe?{...Ne,x:we,y:ze,width:Q,height:ce}:Ne)),z({x:X.clientX+12,y:X.clientY+12,text:`${Math.round(Q)} \xD7 ${Math.round(ce)}`})},U=()=>{window.removeEventListener("mousemove",D),window.removeEventListener("mouseup",U),z(null),tt.current=null,i?.(!1),O([])};window.addEventListener("mousemove",D),window.addEventListener("mouseup",U)},[e,t,i]),wo=(0,st.useCallback)(V=>{tt.current=null,he(fe=>{let Ae=new Set(fe);return Ae.add(V),Ae}),p(fe=>{let Ae=new Set(fe);return Ae.delete(V),Ae}),rt(()=>{t(Ye.current.filter(fe=>fe.id!==V)),he(fe=>{let Ae=new Set(fe);return Ae.delete(V),Ae})},180)},[t]),Wl=new Set(["text","hero","button","badge","cta","toast","modal","card","navigation","tabs","input","search","breadcrumb","pricing","testimonial","alert","banner","tag","notification","stat","productCard"]),Gl={hero:"Headline text",button:"Button label",badge:"Badge label",cta:"Call to action text",toast:"Notification message",modal:"Dialog title",card:"Card title",navigation:"Brand / nav items",tabs:"Tab labels",input:"Placeholder text",search:"Search placeholder",pricing:"Plan name or price",testimonial:"Quote text",alert:"Alert message",banner:"Banner text",tag:"Tag label",notification:"Notification message",stat:"Metric value",productCard:"Product name"},Vl=(0,st.useCallback)(V=>{let fe=e.find(Ae=>Ae.id===V);fe&&(oe.current=!!fe.text,re(V),_e(!1))},[e]),It=(0,st.useCallback)(()=>{F&&(_e(!0),rt(()=>{re(null),_e(!1)},150))},[F]);(0,st.useEffect)(()=>{a&&F&&It()},[a]);let yl=(0,st.useCallback)(V=>{F&&(t(e.map(fe=>fe.id===F?{...fe,text:V.trim()||void 0}:fe)),It())},[F,e,t,It]),Tl=typeof window<"u"?window.scrollY:0,oa=["nw","ne","se","sw"],Jn=A?"#f97316":"#3c82f7",Fl=[{dir:"n",cls:$.edgeN,arrow:(0,Et.jsx)("svg",{width:"8",height:"6",viewBox:"0 0 8 6",fill:"none",children:(0,Et.jsx)("path",{d:"M4 0.5L1 4.5h6z",fill:Jn})})},{dir:"e",cls:$.edgeE,arrow:(0,Et.jsx)("svg",{width:"6",height:"8",viewBox:"0 0 6 8",fill:"none",children:(0,Et.jsx)("path",{d:"M5.5 4L1.5 1v6z",fill:Jn})})},{dir:"s",cls:$.edgeS,arrow:(0,Et.jsx)("svg",{width:"8",height:"6",viewBox:"0 0 8 6",fill:"none",children:(0,Et.jsx)("path",{d:"M4 5.5L1 1.5h6z",fill:Jn})})},{dir:"w",cls:$.edgeW,arrow:(0,Et.jsx)("svg",{width:"6",height:"8",viewBox:"0 0 6 8",fill:"none",children:(0,Et.jsx)("path",{d:"M0.5 4L4.5 1v6z",fill:Jn})})}];return(0,Et.jsxs)(Et.Fragment,{children:[(0,Et.jsx)("div",{ref:Ue,className:`${$.overlay} ${o?"":$.light} ${n?$.placing:""} ${s?$.passthrough:""} ${a?$.overlayExiting:""} ${A?$.wireframe:""}${r?` ${r}`:""}`,"data-feedback-toolbar":!0,onMouseDown:pl,children:e.map(V=>{let fe=M.has(V.id),Ae=El[V.type]?.label||V.type,Ce=V.y-Tl;return(0,Et.jsxs)("div",{"data-design-placement":V.id,className:`${$.placement} ${fe?$.selected:""} ${se.has(V.id)||k?.includes(V)?$.exiting:""}`,style:{left:V.x,top:Ce,width:V.width,height:V.height,position:"fixed"},onMouseDown:ve=>Ql(ve,V.id),onDoubleClick:()=>Vl(V.id),children:[(0,Et.jsx)("span",{className:$.placementLabel,children:Ae}),(0,Et.jsx)("span",{className:`${$.placementAnnotation} ${V.text?$.annotationVisible:""}`,children:(V.text&&Dt.current.set(V.id,V.text),V.text||Dt.current.get(V.id)||"")}),(0,Et.jsx)("div",{className:$.placementContent,children:(0,Et.jsx)(c4,{type:V.type,width:V.width,height:V.height,text:V.text})}),(0,Et.jsx)("div",{className:$.deleteButton,onMouseDown:ve=>ve.stopPropagation(),onClick:()=>wo(V.id),children:"\u2715"}),oa.map(ve=>(0,Et.jsx)("div",{className:`${$.handle} ${$[`handle${ve.charAt(0).toUpperCase()}${ve.slice(1)}`]}`,onMouseDown:nt=>vo(nt,V.id,ve)},ve)),Fl.map(({dir:ve,cls:nt,arrow:Xe})=>(0,Et.jsx)("div",{className:`${$.edgeHandle} ${nt}`,onMouseDown:Ke=>vo(Ke,V.id,ve),children:Xe},ve))]},V.id)})}),F&&(()=>{let V=e.find(q=>q.id===F);if(!V)return null;let fe=V.y-Tl,Ae=V.x+V.width/2,Ce=fe-8,ve=fe+V.height+8,nt=Ce>200,Xe=ve<window.innerHeight-100,Ke=Math.max(160,Math.min(window.innerWidth-160,Ae)),Fe;return nt?Fe={left:Ke,bottom:window.innerHeight-Ce}:Xe?Fe={left:Ke,top:ve}:Fe={left:Ke,top:Math.max(80,window.innerHeight/2-80)},(0,Et.jsx)($h,{element:El[V.type]?.label||V.type,placeholder:Gl[V.type]||"Label or content text",initialValue:V.text??"",submitLabel:oe.current?"Save":"Set",onSubmit:yl,onCancel:It,onDelete:oe.current?()=>{yl("")}:void 0,isExiting:Z,lightMode:!o,style:Fe})})(),x&&(0,Et.jsx)("div",{className:$.drawBox,style:{left:x.x,top:x.y,width:x.w,height:x.h},"data-feedback-toolbar":!0}),S&&(0,Et.jsx)("div",{className:$.selectBox,style:{left:S.x,top:S.y,width:S.w,height:S.h},"data-feedback-toolbar":!0}),J&&(0,Et.jsx)("div",{className:$.sizeIndicator,style:{left:J.x,top:J.y},"data-feedback-toolbar":!0,children:J.text}),K.map((V,fe)=>(0,Et.jsx)("div",{className:$.guideLine,style:V.axis==="x"?{position:"fixed",left:V.pos,top:0,width:1,bottom:0}:{position:"fixed",left:0,top:V.pos-Tl,right:0,height:1},"data-feedback-toolbar":!0},`${V.axis}-${V.pos}-${fe}`))]})}function x5(e,{keepMounted:t=!1,onExited:n}={}){let[l,o]=(0,la.useState)(t||e),a=(0,la.useRef)(null),i=(0,la.useRef)(n);return e&&!l&&o(!0),(0,la.useLayoutEffect)(()=>{i.current=n},[n]),(0,la.useLayoutEffect)(()=>{let r=a.current;if(!r||r.dataset.panelOpen==="true"===e)return;getComputedStyle(r).opacity,r.dataset.panelPresent="true",r.dataset.panelOpen=String(e);let s=!1,d=r.getAnimations?.()??[];return Promise.allSettled(d.map(h=>h.finished)).then(()=>{s||e||(delete r.dataset.panelPresent,t||o(!1),i.current?.())}),()=>{s=!0}},[e,l,t]),{ref:a,mounted:l}}function _4(e){if(!e)return"";let t=e.scrollTop>2,n=e.scrollTop+e.clientHeight<e.scrollHeight-2;return`${t?$.fadeTop:""} ${n?$.fadeBottom:""}`}var b="currentColor",B="0.5";function f4({type:e}){switch(e){case"navigation":return(0,c.jsxs)("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[(0,c.jsx)("rect",{x:"1",y:"4",width:"18",height:"8",rx:"1",stroke:b,strokeWidth:B}),(0,c.jsx)("rect",{x:"2.5",y:"7",width:"3",height:"1.5",rx:".5",fill:b,opacity:".4"}),(0,c.jsx)("rect",{x:"7",y:"7",width:"2.5",height:"1.5",rx:".5",fill:b,opacity:".25"}),(0,c.jsx)("rect",{x:"11",y:"7",width:"2.5",height:"1.5",rx:".5",fill:b,opacity:".25"})]});case"header":return(0,c.jsxs)("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[(0,c.jsx)("rect",{x:"1",y:"2",width:"18",height:"12",rx:"1",stroke:b,strokeWidth:B}),(0,c.jsx)("rect",{x:"3",y:"5.5",width:"8",height:"2",rx:".5",fill:b,opacity:".35"}),(0,c.jsx)("rect",{x:"3",y:"9",width:"12",height:"1",rx:".5",fill:b,opacity:".15"})]});case"hero":return(0,c.jsxs)("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[(0,c.jsx)("rect",{x:"1",y:"1",width:"18",height:"14",rx:"1",stroke:b,strokeWidth:B}),(0,c.jsx)("rect",{x:"5",y:"5",width:"10",height:"1.5",rx:".5",fill:b,opacity:".35"}),(0,c.jsx)("rect",{x:"7",y:"8",width:"6",height:"1",rx:".5",fill:b,opacity:".15"}),(0,c.jsx)("rect",{x:"7.5",y:"10.5",width:"5",height:"2.5",rx:"1",stroke:b,strokeWidth:B})]});case"section":return(0,c.jsxs)("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[(0,c.jsx)("rect",{x:"1",y:"1",width:"18",height:"14",rx:"1",stroke:b,strokeWidth:B}),(0,c.jsx)("rect",{x:"3",y:"4",width:"6",height:"1",rx:".5",fill:b,opacity:".3"}),(0,c.jsx)("rect",{x:"3",y:"6.5",width:"14",height:"1",rx:".5",fill:b,opacity:".15"}),(0,c.jsx)("rect",{x:"3",y:"9",width:"10",height:"1",rx:".5",fill:b,opacity:".15"})]});case"sidebar":return(0,c.jsxs)("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[(0,c.jsx)("rect",{x:"1",y:"1",width:"7",height:"14",rx:"1",stroke:b,strokeWidth:B}),(0,c.jsx)("rect",{x:"2.5",y:"4",width:"4",height:"1",rx:".5",fill:b,opacity:".3"}),(0,c.jsx)("rect",{x:"2.5",y:"6.5",width:"3.5",height:"1",rx:".5",fill:b,opacity:".15"}),(0,c.jsx)("rect",{x:"2.5",y:"9",width:"4",height:"1",rx:".5",fill:b,opacity:".15"})]});case"footer":return(0,c.jsxs)("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[(0,c.jsx)("rect",{x:"1",y:"7",width:"18",height:"8",rx:"1",stroke:b,strokeWidth:B}),(0,c.jsx)("rect",{x:"3",y:"9.5",width:"4",height:"1",rx:".5",fill:b,opacity:".25"}),(0,c.jsx)("rect",{x:"9",y:"9.5",width:"4",height:"1",rx:".5",fill:b,opacity:".25"}),(0,c.jsx)("rect",{x:"15",y:"9.5",width:"3",height:"1",rx:".5",fill:b,opacity:".2"})]});case"modal":return(0,c.jsxs)("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[(0,c.jsx)("rect",{x:"3",y:"2",width:"14",height:"12",rx:"1.5",stroke:b,strokeWidth:B}),(0,c.jsx)("rect",{x:"5",y:"4.5",width:"7",height:"1",rx:".5",fill:b,opacity:".3"}),(0,c.jsx)("rect",{x:"5",y:"7",width:"10",height:"1",rx:".5",fill:b,opacity:".15"}),(0,c.jsx)("rect",{x:"11",y:"11",width:"5",height:"2",rx:".75",stroke:b,strokeWidth:B})]});case"divider":return(0,c.jsx)("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:(0,c.jsx)("line",{x1:"2",y1:"8",x2:"18",y2:"8",stroke:b,strokeWidth:"0.5",opacity:".3"})});case"card":return(0,c.jsxs)("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[(0,c.jsx)("rect",{x:"2",y:"1",width:"16",height:"14",rx:"1.5",stroke:b,strokeWidth:B}),(0,c.jsx)("rect",{x:"2",y:"1",width:"16",height:"5.5",rx:"1",fill:b,opacity:".04"}),(0,c.jsx)("rect",{x:"4",y:"8.5",width:"8",height:"1",rx:".5",fill:b,opacity:".25"}),(0,c.jsx)("rect",{x:"4",y:"11",width:"11",height:"1",rx:".5",fill:b,opacity:".12"})]});case"text":return(0,c.jsxs)("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[(0,c.jsx)("rect",{x:"2",y:"4",width:"14",height:"1.5",rx:".5",fill:b,opacity:".3"}),(0,c.jsx)("rect",{x:"2",y:"7",width:"11",height:"1",rx:".5",fill:b,opacity:".15"}),(0,c.jsx)("rect",{x:"2",y:"9.5",width:"13",height:"1",rx:".5",fill:b,opacity:".15"}),(0,c.jsx)("rect",{x:"2",y:"12",width:"8",height:"1",rx:".5",fill:b,opacity:".12"})]});case"image":return(0,c.jsxs)("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[(0,c.jsx)("rect",{x:"2",y:"2",width:"16",height:"12",rx:"1",stroke:b,strokeWidth:B}),(0,c.jsx)("line",{x1:"2",y1:"2",x2:"18",y2:"14",stroke:b,strokeWidth:".3",opacity:".25"}),(0,c.jsx)("line",{x1:"18",y1:"2",x2:"2",y2:"14",stroke:b,strokeWidth:".3",opacity:".25"})]});case"video":return(0,c.jsxs)("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[(0,c.jsx)("rect",{x:"2",y:"2",width:"16",height:"12",rx:"1",stroke:b,strokeWidth:B}),(0,c.jsx)("path",{d:"M8.5 5.5v5l4.5-2.5z",stroke:b,strokeWidth:B,fill:b,opacity:".15"})]});case"table":return(0,c.jsxs)("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[(0,c.jsx)("rect",{x:"1",y:"2",width:"18",height:"12",rx:"1",stroke:b,strokeWidth:B}),(0,c.jsx)("line",{x1:"1",y1:"5.5",x2:"19",y2:"5.5",stroke:b,strokeWidth:".3",opacity:".25"}),(0,c.jsx)("line",{x1:"1",y1:"9",x2:"19",y2:"9",stroke:b,strokeWidth:".3",opacity:".25"}),(0,c.jsx)("line",{x1:"7",y1:"2",x2:"7",y2:"14",stroke:b,strokeWidth:".3",opacity:".25"}),(0,c.jsx)("line",{x1:"13",y1:"2",x2:"13",y2:"14",stroke:b,strokeWidth:".3",opacity:".25"})]});case"grid":return(0,c.jsxs)("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[(0,c.jsx)("rect",{x:"1.5",y:"2",width:"7",height:"5.5",rx:"1",stroke:b,strokeWidth:B}),(0,c.jsx)("rect",{x:"11.5",y:"2",width:"7",height:"5.5",rx:"1",stroke:b,strokeWidth:B}),(0,c.jsx)("rect",{x:"1.5",y:"9.5",width:"7",height:"5.5",rx:"1",stroke:b,strokeWidth:B}),(0,c.jsx)("rect",{x:"11.5",y:"9.5",width:"7",height:"5.5",rx:"1",stroke:b,strokeWidth:B})]});case"list":return(0,c.jsxs)("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[(0,c.jsx)("circle",{cx:"3.5",cy:"4.5",r:"1",stroke:b,strokeWidth:B}),(0,c.jsx)("rect",{x:"6.5",y:"4",width:"10",height:"1",rx:".5",fill:b,opacity:".2"}),(0,c.jsx)("circle",{cx:"3.5",cy:"8",r:"1",stroke:b,strokeWidth:B}),(0,c.jsx)("rect",{x:"6.5",y:"7.5",width:"8",height:"1",rx:".5",fill:b,opacity:".2"}),(0,c.jsx)("circle",{cx:"3.5",cy:"11.5",r:"1",stroke:b,strokeWidth:B}),(0,c.jsx)("rect",{x:"6.5",y:"11",width:"11",height:"1",rx:".5",fill:b,opacity:".2"})]});case"chart":return(0,c.jsxs)("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[(0,c.jsx)("rect",{x:"3",y:"9",width:"2.5",height:"4",rx:".5",fill:b,opacity:".2"}),(0,c.jsx)("rect",{x:"7",y:"6",width:"2.5",height:"7",rx:".5",fill:b,opacity:".25"}),(0,c.jsx)("rect",{x:"11",y:"3",width:"2.5",height:"10",rx:".5",fill:b,opacity:".3"}),(0,c.jsx)("rect",{x:"15",y:"5",width:"2.5",height:"8",rx:".5",fill:b,opacity:".2"})]});case"accordion":return(0,c.jsxs)("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[(0,c.jsx)("rect",{x:"1.5",y:"2",width:"17",height:"4",rx:"1",stroke:b,strokeWidth:B}),(0,c.jsx)("rect",{x:"3",y:"3.5",width:"6",height:"1",rx:".5",fill:b,opacity:".25"}),(0,c.jsx)("rect",{x:"1.5",y:"7.5",width:"17",height:"3",rx:"1",stroke:b,strokeWidth:B}),(0,c.jsx)("rect",{x:"1.5",y:"12",width:"17",height:"3",rx:"1",stroke:b,strokeWidth:B})]});case"carousel":return(0,c.jsxs)("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[(0,c.jsx)("rect",{x:"3",y:"2",width:"14",height:"10",rx:"1",stroke:b,strokeWidth:B}),(0,c.jsx)("path",{d:"M1.5 7L3 8.5 1.5 10",stroke:b,strokeWidth:B,opacity:".35"}),(0,c.jsx)("path",{d:"M18.5 7L17 8.5 18.5 10",stroke:b,strokeWidth:B,opacity:".35"}),(0,c.jsx)("circle",{cx:"8.5",cy:"14",r:".6",fill:b,opacity:".35"}),(0,c.jsx)("circle",{cx:"10",cy:"14",r:".6",fill:b,opacity:".15"}),(0,c.jsx)("circle",{cx:"11.5",cy:"14",r:".6",fill:b,opacity:".15"})]});case"button":return(0,c.jsxs)("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[(0,c.jsx)("rect",{x:"3",y:"5",width:"14",height:"6",rx:"2",stroke:b,strokeWidth:B}),(0,c.jsx)("rect",{x:"6.5",y:"7.5",width:"7",height:"1",rx:".5",fill:b,opacity:".25"})]});case"input":return(0,c.jsxs)("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[(0,c.jsx)("rect",{x:"2",y:"4",width:"5.5",height:"1",rx:".5",fill:b,opacity:".25"}),(0,c.jsx)("rect",{x:"2",y:"6.5",width:"16",height:"5.5",rx:"1",stroke:b,strokeWidth:B}),(0,c.jsx)("rect",{x:"3.5",y:"8.5",width:"7",height:"1",rx:".5",fill:b,opacity:".12"})]});case"search":return(0,c.jsxs)("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[(0,c.jsx)("rect",{x:"2",y:"4.5",width:"16",height:"7",rx:"3.5",stroke:b,strokeWidth:B}),(0,c.jsx)("circle",{cx:"6",cy:"8",r:"2",stroke:b,strokeWidth:B,opacity:".3"}),(0,c.jsx)("line",{x1:"7.5",y1:"9.5",x2:"9",y2:"11",stroke:b,strokeWidth:B,opacity:".3"}),(0,c.jsx)("rect",{x:"9.5",y:"7.5",width:"6",height:"1",rx:".5",fill:b,opacity:".12"})]});case"form":return(0,c.jsxs)("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[(0,c.jsx)("rect",{x:"2",y:"1.5",width:"5.5",height:"1",rx:".5",fill:b,opacity:".25"}),(0,c.jsx)("rect",{x:"2",y:"3.5",width:"16",height:"3",rx:".75",stroke:b,strokeWidth:B}),(0,c.jsx)("rect",{x:"2",y:"8",width:"7",height:"1",rx:".5",fill:b,opacity:".25"}),(0,c.jsx)("rect",{x:"2",y:"10",width:"16",height:"3",rx:".75",stroke:b,strokeWidth:B}),(0,c.jsx)("rect",{x:"12",y:"14",width:"6",height:"2",rx:".75",stroke:b,strokeWidth:B})]});case"tabs":return(0,c.jsxs)("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[(0,c.jsx)("rect",{x:"1",y:"5",width:"18",height:"10",rx:"1",stroke:b,strokeWidth:B}),(0,c.jsx)("rect",{x:"1",y:"2",width:"6",height:"3.5",rx:".75",stroke:b,strokeWidth:B}),(0,c.jsx)("rect",{x:"2.5",y:"3.25",width:"3",height:"1",rx:".5",fill:b,opacity:".25"}),(0,c.jsx)("rect",{x:"7",y:"2",width:"6",height:"3.5",rx:".75",stroke:b,strokeWidth:B})]});case"dropdown":return(0,c.jsxs)("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[(0,c.jsx)("rect",{x:"2",y:"2",width:"16",height:"4",rx:"1",stroke:b,strokeWidth:B}),(0,c.jsx)("rect",{x:"3.5",y:"3.5",width:"7",height:"1",rx:".5",fill:b,opacity:".2"}),(0,c.jsx)("path",{d:"M15 3.5l1.5 1.5L18 3.5",stroke:b,strokeWidth:B,opacity:".3"}),(0,c.jsx)("rect",{x:"2",y:"7",width:"16",height:"7",rx:"1",stroke:b,strokeWidth:B,strokeDasharray:"2 1",opacity:".3"})]});case"toggle":return(0,c.jsxs)("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[(0,c.jsx)("rect",{x:"4",y:"5",width:"12",height:"6",rx:"3",stroke:b,strokeWidth:B}),(0,c.jsx)("circle",{cx:"13",cy:"8",r:"2",fill:b,opacity:".3"})]});case"avatar":return(0,c.jsxs)("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[(0,c.jsx)("circle",{cx:"10",cy:"8",r:"6",stroke:b,strokeWidth:B}),(0,c.jsx)("circle",{cx:"10",cy:"6.5",r:"2",stroke:b,strokeWidth:B}),(0,c.jsx)("path",{d:"M6.5 13c0-2 1.5-3.5 3.5-3.5s3.5 1.5 3.5 3.5",stroke:b,strokeWidth:B})]});case"badge":return(0,c.jsxs)("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[(0,c.jsx)("rect",{x:"3",y:"5",width:"14",height:"6",rx:"3",stroke:b,strokeWidth:B}),(0,c.jsx)("rect",{x:"6",y:"7.5",width:"8",height:"1",rx:".5",fill:b,opacity:".25"})]});case"breadcrumb":return(0,c.jsxs)("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[(0,c.jsx)("rect",{x:"1.5",y:"7",width:"3.5",height:"1",rx:".5",fill:b,opacity:".3"}),(0,c.jsx)("path",{d:"M6.5 7l1 1-1 1",stroke:b,strokeWidth:B,opacity:".2"}),(0,c.jsx)("rect",{x:"9",y:"7",width:"3.5",height:"1",rx:".5",fill:b,opacity:".2"}),(0,c.jsx)("path",{d:"M14 7l1 1-1 1",stroke:b,strokeWidth:B,opacity:".2"}),(0,c.jsx)("rect",{x:"16.5",y:"7",width:"2",height:"1",rx:".5",fill:b,opacity:".15"})]});case"pagination":return(0,c.jsxs)("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[(0,c.jsx)("rect",{x:"2",y:"5.5",width:"3.5",height:"5",rx:"1",stroke:b,strokeWidth:B}),(0,c.jsx)("rect",{x:"6.5",y:"5.5",width:"3.5",height:"5",rx:"1",stroke:b,strokeWidth:B}),(0,c.jsx)("rect",{x:"11",y:"5.5",width:"3.5",height:"5",rx:"1",fill:b,opacity:".15",stroke:b,strokeWidth:B}),(0,c.jsx)("rect",{x:"15.5",y:"5.5",width:"3.5",height:"5",rx:"1",stroke:b,strokeWidth:B})]});case"progress":return(0,c.jsxs)("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[(0,c.jsx)("rect",{x:"2",y:"7",width:"16",height:"2",rx:"1",stroke:b,strokeWidth:B}),(0,c.jsx)("rect",{x:"2",y:"7",width:"10",height:"2",rx:"1",fill:b,opacity:".2"})]});case"toast":return(0,c.jsxs)("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[(0,c.jsx)("rect",{x:"2",y:"4",width:"16",height:"8",rx:"1.5",stroke:b,strokeWidth:B}),(0,c.jsx)("circle",{cx:"5",cy:"8",r:"1.5",stroke:b,strokeWidth:B,opacity:".3"}),(0,c.jsx)("rect",{x:"8",y:"6.5",width:"7",height:"1",rx:".5",fill:b,opacity:".25"}),(0,c.jsx)("rect",{x:"8",y:"9",width:"5",height:"1",rx:".5",fill:b,opacity:".12"})]});case"tooltip":return(0,c.jsxs)("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[(0,c.jsx)("rect",{x:"3",y:"3",width:"14",height:"7",rx:"1.5",stroke:b,strokeWidth:B}),(0,c.jsx)("rect",{x:"5.5",y:"5.5",width:"9",height:"1",rx:".5",fill:b,opacity:".25"}),(0,c.jsx)("path",{d:"M9 10l1 2.5 1-2.5",stroke:b,strokeWidth:B})]});case"pricing":return(0,c.jsxs)("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[(0,c.jsx)("rect",{x:"2",y:"1",width:"16",height:"14",rx:"1.5",stroke:b,strokeWidth:B}),(0,c.jsx)("rect",{x:"6",y:"3",width:"8",height:"1.5",rx:".5",fill:b,opacity:".25"}),(0,c.jsx)("rect",{x:"7",y:"5.5",width:"6",height:"2",rx:".5",fill:b,opacity:".15"}),(0,c.jsx)("rect",{x:"5",y:"9",width:"10",height:"1",rx:".5",fill:b,opacity:".1"}),(0,c.jsx)("rect",{x:"5",y:"11",width:"10",height:"1",rx:".5",fill:b,opacity:".1"}),(0,c.jsx)("rect",{x:"6",y:"13",width:"8",height:"1.5",rx:".5",fill:b,opacity:".2"})]});case"testimonial":return(0,c.jsxs)("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[(0,c.jsx)("rect",{x:"2",y:"1",width:"16",height:"14",rx:"1.5",stroke:b,strokeWidth:B}),(0,c.jsx)("text",{x:"4",y:"5.5",fontSize:"4",fill:b,opacity:".2",fontFamily:"serif",children:"\u201C"}),(0,c.jsx)("rect",{x:"4",y:"7",width:"12",height:"1",rx:".5",fill:b,opacity:".15"}),(0,c.jsx)("rect",{x:"4",y:"9",width:"9",height:"1",rx:".5",fill:b,opacity:".12"}),(0,c.jsx)("circle",{cx:"5.5",cy:"12.5",r:"1.5",stroke:b,strokeWidth:B,opacity:".25"}),(0,c.jsx)("rect",{x:"8",y:"12",width:"5",height:"1",rx:".5",fill:b,opacity:".15"})]});case"cta":return(0,c.jsxs)("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[(0,c.jsx)("rect",{x:"1",y:"2",width:"18",height:"12",rx:"1",stroke:b,strokeWidth:B}),(0,c.jsx)("rect",{x:"5",y:"4.5",width:"10",height:"1.5",rx:".5",fill:b,opacity:".3"}),(0,c.jsx)("rect",{x:"6",y:"7.5",width:"8",height:"1",rx:".5",fill:b,opacity:".15"}),(0,c.jsx)("rect",{x:"7",y:"10",width:"6",height:"2.5",rx:"1",stroke:b,strokeWidth:B})]});case"alert":return(0,c.jsxs)("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[(0,c.jsx)("rect",{x:"2",y:"4",width:"16",height:"8",rx:"1.5",stroke:b,strokeWidth:B}),(0,c.jsx)("circle",{cx:"6",cy:"8",r:"2",stroke:b,strokeWidth:B,opacity:".3"}),(0,c.jsx)("line",{x1:"6",y1:"7",x2:"6",y2:"8.5",stroke:b,strokeWidth:"0.6",opacity:".5"}),(0,c.jsx)("circle",{cx:"6",cy:"9.3",r:".3",fill:b,opacity:".5"}),(0,c.jsx)("rect",{x:"9.5",y:"7",width:"6",height:"1",rx:".5",fill:b,opacity:".2"})]});case"banner":return(0,c.jsxs)("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[(0,c.jsx)("rect",{x:"1",y:"5",width:"18",height:"6",rx:"1",stroke:b,strokeWidth:B}),(0,c.jsx)("rect",{x:"4",y:"7.5",width:"8",height:"1",rx:".5",fill:b,opacity:".25"}),(0,c.jsx)("rect",{x:"14",y:"7",width:"3.5",height:"2",rx:".75",stroke:b,strokeWidth:B})]});case"stat":return(0,c.jsxs)("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[(0,c.jsx)("rect",{x:"3",y:"2",width:"14",height:"12",rx:"1.5",stroke:b,strokeWidth:B}),(0,c.jsx)("rect",{x:"6",y:"4.5",width:"8",height:"1",rx:".5",fill:b,opacity:".15"}),(0,c.jsx)("rect",{x:"5",y:"7",width:"10",height:"2.5",rx:".5",fill:b,opacity:".3"}),(0,c.jsx)("rect",{x:"7",y:"11",width:"6",height:"1",rx:".5",fill:b,opacity:".12"})]});case"stepper":return(0,c.jsxs)("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[(0,c.jsx)("circle",{cx:"4",cy:"8",r:"2",fill:b,opacity:".2",stroke:b,strokeWidth:B}),(0,c.jsx)("line",{x1:"6",y1:"8",x2:"8",y2:"8",stroke:b,strokeWidth:".4",opacity:".3"}),(0,c.jsx)("circle",{cx:"10",cy:"8",r:"2",stroke:b,strokeWidth:B}),(0,c.jsx)("line",{x1:"12",y1:"8",x2:"14",y2:"8",stroke:b,strokeWidth:".4",opacity:".3"}),(0,c.jsx)("circle",{cx:"16",cy:"8",r:"2",stroke:b,strokeWidth:B})]});case"tag":return(0,c.jsxs)("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[(0,c.jsx)("rect",{x:"3",y:"5",width:"14",height:"6",rx:"1.5",stroke:b,strokeWidth:B}),(0,c.jsx)("rect",{x:"5.5",y:"7.5",width:"6",height:"1",rx:".5",fill:b,opacity:".25"}),(0,c.jsx)("line",{x1:"14",y1:"6.5",x2:"15.5",y2:"9.5",stroke:b,strokeWidth:B,opacity:".2"}),(0,c.jsx)("line",{x1:"15.5",y1:"6.5",x2:"14",y2:"9.5",stroke:b,strokeWidth:B,opacity:".2"})]});case"rating":return(0,c.jsxs)("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[(0,c.jsx)("path",{d:"M4 5.5l1 2 2.2.3-1.6 1.5.4 2.2L4 10.3l-2 1.2.4-2.2L.8 7.8 3 7.5z",fill:b,opacity:".25"}),(0,c.jsx)("path",{d:"M10 5.5l1 2 2.2.3-1.6 1.5.4 2.2L10 10.3l-2 1.2.4-2.2L6.8 7.8 9 7.5z",fill:b,opacity:".25"}),(0,c.jsx)("path",{d:"M16 5.5l1 2 2.2.3-1.6 1.5.4 2.2L16 10.3l-2 1.2.4-2.2-1.6-1.5 2.2-.3z",stroke:b,strokeWidth:B,opacity:".25"})]});case"map":return(0,c.jsxs)("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[(0,c.jsx)("rect",{x:"2",y:"2",width:"16",height:"12",rx:"1",stroke:b,strokeWidth:B}),(0,c.jsx)("line",{x1:"2",y1:"6",x2:"18",y2:"10",stroke:b,strokeWidth:".3",opacity:".15"}),(0,c.jsx)("line",{x1:"7",y1:"2",x2:"11",y2:"14",stroke:b,strokeWidth:".3",opacity:".15"}),(0,c.jsx)("path",{d:"M10 5c-1.7 0-3 1.3-3 3 0 2.5 3 5 3 5s3-2.5 3-5c0-1.7-1.3-3-3-3z",fill:b,opacity:".15",stroke:b,strokeWidth:B})]});case"timeline":return(0,c.jsxs)("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[(0,c.jsx)("line",{x1:"5",y1:"2",x2:"5",y2:"14",stroke:b,strokeWidth:".4",opacity:".25"}),(0,c.jsx)("circle",{cx:"5",cy:"4",r:"1.5",fill:b,opacity:".2",stroke:b,strokeWidth:B}),(0,c.jsx)("rect",{x:"8",y:"3",width:"8",height:"1",rx:".5",fill:b,opacity:".25"}),(0,c.jsx)("circle",{cx:"5",cy:"8.5",r:"1.5",stroke:b,strokeWidth:B}),(0,c.jsx)("rect",{x:"8",y:"7.5",width:"6",height:"1",rx:".5",fill:b,opacity:".15"}),(0,c.jsx)("circle",{cx:"5",cy:"13",r:"1.5",stroke:b,strokeWidth:B}),(0,c.jsx)("rect",{x:"8",y:"12",width:"7",height:"1",rx:".5",fill:b,opacity:".15"})]});case"fileUpload":return(0,c.jsxs)("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[(0,c.jsx)("rect",{x:"3",y:"2",width:"14",height:"12",rx:"1.5",stroke:b,strokeWidth:B,strokeDasharray:"2 1"}),(0,c.jsx)("path",{d:"M10 10V5.5m0 0L7.5 8m2.5-2.5L12.5 8",stroke:b,strokeWidth:B,opacity:".3"}),(0,c.jsx)("rect",{x:"7",y:"11.5",width:"6",height:"1",rx:".5",fill:b,opacity:".15"})]});case"codeBlock":return(0,c.jsxs)("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[(0,c.jsx)("rect",{x:"2",y:"2",width:"16",height:"12",rx:"1",stroke:b,strokeWidth:B}),(0,c.jsx)("circle",{cx:"4",cy:"4",r:".6",fill:b,opacity:".3"}),(0,c.jsx)("circle",{cx:"5.5",cy:"4",r:".6",fill:b,opacity:".3"}),(0,c.jsx)("circle",{cx:"7",cy:"4",r:".6",fill:b,opacity:".3"}),(0,c.jsx)("rect",{x:"4",y:"7",width:"7",height:"1",rx:".5",fill:b,opacity:".2"}),(0,c.jsx)("rect",{x:"6",y:"9",width:"5",height:"1",rx:".5",fill:b,opacity:".15"}),(0,c.jsx)("rect",{x:"4",y:"11",width:"8",height:"1",rx:".5",fill:b,opacity:".12"})]});case"calendar":return(0,c.jsxs)("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[(0,c.jsx)("rect",{x:"2",y:"3",width:"16",height:"12",rx:"1",stroke:b,strokeWidth:B}),(0,c.jsx)("line",{x1:"2",y1:"6.5",x2:"18",y2:"6.5",stroke:b,strokeWidth:".4",opacity:".25"}),(0,c.jsx)("rect",{x:"5",y:"4",width:"1",height:"1.5",rx:".3",fill:b,opacity:".2"}),(0,c.jsx)("rect",{x:"14",y:"4",width:"1",height:"1.5",rx:".3",fill:b,opacity:".2"}),(0,c.jsx)("circle",{cx:"7",cy:"9",r:".6",fill:b,opacity:".2"}),(0,c.jsx)("circle",{cx:"10",cy:"9",r:".6",fill:b,opacity:".2"}),(0,c.jsx)("circle",{cx:"13",cy:"9",r:".6",fill:b,opacity:".3"}),(0,c.jsx)("circle",{cx:"7",cy:"12",r:".6",fill:b,opacity:".2"}),(0,c.jsx)("circle",{cx:"10",cy:"12",r:".6",fill:b,opacity:".2"})]});case"notification":return(0,c.jsxs)("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[(0,c.jsx)("rect",{x:"2",y:"3",width:"16",height:"10",rx:"1.5",stroke:b,strokeWidth:B}),(0,c.jsx)("circle",{cx:"5.5",cy:"8",r:"2",stroke:b,strokeWidth:B,opacity:".25"}),(0,c.jsx)("rect",{x:"9",y:"6",width:"6",height:"1",rx:".5",fill:b,opacity:".25"}),(0,c.jsx)("rect",{x:"9",y:"8.5",width:"4.5",height:"1",rx:".5",fill:b,opacity:".12"}),(0,c.jsx)("circle",{cx:"16.5",cy:"4.5",r:"1.5",fill:b,opacity:".25"})]});case"productCard":return(0,c.jsxs)("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[(0,c.jsx)("rect",{x:"3",y:"1",width:"14",height:"14",rx:"1.5",stroke:b,strokeWidth:B}),(0,c.jsx)("rect",{x:"3",y:"1",width:"14",height:"6",rx:"1",fill:b,opacity:".04"}),(0,c.jsx)("rect",{x:"5",y:"8.5",width:"7",height:"1",rx:".5",fill:b,opacity:".25"}),(0,c.jsx)("rect",{x:"5",y:"10.5",width:"4",height:"1.5",rx:".5",fill:b,opacity:".15"}),(0,c.jsx)("rect",{x:"12",y:"12",width:"4",height:"2",rx:".75",stroke:b,strokeWidth:B})]});case"profile":return(0,c.jsxs)("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[(0,c.jsx)("circle",{cx:"10",cy:"5",r:"3",stroke:b,strokeWidth:B}),(0,c.jsx)("rect",{x:"5",y:"10",width:"10",height:"1.5",rx:".5",fill:b,opacity:".25"}),(0,c.jsx)("rect",{x:"7",y:"12.5",width:"6",height:"1",rx:".5",fill:b,opacity:".12"})]});case"drawer":return(0,c.jsxs)("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[(0,c.jsx)("rect",{x:"9",y:"1",width:"10",height:"14",rx:"1",stroke:b,strokeWidth:B}),(0,c.jsx)("rect",{x:"10.5",y:"4",width:"5",height:"1",rx:".5",fill:b,opacity:".25"}),(0,c.jsx)("rect",{x:"10.5",y:"6.5",width:"7",height:"1",rx:".5",fill:b,opacity:".15"}),(0,c.jsx)("rect",{x:"10.5",y:"9",width:"6",height:"1",rx:".5",fill:b,opacity:".15"}),(0,c.jsx)("rect",{x:"1",y:"1",width:"7",height:"14",rx:"1",stroke:b,strokeWidth:B,opacity:".15"})]});case"popover":return(0,c.jsxs)("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[(0,c.jsx)("rect",{x:"3",y:"2",width:"14",height:"9",rx:"1.5",stroke:b,strokeWidth:B}),(0,c.jsx)("rect",{x:"5",y:"4.5",width:"8",height:"1",rx:".5",fill:b,opacity:".25"}),(0,c.jsx)("rect",{x:"5",y:"7",width:"6",height:"1",rx:".5",fill:b,opacity:".15"}),(0,c.jsx)("path",{d:"M9 11l1 2.5 1-2.5",stroke:b,strokeWidth:B})]});case"logo":return(0,c.jsxs)("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[(0,c.jsx)("rect",{x:"2",y:"3",width:"10",height:"10",rx:"2",stroke:b,strokeWidth:B}),(0,c.jsx)("path",{d:"M5 9.5l2-4 2 4",stroke:b,strokeWidth:B,opacity:".3"}),(0,c.jsx)("rect",{x:"14",y:"6",width:"4",height:"1",rx:".5",fill:b,opacity:".2"}),(0,c.jsx)("rect",{x:"14",y:"8.5",width:"3",height:"1",rx:".5",fill:b,opacity:".12"})]});case"faq":return(0,c.jsxs)("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[(0,c.jsx)("text",{x:"2.5",y:"5.5",fontSize:"4",fill:b,opacity:".3",fontWeight:"bold",children:"?"}),(0,c.jsx)("rect",{x:"7",y:"3",width:"10",height:"1",rx:".5",fill:b,opacity:".25"}),(0,c.jsx)("rect",{x:"7",y:"5.5",width:"8",height:"1",rx:".5",fill:b,opacity:".12"}),(0,c.jsx)("text",{x:"2.5",y:"11.5",fontSize:"4",fill:b,opacity:".3",fontWeight:"bold",children:"?"}),(0,c.jsx)("rect",{x:"7",y:"9",width:"9",height:"1",rx:".5",fill:b,opacity:".25"}),(0,c.jsx)("rect",{x:"7",y:"11.5",width:"7",height:"1",rx:".5",fill:b,opacity:".12"})]});case"gallery":return(0,c.jsxs)("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[(0,c.jsx)("rect",{x:"1.5",y:"1.5",width:"5",height:"5",rx:".75",stroke:b,strokeWidth:B}),(0,c.jsx)("rect",{x:"7.5",y:"1.5",width:"5",height:"5",rx:".75",stroke:b,strokeWidth:B}),(0,c.jsx)("rect",{x:"13.5",y:"1.5",width:"5",height:"5",rx:".75",stroke:b,strokeWidth:B}),(0,c.jsx)("rect",{x:"1.5",y:"9.5",width:"5",height:"5",rx:".75",stroke:b,strokeWidth:B}),(0,c.jsx)("rect",{x:"7.5",y:"9.5",width:"5",height:"5",rx:".75",stroke:b,strokeWidth:B}),(0,c.jsx)("rect",{x:"13.5",y:"9.5",width:"5",height:"5",rx:".75",stroke:b,strokeWidth:B})]});case"checkbox":return(0,c.jsxs)("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[(0,c.jsx)("rect",{x:"5",y:"4",width:"8",height:"8",rx:"1.5",stroke:b,strokeWidth:B}),(0,c.jsx)("path",{d:"M7.5 8l1.5 1.5 3-3",stroke:b,strokeWidth:B,opacity:".35"})]});case"radio":return(0,c.jsxs)("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[(0,c.jsx)("circle",{cx:"10",cy:"8",r:"4",stroke:b,strokeWidth:B}),(0,c.jsx)("circle",{cx:"10",cy:"8",r:"2",fill:b,opacity:".3"})]});case"slider":return(0,c.jsxs)("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[(0,c.jsx)("rect",{x:"2",y:"7.5",width:"16",height:"1",rx:".5",fill:b,opacity:".15"}),(0,c.jsx)("rect",{x:"2",y:"7.5",width:"10",height:"1",rx:".5",fill:b,opacity:".25"}),(0,c.jsx)("circle",{cx:"12",cy:"8",r:"2.5",stroke:b,strokeWidth:B})]});case"datePicker":return(0,c.jsxs)("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[(0,c.jsx)("rect",{x:"2",y:"1",width:"16",height:"5",rx:"1",stroke:b,strokeWidth:B}),(0,c.jsx)("rect",{x:"3.5",y:"3",width:"5",height:"1",rx:".5",fill:b,opacity:".2"}),(0,c.jsx)("rect",{x:"14",y:"2.5",width:"2.5",height:"2",rx:".5",fill:b,opacity:".12"}),(0,c.jsx)("rect",{x:"2",y:"7",width:"16",height:"8",rx:"1",stroke:b,strokeWidth:B,strokeDasharray:"2 1",opacity:".3"}),(0,c.jsx)("circle",{cx:"6",cy:"10",r:".6",fill:b,opacity:".2"}),(0,c.jsx)("circle",{cx:"10",cy:"10",r:".6",fill:b,opacity:".3"}),(0,c.jsx)("circle",{cx:"14",cy:"10",r:".6",fill:b,opacity:".2"}),(0,c.jsx)("circle",{cx:"6",cy:"13",r:".6",fill:b,opacity:".2"}),(0,c.jsx)("circle",{cx:"10",cy:"13",r:".6",fill:b,opacity:".2"})]});case"skeleton":return(0,c.jsxs)("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[(0,c.jsx)("rect",{x:"2",y:"2",width:"16",height:"3",rx:"1",fill:b,opacity:".08"}),(0,c.jsx)("rect",{x:"2",y:"7",width:"10",height:"2",rx:".75",fill:b,opacity:".08"}),(0,c.jsx)("rect",{x:"2",y:"11",width:"13",height:"2",rx:".75",fill:b,opacity:".08"})]});case"chip":return(0,c.jsxs)("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[(0,c.jsx)("rect",{x:"1.5",y:"5",width:"10",height:"6",rx:"3",fill:b,opacity:".08",stroke:b,strokeWidth:B}),(0,c.jsx)("rect",{x:"4",y:"7.5",width:"4",height:"1",rx:".5",fill:b,opacity:".25"}),(0,c.jsx)("line",{x1:"9.5",y1:"6.5",x2:"10.5",y2:"9.5",stroke:b,strokeWidth:B,opacity:".2"}),(0,c.jsx)("line",{x1:"10.5",y1:"6.5",x2:"9.5",y2:"9.5",stroke:b,strokeWidth:B,opacity:".2"}),(0,c.jsx)("rect",{x:"13",y:"5",width:"5.5",height:"6",rx:"3",stroke:b,strokeWidth:B,opacity:".25"})]});case"icon":return(0,c.jsx)("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:(0,c.jsx)("path",{d:"M10 3l1.5 3 3.5.5-2.5 2.5.5 3.5L10 11l-3 1.5.5-3.5L5 6.5l3.5-.5z",stroke:b,strokeWidth:B,opacity:".3"})});case"spinner":return(0,c.jsxs)("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[(0,c.jsx)("circle",{cx:"10",cy:"8",r:"5",stroke:b,strokeWidth:B,opacity:".12"}),(0,c.jsx)("path",{d:"M10 3a5 5 0 0 1 5 5",stroke:b,strokeWidth:B,opacity:".35",strokeLinecap:"round"})]});case"feature":return(0,c.jsxs)("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[(0,c.jsx)("rect",{x:"2",y:"2",width:"5",height:"5",rx:"1.5",stroke:b,strokeWidth:B}),(0,c.jsx)("path",{d:"M4.5 3.5v3m-1.5-1.5h3",stroke:b,strokeWidth:B,opacity:".25"}),(0,c.jsx)("rect",{x:"9",y:"2.5",width:"8",height:"1.5",rx:".5",fill:b,opacity:".25"}),(0,c.jsx)("rect",{x:"9",y:"5.5",width:"6",height:"1",rx:".5",fill:b,opacity:".12"}),(0,c.jsx)("rect",{x:"2",y:"10",width:"5",height:"5",rx:"1.5",stroke:b,strokeWidth:B}),(0,c.jsx)("rect",{x:"9",y:"10.5",width:"7",height:"1.5",rx:".5",fill:b,opacity:".25"}),(0,c.jsx)("rect",{x:"9",y:"13.5",width:"5",height:"1",rx:".5",fill:b,opacity:".12"})]});case"team":return(0,c.jsxs)("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[(0,c.jsx)("circle",{cx:"5",cy:"5",r:"2.5",stroke:b,strokeWidth:B}),(0,c.jsx)("rect",{x:"2.5",y:"9",width:"5",height:"1",rx:".5",fill:b,opacity:".2"}),(0,c.jsx)("circle",{cx:"15",cy:"5",r:"2.5",stroke:b,strokeWidth:B}),(0,c.jsx)("rect",{x:"12.5",y:"9",width:"5",height:"1",rx:".5",fill:b,opacity:".2"}),(0,c.jsx)("circle",{cx:"10",cy:"5",r:"2.5",stroke:b,strokeWidth:B,opacity:".5"}),(0,c.jsx)("rect",{x:"7.5",y:"9",width:"5",height:"1",rx:".5",fill:b,opacity:".15"}),(0,c.jsx)("rect",{x:"4",y:"12",width:"12",height:"1",rx:".5",fill:b,opacity:".1"})]});case"login":return(0,c.jsxs)("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[(0,c.jsx)("rect",{x:"3",y:"1",width:"14",height:"14",rx:"1.5",stroke:b,strokeWidth:B}),(0,c.jsx)("rect",{x:"6",y:"3",width:"8",height:"1.5",rx:".5",fill:b,opacity:".25"}),(0,c.jsx)("rect",{x:"5",y:"5.5",width:"10",height:"3",rx:".75",stroke:b,strokeWidth:B}),(0,c.jsx)("rect",{x:"5",y:"9.5",width:"10",height:"3",rx:".75",stroke:b,strokeWidth:B}),(0,c.jsx)("rect",{x:"6.5",y:"13.5",width:"7",height:"2",rx:".75",fill:b,opacity:".2"})]});case"contact":return(0,c.jsxs)("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[(0,c.jsx)("rect",{x:"2",y:"1",width:"16",height:"14",rx:"1.5",stroke:b,strokeWidth:B}),(0,c.jsx)("rect",{x:"4",y:"3",width:"5",height:"1",rx:".5",fill:b,opacity:".2"}),(0,c.jsx)("rect",{x:"4",y:"5",width:"12",height:"2.5",rx:".75",stroke:b,strokeWidth:B}),(0,c.jsx)("rect",{x:"4",y:"8.5",width:"12",height:"4",rx:".75",stroke:b,strokeWidth:B}),(0,c.jsx)("rect",{x:"11",y:"13.5",width:"5",height:"1.5",rx:".5",fill:b,opacity:".2"})]});default:return null}}function h4({activeType:e,onSelect:t,onDragStart:n,scrollRef:l,fadeClass:o,blankCanvas:a}){return(0,c.jsx)("div",{ref:l,className:`${$.placeScroll} ${o||""}`,children:b5.map(i=>(0,c.jsxs)("div",{className:$.paletteSection,children:[(0,c.jsx)("div",{className:$.paletteSectionTitle,children:i.section}),i.items.map(r=>(0,c.jsxs)("button",{type:"button","aria-pressed":e===r.type,className:`${$.paletteItem} ${e===r.type?$.active:""} ${a?$.wireframe:""}`,onClick:()=>t(r.type),onMouseDown:s=>{s.button===0&&n(r.type,s)},children:[(0,c.jsx)("span",{className:$.paletteItemIcon,"aria-hidden":"true",children:(0,c.jsx)(f4,{type:r.type})}),(0,c.jsx)("span",{className:$.paletteItemLabel,children:r.label})]},r.type))]},i.section))})}function m4({value:e,suffix:t}){let[n,l]=(0,sn.useState)(null),[o,a]=(0,sn.useState)(t),[i,r]=(0,sn.useState)("up"),s=(0,sn.useRef)(e),d=(0,sn.useRef)(t),h=(0,sn.useRef)(),_=n!==null&&o!==t;return(0,sn.useEffect)(()=>{if(e!==s.current){if(e===0){s.current=e,d.current=t,l(null);return}r(e>s.current?"up":"down"),l(s.current),a(d.current),s.current=e,d.current=t,clearTimeout(h.current),h.current=rt(()=>l(null),250)}else d.current=t},[e,t]),n===null?(0,c.jsxs)(c.Fragment,{children:[e,t?` ${t}`:""]}):_?(0,c.jsxs)("span",{className:$.rollingWrap,children:[(0,c.jsxs)("span",{style:{visibility:"hidden"},children:[e," ",t]}),(0,c.jsxs)("span",{className:`${$.rollingNum} ${i==="up"?$.exitUp:$.exitDown}`,children:[n," ",o]},`o${n}-${e}`),(0,c.jsxs)("span",{className:`${$.rollingNum} ${i==="up"?$.enterUp:$.enterDown}`,children:[e," ",t]},`n${e}`)]}):(0,c.jsxs)(c.Fragment,{children:[(0,c.jsxs)("span",{className:$.rollingWrap,children:[(0,c.jsx)("span",{style:{visibility:"hidden"},children:e}),(0,c.jsx)("span",{className:`${$.rollingNum} ${i==="up"?$.exitUp:$.exitDown}`,children:n},`o${n}-${e}`),(0,c.jsx)("span",{className:`${$.rollingNum} ${i==="up"?$.enterUp:$.enterDown}`,children:e},`n${e}`)]}),t?` ${t}`:""]})}function g4({activeType:e,onSelect:t,isDarkMode:n,sectionCount:l,onDetectSections:o,visible:a,onExited:i,placementCount:r,onClearPlacements:s,onDragStart:d,blankCanvas:h,onBlankCanvasChange:_,wireframePurpose:m,onWireframePurposeChange:v,Tooltip:k}){let{ref:A,mounted:M}=x5(a,{onExited:i}),[p,x]=(0,sn.useState)(!1),[g,S]=(0,sn.useState)(!0),W=(0,sn.useRef)(0),J=(0,sn.useRef)(""),z=(0,sn.useRef)(null),[K,O]=(0,sn.useState)(""),F=r>0||l>0,re=r+l;if(re>0&&(W.current=re,J.current=h?re===1?"Component":"Components":re===1?"Change":"Changes"),(0,sn.useEffect)(()=>{if(F)p?S(!1):(S(!0),x(!0),Iu(()=>{Iu(()=>{S(!1)})}));else{S(!0);let _e=rt(()=>x(!1),300);return()=>clearTimeout(_e)}},[F]),(0,sn.useEffect)(()=>{if(!a)return;let _e=z.current;if(!_e)return;let oe=()=>O(_4(_e));_e.addEventListener("scroll",oe,{passive:!0});let se=new ResizeObserver(oe);return se.observe(_e),()=>{_e.removeEventListener("scroll",oe),se.disconnect()}},[a]),!M)return null;let Z=[];return r>0&&Z.push("placed"),l>0&&Z.push("captured"),(0,c.jsxs)("div",{className:`${$.palette} ${n?"":$.light}`,ref:_e=>{A.current=_e,_e?.toggleAttribute("inert",!a)},"aria-hidden":!a,"data-feedback-toolbar":!0,"data-agentation-palette":!0,onClick:_e=>_e.stopPropagation(),onMouseDown:_e=>_e.stopPropagation(),children:[(0,c.jsxs)("div",{className:$.paletteHeader,children:[(0,c.jsx)("div",{className:$.paletteHeaderTitle,children:"Layout Mode"}),(0,c.jsxs)("div",{className:$.paletteHeaderDesc,children:["Rearrange and resize existing elements, add new components, and explore layout ideas. Agent results may vary."," ",(0,c.jsx)("a",{href:"https://agentation.com/features#layout-mode",target:"_blank",rel:"noopener noreferrer",children:"Learn more."})]})]}),(0,c.jsxs)("button",{type:"button","aria-pressed":h,className:`${$.canvasToggle} ${h?$.active:""}`,onClick:()=>_(!h),children:[(0,c.jsx)("span",{className:$.canvasToggleIcon,"aria-hidden":"true",children:(0,c.jsxs)("svg",{viewBox:"0 0 14 14",width:"14",height:"14",fill:"none",children:[(0,c.jsx)("rect",{x:"1",y:"1",width:"12",height:"12",rx:"2",stroke:"currentColor",strokeWidth:"1"}),(0,c.jsx)("circle",{cx:"4.5",cy:"4.5",r:"0.8",fill:"currentColor",opacity:".6"}),(0,c.jsx)("circle",{cx:"7",cy:"4.5",r:"0.8",fill:"currentColor",opacity:".6"}),(0,c.jsx)("circle",{cx:"9.5",cy:"4.5",r:"0.8",fill:"currentColor",opacity:".6"}),(0,c.jsx)("circle",{cx:"4.5",cy:"7",r:"0.8",fill:"currentColor",opacity:".6"}),(0,c.jsx)("circle",{cx:"7",cy:"7",r:"0.8",fill:"currentColor",opacity:".6"}),(0,c.jsx)("circle",{cx:"9.5",cy:"7",r:"0.8",fill:"currentColor",opacity:".6"}),(0,c.jsx)("circle",{cx:"4.5",cy:"9.5",r:"0.8",fill:"currentColor",opacity:".6"}),(0,c.jsx)("circle",{cx:"7",cy:"9.5",r:"0.8",fill:"currentColor",opacity:".6"}),(0,c.jsx)("circle",{cx:"9.5",cy:"9.5",r:"0.8",fill:"currentColor",opacity:".6"})]})}),(0,c.jsx)("span",{className:$.canvasToggleLabel,children:"Wireframe New Page"})]}),(0,c.jsx)("div",{className:`${$.wireframePurposeWrap} ${h?"":$.collapsed}`,"aria-hidden":!h,ref:_e=>{_e?.toggleAttribute("inert",!h)},children:(0,c.jsx)("div",{className:$.wireframePurposeInner,children:(0,c.jsx)("textarea",{className:$.wireframePurposeInput,placeholder:"Describe this page to provide additional context for your agent.",value:m,onChange:_e=>v(_e.target.value),rows:2})})}),(0,c.jsx)(h4,{activeType:e,onSelect:t,onDragStart:d,scrollRef:z,fadeClass:K,blankCanvas:h}),p&&(0,c.jsx)("div",{className:`${$.paletteFooterWrap} ${g?$.footerHidden:""}`,children:(0,c.jsx)("div",{className:$.paletteFooterInner,children:(0,c.jsx)("div",{className:$.paletteFooterInnerContent,children:(0,c.jsxs)("div",{className:$.paletteFooter,children:[(0,c.jsx)("span",{className:$.paletteFooterCount,children:(0,c.jsx)(m4,{value:W.current,suffix:J.current})}),(0,c.jsx)("button",{className:$.paletteFooterClear,onClick:s,children:"Clear"})]})})})})]})}var p4=new Set(["nav","header","main","section","article","footer","aside"]),Mh={banner:"Header",navigation:"Navigation",main:"Main Content",contentinfo:"Footer",complementary:"Sidebar",region:"Section"},Ly={nav:"Navigation",header:"Header",main:"Main Content",section:"Section",article:"Article",footer:"Footer",aside:"Sidebar"},y4=new Set(["script","style","noscript","link","meta"]),b4=40;function v5(e){let t=e;for(;t&&t!==document.body&&t!==document.documentElement;){let n=window.getComputedStyle(t).position;if(n==="fixed"||n==="sticky")return!0;t=t.parentElement}return!1}function Xa(e){let t=e.tagName.toLowerCase();if(["nav","header","footer","main"].includes(t)&&document.querySelectorAll(t).length===1)return t;if(e.id)return`#${CSS.escape(e.id)}`;if(e.className&&typeof e.className=="string"){let o=e.className.split(/\s+/).filter(a=>a.length>0).find(a=>a.length>2&&!/^[a-zA-Z0-9]{6,}$/.test(a)&&!/^[a-z]{1,2}$/.test(a));if(o){let a=`${t}.${CSS.escape(o)}`;if(document.querySelectorAll(a).length===1)return a}}let n=e.parentElement;if(n){let o=Array.from(n.children).indexOf(e)+1;return`${n===document.body?"body":Xa(n)} > ${t}:nth-child(${o})`}return t}function Qu(e){let t=e.tagName.toLowerCase(),n=e.getAttribute("aria-label");if(n)return n;let l=e.getAttribute("role");if(l&&Mh[l])return Mh[l];if(Ly[t])return Ly[t];let o=e.querySelector("h1, h2, h3, h4, h5, h6");if(o){let i=o.textContent?.trim();if(i&&i.length<=50)return i;if(i)return i.slice(0,47)+"..."}let{name:a}=Gi(e);return a.charAt(0).toUpperCase()+a.slice(1)}function w5(e){let t=e.className;return typeof t!="string"||!t?null:t.split(/\s+/).map(l=>l.replace(/[_][a-zA-Z0-9]{5,}.*$/,"")).find(l=>l.length>2&&!/^[a-z]{1,2}$/.test(l))||null}function k5(e){let t=e.textContent?.trim();if(!t)return null;let n=t.replace(/\s+/g," ");return n.length<=30?n:n.slice(0,30)+"\u2026"}function x4(){let e=document.querySelector("main")||document.body,t=Array.from(e.children),n=t;e!==document.body&&t.length<3&&(n=Array.from(document.body.children));let l=[];return n.forEach((o,a)=>{if(!(o instanceof HTMLElement))return;let i=o.tagName.toLowerCase();if(y4.has(i)||o.hasAttribute("data-feedback-toolbar")||o.closest("[data-feedback-toolbar]"))return;let r=window.getComputedStyle(o);if(r.display==="none"||r.visibility==="hidden")return;let s=o.getBoundingClientRect();if(s.height<b4)return;let d=p4.has(i),h=o.getAttribute("role")&&Mh[o.getAttribute("role")],_=i==="div"&&s.height>=60;if(!d&&!h&&!_)return;let m=window.scrollY,v=v5(o),k={x:s.x,y:v?s.y:s.y+m,width:s.width,height:s.height};l.push({id:`rs-${Date.now()}-${Math.random().toString(36).slice(2,7)}`,label:Qu(o),tagName:i,selector:Xa(o),role:o.getAttribute("role"),className:w5(o),textSnippet:k5(o),originalRect:k,currentRect:{...k},originalIndex:a,isFixed:v})}),l}function v4(e){let t=window.scrollY,n=e.getBoundingClientRect(),l=v5(e),o={x:n.x,y:l?n.y:n.y+t,width:n.width,height:n.height},a=e.parentElement,i=0;return a&&(i=Array.from(a.children).indexOf(e)),{id:`rs-${Date.now()}-${Math.random().toString(36).slice(2,7)}`,label:Qu(e),tagName:e.tagName.toLowerCase(),selector:Xa(e),role:e.getAttribute("role"),className:w5(e),textSnippet:k5(e),originalRect:o,currentRect:{...o},originalIndex:i,isFixed:l}}var zy={bg:"rgba(59, 130, 246, 0.08)",border:"rgba(59, 130, 246, 0.5)",pill:"#3b82f6"},Oy=["nw","n","ne","e","se","s","sw","w"],zu=24,By=16,Ou=5;function $y(e,t,n,l){let o=1/0,a=1/0,i=e.x,r=e.x+e.width,s=e.x+e.width/2,d=e.y,h=e.y+e.height,_=e.y+e.height/2,m=[];for(let z of t)n.has(z.id)||m.push(z.currentRect);l&&m.push(...l);for(let z of m){let K=z.x,O=z.x+z.width,F=z.x+z.width/2,re=z.y,Z=z.y+z.height,_e=z.y+z.height/2;for(let oe of[i,r,s])for(let se of[K,O,F]){let he=se-oe;Math.abs(he)<Ou&&Math.abs(he)<Math.abs(o)&&(o=he)}for(let oe of[d,h,_])for(let se of[re,Z,_e]){let he=se-oe;Math.abs(he)<Ou&&Math.abs(he)<Math.abs(a)&&(a=he)}}let v=Math.abs(o)<Ou?o:0,k=Math.abs(a)<Ou?a:0,A=[],M=new Set,p=i+v,x=r+v,g=s+v,S=d+k,W=h+k,J=_+k;for(let z of m){let K=z.x,O=z.x+z.width,F=z.x+z.width/2,re=z.y,Z=z.y+z.height,_e=z.y+z.height/2;for(let oe of[K,F,O])for(let se of[p,g,x])if(Math.abs(se-oe)<.5){let he=`x:${Math.round(oe)}`;M.has(he)||(M.add(he),A.push({axis:"x",pos:oe}))}for(let oe of[re,_e,Z])for(let se of[S,J,W])if(Math.abs(se-oe)<.5){let he=`y:${Math.round(oe)}`;M.has(he)||(M.add(he),A.push({axis:"y",pos:oe}))}}return{dx:v,dy:k,guides:A}}var w4=new Set(["script","style","noscript","link","meta","br","hr"]);function Hy(e){let t=e;for(;t&&t!==document.body&&t!==document.documentElement;){if(t.closest("[data-feedback-toolbar]"))return null;if(w4.has(t.tagName.toLowerCase())){t=t.parentElement;continue}let n=t.getBoundingClientRect();if(n.width>=By&&n.height>=By)return t;t=t.parentElement}return null}function k4({rearrangeState:e,onChange:t,isDarkMode:n,exiting:l,className:o,blankCanvas:a,extraSnapRects:i,onSelectionChange:r,deselectSignal:s,onDragMove:d,onDragEnd:h,clearing:_}){let{sections:m}=e,v=(0,Se.useRef)(e);v.current=e;let[k,A]=(0,Se.useState)(new Set);(0,Se.useEffect)(()=>{_&&A(new Set)},[_]);let M=(0,Se.useRef)(s);(0,Se.useEffect)(()=>{s!==M.current&&(M.current=s,A(new Set))},[s]);let[p,x]=(0,Se.useState)(null),[g,S]=(0,Se.useState)(!1),W=(0,Se.useRef)(!1),J=(0,Se.useCallback)(T=>{let D=m.find(U=>U.id===T);D&&(W.current=!!D.note,x(T),S(!1))},[m]),z=(0,Se.useCallback)(()=>{p&&(S(!0),rt(()=>{x(null),S(!1)},150))},[p]),K=(0,Se.useCallback)(T=>{p&&(t({...e,sections:m.map(D=>D.id===p?{...D,note:T.trim()||void 0}:D)}),z())},[p,m,e,t,z]);(0,Se.useEffect)(()=>{l&&p&&z()},[l]);let[O,F]=(0,Se.useState)(new Set),re=(0,Se.useRef)(new Map),[Z,_e]=(0,Se.useState)(null),[oe,se]=(0,Se.useState)(null),[he,Dt]=(0,Se.useState)([]),[Ue,tt]=(0,Se.useState)(0),Ye=(0,Se.useRef)(null),xt=(0,Se.useRef)(new Set),cn=(0,Se.useRef)(new Map),[An,De]=(0,Se.useState)(new Map),[pl,Ql]=(0,Se.useState)(new Map),vo=(0,Se.useRef)(new Set),wo=(0,Se.useRef)(new Map),Wl=(0,Se.useRef)(r);Wl.current=r;let Gl=(0,Se.useRef)(d);Gl.current=d;let Vl=(0,Se.useRef)(h);Vl.current=h,(0,Se.useEffect)(()=>{a&&A(new Set)},[a]);let[It,yl]=(0,Se.useState)(()=>!e.sections.some(T=>{let D=T.originalRect,U=T.currentRect;return Math.abs(D.x-U.x)>1||Math.abs(D.y-U.y)>1||Math.abs(D.width-U.width)>1||Math.abs(D.height-U.height)>1}));(0,Se.useEffect)(()=>{if(!It){let T=rt(()=>yl(!0),380);return()=>clearTimeout(T)}},[]);let Tl=(0,Se.useRef)(new Set);(0,Se.useEffect)(()=>{Tl.current=new Set(m.map(T=>T.selector))},[m]),(0,Se.useEffect)(()=>{let T=()=>tt(window.scrollY);return T(),window.addEventListener("scroll",T,{passive:!0}),window.addEventListener("resize",T,{passive:!0}),()=>{window.removeEventListener("scroll",T),window.removeEventListener("resize",T)}},[]),(0,Se.useEffect)(()=>{let T=D=>{if(Ye.current){_e(null);return}let U=document.elementFromPoint(D.clientX,D.clientY);if(!U){_e(null);return}if(U.closest("[data-feedback-toolbar]")){_e(null);return}if(U.closest("[data-design-placement]")){_e(null);return}if(U.closest("[data-annotation-popup]")){_e(null);return}let X=Hy(U);if(!X){_e(null);return}for(let ee of Tl.current)try{let Q=document.querySelector(ee);if(Q&&(Q===X||X.contains(Q))){_e(null);return}}catch{}let P=X.getBoundingClientRect();_e({x:P.x,y:P.y,w:P.width,h:P.height})};return document.addEventListener("mousemove",T,{passive:!0}),()=>document.removeEventListener("mousemove",T)},[m]),(0,Se.useEffect)(()=>{let T=document.body.style.userSelect;return document.body.style.webkitUserSelect="none",document.body.style.userSelect="none",()=>{document.body.style.webkitUserSelect=T,document.body.style.userSelect=T}},[]),(0,Se.useEffect)(()=>{let T=D=>{if(Ye.current||D.button!==0)return;let U=D.composedPath()[0]??D.target;if(!U||U.closest("[data-feedback-toolbar]")||U.closest("[data-design-placement]")||U.closest("[data-annotation-popup]"))return;let X=Hy(U),P=!1;if(X)for(let Q of Tl.current)try{let ce=document.querySelector(Q);if(ce&&(ce===X||X.contains(ce))){P=!0;break}}catch{}let ee=!!(D.shiftKey||D.metaKey||D.ctrlKey);if(X&&!P){D.preventDefault(),D.stopPropagation();let Q=v4(X),ce=[...m,Q],we=[...e.originalOrder,Q.id];t({...e,sections:ce,originalOrder:we});let ze=new Set([Q.id]);A(ze),Wl.current?.(ze,ee),_e(null);let ct=D.clientX,ht=D.clientY,lt={x:Q.currentRect.x,y:Q.currentRect.y},qe=Q.originalRect,Ne=!1,Tt=0,Ct=0;Ye.current="move";let mt=ot=>{let vt=ot.clientX-ct,gt=ot.clientY-ht;if(!Ne&&(Math.abs(vt)>2||Math.abs(gt)>2)&&(Ne=!0),!Ne)return;let ae={x:lt.x+vt,y:lt.y+gt,width:Q.currentRect.width,height:Q.currentRect.height},Yn=$y(ae,ce,new Set([Q.id]),i);Dt(Yn.guides);let Nn=vt+Yn.dx,yn=gt+Yn.dy;Tt=Nn,Ct=yn;let Al=q().querySelector(`[data-rearrange-section="${Q.id}"]`);Al&&(Al.style.transform=`translate(${Nn}px, ${yn}px)`),De(new Map([[Q.id,{x:lt.x+Nn,y:lt.y+yn,width:Q.currentRect.width,height:Q.currentRect.height}]])),Gl.current?.(Nn,yn)},Be=()=>{window.removeEventListener("mousemove",mt),window.removeEventListener("mouseup",Be),Ye.current=null,Dt([]),De(new Map);let ot=q().querySelector(`[data-rearrange-section="${Q.id}"]`);ot&&(ot.style.transform=""),Ne&&t({...e,sections:ce.map(vt=>vt.id===Q.id?{...vt,currentRect:{...vt.currentRect,x:Math.max(0,lt.x+Tt),y:Math.max(0,lt.y+Ct)}}:vt),originalOrder:we}),Vl.current?.(Tt,Ct,Ne)};window.addEventListener("mousemove",mt),window.addEventListener("mouseup",Be)}else if(P&&X){D.preventDefault();for(let Q of m)try{let ce=document.querySelector(Q.selector);if(ce&&ce===X){let we=new Set([Q.id]);A(we),Wl.current?.(we,ee);return}}catch{}ee||(A(new Set),Wl.current?.(new Set,!1))}else ee||(A(new Set),Wl.current?.(new Set,!1))};return document.addEventListener("mousedown",T,!0),()=>document.removeEventListener("mousedown",T,!0)},[m,e,t]),(0,Se.useEffect)(()=>{let T=D=>{let U=D.composedPath()[0]||D.target;if(!(U.tagName==="INPUT"||U.tagName==="TEXTAREA"||U.isContentEditable)){if((D.key==="Backspace"||D.key==="Delete")&&k.size>0){D.preventDefault();let X=new Set(k);F(P=>{let ee=new Set(P);for(let Q of X)ee.add(Q);return ee}),A(new Set),rt(()=>{let P=v.current;t({...P,sections:P.sections.filter(ee=>!X.has(ee.id)),originalOrder:P.originalOrder.filter(ee=>!X.has(ee))}),F(ee=>{let Q=new Set(ee);for(let ce of X)Q.delete(ce);return Q})},180);return}if(["ArrowUp","ArrowDown","ArrowLeft","ArrowRight"].includes(D.key)&&k.size>0){D.preventDefault();let X=D.shiftKey?20:1,P=D.key==="ArrowLeft"?-X:D.key==="ArrowRight"?X:0,ee=D.key==="ArrowUp"?-X:D.key==="ArrowDown"?X:0;t({...e,sections:m.map(Q=>k.has(Q.id)?{...Q,currentRect:{...Q.currentRect,x:Math.max(0,Q.currentRect.x+P),y:Math.max(0,Q.currentRect.y+ee)}}:Q)});return}D.key==="Escape"&&k.size>0&&A(new Set)}};return document.addEventListener("keydown",T),()=>document.removeEventListener("keydown",T)},[k,m,e,t]);let oa=(0,Se.useCallback)((T,D)=>{if(T.button!==0)return;let U=T.target;if(U.closest(`.${$.handle}`)||U.closest(`.${$.deleteButton}`))return;T.preventDefault(),T.stopPropagation();let X;T.shiftKey||T.metaKey||T.ctrlKey?(X=new Set(k),X.has(D)?X.delete(D):X.add(D)):k.has(D)?X=new Set(k):X=new Set([D]),A(X),(X.size!==k.size||[...X].some(Ne=>!k.has(Ne)))&&Wl.current?.(X,!!(T.shiftKey||T.metaKey||T.ctrlKey));let ee=T.clientX,Q=T.clientY,ce=new Map;for(let Ne of m)X.has(Ne.id)&&ce.set(Ne.id,{x:Ne.currentRect.x,y:Ne.currentRect.y});Ye.current="move";let we=!1,ze=0,ct=0,ht=new Map;for(let Ne of m)if(X.has(Ne.id)){let Tt=q().querySelector(`[data-rearrange-section="${Ne.id}"]`);ht.set(Ne.id,{outlineEl:Tt,curW:Ne.currentRect.width,curH:Ne.currentRect.height})}let lt=Ne=>{let Tt=Ne.clientX-ee,Ct=Ne.clientY-Q;if(Tt===0&&Ct===0)return;we=!0;let mt=1/0,Be=1/0,ot=-1/0,vt=-1/0;for(let[yn,{curW:Al,curH:Zl}]of ht){let bl=ce.get(yn);if(!bl)continue;let Pn=bl.x+Tt,er=bl.y+Ct;mt=Math.min(mt,Pn),Be=Math.min(Be,er),ot=Math.max(ot,Pn+Al),vt=Math.max(vt,er+Zl)}let gt=$y({x:mt,y:Be,width:ot-mt,height:vt-Be},m,X,i),ae=Tt+gt.dx,Yn=Ct+gt.dy;ze=ae,ct=Yn,Dt(gt.guides);for(let[,{outlineEl:yn}]of ht)yn&&(yn.style.transform=`translate(${ae}px, ${Yn}px)`);let Nn=new Map;for(let[yn,{curW:Al,curH:Zl}]of ht){let bl=ce.get(yn);if(bl){let Pn={x:Math.max(0,bl.x+ae),y:Math.max(0,bl.y+Yn),width:Al,height:Zl};Nn.set(yn,Pn)}}De(Nn),Gl.current?.(ae,Yn)},qe=Ne=>{window.removeEventListener("mousemove",lt),window.removeEventListener("mouseup",qe),Ye.current=null,Dt([]),De(new Map);for(let[,{outlineEl:Tt}]of ht)Tt&&(Tt.style.transform="");if(we){let Tt=Ne.clientX-ee,Ct=Ne.clientY-Q;if(Math.abs(Tt)<5&&Math.abs(Ct)<5)t({...e,sections:m.map(mt=>{let Be=ce.get(mt.id);return Be?{...mt,currentRect:{...mt.currentRect,x:Be.x,y:Be.y}}:mt})});else{t({...e,sections:m.map(mt=>{let Be=ce.get(mt.id);return Be?{...mt,currentRect:{...mt.currentRect,x:Math.max(0,Be.x+ze),y:Math.max(0,Be.y+ct)}}:mt})}),Vl.current?.(ze,ct,!0);return}}Vl.current?.(0,0,!1)};window.addEventListener("mousemove",lt),window.addEventListener("mouseup",qe)},[k,m,e,t]),Jn=(0,Se.useCallback)((T,D,U)=>{T.preventDefault(),T.stopPropagation();let X=m.find(qe=>qe.id===D);if(!X)return;A(new Set([D])),Ye.current="resize";let P=T.clientX,ee=T.clientY,Q={...X.currentRect},ce=X.originalRect,we=Q.width/Q.height,ze={...Q},ct=q().querySelector(`[data-rearrange-section="${D}"]`),ht=qe=>{let Ne=qe.clientX-P,Tt=qe.clientY-ee,Ct=Q.x,mt=Q.y,Be=Q.width,ot=Q.height;if(U.includes("e")&&(Be=Math.max(zu,Q.width+Ne)),U.includes("w")&&(Be=Math.max(zu,Q.width-Ne),Ct=Q.x+Q.width-Be),U.includes("s")&&(ot=Math.max(zu,Q.height+Tt)),U.includes("n")&&(ot=Math.max(zu,Q.height-Tt),mt=Q.y+Q.height-ot),qe.shiftKey)if(U.length===2){let gt=Math.abs(Be-Q.width),ae=Math.abs(ot-Q.height);gt>ae?ot=Be/we:Be=ot*we,U.includes("w")&&(Ct=Q.x+Q.width-Be),U.includes("n")&&(mt=Q.y+Q.height-ot)}else U==="e"||U==="w"?ot=Be/we:Be=ot*we,U==="w"&&(Ct=Q.x+Q.width-Be),U==="n"&&(mt=Q.y+Q.height-ot);ze={x:Ct,y:mt,width:Be,height:ot},ct&&(ct.style.left=`${Ct}px`,ct.style.top=`${mt-Ue}px`,ct.style.width=`${Be}px`,ct.style.height=`${ot}px`),se({x:qe.clientX+12,y:qe.clientY+12,text:`${Math.round(Be)} \xD7 ${Math.round(ot)}`}),De(new Map([[D,ze]]))},lt=()=>{window.removeEventListener("mousemove",ht),window.removeEventListener("mouseup",lt),se(null),Ye.current=null,De(new Map),t({...e,sections:m.map(qe=>qe.id===D?{...qe,currentRect:ze}:qe)})};window.addEventListener("mousemove",ht),window.addEventListener("mouseup",lt)},[m,e,t,Ue]),Fl=(0,Se.useCallback)(T=>{F(D=>{let U=new Set(D);return U.add(T),U}),A(D=>{let U=new Set(D);return U.delete(T),U}),rt(()=>{let D=v.current;t({...D,sections:D.sections.filter(U=>U.id!==T),originalOrder:D.originalOrder.filter(U=>U!==T)}),F(U=>{let X=new Set(U);return X.delete(T),X})},180)},[t]),V=T=>{let D=T.originalRect,U=T.currentRect;return Math.abs(D.x-U.x)>1||Math.abs(D.y-U.y)>1||Math.abs(D.width-U.width)>1||Math.abs(D.height-U.height)>1},fe=T=>{let D=T.originalRect,U=T.currentRect;return Math.abs(D.x-U.x)>1||Math.abs(D.y-U.y)>1},Ae=T=>{let D=T.originalRect,U=T.currentRect;return Math.abs(D.width-U.width)>1||Math.abs(D.height-U.height)>1};for(let T of m)cn.current.has(T.id)||(fe(T)?cn.current.set(T.id,"move"):Ae(T)&&cn.current.set(T.id,"resize"));for(let T of cn.current.keys())m.some(D=>D.id===T)||cn.current.delete(T);let Ce=m.filter(T=>{try{if(O.has(T.id)||k.has(T.id))return!0;let D=document.querySelector(T.selector);if(!D)return!1;let U=D.getBoundingClientRect(),X=T.originalRect;return Math.abs(U.width-X.width)+Math.abs(U.height-X.height)<200}catch{return!1}}),ve=Ce.filter(T=>V(T)),nt=Ce.filter(T=>!V(T)),Xe=new Set(ve.map(T=>T.id));for(let T of xt.current)Xe.has(T)||xt.current.delete(T);let Ke=[...Xe].sort().join(",");for(let T of ve)wo.current.set(T.id,{currentRect:T.currentRect,originalRect:T.originalRect,isFixed:T.isFixed});(0,Se.useEffect)(()=>{let T=vo.current;vo.current=Xe;let D=new Map;for(let U of T)if(!Xe.has(U)){if(!m.some(P=>P.id===U))continue;let X=wo.current.get(U);X&&(D.set(U,{orig:X.originalRect,target:X.currentRect,isFixed:X.isFixed}),wo.current.delete(U))}if(D.size>0){Ql(X=>{let P=new Map(X);for(let[ee,Q]of D)P.set(ee,Q);return P});let U=rt(()=>{Ql(X=>{let P=new Map(X);for(let ee of D.keys())P.delete(ee);return P})},250);return()=>clearTimeout(U)}},[Ke,m]);let Fe=(0,Se.useRef)(null),q=()=>Fe.current?.getRootNode()??document;return(0,Ze.jsxs)(Ze.Fragment,{children:[(0,Ze.jsxs)("div",{ref:Fe,className:`${$.rearrangeOverlay} ${n?"":$.light} ${l?$.overlayExiting:""}${o?` ${o}`:""}`,"data-feedback-toolbar":!0,children:[Z&&(0,Ze.jsx)("div",{className:$.hoverHighlight,style:{left:Z.x,top:Z.y,width:Z.w,height:Z.h}}),nt.map(T=>{let D=T.currentRect,U=T.isFixed?D.y:D.y-Ue,X=zy,P=k.has(T.id);return(0,Ze.jsxs)("div",{"data-rearrange-section":T.id,className:`${$.sectionOutline} ${P?$.selected:""} ${_||l||O.has(T.id)?$.exiting:""}`,style:{left:D.x,top:U,width:D.width,height:D.height,borderColor:X.border,backgroundColor:X.bg,...It?{}:{opacity:0,animation:"none",transition:"none"}},onMouseDown:ee=>oa(ee,T.id),onDoubleClick:()=>J(T.id),children:[(0,Ze.jsx)("span",{className:$.sectionLabel,style:{backgroundColor:X.pill},children:T.label}),(0,Ze.jsx)("span",{className:`${$.sectionAnnotation} ${T.note?$.annotationVisible:""}`,children:(T.note&&re.current.set(T.id,T.note),T.note||re.current.get(T.id)||"")}),(0,Ze.jsxs)("span",{className:$.sectionDimensions,children:[Math.round(D.width)," \xD7 ",Math.round(D.height)]}),(0,Ze.jsx)("div",{className:$.deleteButton,onMouseDown:ee=>ee.stopPropagation(),onClick:()=>Fl(T.id),children:"\u2715"}),Oy.map(ee=>(0,Ze.jsx)("div",{className:`${$.handle} ${$[`handle${ee.charAt(0).toUpperCase()}${ee.slice(1)}`]}`,onMouseDown:Q=>Jn(Q,T.id,ee)},ee))]},T.id)}),ve.map(T=>{let D=T.currentRect,U=T.isFixed?D.y:D.y-Ue,X=k.has(T.id),P=fe(T),ee=Ae(T);if(a&&!X)return null;let ce=!xt.current.has(T.id);return ce&&xt.current.add(T.id),(0,Ze.jsxs)("div",{"data-rearrange-section":T.id,className:`${$.ghostOutline} ${X?$.selected:""} ${_||l||O.has(T.id)?$.exiting:""}`,style:{left:D.x,top:U,width:D.width,height:D.height,...It?{}:{opacity:0,animation:"none",transition:"none"},...ce?{}:{animation:"none"}},onMouseDown:we=>oa(we,T.id),onDoubleClick:()=>J(T.id),children:[(0,Ze.jsx)("span",{className:$.sectionLabel,style:{backgroundColor:zy.pill},children:T.label}),(0,Ze.jsx)("span",{className:`${$.sectionAnnotation} ${T.note?$.annotationVisible:""}`,children:(T.note&&re.current.set(T.id,T.note),T.note||re.current.get(T.id)||"")}),(0,Ze.jsxs)("span",{className:$.sectionDimensions,children:[Math.round(D.width)," \xD7 ",Math.round(D.height)]}),(0,Ze.jsx)("div",{className:$.deleteButton,onMouseDown:we=>we.stopPropagation(),onClick:()=>Fl(T.id),children:"\u2715"}),Oy.map(we=>(0,Ze.jsx)("div",{className:`${$.handle} ${$[`handle${we.charAt(0).toUpperCase()}${we.slice(1)}`]}`,onMouseDown:ze=>Jn(ze,T.id,we)},we)),(0,Ze.jsx)("span",{className:$.ghostBadge,children:(()=>{let we=cn.current.get(T.id);if(P&&ee){let[ze,ct]=we==="resize"?["Resize","Move"]:["Move","Resize"];return(0,Ze.jsxs)(Ze.Fragment,{children:["Suggested ",ze," ",(0,Ze.jsxs)("span",{className:$.ghostBadgeExtra,children:["& ",ct]})]})}return`Suggested ${ee?"Resize":"Move"}`})()})]},T.id)})]}),!a&&(()=>{let T=[];for(let D of ve){let U=An.get(D.id);T.push({id:D.id,orig:D.originalRect,target:U||D.currentRect,isFixed:D.isFixed,isSelected:k.has(D.id),isExiting:O.has(D.id)})}for(let[D,U]of An)if(!T.some(X=>X.id===D)){let X=m.find(P=>P.id===D);X&&T.push({id:D,orig:X.originalRect,target:U,isFixed:X.isFixed,isSelected:k.has(D)})}for(let[D,U]of pl)T.some(X=>X.id===D)||T.push({id:D,orig:U.orig,target:U.target,isFixed:U.isFixed,isSelected:!1,isExiting:!0});return T.length===0?null:(0,Ze.jsxs)("svg",{className:`${$.connectorSvg} ${_||l?$.connectorExiting:""}`,children:[T.map(({id:D,orig:U,target:X,isFixed:P,isSelected:ee,isExiting:Q})=>{let ce=U.x+U.width/2,we=(P?U.y:U.y-Ue)+U.height/2,ze=X.x+X.width/2,ct=(P?X.y:X.y-Ue)+X.height/2,ht=ze-ce,lt=ct-we,qe=Math.sqrt(ht*ht+lt*lt);if(qe<2)return null;let Ne=Math.min(1,qe/40),Tt=Math.min(qe*.3,60),Ct=qe>0?-lt/qe:0,mt=qe>0?ht/qe:0,Be=(ce+ze)/2+Ct*Tt,ot=(we+ct)/2+mt*Tt,vt=An.has(D),gt=vt||ee?1:.4,ae=vt||ee?1:.5;return(0,Ze.jsxs)("g",{className:Q?$.connectorExiting:"",children:[(0,Ze.jsx)("path",{className:$.connectorLine,d:`M ${ce} ${we} Q ${Be} ${ot} ${ze} ${ct}`,fill:"none",stroke:"rgba(59, 130, 246, 0.45)",strokeWidth:"1.5",opacity:gt*Ne}),(0,Ze.jsx)("circle",{className:$.connectorDot,cx:ce,cy:we,r:4*Ne,fill:"rgba(59, 130, 246, 0.8)",stroke:"#fff",strokeWidth:"1.5",opacity:ae*Ne,filter:"url(#connDotShadow)"}),(0,Ze.jsx)("circle",{className:$.connectorDot,cx:ze,cy:ct,r:4*Ne,fill:"rgba(59, 130, 246, 0.8)",stroke:"#fff",strokeWidth:"1.5",opacity:ae*Ne,filter:"url(#connDotShadow)"})]},`conn-${D}`)}),(0,Ze.jsx)("defs",{children:(0,Ze.jsx)("filter",{id:"connDotShadow",x:"-50%",y:"-50%",width:"200%",height:"200%",children:(0,Ze.jsx)("feDropShadow",{dx:"0",dy:"0.5",stdDeviation:"1",floodOpacity:"0.15"})})})]})})(),p&&(()=>{let T=m.find(ct=>ct.id===p);if(!T)return null;let D=T.currentRect,U=T.isFixed?D.y:D.y-Ue,X=D.x+D.width/2,P=U-8,ee=U+D.height+8,Q=P>200,ce=ee<window.innerHeight-100,we=Math.max(160,Math.min(window.innerWidth-160,X)),ze;return Q?ze={left:we,bottom:window.innerHeight-P}:ce?ze={left:we,top:ee}:ze={left:we,top:Math.max(80,window.innerHeight/2-80)},(0,Ze.jsx)($h,{element:T.label,placeholder:"Add a note about this section",initialValue:T.note??"",submitLabel:W.current?"Save":"Set",onSubmit:K,onCancel:z,onDelete:W.current?()=>{K("")}:void 0,isExiting:g,lightMode:!n,style:ze})})(),oe&&(0,Ze.jsx)("div",{className:$.sizeIndicator,style:{left:oe.x,top:oe.y},"data-feedback-toolbar":!0,children:oe.text}),he.map((T,D)=>(0,Ze.jsx)("div",{className:$.guideLine,style:T.axis==="x"?{position:"fixed",left:T.pos,top:0,width:1,height:"100vh"}:{position:"fixed",left:0,top:T.pos-Ue,width:"100vw",height:1}},`${T.axis}-${T.pos}-${D}`))]})}var Eh=new Set(["script","style","noscript","link","meta","br","hr"]);function S4(){let e=document.querySelector("main")||document.body,t=[],n=Array.from(e.children),l=e!==document.body&&n.length<3?Array.from(document.body.children):n;for(let o of l){if(!(o instanceof HTMLElement)||Eh.has(o.tagName.toLowerCase())||o.hasAttribute("data-feedback-toolbar"))continue;let a=window.getComputedStyle(o);if(a.display==="none"||a.visibility==="hidden")continue;let i=o.getBoundingClientRect();if(!(i.height<10||i.width<10)){t.push({label:Qu(o),selector:Xa(o),top:i.top,bottom:i.bottom,left:i.left,right:i.right,area:i.width*i.height});for(let r of Array.from(o.children)){if(!(r instanceof HTMLElement)||Eh.has(r.tagName.toLowerCase())||r.hasAttribute("data-feedback-toolbar"))continue;let s=window.getComputedStyle(r);if(s.display==="none"||s.visibility==="hidden")continue;let d=r.getBoundingClientRect();d.height<10||d.width<10||t.push({label:Qu(r),selector:Xa(r),top:d.top,bottom:d.bottom,left:d.left,right:d.right,area:d.width*d.height})}}}return t}function C4(e){let t=window.scrollY;return e.map(({label:n,selector:l,rect:o})=>{let a=o.y-t;return{label:n,selector:l,top:a,bottom:a+o.height,left:o.x,right:o.x+o.width,area:o.width*o.height}})}function M4(e){let t=window.scrollY,n=e.y-t,l=e.x;return{top:n,bottom:n+e.height,left:l,right:l+e.width,area:e.width*e.height}}function Th(e,t){let n=t?C4(t):S4(),l=M4(e),o=null,a=null,i=null,r=null,s=null;for(let k of n){if(Math.abs(k.left-l.left)<2&&Math.abs(k.top-l.top)<2&&Math.abs(k.right-k.left-e.width)<2&&Math.abs(k.bottom-k.top-e.height)<2)continue;k.left<=l.left+2&&k.right>=l.right-2&&k.top<=l.top+2&&k.bottom>=l.bottom-2&&k.area>l.area*1.5&&(!s||k.area<s._area)&&(s={label:k.label,selector:k.selector,_area:k.area});let A=l.right>k.left+5&&l.left<k.right-5,M=l.bottom>k.top+5&&l.top<k.bottom-5;if(A&&k.bottom<=l.top+5){let p=Math.round(l.top-k.bottom);(!o||p<o._dist)&&(o={label:k.label,selector:k.selector,gap:Math.max(0,p),_dist:p})}if(A&&k.top>=l.bottom-5){let p=Math.round(k.top-l.bottom);(!a||p<a._dist)&&(a={label:k.label,selector:k.selector,gap:Math.max(0,p),_dist:p})}if(M&&k.right<=l.left+5){let p=Math.round(l.left-k.right);(!i||p<i._dist)&&(i={label:k.label,selector:k.selector,gap:Math.max(0,p),_dist:p})}if(M&&k.left>=l.right-5){let p=Math.round(k.left-l.right);(!r||p<r._dist)&&(r={label:k.label,selector:k.selector,gap:Math.max(0,p),_dist:p})}}let d=window.innerWidth,h=window.innerHeight,_=T4(e,d),m=k=>k?{label:k.label,selector:k.selector,gap:k.gap}:null,v=E4(l,e,d,h,s?{label:s.label,selector:s.selector,_area:s._area}:null,n);return{above:m(o),below:m(a),left:m(i),right:m(r),alignment:_,containedIn:s?{label:s.label,selector:s.selector}:null,outOfBounds:v}}function E4(e,t,n,l,o,a){let i={},r=!1,s=[];if(e.left<-2&&s.push("left"),e.right>n+2&&s.push("right"),e.top<-2&&s.push("top"),e.bottom>l+2&&s.push("bottom"),s.length>0&&(i.viewport=s,r=!0),o){let d=a.find(h=>h.label===o.label&&h.selector===o.selector&&Math.abs(h.area-o._area)<10);if(d){let h=[];e.left<d.left-2&&h.push("left"),e.right>d.right+2&&h.push("right"),e.top<d.top-2&&h.push("top"),e.bottom>d.bottom+2&&h.push("bottom"),h.length>0&&(i.container={label:o.label,edges:h},r=!0)}}return r?i:null}function T4(e,t){if(e.width/t>.85)return"full-width";let l=e.x+e.width/2,o=t/2,a=l-o,i=t*.08;return Math.abs(a)<i?"center":a<0?"left":"right"}function S5(e){switch(e){case"full-width":return"full-width";case"center":return"centered";case"left":return"left-aligned";case"right":return"right-aligned"}}function C5(e,t={}){let n=[];e.above&&n.push(`Below \`${e.above.label}\`${e.above.gap>0?` (${e.above.gap}px gap)`:""}`),e.below&&n.push(`Above \`${e.below.label}\`${e.below.gap>0?` (${e.below.gap}px gap)`:""}`),t.includeLeftRight&&(e.left&&n.push(`Right of \`${e.left.label}\`${e.left.gap>0?` (${e.left.gap}px gap)`:""}`),e.right&&n.push(`Left of \`${e.right.label}\`${e.right.gap>0?` (${e.right.gap}px gap)`:""}`));let l=S5(e.alignment);return e.containedIn?n.push(`${l.charAt(0).toUpperCase()+l.slice(1)} in \`${e.containedIn.label}\``):n.push(`${l.charAt(0).toUpperCase()+l.slice(1)} in page`),t.includePixelRef&&t.pixelRef&&n.push(`Pixel ref: \`${t.pixelRef}\``),e.outOfBounds&&(e.outOfBounds.viewport&&n.push(`**Outside viewport** (${e.outOfBounds.viewport.join(", ")} edge${e.outOfBounds.viewport.length>1?"s":""})`),e.outOfBounds.container&&n.push(`**Outside \`${e.outOfBounds.container.label}\`** (${e.outOfBounds.container.edges.join(", ")} edge${e.outOfBounds.container.edges.length>1?"s":""})`)),n}function A4(e,t,n){let l=[];e.above&&l.push(`below \`${e.above.label}\``),e.below&&l.push(`above \`${e.below.label}\``),e.left&&l.push(`right of \`${e.left.label}\``),e.right&&l.push(`left of \`${e.right.label}\``),e.containedIn&&l.push(`inside \`${e.containedIn.label}\``),l.push(S5(e.alignment)),e.outOfBounds?.viewport&&l.push(`**outside viewport** (${e.outOfBounds.viewport.join(", ")})`),e.outOfBounds?.container&&l.push(`**outside \`${e.outOfBounds.container.label}\`** (${e.outOfBounds.container.edges.join(", ")})`);let o=n?`, ${Math.round(n.width)}\xD7${Math.round(n.height)}px`:"";return`at (${Math.round(t.x)}, ${Math.round(t.y)})${o}: ${l.join(", ")}`}var Uy=15;function Yy(e){if(e.length<2)return[];let t=[],n=new Set;for(let l=0;l<e.length;l++){if(n.has(l))continue;let o=[l];for(let a=l+1;a<e.length;a++)n.has(a)||Math.abs(e[l].rect.y-e[a].rect.y)<Uy&&o.push(a);if(o.length>=2){let a=o.map(s=>e[s]);a.sort((s,d)=>s.rect.x-d.rect.x);let i=[];for(let s=0;s<a.length-1;s++)i.push(Math.round(a[s+1].rect.x-(a[s].rect.x+a[s].rect.width)));let r=Math.round(a.reduce((s,d)=>s+d.rect.y,0)/a.length);t.push({labels:a.map(s=>s.label),type:"row",sharedEdge:r,gaps:i,avgGap:i.length?Math.round(i.reduce((s,d)=>s+d,0)/i.length):0}),o.forEach(s=>n.add(s))}}for(let l=0;l<e.length;l++){if(n.has(l))continue;let o=[l];for(let a=l+1;a<e.length;a++)n.has(a)||Math.abs(e[l].rect.x-e[a].rect.x)<Uy&&o.push(a);if(o.length>=2){let a=o.map(s=>e[s]);a.sort((s,d)=>s.rect.y-d.rect.y);let i=[];for(let s=0;s<a.length-1;s++)i.push(Math.round(a[s+1].rect.y-(a[s].rect.y+a[s].rect.height)));let r=Math.round(a.reduce((s,d)=>s+d.rect.x,0)/a.length);t.push({labels:a.map(s=>s.label),type:"column",sharedEdge:r,gaps:i,avgGap:i.length?Math.round(i.reduce((s,d)=>s+d,0)/i.length):0}),o.forEach(s=>n.add(s))}}return t}function N4(e){if(e.length<2)return[];let t=Yy(e.map(i=>({label:i.label,rect:i.originalRect}))),n=Yy(e.map(i=>({label:i.label,rect:i.currentRect}))),l=[],o=new Set;for(let i of t){let r=new Set(i.labels),s=null,d=0;for(let h of n){let _=h.labels.filter(m=>r.has(m)).length;_>=2&&_>d&&(s=h,d=_)}if(s){let h=s.labels.filter(m=>r.has(m)),_=h.join(", ");if(s.type!==i.type){let m=i.type==="row"?"y":"x",v=s.type==="row"?"y":"x";l.push(`**${_}**: ${i.type} (${m}\u2248${i.sharedEdge}, ${i.avgGap}px gaps) \u2192 ${s.type} (${v}\u2248${s.sharedEdge}, ${s.avgGap}px gaps)`)}else if(Math.abs(i.sharedEdge-s.sharedEdge)>20||Math.abs(i.avgGap-s.avgGap)>5){let m=i.type==="row"?"y":"x",v=Math.abs(i.sharedEdge-s.sharedEdge)>20?` ${m}: ${i.sharedEdge} \u2192 ${s.sharedEdge}`:"",k=Math.abs(i.avgGap-s.avgGap)>5?` gaps: ${i.avgGap}px \u2192 ${s.avgGap}px`:"";l.push(`**${_}**: ${i.type} shifted \u2014${v}${k}`)}h.forEach(m=>o.add(m))}else{let h=i.labels.join(", "),_=i.type==="row"?"y":"x";l.push(`**${h}**: ${i.type} (${_}\u2248${i.sharedEdge}) dissolved`),i.labels.forEach(m=>o.add(m))}}for(let i of n){if(i.labels.every(d=>o.has(d))||i.labels.filter(d=>!o.has(d)).length<2)continue;if(!t.some(d=>d.labels.filter(_=>i.labels.includes(_)).length>=2)){let d=i.type==="row"?"y":"x";l.push(`**${i.labels.join(", ")}**: new ${i.type} (${d}\u2248${i.sharedEdge}, ${i.avgGap}px gaps)`),i.labels.forEach(h=>o.add(h))}}let a=e.filter(i=>!o.has(i.label));if(a.length>=2){let i={};for(let r of a){let s=Math.round(r.currentRect.x/5)*5;(i[s]??(i[s]=[])).push(r.label)}for(let[r,s]of Object.entries(i))s.length>=2&&l.push(`**${s.join(", ")}**: shared left edge at x\u2248${r}`)}return l}function M5(e){if(typeof document>"u")return{viewport:e,contentArea:null};let t=[],n=new Set,l=r=>{n.has(r)||r instanceof HTMLElement&&(r.hasAttribute("data-feedback-toolbar")||Eh.has(r.tagName.toLowerCase())||(n.add(r),t.push(r)))},o=document.querySelector("main");o&&l(o);let a=document.querySelector("[role='main']");a&&l(a);for(let r of Array.from(document.body.children))if(l(r),r.children){for(let s of Array.from(r.children))if(l(s),s.children)for(let d of Array.from(s.children))l(d)}let i=null;for(let r of t){let s=r.getBoundingClientRect();if(s.height<50)continue;let d=getComputedStyle(r);if(d.maxWidth&&d.maxWidth!=="none"&&d.maxWidth!=="0px"){(!i||s.width<i.rect.width)&&(i={el:r,rect:s});continue}!i&&s.width<e.width-20&&s.width>100&&(i={el:r,rect:s})}if(i){let{el:r,rect:s}=i;return{viewport:e,contentArea:{width:Math.round(s.width),left:Math.round(s.left),right:Math.round(s.right),centerX:Math.round(s.left+s.width/2),selector:Xa(r)}}}return{viewport:e,contentArea:null}}function D4(e){if(typeof document>"u")return null;let t=document.querySelector(e);if(!t?.parentElement)return null;let n=getComputedStyle(t.parentElement),l={parentDisplay:n.display,parentSelector:Xa(t.parentElement)};return n.display.includes("flex")&&(l.flexDirection=n.flexDirection),n.display.includes("grid")&&n.gridTemplateColumns!=="none"&&(l.gridCols=n.gridTemplateColumns),n.gap&&n.gap!=="normal"&&n.gap!=="0px"&&(l.gap=n.gap),l}function E5(e,t){let n=t.contentArea,l=n?n.width:t.viewport.width,o=n?n.left:0,a=n?n.centerX:Math.round(t.viewport.width/2),i=Math.round(e.x-o),r=Math.round(o+l-(e.x+e.width)),s=(e.width/l*100).toFixed(1),d=e.x+e.width/2,h=Math.abs(d-a)<20,_=e.width/l>.95,m=[];return _?m.push("`width: 100%` of container"):m.push(`left \`${i}px\` in container, right \`${r}px\`, width \`${s}%\` (\`${Math.round(e.width)}px\`)`),h&&!_&&m.push("centered \u2014 `margin-inline: auto`"),m.join(" \u2014 ")}function T5(e){let{viewport:t,contentArea:n}=e,l=`### Reference Frame
`;if(l+=`- Viewport: \`${t.width}\xD7${t.height}px\`
`,n){let o=n;l+=`- Content area: \`${o.width}px\` wide, left edge at \`x=${o.left}\`, right at \`x=${o.right}\` (\`${o.selector}\`)
`,l+=`- Pixel \u2192 CSS translation:
`,l+=`  - **Horizontal position in container**: \`element.x - ${o.left}\` \u2192 use as \`margin-left\` or \`left\`
`,l+=`  - **Width as % of container**: \`element.width / ${o.width} \xD7 100\` \u2192 use as \`width: X%\`
`,l+="  - **Vertical gap between elements**: `nextElement.y - (prevElement.y + prevElement.height)` \u2192 use as `margin-top` or `gap`\n",l+=`  - **Centered**: if \`|element.centerX - ${o.centerX}| < 20px\` \u2192 use \`margin-inline: auto\`
`}else l+=`- No distinct content container \u2014 elements positioned relative to full viewport
`,l+=`- Pixel \u2192 CSS translation:
`,l+=`  - **Width as % of viewport**: \`element.width / ${t.width} \xD7 100\` \u2192 use as \`width: X%\`
`,l+=`  - **Centered**: if \`|(element.x + element.width/2) - ${Math.round(t.width/2)}| < 20px\` \u2192 use \`margin-inline: auto\`
`;return l+=`
`,l}function R4(e){let t=D4(e);if(!t)return null;let n=`\`${t.parentDisplay}\``;return t.flexDirection&&(n+=`, flex-direction: \`${t.flexDirection}\``),t.gridCols&&(n+=`, grid-template-columns: \`${t.gridCols}\``),t.gap&&(n+=`, gap: \`${t.gap}\``),`Parent: ${n} (\`${t.parentSelector}\`)`}function jy(e,t,n,l="standard"){if(e.length===0)return"";let o=[...e].sort((M,p)=>Math.abs(M.y-p.y)<20?M.x-p.x:M.y-p.y),a="";if(n?.blankCanvas?(a+=`## Wireframe: New Page

`,n.wireframePurpose&&(a+=`> **Purpose:** ${n.wireframePurpose}
>
`),a+=`> ${e.length} component${e.length!==1?"s":""} placed \u2014 this is a standalone wireframe, not related to the current page.
>
> This wireframe is a rough sketch for exploring ideas.

`):a+=`## Design Layout

> ${e.length} component${e.length!==1?"s":""} placed

`,l==="compact")return a+=`### Components
`,o.forEach((M,p)=>{let x=El[M.type]?.label||M.type;a+=`${p+1}. **${x}** \u2014 \`${Math.round(M.width)}\xD7${Math.round(M.height)}px\` at \`(${Math.round(M.x)}, ${Math.round(M.y)})\`
`,M.text&&(a+=`   - Note: "${M.text}"
`)}),a;let i=M5(t);a+=T5(i),a+=`### Components
`,o.forEach((M,p)=>{let x=El[M.type]?.label||M.type,g={x:M.x,y:M.y,width:M.width,height:M.height};a+=`${p+1}. **${x}** \u2014 \`${Math.round(M.width)}\xD7${Math.round(M.height)}px\` at \`(${Math.round(M.x)}, ${Math.round(M.y)})\`
`,M.text&&(a+=`   - Note: "${M.text}"
`);let S=Th(g),J=C5(S,{includeLeftRight:l==="detailed"||l==="forensic"});for(let K of J)a+=`   - ${K}
`;let z=E5(g,i);z&&(a+=`   - CSS: ${z}
`)}),a+=`
### Layout Analysis
`;let r=[];for(let M of o){let p=r.find(x=>Math.abs(x.y-M.y)<30);p?p.items.push(M):r.push({y:M.y,items:[M]})}if(r.sort((M,p)=>M.y-p.y),r.forEach((M,p)=>{M.items.sort((g,S)=>g.x-S.x);let x=M.items.map(g=>El[g.type]?.label||g.type);if(M.items.length===1){let S=M.items[0].width>t.width*.8;a+=`- Row ${p+1} (y\u2248${Math.round(M.y)}): ${x[0]}${S?" \u2014 full width":""}
`}else a+=`- Row ${p+1} (y\u2248${Math.round(M.y)}): ${x.join(" | ")} \u2014 ${M.items.length} items side by side
`}),l==="detailed"||l==="forensic"){a+=`
### Spacing & Gaps
`;for(let M=0;M<o.length-1;M++){let p=o[M],x=o[M+1],g=El[p.type]?.label||p.type,S=El[x.type]?.label||x.type,W=Math.round(x.y-(p.y+p.height)),J=Math.round(x.x-(p.x+p.width));Math.abs(p.y-x.y)<30?a+=`- ${g} \u2192 ${S}: \`${J}px\` horizontal gap
`:a+=`- ${g} \u2192 ${S}: \`${W}px\` vertical gap
`}if(l==="forensic"&&o.length>2){a+=`
### All Pairwise Gaps
`;for(let M=0;M<o.length;M++)for(let p=M+1;p<o.length;p++){let x=o[M],g=o[p],S=El[x.type]?.label||x.type,W=El[g.type]?.label||g.type,J=Math.round(g.y-(x.y+x.height)),z=Math.round(g.x-(x.x+x.width));a+=`- ${S} \u2194 ${W}: h=\`${z}px\` v=\`${J}px\`
`}}l==="forensic"&&(a+=`
### Z-Order (placement order)
`,e.forEach((M,p)=>{let x=El[M.type]?.label||M.type;a+=`${p}. ${x} at \`(${Math.round(M.x)}, ${Math.round(M.y)})\`
`}))}a+=`
### Suggested Implementation
`;let s=o.some(M=>M.type==="navigation"),d=o.some(M=>M.type==="hero"),h=o.some(M=>M.type==="sidebar"),_=o.some(M=>M.type==="footer"),m=o.filter(M=>M.type==="card"),v=o.filter(M=>M.type==="form"),k=o.filter(M=>M.type==="table"),A=o.filter(M=>M.type==="modal");if(s&&(a+=`- Top navigation bar with logo + nav links + CTA
`),d&&(a+=`- Hero section with heading, subtext, and call-to-action
`),h&&(a+=`- Sidebar layout \u2014 use CSS Grid with sidebar + main content area
`),m.length>1?a+=`- ${m.length}-column card grid \u2014 use CSS Grid or Flexbox
`:m.length===1&&(a+=`- Card component with image + content area
`),v.length>0&&(a+=`- ${v.length} form${v.length>1?"s":""} \u2014 add proper labels, validation, and submit handling
`),k.length>0&&(a+=`- Data table \u2014 consider sortable columns and pagination
`),A.length>0&&(a+=`- Modal dialog \u2014 add overlay backdrop and focus trapping
`),_&&(a+=`- Multi-column footer with links
`),l==="detailed"||l==="forensic"){if(a+=`
### CSS Suggestions
`,h){let M=o.find(p=>p.type==="sidebar");a+=`- \`display: grid; grid-template-columns: ${Math.round(M.width)}px 1fr;\`
`}if(m.length>1){let M=Math.round(m[0].width);a+=`- \`display: grid; grid-template-columns: repeat(${m.length}, ${M}px); gap: 16px;\`
`}s&&(a+="- Navigation: `position: sticky; top: 0; z-index: 50;`\n")}return a}function Xy(e,t="standard",n){let{sections:l}=e,o=[];for(let h of l){let _=h.originalRect,m=h.currentRect,v=Math.abs(_.x-m.x)>1||Math.abs(_.y-m.y)>1,k=Math.abs(_.width-m.width)>1||Math.abs(_.height-m.height)>1,A=!!h.note;if(!v&&!k&&!A){t==="forensic"&&o.push({section:h,posMoved:!1,sizeChanged:!1});continue}o.push({section:h,posMoved:v,sizeChanged:k})}if(o.length===0||t!=="forensic"&&o.every(h=>!h.posMoved&&!h.sizeChanged&&!h.section.note))return"";let a=`## Suggested Layout Changes

`,i=n?n.width:typeof window<"u"?window.innerWidth:0,r=n?n.height:typeof window<"u"?window.innerHeight:0,s=M5({width:i,height:r});t!=="compact"&&(a+=T5(s)),t==="forensic"&&(a+=`> Detected at: \`${new Date(e.detectedAt).toISOString()}\`
`,a+=`> Total sections: ${l.length}

`);let d=h=>l.map(_=>({label:_.label,selector:_.selector,rect:h==="original"?_.originalRect:_.currentRect}));a+=`**Changes:**
`;for(let{section:h,posMoved:_,sizeChanged:m}of o){let v=h.originalRect,k=h.currentRect;if(!_&&!m){h.note?(a+=`- **${h.label}** \u2014 note only
`,a+=`  - Note: "${h.note}"
`):a+=`- ${h.label} \u2014 unchanged at (${Math.round(k.x)}, ${Math.round(k.y)}) ${Math.round(k.width)}\xD7${Math.round(k.height)}px
`;continue}if(t==="compact"){_&&m?a+=`- Suggested: move **${h.label}** to (${Math.round(k.x)}, ${Math.round(k.y)}) ${Math.round(k.width)}\xD7${Math.round(k.height)}px
`:_?a+=`- Suggested: move **${h.label}** to (${Math.round(k.x)}, ${Math.round(k.y)})
`:a+=`- Suggested: resize **${h.label}** to ${Math.round(k.width)}\xD7${Math.round(k.height)}px
`,h.note&&(a+=`  - Note: "${h.note}"
`);continue}if(_&&m?a+=`- Suggested: move and resize **${h.label}**
`:_?a+=`- Suggested: move **${h.label}**
`:a+=`- Suggested: resize **${h.label}** from ${Math.round(v.width)}\xD7${Math.round(v.height)}px to ${Math.round(k.width)}\xD7${Math.round(k.height)}px
`,h.note&&(a+=`  - Note: "${h.note}"
`),_){let M=Th(v,d("original")),p=Th(k,d("current")),x=m?{width:v.width,height:v.height}:void 0;a+=`  - Currently ${A4(M,{x:v.x,y:v.y},x)}
`;let g=m?{width:k.width,height:k.height}:void 0,S=`at (${Math.round(k.x)}, ${Math.round(k.y)})`,W=g?`, ${Math.round(g.width)}\xD7${Math.round(g.height)}px`:"",z=C5(p,{includeLeftRight:t==="detailed"||t==="forensic"});if(z.length>0){a+=`  - Suggested position ${S}${W}: ${z[0]}
`;for(let O=1;O<z.length;O++)a+=`    ${z[O]}
`}else a+=`  - Suggested position ${S}${W}
`;let K=E5(k,s);K&&(a+=`  - CSS: ${K}
`)}let A=R4(h.selector);if(A&&(a+=`  - ${A}
`),a+=`  - Selector: \`${h.selector}\`
`,t==="detailed"||t==="forensic"){let M=h.className?`${h.tagName}.${h.className.split(" ")[0]}`:h.tagName;M!==h.selector&&(a+=`  - Element: \`${M}\`
`),h.role&&(a+=`  - Role: \`${h.role}\`
`),t==="forensic"&&h.textSnippet&&(a+=`  - Text: "${h.textSnippet}"
`)}t==="forensic"&&(a+=`  - Original rect: \`{ x: ${Math.round(v.x)}, y: ${Math.round(v.y)}, w: ${Math.round(v.width)}, h: ${Math.round(v.height)} }\`
`,a+=`  - Current rect: \`{ x: ${Math.round(k.x)}, y: ${Math.round(k.y)}, w: ${Math.round(k.width)}, h: ${Math.round(k.height)} }\`
`)}if(t!=="compact"){let h=o.filter(m=>m.posMoved).map(m=>({label:m.section.label,originalRect:m.section.originalRect,currentRect:m.section.currentRect})),_=N4(h);if(_.length>0){a+=`
### Layout Summary
`;for(let m of _)a+=`- ${m}
`}}if(t!=="compact"&&l.length>1){a+=`
### All Sections (current positions)
`;let h=[...l].sort((_,m)=>Math.abs(_.currentRect.y-m.currentRect.y)<20?_.currentRect.x-m.currentRect.x:_.currentRect.y-m.currentRect.y);for(let _ of h){let m=_.currentRect,v=Math.abs(m.x-_.originalRect.x)>1||Math.abs(m.y-_.originalRect.y)>1||Math.abs(m.width-_.originalRect.width)>1||Math.abs(m.height-_.originalRect.height)>1;a+=`- ${_.label}: \`${Math.round(m.width)}\xD7${Math.round(m.height)}px\` at \`(${Math.round(m.x)}, ${Math.round(m.y)})\`${v?" \u2190 suggested":""}
`}}return a}var Ah="feedback-annotations-",A5=7;function Hh(e){return`${Ah}${e}`}function ea(e){if(typeof window>"u")return[];try{let t=localStorage.getItem(Hh(e));if(!t)return[];let n=JSON.parse(t),l=Date.now()-A5*24*60*60*1e3;return n.filter(o=>!o.timestamp||o.timestamp>l)}catch{return[]}}function N5(e,t){if(!(typeof window>"u"))try{localStorage.setItem(Hh(e),JSON.stringify(t))}catch{}}function L4(){let e=new Map;if(typeof window>"u")return e;try{let t=Date.now()-A5*24*60*60*1e3;for(let n=0;n<localStorage.length;n++){let l=localStorage.key(n);if(l?.startsWith(Ah)){let o=l.slice(Ah.length),a=localStorage.getItem(l);if(a){let r=JSON.parse(a).filter(s=>!s.timestamp||s.timestamp>t);r.length>0&&e.set(o,r)}}}}catch{}return e}function fh(e,t,n){let l=t.map(o=>({...o,_syncedTo:n}));N5(e,l)}var Uh="agentation-design-";function z4(e){if(typeof window>"u")return[];try{let t=localStorage.getItem(`${Uh}${e}`);return t?JSON.parse(t):[]}catch{return[]}}function O4(e,t){if(!(typeof window>"u"))try{localStorage.setItem(`${Uh}${e}`,JSON.stringify(t))}catch{}}function B4(e){if(!(typeof window>"u"))try{localStorage.removeItem(`${Uh}${e}`)}catch{}}var Yh="agentation-rearrange-";function $4(e){if(typeof window>"u")return null;try{let t=localStorage.getItem(`${Yh}${e}`);return t?JSON.parse(t):null}catch{return null}}function H4(e,t){if(!(typeof window>"u"))try{localStorage.setItem(`${Yh}${e}`,JSON.stringify(t))}catch{}}function U4(e){if(!(typeof window>"u"))try{localStorage.removeItem(`${Yh}${e}`)}catch{}}var jh="agentation-wireframe-";function Y4(e){if(typeof window>"u")return null;try{let t=localStorage.getItem(`${jh}${e}`);return t?JSON.parse(t):null}catch{return null}}function qy(e,t){if(!(typeof window>"u"))try{localStorage.setItem(`${jh}${e}`,JSON.stringify(t))}catch{}}function Bu(e){if(!(typeof window>"u"))try{localStorage.removeItem(`${jh}${e}`)}catch{}}var D5="agentation-session-";function Xh(e){return`${D5}${e}`}function j4(e){if(typeof window>"u")return null;try{return localStorage.getItem(Xh(e))}catch{return null}}function hh(e,t){if(!(typeof window>"u"))try{localStorage.setItem(Xh(e),t)}catch{}}function X4(e){if(!(typeof window>"u"))try{localStorage.removeItem(Xh(e))}catch{}}var Nh=`${D5}toolbar-hidden`;function q4(){if(typeof window>"u")return!1;try{return sessionStorage.getItem(Nh)==="1"}catch{return!1}}function I4(e){if(!(typeof window>"u"))try{e?sessionStorage.setItem(Nh,"1"):sessionStorage.removeItem(Nh)}catch{}}async function mh(e,t){let n=await fetch(`${e}/sessions`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({url:t})});if(!n.ok)throw new Error(`Failed to create session: ${n.status}`);return n.json()}async function Iy(e,t){let n=await fetch(`${e}/sessions/${t}`);if(!n.ok)throw new Error(`Failed to get session: ${n.status}`);return n.json()}async function Qy(e,t,n){!n.elementPath&&(n.element==="body"||n.element==="html")&&(n={...n,elementPath:n.element});let l=await fetch(`${e}/sessions/${t}/annotations`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(n)});if(!l.ok)throw new Error(`Failed to sync annotation: ${l.status}`);return l.json()}async function gh(e,t,n){let l=await fetch(`${e}/annotations/${t}`,{method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify(n)});if(!l.ok)throw new Error(`Failed to update annotation: ${l.status}`);return l.json()}async function $u(e,t){let n=await fetch(`${e}/annotations/${t}`,{method:"DELETE"});if(!n.ok)throw new Error(`Failed to delete annotation: ${n.status}`)}var ft={FunctionComponent:0,ClassComponent:1,IndeterminateComponent:2,HostRoot:3,HostPortal:4,HostComponent:5,HostText:6,Fragment:7,Mode:8,ContextConsumer:9,ContextProvider:10,ForwardRef:11,Profiler:12,SuspenseComponent:13,MemoComponent:14,SimpleMemoComponent:15,LazyComponent:16,IncompleteClassComponent:17,DehydratedFragment:18,SuspenseListComponent:19,ScopeComponent:21,OffscreenComponent:22,LegacyHiddenComponent:23,CacheComponent:24,TracingMarkerComponent:25,HostHoistable:26,HostSingleton:27,IncompleteFunctionComponent:28,Throw:29,ViewTransitionComponent:30,ActivityComponent:31},Wy=new Set(["Component","PureComponent","Fragment","Suspense","Profiler","StrictMode","Routes","Route","Outlet","Root","ErrorBoundaryHandler","HotReload","Hot"]),Gy=[/Boundary$/,/BoundaryHandler$/,/Provider$/,/Consumer$/,/^(Inner|Outer)/,/Router$/,/^Client(Page|Segment|Root)/,/^Segment(ViewNode|Node)$/,/^LayoutSegment/,/^Server(Root|Component|Render)/,/^RSC/,/Context$/,/^Hot(Reload)?$/,/^(Dev|React)(Overlay|Tools|Root)/,/Overlay$/,/Handler$/,/^With[A-Z]/,/Wrapper$/,/^Root$/],Q4=[/Page$/,/View$/,/Screen$/,/Section$/,/Card$/,/List$/,/Item$/,/Form$/,/Modal$/,/Dialog$/,/Button$/,/Nav$/,/Header$/,/Footer$/,/Layout$/,/Panel$/,/Tab$/,/Menu$/];function W4(e){let t=e?.mode??"filtered",n=Wy;if(e?.skipExact){let l=e.skipExact instanceof Set?e.skipExact:new Set(e.skipExact);n=new Set([...Wy,...l])}return{maxComponents:e?.maxComponents??6,maxDepth:e?.maxDepth??30,mode:t,skipExact:n,skipPatterns:e?.skipPatterns?[...Gy,...e.skipPatterns]:Gy,userPatterns:e?.userPatterns??Q4,filter:e?.filter}}function G4(e){return e.replace(/([a-z])([A-Z])/g,"$1-$2").replace(/([A-Z])([A-Z][a-z])/g,"$1-$2").toLowerCase()}function V4(e,t=10){let n=new Set,l=e,o=0;for(;l&&o<t;)l.className&&typeof l.className=="string"&&l.className.split(/\s+/).forEach(a=>{if(a.length>1){let i=a.replace(/[_][a-zA-Z0-9]{5,}.*$/,"").toLowerCase();i.length>1&&n.add(i)}}),l=l.parentElement,o++;return n}function F4(e,t){let n=G4(e);for(let l of t){if(l===n)return!0;let o=n.split("-").filter(i=>i.length>2),a=l.split("-").filter(i=>i.length>2);for(let i of o)for(let r of a)if(i===r||i.includes(r)||r.includes(i))return!0}return!1}function Z4(e,t,n,l){if(n.filter)return n.filter(e,t);switch(n.mode){case"all":return!0;case"filtered":return!(n.skipExact.has(e)||n.skipPatterns.some(o=>o.test(e)));case"smart":return n.skipExact.has(e)||n.skipPatterns.some(o=>o.test(e))?!1:!!(l&&F4(e,l)||n.userPatterns.some(o=>o.test(e)));default:return!0}}var Wi=null,K4=new WeakMap;function ph(e){return Object.keys(e).some(t=>t.startsWith("__reactFiber$")||t.startsWith("__reactInternalInstance$")||t.startsWith("__reactProps$"))}function J4(){if(Wi!==null)return Wi;if(typeof document>"u")return!1;if(document.body&&ph(document.body))return Wi=!0,!0;let e=["#root","#app","#__next","[data-reactroot]"];for(let t of e){let n=document.querySelector(t);if(n&&ph(n))return Wi=!0,!0}if(document.body){for(let t of document.body.children)if(ph(t))return Wi=!0,!0}return Wi=!1,!1}var bs={map:K4};function P4(e){return Object.keys(e).find(n=>n.startsWith("__reactFiber$")||n.startsWith("__reactInternalInstance$"))||null}function e6(e){let t=P4(e);return t?e[t]:null}function Ha(e){return e?e.displayName?e.displayName:e.name?e.name:null:null}function t6(e){let{tag:t,type:n,elementType:l}=e;if(t===ft.HostComponent||t===ft.HostText||t===ft.HostHoistable||t===ft.HostSingleton||t===ft.Fragment||t===ft.Mode||t===ft.Profiler||t===ft.DehydratedFragment||t===ft.HostRoot||t===ft.HostPortal||t===ft.ScopeComponent||t===ft.OffscreenComponent||t===ft.LegacyHiddenComponent||t===ft.CacheComponent||t===ft.TracingMarkerComponent||t===ft.Throw||t===ft.ViewTransitionComponent||t===ft.ActivityComponent)return null;if(t===ft.ForwardRef){let o=l;if(o?.render){let a=Ha(o.render);if(a)return a}return o?.displayName?o.displayName:Ha(n)}if(t===ft.MemoComponent||t===ft.SimpleMemoComponent){let o=l;if(o?.type){let a=Ha(o.type);if(a)return a}return o?.displayName?o.displayName:Ha(n)}if(t===ft.ContextProvider){let o=n;return o?._context?.displayName?`${o._context.displayName}.Provider`:null}if(t===ft.ContextConsumer){let o=n;return o?.displayName?`${o.displayName}.Consumer`:null}if(t===ft.LazyComponent){let o=l;return o?._status===1&&o._result?Ha(o._result):null}return t===ft.SuspenseComponent||t===ft.SuspenseListComponent?null:t===ft.IncompleteClassComponent||t===ft.IncompleteFunctionComponent||t===ft.FunctionComponent||t===ft.ClassComponent||t===ft.IndeterminateComponent?Ha(n):null}function n6(e){return e.length<=2||e.length<=3&&e===e.toLowerCase()}function l6(e,t){let n=W4(t),l=n.mode==="all";if(l){let s=bs.map.get(e);if(s!==void 0)return s}if(!J4()){let s={path:null,components:[]};return l&&bs.map.set(e,s),s}let o=n.mode==="smart"?V4(e):void 0,a=[];try{let s=e6(e),d=0;for(;s&&d<n.maxDepth&&a.length<n.maxComponents;){let h=t6(s);h&&!n6(h)&&Z4(h,d,n,o)&&a.push(h),s=s.return,d++}}catch{let s={path:null,components:[]};return l&&bs.map.set(e,s),s}if(a.length===0){let s={path:null,components:[]};return l&&bs.map.set(e,s),s}let r={path:a.slice().reverse().map(s=>`<${s}>`).join(" "),components:a};return l&&bs.map.set(e,r),r}var xs={FunctionComponent:0,ClassComponent:1,IndeterminateComponent:2,HostRoot:3,HostPortal:4,HostComponent:5,HostText:6,Fragment:7,Mode:8,ContextConsumer:9,ContextProvider:10,ForwardRef:11,Profiler:12,SuspenseComponent:13,MemoComponent:14,SimpleMemoComponent:15,LazyComponent:16};function a6(e){if(!e||typeof e!="object")return null;let t=Object.keys(e),n=t.find(a=>a.startsWith("__reactFiber$"));if(n)return e[n]||null;let l=t.find(a=>a.startsWith("__reactInternalInstance$"));if(l)return e[l]||null;let o=t.find(a=>{if(!a.startsWith("__react"))return!1;let i=e[a];return i&&typeof i=="object"&&"_debugSource"in i});return o&&e[o]||null}function Es(e){if(!e.type||typeof e.type=="string")return null;if(typeof e.type=="object"||typeof e.type=="function"){let t=e.type;if(t.displayName)return t.displayName;if(t.name)return t.name}return null}function i6(e,t=50){let n=e,l=0;for(;n&&l<t;){if(n._debugSource)return{source:n._debugSource,componentName:Es(n)};if(n._debugOwner?._debugSource)return{source:n._debugOwner._debugSource,componentName:Es(n._debugOwner)};n=n.return,l++}return null}function r6(e){let t=e,n=0,l=50;for(;t&&n<l;){let o=t,a=["_debugSource","__source","_source","debugSource"];for(let i of a){let r=o[i];if(r&&typeof r=="object"&&"fileName"in r)return{source:r,componentName:Es(t)}}if(t.memoizedProps){let i=t.memoizedProps;if(i.__source&&typeof i.__source=="object"){let r=i.__source;if(r.fileName&&r.lineNumber)return{source:{fileName:r.fileName,lineNumber:r.lineNumber,columnNumber:r.columnNumber},componentName:Es(t)}}}t=t.return,n++}return null}var Hu=new Map;function s6(e){let t=e.tag,n=e.type,l=e.elementType;if(typeof n=="string"||n==null||typeof n=="function"&&n.prototype?.isReactComponent)return null;if((t===xs.FunctionComponent||t===xs.IndeterminateComponent)&&typeof n=="function")return n;if(t===xs.ForwardRef&&l){let o=l.render;if(typeof o=="function")return o}if((t===xs.MemoComponent||t===xs.SimpleMemoComponent)&&l){let o=l.type;if(typeof o=="function")return o}return typeof n=="function"?n:null}function c6(){let e=o6,t=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;if(t&&"H"in t)return{get:()=>t.H,set:l=>{t.H=l}};let n=e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;if(n){let l=n.ReactCurrentDispatcher;if(l&&"current"in l)return{get:()=>l.current,set:o=>{l.current=o}}}return null}function u6(e,t){let n=e.split(`
`),l=[/source-location/,/\/dist\/index\./,/node_modules\//,/react-dom/,/react\.development/,/react\.production/,/chunk-[A-Z0-9]+/i,/\/_next\/static\/chunks\//,/\/\.vite\/deps\//,/\/_astro\//,/\/assets\/[^\s/]+[-.][\w-]{8,}\.m?js(?:[?:]|$)/,/react-stack-bottom-frame/,/react-reconciler/,/scheduler/,/<anonymous>/],o=/^\s*at\s+(?:.*?\s+\()?(.+?):(\d+):(\d+)\)?$/,a=/^[^@]*@(.+?):(\d+):(\d+)$/;for(let i of n){let r=i.trim();if(!r||l.some(d=>d.test(r)))continue;if(t){let d=t.replace(/^bound /,"").replace(/[.*+?^${}()|[\]\\]/g,"\\$&");if(!new RegExp(`(?:at (?:Object\\.)?|^)${d}(?: \\(|@| \\[)`).test(r))continue}let s=o.exec(r)||a.exec(r);if(s)return{fileName:s[1],line:parseInt(s[2],10),column:parseInt(s[3],10)}}return null}function d6(e){let t=e;return t=t.replace(/[?#].*$/,""),t=t.replace(/^turbopack:\/\/\/\[project\]\//,""),t=t.replace(/^webpack-internal:\/\/\/\.\//,""),t=t.replace(/^webpack-internal:\/\/\//,""),t=t.replace(/^webpack:\/\/\/\.\//,""),t=t.replace(/^webpack:\/\/\//,""),t=t.replace(/^turbopack:\/\/\//,""),t=t.replace(/^https?:\/\/[^/]+\//,""),t=t.replace(/^file:\/\/\//,"/"),t=t.replace(/^\([^)]+\)\/\.\//,""),t=t.replace(/^\.\//,""),t}function _6(e){let t=s6(e);if(!t)return null;if(Hu.has(t))return Hu.get(t);let n=c6();if(!n)return Hu.set(t,null),null;let l=n.get(),o=null;try{let a=new Proxy({},{get(){throw new Error("probe")}});n.set(a);try{t({})}catch(i){if(i instanceof Error&&i.message==="probe"&&i.stack){let r=u6(i.stack,t.name);r&&(o={fileName:d6(r.fileName),lineNumber:r.line,columnNumber:r.column,componentName:Es(e)||void 0})}}}finally{n.set(l)}return Hu.set(t,o),o}function f6(e,t=15){let n=e,l=0;for(;n&&l<t;){let o=_6(n);if(o)return o;n=n.return,l++}return null}function Dh(e){let t=a6(e);if(!t)return{found:!1,reason:"no-fiber",isReactApp:!1,isProduction:!1};let n=i6(t);if(n||(n=r6(t)),n?.source)return{found:!0,source:{fileName:n.source.fileName,lineNumber:n.source.lineNumber,columnNumber:n.source.columnNumber,componentName:n.componentName||void 0},isReactApp:!0,isProduction:!1};let l=f6(t);return l?{found:!0,source:l,isReactApp:!0,isProduction:!1}:{found:!1,reason:"no-debug-source",isReactApp:!0,isProduction:!1}}function h6(e,t="path"){let{fileName:n,lineNumber:l,columnNumber:o}=e,a=`${n}:${l}`;return o!==void 0&&(a+=`:${o}`),t==="vscode"?`vscode://file${n.startsWith("/")?"":"/"}${a}`:a}function m6(e,t=10){let n=e,l=0;for(;n&&l<t;){let o=Dh(n);if(o.found)return o;n=n.parentElement,l++}return Dh(e)}var vs=[{value:"compact",label:"Compact"},{value:"standard",label:"Standard"},{value:"detailed",label:"Detailed"},{value:"forensic",label:"Forensic"}];function qu(e,t){let n=`## Page Feedback: ${e}
`,l=t?.replace(/[\r\n\t]+/g," ").trim();return l&&(n+=`**App:** ${l.replace(/[\\`*_\[\]<>]/g,"\\$&")}
`),n}function Vy(e,t,n="standard",l={}){if(e.length===0)return"";let o=typeof window<"u"?`${window.innerWidth}\xD7${window.innerHeight}`:"unknown",a=qu(t,l.appName);return n==="forensic"?(a+=`
**Environment:**
`,a+=`- Viewport: ${o}
`,typeof window<"u"&&(a+=`- URL: ${window.location.href}
`,a+=`- User Agent: ${navigator.userAgent}
`,a+=`- Timestamp: ${new Date().toISOString()}
`,a+=`- Device Pixel Ratio: ${window.devicePixelRatio}
`),a+=`
---
`):n!=="compact"&&(a+=`**Viewport:** ${o}
`),a+=`
`,e.forEach((i,r)=>{n==="compact"?(a+=`${r+1}. **${i.element}**${i.sourceFile?` (${i.sourceFile})`:""}: ${i.comment}`,i.selectedText&&(a+=` (re: "${i.selectedText.slice(0,30)}${i.selectedText.length>30?"...":""}")`),a+=`
`):n==="forensic"?(a+=`### ${r+1}. ${i.element}
`,i.isMultiSelect&&i.fullPath&&(a+=`*Forensic data shown for first element of selection*
`),i.fullPath&&(a+=`**Full DOM Path:** ${i.fullPath}
`),i.cssClasses&&(a+=`**CSS Classes:** ${i.cssClasses}
`),i.boundingBox&&(a+=`**Position:** x:${Math.round(i.boundingBox.x)}, y:${Math.round(i.boundingBox.y)} (${Math.round(i.boundingBox.width)}\xD7${Math.round(i.boundingBox.height)}px)
`),a+=`**Annotation at:** ${i.x.toFixed(1)}% from left, ${Math.round(i.y)}px from top
`,i.selectedText&&(a+=`**Selected text:** "${i.selectedText}"
`),i.nearbyText&&!i.selectedText&&(a+=`**Context:** ${i.nearbyText.slice(0,100)}
`),i.computedStyles&&(a+=`**Computed Styles:** ${i.computedStyles}
`),i.accessibility&&(a+=`**Accessibility:** ${i.accessibility}
`),i.nearbyElements&&(a+=`**Nearby Elements:** ${i.nearbyElements}
`),i.sourceFile&&(a+=`**Source:** ${i.sourceFile}
`),i.reactComponents&&(a+=`**React:** ${i.reactComponents}
`),a+=`**Feedback:** ${i.comment}

`):(a+=`### ${r+1}. ${i.element}
`,a+=`**Location:** ${i.elementPath}
`,i.sourceFile&&(a+=`**Source:** ${i.sourceFile}
`),i.reactComponents&&(a+=`**React:** ${i.reactComponents}
`),n==="detailed"&&(i.cssClasses&&(a+=`**Classes:** ${i.cssClasses}
`),i.boundingBox&&(a+=`**Position:** ${Math.round(i.boundingBox.x)}px, ${Math.round(i.boundingBox.y)}px (${Math.round(i.boundingBox.width)}\xD7${Math.round(i.boundingBox.height)}px)
`)),i.selectedText&&(a+=`**Selected text:** "${i.selectedText}"
`),n==="detailed"&&i.nearbyText&&!i.selectedText&&(a+=`**Context:** ${i.nearbyText.slice(0,100)}
`),a+=`**Feedback:** ${i.comment}

`)}),a.trim()}function Fy(e,t,n="markdown"){return n==="markdown"?t:[...new Set(e.map(l=>n==="source"?l.sourceFile:n==="classes"?l.cssClasses:l.attributes?.[n.attribute]).filter(l=>typeof l=="string"&&l.length>0))].join(`
`)}async function g6(e){if(typeof window>"u")return!1;try{if(navigator.clipboard?.writeText)return await navigator.clipboard.writeText(e),!0}catch{}return p6(e)}function p6(e){let t=document.createElement("textarea"),n=document.activeElement;for(;n?.shadowRoot?.activeElement;)n=n.shadowRoot.activeElement;let l=n instanceof HTMLInputElement||n instanceof HTMLTextAreaElement?n:null,o=l&&l.selectionStart!==null?{start:l.selectionStart,end:l.selectionEnd,direction:l.selectionDirection}:null,a=document.getSelection(),i=a?Array.from({length:a.rangeCount},(r,s)=>a.getRangeAt(s).cloneRange()):[];try{return t.value=e,t.setAttribute("readonly",""),t.style.cssText="position:fixed;left:-9999px;top:0;opacity:0;pointer-events:none;",document.body.appendChild(t),t.focus({preventScroll:!0}),t.select(),t.setSelectionRange(0,e.length),document.execCommand("copy")}catch{return!1}finally{if(t.remove(),n instanceof HTMLElement&&n.isConnected&&(n.focus({preventScroll:!0}),l&&o&&l.setSelectionRange(o.start,o.end,o.direction)),a){a.removeAllRanges();for(let r of i)a.addRange(r)}}}function Zy(e){if(!e)return e;try{let t=new URL(e,"http://agentation.invalid");return t.pathname+t.search+t.hash}catch{return e}}function Ky(e,t,n=[]){let l=new Map,o=new Map(n.map(r=>[r.id,r])),a=!1;async function i(r,s){if(a||s.running||s.timer)return;let d=s.desired,h=t.get(r);if(!d&&!h){l.delete(r),t.delete(r);return}let _=d?JSON.stringify(d):void 0;if(!(d&&h&&s.synced===_)){s.running=!0;try{if(!d)await e.remove(h),t.delete(r),s.synced=void 0;else if(h)await e.update(h,d),s.synced=_;else{t.set(r,"");let m=await e.create(d);t.set(r,m.id),s.synced=_}s.retries=0,s.running=!1,!a&&l.get(r)===s&&i(r,s)}catch(m){if(s.running=!1,!a&&l.get(r)===s&&(console.warn("[Agentation] Failed to sync layout feedback:",m),t.get(r)&&s.retries<3)){let v=500*2**s.retries++;s.timer=rt(()=>{s.timer=void 0,i(r,s)},v)}}}}return{replace(r){let s=new Map(r.map(d=>[d.id,d]));for(let[d,h]of s){let _=l.get(d);if(!_){_={running:!1,retries:0},l.set(d,_);let m=[...o.values()].find(v=>v.kind===h.kind&&Zy(v.url)===Zy(h.url)&&(h.kind==="placement"?v.timestamp===h.timestamp&&v.element===h.element:v.element===h.element));m&&(t.set(d,m.id),o.delete(m.id))}JSON.stringify(_.desired)!==JSON.stringify(h)&&(_.retries=0,_.timer&&clearTimeout(_.timer),_.timer=void 0),_.desired=h}for(let[d,h]of l)s.has(d)||(h.desired=void 0),i(d,h)},forget(r){let s=l.get(r);s?.timer&&clearTimeout(s.timer),l.delete(r),t.delete(r)},dispose(){a=!0;for(let r of l.values())r.timer&&clearTimeout(r.timer)}}}function y6(e,t,n,l){let o=!1,a,i,r=1e3,s,d=v=>{!o&&(v?.status==="resolved"||v?.status==="dismissed")&&l(v)},h=async()=>{if(o||s||!n())return;let v=new AbortController;s=v;let k=rt(()=>v.abort(),5e3);try{let A=await fetch(`${e}/sessions/${t}`,{signal:v.signal});if(!A.ok)return;let M=await A.json();!o&&!v.signal.aborted&&Array.isArray(M.annotations)&&M.annotations.forEach(d)}catch{}finally{clearTimeout(k),s===v&&(s=void 0)}},_=()=>{if(o)return;let v=new EventSource(`${e}/sessions/${t}/events`),k=()=>{r=1e3,h()},A=p=>{try{d(JSON.parse(p.data).payload)}catch{}},M=()=>{v.readyState!==EventSource.CLOSED||o||i!==void 0||(a?.(),i=rt(()=>{i=void 0,_()},r),r=Math.min(r*2,1e4))};v.addEventListener("open",k),v.addEventListener("annotation.updated",A),v.addEventListener("error",M),a=()=>{v.removeEventListener("open",k),v.removeEventListener("annotation.updated",A),v.removeEventListener("error",M),v.close()}};_();let m=a5(()=>{h()},1e4);return()=>{o=!0,a?.(),i!==void 0&&clearTimeout(i),clearInterval(m),s?.abort()}}var b6=`.styles-module__surface___7qnpJ {
  padding: 0;
  width: var(--preview-width, 200px);
  max-width: calc(100vw - 24px);
  overflow: auto;
  opacity: 0;
  visibility: hidden;
  pointer-events: none;
  border-radius: 12px;
  z-index: inherit;
  will-change: auto;
  transform: translateX(-50%);
  transition: left 200ms cubic-bezier(0.2, 0.8, 0.2, 1), top 200ms cubic-bezier(0.2, 0.8, 0.2, 1), transform 200ms cubic-bezier(0.2, 0.8, 0.2, 1), width 200ms cubic-bezier(0.2, 0.8, 0.2, 1), opacity 100ms ease-out, visibility 0s 200ms;
}
.styles-module__surface___7qnpJ[data-positioning] {
  transition: none;
}
.styles-module__surface___7qnpJ[data-direct-entry] *, .styles-module__surface___7qnpJ[data-direct-entry] *::before, .styles-module__surface___7qnpJ[data-direct-entry] *::after {
  transition: none !important;
}
.styles-module__surface___7qnpJ[data-state=preview], .styles-module__surface___7qnpJ[data-state=edit] {
  opacity: 1;
  visibility: visible;
  transition-delay: 0s;
}
.styles-module__surface___7qnpJ[data-state=edit], .styles-module__surface___7qnpJ[data-annotation-popup][data-state=hidden] {
  width: 280px;
  border-radius: 16px;
}
.styles-module__surface___7qnpJ[data-state=edit] {
  pointer-events: auto;
}
.styles-module__surface___7qnpJ[data-state=preview] {
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3), 0 0 0 1px rgba(255, 255, 255, 0.08);
}
[data-agentation-theme=light] .styles-module__surface___7qnpJ[data-state=preview] {
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.12), 0 0 0 1px rgba(0, 0, 0, 0.06);
}

@media (prefers-reduced-motion: reduce) {
  .styles-module__surface___7qnpJ {
    transition: opacity 100ms ease-out, visibility 0s 100ms;
  }
}`,x6={surface:"styles-module__surface___7qnpJ"},v6=(0,Un.forwardRef)(function({annotation:t,editing:n,exiting:l,restorePreview:o,editorProps:a,lightMode:i,scrollY:r,onExited:s},d){let h=(0,Un.useRef)({annotation:t,editorProps:a}),_=t??h.current.annotation,m=t?a:h.current.editorProps,v=(0,Un.useRef)(null),k=(0,Un.useRef)(null),A=(0,Un.useRef)(),M=(0,Un.useRef)(r),p=n&&!l?"edit":t&&(!n||o)?"preview":"hidden",x=p==="preview"||!n;return(0,Un.useLayoutEffect)(()=>{t&&(h.current={annotation:t,editorProps:a})},[t,a]),(0,Un.useLayoutEffect)(()=>{let g=v.current;if(!g||!_)return;let S=p==="edit"&&(A.current!==_.id||g.dataset.state==="hidden"&&getComputedStyle(g).opacity==="0");S&&(g.dataset.directEntry="true");let W=()=>{let K=_.x/100*window.innerWidth,O=_.isFixed?_.y:_.y-r,F=p==="preview"||!n,re=parseFloat(g.style.getPropertyValue("--preview-width"))||200,Z=Math.min(re,window.innerWidth-24),_e=Math.max(12,Math.min(window.innerWidth-Z-12,K-Z/2)),oe=F?Z:Math.min(280,window.innerWidth-24),se=Math.min(F?12:20,(window.innerWidth-oe)/2),he=O>window.innerHeight-(F?101:290);g.style.left=`${Math.max(se,Math.min(window.innerWidth-oe-se,_e))}px`,g.style.right="auto",g.style.top=`${Math.max(12,Math.min(window.innerHeight-12,O+(he?-21:21)))}px`,g.style.bottom="auto",g.style.transform=he?"translateY(-100%)":"translateY(0)",g.style.maxHeight=`${Math.max(100,he?O-33:window.innerHeight-O-33)}px`},J=A.current!==_.id||M.current!==r||g.dataset.state==="hidden";J&&(g.dataset.positioning="true"),W(),(J||S)&&g.getBoundingClientRect(),delete g.dataset.positioning,delete g.dataset.directEntry,g.dataset.state=p,g.inert=p!=="edit",A.current=_.id,M.current=r;let z=()=>{g.dataset.positioning="true",W(),g.getBoundingClientRect(),delete g.dataset.positioning};return window.addEventListener("resize",z),()=>window.removeEventListener("resize",z)},[_?.id,_?.x,_?.y,_?.isFixed,p,n,r,_?.comment]),(0,Un.useLayoutEffect)(()=>{n&&!l&&k.current?.focus()},[n,l,_?.id]),Oh(v,l,s),(0,Un.useImperativeHandle)(d,()=>({shake(){v.current?.animate?.([{translate:"0px"},{translate:"-3px"},{translate:"3px"},{translate:"-2px"},{translate:"2px"},{translate:"0px"}],{duration:250}),k.current?.focus()}}),[]),!_||!m?null:(0,Rh.jsx)("div",{ref:v,className:`${$e.popup} ${x6.surface} ${i?$e.light:""}`,"data-feedback-toolbar":!0,"data-annotation-card":!0,"data-annotation-popup":n?"":void 0,"data-state":"hidden","aria-hidden":p==="hidden",onClick:g=>g.stopPropagation(),onKeyDownCapture:g=>{g.key!=="Escape"||g.nativeEvent.isComposing||!n||(g.preventDefault(),g.stopPropagation(),m.onCancel())},children:(0,Rh.jsx)(p5,{ref:k,...m,variant:"card",preview:x,resetOnPreview:!n,disabled:!n||l},_.id)})}),w6=`@keyframes styles-module__markerIn___x4G8D {
  0% {
    opacity: 0;
    transform: translate(-50%, -50%) scale(0.3);
  }
  100% {
    opacity: 1;
    transform: translate(-50%, -50%) scale(1);
  }
}
@keyframes styles-module__markerOut___6VhQN {
  0% {
    opacity: 1;
    transform: translate(-50%, -50%) scale(1);
  }
  100% {
    opacity: 0;
    transform: translate(-50%, -50%) scale(0.3);
  }
}
@keyframes styles-module__renumberRoll___akV9B {
  0% {
    transform: translateX(-40%);
    opacity: 0;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
}
.styles-module__marker___9CKF7 {
  padding: 0;
  border: 0;
  box-sizing: border-box;
  font-family: inherit;
  line-height: 1;
  text-align: center;
  appearance: none;
  position: absolute;
  width: 22px;
  height: 22px;
  background: var(--agentation-color-blue);
  color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.6875rem;
  font-weight: 600;
  transform: translate(-50%, -50%) scale(1);
  opacity: 1;
  cursor: pointer;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2), inset 0 0 0 1px rgba(0, 0, 0, 0.04);
  -webkit-user-select: none;
  user-select: none;
  will-change: transform, opacity;
  contain: layout style;
  z-index: 1;
}
.styles-module__marker___9CKF7 > * {
  pointer-events: none;
}
.styles-module__marker___9CKF7:focus-visible {
  outline: 2px solid var(--agentation-color-accent);
  outline-offset: 3px;
}
.styles-module__marker___9CKF7:hover, .styles-module__marker___9CKF7:focus-visible, .styles-module__marker___9CKF7.styles-module__previewVisible___imMag {
  z-index: 2;
}
.styles-module__marker___9CKF7:not(.styles-module__enter___8kI3q):not(.styles-module__exit___KBdR3):not(.styles-module__clearing___8rM7K):not(.styles-module__confirm___BtMvq) {
  transition: background-color 0.15s ease, transform 0.1s ease, z-index 0s 0.1s;
}
.styles-module__marker___9CKF7:not(.styles-module__enter___8kI3q):not(.styles-module__exit___KBdR3):not(.styles-module__clearing___8rM7K):not(.styles-module__confirm___BtMvq):hover, .styles-module__marker___9CKF7:not(.styles-module__enter___8kI3q):not(.styles-module__exit___KBdR3):not(.styles-module__clearing___8rM7K):not(.styles-module__confirm___BtMvq):focus-visible, .styles-module__marker___9CKF7:not(.styles-module__enter___8kI3q):not(.styles-module__exit___KBdR3):not(.styles-module__clearing___8rM7K):not(.styles-module__confirm___BtMvq).styles-module__previewVisible___imMag {
  transition-delay: 0s;
}
.styles-module__marker___9CKF7.styles-module__enter___8kI3q {
  animation: styles-module__markerIn___x4G8D 0.25s cubic-bezier(0.22, 1, 0.36, 1) both;
}
.styles-module__marker___9CKF7.styles-module__confirm___BtMvq {
  animation: styles-module__markerConfirm___RT4Sk 220ms ease-out both;
}
.styles-module__marker___9CKF7.styles-module__exit___KBdR3 {
  animation: styles-module__markerOut___6VhQN 0.2s ease-out both;
  pointer-events: none;
}
.styles-module__marker___9CKF7.styles-module__clearing___8rM7K {
  animation: styles-module__markerOut___6VhQN 0.15s ease-out both;
  pointer-events: none;
}
.styles-module__marker___9CKF7:not(.styles-module__enter___8kI3q):not(.styles-module__exit___KBdR3):not(.styles-module__clearing___8rM7K):not(.styles-module__confirm___BtMvq):hover {
  transform: translate(-50%, -50%) scale(1.1);
}
.styles-module__marker___9CKF7.styles-module__pending___BiY-U {
  background-color: var(--agentation-color-blue);
  cursor: default;
}
.styles-module__marker___9CKF7.styles-module__pending___BiY-U.styles-module__exit___KBdR3 {
  animation-duration: 150ms;
}
.styles-module__marker___9CKF7.styles-module__multiSelect___CPfTC {
  background-color: var(--agentation-color-green);
  width: 26px;
  height: 26px;
  border-radius: 6px;
  font-size: 0.75rem;
}
.styles-module__marker___9CKF7.styles-module__multiSelect___CPfTC.styles-module__pending___BiY-U {
  background-color: var(--agentation-color-green);
}
.styles-module__marker___9CKF7.styles-module__hovered___-mg2N {
  background-color: var(--agentation-color-red);
}

.styles-module__renumber___16lvD {
  display: block;
  animation: styles-module__renumberRoll___akV9B 0.2s ease-out;
}

@keyframes styles-module__markerConfirm___RT4Sk {
  0% {
    transform: translate(-50%, -50%) scale(1);
  }
  25% {
    transform: translate(-50%, -50%) scale(0.94);
  }
  65% {
    transform: translate(-50%, -50%) scale(1.06);
  }
  100% {
    transform: translate(-50%, -50%) scale(1);
  }
}
.styles-module__number___1JFu9 {
  display: block;
}

.styles-module__numberGlyph___qchdk {
  display: block;
  opacity: 1;
  transform: translateY(0);
  filter: blur(0);
  transition: opacity 140ms ease-out, transform 180ms cubic-bezier(0.22, 1, 0.36, 1), filter 140ms ease-out;
}

.styles-module__actionGlyph___AFRt0 {
  position: absolute;
  inset: 0;
  display: grid;
  place-items: center;
  opacity: 0;
  transform: translateY(2px) scale(0.8) rotate(-12deg);
  filter: blur(1px);
  transition: opacity 120ms ease-out, transform 160ms cubic-bezier(0.22, 1, 0.36, 1), filter 120ms ease-out;
}

.styles-module__actionVisible___Kb--l .styles-module__numberGlyph___qchdk {
  opacity: 0;
  transform: translateY(-2px) scale(0.8);
  filter: blur(1px);
}
.styles-module__actionVisible___Kb--l .styles-module__actionGlyph___AFRt0 {
  opacity: 1;
  transform: translateY(0) scale(1) rotate(0);
  filter: blur(0);
}

.styles-module__plus___xslMP {
  position: absolute;
  inset: 0;
  display: grid;
  place-items: center;
  opacity: 0;
  transform: rotate(-90deg) scale(0.6);
  filter: blur(1px);
  transition: opacity 100ms ease-out, transform 140ms ease-out, filter 100ms ease-out;
  pointer-events: none;
}

.styles-module__pending___BiY-U .styles-module__numberGlyph___qchdk {
  opacity: 0;
  transform: translateY(5px);
  filter: blur(2px);
}
.styles-module__pending___BiY-U .styles-module__plus___xslMP {
  opacity: 1;
  transform: rotate(0) scale(1);
  filter: blur(0);
}

@media (prefers-reduced-motion: reduce) {
  .styles-module__marker___9CKF7.styles-module__enter___8kI3q, .styles-module__marker___9CKF7.styles-module__exit___KBdR3, .styles-module__marker___9CKF7.styles-module__clearing___8rM7K, .styles-module__marker___9CKF7.styles-module__confirm___BtMvq {
    animation-duration: 1ms;
    animation-delay: 0ms !important;
  }
  .styles-module__numberGlyph___qchdk, .styles-module__actionGlyph___AFRt0, .styles-module__plus___xslMP {
    transition: opacity 100ms ease-out;
    transform: none;
    filter: none;
  }
  .styles-module__pending___BiY-U .styles-module__numberGlyph___qchdk, .styles-module__pending___BiY-U .styles-module__plus___xslMP,
  .styles-module__actionVisible___Kb--l .styles-module__numberGlyph___qchdk, .styles-module__actionVisible___Kb--l .styles-module__actionGlyph___AFRt0 {
    transform: none;
    filter: none;
  }
}`,gn={marker:"styles-module__marker___9CKF7",previewVisible:"styles-module__previewVisible___imMag",enter:"styles-module__enter___8kI3q",exit:"styles-module__exit___KBdR3",clearing:"styles-module__clearing___8rM7K",confirm:"styles-module__confirm___BtMvq",markerIn:"styles-module__markerIn___x4G8D",markerConfirm:"styles-module__markerConfirm___RT4Sk",markerOut:"styles-module__markerOut___6VhQN",pending:"styles-module__pending___BiY-U",multiSelect:"styles-module__multiSelect___CPfTC",hovered:"styles-module__hovered___-mg2N",renumber:"styles-module__renumber___16lvD",renumberRoll:"styles-module__renumberRoll___akV9B",number:"styles-module__number___1JFu9",numberGlyph:"styles-module__numberGlyph___qchdk",actionGlyph:"styles-module__actionGlyph___AFRt0",actionVisible:"styles-module__actionVisible___Kb--l",plus:"styles-module__plus___xslMP"},Jy=(0,gl.memo)(function({annotation:t,pending:n=!1,globalIndex:l,layerIndex:o,layerSize:a,isExiting:i,isClearing:r,isAnimated:s,isNew:d,isHovered:h,isRemoving:_,onRemoveComplete:m,isEditingAny:v,renumberFrom:k,markerClickBehavior:A,onHoverEnter:M,onEnterComplete:p,onHoverLeave:x,onClick:g,onContextMenu:S}){let[W,J]=(0,gl.useState)(s),z=(0,gl.useRef)(n),[K,O]=(0,gl.useState)(!1),F=z.current&&!n&&W&&!K;(0,gl.useLayoutEffect)(()=>{i&&J(!1)},[i]);let re=(0,gl.useRef)(null),Z=(0,gl.useRef)({action:!1,delete:!1}),_e=h&&!v,oe=_e&&A==="delete";(0,gl.useLayoutEffect)(()=>{_||(Z.current={action:_e,delete:oe})},[_,_e,oe]);let se=_?Z.current.action:_e,he=_?Z.current.delete:oe;Oh(re,_,()=>m(t.id));let Dt=t.isMultiSelect,Ue=Dt?"var(--agentation-color-green)":"var(--agentation-color-accent)",tt=r?gn.clearing:i||_?gn.exit:F?gn.confirm:!s&&!W?gn.enter:"",Ye=r?`${Math.min(o*20,120)}ms`:_||n||F?"0ms":i?`${(a-1-o)*20}ms`:`${d?0:o*20}ms`;return(0,ql.jsxs)("button",{ref:re,type:"button","aria-label":n?"Pending annotation":`${A==="delete"?"Delete":"Edit"} annotation ${l+1}: ${t.element}`,disabled:n||i||_||r,tabIndex:n||v?-1:0,className:`${gn.marker} ${n?gn.pending:""} ${Dt?gn.multiSelect:""} ${tt} ${!n&&se?gn.actionVisible:""} ${he?gn.hovered:""} ${h&&!v&&!_?gn.previewVisible:""}`,"data-annotation-marker":n?void 0:"","data-annotation-pending":n?"":void 0,style:{left:`${t.x}%`,top:t.y,backgroundColor:he?void 0:Ue,animationDelay:Ye},onAnimationEnd:xt=>{xt.target===xt.currentTarget&&(tt===gn.enter||tt===gn.confirm)&&(J(!0),n||O(!0),n||p(t.id))},onMouseOver:()=>{n||M(t)},onMouseOut:xt=>{let cn=xt.relatedTarget;(!(cn instanceof Node)||!xt.currentTarget.contains(cn))&&x(t.id)},onFocus:xt=>{!n&&xt.currentTarget.matches(":focus-visible")&&M(t)},onBlur:()=>x(t.id),onClick:xt=>{xt.stopPropagation(),!n&&!i&&!_&&g(t,xt.currentTarget)},onContextMenu:S?xt=>{A==="delete"&&(xt.preventDefault(),xt.stopPropagation(),!n&&!i&&!_&&S(t,xt.currentTarget))}:void 0,children:[(0,ql.jsx)("span",{className:`${gn.number} ${k!==null&&l>=k?gn.renumber:""}`,"aria-hidden":"true",children:(0,ql.jsx)("span",{className:gn.numberGlyph,children:l+1})},l),(0,ql.jsx)("span",{className:gn.actionGlyph,"aria-hidden":"true",children:A==="delete"?(0,ql.jsx)(Yv,{size:Dt?18:16}):(0,ql.jsx)(qv,{size:16})}),z.current&&(0,ql.jsx)("span",{className:gn.plus,"aria-hidden":"true",children:(0,ql.jsx)(Rv,{size:12})})]})}),k6=`.styles-module__switchContainer___Ka-AB {
  display: flex;
  align-items: center;
  position: relative;
  padding: 2px;
  width: 24px;
  height: 16px;
  border-radius: 8px;
  background-color: #cdcdcd;
  transition: background-color 0.15s, opacity 0.15s;
}
[data-agentation-theme=dark] .styles-module__switchContainer___Ka-AB {
  background-color: #484848;
}
.styles-module__switchContainer___Ka-AB:has(.styles-module__switchInput___kYDSD:checked) {
  background-color: var(--agentation-color-blue);
}
.styles-module__switchContainer___Ka-AB:has(.styles-module__switchInput___kYDSD:disabled) {
  opacity: 0.3;
}

.styles-module__switchInput___kYDSD {
  position: absolute;
  z-index: 1;
  inset: 0;
  border-radius: inherit;
  opacity: 0;
  cursor: pointer;
}
.styles-module__switchInput___kYDSD:disabled {
  cursor: not-allowed;
}

.styles-module__switchThumb___4sCPH {
  border-radius: 50%;
  width: 12px;
  height: 12px;
  background-color: #fff;
  transition: transform 0.15s;
}
.styles-module__switchContainer___Ka-AB[data-checked] .styles-module__switchThumb___4sCPH {
  transform: translateX(8px);
}`,yh={switchContainer:"styles-module__switchContainer___Ka-AB",switchInput:"styles-module__switchInput___kYDSD",switchThumb:"styles-module__switchThumb___4sCPH"},bh=({className:e="",checked:t,onChange:n,...l})=>(0,Ts.jsxs)("div",{className:`${yh.switchContainer} ${e}`,"data-checked":t?"":void 0,children:[(0,Ts.jsx)("input",{className:yh.switchInput,checked:t,onChange:n,type:"checkbox",...l}),(0,Ts.jsx)("div",{className:yh.switchThumb})]}),S6=`.styles-module__checkboxContainer___joqZk {
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  border: 1px solid rgba(26, 26, 26, 0.2);
  border-radius: 4px;
  width: 14px;
  height: 14px;
  background-color: #fff;
  transition: background-color 0.2s ease;
}
[data-agentation-theme=dark] .styles-module__checkboxContainer___joqZk {
  border-color: rgba(255, 255, 255, 0.2);
  background-color: #252525;
}
.styles-module__checkboxContainer___joqZk:has(.styles-module__checkboxInput___ECzzO:checked) {
  background-color: #1a1a1a;
}
[data-agentation-theme=dark] .styles-module__checkboxContainer___joqZk:has(.styles-module__checkboxInput___ECzzO:checked) {
  background-color: #fff;
}

.styles-module__checkboxInput___ECzzO {
  position: absolute;
  z-index: 1;
  inset: -1px;
  border-radius: inherit;
  opacity: 0;
  cursor: pointer;
}

.styles-module__checkboxCheck___fUXpr {
  color: #fafafa;
}
[data-agentation-theme=dark] .styles-module__checkboxCheck___fUXpr {
  color: #1a1a1a;
}

.styles-module__checkboxCheckPath___cDyh8 {
  stroke-dasharray: 9.29px;
  stroke-dashoffset: 9.29px;
  color: #fafafa;
  transition: stroke-dashoffset 0.1s ease;
}
[data-agentation-theme=dark] .styles-module__checkboxCheckPath___cDyh8 {
  color: #1a1a1a;
}
.styles-module__checkboxContainer___joqZk[data-checked] .styles-module__checkboxCheckPath___cDyh8 {
  transition-duration: 0.2s;
  stroke-dashoffset: 0;
}`,Uu={checkboxContainer:"styles-module__checkboxContainer___joqZk",checkboxInput:"styles-module__checkboxInput___ECzzO",checkboxCheck:"styles-module__checkboxCheck___fUXpr",checkboxCheckPath:"styles-module__checkboxCheckPath___cDyh8"},C6=({className:e="",checked:t,onChange:n,...l})=>(0,Vi.jsxs)("div",{className:`${Uu.checkboxContainer} ${e}`,"data-checked":t?"":void 0,children:[(0,Vi.jsx)("input",{className:Uu.checkboxInput,type:"checkbox",checked:t,onChange:n,...l}),(0,Vi.jsx)("svg",{className:Uu.checkboxCheck,width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",children:(0,Vi.jsx)("path",{className:Uu.checkboxCheckPath,d:"M3.94 7L6.13 9.19L10.5 4.81",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})})]}),M6=`.styles-module__container___w8eAF {
  display: flex;
  align-items: center;
  height: 24px;
}

.styles-module__label___J5mxE {
  padding-inline: 8px 2px;
  line-height: 20px;
  font-size: 13px;
  letter-spacing: -0.15px;
  color: rgba(26, 26, 26, 0.5);
  -webkit-user-select: none;
  user-select: none;
  cursor: pointer;
}
[data-agentation-theme=dark] .styles-module__label___J5mxE {
  color: rgba(255, 255, 255, 0.5);
}`,Py={container:"styles-module__container___w8eAF",label:"styles-module__label___J5mxE"},e5=({className:e="",label:t,tooltip:n,checked:l,onChange:o,...a})=>{let i=(0,R5.useId)();return(0,Fi.jsxs)("div",{className:`${Py.container} ${e}`,...a,children:[(0,Fi.jsx)(C6,{id:i,onChange:o,checked:l}),(0,Fi.jsx)("label",{className:Py.label,htmlFor:i,children:t}),n&&(0,Fi.jsx)(Ua,{content:n})]})},E6=`@keyframes styles-module__cycleTextIn___VBNTi {
  0% {
    opacity: 0;
    transform: translateY(-6px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}
@keyframes styles-module__scaleIn___QpQ8E {
  from {
    opacity: 0;
    transform: scale(0.85);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}
@keyframes styles-module__mcpPulse___5Q3Jj {
  0% {
    box-shadow: 0 0 0 0 color-mix(in srgb, var(--agentation-color-green) 50%, transparent);
  }
  70% {
    box-shadow: 0 0 0 6px color-mix(in srgb, var(--agentation-color-green) 0%, transparent);
  }
  100% {
    box-shadow: 0 0 0 0 color-mix(in srgb, var(--agentation-color-green) 0%, transparent);
  }
}
@keyframes styles-module__mcpPulseError___VHxhx {
  0% {
    box-shadow: 0 0 0 0 color-mix(in srgb, var(--agentation-color-red) 50%, transparent);
  }
  70% {
    box-shadow: 0 0 0 6px color-mix(in srgb, var(--agentation-color-red) 0%, transparent);
  }
  100% {
    box-shadow: 0 0 0 0 color-mix(in srgb, var(--agentation-color-red) 0%, transparent);
  }
}
@keyframes styles-module__themeIconIn___qUWMV {
  0% {
    opacity: 0;
    transform: scale(0.8) rotate(-30deg);
  }
  100% {
    opacity: 1;
    transform: scale(1) rotate(0deg);
  }
}
.styles-module__settingsPanel___qNkn- :where(button, a, input, select, textarea):focus-visible {
  outline: 2px solid var(--agentation-color-accent);
  outline-offset: 2px;
}
.styles-module__settingsPanel___qNkn- {
  position: absolute;
  right: 5px;
  bottom: calc(100% + 0.5rem);
  z-index: 1;
  overflow: hidden;
  background: #1c1c1c;
  border-radius: 16px;
  padding: 12px 0;
  width: 253px;
  max-width: calc(100vw - 20px);
  cursor: default;
  opacity: 1;
  box-shadow: 0 1px 8px rgba(0, 0, 0, 0.25), 0 0 0 1px rgba(0, 0, 0, 0.04);
  transition: background-color 0.25s ease, box-shadow 0.25s ease;
}
.styles-module__settingsPanel___qNkn-::before, .styles-module__settingsPanel___qNkn-::after {
  content: "";
  position: absolute;
  top: 0;
  bottom: 0;
  width: 16px;
  z-index: 2;
  pointer-events: none;
}
.styles-module__settingsPanel___qNkn-::before {
  left: 0;
  background: linear-gradient(to right, #1c1c1c 0%, transparent 100%);
}
.styles-module__settingsPanel___qNkn-::after {
  right: 0;
  background: linear-gradient(to left, #1c1c1c 0%, transparent 100%);
}
.styles-module__settingsPanel___qNkn- .styles-module__settingsHeader___Fn1DP,
.styles-module__settingsPanel___qNkn- .styles-module__settingsBrand___OoKlM,
.styles-module__settingsPanel___qNkn- .styles-module__settingsVersion___rXmL9,
.styles-module__settingsPanel___qNkn- .styles-module__settingsSection___n5V-4,
.styles-module__settingsPanel___qNkn- .styles-module__settingsLabel___VCVOQ,
.styles-module__settingsPanel___qNkn- .styles-module__cycleButton___XMBx3,
.styles-module__settingsPanel___qNkn- .styles-module__cycleDot___zgSXY,
.styles-module__settingsPanel___qNkn- .styles-module__dropdownButton___mKHe8,
.styles-module__settingsPanel___qNkn- .styles-module__sliderLabel___6K5v1,
.styles-module__settingsPanel___qNkn- .styles-module__slider___v5z-c,
.styles-module__settingsPanel___qNkn- .styles-module__themeToggle___3imlT {
  transition: background-color 0.25s ease, color 0.25s ease, border-color 0.25s ease;
}
.styles-module__settingsPanel___qNkn- {
  opacity: 0;
  transform: translateY(var(--panel-offset-y, 4px)) scale(0.98);
  transform-origin: var(--panel-origin, bottom right);
  filter: blur(2px);
  pointer-events: none;
  visibility: hidden;
  transition: opacity 120ms cubic-bezier(0.25, 0.46, 0.45, 0.94), transform 120ms cubic-bezier(0.25, 0.46, 0.45, 0.94), filter 120ms cubic-bezier(0.25, 0.46, 0.45, 0.94);
}
.styles-module__settingsPanel___qNkn-[data-panel-present=true] {
  visibility: visible;
}
.styles-module__settingsPanel___qNkn-[data-panel-open=true] {
  opacity: 1;
  transform: translateY(0) scale(1);
  filter: blur(0);
  pointer-events: auto;
  transition-duration: 160ms;
}
@media (prefers-reduced-motion: reduce) {
  .styles-module__settingsPanel___qNkn- {
    transition: none;
    transform: none;
    filter: none;
  }
}
.styles-module__settingsPanel___qNkn-.styles-module__below___Vpv-k {
  --panel-offset-y: -4px;
  --panel-origin: top right;
}
[data-agentation-theme=dark] .styles-module__settingsPanel___qNkn- {
  background: #1a1a1a;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3), 0 0 0 1px rgba(255, 255, 255, 0.08);
}
[data-agentation-theme=dark] .styles-module__settingsPanel___qNkn- .styles-module__settingsLabel___VCVOQ {
  color: rgba(255, 255, 255, 0.6);
}
[data-agentation-theme=dark] .styles-module__settingsPanel___qNkn- .styles-module__settingsOption___JoyH- {
  color: rgba(255, 255, 255, 0.85);
}
[data-agentation-theme=dark] .styles-module__settingsPanel___qNkn- .styles-module__settingsOption___JoyH-:hover {
  background: rgba(255, 255, 255, 0.1);
}
[data-agentation-theme=dark] .styles-module__settingsPanel___qNkn- .styles-module__settingsOption___JoyH-.styles-module__selected___k1-Vq {
  background: rgba(255, 255, 255, 0.15);
  color: #fff;
}

.styles-module__settingsPanelContainer___5it-H {
  overflow: visible;
  position: relative;
  display: flex;
  padding: 0 16px;
}

.styles-module__settingsPage___BMn-3 {
  min-width: 100%;
  flex-basis: 0;
  flex-shrink: 0;
  transition: transform 0.2s ease, opacity 0.2s ease;
  transition-delay: 0s;
  opacity: 1;
}

.styles-module__settingsPage___BMn-3.styles-module__slideLeft___qUvW4 {
  transform: translateX(-24px);
  opacity: 0;
  pointer-events: none;
}

.styles-module__automationsPage___N7By0 {
  position: absolute;
  top: 0;
  left: 24px;
  width: 100%;
  height: 100%;
  padding: 0 16px 4px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  transition: transform 0.2s ease, opacity 0.2s ease;
  opacity: 0;
  pointer-events: none;
}

.styles-module__automationsPage___N7By0.styles-module__slideIn___uXDSu {
  transform: translateX(-24px);
  opacity: 1;
  pointer-events: auto;
}

.styles-module__settingsHeader___Fn1DP {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 24px;
}

.styles-module__settingsBrand___OoKlM {
  display: flex;
  align-items: center;
  font-size: 0.8125rem;
  font-weight: 500;
  letter-spacing: -0.0094em;
  color: #bbb;
  text-decoration: none;
}

.styles-module__settingsVersion___rXmL9 {
  font-size: 11px;
  font-weight: 400;
  color: rgba(255, 255, 255, 0.4);
  margin-left: 6px;
  letter-spacing: -0.0094em;
}

.styles-module__themeToggle___3imlT {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 22px;
  height: 22px;
  margin-left: auto;
  border: none;
  border-radius: 6px;
  background: transparent;
  color: rgba(255, 255, 255, 0.4);
  transition: background-color 0.15s ease, color 0.15s ease;
  cursor: pointer;
}
.styles-module__themeToggle___3imlT:hover {
  background: rgba(255, 255, 255, 0.1);
  color: rgba(255, 255, 255, 0.8);
}
[data-agentation-theme=light] .styles-module__themeToggle___3imlT {
  color: rgba(0, 0, 0, 0.4);
}
[data-agentation-theme=light] .styles-module__themeToggle___3imlT:hover {
  background: rgba(0, 0, 0, 0.06);
  color: rgba(0, 0, 0, 0.7);
}

.styles-module__themeIconWrapper___pyaYa {
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  width: 20px;
  height: 20px;
}

.styles-module__themeIcon___w7lAm {
  display: flex;
  align-items: center;
  justify-content: center;
  animation: styles-module__themeIconIn___qUWMV 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.styles-module__settingsSectionGrow___eZTRw {
  flex: 1;
  display: flex;
  flex-direction: column;
}

.styles-module__settingsRow___y-tDE {
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: 24px;
}
.styles-module__settingsRow___y-tDE.styles-module__settingsRowMarginTop___uLpGb {
  margin-top: 8px;
}

.styles-module__settingsRowDisabled___ydl3Q .styles-module__settingsLabel___VCVOQ {
  color: rgba(255, 255, 255, 0.2);
}
[data-agentation-theme=light] .styles-module__settingsRowDisabled___ydl3Q .styles-module__settingsLabel___VCVOQ {
  color: rgba(0, 0, 0, 0.2);
}

.styles-module__settingsLabel___VCVOQ {
  display: flex;
  align-items: center;
  column-gap: 2px;
  line-height: 20px;
  font-size: 13px;
  font-weight: 400;
  letter-spacing: -0.15px;
  color: rgba(255, 255, 255, 0.5);
}
[data-agentation-theme=light] .styles-module__settingsLabel___VCVOQ {
  color: rgba(0, 0, 0, 0.5);
}

.styles-module__cycleButton___XMBx3 {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0;
  border: none;
  background: transparent;
  font-size: 0.8125rem;
  font-weight: 500;
  color: #fff;
  cursor: pointer;
  letter-spacing: -0.0094em;
}
[data-agentation-theme=light] .styles-module__cycleButton___XMBx3 {
  color: rgba(0, 0, 0, 0.85);
}
.styles-module__cycleButton___XMBx3:disabled {
  opacity: 0.35;
  cursor: not-allowed;
}

.styles-module__cycleButtonText___mbbnD {
  display: inline-block;
  animation: styles-module__cycleTextIn___VBNTi 0.2s ease-out;
}

.styles-module__cycleDots___ehp6i {
  display: flex;
  flex-direction: column;
  gap: 2px;
}

.styles-module__cycleDot___zgSXY {
  width: 3px;
  height: 3px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.3);
  transform: scale(0.667);
  transition: background-color 0.25s ease-out, transform 0.25s ease-out;
}
.styles-module__cycleDot___zgSXY.styles-module__active___dpAhM {
  background: #fff;
  transform: scale(1);
}
[data-agentation-theme=light] .styles-module__cycleDot___zgSXY {
  background: rgba(0, 0, 0, 0.2);
}
[data-agentation-theme=light] .styles-module__cycleDot___zgSXY.styles-module__active___dpAhM {
  background: rgba(0, 0, 0, 0.7);
}

.styles-module__colorOptions___pbxZx {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 6px;
  height: 26px;
}

.styles-module__colorOption___Co955 {
  padding: 0;
  position: relative;
  border-radius: 50%;
  width: 20px;
  height: 20px;
  background-color: #fff;
  cursor: pointer;
}
[data-agentation-theme=dark] .styles-module__colorOption___Co955 {
  background-color: #1a1a1a;
}
.styles-module__colorOption___Co955::before, .styles-module__colorOption___Co955::after {
  content: "";
  position: absolute;
  inset: 0;
  border-radius: 50%;
  background-color: var(--swatch);
  transition: opacity 0.2s, transform 0.2s;
}
@supports (color: color(display-p3 0 0 0)) {
  .styles-module__colorOption___Co955::before, .styles-module__colorOption___Co955::after {
    --color: var(--swatch-p3);
  }
}
.styles-module__colorOption___Co955::after {
  z-index: -1;
  transform: scale(1.2);
  opacity: 0;
}
.styles-module__colorOption___Co955.styles-module__selected___k1-Vq::before {
  transform: scale(0.8);
}
.styles-module__colorOption___Co955.styles-module__selected___k1-Vq::after {
  opacity: 1;
}

.styles-module__settingsNavLink___uYIwM {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 24px;
  padding: 0;
  border: none;
  background: transparent;
  font-family: inherit;
  line-height: 20px;
  font-size: 13px;
  font-weight: 400;
  color: rgba(255, 255, 255, 0.5);
  transition: color 0.15s ease;
  cursor: pointer;
}
.styles-module__settingsNavLink___uYIwM:hover {
  color: rgba(255, 255, 255, 0.9);
}
.styles-module__settingsNavLink___uYIwM svg {
  color: rgba(255, 255, 255, 0.4);
  transition: color 0.15s ease;
}
.styles-module__settingsNavLink___uYIwM:hover svg {
  color: #fff;
}
[data-agentation-theme=light] .styles-module__settingsNavLink___uYIwM {
  color: rgba(0, 0, 0, 0.5);
}
[data-agentation-theme=light] .styles-module__settingsNavLink___uYIwM:hover {
  color: rgba(0, 0, 0, 0.8);
}
[data-agentation-theme=light] .styles-module__settingsNavLink___uYIwM svg {
  color: rgba(0, 0, 0, 0.25);
}
[data-agentation-theme=light] .styles-module__settingsNavLink___uYIwM:hover svg {
  color: rgba(0, 0, 0, 0.8);
}

.styles-module__settingsNavLinkRight___XBUzC {
  display: flex;
  align-items: center;
  gap: 6px;
}

.styles-module__settingsBackButton___fflll {
  display: flex;
  align-items: center;
  gap: 4px;
  height: 24px;
  border: none;
  background: transparent;
  font-family: inherit;
  line-height: 20px;
  font-size: 13px;
  font-weight: 500;
  letter-spacing: -0.15px;
  color: #fff;
  cursor: pointer;
  transition: transform 0.12s cubic-bezier(0.32, 0.72, 0, 1);
}
.styles-module__settingsBackButton___fflll svg {
  opacity: 0.4;
  flex-shrink: 0;
  transition: opacity 0.15s ease, transform 0.18s cubic-bezier(0.32, 0.72, 0, 1);
}
.styles-module__settingsBackButton___fflll:hover svg {
  opacity: 1;
}
[data-agentation-theme=light] .styles-module__settingsBackButton___fflll {
  color: rgba(0, 0, 0, 0.85);
  border-bottom-color: rgba(0, 0, 0, 0.08);
}

.styles-module__automationHeader___Avra9 {
  display: flex;
  align-items: center;
  gap: 0.125rem;
  font-size: 0.8125rem;
  font-weight: 400;
  color: #fff;
}
[data-agentation-theme=light] .styles-module__automationHeader___Avra9 {
  color: rgba(0, 0, 0, 0.85);
}

.styles-module__automationDescription___vFTmJ {
  font-size: 0.6875rem;
  font-weight: 300;
  color: rgba(255, 255, 255, 0.5);
  margin-top: 2px;
  line-height: 14px;
}
[data-agentation-theme=light] .styles-module__automationDescription___vFTmJ {
  color: rgba(0, 0, 0, 0.5);
}

.styles-module__learnMoreLink___cG7OI {
  color: rgba(255, 255, 255, 0.8);
  text-decoration-line: underline;
  text-decoration-style: dotted;
  text-decoration-color: rgba(255, 255, 255, 0.2);
  text-underline-offset: 2px;
  transition: color 0.15s ease;
}
.styles-module__learnMoreLink___cG7OI:hover {
  color: #fff;
}
[data-agentation-theme=light] .styles-module__learnMoreLink___cG7OI {
  color: rgba(0, 0, 0, 0.6);
  text-decoration-color: rgba(0, 0, 0, 0.2);
}
[data-agentation-theme=light] .styles-module__learnMoreLink___cG7OI:hover {
  color: rgba(0, 0, 0, 0.85);
}

.styles-module__autoSendContainer___VpkXk {
  display: flex;
  align-items: center;
}

.styles-module__autoSendLabel___ngNdC {
  padding-inline-end: 8px;
  font-size: 11px;
  font-weight: 400;
  color: rgba(255, 255, 255, 0.4);
  transition: color 0.15s, opacity 0.15s;
  cursor: pointer;
}
.styles-module__autoSendLabel___ngNdC.styles-module__active___dpAhM {
  color: #66b8ff;
  color: color(display-p3 0.4 0.72 1);
}
[data-agentation-theme=light] .styles-module__autoSendLabel___ngNdC {
  color: rgba(0, 0, 0, 0.4);
}
[data-agentation-theme=light] .styles-module__autoSendLabel___ngNdC.styles-module__active___dpAhM {
  color: var(--agentation-color-blue);
}
.styles-module__autoSendLabel___ngNdC.styles-module__disabled___9AZYS {
  opacity: 0.3;
  cursor: not-allowed;
}

.styles-module__mcpStatusDot___8AMxP {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  flex-shrink: 0;
}
.styles-module__mcpStatusDot___8AMxP.styles-module__connecting___QEO1r {
  background-color: var(--agentation-color-yellow);
  animation: styles-module__mcpPulse___5Q3Jj 1.5s infinite;
}
.styles-module__mcpStatusDot___8AMxP.styles-module__connected___WyFkx {
  background-color: var(--agentation-color-green);
  animation: styles-module__mcpPulse___5Q3Jj 2.5s ease-in-out infinite;
}
.styles-module__mcpStatusDot___8AMxP.styles-module__disconnected___mvmvQ {
  background-color: var(--agentation-color-red);
  animation: styles-module__mcpPulseError___VHxhx 2s infinite;
}

.styles-module__mcpNavIndicator___auBHI {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  flex-shrink: 0;
}
.styles-module__mcpNavIndicator___auBHI.styles-module__connected___WyFkx {
  background-color: var(--agentation-color-green);
  animation: styles-module__mcpPulse___5Q3Jj 2.5s ease-in-out infinite;
}
.styles-module__mcpNavIndicator___auBHI.styles-module__connecting___QEO1r {
  background-color: var(--agentation-color-yellow);
  animation: styles-module__mcpPulse___5Q3Jj 1.5s ease-in-out infinite;
}

.styles-module__webhookUrlInput___WDDDC {
  display: block;
  width: 100%;
  flex: 1;
  min-height: 60px;
  box-sizing: border-box;
  margin-top: 11px;
  padding: 8px 10px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 6px;
  background: rgba(255, 255, 255, 0.03);
  font-family: inherit;
  font-size: 0.75rem;
  font-weight: 400;
  color: #fff;
  outline: none;
  resize: none;
  user-select: text;
  transition: border-color 0.15s ease, background-color 0.15s ease, box-shadow 0.15s ease;
}
.styles-module__webhookUrlInput___WDDDC::placeholder {
  color: rgba(255, 255, 255, 0.3);
}
.styles-module__webhookUrlInput___WDDDC:focus {
  border-color: rgba(255, 255, 255, 0.3);
  background: rgba(255, 255, 255, 0.08);
}
[data-agentation-theme=light] .styles-module__webhookUrlInput___WDDDC {
  border-color: rgba(0, 0, 0, 0.1);
  background: rgba(0, 0, 0, 0.03);
  color: rgba(0, 0, 0, 0.85);
}
[data-agentation-theme=light] .styles-module__webhookUrlInput___WDDDC::placeholder {
  color: rgba(0, 0, 0, 0.3);
}
[data-agentation-theme=light] .styles-module__webhookUrlInput___WDDDC:focus {
  border-color: rgba(0, 0, 0, 0.25);
  background: rgba(0, 0, 0, 0.05);
}

[data-agentation-theme=light] .styles-module__settingsPanel___qNkn- {
  background: #fff;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08), 0 4px 16px rgba(0, 0, 0, 0.06), 0 0 0 1px rgba(0, 0, 0, 0.04);
}
[data-agentation-theme=light] .styles-module__settingsPanel___qNkn-::before {
  background: linear-gradient(to right, #fff 0%, transparent 100%);
}
[data-agentation-theme=light] .styles-module__settingsPanel___qNkn-::after {
  background: linear-gradient(to left, #fff 0%, transparent 100%);
}
[data-agentation-theme=light] .styles-module__settingsPanel___qNkn- .styles-module__settingsHeader___Fn1DP {
  border-bottom-color: rgba(0, 0, 0, 0.08);
}
[data-agentation-theme=light] .styles-module__settingsPanel___qNkn- .styles-module__settingsBrand___OoKlM {
  color: #333;
}
[data-agentation-theme=light] .styles-module__settingsPanel___qNkn- .styles-module__settingsVersion___rXmL9 {
  color: rgba(0, 0, 0, 0.4);
}
[data-agentation-theme=light] .styles-module__settingsPanel___qNkn- .styles-module__settingsSection___n5V-4 {
  border-top-color: rgba(0, 0, 0, 0.08);
}
[data-agentation-theme=light] .styles-module__settingsPanel___qNkn- .styles-module__settingsLabel___VCVOQ {
  color: rgba(0, 0, 0, 0.5);
}
[data-agentation-theme=light] .styles-module__settingsPanel___qNkn- .styles-module__cycleButton___XMBx3 {
  color: rgba(0, 0, 0, 0.85);
}
[data-agentation-theme=light] .styles-module__settingsPanel___qNkn- .styles-module__cycleDot___zgSXY {
  background: rgba(0, 0, 0, 0.2);
}
[data-agentation-theme=light] .styles-module__settingsPanel___qNkn- .styles-module__cycleDot___zgSXY.styles-module__active___dpAhM {
  background: rgba(0, 0, 0, 0.7);
}
[data-agentation-theme=light] .styles-module__settingsPanel___qNkn- .styles-module__dropdownButton___mKHe8 {
  color: rgba(0, 0, 0, 0.85);
}
[data-agentation-theme=light] .styles-module__settingsPanel___qNkn- .styles-module__dropdownButton___mKHe8:hover {
  background: rgba(0, 0, 0, 0.05);
}

.styles-module__checkboxField___ZrSqv:not(:first-child) {
  margin-top: 8px;
}

.styles-module__divider___h6Yux {
  margin-block: 8px;
  width: 100%;
  height: 1px;
  background-color: rgba(26, 26, 26, 0.07);
}
[data-agentation-theme=dark] .styles-module__divider___h6Yux {
  background-color: rgba(255, 255, 255, 0.07);
}`,ie={settingsPanel:"styles-module__settingsPanel___qNkn-",settingsHeader:"styles-module__settingsHeader___Fn1DP",settingsBrand:"styles-module__settingsBrand___OoKlM",settingsVersion:"styles-module__settingsVersion___rXmL9",settingsSection:"styles-module__settingsSection___n5V-4",settingsLabel:"styles-module__settingsLabel___VCVOQ",cycleButton:"styles-module__cycleButton___XMBx3",cycleDot:"styles-module__cycleDot___zgSXY",dropdownButton:"styles-module__dropdownButton___mKHe8",sliderLabel:"styles-module__sliderLabel___6K5v1",slider:"styles-module__slider___v5z-c",themeToggle:"styles-module__themeToggle___3imlT",below:"styles-module__below___Vpv-k",settingsOption:"styles-module__settingsOption___JoyH-",selected:"styles-module__selected___k1-Vq",settingsPanelContainer:"styles-module__settingsPanelContainer___5it-H",settingsPage:"styles-module__settingsPage___BMn-3",slideLeft:"styles-module__slideLeft___qUvW4",automationsPage:"styles-module__automationsPage___N7By0",slideIn:"styles-module__slideIn___uXDSu",themeIconWrapper:"styles-module__themeIconWrapper___pyaYa",themeIcon:"styles-module__themeIcon___w7lAm",themeIconIn:"styles-module__themeIconIn___qUWMV",settingsSectionGrow:"styles-module__settingsSectionGrow___eZTRw",settingsRow:"styles-module__settingsRow___y-tDE",settingsRowMarginTop:"styles-module__settingsRowMarginTop___uLpGb",settingsRowDisabled:"styles-module__settingsRowDisabled___ydl3Q",cycleButtonText:"styles-module__cycleButtonText___mbbnD",cycleTextIn:"styles-module__cycleTextIn___VBNTi",cycleDots:"styles-module__cycleDots___ehp6i",active:"styles-module__active___dpAhM",colorOptions:"styles-module__colorOptions___pbxZx",colorOption:"styles-module__colorOption___Co955",settingsNavLink:"styles-module__settingsNavLink___uYIwM",settingsNavLinkRight:"styles-module__settingsNavLinkRight___XBUzC",settingsBackButton:"styles-module__settingsBackButton___fflll",automationHeader:"styles-module__automationHeader___Avra9",automationDescription:"styles-module__automationDescription___vFTmJ",learnMoreLink:"styles-module__learnMoreLink___cG7OI",autoSendContainer:"styles-module__autoSendContainer___VpkXk",autoSendLabel:"styles-module__autoSendLabel___ngNdC",disabled:"styles-module__disabled___9AZYS",mcpStatusDot:"styles-module__mcpStatusDot___8AMxP",connecting:"styles-module__connecting___QEO1r",mcpPulse:"styles-module__mcpPulse___5Q3Jj",connected:"styles-module__connected___WyFkx",disconnected:"styles-module__disconnected___mvmvQ",mcpPulseError:"styles-module__mcpPulseError___VHxhx",mcpNavIndicator:"styles-module__mcpNavIndicator___auBHI",webhookUrlInput:"styles-module__webhookUrlInput___WDDDC",checkboxField:"styles-module__checkboxField___ZrSqv",divider:"styles-module__divider___h6Yux",scaleIn:"styles-module__scaleIn___QpQ8E"},T6=(0,na.memo)(function({settings:t,onSettingsChange:n,isDarkMode:l,onToggleTheme:o,isDevMode:a,connectionStatus:i,endpoint:r,onExited:s,isOpen:d,toolbarNearBottom:h,settingsPage:_,onSettingsPageChange:m,onHideToolbar:v}){let{ref:k}=x5(d,{keepMounted:!0,onExited:s}),A=(0,na.useRef)(null),M=(0,na.useRef)(null),p=(0,na.useRef)(!1);(0,na.useLayoutEffect)(()=>{!d||!p.current||(p.current=!1,(_==="automations"?M:A).current?.focus())},[d,_]);let x=l?"Switch to light mode":"Switch to dark mode";return(0,le.jsx)("div",{className:`${ie.settingsPanel} ${h?ie.below:""}`,style:h?{bottom:"auto",top:"calc(100% + 0.5rem)"}:void 0,"data-agentation-settings-panel":!0,ref:g=>{k.current=g,g?.toggleAttribute("inert",!d)},role:"group","aria-label":"Feedback settings","aria-hidden":!d,children:(0,le.jsxs)("div",{className:ie.settingsPanelContainer,children:[(0,le.jsxs)("div",{className:`${ie.settingsPage} ${_==="automations"?ie.slideLeft:""}`,ref:g=>{g?.toggleAttribute("inert",_!=="main")},"aria-hidden":_!=="main",children:[(0,le.jsxs)("div",{className:ie.settingsHeader,children:[(0,le.jsx)("a",{className:ie.settingsBrand,href:"https://agentation.com",target:"_blank",rel:"noopener noreferrer","aria-label":"Agentation",children:"Agentation"}),(0,le.jsxs)("p",{className:ie.settingsVersion,children:["v","3.1.2"]}),(0,le.jsx)("button",{className:ie.themeToggle,onClick:o,title:x,"aria-label":x,children:(0,le.jsx)("span",{className:ie.themeIconWrapper,children:(0,le.jsx)("span",{className:ie.themeIcon,children:l?(0,le.jsx)(jv,{size:20}):(0,le.jsx)(Xv,{size:20})},l?"sun":"moon")})})]}),(0,le.jsx)("div",{className:ie.divider}),(0,le.jsxs)("div",{className:ie.settingsSection,children:[(0,le.jsxs)("div",{className:ie.settingsRow,children:[(0,le.jsxs)("div",{className:ie.settingsLabel,children:["Output Detail",(0,le.jsx)(Ua,{content:"Controls how much detail is included in the copied output"})]}),(0,le.jsxs)("button",{className:ie.cycleButton,onClick:()=>{let S=(vs.findIndex(W=>W.value===t.outputDetail)+1)%vs.length;n({outputDetail:vs[S].value})},children:[(0,le.jsx)("span",{className:ie.cycleButtonText,children:vs.find(g=>g.value===t.outputDetail)?.label},t.outputDetail),(0,le.jsx)("span",{className:ie.cycleDots,children:vs.map(g=>(0,le.jsx)("span",{className:`${ie.cycleDot} ${t.outputDetail===g.value?ie.active:""}`},g.value))})]})]}),(0,le.jsxs)("div",{className:`${ie.settingsRow} ${ie.settingsRowMarginTop} ${a?"":ie.settingsRowDisabled}`,children:[(0,le.jsxs)("div",{className:ie.settingsLabel,children:["React Components",(0,le.jsx)(Ua,{content:a?"Include React component names in annotations":"Disabled \u2014 production builds minify component names, making detection unreliable. Use in development mode."})]}),(0,le.jsx)(bh,{"aria-label":"React Components",checked:a&&t.reactEnabled,onChange:g=>n({reactEnabled:g.target.checked}),disabled:!a})]}),(0,le.jsxs)("div",{className:`${ie.settingsRow} ${ie.settingsRowMarginTop}`,children:[(0,le.jsxs)("div",{className:ie.settingsLabel,children:["Hide Until Restart",(0,le.jsx)(Ua,{content:"Hides the toolbar until you open a new tab"})]}),(0,le.jsx)(bh,{"aria-label":"Hide Until Restart",checked:!1,onChange:g=>{g.target.checked&&v()}})]})]}),(0,le.jsx)("div",{className:ie.divider}),(0,le.jsxs)("div",{className:ie.settingsSection,children:[(0,le.jsx)("div",{className:`${ie.settingsLabel} ${ie.settingsLabelMarker}`,children:"Marker Color"}),(0,le.jsx)("div",{className:ie.colorOptions,children:Cs.map(g=>(0,le.jsx)("button",{className:`${ie.colorOption} ${t.annotationColorId===g.id?ie.selected:""}`,style:{"--swatch":g.srgb,"--swatch-p3":g.p3},onClick:()=>n({annotationColorId:g.id}),title:g.label,"aria-label":g.label,type:"button"},g.id))})]}),(0,le.jsx)("div",{className:ie.divider}),(0,le.jsxs)("div",{className:ie.settingsSection,children:[(0,le.jsx)(e5,{className:"checkbox-field",label:"Clear on copy/send",checked:t.autoClearAfterCopy,onChange:g=>n({autoClearAfterCopy:g.target.checked}),tooltip:"Automatically clear annotations after copying"}),(0,le.jsx)(e5,{className:ie.checkboxField,label:"Block page interactions",checked:t.blockInteractions,onChange:g=>n({blockInteractions:g.target.checked})})]}),(0,le.jsx)("div",{className:ie.divider}),(0,le.jsxs)("button",{className:ie.settingsNavLink,ref:A,onClick:g=>{p.current=g.detail===0,g.currentTarget.blur(),m("automations")},children:[(0,le.jsx)("span",{children:"Manage MCP & Webhooks"}),(0,le.jsxs)("span",{className:ie.settingsNavLinkRight,children:[r&&i!=="disconnected"&&(0,le.jsx)("span",{className:`${ie.mcpNavIndicator} ${ie[i]}`}),(0,le.jsx)("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,le.jsx)("path",{d:"M7.5 12.5L12 8L7.5 3.5",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})})]})]})]}),(0,le.jsxs)("div",{className:`${ie.settingsPage} ${ie.automationsPage} ${_==="automations"?ie.slideIn:""}`,ref:g=>{g?.toggleAttribute("inert",_!=="automations")},"aria-hidden":_!=="automations",children:[(0,le.jsxs)("button",{className:ie.settingsBackButton,ref:M,"aria-label":"Back to settings",onClick:g=>{p.current=g.detail===0,g.currentTarget.blur(),m("main")},children:[(0,le.jsx)(Iv,{size:16}),(0,le.jsx)("span",{children:"Manage MCP & Webhooks"})]}),(0,le.jsx)("div",{className:ie.divider}),(0,le.jsxs)("div",{className:ie.settingsSection,children:[(0,le.jsxs)("div",{className:ie.settingsRow,children:[(0,le.jsxs)("span",{className:ie.automationHeader,children:["MCP Connection",(0,le.jsx)(Ua,{content:"Connect via Model Context Protocol to let AI agents like Claude Code receive annotations in real-time."})]}),r&&(0,le.jsx)("div",{className:`${ie.mcpStatusDot} ${ie[i]}`,title:i==="connected"?"Connected":i==="connecting"?"Connecting...":"Disconnected"})]}),(0,le.jsxs)("p",{className:ie.automationDescription,style:{paddingBottom:6},children:["MCP connection allows agents to receive and act on annotations."," ",(0,le.jsx)("a",{href:"https://agentation.com/mcp",target:"_blank",rel:"noopener noreferrer",className:ie.learnMoreLink,children:"Learn more"})]})]}),(0,le.jsx)("div",{className:ie.divider}),(0,le.jsxs)("div",{className:`${ie.settingsSection} ${ie.settingsSectionGrow}`,children:[(0,le.jsxs)("div",{className:ie.settingsRow,children:[(0,le.jsxs)("span",{className:ie.automationHeader,children:["Webhooks",(0,le.jsx)(Ua,{content:"Send annotation data to any URL endpoint when annotations change. Useful for custom integrations."})]}),(0,le.jsxs)("div",{className:ie.autoSendContainer,children:[(0,le.jsx)("label",{htmlFor:"agentation-auto-send",className:`${ie.autoSendLabel} ${t.webhooksEnabled?ie.active:""} ${t.webhookUrl?"":ie.disabled}`,children:"Auto-Send"}),(0,le.jsx)(bh,{id:"agentation-auto-send",checked:t.webhooksEnabled,onChange:g=>n({webhooksEnabled:g.target.checked}),disabled:!t.webhookUrl})]})]}),(0,le.jsx)("p",{className:ie.automationDescription,children:"The webhook URL will receive live annotation changes and annotation data."}),(0,le.jsx)("textarea",{className:ie.webhookUrlInput,placeholder:"Webhook URL","aria-label":"Webhook URL",value:t.webhookUrl,onKeyDown:g=>g.stopPropagation(),onChange:g=>n({webhookUrl:g.target.value})})]})]})]})})});function A6({x:e,y:t,elementName:n,reactComponents:l}){let o=(0,Zu.useRef)(null);return(0,Zu.useLayoutEffect)(()=>{let a=o.current;if(!a)return;let i=()=>{let r=a.offsetWidth,s=a.offsetHeight;a.style.left=`${Math.max(8,Math.min(e,window.innerWidth-r-8))}px`;let d=t-s-8;a.style.top=`${Math.max(8,Math.min(d,window.innerHeight-s-8))}px`};return i(),window.addEventListener("resize",i),()=>window.removeEventListener("resize",i)},[e,t,n,l]),(0,As.jsxs)("div",{ref:o,className:`${Y.hoverTooltip} ${Y.enter}`,children:[l&&(0,As.jsx)("div",{className:Y.hoverReactPath,children:l}),(0,As.jsx)("div",{className:Y.hoverElementName,children:n})]})}var N6=`@charset "UTF-8";
/* Reset box-model and set borders */
/* ============================================ */
*,
::before,
::after {
  border-width: 0;
  border-style: solid;
  box-sizing: border-box;
}

/* Document */
/* ============================================ */
/**
 * 1. Correct line height in all browsers.
 * 2. Prevent adjustments of font size after orientation changes in iOS.
 * 3. Remove gray overlay on links for iOS.
 * 4. Render kerning consistently in all browsers.
 * 5. Correct font smoothing for macOS.
 */
:host {
  /* Inherited properties cross the shadow boundary, so a host page's
     text-transform, letter-spacing or font would otherwise restyle the UI. */
  font: 400 16px/1.5 system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  font-variant: normal;
  color: initial;
  letter-spacing: normal;
  word-spacing: normal;
  text-transform: none;
  text-align: start;
  text-indent: 0;
  text-shadow: none;
  white-space: normal;
  direction: ltr;
  writing-mode: horizontal-tb;
  hyphens: manual;
  word-break: normal;
  overflow-wrap: normal;
  tab-size: 8;
  list-style: none;
  quotes: initial;
  caret-color: auto;
  user-select: auto;
  -webkit-text-fill-color: initial;
  -webkit-text-stroke: 0;
  text-rendering: auto;
  -webkit-text-size-adjust: 100%; /* 2 */
  -webkit-tap-highlight-color: transparent; /* 3 */
  font-feature-settings: "kern"; /* 4 */
  -webkit-font-feature-settings: "kern"; /* 5 */
  -moz-font-feature-settings: "kern"; /* 5 */
  -webkit-font-smoothing: antialiased; /* 5 */
  -moz-osx-font-smoothing: grayscale; /* 5 */
}

/* Vertical rhythm */
/* ============================================ */
p,
table,
blockquote,
address,
pre,
iframe,
form,
figure,
dl {
  margin: 0;
}

/* Headings */
/* ============================================ */
h1,
h2,
h3,
h4,
h5,
h6 {
  margin: 0;
  font-size: inherit;
  font-weight: inherit;
}

/* Lists (enumeration) */
/* ============================================ */
ul,
ol,
menu {
  list-style: none;
  margin: 0;
  padding: 0;
}

/* Lists (definition) */
/* ============================================ */
dd {
  margin-left: 0;
}

/* Grouping content */
/* ============================================ */
/**
 * 1. Add the correct box sizing in Firefox.
 * 2. Show the overflow in Edge and IE.
 */
hr {
  clear: both;
  margin: 0;
  border-top-width: 1px;
  height: 0; /* 1 */
  box-sizing: content-box; /* 1 */
  overflow: visible; /* 2 */
  color: inherit;
}

/**
 * 1. Correct the inheritance and scaling of font size in all browsers.
 * 2. Correct the odd \`em\` font sizing in all browsers.
 * 3. Wrap lines by default instead of overflow.
 */
pre {
  font-family: inherit; /* 1 */
  font-size: inherit; /* 2 */
  white-space: pre-line; /* 3 */
}

address {
  font-style: inherit;
}

/* Text-level semantics */
/* ============================================ */
/**
 * Remove the gray background on active links in IE 10.
 */
a {
  background-color: transparent;
  text-decoration: none;
  color: inherit;
}

/**
 * 1. Remove the bottom border in Chrome 57-
 * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.
 */
abbr[title] {
  border-bottom: none; /* 1 */
  text-decoration: none; /* 2 */
}

/**
 * Add the correct font weight in Chrome, Edge, and Safari.
 */
b,
strong {
  font-weight: bolder;
}

/**
 * 1. Correct the inheritance and scaling of font size in all browsers.
 * 2. Correct the odd \`em\` font sizing in all browsers.
 */
code,
kbd,
samp {
  font-family: "Menlo", "Monaco", "Consolas", "Courier New", monospace; /* 1 */
  font-size: inherit; /* 2 */
}

/**
 * Add the correct font size in all browsers.
 */
small {
  font-size: 80%;
}

/**
 * Prevent \`sub\` and \`sup\` elements from affecting the line height in all browsers.
 */
sub,
sup {
  position: relative;
  vertical-align: baseline;
  line-height: 0;
  font-size: 75%;
}

sub {
  bottom: -0.25em;
}

sup {
  top: -0.5em;
}

/* Replaced content */
/* ============================================ */
/**
 * Prevent vertical alignment issues.
 */
svg,
img,
embed,
object,
iframe {
  vertical-align: bottom;
}

/*
 * 1. Remove image default bottom space.
 * 2. Prevent image from overflowing the container.
 */
img {
  display: block;
  max-width: 100%;
}

/**
 * Prevent alignment issues on Safari.
 */
@supports (background: -webkit-named-image(i)) {
  svg {
    will-change: transform;
  }
}
/* Forms */
/* ============================================ */
/**
 * Reset form fields to make them styleable.
 * 1. Make form elements stylable across systems iOS especially.
 * 2. Inherit text-transform from parent.
 */
button,
input,
optgroup,
select,
textarea {
  -webkit-appearance: none; /* 1 */
  appearance: none;
  border-radius: 0;
  margin: 0;
  padding: 0;
  background: transparent;
  vertical-align: middle;
  text-align: inherit;
  text-transform: inherit; /* 2 */
  font: inherit;
  color: inherit;
}

/**
 * Correct cursors for clickable elements.
 */
button,
[type=button],
[type=reset],
[type=submit] {
  cursor: pointer;
}

button:disabled,
[type=button]:disabled,
[type=reset]:disabled,
[type=submit]:disabled {
  cursor: default;
}

/**
 * Clickable labels and selects.
 */
select,
label {
  cursor: pointer;
}

/**
 * Improve outlines for Firefox and unify style with input elements & buttons.
 */
:-moz-focusring {
  outline: auto;
}

select:disabled {
  opacity: inherit;
}

/**
 * 1. Remove padding.
 */
option {
  padding: 0; /* 1 */
}

/**
 * Reset to invisible
 */
fieldset {
  margin: 0;
  padding: 0;
  min-width: 0;
}

legend {
  display: contents;
  padding: 0;
}

/**
 * Add the correct vertical alignment in Chrome, Firefox, and Opera.
 */
progress {
  vertical-align: baseline;
}

/**
 * Remove the default vertical scrollbar in IE 10+.
 */
textarea {
  overflow: auto;
}

/**
 * Remove increment and decrement buttons in Chrome.
 */
[type=number]::-webkit-inner-spin-button,
[type=number]::-webkit-outer-spin-button {
  -webkit-appearance: none;
}

/**
 * Correct the outline style in Safari.
 */
[type=search] {
  outline-offset: -2px;
}

/**
 * Remove the inner padding in Chrome and Safari on macOS.
 */
[type=search]::-webkit-search-decoration {
  -webkit-appearance: none;
}

/*
 * Remove the \u2018X\u2019 from Chrome and Safari.
 */
[type=search]::-webkit-search-decoration,
[type=search]::-webkit-search-cancel-button,
[type=search]::-webkit-search-results-button,
[type=search]::-webkit-search-results-decoration {
  display: none;
}

/**
 * 1. Hide file input completely.
 * 2. Remove selected file text.
 * 3. Set cursor to pointer for all browsers.
 */
[type=file] {
  opacity: 0; /* 1 */
  font-size: 0; /* 2 */
  cursor: pointer; /* 3 */
}

/**
	* Fix appearance for Firefox
	*/
[type=number] {
  -moz-appearance: textfield;
}

/**
 * Set cursor to pointer for all browsers.
 */
[type=range] {
  cursor: pointer;
}

/**
 * Reset slider thumbs to make them styleable.
 */
[type=range]::-webkit-slider-thumb {
  -webkit-appearance: none;
  appearance: none;
}

[type=range]::-moz-range-thumb {
  -moz-appearance: none;
  appearance: none;
  border-width: 0;
  border-radius: 0;
  background-color: transparent;
}

/* Interactive */
/* ============================================ */
/*
 * Add the correct display in Edge, IE 10+, and Firefox.
 */
details {
  display: block;
}

/*
 * Add the correct display in all browsers.
 */
summary {
  display: list-item;
}

/*
 * Remove outline for editable content.
 */
[contenteditable]:focus {
  outline: auto;
}

/* Tables */
/* ============================================ */
/**
1. Correct table border color inheritance in all Chrome and Safari.
*/
table {
  border-color: inherit; /* 1 */
  border-collapse: collapse;
}

caption {
  text-align: left;
}

td,
th {
  vertical-align: top;
  padding: 0;
}

th {
  text-align: left;
  font-weight: inherit;
}

/* Misc */
/* ============================================ */
/*
 * Make placeholder style consistent across all browsers.
 */
::placeholder {
  color: #999;
  opacity: 1;
}

/*
 * Hide focus outline but keep it visible for Windows High Contrast Mode.
 */
:focus {
  outline-style: solid;
  outline-color: transparent;
}

/*
 * Hide input arrow when used with datalist.
 */
::-webkit-calendar-picker-indicator {
  display: none !important;
}`,D6=[N6,Vv,h5,S6,u4,Gv,Fu,w6,b6,M6,E6,k6].join(`
`);function Yu(e,t="filtered",n){let{name:l,path:o}=Gi(e,n);if(t==="off")return{name:l,elementName:l,path:o,reactComponents:null};let a=l6(e,{mode:t});return{name:a.path?`${a.path} ${l}`:l,elementName:l,path:o,reactComponents:a.path}}var t5=!1,xh={outputDetail:"standard",autoClearAfterCopy:!1,annotationColorId:"blue",blockInteractions:!0,reactEnabled:!0,markerClickBehavior:"edit",webhookUrl:"",webhooksEnabled:!0},n5=e=>{if(!e||!e.trim())return!1;try{let t=new URL(e.trim());return t.protocol==="http:"||t.protocol==="https:"}catch{return!1}},R6={compact:"off",standard:"filtered",detailed:"smart",forensic:"all"},ta=e=>e.metaKey||e.ctrlKey,Cs=[{id:"indigo",label:"Indigo",srgb:"#6155F5",p3:"color(display-p3 0.38 0.33 0.96)"},{id:"blue",label:"Blue",srgb:"#0088FF",p3:"color(display-p3 0.00 0.53 1.00)"},{id:"cyan",label:"Cyan",srgb:"#00C3D0",p3:"color(display-p3 0.00 0.76 0.82)"},{id:"green",label:"Green",srgb:"#34C759",p3:"color(display-p3 0.20 0.78 0.35)"},{id:"yellow",label:"Yellow",srgb:"#FFCC00",p3:"color(display-p3 1.00 0.80 0.00)"},{id:"orange",label:"Orange",srgb:"#FF8D28",p3:"color(display-p3 1.00 0.55 0.16)"},{id:"red",label:"Red",srgb:"#FF383C",p3:"color(display-p3 1.00 0.22 0.24)"}],L6=[...Cs.map(e=>`
    [data-agentation-accent="${e.id}"] {
      --agentation-color-accent: ${e.srgb};
    }
    @supports (color: color(display-p3 0 0 0)) {
      [data-agentation-accent="${e.id}"] {
        --agentation-color-accent: ${e.p3};
      }
    }
  `),`:host {
    ${Cs.map(e=>`--agentation-color-${e.id}: ${e.srgb};`).join(`
`)}
  }`,`@supports (color: color(display-p3 0 0 0)) {
    :host {
      ${Cs.map(e=>`--agentation-color-${e.id}: ${e.p3};`).join(`
`)}
    }
  }`].join("");function vh(e){let t=e;for(let l=Kn(t.ownerDocument);l;l=Kn(t.ownerDocument))t=l;let n=t;for(;n&&n!==document.body;){let o=window.getComputedStyle(n).position;if(o==="fixed"||o==="sticky")return!0;n=n.parentElement}return!1}function ws(e){return e.kind!=="placement"&&e.kind!=="rearrange"&&e.status!=="resolved"&&e.status!=="dismissed"}function ju(e){let t=Dh(e),n=t.found?t:m6(e);if(n.found&&n.source)return h6(n.source,"path")}function z5(e={}){let t=Ev(e.useHashLocation??!1),n=(0,C.useState)(!1),l=Nv(e.portalContainer);return l?(0,d5.createPortal)((0,L5.createElement)(z6,{...e,key:e.useHashLocation?t:void 0,pathname:t,activeState:n,portalHost:l}),l):null}function z6({pathname:e,activeState:t,portalHost:n,useHashLocation:l=!1,appName:o,enableKeyboardShortcuts:a=!0,identifyingAttributes:i=zh,copyFormat:r="markdown",onOpenSource:s,portalContainer:d,demoAnnotations:h,demoDelay:_=1e3,enableDemoMode:m=!1,onAnnotationAdd:v,onAnnotationDelete:k,onAnnotationUpdate:A,onAnnotationsClear:M,onCopy:p,onSubmit:x,copyToClipboard:g=!0,endpoint:S,sessionId:W,onSessionCreated:J,webhookUrl:z,className:K}){let[O,F]=t,[,re]=(0,C.useState)(0),[Z]=(0,C.useState)(()=>gv(document,()=>re(f=>f+1)));(0,C.useEffect)(()=>(Z.start(),()=>Z.stop()),[Z]);let _e=typeof r=="object"?r.attribute:void 0,oe=(0,C.useMemo)(()=>_e?[...i,_e]:i,[i,_e]),se=(0,C.useRef)(!0);(0,C.useLayoutEffect)(()=>(se.current=!0,()=>{se.current=!1}),[]);let he=(0,C.useCallback)(f=>l?Tv(JSON.stringify([S,e]),f):f(),[S,e,l]),Dt=(0,C.useRef)(new Map),Ue=(0,C.useRef)(new Set),tt=f=>ws(f)&&!Ue.current.has(f.id),Ye=async(...f)=>{let y=await Qy(...f),w=f[2],E=w.id;if(E&&(Dt.current.set(E,y.id),Ue.current.has(E)&&Ue.current.add(y.id)),!l){let R=new URL(w.url||window.location.href).pathname,N=ea(R).find(L=>L.id===E);try{if(Ue.current.has(E))await $u(f[0],y.id);else if(N&&N.comment!==w.comment)return await gh(f[0],y.id,{comment:N.comment}),{...y,comment:N.comment}}catch(L){console.warn("[Agentation] Failed to apply changes made during sync:",L)}}return y},xt=f=>l?{...f,annotations:f.annotations.filter(y=>!Ue.current.has(y.id)&&Av(y.url||f.url,e,window.location.origin))}:f,cn=(0,C.useRef)(e);cn.current=e;let An=(f,y,w,E=e)=>{let R=uv(f,ea(E),y,Dt.current).filter(tt);E===cn.current&&se.current&&pl(R),fh(E,R,w)},[De,pl]=(0,C.useState)([]),[Ql,vo]=(0,C.useState)(!0),[wo,Wl]=(0,C.useState)(()=>q4()),[Gl,Vl]=(0,C.useState)(!1);(0,C.useLayoutEffect)(()=>{o5()},[]);let It=(0,C.useRef)(null),yl=(0,C.useRef)(null),Tl=(0,C.useRef)(null),oa=(0,C.useRef)(null),Jn=(0,C.useRef)(!1),Fl=(0,C.useRef)(!1),V=(0,C.useRef)(!1);(0,C.useLayoutEffect)(()=>{O&&Jn.current?(Jn.current=!1,Tl.current?.querySelector("button:not(:disabled)")?.focus()):!O&&Fl.current&&(Fl.current=!1,yl.current?.focus())},[O]),(0,C.useEffect)(()=>{let f=w=>{let E=It.current;E&&w.composedPath().includes(E)&&w.stopPropagation()},y=["mousedown","click","pointerdown"];return y.forEach(w=>n.addEventListener(w,f)),()=>{y.forEach(w=>n.removeEventListener(w,f))}},[n]);let[fe,Ae]=(0,C.useState)(!1),[Ce,ve]=(0,C.useState)(!1),[nt,Xe]=(0,C.useState)(null),[Ke,Fe]=(0,C.useState)({x:0,y:0}),[q,T]=(0,C.useState)(null),[D,U]=(0,C.useState)(!1),X=Cy(),P=Cy(),[ee,Q]=(0,C.useState)("idle"),[ce,we]=(0,C.useState)(!1),ze=(0,C.useRef)(new Set),ct=(0,C.useRef)(new Set),ht=(0,C.useRef)(),lt=(0,C.useCallback)(()=>{!ze.current.size&&!ht.current&&we(!1)},[]);(0,C.useEffect)(()=>()=>clearTimeout(ht.current),[]);let[qe,Ne]=(0,C.useState)(null),[Tt,Ct]=(0,C.useState)(null),[mt,Be]=(0,C.useState)([]),[ot,vt]=(0,C.useState)(null),gt=(0,C.useRef)(null);(0,C.useEffect)(()=>()=>{gt.current&&clearTimeout(gt.current)},[]);let[ae,Yn]=(0,C.useState)(null),Nn=(0,C.useRef)(null),yn=(0,C.useRef)(!1),[Al,Zl]=(0,C.useState)(!1);(0,C.useLayoutEffect)(()=>{if(ae||!Nn.current)return;let f=Nn.current;if(Nn.current=null,q)return;(O&&f.isConnected&&!f.disabled?f:yl.current)?.focus({preventScroll:!0})},[ae,O,q]);let[bl,Pn]=(0,C.useState)(null),[er,tr]=(0,C.useState)([]),[aa,qh]=(0,C.useState)(0),[Ih,Qh]=(0,C.useState)(!1),[ut,$5]=(0,C.useState)(!1),[el,Wh]=(0,C.useState)(!1),[bn,ia]=(0,C.useState)(!1),[H5,Gh]=(0,C.useState)("main"),[Vh,Ku]=(0,C.useState)(!1),[Je,Ju]=(0,C.useState)(!1),[ra,nr]=(0,C.useState)(!1),[He,Kl]=(0,C.useState)([]),[qa,sa]=(0,C.useState)(null),Pu=(0,C.useRef)(!1),[At,Fh]=(0,C.useState)(!1),[Zh,ed]=(0,C.useState)(!1),[Kh,U5]=(0,C.useState)(1),[Jh,O6]=(0,C.useState)("new-page"),[xn,Ds]=(0,C.useState)(""),[Y5,j5]=(0,C.useState)(!1),[me,Nl]=(0,C.useState)(null),td=(0,C.useRef)(!1),nd=(0,C.useRef)({rearrange:null,placements:[]}),ca=(0,C.useRef)({rearrange:null,placements:[]}),[X5,Ph]=(0,C.useState)(0),[q5,I5]=(0,C.useState)(0),[Ia,e0]=(0,C.useState)([]),[Qa,t0]=(0,C.useState)(null),n0=(0,C.useRef)({designPlacements:He,rearrangeState:me,blankCanvas:At,wireframePurpose:xn});n0.current={designPlacements:He,rearrangeState:me,blankCanvas:At,wireframePurpose:xn};let Wa=(0,C.useRef)({placements:Ia,rearrange:Qa}),lr=(0,C.useRef)(new Set),Rs=(0,C.useRef)(new Set),xl=(0,C.useRef)(null),Ga=(0,C.useRef)(),l0=Je&&O&&!ra&&At;(0,C.useEffect)(()=>{if(l0){ed(!1);let f=Iu(()=>{ed(!0)});return()=>cancelAnimationFrame(f)}else ed(!1)},[l0]);let ld=(0,C.useRef)(new Map),od=(0,C.useRef)([]),ad=(0,C.useRef)(new Map),ua=(0,C.useRef)(null),[tl,id]=(0,C.useState)(!1),[vl,Q5]=(0,C.useState)([]),rd=(0,C.useRef)(vl);rd.current=vl;let[o0,B6]=(0,C.useState)(null),sd=(0,C.useRef)(null),$6=(0,C.useRef)(!1),H6=(0,C.useRef)([]),U6=(0,C.useRef)(0),Y6=(0,C.useRef)(null),j6=(0,C.useRef)(null),X6=(0,C.useRef)(1),[cd,a0]=(0,C.useState)(!1),Va=(0,C.useRef)(null),[Dn,ko]=(0,C.useState)([]),or=(0,C.useRef)(!1),vn=()=>{Ku(!0)},W5=()=>{Ku(!1)},i0=()=>{cd||(Va.current=rt(()=>a0(!0),850))},r0=()=>{Va.current&&(clearTimeout(Va.current),Va.current=null),a0(!1),W5()};(0,C.useEffect)(()=>()=>{Va.current&&clearTimeout(Va.current)},[]);let[at,G5]=(0,C.useState)(()=>{try{let f=JSON.parse(localStorage.getItem("feedback-toolbar-settings")??"");return{...xh,...f,annotationColorId:Cs.find(y=>y.id===f.annotationColorId)?f.annotationColorId:xh.annotationColorId}}catch{return xh}}),[Dl,s0]=(0,C.useState)(!0),[c0,u0]=(0,C.useState)(!1),V5=(0,C.useCallback)(f=>{G5(y=>({...y,...f}))},[]),F5=(0,C.useCallback)(()=>{It.current?.classList.add(Y.disableTransitions),s0(f=>!f),Iu(()=>{It.current?.classList.remove(Y.disableTransitions)})},[]),d0=!1,Jl=d0&&at.reactEnabled?R6[at.outputDetail]:"off",[en,ud]=(0,C.useState)(l?null:W??null),_0=(0,C.useRef)(!1),[da,_a]=(0,C.useState)(S?"connecting":"disconnected"),[Yt,dd]=(0,C.useState)(null),[Ls,f0]=(0,C.useState)(!1),ar=(0,C.useRef)(null),zs=(0,C.useRef)(!1),fa=(0,C.useRef)(new Set),Os=(0,C.useRef)(new Map),h0=(0,C.useCallback)(f=>{fa.current.add(f),wl.current===f&&(wl.current=null)},[]),[So,Bs]=(0,C.useState)(new Set),[nl,ir]=(0,C.useState)(!1),[ha,Fa]=(0,C.useState)(!1),[Pl,_d]=(0,C.useState)(!1),ma=(0,C.useRef)(null),ll=(0,C.useRef)(null),rr=(0,C.useRef)(null),Za=(0,C.useRef)(null),sr=(0,C.useRef)(!1),m0=(0,C.useRef)(0),wl=(0,C.useRef)(null),g0=(0,C.useRef)(null),fd=8,Z5=50,hd=(0,C.useRef)(null),$s=(0,C.useRef)(null),cr=(0,C.useRef)(null),K5=(0,C.useCallback)(()=>Gh("main"),[]);(0,C.useEffect)(()=>{bn||Ku(!1)},[bn]),(0,C.useLayoutEffect)(()=>{bn&&V.current&&(V.current=!1,It.current?.querySelector("[data-agentation-settings-panel] button")?.focus())},[bn]);let Hs=O&&Ql&&!Je;(0,C.useEffect)(()=>{if(Hs)ve(!1),Ae(!0),fa.current.clear();else if(fe){ve(!0);let f=rt(()=>{Ae(!1),ve(!1)},250);return()=>clearTimeout(f)}},[Hs]),(0,C.useEffect)(()=>{$5(!0),qh(window.scrollY);let f=ea(e);pl(f.filter(ws)),t5||(u0(!0),t5=!0,rt(()=>u0(!1),750));try{let y=localStorage.getItem("feedback-toolbar-theme");y!==null&&s0(y==="dark")}catch{}try{let y=localStorage.getItem("feedback-toolbar-position");if(y){let w=JSON.parse(y);typeof w.x=="number"&&typeof w.y=="number"&&dd(w)}}catch{}},[e]),(0,C.useEffect)(()=>{ut&&localStorage.setItem("feedback-toolbar-settings",JSON.stringify(at))},[at,ut]),(0,C.useEffect)(()=>{ut&&localStorage.setItem("feedback-toolbar-theme",Dl?"dark":"light")},[Dl,ut]);let p0=(0,C.useRef)(!1);(0,C.useEffect)(()=>{let f=p0.current;p0.current=Ls,f&&!Ls&&Yt&&ut&&localStorage.setItem("feedback-toolbar-position",JSON.stringify(Yt))},[Ls,Yt,ut]),(0,C.useEffect)(()=>{if(!S||!ut||_0.current)return;_0.current=!0,_a("connecting");let f=window.location.href;he(async()=>{try{let w=j4(e),E=W||w,R=!1;if(E)try{let N=ea(e),L=xt(await Iy(S,E));od.current=L.annotations.filter(ge=>ge.kind==="placement"||ge.kind==="rearrange"),se.current&&(ud(L.id),_a("connected")),hh(e,L.id),R=!0;let G=ea(e).filter(ws),de=new Set(L.annotations.map(ge=>ge.id)),pe=G.filter(ge=>!de.has(ge.id));if(pe.length>0){let ye=`${typeof window<"u"?window.location.origin:""}${e}`,je=(await Promise.allSettled(pe.map(be=>Ye(S,L.id,{...be,sessionId:L.id,url:ye})))).map((be,Me)=>be.status==="fulfilled"?be.value:(console.warn("[Agentation] Failed to sync annotation:",be.reason),pe[Me])),ue=[...L.annotations,...je];An(N,ue,L.id)}else An(N,L.annotations,L.id)}catch(N){console.warn("[Agentation] Could not join session, creating new:",N),X4(e)}if(!R){let N=await mh(S,f);hh(e,N.id),se.current&&(ud(N.id),_a("connected"),J?.(N.id));let L=l?new Map([[e,ea(e)]]):L4(),G=typeof window<"u"?window.location.origin:"",de=[];for(let[pe,ge]of L){let ye=ge.filter(ue=>ws(ue)&&!ue._syncedTo);if(ye.length===0)continue;let Re=`${G}${pe}`,je=pe===e;de.push((async()=>{try{let ue=je?N:await mh(S,Re),Me=(await Promise.allSettled(ye.map(Pe=>Ye(S,ue.id,{...Pe,sessionId:ue.id,url:Re})))).map((Pe,Rt)=>Pe.status==="fulfilled"?Pe.value:(console.warn("[Agentation] Failed to sync annotation:",Pe.reason),ye[Rt]));An(ye,Me,ue.id,pe)}catch(ue){console.warn(`[Agentation] Failed to sync annotations for ${pe}:`,ue)}})())}await Promise.allSettled(de)}}catch(w){se.current&&_a("disconnected"),console.warn("[Agentation] Failed to initialize session, using local storage:",w)}})},[S,W,ut,J,e,he]),(0,C.useEffect)(()=>{if(!S||!ut)return;let f=async()=>{try{(await fetch(`${S}/health`)).ok?_a("connected"):_a("disconnected")}catch{_a("disconnected")}};f();let y=a5(f,1e4);return()=>clearInterval(y)},[S,ut]);let Us=(0,C.useRef)(De),y0=(0,C.useRef)(!1);(0,C.useLayoutEffect)(()=>{Us.current=De,y0.current=De.length>0||He.length>0||(me?.sections.length??0)>0},[De,He.length,me?.sections.length]);let md=(0,C.useCallback)(f=>{let y=ze.current.has(f);if(y&&(ct.current.delete(f),ct.current.size))return;let w=y?new Set(ze.current):new Set([f]);y&&(ze.current.clear(),lt());for(let N of w)Os.current.delete(N),fa.current.delete(N);pl(N=>N.filter(L=>!w.has(L.id))),Bs(N=>new Set([...N].filter(L=>!w.has(L))));let E=y?[]:Us.current.filter(N=>N.kind!=="placement"&&N.kind!=="rearrange"),R=E.findIndex(N=>N.id===f);R>=0&&R<E.length-1&&(vt(N=>N===null?R:Math.min(N,R)),gt.current&&clearTimeout(gt.current),gt.current=rt(()=>vt(null),200))},[lt]);(0,C.useEffect)(()=>!S||!ut||!en?void 0:y6(S,en,()=>y0.current,w=>{let{id:E,kind:R}=w;if(R==="placement"){for(let[N,L]of ld.current)if(L===E){ua.current?.placements.forget(N),Kl(G=>G.filter(de=>de.id!==N));break}}else if(R==="rearrange"){for(let[N,L]of ad.current)if(L===E){ua.current?.rearrange.forget(N),Nl(G=>{if(!G)return null;let de=G.sections.filter(pe=>pe.id!==N);return de.length===0?null:{...G,sections:de}});break}}else{if(!Us.current.some(N=>N.id===E))return;Bs(N=>new Set(N).add(E))}}),[S,ut,en]),(0,C.useEffect)(()=>{if(!S||!ut)return;let f=g0.current==="disconnected",y=da==="connected";g0.current=da,f&&y&&he(async()=>{try{let E=ea(e).filter(ws);if(E.length===0)return;let N=`${typeof window<"u"?window.location.origin:""}${e}`,L=en,G=[];if(L)try{G=xt(await Iy(S,L)).annotations}catch{L=null}L||(L=(await mh(S,N)).id,se.current&&ud(L),hh(e,L));let de=new Set(G.map(ge=>ge.id)),pe=E.filter(ge=>!de.has(ge.id));if(pe.length>0){let ye=(await Promise.allSettled(pe.map(je=>Ye(S,L,{...je,sessionId:L,url:N})))).map((je,ue)=>je.status==="fulfilled"?je.value:(console.warn("[Agentation] Failed to sync annotation on reconnect:",je.reason),pe[ue])),Re=[...G,...ye];An(E,Re,L)}}catch(E){console.warn("[Agentation] Failed to sync on reconnect:",E)}})},[da,S,ut,en,e,he]);let J5=(0,C.useCallback)(()=>{Gl||(Vl(!0),ia(!1),F(!1),rt(()=>{I4(!0),Wl(!0),Vl(!1)},400))},[Gl]);(0,C.useEffect)(()=>{if(!m||!ut||!h||h.length===0||De.length>0)return;let f=[];return f.push(rt(()=>{F(!0)},_-200)),h.forEach((y,w)=>{let E=_+w*300;f.push(rt(()=>{let R=document.querySelector(y.selector);if(!R)return;let N=Pt(R),{name:L,path:G}=Gi(R),de={id:`demo-${Date.now()}-${w}`,x:(N.left+N.width/2)/window.innerWidth*100,y:N.top+N.height/2+window.scrollY,comment:y.comment,element:L,elementPath:G,timestamp:Date.now(),selectedText:y.selectedText,boundingBox:{x:N.left,y:N.top+window.scrollY,width:N.width,height:N.height},nearbyText:ps(R),cssClasses:ys(R)};pl(pe=>[...pe,de])},E))}),()=>{f.forEach(clearTimeout)}},[m,ut,h,_]),(0,C.useEffect)(()=>{let f=()=>{qh(window.scrollY),re(y=>y+1),Qh(!0),cr.current&&clearTimeout(cr.current),cr.current=rt(()=>{Qh(!1)},150)};return Z.addEventListener("scroll",f,{passive:!0,capture:!0}),()=>{Z.removeEventListener("scroll",f,!0),cr.current&&clearTimeout(cr.current)}},[Z]),(0,C.useEffect)(()=>{if(!ut)return;let f=De.filter(y=>!So.has(y.id));f.length>0?en?fh(e,f,en):N5(e,f):localStorage.removeItem(Hh(e))},[De,e,ut,en,ce,So]),(0,C.useEffect)(()=>{if(ut&&!Pu.current){Pu.current=!0;let f=z4(e);f.length>0&&Kl(f)}},[ut,e]),(0,C.useEffect)(()=>{if(ut&&Pu.current&&!At){let f=He.filter(y=>!Ia.includes(y));f.length>0?O4(e,f):B4(e)}},[He,e,ut,At,Ia]),(0,C.useEffect)(()=>{if(ut&&!td.current){td.current=!0;let f=$4(e);if(f){let y={...f,sections:f.sections.map(w=>({...w,currentRect:w.currentRect??{...w.originalRect}}))};Nl(y)}}},[ut,e]),(0,C.useEffect)(()=>{ut&&td.current&&!At&&(me&&me!==Qa?H4(e,me):U4(e))},[me,e,ut,At,Qa]);let gd=(0,C.useRef)(!1);(0,C.useEffect)(()=>{if(ut&&!gd.current){gd.current=!0;let f=Y4(e);f&&(ca.current={rearrange:f.rearrange,placements:f.placements||[]},f.purpose&&Ds(f.purpose))}},[ut,e]),(0,C.useEffect)(()=>{if(!ut||!gd.current||ce)return;let f=ca.current;At?(me?.sections?.length??0)>0||He.length>0||xn?qy(e,{rearrange:me,placements:He,purpose:xn}):Bu(e):(f.rearrange?.sections?.length??0)>0||f.placements.length>0||xn?qy(e,{rearrange:f.rearrange,placements:f.placements,purpose:xn}):Bu(e)},[me,He,xn,At,e,ut,ce]),(0,C.useEffect)(()=>{Je&&!me&&Nl({sections:[],originalOrder:[],detectedAt:Date.now()})},[Je,me]),(0,C.useEffect)(()=>{if(!S||!en)return;let f={create:w=>he(()=>Qy(S,en,w)),update:(w,E)=>he(()=>gh(S,w,E)),remove:w=>he(()=>$u(S,w))};ld.current=new Map,ad.current=new Map;let y={placements:Ky(f,ld.current,od.current.filter(w=>w.kind==="placement")),rearrange:Ky(f,ad.current,od.current.filter(w=>w.kind==="rearrange"))};return ua.current=y,()=>{y.placements.dispose(),y.rearrange.dispose(),ua.current===y&&(ua.current=null)}},[S,en,e,he]),(0,C.useEffect)(()=>{let f=window.location.pathname+window.location.search+window.location.hash;ua.current?.placements.replace(He.filter(y=>!Ia.includes(y)).map(y=>({id:y.id,x:y.x/window.innerWidth*100,y:y.y,comment:`Place ${y.type} at (${Math.round(y.x)}, ${Math.round(y.y)}), ${y.width}\xD7${y.height}px${y.text?` \u2014 "${y.text}"`:""}`,element:`[design:${y.type}]`,elementPath:"[placement]",timestamp:y.timestamp,url:f,intent:"change",severity:"important",kind:"placement",placement:{componentType:y.type,width:y.width,height:y.height,scrollY:y.scrollY,text:y.text}})))},[He,S,en,e,Ia]),(0,C.useEffect)(()=>{let f=ua.current;if(!f)return;if(me===Qa){f.rearrange.replace([]);return}let y=rt(()=>{let w=window.location.pathname+window.location.search+window.location.hash,E=[];for(let R of me?.sections??[]){let N=R.originalRect,L=R.currentRect,G=Math.abs(N.x-L.x)>1||Math.abs(N.y-L.y)>1||Math.abs(N.width-L.width)>1||Math.abs(N.height-L.height)>1;if(!G&&!R.note)continue;let de=R.note?` \u2014 "${R.note}"`:"";E.push({id:R.id,x:L.x/window.innerWidth*100,y:L.y,comment:G?`Move ${R.label} section (${R.tagName}) \u2014 from (${Math.round(N.x)},${Math.round(N.y)}) ${Math.round(N.width)}\xD7${Math.round(N.height)} to (${Math.round(L.x)},${Math.round(L.y)}) ${Math.round(L.width)}\xD7${Math.round(L.height)}${de}`:`Note on ${R.label} section (${R.tagName})${de}`,element:R.selector,elementPath:"[rearrange]",timestamp:me.detectedAt,url:w,intent:"change",severity:"important",kind:"rearrange",rearrange:{selector:R.selector,label:R.label,tagName:R.tagName,originalRect:N,currentRect:L}})}f.rearrange.replace(E)},300);return()=>clearTimeout(y)},[me,S,en,e,Qa]);let pd=(0,C.useCallback)(()=>{clearTimeout(Ga.current),nr(!1),Ju(!0)},[]);(0,C.useEffect)(()=>()=>clearTimeout(Ga.current),[]);let ur=(0,C.useCallback)(()=>{nr(!0),Ju(!1),sa(null),clearTimeout(Ga.current),Ga.current=rt(()=>{nr(!1)},300)},[]),Ys=(0,C.useCallback)(()=>{let f=yl.current?.getRootNode();Fl.current=!!f?.activeElement&&!!It.current?.contains(f.activeElement),Fl.current&&f?.activeElement?.blur(),ia(!1),Je&&(nr(!0),Ju(!1),sa(null),clearTimeout(Ga.current),Ga.current=rt(()=>{nr(!1)},300)),F(!1)},[Je]),b0=(0,C.useCallback)(()=>{el||(cv(),Wh(!0))},[el]),js=(0,C.useCallback)(()=>{el&&(Sy(),Wh(!1))},[el]),yd=(0,C.useCallback)(()=>{el?js():b0()},[el,b0,js]),dr=(0,C.useCallback)((f=Dn)=>{let y=f.filter(L=>L.element.isConnected);if(y.length===0){ko([]);return}let w=y[0],E=w.element,R=y.length>1,N=y.map(L=>Pt(L.element));if(R){let L={left:Math.min(...N.map(Me=>Me.left)),top:Math.min(...N.map(Me=>Me.top)),right:Math.max(...N.map(Me=>Me.right)),bottom:Math.max(...N.map(Me=>Me.bottom))},G=y.slice(0,5).map(Me=>Me.name).join(", "),de=y.length>5?` +${y.length-5} more`:"",pe=N.map(Me=>({x:Me.left,y:Me.top+window.scrollY,width:Me.width,height:Me.height})),ye=y[y.length-1].element,Re=N[N.length-1],je=Re.left+Re.width/2,ue=Re.top+Re.height/2,be=vh(ye);T({id:Date.now().toString(),x:je/window.innerWidth*100,y:be?ue:ue+window.scrollY,clientY:ue,element:`${y.length} elements: ${G}${de}`,elementPath:"multi-select",boundingBox:{x:L.left,y:L.top+window.scrollY,width:L.right-L.left,height:L.bottom-L.top},isMultiSelect:!0,isFixed:be,elementBoundingBoxes:pe,multiSelectElements:y.map(Me=>Me.element),targetElement:ye,fullPath:Ss(E),accessibility:Nu(E),computedStyles:Au(E),computedStylesObj:Tu(E),nearbyElements:Eu(E),cssClasses:ys(E),nearbyText:ps(E),sourceFile:ju(E),attributes:ks(E,oe)})}else{let L=N[0],G=vh(E);T({id:Date.now().toString(),x:L.left/window.innerWidth*100,y:G?L.top:L.top+window.scrollY,clientY:L.top,element:w.name,elementPath:w.path,boundingBox:{x:L.left,y:G?L.top:L.top+window.scrollY,width:L.width,height:L.height},isFixed:G,fullPath:Ss(E),accessibility:Nu(E),computedStyles:Au(E),computedStylesObj:Tu(E),nearbyElements:Eu(E),cssClasses:ys(E),nearbyText:ps(E),reactComponents:w.reactComponents,targetElement:E,sourceFile:ju(E),attributes:ks(E,oe)})}ko([]),Xe(null)},[Dn,oe]);(0,C.useEffect)(()=>{O||(T(null),Yn(null),Pn(null),tr([]),Xe(null),ia(!1),ko([]),or.current=!1,el&&js())},[O,el,js]),(0,C.useEffect)(()=>()=>{Sy()},[]),(0,C.useEffect)(()=>{if(!O)return;let f=["p","span","h1","h2","h3","h4","h5","h6","li","td","th","label","blockquote","figcaption","caption","legend","dt","dd","pre","code","em","strong","b","i","u","s","a","time","address","cite","q","abbr","dfn","mark","small","sub","sup","[contenteditable]"].join(", "),y=document.createElement("style");return y.id="agentation-cursor",y.textContent=`
      body { cursor: crosshair !important; }
      body :is(${f}) { cursor: text !important; }
    `,document.head.appendChild(y),()=>{let w=document.getElementById("agentation-cursor");w&&w.remove()}},[O]),(0,C.useEffect)(()=>{if(o0!==null&&O)return document.documentElement.setAttribute("data-drawing-hover",""),()=>document.documentElement.removeAttribute("data-drawing-hover")},[o0,O]),(0,C.useEffect)(()=>{if(!O||q||ae||tl||Je)return;let f=null,y=(N,L,G)=>{let de=Xu(N,L),pe=G?Ey(N,L):de;if(!pe||pn(pe,"[data-feedback-toolbar], [data-annotation-popup], [data-annotation-marker]")){Xe(null);return}let{name:ge,elementName:ye,path:Re,reactComponents:je}=Yu(pe,Jl,oe);Xe({element:ge,elementName:ye,elementPath:Re,rect:Pt(pe),reactComponents:je,isPiercing:G&&pe!==de}),Fe({x:N,y:L})},w=N=>{let L=N.composedPath()[0]||N.target;if(pn(L,"[data-feedback-toolbar], [data-annotation-popup], [data-annotation-marker]")){f=null,Xe(null);return}f={x:N.clientX,y:N.clientY},y(N.clientX,N.clientY,ta(N))},E=N=>{(N.key==="Meta"||N.key==="Control")&&f&&y(f.x,f.y,ta(N))},R=()=>{f=null,Xe(null)};return Z.addEventListener("mousemove",w),Z.addEventListener("keydown",E),Z.addEventListener("keyup",E),Z.addEventListener("mouseleave",R),window.addEventListener("blur",R),()=>{Z.removeEventListener("mousemove",w),Z.removeEventListener("keydown",E),Z.removeEventListener("keyup",E),Z.removeEventListener("mouseleave",R),window.removeEventListener("blur",R)}},[O,q,ae,tl,Je,Jl,oe]);let Xs=(0,C.useCallback)((f,y)=>{if(ae&&!ha){$s.current?.shake();return}if(q&&!nl){if(It.current?.querySelector("[data-annotation-popup]:not([data-annotation-card]) textarea")?.value.trim()){hd.current?.shake();return}ir(!0)}if(Nn.current=y??null,yn.current=y?.matches(":focus-visible")??!1,Zl(!1),Fa(!1),Yn(f),Ne(null),Ct(null),Be([]),f.elementBoundingBoxes?.length){let w=[];for(let E of f.elementBoundingBoxes){let R=E.x+E.width/2,N=E.y+E.height/2-window.scrollY,L=Du(R,N,E);L&&w.push(L)}tr(w),Pn(null)}else if(f.boundingBox){let w=f.boundingBox,E=w.x+w.width/2,R=f.isFixed?w.y+w.height/2:w.y+w.height/2-window.scrollY,N=Du(E,R,w);if(N){let L=Pt(N),G=L.width/w.width,de=L.height/w.height;G<.5||de<.5?Pn(null):Pn(N)}else Pn(null);tr([])}else Pn(null),tr([])},[q,nl,ae,ha]);(0,C.useEffect)(()=>{if(!O||tl||Je)return;let f=y=>{if(sr.current){sr.current=!1,y.preventDefault(),y.stopPropagation();return}let w=y.composedPath()[0]||y.target;if(pn(w,"[data-feedback-toolbar]")||pn(w,"[data-annotation-popup]")||pn(w,"[data-annotation-marker]"))return;if(ta(y)&&!q&&!ae){y.preventDefault(),y.stopPropagation(),or.current=y.shiftKey;let Me=Ey(y.clientX,y.clientY);if(!Me)return;let Pe=Pt(Me),{name:Rt,path:Sn,reactComponents:Ee}=Yu(Me,Jl,oe),ke=Dn.findIndex(it=>it.element===Me);ke>=0?ko(it=>it.filter((jt,zl)=>zl!==ke)):ko(it=>[...it,{element:Me,rect:Pe,name:Rt,path:Sn,reactComponents:Ee??void 0}]);return}let E=pn(w,"button, a, input, select, textarea, [role='button'], [onclick]");if(at.blockInteractions&&(y.preventDefault(),y.stopPropagation()),q&&!nl){if(E&&!at.blockInteractions)return;y.preventDefault(),hd.current?.shake();return}if(ae&&!ha){if(E&&!at.blockInteractions)return;y.preventDefault(),$s.current?.shake();return}y.preventDefault();let R=Xu(y.clientX,y.clientY);if(!R)return;let{name:N,path:L,reactComponents:G}=Yu(R,Jl,oe),de=Pt(R),pe=y.clientX/window.innerWidth*100,ge=vh(R),ye=ge?y.clientY:y.clientY+window.scrollY,Re=R.ownerDocument.defaultView?.getSelection(),je;Re&&Re.toString().trim().length>0&&(je=Re.toString().trim().slice(0,500));let ue=Tu(R),be=Au(R);ir(!1),T({id:Date.now().toString(),x:pe,y:ye,clientY:y.clientY,element:N,elementPath:L,selectedText:je,boundingBox:{x:de.left,y:ge?de.top:de.top+window.scrollY,width:de.width,height:de.height},nearbyText:ps(R),cssClasses:ys(R),isFixed:ge,fullPath:Ss(R),accessibility:Nu(R),computedStyles:be,computedStylesObj:ue,nearbyElements:Eu(R),reactComponents:G??void 0,sourceFile:ju(R),attributes:ks(R,oe),frame:_v(R,y.clientX,y.clientY),targetElement:R}),Xe(null)};return Z.addEventListener("click",f,!0),()=>Z.removeEventListener("click",f,!0)},[O,tl,Je,q,nl,ae,ha,at.blockInteractions,Jl,oe,Dn]),(0,C.useEffect)(()=>{if(!O)return;let f=w=>{let E=(w.key==="Meta"||w.key==="Control")&&!ta(w),R=w.key==="Shift"&&or.current;(E||R)&&!ll.current&&Dn.length>0&&dr()},y=()=>{or.current=!1,ko([]),Xe(null),ma.current=null,ll.current=null,_d(!1),Za.current?.replaceChildren()};return Z.addEventListener("keyup",f),window.addEventListener("blur",y),()=>{Z.removeEventListener("keyup",f),window.removeEventListener("blur",y)}},[O,Dn,dr]),(0,C.useEffect)(()=>{if(!O||q||tl||Je)return;let f=y=>{if(y.button!==0)return;sr.current=!1;let w=y.composedPath()[0]||y.target;if(pn(w,"[data-feedback-toolbar]")||pn(w,"[data-annotation-marker]")||pn(w,"[data-annotation-popup]"))return;let E=new Set(["P","SPAN","H1","H2","H3","H4","H5","H6","LI","TD","TH","LABEL","BLOCKQUOTE","FIGCAPTION","CAPTION","LEGEND","DT","DD","PRE","CODE","EM","STRONG","B","I","U","S","A","TIME","ADDRESS","CITE","Q","ABBR","DFN","MARK","SMALL","SUB","SUP"]);!ta(y)&&(E.has(w.tagName)||w.isContentEditable)||(y.preventDefault(),ma.current={x:y.clientX,y:y.clientY})};return Z.addEventListener("mousedown",f),()=>Z.removeEventListener("mousedown",f)},[O,q,tl,Je]),(0,C.useEffect)(()=>{if(!O||q)return;let f=y=>{if(!ma.current)return;let w=y.clientX-ma.current.x,E=y.clientY-ma.current.y,R=w*w+E*E,N=fd*fd;if(!Pl&&R>=N&&(ll.current=ma.current,_d(!0),y.preventDefault()),(Pl||R>=N)&&ll.current){if(rr.current){let Ee=Math.min(ll.current.x,y.clientX),ke=Math.min(ll.current.y,y.clientY),it=Math.abs(y.clientX-ll.current.x),jt=Math.abs(y.clientY-ll.current.y);rr.current.style.transform=`translate(${Ee}px, ${ke}px)`,rr.current.style.width=`${it}px`,rr.current.style.height=`${jt}px`}let L=Date.now();if(L-m0.current<Z5)return;m0.current=L;let G=ll.current.x,de=ll.current.y,pe=Math.min(G,y.clientX),ge=Math.min(de,y.clientY),ye=Math.max(G,y.clientX),Re=Math.max(de,y.clientY),je=(pe+ye)/2,ue=(ge+Re)/2,be=new Set,Me=[[pe,ge],[ye,ge],[pe,Re],[ye,Re],[je,ue],[je,ge],[je,Re],[pe,ue],[ye,ue]];for(let[Ee,ke]of Me){let it=document.elementsFromPoint(Ee,ke);for(let jt of it)jt instanceof HTMLElement&&be.add(jt)}let Pe=Z.querySelectorAll("button, a, input, img, p, h1, h2, h3, h4, h5, h6, li, label, td, th, div, span, section, article, aside, nav");for(let Ee of Pe)if(Ee instanceof HTMLElement){let ke=Pt(Ee),it=ke.left+ke.width/2,jt=ke.top+ke.height/2,zl=it>=pe&&it<=ye&&jt>=ge&&jt<=Re,kl=Math.min(ke.right,ye)-Math.max(ke.left,pe),fr=Math.min(ke.bottom,Re)-Math.max(ke.top,ge),Vs=kl>0&&fr>0?kl*fr:0,un=ke.width*ke.height,hr=un>0?Vs/un:0;(zl||hr>.5)&&be.add(Ee)}let Rt=[],Sn=new Set(["BUTTON","A","INPUT","IMG","P","H1","H2","H3","H4","H5","H6","LI","LABEL","TD","TH","SECTION","ARTICLE","ASIDE","NAV"]);for(let Ee of be){if(pn(Ee,"[data-feedback-toolbar]")||pn(Ee,"[data-annotation-marker]"))continue;let ke=Pt(Ee);if(!(ke.width>window.innerWidth*.8&&ke.height>window.innerHeight*.5)&&!(ke.width<10||ke.height<10)&&ke.left<ye&&ke.right>pe&&ke.top<Re&&ke.bottom>ge){let it=Ee.tagName,jt=Sn.has(it);if(!jt&&(it==="DIV"||it==="SPAN")){let zl=Ee.textContent&&Ee.textContent.trim().length>0,kl=Ee.onclick!==null||Ee.getAttribute("role")==="button"||Ee.getAttribute("role")==="link"||Ee.classList.contains("clickable")||Ee.hasAttribute("data-clickable");(zl||kl)&&!Ee.querySelector("p, h1, h2, h3, h4, h5, h6, button, a")&&(jt=!0)}if(jt){let zl=!1;for(let kl of Rt)if(kl.left<=ke.left&&kl.right>=ke.right&&kl.top<=ke.top&&kl.bottom>=ke.bottom){zl=!0;break}zl||Rt.push(ke)}}}if(Za.current){let Ee=Za.current;for(;Ee.children.length>Rt.length;)Ee.removeChild(Ee.lastChild);Rt.forEach((ke,it)=>{let jt=Ee.children[it];jt||(jt=document.createElement("div"),jt.className=Y.selectedElementHighlight,Ee.appendChild(jt)),jt.style.transform=`translate(${ke.left}px, ${ke.top}px)`,jt.style.width=`${ke.width}px`,jt.style.height=`${ke.height}px`})}}};return Z.addEventListener("mousemove",f,{passive:!0}),()=>Z.removeEventListener("mousemove",f)},[O,q,Pl,fd]),(0,C.useEffect)(()=>{if(!O)return;let f=y=>{let w=Pl,E=ll.current;if(Pl&&E){sr.current=!0;let R=Math.min(E.x,y.clientX),N=Math.min(E.y,y.clientY),L=Math.max(E.x,y.clientX),G=Math.max(E.y,y.clientY),de=[];Z.querySelectorAll("button, a, input, img, p, h1, h2, h3, h4, h5, h6, li, label, td, th").forEach(ue=>{if(!(ue instanceof HTMLElement)||pn(ue,"[data-feedback-toolbar]")||pn(ue,"[data-annotation-marker]"))return;let be=Pt(ue);be.width>window.innerWidth*.8&&be.height>window.innerHeight*.5||be.width<10||be.height<10||be.left<L&&be.right>R&&be.top<G&&be.bottom>N&&de.push({element:ue,rect:be})});let ge=de.filter(({element:ue})=>!de.some(({element:be})=>be!==ue&&ue.contains(be))),ye=y.clientX/window.innerWidth*100,Re=y.clientY+window.scrollY,je=(ta(y)||Dn.length>0)&&!q&&!ae;if(ge.length>0)if(je){let ue=[...Dn];for(let{element:be,rect:Me}of ge){if(ue.some(Ee=>Ee.element===be))continue;let{name:Pe,path:Rt,reactComponents:Sn}=Yu(be,Jl,oe);ue.push({element:be,rect:Me,name:Pe,path:Rt,reactComponents:Sn??void 0})}or.current=y.shiftKey,ta(y)?ko(ue):dr(ue)}else{let ue=ge.reduce((Ee,{rect:ke})=>({left:Math.min(Ee.left,ke.left),top:Math.min(Ee.top,ke.top),right:Math.max(Ee.right,ke.right),bottom:Math.max(Ee.bottom,ke.bottom)}),{left:1/0,top:1/0,right:-1/0,bottom:-1/0}),be=ge.slice(0,5).map(({element:Ee})=>Gi(Ee).name).join(", "),Me=ge.length>5?` +${ge.length-5} more`:"",Pe=ge[0].element,Rt=Tu(Pe),Sn=Au(Pe);T({id:Date.now().toString(),x:ye,y:Re,clientY:y.clientY,element:`${ge.length} elements: ${be}${Me}`,elementPath:"multi-select",boundingBox:{x:ue.left,y:ue.top+window.scrollY,width:ue.right-ue.left,height:ue.bottom-ue.top},isMultiSelect:!0,fullPath:Ss(Pe),accessibility:Nu(Pe),computedStyles:Sn,computedStylesObj:Rt,nearbyElements:Eu(Pe),cssClasses:ys(Pe),nearbyText:ps(Pe),sourceFile:ju(Pe),attributes:ks(Pe,oe)})}else if(je&&!ta(y))dr();else if(!je){let ue=Math.abs(L-R),be=Math.abs(G-N);ue>20&&be>20&&T({id:Date.now().toString(),x:ye,y:Re,clientY:y.clientY,element:"Area selection",elementPath:`region at (${Math.round(R)}, ${Math.round(N)})`,boundingBox:{x:R,y:N+window.scrollY,width:ue,height:be},isMultiSelect:!0})}Xe(null)}else w&&(sr.current=!0);ma.current=null,ll.current=null,_d(!1),Za.current&&(Za.current.innerHTML="")};return Z.addEventListener("mouseup",f),()=>Z.removeEventListener("mouseup",f)},[O,Pl,q,ae,Jl,oe,Dn,dr]);let Rl=(0,C.useCallback)(async(f,y,w)=>{let E=at.webhookUrl||z;if(!E||!at.webhooksEnabled&&!w)return!1;try{return(await fetch(E,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({event:f,timestamp:Date.now(),url:typeof window<"u"?window.location.href:void 0,...y})})).ok}catch(R){return console.warn("[Agentation] Webhook failed:",R),!1}},[z,at.webhookUrl,at.webhooksEnabled]),P5=(0,C.useCallback)(f=>{if(!q||q.isSubmitted)return;let y={id:q.id,x:q.x,y:q.y,comment:f,element:q.element,elementPath:q.elementPath,timestamp:Date.now(),selectedText:q.selectedText,boundingBox:q.boundingBox,nearbyText:q.nearbyText,cssClasses:q.cssClasses,isMultiSelect:q.isMultiSelect,isFixed:q.isFixed,fullPath:q.fullPath,accessibility:q.accessibility,computedStyles:q.computedStyles,nearbyElements:q.nearbyElements,reactComponents:q.reactComponents,sourceFile:q.sourceFile,attributes:q.attributes,frame:q.frame,elementBoundingBoxes:q.elementBoundingBoxes,...S&&en?{sessionId:en,url:typeof window<"u"?window.location.href:void 0,status:"pending"}:{}};pl(w=>[...w,y]),T({...q,isSubmitted:!0}),wl.current=y.id,v?.(y),Rl("annotation.add",{annotation:y}),ir(!0),window.getSelection()?.removeAllRanges(),S&&en&&he(async()=>{let w=await Ye(S,en,y);if(l){let E=ea(e);fh(e,E.map(R=>R.id===y.id?{...R,id:w.id}:R),en)}!se.current||Ue.current.has(y.id)||w.id!==y.id&&(Os.current.set(w.id,y.id),wl.current===y.id&&(wl.current=w.id),pl(E=>E.map(R=>R.id===y.id?{...R,id:w.id}:R)),fa.current.delete(y.id)&&fa.current.add(w.id))}).catch(w=>{console.warn("[Agentation] Failed to sync annotation:",w)})},[q,v,Rl,S,en,he,e,l]),bd=(0,C.useCallback)(()=>{ir(!0)},[]),xd=(0,C.useCallback)(()=>{T(null),ir(!1)},[]),vd=(0,C.useCallback)(f=>{if(Ue.current.has(f))return;Ue.current.add(f);let y=De.find(w=>w.id===f);ae?.id===f&&(Zl(!1),Fa(!0)),Bs(w=>new Set(w).add(f)),y&&(k?.(y),Rl("annotation.delete",{annotation:y})),S&&he(()=>$u(S,Dt.current.get(f)??f)).catch(w=>{console.warn("[Agentation] Failed to delete annotation from server:",w)})},[De,ae,k,Rl,S,he]),qs=(0,C.useCallback)(f=>{if(!f){Ne(null),Ct(null),Be([]);return}if(Ne(f.id),f.elementBoundingBoxes?.length){let y=[];for(let w of f.elementBoundingBoxes){let E=w.x+w.width/2,R=w.y+w.height/2-window.scrollY,N=Du(E,R,w);N&&y.push(N)}Be(y),Ct(null)}else if(f.boundingBox){let y=f.boundingBox,w=y.x+y.width/2,E=f.isFixed?y.y+y.height/2:y.y+y.height/2-window.scrollY,R=Du(w,E,y);if(R){let N=Pt(R),L=N.width/y.width,G=N.height/y.height;L<.5||G<.5?Ct(null):Ct(R)}else Ct(null);Be([])}else Ct(null),Be([])},[]),e2=(0,C.useCallback)(f=>{if(!ae)return;let y={...ae,comment:f};Yn(y),pl(w=>w.map(E=>E.id===ae.id?y:E)),A?.(y),Rl("annotation.update",{annotation:y}),S&&he(()=>gh(S,Dt.current.get(ae.id)??ae.id,{comment:f})).catch(w=>{console.warn("[Agentation] Failed to update annotation on server:",w)}),Zl(yn.current||!!Nn.current?.matches(":hover")),Fa(!0)},[ae,A,Rl,S,he]),t2=(0,C.useCallback)(()=>{Zl(yn.current||!!Nn.current?.matches(":hover")),Fa(!0)},[]),n2=(0,C.useCallback)(()=>{Al&&ae&&!q&&Ne(ae.id),Yn(null),Pn(null),tr([]),Fa(!1)},[Al,ae,q]),Is=(0,C.useCallback)((f,y)=>{if(!f.length&&!y)return;we(!0);let w={placements:[...Wa.current.placements,...f],rearrange:y??Wa.current.rearrange};Wa.current=w,e0(w.placements),t0(w.rearrange),clearTimeout(ht.current),ht.current=rt(()=>{Kl(E=>E.filter(R=>!w.placements.includes(R))),Nl(E=>E===w.rearrange?null:E),Wa.current={placements:[],rearrange:null},e0([]),t0(null),ht.current=void 0,lt()},200)},[lt]),ga=(0,C.useCallback)(()=>{if(!se.current)return;let f=new Map(Us.current.map(G=>[G.id,G])),y=[];for(let G of De){let de=f.get(Dt.current.get(G.id)??G.id)??f.get(G.id);de&&de.comment===G.comment&&!Ue.current.has(de.id)&&!y.includes(de)&&y.push(de)}let w=y.length,E=n0.current,R=He.filter(G=>E.designPlacements.includes(G)&&!Wa.current.placements.includes(G)),N=me===E.rearrangeState&&me!==Wa.current.rearrange?me:null,L=vl.filter(G=>rd.current.includes(G));if(!(w===0&&L.length===0&&R.length===0&&!N)){for(let G of y)Ue.current.add(G.id),ze.current.add(G.id),ct.current.add(G.id);if(Bs(G=>new Set([...G,...y.map(de=>de.id)])),M?.(y),Rl("annotations.clear",{annotations:y}),S&&Promise.all(y.map(G=>he(()=>$u(S,Dt.current.get(G.id)??G.id)).catch(de=>{console.warn("[Agentation] Failed to delete annotation from server:",de)}))),we(!0),Q5(G=>G.filter(de=>!L.includes(de))),L.length>0&&L.length===rd.current.length){let G=sd.current;G?.getContext("2d")?.clearRect(0,0,G.width,G.height)}Is(R,N),At===E.blankCanvas&&xn===E.wireframePurpose&&He===E.designPlacements&&me===E.rearrangeState&&(At&&Fh(!1),xn&&Ds(""),ca.current={rearrange:null,placements:[]},Bu(e)),lt()}},[e,De,vl,He,me,At,xn,M,Rl,S,he,lt,Is]),wd=(0,C.useCallback)(async()=>{let f=X.start(),y=typeof window<"u"?window.location.pathname+window.location.search+window.location.hash:e,w=Je&&At,E;if(w){if(He.length===0&&!me&&!xn)return;E=o?qu(y,o):""}else{if(E=Vy(De,y,at.outputDetail,{appName:o}),!E&&vl.length===0&&He.length===0&&!me)return;E||(E=qu(y,o))}if(!w&&vl.length>0){let N=new Set;for(let pe of De)pe.drawingIndex!=null&&N.add(pe.drawingIndex);let L=sd.current;L&&(L.style.visibility="hidden");let G=[],de=window.scrollY;for(let pe=0;pe<vl.length;pe++){if(N.has(pe))continue;let ge=vl[pe];if(ge.points.length<2)continue;let ye=ge.fixed?ge.points:ge.points.map(Gt=>({x:Gt.x,y:Gt.y-de})),Re=1/0,je=1/0,ue=-1/0,be=-1/0;for(let Gt of ye)Re=Math.min(Re,Gt.x),je=Math.min(je,Gt.y),ue=Math.max(ue,Gt.x),be=Math.max(be,Gt.y);let Me=ue-Re,Pe=be-je,Rt=Math.hypot(Me,Pe),Sn=ye[0],Ee=ye[ye.length-1],ke=Math.hypot(Ee.x-Sn.x,Ee.y-Sn.y),it,jt=ke<Rt*.35,zl=Me/Math.max(Pe,1);if(jt&&Rt>20){let Gt=Math.max(Me,Pe)*.15,Co=0;for(let pa of ye){let o2=pa.x-Re<Gt,a2=ue-pa.x<Gt,i2=pa.y-je<Gt,r2=be-pa.y<Gt;(o2||a2)&&(i2||r2)&&Co++}it=Co>ye.length*.15?"box":"circle"}else zl>3&&Pe<40?it="underline":ke>Rt*.5?it="arrow":it="drawing";let kl=Math.min(10,ye.length),fr=Math.max(1,Math.floor(ye.length/kl)),Vs=new Set,un=[],hr=[Sn];for(let Gt=fr;Gt<ye.length-1;Gt+=fr)hr.push(ye[Gt]);hr.push(Ee);for(let Gt of hr){let Co=Xu(Gt.x,Gt.y);if(!Co||Vs.has(Co)||pn(Co,"[data-feedback-toolbar]"))continue;Vs.add(Co);let{name:pa}=Gi(Co);un.includes(pa)||un.push(pa)}let Fs=`${Math.round(Re)},${Math.round(je)} \u2192 ${Math.round(ue)},${Math.round(be)}`,Ja;(it==="circle"||it==="box")&&un.length>0?Ja=`${it==="box"?"Boxed":"Circled"} **${un[0]}**${un.length>1?` (and ${un.slice(1).join(", ")})`:""} (region: ${Fs})`:it==="underline"&&un.length>0?Ja=`Underlined **${un[0]}** (${Fs})`:it==="arrow"&&un.length>=2?Ja=`Arrow from **${un[0]}** to **${un[un.length-1]}** (${Math.round(Sn.x)},${Math.round(Sn.y)} \u2192 ${Math.round(Ee.x)},${Math.round(Ee.y)})`:un.length>0?Ja=`${it==="arrow"?"Arrow":"Drawing"} near **${un.join("**, **")}** (region: ${Fs})`:Ja=`Drawing at ${Fs}`,G.push(Ja)}L&&(L.style.visibility=""),G.length>0&&(E+=`
**Drawings:**
`,G.forEach((pe,ge)=>{E+=`${ge+1}. ${pe}
`}))}if((He.length>0||w&&xn)&&(E+=`
`+jy(He,{width:window.innerWidth,height:window.innerHeight},{blankCanvas:At,wireframePurpose:xn||void 0},at.outputDetail)),me){let N=Xy(me,at.outputDetail,{width:window.innerWidth,height:window.innerHeight});N&&(E+=`
`+N)}if(E=Fy(De,E,r),!E){U(!1);return}let R=!g||await g6(E);p?.(E),X.isCurrent(f)&&(U(R),R&&(X.schedule(f,()=>U(!1),2e3),at.autoClearAfterCopy&&X.schedule(f,ga,500)))},[De,vl,He,me,At,Je,Jh,xn,e,at.outputDetail,Jl,oe,at.autoClearAfterCopy,ga,X,g,r,o,p]),kd=n5(at.webhookUrl)||n5(z||""),Ll=x!=null||kd&&!at.webhooksEnabled,Qs=O?Ll?337:297:44,Sd=(0,C.useCallback)(async()=>{let f=P.start(),y=typeof window<"u"?window.location.href:e,w=typeof window<"u"?window.location.pathname+window.location.search+window.location.hash:e,E=Vy(De,w,at.outputDetail,{appName:o});if(!E&&He.length===0&&!me)return;if(E||(E=qu(w,o)),He.length>0&&(E+=`
`+jy(He,{width:window.innerWidth,height:window.innerHeight},{blankCanvas:At,wireframePurpose:xn||void 0},at.outputDetail)),me){let G=Xy(me,at.outputDetail,{width:window.innerWidth,height:window.innerHeight});G&&(E+=`
`+G)}Q("sending");let R=!0;try{await x?.(E,De)}catch(G){console.warn("[Agentation] Submit callback failed:",G),R=!1}if(!P.isCurrent(f))return;let N=kd?await Rl("submit",{output:E,annotations:De,url:y},!0):!0,L=R&&N&&Ll;P.isCurrent(f)&&(Q(L?"sent":"failed"),P.schedule(f,()=>Q("idle"),2500),L&&at.autoClearAfterCopy&&P.schedule(f,ga,500))},[x,o,Rl,De,He,me,At,Jh,e,at.outputDetail,Jl,oe,at.autoClearAfterCopy,ga,kd,Ll,P]);(0,C.useEffect)(()=>{let y=(N=!1)=>{ar.current?.dragging&&(zs.current=N,f0(!1)),ar.current=null},w=N=>{let L=ar.current;if(!L)return;if((N.buttons&1)===0){y();return}let G=N.clientX-L.x,de=N.clientY-L.y,pe=Math.sqrt(G*G+de*de);if(!L.dragging&&pe>10&&(L.dragging=!0,f0(!0)),L.dragging){let ge=L.toolbarX+G,ye=L.toolbarY+de,Re=20,je=337,ue=44,Me=je-Qs,Pe=Re-Me,Rt=window.innerWidth-Re-je;ge=Math.max(Pe,Math.min(Rt,ge)),ye=Math.max(Re,Math.min(window.innerHeight-ue-Re,ye)),dd({x:ge,y:ye})}},E=()=>y(!0),R=()=>y();return Z.addEventListener("mousemove",w),Z.addEventListener("mouseup",E,!0),window.addEventListener("blur",R),()=>{Z.removeEventListener("mousemove",w),Z.removeEventListener("mouseup",E,!0),window.removeEventListener("blur",R)}},[Qs]);let l2=(0,C.useCallback)(f=>{if(zs.current=!1,ar.current=null,f.button!==0||f.target.closest("button")&&(f.target.closest("button")!==yl.current||O)||f.target.closest("[data-agentation-settings-panel]"))return;let y=f.currentTarget.parentElement;if(!y)return;let w=Pt(y);ar.current={x:f.clientX,y:f.clientY,toolbarX:w.left,toolbarY:w.top,dragging:!1}},[O]);(0,C.useLayoutEffect)(()=>{if(!Yt)return;let f=()=>{let R=Yt.x,N=Yt.y,de=20-(337-Qs),pe=window.innerWidth-20-337;R=Math.max(de,Math.min(pe,R)),N=Math.max(20,Math.min(window.innerHeight-44-20,N)),(R!==Yt.x||N!==Yt.y)&&dd({x:R,y:N})};return f(),window.addEventListener("resize",f),()=>window.removeEventListener("resize",f)},[Yt,Qs]),(0,C.useEffect)(()=>{if(!a)return;let f=w=>{if(w.defaultPrevented||w.isComposing||w.altKey)return;let E=w.composedPath()[0]||w.target,R=E.tagName==="INPUT"||E.tagName==="TEXTAREA"||E.tagName==="SELECT"||E.isContentEditable;if(w.key==="Escape"){if(d&&!q&&!ae&&(O||bn||Je||tl||Dn.length)&&(w.preventDefault(),w.stopPropagation()),bn){w.preventDefault(),ia(!1),oa.current?.focus();return}if(Je){qa?sa(null):ur();return}if(tl){id(!1);return}if(Dn.length>0){ko([]);return}q||ae||O&&(vn(),Ys())}if((w.metaKey||w.ctrlKey)&&w.shiftKey&&(w.key==="f"||w.key==="F")){w.preventDefault(),vn(),O?Ys():(yl.current?.blur(),Jn.current=!0,F(!0));return}!O||R||w.metaKey||w.ctrlKey||w.repeat||((w.key==="p"||w.key==="P")&&(w.preventDefault(),vn(),yd()),(w.key==="l"||w.key==="L")&&(w.preventDefault(),vn(),tl&&id(!1),bn&&ia(!1),q&&bd(),Je?ur():pd()),(w.key==="h"||w.key==="H")&&De.length>0&&(w.preventDefault(),vn(),vo(N=>!N)),(w.key==="c"||w.key==="C")&&(De.length>0||He.length>0||me)&&(w.preventDefault(),vn(),wd()),(w.key==="x"||w.key==="X")&&(De.length>0||He.length>0||me)&&(w.preventDefault(),vn(),ga(),He.length>0&&Kl([]),me&&Nl(null)),(w.key==="s"||w.key==="S")&&De.length>0&&Ll&&ee==="idle"&&(w.preventDefault(),vn(),Sd()))},y=!!d;return Z.addEventListener("keydown",f,y),()=>Z.removeEventListener("keydown",f,y)},[a,d,ae,O,tl,Je,qa,He,me,q,De.length,Ll,ee,Sd,yd,wd,ga,Dn,bn,Ys,pd,ur]);let _r=De.length>0,Ws=fv(),Gs=De.filter(f=>f.kind!=="placement"&&f.kind!=="rearrange"),x0=Gs.flatMap((f,y)=>{let w=Ws(f);return w?[{annotation:w,index:y}]:[]}),v0=q&&!q.isSubmitted?Ws({...q,comment:"",timestamp:0}):null,w0=[...fe?x0.map(f=>({...f,pending:!1})):[],...v0?[{annotation:v0,index:Gs.length,pending:!0}]:[]];(0,C.useEffect)(()=>{let f=new Set(fe&&!wo?x0.map(({annotation:y})=>y.id):[]);wl.current&&!f.has(wl.current)&&(wl.current=null);for(let y of So)f.has(y)||md(y)}),(0,C.useEffect)(()=>{ae&&So.has(ae.id)&&(Zl(!1),Fa(!0))},[ae,So]);let k0=(0,C.useCallback)(f=>{!Ce&&f.id!==wl.current&&qs(f)},[Ce,qs]),S0=(0,C.useCallback)(f=>{qe===f&&qs(null)},[qe,qs]),C0=(0,C.useCallback)((f,y)=>{if(ae&&!ha){$s.current?.shake();return}nl&&xd(),at.markerClickBehavior==="delete"?vd(f.id):Xs(f,y)},[at.markerClickBehavior,vd,Xs,nl,xd,ae,ha]),ol=ae??(Hs&&!q&&!ce?De.find(f=>f.id===qe&&!So.has(f.id)):null),M0=el?"Resume animations":"Pause animations",E0=Je?"Exit layout mode":"Layout mode",T0=Ql?"Hide markers":"Show markers",A0=r!=="markdown"&&!Fy(De,"",r),N0=typeof r=="object"?`Copy ${r.attribute}`:r==="source"?"Copy source paths":r==="classes"?"Copy classes":Je&&At?"Copy layout":"Copy feedback",Ka=O?0:-1;return!ut||wo?null:(0,I.jsxs)(Dv,{host:"agentation-toolbar",className:K,children:[(0,I.jsxs)("style",{"data-agentation-styles":"toolbar",children:[D6,L6]}),(0,I.jsxs)("div",{ref:It,className:Y.positionContext,style:{display:"contents"},"data-agentation-theme":Dl?"dark":"light","data-agentation-accent":at.annotationColorId,"data-agentation-root":"",children:[(0,I.jsx)("div",{className:Y.toolbar,"data-feedback-toolbar":!0,"data-agentation-toolbar":!0,"data-dragging":Ls||void 0,style:Yt?{left:Yt.x,top:Yt.y,right:"auto",bottom:"auto"}:void 0,children:(0,I.jsxs)("div",{className:`${Y.toolbarContainer} ${O?Y.expanded:Y.collapsed} ${c0?Y.entrance:""} ${Gl?Y.hiding:""} ${Ll?Y.serverConnected:""}`,onMouseDown:l2,children:[(0,I.jsxs)("div",{className:`${Y.controlsContent} ${O?Y.visible:Y.hidden} ${Yt&&Yt.y<100?Y.tooltipBelow:""} ${Vh||bn?Y.tooltipsHidden:""} ${cd?Y.tooltipsInSession:""}`,ref:f=>{Tl.current=f,f?.toggleAttribute("inert",!O)},role:"group","aria-label":"Feedback controls","aria-hidden":!O,onMouseEnter:i0,onMouseLeave:r0,children:[(0,I.jsxs)("div",{className:`${Y.buttonWrapper} ${Yt&&Yt.x<120?Y.buttonWrapperAlignLeft:""}`,children:[(0,I.jsx)("button",{className:Y.controlButton,onClick:f=>{f.stopPropagation(),vn(),yd()},"data-active":el,"aria-label":M0,"aria-pressed":el,tabIndex:Ka,children:(0,I.jsx)($v,{size:24,isPaused:el})}),(0,I.jsxs)("span",{className:Y.buttonTooltip,children:[M0,a&&(0,I.jsx)("span",{className:Y.shortcut,children:"P"})]})]}),(0,I.jsxs)("div",{className:Y.buttonWrapper,children:[(0,I.jsx)("button",{className:`${Y.controlButton} ${Dl?"":Y.light}`,onClick:f=>{f.stopPropagation(),vn(),tl&&id(!1),bn&&ia(!1),q&&bd(),Je?ur():pd()},"data-active":Je,"aria-label":E0,"aria-pressed":Je,tabIndex:Ka,style:Je&&At?{color:"#f97316",background:"rgba(249, 115, 22, 0.25)"}:void 0,children:(0,I.jsx)(Qv,{size:21})}),(0,I.jsxs)("span",{className:Y.buttonTooltip,children:[E0,a&&(0,I.jsx)("span",{className:Y.shortcut,children:"L"})]})]}),(0,I.jsxs)("div",{className:Y.buttonWrapper,children:[(0,I.jsx)("button",{className:Y.controlButton,onClick:f=>{f.stopPropagation(),vn(),vo(!Ql)},disabled:!_r||Je,"aria-label":T0,tabIndex:Ka,children:(0,I.jsx)(Bv,{size:24,isOpen:Ql})}),(0,I.jsxs)("span",{className:Y.buttonTooltip,children:[T0,a&&(0,I.jsx)("span",{className:Y.shortcut,children:"H"})]})]}),(0,I.jsxs)("div",{className:Y.buttonWrapper,children:[(0,I.jsx)("button",{className:`${Y.controlButton} ${D?Y.statusShowing:""}`,onClick:f=>{f.stopPropagation(),vn(),wd()},disabled:A0||(Je&&At?He.length===0&&!me?.sections?.length:!_r&&vl.length===0&&He.length===0&&!me?.sections?.length),"data-active":D,"aria-label":N0,tabIndex:Ka,children:(0,I.jsx)(zv,{size:24,copied:D,tint:Je&&At&&(He.length>0||me?.sections?.length)?"#f97316":void 0})}),(0,I.jsxs)("span",{className:Y.buttonTooltip,children:[A0?"No matching metadata":N0,a&&(0,I.jsx)("span",{className:Y.shortcut,children:"C"})]})]}),(0,I.jsxs)("div",{className:`${Y.buttonWrapper} ${Y.sendButtonWrapper} ${O&&Ll?Y.sendButtonVisible:""}`,children:[(0,I.jsxs)("button",{className:`${Y.controlButton} ${ee==="sent"||ee==="failed"?Y.statusShowing:""}`,onClick:f=>{f.stopPropagation(),vn(),Sd()},disabled:!_r||!Ll||ee==="sending","data-no-hover":ee==="sent"||ee==="failed",tabIndex:O&&Ll?0:-1,"aria-label":"Send Annotations","aria-hidden":!Ll,children:[(0,I.jsx)(Ov,{size:24,state:ee}),_r&&ee==="idle"&&(0,I.jsx)("span",{className:Y.buttonBadge,children:De.length})]}),(0,I.jsxs)("span",{className:Y.buttonTooltip,children:["Send Annotations",a&&(0,I.jsx)("span",{className:Y.shortcut,children:"S"})]})]}),(0,I.jsxs)("div",{className:Y.buttonWrapper,children:[(0,I.jsx)("button",{className:Y.controlButton,onClick:f=>{f.stopPropagation(),vn(),ga()},disabled:!_r&&vl.length===0&&He.length===0&&!me?.sections?.length,"data-danger":!0,"aria-label":"Clear all",tabIndex:Ka,children:(0,I.jsx)(Uv,{size:24})}),(0,I.jsxs)("span",{className:Y.buttonTooltip,children:["Clear all",a&&(0,I.jsx)("span",{className:Y.shortcut,children:"X"})]})]}),(0,I.jsxs)("div",{className:Y.buttonWrapper,children:[(0,I.jsx)("button",{ref:oa,"aria-label":"Settings","aria-expanded":bn,tabIndex:Ka,className:Y.controlButton,onClick:f=>{f.stopPropagation(),vn(),Je&&ur(),V.current=!bn&&f.detail===0,ia(!bn)},children:(0,I.jsx)(Hv,{size:24})}),S&&da!=="disconnected"&&(0,I.jsx)("span",{className:`${Y.mcpIndicator} ${Y[da]} ${bn?Y.hidden:""}`,title:da==="connected"?"MCP Connected":"MCP Connecting..."}),(0,I.jsx)("span",{className:Y.buttonTooltip,children:"Settings"})]}),(0,I.jsx)("div",{className:Y.divider}),(0,I.jsx)("div",{className:Y.togglePlaceholder,"aria-hidden":"true"})]}),(0,I.jsxs)("div",{className:`${Y.buttonWrapper} ${Y.toggleWrapper} ${Yt&&Yt.y<100?Y.tooltipBelow:""} ${!O||Vh||bn?Y.tooltipsHidden:""} ${cd?Y.tooltipsInSession:""} ${Yt&&typeof window<"u"&&Yt.x>window.innerWidth-120?Y.buttonWrapperAlignRight:""}`,onMouseEnter:i0,onMouseLeave:r0,children:[(0,I.jsx)("button",{ref:yl,type:"button",className:`${Y.toggleContent} ${O?Y.expandedToggle:""}`,"aria-label":O?"Exit":"Start feedback mode","aria-expanded":O,"aria-keyshortcuts":a?"Meta+Shift+F Control+Shift+F":void 0,title:O?void 0:a?"Start feedback mode (\u2318\u21E7F / Ctrl+Shift+F)":"Start feedback mode",onClick:f=>{if(zs.current){zs.current=!1,f.preventDefault();return}f.stopPropagation(),O?(vn(),Ys()):(f.currentTarget.blur(),Jn.current=f.detail===0,F(!0))},children:(0,I.jsxs)("span",{className:Y.toggleIcon,children:[(0,I.jsx)(Fv,{active:O}),Gs.length>0&&(0,I.jsx)("span",{className:`${Y.badge} ${O?Y.fadeOut:""} ${c0?Y.entrance:""}`,children:Gs.length})]})}),(0,I.jsxs)("span",{className:Y.buttonTooltip,"aria-hidden":!O,children:["Exit",a&&(0,I.jsx)("span",{className:Y.shortcut,children:"Esc"})]})]}),(0,I.jsx)(g4,{visible:Je&&O,activeType:qa,onSelect:f=>{sa(qa===f?null:f)},isDarkMode:Dl,sectionCount:me?.sections.length??0,onDetectSections:()=>{let f=x4(),y=me?.sections??[],w=new Set(y.map(L=>L.selector)),E=f.filter(L=>!w.has(L.selector)),R=[...y,...E],N=[...me?.originalOrder??[],...E.map(L=>L.id)];Nl({sections:R,originalOrder:N,detectedAt:Date.now()})},placementCount:He.length,onClearPlacements:()=>{Is(He,me)},blankCanvas:At,onBlankCanvasChange:f=>{let y={sections:[],originalOrder:[],detectedAt:Date.now()};f?(nd.current={rearrange:me,placements:He},Nl(ca.current.rearrange||y),Kl(ca.current.placements),sa(null)):(ca.current={rearrange:me,placements:He},Nl(nd.current.rearrange||y),Kl(nd.current.placements)),Fh(f)},wireframePurpose:xn,onWireframePurposeChange:Ds,Tooltip:Ua,onDragStart:(f,y)=>{y.preventDefault();let w=ne[f],E=null,R=!1,N=y.clientX,L=y.clientY,de=y.target.closest("[data-feedback-toolbar]")?.getBoundingClientRect().top??window.innerHeight,pe=ye=>{let Re=ye.clientX-N,je=ye.clientY-L;if(!R&&(Math.abs(Re)>4||Math.abs(je)>4)&&(R=!0,E=document.createElement("div"),E.className=`${$.dragPreview}${At?` ${$.dragPreviewWireframe}`:""}`,It.current?.appendChild(E)),!E)return;let ue=Math.max(0,de-ye.clientY),be=Math.min(1,ue/180),Me=1-Math.pow(1-be,2),Pe=28,Rt=20,Sn=Math.min(140,w.width*.18),Ee=Math.min(90,w.height*.18),ke=Pe+(Sn-Pe)*Me,it=Rt+(Ee-Rt)*Me;E.style.width=`${ke}px`,E.style.height=`${it}px`,E.style.left=`${ye.clientX-ke/2}px`,E.style.top=`${ye.clientY-it/2}px`,E.style.opacity=`${.5+.5*Me}`,E.textContent=Me>.25?f:""},ge=ye=>{if(window.removeEventListener("mousemove",pe),window.removeEventListener("mouseup",ge),E&&E.remove(),R){let Re=w.width,je=w.height,ue=window.scrollY,be=Math.max(0,ye.clientX-Re/2),Me=Math.max(0,ye.clientY+ue-je/2),Pe={id:`dp-${Date.now()}-${Math.random().toString(36).slice(2,7)}`,type:f,x:be,y:Me,width:Re,height:je,scrollY:ue,timestamp:Date.now()};Kl(Rt=>[...Rt,Pe]),sa(null),lr.current=new Set,Ph(Rt=>Rt+1)}};window.addEventListener("mousemove",pe),window.addEventListener("mouseup",ge)}}),(0,I.jsx)(T6,{settings:at,onSettingsChange:V5,isDarkMode:Dl,onToggleTheme:F5,isDevMode:d0,connectionStatus:da,endpoint:S,onExited:K5,isOpen:O&&bn,toolbarNearBottom:!!Yt&&Yt.y<230,settingsPage:H5,onSettingsPageChange:Gh,onHideToolbar:J5})]})}),(Je||ra)&&(0,I.jsx)("div",{className:`${$.blankCanvas} ${Zh?$.visible:""} ${Y5?$.gridActive:""}`,style:{"--canvas-opacity":Kh},"data-feedback-toolbar":!0}),Je&&At&&Zh&&(0,I.jsxs)("div",{className:$.wireframeNotice,"data-feedback-toolbar":!0,children:[(0,I.jsxs)("div",{className:$.wireframeOpacityRow,children:[(0,I.jsx)("span",{className:$.wireframeOpacityLabel,children:"Toggle Opacity"}),(0,I.jsx)("input",{type:"range",className:$.wireframeOpacitySlider,min:0,max:1,step:.01,value:Kh,onChange:f=>U5(Number(f.target.value))})]}),(0,I.jsxs)("div",{className:$.wireframeNoticeTitleRow,children:[(0,I.jsx)("span",{className:$.wireframeNoticeTitle,children:"Wireframe Mode"}),(0,I.jsx)("span",{className:$.wireframeNoticeDivider}),(0,I.jsx)("button",{className:$.wireframeStartOver,onClick:()=>{Is(He,me),ca.current={rearrange:null,placements:[]},Ds(""),Bu(e)},children:"Start Over"})]}),"Drag components onto the canvas.",(0,I.jsx)("br",{}),"Copied output will only include the wireframed layout."]}),(Je||ra)&&(0,I.jsx)(d4,{placements:He,onChange:Kl,activeComponent:ra?null:qa,onActiveComponentChange:sa,isDarkMode:Dl,exiting:ra,onInteractionChange:j5,passthrough:!qa,extraSnapRects:me?.sections.map(f=>f.currentRect),deselectSignal:X5,clearingPlacements:Ia,wireframe:At,onSelectionChange:(f,y)=>{lr.current=f,y||(Rs.current=new Set,I5(w=>w+1))},onDragMove:(f,y)=>{let w=Rs.current;if(!(!w.size||!me)){if(!xl.current){xl.current=new Map;for(let E of me.sections)w.has(E.id)&&xl.current.set(E.id,{x:E.currentRect.x,y:E.currentRect.y})}for(let E of me.sections){if(!w.has(E.id)||!xl.current.get(E.id))continue;let N=It.current?.querySelector(`[data-rearrange-section="${E.id}"]`);N&&(N.style.transform=`translate(${f}px, ${y}px)`)}}},onDragEnd:(f,y,w)=>{let E=Rs.current,R=xl.current;if(xl.current=null,!(!E.size||!me||!R)){for(let N of E){let L=It.current?.querySelector(`[data-rearrange-section="${N}"]`);L&&(L.style.transform="")}w&&Nl(N=>N&&{...N,sections:N.sections.map(L=>{let G=R.get(L.id);return G?{...L,currentRect:{...L.currentRect,x:Math.max(0,G.x+f),y:Math.max(0,G.y+y)}}:L})})}}}),(Je||ra)&&me&&(0,I.jsx)(k4,{rearrangeState:me,onChange:Nl,isDarkMode:Dl,exiting:ra,blankCanvas:At,extraSnapRects:He.map(f=>({x:f.x,y:f.y,width:f.width,height:f.height})),clearing:me===Qa,deselectSignal:q5,onSelectionChange:(f,y)=>{Rs.current=f,y||(lr.current=new Set,Ph(w=>w+1))},onDragMove:(f,y)=>{let w=lr.current;if(w.size){if(!xl.current){xl.current=new Map;for(let E of He)w.has(E.id)&&xl.current.set(E.id,{x:E.x,y:E.y})}for(let E of w){let R=It.current?.querySelector(`[data-design-placement="${E}"]`);R&&(R.style.transform=`translate(${f}px, ${y}px)`)}}},onDragEnd:(f,y,w)=>{let E=lr.current,R=xl.current;if(xl.current=null,!(!E.size||!R)){for(let N of E){let L=It.current?.querySelector(`[data-design-placement="${N}"]`);L&&(L.style.transform="")}w&&Kl(N=>N.map(L=>{let G=R.get(L.id);return G?{...L,x:Math.max(0,G.x+f),y:Math.max(0,G.y+y)}:L}))}}}),(0,I.jsx)("canvas",{ref:sd,className:`${Y.drawCanvas} ${tl?Y.active:""}`,"aria-hidden":"true",style:{opacity:Hs?1:0,transition:"opacity 0.15s ease"},"data-feedback-toolbar":!0}),(0,I.jsx)("div",{className:Y.markersLayer,"data-feedback-toolbar":!0,children:w0.filter(({annotation:f})=>!f.isFixed).map(({annotation:f,index:y,pending:w},E,R)=>(0,I.jsx)(Jy,{annotation:f,pending:w,globalIndex:y,layerIndex:E,layerSize:R.length,isExiting:w?nl:Ce,isClearing:ze.current.has(f.id),isAnimated:fa.current.has(f.id),isNew:wl.current===f.id,onEnterComplete:h0,isHovered:!Ce&&qe===f.id,isRemoving:So.has(f.id),onRemoveComplete:md,isEditingAny:!!ae,renumberFrom:ot,markerClickBehavior:at.markerClickBehavior,onHoverEnter:k0,onHoverLeave:S0,onClick:C0,onContextMenu:Xs},Os.current.get(f.id)??f.id))}),(0,I.jsx)("div",{className:Y.fixedMarkersLayer,"data-feedback-toolbar":!0,children:w0.filter(({annotation:f})=>f.isFixed).map(({annotation:f,index:y,pending:w},E,R)=>(0,I.jsx)(Jy,{annotation:f,pending:w,globalIndex:y,layerIndex:E,layerSize:R.length,isExiting:w?nl:Ce,isClearing:ze.current.has(f.id),isAnimated:fa.current.has(f.id),isNew:wl.current===f.id,onEnterComplete:h0,isHovered:!Ce&&qe===f.id,isRemoving:So.has(f.id),onRemoveComplete:md,isEditingAny:!!ae,renumberFrom:ot,markerClickBehavior:at.markerClickBehavior,onHoverEnter:k0,onHoverLeave:S0,onClick:C0,onContextMenu:Xs},Os.current.get(f.id)??f.id))}),O&&nt&&!q&&!ae&&!Ih&&!Pl&&(0,I.jsx)(A6,{x:Ke.x,y:Ke.y,elementName:nt.elementName,reactComponents:nt.reactComponents}),O&&(0,I.jsxs)("div",{className:Y.overlay,"data-feedback-toolbar":!0,style:q||ae?{zIndex:"inherit"}:void 0,children:[nt?.rect&&!q&&!Ih&&!Pl&&(0,I.jsx)("div",{className:`${Y.hoverHighlight} ${Y.enter}`,style:{left:nt.rect.left,top:nt.rect.top,width:nt.rect.width,height:nt.rect.height,borderColor:"color-mix(in srgb, var(--agentation-color-accent) 50%, transparent)",backgroundColor:"color-mix(in srgb, var(--agentation-color-accent) 4%, transparent)",...nt.isPiercing?{borderStyle:"dashed"}:{}}}),Dn.filter(f=>f.element.isConnected).map((f,y)=>{let w=Pt(f.element),E=Dn.length>1;return(0,I.jsx)("div",{className:E?Y.multiSelectOutline:Y.singleSelectOutline,style:{position:"fixed",left:w.left,top:w.top,width:w.width,height:w.height,...E?{}:{borderColor:"color-mix(in srgb, var(--agentation-color-accent) 60%, transparent)",backgroundColor:"color-mix(in srgb, var(--agentation-color-accent) 5%, transparent)"}}},y)}),qe&&!q&&(()=>{let f=De.find(R=>R.id===qe);if(!f?.boundingBox)return null;if(f.elementBoundingBoxes?.length)return mt.length>0?mt.filter(R=>R.isConnected).map((R,N)=>{let L=Pt(R);return(0,I.jsx)("div",{className:`${Y.multiSelectOutline} ${Y.enter}`,style:{left:L.left,top:L.top,width:L.width,height:L.height}},`hover-outline-live-${N}`)}):f.elementBoundingBoxes.map((R,N)=>(0,I.jsx)("div",{className:`${Y.multiSelectOutline} ${Y.enter}`,style:{left:R.x,top:R.y-aa,width:R.width,height:R.height}},`hover-outline-${N}`));let y=Tt&&Tt.isConnected?Pt(Tt):null,w=y?{x:y.left,y:y.top,width:y.width,height:y.height}:{x:f.boundingBox.x,y:f.isFixed?f.boundingBox.y:f.boundingBox.y-aa,width:f.boundingBox.width,height:f.boundingBox.height},E=f.isMultiSelect;return(0,I.jsx)("div",{className:`${E?Y.multiSelectOutline:Y.singleSelectOutline} ${Y.enter}`,style:{left:w.x,top:w.y,width:w.width,height:w.height,...E?{}:{borderColor:"color-mix(in srgb, var(--agentation-color-accent) 60%, transparent)",backgroundColor:"color-mix(in srgb, var(--agentation-color-accent) 5%, transparent)"}}})})(),q&&(0,I.jsxs)(I.Fragment,{children:[q.multiSelectElements?.length?q.multiSelectElements.filter(f=>f.isConnected).map((f,y)=>{let w=Pt(f);return(0,I.jsx)("div",{className:`${Y.multiSelectOutline} ${nl?Y.exit:Y.enter}`,style:{left:w.left,top:w.top,width:w.width,height:w.height}},`pending-multi-${y}`)}):q.targetElement&&q.targetElement.isConnected?(()=>{let f=Pt(q.targetElement);return(0,I.jsx)("div",{className:`${Y.singleSelectOutline} ${nl?Y.exit:Y.enter}`,style:{left:f.left,top:f.top,width:f.width,height:f.height,borderColor:"color-mix(in srgb, var(--agentation-color-accent) 60%, transparent)",backgroundColor:"color-mix(in srgb, var(--agentation-color-accent) 5%, transparent)"}})})():q.boundingBox&&(0,I.jsx)("div",{className:`${q.isMultiSelect?Y.multiSelectOutline:Y.singleSelectOutline} ${nl?Y.exit:Y.enter}`,style:{left:q.boundingBox.x,top:q.boundingBox.y-aa,width:q.boundingBox.width,height:q.boundingBox.height,...q.isMultiSelect?{}:{borderColor:"color-mix(in srgb, var(--agentation-color-accent) 60%, transparent)",backgroundColor:"color-mix(in srgb, var(--agentation-color-accent) 5%, transparent)"}}}),(()=>{let f=Ws(q)??q,y=f.x,w=f.isFixed?f.y:f.y-aa;return(0,I.jsx)(I.Fragment,{children:(0,I.jsx)($h,{ref:hd,element:q.element,selectedText:q.selectedText,allowEmpty:typeof r=="object"&&!!q.attributes?.[r.attribute],onOpenSource:s&&q.sourceFile?()=>s(q.sourceFile):void 0,computedStyles:q.computedStylesObj,placeholder:typeof r=="object"&&q.attributes?.[r.attribute]?"Add a note (optional)":q.element==="Area selection"?"What should change in this area?":q.isMultiSelect?"Feedback for this group of elements...":"What should change?",onSubmit:P5,onExitComplete:xd,onCancel:bd,isExiting:nl,lightMode:!Dl,accentColor:q.isMultiSelect?"var(--agentation-color-green)":"var(--agentation-color-accent)",style:{left:Math.max(160,Math.min(window.innerWidth-160,y/100*window.innerWidth)),...w>window.innerHeight-290?{bottom:window.innerHeight-w+20}:{top:w+20}}},q.id)})})()]}),ae&&(0,I.jsx)(I.Fragment,{children:ae.elementBoundingBoxes?.length?er.length>0?er.filter(f=>f.isConnected).map((f,y)=>{let w=Pt(f);return(0,I.jsx)("div",{className:`${Y.multiSelectOutline} ${Y.enter}`,style:{left:w.left,top:w.top,width:w.width,height:w.height}},`edit-multi-live-${y}`)}):ae.elementBoundingBoxes.map((f,y)=>(0,I.jsx)("div",{className:`${Y.multiSelectOutline} ${Y.enter}`,style:{left:f.x,top:f.y-aa,width:f.width,height:f.height}},`edit-multi-${y}`)):(()=>{let f=bl&&bl.isConnected?Pt(bl):null,y=f?{x:f.left,y:f.top,width:f.width,height:f.height}:ae.boundingBox?{x:ae.boundingBox.x,y:ae.isFixed?ae.boundingBox.y:ae.boundingBox.y-aa,width:ae.boundingBox.width,height:ae.boundingBox.height}:null;return y?(0,I.jsx)("div",{className:`${ae.isMultiSelect?Y.multiSelectOutline:Y.singleSelectOutline} ${Y.enter}`,style:{left:y.x,top:y.y,width:y.width,height:y.height,...ae.isMultiSelect?{}:{borderColor:"color-mix(in srgb, var(--agentation-color-accent) 60%, transparent)",backgroundColor:"color-mix(in srgb, var(--agentation-color-accent) 5%, transparent)"}}}):null})()}),Pl&&(0,I.jsxs)(I.Fragment,{children:[(0,I.jsx)("div",{ref:rr,className:Y.dragSelection}),(0,I.jsx)("div",{ref:Za,className:Y.highlightsContainer})]})]}),(0,I.jsx)(v6,{ref:$s,annotation:ol?Ws(ol)??ae:null,editing:!!ae,exiting:ha,restorePreview:Al,scrollY:aa,lightMode:!Dl,onExited:n2,editorProps:ol?{element:ol.element,selectedText:ol.selectedText,allowEmpty:typeof r=="object"&&!!ol.attributes?.[r.attribute],onOpenSource:s&&ol.sourceFile?()=>s(ol.sourceFile):void 0,computedStyles:Sv(ol.computedStyles),placeholder:"Edit your feedback...",initialValue:ol.comment,submitLabel:"Save",onSubmit:e2,onCancel:t2,onDelete:()=>vd(ol.id),accentColor:ol.isMultiSelect?"var(--agentation-color-green)":"var(--agentation-color-accent)"}:void 0})]})]})}(()=>{if(!(window.location.hostname==="localhost"||window.location.hostname==="127.0.0.1"))return;function t(){if(document.getElementById("agentation-dev-root"))return;let n=document.createElement("div");n.id="agentation-dev-root",document.body.appendChild(n);let l=window.location.hostname==="127.0.0.1"?"http://127.0.0.1:4747":"http://localhost:4747";(0,B5.createRoot)(n).render(O5.default.createElement(z5,{endpoint:l,appName:"Mayank Agrawal Portfolio",enableKeyboardShortcuts:!0,copyToClipboard:!0}))}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",t):t()})();})();
/*! Bundled license information:

react/cjs/react.production.js:
  (**
   * @license React
   * react.production.js
   *
   * Copyright (c) Meta Platforms, Inc. and affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

scheduler/cjs/scheduler.production.js:
  (**
   * @license React
   * scheduler.production.js
   *
   * Copyright (c) Meta Platforms, Inc. and affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

react-dom/cjs/react-dom.production.js:
  (**
   * @license React
   * react-dom.production.js
   *
   * Copyright (c) Meta Platforms, Inc. and affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

react-dom/cjs/react-dom-client.production.js:
  (**
   * @license React
   * react-dom-client.production.js
   *
   * Copyright (c) Meta Platforms, Inc. and affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

react/cjs/react-jsx-runtime.production.js:
  (**
   * @license React
   * react-jsx-runtime.production.js
   *
   * Copyright (c) Meta Platforms, Inc. and affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)
*/
