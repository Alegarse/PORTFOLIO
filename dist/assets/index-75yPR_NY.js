(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const f of document.querySelectorAll('link[rel="modulepreload"]'))u(f);new MutationObserver(f=>{for(const m of f)if(m.type==="childList")for(const y of m.addedNodes)y.tagName==="LINK"&&y.rel==="modulepreload"&&u(y)}).observe(document,{childList:!0,subtree:!0});function d(f){const m={};return f.integrity&&(m.integrity=f.integrity),f.referrerPolicy&&(m.referrerPolicy=f.referrerPolicy),f.crossOrigin==="use-credentials"?m.credentials="include":f.crossOrigin==="anonymous"?m.credentials="omit":m.credentials="same-origin",m}function u(f){if(f.ep)return;f.ep=!0;const m=d(f);fetch(f.href,m)}})();var Lu={exports:{}},Ll={};var um;function _g(){if(um)return Ll;um=1;var i=Symbol.for("react.transitional.element"),s=Symbol.for("react.fragment");function d(u,f,m){var y=null;if(m!==void 0&&(y=""+m),f.key!==void 0&&(y=""+f.key),"key"in f){m={};for(var N in f)N!=="key"&&(m[N]=f[N])}else m=f;return f=m.ref,{$$typeof:i,type:u,key:y,ref:f!==void 0?f:null,props:m}}return Ll.Fragment=s,Ll.jsx=d,Ll.jsxs=d,Ll}var sm;function wg(){return sm||(sm=1,Lu.exports=_g()),Lu.exports}var p=wg(),Hu={exports:{}},P={};var cm;function zg(){if(cm)return P;cm=1;var i=Symbol.for("react.transitional.element"),s=Symbol.for("react.portal"),d=Symbol.for("react.fragment"),u=Symbol.for("react.strict_mode"),f=Symbol.for("react.profiler"),m=Symbol.for("react.consumer"),y=Symbol.for("react.context"),N=Symbol.for("react.forward_ref"),b=Symbol.for("react.suspense"),g=Symbol.for("react.memo"),j=Symbol.for("react.lazy"),T=Symbol.for("react.activity"),U=Symbol.iterator;function q(E){return E===null||typeof E!="object"?null:(E=U&&E[U]||E["@@iterator"],typeof E=="function"?E:null)}var Q={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Y=Object.assign,L={};function G(E,D,V){this.props=E,this.context=D,this.refs=L,this.updater=V||Q}G.prototype.isReactComponent={},G.prototype.setState=function(E,D){if(typeof E!="object"&&typeof E!="function"&&E!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,E,D,"setState")},G.prototype.forceUpdate=function(E){this.updater.enqueueForceUpdate(this,E,"forceUpdate")};function H(){}H.prototype=G.prototype;function Z(E,D,V){this.props=E,this.context=D,this.refs=L,this.updater=V||Q}var de=Z.prototype=new H;de.constructor=Z,Y(de,G.prototype),de.isPureReactComponent=!0;var ne=Array.isArray;function pe(){}var F={H:null,A:null,T:null,S:null},je=Object.prototype.hasOwnProperty;function le(E,D,V){var X=V.ref;return{$$typeof:i,type:E,key:D,ref:X!==void 0?X:null,props:V}}function Ye(E,D){return le(E.type,D,E.props)}function Qe(E){return typeof E=="object"&&E!==null&&E.$$typeof===i}function $(E){var D={"=":"=0",":":"=2"};return"$"+E.replace(/[=:]/g,function(V){return D[V]})}var ut=/\/+/g;function Qt(E,D){return typeof E=="object"&&E!==null&&E.key!=null?$(""+E.key):D.toString(36)}function wt(E){switch(E.status){case"fulfilled":return E.value;case"rejected":throw E.reason;default:switch(typeof E.status=="string"?E.then(pe,pe):(E.status="pending",E.then(function(D){E.status==="pending"&&(E.status="fulfilled",E.value=D)},function(D){E.status==="pending"&&(E.status="rejected",E.reason=D)})),E.status){case"fulfilled":return E.value;case"rejected":throw E.reason}}throw E}function _(E,D,V,X,ee){var oe=typeof E;(oe==="undefined"||oe==="boolean")&&(E=null);var ge=!1;if(E===null)ge=!0;else switch(oe){case"bigint":case"string":case"number":ge=!0;break;case"object":switch(E.$$typeof){case i:case s:ge=!0;break;case j:return ge=E._init,_(ge(E._payload),D,V,X,ee)}}if(ge)return ee=ee(E),ge=X===""?"."+Qt(E,0):X,ne(ee)?(V="",ge!=null&&(V=ge.replace(ut,"$&/")+"/"),_(ee,D,V,"",function(kn){return kn})):ee!=null&&(Qe(ee)&&(ee=Ye(ee,V+(ee.key==null||E&&E.key===ee.key?"":(""+ee.key).replace(ut,"$&/")+"/")+ge)),D.push(ee)),1;ge=0;var We=X===""?".":X+":";if(ne(E))for(var we=0;we<E.length;we++)X=E[we],oe=We+Qt(X,we),ge+=_(X,D,V,oe,ee);else if(we=q(E),typeof we=="function")for(E=we.call(E),we=0;!(X=E.next()).done;)X=X.value,oe=We+Qt(X,we++),ge+=_(X,D,V,oe,ee);else if(oe==="object"){if(typeof E.then=="function")return _(wt(E),D,V,X,ee);throw D=String(E),Error("Objects are not valid as a React child (found: "+(D==="[object Object]"?"object with keys {"+Object.keys(E).join(", ")+"}":D)+"). If you meant to render a collection of children, use an array instead.")}return ge}function B(E,D,V){if(E==null)return E;var X=[],ee=0;return _(E,X,"","",function(oe){return D.call(V,oe,ee++)}),X}function W(E){if(E._status===-1){var D=E._result;D=D(),D.then(function(V){(E._status===0||E._status===-1)&&(E._status=1,E._result=V)},function(V){(E._status===0||E._status===-1)&&(E._status=2,E._result=V)}),E._status===-1&&(E._status=0,E._result=D)}if(E._status===1)return E._result.default;throw E._result}var be=typeof reportError=="function"?reportError:function(E){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var D=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof E=="object"&&E!==null&&typeof E.message=="string"?String(E.message):String(E),error:E});if(!window.dispatchEvent(D))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",E);return}console.error(E)},xe={map:B,forEach:function(E,D,V){B(E,function(){D.apply(this,arguments)},V)},count:function(E){var D=0;return B(E,function(){D++}),D},toArray:function(E){return B(E,function(D){return D})||[]},only:function(E){if(!Qe(E))throw Error("React.Children.only expected to receive a single React element child.");return E}};return P.Activity=T,P.Children=xe,P.Component=G,P.Fragment=d,P.Profiler=f,P.PureComponent=Z,P.StrictMode=u,P.Suspense=b,P.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=F,P.__COMPILER_RUNTIME={__proto__:null,c:function(E){return F.H.useMemoCache(E)}},P.cache=function(E){return function(){return E.apply(null,arguments)}},P.cacheSignal=function(){return null},P.cloneElement=function(E,D,V){if(E==null)throw Error("The argument must be a React element, but you passed "+E+".");var X=Y({},E.props),ee=E.key;if(D!=null)for(oe in D.key!==void 0&&(ee=""+D.key),D)!je.call(D,oe)||oe==="key"||oe==="__self"||oe==="__source"||oe==="ref"&&D.ref===void 0||(X[oe]=D[oe]);var oe=arguments.length-2;if(oe===1)X.children=V;else if(1<oe){for(var ge=Array(oe),We=0;We<oe;We++)ge[We]=arguments[We+2];X.children=ge}return le(E.type,ee,X)},P.createContext=function(E){return E={$$typeof:y,_currentValue:E,_currentValue2:E,_threadCount:0,Provider:null,Consumer:null},E.Provider=E,E.Consumer={$$typeof:m,_context:E},E},P.createElement=function(E,D,V){var X,ee={},oe=null;if(D!=null)for(X in D.key!==void 0&&(oe=""+D.key),D)je.call(D,X)&&X!=="key"&&X!=="__self"&&X!=="__source"&&(ee[X]=D[X]);var ge=arguments.length-2;if(ge===1)ee.children=V;else if(1<ge){for(var We=Array(ge),we=0;we<ge;we++)We[we]=arguments[we+2];ee.children=We}if(E&&E.defaultProps)for(X in ge=E.defaultProps,ge)ee[X]===void 0&&(ee[X]=ge[X]);return le(E,oe,ee)},P.createRef=function(){return{current:null}},P.forwardRef=function(E){return{$$typeof:N,render:E}},P.isValidElement=Qe,P.lazy=function(E){return{$$typeof:j,_payload:{_status:-1,_result:E},_init:W}},P.memo=function(E,D){return{$$typeof:g,type:E,compare:D===void 0?null:D}},P.startTransition=function(E){var D=F.T,V={};F.T=V;try{var X=E(),ee=F.S;ee!==null&&ee(V,X),typeof X=="object"&&X!==null&&typeof X.then=="function"&&X.then(pe,be)}catch(oe){be(oe)}finally{D!==null&&V.types!==null&&(D.types=V.types),F.T=D}},P.unstable_useCacheRefresh=function(){return F.H.useCacheRefresh()},P.use=function(E){return F.H.use(E)},P.useActionState=function(E,D,V){return F.H.useActionState(E,D,V)},P.useCallback=function(E,D){return F.H.useCallback(E,D)},P.useContext=function(E){return F.H.useContext(E)},P.useDebugValue=function(){},P.useDeferredValue=function(E,D){return F.H.useDeferredValue(E,D)},P.useEffect=function(E,D){return F.H.useEffect(E,D)},P.useEffectEvent=function(E){return F.H.useEffectEvent(E)},P.useId=function(){return F.H.useId()},P.useImperativeHandle=function(E,D,V){return F.H.useImperativeHandle(E,D,V)},P.useInsertionEffect=function(E,D){return F.H.useInsertionEffect(E,D)},P.useLayoutEffect=function(E,D){return F.H.useLayoutEffect(E,D)},P.useMemo=function(E,D){return F.H.useMemo(E,D)},P.useOptimistic=function(E,D){return F.H.useOptimistic(E,D)},P.useReducer=function(E,D,V){return F.H.useReducer(E,D,V)},P.useRef=function(E){return F.H.useRef(E)},P.useState=function(E){return F.H.useState(E)},P.useSyncExternalStore=function(E,D,V){return F.H.useSyncExternalStore(E,D,V)},P.useTransition=function(){return F.H.useTransition()},P.version="19.2.3",P}var dm;function hi(){return dm||(dm=1,Hu.exports=zg()),Hu.exports}var A=hi(),Bu={exports:{}},Hl={},Vu={exports:{}},Gu={};var fm;function Dg(){return fm||(fm=1,(function(i){function s(_,B){var W=_.length;_.push(B);e:for(;0<W;){var be=W-1>>>1,xe=_[be];if(0<f(xe,B))_[be]=B,_[W]=xe,W=be;else break e}}function d(_){return _.length===0?null:_[0]}function u(_){if(_.length===0)return null;var B=_[0],W=_.pop();if(W!==B){_[0]=W;e:for(var be=0,xe=_.length,E=xe>>>1;be<E;){var D=2*(be+1)-1,V=_[D],X=D+1,ee=_[X];if(0>f(V,W))X<xe&&0>f(ee,V)?(_[be]=ee,_[X]=W,be=X):(_[be]=V,_[D]=W,be=D);else if(X<xe&&0>f(ee,W))_[be]=ee,_[X]=W,be=X;else break e}}return B}function f(_,B){var W=_.sortIndex-B.sortIndex;return W!==0?W:_.id-B.id}if(i.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var m=performance;i.unstable_now=function(){return m.now()}}else{var y=Date,N=y.now();i.unstable_now=function(){return y.now()-N}}var b=[],g=[],j=1,T=null,U=3,q=!1,Q=!1,Y=!1,L=!1,G=typeof setTimeout=="function"?setTimeout:null,H=typeof clearTimeout=="function"?clearTimeout:null,Z=typeof setImmediate<"u"?setImmediate:null;function de(_){for(var B=d(g);B!==null;){if(B.callback===null)u(g);else if(B.startTime<=_)u(g),B.sortIndex=B.expirationTime,s(b,B);else break;B=d(g)}}function ne(_){if(Y=!1,de(_),!Q)if(d(b)!==null)Q=!0,pe||(pe=!0,$());else{var B=d(g);B!==null&&wt(ne,B.startTime-_)}}var pe=!1,F=-1,je=5,le=-1;function Ye(){return L?!0:!(i.unstable_now()-le<je)}function Qe(){if(L=!1,pe){var _=i.unstable_now();le=_;var B=!0;try{e:{Q=!1,Y&&(Y=!1,H(F),F=-1),q=!0;var W=U;try{t:{for(de(_),T=d(b);T!==null&&!(T.expirationTime>_&&Ye());){var be=T.callback;if(typeof be=="function"){T.callback=null,U=T.priorityLevel;var xe=be(T.expirationTime<=_);if(_=i.unstable_now(),typeof xe=="function"){T.callback=xe,de(_),B=!0;break t}T===d(b)&&u(b),de(_)}else u(b);T=d(b)}if(T!==null)B=!0;else{var E=d(g);E!==null&&wt(ne,E.startTime-_),B=!1}}break e}finally{T=null,U=W,q=!1}B=void 0}}finally{B?$():pe=!1}}}var $;if(typeof Z=="function")$=function(){Z(Qe)};else if(typeof MessageChannel<"u"){var ut=new MessageChannel,Qt=ut.port2;ut.port1.onmessage=Qe,$=function(){Qt.postMessage(null)}}else $=function(){G(Qe,0)};function wt(_,B){F=G(function(){_(i.unstable_now())},B)}i.unstable_IdlePriority=5,i.unstable_ImmediatePriority=1,i.unstable_LowPriority=4,i.unstable_NormalPriority=3,i.unstable_Profiling=null,i.unstable_UserBlockingPriority=2,i.unstable_cancelCallback=function(_){_.callback=null},i.unstable_forceFrameRate=function(_){0>_||125<_?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):je=0<_?Math.floor(1e3/_):5},i.unstable_getCurrentPriorityLevel=function(){return U},i.unstable_next=function(_){switch(U){case 1:case 2:case 3:var B=3;break;default:B=U}var W=U;U=B;try{return _()}finally{U=W}},i.unstable_requestPaint=function(){L=!0},i.unstable_runWithPriority=function(_,B){switch(_){case 1:case 2:case 3:case 4:case 5:break;default:_=3}var W=U;U=_;try{return B()}finally{U=W}},i.unstable_scheduleCallback=function(_,B,W){var be=i.unstable_now();switch(typeof W=="object"&&W!==null?(W=W.delay,W=typeof W=="number"&&0<W?be+W:be):W=be,_){case 1:var xe=-1;break;case 2:xe=250;break;case 5:xe=1073741823;break;case 4:xe=1e4;break;default:xe=5e3}return xe=W+xe,_={id:j++,callback:B,priorityLevel:_,startTime:W,expirationTime:xe,sortIndex:-1},W>be?(_.sortIndex=W,s(g,_),d(b)===null&&_===d(g)&&(Y?(H(F),F=-1):Y=!0,wt(ne,W-be))):(_.sortIndex=xe,s(b,_),Q||q||(Q=!0,pe||(pe=!0,$()))),_},i.unstable_shouldYield=Ye,i.unstable_wrapCallback=function(_){var B=U;return function(){var W=U;U=B;try{return _.apply(this,arguments)}finally{U=W}}}})(Gu)),Gu}var mm;function Ug(){return mm||(mm=1,Vu.exports=Dg()),Vu.exports}var Yu={exports:{}},Ie={};var pm;function qg(){if(pm)return Ie;pm=1;var i=hi();function s(b){var g="https://react.dev/errors/"+b;if(1<arguments.length){g+="?args[]="+encodeURIComponent(arguments[1]);for(var j=2;j<arguments.length;j++)g+="&args[]="+encodeURIComponent(arguments[j])}return"Minified React error #"+b+"; visit "+g+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function d(){}var u={d:{f:d,r:function(){throw Error(s(522))},D:d,C:d,L:d,m:d,X:d,S:d,M:d},p:0,findDOMNode:null},f=Symbol.for("react.portal");function m(b,g,j){var T=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:f,key:T==null?null:""+T,children:b,containerInfo:g,implementation:j}}var y=i.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function N(b,g){if(b==="font")return"";if(typeof g=="string")return g==="use-credentials"?g:""}return Ie.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=u,Ie.createPortal=function(b,g){var j=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!g||g.nodeType!==1&&g.nodeType!==9&&g.nodeType!==11)throw Error(s(299));return m(b,g,null,j)},Ie.flushSync=function(b){var g=y.T,j=u.p;try{if(y.T=null,u.p=2,b)return b()}finally{y.T=g,u.p=j,u.d.f()}},Ie.preconnect=function(b,g){typeof b=="string"&&(g?(g=g.crossOrigin,g=typeof g=="string"?g==="use-credentials"?g:"":void 0):g=null,u.d.C(b,g))},Ie.prefetchDNS=function(b){typeof b=="string"&&u.d.D(b)},Ie.preinit=function(b,g){if(typeof b=="string"&&g&&typeof g.as=="string"){var j=g.as,T=N(j,g.crossOrigin),U=typeof g.integrity=="string"?g.integrity:void 0,q=typeof g.fetchPriority=="string"?g.fetchPriority:void 0;j==="style"?u.d.S(b,typeof g.precedence=="string"?g.precedence:void 0,{crossOrigin:T,integrity:U,fetchPriority:q}):j==="script"&&u.d.X(b,{crossOrigin:T,integrity:U,fetchPriority:q,nonce:typeof g.nonce=="string"?g.nonce:void 0})}},Ie.preinitModule=function(b,g){if(typeof b=="string")if(typeof g=="object"&&g!==null){if(g.as==null||g.as==="script"){var j=N(g.as,g.crossOrigin);u.d.M(b,{crossOrigin:j,integrity:typeof g.integrity=="string"?g.integrity:void 0,nonce:typeof g.nonce=="string"?g.nonce:void 0})}}else g==null&&u.d.M(b)},Ie.preload=function(b,g){if(typeof b=="string"&&typeof g=="object"&&g!==null&&typeof g.as=="string"){var j=g.as,T=N(j,g.crossOrigin);u.d.L(b,j,{crossOrigin:T,integrity:typeof g.integrity=="string"?g.integrity:void 0,nonce:typeof g.nonce=="string"?g.nonce:void 0,type:typeof g.type=="string"?g.type:void 0,fetchPriority:typeof g.fetchPriority=="string"?g.fetchPriority:void 0,referrerPolicy:typeof g.referrerPolicy=="string"?g.referrerPolicy:void 0,imageSrcSet:typeof g.imageSrcSet=="string"?g.imageSrcSet:void 0,imageSizes:typeof g.imageSizes=="string"?g.imageSizes:void 0,media:typeof g.media=="string"?g.media:void 0})}},Ie.preloadModule=function(b,g){if(typeof b=="string")if(g){var j=N(g.as,g.crossOrigin);u.d.m(b,{as:typeof g.as=="string"&&g.as!=="script"?g.as:void 0,crossOrigin:j,integrity:typeof g.integrity=="string"?g.integrity:void 0})}else u.d.m(b)},Ie.requestFormReset=function(b){u.d.r(b)},Ie.unstable_batchedUpdates=function(b,g){return b(g)},Ie.useFormState=function(b,g,j){return y.H.useFormState(b,g,j)},Ie.useFormStatus=function(){return y.H.useHostTransitionStatus()},Ie.version="19.2.3",Ie}var hm;function Lg(){if(hm)return Yu.exports;hm=1;function i(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i)}catch(s){console.error(s)}}return i(),Yu.exports=qg(),Yu.exports}var gm;function Hg(){if(gm)return Hl;gm=1;var i=Ug(),s=hi(),d=Lg();function u(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)t+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function f(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function m(e){var t=e,a=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(a=t.return),e=t.return;while(e)}return t.tag===3?a:null}function y(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function N(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function b(e){if(m(e)!==e)throw Error(u(188))}function g(e){var t=e.alternate;if(!t){if(t=m(e),t===null)throw Error(u(188));return t!==e?null:e}for(var a=e,n=t;;){var l=a.return;if(l===null)break;var o=l.alternate;if(o===null){if(n=l.return,n!==null){a=n;continue}break}if(l.child===o.child){for(o=l.child;o;){if(o===a)return b(l),e;if(o===n)return b(l),t;o=o.sibling}throw Error(u(188))}if(a.return!==n.return)a=l,n=o;else{for(var r=!1,c=l.child;c;){if(c===a){r=!0,a=l,n=o;break}if(c===n){r=!0,n=l,a=o;break}c=c.sibling}if(!r){for(c=o.child;c;){if(c===a){r=!0,a=o,n=l;break}if(c===n){r=!0,n=o,a=l;break}c=c.sibling}if(!r)throw Error(u(189))}}if(a.alternate!==n)throw Error(u(190))}if(a.tag!==3)throw Error(u(188));return a.stateNode.current===a?e:t}function j(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=j(e),t!==null)return t;e=e.sibling}return null}var T=Object.assign,U=Symbol.for("react.element"),q=Symbol.for("react.transitional.element"),Q=Symbol.for("react.portal"),Y=Symbol.for("react.fragment"),L=Symbol.for("react.strict_mode"),G=Symbol.for("react.profiler"),H=Symbol.for("react.consumer"),Z=Symbol.for("react.context"),de=Symbol.for("react.forward_ref"),ne=Symbol.for("react.suspense"),pe=Symbol.for("react.suspense_list"),F=Symbol.for("react.memo"),je=Symbol.for("react.lazy"),le=Symbol.for("react.activity"),Ye=Symbol.for("react.memo_cache_sentinel"),Qe=Symbol.iterator;function $(e){return e===null||typeof e!="object"?null:(e=Qe&&e[Qe]||e["@@iterator"],typeof e=="function"?e:null)}var ut=Symbol.for("react.client.reference");function Qt(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===ut?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Y:return"Fragment";case G:return"Profiler";case L:return"StrictMode";case ne:return"Suspense";case pe:return"SuspenseList";case le:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case Q:return"Portal";case Z:return e.displayName||"Context";case H:return(e._context.displayName||"Context")+".Consumer";case de:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case F:return t=e.displayName||null,t!==null?t:Qt(e.type)||"Memo";case je:t=e._payload,e=e._init;try{return Qt(e(t))}catch{}}return null}var wt=Array.isArray,_=s.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,B=d.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,W={pending:!1,data:null,method:null,action:null},be=[],xe=-1;function E(e){return{current:e}}function D(e){0>xe||(e.current=be[xe],be[xe]=null,xe--)}function V(e,t){xe++,be[xe]=e.current,e.current=t}var X=E(null),ee=E(null),oe=E(null),ge=E(null);function We(e,t){switch(V(oe,t),V(ee,e),V(X,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?_f(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=_f(t),e=wf(t,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}D(X),V(X,e)}function we(){D(X),D(ee),D(oe)}function kn(e){e.memoizedState!==null&&V(ge,e);var t=X.current,a=wf(t,e.type);t!==a&&(V(ee,e),V(X,a))}function Xl(e){ee.current===e&&(D(X),D(ee)),ge.current===e&&(D(ge),zl._currentValue=W)}var bi,is;function qa(e){if(bi===void 0)try{throw Error()}catch(a){var t=a.stack.trim().match(/\n( *(at )?)/);bi=t&&t[1]||"",is=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+bi+e+is}var Ei=!1;function Si(e,t){if(!e||Ei)return"";Ei=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var n={DetermineComponentFrameRoot:function(){try{if(t){var z=function(){throw Error()};if(Object.defineProperty(z.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(z,[])}catch(O){var R=O}Reflect.construct(e,[],z)}else{try{z.call()}catch(O){R=O}e.call(z.prototype)}}else{try{throw Error()}catch(O){R=O}(z=e())&&typeof z.catch=="function"&&z.catch(function(){})}}catch(O){if(O&&R&&typeof O.stack=="string")return[O.stack,R.stack]}return[null,null]}};n.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var l=Object.getOwnPropertyDescriptor(n.DetermineComponentFrameRoot,"name");l&&l.configurable&&Object.defineProperty(n.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var o=n.DetermineComponentFrameRoot(),r=o[0],c=o[1];if(r&&c){var h=r.split(`
`),C=c.split(`
`);for(l=n=0;n<h.length&&!h[n].includes("DetermineComponentFrameRoot");)n++;for(;l<C.length&&!C[l].includes("DetermineComponentFrameRoot");)l++;if(n===h.length||l===C.length)for(n=h.length-1,l=C.length-1;1<=n&&0<=l&&h[n]!==C[l];)l--;for(;1<=n&&0<=l;n--,l--)if(h[n]!==C[l]){if(n!==1||l!==1)do if(n--,l--,0>l||h[n]!==C[l]){var M=`
`+h[n].replace(" at new "," at ");return e.displayName&&M.includes("<anonymous>")&&(M=M.replace("<anonymous>",e.displayName)),M}while(1<=n&&0<=l);break}}}finally{Ei=!1,Error.prepareStackTrace=a}return(a=e?e.displayName||e.name:"")?qa(a):""}function up(e,t){switch(e.tag){case 26:case 27:case 5:return qa(e.type);case 16:return qa("Lazy");case 13:return e.child!==t&&t!==null?qa("Suspense Fallback"):qa("Suspense");case 19:return qa("SuspenseList");case 0:case 15:return Si(e.type,!1);case 11:return Si(e.type.render,!1);case 1:return Si(e.type,!0);case 31:return qa("Activity");default:return""}}function rs(e){try{var t="",a=null;do t+=up(e,a),a=e,e=e.return;while(e);return t}catch(n){return`
Error generating stack: `+n.message+`
`+n.stack}}var Ti=Object.prototype.hasOwnProperty,xi=i.unstable_scheduleCallback,Ci=i.unstable_cancelCallback,sp=i.unstable_shouldYield,cp=i.unstable_requestPaint,st=i.unstable_now,dp=i.unstable_getCurrentPriorityLevel,us=i.unstable_ImmediatePriority,ss=i.unstable_UserBlockingPriority,Jl=i.unstable_NormalPriority,fp=i.unstable_LowPriority,cs=i.unstable_IdlePriority,mp=i.log,pp=i.unstable_setDisableYieldValue,Xn=null,ct=null;function ca(e){if(typeof mp=="function"&&pp(e),ct&&typeof ct.setStrictMode=="function")try{ct.setStrictMode(Xn,e)}catch{}}var dt=Math.clz32?Math.clz32:yp,hp=Math.log,gp=Math.LN2;function yp(e){return e>>>=0,e===0?32:31-(hp(e)/gp|0)|0}var Zl=256,Kl=262144,$l=4194304;function La(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function Il(e,t,a){var n=e.pendingLanes;if(n===0)return 0;var l=0,o=e.suspendedLanes,r=e.pingedLanes;e=e.warmLanes;var c=n&134217727;return c!==0?(n=c&~o,n!==0?l=La(n):(r&=c,r!==0?l=La(r):a||(a=c&~e,a!==0&&(l=La(a))))):(c=n&~o,c!==0?l=La(c):r!==0?l=La(r):a||(a=n&~e,a!==0&&(l=La(a)))),l===0?0:t!==0&&t!==l&&(t&o)===0&&(o=l&-l,a=t&-t,o>=a||o===32&&(a&4194048)!==0)?t:l}function Jn(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function vp(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function ds(){var e=$l;return $l<<=1,($l&62914560)===0&&($l=4194304),e}function Ai(e){for(var t=[],a=0;31>a;a++)t.push(e);return t}function Zn(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function bp(e,t,a,n,l,o){var r=e.pendingLanes;e.pendingLanes=a,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=a,e.entangledLanes&=a,e.errorRecoveryDisabledLanes&=a,e.shellSuspendCounter=0;var c=e.entanglements,h=e.expirationTimes,C=e.hiddenUpdates;for(a=r&~a;0<a;){var M=31-dt(a),z=1<<M;c[M]=0,h[M]=-1;var R=C[M];if(R!==null)for(C[M]=null,M=0;M<R.length;M++){var O=R[M];O!==null&&(O.lane&=-536870913)}a&=~z}n!==0&&fs(e,n,0),o!==0&&l===0&&e.tag!==0&&(e.suspendedLanes|=o&~(r&~t))}function fs(e,t,a){e.pendingLanes|=t,e.suspendedLanes&=~t;var n=31-dt(t);e.entangledLanes|=t,e.entanglements[n]=e.entanglements[n]|1073741824|a&261930}function ms(e,t){var a=e.entangledLanes|=t;for(e=e.entanglements;a;){var n=31-dt(a),l=1<<n;l&t|e[n]&t&&(e[n]|=t),a&=~l}}function ps(e,t){var a=t&-t;return a=(a&42)!==0?1:Ri(a),(a&(e.suspendedLanes|t))!==0?0:a}function Ri(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function Ni(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function hs(){var e=B.p;return e!==0?e:(e=window.event,e===void 0?32:tm(e.type))}function gs(e,t){var a=B.p;try{return B.p=e,t()}finally{B.p=a}}var da=Math.random().toString(36).slice(2),ke="__reactFiber$"+da,et="__reactProps$"+da,an="__reactContainer$"+da,ji="__reactEvents$"+da,Ep="__reactListeners$"+da,Sp="__reactHandles$"+da,ys="__reactResources$"+da,Kn="__reactMarker$"+da;function Oi(e){delete e[ke],delete e[et],delete e[ji],delete e[Ep],delete e[Sp]}function nn(e){var t=e[ke];if(t)return t;for(var a=e.parentNode;a;){if(t=a[an]||a[ke]){if(a=t.alternate,t.child!==null||a!==null&&a.child!==null)for(e=Bf(e);e!==null;){if(a=e[ke])return a;e=Bf(e)}return t}e=a,a=e.parentNode}return null}function ln(e){if(e=e[ke]||e[an]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function $n(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(u(33))}function on(e){var t=e[ys];return t||(t=e[ys]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function Ve(e){e[Kn]=!0}var vs=new Set,bs={};function Ha(e,t){rn(e,t),rn(e+"Capture",t)}function rn(e,t){for(bs[e]=t,e=0;e<t.length;e++)vs.add(t[e])}var Tp=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Es={},Ss={};function xp(e){return Ti.call(Ss,e)?!0:Ti.call(Es,e)?!1:Tp.test(e)?Ss[e]=!0:(Es[e]=!0,!1)}function Fl(e,t,a){if(xp(t))if(a===null)e.removeAttribute(t);else{switch(typeof a){case"undefined":case"function":case"symbol":e.removeAttribute(t);return;case"boolean":var n=t.toLowerCase().slice(0,5);if(n!=="data-"&&n!=="aria-"){e.removeAttribute(t);return}}e.setAttribute(t,""+a)}}function Wl(e,t,a){if(a===null)e.removeAttribute(t);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttribute(t,""+a)}}function kt(e,t,a,n){if(n===null)e.removeAttribute(a);else{switch(typeof n){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttributeNS(t,a,""+n)}}function Et(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Ts(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Cp(e,t,a){var n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var l=n.get,o=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return l.call(this)},set:function(r){a=""+r,o.call(this,r)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return a},setValue:function(r){a=""+r},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Mi(e){if(!e._valueTracker){var t=Ts(e)?"checked":"value";e._valueTracker=Cp(e,t,""+e[t])}}function xs(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var a=t.getValue(),n="";return e&&(n=Ts(e)?e.checked?"true":"false":e.value),e=n,e!==a?(t.setValue(e),!0):!1}function Pl(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var Ap=/[\n"\\]/g;function St(e){return e.replace(Ap,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function _i(e,t,a,n,l,o,r,c){e.name="",r!=null&&typeof r!="function"&&typeof r!="symbol"&&typeof r!="boolean"?e.type=r:e.removeAttribute("type"),t!=null?r==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+Et(t)):e.value!==""+Et(t)&&(e.value=""+Et(t)):r!=="submit"&&r!=="reset"||e.removeAttribute("value"),t!=null?wi(e,r,Et(t)):a!=null?wi(e,r,Et(a)):n!=null&&e.removeAttribute("value"),l==null&&o!=null&&(e.defaultChecked=!!o),l!=null&&(e.checked=l&&typeof l!="function"&&typeof l!="symbol"),c!=null&&typeof c!="function"&&typeof c!="symbol"&&typeof c!="boolean"?e.name=""+Et(c):e.removeAttribute("name")}function Cs(e,t,a,n,l,o,r,c){if(o!=null&&typeof o!="function"&&typeof o!="symbol"&&typeof o!="boolean"&&(e.type=o),t!=null||a!=null){if(!(o!=="submit"&&o!=="reset"||t!=null)){Mi(e);return}a=a!=null?""+Et(a):"",t=t!=null?""+Et(t):a,c||t===e.value||(e.value=t),e.defaultValue=t}n=n??l,n=typeof n!="function"&&typeof n!="symbol"&&!!n,e.checked=c?e.checked:!!n,e.defaultChecked=!!n,r!=null&&typeof r!="function"&&typeof r!="symbol"&&typeof r!="boolean"&&(e.name=r),Mi(e)}function wi(e,t,a){t==="number"&&Pl(e.ownerDocument)===e||e.defaultValue===""+a||(e.defaultValue=""+a)}function un(e,t,a,n){if(e=e.options,t){t={};for(var l=0;l<a.length;l++)t["$"+a[l]]=!0;for(a=0;a<e.length;a++)l=t.hasOwnProperty("$"+e[a].value),e[a].selected!==l&&(e[a].selected=l),l&&n&&(e[a].defaultSelected=!0)}else{for(a=""+Et(a),t=null,l=0;l<e.length;l++){if(e[l].value===a){e[l].selected=!0,n&&(e[l].defaultSelected=!0);return}t!==null||e[l].disabled||(t=e[l])}t!==null&&(t.selected=!0)}}function As(e,t,a){if(t!=null&&(t=""+Et(t),t!==e.value&&(e.value=t),a==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=a!=null?""+Et(a):""}function Rs(e,t,a,n){if(t==null){if(n!=null){if(a!=null)throw Error(u(92));if(wt(n)){if(1<n.length)throw Error(u(93));n=n[0]}a=n}a==null&&(a=""),t=a}a=Et(t),e.defaultValue=a,n=e.textContent,n===a&&n!==""&&n!==null&&(e.value=n),Mi(e)}function sn(e,t){if(t){var a=e.firstChild;if(a&&a===e.lastChild&&a.nodeType===3){a.nodeValue=t;return}}e.textContent=t}var Rp=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Ns(e,t,a){var n=t.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?n?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="":n?e.setProperty(t,a):typeof a!="number"||a===0||Rp.has(t)?t==="float"?e.cssFloat=a:e[t]=(""+a).trim():e[t]=a+"px"}function js(e,t,a){if(t!=null&&typeof t!="object")throw Error(u(62));if(e=e.style,a!=null){for(var n in a)!a.hasOwnProperty(n)||t!=null&&t.hasOwnProperty(n)||(n.indexOf("--")===0?e.setProperty(n,""):n==="float"?e.cssFloat="":e[n]="");for(var l in t)n=t[l],t.hasOwnProperty(l)&&a[l]!==n&&Ns(e,l,n)}else for(var o in t)t.hasOwnProperty(o)&&Ns(e,o,t[o])}function zi(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Np=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),jp=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function eo(e){return jp.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function Xt(){}var Di=null;function Ui(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var cn=null,dn=null;function Os(e){var t=ln(e);if(t&&(e=t.stateNode)){var a=e[et]||null;e:switch(e=t.stateNode,t.type){case"input":if(_i(e,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),t=a.name,a.type==="radio"&&t!=null){for(a=e;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+St(""+t)+'"][type="radio"]'),t=0;t<a.length;t++){var n=a[t];if(n!==e&&n.form===e.form){var l=n[et]||null;if(!l)throw Error(u(90));_i(n,l.value,l.defaultValue,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name)}}for(t=0;t<a.length;t++)n=a[t],n.form===e.form&&xs(n)}break e;case"textarea":As(e,a.value,a.defaultValue);break e;case"select":t=a.value,t!=null&&un(e,!!a.multiple,t,!1)}}}var qi=!1;function Ms(e,t,a){if(qi)return e(t,a);qi=!0;try{var n=e(t);return n}finally{if(qi=!1,(cn!==null||dn!==null)&&(Yo(),cn&&(t=cn,e=dn,dn=cn=null,Os(t),e)))for(t=0;t<e.length;t++)Os(e[t])}}function In(e,t){var a=e.stateNode;if(a===null)return null;var n=a[et]||null;if(n===null)return null;a=n[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(n=!n.disabled)||(e=e.type,n=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!n;break e;default:e=!1}if(e)return null;if(a&&typeof a!="function")throw Error(u(231,t,typeof a));return a}var Jt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Li=!1;if(Jt)try{var Fn={};Object.defineProperty(Fn,"passive",{get:function(){Li=!0}}),window.addEventListener("test",Fn,Fn),window.removeEventListener("test",Fn,Fn)}catch{Li=!1}var fa=null,Hi=null,to=null;function _s(){if(to)return to;var e,t=Hi,a=t.length,n,l="value"in fa?fa.value:fa.textContent,o=l.length;for(e=0;e<a&&t[e]===l[e];e++);var r=a-e;for(n=1;n<=r&&t[a-n]===l[o-n];n++);return to=l.slice(e,1<n?1-n:void 0)}function ao(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function no(){return!0}function ws(){return!1}function tt(e){function t(a,n,l,o,r){this._reactName=a,this._targetInst=l,this.type=n,this.nativeEvent=o,this.target=r,this.currentTarget=null;for(var c in e)e.hasOwnProperty(c)&&(a=e[c],this[c]=a?a(o):o[c]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?no:ws,this.isPropagationStopped=ws,this}return T(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=no)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=no)},persist:function(){},isPersistent:no}),t}var Ba={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},lo=tt(Ba),Wn=T({},Ba,{view:0,detail:0}),Op=tt(Wn),Bi,Vi,Pn,oo=T({},Wn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Yi,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Pn&&(Pn&&e.type==="mousemove"?(Bi=e.screenX-Pn.screenX,Vi=e.screenY-Pn.screenY):Vi=Bi=0,Pn=e),Bi)},movementY:function(e){return"movementY"in e?e.movementY:Vi}}),zs=tt(oo),Mp=T({},oo,{dataTransfer:0}),_p=tt(Mp),wp=T({},Wn,{relatedTarget:0}),Gi=tt(wp),zp=T({},Ba,{animationName:0,elapsedTime:0,pseudoElement:0}),Dp=tt(zp),Up=T({},Ba,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),qp=tt(Up),Lp=T({},Ba,{data:0}),Ds=tt(Lp),Hp={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Bp={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Vp={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Gp(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Vp[e])?!!t[e]:!1}function Yi(){return Gp}var Yp=T({},Wn,{key:function(e){if(e.key){var t=Hp[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=ao(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Bp[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Yi,charCode:function(e){return e.type==="keypress"?ao(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?ao(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Qp=tt(Yp),kp=T({},oo,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Us=tt(kp),Xp=T({},Wn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Yi}),Jp=tt(Xp),Zp=T({},Ba,{propertyName:0,elapsedTime:0,pseudoElement:0}),Kp=tt(Zp),$p=T({},oo,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Ip=tt($p),Fp=T({},Ba,{newState:0,oldState:0}),Wp=tt(Fp),Pp=[9,13,27,32],Qi=Jt&&"CompositionEvent"in window,el=null;Jt&&"documentMode"in document&&(el=document.documentMode);var eh=Jt&&"TextEvent"in window&&!el,qs=Jt&&(!Qi||el&&8<el&&11>=el),Ls=" ",Hs=!1;function Bs(e,t){switch(e){case"keyup":return Pp.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Vs(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var fn=!1;function th(e,t){switch(e){case"compositionend":return Vs(t);case"keypress":return t.which!==32?null:(Hs=!0,Ls);case"textInput":return e=t.data,e===Ls&&Hs?null:e;default:return null}}function ah(e,t){if(fn)return e==="compositionend"||!Qi&&Bs(e,t)?(e=_s(),to=Hi=fa=null,fn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return qs&&t.locale!=="ko"?null:t.data;default:return null}}var nh={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Gs(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!nh[e.type]:t==="textarea"}function Ys(e,t,a,n){cn?dn?dn.push(n):dn=[n]:cn=n,t=$o(t,"onChange"),0<t.length&&(a=new lo("onChange","change",null,a,n),e.push({event:a,listeners:t}))}var tl=null,al=null;function lh(e){Af(e,0)}function io(e){var t=$n(e);if(xs(t))return e}function Qs(e,t){if(e==="change")return t}var ks=!1;if(Jt){var ki;if(Jt){var Xi="oninput"in document;if(!Xi){var Xs=document.createElement("div");Xs.setAttribute("oninput","return;"),Xi=typeof Xs.oninput=="function"}ki=Xi}else ki=!1;ks=ki&&(!document.documentMode||9<document.documentMode)}function Js(){tl&&(tl.detachEvent("onpropertychange",Zs),al=tl=null)}function Zs(e){if(e.propertyName==="value"&&io(al)){var t=[];Ys(t,al,e,Ui(e)),Ms(lh,t)}}function oh(e,t,a){e==="focusin"?(Js(),tl=t,al=a,tl.attachEvent("onpropertychange",Zs)):e==="focusout"&&Js()}function ih(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return io(al)}function rh(e,t){if(e==="click")return io(t)}function uh(e,t){if(e==="input"||e==="change")return io(t)}function sh(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var ft=typeof Object.is=="function"?Object.is:sh;function nl(e,t){if(ft(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var a=Object.keys(e),n=Object.keys(t);if(a.length!==n.length)return!1;for(n=0;n<a.length;n++){var l=a[n];if(!Ti.call(t,l)||!ft(e[l],t[l]))return!1}return!0}function Ks(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function $s(e,t){var a=Ks(e);e=0;for(var n;a;){if(a.nodeType===3){if(n=e+a.textContent.length,e<=t&&n>=t)return{node:a,offset:t-e};e=n}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=Ks(a)}}function Is(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Is(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Fs(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=Pl(e.document);t instanceof e.HTMLIFrameElement;){try{var a=typeof t.contentWindow.location.href=="string"}catch{a=!1}if(a)e=t.contentWindow;else break;t=Pl(e.document)}return t}function Ji(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}var ch=Jt&&"documentMode"in document&&11>=document.documentMode,mn=null,Zi=null,ll=null,Ki=!1;function Ws(e,t,a){var n=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Ki||mn==null||mn!==Pl(n)||(n=mn,"selectionStart"in n&&Ji(n)?n={start:n.selectionStart,end:n.selectionEnd}:(n=(n.ownerDocument&&n.ownerDocument.defaultView||window).getSelection(),n={anchorNode:n.anchorNode,anchorOffset:n.anchorOffset,focusNode:n.focusNode,focusOffset:n.focusOffset}),ll&&nl(ll,n)||(ll=n,n=$o(Zi,"onSelect"),0<n.length&&(t=new lo("onSelect","select",null,t,a),e.push({event:t,listeners:n}),t.target=mn)))}function Va(e,t){var a={};return a[e.toLowerCase()]=t.toLowerCase(),a["Webkit"+e]="webkit"+t,a["Moz"+e]="moz"+t,a}var pn={animationend:Va("Animation","AnimationEnd"),animationiteration:Va("Animation","AnimationIteration"),animationstart:Va("Animation","AnimationStart"),transitionrun:Va("Transition","TransitionRun"),transitionstart:Va("Transition","TransitionStart"),transitioncancel:Va("Transition","TransitionCancel"),transitionend:Va("Transition","TransitionEnd")},$i={},Ps={};Jt&&(Ps=document.createElement("div").style,"AnimationEvent"in window||(delete pn.animationend.animation,delete pn.animationiteration.animation,delete pn.animationstart.animation),"TransitionEvent"in window||delete pn.transitionend.transition);function Ga(e){if($i[e])return $i[e];if(!pn[e])return e;var t=pn[e],a;for(a in t)if(t.hasOwnProperty(a)&&a in Ps)return $i[e]=t[a];return e}var ec=Ga("animationend"),tc=Ga("animationiteration"),ac=Ga("animationstart"),dh=Ga("transitionrun"),fh=Ga("transitionstart"),mh=Ga("transitioncancel"),nc=Ga("transitionend"),lc=new Map,Ii="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Ii.push("scrollEnd");function zt(e,t){lc.set(e,t),Ha(t,[e])}var ro=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},Tt=[],hn=0,Fi=0;function uo(){for(var e=hn,t=Fi=hn=0;t<e;){var a=Tt[t];Tt[t++]=null;var n=Tt[t];Tt[t++]=null;var l=Tt[t];Tt[t++]=null;var o=Tt[t];if(Tt[t++]=null,n!==null&&l!==null){var r=n.pending;r===null?l.next=l:(l.next=r.next,r.next=l),n.pending=l}o!==0&&oc(a,l,o)}}function so(e,t,a,n){Tt[hn++]=e,Tt[hn++]=t,Tt[hn++]=a,Tt[hn++]=n,Fi|=n,e.lanes|=n,e=e.alternate,e!==null&&(e.lanes|=n)}function Wi(e,t,a,n){return so(e,t,a,n),co(e)}function Ya(e,t){return so(e,null,null,t),co(e)}function oc(e,t,a){e.lanes|=a;var n=e.alternate;n!==null&&(n.lanes|=a);for(var l=!1,o=e.return;o!==null;)o.childLanes|=a,n=o.alternate,n!==null&&(n.childLanes|=a),o.tag===22&&(e=o.stateNode,e===null||e._visibility&1||(l=!0)),e=o,o=o.return;return e.tag===3?(o=e.stateNode,l&&t!==null&&(l=31-dt(a),e=o.hiddenUpdates,n=e[l],n===null?e[l]=[t]:n.push(t),t.lane=a|536870912),o):null}function co(e){if(50<Rl)throw Rl=0,ru=null,Error(u(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var gn={};function ph(e,t,a,n){this.tag=e,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=n,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function mt(e,t,a,n){return new ph(e,t,a,n)}function Pi(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Zt(e,t){var a=e.alternate;return a===null?(a=mt(e.tag,t,e.key,e.mode),a.elementType=e.elementType,a.type=e.type,a.stateNode=e.stateNode,a.alternate=e,e.alternate=a):(a.pendingProps=t,a.type=e.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=e.flags&65011712,a.childLanes=e.childLanes,a.lanes=e.lanes,a.child=e.child,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,t=e.dependencies,a.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},a.sibling=e.sibling,a.index=e.index,a.ref=e.ref,a.refCleanup=e.refCleanup,a}function ic(e,t){e.flags&=65011714;var a=e.alternate;return a===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=a.childLanes,e.lanes=a.lanes,e.child=a.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=a.memoizedProps,e.memoizedState=a.memoizedState,e.updateQueue=a.updateQueue,e.type=a.type,t=a.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function fo(e,t,a,n,l,o){var r=0;if(n=e,typeof e=="function")Pi(e)&&(r=1);else if(typeof e=="string")r=bg(e,a,X.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case le:return e=mt(31,a,t,l),e.elementType=le,e.lanes=o,e;case Y:return Qa(a.children,l,o,t);case L:r=8,l|=24;break;case G:return e=mt(12,a,t,l|2),e.elementType=G,e.lanes=o,e;case ne:return e=mt(13,a,t,l),e.elementType=ne,e.lanes=o,e;case pe:return e=mt(19,a,t,l),e.elementType=pe,e.lanes=o,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Z:r=10;break e;case H:r=9;break e;case de:r=11;break e;case F:r=14;break e;case je:r=16,n=null;break e}r=29,a=Error(u(130,e===null?"null":typeof e,"")),n=null}return t=mt(r,a,t,l),t.elementType=e,t.type=n,t.lanes=o,t}function Qa(e,t,a,n){return e=mt(7,e,n,t),e.lanes=a,e}function er(e,t,a){return e=mt(6,e,null,t),e.lanes=a,e}function rc(e){var t=mt(18,null,null,0);return t.stateNode=e,t}function tr(e,t,a){return t=mt(4,e.children!==null?e.children:[],e.key,t),t.lanes=a,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var uc=new WeakMap;function xt(e,t){if(typeof e=="object"&&e!==null){var a=uc.get(e);return a!==void 0?a:(t={value:e,source:t,stack:rs(t)},uc.set(e,t),t)}return{value:e,source:t,stack:rs(t)}}var yn=[],vn=0,mo=null,ol=0,Ct=[],At=0,ma=null,Lt=1,Ht="";function Kt(e,t){yn[vn++]=ol,yn[vn++]=mo,mo=e,ol=t}function sc(e,t,a){Ct[At++]=Lt,Ct[At++]=Ht,Ct[At++]=ma,ma=e;var n=Lt;e=Ht;var l=32-dt(n)-1;n&=~(1<<l),a+=1;var o=32-dt(t)+l;if(30<o){var r=l-l%5;o=(n&(1<<r)-1).toString(32),n>>=r,l-=r,Lt=1<<32-dt(t)+l|a<<l|n,Ht=o+e}else Lt=1<<o|a<<l|n,Ht=e}function ar(e){e.return!==null&&(Kt(e,1),sc(e,1,0))}function nr(e){for(;e===mo;)mo=yn[--vn],yn[vn]=null,ol=yn[--vn],yn[vn]=null;for(;e===ma;)ma=Ct[--At],Ct[At]=null,Ht=Ct[--At],Ct[At]=null,Lt=Ct[--At],Ct[At]=null}function cc(e,t){Ct[At++]=Lt,Ct[At++]=Ht,Ct[At++]=ma,Lt=t.id,Ht=t.overflow,ma=e}var Xe=null,Ae=null,ce=!1,pa=null,Rt=!1,lr=Error(u(519));function ha(e){var t=Error(u(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw il(xt(t,e)),lr}function dc(e){var t=e.stateNode,a=e.type,n=e.memoizedProps;switch(t[ke]=e,t[et]=n,a){case"dialog":re("cancel",t),re("close",t);break;case"iframe":case"object":case"embed":re("load",t);break;case"video":case"audio":for(a=0;a<jl.length;a++)re(jl[a],t);break;case"source":re("error",t);break;case"img":case"image":case"link":re("error",t),re("load",t);break;case"details":re("toggle",t);break;case"input":re("invalid",t),Cs(t,n.value,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name,!0);break;case"select":re("invalid",t);break;case"textarea":re("invalid",t),Rs(t,n.value,n.defaultValue,n.children)}a=n.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||t.textContent===""+a||n.suppressHydrationWarning===!0||Of(t.textContent,a)?(n.popover!=null&&(re("beforetoggle",t),re("toggle",t)),n.onScroll!=null&&re("scroll",t),n.onScrollEnd!=null&&re("scrollend",t),n.onClick!=null&&(t.onclick=Xt),t=!0):t=!1,t||ha(e,!0)}function fc(e){for(Xe=e.return;Xe;)switch(Xe.tag){case 5:case 31:case 13:Rt=!1;return;case 27:case 3:Rt=!0;return;default:Xe=Xe.return}}function bn(e){if(e!==Xe)return!1;if(!ce)return fc(e),ce=!0,!1;var t=e.tag,a;if((a=t!==3&&t!==27)&&((a=t===5)&&(a=e.type,a=!(a!=="form"&&a!=="button")||Tu(e.type,e.memoizedProps)),a=!a),a&&Ae&&ha(e),fc(e),t===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(u(317));Ae=Hf(e)}else if(t===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(u(317));Ae=Hf(e)}else t===27?(t=Ae,Oa(e.type)?(e=Nu,Nu=null,Ae=e):Ae=t):Ae=Xe?jt(e.stateNode.nextSibling):null;return!0}function ka(){Ae=Xe=null,ce=!1}function or(){var e=pa;return e!==null&&(ot===null?ot=e:ot.push.apply(ot,e),pa=null),e}function il(e){pa===null?pa=[e]:pa.push(e)}var ir=E(null),Xa=null,$t=null;function ga(e,t,a){V(ir,t._currentValue),t._currentValue=a}function It(e){e._currentValue=ir.current,D(ir)}function rr(e,t,a){for(;e!==null;){var n=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,n!==null&&(n.childLanes|=t)):n!==null&&(n.childLanes&t)!==t&&(n.childLanes|=t),e===a)break;e=e.return}}function ur(e,t,a,n){var l=e.child;for(l!==null&&(l.return=e);l!==null;){var o=l.dependencies;if(o!==null){var r=l.child;o=o.firstContext;e:for(;o!==null;){var c=o;o=l;for(var h=0;h<t.length;h++)if(c.context===t[h]){o.lanes|=a,c=o.alternate,c!==null&&(c.lanes|=a),rr(o.return,a,e),n||(r=null);break e}o=c.next}}else if(l.tag===18){if(r=l.return,r===null)throw Error(u(341));r.lanes|=a,o=r.alternate,o!==null&&(o.lanes|=a),rr(r,a,e),r=null}else r=l.child;if(r!==null)r.return=l;else for(r=l;r!==null;){if(r===e){r=null;break}if(l=r.sibling,l!==null){l.return=r.return,r=l;break}r=r.return}l=r}}function En(e,t,a,n){e=null;for(var l=t,o=!1;l!==null;){if(!o){if((l.flags&524288)!==0)o=!0;else if((l.flags&262144)!==0)break}if(l.tag===10){var r=l.alternate;if(r===null)throw Error(u(387));if(r=r.memoizedProps,r!==null){var c=l.type;ft(l.pendingProps.value,r.value)||(e!==null?e.push(c):e=[c])}}else if(l===ge.current){if(r=l.alternate,r===null)throw Error(u(387));r.memoizedState.memoizedState!==l.memoizedState.memoizedState&&(e!==null?e.push(zl):e=[zl])}l=l.return}e!==null&&ur(t,e,a,n),t.flags|=262144}function po(e){for(e=e.firstContext;e!==null;){if(!ft(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function Ja(e){Xa=e,$t=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function Je(e){return mc(Xa,e)}function ho(e,t){return Xa===null&&Ja(e),mc(e,t)}function mc(e,t){var a=t._currentValue;if(t={context:t,memoizedValue:a,next:null},$t===null){if(e===null)throw Error(u(308));$t=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else $t=$t.next=t;return a}var hh=typeof AbortController<"u"?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(a,n){e.push(n)}};this.abort=function(){t.aborted=!0,e.forEach(function(a){return a()})}},gh=i.unstable_scheduleCallback,yh=i.unstable_NormalPriority,Ue={$$typeof:Z,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function sr(){return{controller:new hh,data:new Map,refCount:0}}function rl(e){e.refCount--,e.refCount===0&&gh(yh,function(){e.controller.abort()})}var ul=null,cr=0,Sn=0,Tn=null;function vh(e,t){if(ul===null){var a=ul=[];cr=0,Sn=mu(),Tn={status:"pending",value:void 0,then:function(n){a.push(n)}}}return cr++,t.then(pc,pc),t}function pc(){if(--cr===0&&ul!==null){Tn!==null&&(Tn.status="fulfilled");var e=ul;ul=null,Sn=0,Tn=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function bh(e,t){var a=[],n={status:"pending",value:null,reason:null,then:function(l){a.push(l)}};return e.then(function(){n.status="fulfilled",n.value=t;for(var l=0;l<a.length;l++)(0,a[l])(t)},function(l){for(n.status="rejected",n.reason=l,l=0;l<a.length;l++)(0,a[l])(void 0)}),n}var hc=_.S;_.S=function(e,t){Wd=st(),typeof t=="object"&&t!==null&&typeof t.then=="function"&&vh(e,t),hc!==null&&hc(e,t)};var Za=E(null);function dr(){var e=Za.current;return e!==null?e:Ce.pooledCache}function go(e,t){t===null?V(Za,Za.current):V(Za,t.pool)}function gc(){var e=dr();return e===null?null:{parent:Ue._currentValue,pool:e}}var xn=Error(u(460)),fr=Error(u(474)),yo=Error(u(542)),vo={then:function(){}};function yc(e){return e=e.status,e==="fulfilled"||e==="rejected"}function vc(e,t,a){switch(a=e[a],a===void 0?e.push(t):a!==t&&(t.then(Xt,Xt),t=a),t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,Ec(e),e;default:if(typeof t.status=="string")t.then(Xt,Xt);else{if(e=Ce,e!==null&&100<e.shellSuspendCounter)throw Error(u(482));e=t,e.status="pending",e.then(function(n){if(t.status==="pending"){var l=t;l.status="fulfilled",l.value=n}},function(n){if(t.status==="pending"){var l=t;l.status="rejected",l.reason=n}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,Ec(e),e}throw $a=t,xn}}function Ka(e){try{var t=e._init;return t(e._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?($a=a,xn):a}}var $a=null;function bc(){if($a===null)throw Error(u(459));var e=$a;return $a=null,e}function Ec(e){if(e===xn||e===yo)throw Error(u(483))}var Cn=null,sl=0;function bo(e){var t=sl;return sl+=1,Cn===null&&(Cn=[]),vc(Cn,e,t)}function cl(e,t){t=t.props.ref,e.ref=t!==void 0?t:null}function Eo(e,t){throw t.$$typeof===U?Error(u(525)):(e=Object.prototype.toString.call(t),Error(u(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)))}function Sc(e){function t(S,v){if(e){var x=S.deletions;x===null?(S.deletions=[v],S.flags|=16):x.push(v)}}function a(S,v){if(!e)return null;for(;v!==null;)t(S,v),v=v.sibling;return null}function n(S){for(var v=new Map;S!==null;)S.key!==null?v.set(S.key,S):v.set(S.index,S),S=S.sibling;return v}function l(S,v){return S=Zt(S,v),S.index=0,S.sibling=null,S}function o(S,v,x){return S.index=x,e?(x=S.alternate,x!==null?(x=x.index,x<v?(S.flags|=67108866,v):x):(S.flags|=67108866,v)):(S.flags|=1048576,v)}function r(S){return e&&S.alternate===null&&(S.flags|=67108866),S}function c(S,v,x,w){return v===null||v.tag!==6?(v=er(x,S.mode,w),v.return=S,v):(v=l(v,x),v.return=S,v)}function h(S,v,x,w){var K=x.type;return K===Y?M(S,v,x.props.children,w,x.key):v!==null&&(v.elementType===K||typeof K=="object"&&K!==null&&K.$$typeof===je&&Ka(K)===v.type)?(v=l(v,x.props),cl(v,x),v.return=S,v):(v=fo(x.type,x.key,x.props,null,S.mode,w),cl(v,x),v.return=S,v)}function C(S,v,x,w){return v===null||v.tag!==4||v.stateNode.containerInfo!==x.containerInfo||v.stateNode.implementation!==x.implementation?(v=tr(x,S.mode,w),v.return=S,v):(v=l(v,x.children||[]),v.return=S,v)}function M(S,v,x,w,K){return v===null||v.tag!==7?(v=Qa(x,S.mode,w,K),v.return=S,v):(v=l(v,x),v.return=S,v)}function z(S,v,x){if(typeof v=="string"&&v!==""||typeof v=="number"||typeof v=="bigint")return v=er(""+v,S.mode,x),v.return=S,v;if(typeof v=="object"&&v!==null){switch(v.$$typeof){case q:return x=fo(v.type,v.key,v.props,null,S.mode,x),cl(x,v),x.return=S,x;case Q:return v=tr(v,S.mode,x),v.return=S,v;case je:return v=Ka(v),z(S,v,x)}if(wt(v)||$(v))return v=Qa(v,S.mode,x,null),v.return=S,v;if(typeof v.then=="function")return z(S,bo(v),x);if(v.$$typeof===Z)return z(S,ho(S,v),x);Eo(S,v)}return null}function R(S,v,x,w){var K=v!==null?v.key:null;if(typeof x=="string"&&x!==""||typeof x=="number"||typeof x=="bigint")return K!==null?null:c(S,v,""+x,w);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case q:return x.key===K?h(S,v,x,w):null;case Q:return x.key===K?C(S,v,x,w):null;case je:return x=Ka(x),R(S,v,x,w)}if(wt(x)||$(x))return K!==null?null:M(S,v,x,w,null);if(typeof x.then=="function")return R(S,v,bo(x),w);if(x.$$typeof===Z)return R(S,v,ho(S,x),w);Eo(S,x)}return null}function O(S,v,x,w,K){if(typeof w=="string"&&w!==""||typeof w=="number"||typeof w=="bigint")return S=S.get(x)||null,c(v,S,""+w,K);if(typeof w=="object"&&w!==null){switch(w.$$typeof){case q:return S=S.get(w.key===null?x:w.key)||null,h(v,S,w,K);case Q:return S=S.get(w.key===null?x:w.key)||null,C(v,S,w,K);case je:return w=Ka(w),O(S,v,x,w,K)}if(wt(w)||$(w))return S=S.get(x)||null,M(v,S,w,K,null);if(typeof w.then=="function")return O(S,v,x,bo(w),K);if(w.$$typeof===Z)return O(S,v,x,ho(v,w),K);Eo(v,w)}return null}function k(S,v,x,w){for(var K=null,fe=null,J=v,ae=v=0,se=null;J!==null&&ae<x.length;ae++){J.index>ae?(se=J,J=null):se=J.sibling;var me=R(S,J,x[ae],w);if(me===null){J===null&&(J=se);break}e&&J&&me.alternate===null&&t(S,J),v=o(me,v,ae),fe===null?K=me:fe.sibling=me,fe=me,J=se}if(ae===x.length)return a(S,J),ce&&Kt(S,ae),K;if(J===null){for(;ae<x.length;ae++)J=z(S,x[ae],w),J!==null&&(v=o(J,v,ae),fe===null?K=J:fe.sibling=J,fe=J);return ce&&Kt(S,ae),K}for(J=n(J);ae<x.length;ae++)se=O(J,S,ae,x[ae],w),se!==null&&(e&&se.alternate!==null&&J.delete(se.key===null?ae:se.key),v=o(se,v,ae),fe===null?K=se:fe.sibling=se,fe=se);return e&&J.forEach(function(Da){return t(S,Da)}),ce&&Kt(S,ae),K}function I(S,v,x,w){if(x==null)throw Error(u(151));for(var K=null,fe=null,J=v,ae=v=0,se=null,me=x.next();J!==null&&!me.done;ae++,me=x.next()){J.index>ae?(se=J,J=null):se=J.sibling;var Da=R(S,J,me.value,w);if(Da===null){J===null&&(J=se);break}e&&J&&Da.alternate===null&&t(S,J),v=o(Da,v,ae),fe===null?K=Da:fe.sibling=Da,fe=Da,J=se}if(me.done)return a(S,J),ce&&Kt(S,ae),K;if(J===null){for(;!me.done;ae++,me=x.next())me=z(S,me.value,w),me!==null&&(v=o(me,v,ae),fe===null?K=me:fe.sibling=me,fe=me);return ce&&Kt(S,ae),K}for(J=n(J);!me.done;ae++,me=x.next())me=O(J,S,ae,me.value,w),me!==null&&(e&&me.alternate!==null&&J.delete(me.key===null?ae:me.key),v=o(me,v,ae),fe===null?K=me:fe.sibling=me,fe=me);return e&&J.forEach(function(Mg){return t(S,Mg)}),ce&&Kt(S,ae),K}function Te(S,v,x,w){if(typeof x=="object"&&x!==null&&x.type===Y&&x.key===null&&(x=x.props.children),typeof x=="object"&&x!==null){switch(x.$$typeof){case q:e:{for(var K=x.key;v!==null;){if(v.key===K){if(K=x.type,K===Y){if(v.tag===7){a(S,v.sibling),w=l(v,x.props.children),w.return=S,S=w;break e}}else if(v.elementType===K||typeof K=="object"&&K!==null&&K.$$typeof===je&&Ka(K)===v.type){a(S,v.sibling),w=l(v,x.props),cl(w,x),w.return=S,S=w;break e}a(S,v);break}else t(S,v);v=v.sibling}x.type===Y?(w=Qa(x.props.children,S.mode,w,x.key),w.return=S,S=w):(w=fo(x.type,x.key,x.props,null,S.mode,w),cl(w,x),w.return=S,S=w)}return r(S);case Q:e:{for(K=x.key;v!==null;){if(v.key===K)if(v.tag===4&&v.stateNode.containerInfo===x.containerInfo&&v.stateNode.implementation===x.implementation){a(S,v.sibling),w=l(v,x.children||[]),w.return=S,S=w;break e}else{a(S,v);break}else t(S,v);v=v.sibling}w=tr(x,S.mode,w),w.return=S,S=w}return r(S);case je:return x=Ka(x),Te(S,v,x,w)}if(wt(x))return k(S,v,x,w);if($(x)){if(K=$(x),typeof K!="function")throw Error(u(150));return x=K.call(x),I(S,v,x,w)}if(typeof x.then=="function")return Te(S,v,bo(x),w);if(x.$$typeof===Z)return Te(S,v,ho(S,x),w);Eo(S,x)}return typeof x=="string"&&x!==""||typeof x=="number"||typeof x=="bigint"?(x=""+x,v!==null&&v.tag===6?(a(S,v.sibling),w=l(v,x),w.return=S,S=w):(a(S,v),w=er(x,S.mode,w),w.return=S,S=w),r(S)):a(S,v)}return function(S,v,x,w){try{sl=0;var K=Te(S,v,x,w);return Cn=null,K}catch(J){if(J===xn||J===yo)throw J;var fe=mt(29,J,null,S.mode);return fe.lanes=w,fe.return=S,fe}}}var Ia=Sc(!0),Tc=Sc(!1),ya=!1;function mr(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function pr(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function va(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function ba(e,t,a){var n=e.updateQueue;if(n===null)return null;if(n=n.shared,(he&2)!==0){var l=n.pending;return l===null?t.next=t:(t.next=l.next,l.next=t),n.pending=t,t=co(e),oc(e,null,a),t}return so(e,n,t,a),co(e)}function dl(e,t,a){if(t=t.updateQueue,t!==null&&(t=t.shared,(a&4194048)!==0)){var n=t.lanes;n&=e.pendingLanes,a|=n,t.lanes=a,ms(e,a)}}function hr(e,t){var a=e.updateQueue,n=e.alternate;if(n!==null&&(n=n.updateQueue,a===n)){var l=null,o=null;if(a=a.firstBaseUpdate,a!==null){do{var r={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};o===null?l=o=r:o=o.next=r,a=a.next}while(a!==null);o===null?l=o=t:o=o.next=t}else l=o=t;a={baseState:n.baseState,firstBaseUpdate:l,lastBaseUpdate:o,shared:n.shared,callbacks:n.callbacks},e.updateQueue=a;return}e=a.lastBaseUpdate,e===null?a.firstBaseUpdate=t:e.next=t,a.lastBaseUpdate=t}var gr=!1;function fl(){if(gr){var e=Tn;if(e!==null)throw e}}function ml(e,t,a,n){gr=!1;var l=e.updateQueue;ya=!1;var o=l.firstBaseUpdate,r=l.lastBaseUpdate,c=l.shared.pending;if(c!==null){l.shared.pending=null;var h=c,C=h.next;h.next=null,r===null?o=C:r.next=C,r=h;var M=e.alternate;M!==null&&(M=M.updateQueue,c=M.lastBaseUpdate,c!==r&&(c===null?M.firstBaseUpdate=C:c.next=C,M.lastBaseUpdate=h))}if(o!==null){var z=l.baseState;r=0,M=C=h=null,c=o;do{var R=c.lane&-536870913,O=R!==c.lane;if(O?(ue&R)===R:(n&R)===R){R!==0&&R===Sn&&(gr=!0),M!==null&&(M=M.next={lane:0,tag:c.tag,payload:c.payload,callback:null,next:null});e:{var k=e,I=c;R=t;var Te=a;switch(I.tag){case 1:if(k=I.payload,typeof k=="function"){z=k.call(Te,z,R);break e}z=k;break e;case 3:k.flags=k.flags&-65537|128;case 0:if(k=I.payload,R=typeof k=="function"?k.call(Te,z,R):k,R==null)break e;z=T({},z,R);break e;case 2:ya=!0}}R=c.callback,R!==null&&(e.flags|=64,O&&(e.flags|=8192),O=l.callbacks,O===null?l.callbacks=[R]:O.push(R))}else O={lane:R,tag:c.tag,payload:c.payload,callback:c.callback,next:null},M===null?(C=M=O,h=z):M=M.next=O,r|=R;if(c=c.next,c===null){if(c=l.shared.pending,c===null)break;O=c,c=O.next,O.next=null,l.lastBaseUpdate=O,l.shared.pending=null}}while(!0);M===null&&(h=z),l.baseState=h,l.firstBaseUpdate=C,l.lastBaseUpdate=M,o===null&&(l.shared.lanes=0),Ca|=r,e.lanes=r,e.memoizedState=z}}function xc(e,t){if(typeof e!="function")throw Error(u(191,e));e.call(t)}function Cc(e,t){var a=e.callbacks;if(a!==null)for(e.callbacks=null,e=0;e<a.length;e++)xc(a[e],t)}var An=E(null),So=E(0);function Ac(e,t){e=oa,V(So,e),V(An,t),oa=e|t.baseLanes}function yr(){V(So,oa),V(An,An.current)}function vr(){oa=So.current,D(An),D(So)}var pt=E(null),Nt=null;function Ea(e){var t=e.alternate;V(ze,ze.current&1),V(pt,e),Nt===null&&(t===null||An.current!==null||t.memoizedState!==null)&&(Nt=e)}function br(e){V(ze,ze.current),V(pt,e),Nt===null&&(Nt=e)}function Rc(e){e.tag===22?(V(ze,ze.current),V(pt,e),Nt===null&&(Nt=e)):Sa()}function Sa(){V(ze,ze.current),V(pt,pt.current)}function ht(e){D(pt),Nt===e&&(Nt=null),D(ze)}var ze=E(0);function To(e){for(var t=e;t!==null;){if(t.tag===13){var a=t.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||Au(a)||Ru(a)))return t}else if(t.tag===19&&(t.memoizedProps.revealOrder==="forwards"||t.memoizedProps.revealOrder==="backwards"||t.memoizedProps.revealOrder==="unstable_legacy-backwards"||t.memoizedProps.revealOrder==="together")){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Ft=0,te=null,Ee=null,qe=null,xo=!1,Rn=!1,Fa=!1,Co=0,pl=0,Nn=null,Eh=0;function Me(){throw Error(u(321))}function Er(e,t){if(t===null)return!1;for(var a=0;a<t.length&&a<e.length;a++)if(!ft(e[a],t[a]))return!1;return!0}function Sr(e,t,a,n,l,o){return Ft=o,te=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,_.H=e===null||e.memoizedState===null?sd:qr,Fa=!1,o=a(n,l),Fa=!1,Rn&&(o=jc(t,a,n,l)),Nc(e),o}function Nc(e){_.H=yl;var t=Ee!==null&&Ee.next!==null;if(Ft=0,qe=Ee=te=null,xo=!1,pl=0,Nn=null,t)throw Error(u(300));e===null||Le||(e=e.dependencies,e!==null&&po(e)&&(Le=!0))}function jc(e,t,a,n){te=e;var l=0;do{if(Rn&&(Nn=null),pl=0,Rn=!1,25<=l)throw Error(u(301));if(l+=1,qe=Ee=null,e.updateQueue!=null){var o=e.updateQueue;o.lastEffect=null,o.events=null,o.stores=null,o.memoCache!=null&&(o.memoCache.index=0)}_.H=cd,o=t(a,n)}while(Rn);return o}function Sh(){var e=_.H,t=e.useState()[0];return t=typeof t.then=="function"?hl(t):t,e=e.useState()[0],(Ee!==null?Ee.memoizedState:null)!==e&&(te.flags|=1024),t}function Tr(){var e=Co!==0;return Co=0,e}function xr(e,t,a){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~a}function Cr(e){if(xo){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}xo=!1}Ft=0,qe=Ee=te=null,Rn=!1,pl=Co=0,Nn=null}function Pe(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return qe===null?te.memoizedState=qe=e:qe=qe.next=e,qe}function De(){if(Ee===null){var e=te.alternate;e=e!==null?e.memoizedState:null}else e=Ee.next;var t=qe===null?te.memoizedState:qe.next;if(t!==null)qe=t,Ee=e;else{if(e===null)throw te.alternate===null?Error(u(467)):Error(u(310));Ee=e,e={memoizedState:Ee.memoizedState,baseState:Ee.baseState,baseQueue:Ee.baseQueue,queue:Ee.queue,next:null},qe===null?te.memoizedState=qe=e:qe=qe.next=e}return qe}function Ao(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function hl(e){var t=pl;return pl+=1,Nn===null&&(Nn=[]),e=vc(Nn,e,t),t=te,(qe===null?t.memoizedState:qe.next)===null&&(t=t.alternate,_.H=t===null||t.memoizedState===null?sd:qr),e}function Ro(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return hl(e);if(e.$$typeof===Z)return Je(e)}throw Error(u(438,String(e)))}function Ar(e){var t=null,a=te.updateQueue;if(a!==null&&(t=a.memoCache),t==null){var n=te.alternate;n!==null&&(n=n.updateQueue,n!==null&&(n=n.memoCache,n!=null&&(t={data:n.data.map(function(l){return l.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),a===null&&(a=Ao(),te.updateQueue=a),a.memoCache=t,a=t.data[t.index],a===void 0)for(a=t.data[t.index]=Array(e),n=0;n<e;n++)a[n]=Ye;return t.index++,a}function Wt(e,t){return typeof t=="function"?t(e):t}function No(e){var t=De();return Rr(t,Ee,e)}function Rr(e,t,a){var n=e.queue;if(n===null)throw Error(u(311));n.lastRenderedReducer=a;var l=e.baseQueue,o=n.pending;if(o!==null){if(l!==null){var r=l.next;l.next=o.next,o.next=r}t.baseQueue=l=o,n.pending=null}if(o=e.baseState,l===null)e.memoizedState=o;else{t=l.next;var c=r=null,h=null,C=t,M=!1;do{var z=C.lane&-536870913;if(z!==C.lane?(ue&z)===z:(Ft&z)===z){var R=C.revertLane;if(R===0)h!==null&&(h=h.next={lane:0,revertLane:0,gesture:null,action:C.action,hasEagerState:C.hasEagerState,eagerState:C.eagerState,next:null}),z===Sn&&(M=!0);else if((Ft&R)===R){C=C.next,R===Sn&&(M=!0);continue}else z={lane:0,revertLane:C.revertLane,gesture:null,action:C.action,hasEagerState:C.hasEagerState,eagerState:C.eagerState,next:null},h===null?(c=h=z,r=o):h=h.next=z,te.lanes|=R,Ca|=R;z=C.action,Fa&&a(o,z),o=C.hasEagerState?C.eagerState:a(o,z)}else R={lane:z,revertLane:C.revertLane,gesture:C.gesture,action:C.action,hasEagerState:C.hasEagerState,eagerState:C.eagerState,next:null},h===null?(c=h=R,r=o):h=h.next=R,te.lanes|=z,Ca|=z;C=C.next}while(C!==null&&C!==t);if(h===null?r=o:h.next=c,!ft(o,e.memoizedState)&&(Le=!0,M&&(a=Tn,a!==null)))throw a;e.memoizedState=o,e.baseState=r,e.baseQueue=h,n.lastRenderedState=o}return l===null&&(n.lanes=0),[e.memoizedState,n.dispatch]}function Nr(e){var t=De(),a=t.queue;if(a===null)throw Error(u(311));a.lastRenderedReducer=e;var n=a.dispatch,l=a.pending,o=t.memoizedState;if(l!==null){a.pending=null;var r=l=l.next;do o=e(o,r.action),r=r.next;while(r!==l);ft(o,t.memoizedState)||(Le=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),a.lastRenderedState=o}return[o,n]}function Oc(e,t,a){var n=te,l=De(),o=ce;if(o){if(a===void 0)throw Error(u(407));a=a()}else a=t();var r=!ft((Ee||l).memoizedState,a);if(r&&(l.memoizedState=a,Le=!0),l=l.queue,Mr(wc.bind(null,n,l,e),[e]),l.getSnapshot!==t||r||qe!==null&&qe.memoizedState.tag&1){if(n.flags|=2048,jn(9,{destroy:void 0},_c.bind(null,n,l,a,t),null),Ce===null)throw Error(u(349));o||(Ft&127)!==0||Mc(n,t,a)}return a}function Mc(e,t,a){e.flags|=16384,e={getSnapshot:t,value:a},t=te.updateQueue,t===null?(t=Ao(),te.updateQueue=t,t.stores=[e]):(a=t.stores,a===null?t.stores=[e]:a.push(e))}function _c(e,t,a,n){t.value=a,t.getSnapshot=n,zc(t)&&Dc(e)}function wc(e,t,a){return a(function(){zc(t)&&Dc(e)})}function zc(e){var t=e.getSnapshot;e=e.value;try{var a=t();return!ft(e,a)}catch{return!0}}function Dc(e){var t=Ya(e,2);t!==null&&it(t,e,2)}function jr(e){var t=Pe();if(typeof e=="function"){var a=e;if(e=a(),Fa){ca(!0);try{a()}finally{ca(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Wt,lastRenderedState:e},t}function Uc(e,t,a,n){return e.baseState=a,Rr(e,Ee,typeof n=="function"?n:Wt)}function Th(e,t,a,n,l){if(Mo(e))throw Error(u(485));if(e=t.action,e!==null){var o={payload:l,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(r){o.listeners.push(r)}};_.T!==null?a(!0):o.isTransition=!1,n(o),a=t.pending,a===null?(o.next=t.pending=o,qc(t,o)):(o.next=a.next,t.pending=a.next=o)}}function qc(e,t){var a=t.action,n=t.payload,l=e.state;if(t.isTransition){var o=_.T,r={};_.T=r;try{var c=a(l,n),h=_.S;h!==null&&h(r,c),Lc(e,t,c)}catch(C){Or(e,t,C)}finally{o!==null&&r.types!==null&&(o.types=r.types),_.T=o}}else try{o=a(l,n),Lc(e,t,o)}catch(C){Or(e,t,C)}}function Lc(e,t,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(n){Hc(e,t,n)},function(n){return Or(e,t,n)}):Hc(e,t,a)}function Hc(e,t,a){t.status="fulfilled",t.value=a,Bc(t),e.state=a,t=e.pending,t!==null&&(a=t.next,a===t?e.pending=null:(a=a.next,t.next=a,qc(e,a)))}function Or(e,t,a){var n=e.pending;if(e.pending=null,n!==null){n=n.next;do t.status="rejected",t.reason=a,Bc(t),t=t.next;while(t!==n)}e.action=null}function Bc(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function Vc(e,t){return t}function Gc(e,t){if(ce){var a=Ce.formState;if(a!==null){e:{var n=te;if(ce){if(Ae){t:{for(var l=Ae,o=Rt;l.nodeType!==8;){if(!o){l=null;break t}if(l=jt(l.nextSibling),l===null){l=null;break t}}o=l.data,l=o==="F!"||o==="F"?l:null}if(l){Ae=jt(l.nextSibling),n=l.data==="F!";break e}}ha(n)}n=!1}n&&(t=a[0])}}return a=Pe(),a.memoizedState=a.baseState=t,n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Vc,lastRenderedState:t},a.queue=n,a=id.bind(null,te,n),n.dispatch=a,n=jr(!1),o=Ur.bind(null,te,!1,n.queue),n=Pe(),l={state:t,dispatch:null,action:e,pending:null},n.queue=l,a=Th.bind(null,te,l,o,a),l.dispatch=a,n.memoizedState=e,[t,a,!1]}function Yc(e){var t=De();return Qc(t,Ee,e)}function Qc(e,t,a){if(t=Rr(e,t,Vc)[0],e=No(Wt)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var n=hl(t)}catch(r){throw r===xn?yo:r}else n=t;t=De();var l=t.queue,o=l.dispatch;return a!==t.memoizedState&&(te.flags|=2048,jn(9,{destroy:void 0},xh.bind(null,l,a),null)),[n,o,e]}function xh(e,t){e.action=t}function kc(e){var t=De(),a=Ee;if(a!==null)return Qc(t,a,e);De(),t=t.memoizedState,a=De();var n=a.queue.dispatch;return a.memoizedState=e,[t,n,!1]}function jn(e,t,a,n){return e={tag:e,create:a,deps:n,inst:t,next:null},t=te.updateQueue,t===null&&(t=Ao(),te.updateQueue=t),a=t.lastEffect,a===null?t.lastEffect=e.next=e:(n=a.next,a.next=e,e.next=n,t.lastEffect=e),e}function Xc(){return De().memoizedState}function jo(e,t,a,n){var l=Pe();te.flags|=e,l.memoizedState=jn(1|t,{destroy:void 0},a,n===void 0?null:n)}function Oo(e,t,a,n){var l=De();n=n===void 0?null:n;var o=l.memoizedState.inst;Ee!==null&&n!==null&&Er(n,Ee.memoizedState.deps)?l.memoizedState=jn(t,o,a,n):(te.flags|=e,l.memoizedState=jn(1|t,o,a,n))}function Jc(e,t){jo(8390656,8,e,t)}function Mr(e,t){Oo(2048,8,e,t)}function Ch(e){te.flags|=4;var t=te.updateQueue;if(t===null)t=Ao(),te.updateQueue=t,t.events=[e];else{var a=t.events;a===null?t.events=[e]:a.push(e)}}function Zc(e){var t=De().memoizedState;return Ch({ref:t,nextImpl:e}),function(){if((he&2)!==0)throw Error(u(440));return t.impl.apply(void 0,arguments)}}function Kc(e,t){return Oo(4,2,e,t)}function $c(e,t){return Oo(4,4,e,t)}function Ic(e,t){if(typeof t=="function"){e=e();var a=t(e);return function(){typeof a=="function"?a():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Fc(e,t,a){a=a!=null?a.concat([e]):null,Oo(4,4,Ic.bind(null,t,e),a)}function _r(){}function Wc(e,t){var a=De();t=t===void 0?null:t;var n=a.memoizedState;return t!==null&&Er(t,n[1])?n[0]:(a.memoizedState=[e,t],e)}function Pc(e,t){var a=De();t=t===void 0?null:t;var n=a.memoizedState;if(t!==null&&Er(t,n[1]))return n[0];if(n=e(),Fa){ca(!0);try{e()}finally{ca(!1)}}return a.memoizedState=[n,t],n}function wr(e,t,a){return a===void 0||(Ft&1073741824)!==0&&(ue&261930)===0?e.memoizedState=t:(e.memoizedState=a,e=ef(),te.lanes|=e,Ca|=e,a)}function ed(e,t,a,n){return ft(a,t)?a:An.current!==null?(e=wr(e,a,n),ft(e,t)||(Le=!0),e):(Ft&42)===0||(Ft&1073741824)!==0&&(ue&261930)===0?(Le=!0,e.memoizedState=a):(e=ef(),te.lanes|=e,Ca|=e,t)}function td(e,t,a,n,l){var o=B.p;B.p=o!==0&&8>o?o:8;var r=_.T,c={};_.T=c,Ur(e,!1,t,a);try{var h=l(),C=_.S;if(C!==null&&C(c,h),h!==null&&typeof h=="object"&&typeof h.then=="function"){var M=bh(h,n);gl(e,t,M,vt(e))}else gl(e,t,n,vt(e))}catch(z){gl(e,t,{then:function(){},status:"rejected",reason:z},vt())}finally{B.p=o,r!==null&&c.types!==null&&(r.types=c.types),_.T=r}}function Ah(){}function zr(e,t,a,n){if(e.tag!==5)throw Error(u(476));var l=ad(e).queue;td(e,l,t,W,a===null?Ah:function(){return nd(e),a(n)})}function ad(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:W,baseState:W,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Wt,lastRenderedState:W},next:null};var a={};return t.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Wt,lastRenderedState:a},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function nd(e){var t=ad(e);t.next===null&&(t=e.alternate.memoizedState),gl(e,t.next.queue,{},vt())}function Dr(){return Je(zl)}function ld(){return De().memoizedState}function od(){return De().memoizedState}function Rh(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var a=vt();e=va(a);var n=ba(t,e,a);n!==null&&(it(n,t,a),dl(n,t,a)),t={cache:sr()},e.payload=t;return}t=t.return}}function Nh(e,t,a){var n=vt();a={lane:n,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},Mo(e)?rd(t,a):(a=Wi(e,t,a,n),a!==null&&(it(a,e,n),ud(a,t,n)))}function id(e,t,a){var n=vt();gl(e,t,a,n)}function gl(e,t,a,n){var l={lane:n,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(Mo(e))rd(t,l);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=t.lastRenderedReducer,o!==null))try{var r=t.lastRenderedState,c=o(r,a);if(l.hasEagerState=!0,l.eagerState=c,ft(c,r))return so(e,t,l,0),Ce===null&&uo(),!1}catch{}if(a=Wi(e,t,l,n),a!==null)return it(a,e,n),ud(a,t,n),!0}return!1}function Ur(e,t,a,n){if(n={lane:2,revertLane:mu(),gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null},Mo(e)){if(t)throw Error(u(479))}else t=Wi(e,a,n,2),t!==null&&it(t,e,2)}function Mo(e){var t=e.alternate;return e===te||t!==null&&t===te}function rd(e,t){Rn=xo=!0;var a=e.pending;a===null?t.next=t:(t.next=a.next,a.next=t),e.pending=t}function ud(e,t,a){if((a&4194048)!==0){var n=t.lanes;n&=e.pendingLanes,a|=n,t.lanes=a,ms(e,a)}}var yl={readContext:Je,use:Ro,useCallback:Me,useContext:Me,useEffect:Me,useImperativeHandle:Me,useLayoutEffect:Me,useInsertionEffect:Me,useMemo:Me,useReducer:Me,useRef:Me,useState:Me,useDebugValue:Me,useDeferredValue:Me,useTransition:Me,useSyncExternalStore:Me,useId:Me,useHostTransitionStatus:Me,useFormState:Me,useActionState:Me,useOptimistic:Me,useMemoCache:Me,useCacheRefresh:Me};yl.useEffectEvent=Me;var sd={readContext:Je,use:Ro,useCallback:function(e,t){return Pe().memoizedState=[e,t===void 0?null:t],e},useContext:Je,useEffect:Jc,useImperativeHandle:function(e,t,a){a=a!=null?a.concat([e]):null,jo(4194308,4,Ic.bind(null,t,e),a)},useLayoutEffect:function(e,t){return jo(4194308,4,e,t)},useInsertionEffect:function(e,t){jo(4,2,e,t)},useMemo:function(e,t){var a=Pe();t=t===void 0?null:t;var n=e();if(Fa){ca(!0);try{e()}finally{ca(!1)}}return a.memoizedState=[n,t],n},useReducer:function(e,t,a){var n=Pe();if(a!==void 0){var l=a(t);if(Fa){ca(!0);try{a(t)}finally{ca(!1)}}}else l=t;return n.memoizedState=n.baseState=l,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:l},n.queue=e,e=e.dispatch=Nh.bind(null,te,e),[n.memoizedState,e]},useRef:function(e){var t=Pe();return e={current:e},t.memoizedState=e},useState:function(e){e=jr(e);var t=e.queue,a=id.bind(null,te,t);return t.dispatch=a,[e.memoizedState,a]},useDebugValue:_r,useDeferredValue:function(e,t){var a=Pe();return wr(a,e,t)},useTransition:function(){var e=jr(!1);return e=td.bind(null,te,e.queue,!0,!1),Pe().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,a){var n=te,l=Pe();if(ce){if(a===void 0)throw Error(u(407));a=a()}else{if(a=t(),Ce===null)throw Error(u(349));(ue&127)!==0||Mc(n,t,a)}l.memoizedState=a;var o={value:a,getSnapshot:t};return l.queue=o,Jc(wc.bind(null,n,o,e),[e]),n.flags|=2048,jn(9,{destroy:void 0},_c.bind(null,n,o,a,t),null),a},useId:function(){var e=Pe(),t=Ce.identifierPrefix;if(ce){var a=Ht,n=Lt;a=(n&~(1<<32-dt(n)-1)).toString(32)+a,t="_"+t+"R_"+a,a=Co++,0<a&&(t+="H"+a.toString(32)),t+="_"}else a=Eh++,t="_"+t+"r_"+a.toString(32)+"_";return e.memoizedState=t},useHostTransitionStatus:Dr,useFormState:Gc,useActionState:Gc,useOptimistic:function(e){var t=Pe();t.memoizedState=t.baseState=e;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=a,t=Ur.bind(null,te,!0,a),a.dispatch=t,[e,t]},useMemoCache:Ar,useCacheRefresh:function(){return Pe().memoizedState=Rh.bind(null,te)},useEffectEvent:function(e){var t=Pe(),a={impl:e};return t.memoizedState=a,function(){if((he&2)!==0)throw Error(u(440));return a.impl.apply(void 0,arguments)}}},qr={readContext:Je,use:Ro,useCallback:Wc,useContext:Je,useEffect:Mr,useImperativeHandle:Fc,useInsertionEffect:Kc,useLayoutEffect:$c,useMemo:Pc,useReducer:No,useRef:Xc,useState:function(){return No(Wt)},useDebugValue:_r,useDeferredValue:function(e,t){var a=De();return ed(a,Ee.memoizedState,e,t)},useTransition:function(){var e=No(Wt)[0],t=De().memoizedState;return[typeof e=="boolean"?e:hl(e),t]},useSyncExternalStore:Oc,useId:ld,useHostTransitionStatus:Dr,useFormState:Yc,useActionState:Yc,useOptimistic:function(e,t){var a=De();return Uc(a,Ee,e,t)},useMemoCache:Ar,useCacheRefresh:od};qr.useEffectEvent=Zc;var cd={readContext:Je,use:Ro,useCallback:Wc,useContext:Je,useEffect:Mr,useImperativeHandle:Fc,useInsertionEffect:Kc,useLayoutEffect:$c,useMemo:Pc,useReducer:Nr,useRef:Xc,useState:function(){return Nr(Wt)},useDebugValue:_r,useDeferredValue:function(e,t){var a=De();return Ee===null?wr(a,e,t):ed(a,Ee.memoizedState,e,t)},useTransition:function(){var e=Nr(Wt)[0],t=De().memoizedState;return[typeof e=="boolean"?e:hl(e),t]},useSyncExternalStore:Oc,useId:ld,useHostTransitionStatus:Dr,useFormState:kc,useActionState:kc,useOptimistic:function(e,t){var a=De();return Ee!==null?Uc(a,Ee,e,t):(a.baseState=e,[e,a.queue.dispatch])},useMemoCache:Ar,useCacheRefresh:od};cd.useEffectEvent=Zc;function Lr(e,t,a,n){t=e.memoizedState,a=a(n,t),a=a==null?t:T({},t,a),e.memoizedState=a,e.lanes===0&&(e.updateQueue.baseState=a)}var Hr={enqueueSetState:function(e,t,a){e=e._reactInternals;var n=vt(),l=va(n);l.payload=t,a!=null&&(l.callback=a),t=ba(e,l,n),t!==null&&(it(t,e,n),dl(t,e,n))},enqueueReplaceState:function(e,t,a){e=e._reactInternals;var n=vt(),l=va(n);l.tag=1,l.payload=t,a!=null&&(l.callback=a),t=ba(e,l,n),t!==null&&(it(t,e,n),dl(t,e,n))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var a=vt(),n=va(a);n.tag=2,t!=null&&(n.callback=t),t=ba(e,n,a),t!==null&&(it(t,e,a),dl(t,e,a))}};function dd(e,t,a,n,l,o,r){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(n,o,r):t.prototype&&t.prototype.isPureReactComponent?!nl(a,n)||!nl(l,o):!0}function fd(e,t,a,n){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(a,n),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(a,n),t.state!==e&&Hr.enqueueReplaceState(t,t.state,null)}function Wa(e,t){var a=t;if("ref"in t){a={};for(var n in t)n!=="ref"&&(a[n]=t[n])}if(e=e.defaultProps){a===t&&(a=T({},a));for(var l in e)a[l]===void 0&&(a[l]=e[l])}return a}function md(e){ro(e)}function pd(e){console.error(e)}function hd(e){ro(e)}function _o(e,t){try{var a=e.onUncaughtError;a(t.value,{componentStack:t.stack})}catch(n){setTimeout(function(){throw n})}}function gd(e,t,a){try{var n=e.onCaughtError;n(a.value,{componentStack:a.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(l){setTimeout(function(){throw l})}}function Br(e,t,a){return a=va(a),a.tag=3,a.payload={element:null},a.callback=function(){_o(e,t)},a}function yd(e){return e=va(e),e.tag=3,e}function vd(e,t,a,n){var l=a.type.getDerivedStateFromError;if(typeof l=="function"){var o=n.value;e.payload=function(){return l(o)},e.callback=function(){gd(t,a,n)}}var r=a.stateNode;r!==null&&typeof r.componentDidCatch=="function"&&(e.callback=function(){gd(t,a,n),typeof l!="function"&&(Aa===null?Aa=new Set([this]):Aa.add(this));var c=n.stack;this.componentDidCatch(n.value,{componentStack:c!==null?c:""})})}function jh(e,t,a,n,l){if(a.flags|=32768,n!==null&&typeof n=="object"&&typeof n.then=="function"){if(t=a.alternate,t!==null&&En(t,a,l,!0),a=pt.current,a!==null){switch(a.tag){case 31:case 13:return Nt===null?Qo():a.alternate===null&&_e===0&&(_e=3),a.flags&=-257,a.flags|=65536,a.lanes=l,n===vo?a.flags|=16384:(t=a.updateQueue,t===null?a.updateQueue=new Set([n]):t.add(n),cu(e,n,l)),!1;case 22:return a.flags|=65536,n===vo?a.flags|=16384:(t=a.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([n])},a.updateQueue=t):(a=t.retryQueue,a===null?t.retryQueue=new Set([n]):a.add(n)),cu(e,n,l)),!1}throw Error(u(435,a.tag))}return cu(e,n,l),Qo(),!1}if(ce)return t=pt.current,t!==null?((t.flags&65536)===0&&(t.flags|=256),t.flags|=65536,t.lanes=l,n!==lr&&(e=Error(u(422),{cause:n}),il(xt(e,a)))):(n!==lr&&(t=Error(u(423),{cause:n}),il(xt(t,a))),e=e.current.alternate,e.flags|=65536,l&=-l,e.lanes|=l,n=xt(n,a),l=Br(e.stateNode,n,l),hr(e,l),_e!==4&&(_e=2)),!1;var o=Error(u(520),{cause:n});if(o=xt(o,a),Al===null?Al=[o]:Al.push(o),_e!==4&&(_e=2),t===null)return!0;n=xt(n,a),a=t;do{switch(a.tag){case 3:return a.flags|=65536,e=l&-l,a.lanes|=e,e=Br(a.stateNode,n,e),hr(a,e),!1;case 1:if(t=a.type,o=a.stateNode,(a.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||o!==null&&typeof o.componentDidCatch=="function"&&(Aa===null||!Aa.has(o))))return a.flags|=65536,l&=-l,a.lanes|=l,l=yd(l),vd(l,e,a,n),hr(a,l),!1}a=a.return}while(a!==null);return!1}var Vr=Error(u(461)),Le=!1;function Ze(e,t,a,n){t.child=e===null?Tc(t,null,a,n):Ia(t,e.child,a,n)}function bd(e,t,a,n,l){a=a.render;var o=t.ref;if("ref"in n){var r={};for(var c in n)c!=="ref"&&(r[c]=n[c])}else r=n;return Ja(t),n=Sr(e,t,a,r,o,l),c=Tr(),e!==null&&!Le?(xr(e,t,l),Pt(e,t,l)):(ce&&c&&ar(t),t.flags|=1,Ze(e,t,n,l),t.child)}function Ed(e,t,a,n,l){if(e===null){var o=a.type;return typeof o=="function"&&!Pi(o)&&o.defaultProps===void 0&&a.compare===null?(t.tag=15,t.type=o,Sd(e,t,o,n,l)):(e=fo(a.type,null,n,t,t.mode,l),e.ref=t.ref,e.return=t,t.child=e)}if(o=e.child,!Kr(e,l)){var r=o.memoizedProps;if(a=a.compare,a=a!==null?a:nl,a(r,n)&&e.ref===t.ref)return Pt(e,t,l)}return t.flags|=1,e=Zt(o,n),e.ref=t.ref,e.return=t,t.child=e}function Sd(e,t,a,n,l){if(e!==null){var o=e.memoizedProps;if(nl(o,n)&&e.ref===t.ref)if(Le=!1,t.pendingProps=n=o,Kr(e,l))(e.flags&131072)!==0&&(Le=!0);else return t.lanes=e.lanes,Pt(e,t,l)}return Gr(e,t,a,n,l)}function Td(e,t,a,n){var l=n.children,o=e!==null?e.memoizedState:null;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.mode==="hidden"){if((t.flags&128)!==0){if(o=o!==null?o.baseLanes|a:a,e!==null){for(n=t.child=e.child,l=0;n!==null;)l=l|n.lanes|n.childLanes,n=n.sibling;n=l&~o}else n=0,t.child=null;return xd(e,t,o,a,n)}if((a&536870912)!==0)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&go(t,o!==null?o.cachePool:null),o!==null?Ac(t,o):yr(),Rc(t);else return n=t.lanes=536870912,xd(e,t,o!==null?o.baseLanes|a:a,a,n)}else o!==null?(go(t,o.cachePool),Ac(t,o),Sa(),t.memoizedState=null):(e!==null&&go(t,null),yr(),Sa());return Ze(e,t,l,a),t.child}function vl(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function xd(e,t,a,n,l){var o=dr();return o=o===null?null:{parent:Ue._currentValue,pool:o},t.memoizedState={baseLanes:a,cachePool:o},e!==null&&go(t,null),yr(),Rc(t),e!==null&&En(e,t,n,!0),t.childLanes=l,null}function wo(e,t){return t=Do({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function Cd(e,t,a){return Ia(t,e.child,null,a),e=wo(t,t.pendingProps),e.flags|=2,ht(t),t.memoizedState=null,e}function Oh(e,t,a){var n=t.pendingProps,l=(t.flags&128)!==0;if(t.flags&=-129,e===null){if(ce){if(n.mode==="hidden")return e=wo(t,n),t.lanes=536870912,vl(null,e);if(br(t),(e=Ae)?(e=Lf(e,Rt),e=e!==null&&e.data==="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:ma!==null?{id:Lt,overflow:Ht}:null,retryLane:536870912,hydrationErrors:null},a=rc(e),a.return=t,t.child=a,Xe=t,Ae=null)):e=null,e===null)throw ha(t);return t.lanes=536870912,null}return wo(t,n)}var o=e.memoizedState;if(o!==null){var r=o.dehydrated;if(br(t),l)if(t.flags&256)t.flags&=-257,t=Cd(e,t,a);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(u(558));else if(Le||En(e,t,a,!1),l=(a&e.childLanes)!==0,Le||l){if(n=Ce,n!==null&&(r=ps(n,a),r!==0&&r!==o.retryLane))throw o.retryLane=r,Ya(e,r),it(n,e,r),Vr;Qo(),t=Cd(e,t,a)}else e=o.treeContext,Ae=jt(r.nextSibling),Xe=t,ce=!0,pa=null,Rt=!1,e!==null&&cc(t,e),t=wo(t,n),t.flags|=4096;return t}return e=Zt(e.child,{mode:n.mode,children:n.children}),e.ref=t.ref,t.child=e,e.return=t,e}function zo(e,t){var a=t.ref;if(a===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(u(284));(e===null||e.ref!==a)&&(t.flags|=4194816)}}function Gr(e,t,a,n,l){return Ja(t),a=Sr(e,t,a,n,void 0,l),n=Tr(),e!==null&&!Le?(xr(e,t,l),Pt(e,t,l)):(ce&&n&&ar(t),t.flags|=1,Ze(e,t,a,l),t.child)}function Ad(e,t,a,n,l,o){return Ja(t),t.updateQueue=null,a=jc(t,n,a,l),Nc(e),n=Tr(),e!==null&&!Le?(xr(e,t,o),Pt(e,t,o)):(ce&&n&&ar(t),t.flags|=1,Ze(e,t,a,o),t.child)}function Rd(e,t,a,n,l){if(Ja(t),t.stateNode===null){var o=gn,r=a.contextType;typeof r=="object"&&r!==null&&(o=Je(r)),o=new a(n,o),t.memoizedState=o.state!==null&&o.state!==void 0?o.state:null,o.updater=Hr,t.stateNode=o,o._reactInternals=t,o=t.stateNode,o.props=n,o.state=t.memoizedState,o.refs={},mr(t),r=a.contextType,o.context=typeof r=="object"&&r!==null?Je(r):gn,o.state=t.memoizedState,r=a.getDerivedStateFromProps,typeof r=="function"&&(Lr(t,a,r,n),o.state=t.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof o.getSnapshotBeforeUpdate=="function"||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(r=o.state,typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount(),r!==o.state&&Hr.enqueueReplaceState(o,o.state,null),ml(t,n,o,l),fl(),o.state=t.memoizedState),typeof o.componentDidMount=="function"&&(t.flags|=4194308),n=!0}else if(e===null){o=t.stateNode;var c=t.memoizedProps,h=Wa(a,c);o.props=h;var C=o.context,M=a.contextType;r=gn,typeof M=="object"&&M!==null&&(r=Je(M));var z=a.getDerivedStateFromProps;M=typeof z=="function"||typeof o.getSnapshotBeforeUpdate=="function",c=t.pendingProps!==c,M||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(c||C!==r)&&fd(t,o,n,r),ya=!1;var R=t.memoizedState;o.state=R,ml(t,n,o,l),fl(),C=t.memoizedState,c||R!==C||ya?(typeof z=="function"&&(Lr(t,a,z,n),C=t.memoizedState),(h=ya||dd(t,a,h,n,R,C,r))?(M||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(t.flags|=4194308)):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=n,t.memoizedState=C),o.props=n,o.state=C,o.context=r,n=h):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),n=!1)}else{o=t.stateNode,pr(e,t),r=t.memoizedProps,M=Wa(a,r),o.props=M,z=t.pendingProps,R=o.context,C=a.contextType,h=gn,typeof C=="object"&&C!==null&&(h=Je(C)),c=a.getDerivedStateFromProps,(C=typeof c=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(r!==z||R!==h)&&fd(t,o,n,h),ya=!1,R=t.memoizedState,o.state=R,ml(t,n,o,l),fl();var O=t.memoizedState;r!==z||R!==O||ya||e!==null&&e.dependencies!==null&&po(e.dependencies)?(typeof c=="function"&&(Lr(t,a,c,n),O=t.memoizedState),(M=ya||dd(t,a,M,n,R,O,h)||e!==null&&e.dependencies!==null&&po(e.dependencies))?(C||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(n,O,h),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(n,O,h)),typeof o.componentDidUpdate=="function"&&(t.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof o.componentDidUpdate!="function"||r===e.memoizedProps&&R===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||r===e.memoizedProps&&R===e.memoizedState||(t.flags|=1024),t.memoizedProps=n,t.memoizedState=O),o.props=n,o.state=O,o.context=h,n=M):(typeof o.componentDidUpdate!="function"||r===e.memoizedProps&&R===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||r===e.memoizedProps&&R===e.memoizedState||(t.flags|=1024),n=!1)}return o=n,zo(e,t),n=(t.flags&128)!==0,o||n?(o=t.stateNode,a=n&&typeof a.getDerivedStateFromError!="function"?null:o.render(),t.flags|=1,e!==null&&n?(t.child=Ia(t,e.child,null,l),t.child=Ia(t,null,a,l)):Ze(e,t,a,l),t.memoizedState=o.state,e=t.child):e=Pt(e,t,l),e}function Nd(e,t,a,n){return ka(),t.flags|=256,Ze(e,t,a,n),t.child}var Yr={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Qr(e){return{baseLanes:e,cachePool:gc()}}function kr(e,t,a){return e=e!==null?e.childLanes&~a:0,t&&(e|=yt),e}function jd(e,t,a){var n=t.pendingProps,l=!1,o=(t.flags&128)!==0,r;if((r=o)||(r=e!==null&&e.memoizedState===null?!1:(ze.current&2)!==0),r&&(l=!0,t.flags&=-129),r=(t.flags&32)!==0,t.flags&=-33,e===null){if(ce){if(l?Ea(t):Sa(),(e=Ae)?(e=Lf(e,Rt),e=e!==null&&e.data!=="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:ma!==null?{id:Lt,overflow:Ht}:null,retryLane:536870912,hydrationErrors:null},a=rc(e),a.return=t,t.child=a,Xe=t,Ae=null)):e=null,e===null)throw ha(t);return Ru(e)?t.lanes=32:t.lanes=536870912,null}var c=n.children;return n=n.fallback,l?(Sa(),l=t.mode,c=Do({mode:"hidden",children:c},l),n=Qa(n,l,a,null),c.return=t,n.return=t,c.sibling=n,t.child=c,n=t.child,n.memoizedState=Qr(a),n.childLanes=kr(e,r,a),t.memoizedState=Yr,vl(null,n)):(Ea(t),Xr(t,c))}var h=e.memoizedState;if(h!==null&&(c=h.dehydrated,c!==null)){if(o)t.flags&256?(Ea(t),t.flags&=-257,t=Jr(e,t,a)):t.memoizedState!==null?(Sa(),t.child=e.child,t.flags|=128,t=null):(Sa(),c=n.fallback,l=t.mode,n=Do({mode:"visible",children:n.children},l),c=Qa(c,l,a,null),c.flags|=2,n.return=t,c.return=t,n.sibling=c,t.child=n,Ia(t,e.child,null,a),n=t.child,n.memoizedState=Qr(a),n.childLanes=kr(e,r,a),t.memoizedState=Yr,t=vl(null,n));else if(Ea(t),Ru(c)){if(r=c.nextSibling&&c.nextSibling.dataset,r)var C=r.dgst;r=C,n=Error(u(419)),n.stack="",n.digest=r,il({value:n,source:null,stack:null}),t=Jr(e,t,a)}else if(Le||En(e,t,a,!1),r=(a&e.childLanes)!==0,Le||r){if(r=Ce,r!==null&&(n=ps(r,a),n!==0&&n!==h.retryLane))throw h.retryLane=n,Ya(e,n),it(r,e,n),Vr;Au(c)||Qo(),t=Jr(e,t,a)}else Au(c)?(t.flags|=192,t.child=e.child,t=null):(e=h.treeContext,Ae=jt(c.nextSibling),Xe=t,ce=!0,pa=null,Rt=!1,e!==null&&cc(t,e),t=Xr(t,n.children),t.flags|=4096);return t}return l?(Sa(),c=n.fallback,l=t.mode,h=e.child,C=h.sibling,n=Zt(h,{mode:"hidden",children:n.children}),n.subtreeFlags=h.subtreeFlags&65011712,C!==null?c=Zt(C,c):(c=Qa(c,l,a,null),c.flags|=2),c.return=t,n.return=t,n.sibling=c,t.child=n,vl(null,n),n=t.child,c=e.child.memoizedState,c===null?c=Qr(a):(l=c.cachePool,l!==null?(h=Ue._currentValue,l=l.parent!==h?{parent:h,pool:h}:l):l=gc(),c={baseLanes:c.baseLanes|a,cachePool:l}),n.memoizedState=c,n.childLanes=kr(e,r,a),t.memoizedState=Yr,vl(e.child,n)):(Ea(t),a=e.child,e=a.sibling,a=Zt(a,{mode:"visible",children:n.children}),a.return=t,a.sibling=null,e!==null&&(r=t.deletions,r===null?(t.deletions=[e],t.flags|=16):r.push(e)),t.child=a,t.memoizedState=null,a)}function Xr(e,t){return t=Do({mode:"visible",children:t},e.mode),t.return=e,e.child=t}function Do(e,t){return e=mt(22,e,null,t),e.lanes=0,e}function Jr(e,t,a){return Ia(t,e.child,null,a),e=Xr(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Od(e,t,a){e.lanes|=t;var n=e.alternate;n!==null&&(n.lanes|=t),rr(e.return,t,a)}function Zr(e,t,a,n,l,o){var r=e.memoizedState;r===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:n,tail:a,tailMode:l,treeForkCount:o}:(r.isBackwards=t,r.rendering=null,r.renderingStartTime=0,r.last=n,r.tail=a,r.tailMode=l,r.treeForkCount=o)}function Md(e,t,a){var n=t.pendingProps,l=n.revealOrder,o=n.tail;n=n.children;var r=ze.current,c=(r&2)!==0;if(c?(r=r&1|2,t.flags|=128):r&=1,V(ze,r),Ze(e,t,n,a),n=ce?ol:0,!c&&e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Od(e,a,t);else if(e.tag===19)Od(e,a,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(l){case"forwards":for(a=t.child,l=null;a!==null;)e=a.alternate,e!==null&&To(e)===null&&(l=a),a=a.sibling;a=l,a===null?(l=t.child,t.child=null):(l=a.sibling,a.sibling=null),Zr(t,!1,l,a,o,n);break;case"backwards":case"unstable_legacy-backwards":for(a=null,l=t.child,t.child=null;l!==null;){if(e=l.alternate,e!==null&&To(e)===null){t.child=l;break}e=l.sibling,l.sibling=a,a=l,l=e}Zr(t,!0,a,null,o,n);break;case"together":Zr(t,!1,null,null,void 0,n);break;default:t.memoizedState=null}return t.child}function Pt(e,t,a){if(e!==null&&(t.dependencies=e.dependencies),Ca|=t.lanes,(a&t.childLanes)===0)if(e!==null){if(En(e,t,a,!1),(a&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(u(153));if(t.child!==null){for(e=t.child,a=Zt(e,e.pendingProps),t.child=a,a.return=t;e.sibling!==null;)e=e.sibling,a=a.sibling=Zt(e,e.pendingProps),a.return=t;a.sibling=null}return t.child}function Kr(e,t){return(e.lanes&t)!==0?!0:(e=e.dependencies,!!(e!==null&&po(e)))}function Mh(e,t,a){switch(t.tag){case 3:We(t,t.stateNode.containerInfo),ga(t,Ue,e.memoizedState.cache),ka();break;case 27:case 5:kn(t);break;case 4:We(t,t.stateNode.containerInfo);break;case 10:ga(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,br(t),null;break;case 13:var n=t.memoizedState;if(n!==null)return n.dehydrated!==null?(Ea(t),t.flags|=128,null):(a&t.child.childLanes)!==0?jd(e,t,a):(Ea(t),e=Pt(e,t,a),e!==null?e.sibling:null);Ea(t);break;case 19:var l=(e.flags&128)!==0;if(n=(a&t.childLanes)!==0,n||(En(e,t,a,!1),n=(a&t.childLanes)!==0),l){if(n)return Md(e,t,a);t.flags|=128}if(l=t.memoizedState,l!==null&&(l.rendering=null,l.tail=null,l.lastEffect=null),V(ze,ze.current),n)break;return null;case 22:return t.lanes=0,Td(e,t,a,t.pendingProps);case 24:ga(t,Ue,e.memoizedState.cache)}return Pt(e,t,a)}function _d(e,t,a){if(e!==null)if(e.memoizedProps!==t.pendingProps)Le=!0;else{if(!Kr(e,a)&&(t.flags&128)===0)return Le=!1,Mh(e,t,a);Le=(e.flags&131072)!==0}else Le=!1,ce&&(t.flags&1048576)!==0&&sc(t,ol,t.index);switch(t.lanes=0,t.tag){case 16:e:{var n=t.pendingProps;if(e=Ka(t.elementType),t.type=e,typeof e=="function")Pi(e)?(n=Wa(e,n),t.tag=1,t=Rd(null,t,e,n,a)):(t.tag=0,t=Gr(null,t,e,n,a));else{if(e!=null){var l=e.$$typeof;if(l===de){t.tag=11,t=bd(null,t,e,n,a);break e}else if(l===F){t.tag=14,t=Ed(null,t,e,n,a);break e}}throw t=Qt(e)||e,Error(u(306,t,""))}}return t;case 0:return Gr(e,t,t.type,t.pendingProps,a);case 1:return n=t.type,l=Wa(n,t.pendingProps),Rd(e,t,n,l,a);case 3:e:{if(We(t,t.stateNode.containerInfo),e===null)throw Error(u(387));n=t.pendingProps;var o=t.memoizedState;l=o.element,pr(e,t),ml(t,n,null,a);var r=t.memoizedState;if(n=r.cache,ga(t,Ue,n),n!==o.cache&&ur(t,[Ue],a,!0),fl(),n=r.element,o.isDehydrated)if(o={element:n,isDehydrated:!1,cache:r.cache},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){t=Nd(e,t,n,a);break e}else if(n!==l){l=xt(Error(u(424)),t),il(l),t=Nd(e,t,n,a);break e}else for(e=t.stateNode.containerInfo,e.nodeType===9?e=e.body:e=e.nodeName==="HTML"?e.ownerDocument.body:e,Ae=jt(e.firstChild),Xe=t,ce=!0,pa=null,Rt=!0,a=Tc(t,null,n,a),t.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(ka(),n===l){t=Pt(e,t,a);break e}Ze(e,t,n,a)}t=t.child}return t;case 26:return zo(e,t),e===null?(a=Qf(t.type,null,t.pendingProps,null))?t.memoizedState=a:ce||(a=t.type,e=t.pendingProps,n=Io(oe.current).createElement(a),n[ke]=t,n[et]=e,Ke(n,a,e),Ve(n),t.stateNode=n):t.memoizedState=Qf(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return kn(t),e===null&&ce&&(n=t.stateNode=Vf(t.type,t.pendingProps,oe.current),Xe=t,Rt=!0,l=Ae,Oa(t.type)?(Nu=l,Ae=jt(n.firstChild)):Ae=l),Ze(e,t,t.pendingProps.children,a),zo(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&ce&&((l=n=Ae)&&(n=ig(n,t.type,t.pendingProps,Rt),n!==null?(t.stateNode=n,Xe=t,Ae=jt(n.firstChild),Rt=!1,l=!0):l=!1),l||ha(t)),kn(t),l=t.type,o=t.pendingProps,r=e!==null?e.memoizedProps:null,n=o.children,Tu(l,o)?n=null:r!==null&&Tu(l,r)&&(t.flags|=32),t.memoizedState!==null&&(l=Sr(e,t,Sh,null,null,a),zl._currentValue=l),zo(e,t),Ze(e,t,n,a),t.child;case 6:return e===null&&ce&&((e=a=Ae)&&(a=rg(a,t.pendingProps,Rt),a!==null?(t.stateNode=a,Xe=t,Ae=null,e=!0):e=!1),e||ha(t)),null;case 13:return jd(e,t,a);case 4:return We(t,t.stateNode.containerInfo),n=t.pendingProps,e===null?t.child=Ia(t,null,n,a):Ze(e,t,n,a),t.child;case 11:return bd(e,t,t.type,t.pendingProps,a);case 7:return Ze(e,t,t.pendingProps,a),t.child;case 8:return Ze(e,t,t.pendingProps.children,a),t.child;case 12:return Ze(e,t,t.pendingProps.children,a),t.child;case 10:return n=t.pendingProps,ga(t,t.type,n.value),Ze(e,t,n.children,a),t.child;case 9:return l=t.type._context,n=t.pendingProps.children,Ja(t),l=Je(l),n=n(l),t.flags|=1,Ze(e,t,n,a),t.child;case 14:return Ed(e,t,t.type,t.pendingProps,a);case 15:return Sd(e,t,t.type,t.pendingProps,a);case 19:return Md(e,t,a);case 31:return Oh(e,t,a);case 22:return Td(e,t,a,t.pendingProps);case 24:return Ja(t),n=Je(Ue),e===null?(l=dr(),l===null&&(l=Ce,o=sr(),l.pooledCache=o,o.refCount++,o!==null&&(l.pooledCacheLanes|=a),l=o),t.memoizedState={parent:n,cache:l},mr(t),ga(t,Ue,l)):((e.lanes&a)!==0&&(pr(e,t),ml(t,null,null,a),fl()),l=e.memoizedState,o=t.memoizedState,l.parent!==n?(l={parent:n,cache:n},t.memoizedState=l,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=l),ga(t,Ue,n)):(n=o.cache,ga(t,Ue,n),n!==l.cache&&ur(t,[Ue],a,!0))),Ze(e,t,t.pendingProps.children,a),t.child;case 29:throw t.pendingProps}throw Error(u(156,t.tag))}function ea(e){e.flags|=4}function $r(e,t,a,n,l){if((t=(e.mode&32)!==0)&&(t=!1),t){if(e.flags|=16777216,(l&335544128)===l)if(e.stateNode.complete)e.flags|=8192;else if(lf())e.flags|=8192;else throw $a=vo,fr}else e.flags&=-16777217}function wd(e,t){if(t.type!=="stylesheet"||(t.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!Kf(t))if(lf())e.flags|=8192;else throw $a=vo,fr}function Uo(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag!==22?ds():536870912,e.lanes|=t,wn|=t)}function bl(e,t){if(!ce)switch(e.tailMode){case"hidden":t=e.tail;for(var a=null;t!==null;)t.alternate!==null&&(a=t),t=t.sibling;a===null?e.tail=null:a.sibling=null;break;case"collapsed":a=e.tail;for(var n=null;a!==null;)a.alternate!==null&&(n=a),a=a.sibling;n===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:n.sibling=null}}function Re(e){var t=e.alternate!==null&&e.alternate.child===e.child,a=0,n=0;if(t)for(var l=e.child;l!==null;)a|=l.lanes|l.childLanes,n|=l.subtreeFlags&65011712,n|=l.flags&65011712,l.return=e,l=l.sibling;else for(l=e.child;l!==null;)a|=l.lanes|l.childLanes,n|=l.subtreeFlags,n|=l.flags,l.return=e,l=l.sibling;return e.subtreeFlags|=n,e.childLanes=a,t}function _h(e,t,a){var n=t.pendingProps;switch(nr(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Re(t),null;case 1:return Re(t),null;case 3:return a=t.stateNode,n=null,e!==null&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),It(Ue),we(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(bn(t)?ea(t):e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,or())),Re(t),null;case 26:var l=t.type,o=t.memoizedState;return e===null?(ea(t),o!==null?(Re(t),wd(t,o)):(Re(t),$r(t,l,null,n,a))):o?o!==e.memoizedState?(ea(t),Re(t),wd(t,o)):(Re(t),t.flags&=-16777217):(e=e.memoizedProps,e!==n&&ea(t),Re(t),$r(t,l,e,n,a)),null;case 27:if(Xl(t),a=oe.current,l=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==n&&ea(t);else{if(!n){if(t.stateNode===null)throw Error(u(166));return Re(t),null}e=X.current,bn(t)?dc(t):(e=Vf(l,n,a),t.stateNode=e,ea(t))}return Re(t),null;case 5:if(Xl(t),l=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==n&&ea(t);else{if(!n){if(t.stateNode===null)throw Error(u(166));return Re(t),null}if(o=X.current,bn(t))dc(t);else{var r=Io(oe.current);switch(o){case 1:o=r.createElementNS("http://www.w3.org/2000/svg",l);break;case 2:o=r.createElementNS("http://www.w3.org/1998/Math/MathML",l);break;default:switch(l){case"svg":o=r.createElementNS("http://www.w3.org/2000/svg",l);break;case"math":o=r.createElementNS("http://www.w3.org/1998/Math/MathML",l);break;case"script":o=r.createElement("div"),o.innerHTML="<script><\/script>",o=o.removeChild(o.firstChild);break;case"select":o=typeof n.is=="string"?r.createElement("select",{is:n.is}):r.createElement("select"),n.multiple?o.multiple=!0:n.size&&(o.size=n.size);break;default:o=typeof n.is=="string"?r.createElement(l,{is:n.is}):r.createElement(l)}}o[ke]=t,o[et]=n;e:for(r=t.child;r!==null;){if(r.tag===5||r.tag===6)o.appendChild(r.stateNode);else if(r.tag!==4&&r.tag!==27&&r.child!==null){r.child.return=r,r=r.child;continue}if(r===t)break e;for(;r.sibling===null;){if(r.return===null||r.return===t)break e;r=r.return}r.sibling.return=r.return,r=r.sibling}t.stateNode=o;e:switch(Ke(o,l,n),l){case"button":case"input":case"select":case"textarea":n=!!n.autoFocus;break e;case"img":n=!0;break e;default:n=!1}n&&ea(t)}}return Re(t),$r(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,a),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==n&&ea(t);else{if(typeof n!="string"&&t.stateNode===null)throw Error(u(166));if(e=oe.current,bn(t)){if(e=t.stateNode,a=t.memoizedProps,n=null,l=Xe,l!==null)switch(l.tag){case 27:case 5:n=l.memoizedProps}e[ke]=t,e=!!(e.nodeValue===a||n!==null&&n.suppressHydrationWarning===!0||Of(e.nodeValue,a)),e||ha(t,!0)}else e=Io(e).createTextNode(n),e[ke]=t,t.stateNode=e}return Re(t),null;case 31:if(a=t.memoizedState,e===null||e.memoizedState!==null){if(n=bn(t),a!==null){if(e===null){if(!n)throw Error(u(318));if(e=t.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(u(557));e[ke]=t}else ka(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Re(t),e=!1}else a=or(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),e=!0;if(!e)return t.flags&256?(ht(t),t):(ht(t),null);if((t.flags&128)!==0)throw Error(u(558))}return Re(t),null;case 13:if(n=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(l=bn(t),n!==null&&n.dehydrated!==null){if(e===null){if(!l)throw Error(u(318));if(l=t.memoizedState,l=l!==null?l.dehydrated:null,!l)throw Error(u(317));l[ke]=t}else ka(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Re(t),l=!1}else l=or(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=l),l=!0;if(!l)return t.flags&256?(ht(t),t):(ht(t),null)}return ht(t),(t.flags&128)!==0?(t.lanes=a,t):(a=n!==null,e=e!==null&&e.memoizedState!==null,a&&(n=t.child,l=null,n.alternate!==null&&n.alternate.memoizedState!==null&&n.alternate.memoizedState.cachePool!==null&&(l=n.alternate.memoizedState.cachePool.pool),o=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(o=n.memoizedState.cachePool.pool),o!==l&&(n.flags|=2048)),a!==e&&a&&(t.child.flags|=8192),Uo(t,t.updateQueue),Re(t),null);case 4:return we(),e===null&&yu(t.stateNode.containerInfo),Re(t),null;case 10:return It(t.type),Re(t),null;case 19:if(D(ze),n=t.memoizedState,n===null)return Re(t),null;if(l=(t.flags&128)!==0,o=n.rendering,o===null)if(l)bl(n,!1);else{if(_e!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(o=To(e),o!==null){for(t.flags|=128,bl(n,!1),e=o.updateQueue,t.updateQueue=e,Uo(t,e),t.subtreeFlags=0,e=a,a=t.child;a!==null;)ic(a,e),a=a.sibling;return V(ze,ze.current&1|2),ce&&Kt(t,n.treeForkCount),t.child}e=e.sibling}n.tail!==null&&st()>Vo&&(t.flags|=128,l=!0,bl(n,!1),t.lanes=4194304)}else{if(!l)if(e=To(o),e!==null){if(t.flags|=128,l=!0,e=e.updateQueue,t.updateQueue=e,Uo(t,e),bl(n,!0),n.tail===null&&n.tailMode==="hidden"&&!o.alternate&&!ce)return Re(t),null}else 2*st()-n.renderingStartTime>Vo&&a!==536870912&&(t.flags|=128,l=!0,bl(n,!1),t.lanes=4194304);n.isBackwards?(o.sibling=t.child,t.child=o):(e=n.last,e!==null?e.sibling=o:t.child=o,n.last=o)}return n.tail!==null?(e=n.tail,n.rendering=e,n.tail=e.sibling,n.renderingStartTime=st(),e.sibling=null,a=ze.current,V(ze,l?a&1|2:a&1),ce&&Kt(t,n.treeForkCount),e):(Re(t),null);case 22:case 23:return ht(t),vr(),n=t.memoizedState!==null,e!==null?e.memoizedState!==null!==n&&(t.flags|=8192):n&&(t.flags|=8192),n?(a&536870912)!==0&&(t.flags&128)===0&&(Re(t),t.subtreeFlags&6&&(t.flags|=8192)):Re(t),a=t.updateQueue,a!==null&&Uo(t,a.retryQueue),a=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),n=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(n=t.memoizedState.cachePool.pool),n!==a&&(t.flags|=2048),e!==null&&D(Za),null;case 24:return a=null,e!==null&&(a=e.memoizedState.cache),t.memoizedState.cache!==a&&(t.flags|=2048),It(Ue),Re(t),null;case 25:return null;case 30:return null}throw Error(u(156,t.tag))}function wh(e,t){switch(nr(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return It(Ue),we(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return Xl(t),null;case 31:if(t.memoizedState!==null){if(ht(t),t.alternate===null)throw Error(u(340));ka()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(ht(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(u(340));ka()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return D(ze),null;case 4:return we(),null;case 10:return It(t.type),null;case 22:case 23:return ht(t),vr(),e!==null&&D(Za),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return It(Ue),null;case 25:return null;default:return null}}function zd(e,t){switch(nr(t),t.tag){case 3:It(Ue),we();break;case 26:case 27:case 5:Xl(t);break;case 4:we();break;case 31:t.memoizedState!==null&&ht(t);break;case 13:ht(t);break;case 19:D(ze);break;case 10:It(t.type);break;case 22:case 23:ht(t),vr(),e!==null&&D(Za);break;case 24:It(Ue)}}function El(e,t){try{var a=t.updateQueue,n=a!==null?a.lastEffect:null;if(n!==null){var l=n.next;a=l;do{if((a.tag&e)===e){n=void 0;var o=a.create,r=a.inst;n=o(),r.destroy=n}a=a.next}while(a!==l)}}catch(c){ve(t,t.return,c)}}function Ta(e,t,a){try{var n=t.updateQueue,l=n!==null?n.lastEffect:null;if(l!==null){var o=l.next;n=o;do{if((n.tag&e)===e){var r=n.inst,c=r.destroy;if(c!==void 0){r.destroy=void 0,l=t;var h=a,C=c;try{C()}catch(M){ve(l,h,M)}}}n=n.next}while(n!==o)}}catch(M){ve(t,t.return,M)}}function Dd(e){var t=e.updateQueue;if(t!==null){var a=e.stateNode;try{Cc(t,a)}catch(n){ve(e,e.return,n)}}}function Ud(e,t,a){a.props=Wa(e.type,e.memoizedProps),a.state=e.memoizedState;try{a.componentWillUnmount()}catch(n){ve(e,t,n)}}function Sl(e,t){try{var a=e.ref;if(a!==null){switch(e.tag){case 26:case 27:case 5:var n=e.stateNode;break;case 30:n=e.stateNode;break;default:n=e.stateNode}typeof a=="function"?e.refCleanup=a(n):a.current=n}}catch(l){ve(e,t,l)}}function Bt(e,t){var a=e.ref,n=e.refCleanup;if(a!==null)if(typeof n=="function")try{n()}catch(l){ve(e,t,l)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(l){ve(e,t,l)}else a.current=null}function qd(e){var t=e.type,a=e.memoizedProps,n=e.stateNode;try{e:switch(t){case"button":case"input":case"select":case"textarea":a.autoFocus&&n.focus();break e;case"img":a.src?n.src=a.src:a.srcSet&&(n.srcset=a.srcSet)}}catch(l){ve(e,e.return,l)}}function Ir(e,t,a){try{var n=e.stateNode;eg(n,e.type,a,t),n[et]=t}catch(l){ve(e,e.return,l)}}function Ld(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Oa(e.type)||e.tag===4}function Fr(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Ld(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Oa(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Wr(e,t,a){var n=e.tag;if(n===5||n===6)e=e.stateNode,t?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(e,t):(t=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,t.appendChild(e),a=a._reactRootContainer,a!=null||t.onclick!==null||(t.onclick=Xt));else if(n!==4&&(n===27&&Oa(e.type)&&(a=e.stateNode,t=null),e=e.child,e!==null))for(Wr(e,t,a),e=e.sibling;e!==null;)Wr(e,t,a),e=e.sibling}function qo(e,t,a){var n=e.tag;if(n===5||n===6)e=e.stateNode,t?a.insertBefore(e,t):a.appendChild(e);else if(n!==4&&(n===27&&Oa(e.type)&&(a=e.stateNode),e=e.child,e!==null))for(qo(e,t,a),e=e.sibling;e!==null;)qo(e,t,a),e=e.sibling}function Hd(e){var t=e.stateNode,a=e.memoizedProps;try{for(var n=e.type,l=t.attributes;l.length;)t.removeAttributeNode(l[0]);Ke(t,n,a),t[ke]=e,t[et]=a}catch(o){ve(e,e.return,o)}}var ta=!1,He=!1,Pr=!1,Bd=typeof WeakSet=="function"?WeakSet:Set,Ge=null;function zh(e,t){if(e=e.containerInfo,Eu=ni,e=Fs(e),Ji(e)){if("selectionStart"in e)var a={start:e.selectionStart,end:e.selectionEnd};else e:{a=(a=e.ownerDocument)&&a.defaultView||window;var n=a.getSelection&&a.getSelection();if(n&&n.rangeCount!==0){a=n.anchorNode;var l=n.anchorOffset,o=n.focusNode;n=n.focusOffset;try{a.nodeType,o.nodeType}catch{a=null;break e}var r=0,c=-1,h=-1,C=0,M=0,z=e,R=null;t:for(;;){for(var O;z!==a||l!==0&&z.nodeType!==3||(c=r+l),z!==o||n!==0&&z.nodeType!==3||(h=r+n),z.nodeType===3&&(r+=z.nodeValue.length),(O=z.firstChild)!==null;)R=z,z=O;for(;;){if(z===e)break t;if(R===a&&++C===l&&(c=r),R===o&&++M===n&&(h=r),(O=z.nextSibling)!==null)break;z=R,R=z.parentNode}z=O}a=c===-1||h===-1?null:{start:c,end:h}}else a=null}a=a||{start:0,end:0}}else a=null;for(Su={focusedElem:e,selectionRange:a},ni=!1,Ge=t;Ge!==null;)if(t=Ge,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,Ge=e;else for(;Ge!==null;){switch(t=Ge,o=t.alternate,e=t.flags,t.tag){case 0:if((e&4)!==0&&(e=t.updateQueue,e=e!==null?e.events:null,e!==null))for(a=0;a<e.length;a++)l=e[a],l.ref.impl=l.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&o!==null){e=void 0,a=t,l=o.memoizedProps,o=o.memoizedState,n=a.stateNode;try{var k=Wa(a.type,l);e=n.getSnapshotBeforeUpdate(k,o),n.__reactInternalSnapshotBeforeUpdate=e}catch(I){ve(a,a.return,I)}}break;case 3:if((e&1024)!==0){if(e=t.stateNode.containerInfo,a=e.nodeType,a===9)Cu(e);else if(a===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":Cu(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(u(163))}if(e=t.sibling,e!==null){e.return=t.return,Ge=e;break}Ge=t.return}}function Vd(e,t,a){var n=a.flags;switch(a.tag){case 0:case 11:case 15:na(e,a),n&4&&El(5,a);break;case 1:if(na(e,a),n&4)if(e=a.stateNode,t===null)try{e.componentDidMount()}catch(r){ve(a,a.return,r)}else{var l=Wa(a.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(l,t,e.__reactInternalSnapshotBeforeUpdate)}catch(r){ve(a,a.return,r)}}n&64&&Dd(a),n&512&&Sl(a,a.return);break;case 3:if(na(e,a),n&64&&(e=a.updateQueue,e!==null)){if(t=null,a.child!==null)switch(a.child.tag){case 27:case 5:t=a.child.stateNode;break;case 1:t=a.child.stateNode}try{Cc(e,t)}catch(r){ve(a,a.return,r)}}break;case 27:t===null&&n&4&&Hd(a);case 26:case 5:na(e,a),t===null&&n&4&&qd(a),n&512&&Sl(a,a.return);break;case 12:na(e,a);break;case 31:na(e,a),n&4&&Qd(e,a);break;case 13:na(e,a),n&4&&kd(e,a),n&64&&(e=a.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(a=Yh.bind(null,a),ug(e,a))));break;case 22:if(n=a.memoizedState!==null||ta,!n){t=t!==null&&t.memoizedState!==null||He,l=ta;var o=He;ta=n,(He=t)&&!o?la(e,a,(a.subtreeFlags&8772)!==0):na(e,a),ta=l,He=o}break;case 30:break;default:na(e,a)}}function Gd(e){var t=e.alternate;t!==null&&(e.alternate=null,Gd(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&Oi(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var Ne=null,at=!1;function aa(e,t,a){for(a=a.child;a!==null;)Yd(e,t,a),a=a.sibling}function Yd(e,t,a){if(ct&&typeof ct.onCommitFiberUnmount=="function")try{ct.onCommitFiberUnmount(Xn,a)}catch{}switch(a.tag){case 26:He||Bt(a,t),aa(e,t,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:He||Bt(a,t);var n=Ne,l=at;Oa(a.type)&&(Ne=a.stateNode,at=!1),aa(e,t,a),Ml(a.stateNode),Ne=n,at=l;break;case 5:He||Bt(a,t);case 6:if(n=Ne,l=at,Ne=null,aa(e,t,a),Ne=n,at=l,Ne!==null)if(at)try{(Ne.nodeType===9?Ne.body:Ne.nodeName==="HTML"?Ne.ownerDocument.body:Ne).removeChild(a.stateNode)}catch(o){ve(a,t,o)}else try{Ne.removeChild(a.stateNode)}catch(o){ve(a,t,o)}break;case 18:Ne!==null&&(at?(e=Ne,Uf(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,a.stateNode),Vn(e)):Uf(Ne,a.stateNode));break;case 4:n=Ne,l=at,Ne=a.stateNode.containerInfo,at=!0,aa(e,t,a),Ne=n,at=l;break;case 0:case 11:case 14:case 15:Ta(2,a,t),He||Ta(4,a,t),aa(e,t,a);break;case 1:He||(Bt(a,t),n=a.stateNode,typeof n.componentWillUnmount=="function"&&Ud(a,t,n)),aa(e,t,a);break;case 21:aa(e,t,a);break;case 22:He=(n=He)||a.memoizedState!==null,aa(e,t,a),He=n;break;default:aa(e,t,a)}}function Qd(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{Vn(e)}catch(a){ve(t,t.return,a)}}}function kd(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Vn(e)}catch(a){ve(t,t.return,a)}}function Dh(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new Bd),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new Bd),t;default:throw Error(u(435,e.tag))}}function Lo(e,t){var a=Dh(e);t.forEach(function(n){if(!a.has(n)){a.add(n);var l=Qh.bind(null,e,n);n.then(l,l)}})}function nt(e,t){var a=t.deletions;if(a!==null)for(var n=0;n<a.length;n++){var l=a[n],o=e,r=t,c=r;e:for(;c!==null;){switch(c.tag){case 27:if(Oa(c.type)){Ne=c.stateNode,at=!1;break e}break;case 5:Ne=c.stateNode,at=!1;break e;case 3:case 4:Ne=c.stateNode.containerInfo,at=!0;break e}c=c.return}if(Ne===null)throw Error(u(160));Yd(o,r,l),Ne=null,at=!1,o=l.alternate,o!==null&&(o.return=null),l.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)Xd(t,e),t=t.sibling}var Dt=null;function Xd(e,t){var a=e.alternate,n=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:nt(t,e),lt(e),n&4&&(Ta(3,e,e.return),El(3,e),Ta(5,e,e.return));break;case 1:nt(t,e),lt(e),n&512&&(He||a===null||Bt(a,a.return)),n&64&&ta&&(e=e.updateQueue,e!==null&&(n=e.callbacks,n!==null&&(a=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=a===null?n:a.concat(n))));break;case 26:var l=Dt;if(nt(t,e),lt(e),n&512&&(He||a===null||Bt(a,a.return)),n&4){var o=a!==null?a.memoizedState:null;if(n=e.memoizedState,a===null)if(n===null)if(e.stateNode===null){e:{n=e.type,a=e.memoizedProps,l=l.ownerDocument||l;t:switch(n){case"title":o=l.getElementsByTagName("title")[0],(!o||o[Kn]||o[ke]||o.namespaceURI==="http://www.w3.org/2000/svg"||o.hasAttribute("itemprop"))&&(o=l.createElement(n),l.head.insertBefore(o,l.querySelector("head > title"))),Ke(o,n,a),o[ke]=e,Ve(o),n=o;break e;case"link":var r=Jf("link","href",l).get(n+(a.href||""));if(r){for(var c=0;c<r.length;c++)if(o=r[c],o.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&o.getAttribute("rel")===(a.rel==null?null:a.rel)&&o.getAttribute("title")===(a.title==null?null:a.title)&&o.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){r.splice(c,1);break t}}o=l.createElement(n),Ke(o,n,a),l.head.appendChild(o);break;case"meta":if(r=Jf("meta","content",l).get(n+(a.content||""))){for(c=0;c<r.length;c++)if(o=r[c],o.getAttribute("content")===(a.content==null?null:""+a.content)&&o.getAttribute("name")===(a.name==null?null:a.name)&&o.getAttribute("property")===(a.property==null?null:a.property)&&o.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&o.getAttribute("charset")===(a.charSet==null?null:a.charSet)){r.splice(c,1);break t}}o=l.createElement(n),Ke(o,n,a),l.head.appendChild(o);break;default:throw Error(u(468,n))}o[ke]=e,Ve(o),n=o}e.stateNode=n}else Zf(l,e.type,e.stateNode);else e.stateNode=Xf(l,n,e.memoizedProps);else o!==n?(o===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):o.count--,n===null?Zf(l,e.type,e.stateNode):Xf(l,n,e.memoizedProps)):n===null&&e.stateNode!==null&&Ir(e,e.memoizedProps,a.memoizedProps)}break;case 27:nt(t,e),lt(e),n&512&&(He||a===null||Bt(a,a.return)),a!==null&&n&4&&Ir(e,e.memoizedProps,a.memoizedProps);break;case 5:if(nt(t,e),lt(e),n&512&&(He||a===null||Bt(a,a.return)),e.flags&32){l=e.stateNode;try{sn(l,"")}catch(k){ve(e,e.return,k)}}n&4&&e.stateNode!=null&&(l=e.memoizedProps,Ir(e,l,a!==null?a.memoizedProps:l)),n&1024&&(Pr=!0);break;case 6:if(nt(t,e),lt(e),n&4){if(e.stateNode===null)throw Error(u(162));n=e.memoizedProps,a=e.stateNode;try{a.nodeValue=n}catch(k){ve(e,e.return,k)}}break;case 3:if(Po=null,l=Dt,Dt=Fo(t.containerInfo),nt(t,e),Dt=l,lt(e),n&4&&a!==null&&a.memoizedState.isDehydrated)try{Vn(t.containerInfo)}catch(k){ve(e,e.return,k)}Pr&&(Pr=!1,Jd(e));break;case 4:n=Dt,Dt=Fo(e.stateNode.containerInfo),nt(t,e),lt(e),Dt=n;break;case 12:nt(t,e),lt(e);break;case 31:nt(t,e),lt(e),n&4&&(n=e.updateQueue,n!==null&&(e.updateQueue=null,Lo(e,n)));break;case 13:nt(t,e),lt(e),e.child.flags&8192&&e.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(Bo=st()),n&4&&(n=e.updateQueue,n!==null&&(e.updateQueue=null,Lo(e,n)));break;case 22:l=e.memoizedState!==null;var h=a!==null&&a.memoizedState!==null,C=ta,M=He;if(ta=C||l,He=M||h,nt(t,e),He=M,ta=C,lt(e),n&8192)e:for(t=e.stateNode,t._visibility=l?t._visibility&-2:t._visibility|1,l&&(a===null||h||ta||He||Pa(e)),a=null,t=e;;){if(t.tag===5||t.tag===26){if(a===null){h=a=t;try{if(o=h.stateNode,l)r=o.style,typeof r.setProperty=="function"?r.setProperty("display","none","important"):r.display="none";else{c=h.stateNode;var z=h.memoizedProps.style,R=z!=null&&z.hasOwnProperty("display")?z.display:null;c.style.display=R==null||typeof R=="boolean"?"":(""+R).trim()}}catch(k){ve(h,h.return,k)}}}else if(t.tag===6){if(a===null){h=t;try{h.stateNode.nodeValue=l?"":h.memoizedProps}catch(k){ve(h,h.return,k)}}}else if(t.tag===18){if(a===null){h=t;try{var O=h.stateNode;l?qf(O,!0):qf(h.stateNode,!1)}catch(k){ve(h,h.return,k)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;a===t&&(a=null),t=t.return}a===t&&(a=null),t.sibling.return=t.return,t=t.sibling}n&4&&(n=e.updateQueue,n!==null&&(a=n.retryQueue,a!==null&&(n.retryQueue=null,Lo(e,a))));break;case 19:nt(t,e),lt(e),n&4&&(n=e.updateQueue,n!==null&&(e.updateQueue=null,Lo(e,n)));break;case 30:break;case 21:break;default:nt(t,e),lt(e)}}function lt(e){var t=e.flags;if(t&2){try{for(var a,n=e.return;n!==null;){if(Ld(n)){a=n;break}n=n.return}if(a==null)throw Error(u(160));switch(a.tag){case 27:var l=a.stateNode,o=Fr(e);qo(e,o,l);break;case 5:var r=a.stateNode;a.flags&32&&(sn(r,""),a.flags&=-33);var c=Fr(e);qo(e,c,r);break;case 3:case 4:var h=a.stateNode.containerInfo,C=Fr(e);Wr(e,C,h);break;default:throw Error(u(161))}}catch(M){ve(e,e.return,M)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Jd(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;Jd(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function na(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)Vd(e,t.alternate,t),t=t.sibling}function Pa(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:Ta(4,t,t.return),Pa(t);break;case 1:Bt(t,t.return);var a=t.stateNode;typeof a.componentWillUnmount=="function"&&Ud(t,t.return,a),Pa(t);break;case 27:Ml(t.stateNode);case 26:case 5:Bt(t,t.return),Pa(t);break;case 22:t.memoizedState===null&&Pa(t);break;case 30:Pa(t);break;default:Pa(t)}e=e.sibling}}function la(e,t,a){for(a=a&&(t.subtreeFlags&8772)!==0,t=t.child;t!==null;){var n=t.alternate,l=e,o=t,r=o.flags;switch(o.tag){case 0:case 11:case 15:la(l,o,a),El(4,o);break;case 1:if(la(l,o,a),n=o,l=n.stateNode,typeof l.componentDidMount=="function")try{l.componentDidMount()}catch(C){ve(n,n.return,C)}if(n=o,l=n.updateQueue,l!==null){var c=n.stateNode;try{var h=l.shared.hiddenCallbacks;if(h!==null)for(l.shared.hiddenCallbacks=null,l=0;l<h.length;l++)xc(h[l],c)}catch(C){ve(n,n.return,C)}}a&&r&64&&Dd(o),Sl(o,o.return);break;case 27:Hd(o);case 26:case 5:la(l,o,a),a&&n===null&&r&4&&qd(o),Sl(o,o.return);break;case 12:la(l,o,a);break;case 31:la(l,o,a),a&&r&4&&Qd(l,o);break;case 13:la(l,o,a),a&&r&4&&kd(l,o);break;case 22:o.memoizedState===null&&la(l,o,a),Sl(o,o.return);break;case 30:break;default:la(l,o,a)}t=t.sibling}}function eu(e,t){var a=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==a&&(e!=null&&e.refCount++,a!=null&&rl(a))}function tu(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&rl(e))}function Ut(e,t,a,n){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)Zd(e,t,a,n),t=t.sibling}function Zd(e,t,a,n){var l=t.flags;switch(t.tag){case 0:case 11:case 15:Ut(e,t,a,n),l&2048&&El(9,t);break;case 1:Ut(e,t,a,n);break;case 3:Ut(e,t,a,n),l&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&rl(e)));break;case 12:if(l&2048){Ut(e,t,a,n),e=t.stateNode;try{var o=t.memoizedProps,r=o.id,c=o.onPostCommit;typeof c=="function"&&c(r,t.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(h){ve(t,t.return,h)}}else Ut(e,t,a,n);break;case 31:Ut(e,t,a,n);break;case 13:Ut(e,t,a,n);break;case 23:break;case 22:o=t.stateNode,r=t.alternate,t.memoizedState!==null?o._visibility&2?Ut(e,t,a,n):Tl(e,t):o._visibility&2?Ut(e,t,a,n):(o._visibility|=2,On(e,t,a,n,(t.subtreeFlags&10256)!==0||!1)),l&2048&&eu(r,t);break;case 24:Ut(e,t,a,n),l&2048&&tu(t.alternate,t);break;default:Ut(e,t,a,n)}}function On(e,t,a,n,l){for(l=l&&((t.subtreeFlags&10256)!==0||!1),t=t.child;t!==null;){var o=e,r=t,c=a,h=n,C=r.flags;switch(r.tag){case 0:case 11:case 15:On(o,r,c,h,l),El(8,r);break;case 23:break;case 22:var M=r.stateNode;r.memoizedState!==null?M._visibility&2?On(o,r,c,h,l):Tl(o,r):(M._visibility|=2,On(o,r,c,h,l)),l&&C&2048&&eu(r.alternate,r);break;case 24:On(o,r,c,h,l),l&&C&2048&&tu(r.alternate,r);break;default:On(o,r,c,h,l)}t=t.sibling}}function Tl(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var a=e,n=t,l=n.flags;switch(n.tag){case 22:Tl(a,n),l&2048&&eu(n.alternate,n);break;case 24:Tl(a,n),l&2048&&tu(n.alternate,n);break;default:Tl(a,n)}t=t.sibling}}var xl=8192;function Mn(e,t,a){if(e.subtreeFlags&xl)for(e=e.child;e!==null;)Kd(e,t,a),e=e.sibling}function Kd(e,t,a){switch(e.tag){case 26:Mn(e,t,a),e.flags&xl&&e.memoizedState!==null&&Eg(a,Dt,e.memoizedState,e.memoizedProps);break;case 5:Mn(e,t,a);break;case 3:case 4:var n=Dt;Dt=Fo(e.stateNode.containerInfo),Mn(e,t,a),Dt=n;break;case 22:e.memoizedState===null&&(n=e.alternate,n!==null&&n.memoizedState!==null?(n=xl,xl=16777216,Mn(e,t,a),xl=n):Mn(e,t,a));break;default:Mn(e,t,a)}}function $d(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function Cl(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var a=0;a<t.length;a++){var n=t[a];Ge=n,Fd(n,e)}$d(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Id(e),e=e.sibling}function Id(e){switch(e.tag){case 0:case 11:case 15:Cl(e),e.flags&2048&&Ta(9,e,e.return);break;case 3:Cl(e);break;case 12:Cl(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,Ho(e)):Cl(e);break;default:Cl(e)}}function Ho(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var a=0;a<t.length;a++){var n=t[a];Ge=n,Fd(n,e)}$d(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:Ta(8,t,t.return),Ho(t);break;case 22:a=t.stateNode,a._visibility&2&&(a._visibility&=-3,Ho(t));break;default:Ho(t)}e=e.sibling}}function Fd(e,t){for(;Ge!==null;){var a=Ge;switch(a.tag){case 0:case 11:case 15:Ta(8,a,t);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var n=a.memoizedState.cachePool.pool;n!=null&&n.refCount++}break;case 24:rl(a.memoizedState.cache)}if(n=a.child,n!==null)n.return=a,Ge=n;else e:for(a=e;Ge!==null;){n=Ge;var l=n.sibling,o=n.return;if(Gd(n),n===a){Ge=null;break e}if(l!==null){l.return=o,Ge=l;break e}Ge=o}}}var Uh={getCacheForType:function(e){var t=Je(Ue),a=t.data.get(e);return a===void 0&&(a=e(),t.data.set(e,a)),a},cacheSignal:function(){return Je(Ue).controller.signal}},qh=typeof WeakMap=="function"?WeakMap:Map,he=0,Ce=null,ie=null,ue=0,ye=0,gt=null,xa=!1,_n=!1,au=!1,oa=0,_e=0,Ca=0,en=0,nu=0,yt=0,wn=0,Al=null,ot=null,lu=!1,Bo=0,Wd=0,Vo=1/0,Go=null,Aa=null,Be=0,Ra=null,zn=null,ia=0,ou=0,iu=null,Pd=null,Rl=0,ru=null;function vt(){return(he&2)!==0&&ue!==0?ue&-ue:_.T!==null?mu():hs()}function ef(){if(yt===0)if((ue&536870912)===0||ce){var e=Kl;Kl<<=1,(Kl&3932160)===0&&(Kl=262144),yt=e}else yt=536870912;return e=pt.current,e!==null&&(e.flags|=32),yt}function it(e,t,a){(e===Ce&&(ye===2||ye===9)||e.cancelPendingCommit!==null)&&(Dn(e,0),Na(e,ue,yt,!1)),Zn(e,a),((he&2)===0||e!==Ce)&&(e===Ce&&((he&2)===0&&(en|=a),_e===4&&Na(e,ue,yt,!1)),Vt(e))}function tf(e,t,a){if((he&6)!==0)throw Error(u(327));var n=!a&&(t&127)===0&&(t&e.expiredLanes)===0||Jn(e,t),l=n?Bh(e,t):su(e,t,!0),o=n;do{if(l===0){_n&&!n&&Na(e,t,0,!1);break}else{if(a=e.current.alternate,o&&!Lh(a)){l=su(e,t,!1),o=!1;continue}if(l===2){if(o=t,e.errorRecoveryDisabledLanes&o)var r=0;else r=e.pendingLanes&-536870913,r=r!==0?r:r&536870912?536870912:0;if(r!==0){t=r;e:{var c=e;l=Al;var h=c.current.memoizedState.isDehydrated;if(h&&(Dn(c,r).flags|=256),r=su(c,r,!1),r!==2){if(au&&!h){c.errorRecoveryDisabledLanes|=o,en|=o,l=4;break e}o=ot,ot=l,o!==null&&(ot===null?ot=o:ot.push.apply(ot,o))}l=r}if(o=!1,l!==2)continue}}if(l===1){Dn(e,0),Na(e,t,0,!0);break}e:{switch(n=e,o=l,o){case 0:case 1:throw Error(u(345));case 4:if((t&4194048)!==t)break;case 6:Na(n,t,yt,!xa);break e;case 2:ot=null;break;case 3:case 5:break;default:throw Error(u(329))}if((t&62914560)===t&&(l=Bo+300-st(),10<l)){if(Na(n,t,yt,!xa),Il(n,0,!0)!==0)break e;ia=t,n.timeoutHandle=zf(af.bind(null,n,a,ot,Go,lu,t,yt,en,wn,xa,o,"Throttled",-0,0),l);break e}af(n,a,ot,Go,lu,t,yt,en,wn,xa,o,null,-0,0)}}break}while(!0);Vt(e)}function af(e,t,a,n,l,o,r,c,h,C,M,z,R,O){if(e.timeoutHandle=-1,z=t.subtreeFlags,z&8192||(z&16785408)===16785408){z={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Xt},Kd(t,o,z);var k=(o&62914560)===o?Bo-st():(o&4194048)===o?Wd-st():0;if(k=Sg(z,k),k!==null){ia=o,e.cancelPendingCommit=k(df.bind(null,e,t,o,a,n,l,r,c,h,M,z,null,R,O)),Na(e,o,r,!C);return}}df(e,t,o,a,n,l,r,c,h)}function Lh(e){for(var t=e;;){var a=t.tag;if((a===0||a===11||a===15)&&t.flags&16384&&(a=t.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var n=0;n<a.length;n++){var l=a[n],o=l.getSnapshot;l=l.value;try{if(!ft(o(),l))return!1}catch{return!1}}if(a=t.child,t.subtreeFlags&16384&&a!==null)a.return=t,t=a;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Na(e,t,a,n){t&=~nu,t&=~en,e.suspendedLanes|=t,e.pingedLanes&=~t,n&&(e.warmLanes|=t),n=e.expirationTimes;for(var l=t;0<l;){var o=31-dt(l),r=1<<o;n[o]=-1,l&=~r}a!==0&&fs(e,a,t)}function Yo(){return(he&6)===0?(Nl(0),!1):!0}function uu(){if(ie!==null){if(ye===0)var e=ie.return;else e=ie,$t=Xa=null,Cr(e),Cn=null,sl=0,e=ie;for(;e!==null;)zd(e.alternate,e),e=e.return;ie=null}}function Dn(e,t){var a=e.timeoutHandle;a!==-1&&(e.timeoutHandle=-1,ng(a)),a=e.cancelPendingCommit,a!==null&&(e.cancelPendingCommit=null,a()),ia=0,uu(),Ce=e,ie=a=Zt(e.current,null),ue=t,ye=0,gt=null,xa=!1,_n=Jn(e,t),au=!1,wn=yt=nu=en=Ca=_e=0,ot=Al=null,lu=!1,(t&8)!==0&&(t|=t&32);var n=e.entangledLanes;if(n!==0)for(e=e.entanglements,n&=t;0<n;){var l=31-dt(n),o=1<<l;t|=e[l],n&=~o}return oa=t,uo(),a}function nf(e,t){te=null,_.H=yl,t===xn||t===yo?(t=bc(),ye=3):t===fr?(t=bc(),ye=4):ye=t===Vr?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,gt=t,ie===null&&(_e=1,_o(e,xt(t,e.current)))}function lf(){var e=pt.current;return e===null?!0:(ue&4194048)===ue?Nt===null:(ue&62914560)===ue||(ue&536870912)!==0?e===Nt:!1}function of(){var e=_.H;return _.H=yl,e===null?yl:e}function rf(){var e=_.A;return _.A=Uh,e}function Qo(){_e=4,xa||(ue&4194048)!==ue&&pt.current!==null||(_n=!0),(Ca&134217727)===0&&(en&134217727)===0||Ce===null||Na(Ce,ue,yt,!1)}function su(e,t,a){var n=he;he|=2;var l=of(),o=rf();(Ce!==e||ue!==t)&&(Go=null,Dn(e,t)),t=!1;var r=_e;e:do try{if(ye!==0&&ie!==null){var c=ie,h=gt;switch(ye){case 8:uu(),r=6;break e;case 3:case 2:case 9:case 6:pt.current===null&&(t=!0);var C=ye;if(ye=0,gt=null,Un(e,c,h,C),a&&_n){r=0;break e}break;default:C=ye,ye=0,gt=null,Un(e,c,h,C)}}Hh(),r=_e;break}catch(M){nf(e,M)}while(!0);return t&&e.shellSuspendCounter++,$t=Xa=null,he=n,_.H=l,_.A=o,ie===null&&(Ce=null,ue=0,uo()),r}function Hh(){for(;ie!==null;)uf(ie)}function Bh(e,t){var a=he;he|=2;var n=of(),l=rf();Ce!==e||ue!==t?(Go=null,Vo=st()+500,Dn(e,t)):_n=Jn(e,t);e:do try{if(ye!==0&&ie!==null){t=ie;var o=gt;t:switch(ye){case 1:ye=0,gt=null,Un(e,t,o,1);break;case 2:case 9:if(yc(o)){ye=0,gt=null,sf(t);break}t=function(){ye!==2&&ye!==9||Ce!==e||(ye=7),Vt(e)},o.then(t,t);break e;case 3:ye=7;break e;case 4:ye=5;break e;case 7:yc(o)?(ye=0,gt=null,sf(t)):(ye=0,gt=null,Un(e,t,o,7));break;case 5:var r=null;switch(ie.tag){case 26:r=ie.memoizedState;case 5:case 27:var c=ie;if(r?Kf(r):c.stateNode.complete){ye=0,gt=null;var h=c.sibling;if(h!==null)ie=h;else{var C=c.return;C!==null?(ie=C,ko(C)):ie=null}break t}}ye=0,gt=null,Un(e,t,o,5);break;case 6:ye=0,gt=null,Un(e,t,o,6);break;case 8:uu(),_e=6;break e;default:throw Error(u(462))}}Vh();break}catch(M){nf(e,M)}while(!0);return $t=Xa=null,_.H=n,_.A=l,he=a,ie!==null?0:(Ce=null,ue=0,uo(),_e)}function Vh(){for(;ie!==null&&!sp();)uf(ie)}function uf(e){var t=_d(e.alternate,e,oa);e.memoizedProps=e.pendingProps,t===null?ko(e):ie=t}function sf(e){var t=e,a=t.alternate;switch(t.tag){case 15:case 0:t=Ad(a,t,t.pendingProps,t.type,void 0,ue);break;case 11:t=Ad(a,t,t.pendingProps,t.type.render,t.ref,ue);break;case 5:Cr(t);default:zd(a,t),t=ie=ic(t,oa),t=_d(a,t,oa)}e.memoizedProps=e.pendingProps,t===null?ko(e):ie=t}function Un(e,t,a,n){$t=Xa=null,Cr(t),Cn=null,sl=0;var l=t.return;try{if(jh(e,l,t,a,ue)){_e=1,_o(e,xt(a,e.current)),ie=null;return}}catch(o){if(l!==null)throw ie=l,o;_e=1,_o(e,xt(a,e.current)),ie=null;return}t.flags&32768?(ce||n===1?e=!0:_n||(ue&536870912)!==0?e=!1:(xa=e=!0,(n===2||n===9||n===3||n===6)&&(n=pt.current,n!==null&&n.tag===13&&(n.flags|=16384))),cf(t,e)):ko(t)}function ko(e){var t=e;do{if((t.flags&32768)!==0){cf(t,xa);return}e=t.return;var a=_h(t.alternate,t,oa);if(a!==null){ie=a;return}if(t=t.sibling,t!==null){ie=t;return}ie=t=e}while(t!==null);_e===0&&(_e=5)}function cf(e,t){do{var a=wh(e.alternate,e);if(a!==null){a.flags&=32767,ie=a;return}if(a=e.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!t&&(e=e.sibling,e!==null)){ie=e;return}ie=e=a}while(e!==null);_e=6,ie=null}function df(e,t,a,n,l,o,r,c,h){e.cancelPendingCommit=null;do Xo();while(Be!==0);if((he&6)!==0)throw Error(u(327));if(t!==null){if(t===e.current)throw Error(u(177));if(o=t.lanes|t.childLanes,o|=Fi,bp(e,a,o,r,c,h),e===Ce&&(ie=Ce=null,ue=0),zn=t,Ra=e,ia=a,ou=o,iu=l,Pd=n,(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,kh(Jl,function(){return gf(),null})):(e.callbackNode=null,e.callbackPriority=0),n=(t.flags&13878)!==0,(t.subtreeFlags&13878)!==0||n){n=_.T,_.T=null,l=B.p,B.p=2,r=he,he|=4;try{zh(e,t,a)}finally{he=r,B.p=l,_.T=n}}Be=1,ff(),mf(),pf()}}function ff(){if(Be===1){Be=0;var e=Ra,t=zn,a=(t.flags&13878)!==0;if((t.subtreeFlags&13878)!==0||a){a=_.T,_.T=null;var n=B.p;B.p=2;var l=he;he|=4;try{Xd(t,e);var o=Su,r=Fs(e.containerInfo),c=o.focusedElem,h=o.selectionRange;if(r!==c&&c&&c.ownerDocument&&Is(c.ownerDocument.documentElement,c)){if(h!==null&&Ji(c)){var C=h.start,M=h.end;if(M===void 0&&(M=C),"selectionStart"in c)c.selectionStart=C,c.selectionEnd=Math.min(M,c.value.length);else{var z=c.ownerDocument||document,R=z&&z.defaultView||window;if(R.getSelection){var O=R.getSelection(),k=c.textContent.length,I=Math.min(h.start,k),Te=h.end===void 0?I:Math.min(h.end,k);!O.extend&&I>Te&&(r=Te,Te=I,I=r);var S=$s(c,I),v=$s(c,Te);if(S&&v&&(O.rangeCount!==1||O.anchorNode!==S.node||O.anchorOffset!==S.offset||O.focusNode!==v.node||O.focusOffset!==v.offset)){var x=z.createRange();x.setStart(S.node,S.offset),O.removeAllRanges(),I>Te?(O.addRange(x),O.extend(v.node,v.offset)):(x.setEnd(v.node,v.offset),O.addRange(x))}}}}for(z=[],O=c;O=O.parentNode;)O.nodeType===1&&z.push({element:O,left:O.scrollLeft,top:O.scrollTop});for(typeof c.focus=="function"&&c.focus(),c=0;c<z.length;c++){var w=z[c];w.element.scrollLeft=w.left,w.element.scrollTop=w.top}}ni=!!Eu,Su=Eu=null}finally{he=l,B.p=n,_.T=a}}e.current=t,Be=2}}function mf(){if(Be===2){Be=0;var e=Ra,t=zn,a=(t.flags&8772)!==0;if((t.subtreeFlags&8772)!==0||a){a=_.T,_.T=null;var n=B.p;B.p=2;var l=he;he|=4;try{Vd(e,t.alternate,t)}finally{he=l,B.p=n,_.T=a}}Be=3}}function pf(){if(Be===4||Be===3){Be=0,cp();var e=Ra,t=zn,a=ia,n=Pd;(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?Be=5:(Be=0,zn=Ra=null,hf(e,e.pendingLanes));var l=e.pendingLanes;if(l===0&&(Aa=null),Ni(a),t=t.stateNode,ct&&typeof ct.onCommitFiberRoot=="function")try{ct.onCommitFiberRoot(Xn,t,void 0,(t.current.flags&128)===128)}catch{}if(n!==null){t=_.T,l=B.p,B.p=2,_.T=null;try{for(var o=e.onRecoverableError,r=0;r<n.length;r++){var c=n[r];o(c.value,{componentStack:c.stack})}}finally{_.T=t,B.p=l}}(ia&3)!==0&&Xo(),Vt(e),l=e.pendingLanes,(a&261930)!==0&&(l&42)!==0?e===ru?Rl++:(Rl=0,ru=e):Rl=0,Nl(0)}}function hf(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,rl(t)))}function Xo(){return ff(),mf(),pf(),gf()}function gf(){if(Be!==5)return!1;var e=Ra,t=ou;ou=0;var a=Ni(ia),n=_.T,l=B.p;try{B.p=32>a?32:a,_.T=null,a=iu,iu=null;var o=Ra,r=ia;if(Be=0,zn=Ra=null,ia=0,(he&6)!==0)throw Error(u(331));var c=he;if(he|=4,Id(o.current),Zd(o,o.current,r,a),he=c,Nl(0,!1),ct&&typeof ct.onPostCommitFiberRoot=="function")try{ct.onPostCommitFiberRoot(Xn,o)}catch{}return!0}finally{B.p=l,_.T=n,hf(e,t)}}function yf(e,t,a){t=xt(a,t),t=Br(e.stateNode,t,2),e=ba(e,t,2),e!==null&&(Zn(e,2),Vt(e))}function ve(e,t,a){if(e.tag===3)yf(e,e,a);else for(;t!==null;){if(t.tag===3){yf(t,e,a);break}else if(t.tag===1){var n=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof n.componentDidCatch=="function"&&(Aa===null||!Aa.has(n))){e=xt(a,e),a=yd(2),n=ba(t,a,2),n!==null&&(vd(a,n,t,e),Zn(n,2),Vt(n));break}}t=t.return}}function cu(e,t,a){var n=e.pingCache;if(n===null){n=e.pingCache=new qh;var l=new Set;n.set(t,l)}else l=n.get(t),l===void 0&&(l=new Set,n.set(t,l));l.has(a)||(au=!0,l.add(a),e=Gh.bind(null,e,t,a),t.then(e,e))}function Gh(e,t,a){var n=e.pingCache;n!==null&&n.delete(t),e.pingedLanes|=e.suspendedLanes&a,e.warmLanes&=~a,Ce===e&&(ue&a)===a&&(_e===4||_e===3&&(ue&62914560)===ue&&300>st()-Bo?(he&2)===0&&Dn(e,0):nu|=a,wn===ue&&(wn=0)),Vt(e)}function vf(e,t){t===0&&(t=ds()),e=Ya(e,t),e!==null&&(Zn(e,t),Vt(e))}function Yh(e){var t=e.memoizedState,a=0;t!==null&&(a=t.retryLane),vf(e,a)}function Qh(e,t){var a=0;switch(e.tag){case 31:case 13:var n=e.stateNode,l=e.memoizedState;l!==null&&(a=l.retryLane);break;case 19:n=e.stateNode;break;case 22:n=e.stateNode._retryCache;break;default:throw Error(u(314))}n!==null&&n.delete(t),vf(e,a)}function kh(e,t){return xi(e,t)}var Jo=null,qn=null,du=!1,Zo=!1,fu=!1,ja=0;function Vt(e){e!==qn&&e.next===null&&(qn===null?Jo=qn=e:qn=qn.next=e),Zo=!0,du||(du=!0,Jh())}function Nl(e,t){if(!fu&&Zo){fu=!0;do for(var a=!1,n=Jo;n!==null;){if(e!==0){var l=n.pendingLanes;if(l===0)var o=0;else{var r=n.suspendedLanes,c=n.pingedLanes;o=(1<<31-dt(42|e)+1)-1,o&=l&~(r&~c),o=o&201326741?o&201326741|1:o?o|2:0}o!==0&&(a=!0,Tf(n,o))}else o=ue,o=Il(n,n===Ce?o:0,n.cancelPendingCommit!==null||n.timeoutHandle!==-1),(o&3)===0||Jn(n,o)||(a=!0,Tf(n,o));n=n.next}while(a);fu=!1}}function Xh(){bf()}function bf(){Zo=du=!1;var e=0;ja!==0&&ag()&&(e=ja);for(var t=st(),a=null,n=Jo;n!==null;){var l=n.next,o=Ef(n,t);o===0?(n.next=null,a===null?Jo=l:a.next=l,l===null&&(qn=a)):(a=n,(e!==0||(o&3)!==0)&&(Zo=!0)),n=l}Be!==0&&Be!==5||Nl(e),ja!==0&&(ja=0)}function Ef(e,t){for(var a=e.suspendedLanes,n=e.pingedLanes,l=e.expirationTimes,o=e.pendingLanes&-62914561;0<o;){var r=31-dt(o),c=1<<r,h=l[r];h===-1?((c&a)===0||(c&n)!==0)&&(l[r]=vp(c,t)):h<=t&&(e.expiredLanes|=c),o&=~c}if(t=Ce,a=ue,a=Il(e,e===t?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),n=e.callbackNode,a===0||e===t&&(ye===2||ye===9)||e.cancelPendingCommit!==null)return n!==null&&n!==null&&Ci(n),e.callbackNode=null,e.callbackPriority=0;if((a&3)===0||Jn(e,a)){if(t=a&-a,t===e.callbackPriority)return t;switch(n!==null&&Ci(n),Ni(a)){case 2:case 8:a=ss;break;case 32:a=Jl;break;case 268435456:a=cs;break;default:a=Jl}return n=Sf.bind(null,e),a=xi(a,n),e.callbackPriority=t,e.callbackNode=a,t}return n!==null&&n!==null&&Ci(n),e.callbackPriority=2,e.callbackNode=null,2}function Sf(e,t){if(Be!==0&&Be!==5)return e.callbackNode=null,e.callbackPriority=0,null;var a=e.callbackNode;if(Xo()&&e.callbackNode!==a)return null;var n=ue;return n=Il(e,e===Ce?n:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),n===0?null:(tf(e,n,t),Ef(e,st()),e.callbackNode!=null&&e.callbackNode===a?Sf.bind(null,e):null)}function Tf(e,t){if(Xo())return null;tf(e,t,!0)}function Jh(){lg(function(){(he&6)!==0?xi(us,Xh):bf()})}function mu(){if(ja===0){var e=Sn;e===0&&(e=Zl,Zl<<=1,(Zl&261888)===0&&(Zl=256)),ja=e}return ja}function xf(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:eo(""+e)}function Cf(e,t){var a=t.ownerDocument.createElement("input");return a.name=t.name,a.value=t.value,e.id&&a.setAttribute("form",e.id),t.parentNode.insertBefore(a,t),e=new FormData(e),a.parentNode.removeChild(a),e}function Zh(e,t,a,n,l){if(t==="submit"&&a&&a.stateNode===l){var o=xf((l[et]||null).action),r=n.submitter;r&&(t=(t=r[et]||null)?xf(t.formAction):r.getAttribute("formAction"),t!==null&&(o=t,r=null));var c=new lo("action","action",null,n,l);e.push({event:c,listeners:[{instance:null,listener:function(){if(n.defaultPrevented){if(ja!==0){var h=r?Cf(l,r):new FormData(l);zr(a,{pending:!0,data:h,method:l.method,action:o},null,h)}}else typeof o=="function"&&(c.preventDefault(),h=r?Cf(l,r):new FormData(l),zr(a,{pending:!0,data:h,method:l.method,action:o},o,h))},currentTarget:l}]})}}for(var pu=0;pu<Ii.length;pu++){var hu=Ii[pu],Kh=hu.toLowerCase(),$h=hu[0].toUpperCase()+hu.slice(1);zt(Kh,"on"+$h)}zt(ec,"onAnimationEnd"),zt(tc,"onAnimationIteration"),zt(ac,"onAnimationStart"),zt("dblclick","onDoubleClick"),zt("focusin","onFocus"),zt("focusout","onBlur"),zt(dh,"onTransitionRun"),zt(fh,"onTransitionStart"),zt(mh,"onTransitionCancel"),zt(nc,"onTransitionEnd"),rn("onMouseEnter",["mouseout","mouseover"]),rn("onMouseLeave",["mouseout","mouseover"]),rn("onPointerEnter",["pointerout","pointerover"]),rn("onPointerLeave",["pointerout","pointerover"]),Ha("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Ha("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Ha("onBeforeInput",["compositionend","keypress","textInput","paste"]),Ha("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Ha("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Ha("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var jl="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Ih=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(jl));function Af(e,t){t=(t&4)!==0;for(var a=0;a<e.length;a++){var n=e[a],l=n.event;n=n.listeners;e:{var o=void 0;if(t)for(var r=n.length-1;0<=r;r--){var c=n[r],h=c.instance,C=c.currentTarget;if(c=c.listener,h!==o&&l.isPropagationStopped())break e;o=c,l.currentTarget=C;try{o(l)}catch(M){ro(M)}l.currentTarget=null,o=h}else for(r=0;r<n.length;r++){if(c=n[r],h=c.instance,C=c.currentTarget,c=c.listener,h!==o&&l.isPropagationStopped())break e;o=c,l.currentTarget=C;try{o(l)}catch(M){ro(M)}l.currentTarget=null,o=h}}}}function re(e,t){var a=t[ji];a===void 0&&(a=t[ji]=new Set);var n=e+"__bubble";a.has(n)||(Rf(t,e,2,!1),a.add(n))}function gu(e,t,a){var n=0;t&&(n|=4),Rf(a,e,n,t)}var Ko="_reactListening"+Math.random().toString(36).slice(2);function yu(e){if(!e[Ko]){e[Ko]=!0,vs.forEach(function(a){a!=="selectionchange"&&(Ih.has(a)||gu(a,!1,e),gu(a,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Ko]||(t[Ko]=!0,gu("selectionchange",!1,t))}}function Rf(e,t,a,n){switch(tm(t)){case 2:var l=Cg;break;case 8:l=Ag;break;default:l=wu}a=l.bind(null,t,a,e),l=void 0,!Li||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(l=!0),n?l!==void 0?e.addEventListener(t,a,{capture:!0,passive:l}):e.addEventListener(t,a,!0):l!==void 0?e.addEventListener(t,a,{passive:l}):e.addEventListener(t,a,!1)}function vu(e,t,a,n,l){var o=n;if((t&1)===0&&(t&2)===0&&n!==null)e:for(;;){if(n===null)return;var r=n.tag;if(r===3||r===4){var c=n.stateNode.containerInfo;if(c===l)break;if(r===4)for(r=n.return;r!==null;){var h=r.tag;if((h===3||h===4)&&r.stateNode.containerInfo===l)return;r=r.return}for(;c!==null;){if(r=nn(c),r===null)return;if(h=r.tag,h===5||h===6||h===26||h===27){n=o=r;continue e}c=c.parentNode}}n=n.return}Ms(function(){var C=o,M=Ui(a),z=[];e:{var R=lc.get(e);if(R!==void 0){var O=lo,k=e;switch(e){case"keypress":if(ao(a)===0)break e;case"keydown":case"keyup":O=Qp;break;case"focusin":k="focus",O=Gi;break;case"focusout":k="blur",O=Gi;break;case"beforeblur":case"afterblur":O=Gi;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":O=zs;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":O=_p;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":O=Jp;break;case ec:case tc:case ac:O=Dp;break;case nc:O=Kp;break;case"scroll":case"scrollend":O=Op;break;case"wheel":O=Ip;break;case"copy":case"cut":case"paste":O=qp;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":O=Us;break;case"toggle":case"beforetoggle":O=Wp}var I=(t&4)!==0,Te=!I&&(e==="scroll"||e==="scrollend"),S=I?R!==null?R+"Capture":null:R;I=[];for(var v=C,x;v!==null;){var w=v;if(x=w.stateNode,w=w.tag,w!==5&&w!==26&&w!==27||x===null||S===null||(w=In(v,S),w!=null&&I.push(Ol(v,w,x))),Te)break;v=v.return}0<I.length&&(R=new O(R,k,null,a,M),z.push({event:R,listeners:I}))}}if((t&7)===0){e:{if(R=e==="mouseover"||e==="pointerover",O=e==="mouseout"||e==="pointerout",R&&a!==Di&&(k=a.relatedTarget||a.fromElement)&&(nn(k)||k[an]))break e;if((O||R)&&(R=M.window===M?M:(R=M.ownerDocument)?R.defaultView||R.parentWindow:window,O?(k=a.relatedTarget||a.toElement,O=C,k=k?nn(k):null,k!==null&&(Te=m(k),I=k.tag,k!==Te||I!==5&&I!==27&&I!==6)&&(k=null)):(O=null,k=C),O!==k)){if(I=zs,w="onMouseLeave",S="onMouseEnter",v="mouse",(e==="pointerout"||e==="pointerover")&&(I=Us,w="onPointerLeave",S="onPointerEnter",v="pointer"),Te=O==null?R:$n(O),x=k==null?R:$n(k),R=new I(w,v+"leave",O,a,M),R.target=Te,R.relatedTarget=x,w=null,nn(M)===C&&(I=new I(S,v+"enter",k,a,M),I.target=x,I.relatedTarget=Te,w=I),Te=w,O&&k)t:{for(I=Fh,S=O,v=k,x=0,w=S;w;w=I(w))x++;w=0;for(var K=v;K;K=I(K))w++;for(;0<x-w;)S=I(S),x--;for(;0<w-x;)v=I(v),w--;for(;x--;){if(S===v||v!==null&&S===v.alternate){I=S;break t}S=I(S),v=I(v)}I=null}else I=null;O!==null&&Nf(z,R,O,I,!1),k!==null&&Te!==null&&Nf(z,Te,k,I,!0)}}e:{if(R=C?$n(C):window,O=R.nodeName&&R.nodeName.toLowerCase(),O==="select"||O==="input"&&R.type==="file")var fe=Qs;else if(Gs(R))if(ks)fe=uh;else{fe=ih;var J=oh}else O=R.nodeName,!O||O.toLowerCase()!=="input"||R.type!=="checkbox"&&R.type!=="radio"?C&&zi(C.elementType)&&(fe=Qs):fe=rh;if(fe&&(fe=fe(e,C))){Ys(z,fe,a,M);break e}J&&J(e,R,C),e==="focusout"&&C&&R.type==="number"&&C.memoizedProps.value!=null&&wi(R,"number",R.value)}switch(J=C?$n(C):window,e){case"focusin":(Gs(J)||J.contentEditable==="true")&&(mn=J,Zi=C,ll=null);break;case"focusout":ll=Zi=mn=null;break;case"mousedown":Ki=!0;break;case"contextmenu":case"mouseup":case"dragend":Ki=!1,Ws(z,a,M);break;case"selectionchange":if(ch)break;case"keydown":case"keyup":Ws(z,a,M)}var ae;if(Qi)e:{switch(e){case"compositionstart":var se="onCompositionStart";break e;case"compositionend":se="onCompositionEnd";break e;case"compositionupdate":se="onCompositionUpdate";break e}se=void 0}else fn?Bs(e,a)&&(se="onCompositionEnd"):e==="keydown"&&a.keyCode===229&&(se="onCompositionStart");se&&(qs&&a.locale!=="ko"&&(fn||se!=="onCompositionStart"?se==="onCompositionEnd"&&fn&&(ae=_s()):(fa=M,Hi="value"in fa?fa.value:fa.textContent,fn=!0)),J=$o(C,se),0<J.length&&(se=new Ds(se,e,null,a,M),z.push({event:se,listeners:J}),ae?se.data=ae:(ae=Vs(a),ae!==null&&(se.data=ae)))),(ae=eh?th(e,a):ah(e,a))&&(se=$o(C,"onBeforeInput"),0<se.length&&(J=new Ds("onBeforeInput","beforeinput",null,a,M),z.push({event:J,listeners:se}),J.data=ae)),Zh(z,e,C,a,M)}Af(z,t)})}function Ol(e,t,a){return{instance:e,listener:t,currentTarget:a}}function $o(e,t){for(var a=t+"Capture",n=[];e!==null;){var l=e,o=l.stateNode;if(l=l.tag,l!==5&&l!==26&&l!==27||o===null||(l=In(e,a),l!=null&&n.unshift(Ol(e,l,o)),l=In(e,t),l!=null&&n.push(Ol(e,l,o))),e.tag===3)return n;e=e.return}return[]}function Fh(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Nf(e,t,a,n,l){for(var o=t._reactName,r=[];a!==null&&a!==n;){var c=a,h=c.alternate,C=c.stateNode;if(c=c.tag,h!==null&&h===n)break;c!==5&&c!==26&&c!==27||C===null||(h=C,l?(C=In(a,o),C!=null&&r.unshift(Ol(a,C,h))):l||(C=In(a,o),C!=null&&r.push(Ol(a,C,h)))),a=a.return}r.length!==0&&e.push({event:t,listeners:r})}var Wh=/\r\n?/g,Ph=/\u0000|\uFFFD/g;function jf(e){return(typeof e=="string"?e:""+e).replace(Wh,`
`).replace(Ph,"")}function Of(e,t){return t=jf(t),jf(e)===t}function Se(e,t,a,n,l,o){switch(a){case"children":typeof n=="string"?t==="body"||t==="textarea"&&n===""||sn(e,n):(typeof n=="number"||typeof n=="bigint")&&t!=="body"&&sn(e,""+n);break;case"className":Wl(e,"class",n);break;case"tabIndex":Wl(e,"tabindex",n);break;case"dir":case"role":case"viewBox":case"width":case"height":Wl(e,a,n);break;case"style":js(e,n,o);break;case"data":if(t!=="object"){Wl(e,"data",n);break}case"src":case"href":if(n===""&&(t!=="a"||a!=="href")){e.removeAttribute(a);break}if(n==null||typeof n=="function"||typeof n=="symbol"||typeof n=="boolean"){e.removeAttribute(a);break}n=eo(""+n),e.setAttribute(a,n);break;case"action":case"formAction":if(typeof n=="function"){e.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof o=="function"&&(a==="formAction"?(t!=="input"&&Se(e,t,"name",l.name,l,null),Se(e,t,"formEncType",l.formEncType,l,null),Se(e,t,"formMethod",l.formMethod,l,null),Se(e,t,"formTarget",l.formTarget,l,null)):(Se(e,t,"encType",l.encType,l,null),Se(e,t,"method",l.method,l,null),Se(e,t,"target",l.target,l,null)));if(n==null||typeof n=="symbol"||typeof n=="boolean"){e.removeAttribute(a);break}n=eo(""+n),e.setAttribute(a,n);break;case"onClick":n!=null&&(e.onclick=Xt);break;case"onScroll":n!=null&&re("scroll",e);break;case"onScrollEnd":n!=null&&re("scrollend",e);break;case"dangerouslySetInnerHTML":if(n!=null){if(typeof n!="object"||!("__html"in n))throw Error(u(61));if(a=n.__html,a!=null){if(l.children!=null)throw Error(u(60));e.innerHTML=a}}break;case"multiple":e.multiple=n&&typeof n!="function"&&typeof n!="symbol";break;case"muted":e.muted=n&&typeof n!="function"&&typeof n!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(n==null||typeof n=="function"||typeof n=="boolean"||typeof n=="symbol"){e.removeAttribute("xlink:href");break}a=eo(""+n),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":n!=null&&typeof n!="function"&&typeof n!="symbol"?e.setAttribute(a,""+n):e.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":n&&typeof n!="function"&&typeof n!="symbol"?e.setAttribute(a,""):e.removeAttribute(a);break;case"capture":case"download":n===!0?e.setAttribute(a,""):n!==!1&&n!=null&&typeof n!="function"&&typeof n!="symbol"?e.setAttribute(a,n):e.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":n!=null&&typeof n!="function"&&typeof n!="symbol"&&!isNaN(n)&&1<=n?e.setAttribute(a,n):e.removeAttribute(a);break;case"rowSpan":case"start":n==null||typeof n=="function"||typeof n=="symbol"||isNaN(n)?e.removeAttribute(a):e.setAttribute(a,n);break;case"popover":re("beforetoggle",e),re("toggle",e),Fl(e,"popover",n);break;case"xlinkActuate":kt(e,"http://www.w3.org/1999/xlink","xlink:actuate",n);break;case"xlinkArcrole":kt(e,"http://www.w3.org/1999/xlink","xlink:arcrole",n);break;case"xlinkRole":kt(e,"http://www.w3.org/1999/xlink","xlink:role",n);break;case"xlinkShow":kt(e,"http://www.w3.org/1999/xlink","xlink:show",n);break;case"xlinkTitle":kt(e,"http://www.w3.org/1999/xlink","xlink:title",n);break;case"xlinkType":kt(e,"http://www.w3.org/1999/xlink","xlink:type",n);break;case"xmlBase":kt(e,"http://www.w3.org/XML/1998/namespace","xml:base",n);break;case"xmlLang":kt(e,"http://www.w3.org/XML/1998/namespace","xml:lang",n);break;case"xmlSpace":kt(e,"http://www.w3.org/XML/1998/namespace","xml:space",n);break;case"is":Fl(e,"is",n);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=Np.get(a)||a,Fl(e,a,n))}}function bu(e,t,a,n,l,o){switch(a){case"style":js(e,n,o);break;case"dangerouslySetInnerHTML":if(n!=null){if(typeof n!="object"||!("__html"in n))throw Error(u(61));if(a=n.__html,a!=null){if(l.children!=null)throw Error(u(60));e.innerHTML=a}}break;case"children":typeof n=="string"?sn(e,n):(typeof n=="number"||typeof n=="bigint")&&sn(e,""+n);break;case"onScroll":n!=null&&re("scroll",e);break;case"onScrollEnd":n!=null&&re("scrollend",e);break;case"onClick":n!=null&&(e.onclick=Xt);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!bs.hasOwnProperty(a))e:{if(a[0]==="o"&&a[1]==="n"&&(l=a.endsWith("Capture"),t=a.slice(2,l?a.length-7:void 0),o=e[et]||null,o=o!=null?o[a]:null,typeof o=="function"&&e.removeEventListener(t,o,l),typeof n=="function")){typeof o!="function"&&o!==null&&(a in e?e[a]=null:e.hasAttribute(a)&&e.removeAttribute(a)),e.addEventListener(t,n,l);break e}a in e?e[a]=n:n===!0?e.setAttribute(a,""):Fl(e,a,n)}}}function Ke(e,t,a){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":re("error",e),re("load",e);var n=!1,l=!1,o;for(o in a)if(a.hasOwnProperty(o)){var r=a[o];if(r!=null)switch(o){case"src":n=!0;break;case"srcSet":l=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(u(137,t));default:Se(e,t,o,r,a,null)}}l&&Se(e,t,"srcSet",a.srcSet,a,null),n&&Se(e,t,"src",a.src,a,null);return;case"input":re("invalid",e);var c=o=r=l=null,h=null,C=null;for(n in a)if(a.hasOwnProperty(n)){var M=a[n];if(M!=null)switch(n){case"name":l=M;break;case"type":r=M;break;case"checked":h=M;break;case"defaultChecked":C=M;break;case"value":o=M;break;case"defaultValue":c=M;break;case"children":case"dangerouslySetInnerHTML":if(M!=null)throw Error(u(137,t));break;default:Se(e,t,n,M,a,null)}}Cs(e,o,c,h,C,r,l,!1);return;case"select":re("invalid",e),n=r=o=null;for(l in a)if(a.hasOwnProperty(l)&&(c=a[l],c!=null))switch(l){case"value":o=c;break;case"defaultValue":r=c;break;case"multiple":n=c;default:Se(e,t,l,c,a,null)}t=o,a=r,e.multiple=!!n,t!=null?un(e,!!n,t,!1):a!=null&&un(e,!!n,a,!0);return;case"textarea":re("invalid",e),o=l=n=null;for(r in a)if(a.hasOwnProperty(r)&&(c=a[r],c!=null))switch(r){case"value":n=c;break;case"defaultValue":l=c;break;case"children":o=c;break;case"dangerouslySetInnerHTML":if(c!=null)throw Error(u(91));break;default:Se(e,t,r,c,a,null)}Rs(e,n,l,o);return;case"option":for(h in a)a.hasOwnProperty(h)&&(n=a[h],n!=null)&&(h==="selected"?e.selected=n&&typeof n!="function"&&typeof n!="symbol":Se(e,t,h,n,a,null));return;case"dialog":re("beforetoggle",e),re("toggle",e),re("cancel",e),re("close",e);break;case"iframe":case"object":re("load",e);break;case"video":case"audio":for(n=0;n<jl.length;n++)re(jl[n],e);break;case"image":re("error",e),re("load",e);break;case"details":re("toggle",e);break;case"embed":case"source":case"link":re("error",e),re("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(C in a)if(a.hasOwnProperty(C)&&(n=a[C],n!=null))switch(C){case"children":case"dangerouslySetInnerHTML":throw Error(u(137,t));default:Se(e,t,C,n,a,null)}return;default:if(zi(t)){for(M in a)a.hasOwnProperty(M)&&(n=a[M],n!==void 0&&bu(e,t,M,n,a,void 0));return}}for(c in a)a.hasOwnProperty(c)&&(n=a[c],n!=null&&Se(e,t,c,n,a,null))}function eg(e,t,a,n){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var l=null,o=null,r=null,c=null,h=null,C=null,M=null;for(O in a){var z=a[O];if(a.hasOwnProperty(O)&&z!=null)switch(O){case"checked":break;case"value":break;case"defaultValue":h=z;default:n.hasOwnProperty(O)||Se(e,t,O,null,n,z)}}for(var R in n){var O=n[R];if(z=a[R],n.hasOwnProperty(R)&&(O!=null||z!=null))switch(R){case"type":o=O;break;case"name":l=O;break;case"checked":C=O;break;case"defaultChecked":M=O;break;case"value":r=O;break;case"defaultValue":c=O;break;case"children":case"dangerouslySetInnerHTML":if(O!=null)throw Error(u(137,t));break;default:O!==z&&Se(e,t,R,O,n,z)}}_i(e,r,c,h,C,M,o,l);return;case"select":O=r=c=R=null;for(o in a)if(h=a[o],a.hasOwnProperty(o)&&h!=null)switch(o){case"value":break;case"multiple":O=h;default:n.hasOwnProperty(o)||Se(e,t,o,null,n,h)}for(l in n)if(o=n[l],h=a[l],n.hasOwnProperty(l)&&(o!=null||h!=null))switch(l){case"value":R=o;break;case"defaultValue":c=o;break;case"multiple":r=o;default:o!==h&&Se(e,t,l,o,n,h)}t=c,a=r,n=O,R!=null?un(e,!!a,R,!1):!!n!=!!a&&(t!=null?un(e,!!a,t,!0):un(e,!!a,a?[]:"",!1));return;case"textarea":O=R=null;for(c in a)if(l=a[c],a.hasOwnProperty(c)&&l!=null&&!n.hasOwnProperty(c))switch(c){case"value":break;case"children":break;default:Se(e,t,c,null,n,l)}for(r in n)if(l=n[r],o=a[r],n.hasOwnProperty(r)&&(l!=null||o!=null))switch(r){case"value":R=l;break;case"defaultValue":O=l;break;case"children":break;case"dangerouslySetInnerHTML":if(l!=null)throw Error(u(91));break;default:l!==o&&Se(e,t,r,l,n,o)}As(e,R,O);return;case"option":for(var k in a)R=a[k],a.hasOwnProperty(k)&&R!=null&&!n.hasOwnProperty(k)&&(k==="selected"?e.selected=!1:Se(e,t,k,null,n,R));for(h in n)R=n[h],O=a[h],n.hasOwnProperty(h)&&R!==O&&(R!=null||O!=null)&&(h==="selected"?e.selected=R&&typeof R!="function"&&typeof R!="symbol":Se(e,t,h,R,n,O));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var I in a)R=a[I],a.hasOwnProperty(I)&&R!=null&&!n.hasOwnProperty(I)&&Se(e,t,I,null,n,R);for(C in n)if(R=n[C],O=a[C],n.hasOwnProperty(C)&&R!==O&&(R!=null||O!=null))switch(C){case"children":case"dangerouslySetInnerHTML":if(R!=null)throw Error(u(137,t));break;default:Se(e,t,C,R,n,O)}return;default:if(zi(t)){for(var Te in a)R=a[Te],a.hasOwnProperty(Te)&&R!==void 0&&!n.hasOwnProperty(Te)&&bu(e,t,Te,void 0,n,R);for(M in n)R=n[M],O=a[M],!n.hasOwnProperty(M)||R===O||R===void 0&&O===void 0||bu(e,t,M,R,n,O);return}}for(var S in a)R=a[S],a.hasOwnProperty(S)&&R!=null&&!n.hasOwnProperty(S)&&Se(e,t,S,null,n,R);for(z in n)R=n[z],O=a[z],!n.hasOwnProperty(z)||R===O||R==null&&O==null||Se(e,t,z,R,n,O)}function Mf(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function tg(){if(typeof performance.getEntriesByType=="function"){for(var e=0,t=0,a=performance.getEntriesByType("resource"),n=0;n<a.length;n++){var l=a[n],o=l.transferSize,r=l.initiatorType,c=l.duration;if(o&&c&&Mf(r)){for(r=0,c=l.responseEnd,n+=1;n<a.length;n++){var h=a[n],C=h.startTime;if(C>c)break;var M=h.transferSize,z=h.initiatorType;M&&Mf(z)&&(h=h.responseEnd,r+=M*(h<c?1:(c-C)/(h-C)))}if(--n,t+=8*(o+r)/(l.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var Eu=null,Su=null;function Io(e){return e.nodeType===9?e:e.ownerDocument}function _f(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function wf(e,t){if(e===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&t==="foreignObject"?0:e}function Tu(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var xu=null;function ag(){var e=window.event;return e&&e.type==="popstate"?e===xu?!1:(xu=e,!0):(xu=null,!1)}var zf=typeof setTimeout=="function"?setTimeout:void 0,ng=typeof clearTimeout=="function"?clearTimeout:void 0,Df=typeof Promise=="function"?Promise:void 0,lg=typeof queueMicrotask=="function"?queueMicrotask:typeof Df<"u"?function(e){return Df.resolve(null).then(e).catch(og)}:zf;function og(e){setTimeout(function(){throw e})}function Oa(e){return e==="head"}function Uf(e,t){var a=t,n=0;do{var l=a.nextSibling;if(e.removeChild(a),l&&l.nodeType===8)if(a=l.data,a==="/$"||a==="/&"){if(n===0){e.removeChild(l),Vn(t);return}n--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")n++;else if(a==="html")Ml(e.ownerDocument.documentElement);else if(a==="head"){a=e.ownerDocument.head,Ml(a);for(var o=a.firstChild;o;){var r=o.nextSibling,c=o.nodeName;o[Kn]||c==="SCRIPT"||c==="STYLE"||c==="LINK"&&o.rel.toLowerCase()==="stylesheet"||a.removeChild(o),o=r}}else a==="body"&&Ml(e.ownerDocument.body);a=l}while(a);Vn(t)}function qf(e,t){var a=e;e=0;do{var n=a.nextSibling;if(a.nodeType===1?t?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(t?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),n&&n.nodeType===8)if(a=n.data,a==="/$"){if(e===0)break;e--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||e++;a=n}while(a)}function Cu(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var a=t;switch(t=t.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":Cu(a),Oi(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}e.removeChild(a)}}function ig(e,t,a,n){for(;e.nodeType===1;){var l=a;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!n&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(n){if(!e[Kn])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(o=e.getAttribute("rel"),o==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(o!==l.rel||e.getAttribute("href")!==(l.href==null||l.href===""?null:l.href)||e.getAttribute("crossorigin")!==(l.crossOrigin==null?null:l.crossOrigin)||e.getAttribute("title")!==(l.title==null?null:l.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(o=e.getAttribute("src"),(o!==(l.src==null?null:l.src)||e.getAttribute("type")!==(l.type==null?null:l.type)||e.getAttribute("crossorigin")!==(l.crossOrigin==null?null:l.crossOrigin))&&o&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(t==="input"&&e.type==="hidden"){var o=l.name==null?null:""+l.name;if(l.type==="hidden"&&e.getAttribute("name")===o)return e}else return e;if(e=jt(e.nextSibling),e===null)break}return null}function rg(e,t,a){if(t==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=jt(e.nextSibling),e===null))return null;return e}function Lf(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!t||(e=jt(e.nextSibling),e===null))return null;return e}function Au(e){return e.data==="$?"||e.data==="$~"}function Ru(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function ug(e,t){var a=e.ownerDocument;if(e.data==="$~")e._reactRetry=t;else if(e.data!=="$?"||a.readyState!=="loading")t();else{var n=function(){t(),a.removeEventListener("DOMContentLoaded",n)};a.addEventListener("DOMContentLoaded",n),e._reactRetry=n}}function jt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?"||t==="$~"||t==="&"||t==="F!"||t==="F")break;if(t==="/$"||t==="/&")return null}}return e}var Nu=null;function Hf(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var a=e.data;if(a==="/$"||a==="/&"){if(t===0)return jt(e.nextSibling);t--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||t++}e=e.nextSibling}return null}function Bf(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var a=e.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(t===0)return e;t--}else a!=="/$"&&a!=="/&"||t++}e=e.previousSibling}return null}function Vf(e,t,a){switch(t=Io(a),e){case"html":if(e=t.documentElement,!e)throw Error(u(452));return e;case"head":if(e=t.head,!e)throw Error(u(453));return e;case"body":if(e=t.body,!e)throw Error(u(454));return e;default:throw Error(u(451))}}function Ml(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);Oi(e)}var Ot=new Map,Gf=new Set;function Fo(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var ra=B.d;B.d={f:sg,r:cg,D:dg,C:fg,L:mg,m:pg,X:gg,S:hg,M:yg};function sg(){var e=ra.f(),t=Yo();return e||t}function cg(e){var t=ln(e);t!==null&&t.tag===5&&t.type==="form"?nd(t):ra.r(e)}var Ln=typeof document>"u"?null:document;function Yf(e,t,a){var n=Ln;if(n&&typeof t=="string"&&t){var l=St(t);l='link[rel="'+e+'"][href="'+l+'"]',typeof a=="string"&&(l+='[crossorigin="'+a+'"]'),Gf.has(l)||(Gf.add(l),e={rel:e,crossOrigin:a,href:t},n.querySelector(l)===null&&(t=n.createElement("link"),Ke(t,"link",e),Ve(t),n.head.appendChild(t)))}}function dg(e){ra.D(e),Yf("dns-prefetch",e,null)}function fg(e,t){ra.C(e,t),Yf("preconnect",e,t)}function mg(e,t,a){ra.L(e,t,a);var n=Ln;if(n&&e&&t){var l='link[rel="preload"][as="'+St(t)+'"]';t==="image"&&a&&a.imageSrcSet?(l+='[imagesrcset="'+St(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(l+='[imagesizes="'+St(a.imageSizes)+'"]')):l+='[href="'+St(e)+'"]';var o=l;switch(t){case"style":o=Hn(e);break;case"script":o=Bn(e)}Ot.has(o)||(e=T({rel:"preload",href:t==="image"&&a&&a.imageSrcSet?void 0:e,as:t},a),Ot.set(o,e),n.querySelector(l)!==null||t==="style"&&n.querySelector(_l(o))||t==="script"&&n.querySelector(wl(o))||(t=n.createElement("link"),Ke(t,"link",e),Ve(t),n.head.appendChild(t)))}}function pg(e,t){ra.m(e,t);var a=Ln;if(a&&e){var n=t&&typeof t.as=="string"?t.as:"script",l='link[rel="modulepreload"][as="'+St(n)+'"][href="'+St(e)+'"]',o=l;switch(n){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":o=Bn(e)}if(!Ot.has(o)&&(e=T({rel:"modulepreload",href:e},t),Ot.set(o,e),a.querySelector(l)===null)){switch(n){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(wl(o)))return}n=a.createElement("link"),Ke(n,"link",e),Ve(n),a.head.appendChild(n)}}}function hg(e,t,a){ra.S(e,t,a);var n=Ln;if(n&&e){var l=on(n).hoistableStyles,o=Hn(e);t=t||"default";var r=l.get(o);if(!r){var c={loading:0,preload:null};if(r=n.querySelector(_l(o)))c.loading=5;else{e=T({rel:"stylesheet",href:e,"data-precedence":t},a),(a=Ot.get(o))&&ju(e,a);var h=r=n.createElement("link");Ve(h),Ke(h,"link",e),h._p=new Promise(function(C,M){h.onload=C,h.onerror=M}),h.addEventListener("load",function(){c.loading|=1}),h.addEventListener("error",function(){c.loading|=2}),c.loading|=4,Wo(r,t,n)}r={type:"stylesheet",instance:r,count:1,state:c},l.set(o,r)}}}function gg(e,t){ra.X(e,t);var a=Ln;if(a&&e){var n=on(a).hoistableScripts,l=Bn(e),o=n.get(l);o||(o=a.querySelector(wl(l)),o||(e=T({src:e,async:!0},t),(t=Ot.get(l))&&Ou(e,t),o=a.createElement("script"),Ve(o),Ke(o,"link",e),a.head.appendChild(o)),o={type:"script",instance:o,count:1,state:null},n.set(l,o))}}function yg(e,t){ra.M(e,t);var a=Ln;if(a&&e){var n=on(a).hoistableScripts,l=Bn(e),o=n.get(l);o||(o=a.querySelector(wl(l)),o||(e=T({src:e,async:!0,type:"module"},t),(t=Ot.get(l))&&Ou(e,t),o=a.createElement("script"),Ve(o),Ke(o,"link",e),a.head.appendChild(o)),o={type:"script",instance:o,count:1,state:null},n.set(l,o))}}function Qf(e,t,a,n){var l=(l=oe.current)?Fo(l):null;if(!l)throw Error(u(446));switch(e){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(t=Hn(a.href),a=on(l).hoistableStyles,n=a.get(t),n||(n={type:"style",instance:null,count:0,state:null},a.set(t,n)),n):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){e=Hn(a.href);var o=on(l).hoistableStyles,r=o.get(e);if(r||(l=l.ownerDocument||l,r={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},o.set(e,r),(o=l.querySelector(_l(e)))&&!o._p&&(r.instance=o,r.state.loading=5),Ot.has(e)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},Ot.set(e,a),o||vg(l,e,a,r.state))),t&&n===null)throw Error(u(528,""));return r}if(t&&n!==null)throw Error(u(529,""));return null;case"script":return t=a.async,a=a.src,typeof a=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(t=Bn(a),a=on(l).hoistableScripts,n=a.get(t),n||(n={type:"script",instance:null,count:0,state:null},a.set(t,n)),n):{type:"void",instance:null,count:0,state:null};default:throw Error(u(444,e))}}function Hn(e){return'href="'+St(e)+'"'}function _l(e){return'link[rel="stylesheet"]['+e+"]"}function kf(e){return T({},e,{"data-precedence":e.precedence,precedence:null})}function vg(e,t,a,n){e.querySelector('link[rel="preload"][as="style"]['+t+"]")?n.loading=1:(t=e.createElement("link"),n.preload=t,t.addEventListener("load",function(){return n.loading|=1}),t.addEventListener("error",function(){return n.loading|=2}),Ke(t,"link",a),Ve(t),e.head.appendChild(t))}function Bn(e){return'[src="'+St(e)+'"]'}function wl(e){return"script[async]"+e}function Xf(e,t,a){if(t.count++,t.instance===null)switch(t.type){case"style":var n=e.querySelector('style[data-href~="'+St(a.href)+'"]');if(n)return t.instance=n,Ve(n),n;var l=T({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return n=(e.ownerDocument||e).createElement("style"),Ve(n),Ke(n,"style",l),Wo(n,a.precedence,e),t.instance=n;case"stylesheet":l=Hn(a.href);var o=e.querySelector(_l(l));if(o)return t.state.loading|=4,t.instance=o,Ve(o),o;n=kf(a),(l=Ot.get(l))&&ju(n,l),o=(e.ownerDocument||e).createElement("link"),Ve(o);var r=o;return r._p=new Promise(function(c,h){r.onload=c,r.onerror=h}),Ke(o,"link",n),t.state.loading|=4,Wo(o,a.precedence,e),t.instance=o;case"script":return o=Bn(a.src),(l=e.querySelector(wl(o)))?(t.instance=l,Ve(l),l):(n=a,(l=Ot.get(o))&&(n=T({},a),Ou(n,l)),e=e.ownerDocument||e,l=e.createElement("script"),Ve(l),Ke(l,"link",n),e.head.appendChild(l),t.instance=l);case"void":return null;default:throw Error(u(443,t.type))}else t.type==="stylesheet"&&(t.state.loading&4)===0&&(n=t.instance,t.state.loading|=4,Wo(n,a.precedence,e));return t.instance}function Wo(e,t,a){for(var n=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),l=n.length?n[n.length-1]:null,o=l,r=0;r<n.length;r++){var c=n[r];if(c.dataset.precedence===t)o=c;else if(o!==l)break}o?o.parentNode.insertBefore(e,o.nextSibling):(t=a.nodeType===9?a.head:a,t.insertBefore(e,t.firstChild))}function ju(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.title==null&&(e.title=t.title)}function Ou(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.integrity==null&&(e.integrity=t.integrity)}var Po=null;function Jf(e,t,a){if(Po===null){var n=new Map,l=Po=new Map;l.set(a,n)}else l=Po,n=l.get(a),n||(n=new Map,l.set(a,n));if(n.has(e))return n;for(n.set(e,null),a=a.getElementsByTagName(e),l=0;l<a.length;l++){var o=a[l];if(!(o[Kn]||o[ke]||e==="link"&&o.getAttribute("rel")==="stylesheet")&&o.namespaceURI!=="http://www.w3.org/2000/svg"){var r=o.getAttribute(t)||"";r=e+r;var c=n.get(r);c?c.push(o):n.set(r,[o])}}return n}function Zf(e,t,a){e=e.ownerDocument||e,e.head.insertBefore(a,t==="title"?e.querySelector("head > title"):null)}function bg(e,t,a){if(a===1||t.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;return t.rel==="stylesheet"?(e=t.disabled,typeof t.precedence=="string"&&e==null):!0;case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function Kf(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function Eg(e,t,a,n){if(a.type==="stylesheet"&&(typeof n.media!="string"||matchMedia(n.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var l=Hn(n.href),o=t.querySelector(_l(l));if(o){t=o._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(e.count++,e=ei.bind(e),t.then(e,e)),a.state.loading|=4,a.instance=o,Ve(o);return}o=t.ownerDocument||t,n=kf(n),(l=Ot.get(l))&&ju(n,l),o=o.createElement("link"),Ve(o);var r=o;r._p=new Promise(function(c,h){r.onload=c,r.onerror=h}),Ke(o,"link",n),a.instance=o}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(a,t),(t=a.state.preload)&&(a.state.loading&3)===0&&(e.count++,a=ei.bind(e),t.addEventListener("load",a),t.addEventListener("error",a))}}var Mu=0;function Sg(e,t){return e.stylesheets&&e.count===0&&ai(e,e.stylesheets),0<e.count||0<e.imgCount?function(a){var n=setTimeout(function(){if(e.stylesheets&&ai(e,e.stylesheets),e.unsuspend){var o=e.unsuspend;e.unsuspend=null,o()}},6e4+t);0<e.imgBytes&&Mu===0&&(Mu=62500*tg());var l=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&ai(e,e.stylesheets),e.unsuspend)){var o=e.unsuspend;e.unsuspend=null,o()}},(e.imgBytes>Mu?50:800)+t);return e.unsuspend=a,function(){e.unsuspend=null,clearTimeout(n),clearTimeout(l)}}:null}function ei(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)ai(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var ti=null;function ai(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,ti=new Map,t.forEach(Tg,e),ti=null,ei.call(e))}function Tg(e,t){if(!(t.state.loading&4)){var a=ti.get(e);if(a)var n=a.get(null);else{a=new Map,ti.set(e,a);for(var l=e.querySelectorAll("link[data-precedence],style[data-precedence]"),o=0;o<l.length;o++){var r=l[o];(r.nodeName==="LINK"||r.getAttribute("media")!=="not all")&&(a.set(r.dataset.precedence,r),n=r)}n&&a.set(null,n)}l=t.instance,r=l.getAttribute("data-precedence"),o=a.get(r)||n,o===n&&a.set(null,l),a.set(r,l),this.count++,n=ei.bind(this),l.addEventListener("load",n),l.addEventListener("error",n),o?o.parentNode.insertBefore(l,o.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(l,e.firstChild)),t.state.loading|=4}}var zl={$$typeof:Z,Provider:null,Consumer:null,_currentValue:W,_currentValue2:W,_threadCount:0};function xg(e,t,a,n,l,o,r,c,h){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Ai(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ai(0),this.hiddenUpdates=Ai(null),this.identifierPrefix=n,this.onUncaughtError=l,this.onCaughtError=o,this.onRecoverableError=r,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=h,this.incompleteTransitions=new Map}function $f(e,t,a,n,l,o,r,c,h,C,M,z){return e=new xg(e,t,a,r,h,C,M,z,c),t=1,o===!0&&(t|=24),o=mt(3,null,null,t),e.current=o,o.stateNode=e,t=sr(),t.refCount++,e.pooledCache=t,t.refCount++,o.memoizedState={element:n,isDehydrated:a,cache:t},mr(o),e}function If(e){return e?(e=gn,e):gn}function Ff(e,t,a,n,l,o){l=If(l),n.context===null?n.context=l:n.pendingContext=l,n=va(t),n.payload={element:a},o=o===void 0?null:o,o!==null&&(n.callback=o),a=ba(e,n,t),a!==null&&(it(a,e,t),dl(a,e,t))}function Wf(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var a=e.retryLane;e.retryLane=a!==0&&a<t?a:t}}function _u(e,t){Wf(e,t),(e=e.alternate)&&Wf(e,t)}function Pf(e){if(e.tag===13||e.tag===31){var t=Ya(e,67108864);t!==null&&it(t,e,67108864),_u(e,67108864)}}function em(e){if(e.tag===13||e.tag===31){var t=vt();t=Ri(t);var a=Ya(e,t);a!==null&&it(a,e,t),_u(e,t)}}var ni=!0;function Cg(e,t,a,n){var l=_.T;_.T=null;var o=B.p;try{B.p=2,wu(e,t,a,n)}finally{B.p=o,_.T=l}}function Ag(e,t,a,n){var l=_.T;_.T=null;var o=B.p;try{B.p=8,wu(e,t,a,n)}finally{B.p=o,_.T=l}}function wu(e,t,a,n){if(ni){var l=zu(n);if(l===null)vu(e,t,n,li,a),am(e,n);else if(Ng(l,e,t,a,n))n.stopPropagation();else if(am(e,n),t&4&&-1<Rg.indexOf(e)){for(;l!==null;){var o=ln(l);if(o!==null)switch(o.tag){case 3:if(o=o.stateNode,o.current.memoizedState.isDehydrated){var r=La(o.pendingLanes);if(r!==0){var c=o;for(c.pendingLanes|=2,c.entangledLanes|=2;r;){var h=1<<31-dt(r);c.entanglements[1]|=h,r&=~h}Vt(o),(he&6)===0&&(Vo=st()+500,Nl(0))}}break;case 31:case 13:c=Ya(o,2),c!==null&&it(c,o,2),Yo(),_u(o,2)}if(o=zu(n),o===null&&vu(e,t,n,li,a),o===l)break;l=o}l!==null&&n.stopPropagation()}else vu(e,t,n,null,a)}}function zu(e){return e=Ui(e),Du(e)}var li=null;function Du(e){if(li=null,e=nn(e),e!==null){var t=m(e);if(t===null)e=null;else{var a=t.tag;if(a===13){if(e=y(t),e!==null)return e;e=null}else if(a===31){if(e=N(t),e!==null)return e;e=null}else if(a===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return li=e,null}function tm(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(dp()){case us:return 2;case ss:return 8;case Jl:case fp:return 32;case cs:return 268435456;default:return 32}default:return 32}}var Uu=!1,Ma=null,_a=null,wa=null,Dl=new Map,Ul=new Map,za=[],Rg="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function am(e,t){switch(e){case"focusin":case"focusout":Ma=null;break;case"dragenter":case"dragleave":_a=null;break;case"mouseover":case"mouseout":wa=null;break;case"pointerover":case"pointerout":Dl.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ul.delete(t.pointerId)}}function ql(e,t,a,n,l,o){return e===null||e.nativeEvent!==o?(e={blockedOn:t,domEventName:a,eventSystemFlags:n,nativeEvent:o,targetContainers:[l]},t!==null&&(t=ln(t),t!==null&&Pf(t)),e):(e.eventSystemFlags|=n,t=e.targetContainers,l!==null&&t.indexOf(l)===-1&&t.push(l),e)}function Ng(e,t,a,n,l){switch(t){case"focusin":return Ma=ql(Ma,e,t,a,n,l),!0;case"dragenter":return _a=ql(_a,e,t,a,n,l),!0;case"mouseover":return wa=ql(wa,e,t,a,n,l),!0;case"pointerover":var o=l.pointerId;return Dl.set(o,ql(Dl.get(o)||null,e,t,a,n,l)),!0;case"gotpointercapture":return o=l.pointerId,Ul.set(o,ql(Ul.get(o)||null,e,t,a,n,l)),!0}return!1}function nm(e){var t=nn(e.target);if(t!==null){var a=m(t);if(a!==null){if(t=a.tag,t===13){if(t=y(a),t!==null){e.blockedOn=t,gs(e.priority,function(){em(a)});return}}else if(t===31){if(t=N(a),t!==null){e.blockedOn=t,gs(e.priority,function(){em(a)});return}}else if(t===3&&a.stateNode.current.memoizedState.isDehydrated){e.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}e.blockedOn=null}function oi(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var a=zu(e.nativeEvent);if(a===null){a=e.nativeEvent;var n=new a.constructor(a.type,a);Di=n,a.target.dispatchEvent(n),Di=null}else return t=ln(a),t!==null&&Pf(t),e.blockedOn=a,!1;t.shift()}return!0}function lm(e,t,a){oi(e)&&a.delete(t)}function jg(){Uu=!1,Ma!==null&&oi(Ma)&&(Ma=null),_a!==null&&oi(_a)&&(_a=null),wa!==null&&oi(wa)&&(wa=null),Dl.forEach(lm),Ul.forEach(lm)}function ii(e,t){e.blockedOn===t&&(e.blockedOn=null,Uu||(Uu=!0,i.unstable_scheduleCallback(i.unstable_NormalPriority,jg)))}var ri=null;function om(e){ri!==e&&(ri=e,i.unstable_scheduleCallback(i.unstable_NormalPriority,function(){ri===e&&(ri=null);for(var t=0;t<e.length;t+=3){var a=e[t],n=e[t+1],l=e[t+2];if(typeof n!="function"){if(Du(n||a)===null)continue;break}var o=ln(a);o!==null&&(e.splice(t,3),t-=3,zr(o,{pending:!0,data:l,method:a.method,action:n},n,l))}}))}function Vn(e){function t(h){return ii(h,e)}Ma!==null&&ii(Ma,e),_a!==null&&ii(_a,e),wa!==null&&ii(wa,e),Dl.forEach(t),Ul.forEach(t);for(var a=0;a<za.length;a++){var n=za[a];n.blockedOn===e&&(n.blockedOn=null)}for(;0<za.length&&(a=za[0],a.blockedOn===null);)nm(a),a.blockedOn===null&&za.shift();if(a=(e.ownerDocument||e).$$reactFormReplay,a!=null)for(n=0;n<a.length;n+=3){var l=a[n],o=a[n+1],r=l[et]||null;if(typeof o=="function")r||om(a);else if(r){var c=null;if(o&&o.hasAttribute("formAction")){if(l=o,r=o[et]||null)c=r.formAction;else if(Du(l)!==null)continue}else c=r.action;typeof c=="function"?a[n+1]=c:(a.splice(n,3),n-=3),om(a)}}}function im(){function e(o){o.canIntercept&&o.info==="react-transition"&&o.intercept({handler:function(){return new Promise(function(r){return l=r})},focusReset:"manual",scroll:"manual"})}function t(){l!==null&&(l(),l=null),n||setTimeout(a,20)}function a(){if(!n&&!navigation.transition){var o=navigation.currentEntry;o&&o.url!=null&&navigation.navigate(o.url,{state:o.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var n=!1,l=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",t),navigation.addEventListener("navigateerror",t),setTimeout(a,100),function(){n=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",t),navigation.removeEventListener("navigateerror",t),l!==null&&(l(),l=null)}}}function qu(e){this._internalRoot=e}ui.prototype.render=qu.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(u(409));var a=t.current,n=vt();Ff(a,n,e,t,null,null)},ui.prototype.unmount=qu.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Ff(e.current,2,null,e,null,null),Yo(),t[an]=null}};function ui(e){this._internalRoot=e}ui.prototype.unstable_scheduleHydration=function(e){if(e){var t=hs();e={blockedOn:null,target:e,priority:t};for(var a=0;a<za.length&&t!==0&&t<za[a].priority;a++);za.splice(a,0,e),a===0&&nm(e)}};var rm=s.version;if(rm!=="19.2.3")throw Error(u(527,rm,"19.2.3"));B.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(u(188)):(e=Object.keys(e).join(","),Error(u(268,e)));return e=g(t),e=e!==null?j(e):null,e=e===null?null:e.stateNode,e};var Og={bundleType:0,version:"19.2.3",rendererPackageName:"react-dom",currentDispatcherRef:_,reconcilerVersion:"19.2.3"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var si=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!si.isDisabled&&si.supportsFiber)try{Xn=si.inject(Og),ct=si}catch{}}return Hl.createRoot=function(e,t){if(!f(e))throw Error(u(299));var a=!1,n="",l=md,o=pd,r=hd;return t!=null&&(t.unstable_strictMode===!0&&(a=!0),t.identifierPrefix!==void 0&&(n=t.identifierPrefix),t.onUncaughtError!==void 0&&(l=t.onUncaughtError),t.onCaughtError!==void 0&&(o=t.onCaughtError),t.onRecoverableError!==void 0&&(r=t.onRecoverableError)),t=$f(e,1,!1,null,null,a,n,null,l,o,r,im),e[an]=t.current,yu(e),new qu(t)},Hl.hydrateRoot=function(e,t,a){if(!f(e))throw Error(u(299));var n=!1,l="",o=md,r=pd,c=hd,h=null;return a!=null&&(a.unstable_strictMode===!0&&(n=!0),a.identifierPrefix!==void 0&&(l=a.identifierPrefix),a.onUncaughtError!==void 0&&(o=a.onUncaughtError),a.onCaughtError!==void 0&&(r=a.onCaughtError),a.onRecoverableError!==void 0&&(c=a.onRecoverableError),a.formState!==void 0&&(h=a.formState)),t=$f(e,1,!0,t,a??null,n,l,h,o,r,c,im),t.context=If(null),a=t.current,n=vt(),n=Ri(n),l=va(n),l.callback=null,ba(a,l,n),a=n,t.current.lanes=a,Zn(t,a),Vt(t),e[an]=t.current,yu(e),new ui(t)},Hl.version="19.2.3",Hl}var ym;function Bg(){if(ym)return Bu.exports;ym=1;function i(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i)}catch(s){console.error(s)}}return i(),Bu.exports=Hg(),Bu.exports}var Vg=Bg();var vm="popstate";function Gg(i={}){function s(u,f){let{pathname:m,search:y,hash:N}=u.location;return Iu("",{pathname:m,search:y,hash:N},f.state&&f.state.usr||null,f.state&&f.state.key||"default")}function d(u,f){return typeof f=="string"?f:Gl(f)}return Qg(s,d,null,i)}function Oe(i,s){if(i===!1||i===null||typeof i>"u")throw new Error(s)}function qt(i,s){if(!i){typeof console<"u"&&console.warn(s);try{throw new Error(s)}catch{}}}function Yg(){return Math.random().toString(36).substring(2,10)}function bm(i,s){return{usr:i.state,key:i.key,idx:s}}function Iu(i,s,d=null,u){return{pathname:typeof i=="string"?i:i.pathname,search:"",hash:"",...typeof s=="string"?Yn(s):s,state:d,key:s&&s.key||u||Yg()}}function Gl({pathname:i="/",search:s="",hash:d=""}){return s&&s!=="?"&&(i+=s.charAt(0)==="?"?s:"?"+s),d&&d!=="#"&&(i+=d.charAt(0)==="#"?d:"#"+d),i}function Yn(i){let s={};if(i){let d=i.indexOf("#");d>=0&&(s.hash=i.substring(d),i=i.substring(0,d));let u=i.indexOf("?");u>=0&&(s.search=i.substring(u),i=i.substring(0,u)),i&&(s.pathname=i)}return s}function Qg(i,s,d,u={}){let{window:f=document.defaultView,v5Compat:m=!1}=u,y=f.history,N="POP",b=null,g=j();g==null&&(g=0,y.replaceState({...y.state,idx:g},""));function j(){return(y.state||{idx:null}).idx}function T(){N="POP";let L=j(),G=L==null?null:L-g;g=L,b&&b({action:N,location:Y.location,delta:G})}function U(L,G){N="PUSH";let H=Iu(Y.location,L,G);g=j()+1;let Z=bm(H,g),de=Y.createHref(H);try{y.pushState(Z,"",de)}catch(ne){if(ne instanceof DOMException&&ne.name==="DataCloneError")throw ne;f.location.assign(de)}m&&b&&b({action:N,location:Y.location,delta:1})}function q(L,G){N="REPLACE";let H=Iu(Y.location,L,G);g=j();let Z=bm(H,g),de=Y.createHref(H);y.replaceState(Z,"",de),m&&b&&b({action:N,location:Y.location,delta:0})}function Q(L){return kg(L)}let Y={get action(){return N},get location(){return i(f,y)},listen(L){if(b)throw new Error("A history only accepts one active listener");return f.addEventListener(vm,T),b=L,()=>{f.removeEventListener(vm,T),b=null}},createHref(L){return s(f,L)},createURL:Q,encodeLocation(L){let G=Q(L);return{pathname:G.pathname,search:G.search,hash:G.hash}},push:U,replace:q,go(L){return y.go(L)}};return Y}function kg(i,s=!1){let d="http://localhost";typeof window<"u"&&(d=window.location.origin!=="null"?window.location.origin:window.location.href),Oe(d,"No window.location.(origin|href) available to create URL");let u=typeof i=="string"?i:Gl(i);return u=u.replace(/ $/,"%20"),!s&&u.startsWith("//")&&(u=d+u),new URL(u,d)}function zm(i,s,d="/"){return Xg(i,s,d,!1)}function Xg(i,s,d,u){let f=typeof s=="string"?Yn(s):s,m=sa(f.pathname||"/",d);if(m==null)return null;let y=Dm(i);Jg(y);let N=null;for(let b=0;N==null&&b<y.length;++b){let g=ny(m);N=ty(y[b],g,u)}return N}function Dm(i,s=[],d=[],u="",f=!1){let m=(y,N,b=f,g)=>{let j={relativePath:g===void 0?y.path||"":g,caseSensitive:y.caseSensitive===!0,childrenIndex:N,route:y};if(j.relativePath.startsWith("/")){if(!j.relativePath.startsWith(u)&&b)return;Oe(j.relativePath.startsWith(u),`Absolute route path "${j.relativePath}" nested under path "${u}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),j.relativePath=j.relativePath.slice(u.length)}let T=ua([u,j.relativePath]),U=d.concat(j);y.children&&y.children.length>0&&(Oe(y.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${T}".`),Dm(y.children,s,U,T,b)),!(y.path==null&&!y.index)&&s.push({path:T,score:Pg(T,y.index),routesMeta:U})};return i.forEach((y,N)=>{if(y.path===""||!y.path?.includes("?"))m(y,N);else for(let b of Um(y.path))m(y,N,!0,b)}),s}function Um(i){let s=i.split("/");if(s.length===0)return[];let[d,...u]=s,f=d.endsWith("?"),m=d.replace(/\?$/,"");if(u.length===0)return f?[m,""]:[m];let y=Um(u.join("/")),N=[];return N.push(...y.map(b=>b===""?m:[m,b].join("/"))),f&&N.push(...y),N.map(b=>i.startsWith("/")&&b===""?"/":b)}function Jg(i){i.sort((s,d)=>s.score!==d.score?d.score-s.score:ey(s.routesMeta.map(u=>u.childrenIndex),d.routesMeta.map(u=>u.childrenIndex)))}var Zg=/^:[\w-]+$/,Kg=3,$g=2,Ig=1,Fg=10,Wg=-2,Em=i=>i==="*";function Pg(i,s){let d=i.split("/"),u=d.length;return d.some(Em)&&(u+=Wg),s&&(u+=$g),d.filter(f=>!Em(f)).reduce((f,m)=>f+(Zg.test(m)?Kg:m===""?Ig:Fg),u)}function ey(i,s){return i.length===s.length&&i.slice(0,-1).every((u,f)=>u===s[f])?i[i.length-1]-s[s.length-1]:0}function ty(i,s,d=!1){let{routesMeta:u}=i,f={},m="/",y=[];for(let N=0;N<u.length;++N){let b=u[N],g=N===u.length-1,j=m==="/"?s:s.slice(m.length)||"/",T=mi({path:b.relativePath,caseSensitive:b.caseSensitive,end:g},j),U=b.route;if(!T&&g&&d&&!u[u.length-1].route.index&&(T=mi({path:b.relativePath,caseSensitive:b.caseSensitive,end:!1},j)),!T)return null;Object.assign(f,T.params),y.push({params:f,pathname:ua([m,T.pathname]),pathnameBase:ry(ua([m,T.pathnameBase])),route:U}),T.pathnameBase!=="/"&&(m=ua([m,T.pathnameBase]))}return y}function mi(i,s){typeof i=="string"&&(i={path:i,caseSensitive:!1,end:!0});let[d,u]=ay(i.path,i.caseSensitive,i.end),f=s.match(d);if(!f)return null;let m=f[0],y=m.replace(/(.)\/+$/,"$1"),N=f.slice(1);return{params:u.reduce((g,{paramName:j,isOptional:T},U)=>{if(j==="*"){let Q=N[U]||"";y=m.slice(0,m.length-Q.length).replace(/(.)\/+$/,"$1")}const q=N[U];return T&&!q?g[j]=void 0:g[j]=(q||"").replace(/%2F/g,"/"),g},{}),pathname:m,pathnameBase:y,pattern:i}}function ay(i,s=!1,d=!0){qt(i==="*"||!i.endsWith("*")||i.endsWith("/*"),`Route path "${i}" will be treated as if it were "${i.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${i.replace(/\*$/,"/*")}".`);let u=[],f="^"+i.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(y,N,b)=>(u.push({paramName:N,isOptional:b!=null}),b?"/?([^\\/]+)?":"/([^\\/]+)")).replace(/\/([\w-]+)\?(\/|$)/g,"(/$1)?$2");return i.endsWith("*")?(u.push({paramName:"*"}),f+=i==="*"||i==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):d?f+="\\/*$":i!==""&&i!=="/"&&(f+="(?:(?=\\/|$))"),[new RegExp(f,s?void 0:"i"),u]}function ny(i){try{return i.split("/").map(s=>decodeURIComponent(s).replace(/\//g,"%2F")).join("/")}catch(s){return qt(!1,`The URL path "${i}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${s}).`),i}}function sa(i,s){if(s==="/")return i;if(!i.toLowerCase().startsWith(s.toLowerCase()))return null;let d=s.endsWith("/")?s.length-1:s.length,u=i.charAt(d);return u&&u!=="/"?null:i.slice(d)||"/"}var qm=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,ly=i=>qm.test(i);function oy(i,s="/"){let{pathname:d,search:u="",hash:f=""}=typeof i=="string"?Yn(i):i,m;if(d)if(ly(d))m=d;else{if(d.includes("//")){let y=d;d=d.replace(/\/\/+/g,"/"),qt(!1,`Pathnames cannot have embedded double slashes - normalizing ${y} -> ${d}`)}d.startsWith("/")?m=Sm(d.substring(1),"/"):m=Sm(d,s)}else m=s;return{pathname:m,search:uy(u),hash:sy(f)}}function Sm(i,s){let d=s.replace(/\/+$/,"").split("/");return i.split("/").forEach(f=>{f===".."?d.length>1&&d.pop():f!=="."&&d.push(f)}),d.length>1?d.join("/"):"/"}function Qu(i,s,d,u){return`Cannot include a '${i}' character in a manually specified \`to.${s}\` field [${JSON.stringify(u)}].  Please separate it out to the \`to.${d}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function iy(i){return i.filter((s,d)=>d===0||s.route.path&&s.route.path.length>0)}function Lm(i){let s=iy(i);return s.map((d,u)=>u===s.length-1?d.pathname:d.pathnameBase)}function Hm(i,s,d,u=!1){let f;typeof i=="string"?f=Yn(i):(f={...i},Oe(!f.pathname||!f.pathname.includes("?"),Qu("?","pathname","search",f)),Oe(!f.pathname||!f.pathname.includes("#"),Qu("#","pathname","hash",f)),Oe(!f.search||!f.search.includes("#"),Qu("#","search","hash",f)));let m=i===""||f.pathname==="",y=m?"/":f.pathname,N;if(y==null)N=d;else{let T=s.length-1;if(!u&&y.startsWith("..")){let U=y.split("/");for(;U[0]==="..";)U.shift(),T-=1;f.pathname=U.join("/")}N=T>=0?s[T]:"/"}let b=oy(f,N),g=y&&y!=="/"&&y.endsWith("/"),j=(m||y===".")&&d.endsWith("/");return!b.pathname.endsWith("/")&&(g||j)&&(b.pathname+="/"),b}var ua=i=>i.join("/").replace(/\/\/+/g,"/"),ry=i=>i.replace(/\/+$/,"").replace(/^\/*/,"/"),uy=i=>!i||i==="?"?"":i.startsWith("?")?i:"?"+i,sy=i=>!i||i==="#"?"":i.startsWith("#")?i:"#"+i,cy=class{constructor(i,s,d,u=!1){this.status=i,this.statusText=s||"",this.internal=u,d instanceof Error?(this.data=d.toString(),this.error=d):this.data=d}};function dy(i){return i!=null&&typeof i.status=="number"&&typeof i.statusText=="string"&&typeof i.internal=="boolean"&&"data"in i}function fy(i){return i.map(s=>s.route.path).filter(Boolean).join("/").replace(/\/\/*/g,"/")||"/"}var Bm=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";function Vm(i,s){let d=i;if(typeof d!="string"||!qm.test(d))return{absoluteURL:void 0,isExternal:!1,to:d};let u=d,f=!1;if(Bm)try{let m=new URL(window.location.href),y=d.startsWith("//")?new URL(m.protocol+d):new URL(d),N=sa(y.pathname,s);y.origin===m.origin&&N!=null?d=N+y.search+y.hash:f=!0}catch{qt(!1,`<Link to="${d}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}return{absoluteURL:u,isExternal:f,to:d}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");var Gm=["POST","PUT","PATCH","DELETE"];new Set(Gm);var my=["GET",...Gm];new Set(my);var Qn=A.createContext(null);Qn.displayName="DataRouter";var gi=A.createContext(null);gi.displayName="DataRouterState";var py=A.createContext(!1),Ym=A.createContext({isTransitioning:!1});Ym.displayName="ViewTransition";var hy=A.createContext(new Map);hy.displayName="Fetchers";var gy=A.createContext(null);gy.displayName="Await";var _t=A.createContext(null);_t.displayName="Navigation";var Yl=A.createContext(null);Yl.displayName="Location";var Yt=A.createContext({outlet:null,matches:[],isDataRoute:!1});Yt.displayName="Route";var Pu=A.createContext(null);Pu.displayName="RouteError";var Qm="REACT_ROUTER_ERROR",yy="REDIRECT",vy="ROUTE_ERROR_RESPONSE";function by(i){if(i.startsWith(`${Qm}:${yy}:{`))try{let s=JSON.parse(i.slice(28));if(typeof s=="object"&&s&&typeof s.status=="number"&&typeof s.statusText=="string"&&typeof s.location=="string"&&typeof s.reloadDocument=="boolean"&&typeof s.replace=="boolean")return s}catch{}}function Ey(i){if(i.startsWith(`${Qm}:${vy}:{`))try{let s=JSON.parse(i.slice(40));if(typeof s=="object"&&s&&typeof s.status=="number"&&typeof s.statusText=="string")return new cy(s.status,s.statusText,s.data)}catch{}}function Sy(i,{relative:s}={}){Oe(Ql(),"useHref() may be used only in the context of a <Router> component.");let{basename:d,navigator:u}=A.useContext(_t),{hash:f,pathname:m,search:y}=kl(i,{relative:s}),N=m;return d!=="/"&&(N=m==="/"?d:ua([d,m])),u.createHref({pathname:N,search:y,hash:f})}function Ql(){return A.useContext(Yl)!=null}function tn(){return Oe(Ql(),"useLocation() may be used only in the context of a <Router> component."),A.useContext(Yl).location}var km="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function Xm(i){A.useContext(_t).static||A.useLayoutEffect(i)}function yi(){let{isDataRoute:i}=A.useContext(Yt);return i?qy():Ty()}function Ty(){Oe(Ql(),"useNavigate() may be used only in the context of a <Router> component.");let i=A.useContext(Qn),{basename:s,navigator:d}=A.useContext(_t),{matches:u}=A.useContext(Yt),{pathname:f}=tn(),m=JSON.stringify(Lm(u)),y=A.useRef(!1);return Xm(()=>{y.current=!0}),A.useCallback((b,g={})=>{if(qt(y.current,km),!y.current)return;if(typeof b=="number"){d.go(b);return}let j=Hm(b,JSON.parse(m),f,g.relative==="path");i==null&&s!=="/"&&(j.pathname=j.pathname==="/"?s:ua([s,j.pathname])),(g.replace?d.replace:d.push)(j,g.state,g)},[s,d,m,f,i])}var xy=A.createContext(null);function Cy(i){let s=A.useContext(Yt).outlet;return A.useMemo(()=>s&&A.createElement(xy.Provider,{value:i},s),[s,i])}function kl(i,{relative:s}={}){let{matches:d}=A.useContext(Yt),{pathname:u}=tn(),f=JSON.stringify(Lm(d));return A.useMemo(()=>Hm(i,JSON.parse(f),u,s==="path"),[i,f,u,s])}function Ay(i,s){return Jm(i,s)}function Jm(i,s,d,u,f){Oe(Ql(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:m}=A.useContext(_t),{matches:y}=A.useContext(Yt),N=y[y.length-1],b=N?N.params:{},g=N?N.pathname:"/",j=N?N.pathnameBase:"/",T=N&&N.route;{let H=T&&T.path||"";Km(g,!T||H.endsWith("*")||H.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${g}" (under <Route path="${H}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${H}"> to <Route path="${H==="/"?"*":`${H}/*`}">.`)}let U=tn(),q;if(s){let H=typeof s=="string"?Yn(s):s;Oe(j==="/"||H.pathname?.startsWith(j),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${j}" but pathname "${H.pathname}" was given in the \`location\` prop.`),q=H}else q=U;let Q=q.pathname||"/",Y=Q;if(j!=="/"){let H=j.replace(/^\//,"").split("/");Y="/"+Q.replace(/^\//,"").split("/").slice(H.length).join("/")}let L=zm(i,{pathname:Y});qt(T||L!=null,`No routes matched location "${q.pathname}${q.search}${q.hash}" `),qt(L==null||L[L.length-1].route.element!==void 0||L[L.length-1].route.Component!==void 0||L[L.length-1].route.lazy!==void 0,`Matched leaf route at location "${q.pathname}${q.search}${q.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let G=My(L&&L.map(H=>Object.assign({},H,{params:Object.assign({},b,H.params),pathname:ua([j,m.encodeLocation?m.encodeLocation(H.pathname.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:H.pathname]),pathnameBase:H.pathnameBase==="/"?j:ua([j,m.encodeLocation?m.encodeLocation(H.pathnameBase.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:H.pathnameBase])})),y,d,u,f);return s&&G?A.createElement(Yl.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...q},navigationType:"POP"}},G):G}function Ry(){let i=Uy(),s=dy(i)?`${i.status} ${i.statusText}`:i instanceof Error?i.message:JSON.stringify(i),d=i instanceof Error?i.stack:null,u="rgba(200,200,200, 0.5)",f={padding:"0.5rem",backgroundColor:u},m={padding:"2px 4px",backgroundColor:u},y=null;return console.error("Error handled by React Router default ErrorBoundary:",i),y=A.createElement(A.Fragment,null,A.createElement("p",null,"💿 Hey developer 👋"),A.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",A.createElement("code",{style:m},"ErrorBoundary")," or"," ",A.createElement("code",{style:m},"errorElement")," prop on your route.")),A.createElement(A.Fragment,null,A.createElement("h2",null,"Unexpected Application Error!"),A.createElement("h3",{style:{fontStyle:"italic"}},s),d?A.createElement("pre",{style:f},d):null,y)}var Ny=A.createElement(Ry,null),Zm=class extends A.Component{constructor(i){super(i),this.state={location:i.location,revalidation:i.revalidation,error:i.error}}static getDerivedStateFromError(i){return{error:i}}static getDerivedStateFromProps(i,s){return s.location!==i.location||s.revalidation!=="idle"&&i.revalidation==="idle"?{error:i.error,location:i.location,revalidation:i.revalidation}:{error:i.error!==void 0?i.error:s.error,location:s.location,revalidation:i.revalidation||s.revalidation}}componentDidCatch(i,s){this.props.onError?this.props.onError(i,s):console.error("React Router caught the following error during render",i)}render(){let i=this.state.error;if(this.context&&typeof i=="object"&&i&&"digest"in i&&typeof i.digest=="string"){const d=Ey(i.digest);d&&(i=d)}let s=i!==void 0?A.createElement(Yt.Provider,{value:this.props.routeContext},A.createElement(Pu.Provider,{value:i,children:this.props.component})):this.props.children;return this.context?A.createElement(jy,{error:i},s):s}};Zm.contextType=py;var ku=new WeakMap;function jy({children:i,error:s}){let{basename:d}=A.useContext(_t);if(typeof s=="object"&&s&&"digest"in s&&typeof s.digest=="string"){let u=by(s.digest);if(u){let f=ku.get(s);if(f)throw f;let m=Vm(u.location,d);if(Bm&&!ku.get(s))if(m.isExternal||u.reloadDocument)window.location.href=m.absoluteURL||m.to;else{const y=Promise.resolve().then(()=>window.__reactRouterDataRouter.navigate(m.to,{replace:u.replace}));throw ku.set(s,y),y}return A.createElement("meta",{httpEquiv:"refresh",content:`0;url=${m.absoluteURL||m.to}`})}}return i}function Oy({routeContext:i,match:s,children:d}){let u=A.useContext(Qn);return u&&u.static&&u.staticContext&&(s.route.errorElement||s.route.ErrorBoundary)&&(u.staticContext._deepestRenderedBoundaryId=s.route.id),A.createElement(Yt.Provider,{value:i},d)}function My(i,s=[],d=null,u=null,f=null){if(i==null){if(!d)return null;if(d.errors)i=d.matches;else if(s.length===0&&!d.initialized&&d.matches.length>0)i=d.matches;else return null}let m=i,y=d?.errors;if(y!=null){let j=m.findIndex(T=>T.route.id&&y?.[T.route.id]!==void 0);Oe(j>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(y).join(",")}`),m=m.slice(0,Math.min(m.length,j+1))}let N=!1,b=-1;if(d)for(let j=0;j<m.length;j++){let T=m[j];if((T.route.HydrateFallback||T.route.hydrateFallbackElement)&&(b=j),T.route.id){let{loaderData:U,errors:q}=d,Q=T.route.loader&&!U.hasOwnProperty(T.route.id)&&(!q||q[T.route.id]===void 0);if(T.route.lazy||Q){N=!0,b>=0?m=m.slice(0,b+1):m=[m[0]];break}}}let g=d&&u?(j,T)=>{u(j,{location:d.location,params:d.matches?.[0]?.params??{},unstable_pattern:fy(d.matches),errorInfo:T})}:void 0;return m.reduceRight((j,T,U)=>{let q,Q=!1,Y=null,L=null;d&&(q=y&&T.route.id?y[T.route.id]:void 0,Y=T.route.errorElement||Ny,N&&(b<0&&U===0?(Km("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),Q=!0,L=null):b===U&&(Q=!0,L=T.route.hydrateFallbackElement||null)));let G=s.concat(m.slice(0,U+1)),H=()=>{let Z;return q?Z=Y:Q?Z=L:T.route.Component?Z=A.createElement(T.route.Component,null):T.route.element?Z=T.route.element:Z=j,A.createElement(Oy,{match:T,routeContext:{outlet:j,matches:G,isDataRoute:d!=null},children:Z})};return d&&(T.route.ErrorBoundary||T.route.errorElement||U===0)?A.createElement(Zm,{location:d.location,revalidation:d.revalidation,component:Y,error:q,children:H(),routeContext:{outlet:null,matches:G,isDataRoute:!0},onError:g}):H()},null)}function es(i){return`${i} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function _y(i){let s=A.useContext(Qn);return Oe(s,es(i)),s}function wy(i){let s=A.useContext(gi);return Oe(s,es(i)),s}function zy(i){let s=A.useContext(Yt);return Oe(s,es(i)),s}function ts(i){let s=zy(i),d=s.matches[s.matches.length-1];return Oe(d.route.id,`${i} can only be used on routes that contain a unique "id"`),d.route.id}function Dy(){return ts("useRouteId")}function Uy(){let i=A.useContext(Pu),s=wy("useRouteError"),d=ts("useRouteError");return i!==void 0?i:s.errors?.[d]}function qy(){let{router:i}=_y("useNavigate"),s=ts("useNavigate"),d=A.useRef(!1);return Xm(()=>{d.current=!0}),A.useCallback(async(f,m={})=>{qt(d.current,km),d.current&&(typeof f=="number"?await i.navigate(f):await i.navigate(f,{fromRouteId:s,...m}))},[i,s])}var Tm={};function Km(i,s,d){!s&&!Tm[i]&&(Tm[i]=!0,qt(!1,d))}A.memo(Ly);function Ly({routes:i,future:s,state:d,onError:u}){return Jm(i,void 0,d,u,s)}function Hy(i){return Cy(i.context)}function Vl(i){Oe(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function By({basename:i="/",children:s=null,location:d,navigationType:u="POP",navigator:f,static:m=!1,unstable_useTransitions:y}){Oe(!Ql(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let N=i.replace(/^\/*/,"/"),b=A.useMemo(()=>({basename:N,navigator:f,static:m,unstable_useTransitions:y,future:{}}),[N,f,m,y]);typeof d=="string"&&(d=Yn(d));let{pathname:g="/",search:j="",hash:T="",state:U=null,key:q="default"}=d,Q=A.useMemo(()=>{let Y=sa(g,N);return Y==null?null:{location:{pathname:Y,search:j,hash:T,state:U,key:q},navigationType:u}},[N,g,j,T,U,q,u]);return qt(Q!=null,`<Router basename="${N}"> is not able to match the URL "${g}${j}${T}" because it does not start with the basename, so the <Router> won't render anything.`),Q==null?null:A.createElement(_t.Provider,{value:b},A.createElement(Yl.Provider,{children:s,value:Q}))}function Vy({children:i,location:s}){return Ay(Fu(i),s)}function Fu(i,s=[]){let d=[];return A.Children.forEach(i,(u,f)=>{if(!A.isValidElement(u))return;let m=[...s,f];if(u.type===A.Fragment){d.push.apply(d,Fu(u.props.children,m));return}Oe(u.type===Vl,`[${typeof u.type=="string"?u.type:u.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),Oe(!u.props.index||!u.props.children,"An index route cannot have child routes.");let y={id:u.props.id||m.join("-"),caseSensitive:u.props.caseSensitive,element:u.props.element,Component:u.props.Component,index:u.props.index,path:u.props.path,middleware:u.props.middleware,loader:u.props.loader,action:u.props.action,hydrateFallbackElement:u.props.hydrateFallbackElement,HydrateFallback:u.props.HydrateFallback,errorElement:u.props.errorElement,ErrorBoundary:u.props.ErrorBoundary,hasErrorBoundary:u.props.hasErrorBoundary===!0||u.props.ErrorBoundary!=null||u.props.errorElement!=null,shouldRevalidate:u.props.shouldRevalidate,handle:u.props.handle,lazy:u.props.lazy};u.props.children&&(y.children=Fu(u.props.children,m)),d.push(y)}),d}var di="get",fi="application/x-www-form-urlencoded";function vi(i){return typeof HTMLElement<"u"&&i instanceof HTMLElement}function Gy(i){return vi(i)&&i.tagName.toLowerCase()==="button"}function Yy(i){return vi(i)&&i.tagName.toLowerCase()==="form"}function Qy(i){return vi(i)&&i.tagName.toLowerCase()==="input"}function ky(i){return!!(i.metaKey||i.altKey||i.ctrlKey||i.shiftKey)}function Xy(i,s){return i.button===0&&(!s||s==="_self")&&!ky(i)}var ci=null;function Jy(){if(ci===null)try{new FormData(document.createElement("form"),0),ci=!1}catch{ci=!0}return ci}var Zy=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function Xu(i){return i!=null&&!Zy.has(i)?(qt(!1,`"${i}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${fi}"`),null):i}function Ky(i,s){let d,u,f,m,y;if(Yy(i)){let N=i.getAttribute("action");u=N?sa(N,s):null,d=i.getAttribute("method")||di,f=Xu(i.getAttribute("enctype"))||fi,m=new FormData(i)}else if(Gy(i)||Qy(i)&&(i.type==="submit"||i.type==="image")){let N=i.form;if(N==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let b=i.getAttribute("formaction")||N.getAttribute("action");if(u=b?sa(b,s):null,d=i.getAttribute("formmethod")||N.getAttribute("method")||di,f=Xu(i.getAttribute("formenctype"))||Xu(N.getAttribute("enctype"))||fi,m=new FormData(N,i),!Jy()){let{name:g,type:j,value:T}=i;if(j==="image"){let U=g?`${g}.`:"";m.append(`${U}x`,"0"),m.append(`${U}y`,"0")}else g&&m.append(g,T)}}else{if(vi(i))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');d=di,u=null,f=fi,y=i}return m&&f==="text/plain"&&(y=m,m=void 0),{action:u,method:d.toLowerCase(),encType:f,formData:m,body:y}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function as(i,s){if(i===!1||i===null||typeof i>"u")throw new Error(s)}function $y(i,s,d,u){let f=typeof i=="string"?new URL(i,typeof window>"u"?"server://singlefetch/":window.location.origin):i;return d?f.pathname.endsWith("/")?f.pathname=`${f.pathname}_.${u}`:f.pathname=`${f.pathname}.${u}`:f.pathname==="/"?f.pathname=`_root.${u}`:s&&sa(f.pathname,s)==="/"?f.pathname=`${s.replace(/\/$/,"")}/_root.${u}`:f.pathname=`${f.pathname.replace(/\/$/,"")}.${u}`,f}async function Iy(i,s){if(i.id in s)return s[i.id];try{let d=await import(i.module);return s[i.id]=d,d}catch(d){return console.error(`Error loading route module \`${i.module}\`, reloading page...`),console.error(d),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function Fy(i){return i==null?!1:i.href==null?i.rel==="preload"&&typeof i.imageSrcSet=="string"&&typeof i.imageSizes=="string":typeof i.rel=="string"&&typeof i.href=="string"}async function Wy(i,s,d){let u=await Promise.all(i.map(async f=>{let m=s.routes[f.route.id];if(m){let y=await Iy(m,d);return y.links?y.links():[]}return[]}));return av(u.flat(1).filter(Fy).filter(f=>f.rel==="stylesheet"||f.rel==="preload").map(f=>f.rel==="stylesheet"?{...f,rel:"prefetch",as:"style"}:{...f,rel:"prefetch"}))}function xm(i,s,d,u,f,m){let y=(b,g)=>d[g]?b.route.id!==d[g].route.id:!0,N=(b,g)=>d[g].pathname!==b.pathname||d[g].route.path?.endsWith("*")&&d[g].params["*"]!==b.params["*"];return m==="assets"?s.filter((b,g)=>y(b,g)||N(b,g)):m==="data"?s.filter((b,g)=>{let j=u.routes[b.route.id];if(!j||!j.hasLoader)return!1;if(y(b,g)||N(b,g))return!0;if(b.route.shouldRevalidate){let T=b.route.shouldRevalidate({currentUrl:new URL(f.pathname+f.search+f.hash,window.origin),currentParams:d[0]?.params||{},nextUrl:new URL(i,window.origin),nextParams:b.params,defaultShouldRevalidate:!0});if(typeof T=="boolean")return T}return!0}):[]}function Py(i,s,{includeHydrateFallback:d}={}){return ev(i.map(u=>{let f=s.routes[u.route.id];if(!f)return[];let m=[f.module];return f.clientActionModule&&(m=m.concat(f.clientActionModule)),f.clientLoaderModule&&(m=m.concat(f.clientLoaderModule)),d&&f.hydrateFallbackModule&&(m=m.concat(f.hydrateFallbackModule)),f.imports&&(m=m.concat(f.imports)),m}).flat(1))}function ev(i){return[...new Set(i)]}function tv(i){let s={},d=Object.keys(i).sort();for(let u of d)s[u]=i[u];return s}function av(i,s){let d=new Set;return new Set(s),i.reduce((u,f)=>{let m=JSON.stringify(tv(f));return d.has(m)||(d.add(m),u.push({key:m,link:f})),u},[])}function $m(){let i=A.useContext(Qn);return as(i,"You must render this element inside a <DataRouterContext.Provider> element"),i}function nv(){let i=A.useContext(gi);return as(i,"You must render this element inside a <DataRouterStateContext.Provider> element"),i}var ns=A.createContext(void 0);ns.displayName="FrameworkContext";function Im(){let i=A.useContext(ns);return as(i,"You must render this element inside a <HydratedRouter> element"),i}function lv(i,s){let d=A.useContext(ns),[u,f]=A.useState(!1),[m,y]=A.useState(!1),{onFocus:N,onBlur:b,onMouseEnter:g,onMouseLeave:j,onTouchStart:T}=s,U=A.useRef(null);A.useEffect(()=>{if(i==="render"&&y(!0),i==="viewport"){let Y=G=>{G.forEach(H=>{y(H.isIntersecting)})},L=new IntersectionObserver(Y,{threshold:.5});return U.current&&L.observe(U.current),()=>{L.disconnect()}}},[i]),A.useEffect(()=>{if(u){let Y=setTimeout(()=>{y(!0)},100);return()=>{clearTimeout(Y)}}},[u]);let q=()=>{f(!0)},Q=()=>{f(!1),y(!1)};return d?i!=="intent"?[m,U,{}]:[m,U,{onFocus:Bl(N,q),onBlur:Bl(b,Q),onMouseEnter:Bl(g,q),onMouseLeave:Bl(j,Q),onTouchStart:Bl(T,q)}]:[!1,U,{}]}function Bl(i,s){return d=>{i&&i(d),d.defaultPrevented||s(d)}}function ov({page:i,...s}){let{router:d}=$m(),u=A.useMemo(()=>zm(d.routes,i,d.basename),[d.routes,i,d.basename]);return u?A.createElement(rv,{page:i,matches:u,...s}):null}function iv(i){let{manifest:s,routeModules:d}=Im(),[u,f]=A.useState([]);return A.useEffect(()=>{let m=!1;return Wy(i,s,d).then(y=>{m||f(y)}),()=>{m=!0}},[i,s,d]),u}function rv({page:i,matches:s,...d}){let u=tn(),{future:f,manifest:m,routeModules:y}=Im(),{basename:N}=$m(),{loaderData:b,matches:g}=nv(),j=A.useMemo(()=>xm(i,s,g,m,u,"data"),[i,s,g,m,u]),T=A.useMemo(()=>xm(i,s,g,m,u,"assets"),[i,s,g,m,u]),U=A.useMemo(()=>{if(i===u.pathname+u.search+u.hash)return[];let Y=new Set,L=!1;if(s.forEach(H=>{let Z=m.routes[H.route.id];!Z||!Z.hasLoader||(!j.some(de=>de.route.id===H.route.id)&&H.route.id in b&&y[H.route.id]?.shouldRevalidate||Z.hasClientLoader?L=!0:Y.add(H.route.id))}),Y.size===0)return[];let G=$y(i,N,f.unstable_trailingSlashAwareDataRequests,"data");return L&&Y.size>0&&G.searchParams.set("_routes",s.filter(H=>Y.has(H.route.id)).map(H=>H.route.id).join(",")),[G.pathname+G.search]},[N,f.unstable_trailingSlashAwareDataRequests,b,u,m,j,s,i,y]),q=A.useMemo(()=>Py(T,m),[T,m]),Q=iv(T);return A.createElement(A.Fragment,null,U.map(Y=>A.createElement("link",{key:Y,rel:"prefetch",as:"fetch",href:Y,...d})),q.map(Y=>A.createElement("link",{key:Y,rel:"modulepreload",href:Y,...d})),Q.map(({key:Y,link:L})=>A.createElement("link",{key:Y,nonce:d.nonce,...L})))}function uv(...i){return s=>{i.forEach(d=>{typeof d=="function"?d(s):d!=null&&(d.current=s)})}}var sv=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{sv&&(window.__reactRouterVersion="7.12.0")}catch{}function cv({basename:i,children:s,unstable_useTransitions:d,window:u}){let f=A.useRef();f.current==null&&(f.current=Gg({window:u,v5Compat:!0}));let m=f.current,[y,N]=A.useState({action:m.action,location:m.location}),b=A.useCallback(g=>{d===!1?N(g):A.startTransition(()=>N(g))},[d]);return A.useLayoutEffect(()=>m.listen(b),[m,b]),A.createElement(By,{basename:i,children:s,location:y.location,navigationType:y.action,navigator:m,unstable_useTransitions:d})}var Fm=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Gn=A.forwardRef(function({onClick:s,discover:d="render",prefetch:u="none",relative:f,reloadDocument:m,replace:y,state:N,target:b,to:g,preventScrollReset:j,viewTransition:T,unstable_defaultShouldRevalidate:U,...q},Q){let{basename:Y,unstable_useTransitions:L}=A.useContext(_t),G=typeof g=="string"&&Fm.test(g),H=Vm(g,Y);g=H.to;let Z=Sy(g,{relative:f}),[de,ne,pe]=lv(u,q),F=pv(g,{replace:y,state:N,target:b,preventScrollReset:j,relative:f,viewTransition:T,unstable_defaultShouldRevalidate:U,unstable_useTransitions:L});function je(Ye){s&&s(Ye),Ye.defaultPrevented||F(Ye)}let le=A.createElement("a",{...q,...pe,href:H.absoluteURL||Z,onClick:H.isExternal||m?s:je,ref:uv(Q,ne),target:b,"data-discover":!G&&d==="render"?"true":void 0});return de&&!G?A.createElement(A.Fragment,null,le,A.createElement(ov,{page:Z})):le});Gn.displayName="Link";var dv=A.forwardRef(function({"aria-current":s="page",caseSensitive:d=!1,className:u="",end:f=!1,style:m,to:y,viewTransition:N,children:b,...g},j){let T=kl(y,{relative:g.relative}),U=tn(),q=A.useContext(gi),{navigator:Q,basename:Y}=A.useContext(_t),L=q!=null&&bv(T)&&N===!0,G=Q.encodeLocation?Q.encodeLocation(T).pathname:T.pathname,H=U.pathname,Z=q&&q.navigation&&q.navigation.location?q.navigation.location.pathname:null;d||(H=H.toLowerCase(),Z=Z?Z.toLowerCase():null,G=G.toLowerCase()),Z&&Y&&(Z=sa(Z,Y)||Z);const de=G!=="/"&&G.endsWith("/")?G.length-1:G.length;let ne=H===G||!f&&H.startsWith(G)&&H.charAt(de)==="/",pe=Z!=null&&(Z===G||!f&&Z.startsWith(G)&&Z.charAt(G.length)==="/"),F={isActive:ne,isPending:pe,isTransitioning:L},je=ne?s:void 0,le;typeof u=="function"?le=u(F):le=[u,ne?"active":null,pe?"pending":null,L?"transitioning":null].filter(Boolean).join(" ");let Ye=typeof m=="function"?m(F):m;return A.createElement(Gn,{...g,"aria-current":je,className:le,ref:j,style:Ye,to:y,viewTransition:N},typeof b=="function"?b(F):b)});dv.displayName="NavLink";var fv=A.forwardRef(({discover:i="render",fetcherKey:s,navigate:d,reloadDocument:u,replace:f,state:m,method:y=di,action:N,onSubmit:b,relative:g,preventScrollReset:j,viewTransition:T,unstable_defaultShouldRevalidate:U,...q},Q)=>{let{unstable_useTransitions:Y}=A.useContext(_t),L=yv(),G=vv(N,{relative:g}),H=y.toLowerCase()==="get"?"get":"post",Z=typeof N=="string"&&Fm.test(N),de=ne=>{if(b&&b(ne),ne.defaultPrevented)return;ne.preventDefault();let pe=ne.nativeEvent.submitter,F=pe?.getAttribute("formmethod")||y,je=()=>L(pe||ne.currentTarget,{fetcherKey:s,method:F,navigate:d,replace:f,state:m,relative:g,preventScrollReset:j,viewTransition:T,unstable_defaultShouldRevalidate:U});Y&&d!==!1?A.startTransition(()=>je()):je()};return A.createElement("form",{ref:Q,method:H,action:G,onSubmit:u?b:de,...q,"data-discover":!Z&&i==="render"?"true":void 0})});fv.displayName="Form";function mv(i){return`${i} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Wm(i){let s=A.useContext(Qn);return Oe(s,mv(i)),s}function pv(i,{target:s,replace:d,state:u,preventScrollReset:f,relative:m,viewTransition:y,unstable_defaultShouldRevalidate:N,unstable_useTransitions:b}={}){let g=yi(),j=tn(),T=kl(i,{relative:m});return A.useCallback(U=>{if(Xy(U,s)){U.preventDefault();let q=d!==void 0?d:Gl(j)===Gl(T),Q=()=>g(i,{replace:q,state:u,preventScrollReset:f,relative:m,viewTransition:y,unstable_defaultShouldRevalidate:N});b?A.startTransition(()=>Q()):Q()}},[j,g,T,d,u,s,i,f,m,y,N,b])}var hv=0,gv=()=>`__${String(++hv)}__`;function yv(){let{router:i}=Wm("useSubmit"),{basename:s}=A.useContext(_t),d=Dy(),u=i.fetch,f=i.navigate;return A.useCallback(async(m,y={})=>{let{action:N,method:b,encType:g,formData:j,body:T}=Ky(m,s);if(y.navigate===!1){let U=y.fetcherKey||gv();await u(U,d,y.action||N,{unstable_defaultShouldRevalidate:y.unstable_defaultShouldRevalidate,preventScrollReset:y.preventScrollReset,formData:j,body:T,formMethod:y.method||b,formEncType:y.encType||g,flushSync:y.flushSync})}else await f(y.action||N,{unstable_defaultShouldRevalidate:y.unstable_defaultShouldRevalidate,preventScrollReset:y.preventScrollReset,formData:j,body:T,formMethod:y.method||b,formEncType:y.encType||g,replace:y.replace,state:y.state,fromRouteId:d,flushSync:y.flushSync,viewTransition:y.viewTransition})},[u,f,s,d])}function vv(i,{relative:s}={}){let{basename:d}=A.useContext(_t),u=A.useContext(Yt);Oe(u,"useFormAction must be used inside a RouteContext");let[f]=u.matches.slice(-1),m={...kl(i||".",{relative:s})},y=tn();if(i==null){m.search=y.search;let N=new URLSearchParams(m.search),b=N.getAll("index");if(b.some(j=>j==="")){N.delete("index"),b.filter(T=>T).forEach(T=>N.append("index",T));let j=N.toString();m.search=j?`?${j}`:""}}return(!i||i===".")&&f.route.index&&(m.search=m.search?m.search.replace(/^\?/,"?index&"):"?index"),d!=="/"&&(m.pathname=m.pathname==="/"?d:ua([d,m.pathname])),Gl(m)}function bv(i,{relative:s}={}){let d=A.useContext(Ym);Oe(d!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:u}=Wm("useViewTransitionState"),f=kl(i,{relative:s});if(!d.isTransitioning)return!1;let m=sa(d.currentLocation.pathname,u)||d.currentLocation.pathname,y=sa(d.nextLocation.pathname,u)||d.nextLocation.pathname;return mi(f.pathname,y)!=null||mi(f.pathname,m)!=null}const Ev="data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='utf-8'?%3e%3c!--%20Uploaded%20to:%20SVG%20Repo,%20www.svgrepo.com,%20Generator:%20SVG%20Repo%20Mixer%20Tools%20--%3e%3csvg%20width='800px'%20height='800px'%20viewBox='0%200%2024%2024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M3%205V20.7929C3%2021.2383%203.53857%2021.4614%203.85355%2021.1464L7.70711%2017.2929C7.89464%2017.1054%208.149%2017%208.41421%2017H19C20.1046%2017%2021%2016.1046%2021%2015V5C21%203.89543%2020.1046%203%2019%203H5C3.89543%203%203%203.89543%203%205Z'%20stroke='%23ffffff'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M15%2012C14.2005%2012.6224%2013.1502%2013%2012%2013C10.8498%2013%209.79952%2012.6224%209%2012'%20stroke='%23ffffff'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M9%208.01953V8'%20stroke='%23ffffff'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M15%208.01953V8'%20stroke='%23ffffff'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/svg%3e";var Ju={exports:{}},Zu={};var Cm;function Sv(){if(Cm)return Zu;Cm=1;var i=hi();function s(b,g){return b===g&&(b!==0||1/b===1/g)||b!==b&&g!==g}var d=typeof Object.is=="function"?Object.is:s,u=i.useSyncExternalStore,f=i.useRef,m=i.useEffect,y=i.useMemo,N=i.useDebugValue;return Zu.useSyncExternalStoreWithSelector=function(b,g,j,T,U){var q=f(null);if(q.current===null){var Q={hasValue:!1,value:null};q.current=Q}else Q=q.current;q=y(function(){function L(ne){if(!G){if(G=!0,H=ne,ne=T(ne),U!==void 0&&Q.hasValue){var pe=Q.value;if(U(pe,ne))return Z=pe}return Z=ne}if(pe=Z,d(H,ne))return pe;var F=T(ne);return U!==void 0&&U(pe,F)?(H=ne,pe):(H=ne,Z=F)}var G=!1,H,Z,de=j===void 0?null:j;return[function(){return L(g())},de===null?void 0:function(){return L(de())}]},[g,j,T,U]);var Y=u(b,q[0],q[1]);return m(function(){Q.hasValue=!0,Q.value=Y},[Y]),N(Y),Y},Zu}var Am;function Tv(){return Am||(Am=1,Ju.exports=Sv()),Ju.exports}var xv=Tv();function Cv(i){i()}function Av(){let i=null,s=null;return{clear(){i=null,s=null},notify(){Cv(()=>{let d=i;for(;d;)d.callback(),d=d.next})},get(){const d=[];let u=i;for(;u;)d.push(u),u=u.next;return d},subscribe(d){let u=!0;const f=s={callback:d,next:null,prev:s};return f.prev?f.prev.next=f:i=f,function(){!u||i===null||(u=!1,f.next?f.next.prev=f.prev:s=f.prev,f.prev?f.prev.next=f.next:i=f.next)}}}}var Rm={notify(){},get:()=>[]};function Rv(i,s){let d,u=Rm,f=0,m=!1;function y(Y){j();const L=u.subscribe(Y);let G=!1;return()=>{G||(G=!0,L(),T())}}function N(){u.notify()}function b(){Q.onStateChange&&Q.onStateChange()}function g(){return m}function j(){f++,d||(d=i.subscribe(b),u=Av())}function T(){f--,d&&f===0&&(d(),d=void 0,u.clear(),u=Rm)}function U(){m||(m=!0,j())}function q(){m&&(m=!1,T())}const Q={addNestedSub:y,notifyNestedSubs:N,handleChangeWrapper:b,isSubscribed:g,trySubscribe:U,tryUnsubscribe:q,getListeners:()=>u};return Q}var Nv=()=>typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",jv=Nv(),Ov=()=>typeof navigator<"u"&&navigator.product==="ReactNative",Mv=Ov(),_v=()=>jv||Mv?A.useLayoutEffect:A.useEffect,wv=_v(),zv=Symbol.for("react-redux-context"),Dv=typeof globalThis<"u"?globalThis:{};function Uv(){if(!A.createContext)return{};const i=Dv[zv]??=new Map;let s=i.get(A.createContext);return s||(s=A.createContext(null),i.set(A.createContext,s)),s}var Ua=Uv();function qv(i){const{children:s,context:d,serverState:u,store:f}=i,m=A.useMemo(()=>{const b=Rv(f);return{store:f,subscription:b,getServerState:u?()=>u:void 0}},[f,u]),y=A.useMemo(()=>f.getState(),[f]);wv(()=>{const{subscription:b}=m;return b.onStateChange=b.notifyNestedSubs,b.trySubscribe(),y!==f.getState()&&b.notifyNestedSubs(),()=>{b.tryUnsubscribe(),b.onStateChange=void 0}},[m,y]);const N=d||Ua;return A.createElement(N.Provider,{value:m},s)}var Lv=qv;function ls(i=Ua){return function(){return A.useContext(i)}}var Pm=ls();function ep(i=Ua){const s=i===Ua?Pm:ls(i),d=()=>{const{store:u}=s();return u};return Object.assign(d,{withTypes:()=>d}),d}var Hv=ep();function Bv(i=Ua){const s=i===Ua?Hv:ep(i),d=()=>s().dispatch;return Object.assign(d,{withTypes:()=>d}),d}var os=Bv(),Vv=(i,s)=>i===s;function Gv(i=Ua){const s=i===Ua?Pm:ls(i),d=(u,f={})=>{const{equalityFn:m=Vv}=typeof f=="function"?{equalityFn:f}:f,y=s(),{store:N,subscription:b,getServerState:g}=y;A.useRef(!0);const j=A.useCallback({[u.name](U){return u(U)}}[u.name],[u]),T=xv.useSyncExternalStoreWithSelector(b.addNestedSub,N.getState,g||N.getState,j,m);return A.useDebugValue(T),T};return Object.assign(d,{withTypes:()=>d}),d}var Fe=Gv();const Yv={start:{text:`¡Hola! Estoy aquí para ayudarte a conocerme.
Elige una opción:
            
            1) Acerca de mi
            2) Formación
            3) Experiencia
            4) Inquietudes
            5) Hobbies
            6) Contacto
            7) Ir a desafíos
            
Escribe un número (1-7) o una pregunta....`,next:{1:"about",2:"stds",3:"exp",4:"mind",5:"hobbys",6:"contact",7:"challenges"}},exit:{text:"Escribe 0 para volver al menú."},about:{text:`Soy un desarrollador full stack en constante evolución, apasionado por la tecnología y la creación de soluciones digitales.
Actualmente estoy ampliando formación en diversas tecnologías como Python, JavaScript, React, Node.js, MongoDB, SQL y PHP, con el objetivo de construir aplicaciones web eficientes, seguras y escalables`},stds:{text:`BootCamp Full Stack,
Grado Superior Desarrollador aplicaciones multiplataforma,
Cursos relacionados programación`},exp:{text:`Docente de programación Full Stack,
Jefe de equipo para desarrollo Full Stack,
Desarrollo de aplicaciónes Android Nativo`},mind:{text:`Mi enfoque se centra en el aprendizaje continuo y la búsqueda de la optimización, con especial interés en el desarrollo backend, la integración de servicios y la automatización de procesos.
Además, estoy aprendiendo a desplegar proyectos en servidores propios con Ubuntu y gestionando dominios, lo que me permite ofrecer soluciones completas desde la programación hasta la infraestructura`},hobbys:{text:"Senderismo, cine, lectura, viajar, playa, un poco de todo."},contact:{email:"agscm2@mail.com",phone:"+34644321368",linkedin:"https://www.linkedin.com/in/alegarse"}},Qv={start:{text:`Hi! I'm here to help you get to know me.
Choose an option:

            1) About me
            2) Education
            3) Experience
            4) Interests
            5) Hobbies
            6) Contact
            7) Go to challenges

Type a number (1–7) or ask a question...`,next:{1:"about",2:"stds",3:"exp",4:"mind",5:"hobbys",6:"contact",7:"challenges"}},exit:{text:"Type 0 to return to the main menu."},about:{text:`I am a full stack developer in constant evolution, passionate about technology and creating digital solutions.
I am currently expanding my training in various technologies such as Python, JavaScript, React, Node.js, MongoDB, SQL, and PHP, with the goal of building efficient, secure, and scalable web applications.`},stds:{text:`Full Stack Bootcamp,
Higher Degree in Multiplatform Application Development,
Programming-related courses.`},exp:{text:`Full Stack Programming Instructor,
Team Lead for Full Stack Development,
Native Android Application Development.`},mind:{text:`My approach focuses on continuous learning and the pursuit of optimization, with a strong interest in backend development, service integration, and process automation.
In addition, I am learning how to deploy projects on my own Ubuntu servers and manage domains, allowing me to offer complete solutions from development to infrastructure.`},hobbys:{text:"Hiking, cinema, reading, traveling, the beach — a bit of everything."},contact:{email:"agscm2@mail.com",phone:"+34644321368",linkedin:"https://www.linkedin.com/in/alegarse"}},kv={icon_title:{es:"Haz click aquí para recibir más información",en:"Click here to obtain more info"}},Xv=()=>{const i=yi(),[s,d]=A.useState("start"),[u,f]=A.useState(void 0),[m,y]=A.useState(p.jsx("span",{children:u?.start.text})),[N,b]=A.useState(""),[g,j]=A.useState(""),[T,U]=A.useState(!0),[q,Q]=A.useState(!1),{language:Y}=Fe(le=>le.menuComponentReducer),L=()=>{ne(),i("/challenges")},G=(le,Ye)=>{const Qe=u.start.next[Ye];let $=N.toLowerCase();if(Qe&&Qe==="contact")$="contacto";else if(Qe&&Qe==="challenges")$="challenge";else if(Qe){U(!1),y(`${u[Qe].text}

${u.exit.text}`);return}if($.includes("informacion")||$.includes("info")||$.includes("quien eres")||$.includes("who")||$.includes("sobre ti")||$.includes("about")){U(!1),y(`${u.about.text}

${u.exit.text}`);return}if($.includes("estudios")||$.includes("stud")||$.includes("formacion")||$.includes("planing")||$.includes("conocimiento")||$.includes("knowl")){U(!1),y(`${u.stds.text}

${u.exit.text}`);return}if($.includes("experiencia")||$.includes("experience")||$.includes("realizado")||$.includes("jobs")||$.includes("proyecto")||$.includes("project")){U(!1),y(`${u.exp.text}

${u.exit.text}`);return}if($.includes("inquietud")||$.includes("ambicion")||$.includes("mind")){U(!1),y(`${u.mind.text}

${u.exit.text}`);return}if($.includes("gustos")||$.includes("alias")||$.includes("hobb")||$.includes("ocio")){U(!1),y(`${u.hobbys.text}

${u.exit.text}`);return}if($.includes("inicio")||$.includes("menu")||$.includes("start")){U(!1),y(`${u.start.text}`);return}if($.includes("contacto")||$.includes("contact")||$.includes("escribir")||$.includes("writ")||$.includes("llamar")||$.includes("call")){const ut=u.contact;U(!1),y(p.jsxs(p.Fragment,{children:[p.jsxs("div",{className:"cw-contact-data",children:[p.jsxs("div",{className:"ref-contact",children:[p.jsx("span",{children:"Email:"}),p.jsx("a",{href:`mailto:${ut.email}`,target:"_blank",children:ut.email})]}),p.jsxs("div",{className:"ref-contact",children:[p.jsx("span",{children:"Teléfono:"}),p.jsx("a",{href:`tel:${ut.phone}`,children:ut.phone})]}),p.jsxs("div",{className:"ref-contact",children:[p.jsx("span",{children:"Perfil Prof.:"}),p.jsx("a",{href:ut.linkedin,target:"_blank",rel:"noopener noreferrer",children:"LinkedIn"})]})]}),p.jsx("br",{}),p.jsx("div",{children:u.exit.text})]}));return}if($.includes("challenge")||$.includes("desafio")){L();return}U(!1),y(`No te he entendido

${u.start.text}`)},H=le=>{b(le)},Z=le=>{if(le==="Enter"){if(N.trim()==="")return;de();return}if(le==="Escape"){ne();return}},de=()=>{const le=N.trim();if(le=="")return;if(j(le),F(),le==="0"){d("start"),y(u.start.text),U(!0),b("");return}const Ye=u.start.next[le]||s;d(Ye),G(Ye,le),U(!1),b("")},ne=()=>{U(!0),Q(!1),d("start"),y(u?.start.text)},pe=()=>{U(!0),Q(!q)},F=()=>{const le=document.querySelector("#cw-input");le.value=""},je=async()=>{const le=Y==="es"?Yv:Qv;f(le),y(p.jsx("span",{children:le.start.text}))};return A.useEffect(()=>{je()},[Y]),p.jsx("div",{className:"cw-container",children:q?p.jsxs("div",{className:"cw-panel",children:[p.jsxs("div",{className:"cw-header",children:[p.jsxs("div",{className:"cw-title",children:[p.jsx("strong",{children:"Asistente Portfolio"}),p.jsx("span",{children:"Respuestas rápidas"})]}),p.jsx("button",{className:"cw-close",type:"button","aria-label":"Cerrar",onClick:ne,children:"✕"})]}),p.jsx("div",{className:"cw-messages",role:"log","aria-live":"polite",children:T?p.jsx("div",{className:"cw-bubble cw-bot",children:m}):p.jsxs(p.Fragment,{children:[p.jsx("div",{className:"cw-bubble cw-user",children:g}),p.jsx("div",{className:"cw-bubble cw-bot",children:m})]})}),p.jsxs("div",{className:"cw-footer",children:[p.jsx("input",{id:"cw-input",className:"cw-input",type:"text",placeholder:"Escribe un número (1-7) o una pregunta...",onChange:le=>H(le.target.value),onKeyDown:le=>Z(le.key)}),p.jsx("button",{className:"cw-send",type:"button",onClick:de,children:"Enviar"})]})]}):p.jsx("img",{alt:"Icono del chatBot",src:Ev,title:kv.icon_title[Y],className:"cw-fab",style:{display:"grid"},onClick:()=>pe()})})},tp="/assets/logo_ags-DL9ro1qO.webp",Gt={go_home:{es:"Ir a página principal",en:"Go homepage"},send_mail:{es:"Enviar un correo electrónico",en:"Send an email"},go_github:{es:"Ir a github del autor",en:"Got to author's github"},text_404:{es:"Ups! Parece que al que creaba las páginas de este sitio se le ha agotado la batería y ahora no encuentras lo que estabas buscando...",en:"Ups! It looks like the person who was creating the pages for this site ran out of battery, and now you can’t find what you were looking for...."},error_404:{es:"Código de error: 404",en:"Error code: 404"},error_404_title:{es:"El servidor web ha recibido la solicitud, pero no puede encontrar el recurso solicitado.",en:"The web server has received the request, but it cannot find the requested resource."}},Jv=()=>{const{language:i}=Fe(s=>s.menuComponentReducer);return p.jsx("footer",{className:"footer container",children:p.jsx("div",{className:"footer-data-author",children:p.jsxs("div",{className:"footer-logo",children:[p.jsx("img",{src:tp,alt:"Logo diseñado del autor",className:"logo"}),p.jsx("a",{href:"mailto:agscm2@gmail.com",className:"contact-info-link",target:"_blank",title:Gt.send_mail[i],children:"agscm2@gmail.com"}),p.jsx("a",{href:"https://github.com/Alegarse",className:"contact-info-link",target:"_blank",title:Gt.go_github[i],children:"Github"})]})})})},ap="SET_LANGUAGE",Zv=i=>({type:ap,payload:{language:i}}),bt={name:"Alejandro García Serrano",bit_me:{es:"Un poco acerca de mí",en:"A little about me"},info_desc:{es:`Soy un programador que trabaja de formador especializado de desarrollo. Antes de eso, trabajé como jefe de equipo y analista programador Full Stack.
Me fascina todo lo relacionado con el desarrollo y creación de proyectos y la gestión de equipos por metodologías Agile.
En mi trabajo combino metodologías orientadas al aprendizaje desde 0, como formación y programación avanzada para que mis alumnos adquieran ese punto diferenciador.
Estoy particularmente interesado en el aprendizaje de nuevos lenguajes y metodologías de desarrollo.`,en:`I am a programmer who works as a trainer specialized in software development. Before that, I worked as a team leader and Full Stack software analyst.
I am passionate about everything related to development and project creation, as well as team management using Agile methodologies.
In my work, I combine methodologies focused on learning from scratch with advanced training and programming, so that my students acquire a distinctive edge.
I am particularly interested in learning new programming languages and development methodologies.`},more_info:{es:"Más info",en:"More info"},nav_me:{es:"Acerca de mí",en:"About me"},nav_skills:{es:"Habilidades",en:"Skills"},skills_front_title:{es:"frontEnd",en:"frontEnd"},skills_front_desc:{es:`Me especializo en el desarrollo de interfaces web modernas, priorizando la claridad visual, la usabilidad y el rendimiento.
 Trabajo con arquitecturas basadas en componentes que facilitan la escalabilidad y el mantenimiento del código a largo plazo.
Tengo experiencia creando aplicaciones dinámicas con JavaScript moderno y frameworks como React, gestionando el estado de la aplicación de forma eficiente mediante Redux y aplicando buenas prácticas en la organización del proyecto.
Presto especial atención al diseño responsive y a la experiencia de usuario, asegurando que las interfaces funcionen correctamente en distintos dispositivos y tamaños de pantalla, manteniendo siempre una interacción fluida y coherente.`,en:`I am a programmer who works as a trainer specialized in software development. Before that, I worked as a team leader and Full Stack software analyst.
I am passionate about everything related to development and project creation, as well as team management using Agile methodologies.
In my work, I combine methodologies focused on learning from scratch with advanced training and programming, so that my students acquire a distinctive edge.
I am particularly interested in learning new programming languages and development methodologies.`},skills_front_tags:"HTML · CSS · JavaScript · React · Redux · Vite · Responsive Design",skills_back_title:{es:"backEnd",en:"backEnd"},skills_back_desc:{es:`Desarrollo la lógica de servidor de aplicaciones web mediante APIs REST bien estructuradas, enfocadas en la seguridad, la claridad y la escalabilidad.
 Me siento cómodo trabajando con Node.js y Express para construir servicios robustos que conectan el frontend con la base de datos.
Implemento sistemas de autenticación y autorización utilizando JWT y técnicas de cifrado como bcrypt, gestionando correctamente usuarios, permisos y flujos de sesión de forma segura.
Además, organizo el backend siguiendo patrones como MVC, separando rutas, controladores y lógica de negocio, lo que permite un código más limpio, reutilizable y fácil de mantener.`,en:`I develop the server-side logic for web applications through well-structured REST APIs, with a strong focus on security, clarity, and scalability.
I am comfortable working with Node.js and Express to build robust services that connect the frontend with the database.
I implement authentication and authorization systems using JWT and encryption techniques such as bcrypt, properly managing users, permissions, and secure session flows.
In addition, I organize the backend following patterns like MVC, separating routes, controllers, and business logic, which results in cleaner, more reusable, and easier-to-maintain code..`},skills_back_tags:"Node.js · Express · JWT · Bcrypt · PHP · REST APIs · MVC Architecture",skills_bbdd_title:{es:"Bases de Datos y Entorno",en:"Databases & Environment"},skills_bbdd_desc:{es:`Trabajo con bases de datos tanto relacionales como no relacionales, diseñando modelos de datos eficientes y adaptados a las necesidades de cada aplicación.
 Tengo experiencia utilizando MongoDB para estructuras flexibles y MySQL para datos más estructurados.
Integro servicios externos como Cloudinary para la gestión de imágenes y archivos, optimizando el almacenamiento y el rendimiento de las aplicaciones en producción.
En cuanto a herramientas, utilizo Git y GitHub como base de mi flujo de trabajo, junto con servidores Linux, lo que me permite mantener proyectos estables y bien controlados a lo largo de su ciclo de vida.`,en:`I work with both relational and non-relational databases, designing efficient data models tailored to the specific needs of each application.
I have experience using MongoDB for flexible data structures and MySQL for more structured data.
I integrate external services such as Cloudinary for image and file management, optimizing storage and application performance in production environments.
Regarding tools, I use Git and GitHub as the foundation of my workflow, along with Linux servers, allowing me to maintain stable and well-controlled projects throughout their lifecycle.`},skills_bbdd_tags:"MongoDB · MySQL · Cloudinary · Git · GitHub · CI/CD · Linux Server",nav_contact:{es:"Contacto",en:"Contact"},nav_chgs:{es:"Retos de programación",en:"Developer's challenges"},contact_title:{es:"¿Hablamos?",en:"Shall we talk?"},contact_description:{es:"Siempre abierto a nuevas oportunidades, retos interesantes y a colaborar con equipos donde sumar y aprender vaya de la mano.",en:"Always open to new opportunities, interesting challenges, and collaborating with teams where contributing and learning go hand in hand."},contact_location:{es:"Ubicación: Benalmádena, Málaga, Spain",en:"Location: Benalmádena, Málaga, Spain"}},np="SET_PORTFOLIO_LOCATION",Kv=i=>({type:np,payload:{location:i}}),$v=()=>{const i=os(),{language:s}=Fe(f=>f.menuComponentReducer),d=f=>{i(Zv(f))},u=f=>{i(Kv(f))};return p.jsxs("nav",{className:"header-menu-list",children:[p.jsx(Gn,{className:"link-button",to:"/",onClick:()=>u("main"),children:bt.nav_me[s]}),p.jsx(Gn,{className:"link-button",to:"/",onClick:()=>u("skills"),children:bt.nav_skills[s]}),p.jsx(Gn,{className:"link-button",to:"/",onClick:()=>u("contact"),children:bt.nav_contact[s]}),p.jsx("span",{className:"separator-navbar",children:"|"}),p.jsx(Gn,{className:"link-button",to:"/challenges",onClick:()=>u("challenges"),children:bt.nav_chgs[s]}),p.jsx("div",{children:p.jsxs("select",{className:"lang-select",id:"lang-select",value:s,onChange:f=>d(f.target.value),"aria-label":"Seleccionar idioma",children:[p.jsx("option",{value:"es",children:"ES"}),p.jsx("option",{value:"en",children:"EN"})]})})]})},Iv=()=>{const i=yi(),{language:s}=Fe(f=>f.menuComponentReducer),{activity:d}=Fe(f=>f.headerComponentReducer),u=()=>{i("/")};return p.jsxs("header",{className:"header-menu container",children:[p.jsx("div",{className:"header-logo",onClick:u,title:Gt.go_home[s],children:d==="portfolio"?p.jsxs(p.Fragment,{children:[p.jsx("img",{src:tp,alt:"Logo diseñado del autor",className:"logo"}),p.jsx("p",{className:"header-author-name",children:"Alejandro García Serrano"})]}):p.jsx("img",{className:"logo-none"})}),p.jsx($v,{})]})},Fv=()=>{const{activity:i}=Fe(s=>s.headerComponentReducer);return p.jsxs("div",{className:"main-layout",children:[p.jsx(Iv,{}),p.jsx(Xv,{}),p.jsx(Hy,{}),i==="portfolio"&&p.jsx(Jv,{})]})},Wv="/assets/author-photo2-8WsdW_WY.png",Pv="/assets/pdf-DPrmNbUF.svg",e0="/assets/cv-DKakzarl.html",t0=()=>{const{language:i}=Fe(s=>s.menuComponentReducer);return p.jsx(p.Fragment,{children:p.jsxs("section",{className:"info-box container",children:[p.jsx("div",{className:"info-photo",children:p.jsx("img",{src:Wv,alt:"Fotografía del autor",className:"photo-author"})}),p.jsxs("div",{className:"info-text",children:[p.jsx("h1",{className:"info-title",children:"Alejandro García Serrano"}),p.jsx("h3",{className:"info-title",children:bt.bit_me[i]}),p.jsx("span",{className:"info-desc",children:bt.info_desc[i]}),p.jsx("div",{className:"info-link-container",children:p.jsxs("a",{className:"info-link button",href:e0,target:"_blank",title:"Visualizar el CV",children:[bt.more_info[i],p.jsx("img",{className:"info_cv_icon",src:Pv,alt:"Icono del PDF"})]})})]})]})})},lp="SET_ACTIVITY",op=i=>({type:lp,payload:{activity:i}}),Ku=i=>{const{classSection:s,photoSrc:d}=i,[u,f]=A.useState({title:"",desc:"",tags:""}),{language:m}=Fe(N=>N.menuComponentReducer),y=()=>{f({title:bt[`skills_${s}_title`][m],desc:bt[`skills_${s}_desc`][m],tags:bt[`skills_${s}_tags`]})};return A.useEffect(()=>{y()},[]),p.jsxs("section",{className:"skills-box container",children:[p.jsx("div",{className:"skills-img",children:p.jsx("img",{src:d,alt:"Img de la seccion",className:"img-section"})}),p.jsxs("div",{className:"skills-text",children:[p.jsx("h3",{className:"skills-title",children:u.title}),p.jsx("span",{className:"skills-desc",children:u.desc}),p.jsx("span",{className:"skills-tags",children:u.tags})]})]})},a0="/assets/skills_front-DC9uwsjx.png",n0="/assets/skills_back-0ctoMMPH.png",l0="/assets/skills_bbdd-BNWNHdrN.png",o0=()=>p.jsxs("div",{className:"skills-container",children:[p.jsx(Ku,{classSection:"front",photoSrc:a0}),p.jsx(Ku,{classSection:"back",photoSrc:n0}),p.jsx(Ku,{classSection:"bbdd",photoSrc:l0})]}),i0=()=>{const{language:i}=Fe(s=>s.menuComponentReducer);return p.jsxs(p.Fragment,{children:[p.jsx("div",{className:"mapContainer",children:p.jsx("iframe",{title:"Approximate location",src:"https://www.google.com/maps?q=Benalmadena,Spain&z=14&output=embed",width:"100%",height:"350",style:{border:0},loading:"lazy",referrerPolicy:"no-referrer-when-downgrade",allowFullScreen:!0})}),p.jsx("p",{className:"locationNote",children:bt.contact_location[i]})]})},r0=()=>{const{language:i}=Fe(s=>s.menuComponentReducer);return p.jsxs("section",{className:"contact-box container",children:[p.jsx("div",{className:"contact-map",children:p.jsx(i0,{})}),p.jsxs("div",{className:"contact-text",children:[p.jsx("h1",{className:"contact-title",children:bt.contact_title[i]}),p.jsx("h3",{className:"contact-description",children:bt.contact_description[i]}),p.jsx("a",{href:"mailto:agscm2@gmail.com",className:"contact-info-link",target:"_blank",title:Gt.send_mail[i],children:"📬 agscm2@gmail.com"}),p.jsx("a",{href:"https://github.com/Alegarse",className:"contact-info-link",target:"_blank",title:Gt.go_github[i],children:"⚙️ Github"}),p.jsx("a",{href:"https://www.linkedin.com/in/alegarse/",className:"contact-info-link",target:"_blank",title:Gt.go_github[i],children:"🔗 LinkedIn"}),p.jsx("a",{href:"tel:+34600123456",className:"contact-info-link",children:"📞 +34 644321 368"})]})]})},u0=()=>{const i=os(),{portfolioLocation:s}=Fe(d=>d.portfolioPageReducer);return A.useEffect(()=>{i(op("portfolio"))},[]),p.jsxs("div",{className:"portfolio-container",children:[s==="main"&&p.jsx(t0,{}),s==="skills"&&p.jsx(o0,{}),s==="contact"&&p.jsx(r0,{})]})},s0="/assets/error-404-CTbyl1Gy.png",c0=()=>{const i=yi(),{language:s}=Fe(u=>u.menuComponentReducer),d=()=>{i("/")};return p.jsx(p.Fragment,{children:p.jsx("div",{className:"body-404-container",children:p.jsxs("div",{className:"page-404-container",children:[p.jsx("img",{className:"",src:s0,alt:"Imagen de adorno de la página 404"}),p.jsxs("div",{className:"info-404-container",children:[p.jsx("h2",{className:"title-error-404",title:Gt.error_404_title[s],children:Gt.error_404[s]}),p.jsx("h2",{children:Gt.text_404[s]}),p.jsx("button",{className:"btn-to-home",onClick:d,children:Gt.go_home[s]})]})]})})})};const d0=i=>i.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),f0=i=>i.replace(/^([A-Z])|[\s-_]+(\w)/g,(s,d,u)=>u?u.toUpperCase():d.toLowerCase()),Nm=i=>{const s=f0(i);return s.charAt(0).toUpperCase()+s.slice(1)},ip=(...i)=>i.filter((s,d,u)=>!!s&&s.trim()!==""&&u.indexOf(s)===d).join(" ").trim(),m0=i=>{for(const s in i)if(s.startsWith("aria-")||s==="role"||s==="title")return!0};var p0={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};const h0=A.forwardRef(({color:i="currentColor",size:s=24,strokeWidth:d=2,absoluteStrokeWidth:u,className:f="",children:m,iconNode:y,...N},b)=>A.createElement("svg",{ref:b,...p0,width:s,height:s,stroke:i,strokeWidth:u?Number(d)*24/Number(s):d,className:ip("lucide",f),...!m&&!m0(N)&&{"aria-hidden":"true"},...N},[...y.map(([g,j])=>A.createElement(g,j)),...Array.isArray(m)?m:[m]]));const $e=(i,s)=>{const d=A.forwardRef(({className:u,...f},m)=>A.createElement(h0,{ref:m,iconNode:s,className:ip(`lucide-${d0(Nm(i))}`,`lucide-${i}`,u),...f}));return d.displayName=Nm(i),d};const g0=[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]],jm=$e("arrow-left",g0);const y0=[["path",{d:"m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526",key:"1yiouv"}],["circle",{cx:"12",cy:"8",r:"6",key:"1vp47v"}]],v0=$e("award",y0);const b0=[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]],Om=$e("check",b0);const E0=[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]],S0=$e("chevron-down",E0);const T0=[["path",{d:"m18 15-6-6-6 6",key:"153udz"}]],x0=$e("chevron-up",T0);const C0=[["path",{d:"m18 16 4-4-4-4",key:"1inbqp"}],["path",{d:"m6 8-4 4 4 4",key:"15zrgr"}],["path",{d:"m14.5 4-5 16",key:"e7oirm"}]],A0=$e("code-xml",C0);const R0=[["path",{d:"m16 18 6-6-6-6",key:"eg8j8"}],["path",{d:"m8 6-6 6 6 6",key:"ppft3o"}]],rp=$e("code",R0);const N0=[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]],Mm=$e("copy",N0);const j0=[["ellipse",{cx:"12",cy:"5",rx:"9",ry:"3",key:"msslwz"}],["path",{d:"M3 5V19A9 3 0 0 0 21 19V5",key:"1wlel7"}],["path",{d:"M3 12A9 3 0 0 0 21 12",key:"mv7ke4"}]],_m=$e("database",j0);const O0=[["path",{d:"M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z",key:"1oefj6"}],["path",{d:"M14 2v5a1 1 0 0 0 1 1h5",key:"wfsgrz"}],["path",{d:"M10 12.5 8 15l2 2.5",key:"1tg20x"}],["path",{d:"m14 12.5 2 2.5-2 2.5",key:"yinavb"}]],M0=$e("file-code",O0);const _0=[["path",{d:"M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z",key:"1oefj6"}],["path",{d:"M14 2v5a1 1 0 0 0 1 1h5",key:"wfsgrz"}],["path",{d:"M11 18h2",key:"12mj7e"}],["path",{d:"M12 12v6",key:"3ahymv"}],["path",{d:"M9 13v-.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 .5.5v.5",key:"qbrxap"}]],w0=$e("file-type",_0);const z0=[["path",{d:"M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z",key:"zw3jo"}],["path",{d:"M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12",key:"1wduqc"}],["path",{d:"M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17",key:"kqbvx6"}]],D0=$e("layers",z0);const U0=[["path",{d:"M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5",key:"1gvzjb"}],["path",{d:"M9 18h6",key:"x1upvd"}],["path",{d:"M10 22h4",key:"ceow96"}]],q0=$e("lightbulb",U0);const L0=[["path",{d:"M12 22a1 1 0 0 1 0-20 10 9 0 0 1 10 9 5 5 0 0 1-5 5h-2.25a1.75 1.75 0 0 0-1.4 2.8l.3.4a1.75 1.75 0 0 1-1.4 2.8z",key:"e79jfc"}],["circle",{cx:"13.5",cy:"6.5",r:".5",fill:"currentColor",key:"1okk4w"}],["circle",{cx:"17.5",cy:"10.5",r:".5",fill:"currentColor",key:"f64h9f"}],["circle",{cx:"6.5",cy:"12.5",r:".5",fill:"currentColor",key:"qy21gx"}],["circle",{cx:"8.5",cy:"7.5",r:".5",fill:"currentColor",key:"fotxhn"}]],H0=$e("palette",L0);const B0=[["rect",{width:"20",height:"8",x:"2",y:"2",rx:"2",ry:"2",key:"ngkwjq"}],["rect",{width:"20",height:"8",x:"2",y:"14",rx:"2",ry:"2",key:"iecqi9"}],["line",{x1:"6",x2:"6.01",y1:"6",y2:"6",key:"16zg32"}],["line",{x1:"6",x2:"6.01",y1:"18",y2:"18",key:"nzw8ys"}]],V0=$e("server",B0);const G0=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["circle",{cx:"12",cy:"12",r:"6",key:"1vlfrh"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}]],Y0=$e("target",G0);const Q0=[["path",{d:"M12 19h8",key:"baeox8"}],["path",{d:"m4 17 6-6-6-6",key:"1yngyt"}]],k0=$e("terminal",Q0),Mt={html:{principal:"#E34F26",secundario:"#F16529",fondo:"#FFF4EE"},css:{principal:"#1572B6",secundario:"#33A9DC",fondo:"#E8F4FD"},javascript:{principal:"#F7DF1E",secundario:"#FFD600",fondo:"#FFFDE7",texto:"#323330"},react:{principal:"#61DAFB",secundario:"#4CC9F0",fondo:"#E6F7FF",texto:"#282C34"},redux:{principal:"#764ABC",secundario:"#9D5BD6",fondo:"#F3E8FF"},nodejs:{principal:"#339933",secundario:"#4CAF50",fondo:"#E8F5E9"}},X0={html:"HTML",css:"CSS",javascript:"JavaScript",react:"React JS",redux:"Redux",nodejs:"Node.js",mongodb:"MongoDB",mysql:"MySQL",typescript:"TypeScript",python:"Python"},Wu={navTitle:{es:"Desafíos",en:"Challenges"},navHeader:{es:"Aprende y practica programación",en:"Learn & Practice development"},backToCh:{es:"Volver a desafíos",en:"Back to challenges"}},J0={html:p.jsx(M0,{size:24}),css:p.jsx(H0,{size:24}),javascript:p.jsx(k0,{size:24}),react:p.jsx(A0,{size:24}),redux:p.jsx(D0,{size:24}),nodejs:p.jsx(V0,{size:24}),mongodb:p.jsx(_m,{size:24}),mysql:p.jsx(_m,{size:24}),typescript:p.jsx(w0,{size:24}),python:p.jsx(rp,{size:24})},Z0=({className:i="",devLanguages:s,devLanguageSelected:d,onHandleSelectDevLang:u})=>{const{language:f}=Fe(m=>m.menuComponentReducer);return p.jsxs("aside",{className:`navbar-lateral ${i}`,children:[p.jsxs("div",{className:"navbar-header",children:[p.jsx(rp,{size:28}),p.jsx("h2",{children:Wu.navTitle[f]})]}),p.jsx("nav",{className:"navbar-nav",children:p.jsx("ul",{children:s.map(m=>p.jsx("li",{children:p.jsxs("button",{className:`nav-item ${m===d?"activo":""}`,onClick:()=>u(m),style:{"--color-lenguaje":m==="javascript"?"#323330":null},children:[p.jsx("span",{className:"icono-lenguaje",children:J0[m]}),p.jsx("span",{className:"nombre-lenguaje",children:X0[m]})]})},m))})}),p.jsx("div",{className:"navbar-footer",children:p.jsx("small",{children:Wu.navHeader[f]})})]})};function K0({desafio:i,onVolver:s}){const[d,u]=A.useState(!1),[f,m]=A.useState(null),[y,N]=A.useState(!0),{language:b}=Fe(j=>j.menuComponentReducer),g=async(j,T)=>{try{await navigator.clipboard.writeText(j),m(T),setTimeout(()=>m(null),2e3)}catch(U){console.error("Error al copiar:",U)}};return p.jsxs("div",{className:"detalle-desafio",children:[p.jsxs("button",{className:"boton-volver",onClick:s,children:[p.jsx(jm,{size:20}),p.jsx("span",{children:Wu.backToCh[b]})]}),p.jsxs("header",{className:"header-desafio",children:[p.jsxs("span",{className:`level-badge-large ${i.level.includes("Principiante")?"principiante":i.level.includes("Intermedio")?"intermedio":"avanzado"}`,children:[p.jsx(q0,{size:18}),i.level]}),p.jsx("h1",{children:i.title}),p.jsx("p",{className:"description-principal",children:i.description})]}),p.jsxs("section",{className:"seccion-targets",children:[p.jsxs("button",{className:"toggle-seccion",onClick:()=>N(!y),children:[p.jsxs("h3",{children:[p.jsx($0,{size:20}),"Objetivos de Aprendizaje"]}),y?p.jsx(x0,{size:20}):p.jsx(S0,{size:20})]}),y&&p.jsx("ul",{className:"lista-targets",children:i.targets.map((j,T)=>p.jsxs("li",{children:[p.jsx("span",{className:"check-icon",children:"✓"}),j]},T))})]}),p.jsxs("section",{className:"seccion-codigo",children:[p.jsxs("div",{className:"header-codigo",children:[p.jsxs("h3",{children:[p.jsx(I0,{size:20}),"Código Inicial"]}),p.jsxs("button",{className:"boton-copiar",onClick:()=>g(i.initialCode,"inicial"),children:[f==="inicial"?p.jsx(Om,{size:16}):p.jsx(Mm,{size:16}),f==="inicial"?"Copiado":"Copiar"]})]}),p.jsx("pre",{className:"codigo-block",children:p.jsx("code",{children:i.initialCode})})]}),p.jsxs("section",{className:"seccion-concepts",children:[p.jsxs("h3",{children:[p.jsx(F0,{size:20}),"Conceptos Clave"]}),p.jsx("div",{className:"tags-concepts",children:i.concepts.map((j,T)=>p.jsx("span",{className:"concepto-tag",children:j},T))})]}),p.jsxs("section",{className:"seccion-solution",children:[p.jsx("button",{className:`boton-mostrar-solution ${d?"mostrada":""}`,onClick:()=>u(!d),children:d?"Ocultar Solución":"Mostrar Solución"}),d&&p.jsxs("div",{className:"solution-container",children:[p.jsxs("div",{className:"header-codigo",children:[p.jsxs("h3",{children:[p.jsx(W0,{size:20}),"Solución Propuesta"]}),p.jsxs("button",{className:"boton-copiar",onClick:()=>g(i.solution,"solution"),children:[f==="solution"?p.jsx(Om,{size:16}):p.jsx(Mm,{size:16}),f==="solution"?"Copiado":"Copiar"]})]}),p.jsx("pre",{className:"codigo-block solution",children:p.jsx("code",{children:i.solution})})]})]}),p.jsx("div",{className:"navigation-detalle",children:p.jsxs("button",{className:"boton-volver-large",onClick:s,children:[p.jsx(jm,{size:20}),p.jsx("span",{children:"Volver a la lista de desafíos"})]})})]})}const $0=({size:i})=>p.jsxs("svg",{width:i,height:i,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[p.jsx("circle",{cx:"12",cy:"12",r:"10"}),p.jsx("circle",{cx:"12",cy:"12",r:"6"}),p.jsx("circle",{cx:"12",cy:"12",r:"2"})]}),I0=({size:i})=>p.jsxs("svg",{width:i,height:i,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[p.jsx("polyline",{points:"16,18 22,12 16,6"}),p.jsx("polyline",{points:"8,6 2,12 8,18"})]}),F0=({size:i})=>p.jsxs("svg",{width:i,height:i,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[p.jsx("path",{d:"M4 19.5A2.5 2.5 0 0 1 6.5 17H20"}),p.jsx("path",{d:"M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"})]}),W0=({size:i})=>p.jsxs("svg",{width:i,height:i,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[p.jsx("path",{d:"M22 11.08V12a10 10 0 1 1-5.93-9.14"}),p.jsx("polyline",{points:"22 4 12 14.01 9 11.01"})]}),P0=({challenges:i,devLanguageSelected:s,onHandleSelectChallenge:d})=>{const{language:u}=Fe(f=>f.menuComponentReducer);return p.jsxs("div",{className:"lista-challenges",children:[p.jsxs("header",{className:"header-lenguaje",children:[p.jsxs("div",{className:"info-lenguaje",children:[p.jsx("h1",{children:i.title}),p.jsx("p",{children:i.description})]}),p.jsx("div",{className:"stats-lenguaje",children:p.jsxs("span",{className:"badge-cantidad",children:[i.challenges.length," desafíos"]})})]}),p.jsx("div",{className:"grid-challenges",children:i.challenges.map((f,m)=>p.jsxs("article",{className:"tarjeta-desafio",onClick:()=>d(f),style:{"--delay":`${m*.1}s`},children:[p.jsx("div",{className:"numero-desafio",children:String(m+1).padStart(2,"0")}),p.jsxs("div",{className:"contenido-tarjeta",children:[p.jsx("span",{className:`level-badge ${f.level.includes("Principiante")?"principiante":f.level.includes("Intermedio")?"intermedio":"avanzado"}`,children:f.level.split(" ")[0]}),p.jsx("h3",{children:f.title}),p.jsx("p",{children:f.description}),p.jsxs("div",{className:"targets-preview",children:[p.jsx(Y0,{size:16}),p.jsxs("span",{children:[f.targets.length," targets de aprendizaje"]})]})]})]},f.id))}),p.jsxs("div",{className:"tarjeta-inspiradora",children:[p.jsx("div",{className:"icono-inspiradora",children:p.jsx(v0,{size:40})}),p.jsxs("div",{className:"texto-inspirador",children:[p.jsx("h3",{children:"¡Sigue practicando!"}),p.jsx("p",{children:"La mejor manera de aprender programación es practicando. Completa los desafíos y desarrolla tus habilidades paso a paso."})]})]})]})},eb={html:{title:"HTML",description:"Lenguaje de marcado para estructurar contenido web",color:Mt.html,challenges:[{id:"html-1",title:"Estructura Básica HTML5",level:"Principiante",description:"Crear la estructura básica de un documento HTML5 con todas las etiquetas semánticas necesarias.",targets:["Declaración DOCTYPE","Elementos <html>, <head>, <body>","Metadatos (charset, viewport, title)","Etiquetas semánticas (<header>, <nav>, <main>, <section>, <footer>)"],initialCode:`<!DOCTYPE html>
<html lang="es">
<head>
  <!-- Tu código aquí -->
</head>
<body>
  <!-- Tu código aquí -->
</body>
</html>`,solution:`<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Mi Primera Página</title>
</head>
<body>
  <header>
    <h1>Bienvenido a mi Web</h1>
  </header>
  <nav>
    <ul>
      <li><a href="#inicio">Inicio</a></li>
      <li><a href="#acerca">Acerca</a></li>
      <li><a href="#contacto">Contacto</a></li>
    </ul>
  </nav>
  <main>
    <section id="inicio">
      <h2>Inicio</h2>
      <p>Esta es mi primera página web con HTML5 semántico.</p>
    </section>
  </main>
  <footer>
    <p>&copy; 2024 Mi Portfolio</p>
  </footer>
</body>
</html>`,concepts:["DOCTYPE","Semántica HTML5","Metadatos","Accesibilidad"]},{id:"html-2",title:"Formulario de Contacto",level:"Intermedio",description:"Crear un formulario de contacto completo con diferentes tipos de inputs y validación básica.",targets:["Inputs de texto, email, textarea","Campos obligatorios (required)","Labels asociados correctamente","Botón de envío"],initialCode:`<form>
  <!-- Crea tu formulario aquí -->
  <!-- Incluye: nombre, email, asunto, mensaje -->
</form>`,solution:`<form action="/enviar" method="POST">
  <div>
    <label for="nombre">Nombre:</label>
    <input type="text" id="nombre" name="nombre" required>
  </div>
  <div>
    <label for="email">Email:</label>
    <input type="email" id="email" name="email" required>
  </div>
  <div>
    <label for="asunto">Asunto:</label>
    <select id="asunto" name="asunto">
      <option value="">Selecciona un asunto</option>
      <option value="consulta">Consulta General</option>
      <option value="presupuesto">Presupuesto</option>
      <option value="soporte">Soporte</option>
    </select>
  </div>
  <div>
    <label for="mensaje">Mensaje:</label>
    <textarea id="mensaje" name="mensaje" rows="5" required></textarea>
  </div>
  <button type="submit">Enviar Mensaje</button>
</form>`,concepts:["Formularios HTML","Tipos de input","Validación HTML5","Accesibilidad"]},{id:"html-3",title:"Galería de Imágenes",level:"Intermedio",description:"Crear una galería responsive de imágenes usando figure, figcaption y enlaces.",targets:["Etiquetas <figure> y <figcaption>","Imágenes responsive con srcset","Enlaces a imágenes completas","Grid layout con CSS (próximamente)"],initialCode:`<div class="galeria">
  <!-- Crea tu galería de 4 imágenes -->
</div>`,solution:`<div class="galeria">
  <figure>
    <a href="img/grande-1.jpg">
      <img src="img/pequena-1.jpg" alt="Descripción imagen 1">
    </a>
    <figcaption>Imagen 1</figcaption>
  </figure>
  <figure>
    <a href="img/grande-2.jpg">
      <img src="img/pequena-2.jpg" alt="Descripción imagen 2">
    </a>
    <figcaption>Imagen 2</figcaption>
  </figure>
  <figure>
    <a href="img/grande-3.jpg">
      <img src="img/pequena-3.jpg" alt="Descripción imagen 3">
    </a>
    <figcaption>Imagen 3</figcaption>
  </figure>
  <figure>
    <a href="img/grande-4.jpg">
      <img src="img/pequena-4.jpg" alt="Descripción imagen 4">
    </a>
    <figcaption>Imagen 4</figcaption>
  </figure>
</div>`,concepts:["Figure y figcaption","Optimización de imágenes","Galerías","Accesibilidad visual"]}]},css:{title:"CSS",description:"Estilos para diseñar y posicionar elementos web",color:Mt.css,challenges:[{id:"css-1",title:"Flexbox Centrado",level:"Principiante",description:"Centrar un elemento tanto horizontal como verticalmente usando Flexbox.",targets:["display: flex","justify-content: center","align-items: center","height: 100vh"],initialCode:`.contenedor {
  /* Tu código aquí */
}

.caja {
  width: 200px;
  height: 200px;
  background: #3498db;
}`,solution:`.contenedor {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  margin: 0;
}

.caja {
  width: 200px;
  height: 200px;
  background: #3498db;
}`,concepts:["Flexbox","Centrado vertical/horizontal","Viewport height","Reset básico"]},{id:"css-2",title:"Grid Layout Responsive",level:"Intermedio",description:"Crear un layout de grid que se adapte a diferentes tamaños de pantalla.",targets:["display: grid","grid-template-columns con repeat() y auto-fit","gap entre elementos","Media queries para personalización"],initialCode:`.galeria {
  /* Crea un grid responsive */
}

.tarjeta {
  background: white;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}`,solution:`.galeria {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 24px;
  padding: 24px;
  max-width: 1200px;
  margin: 0 auto;
}

.tarjeta {
  background: white;
  padding: 24px;
  border-radius: 12px;
  box-shadow: 0 4px 6px rgba(0,0,0,0.1);
  transition: transform 0.2s, box-shadow 0.2s;
}

.tarjeta:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 12px rgba(0,0,0,0.15);
}

@media (max-width: 600px) {
  .galeria {
    grid-template-columns: 1fr;
    padding: 16px;
    gap: 16px;
  }
}`,concepts:["CSS Grid","auto-fit y minmax","Responsive design","Media queries","Hover effects"]},{id:"css-3",title:"Animación de Botón",level:"Intermedio",description:"Crear un botón interactivo con efectos hover y animations.",targets:["transition para animaciones suaves","transform y translate","Pseudoclases (:hover, :active)","keyframes para animaciones"],initialCode:`.btn {
  padding: 12px 24px;
  background: #3498db;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  /* Tu código aquí */
}`,solution:`.btn {
  padding: 14px 28px;
  background: linear-gradient(135deg, #3498db, #2980b9);
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-size: 16px;
  font-weight: 600;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
}

.btn::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    90deg,
    transparent,
    rgba(255,255,255,0.2),
    transparent
  );
  transition: left 0.5s;
}

.btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(52, 152, 219, 0.4);
}

.btn:hover::before {
  left: 100%;
}

.btn:active {
  transform: translateY(0);
}`,concepts:["Transiciones","Gradientes","Transformaciones","Pseudoelementos","Overflow hidden"]}]},javascript:{title:"JavaScript",description:"Lenguaje de programación para interactividad web",color:Mt.javascript,challenges:[{id:"js-1",title:"Calculadora Simple",level:"Principiante",description:"Crear funciones básicas para realizar operaciones matemáticas.",targets:["Funciones con parámetros","Operadores aritméticos","Return de valores","Manejo de números"],initialCode:`// Crea funciones para:
// - Sumar dos números
// - Restar dos números
// - Multiplicar dos números
// - Dividir dos números (con validación de división por cero)

function sumar(a, b) {
  // Tu código aquí
}

function restar(a, b) {
  // Tu código aquí
}

// Crea las funciones multiplicar y dividir`,solution:`function sumar(a, b) {
  return a + b;
}

function restar(a, b) {
  return a - b;
}

function multiplicar(a, b) {
  return a * b;
}

function dividir(a, b) {
  if (b === 0) {
    console.error('Error: No se puede dividir por cero');
    return null;
  }
  return a / b;
}

// Ejemplos de uso:
console.log(sumar(5, 3));      // 8
console.log(restar(10, 4));    // 6
console.log(multiplicar(6, 7)); // 42
console.log(dividir(20, 4));   // 5
console.log(dividir(20, 0));   // null + mensaje de error`,concepts:["Funciones","Parámetros y argumentos","Return","Condicionales","Operadores"]},{id:"js-2",title:"Manipulación del DOM",level:"Intermedio",description:"Crear, modificar y eliminar elementos del DOM dinámicamente.",targets:["document.querySelector / querySelectorAll","createElement, appendChild, remove","Modificar textContent y classList","Event listeners"],initialCode:`// Crea una lista de tareas donde puedas:
// 1. Agregar nuevas tareas
// 2. Marcar tareas como completadas
// 3. Eliminar tareas

const lista = document.getElementById('lista');
const input = document.getElementById('input');
const boton = document.getElementById('agregar');

// Tu código aquí`,solution:`const lista = document.getElementById('lista');
const input = document.getElementById('input');
const boton = document.getElementById('agregar');

function agregarTarea(texto) {
  if (!texto.trim()) return;
  
  const li = document.createElement('li');
  
  const textoTarea = document.createElement('span');
  textoTarea.textContent = texto;
  
  const btnCompletar = document.createElement('button');
  btnCompletar.textContent = '✓';
  btnCompletar.addEventListener('click', () => {
    textoTarea.classList.toggle('completado');
  });
  
  const btnEliminar = document.createElement('button');
  btnEliminar.textContent = '✕';
  btnEliminar.addEventListener('click', () => {
    li.remove();
  });
  
  li.appendChild(textoTarea);
  li.appendChild(btnCompletar);
  li.appendChild(btnEliminar);
  lista.appendChild(li);
  
  input.value = '';
}

boton.addEventListener('click', () => {
  agregarTarea(input.value);
});

input.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    agregarTarea(input.value);
  }
});`,concepts:["DOM manipulation","Event listeners","ClassList","Template literals","Conditional logic"]},{id:"js-3",title:"API Fetch y Async/Await",level:"Avanzado",description:"Consumir datos de una API pública usando async/await.",targets:["fetch API","async/await","try/catch para errores","Manipulación de JSON"],initialCode:`// Consume datos de JSONPlaceholder
// Muestra los primeros 5 posts con su título y cuerpo

async function obtenerPosts() {
  try {
    // Tu código aquí
  } catch (error) {
    console.error('Error:', error);
  }
}

obtenerPosts();`,solution:`async function obtenerPosts() {
  try {
    const respuesta = await fetch(
      'https://jsonplaceholder.typicode.com/posts?_limit=5'
    );
    
    if (!respuesta.ok) {
      throw new Error('Error en la respuesta');
    }
    
    const posts = await respuesta.json();
    
    const contenedor = document.getElementById('posts');
    contenedor.innerHTML = '';
    
    posts.forEach(post => {
      const article = document.createElement('article');
      article.innerHTML = \`
        <h3>\${post.title}</h3>
        <p>\${post.body}</p>
      \`;
      contenedor.appendChild(article);
    });
    
  } catch (error) {
    console.error('Error:', error);
    document.getElementById('posts').innerHTML = 
      '<p>Error al cargar los posts</p>';
  }
}

obtenerPosts();`,concepts:["Fetch API","Async/Await","Try/Catch","JSON handling","DOM manipulation"]}]},react:{title:"React JS",description:"Librería para construir interfaces de usuario",color:Mt.react,challenges:[{id:"react-1",title:"Mi Primer Componente",level:"Principiante",description:"Crear y renderizar un componente funcional básico.",targets:["Crear componentes funcionales","Props básicas","JSX syntax","Renderizado de componentes"],initialCode:`// Crea un componente Saludo que reciba un prop "nombre"
// y muestre: "Hola, [nombre]! Bienvenido a React"

function Saludo({ nombre }) {
  // Tu código aquí
}

export default Saludo;`,solution:`import React from 'react';

function Saludo({ nombre, idioma = 'es' }) {
  const mensajes = {
    es: 'Hola',
    en: 'Hello',
    fr: 'Bonjour'
  };
  
  return (
    <div className="saludo">
      <h2>{mensajes[idioma]}, {nombre}! 👋</h2>
      <p>Bienvenido a aprender React</p>
    </div>
  );
}

export default Saludo;

// Uso:
// <Saludo nombre="Carlos" idioma="es" />
// <Saludo nombre="John" idioma="en" />`,concepts:["Componentes funcionales","Props","JSX","Valores por defecto","Renderizado"]},{id:"react-2",title:"Contador con useState",level:"Principiante",description:"Crear un contador interactivo con botones para incrementar y decrementar.",targets:["useState hook","Event handlers","Renderizado condicional","State updates"],initialCode:`import { useState } from 'react';

function Contador() {
  // Declara el estado "cuenta" con useState
  
  return (
    <div className="contador">
      {/* Muestra el contador actual */}
      
      <div className="botones">
        {/* Botones para incrementar y decrementar */}
      </div>
    </div>
  );
}

export default Contador;`,solution:`import { useState } from 'react';

function Contador({ valorInicial = 0, paso = 1 }) {
  const [cuenta, setCuenta] = useState(valorInicial);
  const [historial, setHistorial] = useState([]);

  const incrementar = () => {
    setCuenta(c => c + paso);
    setHistorial(h => [...h, cuenta + paso]);
  };

  const decrementar = () => {
    if (cuenta - paso >= 0) {
      setCuenta(c => c - paso);
      setHistorial(h => [...h, cuenta - paso]);
    }
  };

  const reiniciar = () => {
    setCuenta(valorInicial);
    setHistorial([]);
  };

  return (
    <div className="contador">
      <h3>Contador: {cuenta}</h3>
      
      <div className="botones">
        <button onClick={decrementar} disabled={cuenta - paso < 0}>
          - {paso}
        </button>
        <button onClick={reiniciar}>Reiniciar</button>
        <button onClick={incrementar}>+ {paso}</button>
      </div>
      
      {historial.length > 0 && (
        <div className="historial">
          <h4>Historial:</h4>
          <ul>
            {historial.map((valor, i) => (
              <li key={i}>{valor}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default Contador;`,concepts:["useState","Event handlers","Conditional rendering","Arrays in state","Immutability"]},{id:"react-3",title:"Lista de Tareas con useEffect",level:"Intermedio",description:"Crear un gestor de tareas completo con persistencia local.",targets:["useState para arrays","useEffect para efectos secundarios","localStorage para persistencia","CRUD básico"],initialCode:`import { useState, useEffect } from 'react';

function ListaTareas() {
  const [tareas, setTareas] = useState([]);
  const [nuevaTarea, setNuevaTarea] = useState('');
  
  // Cargar tareas de localStorage al montar
  
  // Guardar en localStorage cuando cambien las tareas
  
  const agregarTarea = () => {
    // Tu código aquí
  };
  
  const toggleTarea = (id) => {
    // Tu código aquí
  };
  
  const eliminarTarea = (id) => {
    // Tu código aquí
  };
  
  return (
    <div className="lista-tareas">
      {/* Tu JSX aquí */}
    </div>
  );
}

export default ListaTareas;`,solution:`import { useState, useEffect } from 'react';

function ListaTareas() {
  const [tareas, setTareas] = useState(() => {
    const guardadas = localStorage.getItem('tareas');
    return guardadas ? JSON.parse(guardadas) : [];
  });
  const [nuevaTarea, setNuevaTarea] = useState('');
  const [filtro, setFiltro] = useState('todas');

  useEffect(() => {
    localStorage.setItem('tareas', JSON.stringify(tareas));
  }, [tareas]);

  const agregarTarea = () => {
    if (!nuevaTarea.trim()) return;
    
    const tarea = {
      id: Date.now(),
      texto: nuevaTarea,
      completada: false,
      fecha: new Date().toLocaleDateString()
    };
    
    setTareas([...tareas, tarea]);
    setNuevaTarea('');
  };

  const toggleTarea = (id) => {
    setTareas(tareas.map(t =>
      t.id === id ? { ...t, completada: !t.completada } : t
    ));
  };

  const eliminarTarea = (id) => {
    setTareas(tareas.filter(t => t.id !== id));
  };

  const tareasFiltradas = tareas.filter(t => {
    if (filtro === 'completadas') return t.completada;
    if (filtro === 'pendientes') return !t.completada;
    return true;
  });

  return (
    <div className="lista-tareas">
      <h2>Mis Tareas</h2>
      
      <div className="entrada">
        <input
          type="text"
          value={nuevaTarea}
          onChange={(e) => setNuevaTarea(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && agregarTarea()}
          placeholder="Nueva tarea..."
        />
        <button onClick={agregarTarea}>Agregar</button>
      </div>
      
      <div className="filtros">
        <button onClick={() => setFiltro('todas')} className={filtro === 'todas' ? 'activo' : ''}>
          Todas ({tareas.length})
        </button>
        <button onClick={() => setFiltro('pendientes')} className={filtro === 'pendientes' ? 'activo' : ''}>
          Pendientes ({tareas.filter(t => !t.completada).length})
        </button>
        <button onClick={() => setFiltro('completadas')} className={filtro === 'completadas' ? 'activo' : ''}>
          Completadas ({tareas.filter(t => t.completada).length})
        </button>
      </div>
      
      <ul className="tareas-lista">
        {tareasFiltradas.map(tarea => (
          <li key={tarea.id} className={tarea.completada ? 'completada' : ''}>
            <span onClick={() => toggleTarea(tarea.id)}>
              {tarea.texto}
              <small>{tarea.fecha}</small>
            </span>
            <button onClick={() => eliminarTarea(tarea.id)} className="eliminar">
              ✕
            </button>
          </li>
        ))}
      </ul>
      
      {tareasFiltradas.length === 0 && (
        <p className="vacio">No hay tareas para mostrar</p>
      )}
    </div>
  );
}

export default ListaTareas;`,concepts:["useState","useEffect","localStorage","Array methods (map, filter)","Conditional classes"]}]},redux:{title:"Redux",description:"Gestión de estado predecible para aplicaciones JavaScript",color:Mt.redux,challenges:[{id:"redux-1",title:"Store y Reducers",level:"Intermedio",description:"Configurar un store de Redux con un reducer básico.",targets:["createStore de Redux","Funciones reducer","Acciones con type y payload","Dispatch de acciones"],initialCode:`import { createStore } from 'redux';

// Define tu initialState

// Crea tu reducer que maneje acciones tipo:
// - 'INCREMENTAR'
// - 'DECREMENTAR'
// - 'SET_VALOR'

// Crea el store

// EJEMPLO DE USO:
// store.dispatch({ type: 'INCREMENTAR' })
// console.log(store.getState())`,solution:`import { createStore } from 'redux';

// Initial state
const estadoInicial = {
  contador: 0,
  valorPersonalizado: null
};

// Actions
const actions = {
  INCREMENTAR: 'INCREMENTAR',
  DECREMENTAR: 'DECREMENTAR',
  SET_VALOR: 'SET_VALOR',
  RESET: 'RESET'
};

// Action creators
export const incrementar = () => ({ type: actions.INCREMENTAR });
export const decrementar = () => ({ type: actions.DECREMENTAR });
export const setValor = (valor) => ({ type: actions.SET_VALOR, payload: valor });
export const reset = () => ({ type: actions.RESET, payload: 0 });

// Reducer
const contadorReducer = (state = estadoInicial, action) => {
  switch (action.type) {
    case actions.INCREMENTAR:
      return { ...state, contador: state.contador + 1 };
    case actions.DECREMENTAR:
      return { ...state, contador: state.contador - 1 };
    case actions.SET_VALOR:
      return { ...state, valorPersonalizado: action.payload };
    case actions.RESET:
      return { ...state, contador: 0, valorPersonalizado: null };
    default:
      return state;
  }
};

// Store
const store = createStore(contadorReducer);

// Suscribe para ver cambios
store.subscribe(() => console.log('Estado:', store.getState()));

// Uso
store.dispatch(incrementar());
store.dispatch(incrementar());
store.dispatch(setValor(100));
store.dispatch(reset());

export default store;`,concepts:["Store","Reducers","Actions","Dispatch","State management"]},{id:"redux-2",title:"Redux Toolkit Moderno",level:"Intermedio",description:"Usar Redux Toolkit para simplificar la configuración.",targets:["configureStore","createSlice","createAsyncThunk (opcional)","Selectors"],initialCode:`import { configureStore, createSlice } from '@reduxjs/toolkit';

// Crea un slice para gestión de tareas
// con estado inicial, reducers y acciones

// Configura el store con el reducer

// Exporta las acciones y el selector`,solution:`import { configureStore, createSlice, createSelector } from '@reduxjs/toolkit';

// Slice de tareas
const tareasSlice = createSlice({
  name: 'tareas',
  initialState: {
    items: [],
    filtro: 'todas',
    cargando: false,
    error: null
  },
  reducers: {
    agregarTarea: (state, action) => {
      state.items.push({
        id: Date.now(),
        texto: action.payload,
        completada: false,
        fecha: new Date().toISOString()
      });
    },
    toggleTarea: (state, action) => {
      const tarea = state.items.find(t => t.id === action.payload);
      if (tarea) {
        tarea.completada = !tarea.completada;
      }
    },
    eliminarTarea: (state, action) => {
      state.items = state.items.filter(t => t.id !== action.payload);
    },
    setFiltro: (state, action) => {
      state.filtro = action.payload;
    },
    clearCompletadas: (state) => {
      state.items = state.items.filter(t => !t.completada);
    }
  }
});

// Exportar acciones
export const {
  agregarTarea,
  toggleTarea,
  eliminarTarea,
  setFiltro,
  clearCompletadas
} = tareasSlice.actions;

// Selectors
export const selectTareas = state => state.tareas.items;
export const selectFiltro = state => state.tareas.filtro;

export const selectTareasFiltradas = state => {
  const tareas = state.tareas.items;
  const filtro = state.tareas.filtro;
  
  switch (filtro) {
    case 'completadas':
      return tareas.filter(t => t.completada);
    case 'pendientes':
      return tareas.filter(t => !t.completada);
    default:
      return tareas;
  }
};

export const selectEstadisticas = createSelector(
  [selectTareas],
  (tareas) => ({
    total: tareas.length,
    completadas: tareas.filter(t => t.completada).length,
    pendientes: tareas.filter(t => !t.completada).length
  })
);

// Store
const store = configureStore({
  reducer: {
    tareas: tareasSlice.reducer
  }
});

export default store;`,concepts:["Redux Toolkit","createSlice","configureStore","Selectors","Immer (mutaciones seguras)"]}]},nodejs:{title:"Node.js",description:"Entorno de ejecución para JavaScript en el servidor",color:Mt.nodejs,challenges:[{id:"nodejs-1",title:"Servidor HTTP Básico",level:"Principiante",description:"Crear un servidor HTTP simple con Node.js usando el módulo http.",targets:["Módulo http de Node.js","Crear servidor con createServer","Escuchar en puerto específico","Responder a peticiones GET"],initialCode:`const http = require('http');

// Crea un servidor que:
// 1. Responda "Hola, Mundo!" en la ruta raíz
// 2. Responda "Página de Contacto" en /contacto
// 3. Responda 404 en rutas no encontradas

const servidor = http.createServer((req, res) => {
  // Tu código aquí
});

const puerto = 3000;
servidor.listen(puerto, () => {
  console.log(\`Servidor escuchando en puerto \${puerto}\`);
});`,solution:`const http = require('http');

const servidor = http.createServer((req, res) => {
  // Configurar headers
  res.setHeader('Content-Type', 'text/html; charset=utf-8');
  
  // Rutas
  if (req.url === '/' && req.method === 'GET') {
    res.statusCode = 200;
    res.end('<h1>¡Hola, Mundo!</h1><p>Bienvenido a mi servidor Node.js</p>');
  } 
  else if (req.url === '/contacto' && req.method === 'GET') {
    res.statusCode = 200;
    res.end('<h1>Página de Contacto</h1><p>Email: contacto@ejemplo.com</p>');
  }
  else if (req.url === '/api/datos' && req.method === 'GET') {
    res.setHeader('Content-Type', 'application/json');
    res.statusCode = 200;
    res.end(JSON.stringify({ 
      mensaje: 'Datos del servidor',
      timestamp: new Date().toISOString()
    }));
  }
  else {
    res.statusCode = 404;
    res.end('<h1>404 - Página no encontrada</h1>');
  }
});

const puerto = 3000;
servidor.listen(puerto, () => {
  console.log(\`Servidor escuchando en http://localhost:\${puerto}\`);
});`,concepts:["Módulo http","Servidor HTTP","Rutas","Status codes","Headers"]},{id:"nodejs-2",title:"Express.js - Rutas y Middleware",level:"Intermedio",description:"Crear una API REST con Express.js con rutas y middleware.",targets:["Framework Express.js","Definir rutas GET, POST, PUT, DELETE","Middleware personalizado","Manejo de errores"],initialCode:`const express = require('express');
const app = express();

// Middleware para parsear JSON
app.use(express.json());

// Middleware personalizado para logging
// Tu código aquí

// Array de usuarios (simulando base de datos)
let usuarios = [
  { id: 1, nombre: 'Juan', email: 'juan@ejemplo.com' },
  { id: 2, nombre: 'María', email: 'maria@ejemplo.com' }
];

// GET - Obtener todos los usuarios
app.get('/api/usuarios', (req, res) => {
  // Tu código aquí
});

// GET - Obtener usuario por ID
app.get('/api/usuarios/:id', (req, res) => {
  // Tu código aquí
});

// POST - Crear nuevo usuario
app.post('/api/usuarios', (req, res) => {
  // Tu código aquí
});

// PUT - Actualizar usuario
app.put('/api/usuarios/:id', (req, res) => {
  // Tu código aquí
});

// DELETE - Eliminar usuario
app.delete('/api/usuarios/:id', (req, res) => {
  // Tu código aquí
});

const puerto = 3000;
app.listen(puerto, () => {
  console.log(\`API escuchando en puerto \${puerto}\`);
});`,solution:`const express = require('express');
const app = express();

// Middleware para parsear JSON
app.use(express.json());

// Middleware personalizado para logging
app.use((req, res, next) => {
  console.log(\`[\${new Date().toISOString()}] \${req.method} \${req.url}\`);
  next();
});

// Array de usuarios (simulando base de datos)
let usuarios = [
  { id: 1, nombre: 'Juan', email: 'juan@ejemplo.com' },
  { id: 2, nombre: 'María', email: 'maria@ejemplo.com' }
];

let proximoId = 3;

// GET - Obtener todos los usuarios
app.get('/api/usuarios', (req, res) => {
  res.json({
    success: true,
    data: usuarios,
    total: usuarios.length
  });
});

// GET - Obtener usuario por ID
app.get('/api/usuarios/:id', (req, res) => {
  const usuario = usuarios.find(u => u.id === parseInt(req.params.id));
  
  if (!usuario) {
    return res.status(404).json({
      success: false,
      mensaje: 'Usuario no encontrado'
    });
  }
  
  res.json({
    success: true,
    data: usuario
  });
});

// POST - Crear nuevo usuario
app.post('/api/usuarios', (req, res) => {
  const { nombre, email } = req.body;
  
  if (!nombre || !email) {
    return res.status(400).json({
      success: false,
      mensaje: 'Nombre y email son requeridos'
    });
  }
  
  const nuevoUsuario = {
    id: proximoId++,
    nombre,
    email
  };
  
  usuarios.push(nuevoUsuario);
  
  res.status(201).json({
    success: true,
    mensaje: 'Usuario creado',
    data: nuevoUsuario
  });
});

// PUT - Actualizar usuario
app.put('/api/usuarios/:id', (req, res) => {
  const usuario = usuarios.find(u => u.id === parseInt(req.params.id));
  
  if (!usuario) {
    return res.status(404).json({
      success: false,
      mensaje: 'Usuario no encontrado'
    });
  }
  
  if (req.body.nombre) usuario.nombre = req.body.nombre;
  if (req.body.email) usuario.email = req.body.email;
  
  res.json({
    success: true,
    mensaje: 'Usuario actualizado',
    data: usuario
  });
});

// DELETE - Eliminar usuario
app.delete('/api/usuarios/:id', (req, res) => {
  const indice = usuarios.findIndex(u => u.id === parseInt(req.params.id));
  
  if (indice === -1) {
    return res.status(404).json({
      success: false,
      mensaje: 'Usuario no encontrado'
    });
  }
  
  const usuarioEliminado = usuarios.splice(indice, 1);
  
  res.json({
    success: true,
    mensaje: 'Usuario eliminado',
    data: usuarioEliminado[0]
  });
});

// Manejo de errores
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({
    success: false,
    mensaje: 'Error interno del servidor'
  });
});

const puerto = 3000;
app.listen(puerto, () => {
  console.log(\`API escuchando en http://localhost:\${puerto}\`);
});`,concepts:["Express.js","Rutas REST","Middleware","Status codes","Validación","CRUD"]},{id:"nodejs-3",title:"Autenticación con JWT",level:"Avanzado",description:"Implementar autenticación con JSON Web Tokens (JWT).",targets:["Generar tokens JWT","Verificar tokens","Middleware de autenticación","Contraseñas hasheadas"],initialCode:`const express = require('express');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const app = express();
app.use(express.json());

const SECRET_KEY = 'tu_clave_secreta_muy_segura';

// Usuarios simulados
let usuarios = [
  { id: 1, email: 'usuario@ejemplo.com', password: 'hasheada' }
];

// Middleware para verificar JWT
const verificarToken = (req, res, next) => {
  // Tu código aquí
};

// POST - Login
app.post('/login', (req, res) => {
  // Tu código aquí
});

// GET - Datos protegidos
app.get('/perfil', verificarToken, (req, res) => {
  // Tu código aquí
});

app.listen(3000, () => console.log('Servidor en puerto 3000'));`,solution:`const express = require('express');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const app = express();
app.use(express.json());

const SECRET_KEY = 'tu_clave_secreta_muy_segura_cambiar_en_produccion';

// Usuarios simulados (en producción usar base de datos)
let usuarios = [
  { 
    id: 1, 
    email: 'usuario@ejemplo.com', 
    password: '$2b$10$...' // Contraseña hasheada
  }
];

// Middleware para verificar JWT
const verificarToken = (req, res, next) => {
  const token = req.headers['authorization']?.split(' ')[1];
  
  if (!token) {
    return res.status(401).json({
      success: false,
      mensaje: 'Token no proporcionado'
    });
  }
  
  try {
    const decoded = jwt.verify(token, SECRET_KEY);
    req.usuario = decoded;
    next();
  } catch (error) {
    return res.status(403).json({
      success: false,
      mensaje: 'Token inválido o expirado'
    });
  }
};

// POST - Login
app.post('/login', async (req, res) => {
  const { email, password } = req.body;
  
  if (!email || !password) {
    return res.status(400).json({
      success: false,
      mensaje: 'Email y contraseña requeridos'
    });
  }
  
  try {
    // Buscar usuario
    const usuario = usuarios.find(u => u.email === email);
    
    if (!usuario) {
      return res.status(401).json({
        success: false,
        mensaje: 'Credenciales inválidas'
      });
    }
    
    // Verificar contraseña
    const esValida = await bcrypt.compare(password, usuario.password);
    
    if (!esValida) {
      return res.status(401).json({
        success: false,
        mensaje: 'Credenciales inválidas'
      });
    }
    
    // Generar token
    const token = jwt.sign(
      { id: usuario.id, email: usuario.email },
      SECRET_KEY,
      { expiresIn: '24h' }
    );
    
    res.json({
      success: true,
      mensaje: 'Login exitoso',
      token,
      usuario: { id: usuario.id, email: usuario.email }
    });
    
  } catch (error) {
    res.status(500).json({
      success: false,
      mensaje: 'Error en el servidor'
    });
  }
});

// GET - Datos protegidos
app.get('/perfil', verificarToken, (req, res) => {
  res.json({
    success: true,
    mensaje: 'Acceso permitido',
    usuario: req.usuario
  });
});

// POST - Registro
app.post('/registro', async (req, res) => {
  const { email, password } = req.body;
  
  if (!email || !password) {
    return res.status(400).json({
      success: false,
      mensaje: 'Email y contraseña requeridos'
    });
  }
  
  try {
    // Verificar si usuario existe
    if (usuarios.find(u => u.email === email)) {
      return res.status(400).json({
        success: false,
        mensaje: 'El usuario ya existe'
      });
    }
    
    // Hashear contraseña
    const passwordHasheada = await bcrypt.hash(password, 10);
    
    // Crear usuario
    const nuevoUsuario = {
      id: usuarios.length + 1,
      email,
      password: passwordHasheada
    };
    
    usuarios.push(nuevoUsuario);
    
    res.status(201).json({
      success: true,
      mensaje: 'Usuario registrado exitosamente',
      usuario: { id: nuevoUsuario.id, email: nuevoUsuario.email }
    });
    
  } catch (error) {
    res.status(500).json({
      success: false,
      mensaje: 'Error en el servidor'
    });
  }
});

app.listen(3000, () => {
  console.log('Servidor de autenticación en puerto 3000');
});`,concepts:["JWT","Autenticación","Bcrypt","Middleware","Seguridad","Tokens"]}]},mongodb:{title:"MongoDB",description:"Base de datos NoSQL orientada a documentos",color:{principal:"#13AA52",secundario:"#47A248",fondo:"#E8F5E9"},challenges:[{id:"mongodb-1",title:"Conexión y Operaciones Básicas",level:"Principiante",description:"Conectar a MongoDB y realizar operaciones CRUD básicas.",targets:["Conectar a MongoDB con mongoose","Crear esquemas y modelos","Insertar documentos","Consultar documentos"],initialCode:`const mongoose = require('mongoose');

// Conectar a MongoDB
// mongoose.connect('mongodb://localhost:27017/mibasedatos');

// Definir esquema de usuario
const usuarioSchema = new mongoose.Schema({
  nombre: String,
  email: String,
  edad: Number,
  createdAt: { type: Date, default: Date.now }
});

// Crear modelo
const Usuario = mongoose.model('Usuario', usuarioSchema);

// Crear un nuevo usuario
// Tu código aquí

// Buscar todos los usuarios
// Tu código aquí

// Buscar usuario por email
// Tu código aquí`,solution:`const mongoose = require('mongoose');

// Conectar a MongoDB
mongoose.connect('mongodb://localhost:27017/mibasedatos', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

// Definir esquema de usuario
const usuarioSchema = new mongoose.Schema({
  nombre: {
    type: String,
    required: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true
  },
  edad: {
    type: Number,
    min: 0,
    max: 150
  },
  activo: {
    type: Boolean,
    default: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

// Crear modelo
const Usuario = mongoose.model('Usuario', usuarioSchema);

// Crear un nuevo usuario
async function crearUsuario() {
  try {
    const nuevoUsuario = new Usuario({
      nombre: 'Juan Pérez',
      email: 'juan@ejemplo.com',
      edad: 28
    });
    
    await nuevoUsuario.save();
    console.log('Usuario creado:', nuevoUsuario);
  } catch (error) {
    console.error('Error:', error.message);
  }
}

// Buscar todos los usuarios
async function obtenerTodos() {
  try {
    const usuarios = await Usuario.find();
    console.log('Usuarios:', usuarios);
  } catch (error) {
    console.error('Error:', error.message);
  }
}

// Buscar usuario por email
async function buscarPorEmail(email) {
  try {
    const usuario = await Usuario.findOne({ email });
    console.log('Usuario encontrado:', usuario);
  } catch (error) {
    console.error('Error:', error.message);
  }
}

// Actualizar usuario
async function actualizarUsuario(id, datos) {
  try {
    const usuarioActualizado = await Usuario.findByIdAndUpdate(
      id,
      datos,
      { new: true }
    );
    console.log('Usuario actualizado:', usuarioActualizado);
  } catch (error) {
    console.error('Error:', error.message);
  }
}

// Eliminar usuario
async function eliminarUsuario(id) {
  try {
    const usuarioEliminado = await Usuario.findByIdAndDelete(id);
    console.log('Usuario eliminado:', usuarioEliminado);
  } catch (error) {
    console.error('Error:', error.message);
  }
}

// Ejecutar funciones
crearUsuario();
obtenerTodos();
buscarPorEmail('juan@ejemplo.com');`,concepts:["Mongoose","Esquemas","Modelos","CRUD","Validación","Async/Await"]},{id:"mongodb-2",title:"Relaciones y Poblamiento",level:"Intermedio",description:"Trabajar con referencias entre colecciones y usar populate.",targets:["Crear referencias entre documentos","Usar populate para obtener datos relacionados","Validar referencias","Consultas con múltiples colecciones"],initialCode:`const mongoose = require('mongoose');

// Esquema de Autor
const autorSchema = new mongoose.Schema({
  nombre: String,
  email: String
});

// Esquema de Libro con referencia a Autor
const libroSchema = new mongoose.Schema({
  title: String,
  autor: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Autor'
  },
  año: Number,
  paginas: Number
});

const Autor = mongoose.model('Autor', autorSchema);
const Libro = mongoose.model('Libro', libroSchema);

// Crear un autor
// Tu código aquí

// Crear un libro con referencia al autor
// Tu código aquí

// Obtener libro con datos del autor (populate)
// Tu código aquí`,solution:`const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/biblioteca');

// Esquema de Autor
const autorSchema = new mongoose.Schema({
  nombre: {
    type: String,
    required: true
  },
  email: {
    type: String,
    unique: true
  },
  pais: String,
  createdAt: {
    type: Date,
    default: Date.now
  }
});

// Esquema de Libro con referencia a Autor
const libroSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  autor: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Autor',
    required: true
  },
  año: Number,
  paginas: Number,
  genero: String,
  disponible: {
    type: Boolean,
    default: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

const Autor = mongoose.model('Autor', autorSchema);
const Libro = mongoose.model('Libro', libroSchema);

// Crear un autor
async function crearAutor() {
  try {
    const autor = new Autor({
      nombre: 'Gabriel García Márquez',
      email: 'gabriel@ejemplo.com',
      pais: 'Colombia'
    });
    
    await autor.save();
    console.log('Autor creado:', autor);
    return autor._id;
  } catch (error) {
    console.error('Error:', error.message);
  }
}

// Crear un libro con referencia al autor
async function crearLibro(autorId) {
  try {
    const libro = new Libro({
      title: 'Cien años de soledad',
      autor: autorId,
      año: 1967,
      paginas: 417,
      genero: 'Realismo mágico'
    });
    
    await libro.save();
    console.log('Libro creado:', libro);
  } catch (error) {
    console.error('Error:', error.message);
  }
}

// Obtener libro con datos del autor (populate)
async function obtenerLibroConAutor() {
  try {
    const libro = await Libro.findOne({ title: 'Cien años de soledad' })
      .populate('autor');
    
    console.log('Libro con autor:', libro);
  } catch (error) {
    console.error('Error:', error.message);
  }
}

// Obtener todos los libros de un autor
async function obtenerLibrosPorAutor(nombreAutor) {
  try {
    const autor = await Autor.findOne({ nombre: nombreAutor });
    
    if (!autor) {
      console.log('Autor no encontrado');
      return;
    }
    
    const libros = await Libro.find({ autor: autor._id })
      .populate('autor');
    
    console.log(\`Libros de \${nombreAutor}:\`, libros);
  } catch (error) {
    console.error('Error:', error.message);
  }
}

// Actualizar disponibilidad de libro
async function actualizarDisponibilidad(libroId, disponible) {
  try {
    const libro = await Libro.findByIdAndUpdate(
      libroId,
      { disponible },
      { new: true }
    ).populate('autor');
    
    console.log('Libro actualizado:', libro);
  } catch (error) {
    console.error('Error:', error.message);
  }
}

// Ejecutar funciones
(async () => {
  const autorId = await crearAutor();
  await crearLibro(autorId);
  await obtenerLibroConAutor();
  await obtenerLibrosPorAutor('Gabriel García Márquez');
})();`,concepts:["Referencias","Populate","Relaciones","ObjectId","Consultas relacionales"]},{id:"mongodb-3",title:"Agregaciones y Análisis",level:"Avanzado",description:"Usar el pipeline de agregación para análisis complejos.",targets:["Pipeline de agregación","Stages: $match, $group, $sort, $limit","Cálculos agregados","Análisis de datos"],initialCode:`const mongoose = require('mongoose');

// Esquema de Venta
const ventaSchema = new mongoose.Schema({
  producto: String,
  cantidad: Number,
  precio: Number,
  fecha: Date,
  vendedor: String
});

const Venta = mongoose.model('Venta', ventaSchema);

// Obtener total de ventas por producto
// Tu código aquí

// Obtener vendedor con más ventas
// Tu código aquí

// Obtener ventas por mes
// Tu código aquí`,solution:`const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/ventas');

// Esquema de Venta
const ventaSchema = new mongoose.Schema({
  producto: String,
  cantidad: Number,
  precio: Number,
  total: {
    type: Number,
    default: function() { return this.cantidad * this.precio; }
  },
  fecha: {
    type: Date,
    default: Date.now
  },
  vendedor: String,
  estado: {
    type: String,
    enum: ['completada', 'pendiente', 'cancelada'],
    default: 'completada'
  }
});

const Venta = mongoose.model('Venta', ventaSchema);

// Obtener total de ventas por producto
async function ventasPorProducto() {
  try {
    const resultado = await Venta.aggregate([
      {
        $match: { estado: 'completada' }
      },
      {
        $group: {
          _id: '$producto',
          totalVentas: { $sum: '$total' },
          cantidadVendida: { $sum: '$cantidad' },
          promedioVenta: { $avg: '$total' }
        }
      },
      {
        $sort: { totalVentas: -1 }
      }
    ]);
    
    console.log('Ventas por producto:', resultado);
    return resultado;
  } catch (error) {
    console.error('Error:', error.message);
  }
}

// Obtener vendedor con más ventas
async function vendedorTopVentas() {
  try {
    const resultado = await Venta.aggregate([
      {
        $match: { estado: 'completada' }
      },
      {
        $group: {
          _id: '$vendedor',
          totalVentas: { $sum: '$total' },
          cantidadTransacciones: { $sum: 1 },
          promedioTransaccion: { $avg: '$total' }
        }
      },
      {
        $sort: { totalVentas: -1 }
      },
      {
        $limit: 5
      }
    ]);
    
    console.log('Top 5 vendedores:', resultado);
    return resultado;
  } catch (error) {
    console.error('Error:', error.message);
  }
}

// Obtener ventas por mes
async function ventasPorMes() {
  try {
    const resultado = await Venta.aggregate([
      {
        $match: { estado: 'completada' }
      },
      {
        $group: {
          _id: {
            año: { $year: '$fecha' },
            mes: { $month: '$fecha' }
          },
          totalVentas: { $sum: '$total' },
          cantidadVentas: { $sum: 1 }
        }
      },
      {
        $sort: { '_id.año': 1, '_id.mes': 1 }
      }
    ]);
    
    console.log('Ventas por mes:', resultado);
    return resultado;
  } catch (error) {
    console.error('Error:', error.message);
  }
}

// Estadísticas generales
async function estadisticasGenerales() {
  try {
    const resultado = await Venta.aggregate([
      {
        $match: { estado: 'completada' }
      },
      {
        $facet: {
          resumen: [
            {
              $group: {
                _id: null,
                totalVentas: { $sum: '$total' },
                cantidadTransacciones: { $sum: 1 },
                promedioTransaccion: { $avg: '$total' },
                ventaMaxima: { $max: '$total' },
                ventaMinima: { $min: '$total' }
              }
            }
          ],
          productosMasVendidos: [
            {
              $group: {
                _id: '$producto',
                cantidad: { $sum: '$cantidad' }
              }
            },
            { $sort: { cantidad: -1 } },
            { $limit: 3 }
          ]
        }
      }
    ]);
    
    console.log('Estadísticas generales:', resultado);
    return resultado;
  } catch (error) {
    console.error('Error:', error.message);
  }
}

// Ejecutar funciones
(async () => {
  await ventasPorProducto();
  await vendedorTopVentas();
  await ventasPorMes();
  await estadisticasGenerales();
})();`,concepts:["Agregación","Pipeline","$group","$match","$sort","Análisis de datos"]}]},mysql:{title:"MySQL",description:"Base de datos relacional SQL",color:{principal:"#00758F",secundario:"#0066CC",fondo:"#E3F2FD"},challenges:[{id:"mysql-1",title:"Conexión y Consultas Básicas",level:"Principiante",description:"Conectar a MySQL y realizar consultas SELECT, INSERT, UPDATE, DELETE.",targets:["Conectar a MySQL con Node.js","Ejecutar consultas SELECT","Insertar registros","Actualizar y eliminar datos"],initialCode:`const mysql = require('mysql2/promise');

// Crear conexión
const conexion = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'tu_contraseña',
  database: 'mibasedatos'
});

// Crear tabla de usuarios
// CREATE TABLE usuarios (
//   id INT AUTO_INCREMENT PRIMARY KEY,
//   nombre VARCHAR(100),
//   email VARCHAR(100) UNIQUE,
//   edad INT
// );

// Insertar usuario
// Tu código aquí

// Obtener todos los usuarios
// Tu código aquí

// Actualizar usuario
// Tu código aquí

// Eliminar usuario
// Tu código aquí`,solution:`const mysql = require('mysql2/promise');

// Crear pool de conexiones
const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: 'tu_contraseña',
  database: 'mibasedatos',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

// Crear tabla de usuarios
async function crearTabla() {
  const conexion = await pool.getConnection();
  try {
    await conexion.execute(\`
      CREATE TABLE IF NOT EXISTS usuarios (
        id INT AUTO_INCREMENT PRIMARY KEY,
        nombre VARCHAR(100) NOT NULL,
        email VARCHAR(100) UNIQUE NOT NULL,
        edad INT,
        activo BOOLEAN DEFAULT true,
        createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )
    \`);
    console.log('Tabla creada exitosamente');
  } catch (error) {
    console.error('Error:', error.message);
  } finally {
    conexion.release();
  }
}

// Insertar usuario
async function insertarUsuario(nombre, email, edad) {
  const conexion = await pool.getConnection();
  try {
    const [resultado] = await conexion.execute(
      'INSERT INTO usuarios (nombre, email, edad) VALUES (?, ?, ?)',
      [nombre, email, edad]
    );
    console.log('Usuario insertado:', resultado);
    return resultado.insertId;
  } catch (error) {
    console.error('Error:', error.message);
  } finally {
    conexion.release();
  }
}

// Obtener todos los usuarios
async function obtenerTodos() {
  const conexion = await pool.getConnection();
  try {
    const [usuarios] = await conexion.execute(
      'SELECT * FROM usuarios WHERE activo = true'
    );
    console.log('Usuarios:', usuarios);
    return usuarios;
  } catch (error) {
    console.error('Error:', error.message);
  } finally {
    conexion.release();
  }
}

// Obtener usuario por ID
async function obtenerPorId(id) {
  const conexion = await pool.getConnection();
  try {
    const [usuarios] = await conexion.execute(
      'SELECT * FROM usuarios WHERE id = ?',
      [id]
    );
    console.log('Usuario encontrado:', usuarios[0]);
    return usuarios[0];
  } catch (error) {
    console.error('Error:', error.message);
  } finally {
    conexion.release();
  }
}

// Actualizar usuario
async function actualizarUsuario(id, nombre, email, edad) {
  const conexion = await pool.getConnection();
  try {
    const [resultado] = await conexion.execute(
      'UPDATE usuarios SET nombre = ?, email = ?, edad = ? WHERE id = ?',
      [nombre, email, edad, id]
    );
    console.log('Usuario actualizado:', resultado);
    return resultado;
  } catch (error) {
    console.error('Error:', error.message);
  } finally {
    conexion.release();
  }
}

// Eliminar usuario
async function eliminarUsuario(id) {
  const conexion = await pool.getConnection();
  try {
    const [resultado] = await conexion.execute(
      'DELETE FROM usuarios WHERE id = ?',
      [id]
    );
    console.log('Usuario eliminado:', resultado);
    return resultado;
  } catch (error) {
    console.error('Error:', error.message);
  } finally {
    conexion.release();
  }
}

// Ejecutar funciones
(async () => {
  await crearTabla();
  await insertarUsuario('Juan', 'juan@ejemplo.com', 28);
  await insertarUsuario('María', 'maria@ejemplo.com', 25);
  await obtenerTodos();
  await obtenerPorId(1);
  await actualizarUsuario(1, 'Juan Pérez', 'juan.perez@ejemplo.com', 29);
  await obtenerTodos();
})();`,concepts:["Conexión MySQL","Pool de conexiones","Prepared statements","CRUD","Async/Await"]},{id:"mysql-2",title:"Relaciones y JOINs",level:"Intermedio",description:"Trabajar con relaciones entre tablas usando JOINs.",targets:["Crear tablas relacionadas","Foreign keys","INNER JOIN, LEFT JOIN","Consultas con múltiples tablas"],initialCode:`const mysql = require('mysql2/promise');

// Tablas:
// usuarios (id, nombre, email)
// pedidos (id, usuario_id, total, fecha)

// Crear tablas
// Tu código aquí

// Insertar datos
// Tu código aquí

// Obtener usuario con sus pedidos (JOIN)
// Tu código aquí

// Obtener pedidos con datos del usuario
// Tu código aquí`,solution:`const mysql = require('mysql2/promise');

const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: 'tu_contraseña',
  database: 'tienda'
});

// Crear tablas
async function crearTablas() {
  const conexion = await pool.getConnection();
  try {
    // Tabla usuarios
    await conexion.execute(\`
      CREATE TABLE IF NOT EXISTS usuarios (
        id INT AUTO_INCREMENT PRIMARY KEY,
        nombre VARCHAR(100) NOT NULL,
        email VARCHAR(100) UNIQUE NOT NULL,
        createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )
    \`);
    
    // Tabla pedidos
    await conexion.execute(\`
      CREATE TABLE IF NOT EXISTS pedidos (
        id INT AUTO_INCREMENT PRIMARY KEY,
        usuario_id INT NOT NULL,
        total DECIMAL(10, 2),
        estado VARCHAR(50) DEFAULT 'pendiente',
        fecha TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        FOREIGN KEY (usuario_id) REFERENCES usuarios(id) ON DELETE CASCADE
      )
    \`);
    
    console.log('Tablas creadas exitosamente');
  } catch (error) {
    console.error('Error:', error.message);
  } finally {
    conexion.release();
  }
}

// Insertar datos
async function insertarDatos() {
  const conexion = await pool.getConnection();
  try {
    // Insertar usuarios
    await conexion.execute(
      'INSERT INTO usuarios (nombre, email) VALUES (?, ?)',
      ['Juan', 'juan@ejemplo.com']
    );
    
    await conexion.execute(
      'INSERT INTO usuarios (nombre, email) VALUES (?, ?)',
      ['María', 'maria@ejemplo.com']
    );
    
    // Insertar pedidos
    await conexion.execute(
      'INSERT INTO pedidos (usuario_id, total, estado) VALUES (?, ?, ?)',
      [1, 150.50, 'completado']
    );
    
    await conexion.execute(
      'INSERT INTO pedidos (usuario_id, total, estado) VALUES (?, ?, ?)',
      [1, 200.00, 'pendiente']
    );
    
    await conexion.execute(
      'INSERT INTO pedidos (usuario_id, total, estado) VALUES (?, ?, ?)',
      [2, 75.25, 'completado']
    );
    
    console.log('Datos insertados exitosamente');
  } catch (error) {
    console.error('Error:', error.message);
  } finally {
    conexion.release();
  }
}

// Obtener usuario con sus pedidos (INNER JOIN)
async function obtenerUsuarioConPedidos(usuarioId) {
  const conexion = await pool.getConnection();
  try {
    const [resultado] = await conexion.execute(\`
      SELECT 
        u.id,
        u.nombre,
        u.email,
        p.id as pedido_id,
        p.total,
        p.estado,
        p.fecha
      FROM usuarios u
      INNER JOIN pedidos p ON u.id = p.usuario_id
      WHERE u.id = ?
    \`, [usuarioId]);
    
    console.log('Usuario con pedidos:', resultado);
    return resultado;
  } catch (error) {
    console.error('Error:', error.message);
  } finally {
    conexion.release();
  }
}

// Obtener todos los usuarios con sus pedidos (LEFT JOIN)
async function obtenerTodosConPedidos() {
  const conexion = await pool.getConnection();
  try {
    const [resultado] = await conexion.execute(\`
      SELECT 
        u.id,
        u.nombre,
        u.email,
        COUNT(p.id) as total_pedidos,
        SUM(p.total) as total_gastado
      FROM usuarios u
      LEFT JOIN pedidos p ON u.id = p.usuario_id
      GROUP BY u.id, u.nombre, u.email
    \`);
    
    console.log('Usuarios con resumen de pedidos:', resultado);
    return resultado;
  } catch (error) {
    console.error('Error:', error.message);
  } finally {
    conexion.release();
  }
}

// Obtener pedidos con datos del usuario
async function obtenerPedidosConUsuario() {
  const conexion = await pool.getConnection();
  try {
    const [resultado] = await conexion.execute(\`
      SELECT 
        p.id,
        p.total,
        p.estado,
        p.fecha,
        u.nombre as usuario_nombre,
        u.email as usuario_email
      FROM pedidos p
      INNER JOIN usuarios u ON p.usuario_id = u.id
      ORDER BY p.fecha DESC
    \`);
    
    console.log('Pedidos con usuario:', resultado);
    return resultado;
  } catch (error) {
    console.error('Error:', error.message);
  } finally {
    conexion.release();
  }
}

// Obtener estadísticas
async function obtenerEstadisticas() {
  const conexion = await pool.getConnection();
  try {
    const [resultado] = await conexion.execute(\`
      SELECT 
        COUNT(DISTINCT u.id) as total_usuarios,
        COUNT(p.id) as total_pedidos,
        SUM(p.total) as total_ventas,
        AVG(p.total) as promedio_pedido,
        MAX(p.total) as pedido_maximo
      FROM usuarios u
      LEFT JOIN pedidos p ON u.id = p.usuario_id
    \`);
    
    console.log('Estadísticas:', resultado[0]);
    return resultado[0];
  } catch (error) {
    console.error('Error:', error.message);
  } finally {
    conexion.release();
  }
}

// Ejecutar funciones
(async () => {
  await crearTablas();
  await insertarDatos();
  await obtenerUsuarioConPedidos(1);
  await obtenerTodosConPedidos();
  await obtenerPedidosConUsuario();
  await obtenerEstadisticas();
})();`,concepts:["Foreign keys","INNER JOIN","LEFT JOIN","GROUP BY","Relaciones","Agregaciones"]},{id:"mysql-3",title:"Transacciones y Procedimientos",level:"Avanzado",description:"Usar transacciones y procedimientos almacenados en MySQL.",targets:["Transacciones ACID","BEGIN, COMMIT, ROLLBACK","Procedimientos almacenados","Manejo de errores"],initialCode:`const mysql = require('mysql2/promise');

// Transferencia de dinero entre cuentas
// Debe ser atómica (todo o nada)

async function transferirDinero(cuentaOrigen, cuentaDestino, monto) {
  const conexion = await pool.getConnection();
  
  try {
    // Iniciar transacción
    await conexion.beginTransaction();
    
    // Verificar saldo de cuenta origen
    const [origen] = await conexion.execute(
      'SELECT saldo FROM cuentas WHERE numero_cuenta = ? FOR UPDATE',
      [cuentaOrigen]
    );
    
    if (!origen[0] || origen[0].saldo < monto) {
      throw new Error('Saldo insuficiente');
    }
    
    // Restar de cuenta origen
    await conexion.execute(
      'UPDATE cuentas SET saldo = saldo - ? WHERE numero_cuenta = ?',
      [monto, cuentaOrigen]
    );
    
    // Sumar a cuenta destino
    await conexion.execute(
      'UPDATE cuentas SET saldo = saldo + ? WHERE numero_cuenta = ?',
      [monto, cuentaDestino]
    );
    
    // Confirmar transacción
    await conexion.commit();
    
    console.log(\`Transferencia exitosa: \${monto} de \${cuentaOrigen} a \${cuentaDestino}\`);
    return true;
    
  } catch (error) {
    // Revertir transacción
    await conexion.rollback();
    console.error('Error en transferencia:', error.message);
    return false;
  } finally {
    conexion.release();
  }
}

// Procedimiento almacenado
async function crearProcedimiento() {
  const conexion = await pool.getConnection();
  try {
    await conexion.execute(\`
      CREATE PROCEDURE IF NOT EXISTS obtener_saldo(
        IN p_numero_cuenta VARCHAR(20),
        OUT p_saldo DECIMAL(15, 2)
      )
      BEGIN
        SELECT saldo INTO p_saldo
        FROM cuentas
        WHERE numero_cuenta = p_numero_cuenta;
      END
    \`);
    
    console.log('Procedimiento creado');
  } catch (error) {
    console.error('Error:', error.message);
  } finally {
    conexion.release();
  }
}

// Llamar procedimiento almacenado
async function llamarProcedimiento(numeroCuenta) {
  const conexion = await pool.getConnection();
  try {
    const [resultado] = await conexion.execute(
      'CALL obtener_saldo(?, @saldo)',
      [numeroCuenta]
    );
    
    const [saldo] = await conexion.execute('SELECT @saldo as saldo');
    console.log('Saldo:', saldo[0].saldo);
    return saldo[0].saldo;
  } catch (error) {
    console.error('Error:', error.message);
  } finally {
    conexion.release();
  }
}

// Insertar datos de prueba
async function insertarDatos() {
  const conexion = await pool.getConnection();
  try {
    await conexion.execute(
      'INSERT INTO cuentas (numero_cuenta, titular, saldo) VALUES (?, ?, ?)',
      ['001', 'Juan Pérez', 1000.00]
    );
    
    await conexion.execute(
      'INSERT INTO cuentas (numero_cuenta, titular, saldo) VALUES (?, ?, ?)',
      ['002', 'María García', 500.00]
    );
    
    console.log('Datos insertados');
  } catch (error) {
    console.error('Error:', error.message);
  } finally {
    conexion.release();
  }
}

// Ejecutar funciones
(async () => {
  await crearTabla();
  await insertarDatos();
  await transferirDinero('001', '002', 250.00);
  await transferirDinero('001', '002', 2000.00); // Fallará por saldo insuficiente
  await crearProcedimiento();
  await llamarProcedimiento('001');
})();`,concepts:["Transacciones","ACID","BEGIN/COMMIT/ROLLBACK","Procedimientos","Integridad de datos"]}]}},tb={html:{title:"HTML",description:"Markup language for structuring web content",color:Mt.html,challenges:[{id:"html-1",title:"Basic HTML5 Structure",level:"Beginner",description:"Create the basic structure of an HTML5 document with all the necessary semantic tags.",targets:["Declaration DOCTYPE","Elements <html>, <head>, <body>","Metadata (charset, viewport, title)","Semantic labels (<header>, <nav>, <main>, <section>, <footer>)"],initialCode:`<!DOCTYPE html>
<html lang="es">
<head>
  <!-- Your code here -->
</head>
<body>
  <!-- Your code here -->
</body>
</html>`,solution:`<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>My fiers web</title>
</head>
<body>
  <header>
    <h1>Welcome to my Web</h1>
  </header>
  <nav>
    <ul>
      <li><a href="#init">Home</a></li>
      <li><a href="#about">About me</a></li>
      <li><a href="#contact">Contact</a></li>
    </ul>
  </nav>
  <main>
    <section id="init">
      <h2>Init</h2>
      <p>thiw is my first web page with semantic HTML5.</p>
    </section>
  </main>
  <footer>
    <p>&copy; 2024 My Portfolio</p>
  </footer>
</body>
</html>`,concepts:["DOCTYPE","Semantic HTML5","Metadata","Accesibility"]},{id:"html-2",title:"Contact Form",level:"Intermediate",description:"Create a complete contact form with different input types and basic validation.",targets:["Inputs text, email, textarea","Oblogatory fields (required)","Asociate labels","Submit button"],initialCode:`<form>
  <!-- Make your formulary here -->
  <!-- Include: name, email, subject, message -->
</form>`,solution:`<form action="/send" method="POST">
  <div>
    <label for="name">Name:</label>
    <input type="text" id="name" name="name" required>
  </div>
  <div>
    <label for="email">Email:</label>
    <input type="email" id="email" name="email" required>
  </div>
  <div>
    <label for="subject">Subject:</label>
    <select id="subject" name="subject">
      <option value="">Select a subject</option>
      <option value="ask">General question</option>
      <option value="money">Money form</option>
      <option value="support">Support</option>
    </select>
  </div>
  <div>
    <label for="message">Message:</label>
    <textarea id="message" name="message" rows="5" required></textarea>
  </div>
  <button type="submit">Submit message</button>
</form>`,concepts:["HTML forms","Input types","Validate HTML5","Accesibility"]},{id:"html-3",title:"Image Gallery",level:"Intermediate",description:"Create a responsive image gallery using figure, figcaption, and links.",targets:["Labels <figure> y <figcaption>","Responsive images with srcset","Links to full iamges","Grid layout with CSS (soon)"],initialCode:`<div class="galeria">
  <!-- Create you 4 images gallery -->
</div>`,solution:`<div class="galeria">
  <figure>
    <a href="img/grande-1.jpg">
      <img src="img/pequena-1.jpg" alt="Descripción imagen 1">
    </a>
    <figcaption>Imagen 1</figcaption>
  </figure>
  <figure>
    <a href="img/grande-2.jpg">
      <img src="img/pequena-2.jpg" alt="Descripción imagen 2">
    </a>
    <figcaption>Imagen 2</figcaption>
  </figure>
  <figure>
    <a href="img/grande-3.jpg">
      <img src="img/pequena-3.jpg" alt="Descripción imagen 3">
    </a>
    <figcaption>Imagen 3</figcaption>
  </figure>
  <figure>
    <a href="img/grande-4.jpg">
      <img src="img/pequena-4.jpg" alt="Descripción imagen 4">
    </a>
    <figcaption>Imagen 4</figcaption>
  </figure>
</div>`,concepts:["Figure y figcaption","Optimización de imágenes","Galerías","Accesibilidad visual"]}]},css:{title:"CSS",description:"Styles for designing and positioning web elements",color:Mt.css,challenges:[{id:"css-1",title:"Flexbox Centering",level:"Beginner",description:"Center an element both horizontally and vertically using Flexbox.",targets:["display: flex","justify-content: center","align-items: center","height: 100vh"],initialCode:`.contenedor {
  /* Tu código aquí */
}

.caja {
  width: 200px;
  height: 200px;
  background: #3498db;
}`,solution:`.contenedor {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  margin: 0;
}

.caja {
  width: 200px;
  height: 200px;
  background: #3498db;
}`,concepts:["Flexbox","Centrado vertical/horizontal","Viewport height","Reset básico"]},{id:"css-2",title:"Responsive Grid Layout",level:"Intermediate",description:"Create a grid layout that adapts to different screen sizes.",targets:["display: grid","grid-template-columns con repeat() y auto-fit","gap entre elementos","Media queries para personalización"],initialCode:`.galeria {
  /* Crea un grid responsive */
}

.tarjeta {
  background: white;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}`,solution:`.galeria {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 24px;
  padding: 24px;
  max-width: 1200px;
  margin: 0 auto;
}

.tarjeta {
  background: white;
  padding: 24px;
  border-radius: 12px;
  box-shadow: 0 4px 6px rgba(0,0,0,0.1);
  transition: transform 0.2s, box-shadow 0.2s;
}

.tarjeta:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 12px rgba(0,0,0,0.15);
}

@media (max-width: 600px) {
  .galeria {
    grid-template-columns: 1fr;
    padding: 16px;
    gap: 16px;
  }
}`,concepts:["CSS Grid","auto-fit y minmax","Responsive design","Media queries","Hover effects"]},{id:"css-3",title:"Button Animation",level:"Intermediate",description:"Create an interactive button with hover effects and animations.",targets:["transition para animaciones suaves","transform y translate","Pseudoclases (:hover, :active)","keyframes para animaciones"],initialCode:`.btn {
  padding: 12px 24px;
  background: #3498db;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  /* Tu código aquí */
}`,solution:`.btn {
  padding: 14px 28px;
  background: linear-gradient(135deg, #3498db, #2980b9);
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-size: 16px;
  font-weight: 600;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
}

.btn::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    90deg,
    transparent,
    rgba(255,255,255,0.2),
    transparent
  );
  transition: left 0.5s;
}

.btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(52, 152, 219, 0.4);
}

.btn:hover::before {
  left: 100%;
}

.btn:active {
  transform: translateY(0);
}`,concepts:["Transiciones","Gradientes","Transformaciones","Pseudoelementos","Overflow hidden"]}]},javascript:{title:"JavaScript",description:"Programming language for web interactivity",color:Mt.javascript,challenges:[{id:"js-1",title:"Simple Calculator",level:"Beginner",description:"Create basic functions to perform mathematical operations.",targets:["Funciones con parámetros","Operadores aritméticos","Return de valores","Manejo de números"],initialCode:`// Crea funciones para:
// - Sumar dos números
// - Restar dos números
// - Multiplicar dos números
// - Dividir dos números (con validación de división por cero)

function sumar(a, b) {
  // Tu código aquí
}

function restar(a, b) {
  // Tu código aquí
}

// Crea las funciones multiplicar y dividir`,solution:`function sumar(a, b) {
  return a + b;
}

function restar(a, b) {
  return a - b;
}

function multiplicar(a, b) {
  return a * b;
}

function dividir(a, b) {
  if (b === 0) {
    console.error('Error: No se puede dividir por cero');
    return null;
  }
  return a / b;
}

// Ejemplos de uso:
console.log(sumar(5, 3));      // 8
console.log(restar(10, 4));    // 6
console.log(multiplicar(6, 7)); // 42
console.log(dividir(20, 4));   // 5
console.log(dividir(20, 0));   // null + mensaje de error`,concepts:["Funciones","Parámetros y argumentos","Return","Condicionales","Operadores"]},{id:"js-2",title:"DOM Manipulation",level:"Intermediate",description:"Create, modify, and remove DOM elements dynamically.",targets:["document.querySelector / querySelectorAll","createElement, appendChild, remove","Modificar textContent y classList","Event listeners"],initialCode:`// Crea una lista de tareas donde puedas:
// 1. Agregar nuevas tareas
// 2. Marcar tareas como completadas
// 3. Eliminar tareas

const lista = document.getElementById('lista');
const input = document.getElementById('input');
const boton = document.getElementById('agregar');

// Tu código aquí`,solution:`const lista = document.getElementById('lista');
const input = document.getElementById('input');
const boton = document.getElementById('agregar');

function agregarTarea(texto) {
  if (!texto.trim()) return;
  
  const li = document.createElement('li');
  
  const textoTarea = document.createElement('span');
  textoTarea.textContent = texto;
  
  const btnCompletar = document.createElement('button');
  btnCompletar.textContent = '✓';
  btnCompletar.addEventListener('click', () => {
    textoTarea.classList.toggle('completado');
  });
  
  const btnEliminar = document.createElement('button');
  btnEliminar.textContent = '✕';
  btnEliminar.addEventListener('click', () => {
    li.remove();
  });
  
  li.appendChild(textoTarea);
  li.appendChild(btnCompletar);
  li.appendChild(btnEliminar);
  lista.appendChild(li);
  
  input.value = '';
}

boton.addEventListener('click', () => {
  agregarTarea(input.value);
});

input.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    agregarTarea(input.value);
  }
});`,concepts:["DOM manipulation","Event listeners","ClassList","Template literals","Conditional logic"]},{id:"js-3",title:"API Fetch and Async/Await",level:"Advanced",description:"Consume data from a public API using async/await.",targets:["fetch API","async/await","try/catch para errores","Manipulación de JSON"],initialCode:`// Consume datos de JSONPlaceholder
// Muestra los primeros 5 posts con su título y cuerpo

async function obtenerPosts() {
  try {
    // Tu código aquí
  } catch (error) {
    console.error('Error:', error);
  }
}

obtenerPosts();`,solution:`async function obtenerPosts() {
  try {
    const respuesta = await fetch(
      'https://jsonplaceholder.typicode.com/posts?_limit=5'
    );
    
    if (!respuesta.ok) {
      throw new Error('Error en la respuesta');
    }
    
    const posts = await respuesta.json();
    
    const contenedor = document.getElementById('posts');
    contenedor.innerHTML = '';
    
    posts.forEach(post => {
      const article = document.createElement('article');
      article.innerHTML = \`
        <h3>\${post.title}</h3>
        <p>\${post.body}</p>
      \`;
      contenedor.appendChild(article);
    });
    
  } catch (error) {
    console.error('Error:', error);
    document.getElementById('posts').innerHTML = 
      '<p>Error al cargar los posts</p>';
  }
}

obtenerPosts();`,concepts:["Fetch API","Async/Await","Try/Catch","JSON handling","DOM manipulation"]}]},react:{title:"React JS",description:"Library for building user interfaces",color:Mt.react,challenges:[{id:"react-1",title:"My First Component",level:"Beginner",description:"Create and render a basic functional component.",targets:["Crear componentes funcionales","Props básicas","JSX syntax","Renderizado de componentes"],initialCode:`// Crea un componente Saludo que reciba un prop "nombre"
// y muestre: "Hola, [nombre]! Bienvenido a React"

function Saludo({ nombre }) {
  // Tu código aquí
}

export default Saludo;`,solution:`import React from 'react';

function Saludo({ nombre, idioma = 'es' }) {
  const mensajes = {
    es: 'Hola',
    en: 'Hello',
    fr: 'Bonjour'
  };
  
  return (
    <div className="saludo">
      <h2>{mensajes[idioma]}, {nombre}! 👋</h2>
      <p>Bienvenido a aprender React</p>
    </div>
  );
}

export default Saludo;

// Uso:
// <Saludo nombre="Carlos" idioma="es" />
// <Saludo nombre="John" idioma="en" />`,concepts:["Componentes funcionales","Props","JSX","Valores por defecto","Renderizado"]},{id:"react-2",title:"Counter with useState",level:"Beginner",description:"Create an interactive counter with buttons to increment and decrement.",targets:["useState hook","Event handlers","Renderizado condicional","State updates"],initialCode:`import { useState } from 'react';

function Contador() {
  // Declara el estado "cuenta" con useState
  
  return (
    <div className="contador">
      {/* Muestra el contador actual */}
      
      <div className="botones">
        {/* Botones para incrementar y decrementar */}
      </div>
    </div>
  );
}

export default Contador;`,solution:`import { useState } from 'react';

function Contador({ valorInicial = 0, paso = 1 }) {
  const [cuenta, setCuenta] = useState(valorInicial);
  const [historial, setHistorial] = useState([]);

  const incrementar = () => {
    setCuenta(c => c + paso);
    setHistorial(h => [...h, cuenta + paso]);
  };

  const decrementar = () => {
    if (cuenta - paso >= 0) {
      setCuenta(c => c - paso);
      setHistorial(h => [...h, cuenta - paso]);
    }
  };

  const reiniciar = () => {
    setCuenta(valorInicial);
    setHistorial([]);
  };

  return (
    <div className="contador">
      <h3>Contador: {cuenta}</h3>
      
      <div className="botones">
        <button onClick={decrementar} disabled={cuenta - paso < 0}>
          - {paso}
        </button>
        <button onClick={reiniciar}>Reiniciar</button>
        <button onClick={incrementar}>+ {paso}</button>
      </div>
      
      {historial.length > 0 && (
        <div className="historial">
          <h4>Historial:</h4>
          <ul>
            {historial.map((valor, i) => (
              <li key={i}>{valor}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default Contador;`,concepts:["useState","Event handlers","Conditional rendering","Arrays in state","Immutability"]},{id:"react-3",title:"Todo List with useEffect",level:"Intermediate",description:"Create a complete task manager with local persistence.",targets:["useState para arrays","useEffect para efectos secundarios","localStorage para persistencia","CRUD básico"],initialCode:`import { useState, useEffect } from 'react';

function ListaTareas() {
  const [tareas, setTareas] = useState([]);
  const [nuevaTarea, setNuevaTarea] = useState('');
  
  // Cargar tareas de localStorage al montar
  
  // Guardar en localStorage cuando cambien las tareas
  
  const agregarTarea = () => {
    // Tu código aquí
  };
  
  const toggleTarea = (id) => {
    // Tu código aquí
  };
  
  const eliminarTarea = (id) => {
    // Tu código aquí
  };
  
  return (
    <div className="lista-tareas">
      {/* Tu JSX aquí */}
    </div>
  );
}

export default ListaTareas;`,solution:`import { useState, useEffect } from 'react';

function ListaTareas() {
  const [tareas, setTareas] = useState(() => {
    const guardadas = localStorage.getItem('tareas');
    return guardadas ? JSON.parse(guardadas) : [];
  });
  const [nuevaTarea, setNuevaTarea] = useState('');
  const [filtro, setFiltro] = useState('todas');

  useEffect(() => {
    localStorage.setItem('tareas', JSON.stringify(tareas));
  }, [tareas]);

  const agregarTarea = () => {
    if (!nuevaTarea.trim()) return;
    
    const tarea = {
      id: Date.now(),
      texto: nuevaTarea,
      completada: false,
      fecha: new Date().toLocaleDateString()
    };
    
    setTareas([...tareas, tarea]);
    setNuevaTarea('');
  };

  const toggleTarea = (id) => {
    setTareas(tareas.map(t =>
      t.id === id ? { ...t, completada: !t.completada } : t
    ));
  };

  const eliminarTarea = (id) => {
    setTareas(tareas.filter(t => t.id !== id));
  };

  const tareasFiltradas = tareas.filter(t => {
    if (filtro === 'completadas') return t.completada;
    if (filtro === 'pendientes') return !t.completada;
    return true;
  });

  return (
    <div className="lista-tareas">
      <h2>Mis Tareas</h2>
      
      <div className="entrada">
        <input
          type="text"
          value={nuevaTarea}
          onChange={(e) => setNuevaTarea(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && agregarTarea()}
          placeholder="Nueva tarea..."
        />
        <button onClick={agregarTarea}>Agregar</button>
      </div>
      
      <div className="filtros">
        <button onClick={() => setFiltro('todas')} className={filtro === 'todas' ? 'activo' : ''}>
          Todas ({tareas.length})
        </button>
        <button onClick={() => setFiltro('pendientes')} className={filtro === 'pendientes' ? 'activo' : ''}>
          Pendientes ({tareas.filter(t => !t.completada).length})
        </button>
        <button onClick={() => setFiltro('completadas')} className={filtro === 'completadas' ? 'activo' : ''}>
          Completadas ({tareas.filter(t => t.completada).length})
        </button>
      </div>
      
      <ul className="tareas-lista">
        {tareasFiltradas.map(tarea => (
          <li key={tarea.id} className={tarea.completada ? 'completada' : ''}>
            <span onClick={() => toggleTarea(tarea.id)}>
              {tarea.texto}
              <small>{tarea.fecha}</small>
            </span>
            <button onClick={() => eliminarTarea(tarea.id)} className="eliminar">
              ✕
            </button>
          </li>
        ))}
      </ul>
      
      {tareasFiltradas.length === 0 && (
        <p className="vacio">No hay tareas para mostrar</p>
      )}
    </div>
  );
}

export default ListaTareas;`,concepts:["useState","useEffect","localStorage","Array methods (map, filter)","Conditional classes"]}]},redux:{title:"Redux",description:"Predictable state management for JavaScript applications",color:Mt.redux,challenges:[{id:"redux-1",title:"Store and Reducers",level:"Intermediate",description:"Set up a Redux store with a basic reducer.",targets:["createStore de Redux","Funciones reducer","Acciones con type y payload","Dispatch de acciones"],initialCode:`import { createStore } from 'redux';

// Define tu initialState

// Crea tu reducer que maneje acciones tipo:
// - 'INCREMENTAR'
// - 'DECREMENTAR'
// - 'SET_VALOR'

// Crea el store

// EJEMPLO DE USO:
// store.dispatch({ type: 'INCREMENTAR' })
// console.log(store.getState())`,solution:`import { createStore } from 'redux';

// Initial state
const estadoInicial = {
  contador: 0,
  valorPersonalizado: null
};

// Actions
const actions = {
  INCREMENTAR: 'INCREMENTAR',
  DECREMENTAR: 'DECREMENTAR',
  SET_VALOR: 'SET_VALOR',
  RESET: 'RESET'
};

// Action creators
export const incrementar = () => ({ type: actions.INCREMENTAR });
export const decrementar = () => ({ type: actions.DECREMENTAR });
export const setValor = (valor) => ({ type: actions.SET_VALOR, payload: valor });
export const reset = () => ({ type: actions.RESET, payload: 0 });

// Reducer
const contadorReducer = (state = estadoInicial, action) => {
  switch (action.type) {
    case actions.INCREMENTAR:
      return { ...state, contador: state.contador + 1 };
    case actions.DECREMENTAR:
      return { ...state, contador: state.contador - 1 };
    case actions.SET_VALOR:
      return { ...state, valorPersonalizado: action.payload };
    case actions.RESET:
      return { ...state, contador: 0, valorPersonalizado: null };
    default:
      return state;
  }
};

// Store
const store = createStore(contadorReducer);

// Suscribe para ver cambios
store.subscribe(() => console.log('Estado:', store.getState()));

// Uso
store.dispatch(incrementar());
store.dispatch(incrementar());
store.dispatch(setValor(100));
store.dispatch(reset());

export default store;`,concepts:["Store","Reducers","Actions","Dispatch","State management"]},{id:"redux-2",title:"Modern Redux Toolkit",level:"Intermediate",description:"Use Redux Toolkit to simplify the setup.",targets:["configureStore","createSlice","createAsyncThunk (opcional)","Selectors"],initialCode:`import { configureStore, createSlice } from '@reduxjs/toolkit';

// Crea un slice para gestión de tareas
// con estado inicial, reducers y acciones

// Configura el store con el reducer

// Exporta las acciones y el selector`,solution:`import { configureStore, createSlice, createSelector } from '@reduxjs/toolkit';

// Slice de tareas
const tareasSlice = createSlice({
  name: 'tareas',
  initialState: {
    items: [],
    filtro: 'todas',
    cargando: false,
    error: null
  },
  reducers: {
    agregarTarea: (state, action) => {
      state.items.push({
        id: Date.now(),
        texto: action.payload,
        completada: false,
        fecha: new Date().toISOString()
      });
    },
    toggleTarea: (state, action) => {
      const tarea = state.items.find(t => t.id === action.payload);
      if (tarea) {
        tarea.completada = !tarea.completada;
      }
    },
    eliminarTarea: (state, action) => {
      state.items = state.items.filter(t => t.id !== action.payload);
    },
    setFiltro: (state, action) => {
      state.filtro = action.payload;
    },
    clearCompletadas: (state) => {
      state.items = state.items.filter(t => !t.completada);
    }
  }
});

// Exportar acciones
export const {
  agregarTarea,
  toggleTarea,
  eliminarTarea,
  setFiltro,
  clearCompletadas
} = tareasSlice.actions;

// Selectors
export const selectTareas = state => state.tareas.items;
export const selectFiltro = state => state.tareas.filtro;

export const selectTareasFiltradas = state => {
  const tareas = state.tareas.items;
  const filtro = state.tareas.filtro;
  
  switch (filtro) {
    case 'completadas':
      return tareas.filter(t => t.completada);
    case 'pendientes':
      return tareas.filter(t => !t.completada);
    default:
      return tareas;
  }
};

export const selectEstadisticas = createSelector(
  [selectTareas],
  (tareas) => ({
    total: tareas.length,
    completadas: tareas.filter(t => t.completada).length,
    pendientes: tareas.filter(t => !t.completada).length
  })
);

// Store
const store = configureStore({
  reducer: {
    tareas: tareasSlice.reducer
  }
});

export default store;`,concepts:["Redux Toolkit","createSlice","configureStore","Selectors","Immer (mutaciones seguras)"]}]},nodejs:{title:"Node.js",description:"JavaScript runtime environment on the server",color:Mt.nodejs,challenges:[{id:"nodejs-1",title:"Basic HTTP Server",level:"Beginner",description:"Create a simple HTTP server with Node.js using the http module.",targets:["Módulo http de Node.js","Crear servidor con createServer","Escuchar en puerto específico","Responder a peticiones GET"],initialCode:`const http = require('http');

// Crea un servidor que:
// 1. Responda "Hola, Mundo!" en la ruta raíz
// 2. Responda "Página de Contacto" en /contacto
// 3. Responda 404 en rutas no encontradas

const servidor = http.createServer((req, res) => {
  // Tu código aquí
});

const puerto = 3000;
servidor.listen(puerto, () => {
  console.log(\`Servidor escuchando en puerto \${puerto}\`);
});`,solution:`const http = require('http');

const servidor = http.createServer((req, res) => {
  // Configurar headers
  res.setHeader('Content-Type', 'text/html; charset=utf-8');
  
  // Rutas
  if (req.url === '/' && req.method === 'GET') {
    res.statusCode = 200;
    res.end('<h1>¡Hola, Mundo!</h1><p>Bienvenido a mi servidor Node.js</p>');
  } 
  else if (req.url === '/contacto' && req.method === 'GET') {
    res.statusCode = 200;
    res.end('<h1>Página de Contacto</h1><p>Email: contacto@ejemplo.com</p>');
  }
  else if (req.url === '/api/datos' && req.method === 'GET') {
    res.setHeader('Content-Type', 'application/json');
    res.statusCode = 200;
    res.end(JSON.stringify({ 
      mensaje: 'Datos del servidor',
      timestamp: new Date().toISOString()
    }));
  }
  else {
    res.statusCode = 404;
    res.end('<h1>404 - Página no encontrada</h1>');
  }
});

const puerto = 3000;
servidor.listen(puerto, () => {
  console.log(\`Servidor escuchando en http://localhost:\${puerto}\`);
});`,concepts:["Módulo http","Servidor HTTP","Rutas","Status codes","Headers"]},{id:"nodejs-2",title:"Express.js - Routes and Middleware",level:"Intermediate",description:"Create a REST API with Express.js including routes and middleware.",targets:["Framework Express.js","Definir rutas GET, POST, PUT, DELETE","Middleware personalizado","Manejo de errores"],initialCode:`const express = require('express');
const app = express();

// Middleware para parsear JSON
app.use(express.json());

// Middleware personalizado para logging
// Tu código aquí

// Array de usuarios (simulando base de datos)
let usuarios = [
  { id: 1, nombre: 'Juan', email: 'juan@ejemplo.com' },
  { id: 2, nombre: 'María', email: 'maria@ejemplo.com' }
];

// GET - Obtener todos los usuarios
app.get('/api/usuarios', (req, res) => {
  // Tu código aquí
});

// GET - Obtener usuario por ID
app.get('/api/usuarios/:id', (req, res) => {
  // Tu código aquí
});

// POST - Crear nuevo usuario
app.post('/api/usuarios', (req, res) => {
  // Tu código aquí
});

// PUT - Actualizar usuario
app.put('/api/usuarios/:id', (req, res) => {
  // Tu código aquí
});

// DELETE - Eliminar usuario
app.delete('/api/usuarios/:id', (req, res) => {
  // Tu código aquí
});

const puerto = 3000;
app.listen(puerto, () => {
  console.log(\`API escuchando en puerto \${puerto}\`);
});`,solution:`const express = require('express');
const app = express();

// Middleware para parsear JSON
app.use(express.json());

// Middleware personalizado para logging
app.use((req, res, next) => {
  console.log(\`[\${new Date().toISOString()}] \${req.method} \${req.url}\`);
  next();
});

// Array de usuarios (simulando base de datos)
let usuarios = [
  { id: 1, nombre: 'Juan', email: 'juan@ejemplo.com' },
  { id: 2, nombre: 'María', email: 'maria@ejemplo.com' }
];

let proximoId = 3;

// GET - Obtener todos los usuarios
app.get('/api/usuarios', (req, res) => {
  res.json({
    success: true,
    data: usuarios,
    total: usuarios.length
  });
});

// GET - Obtener usuario por ID
app.get('/api/usuarios/:id', (req, res) => {
  const usuario = usuarios.find(u => u.id === parseInt(req.params.id));
  
  if (!usuario) {
    return res.status(404).json({
      success: false,
      mensaje: 'Usuario no encontrado'
    });
  }
  
  res.json({
    success: true,
    data: usuario
  });
});

// POST - Crear nuevo usuario
app.post('/api/usuarios', (req, res) => {
  const { nombre, email } = req.body;
  
  if (!nombre || !email) {
    return res.status(400).json({
      success: false,
      mensaje: 'Nombre y email son requeridos'
    });
  }
  
  const nuevoUsuario = {
    id: proximoId++,
    nombre,
    email
  };
  
  usuarios.push(nuevoUsuario);
  
  res.status(201).json({
    success: true,
    mensaje: 'Usuario creado',
    data: nuevoUsuario
  });
});

// PUT - Actualizar usuario
app.put('/api/usuarios/:id', (req, res) => {
  const usuario = usuarios.find(u => u.id === parseInt(req.params.id));
  
  if (!usuario) {
    return res.status(404).json({
      success: false,
      mensaje: 'Usuario no encontrado'
    });
  }
  
  if (req.body.nombre) usuario.nombre = req.body.nombre;
  if (req.body.email) usuario.email = req.body.email;
  
  res.json({
    success: true,
    mensaje: 'Usuario actualizado',
    data: usuario
  });
});

// DELETE - Eliminar usuario
app.delete('/api/usuarios/:id', (req, res) => {
  const indice = usuarios.findIndex(u => u.id === parseInt(req.params.id));
  
  if (indice === -1) {
    return res.status(404).json({
      success: false,
      mensaje: 'Usuario no encontrado'
    });
  }
  
  const usuarioEliminado = usuarios.splice(indice, 1);
  
  res.json({
    success: true,
    mensaje: 'Usuario eliminado',
    data: usuarioEliminado[0]
  });
});

// Manejo de errores
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({
    success: false,
    mensaje: 'Error interno del servidor'
  });
});

const puerto = 3000;
app.listen(puerto, () => {
  console.log(\`API escuchando en http://localhost:\${puerto}\`);
});`,concepts:["Express.js","Rutas REST","Middleware","Status codes","Validación","CRUD"]},{id:"nodejs-3",title:"Authentication with JWT",level:"Advanced",description:"Implement authentication with JSON Web Tokens (JWT).",targets:["Generar tokens JWT","Verificar tokens","Middleware de autenticación","Contraseñas hasheadas"],initialCode:`const express = require('express');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const app = express();
app.use(express.json());

const SECRET_KEY = 'tu_clave_secreta_muy_segura';

// Usuarios simulados
let usuarios = [
  { id: 1, email: 'usuario@ejemplo.com', password: 'hasheada' }
];

// Middleware para verificar JWT
const verificarToken = (req, res, next) => {
  // Tu código aquí
};

// POST - Login
app.post('/login', (req, res) => {
  // Tu código aquí
});

// GET - Datos protegidos
app.get('/perfil', verificarToken, (req, res) => {
  // Tu código aquí
});

app.listen(3000, () => console.log('Servidor en puerto 3000'));`,solution:`const express = require('express');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const app = express();
app.use(express.json());

const SECRET_KEY = 'tu_clave_secreta_muy_segura_cambiar_en_produccion';

// Usuarios simulados (en producción usar base de datos)
let usuarios = [
  { 
    id: 1, 
    email: 'usuario@ejemplo.com', 
    password: '$2b$10$...' // Contraseña hasheada
  }
];

// Middleware para verificar JWT
const verificarToken = (req, res, next) => {
  const token = req.headers['authorization']?.split(' ')[1];
  
  if (!token) {
    return res.status(401).json({
      success: false,
      mensaje: 'Token no proporcionado'
    });
  }
  
  try {
    const decoded = jwt.verify(token, SECRET_KEY);
    req.usuario = decoded;
    next();
  } catch (error) {
    return res.status(403).json({
      success: false,
      mensaje: 'Token inválido o expirado'
    });
  }
};

// POST - Login
app.post('/login', async (req, res) => {
  const { email, password } = req.body;
  
  if (!email || !password) {
    return res.status(400).json({
      success: false,
      mensaje: 'Email y contraseña requeridos'
    });
  }
  
  try {
    // Buscar usuario
    const usuario = usuarios.find(u => u.email === email);
    
    if (!usuario) {
      return res.status(401).json({
        success: false,
        mensaje: 'Credenciales inválidas'
      });
    }
    
    // Verificar contraseña
    const esValida = await bcrypt.compare(password, usuario.password);
    
    if (!esValida) {
      return res.status(401).json({
        success: false,
        mensaje: 'Credenciales inválidas'
      });
    }
    
    // Generar token
    const token = jwt.sign(
      { id: usuario.id, email: usuario.email },
      SECRET_KEY,
      { expiresIn: '24h' }
    );
    
    res.json({
      success: true,
      mensaje: 'Login exitoso',
      token,
      usuario: { id: usuario.id, email: usuario.email }
    });
    
  } catch (error) {
    res.status(500).json({
      success: false,
      mensaje: 'Error en el servidor'
    });
  }
});

// GET - Datos protegidos
app.get('/perfil', verificarToken, (req, res) => {
  res.json({
    success: true,
    mensaje: 'Acceso permitido',
    usuario: req.usuario
  });
});

// POST - Registro
app.post('/registro', async (req, res) => {
  const { email, password } = req.body;
  
  if (!email || !password) {
    return res.status(400).json({
      success: false,
      mensaje: 'Email y contraseña requeridos'
    });
  }
  
  try {
    // Verificar si usuario existe
    if (usuarios.find(u => u.email === email)) {
      return res.status(400).json({
        success: false,
        mensaje: 'El usuario ya existe'
      });
    }
    
    // Hashear contraseña
    const passwordHasheada = await bcrypt.hash(password, 10);
    
    // Crear usuario
    const nuevoUsuario = {
      id: usuarios.length + 1,
      email,
      password: passwordHasheada
    };
    
    usuarios.push(nuevoUsuario);
    
    res.status(201).json({
      success: true,
      mensaje: 'Usuario registrado exitosamente',
      usuario: { id: nuevoUsuario.id, email: nuevoUsuario.email }
    });
    
  } catch (error) {
    res.status(500).json({
      success: false,
      mensaje: 'Error en el servidor'
    });
  }
});

app.listen(3000, () => {
  console.log('Servidor de autenticación en puerto 3000');
});`,concepts:["JWT","Autenticación","Bcrypt","Middleware","Seguridad","Tokens"]}]},mongodb:{title:"MongoDB",description:"NoSQL document-oriented database",color:{principal:"#13AA52",secundario:"#47A248",fondo:"#E8F5E9"},challenges:[{id:"mongodb-1",title:"Connection and Basic Operations",level:"Beginner",description:"Connect to MongoDB and perform basic CRUD operations.",targets:["Conectar a MongoDB con mongoose","Crear esquemas y modelos","Insertar documentos","Consultar documentos"],initialCode:`const mongoose = require('mongoose');

// Conectar a MongoDB
// mongoose.connect('mongodb://localhost:27017/mibasedatos');

// Definir esquema de usuario
const usuarioSchema = new mongoose.Schema({
  nombre: String,
  email: String,
  edad: Number,
  createdAt: { type: Date, default: Date.now }
});

// Crear modelo
const Usuario = mongoose.model('Usuario', usuarioSchema);

// Crear un nuevo usuario
// Tu código aquí

// Buscar todos los usuarios
// Tu código aquí

// Buscar usuario por email
// Tu código aquí`,solution:`const mongoose = require('mongoose');

// Conectar a MongoDB
mongoose.connect('mongodb://localhost:27017/mibasedatos', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

// Definir esquema de usuario
const usuarioSchema = new mongoose.Schema({
  nombre: {
    type: String,
    required: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true
  },
  edad: {
    type: Number,
    min: 0,
    max: 150
  },
  activo: {
    type: Boolean,
    default: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

// Crear modelo
const Usuario = mongoose.model('Usuario', usuarioSchema);

// Crear un nuevo usuario
async function crearUsuario() {
  try {
    const nuevoUsuario = new Usuario({
      nombre: 'Juan Pérez',
      email: 'juan@ejemplo.com',
      edad: 28
    });
    
    await nuevoUsuario.save();
    console.log('Usuario creado:', nuevoUsuario);
  } catch (error) {
    console.error('Error:', error.message);
  }
}

// Buscar todos los usuarios
async function obtenerTodos() {
  try {
    const usuarios = await Usuario.find();
    console.log('Usuarios:', usuarios);
  } catch (error) {
    console.error('Error:', error.message);
  }
}

// Buscar usuario por email
async function buscarPorEmail(email) {
  try {
    const usuario = await Usuario.findOne({ email });
    console.log('Usuario encontrado:', usuario);
  } catch (error) {
    console.error('Error:', error.message);
  }
}

// Actualizar usuario
async function actualizarUsuario(id, datos) {
  try {
    const usuarioActualizado = await Usuario.findByIdAndUpdate(
      id,
      datos,
      { new: true }
    );
    console.log('Usuario actualizado:', usuarioActualizado);
  } catch (error) {
    console.error('Error:', error.message);
  }
}

// Eliminar usuario
async function eliminarUsuario(id) {
  try {
    const usuarioEliminado = await Usuario.findByIdAndDelete(id);
    console.log('Usuario eliminado:', usuarioEliminado);
  } catch (error) {
    console.error('Error:', error.message);
  }
}

// Ejecutar funciones
crearUsuario();
obtenerTodos();
buscarPorEmail('juan@ejemplo.com');`,concepts:["Mongoose","Esquemas","Modelos","CRUD","Validación","Async/Await"]},{id:"mongodb-2",title:"Relationships and Population",level:"Intermediate",description:"Work with references between collections and use populate.",targets:["Crear referencias entre documentos","Usar populate para obtener datos relacionados","Validar referencias","Consultas con múltiples colecciones"],initialCode:`const mongoose = require('mongoose');

// Esquema de Autor
const autorSchema = new mongoose.Schema({
  nombre: String,
  email: String
});

// Esquema de Libro con referencia a Autor
const libroSchema = new mongoose.Schema({
  title: String,
  autor: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Autor'
  },
  año: Number,
  paginas: Number
});

const Autor = mongoose.model('Autor', autorSchema);
const Libro = mongoose.model('Libro', libroSchema);

// Crear un autor
// Tu código aquí

// Crear un libro con referencia al autor
// Tu código aquí

// Obtener libro con datos del autor (populate)
// Tu código aquí`,solution:`const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/biblioteca');

// Esquema de Autor
const autorSchema = new mongoose.Schema({
  nombre: {
    type: String,
    required: true
  },
  email: {
    type: String,
    unique: true
  },
  pais: String,
  createdAt: {
    type: Date,
    default: Date.now
  }
});

// Esquema de Libro con referencia a Autor
const libroSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  autor: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Autor',
    required: true
  },
  año: Number,
  paginas: Number,
  genero: String,
  disponible: {
    type: Boolean,
    default: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

const Autor = mongoose.model('Autor', autorSchema);
const Libro = mongoose.model('Libro', libroSchema);

// Crear un autor
async function crearAutor() {
  try {
    const autor = new Autor({
      nombre: 'Gabriel García Márquez',
      email: 'gabriel@ejemplo.com',
      pais: 'Colombia'
    });
    
    await autor.save();
    console.log('Autor creado:', autor);
    return autor._id;
  } catch (error) {
    console.error('Error:', error.message);
  }
}

// Crear un libro con referencia al autor
async function crearLibro(autorId) {
  try {
    const libro = new Libro({
      title: 'Cien años de soledad',
      autor: autorId,
      año: 1967,
      paginas: 417,
      genero: 'Realismo mágico'
    });
    
    await libro.save();
    console.log('Libro creado:', libro);
  } catch (error) {
    console.error('Error:', error.message);
  }
}

// Obtener libro con datos del autor (populate)
async function obtenerLibroConAutor() {
  try {
    const libro = await Libro.findOne({ title: 'Cien años de soledad' })
      .populate('autor');
    
    console.log('Libro con autor:', libro);
  } catch (error) {
    console.error('Error:', error.message);
  }
}

// Obtener todos los libros de un autor
async function obtenerLibrosPorAutor(nombreAutor) {
  try {
    const autor = await Autor.findOne({ nombre: nombreAutor });
    
    if (!autor) {
      console.log('Autor no encontrado');
      return;
    }
    
    const libros = await Libro.find({ autor: autor._id })
      .populate('autor');
    
    console.log(\`Libros de \${nombreAutor}:\`, libros);
  } catch (error) {
    console.error('Error:', error.message);
  }
}

// Actualizar disponibilidad de libro
async function actualizarDisponibilidad(libroId, disponible) {
  try {
    const libro = await Libro.findByIdAndUpdate(
      libroId,
      { disponible },
      { new: true }
    ).populate('autor');
    
    console.log('Libro actualizado:', libro);
  } catch (error) {
    console.error('Error:', error.message);
  }
}

// Ejecutar funciones
(async () => {
  const autorId = await crearAutor();
  await crearLibro(autorId);
  await obtenerLibroConAutor();
  await obtenerLibrosPorAutor('Gabriel García Márquez');
})();`,concepts:["Referencias","Populate","Relaciones","ObjectId","Consultas relacionales"]},{id:"mongodb-3",title:"Aggregations and Analysis",level:"Advanced",description:"Use the aggregation pipeline for complex analysis.",targets:["Pipeline de agregación","Stages: $match, $group, $sort, $limit","Cálculos agregados","Análisis de datos"],initialCode:`const mongoose = require('mongoose');

// Esquema de Venta
const ventaSchema = new mongoose.Schema({
  producto: String,
  cantidad: Number,
  precio: Number,
  fecha: Date,
  vendedor: String
});

const Venta = mongoose.model('Venta', ventaSchema);

// Obtener total de ventas por producto
// Tu código aquí

// Obtener vendedor con más ventas
// Tu código aquí

// Obtener ventas por mes
// Tu código aquí`,solution:`const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/ventas');

// Esquema de Venta
const ventaSchema = new mongoose.Schema({
  producto: String,
  cantidad: Number,
  precio: Number,
  total: {
    type: Number,
    default: function() { return this.cantidad * this.precio; }
  },
  fecha: {
    type: Date,
    default: Date.now
  },
  vendedor: String,
  estado: {
    type: String,
    enum: ['completada', 'pendiente', 'cancelada'],
    default: 'completada'
  }
});

const Venta = mongoose.model('Venta', ventaSchema);

// Obtener total de ventas por producto
async function ventasPorProducto() {
  try {
    const resultado = await Venta.aggregate([
      {
        $match: { estado: 'completada' }
      },
      {
        $group: {
          _id: '$producto',
          totalVentas: { $sum: '$total' },
          cantidadVendida: { $sum: '$cantidad' },
          promedioVenta: { $avg: '$total' }
        }
      },
      {
        $sort: { totalVentas: -1 }
      }
    ]);
    
    console.log('Ventas por producto:', resultado);
    return resultado;
  } catch (error) {
    console.error('Error:', error.message);
  }
}

// Obtener vendedor con más ventas
async function vendedorTopVentas() {
  try {
    const resultado = await Venta.aggregate([
      {
        $match: { estado: 'completada' }
      },
      {
        $group: {
          _id: '$vendedor',
          totalVentas: { $sum: '$total' },
          cantidadTransacciones: { $sum: 1 },
          promedioTransaccion: { $avg: '$total' }
        }
      },
      {
        $sort: { totalVentas: -1 }
      },
      {
        $limit: 5
      }
    ]);
    
    console.log('Top 5 vendedores:', resultado);
    return resultado;
  } catch (error) {
    console.error('Error:', error.message);
  }
}

// Obtener ventas por mes
async function ventasPorMes() {
  try {
    const resultado = await Venta.aggregate([
      {
        $match: { estado: 'completada' }
      },
      {
        $group: {
          _id: {
            año: { $year: '$fecha' },
            mes: { $month: '$fecha' }
          },
          totalVentas: { $sum: '$total' },
          cantidadVentas: { $sum: 1 }
        }
      },
      {
        $sort: { '_id.año': 1, '_id.mes': 1 }
      }
    ]);
    
    console.log('Ventas por mes:', resultado);
    return resultado;
  } catch (error) {
    console.error('Error:', error.message);
  }
}

// Estadísticas generales
async function estadisticasGenerales() {
  try {
    const resultado = await Venta.aggregate([
      {
        $match: { estado: 'completada' }
      },
      {
        $facet: {
          resumen: [
            {
              $group: {
                _id: null,
                totalVentas: { $sum: '$total' },
                cantidadTransacciones: { $sum: 1 },
                promedioTransaccion: { $avg: '$total' },
                ventaMaxima: { $max: '$total' },
                ventaMinima: { $min: '$total' }
              }
            }
          ],
          productosMasVendidos: [
            {
              $group: {
                _id: '$producto',
                cantidad: { $sum: '$cantidad' }
              }
            },
            { $sort: { cantidad: -1 } },
            { $limit: 3 }
          ]
        }
      }
    ]);
    
    console.log('Estadísticas generales:', resultado);
    return resultado;
  } catch (error) {
    console.error('Error:', error.message);
  }
}

// Ejecutar funciones
(async () => {
  await ventasPorProducto();
  await vendedorTopVentas();
  await ventasPorMes();
  await estadisticasGenerales();
})();`,concepts:["Agregación","Pipeline","$group","$match","$sort","Análisis de datos"]}]},mysql:{title:"MySQL",description:"Relational SQL database",color:{principal:"#00758F",secundario:"#0066CC",fondo:"#E3F2FD"},challenges:[{id:"mysql-1",title:"Connection and Basic Queries",level:"Beginner",description:"Connect to MySQL and perform SELECT, INSERT, UPDATE, and DELETE queries.",targets:["Conectar a MySQL con Node.js","Ejecutar consultas SELECT","Insertar registros","Actualizar y eliminar datos"],initialCode:`const mysql = require('mysql2/promise');

// Crear conexión
const conexion = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'tu_contraseña',
  database: 'mibasedatos'
});

// Crear tabla de usuarios
// CREATE TABLE usuarios (
//   id INT AUTO_INCREMENT PRIMARY KEY,
//   nombre VARCHAR(100),
//   email VARCHAR(100) UNIQUE,
//   edad INT
// );

// Insertar usuario
// Tu código aquí

// Obtener todos los usuarios
// Tu código aquí

// Actualizar usuario
// Tu código aquí

// Eliminar usuario
// Tu código aquí`,solution:`const mysql = require('mysql2/promise');

// Crear pool de conexiones
const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: 'tu_contraseña',
  database: 'mibasedatos',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

// Crear tabla de usuarios
async function crearTabla() {
  const conexion = await pool.getConnection();
  try {
    await conexion.execute(\`
      CREATE TABLE IF NOT EXISTS usuarios (
        id INT AUTO_INCREMENT PRIMARY KEY,
        nombre VARCHAR(100) NOT NULL,
        email VARCHAR(100) UNIQUE NOT NULL,
        edad INT,
        activo BOOLEAN DEFAULT true,
        createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )
    \`);
    console.log('Tabla creada exitosamente');
  } catch (error) {
    console.error('Error:', error.message);
  } finally {
    conexion.release();
  }
}

// Insertar usuario
async function insertarUsuario(nombre, email, edad) {
  const conexion = await pool.getConnection();
  try {
    const [resultado] = await conexion.execute(
      'INSERT INTO usuarios (nombre, email, edad) VALUES (?, ?, ?)',
      [nombre, email, edad]
    );
    console.log('Usuario insertado:', resultado);
    return resultado.insertId;
  } catch (error) {
    console.error('Error:', error.message);
  } finally {
    conexion.release();
  }
}

// Obtener todos los usuarios
async function obtenerTodos() {
  const conexion = await pool.getConnection();
  try {
    const [usuarios] = await conexion.execute(
      'SELECT * FROM usuarios WHERE activo = true'
    );
    console.log('Usuarios:', usuarios);
    return usuarios;
  } catch (error) {
    console.error('Error:', error.message);
  } finally {
    conexion.release();
  }
}

// Obtener usuario por ID
async function obtenerPorId(id) {
  const conexion = await pool.getConnection();
  try {
    const [usuarios] = await conexion.execute(
      'SELECT * FROM usuarios WHERE id = ?',
      [id]
    );
    console.log('Usuario encontrado:', usuarios[0]);
    return usuarios[0];
  } catch (error) {
    console.error('Error:', error.message);
  } finally {
    conexion.release();
  }
}

// Actualizar usuario
async function actualizarUsuario(id, nombre, email, edad) {
  const conexion = await pool.getConnection();
  try {
    const [resultado] = await conexion.execute(
      'UPDATE usuarios SET nombre = ?, email = ?, edad = ? WHERE id = ?',
      [nombre, email, edad, id]
    );
    console.log('Usuario actualizado:', resultado);
    return resultado;
  } catch (error) {
    console.error('Error:', error.message);
  } finally {
    conexion.release();
  }
}

// Eliminar usuario
async function eliminarUsuario(id) {
  const conexion = await pool.getConnection();
  try {
    const [resultado] = await conexion.execute(
      'DELETE FROM usuarios WHERE id = ?',
      [id]
    );
    console.log('Usuario eliminado:', resultado);
    return resultado;
  } catch (error) {
    console.error('Error:', error.message);
  } finally {
    conexion.release();
  }
}

// Ejecutar funciones
(async () => {
  await crearTabla();
  await insertarUsuario('Juan', 'juan@ejemplo.com', 28);
  await insertarUsuario('María', 'maria@ejemplo.com', 25);
  await obtenerTodos();
  await obtenerPorId(1);
  await actualizarUsuario(1, 'Juan Pérez', 'juan.perez@ejemplo.com', 29);
  await obtenerTodos();
})();`,concepts:["Conexión MySQL","Pool de conexiones","Prepared statements","CRUD","Async/Await"]},{id:"mysql-2",title:"Relationships and JOINs",level:"Intermediate",description:"Work with relationships between tables using JOINs.",targets:["Crear tablas relacionadas","Foreign keys","INNER JOIN, LEFT JOIN","Consultas con múltiples tablas"],initialCode:`const mysql = require('mysql2/promise');

// Tablas:
// usuarios (id, nombre, email)
// pedidos (id, usuario_id, total, fecha)

// Crear tablas
// Tu código aquí

// Insertar datos
// Tu código aquí

// Obtener usuario con sus pedidos (JOIN)
// Tu código aquí

// Obtener pedidos con datos del usuario
// Tu código aquí`,solution:`const mysql = require('mysql2/promise');

const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: 'tu_contraseña',
  database: 'tienda'
});

// Crear tablas
async function crearTablas() {
  const conexion = await pool.getConnection();
  try {
    // Tabla usuarios
    await conexion.execute(\`
      CREATE TABLE IF NOT EXISTS usuarios (
        id INT AUTO_INCREMENT PRIMARY KEY,
        nombre VARCHAR(100) NOT NULL,
        email VARCHAR(100) UNIQUE NOT NULL,
        createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )
    \`);
    
    // Tabla pedidos
    await conexion.execute(\`
      CREATE TABLE IF NOT EXISTS pedidos (
        id INT AUTO_INCREMENT PRIMARY KEY,
        usuario_id INT NOT NULL,
        total DECIMAL(10, 2),
        estado VARCHAR(50) DEFAULT 'pendiente',
        fecha TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        FOREIGN KEY (usuario_id) REFERENCES usuarios(id) ON DELETE CASCADE
      )
    \`);
    
    console.log('Tablas creadas exitosamente');
  } catch (error) {
    console.error('Error:', error.message);
  } finally {
    conexion.release();
  }
}

// Insertar datos
async function insertarDatos() {
  const conexion = await pool.getConnection();
  try {
    // Insertar usuarios
    await conexion.execute(
      'INSERT INTO usuarios (nombre, email) VALUES (?, ?)',
      ['Juan', 'juan@ejemplo.com']
    );
    
    await conexion.execute(
      'INSERT INTO usuarios (nombre, email) VALUES (?, ?)',
      ['María', 'maria@ejemplo.com']
    );
    
    // Insertar pedidos
    await conexion.execute(
      'INSERT INTO pedidos (usuario_id, total, estado) VALUES (?, ?, ?)',
      [1, 150.50, 'completado']
    );
    
    await conexion.execute(
      'INSERT INTO pedidos (usuario_id, total, estado) VALUES (?, ?, ?)',
      [1, 200.00, 'pendiente']
    );
    
    await conexion.execute(
      'INSERT INTO pedidos (usuario_id, total, estado) VALUES (?, ?, ?)',
      [2, 75.25, 'completado']
    );
    
    console.log('Datos insertados exitosamente');
  } catch (error) {
    console.error('Error:', error.message);
  } finally {
    conexion.release();
  }
}

// Obtener usuario con sus pedidos (INNER JOIN)
async function obtenerUsuarioConPedidos(usuarioId) {
  const conexion = await pool.getConnection();
  try {
    const [resultado] = await conexion.execute(\`
      SELECT 
        u.id,
        u.nombre,
        u.email,
        p.id as pedido_id,
        p.total,
        p.estado,
        p.fecha
      FROM usuarios u
      INNER JOIN pedidos p ON u.id = p.usuario_id
      WHERE u.id = ?
    \`, [usuarioId]);
    
    console.log('Usuario con pedidos:', resultado);
    return resultado;
  } catch (error) {
    console.error('Error:', error.message);
  } finally {
    conexion.release();
  }
}

// Obtener todos los usuarios con sus pedidos (LEFT JOIN)
async function obtenerTodosConPedidos() {
  const conexion = await pool.getConnection();
  try {
    const [resultado] = await conexion.execute(\`
      SELECT 
        u.id,
        u.nombre,
        u.email,
        COUNT(p.id) as total_pedidos,
        SUM(p.total) as total_gastado
      FROM usuarios u
      LEFT JOIN pedidos p ON u.id = p.usuario_id
      GROUP BY u.id, u.nombre, u.email
    \`);
    
    console.log('Usuarios con resumen de pedidos:', resultado);
    return resultado;
  } catch (error) {
    console.error('Error:', error.message);
  } finally {
    conexion.release();
  }
}

// Obtener pedidos con datos del usuario
async function obtenerPedidosConUsuario() {
  const conexion = await pool.getConnection();
  try {
    const [resultado] = await conexion.execute(\`
      SELECT 
        p.id,
        p.total,
        p.estado,
        p.fecha,
        u.nombre as usuario_nombre,
        u.email as usuario_email
      FROM pedidos p
      INNER JOIN usuarios u ON p.usuario_id = u.id
      ORDER BY p.fecha DESC
    \`);
    
    console.log('Pedidos con usuario:', resultado);
    return resultado;
  } catch (error) {
    console.error('Error:', error.message);
  } finally {
    conexion.release();
  }
}

// Obtener estadísticas
async function obtenerEstadisticas() {
  const conexion = await pool.getConnection();
  try {
    const [resultado] = await conexion.execute(\`
      SELECT 
        COUNT(DISTINCT u.id) as total_usuarios,
        COUNT(p.id) as total_pedidos,
        SUM(p.total) as total_ventas,
        AVG(p.total) as promedio_pedido,
        MAX(p.total) as pedido_maximo
      FROM usuarios u
      LEFT JOIN pedidos p ON u.id = p.usuario_id
    \`);
    
    console.log('Estadísticas:', resultado[0]);
    return resultado[0];
  } catch (error) {
    console.error('Error:', error.message);
  } finally {
    conexion.release();
  }
}

// Ejecutar funciones
(async () => {
  await crearTablas();
  await insertarDatos();
  await obtenerUsuarioConPedidos(1);
  await obtenerTodosConPedidos();
  await obtenerPedidosConUsuario();
  await obtenerEstadisticas();
})();`,concepts:["Foreign keys","INNER JOIN","LEFT JOIN","GROUP BY","Relaciones","Agregaciones"]},{id:"mysql-3",title:"Transactions and Procedures",level:"Advanced",description:"Use transactions and stored procedures in MySQL.",targets:["Transacciones ACID","BEGIN, COMMIT, ROLLBACK","Procedimientos almacenados","Manejo de errores"],initialCode:`const mysql = require('mysql2/promise');

// Transferencia de dinero entre cuentas
// Debe ser atómica (todo o nada)

async function transferirDinero(cuentaOrigen, cuentaDestino, monto) {
  const conexion = await pool.getConnection();
  
  try {
    // Iniciar transacción
    await conexion.beginTransaction();
    
    // Verificar saldo de cuenta origen
    const [origen] = await conexion.execute(
      'SELECT saldo FROM cuentas WHERE numero_cuenta = ? FOR UPDATE',
      [cuentaOrigen]
    );
    
    if (!origen[0] || origen[0].saldo < monto) {
      throw new Error('Saldo insuficiente');
    }
    
    // Restar de cuenta origen
    await conexion.execute(
      'UPDATE cuentas SET saldo = saldo - ? WHERE numero_cuenta = ?',
      [monto, cuentaOrigen]
    );
    
    // Sumar a cuenta destino
    await conexion.execute(
      'UPDATE cuentas SET saldo = saldo + ? WHERE numero_cuenta = ?',
      [monto, cuentaDestino]
    );
    
    // Confirmar transacción
    await conexion.commit();
    
    console.log(\`Transferencia exitosa: \${monto} de \${cuentaOrigen} a \${cuentaDestino}\`);
    return true;
    
  } catch (error) {
    // Revertir transacción
    await conexion.rollback();
    console.error('Error en transferencia:', error.message);
    return false;
  } finally {
    conexion.release();
  }
}

// Procedimiento almacenado
async function crearProcedimiento() {
  const conexion = await pool.getConnection();
  try {
    await conexion.execute(\`
      CREATE PROCEDURE IF NOT EXISTS obtener_saldo(
        IN p_numero_cuenta VARCHAR(20),
        OUT p_saldo DECIMAL(15, 2)
      )
      BEGIN
        SELECT saldo INTO p_saldo
        FROM cuentas
        WHERE numero_cuenta = p_numero_cuenta;
      END
    \`);
    
    console.log('Procedimiento creado');
  } catch (error) {
    console.error('Error:', error.message);
  } finally {
    conexion.release();
  }
}

// Llamar procedimiento almacenado
async function llamarProcedimiento(numeroCuenta) {
  const conexion = await pool.getConnection();
  try {
    const [resultado] = await conexion.execute(
      'CALL obtener_saldo(?, @saldo)',
      [numeroCuenta]
    );
    
    const [saldo] = await conexion.execute('SELECT @saldo as saldo');
    console.log('Saldo:', saldo[0].saldo);
    return saldo[0].saldo;
  } catch (error) {
    console.error('Error:', error.message);
  } finally {
    conexion.release();
  }
}

// Insertar datos de prueba
async function insertarDatos() {
  const conexion = await pool.getConnection();
  try {
    await conexion.execute(
      'INSERT INTO cuentas (numero_cuenta, titular, saldo) VALUES (?, ?, ?)',
      ['001', 'Juan Pérez', 1000.00]
    );
    
    await conexion.execute(
      'INSERT INTO cuentas (numero_cuenta, titular, saldo) VALUES (?, ?, ?)',
      ['002', 'María García', 500.00]
    );
    
    console.log('Datos insertados');
  } catch (error) {
    console.error('Error:', error.message);
  } finally {
    conexion.release();
  }
}

// Ejecutar funciones
(async () => {
  await crearTabla();
  await insertarDatos();
  await transferirDinero('001', '002', 250.00);
  await transferirDinero('001', '002', 2000.00); // Fallará por saldo insuficiente
  await crearProcedimiento();
  await llamarProcedimiento('001');
})();`,concepts:["Transacciones","ACID","BEGIN/COMMIT/ROLLBACK","Procedimientos","Integridad de datos"]}]}};function ab(){const i=os(),[s,d]=A.useState("html"),[u,f]=A.useState(null),[m,y]=A.useState(!1),{language:N}=Fe(q=>q.menuComponentReducer),b=N==="es"?eb:tb,g=Object.keys(b),j=q=>{d(q),f(null),y(!1)},T=q=>{f(q),y(!1)},U=()=>{f(null)};return A.useEffect(()=>{i(op("challenges"))},[]),A.useEffect(()=>{const q=Q=>{Q.key==="Escape"&&y(!1)};return window.addEventListener("keydown",q),()=>window.removeEventListener("keydown",q)},[]),p.jsxs("div",{className:"app-container",children:[p.jsx("button",{className:"burger-btn",onClick:()=>y(q=>!q),"aria-label":m?"Cerrar menú":"Abrir menú","aria-expanded":m,children:m?"✕":"☰"}),m&&p.jsx("div",{className:"navbar-overlay",onClick:()=>y(!1),"aria-hidden":"true"}),p.jsx(Z0,{className:m?"open":"",devLanguages:g,devLanguageSelected:s,onHandleSelectDevLang:j}),p.jsx("main",{className:"main-content",children:u?p.jsx(K0,{desafio:u,onVolver:U}):p.jsx(P0,{challenges:b[s],devLanguageSelected:s,onHandleSelectChallenge:T})})]})}function nb(){return p.jsx(cv,{children:p.jsx(Vy,{children:p.jsxs(Vl,{path:"/",element:p.jsx(Fv,{}),children:[p.jsx(Vl,{path:"/",element:p.jsx(u0,{})}),p.jsx(Vl,{path:"/challenges",element:p.jsx(ab,{})}),p.jsx(Vl,{path:"*",element:p.jsx(c0,{})})]})})})}function rt(i){return`Minified Redux error #${i}; visit https://redux.js.org/Errors?code=${i} for the full message or use the non-minified dev environment for full errors. `}var lb=typeof Symbol=="function"&&Symbol.observable||"@@observable",wm=lb,$u=()=>Math.random().toString(36).substring(7).split("").join("."),ob={INIT:`@@redux/INIT${$u()}`,REPLACE:`@@redux/REPLACE${$u()}`,PROBE_UNKNOWN_ACTION:()=>`@@redux/PROBE_UNKNOWN_ACTION${$u()}`},pi=ob;function ib(i){if(typeof i!="object"||i===null)return!1;let s=i;for(;Object.getPrototypeOf(s)!==null;)s=Object.getPrototypeOf(s);return Object.getPrototypeOf(i)===s||Object.getPrototypeOf(i)===null}function rb(i,s,d){if(typeof i!="function")throw new Error(rt(2));let u=i,f=s,m=new Map,y=m,N=0,b=!1;function g(){y===m&&(y=new Map,m.forEach((L,G)=>{y.set(G,L)}))}function j(){if(b)throw new Error(rt(3));return f}function T(L){if(typeof L!="function")throw new Error(rt(4));if(b)throw new Error(rt(5));let G=!0;g();const H=N++;return y.set(H,L),function(){if(G){if(b)throw new Error(rt(6));G=!1,g(),y.delete(H),m=null}}}function U(L){if(!ib(L))throw new Error(rt(7));if(typeof L.type>"u")throw new Error(rt(8));if(typeof L.type!="string")throw new Error(rt(17));if(b)throw new Error(rt(9));try{b=!0,f=u(f,L)}finally{b=!1}return(m=y).forEach(H=>{H()}),L}function q(L){if(typeof L!="function")throw new Error(rt(10));u=L,U({type:pi.REPLACE})}function Q(){const L=T;return{subscribe(G){if(typeof G!="object"||G===null)throw new Error(rt(11));function H(){const de=G;de.next&&de.next(j())}return H(),{unsubscribe:L(H)}},[wm](){return this}}}return U({type:pi.INIT}),{dispatch:U,subscribe:T,getState:j,replaceReducer:q,[wm]:Q}}function ub(i,s,d){return rb(i,s)}function sb(i){Object.keys(i).forEach(s=>{const d=i[s];if(typeof d(void 0,{type:pi.INIT})>"u")throw new Error(rt(12));if(typeof d(void 0,{type:pi.PROBE_UNKNOWN_ACTION()})>"u")throw new Error(rt(13))})}function cb(i){const s=Object.keys(i),d={};for(let m=0;m<s.length;m++){const y=s[m];typeof i[y]=="function"&&(d[y]=i[y])}const u=Object.keys(d);let f;try{sb(d)}catch(m){f=m}return function(y={},N){if(f)throw f;let b=!1;const g={};for(let j=0;j<u.length;j++){const T=u[j],U=d[T],q=y[T],Q=U(q,N);if(typeof Q>"u")throw N&&N.type,new Error(rt(14));g[T]=Q,b=b||Q!==q}return b=b||u.length!==Object.keys(y).length,b?g:y}}const db={portfolioLocation:"skills"},fb=(i=db,s)=>s.type===np?{...i,portfolioLocation:s.payload.location}:i,mb={language:"es"},pb=(i=mb,s)=>s.type===ap?{...i,language:s.payload.language}:i,hb={activity:"portfolio"},gb=(i=hb,s)=>s.type===lp?{...i,activity:s.payload.activity}:i,yb=cb({portfolioPageReducer:fb,menuComponentReducer:pb,headerComponentReducer:gb}),vb=ub(yb);Vg.createRoot(document.getElementById("root")).render(p.jsx(A.StrictMode,{children:p.jsx(Lv,{store:vb,children:p.jsx(nb,{})})}));
