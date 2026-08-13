var e=Object.create,t=Object.defineProperty,n=Object.getOwnPropertyDescriptor,r=Object.getOwnPropertyNames,i=Object.getPrototypeOf,a=Object.prototype.hasOwnProperty,o=(e,t)=>()=>(t||(e((t={exports:{}}).exports,t),e=null),t.exports),s=(e,i,o,s)=>{if(i&&typeof i==`object`||typeof i==`function`)for(var c=r(i),l=0,u=c.length,d;l<u;l++)d=c[l],!a.call(e,d)&&d!==o&&t(e,d,{get:(e=>i[e]).bind(null,d),enumerable:!(s=n(i,d))||s.enumerable});return e},c=(n,r,o)=>(o=n==null?{}:e(i(n)),s(r||!n||!n.__esModule||!a.call(n,`default`)?t(o,`default`,{value:n,enumerable:!0}):o,n));(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),t.credentials=e.crossOrigin===`use-credentials`?`include`:e.crossOrigin===`anonymous`?`omit`:`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var l=o((e=>{var t=Symbol.for(`react.transitional.element`),n=Symbol.for(`react.portal`),r=Symbol.for(`react.fragment`),i=Symbol.for(`react.strict_mode`),a=Symbol.for(`react.profiler`),o=Symbol.for(`react.consumer`),s=Symbol.for(`react.context`),c=Symbol.for(`react.forward_ref`),l=Symbol.for(`react.suspense`),u=Symbol.for(`react.memo`),d=Symbol.for(`react.lazy`),f=Symbol.for(`react.activity`),p=Symbol.iterator;function m(e){return typeof e!=`object`||!e?null:(e=p&&e[p]||e[`@@iterator`],typeof e==`function`?e:null)}var h={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},g=Object.assign,_={};function v(e,t,n){this.props=e,this.context=t,this.refs=_,this.updater=n||h}v.prototype.isReactComponent={},v.prototype.setState=function(e,t){if(typeof e!=`object`&&typeof e!=`function`&&e!=null)throw Error(`takes an object of state variables to update or a function which returns an object of state variables.`);this.updater.enqueueSetState(this,e,t,`setState`)},v.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,`forceUpdate`)};function y(){}y.prototype=v.prototype;function b(e,t,n){this.props=e,this.context=t,this.refs=_,this.updater=n||h}var x=b.prototype=new y;x.constructor=b,g(x,v.prototype),x.isPureReactComponent=!0;var S=Array.isArray;function C(){}var w={H:null,A:null,T:null,S:null},T=Object.prototype.hasOwnProperty;function ee(e,n,r){var i=r.ref;return{$$typeof:t,type:e,key:n,ref:i===void 0?null:i,props:r}}function te(e,t){return ee(e.type,t,e.props)}function E(e){return typeof e==`object`&&!!e&&e.$$typeof===t}function D(e){var t={"=":`=0`,":":`=2`};return`$`+e.replace(/[=:]/g,function(e){return t[e]})}var O=/\/+/g;function k(e,t){return typeof e==`object`&&e&&e.key!=null?D(``+e.key):t.toString(36)}function ne(e){switch(e.status){case`fulfilled`:return e.value;case`rejected`:throw e.reason;default:switch(typeof e.status==`string`?e.then(C,C):(e.status=`pending`,e.then(function(t){e.status===`pending`&&(e.status=`fulfilled`,e.value=t)},function(t){e.status===`pending`&&(e.status=`rejected`,e.reason=t)})),e.status){case`fulfilled`:return e.value;case`rejected`:throw e.reason}}throw e}function A(e,r,i,a,o){var s=typeof e;(s===`undefined`||s===`boolean`)&&(e=null);var c=!1;if(e===null)c=!0;else switch(s){case`bigint`:case`string`:case`number`:c=!0;break;case`object`:switch(e.$$typeof){case t:case n:c=!0;break;case d:return c=e._init,A(c(e._payload),r,i,a,o)}}if(c)return o=o(e),c=a===``?`.`+k(e,0):a,S(o)?(i=``,c!=null&&(i=c.replace(O,`$&/`)+`/`),A(o,r,i,``,function(e){return e})):o!=null&&(E(o)&&(o=te(o,i+(o.key==null||e&&e.key===o.key?``:(``+o.key).replace(O,`$&/`)+`/`)+c)),r.push(o)),1;c=0;var l=a===``?`.`:a+`:`;if(S(e))for(var u=0;u<e.length;u++)a=e[u],s=l+k(a,u),c+=A(a,r,i,s,o);else if(u=m(e),typeof u==`function`)for(e=u.call(e),u=0;!(a=e.next()).done;)a=a.value,s=l+k(a,u++),c+=A(a,r,i,s,o);else if(s===`object`){if(typeof e.then==`function`)return A(ne(e),r,i,a,o);throw r=String(e),Error(`Objects are not valid as a React child (found: `+(r===`[object Object]`?`object with keys {`+Object.keys(e).join(`, `)+`}`:r)+`). If you meant to render a collection of children, use an array instead.`)}return c}function re(e,t,n){if(e==null)return e;var r=[],i=0;return A(e,r,``,``,function(e){return t.call(n,e,i++)}),r}function j(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(t){(e._status===0||e._status===-1)&&(e._status=1,e._result=t)},function(t){(e._status===0||e._status===-1)&&(e._status=2,e._result=t)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var M=typeof reportError==`function`?reportError:function(e){if(typeof window==`object`&&typeof window.ErrorEvent==`function`){var t=new window.ErrorEvent(`error`,{bubbles:!0,cancelable:!0,message:typeof e==`object`&&e&&typeof e.message==`string`?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process==`object`&&typeof process.emit==`function`){process.emit(`uncaughtException`,e);return}console.error(e)},N={map:re,forEach:function(e,t,n){re(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return re(e,function(){t++}),t},toArray:function(e){return re(e,function(e){return e})||[]},only:function(e){if(!E(e))throw Error(`React.Children.only expected to receive a single React element child.`);return e}};e.Activity=f,e.Children=N,e.Component=v,e.Fragment=r,e.Profiler=a,e.PureComponent=b,e.StrictMode=i,e.Suspense=l,e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=w,e.__COMPILER_RUNTIME={__proto__:null,c:function(e){return w.H.useMemoCache(e)}},e.cache=function(e){return function(){return e.apply(null,arguments)}},e.cacheSignal=function(){return null},e.cloneElement=function(e,t,n){if(e==null)throw Error(`The argument must be a React element, but you passed `+e+`.`);var r=g({},e.props),i=e.key;if(t!=null)for(a in t.key!==void 0&&(i=``+t.key),t)!T.call(t,a)||a===`key`||a===`__self`||a===`__source`||a===`ref`&&t.ref===void 0||(r[a]=t[a]);var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){for(var o=Array(a),s=0;s<a;s++)o[s]=arguments[s+2];r.children=o}return ee(e.type,i,r)},e.createContext=function(e){return e={$$typeof:s,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null},e.Provider=e,e.Consumer={$$typeof:o,_context:e},e},e.createElement=function(e,t,n){var r,i={},a=null;if(t!=null)for(r in t.key!==void 0&&(a=``+t.key),t)T.call(t,r)&&r!==`key`&&r!==`__self`&&r!==`__source`&&(i[r]=t[r]);var o=arguments.length-2;if(o===1)i.children=n;else if(1<o){for(var s=Array(o),c=0;c<o;c++)s[c]=arguments[c+2];i.children=s}if(e&&e.defaultProps)for(r in o=e.defaultProps,o)i[r]===void 0&&(i[r]=o[r]);return ee(e,a,i)},e.createRef=function(){return{current:null}},e.forwardRef=function(e){return{$$typeof:c,render:e}},e.isValidElement=E,e.lazy=function(e){return{$$typeof:d,_payload:{_status:-1,_result:e},_init:j}},e.memo=function(e,t){return{$$typeof:u,type:e,compare:t===void 0?null:t}},e.startTransition=function(e){var t=w.T,n={};w.T=n;try{var r=e(),i=w.S;i!==null&&i(n,r),typeof r==`object`&&r&&typeof r.then==`function`&&r.then(C,M)}catch(e){M(e)}finally{t!==null&&n.types!==null&&(t.types=n.types),w.T=t}},e.unstable_useCacheRefresh=function(){return w.H.useCacheRefresh()},e.use=function(e){return w.H.use(e)},e.useActionState=function(e,t,n){return w.H.useActionState(e,t,n)},e.useCallback=function(e,t){return w.H.useCallback(e,t)},e.useContext=function(e){return w.H.useContext(e)},e.useDebugValue=function(){},e.useDeferredValue=function(e,t){return w.H.useDeferredValue(e,t)},e.useEffect=function(e,t){return w.H.useEffect(e,t)},e.useEffectEvent=function(e){return w.H.useEffectEvent(e)},e.useId=function(){return w.H.useId()},e.useImperativeHandle=function(e,t,n){return w.H.useImperativeHandle(e,t,n)},e.useInsertionEffect=function(e,t){return w.H.useInsertionEffect(e,t)},e.useLayoutEffect=function(e,t){return w.H.useLayoutEffect(e,t)},e.useMemo=function(e,t){return w.H.useMemo(e,t)},e.useOptimistic=function(e,t){return w.H.useOptimistic(e,t)},e.useReducer=function(e,t,n){return w.H.useReducer(e,t,n)},e.useRef=function(e){return w.H.useRef(e)},e.useState=function(e){return w.H.useState(e)},e.useSyncExternalStore=function(e,t,n){return w.H.useSyncExternalStore(e,t,n)},e.useTransition=function(){return w.H.useTransition()},e.version=`19.2.8`})),u=o(((e,t)=>{t.exports=l()})),d=o((e=>{function t(e,t){var n=e.length;e.push(t);a:for(;0<n;){var r=n-1>>>1,a=e[r];if(0<i(a,t))e[r]=t,e[n]=a,n=r;else break a}}function n(e){return e.length===0?null:e[0]}function r(e){if(e.length===0)return null;var t=e[0],n=e.pop();if(n!==t){e[0]=n;a:for(var r=0,a=e.length,o=a>>>1;r<o;){var s=2*(r+1)-1,c=e[s],l=s+1,u=e[l];if(0>i(c,n))l<a&&0>i(u,c)?(e[r]=u,e[l]=n,r=l):(e[r]=c,e[s]=n,r=s);else if(l<a&&0>i(u,n))e[r]=u,e[l]=n,r=l;else break a}}return t}function i(e,t){var n=e.sortIndex-t.sortIndex;return n===0?e.id-t.id:n}if(e.unstable_now=void 0,typeof performance==`object`&&typeof performance.now==`function`){var a=performance;e.unstable_now=function(){return a.now()}}else{var o=Date,s=o.now();e.unstable_now=function(){return o.now()-s}}var c=[],l=[],u=1,d=null,f=3,p=!1,m=!1,h=!1,g=!1,_=typeof setTimeout==`function`?setTimeout:null,v=typeof clearTimeout==`function`?clearTimeout:null,y=typeof setImmediate<`u`?setImmediate:null;function b(e){for(var i=n(l);i!==null;){if(i.callback===null)r(l);else if(i.startTime<=e)r(l),i.sortIndex=i.expirationTime,t(c,i);else break;i=n(l)}}function x(e){if(h=!1,b(e),!m){if(n(c)!==null)m=!0,S||(S=!0,E());else{var t=n(l);t!==null&&k(x,t.startTime-e)}}}var S=!1,C=-1,w=5,T=-1;function ee(){return g?!0:!(e.unstable_now()-T<w)}function te(){if(g=!1,S){var t=e.unstable_now();T=t;var i=!0;try{a:{m=!1,h&&(h=!1,v(C),C=-1),p=!0;var a=f;try{b:{for(b(t),d=n(c);d!==null&&!(d.expirationTime>t&&ee());){var o=d.callback;if(typeof o==`function`){d.callback=null,f=d.priorityLevel;var s=o(d.expirationTime<=t);if(t=e.unstable_now(),typeof s==`function`){d.callback=s,b(t),i=!0;break b}d===n(c)&&r(c),b(t)}else r(c);d=n(c)}if(d!==null)i=!0;else{var u=n(l);u!==null&&k(x,u.startTime-t),i=!1}}break a}finally{d=null,f=a,p=!1}}}finally{i?E():S=!1}}}var E;if(typeof y==`function`)E=function(){y(te)};else if(typeof MessageChannel<`u`){var D=new MessageChannel,O=D.port2;D.port1.onmessage=te,E=function(){O.postMessage(null)}}else E=function(){_(te,0)};function k(t,n){C=_(function(){t(e.unstable_now())},n)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(e){e.callback=null},e.unstable_forceFrameRate=function(e){0>e||125<e?console.error(`forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported`):w=0<e?Math.floor(1e3/e):5},e.unstable_getCurrentPriorityLevel=function(){return f},e.unstable_next=function(e){switch(f){case 1:case 2:case 3:var t=3;break;default:t=f}var n=f;f=t;try{return e()}finally{f=n}},e.unstable_requestPaint=function(){g=!0},e.unstable_runWithPriority=function(e,t){switch(e){case 1:case 2:case 3:case 4:case 5:break;default:e=3}var n=f;f=e;try{return t()}finally{f=n}},e.unstable_scheduleCallback=function(r,i,a){var o=e.unstable_now();switch(typeof a==`object`&&a?(a=a.delay,a=typeof a==`number`&&0<a?o+a:o):a=o,r){case 1:var s=-1;break;case 2:s=250;break;case 5:s=1073741823;break;case 4:s=1e4;break;default:s=5e3}return s=a+s,r={id:u++,callback:i,priorityLevel:r,startTime:a,expirationTime:s,sortIndex:-1},a>o?(r.sortIndex=a,t(l,r),n(c)===null&&r===n(l)&&(h?(v(C),C=-1):h=!0,k(x,a-o))):(r.sortIndex=s,t(c,r),m||p||(m=!0,S||(S=!0,E()))),r},e.unstable_shouldYield=ee,e.unstable_wrapCallback=function(e){var t=f;return function(){var n=f;f=t;try{return e.apply(this,arguments)}finally{f=n}}}})),f=o(((e,t)=>{t.exports=d()})),p=o((e=>{var t=u();function n(e){var t=`https://react.dev/errors/`+e;if(1<arguments.length){t+=`?args[]=`+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+=`&args[]=`+encodeURIComponent(arguments[n])}return`Minified React error #`+e+`; visit `+t+` for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`}function r(){}var i={d:{f:r,r:function(){throw Error(n(522))},D:r,C:r,L:r,m:r,X:r,S:r,M:r},p:0,findDOMNode:null},a=Symbol.for(`react.portal`);function o(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:a,key:r==null?null:``+r,children:e,containerInfo:t,implementation:n}}var s=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function c(e,t){if(e===`font`)return``;if(typeof t==`string`)return t===`use-credentials`?t:``}e.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=i,e.createPortal=function(e,t){var r=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)throw Error(n(299));return o(e,t,null,r)},e.flushSync=function(e){var t=s.T,n=i.p;try{if(s.T=null,i.p=2,e)return e()}finally{s.T=t,i.p=n,i.d.f()}},e.preconnect=function(e,t){typeof e==`string`&&(t?(t=t.crossOrigin,t=typeof t==`string`?t===`use-credentials`?t:``:void 0):t=null,i.d.C(e,t))},e.prefetchDNS=function(e){typeof e==`string`&&i.d.D(e)},e.preinit=function(e,t){if(typeof e==`string`&&t&&typeof t.as==`string`){var n=t.as,r=c(n,t.crossOrigin),a=typeof t.integrity==`string`?t.integrity:void 0,o=typeof t.fetchPriority==`string`?t.fetchPriority:void 0;n===`style`?i.d.S(e,typeof t.precedence==`string`?t.precedence:void 0,{crossOrigin:r,integrity:a,fetchPriority:o}):n===`script`&&i.d.X(e,{crossOrigin:r,integrity:a,fetchPriority:o,nonce:typeof t.nonce==`string`?t.nonce:void 0})}},e.preinitModule=function(e,t){if(typeof e==`string`){if(typeof t==`object`&&t){if(t.as==null||t.as===`script`){var n=c(t.as,t.crossOrigin);i.d.M(e,{crossOrigin:n,integrity:typeof t.integrity==`string`?t.integrity:void 0,nonce:typeof t.nonce==`string`?t.nonce:void 0})}}else t??i.d.M(e)}},e.preload=function(e,t){if(typeof e==`string`&&typeof t==`object`&&t&&typeof t.as==`string`){var n=t.as,r=c(n,t.crossOrigin);i.d.L(e,n,{crossOrigin:r,integrity:typeof t.integrity==`string`?t.integrity:void 0,nonce:typeof t.nonce==`string`?t.nonce:void 0,type:typeof t.type==`string`?t.type:void 0,fetchPriority:typeof t.fetchPriority==`string`?t.fetchPriority:void 0,referrerPolicy:typeof t.referrerPolicy==`string`?t.referrerPolicy:void 0,imageSrcSet:typeof t.imageSrcSet==`string`?t.imageSrcSet:void 0,imageSizes:typeof t.imageSizes==`string`?t.imageSizes:void 0,media:typeof t.media==`string`?t.media:void 0})}},e.preloadModule=function(e,t){if(typeof e==`string`){if(t){var n=c(t.as,t.crossOrigin);i.d.m(e,{as:typeof t.as==`string`&&t.as!==`script`?t.as:void 0,crossOrigin:n,integrity:typeof t.integrity==`string`?t.integrity:void 0})}else i.d.m(e)}},e.requestFormReset=function(e){i.d.r(e)},e.unstable_batchedUpdates=function(e,t){return e(t)},e.useFormState=function(e,t,n){return s.H.useFormState(e,t,n)},e.useFormStatus=function(){return s.H.useHostTransitionStatus()},e.version=`19.2.8`})),m=o(((e,t)=>{function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>`u`||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!=`function`))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}n(),t.exports=p()})),h=o((e=>{var t=f(),n=u(),r=m();function i(e){var t=`https://react.dev/errors/`+e;if(1<arguments.length){t+=`?args[]=`+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+=`&args[]=`+encodeURIComponent(arguments[n])}return`Minified React error #`+e+`; visit `+t+` for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`}function a(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function o(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function s(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function c(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function l(e){if(o(e)!==e)throw Error(i(188))}function d(e){var t=e.alternate;if(!t){if(t=o(e),t===null)throw Error(i(188));return t===e?e:null}for(var n=e,r=t;;){var a=n.return;if(a===null)break;var s=a.alternate;if(s===null){if(r=a.return,r!==null){n=r;continue}break}if(a.child===s.child){for(s=a.child;s;){if(s===n)return l(a),e;if(s===r)return l(a),t;s=s.sibling}throw Error(i(188))}if(n.return!==r.return)n=a,r=s;else{for(var c=!1,u=a.child;u;){if(u===n){c=!0,n=a,r=s;break}if(u===r){c=!0,r=a,n=s;break}u=u.sibling}if(!c){for(u=s.child;u;){if(u===n){c=!0,n=s,r=a;break}if(u===r){c=!0,r=s,n=a;break}u=u.sibling}if(!c)throw Error(i(189))}}if(n.alternate!==r)throw Error(i(190))}if(n.tag!==3)throw Error(i(188));return n.stateNode.current===n?e:t}function p(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=p(e),t!==null)return t;e=e.sibling}return null}var h=Object.assign,g=Symbol.for(`react.element`),_=Symbol.for(`react.transitional.element`),v=Symbol.for(`react.portal`),y=Symbol.for(`react.fragment`),b=Symbol.for(`react.strict_mode`),x=Symbol.for(`react.profiler`),S=Symbol.for(`react.consumer`),C=Symbol.for(`react.context`),w=Symbol.for(`react.forward_ref`),T=Symbol.for(`react.suspense`),ee=Symbol.for(`react.suspense_list`),te=Symbol.for(`react.memo`),E=Symbol.for(`react.lazy`),D=Symbol.for(`react.activity`),O=Symbol.for(`react.memo_cache_sentinel`),k=Symbol.iterator;function ne(e){return typeof e!=`object`||!e?null:(e=k&&e[k]||e[`@@iterator`],typeof e==`function`?e:null)}var A=Symbol.for(`react.client.reference`);function re(e){if(e==null)return null;if(typeof e==`function`)return e.$$typeof===A?null:e.displayName||e.name||null;if(typeof e==`string`)return e;switch(e){case y:return`Fragment`;case x:return`Profiler`;case b:return`StrictMode`;case T:return`Suspense`;case ee:return`SuspenseList`;case D:return`Activity`}if(typeof e==`object`)switch(e.$$typeof){case v:return`Portal`;case C:return e.displayName||`Context`;case S:return(e._context.displayName||`Context`)+`.Consumer`;case w:var t=e.render;return e=e.displayName,e||=(e=t.displayName||t.name||``,e===``?`ForwardRef`:`ForwardRef(`+e+`)`),e;case te:return t=e.displayName||null,t===null?re(e.type)||`Memo`:t;case E:t=e._payload,e=e._init;try{return re(e(t))}catch{}}return null}var j=Array.isArray,M=n.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,N=r.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ie={pending:!1,data:null,method:null,action:null},ae=[],oe=-1;function P(e){return{current:e}}function F(e){0>oe||(e.current=ae[oe],ae[oe]=null,oe--)}function I(e,t){oe++,ae[oe]=e.current,e.current=t}var L=P(null),se=P(null),ce=P(null),R=P(null);function le(e,t){switch(I(ce,t),I(se,e),I(L,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?Vd(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=Vd(t),e=Hd(t,e);else switch(e){case`svg`:e=1;break;case`math`:e=2;break;default:e=0}}F(L),I(L,e)}function ue(){F(L),F(se),F(ce)}function de(e){e.memoizedState!==null&&I(R,e);var t=L.current,n=Hd(t,e.type);t!==n&&(I(se,e),I(L,n))}function fe(e){se.current===e&&(F(L),F(se)),R.current===e&&(F(R),Qf._currentValue=ie)}var pe,me;function he(e){if(pe===void 0)try{throw Error()}catch(e){var t=e.stack.trim().match(/\n( *(at )?)/);pe=t&&t[1]||``,me=-1<e.stack.indexOf(`
    at`)?` (<anonymous>)`:-1<e.stack.indexOf(`@`)?`@unknown:0:0`:``}return`
`+pe+e+me}var ge=!1;function _e(e,t){if(!e||ge)return``;ge=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var r={DetermineComponentFrameRoot:function(){try{if(t){var n=function(){throw Error()};if(Object.defineProperty(n.prototype,"props",{set:function(){throw Error()}}),typeof Reflect==`object`&&Reflect.construct){try{Reflect.construct(n,[])}catch(e){var r=e}Reflect.construct(e,[],n)}else{try{n.call()}catch(e){r=e}e.call(n.prototype)}}else{try{throw Error()}catch(e){r=e}(n=e())&&typeof n.catch==`function`&&n.catch(function(){})}}catch(e){if(e&&r&&typeof e.stack==`string`)return[e.stack,r.stack]}return[null,null]}};r.DetermineComponentFrameRoot.displayName=`DetermineComponentFrameRoot`;var i=Object.getOwnPropertyDescriptor(r.DetermineComponentFrameRoot,`name`);i&&i.configurable&&Object.defineProperty(r.DetermineComponentFrameRoot,"name",{value:`DetermineComponentFrameRoot`});var a=r.DetermineComponentFrameRoot(),o=a[0],s=a[1];if(o&&s){var c=o.split(`
`),l=s.split(`
`);for(i=r=0;r<c.length&&!c[r].includes(`DetermineComponentFrameRoot`);)r++;for(;i<l.length&&!l[i].includes(`DetermineComponentFrameRoot`);)i++;if(r===c.length||i===l.length)for(r=c.length-1,i=l.length-1;1<=r&&0<=i&&c[r]!==l[i];)i--;for(;1<=r&&0<=i;r--,i--)if(c[r]!==l[i]){if(r!==1||i!==1)do if(r--,i--,0>i||c[r]!==l[i]){var u=`
`+c[r].replace(` at new `,` at `);return e.displayName&&u.includes(`<anonymous>`)&&(u=u.replace(`<anonymous>`,e.displayName)),u}while(1<=r&&0<=i);break}}}finally{ge=!1,Error.prepareStackTrace=n}return(n=e?e.displayName||e.name:``)?he(n):``}function ve(e,t){switch(e.tag){case 26:case 27:case 5:return he(e.type);case 16:return he(`Lazy`);case 13:return e.child!==t&&t!==null?he(`Suspense Fallback`):he(`Suspense`);case 19:return he(`SuspenseList`);case 0:case 15:return _e(e.type,!1);case 11:return _e(e.type.render,!1);case 1:return _e(e.type,!0);case 31:return he(`Activity`);default:return``}}function ye(e){try{var t=``,n=null;do t+=ve(e,n),n=e,e=e.return;while(e);return t}catch(e){return`
Error generating stack: `+e.message+`
`+e.stack}}var be=Object.prototype.hasOwnProperty,xe=t.unstable_scheduleCallback,Se=t.unstable_cancelCallback,Ce=t.unstable_shouldYield,we=t.unstable_requestPaint,Te=t.unstable_now,Ee=t.unstable_getCurrentPriorityLevel,De=t.unstable_ImmediatePriority,Oe=t.unstable_UserBlockingPriority,ke=t.unstable_NormalPriority,Ae=t.unstable_LowPriority,je=t.unstable_IdlePriority,Me=t.log,Ne=t.unstable_setDisableYieldValue,Pe=null,Fe=null;function Ie(e){if(typeof Me==`function`&&Ne(e),Fe&&typeof Fe.setStrictMode==`function`)try{Fe.setStrictMode(Pe,e)}catch{}}var Le=Math.clz32?Math.clz32:Be,Re=Math.log,ze=Math.LN2;function Be(e){return e>>>=0,e===0?32:31-(Re(e)/ze|0)|0}var Ve=256,He=262144,Ue=4194304;function We(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function Ge(e,t,n){var r=e.pendingLanes;if(r===0)return 0;var i=0,a=e.suspendedLanes,o=e.pingedLanes;e=e.warmLanes;var s=r&134217727;return s===0?(s=r&~a,s===0?o===0?n||(n=r&~e,n!==0&&(i=We(n))):i=We(o):i=We(s)):(r=s&~a,r===0?(o&=s,o===0?n||(n=s&~e,n!==0&&(i=We(n))):i=We(o)):i=We(r)),i===0?0:t!==0&&t!==i&&(t&a)===0&&(a=i&-i,n=t&-t,a>=n||a===32&&n&4194048)?t:i}function Ke(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function qe(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Je(){var e=Ue;return Ue<<=1,!(Ue&62914560)&&(Ue=4194304),e}function Ye(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Xe(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function Ze(e,t,n,r,i,a){var o=e.pendingLanes;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=n,e.entangledLanes&=n,e.errorRecoveryDisabledLanes&=n,e.shellSuspendCounter=0;var s=e.entanglements,c=e.expirationTimes,l=e.hiddenUpdates;for(n=o&~n;0<n;){var u=31-Le(n),d=1<<u;s[u]=0,c[u]=-1;var f=l[u];if(f!==null)for(l[u]=null,u=0;u<f.length;u++){var p=f[u];p!==null&&(p.lane&=-536870913)}n&=~d}r!==0&&Qe(e,r,0),a!==0&&i===0&&e.tag!==0&&(e.suspendedLanes|=a&~(o&~t))}function Qe(e,t,n){e.pendingLanes|=t,e.suspendedLanes&=~t;var r=31-Le(t);e.entangledLanes|=t,e.entanglements[r]=e.entanglements[r]|1073741824|n&261930}function $e(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Le(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}function et(e,t){var n=t&-t;return n=n&42?1:tt(n),(n&(e.suspendedLanes|t))===0?n:0}function tt(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function nt(e){return e&=-e,2<e?8<e?e&134217727?32:268435456:8:2}function rt(){var e=N.p;return e===0?(e=window.event,e===void 0?32:mp(e.type)):e}function it(e,t){var n=N.p;try{return N.p=e,t()}finally{N.p=n}}var at=Math.random().toString(36).slice(2),ot=`__reactFiber$`+at,st=`__reactProps$`+at,ct=`__reactContainer$`+at,lt=`__reactEvents$`+at,ut=`__reactListeners$`+at,dt=`__reactHandles$`+at,ft=`__reactResources$`+at,pt=`__reactMarker$`+at;function mt(e){delete e[ot],delete e[st],delete e[lt],delete e[ut],delete e[dt]}function ht(e){var t=e[ot];if(t)return t;for(var n=e.parentNode;n;){if(t=n[ct]||n[ot]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=df(e);e!==null;){if(n=e[ot])return n;e=df(e)}return t}e=n,n=e.parentNode}return null}function gt(e){if(e=e[ot]||e[ct]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function _t(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(i(33))}function vt(e){var t=e[ft];return t||=e[ft]={hoistableStyles:new Map,hoistableScripts:new Map},t}function yt(e){e[pt]=!0}var bt=new Set,xt={};function St(e,t){Ct(e,t),Ct(e+`Capture`,t)}function Ct(e,t){for(xt[e]=t,e=0;e<t.length;e++)bt.add(t[e])}var wt=RegExp(`^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$`),Tt={},Et={};function Dt(e){return be.call(Et,e)?!0:be.call(Tt,e)?!1:wt.test(e)?Et[e]=!0:(Tt[e]=!0,!1)}function Ot(e,t,n){if(Dt(t)){if(n===null)e.removeAttribute(t);else{switch(typeof n){case`undefined`:case`function`:case`symbol`:e.removeAttribute(t);return;case`boolean`:var r=t.toLowerCase().slice(0,5);if(r!==`data-`&&r!==`aria-`){e.removeAttribute(t);return}}e.setAttribute(t,``+n)}}}function kt(e,t,n){if(n===null)e.removeAttribute(t);else{switch(typeof n){case`undefined`:case`function`:case`symbol`:case`boolean`:e.removeAttribute(t);return}e.setAttribute(t,``+n)}}function At(e,t,n,r){if(r===null)e.removeAttribute(n);else{switch(typeof r){case`undefined`:case`function`:case`symbol`:case`boolean`:e.removeAttribute(n);return}e.setAttributeNS(t,n,``+r)}}function z(e){switch(typeof e){case`bigint`:case`boolean`:case`number`:case`string`:case`undefined`:return e;case`object`:return e;default:return``}}function jt(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()===`input`&&(t===`checkbox`||t===`radio`)}function Mt(e,t,n){var r=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&r!==void 0&&typeof r.get==`function`&&typeof r.set==`function`){var i=r.get,a=r.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(e){n=``+e,a.call(this,e)}}),Object.defineProperty(e,t,{enumerable:r.enumerable}),{getValue:function(){return n},setValue:function(e){n=``+e},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Nt(e){if(!e._valueTracker){var t=jt(e)?`checked`:`value`;e._valueTracker=Mt(e,t,``+e[t])}}function Pt(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r=``;return e&&(r=jt(e)?e.checked?`true`:`false`:e.value),e=r,e!==n&&(t.setValue(e),!0)}function Ft(e){if(e||=typeof document<`u`?document:void 0,e===void 0)return null;try{return e.activeElement||e.body}catch{return e.body}}var It=/[\n"\\]/g;function Lt(e){return e.replace(It,function(e){return`\\`+e.charCodeAt(0).toString(16)+` `})}function Rt(e,t,n,r,i,a,o,s){e.name=``,o!=null&&typeof o!=`function`&&typeof o!=`symbol`&&typeof o!=`boolean`?e.type=o:e.removeAttribute(`type`),t==null?o!==`submit`&&o!==`reset`||e.removeAttribute(`value`):o===`number`?(t===0&&e.value===``||e.value!=t)&&(e.value=``+z(t)):e.value!==``+z(t)&&(e.value=``+z(t)),t==null?n==null?r!=null&&e.removeAttribute(`value`):Bt(e,o,z(n)):Bt(e,o,z(t)),i==null&&a!=null&&(e.defaultChecked=!!a),i!=null&&(e.checked=i&&typeof i!=`function`&&typeof i!=`symbol`),s!=null&&typeof s!=`function`&&typeof s!=`symbol`&&typeof s!=`boolean`?e.name=``+z(s):e.removeAttribute(`name`)}function zt(e,t,n,r,i,a,o,s){if(a!=null&&typeof a!=`function`&&typeof a!=`symbol`&&typeof a!=`boolean`&&(e.type=a),t!=null||n!=null){if(!(a!==`submit`&&a!==`reset`||t!=null)){Nt(e);return}n=n==null?``:``+z(n),t=t==null?n:``+z(t),s||t===e.value||(e.value=t),e.defaultValue=t}r??=i,r=typeof r!=`function`&&typeof r!=`symbol`&&!!r,e.checked=s?e.checked:!!r,e.defaultChecked=!!r,o!=null&&typeof o!=`function`&&typeof o!=`symbol`&&typeof o!=`boolean`&&(e.name=o),Nt(e)}function Bt(e,t,n){t===`number`&&Ft(e.ownerDocument)===e||e.defaultValue===``+n||(e.defaultValue=``+n)}function Vt(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t[`$`+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty(`$`+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=``+z(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function Ht(e,t,n){if(t!=null&&(t=``+z(t),t!==e.value&&(e.value=t),n==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=n==null?``:``+z(n)}function Ut(e,t,n,r){if(t==null){if(r!=null){if(n!=null)throw Error(i(92));if(j(r)){if(1<r.length)throw Error(i(93));r=r[0]}n=r}n??=``,t=n}n=z(t),e.defaultValue=n,r=e.textContent,r===n&&r!==``&&r!==null&&(e.value=r),Nt(e)}function Wt(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Gt=new Set(`animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp`.split(` `));function Kt(e,t,n){var r=t.indexOf(`--`)===0;n==null||typeof n==`boolean`||n===``?r?e.setProperty(t,``):t===`float`?e.cssFloat=``:e[t]=``:r?e.setProperty(t,n):typeof n!=`number`||n===0||Gt.has(t)?t===`float`?e.cssFloat=n:e[t]=(``+n).trim():e[t]=n+`px`}function qt(e,t,n){if(t!=null&&typeof t!=`object`)throw Error(i(62));if(e=e.style,n!=null){for(var r in n)!n.hasOwnProperty(r)||t!=null&&t.hasOwnProperty(r)||(r.indexOf(`--`)===0?e.setProperty(r,``):r===`float`?e.cssFloat=``:e[r]=``);for(var a in t)r=t[a],t.hasOwnProperty(a)&&n[a]!==r&&Kt(e,a,r)}else for(var o in t)t.hasOwnProperty(o)&&Kt(e,o,t[o])}function Jt(e){if(e.indexOf(`-`)===-1)return!1;switch(e){case`annotation-xml`:case`color-profile`:case`font-face`:case`font-face-src`:case`font-face-uri`:case`font-face-format`:case`font-face-name`:case`missing-glyph`:return!1;default:return!0}}var Yt=new Map([[`acceptCharset`,`accept-charset`],[`htmlFor`,`for`],[`httpEquiv`,`http-equiv`],[`crossOrigin`,`crossorigin`],[`accentHeight`,`accent-height`],[`alignmentBaseline`,`alignment-baseline`],[`arabicForm`,`arabic-form`],[`baselineShift`,`baseline-shift`],[`capHeight`,`cap-height`],[`clipPath`,`clip-path`],[`clipRule`,`clip-rule`],[`colorInterpolation`,`color-interpolation`],[`colorInterpolationFilters`,`color-interpolation-filters`],[`colorProfile`,`color-profile`],[`colorRendering`,`color-rendering`],[`dominantBaseline`,`dominant-baseline`],[`enableBackground`,`enable-background`],[`fillOpacity`,`fill-opacity`],[`fillRule`,`fill-rule`],[`floodColor`,`flood-color`],[`floodOpacity`,`flood-opacity`],[`fontFamily`,`font-family`],[`fontSize`,`font-size`],[`fontSizeAdjust`,`font-size-adjust`],[`fontStretch`,`font-stretch`],[`fontStyle`,`font-style`],[`fontVariant`,`font-variant`],[`fontWeight`,`font-weight`],[`glyphName`,`glyph-name`],[`glyphOrientationHorizontal`,`glyph-orientation-horizontal`],[`glyphOrientationVertical`,`glyph-orientation-vertical`],[`horizAdvX`,`horiz-adv-x`],[`horizOriginX`,`horiz-origin-x`],[`imageRendering`,`image-rendering`],[`letterSpacing`,`letter-spacing`],[`lightingColor`,`lighting-color`],[`markerEnd`,`marker-end`],[`markerMid`,`marker-mid`],[`markerStart`,`marker-start`],[`overlinePosition`,`overline-position`],[`overlineThickness`,`overline-thickness`],[`paintOrder`,`paint-order`],[`panose-1`,`panose-1`],[`pointerEvents`,`pointer-events`],[`renderingIntent`,`rendering-intent`],[`shapeRendering`,`shape-rendering`],[`stopColor`,`stop-color`],[`stopOpacity`,`stop-opacity`],[`strikethroughPosition`,`strikethrough-position`],[`strikethroughThickness`,`strikethrough-thickness`],[`strokeDasharray`,`stroke-dasharray`],[`strokeDashoffset`,`stroke-dashoffset`],[`strokeLinecap`,`stroke-linecap`],[`strokeLinejoin`,`stroke-linejoin`],[`strokeMiterlimit`,`stroke-miterlimit`],[`strokeOpacity`,`stroke-opacity`],[`strokeWidth`,`stroke-width`],[`textAnchor`,`text-anchor`],[`textDecoration`,`text-decoration`],[`textRendering`,`text-rendering`],[`transformOrigin`,`transform-origin`],[`underlinePosition`,`underline-position`],[`underlineThickness`,`underline-thickness`],[`unicodeBidi`,`unicode-bidi`],[`unicodeRange`,`unicode-range`],[`unitsPerEm`,`units-per-em`],[`vAlphabetic`,`v-alphabetic`],[`vHanging`,`v-hanging`],[`vIdeographic`,`v-ideographic`],[`vMathematical`,`v-mathematical`],[`vectorEffect`,`vector-effect`],[`vertAdvY`,`vert-adv-y`],[`vertOriginX`,`vert-origin-x`],[`vertOriginY`,`vert-origin-y`],[`wordSpacing`,`word-spacing`],[`writingMode`,`writing-mode`],[`xmlnsXlink`,`xmlns:xlink`],[`xHeight`,`x-height`]]),Xt=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Zt(e){return Xt.test(``+e)?`javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')`:e}function Qt(){}var $t=null;function en(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var tn=null,nn=null;function rn(e){var t=gt(e);if(t&&(e=t.stateNode)){var n=e[st]||null;a:switch(e=t.stateNode,t.type){case`input`:if(Rt(e,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),t=n.name,n.type===`radio`&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll(`input[name="`+Lt(``+t)+`"][type="radio"]`),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var a=r[st]||null;if(!a)throw Error(i(90));Rt(r,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name)}}for(t=0;t<n.length;t++)r=n[t],r.form===e.form&&Pt(r)}break a;case`textarea`:Ht(e,n.value,n.defaultValue);break a;case`select`:t=n.value,t!=null&&Vt(e,!!n.multiple,t,!1)}}}var an=!1;function on(e,t,n){if(an)return e(t,n);an=!0;try{return e(t)}finally{if(an=!1,(tn!==null||nn!==null)&&(bu(),tn&&(t=tn,e=nn,nn=tn=null,rn(t),e)))for(t=0;t<e.length;t++)rn(e[t])}}function sn(e,t){var n=e.stateNode;if(n===null)return null;var r=n[st]||null;if(r===null)return null;n=r[t];a:switch(t){case`onClick`:case`onClickCapture`:case`onDoubleClick`:case`onDoubleClickCapture`:case`onMouseDown`:case`onMouseDownCapture`:case`onMouseMove`:case`onMouseMoveCapture`:case`onMouseUp`:case`onMouseUpCapture`:case`onMouseEnter`:(r=!r.disabled)||(e=e.type,r=e!==`button`&&e!==`input`&&e!==`select`&&e!==`textarea`),e=!r;break a;default:e=!1}if(e)return null;if(n&&typeof n!=`function`)throw Error(i(231,t,typeof n));return n}var cn=!(typeof window>`u`||window.document===void 0||window.document.createElement===void 0),ln=!1;if(cn)try{var un={};Object.defineProperty(un,"passive",{get:function(){ln=!0}}),window.addEventListener(`test`,un,un),window.removeEventListener(`test`,un,un)}catch{ln=!1}var dn=null,fn=null,pn=null;function mn(){if(pn)return pn;var e,t=fn,n=t.length,r,i=`value`in dn?dn.value:dn.textContent,a=i.length;for(e=0;e<n&&t[e]===i[e];e++);var o=n-e;for(r=1;r<=o&&t[n-r]===i[a-r];r++);return pn=i.slice(e,1<r?1-r:void 0)}function hn(e){var t=e.keyCode;return`charCode`in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function gn(){return!0}function _n(){return!1}function vn(e){function t(t,n,r,i,a){for(var o in this._reactName=t,this._targetInst=r,this.type=n,this.nativeEvent=i,this.target=a,this.currentTarget=null,e)e.hasOwnProperty(o)&&(t=e[o],this[o]=t?t(i):i[o]);return this.isDefaultPrevented=(i.defaultPrevented==null?!1===i.returnValue:i.defaultPrevented)?gn:_n,this.isPropagationStopped=_n,this}return h(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var e=this.nativeEvent;e&&(e.preventDefault?e.preventDefault():typeof e.returnValue!=`unknown`&&(e.returnValue=!1),this.isDefaultPrevented=gn)},stopPropagation:function(){var e=this.nativeEvent;e&&(e.stopPropagation?e.stopPropagation():typeof e.cancelBubble!=`unknown`&&(e.cancelBubble=!0),this.isPropagationStopped=gn)},persist:function(){},isPersistent:gn}),t}var yn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},bn=vn(yn),xn=h({},yn,{view:0,detail:0}),Sn=vn(xn),Cn,wn,Tn,En=h({},xn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Ln,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return`movementX`in e?e.movementX:(e!==Tn&&(Tn&&e.type===`mousemove`?(Cn=e.screenX-Tn.screenX,wn=e.screenY-Tn.screenY):wn=Cn=0,Tn=e),Cn)},movementY:function(e){return`movementY`in e?e.movementY:wn}}),Dn=vn(En),On=vn(h({},En,{dataTransfer:0})),kn=vn(h({},xn,{relatedTarget:0})),An=vn(h({},yn,{animationName:0,elapsedTime:0,pseudoElement:0})),jn=vn(h({},yn,{clipboardData:function(e){return`clipboardData`in e?e.clipboardData:window.clipboardData}})),Mn=vn(h({},yn,{data:0})),Nn={Esc:`Escape`,Spacebar:` `,Left:`ArrowLeft`,Up:`ArrowUp`,Right:`ArrowRight`,Down:`ArrowDown`,Del:`Delete`,Win:`OS`,Menu:`ContextMenu`,Apps:`ContextMenu`,Scroll:`ScrollLock`,MozPrintableKey:`Unidentified`},Pn={8:`Backspace`,9:`Tab`,12:`Clear`,13:`Enter`,16:`Shift`,17:`Control`,18:`Alt`,19:`Pause`,20:`CapsLock`,27:`Escape`,32:` `,33:`PageUp`,34:`PageDown`,35:`End`,36:`Home`,37:`ArrowLeft`,38:`ArrowUp`,39:`ArrowRight`,40:`ArrowDown`,45:`Insert`,46:`Delete`,112:`F1`,113:`F2`,114:`F3`,115:`F4`,116:`F5`,117:`F6`,118:`F7`,119:`F8`,120:`F9`,121:`F10`,122:`F11`,123:`F12`,144:`NumLock`,145:`ScrollLock`,224:`Meta`},Fn={Alt:`altKey`,Control:`ctrlKey`,Meta:`metaKey`,Shift:`shiftKey`};function In(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Fn[e])?!!t[e]:!1}function Ln(){return In}var B=vn(h({},xn,{key:function(e){if(e.key){var t=Nn[e.key]||e.key;if(t!==`Unidentified`)return t}return e.type===`keypress`?(e=hn(e),e===13?`Enter`:String.fromCharCode(e)):e.type===`keydown`||e.type===`keyup`?Pn[e.keyCode]||`Unidentified`:``},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Ln,charCode:function(e){return e.type===`keypress`?hn(e):0},keyCode:function(e){return e.type===`keydown`||e.type===`keyup`?e.keyCode:0},which:function(e){return e.type===`keypress`?hn(e):e.type===`keydown`||e.type===`keyup`?e.keyCode:0}})),Rn=vn(h({},En,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0})),zn=vn(h({},xn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Ln})),Bn=vn(h({},yn,{propertyName:0,elapsedTime:0,pseudoElement:0})),Vn=vn(h({},En,{deltaX:function(e){return`deltaX`in e?e.deltaX:`wheelDeltaX`in e?-e.wheelDeltaX:0},deltaY:function(e){return`deltaY`in e?e.deltaY:`wheelDeltaY`in e?-e.wheelDeltaY:`wheelDelta`in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0})),Hn=vn(h({},yn,{newState:0,oldState:0})),Un=[9,13,27,32],Wn=cn&&`CompositionEvent`in window,Gn=null;cn&&`documentMode`in document&&(Gn=document.documentMode);var Kn=cn&&`TextEvent`in window&&!Gn,qn=cn&&(!Wn||Gn&&8<Gn&&11>=Gn),Jn=` `,Yn=!1;function Xn(e,t){switch(e){case`keyup`:return Un.indexOf(t.keyCode)!==-1;case`keydown`:return t.keyCode!==229;case`keypress`:case`mousedown`:case`focusout`:return!0;default:return!1}}function Zn(e){return e=e.detail,typeof e==`object`&&`data`in e?e.data:null}var Qn=!1;function $n(e,t){switch(e){case`compositionend`:return Zn(t);case`keypress`:return t.which===32?(Yn=!0,Jn):null;case`textInput`:return e=t.data,e===Jn&&Yn?null:e;default:return null}}function er(e,t){if(Qn)return e===`compositionend`||!Wn&&Xn(e,t)?(e=mn(),pn=fn=dn=null,Qn=!1,e):null;switch(e){case`paste`:return null;case`keypress`:if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case`compositionend`:return qn&&t.locale!==`ko`?null:t.data;default:return null}}var tr={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function nr(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t===`input`?!!tr[e.type]:t===`textarea`}function rr(e,t,n,r){tn?nn?nn.push(r):nn=[r]:tn=r,t=Ed(t,`onChange`),0<t.length&&(n=new bn(`onChange`,`change`,null,n,r),e.push({event:n,listeners:t}))}var ir=null,ar=null;function or(e){yd(e,0)}function sr(e){if(Pt(_t(e)))return e}function cr(e,t){if(e===`change`)return t}var lr=!1;if(cn){var ur;if(cn){var dr=`oninput`in document;if(!dr){var fr=document.createElement(`div`);fr.setAttribute(`oninput`,`return;`),dr=typeof fr.oninput==`function`}ur=dr}else ur=!1;lr=ur&&(!document.documentMode||9<document.documentMode)}function pr(){ir&&(ir.detachEvent(`onpropertychange`,mr),ar=ir=null)}function mr(e){if(e.propertyName===`value`&&sr(ar)){var t=[];rr(t,ar,e,en(e)),on(or,t)}}function hr(e,t,n){e===`focusin`?(pr(),ir=t,ar=n,ir.attachEvent(`onpropertychange`,mr)):e===`focusout`&&pr()}function gr(e){if(e===`selectionchange`||e===`keyup`||e===`keydown`)return sr(ar)}function _r(e,t){if(e===`click`)return sr(t)}function vr(e,t){if(e===`input`||e===`change`)return sr(t)}function yr(e,t){return e===t&&(e!==0||1/e==1/t)||e!==e&&t!==t}var V=typeof Object.is==`function`?Object.is:yr;function br(e,t){if(V(e,t))return!0;if(typeof e!=`object`||!e||typeof t!=`object`||!t)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!be.call(t,i)||!V(e[i],t[i]))return!1}return!0}function xr(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Sr(e,t){var n=xr(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}a:{for(;n;){if(n.nextSibling){n=n.nextSibling;break a}n=n.parentNode}n=void 0}n=xr(n)}}function Cr(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Cr(e,t.parentNode):`contains`in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function wr(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=Ft(e.document);t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href==`string`}catch{n=!1}if(n)e=t.contentWindow;else break;t=Ft(e.document)}return t}function Tr(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t===`input`&&(e.type===`text`||e.type===`search`||e.type===`tel`||e.type===`url`||e.type===`password`)||t===`textarea`||e.contentEditable===`true`)}var Er=cn&&`documentMode`in document&&11>=document.documentMode,Dr=null,Or=null,kr=null,Ar=!1;function jr(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Ar||Dr==null||Dr!==Ft(r)||(r=Dr,`selectionStart`in r&&Tr(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),kr&&br(kr,r)||(kr=r,r=Ed(Or,`onSelect`),0<r.length&&(t=new bn(`onSelect`,`select`,null,t,n),e.push({event:t,listeners:r}),t.target=Dr)))}function Mr(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n[`Webkit`+e]=`webkit`+t,n[`Moz`+e]=`moz`+t,n}var Nr={animationend:Mr(`Animation`,`AnimationEnd`),animationiteration:Mr(`Animation`,`AnimationIteration`),animationstart:Mr(`Animation`,`AnimationStart`),transitionrun:Mr(`Transition`,`TransitionRun`),transitionstart:Mr(`Transition`,`TransitionStart`),transitioncancel:Mr(`Transition`,`TransitionCancel`),transitionend:Mr(`Transition`,`TransitionEnd`)},Pr={},Fr={};cn&&(Fr=document.createElement(`div`).style,`AnimationEvent`in window||(delete Nr.animationend.animation,delete Nr.animationiteration.animation,delete Nr.animationstart.animation),`TransitionEvent`in window||delete Nr.transitionend.transition);function Ir(e){if(Pr[e])return Pr[e];if(!Nr[e])return e;var t=Nr[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Fr)return Pr[e]=t[n];return e}var Lr=Ir(`animationend`),Rr=Ir(`animationiteration`),zr=Ir(`animationstart`),Br=Ir(`transitionrun`),Vr=Ir(`transitionstart`),Hr=Ir(`transitioncancel`),Ur=Ir(`transitionend`),Wr=new Map,Gr=`abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel`.split(` `);Gr.push(`scrollEnd`);function Kr(e,t){Wr.set(e,t),St(t,[e])}var qr=typeof reportError==`function`?reportError:function(e){if(typeof window==`object`&&typeof window.ErrorEvent==`function`){var t=new window.ErrorEvent(`error`,{bubbles:!0,cancelable:!0,message:typeof e==`object`&&e&&typeof e.message==`string`?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process==`object`&&typeof process.emit==`function`){process.emit(`uncaughtException`,e);return}console.error(e)},Jr=[],Yr=0,Xr=0;function Zr(){for(var e=Yr,t=Xr=Yr=0;t<e;){var n=Jr[t];Jr[t++]=null;var r=Jr[t];Jr[t++]=null;var i=Jr[t];Jr[t++]=null;var a=Jr[t];if(Jr[t++]=null,r!==null&&i!==null){var o=r.pending;o===null?i.next=i:(i.next=o.next,o.next=i),r.pending=i}a!==0&&ti(n,i,a)}}function Qr(e,t,n,r){Jr[Yr++]=e,Jr[Yr++]=t,Jr[Yr++]=n,Jr[Yr++]=r,Xr|=r,e.lanes|=r,e=e.alternate,e!==null&&(e.lanes|=r)}function $r(e,t,n,r){return Qr(e,t,n,r),ni(e)}function ei(e,t){return Qr(e,null,null,t),ni(e)}function ti(e,t,n){e.lanes|=n;var r=e.alternate;r!==null&&(r.lanes|=n);for(var i=!1,a=e.return;a!==null;)a.childLanes|=n,r=a.alternate,r!==null&&(r.childLanes|=n),a.tag===22&&(e=a.stateNode,e===null||e._visibility&1||(i=!0)),e=a,a=a.return;return e.tag===3?(a=e.stateNode,i&&t!==null&&(i=31-Le(n),e=a.hiddenUpdates,r=e[i],r===null?e[i]=[t]:r.push(t),t.lane=n|536870912),a):null}function ni(e){if(50<du)throw du=0,fu=null,Error(i(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var ri={};function ii(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ai(e,t,n,r){return new ii(e,t,n,r)}function oi(e){return e=e.prototype,!(!e||!e.isReactComponent)}function si(e,t){var n=e.alternate;return n===null?(n=ai(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&65011712,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n.refCleanup=e.refCleanup,n}function ci(e,t){e.flags&=65011714;var n=e.alternate;return n===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=n.childLanes,e.lanes=n.lanes,e.child=n.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=n.memoizedProps,e.memoizedState=n.memoizedState,e.updateQueue=n.updateQueue,e.type=n.type,t=n.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function li(e,t,n,r,a,o){var s=0;if(r=e,typeof e==`function`)oi(e)&&(s=1);else if(typeof e==`string`)s=Uf(e,n,L.current)?26:e===`html`||e===`head`||e===`body`?27:5;else a:switch(e){case D:return e=ai(31,n,t,a),e.elementType=D,e.lanes=o,e;case y:return ui(n.children,a,o,t);case b:s=8,a|=24;break;case x:return e=ai(12,n,t,a|2),e.elementType=x,e.lanes=o,e;case T:return e=ai(13,n,t,a),e.elementType=T,e.lanes=o,e;case ee:return e=ai(19,n,t,a),e.elementType=ee,e.lanes=o,e;default:if(typeof e==`object`&&e)switch(e.$$typeof){case C:s=10;break a;case S:s=9;break a;case w:s=11;break a;case te:s=14;break a;case E:s=16,r=null;break a}s=29,n=Error(i(130,e===null?`null`:typeof e,``)),r=null}return t=ai(s,n,t,a),t.elementType=e,t.type=r,t.lanes=o,t}function ui(e,t,n,r){return e=ai(7,e,r,t),e.lanes=n,e}function di(e,t,n){return e=ai(6,e,null,t),e.lanes=n,e}function fi(e){var t=ai(18,null,null,0);return t.stateNode=e,t}function pi(e,t,n){return t=ai(4,e.children===null?[]:e.children,e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var mi=new WeakMap;function hi(e,t){if(typeof e==`object`&&e){var n=mi.get(e);return n===void 0?(t={value:e,source:t,stack:ye(t)},mi.set(e,t),t):n}return{value:e,source:t,stack:ye(t)}}var gi=[],_i=0,vi=null,yi=0,bi=[],xi=0,Si=null,Ci=1,wi=``;function Ti(e,t){gi[_i++]=yi,gi[_i++]=vi,vi=e,yi=t}function Ei(e,t,n){bi[xi++]=Ci,bi[xi++]=wi,bi[xi++]=Si,Si=e;var r=Ci;e=wi;var i=32-Le(r)-1;r&=~(1<<i),n+=1;var a=32-Le(t)+i;if(30<a){var o=i-i%5;a=(r&(1<<o)-1).toString(32),r>>=o,i-=o,Ci=1<<32-Le(t)+i|n<<i|r,wi=a+e}else Ci=1<<a|n<<i|r,wi=e}function Di(e){e.return!==null&&(Ti(e,1),Ei(e,1,0))}function Oi(e){for(;e===vi;)vi=gi[--_i],gi[_i]=null,yi=gi[--_i],gi[_i]=null;for(;e===Si;)Si=bi[--xi],bi[xi]=null,wi=bi[--xi],bi[xi]=null,Ci=bi[--xi],bi[xi]=null}function ki(e,t){bi[xi++]=Ci,bi[xi++]=wi,bi[xi++]=Si,Ci=t.id,wi=t.overflow,Si=e}var Ai=null,H=null,U=!1,ji=null,Mi=!1,Ni=Error(i(519));function Pi(e){throw Bi(hi(Error(i(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?`text`:`HTML`,``)),e)),Ni}function Fi(e){var t=e.stateNode,n=e.type,r=e.memoizedProps;switch(t[ot]=e,t[st]=r,n){case`dialog`:Q(`cancel`,t),Q(`close`,t);break;case`iframe`:case`object`:case`embed`:Q(`load`,t);break;case`video`:case`audio`:for(n=0;n<_d.length;n++)Q(_d[n],t);break;case`source`:Q(`error`,t);break;case`img`:case`image`:case`link`:Q(`error`,t),Q(`load`,t);break;case`details`:Q(`toggle`,t);break;case`input`:Q(`invalid`,t),zt(t,r.value,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name,!0);break;case`select`:Q(`invalid`,t);break;case`textarea`:Q(`invalid`,t),Ut(t,r.value,r.defaultValue,r.children)}n=r.children,typeof n!=`string`&&typeof n!=`number`&&typeof n!=`bigint`||t.textContent===``+n||!0===r.suppressHydrationWarning||Md(t.textContent,n)?(r.popover!=null&&(Q(`beforetoggle`,t),Q(`toggle`,t)),r.onScroll!=null&&Q(`scroll`,t),r.onScrollEnd!=null&&Q(`scrollend`,t),r.onClick!=null&&(t.onclick=Qt),t=!0):t=!1,t||Pi(e,!0)}function Ii(e){for(Ai=e.return;Ai;)switch(Ai.tag){case 5:case 31:case 13:Mi=!1;return;case 27:case 3:Mi=!0;return;default:Ai=Ai.return}}function Li(e){if(e!==Ai)return!1;if(!U)return Ii(e),U=!0,!1;var t=e.tag,n;if((n=t!==3&&t!==27)&&((n=t===5)&&(n=e.type,n=n===`form`||n===`button`||Ud(e.type,e.memoizedProps)),n=!n),n&&H&&Pi(e),Ii(e),t===13){if(e=e.memoizedState,e=e===null?null:e.dehydrated,!e)throw Error(i(317));H=uf(e)}else if(t===31){if(e=e.memoizedState,e=e===null?null:e.dehydrated,!e)throw Error(i(317));H=uf(e)}else t===27?(t=H,Zd(e.type)?(e=lf,lf=null,H=e):H=t):H=Ai?cf(e.stateNode.nextSibling):null;return!0}function Ri(){H=Ai=null,U=!1}function zi(){var e=ji;return e!==null&&(Zl===null?Zl=e:Zl.push.apply(Zl,e),ji=null),e}function Bi(e){ji===null?ji=[e]:ji.push(e)}var Vi=P(null),Hi=null,Ui=null;function Wi(e,t,n){I(Vi,t._currentValue),t._currentValue=n}function Gi(e){e._currentValue=Vi.current,F(Vi)}function Ki(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)===t?r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t):(e.childLanes|=t,r!==null&&(r.childLanes|=t)),e===n)break;e=e.return}}function qi(e,t,n,r){var a=e.child;for(a!==null&&(a.return=e);a!==null;){var o=a.dependencies;if(o!==null){var s=a.child;o=o.firstContext;a:for(;o!==null;){var c=o;o=a;for(var l=0;l<t.length;l++)if(c.context===t[l]){o.lanes|=n,c=o.alternate,c!==null&&(c.lanes|=n),Ki(o.return,n,e),r||(s=null);break a}o=c.next}}else if(a.tag===18){if(s=a.return,s===null)throw Error(i(341));s.lanes|=n,o=s.alternate,o!==null&&(o.lanes|=n),Ki(s,n,e),s=null}else s=a.child;if(s!==null)s.return=a;else for(s=a;s!==null;){if(s===e){s=null;break}if(a=s.sibling,a!==null){a.return=s.return,s=a;break}s=s.return}a=s}}function Ji(e,t,n,r){e=null;for(var a=t,o=!1;a!==null;){if(!o){if(a.flags&524288)o=!0;else if(a.flags&262144)break}if(a.tag===10){var s=a.alternate;if(s===null)throw Error(i(387));if(s=s.memoizedProps,s!==null){var c=a.type;V(a.pendingProps.value,s.value)||(e===null?e=[c]:e.push(c))}}else if(a===R.current){if(s=a.alternate,s===null)throw Error(i(387));s.memoizedState.memoizedState!==a.memoizedState.memoizedState&&(e===null?e=[Qf]:e.push(Qf))}a=a.return}e!==null&&qi(t,e,n,r),t.flags|=262144}function Yi(e){for(e=e.firstContext;e!==null;){if(!V(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function Xi(e){Hi=e,Ui=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function Zi(e){return $i(Hi,e)}function Qi(e,t){return Hi===null&&Xi(e),$i(e,t)}function $i(e,t){var n=t._currentValue;if(t={context:t,memoizedValue:n,next:null},Ui===null){if(e===null)throw Error(i(308));Ui=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else Ui=Ui.next=t;return n}var ea=typeof AbortController<`u`?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(t,n){e.push(n)}};this.abort=function(){t.aborted=!0,e.forEach(function(e){return e()})}},ta=t.unstable_scheduleCallback,na=t.unstable_NormalPriority,ra={$$typeof:C,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function ia(){return{controller:new ea,data:new Map,refCount:0}}function aa(e){e.refCount--,e.refCount===0&&ta(na,function(){e.controller.abort()})}var oa=null,sa=0,ca=0,la=null;function ua(e,t){if(oa===null){var n=oa=[];sa=0,ca=dd(),la={status:`pending`,value:void 0,then:function(e){n.push(e)}}}return sa++,t.then(da,da),t}function da(){if(--sa===0&&oa!==null){la!==null&&(la.status=`fulfilled`);var e=oa;oa=null,ca=0,la=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function fa(e,t){var n=[],r={status:`pending`,value:null,reason:null,then:function(e){n.push(e)}};return e.then(function(){r.status=`fulfilled`,r.value=t;for(var e=0;e<n.length;e++)(0,n[e])(t)},function(e){for(r.status=`rejected`,r.reason=e,e=0;e<n.length;e++)(0,n[e])(void 0)}),r}var pa=M.S;M.S=function(e,t){eu=Te(),typeof t==`object`&&t&&typeof t.then==`function`&&ua(e,t),pa!==null&&pa(e,t)};var ma=P(null);function ha(){var e=ma.current;return e===null?q.pooledCache:e}function ga(e,t){t===null?I(ma,ma.current):I(ma,t.pool)}function _a(){var e=ha();return e===null?null:{parent:ra._currentValue,pool:e}}var va=Error(i(460)),ya=Error(i(474)),ba=Error(i(542)),xa={then:function(){}};function Sa(e){return e=e.status,e===`fulfilled`||e===`rejected`}function Ca(e,t,n){switch(n=e[n],n===void 0?e.push(t):n!==t&&(t.then(Qt,Qt),t=n),t.status){case`fulfilled`:return t.value;case`rejected`:throw e=t.reason,Da(e),e;default:if(typeof t.status==`string`)t.then(Qt,Qt);else{if(e=q,e!==null&&100<e.shellSuspendCounter)throw Error(i(482));e=t,e.status=`pending`,e.then(function(e){if(t.status===`pending`){var n=t;n.status=`fulfilled`,n.value=e}},function(e){if(t.status===`pending`){var n=t;n.status=`rejected`,n.reason=e}})}switch(t.status){case`fulfilled`:return t.value;case`rejected`:throw e=t.reason,Da(e),e}throw Ta=t,va}}function wa(e){try{var t=e._init;return t(e._payload)}catch(e){throw typeof e==`object`&&e&&typeof e.then==`function`?(Ta=e,va):e}}var Ta=null;function Ea(){if(Ta===null)throw Error(i(459));var e=Ta;return Ta=null,e}function Da(e){if(e===va||e===ba)throw Error(i(483))}var Oa=null,ka=0;function Aa(e){var t=ka;return ka+=1,Oa===null&&(Oa=[]),Ca(Oa,e,t)}function ja(e,t){t=t.props.ref,e.ref=t===void 0?null:t}function Ma(e,t){throw t.$$typeof===g?Error(i(525)):(e=Object.prototype.toString.call(t),Error(i(31,e===`[object Object]`?`object with keys {`+Object.keys(t).join(`, `)+`}`:e)))}function Na(e){function t(t,n){if(e){var r=t.deletions;r===null?(t.deletions=[n],t.flags|=16):r.push(n)}}function n(n,r){if(!e)return null;for(;r!==null;)t(n,r),r=r.sibling;return null}function r(e){for(var t=new Map;e!==null;)e.key===null?t.set(e.index,e):t.set(e.key,e),e=e.sibling;return t}function a(e,t){return e=si(e,t),e.index=0,e.sibling=null,e}function o(t,n,r){return t.index=r,e?(r=t.alternate,r===null?(t.flags|=67108866,n):(r=r.index,r<n?(t.flags|=67108866,n):r)):(t.flags|=1048576,n)}function s(t){return e&&t.alternate===null&&(t.flags|=67108866),t}function c(e,t,n,r){return t===null||t.tag!==6?(t=di(n,e.mode,r),t.return=e,t):(t=a(t,n),t.return=e,t)}function l(e,t,n,r){var i=n.type;return i===y?d(e,t,n.props.children,r,n.key):t!==null&&(t.elementType===i||typeof i==`object`&&i&&i.$$typeof===E&&wa(i)===t.type)?(t=a(t,n.props),ja(t,n),t.return=e,t):(t=li(n.type,n.key,n.props,null,e.mode,r),ja(t,n),t.return=e,t)}function u(e,t,n,r){return t===null||t.tag!==4||t.stateNode.containerInfo!==n.containerInfo||t.stateNode.implementation!==n.implementation?(t=pi(n,e.mode,r),t.return=e,t):(t=a(t,n.children||[]),t.return=e,t)}function d(e,t,n,r,i){return t===null||t.tag!==7?(t=ui(n,e.mode,r,i),t.return=e,t):(t=a(t,n),t.return=e,t)}function f(e,t,n){if(typeof t==`string`&&t!==``||typeof t==`number`||typeof t==`bigint`)return t=di(``+t,e.mode,n),t.return=e,t;if(typeof t==`object`&&t){switch(t.$$typeof){case _:return n=li(t.type,t.key,t.props,null,e.mode,n),ja(n,t),n.return=e,n;case v:return t=pi(t,e.mode,n),t.return=e,t;case E:return t=wa(t),f(e,t,n)}if(j(t)||ne(t))return t=ui(t,e.mode,n,null),t.return=e,t;if(typeof t.then==`function`)return f(e,Aa(t),n);if(t.$$typeof===C)return f(e,Qi(e,t),n);Ma(e,t)}return null}function p(e,t,n,r){var i=t===null?null:t.key;if(typeof n==`string`&&n!==``||typeof n==`number`||typeof n==`bigint`)return i===null?c(e,t,``+n,r):null;if(typeof n==`object`&&n){switch(n.$$typeof){case _:return n.key===i?l(e,t,n,r):null;case v:return n.key===i?u(e,t,n,r):null;case E:return n=wa(n),p(e,t,n,r)}if(j(n)||ne(n))return i===null?d(e,t,n,r,null):null;if(typeof n.then==`function`)return p(e,t,Aa(n),r);if(n.$$typeof===C)return p(e,t,Qi(e,n),r);Ma(e,n)}return null}function m(e,t,n,r,i){if(typeof r==`string`&&r!==``||typeof r==`number`||typeof r==`bigint`)return e=e.get(n)||null,c(t,e,``+r,i);if(typeof r==`object`&&r){switch(r.$$typeof){case _:return e=e.get(r.key===null?n:r.key)||null,l(t,e,r,i);case v:return e=e.get(r.key===null?n:r.key)||null,u(t,e,r,i);case E:return r=wa(r),m(e,t,n,r,i)}if(j(r)||ne(r))return e=e.get(n)||null,d(t,e,r,i,null);if(typeof r.then==`function`)return m(e,t,n,Aa(r),i);if(r.$$typeof===C)return m(e,t,n,Qi(t,r),i);Ma(t,r)}return null}function h(i,a,s,c){for(var l=null,u=null,d=a,h=a=0,g=null;d!==null&&h<s.length;h++){d.index>h?(g=d,d=null):g=d.sibling;var _=p(i,d,s[h],c);if(_===null){d===null&&(d=g);break}e&&d&&_.alternate===null&&t(i,d),a=o(_,a,h),u===null?l=_:u.sibling=_,u=_,d=g}if(h===s.length)return n(i,d),U&&Ti(i,h),l;if(d===null){for(;h<s.length;h++)d=f(i,s[h],c),d!==null&&(a=o(d,a,h),u===null?l=d:u.sibling=d,u=d);return U&&Ti(i,h),l}for(d=r(d);h<s.length;h++)g=m(d,i,h,s[h],c),g!==null&&(e&&g.alternate!==null&&d.delete(g.key===null?h:g.key),a=o(g,a,h),u===null?l=g:u.sibling=g,u=g);return e&&d.forEach(function(e){return t(i,e)}),U&&Ti(i,h),l}function g(a,s,c,l){if(c==null)throw Error(i(151));for(var u=null,d=null,h=s,g=s=0,_=null,v=c.next();h!==null&&!v.done;g++,v=c.next()){h.index>g?(_=h,h=null):_=h.sibling;var y=p(a,h,v.value,l);if(y===null){h===null&&(h=_);break}e&&h&&y.alternate===null&&t(a,h),s=o(y,s,g),d===null?u=y:d.sibling=y,d=y,h=_}if(v.done)return n(a,h),U&&Ti(a,g),u;if(h===null){for(;!v.done;g++,v=c.next())v=f(a,v.value,l),v!==null&&(s=o(v,s,g),d===null?u=v:d.sibling=v,d=v);return U&&Ti(a,g),u}for(h=r(h);!v.done;g++,v=c.next())v=m(h,a,g,v.value,l),v!==null&&(e&&v.alternate!==null&&h.delete(v.key===null?g:v.key),s=o(v,s,g),d===null?u=v:d.sibling=v,d=v);return e&&h.forEach(function(e){return t(a,e)}),U&&Ti(a,g),u}function b(e,r,o,c){if(typeof o==`object`&&o&&o.type===y&&o.key===null&&(o=o.props.children),typeof o==`object`&&o){switch(o.$$typeof){case _:a:{for(var l=o.key;r!==null;){if(r.key===l){if(l=o.type,l===y){if(r.tag===7){n(e,r.sibling),c=a(r,o.props.children),c.return=e,e=c;break a}}else if(r.elementType===l||typeof l==`object`&&l&&l.$$typeof===E&&wa(l)===r.type){n(e,r.sibling),c=a(r,o.props),ja(c,o),c.return=e,e=c;break a}n(e,r);break}t(e,r),r=r.sibling}o.type===y?(c=ui(o.props.children,e.mode,c,o.key),c.return=e,e=c):(c=li(o.type,o.key,o.props,null,e.mode,c),ja(c,o),c.return=e,e=c)}return s(e);case v:a:{for(l=o.key;r!==null;){if(r.key===l){if(r.tag===4&&r.stateNode.containerInfo===o.containerInfo&&r.stateNode.implementation===o.implementation){n(e,r.sibling),c=a(r,o.children||[]),c.return=e,e=c;break a}n(e,r);break}t(e,r),r=r.sibling}c=pi(o,e.mode,c),c.return=e,e=c}return s(e);case E:return o=wa(o),b(e,r,o,c)}if(j(o))return h(e,r,o,c);if(ne(o)){if(l=ne(o),typeof l!=`function`)throw Error(i(150));return o=l.call(o),g(e,r,o,c)}if(typeof o.then==`function`)return b(e,r,Aa(o),c);if(o.$$typeof===C)return b(e,r,Qi(e,o),c);Ma(e,o)}return typeof o==`string`&&o!==``||typeof o==`number`||typeof o==`bigint`?(o=``+o,r!==null&&r.tag===6?(n(e,r.sibling),c=a(r,o),c.return=e,e=c):(n(e,r),c=di(o,e.mode,c),c.return=e,e=c),s(e)):n(e,r)}return function(e,t,n,r){try{ka=0;var i=b(e,t,n,r);return Oa=null,i}catch(t){if(t===va||t===ba)throw t;var a=ai(29,t,null,e.mode);return a.lanes=r,a.return=e,a}}}var Pa=Na(!0),Fa=Na(!1),Ia=!1;function La(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Ra(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function za(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Ba(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,K&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,t=ni(e),ti(e,null,n),t}return Qr(e,r,t,n),ni(e)}function Va(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,n&4194048)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,$e(e,n)}}function Ha(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,a=null;if(n=n.firstBaseUpdate,n!==null){do{var o={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};a===null?i=a=o:a=a.next=o,n=n.next}while(n!==null);a===null?i=a=t:a=a.next=t}else i=a=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:a,shared:r.shared,callbacks:r.callbacks},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}var Ua=!1;function Wa(){if(Ua){var e=la;if(e!==null)throw e}}function Ga(e,t,n,r){Ua=!1;var i=e.updateQueue;Ia=!1;var a=i.firstBaseUpdate,o=i.lastBaseUpdate,s=i.shared.pending;if(s!==null){i.shared.pending=null;var c=s,l=c.next;c.next=null,o===null?a=l:o.next=l,o=c;var u=e.alternate;u!==null&&(u=u.updateQueue,s=u.lastBaseUpdate,s!==o&&(s===null?u.firstBaseUpdate=l:s.next=l,u.lastBaseUpdate=c))}if(a!==null){var d=i.baseState;o=0,u=l=c=null,s=a;do{var f=s.lane&-536870913,p=f!==s.lane;if(p?(Y&f)===f:(r&f)===f){f!==0&&f===ca&&(Ua=!0),u!==null&&(u=u.next={lane:0,tag:s.tag,payload:s.payload,callback:null,next:null});a:{var m=e,g=s;f=t;var _=n;switch(g.tag){case 1:if(m=g.payload,typeof m==`function`){d=m.call(_,d,f);break a}d=m;break a;case 3:m.flags=m.flags&-65537|128;case 0:if(m=g.payload,f=typeof m==`function`?m.call(_,d,f):m,f==null)break a;d=h({},d,f);break a;case 2:Ia=!0}}f=s.callback,f!==null&&(e.flags|=64,p&&(e.flags|=8192),p=i.callbacks,p===null?i.callbacks=[f]:p.push(f))}else p={lane:f,tag:s.tag,payload:s.payload,callback:s.callback,next:null},u===null?(l=u=p,c=d):u=u.next=p,o|=f;if(s=s.next,s===null){if(s=i.shared.pending,s===null)break;p=s,s=p.next,p.next=null,i.lastBaseUpdate=p,i.shared.pending=null}}while(1);u===null&&(c=d),i.baseState=c,i.firstBaseUpdate=l,i.lastBaseUpdate=u,a===null&&(i.shared.lanes=0),Gl|=o,e.lanes=o,e.memoizedState=d}}function Ka(e,t){if(typeof e!=`function`)throw Error(i(191,e));e.call(t)}function qa(e,t){var n=e.callbacks;if(n!==null)for(e.callbacks=null,e=0;e<n.length;e++)Ka(n[e],t)}var Ja=P(null),Ya=P(0);function Xa(e,t){e=Ul,I(Ya,e),I(Ja,t),Ul=e|t.baseLanes}function Za(){I(Ya,Ul),I(Ja,Ja.current)}function Qa(){Ul=Ya.current,F(Ja),F(Ya)}var $a=P(null),eo=null;function to(e){var t=e.alternate;I(oo,oo.current&1),I($a,e),eo===null&&(t===null||Ja.current!==null||t.memoizedState!==null)&&(eo=e)}function no(e){I(oo,oo.current),I($a,e),eo===null&&(eo=e)}function ro(e){e.tag===22?(I(oo,oo.current),I($a,e),eo===null&&(eo=e)):io(e)}function io(){I(oo,oo.current),I($a,$a.current)}function ao(e){F($a),eo===e&&(eo=null),F(oo)}var oo=P(0);function so(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||af(n)||of(n)))return t}else if(t.tag===19&&(t.memoizedProps.revealOrder===`forwards`||t.memoizedProps.revealOrder===`backwards`||t.memoizedProps.revealOrder===`unstable_legacy-backwards`||t.memoizedProps.revealOrder===`together`)){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var co=0,W=null,G=null,lo=null,uo=!1,fo=!1,po=!1,mo=0,ho=0,go=null,_o=0;function vo(){throw Error(i(321))}function yo(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!V(e[n],t[n]))return!1;return!0}function bo(e,t,n,r,i,a){return co=a,W=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,M.H=e===null||e.memoizedState===null?Ls:Rs,po=!1,a=n(r,i),po=!1,fo&&(a=So(t,n,r,i)),xo(e),a}function xo(e){M.H=Is;var t=G!==null&&G.next!==null;if(co=0,lo=G=W=null,uo=!1,ho=0,go=null,t)throw Error(i(300));e===null||tc||(e=e.dependencies,e!==null&&Yi(e)&&(tc=!0))}function So(e,t,n,r){W=e;var a=0;do{if(fo&&(go=null),ho=0,fo=!1,25<=a)throw Error(i(301));if(a+=1,lo=G=null,e.updateQueue!=null){var o=e.updateQueue;o.lastEffect=null,o.events=null,o.stores=null,o.memoCache!=null&&(o.memoCache.index=0)}M.H=zs,o=t(n,r)}while(fo);return o}function Co(){var e=M.H,t=e.useState()[0];return t=typeof t.then==`function`?Ao(t):t,e=e.useState()[0],(G===null?null:G.memoizedState)!==e&&(W.flags|=1024),t}function wo(){var e=mo!==0;return mo=0,e}function To(e,t,n){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~n}function Eo(e){if(uo){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}uo=!1}co=0,lo=G=W=null,fo=!1,ho=mo=0,go=null}function Do(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return lo===null?W.memoizedState=lo=e:lo=lo.next=e,lo}function Oo(){if(G===null){var e=W.alternate;e=e===null?null:e.memoizedState}else e=G.next;var t=lo===null?W.memoizedState:lo.next;if(t!==null)lo=t,G=e;else{if(e===null)throw W.alternate===null?Error(i(467)):Error(i(310));G=e,e={memoizedState:G.memoizedState,baseState:G.baseState,baseQueue:G.baseQueue,queue:G.queue,next:null},lo===null?W.memoizedState=lo=e:lo=lo.next=e}return lo}function ko(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Ao(e){var t=ho;return ho+=1,go===null&&(go=[]),e=Ca(go,e,t),t=W,(lo===null?t.memoizedState:lo.next)===null&&(t=t.alternate,M.H=t===null||t.memoizedState===null?Ls:Rs),e}function jo(e){if(typeof e==`object`&&e){if(typeof e.then==`function`)return Ao(e);if(e.$$typeof===C)return Zi(e)}throw Error(i(438,String(e)))}function Mo(e){var t=null,n=W.updateQueue;if(n!==null&&(t=n.memoCache),t==null){var r=W.alternate;r!==null&&(r=r.updateQueue,r!==null&&(r=r.memoCache,r!=null&&(t={data:r.data.map(function(e){return e.slice()}),index:0})))}if(t??={data:[],index:0},n===null&&(n=ko(),W.updateQueue=n),n.memoCache=t,n=t.data[t.index],n===void 0)for(n=t.data[t.index]=Array(e),r=0;r<e;r++)n[r]=O;return t.index++,n}function No(e,t){return typeof t==`function`?t(e):t}function Po(e){return Fo(Oo(),G,e)}function Fo(e,t,n){var r=e.queue;if(r===null)throw Error(i(311));r.lastRenderedReducer=n;var a=e.baseQueue,o=r.pending;if(o!==null){if(a!==null){var s=a.next;a.next=o.next,o.next=s}t.baseQueue=a=o,r.pending=null}if(o=e.baseState,a===null)e.memoizedState=o;else{t=a.next;var c=s=null,l=null,u=t,d=!1;do{var f=u.lane&-536870913;if(f===u.lane?(co&f)===f:(Y&f)===f){var p=u.revertLane;if(p===0)l!==null&&(l=l.next={lane:0,revertLane:0,gesture:null,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),f===ca&&(d=!0);else if((co&p)===p){u=u.next,p===ca&&(d=!0);continue}else f={lane:0,revertLane:u.revertLane,gesture:null,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null},l===null?(c=l=f,s=o):l=l.next=f,W.lanes|=p,Gl|=p;f=u.action,po&&n(o,f),o=u.hasEagerState?u.eagerState:n(o,f)}else p={lane:f,revertLane:u.revertLane,gesture:u.gesture,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null},l===null?(c=l=p,s=o):l=l.next=p,W.lanes|=f,Gl|=f;u=u.next}while(u!==null&&u!==t);if(l===null?s=o:l.next=c,!V(o,e.memoizedState)&&(tc=!0,d&&(n=la,n!==null)))throw n;e.memoizedState=o,e.baseState=s,e.baseQueue=l,r.lastRenderedState=o}return a===null&&(r.lanes=0),[e.memoizedState,r.dispatch]}function Io(e){var t=Oo(),n=t.queue;if(n===null)throw Error(i(311));n.lastRenderedReducer=e;var r=n.dispatch,a=n.pending,o=t.memoizedState;if(a!==null){n.pending=null;var s=a=a.next;do o=e(o,s.action),s=s.next;while(s!==a);V(o,t.memoizedState)||(tc=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function Lo(e,t,n){var r=W,a=Oo(),o=U;if(o){if(n===void 0)throw Error(i(407));n=n()}else n=t();var s=!V((G||a).memoizedState,n);if(s&&(a.memoizedState=n,tc=!0),a=a.queue,cs(Bo.bind(null,r,a,e),[e]),a.getSnapshot!==t||s||lo!==null&&lo.memoizedState.tag&1){if(r.flags|=2048,rs(9,{destroy:void 0},zo.bind(null,r,a,n,t),null),q===null)throw Error(i(349));o||co&127||Ro(r,t,n)}return n}function Ro(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=W.updateQueue,t===null?(t=ko(),W.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function zo(e,t,n,r){t.value=n,t.getSnapshot=r,Vo(t)&&Ho(e)}function Bo(e,t,n){return n(function(){Vo(t)&&Ho(e)})}function Vo(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!V(e,n)}catch{return!0}}function Ho(e){var t=ei(e,2);t!==null&&hu(t,e,2)}function Uo(e){var t=Do();if(typeof e==`function`){var n=e;if(e=n(),po){Ie(!0);try{n()}finally{Ie(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:No,lastRenderedState:e},t}function Wo(e,t,n,r){return e.baseState=n,Fo(e,G,typeof r==`function`?r:No)}function Go(e,t,n,r,a){if(Ns(e))throw Error(i(485));if(e=t.action,e!==null){var o={payload:a,action:e,next:null,isTransition:!0,status:`pending`,value:null,reason:null,listeners:[],then:function(e){o.listeners.push(e)}};M.T===null?o.isTransition=!1:n(!0),r(o),n=t.pending,n===null?(o.next=t.pending=o,Ko(t,o)):(o.next=n.next,t.pending=n.next=o)}}function Ko(e,t){var n=t.action,r=t.payload,i=e.state;if(t.isTransition){var a=M.T,o={};M.T=o;try{var s=n(i,r),c=M.S;c!==null&&c(o,s),qo(e,t,s)}catch(n){Yo(e,t,n)}finally{a!==null&&o.types!==null&&(a.types=o.types),M.T=a}}else try{a=n(i,r),qo(e,t,a)}catch(n){Yo(e,t,n)}}function qo(e,t,n){typeof n==`object`&&n&&typeof n.then==`function`?n.then(function(n){Jo(e,t,n)},function(n){return Yo(e,t,n)}):Jo(e,t,n)}function Jo(e,t,n){t.status=`fulfilled`,t.value=n,Xo(t),e.state=n,t=e.pending,t!==null&&(n=t.next,n===t?e.pending=null:(n=n.next,t.next=n,Ko(e,n)))}function Yo(e,t,n){var r=e.pending;if(e.pending=null,r!==null){r=r.next;do t.status=`rejected`,t.reason=n,Xo(t),t=t.next;while(t!==r)}e.action=null}function Xo(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function Zo(e,t){return t}function Qo(e,t){if(U){var n=q.formState;if(n!==null){a:{var r=W;if(U){if(H){b:{for(var i=H,a=Mi;i.nodeType!==8;){if(!a){i=null;break b}if(i=cf(i.nextSibling),i===null){i=null;break b}}a=i.data,i=a===`F!`||a===`F`?i:null}if(i){H=cf(i.nextSibling),r=i.data===`F!`;break a}}Pi(r)}r=!1}r&&(t=n[0])}}return n=Do(),n.memoizedState=n.baseState=t,r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Zo,lastRenderedState:t},n.queue=r,n=As.bind(null,W,r),r.dispatch=n,r=Uo(!1),a=Ms.bind(null,W,!1,r.queue),r=Do(),i={state:t,dispatch:null,action:e,pending:null},r.queue=i,n=Go.bind(null,W,i,a,n),i.dispatch=n,r.memoizedState=e,[t,n,!1]}function $o(e){return es(Oo(),G,e)}function es(e,t,n){if(t=Fo(e,t,Zo)[0],e=Po(No)[0],typeof t==`object`&&t&&typeof t.then==`function`)try{var r=Ao(t)}catch(e){throw e===va?ba:e}else r=t;t=Oo();var i=t.queue,a=i.dispatch;return n!==t.memoizedState&&(W.flags|=2048,rs(9,{destroy:void 0},ts.bind(null,i,n),null)),[r,a,e]}function ts(e,t){e.action=t}function ns(e){var t=Oo(),n=G;if(n!==null)return es(t,n,e);Oo(),t=t.memoizedState,n=Oo();var r=n.queue.dispatch;return n.memoizedState=e,[t,r,!1]}function rs(e,t,n,r){return e={tag:e,create:n,deps:r,inst:t,next:null},t=W.updateQueue,t===null&&(t=ko(),W.updateQueue=t),n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e),e}function is(){return Oo().memoizedState}function as(e,t,n,r){var i=Do();W.flags|=e,i.memoizedState=rs(1|t,{destroy:void 0},n,r===void 0?null:r)}function os(e,t,n,r){var i=Oo();r=r===void 0?null:r;var a=i.memoizedState.inst;G!==null&&r!==null&&yo(r,G.memoizedState.deps)?i.memoizedState=rs(t,a,n,r):(W.flags|=e,i.memoizedState=rs(1|t,a,n,r))}function ss(e,t){as(8390656,8,e,t)}function cs(e,t){os(2048,8,e,t)}function ls(e){W.flags|=4;var t=W.updateQueue;if(t===null)t=ko(),W.updateQueue=t,t.events=[e];else{var n=t.events;n===null?t.events=[e]:n.push(e)}}function us(e){var t=Oo().memoizedState;return ls({ref:t,nextImpl:e}),function(){if(K&2)throw Error(i(440));return t.impl.apply(void 0,arguments)}}function ds(e,t){return os(4,2,e,t)}function fs(e,t){return os(4,4,e,t)}function ps(e,t){if(typeof t==`function`){e=e();var n=t(e);return function(){typeof n==`function`?n():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function ms(e,t,n){n=n==null?null:n.concat([e]),os(4,4,ps.bind(null,t,e),n)}function hs(){}function gs(e,t){var n=Oo();t=t===void 0?null:t;var r=n.memoizedState;return t!==null&&yo(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function _s(e,t){var n=Oo();t=t===void 0?null:t;var r=n.memoizedState;if(t!==null&&yo(t,r[1]))return r[0];if(r=e(),po){Ie(!0);try{e()}finally{Ie(!1)}}return n.memoizedState=[r,t],r}function vs(e,t,n){return n===void 0||co&1073741824&&!(Y&261930)?e.memoizedState=t:(e.memoizedState=n,e=mu(),W.lanes|=e,Gl|=e,n)}function ys(e,t,n,r){return V(n,t)?n:Ja.current===null?!(co&42)||co&1073741824&&!(Y&261930)?(tc=!0,e.memoizedState=n):(e=mu(),W.lanes|=e,Gl|=e,t):(e=vs(e,n,r),V(e,t)||(tc=!0),e)}function bs(e,t,n,r,i){var a=N.p;N.p=a!==0&&8>a?a:8;var o=M.T,s={};M.T=s,Ms(e,!1,t,n);try{var c=i(),l=M.S;l!==null&&l(s,c),typeof c==`object`&&c&&typeof c.then==`function`?js(e,t,fa(c,r),pu(e)):js(e,t,r,pu(e))}catch(n){js(e,t,{then:function(){},status:`rejected`,reason:n},pu())}finally{N.p=a,o!==null&&s.types!==null&&(o.types=s.types),M.T=o}}function xs(){}function Ss(e,t,n,r){if(e.tag!==5)throw Error(i(476));var a=Cs(e).queue;bs(e,a,t,ie,n===null?xs:function(){return ws(e),n(r)})}function Cs(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:ie,baseState:ie,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:No,lastRenderedState:ie},next:null};var n={};return t.next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:No,lastRenderedState:n},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function ws(e){var t=Cs(e);t.next===null&&(t=e.alternate.memoizedState),js(e,t.next.queue,{},pu())}function Ts(){return Zi(Qf)}function Es(){return Oo().memoizedState}function Ds(){return Oo().memoizedState}function Os(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var n=pu();e=za(n);var r=Ba(t,e,n);r!==null&&(hu(r,t,n),Va(r,t,n)),t={cache:ia()},e.payload=t;return}t=t.return}}function ks(e,t,n){var r=pu();n={lane:r,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null},Ns(e)?Ps(t,n):(n=$r(e,t,n,r),n!==null&&(hu(n,e,r),Fs(n,t,r)))}function As(e,t,n){js(e,t,n,pu())}function js(e,t,n,r){var i={lane:r,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null};if(Ns(e))Ps(t,i);else{var a=e.alternate;if(e.lanes===0&&(a===null||a.lanes===0)&&(a=t.lastRenderedReducer,a!==null))try{var o=t.lastRenderedState,s=a(o,n);if(i.hasEagerState=!0,i.eagerState=s,V(s,o))return Qr(e,t,i,0),q===null&&Zr(),!1}catch{}if(n=$r(e,t,i,r),n!==null)return hu(n,e,r),Fs(n,t,r),!0}return!1}function Ms(e,t,n,r){if(r={lane:2,revertLane:dd(),gesture:null,action:r,hasEagerState:!1,eagerState:null,next:null},Ns(e)){if(t)throw Error(i(479))}else t=$r(e,n,r,2),t!==null&&hu(t,e,2)}function Ns(e){var t=e.alternate;return e===W||t!==null&&t===W}function Ps(e,t){fo=uo=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Fs(e,t,n){if(n&4194048){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,$e(e,n)}}var Is={readContext:Zi,use:jo,useCallback:vo,useContext:vo,useEffect:vo,useImperativeHandle:vo,useLayoutEffect:vo,useInsertionEffect:vo,useMemo:vo,useReducer:vo,useRef:vo,useState:vo,useDebugValue:vo,useDeferredValue:vo,useTransition:vo,useSyncExternalStore:vo,useId:vo,useHostTransitionStatus:vo,useFormState:vo,useActionState:vo,useOptimistic:vo,useMemoCache:vo,useCacheRefresh:vo};Is.useEffectEvent=vo;var Ls={readContext:Zi,use:jo,useCallback:function(e,t){return Do().memoizedState=[e,t===void 0?null:t],e},useContext:Zi,useEffect:ss,useImperativeHandle:function(e,t,n){n=n==null?null:n.concat([e]),as(4194308,4,ps.bind(null,t,e),n)},useLayoutEffect:function(e,t){return as(4194308,4,e,t)},useInsertionEffect:function(e,t){as(4,2,e,t)},useMemo:function(e,t){var n=Do();t=t===void 0?null:t;var r=e();if(po){Ie(!0);try{e()}finally{Ie(!1)}}return n.memoizedState=[r,t],r},useReducer:function(e,t,n){var r=Do();if(n!==void 0){var i=n(t);if(po){Ie(!0);try{n(t)}finally{Ie(!1)}}}else i=t;return r.memoizedState=r.baseState=i,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:i},r.queue=e,e=e.dispatch=ks.bind(null,W,e),[r.memoizedState,e]},useRef:function(e){var t=Do();return e={current:e},t.memoizedState=e},useState:function(e){e=Uo(e);var t=e.queue,n=As.bind(null,W,t);return t.dispatch=n,[e.memoizedState,n]},useDebugValue:hs,useDeferredValue:function(e,t){return vs(Do(),e,t)},useTransition:function(){var e=Uo(!1);return e=bs.bind(null,W,e.queue,!0,!1),Do().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,n){var r=W,a=Do();if(U){if(n===void 0)throw Error(i(407));n=n()}else{if(n=t(),q===null)throw Error(i(349));Y&127||Ro(r,t,n)}a.memoizedState=n;var o={value:n,getSnapshot:t};return a.queue=o,ss(Bo.bind(null,r,o,e),[e]),r.flags|=2048,rs(9,{destroy:void 0},zo.bind(null,r,o,n,t),null),n},useId:function(){var e=Do(),t=q.identifierPrefix;if(U){var n=wi,r=Ci;n=(r&~(1<<32-Le(r)-1)).toString(32)+n,t=`_`+t+`R_`+n,n=mo++,0<n&&(t+=`H`+n.toString(32)),t+=`_`}else n=_o++,t=`_`+t+`r_`+n.toString(32)+`_`;return e.memoizedState=t},useHostTransitionStatus:Ts,useFormState:Qo,useActionState:Qo,useOptimistic:function(e){var t=Do();t.memoizedState=t.baseState=e;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=n,t=Ms.bind(null,W,!0,n),n.dispatch=t,[e,t]},useMemoCache:Mo,useCacheRefresh:function(){return Do().memoizedState=Os.bind(null,W)},useEffectEvent:function(e){var t=Do(),n={impl:e};return t.memoizedState=n,function(){if(K&2)throw Error(i(440));return n.impl.apply(void 0,arguments)}}},Rs={readContext:Zi,use:jo,useCallback:gs,useContext:Zi,useEffect:cs,useImperativeHandle:ms,useInsertionEffect:ds,useLayoutEffect:fs,useMemo:_s,useReducer:Po,useRef:is,useState:function(){return Po(No)},useDebugValue:hs,useDeferredValue:function(e,t){return ys(Oo(),G.memoizedState,e,t)},useTransition:function(){var e=Po(No)[0],t=Oo().memoizedState;return[typeof e==`boolean`?e:Ao(e),t]},useSyncExternalStore:Lo,useId:Es,useHostTransitionStatus:Ts,useFormState:$o,useActionState:$o,useOptimistic:function(e,t){return Wo(Oo(),G,e,t)},useMemoCache:Mo,useCacheRefresh:Ds};Rs.useEffectEvent=us;var zs={readContext:Zi,use:jo,useCallback:gs,useContext:Zi,useEffect:cs,useImperativeHandle:ms,useInsertionEffect:ds,useLayoutEffect:fs,useMemo:_s,useReducer:Io,useRef:is,useState:function(){return Io(No)},useDebugValue:hs,useDeferredValue:function(e,t){var n=Oo();return G===null?vs(n,e,t):ys(n,G.memoizedState,e,t)},useTransition:function(){var e=Io(No)[0],t=Oo().memoizedState;return[typeof e==`boolean`?e:Ao(e),t]},useSyncExternalStore:Lo,useId:Es,useHostTransitionStatus:Ts,useFormState:ns,useActionState:ns,useOptimistic:function(e,t){var n=Oo();return G===null?(n.baseState=e,[e,n.queue.dispatch]):Wo(n,G,e,t)},useMemoCache:Mo,useCacheRefresh:Ds};zs.useEffectEvent=us;function Bs(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:h({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Vs={enqueueSetState:function(e,t,n){e=e._reactInternals;var r=pu(),i=za(r);i.payload=t,n!=null&&(i.callback=n),t=Ba(e,i,r),t!==null&&(hu(t,e,r),Va(t,e,r))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=pu(),i=za(r);i.tag=1,i.payload=t,n!=null&&(i.callback=n),t=Ba(e,i,r),t!==null&&(hu(t,e,r),Va(t,e,r))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=pu(),r=za(n);r.tag=2,t!=null&&(r.callback=t),t=Ba(e,r,n),t!==null&&(hu(t,e,n),Va(t,e,n))}};function Hs(e,t,n,r,i,a,o){return e=e.stateNode,typeof e.shouldComponentUpdate==`function`?e.shouldComponentUpdate(r,a,o):t.prototype&&t.prototype.isPureReactComponent?!br(n,r)||!br(i,a):!0}function Us(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps==`function`&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps==`function`&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Vs.enqueueReplaceState(t,t.state,null)}function Ws(e,t){var n=t;if(`ref`in t)for(var r in n={},t)r!==`ref`&&(n[r]=t[r]);if(e=e.defaultProps)for(var i in n===t&&(n=h({},n)),e)n[i]===void 0&&(n[i]=e[i]);return n}function Gs(e){qr(e)}function Ks(e){console.error(e)}function qs(e){qr(e)}function Js(e,t){try{var n=e.onUncaughtError;n(t.value,{componentStack:t.stack})}catch(e){setTimeout(function(){throw e})}}function Ys(e,t,n){try{var r=e.onCaughtError;r(n.value,{componentStack:n.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(e){setTimeout(function(){throw e})}}function Xs(e,t,n){return n=za(n),n.tag=3,n.payload={element:null},n.callback=function(){Js(e,t)},n}function Zs(e){return e=za(e),e.tag=3,e}function Qs(e,t,n,r){var i=n.type.getDerivedStateFromError;if(typeof i==`function`){var a=r.value;e.payload=function(){return i(a)},e.callback=function(){Ys(t,n,r)}}var o=n.stateNode;o!==null&&typeof o.componentDidCatch==`function`&&(e.callback=function(){Ys(t,n,r),typeof i!=`function`&&(ru===null?ru=new Set([this]):ru.add(this));var e=r.stack;this.componentDidCatch(r.value,{componentStack:e===null?``:e})})}function $s(e,t,n,r,a){if(n.flags|=32768,typeof r==`object`&&r&&typeof r.then==`function`){if(t=n.alternate,t!==null&&Ji(t,n,a,!0),n=$a.current,n!==null){switch(n.tag){case 31:case 13:return eo===null?Du():n.alternate===null&&Wl===0&&(Wl=3),n.flags&=-257,n.flags|=65536,n.lanes=a,r===xa?n.flags|=16384:(t=n.updateQueue,t===null?n.updateQueue=new Set([r]):t.add(r),Gu(e,r,a)),!1;case 22:return n.flags|=65536,r===xa?n.flags|=16384:(t=n.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([r])},n.updateQueue=t):(n=t.retryQueue,n===null?t.retryQueue=new Set([r]):n.add(r)),Gu(e,r,a)),!1}throw Error(i(435,n.tag))}return Gu(e,r,a),Du(),!1}if(U)return t=$a.current,t===null?(r!==Ni&&(t=Error(i(423),{cause:r}),Bi(hi(t,n))),e=e.current.alternate,e.flags|=65536,a&=-a,e.lanes|=a,r=hi(r,n),a=Xs(e.stateNode,r,a),Ha(e,a),Wl!==4&&(Wl=2)):(!(t.flags&65536)&&(t.flags|=256),t.flags|=65536,t.lanes=a,r!==Ni&&(e=Error(i(422),{cause:r}),Bi(hi(e,n)))),!1;var o=Error(i(520),{cause:r});if(o=hi(o,n),Xl===null?Xl=[o]:Xl.push(o),Wl!==4&&(Wl=2),t===null)return!0;r=hi(r,n),n=t;do{switch(n.tag){case 3:return n.flags|=65536,e=a&-a,n.lanes|=e,e=Xs(n.stateNode,r,e),Ha(n,e),!1;case 1:if(t=n.type,o=n.stateNode,!(n.flags&128)&&(typeof t.getDerivedStateFromError==`function`||o!==null&&typeof o.componentDidCatch==`function`&&(ru===null||!ru.has(o))))return n.flags|=65536,a&=-a,n.lanes|=a,a=Zs(a),Qs(a,e,n,r),Ha(n,a),!1}n=n.return}while(n!==null);return!1}var ec=Error(i(461)),tc=!1;function nc(e,t,n,r){t.child=e===null?Fa(t,null,n,r):Pa(t,e.child,n,r)}function rc(e,t,n,r,i){n=n.render;var a=t.ref;if(`ref`in r){var o={};for(var s in r)s!==`ref`&&(o[s]=r[s])}else o=r;return Xi(t),r=bo(e,t,n,o,a,i),s=wo(),e!==null&&!tc?(To(e,t,i),Dc(e,t,i)):(U&&s&&Di(t),t.flags|=1,nc(e,t,r,i),t.child)}function ic(e,t,n,r,i){if(e===null){var a=n.type;return typeof a==`function`&&!oi(a)&&a.defaultProps===void 0&&n.compare===null?(t.tag=15,t.type=a,ac(e,t,a,r,i)):(e=li(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(a=e.child,!Oc(e,i)){var o=a.memoizedProps;if(n=n.compare,n=n===null?br:n,n(o,r)&&e.ref===t.ref)return Dc(e,t,i)}return t.flags|=1,e=si(a,r),e.ref=t.ref,e.return=t,t.child=e}function ac(e,t,n,r,i){if(e!==null){var a=e.memoizedProps;if(br(a,r)&&e.ref===t.ref){if(tc=!1,t.pendingProps=r=a,Oc(e,i))e.flags&131072&&(tc=!0);else return t.lanes=e.lanes,Dc(e,t,i)}}return pc(e,t,n,r,i)}function oc(e,t,n,r){var i=r.children,a=e===null?null:e.memoizedState;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),r.mode===`hidden`){if(t.flags&128){if(a=a===null?n:a.baseLanes|n,e!==null){for(r=t.child=e.child,i=0;r!==null;)i=i|r.lanes|r.childLanes,r=r.sibling;r=i&~a}else r=0,t.child=null;return cc(e,t,a,n,r)}if(n&536870912)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&ga(t,a===null?null:a.cachePool),a===null?Za():Xa(t,a),ro(t);else return r=t.lanes=536870912,cc(e,t,a===null?n:a.baseLanes|n,n,r)}else a===null?(e!==null&&ga(t,null),Za(),io(t)):(ga(t,a.cachePool),Xa(t,a),io(t),t.memoizedState=null);return nc(e,t,i,n),t.child}function sc(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function cc(e,t,n,r,i){var a=ha();return a=a===null?null:{parent:ra._currentValue,pool:a},t.memoizedState={baseLanes:n,cachePool:a},e!==null&&ga(t,null),Za(),ro(t),e!==null&&Ji(e,t,r,!0),t.childLanes=i,null}function lc(e,t){return t=Sc({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function uc(e,t,n){return Pa(t,e.child,null,n),e=lc(t,t.pendingProps),e.flags|=2,ao(t),t.memoizedState=null,e}function dc(e,t,n){var r=t.pendingProps,a=!!(t.flags&128);if(t.flags&=-129,e===null){if(U){if(r.mode===`hidden`)return e=lc(t,r),t.lanes=536870912,sc(null,e);if(no(t),(e=H)?(e=rf(e,Mi),e=e!==null&&e.data===`&`?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:Si===null?null:{id:Ci,overflow:wi},retryLane:536870912,hydrationErrors:null},n=fi(e),n.return=t,t.child=n,Ai=t,H=null)):e=null,e===null)throw Pi(t);return t.lanes=536870912,null}return lc(t,r)}var o=e.memoizedState;if(o!==null){var s=o.dehydrated;if(no(t),a){if(t.flags&256)t.flags&=-257,t=uc(e,t,n);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(i(558))}else if(tc||Ji(e,t,n,!1),a=(n&e.childLanes)!==0,tc||a){if(r=q,r!==null&&(s=et(r,n),s!==0&&s!==o.retryLane))throw o.retryLane=s,ei(e,s),hu(r,e,s),ec;Du(),t=uc(e,t,n)}else e=o.treeContext,H=cf(s.nextSibling),Ai=t,U=!0,ji=null,Mi=!1,e!==null&&ki(t,e),t=lc(t,r),t.flags|=4096;return t}return e=si(e.child,{mode:r.mode,children:r.children}),e.ref=t.ref,t.child=e,e.return=t,e}function fc(e,t){var n=t.ref;if(n===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof n!=`function`&&typeof n!=`object`)throw Error(i(284));(e===null||e.ref!==n)&&(t.flags|=4194816)}}function pc(e,t,n,r,i){return Xi(t),n=bo(e,t,n,r,void 0,i),r=wo(),e!==null&&!tc?(To(e,t,i),Dc(e,t,i)):(U&&r&&Di(t),t.flags|=1,nc(e,t,n,i),t.child)}function mc(e,t,n,r,i,a){return Xi(t),t.updateQueue=null,n=So(t,r,n,i),xo(e),r=wo(),e!==null&&!tc?(To(e,t,a),Dc(e,t,a)):(U&&r&&Di(t),t.flags|=1,nc(e,t,n,a),t.child)}function hc(e,t,n,r,i){if(Xi(t),t.stateNode===null){var a=ri,o=n.contextType;typeof o==`object`&&o&&(a=Zi(o)),a=new n(r,a),t.memoizedState=a.state!==null&&a.state!==void 0?a.state:null,a.updater=Vs,t.stateNode=a,a._reactInternals=t,a=t.stateNode,a.props=r,a.state=t.memoizedState,a.refs={},La(t),o=n.contextType,a.context=typeof o==`object`&&o?Zi(o):ri,a.state=t.memoizedState,o=n.getDerivedStateFromProps,typeof o==`function`&&(Bs(t,n,o,r),a.state=t.memoizedState),typeof n.getDerivedStateFromProps==`function`||typeof a.getSnapshotBeforeUpdate==`function`||typeof a.UNSAFE_componentWillMount!=`function`&&typeof a.componentWillMount!=`function`||(o=a.state,typeof a.componentWillMount==`function`&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount==`function`&&a.UNSAFE_componentWillMount(),o!==a.state&&Vs.enqueueReplaceState(a,a.state,null),Ga(t,r,a,i),Wa(),a.state=t.memoizedState),typeof a.componentDidMount==`function`&&(t.flags|=4194308),r=!0}else if(e===null){a=t.stateNode;var s=t.memoizedProps,c=Ws(n,s);a.props=c;var l=a.context,u=n.contextType;o=ri,typeof u==`object`&&u&&(o=Zi(u));var d=n.getDerivedStateFromProps;u=typeof d==`function`||typeof a.getSnapshotBeforeUpdate==`function`,s=t.pendingProps!==s,u||typeof a.UNSAFE_componentWillReceiveProps!=`function`&&typeof a.componentWillReceiveProps!=`function`||(s||l!==o)&&Us(t,a,r,o),Ia=!1;var f=t.memoizedState;a.state=f,Ga(t,r,a,i),Wa(),l=t.memoizedState,s||f!==l||Ia?(typeof d==`function`&&(Bs(t,n,d,r),l=t.memoizedState),(c=Ia||Hs(t,n,c,r,f,l,o))?(u||typeof a.UNSAFE_componentWillMount!=`function`&&typeof a.componentWillMount!=`function`||(typeof a.componentWillMount==`function`&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount==`function`&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount==`function`&&(t.flags|=4194308)):(typeof a.componentDidMount==`function`&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=l),a.props=r,a.state=l,a.context=o,r=c):(typeof a.componentDidMount==`function`&&(t.flags|=4194308),r=!1)}else{a=t.stateNode,Ra(e,t),o=t.memoizedProps,u=Ws(n,o),a.props=u,d=t.pendingProps,f=a.context,l=n.contextType,c=ri,typeof l==`object`&&l&&(c=Zi(l)),s=n.getDerivedStateFromProps,(l=typeof s==`function`||typeof a.getSnapshotBeforeUpdate==`function`)||typeof a.UNSAFE_componentWillReceiveProps!=`function`&&typeof a.componentWillReceiveProps!=`function`||(o!==d||f!==c)&&Us(t,a,r,c),Ia=!1,f=t.memoizedState,a.state=f,Ga(t,r,a,i),Wa();var p=t.memoizedState;o!==d||f!==p||Ia||e!==null&&e.dependencies!==null&&Yi(e.dependencies)?(typeof s==`function`&&(Bs(t,n,s,r),p=t.memoizedState),(u=Ia||Hs(t,n,u,r,f,p,c)||e!==null&&e.dependencies!==null&&Yi(e.dependencies))?(l||typeof a.UNSAFE_componentWillUpdate!=`function`&&typeof a.componentWillUpdate!=`function`||(typeof a.componentWillUpdate==`function`&&a.componentWillUpdate(r,p,c),typeof a.UNSAFE_componentWillUpdate==`function`&&a.UNSAFE_componentWillUpdate(r,p,c)),typeof a.componentDidUpdate==`function`&&(t.flags|=4),typeof a.getSnapshotBeforeUpdate==`function`&&(t.flags|=1024)):(typeof a.componentDidUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=p),a.props=r,a.state=p,a.context=c,r=u):(typeof a.componentDidUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),r=!1)}return a=r,fc(e,t),r=!!(t.flags&128),a||r?(a=t.stateNode,n=r&&typeof n.getDerivedStateFromError!=`function`?null:a.render(),t.flags|=1,e!==null&&r?(t.child=Pa(t,e.child,null,i),t.child=Pa(t,null,n,i)):nc(e,t,n,i),t.memoizedState=a.state,e=t.child):e=Dc(e,t,i),e}function gc(e,t,n,r){return Ri(),t.flags|=256,nc(e,t,n,r),t.child}var _c={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function vc(e){return{baseLanes:e,cachePool:_a()}}function yc(e,t,n){return e=e===null?0:e.childLanes&~n,t&&(e|=Jl),e}function bc(e,t,n){var r=t.pendingProps,a=!1,o=!!(t.flags&128),s;if((s=o)||(s=e!==null&&e.memoizedState===null?!1:!!(oo.current&2)),s&&(a=!0,t.flags&=-129),s=!!(t.flags&32),t.flags&=-33,e===null){if(U){if(a?to(t):io(t),(e=H)?(e=rf(e,Mi),e=e!==null&&e.data!==`&`?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:Si===null?null:{id:Ci,overflow:wi},retryLane:536870912,hydrationErrors:null},n=fi(e),n.return=t,t.child=n,Ai=t,H=null)):e=null,e===null)throw Pi(t);return of(e)?t.lanes=32:t.lanes=536870912,null}var c=r.children;return r=r.fallback,a?(io(t),a=t.mode,c=Sc({mode:`hidden`,children:c},a),r=ui(r,a,n,null),c.return=t,r.return=t,c.sibling=r,t.child=c,r=t.child,r.memoizedState=vc(n),r.childLanes=yc(e,s,n),t.memoizedState=_c,sc(null,r)):(to(t),xc(t,c))}var l=e.memoizedState;if(l!==null&&(c=l.dehydrated,c!==null)){if(o)t.flags&256?(to(t),t.flags&=-257,t=Cc(e,t,n)):t.memoizedState===null?(io(t),c=r.fallback,a=t.mode,r=Sc({mode:`visible`,children:r.children},a),c=ui(c,a,n,null),c.flags|=2,r.return=t,c.return=t,r.sibling=c,t.child=r,Pa(t,e.child,null,n),r=t.child,r.memoizedState=vc(n),r.childLanes=yc(e,s,n),t.memoizedState=_c,t=sc(null,r)):(io(t),t.child=e.child,t.flags|=128,t=null);else if(to(t),of(c)){if(s=c.nextSibling&&c.nextSibling.dataset,s)var u=s.dgst;s=u,r=Error(i(419)),r.stack=``,r.digest=s,Bi({value:r,source:null,stack:null}),t=Cc(e,t,n)}else if(tc||Ji(e,t,n,!1),s=(n&e.childLanes)!==0,tc||s){if(s=q,s!==null&&(r=et(s,n),r!==0&&r!==l.retryLane))throw l.retryLane=r,ei(e,r),hu(s,e,r),ec;af(c)||Du(),t=Cc(e,t,n)}else af(c)?(t.flags|=192,t.child=e.child,t=null):(e=l.treeContext,H=cf(c.nextSibling),Ai=t,U=!0,ji=null,Mi=!1,e!==null&&ki(t,e),t=xc(t,r.children),t.flags|=4096);return t}return a?(io(t),c=r.fallback,a=t.mode,l=e.child,u=l.sibling,r=si(l,{mode:`hidden`,children:r.children}),r.subtreeFlags=l.subtreeFlags&65011712,u===null?(c=ui(c,a,n,null),c.flags|=2):c=si(u,c),c.return=t,r.return=t,r.sibling=c,t.child=r,sc(null,r),r=t.child,c=e.child.memoizedState,c===null?c=vc(n):(a=c.cachePool,a===null?a=_a():(l=ra._currentValue,a=a.parent===l?a:{parent:l,pool:l}),c={baseLanes:c.baseLanes|n,cachePool:a}),r.memoizedState=c,r.childLanes=yc(e,s,n),t.memoizedState=_c,sc(e.child,r)):(to(t),n=e.child,e=n.sibling,n=si(n,{mode:`visible`,children:r.children}),n.return=t,n.sibling=null,e!==null&&(s=t.deletions,s===null?(t.deletions=[e],t.flags|=16):s.push(e)),t.child=n,t.memoizedState=null,n)}function xc(e,t){return t=Sc({mode:`visible`,children:t},e.mode),t.return=e,e.child=t}function Sc(e,t){return e=ai(22,e,null,t),e.lanes=0,e}function Cc(e,t,n){return Pa(t,e.child,null,n),e=xc(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function wc(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Ki(e.return,t,n)}function Tc(e,t,n,r,i,a){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i,treeForkCount:a}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i,o.treeForkCount=a)}function Ec(e,t,n){var r=t.pendingProps,i=r.revealOrder,a=r.tail;r=r.children;var o=oo.current,s=!!(o&2);if(s?(o=o&1|2,t.flags|=128):o&=1,I(oo,o),nc(e,t,r,n),r=U?yi:0,!s&&e!==null&&e.flags&128)a:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&wc(e,n,t);else if(e.tag===19)wc(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break a;for(;e.sibling===null;){if(e.return===null||e.return===t)break a;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(i){case`forwards`:for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&so(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),Tc(t,!1,i,n,a,r);break;case`backwards`:case`unstable_legacy-backwards`:for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&so(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}Tc(t,!0,n,null,a,r);break;case`together`:Tc(t,!1,null,null,void 0,r);break;default:t.memoizedState=null}return t.child}function Dc(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Gl|=t.lanes,(n&t.childLanes)===0){if(e!==null){if(Ji(e,t,n,!1),(n&t.childLanes)===0)return null}else return null}if(e!==null&&t.child!==e.child)throw Error(i(153));if(t.child!==null){for(e=t.child,n=si(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=si(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Oc(e,t){return(e.lanes&t)!==0||(e=e.dependencies,!!(e!==null&&Yi(e)))}function kc(e,t,n){switch(t.tag){case 3:le(t,t.stateNode.containerInfo),Wi(t,ra,e.memoizedState.cache),Ri();break;case 27:case 5:de(t);break;case 4:le(t,t.stateNode.containerInfo);break;case 10:Wi(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,no(t),null;break;case 13:var r=t.memoizedState;if(r!==null)return r.dehydrated===null?(n&t.child.childLanes)===0?(to(t),e=Dc(e,t,n),e===null?null:e.sibling):bc(e,t,n):(to(t),t.flags|=128,null);to(t);break;case 19:var i=!!(e.flags&128);if(r=(n&t.childLanes)!==0,r||=(Ji(e,t,n,!1),(n&t.childLanes)!==0),i){if(r)return Ec(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),I(oo,oo.current),r)break;return null;case 22:return t.lanes=0,oc(e,t,n,t.pendingProps);case 24:Wi(t,ra,e.memoizedState.cache)}return Dc(e,t,n)}function Ac(e,t,n){if(e!==null){if(e.memoizedProps!==t.pendingProps)tc=!0;else{if(!Oc(e,n)&&!(t.flags&128))return tc=!1,kc(e,t,n);tc=!!(e.flags&131072)}}else tc=!1,U&&t.flags&1048576&&Ei(t,yi,t.index);switch(t.lanes=0,t.tag){case 16:a:{var r=t.pendingProps;if(e=wa(t.elementType),t.type=e,typeof e==`function`)oi(e)?(r=Ws(e,r),t.tag=1,t=hc(null,t,e,r,n)):(t.tag=0,t=pc(null,t,e,r,n));else{if(e!=null){var a=e.$$typeof;if(a===w){t.tag=11,t=rc(null,t,e,r,n);break a}if(a===te){t.tag=14,t=ic(null,t,e,r,n);break a}}throw t=re(e)||e,Error(i(306,t,``))}}return t;case 0:return pc(e,t,t.type,t.pendingProps,n);case 1:return r=t.type,a=Ws(r,t.pendingProps),hc(e,t,r,a,n);case 3:a:{if(le(t,t.stateNode.containerInfo),e===null)throw Error(i(387));r=t.pendingProps;var o=t.memoizedState;a=o.element,Ra(e,t),Ga(t,r,null,n);var s=t.memoizedState;if(r=s.cache,Wi(t,ra,r),r!==o.cache&&qi(t,[ra],n,!0),Wa(),r=s.element,o.isDehydrated){if(o={element:r,isDehydrated:!1,cache:s.cache},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){t=gc(e,t,r,n);break a}if(r!==a){a=hi(Error(i(424)),t),Bi(a),t=gc(e,t,r,n);break a}switch(e=t.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName===`HTML`?e.ownerDocument.body:e}for(H=cf(e.firstChild),Ai=t,U=!0,ji=null,Mi=!0,n=Fa(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling}else{if(Ri(),r===a){t=Dc(e,t,n);break a}nc(e,t,r,n)}t=t.child}return t;case 26:return fc(e,t),e===null?(n=kf(t.type,null,t.pendingProps,null))?t.memoizedState=n:U||(n=t.type,e=t.pendingProps,r=Bd(ce.current).createElement(n),r[ot]=t,r[st]=e,Pd(r,n,e),yt(r),t.stateNode=r):t.memoizedState=kf(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return de(t),e===null&&U&&(r=t.stateNode=ff(t.type,t.pendingProps,ce.current),Ai=t,Mi=!0,a=H,Zd(t.type)?(lf=a,H=cf(r.firstChild)):H=a),nc(e,t,t.pendingProps.children,n),fc(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&U&&((a=r=H)&&(r=tf(r,t.type,t.pendingProps,Mi),r===null?a=!1:(t.stateNode=r,Ai=t,H=cf(r.firstChild),Mi=!1,a=!0)),a||Pi(t)),de(t),a=t.type,o=t.pendingProps,s=e===null?null:e.memoizedProps,r=o.children,Ud(a,o)?r=null:s!==null&&Ud(a,s)&&(t.flags|=32),t.memoizedState!==null&&(a=bo(e,t,Co,null,null,n),Qf._currentValue=a),fc(e,t),nc(e,t,r,n),t.child;case 6:return e===null&&U&&((e=n=H)&&(n=nf(n,t.pendingProps,Mi),n===null?e=!1:(t.stateNode=n,Ai=t,H=null,e=!0)),e||Pi(t)),null;case 13:return bc(e,t,n);case 4:return le(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Pa(t,null,r,n):nc(e,t,r,n),t.child;case 11:return rc(e,t,t.type,t.pendingProps,n);case 7:return nc(e,t,t.pendingProps,n),t.child;case 8:return nc(e,t,t.pendingProps.children,n),t.child;case 12:return nc(e,t,t.pendingProps.children,n),t.child;case 10:return r=t.pendingProps,Wi(t,t.type,r.value),nc(e,t,r.children,n),t.child;case 9:return a=t.type._context,r=t.pendingProps.children,Xi(t),a=Zi(a),r=r(a),t.flags|=1,nc(e,t,r,n),t.child;case 14:return ic(e,t,t.type,t.pendingProps,n);case 15:return ac(e,t,t.type,t.pendingProps,n);case 19:return Ec(e,t,n);case 31:return dc(e,t,n);case 22:return oc(e,t,n,t.pendingProps);case 24:return Xi(t),r=Zi(ra),e===null?(a=ha(),a===null&&(a=q,o=ia(),a.pooledCache=o,o.refCount++,o!==null&&(a.pooledCacheLanes|=n),a=o),t.memoizedState={parent:r,cache:a},La(t),Wi(t,ra,a)):((e.lanes&n)!==0&&(Ra(e,t),Ga(t,null,null,n),Wa()),a=e.memoizedState,o=t.memoizedState,a.parent===r?(r=o.cache,Wi(t,ra,r),r!==a.cache&&qi(t,[ra],n,!0)):(a={parent:r,cache:r},t.memoizedState=a,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=a),Wi(t,ra,r))),nc(e,t,t.pendingProps.children,n),t.child;case 29:throw t.pendingProps}throw Error(i(156,t.tag))}function jc(e){e.flags|=4}function Mc(e,t,n,r,i){if((t=!!(e.mode&32))&&(t=!1),t){if(e.flags|=16777216,(i&335544128)===i){if(e.stateNode.complete)e.flags|=8192;else if(wu())e.flags|=8192;else throw Ta=xa,ya}}else e.flags&=-16777217}function Nc(e,t){if(t.type!==`stylesheet`||t.state.loading&4)e.flags&=-16777217;else if(e.flags|=16777216,!Wf(t)){if(wu())e.flags|=8192;else throw Ta=xa,ya}}function Pc(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag===22?536870912:Je(),e.lanes|=t,Yl|=t)}function Fc(e,t){if(!U)switch(e.tailMode){case`hidden`:t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case`collapsed`:n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Ic(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&65011712,r|=i.flags&65011712,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function Lc(e,t,n){var r=t.pendingProps;switch(Oi(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ic(t),null;case 1:return Ic(t),null;case 3:return n=t.stateNode,r=null,e!==null&&(r=e.memoizedState.cache),t.memoizedState.cache!==r&&(t.flags|=2048),Gi(ra),ue(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(Li(t)?jc(t):e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,zi())),Ic(t),null;case 26:var a=t.type,o=t.memoizedState;return e===null?(jc(t),o===null?(Ic(t),Mc(t,a,null,r,n)):(Ic(t),Nc(t,o))):o?o===e.memoizedState?(Ic(t),t.flags&=-16777217):(jc(t),Ic(t),Nc(t,o)):(e=e.memoizedProps,e!==r&&jc(t),Ic(t),Mc(t,a,e,r,n)),null;case 27:if(fe(t),n=ce.current,a=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==r&&jc(t);else{if(!r){if(t.stateNode===null)throw Error(i(166));return Ic(t),null}e=L.current,Li(t)?Fi(t,e):(e=ff(a,r,n),t.stateNode=e,jc(t))}return Ic(t),null;case 5:if(fe(t),a=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==r&&jc(t);else{if(!r){if(t.stateNode===null)throw Error(i(166));return Ic(t),null}if(o=L.current,Li(t))Fi(t,o);else{var s=Bd(ce.current);switch(o){case 1:o=s.createElementNS(`http://www.w3.org/2000/svg`,a);break;case 2:o=s.createElementNS(`http://www.w3.org/1998/Math/MathML`,a);break;default:switch(a){case`svg`:o=s.createElementNS(`http://www.w3.org/2000/svg`,a);break;case`math`:o=s.createElementNS(`http://www.w3.org/1998/Math/MathML`,a);break;case`script`:o=s.createElement(`div`),o.innerHTML=`<script><\/script>`,o=o.removeChild(o.firstChild);break;case`select`:o=typeof r.is==`string`?s.createElement(`select`,{is:r.is}):s.createElement(`select`),r.multiple?o.multiple=!0:r.size&&(o.size=r.size);break;default:o=typeof r.is==`string`?s.createElement(a,{is:r.is}):s.createElement(a)}}o[ot]=t,o[st]=r;a:for(s=t.child;s!==null;){if(s.tag===5||s.tag===6)o.appendChild(s.stateNode);else if(s.tag!==4&&s.tag!==27&&s.child!==null){s.child.return=s,s=s.child;continue}if(s===t)break a;for(;s.sibling===null;){if(s.return===null||s.return===t)break a;s=s.return}s.sibling.return=s.return,s=s.sibling}t.stateNode=o;a:switch(Pd(o,a,r),a){case`button`:case`input`:case`select`:case`textarea`:r=!!r.autoFocus;break a;case`img`:r=!0;break a;default:r=!1}r&&jc(t)}}return Ic(t),Mc(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,n),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==r&&jc(t);else{if(typeof r!=`string`&&t.stateNode===null)throw Error(i(166));if(e=ce.current,Li(t)){if(e=t.stateNode,n=t.memoizedProps,r=null,a=Ai,a!==null)switch(a.tag){case 27:case 5:r=a.memoizedProps}e[ot]=t,e=!!(e.nodeValue===n||r!==null&&!0===r.suppressHydrationWarning||Md(e.nodeValue,n)),e||Pi(t,!0)}else e=Bd(e).createTextNode(r),e[ot]=t,t.stateNode=e}return Ic(t),null;case 31:if(n=t.memoizedState,e===null||e.memoizedState!==null){if(r=Li(t),n!==null){if(e===null){if(!r)throw Error(i(318));if(e=t.memoizedState,e=e===null?null:e.dehydrated,!e)throw Error(i(557));e[ot]=t}else Ri(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;Ic(t),e=!1}else n=zi(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=n),e=!0;if(!e)return t.flags&256?(ao(t),t):(ao(t),null);if(t.flags&128)throw Error(i(558))}return Ic(t),null;case 13:if(r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(a=Li(t),r!==null&&r.dehydrated!==null){if(e===null){if(!a)throw Error(i(318));if(a=t.memoizedState,a=a===null?null:a.dehydrated,!a)throw Error(i(317));a[ot]=t}else Ri(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;Ic(t),a=!1}else a=zi(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),a=!0;if(!a)return t.flags&256?(ao(t),t):(ao(t),null)}return ao(t),t.flags&128?(t.lanes=n,t):(n=r!==null,e=e!==null&&e.memoizedState!==null,n&&(r=t.child,a=null,r.alternate!==null&&r.alternate.memoizedState!==null&&r.alternate.memoizedState.cachePool!==null&&(a=r.alternate.memoizedState.cachePool.pool),o=null,r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(o=r.memoizedState.cachePool.pool),o!==a&&(r.flags|=2048)),n!==e&&n&&(t.child.flags|=8192),Pc(t,t.updateQueue),Ic(t),null);case 4:return ue(),e===null&&Sd(t.stateNode.containerInfo),Ic(t),null;case 10:return Gi(t.type),Ic(t),null;case 19:if(F(oo),r=t.memoizedState,r===null)return Ic(t),null;if(a=!!(t.flags&128),o=r.rendering,o===null){if(a)Fc(r,!1);else{if(Wl!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(o=so(e),o!==null){for(t.flags|=128,Fc(r,!1),e=o.updateQueue,t.updateQueue=e,Pc(t,e),t.subtreeFlags=0,e=n,n=t.child;n!==null;)ci(n,e),n=n.sibling;return I(oo,oo.current&1|2),U&&Ti(t,r.treeForkCount),t.child}e=e.sibling}r.tail!==null&&Te()>tu&&(t.flags|=128,a=!0,Fc(r,!1),t.lanes=4194304)}}else{if(!a){if(e=so(o),e!==null){if(t.flags|=128,a=!0,e=e.updateQueue,t.updateQueue=e,Pc(t,e),Fc(r,!0),r.tail===null&&r.tailMode===`hidden`&&!o.alternate&&!U)return Ic(t),null}else 2*Te()-r.renderingStartTime>tu&&n!==536870912&&(t.flags|=128,a=!0,Fc(r,!1),t.lanes=4194304)}r.isBackwards?(o.sibling=t.child,t.child=o):(e=r.last,e===null?t.child=o:e.sibling=o,r.last=o)}return r.tail===null?(Ic(t),null):(e=r.tail,r.rendering=e,r.tail=e.sibling,r.renderingStartTime=Te(),e.sibling=null,n=oo.current,I(oo,a?n&1|2:n&1),U&&Ti(t,r.treeForkCount),e);case 22:case 23:return ao(t),Qa(),r=t.memoizedState!==null,e===null?r&&(t.flags|=8192):e.memoizedState!==null!==r&&(t.flags|=8192),r?n&536870912&&!(t.flags&128)&&(Ic(t),t.subtreeFlags&6&&(t.flags|=8192)):Ic(t),n=t.updateQueue,n!==null&&Pc(t,n.retryQueue),n=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),r=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(r=t.memoizedState.cachePool.pool),r!==n&&(t.flags|=2048),e!==null&&F(ma),null;case 24:return n=null,e!==null&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),Gi(ra),Ic(t),null;case 25:return null;case 30:return null}throw Error(i(156,t.tag))}function Rc(e,t){switch(Oi(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Gi(ra),ue(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return fe(t),null;case 31:if(t.memoizedState!==null){if(ao(t),t.alternate===null)throw Error(i(340));Ri()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(ao(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(i(340));Ri()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return F(oo),null;case 4:return ue(),null;case 10:return Gi(t.type),null;case 22:case 23:return ao(t),Qa(),e!==null&&F(ma),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return Gi(ra),null;case 25:return null;default:return null}}function zc(e,t){switch(Oi(t),t.tag){case 3:Gi(ra),ue();break;case 26:case 27:case 5:fe(t);break;case 4:ue();break;case 31:t.memoizedState!==null&&ao(t);break;case 13:ao(t);break;case 19:F(oo);break;case 10:Gi(t.type);break;case 22:case 23:ao(t),Qa(),e!==null&&F(ma);break;case 24:Gi(ra)}}function Bc(e,t){try{var n=t.updateQueue,r=n===null?null:n.lastEffect;if(r!==null){var i=r.next;n=i;do{if((n.tag&e)===e){r=void 0;var a=n.create,o=n.inst;r=a(),o.destroy=r}n=n.next}while(n!==i)}}catch(e){Z(t,t.return,e)}}function Vc(e,t,n){try{var r=t.updateQueue,i=r===null?null:r.lastEffect;if(i!==null){var a=i.next;r=a;do{if((r.tag&e)===e){var o=r.inst,s=o.destroy;if(s!==void 0){o.destroy=void 0,i=t;var c=n,l=s;try{l()}catch(e){Z(i,c,e)}}}r=r.next}while(r!==a)}}catch(e){Z(t,t.return,e)}}function Hc(e){var t=e.updateQueue;if(t!==null){var n=e.stateNode;try{qa(t,n)}catch(t){Z(e,e.return,t)}}}function Uc(e,t,n){n.props=Ws(e.type,e.memoizedProps),n.state=e.memoizedState;try{n.componentWillUnmount()}catch(n){Z(e,t,n)}}function Wc(e,t){try{var n=e.ref;if(n!==null){switch(e.tag){case 26:case 27:case 5:var r=e.stateNode;break;case 30:r=e.stateNode;break;default:r=e.stateNode}typeof n==`function`?e.refCleanup=n(r):n.current=r}}catch(n){Z(e,t,n)}}function Gc(e,t){var n=e.ref,r=e.refCleanup;if(n!==null){if(typeof r==`function`)try{r()}catch(n){Z(e,t,n)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof n==`function`)try{n(null)}catch(n){Z(e,t,n)}else n.current=null}}function Kc(e){var t=e.type,n=e.memoizedProps,r=e.stateNode;try{a:switch(t){case`button`:case`input`:case`select`:case`textarea`:n.autoFocus&&r.focus();break a;case`img`:n.src?r.src=n.src:n.srcSet&&(r.srcset=n.srcSet)}}catch(t){Z(e,e.return,t)}}function qc(e,t,n){try{var r=e.stateNode;Fd(r,e.type,n,t),r[st]=t}catch(t){Z(e,e.return,t)}}function Jc(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Zd(e.type)||e.tag===4}function Yc(e){a:for(;;){for(;e.sibling===null;){if(e.return===null||Jc(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Zd(e.type)||e.flags&2||e.child===null||e.tag===4)continue a;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Xc(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?(n.nodeType===9?n.body:n.nodeName===`HTML`?n.ownerDocument.body:n).insertBefore(e,t):(t=n.nodeType===9?n.body:n.nodeName===`HTML`?n.ownerDocument.body:n,t.appendChild(e),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Qt));else if(r!==4&&(r===27&&Zd(e.type)&&(n=e.stateNode,t=null),e=e.child,e!==null))for(Xc(e,t,n),e=e.sibling;e!==null;)Xc(e,t,n),e=e.sibling}function Zc(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(r===27&&Zd(e.type)&&(n=e.stateNode),e=e.child,e!==null))for(Zc(e,t,n),e=e.sibling;e!==null;)Zc(e,t,n),e=e.sibling}function Qc(e){var t=e.stateNode,n=e.memoizedProps;try{for(var r=e.type,i=t.attributes;i.length;)t.removeAttributeNode(i[0]);Pd(t,r,n),t[ot]=e,t[st]=n}catch(t){Z(e,e.return,t)}}var $c=!1,el=!1,tl=!1,nl=typeof WeakSet==`function`?WeakSet:Set,rl=null;function il(e,t){if(e=e.containerInfo,Rd=sp,e=wr(e),Tr(e)){if(`selectionStart`in e)var n={start:e.selectionStart,end:e.selectionEnd};else a:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var a=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break a}var s=0,c=-1,l=-1,u=0,d=0,f=e,p=null;b:for(;;){for(var m;f!==n||a!==0&&f.nodeType!==3||(c=s+a),f!==o||r!==0&&f.nodeType!==3||(l=s+r),f.nodeType===3&&(s+=f.nodeValue.length),(m=f.firstChild)!==null;)p=f,f=m;for(;;){if(f===e)break b;if(p===n&&++u===a&&(c=s),p===o&&++d===r&&(l=s),(m=f.nextSibling)!==null)break;f=p,p=f.parentNode}f=m}n=c===-1||l===-1?null:{start:c,end:l}}else n=null}n||={start:0,end:0}}else n=null;for(zd={focusedElem:e,selectionRange:n},sp=!1,rl=t;rl!==null;)if(t=rl,e=t.child,t.subtreeFlags&1028&&e!==null)e.return=t,rl=e;else for(;rl!==null;){switch(t=rl,o=t.alternate,e=t.flags,t.tag){case 0:if(e&4&&(e=t.updateQueue,e=e===null?null:e.events,e!==null))for(n=0;n<e.length;n++)a=e[n],a.ref.impl=a.nextImpl;break;case 11:case 15:break;case 1:if(e&1024&&o!==null){e=void 0,n=t,a=o.memoizedProps,o=o.memoizedState,r=n.stateNode;try{var h=Ws(n.type,a);e=r.getSnapshotBeforeUpdate(h,o),r.__reactInternalSnapshotBeforeUpdate=e}catch(e){Z(n,n.return,e)}}break;case 3:if(e&1024){if(e=t.stateNode.containerInfo,n=e.nodeType,n===9)ef(e);else if(n===1)switch(e.nodeName){case`HEAD`:case`HTML`:case`BODY`:ef(e);break;default:e.textContent=``}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if(e&1024)throw Error(i(163))}if(e=t.sibling,e!==null){e.return=t.return,rl=e;break}rl=t.return}}function al(e,t,n){var r=n.flags;switch(n.tag){case 0:case 11:case 15:bl(e,n),r&4&&Bc(5,n);break;case 1:if(bl(e,n),r&4){if(e=n.stateNode,t===null)try{e.componentDidMount()}catch(e){Z(n,n.return,e)}else{var i=Ws(n.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(i,t,e.__reactInternalSnapshotBeforeUpdate)}catch(e){Z(n,n.return,e)}}}r&64&&Hc(n),r&512&&Wc(n,n.return);break;case 3:if(bl(e,n),r&64&&(e=n.updateQueue,e!==null)){if(t=null,n.child!==null)switch(n.child.tag){case 27:case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}try{qa(e,t)}catch(e){Z(n,n.return,e)}}break;case 27:t===null&&r&4&&Qc(n);case 26:case 5:bl(e,n),t===null&&r&4&&Kc(n),r&512&&Wc(n,n.return);break;case 12:bl(e,n);break;case 31:bl(e,n),r&4&&dl(e,n);break;case 13:bl(e,n),r&4&&fl(e,n),r&64&&(e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(n=Ju.bind(null,n),sf(e,n))));break;case 22:if(r=n.memoizedState!==null||$c,!r){t=t!==null&&t.memoizedState!==null||el,i=$c;var a=el;$c=r,(el=t)&&!a?Sl(e,n,!!(n.subtreeFlags&8772)):bl(e,n),$c=i,el=a}break;case 30:break;default:bl(e,n)}}function ol(e){var t=e.alternate;t!==null&&(e.alternate=null,ol(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&mt(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var sl=null,cl=!1;function ll(e,t,n){for(n=n.child;n!==null;)ul(e,t,n),n=n.sibling}function ul(e,t,n){if(Fe&&typeof Fe.onCommitFiberUnmount==`function`)try{Fe.onCommitFiberUnmount(Pe,n)}catch{}switch(n.tag){case 26:el||Gc(n,t),ll(e,t,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&(n=n.stateNode,n.parentNode.removeChild(n));break;case 27:el||Gc(n,t);var r=sl,i=cl;Zd(n.type)&&(sl=n.stateNode,cl=!1),ll(e,t,n),pf(n.stateNode),sl=r,cl=i;break;case 5:el||Gc(n,t);case 6:if(r=sl,i=cl,sl=null,ll(e,t,n),sl=r,cl=i,sl!==null){if(cl)try{(sl.nodeType===9?sl.body:sl.nodeName===`HTML`?sl.ownerDocument.body:sl).removeChild(n.stateNode)}catch(e){Z(n,t,e)}else try{sl.removeChild(n.stateNode)}catch(e){Z(n,t,e)}}break;case 18:sl!==null&&(cl?(e=sl,Qd(e.nodeType===9?e.body:e.nodeName===`HTML`?e.ownerDocument.body:e,n.stateNode),Np(e)):Qd(sl,n.stateNode));break;case 4:r=sl,i=cl,sl=n.stateNode.containerInfo,cl=!0,ll(e,t,n),sl=r,cl=i;break;case 0:case 11:case 14:case 15:Vc(2,n,t),el||Vc(4,n,t),ll(e,t,n);break;case 1:el||(Gc(n,t),r=n.stateNode,typeof r.componentWillUnmount==`function`&&Uc(n,t,r)),ll(e,t,n);break;case 21:ll(e,t,n);break;case 22:el=(r=el)||n.memoizedState!==null,ll(e,t,n),el=r;break;default:ll(e,t,n)}}function dl(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{Np(e)}catch(e){Z(t,t.return,e)}}}function fl(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Np(e)}catch(e){Z(t,t.return,e)}}function pl(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new nl),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new nl),t;default:throw Error(i(435,e.tag))}}function ml(e,t){var n=pl(e);t.forEach(function(t){if(!n.has(t)){n.add(t);var r=Yu.bind(null,e,t);t.then(r,r)}})}function hl(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var a=n[r],o=e,s=t,c=s;a:for(;c!==null;){switch(c.tag){case 27:if(Zd(c.type)){sl=c.stateNode,cl=!1;break a}break;case 5:sl=c.stateNode,cl=!1;break a;case 3:case 4:sl=c.stateNode.containerInfo,cl=!0;break a}c=c.return}if(sl===null)throw Error(i(160));ul(o,s,a),sl=null,cl=!1,o=a.alternate,o!==null&&(o.return=null),a.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)_l(t,e),t=t.sibling}var gl=null;function _l(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:hl(t,e),vl(e),r&4&&(Vc(3,e,e.return),Bc(3,e),Vc(5,e,e.return));break;case 1:hl(t,e),vl(e),r&512&&(el||n===null||Gc(n,n.return)),r&64&&$c&&(e=e.updateQueue,e!==null&&(r=e.callbacks,r!==null&&(n=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=n===null?r:n.concat(r))));break;case 26:var a=gl;if(hl(t,e),vl(e),r&512&&(el||n===null||Gc(n,n.return)),r&4){var o=n===null?null:n.memoizedState;if(r=e.memoizedState,n===null){if(r===null){if(e.stateNode===null){a:{r=e.type,n=e.memoizedProps,a=a.ownerDocument||a;b:switch(r){case`title`:o=a.getElementsByTagName(`title`)[0],(!o||o[pt]||o[ot]||o.namespaceURI===`http://www.w3.org/2000/svg`||o.hasAttribute(`itemprop`))&&(o=a.createElement(r),a.head.insertBefore(o,a.querySelector(`head > title`))),Pd(o,r,n),o[ot]=e,yt(o),r=o;break a;case`link`:var s=Vf(`link`,`href`,a).get(r+(n.href||``));if(s){for(var c=0;c<s.length;c++)if(o=s[c],o.getAttribute(`href`)===(n.href==null||n.href===``?null:n.href)&&o.getAttribute(`rel`)===(n.rel==null?null:n.rel)&&o.getAttribute(`title`)===(n.title==null?null:n.title)&&o.getAttribute(`crossorigin`)===(n.crossOrigin==null?null:n.crossOrigin)){s.splice(c,1);break b}}o=a.createElement(r),Pd(o,r,n),a.head.appendChild(o);break;case`meta`:if(s=Vf(`meta`,`content`,a).get(r+(n.content||``))){for(c=0;c<s.length;c++)if(o=s[c],o.getAttribute(`content`)===(n.content==null?null:``+n.content)&&o.getAttribute(`name`)===(n.name==null?null:n.name)&&o.getAttribute(`property`)===(n.property==null?null:n.property)&&o.getAttribute(`http-equiv`)===(n.httpEquiv==null?null:n.httpEquiv)&&o.getAttribute(`charset`)===(n.charSet==null?null:n.charSet)){s.splice(c,1);break b}}o=a.createElement(r),Pd(o,r,n),a.head.appendChild(o);break;default:throw Error(i(468,r))}o[ot]=e,yt(o),r=o}e.stateNode=r}else Hf(a,e.type,e.stateNode)}else e.stateNode=If(a,r,e.memoizedProps)}else o===r?r===null&&e.stateNode!==null&&qc(e,e.memoizedProps,n.memoizedProps):(o===null?n.stateNode!==null&&(n=n.stateNode,n.parentNode.removeChild(n)):o.count--,r===null?Hf(a,e.type,e.stateNode):If(a,r,e.memoizedProps))}break;case 27:hl(t,e),vl(e),r&512&&(el||n===null||Gc(n,n.return)),n!==null&&r&4&&qc(e,e.memoizedProps,n.memoizedProps);break;case 5:if(hl(t,e),vl(e),r&512&&(el||n===null||Gc(n,n.return)),e.flags&32){a=e.stateNode;try{Wt(a,``)}catch(t){Z(e,e.return,t)}}r&4&&e.stateNode!=null&&(a=e.memoizedProps,qc(e,a,n===null?a:n.memoizedProps)),r&1024&&(tl=!0);break;case 6:if(hl(t,e),vl(e),r&4){if(e.stateNode===null)throw Error(i(162));r=e.memoizedProps,n=e.stateNode;try{n.nodeValue=r}catch(t){Z(e,e.return,t)}}break;case 3:if(Bf=null,a=gl,gl=gf(t.containerInfo),hl(t,e),gl=a,vl(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Np(t.containerInfo)}catch(t){Z(e,e.return,t)}tl&&(tl=!1,yl(e));break;case 4:r=gl,gl=gf(e.stateNode.containerInfo),hl(t,e),vl(e),gl=r;break;case 12:hl(t,e),vl(e);break;case 31:hl(t,e),vl(e),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,ml(e,r)));break;case 13:hl(t,e),vl(e),e.child.flags&8192&&e.memoizedState!==null!=(n!==null&&n.memoizedState!==null)&&($l=Te()),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,ml(e,r)));break;case 22:a=e.memoizedState!==null;var l=n!==null&&n.memoizedState!==null,u=$c,d=el;if($c=u||a,el=d||l,hl(t,e),el=d,$c=u,vl(e),r&8192)a:for(t=e.stateNode,t._visibility=a?t._visibility&-2:t._visibility|1,a&&(n===null||l||$c||el||xl(e)),n=null,t=e;;){if(t.tag===5||t.tag===26){if(n===null){l=n=t;try{if(o=l.stateNode,a)s=o.style,typeof s.setProperty==`function`?s.setProperty(`display`,`none`,`important`):s.display=`none`;else{c=l.stateNode;var f=l.memoizedProps.style,p=f!=null&&f.hasOwnProperty(`display`)?f.display:null;c.style.display=p==null||typeof p==`boolean`?``:(``+p).trim()}}catch(e){Z(l,l.return,e)}}}else if(t.tag===6){if(n===null){l=t;try{l.stateNode.nodeValue=a?``:l.memoizedProps}catch(e){Z(l,l.return,e)}}}else if(t.tag===18){if(n===null){l=t;try{var m=l.stateNode;a?$d(m,!0):$d(l.stateNode,!1)}catch(e){Z(l,l.return,e)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break a;for(;t.sibling===null;){if(t.return===null||t.return===e)break a;n===t&&(n=null),t=t.return}n===t&&(n=null),t.sibling.return=t.return,t=t.sibling}r&4&&(r=e.updateQueue,r!==null&&(n=r.retryQueue,n!==null&&(r.retryQueue=null,ml(e,n))));break;case 19:hl(t,e),vl(e),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,ml(e,r)));break;case 30:break;case 21:break;default:hl(t,e),vl(e)}}function vl(e){var t=e.flags;if(t&2){try{for(var n,r=e.return;r!==null;){if(Jc(r)){n=r;break}r=r.return}if(n==null)throw Error(i(160));switch(n.tag){case 27:var a=n.stateNode;Zc(e,Yc(e),a);break;case 5:var o=n.stateNode;n.flags&32&&(Wt(o,``),n.flags&=-33),Zc(e,Yc(e),o);break;case 3:case 4:var s=n.stateNode.containerInfo;Xc(e,Yc(e),s);break;default:throw Error(i(161))}}catch(t){Z(e,e.return,t)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function yl(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;yl(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function bl(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)al(e,t.alternate,t),t=t.sibling}function xl(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:Vc(4,t,t.return),xl(t);break;case 1:Gc(t,t.return);var n=t.stateNode;typeof n.componentWillUnmount==`function`&&Uc(t,t.return,n),xl(t);break;case 27:pf(t.stateNode);case 26:case 5:Gc(t,t.return),xl(t);break;case 22:t.memoizedState===null&&xl(t);break;case 30:xl(t);break;default:xl(t)}e=e.sibling}}function Sl(e,t,n){for(n&&=!!(t.subtreeFlags&8772),t=t.child;t!==null;){var r=t.alternate,i=e,a=t,o=a.flags;switch(a.tag){case 0:case 11:case 15:Sl(i,a,n),Bc(4,a);break;case 1:if(Sl(i,a,n),r=a,i=r.stateNode,typeof i.componentDidMount==`function`)try{i.componentDidMount()}catch(e){Z(r,r.return,e)}if(r=a,i=r.updateQueue,i!==null){var s=r.stateNode;try{var c=i.shared.hiddenCallbacks;if(c!==null)for(i.shared.hiddenCallbacks=null,i=0;i<c.length;i++)Ka(c[i],s)}catch(e){Z(r,r.return,e)}}n&&o&64&&Hc(a),Wc(a,a.return);break;case 27:Qc(a);case 26:case 5:Sl(i,a,n),n&&r===null&&o&4&&Kc(a),Wc(a,a.return);break;case 12:Sl(i,a,n);break;case 31:Sl(i,a,n),n&&o&4&&dl(i,a);break;case 13:Sl(i,a,n),n&&o&4&&fl(i,a);break;case 22:a.memoizedState===null&&Sl(i,a,n),Wc(a,a.return);break;case 30:break;default:Sl(i,a,n)}t=t.sibling}}function Cl(e,t){var n=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==n&&(e!=null&&e.refCount++,n!=null&&aa(n))}function wl(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&aa(e))}function Tl(e,t,n,r){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)El(e,t,n,r),t=t.sibling}function El(e,t,n,r){var i=t.flags;switch(t.tag){case 0:case 11:case 15:Tl(e,t,n,r),i&2048&&Bc(9,t);break;case 1:Tl(e,t,n,r);break;case 3:Tl(e,t,n,r),i&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&aa(e)));break;case 12:if(i&2048){Tl(e,t,n,r),e=t.stateNode;try{var a=t.memoizedProps,o=a.id,s=a.onPostCommit;typeof s==`function`&&s(o,t.alternate===null?`mount`:`update`,e.passiveEffectDuration,-0)}catch(e){Z(t,t.return,e)}}else Tl(e,t,n,r);break;case 31:Tl(e,t,n,r);break;case 13:Tl(e,t,n,r);break;case 23:break;case 22:a=t.stateNode,o=t.alternate,t.memoizedState===null?a._visibility&2?Tl(e,t,n,r):(a._visibility|=2,Dl(e,t,n,r,!!(t.subtreeFlags&10256)||!1)):a._visibility&2?Tl(e,t,n,r):Ol(e,t),i&2048&&Cl(o,t);break;case 24:Tl(e,t,n,r),i&2048&&wl(t.alternate,t);break;default:Tl(e,t,n,r)}}function Dl(e,t,n,r,i){for(i&&=!!(t.subtreeFlags&10256)||!1,t=t.child;t!==null;){var a=e,o=t,s=n,c=r,l=o.flags;switch(o.tag){case 0:case 11:case 15:Dl(a,o,s,c,i),Bc(8,o);break;case 23:break;case 22:var u=o.stateNode;o.memoizedState===null?(u._visibility|=2,Dl(a,o,s,c,i)):u._visibility&2?Dl(a,o,s,c,i):Ol(a,o),i&&l&2048&&Cl(o.alternate,o);break;case 24:Dl(a,o,s,c,i),i&&l&2048&&wl(o.alternate,o);break;default:Dl(a,o,s,c,i)}t=t.sibling}}function Ol(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var n=e,r=t,i=r.flags;switch(r.tag){case 22:Ol(n,r),i&2048&&Cl(r.alternate,r);break;case 24:Ol(n,r),i&2048&&wl(r.alternate,r);break;default:Ol(n,r)}t=t.sibling}}var kl=8192;function Al(e,t,n){if(e.subtreeFlags&kl)for(e=e.child;e!==null;)jl(e,t,n),e=e.sibling}function jl(e,t,n){switch(e.tag){case 26:Al(e,t,n),e.flags&kl&&e.memoizedState!==null&&Gf(n,gl,e.memoizedState,e.memoizedProps);break;case 5:Al(e,t,n);break;case 3:case 4:var r=gl;gl=gf(e.stateNode.containerInfo),Al(e,t,n),gl=r;break;case 22:e.memoizedState===null&&(r=e.alternate,r!==null&&r.memoizedState!==null?(r=kl,kl=16777216,Al(e,t,n),kl=r):Al(e,t,n));break;default:Al(e,t,n)}}function Ml(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function Nl(e){var t=e.deletions;if(e.flags&16){if(t!==null)for(var n=0;n<t.length;n++){var r=t[n];rl=r,Il(r,e)}Ml(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Pl(e),e=e.sibling}function Pl(e){switch(e.tag){case 0:case 11:case 15:Nl(e),e.flags&2048&&Vc(9,e,e.return);break;case 3:Nl(e);break;case 12:Nl(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,Fl(e)):Nl(e);break;default:Nl(e)}}function Fl(e){var t=e.deletions;if(e.flags&16){if(t!==null)for(var n=0;n<t.length;n++){var r=t[n];rl=r,Il(r,e)}Ml(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:Vc(8,t,t.return),Fl(t);break;case 22:n=t.stateNode,n._visibility&2&&(n._visibility&=-3,Fl(t));break;default:Fl(t)}e=e.sibling}}function Il(e,t){for(;rl!==null;){var n=rl;switch(n.tag){case 0:case 11:case 15:Vc(8,n,t);break;case 23:case 22:if(n.memoizedState!==null&&n.memoizedState.cachePool!==null){var r=n.memoizedState.cachePool.pool;r!=null&&r.refCount++}break;case 24:aa(n.memoizedState.cache)}if(r=n.child,r!==null)r.return=n,rl=r;else a:for(n=e;rl!==null;){r=rl;var i=r.sibling,a=r.return;if(ol(r),r===n){rl=null;break a}if(i!==null){i.return=a,rl=i;break a}rl=a}}}var Ll={getCacheForType:function(e){var t=Zi(ra),n=t.data.get(e);return n===void 0&&(n=e(),t.data.set(e,n)),n},cacheSignal:function(){return Zi(ra).controller.signal}},Rl=typeof WeakMap==`function`?WeakMap:Map,K=0,q=null,J=null,Y=0,X=0,zl=null,Bl=!1,Vl=!1,Hl=!1,Ul=0,Wl=0,Gl=0,Kl=0,ql=0,Jl=0,Yl=0,Xl=null,Zl=null,Ql=!1,$l=0,eu=0,tu=1/0,nu=null,ru=null,iu=0,au=null,ou=null,su=0,cu=0,lu=null,uu=null,du=0,fu=null;function pu(){return K&2&&Y!==0?Y&-Y:M.T===null?rt():dd()}function mu(){if(Jl===0){if(!(Y&536870912)||U){var e=He;He<<=1,!(He&3932160)&&(He=262144),Jl=e}else Jl=536870912}return e=$a.current,e!==null&&(e.flags|=32),Jl}function hu(e,t,n){(e===q&&(X===2||X===9)||e.cancelPendingCommit!==null)&&(Su(e,0),yu(e,Y,Jl,!1)),Xe(e,n),(!(K&2)||e!==q)&&(e===q&&(!(K&2)&&(Kl|=n),Wl===4&&yu(e,Y,Jl,!1)),rd(e))}function gu(e,t,n){if(K&6)throw Error(i(327));var r=!n&&!(t&127)&&(t&e.expiredLanes)===0||Ke(e,t),a=r?Au(e,t):Ou(e,t,!0),o=r;do{if(a===0){Vl&&!r&&yu(e,t,0,!1);break}if(n=e.current.alternate,o&&!vu(n)){a=Ou(e,t,!1),o=!1;continue}if(a===2){if(o=t,e.errorRecoveryDisabledLanes&o)var s=0;else s=e.pendingLanes&-536870913,s=s===0?s&536870912?536870912:0:s;if(s!==0){t=s;a:{var c=e;a=Xl;var l=c.current.memoizedState.isDehydrated;if(l&&(Su(c,s).flags|=256),s=Ou(c,s,!1),s!==2){if(Hl&&!l){c.errorRecoveryDisabledLanes|=o,Kl|=o,a=4;break a}o=Zl,Zl=a,o!==null&&(Zl===null?Zl=o:Zl.push.apply(Zl,o))}a=s}if(o=!1,a!==2)continue}}if(a===1){Su(e,0),yu(e,t,0,!0);break}a:{switch(r=e,o=a,o){case 0:case 1:throw Error(i(345));case 4:if((t&4194048)!==t)break;case 6:yu(r,t,Jl,!Bl);break a;case 2:Zl=null;break;case 3:case 5:break;default:throw Error(i(329))}if((t&62914560)===t&&(a=$l+300-Te(),10<a)){if(yu(r,t,Jl,!Bl),Ge(r,0,!0)!==0)break a;su=t,r.timeoutHandle=Kd(_u.bind(null,r,n,Zl,nu,Ql,t,Jl,Kl,Yl,Bl,o,`Throttled`,-0,0),a);break a}_u(r,n,Zl,nu,Ql,t,Jl,Kl,Yl,Bl,o,null,-0,0)}break}while(1);rd(e)}function _u(e,t,n,r,i,a,o,s,c,l,u,d,f,p){if(e.timeoutHandle=-1,d=t.subtreeFlags,d&8192||(d&16785408)==16785408){d={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Qt},jl(t,a,d);var m=(a&62914560)===a?$l-Te():(a&4194048)===a?eu-Te():0;if(m=qf(d,m),m!==null){su=a,e.cancelPendingCommit=m(Lu.bind(null,e,t,a,n,r,i,o,s,c,u,d,null,f,p)),yu(e,a,o,!l);return}}Lu(e,t,a,n,r,i,o,s,c)}function vu(e){for(var t=e;;){var n=t.tag;if((n===0||n===11||n===15)&&t.flags&16384&&(n=t.updateQueue,n!==null&&(n=n.stores,n!==null)))for(var r=0;r<n.length;r++){var i=n[r],a=i.getSnapshot;i=i.value;try{if(!V(a(),i))return!1}catch{return!1}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function yu(e,t,n,r){t&=~ql,t&=~Kl,e.suspendedLanes|=t,e.pingedLanes&=~t,r&&(e.warmLanes|=t),r=e.expirationTimes;for(var i=t;0<i;){var a=31-Le(i),o=1<<a;r[a]=-1,i&=~o}n!==0&&Qe(e,n,t)}function bu(){return K&6?!0:(id(0,!1),!1)}function xu(){if(J!==null){if(X===0)var e=J.return;else e=J,Ui=Hi=null,Eo(e),Oa=null,ka=0,e=J;for(;e!==null;)zc(e.alternate,e),e=e.return;J=null}}function Su(e,t){var n=e.timeoutHandle;n!==-1&&(e.timeoutHandle=-1,qd(n)),n=e.cancelPendingCommit,n!==null&&(e.cancelPendingCommit=null,n()),su=0,xu(),q=e,J=n=si(e.current,null),Y=t,X=0,zl=null,Bl=!1,Vl=Ke(e,t),Hl=!1,Yl=Jl=ql=Kl=Gl=Wl=0,Zl=Xl=null,Ql=!1,t&8&&(t|=t&32);var r=e.entangledLanes;if(r!==0)for(e=e.entanglements,r&=t;0<r;){var i=31-Le(r),a=1<<i;t|=e[i],r&=~a}return Ul=t,Zr(),n}function Cu(e,t){W=null,M.H=Is,t===va||t===ba?(t=Ea(),X=3):t===ya?(t=Ea(),X=4):X=t===ec?8:typeof t==`object`&&t&&typeof t.then==`function`?6:1,zl=t,J===null&&(Wl=1,Js(e,hi(t,e.current)))}function wu(){var e=$a.current;return e===null?!0:(Y&4194048)===Y?eo===null:(Y&62914560)===Y||Y&536870912?e===eo:!1}function Tu(){var e=M.H;return M.H=Is,e===null?Is:e}function Eu(){var e=M.A;return M.A=Ll,e}function Du(){Wl=4,Bl||(Y&4194048)!==Y&&$a.current!==null||(Vl=!0),!(Gl&134217727)&&!(Kl&134217727)||q===null||yu(q,Y,Jl,!1)}function Ou(e,t,n){var r=K;K|=2;var i=Tu(),a=Eu();(q!==e||Y!==t)&&(nu=null,Su(e,t)),t=!1;var o=Wl;a:do try{if(X!==0&&J!==null){var s=J,c=zl;switch(X){case 8:xu(),o=6;break a;case 3:case 2:case 9:case 6:$a.current===null&&(t=!0);var l=X;if(X=0,zl=null,Pu(e,s,c,l),n&&Vl){o=0;break a}break;default:l=X,X=0,zl=null,Pu(e,s,c,l)}}ku(),o=Wl;break}catch(t){Cu(e,t)}while(1);return t&&e.shellSuspendCounter++,Ui=Hi=null,K=r,M.H=i,M.A=a,J===null&&(q=null,Y=0,Zr()),o}function ku(){for(;J!==null;)Mu(J)}function Au(e,t){var n=K;K|=2;var r=Tu(),a=Eu();q!==e||Y!==t?(nu=null,tu=Te()+500,Su(e,t)):Vl=Ke(e,t);a:do try{if(X!==0&&J!==null){t=J;var o=zl;b:switch(X){case 1:X=0,zl=null,Pu(e,t,o,1);break;case 2:case 9:if(Sa(o)){X=0,zl=null,Nu(t);break}t=function(){X!==2&&X!==9||q!==e||(X=7),rd(e)},o.then(t,t);break a;case 3:X=7;break a;case 4:X=5;break a;case 7:Sa(o)?(X=0,zl=null,Nu(t)):(X=0,zl=null,Pu(e,t,o,7));break;case 5:var s=null;switch(J.tag){case 26:s=J.memoizedState;case 5:case 27:var c=J;if(s?Wf(s):c.stateNode.complete){X=0,zl=null;var l=c.sibling;if(l!==null)J=l;else{var u=c.return;u===null?J=null:(J=u,Fu(u))}break b}}X=0,zl=null,Pu(e,t,o,5);break;case 6:X=0,zl=null,Pu(e,t,o,6);break;case 8:xu(),Wl=6;break a;default:throw Error(i(462))}}ju();break}catch(t){Cu(e,t)}while(1);return Ui=Hi=null,M.H=r,M.A=a,K=n,J===null?(q=null,Y=0,Zr(),Wl):0}function ju(){for(;J!==null&&!Ce();)Mu(J)}function Mu(e){var t=Ac(e.alternate,e,Ul);e.memoizedProps=e.pendingProps,t===null?Fu(e):J=t}function Nu(e){var t=e,n=t.alternate;switch(t.tag){case 15:case 0:t=mc(n,t,t.pendingProps,t.type,void 0,Y);break;case 11:t=mc(n,t,t.pendingProps,t.type.render,t.ref,Y);break;case 5:Eo(t);default:zc(n,t),t=J=ci(t,Ul),t=Ac(n,t,Ul)}e.memoizedProps=e.pendingProps,t===null?Fu(e):J=t}function Pu(e,t,n,r){Ui=Hi=null,Eo(t),Oa=null,ka=0;var i=t.return;try{if($s(e,i,t,n,Y)){Wl=1,Js(e,hi(n,e.current)),J=null;return}}catch(t){if(i!==null)throw J=i,t;Wl=1,Js(e,hi(n,e.current)),J=null;return}t.flags&32768?(U||r===1?e=!0:Vl||Y&536870912?e=!1:(Bl=e=!0,(r===2||r===9||r===3||r===6)&&(r=$a.current,r!==null&&r.tag===13&&(r.flags|=16384))),Iu(t,e)):Fu(t)}function Fu(e){var t=e;do{if(t.flags&32768){Iu(t,Bl);return}e=t.return;var n=Lc(t.alternate,t,Ul);if(n!==null){J=n;return}if(t=t.sibling,t!==null){J=t;return}J=t=e}while(t!==null);Wl===0&&(Wl=5)}function Iu(e,t){do{var n=Rc(e.alternate,e);if(n!==null){n.flags&=32767,J=n;return}if(n=e.return,n!==null&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!t&&(e=e.sibling,e!==null)){J=e;return}J=e=n}while(e!==null);Wl=6,J=null}function Lu(e,t,n,r,a,o,s,c,l){e.cancelPendingCommit=null;do Hu();while(iu!==0);if(K&6)throw Error(i(327));if(t!==null){if(t===e.current)throw Error(i(177));if(o=t.lanes|t.childLanes,o|=Xr,Ze(e,n,o,s,c,l),e===q&&(J=q=null,Y=0),ou=t,au=e,su=n,cu=o,lu=a,uu=r,t.subtreeFlags&10256||t.flags&10256?(e.callbackNode=null,e.callbackPriority=0,Xu(ke,function(){return Uu(),null})):(e.callbackNode=null,e.callbackPriority=0),r=!!(t.flags&13878),t.subtreeFlags&13878||r){r=M.T,M.T=null,a=N.p,N.p=2,s=K,K|=4;try{il(e,t,n)}finally{K=s,N.p=a,M.T=r}}iu=1,Ru(),zu(),Bu()}}function Ru(){if(iu===1){iu=0;var e=au,t=ou,n=!!(t.flags&13878);if(t.subtreeFlags&13878||n){n=M.T,M.T=null;var r=N.p;N.p=2;var i=K;K|=4;try{_l(t,e);var a=zd,o=wr(e.containerInfo),s=a.focusedElem,c=a.selectionRange;if(o!==s&&s&&s.ownerDocument&&Cr(s.ownerDocument.documentElement,s)){if(c!==null&&Tr(s)){var l=c.start,u=c.end;if(u===void 0&&(u=l),`selectionStart`in s)s.selectionStart=l,s.selectionEnd=Math.min(u,s.value.length);else{var d=s.ownerDocument||document,f=d&&d.defaultView||window;if(f.getSelection){var p=f.getSelection(),m=s.textContent.length,h=Math.min(c.start,m),g=c.end===void 0?h:Math.min(c.end,m);!p.extend&&h>g&&(o=g,g=h,h=o);var _=Sr(s,h),v=Sr(s,g);if(_&&v&&(p.rangeCount!==1||p.anchorNode!==_.node||p.anchorOffset!==_.offset||p.focusNode!==v.node||p.focusOffset!==v.offset)){var y=d.createRange();y.setStart(_.node,_.offset),p.removeAllRanges(),h>g?(p.addRange(y),p.extend(v.node,v.offset)):(y.setEnd(v.node,v.offset),p.addRange(y))}}}}for(d=[],p=s;p=p.parentNode;)p.nodeType===1&&d.push({element:p,left:p.scrollLeft,top:p.scrollTop});for(typeof s.focus==`function`&&s.focus(),s=0;s<d.length;s++){var b=d[s];b.element.scrollLeft=b.left,b.element.scrollTop=b.top}}sp=!!Rd,zd=Rd=null}finally{K=i,N.p=r,M.T=n}}e.current=t,iu=2}}function zu(){if(iu===2){iu=0;var e=au,t=ou,n=!!(t.flags&8772);if(t.subtreeFlags&8772||n){n=M.T,M.T=null;var r=N.p;N.p=2;var i=K;K|=4;try{al(e,t.alternate,t)}finally{K=i,N.p=r,M.T=n}}iu=3}}function Bu(){if(iu===4||iu===3){iu=0,we();var e=au,t=ou,n=su,r=uu;t.subtreeFlags&10256||t.flags&10256?iu=5:(iu=0,ou=au=null,Vu(e,e.pendingLanes));var i=e.pendingLanes;if(i===0&&(ru=null),nt(n),t=t.stateNode,Fe&&typeof Fe.onCommitFiberRoot==`function`)try{Fe.onCommitFiberRoot(Pe,t,void 0,(t.current.flags&128)==128)}catch{}if(r!==null){t=M.T,i=N.p,N.p=2,M.T=null;try{for(var a=e.onRecoverableError,o=0;o<r.length;o++){var s=r[o];a(s.value,{componentStack:s.stack})}}finally{M.T=t,N.p=i}}su&3&&Hu(),rd(e),i=e.pendingLanes,n&261930&&i&42?e===fu?du++:(du=0,fu=e):du=0,id(0,!1)}}function Vu(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,aa(t)))}function Hu(){return Ru(),zu(),Bu(),Uu()}function Uu(){if(iu!==5)return!1;var e=au,t=cu;cu=0;var n=nt(su),r=M.T,a=N.p;try{N.p=32>n?32:n,M.T=null,n=lu,lu=null;var o=au,s=su;if(iu=0,ou=au=null,su=0,K&6)throw Error(i(331));var c=K;if(K|=4,Pl(o.current),El(o,o.current,s,n),K=c,id(0,!1),Fe&&typeof Fe.onPostCommitFiberRoot==`function`)try{Fe.onPostCommitFiberRoot(Pe,o)}catch{}return!0}finally{N.p=a,M.T=r,Vu(e,t)}}function Wu(e,t,n){t=hi(n,t),t=Xs(e.stateNode,t,2),e=Ba(e,t,2),e!==null&&(Xe(e,2),rd(e))}function Z(e,t,n){if(e.tag===3)Wu(e,e,n);else for(;t!==null;){if(t.tag===3){Wu(t,e,n);break}if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError==`function`||typeof r.componentDidCatch==`function`&&(ru===null||!ru.has(r))){e=hi(n,e),n=Zs(2),r=Ba(t,n,2),r!==null&&(Qs(n,r,t,e),Xe(r,2),rd(r));break}}t=t.return}}function Gu(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new Rl;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(Hl=!0,i.add(n),e=Ku.bind(null,e,t,n),t.then(e,e))}function Ku(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),e.pingedLanes|=e.suspendedLanes&n,e.warmLanes&=~n,q===e&&(Y&n)===n&&(Wl===4||Wl===3&&(Y&62914560)===Y&&300>Te()-$l?!(K&2)&&Su(e,0):ql|=n,Yl===Y&&(Yl=0)),rd(e)}function qu(e,t){t===0&&(t=Je()),e=ei(e,t),e!==null&&(Xe(e,t),rd(e))}function Ju(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),qu(e,n)}function Yu(e,t){var n=0;switch(e.tag){case 31:case 13:var r=e.stateNode,a=e.memoizedState;a!==null&&(n=a.retryLane);break;case 19:r=e.stateNode;break;case 22:r=e.stateNode._retryCache;break;default:throw Error(i(314))}r!==null&&r.delete(t),qu(e,n)}function Xu(e,t){return xe(e,t)}var Zu=null,Qu=null,$u=!1,ed=!1,td=!1,nd=0;function rd(e){e!==Qu&&e.next===null&&(Qu===null?Zu=Qu=e:Qu=Qu.next=e),ed=!0,$u||($u=!0,ud())}function id(e,t){if(!td&&ed){td=!0;do for(var n=!1,r=Zu;r!==null;){if(!t){if(e!==0){var i=r.pendingLanes;if(i===0)var a=0;else{var o=r.suspendedLanes,s=r.pingedLanes;a=(1<<31-Le(42|e)+1)-1,a&=i&~(o&~s),a=a&201326741?a&201326741|1:a?a|2:0}a!==0&&(n=!0,ld(r,a))}else a=Y,a=Ge(r,r===q?a:0,r.cancelPendingCommit!==null||r.timeoutHandle!==-1),!(a&3)||Ke(r,a)||(n=!0,ld(r,a))}r=r.next}while(n);td=!1}}function ad(){od()}function od(){ed=$u=!1;var e=0;nd!==0&&Gd()&&(e=nd);for(var t=Te(),n=null,r=Zu;r!==null;){var i=r.next,a=sd(r,t);a===0?(r.next=null,n===null?Zu=i:n.next=i,i===null&&(Qu=n)):(n=r,(e!==0||a&3)&&(ed=!0)),r=i}iu!==0&&iu!==5||id(e,!1),nd!==0&&(nd=0)}function sd(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,a=e.pendingLanes&-62914561;0<a;){var o=31-Le(a),s=1<<o,c=i[o];c===-1?((s&n)===0||(s&r)!==0)&&(i[o]=qe(s,t)):c<=t&&(e.expiredLanes|=s),a&=~s}if(t=q,n=Y,n=Ge(e,e===t?n:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r=e.callbackNode,n===0||e===t&&(X===2||X===9)||e.cancelPendingCommit!==null)return r!==null&&r!==null&&Se(r),e.callbackNode=null,e.callbackPriority=0;if(!(n&3)||Ke(e,n)){if(t=n&-n,t===e.callbackPriority)return t;switch(r!==null&&Se(r),nt(n)){case 2:case 8:n=Oe;break;case 32:n=ke;break;case 268435456:n=je;break;default:n=ke}return r=cd.bind(null,e),n=xe(n,r),e.callbackPriority=t,e.callbackNode=n,t}return r!==null&&r!==null&&Se(r),e.callbackPriority=2,e.callbackNode=null,2}function cd(e,t){if(iu!==0&&iu!==5)return e.callbackNode=null,e.callbackPriority=0,null;var n=e.callbackNode;if(Hu()&&e.callbackNode!==n)return null;var r=Y;return r=Ge(e,e===q?r:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r===0?null:(gu(e,r,t),sd(e,Te()),e.callbackNode!=null&&e.callbackNode===n?cd.bind(null,e):null)}function ld(e,t){if(Hu())return null;gu(e,t,!0)}function ud(){Yd(function(){K&6?xe(De,ad):od()})}function dd(){if(nd===0){var e=ca;e===0&&(e=Ve,Ve<<=1,!(Ve&261888)&&(Ve=256)),nd=e}return nd}function fd(e){return e==null||typeof e==`symbol`||typeof e==`boolean`?null:typeof e==`function`?e:Zt(``+e)}function pd(e,t){var n=t.ownerDocument.createElement(`input`);return n.name=t.name,n.value=t.value,e.id&&n.setAttribute(`form`,e.id),t.parentNode.insertBefore(n,t),e=new FormData(e),n.parentNode.removeChild(n),e}function md(e,t,n,r,i){if(t===`submit`&&n&&n.stateNode===i){var a=fd((i[st]||null).action),o=r.submitter;o&&(t=(t=o[st]||null)?fd(t.formAction):o.getAttribute(`formAction`),t!==null&&(a=t,o=null));var s=new bn(`action`,`action`,null,r,i);e.push({event:s,listeners:[{instance:null,listener:function(){if(r.defaultPrevented){if(nd!==0){var e=o?pd(i,o):new FormData(i);Ss(n,{pending:!0,data:e,method:i.method,action:a},null,e)}}else typeof a==`function`&&(s.preventDefault(),e=o?pd(i,o):new FormData(i),Ss(n,{pending:!0,data:e,method:i.method,action:a},a,e))},currentTarget:i}]})}}for(var hd=0;hd<Gr.length;hd++){var gd=Gr[hd];Kr(gd.toLowerCase(),`on`+(gd[0].toUpperCase()+gd.slice(1)))}Kr(Lr,`onAnimationEnd`),Kr(Rr,`onAnimationIteration`),Kr(zr,`onAnimationStart`),Kr(`dblclick`,`onDoubleClick`),Kr(`focusin`,`onFocus`),Kr(`focusout`,`onBlur`),Kr(Br,`onTransitionRun`),Kr(Vr,`onTransitionStart`),Kr(Hr,`onTransitionCancel`),Kr(Ur,`onTransitionEnd`),Ct(`onMouseEnter`,[`mouseout`,`mouseover`]),Ct(`onMouseLeave`,[`mouseout`,`mouseover`]),Ct(`onPointerEnter`,[`pointerout`,`pointerover`]),Ct(`onPointerLeave`,[`pointerout`,`pointerover`]),St(`onChange`,`change click focusin focusout input keydown keyup selectionchange`.split(` `)),St(`onSelect`,`focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange`.split(` `)),St(`onBeforeInput`,[`compositionend`,`keypress`,`textInput`,`paste`]),St(`onCompositionEnd`,`compositionend focusout keydown keypress keyup mousedown`.split(` `)),St(`onCompositionStart`,`compositionstart focusout keydown keypress keyup mousedown`.split(` `)),St(`onCompositionUpdate`,`compositionupdate focusout keydown keypress keyup mousedown`.split(` `));var _d=`abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting`.split(` `),vd=new Set(`beforetoggle cancel close invalid load scroll scrollend toggle`.split(` `).concat(_d));function yd(e,t){t=!!(t&4);for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;a:{var a=void 0;if(t)for(var o=r.length-1;0<=o;o--){var s=r[o],c=s.instance,l=s.currentTarget;if(s=s.listener,c!==a&&i.isPropagationStopped())break a;a=s,i.currentTarget=l;try{a(i)}catch(e){qr(e)}i.currentTarget=null,a=c}else for(o=0;o<r.length;o++){if(s=r[o],c=s.instance,l=s.currentTarget,s=s.listener,c!==a&&i.isPropagationStopped())break a;a=s,i.currentTarget=l;try{a(i)}catch(e){qr(e)}i.currentTarget=null,a=c}}}}function Q(e,t){var n=t[lt];n===void 0&&(n=t[lt]=new Set);var r=e+`__bubble`;n.has(r)||(Cd(t,e,2,!1),n.add(r))}function bd(e,t,n){var r=0;t&&(r|=4),Cd(n,e,r,t)}var xd=`_reactListening`+Math.random().toString(36).slice(2);function Sd(e){if(!e[xd]){e[xd]=!0,bt.forEach(function(t){t!==`selectionchange`&&(vd.has(t)||bd(t,!1,e),bd(t,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[xd]||(t[xd]=!0,bd(`selectionchange`,!1,t))}}function Cd(e,t,n,r){switch(mp(t)){case 2:var i=cp;break;case 8:i=lp;break;default:i=up}n=i.bind(null,t,n,e),i=void 0,!ln||t!==`touchstart`&&t!==`touchmove`&&t!==`wheel`||(i=!0),r?i===void 0?e.addEventListener(t,n,!0):e.addEventListener(t,n,{capture:!0,passive:i}):i===void 0?e.addEventListener(t,n,!1):e.addEventListener(t,n,{passive:i})}function wd(e,t,n,r,i){var a=r;if(!(t&1)&&!(t&2)&&r!==null)a:for(;;){if(r===null)return;var s=r.tag;if(s===3||s===4){var c=r.stateNode.containerInfo;if(c===i)break;if(s===4)for(s=r.return;s!==null;){var l=s.tag;if((l===3||l===4)&&s.stateNode.containerInfo===i)return;s=s.return}for(;c!==null;){if(s=ht(c),s===null)return;if(l=s.tag,l===5||l===6||l===26||l===27){r=a=s;continue a}c=c.parentNode}}r=r.return}on(function(){var r=a,i=en(n),s=[];a:{var c=Wr.get(e);if(c!==void 0){var l=bn,u=e;switch(e){case`keypress`:if(hn(n)===0)break a;case`keydown`:case`keyup`:l=B;break;case`focusin`:u=`focus`,l=kn;break;case`focusout`:u=`blur`,l=kn;break;case`beforeblur`:case`afterblur`:l=kn;break;case`click`:if(n.button===2)break a;case`auxclick`:case`dblclick`:case`mousedown`:case`mousemove`:case`mouseup`:case`mouseout`:case`mouseover`:case`contextmenu`:l=Dn;break;case`drag`:case`dragend`:case`dragenter`:case`dragexit`:case`dragleave`:case`dragover`:case`dragstart`:case`drop`:l=On;break;case`touchcancel`:case`touchend`:case`touchmove`:case`touchstart`:l=zn;break;case Lr:case Rr:case zr:l=An;break;case Ur:l=Bn;break;case`scroll`:case`scrollend`:l=Sn;break;case`wheel`:l=Vn;break;case`copy`:case`cut`:case`paste`:l=jn;break;case`gotpointercapture`:case`lostpointercapture`:case`pointercancel`:case`pointerdown`:case`pointermove`:case`pointerout`:case`pointerover`:case`pointerup`:l=Rn;break;case`toggle`:case`beforetoggle`:l=Hn}var d=!!(t&4),f=!d&&(e===`scroll`||e===`scrollend`),p=d?c===null?null:c+`Capture`:c;d=[];for(var m=r,h;m!==null;){var g=m;if(h=g.stateNode,g=g.tag,g!==5&&g!==26&&g!==27||h===null||p===null||(g=sn(m,p),g!=null&&d.push(Td(m,g,h))),f)break;m=m.return}0<d.length&&(c=new l(c,u,null,n,i),s.push({event:c,listeners:d}))}}if(!(t&7)){a:{if(c=e===`mouseover`||e===`pointerover`,l=e===`mouseout`||e===`pointerout`,c&&n!==$t&&(u=n.relatedTarget||n.fromElement)&&(ht(u)||u[ct]))break a;if((l||c)&&(c=i.window===i?i:(c=i.ownerDocument)?c.defaultView||c.parentWindow:window,l?(u=n.relatedTarget||n.toElement,l=r,u=u?ht(u):null,u!==null&&(f=o(u),d=u.tag,u!==f||d!==5&&d!==27&&d!==6)&&(u=null)):(l=null,u=r),l!==u)){if(d=Dn,g=`onMouseLeave`,p=`onMouseEnter`,m=`mouse`,(e===`pointerout`||e===`pointerover`)&&(d=Rn,g=`onPointerLeave`,p=`onPointerEnter`,m=`pointer`),f=l==null?c:_t(l),h=u==null?c:_t(u),c=new d(g,m+`leave`,l,n,i),c.target=f,c.relatedTarget=h,g=null,ht(i)===r&&(d=new d(p,m+`enter`,u,n,i),d.target=h,d.relatedTarget=f,g=d),f=g,l&&u)b:{for(d=Dd,p=l,m=u,h=0,g=p;g;g=d(g))h++;g=0;for(var _=m;_;_=d(_))g++;for(;0<h-g;)p=d(p),h--;for(;0<g-h;)m=d(m),g--;for(;h--;){if(p===m||m!==null&&p===m.alternate){d=p;break b}p=d(p),m=d(m)}d=null}else d=null;l!==null&&Od(s,c,l,d,!1),u!==null&&f!==null&&Od(s,f,u,d,!0)}}a:{if(c=r?_t(r):window,l=c.nodeName&&c.nodeName.toLowerCase(),l===`select`||l===`input`&&c.type===`file`)var v=cr;else if(nr(c)){if(lr)v=vr;else{v=gr;var y=hr}}else l=c.nodeName,!l||l.toLowerCase()!==`input`||c.type!==`checkbox`&&c.type!==`radio`?r&&Jt(r.elementType)&&(v=cr):v=_r;if(v&&=v(e,r)){rr(s,v,n,i);break a}y&&y(e,c,r),e===`focusout`&&r&&c.type===`number`&&r.memoizedProps.value!=null&&Bt(c,`number`,c.value)}switch(y=r?_t(r):window,e){case`focusin`:(nr(y)||y.contentEditable===`true`)&&(Dr=y,Or=r,kr=null);break;case`focusout`:kr=Or=Dr=null;break;case`mousedown`:Ar=!0;break;case`contextmenu`:case`mouseup`:case`dragend`:Ar=!1,jr(s,n,i);break;case`selectionchange`:if(Er)break;case`keydown`:case`keyup`:jr(s,n,i)}var b;if(Wn)b:{switch(e){case`compositionstart`:var x=`onCompositionStart`;break b;case`compositionend`:x=`onCompositionEnd`;break b;case`compositionupdate`:x=`onCompositionUpdate`;break b}x=void 0}else Qn?Xn(e,n)&&(x=`onCompositionEnd`):e===`keydown`&&n.keyCode===229&&(x=`onCompositionStart`);x&&(qn&&n.locale!==`ko`&&(Qn||x!==`onCompositionStart`?x===`onCompositionEnd`&&Qn&&(b=mn()):(dn=i,fn=`value`in dn?dn.value:dn.textContent,Qn=!0)),y=Ed(r,x),0<y.length&&(x=new Mn(x,e,null,n,i),s.push({event:x,listeners:y}),b?x.data=b:(b=Zn(n),b!==null&&(x.data=b)))),(b=Kn?$n(e,n):er(e,n))&&(x=Ed(r,`onBeforeInput`),0<x.length&&(y=new Mn(`onBeforeInput`,`beforeinput`,null,n,i),s.push({event:y,listeners:x}),y.data=b)),md(s,e,r,n,i)}yd(s,t)})}function Td(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Ed(e,t){for(var n=t+`Capture`,r=[];e!==null;){var i=e,a=i.stateNode;if(i=i.tag,i!==5&&i!==26&&i!==27||a===null||(i=sn(e,n),i!=null&&r.unshift(Td(e,i,a)),i=sn(e,t),i!=null&&r.push(Td(e,i,a))),e.tag===3)return r;e=e.return}return[]}function Dd(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Od(e,t,n,r,i){for(var a=t._reactName,o=[];n!==null&&n!==r;){var s=n,c=s.alternate,l=s.stateNode;if(s=s.tag,c!==null&&c===r)break;s!==5&&s!==26&&s!==27||l===null||(c=l,i?(l=sn(n,a),l!=null&&o.unshift(Td(n,l,c))):i||(l=sn(n,a),l!=null&&o.push(Td(n,l,c)))),n=n.return}o.length!==0&&e.push({event:t,listeners:o})}var kd=/\r\n?/g,Ad=/\u0000|\uFFFD/g;function jd(e){return(typeof e==`string`?e:``+e).replace(kd,`
`).replace(Ad,``)}function Md(e,t){return t=jd(t),jd(e)===t}function $(e,t,n,r,a,o){switch(n){case`children`:typeof r==`string`?t===`body`||t===`textarea`&&r===``||Wt(e,r):(typeof r==`number`||typeof r==`bigint`)&&t!==`body`&&Wt(e,``+r);break;case`className`:kt(e,`class`,r);break;case`tabIndex`:kt(e,`tabindex`,r);break;case`dir`:case`role`:case`viewBox`:case`width`:case`height`:kt(e,n,r);break;case`style`:qt(e,r,o);break;case`data`:if(t!==`object`){kt(e,`data`,r);break}case`src`:case`href`:if(r===``&&(t!==`a`||n!==`href`)){e.removeAttribute(n);break}if(r==null||typeof r==`function`||typeof r==`symbol`||typeof r==`boolean`){e.removeAttribute(n);break}r=Zt(``+r),e.setAttribute(n,r);break;case`action`:case`formAction`:if(typeof r==`function`){e.setAttribute(n,`javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')`);break}if(typeof o==`function`&&(n===`formAction`?(t!==`input`&&$(e,t,`name`,a.name,a,null),$(e,t,`formEncType`,a.formEncType,a,null),$(e,t,`formMethod`,a.formMethod,a,null),$(e,t,`formTarget`,a.formTarget,a,null)):($(e,t,`encType`,a.encType,a,null),$(e,t,`method`,a.method,a,null),$(e,t,`target`,a.target,a,null))),r==null||typeof r==`symbol`||typeof r==`boolean`){e.removeAttribute(n);break}r=Zt(``+r),e.setAttribute(n,r);break;case`onClick`:r!=null&&(e.onclick=Qt);break;case`onScroll`:r!=null&&Q(`scroll`,e);break;case`onScrollEnd`:r!=null&&Q(`scrollend`,e);break;case`dangerouslySetInnerHTML`:if(r!=null){if(typeof r!=`object`||!(`__html`in r))throw Error(i(61));if(n=r.__html,n!=null){if(a.children!=null)throw Error(i(60));e.innerHTML=n}}break;case`multiple`:e.multiple=r&&typeof r!=`function`&&typeof r!=`symbol`;break;case`muted`:e.muted=r&&typeof r!=`function`&&typeof r!=`symbol`;break;case`suppressContentEditableWarning`:case`suppressHydrationWarning`:case`defaultValue`:case`defaultChecked`:case`innerHTML`:case`ref`:break;case`autoFocus`:break;case`xlinkHref`:if(r==null||typeof r==`function`||typeof r==`boolean`||typeof r==`symbol`){e.removeAttribute(`xlink:href`);break}n=Zt(``+r),e.setAttributeNS(`http://www.w3.org/1999/xlink`,`xlink:href`,n);break;case`contentEditable`:case`spellCheck`:case`draggable`:case`value`:case`autoReverse`:case`externalResourcesRequired`:case`focusable`:case`preserveAlpha`:r!=null&&typeof r!=`function`&&typeof r!=`symbol`?e.setAttribute(n,``+r):e.removeAttribute(n);break;case`inert`:case`allowFullScreen`:case`async`:case`autoPlay`:case`controls`:case`default`:case`defer`:case`disabled`:case`disablePictureInPicture`:case`disableRemotePlayback`:case`formNoValidate`:case`hidden`:case`loop`:case`noModule`:case`noValidate`:case`open`:case`playsInline`:case`readOnly`:case`required`:case`reversed`:case`scoped`:case`seamless`:case`itemScope`:r&&typeof r!=`function`&&typeof r!=`symbol`?e.setAttribute(n,``):e.removeAttribute(n);break;case`capture`:case`download`:!0===r?e.setAttribute(n,``):!1!==r&&r!=null&&typeof r!=`function`&&typeof r!=`symbol`?e.setAttribute(n,r):e.removeAttribute(n);break;case`cols`:case`rows`:case`size`:case`span`:r!=null&&typeof r!=`function`&&typeof r!=`symbol`&&!isNaN(r)&&1<=r?e.setAttribute(n,r):e.removeAttribute(n);break;case`rowSpan`:case`start`:r==null||typeof r==`function`||typeof r==`symbol`||isNaN(r)?e.removeAttribute(n):e.setAttribute(n,r);break;case`popover`:Q(`beforetoggle`,e),Q(`toggle`,e),Ot(e,`popover`,r);break;case`xlinkActuate`:At(e,`http://www.w3.org/1999/xlink`,`xlink:actuate`,r);break;case`xlinkArcrole`:At(e,`http://www.w3.org/1999/xlink`,`xlink:arcrole`,r);break;case`xlinkRole`:At(e,`http://www.w3.org/1999/xlink`,`xlink:role`,r);break;case`xlinkShow`:At(e,`http://www.w3.org/1999/xlink`,`xlink:show`,r);break;case`xlinkTitle`:At(e,`http://www.w3.org/1999/xlink`,`xlink:title`,r);break;case`xlinkType`:At(e,`http://www.w3.org/1999/xlink`,`xlink:type`,r);break;case`xmlBase`:At(e,`http://www.w3.org/XML/1998/namespace`,`xml:base`,r);break;case`xmlLang`:At(e,`http://www.w3.org/XML/1998/namespace`,`xml:lang`,r);break;case`xmlSpace`:At(e,`http://www.w3.org/XML/1998/namespace`,`xml:space`,r);break;case`is`:Ot(e,`is`,r);break;case`innerText`:case`textContent`:break;default:(!(2<n.length)||n[0]!==`o`&&n[0]!==`O`||n[1]!==`n`&&n[1]!==`N`)&&(n=Yt.get(n)||n,Ot(e,n,r))}}function Nd(e,t,n,r,a,o){switch(n){case`style`:qt(e,r,o);break;case`dangerouslySetInnerHTML`:if(r!=null){if(typeof r!=`object`||!(`__html`in r))throw Error(i(61));if(n=r.__html,n!=null){if(a.children!=null)throw Error(i(60));e.innerHTML=n}}break;case`children`:typeof r==`string`?Wt(e,r):(typeof r==`number`||typeof r==`bigint`)&&Wt(e,``+r);break;case`onScroll`:r!=null&&Q(`scroll`,e);break;case`onScrollEnd`:r!=null&&Q(`scrollend`,e);break;case`onClick`:r!=null&&(e.onclick=Qt);break;case`suppressContentEditableWarning`:case`suppressHydrationWarning`:case`innerHTML`:case`ref`:break;case`innerText`:case`textContent`:break;default:if(!xt.hasOwnProperty(n))a:{if(n[0]===`o`&&n[1]===`n`&&(a=n.endsWith(`Capture`),t=n.slice(2,a?n.length-7:void 0),o=e[st]||null,o=o==null?null:o[n],typeof o==`function`&&e.removeEventListener(t,o,a),typeof r==`function`)){typeof o!=`function`&&o!==null&&(n in e?e[n]=null:e.hasAttribute(n)&&e.removeAttribute(n)),e.addEventListener(t,r,a);break a}n in e?e[n]=r:!0===r?e.setAttribute(n,``):Ot(e,n,r)}}}function Pd(e,t,n){switch(t){case`div`:case`span`:case`svg`:case`path`:case`a`:case`g`:case`p`:case`li`:break;case`img`:Q(`error`,e),Q(`load`,e);var r=!1,a=!1,o;for(o in n)if(n.hasOwnProperty(o)){var s=n[o];if(s!=null)switch(o){case`src`:r=!0;break;case`srcSet`:a=!0;break;case`children`:case`dangerouslySetInnerHTML`:throw Error(i(137,t));default:$(e,t,o,s,n,null)}}a&&$(e,t,`srcSet`,n.srcSet,n,null),r&&$(e,t,`src`,n.src,n,null);return;case`input`:Q(`invalid`,e);var c=o=s=a=null,l=null,u=null;for(r in n)if(n.hasOwnProperty(r)){var d=n[r];if(d!=null)switch(r){case`name`:a=d;break;case`type`:s=d;break;case`checked`:l=d;break;case`defaultChecked`:u=d;break;case`value`:o=d;break;case`defaultValue`:c=d;break;case`children`:case`dangerouslySetInnerHTML`:if(d!=null)throw Error(i(137,t));break;default:$(e,t,r,d,n,null)}}zt(e,o,c,l,u,s,a,!1);return;case`select`:for(a in Q(`invalid`,e),r=s=o=null,n)if(n.hasOwnProperty(a)&&(c=n[a],c!=null))switch(a){case`value`:o=c;break;case`defaultValue`:s=c;break;case`multiple`:r=c;default:$(e,t,a,c,n,null)}t=o,n=s,e.multiple=!!r,t==null?n!=null&&Vt(e,!!r,n,!0):Vt(e,!!r,t,!1);return;case`textarea`:for(s in Q(`invalid`,e),o=a=r=null,n)if(n.hasOwnProperty(s)&&(c=n[s],c!=null))switch(s){case`value`:r=c;break;case`defaultValue`:a=c;break;case`children`:o=c;break;case`dangerouslySetInnerHTML`:if(c!=null)throw Error(i(91));break;default:$(e,t,s,c,n,null)}Ut(e,r,a,o);return;case`option`:for(l in n)if(n.hasOwnProperty(l)&&(r=n[l],r!=null))switch(l){case`selected`:e.selected=r&&typeof r!=`function`&&typeof r!=`symbol`;break;default:$(e,t,l,r,n,null)}return;case`dialog`:Q(`beforetoggle`,e),Q(`toggle`,e),Q(`cancel`,e),Q(`close`,e);break;case`iframe`:case`object`:Q(`load`,e);break;case`video`:case`audio`:for(r=0;r<_d.length;r++)Q(_d[r],e);break;case`image`:Q(`error`,e),Q(`load`,e);break;case`details`:Q(`toggle`,e);break;case`embed`:case`source`:case`link`:Q(`error`,e),Q(`load`,e);case`area`:case`base`:case`br`:case`col`:case`hr`:case`keygen`:case`meta`:case`param`:case`track`:case`wbr`:case`menuitem`:for(u in n)if(n.hasOwnProperty(u)&&(r=n[u],r!=null))switch(u){case`children`:case`dangerouslySetInnerHTML`:throw Error(i(137,t));default:$(e,t,u,r,n,null)}return;default:if(Jt(t)){for(d in n)n.hasOwnProperty(d)&&(r=n[d],r!==void 0&&Nd(e,t,d,r,n,void 0));return}}for(c in n)n.hasOwnProperty(c)&&(r=n[c],r!=null&&$(e,t,c,r,n,null))}function Fd(e,t,n,r){switch(t){case`div`:case`span`:case`svg`:case`path`:case`a`:case`g`:case`p`:case`li`:break;case`input`:var a=null,o=null,s=null,c=null,l=null,u=null,d=null;for(m in n){var f=n[m];if(n.hasOwnProperty(m)&&f!=null)switch(m){case`checked`:break;case`value`:break;case`defaultValue`:l=f;default:r.hasOwnProperty(m)||$(e,t,m,null,r,f)}}for(var p in r){var m=r[p];if(f=n[p],r.hasOwnProperty(p)&&(m!=null||f!=null))switch(p){case`type`:o=m;break;case`name`:a=m;break;case`checked`:u=m;break;case`defaultChecked`:d=m;break;case`value`:s=m;break;case`defaultValue`:c=m;break;case`children`:case`dangerouslySetInnerHTML`:if(m!=null)throw Error(i(137,t));break;default:m!==f&&$(e,t,p,m,r,f)}}Rt(e,s,c,l,u,d,o,a);return;case`select`:for(o in m=s=c=p=null,n)if(l=n[o],n.hasOwnProperty(o)&&l!=null)switch(o){case`value`:break;case`multiple`:m=l;default:r.hasOwnProperty(o)||$(e,t,o,null,r,l)}for(a in r)if(o=r[a],l=n[a],r.hasOwnProperty(a)&&(o!=null||l!=null))switch(a){case`value`:p=o;break;case`defaultValue`:c=o;break;case`multiple`:s=o;default:o!==l&&$(e,t,a,o,r,l)}t=c,n=s,r=m,p==null?!!r!=!!n&&(t==null?Vt(e,!!n,n?[]:``,!1):Vt(e,!!n,t,!0)):Vt(e,!!n,p,!1);return;case`textarea`:for(c in m=p=null,n)if(a=n[c],n.hasOwnProperty(c)&&a!=null&&!r.hasOwnProperty(c))switch(c){case`value`:break;case`children`:break;default:$(e,t,c,null,r,a)}for(s in r)if(a=r[s],o=n[s],r.hasOwnProperty(s)&&(a!=null||o!=null))switch(s){case`value`:p=a;break;case`defaultValue`:m=a;break;case`children`:break;case`dangerouslySetInnerHTML`:if(a!=null)throw Error(i(91));break;default:a!==o&&$(e,t,s,a,r,o)}Ht(e,p,m);return;case`option`:for(var h in n)if(p=n[h],n.hasOwnProperty(h)&&p!=null&&!r.hasOwnProperty(h))switch(h){case`selected`:e.selected=!1;break;default:$(e,t,h,null,r,p)}for(l in r)if(p=r[l],m=n[l],r.hasOwnProperty(l)&&p!==m&&(p!=null||m!=null))switch(l){case`selected`:e.selected=p&&typeof p!=`function`&&typeof p!=`symbol`;break;default:$(e,t,l,p,r,m)}return;case`img`:case`link`:case`area`:case`base`:case`br`:case`col`:case`embed`:case`hr`:case`keygen`:case`meta`:case`param`:case`source`:case`track`:case`wbr`:case`menuitem`:for(var g in n)p=n[g],n.hasOwnProperty(g)&&p!=null&&!r.hasOwnProperty(g)&&$(e,t,g,null,r,p);for(u in r)if(p=r[u],m=n[u],r.hasOwnProperty(u)&&p!==m&&(p!=null||m!=null))switch(u){case`children`:case`dangerouslySetInnerHTML`:if(p!=null)throw Error(i(137,t));break;default:$(e,t,u,p,r,m)}return;default:if(Jt(t)){for(var _ in n)p=n[_],n.hasOwnProperty(_)&&p!==void 0&&!r.hasOwnProperty(_)&&Nd(e,t,_,void 0,r,p);for(d in r)p=r[d],m=n[d],!r.hasOwnProperty(d)||p===m||p===void 0&&m===void 0||Nd(e,t,d,p,r,m);return}}for(var v in n)p=n[v],n.hasOwnProperty(v)&&p!=null&&!r.hasOwnProperty(v)&&$(e,t,v,null,r,p);for(f in r)p=r[f],m=n[f],!r.hasOwnProperty(f)||p===m||p==null&&m==null||$(e,t,f,p,r,m)}function Id(e){switch(e){case`css`:case`script`:case`font`:case`img`:case`image`:case`input`:case`link`:return!0;default:return!1}}function Ld(){if(typeof performance.getEntriesByType==`function`){for(var e=0,t=0,n=performance.getEntriesByType(`resource`),r=0;r<n.length;r++){var i=n[r],a=i.transferSize,o=i.initiatorType,s=i.duration;if(a&&s&&Id(o)){for(o=0,s=i.responseEnd,r+=1;r<n.length;r++){var c=n[r],l=c.startTime;if(l>s)break;var u=c.transferSize,d=c.initiatorType;u&&Id(d)&&(c=c.responseEnd,o+=u*(c<s?1:(s-l)/(c-l)))}if(--r,t+=8*(a+o)/(i.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e==`number`)?e:5}var Rd=null,zd=null;function Bd(e){return e.nodeType===9?e:e.ownerDocument}function Vd(e){switch(e){case`http://www.w3.org/2000/svg`:return 1;case`http://www.w3.org/1998/Math/MathML`:return 2;default:return 0}}function Hd(e,t){if(e===0)switch(t){case`svg`:return 1;case`math`:return 2;default:return 0}return e===1&&t===`foreignObject`?0:e}function Ud(e,t){return e===`textarea`||e===`noscript`||typeof t.children==`string`||typeof t.children==`number`||typeof t.children==`bigint`||typeof t.dangerouslySetInnerHTML==`object`&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Wd=null;function Gd(){var e=window.event;return e&&e.type===`popstate`?e!==Wd&&(Wd=e,!0):(Wd=null,!1)}var Kd=typeof setTimeout==`function`?setTimeout:void 0,qd=typeof clearTimeout==`function`?clearTimeout:void 0,Jd=typeof Promise==`function`?Promise:void 0,Yd=typeof queueMicrotask==`function`?queueMicrotask:Jd===void 0?Kd:function(e){return Jd.resolve(null).then(e).catch(Xd)};function Xd(e){setTimeout(function(){throw e})}function Zd(e){return e===`head`}function Qd(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8){if(n=i.data,n===`/$`||n===`/&`){if(r===0){e.removeChild(i),Np(t);return}r--}else if(n===`$`||n===`$?`||n===`$~`||n===`$!`||n===`&`)r++;else if(n===`html`)pf(e.ownerDocument.documentElement);else if(n===`head`){n=e.ownerDocument.head,pf(n);for(var a=n.firstChild;a;){var o=a.nextSibling,s=a.nodeName;a[pt]||s===`SCRIPT`||s===`STYLE`||s===`LINK`&&a.rel.toLowerCase()===`stylesheet`||n.removeChild(a),a=o}}else n===`body`&&pf(e.ownerDocument.body)}n=i}while(n);Np(t)}function $d(e,t){var n=e;e=0;do{var r=n.nextSibling;if(n.nodeType===1?t?(n._stashedDisplay=n.style.display,n.style.display=`none`):(n.style.display=n._stashedDisplay||``,n.getAttribute(`style`)===``&&n.removeAttribute(`style`)):n.nodeType===3&&(t?(n._stashedText=n.nodeValue,n.nodeValue=``):n.nodeValue=n._stashedText||``),r&&r.nodeType===8){if(n=r.data,n===`/$`){if(e===0)break;e--}else n!==`$`&&n!==`$?`&&n!==`$~`&&n!==`$!`||e++}n=r}while(n)}function ef(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var n=t;switch(t=t.nextSibling,n.nodeName){case`HTML`:case`HEAD`:case`BODY`:ef(n),mt(n);continue;case`SCRIPT`:case`STYLE`:continue;case`LINK`:if(n.rel.toLowerCase()===`stylesheet`)continue}e.removeChild(n)}}function tf(e,t,n,r){for(;e.nodeType===1;){var i=n;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!r&&(e.nodeName!==`INPUT`||e.type!==`hidden`))break}else if(!r){if(t===`input`&&e.type===`hidden`){var a=i.name==null?null:``+i.name;if(i.type===`hidden`&&e.getAttribute(`name`)===a)return e}else return e}else if(!e[pt])switch(t){case`meta`:if(!e.hasAttribute(`itemprop`))break;return e;case`link`:if(a=e.getAttribute(`rel`),a===`stylesheet`&&e.hasAttribute(`data-precedence`)||a!==i.rel||e.getAttribute(`href`)!==(i.href==null||i.href===``?null:i.href)||e.getAttribute(`crossorigin`)!==(i.crossOrigin==null?null:i.crossOrigin)||e.getAttribute(`title`)!==(i.title==null?null:i.title))break;return e;case`style`:if(e.hasAttribute(`data-precedence`))break;return e;case`script`:if(a=e.getAttribute(`src`),(a!==(i.src==null?null:i.src)||e.getAttribute(`type`)!==(i.type==null?null:i.type)||e.getAttribute(`crossorigin`)!==(i.crossOrigin==null?null:i.crossOrigin))&&a&&e.hasAttribute(`async`)&&!e.hasAttribute(`itemprop`))break;return e;default:return e}if(e=cf(e.nextSibling),e===null)break}return null}function nf(e,t,n){if(t===``)return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!==`INPUT`||e.type!==`hidden`)&&!n||(e=cf(e.nextSibling),e===null))return null;return e}function rf(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!==`INPUT`||e.type!==`hidden`)&&!t||(e=cf(e.nextSibling),e===null))return null;return e}function af(e){return e.data===`$?`||e.data===`$~`}function of(e){return e.data===`$!`||e.data===`$?`&&e.ownerDocument.readyState!==`loading`}function sf(e,t){var n=e.ownerDocument;if(e.data===`$~`)e._reactRetry=t;else if(e.data!==`$?`||n.readyState!==`loading`)t();else{var r=function(){t(),n.removeEventListener(`DOMContentLoaded`,r)};n.addEventListener(`DOMContentLoaded`,r),e._reactRetry=r}}function cf(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t===`$`||t===`$!`||t===`$?`||t===`$~`||t===`&`||t===`F!`||t===`F`)break;if(t===`/$`||t===`/&`)return null}}return e}var lf=null;function uf(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n===`/$`||n===`/&`){if(t===0)return cf(e.nextSibling);t--}else n!==`$`&&n!==`$!`&&n!==`$?`&&n!==`$~`&&n!==`&`||t++}e=e.nextSibling}return null}function df(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n===`$`||n===`$!`||n===`$?`||n===`$~`||n===`&`){if(t===0)return e;t--}else n!==`/$`&&n!==`/&`||t++}e=e.previousSibling}return null}function ff(e,t,n){switch(t=Bd(n),e){case`html`:if(e=t.documentElement,!e)throw Error(i(452));return e;case`head`:if(e=t.head,!e)throw Error(i(453));return e;case`body`:if(e=t.body,!e)throw Error(i(454));return e;default:throw Error(i(451))}}function pf(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);mt(e)}var mf=new Map,hf=new Set;function gf(e){return typeof e.getRootNode==`function`?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var _f=N.d;N.d={f:vf,r:yf,D:Sf,C:Cf,L:wf,m:Tf,X:Df,S:Ef,M:Of};function vf(){var e=_f.f(),t=bu();return e||t}function yf(e){var t=gt(e);t!==null&&t.tag===5&&t.type===`form`?ws(t):_f.r(e)}var bf=typeof document>`u`?null:document;function xf(e,t,n){var r=bf;if(r&&typeof t==`string`&&t){var i=Lt(t);i=`link[rel="`+e+`"][href="`+i+`"]`,typeof n==`string`&&(i+=`[crossorigin="`+n+`"]`),hf.has(i)||(hf.add(i),e={rel:e,crossOrigin:n,href:t},r.querySelector(i)===null&&(t=r.createElement(`link`),Pd(t,`link`,e),yt(t),r.head.appendChild(t)))}}function Sf(e){_f.D(e),xf(`dns-prefetch`,e,null)}function Cf(e,t){_f.C(e,t),xf(`preconnect`,e,t)}function wf(e,t,n){_f.L(e,t,n);var r=bf;if(r&&e&&t){var i=`link[rel="preload"][as="`+Lt(t)+`"]`;t===`image`&&n&&n.imageSrcSet?(i+=`[imagesrcset="`+Lt(n.imageSrcSet)+`"]`,typeof n.imageSizes==`string`&&(i+=`[imagesizes="`+Lt(n.imageSizes)+`"]`)):i+=`[href="`+Lt(e)+`"]`;var a=i;switch(t){case`style`:a=Af(e);break;case`script`:a=Pf(e)}mf.has(a)||(e=h({rel:`preload`,href:t===`image`&&n&&n.imageSrcSet?void 0:e,as:t},n),mf.set(a,e),r.querySelector(i)!==null||t===`style`&&r.querySelector(jf(a))||t===`script`&&r.querySelector(Ff(a))||(t=r.createElement(`link`),Pd(t,`link`,e),yt(t),r.head.appendChild(t)))}}function Tf(e,t){_f.m(e,t);var n=bf;if(n&&e){var r=t&&typeof t.as==`string`?t.as:`script`,i=`link[rel="modulepreload"][as="`+Lt(r)+`"][href="`+Lt(e)+`"]`,a=i;switch(r){case`audioworklet`:case`paintworklet`:case`serviceworker`:case`sharedworker`:case`worker`:case`script`:a=Pf(e)}if(!mf.has(a)&&(e=h({rel:`modulepreload`,href:e},t),mf.set(a,e),n.querySelector(i)===null)){switch(r){case`audioworklet`:case`paintworklet`:case`serviceworker`:case`sharedworker`:case`worker`:case`script`:if(n.querySelector(Ff(a)))return}r=n.createElement(`link`),Pd(r,`link`,e),yt(r),n.head.appendChild(r)}}}function Ef(e,t,n){_f.S(e,t,n);var r=bf;if(r&&e){var i=vt(r).hoistableStyles,a=Af(e);t||=`default`;var o=i.get(a);if(!o){var s={loading:0,preload:null};if(o=r.querySelector(jf(a)))s.loading=5;else{e=h({rel:`stylesheet`,href:e,"data-precedence":t},n),(n=mf.get(a))&&Rf(e,n);var c=o=r.createElement(`link`);yt(c),Pd(c,`link`,e),c._p=new Promise(function(e,t){c.onload=e,c.onerror=t}),c.addEventListener(`load`,function(){s.loading|=1}),c.addEventListener(`error`,function(){s.loading|=2}),s.loading|=4,Lf(o,t,r)}o={type:`stylesheet`,instance:o,count:1,state:s},i.set(a,o)}}}function Df(e,t){_f.X(e,t);var n=bf;if(n&&e){var r=vt(n).hoistableScripts,i=Pf(e),a=r.get(i);a||(a=n.querySelector(Ff(i)),a||(e=h({src:e,async:!0},t),(t=mf.get(i))&&zf(e,t),a=n.createElement(`script`),yt(a),Pd(a,`link`,e),n.head.appendChild(a)),a={type:`script`,instance:a,count:1,state:null},r.set(i,a))}}function Of(e,t){_f.M(e,t);var n=bf;if(n&&e){var r=vt(n).hoistableScripts,i=Pf(e),a=r.get(i);a||(a=n.querySelector(Ff(i)),a||(e=h({src:e,async:!0,type:`module`},t),(t=mf.get(i))&&zf(e,t),a=n.createElement(`script`),yt(a),Pd(a,`link`,e),n.head.appendChild(a)),a={type:`script`,instance:a,count:1,state:null},r.set(i,a))}}function kf(e,t,n,r){var a=(a=ce.current)?gf(a):null;if(!a)throw Error(i(446));switch(e){case`meta`:case`title`:return null;case`style`:return typeof n.precedence==`string`&&typeof n.href==`string`?(t=Af(n.href),n=vt(a).hoistableStyles,r=n.get(t),r||(r={type:`style`,instance:null,count:0,state:null},n.set(t,r)),r):{type:`void`,instance:null,count:0,state:null};case`link`:if(n.rel===`stylesheet`&&typeof n.href==`string`&&typeof n.precedence==`string`){e=Af(n.href);var o=vt(a).hoistableStyles,s=o.get(e);if(s||(a=a.ownerDocument||a,s={type:`stylesheet`,instance:null,count:0,state:{loading:0,preload:null}},o.set(e,s),(o=a.querySelector(jf(e)))&&!o._p&&(s.instance=o,s.state.loading=5),mf.has(e)||(n={rel:`preload`,as:`style`,href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},mf.set(e,n),o||Nf(a,e,n,s.state))),t&&r===null)throw Error(i(528,``));return s}if(t&&r!==null)throw Error(i(529,``));return null;case`script`:return t=n.async,n=n.src,typeof n==`string`&&t&&typeof t!=`function`&&typeof t!=`symbol`?(t=Pf(n),n=vt(a).hoistableScripts,r=n.get(t),r||(r={type:`script`,instance:null,count:0,state:null},n.set(t,r)),r):{type:`void`,instance:null,count:0,state:null};default:throw Error(i(444,e))}}function Af(e){return`href="`+Lt(e)+`"`}function jf(e){return`link[rel="stylesheet"][`+e+`]`}function Mf(e){return h({},e,{"data-precedence":e.precedence,precedence:null})}function Nf(e,t,n,r){e.querySelector(`link[rel="preload"][as="style"][`+t+`]`)?r.loading=1:(t=e.createElement(`link`),r.preload=t,t.addEventListener(`load`,function(){return r.loading|=1}),t.addEventListener(`error`,function(){return r.loading|=2}),Pd(t,`link`,n),yt(t),e.head.appendChild(t))}function Pf(e){return`[src="`+Lt(e)+`"]`}function Ff(e){return`script[async]`+e}function If(e,t,n){if(t.count++,t.instance===null)switch(t.type){case`style`:var r=e.querySelector(`style[data-href~="`+Lt(n.href)+`"]`);if(r)return t.instance=r,yt(r),r;var a=h({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return r=(e.ownerDocument||e).createElement(`style`),yt(r),Pd(r,`style`,a),Lf(r,n.precedence,e),t.instance=r;case`stylesheet`:a=Af(n.href);var o=e.querySelector(jf(a));if(o)return t.state.loading|=4,t.instance=o,yt(o),o;r=Mf(n),(a=mf.get(a))&&Rf(r,a),o=(e.ownerDocument||e).createElement(`link`),yt(o);var s=o;return s._p=new Promise(function(e,t){s.onload=e,s.onerror=t}),Pd(o,`link`,r),t.state.loading|=4,Lf(o,n.precedence,e),t.instance=o;case`script`:return o=Pf(n.src),(a=e.querySelector(Ff(o)))?(t.instance=a,yt(a),a):(r=n,(a=mf.get(o))&&(r=h({},n),zf(r,a)),e=e.ownerDocument||e,a=e.createElement(`script`),yt(a),Pd(a,`link`,r),e.head.appendChild(a),t.instance=a);case`void`:return null;default:throw Error(i(443,t.type))}else t.type===`stylesheet`&&!(t.state.loading&4)&&(r=t.instance,t.state.loading|=4,Lf(r,n.precedence,e));return t.instance}function Lf(e,t,n){for(var r=n.querySelectorAll(`link[rel="stylesheet"][data-precedence],style[data-precedence]`),i=r.length?r[r.length-1]:null,a=i,o=0;o<r.length;o++){var s=r[o];if(s.dataset.precedence===t)a=s;else if(a!==i)break}a?a.parentNode.insertBefore(e,a.nextSibling):(t=n.nodeType===9?n.head:n,t.insertBefore(e,t.firstChild))}function Rf(e,t){e.crossOrigin??=t.crossOrigin,e.referrerPolicy??=t.referrerPolicy,e.title??=t.title}function zf(e,t){e.crossOrigin??=t.crossOrigin,e.referrerPolicy??=t.referrerPolicy,e.integrity??=t.integrity}var Bf=null;function Vf(e,t,n){if(Bf===null){var r=new Map,i=Bf=new Map;i.set(n,r)}else i=Bf,r=i.get(n),r||(r=new Map,i.set(n,r));if(r.has(e))return r;for(r.set(e,null),n=n.getElementsByTagName(e),i=0;i<n.length;i++){var a=n[i];if(!(a[pt]||a[ot]||e===`link`&&a.getAttribute(`rel`)===`stylesheet`)&&a.namespaceURI!==`http://www.w3.org/2000/svg`){var o=a.getAttribute(t)||``;o=e+o;var s=r.get(o);s?s.push(a):r.set(o,[a])}}return r}function Hf(e,t,n){e=e.ownerDocument||e,e.head.insertBefore(n,t===`title`?e.querySelector(`head > title`):null)}function Uf(e,t,n){if(n===1||t.itemProp!=null)return!1;switch(e){case`meta`:case`title`:return!0;case`style`:if(typeof t.precedence!=`string`||typeof t.href!=`string`||t.href===``)break;return!0;case`link`:if(typeof t.rel!=`string`||typeof t.href!=`string`||t.href===``||t.onLoad||t.onError)break;switch(t.rel){case`stylesheet`:return e=t.disabled,typeof t.precedence==`string`&&e==null;default:return!0}case`script`:if(t.async&&typeof t.async!=`function`&&typeof t.async!=`symbol`&&!t.onLoad&&!t.onError&&t.src&&typeof t.src==`string`)return!0}return!1}function Wf(e){return!(e.type===`stylesheet`&&!(e.state.loading&3))}function Gf(e,t,n,r){if(n.type===`stylesheet`&&(typeof r.media!=`string`||!1!==matchMedia(r.media).matches)&&!(n.state.loading&4)){if(n.instance===null){var i=Af(r.href),a=t.querySelector(jf(i));if(a){t=a._p,typeof t==`object`&&t&&typeof t.then==`function`&&(e.count++,e=Jf.bind(e),t.then(e,e)),n.state.loading|=4,n.instance=a,yt(a);return}a=t.ownerDocument||t,r=Mf(r),(i=mf.get(i))&&Rf(r,i),a=a.createElement(`link`),yt(a);var o=a;o._p=new Promise(function(e,t){o.onload=e,o.onerror=t}),Pd(a,`link`,r),n.instance=a}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(n,t),(t=n.state.preload)&&!(n.state.loading&3)&&(e.count++,n=Jf.bind(e),t.addEventListener(`load`,n),t.addEventListener(`error`,n))}}var Kf=0;function qf(e,t){return e.stylesheets&&e.count===0&&Xf(e,e.stylesheets),0<e.count||0<e.imgCount?function(n){var r=setTimeout(function(){if(e.stylesheets&&Xf(e,e.stylesheets),e.unsuspend){var t=e.unsuspend;e.unsuspend=null,t()}},6e4+t);0<e.imgBytes&&Kf===0&&(Kf=62500*Ld());var i=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&Xf(e,e.stylesheets),e.unsuspend)){var t=e.unsuspend;e.unsuspend=null,t()}},(e.imgBytes>Kf?50:800)+t);return e.unsuspend=n,function(){e.unsuspend=null,clearTimeout(r),clearTimeout(i)}}:null}function Jf(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Xf(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Yf=null;function Xf(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Yf=new Map,t.forEach(Zf,e),Yf=null,Jf.call(e))}function Zf(e,t){if(!(t.state.loading&4)){var n=Yf.get(e);if(n)var r=n.get(null);else{n=new Map,Yf.set(e,n);for(var i=e.querySelectorAll(`link[data-precedence],style[data-precedence]`),a=0;a<i.length;a++){var o=i[a];(o.nodeName===`LINK`||o.getAttribute(`media`)!==`not all`)&&(n.set(o.dataset.precedence,o),r=o)}r&&n.set(null,r)}i=t.instance,o=i.getAttribute(`data-precedence`),a=n.get(o)||r,a===r&&n.set(null,i),n.set(o,i),this.count++,r=Jf.bind(this),i.addEventListener(`load`,r),i.addEventListener(`error`,r),a?a.parentNode.insertBefore(i,a.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(i,e.firstChild)),t.state.loading|=4}}var Qf={$$typeof:C,Provider:null,Consumer:null,_currentValue:ie,_currentValue2:ie,_threadCount:0};function $f(e,t,n,r,i,a,o,s,c){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Ye(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ye(0),this.hiddenUpdates=Ye(null),this.identifierPrefix=r,this.onUncaughtError=i,this.onCaughtError=a,this.onRecoverableError=o,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=c,this.incompleteTransitions=new Map}function ep(e,t,n,r,i,a,o,s,c,l,u,d){return e=new $f(e,t,n,o,c,l,u,d,s),t=1,!0===a&&(t|=24),a=ai(3,null,null,t),e.current=a,a.stateNode=e,t=ia(),t.refCount++,e.pooledCache=t,t.refCount++,a.memoizedState={element:r,isDehydrated:n,cache:t},La(a),e}function tp(e){return e?(e=ri,e):ri}function np(e,t,n,r,i,a){i=tp(i),r.context===null?r.context=i:r.pendingContext=i,r=za(t),r.payload={element:n},a=a===void 0?null:a,a!==null&&(r.callback=a),n=Ba(e,r,t),n!==null&&(hu(n,e,t),Va(n,e,t))}function rp(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function ip(e,t){rp(e,t),(e=e.alternate)&&rp(e,t)}function ap(e){if(e.tag===13||e.tag===31){var t=ei(e,67108864);t!==null&&hu(t,e,67108864),ip(e,67108864)}}function op(e){if(e.tag===13||e.tag===31){var t=pu();t=tt(t);var n=ei(e,t);n!==null&&hu(n,e,t),ip(e,t)}}var sp=!0;function cp(e,t,n,r){var i=M.T;M.T=null;var a=N.p;try{N.p=2,up(e,t,n,r)}finally{N.p=a,M.T=i}}function lp(e,t,n,r){var i=M.T;M.T=null;var a=N.p;try{N.p=8,up(e,t,n,r)}finally{N.p=a,M.T=i}}function up(e,t,n,r){if(sp){var i=dp(r);if(i===null)wd(e,t,r,fp,n),Cp(e,r);else if(Tp(i,e,t,n,r))r.stopPropagation();else if(Cp(e,r),t&4&&-1<Sp.indexOf(e)){for(;i!==null;){var a=gt(i);if(a!==null)switch(a.tag){case 3:if(a=a.stateNode,a.current.memoizedState.isDehydrated){var o=We(a.pendingLanes);if(o!==0){var s=a;for(s.pendingLanes|=2,s.entangledLanes|=2;o;){var c=1<<31-Le(o);s.entanglements[1]|=c,o&=~c}rd(a),!(K&6)&&(tu=Te()+500,id(0,!1))}}break;case 31:case 13:s=ei(a,2),s!==null&&hu(s,a,2),bu(),ip(a,2)}if(a=dp(r),a===null&&wd(e,t,r,fp,n),a===i)break;i=a}i!==null&&r.stopPropagation()}else wd(e,t,r,null,n)}}function dp(e){return e=en(e),pp(e)}var fp=null;function pp(e){if(fp=null,e=ht(e),e!==null){var t=o(e);if(t===null)e=null;else{var n=t.tag;if(n===13){if(e=s(t),e!==null)return e;e=null}else if(n===31){if(e=c(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return fp=e,null}function mp(e){switch(e){case`beforetoggle`:case`cancel`:case`click`:case`close`:case`contextmenu`:case`copy`:case`cut`:case`auxclick`:case`dblclick`:case`dragend`:case`dragstart`:case`drop`:case`focusin`:case`focusout`:case`input`:case`invalid`:case`keydown`:case`keypress`:case`keyup`:case`mousedown`:case`mouseup`:case`paste`:case`pause`:case`play`:case`pointercancel`:case`pointerdown`:case`pointerup`:case`ratechange`:case`reset`:case`resize`:case`seeked`:case`submit`:case`toggle`:case`touchcancel`:case`touchend`:case`touchstart`:case`volumechange`:case`change`:case`selectionchange`:case`textInput`:case`compositionstart`:case`compositionend`:case`compositionupdate`:case`beforeblur`:case`afterblur`:case`beforeinput`:case`blur`:case`fullscreenchange`:case`focus`:case`hashchange`:case`popstate`:case`select`:case`selectstart`:return 2;case`drag`:case`dragenter`:case`dragexit`:case`dragleave`:case`dragover`:case`mousemove`:case`mouseout`:case`mouseover`:case`pointermove`:case`pointerout`:case`pointerover`:case`scroll`:case`touchmove`:case`wheel`:case`mouseenter`:case`mouseleave`:case`pointerenter`:case`pointerleave`:return 8;case`message`:switch(Ee()){case De:return 2;case Oe:return 8;case ke:case Ae:return 32;case je:return 268435456;default:return 32}default:return 32}}var hp=!1,gp=null,_p=null,vp=null,yp=new Map,bp=new Map,xp=[],Sp=`mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset`.split(` `);function Cp(e,t){switch(e){case`focusin`:case`focusout`:gp=null;break;case`dragenter`:case`dragleave`:_p=null;break;case`mouseover`:case`mouseout`:vp=null;break;case`pointerover`:case`pointerout`:yp.delete(t.pointerId);break;case`gotpointercapture`:case`lostpointercapture`:bp.delete(t.pointerId)}}function wp(e,t,n,r,i,a){return e===null||e.nativeEvent!==a?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:a,targetContainers:[i]},t!==null&&(t=gt(t),t!==null&&ap(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function Tp(e,t,n,r,i){switch(t){case`focusin`:return gp=wp(gp,e,t,n,r,i),!0;case`dragenter`:return _p=wp(_p,e,t,n,r,i),!0;case`mouseover`:return vp=wp(vp,e,t,n,r,i),!0;case`pointerover`:var a=i.pointerId;return yp.set(a,wp(yp.get(a)||null,e,t,n,r,i)),!0;case`gotpointercapture`:return a=i.pointerId,bp.set(a,wp(bp.get(a)||null,e,t,n,r,i)),!0}return!1}function Ep(e){var t=ht(e.target);if(t!==null){var n=o(t);if(n!==null){if(t=n.tag,t===13){if(t=s(n),t!==null){e.blockedOn=t,it(e.priority,function(){op(n)});return}}else if(t===31){if(t=c(n),t!==null){e.blockedOn=t,it(e.priority,function(){op(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Dp(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=dp(e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);$t=r,n.target.dispatchEvent(r),$t=null}else return t=gt(n),t!==null&&ap(t),e.blockedOn=n,!1;t.shift()}return!0}function Op(e,t,n){Dp(e)&&n.delete(t)}function kp(){hp=!1,gp!==null&&Dp(gp)&&(gp=null),_p!==null&&Dp(_p)&&(_p=null),vp!==null&&Dp(vp)&&(vp=null),yp.forEach(Op),bp.forEach(Op)}function Ap(e,n){e.blockedOn===n&&(e.blockedOn=null,hp||(hp=!0,t.unstable_scheduleCallback(t.unstable_NormalPriority,kp)))}var jp=null;function Mp(e){jp!==e&&(jp=e,t.unstable_scheduleCallback(t.unstable_NormalPriority,function(){jp===e&&(jp=null);for(var t=0;t<e.length;t+=3){var n=e[t],r=e[t+1],i=e[t+2];if(typeof r!=`function`){if(pp(r||n)===null)continue;break}var a=gt(n);a!==null&&(e.splice(t,3),t-=3,Ss(a,{pending:!0,data:i,method:n.method,action:r},r,i))}}))}function Np(e){function t(t){return Ap(t,e)}gp!==null&&Ap(gp,e),_p!==null&&Ap(_p,e),vp!==null&&Ap(vp,e),yp.forEach(t),bp.forEach(t);for(var n=0;n<xp.length;n++){var r=xp[n];r.blockedOn===e&&(r.blockedOn=null)}for(;0<xp.length&&(n=xp[0],n.blockedOn===null);)Ep(n),n.blockedOn===null&&xp.shift();if(n=(e.ownerDocument||e).$$reactFormReplay,n!=null)for(r=0;r<n.length;r+=3){var i=n[r],a=n[r+1],o=i[st]||null;if(typeof a==`function`)o||Mp(n);else if(o){var s=null;if(a&&a.hasAttribute(`formAction`)){if(i=a,o=a[st]||null)s=o.formAction;else if(pp(i)!==null)continue}else s=o.action;typeof s==`function`?n[r+1]=s:(n.splice(r,3),r-=3),Mp(n)}}}function Pp(){function e(e){e.canIntercept&&e.info===`react-transition`&&e.intercept({handler:function(){return new Promise(function(e){return i=e})},focusReset:`manual`,scroll:`manual`})}function t(){i!==null&&(i(),i=null),r||setTimeout(n,20)}function n(){if(!r&&!navigation.transition){var e=navigation.currentEntry;e&&e.url!=null&&navigation.navigate(e.url,{state:e.getState(),info:`react-transition`,history:`replace`})}}if(typeof navigation==`object`){var r=!1,i=null;return navigation.addEventListener(`navigate`,e),navigation.addEventListener(`navigatesuccess`,t),navigation.addEventListener(`navigateerror`,t),setTimeout(n,100),function(){r=!0,navigation.removeEventListener(`navigate`,e),navigation.removeEventListener(`navigatesuccess`,t),navigation.removeEventListener(`navigateerror`,t),i!==null&&(i(),i=null)}}}function Fp(e){this._internalRoot=e}Ip.prototype.render=Fp.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(i(409));var n=t.current;np(n,pu(),e,t,null,null)},Ip.prototype.unmount=Fp.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;np(e.current,2,null,e,null,null),bu(),t[ct]=null}};function Ip(e){this._internalRoot=e}Ip.prototype.unstable_scheduleHydration=function(e){if(e){var t=rt();e={blockedOn:null,target:e,priority:t};for(var n=0;n<xp.length&&t!==0&&t<xp[n].priority;n++);xp.splice(n,0,e),n===0&&Ep(e)}};var Lp=n.version;if(Lp!==`19.2.8`)throw Error(i(527,Lp,`19.2.8`));N.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render==`function`?Error(i(188)):(e=Object.keys(e).join(`,`),Error(i(268,e)));return e=d(t),e=e===null?null:p(e),e=e===null?null:e.stateNode,e};var Rp={bundleType:0,version:`19.2.8`,rendererPackageName:`react-dom`,currentDispatcherRef:M,reconcilerVersion:`19.2.8`};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<`u`){var zp=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!zp.isDisabled&&zp.supportsFiber)try{Pe=zp.inject(Rp),Fe=zp}catch{}}e.createRoot=function(e,t){if(!a(e))throw Error(i(299));var n=!1,r=``,o=Gs,s=Ks,c=qs;return t!=null&&(!0===t.unstable_strictMode&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onUncaughtError!==void 0&&(o=t.onUncaughtError),t.onCaughtError!==void 0&&(s=t.onCaughtError),t.onRecoverableError!==void 0&&(c=t.onRecoverableError)),t=ep(e,1,!1,null,null,n,r,null,o,s,c,Pp),e[ct]=t.current,Sd(e),new Fp(t)}})),g=o(((e,t)=>{function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>`u`||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!=`function`))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}n(),t.exports=h()})),_=c(u(),1),v=g(),y=`modulepreload`,b=function(e,t){return new URL(e,t).href},x={},S=function(e,t,n){let r=Promise.resolve();if(t&&t.length>0){let e=document.getElementsByTagName(`link`),i=document.querySelector(`meta[property=csp-nonce]`),a=i?.nonce||i?.getAttribute(`nonce`);function o(e){return Promise.all(e.map(e=>Promise.resolve(e).then(e=>({status:`fulfilled`,value:e}),e=>({status:`rejected`,reason:e}))))}function s(e){return import.meta.resolve?import.meta.resolve(e):new URL(e,import.meta.url).href}r=o(t.map(t=>{if(t=b(t,n),t=s(t),t in x)return;x[t]=!0;let r=t.endsWith(`.css`);for(let n=e.length-1;n>=0;n--){let i=e[n];if(i.href===t&&(!r||i.rel===`stylesheet`))return}let i=document.createElement(`link`);if(i.rel=r?`stylesheet`:y,r||(i.as=`script`),i.crossOrigin=``,i.href=t,a&&i.setAttribute(`nonce`,a),document.head.appendChild(i),r)return new Promise((e,n)=>{i.addEventListener(`load`,e),i.addEventListener(`error`,()=>n(Error(`Unable to preload CSS for ${t}`)))})}))}function i(e){let t=new Event(`vite:preloadError`,{cancelable:!0});if(t.payload=e,window.dispatchEvent(t),!t.defaultPrevented)throw e}return r.then(t=>{for(let e of t||[])e.status===`rejected`&&i(e.reason);return e().catch(i)})},C=/^(?:[a-z][a-z0-9+.-]*:|[\\/]{2})/i,w=/^[\\/]{2}/;function T(e,t){return t+e.replace(/\\/g,`/`)}var ee=`popstate`;function te(e){return typeof e==`object`&&!!e&&`pathname`in e&&`search`in e&&`hash`in e&&`state`in e&&`key`in e}function E(e={}){function t(e,t){let n=t.state?.masked,{pathname:r,search:i,hash:a}=n||e.location;return A(``,{pathname:r,search:i,hash:a},t.state&&t.state.usr||null,t.state&&t.state.key||`default`,n?{pathname:e.location.pathname,search:e.location.search,hash:e.location.hash}:void 0)}function n(e,t){return typeof t==`string`?t:re(t)}return M(t,n,null,e)}function D(e,t){if(e===!1||e==null)throw Error(t)}function O(e,t){if(!e){typeof console<`u`&&console.warn(t);try{throw Error(t)}catch{}}}function k(){return Math.random().toString(36).substring(2,10)}function ne(e,t){return{usr:e.state,key:e.key,idx:t,masked:e.mask?{pathname:e.pathname,search:e.search,hash:e.hash}:void 0}}function A(e,t,n=null,r,i){return{pathname:typeof e==`string`?e:e.pathname,search:``,hash:``,...typeof t==`string`?j(t):t,state:n,key:t&&t.key||r||k(),mask:i}}function re({pathname:e=`/`,search:t=``,hash:n=``}){return t&&t!==`?`&&(e+=t.charAt(0)===`?`?t:`?`+t),n&&n!==`#`&&(e+=n.charAt(0)===`#`?n:`#`+n),e}function j(e){let t={};if(e){let n=e.indexOf(`#`);n>=0&&(t.hash=e.substring(n),e=e.substring(0,n));let r=e.indexOf(`?`);r>=0&&(t.search=e.substring(r),e=e.substring(0,r)),e&&(t.pathname=e)}return t}function M(e,t,n,r={}){let{window:i=document.defaultView,v5Compat:a=!1}=r,o=i.history,s=`POP`,c=null,l=u();l??(l=0,o.replaceState({...o.state,idx:l},``));function u(){return(o.state||{idx:null}).idx}function d(){s=`POP`;let e=u(),t=e==null?null:e-l;l=e,c&&c({action:s,location:h.location,delta:t})}function f(e,t){s=`PUSH`;let r=te(e)?e:A(h.location,e,t);n&&n(r,e),l=u()+1;let d=ne(r,l),f=h.createHref(r.mask||r);try{o.pushState(d,``,f)}catch(e){if(e instanceof DOMException&&e.name===`DataCloneError`)throw e;i.location.assign(f)}a&&c&&c({action:s,location:h.location,delta:1})}function p(e,t){s=`REPLACE`;let r=te(e)?e:A(h.location,e,t);n&&n(r,e),l=u();let i=ne(r,l),d=h.createHref(r.mask||r);o.replaceState(i,``,d),a&&c&&c({action:s,location:h.location,delta:0})}function m(e){return N(i,e)}let h={get action(){return s},get location(){return e(i,o)},listen(e){if(c)throw Error(`A history only accepts one active listener`);return i.addEventListener(ee,d),c=e,()=>{i.removeEventListener(ee,d),c=null}},createHref(e){return t(i,e)},createURL:m,encodeLocation(e){let t=m(e);return{pathname:t.pathname,search:t.search,hash:t.hash}},push:f,replace:p,go(e){return o.go(e)}};return h}function N(e,t,n=!1){let r=`http://localhost`;e&&(r=e.location.origin===`null`?e.location.href:e.location.origin),D(r,`No window.location.(origin|href) available to create URL`);let i=typeof t==`string`?t:re(t);return i=i.replace(/ $/,`%20`),!n&&w.test(i)&&(i=r+i),new URL(i,r)}function ie(e,t,n=`/`){return ae(e,t,n,!1)}function ae(e,t,n,r,i){let a=ye((typeof t==`string`?j(t):t).pathname||`/`,n);if(a==null)return null;let o=i??oe(e),s=null,c=ve(a);for(let e=0;s==null&&e<o.length;++e)s=me(o[e],c,r);return s}function oe(e){let t=P(e);return I(t),t}function P(e,t=[],n=[],r=``,i=!1){let a=(e,a,o=i,s)=>{let c={relativePath:s===void 0?e.path||``:s,caseSensitive:e.caseSensitive===!0,childrenIndex:a,route:e};if(c.relativePath.startsWith(`/`)){if(!c.relativePath.startsWith(r)&&o)return;D(c.relativePath.startsWith(r),`Absolute route path "${c.relativePath}" nested under path "${r}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),c.relativePath=c.relativePath.slice(r.length)}let l=De([r,c.relativePath]),u=n.concat(c);e.children&&e.children.length>0&&(D(e.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${l}".`),P(e.children,t,u,l,o)),!(e.path==null&&!e.index)&&t.push({path:l,score:fe(l,e.index),routesMeta:u.map((e,t)=>{let[n,r]=_e(e.relativePath,e.caseSensitive,t===u.length-1);return{...e,matcher:n,compiledParams:r}})})};return e.forEach((e,t)=>{if(e.path===``||!e.path?.includes(`?`))a(e,t);else for(let n of F(e.path))a(e,t,!0,n)}),t}function F(e){let t=e.split(`/`);if(t.length===0)return[];let[n,...r]=t,i=n.endsWith(`?`),a=n.replace(/\?$/,``);if(r.length===0)return i?[a,``]:[a];let o=F(r.join(`/`)),s=[];return s.push(...o.map(e=>e===``?a:[a,e].join(`/`))),i&&s.push(...o),s.map(t=>e.startsWith(`/`)&&t===``?`/`:t)}function I(e){e.sort((e,t)=>e.score===t.score?pe(e.routesMeta.map(e=>e.childrenIndex),t.routesMeta.map(e=>e.childrenIndex)):t.score-e.score)}var L=/^:[\w-]+$/,se=3,ce=2,R=1,le=10,ue=-2,de=e=>e===`*`;function fe(e,t){let n=e.split(`/`),r=n.length;return n.some(de)&&(r+=ue),t&&(r+=ce),n.filter(e=>!de(e)).reduce((e,t)=>e+(L.test(t)?se:t===``?R:le),r)}function pe(e,t){return e.length===t.length&&e.slice(0,-1).every((e,n)=>e===t[n])?e[e.length-1]-t[t.length-1]:0}function me(e,t,n=!1){let{routesMeta:r}=e,i={},a=`/`,o=[];for(let e=0;e<r.length;++e){let s=r[e],c=e===r.length-1,l=a===`/`?t:t.slice(a.length)||`/`,u={path:s.relativePath,caseSensitive:s.caseSensitive,end:c},d=s.matcher&&s.compiledParams?ge(u,l,s.matcher,s.compiledParams):he(u,l),f=s.route;if(!d&&c&&n&&!r[r.length-1].route.index&&(d=he({path:s.relativePath,caseSensitive:s.caseSensitive,end:!1},l)),!d)return null;Object.assign(i,d.params),o.push({params:i,pathname:De([a,d.pathname]),pathnameBase:ke(De([a,d.pathnameBase])),route:f}),d.pathnameBase!==`/`&&(a=De([a,d.pathnameBase]))}return o}function he(e,t){typeof e==`string`&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=_e(e.path,e.caseSensitive,e.end);return ge(e,t,n,r)}function ge(e,t,n,r){let i=t.match(n);if(!i)return null;let a=i[0],o=a.replace(/(.)\/+$/,`$1`),s=i.slice(1);return{params:r.reduce((e,{paramName:t,isOptional:n},r)=>{if(t===`*`){let e=s[r]||``;o=a.slice(0,a.length-e.length).replace(/(.)\/+$/,`$1`)}let i=s[r];return e[t]=n&&!i?void 0:(i||``).replace(/%2F/g,`/`),e},{}),pathname:a,pathnameBase:o,pattern:e}}function _e(e,t=!1,n=!0){O(e===`*`||!e.endsWith(`*`)||e.endsWith(`/*`),`Route path "${e}" will be treated as if it were "${e.replace(/\*$/,`/*`)}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${e.replace(/\*$/,`/*`)}".`);let r=[],i=`^`+e.replace(/\/*\*?$/,``).replace(/^\/*/,`/`).replace(/[\\.*+^${}|()[\]]/g,`\\$&`).replace(/\/:([\w-]+)(\?)?/g,(e,t,n,i,a)=>{if(r.push({paramName:t,isOptional:n!=null}),n){let t=a.charAt(i+e.length);return t&&t!==`/`?`/([^\\/]*)`:`(?:/([^\\/]*))?`}return`/([^\\/]+)`}).replace(/\/([\w-]+)\?(\/|$)/g,`(/$1)?$2`);return e.endsWith(`*`)?(r.push({paramName:`*`}),i+=e===`*`||e===`/*`?`(.*)$`:`(?:\\/(.+)|\\/*)$`):n?i+=`\\/*$`:e!==``&&e!==`/`&&(i+=`(?:(?=\\/|$))`),[new RegExp(i,t?void 0:`i`),r]}function ve(e){try{return e.split(`/`).map(e=>decodeURIComponent(e).replace(/\//g,`%2F`)).join(`/`)}catch(t){return O(!1,`The URL path "${e}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${t}).`),e}}function ye(e,t){if(t===`/`)return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith(`/`)?t.length-1:t.length,r=e.charAt(n);return r&&r!==`/`?null:e.slice(n)||`/`}function be(e,t=`/`){let{pathname:n,search:r=``,hash:i=``}=typeof e==`string`?j(e):e,a;return n?(n=Ee(n),a=n.startsWith(`/`)?xe(n.substring(1),`/`):xe(n,t)):a=t,{pathname:a,search:Ae(r),hash:je(i)}}function xe(e,t){let n=Oe(t).split(`/`);return e.split(`/`).forEach(e=>{e===`..`?n.length>1&&n.pop():e!==`.`&&n.push(e)}),n.length>1?n.join(`/`):`/`}function Se(e,t,n,r){return`Cannot include a '${e}' character in a manually specified \`to.${t}\` field [${JSON.stringify(r)}].  Please separate it out to the \`to.${n}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function Ce(e){return e.filter((e,t)=>t===0||e.route.path&&e.route.path.length>0)}function we(e){let t=Ce(e);return t.map((e,n)=>n===t.length-1?e.pathname:e.pathnameBase)}function Te(e,t,n,r=!1){let i;typeof e==`string`?i=j(e):(i={...e},D(!i.pathname||!i.pathname.includes(`?`),Se(`?`,`pathname`,`search`,i)),D(!i.pathname||!i.pathname.includes(`#`),Se(`#`,`pathname`,`hash`,i)),D(!i.search||!i.search.includes(`#`),Se(`#`,`search`,`hash`,i)));let a=e===``||i.pathname===``,o=a?`/`:i.pathname,s;if(o==null)s=n;else{let e=t.length-1;if(!r&&o.startsWith(`..`)){let t=o.split(`/`);for(;t[0]===`..`;)t.shift(),--e;i.pathname=t.join(`/`)}s=e>=0?t[e]:`/`}let c=be(i,s),l=o&&o!==`/`&&o.endsWith(`/`),u=(a||o===`.`)&&n.endsWith(`/`);return!c.pathname.endsWith(`/`)&&(l||u)&&(c.pathname+=`/`),c}var Ee=e=>e.replace(/[\\/]{2,}/g,`/`),De=e=>Ee(e.join(`/`)),Oe=e=>e.replace(/\/+$/,``),ke=e=>Oe(e).replace(/^\/*/,`/`),Ae=e=>!e||e===`?`?``:e.startsWith(`?`)?e:`?`+e,je=e=>!e||e===`#`?``:e.startsWith(`#`)?e:`#`+e,Me=class{constructor(e,t,n,r=!1){this.status=e,this.statusText=t||``,this.internal=r,n instanceof Error?(this.data=n.toString(),this.error=n):this.data=n}};function Ne(e){return e!=null&&typeof e.status==`number`&&typeof e.statusText==`string`&&typeof e.internal==`boolean`&&`data`in e}function Pe(e){return De(e.map(e=>e.route.path).filter(Boolean))||`/`}var Fe=typeof window<`u`&&window.document!==void 0&&window.document.createElement!==void 0;function Ie(e,t){let n=e;if(typeof n!=`string`||!C.test(n))return{absoluteURL:void 0,isExternal:!1,to:n};let r=n,i=!1;if(Fe)try{let e=new URL(window.location.href),r=w.test(n)?new URL(T(n,e.protocol)):new URL(n),a=ye(r.pathname,t);r.origin===e.origin&&a!=null?n=a+r.search+r.hash:i=!0}catch{O(!1,`<Link to="${n}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}return{absoluteURL:r,isExternal:i,to:n}}Object.getOwnPropertyNames(Object.prototype).sort().join(`\0`);var Le=[`POST`,`PUT`,`PATCH`,`DELETE`];new Set(Le);var Re=[`GET`,...Le];new Set(Re);var ze=[`about:`,`blob:`,`chrome:`,`chrome-untrusted:`,`content:`,`data:`,`devtools:`,`file:`,`filesystem:`,`javascript:`];function Be(e){try{return ze.includes(new URL(e).protocol)}catch{return!1}}var Ve=_.createContext(null);Ve.displayName=`DataRouter`;var He=_.createContext(null);He.displayName=`DataRouterState`;var Ue=_.createContext(!1);function We(){return _.useContext(Ue)}var Ge=_.createContext({isTransitioning:!1});Ge.displayName=`ViewTransition`;var Ke=_.createContext(new Map);Ke.displayName=`Fetchers`;var qe=_.createContext(null);qe.displayName=`Await`;var Je=_.createContext(null);Je.displayName=`Navigation`;var Ye=_.createContext(null);Ye.displayName=`Location`;var Xe=_.createContext({outlet:null,matches:[],isDataRoute:!1});Xe.displayName=`Route`;var Ze=_.createContext(null);Ze.displayName=`RouteError`;var Qe=`REACT_ROUTER_ERROR`,$e=`REDIRECT`,et=`ROUTE_ERROR_RESPONSE`;function tt(e){if(e.startsWith(`${Qe}:${$e}:{`))try{let t=JSON.parse(e.slice(28));if(typeof t==`object`&&t&&typeof t.status==`number`&&typeof t.statusText==`string`&&typeof t.location==`string`&&typeof t.reloadDocument==`boolean`&&typeof t.replace==`boolean`)return t}catch{}}function nt(e){if(e.startsWith(`${Qe}:${et}:{`))try{let t=JSON.parse(e.slice(40));if(typeof t==`object`&&t&&typeof t.status==`number`&&typeof t.statusText==`string`)return new Me(t.status,t.statusText,t.data)}catch{}}function rt(e,{relative:t}={}){D(it(),`useHref() may be used only in the context of a <Router> component.`);let{basename:n,navigator:r}=_.useContext(Je),{hash:i,pathname:a,search:o}=ut(e,{relative:t}),s=a;return n!==`/`&&(s=a===`/`?n:De([n,a])),r.createHref({pathname:s,search:o,hash:i})}function it(){return _.useContext(Ye)!=null}function at(){return D(it(),`useLocation() may be used only in the context of a <Router> component.`),_.useContext(Ye).location}var ot=`You should call navigate() in a React.useEffect(), not when your component is first rendered.`;function st(e){_.useContext(Je).static||_.useLayoutEffect(e)}function ct(){let{isDataRoute:e}=_.useContext(Xe);return e?Dt():lt()}function lt(){D(it(),`useNavigate() may be used only in the context of a <Router> component.`);let e=_.useContext(Ve),{basename:t,navigator:n}=_.useContext(Je),{matches:r}=_.useContext(Xe),{pathname:i}=at(),a=JSON.stringify(we(r)),o=_.useRef(!1);return st(()=>{o.current=!0}),_.useCallback((r,s={})=>{if(O(o.current,ot),!o.current)return;if(typeof r==`number`){n.go(r);return}let c=Te(r,JSON.parse(a),i,s.relative===`path`);e==null&&t!==`/`&&(c.pathname=c.pathname===`/`?t:De([t,c.pathname])),(s.replace?n.replace:n.push)(c,s.state,s)},[t,n,a,i,e])}_.createContext(null);function ut(e,{relative:t}={}){let{matches:n}=_.useContext(Xe),{pathname:r}=at(),i=JSON.stringify(we(n));return _.useMemo(()=>Te(e,JSON.parse(i),r,t===`path`),[e,i,r,t])}function dt(e,t){return ft(e,t)}function ft(e,t,n){D(it(),`useRoutes() may be used only in the context of a <Router> component.`);let{navigator:r}=_.useContext(Je),{matches:i}=_.useContext(Xe),a=i[i.length-1],o=a?a.params:{},s=a?a.pathname:`/`,c=a?a.pathnameBase:`/`,l=a&&a.route;{let e=l&&l.path||``;kt(s,!l||e.endsWith(`*`)||e.endsWith(`*?`),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${s}" (under <Route path="${e}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${e}"> to <Route path="${e===`/`?`*`:`${e}/*`}">.`)}let u=at(),d;if(t){let e=typeof t==`string`?j(t):t;D(c===`/`||e.pathname?.startsWith(c),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${c}" but pathname "${e.pathname}" was given in the \`location\` prop.`),d=e}else d=u;let f=d.pathname||`/`,p=f;if(c!==`/`){let e=c.replace(/^\//,``).split(`/`);p=`/`+f.replace(/^\//,``).split(`/`).slice(e.length).join(`/`)}let m=n&&n.state.matches.length?n.state.matches.map(e=>Object.assign(e,{route:n.manifest[e.route.id]||e.route})):ie(e,{pathname:p});O(l||m!=null,`No routes matched location "${d.pathname}${d.search}${d.hash}" `),O(m==null||m[m.length-1].route.element!==void 0||m[m.length-1].route.Component!==void 0||m[m.length-1].route.lazy!==void 0,`Matched leaf route at location "${d.pathname}${d.search}${d.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let h=yt(m&&m.map(e=>Object.assign({},e,{params:Object.assign({},o,e.params),pathname:De([c,r.encodeLocation?r.encodeLocation(e.pathname.replace(/%/g,`%25`).replace(/\?/g,`%3F`).replace(/#/g,`%23`)).pathname:e.pathname]),pathnameBase:e.pathnameBase===`/`?c:De([c,r.encodeLocation?r.encodeLocation(e.pathnameBase.replace(/%/g,`%25`).replace(/\?/g,`%3F`).replace(/#/g,`%23`)).pathname:e.pathnameBase])})),i,n);return t&&h?_.createElement(Ye.Provider,{value:{location:{pathname:`/`,search:``,hash:``,state:null,key:`default`,mask:void 0,...d},navigationType:`POP`}},h):h}function pt(){let e=Et(),t=Ne(e)?`${e.status} ${e.statusText}`:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,r=`rgba(200,200,200, 0.5)`,i={padding:`0.5rem`,backgroundColor:r},a={padding:`2px 4px`,backgroundColor:r},o=null;return console.error(`Error handled by React Router default ErrorBoundary:`,e),o=_.createElement(_.Fragment,null,_.createElement(`p`,null,`💿 Hey developer 👋`),_.createElement(`p`,null,`You can provide a way better UX than this when your app throws errors by providing your own `,_.createElement(`code`,{style:a},`ErrorBoundary`),` or`,` `,_.createElement(`code`,{style:a},`errorElement`),` prop on your route.`)),_.createElement(_.Fragment,null,_.createElement(`h2`,null,`Unexpected Application Error!`),_.createElement(`h3`,{style:{fontStyle:`italic`}},t),n?_.createElement(`pre`,{style:i},n):null,o)}var mt=_.createElement(pt,null),ht=class extends _.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,t){return t.location!==e.location||t.revalidation!==`idle`&&e.revalidation===`idle`?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error===void 0?t.error:e.error,location:t.location,revalidation:e.revalidation||t.revalidation}}componentDidCatch(e,t){this.props.onError?this.props.onError(e,t):console.error(`React Router caught the following error during render`,e)}render(){let e=this.state.error;if(this.context&&typeof e==`object`&&e&&`digest`in e&&typeof e.digest==`string`){let t=nt(e.digest);t&&(e=t)}let t=e===void 0?this.props.children:_.createElement(Xe.Provider,{value:this.props.routeContext},_.createElement(Ze.Provider,{value:e,children:this.props.component}));return this.context?_.createElement(_t,{error:e},t):t}};ht.contextType=Ue;var gt=new WeakMap;function _t({children:e,error:t}){let{basename:n}=_.useContext(Je);if(typeof t==`object`&&t&&`digest`in t&&typeof t.digest==`string`){let e=tt(t.digest);if(e){let r=gt.get(t);if(r)throw r;let i=Ie(e.location,n),a=i.absoluteURL||i.to;if(Be(a))throw Error(`Invalid redirect location`);if(Fe&&!gt.get(t)){if(i.isExternal||e.reloadDocument)window.location.href=a;else{let n=Promise.resolve().then(()=>window.__reactRouterDataRouter.navigate(i.to,{replace:e.replace}));throw gt.set(t,n),n}}return _.createElement(`meta`,{httpEquiv:`refresh`,content:`0;url=${a}`})}}return e}function vt({routeContext:e,match:t,children:n}){let r=_.useContext(Ve);return r&&r.static&&r.staticContext&&(t.route.errorElement||t.route.ErrorBoundary)&&(r.staticContext._deepestRenderedBoundaryId=t.route.id),_.createElement(Xe.Provider,{value:e},n)}function yt(e,t=[],n){let r=n?.state;if(e==null){if(!r)return null;if(r.errors)e=r.matches;else if(t.length===0&&!r.initialized&&r.matches.length>0)e=r.matches;else return null}let i=e,a=r?.errors;if(a!=null){let e=i.findIndex(e=>e.route.id&&a?.[e.route.id]!==void 0);D(e>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(a).join(`,`)}`),i=i.slice(0,Math.min(i.length,e+1))}let o=!1,s=-1;if(n&&r){o=r.renderFallback;for(let e=0;e<i.length;e++){let t=i[e];if((t.route.HydrateFallback||t.route.hydrateFallbackElement)&&(s=e),t.route.id){let{loaderData:e,errors:a}=r,c=t.route.loader&&!e.hasOwnProperty(t.route.id)&&(!a||a[t.route.id]===void 0);if(t.route.lazy||c){n.isStatic&&(o=!0),i=s>=0?i.slice(0,s+1):[i[0]];break}}}}let c=n?.onError,l=r&&c?(e,t)=>{c(e,{location:r.location,params:r.matches?.[0]?.params??{},pattern:Pe(r.matches),errorInfo:t})}:void 0;return i.reduceRight((e,n,c)=>{let u,d=!1,f=null,p=null;r&&(u=a&&n.route.id?a[n.route.id]:void 0,f=n.route.errorElement||mt,o&&(s<0&&c===0?(kt(`route-fallback`,!1,"No `HydrateFallback` element provided to render during initial hydration"),d=!0,p=null):s===c&&(d=!0,p=n.route.hydrateFallbackElement||null)));let m=t.concat(i.slice(0,c+1)),h=()=>{let t;return t=u?f:d?p:n.route.Component?_.createElement(n.route.Component,null):n.route.element?n.route.element:e,_.createElement(vt,{match:n,routeContext:{outlet:e,matches:m,isDataRoute:r!=null},children:t})};return r&&(n.route.ErrorBoundary||n.route.errorElement||c===0)?_.createElement(ht,{location:r.location,revalidation:r.revalidation,component:f,error:u,children:h(),routeContext:{outlet:null,matches:m,isDataRoute:!0},onError:l}):h()},null)}function bt(e){return`${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function xt(e){let t=_.useContext(Ve);return D(t,bt(e)),t}function St(e){let t=_.useContext(He);return D(t,bt(e)),t}function Ct(e){let t=_.useContext(Xe);return D(t,bt(e)),t}function wt(e){let t=Ct(e),n=t.matches[t.matches.length-1];return D(n.route.id,`${e} can only be used on routes that contain a unique "id"`),n.route.id}function Tt(){return wt(`useRouteId`)}function Et(){let e=_.useContext(Ze),t=St(`useRouteError`),n=wt(`useRouteError`);return e===void 0?t.errors?.[n]:e}function Dt(){let{router:e}=xt(`useNavigate`),t=wt(`useNavigate`),n=_.useRef(!1);return st(()=>{n.current=!0}),_.useCallback(async(r,i={})=>{O(n.current,ot),n.current&&(typeof r==`number`?await e.navigate(r):await e.navigate(r,{fromRouteId:t,...i}))},[e,t])}var Ot={};function kt(e,t,n){!t&&!Ot[e]&&(Ot[e]=!0,O(!1,n))}_.memo(At);function At({routes:e,manifest:t,future:n,state:r,isStatic:i,onError:a}){return ft(e,void 0,{manifest:t,state:r,isStatic:i,onError:a,future:n})}function z(e){D(!1,`A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.`)}function jt({basename:e=`/`,children:t=null,location:n,navigationType:r=`POP`,navigator:i,static:a=!1,useTransitions:o}){D(!it(),`You cannot render a <Router> inside another <Router>. You should never have more than one in your app.`);let s=e.replace(/^\/*/,`/`),c=_.useMemo(()=>({basename:s,navigator:i,static:a,useTransitions:o,future:{}}),[s,i,a,o]);typeof n==`string`&&(n=j(n));let{pathname:l=`/`,search:u=``,hash:d=``,state:f=null,key:p=`default`,mask:m}=n,h=_.useMemo(()=>{let e=ye(l,s);return e==null?null:{location:{pathname:e,search:u,hash:d,state:f,key:p,mask:m},navigationType:r}},[s,l,u,d,f,p,r,m]);return O(h!=null,`<Router basename="${s}"> is not able to match the URL "${l}${u}${d}" because it does not start with the basename, so the <Router> won't render anything.`),h==null?null:_.createElement(Je.Provider,{value:c},_.createElement(Ye.Provider,{children:t,value:h}))}function Mt({children:e,location:t}){return dt(Nt(e),t)}_.Component;function Nt(e,t=[]){let n=[];return _.Children.forEach(e,(e,r)=>{if(!_.isValidElement(e))return;let i=[...t,r];if(e.type===_.Fragment){n.push.apply(n,Nt(e.props.children,i));return}D(e.type===z,`[${typeof e.type==`string`?e.type:e.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),D(!e.props.index||!e.props.children,`An index route cannot have child routes.`);let a={id:e.props.id||i.join(`-`),caseSensitive:e.props.caseSensitive,element:e.props.element,Component:e.props.Component,index:e.props.index,path:e.props.path,middleware:e.props.middleware,loader:e.props.loader,action:e.props.action,hydrateFallbackElement:e.props.hydrateFallbackElement,HydrateFallback:e.props.HydrateFallback,errorElement:e.props.errorElement,ErrorBoundary:e.props.ErrorBoundary,hasErrorBoundary:e.props.hasErrorBoundary===!0||e.props.ErrorBoundary!=null||e.props.errorElement!=null,shouldRevalidate:e.props.shouldRevalidate,handle:e.props.handle,lazy:e.props.lazy};e.props.children&&(a.children=Nt(e.props.children,i)),n.push(a)}),n}var Pt=`get`,Ft=`application/x-www-form-urlencoded`;function It(e){return typeof HTMLElement<`u`&&e instanceof HTMLElement}function Lt(e){return It(e)&&e.tagName.toLowerCase()===`button`}function Rt(e){return It(e)&&e.tagName.toLowerCase()===`form`}function zt(e){return It(e)&&e.tagName.toLowerCase()===`input`}function Bt(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function Vt(e,t){return e.button===0&&(!t||t===`_self`)&&!Bt(e)}var Ht=null;function Ut(){if(Ht===null)try{new FormData(document.createElement(`form`),0),Ht=!1}catch{Ht=!0}return Ht}var Wt=new Set([`application/x-www-form-urlencoded`,`multipart/form-data`,`text/plain`]);function Gt(e){return e!=null&&!Wt.has(e)?(O(!1,`"${e}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${Ft}"`),null):e}function Kt(e,t){let n,r,i,a,o;if(Rt(e)){let o=e.getAttribute(`action`);r=o?ye(o,t):null,n=e.getAttribute(`method`)||Pt,i=Gt(e.getAttribute(`enctype`))||Ft,a=new FormData(e)}else if(Lt(e)||zt(e)&&(e.type===`submit`||e.type===`image`)){let o=e.form;if(o==null)throw Error(`Cannot submit a <button> or <input type="submit"> without a <form>`);let s=e.getAttribute(`formaction`)||o.getAttribute(`action`);if(r=s?ye(s,t):null,n=e.getAttribute(`formmethod`)||o.getAttribute(`method`)||Pt,i=Gt(e.getAttribute(`formenctype`))||Gt(o.getAttribute(`enctype`))||Ft,a=new FormData(o,e),!Ut()){let{name:t,type:n,value:r}=e;if(n===`image`){let e=t?`${t}.`:``;a.append(`${e}x`,`0`),a.append(`${e}y`,`0`)}else t&&a.append(t,r)}}else if(It(e))throw Error(`Cannot submit element that is not <form>, <button>, or <input type="submit|image">`);else n=Pt,r=null,i=Ft,o=e;return a&&i===`text/plain`&&(o=a,a=void 0),{action:r,method:n.toLowerCase(),encType:i,formData:a,body:o}}Object.getOwnPropertyNames(Object.prototype).sort().join(`\0`);function qt(e,t){if(e===!1||e==null)throw Error(t)}function Jt(e,t,n,r){let i=typeof e==`string`?new URL(e,typeof window>`u`?`server://singlefetch/`:window.location.origin):e;return i.pathname=n?i.pathname.endsWith(`/`)?`${i.pathname}_.${r}`:`${i.pathname}.${r}`:i.pathname===`/`?`_root.${r}`:t&&ye(i.pathname,t)===`/`?`${Oe(t)}/_root.${r}`:`${Oe(i.pathname)}.${r}`,i}async function Yt(e,t){if(e.id in t)return t[e.id];try{let n=await S(()=>import(e.module),[],import.meta.url);return t[e.id]=n,n}catch(t){return console.error(`Error loading route module \`${e.module}\`, reloading page...`),console.error(t),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function Xt(e){return e!=null&&typeof e.page==`string`}function Zt(e){return e==null?!1:e.href==null?e.rel===`preload`&&typeof e.imageSrcSet==`string`&&typeof e.imageSizes==`string`:typeof e.rel==`string`&&typeof e.href==`string`}async function Qt(e,t,n){return rn((await Promise.all(e.map(async e=>{let r=t.routes[e.route.id];if(r){let e=await Yt(r,n);return e.links?e.links():[]}return[]}))).flat(1).filter(Zt).filter(e=>e.rel===`stylesheet`||e.rel===`preload`).map(e=>e.rel===`stylesheet`?{...e,rel:`prefetch`,as:`style`}:{...e,rel:`prefetch`}))}function $t(e,t,n,r,i,a){let o=(e,t)=>!n[t]||e.route.id!==n[t].route.id,s=(e,t)=>n[t].pathname!==e.pathname||n[t].route.path?.endsWith(`*`)&&n[t].params[`*`]!==e.params[`*`];return a===`assets`?t.filter((e,t)=>o(e,t)||s(e,t)):a===`data`?t.filter((t,a)=>{let c=r.routes[t.route.id];if(!c||!c.hasLoader)return!1;if(o(t,a)||s(t,a))return!0;if(t.route.shouldRevalidate){let r=t.route.shouldRevalidate({currentUrl:new URL(i.pathname+i.search+i.hash,window.origin),currentParams:n[0]?.params||{},nextUrl:new URL(e,window.origin),nextParams:t.params,defaultShouldRevalidate:!0});if(typeof r==`boolean`)return r}return!0}):[]}function en(e,t,{includeHydrateFallback:n}={}){return tn(e.map(e=>{let r=t.routes[e.route.id];if(!r)return[];let i=[r.module];return r.clientActionModule&&(i=i.concat(r.clientActionModule)),r.clientLoaderModule&&(i=i.concat(r.clientLoaderModule)),n&&r.hydrateFallbackModule&&(i=i.concat(r.hydrateFallbackModule)),r.imports&&(i=i.concat(r.imports)),i}).flat(1))}function tn(e){return[...new Set(e)]}function nn(e){let t={},n=Object.keys(e).sort();for(let r of n)t[r]=e[r];return t}function rn(e,t){let n=new Set,r=new Set(t);return e.reduce((e,i)=>{if(t&&!Xt(i)&&i.as===`script`&&i.href&&r.has(i.href))return e;let a=JSON.stringify(nn(i));return n.has(a)||(n.add(a),e.push({key:a,link:i})),e},[])}function an(){let e=_.useContext(Ve);return qt(e,`You must render this element inside a <DataRouterContext.Provider> element`),e}function on(){let e=_.useContext(He);return qt(e,`You must render this element inside a <DataRouterStateContext.Provider> element`),e}var sn=_.createContext(void 0);sn.displayName=`FrameworkContext`;function cn(){let e=_.useContext(sn);return qt(e,`You must render this element inside a <HydratedRouter> element`),e}function ln(e,t){let n=_.useContext(sn),[r,i]=_.useState(!1),[a,o]=_.useState(!1),{onFocus:s,onBlur:c,onMouseEnter:l,onMouseLeave:u,onTouchStart:d}=t,f=_.useRef(null);_.useEffect(()=>{if(e===`render`&&o(!0),e===`viewport`){let e=new IntersectionObserver(e=>{e.forEach(e=>{o(e.isIntersecting)})},{threshold:.5});return f.current&&e.observe(f.current),()=>{e.disconnect()}}},[e]),_.useEffect(()=>{if(r){let e=setTimeout(()=>{o(!0)},100);return()=>{clearTimeout(e)}}},[r]);let p=()=>{i(!0)},m=()=>{i(!1),o(!1)};return n?e===`intent`?[a,f,{onFocus:un(s,p),onBlur:un(c,m),onMouseEnter:un(l,p),onMouseLeave:un(u,m),onTouchStart:un(d,p)}]:[a,f,{}]:[!1,f,{}]}function un(e,t){return n=>{e&&e(n),n.defaultPrevented||t(n)}}function dn({page:e,...t}){let n=We(),{nonce:r}=cn(),{router:i}=an(),a=_.useMemo(()=>ie(i.routes,e,i.basename),[i.routes,e,i.basename]);return a?(t.nonce==null&&r&&(t={...t,nonce:r}),n?_.createElement(pn,{page:e,matches:a,...t}):_.createElement(mn,{page:e,matches:a,...t})):null}function fn(e){let{manifest:t,routeModules:n}=cn(),[r,i]=_.useState([]);return _.useEffect(()=>{let r=!1;return Qt(e,t,n).then(e=>{r||i(e)}),()=>{r=!0}},[e,t,n]),r}function pn({page:e,matches:t,...n}){let r=at(),{future:i}=cn(),{basename:a}=an(),o=_.useMemo(()=>{if(e===r.pathname+r.search+r.hash)return[];let n=Jt(e,a,i.v8_trailingSlashAwareDataRequests,`rsc`),o=!1,s=[];for(let e of t)typeof e.route.shouldRevalidate==`function`?o=!0:s.push(e.route.id);return o&&s.length>0&&n.searchParams.set(`_routes`,s.join(`,`)),[n.pathname+n.search]},[a,i.v8_trailingSlashAwareDataRequests,e,r,t]);return _.createElement(_.Fragment,null,o.map(e=>_.createElement(`link`,{key:e,rel:`prefetch`,as:`fetch`,href:e,...n})))}function mn({page:e,matches:t,...n}){let r=at(),{future:i,manifest:a,routeModules:o}=cn(),{basename:s}=an(),{loaderData:c,matches:l}=on(),u=_.useMemo(()=>$t(e,t,l,a,r,`data`),[e,t,l,a,r]),d=_.useMemo(()=>$t(e,t,l,a,r,`assets`),[e,t,l,a,r]),f=_.useMemo(()=>{if(e===r.pathname+r.search+r.hash)return[];let n=new Set,l=!1;if(t.forEach(e=>{let t=a.routes[e.route.id];!t||!t.hasLoader||(!u.some(t=>t.route.id===e.route.id)&&e.route.id in c&&o[e.route.id]?.shouldRevalidate||t.hasClientLoader?l=!0:n.add(e.route.id))}),n.size===0)return[];let d=Jt(e,s,i.v8_trailingSlashAwareDataRequests,`data`);return l&&n.size>0&&d.searchParams.set(`_routes`,t.filter(e=>n.has(e.route.id)).map(e=>e.route.id).join(`,`)),[d.pathname+d.search]},[s,i.v8_trailingSlashAwareDataRequests,c,r,a,u,t,e,o]),p=_.useMemo(()=>en(d,a),[d,a]),m=fn(d);return _.createElement(_.Fragment,null,f.map(e=>_.createElement(`link`,{key:e,rel:`prefetch`,as:`fetch`,href:e,...n})),p.map(e=>_.createElement(`link`,{key:e,rel:`modulepreload`,href:e,...n})),m.map(({key:e,link:t})=>_.createElement(`link`,{key:e,nonce:n.nonce,...t,crossOrigin:t.crossOrigin??n.crossOrigin})))}function hn(...e){return t=>{e.forEach(e=>{typeof e==`function`?e(t):e!=null&&(e.current=t)})}}_.Component;var gn=typeof window<`u`&&window.document!==void 0&&window.document.createElement!==void 0;try{gn&&(window.__reactRouterVersion=`7.18.2`)}catch{}function _n({basename:e,children:t,useTransitions:n,window:r}){let i=_.useRef();i.current??=E({window:r,v5Compat:!0});let a=i.current,[o,s]=_.useState({action:a.action,location:a.location}),c=_.useCallback(e=>{n===!1?s(e):_.startTransition(()=>s(e))},[n]);return _.useLayoutEffect(()=>a.listen(c),[a,c]),_.createElement(jt,{basename:e,children:t,location:o.location,navigationType:o.action,navigator:a,useTransitions:n})}var vn=_.forwardRef(function({onClick:e,discover:t=`render`,prefetch:n=`none`,relative:r,reloadDocument:i,replace:a,mask:o,state:s,target:c,to:l,preventScrollReset:u,viewTransition:d,defaultShouldRevalidate:f,...p},m){let{basename:h,navigator:g,useTransitions:v}=_.useContext(Je),y=typeof l==`string`&&C.test(l),b=Ie(l,h);l=b.to;let x=rt(l,{relative:r}),S=at(),w=null;if(o){let e=Te(o,[],S.mask?S.mask.pathname:`/`,!0);h!==`/`&&(e.pathname=e.pathname===`/`?h:De([h,e.pathname])),w=g.createHref(e)}let[T,ee,te]=ln(n,p),E=Cn(l,{replace:a,mask:o,state:s,target:c,preventScrollReset:u,relative:r,viewTransition:d,defaultShouldRevalidate:f,useTransitions:v});function D(t){e&&e(t),t.defaultPrevented||E(t)}let O=!(b.isExternal||i),k=_.createElement(`a`,{...p,...te,href:(O?w:void 0)||b.absoluteURL||x,onClick:O?D:e,ref:hn(m,ee),target:c,"data-discover":!y&&t===`render`?`true`:void 0});return T&&!y?_.createElement(_.Fragment,null,k,_.createElement(dn,{page:x})):k});vn.displayName=`Link`;var yn=_.forwardRef(function({"aria-current":e=`page`,caseSensitive:t=!1,className:n=``,end:r=!1,style:i,to:a,viewTransition:o,children:s,...c},l){let u=ut(a,{relative:c.relative}),d=at(),f=_.useContext(He),{navigator:p,basename:m}=_.useContext(Je),h=f!=null&&On(u)&&o===!0,g=p.encodeLocation?p.encodeLocation(u).pathname:u.pathname,v=d.pathname,y=f&&f.navigation&&f.navigation.location?f.navigation.location.pathname:null;t||(v=v.toLowerCase(),y=y?y.toLowerCase():null,g=g.toLowerCase()),y&&m&&(y=ye(y,m)||y);let b=g!==`/`&&g.endsWith(`/`)?g.length-1:g.length,x=v===g||!r&&v.startsWith(g)&&v.charAt(b)===`/`,S=y!=null&&(y===g||!r&&y.startsWith(g)&&y.charAt(g.length)===`/`),C={isActive:x,isPending:S,isTransitioning:h},w=x?e:void 0,T;T=typeof n==`function`?n(C):[n,x?`active`:null,S?`pending`:null,h?`transitioning`:null].filter(Boolean).join(` `);let ee=typeof i==`function`?i(C):i;return _.createElement(vn,{...c,"aria-current":w,className:T,ref:l,style:ee,to:a,viewTransition:o},typeof s==`function`?s(C):s)});yn.displayName=`NavLink`;var bn=_.forwardRef(({discover:e=`render`,fetcherKey:t,navigate:n,reloadDocument:r,replace:i,state:a,method:o=Pt,action:s,onSubmit:c,relative:l,preventScrollReset:u,viewTransition:d,defaultShouldRevalidate:f,...p},m)=>{let{useTransitions:h}=_.useContext(Je),g=En(),v=Dn(s,{relative:l}),y=o.toLowerCase()===`get`?`get`:`post`,b=typeof s==`string`&&C.test(s);return _.createElement(`form`,{ref:m,method:y,action:v,onSubmit:r?c:e=>{if(c&&c(e),e.defaultPrevented)return;e.preventDefault();let r=e.nativeEvent.submitter,s=r?.getAttribute(`formmethod`)||o,p=()=>g(r||e.currentTarget,{fetcherKey:t,method:s,navigate:n,replace:i,state:a,relative:l,preventScrollReset:u,viewTransition:d,defaultShouldRevalidate:f});h&&n!==!1?_.startTransition(()=>p()):p()},...p,"data-discover":!b&&e===`render`?`true`:void 0})});bn.displayName=`Form`;function xn(e){return`${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Sn(e){let t=_.useContext(Ve);return D(t,xn(e)),t}function Cn(e,{target:t,replace:n,mask:r,state:i,preventScrollReset:a,relative:o,viewTransition:s,defaultShouldRevalidate:c,useTransitions:l}={}){let u=ct(),d=at(),f=ut(e,{relative:o});return _.useCallback(p=>{if(Vt(p,t)){p.preventDefault();let t=n===void 0?re(d)===re(f):n,m=()=>u(e,{replace:t,mask:r,state:i,preventScrollReset:a,relative:o,viewTransition:s,defaultShouldRevalidate:c});l?_.startTransition(()=>m()):m()}},[d,u,f,n,r,i,t,e,a,o,s,c,l])}var wn=0,Tn=()=>`__${String(++wn)}__`;function En(){let{router:e}=Sn(`useSubmit`),{basename:t}=_.useContext(Je),n=Tt(),r=e.fetch,i=e.navigate;return _.useCallback(async(e,a={})=>{let{action:o,method:s,encType:c,formData:l,body:u}=Kt(e,t);if(a.navigate===!1){let e=a.fetcherKey||Tn();await r(e,n,a.action||o,{defaultShouldRevalidate:a.defaultShouldRevalidate,preventScrollReset:a.preventScrollReset,formData:l,body:u,formMethod:a.method||s,formEncType:a.encType||c,flushSync:a.flushSync})}else await i(a.action||o,{defaultShouldRevalidate:a.defaultShouldRevalidate,preventScrollReset:a.preventScrollReset,formData:l,body:u,formMethod:a.method||s,formEncType:a.encType||c,replace:a.replace,state:a.state,fromRouteId:n,flushSync:a.flushSync,viewTransition:a.viewTransition})},[r,i,t,n])}function Dn(e,{relative:t}={}){let{basename:n}=_.useContext(Je),r=_.useContext(Xe);D(r,`useFormAction must be used inside a RouteContext`);let[i]=r.matches.slice(-1),a={...ut(e||`.`,{relative:t})},o=at();if(e==null){a.search=o.search;let e=new URLSearchParams(a.search),t=e.getAll(`index`);if(t.some(e=>e===``)){e.delete(`index`),t.filter(e=>e).forEach(t=>e.append(`index`,t));let n=e.toString();a.search=n?`?${n}`:``}}return(!e||e===`.`)&&i.route.index&&(a.search=a.search?a.search.replace(/^\?/,`?index&`):`?index`),n!==`/`&&(a.pathname=a.pathname===`/`?n:De([n,a.pathname])),re(a)}function On(e,{relative:t}={}){let n=_.useContext(Ge);D(n!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:r}=Sn(`useViewTransitionState`),i=ut(e,{relative:t});if(!n.isTransitioning)return!1;let a=ye(n.currentLocation.pathname,r)||n.currentLocation.pathname,o=ye(n.nextLocation.pathname,r)||n.nextLocation.pathname;return he(i.pathname,o)!=null||he(i.pathname,a)!=null}var kn=(...e)=>e.filter((e,t,n)=>!!e&&e.trim()!==``&&n.indexOf(e)===t).join(` `).trim(),An=e=>e.replace(/([a-z0-9])([A-Z])/g,`$1-$2`).toLowerCase(),jn=e=>e.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,t,n)=>n?n.toUpperCase():t.toLowerCase()),Mn=e=>{let t=jn(e);return t.charAt(0).toUpperCase()+t.slice(1)},Nn={xmlns:`http://www.w3.org/2000/svg`,width:24,height:24,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:2,strokeLinecap:`round`,strokeLinejoin:`round`},Pn=e=>{for(let t in e)if(t.startsWith(`aria-`)||t===`role`||t===`title`)return!0;return!1},Fn=(0,_.createContext)({}),In=()=>(0,_.useContext)(Fn),Ln=(0,_.forwardRef)(({color:e,size:t,strokeWidth:n,absoluteStrokeWidth:r,className:i=``,children:a,iconNode:o,...s},c)=>{let{size:l=24,strokeWidth:u=2,absoluteStrokeWidth:d=!1,color:f=`currentColor`,className:p=``}=In()??{},m=r??d?Number(n??u)*24/Number(t??l):n??u;return(0,_.createElement)(`svg`,{ref:c,...Nn,width:t??l??Nn.width,height:t??l??Nn.height,stroke:e??f,strokeWidth:m,className:kn(`lucide`,p,i),...!a&&!Pn(s)&&{"aria-hidden":`true`},...s},[...o.map(([e,t])=>(0,_.createElement)(e,t)),...Array.isArray(a)?a:[a]])}),B=(e,t)=>{let n=(0,_.forwardRef)(({className:n,...r},i)=>(0,_.createElement)(Ln,{ref:i,iconNode:t,className:kn(`lucide-${An(Mn(e))}`,`lucide-${e}`,n),...r}));return n.displayName=Mn(e),n},Rn=B(`book-a`,[[`path`,{d:`M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20`,key:`k3hazp`}],[`path`,{d:`m8 13 4-7 4 7`,key:`4rari8`}],[`path`,{d:`M9.1 11h5.7`,key:`1gkovt`}]]),zn=B(`book-marked`,[[`path`,{d:`M10 2v8l3-3 3 3V2`,key:`sqw3rj`}],[`path`,{d:`M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20`,key:`k3hazp`}]]),Bn=B(`book-open`,[[`path`,{d:`M12 5v16`,key:`1f6ucr`}],[`path`,{d:`M20.001 19A2 2 0 0022 17V5a2 2 0 00-1.999-2L16 3.002A5 5 0 0012 5a5 5 0 00-4-2H4a2 2 0 00-2 2v12a2 2 0 001.999 2H8a5 5 0 014 2 5 5 0 014-2z`,key:`1fyvmf`}]]),Vn=B(`brain`,[[`path`,{d:`M12 18V5`,key:`adv99a`}],[`path`,{d:`M15 13a4.17 4.17 0 0 1-3-4 4.17 4.17 0 0 1-3 4`,key:`1e3is1`}],[`path`,{d:`M17.598 6.5A3 3 0 1 0 12 5a3 3 0 1 0-5.598 1.5`,key:`1gqd8o`}],[`path`,{d:`M17.997 5.125a4 4 0 0 1 2.526 5.77`,key:`iwvgf7`}],[`path`,{d:`M18 18a4 4 0 0 0 2-7.464`,key:`efp6ie`}],[`path`,{d:`M19.967 17.483A4 4 0 1 1 12 18a4 4 0 1 1-7.967-.517`,key:`1gq6am`}],[`path`,{d:`M6 18a4 4 0 0 1-2-7.464`,key:`k1g0md`}],[`path`,{d:`M6.003 5.125a4 4 0 0 0-2.526 5.77`,key:`q97ue3`}]]),Hn=B(`check`,[[`path`,{d:`M20 6 9 17l-5-5`,key:`1gmf2c`}]]),Un=B(`circle-play`,[[`path`,{d:`M9 9.003a1 1 0 0 1 1.517-.859l4.997 2.997a1 1 0 0 1 0 1.718l-4.997 2.997A1 1 0 0 1 9 14.996z`,key:`kmsa83`}],[`circle`,{cx:`12`,cy:`12`,r:`10`,key:`1mglay`}]]),Wn=B(`clipboard`,[[`rect`,{width:`8`,height:`4`,x:`8`,y:`2`,rx:`1`,ry:`1`,key:`tgr4d6`}],[`path`,{d:`M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2`,key:`116196`}]]),Gn=B(`cloud-upload`,[[`path`,{d:`M12 13v8`,key:`1l5pq0`}],[`path`,{d:`M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242`,key:`1pljnt`}],[`path`,{d:`m8 17 4-4 4 4`,key:`1quai1`}]]),Kn=B(`file-braces`,[[`path`,{d:`M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z`,key:`1oefj6`}],[`path`,{d:`M14 2v5a1 1 0 0 0 1 1h5`,key:`wfsgrz`}],[`path`,{d:`M10 12a1 1 0 0 0-1 1v1a1 1 0 0 1-1 1 1 1 0 0 1 1 1v1a1 1 0 0 0 1 1`,key:`1oajmo`}],[`path`,{d:`M14 18a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1 1 1 0 0 1-1-1v-1a1 1 0 0 0-1-1`,key:`mpwhp6`}]]),qn=B(`gamepad-2`,[[`line`,{x1:`6`,x2:`10`,y1:`11`,y2:`11`,key:`1gktln`}],[`line`,{x1:`8`,x2:`8`,y1:`9`,y2:`13`,key:`qnk9ow`}],[`line`,{x1:`15`,x2:`15.01`,y1:`12`,y2:`12`,key:`krot7o`}],[`line`,{x1:`18`,x2:`18.01`,y1:`10`,y2:`10`,key:`1lcuu1`}],[`path`,{d:`M17.32 5H6.68a4 4 0 0 0-3.978 3.59c-.006.052-.01.101-.017.152C2.604 9.416 2 14.456 2 16a3 3 0 0 0 3 3c1 0 1.5-.5 2-1l1.414-1.414A2 2 0 0 1 9.828 16h4.344a2 2 0 0 1 1.414.586L17 18c.5.5 1 1 2 1a3 3 0 0 0 3-3c0-1.545-.604-6.584-.685-7.258-.007-.05-.011-.1-.017-.151A4 4 0 0 0 17.32 5z`,key:`mfqc10`}]]),Jn=B(`hash`,[[`line`,{x1:`4`,x2:`20`,y1:`9`,y2:`9`,key:`4lhtct`}],[`line`,{x1:`4`,x2:`20`,y1:`15`,y2:`15`,key:`vyu0kd`}],[`line`,{x1:`10`,x2:`8`,y1:`3`,y2:`21`,key:`1ggp8o`}],[`line`,{x1:`16`,x2:`14`,y1:`3`,y2:`21`,key:`weycgp`}]]),Yn=B(`headphones`,[[`path`,{d:`M3 14h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7a9 9 0 0 1 18 0v7a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3`,key:`1xhozi`}]]),Xn=B(`keyboard`,[[`path`,{d:`M10 8h.01`,key:`1r9ogq`}],[`path`,{d:`M12 12h.01`,key:`1mp3jc`}],[`path`,{d:`M14 8h.01`,key:`1primd`}],[`path`,{d:`M16 12h.01`,key:`1l6xoz`}],[`path`,{d:`M18 8h.01`,key:`emo2bl`}],[`path`,{d:`M6 8h.01`,key:`x9i8wu`}],[`path`,{d:`M7 16h10`,key:`wp8him`}],[`path`,{d:`M8 12h.01`,key:`czm47f`}],[`rect`,{width:`20`,height:`16`,x:`2`,y:`4`,rx:`2`,key:`18n3k1`}]]),Zn=B(`layers`,[[`path`,{d:`M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z`,key:`zw3jo`}],[`path`,{d:`M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12`,key:`1wduqc`}],[`path`,{d:`M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17`,key:`kqbvx6`}]]),Qn=B(`list-ordered`,[[`path`,{d:`M11 5h10`,key:`1cz7ny`}],[`path`,{d:`M11 12h10`,key:`1438ji`}],[`path`,{d:`M11 19h10`,key:`11t30w`}],[`path`,{d:`M4 4h1v5`,key:`10yrso`}],[`path`,{d:`M4 9h2`,key:`r1h2o0`}],[`path`,{d:`M6.5 20H3.4c0-1 2.6-1.925 2.6-3.5a1.5 1.5 0 0 0-2.6-1.02`,key:`xtkcd5`}]]),$n=B(`maximize`,[[`path`,{d:`M8 3H5a2 2 0 0 0-2 2v3`,key:`1dcmit`}],[`path`,{d:`M21 8V5a2 2 0 0 0-2-2h-3`,key:`1e4gt3`}],[`path`,{d:`M3 16v3a2 2 0 0 0 2 2h3`,key:`wsl5sc`}],[`path`,{d:`M16 21h3a2 2 0 0 0 2-2v-3`,key:`18trek`}]]),er=B(`message-square`,[[`path`,{d:`M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z`,key:`18887p`}]]),tr=B(`minimize`,[[`path`,{d:`M8 3v3a2 2 0 0 1-2 2H3`,key:`hohbtr`}],[`path`,{d:`M21 8h-3a2 2 0 0 1-2-2V3`,key:`5jw1f3`}],[`path`,{d:`M3 16h3a2 2 0 0 1 2 2v3`,key:`198tvr`}],[`path`,{d:`M16 21v-3a2 2 0 0 1 2-2h3`,key:`ph8mxp`}]]),nr=B(`network`,[[`rect`,{x:`16`,y:`16`,width:`6`,height:`6`,rx:`1`,key:`4q2zg0`}],[`rect`,{x:`2`,y:`16`,width:`6`,height:`6`,rx:`1`,key:`8cvhb9`}],[`rect`,{x:`9`,y:`2`,width:`6`,height:`6`,rx:`1`,key:`1egb70`}],[`path`,{d:`M5 16v-3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3`,key:`1jsf9p`}],[`path`,{d:`M12 12V8`,key:`2874zd`}]]),rr=B(`pause`,[[`rect`,{x:`14`,y:`3`,width:`5`,height:`18`,rx:`1`,key:`kaeet6`}],[`rect`,{x:`5`,y:`3`,width:`5`,height:`18`,rx:`1`,key:`1wsw3u`}]]),ir=B(`pencil`,[[`path`,{d:`M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z`,key:`1a8usu`}],[`path`,{d:`m15 5 4 4`,key:`1mk7zo`}]]),ar=B(`play`,[[`path`,{d:`M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z`,key:`10ikf1`}]]),or=B(`puzzle`,[[`path`,{d:`M15.39 4.39a1 1 0 0 0 1.68-.474 2.5 2.5 0 1 1 3.014 3.015 1 1 0 0 0-.474 1.68l1.683 1.682a2.414 2.414 0 0 1 0 3.414L19.61 15.39a1 1 0 0 1-1.68-.474 2.5 2.5 0 1 0-3.014 3.015 1 1 0 0 1 .474 1.68l-1.683 1.682a2.414 2.414 0 0 1-3.414 0L8.61 19.61a1 1 0 0 0-1.68.474 2.5 2.5 0 1 1-3.014-3.015 1 1 0 0 0 .474-1.68l-1.683-1.682a2.414 2.414 0 0 1 0-3.414L4.39 8.61a1 1 0 0 1 1.68.474 2.5 2.5 0 1 0 3.014-3.015 1 1 0 0 1-.474-1.68l1.683-1.682a2.414 2.414 0 0 1 3.414 0z`,key:`w46dr5`}]]),sr=B(`refresh-cw`,[[`path`,{d:`M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8`,key:`v9h5vc`}],[`path`,{d:`M21 3v5h-5`,key:`1q7to0`}],[`path`,{d:`M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16`,key:`3uifl3`}],[`path`,{d:`M8 16H3v5`,key:`1cv678`}]]),cr=B(`rotate-ccw`,[[`path`,{d:`M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8`,key:`1357e3`}],[`path`,{d:`M3 3v5h5`,key:`1xhq8a`}]]),lr=B(`scissors`,[[`circle`,{cx:`6`,cy:`6`,r:`3`,key:`1lh9wr`}],[`path`,{d:`M8.12 8.12 12 12`,key:`1alkpv`}],[`path`,{d:`M20 4 8.12 15.88`,key:`xgtan2`}],[`circle`,{cx:`6`,cy:`18`,r:`3`,key:`fqmcym`}],[`path`,{d:`M14.8 14.8 20 20`,key:`ptml3r`}]]),ur=B(`settings`,[[`path`,{d:`M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915`,key:`1i5ecw`}],[`circle`,{cx:`12`,cy:`12`,r:`3`,key:`1v7zrd`}]]),dr=B(`shuffle`,[[`path`,{d:`m18 14 4 4-4 4`,key:`10pe0f`}],[`path`,{d:`m18 2 4 4-4 4`,key:`pucp1d`}],[`path`,{d:`M2 18h1.973a4 4 0 0 0 3.3-1.7l5.454-8.6a4 4 0 0 1 3.3-1.7H22`,key:`1ailkh`}],[`path`,{d:`M2 6h1.972a4 4 0 0 1 3.6 2.2`,key:`km57vx`}],[`path`,{d:`M22 18h-6.041a4 4 0 0 1-3.3-1.8l-.359-.45`,key:`os18l9`}]]),fr=B(`square-check-big`,[[`path`,{d:`M21 10.656V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h12.344`,key:`2acyp4`}],[`path`,{d:`m9 11 3 3L22 4`,key:`1pflzl`}]]),pr=B(`square-terminal`,[[`path`,{d:`m7 11 2-2-2-2`,key:`1lz0vl`}],[`path`,{d:`M11 13h4`,key:`1p7l4v`}],[`rect`,{width:`18`,height:`18`,x:`3`,y:`3`,rx:`2`,ry:`2`,key:`1m3agn`}]]),mr=B(`type`,[[`path`,{d:`M12 4v16`,key:`1654pz`}],[`path`,{d:`M4 7V5a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v2`,key:`e0r10z`}],[`path`,{d:`M9 20h6`,key:`s66wpe`}]]),hr=B(`volume-2`,[[`path`,{d:`M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z`,key:`uqj9uw`}],[`path`,{d:`M16 9a5 5 0 0 1 0 6`,key:`1q6k2b`}],[`path`,{d:`M19.364 18.364a9 9 0 0 0 0-12.728`,key:`ijwkga`}]]),gr=B(`volume-x`,[[`path`,{d:`M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z`,key:`uqj9uw`}],[`line`,{x1:`22`,x2:`16`,y1:`9`,y2:`15`,key:`1ewh16`}],[`line`,{x1:`16`,x2:`22`,y1:`9`,y2:`15`,key:`5ykzw1`}]]),_r=B(`x`,[[`path`,{d:`M18 6 6 18`,key:`1bl5f8`}],[`path`,{d:`m6 6 12 12`,key:`d8bk6v`}]]),vr=B(`zap`,[[`path`,{d:`M15.914 4a1.5 1.5 0 00-2.474-1.561l-9 9A1.5 1.5 0 005.5 14h4.002a.5.5 0 01.471.666L8.086 20a1.5 1.5 0 002.475 1.56l9-9A1.5 1.5 0 0018.5 10h-3.997a.5.5 0 01-.472-.667z`,key:`1v7up4`}]]),yr=o((e=>{var t=Symbol.for(`react.transitional.element`),n=Symbol.for(`react.fragment`);function r(e,n,r){var i=null;if(r!==void 0&&(i=``+r),n.key!==void 0&&(i=``+n.key),`key`in n)for(var a in r={},n)a!==`key`&&(r[a]=n[a]);else r=n;return n=r.ref,{$$typeof:t,type:e,key:i,ref:n===void 0?null:n,props:r}}e.Fragment=n,e.jsx=r,e.jsxs=r})),V=o(((e,t)=>{t.exports=yr()}))(),br=[{id:1,word:`hazardous material`,pronunciation:`/ˈhæzərdəs məˈtɪriəl/`,pos:`Noun`,meaning:`危険物`,wrong:`安全物質`,context:`A license is required to handle hazardous materials.`,context_translation:`危険物を取り扱うには免状が必要です。`,source:`法令`},{id:2,word:`Fire Service Act`,pronunciation:`/faɪər ˈsɜːrvɪs ækt/`,pos:`Noun`,meaning:`消防法`,wrong:`建築基準法`,context:`The storage of hazardous materials is regulated by the Fire Service Act.`,context_translation:`危険物の貯蔵は消防法によって規制されています。`,source:`法令`},{id:3,word:`prescriptive`,pronunciation:`/prɪˈskrɪptɪv/`,pos:`Adjective`,meaning:`規範的な、指示する`,wrong:`自由放任の`,context:`The manual offers prescriptive rules for grammar and punctuation.`,source:`Chicago Manual of Style`},{id:4,word:`authoritative`,pronunciation:`/əˈθɔːrɪteɪtɪv/`,pos:`Adjective`,meaning:`権威ある、信頼できる`,wrong:`疑わしい`,context:`CMOS is considered an authoritative source for American English.`,source:`Chicago Manual of Style`},{id:5,word:`plagiarism`,pronunciation:`/ˈpleɪdʒərɪzəm/`,pos:`Noun`,meaning:`盗作、剽窃`,wrong:`独創`,context:`Strict citation guidelines help prevent plagiarism.`,source:`Chicago Manual of Style`},{id:6,word:`bibliography`,pronunciation:`/ˌbɪbliˈɒɡrəfi/`,pos:`Noun`,meaning:`参考文献目録`,wrong:`索引`,context:`The bibliography lists all sources consulted by the author.`,source:`Chicago Manual of Style`},{id:7,word:`manuscript`,pronunciation:`/ˈmænjʊskrɪpt/`,pos:`Noun`,meaning:`原稿`,wrong:`既刊本`,context:`Authors submit their manuscripts to the publisher for review.`,source:`Chicago Manual of Style`}],xr=({onReset:e,onExitFS:t,onEnterFS:n})=>(0,V.jsxs)(`div`,{className:`flex gap-3 text-[#8c8c8c]`,children:[(0,V.jsx)(`button`,{onClick:e,className:`hover:text-white transition-colors`,title:`Reset App`,children:(0,V.jsx)(cr,{size:16})}),(0,V.jsx)(`button`,{onClick:t,className:`hover:text-white transition-colors`,title:`Exit Fullscreen`,children:(0,V.jsx)(tr,{size:16})}),(0,V.jsx)(`button`,{onClick:n,className:`hover:text-white transition-colors`,title:`Enter Fullscreen`,children:(0,V.jsx)($n,{size:16})})]}),Sr=({children:e,title:t=`English_Word`,className:n=``,onReset:r,onExitFS:i,onEnterFS:a})=>(0,V.jsxs)(`div`,{className:`w-full mx-auto flex flex-col bg-[#262421] overflow-hidden ${n}`,children:[(0,V.jsxs)(`div`,{className:`h-12 bg-[#1b1a19] border-b border-[#383634] flex items-center justify-between px-4 shrink-0`,children:[(0,V.jsxs)(`div`,{className:`font-bold text-[#dbd9d6] flex items-center gap-2`,children:[(0,V.jsx)(Bn,{size:18,className:`text-[#8c8c8c]`}),t]}),(0,V.jsx)(xr,{onReset:r,onExitFS:i,onEnterFS:a})]}),(0,V.jsx)(`div`,{className:`flex-1 flex flex-col relative bg-[#262421] overflow-hidden`,children:e})]}),Cr=({children:e,title:t,className:n,onReset:r})=>(0,V.jsx)(Sr,{title:t,className:n,onReset:r,onEnterFS:()=>{let e=document.documentElement;e.requestFullscreen&&e.requestFullscreen().catch(e=>console.log(e))},onExitFS:()=>{document.exitFullscreen&&document.fullscreenElement&&document.exitFullscreen().catch(e=>console.log(e))},children:e}),wr=({onClick:e,children:t,variant:n=`primary`,className:r=``,disabled:i=!1,icon:a,...o})=>(0,V.jsxs)(`button`,{onClick:e,disabled:i,className:`px-4 py-2 text-sm font-bold uppercase tracking-wide transition-colors flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed rounded-sm select-none ${{primary:`bg-[#629924] text-white hover:bg-[#72a332] shadow-[0_2px_0_rgba(0,0,0,0.2)] active:translate-y-[2px] active:shadow-none`,secondary:`bg-[#383634] text-[#dbd9d6] hover:bg-[#454341] shadow-[0_2px_0_rgba(0,0,0,0.2)] active:translate-y-[2px] active:shadow-none`,blue:`bg-[#1b78d0] text-white hover:bg-[#2084e6] shadow-[0_2px_0_rgba(0,0,0,0.2)] active:translate-y-[2px] active:shadow-none`,danger:`bg-[#cc3333] text-white hover:bg-[#d64040] shadow-[0_2px_0_rgba(0,0,0,0.2)] active:translate-y-[2px] active:shadow-none`,ghost:`bg-transparent text-[#8c8c8c] hover:bg-[#383634] hover:text-[#dbd9d6]`}[n]} ${r}`,...o,children:[a&&(0,V.jsx)(a,{size:16}),t]});function Tr(){let[e,t]=(0,_.useState)(`start`),[n,r]=(0,_.useState)(`quiz`),[i,a]=(0,_.useState)(br),[o,s]=(0,_.useState)([]),[c,l]=(0,_.useState)(0),[u,d]=(0,_.useState)(0),[f,p]=(0,_.useState)(!1),[m,h]=(0,_.useState)(!1),[g,v]=(0,_.useState)([]),[y,b]=(0,_.useState)([]),[x,S]=(0,_.useState)(`all`),[C,w]=(0,_.useState)(!1),[T,ee]=(0,_.useState)(``),[te,E]=(0,_.useState)(!1),[D,O]=(0,_.useState)(!0),[k,ne]=(0,_.useState)(!1),[A,re]=(0,_.useState)(!1),[j,M]=(0,_.useState)(1),[N,ie]=(0,_.useState)(JSON.stringify(br,null,2)),[ae,oe]=(0,_.useState)(null),P=(0,_.useRef)(null),F=(0,_.useRef)(D),I=(0,_.useRef)(null);(0,_.useEffect)(()=>{F.current=D},[D]),(0,_.useEffect)(()=>{window.speechSynthesis&&(window.speechSynthesis.onvoiceschanged=()=>{},window.speechSynthesis.getVoices());let e=new Audio(`data:audio/wav;base64,UklGRigAAABXQVZFZm10IBIAAAABAAEARKwAAIhYAQACABAAAABkYXRhAgAAAAEA`);return e.loop=!0,I.current=e,()=>{e.pause()}},[]),(0,_.useEffect)(()=>{e!==`playing`&&I.current&&I.current.pause()},[e]);let L=o[c],se=e=>{if(!window.speechSynthesis)return null;let t=window.speechSynthesis.getVoices();return e.startsWith(`en`)?t.find(e=>e.name===`Google US English`)||t.find(e=>e.name===`Samantha`)||t.find(e=>e.lang===`en-US`||e.lang===`en-GB`)||null:e.startsWith(`ja`)?t.find(e=>e.name===`Google 日本語`)||t.find(e=>e.name===`Kyoko`)||t.find(e=>e.lang===`ja-JP`)||null:t.find(t=>t.lang===e)||null},ce=async(e,t,n=.9)=>new Promise(r=>{if(!window.speechSynthesis||j<=0)return r();let i=new SpeechSynthesisUtterance(e);i.lang=t,i.rate=n,i.volume=j;let a=se(t);a&&(i.voice=a);let o=!1,s=()=>{o||(o=!0,clearTimeout(c),clearInterval(l),r())},c=setTimeout(s,Math.max(4e3,e.length*200)),l=setInterval(()=>{window.speechSynthesis.speaking&&(window.speechSynthesis.pause(),window.speechSynthesis.resume())},5e3);i.onend=s,i.onerror=e=>{console.warn(`SpeechSynthesis Error:`,e),s()},window.speechSynthesis.speak(i),window.speechSynthesis.paused&&window.speechSynthesis.resume()}),R=async(e,t)=>{if(!(!window.speechSynthesis||j<=0)){E(!0),window.speechSynthesis.cancel();try{(t===`full`||t===`word`)&&await ce(e.word,`en-US`,.85),(t===`full`||t===`meaning_context`)&&(t===`full`&&await new Promise(e=>setTimeout(e,600)),await ce(e.meaning,`ja-JP`,1),e.context&&(await new Promise(e=>setTimeout(e,800)),await ce(e.context,`en-US`,.9)))}finally{E(!1)}}};(0,_.useEffect)(()=>{if(L&&e===`playing`){let e=[{text:L.meaning,isCorrect:!0},{text:L.wrong,isCorrect:!1}];v(e.sort(()=>Math.random()-.5))}},[L,e]),(0,_.useEffect)(()=>{let t=!0;return(async()=>{!L||e!==`playing`||(n===`reading`?D&&(await R(L,`full`),t&&F.current&&(await new Promise(e=>setTimeout(e,1200)),t&&F.current&&le())):n===`quiz`&&!f&&k&&await R(L,`word`))})(),()=>{t=!1,window.speechSynthesis.cancel(),E(!1)}},[L,c,e,n,D,f,k]),(0,_.useEffect)(()=>{`mediaSession`in navigator&&L&&e===`playing`&&(navigator.mediaSession.metadata=new MediaMetadata({title:L.word,artist:L.meaning,album:`English_Word`}),navigator.mediaSession.setActionHandler(`play`,()=>{O(!0),I.current&&I.current.paused&&I.current.play().catch(()=>{})}),navigator.mediaSession.setActionHandler(`pause`,()=>{O(!1)}),navigator.mediaSession.setActionHandler(`nexttrack`,()=>{le()}),navigator.mediaSession.setActionHandler(`previoustrack`,()=>{c>0&&(window.speechSynthesis.cancel(),p(!1),l(e=>e-1))}))},[L,e,c]);let le=()=>{p(!1),window.speechSynthesis.cancel(),E(!1),document.activeElement instanceof HTMLElement&&document.activeElement.blur(),c<o.length-1?l(e=>e+1):t(`result`)},ue=()=>{L&&(n===`quiz`&&!f?R(L,`word`):R(L,`full`))},de=e=>{r(e),O(!0),b([]),I.current&&I.current.play().catch(e=>console.warn(`MediaSession dummy audio requires interaction`,e));let n=[...i];if(C)n.sort(()=>Math.random()-.5);else{n.sort((e,t)=>e.id-t.id);let e=parseInt(T,10),t=isNaN(e)?1:e,r=n.findIndex(e=>e.id>=t);r===-1&&(r=0),n=n.slice(r)}let a=n.length;x===`50`?a=Math.min(50,n.length):x===`100`&&(a=Math.min(100,n.length)),s(n.slice(0,a)),d(0),l(0),p(!1),t(`playing`)},fe=()=>{s([...y]),d(0),l(0),p(!1),b([]),O(!0),t(`playing`)},pe=e=>{if(window.speechSynthesis.cancel(),E(!1),h(e),e){if(d(e=>e+1),A){le();return}}else b(e=>e.find(e=>e.id===L.id)?e:[...e,L]);p(!0)},me=()=>{window.speechSynthesis.cancel(),E(!1),t(`start`)},he=async()=>{try{let e=await navigator.clipboard.readText();ie(e),oe(null)}catch{oe(`Clipboard access denied. Please paste manually.`)}},ge=e=>{let t=e.target.files?.[0];if(!t)return;let n=new FileReader;n.onload=e=>{let t=e.target?.result;try{JSON.parse(t),ie(t),oe(null)}catch(e){oe(`Invalid JSON file: `+e.message)}},n.readAsText(t),e.target.value=``},_e=()=>{P.current?.click()},ve=()=>{try{let e=JSON.parse(N);if(!Array.isArray(e))throw Error(`Format Error: Data must be a JSON Array [...]`);if(e.length===0)throw Error(`Data Error: The array is empty.`);if(!e[0].word||!e[0].meaning||!e[0].pos)throw Error(`Structure Error: Missing 'word', 'meaning', or 'pos' fields.`);a(e),oe(null),t(`start`)}catch(e){oe(e.message)}},ye=()=>{me()};return e===`start`?(0,V.jsx)(`div`,{className:`h-screen flex bg-[#161512]`,children:(0,V.jsx)(Cr,{className:`w-full h-screen flex flex-col`,onReset:ye,children:(0,V.jsxs)(`div`,{className:`flex-1 flex flex-col items-center py-6 px-4 sm:justify-center sm:p-8 space-y-6 sm:space-y-8 overflow-y-auto w-full`,children:[(0,V.jsxs)(`div`,{className:`text-center space-y-2 shrink-0`,children:[(0,V.jsx)(`h1`,{className:`text-3xl sm:text-4xl font-bold tracking-wider text-[#dbd9d6]`,children:`ENGLISH WORD`}),(0,V.jsxs)(`p`,{className:`text-[#8c8c8c] text-sm`,children:[i.length,` words loaded in database`]})]}),(0,V.jsxs)(`div`,{className:`w-full max-w-sm space-y-6 pt-2 pb-6 shrink-0`,children:[(0,V.jsxs)(`div`,{className:`space-y-4 bg-[#1b1a19] p-4 rounded-sm border border-[#383634]`,children:[(0,V.jsxs)(`div`,{className:`space-y-2`,children:[(0,V.jsxs)(`div`,{className:`flex items-center gap-2 text-xs font-bold text-[#8c8c8c] uppercase`,children:[(0,V.jsx)(Jn,{size:14}),` Questions`]}),(0,V.jsx)(`div`,{className:`flex gap-1 bg-[#262421] p-1 rounded-sm border border-[#383634]`,children:[`50`,`100`,`all`].map(e=>(0,V.jsx)(`button`,{onClick:()=>S(e),className:`flex-1 py-1.5 text-xs font-bold uppercase rounded-sm transition-colors ${x===e?`bg-[#383634] text-white shadow-sm`:`text-[#8c8c8c] hover:text-[#dbd9d6]`}`,children:e},e))})]}),(0,V.jsxs)(`div`,{className:`space-y-2`,children:[(0,V.jsx)(`div`,{className:`flex items-center justify-between text-xs font-bold text-[#8c8c8c] uppercase`,children:(0,V.jsxs)(`div`,{className:`flex items-center gap-2`,children:[(0,V.jsx)(Qn,{size:14}),` Order`]})}),(0,V.jsxs)(`div`,{className:`flex gap-1 bg-[#262421] p-1 rounded-sm border border-[#383634]`,children:[(0,V.jsxs)(`button`,{onClick:()=>w(!1),className:`flex-1 py-1.5 text-xs font-bold uppercase rounded-sm flex items-center justify-center gap-2 transition-colors ${C?`text-[#8c8c8c] hover:text-[#dbd9d6]`:`bg-[#383634] text-white shadow-sm`}`,children:[(0,V.jsx)(Qn,{size:14}),` ID Order`]}),(0,V.jsxs)(`button`,{onClick:()=>w(!0),className:`flex-1 py-1.5 text-xs font-bold uppercase rounded-sm flex items-center justify-center gap-2 transition-colors ${C?`bg-[#383634] text-white shadow-sm`:`text-[#8c8c8c] hover:text-[#dbd9d6]`}`,children:[(0,V.jsx)(dr,{size:14}),` Random`]})]}),!C&&(0,V.jsxs)(`div`,{className:`flex items-center gap-2 mt-2 pt-2 border-t border-[#262421]`,children:[(0,V.jsxs)(`span`,{className:`text-xs font-bold text-[#8c8c8c] uppercase flex items-center gap-1`,children:[(0,V.jsx)(Un,{size:14}),` Start At:`]}),(0,V.jsx)(`input`,{type:`text`,inputMode:`numeric`,pattern:`\\d*`,maxLength:4,value:T,onChange:e=>{let t=e.target.value;t===``?ee(``):/^\d{1,4}$/.test(t)&&ee(t)},placeholder:`1`,className:`bg-[#262421] border border-[#383634] text-[#dbd9d6] text-xs px-2 py-1.5 rounded-sm w-20 text-center focus:outline-none focus:border-[#8c8c8c] placeholder:text-[#8c8c8c] placeholder:opacity-50 transition-colors`})]})]}),(0,V.jsxs)(`div`,{className:`space-y-2`,children:[(0,V.jsxs)(`div`,{className:`flex items-center gap-2 text-xs font-bold text-[#8c8c8c] uppercase`,children:[k?(0,V.jsx)(hr,{size:14}):(0,V.jsx)(gr,{size:14}),` Quiz Auto Audio`]}),(0,V.jsxs)(`div`,{className:`flex gap-1 bg-[#262421] p-1 rounded-sm border border-[#383634]`,children:[(0,V.jsx)(`button`,{onClick:()=>ne(!1),className:`flex-1 py-1.5 text-xs font-bold uppercase rounded-sm transition-colors ${k?`text-[#8c8c8c] hover:text-[#dbd9d6]`:`bg-[#383634] text-white shadow-sm`}`,children:`OFF`}),(0,V.jsx)(`button`,{onClick:()=>ne(!0),className:`flex-1 py-1.5 text-xs font-bold uppercase rounded-sm transition-colors ${k?`bg-[#383634] text-white shadow-sm`:`text-[#8c8c8c] hover:text-[#dbd9d6]`}`,children:`ON`})]})]}),(0,V.jsxs)(`div`,{className:`space-y-2`,children:[(0,V.jsxs)(`div`,{className:`flex items-center gap-2 text-xs font-bold text-[#8c8c8c] uppercase`,children:[(0,V.jsx)(vr,{size:14}),` Speedrun Mode`]}),(0,V.jsxs)(`div`,{className:`flex gap-1 bg-[#262421] p-1 rounded-sm border border-[#383634]`,children:[(0,V.jsx)(`button`,{onClick:()=>re(!1),className:`flex-1 py-1.5 text-xs font-bold uppercase rounded-sm transition-colors ${A?`text-[#8c8c8c] hover:text-[#dbd9d6]`:`bg-[#383634] text-white shadow-sm`}`,children:`OFF`}),(0,V.jsx)(`button`,{onClick:()=>re(!0),className:`flex-1 py-1.5 text-xs font-bold uppercase rounded-sm transition-colors ${A?`bg-[#383634] text-white shadow-sm`:`text-[#8c8c8c] hover:text-[#dbd9d6]`}`,children:`ON`})]})]}),(0,V.jsxs)(`div`,{className:`space-y-2 pt-2 border-t border-[#262421]`,children:[(0,V.jsxs)(`div`,{className:`flex items-center justify-between text-xs font-bold text-[#8c8c8c] uppercase`,children:[(0,V.jsxs)(`div`,{className:`flex items-center gap-2`,children:[j>0?(0,V.jsx)(hr,{size:14}):(0,V.jsx)(gr,{size:14}),` Master Volume`]}),(0,V.jsxs)(`span`,{children:[Math.round(j*100),`%`]})]}),(0,V.jsx)(`div`,{className:`pt-2`,children:(0,V.jsx)(`input`,{type:`range`,min:`0`,max:`1`,step:`0.1`,value:j,onChange:e=>M(parseFloat(e.target.value)),className:`w-full`})})]})]}),(0,V.jsxs)(`div`,{className:`space-y-3`,children:[(0,V.jsxs)(`div`,{className:`grid grid-cols-2 gap-3`,children:[(0,V.jsx)(wr,{onClick:()=>de(`quiz`),className:`w-full py-4 text-sm sm:text-base`,icon:qn,children:`Quiz`}),(0,V.jsx)(wr,{onClick:()=>de(`reading`),variant:`blue`,className:`w-full py-4 text-sm sm:text-base`,icon:Yn,children:`Reading`})]}),(0,V.jsx)(wr,{variant:`secondary`,onClick:()=>t(`editor`),className:`w-full py-3`,icon:ur,children:`Import JSON`})]})]})]})})}):e===`editor`?(0,V.jsx)(`div`,{className:`h-screen flex bg-[#161512]`,children:(0,V.jsx)(Cr,{title:`Import Data`,className:`w-full h-screen flex flex-col`,onReset:ye,children:(0,V.jsxs)(`div`,{className:`flex flex-col h-full`,children:[(0,V.jsx)(`input`,{type:`file`,accept:`.json`,ref:P,onChange:ge,className:`hidden`}),(0,V.jsxs)(`div`,{className:`bg-[#1b1a19] border-b border-[#383634] p-2 flex justify-between items-center shrink-0`,children:[(0,V.jsxs)(`div`,{className:`flex gap-1 sm:gap-2`,children:[(0,V.jsx)(wr,{variant:`ghost`,onClick:_e,className:`h-8 text-xs px-2 sm:px-4`,icon:Gn,children:(0,V.jsx)(`span`,{className:`hidden sm:inline`,children:`Load File`})}),(0,V.jsx)(wr,{variant:`ghost`,onClick:he,className:`h-8 text-xs px-2 sm:px-4`,icon:Wn,children:(0,V.jsx)(`span`,{className:`hidden sm:inline`,children:`Paste`})})]}),(0,V.jsxs)(`div`,{className:`flex gap-2`,children:[(0,V.jsx)(wr,{variant:`ghost`,onClick:me,className:`h-8 text-xs px-2 sm:px-4`,children:`Cancel`}),(0,V.jsx)(wr,{onClick:ve,icon:Hn,className:`h-8 text-xs px-2 sm:px-4 shrink-0`,children:`Save`})]})]}),(0,V.jsx)(`div`,{className:`flex-1 relative`,children:(0,V.jsx)(`textarea`,{className:`w-full h-full p-4 font-mono text-sm bg-[#161512] text-[#85A94E] resize-none focus:outline-none placeholder:text-[#383634]`,value:N,onChange:e=>ie(e.target.value),spellCheck:!1,placeholder:`Paste JSON...`})}),(0,V.jsx)(`div`,{className:`bg-[#1b1a19] p-3 sm:p-4 border-t border-[#383634] flex justify-center items-center shrink-0`,children:(0,V.jsx)(`div`,{className:`flex-1`,children:ae?(0,V.jsxs)(`span`,{className:`text-[#cc3333] text-xs sm:text-sm font-bold flex items-center gap-2`,children:[(0,V.jsx)(_r,{size:16,className:`shrink-0`}),` `,(0,V.jsx)(`span`,{className:`truncate`,children:ae})]}):(0,V.jsxs)(`span`,{className:`text-[#8c8c8c] text-xs sm:text-sm font-bold flex items-center gap-2`,children:[(0,V.jsx)(Kn,{size:16,className:`shrink-0`}),` JSON Valid`]})})})]})})}):e===`result`?(0,V.jsx)(`div`,{className:`h-screen flex bg-[#161512]`,children:(0,V.jsx)(Cr,{title:`Session Complete`,className:`w-full h-screen flex flex-col`,onReset:ye,children:(0,V.jsxs)(`div`,{className:`flex-1 flex flex-col items-center justify-center p-4 sm:p-8 space-y-8 text-center overflow-y-auto`,children:[n===`quiz`?(0,V.jsxs)(V.Fragment,{children:[(0,V.jsxs)(`div`,{className:`space-y-2`,children:[(0,V.jsx)(`h2`,{className:`text-xl sm:text-2xl font-bold text-[#8c8c8c] uppercase tracking-widest`,children:`Accuracy`}),(0,V.jsxs)(`div`,{className:`text-5xl sm:text-6xl font-bold text-[#dbd9d6]`,children:[Math.round(u/o.length*100),`%`]})]}),(0,V.jsx)(`div`,{className:`bg-[#1b1a19] border border-[#383634] px-6 sm:px-8 py-4 rounded-sm w-full max-w-sm`,children:(0,V.jsxs)(`p`,{className:`text-base sm:text-lg text-[#dbd9d6]`,children:[(0,V.jsx)(`span`,{className:`text-[#629924] font-bold`,children:u}),` correct out of `,(0,V.jsx)(`span`,{className:`font-bold`,children:o.length})]})})]}):(0,V.jsxs)(V.Fragment,{children:[(0,V.jsxs)(`div`,{className:`space-y-2`,children:[(0,V.jsx)(`h2`,{className:`text-xl sm:text-2xl font-bold text-[#8c8c8c] uppercase tracking-widest`,children:`Words Read`}),(0,V.jsx)(`div`,{className:`text-5xl sm:text-6xl font-bold text-[#dbd9d6]`,children:o.length})]}),(0,V.jsx)(`div`,{className:`bg-[#1b1a19] border border-[#383634] px-6 sm:px-8 py-4 rounded-sm w-full max-w-sm`,children:(0,V.jsx)(`p`,{className:`text-base sm:text-lg text-[#dbd9d6]`,children:`Reading session completed.`})})]}),(0,V.jsxs)(`div`,{className:`pt-4 sm:pt-8 w-full max-w-xs space-y-3`,children:[n===`quiz`&&y.length>0&&(0,V.jsxs)(wr,{onClick:fe,variant:`blue`,className:`w-full py-4`,icon:cr,children:[`Review Mistakes (`,y.length,`)`]}),(0,V.jsx)(wr,{onClick:me,className:`w-full py-4`,icon:sr,children:`Return to Start`})]})]})})}):(0,V.jsx)(`div`,{className:`h-screen flex bg-[#161512]`,children:(0,V.jsxs)(Cr,{title:`${n===`quiz`?`Quiz`:`Reading`} : ${c+1} / ${o.length}`,className:`w-full h-screen flex flex-col`,onReset:ye,children:[(0,V.jsx)(`div`,{className:`h-1 w-full bg-[#1b1a19] shrink-0`,children:(0,V.jsx)(`div`,{className:`h-full transition-all duration-300 ${n===`reading`?`bg-[#1b78d0]`:`bg-[#629924]`}`,style:{width:`${c/o.length*100}%`}})}),(0,V.jsxs)(`div`,{className:`flex-1 flex flex-col overflow-hidden`,children:[(0,V.jsxs)(`div`,{className:`flex-1 flex flex-col items-center justify-center p-4 sm:p-8 relative overflow-y-auto`,children:[(0,V.jsxs)(`div`,{className:`absolute top-2 right-4 sm:top-4 sm:right-6 text-[10px] sm:text-xs font-bold text-[#8c8c8c] uppercase flex flex-col items-end gap-1`,children:[(0,V.jsxs)(`span`,{children:[`ID: `,L.id]}),(0,V.jsx)(`span`,{className:`hidden sm:inline`,children:L.source})]}),(0,V.jsxs)(`div`,{className:`mb-4 flex items-center gap-3 mt-4 sm:mt-0`,children:[(0,V.jsx)(`div`,{className:`px-3 py-1 bg-[#1b1a19] border border-[#383634] rounded-sm text-[#8c8c8c] text-xs font-bold uppercase tracking-widest`,children:L.pos}),(0,V.jsx)(`button`,{onClick:e=>{e.currentTarget.blur(),ue()},disabled:te,className:`p-1.5 text-[#8c8c8c] hover:text-[#dbd9d6] hover:bg-[#383634] rounded-sm transition-colors disabled:opacity-50 focus:outline-none`,title:`Play Audio`,children:j>0?(0,V.jsx)(hr,{size:18}):(0,V.jsx)(gr,{size:18})})]}),(0,V.jsx)(`h2`,{className:`text-3xl sm:text-4xl md:text-6xl font-bold text-white tracking-tight text-center break-words max-w-full`,children:L.word}),L.pronunciation&&(0,V.jsx)(`div`,{className:`mt-2 text-lg sm:text-xl md:text-2xl text-[#8c8c8c] font-ipa tracking-wide`,children:L.pronunciation})]}),(0,V.jsx)(`div`,{className:`h-1/2 sm:h-auto sm:min-h-[20rem] bg-[#1b1a19] border-t border-[#383634] relative flex flex-col overflow-y-auto shrink-0`,children:n===`reading`?(0,V.jsxs)(`div`,{className:`flex-1 flex flex-col p-4 sm:p-6 h-full min-h-[14rem] sm:min-h-[16rem]`,children:[(0,V.jsxs)(`div`,{className:`flex-1 flex flex-col justify-center items-center text-center space-y-4`,children:[(0,V.jsxs)(`div`,{className:`text-xl sm:text-2xl`,children:[(0,V.jsx)(`span`,{className:`text-[#8c8c8c] text-base sm:text-lg`,children:`Meaning: `}),(0,V.jsx)(`span`,{className:`text-white font-bold`,children:L.meaning})]}),L.context&&(0,V.jsxs)(`div`,{className:`text-[#dbd9d6] italic text-sm sm:text-base max-w-lg mt-2 sm:mt-4 px-4 border-l-4 border-[#383634] text-left`,children:[(0,V.jsx)(`div`,{children:L.context}),L.context_translation&&(0,V.jsx)(`div`,{className:`text-xs sm:text-sm text-[#8c8c8c] not-italic mt-1`,children:L.context_translation})]})]}),(0,V.jsxs)(`div`,{className:`mt-4 sm:mt-8 flex gap-3 pb-2 shrink-0`,children:[(0,V.jsxs)(wr,{onClick:e=>{e.currentTarget.blur(),O(!D)},variant:D?`secondary`:`blue`,className:`flex-1 py-3 sm:py-4 text-sm sm:text-lg shrink-0`,icon:D?rr:ar,children:[(0,V.jsx)(`span`,{className:`hidden sm:inline`,children:D?`Pause Auto-play`:`Resume Auto-play`}),(0,V.jsx)(`span`,{className:`sm:hidden`,children:D?`Pause`:`Resume`})]}),!D&&(0,V.jsx)(wr,{onClick:e=>{e.currentTarget.blur(),le()},variant:`secondary`,className:`flex-1 py-3 sm:py-4 text-sm sm:text-lg shrink-0`,children:`Next`})]})]}):(0,V.jsx)(V.Fragment,{children:f?(0,V.jsxs)(`div`,{className:`flex-1 flex flex-col p-4 sm:p-6 h-full min-h-[14rem] sm:min-h-[16rem]`,children:[(0,V.jsxs)(`div`,{className:`flex-1 flex flex-col justify-center items-center text-center space-y-4`,children:[(0,V.jsxs)(`div`,{className:`text-xl sm:text-2xl font-bold flex items-center gap-2 ${m?`text-[#629924]`:`text-[#cc3333]`}`,children:[m?(0,V.jsx)(Hn,{size:28,className:`sm:w-8 sm:h-8`}):(0,V.jsx)(_r,{size:28,className:`sm:w-8 sm:h-8`}),m?`Correct`:`Inaccuracy`]}),(0,V.jsxs)(`div`,{className:`text-lg sm:text-xl`,children:[(0,V.jsx)(`span`,{className:`text-[#8c8c8c]`,children:`Meaning: `}),(0,V.jsx)(`span`,{className:`text-white font-bold`,children:L.meaning})]}),L.context&&(0,V.jsxs)(`div`,{className:`text-[#dbd9d6] italic text-sm sm:text-base max-w-lg mt-2 sm:mt-4 px-4 border-l-4 border-[#383634] text-left`,children:[(0,V.jsx)(`div`,{children:L.context}),L.context_translation&&(0,V.jsx)(`div`,{className:`text-xs sm:text-sm text-[#8c8c8c] not-italic mt-1`,children:L.context_translation})]})]}),(0,V.jsx)(`div`,{className:`mt-4 sm:mt-8 pb-2 shrink-0`,children:(0,V.jsx)(wr,{onClick:e=>{e.currentTarget.blur(),le()},className:`w-full py-3 sm:py-4 text-base sm:text-lg shrink-0`,children:`Next`})})]}):(0,V.jsx)(`div`,{className:`grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 p-4 sm:p-6 h-full min-h-[14rem] sm:min-h-[16rem]`,children:g.map((e,t)=>(0,V.jsx)(`button`,{onClick:t=>{t.currentTarget.blur(),pe(e.isCorrect)},className:`bg-[#262421] border border-[#383634] hover:bg-[#383634] hover:border-[#8c8c8c] focus:outline-none text-lg sm:text-xl font-bold text-[#dbd9d6] rounded-sm transition-colors active:bg-[#454341] flex items-center justify-center p-3 sm:p-4`,children:e.text},t))})})})]})]})})}var Er=[{id:1,pattern:`SVO (O=名詞節)`,japanese:`私は彼が正しいと思う。`,words:[`I`,`think`,`that`,`he`,`is`,`right`],overallExplanation:`接続詞thatが導く節全体が、動詞thinkの目的語(O)となる構造です。`,structure:[{text:`I`,role:`S`,detail:`代名詞 (Pronoun)`,explanation:`主語です。`},{text:`think`,role:`V`,detail:`他動詞 (Transitive Verb)`,explanation:`述語動詞です。`},{text:`that he is right`,role:`O`,detail:`名詞節 (Noun Clause)`,explanation:`名詞節として目的語になっています。`}]}];function Dr(e){let t=[...e];for(let e=t.length-1;e>0;e--){let n=Math.floor(Math.random()*(e+1));[t[e],t[n]]=[t[n],t[e]]}return t}var Or=e=>{switch(e){case`S`:case`Real-S`:return`bg-lichess-roleS text-white border-lichess-roleS`;case`V`:return`bg-lichess-roleV text-white border-lichess-roleV`;case`O`:return`bg-lichess-roleO text-white border-lichess-roleO`;case`C`:return`bg-lichess-roleC text-white border-lichess-roleC`;case`M`:return`bg-lichess-roleM text-white border-lichess-roleM`;default:return`bg-gray-500 text-white border-gray-500`}},kr=e=>{switch(e){case`S`:case`Real-S`:return`border-lichess-roleS`;case`V`:return`border-lichess-roleV`;case`O`:return`border-lichess-roleO`;case`C`:return`border-lichess-roleC`;case`M`:return`border-lichess-roleM`;default:return`border-gray-500`}},Ar=e=>{switch(e){case`S`:return`Subject (主語)`;case`Real-S`:return`Real Subject (真主語)`;case`V`:return`Verb (動詞)`;case`O`:return`Object (目的語)`;case`C`:return`Complement (補語)`;case`M`:return`Modifier (修飾語)`;default:return``}},jr=(e,t,n)=>new Promise(r=>{if(!(`speechSynthesis`in window)){r();return}let i=e.replace(/\s+([.,!?])/g,`$1`),a=new SpeechSynthesisUtterance(i);a.lang=t,a.rate=n;let o=!1,s=()=>{o||(o=!0,clearInterval(c),clearTimeout(d),r())};a.onend=s,a.onerror=s;let c=setInterval(()=>{window.speechSynthesis.speaking&&(window.speechSynthesis.pause(),window.speechSynthesis.resume())},5e3),l=i.split(/\s+/).length,u=Math.max(3e3,l/2.5*1e3/n+2e3),d=setTimeout(s,u);window.speechSynthesis.speak(a)});function Mr(){let[e,t]=(0,_.useState)(Er),[n,r]=(0,_.useState)(`home`),[i,a]=(0,_.useState)(`random`),[o,s]=(0,_.useState)(`1`),[c,l]=(0,_.useState)(!1),[u,d]=(0,_.useState)(!1),[f,p]=(0,_.useState)({enabled:!1,englishRepeat:1,listenOnly:!1}),[m,h]=(0,_.useState)(!1),[g,v]=(0,_.useState)([]),[y,b]=(0,_.useState)(0),[x,S]=(0,_.useState)([]),[C,w]=(0,_.useState)([]),[T,ee]=(0,_.useState)(`playing`),[te,E]=(0,_.useState)(null),[D,O]=(0,_.useState)({isOpen:!1,type:`alert`,message:``,onConfirm:()=>{}}),k=(0,_.useRef)(null),ne=e=>{O({isOpen:!0,type:`alert`,message:e,onConfirm:()=>O(e=>({...e,isOpen:!1}))})},A=(e,t)=>{O({isOpen:!0,type:`confirm`,message:e,onConfirm:()=>{t(),O(e=>({...e,isOpen:!1}))}})},re=()=>{if(e.length===0){ne(`No puzzles loaded!`);return}if(`speechSynthesis`in window){let e=new SpeechSynthesisUtterance(``);e.volume=0,window.speechSynthesis.speak(e)}let t=[...e],n=0;if(i===`random`)t=Dr(t);else{let t=parseInt(o,10);(isNaN(t)||t<1)&&(t=1),t>e.length&&(t=e.length),n=t-1,s(t.toString())}v(t),b(n),r(`playing`),d(!1)};(0,_.useEffect)(()=>{n===`playing`&&g.length>0&&y<g.length?j(g[y]):n===`playing`&&y>=g.length&&g.length>0&&r(`finished`)},[y,g,n]),(0,_.useEffect)(()=>{let e=g[y];T===`playing`&&e&&C.length>0&&C.length===e.words.length&&(C.every((t,n)=>t.text===e.words[n])?(ee(`correct`),!c&&!f.listenOnly&&E(0)):ee(`incorrect`))},[C,T,y,g,c,f.listenOnly]),(0,_.useEffect)(()=>{if(T===`playing`&&f.listenOnly){let e=g[y];if(e){let t=e.words.map((e,t)=>({id:`w-auto-${t}`,text:e}));w(t),S([])}}},[T,y,f.listenOnly,g]),(0,_.useEffect)(()=>{let e=!0;return(async()=>{if(T===`correct`||T===`resigned`){let t=g[y];if(!t)return;let n=t.structure.map(e=>e.text).join(` `);if(f.enabled){if(h(!0),await jr(t.japanese,`ja-JP`,1),!e||(await new Promise(e=>setTimeout(e,600)),!e))return;for(let t=0;t<f.englishRepeat;t++)if(await jr(n,`en-US`,.9),!e||t<f.englishRepeat-1&&(await new Promise(e=>setTimeout(e,600)),!e))return;h(!1)}(c||f.listenOnly)&&setTimeout(()=>{e&&oe()},f.enabled?800:0)}})(),()=>{e=!1,window.speechSynthesis.cancel(),h(!1)}},[T,y,c,f,g]);let j=e=>{let t=e.words.map((e,t)=>({id:`w-${t}`,text:e}));S(Dr(t)),w([]),ee(`playing`),E(null)},M=e=>{T===`playing`&&(S(t=>t.filter(t=>t.id!==e.id)),w(t=>[...t,e]))},N=e=>{T===`playing`&&(w(t=>t.filter(t=>t.id!==e.id)),S(t=>[...t,e]))},ie=()=>{A(`Are you sure you want to resign this puzzle?`,()=>{let e=g[y].words.map((e,t)=>({id:`w-auto-${t}`,text:e}));w(e),S([]),ee(`resigned`),f.listenOnly||E(0)})},ae=()=>{j(g[y])},oe=()=>{b(e=>e+1)},P=e=>{if(`speechSynthesis`in window){let t=e.replace(/\s+([.,!?])/g,`$1`),n=new SpeechSynthesisUtterance(t);n.lang=`en-US`,n.rate=.9,window.speechSynthesis.cancel(),window.speechSynthesis.speak(n)}else ne(`Sorry, your browser does not support text-to-speech.`)},F=e=>{let n=e.target.files?.[0];if(!n)return;let r=new FileReader;r.onload=e=>{try{let n=JSON.parse(e.target?.result);Array.isArray(n)&&n.length>0&&n[0].words&&n[0].structure?(t(n),s(`1`),ne(`Successfully imported ${n.length} puzzles.`),d(!1)):ne(`Invalid JSON format. Please check the required structure.`)}catch{ne(`Failed to parse JSON file.`)}k.current&&(k.current.value=``)},r.readAsText(n)},I=()=>{n===`playing`?A(`Return to home? Current progress will be lost.`,()=>{r(`home`),d(!1),window.speechSynthesis.cancel()}):(r(`home`),d(!1),window.speechSynthesis.cancel())},L=()=>D.isOpen?(0,V.jsx)(`div`,{className:`fixed inset-0 bg-black bg-opacity-80 modal-overlay z-[100] flex items-center justify-center p-4 animate-fade-in`,children:(0,V.jsxs)(`div`,{className:`bg-lichess-panel border border-lichess-border p-8 rounded-sm shadow-2xl max-w-sm w-full text-center`,children:[(0,V.jsx)(`div`,{className:`text-4xl mb-4 text-lichess-text opacity-70`,children:D.type===`confirm`?`⚑`:`ℹ️`}),(0,V.jsx)(`p`,{className:`text-white mb-8 text-lg`,children:D.message}),(0,V.jsxs)(`div`,{className:`flex justify-center gap-4`,children:[D.type===`confirm`&&(0,V.jsx)(`button`,{onClick:()=>O(e=>({...e,isOpen:!1})),className:`flex-1 py-3 bg-transparent border border-lichess-border text-lichess-text hover:text-white rounded-sm font-bold uppercase tracking-wider transition-colors`,children:`Cancel`}),(0,V.jsx)(`button`,{onClick:D.onConfirm,className:`flex-1 py-3 text-white rounded-sm font-bold uppercase tracking-wider transition-colors shadow ${D.type===`confirm`?`bg-lichess-red hover:bg-red-700`:`bg-lichess-green hover:bg-lichess-greenHover`}`,children:`OK`})]})]})}):null,se=()=>(0,V.jsxs)(`header`,{className:`bg-lichess-bg border-b border-lichess-border p-3 flex justify-between items-center shadow-md relative z-10`,children:[(0,V.jsxs)(`div`,{className:`flex items-center text-lichess-text hover:text-lichess-textHover cursor-pointer transition-colors`,onClick:I,children:[(0,V.jsx)(`span`,{className:`lichess-icon`,children:`♘`}),(0,V.jsxs)(`span`,{className:`text-xl font-bold uppercase tracking-wide`,children:[`GRAMMAR`,(0,V.jsx)(`span`,{className:`font-light`,children:`PUZZLES`})]})]}),(0,V.jsx)(`div`,{className:`flex items-center gap-4`,children:n===`home`?(0,V.jsxs)(`button`,{onClick:()=>d(!u),className:`text-lichess-text hover:text-white transition-colors p-2 text-lg flex items-center gap-2 rounded-sm px-3 ${u?`bg-[#363431]`:``}`,title:`Settings & Import`,children:[(0,V.jsx)(`span`,{className:`text-sm uppercase font-bold tracking-widest hidden sm:inline`,children:`Data`}),` ⚙️`]}):(0,V.jsxs)(`button`,{onClick:I,className:`text-lichess-text hover:text-white transition-colors p-2 text-lg flex items-center gap-2 bg-lichess-button hover:bg-[#4c4a47] rounded-sm px-3 shadow`,title:`Return to Home`,children:[(0,V.jsx)(`span`,{className:`text-xs uppercase font-bold tracking-widest`,children:`Home`}),` 🏠`]})})]}),ce=()=>!u||n!==`home`?null:(0,V.jsxs)(`div`,{className:`absolute top-14 right-4 bg-lichess-panel border border-lichess-border shadow-2xl rounded-sm p-5 z-50 w-80 animate-fade-in`,children:[(0,V.jsxs)(`div`,{className:`flex justify-between items-center mb-4 border-b border-lichess-border pb-2`,children:[(0,V.jsx)(`h3`,{className:`text-white font-bold uppercase tracking-wide text-sm`,children:`Data Settings`}),(0,V.jsx)(`button`,{onClick:()=>d(!1),className:`text-lichess-text hover:text-white text-xl`,children:`✕`})]}),(0,V.jsxs)(`div`,{className:`mb-4`,children:[(0,V.jsx)(`p`,{className:`text-xs text-lichess-text mb-2`,children:`Import your JSON puzzle collection.`}),(0,V.jsx)(`input`,{type:`file`,accept:`.json`,onChange:F,ref:k,className:`hidden`,id:`json-upload`}),(0,V.jsx)(`label`,{htmlFor:`json-upload`,className:`block w-full text-center py-3 bg-[#3e3c38] hover:bg-[#4c4a47] border border-lichess-border text-white text-sm font-bold uppercase tracking-wider rounded-sm cursor-pointer transition-colors shadow`,children:`Upload JSON File`})]}),(0,V.jsxs)(`div`,{className:`text-xs text-lichess-text pt-2 border-t border-lichess-border text-center flex justify-between items-center mt-4`,children:[(0,V.jsx)(`span`,{children:`Loaded Puzzles:`}),(0,V.jsx)(`span`,{className:`text-lichess-green font-bold text-sm bg-[#161512] px-2 py-0.5 rounded-sm border border-lichess-border`,children:e.length})]})]});if(n===`home`)return(0,V.jsxs)(V.Fragment,{children:[(0,V.jsx)(L,{}),(0,V.jsx)(ce,{}),(0,V.jsx)(`div`,{className:`h-screen flex bg-[#161512]`,children:(0,V.jsxs)(`div`,{className:`w-full mx-auto flex flex-col bg-[#262421] overflow-hidden h-screen`,children:[(0,V.jsxs)(`div`,{className:`h-12 bg-[#1b1a19] border-b border-[#383634] flex items-center justify-between px-4 shrink-0`,children:[(0,V.jsxs)(`div`,{className:`font-bold text-[#dbd9d6] flex items-center gap-2`,children:[(0,V.jsx)(`span`,{className:`text-[#8c8c8c]`,children:`♘`}),`Grammar_Puzzle`]}),(0,V.jsx)(`div`,{className:`flex gap-3 text-[#8c8c8c]`,children:(0,V.jsx)(`button`,{onClick:()=>d(!u),className:`hover:text-white transition-colors ${u?`text-white`:``}`,title:`Settings & Import`,children:`⚙️`})})]}),(0,V.jsxs)(`div`,{className:`flex-1 flex flex-col items-center py-6 px-4 sm:justify-center sm:p-8 space-y-6 sm:space-y-8 overflow-y-auto w-full`,children:[(0,V.jsxs)(`div`,{className:`text-center space-y-2 shrink-0`,children:[(0,V.jsx)(`h1`,{className:`text-3xl sm:text-4xl font-bold tracking-wider text-[#dbd9d6]`,children:`GRAMMAR PUZZLE`}),(0,V.jsxs)(`p`,{className:`text-[#8c8c8c] text-sm`,children:[e.length,` puzzles loaded in database`]})]}),(0,V.jsxs)(`div`,{className:`w-full max-w-sm space-y-6 pt-2 pb-6 shrink-0`,children:[(0,V.jsxs)(`div`,{className:`space-y-4 bg-[#1b1a19] p-4 rounded-sm border border-[#383634]`,children:[(0,V.jsxs)(`div`,{className:`space-y-2`,children:[(0,V.jsx)(`div`,{className:`flex items-center gap-2 text-xs font-bold text-[#8c8c8c] uppercase`,children:`▶ Play Mode`}),(0,V.jsxs)(`div`,{className:`flex gap-1 bg-[#262421] p-1 rounded-sm border border-[#383634]`,children:[(0,V.jsx)(`button`,{onClick:()=>a(`random`),className:`flex-1 py-1.5 text-xs font-bold uppercase rounded-sm transition-colors ${i===`random`?`bg-[#383634] text-white shadow-sm`:`text-[#8c8c8c] hover:text-[#dbd9d6]`}`,children:`Random`}),(0,V.jsx)(`button`,{onClick:()=>a(`sequential`),className:`flex-1 py-1.5 text-xs font-bold uppercase rounded-sm transition-colors ${i===`sequential`?`bg-[#383634] text-white shadow-sm`:`text-[#8c8c8c] hover:text-[#dbd9d6]`}`,children:`Sequential`})]}),i===`sequential`&&(0,V.jsxs)(`div`,{className:`flex items-center gap-2 mt-2 pt-2 border-t border-[#262421]`,children:[(0,V.jsx)(`span`,{className:`text-xs font-bold text-[#8c8c8c] uppercase flex items-center gap-1`,children:`Start At:`}),(0,V.jsx)(`input`,{type:`text`,inputMode:`numeric`,pattern:`[0-9]*`,value:o,onChange:e=>{let t=e.target.value.replace(/[^0-9]/g,``);s(t)},onBlur:()=>{let t=parseInt(o,10);(isNaN(t)||t<1)&&(t=1),t>e.length&&(t=e.length),s(t.toString())},placeholder:`1`,className:`bg-[#262421] border border-[#383634] text-[#dbd9d6] text-xs px-2 py-1.5 rounded-sm w-20 text-center focus:outline-none focus:border-[#8c8c8c] placeholder:text-[#8c8c8c] placeholder:opacity-50 transition-colors`}),(0,V.jsxs)(`span`,{className:`text-[#8c8c8c] text-xs`,children:[`/ `,e.length]})]})]}),(0,V.jsxs)(`div`,{className:`space-y-2`,children:[(0,V.jsx)(`div`,{className:`flex items-center gap-2 text-xs font-bold text-[#8c8c8c] uppercase`,children:`⚡ Evaluation`}),(0,V.jsxs)(`div`,{className:`flex gap-1 bg-[#262421] p-1 rounded-sm border border-[#383634]`,children:[(0,V.jsx)(`button`,{onClick:()=>l(!1),className:`flex-1 py-1.5 text-xs font-bold uppercase rounded-sm transition-colors ${c?`text-[#8c8c8c] hover:text-[#dbd9d6]`:`bg-[#383634] text-white shadow-sm`}`,children:`Manual`}),(0,V.jsx)(`button`,{onClick:()=>l(!0),className:`flex-1 py-1.5 text-xs font-bold uppercase rounded-sm transition-colors ${c?`bg-[#383634] text-white shadow-sm`:`text-[#8c8c8c] hover:text-[#dbd9d6]`}`,children:`Speed Run`})]})]}),(0,V.jsxs)(`div`,{className:`space-y-2 pt-2 border-t border-[#262421]`,children:[(0,V.jsx)(`div`,{className:`flex items-center gap-2 text-xs font-bold text-[#8c8c8c] uppercase`,children:`🔊 Read-Aloud`}),(0,V.jsxs)(`div`,{className:`flex gap-1 bg-[#262421] p-1 rounded-sm border border-[#383634]`,children:[(0,V.jsx)(`button`,{onClick:()=>p(e=>({...e,enabled:!1})),className:`flex-1 py-1.5 text-xs font-bold uppercase rounded-sm transition-colors ${f.enabled?`text-[#8c8c8c] hover:text-[#dbd9d6]`:`bg-[#383634] text-white shadow-sm`}`,children:`OFF`}),(0,V.jsx)(`button`,{onClick:()=>p(e=>({...e,enabled:!0})),className:`flex-1 py-1.5 text-xs font-bold uppercase rounded-sm transition-colors ${f.enabled?`bg-[#383634] text-white shadow-sm`:`text-[#8c8c8c] hover:text-[#dbd9d6]`}`,children:`ON`})]}),f.enabled&&(0,V.jsxs)(`div`,{className:`space-y-2 mt-2 pt-2 border-t border-[#262421]`,children:[(0,V.jsxs)(`div`,{className:`flex items-center justify-between`,children:[(0,V.jsx)(`span`,{className:`text-xs font-bold text-[#8c8c8c] uppercase`,children:`EN Repeats`}),(0,V.jsx)(`select`,{value:f.englishRepeat,onChange:e=>p(t=>({...t,englishRepeat:Number(e.target.value)})),className:`bg-[#262421] border border-[#383634] text-[#dbd9d6] text-xs rounded-sm py-1 px-2 focus:outline-none focus:border-[#8c8c8c] transition-colors`,children:[1,2,3,4,5].map(e=>(0,V.jsxs)(`option`,{value:e,children:[e,`x`]},e))})]}),(0,V.jsxs)(`div`,{className:`flex gap-1 bg-[#262421] p-1 rounded-sm border border-[#383634]`,children:[(0,V.jsx)(`button`,{onClick:()=>p(e=>({...e,listenOnly:!1})),className:`flex-1 py-1.5 text-xs font-bold uppercase rounded-sm transition-colors ${f.listenOnly?`text-[#8c8c8c] hover:text-[#dbd9d6]`:`bg-[#383634] text-white shadow-sm`}`,children:`Normal`}),(0,V.jsx)(`button`,{onClick:()=>p(e=>({...e,listenOnly:!0})),className:`flex-1 py-1.5 text-xs font-bold uppercase rounded-sm transition-colors ${f.listenOnly?`bg-[#383634] text-white shadow-sm`:`text-[#8c8c8c] hover:text-[#dbd9d6]`}`,children:`Listen Only`})]})]})]})]}),(0,V.jsx)(`button`,{onClick:re,className:`w-full py-4 text-sm sm:text-base bg-[#629924] text-white hover:bg-[#72a332] font-bold rounded-sm uppercase tracking-wide transition-colors shadow-[0_2px_0_rgba(0,0,0,0.2)] active:translate-y-[2px] active:shadow-none flex items-center justify-center gap-2`,children:`▶ Play Puzzles`})]})]})]})})]});if(n===`finished`)return(0,V.jsxs)(V.Fragment,{children:[(0,V.jsx)(L,{}),(0,V.jsx)(se,{}),(0,V.jsx)(`div`,{className:`flex-grow flex items-center justify-center p-4`,children:(0,V.jsxs)(`div`,{className:`bg-lichess-panel border border-lichess-border rounded-sm p-8 text-center max-w-md w-full shadow-lg animate-fade-in`,children:[(0,V.jsx)(`div`,{className:`text-5xl mb-4 text-lichess-green`,children:`🏆`}),(0,V.jsx)(`h2`,{className:`text-2xl font-bold text-white mb-2 uppercase tracking-wide`,children:`Course Completed`}),(0,V.jsx)(`p`,{className:`text-lichess-text mb-8`,children:`お疲れ様でした！すべての構文解析を完了しました。`}),(0,V.jsx)(`button`,{onClick:I,className:`w-full py-3 bg-lichess-button hover:bg-lichess-buttonHover border border-lichess-border text-white font-bold rounded-sm uppercase tracking-wider transition-colors shadow`,children:`Return to Main Menu`})]})})]});let R=g[y];if(!R)return null;let le=T===`correct`&&!c&&!f.listenOnly||T===`resigned`,ue=R.structure.map(e=>e.text).join(` `);return(0,V.jsxs)(V.Fragment,{children:[(0,V.jsx)(L,{}),(0,V.jsx)(se,{}),(0,V.jsxs)(`div`,{className:`w-full p-4 md:p-6 no-select flex-grow flex flex-col relative z-0 overflow-y-auto`,children:[(0,V.jsxs)(`div`,{className:`flex justify-between items-center mb-4 text-sm text-lichess-text`,children:[(0,V.jsxs)(`div`,{className:`uppercase font-bold tracking-wider text-xs opacity-70 flex items-center gap-3`,children:[(0,V.jsxs)(`span`,{children:[`Problem `,y+1,` / `,g.length]}),m&&(0,V.jsxs)(`span`,{className:`text-lichess-green animate-pulse flex items-center gap-1`,children:[`🔊 `,(0,V.jsx)(`span`,{className:`hidden sm:inline`,children:`Playing Audio`})]})]}),(0,V.jsxs)(`div`,{className:`uppercase font-bold tracking-wider text-xs opacity-50 flex items-center gap-2`,children:[(0,V.jsx)(`span`,{children:i}),(0,V.jsx)(`span`,{className:`opacity-50`,children:`|`}),(0,V.jsx)(`span`,{className:c?`text-lichess-green`:``,children:f.listenOnly?`Listen Only`:c?`Auto`:`Manual`})]})]}),(0,V.jsxs)(`div`,{className:`flex flex-col lg:flex-row gap-6`,children:[(0,V.jsx)(`div`,{className:`flex-grow flex flex-col gap-6 lg:w-2/3`,children:(0,V.jsxs)(`div`,{className:`bg-lichess-panel border border-lichess-border rounded-sm p-6 shadow-lg relative min-h-[400px]`,children:[T===`resigned`&&(0,V.jsx)(`div`,{className:`absolute top-4 right-4 border-2 border-lichess-red text-lichess-red px-3 py-1 text-sm font-bold uppercase tracking-widest rounded-sm opacity-80 rotate-12 pointer-events-none z-10`,children:`Resigned`}),(0,V.jsx)(`div`,{className:`mb-6 border-b border-lichess-border pb-4`,children:(0,V.jsx)(`p`,{className:`text-xl md:text-2xl text-white font-medium mb-1 tracking-wide leading-relaxed`,children:R.japanese})}),!le&&(0,V.jsxs)(`div`,{className:`animate-fade-in`,children:[(0,V.jsx)(`div`,{className:`mb-6`,children:(0,V.jsx)(`div`,{className:`min-h-[80px] border rounded-sm p-3 flex flex-wrap gap-2 items-center transition-colors duration-200 ${(T===`correct`||T===`resigned`&&f.listenOnly)&&!c&&!f.listenOnly?`bg-lichess-green border-lichess-green bg-opacity-20`:`bg-lichess-bg border-lichess-border`}`,children:C.length===0?(0,V.jsx)(`span`,{className:`text-lichess-text opacity-40 text-sm w-full text-center py-2 uppercase tracking-widest`,children:`Construct the sentence`}):C.map(e=>(0,V.jsx)(`button`,{onClick:()=>N(e),className:`px-4 py-2 rounded-sm font-medium shadow text-lg transition-colors ${T===`correct`||T===`resigned`&&f.listenOnly?`bg-lichess-green text-white cursor-default`:`bg-lichess-button hover:bg-lichess-buttonHover text-white`}`,disabled:T!==`playing`,children:e.text},e.id))})}),(0,V.jsx)(`div`,{children:(0,V.jsx)(`div`,{className:`flex flex-wrap gap-2 min-h-[60px]`,children:x.map(e=>(0,V.jsx)(`button`,{onClick:()=>M(e),className:`px-4 py-2 bg-[#3e3c38] hover:bg-[#52504c] text-white rounded-sm font-medium shadow-sm text-lg transition-colors active:translate-y-[1px]`,children:e.text},e.id))})})]}),le&&(0,V.jsxs)(`div`,{className:`animate-fade-in flex flex-col h-full`,children:[(0,V.jsxs)(`div`,{className:`mb-5 p-4 bg-[#1b1a18] border border-[#3e3c38] rounded-sm flex flex-col md:flex-row items-start md:items-center justify-between shadow-inner gap-4`,children:[(0,V.jsx)(`div`,{className:`text-xl text-white font-serif italic tracking-wide leading-relaxed`,children:ue}),(0,V.jsxs)(`button`,{onClick:()=>P(ue),className:`flex-shrink-0 bg-lichess-button hover:bg-[#4c4a47] text-white px-4 py-2 rounded-sm border border-[#4c4a47] transition-colors flex items-center gap-2 w-full md:w-auto justify-center ${m?`opacity-50 cursor-not-allowed`:``}`,disabled:m,children:[(0,V.jsx)(`span`,{className:`text-lg`,children:`🔊`}),(0,V.jsx)(`span`,{className:`text-xs uppercase font-bold tracking-widest`,children:`Listen`})]})]}),(0,V.jsxs)(`div`,{className:`bg-[#1b1a18] p-4 border border-[#3e3c38] rounded-sm shadow-inner mb-4`,children:[(0,V.jsxs)(`div`,{className:`text-xs uppercase font-bold tracking-widest text-lichess-green mb-4 flex justify-between items-center`,children:[(0,V.jsx)(`span`,{children:`Syntax Analysis`}),(0,V.jsx)(`span`,{className:`text-lichess-text opacity-50 font-normal normal-case`,children:`Click to inspect`})]}),(0,V.jsx)(`div`,{className:`flex flex-wrap gap-3`,children:R.structure.map((e,t)=>{let n=te===t;return(0,V.jsxs)(`div`,{onClick:()=>E(t),className:`
                                  flex flex-col items-center p-2 rounded-sm cursor-pointer transition-all border-2
                                  ${n?`bg-[#2a2825] ${kr(e.role)} shadow-lg scale-105`:`border-transparent hover:bg-[#262421]`}
                                  ${!n&&t===0&&te===null?`inspector-hint`:``}
                                `,children:[(0,V.jsx)(`div`,{className:`text-lg mb-2 font-medium ${n?`text-white`:`text-lichess-text`}`,children:e.text}),(0,V.jsx)(`div`,{className:`flex flex-col items-center gap-1`,children:(0,V.jsx)(`span`,{className:`px-2 py-0.5 text-[11px] font-bold rounded-sm tracking-widest ${Or(e.role)}`,children:e.role})})]},t)})})]}),(0,V.jsxs)(`div`,{className:`bg-lichess-bg border-l-4 border-lichess-green p-5 rounded-r-sm relative overflow-hidden flex-grow`,children:[(0,V.jsx)(`div`,{className:`absolute top-0 right-0 opacity-5 pointer-events-none`,children:(0,V.jsx)(`span`,{className:`text-9xl font-bold`,children:`⚙`})}),(0,V.jsx)(`h4`,{className:`text-sm uppercase font-bold text-lichess-text tracking-widest mb-3`,children:`Inspector`}),te!==null&&R.structure[te]?(0,V.jsxs)(`div`,{className:`relative z-10 animate-fade-in`,children:[(0,V.jsxs)(`div`,{className:`flex flex-wrap items-center gap-3 mb-2`,children:[(0,V.jsx)(`span`,{className:`px-3 py-1 text-sm font-bold rounded-sm ${Or(R.structure[te].role)}`,children:Ar(R.structure[te].role)}),R.structure[te].detail&&(0,V.jsx)(`span`,{className:`text-white text-sm font-medium border-b border-gray-600 pb-0.5`,children:R.structure[te].detail})]}),(0,V.jsxs)(`p`,{className:`text-lg text-white mb-3 mt-4 font-serif italic border-l-2 border-lichess-border pl-3`,children:[`"`,R.structure[te].text,`"`]}),(0,V.jsx)(`p`,{className:`text-lichess-text leading-relaxed text-sm md:text-base`,children:R.structure[te].explanation||`詳しい解説はありません。`})]}):(0,V.jsx)(`p`,{className:`text-lichess-text opacity-50 text-sm`,children:`Select an element above to view detailed grammar analysis.`}),R.overallExplanation&&(0,V.jsxs)(`div`,{className:`mt-6 pt-4 border-t border-lichess-border`,children:[(0,V.jsxs)(`span`,{className:`text-xs uppercase font-bold text-lichess-text tracking-wider mr-2`,children:[`Pattern `,R.pattern,`:`]}),(0,V.jsx)(`span`,{className:`text-sm text-lichess-textHover leading-relaxed block mt-1`,children:R.overallExplanation})]})]})]})]})}),(0,V.jsxs)(`div`,{className:`lg:w-1/3 flex flex-col gap-4`,children:[(0,V.jsxs)(`div`,{className:`bg-lichess-panel border border-lichess-border rounded-sm p-4 shadow-lg flex flex-col justify-center min-h-[160px]`,children:[(T===`playing`||T===`correct`||T===`resigned`&&f.listenOnly)&&(c||f.listenOnly||T===`playing`)&&(0,V.jsxs)(`div`,{className:`flex flex-col gap-3`,children:[(0,V.jsxs)(`div`,{className:`text-center text-lichess-text opacity-70 text-sm mb-1 uppercase tracking-widest`,children:[C.length,` / `,R.words.length,` Selected`]}),(0,V.jsxs)(`button`,{onClick:T===`playing`&&!f.listenOnly?ie:void 0,className:`w-full py-4 bg-transparent border border-lichess-border text-lichess-text rounded-sm font-bold uppercase tracking-widest transition-colors flex items-center justify-center gap-2 ${T===`playing`&&!f.listenOnly?`hover:bg-[#363431] hover:text-white cursor-pointer`:`opacity-50 cursor-default`}`,title:T===`playing`?`Give up and show solution`:``,children:[(0,V.jsx)(`span`,{className:`text-lg leading-none`,children:`⚑`}),` Resign`]})]}),T===`correct`&&!c&&!f.listenOnly&&(0,V.jsxs)(`div`,{className:`text-center animate-fade-in`,children:[(0,V.jsxs)(`div`,{className:`text-lg font-bold text-lichess-green mb-4 uppercase tracking-widest flex items-center justify-center gap-2`,children:[(0,V.jsx)(`span`,{children:`✓`}),` Correct Syntax`]}),(0,V.jsx)(`button`,{onClick:oe,className:`w-full py-4 bg-[#3e3c38] hover:bg-[#52504c] border border-[#52504c] text-white rounded-sm font-bold uppercase tracking-widest transition-colors shadow`,children:`Next Problem ❯`})]}),T===`resigned`&&!f.listenOnly&&(0,V.jsxs)(`div`,{className:`text-center animate-fade-in`,children:[(0,V.jsxs)(`div`,{className:`text-sm font-bold text-lichess-text mb-4 uppercase tracking-widest flex items-center justify-center gap-2 opacity-80`,children:[(0,V.jsx)(`span`,{children:`⚑`}),` You Resigned`]}),(0,V.jsx)(`button`,{onClick:oe,className:`w-full py-4 bg-lichess-button hover:bg-[#4c4a47] border border-lichess-border text-white rounded-sm font-bold uppercase tracking-widest transition-colors shadow`,children:`Next Problem ❯`})]}),T===`incorrect`&&(0,V.jsxs)(`div`,{className:`text-center animate-fade-in`,children:[(0,V.jsx)(`div`,{className:`text-lg font-bold text-lichess-red mb-4 uppercase tracking-widest`,children:`Blunder`}),(0,V.jsxs)(`div`,{className:`flex gap-2`,children:[(0,V.jsx)(`button`,{onClick:ae,className:`flex-1 py-3 bg-lichess-button hover:bg-[#4c4a47] border border-lichess-border text-white rounded-sm font-bold uppercase tracking-wider transition-colors`,children:`Retry`}),(0,V.jsx)(`button`,{onClick:ie,className:`px-4 py-3 bg-transparent border border-lichess-border hover:bg-[#363431] text-lichess-red hover:text-white hover:bg-lichess-red rounded-sm font-bold transition-colors`,title:`Resign`,children:`⚑`})]})]})]}),(0,V.jsxs)(`div`,{className:`hidden lg:block bg-lichess-panel border border-lichess-border rounded-sm p-4`,children:[(0,V.jsx)(`div`,{className:`text-[10px] uppercase font-bold text-center tracking-widest text-lichess-text border-b border-lichess-border pb-2 mb-3`,children:`Syntax Legend`}),(0,V.jsxs)(`div`,{className:`flex flex-col gap-2 text-xs text-lichess-text`,children:[(0,V.jsxs)(`div`,{className:`flex items-center gap-2`,children:[(0,V.jsx)(`span`,{className:`w-2.5 h-2.5 rounded-sm bg-lichess-roleS`}),` `,(0,V.jsx)(`span`,{className:`w-6 font-bold`,children:`S`}),` Subject`]}),(0,V.jsxs)(`div`,{className:`flex items-center gap-2`,children:[(0,V.jsx)(`span`,{className:`w-2.5 h-2.5 rounded-sm bg-lichess-roleV`}),` `,(0,V.jsx)(`span`,{className:`w-6 font-bold`,children:`V`}),` Verb`]}),(0,V.jsxs)(`div`,{className:`flex items-center gap-2`,children:[(0,V.jsx)(`span`,{className:`w-2.5 h-2.5 rounded-sm bg-lichess-roleO`}),` `,(0,V.jsx)(`span`,{className:`w-6 font-bold`,children:`O`}),` Object`]}),(0,V.jsxs)(`div`,{className:`flex items-center gap-2`,children:[(0,V.jsx)(`span`,{className:`w-2.5 h-2.5 rounded-sm bg-lichess-roleC`}),` `,(0,V.jsx)(`span`,{className:`w-6 font-bold`,children:`C`}),` Complement`]}),(0,V.jsxs)(`div`,{className:`flex items-center gap-2`,children:[(0,V.jsx)(`span`,{className:`w-2.5 h-2.5 rounded-sm bg-lichess-roleM`}),` `,(0,V.jsx)(`span`,{className:`w-6 font-bold`,children:`M`}),` Modifier`]})]})]})]})]})]})]})}var Nr=[{id:1,sentenceStart:`This is`,sentenceEnd:`.`,options:[`an apple`,`the apple`,`apples`],correctAnswer:`an apple`,explanation:`「これは（一つの）りんごです」と初めて紹介する場合は、単数形の前に a/an をつけます。`,translation:`これはりんごです。`},{id:2,sentenceStart:`I like`,sentenceEnd:`.`,options:[`a cat`,`the cat`,`cats`],correctAnswer:`cats`,explanation:`「猫が好きです」のように一般的な種類全体を指す場合は、無冠詞の複数形を使います。`,translation:`私は猫が好きです。`},{id:3,sentenceStart:`Could you pass me`,sentenceEnd:`on the table?`,options:[`a cup`,`the cup`,`cups`],correctAnswer:`the cup`,explanation:`「テーブルの上の」と特定されており、話し手も聞き手もどのコップか分かるため the を使います。`,translation:`テーブルの上のコップを取ってくれますか？`},{id:4,sentenceStart:`My father bought`,sentenceEnd:`yesterday.`,options:[`a car`,`the car`,`cars`],correctAnswer:`a car`,explanation:`特定の車ではなく「（ある1台の）車」を買ったので a を使います。`,translation:`私の父は昨日、車を買いました。`},{id:5,sentenceStart:`Look at`,sentenceEnd:`in the sky!`,options:[`a bird`,`the bird`,`birds`],correctAnswer:`the bird`,explanation:`「空にいるあの鳥を見て！」と特定の鳥を指差しているので the を使います。`,translation:`空にいるあの鳥を見て！`}],Pr=()=>(0,V.jsx)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,className:`h-5 w-5 inline-block mr-2`,fill:`none`,viewBox:`0 0 24 24`,stroke:`currentColor`,children:(0,V.jsx)(`path`,{strokeLinecap:`round`,strokeLinejoin:`round`,strokeWidth:2,d:`M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12`})}),Fr=()=>(0,V.jsx)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,className:`h-5 w-5 inline-block mr-2`,fill:`none`,viewBox:`0 0 24 24`,stroke:`currentColor`,children:(0,V.jsx)(`path`,{strokeLinecap:`round`,strokeLinejoin:`round`,strokeWidth:2,d:`M14 5l7 7m0 0l-7 7m7-7H3`})}),Ir=()=>(0,V.jsx)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,className:`h-5 w-5 inline-block mr-2`,fill:`none`,viewBox:`0 0 24 24`,stroke:`currentColor`,children:(0,V.jsx)(`path`,{strokeLinecap:`round`,strokeLinejoin:`round`,strokeWidth:2,d:`M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15`})}),Lr=()=>(0,V.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,className:`h-5 w-5 inline-block mr-2`,fill:`none`,viewBox:`0 0 24 24`,stroke:`currentColor`,children:[(0,V.jsx)(`path`,{strokeLinecap:`round`,strokeLinejoin:`round`,strokeWidth:2,d:`M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z`}),(0,V.jsx)(`path`,{strokeLinecap:`round`,strokeLinejoin:`round`,strokeWidth:2,d:`M15 12a3 3 0 11-6 0 3 3 0 016 0z`})]});function Rr(){let[e,t]=(0,_.useState)(`start`),[n,r]=(0,_.useState)(Nr),[i,a]=(0,_.useState)([]),[o,s]=(0,_.useState)(0),[c,l]=(0,_.useState)(0),[u,d]=(0,_.useState)(null),[f,p]=(0,_.useState)(!1),[m,h]=(0,_.useState)({order:`sequential`,startPosition:1,autoNext:!1}),[g,v]=(0,_.useState)(``),[y,b]=(0,_.useState)(0),x=(0,_.useRef)(null);(0,_.useEffect)(()=>{y>0&&T()},[y]);let S=e=>{let t=e.target.files?.[0];if(!t)return;let n=new FileReader;n.onload=e=>{try{let t=JSON.parse(e.target?.result);Array.isArray(t)&&t.length>0&&`sentenceStart`in t[0]?(r(t),h(e=>({...e,startPosition:1})),v(``)):v(`Invalid JSON format.`)}catch{v(`Failed to parse JSON file.`)}x.current&&(x.current.value=``)},n.readAsText(t)},C=()=>{let e=[...n];if(m.order===`random`)e=e.sort(()=>Math.random()-.5);else{let t=Math.max(0,Math.min(m.startPosition-1,n.length-1));e=e.slice(t)}e.length!==0&&(a(e),s(0),l(0),d(null),p(!1),t(`playing`))},w=e=>{f||(d(e),p(!0),e===i[o].correctAnswer&&(l(e=>e+1),m.autoNext&&setTimeout(()=>{b(Date.now())},100)))},T=()=>{o<i.length-1?(s(e=>e+1),d(null),p(!1)):t(`result`)},ee=()=>{t(`start`)};return(0,V.jsxs)(`div`,{className:`min-h-screen flex flex-col`,children:[(0,V.jsx)(`header`,{className:`h-12 bg-lichess-surface border-b border-lichess-border flex items-center px-4 md:px-8 shadow-sm flex-shrink-0`,children:(0,V.jsxs)(`div`,{className:`flex items-center gap-2 text-lichess-title font-bold text-lg tracking-wide cursor-pointer`,onClick:ee,children:[(0,V.jsx)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,className:`h-6 w-6 text-lichess-text`,fill:`none`,viewBox:`0 0 24 24`,stroke:`currentColor`,children:(0,V.jsx)(`path`,{strokeLinecap:`round`,strokeLinejoin:`round`,strokeWidth:2,d:`M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253`})}),`COUNTABLE NOUNS QUIZ`]})}),e===`start`&&(0,V.jsx)(`div`,{className:`flex-1 flex items-center justify-center p-4`,children:(0,V.jsxs)(`div`,{className:`bg-lichess-surface rounded shadow-xl border border-lichess-border w-full max-w-md p-6`,children:[(0,V.jsxs)(`h2`,{className:`text-2xl font-bold text-lichess-title mb-6 flex items-center justify-center gap-2 border-b border-lichess-border pb-4`,children:[(0,V.jsx)(Lr,{}),` Quiz Setup`]}),(0,V.jsxs)(`div`,{className:`space-y-6`,children:[(0,V.jsxs)(`div`,{className:`text-center p-3 bg-lichess-base rounded border border-lichess-border`,children:[(0,V.jsx)(`div`,{className:`text-lichess-text text-sm uppercase tracking-wider mb-1`,children:`Loaded Questions`}),(0,V.jsx)(`div`,{className:`text-xl font-bold text-lichess-title`,children:n.length})]}),(0,V.jsxs)(`div`,{className:`space-y-2`,children:[(0,V.jsx)(`label`,{className:`text-sm font-bold text-lichess-text uppercase tracking-wider block`,children:`Mode`}),(0,V.jsxs)(`div`,{className:`flex rounded overflow-hidden border border-lichess-border bg-lichess-base`,children:[(0,V.jsx)(`button`,{className:`flex-1 py-2 text-sm font-bold transition-colors ${m.order===`sequential`?`bg-lichess-primary text-white`:`text-lichess-text hover:bg-lichess-hover`}`,onClick:()=>h({...m,order:`sequential`}),children:`Sequential`}),(0,V.jsx)(`button`,{className:`flex-1 py-2 text-sm font-bold transition-colors ${m.order===`random`?`bg-lichess-primary text-white`:`text-lichess-text hover:bg-lichess-hover`}`,onClick:()=>h({...m,order:`random`}),children:`Random`})]})]}),m.order===`sequential`&&(0,V.jsxs)(`div`,{className:`space-y-2 animate-fade-in`,children:[(0,V.jsx)(`label`,{className:`text-sm font-bold text-lichess-text uppercase tracking-wider block`,children:`Start From Question #`}),(0,V.jsx)(`input`,{type:`number`,inputMode:`numeric`,pattern:`[0-9]*`,min:`1`,max:n.length,value:m.startPosition||``,onChange:e=>{let t=parseInt(e.target.value);h(isNaN(t)?{...m,startPosition:1}:{...m,startPosition:Math.min(Math.max(1,t),n.length)})},className:`w-full bg-lichess-base border border-lichess-border rounded p-3 text-lichess-title font-bold focus:outline-none focus:border-lichess-primary`})]}),(0,V.jsxs)(`div`,{className:`space-y-2`,children:[(0,V.jsx)(`label`,{className:`text-sm font-bold text-lichess-text uppercase tracking-wider block`,children:`Auto-Next on Correct`}),(0,V.jsxs)(`div`,{className:`flex rounded overflow-hidden border border-lichess-border bg-lichess-base`,children:[(0,V.jsx)(`button`,{className:`flex-1 py-2 text-sm font-bold transition-colors ${m.autoNext===!0?`bg-lichess-primary text-white`:`text-lichess-text hover:bg-lichess-hover`}`,onClick:()=>h({...m,autoNext:!0}),children:`Fast (0.1s)`}),(0,V.jsx)(`button`,{className:`flex-1 py-2 text-sm font-bold transition-colors ${m.autoNext===!1?`bg-lichess-primary text-white`:`text-lichess-text hover:bg-lichess-hover`}`,onClick:()=>h({...m,autoNext:!1}),children:`Manual`})]}),(0,V.jsx)(`p`,{className:`text-xs text-lichess-text mt-1`,children:`Manual mode lets you read the explanation.`})]}),(0,V.jsx)(`div`,{className:`pt-4 border-t border-lichess-border`,children:(0,V.jsx)(`button`,{onClick:C,className:`w-full bg-lichess-primary hover:bg-lichess-primaryHover text-white font-bold py-4 rounded uppercase tracking-widest text-lg shadow-lg transition-colors`,children:`START`})}),(0,V.jsxs)(`div`,{className:`pt-6 border-t border-lichess-border`,children:[(0,V.jsxs)(`label`,{className:`flex items-center justify-center w-full p-3 border-2 border-dashed border-lichess-border rounded hover:border-lichess-text hover:bg-lichess-hover cursor-pointer transition-colors text-lichess-title text-sm`,children:[(0,V.jsx)(Pr,{}),` Import JSON Questions`,(0,V.jsx)(`input`,{type:`file`,accept:`.json`,className:`hidden`,onChange:S,ref:x})]}),g&&(0,V.jsx)(`div`,{className:`mt-2 text-lichess-bad text-xs font-bold text-center`,children:g})]})]})]})}),e===`playing`&&(()=>{let e=i[o],t=t=>f?t===e.correctAnswer?`w-full text-left p-3 md:p-4 rounded border-2 transition-colors flex items-center font-medium text-lg border-lichess-good bg-[#2a4516] text-lichess-title`:t===u?`w-full text-left p-3 md:p-4 rounded border-2 transition-colors flex items-center font-medium text-lg border-lichess-bad bg-[#521211] text-lichess-title`:`w-full text-left p-3 md:p-4 rounded border-2 transition-colors flex items-center font-medium text-lg border-lichess-surface bg-lichess-surface text-lichess-text opacity-40 cursor-not-allowed`:`w-full text-left p-3 md:p-4 rounded border-2 transition-colors flex items-center font-medium text-lg border-lichess-surface bg-lichess-surface hover:bg-lichess-hover text-lichess-text cursor-pointer`;return(0,V.jsxs)(`main`,{className:`flex-1 w-full max-w-7xl mx-auto p-4 md:p-6 grid grid-cols-1 lg:grid-cols-[1fr_400px] gap-6 lg:gap-8 items-start`,children:[(0,V.jsx)(`div`,{className:`flex flex-col gap-4`,children:(0,V.jsx)(`div`,{className:`bg-[#a3b190] rounded flex flex-col justify-center items-center p-6 md:p-10 min-h-[200px] md:min-h-[280px] shadow-sm`,children:(0,V.jsxs)(`div`,{className:`z-10 text-center w-full max-w-3xl flex flex-col gap-4`,children:[(0,V.jsxs)(`p`,{className:`text-xl md:text-3xl font-bold text-[#1f241a] leading-relaxed`,children:[e.sentenceStart,(0,V.jsx)(`span`,{className:`inline-block mx-2 px-3 py-1 border-b-2 border-[#1f241a] text-[#1a1f16] min-w-[100px] text-center bg-white/40 rounded-t`,children:f&&u?u:``}),e.sentenceEnd]}),e.translation&&(0,V.jsx)(`p`,{className:`text-sm md:text-base text-[#1f241a] opacity-80 font-medium`,children:e.translation})]})})}),(0,V.jsxs)(`div`,{className:`flex flex-col gap-4 h-full`,children:[(0,V.jsxs)(`div`,{className:`bg-lichess-surface p-4 rounded shadow flex justify-between items-center border border-lichess-border`,children:[(0,V.jsx)(`div`,{className:`flex items-center gap-4`,children:(0,V.jsxs)(`div`,{className:`text-lichess-text font-medium`,children:[`Question `,(0,V.jsx)(`span`,{className:`text-lichess-title font-bold`,children:o+1}),` / `,i.length]})}),(0,V.jsxs)(`div`,{className:`bg-lichess-base px-3 py-1 rounded text-sm font-bold text-lichess-title border border-lichess-border`,children:[`Score: `,c]})]}),(0,V.jsxs)(`div`,{className:`bg-lichess-surface rounded shadow flex flex-col p-4 border border-lichess-border gap-3`,children:[(0,V.jsxs)(`div`,{className:`flex justify-between items-center mb-2`,children:[(0,V.jsx)(`div`,{className:`text-sm text-lichess-text font-medium uppercase tracking-wider`,children:`Find the best option`}),(0,V.jsx)(`button`,{onClick:ee,className:`text-xs text-lichess-border hover:text-lichess-text uppercase tracking-wider`,children:`Abort`})]}),e.options.map((e,n)=>(0,V.jsxs)(`button`,{onClick:()=>w(e),disabled:f,className:t(e),children:[(0,V.jsx)(`span`,{className:`w-8 h-8 flex items-center justify-center bg-lichess-base border border-lichess-border rounded text-sm text-lichess-text mr-4 font-bold`,children:n+1}),e]},n)),f&&(0,V.jsxs)(`div`,{className:`mt-4 flex flex-col gap-4 animate-fade-in`,children:[(0,V.jsxs)(`div`,{className:`p-4 rounded border-l-4 ${u===e.correctAnswer?`bg-[#2a4516]/50 border-lichess-good`:`bg-[#521211]/50 border-lichess-bad`}`,children:[(0,V.jsx)(`div`,{className:`font-bold text-lichess-title mb-1 flex items-center gap-2`,children:u===e.correctAnswer?`✓ Good move`:`✗ Inaccuracy`}),(0,V.jsx)(`p`,{className:`text-sm text-lichess-text leading-relaxed`,children:e.explanation})]}),(!m.autoNext||u!==e.correctAnswer)&&(0,V.jsxs)(`button`,{onClick:T,className:`w-full bg-lichess-primary hover:bg-lichess-primaryHover text-white font-bold py-3 px-6 rounded uppercase tracking-wider transition-colors shadow flex justify-center items-center`,children:[(0,V.jsx)(Fr,{}),` `,o<i.length-1?`Next Question`:`View Results`]})]})]})]})]})})(),e===`result`&&(0,V.jsxs)(`main`,{className:`flex-1 w-full max-w-7xl mx-auto p-4 md:p-6 grid grid-cols-1 lg:grid-cols-[1fr_400px] gap-6 lg:gap-8 items-start`,children:[(0,V.jsx)(`div`,{className:`flex flex-col gap-4`,children:(0,V.jsx)(`div`,{className:`bg-[#a3b190] rounded flex flex-col justify-center items-center p-6 md:p-10 min-h-[200px] md:min-h-[280px] shadow-sm`,children:(0,V.jsxs)(`div`,{className:`z-10 text-center text-[#1f241a]`,children:[(0,V.jsx)(`h2`,{className:`text-2xl font-bold mb-4`,children:`Quiz Complete`}),(0,V.jsxs)(`div`,{className:`text-5xl font-black mb-2`,children:[c,` `,(0,V.jsxs)(`span`,{className:`text-2xl text-[#363e2e]`,children:[`/ `,i.length]})]}),(0,V.jsxs)(`p`,{className:`text-base font-medium opacity-80`,children:[`Accuracy: `,Math.round(c/i.length*100),`%`]})]})})}),(0,V.jsxs)(`div`,{className:`flex flex-col gap-4 h-full`,children:[(0,V.jsx)(`div`,{className:`bg-lichess-surface p-4 rounded shadow flex justify-between items-center border border-lichess-border`,children:(0,V.jsx)(`div`,{className:`text-lichess-text font-medium`,children:`Session Summary`})}),(0,V.jsx)(`div`,{className:`bg-lichess-surface rounded shadow flex flex-col p-6 border border-lichess-border gap-4`,children:(0,V.jsxs)(`button`,{onClick:ee,className:`w-full bg-lichess-primary hover:bg-lichess-primaryHover text-white font-bold py-4 px-6 rounded uppercase tracking-wider transition-colors flex justify-center items-center gap-2`,children:[(0,V.jsx)(Ir,{}),` Back to Setup`]})})]})]})]})}var zr=[{id:1,word:`prescriptive`,pronunciation:`/prɪˈskrɪptɪv/`,pos:`Adjective`,meaning:`規範的な、指示する`,wrong:`自由放任の`,context:`The manual offers prescriptive rules for grammar and punctuation.`,source:`Chicago Manual of Style`},{id:2,word:`authoritative`,pronunciation:`/əˈθɔːrɪteɪtɪv/`,pos:`Adjective`,meaning:`権威ある、信頼できる`,wrong:`疑わしい`,context:`CMOS is considered an authoritative source for American English.`,source:`Chicago Manual of Style`},{id:3,word:`plagiarism`,pronunciation:`/ˈpleɪdʒərɪzəm/`,pos:`Noun`,meaning:`盗作、剽窃`,wrong:`独創`,context:`Strict citation guidelines help prevent plagiarism.`,source:`Chicago Manual of Style`},{id:4,word:`bibliography`,pronunciation:`/ˌbɪbliˈɒɡrəfi/`,pos:`Noun`,meaning:`参考文献目録`,wrong:`索引`,context:`The bibliography lists all sources consulted by the author.`,source:`Chicago Manual of Style`},{id:5,word:`manuscript`,pronunciation:`/ˈmænjʊskrɪpt/`,pos:`Noun`,meaning:`原稿`,wrong:`既刊本`,context:`Authors submit their manuscripts to the publisher for review.`,source:`Chicago Manual of Style`},{id:6,word:`rule of thumb`,pronunciation:`/ruːl əv θʌm/`,pos:`Idiom`,meaning:`経験則、大まかな基準`,wrong:`厳密な規則`,context:`As a rule of thumb, one cup of rice needs two cups of water.`,source:`Common Phrases`}],Br=({onReset:e,onExitFS:t,onEnterFS:n})=>(0,V.jsxs)(`div`,{className:`flex gap-3 text-[#8c8c8c]`,children:[(0,V.jsx)(`button`,{onClick:e,className:`hover:text-white transition-colors`,title:`Reset App`,children:(0,V.jsx)(cr,{size:16})}),(0,V.jsx)(`button`,{onClick:t,className:`hover:text-white transition-colors`,title:`Exit Fullscreen`,children:(0,V.jsx)(tr,{size:16})}),(0,V.jsx)(`button`,{onClick:n,className:`hover:text-white transition-colors`,title:`Enter Fullscreen`,children:(0,V.jsx)($n,{size:16})})]}),Vr=({children:e,title:t=`English_Word`,className:n=``,onReset:r,onExitFS:i,onEnterFS:a})=>(0,V.jsxs)(`div`,{className:`w-full max-w-3xl mx-auto flex flex-col bg-[#262421] shadow-xl sm:rounded-sm overflow-hidden border border-[#383634] ${n}`,children:[(0,V.jsxs)(`div`,{className:`h-12 bg-[#1b1a19] border-b border-[#383634] flex items-center justify-between px-4 shrink-0`,children:[(0,V.jsxs)(`div`,{className:`font-bold text-[#dbd9d6] flex items-center gap-2`,children:[(0,V.jsx)(Bn,{size:18,className:`text-[#8c8c8c]`}),t]}),(0,V.jsx)(Br,{onReset:r,onExitFS:i,onEnterFS:a})]}),(0,V.jsx)(`div`,{className:`flex-1 flex flex-col relative bg-[#161512] overflow-hidden`,children:e})]}),Hr=({onClick:e,children:t,variant:n=`primary`,className:r=``,disabled:i=!1,icon:a,...o})=>{let s={primary:`bg-[#629924] text-white hover:bg-[#72a332] shadow-[0_2px_0_rgba(0,0,0,0.2)] active:translate-y-[2px] active:shadow-none`,secondary:`bg-[#383634] text-[#dbd9d6] hover:bg-[#454341] shadow-[0_2px_0_rgba(0,0,0,0.2)] active:translate-y-[2px] active:shadow-none`,blue:`bg-[#1b78d0] text-white hover:bg-[#2084e6] shadow-[0_2px_0_rgba(0,0,0,0.2)] active:translate-y-[2px] active:shadow-none`,orange:`bg-[#d35400] text-white hover:bg-[#e67e22] shadow-[0_2px_0_rgba(0,0,0,0.2)] active:translate-y-[2px] active:shadow-none`,danger:`bg-[#cc3333] text-white hover:bg-[#d64040] shadow-[0_2px_0_rgba(0,0,0,0.2)] active:translate-y-[2px] active:shadow-none`,ghost:`bg-transparent text-[#8c8c8c] hover:bg-[#383634] hover:text-[#dbd9d6]`},c=r.includes(`rounded`)?``:`rounded-sm`;return(0,V.jsxs)(`button`,{onClick:e,disabled:i,className:`px-4 py-2 text-sm font-bold uppercase tracking-wide transition-colors flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed ${s[n]} ${c} ${r}`,...o,children:[a&&(0,V.jsx)(a,{size:18}),t]})};function Ur(){let[e,t]=(0,_.useState)(`start`),[n,r]=(0,_.useState)(`card`),[i,a]=(0,_.useState)(zr),[o,s]=(0,_.useState)([]),[c,l]=(0,_.useState)([]),[u,d]=(0,_.useState)(0),[f,p]=(0,_.useState)(0),[m,h]=(0,_.useState)(!1),[g,v]=(0,_.useState)(``),[y,b]=(0,_.useState)(!1),[x,S]=(0,_.useState)(!1),[C,w]=(0,_.useState)(`all`),[T,ee]=(0,_.useState)(!1),[te,E]=(0,_.useState)(``),[D,O]=(0,_.useState)(!1),[k,ne]=(0,_.useState)(!0),[A,re]=(0,_.useState)(!1),[j,M]=(0,_.useState)(1),[N,ie]=(0,_.useState)(!1),[ae,oe]=(0,_.useState)(JSON.stringify(zr,null,2)),[P,F]=(0,_.useState)(null),I=(0,_.useRef)(null),L=(0,_.useRef)(null),se=(0,_.useRef)(k),ce=(0,_.useRef)(null);(0,_.useEffect)(()=>{se.current=k},[k]),(0,_.useEffect)(()=>{window.speechSynthesis&&(window.speechSynthesis.onvoiceschanged=()=>ie(!0),window.speechSynthesis.getVoices());let e=new Audio(`data:audio/wav;base64,UklGRigAAABXQVZFZm10IBIAAAABAAEARKwAAIhYAQACABAAAABkYXRhAgAAAAEA`);return e.loop=!0,ce.current=e,()=>{e.pause()}},[]),(0,_.useEffect)(()=>{e!==`playing`&&ce.current&&ce.current.pause()},[e]),(0,_.useEffect)(()=>{let e;return x&&(e=setTimeout(()=>S(!1),400)),()=>clearTimeout(e)},[x]),(0,_.useEffect)(()=>{v(``),b(!1),S(!1),n===`typing`&&e===`playing`&&setTimeout(()=>L.current?.focus(),50)},[u,n,e]);let R=o[u],le=e=>{if(!window.speechSynthesis)return null;let t=window.speechSynthesis.getVoices();return e.startsWith(`en`)?t.find(e=>e.name===`Google US English`)||t.find(e=>e.name===`Samantha`)||t.find(e=>e.lang===`en-US`||e.lang===`en-GB`)||null:e.startsWith(`ja`)?t.find(e=>e.name===`Google 日本語`)||t.find(e=>e.name===`Kyoko`)||t.find(e=>e.lang===`ja-JP`)||null:t.find(t=>t.lang===e)||null},ue=async(e,t,n=.9)=>new Promise(r=>{if(!window.speechSynthesis||j<=0)return r();let i=new SpeechSynthesisUtterance(e);i.lang=t,i.rate=n,i.volume=j;let a=le(t);a&&(i.voice=a);let o=setTimeout(()=>{r()},Math.max(4e3,e.length*200));i.onend=()=>{clearTimeout(o),r()},i.onerror=e=>{console.warn(`SpeechSynthesis Error:`,e),clearTimeout(o),r()},window.speechSynthesis.speak(i),window.speechSynthesis.paused&&window.speechSynthesis.resume()}),de=async(e,t)=>{if(!(!window.speechSynthesis||j<=0)){O(!0),window.speechSynthesis.cancel();try{(t===`full`||t===`word`)&&await ue(e.word,`en-US`,.85),(t===`full`||t===`meaning_context`)&&(t===`full`&&await new Promise(e=>setTimeout(e,600)),await ue(e.meaning,`ja-JP`,1),e.context&&(await new Promise(e=>setTimeout(e,800)),await ue(e.context,`en-US`,.9)))}finally{O(!1)}}};(0,_.useEffect)(()=>{let t=!0;return(async()=>{!R||e!==`playing`||(n===`reading`?k&&(await de(R,`full`),t&&se.current&&(await new Promise(e=>setTimeout(e,1200)),t&&se.current&&fe())):(n===`card`||n===`typing`)&&!m&&A&&g===``&&await de(R,`word`))})(),()=>{t=!1,window.speechSynthesis.cancel(),O(!1)}},[R,u,e,n,k,m,A]),(0,_.useEffect)(()=>{`mediaSession`in navigator&&R&&e===`playing`&&(navigator.mediaSession.metadata=new MediaMetadata({title:R.word,artist:R.meaning,album:`English_Word`}),navigator.mediaSession.setActionHandler(`play`,()=>{ne(!0),ce.current&&ce.current.paused&&ce.current.play().catch(()=>{})}),navigator.mediaSession.setActionHandler(`pause`,()=>{ne(!1)}),navigator.mediaSession.setActionHandler(`nexttrack`,()=>{fe()}),navigator.mediaSession.setActionHandler(`previoustrack`,()=>{u>0&&(window.speechSynthesis.cancel(),h(!1),d(e=>e-1))}))},[R,e,u]);let fe=()=>{h(!1),window.speechSynthesis.cancel(),O(!1),u<o.length-1?d(e=>e+1):t(`result`)},pe=()=>{R&&de(R,`full`),n===`typing`&&setTimeout(()=>L.current?.focus(),50)},me=e=>{r(e),ne(!0),ce.current&&ce.current.play().catch(e=>console.warn(`MediaSession dummy audio requires interaction`,e));let n=[...i];if(T)n.sort(()=>Math.random()-.5);else{n.sort((e,t)=>e.id-t.id);let e=parseInt(te,10),t=isNaN(e)?1:Math.min(e,2e3),r=n.findIndex(e=>e.id>=t);n=n.slice(r===-1?0:r)}let a=n.length;C===`50`?a=Math.min(50,n.length):C===`100`&&(a=Math.min(100,n.length)),s(n.slice(0,a)),l([]),p(0),d(0),h(!1),t(`playing`)},he=()=>{s([...c]),l([]),p(0),d(0),h(!1),t(`playing`)},ge=e=>{window.speechSynthesis.cancel(),O(!1),e?p(e=>e+1):l(e=>[...e,R]),fe()},_e=()=>{R&&(g.trim()===R.word.trim()?(y?l(e=>[...e,R]):p(e=>e+1),window.speechSynthesis.cancel(),O(!1),fe()):(b(!0),S(!0)))},ve=()=>{l(e=>[...e,R]),window.speechSynthesis.cancel(),O(!1),fe()},ye=()=>{window.speechSynthesis.cancel(),O(!1),l([]),t(`start`)},be=async()=>{try{let e=await navigator.clipboard.readText();oe(e),F(null)}catch{F(`Clipboard access denied. Please paste manually.`)}},xe=e=>{let t=e.target.files?.[0];if(!t)return;let n=new FileReader;n.onload=e=>{let t=e.target?.result;try{JSON.parse(t),oe(t),F(null)}catch(e){F(`Invalid JSON file: `+e.message)}},n.readAsText(t),e.target.value=``},Se=()=>{I.current?.click()},Ce=()=>{try{let e=JSON.parse(ae);if(!Array.isArray(e))throw Error(`Format Error: Data must be a JSON Array [...]`);if(e.length===0)throw Error(`Data Error: The array is empty.`);if(!e[0].word||!e[0].meaning||!e[0].pos)throw Error(`Structure Error: Missing 'word', 'meaning', or 'pos' fields.`);a(e),F(null),t(`start`)}catch(e){F(e.message)}},we=()=>{let e=document.documentElement;e.requestFullscreen&&e.requestFullscreen().catch(e=>console.log(e))},Te=()=>{document.exitFullscreen&&document.fullscreenElement&&document.exitFullscreen().catch(e=>console.log(e))},Ee=()=>{ye()};return e===`start`?(0,V.jsx)(`div`,{className:`min-h-screen flex items-center justify-center sm:p-4 bg-[#161512]`,children:(0,V.jsx)(Vr,{className:`w-full h-screen sm:h-[85vh] sm:min-h-[750px] sm:max-h-[900px] flex flex-col border-none sm:border-solid`,onReset:Ee,onEnterFS:we,onExitFS:Te,children:(0,V.jsxs)(`div`,{className:`flex-1 flex flex-col items-center py-6 px-4 sm:justify-center sm:p-8 space-y-6 sm:space-y-8 overflow-y-auto w-full bg-[#161512]`,children:[(0,V.jsxs)(`div`,{className:`text-center space-y-2 shrink-0`,children:[(0,V.jsx)(`h1`,{className:`text-3xl sm:text-4xl font-bold tracking-wider text-[#dbd9d6]`,children:`ENGLISH WORD`}),(0,V.jsxs)(`p`,{className:`text-[#8c8c8c] text-sm`,children:[i.length,` words loaded in database`]})]}),(0,V.jsxs)(`div`,{className:`w-full max-w-sm space-y-6 pt-2 pb-6 shrink-0`,children:[(0,V.jsxs)(`div`,{className:`space-y-4 bg-[#1b1a19] p-4 rounded-sm border border-[#383634]`,children:[(0,V.jsxs)(`div`,{className:`space-y-2`,children:[(0,V.jsxs)(`div`,{className:`flex items-center gap-2 text-xs font-bold text-[#8c8c8c] uppercase`,children:[(0,V.jsx)(Jn,{size:14}),` Questions`]}),(0,V.jsx)(`div`,{className:`flex gap-1 bg-[#262421] p-1 rounded-sm border border-[#383634]`,children:[`50`,`100`,`all`].map(e=>(0,V.jsx)(`button`,{onClick:()=>w(e),className:`flex-1 py-1.5 text-xs font-bold uppercase rounded-sm transition-colors ${C===e?`bg-[#383634] text-white shadow-sm`:`text-[#8c8c8c] hover:text-[#dbd9d6]`}`,children:e},e))})]}),(0,V.jsxs)(`div`,{className:`space-y-2`,children:[(0,V.jsx)(`div`,{className:`flex items-center justify-between text-xs font-bold text-[#8c8c8c] uppercase`,children:(0,V.jsxs)(`div`,{className:`flex items-center gap-2`,children:[(0,V.jsx)(Qn,{size:14}),` Order`]})}),(0,V.jsxs)(`div`,{className:`flex gap-1 bg-[#262421] p-1 rounded-sm border border-[#383634]`,children:[(0,V.jsxs)(`button`,{onClick:()=>ee(!1),className:`flex-1 py-1.5 text-xs font-bold uppercase rounded-sm flex items-center justify-center gap-2 transition-colors ${T?`text-[#8c8c8c] hover:text-[#dbd9d6]`:`bg-[#383634] text-white shadow-sm`}`,children:[(0,V.jsx)(Qn,{size:14}),` ID Order`]}),(0,V.jsxs)(`button`,{onClick:()=>ee(!0),className:`flex-1 py-1.5 text-xs font-bold uppercase rounded-sm flex items-center justify-center gap-2 transition-colors ${T?`bg-[#383634] text-white shadow-sm`:`text-[#8c8c8c] hover:text-[#dbd9d6]`}`,children:[(0,V.jsx)(dr,{size:14}),` Random`]})]}),!T&&(0,V.jsxs)(`div`,{className:`flex items-center gap-2 mt-2 pt-2 border-t border-[#262421]`,children:[(0,V.jsxs)(`span`,{className:`text-xs font-bold text-[#8c8c8c] uppercase flex items-center gap-1`,children:[(0,V.jsx)(Un,{size:14}),` Start At:`]}),(0,V.jsx)(`input`,{type:`number`,min:`1`,max:`2000`,value:te,onChange:e=>{let t=e.target.value;(t===``||/^\d+$/.test(t)&&parseInt(t,10)<=2e3)&&E(t)},placeholder:`1`,className:`bg-[#262421] border border-[#383634] text-[#dbd9d6] text-xs px-2 py-1.5 rounded-sm w-20 text-center focus:outline-none focus:border-[#8c8c8c] placeholder:text-[#8c8c8c] placeholder:opacity-50 transition-colors`})]})]}),(0,V.jsxs)(`div`,{className:`space-y-2`,children:[(0,V.jsxs)(`div`,{className:`flex items-center gap-2 text-xs font-bold text-[#8c8c8c] uppercase`,children:[A?(0,V.jsx)(hr,{size:14}):(0,V.jsx)(gr,{size:14}),` Auto Audio (Card/Typing)`]}),(0,V.jsxs)(`div`,{className:`flex gap-1 bg-[#262421] p-1 rounded-sm border border-[#383634]`,children:[(0,V.jsx)(`button`,{onClick:()=>re(!1),className:`flex-1 py-1.5 text-xs font-bold uppercase rounded-sm transition-colors ${A?`text-[#8c8c8c] hover:text-[#dbd9d6]`:`bg-[#383634] text-white shadow-sm`}`,children:`OFF`}),(0,V.jsx)(`button`,{onClick:()=>re(!0),className:`flex-1 py-1.5 text-xs font-bold uppercase rounded-sm transition-colors ${A?`bg-[#383634] text-white shadow-sm`:`text-[#8c8c8c] hover:text-[#dbd9d6]`}`,children:`ON`})]})]}),(0,V.jsxs)(`div`,{className:`space-y-2 pt-2 border-t border-[#262421]`,children:[(0,V.jsxs)(`div`,{className:`flex items-center justify-between text-xs font-bold text-[#8c8c8c] uppercase`,children:[(0,V.jsxs)(`div`,{className:`flex items-center gap-2`,children:[j>0?(0,V.jsx)(hr,{size:14}):(0,V.jsx)(gr,{size:14}),` Master Volume`]}),(0,V.jsxs)(`span`,{children:[Math.round(j*100),`%`]})]}),(0,V.jsx)(`div`,{className:`pt-2`,children:(0,V.jsx)(`input`,{type:`range`,min:`0`,max:`1`,step:`0.1`,value:j,onChange:e=>M(parseFloat(e.target.value)),className:`w-full`})})]})]}),(0,V.jsxs)(`div`,{className:`space-y-3`,children:[(0,V.jsxs)(`div`,{className:`grid grid-cols-2 gap-3`,children:[(0,V.jsx)(Hr,{onClick:()=>me(`card`),className:`w-full py-4 text-sm sm:text-base`,icon:Zn,children:`Cards`}),(0,V.jsx)(Hr,{onClick:()=>me(`typing`),variant:`orange`,className:`w-full py-4 text-sm sm:text-base`,icon:Xn,children:`Typing`})]}),(0,V.jsx)(Hr,{onClick:()=>me(`reading`),variant:`blue`,className:`w-full py-4 text-sm sm:text-base`,icon:Yn,children:`Reading`}),(0,V.jsx)(Hr,{variant:`secondary`,onClick:()=>t(`editor`),className:`w-full py-3`,icon:ur,children:`Import JSON`})]})]})]})})}):e===`editor`?(0,V.jsx)(`div`,{className:`min-h-screen flex items-center justify-center sm:p-4 bg-[#161512]`,children:(0,V.jsx)(Vr,{title:`Import Data`,className:`w-full h-screen sm:h-[85vh] sm:min-h-[700px] sm:max-h-[900px] flex flex-col border-none sm:border-solid`,onReset:Ee,onEnterFS:we,onExitFS:Te,children:(0,V.jsxs)(`div`,{className:`flex flex-col h-full`,children:[(0,V.jsx)(`input`,{type:`file`,accept:`.json`,ref:I,onChange:xe,className:`hidden`}),(0,V.jsxs)(`div`,{className:`bg-[#1b1a19] border-b border-[#383634] p-2 flex justify-between items-center shrink-0`,children:[(0,V.jsxs)(`div`,{className:`flex gap-2`,children:[(0,V.jsx)(Hr,{variant:`ghost`,onClick:Se,className:`h-8 text-xs px-2 sm:px-4`,icon:Gn,children:(0,V.jsx)(`span`,{className:`hidden sm:inline`,children:`Load File`})}),(0,V.jsx)(Hr,{variant:`ghost`,onClick:be,className:`h-8 text-xs px-2 sm:px-4`,icon:Wn,children:(0,V.jsx)(`span`,{className:`hidden sm:inline`,children:`Paste`})})]}),(0,V.jsx)(Hr,{variant:`ghost`,onClick:ye,className:`h-8 text-xs`,children:`Cancel`})]}),(0,V.jsx)(`div`,{className:`flex-1 relative`,children:(0,V.jsx)(`textarea`,{className:`w-full h-full p-4 font-mono text-sm bg-[#161512] text-[#85A94E] resize-none focus:outline-none placeholder:text-[#383634]`,value:ae,onChange:e=>oe(e.target.value),spellCheck:!1,placeholder:`Paste JSON...`})}),(0,V.jsxs)(`div`,{className:`bg-[#1b1a19] p-4 border-t border-[#383634] flex justify-between items-center shrink-0`,children:[(0,V.jsx)(`div`,{className:`flex-1 pr-4`,children:P?(0,V.jsxs)(`span`,{className:`text-[#cc3333] text-xs sm:text-sm font-bold flex items-center gap-2`,children:[(0,V.jsx)(_r,{size:16,className:`shrink-0`}),` `,(0,V.jsx)(`span`,{className:`truncate`,children:P})]}):(0,V.jsxs)(`span`,{className:`text-[#8c8c8c] text-xs sm:text-sm font-bold flex items-center gap-2`,children:[(0,V.jsx)(Kn,{size:16,className:`shrink-0`}),` JSON Valid`]})}),(0,V.jsx)(Hr,{onClick:Ce,icon:Hn,className:`shrink-0 text-xs sm:text-sm`,children:`Save`})]})]})})}):e===`result`?(0,V.jsx)(`div`,{className:`min-h-screen flex items-center justify-center sm:p-4 bg-[#161512]`,children:(0,V.jsx)(Vr,{title:`Session Complete`,className:`w-full h-screen sm:h-[60vh] sm:min-h-[500px] sm:max-h-[700px] flex flex-col border-none sm:border-solid`,onReset:Ee,onEnterFS:we,onExitFS:Te,children:(0,V.jsxs)(`div`,{className:`flex-1 flex flex-col items-center justify-center p-4 sm:p-8 space-y-8 text-center overflow-y-auto bg-[#161512]`,children:[n===`card`||n===`typing`?(0,V.jsxs)(V.Fragment,{children:[(0,V.jsxs)(`div`,{className:`space-y-2`,children:[(0,V.jsx)(`h2`,{className:`text-xl sm:text-2xl font-bold text-[#8c8c8c] uppercase tracking-widest`,children:n===`typing`?`Accuracy`:`Known Words`}),(0,V.jsxs)(`div`,{className:`text-5xl sm:text-6xl font-bold text-[#dbd9d6]`,children:[Math.round(f/o.length*100),`%`]})]}),(0,V.jsx)(`div`,{className:`bg-[#1b1a19] border border-[#383634] px-6 sm:px-8 py-4 rounded-sm w-full max-w-sm`,children:(0,V.jsxs)(`p`,{className:`text-base sm:text-lg text-[#dbd9d6]`,children:[n===`typing`?`Perfectly Typed `:`You knew `,(0,V.jsx)(`span`,{className:`text-[#629924] font-bold`,children:f}),` out of `,(0,V.jsx)(`span`,{className:`font-bold`,children:o.length}),` words.`]})})]}):(0,V.jsxs)(V.Fragment,{children:[(0,V.jsxs)(`div`,{className:`space-y-2`,children:[(0,V.jsx)(`h2`,{className:`text-xl sm:text-2xl font-bold text-[#8c8c8c] uppercase tracking-widest`,children:`Words Read`}),(0,V.jsx)(`div`,{className:`text-5xl sm:text-6xl font-bold text-[#dbd9d6]`,children:o.length})]}),(0,V.jsx)(`div`,{className:`bg-[#1b1a19] border border-[#383634] px-6 sm:px-8 py-4 rounded-sm w-full max-w-sm`,children:(0,V.jsx)(`p`,{className:`text-base sm:text-lg text-[#dbd9d6]`,children:`Reading session completed.`})})]}),(0,V.jsxs)(`div`,{className:`pt-4 sm:pt-8 w-full max-w-xs flex flex-col gap-3`,children:[(n===`card`||n===`typing`)&&c.length>0&&(0,V.jsxs)(Hr,{onClick:he,variant:`primary`,className:`w-full py-4 !rounded-xl`,icon:cr,children:[`Review Unknown (`,c.length,`)`]}),(0,V.jsx)(Hr,{onClick:ye,variant:(n===`card`||n===`typing`)&&c.length>0?`secondary`:`primary`,className:`w-full py-4 !rounded-xl`,icon:sr,children:`Return to Start`})]})]})})}):(0,V.jsx)(`div`,{className:`min-h-screen flex items-center justify-center sm:p-4 bg-[#161512]`,children:(0,V.jsxs)(Vr,{title:n===`card`?`Flashcards`:n===`typing`?`Typing`:`Reading`,className:`w-full h-screen sm:h-[85vh] sm:min-h-[700px] sm:max-h-[900px] flex flex-col border-none sm:border-solid`,onReset:Ee,onEnterFS:we,onExitFS:Te,children:[(0,V.jsx)(`div`,{className:`h-1 w-full bg-[#1b1a19] shrink-0`,children:(0,V.jsx)(`div`,{className:`h-full transition-all duration-300 ${n===`reading`?`bg-[#1b78d0]`:n===`typing`?`bg-[#d35400]`:`bg-[#629924]`}`,style:{width:`${u/o.length*100}%`}})}),(0,V.jsx)(`div`,{className:`flex-1 flex flex-col overflow-hidden bg-[#161512]`,children:n===`card`?(0,V.jsxs)(`div`,{className:`flex-1 flex flex-col items-center justify-center p-4 sm:p-8 relative overflow-y-auto w-full`,children:[(0,V.jsxs)(`div`,{className:`w-full flex justify-between items-center mb-4 max-w-md shrink-0`,children:[(0,V.jsxs)(`div`,{className:`text-xs font-bold text-[#8c8c8c] uppercase tracking-widest flex items-center gap-2`,children:[(0,V.jsx)(Zn,{size:14}),` Card `,u+1,` / `,o.length]}),(0,V.jsxs)(`div`,{className:`text-[10px] sm:text-xs font-bold text-[#8c8c8c] uppercase text-right`,children:[`ID: `,R.id]})]}),(0,V.jsx)(`div`,{className:`w-full max-w-md flex flex-col relative rounded-2xl shadow-xl transition-all duration-300 cursor-pointer select-none border-2 shrink-0
                      ${m?`bg-[#1b1a19] border-[#383634] min-h-[350px]`:`bg-[#262421] border-[#383634] hover:border-[#8c8c8c] min-h-[250px] justify-center`}`,onClick:()=>!m&&h(!0),children:(0,V.jsxs)(`div`,{className:`p-6 sm:p-8 flex flex-col items-center flex-1 w-full relative`,children:[(0,V.jsxs)(`div`,{className:`w-full flex justify-between items-start mb-6`,children:[(0,V.jsx)(`div`,{className:`px-3 py-1 bg-[#161512] border border-[#383634] rounded-md text-[#8c8c8c] text-xs font-bold uppercase tracking-widest`,children:R.pos}),(0,V.jsx)(`button`,{onClick:e=>{e.stopPropagation(),pe()},className:`p-2 text-[#8c8c8c] hover:text-[#dbd9d6] hover:bg-[#383634] rounded-full transition-colors z-10`,title:`Play Audio`,children:j>0?(0,V.jsx)(hr,{size:20}):(0,V.jsx)(gr,{size:20})})]}),(0,V.jsxs)(`div`,{className:`flex flex-col items-center justify-center w-full flex-1`,children:[(0,V.jsx)(`h2`,{className:`text-4xl sm:text-5xl font-bold text-white tracking-tight text-center break-words max-w-full`,children:R.word}),R.pronunciation&&(0,V.jsx)(`div`,{className:`mt-3 text-lg sm:text-xl text-[#8c8c8c] font-ipa tracking-wide`,children:R.pronunciation})]}),m&&(0,V.jsxs)(`div`,{className:`mt-8 pt-8 border-t border-[#383634] w-full flex flex-col items-center animate-in fade-in duration-300`,children:[(0,V.jsx)(`div`,{className:`text-2xl sm:text-3xl font-bold text-[#dbd9d6] text-center mb-4 leading-relaxed`,children:R.meaning}),R.context&&(0,V.jsx)(`div`,{className:`text-[#8c8c8c] italic text-sm sm:text-base text-center bg-[#161512] p-4 rounded-lg w-full border border-[#383634]`,children:R.context})]}),!m&&(0,V.jsx)(`div`,{className:`absolute bottom-6 left-0 right-0 text-[#8c8c8c] text-sm flex justify-center items-center pointer-events-none`,children:(0,V.jsx)(`span`,{className:`font-bold tracking-widest uppercase animate-pulse opacity-50`,children:`Tap to reveal`})})]})}),(0,V.jsxs)(`div`,{className:`w-full max-w-md grid grid-cols-2 gap-4 mt-6 shrink-0 transition-all duration-300 ${m?`opacity-100 translate-y-0`:`opacity-0 translate-y-4 pointer-events-none`}`,children:[(0,V.jsx)(Hr,{variant:`danger`,onClick:()=>ge(!1),className:`py-4 sm:py-5 text-base sm:text-lg !rounded-xl shadow-lg transition-transform hover:scale-105`,icon:_r,children:`わからない`}),(0,V.jsx)(Hr,{variant:`primary`,onClick:()=>ge(!0),className:`py-4 sm:py-5 text-base sm:text-lg !rounded-xl shadow-lg transition-transform hover:scale-105`,icon:Hn,children:`わかる`})]})]}):n===`typing`?(0,V.jsxs)(`div`,{className:`flex-1 flex flex-col items-center justify-center p-4 sm:p-8 relative overflow-y-auto w-full`,children:[(0,V.jsxs)(`div`,{className:`w-full flex justify-between items-center mb-4 max-w-md shrink-0`,children:[(0,V.jsxs)(`div`,{className:`text-xs font-bold text-[#8c8c8c] uppercase tracking-widest flex items-center gap-2`,children:[(0,V.jsx)(Xn,{size:14}),` Typing `,u+1,` / `,o.length]}),(0,V.jsxs)(`div`,{className:`text-[10px] sm:text-xs font-bold text-[#8c8c8c] uppercase text-right`,children:[`ID: `,R.id]})]}),(0,V.jsx)(`div`,{className:`w-full max-w-md flex flex-col bg-[#1b1a19] border-2 border-[#383634] rounded-2xl shadow-xl min-h-[420px] shrink-0`,children:(0,V.jsxs)(`div`,{className:`p-6 sm:p-8 flex flex-col items-center flex-1 w-full relative`,children:[(0,V.jsxs)(`div`,{className:`w-full flex justify-between items-start mb-4`,children:[(0,V.jsx)(`div`,{className:`px-3 py-1 bg-[#161512] border border-[#383634] rounded-md text-[#8c8c8c] text-xs font-bold uppercase tracking-widest`,children:R.pos}),(0,V.jsx)(`button`,{onClick:pe,className:`p-2 text-[#8c8c8c] hover:text-[#dbd9d6] hover:bg-[#383634] rounded-full transition-colors z-10`,title:`Play Audio`,children:j>0?(0,V.jsx)(hr,{size:20}):(0,V.jsx)(gr,{size:20})})]}),(0,V.jsxs)(`div`,{className:`flex flex-col items-center justify-center w-full mb-6`,children:[(0,V.jsx)(`div`,{className:`text-2xl sm:text-3xl font-bold text-[#dbd9d6] text-center mb-4 leading-relaxed`,children:R.meaning}),R.context&&(0,V.jsx)(`div`,{className:`text-[#8c8c8c] italic text-sm sm:text-base text-center bg-[#161512] p-4 rounded-lg w-full border border-[#383634]`,children:R.context})]}),(0,V.jsxs)(`div`,{className:`flex flex-col items-center justify-center w-full mb-6`,children:[(0,V.jsx)(`div`,{className:`text-2xl sm:text-3xl text-[#8c8c8c] font-mono tracking-wider opacity-60 break-words max-w-full text-center`,children:R.word}),R.pronunciation&&(0,V.jsx)(`div`,{className:`mt-2 text-sm sm:text-base text-[#8c8c8c] font-ipa tracking-wide opacity-60`,children:R.pronunciation})]}),(0,V.jsx)(`div`,{className:`w-full mt-auto`,children:(0,V.jsx)(`input`,{ref:L,type:`text`,value:g,onChange:e=>v(e.target.value),onKeyDown:e=>{e.nativeEvent.isComposing||e.key===`Enter`&&_e()},autoCapitalize:`none`,autoComplete:`off`,spellCheck:`false`,autoCorrect:`off`,className:`w-full bg-[#161512] border-2 ${x?`border-[#cc3333] animate-shake text-[#cc3333]`:`border-[#383634] focus:border-[#d35400] text-white`} rounded-xl px-4 py-4 text-2xl font-mono text-center outline-none transition-colors shadow-inner`,placeholder:`Type here...`})})]})}),(0,V.jsxs)(`div`,{className:`w-full max-w-md flex gap-4 mt-6 shrink-0`,children:[(0,V.jsxs)(Hr,{variant:`ghost`,onClick:ve,className:`w-1/3 py-4 sm:py-5 text-sm sm:text-base !rounded-xl opacity-70 hover:opacity-100 hover:bg-[#383634]`,title:`わからない (Skip)`,children:[(0,V.jsx)(_r,{size:18}),` Skip`]}),(0,V.jsx)(Hr,{variant:`primary`,onClick:_e,className:`flex-1 py-4 sm:py-5 text-sm sm:text-base !rounded-xl`,icon:Hn,children:`Enter`})]})]}):(0,V.jsxs)(`div`,{className:`flex-1 flex flex-col items-center justify-center p-4 sm:p-8 relative overflow-y-auto w-full`,children:[(0,V.jsxs)(`div`,{className:`w-full flex justify-between items-center mb-4 max-w-md shrink-0`,children:[(0,V.jsxs)(`div`,{className:`text-xs font-bold text-[#8c8c8c] uppercase tracking-widest flex items-center gap-2`,children:[(0,V.jsx)(Yn,{size:14}),` Reading `,u+1,` / `,o.length]}),(0,V.jsxs)(`div`,{className:`text-[10px] sm:text-xs font-bold text-[#8c8c8c] uppercase text-right`,children:[`ID: `,R.id]})]}),(0,V.jsx)(`div`,{className:`w-full max-w-md flex flex-col bg-[#1b1a19] border-2 border-[#383634] rounded-2xl shadow-xl min-h-[350px] shrink-0`,children:(0,V.jsxs)(`div`,{className:`p-6 sm:p-8 flex flex-col items-center flex-1 w-full`,children:[(0,V.jsxs)(`div`,{className:`w-full flex justify-between items-start mb-6`,children:[(0,V.jsx)(`div`,{className:`px-3 py-1 bg-[#161512] border border-[#383634] rounded-md text-[#8c8c8c] text-xs font-bold uppercase tracking-widest`,children:R.pos}),(0,V.jsx)(`button`,{onClick:pe,disabled:D,className:`p-2 text-[#8c8c8c] hover:text-[#dbd9d6] hover:bg-[#383634] rounded-full transition-colors disabled:opacity-50`,title:`Play Audio`,children:j>0?(0,V.jsx)(hr,{size:20}):(0,V.jsx)(gr,{size:20})})]}),(0,V.jsxs)(`div`,{className:`flex flex-col items-center justify-center w-full flex-1 animate-in fade-in duration-300`,children:[(0,V.jsx)(`h2`,{className:`text-4xl sm:text-5xl font-bold text-white tracking-tight text-center break-words max-w-full`,children:R.word}),R.pronunciation&&(0,V.jsx)(`div`,{className:`mt-3 text-lg sm:text-xl text-[#8c8c8c] font-ipa tracking-wide`,children:R.pronunciation})]}),(0,V.jsxs)(`div`,{className:`mt-8 pt-8 border-t border-[#383634] w-full flex flex-col items-center animate-in fade-in duration-500`,children:[(0,V.jsx)(`div`,{className:`text-2xl sm:text-3xl font-bold text-[#dbd9d6] text-center mb-4 leading-relaxed`,children:R.meaning}),R.context&&(0,V.jsx)(`div`,{className:`text-[#8c8c8c] italic text-sm sm:text-base text-center bg-[#161512] p-4 rounded-lg w-full border border-[#383634]`,children:R.context})]})]})}),(0,V.jsxs)(`div`,{className:`w-full max-w-md flex gap-4 mt-6 shrink-0`,children:[(0,V.jsxs)(Hr,{onClick:()=>ne(!k),variant:k?`secondary`:`blue`,className:`flex-1 py-4 sm:py-5 text-sm sm:text-base !rounded-xl`,icon:k?rr:ar,children:[(0,V.jsx)(`span`,{className:`hidden sm:inline`,children:k?`Pause Auto-play`:`Resume Auto-play`}),(0,V.jsx)(`span`,{className:`sm:hidden`,children:k?`Pause`:`Resume`})]}),!k&&(0,V.jsx)(Hr,{onClick:fe,variant:`secondary`,className:`flex-1 py-4 sm:py-5 text-sm sm:text-base !rounded-xl`,children:`Next`})]})]})})]})})}(0,v.createRoot)(document.getElementById(`root`));var Wr=[{id:1,word:`hazardous material`,pronunciation:`/ˈhæzərdəs məˈtɪriəl/`,pos:`Noun`,meaning:`危険物`,wrong:`安全物質`,context:`A license is required to handle hazardous materials.`,context_translation:`危険物を取り扱うには免状が必要です。`,source:`法令`},{id:2,word:`Fire Service Act`,pronunciation:`/faɪər ˈsɜːrvɪs ækt/`,pos:`Noun`,meaning:`消防法`,wrong:`建築基準法`,context:`The storage of hazardous materials is regulated by the Fire Service Act.`,context_translation:`危険物の貯蔵は消防法によって規制されています。`,source:`法令`},{id:3,word:`prescriptive`,pronunciation:`/prɪˈskrɪptɪv/`,pos:`Adjective`,meaning:`規範的な、指示する`,wrong:`自由放任の`,context:`The manual offers prescriptive rules for grammar and punctuation.`,source:`Chicago Manual of Style`},{id:4,word:`authoritative`,pronunciation:`/əˈθɔːrɪteɪtɪv/`,pos:`Adjective`,meaning:`権威ある、信頼できる`,wrong:`疑わしい`,context:`CMOS is considered an authoritative source for American English.`,source:`Chicago Manual of Style`},{id:5,word:`plagiarism`,pronunciation:`/ˈpleɪdʒərɪzəm/`,pos:`Noun`,meaning:`盗作、剽窃`,wrong:`独創`,context:`Strict citation guidelines help prevent plagiarism.`,source:`Chicago Manual of Style`},{id:6,word:`bibliography`,pronunciation:`/ˌbɪbliˈɒɡrəfi/`,pos:`Noun`,meaning:`参考文献目録`,wrong:`索引`,context:`The bibliography lists all sources consulted by the author.`,source:`Chicago Manual of Style`},{id:7,word:`manuscript`,pronunciation:`/ˈmænjʊskrɪpt/`,pos:`Noun`,meaning:`原稿`,wrong:`既刊本`,context:`Authors submit their manuscripts to the publisher for review.`,source:`Chicago Manual of Style`}],Gr=({onReset:e,onExitFS:t,onEnterFS:n})=>(0,V.jsxs)(`div`,{className:`flex gap-3 text-[#8c8c8c]`,children:[(0,V.jsx)(`button`,{onClick:e,className:`hover:text-white transition-colors`,title:`Reset App`,children:(0,V.jsx)(cr,{size:16})}),(0,V.jsx)(`button`,{onClick:t,className:`hover:text-white transition-colors`,title:`Exit Fullscreen`,children:(0,V.jsx)(tr,{size:16})}),(0,V.jsx)(`button`,{onClick:n,className:`hover:text-white transition-colors`,title:`Enter Fullscreen`,children:(0,V.jsx)($n,{size:16})})]}),Kr=({children:e,title:t=`English_Word`,className:n=``,onReset:r,onExitFS:i,onEnterFS:a})=>(0,V.jsxs)(`div`,{className:`w-full max-w-3xl mx-auto flex flex-col bg-[#262421] shadow-xl sm:rounded-sm overflow-hidden border border-[#383634] ${n}`,children:[(0,V.jsxs)(`div`,{className:`h-12 bg-[#1b1a19] border-b border-[#383634] flex items-center justify-between px-4 shrink-0`,children:[(0,V.jsxs)(`div`,{className:`font-bold text-[#dbd9d6] flex items-center gap-2`,children:[(0,V.jsx)(Bn,{size:18,className:`text-[#8c8c8c]`}),t]}),(0,V.jsx)(Gr,{onReset:r,onExitFS:i,onEnterFS:a})]}),(0,V.jsx)(`div`,{className:`flex-1 flex flex-col relative bg-[#262421] overflow-hidden`,children:e})]}),qr=({children:e,title:t,className:n,onReset:r})=>(0,V.jsx)(Kr,{title:t,className:n,onReset:r,onEnterFS:()=>{let e=document.documentElement;e.requestFullscreen&&e.requestFullscreen().catch(e=>console.log(e))},onExitFS:()=>{document.exitFullscreen&&document.fullscreenElement&&document.exitFullscreen().catch(e=>console.log(e))},children:e}),Jr=({onClick:e,children:t,variant:n=`primary`,className:r=``,disabled:i=!1,icon:a,...o})=>(0,V.jsxs)(`button`,{onClick:e,disabled:i,className:`px-4 py-2 text-sm font-bold uppercase tracking-wide transition-colors flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed rounded-sm select-none ${{primary:`bg-[#629924] text-white hover:bg-[#72a332] shadow-[0_2px_0_rgba(0,0,0,0.2)] active:translate-y-[2px] active:shadow-none`,secondary:`bg-[#383634] text-[#dbd9d6] hover:bg-[#454341] shadow-[0_2px_0_rgba(0,0,0,0.2)] active:translate-y-[2px] active:shadow-none`,blue:`bg-[#1b78d0] text-white hover:bg-[#2084e6] shadow-[0_2px_0_rgba(0,0,0,0.2)] active:translate-y-[2px] active:shadow-none`,danger:`bg-[#cc3333] text-white hover:bg-[#d64040] shadow-[0_2px_0_rgba(0,0,0,0.2)] active:translate-y-[2px] active:shadow-none`,ghost:`bg-transparent text-[#8c8c8c] hover:bg-[#383634] hover:text-[#dbd9d6]`}[n]} ${r}`,...o,children:[a&&(0,V.jsx)(a,{size:16}),t]});function Yr(){let[e,t]=(0,_.useState)(`start`),[n,r]=(0,_.useState)(`quiz`),[i,a]=(0,_.useState)(Wr),[o,s]=(0,_.useState)([]),[c,l]=(0,_.useState)(0),[u,d]=(0,_.useState)(0),[f,p]=(0,_.useState)(!1),[m,h]=(0,_.useState)(!1),[g,v]=(0,_.useState)([]),[y,b]=(0,_.useState)([]),[x,S]=(0,_.useState)(`all`),[C,w]=(0,_.useState)(!1),[T,ee]=(0,_.useState)(``),[te,E]=(0,_.useState)(!1),[D,O]=(0,_.useState)(!0),[k,ne]=(0,_.useState)(!1),[A,re]=(0,_.useState)(1),[j,M]=(0,_.useState)(JSON.stringify(Wr,null,2)),[N,ie]=(0,_.useState)(null),ae=(0,_.useRef)(null),oe=(0,_.useRef)(D),P=(0,_.useRef)(null);(0,_.useEffect)(()=>{oe.current=D},[D]),(0,_.useEffect)(()=>{window.speechSynthesis&&(window.speechSynthesis.onvoiceschanged=()=>{},window.speechSynthesis.getVoices());let e=new Audio(`data:audio/wav;base64,UklGRigAAABXQVZFZm10IBIAAAABAAEARKwAAIhYAQACABAAAABkYXRhAgAAAAEA`);return e.loop=!0,P.current=e,()=>{e.pause()}},[]),(0,_.useEffect)(()=>{e!==`playing`&&P.current&&P.current.pause()},[e]);let F=o[c],I=e=>{if(!window.speechSynthesis)return null;let t=window.speechSynthesis.getVoices();return e.startsWith(`en`)?t.find(e=>e.name===`Google US English`)||t.find(e=>e.name===`Samantha`)||t.find(e=>e.lang===`en-US`||e.lang===`en-GB`)||null:e.startsWith(`ja`)?t.find(e=>e.name===`Google 日本語`)||t.find(e=>e.name===`Kyoko`)||t.find(e=>e.lang===`ja-JP`)||null:t.find(t=>t.lang===e)||null},L=async(e,t,n=.9)=>new Promise(r=>{if(!window.speechSynthesis||A<=0)return r();let i=new SpeechSynthesisUtterance(e);i.lang=t,i.rate=n,i.volume=A;let a=I(t);a&&(i.voice=a);let o=setTimeout(()=>{r()},Math.max(4e3,e.length*200));i.onend=()=>{clearTimeout(o),r()},i.onerror=e=>{console.warn(`SpeechSynthesis Error:`,e),clearTimeout(o),r()},window.speechSynthesis.speak(i),window.speechSynthesis.paused&&window.speechSynthesis.resume()}),se=async(e,t)=>{if(!(!window.speechSynthesis||A<=0)){E(!0),window.speechSynthesis.cancel();try{(t===`full`||t===`word`)&&await L(e.word,`en-US`,.85),(t===`full`||t===`meaning_context`)&&(t===`full`&&await new Promise(e=>setTimeout(e,600)),await L(e.meaning,`ja-JP`,1),e.context&&(await new Promise(e=>setTimeout(e,800)),await L(e.context,`en-US`,.9)))}finally{E(!1)}}};(0,_.useEffect)(()=>{if(F&&e===`playing`){let e=[{text:F.meaning,isCorrect:!0},{text:F.wrong,isCorrect:!1}];v(e.sort(()=>Math.random()-.5))}},[F,e]),(0,_.useEffect)(()=>{let t=!0;return(async()=>{!F||e!==`playing`||(n===`reading`?D&&(await se(F,`full`),t&&oe.current&&(await new Promise(e=>setTimeout(e,1200)),t&&oe.current&&ce())):n===`quiz`&&!f&&k&&await se(F,`word`))})(),()=>{t=!1,window.speechSynthesis.cancel(),E(!1)}},[F,c,e,n,D,f,k]),(0,_.useEffect)(()=>{`mediaSession`in navigator&&F&&e===`playing`&&(navigator.mediaSession.metadata=new MediaMetadata({title:F.word,artist:F.meaning,album:`English_Word`}),navigator.mediaSession.setActionHandler(`play`,()=>{O(!0),P.current&&P.current.paused&&P.current.play().catch(()=>{})}),navigator.mediaSession.setActionHandler(`pause`,()=>{O(!1)}),navigator.mediaSession.setActionHandler(`nexttrack`,()=>{ce()}),navigator.mediaSession.setActionHandler(`previoustrack`,()=>{c>0&&(window.speechSynthesis.cancel(),p(!1),l(e=>e-1))}))},[F,e,c]);let ce=()=>{p(!1),window.speechSynthesis.cancel(),E(!1),document.activeElement instanceof HTMLElement&&document.activeElement.blur(),c<o.length-1?l(e=>e+1):t(`result`)},R=()=>{F&&(n===`quiz`&&!f?se(F,`word`):se(F,`full`))},le=e=>{r(e),O(!0),b([]),P.current&&P.current.play().catch(e=>console.warn(`MediaSession dummy audio requires interaction`,e));let n=[...i];if(C)n.sort(()=>Math.random()-.5);else{n.sort((e,t)=>e.id-t.id);let e=parseInt(T,10),t=isNaN(e)?1:e,r=n.findIndex(e=>e.id>=t);r===-1&&(r=0),n=n.slice(r)}let a=n.length;x===`50`?a=Math.min(50,n.length):x===`100`&&(a=Math.min(100,n.length)),s(n.slice(0,a)),d(0),l(0),p(!1),t(`playing`)},ue=()=>{s([...y]),d(0),l(0),p(!1),b([]),O(!0),t(`playing`)},de=e=>{window.speechSynthesis.cancel(),E(!1),h(e),e?d(e=>e+1):b(e=>e.find(e=>e.id===F.id)?e:[...e,F]),p(!0)},fe=()=>{window.speechSynthesis.cancel(),E(!1),t(`start`)},pe=async()=>{try{let e=await navigator.clipboard.readText();M(e),ie(null)}catch{ie(`Clipboard access denied. Please paste manually.`)}},me=e=>{let t=e.target.files?.[0];if(!t)return;let n=new FileReader;n.onload=e=>{let t=e.target?.result;try{JSON.parse(t),M(t),ie(null)}catch(e){ie(`Invalid JSON file: `+e.message)}},n.readAsText(t),e.target.value=``},he=()=>{ae.current?.click()},ge=()=>{try{let e=JSON.parse(j);if(!Array.isArray(e))throw Error(`Format Error: Data must be a JSON Array [...]`);if(e.length===0)throw Error(`Data Error: The array is empty.`);if(!e[0].word||!e[0].meaning||!e[0].pos)throw Error(`Structure Error: Missing 'word', 'meaning', or 'pos' fields.`);a(e),ie(null),t(`start`)}catch(e){ie(e.message)}},_e=()=>{fe()};return e===`start`?(0,V.jsx)(`div`,{className:`min-h-screen flex items-center justify-center sm:p-4 bg-[#161512]`,children:(0,V.jsx)(qr,{className:`w-full h-screen sm:h-[85vh] sm:min-h-[750px] sm:max-h-[900px] flex flex-col border-none sm:border-solid`,onReset:_e,children:(0,V.jsxs)(`div`,{className:`flex-1 flex flex-col items-center py-6 px-4 sm:justify-center sm:p-8 space-y-6 sm:space-y-8 overflow-y-auto w-full`,children:[(0,V.jsxs)(`div`,{className:`text-center space-y-2 shrink-0`,children:[(0,V.jsx)(`h1`,{className:`text-3xl sm:text-4xl font-bold tracking-wider text-[#dbd9d6]`,children:`ENGLISH WORD`}),(0,V.jsxs)(`p`,{className:`text-[#8c8c8c] text-sm`,children:[i.length,` words loaded in database`]})]}),(0,V.jsxs)(`div`,{className:`w-full max-w-sm space-y-6 pt-2 pb-6 shrink-0`,children:[(0,V.jsxs)(`div`,{className:`space-y-4 bg-[#1b1a19] p-4 rounded-sm border border-[#383634]`,children:[(0,V.jsxs)(`div`,{className:`space-y-2`,children:[(0,V.jsxs)(`div`,{className:`flex items-center gap-2 text-xs font-bold text-[#8c8c8c] uppercase`,children:[(0,V.jsx)(Jn,{size:14}),` Questions`]}),(0,V.jsx)(`div`,{className:`flex gap-1 bg-[#262421] p-1 rounded-sm border border-[#383634]`,children:[`50`,`100`,`all`].map(e=>(0,V.jsx)(`button`,{onClick:()=>S(e),className:`flex-1 py-1.5 text-xs font-bold uppercase rounded-sm transition-colors ${x===e?`bg-[#383634] text-white shadow-sm`:`text-[#8c8c8c] hover:text-[#dbd9d6]`}`,children:e},e))})]}),(0,V.jsxs)(`div`,{className:`space-y-2`,children:[(0,V.jsx)(`div`,{className:`flex items-center justify-between text-xs font-bold text-[#8c8c8c] uppercase`,children:(0,V.jsxs)(`div`,{className:`flex items-center gap-2`,children:[(0,V.jsx)(Qn,{size:14}),` Order`]})}),(0,V.jsxs)(`div`,{className:`flex gap-1 bg-[#262421] p-1 rounded-sm border border-[#383634]`,children:[(0,V.jsxs)(`button`,{onClick:()=>w(!1),className:`flex-1 py-1.5 text-xs font-bold uppercase rounded-sm flex items-center justify-center gap-2 transition-colors ${C?`text-[#8c8c8c] hover:text-[#dbd9d6]`:`bg-[#383634] text-white shadow-sm`}`,children:[(0,V.jsx)(Qn,{size:14}),` ID Order`]}),(0,V.jsxs)(`button`,{onClick:()=>w(!0),className:`flex-1 py-1.5 text-xs font-bold uppercase rounded-sm flex items-center justify-center gap-2 transition-colors ${C?`bg-[#383634] text-white shadow-sm`:`text-[#8c8c8c] hover:text-[#dbd9d6]`}`,children:[(0,V.jsx)(dr,{size:14}),` Random`]})]}),!C&&(0,V.jsxs)(`div`,{className:`flex items-center gap-2 mt-2 pt-2 border-t border-[#262421]`,children:[(0,V.jsxs)(`span`,{className:`text-xs font-bold text-[#8c8c8c] uppercase flex items-center gap-1`,children:[(0,V.jsx)(Un,{size:14}),` Start At:`]}),(0,V.jsx)(`input`,{type:`text`,inputMode:`numeric`,pattern:`\\d*`,maxLength:4,value:T,onChange:e=>{let t=e.target.value;t===``?ee(``):/^\d{1,4}$/.test(t)&&ee(t)},placeholder:`1`,className:`bg-[#262421] border border-[#383634] text-[#dbd9d6] text-xs px-2 py-1.5 rounded-sm w-20 text-center focus:outline-none focus:border-[#8c8c8c] placeholder:text-[#8c8c8c] placeholder:opacity-50 transition-colors`})]})]}),(0,V.jsxs)(`div`,{className:`space-y-2`,children:[(0,V.jsxs)(`div`,{className:`flex items-center gap-2 text-xs font-bold text-[#8c8c8c] uppercase`,children:[k?(0,V.jsx)(hr,{size:14}):(0,V.jsx)(gr,{size:14}),` Quiz Auto Audio`]}),(0,V.jsxs)(`div`,{className:`flex gap-1 bg-[#262421] p-1 rounded-sm border border-[#383634]`,children:[(0,V.jsx)(`button`,{onClick:()=>ne(!1),className:`flex-1 py-1.5 text-xs font-bold uppercase rounded-sm transition-colors ${k?`text-[#8c8c8c] hover:text-[#dbd9d6]`:`bg-[#383634] text-white shadow-sm`}`,children:`OFF`}),(0,V.jsx)(`button`,{onClick:()=>ne(!0),className:`flex-1 py-1.5 text-xs font-bold uppercase rounded-sm transition-colors ${k?`bg-[#383634] text-white shadow-sm`:`text-[#8c8c8c] hover:text-[#dbd9d6]`}`,children:`ON`})]})]}),(0,V.jsxs)(`div`,{className:`space-y-2 pt-2 border-t border-[#262421]`,children:[(0,V.jsxs)(`div`,{className:`flex items-center justify-between text-xs font-bold text-[#8c8c8c] uppercase`,children:[(0,V.jsxs)(`div`,{className:`flex items-center gap-2`,children:[A>0?(0,V.jsx)(hr,{size:14}):(0,V.jsx)(gr,{size:14}),` Master Volume`]}),(0,V.jsxs)(`span`,{children:[Math.round(A*100),`%`]})]}),(0,V.jsx)(`div`,{className:`pt-2`,children:(0,V.jsx)(`input`,{type:`range`,min:`0`,max:`1`,step:`0.1`,value:A,onChange:e=>re(parseFloat(e.target.value)),className:`w-full`})})]})]}),(0,V.jsxs)(`div`,{className:`space-y-3`,children:[(0,V.jsxs)(`div`,{className:`grid grid-cols-2 gap-3`,children:[(0,V.jsx)(Jr,{onClick:()=>le(`quiz`),className:`w-full py-4 text-sm sm:text-base`,icon:qn,children:`Quiz`}),(0,V.jsx)(Jr,{onClick:()=>le(`reading`),variant:`blue`,className:`w-full py-4 text-sm sm:text-base`,icon:Yn,children:`Reading`})]}),(0,V.jsx)(Jr,{variant:`secondary`,onClick:()=>t(`editor`),className:`w-full py-3`,icon:ur,children:`Import JSON`})]})]})]})})}):e===`editor`?(0,V.jsx)(`div`,{className:`min-h-screen flex items-center justify-center sm:p-4 bg-[#161512]`,children:(0,V.jsx)(qr,{title:`Import Data`,className:`w-full h-screen sm:h-[85vh] sm:min-h-[700px] sm:max-h-[900px] flex flex-col border-none sm:border-solid`,onReset:_e,children:(0,V.jsxs)(`div`,{className:`flex flex-col h-full`,children:[(0,V.jsx)(`input`,{type:`file`,accept:`.json`,ref:ae,onChange:me,className:`hidden`}),(0,V.jsxs)(`div`,{className:`bg-[#1b1a19] border-b border-[#383634] p-2 flex justify-between items-center shrink-0`,children:[(0,V.jsxs)(`div`,{className:`flex gap-1 sm:gap-2`,children:[(0,V.jsx)(Jr,{variant:`ghost`,onClick:he,className:`h-8 text-xs px-2 sm:px-4`,icon:Gn,children:(0,V.jsx)(`span`,{className:`hidden sm:inline`,children:`Load File`})}),(0,V.jsx)(Jr,{variant:`ghost`,onClick:pe,className:`h-8 text-xs px-2 sm:px-4`,icon:Wn,children:(0,V.jsx)(`span`,{className:`hidden sm:inline`,children:`Paste`})})]}),(0,V.jsxs)(`div`,{className:`flex gap-2`,children:[(0,V.jsx)(Jr,{variant:`ghost`,onClick:fe,className:`h-8 text-xs px-2 sm:px-4`,children:`Cancel`}),(0,V.jsx)(Jr,{onClick:ge,icon:Hn,className:`h-8 text-xs px-2 sm:px-4 shrink-0`,children:`Save`})]})]}),(0,V.jsx)(`div`,{className:`flex-1 relative`,children:(0,V.jsx)(`textarea`,{className:`w-full h-full p-4 font-mono text-sm bg-[#161512] text-[#85A94E] resize-none focus:outline-none placeholder:text-[#383634]`,value:j,onChange:e=>M(e.target.value),spellCheck:!1,placeholder:`Paste JSON...`})}),(0,V.jsx)(`div`,{className:`bg-[#1b1a19] p-3 sm:p-4 border-t border-[#383634] flex justify-center items-center shrink-0`,children:(0,V.jsx)(`div`,{className:`flex-1`,children:N?(0,V.jsxs)(`span`,{className:`text-[#cc3333] text-xs sm:text-sm font-bold flex items-center gap-2`,children:[(0,V.jsx)(_r,{size:16,className:`shrink-0`}),` `,(0,V.jsx)(`span`,{className:`truncate`,children:N})]}):(0,V.jsxs)(`span`,{className:`text-[#8c8c8c] text-xs sm:text-sm font-bold flex items-center gap-2`,children:[(0,V.jsx)(Kn,{size:16,className:`shrink-0`}),` JSON Valid`]})})})]})})}):e===`result`?(0,V.jsx)(`div`,{className:`min-h-screen flex items-center justify-center sm:p-4 bg-[#161512]`,children:(0,V.jsx)(qr,{title:`Session Complete`,className:`w-full h-screen sm:h-[60vh] sm:min-h-[500px] sm:max-h-[700px] flex flex-col border-none sm:border-solid`,onReset:_e,children:(0,V.jsxs)(`div`,{className:`flex-1 flex flex-col items-center justify-center p-4 sm:p-8 space-y-8 text-center overflow-y-auto`,children:[n===`quiz`?(0,V.jsxs)(V.Fragment,{children:[(0,V.jsxs)(`div`,{className:`space-y-2`,children:[(0,V.jsx)(`h2`,{className:`text-xl sm:text-2xl font-bold text-[#8c8c8c] uppercase tracking-widest`,children:`Accuracy`}),(0,V.jsxs)(`div`,{className:`text-5xl sm:text-6xl font-bold text-[#dbd9d6]`,children:[Math.round(u/o.length*100),`%`]})]}),(0,V.jsx)(`div`,{className:`bg-[#1b1a19] border border-[#383634] px-6 sm:px-8 py-4 rounded-sm w-full max-w-sm`,children:(0,V.jsxs)(`p`,{className:`text-base sm:text-lg text-[#dbd9d6]`,children:[(0,V.jsx)(`span`,{className:`text-[#629924] font-bold`,children:u}),` correct out of `,(0,V.jsx)(`span`,{className:`font-bold`,children:o.length})]})})]}):(0,V.jsxs)(V.Fragment,{children:[(0,V.jsxs)(`div`,{className:`space-y-2`,children:[(0,V.jsx)(`h2`,{className:`text-xl sm:text-2xl font-bold text-[#8c8c8c] uppercase tracking-widest`,children:`Words Read`}),(0,V.jsx)(`div`,{className:`text-5xl sm:text-6xl font-bold text-[#dbd9d6]`,children:o.length})]}),(0,V.jsx)(`div`,{className:`bg-[#1b1a19] border border-[#383634] px-6 sm:px-8 py-4 rounded-sm w-full max-w-sm`,children:(0,V.jsx)(`p`,{className:`text-base sm:text-lg text-[#dbd9d6]`,children:`Reading session completed.`})})]}),(0,V.jsxs)(`div`,{className:`pt-4 sm:pt-8 w-full max-w-xs space-y-3`,children:[n===`quiz`&&y.length>0&&(0,V.jsxs)(Jr,{onClick:ue,variant:`blue`,className:`w-full py-4`,icon:cr,children:[`Review Mistakes (`,y.length,`)`]}),(0,V.jsx)(Jr,{onClick:fe,className:`w-full py-4`,icon:sr,children:`Return to Start`})]})]})})}):(0,V.jsx)(`div`,{className:`min-h-screen flex items-center justify-center sm:p-4 bg-[#161512]`,children:(0,V.jsxs)(qr,{title:`${n===`quiz`?`Quiz`:`Reading`} : ${c+1} / ${o.length}`,className:`w-full h-screen sm:h-[85vh] sm:min-h-[700px] sm:max-h-[900px] flex flex-col border-none sm:border-solid`,onReset:_e,children:[(0,V.jsx)(`div`,{className:`h-1 w-full bg-[#1b1a19] shrink-0`,children:(0,V.jsx)(`div`,{className:`h-full transition-all duration-300 ${n===`reading`?`bg-[#1b78d0]`:`bg-[#629924]`}`,style:{width:`${c/o.length*100}%`}})}),(0,V.jsxs)(`div`,{className:`flex-1 flex flex-col overflow-hidden`,children:[(0,V.jsxs)(`div`,{className:`flex-1 flex flex-col items-center justify-center p-4 sm:p-8 relative overflow-y-auto`,children:[(0,V.jsxs)(`div`,{className:`absolute top-2 right-4 sm:top-4 sm:right-6 text-[10px] sm:text-xs font-bold text-[#8c8c8c] uppercase flex flex-col items-end gap-1`,children:[(0,V.jsxs)(`span`,{children:[`ID: `,F.id]}),(0,V.jsx)(`span`,{className:`hidden sm:inline`,children:F.source})]}),(0,V.jsxs)(`div`,{className:`mb-4 flex items-center gap-3 mt-4 sm:mt-0`,children:[(0,V.jsx)(`div`,{className:`px-3 py-1 bg-[#1b1a19] border border-[#383634] rounded-sm text-[#8c8c8c] text-xs font-bold uppercase tracking-widest`,children:F.pos}),(0,V.jsx)(`button`,{onClick:e=>{e.currentTarget.blur(),R()},disabled:te,className:`p-1.5 text-[#8c8c8c] hover:text-[#dbd9d6] hover:bg-[#383634] rounded-sm transition-colors disabled:opacity-50 focus:outline-none`,title:`Play Audio`,children:A>0?(0,V.jsx)(hr,{size:18}):(0,V.jsx)(gr,{size:18})})]}),(0,V.jsx)(`h2`,{className:`text-3xl sm:text-4xl md:text-6xl font-bold text-white tracking-tight text-center break-words max-w-full`,children:F.word}),F.pronunciation&&(0,V.jsx)(`div`,{className:`mt-2 text-lg sm:text-xl md:text-2xl text-[#8c8c8c] font-ipa tracking-wide`,children:F.pronunciation})]}),(0,V.jsx)(`div`,{className:`h-1/2 sm:h-auto sm:min-h-[20rem] bg-[#1b1a19] border-t border-[#383634] relative flex flex-col overflow-y-auto shrink-0`,children:n===`reading`?(0,V.jsxs)(`div`,{className:`flex-1 flex flex-col p-4 sm:p-6 h-full min-h-[14rem] sm:min-h-[16rem]`,children:[(0,V.jsxs)(`div`,{className:`flex-1 flex flex-col justify-center items-center text-center space-y-4`,children:[(0,V.jsxs)(`div`,{className:`text-xl sm:text-2xl`,children:[(0,V.jsx)(`span`,{className:`text-[#8c8c8c] text-base sm:text-lg`,children:`Meaning: `}),(0,V.jsx)(`span`,{className:`text-white font-bold`,children:F.meaning})]}),F.context&&(0,V.jsxs)(`div`,{className:`text-[#dbd9d6] italic text-sm sm:text-base max-w-lg mt-2 sm:mt-4 px-4 border-l-4 border-[#383634] text-left`,children:[(0,V.jsx)(`div`,{children:F.context}),F.context_translation&&(0,V.jsx)(`div`,{className:`text-xs sm:text-sm text-[#8c8c8c] not-italic mt-1`,children:F.context_translation})]})]}),(0,V.jsxs)(`div`,{className:`mt-4 sm:mt-8 flex gap-3 pb-2 shrink-0`,children:[(0,V.jsxs)(Jr,{onClick:e=>{e.currentTarget.blur(),O(!D)},variant:D?`secondary`:`blue`,className:`flex-1 py-3 sm:py-4 text-sm sm:text-lg shrink-0`,icon:D?rr:ar,children:[(0,V.jsx)(`span`,{className:`hidden sm:inline`,children:D?`Pause Auto-play`:`Resume Auto-play`}),(0,V.jsx)(`span`,{className:`sm:hidden`,children:D?`Pause`:`Resume`})]}),!D&&(0,V.jsx)(Jr,{onClick:e=>{e.currentTarget.blur(),ce()},variant:`secondary`,className:`flex-1 py-3 sm:py-4 text-sm sm:text-lg shrink-0`,children:`Next`})]})]}):(0,V.jsx)(V.Fragment,{children:f?(0,V.jsxs)(`div`,{className:`flex-1 flex flex-col p-4 sm:p-6 h-full min-h-[14rem] sm:min-h-[16rem]`,children:[(0,V.jsxs)(`div`,{className:`flex-1 flex flex-col justify-center items-center text-center space-y-4`,children:[(0,V.jsxs)(`div`,{className:`text-xl sm:text-2xl font-bold flex items-center gap-2 ${m?`text-[#629924]`:`text-[#cc3333]`}`,children:[m?(0,V.jsx)(Hn,{size:28,className:`sm:w-8 sm:h-8`}):(0,V.jsx)(_r,{size:28,className:`sm:w-8 sm:h-8`}),m?`Correct`:`Inaccuracy`]}),(0,V.jsxs)(`div`,{className:`text-lg sm:text-xl`,children:[(0,V.jsx)(`span`,{className:`text-[#8c8c8c]`,children:`Meaning: `}),(0,V.jsx)(`span`,{className:`text-white font-bold`,children:F.meaning})]}),F.context&&(0,V.jsxs)(`div`,{className:`text-[#dbd9d6] italic text-sm sm:text-base max-w-lg mt-2 sm:mt-4 px-4 border-l-4 border-[#383634] text-left`,children:[(0,V.jsx)(`div`,{children:F.context}),F.context_translation&&(0,V.jsx)(`div`,{className:`text-xs sm:text-sm text-[#8c8c8c] not-italic mt-1`,children:F.context_translation})]})]}),(0,V.jsx)(`div`,{className:`mt-4 sm:mt-8 pb-2 shrink-0`,children:(0,V.jsx)(Jr,{onClick:e=>{e.currentTarget.blur(),ce()},className:`w-full py-3 sm:py-4 text-base sm:text-lg shrink-0`,children:`Next`})})]}):(0,V.jsx)(`div`,{className:`grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 p-4 sm:p-6 h-full min-h-[14rem] sm:min-h-[16rem]`,children:g.map((e,t)=>(0,V.jsx)(`button`,{onClick:t=>{t.currentTarget.blur(),de(e.isCorrect)},className:`bg-[#262421] border border-[#383634] hover:bg-[#383634] hover:border-[#8c8c8c] focus:outline-none text-lg sm:text-xl font-bold text-[#dbd9d6] rounded-sm transition-colors active:bg-[#454341] flex items-center justify-center p-3 sm:p-4`,children:e.text},t))})})})]})]})})}function Xr(){return(0,V.jsx)(`div`,{className:`w-full h-full overflow-auto bg-white text-black`,dangerouslySetInnerHTML:{__html:`<style>
      :root {
        --body-bg: #ffffff;
        --text-color: #212529;
        --heading-color: #333333;
        --border-color: #dee2e6;
        --table-stripe: #f8f9fa;
        --link-color: #0d6efd;
        --chapter-color: #c92a2a;
        --tip-bg: #fdf6e3;
        --tip-border: #f6e0b5;
        --tip-text: #5c4b27;
      }

      body {
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
        font-size: 1rem;
        font-weight: 400;
        line-height: 1.6;
        color: var(--text-color);
        background-color: var(--body-bg);
        margin: 0;
        padding: 2rem 1rem;
        max-width: 900px;
        margin-left: auto;
        margin-right: auto;
      }

      h1, h2, h3 {
        margin-top: 2.5rem;
        margin-bottom: 1rem;
        font-weight: 600;
        line-height: 1.2;
        color: var(--heading-color);
      }

      h1 { 
        font-size: 2.25rem; 
        border-bottom: 2px solid var(--border-color); 
        padding-bottom: 0.5rem;
      }
      
      h2 { 
        font-size: 1.5rem; 
        color: var(--chapter-color);
        border-bottom: 1px solid var(--border-color);
        padding-bottom: 0.3rem;
        display: flex;
        align-items: baseline;
      }
      
      h2 span.chap-num {
        font-size: 2rem;
        font-weight: bold;
        margin-right: 0.5rem;
      }

      p {
        margin-top: 0;
        margin-bottom: 1rem;
      }

      .table-responsive {
        overflow-x: auto;
        -webkit-overflow-scrolling: touch;
        margin-bottom: 2rem;
      }

      table {
        width: 100%;
        margin-bottom: 1rem;
        vertical-align: top;
        border-collapse: collapse;
        font-size: 0.95rem;
      }

      th, td {
        padding: 0.85rem 0.75rem;
        border-bottom: 1px solid var(--border-color);
        text-align: left;
        vertical-align: top;
      }

      th {
        font-weight: 600;
        background-color: var(--body-bg);
        border-bottom: 2px solid var(--border-color);
        border-top: 2px solid var(--border-color);
      }

      tbody tr:nth-of-type(odd) {
        background-color: var(--table-stripe);
      }

      strong {
        font-weight: 700;
        color: #000;
        background-color: #fff3cd; 
        padding: 0 0.2rem;
        border-radius: 3px;
      }

      .term-en {
        font-weight: 600;
        display: block;
        margin-bottom: 0.3rem;
      }

      .tip-box {
        background-color: var(--tip-bg);
        border: 1px solid var(--tip-border);
        color: var(--tip-text);
        padding: 0.5rem;
        border-radius: 4px;
        font-size: 0.85rem;
        margin-top: 0.5rem;
        line-height: 1.4;
      }
      
      .tip-box strong {
        background-color: transparent;
        color: var(--tip-text);
      }

      .guide-box {
        background-color: #e9ecef;
        border-left: 4px solid var(--chapter-color);
        padding: 1rem;
        border-radius: 0 4px 4px 0;
        margin-bottom: 2rem;
      }
      .guide-box h3 {
        margin-top: 0;
        font-size: 1.1rem;
        border-bottom: none;
      }
      .guide-box ul {
        padding-left: 1.5rem;
        margin-bottom: 0;
      }
      .guide-box li {
        margin-bottom: 0.5rem;
      }

      .toc {
        background-color: var(--table-stripe);
        padding: 1.5rem;
        border-radius: 0.5rem;
        margin-bottom: 2rem;
        border: 1px solid var(--border-color);
      }
      .toc h2 {
        margin-top: 0;
        border-bottom: none;
        font-size: 1.2rem;
        color: var(--heading-color);
      }
      .toc ul {
        list-style-type: none;
        padding-left: 0;
        margin-bottom: 0;
        column-count: 2;
      }
      @media (max-width: 600px) {
        .toc ul { column-count: 1; }
      }
      .toc li {
        margin-bottom: 0.5rem;
      }
      .toc a {
        color: var(--link-color);
        text-decoration: none;
      }
      .toc a:hover {
        text-decoration: underline;
      }
    </style>


    <h1>英文法用語集 <br><small style="font-size: 1.2rem; color: #666;">(語源・Tips 完全収録版)</small></h1>
    <p>単語の成り立ち（語源）から文法の意味をひもとく、読んで納得できる用語集です。</p>

    <div class="toc">
      <h2>目次 (Contents)</h2>
      <ul>
        <li><a href="#matrix">🌟 特別マップ：文の要素と品詞の対応表</a></li>
        <li><a href="#chap1">1. 文のしくみ</a></li>
        <li><a href="#chap2">2. 動詞と助動詞</a></li>
        <li><a href="#chap3">3. 名詞と代名詞</a></li>
        <li><a href="#chap4">4. 冠詞と形容詞と副詞</a></li>
        <li><a href="#chap5">5. さまざまな文</a></li>
        <li><a href="#chap6">6. 文型と句</a></li>
        <li><a href="#chap7">7. 比較表現</a></li>
        <li><a href="#chap8">8. 受け身表現</a></li>
        <li><a href="#chap9">9. 現在完了</a></li>
        <li><a href="#chap10">10-11. 句で表す (不定詞・動名詞・分詞)</a></li>
        <li><a href="#chap12">12. 前置詞</a></li>
        <li><a href="#chap13">13. 節で表す(1) 接続詞と疑問詞</a></li>
        <li><a href="#chap14">14. 節で表す(2) 関係代名詞</a></li>
        <li><a href="#chap15">15. 仮定法と発展学習</a></li>
      </ul>
    </div>

    <!-- 特別マップ -->
    <h2 id="matrix"><span style="font-size: 1.5rem; margin-right: 0.5rem;">🌟</span> 特別マップ：文の要素と品詞の対応リスト</h2>
    <p>この表は、<strong>「ある特定の席（エレメント）に、どの材料（品詞）を放り込めるか」</strong>を一覧化したものです。</p>
    <div class="table-responsive">
      <table>
        <thead>
          <tr>
            <th style="width: 40%;">エレメント / 文の要素 (Sentence Element)</th>
            <th style="width: 60%;">活用される品詞 (Parts of Speech)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>S：Subject</strong>（主語）</td>
            <td>名詞・代名詞 (Noun / Pronoun)</td>
          </tr>
          <tr>
            <td><strong>V：Verb</strong>（述語動詞）</td>
            <td>動詞 (Verb)</td>
          </tr>
          <tr>
            <td><strong>O：Object</strong>（目的語）</td>
            <td>名詞・代名詞 (Noun / Pronoun)</td>
          </tr>
          <tr>
            <td><strong>C：Complement</strong>（補語）</td>
            <td>名詞・代名詞 (Noun / Pronoun)<br>形容詞 (Adjective)</td>
          </tr>
          <tr>
            <td><strong>M：Modifier</strong>（修飾語）</td>
            <td>形容詞 (Adjective)<br>副詞 (Adverb)</td>
          </tr>
        </tbody>
      </table>
    </div>

    <div class="guide-box">
      <h3>このリストの活用ガイド</h3>
      <ul>
        <li><strong>骨組み（S / V / O）：</strong> ここには基本的に「名詞」と「動詞」しか入りません。文のメインメッセージを作る、重厚なパーツたちです。</li>
        <li><strong>説明役（C）：</strong> 「S＝C」や「O＝C」というイコール関係を作る席です。名前（名詞）を置くこともあれば、様子（形容詞）を置くこともあります。</li>
        <li><strong>飾り（M）：</strong> 文を豊かにする「修飾語」の席です。名詞を詳しくするなら形容詞、それ以外（動きや程度）を詳しくするなら副詞を使い分けます。</li>
      </ul>
      <p style="margin-top: 1rem; margin-bottom: 0;">💡 こうして2列に絞ると、「名詞」がいかに多くの席（S, O, C）を兼任しているか、そして<strong>「副詞」がいかに「M」という役割に特化しているか</strong>が際立ちますね。</p>
    </div>

    <!-- 1章 -->
    <h2 id="chap1"><span class="chap-num">1</span> 文のしくみ</h2>
    <div class="table-responsive">
      <table>
        <thead>
          <tr>
            <th style="width: 18%;">日本語名称</th>
            <th style="width: 42%;">英語名称 / 語源・Tips</th>
            <th style="width: 40%;">例文 (該当部太字)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>一般動詞</td>
            <td>
              <span class="term-en">Action / Ordinary Verb</span>
            </td>
            <td>I <strong>play</strong> baseball.</td>
          </tr>
          <tr>
            <td>be動詞</td>
            <td>
              <span class="term-en">be Verb</span>
              <div class="tip-box">💡 「存在する(be)」という意味が根本にあります。</div>
            </td>
            <td>He <strong>is</strong> a doctor.</td>
          </tr>
          <tr>
            <td>主語 (S)</td>
            <td>
              <span class="term-en">Subject</span>
              <div class="tip-box">💡 <strong>sub（下に）＋ ject（投げる）</strong><br>文の土台として、一番下にドンと置かれた主題のこと。</div>
            </td>
            <td><strong>My mother</strong> is kind.</td>
          </tr>
          <tr>
            <td>目的語 (O)</td>
            <td>
              <span class="term-en">Object</span>
              <div class="tip-box">💡 <strong>ob（向かって）＋ ject（投げる）</strong><br>動詞の動作が「向かって投げられる」対象のマトのこと。</div>
            </td>
            <td>I know <strong>him</strong>.</td>
          </tr>
          <tr>
            <td>補語 (C)</td>
            <td>
              <span class="term-en">Complement</span>
              <div class="tip-box">💡 <strong>com（完全に）＋ ple（満たす）</strong><br>S=Cなどの関係を作り、意味が足りない文を「完全に満たす（補う）」役割。</div>
            </td>
            <td>She became <strong>a teacher</strong>.</td>
          </tr>
          <tr>
            <td>肯定文</td>
            <td><span class="term-en">Affirmative Sentence</span></td>
            <td><strong>I like apples.</strong></td>
          </tr>
          <tr>
            <td>否定文</td>
            <td>
              <span class="term-en">Negative Sentence</span>
              <div class="tip-box">💡 <strong>neg（ない）</strong>が含まれます。ネガティブ（後ろ向きな）と同じ語源です。</div>
            </td>
            <td>I <strong>do not</strong> like apples.</td>
          </tr>
          <tr>
            <td>疑問文</td>
            <td>
              <span class="term-en">Interrogative Sentence</span>
              <div class="tip-box">💡 <strong>inter（間に）＋ rogare（尋ねる）</strong><br>相手との間に入って問いかけるイメージ。</div>
            </td>
            <td><strong>Do</strong> you like apples<strong>?</strong></td>
          </tr>
        </tbody>
      </table>
    </div>

    <!-- 2章 -->
    <h2 id="chap2"><span class="chap-num">2</span> 動詞と助動詞</h2>
    <div class="table-responsive">
      <table>
        <thead>
          <tr>
            <th style="width: 18%;">日本語名称</th>
            <th style="width: 42%;">英語名称 / 語源・Tips</th>
            <th style="width: 40%;">例文 (該当部太字)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>過去形</td>
            <td>
              <span class="term-en">Past Tense</span>
              <div class="tip-box">💡 <strong>pass（過ぎ去る）</strong>から派生。</div>
            </td>
            <td>I <strong>watched</strong> TV yesterday.</td>
          </tr>
          <tr>
            <td>未来表現</td>
            <td><span class="term-en">Future Expression</span></td>
            <td>I <strong>will</strong> call you. / I <strong>am going to</strong> run.</td>
          </tr>
          <tr>
            <td>進行形</td>
            <td>
              <span class="term-en">Progressive / Continuous</span>
              <div class="tip-box">💡 <strong>pro（前へ）＋ gress（進む）</strong><br>まさに今、動作が前に進んでいる最中であることを示します。</div>
            </td>
            <td>He <strong>is reading</strong> a book now.</td>
          </tr>
          <tr>
            <td>助動詞</td>
            <td>
              <span class="term-en">Auxiliary / Modal Verb</span>
              <div class="tip-box">💡 <strong>auxiliary（補助の）</strong><br>メインの動詞に「能力(can)」「義務(must)」などの気分(Mode=Modal)を添えて助けます。</div>
            </td>
            <td>You <strong>can</strong> swim fast.</td>
          </tr>
        </tbody>
      </table>
    </div>

    <!-- 3章 -->
    <h2 id="chap3"><span class="chap-num">3</span> 名詞と代名詞</h2>
    <div class="table-responsive">
      <table>
        <thead>
          <tr>
            <th style="width: 18%;">日本語名称</th>
            <th style="width: 42%;">英語名称 / 語源・Tips</th>
            <th style="width: 40%;">例文 (該当部太字)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>可算名詞 (数えられる)</td>
            <td><span class="term-en">Countable Noun</span></td>
            <td>I have an <strong>apple</strong>.</td>
          </tr>
          <tr>
            <td>不可算名詞 (数えられない)</td>
            <td>
              <span class="term-en">Uncountable Noun</span>
              <div class="tip-box">💡 水や空気など、決まった形がなく「1個、2個」と数えられないもの。</div>
            </td>
            <td>I drink <strong>water</strong>.</td>
          </tr>
          <tr>
            <td>複数形</td>
            <td>
              <span class="term-en">Plural Form</span>
              <div class="tip-box">💡 <strong>plus（より多く）</strong>と同じ語源。1つより多いことを表します。</div>
            </td>
            <td>I like <strong>dogs</strong>.</td>
          </tr>
          <tr>
            <td>指示代名詞</td>
            <td>
              <span class="term-en">Demonstrative Pronoun</span>
              <div class="tip-box">💡 指をさしてデモンストレーション（明示）する代名詞。</div>
            </td>
            <td><strong>This</strong> is my pen.</td>
          </tr>
          <tr>
            <td>所有格</td>
            <td><span class="term-en">Possessive Case</span></td>
            <td>This is <strong>my</strong> book.</td>
          </tr>
          <tr>
            <td>所有代名詞</td>
            <td>
              <span class="term-en">Possessive Pronoun</span>
              <div class="tip-box">💡 <strong>pro（〜の代わりに）＋ noun（名詞）</strong><br>my book の代わりに mine と一言で済ませる便利な代役。</div>
            </td>
            <td>That car is <strong>hers</strong>.</td>
          </tr>
          <tr>
            <td>不定代名詞</td>
            <td>
              <span class="term-en">Indefinite Pronoun</span>
              <div class="tip-box">💡 特定の「これ！」と定まっていない（in-definite）人やモノを指す言葉です。</div>
            </td>
            <td>Do you have <strong>any</strong> questions?</td>
          </tr>
        </tbody>
      </table>
    </div>

    <!-- 4章 -->
    <h2 id="chap4"><span class="chap-num">4</span> 冠詞と形容詞と副詞</h2>
    <div class="table-responsive">
      <table>
        <thead>
          <tr>
            <th style="width: 18%;">日本語名称</th>
            <th style="width: 42%;">英語名称 / 語源・Tips</th>
            <th style="width: 40%;">例文 (該当部太字)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>不定冠詞 (a/an)</td>
            <td><span class="term-en">Indefinite Article</span></td>
            <td>It is <strong>a</strong> cat.</td>
          </tr>
          <tr>
            <td>定冠詞 (the)</td>
            <td>
              <span class="term-en">Definite Article</span>
              <div class="tip-box">💡 <strong>article（小さな関節・部品）</strong><br>話し手と聞き手の間で「あ、アレね」とバッチリ定まっている(definite)名詞にくっつく部品。</div>
            </td>
            <td>Look at <strong>the</strong> sky.</td>
          </tr>
          <tr>
            <td>形容詞</td>
            <td>
              <span class="term-en">Adjective</span>
              <div class="tip-box">💡 <strong>ad（〜へ）＋ ject（投げる）</strong><br>名詞のそばに「付け足して投げられた」言葉。名詞を飾ります。</div>
            </td>
            <td>It is a <strong>big</strong> tree.</td>
          </tr>
          <tr>
            <td>副詞</td>
            <td>
              <span class="term-en">Adverb</span>
              <div class="tip-box">💡 <strong>ad（〜へ）＋ verb（動詞）</strong><br>主に動詞に向かって意味を付け足す言葉。名詞「以外」を飾ります。</div>
            </td>
            <td>He runs <strong>very fast</strong>.</td>
          </tr>
        </tbody>
      </table>
    </div>

    <!-- 5章 -->
    <h2 id="chap5"><span class="chap-num">5</span> さまざまな文</h2>
    <div class="table-responsive">
      <table>
        <thead>
          <tr>
            <th style="width: 18%;">日本語名称</th>
            <th style="width: 42%;">英語名称 / 語源・Tips</th>
            <th style="width: 40%;">例文 (該当部太字)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>疑問詞</td>
            <td><span class="term-en">Interrogative Word</span></td>
            <td><strong>What</strong> is this?</td>
          </tr>
          <tr>
            <td>存在を表す文</td>
            <td>
              <span class="term-en">Existential Sentence</span>
            </td>
            <td><strong>There is</strong> a book on the desk.</td>
          </tr>
          <tr>
            <td>命令文</td>
            <td>
              <span class="term-en">Imperative Sentence</span>
              <div class="tip-box">💡 <strong>皇帝（Emperor）</strong>と同じ語源。権力を持って相手に命じる強いニュアンスを含みます。</div>
            </td>
            <td><strong>Stand up.</strong> / <strong>Be</strong> quiet.</td>
          </tr>
          <tr>
            <td>感嘆文</td>
            <td>
              <span class="term-en">Exclamatory Sentence</span>
              <div class="tip-box">💡 <strong>ex（外へ）＋ clamare（叫ぶ）</strong><br>感情が思わず外に叫び出てしまった文です。</div>
            </td>
            <td><strong>How</strong> beautiful this flower is<strong>!</strong></td>
          </tr>
        </tbody>
      </table>
    </div>

    <!-- 6章 -->
    <h2 id="chap6"><span class="chap-num">6</span> 文型と句</h2>
    <div class="table-responsive">
      <table>
        <thead>
          <tr>
            <th style="width: 18%;">日本語名称</th>
            <th style="width: 42%;">英語名称 / 語源・Tips</th>
            <th style="width: 40%;">例文 (該当部太字)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>補語のある文 (SVC)</td>
            <td><span class="term-en">SVC Pattern</span></td>
            <td>She <strong>looks happy</strong>.</td>
          </tr>
          <tr>
            <td>目的語が2つある文 (SVOO)</td>
            <td><span class="term-en">SVOO Pattern</span></td>
            <td>He gave <strong>me a ring</strong>.</td>
          </tr>
          <tr>
            <td>目的語に補語がつく文 (SVOC)</td>
            <td><span class="term-en">SVOC Pattern</span></td>
            <td>We call <strong>him Ken</strong>.</td>
          </tr>
          <tr>
            <td>句</td>
            <td>
              <span class="term-en">Phrase</span>
              <div class="tip-box">💡 ギリシャ語の「話すこと」が語源。SとVを含まない、2語以上でできた意味のカタマリのことです。</div>
            </td>
            <td>The cat <strong>under the table</strong> is cute.</td>
          </tr>
        </tbody>
      </table>
    </div>

    <!-- 7章 -->
    <h2 id="chap7"><span class="chap-num">7</span> 比較表現</h2>
    <div class="table-responsive">
      <table>
        <thead>
          <tr>
            <th style="width: 18%;">日本語名称</th>
            <th style="width: 42%;">英語名称 / 語源・Tips</th>
            <th style="width: 40%;">例文 (該当部太字)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>原級</td>
            <td><span class="term-en">Positive Degree</span></td>
            <td>He is <strong>as tall as</strong> you.</td>
          </tr>
          <tr>
            <td>比較級</td>
            <td>
              <span class="term-en">Comparative Degree</span>
              <div class="tip-box">💡 <strong>com（共に）＋ par（等しい）</strong><br>2つのものを横に並べて見比べる（ペアにする）こと。</div>
            </td>
            <td>This bag is <strong>bigger than</strong> that one.</td>
          </tr>
          <tr>
            <td>最上級</td>
            <td>
              <span class="term-en">Superlative Degree</span>
              <div class="tip-box">💡 <strong>super（上に）＋ lative（運ばれた）</strong><br>他のみんなよりも一番上に持ち上げられた、最高の状態。</div>
            </td>
            <td>Mt. Fuji is <strong>the highest</strong> in Japan.</td>
          </tr>
        </tbody>
      </table>
    </div>

    <!-- 8章 -->
    <h2 id="chap8"><span class="chap-num">8</span> 受け身表現</h2>
    <div class="table-responsive">
      <table>
        <thead>
          <tr>
            <th style="width: 18%;">日本語名称</th>
            <th style="width: 42%;">英語名称 / 語源・Tips</th>
            <th style="width: 40%;">例文 (該当部太字)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>能動態</td>
            <td>
              <span class="term-en">Active Voice</span>
              <div class="tip-box">💡 <strong>act（行動する）</strong><br>主語が自ら積極的に動作を行う形です。</div>
            </td>
            <td><strong>Everybody loves</strong> him.</td>
          </tr>
          <tr>
            <td>受動態 (受け身)</td>
            <td>
              <span class="term-en">Passive Voice</span>
              <div class="tip-box">💡 <strong>pass（受ける・耐える）</strong><br>パッション（キリストの受難）と同語源。動作を「受ける」側が主役になります。</div>
            </td>
            <td>He <strong>is loved by</strong> everybody.</td>
          </tr>
        </tbody>
      </table>
    </div>

    <!-- 9章 -->
    <h2 id="chap9"><span class="chap-num">9</span> 現在完了</h2>
    <div class="table-responsive">
      <table>
        <thead>
          <tr>
            <th style="width: 18%;">日本語名称</th>
            <th style="width: 42%;">英語名称 / 語源・Tips</th>
            <th style="width: 40%;">例文 (該当部太字)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>完了・結果</td>
            <td>
              <span class="term-en">Completion / Result</span>
              <div class="tip-box">💡 完了形(Perfect)は <strong>per（完全に）＋ fect（なされた）</strong>。過去の出来事が「今」に繋がっているパーフェクトな状態を表します。</div>
            </td>
            <td>I <strong>have just finished</strong> my homework.</td>
          </tr>
          <tr>
            <td>経験</td>
            <td><span class="term-en">Experience</span></td>
            <td>I <strong>have visited</strong> Kyoto twice.</td>
          </tr>
          <tr>
            <td>継続</td>
            <td><span class="term-en">Continuation</span></td>
            <td>I <strong>have lived</strong> here for 10 years.</td>
          </tr>
        </tbody>
      </table>
    </div>

    <!-- 10章 & 11章 -->
    <h2 id="chap10"><span class="chap-num">10-11</span> 句で表す (不定詞・動名詞・分詞)</h2>
    <div class="table-responsive">
      <table>
        <thead>
          <tr>
            <th style="width: 18%;">日本語名称</th>
            <th style="width: 42%;">英語名称 / 語源・Tips</th>
            <th style="width: 40%;">例文 (該当部太字)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>不定詞 (名詞的用法)</td>
            <td>
              <span class="term-en">Infinitive (Noun Use)</span>
              <div class="tip-box">💡 <strong>in（ない）＋ finite（限られた）</strong><br>インフィニティ（無限）と同語源。主語の形（IやHe）に「限定されず」、常に原形で使える動詞のこと。</div>
            </td>
            <td>I like <strong>to play</strong> soccer.</td>
          </tr>
          <tr>
            <td>不定詞 (形容詞的用法)</td>
            <td><span class="term-en">Infinitive (Adjective Use)</span></td>
            <td>I have a lot of homework <strong>to do</strong>.</td>
          </tr>
          <tr>
            <td>不定詞 (副詞的用法)</td>
            <td><span class="term-en">Infinitive (Adverb Use)</span></td>
            <td>I went to the park <strong>to play</strong> soccer.</td>
          </tr>
          <tr>
            <td>動名詞</td>
            <td>
              <span class="term-en">Gerund</span>
              <div class="tip-box">💡 ラテン語の「なされるべきこと」に由来。動詞を無理やり名詞化したものです。</div>
            </td>
            <td><strong>Playing</strong> soccer is fun.</td>
          </tr>
          <tr>
            <td>分詞 (現在分詞)</td>
            <td>
              <span class="term-en">Present Participle</span>
              <div class="tip-box">💡 <strong>part（参加する・分け合う）</strong><br>動詞から派生して、形容詞の性質も「分け合っている」言葉です。</div>
            </td>
            <td>Look at the <strong>sleeping</strong> baby.</td>
          </tr>
          <tr>
            <td>分詞 (過去分詞)</td>
            <td><span class="term-en">Past Participle</span></td>
            <td>This is a <strong>broken</strong> window.</td>
          </tr>
        </tbody>
      </table>
    </div>

    <!-- 12章 -->
    <h2 id="chap12"><span class="chap-num">12</span> 前置詞</h2>
    <div class="table-responsive">
      <table>
        <thead>
          <tr>
            <th style="width: 18%;">日本語名称</th>
            <th style="width: 42%;">英語名称 / 語源・Tips</th>
            <th style="width: 40%;">例文 (該当部太字)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>前置詞 (場所・時など)</td>
            <td>
              <span class="term-en">Preposition</span>
              <div class="tip-box">💡 <strong>pre（前に）＋ position（置く）</strong><br>その名の通り、名詞の「前」に置かれて、位置関係や時を表す言葉です。</div>
            </td>
            <td>I live <strong>in</strong> Tokyo. / See you <strong>on</strong> Sunday.</td>
          </tr>
        </tbody>
      </table>
    </div>

    <!-- 13章 -->
    <h2 id="chap13"><span class="chap-num">13</span> 節で表す(1) 接続詞と疑問詞</h2>
    <div class="table-responsive">
      <table>
        <thead>
          <tr>
            <th style="width: 18%;">日本語名称</th>
            <th style="width: 42%;">英語名称 / 語源・Tips</th>
            <th style="width: 40%;">例文 (該当部太字)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>等位接続詞</td>
            <td>
              <span class="term-en">Coordinating Conjunction</span>
              <div class="tip-box">💡 <strong>con（共に）＋ junct（結ぶ）</strong><br>ジャンクション（交差点）と同じ語源。andやbutなど対等に結ぶグループ。</div>
            </td>
            <td>I am tired <strong>but</strong> happy.</td>
          </tr>
          <tr>
            <td>従属接続詞 (副詞節)</td>
            <td>
              <span class="term-en">Subordinating Conjunction</span>
            </td>
            <td><strong>When</strong> I was a child, I lived here.</td>
          </tr>
          <tr>
            <td>thatの節 (名詞節)</td>
            <td>
              <span class="term-en">That-clause (Noun Clause)</span>
              <div class="tip-box">💡 <strong>Clause（節）</strong>は「閉じる」が語源。クローゼットと同じで、SとVを含み、ある程度意味が完結(閉じた)カタマリのこと。</div>
            </td>
            <td>I think <strong>that</strong> he is right.</td>
          </tr>
          <tr>
            <td>間接疑問</td>
            <td>
              <span class="term-en">Indirect Question</span>
              <div class="tip-box">💡 疑問文が別の文の「一部（目的語など）」として組み込まれた形。</div>
            </td>
            <td>I don't know <strong>where he lives</strong>.</td>
          </tr>
        </tbody>
      </table>
    </div>

    <!-- 14章 -->
    <h2 id="chap14"><span class="chap-num">14</span> 節で表す(2) 関係代名詞</h2>
    <div class="table-responsive">
      <table>
        <thead>
          <tr>
            <th style="width: 18%;">日本語名称</th>
            <th style="width: 42%;">英語名称 / 語源・Tips</th>
            <th style="width: 40%;">例文 (該当部太字)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>主格の関係代名詞</td>
            <td>
              <span class="term-en">Subjective Relative Pronoun</span>
              <div class="tip-box">💡 <strong>re（後ろへ）＋ lative（運ぶ）</strong><br>前にある名詞（先行詞）と関係づけて、後ろの説明文へと意味を運んでつなぐ働きをします。</div>
            </td>
            <td>I know a boy <strong>who</strong> speaks French.</td>
          </tr>
          <tr>
            <td>目的格の関係代名詞</td>
            <td><span class="term-en">Objective Relative Pronoun</span></td>
            <td>This is the book <strong>which</strong> I bought.</td>
          </tr>
        </tbody>
      </table>
    </div>

    <!-- 15章 -->
    <h2 id="chap15"><span class="chap-num">15</span> 仮定法と発展学習</h2>
    <div class="table-responsive">
      <table>
        <thead>
          <tr>
            <th style="width: 18%;">日本語名称</th>
            <th style="width: 42%;">英語名称 / 語源・Tips</th>
            <th style="width: 40%;">例文 (該当部太字)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>仮定法</td>
            <td>
              <span class="term-en">Subjunctive Mood</span>
              <div class="tip-box">💡 <strong>sub（下に）＋ junct（結ぶ）</strong><br>現実の世界の下に従属している「頭の中の想像・反事実」の世界を結びつける文法です。</div>
            </td>
            <td>If I <strong>were</strong> a bird, I <strong>could</strong> fly.</td>
          </tr>
          <tr>
            <td>付加疑問</td>
            <td><span class="term-en">Tag Question</span></td>
            <td>You are a student, <strong>aren't you?</strong></td>
          </tr>
          <tr>
            <td>直接話法・間接話法</td>
            <td><span class="term-en">Direct / Indirect Speech</span></td>
            <td>He <strong>said to me, "I am tired."</strong></td>
          </tr>
          <tr>
            <td>知覚動詞</td>
            <td><span class="term-en">Verb of Perception</span></td>
            <td>I <strong>saw</strong> him <strong>cross</strong> the street.</td>
          </tr>
          <tr>
            <td>使役動詞</td>
            <td>
              <span class="term-en">Causative Verb</span>
              <div class="tip-box">💡 <strong>cause（原因・引き起こす）</strong><br>他人に何かをさせる（引き起こす）動詞。make, have, let など。</div>
            </td>
            <td>He <strong>made</strong> me <strong>cry</strong>.</td>
          </tr>
        </tbody>
      </table>
    </div>

  `}})}function Zr(){return(0,V.jsx)(`div`,{className:`w-full h-full overflow-auto bg-white text-black`,dangerouslySetInnerHTML:{__html:`<style>
      :root {
        --body-bg: #ffffff;
        --text-color: #333333;
        --heading-color: #1a365d;
        --border-color: #e2e8f0;
        --table-stripe: #f8fafc;
        --link-color: #2563eb;
        --part-color: #2b6cb0; /* 高校版は知的で落ち着いたブルー */
        --chap-color: #4a5568;
        --tip-bg: #eff6ff;
        --tip-border: #bfdbfe;
        --tip-text: #1e3a8a;
      }

      body {
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
        font-size: 1rem;
        font-weight: 400;
        line-height: 1.6;
        color: var(--text-color);
        background-color: var(--body-bg);
        margin: 0;
        padding: 2rem 1rem;
        max-width: 950px;
        margin-left: auto;
        margin-right: auto;
      }

      h1 { 
        font-size: 2.25rem; 
        color: var(--heading-color);
        border-bottom: 2px solid var(--border-color); 
        padding-bottom: 0.5rem;
        margin-top: 2rem;
        margin-bottom: 1.5rem;
      }
      
      h2.part-title { 
        font-size: 1.6rem; 
        color: #fff;
        background-color: var(--part-color);
        padding: 0.5rem 1rem;
        border-radius: 4px;
        margin-top: 3.5rem;
        margin-bottom: 1.5rem;
        box-shadow: 0 2px 4px rgba(0,0,0,0.1);
      }

      h3.chap-title {
        font-size: 1.3rem;
        color: var(--chap-color);
        border-bottom: 1px dashed var(--border-color);
        padding-bottom: 0.3rem;
        margin-top: 2.5rem;
        margin-bottom: 1rem;
        display: flex;
        align-items: center;
      }

      h3.chap-title span.chap-num {
        background-color: var(--chap-color);
        color: #fff;
        border-radius: 50%;
        width: 1.8rem;
        height: 1.8rem;
        display: inline-flex;
        justify-content: center;
        align-items: center;
        font-size: 1.1rem;
        margin-right: 0.5rem;
      }

      p {
        margin-top: 0;
        margin-bottom: 1rem;
      }

      .table-responsive {
        overflow-x: auto;
        -webkit-overflow-scrolling: touch;
        margin-bottom: 2rem;
      }

      table {
        width: 100%;
        margin-bottom: 1rem;
        vertical-align: top;
        border-collapse: collapse;
        font-size: 0.95rem;
      }

      th, td {
        padding: 0.85rem 0.75rem;
        border-bottom: 1px solid var(--border-color);
        text-align: left;
        vertical-align: top;
      }

      th {
        font-weight: 600;
        background-color: var(--body-bg);
        border-bottom: 2px solid var(--border-color);
        border-top: 2px solid var(--border-color);
      }

      tbody tr:nth-of-type(odd) {
        background-color: var(--table-stripe);
      }

      strong {
        font-weight: 700;
        color: #000;
        background-color: #fef08a; 
        padding: 0 0.3rem;
        border-radius: 3px;
      }

      .term-en {
        font-weight: 600;
        display: block;
        margin-bottom: 0.4rem;
        color: var(--heading-color);
      }

      .tip-box {
        background-color: var(--tip-bg);
        border: 1px solid var(--tip-border);
        color: var(--tip-text);
        padding: 0.6rem;
        border-radius: 4px;
        font-size: 0.85rem;
        margin-top: 0.5rem;
        line-height: 1.5;
      }
      
      .tip-box strong {
        background-color: transparent;
        color: #b91c1c; /* ダークレッドで語源を強調 */
      }

      .guide-box {
        background-color: #f0fdf4;
        border-left: 4px solid #22c55e;
        padding: 1.2rem;
        border-radius: 0 4px 4px 0;
        margin-bottom: 2.5rem;
      }
      .guide-box h3 {
        margin-top: 0;
        font-size: 1.1rem;
        border-bottom: none;
      }
      .guide-box ul {
        padding-left: 1.5rem;
        margin-bottom: 0;
      }
      .guide-box li {
        margin-bottom: 0.5rem;
      }

      .toc {
        background-color: var(--table-stripe);
        padding: 1.5rem;
        border-radius: 0.5rem;
        margin-bottom: 2rem;
        border: 1px solid var(--border-color);
      }
      .toc h2 {
        margin-top: 0;
        border-bottom: none;
        font-size: 1.2rem;
        color: var(--heading-color);
      }
      .toc ul {
        list-style-type: none;
        padding-left: 0;
        margin-bottom: 0;
      }
      .toc > ul > li {
        margin-bottom: 0.8rem;
        font-weight: bold;
      }
      .toc ul ul {
        column-count: 2;
        font-weight: normal;
        margin-top: 0.3rem;
        padding-left: 1rem;
      }
      @media (max-width: 600px) {
        .toc ul ul { column-count: 1; }
      }
      .toc a {
        color: var(--link-color);
        text-decoration: none;
      }
      .toc a:hover {
        text-decoration: underline;
      }
    </style>


    <h1>高校英文法用語集 <br><small style="font-size: 1.2rem; color: #666;">(語源・Tips 完全収録版 / スーパーステップ準拠)</small></h1>
    <p>高校レベルの複雑な文法用語を、すべて語源（英単語の成り立ち）から紐解く最強のリファレンスです。</p>

    <!-- 目次 -->
    <div class="toc">
      <h2>目次 (Contents)</h2>
      <ul>
        <li><a href="#matrix">🌟 特別マップ：文の要素と品詞の対応リスト</a></li>
        <li><a href="#part1">PART 1: 動詞を中心に</a>
          <ul>
            <li><a href="#p1-1">1. 時制</a></li>
            <li><a href="#p1-2">2. 受け身と助動詞</a></li>
            <li><a href="#p1-3">3. 文型と動詞</a></li>
          </ul>
        </li>
        <li><a href="#part2">PART 2: 主要な品詞</a>
          <ul>
            <li><a href="#p2-1">1. 名詞と冠詞</a></li>
            <li><a href="#p2-2">2. 形容詞と副詞</a></li>
            <li><a href="#p2-3">3. 代名詞 / 一致</a></li>
          </ul>
        </li>
        <li><a href="#part3">PART 3: 句による表現</a>
          <ul>
            <li><a href="#p3-1">1. 前置詞の句</a></li>
            <li><a href="#p3-2">2. 準動詞の句</a></li>
            <li><a href="#p3-3">3. 準動詞と文型</a></li>
          </ul>
        </li>
        <li><a href="#part4">PART 4: 節による表現</a>
          <ul>
            <li><a href="#p4-1">1. 接続詞と疑問詞</a></li>
            <li><a href="#p4-2">2. 関係詞</a></li>
            <li><a href="#p4-3">3. 比較表現</a></li>
          </ul>
        </li>
        <li><a href="#part5">PART 5: 仮定法とさまざまな文</a>
          <ul>
            <li><a href="#p5-1">1. 仮定法</a></li>
            <li><a href="#p5-2">2. 特殊な表現</a></li>
            <li><a href="#p5-3">3. さまざまな文や表現</a></li>
          </ul>
        </li>
      </ul>
    </div>

    <!-- 特別マップ -->
    <h2 id="matrix" style="border-bottom: 2px solid var(--border-color); padding-bottom: 0.5rem; margin-top: 3rem;">
      <span style="font-size: 1.5rem; margin-right: 0.5rem;">🌟</span> 特別マップ：文の要素と品詞の対応リスト
    </h2>
    <div class="table-responsive">
      <table>
        <thead>
          <tr>
            <th style="width: 40%;">エレメント / 文の要素 (Sentence Element)</th>
            <th style="width: 60%;">活用される品詞 (Parts of Speech)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>S：Subject</strong>（主語）</td>
            <td>名詞・代名詞 (Noun / Pronoun)</td>
          </tr>
          <tr>
            <td><strong>V：Verb</strong>（述語動詞）</td>
            <td>動詞 (Verb)</td>
          </tr>
          <tr>
            <td><strong>O：Object</strong>（目的語）</td>
            <td>名詞・代名詞 (Noun / Pronoun)</td>
          </tr>
          <tr>
            <td><strong>C：Complement</strong>（補語）</td>
            <td>名詞・代名詞 (Noun / Pronoun)<br>形容詞 (Adjective)</td>
          </tr>
          <tr>
            <td><strong>M：Modifier</strong>（修飾語）</td>
            <td>形容詞 (Adjective)<br>副詞 (Adverb)</td>
          </tr>
        </tbody>
      </table>
    </div>

    <div class="guide-box">
      <h3>このリストの活用ガイド（高校レベル編）</h3>
      <ul>
        <li><strong>名詞の拡張：</strong> 高校では、S, O, C の席に単なる単語だけでなく、「〜すること（動名詞・不定詞）」や「〜ということ（that節）」などの<strong>長いカタマリ（句・節）</strong>が入ってきます。</li>
        <li><strong>M（修飾語）の見極め：</strong> どんなに文が長くても、S/V/O/C 以外の部分はすべて「M（飾り）」です。カッコでくくって無視するスキルが長文読解の鍵になります。</li>
        <li><strong>倒置のメカニズム：</strong> 強調のために M が文頭に出ると、後ろの S と V がひっくり返る（MVSなどになる）ことがあります。</li>
      </ul>
    </div>

    <!-- ========================================== -->
    <!-- PART 1 -->
    <!-- ========================================== -->
    <h2 id="part1" class="part-title">PART 1: 動詞を中心に</h2>

    <h3 id="p1-1" class="chap-title"><span class="chap-num">1</span>時制</h3>
    <div class="table-responsive">
      <table>
        <thead>
          <tr><th style="width: 18%;">日本語名称</th><th style="width: 42%;">英語名称 / 語源・解説</th><th style="width: 40%;">例文 (該当部太字)</th></tr>
        </thead>
        <tbody>
          <tr>
            <td>完了進行形</td>
            <td>
              <span class="term-en">Perfect Progressive Tense</span>
              <div class="tip-box">💡 完了（ずっと〜している）＋進行（まさに今も！）。<strong>継続</strong>のニュアンスをよりリアルに強調する表現です。</div>
            </td>
            <td>It <strong>has been raining</strong> since yesterday.</td>
          </tr>
          <tr>
            <td>過去完了</td>
            <td>
              <span class="term-en">Past Perfect Tense</span>
              <div class="tip-box">💡 過去のある時点よりも<strong>さらに過去（大過去）</strong>に起こった出来事を表すため、過去の基準点とセットで使われます。</div>
            </td>
            <td>When I arrived, the train <strong>had already left</strong>.</td>
          </tr>
          <tr>
            <td>未来完了</td>
            <td>
              <span class="term-en">Future Perfect Tense</span>
              <div class="tip-box">💡 未来のある時点を想像し、「その時までにはもう完了しているだろう」という見込みを表します。</div>
            </td>
            <td>I <strong>will have finished</strong> the work by tomorrow.</td>
          </tr>
          <tr>
            <td>時制の一致</td>
            <td>
              <span class="term-en">Sequence of Tenses</span>
              <div class="tip-box">💡 <strong>sequence（連続・順序）</strong><br>主節のVが過去形になると、それに引きずられて従属節のVも過去側にズレる（連鎖する）ルールのことです。</div>
            </td>
            <td>I thought that she <strong>was</strong> busy. <br>(※is が was にズレる)</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h3 id="p1-2" class="chap-title"><span class="chap-num">2</span>受け身と助動詞</h3>
    <div class="table-responsive">
      <table>
        <thead>
          <tr><th style="width: 18%;">日本語名称</th><th style="width: 42%;">英語名称 / 語源・解説</th><th style="width: 40%;">例文 (該当部太字)</th></tr>
        </thead>
        <tbody>
          <tr>
            <td>受け身と完了形</td>
            <td>
              <span class="term-en">Passive with Perfect</span>
              <div class="tip-box">💡 have been + p.p. の形。「〜されてしまっている」「ずっと〜されている」という状態を表します。</div>
            </td>
            <td>The window <strong>has been broken</strong>.</td>
          </tr>
          <tr>
            <td>助動詞的な働きをする句</td>
            <td>
              <span class="term-en">Phrasal Modals</span>
              <div class="tip-box">💡 ought to, used to, had better など、複数の語のセットで助動詞（can/must等）と同じ働きをする句のこと。</div>
            </td>
            <td>You <strong>had better</strong> stay in bed.</td>
          </tr>
          <tr>
            <td>助動詞＋完了形</td>
            <td>
              <span class="term-en">Modal + Perfect (have p.p.)</span>
              <div class="tip-box">💡 助動詞の後に完了形を置くことで、「（過去に）〜したに違いない」「〜すべきだったのに」という<strong>過去への推量や後悔</strong>を表します。</div>
            </td>
            <td>He <strong>must have told</strong> a lie. <br>(嘘をついたに違いない)</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h3 id="p1-3" class="chap-title"><span class="chap-num">3</span>文型と動詞</h3>
    <div class="table-responsive">
      <table>
        <thead>
          <tr><th style="width: 18%;">日本語名称</th><th style="width: 42%;">英語名称 / 語源・解説</th><th style="width: 40%;">例文 (該当部太字)</th></tr>
        </thead>
        <tbody>
          <tr>
            <td>SVOO / SVOC の文</td>
            <td>
              <span class="term-en">Sentence Patterns (4th/5th)</span>
              <div class="tip-box">💡 目的語(O)を2つ取る動詞（give等）、目的語(O)＝補語(C)の関係を作る動詞（call, make等）の文型。</div>
            </td>
            <td>He gave <strong>me a ring</strong>. (SVOO)<br>We call <strong>him Ken</strong>. (SVOC)</td>
          </tr>
          <tr>
            <td>句動詞</td>
            <td>
              <span class="term-en">Phrasal Verb</span>
              <div class="tip-box">💡 <strong>phrase（句）</strong><br>動詞＋副詞/前置詞のセットで1つの動詞として機能します。（例：look forward to, turn off）</div>
            </td>
            <td>Please <strong>turn off</strong> the light.</td>
          </tr>
        </tbody>
      </table>
    </div>

    <!-- ========================================== -->
    <!-- PART 2 -->
    <!-- ========================================== -->
    <h2 id="part2" class="part-title">PART 2: 主要な品詞</h2>

    <h3 id="p2-1" class="chap-title"><span class="chap-num">1</span>名詞と冠詞</h3>
    <div class="table-responsive">
      <table>
        <thead>
          <tr><th style="width: 18%;">日本語名称</th><th style="width: 42%;">英語名称 / 語源・解説</th><th style="width: 40%;">例文 (該当部太字)</th></tr>
        </thead>
        <tbody>
          <tr>
            <td>物質名詞</td>
            <td>
              <span class="term-en">Material Noun</span>
              <div class="tip-box">💡 <strong>mater（母・源）</strong><br>気体・液体・固体など、材料や物質そのものを指す不可算名詞。切っても性質が変わらないもの（water, gold など）。</div>
            </td>
            <td>This table is made of <strong>wood</strong>.</td>
          </tr>
          <tr>
            <td>抽象名詞</td>
            <td>
              <span class="term-en">Abstract Noun</span>
              <div class="tip-box">💡 <strong>ab（離れて）＋ tract（引く）</strong><br>トラクター（牽引車）と同語源。具体的な形から、性質や概念だけを「引き離した」目に見えない名詞（love, peace など）。</div>
            </td>
            <td><strong>Information</strong> is important.</td>
          </tr>
          <tr>
            <td>固有名詞</td>
            <td>
              <span class="term-en">Proper Noun</span>
              <div class="tip-box">💡 <strong>proper（固有の・それ自身の）</strong><br>プロパティ（財産）と同語源。人名や地名など、この世に1つしかない特定の名前。大文字で始めます。</div>
            </td>
            <td>I live in <strong>Tokyo</strong>.</td>
          </tr>
          <tr>
            <td>集合名詞</td>
            <td>
              <span class="term-en">Collective Noun</span>
              <div class="tip-box">💡 <strong>collect（集める）</strong><br>人やモノの集合体を一つの単位として扱う名詞。家族(family)や警察(police)など、文脈で単数・複数扱いが変わります。</div>
            </td>
            <td>My <strong>family</strong> are all early risers.</td>
          </tr>
          <tr>
            <td>名詞の動詞的意味 (名詞化)</td>
            <td>
              <span class="term-en">Nominalization</span>
              <div class="tip-box">💡 <strong>nom（名前）</strong><br>動詞の性質を残したまま名詞になったもの。「A's discovery of B (AがBを発見したこと)」のようにSV関係が隠れています。</div>
            </td>
            <td>His <strong>decision</strong> surprised us.</td>
          </tr>
          <tr>
            <td>無冠詞</td>
            <td>
              <span class="term-en">Zero Article</span>
              <div class="tip-box">💡 by bus や go to bed など、具体的なモノではなく「手段」や「本来の目的(機能)」に焦点が当たる時は冠詞を省きます。</div>
            </td>
            <td>I go to school <strong>by bus</strong>.</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h3 id="p2-2" class="chap-title"><span class="chap-num">2</span>形容詞と副詞</h3>
    <div class="table-responsive">
      <table>
        <thead>
          <tr><th style="width: 18%;">日本語名称</th><th style="width: 42%;">英語名称 / 語源・解説</th><th style="width: 40%;">例文 (該当部太字)</th></tr>
        </thead>
        <tbody>
          <tr>
            <td>限定用法</td>
            <td>
              <span class="term-en">Attributive Use</span>
              <div class="tip-box">💡 <strong>ad（〜へ）＋ tribuere（与える）</strong><br>トリビュート（賛辞・捧げ物）と同語源。名詞に直接くっついて属性を与える（意味を限定する）使い方。</div>
            </td>
            <td>Look at the <strong>sleeping</strong> baby.</td>
          </tr>
          <tr>
            <td>叙述用法</td>
            <td>
              <span class="term-en">Predicative Use</span>
              <div class="tip-box">💡 <strong>pre（前に）＋ dicare（宣言する）</strong><br>補語（C）として働き、主語や目的語の状態について「叙述する（述べる）」使い方。</div>
            </td>
            <td>The baby is <strong>asleep</strong>.</td>
          </tr>
          <tr>
            <td>数量形容詞</td>
            <td>
              <span class="term-en">Quantifier</span>
              <div class="tip-box">💡 <strong>quantity（量）</strong><br>many, much, few, little など、数や量を表す言葉。可算名詞につくか、不可算名詞につくかで使い分けます。</div>
            </td>
            <td>I have <strong>a few</strong> friends.</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h3 id="p2-3" class="chap-title"><span class="chap-num">3</span>代名詞 / 一致</h3>
    <div class="table-responsive">
      <table>
        <thead>
          <tr><th style="width: 18%;">日本語名称</th><th style="width: 42%;">英語名称 / 語源・解説</th><th style="width: 40%;">例文 (該当部太字)</th></tr>
        </thead>
        <tbody>
          <tr>
            <td>人称 / 指示 / 不定代名詞</td>
            <td>
              <span class="term-en">Personal / Demonstrative / Indefinite</span>
              <div class="tip-box">💡 それぞれ「人(I, you)」「指し示す(this, that)」「定まっていないもの(some, any)」の代わりをする名詞です。</div>
            </td>
            <td><strong>Some</strong> like it, <strong>others</strong> don't.</td>
          </tr>
          <tr>
            <td>主語と述語動詞の一致</td>
            <td>
              <span class="term-en">Subject-Verb Agreement</span>
              <div class="tip-box">💡 <strong>agreement（合意・一致）</strong><br>主語が単数か複数かに応じて、動詞の形（is/are, do/does等）を正しく合わせるルールのこと。</div>
            </td>
            <td>Neither he nor I <strong>am</strong> wrong.</td>
          </tr>
        </tbody>
      </table>
    </div>

    <!-- ========================================== -->
    <!-- PART 3 -->
    <!-- ========================================== -->
    <h2 id="part3" class="part-title">PART 3: 句による表現</h2>

    <h3 id="p3-1" class="chap-title"><span class="chap-num">1</span>前置詞の句</h3>
    <div class="table-responsive">
      <table>
        <thead>
          <tr><th style="width: 18%;">日本語名称</th><th style="width: 42%;">英語名称 / 語源・解説</th><th style="width: 40%;">例文 (該当部太字)</th></tr>
        </thead>
        <tbody>
          <tr>
            <td>前置詞句</td>
            <td>
              <span class="term-en">Prepositional Phrase</span>
              <div class="tip-box">💡 前置詞＋名詞のカタマリ。全体として<strong>形容詞（名詞を修飾）</strong>か<strong>副詞（動詞などを修飾）</strong>の働きをします。</div>
            </td>
            <td>The book <strong>on the desk</strong> is mine.<br>(※名詞bookを修飾＝形容詞)</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h3 id="p3-2" class="chap-title"><span class="chap-num">2</span>準動詞の句</h3>
    <div class="table-responsive">
      <table>
        <thead>
          <tr><th style="width: 18%;">日本語名称</th><th style="width: 42%;">英語名称 / 語源・解説</th><th style="width: 40%;">例文 (該当部太字)</th></tr>
        </thead>
        <tbody>
          <tr>
            <td>準動詞</td>
            <td>
              <span class="term-en">Verbal</span>
              <div class="tip-box">💡 動詞の性質を持ちながら、名詞・形容詞・副詞として働く「不定詞」「動名詞」「分詞」の総称です。</div>
            </td>
            <td><strong>To see</strong> is <strong>to believe</strong>.</td>
          </tr>
          <tr>
            <td>意味上の主語</td>
            <td>
              <span class="term-en">Logical Subject</span>
              <div class="tip-box">💡 <strong>logic（論理）</strong><br>文全体の主語（S）とは別に、「不定詞や動名詞の動作を実際に行うのは誰か」を論理的に示したもの（for 人, 所有格など）。</div>
            </td>
            <td>It is hard <strong>for him</strong> to solve it.</td>
          </tr>
          <tr>
            <td>完了形の準動詞</td>
            <td>
              <span class="term-en">Perfect Infinitive / Gerund</span>
              <div class="tip-box">💡 <code>to have Vp.p.</code> や <code>having Vp.p.</code> を使い、メインの述語動詞よりも<strong>「一つ前の古い時の出来事」</strong>であることを表します。</div>
            </td>
            <td>He seems <strong>to have been</strong> sick. <br>(今は元気そうだが、以前病気だったようだ)</td>
          </tr>
          <tr>
            <td>分詞構文</td>
            <td>
              <span class="term-en">Participial Construction</span>
              <div class="tip-box">💡 接続詞と主語を省略し、分詞（~ing等）から始めることで、副詞節をスッキリとした句に圧縮するテクニックです。</div>
            </td>
            <td><strong>Seeing</strong> a police officer, he ran away.</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h3 id="p3-3" class="chap-title"><span class="chap-num">3</span>準動詞と文型</h3>
    <div class="table-responsive">
      <table>
        <thead>
          <tr><th style="width: 18%;">日本語名称</th><th style="width: 42%;">英語名称 / 語源・解説</th><th style="width: 40%;">例文 (該当部太字)</th></tr>
        </thead>
        <tbody>
          <tr>
            <td>原形不定詞</td>
            <td>
              <span class="term-en">Bare Infinitive</span>
              <div class="tip-box">💡 <strong>bare（裸の）</strong><br>ベアフット（裸足）と同語源。"to" という服を着ていない、原形そのままの不定詞。使役・知覚動詞のC（補語）として使われます。</div>
            </td>
            <td>My father made me <strong>clean</strong> my room.</td>
          </tr>
        </tbody>
      </table>
    </div>

    <!-- ========================================== -->
    <!-- PART 4 -->
    <!-- ========================================== -->
    <h2 id="part4" class="part-title">PART 4: 節による表現</h2>

    <h3 id="p4-1" class="chap-title"><span class="chap-num">1</span>接続詞と疑問詞</h3>
    <div class="table-responsive">
      <table>
        <thead>
          <tr><th style="width: 18%;">日本語名称</th><th style="width: 42%;">英語名称 / 語源・解説</th><th style="width: 40%;">例文 (該当部太字)</th></tr>
        </thead>
        <tbody>
          <tr>
            <td>名詞節 / 副詞節をつくる接続詞</td>
            <td>
              <span class="term-en">Noun / Adverbial Clause</span>
              <div class="tip-box">💡 <strong>clause（節）</strong>は「閉じる」が語源。SとVを含んだカタマリが、主語・目的語(名詞節)や飾り(副詞節)になります。</div>
            </td>
            <td>I think <strong>that he is right</strong>.<br>(※that以下が目的語=名詞節)</td>
          </tr>
          <tr>
            <td>間接疑問</td>
            <td>
              <span class="term-en">Indirect Question</span>
              <div class="tip-box">💡 疑問詞の文が別の文の一部（目的語など）に組み込まれたもの。語順が平叙文（疑問詞＋S＋V）に戻ります。</div>
            </td>
            <td>I don't know <strong>where he lives</strong>.</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h3 id="p4-2" class="chap-title"><span class="chap-num">2</span>関係詞</h3>
    <div class="table-responsive">
      <table>
        <thead>
          <tr><th style="width: 18%;">日本語名称</th><th style="width: 42%;">英語名称 / 語源・解説</th><th style="width: 40%;">例文 (該当部太字)</th></tr>
        </thead>
        <tbody>
          <tr>
            <td>非限定用法 (非制限用法)</td>
            <td>
              <span class="term-en">Non-restrictive Use</span>
              <div class="tip-box">💡 <strong>restrict（制限する）</strong><br>関係詞の前にコンマ(,)を置きます。「〜な〇〇」と対象を絞り込むのではなく、「ちなみに〜なんだけどね」と補足情報を付け足す用法です。</div>
            </td>
            <td>My father<strong>, who lives in Kyoto,</strong> is a doctor.</td>
          </tr>
          <tr>
            <td>名詞節をつくる関係詞</td>
            <td>
              <span class="term-en">Relative Pronoun "what"</span>
              <div class="tip-box">💡 what (= the thing which)。自分自身の中に名詞(the thing)を含んでいるため、what節全体が名詞節になります。</div>
            </td>
            <td>This is <strong>what I want</strong>.</td>
          </tr>
          <tr>
            <td>複合関係詞</td>
            <td>
              <span class="term-en">Compound Relative</span>
              <div class="tip-box">💡 <strong>compound（複合の）</strong><br>whoever や whatever のように -ever がついたもの。「〜する人は誰でも」や「誰が〜しようとも（譲歩）」の働きをします。</div>
            </td>
            <td>I will give it to <strong>whoever</strong> wants it.</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h3 id="p4-3" class="chap-title"><span class="chap-num">3</span>比較表現</h3>
    <div class="table-responsive">
      <table>
        <thead>
          <tr><th style="width: 18%;">日本語名称</th><th style="width: 42%;">英語名称 / 語源・解説</th><th style="width: 40%;">例文 (該当部太字)</th></tr>
        </thead>
        <tbody>
          <tr>
            <td>同等表現 / 比較級 / 最上級</td>
            <td>
              <span class="term-en">Positive / Comparative / Superlative</span>
              <div class="tip-box">💡 Superlative は <strong>super（上に）＋ lative（運ばれた）</strong>。他のみんなよりも一番上に持ち上げられた最高の状態。</div>
            </td>
            <td>Mt. Fuji is <strong>the highest</strong> in Japan.</td>
          </tr>
          <tr>
            <td>the + 比較級, the + 比較級</td>
            <td>
              <span class="term-en">Correlative Comparative</span>
              <div class="tip-box">💡 「〜すればするほど、ますます〜」という比例関係を表す特殊な比較構文です。</div>
            </td>
            <td><strong>The more</strong> I read it, <strong>the more</strong> I like it.</td>
          </tr>
        </tbody>
      </table>
    </div>

    <!-- ========================================== -->
    <!-- PART 5 -->
    <!-- ========================================== -->
    <h2 id="part5" class="part-title">PART 5: 仮定法とさまざまな文</h2>

    <h3 id="p5-1" class="chap-title"><span class="chap-num">1</span>仮定法</h3>
    <div class="table-responsive">
      <table>
        <thead>
          <tr><th style="width: 18%;">日本語名称</th><th style="width: 42%;">英語名称 / 語源・解説</th><th style="width: 40%;">例文 (該当部太字)</th></tr>
        </thead>
        <tbody>
          <tr>
            <td>仮定法</td>
            <td>
              <span class="term-en">Subjunctive Mood</span>
              <div class="tip-box">💡 <strong>sub（下に）＋ junct（結ぶ）</strong><br>現実の世界の「下」に従属している、頭の中だけの「想像・反事実」の世界を結びつける文法です。</div>
            </td>
            <td>If I <strong>were</strong> a bird, I could fly.</td>
          </tr>
          <tr>
            <td>仮定法過去完了</td>
            <td>
              <span class="term-en">Subjunctive Past Perfect</span>
              <div class="tip-box">💡 <strong>「過去の事実」に対する反事実（あの時〜だったらなあ）</strong>を表すため、時制をさらに古くズラして <code>had Vp.p.</code> を使います。</div>
            </td>
            <td>If I <strong>had known</strong> it, I <strong>would have told</strong> you.</td>
          </tr>
          <tr>
            <td>should の用法</td>
            <td>
              <span class="term-en">Should for demand/suggestion</span>
              <div class="tip-box">💡 「提案・要求」を表す動詞(suggest, demand)に続くthat節内では、「〜すべきだ」という頭の中の考え（仮定法）なので should が使われます。</div>
            </td>
            <td>He proposed that we <strong>(should)</strong> go.</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h3 id="p5-2" class="chap-title"><span class="chap-num">2</span>特殊な表現</h3>
    <div class="table-responsive">
      <table>
        <thead>
          <tr><th style="width: 18%;">日本語名称</th><th style="width: 42%;">英語名称 / 語源・解説</th><th style="width: 40%;">例文 (該当部太字)</th></tr>
        </thead>
        <tbody>
          <tr>
            <td>強調構文</td>
            <td>
              <span class="term-en">Cleft Sentence</span>
              <div class="tip-box">💡 <strong>cleft（裂けた）</strong><br>元の一つの文を「It is / that」で真っ二つに裂き、その間に特に強調したい部分を挟み込む構文です。</div>
            </td>
            <td><strong>It was</strong> Tom <strong>that</strong> broke the window.</td>
          </tr>
          <tr>
            <td>倒置</td>
            <td>
              <span class="term-en">Inversion</span>
              <div class="tip-box">💡 <strong>in（逆に）＋ vers（向ける）</strong><br>リバーシブルと同語源。否定語などを文頭に強調して出した結果、語順が逆（疑問文の語順）にひっくり返る現象です。</div>
            </td>
            <td>Never <strong>did I</strong> dream of it.</td>
          </tr>
          <tr>
            <td>挿入</td>
            <td>
              <span class="term-en">Insertion</span>
              <div class="tip-box">💡 <strong>in（中に）＋ sert（結びつける）</strong><br>文の途中にコンマで挟んで、補足情報や話者の態度（I thinkなど）を投げ入れる表現です。</div>
            </td>
            <td>He is, <strong>I think</strong>, a good boy.</td>
          </tr>
          <tr>
            <td>省略 / 共通構文</td>
            <td>
              <span class="term-en">Ellipsis / Parallelism</span>
              <div class="tip-box">💡 <strong>ellipse（楕円・欠落）</strong><br>文脈から明らかな言葉を削り落とすこと。接続詞(and等)で結ばれた文で共通する部分を省く「共通構文」もこれに当たります。</div>
            </td>
            <td>To err is human, to forgive <strong>(is)</strong> divine.</td>
          </tr>
          <tr>
            <td>同格</td>
            <td>
              <span class="term-en">Apposition</span>
              <div class="tip-box">💡 <strong>ap（そばに）＋ position（置く）</strong><br>名詞のすぐそばに別の名詞をピタッと置いて、「つまりコレのことだよ」とイコールの説明を付け足す表現です。</div>
            </td>
            <td>Mr. Smith, <strong>our teacher</strong>, is very kind.</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h3 id="p5-3" class="chap-title"><span class="chap-num">3</span>さまざまな文や表現</h3>
    <div class="table-responsive">
      <table>
        <thead>
          <tr><th style="width: 18%;">日本語名称</th><th style="width: 42%;">英語名称 / 語源・解説</th><th style="width: 40%;">例文 (該当部太字)</th></tr>
        </thead>
        <tbody>
          <tr>
            <td>部分否定</td>
            <td>
              <span class="term-en">Partial Negation</span>
              <div class="tip-box">💡 <code>not</code> ＋ <code>all / always / completely</code>（100％を表す語）。「100％〜というわけではない」という微妙なニュアンスを表します。</div>
            </td>
            <td>I do <strong>not</strong> know <strong>all</strong> of them. <br>(全員を知っているわけではない)</td>
          </tr>
          <tr>
            <td>付加疑問</td>
            <td>
              <span class="term-en">Tag Question</span>
              <div class="tip-box">💡 値札のタグ(tag)と同じ。「だよね？」と相手に同意を求めるため、文末にちょこんと付け足す短い疑問文のこと。</div>
            </td>
            <td>You are a student, <strong>aren't you?</strong></td>
          </tr>
          <tr>
            <td>直接話法 / 間接話法</td>
            <td>
              <span class="term-en">Direct / Indirect Speech</span>
              <div class="tip-box">💡 <strong>direct（まっすぐな）</strong><br>相手の言葉を「」でそのまままっすぐ伝えるか、自分の言葉に直して(間接的に)伝えるかの違いです。</div>
            </td>
            <td>He <strong>said to me, "I am tired."</strong> (直接)<br>He <strong>told me that he was tired</strong>. (間接)</td>
          </tr>
        </tbody>
      </table>
    </div>

  `}})}var Qr=({showM:e,setShowM:t})=>(0,V.jsx)(`div`,{className:`flex justify-center my-8 sticky top-4 z-50`,children:(0,V.jsxs)(`label`,{className:`flex items-center cursor-pointer bg-white/90 backdrop-blur-sm px-6 py-4 rounded-2xl shadow-lg border border-slate-200 hover:bg-blue-50 transition-colors`,children:[(0,V.jsx)(`div`,{className:`mr-4 font-bold text-lg text-slate-700`,children:`M（修飾語）を表示する`}),(0,V.jsxs)(`div`,{className:`relative`,children:[(0,V.jsx)(`input`,{type:`checkbox`,className:`sr-only`,checked:e,onChange:()=>t(!e)}),(0,V.jsx)(`div`,{className:`block w-14 h-8 rounded-full transition-colors ${e?`bg-blue-500`:`bg-slate-300`}`}),(0,V.jsx)(`div`,{className:`dot absolute left-1 top-1 bg-white w-6 h-6 rounded-full transition-transform ${e?`transform translate-x-6`:``}`})]})]})}),$r=({showM:e})=>(0,V.jsxs)(`div`,{className:`bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-slate-200 flex flex-col h-full`,children:[(0,V.jsxs)(`h3`,{className:`text-xl font-bold text-slate-800 mb-2 flex items-center w-full`,children:[(0,V.jsx)(`span`,{className:`text-3xl mr-3`,children:`🇺🇸`}),(0,V.jsxs)(`div`,{children:[`アメリカ式`,(0,V.jsx)(`span`,{className:`block text-xs font-normal text-slate-500 mt-1`,children:`階層構造ツリー (Reed-Kellogg図解)`})]})]}),(0,V.jsx)(`p`,{className:`text-sm text-slate-600 mb-6 text-left w-full h-16 leading-relaxed`,children:`文の「階層構造」を視覚化します。主幹（S-V-O）を一本の線に引き、M（修飾語）はそこからぶら下がる「枝」として描画されるため、骨格がブレません。`}),(0,V.jsxs)(`svg`,{viewBox:`0 0 500 220`,className:`w-full bg-slate-50 rounded-xl border border-slate-200 shadow-inner h-48`,children:[(0,V.jsx)(`line`,{x1:`40`,y1:`80`,x2:`460`,y2:`80`,stroke:`#1e293b`,strokeWidth:`3`,strokeLinecap:`round`}),(0,V.jsx)(`line`,{x1:`180`,y1:`50`,x2:`180`,y2:`110`,stroke:`#1e293b`,strokeWidth:`3`,strokeLinecap:`round`}),(0,V.jsx)(`line`,{x1:`320`,y1:`50`,x2:`320`,y2:`80`,stroke:`#1e293b`,strokeWidth:`3`,strokeLinecap:`round`}),(0,V.jsx)(`text`,{x:`110`,y:`70`,fontSize:`22`,fill:`#1e293b`,textAnchor:`middle`,fontWeight:`bold`,children:`dog`}),(0,V.jsx)(`text`,{x:`250`,y:`70`,fontSize:`22`,fill:`#1e293b`,textAnchor:`middle`,fontWeight:`bold`,children:`ate`}),(0,V.jsx)(`text`,{x:`390`,y:`70`,fontSize:`22`,fill:`#1e293b`,textAnchor:`middle`,fontWeight:`bold`,children:`bone`}),(0,V.jsx)(`text`,{x:`110`,y:`40`,fontSize:`14`,fill:`#94a3b8`,textAnchor:`middle`,fontWeight:`bold`,children:`S`}),(0,V.jsx)(`text`,{x:`250`,y:`40`,fontSize:`14`,fill:`#94a3b8`,textAnchor:`middle`,fontWeight:`bold`,children:`V`}),(0,V.jsx)(`text`,{x:`390`,y:`40`,fontSize:`14`,fill:`#94a3b8`,textAnchor:`middle`,fontWeight:`bold`,children:`O`}),(0,V.jsxs)(`g`,{className:`transition-opacity duration-500 ease-in-out ${e?`opacity-100`:`opacity-0`}`,stroke:`#3b82f6`,strokeWidth:`2.5`,strokeLinecap:`round`,children:[(0,V.jsx)(`line`,{x1:`70`,y1:`80`,x2:`100`,y2:`140`}),(0,V.jsx)(`text`,{x:`75`,y:`125`,fontSize:`15`,fill:`#3b82f6`,transform:`rotate(63, 75, 125)`,strokeWidth:`0`,fontWeight:`bold`,children:`The`}),(0,V.jsx)(`line`,{x1:`110`,y1:`80`,x2:`140`,y2:`140`}),(0,V.jsx)(`text`,{x:`115`,y:`125`,fontSize:`15`,fill:`#3b82f6`,transform:`rotate(63, 115, 125)`,strokeWidth:`0`,fontWeight:`bold`,children:`cute`}),(0,V.jsx)(`line`,{x1:`230`,y1:`80`,x2:`260`,y2:`140`}),(0,V.jsx)(`text`,{x:`235`,y:`125`,fontSize:`15`,fill:`#3b82f6`,transform:`rotate(63, 235, 125)`,strokeWidth:`0`,fontWeight:`bold`,children:`quickly`}),(0,V.jsx)(`line`,{x1:`360`,y1:`80`,x2:`390`,y2:`140`}),(0,V.jsx)(`text`,{x:`365`,y:`125`,fontSize:`15`,fill:`#3b82f6`,transform:`rotate(63, 365, 125)`,strokeWidth:`0`,fontWeight:`bold`,children:`the`}),(0,V.jsx)(`line`,{x1:`400`,y1:`80`,x2:`430`,y2:`140`}),(0,V.jsx)(`text`,{x:`405`,y:`125`,fontSize:`15`,fill:`#3b82f6`,transform:`rotate(63, 405, 125)`,strokeWidth:`0`,fontWeight:`bold`,children:`big`})]})]})]}),ei=({showM:e})=>(0,V.jsxs)(`div`,{className:`bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-slate-200 flex flex-col h-full`,children:[(0,V.jsxs)(`h3`,{className:`text-xl font-bold text-slate-800 mb-2 flex items-center w-full`,children:[(0,V.jsx)(`span`,{className:`text-3xl mr-3`,children:`🇮🇳`}),(0,V.jsxs)(`div`,{children:[`インド式`,(0,V.jsx)(`span`,{className:`block text-xs font-normal text-slate-500 mt-1`,children:`コア＋後乗せモジュール`})]})]}),(0,V.jsx)(`p`,{className:`text-sm text-slate-600 mb-6 text-left w-full h-16 leading-relaxed`,children:`「伝えること」に特化した実践的アプローチ。コアとなる行動（SVO等）を真っ先にブロックとして置き、Mは後から「追加モジュール」として放り込みます。`}),(0,V.jsxs)(`div`,{className:`w-full bg-slate-50 rounded-xl border border-slate-200 p-6 flex flex-col justify-center shadow-inner h-48 relative`,children:[(0,V.jsxs)(`div`,{className:`flex justify-center items-center gap-2 mb-2 relative z-10`,children:[(0,V.jsxs)(`div`,{className:`bg-orange-500 text-white px-5 py-3 rounded-xl font-bold text-lg shadow-md w-1/3 text-center`,children:[(0,V.jsx)(`span`,{className:`text-orange-200 text-xs block mb-1`,children:`A (誰が)`}),`dog`]}),(0,V.jsx)(`div`,{className:`text-orange-500 font-black text-xl px-2`,children:`does`}),(0,V.jsxs)(`div`,{className:`bg-orange-500 text-white px-5 py-3 rounded-xl font-bold text-lg shadow-md w-1/3 text-center`,children:[(0,V.jsx)(`span`,{className:`text-orange-200 text-xs block mb-1`,children:`B (何を)`}),`ate bone`]})]}),(0,V.jsx)(`div`,{className:`transition-all duration-500 ease-in-out overflow-hidden flex justify-center w-full ${e?`opacity-100 max-h-32 mt-4`:`opacity-0 max-h-0 mt-0`}`,children:(0,V.jsxs)(`div`,{className:`flex flex-wrap justify-center items-center gap-2 bg-blue-50 border-2 border-blue-200 p-3 rounded-xl w-full`,children:[(0,V.jsx)(`div`,{className:`text-blue-500 font-black text-xl mr-2`,children:`+`}),(0,V.jsx)(`div`,{className:`bg-white text-blue-600 border border-blue-300 px-3 py-1.5 rounded-lg text-sm font-bold shadow-sm`,children:`The cute`}),(0,V.jsx)(`div`,{className:`bg-white text-blue-600 border border-blue-300 px-3 py-1.5 rounded-lg text-sm font-bold shadow-sm`,children:`quickly`}),(0,V.jsx)(`div`,{className:`bg-white text-blue-600 border border-blue-300 px-3 py-1.5 rounded-lg text-sm font-bold shadow-sm`,children:`the big`}),(0,V.jsx)(`div`,{className:`w-full text-center mt-1 text-xs text-blue-500 font-bold tracking-wider`,children:`M（細かい情報は後から足す）`})]})})]})]}),ti=({showM:e})=>(0,V.jsxs)(`div`,{className:`bg-slate-900 p-6 md:p-8 rounded-2xl shadow-lg border border-slate-700 flex flex-col h-full relative overflow-hidden`,children:[(0,V.jsx)(`div`,{className:`absolute top-0 right-0 -mt-4 -mr-4 text-slate-800 opacity-20 pointer-events-none font-mono text-9xl`,children:`{}`}),(0,V.jsxs)(`h3`,{className:`text-xl font-bold text-white mb-2 flex items-center w-full z-10`,children:[(0,V.jsx)(`span`,{className:`text-3xl mr-3`,children:`💻`}),(0,V.jsxs)(`div`,{children:[`オリジナル：JSON縦持ち式`,(0,V.jsx)(`span`,{className:`block text-xs font-normal text-green-400 mt-1`,children:`Syntax as Code アプローチ`})]})]}),(0,V.jsxs)(`p`,{className:`text-sm text-slate-300 mb-6 text-left w-full h-16 leading-relaxed z-10`,children:[`英文をオブジェクト（辞書型）のキーと値として解釈します。Mがどんなに長くなっても独立したプロパティになるため、`,(0,V.jsx)(`b`,{children:`必須引数（S, V, O）が絶対に埋もれません。`})]}),(0,V.jsx)(`div`,{className:`w-full bg-black/60 backdrop-blur-md rounded-xl p-5 shadow-inner border border-slate-700/50 flex flex-col justify-center h-48 z-10 overflow-hidden`,children:(0,V.jsxs)(`pre`,{className:`font-mono text-sm md:text-base leading-relaxed`,children:[(0,V.jsx)(`span`,{className:`text-slate-400`,children:`{`}),(0,V.jsx)(`br`,{}),(0,V.jsxs)(`div`,{className:`overflow-hidden transition-all duration-500 ease-in-out ${e?`opacity-100 max-h-8`:`opacity-0 max-h-0`}`,children:[(0,V.jsx)(`span`,{className:`text-pink-400 ml-4`,children:`"mod_S"`}),(0,V.jsx)(`span`,{className:`text-slate-400`,children:`: `}),(0,V.jsx)(`span`,{className:`text-yellow-300`,children:`"The cute"`}),(0,V.jsx)(`span`,{className:`text-slate-400`,children:`,`})]}),(0,V.jsxs)(`div`,{className:`ml-4`,children:[(0,V.jsx)(`span`,{className:`text-blue-400 font-bold`,children:`"Subject"`}),(0,V.jsx)(`span`,{className:`text-slate-400`,children:`: `}),(0,V.jsx)(`span`,{className:`text-green-400 font-bold bg-green-900/30 px-1 rounded`,children:`"dog"`}),(0,V.jsx)(`span`,{className:`text-slate-400`,children:`,`})]}),(0,V.jsxs)(`div`,{className:`overflow-hidden transition-all duration-500 ease-in-out ${e?`opacity-100 max-h-8`:`opacity-0 max-h-0`}`,children:[(0,V.jsx)(`span`,{className:`text-pink-400 ml-4`,children:`"mod_V"`}),(0,V.jsx)(`span`,{className:`text-slate-400`,children:`: `}),(0,V.jsx)(`span`,{className:`text-yellow-300`,children:`"quickly"`}),(0,V.jsx)(`span`,{className:`text-slate-400`,children:`,`})]}),(0,V.jsxs)(`div`,{className:`ml-4`,children:[(0,V.jsx)(`span`,{className:`text-blue-400 font-bold`,children:`"Verb"`}),(0,V.jsx)(`span`,{className:`text-slate-400`,children:`:    `}),(0,V.jsx)(`span`,{className:`text-green-400 font-bold bg-green-900/30 px-1 rounded`,children:`"ate"`}),(0,V.jsx)(`span`,{className:`text-slate-400`,children:`,`})]}),(0,V.jsxs)(`div`,{className:`overflow-hidden transition-all duration-500 ease-in-out ${e?`opacity-100 max-h-8`:`opacity-0 max-h-0`}`,children:[(0,V.jsx)(`span`,{className:`text-pink-400 ml-4`,children:`"mod_O"`}),(0,V.jsx)(`span`,{className:`text-slate-400`,children:`: `}),(0,V.jsx)(`span`,{className:`text-yellow-300`,children:`"the big"`}),(0,V.jsx)(`span`,{className:`text-slate-400`,children:`,`})]}),(0,V.jsxs)(`div`,{className:`ml-4`,children:[(0,V.jsx)(`span`,{className:`text-blue-400 font-bold`,children:`"Object"`}),(0,V.jsx)(`span`,{className:`text-slate-400`,children:`:  `}),(0,V.jsx)(`span`,{className:`text-green-400 font-bold bg-green-900/30 px-1 rounded`,children:`"bone"`})]}),(0,V.jsx)(`span`,{className:`text-slate-400`,children:`}`})]})})]}),ni=({showM:e})=>(0,V.jsxs)(`div`,{className:`bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-slate-200 flex flex-col h-full`,children:[(0,V.jsxs)(`h3`,{className:`text-xl font-bold text-slate-800 mb-2 flex items-center`,children:[(0,V.jsx)(`span`,{className:`text-3xl mr-3`,children:`🇯🇵`}),(0,V.jsxs)(`div`,{children:[`日本式（比較用）`,(0,V.jsx)(`span`,{className:`block text-xs font-normal text-slate-500 mt-1`,children:`直列5文型パズル`})]})]}),(0,V.jsxs)(`p`,{className:`text-sm text-slate-600 mb-6 text-left w-full h-16 leading-relaxed`,children:[`すべてが1本の線に並ぶため、長文になると骨組みと飾りの区別がつかなくなりがちです。`,(0,V.jsx)(`br`,{}),(0,V.jsx)(`span`,{className:`font-bold text-rose-600 bg-rose-50 px-2 py-0.5 rounded inline-block mt-1 text-xs border border-rose-100`,children:`※ Mを教わらないのにMの穴埋めをさせられる原因`})]}),(0,V.jsx)(`div`,{className:`w-full bg-slate-50 rounded-xl border border-slate-200 p-6 overflow-x-auto shadow-inner flex flex-col justify-center h-48`,children:(0,V.jsxs)(`div`,{className:`flex items-center gap-1.5 min-w-max pb-2`,children:[(0,V.jsxs)(`div`,{className:`overflow-hidden transition-all duration-500 ease-in-out flex gap-1.5 ${e?`opacity-100 w-auto`:`opacity-0 w-0`}`,children:[(0,V.jsx)(`div`,{className:`bg-blue-100 border-2 border-blue-300 text-blue-700 px-3 py-2 rounded-lg font-bold shadow-sm whitespace-nowrap`,children:`The (M)`}),(0,V.jsx)(`div`,{className:`bg-blue-100 border-2 border-blue-300 text-blue-700 px-3 py-2 rounded-lg font-bold shadow-sm whitespace-nowrap`,children:`cute (M)`})]}),(0,V.jsx)(`div`,{className:`bg-slate-700 border-2 border-slate-800 text-white px-4 py-2 rounded-lg font-bold shadow-sm z-10 flex-shrink-0`,children:`dog (S)`}),(0,V.jsx)(`div`,{className:`overflow-hidden transition-all duration-500 ease-in-out flex gap-1.5 ${e?`opacity-100 w-auto`:`opacity-0 w-0`}`,children:(0,V.jsx)(`div`,{className:`bg-blue-100 border-2 border-blue-300 text-blue-700 px-3 py-2 rounded-lg font-bold shadow-sm whitespace-nowrap`,children:`quickly (M)`})}),(0,V.jsx)(`div`,{className:`bg-slate-700 border-2 border-slate-800 text-white px-4 py-2 rounded-lg font-bold shadow-sm z-10 flex-shrink-0`,children:`ate (V)`}),(0,V.jsxs)(`div`,{className:`overflow-hidden transition-all duration-500 ease-in-out flex gap-1.5 ${e?`opacity-100 w-auto`:`opacity-0 w-0`}`,children:[(0,V.jsx)(`div`,{className:`bg-blue-100 border-2 border-blue-300 text-blue-700 px-3 py-2 rounded-lg font-bold shadow-sm whitespace-nowrap`,children:`the (M)`}),(0,V.jsx)(`div`,{className:`bg-blue-100 border-2 border-blue-300 text-blue-700 px-3 py-2 rounded-lg font-bold shadow-sm whitespace-nowrap`,children:`big (M)`})]}),(0,V.jsx)(`div`,{className:`bg-slate-700 border-2 border-slate-800 text-white px-4 py-2 rounded-lg font-bold shadow-sm z-10 flex-shrink-0`,children:`bone (O)`})]})})]});function ri(){let[e,t]=(0,_.useState)(!1);return(0,V.jsxs)(`div`,{className:`min-h-screen max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8`,children:[(0,V.jsxs)(`div`,{className:`text-center mb-8`,children:[(0,V.jsx)(`h1`,{className:`text-3xl md:text-4xl font-black text-slate-800 tracking-tight mb-4`,children:`英語構文モデルの比較`}),(0,V.jsxs)(`p`,{className:`text-lg text-slate-600 max-w-2xl mx-auto`,children:[`「The cute dog quickly ate the big bone.」を例に、`,(0,V.jsx)(`br`,{className:`hidden md:block`}),`異なるアプローチが `,(0,V.jsx)(`strong`,{children:`M（修飾語）`}),` をどう処理しているか比較します。`]})]}),(0,V.jsx)(Qr,{showM:e,setShowM:t}),(0,V.jsxs)(`div`,{className:`grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12`,children:[(0,V.jsx)($r,{showM:e}),(0,V.jsx)(ei,{showM:e}),(0,V.jsx)(ti,{showM:e}),(0,V.jsx)(ni,{showM:e})]})]})}function ii(){return(0,V.jsx)(`div`,{className:`w-full h-full overflow-auto bg-white text-black`,dangerouslySetInnerHTML:{__html:`<style>
    /* Kindle等の電子書籍リーダー向け最適化スタイル */
    body {
      font-family: serif;
      line-height: 1.8;
      padding: 5%;
      color: #000;
      word-wrap: break-word;
    }
    h1 {
      font-size: 1.8em;
      text-align: center;
      margin-bottom: 2em;
      border-bottom: 2px solid #000;
      padding-bottom: 0.5em;
      line-height: 1.4;
    }
    h2 {
      font-size: 1.5em;
      margin-top: 2.5em;
      margin-bottom: 1em;
      padding: 0.3em 0;
      border-bottom: 1px solid #333;
    }
    h3 {
      font-size: 1.2em;
      margin-top: 2em;
      margin-bottom: 0.8em;
      padding-left: 0.5em;
      border-left: 4px solid #666;
    }
    p {
      margin-bottom: 1em;
    }
    ul {
      margin-top: 0.5em;
      margin-bottom: 1.5em;
      padding-left: 1.5em;
    }
    li {
      margin-bottom: 1.2em;
    }
    .rule-box {
      border: 1px dashed #666;
      padding: 1em;
      margin-bottom: 1.5em;
    }
    .en {
      font-size: 0.85em;
      color: #444;
      font-family: sans-serif;
      margin-left: 0.4em;
    }
    .note {
      font-size: 0.9em;
      color: #333;
      margin-top: 0.2em;
      display: block;
    }
    /* 例文用のスタイル */
    .example {
      margin-top: 0.4em;
      padding-left: 1em;
      border-left: 2px solid #ccc;
      font-size: 0.95em;
      color: #222;
    }
    .example-line {
      margin-bottom: 0.3em;
    }
    /* 強調部分（該当する品詞・句・節） */
    .highlight {
      font-weight: bold;
    }
  </style>


  <h1>高校英文法<br>例文・英訳付き完全マッピング</h1>
  <p>本書は、英語の5文型（SVOCM）の各ポジションに、どの品詞・句・節が入るのかを整理したものです。約150の文法用語とその英訳、該当箇所を太字にした例文を収録しています。</p>

  <!-- ========================================== -->
  <!-- S: 主語 -->
  <!-- ========================================== -->
  <h2>第1章：S (主語) <span class="en">Subject</span></h2>
  
  <div class="rule-box">
    <p><strong>【役割】</strong> 動作の主体「〜は/が」<br>
    <strong>【絶対ルール】</strong> 動詞と副詞は絶対に入れない。名詞グループのみが担当する。</p>
  </div>

  <h3>[単語レベル] 名詞・代名詞 <span class="en">Noun / Pronoun</span></h3>
  <ul>
    <li><strong>名詞全般 <span class="en">Nouns in General</span></strong><br>
      可算名詞 <span class="en">(Countable Noun)</span> / 不可算名詞 <span class="en">(Uncountable Noun)</span>、固有名詞 <span class="en">(Proper Noun)</span> / 抽象名詞 <span class="en">(Abstract Noun)</span>、人称代名詞 主格 <span class="en">(Personal Pronoun: Subjective Case)</span>、指示代名詞 <span class="en">(Demonstrative Pronoun: this/that)</span>、不定代名詞 <span class="en">(Indefinite Pronoun: one/some/any)</span>
      <div class="example">
        <div class="example-line">・<strong>Dogs</strong> are friendly animals. (可算名詞)</div>
        <div class="example-line">・<strong>Water</strong> boils at 100 degrees. (不可算名詞)</div>
        <div class="example-line">・<strong>She</strong> is a doctor. (人称代名詞 主格)</div>
      </div>
    </li>
    <li><strong>特殊な主語 <span class="en">Special Subjects</span></strong><br>
      無生物主語 <span class="en">(Inanimate Subject)</span>、形式主語 <span class="en">(Formal Subject: it)</span>、状況の it <span class="en">(Impersonal "it")</span>
      <div class="example">
        <div class="example-line">・<strong>The news</strong> made her happy. (無生物主語)</div>
        <div class="example-line">・<strong>It</strong> is raining heavily. (状況の it)</div>
      </div>
    </li>
    <li><strong>例外的な名詞化 <span class="en">Nominalized Adjective</span></strong><br>
      the + 形容詞 <span class="en">(the + Adjective)</span> ※「〜な人々」の意味になる
      <div class="example">
        <div class="example-line">・<strong>The rich</strong> are not always happy. (the + 形容詞)</div>
      </div>
    </li>
  </ul>

  <h3>[句レベル] 名詞句 <span class="en">Noun Phrase</span></h3>
  <ul>
    <li><strong>準動詞 <span class="en">Verbal</span></strong><br>
      不定詞 名詞的用法 <span class="en">(Infinitive: Noun Use, To V)</span>、動名詞 <span class="en">(Gerund, V-ing)</span>、意味上の主語 <span class="en">(Logical Subject)</span>
      <div class="example">
        <div class="example-line">・<strong>To master English</strong> is difficult. (不定詞)</div>
        <div class="example-line">・<strong>Reading books</strong> is my hobby. (動名詞)</div>
        <div class="example-line">・<strong>For him to pass the exam</strong> is easy. (意味上の主語を伴う不定詞)</div>
      </div>
    </li>
  </ul>

  <h3>[節レベル] 名詞節 <span class="en">Noun Clause</span></h3>
  <ul>
    <li><strong>接続詞・疑問詞が導く節 <span class="en">Clause led by Conjunction / Interrogative</span></strong><br>
      that 節 <span class="en">(that-clause)</span>、if / whether 節 <span class="en">(if/whether-clause)</span>、間接疑問文 <span class="en">(Indirect Question)</span>
      <div class="example">
        <div class="example-line">・<strong>That he is honest</strong> is known to everyone. (that節)</div>
        <div class="example-line">・<strong>Whether she will come or not</strong> is uncertain. (whether節)</div>
        <div class="example-line">・<strong>Where he lives</strong> is a mystery. (間接疑問文)</div>
      </div>
    </li>
    <li><strong>関係詞が導く節 <span class="en">Relative Clause</span></strong><br>
      先行詞を含む関係代名詞 <span class="en">(Relative Pronoun with Antecedent: what)</span>、複合関係代名詞 <span class="en">(Compound Relative Pronoun: whoever/whatever)</span>
      <div class="example">
        <div class="example-line">・<strong>What he said</strong> is true. (関係代名詞 what)</div>
        <div class="example-line">・<strong>Whoever comes first</strong> will get the ticket. (複合関係代名詞)</div>
      </div>
    </li>
  </ul>


  <!-- ========================================== -->
  <!-- V: 述語動詞 -->
  <!-- ========================================== -->
  <h2>第2章：V (述語動詞) <span class="en">Verb</span></h2>
  
  <div class="rule-box">
    <p><strong>【役割】</strong> 文の結論「〜する/である」<br>
    <strong>【絶対ルール】</strong> 動詞のみが入る。準動詞（不定詞・動名詞・分詞）は単独では絶対に入れない。</p>
  </div>

  <h3>[単語レベル] 動詞 <span class="en">Verb</span></h3>
  <ul>
    <li><strong>動詞の種類 <span class="en">Types of Verbs</span></strong><br>
      自動詞 <span class="en">(Intransitive Verb: vi)</span> / 他動詞 <span class="en">(Transitive Verb: vt)</span>、状態動詞 <span class="en">(Stative Verb)</span> / 動作動詞 <span class="en">(Action Verb)</span>、使役動詞 <span class="en">(Causative Verb)</span>、知覚動詞 <span class="en">(Verb of Perception)</span>、群動詞 / 句動詞 <span class="en">(Phrasal Verb)</span>
      <div class="example">
        <div class="example-line">・He <strong>runs</strong> fast. (自動詞 動作動詞)</div>
        <div class="example-line">・She <strong>knows</strong> the answer. (他動詞 状態動詞)</div>
        <div class="example-line">・He <strong>looks at</strong> the picture. (群動詞)</div>
      </div>
    </li>
    <li><strong>時制 <span class="en">Tense</span></strong><br>
      現在形 <span class="en">(Present Tense)</span> / 過去形 <span class="en">(Past Tense)</span> / 未来形 <span class="en">(Future Tense)</span>、進行形 <span class="en">(Progressive Form)</span>、完了形 <span class="en">(Perfect Form)</span>、完了進行形 <span class="en">(Perfect Progressive Form)</span>
      <div class="example">
        <div class="example-line">・I <strong>am studying</strong> English now. (現在進行形)</div>
        <div class="example-line">・She <strong>has lived</strong> here for ten years. (現在完了形)</div>
      </div>
    </li>
    <li><strong>態 <span class="en">Voice</span></strong><br>
      能動態 <span class="en">(Active Voice)</span>、受動態 <span class="en">(Passive Voice)</span>、群動詞の受動態
      <div class="example">
        <div class="example-line">・The window <strong>was broken</strong> by Tom. (受動態)</div>
        <div class="example-line">・He <strong>was laughed at</strong> by everyone. (群動詞の受動態)</div>
      </div>
    </li>
    <li><strong>法 <span class="en">Mood</span></strong><br>
      直説法 <span class="en">(Indicative Mood)</span>、命令法 <span class="en">(Imperative Mood)</span>、仮定法過去 <span class="en">(Subjunctive Past)</span> / 過去完了 <span class="en">(Subjunctive Past Perfect)</span>、ifの省略 <span class="en">(Omission)</span> と 倒置 <span class="en">(Inversion)</span>
      <div class="example">
        <div class="example-line">・<strong>Be</strong> quiet! (命令法)</div>
        <div class="example-line">・If I <strong>were</strong> a bird, I <strong>would fly</strong> to you. (仮定法過去)</div>
        <div class="example-line">・<strong>Had</strong> I <strong>known</strong> the truth, I <strong>would have told</strong> you. (ifの省略と倒置)</div>
      </div>
    </li>
    <li><strong>助動詞 <span class="en">Auxiliary Verb</span></strong><br>
      法助動詞 <span class="en">(Modal Auxiliary)</span>、used to / ought to、助動詞 + have + 過去分詞 <span class="en">(Past Participle)</span>
      <div class="example">
        <div class="example-line">・You <strong>must</strong> do it. (法助動詞)</div>
        <div class="example-line">・He <strong>may have missed</strong> the train. (助動詞+have+過去分詞: 過去の推量)</div>
      </div>
    </li>
  </ul>


  <!-- ========================================== -->
  <!-- O: 目的語 -->
  <!-- ========================================== -->
  <h2>第3章：O (目的語) <span class="en">Object</span></h2>

  <div class="rule-box">
    <p><strong>【役割】</strong> 動作の対象「〜を/に」<br>
    <strong>【絶対ルール】</strong> 主語(S)と同じく、名詞グループのみが担当する。</p>
  </div>

  <h3>[単語レベル] 名詞・代名詞 <span class="en">Noun / Pronoun</span></h3>
  <ul>
    <li><strong>名詞全般 <span class="en">Nouns in General</span></strong><br>
      名詞全般 <span class="en">(Noun)</span>、人称代名詞 目的格 <span class="en">(Personal Pronoun: Objective Case)</span>
      <div class="example">
        <div class="example-line">・I like <strong>apples</strong>. (名詞)</div>
        <div class="example-line">・She helped <strong>him</strong> yesterday. (人称代名詞 目的格)</div>
      </div>
    </li>
    <li><strong>特殊な目的語 <span class="en">Special Objects</span></strong><br>
      形式目的語 <span class="en">(Formal Object: it)</span>、再帰代名詞 <span class="en">(Reflexive Pronoun: -self)</span>、同族目的語 <span class="en">(Cognate Object)</span>
      <div class="example">
        <div class="example-line">・I found <strong>it</strong> difficult to read the book. (形式目的語)</div>
        <div class="example-line">・He introduced <strong>himself</strong> to the class. (再帰代名詞)</div>
        <div class="example-line">・She lived <strong>a happy life</strong>. (同族目的語)</div>
      </div>
    </li>
  </ul>

  <h3>[句レベル] 名詞句 <span class="en">Noun Phrase</span></h3>
  <ul>
    <li><strong>準動詞 <span class="en">Verbal</span></strong><br>
      不定詞 名詞的用法 <span class="en">(Infinitive: Noun Use)</span>、動名詞 <span class="en">(Gerund)</span>、疑問詞 + to V <span class="en">(Interrogative + Infinitive)</span>
      <div class="example">
        <div class="example-line">・I want <strong>to go there</strong>. (不定詞 名詞的用法)</div>
        <div class="example-line">・She enjoys <strong>playing tennis</strong>. (動名詞)</div>
        <div class="example-line">・I don't know <strong>what to do</strong>. (疑問詞 + to V)</div>
      </div>
    </li>
  </ul>

  <h3>[節レベル] 名詞節 <span class="en">Noun Clause</span></h3>
  <ul>
    <li><strong>節の種類 <span class="en">Types of Clauses</span></strong><br>
      that 節 <span class="en">(that-clause)</span>、if / whether 節 <span class="en">(if/whether-clause)</span>、間接疑問文 <span class="en">(Indirect Question)</span>、関係代名詞 what 節 <span class="en">(what-clause)</span>
      <div class="example">
        <div class="example-line">・I know <strong>that he is busy</strong>. (that節)</div>
        <div class="example-line">・Tell me <strong>where he lives</strong>. (間接疑問文)</div>
        <div class="example-line">・I can't believe <strong>what he said</strong>. (関係代名詞 what節)</div>
      </div>
    </li>
  </ul>


  <!-- ========================================== -->
  <!-- C: 補語 -->
  <!-- ========================================== -->
  <h2>第4章：C (補語) <span class="en">Complement</span></h2>

  <div class="rule-box">
    <p><strong>【役割】</strong> SやOの状態を補足して説明する<br>
    <strong>【絶対ルール】</strong> 名詞（S/Oとイコールになる）か、形容詞（S/Oの状態を表す）のみが入る。</p>
  </div>

  <h3>[単語レベル] 名詞と形容詞 <span class="en">Noun / Adjective</span></h3>
  <ul>
    <li><strong>名詞用法：同格的 <span class="en">Noun Use: Appositive</span></strong><br>
      主格補語 <span class="en">(Subjective Complement: SVC)</span>、目的格補語 <span class="en">(Objective Complement: SVOC)</span>
      <div class="example">
        <div class="example-line">・He is <strong>a teacher</strong>. (主格補語: He = a teacher)</div>
        <div class="example-line">・They elected him <strong>president</strong>. (目的格補語: him = president)</div>
      </div>
    </li>
    <li><strong>形容詞用法：状態 <span class="en">Adjective Use: State</span></strong><br>
      叙述用法 <span class="en">(Predicative Use)</span>
      <div class="example">
        <div class="example-line">・The flower is <strong>beautiful</strong>. (主格補語)</div>
        <div class="example-line">・The news made me <strong>happy</strong>. (目的格補語)</div>
      </div>
    </li>
  </ul>

  <h3>[句レベル] 形容詞句等 <span class="en">Adjective Phrase etc.</span></h3>
  <ul>
    <li><strong>準動詞 <span class="en">Verbal</span></strong><br>
      不定詞 形容詞的用法 <span class="en">(Infinitive: Adjective Use)</span>、現在分詞 <span class="en">(Present Participle)</span>、過去分詞 <span class="en">(Past Participle)</span>、原形不定詞 <span class="en">(Bare Infinitive)</span> ※使役/知覚動詞のC
      <div class="example">
        <div class="example-line">・You are <strong>to observe the rule</strong>. (be to 不定詞: 義務)</div>
        <div class="example-line">・I saw him <strong>running</strong>. (現在分詞: 進行の状態)</div>
        <div class="example-line">・I had my hair <strong>cut</strong>. (過去分詞: 受動の状態)</div>
        <div class="example-line">・I made him <strong>go</strong>. (原形不定詞: 使役動詞のC)</div>
      </div>
    </li>
  </ul>

  <h3>[節レベル] 名詞節 <span class="en">Noun Clause</span></h3>
  <ul>
    <li><strong>節の種類 <span class="en">Types of Clauses</span></strong><br>
      that 節 <span class="en">(that-clause)</span>、関係代名詞 what 節 <span class="en">(what-clause)</span>
      <div class="example">
        <div class="example-line">・The truth is <strong>that he was absent</strong>. (that節)</div>
        <div class="example-line">・This is <strong>what I want</strong>. (関係代名詞 what節)</div>
      </div>
    </li>
  </ul>


  <!-- ========================================== -->
  <!-- M: 修飾語 -->
  <!-- ========================================== -->
  <h2>第5章：M (修飾語) <span class="en">Modifier</span></h2>

  <div class="rule-box">
    <p><strong>【役割】</strong> 文の骨格(SVOC)を飾るおまけの説明<br>
    <strong>【絶対ルール】</strong> 名詞単独では入れない。形容詞グループ（名詞を修飾）か、副詞グループ（名詞以外を修飾）が担当する。</p>
  </div>

  <h3>[単語レベル] 形容詞と副詞 <span class="en">Adjective / Adverb</span></h3>
  <ul>
    <li><strong>名詞を修飾する形容詞 <span class="en">Adjective</span></strong><br>
      限定用法 <span class="en">(Attributive Use)</span>、冠詞 <span class="en">(Article)</span>、数量形容詞 <span class="en">(Quantitative Adjective)</span>
      <div class="example">
        <div class="example-line">・Look at that <strong>tall</strong> building. (限定用法)</div>
        <div class="example-line">・I have <strong>many</strong> books. (数量形容詞)</div>
      </div>
    </li>
    <li><strong>名詞以外を修飾する副詞 <span class="en">Adverb</span></strong><br>
      様態 <span class="en">(Manner)</span>・場所 <span class="en">(Place)</span>・時 <span class="en">(Time)</span>・程度 <span class="en">(Degree)</span>、頻度の副詞 <span class="en">(Adverb of Frequency)</span>、疑問副詞 <span class="en">(Interrogative Adverb)</span>
      <div class="example">
        <div class="example-line">・He runs <strong>very fast</strong>. (程度・様態)</div>
        <div class="example-line">・I <strong>always</strong> get up <strong>early</strong>. (頻度・時)</div>
      </div>
    </li>
    <li><strong>否定語 <span class="en">Negative Word</span></strong><br>
      全体否定 <span class="en">(Total Negation)</span>、準否定語 <span class="en">(Quasi-Negative)</span>、部分否定 <span class="en">(Partial Negation)</span>
      <div class="example">
        <div class="example-line">・I do <strong>not</strong> know him. (全体否定)</div>
        <div class="example-line">・I <strong>hardly</strong> know him. (準否定語: ほとんど〜ない)</div>
      </div>
    </li>
  </ul>

  <h3>[句レベル] 準動詞・前置詞句 <span class="en">Verbals / Prepositional Phrase</span></h3>
  <ul>
    <li><strong>形容詞句 (名詞修飾) <span class="en">Adjective Phrase</span></strong><br>
      不定詞 形容詞的用法 <span class="en">(Infinitive: Adjective Use)</span>、分詞の後置修飾 <span class="en">(Postmodification by Participle)</span>、前置詞句 <span class="en">(Prepositional Phrase)</span>
      <div class="example">
        <div class="example-line">・I have a lot of work <strong>to do</strong>. (不定詞 形容詞的用法)</div>
        <div class="example-line">・The boy <strong>running over there</strong> is my brother. (現在分詞の後置修飾)</div>
        <div class="example-line">・The book <strong>on the desk</strong> is mine. (前置詞句)</div>
      </div>
    </li>
    <li><strong>副詞句 (動/形/文修飾) <span class="en">Adverb Phrase</span></strong><br>
      不定詞 副詞的用法 <span class="en">(Infinitive: Adverbial Use)</span>、独立不定詞 <span class="en">(Absolute Infinitive)</span>、分詞構文 <span class="en">(Participial Construction)</span>、付帯状況の with <span class="en">(Attendant Circumstance)</span>
      <div class="example">
        <div class="example-line">・I went there <strong>to see him</strong>. (不定詞 副詞的用法: 目的)</div>
        <div class="example-line">・<strong>To tell the truth</strong>, I don't like it. (独立不定詞)</div>
        <div class="example-line">・<strong>Seeing me</strong>, he ran away. (分詞構文: 時)</div>
        <div class="example-line">・He listened to the music <strong>with his eyes closed</strong>. (付帯状況の with)</div>
      </div>
    </li>
  </ul>

  <h3>[節レベル] 形容詞節・副詞節 <span class="en">Adjective / Adverb Clause</span></h3>
  <ul>
    <li><strong>形容詞節 (名詞修飾) <span class="en">Adjective Clause</span></strong><br>
      関係代名詞 <span class="en">(Relative Pronoun)</span>、関係副詞 <span class="en">(Relative Adverb)</span>、非制限用法 <span class="en">(Non-Restrictive Use)</span>
      <div class="example">
        <div class="example-line">・I have a friend <strong>who lives in London</strong>. (関係代名詞)</div>
        <div class="example-line">・The house <strong>where I was born</strong> is old. (関係副詞)</div>
      </div>
    </li>
    <li><strong>副詞節 (動/形/文修飾) <span class="en">Adverb Clause</span></strong><br>
      従属接続詞 <span class="en">(Subordinating Conjunction)</span>、複合関係副詞 <span class="en">(Compound Relative Adverb)</span>
      <div class="example">
        <div class="example-line">・I stayed home <strong>because it rained</strong>. (従属接続詞: 原因)</div>
        <div class="example-line">・<strong>Whenever I visit him</strong>, he is out. (複合関係副詞: 譲歩)</div>
      </div>
    </li>
  </ul>


  <!-- ========================================== -->
  <!-- メタ文法 -->
  <!-- ========================================== -->
  <h2>第6章：メタ文法 <span class="en">Meta-Grammar</span></h2>
  <p>SVOCMのポジション配置が完了した文を、さらに操作・変形するためのルール群です。</p>

  <h4>1. 倒置 <span class="en">Inversion</span></h4>
  <p>強調したい要素（否定副詞、場所の副詞等）を文頭に出し、後ろの語順を VS（疑問文の語順）にひっくり返す操作。</p>
  <div class="example">
    <div class="example-line">・<strong>Never have I</strong> seen such a beautiful sunset.</div>
    <div class="example-line">・<strong>Here comes</strong> the bus.</div>
  </div>

  <h4>2. 強調構文 <span class="en">Cleft Sentence / Emphatic Construction</span></h4>
  <p>特定の要素（S, O, M等）を It is と that の間に挟み込んでクローズアップする操作。</p>
  <div class="example">
    <div class="example-line">・<strong>It was</strong> Tom <strong>that</strong> broke the window yesterday. (主語Tomの強調)</div>
    <div class="example-line">・<strong>It was</strong> yesterday <strong>that</strong> Tom broke the window. (副詞yesterdayの強調)</div>
  </div>

  <h4>3. 比較 <span class="en">Comparison</span></h4>
  <p>形容詞・副詞の語形変化（原級: <span class="en">Positive Degree</span>, 比較級: <span class="en">Comparative Degree</span>, 最上級: <span class="en">Superlative Degree</span>）と、対象を追加するルール。クジラ構文 <span class="en">(no more ~ than construction)</span> などもここに含まれます。</p>
  <div class="example">
    <div class="example-line">・He is <strong>taller than</strong> I. (比較級)</div>
    <div class="example-line">・A whale is <strong>no more</strong> a fish <strong>than</strong> a horse is. (クジラ構文)</div>
  </div>

  <br><br><br> <!-- 末尾の余白 -->
`}})}function ai(){return(0,V.jsx)(`div`,{className:`w-full h-full overflow-auto bg-white text-black`,dangerouslySetInnerHTML:{__html:`<style>
      @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@400;700&display=swap');
      
      body {
        font-family: 'Noto Sans JP', sans-serif;
        background-color: #f8fafc;
        color: #334155;
      }

      /* 鉄道の路線図風の線 */
      .rail-line {
        position: relative;
      }
      .rail-line::before {
        content: '';
        position: absolute;
        top: 0;
        bottom: 0;
        left: 24px;
        width: 6px;
        background-color: #cbd5e1;
        z-index: 0;
        border-radius: 3px;
      }
      
      /* 駅（セクション）のマーカー */
      .station-marker {
        position: relative;
        z-index: 1;
      }
      
      /* 列車の箱（CSS図形） */
      .train-car {
        background: linear-gradient(to bottom, #f1f5f9 0%, #e2e8f0 100%);
        border: 2px solid #94a3b8;
        border-radius: 4px 4px 2px 2px;
        position: relative;
      }
      
      /* 仮定法用：シミュレーション上の半透明の列車 */
      .train-car-virtual {
        background: repeating-linear-gradient(
          45deg,
          #f8fafc,
          #f8fafc 10px,
          #f1f5f9 10px,
          #f1f5f9 20px
        );
        border: 2px dashed #94a3b8;
        border-radius: 4px 4px 2px 2px;
        position: relative;
        opacity: 0.8;
      }
      
      .train-window {
        background-color: #38bdf8;
        border: 1px solid #0284c7;
        border-radius: 2px;
      }
      .train-wheel {
        width: 12px;
        height: 12px;
        background-color: #475569;
        border-radius: 50%;
        position: absolute;
        bottom: -6px;
      }
    </style>


    <div class="max-w-4xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden border border-slate-200">
      
      <!-- ヘッダー部分 -->
      <header class="bg-slate-800 text-white p-8 text-center border-b-4 border-sky-500">
        <h1 class="text-3xl md:text-4xl font-bold mb-2 flex justify-center items-center gap-3">
          <span class="text-5xl">🚅</span> 英文法・鉄道運行マップ
        </h1>
        <p class="text-slate-300">〜 鉄道路線とダイヤで理解する英語の構造アプローチ 〜</p>
      </header>

      <!-- メインコンテンツ（路線図風レイアウト） -->
      <div class="p-6 md:p-10 rail-line space-y-12">

        <!-- 1. 基本文型 -->
        <div class="relative pl-16">
          <div class="station-marker absolute left-0 top-1 w-14 h-14 bg-sky-500 rounded-full border-4 border-white shadow flex items-center justify-center text-white text-xl font-bold">1</div>
          
          <h2 class="text-2xl font-bold text-slate-800 mb-3 flex items-center gap-2 flex-wrap">
            基本文型（SVOC） <span class="text-lg font-normal text-slate-500">＝ 新幹線の指定席</span>
          </h2>
          <p class="mb-4 leading-relaxed">
            文章（Sentence）の核となる骨組みは、座席数が厳密に決まった新幹線の指定席。ルールに従って乗客である単語（Word）、句（Phrase）、節（Clause）が座ります。
          </p>
          
          <!-- 指定席の図解 -->
          <div class="bg-slate-50 p-4 rounded-lg border border-slate-200 mb-4">
            <div class="flex flex-wrap gap-2 justify-center text-center font-mono font-bold">
              <div class="bg-sky-100 border-2 border-sky-400 p-3 rounded w-32 flex flex-col justify-between">
                <div class="text-xs text-sky-700 leading-tight mb-2">Subject<br><span class="text-[10px] font-normal">(主語)</span></div>
                <div class="text-2xl text-sky-800">S</div>
              </div>
              <div class="bg-rose-100 border-2 border-rose-400 p-3 rounded w-32 flex flex-col justify-between">
                <div class="text-xs text-rose-700 leading-tight mb-2">Verb<br><span class="text-[10px] font-normal">(動詞)</span></div>
                <div class="text-2xl text-rose-800">V</div>
              </div>
              <div class="bg-emerald-100 border-2 border-emerald-400 p-3 rounded w-32 flex flex-col justify-between">
                <div class="text-xs text-emerald-700 leading-tight mb-2">Object<br><span class="text-[10px] font-normal">(目的語)</span></div>
                <div class="text-2xl text-emerald-800">O</div>
              </div>
              <div class="bg-amber-100 border-2 border-amber-400 p-3 rounded w-32 flex flex-col justify-between">
                <div class="text-xs text-amber-700 leading-tight mb-2">Complement<br><span class="text-[10px] font-normal">(補語)</span></div>
                <div class="text-2xl text-amber-800">C</div>
              </div>
            </div>
            <p class="text-sm text-center mt-4 text-slate-500 bg-white inline-block px-3 py-1 rounded-full border border-slate-200 shadow-sm mx-auto flex w-fit">
              ※各席には1語が座ることもあれば、句(Phrase)・節(Clause)が複数席をぶち抜いて座ることも。
            </p>
          </div>
        </div>

        <!-- 2. 修飾語 -->
        <div class="relative pl-16">
          <div class="station-marker absolute left-0 top-1 w-14 h-14 bg-sky-500 rounded-full border-4 border-white shadow flex items-center justify-center text-white text-xl font-bold">2</div>
          
          <h2 class="text-2xl font-bold text-slate-800 mb-3 flex items-center gap-2 flex-wrap">
            修飾語（Modifier） <span class="text-lg font-normal text-slate-500">＝ 通路に立つ立ち客</span>
          </h2>
          <p class="mb-4 leading-relaxed">
            修飾語（Modifier: M）は指定席を持たないフリーな乗客。神出鬼没に現れますが、文の要素にはならないため、最悪全員降りても列車は目的地へ走れます。
          </p>
          
          <!-- 立ち客の図解 -->
          <div class="bg-slate-50 p-4 rounded-lg border border-slate-200 text-center relative overflow-hidden">
             <div class="flex flex-wrap items-center justify-center gap-2 md:gap-4">
                <div class="text-slate-500 animate-pulse flex flex-col items-center">
                  <span class="text-xs font-bold mb-1">Modifier</span>
                  <span>🚶‍♂️ (M)</span>
                </div>
                <div class="bg-white border-2 border-slate-300 px-4 py-2 rounded shadow-sm">
                  <span class="text-xs text-sky-600 font-bold block mb-1">Subject</span>
                  [S] The train
                </div>
                <div class="bg-white border-2 border-slate-300 px-4 py-2 rounded shadow-sm">
                  <span class="text-xs text-rose-600 font-bold block mb-1">Verb</span>
                  [V] stopped
                </div>
                <div class="text-slate-500 animate-pulse flex flex-col items-center">
                  <span class="text-xs font-bold mb-1">Modifier</span>
                  <span>🚶‍♀️ (M)</span>
                </div>
             </div>
             <p class="text-sm mt-4 text-slate-600 font-mono bg-slate-200 p-2 rounded">
               <span class="text-slate-400">Suddenly [M],</span> the train [S] stopped [V] <span class="text-slate-400">at the platform [M].</span>
             </p>
          </div>
        </div>

        <!-- 3. 連結車両 -->
        <div class="relative pl-16">
          <div class="station-marker absolute left-0 top-1 w-14 h-14 bg-sky-500 rounded-full border-4 border-white shadow flex items-center justify-center text-white text-xl font-bold">3</div>
          
          <h2 class="text-2xl font-bold text-slate-800 mb-3 flex items-center gap-2 flex-wrap">
            従属節（Dependent Clauses） <span class="text-lg font-normal text-slate-500">＝ 連結車両</span>
          </h2>
          <p class="mb-4 leading-relaxed">
            that節やwh節など、接続詞（Conjunction）や関係詞（Relative）を使って後ろに「ガチャン！」と新しい車両（節: Clause）を連結します。連結車両の中にも小さな指定席（s, v...）が並んでいます。
          </p>
          
          <!-- 連結車両の図解（CSS） -->
          <div class="bg-sky-50 p-6 rounded-lg border border-sky-200 overflow-x-auto">
            <div class="flex items-center min-w-max pb-2">
              
              <!-- 先頭車両 (主節) -->
              <div class="train-car w-32 h-24 flex flex-col items-center justify-center px-2">
                <div class="text-[10px] text-slate-500 font-bold mt-1">Main Clause</div>
                <div class="flex gap-2 w-full px-2 mt-1">
                  <div class="train-window w-8 h-6 flex items-center justify-center text-xs font-bold text-white">S</div>
                  <div class="train-window w-8 h-6 flex items-center justify-center text-xs font-bold text-white">V</div>
                </div>
                <div class="text-xs font-bold mt-2 text-slate-700">I think</div>
                <div class="train-wheel left-2"></div>
                <div class="train-wheel right-2"></div>
              </div>
              
              <!-- 連結器 -->
              <div class="w-12 border-b-4 border-slate-800 flex flex-col justify-center items-center text-[10px] font-bold text-rose-600 pb-1">
                that<br><span class="text-[8px] font-normal text-slate-500">(Conjunction)</span>
              </div>
              
              <!-- 連結車両 1 (that節) -->
              <div class="train-car w-44 h-24 flex flex-col items-center justify-center px-2">
                <div class="text-[10px] text-slate-500 font-bold mt-1">Noun Clause</div>
                <div class="flex gap-1 w-full px-2 mt-1 justify-center">
                  <div class="train-window w-6 h-6 flex items-center justify-center text-xs text-white">s</div>
                  <div class="train-window w-6 h-6 flex items-center justify-center text-xs text-white">v</div>
                  <div class="train-window w-6 h-6 flex items-center justify-center text-xs text-white">o</div>
                </div>
                <div class="text-[10px] font-bold mt-2 text-slate-700 truncate">the passenger lost...</div>
                <div class="train-wheel left-4"></div>
                <div class="train-wheel right-4"></div>
              </div>

               <!-- 連結器 -->
               <div class="w-12 border-b-4 border-slate-800 flex flex-col justify-center items-center text-[10px] font-bold text-rose-600 pb-1">
                which<br><span class="text-[8px] font-normal text-slate-500">(Relative)</span>
              </div>

              <!-- 連結車両 2 (wh節) -->
              <div class="train-car w-32 h-24 flex flex-col items-center justify-center px-2">
                <div class="text-[10px] text-slate-500 font-bold mt-1">Adjective Clause</div>
                <div class="flex gap-2 w-full px-2 mt-1 justify-center">
                  <div class="train-window w-6 h-6 flex items-center justify-center text-xs text-white">s</div>
                  <div class="train-window w-6 h-6 flex items-center justify-center text-xs text-white">v</div>
                </div>
                <div class="text-[10px] font-bold mt-2 text-slate-700">he bought</div>
                <div class="train-wheel left-2"></div>
                <div class="train-wheel right-2"></div>
              </div>

            </div>
          </div>
        </div>

        <!-- 4. 時制と相 (NEW) -->
        <div class="relative pl-16">
          <div class="station-marker absolute left-0 top-1 w-14 h-14 bg-indigo-500 rounded-full border-4 border-white shadow flex items-center justify-center text-white text-xl font-bold">4</div>
          
          <h2 class="text-2xl font-bold text-slate-800 mb-3 flex items-center gap-2 flex-wrap">
            時制と相（Tense & Aspect） <span class="text-lg font-normal text-slate-500">＝ 運行表と現在地</span>
          </h2>
          <p class="mb-4 leading-relaxed">
            動詞（V）の形は、列車の現在位置や運行状況を知らせるGPSのようなものです。単なる時間（過去・現在・未来）だけでなく、その行動が「完了したか」「進行中か」という状態（相）も示します。
          </p>

          <div class="bg-indigo-50 p-4 rounded-lg border border-indigo-200">
            <ul class="space-y-4">
              <li class="flex items-start gap-3">
                <div class="bg-white p-2 rounded shadow-sm border border-slate-200 text-lg">📍</div>
                <div>
                  <strong class="text-indigo-800">現在形（Present Tense）：時刻表に載っている「普遍的な運行」</strong><br>
                  <span class="text-sm text-slate-600">"The train leaves at 8." (この列車はいつも8時に発車する性質・事実)</span>
                </div>
              </li>
              <li class="flex items-start gap-3">
                <div class="bg-white p-2 rounded shadow-sm border border-slate-200 text-lg">💨</div>
                <div>
                  <strong class="text-indigo-800">進行形（Progressive Aspect）：目の前を通過中の「臨場感」</strong><br>
                  <span class="text-sm text-slate-600">"The train is leaving." (まさに今、ホームから動き出している最中！)</span>
                </div>
              </li>
              <li class="flex items-start gap-3">
                <div class="bg-white p-2 rounded shadow-sm border border-slate-200 text-lg">🏁</div>
                <div>
                  <strong class="text-indigo-800">完了形（Perfect Aspect）：到着済みの状態を今も「引き継いでいる」</strong><br>
                  <span class="text-sm text-slate-600">"The train has left." (すでに発車した。だから今、ホームに列車はない状態だ)</span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <!-- 5. 仮定法 (NEW) -->
        <div class="relative pl-16">
          <div class="station-marker absolute left-0 top-1 w-14 h-14 bg-purple-500 rounded-full border-4 border-white shadow flex items-center justify-center text-white text-xl font-bold">5</div>
          
          <h2 class="text-2xl font-bold text-slate-800 mb-3 flex items-center gap-2 flex-wrap">
            仮定法（Subjunctive Mood） <span class="text-lg font-normal text-slate-500">＝ シミュレーションダイヤ</span>
          </h2>
          <p class="mb-4 leading-relaxed">
            現実の線路（直説法）を走っているのではなく、「もしあの路線を走らせたら？」という机上の空論。現実との距離感を出すために、あえて**「時制を過去（一つ前の駅）」**にずらして表現します。
          </p>

          <div class="grid md:grid-cols-2 gap-4">
            <!-- 事前検討 -->
            <div class="bg-purple-50 p-5 rounded border border-purple-200 relative">
              <h3 class="font-bold text-purple-800 flex items-center gap-2 mb-2">
                <span class="text-xl">🗺️</span> 事前検討（仮定法過去）
              </h3>
              <p class="text-sm text-purple-700 font-medium mb-3">「もし今、特急を走らせたら、間に合うのになぁ…（実際は走っていない）」</p>
              <div class="bg-white p-4 rounded shadow-sm border border-slate-200 font-mono text-sm relative overflow-hidden h-24 flex flex-col justify-center">
                <!-- 幽霊列車のCSS -->
                <div class="train-car-virtual w-20 h-10 absolute right-2 top-2 flex items-center justify-center text-[10px] text-slate-500 font-bold bg-white/50 backdrop-blur-sm">
                  Virtual
                </div>
                <div>If I <strong>had</strong> a rapid train,</div>
                <div>I <strong>could</strong> arrive on time.</div>
              </div>
            </div>
            <!-- 事後評価 -->
            <div class="bg-purple-50 p-5 rounded border border-purple-200 relative">
              <h3 class="font-bold text-purple-800 flex items-center gap-2 mb-2">
                <span class="text-xl">📊</span> 事後評価（仮定法過去完了）
              </h3>
              <p class="text-sm text-purple-700 font-medium mb-3">「あの時、急行に乗っていれば、遅れなかったのに…（実際は乗り遅れた）」</p>
              <div class="bg-white p-4 rounded shadow-sm border border-slate-200 font-mono text-sm relative overflow-hidden h-24 flex flex-col justify-center">
                <!-- 幽霊列車のCSS -->
                <div class="train-car-virtual w-20 h-10 absolute right-2 top-2 flex items-center justify-center text-[10px] text-slate-500 font-bold bg-white/50 backdrop-blur-sm">
                  Virtual
                </div>
                <div>If I <strong>had caught</strong> the express,</div>
                <div>I <strong>would not have been</strong> late.</div>
              </div>
            </div>
          </div>
          <p class="text-sm mt-3 text-slate-600 bg-slate-100 p-3 rounded-lg border border-slate-200 inline-block w-full">
            💡 <strong class="text-purple-600">時制を1つ過去にずらす理由：</strong> 「これは現実の今の話ではなく、シミュレーション（仮想）の列車ですよ」という読者へのアナウンスです。
          </p>
        </div>

        <!-- 6. パラグラフと乗り換え -->
        <div class="relative pl-16">
          <div class="station-marker absolute left-0 top-1 w-14 h-14 bg-emerald-500 rounded-full border-4 border-white shadow flex items-center justify-center text-white text-xl font-bold">6</div>
          
          <h2 class="text-2xl font-bold text-slate-800 mb-3 flex items-center gap-2 flex-wrap">
            パラグラフ展開（Paragraphs） <span class="text-lg font-normal text-slate-500">＝ 環状線と乗り換え</span>
          </h2>
          <p class="mb-4 leading-relaxed">
            1つの段落（Paragraph）は1つの主題（Topic）を回る環状線（山手線）。段落が変わるときは、別の路線（京浜東北線）へのスムーズな乗り換えです。
          </p>
          
          <div class="grid md:grid-cols-2 gap-4">
            <div class="bg-emerald-50 p-5 rounded border border-emerald-200 text-center flex flex-col justify-center">
              <div class="text-4xl mb-3">🔁</div>
              <h3 class="font-bold text-emerald-800 text-lg">Topic & Paragraph</h3>
              <p class="text-sm text-emerald-700 mt-2 font-medium">One Paragraph, One Topic.</p>
              <p class="text-xs text-emerald-600 mt-1">軌道を外れず、1つのテーマで1周する山手線ダイヤ。</p>
            </div>
            <div class="bg-emerald-50 p-5 rounded border border-emerald-200 text-center flex flex-col justify-center">
              <div class="text-4xl mb-3">🔀</div>
              <h3 class="font-bold text-emerald-800 text-lg">Discourse Markers</h3>
              <p class="text-sm text-emerald-700 mt-2 font-medium">However, Therefore, In addition...</p>
              <p class="text-xs text-emerald-600 mt-1">論理展開の標識（ディスコースマーカー）が乗り換え案内板。</p>
            </div>
          </div>
        </div>

        <!-- 7. 文章の締め -->
        <div class="relative pl-16 pb-8">
          <div class="station-marker absolute left-0 top-1 w-14 h-14 bg-slate-800 rounded-full border-4 border-white shadow flex items-center justify-center text-white text-xl font-bold">終</div>
          
          <h2 class="text-2xl font-bold text-slate-800 mb-3 flex items-center gap-2 flex-wrap">
            文章の締め（Conclusion） <span class="text-lg font-normal text-slate-500">＝ 車掌の停止確認</span>
          </h2>
          <p class="mb-4 leading-relaxed">
            長旅の終わり。車掌（筆者: Author）が安全な到着を確認し、乗客（読者: Reader）を「納得の結論」という終着駅のホームへ送り出します。
          </p>

          <div class="bg-slate-800 text-white p-6 rounded-lg text-center mt-6 shadow-inner relative overflow-hidden">
            <!-- 背景の装飾 -->
            <div class="absolute -right-4 -bottom-4 text-7xl opacity-10">🚉</div>
            <div class="text-5xl mb-4">🚉</div>
            <div class="text-2xl font-bold mb-2 tracking-widest text-sky-300">CONCLUSION</div>
            <p class="text-slate-300 text-sm mt-4 border-t border-slate-600 pt-4 max-w-sm mx-auto">
              「よし、すべての車両（パラグラフ）が定刻通り、安全に到着したな。」
            </p>
          </div>
        </div>

      </div>
    </div>

  `}})}function oi(){return(0,V.jsx)(`div`,{className:`w-full h-full overflow-auto bg-white text-black`,dangerouslySetInnerHTML:{__html:`<style>
    body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; }
    table { border-collapse: collapse; width: 100%; margin-bottom: 2rem; background-color: white; }
    th, td { border: 1px solid #e2e8f0; padding: 12px 16px; text-align: left; vertical-align: top; }
    th { color: #1e293b; font-weight: 700; font-size: 0.875rem; text-transform: uppercase; letter-spacing: 0.05em; }
    
    /* Section Headers */
    .sec-syntactic th { background-color: #f1f5f9; }
    .sec-semantic th { background-color: #f0fdfa; }
    .sec-morphological th { background-color: #fdf4ff; }
    .sec-functional th { background-color: #fffbeb; }
    .sec-special th { background-color: #f8fafc; }

    /* Category Cells */
    .cat-syntactic { background-color: #e2e8f0; color: #334155; font-weight: bold; width: 15%; }
    .cat-semantic { background-color: #ccfbf1; color: #0f766e; font-weight: bold; width: 15%; }
    .cat-morphological { background-color: #fae8ff; color: #86198f; font-weight: bold; width: 15%; }
    .cat-functional { background-color: #fef3c7; color: #b45309; font-weight: bold; width: 15%; }
    .cat-special { background-color: #e2e8f0; color: #475569; font-weight: bold; width: 15%; }

    .term-en { display: block; font-size: 0.75rem; color: #64748b; font-weight: normal; margin-top: 2px; }
    .both { font-weight: 800; font-style: italic; color: #4f46e5; }
    .tag { display: inline-block; padding: 2px 6px; border-radius: 4px; background-color: #f1f5f9; font-size: 0.75rem; border: 1px solid #cbd5e1; margin-right: 4px; margin-bottom: 4px;}
  </style>

  <div class="max-w-7xl mx-auto rounded-xl shadow-lg overflow-hidden border border-slate-200">
    <div class="bg-slate-800 p-6 text-white">
      <h1 class="text-2xl font-bold tracking-wide">英語動詞 (Verbs) 文法定義・完全網羅テーブル</h1>
      <p class="text-slate-300 mt-2 text-sm leading-relaxed">
        英語の動詞が持つすべての文法属性（構文、意味、形態、機能）を定義づけたマスター表です。<br>
        例文アプリのDB設計において、これらの属性をフラグやタグとして管理することで、精度の高い出題が可能になります。
      </p>
    </div>

    <!-- 1. 構文的分類 (Syntactic Classification) -->
    <div class="overflow-x-auto">
      <table class="sec-syntactic">
        <thead>
          <tr>
            <th colspan="4" class="text-lg bg-slate-200 text-slate-800 py-3">1. 構文的分類 <span class="text-sm font-normal text-slate-600 ml-2">Syntactic Classification (文の骨組みを決める)</span></th>
          </tr>
          <tr>
            <th>大分類 <span class="term-en">Main Category</span></th>
            <th class="w-1/4">文型・用法 <span class="term-en">Pattern / Usage</span></th>
            <th class="w-1/3">文法的定義・ルール <span class="term-en">Grammar Definition & Rules</span></th>
            <th>代表例 <span class="term-en">Examples</span></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td rowspan="2" class="cat-syntactic">自動詞<span class="term-en">Intransitive Verb</span></td>
            <td class="bg-white">完全自動詞 <span class="term-en">Complete Intransitive [SV]</span></td>
            <td class="bg-white">
              目的語(Object)も補語(Complement)もとらない。<br>
              <span class="text-xs text-rose-600 font-semibold mt-1 block">【DBフラグ】受動態(Passive Voice)に変換不可。</span>
            </td>
            <td class="bg-white">exist, sleep, happen, <span class="both">run</span></td>
          </tr>
          <tr>
            <td class="bg-white">不完全自動詞 <span class="term-en">Incomplete Intransitive [SVC]</span></td>
            <td class="bg-white">主語(Subject)を説明する補語(C)を必要とする。<br>動詞はSとCを結ぶ「連結詞(Copula)」として機能。</td>
            <td class="bg-white">be, become, look, <span class="both">feel</span></td>
          </tr>
          <tr>
            <td rowspan="3" class="cat-syntactic">他動詞<span class="term-en">Transitive Verb</span></td>
            <td class="bg-white">完全他動詞 <span class="term-en">Complete Transitive [SVO]</span></td>
            <td class="bg-white">
              直接目的語(Direct Object)を1つとる。<br>
              <span class="text-xs text-emerald-600 font-semibold mt-1 block">【DBフラグ】受動態(Passive Voice)に変換可能。</span>
            </td>
            <td class="bg-white">eat, make, discuss, <span class="both">open</span></td>
          </tr>
          <tr>
            <td class="bg-white">授与動詞 <span class="term-en">Ditransitive / Dative [SVOO]</span></td>
            <td class="bg-white">間接目的語(Indirect Object: 誰に)と直接目的語(Direct Object: 何を)の2つをとる。</td>
            <td class="bg-white">give, send, buy, teach</td>
          </tr>
          <tr>
            <td class="bg-white">不完全他動詞 <span class="term-en">Incomplete Transitive [SVOC]</span></td>
            <td class="bg-white">目的語(O)と、Oの状態を説明する補語(C)を必要とする。(O = C)</td>
            <td class="bg-white">call, name, find, <span class="both">keep</span></td>
          </tr>
        </tbody>
      </table>
    </div>

    <!-- 2. 意味的分類 (Semantic Classification) -->
    <div class="overflow-x-auto">
      <table class="sec-semantic">
        <thead>
          <tr>
            <th colspan="4" class="text-lg bg-teal-100 text-teal-900 py-3">2. 意味・相による分類 <span class="text-sm font-normal text-teal-700 ml-2">Semantic & Aspectual Classification (進行形にできるか)</span></th>
          </tr>
          <tr>
            <th>大分類 <span class="term-en">Main Category</span></th>
            <th class="w-1/4">サブカテゴリ <span class="term-en">Subcategory</span></th>
            <th class="w-1/3">文法的定義・ルール <span class="term-en">Grammar Definition & Rules</span></th>
            <th>代表例 <span class="term-en">Examples</span></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td rowspan="2" class="cat-semantic">状態動詞<span class="term-en">Stative Verb</span></td>
            <td class="bg-white">所有・存在・関係<br><span class="term-en">Possession / Existence</span></td>
            <td class="bg-white">
              ある状態が「継続している」ことを表す。<br>
              <span class="text-xs text-rose-600 font-semibold mt-1 block">【重要ルール】原則として進行形(Progressive Aspect)にしない。</span>
            </td>
            <td class="bg-white">have(持つ), belong, exist, resemble</td>
          </tr>
          <tr>
            <td class="bg-white">心理・感情・認識<br><span class="term-en">Emotion / Cognition</span></td>
            <td class="bg-white">心や頭の中の状態を表す。意思で即座に止められない。</td>
            <td class="bg-white">know, believe, like, want</td>
          </tr>
          <tr>
            <td rowspan="2" class="cat-semantic">動作動詞<span class="term-en">Dynamic / Action Verb</span></td>
            <td class="bg-white">継続的動作<br><span class="term-en">Activity Verb</span></td>
            <td class="bg-white">
              始まりと終わりがあり、意思でコントロールできる動作。<br>
              <span class="text-xs text-emerald-600 font-semibold mt-1 block">【重要ルール】進行形(Progressive Aspect)にできる。</span>
            </td>
            <td class="bg-white">run, play, study, eat</td>
          </tr>
          <tr>
            <td class="bg-white">瞬間的動作<br><span class="term-en">Achievement Verb</span></td>
            <td class="bg-white">一瞬で完了する動作。進行形にすると「〜しつつある(直前)」の意味になる。</td>
            <td class="bg-white">arrive, stop, drop, die</td>
          </tr>
        </tbody>
      </table>
    </div>

    <!-- 3. 機能的分類 (Functional Classification) -->
    <div class="overflow-x-auto">
      <table class="sec-functional">
        <thead>
          <tr>
            <th colspan="4" class="text-lg bg-amber-100 text-amber-900 py-3">3. 機能的分類 <span class="text-sm font-normal text-amber-700 ml-2">Functional Classification (文の要素としての役割)</span></th>
          </tr>
          <tr>
            <th>大分類 <span class="term-en">Main Category</span></th>
            <th class="w-1/4">サブカテゴリ <span class="term-en">Subcategory</span></th>
            <th class="w-1/3">文法的定義・ルール <span class="term-en">Grammar Definition & Rules</span></th>
            <th>代表例 <span class="term-en">Examples</span></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="cat-functional">本動詞<span class="term-en">Principal / Main Verb</span></td>
            <td class="bg-white">-</td>
            <td class="bg-white">文の主要な意味を持つ核となる動詞。（1と2の分類はすべてこれに該当）</td>
            <td class="bg-white">go, eat, make, think</td>
          </tr>
          <tr>
            <td rowspan="2" class="cat-functional">助動詞<span class="term-en">Auxiliary Verb</span></td>
            <td class="bg-white">基本助動詞<br><span class="term-en">Primary Auxiliary</span></td>
            <td class="bg-white">
              本動詞と結びついて、時制(Tense)、相(Aspect)、態(Voice)、疑問・否定を作る。
            </td>
            <td class="bg-white">
              <span class="tag">be</span> (進行形/受動態)<br>
              <span class="tag">have</span> (完了形)<br>
              <span class="tag">do</span> (疑問/否定)
            </td>
          </tr>
          <tr>
            <td class="bg-white">法助動詞<span class="term-en">Modal Auxiliary / Modal Verb</span></td>
            <td class="bg-white">
              話し手の「法(Mood)＝心理的態度（可能性・義務・推量）」を付加する。<br>
              <span class="text-xs text-rose-600 font-semibold mt-1 block">【ルール】後ろに動詞の原形(Base form)をとる。三単現のsはつかない。</span>
            </td>
            <td class="bg-white">will, can, must, may, should, ought to</td>
          </tr>
        </tbody>
      </table>
    </div>

    <!-- 4. 形態的分類 (Morphological Classification) -->
    <div class="overflow-x-auto">
      <table class="sec-morphological">
        <thead>
          <tr>
            <th colspan="4" class="text-lg bg-fuchsia-100 text-fuchsia-900 py-3">4. 形態的分類 <span class="text-sm font-normal text-fuchsia-700 ml-2">Morphological Classification (活用変化)</span></th>
          </tr>
          <tr>
            <th>大分類 <span class="term-en">Main Category</span></th>
            <th class="w-1/4">活用パターン <span class="term-en">Conjugation Pattern</span></th>
            <th class="w-1/3">文法的定義・ルール <span class="term-en">Grammar Definition & Rules</span></th>
            <th>代表例 <span class="term-en">Examples (Base - Past - Past Participle)</span></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="cat-morphological">規則動詞<span class="term-en">Regular Verb</span></td>
            <td class="bg-white">-ed 型</td>
            <td class="bg-white">過去形(Past)と過去分詞(Past Participle)が「-ed」をつける規則的な変化をする。</td>
            <td class="bg-white">play - played - played<br>study - studied - studied</td>
          </tr>
          <tr>
            <td rowspan="4" class="cat-morphological">不規則動詞<span class="term-en">Irregular Verb</span></td>
            <td class="bg-white">A-A-A 型</td>
            <td class="bg-white">原形、過去形、過去分詞がすべて同じ形。</td>
            <td class="bg-white">cut - cut - cut<br>put - put - put</td>
          </tr>
          <tr>
            <td class="bg-white">A-B-A 型</td>
            <td class="bg-white">原形と過去分詞が同じ形。</td>
            <td class="bg-white">come - came - come<br>run - ran - run</td>
          </tr>
          <tr>
            <td class="bg-white">A-B-B 型</td>
            <td class="bg-white">過去形と過去分詞が同じ形。</td>
            <td class="bg-white">make - made - made<br>have - had - had</td>
          </tr>
          <tr>
            <td class="bg-white">A-B-C 型</td>
            <td class="bg-white">原形、過去形、過去分詞がすべて異なる形。</td>
            <td class="bg-white">go - went - gone<br>write - wrote - written</td>
          </tr>
        </tbody>
      </table>
    </div>

    <!-- 5. 特殊用法を持つ動詞群 (Special Verb Groups) -->
    <div class="overflow-x-auto">
      <table class="sec-special mb-0">
        <thead>
          <tr>
            <th colspan="4" class="text-lg bg-slate-200 text-slate-800 py-3">5. 特殊な文法構造を持つ動詞群 <span class="text-sm font-normal text-slate-600 ml-2">Special Verb Groups</span></th>
          </tr>
          <tr>
            <th>大分類 <span class="term-en">Main Category</span></th>
            <th class="w-1/4">文法的特徴 <span class="term-en">Grammatical Features</span></th>
            <th class="w-1/3">文法的定義・ルール <span class="term-en">Grammar Definition & Rules</span></th>
            <th>代表例 <span class="term-en">Examples</span></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="cat-special">使役動詞<span class="term-en">Causative Verb</span></td>
            <td class="bg-white">SVOCの特殊形</td>
            <td class="bg-white">
              「OにCさせる/してもらう」という力関係を表す。<br>
              <span class="text-xs text-rose-600 font-semibold mt-1 block">【ルール】補語(C)に「toのない動詞の原形 (Bare Infinitive)」をとる。（getを除く）</span>
            </td>
            <td class="bg-white">
              <span class="tag">make</span> (強制)<br>
              <span class="tag">have</span> (当然の依頼)<br>
              <span class="tag">let</span> (許可)
            </td>
          </tr>
          <tr>
            <td class="cat-special">知覚動詞<span class="term-en">Perception Verb /<br>Verb of Senses</span></td>
            <td class="bg-white">SVOCの特殊形</td>
            <td class="bg-white">
              見る・聞く・感じるなど五感を表す。<br>
              <span class="text-xs text-rose-600 font-semibold mt-1 block">【ルール】補語(C)に「原形不定詞 (一部始終)」または「現在分詞 ~ing (進行中の動作)」をとる。</span>
            </td>
            <td class="bg-white">see, hear, feel, watch, observe</td>
          </tr>
          <tr>
            <td class="cat-special">句動詞<span class="term-en">Phrasal Verb</span></td>
            <td class="bg-white">動詞 ＋ 副詞/前置詞</td>
            <td class="bg-white">
              複数の単語が結合して、1つの自動詞または他動詞として機能する。<br>
              <span class="text-xs text-emerald-600 font-semibold mt-1 block">【ルール】目的語が代名詞(it, them等)の場合、[動詞 + 代名詞 + 副詞]の語順になる。<br>(例: turn it on)</span>
            </td>
            <td class="bg-white">
              give up (諦める)<br>
              look after (世話をする)<br>
              put off (延期する)
            </td>
          </tr>
        </tbody>
      </table>
    </div>

  </div>
`}})}function si(){return(0,V.jsx)(`div`,{className:`w-full h-full overflow-auto bg-white text-black`,dangerouslySetInnerHTML:{__html:`<style>
        /* Kindle等で最低限読みやすくするためのベーススタイル（剥がれ落ちても問題ない設計） */
        body {
            font-family: serif; /* 電子書籍は明朝体・セリフ体が基本 */
            line-height: 1.8;
            color: #333;
            max-width: 800px;
            margin: 0 auto;
            padding: 5%;
        }
        h1 {
            font-size: 1.8em;
            border-bottom: 2px solid #333;
            padding-bottom: 10px;
            text-align: center;
        }
        h2 {
            font-size: 1.4em;
            margin-top: 2em;
            border-bottom: 1px solid #ccc;
            padding-bottom: 5px;
        }
        h3 {
            font-size: 1.2em;
            margin-top: 1.5em;
        }
        p {
            margin-bottom: 1em;
        }
        .example-sentence {
            background-color: #f9f9f9;
            padding: 15px;
            border: 1px solid #ddd;
            font-weight: bold;
            text-align: center;
            font-size: 1.2em;
        }
        /* KindleのE-inkディスプレイで映えるPreformatted Text */
        pre {
            background-color: #f4f4f4;
            border: 1px solid #ccc;
            padding: 15px;
            font-family: monospace;
            overflow-x: auto;
            line-height: 1.4;
            font-size: 0.9em;
        }
        .note {
            font-size: 0.9em;
            color: #555;
            border-left: 3px solid #666;
            padding-left: 10px;
            margin-top: 10px;
        }
    </style>


    <h1>英語構文モデルの比較<br><small>〜 M（修飾語）の扱い方 〜</small></h1>

    <p>本ドキュメントでは、以下の例文を世界で異なる4つのアプローチがどのように解釈（パース）しているかを比較します。</p>

    <div class="example-sentence">
        The cute dog quickly ate the big bone.
        <br>
        <small>（その可愛い犬は、素早くその大きな骨を食べた。）</small>
    </div>

    <p>この文の骨組みは「dog (S) / ate (V) / bone (O)」であり、残りの単語はすべて「M（修飾語）」です。</p>

    <hr>

    <h2>1. アメリカ式（Reed-Kellogg図解）</h2>
    <p>文の「階層構造」をツリー状に視覚化する伝統的なアプローチです。主幹となる「S-V-O」を一本の太い線に置き、M（修飾語）はそこから下へぶら下がる「枝」として描画されます。骨格がブレないのが特徴です。</p>

<pre>
       dog     |    ate    |    bone
 ──────────────┼───────────┼──────────────
      /    /   |     /     |   /     /
    The  cute  | quickly   | the   big
</pre>

    <div class="note">
        <strong>特徴：</strong> Mがどんなに増えても、一番上にある「S-V-O」の直線は絶対に邪魔されません。
    </div>

    <hr>

    <h2>2. インド式（コア＋後乗せモジュール）</h2>
    <p>「伝えること」に特化した実践的アプローチです。コアとなる行動（誰が・する・何を）を真っ先にブロックとして固め、M（細かい情報）は後から「追加モジュール」として放り込みます。</p>

<pre>
【1. コア ブロック】
  [ dog ] ── does ──> [ ate bone ]

【2. ＋追加モジュール (M)】
  + (The cute)
  + (quickly)
  + (the big)
</pre>

    <div class="note">
        <strong>特徴：</strong> 会話やライティングにおいて、「まずはSVOを言い切り、後からMを足せばよい」という思考プロセスに直結しています。
    </div>

    <hr>

    <h2>3. オリジナル：JSON縦持ち式（Syntax as Code）</h2>
    <p>英文をプログラミングにおけるオブジェクト（辞書型）の「キー」と「値」として解釈するアプローチです。Mがどんなに長くなっても独立したプロパティになるため、必須引数（S, V, O）が絶対に埋もれません。</p>

<pre>
{
  "mod_S":  "The cute",
  "Subject": "dog",

  "mod_V":  "quickly",
  "Verb":    "ate",

  "mod_O":  "the big",
  "Object":  "bone"
}
</pre>

    <div class="note">
        <strong>特徴：</strong> Mが肥大化しても、人間の目は縦に「Subject」「Verb」「Object」のキーだけをスキャンすれば良いため、読解時に迷子になるのを完全に防ぎます。
    </div>

    <hr>

    <h2>4. 日本式（直列5文型パズル）</h2>
    <p>日本の学校教育でよく見られる、すべての単語を「1本の線」に並べて分析するアプローチです。</p>

<pre>
[The] [cute] [dog (S)] [quickly] [ate (V)] [the] [big] [bone (O)]
</pre>

    <div class="note">
        <strong>ジレンマの正体：</strong> すべてが1列に並ぶため、M（修飾語）が間に割り込んでくると、SとV、VとOの距離が物理的に離れてしまいます。関係代名詞などでMが長くなると、どれが文の骨組みなのか区別がつかなくなり、読解が崩壊する原因となります。
    </div>

    <hr>

    <h2>まとめ</h2>
    <p>日本の英語教育では「M」という用語の重要性が強調されませんが、実際には文を複雑にしている犯人はすべて「M」です。</p>
    <p>長文を読む際は、日本式の「直列」で読むのをやめ、<strong>JSON縦持ち式</strong>のように「Mをコメントアウト（または別キーに隔離）して、S・V・Oの必須引数だけを抽出する」というエンジニアリング的思考を取り入れることで、読解力は飛躍的に向上します。</p>

`}})}var ci=[[`SV`,`Birds fly`,`鳥は飛ぶ`],[`SV`,`Fish swim`,`魚は泳ぐ`],[`SV`,`Dogs bark`,`犬は吠える`],[`SV`,`Cats purr`,`猫は喉を鳴らす`],[`SV`,`Babies cry`,`赤ちゃんは泣く`],[`SV`,`Children play`,`子供たちは遊ぶ`],[`SV`,`Students study`,`学生たちは勉強する`],[`SV`,`Teachers wait`,`教師たちは待つ`],[`SV`,`Workers rest`,`労働者たちは休む`],[`SV`,`Stars shine`,`星は輝く`],[`SV`,`Fire burns`,`火は燃える`],[`SV`,`Water evaporates`,`水は蒸発する`],[`SV`,`Ice melts`,`氷は溶ける`],[`SV`,`Flowers bloom`,`花は咲く`],[`SV`,`Leaves fall`,`葉は落ちる`],[`SV`,`Rain falls`,`雨は降る`],[`SV`,`Wind blows`,`風は吹く`],[`SV`,`Time flies`,`時は過ぎ去る`],[`SV`,`History remains`,`歴史は残る`],[`SV`,`Accidents occur`,`事故は起きる`],[`SV`,`Everyone smiles`,`誰もが微笑む`],[`SV`,`Someone laughed`,`誰かが笑った`],[`SV`,`Nobody knows`,`誰も知らない`],[`SV`,`Everything changes`,`すべては変わる`],[`SV`,`Something happened`,`何かが起きた`],[`SV`,`Plans failed`,`計画は失敗した`],[`SV`,`Prices rise`,`物価は上がる`],[`SV`,`Spring arrived`,`春が来た`],[`SV`,`Seasons rotate`,`季節は巡る`],[`SV`,`Life begins`,`命が始まる`],[`SVO`,`Cats hate water`,`猫は水を嫌う`],[`SVO`,`Dogs eat meat`,`犬は肉を食べる`],[`SVO`,`Cows eat grass`,`牛は草を食べる`],[`SVO`,`Bees make honey`,`蜂は蜂蜜を作る`],[`SVO`,`Birds build nests`,`鳥は巣を作る`],[`SVO`,`Spiders spin webs`,`蜘蛛は網を張る`],[`SVO`,`Humans need oxygen`,`人間は酸素を必要とする`],[`SVO`,`People want money`,`人々はお金を欲しがる`],[`SVO`,`Students read books`,`学生たちは本を読む`],[`SVO`,`Teachers give homework`,`教師たちは宿題を出す`],[`SVO`,`Chefs cook food`,`料理人は食べ物を作る`],[`SVO`,`Artists paint pictures`,`芸術家は絵を描く`],[`SVO`,`Musicians play music`,`音楽家は音楽を演奏する`],[`SVO`,`Children like games`,`子供たちはゲームが好きだ`],[`SVO`,`Babies drink milk`,`赤ちゃんはミルクを飲む`],[`SVO`,`Friends keep secrets`,`友達は秘密を守る`],[`SVO`,`Machines require energy`,`機械はエネルギーを必要とする`],[`SVO`,`Computers store data`,`コンピュータはデータを保存する`],[`SVO`,`Phones send messages`,`電話はメッセージを送る`],[`SVO`,`Cars burn fuel`,`車は燃料を燃やす`],[`SVO`,`Engines make noise`,`エンジンは音を立てる`],[`SVO`,`Trees provide shade`,`木は陰を作る`],[`SVO`,`Flowers need sunlight`,`花は日光を必要とする`],[`SVO`,`Farmers grow crops`,`農家は作物を育てる`],[`SVO`,`Exercise builds muscles`,`運動は筋肉を作る`],[`SVO`,`Knowledge brings power`,`知識は力を生む`],[`SVO`,`Practice improves skills`,`練習はスキルを向上させる`],[`SVO`,`He loves science`,`彼は科学を愛している`],[`SVO`,`They play basketball`,`彼らはバスケットボールをする`],[`SVO`,`We study history`,`私たちは歴史を勉強する`],[`SVC`,`Dogs are animals`,`犬は動物だ`],[`SVC`,`Humans are mammals`,`人間は哺乳類だ`],[`SVC`,`Fire is hot`,`火は熱い`],[`SVC`,`Ice is cold`,`氷は冷たい`],[`SVC`,`Roses are red`,`バラは赤い`],[`SVC`,`Violets are blue`,`スミレは青い`],[`SVC`,`Everyone is human`,`誰もが人間だ`],[`SVC`,`Knowledge is power`,`知識は力だ`],[`SVC`,`Health is wealth`,`健康は富だ`],[`SVC`,`Change is constant`,`変化は不変だ`],[`SVC`,`Babies become adults`,`赤ちゃんは大人になる`],[`SVC`,`Water becomes steam`,`水は蒸気になる`],[`SVC`,`Leaves become brown`,`葉は茶色くなる`],[`SVC`,`Days become short`,`日は短くなる`],[`SVC`,`Problems become serious`,`問題は深刻になる`],[`SVC`,`Everyone looks tired`,`みんな疲れて見える`],[`SVC`,`Cities look busy`,`都市は忙しそうに見える`],[`SVC`,`Clouds look white`,`雲は白く見える`],[`SVC`,`Goals seem reachable`,`目標は到達可能に思える`],[`SVC`,`Tasks seem hard`,`タスクは難しく思える`],[`SVC`,`Ideas seem crazy`,`アイデアは狂っているように思える`],[`SVC`,`Wool feels itchy`,`ウールはちくちくする`],[`SVC`,`Sunlight feels warm`,`日光は暖かく感じる`],[`SVC`,`Alarms sound loud`,`アラームはうるさく鳴る`],[`SVC`,`Ideas sound interesting`,`考えは面白そうに聞こえる`],[`SVC`,`Soup tastes salty`,`スープは塩辛い味がする`],[`SVC`,`Vinegar tastes sour`,`酢は酸っぱい味がする`],[`SVC`,`Perfume smells strong`,`香水は強く香る`],[`SVC`,`Garbage smells bad`,`ゴミは嫌な臭いがする`],[`SVC`,`Runners stay fit`,`ランナーは健康を維持する`],[`SVOO`,`Teachers give students homework`,`教師は生徒に宿題を与える`],[`SVOO`,`Parents buy children gifts`,`親は子供に贈り物を見せる`],[`SVOO`,`Friends send me messages`,`友達は私にメッセージを送る`],[`SVOO`,`Cows give farmers milk`,`牛は農家にミルクを与える`],[`SVOO`,`Chefs cook guests meals`,`料理人は客に食事を作る`],[`SVOO`,`I show them results`,`私は彼らに結果を見せる`],[`SVOO`,`He tells us stories`,`彼は私たちに話を語る`],[`SVOO`,`She writes him letters`,`彼女は彼に手紙を書く`],[`SVOO`,`They lend her money`,`彼らは彼女にお金を貸す`],[`SVOO`,`We offer you help`,`私たちはあなたに助けを申し出る`],[`SVOO`,`Banks grant users loans`,`銀行は利用者にローンを認める`],[`SVOO`,`Companies pay workers wages`,`会社は労働者に賃金を支払う`],[`SVOO`,`Neighbors bring people food`,`近隣住民は人々に食べ物を持ってくる`],[`SVOO`,`Doctors give patients medicine`,`医者は患者に薬を与える`],[`SVOO`,`Bees give plants life`,`蜂は植物に命を与える`],[`SVOO`,`Dogs bring owners balls`,`犬は飼い主にボールを持ってくる`],[`SVOO`,`Cats bring owners mice`,`猫は飼い主にネズミを持ってくる`],[`SVOO`,`Birds feed babies insects`,`鳥は雛に虫を与える`],[`SVOO`,`Coaches teach teams rules`,`コーチはチームにルールを教える`],[`SVOO`,`Nature gives humans water`,`自然は人間に水を与える`],[`SVOO`,`Experience teaches beginners skills`,`経験は初心者にスキルを教える`],[`SVOO`,`Books give readers knowledge`,`本は読者に知識を与える`],[`SVOO`,`Exercise gives athletes strength`,`運動は選手に強さを与える`],[`SVOO`,`Music gives listeners peace`,`音楽は聞き手に安らぎを与える`],[`SVOO`,`Sun gives earth light`,`太陽は地球に光を与える`],[`SVOO`,`Rain gives soil moisture`,`雨は土壌に水分を与える`],[`SVOO`,`Farmers sell markets vegetables`,`農家は市場に野菜を売る`],[`SVOO`,`Shops show customers items`,`店は客に商品を見せる`],[`SVOO`,`Friends tell friends secrets`,`友達は友達に秘密を話す`],[`SVOO`,`Life gives everyone opportunities`,`人生は誰にでも機会を与える`],[`SVOC`,`Friends call me Ken`,`友達は私をケンと呼ぶ`],[`SVOC`,`Parents name babies Taro`,`親は赤ん坊をタロウと名付ける`],[`SVOC`,`Exercise makes bodies healthy`,`運動は体を引き締める`],[`SVOC`,`Sunlight makes people warm`,`日光は人を暖かくする`],[`SVOC`,`Music makes listeners happy`,`音楽は聞き手を幸せにする`],[`SVOC`,`They painted walls white`,`彼らは壁を白く塗った`],[`SVOC`,`I want coffee black`,`私はコーヒーをブラックで欲しい`],[`SVOC`,`Success made him famous`,`成功は彼を有名にした`],[`SVOC`,`Failure made teams stronger`,`失敗はチームをより強くした`],[`SVOC`,`Experts call results revolutionary`,`専門家はその結果を画期的だと呼ぶ`],[`SVOC`,`We found truth simple`,`私たちは真実が単純だとわかった`],[`SVOC`,`Scientists prove theories true`,`科学者は理論が正しいと証明する`],[`SVOC`,`Judges declared winners heroes`,`審判は勝者を英雄と宣言した`],[`SVOC`,`Time makes pain easier`,`時間は痛みを和らげる`],[`SVOC`,`Love makes life wonderful`,`愛は人生を素晴らしくする`],[`SVOC`,`They kept secrets safe`,`彼らは秘密を安全に保った`],[`SVOC`,`He dyed hair green`,`彼は髪を緑に染めた`],[`SVOC`,`History made leaders legends`,`歴史はリーダーを伝説にした`],[`SVOC`,`Action makes dreams reality`,`行動は夢を現実にする`],[`SVOC`,`Teachers find students smart`,`教師は生徒が賢いと気づく`],[`SVOC`,`Sunshine made fruits sweet`,`日光は果物を甘くした`],[`SVOC`,`We keep floors clean`,`私たちは床を清潔に保つ`],[`SVOC`,`Truth set prisoners free`,`真実が囚人を自由にした`],[`SVOC`,`Rain made streets wet`,`雨は通りを濡らした`],[`SVOC`,`Heat made metal soft`,`熱は金属を柔らかくした`],[`SVOC`,`Night made stars visible`,`夜は星を見えるようにした`],[`SVOC`,`Fear made people quiet`,`恐怖は人々を静かにさせた`],[`SVOC`,`Success makes everyone proud`,`成功は誰もを誇らしくさせる`],[`SVOC`,`Books make readers wise`,`本は読者を賢くする`],[`SVOC`,`Money makes people greedy`,`お金は人を強欲にする`]],li=e=>{let t=[...e];for(let e=t.length-1;e>0;e--){let n=Math.floor(Math.random()*(e+1));[t[e],t[n]]=[t[n],t[e]]}return t},ui=ci.map((e,t)=>({id:t,type:e[0],english:e[1],japanese:e[2],words:e[1].split(` `)}));function di(){let[e,t]=(0,_.useState)(`All`),[n,r]=(0,_.useState)(0),[i,a]=(0,_.useState)([]),[o,s]=(0,_.useState)([]),[c,l]=(0,_.useState)(`playing`),[u,d]=(0,_.useState)(0),f=(0,_.useMemo)(()=>e===`All`?ui:ui.filter(t=>t.type===e),[e]),p=f[n],m=e=>{let t=f[e];if(!t)return;let n=t.words.map((e,t)=>({id:`word-${t}`,text:e.toLowerCase()}));a(li(n)),s([]),l(`playing`),r(e)};(0,_.useEffect)(()=>{r(0),m(0),d(0)},[e]);let h=e=>{c===`playing`&&(a(t=>t.filter(t=>t.id!==e.id)),s(t=>[...t,e]))},g=e=>{c===`playing`&&(s(t=>t.filter(t=>t.id!==e.id)),a(t=>[...t,e]))},v=()=>{o.length===p.words.length&&(o.map(e=>e.text).join(` `)===p.english.toLowerCase()?(l(`correct`),d(e=>e+1)):(l(`incorrect`),d(0)))},y=()=>{let e=Math.floor(Math.random()*f.length);m(e)},b=()=>{m(n)};if(!p)return(0,V.jsx)(`div`,{className:`text-center mt-10`,children:`Loading...`});let x=o.length>0?(e=>e?e.charAt(0).toUpperCase()+e.slice(1):``)(o.map(e=>e.text).join(` `))+`.`:`...`;return(0,V.jsxs)(V.Fragment,{children:[(0,V.jsx)(`header`,{className:`bg-lichess-header shadow-md border-b border-lichess-border`,children:(0,V.jsxs)(`div`,{className:`max-w-5xl mx-auto px-4 h-14 flex items-center justify-between`,children:[(0,V.jsxs)(`div`,{className:`flex items-center space-x-3`,children:[(0,V.jsx)(`div`,{className:`w-8 h-8 rounded bg-lichess-text flex items-center justify-center text-lichess-bg font-bold text-xl`,children:`♞`}),(0,V.jsx)(`h1`,{className:`text-xl font-bold tracking-tight text-white hover:text-gray-300 cursor-pointer`,children:`tactics`})]}),(0,V.jsx)(`div`,{className:`flex items-center space-x-4`,children:(0,V.jsxs)(`div`,{className:`text-sm font-semibold flex items-center space-x-2`,children:[(0,V.jsx)(`span`,{className:`text-lichess-textDim uppercase tracking-widest text-xs`,children:`Streak`}),(0,V.jsx)(`span`,{className:`text-xl text-white`,children:u})]})})]})}),(0,V.jsxs)(`main`,{className:`flex-grow flex flex-col md:flex-row max-w-5xl mx-auto w-full p-4 md:p-6 gap-6`,children:[(0,V.jsxs)(`div`,{className:`w-full md:w-2/3 flex flex-col gap-4`,children:[(0,V.jsxs)(`div`,{className:`bg-lichess-header rounded p-3 flex justify-between items-center shadow-sm`,children:[(0,V.jsxs)(`div`,{className:`flex items-center space-x-3`,children:[(0,V.jsx)(`span`,{className:`text-lichess-textDim text-sm font-semibold uppercase`,children:`Pattern`}),(0,V.jsxs)(`select`,{className:`bg-lichess-board border border-lichess-border text-white text-sm rounded px-2 py-1 shadow-sm cursor-pointer`,value:e,onChange:e=>t(e.target.value),children:[(0,V.jsx)(`option`,{value:`All`,children:`Mixed (150)`}),(0,V.jsx)(`option`,{value:`SV`,children:`SV Pattern`}),(0,V.jsx)(`option`,{value:`SVO`,children:`SVO Pattern`}),(0,V.jsx)(`option`,{value:`SVC`,children:`SVC Pattern`}),(0,V.jsx)(`option`,{value:`SVOO`,children:`SVOO Pattern`}),(0,V.jsx)(`option`,{value:`SVOC`,children:`SVOC Pattern`})]})]}),(0,V.jsx)(`span`,{className:`text-xs font-mono bg-lichess-board px-2 py-1 rounded border border-lichess-border text-lichess-text`,children:p.type})]}),(0,V.jsx)(`div`,{className:`bg-lichess-header rounded p-8 shadow-sm flex items-center justify-center min-h-[120px] border-l-4 border-lichess-blue`,children:(0,V.jsxs)(`h2`,{className:`text-2xl font-bold text-white text-center`,children:[`"`,p.japanese,`"`]})}),(0,V.jsxs)(`div`,{className:`flex flex-col gap-2 mt-2`,children:[(0,V.jsx)(`div`,{className:`text-lichess-textDim text-sm font-semibold uppercase tracking-wider pl-1`,children:`Your Sentence`}),(0,V.jsx)(`div`,{className:`bg-lichess-header rounded min-h-[100px] border border-lichess-border flex items-center justify-center p-6 text-center`,children:(0,V.jsx)(`p`,{className:`text-2xl font-serif text-white tracking-wide`,children:x})})]})]}),(0,V.jsxs)(`div`,{className:`w-full md:w-1/3 flex flex-col gap-4`,children:[c!==`playing`&&(0,V.jsxs)(`div`,{className:`rounded p-4 shadow-sm flex flex-col items-center justify-center text-white ${c===`correct`?`bg-lichess-green`:`bg-lichess-red`}`,children:[(0,V.jsx)(`span`,{className:`text-xl font-bold mb-1 flex items-center gap-2`,children:c===`correct`?(0,V.jsxs)(V.Fragment,{children:[(0,V.jsx)(`span`,{className:`text-2xl`,children:`✓`}),` Puzzle solved`]}):(0,V.jsxs)(V.Fragment,{children:[(0,V.jsx)(`span`,{className:`text-2xl`,children:`✗`}),` Puzzle failed`]})}),c===`incorrect`&&(0,V.jsxs)(`span`,{className:`text-sm mt-2 opacity-90`,children:[`Solution: `,(0,V.jsxs)(`span`,{className:`font-bold`,children:[p.english,`.`]})]})]}),(0,V.jsxs)(`div`,{className:`bg-lichess-header rounded p-4 shadow-sm border border-lichess-border flex flex-col gap-4`,children:[c===`playing`?(0,V.jsxs)(`div`,{className:`flex flex-col gap-3 min-h-[160px]`,children:[(0,V.jsx)(`div`,{className:`text-lichess-textDim text-xs font-semibold uppercase tracking-wider mb-1`,children:`Available Words`}),(0,V.jsx)(`div`,{className:`flex flex-wrap gap-2`,children:i.map(e=>(0,V.jsx)(`button`,{onClick:()=>h(e),className:`word-btn px-4 py-2 bg-lichess-board text-lichess-text hover:text-white hover:bg-lichess-border font-medium rounded border border-lichess-border shadow-sm text-sm`,children:e.text},e.id))}),o.length>0&&(0,V.jsxs)(`div`,{className:`mt-4 border-t border-lichess-border pt-4`,children:[(0,V.jsx)(`div`,{className:`text-lichess-textDim text-xs font-semibold uppercase tracking-wider mb-2`,children:`Click to remove`}),(0,V.jsx)(`div`,{className:`flex flex-wrap gap-2`,children:o.map(e=>(0,V.jsx)(`button`,{onClick:()=>g(e),className:`word-btn px-4 py-2 bg-lichess-blue text-white hover:bg-lichess-blueHover font-medium rounded shadow-sm text-sm`,children:e.text},e.id))})]})]}):(0,V.jsx)(`div`,{className:`flex flex-col items-center justify-center min-h-[160px] text-lichess-textDim text-sm`,children:`Ready for the next challenge.`}),(0,V.jsx)(`div`,{className:`border-t border-lichess-border pt-4 mt-auto flex flex-col gap-2`,children:c===`playing`?(0,V.jsxs)(V.Fragment,{children:[(0,V.jsx)(`button`,{onClick:v,disabled:o.length===0,className:`w-full py-3 bg-lichess-board text-lichess-text hover:text-white font-bold rounded shadow-sm hover:bg-lichess-border border border-lichess-border disabled:opacity-50 disabled:cursor-not-allowed uppercase tracking-wider text-sm transition-colors`,children:`Submit Move`}),(0,V.jsx)(`button`,{onClick:b,className:`w-full py-2 text-lichess-textDim hover:text-white text-xs uppercase tracking-wider transition-colors`,children:`Reset Board`})]}):(0,V.jsx)(`button`,{onClick:y,className:`w-full py-3 bg-lichess-blue text-white font-bold rounded shadow-sm hover:bg-lichess-blueHover uppercase tracking-wider text-sm transition-colors`,children:`Next Puzzle`})})]})]})]})]})}function fi(){return(0,V.jsx)(`div`,{className:`w-full h-full overflow-auto bg-white text-black`,dangerouslySetInnerHTML:{__html:`<style>
    body {
      font-family: serif;
      line-height: 1.8;
      margin: 0 auto;
      max-width: 800px;
      padding: 5%;
      color: #000;
      word-wrap: break-word;
    }
    h1 {
      font-size: 2.2em;
      text-align: center;
      margin-top: 3em;
      margin-bottom: 3em;
    }
    h2 {
      font-size: 1.6em;
      border-bottom: 1px solid #000;
      padding-bottom: 0.3em;
      margin-top: 1.5em;
      margin-bottom: 1em;
      page-break-before: always; /* Kindleで章ごとに改ページ */
    }
    h3 {
      font-size: 1.2em;
      margin-top: 1.5em;
    }
    p {
      margin: 1em 0;
    }
    ol {
      padding-left: 2em;
      margin-bottom: 2em;
    }
    li {
      margin-bottom: 0.8em;
    }
    .english {
      font-weight: bold;
      font-size: 1.1em;
    }
    .japanese {
      margin-left: 0.5em;
    }
    .description {
      background-color: #f5f5f5;
      padding: 1em;
      margin-bottom: 2em;
      border-left: 3px solid #333;
    }
    .toc {
      margin-bottom: 3em;
      page-break-after: always;
    }
    .toc h2 {
      page-break-before: auto;
      border-bottom: none;
      text-align: center;
    }
    .toc ul {
      list-style-type: none;
      padding: 0;
    }
    .toc li {
      margin-bottom: 0.5em;
      text-align: center;
    }
    .toc a {
      text-decoration: none;
      color: #000;
    }
  </style>


  <h1>No Modifier sentence 150</h1>

  <div class="toc">
    <h2>目次</h2>
    <ul>
      <li><a href="#sv">第1章 SV文型 (主語＋動詞)</a></li>
      <li><a href="#svo">第2章 SVO文型 (主語＋動詞＋目的語)</a></li>
      <li><a href="#svc">第3章 SVC文型 (主語＋動詞＋補語)</a></li>
      <li><a href="#svoo">第4章 SVOO文型 (主語＋動詞＋間接目的語＋直接目的語)</a></li>
      <li><a href="#svoc">第5章 SVOC文型 (主語＋動詞＋目的語＋補語)</a></li>
    </ul>
  </div>

  <h2 id="sv">第1章 SV文型 (主語＋動詞)</h2>
  <div class="description">
    <p>修飾語（形容詞、副詞、冠詞、前置詞句など）を一切含まず、「主語（S）＋動詞（V）」のみで構成された英文です。純粋なSV構造にするため、冠詞（a, an, the）も排除し、複数形や固有名詞、代名詞を主語にしています。</p>
  </div>
  <ol>
    <li><span class="english">Birds fly.</span><span class="japanese">（鳥は飛ぶ）</span></li>
    <li><span class="english">Fish swim.</span><span class="japanese">（魚は泳ぐ）</span></li>
    <li><span class="english">Dogs bark.</span><span class="japanese">（犬は吠える）</span></li>
    <li><span class="english">Cats purr.</span><span class="japanese">（猫は喉を鳴らす）</span></li>
    <li><span class="english">Babies cry.</span><span class="japanese">（赤ちゃんは泣く）</span></li>
    <li><span class="english">Children play.</span><span class="japanese">（子供たちは遊ぶ）</span></li>
    <li><span class="english">Students study.</span><span class="japanese">（学生たちは勉強する）</span></li>
    <li><span class="english">Teachers wait.</span><span class="japanese">（教師たちは待つ）</span></li>
    <li><span class="english">Workers rest.</span><span class="japanese">（労働者たちは休む）</span></li>
    <li><span class="english">Stars shine.</span><span class="japanese">（星は輝く）</span></li>
    <li><span class="english">Fire burns.</span><span class="japanese">（火は燃える）</span></li>
    <li><span class="english">Water evaporates.</span><span class="japanese">（水は蒸発する）</span></li>
    <li><span class="english">Ice melts.</span><span class="japanese">（氷は溶ける）</span></li>
    <li><span class="english">Flowers bloom.</span><span class="japanese">（花は咲く）</span></li>
    <li><span class="english">Leaves fall.</span><span class="japanese">（葉は落ちる）</span></li>
    <li><span class="english">Rain falls.</span><span class="japanese">（雨は降る）</span></li>
    <li><span class="english">Wind blows.</span><span class="japanese">（風は吹く）</span></li>
    <li><span class="english">Time flies.</span><span class="japanese">（時は過ぎ去る）</span></li>
    <li><span class="english">History remains.</span><span class="japanese">（歴史は残る）</span></li>
    <li><span class="english">Accidents occur.</span><span class="japanese">（事故は起きる）</span></li>
    <li><span class="english">Everyone smiles.</span><span class="japanese">（誰もが微笑む）</span></li>
    <li><span class="english">Someone laughed.</span><span class="japanese">（誰かが笑った）</span></li>
    <li><span class="english">Nobody knows.</span><span class="japanese">（誰も知らない）</span></li>
    <li><span class="english">Everything changes.</span><span class="japanese">（すべては変わる）</span></li>
    <li><span class="english">Something happened.</span><span class="japanese">（何かが起きた）</span></li>
    <li><span class="english">Plans failed.</span><span class="japanese">（計画は失敗した）</span></li>
    <li><span class="english">Prices rise.</span><span class="japanese">（物価は上がる）</span></li>
    <li><span class="english">Spring arrived.</span><span class="japanese">（春が来た）</span></li>
    <li><span class="english">Seasons rotate.</span><span class="japanese">（季節は巡る）</span></li>
    <li><span class="english">Life begins.</span><span class="japanese">（命が始まる）</span></li>
  </ol>

  <h2 id="svo">第2章 SVO文型 (主語＋動詞＋目的語)</h2>
  <div class="description">
    <p>「主語（S）＋動詞（V）＋目的語（O）」のみで構成された英文です。冠詞を避けるために「複数形」「固有名詞」「不可算名詞（代名詞含む）」を主語・目的語に採用しています。</p>
  </div>
  <ol>
    <li><span class="english">Cats hate water.</span><span class="japanese">（猫は水を嫌う）</span></li>
    <li><span class="english">Dogs eat meat.</span><span class="japanese">（犬は肉を食べる）</span></li>
    <li><span class="english">Cows eat grass.</span><span class="japanese">（牛は草を食べる）</span></li>
    <li><span class="english">Bees make honey.</span><span class="japanese">（蜂は蜂蜜を作る）</span></li>
    <li><span class="english">Birds build nests.</span><span class="japanese">（鳥は巣を作る）</span></li>
    <li><span class="english">Spiders spin webs.</span><span class="japanese">（蜘蛛は網を張る）</span></li>
    <li><span class="english">Humans need oxygen.</span><span class="japanese">（人間は酸素を必要とする）</span></li>
    <li><span class="english">People want money.</span><span class="japanese">（人々はお金を欲しがる）</span></li>
    <li><span class="english">Students read books.</span><span class="japanese">（学生たちは本を読む）</span></li>
    <li><span class="english">Teachers give homework.</span><span class="japanese">（教師たちは宿題を出す）</span></li>
    <li><span class="english">Chefs cook food.</span><span class="japanese">（料理人は食べ物を作る）</span></li>
    <li><span class="english">Artists paint pictures.</span><span class="japanese">（芸術家は絵を描く）</span></li>
    <li><span class="english">Musicians play music.</span><span class="japanese">（音楽家は音楽を演奏する）</span></li>
    <li><span class="english">Children like games.</span><span class="japanese">（子供たちはゲームが好きだ）</span></li>
    <li><span class="english">Babies drink milk.</span><span class="japanese">（赤ちゃんはミルクを飲む）</span></li>
    <li><span class="english">Friends keep secrets.</span><span class="japanese">（友達は秘密を守る）</span></li>
    <li><span class="english">Machines require energy.</span><span class="japanese">（機械はエネルギーを必要とする）</span></li>
    <li><span class="english">Computers store data.</span><span class="japanese">（コンピュータはデータを保存する）</span></li>
    <li><span class="english">Phones send messages.</span><span class="japanese">（電話はメッセージを送る）</span></li>
    <li><span class="english">Cars burn fuel.</span><span class="japanese">（車は燃料を燃やす）</span></li>
    <li><span class="english">Engines make noise.</span><span class="japanese">（エンジンは音を立てる）</span></li>
    <li><span class="english">Trees provide shade.</span><span class="japanese">（木は陰を作る）</span></li>
    <li><span class="english">Flowers need sunlight.</span><span class="japanese">（花は日光を必要とする）</span></li>
    <li><span class="english">Farmers grow crops.</span><span class="japanese">（農家は作物を育てる）</span></li>
    <li><span class="english">Exercise builds muscles.</span><span class="japanese">（運動は筋肉を作る）</span></li>
    <li><span class="english">Knowledge brings power.</span><span class="japanese">（知識は力を生む）</span></li>
    <li><span class="english">Practice improves skills.</span><span class="japanese">（練習はスキルを向上させる）</span></li>
    <li><span class="english">He loves science.</span><span class="japanese">（彼は科学を愛している）</span></li>
    <li><span class="english">They play basketball.</span><span class="japanese">（彼らはバスケットボールをする）</span></li>
    <li><span class="english">We study history.</span><span class="japanese">（私たちは歴史を勉強する）</span></li>
  </ol>

  <h2 id="svc">第3章 SVC文型 (主語＋動詞＋補語)</h2>
  <div class="description">
    <p>「主語（S）＋動詞（V）＋補語（C）」のみで構成された英文です。SVC文型では、動詞が「＝（イコール）」の役割を果たし、主語（S）と補語（C）が同一のもの、あるいは主語の状態を表します。出現頻度の高い連結動詞（be, become, look, seem, feel, taste, sound, smell, stay）を使用しています。</p>
  </div>
  <ol>
    <li><span class="english">Dogs are animals.</span><span class="japanese">（犬は動物だ）</span></li>
    <li><span class="english">Humans are mammals.</span><span class="japanese">（人間は哺乳類だ）</span></li>
    <li><span class="english">Fire is hot.</span><span class="japanese">（火は熱い）</span></li>
    <li><span class="english">Ice is cold.</span><span class="japanese">（氷は冷たい）</span></li>
    <li><span class="english">Roses are red.</span><span class="japanese">（バラは赤い）</span></li>
    <li><span class="english">Violets are blue.</span><span class="japanese">（スミレは青い）</span></li>
    <li><span class="english">Everyone is human.</span><span class="japanese">（誰もが人間だ）</span></li>
    <li><span class="english">Knowledge is power.</span><span class="japanese">（知識は力だ）</span></li>
    <li><span class="english">Health is wealth.</span><span class="japanese">（健康は富だ）</span></li>
    <li><span class="english">Change is constant.</span><span class="japanese">（変化は不変だ）</span></li>
    <li><span class="english">Babies become adults.</span><span class="japanese">（赤ちゃんは大人になる）</span></li>
    <li><span class="english">Water becomes steam.</span><span class="japanese">（水は蒸気になる）</span></li>
    <li><span class="english">Leaves become brown.</span><span class="japanese">（葉は茶色くなる）</span></li>
    <li><span class="english">Days become short.</span><span class="japanese">（日は短くなる）</span></li>
    <li><span class="english">Problems become serious.</span><span class="japanese">（問題は深刻になる）</span></li>
    <li><span class="english">Everyone looks tired.</span><span class="japanese">（みんな疲れて見える）</span></li>
    <li><span class="english">Cities look busy.</span><span class="japanese">（都市は忙しそうに見える）</span></li>
    <li><span class="english">Clouds look white.</span><span class="japanese">（雲は白く見える）</span></li>
    <li><span class="english">Goals seem reachable.</span><span class="japanese">（目標は到達可能に思える）</span></li>
    <li><span class="english">Tasks seem hard.</span><span class="japanese">（タスクは難しく思える）</span></li>
    <li><span class="english">Ideas seem crazy.</span><span class="japanese">（アイデアは狂っているように思える）</span></li>
    <li><span class="english">Wool feels itchy.</span><span class="japanese">（ウールはちくちくする）</span></li>
    <li><span class="english">Sunlight feels warm.</span><span class="japanese">（日光は暖かく感じる）</span></li>
    <li><span class="english">Alarms sound loud.</span><span class="japanese">（アラームはうるさく鳴る）</span></li>
    <li><span class="english">Ideas sound interesting.</span><span class="japanese">（考えは面白そうに聞こえる）</span></li>
    <li><span class="english">Soup tastes salty.</span><span class="japanese">（スープは塩辛い味がする）</span></li>
    <li><span class="english">Vinegar tastes sour.</span><span class="japanese">（酢は酸っぱい味がする）</span></li>
    <li><span class="english">Perfume smells strong.</span><span class="japanese">（香水は強く香る）</span></li>
    <li><span class="english">Garbage smells bad.</span><span class="japanese">（ゴミは嫌な臭いがする）</span></li>
    <li><span class="english">Runners stay fit.</span><span class="japanese">（ランナーは健康を維持する）</span></li>
  </ol>

  <h2 id="svoo">第4章 SVOO文型 (主語＋動詞＋間接目的語＋直接目的語)</h2>
  <div class="description">
    <p>「主語（S）＋動詞（V）＋間接目的語（O1）＋直接目的語（O2）」のみで構成された英文です。「SがO1（人など）にO2（物・情報など）を～する（与える）」という授与動詞の構造になります。</p>
  </div>
  <ol>
    <li><span class="english">Teachers give students homework.</span><span class="japanese">（教師は生徒に宿題を与える）</span></li>
    <li><span class="english">Parents buy children gifts.</span><span class="japanese">（親は子供に贈り物を見せる）</span></li>
    <li><span class="english">Friends send me messages.</span><span class="japanese">（友達は私にメッセージを送る）</span></li>
    <li><span class="english">Cows give farmers milk.</span><span class="japanese">（牛は農家にミルクを与える）</span></li>
    <li><span class="english">Chefs cook guests meals.</span><span class="japanese">（料理人は客に食事を作る）</span></li>
    <li><span class="english">I show them results.</span><span class="japanese">（私は彼らに結果を見せる）</span></li>
    <li><span class="english">He tells us stories.</span><span class="japanese">（彼は私たちに話を語る）</span></li>
    <li><span class="english">She writes him letters.</span><span class="japanese">（彼女は彼に手紙を書く）</span></li>
    <li><span class="english">They lend her money.</span><span class="japanese">（彼らは彼女にお金を貸す）</span></li>
    <li><span class="english">We offer you help.</span><span class="japanese">（私たちはあなたに助けを申し出る）</span></li>
    <li><span class="english">Banks grant users loans.</span><span class="japanese">（銀行は利用者にローンを認める）</span></li>
    <li><span class="english">Companies pay workers wages.</span><span class="japanese">（会社は労働者に賃金を支払う）</span></li>
    <li><span class="english">Neighbors bring people food.</span><span class="japanese">（近隣住民は人々に食べ物を持ってくる）</span></li>
    <li><span class="english">Doctors give patients medicine.</span><span class="japanese">（医者は患者に薬を与える）</span></li>
    <li><span class="english">Bees give plants life.</span><span class="japanese">（蜂は植物に命を与える）</span></li>
    <li><span class="english">Dogs bring owners balls.</span><span class="japanese">（犬は飼い主にボールを持ってくる）</span></li>
    <li><span class="english">Cats bring owners mice.</span><span class="japanese">（猫は飼い主にネズミを持ってくる）</span></li>
    <li><span class="english">Birds feed babies insects.</span><span class="japanese">（鳥は雛に虫を与える）</span></li>
    <li><span class="english">Coaches teach teams rules.</span><span class="japanese">（コーチはチームにルールを教える）</span></li>
    <li><span class="english">Nature gives humans water.</span><span class="japanese">（自然は人間に水を与える）</span></li>
    <li><span class="english">Experience teaches beginners skills.</span><span class="japanese">（経験は初心者にスキルを教える）</span></li>
    <li><span class="english">Books give readers knowledge.</span><span class="japanese">（本は読者に知識を与える）</span></li>
    <li><span class="english">Exercise gives athletes strength.</span><span class="japanese">（運動は選手に強さを与える）</span></li>
    <li><span class="english">Music gives listeners peace.</span><span class="japanese">（音楽は聞き手に安らぎを与える）</span></li>
    <li><span class="english">Sun gives earth light.</span><span class="japanese">（太陽は地球に光を与える）</span></li>
    <li><span class="english">Rain gives soil moisture.</span><span class="japanese">（雨は土壌に水分を与える）</span></li>
    <li><span class="english">Farmers sell markets vegetables.</span><span class="japanese">（農家は市場に野菜を売る）</span></li>
    <li><span class="english">Shops show customers items.</span><span class="japanese">（店は客に商品を見せる）</span></li>
    <li><span class="english">Friends tell friends secrets.</span><span class="japanese">（友達は友達に秘密を話す）</span></li>
    <li><span class="english">Life gives everyone opportunities.</span><span class="japanese">（人生は誰にでも機会を与える）</span></li>
  </ol>

  <h2 id="svoc">第5章 SVOC文型 (主語＋動詞＋目的語＋補語)</h2>
  <div class="description">
    <p>「主語（S）＋動詞（V）＋目的語（O）＋補語（C）」のみで構成された英文です。この文型の最大の特徴は、OとCの間に「主語＋述語」のような関係（ネクサス関係）があることです。「目的語（O）＝補語（C）」という関係、またはOがCの状態であるということを動詞が説明します。</p>
  </div>
  <ol>
    <li><span class="english">Friends call me Ken.</span><span class="japanese">（友達は私をケンと呼ぶ）</span></li>
    <li><span class="english">Parents name babies Taro.</span><span class="japanese">（親は赤ん坊をタロウと名付ける）</span></li>
    <li><span class="english">Exercise makes bodies healthy.</span><span class="japanese">（運動は体を引き締める／健康にする）</span></li>
    <li><span class="english">Sunlight makes people warm.</span><span class="japanese">（日光は人を暖かくする）</span></li>
    <li><span class="english">Music makes listeners happy.</span><span class="japanese">（音楽は聞き手を幸せにする）</span></li>
    <li><span class="english">They painted walls white.</span><span class="japanese">（彼らは壁を白く塗った）</span></li>
    <li><span class="english">I want coffee black.</span><span class="japanese">（私はコーヒーをブラックで欲しい）</span></li>
    <li><span class="english">Success made him famous.</span><span class="japanese">（成功は彼を有名にした）</span></li>
    <li><span class="english">Failure made teams stronger.</span><span class="japanese">（失敗はチームをより強くした）</span></li>
    <li><span class="english">Experts call results revolutionary.</span><span class="japanese">（専門家はその結果を画期的だと呼ぶ）</span></li>
    <li><span class="english">We found truth simple.</span><span class="japanese">（私たちは真実が単純だとわかった）</span></li>
    <li><span class="english">Scientists prove theories true.</span><span class="japanese">（科学者は理論が正しいと証明する）</span></li>
    <li><span class="english">Judges declared winners heroes.</span><span class="japanese">（審判は勝者を英雄と宣言した）</span></li>
    <li><span class="english">Time makes pain easier.</span><span class="japanese">（時間は痛みを和らげる）</span></li>
    <li><span class="english">Love makes life wonderful.</span><span class="japanese">（愛は人生を素晴らしくする）</span></li>
    <li><span class="english">They kept secrets safe.</span><span class="japanese">（彼らは秘密を安全に保った）</span></li>
    <li><span class="english">He dyed hair green.</span><span class="japanese">（彼は髪を緑に染めた）</span></li>
    <li><span class="english">History made leaders legends.</span><span class="japanese">（歴史はリーダーを伝説にした）</span></li>
    <li><span class="english">Action makes dreams reality.</span><span class="japanese">（行動は夢を現実にする）</span></li>
    <li><span class="english">Teachers find students smart.</span><span class="japanese">（教師は生徒が賢いと気づく）</span></li>
    <li><span class="english">Sunshine made fruits sweet.</span><span class="japanese">（日光は果物を甘くした）</span></li>
    <li><span class="english">We keep floors clean.</span><span class="japanese">（私たちは床を清潔に保つ）</span></li>
    <li><span class="english">Truth set prisoners free.</span><span class="japanese">（真実が囚人を自由にした）</span></li>
    <li><span class="english">Rain made streets wet.</span><span class="japanese">（雨は通りを濡らした）</span></li>
    <li><span class="english">Heat made metal soft.</span><span class="japanese">（熱は金属を柔らかくした）</span></li>
    <li><span class="english">Night made stars visible.</span><span class="japanese">（夜は星を見えるようにした）</span></li>
    <li><span class="english">Fear made people quiet.</span><span class="japanese">（恐怖は人々を静かにさせた）</span></li>
    <li><span class="english">Success makes everyone proud.</span><span class="japanese">（成功は誰もを誇らしくさせる）</span></li>
    <li><span class="english">Books make readers wise.</span><span class="japanese">（本は読者を賢くする）</span></li>
    <li><span class="english">Money makes people greedy.</span><span class="japanese">（お金は人を強欲にする）</span></li>
  </ol>

`}})}function pi(){return(0,V.jsx)(`div`,{className:`w-full h-full overflow-auto bg-white text-black`,dangerouslySetInnerHTML:{__html:`<style>
    :root {
      --bg-color: #ffffff;
      --text-color: #212529;
      --heading-color: #1a1a1a;
      --sidebar-bg: #f8f9fa;
      --sidebar-border: #e9ecef;
      --link-color: #0d6efd;
      --code-bg: #f8f9fa;
      --code-border: #dee2e6;
      --python-color: #3572A5;
      --r-color: #198CE7;
      --font-main: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans JP", sans-serif;
      --font-heading: Georgia, "Times New Roman", Times, serif;
      --font-code: SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
    }

    * {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
    }

    body {
      font-family: var(--font-main);
      color: var(--text-color);
      line-height: 1.6;
      display: flex;
      background-color: var(--bg-color);
    }

    /* Sidebar Navigation */
    nav {
      width: 250px;
      height: 100vh;
      position: sticky;
      top: 0;
      background-color: var(--sidebar-bg);
      border-right: 1px solid var(--sidebar-border);
      padding: 2rem 1rem;
      overflow-y: auto;
      flex-shrink: 0;
    }

    nav h3 {
      font-size: 0.9rem;
      text-transform: uppercase;
      color: #6c757d;
      margin-bottom: 1rem;
      font-family: var(--font-main);
    }

    nav ul {
      list-style: none;
    }

    nav ul li {
      margin-bottom: 0.5rem;
    }

    nav ul li a {
      text-decoration: none;
      color: var(--text-color);
      font-size: 0.95rem;
      display: block;
      padding: 0.2rem 0;
      transition: color 0.2s;
    }

    nav ul li a:hover {
      color: var(--link-color);
    }

    /* Main Content */
    main {
      flex-grow: 1;
      padding: 3rem 4rem;
      max-width: 1000px;
      margin: 0 auto;
    }

    h1, h2, h3, h4 {
      font-family: var(--font-heading);
      color: var(--heading-color);
      margin-top: 2rem;
      margin-bottom: 1rem;
      font-weight: 600;
    }

    h1 {
      font-size: 2.5rem;
      border-bottom: 1px solid var(--sidebar-border);
      padding-bottom: 1rem;
      margin-top: 0;
    }

    h2 {
      font-size: 1.75rem;
      border-bottom: 1px solid var(--sidebar-border);
      padding-bottom: 0.5rem;
    }

    h3 {
      font-size: 1.25rem;
    }

    p {
      margin-bottom: 1rem;
    }

    ul {
      margin-bottom: 1rem;
      padding-left: 2rem;
    }

    li {
      margin-bottom: 0.5rem;
    }

    .abstract {
      background-color: var(--sidebar-bg);
      border-left: 4px solid var(--link-color);
      padding: 1.5rem;
      margin-bottom: 2rem;
      font-style: italic;
    }

    /* Definition List styling */
    dt {
      font-weight: bold;
      color: var(--heading-color);
      margin-top: 1rem;
      font-size: 1.1rem;
    }

    dd {
      margin-left: 1.5rem;
      margin-bottom: 1rem;
    }

    .etymology {
      font-size: 0.9rem;
      color: #6c757d;
      margin-bottom: 0.2rem;
    }

    /* Code Comparison Layout */
    .code-comparison {
      display: flex;
      gap: 1rem;
      margin: 1.5rem 0;
    }

    .code-col {
      flex: 1;
      min-width: 0;
    }

    .code-block {
      background-color: var(--code-bg);
      border: 1px solid var(--code-border);
      border-radius: 4px;
      overflow: hidden;
      height: 100%;
    }

    .code-header {
      padding: 0.4rem 0.8rem;
      font-size: 0.8rem;
      font-weight: bold;
      color: white;
      display: flex;
      justify-content: space-between;
    }

    .code-header.python { background-color: var(--python-color); }
    .code-header.r { background-color: var(--r-color); }

    pre {
      margin: 0;
      padding: 1rem;
      overflow-x: auto;
    }

    code {
      font-family: var(--font-code);
      font-size: 0.85rem;
      color: #24292e;
    }

    p code, li code {
      background-color: var(--code-bg);
      padding: 0.2rem 0.4rem;
      border-radius: 3px;
      font-size: 0.9em;
      color: #d63384;
    }

    .example-box {
      background-color: #fdfdfe;
      border: 1px solid #e2e8f0;
      border-left: 4px solid #10b981;
      padding: 1rem;
      margin-bottom: 1.5rem;
      border-radius: 0 4px 4px 0;
    }

    .example-box strong { color: #047857; }

    table {
      width: 100%;
      border-collapse: collapse;
      margin-bottom: 1.5rem;
    }

    th, td {
      border: 1px solid var(--code-border);
      padding: 0.75rem;
      text-align: left;
    }

    th { background-color: var(--sidebar-bg); }

    /* 12 Tenses Grid Styling */
    .matrix-table th {
      text-align: center;
      background-color: var(--sidebar-bg);
    }
    
    .matrix-table td {
      text-align: center;
      font-family: var(--font-code);
      font-size: 0.9rem;
      background-color: #ffffff;
    }

    .graph-container {
      background: #ffffff;
      border: 1px solid var(--code-border);
      border-radius: 8px;
      padding: 1.5rem;
      margin-bottom: 2.5rem;
      overflow-x: auto;
      box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05);
    }

    .tense-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
      gap: 1.5rem;
      margin-bottom: 2.5rem;
    }

    .tense-card {
      background-color: var(--bg-color);
      border: 1px solid var(--code-border);
      border-radius: 6px;
      padding: 1.5rem;
      box-shadow: 0 2px 4px rgba(0,0,0,0.02);
      display: flex;
      flex-direction: column;
    }

    .tense-card h4 {
      margin-top: 0;
      font-size: 1.1rem;
      color: var(--python-color);
      display: flex;
      align-items: center;
      gap: 0.5rem;
    }

    .geom-icon {
      font-size: 1.2rem;
      opacity: 0.8;
    }

    .tense-card .example {
      font-weight: bold;
      margin-bottom: 0.75rem;
      padding-bottom: 0.75rem;
      border-bottom: 1px dashed var(--code-border);
      color: var(--heading-color);
    }

    .tense-card p {
      font-size: 0.9rem;
      color: #495057;
      margin-bottom: 1rem;
      flex-grow: 1;
    }

    .tense-card pre {
      background-color: #24292e;
      color: #f8f8f2;
      padding: 1rem;
      border-radius: 4px;
      overflow-x: auto;
    }

    .tense-card pre code {
      color: inherit;
      background: none;
      padding: 0;
      font-family: var(--font-code);
      font-size: 0.85rem;
    }

    @media (max-width: 768px) {
      body { flex-direction: column; }
      nav { width: 100%; height: auto; position: static; border-right: none; border-bottom: 1px solid var(--sidebar-border); }
      main { padding: 2rem 1.5rem; }
      .code-comparison { flex-direction: column; }
      .tense-grid { grid-template-columns: 1fr; }
    }
  </style>


  <nav>
    <h3>Contents</h3>
    <ul>
      <li><a href="#intro">Introduction</a></li>
      <li><a href="#variables">1. 変数と型の定義</a></li>
      <li><a href="#signatures">2. 関数シグネチャ (5文型)</a></li>
      <li><a href="#runtime">3. ランタイム実行 (Stockfish Engine)</a></li>
      <li><a href="#routing">4. 引数設計 (SVOO)</a></li>
      <li><a href="#debugging">5. 実践的デバッグ (Modifier)</a></li>
    </ul>
  </nav>

  <main>
    <h1 id="intro">English Syntax as Code (v2.0)</h1>
    
    <div class="abstract">
      <p><strong>自然言語を「プログラミングコード」として解釈する構文仕様書</strong></p>
      <p>本ドキュメントは、英語の構文を曖昧な自然言語としてではなく、厳密な型定義と関数シグネチャを持つ「コード」として解釈するための公式リファレンスである。「5文型」という伝統的な分類を、ソフトウェアエンジニアリングの視点（型の制約、メモリ操作、実行スレッド）から再構築した。</p>
    </div>

    <h2 id="variables">1. 引数（変数）の定義と語源</h2>
    <p>英語を構成する各要素は、プログラムにおける変数、インスタンス、メソッド、アノテーションとして厳密に型定義される。</p>

    <dl>
      <dt>Subject (S) / 主語</dt>
      <dd>
        <div class="etymology">語源：sub（下に） + iacere（投げる） ＝ 下に置かれた土台</div>
        <strong>[プログラミング定義]</strong> 処理の実行主体となる <code>Instance</code> または <code>Object</code>。メソッドを呼び出す大元（レシーバー）。
      </dd>

      <dt>Verb (V) / 動詞</dt>
      <dd>
        <div class="etymology">語源：verbum（言葉そのもの）</div>
        <strong>[プログラミング定義]</strong> 主体が実行する <code>Method</code> や関数。文の処理内容（振る舞い）を決定する。状態を更新する代入演算子（<code>=</code>, <code>&lt;-</code>）の役割を果たすこともある。
      </dd>

      <dt>Object (O) / 目的語</dt>
      <dd>
        <div class="etymology">語源：ob（向かって） + iacere（投げる） ＝ 動作の標的</div>
        <strong>[プログラミング定義]</strong> メソッド（Verb）に渡される必須の <code>Argument</code>（引数）。<code>null</code>（欠損値）を許容しない。
      </dd>

      <dt>Complement (C) / 補語</dt>
      <dd>
        <div class="etymology">語源：complere（満たす、補完する）</div>
        <strong>[プログラミング定義]</strong> Subject または Object のプロパティに代入される <code>State</code> や <code>Value</code>。型は文字列（名詞）または論理値・列挙型（形容詞）。
      </dd>

      <dt>Modifier (M) / 修飾語</dt>
      <dd>
        <div class="etymology">語源：modificare（制限する、調整する）</div>
        <strong>[プログラミング定義]</strong> 実行結果のメインロジックに影響を与えない <code>Annotation</code> またはコード内の <code>/* Comment */</code>。型のインターフェース（前置詞＋名詞など）さえ守れば、どこに挿入してもコンパイルエラーにならない。
      </dd>
    </dl>

    <h3 id="type-constraints" style="margin-top: 2.5rem; font-size: 1.35rem;">【補足】エレメントと品詞の対応マトリックス</h3>
    <p>この表は、<strong>「ある特定の席（エレメント）に、どの材料（品詞）を放り込めるか」</strong>というプログラミングにおける型制約（Type Constraint）を一覧化したものである。</p>

    <table>
      <thead>
        <tr>
          <th style="width: 45%; text-align: left;">エレメント / 文の要素 (Sentence Element)</th>
          <th style="text-align: left;">活用される品詞 (Parts of Speech)</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><strong>S：Subject（主語）</strong></td>
          <td>名詞・代名詞 (Noun / Pronoun)</td>
        </tr>
        <tr>
          <td><strong>V：Verb（述語動詞）</strong></td>
          <td>動詞 (Verb)</td>
        </tr>
        <tr>
          <td><strong>O：Object（目的語）</strong></td>
          <td>名詞・代名詞 (Noun / Pronoun)</td>
        </tr>
        <tr>
          <td><strong>C：Complement（補語）</strong></td>
          <td>名詞・代名詞 (Noun / Pronoun)<br>形容詞 (Adjective)</td>
        </tr>
        <tr>
          <td><strong>M：Modifier（修飾語）</strong></td>
          <td>形容詞 (Adjective)<br>副詞 (Adverb)</td>
        </tr>
      </tbody>
    </table>

    <div class="example-box">
      <strong>このリストの活用ガイド</strong><br><br>
      <ul style="margin-bottom: 1rem;">
        <li><strong>骨組み（S / V / O）：</strong> ここには基本的に<strong>「名詞」と「動詞」</strong>しか入らない。文のメインメッセージを作る、重厚なパーツ（必須の引数）である。</li>
        <li><strong>説明役（C）：</strong> 「S＝C」や「O＝C」というイコール関係を作る席。名前（名詞）を置くこともあれば、様子（形容詞）を置くこともある。</li>
        <li><strong>飾り（M）：</strong> 文を豊かにする「修飾語」の席。名詞を詳しくするなら形容詞、それ以外（動きや程度）を詳しくするなら副詞を使い分ける。</li>
      </ul>
      <p style="margin-bottom: 0;">こうして2列に絞ると、「名詞」がいかに多くの席（S, O, C）を兼任しているか、そして<strong>「副詞」がいかに「M」という役割に特化しているか</strong>が際立つ。</p>
    </div>

    <h2 id="signatures">2. 関数シグネチャ（5つの基本構文）</h2>
    <p>いわゆる「5文型」は、メソッドの引数の渡し方とメモリ操作のパターン（関数シグネチャ）に過ぎない。Pythonのオブジェクト指向と、Rの関数型アプローチの両面から定義する。</p>

    <h3>パターン1：自己完結メソッド (SV)</h3>
    <p>外部引数を必要としない、主体のみで完結するVoid型メソッド。副作用（Side Effect）はSubject内部に限定される。</p>
    
    <div class="code-comparison">
      <div class="code-col">
        <div class="code-block">
          <div class="code-header python"><span>Python (OOP)</span></div>
          <pre><code># Syntax: Subject.execute_verb()
def process(sun):
  sun.rise()</code></pre>
        </div>
      </div>
      <div class="code-col">
        <div class="code-block">
          <div class="code-header r"><span>R (Functional)</span></div>
          <pre><code># Syntax: execute_verb(Subject)
process &lt;- function(sun) {
  rise(sun)
}</code></pre>
        </div>
      </div>
    </div>
    <div class="example-box">
      <strong>EXAMPLE:</strong> The sun rises. (太陽が昇る)<br>
      -&gt; 外部へエネルギー（引数）が漏れず、自己完結する。
    </div>

    <h3>パターン2：プロパティの代入 (SVC)</h3>
    <p>Verbが単なるセッター（代入演算子）として機能し、Subjectの属性（Property）を同期的に更新する。</p>

    <div class="code-comparison">
      <div class="code-col">
        <div class="code-block">
          <div class="code-header python"><span>Python</span></div>
          <pre><code># Syntax: Subject.state = Complement
soup.state = "hot"</code></pre>
        </div>
      </div>
      <div class="code-col">
        <div class="code-block">
          <div class="code-header r"><span>R</span></div>
          <pre><code># Syntax: Subject$state &lt;- Complement
soup$state &lt;- "hot"</code></pre>
        </div>
      </div>
    </div>
    <div class="example-box">
      <strong>EXAMPLE:</strong> The soup is hot. (そのスープは熱い)<br>
      -&gt; <code>The soup = hot</code> の関係。Verbは繋ぐだけの連結動詞。
    </div>

    <h3>パターン3：引数実行メソッド (SVO)</h3>
    <p>外部の引数（Object）を受け取り、それに対して処理を実行する単一引数関数。</p>

    <div class="code-comparison">
      <div class="code-col">
        <div class="code-block">
          <div class="code-header python"><span>Python</span></div>
          <pre><code># Syntax: Subject.execute_verb(Object)
i.read(book)</code></pre>
        </div>
      </div>
      <div class="code-col">
        <div class="code-block">
          <div class="code-header r"><span>R</span></div>
          <pre><code># Syntax: execute_verb(Subject, Object)
read(subject = i, object = book)</code></pre>
        </div>
      </div>
    </div>
    <div class="example-box">
      <strong>EXAMPLE:</strong> I read a book. (私は本を読む)<br>
      -&gt; <code>I</code> が <code>book</code> に対して <code>read</code> を実行。
    </div>

    <h3>パターン4：複数引数のルーティング (SVOO)</h3>
    <p>IndirectObject（宛先）と DirectObject（ペイロード）の2つの引数を転送する。</p>

    <div class="code-comparison">
      <div class="code-col">
        <div class="code-block">
          <div class="code-header python"><span>Python</span></div>
          <pre><code># Syntax: Subject.execute_verb(target, payload)
he.give(target=me, payload=pen)</code></pre>
        </div>
      </div>
      <div class="code-col">
        <div class="code-block">
          <div class="code-header r"><span>R</span></div>
          <pre><code># Syntax: execute_verb(Subj, target, payload)
give(he, target = me, payload = pen)</code></pre>
        </div>
      </div>
    </div>
    <div class="example-box">
      <strong>EXAMPLE:</strong> He gave me a pen. (彼は私にペンをくれた)<br>
      -&gt; 宛先 <code>me</code> に 実データ <code>a pen</code> を転送。
    </div>

    <h3>パターン5：オブジェクト状態の書き換え (SVOC)</h3>
    <p>高階関数/副作用の極致。Subjectが処理を実行した副作用として、文の中に「小さな代入式（O=C）」がスレッドとして発生する。</p>

    <div class="code-comparison">
      <div class="code-col">
        <div class="code-block">
          <div class="code-header python"><span>Python</span></div>
          <pre><code># Nested Logic (Side Effect)
they.make(him)
him.state = "happy" # 同期的な状態変化</code></pre>
        </div>
      </div>
      <div class="code-col">
        <div class="code-block">
          <div class="code-header r"><span>R</span></div>
          <pre><code># Mutable state simulation
him &lt;- make(they, target = him)
attr(him, "state") &lt;- "happy"</code></pre>
        </div>
      </div>
    </div>
    <div class="example-box">
      <strong>EXAMPLE:</strong> They made him happy. (彼らは彼を幸せにした)<br>
      -&gt; <code>make</code> 処理の結果、<code>him = happy</code> という状態が動的に生成される。
    </div>

    <h2 id="runtime">3. ランタイム実行：Stockfish Engine の状態空間（12の時制と相）</h2>
    <p>英語の時制（Tense）と相（Aspect）は、チェスエンジン（Stockfish）のGUI画面（コンソール）における **「評価値の表示状態」** のメタファーとして直感的に理解できる。</p>
    <ul>
      <li><strong>Past (過去)</strong>: PGNに書き出された過去ログ。画面にはもう表示されていない（<span style="color: #94a3b8; font-weight:bold;">グレーアウト</span>）。</li>
      <li><strong>Present (現在)</strong>: 今まさに計算中で、画面にアクティブに表示されている（<span style="color: #ef4444; font-weight:bold;">実色</span>）。</li>
      <li><strong>Future (未来)</strong>: キューに積まれたタスク。これから画面に表示される予定のもの（<span style="border-bottom: 2px dashed #6366f1; color: #6366f1; font-weight:bold;">点線枠</span>）。</li>
    </ul>

    <!-- 12時制 すべてをプロットしたインフォグラフィック -->
    <div class="graph-container">
      <h4 style="margin-top: 0; text-align: center; color: #495057; font-family: var(--font-heading);">Engine State Plot: All 12 Tenses Visualized</h4>
      <svg viewBox="0 0 900 420" style="width: 100%; min-width: 700px; height: auto; font-family: var(--font-main);">
        <defs>
          <!-- 背景ゾーン用グラデーション -->
          <linearGradient id="gradPast" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stop-color="#f8fafc" stop-opacity="1" />
            <stop offset="100%" stop-color="#f1f5f9" stop-opacity="1" />
          </linearGradient>
          <linearGradient id="gradFuture" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stop-color="#f1f5f9" stop-opacity="1" />
            <stop offset="100%" stop-color="#f8fafc" stop-opacity="1" />
          </linearGradient>
          
          <!-- Accumulate (Volume) 用グラデーション -->
          <linearGradient id="volPresent" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stop-color="#6366f1" stop-opacity="0.25" />
            <stop offset="100%" stop-color="#6366f1" stop-opacity="0.05" />
          </linearGradient>
          
          <!-- 矢印マーカー -->
          <marker id="arrowPast" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto">
            <path d="M 0 0 L 10 5 L 0 10 z" fill="#94a3b8" />
          </marker>
          <marker id="arrowPresent" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto">
            <path d="M 0 0 L 10 5 L 0 10 z" fill="#f59e0b" />
          </marker>
          <marker id="arrowFuture" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto">
            <path d="M 0 0 L 10 5 L 0 10 z" fill="none" stroke="#f59e0b" stroke-width="2" />
          </marker>
        </defs>

        <!-- === 背景ゾーン (Time) === -->
        <rect x="0" y="0" width="300" height="380" fill="url(#gradPast)" />
        <rect x="300" y="0" width="300" height="380" fill="#ffffff" />
        <rect x="600" y="0" width="300" height="380" fill="url(#gradFuture)" />

        <!-- 境界線 -->
        <line x1="300" y1="0" x2="300" y2="380" stroke="#cbd5e1" stroke-dasharray="4,4" stroke-width="2" />
        <line x1="600" y1="0" x2="600" y2="380" stroke="#cbd5e1" stroke-dasharray="4,4" stroke-width="2" />

        <!-- X-Axis -->
        <line x1="0" y1="360" x2="900" y2="360" stroke="#64748b" stroke-width="2" />

        <!-- X-Axis Labels (Tense) -->
        <text x="150" y="390" text-anchor="middle" font-weight="bold" fill="#64748b" font-size="14">PAST (PGN History)</text>
        <text x="450" y="390" text-anchor="middle" font-weight="bold" fill="#2563eb" font-size="16">PRESENT (Root Node)</text>
        <text x="750" y="390" text-anchor="middle" font-weight="bold" fill="#64748b" font-size="14">FUTURE (Task Queue)</text>
        
        <!-- Y-Axis Label -->
        <text x="15" y="25" font-weight="bold" fill="#94a3b8" font-size="12">Evaluation Depth (Effort)</text>


        <!-- === 1. Perfect Progressive (Volume / Accumulate) === -->
        <!-- 時間経過とともに深さが増していく背景の面グラフ -->
        <!-- Past (グレーアウト) -->
        <path d="M 0 360 L 0 310 Q 150 280 300 240 L 300 360 Z" fill="#e2e8f0" />
        <text x="150" y="340" text-anchor="middle" font-size="11" font-weight="bold" fill="#64748b">I had been calculating (Vol)</text>
        
        <!-- Present (青グラデ) -->
        <path d="M 300 360 L 300 240 Q 450 180 600 120 L 600 360 Z" fill="url(#volPresent)" />
        <path d="M 300 240 Q 450 180 600 120" fill="none" stroke="#6366f1" stroke-width="2" />
        <text x="450" y="320" text-anchor="middle" font-size="12" font-weight="bold" fill="#4338ca">I have been calculating (Vol)</text>
        
        <!-- Future (点線枠・透過) -->
        <path d="M 600 360 L 600 120 Q 750 60 900 40 L 900 360" fill="none" stroke="#6366f1" stroke-width="2" stroke-dasharray="4,4" />
        <text x="750" y="280" text-anchor="middle" font-size="11" font-weight="bold" fill="#6366f1">I will have been calculating (Vol)</text>


        <!-- === 2. Perfect (Area / TT Cached) === -->
        <!-- Past (グレーアウトの面) -->
        <rect x="100" y="210" width="100" height="30" rx="4" fill="#cbd5e1" fill-opacity="0.6" stroke="#94a3b8" />
        <text x="150" y="230" text-anchor="middle" font-size="11" font-weight="bold" fill="#475569">I had solved (Area)</text>

        <!-- Present (緑の実色面) -->
        <rect x="400" y="150" width="100" height="30" rx="4" fill="#10b981" fill-opacity="0.2" stroke="#10b981" stroke-width="2" />
        <text x="450" y="170" text-anchor="middle" font-size="12" font-weight="bold" fill="#047857">I have solved (Area)</text>

        <!-- Future (緑の点線枠) -->
        <rect x="700" y="90" width="100" height="30" rx="4" fill="none" stroke="#10b981" stroke-width="2" stroke-dasharray="4,4" />
        <text x="750" y="110" text-anchor="middle" font-size="11" font-weight="bold" fill="#10b981">I will have solved (Area)</text>


        <!-- === 3. Progressive (Vector / Searching) === -->
        <!-- Past (グレーの波線) -->
        <path d="M 100 160 Q 150 130 190 160" fill="none" stroke="#94a3b8" stroke-width="2" marker-end="url(#arrowPast)" />
        <text x="150" y="145" text-anchor="middle" font-size="11" font-weight="bold" fill="#64748b">I was searching (Vector)</text>

        <!-- Present (オレンジの実線) -->
        <path d="M 400 100 Q 450 60 490 100" fill="none" stroke="#f59e0b" stroke-width="3" marker-end="url(#arrowPresent)" />
        <text x="450" y="80" text-anchor="middle" font-size="12" font-weight="bold" fill="#d97706">I am searching (Vector)</text>

        <!-- Future (オレンジの点線波線) -->
        <path d="M 700 40 Q 750 10 790 40" fill="none" stroke="#f59e0b" stroke-width="2" stroke-dasharray="4,4" marker-end="url(#arrowFuture)" />
        <text x="750" y="25" text-anchor="middle" font-size="11" font-weight="bold" fill="#f59e0b">I will be searching (Vector)</text>


        <!-- === 4. Simple (Point / Static Eval) === -->
        <!-- Past (グレーアウトの点) -->
        <circle cx="150" cy="100" r="5" fill="#94a3b8" />
        <text x="150" y="118" text-anchor="middle" font-size="11" font-weight="bold" fill="#64748b">I evaluated (Point)</text>

        <!-- Present (赤の実色の点) -->
        <circle cx="450" cy="40" r="6" fill="#ef4444" />
        <text x="450" y="60" text-anchor="middle" font-size="12" font-weight="bold" fill="#ef4444">I evaluate (Point)</text>

        <!-- Future (赤の中抜き点線円) -->
        <circle cx="750" cy="-20" r="6" fill="none" stroke="#ef4444" stroke-width="2" stroke-dasharray="2,2" transform="translate(0, 100)" />
        <text x="750" y="100" text-anchor="middle" font-size="11" font-weight="bold" fill="#ef4444">I will evaluate (Point)</text>

      </svg>
    </div>

    <!-- 表のマトリクス -->
    <table class="matrix-table">
      <thead>
        <tr>
          <th>計算状態 <br><small>(Aspect)</small>  探索木ノード位置 <br><small>(Tense)</small></th>
          <th>Past <br><small>(グレーアウト / PGN)</small></th>
          <th>Present <br><small>(実色 / GUI表示中)</small></th>
          <th>Future <br><small>(点線枠 / キュー予測)</small></th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th>Simple<br><small>(点: Static Eval)</small></th>
          <td style="color: #64748b;">I evaluated</td>
          <td style="color: #ef4444; font-weight: bold;">I evaluate</td>
          <td style="color: #ef4444; border: 1px dashed #ef4444; background: #fff5f5;">I will evaluate</td>
        </tr>
        <tr>
          <th>Progressive<br><small>(線: Searching Vector)</small></th>
          <td style="color: #64748b;">I was searching</td>
          <td style="color: #d97706; font-weight: bold;">I am searching</td>
          <td style="color: #d97706; border: 1px dashed #d97706; background: #fffbeb;">I will be searching</td>
        </tr>
        <tr>
          <th>Perfect<br><small>(面: TT Cached Area)</small></th>
          <td style="color: #64748b;">I had solved</td>
          <td style="color: #047857; font-weight: bold;">I have solved</td>
          <td style="color: #047857; border: 1px dashed #047857; background: #f0fdf4;">I will have solved</td>
        </tr>
        <tr>
          <th>Perfect Progressive<br><small>(体積: Depth Accumulate)</small></th>
          <td style="color: #64748b;">I had been calculating</td>
          <td style="color: #4338ca; font-weight: bold;">I have been calculating</td>
          <td style="color: #4338ca; border: 1px dashed #4338ca; background: #eef2ff;">I will have been calculating</td>
        </tr>
      </tbody>
    </table>

    <hr style="margin: 2rem 0; border: none; border-top: 1px solid var(--sidebar-border);">

    <!-- Present Tense Group -->
    <h3>1. Present (Root Node / 現在の盤面)</h3>
    <p>今まさにGUI画面にアクティブに表示されている実色の評価値。</p>
    <div class="tense-grid">
      <div class="tense-card">
        <h4><span class="geom-icon">🔴</span> Present Simple (現在単純形)</h4>
        <div class="example">The engine evaluates the position.</div>
        <p><strong>【状態: Point / 点】</strong><br>静的評価（Static Evaluation）。時間幅を持たず、特定のノードにおける瞬間的なスナップショット値（スコア）。</p>
        <pre><code>// 0次元的な静的評価値
const score = evaluate(current_pos);</code></pre>
      </div>
      <div class="tense-card">
        <h4><span class="geom-icon">↗️</span> Present Progressive (現在進行形)</h4>
        <div class="example">The engine is searching the lines.</div>
        <p><strong>【状態: Vector / ベクトル・波】</strong><br>現在進行形でCPUリソースを消費し、探索を実行中。状態が動的に遷移しているベクトル。</p>
        <pre><code>// 1次元的なリソースの流動
while (time_allocated > 0) {
  search_tree(current_pos);
  yield; // 計算を継続
}</code></pre>
      </div>
      <div class="tense-card">
        <h4><span class="geom-icon">🟩</span> Present Perfect (現在完了形)</h4>
        <div class="example">The engine has cached the position.</div>
        <p><strong>【状態: Area / 面・領域】</strong><br>過去の探索結果がTT（Transposition Table）に保存され、現在のノード評価を「面」としてカバーしている完了状態。</p>
        <pre><code>// 2次元的なカバー範囲（キャッシュ）
if (TT.contains(hash)) {
  return TT.get(hash).score;
}</code></pre>
      </div>
      <div class="tense-card">
        <h4><span class="geom-icon">🟦</span> Present Perf. Prog. (現在完了進行形)</h4>
        <div class="example">The engine has been calculating depth 40.</div>
        <p><strong>【状態: Volume / 体積・蓄積】</strong><br>過去から継続して同一局面の探索を行っており、到達深度（Depth）やノード数が蓄積されている状態。</p>
        <pre><code>// 3次元的な計算量の積み上げ
while (engine.uptime() > 0) {
  depth.accumulate();
  update_stats(depth);
}</code></pre>
      </div>
    </div>

    <!-- Past Tense Group -->
    <h3>2. Past (Game History / 過去のPGN履歴)</h3>
    <p>すでにPGN等にログとして保存され、現在のGUI画面からは消えたグレーアウト状態。</p>
    <div class="tense-grid">
      <div class="tense-card" style="opacity: 0.8; background-color: #f8fafc;">
        <h4 style="color: #64748b;"><span class="geom-icon">⚪</span> Past Simple (過去単純形)</h4>
        <div class="example" style="color: #475569; border-bottom-color: #cbd5e1;">The engine played e4.</div>
        <p><strong>【状態: Past Point】</strong><br>履歴に書き込まれた単なる点（Ply）。現在の探索スレッドには影響を与えない完了したトランザクション。</p>
        <pre><code>// 履歴への固定化
game_history.push({
  move: "e2e4",
  time: "yesterday"
});</code></pre>
      </div>
      <div class="tense-card" style="opacity: 0.8; background-color: #f8fafc;">
        <h4 style="color: #64748b;"><span class="geom-icon">〰️</span> Past Progressive (過去進行形)</h4>
        <div class="example" style="color: #475569; border-bottom-color: #cbd5e1;">The engine was analyzing the blunder.</div>
        <p><strong>【状態: Past Vector】</strong><br>過去の特定の時間枠において、エンジンがリソースを割いて探索を行っていたという状態ログ。</p>
        <pre><code>// 過去の特定時点での状態トレース
let log = logs.get("move_15");
assert(log.status === "searching");</code></pre>
      </div>
      <div class="tense-card" style="opacity: 0.8; background-color: #f8fafc;">
        <h4 style="color: #64748b;"><span class="geom-icon">🔲</span> Past Perfect (過去完了形)</h4>
        <div class="example" style="color: #475569; border-bottom-color: #cbd5e1;">The engine had already found a mate.</div>
        <p><strong>【状態: Past Area】</strong><br>過去の特定時点を基準とした時、それより以前の探索によって既に結論の面が構築され、準備されていた状態。</p>
        <pre><code>// 過去のある時点でのキャッシュヒット
let snapshot = db.get("ply_20");
assert(snapshot.mate_found === true);</code></pre>
      </div>
      <div class="tense-card" style="opacity: 0.8; background-color: #f8fafc;">
        <h4 style="color: #64748b;"><span class="geom-icon">📦</span> Past Perf. Prog. (過去完了進行形)</h4>
        <div class="example" style="color: #475569; border-bottom-color: #cbd5e1;">The engine had been pondering the move.</div>
        <p><strong>【状態: Past Volume】</strong><br>過去のある時点までずっと計算量を蓄積し続けていたという計算資源の塊の記録。</p>
        <pre><code>// 過去の蓄積エネルギー量
let stats = db.get("opponent_turn");
assert(stats.nodes > 1_000_000);</code></pre>
      </div>
    </div>

    <!-- Future Tense Group -->
    <h3>3. Future (Future Nodes / 探索木の未来展開)</h3>
    <p>これから計算され、未来のタイミングでGUI画面に表示される予定の点線枠（予測）。</p>
    <div class="tense-grid">
      <div class="tense-card" style="border: 2px dashed #cbd5e1;">
        <h4 style="color: #64748b;"><span class="geom-icon">⭕</span> Future Simple (未来単純形)</h4>
        <div class="example">The engine will evaluate this branch.</div>
        <p><strong>【状態: Future Point】</strong><br>探索キューに積まれたタスク（Promise）。将来、到達した瞬間に静的評価（点）が行われる予定。</p>
        <pre><code>// タスクキューへの追加
task_queue.push(node);
// or
Promise.resolve(evaluate(node));</code></pre>
      </div>
      <div class="tense-card" style="border: 2px dashed #cbd5e1;">
        <h4 style="color: #64748b;"><span class="geom-icon">〽️</span> Future Progressive (未来進行形)</h4>
        <div class="example">The engine will be searching the endgame.</div>
        <p><strong>【状態: Future Vector】</strong><br>探索が特定の手順まで進んだ未来時点で、そこで探索スレッドがアクティブになっているだろうという予測。</p>
        <pre><code>// 未来のフェーズ移行予測
let phase = estimate(depth + 10);
expect(phase).toBe("endgame_search");</code></pre>
      </div>
      <div class="tense-card" style="border: 2px dashed #cbd5e1;">
        <h4 style="color: #64748b;"><span class="geom-icon">🏁</span> Future Perfect (未来完了形)</h4>
        <div class="example">The engine will have solved the puzzle.</div>
        <p><strong>【状態: Future Area】</strong><br>未来の特定時点において、必要な評価空間が完全にカバー（完了・面化）し終わっているという状態の確約。</p>
        <pre><code>// 未来の完了条件の充足
await search_until(depth == 30);
state.is_solved = true;</code></pre>
      </div>
      <div class="tense-card" style="border: 2px dashed #cbd5e1;">
        <h4 style="color: #64748b;"><span class="geom-icon">📶</span> Future Perf. Prog. (未来完了進行形)</h4>
        <div class="example">The engine will have been running for hours.</div>
        <p><strong>【状態: Future Volume】</strong><br>未来の特定時点において、累積したノード数が巨大な体積となり、依然として増え続けている状態予測。</p>
        <pre><code>// 未来時点での累積リソース予測
let time = target_time - start_time;
assert(time > hours(5));</code></pre>
      </div>
    </div>

    <h2 id="routing">4. SVOOの引数設計：ターゲットとペイロード</h2>
    <p>パターン4（SVOO）において、2つの引数（Object）は等価ではない。「宛先情報」と「実データ」という役割の違いがある。</p>
    <ul>
      <li><code>IndirectObject (O1)</code>: <strong>Routing Target</strong>（宛先情報 / オプション）</li>
      <li><code>DirectObject (O2)</code>: <strong>Payload</strong>（送信される実データ / 必須）</li>
    </ul>
    <p>原則としてPayloadが必須であり、Targetは省略するか、Modifierとして外部に追い出すことが可能である。</p>

    <div class="code-comparison">
      <div class="code-col">
        <div class="code-block">
          <div class="code-header python"><span>Python: Parameter Downgrade</span></div>
          <pre><code># 1. Full Parameters (SVOO)
subject.send(target=him, payload=gift)

# 2. Downgrade to Modifier (SVO + M)
# targetがアノテーション化
subject.send(payload=gift) # [Mod: to him]

# 3. Target Omission (SVO)
subject.send(payload=gift)</code></pre>
        </div>
      </div>
      <div class="code-col">
        <div class="code-block">
          <div class="code-header r"><span>R: Parameter Downgrade</span></div>
          <pre><code># 1. Full Parameters (SVOO)
send(target = him, payload = gift)

# 2. Downgrade to Modifier (SVO + M)
# Mは attributes 等で付加されるイメージ
res &lt;- send(payload = gift)
attr(res, "target") &lt;- "him"

# 3. Target Omission (SVO)
send(payload = gift)</code></pre>
        </div>
      </div>
    </div>

    <h2 id="debugging">5. Modifier（修飾語）の実践的デバッグ</h2>
    <p>実際の英文が複雑化し、<code>SMVMOM</code> のように肥大化する原因は、すべて Modifier（M）の追加によるものである。構文解析を行う際は、これらを<strong>コメントアウトしてメインロジックから切り離す</strong>ことで、全体の構造が明確になる。</p>

    <div class="code-comparison">
      <div class="code-col">
        <div class="code-block">
          <div class="code-header python"><span>Python: Parsed Syntax</span></div>
          <pre><code># [Modifier: Yesterday]
subject_I   .execute_bought( # [Mod: who usually save...]
    object_a_book  # [Mod: about space]
  )
# [Modifier: safely]
# [Modifier: on the internet]

# Execution Logic:
# subject_I.execute_bought(object_a_book)</code></pre>
        </div>
      </div>
      <div class="code-col">
        <div class="code-block">
          <div class="code-header r"><span>R: Parsed Syntax</span></div>
          <pre><code># attr: Yesterday
bought(
  subject = I, # attr: who usually save...
  object = a_book # attr: about space
)
# attr: safely
# attr: on the internet

# Execution Logic:
# bought(subject = I, object = a_book)</code></pre>
        </div>
      </div>
    </div>

    <div class="example-box">
      <strong>Original Text:</strong><br>
      Yesterday, I, who usually save money, bought a book about space safely on the internet.<br><br>
      <strong>Parsed (Mを不可視化):</strong><br>
      <del style="color: #94a3b8">Yesterday,</del> <strong>I</strong>, <del style="color: #94a3b8">who usually save money</del>, <strong>bought a book</strong> <del style="color: #94a3b8">about space safely on the internet.</del><br><br>
      英語読解における最大のコツは、前置詞（in, at, for, to等）や関係代名詞（who, which等）を見つけた瞬間に、そこから先を <code>/* ... */</code> として脳内で不可視化することである。
    </div>

  </main>
`}})}var mi=`[
      {
        "id": "q001",
        "title": "Q001 - Prepositional Phrase (前置詞句による後置修飾)",
        "sentence": "The development of a new digital marketing strategy is on the agenda for this afternoon’s meeting.",
        "translation": "新たなデジタルマーケティング戦略の立案が、今日の午後の会議の議題に上がっている。",
        "tips": "主語の「development」を、前置詞句「of a new digital marketing strategy」が後ろから修飾しています。「on the agenda...」はbe動詞の直後に置かれ、M（副詞句）として述語動詞にぶら下げる形で処理しています。",
        "structure": [
          {
            "type": "S",
            "text": "development",
            "pos": "Noun",
            "label": "Subject",
            "preM": [
              {"t": "The", "p": "Art."}
            ],
            "postM": [
              {"t": "of", "p": "Prep."}, {"t": "a", "p": "Art."}, {"t": "new", "p": "Adj."}, {"t": "digital", "p": "Adj."}, {"t": "marketing", "p": "Noun"}, {"t": "strategy", "p": "Noun"}
            ]
          },
          {
            "type": "V",
            "text": "is",
            "pos": "Verb",
            "label": "Verb",
            "preM": [],
            "postM": [
              {"t": "on", "p": "Prep."}, {"t": "the", "p": "Art."}, {"t": "agenda", "p": "Noun"}, {"t": "for", "p": "Prep."}, {"t": "this", "p": "Pron."}, {"t": "afternoon’s", "p": "Noun"}, {"t": "meeting.", "p": "Noun"}
            ]
          }
        ]
      },
      {
        "id": "q002",
        "title": "Q002 - Adverb Modification (副詞の修飾)",
        "sentence": "The Berovo Institute regularly publishes the results of its research in renowned scientific journals.",
        "translation": "Berovo研究所は、著名な科学誌で定期的に研究結果を公表している。",
        "tips": "副詞「regularly」が述語動詞「publishes」を前置修飾しています。場所を表す「in renowned scientific journals」は述語動詞への後置修飾として格納しています。",
        "structure": [
          {
            "type": "S",
            "text": "Institute",
            "pos": "Noun",
            "label": "Subject",
            "preM": [
              {"t": "The", "p": "Art."}, {"t": "Berovo", "p": "Noun"}
            ],
            "postM": []
          },
          {
            "type": "V",
            "text": "publishes",
            "pos": "Verb",
            "label": "Verb",
            "preM": [
              {"t": "regularly", "p": "Adv."}
            ],
            "postM": [
              {"t": "in", "p": "Prep."}, {"t": "renowned", "p": "Adj."}, {"t": "scientific", "p": "Adj."}, {"t": "journals.", "p": "Noun"}
            ]
          },
          {
            "type": "O",
            "text": "results",
            "pos": "Noun",
            "label": "Object",
            "preM": [
              {"t": "the", "p": "Art."}
            ],
            "postM": [
              {"t": "of", "p": "Prep."}, {"t": "its", "p": "Pron."}, {"t": "research", "p": "Noun"}
            ]
          }
        ]
      },
      {
        "id": "q003",
        "title": "Q003 - Infinitive as Complement (補語としての不定詞)",
        "sentence": "Full-scale development of the lightweight aircraft is set to begin in the spring of next year.",
        "translation": "その軽量の航空機の全面的な開発は、来春始まりそうだ。",
        "tips": "「is set to begin」は「is（V） + set（C）」として捉え、「to begin...」は補語「set」を修飾する要素として配置しています。",
        "structure": [
          {
            "type": "S",
            "text": "development",
            "pos": "Noun",
            "label": "Subject",
            "preM": [
              {"t": "Full-scale", "p": "Adj."}
            ],
            "postM": [
              {"t": "of", "p": "Prep."}, {"t": "the", "p": "Art."}, {"t": "lightweight", "p": "Adj."}, {"t": "aircraft", "p": "Noun"}
            ]
          },
          {
            "type": "V",
            "text": "is",
            "pos": "Verb",
            "label": "Verb",
            "preM": [],
            "postM": []
          },
          {
            "type": "C",
            "text": "set",
            "pos": "Past Part.",
            "label": "Complement",
            "preM": [],
            "postM": [
              {"t": "to", "p": "Inf. to"}, {"t": "begin", "p": "Inf. Verb"}, {"t": "in", "p": "Prep."}, {"t": "the", "p": "Art."}, {"t": "spring", "p": "Noun"}, {"t": "of", "p": "Prep."}, {"t": "next", "p": "Adj."}, {"t": "year.", "p": "Noun"}
            ]
          }
        ]
      },
      {
        "id": "q004",
        "title": "Q004 - Future Continuous Tense (未来進行形)",
        "sentence": "A nutritionist from Shaffer University will be discussing her latest research on food additives.",
        "translation": "Shaffer大学の栄養士が、食品添加物に関する彼女の最新の研究について話す予定だ。",
        "tips": "「will be discussing」は「discussing」をメインのVとし、「will be」を助動詞的な前置修飾として格納しています。",
        "structure": [
          {
            "type": "S",
            "text": "nutritionist",
            "pos": "Noun",
            "label": "Subject",
            "preM": [
              {"t": "A", "p": "Art."}
            ],
            "postM": [
              {"t": "from", "p": "Prep."}, {"t": "Shaffer", "p": "Noun"}, {"t": "University", "p": "Noun"}
            ]
          },
          {
            "type": "V",
            "text": "discussing",
            "pos": "Verb",
            "label": "Verb",
            "preM": [
              {"t": "will", "p": "Verb"}, {"t": "be", "p": "Verb"}
            ],
            "postM": []
          },
          {
            "type": "O",
            "text": "research",
            "pos": "Noun",
            "label": "Object",
            "preM": [
              {"t": "her", "p": "Pron."}, {"t": "latest", "p": "Adj."}
            ],
            "postM": [
              {"t": "on", "p": "Prep."}, {"t": "food", "p": "Noun"}, {"t": "additives.", "p": "Noun"}
            ]
          }
        ]
      },
      {
        "id": "q005",
        "title": "Q005 - Phrase Modification (句による修飾)",
        "sentence": "Ms. Hopkins shared her observations regarding the company’s overseas operations with the other executive committee members.",
        "translation": "Hopkinsさんは、会社の海外業務に関する自らの気づきを他の執行役員たちと共有した。",
        "tips": "前置詞「regarding」以下の句は目的語「observations」を修飾し、「with」以下の句は「shared（誰と共有したか）」を修飾するため述語動詞にぶら下げています。",
        "structure": [
          {
            "type": "S",
            "text": "Ms. Hopkins",
            "pos": "Noun",
            "label": "Subject",
            "preM": [],
            "postM": []
          },
          {
            "type": "V",
            "text": "shared",
            "pos": "Verb",
            "label": "Verb",
            "preM": [],
            "postM": [
              {"t": "with", "p": "Prep."}, {"t": "the", "p": "Art."}, {"t": "other", "p": "Adj."}, {"t": "executive", "p": "Noun"}, {"t": "committee", "p": "Noun"}, {"t": "members.", "p": "Noun"}
            ]
          },
          {
            "type": "O",
            "text": "observations",
            "pos": "Noun",
            "label": "Object",
            "preM": [
              {"t": "her", "p": "Pron."}
            ],
            "postM": [
              {"t": "regarding", "p": "Prep."}, {"t": "the", "p": "Art."}, {"t": "company’s", "p": "Noun"}, {"t": "overseas", "p": "Adj."}, {"t": "operations", "p": "Noun"}
            ]
          }
        ]
      }
    ]`,hi=(e,t)=>{if(!t||!(`speechSynthesis`in window))return;window.speechSynthesis.cancel();let n=new SpeechSynthesisUtterance(e);n.lang=`en-US`,n.rate=.85,window.speechSynthesis.speak(n)},gi=({jsonInput:e,setJsonInput:t,ttsEnabled:n,setTtsEnabled:r,hideModifiersInit:i,setHideModifiersInit:a,onParse:o})=>(0,V.jsxs)(`div`,{className:`max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 items-start pt-8`,children:[(0,V.jsxs)(`div`,{className:`md:col-span-4 flex flex-col gap-6`,children:[(0,V.jsxs)(`div`,{children:[(0,V.jsx)(`h1`,{className:`text-3xl font-bold text-white mb-2`,children:`SYNTAX PARSER`}),(0,V.jsx)(`p`,{className:`text-[#888888] text-sm leading-relaxed`,children:`Visualize English syntax cleanly. Import JSON to practice parsing SVOC cores.`})]}),(0,V.jsxs)(`div`,{className:`bg-[#262421] p-5 rounded border border-[#3c3934]`,children:[(0,V.jsx)(`h2`,{className:`text-xs font-bold text-[#888888] mb-5 uppercase tracking-widest border-b border-[#3c3934] pb-2`,children:`SETTINGS`}),(0,V.jsxs)(`label`,{className:`flex items-center justify-between cursor-pointer group mb-5`,children:[(0,V.jsx)(`span`,{className:`text-[#bababa] group-hover:text-white transition-colors text-sm font-medium`,children:`Text-to-Speech`}),(0,V.jsxs)(`div`,{className:`relative`,children:[(0,V.jsx)(`input`,{type:`checkbox`,className:`sr-only`,checked:n,onChange:e=>r(e.target.checked)}),(0,V.jsx)(`div`,{className:`block w-10 h-5 rounded-full transition-colors ${n?`bg-[#629924]`:`bg-[#161512] border border-[#3c3934]`}`}),(0,V.jsx)(`div`,{className:`absolute left-[3px] top-[3px] bg-white w-3.5 h-3.5 rounded-full transition-transform ${n?`transform translate-x-5`:``}`})]})]}),(0,V.jsxs)(`label`,{className:`flex items-center justify-between cursor-pointer group`,children:[(0,V.jsx)(`span`,{className:`text-[#bababa] group-hover:text-white transition-colors text-sm font-medium`,children:`Hide Modifiers by Default`}),(0,V.jsxs)(`div`,{className:`relative`,children:[(0,V.jsx)(`input`,{type:`checkbox`,className:`sr-only`,checked:i,onChange:e=>a(e.target.checked)}),(0,V.jsx)(`div`,{className:`block w-10 h-5 rounded-full transition-colors ${i?`bg-[#3692e7]`:`bg-[#161512] border border-[#3c3934]`}`}),(0,V.jsx)(`div`,{className:`absolute left-[3px] top-[3px] bg-white w-3.5 h-3.5 rounded-full transition-transform ${i?`transform translate-x-5`:``}`})]})]})]})]}),(0,V.jsxs)(`div`,{className:`md:col-span-8 flex flex-col h-[70vh]`,children:[(0,V.jsxs)(`div`,{className:`flex justify-between items-end mb-3`,children:[(0,V.jsxs)(`div`,{className:`flex items-center gap-4`,children:[(0,V.jsx)(`h2`,{className:`text-xs font-bold text-[#888888] uppercase tracking-widest`,children:`JSON IMPORT`}),(0,V.jsxs)(`label`,{className:`cursor-pointer bg-[#302e2b] hover:bg-[#3c3934] text-[#bababa] px-3 py-1.5 rounded text-xs font-bold uppercase tracking-wide flex items-center gap-2 border border-[#3c3934] transition-colors`,children:[`UPLOAD .JSON`,(0,V.jsx)(`input`,{type:`file`,accept:`.json`,className:`hidden`,onChange:e=>{let n=e.target.files[0];if(!n)return;let r=new FileReader;r.onload=e=>{try{JSON.parse(e.target.result),t(e.target.result)}catch{alert(`The uploaded file does not contain valid JSON.`)}},r.readAsText(n)}})]})]}),(0,V.jsx)(`button`,{onClick:o,className:`bg-[#629924] hover:bg-[#7bc42f] text-white px-8 py-2.5 rounded text-sm font-bold uppercase tracking-widest transition-colors shadow-[0_3px_0_0_#49741a] active:translate-y-[3px] active:shadow-none`,children:`PARSE DATA`})]}),(0,V.jsx)(`textarea`,{className:`w-full flex-grow bg-[#161512] border border-[#3c3934] p-4 text-[#bababa] font-mono text-sm rounded outline-none focus:border-[#3692e7] resize-none`,value:e,onChange:e=>t(e.target.value),spellCheck:`false`})]})]}),_i=({dataList:e,currentIndex:t,setCurrentIndex:n,ttsEnabled:r,hideModifiersInit:i,onBack:a})=>{let[o,s]=(0,_.useState)(i),c=e[t];(0,_.useEffect)(()=>{s(i),r&&c&&hi(c.sentence,r)},[t,c,r,i]);let l=()=>{s(!o)},u=()=>{n(t=>t<e.length-1?t+1:0)},d=()=>{n(t=>t>0?t-1:e.length-1)};if((0,_.useEffect)(()=>{let e=e=>{e.target.tagName!==`INPUT`&&e.target.tagName!==`TEXTAREA`&&(e.key.toLowerCase()===`m`?s(e=>!e):e.key===`ArrowRight`?u():e.key===`ArrowLeft`&&d())};return window.addEventListener(`keydown`,e),()=>window.removeEventListener(`keydown`,e)},[t,e.length]),!c)return null;let f=e=>{switch(e.replace(/[0-9]/g,``)){case`S`:return{text:`text-[#db5353]`,border:`border-[#db5353]`};case`V`:return{text:`text-[#e69138]`,border:`border-[#e69138]`};case`O`:return{text:`text-[#f1c232]`,border:`border-[#f1c232]`};case`C`:return{text:`text-[#8e7cc3]`,border:`border-[#8e7cc3]`};default:return{text:`text-[#888888]`,border:`border-[#504c45]`}}};return(0,V.jsxs)(`div`,{className:`max-w-6xl mx-auto flex flex-col gap-6 pt-4`,children:[(0,V.jsxs)(`div`,{className:`flex justify-between items-center bg-[#262421] p-3 rounded border border-[#3c3934]`,children:[(0,V.jsx)(`button`,{onClick:a,className:`bg-[#302e2b] hover:bg-[#3c3934] text-[#bababa] px-4 py-2 rounded font-bold text-xs uppercase tracking-widest flex items-center gap-2 border border-[#3c3934] transition-colors`,children:`MENU`}),(0,V.jsxs)(`div`,{className:`flex items-center gap-3`,children:[(0,V.jsx)(`button`,{onClick:d,className:`bg-[#302e2b] hover:bg-[#3c3934] text-[#bababa] px-5 py-2 rounded font-bold text-xs uppercase tracking-widest transition-colors border border-[#3c3934]`,children:`PREV`}),(0,V.jsxs)(`div`,{className:`text-[#888888] font-mono text-sm px-2 text-center min-w-[60px]`,children:[t+1,` `,(0,V.jsx)(`span`,{className:`mx-1 text-[#504c45]`,children:`/`}),` `,e.length]}),(0,V.jsx)(`button`,{onClick:u,className:`bg-[#3692e7] hover:bg-[#5fb0fc] text-white px-6 py-2 rounded font-bold text-xs uppercase tracking-widest flex items-center gap-2 transition-colors shadow-[0_3px_0_0_#1b5c97] active:translate-y-[3px] active:shadow-none`,children:`NEXT`})]})]}),(0,V.jsx)(`div`,{className:`bg-[#262421] px-6 py-12 md:px-16 md:py-16 rounded border border-[#3c3934] min-h-[300px] flex flex-col justify-start items-start w-full overflow-x-auto`,children:(0,V.jsx)(`div`,{className:`flex flex-col gap-12 w-full font-medium tracking-wide`,children:c.structure.map((e,t)=>{let n=f(e.type);return(0,V.jsxs)(`div`,{className:`flex flex-col items-start gap-3 w-full`,children:[e.preM.length>0&&(0,V.jsx)(`div`,{className:`flex flex-wrap items-end gap-x-3 gap-y-2 pl-4 md:pl-6 border-l-[3px] transition-colors duration-300 ${o?`border-[#3c3934]`:`border-[#7bc42f] border-opacity-40`}`,children:e.preM.map((e,n)=>(0,V.jsxs)(`ruby`,{className:`ruby-over`,children:[(0,V.jsx)(`span`,{className:`transition-colors duration-300 text-[20px] md:text-[24px] ${o?`text-[#3c3934]`:`text-[#7bc42f]`}`,children:e.t}),(0,V.jsx)(`rt`,{className:`text-[11px] md:text-[13px] font-bold tracking-wider transition-opacity duration-300 ${o?`opacity-0`:`text-[#7bc42f] opacity-80`}`,children:e.p})]},`pre-${t}-${n}`))}),(0,V.jsx)(`div`,{className:`flex flex-wrap items-end my-1`,children:(0,V.jsxs)(`ruby`,{className:`ruby-under`,children:[(0,V.jsx)(`span`,{className:`inline-block font-bold text-[28px] md:text-[36px] leading-normal text-white border-b-[3px] pb-3 mb-1 ${n.border}`,children:e.text}),(0,V.jsxs)(`rt`,{className:`text-[12px] md:text-[14px] font-black tracking-widest ${n.text} pt-1`,children:[e.type,` `,(0,V.jsx)(`span`,{className:`text-[10px] md:text-[12px] text-[#888888] font-normal tracking-normal ml-1.5`,children:e.pos})]})]})}),e.postM.length>0&&(0,V.jsx)(`div`,{className:`flex flex-wrap items-end gap-x-3 gap-y-2 pl-4 md:pl-6 border-l-[3px] transition-colors duration-300 ${o?`border-[#3c3934]`:`border-[#3692e7] border-opacity-40`}`,children:e.postM.map((e,n)=>(0,V.jsxs)(`ruby`,{className:`ruby-over`,children:[(0,V.jsx)(`span`,{className:`transition-colors duration-300 text-[20px] md:text-[24px] ${o?`text-[#3c3934]`:`text-[#3692e7]`}`,children:e.t}),(0,V.jsx)(`rt`,{className:`text-[11px] md:text-[13px] font-bold tracking-wider transition-opacity duration-300 ${o?`opacity-0`:`text-[#3692e7] opacity-80`}`,children:e.p})]},`post-${t}-${n}`))})]},`frag-${t}`)})})}),(0,V.jsx)(`div`,{className:`flex justify-center my-2`,children:(0,V.jsx)(`button`,{onClick:l,className:`px-10 py-3 rounded font-bold uppercase tracking-widest transition-all text-xs border ${o?`bg-[#302e2b] text-white border-[#504c45] hover:bg-[#3c3934]`:`bg-[#161512] text-[#bababa] border-[#3c3934] hover:border-[#629924] hover:text-white`}`,children:o?`SHOW MODIFIERS (M)`:`HIDE MODIFIERS (M)`})}),(0,V.jsxs)(`div`,{className:`grid grid-cols-1 md:grid-cols-2 gap-6 mb-12`,children:[(c.sentence||c.translation)&&(0,V.jsxs)(`div`,{className:`bg-[#262421] p-6 rounded border border-[#3c3934] flex flex-col gap-5`,children:[c.sentence&&(0,V.jsxs)(`div`,{children:[(0,V.jsxs)(`div`,{className:`flex items-center justify-between mb-3`,children:[(0,V.jsx)(`span`,{className:`text-[#888888] text-[10px] font-bold uppercase tracking-widest`,children:`ORIGINAL SENTENCE`}),(0,V.jsx)(`button`,{onClick:()=>hi(c.sentence,!0),className:`bg-[#161512] hover:bg-[#302e2b] text-[#bababa] hover:text-white px-3 py-1 rounded text-[9px] font-bold uppercase tracking-widest transition-colors border border-[#3c3934] hover:border-[#629924]`,children:`LISTEN`})]}),(0,V.jsx)(`p`,{className:`text-white text-base md:text-lg leading-relaxed pl-4 border-l-2 border-[#504c45] italic font-serif`,children:c.sentence})]}),c.translation&&(0,V.jsxs)(`div`,{children:[(0,V.jsx)(`span`,{className:`text-[#888888] text-[10px] font-bold uppercase tracking-widest mb-3 block`,children:`TRANSLATION`}),(0,V.jsx)(`p`,{className:`text-[#bababa] text-sm md:text-base leading-relaxed pl-4 border-l-2 border-[#504c45]`,children:c.translation})]})]}),c.tips&&(0,V.jsxs)(`div`,{className:`bg-[#262421] p-6 rounded border border-[#3c3934]`,children:[(0,V.jsx)(`span`,{className:`text-[#888888] text-[10px] font-bold uppercase tracking-widest mb-3 block`,children:`PARSING TIPS`}),(0,V.jsx)(`p`,{className:`text-[#bababa] text-sm md:text-base leading-relaxed pl-4 border-l-2 border-[#504c45]`,children:c.tips})]})]})]})};function vi(){let[e,t]=(0,_.useState)(`menu`),[n,r]=(0,_.useState)(mi),[i,a]=(0,_.useState)([]),[o,s]=(0,_.useState)(!1),[c,l]=(0,_.useState)(!0),[u,d]=(0,_.useState)(0),f=()=>{try{let e=JSON.parse(n);if(!Array.isArray(e)||e.length===0){alert(`Please provide a valid JSON array.`);return}a(e),d(0),t(`parser`)}catch{alert(`Invalid JSON format.`)}},p=()=>{window.speechSynthesis.cancel(),t(`menu`)};return(0,V.jsxs)(`div`,{className:`min-h-screen font-sans px-4 pb-12`,children:[(0,V.jsx)(`nav`,{className:`flex items-center py-4 px-2 mb-4 border-b border-[#262421]`,children:(0,V.jsxs)(`div`,{className:`text-white font-black text-xl tracking-tighter mr-2 cursor-pointer hover:opacity-80 transition-opacity`,onClick:p,children:[`syntax`,(0,V.jsx)(`span`,{className:`text-[#629924]`,children:`.parser`})]})}),e===`menu`&&(0,V.jsx)(gi,{jsonInput:n,setJsonInput:r,ttsEnabled:o,setTtsEnabled:s,hideModifiersInit:c,setHideModifiersInit:l,onParse:f}),e===`parser`&&(0,V.jsx)(_i,{dataList:i,currentIndex:u,setCurrentIndex:d,ttsEnabled:o,hideModifiersInit:c,onBack:p})]})}function yi(){let e=at();return(0,V.jsxs)(`div`,{className:`w-64 bg-[#262421] h-screen flex flex-col border-r border-[#403d39] shrink-0`,children:[(0,V.jsx)(`div`,{className:`p-6 pb-2`,children:(0,V.jsxs)(`h1`,{className:`text-xl font-bold text-white tracking-widest flex items-center gap-2`,children:[(0,V.jsx)(Bn,{size:20,className:`text-[#3692e7]`}),` ENGLISH HUB`]})}),(0,V.jsx)(`nav`,{className:`flex-1 overflow-y-auto flex flex-col gap-1 px-3 py-4`,style:{scrollbarWidth:`none`,msOverflowStyle:`none`},children:[{path:`/`,label:`English Word App`,icon:Bn},{path:`/grammar-puzzle`,label:`Grammar Puzzle`,icon:or},{path:`/english-card`,label:`English Card`,icon:zn},{path:`/english-quiz`,label:`English Quiz`,icon:Vn},{path:`/grammar`,label:`Grammar Basic`,icon:Rn},{path:`/grammar-high-school`,label:`Grammar (High School)`,icon:Bn},{path:`/grammar-structure`,label:`Grammar Structure`,icon:Zn},{path:`/grammar-term`,label:`Grammar Term`,icon:mr},{path:`/grammar-verb`,label:`Grammar Verb`,icon:fr},{path:`/grammar-train`,label:`Grammar Train`,icon:ir},{path:`/modifiers`,label:`Modifiers`,icon:lr},{path:`/countable-nouns`,label:`Countable Nouns`,icon:Jn},{path:`/no-m-sentence`,label:`No M Sentence`,icon:er},{path:`/no-m-puzzle`,label:`No M Puzzle`,icon:or},{path:`/syntax-as-code`,label:`Syntax as Code`,icon:pr},{path:`/syntax-parser`,label:`Syntax Parser`,icon:nr}].map(t=>{let n=e.pathname===t.path,r=t.icon;return(0,V.jsxs)(vn,{to:t.path,className:`flex items-center gap-3 px-3 py-2.5 rounded-md transition-colors text-sm font-medium ${n?`bg-[#3692e7]/20 text-[#3692e7]`:`text-[#bababa] hover:bg-[#1c1b18] hover:text-white`}`,children:[(0,V.jsx)(r,{size:16,className:`shrink-0`}),(0,V.jsx)(`span`,{className:`truncate`,children:t.label})]},t.path)})})]})}function bi(){return(0,V.jsx)(_n,{children:(0,V.jsxs)(`div`,{className:`flex h-screen bg-[#161512] text-[#bababa] font-sans`,children:[(0,V.jsx)(yi,{}),(0,V.jsx)(`main`,{className:`flex-1 min-w-0 flex flex-col overflow-hidden`,children:(0,V.jsxs)(Mt,{children:[(0,V.jsx)(z,{path:`/`,element:(0,V.jsx)(Tr,{})}),(0,V.jsx)(z,{path:`/grammar-puzzle`,element:(0,V.jsx)(Mr,{})}),(0,V.jsx)(z,{path:`/english-card`,element:(0,V.jsx)(Ur,{})}),(0,V.jsx)(z,{path:`/english-quiz`,element:(0,V.jsx)(Yr,{})}),(0,V.jsx)(z,{path:`/grammar`,element:(0,V.jsx)(Xr,{})}),(0,V.jsx)(z,{path:`/grammar-high-school`,element:(0,V.jsx)(Zr,{})}),(0,V.jsx)(z,{path:`/grammar-structure`,element:(0,V.jsx)(ri,{})}),(0,V.jsx)(z,{path:`/grammar-term`,element:(0,V.jsx)(ii,{})}),(0,V.jsx)(z,{path:`/grammar-verb`,element:(0,V.jsx)(oi,{})}),(0,V.jsx)(z,{path:`/grammar-train`,element:(0,V.jsx)(ai,{})}),(0,V.jsx)(z,{path:`/modifiers`,element:(0,V.jsx)(si,{})}),(0,V.jsx)(z,{path:`/countable-nouns`,element:(0,V.jsx)(Rr,{})}),(0,V.jsx)(z,{path:`/no-m-sentence`,element:(0,V.jsx)(fi,{})}),(0,V.jsx)(z,{path:`/no-m-puzzle`,element:(0,V.jsx)(di,{})}),(0,V.jsx)(z,{path:`/syntax-as-code`,element:(0,V.jsx)(pi,{})}),(0,V.jsx)(z,{path:`/syntax-parser`,element:(0,V.jsx)(vi,{})})]})})]})})}(0,v.createRoot)(document.getElementById(`root`)).render((0,V.jsx)(_.StrictMode,{children:(0,V.jsx)(bi,{})}));