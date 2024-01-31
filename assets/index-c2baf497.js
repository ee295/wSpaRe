(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const i of r)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const i={};return r.integrity&&(i.integrity=r.integrity),r.referrerPolicy&&(i.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?i.credentials="include":r.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function s(r){if(r.ep)return;r.ep=!0;const i=n(r);fetch(r.href,i)}})();function Eh(t,e){const n=Object.create(null),s=t.split(",");for(let r=0;r<s.length;r++)n[s[r]]=!0;return e?r=>!!n[r.toLowerCase()]:r=>!!n[r]}const De={},Tr=[],cn=()=>{},zE=()=>!1,GE=/^on[^a-z]/,wl=t=>GE.test(t),Th=t=>t.startsWith("onUpdate:"),pt=Object.assign,Ih=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},QE=Object.prototype.hasOwnProperty,_e=(t,e)=>QE.call(t,e),z=Array.isArray,Ir=t=>Eo(t)==="[object Map]",El=t=>Eo(t)==="[object Set]",Tf=t=>Eo(t)==="[object Date]",re=t=>typeof t=="function",Xe=t=>typeof t=="string",Hi=t=>typeof t=="symbol",Ve=t=>t!==null&&typeof t=="object",__=t=>Ve(t)&&re(t.then)&&re(t.catch),m_=Object.prototype.toString,Eo=t=>m_.call(t),YE=t=>Eo(t).slice(8,-1),y_=t=>Eo(t)==="[object Object]",Ah=t=>Xe(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,ya=Eh(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Tl=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},XE=/-(\w)/g,Nn=Tl(t=>t.replace(XE,(e,n)=>n?n.toUpperCase():"")),JE=/\B([A-Z])/g,Gr=Tl(t=>t.replace(JE,"-$1").toLowerCase()),Il=Tl(t=>t.charAt(0).toUpperCase()+t.slice(1)),Ic=Tl(t=>t?`on${Il(t)}`:""),qi=(t,e)=>!Object.is(t,e),va=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},Na=(t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})},uu=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let If;const hu=()=>If||(If=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Os(t){if(z(t)){const e={};for(let n=0;n<t.length;n++){const s=t[n],r=Xe(s)?nT(s):Os(s);if(r)for(const i in r)e[i]=r[i]}return e}else{if(Xe(t))return t;if(Ve(t))return t}}const ZE=/;(?![^(]*\))/g,eT=/:([^]+)/,tT=/\/\*[^]*?\*\//g;function nT(t){const e={};return t.replace(tT,"").split(ZE).forEach(n=>{if(n){const s=n.split(eT);s.length>1&&(e[s[0].trim()]=s[1].trim())}}),e}function Ch(t){let e="";if(Xe(t))e=t;else if(z(t))for(let n=0;n<t.length;n++){const s=Ch(t[n]);s&&(e+=s+" ")}else if(Ve(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const sT="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",rT=Eh(sT);function v_(t){return!!t||t===""}function iT(t,e){if(t.length!==e.length)return!1;let n=!0;for(let s=0;n&&s<t.length;s++)n=Al(t[s],e[s]);return n}function Al(t,e){if(t===e)return!0;let n=Tf(t),s=Tf(e);if(n||s)return n&&s?t.getTime()===e.getTime():!1;if(n=Hi(t),s=Hi(e),n||s)return t===e;if(n=z(t),s=z(e),n||s)return n&&s?iT(t,e):!1;if(n=Ve(t),s=Ve(e),n||s){if(!n||!s)return!1;const r=Object.keys(t).length,i=Object.keys(e).length;if(r!==i)return!1;for(const o in t){const a=t.hasOwnProperty(o),l=e.hasOwnProperty(o);if(a&&!l||!a&&l||!Al(t[o],e[o]))return!1}}return String(t)===String(e)}function w_(t,e){return t.findIndex(n=>Al(n,e))}const zt=t=>Xe(t)?t:t==null?"":z(t)||Ve(t)&&(t.toString===m_||!re(t.toString))?JSON.stringify(t,E_,2):String(t),E_=(t,e)=>e&&e.__v_isRef?E_(t,e.value):Ir(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[s,r])=>(n[`${s} =>`]=r,n),{})}:El(e)?{[`Set(${e.size})`]:[...e.values()]}:Ve(e)&&!z(e)&&!y_(e)?String(e):e;let nn;class T_{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this.parent=nn,!e&&nn&&(this.index=(nn.scopes||(nn.scopes=[])).push(this)-1)}get active(){return this._active}run(e){if(this._active){const n=nn;try{return nn=this,e()}finally{nn=n}}}on(){nn=this}off(){nn=this.parent}stop(e){if(this._active){let n,s;for(n=0,s=this.effects.length;n<s;n++)this.effects[n].stop();for(n=0,s=this.cleanups.length;n<s;n++)this.cleanups[n]();if(this.scopes)for(n=0,s=this.scopes.length;n<s;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!e){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.parent=void 0,this._active=!1}}}function oT(t){return new T_(t)}function aT(t,e=nn){e&&e.active&&e.effects.push(t)}function lT(){return nn}const bh=t=>{const e=new Set(t);return e.w=0,e.n=0,e},I_=t=>(t.w&ms)>0,A_=t=>(t.n&ms)>0,cT=({deps:t})=>{if(t.length)for(let e=0;e<t.length;e++)t[e].w|=ms},uT=t=>{const{deps:e}=t;if(e.length){let n=0;for(let s=0;s<e.length;s++){const r=e[s];I_(r)&&!A_(r)?r.delete(t):e[n++]=r,r.w&=~ms,r.n&=~ms}e.length=n}},du=new WeakMap;let wi=0,ms=1;const fu=30;let sn;const Bs=Symbol(""),pu=Symbol("");class Rh{constructor(e,n=null,s){this.fn=e,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,aT(this,s)}run(){if(!this.active)return this.fn();let e=sn,n=us;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=sn,sn=this,us=!0,ms=1<<++wi,wi<=fu?cT(this):Af(this),this.fn()}finally{wi<=fu&&uT(this),ms=1<<--wi,sn=this.parent,us=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){sn===this?this.deferStop=!0:this.active&&(Af(this),this.onStop&&this.onStop(),this.active=!1)}}function Af(t){const{deps:e}=t;if(e.length){for(let n=0;n<e.length;n++)e[n].delete(t);e.length=0}}let us=!0;const C_=[];function Qr(){C_.push(us),us=!1}function Yr(){const t=C_.pop();us=t===void 0?!0:t}function Bt(t,e,n){if(us&&sn){let s=du.get(t);s||du.set(t,s=new Map);let r=s.get(n);r||s.set(n,r=bh()),b_(r)}}function b_(t,e){let n=!1;wi<=fu?A_(t)||(t.n|=ms,n=!I_(t)):n=!t.has(sn),n&&(t.add(sn),sn.deps.push(t))}function zn(t,e,n,s,r,i){const o=du.get(t);if(!o)return;let a=[];if(e==="clear")a=[...o.values()];else if(n==="length"&&z(t)){const l=Number(s);o.forEach((c,u)=>{(u==="length"||u>=l)&&a.push(c)})}else switch(n!==void 0&&a.push(o.get(n)),e){case"add":z(t)?Ah(n)&&a.push(o.get("length")):(a.push(o.get(Bs)),Ir(t)&&a.push(o.get(pu)));break;case"delete":z(t)||(a.push(o.get(Bs)),Ir(t)&&a.push(o.get(pu)));break;case"set":Ir(t)&&a.push(o.get(Bs));break}if(a.length===1)a[0]&&gu(a[0]);else{const l=[];for(const c of a)c&&l.push(...c);gu(bh(l))}}function gu(t,e){const n=z(t)?t:[...t];for(const s of n)s.computed&&Cf(s);for(const s of n)s.computed||Cf(s)}function Cf(t,e){(t!==sn||t.allowRecurse)&&(t.scheduler?t.scheduler():t.run())}const hT=Eh("__proto__,__v_isRef,__isVue"),R_=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(Hi)),dT=Sh(),fT=Sh(!1,!0),pT=Sh(!0),bf=gT();function gT(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const s=we(this);for(let i=0,o=this.length;i<o;i++)Bt(s,"get",i+"");const r=s[e](...n);return r===-1||r===!1?s[e](...n.map(we)):r}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){Qr();const s=we(this)[e].apply(this,n);return Yr(),s}}),t}function _T(t){const e=we(this);return Bt(e,"has",t),e.hasOwnProperty(t)}function Sh(t=!1,e=!1){return function(s,r,i){if(r==="__v_isReactive")return!t;if(r==="__v_isReadonly")return t;if(r==="__v_isShallow")return e;if(r==="__v_raw"&&i===(t?e?xT:x_:e?N_:P_).get(s))return s;const o=z(s);if(!t){if(o&&_e(bf,r))return Reflect.get(bf,r,i);if(r==="hasOwnProperty")return _T}const a=Reflect.get(s,r,i);return(Hi(r)?R_.has(r):hT(r))||(t||Bt(s,"get",r),e)?a:It(a)?o&&Ah(r)?a:a.value:Ve(a)?t?D_(a):Nh(a):a}}const mT=S_(),yT=S_(!0);function S_(t=!1){return function(n,s,r,i){let o=n[s];if(Dr(o)&&It(o)&&!It(r))return!1;if(!t&&(!xa(r)&&!Dr(r)&&(o=we(o),r=we(r)),!z(n)&&It(o)&&!It(r)))return o.value=r,!0;const a=z(n)&&Ah(s)?Number(s)<n.length:_e(n,s),l=Reflect.set(n,s,r,i);return n===we(i)&&(a?qi(r,o)&&zn(n,"set",s,r):zn(n,"add",s,r)),l}}function vT(t,e){const n=_e(t,e);t[e];const s=Reflect.deleteProperty(t,e);return s&&n&&zn(t,"delete",e,void 0),s}function wT(t,e){const n=Reflect.has(t,e);return(!Hi(e)||!R_.has(e))&&Bt(t,"has",e),n}function ET(t){return Bt(t,"iterate",z(t)?"length":Bs),Reflect.ownKeys(t)}const k_={get:dT,set:mT,deleteProperty:vT,has:wT,ownKeys:ET},TT={get:pT,set(t,e){return!0},deleteProperty(t,e){return!0}},IT=pt({},k_,{get:fT,set:yT}),kh=t=>t,Cl=t=>Reflect.getPrototypeOf(t);function Go(t,e,n=!1,s=!1){t=t.__v_raw;const r=we(t),i=we(e);n||(e!==i&&Bt(r,"get",e),Bt(r,"get",i));const{has:o}=Cl(r),a=s?kh:n?Dh:Ki;if(o.call(r,e))return a(t.get(e));if(o.call(r,i))return a(t.get(i));t!==r&&t.get(e)}function Qo(t,e=!1){const n=this.__v_raw,s=we(n),r=we(t);return e||(t!==r&&Bt(s,"has",t),Bt(s,"has",r)),t===r?n.has(t):n.has(t)||n.has(r)}function Yo(t,e=!1){return t=t.__v_raw,!e&&Bt(we(t),"iterate",Bs),Reflect.get(t,"size",t)}function Rf(t){t=we(t);const e=we(this);return Cl(e).has.call(e,t)||(e.add(t),zn(e,"add",t,t)),this}function Sf(t,e){e=we(e);const n=we(this),{has:s,get:r}=Cl(n);let i=s.call(n,t);i||(t=we(t),i=s.call(n,t));const o=r.call(n,t);return n.set(t,e),i?qi(e,o)&&zn(n,"set",t,e):zn(n,"add",t,e),this}function kf(t){const e=we(this),{has:n,get:s}=Cl(e);let r=n.call(e,t);r||(t=we(t),r=n.call(e,t)),s&&s.call(e,t);const i=e.delete(t);return r&&zn(e,"delete",t,void 0),i}function Pf(){const t=we(this),e=t.size!==0,n=t.clear();return e&&zn(t,"clear",void 0,void 0),n}function Xo(t,e){return function(s,r){const i=this,o=i.__v_raw,a=we(o),l=e?kh:t?Dh:Ki;return!t&&Bt(a,"iterate",Bs),o.forEach((c,u)=>s.call(r,l(c),l(u),i))}}function Jo(t,e,n){return function(...s){const r=this.__v_raw,i=we(r),o=Ir(i),a=t==="entries"||t===Symbol.iterator&&o,l=t==="keys"&&o,c=r[t](...s),u=n?kh:e?Dh:Ki;return!e&&Bt(i,"iterate",l?pu:Bs),{next(){const{value:h,done:d}=c.next();return d?{value:h,done:d}:{value:a?[u(h[0]),u(h[1])]:u(h),done:d}},[Symbol.iterator](){return this}}}}function ns(t){return function(...e){return t==="delete"?!1:this}}function AT(){const t={get(i){return Go(this,i)},get size(){return Yo(this)},has:Qo,add:Rf,set:Sf,delete:kf,clear:Pf,forEach:Xo(!1,!1)},e={get(i){return Go(this,i,!1,!0)},get size(){return Yo(this)},has:Qo,add:Rf,set:Sf,delete:kf,clear:Pf,forEach:Xo(!1,!0)},n={get(i){return Go(this,i,!0)},get size(){return Yo(this,!0)},has(i){return Qo.call(this,i,!0)},add:ns("add"),set:ns("set"),delete:ns("delete"),clear:ns("clear"),forEach:Xo(!0,!1)},s={get(i){return Go(this,i,!0,!0)},get size(){return Yo(this,!0)},has(i){return Qo.call(this,i,!0)},add:ns("add"),set:ns("set"),delete:ns("delete"),clear:ns("clear"),forEach:Xo(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{t[i]=Jo(i,!1,!1),n[i]=Jo(i,!0,!1),e[i]=Jo(i,!1,!0),s[i]=Jo(i,!0,!0)}),[t,n,e,s]}const[CT,bT,RT,ST]=AT();function Ph(t,e){const n=e?t?ST:RT:t?bT:CT;return(s,r,i)=>r==="__v_isReactive"?!t:r==="__v_isReadonly"?t:r==="__v_raw"?s:Reflect.get(_e(n,r)&&r in s?n:s,r,i)}const kT={get:Ph(!1,!1)},PT={get:Ph(!1,!0)},NT={get:Ph(!0,!1)},P_=new WeakMap,N_=new WeakMap,x_=new WeakMap,xT=new WeakMap;function DT(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function OT(t){return t.__v_skip||!Object.isExtensible(t)?0:DT(YE(t))}function Nh(t){return Dr(t)?t:xh(t,!1,k_,kT,P_)}function MT(t){return xh(t,!1,IT,PT,N_)}function D_(t){return xh(t,!0,TT,NT,x_)}function xh(t,e,n,s,r){if(!Ve(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=r.get(t);if(i)return i;const o=OT(t);if(o===0)return t;const a=new Proxy(t,o===2?s:n);return r.set(t,a),a}function Ar(t){return Dr(t)?Ar(t.__v_raw):!!(t&&t.__v_isReactive)}function Dr(t){return!!(t&&t.__v_isReadonly)}function xa(t){return!!(t&&t.__v_isShallow)}function O_(t){return Ar(t)||Dr(t)}function we(t){const e=t&&t.__v_raw;return e?we(e):t}function M_(t){return Na(t,"__v_skip",!0),t}const Ki=t=>Ve(t)?Nh(t):t,Dh=t=>Ve(t)?D_(t):t;function L_(t){us&&sn&&(t=we(t),b_(t.dep||(t.dep=bh())))}function V_(t,e){t=we(t);const n=t.dep;n&&gu(n)}function It(t){return!!(t&&t.__v_isRef===!0)}function ge(t){return LT(t,!1)}function LT(t,e){return It(t)?t:new VT(t,e)}class VT{constructor(e,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:we(e),this._value=n?e:Ki(e)}get value(){return L_(this),this._value}set value(e){const n=this.__v_isShallow||xa(e)||Dr(e);e=n?e:we(e),qi(e,this._rawValue)&&(this._rawValue=e,this._value=n?e:Ki(e),V_(this))}}function Mt(t){return It(t)?t.value:t}const FT={get:(t,e,n)=>Mt(Reflect.get(t,e,n)),set:(t,e,n,s)=>{const r=t[e];return It(r)&&!It(n)?(r.value=n,!0):Reflect.set(t,e,n,s)}};function F_(t){return Ar(t)?t:new Proxy(t,FT)}class UT{constructor(e,n,s,r){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this._dirty=!0,this.effect=new Rh(e,()=>{this._dirty||(this._dirty=!0,V_(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!r,this.__v_isReadonly=s}get value(){const e=we(this);return L_(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}function BT(t,e,n=!1){let s,r;const i=re(t);return i?(s=t,r=cn):(s=t.get,r=t.set),new UT(s,r,i||!r,n)}function hs(t,e,n,s){let r;try{r=s?t(...s):t()}catch(i){bl(i,e,n)}return r}function un(t,e,n,s){if(re(t)){const i=hs(t,e,n,s);return i&&__(i)&&i.catch(o=>{bl(o,e,n)}),i}const r=[];for(let i=0;i<t.length;i++)r.push(un(t[i],e,n,s));return r}function bl(t,e,n,s=!0){const r=e?e.vnode:null;if(e){let i=e.parent;const o=e.proxy,a=n;for(;i;){const c=i.ec;if(c){for(let u=0;u<c.length;u++)if(c[u](t,o,a)===!1)return}i=i.parent}const l=e.appContext.config.errorHandler;if(l){hs(l,null,10,[t,o,a]);return}}$T(t,n,r,s)}function $T(t,e,n,s=!0){console.error(t)}let zi=!1,_u=!1;const Et=[];let En=0;const Cr=[];let Bn=null,Ns=0;const U_=Promise.resolve();let Oh=null;function jT(t){const e=Oh||U_;return t?e.then(this?t.bind(this):t):e}function WT(t){let e=En+1,n=Et.length;for(;e<n;){const s=e+n>>>1;Gi(Et[s])<t?e=s+1:n=s}return e}function Mh(t){(!Et.length||!Et.includes(t,zi&&t.allowRecurse?En+1:En))&&(t.id==null?Et.push(t):Et.splice(WT(t.id),0,t),B_())}function B_(){!zi&&!_u&&(_u=!0,Oh=U_.then(j_))}function HT(t){const e=Et.indexOf(t);e>En&&Et.splice(e,1)}function qT(t){z(t)?Cr.push(...t):(!Bn||!Bn.includes(t,t.allowRecurse?Ns+1:Ns))&&Cr.push(t),B_()}function Nf(t,e=zi?En+1:0){for(;e<Et.length;e++){const n=Et[e];n&&n.pre&&(Et.splice(e,1),e--,n())}}function $_(t){if(Cr.length){const e=[...new Set(Cr)];if(Cr.length=0,Bn){Bn.push(...e);return}for(Bn=e,Bn.sort((n,s)=>Gi(n)-Gi(s)),Ns=0;Ns<Bn.length;Ns++)Bn[Ns]();Bn=null,Ns=0}}const Gi=t=>t.id==null?1/0:t.id,KT=(t,e)=>{const n=Gi(t)-Gi(e);if(n===0){if(t.pre&&!e.pre)return-1;if(e.pre&&!t.pre)return 1}return n};function j_(t){_u=!1,zi=!0,Et.sort(KT);const e=cn;try{for(En=0;En<Et.length;En++){const n=Et[En];n&&n.active!==!1&&hs(n,null,14)}}finally{En=0,Et.length=0,$_(),zi=!1,Oh=null,(Et.length||Cr.length)&&j_()}}function zT(t,e,...n){if(t.isUnmounted)return;const s=t.vnode.props||De;let r=n;const i=e.startsWith("update:"),o=i&&e.slice(7);if(o&&o in s){const u=`${o==="modelValue"?"model":o}Modifiers`,{number:h,trim:d}=s[u]||De;d&&(r=n.map(p=>Xe(p)?p.trim():p)),h&&(r=n.map(uu))}let a,l=s[a=Ic(e)]||s[a=Ic(Nn(e))];!l&&i&&(l=s[a=Ic(Gr(e))]),l&&un(l,t,6,r);const c=s[a+"Once"];if(c){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,un(c,t,6,r)}}function W_(t,e,n=!1){const s=e.emitsCache,r=s.get(t);if(r!==void 0)return r;const i=t.emits;let o={},a=!1;if(!re(t)){const l=c=>{const u=W_(c,e,!0);u&&(a=!0,pt(o,u))};!n&&e.mixins.length&&e.mixins.forEach(l),t.extends&&l(t.extends),t.mixins&&t.mixins.forEach(l)}return!i&&!a?(Ve(t)&&s.set(t,null),null):(z(i)?i.forEach(l=>o[l]=null):pt(o,i),Ve(t)&&s.set(t,o),o)}function Rl(t,e){return!t||!wl(e)?!1:(e=e.slice(2).replace(/Once$/,""),_e(t,e[0].toLowerCase()+e.slice(1))||_e(t,Gr(e))||_e(t,e))}let jt=null,H_=null;function Da(t){const e=jt;return jt=t,H_=t&&t.type.__scopeId||null,e}function GT(t,e=jt,n){if(!e||t._n)return t;const s=(...r)=>{s._d&&Wf(-1);const i=Da(e);let o;try{o=t(...r)}finally{Da(i),s._d&&Wf(1)}return o};return s._n=!0,s._c=!0,s._d=!0,s}function Ac(t){const{type:e,vnode:n,proxy:s,withProxy:r,props:i,propsOptions:[o],slots:a,attrs:l,emit:c,render:u,renderCache:h,data:d,setupState:p,ctx:m,inheritAttrs:_}=t;let E,F;const v=Da(t);try{if(n.shapeFlag&4){const w=r||s;E=wn(u.call(w,w,h,i,p,d,m)),F=l}else{const w=e;E=wn(w.length>1?w(i,{attrs:l,slots:a,emit:c}):w(i,null)),F=e.props?l:QT(l)}}catch(w){Di.length=0,bl(w,t,1),E=bn(qs)}let y=E;if(F&&_!==!1){const w=Object.keys(F),{shapeFlag:U}=y;w.length&&U&7&&(o&&w.some(Th)&&(F=YT(F,o)),y=Or(y,F))}return n.dirs&&(y=Or(y),y.dirs=y.dirs?y.dirs.concat(n.dirs):n.dirs),n.transition&&(y.transition=n.transition),E=y,Da(v),E}const QT=t=>{let e;for(const n in t)(n==="class"||n==="style"||wl(n))&&((e||(e={}))[n]=t[n]);return e},YT=(t,e)=>{const n={};for(const s in t)(!Th(s)||!(s.slice(9)in e))&&(n[s]=t[s]);return n};function XT(t,e,n){const{props:s,children:r,component:i}=t,{props:o,children:a,patchFlag:l}=e,c=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return s?xf(s,o,c):!!o;if(l&8){const u=e.dynamicProps;for(let h=0;h<u.length;h++){const d=u[h];if(o[d]!==s[d]&&!Rl(c,d))return!0}}}else return(r||a)&&(!a||!a.$stable)?!0:s===o?!1:s?o?xf(s,o,c):!0:!!o;return!1}function xf(t,e,n){const s=Object.keys(e);if(s.length!==Object.keys(t).length)return!0;for(let r=0;r<s.length;r++){const i=s[r];if(e[i]!==t[i]&&!Rl(n,i))return!0}return!1}function JT({vnode:t,parent:e},n){for(;e&&e.subTree===t;)(t=e.vnode).el=n,e=e.parent}const ZT=t=>t.__isSuspense;function eI(t,e){e&&e.pendingBranch?z(t)?e.effects.push(...t):e.effects.push(t):qT(t)}const Zo={};function Cc(t,e,n){return q_(t,e,n)}function q_(t,e,{immediate:n,deep:s,flush:r,onTrack:i,onTrigger:o}=De){var a;const l=lT()===((a=it)==null?void 0:a.scope)?it:null;let c,u=!1,h=!1;if(It(t)?(c=()=>t.value,u=xa(t)):Ar(t)?(c=()=>t,s=!0):z(t)?(h=!0,u=t.some(w=>Ar(w)||xa(w)),c=()=>t.map(w=>{if(It(w))return w.value;if(Ar(w))return Ms(w);if(re(w))return hs(w,l,2)})):re(t)?e?c=()=>hs(t,l,2):c=()=>{if(!(l&&l.isUnmounted))return d&&d(),un(t,l,3,[p])}:c=cn,e&&s){const w=c;c=()=>Ms(w())}let d,p=w=>{d=v.onStop=()=>{hs(w,l,4)}},m;if(Yi)if(p=cn,e?n&&un(e,l,3,[c(),h?[]:void 0,p]):c(),r==="sync"){const w=n0();m=w.__watcherHandles||(w.__watcherHandles=[])}else return cn;let _=h?new Array(t.length).fill(Zo):Zo;const E=()=>{if(v.active)if(e){const w=v.run();(s||u||(h?w.some((U,Q)=>qi(U,_[Q])):qi(w,_)))&&(d&&d(),un(e,l,3,[w,_===Zo?void 0:h&&_[0]===Zo?[]:_,p]),_=w)}else v.run()};E.allowRecurse=!!e;let F;r==="sync"?F=E:r==="post"?F=()=>Lt(E,l&&l.suspense):(E.pre=!0,l&&(E.id=l.uid),F=()=>Mh(E));const v=new Rh(c,F);e?n?E():_=v.run():r==="post"?Lt(v.run.bind(v),l&&l.suspense):v.run();const y=()=>{v.stop(),l&&l.scope&&Ih(l.scope.effects,v)};return m&&m.push(y),y}function tI(t,e,n){const s=this.proxy,r=Xe(t)?t.includes(".")?K_(s,t):()=>s[t]:t.bind(s,s);let i;re(e)?i=e:(i=e.handler,n=e);const o=it;Mr(this);const a=q_(r,i.bind(s),n);return o?Mr(o):$s(),a}function K_(t,e){const n=e.split(".");return()=>{let s=t;for(let r=0;r<n.length&&s;r++)s=s[n[r]];return s}}function Ms(t,e){if(!Ve(t)||t.__v_skip||(e=e||new Set,e.has(t)))return t;if(e.add(t),It(t))Ms(t.value,e);else if(z(t))for(let n=0;n<t.length;n++)Ms(t[n],e);else if(El(t)||Ir(t))t.forEach(n=>{Ms(n,e)});else if(y_(t))for(const n in t)Ms(t[n],e);return t}function Ne(t,e){const n=jt;if(n===null)return t;const s=Nl(n)||n.proxy,r=t.dirs||(t.dirs=[]);for(let i=0;i<e.length;i++){let[o,a,l,c=De]=e[i];o&&(re(o)&&(o={mounted:o,updated:o}),o.deep&&Ms(a),r.push({dir:o,instance:s,value:a,oldValue:void 0,arg:l,modifiers:c}))}return t}function Rs(t,e,n,s){const r=t.dirs,i=e&&e.dirs;for(let o=0;o<r.length;o++){const a=r[o];i&&(a.oldValue=i[o].value);let l=a.dir[s];l&&(Qr(),un(l,n,8,[t.el,a,t,e]),Yr())}}const wa=t=>!!t.type.__asyncLoader,z_=t=>t.type.__isKeepAlive;function nI(t,e){G_(t,"a",e)}function sI(t,e){G_(t,"da",e)}function G_(t,e,n=it){const s=t.__wdc||(t.__wdc=()=>{let r=n;for(;r;){if(r.isDeactivated)return;r=r.parent}return t()});if(Sl(e,s,n),n){let r=n.parent;for(;r&&r.parent;)z_(r.parent.vnode)&&rI(s,e,n,r),r=r.parent}}function rI(t,e,n,s){const r=Sl(e,t,s,!0);Q_(()=>{Ih(s[e],r)},n)}function Sl(t,e,n=it,s=!1){if(n){const r=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...o)=>{if(n.isUnmounted)return;Qr(),Mr(n);const a=un(e,n,t,o);return $s(),Yr(),a});return s?r.unshift(i):r.push(i),i}}const Jn=t=>(e,n=it)=>(!Yi||t==="sp")&&Sl(t,(...s)=>e(...s),n),iI=Jn("bm"),oI=Jn("m"),aI=Jn("bu"),lI=Jn("u"),cI=Jn("bum"),Q_=Jn("um"),uI=Jn("sp"),hI=Jn("rtg"),dI=Jn("rtc");function fI(t,e=it){Sl("ec",t,e)}const pI="components",gI="directives",_I=Symbol.for("v-ndc");function mI(t){return yI(gI,t)}function yI(t,e,n=!0,s=!1){const r=jt||it;if(r){const i=r.type;if(t===pI){const a=JI(i,!1);if(a&&(a===e||a===Nn(e)||a===Il(Nn(e))))return i}const o=Df(r[t]||i[t],e)||Df(r.appContext[t],e);return!o&&s?i:o}}function Df(t,e){return t&&(t[e]||t[Nn(e)]||t[Il(Nn(e))])}function Of(t,e,n,s){let r;const i=n&&n[s];if(z(t)||Xe(t)){r=new Array(t.length);for(let o=0,a=t.length;o<a;o++)r[o]=e(t[o],o,void 0,i&&i[o])}else if(typeof t=="number"){r=new Array(t);for(let o=0;o<t;o++)r[o]=e(o+1,o,void 0,i&&i[o])}else if(Ve(t))if(t[Symbol.iterator])r=Array.from(t,(o,a)=>e(o,a,void 0,i&&i[a]));else{const o=Object.keys(t);r=new Array(o.length);for(let a=0,l=o.length;a<l;a++){const c=o[a];r[a]=e(t[c],c,a,i&&i[a])}}else r=[];return n&&(n[s]=r),r}const mu=t=>t?om(t)?Nl(t)||t.proxy:mu(t.parent):null,Ni=pt(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>mu(t.parent),$root:t=>mu(t.root),$emit:t=>t.emit,$options:t=>Lh(t),$forceUpdate:t=>t.f||(t.f=()=>Mh(t.update)),$nextTick:t=>t.n||(t.n=jT.bind(t.proxy)),$watch:t=>tI.bind(t)}),bc=(t,e)=>t!==De&&!t.__isScriptSetup&&_e(t,e),vI={get({_:t},e){const{ctx:n,setupState:s,data:r,props:i,accessCache:o,type:a,appContext:l}=t;let c;if(e[0]!=="$"){const p=o[e];if(p!==void 0)switch(p){case 1:return s[e];case 2:return r[e];case 4:return n[e];case 3:return i[e]}else{if(bc(s,e))return o[e]=1,s[e];if(r!==De&&_e(r,e))return o[e]=2,r[e];if((c=t.propsOptions[0])&&_e(c,e))return o[e]=3,i[e];if(n!==De&&_e(n,e))return o[e]=4,n[e];yu&&(o[e]=0)}}const u=Ni[e];let h,d;if(u)return e==="$attrs"&&Bt(t,"get",e),u(t);if((h=a.__cssModules)&&(h=h[e]))return h;if(n!==De&&_e(n,e))return o[e]=4,n[e];if(d=l.config.globalProperties,_e(d,e))return d[e]},set({_:t},e,n){const{data:s,setupState:r,ctx:i}=t;return bc(r,e)?(r[e]=n,!0):s!==De&&_e(s,e)?(s[e]=n,!0):_e(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:s,appContext:r,propsOptions:i}},o){let a;return!!n[o]||t!==De&&_e(t,o)||bc(e,o)||(a=i[0])&&_e(a,o)||_e(s,o)||_e(Ni,o)||_e(r.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:_e(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function Mf(t){return z(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let yu=!0;function wI(t){const e=Lh(t),n=t.proxy,s=t.ctx;yu=!1,e.beforeCreate&&Lf(e.beforeCreate,t,"bc");const{data:r,computed:i,methods:o,watch:a,provide:l,inject:c,created:u,beforeMount:h,mounted:d,beforeUpdate:p,updated:m,activated:_,deactivated:E,beforeDestroy:F,beforeUnmount:v,destroyed:y,unmounted:w,render:U,renderTracked:Q,renderTriggered:ie,errorCaptured:ce,serverPrefetch:pe,expose:Pe,inheritAttrs:$e,components:Ze,directives:Pt,filters:et}=e;if(c&&EI(c,s,null),o)for(const G in o){const me=o[G];re(me)&&(s[G]=me.bind(n))}if(r){const G=r.call(n,n);Ve(G)&&(t.data=Nh(G))}if(yu=!0,i)for(const G in i){const me=i[G],en=re(me)?me.bind(n,n):re(me.get)?me.get.bind(n,n):cn,mn=!re(me)&&re(me.set)?me.set.bind(n):cn,gt=e0({get:en,set:mn});Object.defineProperty(s,G,{enumerable:!0,configurable:!0,get:()=>gt.value,set:Nt=>gt.value=Nt})}if(a)for(const G in a)Y_(a[G],s,n,G);if(l){const G=re(l)?l.call(n):l;Reflect.ownKeys(G).forEach(me=>{RI(me,G[me])})}u&&Lf(u,t,"c");function Ae(G,me){z(me)?me.forEach(en=>G(en.bind(n))):me&&G(me.bind(n))}if(Ae(iI,h),Ae(oI,d),Ae(aI,p),Ae(lI,m),Ae(nI,_),Ae(sI,E),Ae(fI,ce),Ae(dI,Q),Ae(hI,ie),Ae(cI,v),Ae(Q_,w),Ae(uI,pe),z(Pe))if(Pe.length){const G=t.exposed||(t.exposed={});Pe.forEach(me=>{Object.defineProperty(G,me,{get:()=>n[me],set:en=>n[me]=en})})}else t.exposed||(t.exposed={});U&&t.render===cn&&(t.render=U),$e!=null&&(t.inheritAttrs=$e),Ze&&(t.components=Ze),Pt&&(t.directives=Pt)}function EI(t,e,n=cn){z(t)&&(t=vu(t));for(const s in t){const r=t[s];let i;Ve(r)?"default"in r?i=xi(r.from||s,r.default,!0):i=xi(r.from||s):i=xi(r),It(i)?Object.defineProperty(e,s,{enumerable:!0,configurable:!0,get:()=>i.value,set:o=>i.value=o}):e[s]=i}}function Lf(t,e,n){un(z(t)?t.map(s=>s.bind(e.proxy)):t.bind(e.proxy),e,n)}function Y_(t,e,n,s){const r=s.includes(".")?K_(n,s):()=>n[s];if(Xe(t)){const i=e[t];re(i)&&Cc(r,i)}else if(re(t))Cc(r,t.bind(n));else if(Ve(t))if(z(t))t.forEach(i=>Y_(i,e,n,s));else{const i=re(t.handler)?t.handler.bind(n):e[t.handler];re(i)&&Cc(r,i,t)}}function Lh(t){const e=t.type,{mixins:n,extends:s}=e,{mixins:r,optionsCache:i,config:{optionMergeStrategies:o}}=t.appContext,a=i.get(e);let l;return a?l=a:!r.length&&!n&&!s?l=e:(l={},r.length&&r.forEach(c=>Oa(l,c,o,!0)),Oa(l,e,o)),Ve(e)&&i.set(e,l),l}function Oa(t,e,n,s=!1){const{mixins:r,extends:i}=e;i&&Oa(t,i,n,!0),r&&r.forEach(o=>Oa(t,o,n,!0));for(const o in e)if(!(s&&o==="expose")){const a=TI[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const TI={data:Vf,props:Ff,emits:Ff,methods:Ei,computed:Ei,beforeCreate:Dt,created:Dt,beforeMount:Dt,mounted:Dt,beforeUpdate:Dt,updated:Dt,beforeDestroy:Dt,beforeUnmount:Dt,destroyed:Dt,unmounted:Dt,activated:Dt,deactivated:Dt,errorCaptured:Dt,serverPrefetch:Dt,components:Ei,directives:Ei,watch:AI,provide:Vf,inject:II};function Vf(t,e){return e?t?function(){return pt(re(t)?t.call(this,this):t,re(e)?e.call(this,this):e)}:e:t}function II(t,e){return Ei(vu(t),vu(e))}function vu(t){if(z(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function Dt(t,e){return t?[...new Set([].concat(t,e))]:e}function Ei(t,e){return t?pt(Object.create(null),t,e):e}function Ff(t,e){return t?z(t)&&z(e)?[...new Set([...t,...e])]:pt(Object.create(null),Mf(t),Mf(e??{})):e}function AI(t,e){if(!t)return e;if(!e)return t;const n=pt(Object.create(null),t);for(const s in e)n[s]=Dt(t[s],e[s]);return n}function X_(){return{app:null,config:{isNativeTag:zE,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let CI=0;function bI(t,e){return function(s,r=null){re(s)||(s=pt({},s)),r!=null&&!Ve(r)&&(r=null);const i=X_(),o=new Set;let a=!1;const l=i.app={_uid:CI++,_component:s,_props:r,_container:null,_context:i,_instance:null,version:s0,get config(){return i.config},set config(c){},use(c,...u){return o.has(c)||(c&&re(c.install)?(o.add(c),c.install(l,...u)):re(c)&&(o.add(c),c(l,...u))),l},mixin(c){return i.mixins.includes(c)||i.mixins.push(c),l},component(c,u){return u?(i.components[c]=u,l):i.components[c]},directive(c,u){return u?(i.directives[c]=u,l):i.directives[c]},mount(c,u,h){if(!a){const d=bn(s,r);return d.appContext=i,u&&e?e(d,c):t(d,c,h),a=!0,l._container=c,c.__vue_app__=l,Nl(d.component)||d.component.proxy}},unmount(){a&&(t(null,l._container),delete l._container.__vue_app__)},provide(c,u){return i.provides[c]=u,l},runWithContext(c){Ma=l;try{return c()}finally{Ma=null}}};return l}}let Ma=null;function RI(t,e){if(it){let n=it.provides;const s=it.parent&&it.parent.provides;s===n&&(n=it.provides=Object.create(s)),n[t]=e}}function xi(t,e,n=!1){const s=it||jt;if(s||Ma){const r=s?s.parent==null?s.vnode.appContext&&s.vnode.appContext.provides:s.parent.provides:Ma._context.provides;if(r&&t in r)return r[t];if(arguments.length>1)return n&&re(e)?e.call(s&&s.proxy):e}}function SI(t,e,n,s=!1){const r={},i={};Na(i,Pl,1),t.propsDefaults=Object.create(null),J_(t,e,r,i);for(const o in t.propsOptions[0])o in r||(r[o]=void 0);n?t.props=s?r:MT(r):t.type.props?t.props=r:t.props=i,t.attrs=i}function kI(t,e,n,s){const{props:r,attrs:i,vnode:{patchFlag:o}}=t,a=we(r),[l]=t.propsOptions;let c=!1;if((s||o>0)&&!(o&16)){if(o&8){const u=t.vnode.dynamicProps;for(let h=0;h<u.length;h++){let d=u[h];if(Rl(t.emitsOptions,d))continue;const p=e[d];if(l)if(_e(i,d))p!==i[d]&&(i[d]=p,c=!0);else{const m=Nn(d);r[m]=wu(l,a,m,p,t,!1)}else p!==i[d]&&(i[d]=p,c=!0)}}}else{J_(t,e,r,i)&&(c=!0);let u;for(const h in a)(!e||!_e(e,h)&&((u=Gr(h))===h||!_e(e,u)))&&(l?n&&(n[h]!==void 0||n[u]!==void 0)&&(r[h]=wu(l,a,h,void 0,t,!0)):delete r[h]);if(i!==a)for(const h in i)(!e||!_e(e,h))&&(delete i[h],c=!0)}c&&zn(t,"set","$attrs")}function J_(t,e,n,s){const[r,i]=t.propsOptions;let o=!1,a;if(e)for(let l in e){if(ya(l))continue;const c=e[l];let u;r&&_e(r,u=Nn(l))?!i||!i.includes(u)?n[u]=c:(a||(a={}))[u]=c:Rl(t.emitsOptions,l)||(!(l in s)||c!==s[l])&&(s[l]=c,o=!0)}if(i){const l=we(n),c=a||De;for(let u=0;u<i.length;u++){const h=i[u];n[h]=wu(r,l,h,c[h],t,!_e(c,h))}}return o}function wu(t,e,n,s,r,i){const o=t[n];if(o!=null){const a=_e(o,"default");if(a&&s===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&re(l)){const{propsDefaults:c}=r;n in c?s=c[n]:(Mr(r),s=c[n]=l.call(null,e),$s())}else s=l}o[0]&&(i&&!a?s=!1:o[1]&&(s===""||s===Gr(n))&&(s=!0))}return s}function Z_(t,e,n=!1){const s=e.propsCache,r=s.get(t);if(r)return r;const i=t.props,o={},a=[];let l=!1;if(!re(t)){const u=h=>{l=!0;const[d,p]=Z_(h,e,!0);pt(o,d),p&&a.push(...p)};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!i&&!l)return Ve(t)&&s.set(t,Tr),Tr;if(z(i))for(let u=0;u<i.length;u++){const h=Nn(i[u]);Uf(h)&&(o[h]=De)}else if(i)for(const u in i){const h=Nn(u);if(Uf(h)){const d=i[u],p=o[h]=z(d)||re(d)?{type:d}:pt({},d);if(p){const m=jf(Boolean,p.type),_=jf(String,p.type);p[0]=m>-1,p[1]=_<0||m<_,(m>-1||_e(p,"default"))&&a.push(h)}}}const c=[o,a];return Ve(t)&&s.set(t,c),c}function Uf(t){return t[0]!=="$"}function Bf(t){const e=t&&t.toString().match(/^\s*(function|class) (\w+)/);return e?e[2]:t===null?"null":""}function $f(t,e){return Bf(t)===Bf(e)}function jf(t,e){return z(e)?e.findIndex(n=>$f(n,t)):re(e)&&$f(e,t)?0:-1}const em=t=>t[0]==="_"||t==="$stable",Vh=t=>z(t)?t.map(wn):[wn(t)],PI=(t,e,n)=>{if(e._n)return e;const s=GT((...r)=>Vh(e(...r)),n);return s._c=!1,s},tm=(t,e,n)=>{const s=t._ctx;for(const r in t){if(em(r))continue;const i=t[r];if(re(i))e[r]=PI(r,i,s);else if(i!=null){const o=Vh(i);e[r]=()=>o}}},nm=(t,e)=>{const n=Vh(e);t.slots.default=()=>n},NI=(t,e)=>{if(t.vnode.shapeFlag&32){const n=e._;n?(t.slots=we(e),Na(e,"_",n)):tm(e,t.slots={})}else t.slots={},e&&nm(t,e);Na(t.slots,Pl,1)},xI=(t,e,n)=>{const{vnode:s,slots:r}=t;let i=!0,o=De;if(s.shapeFlag&32){const a=e._;a?n&&a===1?i=!1:(pt(r,e),!n&&a===1&&delete r._):(i=!e.$stable,tm(e,r)),o=e}else e&&(nm(t,e),o={default:1});if(i)for(const a in r)!em(a)&&!(a in o)&&delete r[a]};function Eu(t,e,n,s,r=!1){if(z(t)){t.forEach((d,p)=>Eu(d,e&&(z(e)?e[p]:e),n,s,r));return}if(wa(s)&&!r)return;const i=s.shapeFlag&4?Nl(s.component)||s.component.proxy:s.el,o=r?null:i,{i:a,r:l}=t,c=e&&e.r,u=a.refs===De?a.refs={}:a.refs,h=a.setupState;if(c!=null&&c!==l&&(Xe(c)?(u[c]=null,_e(h,c)&&(h[c]=null)):It(c)&&(c.value=null)),re(l))hs(l,a,12,[o,u]);else{const d=Xe(l),p=It(l);if(d||p){const m=()=>{if(t.f){const _=d?_e(h,l)?h[l]:u[l]:l.value;r?z(_)&&Ih(_,i):z(_)?_.includes(i)||_.push(i):d?(u[l]=[i],_e(h,l)&&(h[l]=u[l])):(l.value=[i],t.k&&(u[t.k]=l.value))}else d?(u[l]=o,_e(h,l)&&(h[l]=o)):p&&(l.value=o,t.k&&(u[t.k]=o))};o?(m.id=-1,Lt(m,n)):m()}}}const Lt=eI;function DI(t){return OI(t)}function OI(t,e){const n=hu();n.__VUE__=!0;const{insert:s,remove:r,patchProp:i,createElement:o,createText:a,createComment:l,setText:c,setElementText:u,parentNode:h,nextSibling:d,setScopeId:p=cn,insertStaticContent:m}=t,_=(f,g,T,b=null,C=null,x=null,V=!1,N=null,O=!!g.dynamicChildren)=>{if(f===g)return;f&&!di(f,g)&&(b=cr(f),Nt(f,C,x,!0),f=null),g.patchFlag===-2&&(O=!1,g.dynamicChildren=null);const{type:P,ref:j,shapeFlag:B}=g;switch(P){case kl:E(f,g,T,b);break;case qs:F(f,g,T,b);break;case Ea:f==null&&v(g,T,b,V);break;case Qt:Ze(f,g,T,b,C,x,V,N,O);break;default:B&1?U(f,g,T,b,C,x,V,N,O):B&6?Pt(f,g,T,b,C,x,V,N,O):(B&64||B&128)&&P.process(f,g,T,b,C,x,V,N,O,ts)}j!=null&&C&&Eu(j,f&&f.ref,x,g||f,!g)},E=(f,g,T,b)=>{if(f==null)s(g.el=a(g.children),T,b);else{const C=g.el=f.el;g.children!==f.children&&c(C,g.children)}},F=(f,g,T,b)=>{f==null?s(g.el=l(g.children||""),T,b):g.el=f.el},v=(f,g,T,b)=>{[f.el,f.anchor]=m(f.children,g,T,b,f.el,f.anchor)},y=({el:f,anchor:g},T,b)=>{let C;for(;f&&f!==g;)C=d(f),s(f,T,b),f=C;s(g,T,b)},w=({el:f,anchor:g})=>{let T;for(;f&&f!==g;)T=d(f),r(f),f=T;r(g)},U=(f,g,T,b,C,x,V,N,O)=>{V=V||g.type==="svg",f==null?Q(g,T,b,C,x,V,N,O):pe(f,g,C,x,V,N,O)},Q=(f,g,T,b,C,x,V,N)=>{let O,P;const{type:j,props:B,shapeFlag:H,transition:Y,dirs:oe}=f;if(O=f.el=o(f.type,x,B&&B.is,B),H&8?u(O,f.children):H&16&&ce(f.children,O,null,b,C,x&&j!=="foreignObject",V,N),oe&&Rs(f,null,b,"created"),ie(O,f,f.scopeId,V,b),B){for(const ye in B)ye!=="value"&&!ya(ye)&&i(O,ye,null,B[ye],x,f.children,b,C,tn);"value"in B&&i(O,"value",null,B.value),(P=B.onVnodeBeforeMount)&&yn(P,b,f)}oe&&Rs(f,null,b,"beforeMount");const Ce=(!C||C&&!C.pendingBranch)&&Y&&!Y.persisted;Ce&&Y.beforeEnter(O),s(O,g,T),((P=B&&B.onVnodeMounted)||Ce||oe)&&Lt(()=>{P&&yn(P,b,f),Ce&&Y.enter(O),oe&&Rs(f,null,b,"mounted")},C)},ie=(f,g,T,b,C)=>{if(T&&p(f,T),b)for(let x=0;x<b.length;x++)p(f,b[x]);if(C){let x=C.subTree;if(g===x){const V=C.vnode;ie(f,V,V.scopeId,V.slotScopeIds,C.parent)}}},ce=(f,g,T,b,C,x,V,N,O=0)=>{for(let P=O;P<f.length;P++){const j=f[P]=N?rs(f[P]):wn(f[P]);_(null,j,g,T,b,C,x,V,N)}},pe=(f,g,T,b,C,x,V)=>{const N=g.el=f.el;let{patchFlag:O,dynamicChildren:P,dirs:j}=g;O|=f.patchFlag&16;const B=f.props||De,H=g.props||De;let Y;T&&Ss(T,!1),(Y=H.onVnodeBeforeUpdate)&&yn(Y,T,g,f),j&&Rs(g,f,T,"beforeUpdate"),T&&Ss(T,!0);const oe=C&&g.type!=="foreignObject";if(P?Pe(f.dynamicChildren,P,N,T,b,oe,x):V||me(f,g,N,null,T,b,oe,x,!1),O>0){if(O&16)$e(N,g,B,H,T,b,C);else if(O&2&&B.class!==H.class&&i(N,"class",null,H.class,C),O&4&&i(N,"style",B.style,H.style,C),O&8){const Ce=g.dynamicProps;for(let ye=0;ye<Ce.length;ye++){const je=Ce[ye],$t=B[je],D=H[je];(D!==$t||je==="value")&&i(N,je,$t,D,C,f.children,T,b,tn)}}O&1&&f.children!==g.children&&u(N,g.children)}else!V&&P==null&&$e(N,g,B,H,T,b,C);((Y=H.onVnodeUpdated)||j)&&Lt(()=>{Y&&yn(Y,T,g,f),j&&Rs(g,f,T,"updated")},b)},Pe=(f,g,T,b,C,x,V)=>{for(let N=0;N<g.length;N++){const O=f[N],P=g[N],j=O.el&&(O.type===Qt||!di(O,P)||O.shapeFlag&70)?h(O.el):T;_(O,P,j,null,b,C,x,V,!0)}},$e=(f,g,T,b,C,x,V)=>{if(T!==b){if(T!==De)for(const N in T)!ya(N)&&!(N in b)&&i(f,N,T[N],null,V,g.children,C,x,tn);for(const N in b){if(ya(N))continue;const O=b[N],P=T[N];O!==P&&N!=="value"&&i(f,N,P,O,V,g.children,C,x,tn)}"value"in b&&i(f,"value",T.value,b.value)}},Ze=(f,g,T,b,C,x,V,N,O)=>{const P=g.el=f?f.el:a(""),j=g.anchor=f?f.anchor:a("");let{patchFlag:B,dynamicChildren:H,slotScopeIds:Y}=g;Y&&(N=N?N.concat(Y):Y),f==null?(s(P,T,b),s(j,T,b),ce(g.children,T,j,C,x,V,N,O)):B>0&&B&64&&H&&f.dynamicChildren?(Pe(f.dynamicChildren,H,T,C,x,V,N),(g.key!=null||C&&g===C.subTree)&&sm(f,g,!0)):me(f,g,T,j,C,x,V,N,O)},Pt=(f,g,T,b,C,x,V,N,O)=>{g.slotScopeIds=N,f==null?g.shapeFlag&512?C.ctx.activate(g,T,b,V,O):et(g,T,b,C,x,V,O):Ge(f,g,O)},et=(f,g,T,b,C,x,V)=>{const N=f.component=KI(f,b,C);if(z_(f)&&(N.ctx.renderer=ts),GI(N),N.asyncDep){if(C&&C.registerDep(N,Ae),!f.el){const O=N.subTree=bn(qs);F(null,O,g,T)}return}Ae(N,f,g,T,C,x,V)},Ge=(f,g,T)=>{const b=g.component=f.component;if(XT(f,g,T))if(b.asyncDep&&!b.asyncResolved){G(b,g,T);return}else b.next=g,HT(b.update),b.update();else g.el=f.el,b.vnode=g},Ae=(f,g,T,b,C,x,V)=>{const N=()=>{if(f.isMounted){let{next:j,bu:B,u:H,parent:Y,vnode:oe}=f,Ce=j,ye;Ss(f,!1),j?(j.el=oe.el,G(f,j,V)):j=oe,B&&va(B),(ye=j.props&&j.props.onVnodeBeforeUpdate)&&yn(ye,Y,j,oe),Ss(f,!0);const je=Ac(f),$t=f.subTree;f.subTree=je,_($t,je,h($t.el),cr($t),f,C,x),j.el=je.el,Ce===null&&JT(f,je.el),H&&Lt(H,C),(ye=j.props&&j.props.onVnodeUpdated)&&Lt(()=>yn(ye,Y,j,oe),C)}else{let j;const{el:B,props:H}=g,{bm:Y,m:oe,parent:Ce}=f,ye=wa(g);if(Ss(f,!1),Y&&va(Y),!ye&&(j=H&&H.onVnodeBeforeMount)&&yn(j,Ce,g),Ss(f,!0),B&&hi){const je=()=>{f.subTree=Ac(f),hi(B,f.subTree,f,C,null)};ye?g.type.__asyncLoader().then(()=>!f.isUnmounted&&je()):je()}else{const je=f.subTree=Ac(f);_(null,je,T,b,f,C,x),g.el=je.el}if(oe&&Lt(oe,C),!ye&&(j=H&&H.onVnodeMounted)){const je=g;Lt(()=>yn(j,Ce,je),C)}(g.shapeFlag&256||Ce&&wa(Ce.vnode)&&Ce.vnode.shapeFlag&256)&&f.a&&Lt(f.a,C),f.isMounted=!0,g=T=b=null}},O=f.effect=new Rh(N,()=>Mh(P),f.scope),P=f.update=()=>O.run();P.id=f.uid,Ss(f,!0),P()},G=(f,g,T)=>{g.component=f;const b=f.vnode.props;f.vnode=g,f.next=null,kI(f,g.props,b,T),xI(f,g.children,T),Qr(),Nf(),Yr()},me=(f,g,T,b,C,x,V,N,O=!1)=>{const P=f&&f.children,j=f?f.shapeFlag:0,B=g.children,{patchFlag:H,shapeFlag:Y}=g;if(H>0){if(H&128){mn(P,B,T,b,C,x,V,N,O);return}else if(H&256){en(P,B,T,b,C,x,V,N,O);return}}Y&8?(j&16&&tn(P,C,x),B!==P&&u(T,B)):j&16?Y&16?mn(P,B,T,b,C,x,V,N,O):tn(P,C,x,!0):(j&8&&u(T,""),Y&16&&ce(B,T,b,C,x,V,N,O))},en=(f,g,T,b,C,x,V,N,O)=>{f=f||Tr,g=g||Tr;const P=f.length,j=g.length,B=Math.min(P,j);let H;for(H=0;H<B;H++){const Y=g[H]=O?rs(g[H]):wn(g[H]);_(f[H],Y,T,null,C,x,V,N,O)}P>j?tn(f,C,x,!0,!1,B):ce(g,T,b,C,x,V,N,O,B)},mn=(f,g,T,b,C,x,V,N,O)=>{let P=0;const j=g.length;let B=f.length-1,H=j-1;for(;P<=B&&P<=H;){const Y=f[P],oe=g[P]=O?rs(g[P]):wn(g[P]);if(di(Y,oe))_(Y,oe,T,null,C,x,V,N,O);else break;P++}for(;P<=B&&P<=H;){const Y=f[B],oe=g[H]=O?rs(g[H]):wn(g[H]);if(di(Y,oe))_(Y,oe,T,null,C,x,V,N,O);else break;B--,H--}if(P>B){if(P<=H){const Y=H+1,oe=Y<j?g[Y].el:b;for(;P<=H;)_(null,g[P]=O?rs(g[P]):wn(g[P]),T,oe,C,x,V,N,O),P++}}else if(P>H)for(;P<=B;)Nt(f[P],C,x,!0),P++;else{const Y=P,oe=P,Ce=new Map;for(P=oe;P<=H;P++){const se=g[P]=O?rs(g[P]):wn(g[P]);se.key!=null&&Ce.set(se.key,P)}let ye,je=0;const $t=H-oe+1;let D=!1,I=0;const Z=new Array($t);for(P=0;P<$t;P++)Z[P]=0;for(P=Y;P<=B;P++){const se=f[P];if(je>=$t){Nt(se,C,x,!0);continue}let Se;if(se.key!=null)Se=Ce.get(se.key);else for(ye=oe;ye<=H;ye++)if(Z[ye-oe]===0&&di(se,g[ye])){Se=ye;break}Se===void 0?Nt(se,C,x,!0):(Z[Se-oe]=P+1,Se>=I?I=Se:D=!0,_(se,g[Se],T,null,C,x,V,N,O),je++)}const S=D?MI(Z):Tr;for(ye=S.length-1,P=$t-1;P>=0;P--){const se=oe+P,Se=g[se],Tc=se+1<j?g[se+1].el:b;Z[P]===0?_(null,Se,T,Tc,C,x,V,N,O):D&&(ye<0||P!==S[ye]?gt(Se,T,Tc,2):ye--)}}},gt=(f,g,T,b,C=null)=>{const{el:x,type:V,transition:N,children:O,shapeFlag:P}=f;if(P&6){gt(f.component.subTree,g,T,b);return}if(P&128){f.suspense.move(g,T,b);return}if(P&64){V.move(f,g,T,ts);return}if(V===Qt){s(x,g,T);for(let B=0;B<O.length;B++)gt(O[B],g,T,b);s(f.anchor,g,T);return}if(V===Ea){y(f,g,T);return}if(b!==2&&P&1&&N)if(b===0)N.beforeEnter(x),s(x,g,T),Lt(()=>N.enter(x),C);else{const{leave:B,delayLeave:H,afterLeave:Y}=N,oe=()=>s(x,g,T),Ce=()=>{B(x,()=>{oe(),Y&&Y()})};H?H(x,oe,Ce):Ce()}else s(x,g,T)},Nt=(f,g,T,b=!1,C=!1)=>{const{type:x,props:V,ref:N,children:O,dynamicChildren:P,shapeFlag:j,patchFlag:B,dirs:H}=f;if(N!=null&&Eu(N,null,T,f,!0),j&256){g.ctx.deactivate(f);return}const Y=j&1&&H,oe=!wa(f);let Ce;if(oe&&(Ce=V&&V.onVnodeBeforeUnmount)&&yn(Ce,g,f),j&6)Ec(f.component,T,b);else{if(j&128){f.suspense.unmount(T,b);return}Y&&Rs(f,null,g,"beforeUnmount"),j&64?f.type.remove(f,g,T,C,ts,b):P&&(x!==Qt||B>0&&B&64)?tn(P,g,T,!1,!0):(x===Qt&&B&384||!C&&j&16)&&tn(O,g,T),b&&zo(f)}(oe&&(Ce=V&&V.onVnodeUnmounted)||Y)&&Lt(()=>{Ce&&yn(Ce,g,f),Y&&Rs(f,null,g,"unmounted")},T)},zo=f=>{const{type:g,el:T,anchor:b,transition:C}=f;if(g===Qt){wc(T,b);return}if(g===Ea){w(f);return}const x=()=>{r(T),C&&!C.persisted&&C.afterLeave&&C.afterLeave()};if(f.shapeFlag&1&&C&&!C.persisted){const{leave:V,delayLeave:N}=C,O=()=>V(T,x);N?N(f.el,x,O):O()}else x()},wc=(f,g)=>{let T;for(;f!==g;)T=d(f),r(f),f=T;r(g)},Ec=(f,g,T)=>{const{bum:b,scope:C,update:x,subTree:V,um:N}=f;b&&va(b),C.stop(),x&&(x.active=!1,Nt(V,f,g,T)),N&&Lt(N,g),Lt(()=>{f.isUnmounted=!0},g),g&&g.pendingBranch&&!g.isUnmounted&&f.asyncDep&&!f.asyncResolved&&f.suspenseId===g.pendingId&&(g.deps--,g.deps===0&&g.resolve())},tn=(f,g,T,b=!1,C=!1,x=0)=>{for(let V=x;V<f.length;V++)Nt(f[V],g,T,b,C)},cr=f=>f.shapeFlag&6?cr(f.component.subTree):f.shapeFlag&128?f.suspense.next():d(f.anchor||f.el),ci=(f,g,T)=>{f==null?g._vnode&&Nt(g._vnode,null,null,!0):_(g._vnode||null,f,g,null,null,null,T),Nf(),$_(),g._vnode=f},ts={p:_,um:Nt,m:gt,r:zo,mt:et,mc:ce,pc:me,pbc:Pe,n:cr,o:t};let ui,hi;return e&&([ui,hi]=e(ts)),{render:ci,hydrate:ui,createApp:bI(ci,ui)}}function Ss({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function sm(t,e,n=!1){const s=t.children,r=e.children;if(z(s)&&z(r))for(let i=0;i<s.length;i++){const o=s[i];let a=r[i];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=r[i]=rs(r[i]),a.el=o.el),n||sm(o,a)),a.type===kl&&(a.el=o.el)}}function MI(t){const e=t.slice(),n=[0];let s,r,i,o,a;const l=t.length;for(s=0;s<l;s++){const c=t[s];if(c!==0){if(r=n[n.length-1],t[r]<c){e[s]=r,n.push(s);continue}for(i=0,o=n.length-1;i<o;)a=i+o>>1,t[n[a]]<c?i=a+1:o=a;c<t[n[i]]&&(i>0&&(e[s]=n[i-1]),n[i]=s)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=e[o];return n}const LI=t=>t.__isTeleport,Qt=Symbol.for("v-fgt"),kl=Symbol.for("v-txt"),qs=Symbol.for("v-cmt"),Ea=Symbol.for("v-stc"),Di=[];let on=null;function Te(t=!1){Di.push(on=t?null:[])}function VI(){Di.pop(),on=Di[Di.length-1]||null}let Qi=1;function Wf(t){Qi+=t}function rm(t){return t.dynamicChildren=Qi>0?on||Tr:null,VI(),Qi>0&&on&&on.push(t),t}function be(t,e,n,s,r,i){return rm(A(t,e,n,s,r,i,!0))}function FI(t,e,n,s,r){return rm(bn(t,e,n,s,r,!0))}function UI(t){return t?t.__v_isVNode===!0:!1}function di(t,e){return t.type===e.type&&t.key===e.key}const Pl="__vInternal",im=({key:t})=>t??null,Ta=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?Xe(t)||It(t)||re(t)?{i:jt,r:t,k:e,f:!!n}:t:null);function A(t,e=null,n=null,s=0,r=null,i=t===Qt?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&im(e),ref:e&&Ta(e),scopeId:H_,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:s,dynamicProps:r,dynamicChildren:null,appContext:null,ctx:jt};return a?(Fh(l,n),i&128&&t.normalize(l)):n&&(l.shapeFlag|=Xe(n)?8:16),Qi>0&&!o&&on&&(l.patchFlag>0||i&6)&&l.patchFlag!==32&&on.push(l),l}const bn=BI;function BI(t,e=null,n=null,s=0,r=null,i=!1){if((!t||t===_I)&&(t=qs),UI(t)){const a=Or(t,e,!0);return n&&Fh(a,n),Qi>0&&!i&&on&&(a.shapeFlag&6?on[on.indexOf(t)]=a:on.push(a)),a.patchFlag|=-2,a}if(ZI(t)&&(t=t.__vccOpts),e){e=$I(e);let{class:a,style:l}=e;a&&!Xe(a)&&(e.class=Ch(a)),Ve(l)&&(O_(l)&&!z(l)&&(l=pt({},l)),e.style=Os(l))}const o=Xe(t)?1:ZT(t)?128:LI(t)?64:Ve(t)?4:re(t)?2:0;return A(t,e,n,s,r,o,i,!0)}function $I(t){return t?O_(t)||Pl in t?pt({},t):t:null}function Or(t,e,n=!1){const{props:s,ref:r,patchFlag:i,children:o}=t,a=e?WI(s||{},e):s;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:a,key:a&&im(a),ref:e&&e.ref?n&&r?z(r)?r.concat(Ta(e)):[r,Ta(e)]:Ta(e):r,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:o,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==Qt?i===-1?16:i|16:i,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&Or(t.ssContent),ssFallback:t.ssFallback&&Or(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce}}function Tu(t=" ",e=0){return bn(kl,null,t,e)}function jI(t,e){const n=bn(Ea,null,t);return n.staticCount=e,n}function ct(t="",e=!1){return e?(Te(),FI(qs,null,t)):bn(qs,null,t)}function wn(t){return t==null||typeof t=="boolean"?bn(qs):z(t)?bn(Qt,null,t.slice()):typeof t=="object"?rs(t):bn(kl,null,String(t))}function rs(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:Or(t)}function Fh(t,e){let n=0;const{shapeFlag:s}=t;if(e==null)e=null;else if(z(e))n=16;else if(typeof e=="object")if(s&65){const r=e.default;r&&(r._c&&(r._d=!1),Fh(t,r()),r._c&&(r._d=!0));return}else{n=32;const r=e._;!r&&!(Pl in e)?e._ctx=jt:r===3&&jt&&(jt.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else re(e)?(e={default:e,_ctx:jt},n=32):(e=String(e),s&64?(n=16,e=[Tu(e)]):n=8);t.children=e,t.shapeFlag|=n}function WI(...t){const e={};for(let n=0;n<t.length;n++){const s=t[n];for(const r in s)if(r==="class")e.class!==s.class&&(e.class=Ch([e.class,s.class]));else if(r==="style")e.style=Os([e.style,s.style]);else if(wl(r)){const i=e[r],o=s[r];o&&i!==o&&!(z(i)&&i.includes(o))&&(e[r]=i?[].concat(i,o):o)}else r!==""&&(e[r]=s[r])}return e}function yn(t,e,n,s=null){un(t,e,7,[n,s])}const HI=X_();let qI=0;function KI(t,e,n){const s=t.type,r=(e?e.appContext:t.appContext)||HI,i={uid:qI++,vnode:t,type:s,parent:e,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,scope:new T_(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(r.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Z_(s,r),emitsOptions:W_(s,r),emit:null,emitted:null,propsDefaults:De,inheritAttrs:s.inheritAttrs,ctx:De,data:De,props:De,attrs:De,slots:De,refs:De,setupState:De,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=zT.bind(null,i),t.ce&&t.ce(i),i}let it=null;const zI=()=>it||jt;let Uh,ur,Hf="__VUE_INSTANCE_SETTERS__";(ur=hu()[Hf])||(ur=hu()[Hf]=[]),ur.push(t=>it=t),Uh=t=>{ur.length>1?ur.forEach(e=>e(t)):ur[0](t)};const Mr=t=>{Uh(t),t.scope.on()},$s=()=>{it&&it.scope.off(),Uh(null)};function om(t){return t.vnode.shapeFlag&4}let Yi=!1;function GI(t,e=!1){Yi=e;const{props:n,children:s}=t.vnode,r=om(t);SI(t,n,r,e),NI(t,s);const i=r?QI(t,e):void 0;return Yi=!1,i}function QI(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=M_(new Proxy(t.ctx,vI));const{setup:s}=n;if(s){const r=t.setupContext=s.length>1?XI(t):null;Mr(t),Qr();const i=hs(s,t,0,[t.props,r]);if(Yr(),$s(),__(i)){if(i.then($s,$s),e)return i.then(o=>{qf(t,o,e)}).catch(o=>{bl(o,t,0)});t.asyncDep=i}else qf(t,i,e)}else am(t,e)}function qf(t,e,n){re(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:Ve(e)&&(t.setupState=F_(e)),am(t,n)}let Kf;function am(t,e,n){const s=t.type;if(!t.render){if(!e&&Kf&&!s.render){const r=s.template||Lh(t).template;if(r){const{isCustomElement:i,compilerOptions:o}=t.appContext.config,{delimiters:a,compilerOptions:l}=s,c=pt(pt({isCustomElement:i,delimiters:a},o),l);s.render=Kf(r,c)}}t.render=s.render||cn}Mr(t),Qr(),wI(t),Yr(),$s()}function YI(t){return t.attrsProxy||(t.attrsProxy=new Proxy(t.attrs,{get(e,n){return Bt(t,"get","$attrs"),e[n]}}))}function XI(t){const e=n=>{t.exposed=n||{}};return{get attrs(){return YI(t)},slots:t.slots,emit:t.emit,expose:e}}function Nl(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(F_(M_(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in Ni)return Ni[n](t)},has(e,n){return n in e||n in Ni}}))}function JI(t,e=!0){return re(t)?t.displayName||t.name:t.name||e&&t.__name}function ZI(t){return re(t)&&"__vccOpts"in t}const e0=(t,e)=>BT(t,e,Yi),t0=Symbol.for("v-scx"),n0=()=>xi(t0),s0="3.3.4",r0="http://www.w3.org/2000/svg",xs=typeof document<"u"?document:null,zf=xs&&xs.createElement("template"),i0={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,s)=>{const r=e?xs.createElementNS(r0,t):xs.createElement(t,n?{is:n}:void 0);return t==="select"&&s&&s.multiple!=null&&r.setAttribute("multiple",s.multiple),r},createText:t=>xs.createTextNode(t),createComment:t=>xs.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>xs.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,s,r,i){const o=n?n.previousSibling:e.lastChild;if(r&&(r===i||r.nextSibling))for(;e.insertBefore(r.cloneNode(!0),n),!(r===i||!(r=r.nextSibling)););else{zf.innerHTML=s?`<svg>${t}</svg>`:t;const a=zf.content;if(s){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}};function o0(t,e,n){const s=t._vtc;s&&(e=(e?[e,...s]:[...s]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}function a0(t,e,n){const s=t.style,r=Xe(n);if(n&&!r){if(e&&!Xe(e))for(const i in e)n[i]==null&&Iu(s,i,"");for(const i in n)Iu(s,i,n[i])}else{const i=s.display;r?e!==n&&(s.cssText=n):e&&t.removeAttribute("style"),"_vod"in t&&(s.display=i)}}const Gf=/\s*!important$/;function Iu(t,e,n){if(z(n))n.forEach(s=>Iu(t,e,s));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const s=l0(t,e);Gf.test(n)?t.setProperty(Gr(s),n.replace(Gf,""),"important"):t[s]=n}}const Qf=["Webkit","Moz","ms"],Rc={};function l0(t,e){const n=Rc[e];if(n)return n;let s=Nn(e);if(s!=="filter"&&s in t)return Rc[e]=s;s=Il(s);for(let r=0;r<Qf.length;r++){const i=Qf[r]+s;if(i in t)return Rc[e]=i}return e}const Yf="http://www.w3.org/1999/xlink";function c0(t,e,n,s,r){if(s&&e.startsWith("xlink:"))n==null?t.removeAttributeNS(Yf,e.slice(6,e.length)):t.setAttributeNS(Yf,e,n);else{const i=rT(e);n==null||i&&!v_(n)?t.removeAttribute(e):t.setAttribute(e,i?"":n)}}function u0(t,e,n,s,r,i,o){if(e==="innerHTML"||e==="textContent"){s&&o(s,r,i),t[e]=n??"";return}const a=t.tagName;if(e==="value"&&a!=="PROGRESS"&&!a.includes("-")){t._value=n;const c=a==="OPTION"?t.getAttribute("value"):t.value,u=n??"";c!==u&&(t.value=u),n==null&&t.removeAttribute(e);return}let l=!1;if(n===""||n==null){const c=typeof t[e];c==="boolean"?n=v_(n):n==null&&c==="string"?(n="",l=!0):c==="number"&&(n=0,l=!0)}try{t[e]=n}catch{}l&&t.removeAttribute(e)}function Ds(t,e,n,s){t.addEventListener(e,n,s)}function h0(t,e,n,s){t.removeEventListener(e,n,s)}function d0(t,e,n,s,r=null){const i=t._vei||(t._vei={}),o=i[e];if(s&&o)o.value=s;else{const[a,l]=f0(e);if(s){const c=i[e]=_0(s,r);Ds(t,a,c,l)}else o&&(h0(t,a,o,l),i[e]=void 0)}}const Xf=/(?:Once|Passive|Capture)$/;function f0(t){let e;if(Xf.test(t)){e={};let s;for(;s=t.match(Xf);)t=t.slice(0,t.length-s[0].length),e[s[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):Gr(t.slice(2)),e]}let Sc=0;const p0=Promise.resolve(),g0=()=>Sc||(p0.then(()=>Sc=0),Sc=Date.now());function _0(t,e){const n=s=>{if(!s._vts)s._vts=Date.now();else if(s._vts<=n.attached)return;un(m0(s,n.value),e,5,[s])};return n.value=t,n.attached=g0(),n}function m0(t,e){if(z(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(s=>r=>!r._stopped&&s&&s(r))}else return e}const Jf=/^on[a-z]/,y0=(t,e,n,s,r=!1,i,o,a,l)=>{e==="class"?o0(t,s,r):e==="style"?a0(t,n,s):wl(e)?Th(e)||d0(t,e,n,s,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):v0(t,e,s,r))?u0(t,e,s,i,o,a,l):(e==="true-value"?t._trueValue=s:e==="false-value"&&(t._falseValue=s),c0(t,e,s,r))};function v0(t,e,n,s){return s?!!(e==="innerHTML"||e==="textContent"||e in t&&Jf.test(e)&&re(n)):e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA"||Jf.test(e)&&Xe(n)?!1:e in t}const La=t=>{const e=t.props["onUpdate:modelValue"]||!1;return z(e)?n=>va(e,n):e};function w0(t){t.target.composing=!0}function Zf(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const xt={created(t,{modifiers:{lazy:e,trim:n,number:s}},r){t._assign=La(r);const i=s||r.props&&r.props.type==="number";Ds(t,e?"change":"input",o=>{if(o.target.composing)return;let a=t.value;n&&(a=a.trim()),i&&(a=uu(a)),t._assign(a)}),n&&Ds(t,"change",()=>{t.value=t.value.trim()}),e||(Ds(t,"compositionstart",w0),Ds(t,"compositionend",Zf),Ds(t,"change",Zf))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,modifiers:{lazy:n,trim:s,number:r}},i){if(t._assign=La(i),t.composing||document.activeElement===t&&t.type!=="range"&&(n||s&&t.value.trim()===e||(r||t.type==="number")&&uu(t.value)===e))return;const o=e??"";t.value!==o&&(t.value=o)}},ea={deep:!0,created(t,e,n){t._assign=La(n),Ds(t,"change",()=>{const s=t._modelValue,r=E0(t),i=t.checked,o=t._assign;if(z(s)){const a=w_(s,r),l=a!==-1;if(i&&!l)o(s.concat(r));else if(!i&&l){const c=[...s];c.splice(a,1),o(c)}}else if(El(s)){const a=new Set(s);i?a.add(r):a.delete(r),o(a)}else o(lm(t,i))})},mounted:ep,beforeUpdate(t,e,n){t._assign=La(n),ep(t,e,n)}};function ep(t,{value:e,oldValue:n},s){t._modelValue=e,z(e)?t.checked=w_(e,s.props.value)>-1:El(e)?t.checked=e.has(s.props.value):e!==n&&(t.checked=Al(e,lm(t,!0)))}function E0(t){return"_value"in t?t._value:t.value}function lm(t,e){const n=e?"_trueValue":"_falseValue";return n in t?t[n]:e}const T0=pt({patchProp:y0},i0);let tp;function I0(){return tp||(tp=DI(T0))}const A0=(...t)=>{const e=I0().createApp(...t),{mount:n}=e;return e.mount=s=>{const r=C0(s);if(!r)return;const i=e._component;!re(i)&&!i.render&&!i.template&&(i.template=r.innerHTML),r.innerHTML="";const o=n(r,!1,r instanceof SVGElement);return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),o},e};function C0(t){return Xe(t)?document.querySelector(t):t}const Bh="/wSpaRe/assets/cancel-58c7ea43.svg",b0="/wSpaRe/assets/yes-6050e699.svg";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cm={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const M=function(t,e){if(!t)throw Xr(e)},Xr=function(t){return new Error("Firebase Database ("+cm.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const um=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let r=t.charCodeAt(s);r<128?e[n++]=r:r<2048?(e[n++]=r>>6|192,e[n++]=r&63|128):(r&64512)===55296&&s+1<t.length&&(t.charCodeAt(s+1)&64512)===56320?(r=65536+((r&1023)<<10)+(t.charCodeAt(++s)&1023),e[n++]=r>>18|240,e[n++]=r>>12&63|128,e[n++]=r>>6&63|128,e[n++]=r&63|128):(e[n++]=r>>12|224,e[n++]=r>>6&63|128,e[n++]=r&63|128)}return e},R0=function(t){const e=[];let n=0,s=0;for(;n<t.length;){const r=t[n++];if(r<128)e[s++]=String.fromCharCode(r);else if(r>191&&r<224){const i=t[n++];e[s++]=String.fromCharCode((r&31)<<6|i&63)}else if(r>239&&r<365){const i=t[n++],o=t[n++],a=t[n++],l=((r&7)<<18|(i&63)<<12|(o&63)<<6|a&63)-65536;e[s++]=String.fromCharCode(55296+(l>>10)),e[s++]=String.fromCharCode(56320+(l&1023))}else{const i=t[n++],o=t[n++];e[s++]=String.fromCharCode((r&15)<<12|(i&63)<<6|o&63)}}return e.join("")},xl={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let r=0;r<t.length;r+=3){const i=t[r],o=r+1<t.length,a=o?t[r+1]:0,l=r+2<t.length,c=l?t[r+2]:0,u=i>>2,h=(i&3)<<4|a>>4;let d=(a&15)<<2|c>>6,p=c&63;l||(p=64,o||(d=64)),s.push(n[u],n[h],n[d],n[p])}return s.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(um(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):R0(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let r=0;r<t.length;){const i=n[t.charAt(r++)],a=r<t.length?n[t.charAt(r)]:0;++r;const c=r<t.length?n[t.charAt(r)]:64;++r;const h=r<t.length?n[t.charAt(r)]:64;if(++r,i==null||a==null||c==null||h==null)throw new S0;const d=i<<2|a>>4;if(s.push(d),c!==64){const p=a<<4&240|c>>2;if(s.push(p),h!==64){const m=c<<6&192|h;s.push(m)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class S0 extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const hm=function(t){const e=um(t);return xl.encodeByteArray(e,!0)},Va=function(t){return hm(t).replace(/\./g,"")},Fa=function(t){try{return xl.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function k0(t){return dm(void 0,t)}function dm(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!P0(n)||(t[n]=dm(t[n],e[n]));return t}function P0(t){return t!=="__proto__"}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function N0(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const x0=()=>N0().__FIREBASE_DEFAULTS__,D0=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},O0=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Fa(t[1]);return e&&JSON.parse(e)},$h=()=>{try{return x0()||D0()||O0()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},fm=t=>{var e,n;return(n=(e=$h())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},M0=t=>{const e=fm(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),s]:[e.substring(0,n),s]},pm=()=>{var t;return(t=$h())===null||t===void 0?void 0:t.config},gm=t=>{var e;return(e=$h())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xi{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,s)=>{n?this.reject(n):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,s))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function L0(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},s=e||"demo-project",r=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${s}`,aud:s,iat:r,exp:r+3600,auth_time:r,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},t),a="";return[Va(JSON.stringify(n)),Va(JSON.stringify(o)),a].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function St(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function jh(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(St())}function V0(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function _m(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function F0(){const t=St();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function mm(){return cm.NODE_ADMIN===!0}function ym(){try{return typeof indexedDB=="object"}catch{return!1}}function U0(){return new Promise((t,e)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",r=self.indexedDB.open(s);r.onsuccess=()=>{r.result.close(),n||self.indexedDB.deleteDatabase(s),t(!0)},r.onupgradeneeded=()=>{n=!1},r.onerror=()=>{var i;e(((i=r.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const B0="FirebaseError";class Vn extends Error{constructor(e,n,s){super(n),this.code=e,this.customData=s,this.name=B0,Object.setPrototypeOf(this,Vn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Jr.prototype.create)}}class Jr{constructor(e,n,s){this.service=e,this.serviceName=n,this.errors=s}create(e,...n){const s=n[0]||{},r=`${this.service}/${e}`,i=this.errors[e],o=i?$0(i,s):"Error",a=`${this.serviceName}: ${o} (${r}).`;return new Vn(r,a,s)}}function $0(t,e){return t.replace(j0,(n,s)=>{const r=e[s];return r!=null?String(r):`<${s}?>`})}const j0=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ji(t){return JSON.parse(t)}function dt(t){return JSON.stringify(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vm=function(t){let e={},n={},s={},r="";try{const i=t.split(".");e=Ji(Fa(i[0])||""),n=Ji(Fa(i[1])||""),r=i[2],s=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:s,signature:r}},W0=function(t){const e=vm(t),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},H0=function(t){const e=vm(t).claims;return typeof e=="object"&&e.admin===!0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zn(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function Lr(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function Au(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Ua(t,e,n){const s={};for(const r in t)Object.prototype.hasOwnProperty.call(t,r)&&(s[r]=e.call(n,t[r],r,t));return s}function Ba(t,e){if(t===e)return!0;const n=Object.keys(t),s=Object.keys(e);for(const r of n){if(!s.includes(r))return!1;const i=t[r],o=e[r];if(np(i)&&np(o)){if(!Ba(i,o))return!1}else if(i!==o)return!1}for(const r of s)if(!n.includes(r))return!1;return!0}function np(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zr(t){const e=[];for(const[n,s]of Object.entries(t))Array.isArray(s)?s.forEach(r=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(r))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}function Ti(t){const e={};return t.replace(/^\?/,"").split("&").forEach(s=>{if(s){const[r,i]=s.split("=");e[decodeURIComponent(r)]=decodeURIComponent(i)}}),e}function Ii(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class q0{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const s=this.W_;if(typeof e=="string")for(let h=0;h<16;h++)s[h]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let h=0;h<16;h++)s[h]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let h=16;h<80;h++){const d=s[h-3]^s[h-8]^s[h-14]^s[h-16];s[h]=(d<<1|d>>>31)&4294967295}let r=this.chain_[0],i=this.chain_[1],o=this.chain_[2],a=this.chain_[3],l=this.chain_[4],c,u;for(let h=0;h<80;h++){h<40?h<20?(c=a^i&(o^a),u=1518500249):(c=i^o^a,u=1859775393):h<60?(c=i&o|a&(i|o),u=2400959708):(c=i^o^a,u=3395469782);const d=(r<<5|r>>>27)+c+l+u+s[h]&4294967295;l=a,a=o,o=(i<<30|i>>>2)&4294967295,i=r,r=d}this.chain_[0]=this.chain_[0]+r&4294967295,this.chain_[1]=this.chain_[1]+i&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+a&4294967295,this.chain_[4]=this.chain_[4]+l&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const s=n-this.blockSize;let r=0;const i=this.buf_;let o=this.inbuf_;for(;r<n;){if(o===0)for(;r<=s;)this.compress_(e,r),r+=this.blockSize;if(typeof e=="string"){for(;r<n;)if(i[o]=e.charCodeAt(r),++o,++r,o===this.blockSize){this.compress_(i),o=0;break}}else for(;r<n;)if(i[o]=e[r],++o,++r,o===this.blockSize){this.compress_(i),o=0;break}}this.inbuf_=o,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let r=this.blockSize-1;r>=56;r--)this.buf_[r]=n&255,n/=256;this.compress_(this.buf_);let s=0;for(let r=0;r<5;r++)for(let i=24;i>=0;i-=8)e[s]=this.chain_[r]>>i&255,++s;return e}}function K0(t,e){const n=new z0(t,e);return n.subscribe.bind(n)}class z0{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,s){let r;if(e===void 0&&n===void 0&&s===void 0)throw new Error("Missing Observer.");G0(e,["next","error","complete"])?r=e:r={next:e,error:n,complete:s},r.next===void 0&&(r.next=kc),r.error===void 0&&(r.error=kc),r.complete===void 0&&(r.complete=kc);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?r.error(this.finalError):r.complete()}catch{}}),this.observers.push(r),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function G0(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function kc(){}function Q0(t,e){return`${t} failed: ${e} argument `}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Y0=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let r=t.charCodeAt(s);if(r>=55296&&r<=56319){const i=r-55296;s++,M(s<t.length,"Surrogate pair missing trail surrogate.");const o=t.charCodeAt(s)-56320;r=65536+(i<<10)+o}r<128?e[n++]=r:r<2048?(e[n++]=r>>6|192,e[n++]=r&63|128):r<65536?(e[n++]=r>>12|224,e[n++]=r>>6&63|128,e[n++]=r&63|128):(e[n++]=r>>18|240,e[n++]=r>>12&63|128,e[n++]=r>>6&63|128,e[n++]=r&63|128)}return e},Dl=function(t){let e=0;for(let n=0;n<t.length;n++){const s=t.charCodeAt(n);s<128?e++:s<2048?e+=2:s>=55296&&s<=56319?(e+=4,n++):e+=3}return e};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Je(t){return t&&t._delegate?t._delegate:t}class dn{constructor(e,n,s){this.name=e,this.instanceFactory=n,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ks="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class X0{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const s=new Xi;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const r=this.getOrInitializeService({instanceIdentifier:n});r&&s.resolve(r)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const s=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),r=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(i){if(r)return null;throw i}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Z0(e))try{this.getOrInitializeService({instanceIdentifier:ks})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:r});s.resolve(i)}catch{}}}}clearInstance(e=ks){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=ks){return this.instances.has(e)}getOptions(e=ks){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[i,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(i);s===a&&o.resolve(r)}return r}onInit(e,n){var s;const r=this.normalizeInstanceIdentifier(n),i=(s=this.onInitCallbacks.get(r))!==null&&s!==void 0?s:new Set;i.add(e),this.onInitCallbacks.set(r,i);const o=this.instances.get(r);return o&&e(o,r),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const s=this.onInitCallbacks.get(n);if(s)for(const r of s)try{r(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:J0(e),options:n}),this.instances.set(e,s),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=ks){return this.component?this.component.multipleInstances?e:ks:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function J0(t){return t===ks?void 0:t}function Z0(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eA{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new X0(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ae;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(ae||(ae={}));const tA={debug:ae.DEBUG,verbose:ae.VERBOSE,info:ae.INFO,warn:ae.WARN,error:ae.ERROR,silent:ae.SILENT},nA=ae.INFO,sA={[ae.DEBUG]:"log",[ae.VERBOSE]:"log",[ae.INFO]:"info",[ae.WARN]:"warn",[ae.ERROR]:"error"},rA=(t,e,...n)=>{if(e<t.logLevel)return;const s=new Date().toISOString(),r=sA[e];if(r)console[r](`[${s}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class To{constructor(e){this.name=e,this._logLevel=nA,this._logHandler=rA,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ae))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?tA[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ae.DEBUG,...e),this._logHandler(this,ae.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ae.VERBOSE,...e),this._logHandler(this,ae.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ae.INFO,...e),this._logHandler(this,ae.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ae.WARN,...e),this._logHandler(this,ae.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ae.ERROR,...e),this._logHandler(this,ae.ERROR,...e)}}const iA=(t,e)=>e.some(n=>t instanceof n);let sp,rp;function oA(){return sp||(sp=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function aA(){return rp||(rp=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const wm=new WeakMap,Cu=new WeakMap,Em=new WeakMap,Pc=new WeakMap,Wh=new WeakMap;function lA(t){const e=new Promise((n,s)=>{const r=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(ds(t.result)),r()},o=()=>{s(t.error),r()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&wm.set(n,t)}).catch(()=>{}),Wh.set(e,t),e}function cA(t){if(Cu.has(t))return;const e=new Promise((n,s)=>{const r=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),r()},o=()=>{s(t.error||new DOMException("AbortError","AbortError")),r()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});Cu.set(t,e)}let bu={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Cu.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Em.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return ds(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function uA(t){bu=t(bu)}function hA(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const s=t.call(Nc(this),e,...n);return Em.set(s,e.sort?e.sort():[e]),ds(s)}:aA().includes(t)?function(...e){return t.apply(Nc(this),e),ds(wm.get(this))}:function(...e){return ds(t.apply(Nc(this),e))}}function dA(t){return typeof t=="function"?hA(t):(t instanceof IDBTransaction&&cA(t),iA(t,oA())?new Proxy(t,bu):t)}function ds(t){if(t instanceof IDBRequest)return lA(t);if(Pc.has(t))return Pc.get(t);const e=dA(t);return e!==t&&(Pc.set(t,e),Wh.set(e,t)),e}const Nc=t=>Wh.get(t);function fA(t,e,{blocked:n,upgrade:s,blocking:r,terminated:i}={}){const o=indexedDB.open(t,e),a=ds(o);return s&&o.addEventListener("upgradeneeded",l=>{s(ds(o.result),l.oldVersion,l.newVersion,ds(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),a.then(l=>{i&&l.addEventListener("close",()=>i()),r&&l.addEventListener("versionchange",c=>r(c.oldVersion,c.newVersion,c))}).catch(()=>{}),a}const pA=["get","getKey","getAll","getAllKeys","count"],gA=["put","add","delete","clear"],xc=new Map;function ip(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(xc.get(e))return xc.get(e);const n=e.replace(/FromIndex$/,""),s=e!==n,r=gA.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(r||pA.includes(n)))return;const i=async function(o,...a){const l=this.transaction(o,r?"readwrite":"readonly");let c=l.store;return s&&(c=c.index(a.shift())),(await Promise.all([c[n](...a),r&&l.done]))[0]};return xc.set(e,i),i}uA(t=>({...t,get:(e,n,s)=>ip(e,n)||t.get(e,n,s),has:(e,n)=>!!ip(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _A{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(mA(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function mA(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Ru="@firebase/app",op="0.9.19";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ks=new To("@firebase/app"),yA="@firebase/app-compat",vA="@firebase/analytics-compat",wA="@firebase/analytics",EA="@firebase/app-check-compat",TA="@firebase/app-check",IA="@firebase/auth",AA="@firebase/auth-compat",CA="@firebase/database",bA="@firebase/database-compat",RA="@firebase/functions",SA="@firebase/functions-compat",kA="@firebase/installations",PA="@firebase/installations-compat",NA="@firebase/messaging",xA="@firebase/messaging-compat",DA="@firebase/performance",OA="@firebase/performance-compat",MA="@firebase/remote-config",LA="@firebase/remote-config-compat",VA="@firebase/storage",FA="@firebase/storage-compat",UA="@firebase/firestore",BA="@firebase/firestore-compat",$A="firebase",jA="10.4.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Su="[DEFAULT]",WA={[Ru]:"fire-core",[yA]:"fire-core-compat",[wA]:"fire-analytics",[vA]:"fire-analytics-compat",[TA]:"fire-app-check",[EA]:"fire-app-check-compat",[IA]:"fire-auth",[AA]:"fire-auth-compat",[CA]:"fire-rtdb",[bA]:"fire-rtdb-compat",[RA]:"fire-fn",[SA]:"fire-fn-compat",[kA]:"fire-iid",[PA]:"fire-iid-compat",[NA]:"fire-fcm",[xA]:"fire-fcm-compat",[DA]:"fire-perf",[OA]:"fire-perf-compat",[MA]:"fire-rc",[LA]:"fire-rc-compat",[VA]:"fire-gcs",[FA]:"fire-gcs-compat",[UA]:"fire-fst",[BA]:"fire-fst-compat","fire-js":"fire-js",[$A]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $a=new Map,ku=new Map;function HA(t,e){try{t.container.addComponent(e)}catch(n){Ks.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function xn(t){const e=t.name;if(ku.has(e))return Ks.debug(`There were multiple attempts to register component ${e}.`),!1;ku.set(e,t);for(const n of $a.values())HA(n,t);return!0}function Hh(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qA={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},fs=new Jr("app","Firebase",qA);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KA{constructor(e,n,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new dn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw fs.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ts=jA;function Tm(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const s=Object.assign({name:Su,automaticDataCollectionEnabled:!1},e),r=s.name;if(typeof r!="string"||!r)throw fs.create("bad-app-name",{appName:String(r)});if(n||(n=pm()),!n)throw fs.create("no-options");const i=$a.get(r);if(i){if(Ba(n,i.options)&&Ba(s,i.config))return i;throw fs.create("duplicate-app",{appName:r})}const o=new eA(r);for(const l of ku.values())o.addComponent(l);const a=new KA(n,s,o);return $a.set(r,a),a}function qh(t=Su){const e=$a.get(t);if(!e&&t===Su&&pm())return Tm();if(!e)throw fs.create("no-app",{appName:t});return e}function Ht(t,e,n){var s;let r=(s=WA[t])!==null&&s!==void 0?s:t;n&&(r+=`-${n}`);const i=r.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const a=[`Unable to register library "${r}" with version "${e}":`];i&&a.push(`library name "${r}" contains illegal characters (whitespace or "/")`),i&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Ks.warn(a.join(" "));return}xn(new dn(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zA="firebase-heartbeat-database",GA=1,Zi="firebase-heartbeat-store";let Dc=null;function Im(){return Dc||(Dc=fA(zA,GA,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Zi)}}}).catch(t=>{throw fs.create("idb-open",{originalErrorMessage:t.message})})),Dc}async function QA(t){try{return await(await Im()).transaction(Zi).objectStore(Zi).get(Am(t))}catch(e){if(e instanceof Vn)Ks.warn(e.message);else{const n=fs.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Ks.warn(n.message)}}}async function ap(t,e){try{const s=(await Im()).transaction(Zi,"readwrite");await s.objectStore(Zi).put(e,Am(t)),await s.done}catch(n){if(n instanceof Vn)Ks.warn(n.message);else{const s=fs.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Ks.warn(s.message)}}}function Am(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const YA=1024,XA=30*24*60*60*1e3;class JA{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new eC(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=lp();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(r=>r.date===s)))return this._heartbeatsCache.heartbeats.push({date:s,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(r=>{const i=new Date(r.date).valueOf();return Date.now()-i<=XA}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=lp(),{heartbeatsToSend:n,unsentEntries:s}=ZA(this._heartbeatsCache.heartbeats),r=Va(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}}function lp(){return new Date().toISOString().substring(0,10)}function ZA(t,e=YA){const n=[];let s=t.slice();for(const r of t){const i=n.find(o=>o.agent===r.agent);if(i){if(i.dates.push(r.date),cp(n)>e){i.dates.pop();break}}else if(n.push({agent:r.agent,dates:[r.date]}),cp(n)>e){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class eC{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return ym()?U0().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await QA(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const r=await this.read();return ap(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const r=await this.read();return ap(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function cp(t){return Va(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tC(t){xn(new dn("platform-logger",e=>new _A(e),"PRIVATE")),xn(new dn("heartbeat",e=>new JA(e),"PRIVATE")),Ht(Ru,op,t),Ht(Ru,op,"esm2017"),Ht("fire-js","")}tC("");function Kh(t,e){var n={};for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&e.indexOf(s)<0&&(n[s]=t[s]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,s=Object.getOwnPropertySymbols(t);r<s.length;r++)e.indexOf(s[r])<0&&Object.prototype.propertyIsEnumerable.call(t,s[r])&&(n[s[r]]=t[s[r]]);return n}function up(t){return t!==void 0&&t.enterprise!==void 0}class nC{constructor(e){if(this.siteKey="",this.emailPasswordEnabled=!1,e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.emailPasswordEnabled=e.recaptchaEnforcementState.some(n=>n.provider==="EMAIL_PASSWORD_PROVIDER"&&n.enforcementState!=="OFF")}}function Cm(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const sC=Cm,bm=new Jr("auth","Firebase",Cm());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ja=new To("@firebase/auth");function rC(t,...e){ja.logLevel<=ae.WARN&&ja.warn(`Auth (${Ts}): ${t}`,...e)}function Ia(t,...e){ja.logLevel<=ae.ERROR&&ja.error(`Auth (${Ts}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fn(t,...e){throw zh(t,...e)}function Rn(t,...e){return zh(t,...e)}function iC(t,e,n){const s=Object.assign(Object.assign({},sC()),{[e]:n});return new Jr("auth","Firebase",s).create(e,{appName:t.name})}function zh(t,...e){if(typeof t!="string"){const n=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=t.name),t._errorFactory.create(n,...s)}return bm.create(t,...e)}function K(t,e,...n){if(!t)throw zh(e,...n)}function $n(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Ia(e),new Error(e)}function Gn(t,e){t||$n(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pu(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function oC(){return hp()==="http:"||hp()==="https:"}function hp(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function aC(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(oC()||V0()||"connection"in navigator)?navigator.onLine:!0}function lC(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Io{constructor(e,n){this.shortDelay=e,this.longDelay=n,Gn(n>e,"Short delay should be less than long delay!"),this.isMobile=jh()||_m()}get(){return aC()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gh(t,e){Gn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rm{static initialize(e,n,s){this.fetchImpl=e,n&&(this.headersImpl=n),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;$n("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;$n("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;$n("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cC={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uC=new Io(3e4,6e4);function Is(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function es(t,e,n,s,r={}){return Sm(t,r,async()=>{let i={},o={};s&&(e==="GET"?o=s:i={body:JSON.stringify(s)});const a=Zr(Object.assign({key:t.config.apiKey},o)).slice(1),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode),Rm.fetch()(km(t,t.config.apiHost,n,a),Object.assign({method:e,headers:l,referrerPolicy:"no-referrer"},i))})}async function Sm(t,e,n){t._canInitEmulator=!1;const s=Object.assign(Object.assign({},cC),e);try{const r=new hC(t),i=await Promise.race([n(),r.promise]);r.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw ta(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const a=i.ok?o.errorMessage:o.error.message,[l,c]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw ta(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw ta(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw ta(t,"user-disabled",o);const u=s[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw iC(t,u,c);fn(t,u)}}catch(r){if(r instanceof Vn)throw r;fn(t,"network-request-failed",{message:String(r)})}}async function Ao(t,e,n,s,r={}){const i=await es(t,e,n,s,r);return"mfaPendingCredential"in i&&fn(t,"multi-factor-auth-required",{_serverResponse:i}),i}function km(t,e,n,s){const r=`${e}${n}?${s}`;return t.config.emulator?Gh(t.config,r):`${t.config.apiScheme}://${r}`}class hC{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,s)=>{this.timer=setTimeout(()=>s(Rn(this.auth,"network-request-failed")),uC.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function ta(t,e,n){const s={appName:t.name};n.email&&(s.email=n.email),n.phoneNumber&&(s.phoneNumber=n.phoneNumber);const r=Rn(t,e,s);return r.customData._tokenResponse=n,r}async function dC(t,e){return es(t,"GET","/v2/recaptchaConfig",Is(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function fC(t,e){return es(t,"POST","/v1/accounts:delete",e)}async function pC(t,e){return es(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Oi(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function gC(t,e=!1){const n=Je(t),s=await n.getIdToken(e),r=Qh(s);K(r&&r.exp&&r.auth_time&&r.iat,n.auth,"internal-error");const i=typeof r.firebase=="object"?r.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:r,token:s,authTime:Oi(Oc(r.auth_time)),issuedAtTime:Oi(Oc(r.iat)),expirationTime:Oi(Oc(r.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function Oc(t){return Number(t)*1e3}function Qh(t){const[e,n,s]=t.split(".");if(e===void 0||n===void 0||s===void 0)return Ia("JWT malformed, contained fewer than 3 sections"),null;try{const r=Fa(n);return r?JSON.parse(r):(Ia("Failed to decode base64 JWT payload"),null)}catch(r){return Ia("Caught error parsing JWT payload as JSON",r==null?void 0:r.toString()),null}}function _C(t){const e=Qh(t);return K(e,"internal-error"),K(typeof e.exp<"u","internal-error"),K(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Vr(t,e,n=!1){if(n)return e;try{return await e}catch(s){throw s instanceof Vn&&mC(s)&&t.auth.currentUser===t&&await t.auth.signOut(),s}}function mC({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yC{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const s=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),s}else{this.errorBackoff=3e4;const r=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,r)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pm{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Oi(this.lastLoginAt),this.creationTime=Oi(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Wa(t){var e;const n=t.auth,s=await t.getIdToken(),r=await Vr(t,pC(n,{idToken:s}));K(r==null?void 0:r.users.length,n,"internal-error");const i=r.users[0];t._notifyReloadListener(i);const o=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?EC(i.providerUserInfo):[],a=wC(t.providerData,o),l=t.isAnonymous,c=!(t.email&&i.passwordHash)&&!(a!=null&&a.length),u=l?c:!1,h={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:a,metadata:new Pm(i.createdAt,i.lastLoginAt),isAnonymous:u};Object.assign(t,h)}async function vC(t){const e=Je(t);await Wa(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function wC(t,e){return[...t.filter(s=>!e.some(r=>r.providerId===s.providerId)),...e]}function EC(t){return t.map(e=>{var{providerId:n}=e,s=Kh(e,["providerId"]);return{providerId:n,uid:s.rawId||"",displayName:s.displayName||null,email:s.email||null,phoneNumber:s.phoneNumber||null,photoURL:s.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function TC(t,e){const n=await Sm(t,{},async()=>{const s=Zr({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:r,apiKey:i}=t.config,o=km(t,r,"/v1/token",`key=${i}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",Rm.fetch()(o,{method:"POST",headers:a,body:s})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eo{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){K(e.idToken,"internal-error"),K(typeof e.idToken<"u","internal-error"),K(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):_C(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return K(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:s,refreshToken:r,expiresIn:i}=await TC(e,n);this.updateTokensAndExpiration(s,r,Number(i))}updateTokensAndExpiration(e,n,s){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,n){const{refreshToken:s,accessToken:r,expirationTime:i}=n,o=new eo;return s&&(K(typeof s=="string","internal-error",{appName:e}),o.refreshToken=s),r&&(K(typeof r=="string","internal-error",{appName:e}),o.accessToken=r),i&&(K(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new eo,this.toJSON())}_performRefresh(){return $n("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ss(t,e){K(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class js{constructor(e){var{uid:n,auth:s,stsTokenManager:r}=e,i=Kh(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new yC(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=s,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new Pm(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await Vr(this,this.stsTokenManager.getToken(this.auth,e));return K(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return gC(this,e)}reload(){return vC(this)}_assign(e){this!==e&&(K(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new js(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){K(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),n&&await Wa(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await Vr(this,fC(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var s,r,i,o,a,l,c,u;const h=(s=n.displayName)!==null&&s!==void 0?s:void 0,d=(r=n.email)!==null&&r!==void 0?r:void 0,p=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,m=(o=n.photoURL)!==null&&o!==void 0?o:void 0,_=(a=n.tenantId)!==null&&a!==void 0?a:void 0,E=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,F=(c=n.createdAt)!==null&&c!==void 0?c:void 0,v=(u=n.lastLoginAt)!==null&&u!==void 0?u:void 0,{uid:y,emailVerified:w,isAnonymous:U,providerData:Q,stsTokenManager:ie}=n;K(y&&ie,e,"internal-error");const ce=eo.fromJSON(this.name,ie);K(typeof y=="string",e,"internal-error"),ss(h,e.name),ss(d,e.name),K(typeof w=="boolean",e,"internal-error"),K(typeof U=="boolean",e,"internal-error"),ss(p,e.name),ss(m,e.name),ss(_,e.name),ss(E,e.name),ss(F,e.name),ss(v,e.name);const pe=new js({uid:y,auth:e,email:d,emailVerified:w,displayName:h,isAnonymous:U,photoURL:m,phoneNumber:p,tenantId:_,stsTokenManager:ce,createdAt:F,lastLoginAt:v});return Q&&Array.isArray(Q)&&(pe.providerData=Q.map(Pe=>Object.assign({},Pe))),E&&(pe._redirectEventId=E),pe}static async _fromIdTokenResponse(e,n,s=!1){const r=new eo;r.updateFromServerResponse(n);const i=new js({uid:n.localId,auth:e,stsTokenManager:r,isAnonymous:s});return await Wa(i),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dp=new Map;function jn(t){Gn(t instanceof Function,"Expected a class definition");let e=dp.get(t);return e?(Gn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,dp.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nm{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}Nm.type="NONE";const fp=Nm;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Aa(t,e,n){return`firebase:${t}:${e}:${n}`}class br{constructor(e,n,s){this.persistence=e,this.auth=n,this.userKey=s;const{config:r,name:i}=this.auth;this.fullUserKey=Aa(this.userKey,r.apiKey,i),this.fullPersistenceKey=Aa("persistence",r.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?js._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,s="authUser"){if(!n.length)return new br(jn(fp),e,s);const r=(await Promise.all(n.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let i=r[0]||jn(fp);const o=Aa(s,e.config.apiKey,e.name);let a=null;for(const c of n)try{const u=await c._get(o);if(u){const h=js._fromJSON(e,u);c!==i&&(a=h),i=c;break}}catch{}const l=r.filter(c=>c._shouldAllowMigration);return!i._shouldAllowMigration||!l.length?new br(i,e,s):(i=l[0],a&&await i._set(o,a.toJSON()),await Promise.all(n.map(async c=>{if(c!==i)try{await c._remove(o)}catch{}})),new br(i,e,s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pp(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Om(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(xm(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Lm(e))return"Blackberry";if(Vm(e))return"Webos";if(Yh(e))return"Safari";if((e.includes("chrome/")||Dm(e))&&!e.includes("edge/"))return"Chrome";if(Mm(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=t.match(n);if((s==null?void 0:s.length)===2)return s[1]}return"Other"}function xm(t=St()){return/firefox\//i.test(t)}function Yh(t=St()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Dm(t=St()){return/crios\//i.test(t)}function Om(t=St()){return/iemobile/i.test(t)}function Mm(t=St()){return/android/i.test(t)}function Lm(t=St()){return/blackberry/i.test(t)}function Vm(t=St()){return/webos/i.test(t)}function Ol(t=St()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function IC(t=St()){var e;return Ol(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function AC(){return F0()&&document.documentMode===10}function Fm(t=St()){return Ol(t)||Mm(t)||Vm(t)||Lm(t)||/windows phone/i.test(t)||Om(t)}function CC(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Um(t,e=[]){let n;switch(t){case"Browser":n=pp(St());break;case"Worker":n=`${pp(St())}-${t}`;break;default:n=t}const s=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Ts}/${s}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bC{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const s=i=>new Promise((o,a)=>{try{const l=e(i);o(l)}catch(l){a(l)}});s.onAbort=n,this.queue.push(s);const r=this.queue.length-1;return()=>{this.queue[r]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const s of this.queue)await s(e),s.onAbort&&n.push(s.onAbort)}catch(s){n.reverse();for(const r of n)try{r()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s==null?void 0:s.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function RC(t,e={}){return es(t,"GET","/v2/passwordPolicy",Is(t,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const SC=6;class kC{constructor(e){var n,s,r,i;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:SC,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(r=(s=e.allowedNonAlphanumericCharacters)===null||s===void 0?void 0:s.join(""))!==null&&r!==void 0?r:"",this.forceUpgradeOnSignin=(i=e.forceUpgradeOnSignin)!==null&&i!==void 0?i:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,s,r,i,o,a;const l={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,l),this.validatePasswordCharacterOptions(e,l),l.isValid&&(l.isValid=(n=l.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),l.isValid&&(l.isValid=(s=l.meetsMaxPasswordLength)!==null&&s!==void 0?s:!0),l.isValid&&(l.isValid=(r=l.containsLowercaseLetter)!==null&&r!==void 0?r:!0),l.isValid&&(l.isValid=(i=l.containsUppercaseLetter)!==null&&i!==void 0?i:!0),l.isValid&&(l.isValid=(o=l.containsNumericCharacter)!==null&&o!==void 0?o:!0),l.isValid&&(l.isValid=(a=l.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),l}validatePasswordLengthOptions(e,n){const s=this.customStrengthOptions.minPasswordLength,r=this.customStrengthOptions.maxPasswordLength;s&&(n.meetsMinPasswordLength=e.length>=s),r&&(n.meetsMaxPasswordLength=e.length<=r)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let s;for(let r=0;r<e.length;r++)s=e.charAt(r),this.updatePasswordCharacterOptionsStatuses(n,s>="a"&&s<="z",s>="A"&&s<="Z",s>="0"&&s<="9",this.allowedNonAlphanumericCharacters.includes(s))}updatePasswordCharacterOptionsStatuses(e,n,s,r,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=s)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=r)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PC{constructor(e,n,s,r){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=s,this.config=r,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new gp(this),this.idTokenSubscription=new gp(this),this.beforeStateQueue=new bC(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=bm,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=r.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=jn(n)),this._initializationPromise=this.queue(async()=>{var s,r;if(!this._deleted&&(this.persistenceManager=await br.create(this,e),!this._deleted)){if(!((s=this._popupRedirectResolver)===null||s===void 0)&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((r=this.currentUser)===null||r===void 0?void 0:r.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const s=await this.assertedPersistence.getCurrentUser();let r=s,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=r==null?void 0:r._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===a)&&(l!=null&&l.user)&&(r=l.user,i=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(r)}catch(o){r=s,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return K(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Wa(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=lC()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?Je(e):null;return n&&K(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&K(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(jn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await RC(this),n=new kC(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Jr("auth","Firebase",e())}onAuthStateChanged(e,n,s){return this.registerStateListener(this.authStateSubscription,e,n,s)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,s){return this.registerStateListener(this.idTokenSubscription,e,n,s)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const s=this.onAuthStateChanged(()=>{s(),e()},n)}})}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const s=await this.getOrInitRedirectPersistenceManager(n);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&jn(e)||this._popupRedirectResolver;K(n,this,"argument-error"),this.redirectPersistenceManager=await br.create(this,[jn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,s;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((s=this.redirectUser)===null||s===void 0?void 0:s._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const s=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==s&&(this.lastNotifiedUid=s,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,s,r){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(K(a,this,"internal-error"),a.then(()=>{o||i(this.currentUser)}),typeof n=="function"){const l=e.addObserver(n,s,r);return()=>{o=!0,l()}}else{const l=e.addObserver(n);return()=>{o=!0,l()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return K(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Um(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const s=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());s&&(n["X-Firebase-Client"]=s);const r=await this._getAppCheckToken();return r&&(n["X-Firebase-AppCheck"]=r),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&rC(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function nr(t){return Je(t)}class gp{constructor(e){this.auth=e,this.observer=null,this.addObserver=K0(n=>this.observer=n)}get next(){return K(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function NC(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function Bm(t){return new Promise((e,n)=>{const s=document.createElement("script");s.setAttribute("src",t),s.onload=e,s.onerror=r=>{const i=Rn("internal-error");i.customData=r,n(i)},s.type="text/javascript",s.charset="UTF-8",NC().appendChild(s)})}function xC(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const DC="https://www.google.com/recaptcha/enterprise.js?render=",OC="recaptcha-enterprise",MC="NO_RECAPTCHA";class LC{constructor(e){this.type=OC,this.auth=nr(e)}async verify(e="verify",n=!1){async function s(i){if(!n){if(i.tenantId==null&&i._agentRecaptchaConfig!=null)return i._agentRecaptchaConfig.siteKey;if(i.tenantId!=null&&i._tenantRecaptchaConfigs[i.tenantId]!==void 0)return i._tenantRecaptchaConfigs[i.tenantId].siteKey}return new Promise(async(o,a)=>{dC(i,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const c=new nC(l);return i.tenantId==null?i._agentRecaptchaConfig=c:i._tenantRecaptchaConfigs[i.tenantId]=c,o(c.siteKey)}}).catch(l=>{a(l)})})}function r(i,o,a){const l=window.grecaptcha;up(l)?l.enterprise.ready(()=>{l.enterprise.execute(i,{action:e}).then(c=>{o(c)}).catch(()=>{o(MC)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((i,o)=>{s(this.auth).then(a=>{if(!n&&up(window.grecaptcha))r(a,i,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}Bm(DC+a).then(()=>{r(a,i,o)}).catch(l=>{o(l)})}}).catch(a=>{o(a)})})}}async function Ha(t,e,n,s=!1){const r=new LC(t);let i;try{i=await r.verify(n)}catch{i=await r.verify(n,!0)}const o=Object.assign({},e);return s?Object.assign(o,{captchaResp:i}):Object.assign(o,{captchaResponse:i}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function VC(t,e){const n=Hh(t,"auth");if(n.isInitialized()){const r=n.getImmediate(),i=n.getOptions();if(Ba(i,e??{}))return r;fn(r,"already-initialized")}return n.initialize({options:e})}function FC(t,e){const n=(e==null?void 0:e.persistence)||[],s=(Array.isArray(n)?n:[n]).map(jn);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(s,e==null?void 0:e.popupRedirectResolver)}function UC(t,e,n){const s=nr(t);K(s._canInitEmulator,s,"emulator-config-failed"),K(/^https?:\/\//.test(e),s,"invalid-emulator-scheme");const r=!!(n!=null&&n.disableWarnings),i=$m(e),{host:o,port:a}=BC(e),l=a===null?"":`:${a}`;s.config.emulator={url:`${i}//${o}${l}/`},s.settings.appVerificationDisabledForTesting=!0,s.emulatorConfig=Object.freeze({host:o,port:a,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:r})}),r||$C()}function $m(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function BC(t){const e=$m(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const s=n[2].split("@").pop()||"",r=/^(\[[^\]]+\])(:|$)/.exec(s);if(r){const i=r[1];return{host:i,port:_p(s.substr(i.length+1))}}else{const[i,o]=s.split(":");return{host:i,port:_p(o)}}}function _p(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function $C(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xh{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return $n("not implemented")}_getIdTokenResponse(e){return $n("not implemented")}_linkToIdToken(e,n){return $n("not implemented")}_getReauthenticationResolver(e){return $n("not implemented")}}async function jC(t,e){return es(t,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Mc(t,e){return Ao(t,"POST","/v1/accounts:signInWithPassword",Is(t,e))}async function WC(t,e){return es(t,"POST","/v1/accounts:sendOobCode",Is(t,e))}async function HC(t,e){return WC(t,e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function qC(t,e){return Ao(t,"POST","/v1/accounts:signInWithEmailLink",Is(t,e))}async function KC(t,e){return Ao(t,"POST","/v1/accounts:signInWithEmailLink",Is(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class to extends Xh{constructor(e,n,s,r=null){super("password",s),this._email=e,this._password=n,this._tenantId=r}static _fromEmailAndPassword(e,n){return new to(e,n,"password")}static _fromEmailAndCode(e,n,s=null){return new to(e,n,"emailLink",s)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){var n;switch(this.signInMethod){case"password":const s={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};if(!((n=e._getRecaptchaConfig())===null||n===void 0)&&n.emailPasswordEnabled){const r=await Ha(e,s,"signInWithPassword");return Mc(e,r)}else return Mc(e,s).catch(async r=>{if(r.code==="auth/missing-recaptcha-token"){console.log("Sign-in with email address and password is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-in flow.");const i=await Ha(e,s,"signInWithPassword");return Mc(e,i)}else return Promise.reject(r)});case"emailLink":return qC(e,{email:this._email,oobCode:this._password});default:fn(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":return jC(e,{idToken:n,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return KC(e,{idToken:n,email:this._email,oobCode:this._password});default:fn(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Rr(t,e){return Ao(t,"POST","/v1/accounts:signInWithIdp",Is(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zC="http://localhost";class zs extends Xh{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new zs(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):fn("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:r}=n,i=Kh(n,["providerId","signInMethod"]);if(!s||!r)return null;const o=new zs(s,r);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Rr(e,n)}_linkToIdToken(e,n){const s=this.buildRequest();return s.idToken=n,Rr(e,s)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Rr(e,n)}buildRequest(){const e={requestUri:zC,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Zr(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function GC(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function QC(t){const e=Ti(Ii(t)).link,n=e?Ti(Ii(e)).deep_link_id:null,s=Ti(Ii(t)).deep_link_id;return(s?Ti(Ii(s)).link:null)||s||n||e||t}class Jh{constructor(e){var n,s,r,i,o,a;const l=Ti(Ii(e)),c=(n=l.apiKey)!==null&&n!==void 0?n:null,u=(s=l.oobCode)!==null&&s!==void 0?s:null,h=GC((r=l.mode)!==null&&r!==void 0?r:null);K(c&&u&&h,"argument-error"),this.apiKey=c,this.operation=h,this.code=u,this.continueUrl=(i=l.continueUrl)!==null&&i!==void 0?i:null,this.languageCode=(o=l.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=l.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=QC(e);try{return new Jh(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ei{constructor(){this.providerId=ei.PROVIDER_ID}static credential(e,n){return to._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const s=Jh.parseLink(n);return K(s,"argument-error"),to._fromEmailAndCode(e,s.code,s.tenantId)}}ei.PROVIDER_ID="password";ei.EMAIL_PASSWORD_SIGN_IN_METHOD="password";ei.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jm{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Co extends jm{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class is extends Co{constructor(){super("facebook.com")}static credential(e){return zs._fromParams({providerId:is.PROVIDER_ID,signInMethod:is.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return is.credentialFromTaggedObject(e)}static credentialFromError(e){return is.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return is.credential(e.oauthAccessToken)}catch{return null}}}is.FACEBOOK_SIGN_IN_METHOD="facebook.com";is.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class os extends Co{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return zs._fromParams({providerId:os.PROVIDER_ID,signInMethod:os.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return os.credentialFromTaggedObject(e)}static credentialFromError(e){return os.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:s}=e;if(!n&&!s)return null;try{return os.credential(n,s)}catch{return null}}}os.GOOGLE_SIGN_IN_METHOD="google.com";os.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class as extends Co{constructor(){super("github.com")}static credential(e){return zs._fromParams({providerId:as.PROVIDER_ID,signInMethod:as.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return as.credentialFromTaggedObject(e)}static credentialFromError(e){return as.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return as.credential(e.oauthAccessToken)}catch{return null}}}as.GITHUB_SIGN_IN_METHOD="github.com";as.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ls extends Co{constructor(){super("twitter.com")}static credential(e,n){return zs._fromParams({providerId:ls.PROVIDER_ID,signInMethod:ls.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return ls.credentialFromTaggedObject(e)}static credentialFromError(e){return ls.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:s}=e;if(!n||!s)return null;try{return ls.credential(n,s)}catch{return null}}}ls.TWITTER_SIGN_IN_METHOD="twitter.com";ls.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Lc(t,e){return Ao(t,"POST","/v1/accounts:signUp",Is(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gs{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,s,r=!1){const i=await js._fromIdTokenResponse(e,s,r),o=mp(s);return new Gs({user:i,providerId:o,_tokenResponse:s,operationType:n})}static async _forOperation(e,n,s){await e._updateTokensIfNecessary(s,!0);const r=mp(s);return new Gs({user:e,providerId:r,_tokenResponse:s,operationType:n})}}function mp(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qa extends Vn{constructor(e,n,s,r){var i;super(n.code,n.message),this.operationType=s,this.user=r,Object.setPrototypeOf(this,qa.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(e,n,s,r){return new qa(e,n,s,r)}}function Wm(t,e,n,s){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?qa._fromErrorAndOperation(t,i,e,s):i})}async function YC(t,e,n=!1){const s=await Vr(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Gs._forOperation(t,"link",s)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function XC(t,e,n=!1){const{auth:s}=t,r="reauthenticate";try{const i=await Vr(t,Wm(s,r,e,t),n);K(i.idToken,s,"internal-error");const o=Qh(i.idToken);K(o,s,"internal-error");const{sub:a}=o;return K(t.uid===a,s,"user-mismatch"),Gs._forOperation(t,r,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&fn(s,"user-mismatch"),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Hm(t,e,n=!1){const s="signIn",r=await Wm(t,s,e),i=await Gs._fromIdTokenResponse(t,s,r);return n||await t._updateCurrentUser(i.user),i}async function JC(t,e){return Hm(nr(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ZC(t,e,n){var s;K(((s=n.url)===null||s===void 0?void 0:s.length)>0,t,"invalid-continue-uri"),K(typeof n.dynamicLinkDomain>"u"||n.dynamicLinkDomain.length>0,t,"invalid-dynamic-link-domain"),e.continueUrl=n.url,e.dynamicLinkDomain=n.dynamicLinkDomain,e.canHandleCodeInApp=n.handleCodeInApp,n.iOS&&(K(n.iOS.bundleId.length>0,t,"missing-ios-bundle-id"),e.iOSBundleId=n.iOS.bundleId),n.android&&(K(n.android.packageName.length>0,t,"missing-android-pkg-name"),e.androidInstallApp=n.android.installApp,e.androidMinimumVersionCode=n.android.minimumVersion,e.androidPackageName=n.android.packageName)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function qm(t){const e=nr(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function eb(t,e,n){var s;const r=nr(t),i={returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"};let o;if(!((s=r._getRecaptchaConfig())===null||s===void 0)&&s.emailPasswordEnabled){const c=await Ha(r,i,"signUpPassword");o=Lc(r,c)}else o=Lc(r,i).catch(async c=>{if(c.code==="auth/missing-recaptcha-token"){console.log("Sign-up is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-up flow.");const u=await Ha(r,i,"signUpPassword");return Lc(r,u)}throw c});const a=await o.catch(c=>{throw c.code==="auth/password-does-not-meet-requirements"&&qm(t),c}),l=await Gs._fromIdTokenResponse(r,"signIn",a);return await r._updateCurrentUser(l.user),l}function tb(t,e,n){return JC(Je(t),ei.credential(e,n)).catch(async s=>{throw s.code==="auth/password-does-not-meet-requirements"&&qm(t),s})}async function nb(t,e){const n=Je(t),r={requestType:"VERIFY_EMAIL",idToken:await t.getIdToken()};e&&ZC(n.auth,r,e);const{email:i}=await HC(n.auth,r);i!==t.email&&await t.reload()}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function sb(t,e){return es(t,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function yp(t,{displayName:e,photoURL:n}){if(e===void 0&&n===void 0)return;const s=Je(t),i={idToken:await s.getIdToken(),displayName:e,photoUrl:n,returnSecureToken:!0},o=await Vr(s,sb(s.auth,i));s.displayName=o.displayName||null,s.photoURL=o.photoUrl||null;const a=s.providerData.find(({providerId:l})=>l==="password");a&&(a.displayName=s.displayName,a.photoURL=s.photoURL),await s._updateTokensIfNecessary(o)}function Km(t,e,n,s){return Je(t).onIdTokenChanged(e,n,s)}function rb(t,e,n){return Je(t).beforeAuthStateChanged(e,n)}function ib(t){return Je(t).signOut()}const Ka="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zm{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Ka,"1"),this.storage.removeItem(Ka),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ob(){const t=St();return Yh(t)||Ol(t)}const ab=1e3,lb=10;class Gm extends zm{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=ob()&&CC(),this.fallbackToPolling=Fm(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const s=this.storage.getItem(n),r=this.localCache[n];s!==r&&e(n,r,s)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const s=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(s);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(s,e.newValue):this.storage.removeItem(s);else if(this.localCache[s]===e.newValue&&!n)return}const r=()=>{const o=this.storage.getItem(s);!n&&this.localCache[s]===o||this.notifyListeners(s,o)},i=this.storage.getItem(s);AC()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(r,lb):r()}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const r of Array.from(s))r(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:s}),!0)})},ab)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}Gm.type="LOCAL";const cb=Gm;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qm extends zm{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}Qm.type="SESSION";const Ym=Qm;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ub(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ml{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(r=>r.isListeningto(e));if(n)return n;const s=new Ml(e);return this.receivers.push(s),s}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:s,eventType:r,data:i}=n.data,o=this.handlersMap[r];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:s,eventType:r});const a=Array.from(o).map(async c=>c(n.origin,i)),l=await ub(a);n.ports[0].postMessage({status:"done",eventId:s,eventType:r,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Ml.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zh(t="",e=10){let n="";for(let s=0;s<e;s++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hb{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,s=50){const r=typeof MessageChannel<"u"?new MessageChannel:null;if(!r)throw new Error("connection_unavailable");let i,o;return new Promise((a,l)=>{const c=Zh("",20);r.port1.start();const u=setTimeout(()=>{l(new Error("unsupported_event"))},s);o={messageChannel:r,onMessage(h){const d=h;if(d.data.eventId===c)switch(d.data.status){case"ack":clearTimeout(u),i=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),a(d.data.response);break;default:clearTimeout(u),clearTimeout(i),l(new Error("invalid_response"));break}}},this.handlers.add(o),r.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:c,data:n},[r.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sn(){return window}function db(t){Sn().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xm(){return typeof Sn().WorkerGlobalScope<"u"&&typeof Sn().importScripts=="function"}async function fb(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function pb(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function gb(){return Xm()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jm="firebaseLocalStorageDb",_b=1,za="firebaseLocalStorage",Zm="fbase_key";class bo{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Ll(t,e){return t.transaction([za],e?"readwrite":"readonly").objectStore(za)}function mb(){const t=indexedDB.deleteDatabase(Jm);return new bo(t).toPromise()}function Nu(){const t=indexedDB.open(Jm,_b);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const s=t.result;try{s.createObjectStore(za,{keyPath:Zm})}catch(r){n(r)}}),t.addEventListener("success",async()=>{const s=t.result;s.objectStoreNames.contains(za)?e(s):(s.close(),await mb(),e(await Nu()))})})}async function vp(t,e,n){const s=Ll(t,!0).put({[Zm]:e,value:n});return new bo(s).toPromise()}async function yb(t,e){const n=Ll(t,!1).get(e),s=await new bo(n).toPromise();return s===void 0?null:s.value}function wp(t,e){const n=Ll(t,!0).delete(e);return new bo(n).toPromise()}const vb=800,wb=3;class ey{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Nu(),this.db)}async _withRetries(e){let n=0;for(;;)try{const s=await this._openDb();return await e(s)}catch(s){if(n++>wb)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Xm()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Ml._getInstance(gb()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await fb(),!this.activeServiceWorker)return;this.sender=new hb(this.activeServiceWorker);const s=await this.sender._send("ping",{},800);s&&!((e=s[0])===null||e===void 0)&&e.fulfilled&&!((n=s[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||pb()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Nu();return await vp(e,Ka,"1"),await wp(e,Ka),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(s=>vp(s,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(s=>yb(s,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>wp(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(r=>{const i=Ll(r,!1).getAll();return new bo(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],s=new Set;for(const{fbase_key:r,value:i}of e)s.add(r),JSON.stringify(this.localCache[r])!==JSON.stringify(i)&&(this.notifyListeners(r,i),n.push(r));for(const r of Object.keys(this.localCache))this.localCache[r]&&!s.has(r)&&(this.notifyListeners(r,null),n.push(r));return n}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const r of Array.from(s))r(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),vb)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}ey.type="LOCAL";const Eb=ey;new Io(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tb(t,e){return e?jn(e):(K(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ed extends Xh{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Rr(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Rr(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Rr(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function Ib(t){return Hm(t.auth,new ed(t),t.bypassAuthState)}function Ab(t){const{auth:e,user:n}=t;return K(n,e,"internal-error"),XC(n,new ed(t),t.bypassAuthState)}async function Cb(t){const{auth:e,user:n}=t;return K(n,e,"internal-error"),YC(n,new ed(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ty{constructor(e,n,s,r,i=!1){this.auth=e,this.resolver=s,this.user=r,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:s,postBody:r,tenantId:i,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:s,tenantId:i||void 0,postBody:r||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Ib;case"linkViaPopup":case"linkViaRedirect":return Cb;case"reauthViaPopup":case"reauthViaRedirect":return Ab;default:fn(this.auth,"internal-error")}}resolve(e){Gn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Gn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bb=new Io(2e3,1e4);class yr extends ty{constructor(e,n,s,r,i){super(e,n,r,i),this.provider=s,this.authWindow=null,this.pollId=null,yr.currentPopupAction&&yr.currentPopupAction.cancel(),yr.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return K(e,this.auth,"internal-error"),e}async onExecution(){Gn(this.filter.length===1,"Popup operations only handle one event");const e=Zh();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Rn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Rn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,yr.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,s;if(!((s=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||s===void 0)&&s.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Rn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,bb.get())};e()}}yr.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rb="pendingRedirect",Ca=new Map;class Sb extends ty{constructor(e,n,s=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,s),this.eventId=null}async execute(){let e=Ca.get(this.auth._key());if(!e){try{const s=await kb(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(s)}catch(n){e=()=>Promise.reject(n)}Ca.set(this.auth._key(),e)}return this.bypassAuthState||Ca.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function kb(t,e){const n=xb(e),s=Nb(t);if(!await s._isAvailable())return!1;const r=await s._get(n)==="true";return await s._remove(n),r}function Pb(t,e){Ca.set(t._key(),e)}function Nb(t){return jn(t._redirectPersistence)}function xb(t){return Aa(Rb,t.config.apiKey,t.name)}async function Db(t,e,n=!1){const s=nr(t),r=Tb(s,e),o=await new Sb(s,r,n).execute();return o&&!n&&(delete o.user._redirectEventId,await s._persistUserIfCurrent(o.user),await s._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ob=10*60*1e3;class Mb{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(e,s)&&(n=!0,this.sendToConsumer(e,s),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!Lb(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var s;if(e.error&&!ny(e)){const r=((s=e.error.code)===null||s===void 0?void 0:s.split("auth/")[1])||"internal-error";n.onError(Rn(this.auth,r))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const s=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&s}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=Ob&&this.cachedEventUids.clear(),this.cachedEventUids.has(Ep(e))}saveEventToCache(e){this.cachedEventUids.add(Ep(e)),this.lastProcessedEventTime=Date.now()}}function Ep(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function ny({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function Lb(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return ny(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Vb(t,e={}){return es(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fb=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Ub=/^https?/;async function Bb(t){if(t.config.emulator)return;const{authorizedDomains:e}=await Vb(t);for(const n of e)try{if($b(n))return}catch{}fn(t,"unauthorized-domain")}function $b(t){const e=Pu(),{protocol:n,hostname:s}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&s===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===s}if(!Ub.test(n))return!1;if(Fb.test(t))return s===t;const r=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+r+"|"+r+")$","i").test(s)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jb=new Io(3e4,6e4);function Tp(){const t=Sn().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function Wb(t){return new Promise((e,n)=>{var s,r,i;function o(){Tp(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Tp(),n(Rn(t,"network-request-failed"))},timeout:jb.get()})}if(!((r=(s=Sn().gapi)===null||s===void 0?void 0:s.iframes)===null||r===void 0)&&r.Iframe)e(gapi.iframes.getContext());else if(!((i=Sn().gapi)===null||i===void 0)&&i.load)o();else{const a=xC("iframefcb");return Sn()[a]=()=>{gapi.load?o():n(Rn(t,"network-request-failed"))},Bm(`https://apis.google.com/js/api.js?onload=${a}`).catch(l=>n(l))}}).catch(e=>{throw ba=null,e})}let ba=null;function Hb(t){return ba=ba||Wb(t),ba}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qb=new Io(5e3,15e3),Kb="__/auth/iframe",zb="emulator/auth/iframe",Gb={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Qb=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Yb(t){const e=t.config;K(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Gh(e,zb):`https://${t.config.authDomain}/${Kb}`,s={apiKey:e.apiKey,appName:t.name,v:Ts},r=Qb.get(t.config.apiHost);r&&(s.eid=r);const i=t._getFrameworks();return i.length&&(s.fw=i.join(",")),`${n}?${Zr(s).slice(1)}`}async function Xb(t){const e=await Hb(t),n=Sn().gapi;return K(n,t,"internal-error"),e.open({where:document.body,url:Yb(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Gb,dontclear:!0},s=>new Promise(async(r,i)=>{await s.restyle({setHideOnLeave:!1});const o=Rn(t,"network-request-failed"),a=Sn().setTimeout(()=>{i(o)},qb.get());function l(){Sn().clearTimeout(a),r(s)}s.ping(l).then(l,()=>{i(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jb={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Zb=500,eR=600,tR="_blank",nR="http://localhost";class Ip{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function sR(t,e,n,s=Zb,r=eR){const i=Math.max((window.screen.availHeight-r)/2,0).toString(),o=Math.max((window.screen.availWidth-s)/2,0).toString();let a="";const l=Object.assign(Object.assign({},Jb),{width:s.toString(),height:r.toString(),top:i,left:o}),c=St().toLowerCase();n&&(a=Dm(c)?tR:n),xm(c)&&(e=e||nR,l.scrollbars="yes");const u=Object.entries(l).reduce((d,[p,m])=>`${d}${p}=${m},`,"");if(IC(c)&&a!=="_self")return rR(e||"",a),new Ip(null);const h=window.open(e||"",a,u);K(h,t,"popup-blocked");try{h.focus()}catch{}return new Ip(h)}function rR(t,e){const n=document.createElement("a");n.href=t,n.target=e;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(s)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iR="__/auth/handler",oR="emulator/auth/handler",aR=encodeURIComponent("fac");async function Ap(t,e,n,s,r,i){K(t.config.authDomain,t,"auth-domain-config-required"),K(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:s,v:Ts,eventId:r};if(e instanceof jm){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",Au(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[u,h]of Object.entries(i||{}))o[u]=h}if(e instanceof Co){const u=e.getScopes().filter(h=>h!=="");u.length>0&&(o.scopes=u.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const u of Object.keys(a))a[u]===void 0&&delete a[u];const l=await t._getAppCheckToken(),c=l?`#${aR}=${encodeURIComponent(l)}`:"";return`${lR(t)}?${Zr(a).slice(1)}${c}`}function lR({config:t}){return t.emulator?Gh(t,oR):`https://${t.authDomain}/${iR}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vc="webStorageSupport";class cR{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Ym,this._completeRedirectFn=Db,this._overrideRedirectResult=Pb}async _openPopup(e,n,s,r){var i;Gn((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=await Ap(e,n,s,Pu(),r);return sR(e,o,Zh())}async _openRedirect(e,n,s,r){await this._originValidation(e);const i=await Ap(e,n,s,Pu(),r);return db(i),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:r,promise:i}=this.eventManagers[n];return r?Promise.resolve(r):(Gn(i,"If manager is not set, promise should be"),i)}const s=this.initAndGetManager(e);return this.eventManagers[n]={promise:s},s.catch(()=>{delete this.eventManagers[n]}),s}async initAndGetManager(e){const n=await Xb(e),s=new Mb(e);return n.register("authEvent",r=>(K(r==null?void 0:r.authEvent,e,"invalid-auth-event"),{status:s.onEvent(r.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:s},this.iframes[e._key()]=n,s}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Vc,{type:Vc},r=>{var i;const o=(i=r==null?void 0:r[0])===null||i===void 0?void 0:i[Vc];o!==void 0&&n(!!o),fn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=Bb(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return Fm()||Yh()||Ol()}}const uR=cR;var Cp="@firebase/auth",bp="1.3.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hR{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(s=>{e((s==null?void 0:s.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){K(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dR(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function fR(t){xn(new dn("auth",(e,{options:n})=>{const s=e.getProvider("app").getImmediate(),r=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=s.options;K(o&&!o.includes(":"),"invalid-api-key",{appName:s.name});const l={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Um(t)},c=new PC(s,r,i,l);return FC(c,n),c},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,s)=>{e.getProvider("auth-internal").initialize()})),xn(new dn("auth-internal",e=>{const n=nr(e.getProvider("auth").getImmediate());return(s=>new hR(s))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Ht(Cp,bp,dR(t)),Ht(Cp,bp,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pR=5*60,gR=gm("authIdTokenMaxAge")||pR;let Rp=null;const _R=t=>async e=>{const n=e&&await e.getIdTokenResult(),s=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(s&&s>gR)return;const r=n==null?void 0:n.token;Rp!==r&&(Rp=r,await fetch(t,{method:r?"POST":"DELETE",headers:r?{Authorization:`Bearer ${r}`}:{}}))};function ne(t=qh()){const e=Hh(t,"auth");if(e.isInitialized())return e.getImmediate();const n=VC(t,{popupRedirectResolver:uR,persistence:[Eb,cb,Ym]}),s=gm("authTokenSyncURL");if(s){const i=_R(s);rb(n,i,()=>i(n.currentUser)),Km(n,o=>i(o))}const r=fm("auth");return r&&UC(n,`http://${r}`),n}fR("Browser");var mR=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},L,td=td||{},J=mR||self;function Vl(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function Ro(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function yR(t){return Object.prototype.hasOwnProperty.call(t,Fc)&&t[Fc]||(t[Fc]=++vR)}var Fc="closure_uid_"+(1e9*Math.random()>>>0),vR=0;function wR(t,e,n){return t.call.apply(t.bind,arguments)}function ER(t,e,n){if(!t)throw Error();if(2<arguments.length){var s=Array.prototype.slice.call(arguments,2);return function(){var r=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(r,s),t.apply(e,r)}}return function(){return t.apply(e,arguments)}}function Ct(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?Ct=wR:Ct=ER,Ct.apply(null,arguments)}function na(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var s=n.slice();return s.push.apply(s,arguments),t.apply(this,s)}}function lt(t,e){function n(){}n.prototype=e.prototype,t.$=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.ac=function(s,r,i){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[r].apply(s,o)}}function As(){this.s=this.s,this.o=this.o}var TR=0;As.prototype.s=!1;As.prototype.sa=function(){!this.s&&(this.s=!0,this.N(),TR!=0)&&yR(this)};As.prototype.N=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const sy=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1};function nd(t){const e=t.length;if(0<e){const n=Array(e);for(let s=0;s<e;s++)n[s]=t[s];return n}return[]}function Sp(t,e){for(let n=1;n<arguments.length;n++){const s=arguments[n];if(Vl(s)){const r=t.length||0,i=s.length||0;t.length=r+i;for(let o=0;o<i;o++)t[r+o]=s[o]}else t.push(s)}}function bt(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}bt.prototype.h=function(){this.defaultPrevented=!0};var IR=function(){if(!J.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{J.addEventListener("test",()=>{},e),J.removeEventListener("test",()=>{},e)}catch{}return t}();function no(t){return/^[\s\xa0]*$/.test(t)}function Fl(){var t=J.navigator;return t&&(t=t.userAgent)?t:""}function Tn(t){return Fl().indexOf(t)!=-1}function sd(t){return sd[" "](t),t}sd[" "]=function(){};function AR(t,e){var n=_S;return Object.prototype.hasOwnProperty.call(n,t)?n[t]:n[t]=e(t)}var CR=Tn("Opera"),Fr=Tn("Trident")||Tn("MSIE"),ry=Tn("Edge"),xu=ry||Fr,iy=Tn("Gecko")&&!(Fl().toLowerCase().indexOf("webkit")!=-1&&!Tn("Edge"))&&!(Tn("Trident")||Tn("MSIE"))&&!Tn("Edge"),bR=Fl().toLowerCase().indexOf("webkit")!=-1&&!Tn("Edge");function oy(){var t=J.document;return t?t.documentMode:void 0}var Du;e:{var Uc="",Bc=function(){var t=Fl();if(iy)return/rv:([^\);]+)(\)|;)/.exec(t);if(ry)return/Edge\/([\d\.]+)/.exec(t);if(Fr)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(bR)return/WebKit\/(\S+)/.exec(t);if(CR)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(Bc&&(Uc=Bc?Bc[1]:""),Fr){var $c=oy();if($c!=null&&$c>parseFloat(Uc)){Du=String($c);break e}}Du=Uc}var Ou;if(J.document&&Fr){var kp=oy();Ou=kp||parseInt(Du,10)||void 0}else Ou=void 0;var RR=Ou;function so(t,e){if(bt.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,s=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(iy){e:{try{sd(e.nodeName);var r=!0;break e}catch{}r=!1}r||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,s?(this.clientX=s.clientX!==void 0?s.clientX:s.pageX,this.clientY=s.clientY!==void 0?s.clientY:s.pageY,this.screenX=s.screenX||0,this.screenY=s.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:SR[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&so.$.h.call(this)}}lt(so,bt);var SR={2:"touch",3:"pen",4:"mouse"};so.prototype.h=function(){so.$.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var So="closure_listenable_"+(1e6*Math.random()|0),kR=0;function PR(t,e,n,s,r){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!s,this.la=r,this.key=++kR,this.fa=this.ia=!1}function Ul(t){t.fa=!0,t.listener=null,t.proxy=null,t.src=null,t.la=null}function rd(t,e,n){for(const s in t)e.call(n,t[s],s,t)}function NR(t,e){for(const n in t)e.call(void 0,t[n],n,t)}function ay(t){const e={};for(const n in t)e[n]=t[n];return e}const Pp="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function ly(t,e){let n,s;for(let r=1;r<arguments.length;r++){s=arguments[r];for(n in s)t[n]=s[n];for(let i=0;i<Pp.length;i++)n=Pp[i],Object.prototype.hasOwnProperty.call(s,n)&&(t[n]=s[n])}}function Bl(t){this.src=t,this.g={},this.h=0}Bl.prototype.add=function(t,e,n,s,r){var i=t.toString();t=this.g[i],t||(t=this.g[i]=[],this.h++);var o=Lu(t,e,s,r);return-1<o?(e=t[o],n||(e.ia=!1)):(e=new PR(e,this.src,i,!!s,r),e.ia=n,t.push(e)),e};function Mu(t,e){var n=e.type;if(n in t.g){var s=t.g[n],r=sy(s,e),i;(i=0<=r)&&Array.prototype.splice.call(s,r,1),i&&(Ul(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function Lu(t,e,n,s){for(var r=0;r<t.length;++r){var i=t[r];if(!i.fa&&i.listener==e&&i.capture==!!n&&i.la==s)return r}return-1}var id="closure_lm_"+(1e6*Math.random()|0),jc={};function cy(t,e,n,s,r){if(s&&s.once)return hy(t,e,n,s,r);if(Array.isArray(e)){for(var i=0;i<e.length;i++)cy(t,e[i],n,s,r);return null}return n=ld(n),t&&t[So]?t.O(e,n,Ro(s)?!!s.capture:!!s,r):uy(t,e,n,!1,s,r)}function uy(t,e,n,s,r,i){if(!e)throw Error("Invalid event type");var o=Ro(r)?!!r.capture:!!r,a=ad(t);if(a||(t[id]=a=new Bl(t)),n=a.add(e,n,s,o,i),n.proxy)return n;if(s=xR(),n.proxy=s,s.src=t,s.listener=n,t.addEventListener)IR||(r=o),r===void 0&&(r=!1),t.addEventListener(e.toString(),s,r);else if(t.attachEvent)t.attachEvent(fy(e.toString()),s);else if(t.addListener&&t.removeListener)t.addListener(s);else throw Error("addEventListener and attachEvent are unavailable.");return n}function xR(){function t(n){return e.call(t.src,t.listener,n)}const e=DR;return t}function hy(t,e,n,s,r){if(Array.isArray(e)){for(var i=0;i<e.length;i++)hy(t,e[i],n,s,r);return null}return n=ld(n),t&&t[So]?t.P(e,n,Ro(s)?!!s.capture:!!s,r):uy(t,e,n,!0,s,r)}function dy(t,e,n,s,r){if(Array.isArray(e))for(var i=0;i<e.length;i++)dy(t,e[i],n,s,r);else s=Ro(s)?!!s.capture:!!s,n=ld(n),t&&t[So]?(t=t.i,e=String(e).toString(),e in t.g&&(i=t.g[e],n=Lu(i,n,s,r),-1<n&&(Ul(i[n]),Array.prototype.splice.call(i,n,1),i.length==0&&(delete t.g[e],t.h--)))):t&&(t=ad(t))&&(e=t.g[e.toString()],t=-1,e&&(t=Lu(e,n,s,r)),(n=-1<t?e[t]:null)&&od(n))}function od(t){if(typeof t!="number"&&t&&!t.fa){var e=t.src;if(e&&e[So])Mu(e.i,t);else{var n=t.type,s=t.proxy;e.removeEventListener?e.removeEventListener(n,s,t.capture):e.detachEvent?e.detachEvent(fy(n),s):e.addListener&&e.removeListener&&e.removeListener(s),(n=ad(e))?(Mu(n,t),n.h==0&&(n.src=null,e[id]=null)):Ul(t)}}}function fy(t){return t in jc?jc[t]:jc[t]="on"+t}function DR(t,e){if(t.fa)t=!0;else{e=new so(e,this);var n=t.listener,s=t.la||t.src;t.ia&&od(t),t=n.call(s,e)}return t}function ad(t){return t=t[id],t instanceof Bl?t:null}var Wc="__closure_events_fn_"+(1e9*Math.random()>>>0);function ld(t){return typeof t=="function"?t:(t[Wc]||(t[Wc]=function(e){return t.handleEvent(e)}),t[Wc])}function at(){As.call(this),this.i=new Bl(this),this.S=this,this.J=null}lt(at,As);at.prototype[So]=!0;at.prototype.removeEventListener=function(t,e,n,s){dy(this,t,e,n,s)};function ft(t,e){var n,s=t.J;if(s)for(n=[];s;s=s.J)n.push(s);if(t=t.S,s=e.type||e,typeof e=="string")e=new bt(e,t);else if(e instanceof bt)e.target=e.target||t;else{var r=e;e=new bt(s,t),ly(e,r)}if(r=!0,n)for(var i=n.length-1;0<=i;i--){var o=e.g=n[i];r=sa(o,s,!0,e)&&r}if(o=e.g=t,r=sa(o,s,!0,e)&&r,r=sa(o,s,!1,e)&&r,n)for(i=0;i<n.length;i++)o=e.g=n[i],r=sa(o,s,!1,e)&&r}at.prototype.N=function(){if(at.$.N.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],s=0;s<n.length;s++)Ul(n[s]);delete t.g[e],t.h--}}this.J=null};at.prototype.O=function(t,e,n,s){return this.i.add(String(t),e,!1,n,s)};at.prototype.P=function(t,e,n,s){return this.i.add(String(t),e,!0,n,s)};function sa(t,e,n,s){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var r=!0,i=0;i<e.length;++i){var o=e[i];if(o&&!o.fa&&o.capture==n){var a=o.listener,l=o.la||o.src;o.ia&&Mu(t.i,o),r=a.call(l,s)!==!1&&r}}return r&&!s.defaultPrevented}var cd=J.JSON.stringify;class OR{constructor(e,n){this.i=e,this.j=n,this.h=0,this.g=null}get(){let e;return 0<this.h?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e}}function MR(){var t=ud;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class LR{constructor(){this.h=this.g=null}add(e,n){const s=py.get();s.set(e,n),this.h?this.h.next=s:this.g=s,this.h=s}}var py=new OR(()=>new VR,t=>t.reset());class VR{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function FR(t){var e=1;t=t.split(":");const n=[];for(;0<e&&t.length;)n.push(t.shift()),e--;return t.length&&n.push(t.join(":")),n}function UR(t){J.setTimeout(()=>{throw t},0)}let ro,io=!1,ud=new LR,gy=()=>{const t=J.Promise.resolve(void 0);ro=()=>{t.then(BR)}};var BR=()=>{for(var t;t=MR();){try{t.h.call(t.g)}catch(n){UR(n)}var e=py;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}io=!1};function $l(t,e){at.call(this),this.h=t||1,this.g=e||J,this.j=Ct(this.qb,this),this.l=Date.now()}lt($l,at);L=$l.prototype;L.ga=!1;L.T=null;L.qb=function(){if(this.ga){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.T=this.g.setTimeout(this.j,this.h-t):(this.T&&(this.g.clearTimeout(this.T),this.T=null),ft(this,"tick"),this.ga&&(hd(this),this.start()))}};L.start=function(){this.ga=!0,this.T||(this.T=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function hd(t){t.ga=!1,t.T&&(t.g.clearTimeout(t.T),t.T=null)}L.N=function(){$l.$.N.call(this),hd(this),delete this.g};function dd(t,e,n){if(typeof t=="function")n&&(t=Ct(t,n));else if(t&&typeof t.handleEvent=="function")t=Ct(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:J.setTimeout(t,e||0)}function _y(t){t.g=dd(()=>{t.g=null,t.i&&(t.i=!1,_y(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class $R extends As{constructor(e,n){super(),this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:_y(this)}N(){super.N(),this.g&&(J.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function oo(t){As.call(this),this.h=t,this.g={}}lt(oo,As);var Np=[];function my(t,e,n,s){Array.isArray(n)||(n&&(Np[0]=n.toString()),n=Np);for(var r=0;r<n.length;r++){var i=cy(e,n[r],s||t.handleEvent,!1,t.h||t);if(!i)break;t.g[i.key]=i}}function yy(t){rd(t.g,function(e,n){this.g.hasOwnProperty(n)&&od(e)},t),t.g={}}oo.prototype.N=function(){oo.$.N.call(this),yy(this)};oo.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function jl(){this.g=!0}jl.prototype.Ea=function(){this.g=!1};function jR(t,e,n,s,r,i){t.info(function(){if(t.g)if(i)for(var o="",a=i.split("&"),l=0;l<a.length;l++){var c=a[l].split("=");if(1<c.length){var u=c[0];c=c[1];var h=u.split("_");o=2<=h.length&&h[1]=="type"?o+(u+"="+c+"&"):o+(u+"=redacted&")}}else o=null;else o=i;return"XMLHTTP REQ ("+s+") [attempt "+r+"]: "+e+`
`+n+`
`+o})}function WR(t,e,n,s,r,i,o){t.info(function(){return"XMLHTTP RESP ("+s+") [ attempt "+r+"]: "+e+`
`+n+`
`+i+" "+o})}function vr(t,e,n,s){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+qR(t,n)+(s?" "+s:"")})}function HR(t,e){t.info(function(){return"TIMEOUT: "+e})}jl.prototype.info=function(){};function qR(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var s=n[t];if(!(2>s.length)){var r=s[1];if(Array.isArray(r)&&!(1>r.length)){var i=r[0];if(i!="noop"&&i!="stop"&&i!="close")for(var o=1;o<r.length;o++)r[o]=""}}}}return cd(n)}catch{return e}}var sr={},xp=null;function Wl(){return xp=xp||new at}sr.Ta="serverreachability";function vy(t){bt.call(this,sr.Ta,t)}lt(vy,bt);function ao(t){const e=Wl();ft(e,new vy(e))}sr.STAT_EVENT="statevent";function wy(t,e){bt.call(this,sr.STAT_EVENT,t),this.stat=e}lt(wy,bt);function Ot(t){const e=Wl();ft(e,new wy(e,t))}sr.Ua="timingevent";function Ey(t,e){bt.call(this,sr.Ua,t),this.size=e}lt(Ey,bt);function ko(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return J.setTimeout(function(){t()},e)}var Hl={NO_ERROR:0,rb:1,Eb:2,Db:3,yb:4,Cb:5,Fb:6,Qa:7,TIMEOUT:8,Ib:9},Ty={wb:"complete",Sb:"success",Ra:"error",Qa:"abort",Kb:"ready",Lb:"readystatechange",TIMEOUT:"timeout",Gb:"incrementaldata",Jb:"progress",zb:"downloadprogress",$b:"uploadprogress"};function fd(){}fd.prototype.h=null;function Dp(t){return t.h||(t.h=t.i())}function Iy(){}var Po={OPEN:"a",vb:"b",Ra:"c",Hb:"d"};function pd(){bt.call(this,"d")}lt(pd,bt);function gd(){bt.call(this,"c")}lt(gd,bt);var Vu;function ql(){}lt(ql,fd);ql.prototype.g=function(){return new XMLHttpRequest};ql.prototype.i=function(){return{}};Vu=new ql;function No(t,e,n,s){this.l=t,this.j=e,this.m=n,this.W=s||1,this.U=new oo(this),this.P=KR,t=xu?125:void 0,this.V=new $l(t),this.I=null,this.i=!1,this.s=this.A=this.v=this.L=this.G=this.Y=this.B=null,this.F=[],this.g=null,this.C=0,this.o=this.u=null,this.ca=-1,this.J=!1,this.O=0,this.M=null,this.ba=this.K=this.aa=this.S=!1,this.h=new Ay}function Ay(){this.i=null,this.g="",this.h=!1}var KR=45e3,Fu={},Ga={};L=No.prototype;L.setTimeout=function(t){this.P=t};function Uu(t,e,n){t.L=1,t.v=zl(Qn(e)),t.s=n,t.S=!0,Cy(t,null)}function Cy(t,e){t.G=Date.now(),xo(t),t.A=Qn(t.v);var n=t.A,s=t.W;Array.isArray(s)||(s=[String(s)]),Dy(n.i,"t",s),t.C=0,n=t.l.J,t.h=new Ay,t.g=ev(t.l,n?e:null,!t.s),0<t.O&&(t.M=new $R(Ct(t.Pa,t,t.g),t.O)),my(t.U,t.g,"readystatechange",t.nb),e=t.I?ay(t.I):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.ha(t.A,t.u,t.s,e)):(t.u="GET",t.g.ha(t.A,t.u,null,e)),ao(),jR(t.j,t.u,t.A,t.m,t.W,t.s)}L.nb=function(t){t=t.target;const e=this.M;e&&In(t)==3?e.l():this.Pa(t)};L.Pa=function(t){try{if(t==this.g)e:{const u=In(this.g);var e=this.g.Ia();const h=this.g.da();if(!(3>u)&&(u!=3||xu||this.g&&(this.h.h||this.g.ja()||Vp(this.g)))){this.J||u!=4||e==7||(e==8||0>=h?ao(3):ao(2)),Kl(this);var n=this.g.da();this.ca=n;t:if(by(this)){var s=Vp(this.g);t="";var r=s.length,i=In(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Ls(this),Mi(this);var o="";break t}this.h.i=new J.TextDecoder}for(e=0;e<r;e++)this.h.h=!0,t+=this.h.i.decode(s[e],{stream:i&&e==r-1});s.splice(0,r),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.ja();if(this.i=n==200,WR(this.j,this.u,this.A,this.m,this.W,u,n),this.i){if(this.aa&&!this.K){t:{if(this.g){var a,l=this.g;if((a=l.g?l.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!no(a)){var c=a;break t}}c=null}if(n=c)vr(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Bu(this,n);else{this.i=!1,this.o=3,Ot(12),Ls(this),Mi(this);break e}}this.S?(Ry(this,u,o),xu&&this.i&&u==3&&(my(this.U,this.V,"tick",this.mb),this.V.start())):(vr(this.j,this.m,o,null),Bu(this,o)),u==4&&Ls(this),this.i&&!this.J&&(u==4?Yy(this.l,this):(this.i=!1,xo(this)))}else fS(this.g),n==400&&0<o.indexOf("Unknown SID")?(this.o=3,Ot(12)):(this.o=0,Ot(13)),Ls(this),Mi(this)}}}catch{}finally{}};function by(t){return t.g?t.u=="GET"&&t.L!=2&&t.l.Ha:!1}function Ry(t,e,n){let s=!0,r;for(;!t.J&&t.C<n.length;)if(r=zR(t,n),r==Ga){e==4&&(t.o=4,Ot(14),s=!1),vr(t.j,t.m,null,"[Incomplete Response]");break}else if(r==Fu){t.o=4,Ot(15),vr(t.j,t.m,n,"[Invalid Chunk]"),s=!1;break}else vr(t.j,t.m,r,null),Bu(t,r);by(t)&&r!=Ga&&r!=Fu&&(t.h.g="",t.C=0),e!=4||n.length!=0||t.h.h||(t.o=1,Ot(16),s=!1),t.i=t.i&&s,s?0<n.length&&!t.ba&&(t.ba=!0,e=t.l,e.g==t&&e.ca&&!e.M&&(e.l.info("Great, no buffering proxy detected. Bytes received: "+n.length),Ed(e),e.M=!0,Ot(11))):(vr(t.j,t.m,n,"[Invalid Chunked Response]"),Ls(t),Mi(t))}L.mb=function(){if(this.g){var t=In(this.g),e=this.g.ja();this.C<e.length&&(Kl(this),Ry(this,t,e),this.i&&t!=4&&xo(this))}};function zR(t,e){var n=t.C,s=e.indexOf(`
`,n);return s==-1?Ga:(n=Number(e.substring(n,s)),isNaN(n)?Fu:(s+=1,s+n>e.length?Ga:(e=e.slice(s,s+n),t.C=s+n,e)))}L.cancel=function(){this.J=!0,Ls(this)};function xo(t){t.Y=Date.now()+t.P,Sy(t,t.P)}function Sy(t,e){if(t.B!=null)throw Error("WatchDog timer not null");t.B=ko(Ct(t.lb,t),e)}function Kl(t){t.B&&(J.clearTimeout(t.B),t.B=null)}L.lb=function(){this.B=null;const t=Date.now();0<=t-this.Y?(HR(this.j,this.A),this.L!=2&&(ao(),Ot(17)),Ls(this),this.o=2,Mi(this)):Sy(this,this.Y-t)};function Mi(t){t.l.H==0||t.J||Yy(t.l,t)}function Ls(t){Kl(t);var e=t.M;e&&typeof e.sa=="function"&&e.sa(),t.M=null,hd(t.V),yy(t.U),t.g&&(e=t.g,t.g=null,e.abort(),e.sa())}function Bu(t,e){try{var n=t.l;if(n.H!=0&&(n.g==t||$u(n.i,t))){if(!t.K&&$u(n.i,t)&&n.H==3){try{var s=n.Ja.g.parse(e)}catch{s=null}if(Array.isArray(s)&&s.length==3){var r=s;if(r[0]==0){e:if(!n.u){if(n.g)if(n.g.G+3e3<t.G)Xa(n),Xl(n);else break e;wd(n),Ot(18)}}else n.Fa=r[1],0<n.Fa-n.V&&37500>r[2]&&n.G&&n.A==0&&!n.v&&(n.v=ko(Ct(n.ib,n),6e3));if(1>=Ly(n.i)&&n.oa){try{n.oa()}catch{}n.oa=void 0}}else Vs(n,11)}else if((t.K||n.g==t)&&Xa(n),!no(e))for(r=n.Ja.g.parse(e),e=0;e<r.length;e++){let c=r[e];if(n.V=c[0],c=c[1],n.H==2)if(c[0]=="c"){n.K=c[1],n.pa=c[2];const u=c[3];u!=null&&(n.ra=u,n.l.info("VER="+n.ra));const h=c[4];h!=null&&(n.Ga=h,n.l.info("SVER="+n.Ga));const d=c[5];d!=null&&typeof d=="number"&&0<d&&(s=1.5*d,n.L=s,n.l.info("backChannelRequestTimeoutMs_="+s)),s=n;const p=t.g;if(p){const m=p.g?p.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(m){var i=s.i;i.g||m.indexOf("spdy")==-1&&m.indexOf("quic")==-1&&m.indexOf("h2")==-1||(i.j=i.l,i.g=new Set,i.h&&(_d(i,i.h),i.h=null))}if(s.F){const _=p.g?p.g.getResponseHeader("X-HTTP-Session-Id"):null;_&&(s.Da=_,Me(s.I,s.F,_))}}n.H=3,n.h&&n.h.Ba(),n.ca&&(n.S=Date.now()-t.G,n.l.info("Handshake RTT: "+n.S+"ms")),s=n;var o=t;if(s.wa=Zy(s,s.J?s.pa:null,s.Y),o.K){Vy(s.i,o);var a=o,l=s.L;l&&a.setTimeout(l),a.B&&(Kl(a),xo(a)),s.g=o}else Gy(s);0<n.j.length&&Jl(n)}else c[0]!="stop"&&c[0]!="close"||Vs(n,7);else n.H==3&&(c[0]=="stop"||c[0]=="close"?c[0]=="stop"?Vs(n,7):vd(n):c[0]!="noop"&&n.h&&n.h.Aa(c),n.A=0)}}ao(4)}catch{}}function GR(t){if(t.Z&&typeof t.Z=="function")return t.Z();if(typeof Map<"u"&&t instanceof Map||typeof Set<"u"&&t instanceof Set)return Array.from(t.values());if(typeof t=="string")return t.split("");if(Vl(t)){for(var e=[],n=t.length,s=0;s<n;s++)e.push(t[s]);return e}e=[],n=0;for(s in t)e[n++]=t[s];return e}function QR(t){if(t.ta&&typeof t.ta=="function")return t.ta();if(!t.Z||typeof t.Z!="function"){if(typeof Map<"u"&&t instanceof Map)return Array.from(t.keys());if(!(typeof Set<"u"&&t instanceof Set)){if(Vl(t)||typeof t=="string"){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const s in t)e[n++]=s;return e}}}function ky(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(Vl(t)||typeof t=="string")Array.prototype.forEach.call(t,e,void 0);else for(var n=QR(t),s=GR(t),r=s.length,i=0;i<r;i++)e.call(void 0,s[i],n&&n[i],t)}var Py=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function YR(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var s=t[n].indexOf("="),r=null;if(0<=s){var i=t[n].substring(0,s);r=t[n].substring(s+1)}else i=t[n];e(i,r?decodeURIComponent(r.replace(/\+/g," ")):"")}}}function Ws(t){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof Ws){this.h=t.h,Qa(this,t.j),this.s=t.s,this.g=t.g,Ya(this,t.m),this.l=t.l;var e=t.i,n=new lo;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),Op(this,n),this.o=t.o}else t&&(e=String(t).match(Py))?(this.h=!1,Qa(this,e[1]||"",!0),this.s=Ai(e[2]||""),this.g=Ai(e[3]||"",!0),Ya(this,e[4]),this.l=Ai(e[5]||"",!0),Op(this,e[6]||"",!0),this.o=Ai(e[7]||"")):(this.h=!1,this.i=new lo(null,this.h))}Ws.prototype.toString=function(){var t=[],e=this.j;e&&t.push(Ci(e,Mp,!0),":");var n=this.g;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(Ci(e,Mp,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&t.push("/"),t.push(Ci(n,n.charAt(0)=="/"?ZR:JR,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.o)&&t.push("#",Ci(n,tS)),t.join("")};function Qn(t){return new Ws(t)}function Qa(t,e,n){t.j=n?Ai(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function Ya(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function Op(t,e,n){e instanceof lo?(t.i=e,nS(t.i,t.h)):(n||(e=Ci(e,eS)),t.i=new lo(e,t.h))}function Me(t,e,n){t.i.set(e,n)}function zl(t){return Me(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function Ai(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function Ci(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,XR),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function XR(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var Mp=/[#\/\?@]/g,JR=/[#\?:]/g,ZR=/[#\?]/g,eS=/[#\?@]/g,tS=/#/g;function lo(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function Cs(t){t.g||(t.g=new Map,t.h=0,t.i&&YR(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}L=lo.prototype;L.add=function(t,e){Cs(this),this.i=null,t=ti(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function Ny(t,e){Cs(t),e=ti(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function xy(t,e){return Cs(t),e=ti(t,e),t.g.has(e)}L.forEach=function(t,e){Cs(this),this.g.forEach(function(n,s){n.forEach(function(r){t.call(e,r,s,this)},this)},this)};L.ta=function(){Cs(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let s=0;s<e.length;s++){const r=t[s];for(let i=0;i<r.length;i++)n.push(e[s])}return n};L.Z=function(t){Cs(this);let e=[];if(typeof t=="string")xy(this,t)&&(e=e.concat(this.g.get(ti(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e};L.set=function(t,e){return Cs(this),this.i=null,t=ti(this,t),xy(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};L.get=function(t,e){return t?(t=this.Z(t),0<t.length?String(t[0]):e):e};function Dy(t,e,n){Ny(t,e),0<n.length&&(t.i=null,t.g.set(ti(t,e),nd(n)),t.h+=n.length)}L.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var s=e[n];const i=encodeURIComponent(String(s)),o=this.Z(s);for(s=0;s<o.length;s++){var r=i;o[s]!==""&&(r+="="+encodeURIComponent(String(o[s]))),t.push(r)}}return this.i=t.join("&")};function ti(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function nS(t,e){e&&!t.j&&(Cs(t),t.i=null,t.g.forEach(function(n,s){var r=s.toLowerCase();s!=r&&(Ny(this,s),Dy(this,r,n))},t)),t.j=e}var sS=class{constructor(t,e){this.g=t,this.map=e}};function Oy(t){this.l=t||rS,J.PerformanceNavigationTiming?(t=J.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(J.g&&J.g.Ka&&J.g.Ka()&&J.g.Ka().dc),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var rS=10;function My(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function Ly(t){return t.h?1:t.g?t.g.size:0}function $u(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function _d(t,e){t.g?t.g.add(e):t.h=e}function Vy(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}Oy.prototype.cancel=function(){if(this.i=Fy(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function Fy(t){if(t.h!=null)return t.i.concat(t.h.F);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.F);return e}return nd(t.i)}var iS=class{stringify(t){return J.JSON.stringify(t,void 0)}parse(t){return J.JSON.parse(t,void 0)}};function oS(){this.g=new iS}function aS(t,e,n){const s=n||"";try{ky(t,function(r,i){let o=r;Ro(r)&&(o=cd(r)),e.push(s+i+"="+encodeURIComponent(o))})}catch(r){throw e.push(s+"type="+encodeURIComponent("_badmap")),r}}function lS(t,e){const n=new jl;if(J.Image){const s=new Image;s.onload=na(ra,n,s,"TestLoadImage: loaded",!0,e),s.onerror=na(ra,n,s,"TestLoadImage: error",!1,e),s.onabort=na(ra,n,s,"TestLoadImage: abort",!1,e),s.ontimeout=na(ra,n,s,"TestLoadImage: timeout",!1,e),J.setTimeout(function(){s.ontimeout&&s.ontimeout()},1e4),s.src=t}else e(!1)}function ra(t,e,n,s,r){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,r(s)}catch{}}function Gl(t){this.l=t.ec||null,this.j=t.ob||!1}lt(Gl,fd);Gl.prototype.g=function(){return new Ql(this.l,this.j)};Gl.prototype.i=function(t){return function(){return t}}({});function Ql(t,e){at.call(this),this.F=t,this.u=e,this.m=void 0,this.readyState=md,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}lt(Ql,at);var md=0;L=Ql.prototype;L.open=function(t,e){if(this.readyState!=md)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,co(this)};L.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.F||J).fetch(new Request(this.B,e)).then(this.$a.bind(this),this.ka.bind(this))};L.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Do(this)),this.readyState=md};L.$a=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,co(this)),this.g&&(this.readyState=3,co(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ya.bind(this),this.ka.bind(this));else if(typeof J.ReadableStream<"u"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;Uy(this)}else t.text().then(this.Za.bind(this),this.ka.bind(this))};function Uy(t){t.j.read().then(t.Xa.bind(t)).catch(t.ka.bind(t))}L.Xa=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?Do(this):co(this),this.readyState==3&&Uy(this)}};L.Za=function(t){this.g&&(this.response=this.responseText=t,Do(this))};L.Ya=function(t){this.g&&(this.response=t,Do(this))};L.ka=function(){this.g&&Do(this)};function Do(t){t.readyState=4,t.l=null,t.j=null,t.A=null,co(t)}L.setRequestHeader=function(t,e){this.v.append(t,e)};L.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};L.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function co(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(Ql.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var cS=J.JSON.parse;function He(t){at.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.I="",this.m=0,this.j="",this.l=this.G=this.v=this.F=!1,this.B=0,this.A=null,this.K=By,this.L=this.M=!1}lt(He,at);var By="",uS=/^https?$/i,hS=["POST","PUT"];L=He.prototype;L.Oa=function(t){this.M=t};L.ha=function(t,e,n,s){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.I+"; newUri="+t);e=e?e.toUpperCase():"GET",this.I=t,this.j="",this.m=0,this.F=!1,this.h=!0,this.g=this.u?this.u.g():Vu.g(),this.C=this.u?Dp(this.u):Dp(Vu),this.g.onreadystatechange=Ct(this.La,this);try{this.G=!0,this.g.open(e,String(t),!0),this.G=!1}catch(i){Lp(this,i);return}if(t=n||"",n=new Map(this.headers),s)if(Object.getPrototypeOf(s)===Object.prototype)for(var r in s)n.set(r,s[r]);else if(typeof s.keys=="function"&&typeof s.get=="function")for(const i of s.keys())n.set(i,s.get(i));else throw Error("Unknown input type for opt_headers: "+String(s));s=Array.from(n.keys()).find(i=>i.toLowerCase()=="content-type"),r=J.FormData&&t instanceof J.FormData,!(0<=sy(hS,e))||s||r||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[i,o]of n)this.g.setRequestHeader(i,o);this.K&&(this.g.responseType=this.K),"withCredentials"in this.g&&this.g.withCredentials!==this.M&&(this.g.withCredentials=this.M);try{Wy(this),0<this.B&&((this.L=dS(this.g))?(this.g.timeout=this.B,this.g.ontimeout=Ct(this.ua,this)):this.A=dd(this.ua,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(i){Lp(this,i)}};function dS(t){return Fr&&typeof t.timeout=="number"&&t.ontimeout!==void 0}L.ua=function(){typeof td<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,ft(this,"timeout"),this.abort(8))};function Lp(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,$y(t),Yl(t)}function $y(t){t.F||(t.F=!0,ft(t,"complete"),ft(t,"error"))}L.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,ft(this,"complete"),ft(this,"abort"),Yl(this))};L.N=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Yl(this,!0)),He.$.N.call(this)};L.La=function(){this.s||(this.G||this.v||this.l?jy(this):this.kb())};L.kb=function(){jy(this)};function jy(t){if(t.h&&typeof td<"u"&&(!t.C[1]||In(t)!=4||t.da()!=2)){if(t.v&&In(t)==4)dd(t.La,0,t);else if(ft(t,"readystatechange"),In(t)==4){t.h=!1;try{const o=t.da();e:switch(o){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var s;if(s=o===0){var r=String(t.I).match(Py)[1]||null;!r&&J.self&&J.self.location&&(r=J.self.location.protocol.slice(0,-1)),s=!uS.test(r?r.toLowerCase():"")}n=s}if(n)ft(t,"complete"),ft(t,"success");else{t.m=6;try{var i=2<In(t)?t.g.statusText:""}catch{i=""}t.j=i+" ["+t.da()+"]",$y(t)}}finally{Yl(t)}}}}function Yl(t,e){if(t.g){Wy(t);const n=t.g,s=t.C[0]?()=>{}:null;t.g=null,t.C=null,e||ft(t,"ready");try{n.onreadystatechange=s}catch{}}}function Wy(t){t.g&&t.L&&(t.g.ontimeout=null),t.A&&(J.clearTimeout(t.A),t.A=null)}L.isActive=function(){return!!this.g};function In(t){return t.g?t.g.readyState:0}L.da=function(){try{return 2<In(this)?this.g.status:-1}catch{return-1}};L.ja=function(){try{return this.g?this.g.responseText:""}catch{return""}};L.Wa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),cS(e)}};function Vp(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.K){case By:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}function fS(t){const e={};t=(t.g&&2<=In(t)&&t.g.getAllResponseHeaders()||"").split(`\r
`);for(let s=0;s<t.length;s++){if(no(t[s]))continue;var n=FR(t[s]);const r=n[0];if(n=n[1],typeof n!="string")continue;n=n.trim();const i=e[r]||[];e[r]=i,i.push(n)}NR(e,function(s){return s.join(", ")})}L.Ia=function(){return this.m};L.Sa=function(){return typeof this.j=="string"?this.j:String(this.j)};function Hy(t){let e="";return rd(t,function(n,s){e+=s,e+=":",e+=n,e+=`\r
`}),e}function yd(t,e,n){e:{for(s in n){var s=!1;break e}s=!0}s||(n=Hy(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):Me(t,e,n))}function fi(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function qy(t){this.Ga=0,this.j=[],this.l=new jl,this.pa=this.wa=this.I=this.Y=this.g=this.Da=this.F=this.na=this.o=this.U=this.s=null,this.fb=this.W=0,this.cb=fi("failFast",!1,t),this.G=this.v=this.u=this.m=this.h=null,this.aa=!0,this.Fa=this.V=-1,this.ba=this.A=this.C=0,this.ab=fi("baseRetryDelayMs",5e3,t),this.hb=fi("retryDelaySeedMs",1e4,t),this.eb=fi("forwardChannelMaxRetries",2,t),this.xa=fi("forwardChannelRequestTimeoutMs",2e4,t),this.va=t&&t.xmlHttpFactory||void 0,this.Ha=t&&t.useFetchStreams||!1,this.L=void 0,this.J=t&&t.supportsCrossDomainXhr||!1,this.K="",this.i=new Oy(t&&t.concurrentRequestLimit),this.Ja=new oS,this.P=t&&t.fastHandshake||!1,this.O=t&&t.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.bb=t&&t.bc||!1,t&&t.Ea&&this.l.Ea(),t&&t.forceLongPolling&&(this.aa=!1),this.ca=!this.P&&this.aa&&t&&t.detectBufferingProxy||!1,this.qa=void 0,t&&t.longPollingTimeout&&0<t.longPollingTimeout&&(this.qa=t.longPollingTimeout),this.oa=void 0,this.S=0,this.M=!1,this.ma=this.B=null}L=qy.prototype;L.ra=8;L.H=1;function vd(t){if(Ky(t),t.H==3){var e=t.W++,n=Qn(t.I);if(Me(n,"SID",t.K),Me(n,"RID",e),Me(n,"TYPE","terminate"),Oo(t,n),e=new No(t,t.l,e),e.L=2,e.v=zl(Qn(n)),n=!1,J.navigator&&J.navigator.sendBeacon)try{n=J.navigator.sendBeacon(e.v.toString(),"")}catch{}!n&&J.Image&&(new Image().src=e.v,n=!0),n||(e.g=ev(e.l,null),e.g.ha(e.v)),e.G=Date.now(),xo(e)}Jy(t)}function Xl(t){t.g&&(Ed(t),t.g.cancel(),t.g=null)}function Ky(t){Xl(t),t.u&&(J.clearTimeout(t.u),t.u=null),Xa(t),t.i.cancel(),t.m&&(typeof t.m=="number"&&J.clearTimeout(t.m),t.m=null)}function Jl(t){if(!My(t.i)&&!t.m){t.m=!0;var e=t.Na;ro||gy(),io||(ro(),io=!0),ud.add(e,t),t.C=0}}function pS(t,e){return Ly(t.i)>=t.i.j-(t.m?1:0)?!1:t.m?(t.j=e.F.concat(t.j),!0):t.H==1||t.H==2||t.C>=(t.cb?0:t.eb)?!1:(t.m=ko(Ct(t.Na,t,e),Xy(t,t.C)),t.C++,!0)}L.Na=function(t){if(this.m)if(this.m=null,this.H==1){if(!t){this.W=Math.floor(1e5*Math.random()),t=this.W++;const r=new No(this,this.l,t);let i=this.s;if(this.U&&(i?(i=ay(i),ly(i,this.U)):i=this.U),this.o!==null||this.O||(r.I=i,i=null),this.P)e:{for(var e=0,n=0;n<this.j.length;n++){t:{var s=this.j[n];if("__data__"in s.map&&(s=s.map.__data__,typeof s=="string")){s=s.length;break t}s=void 0}if(s===void 0)break;if(e+=s,4096<e){e=n;break e}if(e===4096||n===this.j.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=zy(this,r,e),n=Qn(this.I),Me(n,"RID",t),Me(n,"CVER",22),this.F&&Me(n,"X-HTTP-Session-Id",this.F),Oo(this,n),i&&(this.O?e="headers="+encodeURIComponent(String(Hy(i)))+"&"+e:this.o&&yd(n,this.o,i)),_d(this.i,r),this.bb&&Me(n,"TYPE","init"),this.P?(Me(n,"$req",e),Me(n,"SID","null"),r.aa=!0,Uu(r,n,null)):Uu(r,n,e),this.H=2}}else this.H==3&&(t?Fp(this,t):this.j.length==0||My(this.i)||Fp(this))};function Fp(t,e){var n;e?n=e.m:n=t.W++;const s=Qn(t.I);Me(s,"SID",t.K),Me(s,"RID",n),Me(s,"AID",t.V),Oo(t,s),t.o&&t.s&&yd(s,t.o,t.s),n=new No(t,t.l,n,t.C+1),t.o===null&&(n.I=t.s),e&&(t.j=e.F.concat(t.j)),e=zy(t,n,1e3),n.setTimeout(Math.round(.5*t.xa)+Math.round(.5*t.xa*Math.random())),_d(t.i,n),Uu(n,s,e)}function Oo(t,e){t.na&&rd(t.na,function(n,s){Me(e,s,n)}),t.h&&ky({},function(n,s){Me(e,s,n)})}function zy(t,e,n){n=Math.min(t.j.length,n);var s=t.h?Ct(t.h.Va,t.h,t):null;e:{var r=t.j;let i=-1;for(;;){const o=["count="+n];i==-1?0<n?(i=r[0].g,o.push("ofs="+i)):i=0:o.push("ofs="+i);let a=!0;for(let l=0;l<n;l++){let c=r[l].g;const u=r[l].map;if(c-=i,0>c)i=Math.max(0,r[l].g-100),a=!1;else try{aS(u,o,"req"+c+"_")}catch{s&&s(u)}}if(a){s=o.join("&");break e}}}return t=t.j.splice(0,n),e.F=t,s}function Gy(t){if(!t.g&&!t.u){t.ba=1;var e=t.Ma;ro||gy(),io||(ro(),io=!0),ud.add(e,t),t.A=0}}function wd(t){return t.g||t.u||3<=t.A?!1:(t.ba++,t.u=ko(Ct(t.Ma,t),Xy(t,t.A)),t.A++,!0)}L.Ma=function(){if(this.u=null,Qy(this),this.ca&&!(this.M||this.g==null||0>=this.S)){var t=2*this.S;this.l.info("BP detection timer enabled: "+t),this.B=ko(Ct(this.jb,this),t)}};L.jb=function(){this.B&&(this.B=null,this.l.info("BP detection timeout reached."),this.l.info("Buffering proxy detected and switch to long-polling!"),this.G=!1,this.M=!0,Ot(10),Xl(this),Qy(this))};function Ed(t){t.B!=null&&(J.clearTimeout(t.B),t.B=null)}function Qy(t){t.g=new No(t,t.l,"rpc",t.ba),t.o===null&&(t.g.I=t.s),t.g.O=0;var e=Qn(t.wa);Me(e,"RID","rpc"),Me(e,"SID",t.K),Me(e,"AID",t.V),Me(e,"CI",t.G?"0":"1"),!t.G&&t.qa&&Me(e,"TO",t.qa),Me(e,"TYPE","xmlhttp"),Oo(t,e),t.o&&t.s&&yd(e,t.o,t.s),t.L&&t.g.setTimeout(t.L);var n=t.g;t=t.pa,n.L=1,n.v=zl(Qn(e)),n.s=null,n.S=!0,Cy(n,t)}L.ib=function(){this.v!=null&&(this.v=null,Xl(this),wd(this),Ot(19))};function Xa(t){t.v!=null&&(J.clearTimeout(t.v),t.v=null)}function Yy(t,e){var n=null;if(t.g==e){Xa(t),Ed(t),t.g=null;var s=2}else if($u(t.i,e))n=e.F,Vy(t.i,e),s=1;else return;if(t.H!=0){if(e.i)if(s==1){n=e.s?e.s.length:0,e=Date.now()-e.G;var r=t.C;s=Wl(),ft(s,new Ey(s,n)),Jl(t)}else Gy(t);else if(r=e.o,r==3||r==0&&0<e.ca||!(s==1&&pS(t,e)||s==2&&wd(t)))switch(n&&0<n.length&&(e=t.i,e.i=e.i.concat(n)),r){case 1:Vs(t,5);break;case 4:Vs(t,10);break;case 3:Vs(t,6);break;default:Vs(t,2)}}}function Xy(t,e){let n=t.ab+Math.floor(Math.random()*t.hb);return t.isActive()||(n*=2),n*e}function Vs(t,e){if(t.l.info("Error code "+e),e==2){var n=null;t.h&&(n=null);var s=Ct(t.pb,t);n||(n=new Ws("//www.google.com/images/cleardot.gif"),J.location&&J.location.protocol=="http"||Qa(n,"https"),zl(n)),lS(n.toString(),s)}else Ot(2);t.H=0,t.h&&t.h.za(e),Jy(t),Ky(t)}L.pb=function(t){t?(this.l.info("Successfully pinged google.com"),Ot(2)):(this.l.info("Failed to ping google.com"),Ot(1))};function Jy(t){if(t.H=0,t.ma=[],t.h){const e=Fy(t.i);(e.length!=0||t.j.length!=0)&&(Sp(t.ma,e),Sp(t.ma,t.j),t.i.i.length=0,nd(t.j),t.j.length=0),t.h.ya()}}function Zy(t,e,n){var s=n instanceof Ws?Qn(n):new Ws(n);if(s.g!="")e&&(s.g=e+"."+s.g),Ya(s,s.m);else{var r=J.location;s=r.protocol,e=e?e+"."+r.hostname:r.hostname,r=+r.port;var i=new Ws(null);s&&Qa(i,s),e&&(i.g=e),r&&Ya(i,r),n&&(i.l=n),s=i}return n=t.F,e=t.Da,n&&e&&Me(s,n,e),Me(s,"VER",t.ra),Oo(t,s),s}function ev(t,e,n){if(e&&!t.J)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Ha&&!t.va?new He(new Gl({ob:!0})):new He(t.va),e.Oa(t.J),e}L.isActive=function(){return!!this.h&&this.h.isActive(this)};function tv(){}L=tv.prototype;L.Ba=function(){};L.Aa=function(){};L.za=function(){};L.ya=function(){};L.isActive=function(){return!0};L.Va=function(){};function Ja(){if(Fr&&!(10<=Number(RR)))throw Error("Environmental error: no available transport.")}Ja.prototype.g=function(t,e){return new Kt(t,e)};function Kt(t,e){at.call(this),this.g=new qy(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.Ca&&(t?t["X-WebChannel-Client-Profile"]=e.Ca:t={"X-WebChannel-Client-Profile":e.Ca}),this.g.U=t,(t=e&&e.cc)&&!no(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!no(e)&&(this.g.F=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new ni(this)}lt(Kt,at);Kt.prototype.m=function(){this.g.h=this.j,this.A&&(this.g.J=!0);var t=this.g,e=this.l,n=this.h||void 0;Ot(0),t.Y=e,t.na=n||{},t.G=t.aa,t.I=Zy(t,null,t.Y),Jl(t)};Kt.prototype.close=function(){vd(this.g)};Kt.prototype.u=function(t){var e=this.g;if(typeof t=="string"){var n={};n.__data__=t,t=n}else this.v&&(n={},n.__data__=cd(t),t=n);e.j.push(new sS(e.fb++,t)),e.H==3&&Jl(e)};Kt.prototype.N=function(){this.g.h=null,delete this.j,vd(this.g),delete this.g,Kt.$.N.call(this)};function nv(t){pd.call(this),t.__headers__&&(this.headers=t.__headers__,this.statusCode=t.__status__,delete t.__headers__,delete t.__status__);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}lt(nv,pd);function sv(){gd.call(this),this.status=1}lt(sv,gd);function ni(t){this.g=t}lt(ni,tv);ni.prototype.Ba=function(){ft(this.g,"a")};ni.prototype.Aa=function(t){ft(this.g,new nv(t))};ni.prototype.za=function(t){ft(this.g,new sv)};ni.prototype.ya=function(){ft(this.g,"b")};function gS(){this.blockSize=-1}function pn(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.m=Array(this.blockSize),this.i=this.h=0,this.reset()}lt(pn,gS);pn.prototype.reset=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.i=this.h=0};function Hc(t,e,n){n||(n=0);var s=Array(16);if(typeof e=="string")for(var r=0;16>r;++r)s[r]=e.charCodeAt(n++)|e.charCodeAt(n++)<<8|e.charCodeAt(n++)<<16|e.charCodeAt(n++)<<24;else for(r=0;16>r;++r)s[r]=e[n++]|e[n++]<<8|e[n++]<<16|e[n++]<<24;e=t.g[0],n=t.g[1],r=t.g[2];var i=t.g[3],o=e+(i^n&(r^i))+s[0]+3614090360&4294967295;e=n+(o<<7&4294967295|o>>>25),o=i+(r^e&(n^r))+s[1]+3905402710&4294967295,i=e+(o<<12&4294967295|o>>>20),o=r+(n^i&(e^n))+s[2]+606105819&4294967295,r=i+(o<<17&4294967295|o>>>15),o=n+(e^r&(i^e))+s[3]+3250441966&4294967295,n=r+(o<<22&4294967295|o>>>10),o=e+(i^n&(r^i))+s[4]+4118548399&4294967295,e=n+(o<<7&4294967295|o>>>25),o=i+(r^e&(n^r))+s[5]+1200080426&4294967295,i=e+(o<<12&4294967295|o>>>20),o=r+(n^i&(e^n))+s[6]+2821735955&4294967295,r=i+(o<<17&4294967295|o>>>15),o=n+(e^r&(i^e))+s[7]+4249261313&4294967295,n=r+(o<<22&4294967295|o>>>10),o=e+(i^n&(r^i))+s[8]+1770035416&4294967295,e=n+(o<<7&4294967295|o>>>25),o=i+(r^e&(n^r))+s[9]+2336552879&4294967295,i=e+(o<<12&4294967295|o>>>20),o=r+(n^i&(e^n))+s[10]+4294925233&4294967295,r=i+(o<<17&4294967295|o>>>15),o=n+(e^r&(i^e))+s[11]+2304563134&4294967295,n=r+(o<<22&4294967295|o>>>10),o=e+(i^n&(r^i))+s[12]+1804603682&4294967295,e=n+(o<<7&4294967295|o>>>25),o=i+(r^e&(n^r))+s[13]+4254626195&4294967295,i=e+(o<<12&4294967295|o>>>20),o=r+(n^i&(e^n))+s[14]+2792965006&4294967295,r=i+(o<<17&4294967295|o>>>15),o=n+(e^r&(i^e))+s[15]+1236535329&4294967295,n=r+(o<<22&4294967295|o>>>10),o=e+(r^i&(n^r))+s[1]+4129170786&4294967295,e=n+(o<<5&4294967295|o>>>27),o=i+(n^r&(e^n))+s[6]+3225465664&4294967295,i=e+(o<<9&4294967295|o>>>23),o=r+(e^n&(i^e))+s[11]+643717713&4294967295,r=i+(o<<14&4294967295|o>>>18),o=n+(i^e&(r^i))+s[0]+3921069994&4294967295,n=r+(o<<20&4294967295|o>>>12),o=e+(r^i&(n^r))+s[5]+3593408605&4294967295,e=n+(o<<5&4294967295|o>>>27),o=i+(n^r&(e^n))+s[10]+38016083&4294967295,i=e+(o<<9&4294967295|o>>>23),o=r+(e^n&(i^e))+s[15]+3634488961&4294967295,r=i+(o<<14&4294967295|o>>>18),o=n+(i^e&(r^i))+s[4]+3889429448&4294967295,n=r+(o<<20&4294967295|o>>>12),o=e+(r^i&(n^r))+s[9]+568446438&4294967295,e=n+(o<<5&4294967295|o>>>27),o=i+(n^r&(e^n))+s[14]+3275163606&4294967295,i=e+(o<<9&4294967295|o>>>23),o=r+(e^n&(i^e))+s[3]+4107603335&4294967295,r=i+(o<<14&4294967295|o>>>18),o=n+(i^e&(r^i))+s[8]+1163531501&4294967295,n=r+(o<<20&4294967295|o>>>12),o=e+(r^i&(n^r))+s[13]+2850285829&4294967295,e=n+(o<<5&4294967295|o>>>27),o=i+(n^r&(e^n))+s[2]+4243563512&4294967295,i=e+(o<<9&4294967295|o>>>23),o=r+(e^n&(i^e))+s[7]+1735328473&4294967295,r=i+(o<<14&4294967295|o>>>18),o=n+(i^e&(r^i))+s[12]+2368359562&4294967295,n=r+(o<<20&4294967295|o>>>12),o=e+(n^r^i)+s[5]+4294588738&4294967295,e=n+(o<<4&4294967295|o>>>28),o=i+(e^n^r)+s[8]+2272392833&4294967295,i=e+(o<<11&4294967295|o>>>21),o=r+(i^e^n)+s[11]+1839030562&4294967295,r=i+(o<<16&4294967295|o>>>16),o=n+(r^i^e)+s[14]+4259657740&4294967295,n=r+(o<<23&4294967295|o>>>9),o=e+(n^r^i)+s[1]+2763975236&4294967295,e=n+(o<<4&4294967295|o>>>28),o=i+(e^n^r)+s[4]+1272893353&4294967295,i=e+(o<<11&4294967295|o>>>21),o=r+(i^e^n)+s[7]+4139469664&4294967295,r=i+(o<<16&4294967295|o>>>16),o=n+(r^i^e)+s[10]+3200236656&4294967295,n=r+(o<<23&4294967295|o>>>9),o=e+(n^r^i)+s[13]+681279174&4294967295,e=n+(o<<4&4294967295|o>>>28),o=i+(e^n^r)+s[0]+3936430074&4294967295,i=e+(o<<11&4294967295|o>>>21),o=r+(i^e^n)+s[3]+3572445317&4294967295,r=i+(o<<16&4294967295|o>>>16),o=n+(r^i^e)+s[6]+76029189&4294967295,n=r+(o<<23&4294967295|o>>>9),o=e+(n^r^i)+s[9]+3654602809&4294967295,e=n+(o<<4&4294967295|o>>>28),o=i+(e^n^r)+s[12]+3873151461&4294967295,i=e+(o<<11&4294967295|o>>>21),o=r+(i^e^n)+s[15]+530742520&4294967295,r=i+(o<<16&4294967295|o>>>16),o=n+(r^i^e)+s[2]+3299628645&4294967295,n=r+(o<<23&4294967295|o>>>9),o=e+(r^(n|~i))+s[0]+4096336452&4294967295,e=n+(o<<6&4294967295|o>>>26),o=i+(n^(e|~r))+s[7]+1126891415&4294967295,i=e+(o<<10&4294967295|o>>>22),o=r+(e^(i|~n))+s[14]+2878612391&4294967295,r=i+(o<<15&4294967295|o>>>17),o=n+(i^(r|~e))+s[5]+4237533241&4294967295,n=r+(o<<21&4294967295|o>>>11),o=e+(r^(n|~i))+s[12]+1700485571&4294967295,e=n+(o<<6&4294967295|o>>>26),o=i+(n^(e|~r))+s[3]+2399980690&4294967295,i=e+(o<<10&4294967295|o>>>22),o=r+(e^(i|~n))+s[10]+4293915773&4294967295,r=i+(o<<15&4294967295|o>>>17),o=n+(i^(r|~e))+s[1]+2240044497&4294967295,n=r+(o<<21&4294967295|o>>>11),o=e+(r^(n|~i))+s[8]+1873313359&4294967295,e=n+(o<<6&4294967295|o>>>26),o=i+(n^(e|~r))+s[15]+4264355552&4294967295,i=e+(o<<10&4294967295|o>>>22),o=r+(e^(i|~n))+s[6]+2734768916&4294967295,r=i+(o<<15&4294967295|o>>>17),o=n+(i^(r|~e))+s[13]+1309151649&4294967295,n=r+(o<<21&4294967295|o>>>11),o=e+(r^(n|~i))+s[4]+4149444226&4294967295,e=n+(o<<6&4294967295|o>>>26),o=i+(n^(e|~r))+s[11]+3174756917&4294967295,i=e+(o<<10&4294967295|o>>>22),o=r+(e^(i|~n))+s[2]+718787259&4294967295,r=i+(o<<15&4294967295|o>>>17),o=n+(i^(r|~e))+s[9]+3951481745&4294967295,t.g[0]=t.g[0]+e&4294967295,t.g[1]=t.g[1]+(r+(o<<21&4294967295|o>>>11))&4294967295,t.g[2]=t.g[2]+r&4294967295,t.g[3]=t.g[3]+i&4294967295}pn.prototype.j=function(t,e){e===void 0&&(e=t.length);for(var n=e-this.blockSize,s=this.m,r=this.h,i=0;i<e;){if(r==0)for(;i<=n;)Hc(this,t,i),i+=this.blockSize;if(typeof t=="string"){for(;i<e;)if(s[r++]=t.charCodeAt(i++),r==this.blockSize){Hc(this,s),r=0;break}}else for(;i<e;)if(s[r++]=t[i++],r==this.blockSize){Hc(this,s),r=0;break}}this.h=r,this.i+=e};pn.prototype.l=function(){var t=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);t[0]=128;for(var e=1;e<t.length-8;++e)t[e]=0;var n=8*this.i;for(e=t.length-8;e<t.length;++e)t[e]=n&255,n/=256;for(this.j(t),t=Array(16),e=n=0;4>e;++e)for(var s=0;32>s;s+=8)t[n++]=this.g[e]>>>s&255;return t};function Ie(t,e){this.h=e;for(var n=[],s=!0,r=t.length-1;0<=r;r--){var i=t[r]|0;s&&i==e||(n[r]=i,s=!1)}this.g=n}var _S={};function Td(t){return-128<=t&&128>t?AR(t,function(e){return new Ie([e|0],0>e?-1:0)}):new Ie([t|0],0>t?-1:0)}function An(t){if(isNaN(t)||!isFinite(t))return Sr;if(0>t)return ht(An(-t));for(var e=[],n=1,s=0;t>=n;s++)e[s]=t/n|0,n*=ju;return new Ie(e,0)}function rv(t,e){if(t.length==0)throw Error("number format error: empty string");if(e=e||10,2>e||36<e)throw Error("radix out of range: "+e);if(t.charAt(0)=="-")return ht(rv(t.substring(1),e));if(0<=t.indexOf("-"))throw Error('number format error: interior "-" character');for(var n=An(Math.pow(e,8)),s=Sr,r=0;r<t.length;r+=8){var i=Math.min(8,t.length-r),o=parseInt(t.substring(r,r+i),e);8>i?(i=An(Math.pow(e,i)),s=s.R(i).add(An(o))):(s=s.R(n),s=s.add(An(o)))}return s}var ju=4294967296,Sr=Td(0),Wu=Td(1),Up=Td(16777216);L=Ie.prototype;L.ea=function(){if(Yt(this))return-ht(this).ea();for(var t=0,e=1,n=0;n<this.g.length;n++){var s=this.D(n);t+=(0<=s?s:ju+s)*e,e*=ju}return t};L.toString=function(t){if(t=t||10,2>t||36<t)throw Error("radix out of range: "+t);if(Wn(this))return"0";if(Yt(this))return"-"+ht(this).toString(t);for(var e=An(Math.pow(t,6)),n=this,s="";;){var r=el(n,e).g;n=Za(n,r.R(e));var i=((0<n.g.length?n.g[0]:n.h)>>>0).toString(t);if(n=r,Wn(n))return i+s;for(;6>i.length;)i="0"+i;s=i+s}};L.D=function(t){return 0>t?0:t<this.g.length?this.g[t]:this.h};function Wn(t){if(t.h!=0)return!1;for(var e=0;e<t.g.length;e++)if(t.g[e]!=0)return!1;return!0}function Yt(t){return t.h==-1}L.X=function(t){return t=Za(this,t),Yt(t)?-1:Wn(t)?0:1};function ht(t){for(var e=t.g.length,n=[],s=0;s<e;s++)n[s]=~t.g[s];return new Ie(n,~t.h).add(Wu)}L.abs=function(){return Yt(this)?ht(this):this};L.add=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],s=0,r=0;r<=e;r++){var i=s+(this.D(r)&65535)+(t.D(r)&65535),o=(i>>>16)+(this.D(r)>>>16)+(t.D(r)>>>16);s=o>>>16,i&=65535,o&=65535,n[r]=o<<16|i}return new Ie(n,n[n.length-1]&-2147483648?-1:0)};function Za(t,e){return t.add(ht(e))}L.R=function(t){if(Wn(this)||Wn(t))return Sr;if(Yt(this))return Yt(t)?ht(this).R(ht(t)):ht(ht(this).R(t));if(Yt(t))return ht(this.R(ht(t)));if(0>this.X(Up)&&0>t.X(Up))return An(this.ea()*t.ea());for(var e=this.g.length+t.g.length,n=[],s=0;s<2*e;s++)n[s]=0;for(s=0;s<this.g.length;s++)for(var r=0;r<t.g.length;r++){var i=this.D(s)>>>16,o=this.D(s)&65535,a=t.D(r)>>>16,l=t.D(r)&65535;n[2*s+2*r]+=o*l,ia(n,2*s+2*r),n[2*s+2*r+1]+=i*l,ia(n,2*s+2*r+1),n[2*s+2*r+1]+=o*a,ia(n,2*s+2*r+1),n[2*s+2*r+2]+=i*a,ia(n,2*s+2*r+2)}for(s=0;s<e;s++)n[s]=n[2*s+1]<<16|n[2*s];for(s=e;s<2*e;s++)n[s]=0;return new Ie(n,0)};function ia(t,e){for(;(t[e]&65535)!=t[e];)t[e+1]+=t[e]>>>16,t[e]&=65535,e++}function pi(t,e){this.g=t,this.h=e}function el(t,e){if(Wn(e))throw Error("division by zero");if(Wn(t))return new pi(Sr,Sr);if(Yt(t))return e=el(ht(t),e),new pi(ht(e.g),ht(e.h));if(Yt(e))return e=el(t,ht(e)),new pi(ht(e.g),e.h);if(30<t.g.length){if(Yt(t)||Yt(e))throw Error("slowDivide_ only works with positive integers.");for(var n=Wu,s=e;0>=s.X(t);)n=Bp(n),s=Bp(s);var r=hr(n,1),i=hr(s,1);for(s=hr(s,2),n=hr(n,2);!Wn(s);){var o=i.add(s);0>=o.X(t)&&(r=r.add(n),i=o),s=hr(s,1),n=hr(n,1)}return e=Za(t,r.R(e)),new pi(r,e)}for(r=Sr;0<=t.X(e);){for(n=Math.max(1,Math.floor(t.ea()/e.ea())),s=Math.ceil(Math.log(n)/Math.LN2),s=48>=s?1:Math.pow(2,s-48),i=An(n),o=i.R(e);Yt(o)||0<o.X(t);)n-=s,i=An(n),o=i.R(e);Wn(i)&&(i=Wu),r=r.add(i),t=Za(t,o)}return new pi(r,t)}L.gb=function(t){return el(this,t).h};L.and=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],s=0;s<e;s++)n[s]=this.D(s)&t.D(s);return new Ie(n,this.h&t.h)};L.or=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],s=0;s<e;s++)n[s]=this.D(s)|t.D(s);return new Ie(n,this.h|t.h)};L.xor=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],s=0;s<e;s++)n[s]=this.D(s)^t.D(s);return new Ie(n,this.h^t.h)};function Bp(t){for(var e=t.g.length+1,n=[],s=0;s<e;s++)n[s]=t.D(s)<<1|t.D(s-1)>>>31;return new Ie(n,t.h)}function hr(t,e){var n=e>>5;e%=32;for(var s=t.g.length-n,r=[],i=0;i<s;i++)r[i]=0<e?t.D(i+n)>>>e|t.D(i+n+1)<<32-e:t.D(i+n);return new Ie(r,t.h)}Ja.prototype.createWebChannel=Ja.prototype.g;Kt.prototype.send=Kt.prototype.u;Kt.prototype.open=Kt.prototype.m;Kt.prototype.close=Kt.prototype.close;Hl.NO_ERROR=0;Hl.TIMEOUT=8;Hl.HTTP_ERROR=6;Ty.COMPLETE="complete";Iy.EventType=Po;Po.OPEN="a";Po.CLOSE="b";Po.ERROR="c";Po.MESSAGE="d";at.prototype.listen=at.prototype.O;He.prototype.listenOnce=He.prototype.P;He.prototype.getLastError=He.prototype.Sa;He.prototype.getLastErrorCode=He.prototype.Ia;He.prototype.getStatus=He.prototype.da;He.prototype.getResponseJson=He.prototype.Wa;He.prototype.getResponseText=He.prototype.ja;He.prototype.send=He.prototype.ha;He.prototype.setWithCredentials=He.prototype.Oa;pn.prototype.digest=pn.prototype.l;pn.prototype.reset=pn.prototype.reset;pn.prototype.update=pn.prototype.j;Ie.prototype.add=Ie.prototype.add;Ie.prototype.multiply=Ie.prototype.R;Ie.prototype.modulo=Ie.prototype.gb;Ie.prototype.compare=Ie.prototype.X;Ie.prototype.toNumber=Ie.prototype.ea;Ie.prototype.toString=Ie.prototype.toString;Ie.prototype.getBits=Ie.prototype.D;Ie.fromNumber=An;Ie.fromString=rv;var mS=function(){return new Ja},yS=function(){return Wl()},qc=Hl,vS=Ty,wS=sr,$p={xb:0,Ab:1,Bb:2,Ub:3,Zb:4,Wb:5,Xb:6,Vb:7,Tb:8,Yb:9,PROXY:10,NOPROXY:11,Rb:12,Nb:13,Ob:14,Mb:15,Pb:16,Qb:17,tb:18,sb:19,ub:20},oa=Iy,ES=He,TS=pn,kr=Ie;const jp="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mt{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}mt.UNAUTHENTICATED=new mt(null),mt.GOOGLE_CREDENTIALS=new mt("google-credentials-uid"),mt.FIRST_PARTY=new mt("first-party-uid"),mt.MOCK_USER=new mt("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let si="10.4.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qs=new To("@firebase/firestore");function gi(){return Qs.logLevel}function $(t,...e){if(Qs.logLevel<=ae.DEBUG){const n=e.map(Id);Qs.debug(`Firestore (${si}): ${t}`,...n)}}function Yn(t,...e){if(Qs.logLevel<=ae.ERROR){const n=e.map(Id);Qs.error(`Firestore (${si}): ${t}`,...n)}}function Ur(t,...e){if(Qs.logLevel<=ae.WARN){const n=e.map(Id);Qs.warn(`Firestore (${si}): ${t}`,...n)}}function Id(t){if(typeof t=="string")return t;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(n){return JSON.stringify(n)}(t)}catch{return t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function X(t="Unexpected state"){const e=`FIRESTORE (${si}) INTERNAL ASSERTION FAILED: `+t;throw Yn(e),new Error(e)}function Le(t,e){t||X()}function te(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const R={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class W extends Vn{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qn{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iv{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class IS{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(mt.UNAUTHENTICATED))}shutdown(){}}class AS{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class CS{constructor(e){this.t=e,this.currentUser=mt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let s=this.i;const r=l=>this.i!==s?(s=this.i,n(l)):Promise.resolve();let i=new qn;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new qn,e.enqueueRetryable(()=>r(this.currentUser))};const o=()=>{const l=i;e.enqueueRetryable(async()=>{await l.promise,await r(this.currentUser)})},a=l=>{$("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(l=>a(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?a(l):($("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new qn)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(s=>this.i!==e?($("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(Le(typeof s.accessToken=="string"),new iv(s.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return Le(e===null||typeof e=="string"),new mt(e)}}class bS{constructor(e,n,s){this.l=e,this.h=n,this.P=s,this.type="FirstParty",this.user=mt.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class RS{constructor(e,n,s){this.l=e,this.h=n,this.P=s}getToken(){return Promise.resolve(new bS(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(mt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class SS{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class kS{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,n){const s=i=>{i.error!=null&&$("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.R;return this.R=i.token,$("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>s(i))};const r=i=>{$("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.appCheck.addTokenListener(this.o)};this.A.onInit(i=>r(i)),setTimeout(()=>{if(!this.appCheck){const i=this.A.getImmediate({optional:!0});i?r(i):$("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(Le(typeof n.token=="string"),this.R=n.token,new SS(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function PS(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let s=0;s<t;s++)n[s]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ov{static V(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let s="";for(;s.length<20;){const r=PS(40);for(let i=0;i<r.length;++i)s.length<20&&r[i]<n&&(s+=e.charAt(r[i]%e.length))}return s}}function ve(t,e){return t<e?-1:t>e?1:0}function Br(t,e,n){return t.length===e.length&&t.every((s,r)=>n(s,e[r]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ye{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new W(R.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new W(R.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new W(R.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new W(R.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return Ye.fromMillis(Date.now())}static fromDate(e){return Ye.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),s=Math.floor(1e6*(e-1e3*n));return new Ye(n,s)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?ve(this.nanoseconds,e.nanoseconds):ve(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ee{constructor(e){this.timestamp=e}static fromTimestamp(e){return new ee(e)}static min(){return new ee(new Ye(0,0))}static max(){return new ee(new Ye(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uo{constructor(e,n,s){n===void 0?n=0:n>e.length&&X(),s===void 0?s=e.length-n:s>e.length-n&&X(),this.segments=e,this.offset=n,this.len=s}get length(){return this.len}isEqual(e){return uo.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof uo?e.forEach(s=>{n.push(s)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,s=this.limit();n<s;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const s=Math.min(e.length,n.length);for(let r=0;r<s;r++){const i=e.get(r),o=n.get(r);if(i<o)return-1;if(i>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class Be extends uo{construct(e,n,s){return new Be(e,n,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const n=[];for(const s of e){if(s.indexOf("//")>=0)throw new W(R.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);n.push(...s.split("/").filter(r=>r.length>0))}return new Be(n)}static emptyPath(){return new Be([])}}const NS=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Tt extends uo{construct(e,n,s){return new Tt(e,n,s)}static isValidIdentifier(e){return NS.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Tt.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new Tt(["__name__"])}static fromServerFormat(e){const n=[];let s="",r=0;const i=()=>{if(s.length===0)throw new W(R.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(s),s=""};let o=!1;for(;r<e.length;){const a=e[r];if(a==="\\"){if(r+1===e.length)throw new W(R.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[r+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new W(R.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);s+=l,r+=2}else a==="`"?(o=!o,r++):a!=="."||o?(s+=a,r++):(i(),r++)}if(i(),o)throw new W(R.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Tt(n)}static emptyPath(){return new Tt([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class q{constructor(e){this.path=e}static fromPath(e){return new q(Be.fromString(e))}static fromName(e){return new q(Be.fromString(e).popFirst(5))}static empty(){return new q(Be.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Be.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return Be.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new q(new Be(e.slice()))}}function xS(t,e){const n=t.toTimestamp().seconds,s=t.toTimestamp().nanoseconds+1,r=ee.fromTimestamp(s===1e9?new Ye(n+1,0):new Ye(n,s));return new ys(r,q.empty(),e)}function DS(t){return new ys(t.readTime,t.key,-1)}class ys{constructor(e,n,s){this.readTime=e,this.documentKey=n,this.largestBatchId=s}static min(){return new ys(ee.min(),q.empty(),-1)}static max(){return new ys(ee.max(),q.empty(),-1)}}function OS(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=q.comparator(t.documentKey,e.documentKey),n!==0?n:ve(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const MS="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class LS{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Mo(t){if(t.code!==R.FAILED_PRECONDITION||t.message!==MS)throw t;$("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class k{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&X(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new k((s,r)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(s,r)},this.catchCallback=i=>{this.wrapFailure(n,i).next(s,r)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof k?n:k.resolve(n)}catch(n){return k.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):k.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):k.reject(n)}static resolve(e){return new k((n,s)=>{n(e)})}static reject(e){return new k((n,s)=>{s(e)})}static waitFor(e){return new k((n,s)=>{let r=0,i=0,o=!1;e.forEach(a=>{++r,a.next(()=>{++i,o&&i===r&&n()},l=>s(l))}),o=!0,i===r&&n()})}static or(e){let n=k.resolve(!1);for(const s of e)n=n.next(r=>r?k.resolve(r):s());return n}static forEach(e,n){const s=[];return e.forEach((r,i)=>{s.push(n.call(this,r,i))}),this.waitFor(s)}static mapArray(e,n){return new k((s,r)=>{const i=e.length,o=new Array(i);let a=0;for(let l=0;l<i;l++){const c=l;n(e[c]).next(u=>{o[c]=u,++a,a===i&&s(o)},u=>r(u))}})}static doWhile(e,n){return new k((s,r)=>{const i=()=>{e()===!0?n().next(()=>{i()},r):s()};i()})}}function Lo(t){return t.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ad{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=s=>this.oe(s),this._e=s=>n.writeSequenceNumber(s))}oe(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this._e&&this._e(e),e}}Ad.ae=-1;function Zl(t){return t==null}function tl(t){return t===0&&1/t==-1/0}function VS(t){return typeof t=="number"&&Number.isInteger(t)&&!tl(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wp(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function rr(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function av(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ze=class Hu{constructor(e,n){this.comparator=e,this.root=n||ps.EMPTY}insert(e,n){return new Hu(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,ps.BLACK,null,null))}remove(e){return new Hu(this.comparator,this.root.remove(e,this.comparator).copy(null,null,ps.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const s=this.comparator(e,n.key);if(s===0)return n.value;s<0?n=n.left:s>0&&(n=n.right)}return null}indexOf(e){let n=0,s=this.root;for(;!s.isEmpty();){const r=this.comparator(e,s.key);if(r===0)return n+s.left.size;r<0?s=s.left:(n+=s.left.size+1,s=s.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,s)=>(e(n,s),!1))}toString(){const e=[];return this.inorderTraversal((n,s)=>(e.push(`${n}:${s}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new aa(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new aa(this.root,e,this.comparator,!1)}getReverseIterator(){return new aa(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new aa(this.root,e,this.comparator,!0)}},aa=class{constructor(e,n,s,r){this.isReverse=r,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=n?s(e.key,n):1,n&&r&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}},ps=class Un{constructor(e,n,s,r,i){this.key=e,this.value=n,this.color=s??Un.RED,this.left=r??Un.EMPTY,this.right=i??Un.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,s,r,i){return new Un(e??this.key,n??this.value,s??this.color,r??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,s){let r=this;const i=s(e,r.key);return r=i<0?r.copy(null,null,null,r.left.insert(e,n,s),null):i===0?r.copy(null,n,null,null,null):r.copy(null,null,null,null,r.right.insert(e,n,s)),r.fixUp()}removeMin(){if(this.left.isEmpty())return Un.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let s,r=this;if(n(e,r.key)<0)r.left.isEmpty()||r.left.isRed()||r.left.left.isRed()||(r=r.moveRedLeft()),r=r.copy(null,null,null,r.left.remove(e,n),null);else{if(r.left.isRed()&&(r=r.rotateRight()),r.right.isEmpty()||r.right.isRed()||r.right.left.isRed()||(r=r.moveRedRight()),n(e,r.key)===0){if(r.right.isEmpty())return Un.EMPTY;s=r.right.min(),r=r.copy(s.key,s.value,null,null,r.right.removeMin())}r=r.copy(null,null,null,null,r.right.remove(e,n))}return r.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Un.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Un.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw X();const e=this.left.check();if(e!==this.right.check())throw X();return e+(this.isRed()?0:1)}};ps.EMPTY=null,ps.RED=!0,ps.BLACK=!1;ps.EMPTY=new class{constructor(){this.size=0}get key(){throw X()}get value(){throw X()}get color(){throw X()}get left(){throw X()}get right(){throw X()}copy(e,n,s,r,i){return this}insert(e,n,s){return new ps(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rt{constructor(e){this.comparator=e,this.data=new ze(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,s)=>(e(n),!1))}forEachInRange(e,n){const s=this.data.getIteratorFrom(e[0]);for(;s.hasNext();){const r=s.getNext();if(this.comparator(r.key,e[1])>=0)return;n(r.key)}}forEachWhile(e,n){let s;for(s=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();s.hasNext();)if(!e(s.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new Hp(this.data.getIterator())}getIteratorFrom(e){return new Hp(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(s=>{n=n.add(s)}),n}isEqual(e){if(!(e instanceof Rt)||this.size!==e.size)return!1;const n=this.data.getIterator(),s=e.data.getIterator();for(;n.hasNext();){const r=n.getNext().key,i=s.getNext().key;if(this.comparator(r,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new Rt(this.comparator);return n.data=e,n}}class Hp{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wt{constructor(e){this.fields=e,e.sort(Tt.comparator)}static empty(){return new Wt([])}unionWith(e){let n=new Rt(Tt.comparator);for(const s of this.fields)n=n.add(s);for(const s of e)n=n.add(s);return new Wt(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return Br(this.fields,e.fields,(n,s)=>n.isEqual(s))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lv extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kt{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(r){try{return atob(r)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new lv("Invalid base64 string: "+i):i}}(e);return new kt(n)}static fromUint8Array(e){const n=function(r){let i="";for(let o=0;o<r.length;++o)i+=String.fromCharCode(r[o]);return i}(e);return new kt(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const s=new Uint8Array(n.length);for(let r=0;r<n.length;r++)s[r]=n.charCodeAt(r);return s}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return ve(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}kt.EMPTY_BYTE_STRING=new kt("");const FS=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function vs(t){if(Le(!!t),typeof t=="string"){let e=0;const n=FS.exec(t);if(Le(!!n),n[1]){let r=n[1];r=(r+"000000000").substr(0,9),e=Number(r)}const s=new Date(t);return{seconds:Math.floor(s.getTime()/1e3),nanos:e}}return{seconds:Ke(t.seconds),nanos:Ke(t.nanos)}}function Ke(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Ys(t){return typeof t=="string"?kt.fromBase64String(t):kt.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cd(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function bd(t){const e=t.mapValue.fields.__previous_value__;return Cd(e)?bd(e):e}function ho(t){const e=vs(t.mapValue.fields.__local_write_time__.timestampValue);return new Ye(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class US{constructor(e,n,s,r,i,o,a,l,c){this.databaseId=e,this.appId=n,this.persistenceKey=s,this.host=r,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=l,this.useFetchStreams=c}}class fo{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new fo("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof fo&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const la={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function Xs(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Cd(t)?4:BS(t)?9007199254740991:10:X()}function Dn(t,e){if(t===e)return!0;const n=Xs(t);if(n!==Xs(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return ho(t).isEqual(ho(e));case 3:return function(r,i){if(typeof r.timestampValue=="string"&&typeof i.timestampValue=="string"&&r.timestampValue.length===i.timestampValue.length)return r.timestampValue===i.timestampValue;const o=vs(r.timestampValue),a=vs(i.timestampValue);return o.seconds===a.seconds&&o.nanos===a.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(r,i){return Ys(r.bytesValue).isEqual(Ys(i.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(r,i){return Ke(r.geoPointValue.latitude)===Ke(i.geoPointValue.latitude)&&Ke(r.geoPointValue.longitude)===Ke(i.geoPointValue.longitude)}(t,e);case 2:return function(r,i){if("integerValue"in r&&"integerValue"in i)return Ke(r.integerValue)===Ke(i.integerValue);if("doubleValue"in r&&"doubleValue"in i){const o=Ke(r.doubleValue),a=Ke(i.doubleValue);return o===a?tl(o)===tl(a):isNaN(o)&&isNaN(a)}return!1}(t,e);case 9:return Br(t.arrayValue.values||[],e.arrayValue.values||[],Dn);case 10:return function(r,i){const o=r.mapValue.fields||{},a=i.mapValue.fields||{};if(Wp(o)!==Wp(a))return!1;for(const l in o)if(o.hasOwnProperty(l)&&(a[l]===void 0||!Dn(o[l],a[l])))return!1;return!0}(t,e);default:return X()}}function po(t,e){return(t.values||[]).find(n=>Dn(n,e))!==void 0}function $r(t,e){if(t===e)return 0;const n=Xs(t),s=Xs(e);if(n!==s)return ve(n,s);switch(n){case 0:case 9007199254740991:return 0;case 1:return ve(t.booleanValue,e.booleanValue);case 2:return function(i,o){const a=Ke(i.integerValue||i.doubleValue),l=Ke(o.integerValue||o.doubleValue);return a<l?-1:a>l?1:a===l?0:isNaN(a)?isNaN(l)?0:-1:1}(t,e);case 3:return qp(t.timestampValue,e.timestampValue);case 4:return qp(ho(t),ho(e));case 5:return ve(t.stringValue,e.stringValue);case 6:return function(i,o){const a=Ys(i),l=Ys(o);return a.compareTo(l)}(t.bytesValue,e.bytesValue);case 7:return function(i,o){const a=i.split("/"),l=o.split("/");for(let c=0;c<a.length&&c<l.length;c++){const u=ve(a[c],l[c]);if(u!==0)return u}return ve(a.length,l.length)}(t.referenceValue,e.referenceValue);case 8:return function(i,o){const a=ve(Ke(i.latitude),Ke(o.latitude));return a!==0?a:ve(Ke(i.longitude),Ke(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(i,o){const a=i.values||[],l=o.values||[];for(let c=0;c<a.length&&c<l.length;++c){const u=$r(a[c],l[c]);if(u)return u}return ve(a.length,l.length)}(t.arrayValue,e.arrayValue);case 10:return function(i,o){if(i===la.mapValue&&o===la.mapValue)return 0;if(i===la.mapValue)return 1;if(o===la.mapValue)return-1;const a=i.fields||{},l=Object.keys(a),c=o.fields||{},u=Object.keys(c);l.sort(),u.sort();for(let h=0;h<l.length&&h<u.length;++h){const d=ve(l[h],u[h]);if(d!==0)return d;const p=$r(a[l[h]],c[u[h]]);if(p!==0)return p}return ve(l.length,u.length)}(t.mapValue,e.mapValue);default:throw X()}}function qp(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return ve(t,e);const n=vs(t),s=vs(e),r=ve(n.seconds,s.seconds);return r!==0?r:ve(n.nanos,s.nanos)}function jr(t){return qu(t)}function qu(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const s=vs(n);return`time(${s.seconds},${s.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return Ys(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return q.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let s="[",r=!0;for(const i of n.values||[])r?r=!1:s+=",",s+=qu(i);return s+"]"}(t.arrayValue):"mapValue"in t?function(n){const s=Object.keys(n.fields||{}).sort();let r="{",i=!0;for(const o of s)i?i=!1:r+=",",r+=`${o}:${qu(n.fields[o])}`;return r+"}"}(t.mapValue):X()}function Ku(t){return!!t&&"integerValue"in t}function Rd(t){return!!t&&"arrayValue"in t}function Kp(t){return!!t&&"nullValue"in t}function zp(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Ra(t){return!!t&&"mapValue"in t}function Li(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return rr(t.mapValue.fields,(n,s)=>e.mapValue.fields[n]=Li(s)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Li(t.arrayValue.values[n]);return e}return Object.assign({},t)}function BS(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vt{constructor(e){this.value=e}static empty(){return new Vt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let s=0;s<e.length-1;++s)if(n=(n.mapValue.fields||{})[e.get(s)],!Ra(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Li(n)}setAll(e){let n=Tt.emptyPath(),s={},r=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const l=this.getFieldsMap(n);this.applyChanges(l,s,r),s={},r=[],n=a.popLast()}o?s[a.lastSegment()]=Li(o):r.push(a.lastSegment())});const i=this.getFieldsMap(n);this.applyChanges(i,s,r)}delete(e){const n=this.field(e.popLast());Ra(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return Dn(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let s=0;s<e.length;++s){let r=n.mapValue.fields[e.get(s)];Ra(r)&&r.mapValue.fields||(r={mapValue:{fields:{}}},n.mapValue.fields[e.get(s)]=r),n=r}return n.mapValue.fields}applyChanges(e,n,s){rr(n,(r,i)=>e[r]=i);for(const r of s)delete e[r]}clone(){return new Vt(Li(this.value))}}function cv(t){const e=[];return rr(t.fields,(n,s)=>{const r=new Tt([n]);if(Ra(s)){const i=cv(s.mapValue).fields;if(i.length===0)e.push(r);else for(const o of i)e.push(r.child(o))}else e.push(r)}),new Wt(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yt{constructor(e,n,s,r,i,o,a){this.key=e,this.documentType=n,this.version=s,this.readTime=r,this.createTime=i,this.data=o,this.documentState=a}static newInvalidDocument(e){return new yt(e,0,ee.min(),ee.min(),ee.min(),Vt.empty(),0)}static newFoundDocument(e,n,s,r){return new yt(e,1,n,ee.min(),s,r,0)}static newNoDocument(e,n){return new yt(e,2,n,ee.min(),ee.min(),Vt.empty(),0)}static newUnknownDocument(e,n){return new yt(e,3,n,ee.min(),ee.min(),Vt.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(ee.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Vt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Vt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=ee.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof yt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new yt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nl{constructor(e,n){this.position=e,this.inclusive=n}}function Gp(t,e,n){let s=0;for(let r=0;r<t.position.length;r++){const i=e[r],o=t.position[r];if(i.field.isKeyField()?s=q.comparator(q.fromName(o.referenceValue),n.key):s=$r(o,n.data.field(i.field)),i.dir==="desc"&&(s*=-1),s!==0)break}return s}function Qp(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!Dn(t.position[n],e.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vi{constructor(e,n="asc"){this.field=e,this.dir=n}}function $S(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uv{}class Qe extends uv{constructor(e,n,s){super(),this.field=e,this.op=n,this.value=s}static create(e,n,s){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,s):new WS(e,n,s):n==="array-contains"?new KS(e,s):n==="in"?new zS(e,s):n==="not-in"?new GS(e,s):n==="array-contains-any"?new QS(e,s):new Qe(e,n,s)}static createKeyFieldInFilter(e,n,s){return n==="in"?new HS(e,s):new qS(e,s)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison($r(n,this.value)):n!==null&&Xs(this.value)===Xs(n)&&this.matchesComparison($r(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return X()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}getFirstInequalityField(){return this.isInequality()?this.field:null}}class On extends uv{constructor(e,n){super(),this.filters=e,this.op=n,this.ce=null}static create(e,n){return new On(e,n)}matches(e){return hv(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ce!==null||(this.ce=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ce}getFilters(){return Object.assign([],this.filters)}getFirstInequalityField(){const e=this.le(n=>n.isInequality());return e!==null?e.field:null}le(e){for(const n of this.getFlattenedFilters())if(e(n))return n;return null}}function hv(t){return t.op==="and"}function dv(t){return jS(t)&&hv(t)}function jS(t){for(const e of t.filters)if(e instanceof On)return!1;return!0}function zu(t){if(t instanceof Qe)return t.field.canonicalString()+t.op.toString()+jr(t.value);if(dv(t))return t.filters.map(e=>zu(e)).join(",");{const e=t.filters.map(n=>zu(n)).join(",");return`${t.op}(${e})`}}function fv(t,e){return t instanceof Qe?function(s,r){return r instanceof Qe&&s.op===r.op&&s.field.isEqual(r.field)&&Dn(s.value,r.value)}(t,e):t instanceof On?function(s,r){return r instanceof On&&s.op===r.op&&s.filters.length===r.filters.length?s.filters.reduce((i,o,a)=>i&&fv(o,r.filters[a]),!0):!1}(t,e):void X()}function pv(t){return t instanceof Qe?function(n){return`${n.field.canonicalString()} ${n.op} ${jr(n.value)}`}(t):t instanceof On?function(n){return n.op.toString()+" {"+n.getFilters().map(pv).join(" ,")+"}"}(t):"Filter"}class WS extends Qe{constructor(e,n,s){super(e,n,s),this.key=q.fromName(s.referenceValue)}matches(e){const n=q.comparator(e.key,this.key);return this.matchesComparison(n)}}class HS extends Qe{constructor(e,n){super(e,"in",n),this.keys=gv("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class qS extends Qe{constructor(e,n){super(e,"not-in",n),this.keys=gv("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function gv(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(s=>q.fromName(s.referenceValue))}class KS extends Qe{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Rd(n)&&po(n.arrayValue,this.value)}}class zS extends Qe{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&po(this.value.arrayValue,n)}}class GS extends Qe{constructor(e,n){super(e,"not-in",n)}matches(e){if(po(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!po(this.value.arrayValue,n)}}class QS extends Qe{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Rd(n)||!n.arrayValue.values)&&n.arrayValue.values.some(s=>po(this.value.arrayValue,s))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YS{constructor(e,n=null,s=[],r=[],i=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=s,this.filters=r,this.limit=i,this.startAt=o,this.endAt=a,this.he=null}}function Yp(t,e=null,n=[],s=[],r=null,i=null,o=null){return new YS(t,e,n,s,r,i,o)}function Sd(t){const e=te(t);if(e.he===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(s=>zu(s)).join(","),n+="|ob:",n+=e.orderBy.map(s=>function(i){return i.field.canonicalString()+i.dir}(s)).join(","),Zl(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(s=>jr(s)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(s=>jr(s)).join(",")),e.he=n}return e.he}function kd(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!$S(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!fv(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!Qp(t.startAt,e.startAt)&&Qp(t.endAt,e.endAt)}function Gu(t){return q.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ec{constructor(e,n=null,s=[],r=[],i=null,o="F",a=null,l=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=s,this.filters=r,this.limit=i,this.limitType=o,this.startAt=a,this.endAt=l,this.Pe=null,this.Ie=null,this.de=null,this.startAt,this.endAt}}function XS(t,e,n,s,r,i,o,a){return new ec(t,e,n,s,r,i,o,a)}function Pd(t){return new ec(t)}function Xp(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function JS(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function ZS(t){for(const e of t.filters){const n=e.getFirstInequalityField();if(n!==null)return n}return null}function ek(t){return t.collectionGroup!==null}function Fi(t){const e=te(t);if(e.Pe===null){e.Pe=[];const n=ZS(e),s=JS(e);if(n!==null&&s===null)n.isKeyField()||e.Pe.push(new Vi(n)),e.Pe.push(new Vi(Tt.keyField(),"asc"));else{let r=!1;for(const i of e.explicitOrderBy)e.Pe.push(i),i.field.isKeyField()&&(r=!0);if(!r){const i=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.Pe.push(new Vi(Tt.keyField(),i))}}}return e.Pe}function kn(t){const e=te(t);return e.Ie||(e.Ie=tk(e,Fi(t))),e.Ie}function tk(t,e){if(t.limitType==="F")return Yp(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(r=>{const i=r.dir==="desc"?"asc":"desc";return new Vi(r.field,i)});const n=t.endAt?new nl(t.endAt.position,t.endAt.inclusive):null,s=t.startAt?new nl(t.startAt.position,t.startAt.inclusive):null;return Yp(t.path,t.collectionGroup,e,t.filters,t.limit,n,s)}}function Qu(t,e,n){return new ec(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function tc(t,e){return kd(kn(t),kn(e))&&t.limitType===e.limitType}function _v(t){return`${Sd(kn(t))}|lt:${t.limitType}`}function gr(t){return`Query(target=${function(n){let s=n.path.canonicalString();return n.collectionGroup!==null&&(s+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(s+=`, filters: [${n.filters.map(r=>pv(r)).join(", ")}]`),Zl(n.limit)||(s+=", limit: "+n.limit),n.orderBy.length>0&&(s+=`, orderBy: [${n.orderBy.map(r=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(r)).join(", ")}]`),n.startAt&&(s+=", startAt: ",s+=n.startAt.inclusive?"b:":"a:",s+=n.startAt.position.map(r=>jr(r)).join(",")),n.endAt&&(s+=", endAt: ",s+=n.endAt.inclusive?"a:":"b:",s+=n.endAt.position.map(r=>jr(r)).join(",")),`Target(${s})`}(kn(t))}; limitType=${t.limitType})`}function nc(t,e){return e.isFoundDocument()&&function(s,r){const i=r.key.path;return s.collectionGroup!==null?r.key.hasCollectionId(s.collectionGroup)&&s.path.isPrefixOf(i):q.isDocumentKey(s.path)?s.path.isEqual(i):s.path.isImmediateParentOf(i)}(t,e)&&function(s,r){for(const i of Fi(s))if(!i.field.isKeyField()&&r.data.field(i.field)===null)return!1;return!0}(t,e)&&function(s,r){for(const i of s.filters)if(!i.matches(r))return!1;return!0}(t,e)&&function(s,r){return!(s.startAt&&!function(o,a,l){const c=Gp(o,a,l);return o.inclusive?c<=0:c<0}(s.startAt,Fi(s),r)||s.endAt&&!function(o,a,l){const c=Gp(o,a,l);return o.inclusive?c>=0:c>0}(s.endAt,Fi(s),r))}(t,e)}function nk(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function mv(t){return(e,n)=>{let s=!1;for(const r of Fi(t)){const i=sk(r,e,n);if(i!==0)return i;s=s||r.field.isKeyField()}return 0}}function sk(t,e,n){const s=t.field.isKeyField()?q.comparator(e.key,n.key):function(i,o,a){const l=o.data.field(i),c=a.data.field(i);return l!==null&&c!==null?$r(l,c):X()}(t.field,e,n);switch(t.dir){case"asc":return s;case"desc":return-1*s;default:return X()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ri{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),s=this.inner[n];if(s!==void 0){for(const[r,i]of s)if(this.equalsFn(r,e))return i}}has(e){return this.get(e)!==void 0}set(e,n){const s=this.mapKeyFn(e),r=this.inner[s];if(r===void 0)return this.inner[s]=[[e,n]],void this.innerSize++;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return void(r[i]=[e,n]);r.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),s=this.inner[n];if(s===void 0)return!1;for(let r=0;r<s.length;r++)if(this.equalsFn(s[r][0],e))return s.length===1?delete this.inner[n]:s.splice(r,1),this.innerSize--,!0;return!1}forEach(e){rr(this.inner,(n,s)=>{for(const[r,i]of s)e(r,i)})}isEmpty(){return av(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rk=new ze(q.comparator);function Xn(){return rk}const yv=new ze(q.comparator);function bi(...t){let e=yv;for(const n of t)e=e.insert(n.key,n);return e}function vv(t){let e=yv;return t.forEach((n,s)=>e=e.insert(n,s.overlayedDocument)),e}function Fs(){return Ui()}function wv(){return Ui()}function Ui(){return new ri(t=>t.toString(),(t,e)=>t.isEqual(e))}const ik=new ze(q.comparator),ok=new Rt(q.comparator);function le(...t){let e=ok;for(const n of t)e=e.add(n);return e}const ak=new Rt(ve);function lk(){return ak}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ev(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:tl(e)?"-0":e}}function Tv(t){return{integerValue:""+t}}function ck(t,e){return VS(e)?Tv(e):Ev(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sc{constructor(){this._=void 0}}function uk(t,e,n){return t instanceof sl?function(r,i){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:r.seconds,nanos:r.nanoseconds}}}};return i&&Cd(i)&&(i=bd(i)),i&&(o.fields.__previous_value__=i),{mapValue:o}}(n,e):t instanceof go?Av(t,e):t instanceof _o?Cv(t,e):function(r,i){const o=Iv(r,i),a=Jp(o)+Jp(r.Te);return Ku(o)&&Ku(r.Te)?Tv(a):Ev(r.serializer,a)}(t,e)}function hk(t,e,n){return t instanceof go?Av(t,e):t instanceof _o?Cv(t,e):n}function Iv(t,e){return t instanceof rl?function(s){return Ku(s)||function(i){return!!i&&"doubleValue"in i}(s)}(e)?e:{integerValue:0}:null}class sl extends sc{}class go extends sc{constructor(e){super(),this.elements=e}}function Av(t,e){const n=bv(e);for(const s of t.elements)n.some(r=>Dn(r,s))||n.push(s);return{arrayValue:{values:n}}}class _o extends sc{constructor(e){super(),this.elements=e}}function Cv(t,e){let n=bv(e);for(const s of t.elements)n=n.filter(r=>!Dn(r,s));return{arrayValue:{values:n}}}class rl extends sc{constructor(e,n){super(),this.serializer=e,this.Te=n}}function Jp(t){return Ke(t.integerValue||t.doubleValue)}function bv(t){return Rd(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function dk(t,e){return t.field.isEqual(e.field)&&function(s,r){return s instanceof go&&r instanceof go||s instanceof _o&&r instanceof _o?Br(s.elements,r.elements,Dn):s instanceof rl&&r instanceof rl?Dn(s.Te,r.Te):s instanceof sl&&r instanceof sl}(t.transform,e.transform)}class fk{constructor(e,n){this.version=e,this.transformResults=n}}class Jt{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new Jt}static exists(e){return new Jt(void 0,e)}static updateTime(e){return new Jt(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Sa(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class rc{}function Rv(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new Nd(t.key,Jt.none()):new Vo(t.key,t.data,Jt.none());{const n=t.data,s=Vt.empty();let r=new Rt(Tt.comparator);for(let i of e.fields)if(!r.has(i)){let o=n.field(i);o===null&&i.length>1&&(i=i.popLast(),o=n.field(i)),o===null?s.delete(i):s.set(i,o),r=r.add(i)}return new bs(t.key,s,new Wt(r.toArray()),Jt.none())}}function pk(t,e,n){t instanceof Vo?function(r,i,o){const a=r.value.clone(),l=eg(r.fieldTransforms,i,o.transformResults);a.setAll(l),i.convertToFoundDocument(o.version,a).setHasCommittedMutations()}(t,e,n):t instanceof bs?function(r,i,o){if(!Sa(r.precondition,i))return void i.convertToUnknownDocument(o.version);const a=eg(r.fieldTransforms,i,o.transformResults),l=i.data;l.setAll(Sv(r)),l.setAll(a),i.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(t,e,n):function(r,i,o){i.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function Bi(t,e,n,s){return t instanceof Vo?function(i,o,a,l){if(!Sa(i.precondition,o))return a;const c=i.value.clone(),u=tg(i.fieldTransforms,l,o);return c.setAll(u),o.convertToFoundDocument(o.version,c).setHasLocalMutations(),null}(t,e,n,s):t instanceof bs?function(i,o,a,l){if(!Sa(i.precondition,o))return a;const c=tg(i.fieldTransforms,l,o),u=o.data;return u.setAll(Sv(i)),u.setAll(c),o.convertToFoundDocument(o.version,u).setHasLocalMutations(),a===null?null:a.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(h=>h.field))}(t,e,n,s):function(i,o,a){return Sa(i.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):a}(t,e,n)}function gk(t,e){let n=null;for(const s of t.fieldTransforms){const r=e.data.field(s.field),i=Iv(s.transform,r||null);i!=null&&(n===null&&(n=Vt.empty()),n.set(s.field,i))}return n||null}function Zp(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(s,r){return s===void 0&&r===void 0||!(!s||!r)&&Br(s,r,(i,o)=>dk(i,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Vo extends rc{constructor(e,n,s,r=[]){super(),this.key=e,this.value=n,this.precondition=s,this.fieldTransforms=r,this.type=0}getFieldMask(){return null}}class bs extends rc{constructor(e,n,s,r,i=[]){super(),this.key=e,this.data=n,this.fieldMask=s,this.precondition=r,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function Sv(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const s=t.data.field(n);e.set(n,s)}}),e}function eg(t,e,n){const s=new Map;Le(t.length===n.length);for(let r=0;r<n.length;r++){const i=t[r],o=i.transform,a=e.data.field(i.field);s.set(i.field,hk(o,a,n[r]))}return s}function tg(t,e,n){const s=new Map;for(const r of t){const i=r.transform,o=n.data.field(r.field);s.set(r.field,uk(i,o,e))}return s}class Nd extends rc{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class _k extends rc{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mk{constructor(e,n,s,r){this.batchId=e,this.localWriteTime=n,this.baseMutations=s,this.mutations=r}applyToRemoteDocument(e,n){const s=n.mutationResults;for(let r=0;r<this.mutations.length;r++){const i=this.mutations[r];i.key.isEqual(e.key)&&pk(i,e,s[r])}}applyToLocalView(e,n){for(const s of this.baseMutations)s.key.isEqual(e.key)&&(n=Bi(s,e,n,this.localWriteTime));for(const s of this.mutations)s.key.isEqual(e.key)&&(n=Bi(s,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const s=wv();return this.mutations.forEach(r=>{const i=e.get(r.key),o=i.overlayedDocument;let a=this.applyToLocalView(o,i.mutatedFields);a=n.has(r.key)?null:a;const l=Rv(o,a);l!==null&&s.set(r.key,l),o.isValidDocument()||o.convertToNoDocument(ee.min())}),s}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),le())}isEqual(e){return this.batchId===e.batchId&&Br(this.mutations,e.mutations,(n,s)=>Zp(n,s))&&Br(this.baseMutations,e.baseMutations,(n,s)=>Zp(n,s))}}class xd{constructor(e,n,s,r){this.batch=e,this.commitVersion=n,this.mutationResults=s,this.docVersions=r}static from(e,n,s){Le(e.mutations.length===s.length);let r=function(){return ik}();const i=e.mutations;for(let o=0;o<i.length;o++)r=r.insert(i[o].key,s[o].version);return new xd(e,n,s,r)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yk{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vk{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var qe,he;function wk(t){switch(t){default:return X();case R.CANCELLED:case R.UNKNOWN:case R.DEADLINE_EXCEEDED:case R.RESOURCE_EXHAUSTED:case R.INTERNAL:case R.UNAVAILABLE:case R.UNAUTHENTICATED:return!1;case R.INVALID_ARGUMENT:case R.NOT_FOUND:case R.ALREADY_EXISTS:case R.PERMISSION_DENIED:case R.FAILED_PRECONDITION:case R.ABORTED:case R.OUT_OF_RANGE:case R.UNIMPLEMENTED:case R.DATA_LOSS:return!0}}function kv(t){if(t===void 0)return Yn("GRPC error has no .code"),R.UNKNOWN;switch(t){case qe.OK:return R.OK;case qe.CANCELLED:return R.CANCELLED;case qe.UNKNOWN:return R.UNKNOWN;case qe.DEADLINE_EXCEEDED:return R.DEADLINE_EXCEEDED;case qe.RESOURCE_EXHAUSTED:return R.RESOURCE_EXHAUSTED;case qe.INTERNAL:return R.INTERNAL;case qe.UNAVAILABLE:return R.UNAVAILABLE;case qe.UNAUTHENTICATED:return R.UNAUTHENTICATED;case qe.INVALID_ARGUMENT:return R.INVALID_ARGUMENT;case qe.NOT_FOUND:return R.NOT_FOUND;case qe.ALREADY_EXISTS:return R.ALREADY_EXISTS;case qe.PERMISSION_DENIED:return R.PERMISSION_DENIED;case qe.FAILED_PRECONDITION:return R.FAILED_PRECONDITION;case qe.ABORTED:return R.ABORTED;case qe.OUT_OF_RANGE:return R.OUT_OF_RANGE;case qe.UNIMPLEMENTED:return R.UNIMPLEMENTED;case qe.DATA_LOSS:return R.DATA_LOSS;default:return X()}}(he=qe||(qe={}))[he.OK=0]="OK",he[he.CANCELLED=1]="CANCELLED",he[he.UNKNOWN=2]="UNKNOWN",he[he.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",he[he.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",he[he.NOT_FOUND=5]="NOT_FOUND",he[he.ALREADY_EXISTS=6]="ALREADY_EXISTS",he[he.PERMISSION_DENIED=7]="PERMISSION_DENIED",he[he.UNAUTHENTICATED=16]="UNAUTHENTICATED",he[he.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",he[he.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",he[he.ABORTED=10]="ABORTED",he[he.OUT_OF_RANGE=11]="OUT_OF_RANGE",he[he.UNIMPLEMENTED=12]="UNIMPLEMENTED",he[he.INTERNAL=13]="INTERNAL",he[he.UNAVAILABLE=14]="UNAVAILABLE",he[he.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ek(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tk=new kr([4294967295,4294967295],0);function ng(t){const e=Ek().encode(t),n=new TS;return n.update(e),new Uint8Array(n.digest())}function sg(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),s=e.getUint32(4,!0),r=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new kr([n,s],0),new kr([r,i],0)]}class Dd{constructor(e,n,s){if(this.bitmap=e,this.padding=n,this.hashCount=s,n<0||n>=8)throw new Ri(`Invalid padding: ${n}`);if(s<0)throw new Ri(`Invalid hash count: ${s}`);if(e.length>0&&this.hashCount===0)throw new Ri(`Invalid hash count: ${s}`);if(e.length===0&&n!==0)throw new Ri(`Invalid padding when bitmap length is 0: ${n}`);this.Ae=8*e.length-n,this.Re=kr.fromNumber(this.Ae)}Ve(e,n,s){let r=e.add(n.multiply(kr.fromNumber(s)));return r.compare(Tk)===1&&(r=new kr([r.getBits(0),r.getBits(1)],0)),r.modulo(this.Re).toNumber()}me(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Ae===0)return!1;const n=ng(e),[s,r]=sg(n);for(let i=0;i<this.hashCount;i++){const o=this.Ve(s,r,i);if(!this.me(o))return!1}return!0}static create(e,n,s){const r=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),o=new Dd(i,r,n);return s.forEach(a=>o.insert(a)),o}insert(e){if(this.Ae===0)return;const n=ng(e),[s,r]=sg(n);for(let i=0;i<this.hashCount;i++){const o=this.Ve(s,r,i);this.fe(o)}}fe(e){const n=Math.floor(e/8),s=e%8;this.bitmap[n]|=1<<s}}class Ri extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ic{constructor(e,n,s,r,i){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=s,this.documentUpdates=r,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,n,s){const r=new Map;return r.set(e,Fo.createSynthesizedTargetChangeForCurrentChange(e,n,s)),new ic(ee.min(),r,new ze(ve),Xn(),le())}}class Fo{constructor(e,n,s,r,i){this.resumeToken=e,this.current=n,this.addedDocuments=s,this.modifiedDocuments=r,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,n,s){return new Fo(s,n,le(),le(),le())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ka{constructor(e,n,s,r){this.ge=e,this.removedTargetIds=n,this.key=s,this.pe=r}}class Pv{constructor(e,n){this.targetId=e,this.ye=n}}class Nv{constructor(e,n,s=kt.EMPTY_BYTE_STRING,r=null){this.state=e,this.targetIds=n,this.resumeToken=s,this.cause=r}}class rg{constructor(){this.we=0,this.Se=og(),this.be=kt.EMPTY_BYTE_STRING,this.De=!1,this.Ce=!0}get current(){return this.De}get resumeToken(){return this.be}get ve(){return this.we!==0}get Fe(){return this.Ce}Me(e){e.approximateByteSize()>0&&(this.Ce=!0,this.be=e)}xe(){let e=le(),n=le(),s=le();return this.Se.forEach((r,i)=>{switch(i){case 0:e=e.add(r);break;case 2:n=n.add(r);break;case 1:s=s.add(r);break;default:X()}}),new Fo(this.be,this.De,e,n,s)}Oe(){this.Ce=!1,this.Se=og()}Ne(e,n){this.Ce=!0,this.Se=this.Se.insert(e,n)}Be(e){this.Ce=!0,this.Se=this.Se.remove(e)}Le(){this.we+=1}ke(){this.we-=1}qe(){this.Ce=!0,this.De=!0}}class Ik{constructor(e){this.Qe=e,this.Ke=new Map,this.$e=Xn(),this.Ue=ig(),this.We=new ze(ve)}Ge(e){for(const n of e.ge)e.pe&&e.pe.isFoundDocument()?this.ze(n,e.pe):this.je(n,e.key,e.pe);for(const n of e.removedTargetIds)this.je(n,e.key,e.pe)}He(e){this.forEachTarget(e,n=>{const s=this.Je(n);switch(e.state){case 0:this.Ye(n)&&s.Me(e.resumeToken);break;case 1:s.ke(),s.ve||s.Oe(),s.Me(e.resumeToken);break;case 2:s.ke(),s.ve||this.removeTarget(n);break;case 3:this.Ye(n)&&(s.qe(),s.Me(e.resumeToken));break;case 4:this.Ye(n)&&(this.Ze(n),s.Me(e.resumeToken));break;default:X()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Ke.forEach((s,r)=>{this.Ye(r)&&n(r)})}Xe(e){const n=e.targetId,s=e.ye.count,r=this.et(n);if(r){const i=r.target;if(Gu(i))if(s===0){const o=new q(i.path);this.je(n,o,yt.newNoDocument(o,ee.min()))}else Le(s===1);else{const o=this.tt(n);if(o!==s){const a=this.nt(e),l=a?this.rt(a,e,o):1;if(l!==0){this.Ze(n);const c=l===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.We=this.We.insert(n,c)}}}}}nt(e){const n=e.ye.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:s="",padding:r=0},hashCount:i=0}=n;let o,a;try{o=Ys(s).toUint8Array()}catch(l){if(l instanceof lv)return Ur("Decoding the base64 bloom filter in existence filter failed ("+l.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw l}try{a=new Dd(o,r,i)}catch(l){return Ur(l instanceof Ri?"BloomFilter error: ":"Applying bloom filter failed: ",l),null}return a.Ae===0?null:a}rt(e,n,s){return n.ye.count===s-this.ot(e,n.targetId)?0:2}ot(e,n){const s=this.Qe.getRemoteKeysForTarget(n);let r=0;return s.forEach(i=>{const o=this.Qe.st(),a=`projects/${o.projectId}/databases/${o.database}/documents/${i.path.canonicalString()}`;e.mightContain(a)||(this.je(n,i,null),r++)}),r}_t(e){const n=new Map;this.Ke.forEach((i,o)=>{const a=this.et(o);if(a){if(i.current&&Gu(a.target)){const l=new q(a.target.path);this.$e.get(l)!==null||this.ut(o,l)||this.je(o,l,yt.newNoDocument(l,e))}i.Fe&&(n.set(o,i.xe()),i.Oe())}});let s=le();this.Ue.forEach((i,o)=>{let a=!0;o.forEachWhile(l=>{const c=this.et(l);return!c||c.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)}),a&&(s=s.add(i))}),this.$e.forEach((i,o)=>o.setReadTime(e));const r=new ic(e,n,this.We,this.$e,s);return this.$e=Xn(),this.Ue=ig(),this.We=new ze(ve),r}ze(e,n){if(!this.Ye(e))return;const s=this.ut(e,n.key)?2:0;this.Je(e).Ne(n.key,s),this.$e=this.$e.insert(n.key,n),this.Ue=this.Ue.insert(n.key,this.ct(n.key).add(e))}je(e,n,s){if(!this.Ye(e))return;const r=this.Je(e);this.ut(e,n)?r.Ne(n,1):r.Be(n),this.Ue=this.Ue.insert(n,this.ct(n).delete(e)),s&&(this.$e=this.$e.insert(n,s))}removeTarget(e){this.Ke.delete(e)}tt(e){const n=this.Je(e).xe();return this.Qe.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Le(e){this.Je(e).Le()}Je(e){let n=this.Ke.get(e);return n||(n=new rg,this.Ke.set(e,n)),n}ct(e){let n=this.Ue.get(e);return n||(n=new Rt(ve),this.Ue=this.Ue.insert(e,n)),n}Ye(e){const n=this.et(e)!==null;return n||$("WatchChangeAggregator","Detected inactive target",e),n}et(e){const n=this.Ke.get(e);return n&&n.ve?null:this.Qe.lt(e)}Ze(e){this.Ke.set(e,new rg),this.Qe.getRemoteKeysForTarget(e).forEach(n=>{this.je(e,n,null)})}ut(e,n){return this.Qe.getRemoteKeysForTarget(e).has(n)}}function ig(){return new ze(q.comparator)}function og(){return new ze(q.comparator)}const Ak=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),Ck=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))(),bk=(()=>({and:"AND",or:"OR"}))();class Rk{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function Yu(t,e){return t.useProto3Json||Zl(e)?e:{value:e}}function il(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function xv(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function Sk(t,e){return il(t,e.toTimestamp())}function Pn(t){return Le(!!t),ee.fromTimestamp(function(n){const s=vs(n);return new Ye(s.seconds,s.nanos)}(t))}function Od(t,e){return function(s){return new Be(["projects",s.projectId,"databases",s.database])}(t).child("documents").child(e).canonicalString()}function Dv(t){const e=Be.fromString(t);return Le(Vv(e)),e}function Xu(t,e){return Od(t.databaseId,e.path)}function Kc(t,e){const n=Dv(e);if(n.get(1)!==t.databaseId.projectId)throw new W(R.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new W(R.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new q(Ov(n))}function Ju(t,e){return Od(t.databaseId,e)}function kk(t){const e=Dv(t);return e.length===4?Be.emptyPath():Ov(e)}function Zu(t){return new Be(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function Ov(t){return Le(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function ag(t,e,n){return{name:Xu(t,e),fields:n.value.mapValue.fields}}function Pk(t,e){let n;if("targetChange"in e){e.targetChange;const s=function(c){return c==="NO_CHANGE"?0:c==="ADD"?1:c==="REMOVE"?2:c==="CURRENT"?3:c==="RESET"?4:X()}(e.targetChange.targetChangeType||"NO_CHANGE"),r=e.targetChange.targetIds||[],i=function(c,u){return c.useProto3Json?(Le(u===void 0||typeof u=="string"),kt.fromBase64String(u||"")):(Le(u===void 0||u instanceof Uint8Array),kt.fromUint8Array(u||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(c){const u=c.code===void 0?R.UNKNOWN:kv(c.code);return new W(u,c.message||"")}(o);n=new Nv(s,r,i,a||null)}else if("documentChange"in e){e.documentChange;const s=e.documentChange;s.document,s.document.name,s.document.updateTime;const r=Kc(t,s.document.name),i=Pn(s.document.updateTime),o=s.document.createTime?Pn(s.document.createTime):ee.min(),a=new Vt({mapValue:{fields:s.document.fields}}),l=yt.newFoundDocument(r,i,o,a),c=s.targetIds||[],u=s.removedTargetIds||[];n=new ka(c,u,l.key,l)}else if("documentDelete"in e){e.documentDelete;const s=e.documentDelete;s.document;const r=Kc(t,s.document),i=s.readTime?Pn(s.readTime):ee.min(),o=yt.newNoDocument(r,i),a=s.removedTargetIds||[];n=new ka([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const s=e.documentRemove;s.document;const r=Kc(t,s.document),i=s.removedTargetIds||[];n=new ka([],i,r,null)}else{if(!("filter"in e))return X();{e.filter;const s=e.filter;s.targetId;const{count:r=0,unchangedNames:i}=s,o=new vk(r,i),a=s.targetId;n=new Pv(a,o)}}return n}function Nk(t,e){let n;if(e instanceof Vo)n={update:ag(t,e.key,e.value)};else if(e instanceof Nd)n={delete:Xu(t,e.key)};else if(e instanceof bs)n={update:ag(t,e.key,e.data),updateMask:Bk(e.fieldMask)};else{if(!(e instanceof _k))return X();n={verify:Xu(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(s=>function(i,o){const a=o.transform;if(a instanceof sl)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(a instanceof go)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:a.elements}};if(a instanceof _o)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:a.elements}};if(a instanceof rl)return{fieldPath:o.field.canonicalString(),increment:a.Te};throw X()}(0,s))),e.precondition.isNone||(n.currentDocument=function(r,i){return i.updateTime!==void 0?{updateTime:Sk(r,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:X()}(t,e.precondition)),n}function xk(t,e){return t&&t.length>0?(Le(e!==void 0),t.map(n=>function(r,i){let o=r.updateTime?Pn(r.updateTime):Pn(i);return o.isEqual(ee.min())&&(o=Pn(i)),new fk(o,r.transformResults||[])}(n,e))):[]}function Dk(t,e){return{documents:[Ju(t,e.path)]}}function Ok(t,e){const n={structuredQuery:{}},s=e.path;e.collectionGroup!==null?(n.parent=Ju(t,s),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=Ju(t,s.popLast()),n.structuredQuery.from=[{collectionId:s.lastSegment()}]);const r=function(l){if(l.length!==0)return Lv(On.create(l,"and"))}(e.filters);r&&(n.structuredQuery.where=r);const i=function(l){if(l.length!==0)return l.map(c=>function(h){return{field:_r(h.field),direction:Vk(h.dir)}}(c))}(e.orderBy);i&&(n.structuredQuery.orderBy=i);const o=Yu(t,e.limit);return o!==null&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt=function(l){return{before:l.inclusive,values:l.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(l){return{before:!l.inclusive,values:l.position}}(e.endAt)),n}function Mk(t){let e=kk(t.parent);const n=t.structuredQuery,s=n.from?n.from.length:0;let r=null;if(s>0){Le(s===1);const u=n.from[0];u.allDescendants?r=u.collectionId:e=e.child(u.collectionId)}let i=[];n.where&&(i=function(h){const d=Mv(h);return d instanceof On&&dv(d)?d.getFilters():[d]}(n.where));let o=[];n.orderBy&&(o=function(h){return h.map(d=>function(m){return new Vi(mr(m.field),function(E){switch(E){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(m.direction))}(d))}(n.orderBy));let a=null;n.limit&&(a=function(h){let d;return d=typeof h=="object"?h.value:h,Zl(d)?null:d}(n.limit));let l=null;n.startAt&&(l=function(h){const d=!!h.before,p=h.values||[];return new nl(p,d)}(n.startAt));let c=null;return n.endAt&&(c=function(h){const d=!h.before,p=h.values||[];return new nl(p,d)}(n.endAt)),XS(e,r,o,i,a,"F",l,c)}function Lk(t,e){const n=function(r){switch(r){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return X()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function Mv(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const s=mr(n.unaryFilter.field);return Qe.create(s,"==",{doubleValue:NaN});case"IS_NULL":const r=mr(n.unaryFilter.field);return Qe.create(r,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=mr(n.unaryFilter.field);return Qe.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=mr(n.unaryFilter.field);return Qe.create(o,"!=",{nullValue:"NULL_VALUE"});default:return X()}}(t):t.fieldFilter!==void 0?function(n){return Qe.create(mr(n.fieldFilter.field),function(r){switch(r){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return X()}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return On.create(n.compositeFilter.filters.map(s=>Mv(s)),function(r){switch(r){case"AND":return"and";case"OR":return"or";default:return X()}}(n.compositeFilter.op))}(t):X()}function Vk(t){return Ak[t]}function Fk(t){return Ck[t]}function Uk(t){return bk[t]}function _r(t){return{fieldPath:t.canonicalString()}}function mr(t){return Tt.fromServerFormat(t.fieldPath)}function Lv(t){return t instanceof Qe?function(n){if(n.op==="=="){if(zp(n.value))return{unaryFilter:{field:_r(n.field),op:"IS_NAN"}};if(Kp(n.value))return{unaryFilter:{field:_r(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(zp(n.value))return{unaryFilter:{field:_r(n.field),op:"IS_NOT_NAN"}};if(Kp(n.value))return{unaryFilter:{field:_r(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:_r(n.field),op:Fk(n.op),value:n.value}}}(t):t instanceof On?function(n){const s=n.getFilters().map(r=>Lv(r));return s.length===1?s[0]:{compositeFilter:{op:Uk(n.op),filters:s}}}(t):X()}function Bk(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function Vv(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cs{constructor(e,n,s,r,i=ee.min(),o=ee.min(),a=kt.EMPTY_BYTE_STRING,l=null){this.target=e,this.targetId=n,this.purpose=s,this.sequenceNumber=r,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a,this.expectedCount=l}withSequenceNumber(e){return new cs(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new cs(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new cs(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new cs(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $k{constructor(e){this.ht=e}}function jk(t){const e=Mk({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?Qu(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wk{constructor(){this.an=new Hk}addToCollectionParentIndex(e,n){return this.an.add(n),k.resolve()}getCollectionParents(e,n){return k.resolve(this.an.getEntries(n))}addFieldIndex(e,n){return k.resolve()}deleteFieldIndex(e,n){return k.resolve()}deleteAllFieldIndexes(e){return k.resolve()}createTargetIndexes(e,n){return k.resolve()}getDocumentsMatchingTarget(e,n){return k.resolve(null)}getIndexType(e,n){return k.resolve(0)}getFieldIndexes(e,n){return k.resolve([])}getNextCollectionGroupToUpdate(e){return k.resolve(null)}getMinOffset(e,n){return k.resolve(ys.min())}getMinOffsetFromCollectionGroup(e,n){return k.resolve(ys.min())}updateCollectionGroup(e,n,s){return k.resolve()}updateIndexEntries(e,n){return k.resolve()}}class Hk{constructor(){this.index={}}add(e){const n=e.lastSegment(),s=e.popLast(),r=this.index[n]||new Rt(Be.comparator),i=!r.has(s);return this.index[n]=r.add(s),i}has(e){const n=e.lastSegment(),s=e.popLast(),r=this.index[n];return r&&r.has(s)}getEntries(e){return(this.index[e]||new Rt(Be.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wr{constructor(e){this.Nn=e}next(){return this.Nn+=2,this.Nn}static Bn(){return new Wr(0)}static Ln(){return new Wr(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qk{constructor(){this.changes=new ri(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,yt.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const s=this.changes.get(n);return s!==void 0?k.resolve(s):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kk{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zk{constructor(e,n,s,r){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=s,this.indexManager=r}getDocument(e,n){let s=null;return this.documentOverlayCache.getOverlay(e,n).next(r=>(s=r,this.remoteDocumentCache.getEntry(e,n))).next(r=>(s!==null&&Bi(s.mutation,r,Wt.empty(),Ye.now()),r))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(s=>this.getLocalViewOfDocuments(e,s,le()).next(()=>s))}getLocalViewOfDocuments(e,n,s=le()){const r=Fs();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,s).next(i=>{let o=bi();return i.forEach((a,l)=>{o=o.insert(a,l.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const s=Fs();return this.populateOverlays(e,s,n).next(()=>this.computeViews(e,n,s,le()))}populateOverlays(e,n,s){const r=[];return s.forEach(i=>{n.has(i)||r.push(i)}),this.documentOverlayCache.getOverlays(e,r).next(i=>{i.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,s,r){let i=Xn();const o=Ui(),a=function(){return Ui()}();return n.forEach((l,c)=>{const u=s.get(c.key);r.has(c.key)&&(u===void 0||u.mutation instanceof bs)?i=i.insert(c.key,c):u!==void 0?(o.set(c.key,u.mutation.getFieldMask()),Bi(u.mutation,c,u.mutation.getFieldMask(),Ye.now())):o.set(c.key,Wt.empty())}),this.recalculateAndSaveOverlays(e,i).next(l=>(l.forEach((c,u)=>o.set(c,u)),n.forEach((c,u)=>{var h;return a.set(c,new Kk(u,(h=o.get(c))!==null&&h!==void 0?h:null))}),a))}recalculateAndSaveOverlays(e,n){const s=Ui();let r=new ze((o,a)=>o-a),i=le();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(l=>{const c=n.get(l);if(c===null)return;let u=s.get(l)||Wt.empty();u=a.applyToLocalView(c,u),s.set(l,u);const h=(r.get(a.batchId)||le()).add(l);r=r.insert(a.batchId,h)})}).next(()=>{const o=[],a=r.getReverseIterator();for(;a.hasNext();){const l=a.getNext(),c=l.key,u=l.value,h=wv();u.forEach(d=>{if(!i.has(d)){const p=Rv(n.get(d),s.get(d));p!==null&&h.set(d,p),i=i.add(d)}}),o.push(this.documentOverlayCache.saveOverlays(e,c,h))}return k.waitFor(o)}).next(()=>s)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(s=>this.recalculateAndSaveOverlays(e,s))}getDocumentsMatchingQuery(e,n,s,r){return function(o){return q.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):ek(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,s,r):this.getDocumentsMatchingCollectionQuery(e,n,s,r)}getNextDocuments(e,n,s,r){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,s,r).next(i=>{const o=r-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,s.largestBatchId,r-i.size):k.resolve(Fs());let a=-1,l=i;return o.next(c=>k.forEach(c,(u,h)=>(a<h.largestBatchId&&(a=h.largestBatchId),i.get(u)?k.resolve():this.remoteDocumentCache.getEntry(e,u).next(d=>{l=l.insert(u,d)}))).next(()=>this.populateOverlays(e,c,i)).next(()=>this.computeViews(e,l,c,le())).next(u=>({batchId:a,changes:vv(u)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new q(n)).next(s=>{let r=bi();return s.isFoundDocument()&&(r=r.insert(s.key,s)),r})}getDocumentsMatchingCollectionGroupQuery(e,n,s,r){const i=n.collectionGroup;let o=bi();return this.indexManager.getCollectionParents(e,i).next(a=>k.forEach(a,l=>{const c=function(h,d){return new ec(d,null,h.explicitOrderBy.slice(),h.filters.slice(),h.limit,h.limitType,h.startAt,h.endAt)}(n,l.child(i));return this.getDocumentsMatchingCollectionQuery(e,c,s,r).next(u=>{u.forEach((h,d)=>{o=o.insert(h,d)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,s,r){let i;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,s.largestBatchId).next(o=>(i=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,s,i,r))).next(o=>{i.forEach((l,c)=>{const u=c.getKey();o.get(u)===null&&(o=o.insert(u,yt.newInvalidDocument(u)))});let a=bi();return o.forEach((l,c)=>{const u=i.get(l);u!==void 0&&Bi(u.mutation,c,Wt.empty(),Ye.now()),nc(n,c)&&(a=a.insert(l,c))}),a})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gk{constructor(e){this.serializer=e,this.lr=new Map,this.hr=new Map}getBundleMetadata(e,n){return k.resolve(this.lr.get(n))}saveBundleMetadata(e,n){return this.lr.set(n.id,function(r){return{id:r.id,version:r.version,createTime:Pn(r.createTime)}}(n)),k.resolve()}getNamedQuery(e,n){return k.resolve(this.hr.get(n))}saveNamedQuery(e,n){return this.hr.set(n.name,function(r){return{name:r.name,query:jk(r.bundledQuery),readTime:Pn(r.readTime)}}(n)),k.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qk{constructor(){this.overlays=new ze(q.comparator),this.Pr=new Map}getOverlay(e,n){return k.resolve(this.overlays.get(n))}getOverlays(e,n){const s=Fs();return k.forEach(n,r=>this.getOverlay(e,r).next(i=>{i!==null&&s.set(r,i)})).next(()=>s)}saveOverlays(e,n,s){return s.forEach((r,i)=>{this.It(e,n,i)}),k.resolve()}removeOverlaysForBatchId(e,n,s){const r=this.Pr.get(s);return r!==void 0&&(r.forEach(i=>this.overlays=this.overlays.remove(i)),this.Pr.delete(s)),k.resolve()}getOverlaysForCollection(e,n,s){const r=Fs(),i=n.length+1,o=new q(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const l=a.getNext().value,c=l.getKey();if(!n.isPrefixOf(c.path))break;c.path.length===i&&l.largestBatchId>s&&r.set(l.getKey(),l)}return k.resolve(r)}getOverlaysForCollectionGroup(e,n,s,r){let i=new ze((c,u)=>c-u);const o=this.overlays.getIterator();for(;o.hasNext();){const c=o.getNext().value;if(c.getKey().getCollectionGroup()===n&&c.largestBatchId>s){let u=i.get(c.largestBatchId);u===null&&(u=Fs(),i=i.insert(c.largestBatchId,u)),u.set(c.getKey(),c)}}const a=Fs(),l=i.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach((c,u)=>a.set(c,u)),!(a.size()>=r)););return k.resolve(a)}It(e,n,s){const r=this.overlays.get(s.key);if(r!==null){const o=this.Pr.get(r.largestBatchId).delete(s.key);this.Pr.set(r.largestBatchId,o)}this.overlays=this.overlays.insert(s.key,new yk(n,s));let i=this.Pr.get(n);i===void 0&&(i=le(),this.Pr.set(n,i)),this.Pr.set(n,i.add(s.key))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Md{constructor(){this.Ir=new Rt(st.dr),this.Tr=new Rt(st.Er)}isEmpty(){return this.Ir.isEmpty()}addReference(e,n){const s=new st(e,n);this.Ir=this.Ir.add(s),this.Tr=this.Tr.add(s)}Ar(e,n){e.forEach(s=>this.addReference(s,n))}removeReference(e,n){this.Rr(new st(e,n))}Vr(e,n){e.forEach(s=>this.removeReference(s,n))}mr(e){const n=new q(new Be([])),s=new st(n,e),r=new st(n,e+1),i=[];return this.Tr.forEachInRange([s,r],o=>{this.Rr(o),i.push(o.key)}),i}gr(){this.Ir.forEach(e=>this.Rr(e))}Rr(e){this.Ir=this.Ir.delete(e),this.Tr=this.Tr.delete(e)}pr(e){const n=new q(new Be([])),s=new st(n,e),r=new st(n,e+1);let i=le();return this.Tr.forEachInRange([s,r],o=>{i=i.add(o.key)}),i}containsKey(e){const n=new st(e,0),s=this.Ir.firstAfterOrEqual(n);return s!==null&&e.isEqual(s.key)}}class st{constructor(e,n){this.key=e,this.yr=n}static dr(e,n){return q.comparator(e.key,n.key)||ve(e.yr,n.yr)}static Er(e,n){return ve(e.yr,n.yr)||q.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yk{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.wr=1,this.Sr=new Rt(st.dr)}checkEmpty(e){return k.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,s,r){const i=this.wr;this.wr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new mk(i,n,s,r);this.mutationQueue.push(o);for(const a of r)this.Sr=this.Sr.add(new st(a.key,i)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return k.resolve(o)}lookupMutationBatch(e,n){return k.resolve(this.br(n))}getNextMutationBatchAfterBatchId(e,n){const s=n+1,r=this.Dr(s),i=r<0?0:r;return k.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return k.resolve(this.mutationQueue.length===0?-1:this.wr-1)}getAllMutationBatches(e){return k.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const s=new st(n,0),r=new st(n,Number.POSITIVE_INFINITY),i=[];return this.Sr.forEachInRange([s,r],o=>{const a=this.br(o.yr);i.push(a)}),k.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,n){let s=new Rt(ve);return n.forEach(r=>{const i=new st(r,0),o=new st(r,Number.POSITIVE_INFINITY);this.Sr.forEachInRange([i,o],a=>{s=s.add(a.yr)})}),k.resolve(this.Cr(s))}getAllMutationBatchesAffectingQuery(e,n){const s=n.path,r=s.length+1;let i=s;q.isDocumentKey(i)||(i=i.child(""));const o=new st(new q(i),0);let a=new Rt(ve);return this.Sr.forEachWhile(l=>{const c=l.key.path;return!!s.isPrefixOf(c)&&(c.length===r&&(a=a.add(l.yr)),!0)},o),k.resolve(this.Cr(a))}Cr(e){const n=[];return e.forEach(s=>{const r=this.br(s);r!==null&&n.push(r)}),n}removeMutationBatch(e,n){Le(this.vr(n.batchId,"removed")===0),this.mutationQueue.shift();let s=this.Sr;return k.forEach(n.mutations,r=>{const i=new st(r.key,n.batchId);return s=s.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,r.key)}).next(()=>{this.Sr=s})}xn(e){}containsKey(e,n){const s=new st(n,0),r=this.Sr.firstAfterOrEqual(s);return k.resolve(n.isEqual(r&&r.key))}performConsistencyCheck(e){return this.mutationQueue.length,k.resolve()}vr(e,n){return this.Dr(e)}Dr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}br(e){const n=this.Dr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xk{constructor(e){this.Fr=e,this.docs=function(){return new ze(q.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const s=n.key,r=this.docs.get(s),i=r?r.size:0,o=this.Fr(n);return this.docs=this.docs.insert(s,{document:n.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,s.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const s=this.docs.get(n);return k.resolve(s?s.document.mutableCopy():yt.newInvalidDocument(n))}getEntries(e,n){let s=Xn();return n.forEach(r=>{const i=this.docs.get(r);s=s.insert(r,i?i.document.mutableCopy():yt.newInvalidDocument(r))}),k.resolve(s)}getDocumentsMatchingQuery(e,n,s,r){let i=Xn();const o=n.path,a=new q(o.child("")),l=this.docs.getIteratorFrom(a);for(;l.hasNext();){const{key:c,value:{document:u}}=l.getNext();if(!o.isPrefixOf(c.path))break;c.path.length>o.length+1||OS(DS(u),s)<=0||(r.has(u.key)||nc(n,u))&&(i=i.insert(u.key,u.mutableCopy()))}return k.resolve(i)}getAllFromCollectionGroup(e,n,s,r){X()}Mr(e,n){return k.forEach(this.docs,s=>n(s))}newChangeBuffer(e){return new Jk(this)}getSize(e){return k.resolve(this.size)}}class Jk extends qk{constructor(e){super(),this.ur=e}applyChanges(e){const n=[];return this.changes.forEach((s,r)=>{r.isValidDocument()?n.push(this.ur.addEntry(e,r)):this.ur.removeEntry(s)}),k.waitFor(n)}getFromCache(e,n){return this.ur.getEntry(e,n)}getAllFromCache(e,n){return this.ur.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zk{constructor(e){this.persistence=e,this.Or=new ri(n=>Sd(n),kd),this.lastRemoteSnapshotVersion=ee.min(),this.highestTargetId=0,this.Nr=0,this.Br=new Md,this.targetCount=0,this.Lr=Wr.Bn()}forEachTarget(e,n){return this.Or.forEach((s,r)=>n(r)),k.resolve()}getLastRemoteSnapshotVersion(e){return k.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return k.resolve(this.Nr)}allocateTargetId(e){return this.highestTargetId=this.Lr.next(),k.resolve(this.highestTargetId)}setTargetsMetadata(e,n,s){return s&&(this.lastRemoteSnapshotVersion=s),n>this.Nr&&(this.Nr=n),k.resolve()}Qn(e){this.Or.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.Lr=new Wr(n),this.highestTargetId=n),e.sequenceNumber>this.Nr&&(this.Nr=e.sequenceNumber)}addTargetData(e,n){return this.Qn(n),this.targetCount+=1,k.resolve()}updateTargetData(e,n){return this.Qn(n),k.resolve()}removeTargetData(e,n){return this.Or.delete(n.target),this.Br.mr(n.targetId),this.targetCount-=1,k.resolve()}removeTargets(e,n,s){let r=0;const i=[];return this.Or.forEach((o,a)=>{a.sequenceNumber<=n&&s.get(a.targetId)===null&&(this.Or.delete(o),i.push(this.removeMatchingKeysForTargetId(e,a.targetId)),r++)}),k.waitFor(i).next(()=>r)}getTargetCount(e){return k.resolve(this.targetCount)}getTargetData(e,n){const s=this.Or.get(n)||null;return k.resolve(s)}addMatchingKeys(e,n,s){return this.Br.Ar(n,s),k.resolve()}removeMatchingKeys(e,n,s){this.Br.Vr(n,s);const r=this.persistence.referenceDelegate,i=[];return r&&n.forEach(o=>{i.push(r.markPotentiallyOrphaned(e,o))}),k.waitFor(i)}removeMatchingKeysForTargetId(e,n){return this.Br.mr(n),k.resolve()}getMatchingKeysForTargetId(e,n){const s=this.Br.pr(n);return k.resolve(s)}containsKey(e,n){return k.resolve(this.Br.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eP{constructor(e,n){this.kr={},this.overlays={},this.qr=new Ad(0),this.Qr=!1,this.Qr=!0,this.referenceDelegate=e(this),this.Kr=new Zk(this),this.indexManager=new Wk,this.remoteDocumentCache=function(r){return new Xk(r)}(s=>this.referenceDelegate.$r(s)),this.serializer=new $k(n),this.Ur=new Gk(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Qr=!1,Promise.resolve()}get started(){return this.Qr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new Qk,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let s=this.kr[e.toKey()];return s||(s=new Yk(n,this.referenceDelegate),this.kr[e.toKey()]=s),s}getTargetCache(){return this.Kr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ur}runTransaction(e,n,s){$("MemoryPersistence","Starting transaction:",e);const r=new tP(this.qr.next());return this.referenceDelegate.Wr(),s(r).next(i=>this.referenceDelegate.Gr(r).next(()=>i)).toPromise().then(i=>(r.raiseOnCommittedEvent(),i))}zr(e,n){return k.or(Object.values(this.kr).map(s=>()=>s.containsKey(e,n)))}}class tP extends LS{constructor(e){super(),this.currentSequenceNumber=e}}class Ld{constructor(e){this.persistence=e,this.jr=new Md,this.Hr=null}static Jr(e){return new Ld(e)}get Yr(){if(this.Hr)return this.Hr;throw X()}addReference(e,n,s){return this.jr.addReference(s,n),this.Yr.delete(s.toString()),k.resolve()}removeReference(e,n,s){return this.jr.removeReference(s,n),this.Yr.add(s.toString()),k.resolve()}markPotentiallyOrphaned(e,n){return this.Yr.add(n.toString()),k.resolve()}removeTarget(e,n){this.jr.mr(n.targetId).forEach(r=>this.Yr.add(r.toString()));const s=this.persistence.getTargetCache();return s.getMatchingKeysForTargetId(e,n.targetId).next(r=>{r.forEach(i=>this.Yr.add(i.toString()))}).next(()=>s.removeTargetData(e,n))}Wr(){this.Hr=new Set}Gr(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return k.forEach(this.Yr,s=>{const r=q.fromPath(s);return this.Zr(e,r).next(i=>{i||n.removeEntry(r,ee.min())})}).next(()=>(this.Hr=null,n.apply(e)))}updateLimboDocument(e,n){return this.Zr(e,n).next(s=>{s?this.Yr.delete(n.toString()):this.Yr.add(n.toString())})}$r(e){return 0}Zr(e,n){return k.or([()=>k.resolve(this.jr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.zr(e,n)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vd{constructor(e,n,s,r){this.targetId=e,this.fromCache=n,this.Qi=s,this.Ki=r}static $i(e,n){let s=le(),r=le();for(const i of n.docChanges)switch(i.type){case 0:s=s.add(i.doc.key);break;case 1:r=r.add(i.doc.key)}return new Vd(e,n.fromCache,s,r)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nP{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sP{constructor(){this.Ui=!1,this.Wi=!1,this.Gi=100,this.zi=8}initialize(e,n){this.ji=e,this.indexManager=n,this.Ui=!0}getDocumentsMatchingQuery(e,n,s,r){const i={result:null};return this.Hi(e,n).next(o=>{i.result=o}).next(()=>{if(!i.result)return this.Ji(e,n,r,s).next(o=>{i.result=o})}).next(()=>{if(i.result)return;const o=new nP;return this.Yi(e,n,o).next(a=>{if(i.result=a,this.Wi)return this.Zi(e,n,o,a.size)})}).next(()=>i.result)}Zi(e,n,s,r){return s.documentReadCount<this.Gi?(gi()<=ae.DEBUG&&$("QueryEngine","SDK will not create cache indexes for query:",gr(n),"since it only creates cache indexes for collection contains","more than or equal to",this.Gi,"documents"),k.resolve()):(gi()<=ae.DEBUG&&$("QueryEngine","Query:",gr(n),"scans",s.documentReadCount,"local documents and returns",r,"documents as results."),s.documentReadCount>this.zi*r?(gi()<=ae.DEBUG&&$("QueryEngine","The SDK decides to create cache indexes for query:",gr(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,kn(n))):k.resolve())}Hi(e,n){if(Xp(n))return k.resolve(null);let s=kn(n);return this.indexManager.getIndexType(e,s).next(r=>r===0?null:(n.limit!==null&&r===1&&(n=Qu(n,null,"F"),s=kn(n)),this.indexManager.getDocumentsMatchingTarget(e,s).next(i=>{const o=le(...i);return this.ji.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,s).next(l=>{const c=this.Xi(n,a);return this.es(n,c,o,l.readTime)?this.Hi(e,Qu(n,null,"F")):this.ts(e,c,n,l)}))})))}Ji(e,n,s,r){return Xp(n)||r.isEqual(ee.min())?k.resolve(null):this.ji.getDocuments(e,s).next(i=>{const o=this.Xi(n,i);return this.es(n,o,s,r)?k.resolve(null):(gi()<=ae.DEBUG&&$("QueryEngine","Re-using previous result from %s to execute query: %s",r.toString(),gr(n)),this.ts(e,o,n,xS(r,-1)).next(a=>a))})}Xi(e,n){let s=new Rt(mv(e));return n.forEach((r,i)=>{nc(e,i)&&(s=s.add(i))}),s}es(e,n,s,r){if(e.limit===null)return!1;if(s.size!==n.size)return!0;const i=e.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(r)>0)}Yi(e,n,s){return gi()<=ae.DEBUG&&$("QueryEngine","Using full collection scan to execute query:",gr(n)),this.ji.getDocumentsMatchingQuery(e,n,ys.min(),s)}ts(e,n,s,r){return this.ji.getDocumentsMatchingQuery(e,s,r).next(i=>(n.forEach(o=>{i=i.insert(o.key,o)}),i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rP{constructor(e,n,s,r){this.persistence=e,this.ns=n,this.serializer=r,this.rs=new ze(ve),this.ss=new ri(i=>Sd(i),kd),this.os=new Map,this._s=e.getRemoteDocumentCache(),this.Kr=e.getTargetCache(),this.Ur=e.getBundleCache(),this.us(s)}us(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new zk(this._s,this.mutationQueue,this.documentOverlayCache,this.indexManager),this._s.setIndexManager(this.indexManager),this.ns.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.rs))}}function iP(t,e,n,s){return new rP(t,e,n,s)}async function Fv(t,e){const n=te(t);return await n.persistence.runTransaction("Handle user change","readonly",s=>{let r;return n.mutationQueue.getAllMutationBatches(s).next(i=>(r=i,n.us(e),n.mutationQueue.getAllMutationBatches(s))).next(i=>{const o=[],a=[];let l=le();for(const c of r){o.push(c.batchId);for(const u of c.mutations)l=l.add(u.key)}for(const c of i){a.push(c.batchId);for(const u of c.mutations)l=l.add(u.key)}return n.localDocuments.getDocuments(s,l).next(c=>({cs:c,removedBatchIds:o,addedBatchIds:a}))})})}function oP(t,e){const n=te(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",s=>{const r=e.batch.keys(),i=n._s.newChangeBuffer({trackRemovals:!0});return function(a,l,c,u){const h=c.batch,d=h.keys();let p=k.resolve();return d.forEach(m=>{p=p.next(()=>u.getEntry(l,m)).next(_=>{const E=c.docVersions.get(m);Le(E!==null),_.version.compareTo(E)<0&&(h.applyToRemoteDocument(_,c),_.isValidDocument()&&(_.setReadTime(c.commitVersion),u.addEntry(_)))})}),p.next(()=>a.mutationQueue.removeMutationBatch(l,h))}(n,s,e,i).next(()=>i.apply(s)).next(()=>n.mutationQueue.performConsistencyCheck(s)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(s,r,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(s,function(a){let l=le();for(let c=0;c<a.mutationResults.length;++c)a.mutationResults[c].transformResults.length>0&&(l=l.add(a.batch.mutations[c].key));return l}(e))).next(()=>n.localDocuments.getDocuments(s,r))})}function Uv(t){const e=te(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Kr.getLastRemoteSnapshotVersion(n))}function aP(t,e){const n=te(t),s=e.snapshotVersion;let r=n.rs;return n.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=n._s.newChangeBuffer({trackRemovals:!0});r=n.rs;const a=[];e.targetChanges.forEach((u,h)=>{const d=r.get(h);if(!d)return;a.push(n.Kr.removeMatchingKeys(i,u.removedDocuments,h).next(()=>n.Kr.addMatchingKeys(i,u.addedDocuments,h)));let p=d.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(h)!==null?p=p.withResumeToken(kt.EMPTY_BYTE_STRING,ee.min()).withLastLimboFreeSnapshotVersion(ee.min()):u.resumeToken.approximateByteSize()>0&&(p=p.withResumeToken(u.resumeToken,s)),r=r.insert(h,p),function(_,E,F){return _.resumeToken.approximateByteSize()===0||E.snapshotVersion.toMicroseconds()-_.snapshotVersion.toMicroseconds()>=3e8?!0:F.addedDocuments.size+F.modifiedDocuments.size+F.removedDocuments.size>0}(d,p,u)&&a.push(n.Kr.updateTargetData(i,p))});let l=Xn(),c=le();if(e.documentUpdates.forEach(u=>{e.resolvedLimboDocuments.has(u)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(i,u))}),a.push(lP(i,o,e.documentUpdates).next(u=>{l=u.ls,c=u.hs})),!s.isEqual(ee.min())){const u=n.Kr.getLastRemoteSnapshotVersion(i).next(h=>n.Kr.setTargetsMetadata(i,i.currentSequenceNumber,s));a.push(u)}return k.waitFor(a).next(()=>o.apply(i)).next(()=>n.localDocuments.getLocalViewOfDocuments(i,l,c)).next(()=>l)}).then(i=>(n.rs=r,i))}function lP(t,e,n){let s=le(),r=le();return n.forEach(i=>s=s.add(i)),e.getEntries(t,s).next(i=>{let o=Xn();return n.forEach((a,l)=>{const c=i.get(a);l.isFoundDocument()!==c.isFoundDocument()&&(r=r.add(a)),l.isNoDocument()&&l.version.isEqual(ee.min())?(e.removeEntry(a,l.readTime),o=o.insert(a,l)):!c.isValidDocument()||l.version.compareTo(c.version)>0||l.version.compareTo(c.version)===0&&c.hasPendingWrites?(e.addEntry(l),o=o.insert(a,l)):$("LocalStore","Ignoring outdated watch update for ",a,". Current version:",c.version," Watch version:",l.version)}),{ls:o,hs:r}})}function cP(t,e){const n=te(t);return n.persistence.runTransaction("Get next mutation batch","readonly",s=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(s,e)))}function uP(t,e){const n=te(t);return n.persistence.runTransaction("Allocate target","readwrite",s=>{let r;return n.Kr.getTargetData(s,e).next(i=>i?(r=i,k.resolve(r)):n.Kr.allocateTargetId(s).next(o=>(r=new cs(e,o,"TargetPurposeListen",s.currentSequenceNumber),n.Kr.addTargetData(s,r).next(()=>r))))}).then(s=>{const r=n.rs.get(s.targetId);return(r===null||s.snapshotVersion.compareTo(r.snapshotVersion)>0)&&(n.rs=n.rs.insert(s.targetId,s),n.ss.set(e,s.targetId)),s})}async function eh(t,e,n){const s=te(t),r=s.rs.get(e),i=n?"readwrite":"readwrite-primary";try{n||await s.persistence.runTransaction("Release target",i,o=>s.persistence.referenceDelegate.removeTarget(o,r))}catch(o){if(!Lo(o))throw o;$("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}s.rs=s.rs.remove(e),s.ss.delete(r.target)}function lg(t,e,n){const s=te(t);let r=ee.min(),i=le();return s.persistence.runTransaction("Execute query","readwrite",o=>function(l,c,u){const h=te(l),d=h.ss.get(u);return d!==void 0?k.resolve(h.rs.get(d)):h.Kr.getTargetData(c,u)}(s,o,kn(e)).next(a=>{if(a)return r=a.lastLimboFreeSnapshotVersion,s.Kr.getMatchingKeysForTargetId(o,a.targetId).next(l=>{i=l})}).next(()=>s.ns.getDocumentsMatchingQuery(o,e,n?r:ee.min(),n?i:le())).next(a=>(hP(s,nk(e),a),{documents:a,Ps:i})))}function hP(t,e,n){let s=t.os.get(e)||ee.min();n.forEach((r,i)=>{i.readTime.compareTo(s)>0&&(s=i.readTime)}),t.os.set(e,s)}class cg{constructor(){this.activeTargetIds=lk()}Rs(e){this.activeTargetIds=this.activeTargetIds.add(e)}Vs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}As(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class dP{constructor(){this.ro=new cg,this.io={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,s){}addLocalQueryTarget(e){return this.ro.Rs(e),this.io[e]||"not-current"}updateQueryState(e,n,s){this.io[e]=n}removeLocalQueryTarget(e){this.ro.Vs(e)}isLocalQueryTarget(e){return this.ro.activeTargetIds.has(e)}clearQueryState(e){delete this.io[e]}getAllActiveQueryTargets(){return this.ro.activeTargetIds}isActiveQueryTarget(e){return this.ro.activeTargetIds.has(e)}start(){return this.ro=new cg,Promise.resolve()}handleUserChange(e,n,s){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fP{so(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ug{constructor(){this.oo=()=>this._o(),this.ao=()=>this.uo(),this.co=[],this.lo()}so(e){this.co.push(e)}shutdown(){window.removeEventListener("online",this.oo),window.removeEventListener("offline",this.ao)}lo(){window.addEventListener("online",this.oo),window.addEventListener("offline",this.ao)}_o(){$("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.co)e(0)}uo(){$("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.co)e(1)}static C(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ca=null;function zc(){return ca===null?ca=function(){return 268435456+Math.round(2147483648*Math.random())}():ca++,"0x"+ca.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pP={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gP{constructor(e){this.ho=e.ho,this.Po=e.Po}Io(e){this.To=e}Eo(e){this.Ao=e}onMessage(e){this.Ro=e}close(){this.Po()}send(e){this.ho(e)}Vo(){this.To()}mo(e){this.Ao(e)}fo(e){this.Ro(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _t="WebChannelConnection";class _P extends class{constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const s=n.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.po=s+"://"+n.host,this.yo=`projects/${r}/databases/${i}`,this.wo=this.databaseId.database==="(default)"?`project_id=${r}`:`project_id=${r}&database_id=${i}`}get So(){return!1}bo(n,s,r,i,o){const a=zc(),l=this.Do(n,s);$("RestConnection",`Sending RPC '${n}' ${a}:`,l,r);const c={"google-cloud-resource-prefix":this.yo,"x-goog-request-params":this.wo};return this.Co(c,i,o),this.vo(n,l,c,r).then(u=>($("RestConnection",`Received RPC '${n}' ${a}: `,u),u),u=>{throw Ur("RestConnection",`RPC '${n}' ${a} failed with error: `,u,"url: ",l,"request:",r),u})}Fo(n,s,r,i,o,a){return this.bo(n,s,r,i,o)}Co(n,s,r){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+si}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),s&&s.headers.forEach((i,o)=>n[o]=i),r&&r.headers.forEach((i,o)=>n[o]=i)}Do(n,s){const r=pP[n];return`${this.po}/v1/${s}:${r}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}vo(e,n,s,r){const i=zc();return new Promise((o,a)=>{const l=new ES;l.setWithCredentials(!0),l.listenOnce(vS.COMPLETE,()=>{try{switch(l.getLastErrorCode()){case qc.NO_ERROR:const u=l.getResponseJson();$(_t,`XHR for RPC '${e}' ${i} received:`,JSON.stringify(u)),o(u);break;case qc.TIMEOUT:$(_t,`RPC '${e}' ${i} timed out`),a(new W(R.DEADLINE_EXCEEDED,"Request time out"));break;case qc.HTTP_ERROR:const h=l.getStatus();if($(_t,`RPC '${e}' ${i} failed with status:`,h,"response text:",l.getResponseText()),h>0){let d=l.getResponseJson();Array.isArray(d)&&(d=d[0]);const p=d==null?void 0:d.error;if(p&&p.status&&p.message){const m=function(E){const F=E.toLowerCase().replace(/_/g,"-");return Object.values(R).indexOf(F)>=0?F:R.UNKNOWN}(p.status);a(new W(m,p.message))}else a(new W(R.UNKNOWN,"Server responded with status "+l.getStatus()))}else a(new W(R.UNAVAILABLE,"Connection failed."));break;default:X()}}finally{$(_t,`RPC '${e}' ${i} completed.`)}});const c=JSON.stringify(r);$(_t,`RPC '${e}' ${i} sending request:`,r),l.send(n,"POST",c,s,15)})}Mo(e,n,s){const r=zc(),i=[this.po,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=mS(),a=yS(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},c=this.longPollingOptions.timeoutSeconds;c!==void 0&&(l.longPollingTimeout=Math.round(1e3*c)),this.useFetchStreams&&(l.useFetchStreams=!0),this.Co(l.initMessageHeaders,n,s),l.encodeInitMessageHeaders=!0;const u=i.join("");$(_t,`Creating RPC '${e}' stream ${r}: ${u}`,l);const h=o.createWebChannel(u,l);let d=!1,p=!1;const m=new gP({ho:E=>{p?$(_t,`Not sending because RPC '${e}' stream ${r} is closed:`,E):(d||($(_t,`Opening RPC '${e}' stream ${r} transport.`),h.open(),d=!0),$(_t,`RPC '${e}' stream ${r} sending:`,E),h.send(E))},Po:()=>h.close()}),_=(E,F,v)=>{E.listen(F,y=>{try{v(y)}catch(w){setTimeout(()=>{throw w},0)}})};return _(h,oa.EventType.OPEN,()=>{p||$(_t,`RPC '${e}' stream ${r} transport opened.`)}),_(h,oa.EventType.CLOSE,()=>{p||(p=!0,$(_t,`RPC '${e}' stream ${r} transport closed`),m.mo())}),_(h,oa.EventType.ERROR,E=>{p||(p=!0,Ur(_t,`RPC '${e}' stream ${r} transport errored:`,E),m.mo(new W(R.UNAVAILABLE,"The operation could not be completed")))}),_(h,oa.EventType.MESSAGE,E=>{var F;if(!p){const v=E.data[0];Le(!!v);const y=v,w=y.error||((F=y[0])===null||F===void 0?void 0:F.error);if(w){$(_t,`RPC '${e}' stream ${r} received error:`,w);const U=w.status;let Q=function(pe){const Pe=qe[pe];if(Pe!==void 0)return kv(Pe)}(U),ie=w.message;Q===void 0&&(Q=R.INTERNAL,ie="Unknown error status: "+U+" with message "+w.message),p=!0,m.mo(new W(Q,ie)),h.close()}else $(_t,`RPC '${e}' stream ${r} received:`,v),m.fo(v)}}),_(a,wS.STAT_EVENT,E=>{E.stat===$p.PROXY?$(_t,`RPC '${e}' stream ${r} detected buffering proxy`):E.stat===$p.NOPROXY&&$(_t,`RPC '${e}' stream ${r} detected no buffering proxy`)}),setTimeout(()=>{m.Vo()},0),m}}function Gc(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oc(t){return new Rk(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bv{constructor(e,n,s=1e3,r=1.5,i=6e4){this._i=e,this.timerId=n,this.xo=s,this.Oo=r,this.No=i,this.Bo=0,this.Lo=null,this.ko=Date.now(),this.reset()}reset(){this.Bo=0}qo(){this.Bo=this.No}Qo(e){this.cancel();const n=Math.floor(this.Bo+this.Ko()),s=Math.max(0,Date.now()-this.ko),r=Math.max(0,n-s);r>0&&$("ExponentialBackoff",`Backing off for ${r} ms (base delay: ${this.Bo} ms, delay with jitter: ${n} ms, last attempt: ${s} ms ago)`),this.Lo=this._i.enqueueAfterDelay(this.timerId,r,()=>(this.ko=Date.now(),e())),this.Bo*=this.Oo,this.Bo<this.xo&&(this.Bo=this.xo),this.Bo>this.No&&(this.Bo=this.No)}$o(){this.Lo!==null&&(this.Lo.skipDelay(),this.Lo=null)}cancel(){this.Lo!==null&&(this.Lo.cancel(),this.Lo=null)}Ko(){return(Math.random()-.5)*this.Bo}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $v{constructor(e,n,s,r,i,o,a,l){this._i=e,this.Uo=s,this.Wo=r,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=l,this.state=0,this.Go=0,this.zo=null,this.jo=null,this.stream=null,this.Ho=new Bv(e,n)}Jo(){return this.state===1||this.state===5||this.Yo()}Yo(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Zo()}async stop(){this.Jo()&&await this.close(0)}Xo(){this.state=0,this.Ho.reset()}e_(){this.Yo()&&this.zo===null&&(this.zo=this._i.enqueueAfterDelay(this.Uo,6e4,()=>this.t_()))}n_(e){this.r_(),this.stream.send(e)}async t_(){if(this.Yo())return this.close(0)}r_(){this.zo&&(this.zo.cancel(),this.zo=null)}i_(){this.jo&&(this.jo.cancel(),this.jo=null)}async close(e,n){this.r_(),this.i_(),this.Ho.cancel(),this.Go++,e!==4?this.Ho.reset():n&&n.code===R.RESOURCE_EXHAUSTED?(Yn(n.toString()),Yn("Using maximum backoff delay to prevent overloading the backend."),this.Ho.qo()):n&&n.code===R.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.s_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Eo(n)}s_(){}auth(){this.state=1;const e=this.o_(this.Go),n=this.Go;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([s,r])=>{this.Go===n&&this.__(s,r)},s=>{e(()=>{const r=new W(R.UNKNOWN,"Fetching auth token failed: "+s.message);return this.a_(r)})})}__(e,n){const s=this.o_(this.Go);this.stream=this.u_(e,n),this.stream.Io(()=>{s(()=>(this.state=2,this.jo=this._i.enqueueAfterDelay(this.Wo,1e4,()=>(this.Yo()&&(this.state=3),Promise.resolve())),this.listener.Io()))}),this.stream.Eo(r=>{s(()=>this.a_(r))}),this.stream.onMessage(r=>{s(()=>this.onMessage(r))})}Zo(){this.state=5,this.Ho.Qo(async()=>{this.state=0,this.start()})}a_(e){return $("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}o_(e){return n=>{this._i.enqueueAndForget(()=>this.Go===e?n():($("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class mP extends $v{constructor(e,n,s,r,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,s,r,o),this.serializer=i}u_(e,n){return this.connection.Mo("Listen",e,n)}onMessage(e){this.Ho.reset();const n=Pk(this.serializer,e),s=function(i){if(!("targetChange"in i))return ee.min();const o=i.targetChange;return o.targetIds&&o.targetIds.length?ee.min():o.readTime?Pn(o.readTime):ee.min()}(e);return this.listener.c_(n,s)}l_(e){const n={};n.database=Zu(this.serializer),n.addTarget=function(i,o){let a;const l=o.target;if(a=Gu(l)?{documents:Dk(i,l)}:{query:Ok(i,l)},a.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){a.resumeToken=xv(i,o.resumeToken);const c=Yu(i,o.expectedCount);c!==null&&(a.expectedCount=c)}else if(o.snapshotVersion.compareTo(ee.min())>0){a.readTime=il(i,o.snapshotVersion.toTimestamp());const c=Yu(i,o.expectedCount);c!==null&&(a.expectedCount=c)}return a}(this.serializer,e);const s=Lk(this.serializer,e);s&&(n.labels=s),this.n_(n)}h_(e){const n={};n.database=Zu(this.serializer),n.removeTarget=e,this.n_(n)}}class yP extends $v{constructor(e,n,s,r,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,s,r,o),this.serializer=i,this.P_=!1}get I_(){return this.P_}start(){this.P_=!1,this.lastStreamToken=void 0,super.start()}s_(){this.P_&&this.d_([])}u_(e,n){return this.connection.Mo("Write",e,n)}onMessage(e){if(Le(!!e.streamToken),this.lastStreamToken=e.streamToken,this.P_){this.Ho.reset();const n=xk(e.writeResults,e.commitTime),s=Pn(e.commitTime);return this.listener.T_(s,n)}return Le(!e.writeResults||e.writeResults.length===0),this.P_=!0,this.listener.E_()}A_(){const e={};e.database=Zu(this.serializer),this.n_(e)}d_(e){const n={streamToken:this.lastStreamToken,writes:e.map(s=>Nk(this.serializer,s))};this.n_(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vP extends class{}{constructor(e,n,s,r){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=s,this.serializer=r,this.R_=!1}V_(){if(this.R_)throw new W(R.FAILED_PRECONDITION,"The client has already been terminated.")}bo(e,n,s){return this.V_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([r,i])=>this.connection.bo(e,n,s,r,i)).catch(r=>{throw r.name==="FirebaseError"?(r.code===R.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),r):new W(R.UNKNOWN,r.toString())})}Fo(e,n,s,r){return this.V_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.connection.Fo(e,n,s,i,o,r)).catch(i=>{throw i.name==="FirebaseError"?(i.code===R.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new W(R.UNKNOWN,i.toString())})}terminate(){this.R_=!0}}class wP{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.f_=0,this.g_=null,this.p_=!0}y_(){this.f_===0&&(this.w_("Unknown"),this.g_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.g_=null,this.S_("Backend didn't respond within 10 seconds."),this.w_("Offline"),Promise.resolve())))}b_(e){this.state==="Online"?this.w_("Unknown"):(this.f_++,this.f_>=1&&(this.D_(),this.S_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.w_("Offline")))}set(e){this.D_(),this.f_=0,e==="Online"&&(this.p_=!1),this.w_(e)}w_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}S_(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.p_?(Yn(n),this.p_=!1):$("OnlineStateTracker",n)}D_(){this.g_!==null&&(this.g_.cancel(),this.g_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class EP{constructor(e,n,s,r,i){this.localStore=e,this.datastore=n,this.asyncQueue=s,this.remoteSyncer={},this.C_=[],this.v_=new Map,this.F_=new Set,this.M_=[],this.x_=i,this.x_.so(o=>{s.enqueueAndForget(async()=>{ir(this)&&($("RemoteStore","Restarting streams for network reachability change."),await async function(l){const c=te(l);c.F_.add(4),await Uo(c),c.O_.set("Unknown"),c.F_.delete(4),await ac(c)}(this))})}),this.O_=new wP(s,r)}}async function ac(t){if(ir(t))for(const e of t.M_)await e(!0)}async function Uo(t){for(const e of t.M_)await e(!1)}function jv(t,e){const n=te(t);n.v_.has(e.targetId)||(n.v_.set(e.targetId,e),Bd(n)?Ud(n):ii(n).Yo()&&Fd(n,e))}function Wv(t,e){const n=te(t),s=ii(n);n.v_.delete(e),s.Yo()&&Hv(n,e),n.v_.size===0&&(s.Yo()?s.e_():ir(n)&&n.O_.set("Unknown"))}function Fd(t,e){if(t.N_.Le(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(ee.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}ii(t).l_(e)}function Hv(t,e){t.N_.Le(e),ii(t).h_(e)}function Ud(t){t.N_=new Ik({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),lt:e=>t.v_.get(e)||null,st:()=>t.datastore.serializer.databaseId}),ii(t).start(),t.O_.y_()}function Bd(t){return ir(t)&&!ii(t).Jo()&&t.v_.size>0}function ir(t){return te(t).F_.size===0}function qv(t){t.N_=void 0}async function TP(t){t.v_.forEach((e,n)=>{Fd(t,e)})}async function IP(t,e){qv(t),Bd(t)?(t.O_.b_(e),Ud(t)):t.O_.set("Unknown")}async function AP(t,e,n){if(t.O_.set("Online"),e instanceof Nv&&e.state===2&&e.cause)try{await async function(r,i){const o=i.cause;for(const a of i.targetIds)r.v_.has(a)&&(await r.remoteSyncer.rejectListen(a,o),r.v_.delete(a),r.N_.removeTarget(a))}(t,e)}catch(s){$("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),s),await ol(t,s)}else if(e instanceof ka?t.N_.Ge(e):e instanceof Pv?t.N_.Xe(e):t.N_.He(e),!n.isEqual(ee.min()))try{const s=await Uv(t.localStore);n.compareTo(s)>=0&&await function(i,o){const a=i.N_._t(o);return a.targetChanges.forEach((l,c)=>{if(l.resumeToken.approximateByteSize()>0){const u=i.v_.get(c);u&&i.v_.set(c,u.withResumeToken(l.resumeToken,o))}}),a.targetMismatches.forEach((l,c)=>{const u=i.v_.get(l);if(!u)return;i.v_.set(l,u.withResumeToken(kt.EMPTY_BYTE_STRING,u.snapshotVersion)),Hv(i,l);const h=new cs(u.target,l,c,u.sequenceNumber);Fd(i,h)}),i.remoteSyncer.applyRemoteEvent(a)}(t,n)}catch(s){$("RemoteStore","Failed to raise snapshot:",s),await ol(t,s)}}async function ol(t,e,n){if(!Lo(e))throw e;t.F_.add(1),await Uo(t),t.O_.set("Offline"),n||(n=()=>Uv(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{$("RemoteStore","Retrying IndexedDB access"),await n(),t.F_.delete(1),await ac(t)})}function Kv(t,e){return e().catch(n=>ol(t,n,e))}async function lc(t){const e=te(t),n=ws(e);let s=e.C_.length>0?e.C_[e.C_.length-1].batchId:-1;for(;CP(e);)try{const r=await cP(e.localStore,s);if(r===null){e.C_.length===0&&n.e_();break}s=r.batchId,bP(e,r)}catch(r){await ol(e,r)}zv(e)&&Gv(e)}function CP(t){return ir(t)&&t.C_.length<10}function bP(t,e){t.C_.push(e);const n=ws(t);n.Yo()&&n.I_&&n.d_(e.mutations)}function zv(t){return ir(t)&&!ws(t).Jo()&&t.C_.length>0}function Gv(t){ws(t).start()}async function RP(t){ws(t).A_()}async function SP(t){const e=ws(t);for(const n of t.C_)e.d_(n.mutations)}async function kP(t,e,n){const s=t.C_.shift(),r=xd.from(s,e,n);await Kv(t,()=>t.remoteSyncer.applySuccessfulWrite(r)),await lc(t)}async function PP(t,e){e&&ws(t).I_&&await async function(s,r){if(function(o){return wk(o)&&o!==R.ABORTED}(r.code)){const i=s.C_.shift();ws(s).Xo(),await Kv(s,()=>s.remoteSyncer.rejectFailedWrite(i.batchId,r)),await lc(s)}}(t,e),zv(t)&&Gv(t)}async function hg(t,e){const n=te(t);n.asyncQueue.verifyOperationInProgress(),$("RemoteStore","RemoteStore received new credentials");const s=ir(n);n.F_.add(3),await Uo(n),s&&n.O_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.F_.delete(3),await ac(n)}async function NP(t,e){const n=te(t);e?(n.F_.delete(2),await ac(n)):e||(n.F_.add(2),await Uo(n),n.O_.set("Unknown"))}function ii(t){return t.B_||(t.B_=function(n,s,r){const i=te(n);return i.V_(),new mP(s,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,r)}(t.datastore,t.asyncQueue,{Io:TP.bind(null,t),Eo:IP.bind(null,t),c_:AP.bind(null,t)}),t.M_.push(async e=>{e?(t.B_.Xo(),Bd(t)?Ud(t):t.O_.set("Unknown")):(await t.B_.stop(),qv(t))})),t.B_}function ws(t){return t.L_||(t.L_=function(n,s,r){const i=te(n);return i.V_(),new yP(s,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,r)}(t.datastore,t.asyncQueue,{Io:RP.bind(null,t),Eo:PP.bind(null,t),E_:SP.bind(null,t),T_:kP.bind(null,t)}),t.M_.push(async e=>{e?(t.L_.Xo(),await lc(t)):(await t.L_.stop(),t.C_.length>0&&($("RemoteStore",`Stopping write stream with ${t.C_.length} pending writes`),t.C_=[]))})),t.L_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $d{constructor(e,n,s,r,i){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=s,this.op=r,this.removalCallback=i,this.deferred=new qn,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,s,r,i){const o=Date.now()+s,a=new $d(e,n,o,r,i);return a.start(s),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new W(R.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function jd(t,e){if(Yn("AsyncQueue",`${e}: ${t}`),Lo(t))return new W(R.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pr{constructor(e){this.comparator=e?(n,s)=>e(n,s)||q.comparator(n.key,s.key):(n,s)=>q.comparator(n.key,s.key),this.keyedMap=bi(),this.sortedSet=new ze(this.comparator)}static emptySet(e){return new Pr(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,s)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof Pr)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),s=e.sortedSet.getIterator();for(;n.hasNext();){const r=n.getNext().key,i=s.getNext().key;if(!r.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const s=new Pr;return s.comparator=this.comparator,s.keyedMap=e,s.sortedSet=n,s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dg{constructor(){this.k_=new ze(q.comparator)}track(e){const n=e.doc.key,s=this.k_.get(n);s?e.type!==0&&s.type===3?this.k_=this.k_.insert(n,e):e.type===3&&s.type!==1?this.k_=this.k_.insert(n,{type:s.type,doc:e.doc}):e.type===2&&s.type===2?this.k_=this.k_.insert(n,{type:2,doc:e.doc}):e.type===2&&s.type===0?this.k_=this.k_.insert(n,{type:0,doc:e.doc}):e.type===1&&s.type===0?this.k_=this.k_.remove(n):e.type===1&&s.type===2?this.k_=this.k_.insert(n,{type:1,doc:s.doc}):e.type===0&&s.type===1?this.k_=this.k_.insert(n,{type:2,doc:e.doc}):X():this.k_=this.k_.insert(n,e)}q_(){const e=[];return this.k_.inorderTraversal((n,s)=>{e.push(s)}),e}}class Hr{constructor(e,n,s,r,i,o,a,l,c){this.query=e,this.docs=n,this.oldDocs=s,this.docChanges=r,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=l,this.hasCachedResults=c}static fromInitialDocuments(e,n,s,r,i){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new Hr(e,n,Pr.emptySet(n),o,s,r,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&tc(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,s=e.docChanges;if(n.length!==s.length)return!1;for(let r=0;r<n.length;r++)if(n[r].type!==s[r].type||!n[r].doc.isEqual(s[r].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xP{constructor(){this.Q_=void 0,this.listeners=[]}}class DP{constructor(){this.queries=new ri(e=>_v(e),tc),this.onlineState="Unknown",this.K_=new Set}}async function Qv(t,e){const n=te(t),s=e.query;let r=!1,i=n.queries.get(s);if(i||(r=!0,i=new xP),r)try{i.Q_=await n.onListen(s)}catch(o){const a=jd(o,`Initialization of query '${gr(e.query)}' failed`);return void e.onError(a)}n.queries.set(s,i),i.listeners.push(e),e.U_(n.onlineState),i.Q_&&e.W_(i.Q_)&&Wd(n)}async function Yv(t,e){const n=te(t),s=e.query;let r=!1;const i=n.queries.get(s);if(i){const o=i.listeners.indexOf(e);o>=0&&(i.listeners.splice(o,1),r=i.listeners.length===0)}if(r)return n.queries.delete(s),n.onUnlisten(s)}function OP(t,e){const n=te(t);let s=!1;for(const r of e){const i=r.query,o=n.queries.get(i);if(o){for(const a of o.listeners)a.W_(r)&&(s=!0);o.Q_=r}}s&&Wd(n)}function MP(t,e,n){const s=te(t),r=s.queries.get(e);if(r)for(const i of r.listeners)i.onError(n);s.queries.delete(e)}function Wd(t){t.K_.forEach(e=>{e.next()})}class Xv{constructor(e,n,s){this.query=e,this.G_=n,this.z_=!1,this.j_=null,this.onlineState="Unknown",this.options=s||{}}W_(e){if(!this.options.includeMetadataChanges){const s=[];for(const r of e.docChanges)r.type!==3&&s.push(r);e=new Hr(e.query,e.docs,e.oldDocs,s,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.z_?this.H_(e)&&(this.G_.next(e),n=!0):this.J_(e,this.onlineState)&&(this.Y_(e),n=!0),this.j_=e,n}onError(e){this.G_.error(e)}U_(e){this.onlineState=e;let n=!1;return this.j_&&!this.z_&&this.J_(this.j_,e)&&(this.Y_(this.j_),n=!0),n}J_(e,n){if(!e.fromCache)return!0;const s=n!=="Offline";return(!this.options.Z_||!s)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}H_(e){if(e.docChanges.length>0)return!0;const n=this.j_&&this.j_.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}Y_(e){e=Hr.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.z_=!0,this.G_.next(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jv{constructor(e){this.key=e}}class Zv{constructor(e){this.key=e}}class LP{constructor(e,n){this.query=e,this.oa=n,this._a=null,this.hasCachedResults=!1,this.current=!1,this.aa=le(),this.mutatedKeys=le(),this.ua=mv(e),this.ca=new Pr(this.ua)}get la(){return this.oa}ha(e,n){const s=n?n.Pa:new dg,r=n?n.ca:this.ca;let i=n?n.mutatedKeys:this.mutatedKeys,o=r,a=!1;const l=this.query.limitType==="F"&&r.size===this.query.limit?r.last():null,c=this.query.limitType==="L"&&r.size===this.query.limit?r.first():null;if(e.inorderTraversal((u,h)=>{const d=r.get(u),p=nc(this.query,h)?h:null,m=!!d&&this.mutatedKeys.has(d.key),_=!!p&&(p.hasLocalMutations||this.mutatedKeys.has(p.key)&&p.hasCommittedMutations);let E=!1;d&&p?d.data.isEqual(p.data)?m!==_&&(s.track({type:3,doc:p}),E=!0):this.Ia(d,p)||(s.track({type:2,doc:p}),E=!0,(l&&this.ua(p,l)>0||c&&this.ua(p,c)<0)&&(a=!0)):!d&&p?(s.track({type:0,doc:p}),E=!0):d&&!p&&(s.track({type:1,doc:d}),E=!0,(l||c)&&(a=!0)),E&&(p?(o=o.add(p),i=_?i.add(u):i.delete(u)):(o=o.delete(u),i=i.delete(u)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const u=this.query.limitType==="F"?o.last():o.first();o=o.delete(u.key),i=i.delete(u.key),s.track({type:1,doc:u})}return{ca:o,Pa:s,es:a,mutatedKeys:i}}Ia(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,s){const r=this.ca;this.ca=e.ca,this.mutatedKeys=e.mutatedKeys;const i=e.Pa.q_();i.sort((c,u)=>function(d,p){const m=_=>{switch(_){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return X()}};return m(d)-m(p)}(c.type,u.type)||this.ua(c.doc,u.doc)),this.da(s);const o=n?this.Ta():[],a=this.aa.size===0&&this.current?1:0,l=a!==this._a;return this._a=a,i.length!==0||l?{snapshot:new Hr(this.query,e.ca,r,i,e.mutatedKeys,a===0,l,!1,!!s&&s.resumeToken.approximateByteSize()>0),Ea:o}:{Ea:o}}U_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({ca:this.ca,Pa:new dg,mutatedKeys:this.mutatedKeys,es:!1},!1)):{Ea:[]}}Aa(e){return!this.oa.has(e)&&!!this.ca.has(e)&&!this.ca.get(e).hasLocalMutations}da(e){e&&(e.addedDocuments.forEach(n=>this.oa=this.oa.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.oa=this.oa.delete(n)),this.current=e.current)}Ta(){if(!this.current)return[];const e=this.aa;this.aa=le(),this.ca.forEach(s=>{this.Aa(s.key)&&(this.aa=this.aa.add(s.key))});const n=[];return e.forEach(s=>{this.aa.has(s)||n.push(new Zv(s))}),this.aa.forEach(s=>{e.has(s)||n.push(new Jv(s))}),n}Ra(e){this.oa=e.Ps,this.aa=le();const n=this.ha(e.documents);return this.applyChanges(n,!0)}Va(){return Hr.fromInitialDocuments(this.query,this.ca,this.mutatedKeys,this._a===0,this.hasCachedResults)}}class VP{constructor(e,n,s){this.query=e,this.targetId=n,this.view=s}}class FP{constructor(e){this.key=e,this.ma=!1}}class UP{constructor(e,n,s,r,i,o){this.localStore=e,this.remoteStore=n,this.eventManager=s,this.sharedClientState=r,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.fa={},this.ga=new ri(a=>_v(a),tc),this.pa=new Map,this.ya=new Set,this.wa=new ze(q.comparator),this.Sa=new Map,this.ba=new Md,this.Da={},this.Ca=new Map,this.va=Wr.Ln(),this.onlineState="Unknown",this.Fa=void 0}get isPrimaryClient(){return this.Fa===!0}}async function BP(t,e){const n=YP(t);let s,r;const i=n.ga.get(e);if(i)s=i.targetId,n.sharedClientState.addLocalQueryTarget(s),r=i.view.Va();else{const o=await uP(n.localStore,kn(e)),a=n.sharedClientState.addLocalQueryTarget(o.targetId);s=o.targetId,r=await $P(n,e,s,a==="current",o.resumeToken),n.isPrimaryClient&&jv(n.remoteStore,o)}return r}async function $P(t,e,n,s,r){t.Ma=(h,d,p)=>async function(_,E,F,v){let y=E.view.ha(F);y.es&&(y=await lg(_.localStore,E.query,!1).then(({documents:Q})=>E.view.ha(Q,y)));const w=v&&v.targetChanges.get(E.targetId),U=E.view.applyChanges(y,_.isPrimaryClient,w);return pg(_,E.targetId,U.Ea),U.snapshot}(t,h,d,p);const i=await lg(t.localStore,e,!0),o=new LP(e,i.Ps),a=o.ha(i.documents),l=Fo.createSynthesizedTargetChangeForCurrentChange(n,s&&t.onlineState!=="Offline",r),c=o.applyChanges(a,t.isPrimaryClient,l);pg(t,n,c.Ea);const u=new VP(e,n,o);return t.ga.set(e,u),t.pa.has(n)?t.pa.get(n).push(e):t.pa.set(n,[e]),c.snapshot}async function jP(t,e){const n=te(t),s=n.ga.get(e),r=n.pa.get(s.targetId);if(r.length>1)return n.pa.set(s.targetId,r.filter(i=>!tc(i,e))),void n.ga.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(s.targetId),n.sharedClientState.isActiveQueryTarget(s.targetId)||await eh(n.localStore,s.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(s.targetId),Wv(n.remoteStore,s.targetId),th(n,s.targetId)}).catch(Mo)):(th(n,s.targetId),await eh(n.localStore,s.targetId,!0))}async function WP(t,e,n){const s=XP(t);try{const r=await function(o,a){const l=te(o),c=Ye.now(),u=a.reduce((p,m)=>p.add(m.key),le());let h,d;return l.persistence.runTransaction("Locally write mutations","readwrite",p=>{let m=Xn(),_=le();return l._s.getEntries(p,u).next(E=>{m=E,m.forEach((F,v)=>{v.isValidDocument()||(_=_.add(F))})}).next(()=>l.localDocuments.getOverlayedDocuments(p,m)).next(E=>{h=E;const F=[];for(const v of a){const y=gk(v,h.get(v.key).overlayedDocument);y!=null&&F.push(new bs(v.key,y,cv(y.value.mapValue),Jt.exists(!0)))}return l.mutationQueue.addMutationBatch(p,c,F,a)}).next(E=>{d=E;const F=E.applyToLocalDocumentSet(h,_);return l.documentOverlayCache.saveOverlays(p,E.batchId,F)})}).then(()=>({batchId:d.batchId,changes:vv(h)}))}(s.localStore,e);s.sharedClientState.addPendingMutation(r.batchId),function(o,a,l){let c=o.Da[o.currentUser.toKey()];c||(c=new ze(ve)),c=c.insert(a,l),o.Da[o.currentUser.toKey()]=c}(s,r.batchId,n),await Bo(s,r.changes),await lc(s.remoteStore)}catch(r){const i=jd(r,"Failed to persist write");n.reject(i)}}async function ew(t,e){const n=te(t);try{const s=await aP(n.localStore,e);e.targetChanges.forEach((r,i)=>{const o=n.Sa.get(i);o&&(Le(r.addedDocuments.size+r.modifiedDocuments.size+r.removedDocuments.size<=1),r.addedDocuments.size>0?o.ma=!0:r.modifiedDocuments.size>0?Le(o.ma):r.removedDocuments.size>0&&(Le(o.ma),o.ma=!1))}),await Bo(n,s,e)}catch(s){await Mo(s)}}function fg(t,e,n){const s=te(t);if(s.isPrimaryClient&&n===0||!s.isPrimaryClient&&n===1){const r=[];s.ga.forEach((i,o)=>{const a=o.view.U_(e);a.snapshot&&r.push(a.snapshot)}),function(o,a){const l=te(o);l.onlineState=a;let c=!1;l.queries.forEach((u,h)=>{for(const d of h.listeners)d.U_(a)&&(c=!0)}),c&&Wd(l)}(s.eventManager,e),r.length&&s.fa.c_(r),s.onlineState=e,s.isPrimaryClient&&s.sharedClientState.setOnlineState(e)}}async function HP(t,e,n){const s=te(t);s.sharedClientState.updateQueryState(e,"rejected",n);const r=s.Sa.get(e),i=r&&r.key;if(i){let o=new ze(q.comparator);o=o.insert(i,yt.newNoDocument(i,ee.min()));const a=le().add(i),l=new ic(ee.min(),new Map,new ze(ve),o,a);await ew(s,l),s.wa=s.wa.remove(i),s.Sa.delete(e),Hd(s)}else await eh(s.localStore,e,!1).then(()=>th(s,e,n)).catch(Mo)}async function qP(t,e){const n=te(t),s=e.batch.batchId;try{const r=await oP(n.localStore,e);nw(n,s,null),tw(n,s),n.sharedClientState.updateMutationState(s,"acknowledged"),await Bo(n,r)}catch(r){await Mo(r)}}async function KP(t,e,n){const s=te(t);try{const r=await function(o,a){const l=te(o);return l.persistence.runTransaction("Reject batch","readwrite-primary",c=>{let u;return l.mutationQueue.lookupMutationBatch(c,a).next(h=>(Le(h!==null),u=h.keys(),l.mutationQueue.removeMutationBatch(c,h))).next(()=>l.mutationQueue.performConsistencyCheck(c)).next(()=>l.documentOverlayCache.removeOverlaysForBatchId(c,u,a)).next(()=>l.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(c,u)).next(()=>l.localDocuments.getDocuments(c,u))})}(s.localStore,e);nw(s,e,n),tw(s,e),s.sharedClientState.updateMutationState(e,"rejected",n),await Bo(s,r)}catch(r){await Mo(r)}}function tw(t,e){(t.Ca.get(e)||[]).forEach(n=>{n.resolve()}),t.Ca.delete(e)}function nw(t,e,n){const s=te(t);let r=s.Da[s.currentUser.toKey()];if(r){const i=r.get(e);i&&(n?i.reject(n):i.resolve(),r=r.remove(e)),s.Da[s.currentUser.toKey()]=r}}function th(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const s of t.pa.get(e))t.ga.delete(s),n&&t.fa.xa(s,n);t.pa.delete(e),t.isPrimaryClient&&t.ba.mr(e).forEach(s=>{t.ba.containsKey(s)||sw(t,s)})}function sw(t,e){t.ya.delete(e.path.canonicalString());const n=t.wa.get(e);n!==null&&(Wv(t.remoteStore,n),t.wa=t.wa.remove(e),t.Sa.delete(n),Hd(t))}function pg(t,e,n){for(const s of n)s instanceof Jv?(t.ba.addReference(s.key,e),zP(t,s)):s instanceof Zv?($("SyncEngine","Document no longer in limbo: "+s.key),t.ba.removeReference(s.key,e),t.ba.containsKey(s.key)||sw(t,s.key)):X()}function zP(t,e){const n=e.key,s=n.path.canonicalString();t.wa.get(n)||t.ya.has(s)||($("SyncEngine","New document in limbo: "+n),t.ya.add(s),Hd(t))}function Hd(t){for(;t.ya.size>0&&t.wa.size<t.maxConcurrentLimboResolutions;){const e=t.ya.values().next().value;t.ya.delete(e);const n=new q(Be.fromString(e)),s=t.va.next();t.Sa.set(s,new FP(n)),t.wa=t.wa.insert(n,s),jv(t.remoteStore,new cs(kn(Pd(n.path)),s,"TargetPurposeLimboResolution",Ad.ae))}}async function Bo(t,e,n){const s=te(t),r=[],i=[],o=[];s.ga.isEmpty()||(s.ga.forEach((a,l)=>{o.push(s.Ma(l,e,n).then(c=>{if((c||n)&&s.isPrimaryClient&&s.sharedClientState.updateQueryState(l.targetId,c!=null&&c.fromCache?"not-current":"current"),c){r.push(c);const u=Vd.$i(l.targetId,c);i.push(u)}}))}),await Promise.all(o),s.fa.c_(r),await async function(l,c){const u=te(l);try{await u.persistence.runTransaction("notifyLocalViewChanges","readwrite",h=>k.forEach(c,d=>k.forEach(d.Qi,p=>u.persistence.referenceDelegate.addReference(h,d.targetId,p)).next(()=>k.forEach(d.Ki,p=>u.persistence.referenceDelegate.removeReference(h,d.targetId,p)))))}catch(h){if(!Lo(h))throw h;$("LocalStore","Failed to update sequence numbers: "+h)}for(const h of c){const d=h.targetId;if(!h.fromCache){const p=u.rs.get(d),m=p.snapshotVersion,_=p.withLastLimboFreeSnapshotVersion(m);u.rs=u.rs.insert(d,_)}}}(s.localStore,i))}async function GP(t,e){const n=te(t);if(!n.currentUser.isEqual(e)){$("SyncEngine","User change. New user:",e.toKey());const s=await Fv(n.localStore,e);n.currentUser=e,function(i,o){i.Ca.forEach(a=>{a.forEach(l=>{l.reject(new W(R.CANCELLED,o))})}),i.Ca.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,s.removedBatchIds,s.addedBatchIds),await Bo(n,s.cs)}}function QP(t,e){const n=te(t),s=n.Sa.get(e);if(s&&s.ma)return le().add(s.key);{let r=le();const i=n.pa.get(e);if(!i)return r;for(const o of i){const a=n.ga.get(o);r=r.unionWith(a.view.la)}return r}}function YP(t){const e=te(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=ew.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=QP.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=HP.bind(null,e),e.fa.c_=OP.bind(null,e.eventManager),e.fa.xa=MP.bind(null,e.eventManager),e}function XP(t){const e=te(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=qP.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=KP.bind(null,e),e}class gg{constructor(){this.synchronizeTabs=!1}async initialize(e){this.serializer=oc(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,n){return null}createIndexBackfillerScheduler(e,n){return null}createLocalStore(e){return iP(this.persistence,new sP,e.initialUser,this.serializer)}createPersistence(e){return new eP(Ld.Jr,this.serializer)}createSharedClientState(e){return new dP}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class JP{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=s=>fg(this.syncEngine,s,1),this.remoteStore.remoteSyncer.handleCredentialChange=GP.bind(null,this.syncEngine),await NP(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new DP}()}createDatastore(e){const n=oc(e.databaseInfo.databaseId),s=function(i){return new _P(i)}(e.databaseInfo);return function(i,o,a,l){return new vP(i,o,a,l)}(e.authCredentials,e.appCheckCredentials,s,n)}createRemoteStore(e){return function(s,r,i,o,a){return new EP(s,r,i,o,a)}(this.localStore,this.datastore,e.asyncQueue,n=>fg(this.syncEngine,n,0),function(){return ug.C()?new ug:new fP}())}createSyncEngine(e,n){return function(r,i,o,a,l,c,u){const h=new UP(r,i,o,a,l,c);return u&&(h.Fa=!0),h}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}terminate(){return async function(n){const s=te(n);$("RemoteStore","RemoteStore shutting down."),s.F_.add(5),await Uo(s),s.x_.shutdown(),s.O_.set("Unknown")}(this.remoteStore)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rw{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Ba(this.observer.next,e)}error(e){this.observer.error?this.Ba(this.observer.error,e):Yn("Uncaught Error in snapshot listener:",e.toString())}La(){this.muted=!0}Ba(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZP{constructor(e,n,s,r){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=s,this.databaseInfo=r,this.user=mt.UNAUTHENTICATED,this.clientId=ov.V(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(s,async i=>{$("FirestoreClient","Received user=",i.uid),await this.authCredentialListener(i),this.user=i}),this.appCheckCredentials.start(s,i=>($("FirestoreClient","Received new app check token=",i),this.appCheckCredentialListener(i,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new W(R.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new qn;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const s=jd(n,"Failed to shutdown persistence");e.reject(s)}}),e.promise}}async function Qc(t,e){t.asyncQueue.verifyOperationInProgress(),$("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let s=n.initialUser;t.setCredentialChangeListener(async r=>{s.isEqual(r)||(await Fv(e.localStore,r),s=r)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function _g(t,e){t.asyncQueue.verifyOperationInProgress();const n=await tN(t);$("FirestoreClient","Initializing OnlineComponentProvider");const s=await t.getConfiguration();await e.initialize(n,s),t.setCredentialChangeListener(r=>hg(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,i)=>hg(e.remoteStore,i)),t._onlineComponents=e}function eN(t){return t.name==="FirebaseError"?t.code===R.FAILED_PRECONDITION||t.code===R.UNIMPLEMENTED:!(typeof DOMException<"u"&&t instanceof DOMException)||t.code===22||t.code===20||t.code===11}async function tN(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){$("FirestoreClient","Using user provided OfflineComponentProvider");try{await Qc(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!eN(n))throw n;Ur("Error using user provided cache. Falling back to memory cache: "+n),await Qc(t,new gg)}}else $("FirestoreClient","Using default OfflineComponentProvider"),await Qc(t,new gg);return t._offlineComponents}async function iw(t){return t._onlineComponents||(t._uninitializedComponentsProvider?($("FirestoreClient","Using user provided OnlineComponentProvider"),await _g(t,t._uninitializedComponentsProvider._online)):($("FirestoreClient","Using default OnlineComponentProvider"),await _g(t,new JP))),t._onlineComponents}function nN(t){return iw(t).then(e=>e.syncEngine)}async function ow(t){const e=await iw(t),n=e.eventManager;return n.onListen=BP.bind(null,e.syncEngine),n.onUnlisten=jP.bind(null,e.syncEngine),n}function sN(t,e,n={}){const s=new qn;return t.asyncQueue.enqueueAndForget(async()=>function(i,o,a,l,c){const u=new rw({next:d=>{o.enqueueAndForget(()=>Yv(i,h));const p=d.docs.has(a);!p&&d.fromCache?c.reject(new W(R.UNAVAILABLE,"Failed to get document because the client is offline.")):p&&d.fromCache&&l&&l.source==="server"?c.reject(new W(R.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):c.resolve(d)},error:d=>c.reject(d)}),h=new Xv(Pd(a.path),u,{includeMetadataChanges:!0,Z_:!0});return Qv(i,h)}(await ow(t),t.asyncQueue,e,n,s)),s.promise}function rN(t,e,n={}){const s=new qn;return t.asyncQueue.enqueueAndForget(async()=>function(i,o,a,l,c){const u=new rw({next:d=>{o.enqueueAndForget(()=>Yv(i,h)),d.fromCache&&l.source==="server"?c.reject(new W(R.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):c.resolve(d)},error:d=>c.reject(d)}),h=new Xv(a,u,{includeMetadataChanges:!0,Z_:!0});return Qv(i,h)}(await ow(t),t.asyncQueue,e,n,s)),s.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function aw(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mg=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lw(t,e,n){if(!n)throw new W(R.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function iN(t,e,n,s){if(e===!0&&s===!0)throw new W(R.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function yg(t){if(!q.isDocumentKey(t))throw new W(R.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function vg(t){if(q.isDocumentKey(t))throw new W(R.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function qd(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(s){return s.constructor?s.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":X()}function gn(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new W(R.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=qd(t);throw new W(R.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wg{constructor(e){var n,s;if(e.host===void 0){if(e.ssl!==void 0)throw new W(R.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new W(R.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}iN("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=aw((s=e.experimentalLongPollingOptions)!==null&&s!==void 0?s:{}),function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new W(R.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new W(R.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new W(R.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(s,r){return s.timeoutSeconds===r.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class cc{constructor(e,n,s,r){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=s,this._app=r,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new wg({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new W(R.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new W(R.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new wg(e),e.credentials!==void 0&&(this._authCredentials=function(s){if(!s)return new IS;switch(s.type){case"firstParty":return new RS(s.sessionIndex||"0",s.iamToken||null,s.authTokenFactory||null);case"provider":return s.client;default:throw new W(R.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const s=mg.get(n);s&&($("ComponentProvider","Removing Datastore"),mg.delete(n),s.terminate())}(this),Promise.resolve()}}function oN(t,e,n,s={}){var r;const i=(t=gn(t,cc))._getSettings(),o=`${e}:${n}`;if(i.host!=="firestore.googleapis.com"&&i.host!==o&&Ur("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},i),{host:o,ssl:!1})),s.mockUserToken){let a,l;if(typeof s.mockUserToken=="string")a=s.mockUserToken,l=mt.MOCK_USER;else{a=L0(s.mockUserToken,(r=t._app)===null||r===void 0?void 0:r.options.projectId);const c=s.mockUserToken.sub||s.mockUserToken.user_id;if(!c)throw new W(R.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");l=new mt(c)}t._authCredentials=new AS(new iv(a,l))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uc{constructor(e,n,s){this.converter=n,this._query=s,this.type="query",this.firestore=e}withConverter(e){return new uc(this.firestore,e,this._query)}}class Ut{constructor(e,n,s){this.converter=n,this._key=s,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new gs(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Ut(this.firestore,e,this._key)}}class gs extends uc{constructor(e,n,s){super(e,n,Pd(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Ut(this.firestore,null,new q(e))}withConverter(e){return new gs(this.firestore,e,this._path)}}function Gt(t,e,...n){if(t=Je(t),lw("collection","path",e),t instanceof cc){const s=Be.fromString(e,...n);return vg(s),new gs(t,null,s)}{if(!(t instanceof Ut||t instanceof gs))throw new W(R.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=t._path.child(Be.fromString(e,...n));return vg(s),new gs(t.firestore,null,s)}}function tt(t,e,...n){if(t=Je(t),arguments.length===1&&(e=ov.V()),lw("doc","path",e),t instanceof cc){const s=Be.fromString(e,...n);return yg(s),new Ut(t,null,new q(s))}{if(!(t instanceof Ut||t instanceof gs))throw new W(R.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=t._path.child(Be.fromString(e,...n));return yg(s),new Ut(t.firestore,t instanceof gs?t.converter:null,new q(s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aN{constructor(){this.Za=Promise.resolve(),this.Xa=[],this.eu=!1,this.tu=[],this.nu=null,this.ru=!1,this.iu=!1,this.su=[],this.Ho=new Bv(this,"async_queue_retry"),this.ou=()=>{const n=Gc();n&&$("AsyncQueue","Visibility state changed to "+n.visibilityState),this.Ho.$o()};const e=Gc();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.ou)}get isShuttingDown(){return this.eu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this._u(),this.au(e)}enterRestrictedMode(e){if(!this.eu){this.eu=!0,this.iu=e||!1;const n=Gc();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.ou)}}enqueue(e){if(this._u(),this.eu)return new Promise(()=>{});const n=new qn;return this.au(()=>this.eu&&this.iu?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Xa.push(e),this.uu()))}async uu(){if(this.Xa.length!==0){try{await this.Xa[0](),this.Xa.shift(),this.Ho.reset()}catch(e){if(!Lo(e))throw e;$("AsyncQueue","Operation failed with retryable error: "+e)}this.Xa.length>0&&this.Ho.Qo(()=>this.uu())}}au(e){const n=this.Za.then(()=>(this.ru=!0,e().catch(s=>{this.nu=s,this.ru=!1;const r=function(o){let a=o.message||"";return o.stack&&(a=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),a}(s);throw Yn("INTERNAL UNHANDLED ERROR: ",r),s}).then(s=>(this.ru=!1,s))));return this.Za=n,n}enqueueAfterDelay(e,n,s){this._u(),this.su.indexOf(e)>-1&&(n=0);const r=$d.createAndSchedule(this,e,n,s,i=>this.cu(i));return this.tu.push(r),r}_u(){this.nu&&X()}verifyOperationInProgress(){}async lu(){let e;do e=this.Za,await e;while(e!==this.Za)}hu(e){for(const n of this.tu)if(n.timerId===e)return!0;return!1}Pu(e){return this.lu().then(()=>{this.tu.sort((n,s)=>n.targetTimeMs-s.targetTimeMs);for(const n of this.tu)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.lu()})}Iu(e){this.su.push(e)}cu(e){const n=this.tu.indexOf(e);this.tu.splice(n,1)}}class or extends cc{constructor(e,n,s,r){super(e,n,s,r),this.type="firestore",this._queue=function(){return new aN}(),this._persistenceKey=(r==null?void 0:r.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||cw(this),this._firestoreClient.terminate()}}function lN(t,e){const n=typeof t=="object"?t:qh(),s=typeof t=="string"?t:e||"(default)",r=Hh(n,"firestore").getImmediate({identifier:s});if(!r._initialized){const i=M0("firestore");i&&oN(r,...i)}return r}function Kd(t){return t._firestoreClient||cw(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function cw(t){var e,n,s;const r=t._freezeSettings(),i=function(a,l,c,u){return new US(a,l,c,u.host,u.ssl,u.experimentalForceLongPolling,u.experimentalAutoDetectLongPolling,aw(u.experimentalLongPollingOptions),u.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,r);t._firestoreClient=new ZP(t._authCredentials,t._appCheckCredentials,t._queue,i),!((n=r.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((s=r.localCache)===null||s===void 0)&&s._onlineComponentProvider)&&(t._firestoreClient._uninitializedComponentsProvider={_offlineKind:r.localCache.kind,_offline:r.localCache._offlineComponentProvider,_online:r.localCache._onlineComponentProvider})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qr{constructor(e){this._byteString=e}static fromBase64String(e){try{return new qr(kt.fromBase64String(e))}catch(n){throw new W(R.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new qr(kt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hc{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new W(R.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Tt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zd{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gd{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new W(R.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new W(R.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return ve(this._lat,e._lat)||ve(this._long,e._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cN=/^__.*__$/;class uN{constructor(e,n,s){this.data=e,this.fieldMask=n,this.fieldTransforms=s}toMutation(e,n){return this.fieldMask!==null?new bs(e,this.data,this.fieldMask,n,this.fieldTransforms):new Vo(e,this.data,n,this.fieldTransforms)}}class uw{constructor(e,n,s){this.data=e,this.fieldMask=n,this.fieldTransforms=s}toMutation(e,n){return new bs(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function hw(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw X()}}class Qd{constructor(e,n,s,r,i,o){this.settings=e,this.databaseId=n,this.serializer=s,this.ignoreUndefinedProperties=r,i===void 0&&this.du(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Tu(){return this.settings.Tu}Eu(e){return new Qd(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Au(e){var n;const s=(n=this.path)===null||n===void 0?void 0:n.child(e),r=this.Eu({path:s,Ru:!1});return r.Vu(e),r}mu(e){var n;const s=(n=this.path)===null||n===void 0?void 0:n.child(e),r=this.Eu({path:s,Ru:!1});return r.du(),r}fu(e){return this.Eu({path:void 0,Ru:!0})}gu(e){return al(e,this.settings.methodName,this.settings.pu||!1,this.path,this.settings.yu)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}du(){if(this.path)for(let e=0;e<this.path.length;e++)this.Vu(this.path.get(e))}Vu(e){if(e.length===0)throw this.gu("Document fields must not be empty");if(hw(this.Tu)&&cN.test(e))throw this.gu('Document fields cannot begin and end with "__"')}}class hN{constructor(e,n,s){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=s||oc(e)}wu(e,n,s,r=!1){return new Qd({Tu:e,methodName:n,yu:s,path:Tt.emptyPath(),Ru:!1,pu:r},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Yd(t){const e=t._freezeSettings(),n=oc(t._databaseId);return new hN(t._databaseId,!!e.ignoreUndefinedProperties,n)}function dw(t,e,n,s,r,i={}){const o=t.wu(i.merge||i.mergeFields?2:0,e,n,r);Xd("Data must be an object, but it was:",o,s);const a=fw(s,o);let l,c;if(i.merge)l=new Wt(o.fieldMask),c=o.fieldTransforms;else if(i.mergeFields){const u=[];for(const h of i.mergeFields){const d=nh(e,h,n);if(!o.contains(d))throw new W(R.INVALID_ARGUMENT,`Field '${d}' is specified in your field mask but missing from your input data.`);gw(u,d)||u.push(d)}l=new Wt(u),c=o.fieldTransforms.filter(h=>l.covers(h.field))}else l=null,c=o.fieldTransforms;return new uN(new Vt(a),l,c)}class dc extends zd{_toFieldTransform(e){if(e.Tu!==2)throw e.Tu===1?e.gu(`${this._methodName}() can only appear at the top level of your update data`):e.gu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof dc}}function dN(t,e,n,s){const r=t.wu(1,e,n);Xd("Data must be an object, but it was:",r,s);const i=[],o=Vt.empty();rr(s,(l,c)=>{const u=Jd(e,l,n);c=Je(c);const h=r.mu(u);if(c instanceof dc)i.push(u);else{const d=fc(c,h);d!=null&&(i.push(u),o.set(u,d))}});const a=new Wt(i);return new uw(o,a,r.fieldTransforms)}function fN(t,e,n,s,r,i){const o=t.wu(1,e,n),a=[nh(e,s,n)],l=[r];if(i.length%2!=0)throw new W(R.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let d=0;d<i.length;d+=2)a.push(nh(e,i[d])),l.push(i[d+1]);const c=[],u=Vt.empty();for(let d=a.length-1;d>=0;--d)if(!gw(c,a[d])){const p=a[d];let m=l[d];m=Je(m);const _=o.mu(p);if(m instanceof dc)c.push(p);else{const E=fc(m,_);E!=null&&(c.push(p),u.set(p,E))}}const h=new Wt(c);return new uw(u,h,o.fieldTransforms)}function fc(t,e){if(pw(t=Je(t)))return Xd("Unsupported field value:",e,t),fw(t,e);if(t instanceof zd)return function(s,r){if(!hw(r.Tu))throw r.gu(`${s._methodName}() can only be used with update() and set()`);if(!r.path)throw r.gu(`${s._methodName}() is not currently supported inside arrays`);const i=s._toFieldTransform(r);i&&r.fieldTransforms.push(i)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.Ru&&e.Tu!==4)throw e.gu("Nested arrays are not supported");return function(s,r){const i=[];let o=0;for(const a of s){let l=fc(a,r.fu(o));l==null&&(l={nullValue:"NULL_VALUE"}),i.push(l),o++}return{arrayValue:{values:i}}}(t,e)}return function(s,r){if((s=Je(s))===null)return{nullValue:"NULL_VALUE"};if(typeof s=="number")return ck(r.serializer,s);if(typeof s=="boolean")return{booleanValue:s};if(typeof s=="string")return{stringValue:s};if(s instanceof Date){const i=Ye.fromDate(s);return{timestampValue:il(r.serializer,i)}}if(s instanceof Ye){const i=new Ye(s.seconds,1e3*Math.floor(s.nanoseconds/1e3));return{timestampValue:il(r.serializer,i)}}if(s instanceof Gd)return{geoPointValue:{latitude:s.latitude,longitude:s.longitude}};if(s instanceof qr)return{bytesValue:xv(r.serializer,s._byteString)};if(s instanceof Ut){const i=r.databaseId,o=s.firestore._databaseId;if(!o.isEqual(i))throw r.gu(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:Od(s.firestore._databaseId||r.databaseId,s._key.path)}}throw r.gu(`Unsupported field value: ${qd(s)}`)}(t,e)}function fw(t,e){const n={};return av(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):rr(t,(s,r)=>{const i=fc(r,e.Au(s));i!=null&&(n[s]=i)}),{mapValue:{fields:n}}}function pw(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof Ye||t instanceof Gd||t instanceof qr||t instanceof Ut||t instanceof zd)}function Xd(t,e,n){if(!pw(n)||!function(r){return typeof r=="object"&&r!==null&&(Object.getPrototypeOf(r)===Object.prototype||Object.getPrototypeOf(r)===null)}(n)){const s=qd(n);throw s==="an object"?e.gu(t+" a custom object"):e.gu(t+" "+s)}}function nh(t,e,n){if((e=Je(e))instanceof hc)return e._internalPath;if(typeof e=="string")return Jd(t,e);throw al("Field path arguments must be of type string or ",t,!1,void 0,n)}const pN=new RegExp("[~\\*/\\[\\]]");function Jd(t,e,n){if(e.search(pN)>=0)throw al(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new hc(...e.split("."))._internalPath}catch{throw al(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function al(t,e,n,s,r){const i=s&&!s.isEmpty(),o=r!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let l="";return(i||o)&&(l+=" (found",i&&(l+=` in field ${s}`),o&&(l+=` in document ${r}`),l+=")"),new W(R.INVALID_ARGUMENT,a+t+l)}function gw(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _w{constructor(e,n,s,r,i){this._firestore=e,this._userDataWriter=n,this._key=s,this._document=r,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new Ut(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new gN(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(mw("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class gN extends _w{data(){return super.data()}}function mw(t,e){return typeof e=="string"?Jd(t,e):e instanceof hc?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _N(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new W(R.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class mN{convertValue(e,n="none"){switch(Xs(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Ke(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Ys(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw X()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const s={};return rr(e,(r,i)=>{s[r]=this.convertValue(i,n)}),s}convertGeoPoint(e){return new Gd(Ke(e.latitude),Ke(e.longitude))}convertArray(e,n){return(e.values||[]).map(s=>this.convertValue(s,n))}convertServerTimestamp(e,n){switch(n){case"previous":const s=bd(e);return s==null?null:this.convertValue(s,n);case"estimate":return this.convertTimestamp(ho(e));default:return null}}convertTimestamp(e){const n=vs(e);return new Ye(n.seconds,n.nanos)}convertDocumentKey(e,n){const s=Be.fromString(e);Le(Vv(s));const r=new fo(s.get(1),s.get(3)),i=new q(s.popFirst(5));return r.isEqual(n)||Yn(`Document ${i} contains a document reference within a different database (${r.projectId}/${r.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yw(t,e,n){let s;return s=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Si{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class vw extends _w{constructor(e,n,s,r,i,o){super(e,n,s,r,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new Pa(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const s=this._document.data.field(mw("DocumentSnapshot.get",e));if(s!==null)return this._userDataWriter.convertValue(s,n.serverTimestamps)}}}class Pa extends vw{data(e={}){return super.data(e)}}class yN{constructor(e,n,s,r){this._firestore=e,this._userDataWriter=n,this._snapshot=r,this.metadata=new Si(r.hasPendingWrites,r.fromCache),this.query=s}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(s=>{e.call(n,new Pa(this._firestore,this._userDataWriter,s.key,s,new Si(this._snapshot.mutatedKeys.has(s.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new W(R.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(r,i){if(r._snapshot.oldDocs.isEmpty()){let o=0;return r._snapshot.docChanges.map(a=>{const l=new Pa(r._firestore,r._userDataWriter,a.doc.key,a.doc,new Si(r._snapshot.mutatedKeys.has(a.doc.key),r._snapshot.fromCache),r.query.converter);return a.doc,{type:"added",doc:l,oldIndex:-1,newIndex:o++}})}{let o=r._snapshot.oldDocs;return r._snapshot.docChanges.filter(a=>i||a.type!==3).map(a=>{const l=new Pa(r._firestore,r._userDataWriter,a.doc.key,a.doc,new Si(r._snapshot.mutatedKeys.has(a.doc.key),r._snapshot.fromCache),r.query.converter);let c=-1,u=-1;return a.type!==0&&(c=o.indexOf(a.doc.key),o=o.delete(a.doc.key)),a.type!==1&&(o=o.add(a.doc),u=o.indexOf(a.doc.key)),{type:vN(a.type),doc:l,oldIndex:c,newIndex:u}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function vN(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return X()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ua(t){t=gn(t,Ut);const e=gn(t.firestore,or);return sN(Kd(e),t._key).then(n=>EN(e,t,n))}class ww extends mN{constructor(e){super(),this.firestore=e}convertBytes(e){return new qr(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Ut(this.firestore,null,n)}}function dr(t){t=gn(t,uc);const e=gn(t.firestore,or),n=Kd(e),s=new ww(e);return _N(t._query),rN(n,t._query).then(r=>new yN(e,s,t,r))}function wN(t,e,n){t=gn(t,Ut);const s=gn(t.firestore,or),r=yw(t.converter,e,n);return pc(s,[dw(Yd(s),"setDoc",t._key,r,t.converter!==null,n).toMutation(t._key,Jt.none())])}function vn(t,e,n,...s){t=gn(t,Ut);const r=gn(t.firestore,or),i=Yd(r);let o;return o=typeof(e=Je(e))=="string"||e instanceof hc?fN(i,"updateDoc",t._key,e,n,s):dN(i,"updateDoc",t._key,e),pc(r,[o.toMutation(t._key,Jt.exists(!0))])}function Eg(t){return pc(gn(t.firestore,or),[new Nd(t._key,Jt.none())])}function fr(t,e){const n=gn(t.firestore,or),s=tt(t),r=yw(t.converter,e);return pc(n,[dw(Yd(t.firestore),"addDoc",s._key,r,t.converter!==null,{}).toMutation(s._key,Jt.exists(!1))]).then(()=>s)}function pc(t,e){return function(s,r){const i=new qn;return s.asyncQueue.enqueueAndForget(async()=>WP(await nN(s),r,i)),i.promise}(Kd(t),e)}function EN(t,e,n){const s=n.docs.get(e._key),r=new ww(t);return new vw(t,r,e._key,s,new Si(n.hasPendingWrites,n.fromCache),e.converter)}(function(e,n=!0){(function(r){si=r})(Ts),xn(new dn("firestore",(s,{instanceIdentifier:r,options:i})=>{const o=s.getProvider("app").getImmediate(),a=new or(new CS(s.getProvider("auth-internal")),new kS(s.getProvider("app-check-internal")),function(c,u){if(!Object.prototype.hasOwnProperty.apply(c.options,["projectId"]))throw new W(R.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new fo(c.options.projectId,u)}(o,r),o);return i=Object.assign({useFetchStreams:n},i),a._setSettings(i),a},"PUBLIC").setMultipleInstances(!0)),Ht(jp,"4.2.0",e),Ht(jp,"4.2.0","esm2017")})();/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const TN=new Map,IN={activated:!1,tokenObservers:[]};function _n(t){return TN.get(t)||Object.assign({},IN)}const Tg={OFFSET_DURATION:5*60*1e3,RETRIAL_MIN_WAIT:30*1e3,RETRIAL_MAX_WAIT:16*60*1e3};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AN{constructor(e,n,s,r,i){if(this.operation=e,this.retryPolicy=n,this.getWaitDuration=s,this.lowerBound=r,this.upperBound=i,this.pending=null,this.nextErrorWaitInterval=r,r>i)throw new Error("Proactive refresh lower bound greater than upper bound!")}start(){this.nextErrorWaitInterval=this.lowerBound,this.process(!0).catch(()=>{})}stop(){this.pending&&(this.pending.reject("cancelled"),this.pending=null)}isRunning(){return!!this.pending}async process(e){this.stop();try{this.pending=new Xi,await CN(this.getNextRun(e)),this.pending.resolve(),await this.pending.promise,this.pending=new Xi,await this.operation(),this.pending.resolve(),await this.pending.promise,this.process(!0).catch(()=>{})}catch(n){this.retryPolicy(n)?this.process(!1).catch(()=>{}):this.stop()}}getNextRun(e){if(e)return this.nextErrorWaitInterval=this.lowerBound,this.getWaitDuration();{const n=this.nextErrorWaitInterval;return this.nextErrorWaitInterval*=2,this.nextErrorWaitInterval>this.upperBound&&(this.nextErrorWaitInterval=this.upperBound),n}}}function CN(t){return new Promise(e=>{setTimeout(e,t)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bN={"already-initialized":"You have already called initializeAppCheck() for FirebaseApp {$appName} with different options. To avoid this error, call initializeAppCheck() with the same options as when it was originally called. This will return the already initialized instance.","use-before-activation":"App Check is being used before initializeAppCheck() is called for FirebaseApp {$appName}. Call initializeAppCheck() before instantiating other Firebase services.","fetch-network-error":"Fetch failed to connect to a network. Check Internet connection. Original error: {$originalErrorMessage}.","fetch-parse-error":"Fetch client could not parse response. Original error: {$originalErrorMessage}.","fetch-status-error":"Fetch server returned an HTTP error status. HTTP status: {$httpStatus}.","storage-open":"Error thrown when opening storage. Original error: {$originalErrorMessage}.","storage-get":"Error thrown when reading from storage. Original error: {$originalErrorMessage}.","storage-set":"Error thrown when writing to storage. Original error: {$originalErrorMessage}.","recaptcha-error":"ReCAPTCHA error.",throttled:"Requests throttled due to {$httpStatus} error. Attempts allowed again after {$time}"},ll=new Jr("appCheck","AppCheck",bN);function Ew(t){if(!_n(t).activated)throw ll.create("use-before-activation",{appName:t.name})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const RN="firebase-app-check-database",SN=1,sh="firebase-app-check-store";let ha=null;function kN(){return ha||(ha=new Promise((t,e)=>{try{const n=indexedDB.open(RN,SN);n.onsuccess=s=>{t(s.target.result)},n.onerror=s=>{var r;e(ll.create("storage-open",{originalErrorMessage:(r=s.target.error)===null||r===void 0?void 0:r.message}))},n.onupgradeneeded=s=>{const r=s.target.result;switch(s.oldVersion){case 0:r.createObjectStore(sh,{keyPath:"compositeKey"})}}}catch(n){e(ll.create("storage-open",{originalErrorMessage:n==null?void 0:n.message}))}}),ha)}function PN(t,e){return NN(xN(t),e)}async function NN(t,e){const s=(await kN()).transaction(sh,"readwrite"),i=s.objectStore(sh).put({compositeKey:t,value:e});return new Promise((o,a)=>{i.onsuccess=l=>{o()},s.onerror=l=>{var c;a(ll.create("storage-set",{originalErrorMessage:(c=l.target.error)===null||c===void 0?void 0:c.message}))}})}function xN(t){return`${t.options.appId}-${t.name}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rh=new To("@firebase/app-check");function Ig(t,e){return ym()?PN(t,e).catch(n=>{rh.warn(`Failed to write token to IndexedDB. Error: ${n}`)}):Promise.resolve()}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const DN={error:"UNKNOWN_ERROR"};function ON(t){return xl.encodeString(JSON.stringify(t),!1)}async function ih(t,e=!1){const n=t.app;Ew(n);const s=_n(n);let r=s.token,i;if(r&&!ki(r)&&(s.token=void 0,r=void 0),!r){const l=await s.cachedTokenPromise;l&&(ki(l)?r=l:await Ig(n,void 0))}if(!e&&r&&ki(r))return{token:r.token};let o=!1;try{s.exchangeTokenPromise||(s.exchangeTokenPromise=s.provider.getToken().finally(()=>{s.exchangeTokenPromise=void 0}),o=!0),r=await _n(n).exchangeTokenPromise}catch(l){l.code==="appCheck/throttled"?rh.warn(l.message):rh.error(l),i=l}let a;return r?i?ki(r)?a={token:r.token,internalError:i}:a=Cg(i):(a={token:r.token},s.token=r,await Ig(n,r)):a=Cg(i),o&&FN(n,a),a}async function MN(t){const e=t.app;Ew(e);const{provider:n}=_n(e);{const{token:s}=await n.getToken();return{token:s}}}function LN(t,e,n,s){const{app:r}=t,i=_n(r),o={next:n,error:s,type:e};if(i.tokenObservers=[...i.tokenObservers,o],i.token&&ki(i.token)){const a=i.token;Promise.resolve().then(()=>{n({token:a.token}),Ag(t)}).catch(()=>{})}i.cachedTokenPromise.then(()=>Ag(t))}function Tw(t,e){const n=_n(t),s=n.tokenObservers.filter(r=>r.next!==e);s.length===0&&n.tokenRefresher&&n.tokenRefresher.isRunning()&&n.tokenRefresher.stop(),n.tokenObservers=s}function Ag(t){const{app:e}=t,n=_n(e);let s=n.tokenRefresher;s||(s=VN(t),n.tokenRefresher=s),!s.isRunning()&&n.isTokenAutoRefreshEnabled&&s.start()}function VN(t){const{app:e}=t;return new AN(async()=>{const n=_n(e);let s;if(n.token?s=await ih(t,!0):s=await ih(t),s.error)throw s.error;if(s.internalError)throw s.internalError},()=>!0,()=>{const n=_n(e);if(n.token){let s=n.token.issuedAtTimeMillis+(n.token.expireTimeMillis-n.token.issuedAtTimeMillis)*.5+3e5;const r=n.token.expireTimeMillis-5*60*1e3;return s=Math.min(s,r),Math.max(0,s-Date.now())}else return 0},Tg.RETRIAL_MIN_WAIT,Tg.RETRIAL_MAX_WAIT)}function FN(t,e){const n=_n(t).tokenObservers;for(const s of n)try{s.type==="EXTERNAL"&&e.error!=null?s.error(e.error):s.next(e)}catch{}}function ki(t){return t.expireTimeMillis-Date.now()>0}function Cg(t){return{token:ON(DN),error:t}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UN{constructor(e,n){this.app=e,this.heartbeatServiceProvider=n}_delete(){const{tokenObservers:e}=_n(this.app);for(const n of e)Tw(this.app,n.next);return Promise.resolve()}}function BN(t,e){return new UN(t,e)}function $N(t){return{getToken:e=>ih(t,e),getLimitedUseToken:()=>MN(t),addTokenListener:e=>LN(t,"INTERNAL",e),removeTokenListener:e=>Tw(t.app,e)}}const jN="@firebase/app-check",WN="0.8.0",HN="app-check",bg="app-check-internal";function qN(){xn(new dn(HN,t=>{const e=t.getProvider("app").getImmediate(),n=t.getProvider("heartbeat");return BN(e,n)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((t,e,n)=>{t.getProvider(bg).initialize()})),xn(new dn(bg,t=>{const e=t.getProvider("app-check").getImmediate();return $N(e)},"PUBLIC").setInstantiationMode("EXPLICIT")),Ht(jN,WN)}qN();var KN="firebase",zN="10.4.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Ht(KN,zN,"app");const Iw=Symbol("firebaseApp");function Zd(t){return zI()&&xi(Iw,null)||qh(t)}const da=new WeakMap;function GN(t,e){if(!da.has(t)){const n=oT(!0);da.set(t,n);const{unmount:s}=e;e.unmount=()=>{s.call(e),n.stop(),da.delete(t)}}return da.get(t)}const Aw=new WeakMap;function QN(t){return Aw.get(Zd(t))}const fa=new WeakMap;function YN(t){const e=Zd(t);if(!fa.has(e)){let n;const r=[new Promise(i=>{n=i}),i=>{fa.set(e,i),n(i.value)}];fa.set(e,r)}return fa.get(e)}function XN(t,e){const n=ne(e);Km(n,s=>{const r=YN();t.value=s,Array.isArray(r)&&r[1](t)})}const Rg="@firebase/database",Sg="1.0.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Cw="";function JN(t){Cw=t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZN{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),dt(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:Ji(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ex{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return Zn(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bw=function(t){try{if(typeof window<"u"&&typeof window[t]<"u"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new ZN(e)}}catch{}return new ex},Us=bw("localStorage"),oh=bw("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nr=new To("@firebase/database"),tx=function(){let t=1;return function(){return t++}}(),Rw=function(t){const e=Y0(t),n=new q0;n.update(e);const s=n.digest();return xl.encodeByteArray(s)},$o=function(...t){let e="";for(let n=0;n<t.length;n++){const s=t[n];Array.isArray(s)||s&&typeof s=="object"&&typeof s.length=="number"?e+=$o.apply(null,s):typeof s=="object"?e+=dt(s):e+=s,e+=" "}return e};let Hs=null,kg=!0;const nx=function(t,e){M(!e||t===!0||t===!1,"Can't turn on custom loggers persistently."),t===!0?(Nr.logLevel=ae.VERBOSE,Hs=Nr.log.bind(Nr),e&&oh.set("logging_enabled",!0)):typeof t=="function"?Hs=t:(Hs=null,oh.remove("logging_enabled"))},vt=function(...t){if(kg===!0&&(kg=!1,Hs===null&&oh.get("logging_enabled")===!0&&nx(!0)),Hs){const e=$o.apply(null,t);Hs(e)}},jo=function(t){return function(...e){vt(t,...e)}},ah=function(...t){const e="FIREBASE INTERNAL ERROR: "+$o(...t);Nr.error(e)},Js=function(...t){const e=`FIREBASE FATAL ERROR: ${$o(...t)}`;throw Nr.error(e),new Error(e)},qt=function(...t){const e="FIREBASE WARNING: "+$o(...t);Nr.warn(e)},sx=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&qt("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},Sw=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},rx=function(t){if(document.readyState==="complete")t();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},Kr="[MIN_NAME]",Zs="[MAX_NAME]",oi=function(t,e){if(t===e)return 0;if(t===Kr||e===Zs)return-1;if(e===Kr||t===Zs)return 1;{const n=Pg(t),s=Pg(e);return n!==null?s!==null?n-s===0?t.length-e.length:n-s:-1:s!==null?1:t<e?-1:1}},ix=function(t,e){return t===e?0:t<e?-1:1},_i=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+dt(e))},ef=function(t){if(typeof t!="object"||t===null)return dt(t);const e=[];for(const s in t)e.push(s);e.sort();let n="{";for(let s=0;s<e.length;s++)s!==0&&(n+=","),n+=dt(e[s]),n+=":",n+=ef(t[e[s]]);return n+="}",n},kw=function(t,e){const n=t.length;if(n<=e)return[t];const s=[];for(let r=0;r<n;r+=e)r+e>n?s.push(t.substring(r,n)):s.push(t.substring(r,r+e));return s};function Zt(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const Pw=function(t){M(!Sw(t),"Invalid JSON number");const e=11,n=52,s=(1<<e-1)-1;let r,i,o,a,l;t===0?(i=0,o=0,r=1/t===-1/0?1:0):(r=t<0,t=Math.abs(t),t>=Math.pow(2,1-s)?(a=Math.min(Math.floor(Math.log(t)/Math.LN2),s),i=a+s,o=Math.round(t*Math.pow(2,n-a)-Math.pow(2,n))):(i=0,o=Math.round(t/Math.pow(2,1-s-n))));const c=[];for(l=n;l;l-=1)c.push(o%2?1:0),o=Math.floor(o/2);for(l=e;l;l-=1)c.push(i%2?1:0),i=Math.floor(i/2);c.push(r?1:0),c.reverse();const u=c.join("");let h="";for(l=0;l<64;l+=8){let d=parseInt(u.substr(l,8),2).toString(16);d.length===1&&(d="0"+d),h=h+d}return h.toLowerCase()},ox=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},ax=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"},lx=new RegExp("^-?(0*)\\d{1,10}$"),cx=-2147483648,ux=2147483647,Pg=function(t){if(lx.test(t)){const e=Number(t);if(e>=cx&&e<=ux)return e}return null},Wo=function(t){try{t()}catch(e){setTimeout(()=>{const n=e.stack||"";throw qt("Exception was thrown by user callback.",n),e},Math.floor(0))}},hx=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},$i=function(t,e){const n=setTimeout(t,e);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dx{constructor(e,n){this.appName_=e,this.appCheckProvider=n,this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(s=>this.appCheck=s)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((n,s)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,s):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)===null||n===void 0||n.get().then(s=>s.addTokenListener(e))}notifyForInvalidToken(){qt(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fx{constructor(e,n,s){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=s,this.auth_=null,this.auth_=s.getImmediate({optional:!0}),this.auth_||s.onInit(r=>this.auth_=r)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(vt("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,s)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,s):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',qt(e)}}class lh{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}lh.OWNER="owner";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tf="5",Nw="v",xw="s",Dw="r",Ow="f",Mw=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,Lw="ls",Vw="p",ch="ac",Fw="websocket",Uw="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class px{constructor(e,n,s,r,i=!1,o="",a=!1,l=!1){this.secure=n,this.namespace=s,this.webSocketOnly=r,this.nodeAdmin=i,this.persistenceKey=o,this.includeNamespaceInQueryParams=a,this.isUsingEmulator=l,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=Us.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&Us.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function gx(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function Bw(t,e,n){M(typeof e=="string","typeof type must == string"),M(typeof n=="object","typeof params must == object");let s;if(e===Fw)s=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===Uw)s=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);gx(t)&&(n.ns=t.namespace);const r=[];return Zt(n,(i,o)=>{r.push(i+"="+o)}),s+r.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _x{constructor(){this.counters_={}}incrementCounter(e,n=1){Zn(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return k0(this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yc={},Xc={};function nf(t){const e=t.toString();return Yc[e]||(Yc[e]=new _x),Yc[e]}function mx(t,e){const n=t.toString();return Xc[n]||(Xc[n]=e()),Xc[n]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yx{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const s=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let r=0;r<s.length;++r)s[r]&&Wo(()=>{this.onMessage_(s[r])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ng="start",vx="close",wx="pLPCommand",Ex="pRTLPCB",$w="id",jw="pw",Ww="ser",Tx="cb",Ix="seg",Ax="ts",Cx="d",bx="dframe",Hw=1870,qw=30,Rx=Hw-qw,Sx=25e3,kx=3e4;class wr{constructor(e,n,s,r,i,o,a){this.connId=e,this.repoInfo=n,this.applicationId=s,this.appCheckToken=r,this.authToken=i,this.transportSessionId=o,this.lastSessionId=a,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=jo(e),this.stats_=nf(n),this.urlFn=l=>(this.appCheckToken&&(l[ch]=this.appCheckToken),Bw(n,Uw,l))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new yx(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(kx)),rx(()=>{if(this.isClosed_)return;this.scriptTagHolder=new sf((...i)=>{const[o,a,l,c,u]=i;if(this.incrementIncomingBytes_(i),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===Ng)this.id=a,this.password=l;else if(o===vx)a?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(a,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...i)=>{const[o,a]=i;this.incrementIncomingBytes_(i),this.myPacketOrderer.handleResponse(o,a)},()=>{this.onClosed_()},this.urlFn);const s={};s[Ng]="t",s[Ww]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(s[Tx]=this.scriptTagHolder.uniqueCallbackIdentifier),s[Nw]=tf,this.transportSessionId&&(s[xw]=this.transportSessionId),this.lastSessionId&&(s[Lw]=this.lastSessionId),this.applicationId&&(s[Vw]=this.applicationId),this.appCheckToken&&(s[ch]=this.appCheckToken),typeof location<"u"&&location.hostname&&Mw.test(location.hostname)&&(s[Dw]=Ow);const r=this.urlFn(s);this.log_("Connecting via long-poll to "+r),this.scriptTagHolder.addTag(r,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){wr.forceAllow_=!0}static forceDisallow(){wr.forceDisallow_=!0}static isAvailable(){return wr.forceAllow_?!0:!wr.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!ox()&&!ax()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=dt(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const s=hm(n),r=kw(s,Rx);for(let i=0;i<r.length;i++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,r.length,r[i]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const s={};s[bx]="t",s[$w]=e,s[jw]=n,this.myDisconnFrame.src=this.urlFn(s),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=dt(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class sf{constructor(e,n,s,r){this.onDisconnect=s,this.urlFn=r,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=tx(),window[wx+this.uniqueCallbackIdentifier]=e,window[Ex+this.uniqueCallbackIdentifier]=n,this.myIFrame=sf.createIFrame_();let i="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(i='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+i+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(a){vt("frame writing exception"),a.stack&&vt(a.stack),vt(a)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||vt("No IE domain setting required")}catch{const s=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+s+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[$w]=this.myID,e[jw]=this.myPW,e[Ww]=this.currentSerial;let n=this.urlFn(e),s="",r=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+qw+s.length<=Hw;){const o=this.pendingSegs.shift();s=s+"&"+Ix+r+"="+o.seg+"&"+Ax+r+"="+o.ts+"&"+Cx+r+"="+o.d,r++}return n=n+s,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,s){this.pendingSegs.push({seg:e,ts:n,d:s}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const s=()=>{this.outstandingRequests.delete(n),this.newRequest_()},r=setTimeout(s,Math.floor(Sx)),i=()=>{clearTimeout(r),s()};this.addTag(e,i)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const s=this.myIFrame.doc.createElement("script");s.type="text/javascript",s.async=!0,s.src=e,s.onload=s.onreadystatechange=function(){const r=s.readyState;(!r||r==="loaded"||r==="complete")&&(s.onload=s.onreadystatechange=null,s.parentNode&&s.parentNode.removeChild(s),n())},s.onerror=()=>{vt("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(s)}catch{}},Math.floor(1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Px=16384,Nx=45e3;let cl=null;typeof MozWebSocket<"u"?cl=MozWebSocket:typeof WebSocket<"u"&&(cl=WebSocket);class rn{constructor(e,n,s,r,i,o,a){this.connId=e,this.applicationId=s,this.appCheckToken=r,this.authToken=i,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=jo(this.connId),this.stats_=nf(n),this.connURL=rn.connectionURL_(n,o,a,r,s),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,s,r,i){const o={};return o[Nw]=tf,typeof location<"u"&&location.hostname&&Mw.test(location.hostname)&&(o[Dw]=Ow),n&&(o[xw]=n),s&&(o[Lw]=s),r&&(o[ch]=r),i&&(o[Vw]=i),Bw(e,Fw,o)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,Us.set("previous_websocket_failure",!0);try{let s;mm(),this.mySock=new cl(this.connURL,[],s)}catch(s){this.log_("Error instantiating WebSocket.");const r=s.message||s.data;r&&this.log_(r),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=s=>{this.handleIncomingFrame(s)},this.mySock.onerror=s=>{this.log_("WebSocket error.  Closing connection.");const r=s.message||s.data;r&&this.log_(r),this.onClosed_()}}start(){}static forceDisallow(){rn.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,s=navigator.userAgent.match(n);s&&s.length>1&&parseFloat(s[1])<4.4&&(e=!0)}return!e&&cl!==null&&!rn.forceDisallow_}static previouslyFailed(){return Us.isInMemoryStorage||Us.get("previous_websocket_failure")===!0}markConnectionHealthy(){Us.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const s=Ji(n);this.onMessage(s)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(M(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const s=this.extractFrameCount_(n);s!==null&&this.appendFrame_(s)}}send(e){this.resetKeepAlive();const n=dt(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const s=kw(n,Px);s.length>1&&this.sendString_(String(s.length));for(let r=0;r<s.length;r++)this.sendString_(s[r])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(Nx))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}rn.responsesRequiredToBeHealthy=2;rn.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mo{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[wr,rn]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const n=rn&&rn.isAvailable();let s=n&&!rn.previouslyFailed();if(e.webSocketOnly&&(n||qt("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),s=!0),s)this.transports_=[rn];else{const r=this.transports_=[];for(const i of mo.ALL_TRANSPORTS)i&&i.isAvailable()&&r.push(i);mo.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}mo.globalTransportInitialized_=!1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xx=6e4,Dx=5e3,Ox=10*1024,Mx=100*1024,Jc="t",xg="d",Lx="s",Dg="r",Vx="e",Og="o",Mg="a",Lg="n",Vg="p",Fx="h";class Ux{constructor(e,n,s,r,i,o,a,l,c,u){this.id=e,this.repoInfo_=n,this.applicationId_=s,this.appCheckToken_=r,this.authToken_=i,this.onMessage_=o,this.onReady_=a,this.onDisconnect_=l,this.onKill_=c,this.lastSessionId=u,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=jo("c:"+this.id+":"),this.transportManager_=new mo(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),s=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,s)},Math.floor(0));const r=e.healthyTimeout||0;r>0&&(this.healthyTimeout_=$i(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>Mx?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>Ox?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(r)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(Jc in e){const n=e[Jc];n===Mg?this.upgradeIfSecondaryHealthy_():n===Dg?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===Og&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=_i("t",e),s=_i("d",e);if(n==="c")this.onSecondaryControl_(s);else if(n==="d")this.pendingDataMessages.push(s);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:Vg,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:Mg,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:Lg,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=_i("t",e),s=_i("d",e);n==="c"?this.onControl_(s):n==="d"&&this.onDataMessage_(s)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=_i(Jc,e);if(xg in e){const s=e[xg];if(n===Fx){const r=Object.assign({},s);this.repoInfo_.isUsingEmulator&&(r.h=this.repoInfo_.host),this.onHandshake_(r)}else if(n===Lg){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let r=0;r<this.pendingDataMessages.length;++r)this.onDataMessage_(this.pendingDataMessages[r]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===Lx?this.onConnectionShutdown_(s):n===Dg?this.onReset_(s):n===Vx?ah("Server Error: "+s):n===Og?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):ah("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,s=e.v,r=e.h;this.sessionId=e.s,this.repoInfo_.host=r,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),tf!==s&&qt("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),s=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,s),$i(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(xx))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):$i(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(Dx))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:Vg,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(Us.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kw{put(e,n,s,r){}merge(e,n,s,r){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,s){}onDisconnectMerge(e,n,s){}onDisconnectCancel(e,n){}reportStats(e){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zw{constructor(e){this.allowedEvents_=e,this.listeners_={},M(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const s=[...this.listeners_[e]];for(let r=0;r<s.length;r++)s[r].callback.apply(s[r].context,n)}}on(e,n,s){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:s});const r=this.getInitialEvent(e);r&&n.apply(s,r)}off(e,n,s){this.validateEventType_(e);const r=this.listeners_[e]||[];for(let i=0;i<r.length;i++)if(r[i].callback===n&&(!s||s===r[i].context)){r.splice(i,1);return}}validateEventType_(e){M(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ul extends zw{constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!jh()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new ul}getInitialEvent(e){return M(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fg=32,Ug=768;class Fe{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let s=0;for(let r=0;r<this.pieces_.length;r++)this.pieces_[r].length>0&&(this.pieces_[s]=this.pieces_[r],s++);this.pieces_.length=s,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function Re(){return new Fe("")}function de(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function Es(t){return t.pieces_.length-t.pieceNum_}function Oe(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new Fe(t.pieces_,e)}function Gw(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function Bx(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function Qw(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function Yw(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new Fe(e,0)}function ot(t,e){const n=[];for(let s=t.pieceNum_;s<t.pieces_.length;s++)n.push(t.pieces_[s]);if(e instanceof Fe)for(let s=e.pieceNum_;s<e.pieces_.length;s++)n.push(e.pieces_[s]);else{const s=e.split("/");for(let r=0;r<s.length;r++)s[r].length>0&&n.push(s[r])}return new Fe(n,0)}function ue(t){return t.pieceNum_>=t.pieces_.length}function Xt(t,e){const n=de(t),s=de(e);if(n===null)return e;if(n===s)return Xt(Oe(t),Oe(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function Xw(t,e){if(Es(t)!==Es(e))return!1;for(let n=t.pieceNum_,s=e.pieceNum_;n<=t.pieces_.length;n++,s++)if(t.pieces_[n]!==e.pieces_[s])return!1;return!0}function an(t,e){let n=t.pieceNum_,s=e.pieceNum_;if(Es(t)>Es(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[s])return!1;++n,++s}return!0}class $x{constructor(e,n){this.errorPrefix_=n,this.parts_=Qw(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let s=0;s<this.parts_.length;s++)this.byteLength_+=Dl(this.parts_[s]);Jw(this)}}function jx(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=Dl(e),Jw(t)}function Wx(t){const e=t.parts_.pop();t.byteLength_-=Dl(e),t.parts_.length>0&&(t.byteLength_-=1)}function Jw(t){if(t.byteLength_>Ug)throw new Error(t.errorPrefix_+"has a key path longer than "+Ug+" bytes ("+t.byteLength_+").");if(t.parts_.length>Fg)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+Fg+") or object contains a cycle "+Ps(t))}function Ps(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rf extends zw{constructor(){super(["visible"]);let e,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const s=!document[e];s!==this.visible_&&(this.visible_=s,this.trigger("visible",s))},!1)}static getInstance(){return new rf}getInitialEvent(e){return M(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mi=1e3,Hx=60*5*1e3,Bg=30*1e3,qx=1.3,Kx=3e4,zx="server_kill",$g=3;class Kn extends Kw{constructor(e,n,s,r,i,o,a,l){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=s,this.onConnectStatus_=r,this.onServerInfoUpdate_=i,this.authTokenProvider_=o,this.appCheckTokenProvider_=a,this.authOverride_=l,this.id=Kn.nextPersistentConnectionId_++,this.log_=jo("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=mi,this.maxReconnectDelay_=Hx,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,l&&!mm())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");rf.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&ul.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,s){const r=++this.requestNumber_,i={r,a:e,b:n};this.log_(dt(i)),M(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(i),s&&(this.requestCBHash_[r]=s)}get(e){this.initConnection_();const n=new Xi,r={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const a=o.d;o.s==="ok"?n.resolve(a):n.reject(a)}};this.outstandingGets_.push(r),this.outstandingGetCount_++;const i=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(i),n.promise}listen(e,n,s,r){this.initConnection_();const i=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+i),this.listens.has(o)||this.listens.set(o,new Map),M(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),M(!this.listens.get(o).has(i),"listen() called twice for same path/queryId.");const a={onComplete:r,hashFn:n,query:e,tag:s};this.listens.get(o).set(i,a),this.connected_&&this.sendListen_(a)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,s=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(s)})}sendListen_(e){const n=e.query,s=n._path.toString(),r=n._queryIdentifier;this.log_("Listen on "+s+" for "+r);const i={p:s},o="q";e.tag&&(i.q=n._queryObject,i.t=e.tag),i.h=e.hashFn(),this.sendRequest(o,i,a=>{const l=a.d,c=a.s;Kn.warnOnListenWarnings_(l,n),(this.listens.get(s)&&this.listens.get(s).get(r))===e&&(this.log_("listen response",a),c!=="ok"&&this.removeListen_(s,r),e.onComplete&&e.onComplete(c,l))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&Zn(e,"w")){const s=Lr(e,"w");if(Array.isArray(s)&&~s.indexOf("no_index")){const r='".indexOn": "'+n._queryParams.getIndex().toString()+'"',i=n._path.toString();qt(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${r} at ${i} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||H0(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=Bg)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=W0(e)?"auth":"gauth",s={cred:e};this.authOverride_===null?s.noauth=!0:typeof this.authOverride_=="object"&&(s.authvar=this.authOverride_),this.sendRequest(n,s,r=>{const i=r.s,o=r.d||"error";this.authToken_===e&&(i==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(i,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,s=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,s)})}unlisten(e,n){const s=e._path.toString(),r=e._queryIdentifier;this.log_("Unlisten called for "+s+" "+r),M(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(s,r)&&this.connected_&&this.sendUnlisten_(s,r,e._queryObject,n)}sendUnlisten_(e,n,s,r){this.log_("Unlisten on "+e+" for "+n);const i={p:e},o="n";r&&(i.q=s,i.t=r),this.sendRequest(o,i)}onDisconnectPut(e,n,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:s})}onDisconnectMerge(e,n,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:s})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,s,r){const i={p:n,d:s};this.log_("onDisconnect "+e,i),this.sendRequest(e,i,o=>{r&&setTimeout(()=>{r(o.s,o.d)},Math.floor(0))})}put(e,n,s,r){this.putInternal("p",e,n,s,r)}merge(e,n,s,r){this.putInternal("m",e,n,s,r)}putInternal(e,n,s,r,i){this.initConnection_();const o={p:n,d:s};i!==void 0&&(o.h=i),this.outstandingPuts_.push({action:e,request:o,onComplete:r}),this.outstandingPutCount_++;const a=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(a):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,s=this.outstandingPuts_[e].request,r=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,s,i=>{this.log_(n+" response",i),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),r&&r(i.s,i.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,s=>{if(s.s!=="ok"){const i=s.d;this.log_("reportStats","Error sending stats: "+i)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+dt(e));const n=e.r,s=this.requestCBHash_[n];s&&(delete this.requestCBHash_[n],s(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):ah("Unrecognized action received from server: "+dt(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){M(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=mi,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=mi,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>Kx&&(this.reconnectDelay_=mi),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*qx)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),s=this.onRealtimeDisconnect_.bind(this),r=this.id+":"+Kn.nextConnectionId_++,i=this.lastSessionId;let o=!1,a=null;const l=function(){a?a.close():(o=!0,s())},c=function(h){M(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(h)};this.realtime_={close:l,sendRequest:c};const u=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[h,d]=await Promise.all([this.authTokenProvider_.getToken(u),this.appCheckTokenProvider_.getToken(u)]);o?vt("getToken() completed but was canceled"):(vt("getToken() completed. Creating connection."),this.authToken_=h&&h.accessToken,this.appCheckToken_=d&&d.token,a=new Ux(r,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,s,p=>{qt(p+" ("+this.repoInfo_.toString()+")"),this.interrupt(zx)},i))}catch(h){this.log_("Failed to get token: "+h),o||(this.repoInfo_.nodeAdmin&&qt(h),l())}}}interrupt(e){vt("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){vt("Resuming connection for reason: "+e),delete this.interruptReasons_[e],Au(this.interruptReasons_)&&(this.reconnectDelay_=mi,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let s;n?s=n.map(i=>ef(i)).join("$"):s="default";const r=this.removeListen_(e,s);r&&r.onComplete&&r.onComplete("permission_denied")}removeListen_(e,n){const s=new Fe(e).toString();let r;if(this.listens.has(s)){const i=this.listens.get(s);r=i.get(n),i.delete(n),i.size===0&&this.listens.delete(s)}else r=void 0;return r}onAuthRevoked_(e,n){vt("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=$g&&(this.reconnectDelay_=Bg,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){vt("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=$g&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+Cw.replace(/\./g,"-")]=1,jh()?e["framework.cordova"]=1:_m()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=ul.getInstance().currentlyOnline();return Au(this.interruptReasons_)&&e}}Kn.nextPersistentConnectionId_=0;Kn.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fe{constructor(e,n){this.name=e,this.node=n}static Wrap(e,n){return new fe(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gc{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const s=new fe(Kr,e),r=new fe(Kr,n);return this.compare(s,r)!==0}minPost(){return fe.MIN}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let pa;class Zw extends gc{static get __EMPTY_NODE(){return pa}static set __EMPTY_NODE(e){pa=e}compare(e,n){return oi(e.name,n.name)}isDefinedOn(e){throw Xr("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return fe.MIN}maxPost(){return new fe(Zs,pa)}makePost(e,n){return M(typeof e=="string","KeyIndex indexValue must always be a string."),new fe(e,pa)}toString(){return".key"}}const xr=new Zw;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ga{constructor(e,n,s,r,i=null){this.isReverse_=r,this.resultGenerator_=i,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=n?s(e.key,n):1,r&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class rt{constructor(e,n,s,r,i){this.key=e,this.value=n,this.color=s??rt.RED,this.left=r??Ft.EMPTY_NODE,this.right=i??Ft.EMPTY_NODE}copy(e,n,s,r,i){return new rt(e??this.key,n??this.value,s??this.color,r??this.left,i??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,s){let r=this;const i=s(e,r.key);return i<0?r=r.copy(null,null,null,r.left.insert(e,n,s),null):i===0?r=r.copy(null,n,null,null,null):r=r.copy(null,null,null,null,r.right.insert(e,n,s)),r.fixUp_()}removeMin_(){if(this.left.isEmpty())return Ft.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let s,r;if(s=this,n(e,s.key)<0)!s.left.isEmpty()&&!s.left.isRed_()&&!s.left.left.isRed_()&&(s=s.moveRedLeft_()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed_()&&(s=s.rotateRight_()),!s.right.isEmpty()&&!s.right.isRed_()&&!s.right.left.isRed_()&&(s=s.moveRedRight_()),n(e,s.key)===0){if(s.right.isEmpty())return Ft.EMPTY_NODE;r=s.right.min_(),s=s.copy(r.key,r.value,null,null,s.right.removeMin_())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,rt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,rt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}rt.RED=!0;rt.BLACK=!1;class Gx{copy(e,n,s,r,i){return this}insert(e,n,s){return new rt(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class Ft{constructor(e,n=Ft.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new Ft(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,rt.BLACK,null,null))}remove(e){return new Ft(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,rt.BLACK,null,null))}get(e){let n,s=this.root_;for(;!s.isEmpty();){if(n=this.comparator_(e,s.key),n===0)return s.value;n<0?s=s.left:n>0&&(s=s.right)}return null}getPredecessorKey(e){let n,s=this.root_,r=null;for(;!s.isEmpty();)if(n=this.comparator_(e,s.key),n===0){if(s.left.isEmpty())return r?r.key:null;for(s=s.left;!s.right.isEmpty();)s=s.right;return s.key}else n<0?s=s.left:n>0&&(r=s,s=s.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new ga(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new ga(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new ga(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new ga(this.root_,null,this.comparator_,!0,e)}}Ft.EMPTY_NODE=new Gx;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qx(t,e){return oi(t.name,e.name)}function of(t,e){return oi(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let uh;function Yx(t){uh=t}const eE=function(t){return typeof t=="number"?"number:"+Pw(t):"string:"+t},tE=function(t){if(t.isLeafNode()){const e=t.val();M(typeof e=="string"||typeof e=="number"||typeof e=="object"&&Zn(e,".sv"),"Priority must be a string or number.")}else M(t===uh||t.isEmpty(),"priority of unexpected type.");M(t===uh||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let jg;class nt{constructor(e,n=nt.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,M(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),tE(this.priorityNode_)}static set __childrenNodeConstructor(e){jg=e}static get __childrenNodeConstructor(){return jg}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new nt(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:nt.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return ue(e)?this:de(e)===".priority"?this.priorityNode_:nt.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:nt.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const s=de(e);return s===null?n:n.isEmpty()&&s!==".priority"?this:(M(s!==".priority"||Es(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(s,nt.__childrenNodeConstructor.EMPTY_NODE.updateChild(Oe(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+eE(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=Pw(this.value_):e+=this.value_,this.lazyHash_=Rw(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===nt.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof nt.__childrenNodeConstructor?-1:(M(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,s=typeof this.value_,r=nt.VALUE_TYPE_ORDER.indexOf(n),i=nt.VALUE_TYPE_ORDER.indexOf(s);return M(r>=0,"Unknown leaf type: "+n),M(i>=0,"Unknown leaf type: "+s),r===i?s==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:i-r}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}nt.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let nE,sE;function Xx(t){nE=t}function Jx(t){sE=t}class Zx extends gc{compare(e,n){const s=e.node.getPriority(),r=n.node.getPriority(),i=s.compareTo(r);return i===0?oi(e.name,n.name):i}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return fe.MIN}maxPost(){return new fe(Zs,new nt("[PRIORITY-POST]",sE))}makePost(e,n){const s=nE(e);return new fe(n,new nt("[PRIORITY-POST]",s))}toString(){return".priority"}}const At=new Zx;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const e1=Math.log(2);class t1{constructor(e){const n=i=>parseInt(Math.log(i)/e1,10),s=i=>parseInt(Array(i+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const r=s(this.count);this.bits_=e+1&r}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const hl=function(t,e,n,s){t.sort(e);const r=function(l,c){const u=c-l;let h,d;if(u===0)return null;if(u===1)return h=t[l],d=n?n(h):h,new rt(d,h.node,rt.BLACK,null,null);{const p=parseInt(u/2,10)+l,m=r(l,p),_=r(p+1,c);return h=t[p],d=n?n(h):h,new rt(d,h.node,rt.BLACK,m,_)}},i=function(l){let c=null,u=null,h=t.length;const d=function(m,_){const E=h-m,F=h;h-=m;const v=r(E+1,F),y=t[E],w=n?n(y):y;p(new rt(w,y.node,_,null,v))},p=function(m){c?(c.left=m,c=m):(u=m,c=m)};for(let m=0;m<l.count;++m){const _=l.nextBitIsOne(),E=Math.pow(2,l.count-(m+1));_?d(E,rt.BLACK):(d(E,rt.BLACK),d(E,rt.RED))}return u},o=new t1(t.length),a=i(o);return new Ft(s||e,a)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Zc;const pr={};class Hn{constructor(e,n){this.indexes_=e,this.indexSet_=n}static get Default(){return M(pr&&At,"ChildrenNode.ts has not been loaded"),Zc=Zc||new Hn({".priority":pr},{".priority":At}),Zc}get(e){const n=Lr(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof Ft?n:null}hasIndex(e){return Zn(this.indexSet_,e.toString())}addIndex(e,n){M(e!==xr,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const s=[];let r=!1;const i=n.getIterator(fe.Wrap);let o=i.getNext();for(;o;)r=r||e.isDefinedOn(o.node),s.push(o),o=i.getNext();let a;r?a=hl(s,e.getCompare()):a=pr;const l=e.toString(),c=Object.assign({},this.indexSet_);c[l]=e;const u=Object.assign({},this.indexes_);return u[l]=a,new Hn(u,c)}addToIndexes(e,n){const s=Ua(this.indexes_,(r,i)=>{const o=Lr(this.indexSet_,i);if(M(o,"Missing index implementation for "+i),r===pr)if(o.isDefinedOn(e.node)){const a=[],l=n.getIterator(fe.Wrap);let c=l.getNext();for(;c;)c.name!==e.name&&a.push(c),c=l.getNext();return a.push(e),hl(a,o.getCompare())}else return pr;else{const a=n.get(e.name);let l=r;return a&&(l=l.remove(new fe(e.name,a))),l.insert(e,e.node)}});return new Hn(s,this.indexSet_)}removeFromIndexes(e,n){const s=Ua(this.indexes_,r=>{if(r===pr)return r;{const i=n.get(e.name);return i?r.remove(new fe(e.name,i)):r}});return new Hn(s,this.indexSet_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let yi;class Ee{constructor(e,n,s){this.children_=e,this.priorityNode_=n,this.indexMap_=s,this.lazyHash_=null,this.priorityNode_&&tE(this.priorityNode_),this.children_.isEmpty()&&M(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return yi||(yi=new Ee(new Ft(of),null,Hn.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||yi}updatePriority(e){return this.children_.isEmpty()?this:new Ee(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?yi:n}}getChild(e){const n=de(e);return n===null?this:this.getImmediateChild(n).getChild(Oe(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(M(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const s=new fe(e,n);let r,i;n.isEmpty()?(r=this.children_.remove(e),i=this.indexMap_.removeFromIndexes(s,this.children_)):(r=this.children_.insert(e,n),i=this.indexMap_.addToIndexes(s,this.children_));const o=r.isEmpty()?yi:this.priorityNode_;return new Ee(r,o,i)}}updateChild(e,n){const s=de(e);if(s===null)return n;{M(de(e)!==".priority"||Es(e)===1,".priority must be the last token in a path");const r=this.getImmediateChild(s).updateChild(Oe(e),n);return this.updateImmediateChild(s,r)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let s=0,r=0,i=!0;if(this.forEachChild(At,(o,a)=>{n[o]=a.val(e),s++,i&&Ee.INTEGER_REGEXP_.test(o)?r=Math.max(r,Number(o)):i=!1}),!e&&i&&r<2*s){const o=[];for(const a in n)o[a]=n[a];return o}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+eE(this.getPriority().val())+":"),this.forEachChild(At,(n,s)=>{const r=s.hash();r!==""&&(e+=":"+n+":"+r)}),this.lazyHash_=e===""?"":Rw(e)}return this.lazyHash_}getPredecessorChildName(e,n,s){const r=this.resolveIndex_(s);if(r){const i=r.getPredecessorKey(new fe(e,n));return i?i.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const s=n.minKey();return s&&s.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new fe(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const s=n.maxKey();return s&&s.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new fe(n,this.children_.get(n)):null}forEachChild(e,n){const s=this.resolveIndex_(e);return s?s.inorderTraversal(r=>n(r.name,r.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const s=this.resolveIndex_(n);if(s)return s.getIteratorFrom(e,r=>r);{const r=this.children_.getIteratorFrom(e.name,fe.Wrap);let i=r.peek();for(;i!=null&&n.compare(i,e)<0;)r.getNext(),i=r.peek();return r}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const s=this.resolveIndex_(n);if(s)return s.getReverseIteratorFrom(e,r=>r);{const r=this.children_.getReverseIteratorFrom(e.name,fe.Wrap);let i=r.peek();for(;i!=null&&n.compare(i,e)>0;)r.getNext(),i=r.peek();return r}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===Ho?-1:0}withIndex(e){if(e===xr||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new Ee(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===xr||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const s=this.getIterator(At),r=n.getIterator(At);let i=s.getNext(),o=r.getNext();for(;i&&o;){if(i.name!==o.name||!i.node.equals(o.node))return!1;i=s.getNext(),o=r.getNext()}return i===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===xr?null:this.indexMap_.get(e.toString())}}Ee.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class n1 extends Ee{constructor(){super(new Ft(of),Ee.EMPTY_NODE,Hn.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return Ee.EMPTY_NODE}isEmpty(){return!1}}const Ho=new n1;Object.defineProperties(fe,{MIN:{value:new fe(Kr,Ee.EMPTY_NODE)},MAX:{value:new fe(Zs,Ho)}});Zw.__EMPTY_NODE=Ee.EMPTY_NODE;nt.__childrenNodeConstructor=Ee;Yx(Ho);Jx(Ho);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const s1=!0;function wt(t,e=null){if(t===null)return Ee.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),M(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const n=t;return new nt(n,wt(e))}if(!(t instanceof Array)&&s1){const n=[];let s=!1;if(Zt(t,(o,a)=>{if(o.substring(0,1)!=="."){const l=wt(a);l.isEmpty()||(s=s||!l.getPriority().isEmpty(),n.push(new fe(o,l)))}}),n.length===0)return Ee.EMPTY_NODE;const i=hl(n,Qx,o=>o.name,of);if(s){const o=hl(n,At.getCompare());return new Ee(i,wt(e),new Hn({".priority":o},{".priority":At}))}else return new Ee(i,wt(e),Hn.Default)}else{let n=Ee.EMPTY_NODE;return Zt(t,(s,r)=>{if(Zn(t,s)&&s.substring(0,1)!=="."){const i=wt(r);(i.isLeafNode()||!i.isEmpty())&&(n=n.updateImmediateChild(s,i))}}),n.updatePriority(wt(e))}}Xx(wt);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class r1 extends gc{constructor(e){super(),this.indexPath_=e,M(!ue(e)&&de(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const s=this.extractChild(e.node),r=this.extractChild(n.node),i=s.compareTo(r);return i===0?oi(e.name,n.name):i}makePost(e,n){const s=wt(e),r=Ee.EMPTY_NODE.updateChild(this.indexPath_,s);return new fe(n,r)}maxPost(){const e=Ee.EMPTY_NODE.updateChild(this.indexPath_,Ho);return new fe(Zs,e)}toString(){return Qw(this.indexPath_,0).join("/")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class i1 extends gc{compare(e,n){const s=e.node.compareTo(n.node);return s===0?oi(e.name,n.name):s}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return fe.MIN}maxPost(){return fe.MAX}makePost(e,n){const s=wt(e);return new fe(n,s)}toString(){return".value"}}const o1=new i1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function a1(t){return{type:"value",snapshotNode:t}}function l1(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function c1(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function Wg(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function u1(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class af{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=At}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return M(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return M(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:Kr}hasEnd(){return this.endSet_}getIndexEndValue(){return M(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return M(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:Zs}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return M(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===At}copy(){const e=new af;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function Hg(t){const e={};if(t.isDefault())return e;let n;if(t.index_===At?n="$priority":t.index_===o1?n="$value":t.index_===xr?n="$key":(M(t.index_ instanceof r1,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=dt(n),t.startSet_){const s=t.startAfterSet_?"startAfter":"startAt";e[s]=dt(t.indexStartValue_),t.startNameSet_&&(e[s]+=","+dt(t.indexStartName_))}if(t.endSet_){const s=t.endBeforeSet_?"endBefore":"endAt";e[s]=dt(t.indexEndValue_),t.endNameSet_&&(e[s]+=","+dt(t.indexEndName_))}return t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function qg(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_),e.sin=!t.startAfterSet_),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_),e.ein=!t.endBeforeSet_),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==At&&(e.i=t.index_.toString()),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dl extends Kw{constructor(e,n,s,r){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=s,this.appCheckTokenProvider_=r,this.log_=jo("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(M(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,n,s,r){const i=e._path.toString();this.log_("Listen called for "+i+" "+e._queryIdentifier);const o=dl.getListenId_(e,s),a={};this.listens_[o]=a;const l=Hg(e._queryParams);this.restRequest_(i+".json",l,(c,u)=>{let h=u;if(c===404&&(h=null,c=null),c===null&&this.onDataUpdate_(i,h,!1,s),Lr(this.listens_,o)===a){let d;c?c===401?d="permission_denied":d="rest_error:"+c:d="ok",r(d,null)}})}unlisten(e,n){const s=dl.getListenId_(e,n);delete this.listens_[s]}get(e){const n=Hg(e._queryParams),s=e._path.toString(),r=new Xi;return this.restRequest_(s+".json",n,(i,o)=>{let a=o;i===404&&(a=null,i=null),i===null?(this.onDataUpdate_(s,a,!1,null),r.resolve(a)):r.reject(new Error(a))}),r.promise}refreshAuthToken(e){}restRequest_(e,n={},s){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([r,i])=>{r&&r.accessToken&&(n.auth=r.accessToken),i&&i.token&&(n.ac=i.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+Zr(n);this.log_("Sending REST request for "+o);const a=new XMLHttpRequest;a.onreadystatechange=()=>{if(s&&a.readyState===4){this.log_("REST Response for "+o+" received. status:",a.status,"response:",a.responseText);let l=null;if(a.status>=200&&a.status<300){try{l=Ji(a.responseText)}catch{qt("Failed to parse JSON response for "+o+": "+a.responseText)}s(null,l)}else a.status!==401&&a.status!==404&&qt("Got unsuccessful REST response for "+o+" Status: "+a.status),s(a.status);s=null}},a.open("GET",o,!0),a.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class h1{constructor(){this.rootNode_=Ee.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fl(){return{value:null,children:new Map}}function rE(t,e,n){if(ue(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{const s=de(e);t.children.has(s)||t.children.set(s,fl());const r=t.children.get(s);e=Oe(e),rE(r,e,n)}}function hh(t,e,n){t.value!==null?n(e,t.value):d1(t,(s,r)=>{const i=new Fe(e.toString()+"/"+s);hh(r,i,n)})}function d1(t,e){t.children.forEach((n,s)=>{e(s,n)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class f1{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n=Object.assign({},e);return this.last_&&Zt(this.last_,(s,r)=>{n[s]=n[s]-r}),this.last_=e,n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kg=10*1e3,p1=30*1e3,g1=5*60*1e3;class _1{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new f1(e);const s=Kg+(p1-Kg)*Math.random();$i(this.reportStats_.bind(this),Math.floor(s))}reportStats_(){const e=this.statsListener_.get(),n={};let s=!1;Zt(e,(r,i)=>{i>0&&Zn(this.statsToReport_,r)&&(n[r]=i,s=!0)}),s&&this.server_.reportStats(n),$i(this.reportStats_.bind(this),Math.floor(Math.random()*2*g1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Cn;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(Cn||(Cn={}));function iE(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function oE(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function aE(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pl{constructor(e,n,s){this.path=e,this.affectedTree=n,this.revert=s,this.type=Cn.ACK_USER_WRITE,this.source=iE()}operationForChild(e){if(ue(this.path)){if(this.affectedTree.value!=null)return M(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new Fe(e));return new pl(Re(),n,this.revert)}}else return M(de(this.path)===e,"operationForChild called for unrelated child."),new pl(Oe(this.path),this.affectedTree,this.revert)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class er{constructor(e,n,s){this.source=e,this.path=n,this.snap=s,this.type=Cn.OVERWRITE}operationForChild(e){return ue(this.path)?new er(this.source,Re(),this.snap.getImmediateChild(e)):new er(this.source,Oe(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yo{constructor(e,n,s){this.source=e,this.path=n,this.children=s,this.type=Cn.MERGE}operationForChild(e){if(ue(this.path)){const n=this.children.subtree(new Fe(e));return n.isEmpty()?null:n.value?new er(this.source,Re(),n.value):new yo(this.source,Re(),n)}else return M(de(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new yo(this.source,Oe(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lf{constructor(e,n,s){this.node_=e,this.fullyInitialized_=n,this.filtered_=s}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(ue(e))return this.isFullyInitialized()&&!this.filtered_;const n=de(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}function m1(t,e,n,s){const r=[],i=[];return e.forEach(o=>{o.type==="child_changed"&&t.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&i.push(u1(o.childName,o.snapshotNode))}),vi(t,r,"child_removed",e,s,n),vi(t,r,"child_added",e,s,n),vi(t,r,"child_moved",i,s,n),vi(t,r,"child_changed",e,s,n),vi(t,r,"value",e,s,n),r}function vi(t,e,n,s,r,i){const o=s.filter(a=>a.type===n);o.sort((a,l)=>v1(t,a,l)),o.forEach(a=>{const l=y1(t,a,i);r.forEach(c=>{c.respondsTo(a.type)&&e.push(c.createEvent(l,t.query_))})})}function y1(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function v1(t,e,n){if(e.childName==null||n.childName==null)throw Xr("Should only compare child_ events.");const s=new fe(e.childName,e.snapshotNode),r=new fe(n.childName,n.snapshotNode);return t.index_.compare(s,r)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lE(t,e){return{eventCache:t,serverCache:e}}function ji(t,e,n,s){return lE(new lf(e,n,s),t.serverCache)}function cE(t,e,n,s){return lE(t.eventCache,new lf(e,n,s))}function dh(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function tr(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let eu;const w1=()=>(eu||(eu=new Ft(ix)),eu);class xe{constructor(e,n=w1()){this.value=e,this.children=n}static fromObject(e){let n=new xe(null);return Zt(e,(s,r)=>{n=n.set(new Fe(s),r)}),n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:Re(),value:this.value};if(ue(e))return null;{const s=de(e),r=this.children.get(s);if(r!==null){const i=r.findRootMostMatchingPathAndValue(Oe(e),n);return i!=null?{path:ot(new Fe(s),i.path),value:i.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(ue(e))return this;{const n=de(e),s=this.children.get(n);return s!==null?s.subtree(Oe(e)):new xe(null)}}set(e,n){if(ue(e))return new xe(n,this.children);{const s=de(e),i=(this.children.get(s)||new xe(null)).set(Oe(e),n),o=this.children.insert(s,i);return new xe(this.value,o)}}remove(e){if(ue(e))return this.children.isEmpty()?new xe(null):new xe(null,this.children);{const n=de(e),s=this.children.get(n);if(s){const r=s.remove(Oe(e));let i;return r.isEmpty()?i=this.children.remove(n):i=this.children.insert(n,r),this.value===null&&i.isEmpty()?new xe(null):new xe(this.value,i)}else return this}}get(e){if(ue(e))return this.value;{const n=de(e),s=this.children.get(n);return s?s.get(Oe(e)):null}}setTree(e,n){if(ue(e))return n;{const s=de(e),i=(this.children.get(s)||new xe(null)).setTree(Oe(e),n);let o;return i.isEmpty()?o=this.children.remove(s):o=this.children.insert(s,i),new xe(this.value,o)}}fold(e){return this.fold_(Re(),e)}fold_(e,n){const s={};return this.children.inorderTraversal((r,i)=>{s[r]=i.fold_(ot(e,r),n)}),n(e,this.value,s)}findOnPath(e,n){return this.findOnPath_(e,Re(),n)}findOnPath_(e,n,s){const r=this.value?s(n,this.value):!1;if(r)return r;if(ue(e))return null;{const i=de(e),o=this.children.get(i);return o?o.findOnPath_(Oe(e),ot(n,i),s):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,Re(),n)}foreachOnPath_(e,n,s){if(ue(e))return this;{this.value&&s(n,this.value);const r=de(e),i=this.children.get(r);return i?i.foreachOnPath_(Oe(e),ot(n,r),s):new xe(null)}}foreach(e){this.foreach_(Re(),e)}foreach_(e,n){this.children.inorderTraversal((s,r)=>{r.foreach_(ot(e,s),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,s)=>{s.value&&e(n,s.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hn{constructor(e){this.writeTree_=e}static empty(){return new hn(new xe(null))}}function Wi(t,e,n){if(ue(e))return new hn(new xe(n));{const s=t.writeTree_.findRootMostValueAndPath(e);if(s!=null){const r=s.path;let i=s.value;const o=Xt(r,e);return i=i.updateChild(o,n),new hn(t.writeTree_.set(r,i))}else{const r=new xe(n),i=t.writeTree_.setTree(e,r);return new hn(i)}}}function zg(t,e,n){let s=t;return Zt(n,(r,i)=>{s=Wi(s,ot(e,r),i)}),s}function Gg(t,e){if(ue(e))return hn.empty();{const n=t.writeTree_.setTree(e,new xe(null));return new hn(n)}}function fh(t,e){return ar(t,e)!=null}function ar(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild(Xt(n.path,e)):null}function Qg(t){const e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(At,(s,r)=>{e.push(new fe(s,r))}):t.writeTree_.children.inorderTraversal((s,r)=>{r.value!=null&&e.push(new fe(s,r.value))}),e}function _s(t,e){if(ue(e))return t;{const n=ar(t,e);return n!=null?new hn(new xe(n)):new hn(t.writeTree_.subtree(e))}}function ph(t){return t.writeTree_.isEmpty()}function zr(t,e){return uE(Re(),t.writeTree_,e)}function uE(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);{let s=null;return e.children.inorderTraversal((r,i)=>{r===".priority"?(M(i.value!==null,"Priority writes must always be leaf nodes"),s=i.value):n=uE(ot(t,r),i,n)}),!n.getChild(t).isEmpty()&&s!==null&&(n=n.updateChild(ot(t,".priority"),s)),n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hE(t,e){return _E(e,t)}function E1(t,e,n,s,r){M(s>t.lastWriteId,"Stacking an older write on top of newer ones"),r===void 0&&(r=!0),t.allWrites.push({path:e,snap:n,writeId:s,visible:r}),r&&(t.visibleWrites=Wi(t.visibleWrites,e,n)),t.lastWriteId=s}function T1(t,e){for(let n=0;n<t.allWrites.length;n++){const s=t.allWrites[n];if(s.writeId===e)return s}return null}function I1(t,e){const n=t.allWrites.findIndex(a=>a.writeId===e);M(n>=0,"removeWrite called with nonexistent writeId.");const s=t.allWrites[n];t.allWrites.splice(n,1);let r=s.visible,i=!1,o=t.allWrites.length-1;for(;r&&o>=0;){const a=t.allWrites[o];a.visible&&(o>=n&&A1(a,s.path)?r=!1:an(s.path,a.path)&&(i=!0)),o--}if(r){if(i)return C1(t),!0;if(s.snap)t.visibleWrites=Gg(t.visibleWrites,s.path);else{const a=s.children;Zt(a,l=>{t.visibleWrites=Gg(t.visibleWrites,ot(s.path,l))})}return!0}else return!1}function A1(t,e){if(t.snap)return an(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&an(ot(t.path,n),e))return!0;return!1}function C1(t){t.visibleWrites=dE(t.allWrites,b1,Re()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function b1(t){return t.visible}function dE(t,e,n){let s=hn.empty();for(let r=0;r<t.length;++r){const i=t[r];if(e(i)){const o=i.path;let a;if(i.snap)an(n,o)?(a=Xt(n,o),s=Wi(s,a,i.snap)):an(o,n)&&(a=Xt(o,n),s=Wi(s,Re(),i.snap.getChild(a)));else if(i.children){if(an(n,o))a=Xt(n,o),s=zg(s,a,i.children);else if(an(o,n))if(a=Xt(o,n),ue(a))s=zg(s,Re(),i.children);else{const l=Lr(i.children,de(a));if(l){const c=l.getChild(Oe(a));s=Wi(s,Re(),c)}}}else throw Xr("WriteRecord should have .snap or .children")}}return s}function fE(t,e,n,s,r){if(!s&&!r){const i=ar(t.visibleWrites,e);if(i!=null)return i;{const o=_s(t.visibleWrites,e);if(ph(o))return n;if(n==null&&!fh(o,Re()))return null;{const a=n||Ee.EMPTY_NODE;return zr(o,a)}}}else{const i=_s(t.visibleWrites,e);if(!r&&ph(i))return n;if(!r&&n==null&&!fh(i,Re()))return null;{const o=function(c){return(c.visible||r)&&(!s||!~s.indexOf(c.writeId))&&(an(c.path,e)||an(e,c.path))},a=dE(t.allWrites,o,e),l=n||Ee.EMPTY_NODE;return zr(a,l)}}}function R1(t,e,n){let s=Ee.EMPTY_NODE;const r=ar(t.visibleWrites,e);if(r)return r.isLeafNode()||r.forEachChild(At,(i,o)=>{s=s.updateImmediateChild(i,o)}),s;if(n){const i=_s(t.visibleWrites,e);return n.forEachChild(At,(o,a)=>{const l=zr(_s(i,new Fe(o)),a);s=s.updateImmediateChild(o,l)}),Qg(i).forEach(o=>{s=s.updateImmediateChild(o.name,o.node)}),s}else{const i=_s(t.visibleWrites,e);return Qg(i).forEach(o=>{s=s.updateImmediateChild(o.name,o.node)}),s}}function S1(t,e,n,s,r){M(s||r,"Either existingEventSnap or existingServerSnap must exist");const i=ot(e,n);if(fh(t.visibleWrites,i))return null;{const o=_s(t.visibleWrites,i);return ph(o)?r.getChild(n):zr(o,r.getChild(n))}}function k1(t,e,n,s){const r=ot(e,n),i=ar(t.visibleWrites,r);if(i!=null)return i;if(s.isCompleteForChild(n)){const o=_s(t.visibleWrites,r);return zr(o,s.getNode().getImmediateChild(n))}else return null}function P1(t,e){return ar(t.visibleWrites,e)}function N1(t,e,n,s,r,i,o){let a;const l=_s(t.visibleWrites,e),c=ar(l,Re());if(c!=null)a=c;else if(n!=null)a=zr(l,n);else return[];if(a=a.withIndex(o),!a.isEmpty()&&!a.isLeafNode()){const u=[],h=o.getCompare(),d=i?a.getReverseIteratorFrom(s,o):a.getIteratorFrom(s,o);let p=d.getNext();for(;p&&u.length<r;)h(p,s)!==0&&u.push(p),p=d.getNext();return u}else return[]}function x1(){return{visibleWrites:hn.empty(),allWrites:[],lastWriteId:-1}}function gh(t,e,n,s){return fE(t.writeTree,t.treePath,e,n,s)}function pE(t,e){return R1(t.writeTree,t.treePath,e)}function Yg(t,e,n,s){return S1(t.writeTree,t.treePath,e,n,s)}function gl(t,e){return P1(t.writeTree,ot(t.treePath,e))}function D1(t,e,n,s,r,i){return N1(t.writeTree,t.treePath,e,n,s,r,i)}function cf(t,e,n){return k1(t.writeTree,t.treePath,e,n)}function gE(t,e){return _E(ot(t.treePath,e),t.writeTree)}function _E(t,e){return{treePath:t,writeTree:e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class O1{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,s=e.childName;M(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),M(s!==".priority","Only non-priority child changes can be tracked.");const r=this.changeMap.get(s);if(r){const i=r.type;if(n==="child_added"&&i==="child_removed")this.changeMap.set(s,Wg(s,e.snapshotNode,r.snapshotNode));else if(n==="child_removed"&&i==="child_added")this.changeMap.delete(s);else if(n==="child_removed"&&i==="child_changed")this.changeMap.set(s,c1(s,r.oldSnap));else if(n==="child_changed"&&i==="child_added")this.changeMap.set(s,l1(s,e.snapshotNode));else if(n==="child_changed"&&i==="child_changed")this.changeMap.set(s,Wg(s,e.snapshotNode,r.oldSnap));else throw Xr("Illegal combination of changes: "+e+" occurred after "+r)}else this.changeMap.set(s,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class M1{getCompleteChild(e){return null}getChildAfterChild(e,n,s){return null}}const mE=new M1;class uf{constructor(e,n,s=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=s}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const s=this.optCompleteServerCache_!=null?new lf(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return cf(this.writes_,e,s)}}getChildAfterChild(e,n,s){const r=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:tr(this.viewCache_),i=D1(this.writes_,r,n,1,s,e);return i.length===0?null:i[0]}}function L1(t,e){M(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),M(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function V1(t,e,n,s,r){const i=new O1;let o,a;if(n.type===Cn.OVERWRITE){const c=n;c.source.fromUser?o=_h(t,e,c.path,c.snap,s,r,i):(M(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered()&&!ue(c.path),o=_l(t,e,c.path,c.snap,s,r,a,i))}else if(n.type===Cn.MERGE){const c=n;c.source.fromUser?o=U1(t,e,c.path,c.children,s,r,i):(M(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered(),o=mh(t,e,c.path,c.children,s,r,a,i))}else if(n.type===Cn.ACK_USER_WRITE){const c=n;c.revert?o=j1(t,e,c.path,s,r,i):o=B1(t,e,c.path,c.affectedTree,s,r,i)}else if(n.type===Cn.LISTEN_COMPLETE)o=$1(t,e,n.path,s,i);else throw Xr("Unknown operation type: "+n.type);const l=i.getChanges();return F1(e,o,l),{viewCache:o,changes:l}}function F1(t,e,n){const s=e.eventCache;if(s.isFullyInitialized()){const r=s.getNode().isLeafNode()||s.getNode().isEmpty(),i=dh(t);(n.length>0||!t.eventCache.isFullyInitialized()||r&&!s.getNode().equals(i)||!s.getNode().getPriority().equals(i.getPriority()))&&n.push(a1(dh(e)))}}function yE(t,e,n,s,r,i){const o=e.eventCache;if(gl(s,n)!=null)return e;{let a,l;if(ue(n))if(M(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const c=tr(e),u=c instanceof Ee?c:Ee.EMPTY_NODE,h=pE(s,u);a=t.filter.updateFullNode(e.eventCache.getNode(),h,i)}else{const c=gh(s,tr(e));a=t.filter.updateFullNode(e.eventCache.getNode(),c,i)}else{const c=de(n);if(c===".priority"){M(Es(n)===1,"Can't have a priority with additional path components");const u=o.getNode();l=e.serverCache.getNode();const h=Yg(s,n,u,l);h!=null?a=t.filter.updatePriority(u,h):a=o.getNode()}else{const u=Oe(n);let h;if(o.isCompleteForChild(c)){l=e.serverCache.getNode();const d=Yg(s,n,o.getNode(),l);d!=null?h=o.getNode().getImmediateChild(c).updateChild(u,d):h=o.getNode().getImmediateChild(c)}else h=cf(s,c,e.serverCache);h!=null?a=t.filter.updateChild(o.getNode(),c,h,u,r,i):a=o.getNode()}}return ji(e,a,o.isFullyInitialized()||ue(n),t.filter.filtersNodes())}}function _l(t,e,n,s,r,i,o,a){const l=e.serverCache;let c;const u=o?t.filter:t.filter.getIndexedFilter();if(ue(n))c=u.updateFullNode(l.getNode(),s,null);else if(u.filtersNodes()&&!l.isFiltered()){const p=l.getNode().updateChild(n,s);c=u.updateFullNode(l.getNode(),p,null)}else{const p=de(n);if(!l.isCompleteForPath(n)&&Es(n)>1)return e;const m=Oe(n),E=l.getNode().getImmediateChild(p).updateChild(m,s);p===".priority"?c=u.updatePriority(l.getNode(),E):c=u.updateChild(l.getNode(),p,E,m,mE,null)}const h=cE(e,c,l.isFullyInitialized()||ue(n),u.filtersNodes()),d=new uf(r,h,i);return yE(t,h,n,r,d,a)}function _h(t,e,n,s,r,i,o){const a=e.eventCache;let l,c;const u=new uf(r,e,i);if(ue(n))c=t.filter.updateFullNode(e.eventCache.getNode(),s,o),l=ji(e,c,!0,t.filter.filtersNodes());else{const h=de(n);if(h===".priority")c=t.filter.updatePriority(e.eventCache.getNode(),s),l=ji(e,c,a.isFullyInitialized(),a.isFiltered());else{const d=Oe(n),p=a.getNode().getImmediateChild(h);let m;if(ue(d))m=s;else{const _=u.getCompleteChild(h);_!=null?Gw(d)===".priority"&&_.getChild(Yw(d)).isEmpty()?m=_:m=_.updateChild(d,s):m=Ee.EMPTY_NODE}if(p.equals(m))l=e;else{const _=t.filter.updateChild(a.getNode(),h,m,d,u,o);l=ji(e,_,a.isFullyInitialized(),t.filter.filtersNodes())}}}return l}function Xg(t,e){return t.eventCache.isCompleteForChild(e)}function U1(t,e,n,s,r,i,o){let a=e;return s.foreach((l,c)=>{const u=ot(n,l);Xg(e,de(u))&&(a=_h(t,a,u,c,r,i,o))}),s.foreach((l,c)=>{const u=ot(n,l);Xg(e,de(u))||(a=_h(t,a,u,c,r,i,o))}),a}function Jg(t,e,n){return n.foreach((s,r)=>{e=e.updateChild(s,r)}),e}function mh(t,e,n,s,r,i,o,a){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let l=e,c;ue(n)?c=s:c=new xe(null).setTree(n,s);const u=e.serverCache.getNode();return c.children.inorderTraversal((h,d)=>{if(u.hasChild(h)){const p=e.serverCache.getNode().getImmediateChild(h),m=Jg(t,p,d);l=_l(t,l,new Fe(h),m,r,i,o,a)}}),c.children.inorderTraversal((h,d)=>{const p=!e.serverCache.isCompleteForChild(h)&&d.value===null;if(!u.hasChild(h)&&!p){const m=e.serverCache.getNode().getImmediateChild(h),_=Jg(t,m,d);l=_l(t,l,new Fe(h),_,r,i,o,a)}}),l}function B1(t,e,n,s,r,i,o){if(gl(r,n)!=null)return e;const a=e.serverCache.isFiltered(),l=e.serverCache;if(s.value!=null){if(ue(n)&&l.isFullyInitialized()||l.isCompleteForPath(n))return _l(t,e,n,l.getNode().getChild(n),r,i,a,o);if(ue(n)){let c=new xe(null);return l.getNode().forEachChild(xr,(u,h)=>{c=c.set(new Fe(u),h)}),mh(t,e,n,c,r,i,a,o)}else return e}else{let c=new xe(null);return s.foreach((u,h)=>{const d=ot(n,u);l.isCompleteForPath(d)&&(c=c.set(u,l.getNode().getChild(d)))}),mh(t,e,n,c,r,i,a,o)}}function $1(t,e,n,s,r){const i=e.serverCache,o=cE(e,i.getNode(),i.isFullyInitialized()||ue(n),i.isFiltered());return yE(t,o,n,s,mE,r)}function j1(t,e,n,s,r,i){let o;if(gl(s,n)!=null)return e;{const a=new uf(s,e,r),l=e.eventCache.getNode();let c;if(ue(n)||de(n)===".priority"){let u;if(e.serverCache.isFullyInitialized())u=gh(s,tr(e));else{const h=e.serverCache.getNode();M(h instanceof Ee,"serverChildren would be complete if leaf node"),u=pE(s,h)}u=u,c=t.filter.updateFullNode(l,u,i)}else{const u=de(n);let h=cf(s,u,e.serverCache);h==null&&e.serverCache.isCompleteForChild(u)&&(h=l.getImmediateChild(u)),h!=null?c=t.filter.updateChild(l,u,h,Oe(n),a,i):e.eventCache.getNode().hasChild(u)?c=t.filter.updateChild(l,u,Ee.EMPTY_NODE,Oe(n),a,i):c=l,c.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=gh(s,tr(e)),o.isLeafNode()&&(c=t.filter.updateFullNode(c,o,i)))}return o=e.serverCache.isFullyInitialized()||gl(s,Re())!=null,ji(e,c,o,t.filter.filtersNodes())}}function W1(t,e){const n=tr(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!ue(e)&&!n.getImmediateChild(de(e)).isEmpty())?n.getChild(e):null}function Zg(t,e,n,s){e.type===Cn.MERGE&&e.source.queryId!==null&&(M(tr(t.viewCache_),"We should always have a full cache before handling merges"),M(dh(t.viewCache_),"Missing event cache, even though we have a server cache"));const r=t.viewCache_,i=V1(t.processor_,r,e,n,s);return L1(t.processor_,i.viewCache),M(i.viewCache.serverCache.isFullyInitialized()||!r.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=i.viewCache,H1(t,i.changes,i.viewCache.eventCache.getNode(),null)}function H1(t,e,n,s){const r=s?[s]:t.eventRegistrations_;return m1(t.eventGenerator_,e,n,r)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let e_;function q1(t){M(!e_,"__referenceConstructor has already been defined"),e_=t}function hf(t,e,n,s){const r=e.source.queryId;if(r!==null){const i=t.views.get(r);return M(i!=null,"SyncTree gave us an op for an invalid query."),Zg(i,e,n,s)}else{let i=[];for(const o of t.views.values())i=i.concat(Zg(o,e,n,s));return i}}function df(t,e){let n=null;for(const s of t.views.values())n=n||W1(s,e);return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let t_;function K1(t){M(!t_,"__referenceConstructor has already been defined"),t_=t}class n_{constructor(e){this.listenProvider_=e,this.syncPointTree_=new xe(null),this.pendingWriteTree_=x1(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function z1(t,e,n,s,r){return E1(t.pendingWriteTree_,e,n,s,r),r?mc(t,new er(iE(),e,n)):[]}function Er(t,e,n=!1){const s=T1(t.pendingWriteTree_,e);if(I1(t.pendingWriteTree_,e)){let i=new xe(null);return s.snap!=null?i=i.set(Re(),!0):Zt(s.children,o=>{i=i.set(new Fe(o),!0)}),mc(t,new pl(s.path,i,n))}else return[]}function _c(t,e,n){return mc(t,new er(oE(),e,n))}function G1(t,e,n){const s=xe.fromObject(n);return mc(t,new yo(oE(),e,s))}function Q1(t,e,n,s){const r=TE(t,s);if(r!=null){const i=IE(r),o=i.path,a=i.queryId,l=Xt(o,e),c=new er(aE(a),l,n);return AE(t,o,c)}else return[]}function Y1(t,e,n,s){const r=TE(t,s);if(r){const i=IE(r),o=i.path,a=i.queryId,l=Xt(o,e),c=xe.fromObject(n),u=new yo(aE(a),l,c);return AE(t,o,u)}else return[]}function vE(t,e,n){const r=t.pendingWriteTree_,i=t.syncPointTree_.findOnPath(e,(o,a)=>{const l=Xt(o,e),c=df(a,l);if(c)return c});return fE(r,e,i,n,!0)}function mc(t,e){return wE(e,t.syncPointTree_,null,hE(t.pendingWriteTree_,Re()))}function wE(t,e,n,s){if(ue(t.path))return EE(t,e,n,s);{const r=e.get(Re());n==null&&r!=null&&(n=df(r,Re()));let i=[];const o=de(t.path),a=t.operationForChild(o),l=e.children.get(o);if(l&&a){const c=n?n.getImmediateChild(o):null,u=gE(s,o);i=i.concat(wE(a,l,c,u))}return r&&(i=i.concat(hf(r,t,s,n))),i}}function EE(t,e,n,s){const r=e.get(Re());n==null&&r!=null&&(n=df(r,Re()));let i=[];return e.children.inorderTraversal((o,a)=>{const l=n?n.getImmediateChild(o):null,c=gE(s,o),u=t.operationForChild(o);u&&(i=i.concat(EE(u,a,l,c)))}),r&&(i=i.concat(hf(r,t,s,n))),i}function TE(t,e){return t.tagToQueryMap.get(e)}function IE(t){const e=t.indexOf("$");return M(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new Fe(t.substr(0,e))}}function AE(t,e,n){const s=t.syncPointTree_.get(e);M(s,"Missing sync point for query tag that we're tracking");const r=hE(t.pendingWriteTree_,e);return hf(s,n,r,null)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ff{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new ff(n)}node(){return this.node_}}class pf{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=ot(this.path_,e);return new pf(this.syncTree_,n)}node(){return vE(this.syncTree_,this.path_)}}const X1=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},s_=function(t,e,n){if(!t||typeof t!="object")return t;if(M(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return J1(t[".sv"],e,n);if(typeof t[".sv"]=="object")return Z1(t[".sv"],e);M(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},J1=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:M(!1,"Unexpected server value: "+t)}},Z1=function(t,e,n){t.hasOwnProperty("increment")||M(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const s=t.increment;typeof s!="number"&&M(!1,"Unexpected increment value: "+s);const r=e.node();if(M(r!==null&&typeof r<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!r.isLeafNode())return s;const o=r.getValue();return typeof o!="number"?s:o+s},eD=function(t,e,n,s){return gf(e,new pf(n,t),s)},tD=function(t,e,n){return gf(t,new ff(e),n)};function gf(t,e,n){const s=t.getPriority().val(),r=s_(s,e.getImmediateChild(".priority"),n);let i;if(t.isLeafNode()){const o=t,a=s_(o.getValue(),e,n);return a!==o.getValue()||r!==o.getPriority().val()?new nt(a,wt(r)):t}else{const o=t;return i=o,r!==o.getPriority().val()&&(i=i.updatePriority(new nt(r))),o.forEachChild(At,(a,l)=>{const c=gf(l,e.getImmediateChild(a),n);c!==l&&(i=i.updateImmediateChild(a,c))}),i}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _f{constructor(e="",n=null,s={children:{},childCount:0}){this.name=e,this.parent=n,this.node=s}}function mf(t,e){let n=e instanceof Fe?e:new Fe(e),s=t,r=de(n);for(;r!==null;){const i=Lr(s.node.children,r)||{children:{},childCount:0};s=new _f(r,s,i),n=Oe(n),r=de(n)}return s}function ai(t){return t.node.value}function CE(t,e){t.node.value=e,yh(t)}function bE(t){return t.node.childCount>0}function nD(t){return ai(t)===void 0&&!bE(t)}function yc(t,e){Zt(t.node.children,(n,s)=>{e(new _f(n,t,s))})}function RE(t,e,n,s){n&&!s&&e(t),yc(t,r=>{RE(r,e,!0,s)}),n&&s&&e(t)}function sD(t,e,n){let s=n?t:t.parent;for(;s!==null;){if(e(s))return!0;s=s.parent}return!1}function qo(t){return new Fe(t.parent===null?t.name:qo(t.parent)+"/"+t.name)}function yh(t){t.parent!==null&&rD(t.parent,t.name,t)}function rD(t,e,n){const s=nD(n),r=Zn(t.node.children,e);s&&r?(delete t.node.children[e],t.node.childCount--,yh(t)):!s&&!r&&(t.node.children[e]=n.node,t.node.childCount++,yh(t))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iD=/[\[\].#$\/\u0000-\u001F\u007F]/,oD=/[\[\].#$\u0000-\u001F\u007F]/,tu=10*1024*1024,SE=function(t){return typeof t=="string"&&t.length!==0&&!iD.test(t)},aD=function(t){return typeof t=="string"&&t.length!==0&&!oD.test(t)},lD=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),aD(t)},kE=function(t,e,n){const s=n instanceof Fe?new $x(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+Ps(s));if(typeof e=="function")throw new Error(t+"contains a function "+Ps(s)+" with contents = "+e.toString());if(Sw(e))throw new Error(t+"contains "+e.toString()+" "+Ps(s));if(typeof e=="string"&&e.length>tu/3&&Dl(e)>tu)throw new Error(t+"contains a string greater than "+tu+" utf8 bytes "+Ps(s)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let r=!1,i=!1;if(Zt(e,(o,a)=>{if(o===".value")r=!0;else if(o!==".priority"&&o!==".sv"&&(i=!0,!SE(o)))throw new Error(t+" contains an invalid key ("+o+") "+Ps(s)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);jx(s,o),kE(t,a,s),Wx(s)}),r&&i)throw new Error(t+' contains ".value" child '+Ps(s)+" in addition to actual children.")}},cD=function(t,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!SE(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!lD(n))throw new Error(Q0(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uD{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function hD(t,e){let n=null;for(let s=0;s<e.length;s++){const r=e[s],i=r.getPath();n!==null&&!Xw(i,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:i}),n.events.push(r)}n&&t.eventLists_.push(n)}function lr(t,e,n){hD(t,n),dD(t,s=>an(s,e)||an(e,s))}function dD(t,e){t.recursionDepth_++;let n=!0;for(let s=0;s<t.eventLists_.length;s++){const r=t.eventLists_[s];if(r){const i=r.path;e(i)?(fD(t.eventLists_[s]),t.eventLists_[s]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function fD(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(n!==null){t.events[e]=null;const s=n.getEventRunner();Hs&&vt("event: "+n.toString()),Wo(s)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pD="repo_interrupt",gD=25;class _D{constructor(e,n,s,r){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=s,this.appCheckProvider_=r,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new uD,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=fl(),this.transactionQueueTree_=new _f,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function mD(t,e,n){if(t.stats_=nf(t.repoInfo_),t.forceRestClient_||hx())t.server_=new dl(t.repoInfo_,(s,r,i,o)=>{r_(t,s,r,i,o)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>i_(t,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{dt(n)}catch(s){throw new Error("Invalid authOverride provided: "+s)}}t.persistentConnection_=new Kn(t.repoInfo_,e,(s,r,i,o)=>{r_(t,s,r,i,o)},s=>{i_(t,s)},s=>{vD(t,s)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(s=>{t.server_.refreshAuthToken(s)}),t.appCheckProvider_.addTokenChangeListener(s=>{t.server_.refreshAppCheckToken(s.token)}),t.statsReporter_=mx(t.repoInfo_,()=>new _1(t.stats_,t.server_)),t.infoData_=new h1,t.infoSyncTree_=new n_({startListening:(s,r,i,o)=>{let a=[];const l=t.infoData_.getNode(s._path);return l.isEmpty()||(a=_c(t.infoSyncTree_,s._path,l),setTimeout(()=>{o("ok")},0)),a},stopListening:()=>{}}),yf(t,"connected",!1),t.serverSyncTree_=new n_({startListening:(s,r,i,o)=>(t.server_.listen(s,i,r,(a,l)=>{const c=o(a,l);lr(t.eventQueue_,s._path,c)}),[]),stopListening:(s,r)=>{t.server_.unlisten(s,r)}})}function yD(t){const n=t.infoData_.getNode(new Fe(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function PE(t){return X1({timestamp:yD(t)})}function r_(t,e,n,s,r){t.dataUpdateCount++;const i=new Fe(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let o=[];if(r)if(s){const l=Ua(n,c=>wt(c));o=Y1(t.serverSyncTree_,i,l,r)}else{const l=wt(n);o=Q1(t.serverSyncTree_,i,l,r)}else if(s){const l=Ua(n,c=>wt(c));o=G1(t.serverSyncTree_,i,l)}else{const l=wt(n);o=_c(t.serverSyncTree_,i,l)}let a=i;o.length>0&&(a=wf(t,i)),lr(t.eventQueue_,a,o)}function i_(t,e){yf(t,"connected",e),e===!1&&ED(t)}function vD(t,e){Zt(e,(n,s)=>{yf(t,n,s)})}function yf(t,e,n){const s=new Fe("/.info/"+e),r=wt(n);t.infoData_.updateSnapshot(s,r);const i=_c(t.infoSyncTree_,s,r);lr(t.eventQueue_,s,i)}function wD(t){return t.nextWriteId_++}function ED(t){NE(t,"onDisconnectEvents");const e=PE(t),n=fl();hh(t.onDisconnect_,Re(),(r,i)=>{const o=eD(r,i,t.serverSyncTree_,e);rE(n,r,o)});let s=[];hh(n,Re(),(r,i)=>{s=s.concat(_c(t.serverSyncTree_,r,i));const o=CD(t,r);wf(t,o)}),t.onDisconnect_=fl(),lr(t.eventQueue_,Re(),s)}function TD(t){t.persistentConnection_&&t.persistentConnection_.interrupt(pD)}function NE(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),vt(n,...e)}function xE(t,e,n){return vE(t.serverSyncTree_,e,n)||Ee.EMPTY_NODE}function vf(t,e=t.transactionQueueTree_){if(e||vc(t,e),ai(e)){const n=OE(t,e);M(n.length>0,"Sending zero length transaction queue"),n.every(r=>r.status===0)&&ID(t,qo(e),n)}else bE(e)&&yc(e,n=>{vf(t,n)})}function ID(t,e,n){const s=n.map(c=>c.currentWriteId),r=xE(t,e,s);let i=r;const o=r.hash();for(let c=0;c<n.length;c++){const u=n[c];M(u.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),u.status=1,u.retryCount++;const h=Xt(e,u.path);i=i.updateChild(h,u.currentOutputSnapshotRaw)}const a=i.val(!0),l=e;t.server_.put(l.toString(),a,c=>{NE(t,"transaction put response",{path:l.toString(),status:c});let u=[];if(c==="ok"){const h=[];for(let d=0;d<n.length;d++)n[d].status=2,u=u.concat(Er(t.serverSyncTree_,n[d].currentWriteId)),n[d].onComplete&&h.push(()=>n[d].onComplete(null,!0,n[d].currentOutputSnapshotResolved)),n[d].unwatcher();vc(t,mf(t.transactionQueueTree_,e)),vf(t,t.transactionQueueTree_),lr(t.eventQueue_,e,u);for(let d=0;d<h.length;d++)Wo(h[d])}else{if(c==="datastale")for(let h=0;h<n.length;h++)n[h].status===3?n[h].status=4:n[h].status=0;else{qt("transaction at "+l.toString()+" failed: "+c);for(let h=0;h<n.length;h++)n[h].status=4,n[h].abortReason=c}wf(t,e)}},o)}function wf(t,e){const n=DE(t,e),s=qo(n),r=OE(t,n);return AD(t,r,s),s}function AD(t,e,n){if(e.length===0)return;const s=[];let r=[];const o=e.filter(a=>a.status===0).map(a=>a.currentWriteId);for(let a=0;a<e.length;a++){const l=e[a],c=Xt(n,l.path);let u=!1,h;if(M(c!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),l.status===4)u=!0,h=l.abortReason,r=r.concat(Er(t.serverSyncTree_,l.currentWriteId,!0));else if(l.status===0)if(l.retryCount>=gD)u=!0,h="maxretry",r=r.concat(Er(t.serverSyncTree_,l.currentWriteId,!0));else{const d=xE(t,l.path,o);l.currentInputSnapshot=d;const p=e[a].update(d.val());if(p!==void 0){kE("transaction failed: Data returned ",p,l.path);let m=wt(p);typeof p=="object"&&p!=null&&Zn(p,".priority")||(m=m.updatePriority(d.getPriority()));const E=l.currentWriteId,F=PE(t),v=tD(m,d,F);l.currentOutputSnapshotRaw=m,l.currentOutputSnapshotResolved=v,l.currentWriteId=wD(t),o.splice(o.indexOf(E),1),r=r.concat(z1(t.serverSyncTree_,l.path,v,l.currentWriteId,l.applyLocally)),r=r.concat(Er(t.serverSyncTree_,E,!0))}else u=!0,h="nodata",r=r.concat(Er(t.serverSyncTree_,l.currentWriteId,!0))}lr(t.eventQueue_,n,r),r=[],u&&(e[a].status=2,function(d){setTimeout(d,Math.floor(0))}(e[a].unwatcher),e[a].onComplete&&(h==="nodata"?s.push(()=>e[a].onComplete(null,!1,e[a].currentInputSnapshot)):s.push(()=>e[a].onComplete(new Error(h),!1,null))))}vc(t,t.transactionQueueTree_);for(let a=0;a<s.length;a++)Wo(s[a]);vf(t,t.transactionQueueTree_)}function DE(t,e){let n,s=t.transactionQueueTree_;for(n=de(e);n!==null&&ai(s)===void 0;)s=mf(s,n),e=Oe(e),n=de(e);return s}function OE(t,e){const n=[];return ME(t,e,n),n.sort((s,r)=>s.order-r.order),n}function ME(t,e,n){const s=ai(e);if(s)for(let r=0;r<s.length;r++)n.push(s[r]);yc(e,r=>{ME(t,r,n)})}function vc(t,e){const n=ai(e);if(n){let s=0;for(let r=0;r<n.length;r++)n[r].status!==2&&(n[s]=n[r],s++);n.length=s,CE(e,n.length>0?n:void 0)}yc(e,s=>{vc(t,s)})}function CD(t,e){const n=qo(DE(t,e)),s=mf(t.transactionQueueTree_,e);return sD(s,r=>{nu(t,r)}),nu(t,s),RE(s,r=>{nu(t,r)}),n}function nu(t,e){const n=ai(e);if(n){const s=[];let r=[],i=-1;for(let o=0;o<n.length;o++)n[o].status===3||(n[o].status===1?(M(i===o-1,"All SENT items should be at beginning of queue."),i=o,n[o].status=3,n[o].abortReason="set"):(M(n[o].status===0,"Unexpected transaction status in abort"),n[o].unwatcher(),r=r.concat(Er(t.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&s.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));i===-1?CE(e,void 0):n.length=i+1,lr(t.eventQueue_,qo(e),r);for(let o=0;o<s.length;o++)Wo(s[o])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bD(t){let e="";const n=t.split("/");for(let s=0;s<n.length;s++)if(n[s].length>0){let r=n[s];try{r=decodeURIComponent(r.replace(/\+/g," "))}catch{}e+="/"+r}return e}function RD(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const n of t.split("&")){if(n.length===0)continue;const s=n.split("=");s.length===2?e[decodeURIComponent(s[0])]=decodeURIComponent(s[1]):qt(`Invalid query segment '${n}' in query '${t}'`)}return e}const o_=function(t,e){const n=SD(t),s=n.namespace;n.domain==="firebase.com"&&Js(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!s||s==="undefined")&&n.domain!=="localhost"&&Js("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||sx();const r=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new px(n.host,n.secure,s,r,e,"",s!==n.subdomain),path:new Fe(n.pathString)}},SD=function(t){let e="",n="",s="",r="",i="",o=!0,a="https",l=443;if(typeof t=="string"){let c=t.indexOf("//");c>=0&&(a=t.substring(0,c-1),t=t.substring(c+2));let u=t.indexOf("/");u===-1&&(u=t.length);let h=t.indexOf("?");h===-1&&(h=t.length),e=t.substring(0,Math.min(u,h)),u<h&&(r=bD(t.substring(u,h)));const d=RD(t.substring(Math.min(t.length,h)));c=e.indexOf(":"),c>=0?(o=a==="https"||a==="wss",l=parseInt(e.substring(c+1),10)):c=e.length;const p=e.slice(0,c);if(p.toLowerCase()==="localhost")n="localhost";else if(p.split(".").length<=2)n=p;else{const m=e.indexOf(".");s=e.substring(0,m).toLowerCase(),n=e.substring(m+1),i=s}"ns"in d&&(i=d.ns)}return{host:e,port:l,domain:n,subdomain:s,secure:o,scheme:a,pathString:r,namespace:i}};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ef{constructor(e,n,s,r){this._repo=e,this._path=n,this._queryParams=s,this._orderByCalled=r}get key(){return ue(this._path)?null:Gw(this._path)}get ref(){return new li(this._repo,this._path)}get _queryIdentifier(){const e=qg(this._queryParams),n=ef(e);return n==="{}"?"default":n}get _queryObject(){return qg(this._queryParams)}isEqual(e){if(e=Je(e),!(e instanceof Ef))return!1;const n=this._repo===e._repo,s=Xw(this._path,e._path),r=this._queryIdentifier===e._queryIdentifier;return n&&s&&r}toJSON(){return this.toString()}toString(){return this._repo.toString()+Bx(this._path)}}class li extends Ef{constructor(e,n){super(e,n,new af,!1)}get parent(){const e=Yw(this._path);return e===null?null:new li(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}q1(li);K1(li);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kD="FIREBASE_DATABASE_EMULATOR_HOST",vh={};let PD=!1;function ND(t,e,n,s,r){let i=s||t.options.databaseURL;i===void 0&&(t.options.projectId||Js("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),vt("Using default host for project ",t.options.projectId),i=`${t.options.projectId}-default-rtdb.firebaseio.com`);let o=o_(i,r),a=o.repoInfo,l,c;typeof process<"u"&&process.env&&(c=process.env[kD]),c?(l=!0,i=`http://${c}?ns=${a.namespace}`,o=o_(i,r),a=o.repoInfo):l=!o.repoInfo.secure;const u=r&&l?new lh(lh.OWNER):new fx(t.name,t.options,e);cD("Invalid Firebase Database URL",o),ue(o.path)||Js("Database URL must point to the root of a Firebase Database (not including a child path).");const h=DD(a,t,u,new dx(t.name,n));return new OD(h,t)}function xD(t,e){const n=vh[e];(!n||n[t.key]!==t)&&Js(`Database ${e}(${t.repoInfo_}) has already been deleted.`),TD(t),delete n[t.key]}function DD(t,e,n,s){let r=vh[e.name];r||(r={},vh[e.name]=r);let i=r[t.toURLString()];return i&&Js("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),i=new _D(t,PD,n,s),r[t.toURLString()]=i,i}class OD{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(mD(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new li(this._repo,Re())),this._rootInternal}_delete(){return this._rootInternal!==null&&(xD(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&Js("Cannot call "+e+" on a deleted database.")}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function MD(t){JN(Ts),xn(new dn("database",(e,{instanceIdentifier:n})=>{const s=e.getProvider("app").getImmediate(),r=e.getProvider("auth-internal"),i=e.getProvider("app-check-internal");return ND(s,r,i,n)},"PUBLIC").setMultipleInstances(!0)),Ht(Rg,Sg,t),Ht(Rg,Sg,"esm2017")}Kn.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};Kn.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};MD();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const LE="firebasestorage.googleapis.com",LD="storageBucket",VD=2*60*1e3,FD=10*60*1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fn extends Vn{constructor(e,n,s=0){super(su(e),`Firebase Storage: ${n} (${su(e)})`),this.status_=s,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,Fn.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return su(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var Mn;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(Mn||(Mn={}));function su(t){return"storage/"+t}function UD(){const t="An unknown error occurred, please check the error payload for server response.";return new Fn(Mn.UNKNOWN,t)}function BD(){return new Fn(Mn.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function $D(){return new Fn(Mn.CANCELED,"User canceled the upload/download.")}function jD(t){return new Fn(Mn.INVALID_URL,"Invalid URL '"+t+"'.")}function WD(t){return new Fn(Mn.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function a_(t){return new Fn(Mn.INVALID_ARGUMENT,t)}function VE(){return new Fn(Mn.APP_DELETED,"The Firebase app was deleted.")}function HD(t){return new Fn(Mn.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ln{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let s;try{s=ln.makeFromUrl(e,n)}catch{return new ln(e,"")}if(s.path==="")return s;throw WD(e)}static makeFromUrl(e,n){let s=null;const r="([A-Za-z0-9.\\-_]+)";function i(w){w.path.charAt(w.path.length-1)==="/"&&(w.path_=w.path_.slice(0,-1))}const o="(/(.*))?$",a=new RegExp("^gs://"+r+o,"i"),l={bucket:1,path:3};function c(w){w.path_=decodeURIComponent(w.path)}const u="v[A-Za-z0-9_]+",h=n.replace(/[.]/g,"\\."),d="(/([^?#]*).*)?$",p=new RegExp(`^https?://${h}/${u}/b/${r}/o${d}`,"i"),m={bucket:1,path:3},_=n===LE?"(?:storage.googleapis.com|storage.cloud.google.com)":n,E="([^?#]*)",F=new RegExp(`^https?://${_}/${r}/${E}`,"i"),y=[{regex:a,indices:l,postModify:i},{regex:p,indices:m,postModify:c},{regex:F,indices:{bucket:1,path:2},postModify:c}];for(let w=0;w<y.length;w++){const U=y[w],Q=U.regex.exec(e);if(Q){const ie=Q[U.indices.bucket];let ce=Q[U.indices.path];ce||(ce=""),s=new ln(ie,ce),U.postModify(s);break}}if(s==null)throw jD(e);return s}}class qD{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function KD(t,e,n){let s=1,r=null,i=null,o=!1,a=0;function l(){return a===2}let c=!1;function u(...E){c||(c=!0,e.apply(null,E))}function h(E){r=setTimeout(()=>{r=null,t(p,l())},E)}function d(){i&&clearTimeout(i)}function p(E,...F){if(c){d();return}if(E){d(),u.call(null,E,...F);return}if(l()||o){d(),u.call(null,E,...F);return}s<64&&(s*=2);let y;a===1?(a=2,y=0):y=(s+Math.random())*1e3,h(y)}let m=!1;function _(E){m||(m=!0,d(),!c&&(r!==null?(E||(a=2),clearTimeout(r),h(0)):E||(a=1)))}return h(0),i=setTimeout(()=>{o=!0,_(!0)},n),_}function zD(t){t(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function GD(t){return t!==void 0}function l_(t,e,n,s){if(s<e)throw a_(`Invalid value for '${t}'. Expected ${e} or greater.`);if(s>n)throw a_(`Invalid value for '${t}'. Expected ${n} or less.`)}function QD(t){const e=encodeURIComponent;let n="?";for(const s in t)if(t.hasOwnProperty(s)){const r=e(s)+"="+e(t[s]);n=n+r+"&"}return n=n.slice(0,-1),n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ml;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(ml||(ml={}));/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function YD(t,e){const n=t>=500&&t<600,r=[408,429].indexOf(t)!==-1,i=e.indexOf(t)!==-1;return n||r||i}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XD{constructor(e,n,s,r,i,o,a,l,c,u,h,d=!0){this.url_=e,this.method_=n,this.headers_=s,this.body_=r,this.successCodes_=i,this.additionalRetryCodes_=o,this.callback_=a,this.errorCallback_=l,this.timeout_=c,this.progressCallback_=u,this.connectionFactory_=h,this.retry=d,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((p,m)=>{this.resolve_=p,this.reject_=m,this.start_()})}start_(){const e=(s,r)=>{if(r){s(!1,new _a(!1,null,!0));return}const i=this.connectionFactory_();this.pendingConnection_=i;const o=a=>{const l=a.loaded,c=a.lengthComputable?a.total:-1;this.progressCallback_!==null&&this.progressCallback_(l,c)};this.progressCallback_!==null&&i.addUploadProgressListener(o),i.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&i.removeUploadProgressListener(o),this.pendingConnection_=null;const a=i.getErrorCode()===ml.NO_ERROR,l=i.getStatus();if(!a||YD(l,this.additionalRetryCodes_)&&this.retry){const u=i.getErrorCode()===ml.ABORT;s(!1,new _a(!1,null,u));return}const c=this.successCodes_.indexOf(l)!==-1;s(!0,new _a(c,i))})},n=(s,r)=>{const i=this.resolve_,o=this.reject_,a=r.connection;if(r.wasSuccessCode)try{const l=this.callback_(a,a.getResponse());GD(l)?i(l):i()}catch(l){o(l)}else if(a!==null){const l=UD();l.serverResponse=a.getErrorText(),this.errorCallback_?o(this.errorCallback_(a,l)):o(l)}else if(r.canceled){const l=this.appDelete_?VE():$D();o(l)}else{const l=BD();o(l)}};this.canceled_?n(!1,new _a(!1,null,!0)):this.backoffId_=KD(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&zD(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class _a{constructor(e,n,s){this.wasSuccessCode=e,this.connection=n,this.canceled=!!s}}function JD(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function ZD(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function eO(t,e){e&&(t["X-Firebase-GMPID"]=e)}function tO(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function nO(t,e,n,s,r,i,o=!0){const a=QD(t.urlParams),l=t.url+a,c=Object.assign({},t.headers);return eO(c,e),JD(c,n),ZD(c,i),tO(c,s),new XD(l,t.method,c,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,r,o)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sO(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function rO(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yl{constructor(e,n){this._service=e,n instanceof ln?this._location=n:this._location=ln.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new yl(e,n)}get root(){const e=new ln(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return rO(this._location.path)}get storage(){return this._service}get parent(){const e=sO(this._location.path);if(e===null)return null;const n=new ln(this._location.bucket,e);return new yl(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw HD(e)}}function c_(t,e){const n=e==null?void 0:e[LD];return n==null?null:ln.makeFromBucketSpec(n,t)}class iO{constructor(e,n,s,r,i){this.app=e,this._authProvider=n,this._appCheckProvider=s,this._url=r,this._firebaseVersion=i,this._bucket=null,this._host=LE,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=VD,this._maxUploadRetryTime=FD,this._requests=new Set,r!=null?this._bucket=ln.makeFromBucketSpec(r,this._host):this._bucket=c_(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=ln.makeFromBucketSpec(this._url,e):this._bucket=c_(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){l_("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){l_("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new yl(this,e)}_makeRequest(e,n,s,r,i=!0){if(this._deleted)return new qD(VE());{const o=nO(e,this._appId,s,r,n,this._firebaseVersion,i);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,n){const[s,r]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,s,r).getPromise()}}const u_="@firebase/storage",h_="0.11.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oO="storage";function aO(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),s=t.getProvider("auth-internal"),r=t.getProvider("app-check-internal");return new iO(n,s,r,e,Ts)}function lO(){xn(new dn(oO,aO,"PUBLIC").setMultipleInstances(!0)),Ht(u_,h_,""),Ht(u_,h_,"esm2017")}lO();function cO(t){return lN(Zd(t))}function uO(t){return(e,n)=>{const s=GN(e,n).run(()=>ge(t));Aw.set(e,s),XN(s,e)}}function hO(t,{firebaseApp:e,modules:n=[]}){t.provide(Iw,e);for(const s of n)s(e,t)}var Pi=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function dO(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}function fO(t){if(t.__esModule)return t;var e=t.default;if(typeof e=="function"){var n=function s(){return this instanceof s?Reflect.construct(e,arguments,this.constructor):e.apply(this,arguments)};n.prototype=e.prototype}else n={};return Object.defineProperty(n,"__esModule",{value:!0}),Object.keys(t).forEach(function(s){var r=Object.getOwnPropertyDescriptor(t,s);Object.defineProperty(n,s,r.get?r:{enumerable:!0,get:function(){return t[s]}})}),n}var FE={exports:{}};function pO(t){throw new Error('Could not dynamically require "'+t+'". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.')}var ru={exports:{}};const gO={},_O=Object.freeze(Object.defineProperty({__proto__:null,default:gO},Symbol.toStringTag,{value:"Module"})),mO=fO(_O);var d_;function yO(){return d_||(d_=1,function(t,e){(function(n,s){t.exports=s()})(Pi,function(){var n=n||function(s,r){var i;if(typeof window<"u"&&window.crypto&&(i=window.crypto),typeof self<"u"&&self.crypto&&(i=self.crypto),typeof globalThis<"u"&&globalThis.crypto&&(i=globalThis.crypto),!i&&typeof window<"u"&&window.msCrypto&&(i=window.msCrypto),!i&&typeof Pi<"u"&&Pi.crypto&&(i=Pi.crypto),!i&&typeof pO=="function")try{i=mO}catch{}var o=function(){if(i){if(typeof i.getRandomValues=="function")try{return i.getRandomValues(new Uint32Array(1))[0]}catch{}if(typeof i.randomBytes=="function")try{return i.randomBytes(4).readInt32LE()}catch{}}throw new Error("Native crypto module could not be used to get secure random number.")},a=Object.create||function(){function v(){}return function(y){var w;return v.prototype=y,w=new v,v.prototype=null,w}}(),l={},c=l.lib={},u=c.Base=function(){return{extend:function(v){var y=a(this);return v&&y.mixIn(v),(!y.hasOwnProperty("init")||this.init===y.init)&&(y.init=function(){y.$super.init.apply(this,arguments)}),y.init.prototype=y,y.$super=this,y},create:function(){var v=this.extend();return v.init.apply(v,arguments),v},init:function(){},mixIn:function(v){for(var y in v)v.hasOwnProperty(y)&&(this[y]=v[y]);v.hasOwnProperty("toString")&&(this.toString=v.toString)},clone:function(){return this.init.prototype.extend(this)}}}(),h=c.WordArray=u.extend({init:function(v,y){v=this.words=v||[],y!=r?this.sigBytes=y:this.sigBytes=v.length*4},toString:function(v){return(v||p).stringify(this)},concat:function(v){var y=this.words,w=v.words,U=this.sigBytes,Q=v.sigBytes;if(this.clamp(),U%4)for(var ie=0;ie<Q;ie++){var ce=w[ie>>>2]>>>24-ie%4*8&255;y[U+ie>>>2]|=ce<<24-(U+ie)%4*8}else for(var pe=0;pe<Q;pe+=4)y[U+pe>>>2]=w[pe>>>2];return this.sigBytes+=Q,this},clamp:function(){var v=this.words,y=this.sigBytes;v[y>>>2]&=4294967295<<32-y%4*8,v.length=s.ceil(y/4)},clone:function(){var v=u.clone.call(this);return v.words=this.words.slice(0),v},random:function(v){for(var y=[],w=0;w<v;w+=4)y.push(o());return new h.init(y,v)}}),d=l.enc={},p=d.Hex={stringify:function(v){for(var y=v.words,w=v.sigBytes,U=[],Q=0;Q<w;Q++){var ie=y[Q>>>2]>>>24-Q%4*8&255;U.push((ie>>>4).toString(16)),U.push((ie&15).toString(16))}return U.join("")},parse:function(v){for(var y=v.length,w=[],U=0;U<y;U+=2)w[U>>>3]|=parseInt(v.substr(U,2),16)<<24-U%8*4;return new h.init(w,y/2)}},m=d.Latin1={stringify:function(v){for(var y=v.words,w=v.sigBytes,U=[],Q=0;Q<w;Q++){var ie=y[Q>>>2]>>>24-Q%4*8&255;U.push(String.fromCharCode(ie))}return U.join("")},parse:function(v){for(var y=v.length,w=[],U=0;U<y;U++)w[U>>>2]|=(v.charCodeAt(U)&255)<<24-U%4*8;return new h.init(w,y)}},_=d.Utf8={stringify:function(v){try{return decodeURIComponent(escape(m.stringify(v)))}catch{throw new Error("Malformed UTF-8 data")}},parse:function(v){return m.parse(unescape(encodeURIComponent(v)))}},E=c.BufferedBlockAlgorithm=u.extend({reset:function(){this._data=new h.init,this._nDataBytes=0},_append:function(v){typeof v=="string"&&(v=_.parse(v)),this._data.concat(v),this._nDataBytes+=v.sigBytes},_process:function(v){var y,w=this._data,U=w.words,Q=w.sigBytes,ie=this.blockSize,ce=ie*4,pe=Q/ce;v?pe=s.ceil(pe):pe=s.max((pe|0)-this._minBufferSize,0);var Pe=pe*ie,$e=s.min(Pe*4,Q);if(Pe){for(var Ze=0;Ze<Pe;Ze+=ie)this._doProcessBlock(U,Ze);y=U.splice(0,Pe),w.sigBytes-=$e}return new h.init(y,$e)},clone:function(){var v=u.clone.call(this);return v._data=this._data.clone(),v},_minBufferSize:0});c.Hasher=E.extend({cfg:u.extend(),init:function(v){this.cfg=this.cfg.extend(v),this.reset()},reset:function(){E.reset.call(this),this._doReset()},update:function(v){return this._append(v),this._process(),this},finalize:function(v){v&&this._append(v);var y=this._doFinalize();return y},blockSize:16,_createHelper:function(v){return function(y,w){return new v.init(w).finalize(y)}},_createHmacHelper:function(v){return function(y,w){return new F.HMAC.init(v,w).finalize(y)}}});var F=l.algo={};return l}(Math);return n})}(ru)),ru.exports}(function(t,e){(function(n,s){t.exports=s(yO())})(Pi,function(n){return function(s){var r=n,i=r.lib,o=i.WordArray,a=i.Hasher,l=r.algo,c=[],u=[];(function(){function p(F){for(var v=s.sqrt(F),y=2;y<=v;y++)if(!(F%y))return!1;return!0}function m(F){return(F-(F|0))*4294967296|0}for(var _=2,E=0;E<64;)p(_)&&(E<8&&(c[E]=m(s.pow(_,1/2))),u[E]=m(s.pow(_,1/3)),E++),_++})();var h=[],d=l.SHA256=a.extend({_doReset:function(){this._hash=new o.init(c.slice(0))},_doProcessBlock:function(p,m){for(var _=this._hash.words,E=_[0],F=_[1],v=_[2],y=_[3],w=_[4],U=_[5],Q=_[6],ie=_[7],ce=0;ce<64;ce++){if(ce<16)h[ce]=p[m+ce]|0;else{var pe=h[ce-15],Pe=(pe<<25|pe>>>7)^(pe<<14|pe>>>18)^pe>>>3,$e=h[ce-2],Ze=($e<<15|$e>>>17)^($e<<13|$e>>>19)^$e>>>10;h[ce]=Pe+h[ce-7]+Ze+h[ce-16]}var Pt=w&U^~w&Q,et=E&F^E&v^F&v,Ge=(E<<30|E>>>2)^(E<<19|E>>>13)^(E<<10|E>>>22),Ae=(w<<26|w>>>6)^(w<<21|w>>>11)^(w<<7|w>>>25),G=ie+Ae+Pt+u[ce]+h[ce],me=Ge+et;ie=Q,Q=U,U=w,w=y+G|0,y=v,v=F,F=E,E=G+me|0}_[0]=_[0]+E|0,_[1]=_[1]+F|0,_[2]=_[2]+v|0,_[3]=_[3]+y|0,_[4]=_[4]+w|0,_[5]=_[5]+U|0,_[6]=_[6]+Q|0,_[7]=_[7]+ie|0},_doFinalize:function(){var p=this._data,m=p.words,_=this._nDataBytes*8,E=p.sigBytes*8;return m[E>>>5]|=128<<24-E%32,m[(E+64>>>9<<4)+14]=s.floor(_/4294967296),m[(E+64>>>9<<4)+15]=_,p.sigBytes=m.length*4,this._process(),this._hash},clone:function(){var p=a.clone.call(this);return p._hash=this._hash.clone(),p}});r.SHA256=a._createHelper(d),r.HmacSHA256=a._createHmacHelper(d)}(Math),n.SHA256})})(FE);var vO=FE.exports;const wO=dO(vO);var iu=typeof navigator<"u"?navigator.userAgent.toLowerCase().indexOf("firefox")>0:!1;function ou(t,e,n,s){t.addEventListener?t.addEventListener(e,n,s):t.attachEvent&&t.attachEvent("on".concat(e),function(){n(window.event)})}function UE(t,e){for(var n=e.slice(0,e.length-1),s=0;s<n.length;s++)n[s]=t[n[s].toLowerCase()];return n}function BE(t){typeof t!="string"&&(t=""),t=t.replace(/\s/g,"");for(var e=t.split(","),n=e.lastIndexOf("");n>=0;)e[n-1]+=",",e.splice(n,1),n=e.lastIndexOf("");return e}function EO(t,e){for(var n=t.length>=e.length?t:e,s=t.length>=e.length?e:t,r=!0,i=0;i<n.length;i++)s.indexOf(n[i])===-1&&(r=!1);return r}var vo={backspace:8,"⌫":8,tab:9,clear:12,enter:13,"↩":13,return:13,esc:27,escape:27,space:32,left:37,up:38,right:39,down:40,del:46,delete:46,ins:45,insert:45,home:36,end:35,pageup:33,pagedown:34,capslock:20,num_0:96,num_1:97,num_2:98,num_3:99,num_4:100,num_5:101,num_6:102,num_7:103,num_8:104,num_9:105,num_multiply:106,num_add:107,num_enter:108,num_subtract:109,num_decimal:110,num_divide:111,"⇪":20,",":188,".":190,"/":191,"`":192,"-":iu?173:189,"=":iu?61:187,";":iu?59:186,"'":222,"[":219,"]":221,"\\":220},Ln={"⇧":16,shift:16,"⌥":18,alt:18,option:18,"⌃":17,ctrl:17,control:17,"⌘":91,cmd:91,command:91},wh={16:"shiftKey",18:"altKey",17:"ctrlKey",91:"metaKey",shiftKey:16,ctrlKey:17,altKey:18,metaKey:91},ut={16:!1,18:!1,17:!1,91:!1},We={};for(var ma=1;ma<20;ma++)vo["f".concat(ma)]=111+ma;var ke=[],f_=!1,$E="all",jE=[],Ko=function(e){return vo[e.toLowerCase()]||Ln[e.toLowerCase()]||e.toUpperCase().charCodeAt(0)},TO=function(e){return Object.keys(vo).find(function(n){return vo[n]===e})},IO=function(e){return Object.keys(Ln).find(function(n){return Ln[n]===e})};function WE(t){$E=t||"all"}function wo(){return $E||"all"}function AO(){return ke.slice(0)}function CO(){return ke.map(function(t){return TO(t)||IO(t)||String.fromCharCode(t)})}function bO(){var t=[];return Object.keys(We).forEach(function(e){We[e].forEach(function(n){var s=n.key,r=n.scope,i=n.mods,o=n.shortcut;t.push({scope:r,shortcut:o,mods:i,keys:s.split("+").map(function(a){return Ko(a)})})})}),t}function RO(t){var e=t.target||t.srcElement,n=e.tagName,s=!0;return(e.isContentEditable||(n==="INPUT"||n==="TEXTAREA"||n==="SELECT")&&!e.readOnly)&&(s=!1),s}function SO(t){return typeof t=="string"&&(t=Ko(t)),ke.indexOf(t)!==-1}function kO(t,e){var n,s;t||(t=wo());for(var r in We)if(Object.prototype.hasOwnProperty.call(We,r))for(n=We[r],s=0;s<n.length;)n[s].scope===t?n.splice(s,1):s++;wo()===t&&WE(e||"all")}function PO(t){var e=t.keyCode||t.which||t.charCode,n=ke.indexOf(e);if(n>=0&&ke.splice(n,1),t.key&&t.key.toLowerCase()==="meta"&&ke.splice(0,ke.length),(e===93||e===224)&&(e=91),e in ut){ut[e]=!1;for(var s in Ln)Ln[s]===e&&(Ue[s]=!1)}}function NO(t){if(typeof t>"u")Object.keys(We).forEach(function(o){return delete We[o]});else if(Array.isArray(t))t.forEach(function(o){o.key&&au(o)});else if(typeof t=="object")t.key&&au(t);else if(typeof t=="string"){for(var e=arguments.length,n=new Array(e>1?e-1:0),s=1;s<e;s++)n[s-1]=arguments[s];var r=n[0],i=n[1];typeof r=="function"&&(i=r,r=""),au({key:t,scope:r,method:i,splitKey:"+"})}}var au=function(e){var n=e.key,s=e.scope,r=e.method,i=e.splitKey,o=i===void 0?"+":i,a=BE(n);a.forEach(function(l){var c=l.split(o),u=c.length,h=c[u-1],d=h==="*"?"*":Ko(h);if(We[d]){s||(s=wo());var p=u>1?UE(Ln,c):[];We[d]=We[d].filter(function(m){var _=r?m.method===r:!0;return!(_&&m.scope===s&&EO(m.mods,p))})}})};function p_(t,e,n,s){if(e.element===s){var r;if(e.scope===n||e.scope==="all"){r=e.mods.length>0;for(var i in ut)Object.prototype.hasOwnProperty.call(ut,i)&&(!ut[i]&&e.mods.indexOf(+i)>-1||ut[i]&&e.mods.indexOf(+i)===-1)&&(r=!1);(e.mods.length===0&&!ut[16]&&!ut[18]&&!ut[17]&&!ut[91]||r||e.shortcut==="*")&&(e.keys=[],e.keys=e.keys.concat(ke),e.method(t,e)===!1&&(t.preventDefault?t.preventDefault():t.returnValue=!1,t.stopPropagation&&t.stopPropagation(),t.cancelBubble&&(t.cancelBubble=!0)))}}}function g_(t,e){var n=We["*"],s=t.keyCode||t.which||t.charCode;if(Ue.filter.call(this,t)){if((s===93||s===224)&&(s=91),ke.indexOf(s)===-1&&s!==229&&ke.push(s),["ctrlKey","altKey","shiftKey","metaKey"].forEach(function(m){var _=wh[m];t[m]&&ke.indexOf(_)===-1?ke.push(_):!t[m]&&ke.indexOf(_)>-1?ke.splice(ke.indexOf(_),1):m==="metaKey"&&t[m]&&ke.length===3&&(t.ctrlKey||t.shiftKey||t.altKey||(ke=ke.slice(ke.indexOf(_))))}),s in ut){ut[s]=!0;for(var r in Ln)Ln[r]===s&&(Ue[r]=!0);if(!n)return}for(var i in ut)Object.prototype.hasOwnProperty.call(ut,i)&&(ut[i]=t[wh[i]]);t.getModifierState&&!(t.altKey&&!t.ctrlKey)&&t.getModifierState("AltGraph")&&(ke.indexOf(17)===-1&&ke.push(17),ke.indexOf(18)===-1&&ke.push(18),ut[17]=!0,ut[18]=!0);var o=wo();if(n)for(var a=0;a<n.length;a++)n[a].scope===o&&(t.type==="keydown"&&n[a].keydown||t.type==="keyup"&&n[a].keyup)&&p_(t,n[a],o,e);if(s in We){for(var l=0;l<We[s].length;l++)if((t.type==="keydown"&&We[s][l].keydown||t.type==="keyup"&&We[s][l].keyup)&&We[s][l].key){for(var c=We[s][l],u=c.splitKey,h=c.key.split(u),d=[],p=0;p<h.length;p++)d.push(Ko(h[p]));d.sort().join("")===ke.sort().join("")&&p_(t,c,o,e)}}}}function xO(t){return jE.indexOf(t)>-1}function Ue(t,e,n){ke=[];var s=BE(t),r=[],i="all",o=document,a=0,l=!1,c=!0,u="+",h=!1;for(n===void 0&&typeof e=="function"&&(n=e),Object.prototype.toString.call(e)==="[object Object]"&&(e.scope&&(i=e.scope),e.element&&(o=e.element),e.keyup&&(l=e.keyup),e.keydown!==void 0&&(c=e.keydown),e.capture!==void 0&&(h=e.capture),typeof e.splitKey=="string"&&(u=e.splitKey)),typeof e=="string"&&(i=e);a<s.length;a++)t=s[a].split(u),r=[],t.length>1&&(r=UE(Ln,t)),t=t[t.length-1],t=t==="*"?"*":Ko(t),t in We||(We[t]=[]),We[t].push({keyup:l,keydown:c,scope:i,mods:r,shortcut:s[a],method:n,key:s[a],splitKey:u,element:o});typeof o<"u"&&!xO(o)&&window&&(jE.push(o),ou(o,"keydown",function(d){g_(d,o)},h),f_||(f_=!0,ou(window,"focus",function(){ke=[]},h)),ou(o,"keyup",function(d){g_(d,o),PO(d)},h))}function DO(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"all";Object.keys(We).forEach(function(n){var s=We[n].filter(function(r){return r.scope===e&&r.shortcut===t});s.forEach(function(r){r&&r.method&&r.method()})})}var lu={getPressedKeyString:CO,setScope:WE,getScope:wo,deleteScope:kO,getPressedKeyCodes:AO,getAllKeyCodes:bO,isPressed:SO,filter:RO,trigger:DO,unbind:NO,keyMap:vo,modifier:Ln,modifierMap:wh};for(var cu in lu)Object.prototype.hasOwnProperty.call(lu,cu)&&(Ue[cu]=lu[cu]);if(typeof window<"u"){var OO=window.hotkeys;Ue.noConflict=function(t){return t&&window.hotkeys===Ue&&(window.hotkeys=OO),Ue},window.hotkeys=Ue}const MO={class:"text-center mt-8"},LO={class:"text-black text-xs"},VO=A("br",null,null,-1),FO={key:0,class:"mt-5 text-center overflow-auto whitespace-nowrap pb-3"},UO={class:"inline-block mb-3"},BO=["onClick","onDblclick"],$O={key:1,class:"mt-10"},jO={class:"flex justify-center text-center"},WO={class:"mr-10 text-lg"},HO={class:"text-lg"},qO={class:"flex justify-center"},KO={class:"mt-2"},zO={key:2,class:"fixed top-0 bottom-0 left-0 right-0 bg-gray-600 bg-opacity-50 z-50"},GO={class:"absolute left-1/2 -translate-x-1/2 top-1/3 inline-block text-center p-3 rounded-md shadow-lg shadow-black bg-gradient-to-tr from-cyan-700 to-zinc-400"},QO=A("p",null,"Front",-1),YO=A("hr",{class:"border-2 border-gray-400 rounded mt-4 mb-4"},null,-1),XO=A("p",null,"Back",-1),JO=A("hr",{class:"border-2 border-gray-400 rounded mt-4 mb-4"},null,-1),ZO={class:"bg-gray-500 p-3 shadow shadow-black rounded-md"},eM=A("label",{for:"reversedCheck",class:"text-lg text-center text-white mr-3"},"Create Reversed",-1),tM=A("br",null,null,-1),nM=A("label",{for:"typeAnsCheck",class:"text-lg text-center text-white mr-3"},"Type Answer",-1),sM=A("hr",{class:"border-2 border-gray-400 rounded mt-4 mb-4"},null,-1),rM={key:3,class:"fixed top-0 bottom-0 left-0 right-0 bg-gray-600 bg-opacity-50 z-50"},iM={class:"absolute left-1/2 top-1/3 -translate-x-1/2 bg-gradient-to-r from-teal-500 to-teal-700 p-3 rounded-md inline-block text-center shadow-lg shadow-black"},oM=A("img",{src:Bh,alt:"close"},null,-1),aM=[oM],lM=A("br",null,null,-1),cM=A("br",null,null,-1),uM=A("br",null,null,-1),hM={key:4,class:"fixed top-0 bottom-0 left-0 right-0 bg-gray-600 bg-opacity-50 z-50"},dM={class:"absolute left-1/2 top-1/3 -translate-x-1/2 bg-gradient-to-r from-orange-300 to-orange-500 p-3 rounded-md inline-block text-center shadow-lg shadow-black"},fM=A("img",{src:Bh,alt:"close"},null,-1),pM=[fM],gM=A("br",null,null,-1),_M=A("br",null,null,-1),mM=A("br",null,null,-1),yM=A("br",null,null,-1),vM={key:5,class:"fixed top-0 bottom-0 left-0 right-0 bg-gray-600 bg-opacity-50 z-50"},wM={class:"absolute left-1/2 top-1/3 -translate-x-1/2 bg-gradient-to-r from-green-900 to-blue-900 p-3 rounded-md inline-block text-center shadow-lg shadow-black"},EM=A("br",null,null,-1),TM={key:6,class:"fixed top-0 bottom-0 left-0 right-0 bg-gray-600 bg-opacity-50 z-50"},IM={class:"text-white text-2xl mx-8 my-4 break-all max-h-[200px] overflow-auto"},AM={key:0},CM=A("hr",{class:"border-2 border-white rounded-full mx-3"},null,-1),bM={class:"text-white text-2xl mx-8 my-4 break-all max-h-[200px] overflow-auto"},RM=A("br",null,null,-1),SM={key:0,class:"mt-8"},kM=A("img",{height:"65",width:"65",src:Bh,alt:"No"},null,-1),PM=[kM],NM=A("img",{height:"65",width:"65",src:b0,alt:"Yes"},null,-1),xM=[NM],DM={key:1},OM=A("hr",{class:"border-2 border-white rounded-full mx-3"},null,-1),MM=A("br",null,null,-1),LM={key:7,class:"fixed top-0 bottom-0 left-0 right-0 bg-gray-600 bg-opacity-50 z-50"},VM={class:"absolute left-1/2 top-[20%] -translate-x-1/2 bg-gradient-to-r from-gray-600 to-gray-800 p-3 rounded-md inline-block text-center shadow-lg shadow-black"},FM=A("p",{class:"text-white text-xl mb-1"},"Email",-1),UM={class:"bg-gray-500 p-2 rounded text-white text-xl text-center shadow shadow-black max-w-[225px] mb-3"},BM=A("p",{class:"text-white text-xl mb-1"},"Username",-1),$M=A("p",{class:"text-white text-xl mb-1"},"Time Multiplier",-1),jM=A("p",{class:"text-white text-xl mb-1"},"Time Duration",-1),WM={class:"bg-pink-800 p-2 rounded text-white text-xl text-center shadow shadow-black mb-3"},HM=A("p",{class:"text-white text-xl mb-1"},"New Cards per Day",-1),qM={class:"mb-3 bg-orange-500 p-2 rounded-md shadow shadow-black"},KM=A("label",{for:"vacationSetting",class:"text-lg text-center text-white mr-3"},"Vacation Mode",-1),zM=A("br",null,null,-1),GM={key:8,class:"fixed top-0 bottom-0 left-0 right-0 bg-gray-600 bg-opacity-50 z-50"},QM={class:"absolute left-1/2 top-[20%] -translate-x-1/2 text-center"},YM={class:"bg-gradient-to-r from-green-900 to-blue-900 p-3 rounded-md inline-block text-center shadow-lg shadow-black"},XM=A("br",null,null,-1),JM=A("br",null,null,-1),ZM=A("br",null,null,-1),eL=A("br",null,null,-1),tL={class:"mt-14 bg-gradient-to-r from-green-900 to-blue-900 py-3 px-8 rounded-md inline-block text-center shadow-lg shadow-black max-h-64 max-w-[80vw] overflow-auto"},nL=A("p",{class:"text-white text-xl mb-3"},"Cards",-1),sL={class:"whitespace-nowrap mb-6"},rL=["onUpdate:modelValue"],iL=["onUpdate:modelValue"],oL=["for"],aL=["onUpdate:modelValue","id"],lL={class:"bg-emerald-900 p-2 rounded-md text-center text-white shadow shadow-black mr-5 inline"},cL={class:"bg-yellow-900 p-2 rounded-md text-center text-white shadow shadow-black mr-5 inline"},uL=["onClick"],hL={key:9,class:"fixed top-0 bottom-0 left-0 right-0 bg-gray-600 bg-opacity-50 z-50"},dL={class:"bg-gradient-to-br from-orange-600 to-green-400 p-3 rounded-md shadow-lg shadow-black fixed left-1/2 -translate-x-1/2 top-0 max-h-screen overflow-auto text-center"},fL=jI('<p class="text-2xl">GUIDE</p><p class="text-sm mb-5">App version: 0.4.0</p><p class="text-xl">Adding Decks and Cards</p><p class="mb-5">Select a deck by clicking it. Click &#39;New Deck&#39; to create a new deck. <b>If your decks aren&#39;t visible for some reason, press the &#39;Load Decks&#39; button in the top left corner.</b> Add new cards by clicking the &#39;New Card&#39; button. Input the front and back values and press &#39;Create&#39; or the &#39;enter&#39; key. Selecting &#39;Create Reversed&#39; will create another card with the front and back values swapped. Selecting &#39;Type Answer&#39; will require you to input the back value when reviewing. If &#39;Type Answer&#39; is selected, anything inside &#39;[]&#39; will not be required to input.</p><p class="text-xl">Reviews</p><p class="mb-5"><b>Clicking the &#39;Review&#39; button will allow you to review your cards.</b> The amount of reviews for the day is visible above the &#39;Review&#39; button When reviewing a card, try to guess the answer (the other side of the card). Click the card or press the &#39;space bar&#39; key to show the other side. If you answered correctly press the &#39;correct&#39; button (blue) or the &#39;space bar&#39; key. If you answered wrong press the &#39;wrong&#39; button (red) or the &#39;c&#39; key. If the card is a &#39;type answer&#39; card, type in the answer and press the &#39;enter&#39; key or press the &#39;Check&#39; button. The correct answer will then be visible. Click the card or press either the &#39;enter&#39; or &#39;space bar&#39; key to continue. Repeat until the panel closes. <b>Come back the next day to review more cards.</b> By answering correctly multiple times in a row you will see the card less frequently. Answering a card wrong will make it&#39;s &#39;streak&#39; reset.</p><p class="text-xl">Review Calculation and Settings</p><p class="mb-5"><b>Settings can be opened by pressing on the username.</b> Card reviews are calculated as follows: (time_multiplier^success_streak)*time_duration. Time multiplier and <del>time duration</del> can be changed in the settings. <b>The amount of new cards per day (cards you created) can also be changed in the settings.</b> The username can also be changed. If you will not be able to access SpaRe for a while, you can enable &#39;Vacation Mode&#39;. When you disable &#39;Vacation Mode&#39;, all your cards will be changed to how they were when you enable it. <u><b>WHEN &#39;VACATION MODE&#39; IS ACTIVE, DO NOT INTERACT WITH THE APP AT ALL (apart from disabling &#39;Vacation Mode&#39;).</b></u> The default values are 1.5 for time multiplier and 24 hours for time duration.</p><p class="text-xl">Editing and Deleting Cards and Decks</p><p class="mb-5"><b>Double clicking on a deck will open the deck options where you can edit the deck and its cards.</b> In the options, the card &#39;streak&#39; and the cards &#39;next review&#39; date are visible.</p><p class="text-xl">Notes</p><p class="mb-14">All decks, cards and settings are stored in the cloud (Firebase), so they are synced between devices. The app works on both desktop and mobile. <b>Remember to verify your email by clicking the link sent to your inbox.</b></p>',12),pL={__name:"App",setup(t){const e=cO(),n=ge(!1),s=ge(!1),r=ge(!1),i=ge(!1),o=ge(!1),a=ge(""),l=ge(0),c=ge(!1),u=ge(""),h=ge(""),d=ge(""),p=ge(""),m=ge(""),_=ge(""),E=ge(!1),F=ge(!1),v=ge(!1),y=ge([]),w=ge(0),U=ge(!1);var Q=!1;const ie=ge(""),ce=ge(!1),pe=ge(1.5),Pe=ge(24),$e=ge(20),Ze=ge(!1),Pt=ge(0),et=QN(),Ge=ge([]),Ae=ge([]),G=ge(""),me=ge(0),en=ge(0);Ue("space","review",function(D,I){D.preventDefault(),Q=!1,C()}),Ue("space","yes_no",function(D,I){D.preventDefault(),N(!0)}),Ue("c","yes_no",function(D,I){D.preventDefault(),N(!1)}),Ue("space","check_type_ans",function(D,I){D.preventDefault(),V()}),Ue("enter","check_type_ans",function(D,I){D.preventDefault(),V()}),window.onload=async function(){const D=ne();await new Promise(Z=>setTimeout(Z,500)),D.currentUser!=null&&gt(D);const I=new URLSearchParams(window.location.search);if(I.get("action")=="add"){console.log(I.get("front")),console.log(I.get("back")),console.log(I.get("deck"));const Z=I.get("front"),S=I.get("back"),se=I.get("deck"),Se=I.get("type_answer");Z!=null&&S!=null&&se!=null?D.currentUser!=null?(await fr(Gt(e,"users/"+D.currentUser.uid+"/decks/"+se+"/cards/"),{front:Z,back:S,streak:-1,next_review:Date.now(),type_answer:Se==="true"}),console.log("Card Added"),console.log("Redirecting back to root"),window.location.href=window.location.href.split("?")[0]):alert("Please sign in."):alert("Please give all parameters.")}};function mn(D,I){return Math.floor(Math.random()*(I-D))+D}async function gt(D){Ge.value=[],(await dr(Gt(e,"users/"+D.currentUser.uid+"/decks"))).forEach(S=>{Ge.value.push({name:S.data().name,color:Nt(S.data().name),id:S.id})});const Z=await ua(tt(e,"users/"+D.currentUser.uid));console.log(Z.data().time_multiplier,Z.data().time_duration,Z.data().vacation_mode),pe.value=Z.data().time_multiplier,Pe.value=Z.data().time_duration,$e.value=Z.data().new_cards,Z.data().vacation_mode!==void 0?(Pt.value=Z.data().vacation_mode,Pt.value!=0?Ze.value=!0:Ze.value=!1):(Pt.value=0,Ze.value=!1)}function Nt(D){return"#"+wO(D).toString().substring(0,6)}async function zo(){console.log(et.value.displayName,pe.value,Pe.value,$e.value,Ze.value),Ze.value?Pt.value=Date.now():(Pt.value!==0&&(console.log("Disabled vacation mode"),await wc()),Pt.value=0),console.log(Pt),vn(tt(e,"users/"+ne().currentUser.uid),{new_cards:$e.value,time_multiplier:pe.value,vacation_mode:Pt.value}),yp(ne().currentUser,{displayName:et.value.displayName}).catch(D=>{console.log(D)})}async function wc(){const D=await ua(tt(e,"users/"+ne().currentUser.uid)),I=Date.now()-D.data().vacation_mode;console.log(D.data().vacation_mode,Date.now(),I),(await dr(Gt(e,"users/"+ne().currentUser.uid+"/decks"))).forEach(async S=>{(await dr(Gt(e,"users/"+ne().currentUser.uid+"/decks/"+S.id+"/cards"))).forEach(Se=>{vn(tt(e,"users/"+ne().currentUser.uid+"/decks/"+S.id+"/cards/"+Se.id),{next_review:Se.data().next_review+I})})})}function Ec(D){D.code=="Enter"&&ci()}function tn(D){D.code=="Enter"&&x()}function cr(D){D.code=="Enter"&&j()}function ci(){G.value!=""?(F.value?(fr(Gt(e,"users/"+ne().currentUser.uid+"/decks/"+G.value+"/cards/"),{front:m.value,back:_.value,streak:-1,next_review:Date.now(),type_answer:!0}),console.log("card created")):(fr(Gt(e,"users/"+ne().currentUser.uid+"/decks/"+G.value+"/cards/"),{front:m.value,back:_.value,streak:-1,next_review:Date.now()}),console.log("card created")),E.value&&(F.value?(fr(Gt(e,"users/"+ne().currentUser.uid+"/decks/"+G.value+"/cards/"),{front:_.value,back:m.value,streak:-1,next_review:Date.now(),type_answer:!0}),console.log("reverse created")):(fr(Gt(e,"users/"+ne().currentUser.uid+"/decks/"+G.value+"/cards/"),{front:_.value,back:m.value,streak:-1,next_review:Date.now()}),console.log("reverse created")))):alert("Please select a deck first."),m.value="",_.value="",document.getElementById("frontTextField").focus()}function ts(D,I){confirm("Are you sure you want to delete this card?")?(Eg(tt(e,"users/"+ne().currentUser.uid+"/decks/"+a.value+"/cards/"+D)),Ae.value.splice(I,1),console.log("Card Deleted")):console.log("Not deleted")}function ui(){fr(Gt(e,"users/"+ne().currentUser.uid+"/decks"),{name:p.value,new_cards_today:$e.value,last_update_nct:0}),gt(ne()),i.value=!1}async function hi(D){G.value=D,console.log(G.value);const I=await dr(Gt(e,"users/"+ne().currentUser.uid+"/decks/"+G.value+"/cards"));me.value=0,en.value=0,I.forEach(Z=>{let S=Date.parse(new Date(Z.data().next_review).toISOString().split("T")[0]);Date.parse(new Date(Date.now()).toISOString().split("T")[0])>=S&&(Z.data().streak!=-1?me.value+=1:en.value+=1)})}async function f(D,I){a.value=D,l.value=I,Ae.value=[],(await dr(Gt(e,"users/"+ne().currentUser.uid+"/decks/"+a.value+"/cards"))).forEach(S=>{console.log(S.id,"=>",S.data()),Ae.value.push({front:S.data().front,back:S.data().back,streak:S.data().streak,next_review:S.data().next_review,id:S.id,type_answer:!!S.data().type_answer})}),console.log(Ae.value)}function g(){console.log(a.value,Ge.value[l.value].name,"update"),vn(tt(e,"users/"+ne().currentUser.uid+"/decks/"+a.value),{name:Ge.value[l.value].name});for(let D=0;D<Ae.value.length;D++)vn(tt(e,"users/"+ne().currentUser.uid+"/decks/"+a.value+"/cards/"+Ae.value[D].id),{front:Ae.value[D].front,back:Ae.value[D].back,type_answer:Ae.value[D].type_answer});a.value="",l.value=0}function T(){console.log(a.value,Ge.value[l.value].name,"delete");let D=prompt(`*Please read carefully*.

Deleting a deck will remove the deck, but the individual cards will NOT be deleted. If you want to delete the cards please do so BEFORE deleting the deck. To confirm you want to delete this deck by typing 'DELETE'`);D==null||D==""||D!="DELETE"?(a.value="",l.value=0):(Eg(tt(e,"users/"+ne().currentUser.uid+"/decks/"+a.value)),console.log("Deck Deleted"),a.value="",l.value=0,gt(ne()))}async function b(){v.value=!1,y.value=[];let D=[],I=(await ua(tt(e,"users/"+ne().currentUser.uid+"/decks/"+G.value))).data().new_cards_today;if(G.value!=""){const Z=await ua(tt(e,"users/"+ne().currentUser.uid+"/decks/"+G.value));Date.parse(new Date(Date.now()).toISOString().split("T")[0])>Date.parse(new Date(Z.data().last_update_nct).toISOString().split("T")[0])&&(vn(tt(e,"users/"+ne().currentUser.uid+"/decks/"+G.value),{new_cards_today:$e.value,last_update_nct:Date.now()}),I=$e.value),(await dr(Gt(e,"users/"+ne().currentUser.uid+"/decks/"+G.value+"/cards"))).forEach(se=>{console.log(se.id,"=>",se.data());let Se=Date.parse(new Date(se.data().next_review).toISOString().split("T")[0]);Date.parse(new Date(Date.now()).toISOString().split("T")[0])>=Se&&(se.data().streak!=-1?y.value.push({id:se.id,front:se.data().front,back:se.data().back,streak:se.data().streak,type_answer:!!se.data().type_answer}):(console.log("new"),D.push({id:se.id,front:se.data().front,back:se.data().back,streak:se.data().streak,next_review:se.data().next_review,type_answer:!!se.data().type_answer}))),console.log(y.value)})}else alert("Select a deck first.");console.log(D),D.sort((Z,S)=>Z.next_review-S.next_review),console.log(D);for(let Z=0;Z<D.length;Z++)I>0&&(y.value.push({id:D[Z].id,front:D[Z].front,back:D[Z].back,streak:0,type_answer:D[Z].type_answer}),vn(tt(e,"users/"+ne().currentUser.uid+"/decks/"+G.value+"/cards/"+D[Z].id),{streak:0}),I-=1);vn(tt(e,"users/"+ne().currentUser.uid+"/decks/"+G.value),{new_cards_today:I}),console.log(y.value),y.value.length!=0?(w.value=mn(0,y.value.length),v.value=!0,Ue.setScope("review"),y.value[w.value].type_answer&&O()):alert("No reviews on this deck at this time.")}function C(){y.value[w.value].type_answer==!1?Q==!0?Q=!1:(U.value=!0,Ue.setScope("yes_no"),Q=!0):ce.value?ce.value=!1:Ue.getScope()=="check_type_ans"?V():console.log("type answer")}function x(){console.log(ie.value+" : "+y.value[w.value].back),U.value=!0,Ue.setScope("check_type_ans")}function V(){const D=y.value[w.value].back.replace(/\[.*?\]/g,"");ie.value==D?(console.log("correct"),N(!0),ie.value=""):(console.log("incorrect"),N(!1),ie.value="")}function N(D){D==!0?(console.log("yes"),y.value[w.value].streak==0?(y.value[w.value].streak=.5,w.value=mn(0,y.value.length),U.value=!1,Ue.setScope("review")):y.value[w.value].streak==.5?(vn(tt(e,"users/"+ne().currentUser.uid+"/decks/"+G.value+"/cards/"+y.value[w.value].id),{next_review:Date.now()+Pe.value*36e5,streak:1}),y.value.splice(w.value,1),y.value.length!=0?(w.value=mn(0,y.value.length),U.value=!1,Ue.setScope("review")):(v.value=!1,U.value=!1,Ue.setScope("all"),alert("You're finished with reviews for now."))):(vn(tt(e,"users/"+ne().currentUser.uid+"/decks/"+G.value+"/cards/"+y.value[w.value].id),{next_review:Date.now()+Math.pow(pe.value,y.value[w.value].streak)*Pe.value*36e5,streak:y.value[w.value].streak+1}),y.value.splice(w.value,1),y.value.length!=0?(w.value=mn(0,y.value.length),U.value=!1,Ue.setScope("review")):(v.value=!1,U.value=!1,Ue.setScope("all"),alert("You're finished with reviews for now.")))):(console.log("no"),vn(tt(e,"users/"+ne().currentUser.uid+"/decks/"+G.value+"/cards/"+y.value[w.value].id),{next_review:Date.now(),streak:0}),y.value[w.value].streak=0,w.value=mn(0,y.value.length),U.value=!1,Ue.setScope("review")),y.value.length>0&&y.value[w.value].type_answer&&O()}async function O(){await new Promise(D=>setTimeout(D,100)),document.getElementById("typeAnswerTextField").focus()}function P(){eb(ne(),u.value,h.value).then(D=>{console.log("account created"),yp(ne().currentUser,{displayName:d.value}).catch(I=>{console.log(I)}),nb(ne().currentUser).then(I=>{alert("A verification email was sent to your address. Please verify your email. Unverified accounts will be deleted.")}).catch(I=>{console.log(I)}),wN(tt(e,"users",ne().currentUser.uid),{time_multiplier:1.5,time_duration:24,new_cards:20}),gt(ne()),r.value=!1,console.log("Sign Up successful"),alert("Please read The Guide to learn how to use the app. The Guide can also be shown anytime by pressing the button on the top right."),c.value=!0}).catch(D=>{console.log(D.code),alert(D.message)})}function j(){tb(ne(),u.value,h.value).then(D=>{console.log("signed in"),gt(ne()),s.value=!1,new URLSearchParams(window.location.search).has("action")&&window.location.reload()}).catch(D=>{console.log(D),alert(D.code)})}function B(){ib(ne()).then(()=>{alert("Signed out"),G.value="",Ge.value=[]}).catch(D=>{console.log(D)})}function H(){n.value==!0&&(n.value=!1)}function Y(){s.value==!0&&(s.value=!1)}function oe(){r.value==!0&&(r.value=!1)}function Ce(){i.value==!0&&(i.value=!1)}function ye(){o.value==!0&&(o.value=!1,zo())}function je(){a.value="",l.value=0,gt(ne())}function $t(){c.value==!0&&(c.value=!1)}return(D,I)=>{const Z=mI("click-away");return Te(),be(Qt,null,[A("div",MO,[Mt(et)!=null?(Te(),be("div",{key:0,onClick:I[0]||(I[0]=S=>{o.value=!0,gt(Mt(ne)())}),class:"bg-sky-900 p-3 rounded text-white shadow shadow-black inline-block mb-2"},[A("p",null,zt(Mt(et).displayName),1),A("p",LO,"This is a temporary text for showing account verification status: "+zt(Mt(et).emailVerified),1)])):ct("",!0),VO,Mt(et)==null?(Te(),be("button",{key:1,onClick:I[1]||(I[1]=S=>s.value=!0),class:"mr-5 bg-teal-500 px-3 py-2 rounded shadow shadow-black text-xl"},"Sign In")):ct("",!0),Mt(et)==null?(Te(),be("button",{key:2,onClick:I[2]||(I[2]=S=>r.value=!0),class:"bg-orange-300 px-3 py-2 rounded shadow shadow-black text-xl"},"Sign Up")):ct("",!0),Mt(et)!=null?(Te(),be("button",{key:3,onClick:B,class:"bg-rose-700 px-3 py-2 rounded shadow shadow-black text-xl"},"Sign Out")):ct("",!0)]),Mt(et)!=null?(Te(),be("div",FO,[(Te(!0),be(Qt,null,Of(Ge.value,(S,se)=>(Te(),be("div",UO,[A("button",{onClick:Se=>hi(S.id),onDblclick:Se=>f(S.id,se),style:Os({backgroundColor:S.color,borderWidth:G.value==S.id?"4px":"0px"}),class:"bg-white p-5 rounded shadow-md shadow-black text-lg mr-5 border-white"},zt(S.name),45,BO)]))),256)),A("button",{onClick:I[3]||(I[3]=S=>i.value=!0),class:"bg-gradient-to-r from-emerald-700 to-lime-600 p-5 rounded shadow-md shadow-black text-lg text-white"},"New Deck")])):ct("",!0),G.value!=""?(Te(),be("div",$O,[A("div",jO,[A("p",WO,[Tu("New Cards: "),A("b",null,zt(en.value),1)]),A("p",HO,[Tu("Reviews: "),A("b",null,zt(me.value),1)])]),A("div",qO,[A("div",KO,[A("button",{onClick:I[4]||(I[4]=S=>n.value=!0),class:"bg-gradient-to-tr from-orange-600 to-blue-500 rounded-lg p-3 text-2xl shadow-lg shadow-black text-white mr-5"},"New Card"),A("button",{onClick:b,class:"bg-gradient-to-r from-green-500 to-amber-800 p-3 rounded-lg text-2xl shadow-lg shadow-black text-white"},"Review")])])])):ct("",!0),n.value?(Te(),be("div",zO,[Ne((Te(),be("div",GO,[QO,Ne(A("input",{type:"text",id:"frontTextField","onUpdate:modelValue":I[5]||(I[5]=S=>m.value=S),class:"bg-gray-600 p-3 rounded shadow shadow-black text-lg text-center text-white"},null,512),[[xt,m.value]]),YO,XO,Ne(A("input",{type:"text","onUpdate:modelValue":I[6]||(I[6]=S=>_.value=S),onKeypress:I[7]||(I[7]=S=>Ec(S)),class:"bg-gray-600 p-3 rounded shadow shadow-black text-lg text-center text-white"},null,544),[[xt,_.value]]),JO,A("div",ZO,[eM,Ne(A("input",{"onUpdate:modelValue":I[8]||(I[8]=S=>E.value=S),type:"checkbox",id:"reversedCheck",class:"w-7 h-7 translate-y-1"},null,512),[[ea,E.value]]),tM,nM,Ne(A("input",{"onUpdate:modelValue":I[9]||(I[9]=S=>F.value=S),type:"checkbox",id:"typeAnsCheck",class:"w-7 h-7 translate-y-1"},null,512),[[ea,F.value]])]),sM,A("button",{onClick:I[10]||(I[10]=S=>n.value=!1),class:"bg-red-400 px-3 py-2 rounded text-white text-lg shadow-md shadow-gray-800 mr-10"},"Cancel"),A("button",{onClick:ci,class:"bg-green-600 px-3 py-2 rounded text-white text-lg shadow-md shadow-gray-800"},"Create")])),[[Z,H]])])):ct("",!0),s.value?(Te(),be("div",rM,[Ne((Te(),be("div",iM,[A("button",{onClick:I[11]||(I[11]=S=>s.value=!1),class:"scale-75"},aM),lM,Ne(A("input",{type:"text","onUpdate:modelValue":I[12]||(I[12]=S=>u.value=S),class:"bg-yellow-600 p-3 rounded mb-2 placeholder-white text-lg text-center shadow shadow-black",placeholder:"Email"},null,512),[[xt,u.value]]),cM,Ne(A("input",{type:"password","onUpdate:modelValue":I[13]||(I[13]=S=>h.value=S),onKeypress:I[14]||(I[14]=S=>cr(S)),class:"bg-yellow-600 p-3 rounded mb-2 placeholder-white text-lg text-center shadow shadow-black",placeholder:"Password"},null,544),[[xt,h.value]]),uM,A("button",{onClick:j,class:"bg-blue-400 p-3 rounded shadow shadow-black text-xl mt-3"},"Sign In")])),[[Z,Y]])])):ct("",!0),r.value?(Te(),be("div",hM,[Ne((Te(),be("div",dM,[A("button",{onClick:I[15]||(I[15]=S=>r.value=!1),class:"scale-75"},pM),gM,Ne(A("input",{type:"text","onUpdate:modelValue":I[16]||(I[16]=S=>d.value=S),class:"bg-purple-600 p-3 rounded mb-2 placeholder-white text-lg text-center shadow shadow-black",placeholder:"Username"},null,512),[[xt,d.value]]),_M,Ne(A("input",{type:"text","onUpdate:modelValue":I[17]||(I[17]=S=>u.value=S),class:"bg-purple-600 p-3 rounded mb-2 placeholder-white text-lg text-center shadow shadow-black",placeholder:"Email"},null,512),[[xt,u.value]]),mM,Ne(A("input",{type:"password","onUpdate:modelValue":I[18]||(I[18]=S=>h.value=S),class:"bg-purple-600 p-3 rounded mb-2 placeholder-white text-lg text-center shadow shadow-black",placeholder:"Password"},null,512),[[xt,h.value]]),yM,A("button",{onClick:P,class:"bg-red-400 p-3 rounded shadow shadow-black text-xl mt-3"},"Sign Up")])),[[Z,oe]])])):ct("",!0),i.value?(Te(),be("div",vM,[Ne((Te(),be("div",wM,[Ne(A("input",{type:"text","onUpdate:modelValue":I[19]||(I[19]=S=>p.value=S),style:Os({backgroundColor:Nt(p.value)}),class:"bg-indigo-400 p-3 rounded shadow shadow-black placeholder-white text-center text-lg",placeholder:"Name"},null,4),[[xt,p.value]]),EM,A("button",{onClick:I[20]||(I[20]=S=>i.value=!1),class:"mt-3 bg-orange-300 p-3 rounded shadow shadow-black text-xl mr-4"},"Cancel"),A("button",{onClick:ui,class:"mt-3 bg-rose-300 p-3 rounded shadow shadow-black text-xl"},"Create")])),[[Z,Ce]])])):ct("",!0),v.value?(Te(),be("div",TM,[A("button",{onClick:I[21]||(I[21]=S=>{v.value=!1,U.value=!1,Mt(Ue).setScope("all")}),class:"fixed left-1/2 -translate-x-1/2 top-[20%] bg-gray-700 p-3 rounded text-white"},"Cancel"),A("div",{onClick:C,class:"absolute left-1/2 -translate-x-1/2 top-1/3 bg-gradient-to-t from-pink-700 to-purple-800 p-10 rounded-lg shadow-xl shadow-black text-center min-w-[300px]"},[A("p",IM,zt(y.value[w.value].front),1),U.value==!0?(Te(),be("div",AM,[CM,A("p",bM,zt(y.value[w.value].back),1),RM,y.value[w.value].type_answer==!1?(Te(),be("div",SM,[A("button",{onClick:I[22]||(I[22]=S=>N(!1)),class:"bg-gradient-to-br from-pink-500 to-red-900 rounded-full p-1 shadow-md shadow-black mr-10"},PM),A("button",{onClick:I[23]||(I[23]=S=>N(!0)),class:"bg-gradient-to-br from-purple-500 to-blue-900 rounded-full p-1 shadow-md shadow-black"},xM)])):ct("",!0)])):ct("",!0),y.value[w.value].type_answer==!0&&U.value==!1?(Te(),be("div",DM,[OM,Ne(A("input",{id:"typeAnswerTextField","onUpdate:modelValue":I[24]||(I[24]=S=>ie.value=S),type:"text",placeholder:"Type Answer",onKeypress:I[25]||(I[25]=S=>tn(S)),class:"my-4 bg-gradient-to-r from-purple-500 to-pink-500 p-3 rounded-md shadow shadow-black placeholder-black text-white text-center text-2xl w-[250px]"},null,544),[[xt,ie.value]]),MM,A("button",{onClick:I[26]||(I[26]=S=>{ce.value=!0,x()}),class:"bg-gradient-to-br from-purple-500 to-blue-900 rounded-md p-3 text-xl text-white shadow-md shadow-black mt-2"},"Check")])):ct("",!0)])])):ct("",!0),o.value?(Te(),be("div",LM,[Ne((Te(),be("div",VM,[FM,A("p",UM,zt(Mt(et).email),1),BM,Ne(A("input",{type:"text",placeholder:"username","onUpdate:modelValue":I[27]||(I[27]=S=>Mt(et).displayName=S),class:"bg-gray-500 p-2 rounded text-white text-xl text-center shadow shadow-black placeholder-black max-w-[225px] mb-3"},null,512),[[xt,Mt(et).displayName]]),$M,Ne(A("input",{type:"text",placeholder:"multiplier","onUpdate:modelValue":I[28]||(I[28]=S=>pe.value=S),class:"bg-pink-800 p-2 rounded text-white text-xl text-center shadow shadow-black placeholder-black max-w-[140px] mb-3"},null,512),[[xt,pe.value,void 0,{number:!0}]]),jM,A("p",WM,zt(Pe.value)+"h",1),HM,Ne(A("input",{type:"text",placeholder:"new cards","onUpdate:modelValue":I[29]||(I[29]=S=>$e.value=S),class:"bg-indigo-800 p-2 rounded text-white text-xl text-center shadow shadow-black placeholder-black max-w-[140px] mb-3"},null,512),[[xt,$e.value,void 0,{number:!0}]]),A("div",qM,[KM,Ne(A("input",{type:"checkbox","onUpdate:modelValue":I[30]||(I[30]=S=>Ze.value=S),id:"vacationSetting",class:"w-7 h-7 translate-y-1"},null,512),[[ea,Ze.value]])]),zM,A("button",{onClick:ye,class:"bg-red-500 p-2 rounded-md text-lg shadow shadow-black mt-5"},"Close")])),[[Z,ye]])])):ct("",!0),a.value!=""?(Te(),be("div",GM,[A("div",QM,[A("div",YM,[Ne(A("input",{type:"text","onUpdate:modelValue":I[31]||(I[31]=S=>Ge.value[l.value].name=S),onInput:I[32]||(I[32]=S=>Ge.value[l.value].color=Nt(Ge.value[l.value].name)),style:Os({backgroundColor:Ge.value[l.value].color}),class:"bg-indigo-400 p-3 rounded shadow shadow-black placeholder-white text-center text-lg",placeholder:"Name"},null,36),[[xt,Ge.value[l.value].name]]),XM,A("p",{style:Os({backgroundColor:Nt(Ge.value[l.value].id)}),class:"mt-3 p-1 rounded text-black"},"Deck ID: "+zt(Ge.value[l.value].id),5),JM,A("button",{onClick:T,class:"mt-3 bg-red-700 p-3 rounded shadow shadow-black text-xl"},"DELETE"),ZM,A("button",{onClick:je,class:"mt-3 bg-orange-300 p-3 rounded shadow shadow-black text-xl mr-4"},"Cancel"),A("button",{onClick:g,class:"mt-3 bg-rose-300 p-3 rounded shadow shadow-black text-xl"},"Update")]),eL,A("div",tL,[nL,(Te(!0),be(Qt,null,Of(Ae.value,(S,se)=>(Te(),be("div",sL,[Ne(A("input",{type:"text",placeholder:"Card Front","onUpdate:modelValue":Se=>S.front=Se,class:"bg-rose-900 p-2 rounded-md text-center text-white placeholder-black shadow shadow-black mr-5 w-48 inline"},null,8,rL),[[xt,S.front]]),Ne(A("input",{type:"text",placeholder:"Card Back","onUpdate:modelValue":Se=>S.back=Se,class:"bg-purple-900 p-2 rounded-md text-center text-white placeholder-black shadow shadow-black mr-5 w-48 inline"},null,8,iL),[[xt,S.back]]),A("label",{for:"typeAnsSetting"+se,class:"text-center text-white mr-2"},"Type Answer",8,oL),Ne(A("input",{"onUpdate:modelValue":Se=>S.type_answer=Se,type:"checkbox",id:"typeAnsSetting"+se,class:"w-7 h-7 translate-y-1 mr-5"},null,8,aL),[[ea,S.type_answer]]),A("p",lL,zt(S.streak),1),A("p",cL,zt(new Date(S.next_review).toLocaleString()),1),A("button",{onClick:Se=>ts(S.id,se),class:"bg-red-900 p-2 rounded-md text-green-500 shadow shadow-black"},"Delete",8,uL)]))),256))])])])):ct("",!0),A("button",{onClick:I[33]||(I[33]=S=>gt(Mt(ne)())),class:"fixed left-0 top-0"},"Load Decks"),A("button",{onClick:I[34]||(I[34]=S=>c.value=!0),class:"fixed top-5 right-5 bg-gray-500 p-2 rounded-md shadow shadow-black"},"Guide"),c.value?(Te(),be("div",hL,[Ne((Te(),be("div",dL,[A("button",{onClick:I[35]||(I[35]=S=>c.value=!1),class:"bg-gray-500 p-2 rounded-md shadow shadow-black mb-5"},"Close"),fL])),[[Z,$t]])])):ct("",!0)],64)}}},HE=function(){return document.ontouchstart!==null?"click":"touchstart"},vl="__vue_click_away__",qE=function(t,e,n){KE(t);let s=n.context,r=e.value,i=!1;setTimeout(function(){i=!0},0),t[vl]=function(o){if((!t||!t.contains(o.target))&&r&&i&&typeof r=="function")return r.call(s,o)},document.addEventListener(HE(),t[vl],!1)},KE=function(t){document.removeEventListener(HE(),t[vl],!1),delete t[vl]},gL=function(t,e,n){e.value!==e.oldValue&&qE(t,e,n)},_L={install:function(t){t.directive("click-away",mL)}},mL={mounted:qE,updated:gL,unmounted:KE},yL={apiKey:"AIzaSyAGYqERiL1fj0l2m1ZmlkHFd5Vq8OiMubw",authDomain:"spare-a6401.firebaseapp.com",projectId:"spare-a6401",storageBucket:"spare-a6401.appspot.com",messagingSenderId:"277807224978",appId:"1:277807224978:web:6420ae19b4ca94e41c6e4b"},vL=Tm(yL);A0(pL).use(_L).use(hO,{firebaseApp:vL,modules:[uO()]}).mount("#app");
