(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();function rc(t,e){const n=Object.create(null),r=t.split(",");for(let s=0;s<r.length;s++)n[r[s]]=!0;return e?s=>!!n[s.toLowerCase()]:s=>!!n[s]}const we={},Er=[],Pt=()=>{},h_=()=>!1,d_=/^on[^a-z]/,Mo=t=>d_.test(t),sc=t=>t.startsWith("onUpdate:"),We=Object.assign,ic=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},f_=Object.prototype.hasOwnProperty,ae=(t,e)=>f_.call(t,e),H=Array.isArray,Ir=t=>ni(t)==="[object Map]",Hr=t=>ni(t)==="[object Set]",Ku=t=>ni(t)==="[object Date]",te=t=>typeof t=="function",Oe=t=>typeof t=="string",Ps=t=>typeof t=="symbol",Ae=t=>t!==null&&typeof t=="object",Yd=t=>Ae(t)&&te(t.then)&&te(t.catch),Jd=Object.prototype.toString,ni=t=>Jd.call(t),p_=t=>ni(t).slice(8,-1),Xd=t=>ni(t)==="[object Object]",oc=t=>Oe(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,Hi=rc(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Lo=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},g_=/-(\w)/g,zt=Lo(t=>t.replace(g_,(e,n)=>n?n.toUpperCase():"")),m_=/\B([A-Z])/g,zr=Lo(t=>t.replace(m_,"-$1").toLowerCase()),Uo=Lo(t=>t.charAt(0).toUpperCase()+t.slice(1)),xa=Lo(t=>t?`on${Uo(t)}`:""),Ss=(t,e)=>!Object.is(t,e),zi=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},io=(t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})},oo=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let Hu;const ul=()=>Hu||(Hu=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Gn(t){if(H(t)){const e={};for(let n=0;n<t.length;n++){const r=t[n],s=Oe(r)?w_(r):Gn(r);if(s)for(const i in s)e[i]=s[i]}return e}else{if(Oe(t))return t;if(Ae(t))return t}}const __=/;(?![^(]*\))/g,y_=/:([^]+)/,v_=/\/\*[^]*?\*\//g;function w_(t){const e={};return t.replace(v_,"").split(__).forEach(n=>{if(n){const r=n.split(y_);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function ac(t){let e="";if(Oe(t))e=t;else if(H(t))for(let n=0;n<t.length;n++){const r=ac(t[n]);r&&(e+=r+" ")}else if(Ae(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const E_="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",I_=rc(E_);function Zd(t){return!!t||t===""}function T_(t,e){if(t.length!==e.length)return!1;let n=!0;for(let r=0;n&&r<t.length;r++)n=ri(t[r],e[r]);return n}function ri(t,e){if(t===e)return!0;let n=Ku(t),r=Ku(e);if(n||r)return n&&r?t.getTime()===e.getTime():!1;if(n=Ps(t),r=Ps(e),n||r)return t===e;if(n=H(t),r=H(e),n||r)return n&&r?T_(t,e):!1;if(n=Ae(t),r=Ae(e),n||r){if(!n||!r)return!1;const s=Object.keys(t).length,i=Object.keys(e).length;if(s!==i)return!1;for(const o in t){const a=t.hasOwnProperty(o),l=e.hasOwnProperty(o);if(a&&!l||!a&&l||!ri(t[o],e[o]))return!1}}return String(t)===String(e)}function lc(t,e){return t.findIndex(n=>ri(n,e))}const _t=t=>Oe(t)?t:t==null?"":H(t)||Ae(t)&&(t.toString===Jd||!te(t.toString))?JSON.stringify(t,ef,2):String(t),ef=(t,e)=>e&&e.__v_isRef?ef(t,e.value):Ir(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[r,s])=>(n[`${r} =>`]=s,n),{})}:Hr(e)?{[`Set(${e.size})`]:[...e.values()]}:Ae(e)&&!H(e)&&!Xd(e)?String(e):e;let At;class A_{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this.parent=At,!e&&At&&(this.index=(At.scopes||(At.scopes=[])).push(this)-1)}get active(){return this._active}run(e){if(this._active){const n=At;try{return At=this,e()}finally{At=n}}}on(){At=this}off(){At=this.parent}stop(e){if(this._active){let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.scopes)for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0,this._active=!1}}}function b_(t,e=At){e&&e.active&&e.effects.push(t)}function R_(){return At}const cc=t=>{const e=new Set(t);return e.w=0,e.n=0,e},tf=t=>(t.w&bn)>0,nf=t=>(t.n&bn)>0,C_=({deps:t})=>{if(t.length)for(let e=0;e<t.length;e++)t[e].w|=bn},P_=t=>{const{deps:e}=t;if(e.length){let n=0;for(let r=0;r<e.length;r++){const s=e[r];tf(s)&&!nf(s)?s.delete(t):e[n++]=s,s.w&=~bn,s.n&=~bn}e.length=n}},hl=new WeakMap;let ls=0,bn=1;const dl=30;let bt;const Kn=Symbol(""),fl=Symbol("");class uc{constructor(e,n=null,r){this.fn=e,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,b_(this,r)}run(){if(!this.active)return this.fn();let e=bt,n=vn;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=bt,bt=this,vn=!0,bn=1<<++ls,ls<=dl?C_(this):zu(this),this.fn()}finally{ls<=dl&&P_(this),bn=1<<--ls,bt=this.parent,vn=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){bt===this?this.deferStop=!0:this.active&&(zu(this),this.onStop&&this.onStop(),this.active=!1)}}function zu(t){const{deps:e}=t;if(e.length){for(let n=0;n<e.length;n++)e[n].delete(t);e.length=0}}let vn=!0;const rf=[];function Wr(){rf.push(vn),vn=!1}function Gr(){const t=rf.pop();vn=t===void 0?!0:t}function pt(t,e,n){if(vn&&bt){let r=hl.get(t);r||hl.set(t,r=new Map);let s=r.get(n);s||r.set(n,s=cc()),sf(s)}}function sf(t,e){let n=!1;ls<=dl?nf(t)||(t.n|=bn,n=!tf(t)):n=!t.has(bt),n&&(t.add(bt),bt.deps.push(t))}function nn(t,e,n,r,s,i){const o=hl.get(t);if(!o)return;let a=[];if(e==="clear")a=[...o.values()];else if(n==="length"&&H(t)){const l=Number(r);o.forEach((c,u)=>{(u==="length"||u>=l)&&a.push(c)})}else switch(n!==void 0&&a.push(o.get(n)),e){case"add":H(t)?oc(n)&&a.push(o.get("length")):(a.push(o.get(Kn)),Ir(t)&&a.push(o.get(fl)));break;case"delete":H(t)||(a.push(o.get(Kn)),Ir(t)&&a.push(o.get(fl)));break;case"set":Ir(t)&&a.push(o.get(Kn));break}if(a.length===1)a[0]&&pl(a[0]);else{const l=[];for(const c of a)c&&l.push(...c);pl(cc(l))}}function pl(t,e){const n=H(t)?t:[...t];for(const r of n)r.computed&&Wu(r);for(const r of n)r.computed||Wu(r)}function Wu(t,e){(t!==bt||t.allowRecurse)&&(t.scheduler?t.scheduler():t.run())}const S_=rc("__proto__,__v_isRef,__isVue"),of=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(Ps)),k_=hc(),x_=hc(!1,!0),D_=hc(!0),Gu=N_();function N_(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const r=ce(this);for(let i=0,o=this.length;i<o;i++)pt(r,"get",i+"");const s=r[e](...n);return s===-1||s===!1?r[e](...n.map(ce)):s}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){Wr();const r=ce(this)[e].apply(this,n);return Gr(),r}}),t}function O_(t){const e=ce(this);return pt(e,"has",t),e.hasOwnProperty(t)}function hc(t=!1,e=!1){return function(r,s,i){if(s==="__v_isReactive")return!t;if(s==="__v_isReadonly")return t;if(s==="__v_isShallow")return e;if(s==="__v_raw"&&i===(t?e?Y_:hf:e?uf:cf).get(r))return r;const o=H(r);if(!t){if(o&&ae(Gu,s))return Reflect.get(Gu,s,i);if(s==="hasOwnProperty")return O_}const a=Reflect.get(r,s,i);return(Ps(s)?of.has(s):S_(s))||(t||pt(r,"get",s),e)?a:et(a)?o&&oc(s)?a:a.value:Ae(a)?t?df(a):pc(a):a}}const V_=af(),M_=af(!0);function af(t=!1){return function(n,r,s,i){let o=n[r];if(xr(o)&&et(o)&&!et(s))return!1;if(!t&&(!ao(s)&&!xr(s)&&(o=ce(o),s=ce(s)),!H(n)&&et(o)&&!et(s)))return o.value=s,!0;const a=H(n)&&oc(r)?Number(r)<n.length:ae(n,r),l=Reflect.set(n,r,s,i);return n===ce(i)&&(a?Ss(s,o)&&nn(n,"set",r,s):nn(n,"add",r,s)),l}}function L_(t,e){const n=ae(t,e);t[e];const r=Reflect.deleteProperty(t,e);return r&&n&&nn(t,"delete",e,void 0),r}function U_(t,e){const n=Reflect.has(t,e);return(!Ps(e)||!of.has(e))&&pt(t,"has",e),n}function F_(t){return pt(t,"iterate",H(t)?"length":Kn),Reflect.ownKeys(t)}const lf={get:k_,set:V_,deleteProperty:L_,has:U_,ownKeys:F_},$_={get:D_,set(t,e){return!0},deleteProperty(t,e){return!0}},B_=We({},lf,{get:x_,set:M_}),dc=t=>t,Fo=t=>Reflect.getPrototypeOf(t);function Si(t,e,n=!1,r=!1){t=t.__v_raw;const s=ce(t),i=ce(e);n||(e!==i&&pt(s,"get",e),pt(s,"get",i));const{has:o}=Fo(s),a=r?dc:n?mc:ks;if(o.call(s,e))return a(t.get(e));if(o.call(s,i))return a(t.get(i));t!==s&&t.get(e)}function ki(t,e=!1){const n=this.__v_raw,r=ce(n),s=ce(t);return e||(t!==s&&pt(r,"has",t),pt(r,"has",s)),t===s?n.has(t):n.has(t)||n.has(s)}function xi(t,e=!1){return t=t.__v_raw,!e&&pt(ce(t),"iterate",Kn),Reflect.get(t,"size",t)}function Qu(t){t=ce(t);const e=ce(this);return Fo(e).has.call(e,t)||(e.add(t),nn(e,"add",t,t)),this}function Yu(t,e){e=ce(e);const n=ce(this),{has:r,get:s}=Fo(n);let i=r.call(n,t);i||(t=ce(t),i=r.call(n,t));const o=s.call(n,t);return n.set(t,e),i?Ss(e,o)&&nn(n,"set",t,e):nn(n,"add",t,e),this}function Ju(t){const e=ce(this),{has:n,get:r}=Fo(e);let s=n.call(e,t);s||(t=ce(t),s=n.call(e,t)),r&&r.call(e,t);const i=e.delete(t);return s&&nn(e,"delete",t,void 0),i}function Xu(){const t=ce(this),e=t.size!==0,n=t.clear();return e&&nn(t,"clear",void 0,void 0),n}function Di(t,e){return function(r,s){const i=this,o=i.__v_raw,a=ce(o),l=e?dc:t?mc:ks;return!t&&pt(a,"iterate",Kn),o.forEach((c,u)=>r.call(s,l(c),l(u),i))}}function Ni(t,e,n){return function(...r){const s=this.__v_raw,i=ce(s),o=Ir(i),a=t==="entries"||t===Symbol.iterator&&o,l=t==="keys"&&o,c=s[t](...r),u=n?dc:e?mc:ks;return!e&&pt(i,"iterate",l?fl:Kn),{next(){const{value:h,done:d}=c.next();return d?{value:h,done:d}:{value:a?[u(h[0]),u(h[1])]:u(h),done:d}},[Symbol.iterator](){return this}}}}function un(t){return function(...e){return t==="delete"?!1:this}}function j_(){const t={get(i){return Si(this,i)},get size(){return xi(this)},has:ki,add:Qu,set:Yu,delete:Ju,clear:Xu,forEach:Di(!1,!1)},e={get(i){return Si(this,i,!1,!0)},get size(){return xi(this)},has:ki,add:Qu,set:Yu,delete:Ju,clear:Xu,forEach:Di(!1,!0)},n={get(i){return Si(this,i,!0)},get size(){return xi(this,!0)},has(i){return ki.call(this,i,!0)},add:un("add"),set:un("set"),delete:un("delete"),clear:un("clear"),forEach:Di(!0,!1)},r={get(i){return Si(this,i,!0,!0)},get size(){return xi(this,!0)},has(i){return ki.call(this,i,!0)},add:un("add"),set:un("set"),delete:un("delete"),clear:un("clear"),forEach:Di(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{t[i]=Ni(i,!1,!1),n[i]=Ni(i,!0,!1),e[i]=Ni(i,!1,!0),r[i]=Ni(i,!0,!0)}),[t,n,e,r]}const[q_,K_,H_,z_]=j_();function fc(t,e){const n=e?t?z_:H_:t?K_:q_;return(r,s,i)=>s==="__v_isReactive"?!t:s==="__v_isReadonly"?t:s==="__v_raw"?r:Reflect.get(ae(n,s)&&s in r?n:r,s,i)}const W_={get:fc(!1,!1)},G_={get:fc(!1,!0)},Q_={get:fc(!0,!1)},cf=new WeakMap,uf=new WeakMap,hf=new WeakMap,Y_=new WeakMap;function J_(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function X_(t){return t.__v_skip||!Object.isExtensible(t)?0:J_(p_(t))}function pc(t){return xr(t)?t:gc(t,!1,lf,W_,cf)}function Z_(t){return gc(t,!1,B_,G_,uf)}function df(t){return gc(t,!0,$_,Q_,hf)}function gc(t,e,n,r,s){if(!Ae(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=s.get(t);if(i)return i;const o=X_(t);if(o===0)return t;const a=new Proxy(t,o===2?r:n);return s.set(t,a),a}function Tr(t){return xr(t)?Tr(t.__v_raw):!!(t&&t.__v_isReactive)}function xr(t){return!!(t&&t.__v_isReadonly)}function ao(t){return!!(t&&t.__v_isShallow)}function ff(t){return Tr(t)||xr(t)}function ce(t){const e=t&&t.__v_raw;return e?ce(e):t}function pf(t){return io(t,"__v_skip",!0),t}const ks=t=>Ae(t)?pc(t):t,mc=t=>Ae(t)?df(t):t;function gf(t){vn&&bt&&(t=ce(t),sf(t.dep||(t.dep=cc())))}function mf(t,e){t=ce(t);const n=t.dep;n&&pl(n)}function et(t){return!!(t&&t.__v_isRef===!0)}function K(t){return ey(t,!1)}function ey(t,e){return et(t)?t:new ty(t,e)}class ty{constructor(e,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:ce(e),this._value=n?e:ks(e)}get value(){return gf(this),this._value}set value(e){const n=this.__v_isShallow||ao(e)||xr(e);e=n?e:ce(e),Ss(e,this._rawValue)&&(this._rawValue=e,this._value=n?e:ks(e),mf(this))}}function gr(t){return et(t)?t.value:t}const ny={get:(t,e,n)=>gr(Reflect.get(t,e,n)),set:(t,e,n,r)=>{const s=t[e];return et(s)&&!et(n)?(s.value=n,!0):Reflect.set(t,e,n,r)}};function _f(t){return Tr(t)?t:new Proxy(t,ny)}class ry{constructor(e,n,r,s){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this._dirty=!0,this.effect=new uc(e,()=>{this._dirty||(this._dirty=!0,mf(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!s,this.__v_isReadonly=r}get value(){const e=ce(this);return gf(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}function sy(t,e,n=!1){let r,s;const i=te(t);return i?(r=t,s=Pt):(r=t.get,s=t.set),new ry(r,s,i||!s,n)}function wn(t,e,n,r){let s;try{s=r?t(...r):t()}catch(i){$o(i,e,n)}return s}function St(t,e,n,r){if(te(t)){const i=wn(t,e,n,r);return i&&Yd(i)&&i.catch(o=>{$o(o,e,n)}),i}const s=[];for(let i=0;i<t.length;i++)s.push(St(t[i],e,n,r));return s}function $o(t,e,n,r=!0){const s=e?e.vnode:null;if(e){let i=e.parent;const o=e.proxy,a=n;for(;i;){const c=i.ec;if(c){for(let u=0;u<c.length;u++)if(c[u](t,o,a)===!1)return}i=i.parent}const l=e.appContext.config.errorHandler;if(l){wn(l,null,10,[t,o,a]);return}}iy(t,n,s,r)}function iy(t,e,n,r=!0){console.error(t)}let xs=!1,gl=!1;const Je=[];let Ut=0;const Ar=[];let Yt=null,Un=0;const yf=Promise.resolve();let _c=null;function Bo(t){const e=_c||yf;return t?e.then(this?t.bind(this):t):e}function oy(t){let e=Ut+1,n=Je.length;for(;e<n;){const r=e+n>>>1;Ds(Je[r])<t?e=r+1:n=r}return e}function yc(t){(!Je.length||!Je.includes(t,xs&&t.allowRecurse?Ut+1:Ut))&&(t.id==null?Je.push(t):Je.splice(oy(t.id),0,t),vf())}function vf(){!xs&&!gl&&(gl=!0,_c=yf.then(Ef))}function ay(t){const e=Je.indexOf(t);e>Ut&&Je.splice(e,1)}function ly(t){H(t)?Ar.push(...t):(!Yt||!Yt.includes(t,t.allowRecurse?Un+1:Un))&&Ar.push(t),vf()}function Zu(t,e=xs?Ut+1:0){for(;e<Je.length;e++){const n=Je[e];n&&n.pre&&(Je.splice(e,1),e--,n())}}function wf(t){if(Ar.length){const e=[...new Set(Ar)];if(Ar.length=0,Yt){Yt.push(...e);return}for(Yt=e,Yt.sort((n,r)=>Ds(n)-Ds(r)),Un=0;Un<Yt.length;Un++)Yt[Un]();Yt=null,Un=0}}const Ds=t=>t.id==null?1/0:t.id,cy=(t,e)=>{const n=Ds(t)-Ds(e);if(n===0){if(t.pre&&!e.pre)return-1;if(e.pre&&!t.pre)return 1}return n};function Ef(t){gl=!1,xs=!0,Je.sort(cy);const e=Pt;try{for(Ut=0;Ut<Je.length;Ut++){const n=Je[Ut];n&&n.active!==!1&&wn(n,null,14)}}finally{Ut=0,Je.length=0,wf(),xs=!1,_c=null,(Je.length||Ar.length)&&Ef()}}function uy(t,e,...n){if(t.isUnmounted)return;const r=t.vnode.props||we;let s=n;const i=e.startsWith("update:"),o=i&&e.slice(7);if(o&&o in r){const u=`${o==="modelValue"?"model":o}Modifiers`,{number:h,trim:d}=r[u]||we;d&&(s=n.map(f=>Oe(f)?f.trim():f)),h&&(s=n.map(oo))}let a,l=r[a=xa(e)]||r[a=xa(zt(e))];!l&&i&&(l=r[a=xa(zr(e))]),l&&St(l,t,6,s);const c=r[a+"Once"];if(c){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,St(c,t,6,s)}}function If(t,e,n=!1){const r=e.emitsCache,s=r.get(t);if(s!==void 0)return s;const i=t.emits;let o={},a=!1;if(!te(t)){const l=c=>{const u=If(c,e,!0);u&&(a=!0,We(o,u))};!n&&e.mixins.length&&e.mixins.forEach(l),t.extends&&l(t.extends),t.mixins&&t.mixins.forEach(l)}return!i&&!a?(Ae(t)&&r.set(t,null),null):(H(i)?i.forEach(l=>o[l]=null):We(o,i),Ae(t)&&r.set(t,o),o)}function jo(t,e){return!t||!Mo(e)?!1:(e=e.slice(2).replace(/Once$/,""),ae(t,e[0].toLowerCase()+e.slice(1))||ae(t,zr(e))||ae(t,e))}let wt=null,Tf=null;function lo(t){const e=wt;return wt=t,Tf=t&&t.type.__scopeId||null,e}function hy(t,e=wt,n){if(!e||t._n)return t;const r=(...s)=>{r._d&&uh(-1);const i=lo(e);let o;try{o=t(...s)}finally{lo(i),r._d&&uh(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function Da(t){const{type:e,vnode:n,proxy:r,withProxy:s,props:i,propsOptions:[o],slots:a,attrs:l,emit:c,render:u,renderCache:h,data:d,setupState:f,ctx:_,inheritAttrs:m}=t;let E,M;const y=lo(t);try{if(n.shapeFlag&4){const C=s||r;E=Lt(u.call(C,C,h,i,f,d,_)),M=l}else{const C=e;E=Lt(C.length>1?C(i,{attrs:l,slots:a,emit:c}):C(i,null)),M=e.props?l:dy(l)}}catch(C){vs.length=0,$o(C,t,1),E=je(Qn)}let R=E;if(M&&m!==!1){const C=Object.keys(M),{shapeFlag:$}=R;C.length&&$&7&&(o&&C.some(sc)&&(M=fy(M,o)),R=Dr(R,M))}return n.dirs&&(R=Dr(R),R.dirs=R.dirs?R.dirs.concat(n.dirs):n.dirs),n.transition&&(R.transition=n.transition),E=R,lo(y),E}const dy=t=>{let e;for(const n in t)(n==="class"||n==="style"||Mo(n))&&((e||(e={}))[n]=t[n]);return e},fy=(t,e)=>{const n={};for(const r in t)(!sc(r)||!(r.slice(9)in e))&&(n[r]=t[r]);return n};function py(t,e,n){const{props:r,children:s,component:i}=t,{props:o,children:a,patchFlag:l}=e,c=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return r?eh(r,o,c):!!o;if(l&8){const u=e.dynamicProps;for(let h=0;h<u.length;h++){const d=u[h];if(o[d]!==r[d]&&!jo(c,d))return!0}}}else return(s||a)&&(!a||!a.$stable)?!0:r===o?!1:r?o?eh(r,o,c):!0:!!o;return!1}function eh(t,e,n){const r=Object.keys(e);if(r.length!==Object.keys(t).length)return!0;for(let s=0;s<r.length;s++){const i=r[s];if(e[i]!==t[i]&&!jo(n,i))return!0}return!1}function gy({vnode:t,parent:e},n){for(;e&&e.subTree===t;)(t=e.vnode).el=n,e=e.parent}const my=t=>t.__isSuspense;function _y(t,e){e&&e.pendingBranch?H(t)?e.effects.push(...t):e.effects.push(t):ly(t)}const Oi={};function Na(t,e,n){return Af(t,e,n)}function Af(t,e,{immediate:n,deep:r,flush:s,onTrack:i,onTrigger:o}=we){var a;const l=R_()===((a=Ke)==null?void 0:a.scope)?Ke:null;let c,u=!1,h=!1;if(et(t)?(c=()=>t.value,u=ao(t)):Tr(t)?(c=()=>t,r=!0):H(t)?(h=!0,u=t.some(C=>Tr(C)||ao(C)),c=()=>t.map(C=>{if(et(C))return C.value;if(Tr(C))return $n(C);if(te(C))return wn(C,l,2)})):te(t)?e?c=()=>wn(t,l,2):c=()=>{if(!(l&&l.isUnmounted))return d&&d(),St(t,l,3,[f])}:c=Pt,e&&r){const C=c;c=()=>$n(C())}let d,f=C=>{d=y.onStop=()=>{wn(C,l,4)}},_;if(Os)if(f=Pt,e?n&&St(e,l,3,[c(),h?[]:void 0,f]):c(),s==="sync"){const C=gv();_=C.__watcherHandles||(C.__watcherHandles=[])}else return Pt;let m=h?new Array(t.length).fill(Oi):Oi;const E=()=>{if(y.active)if(e){const C=y.run();(r||u||(h?C.some(($,X)=>Ss($,m[X])):Ss(C,m)))&&(d&&d(),St(e,l,3,[C,m===Oi?void 0:h&&m[0]===Oi?[]:m,f]),m=C)}else y.run()};E.allowRecurse=!!e;let M;s==="sync"?M=E:s==="post"?M=()=>dt(E,l&&l.suspense):(E.pre=!0,l&&(E.id=l.uid),M=()=>yc(E));const y=new uc(c,M);e?n?E():m=y.run():s==="post"?dt(y.run.bind(y),l&&l.suspense):y.run();const R=()=>{y.stop(),l&&l.scope&&ic(l.scope.effects,y)};return _&&_.push(R),R}function yy(t,e,n){const r=this.proxy,s=Oe(t)?t.includes(".")?bf(r,t):()=>r[t]:t.bind(r,r);let i;te(e)?i=e:(i=e.handler,n=e);const o=Ke;Nr(this);const a=Af(s,i.bind(r),n);return o?Nr(o):Hn(),a}function bf(t,e){const n=e.split(".");return()=>{let r=t;for(let s=0;s<n.length&&r;s++)r=r[n[s]];return r}}function $n(t,e){if(!Ae(t)||t.__v_skip||(e=e||new Set,e.has(t)))return t;if(e.add(t),et(t))$n(t.value,e);else if(H(t))for(let n=0;n<t.length;n++)$n(t[n],e);else if(Hr(t)||Ir(t))t.forEach(n=>{$n(n,e)});else if(Xd(t))for(const n in t)$n(t[n],e);return t}function Ce(t,e){const n=wt;if(n===null)return t;const r=zo(n)||n.proxy,s=t.dirs||(t.dirs=[]);for(let i=0;i<e.length;i++){let[o,a,l,c=we]=e[i];o&&(te(o)&&(o={mounted:o,updated:o}),o.deep&&$n(a),s.push({dir:o,instance:r,value:a,oldValue:void 0,arg:l,modifiers:c}))}return t}function Vn(t,e,n,r){const s=t.dirs,i=e&&e.dirs;for(let o=0;o<s.length;o++){const a=s[o];i&&(a.oldValue=i[o].value);let l=a.dir[r];l&&(Wr(),St(l,n,8,[t.el,a,t,e]),Gr())}}const Wi=t=>!!t.type.__asyncLoader,Rf=t=>t.type.__isKeepAlive;function vy(t,e){Cf(t,"a",e)}function wy(t,e){Cf(t,"da",e)}function Cf(t,e,n=Ke){const r=t.__wdc||(t.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return t()});if(qo(e,r,n),n){let s=n.parent;for(;s&&s.parent;)Rf(s.parent.vnode)&&Ey(r,e,n,s),s=s.parent}}function Ey(t,e,n,r){const s=qo(e,t,r,!0);Sf(()=>{ic(r[e],s)},n)}function qo(t,e,n=Ke,r=!1){if(n){const s=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...o)=>{if(n.isUnmounted)return;Wr(),Nr(n);const a=St(e,n,t,o);return Hn(),Gr(),a});return r?s.unshift(i):s.push(i),i}}const ln=t=>(e,n=Ke)=>(!Os||t==="sp")&&qo(t,(...r)=>e(...r),n),Iy=ln("bm"),Pf=ln("m"),Ty=ln("bu"),Ay=ln("u"),by=ln("bum"),Sf=ln("um"),Ry=ln("sp"),Cy=ln("rtg"),Py=ln("rtc");function Sy(t,e=Ke){qo("ec",t,e)}const ky="components",xy="directives",Dy=Symbol.for("v-ndc");function kf(t){return Ny(xy,t)}function Ny(t,e,n=!0,r=!1){const s=wt||Ke;if(s){const i=s.type;if(t===ky){const a=hv(i,!1);if(a&&(a===e||a===zt(e)||a===Uo(zt(e))))return i}const o=th(s[t]||i[t],e)||th(s.appContext[t],e);return!o&&r?i:o}}function th(t,e){return t&&(t[e]||t[zt(e)]||t[Uo(zt(e))])}function vc(t,e,n,r){let s;const i=n&&n[r];if(H(t)||Oe(t)){s=new Array(t.length);for(let o=0,a=t.length;o<a;o++)s[o]=e(t[o],o,void 0,i&&i[o])}else if(typeof t=="number"){s=new Array(t);for(let o=0;o<t;o++)s[o]=e(o+1,o,void 0,i&&i[o])}else if(Ae(t))if(t[Symbol.iterator])s=Array.from(t,(o,a)=>e(o,a,void 0,i&&i[a]));else{const o=Object.keys(t);s=new Array(o.length);for(let a=0,l=o.length;a<l;a++){const c=o[a];s[a]=e(t[c],c,a,i&&i[a])}}else s=[];return n&&(n[r]=s),s}const ml=t=>t?Bf(t)?zo(t)||t.proxy:ml(t.parent):null,ys=We(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>ml(t.parent),$root:t=>ml(t.root),$emit:t=>t.emit,$options:t=>wc(t),$forceUpdate:t=>t.f||(t.f=()=>yc(t.update)),$nextTick:t=>t.n||(t.n=Bo.bind(t.proxy)),$watch:t=>yy.bind(t)}),Oa=(t,e)=>t!==we&&!t.__isScriptSetup&&ae(t,e),Oy={get({_:t},e){const{ctx:n,setupState:r,data:s,props:i,accessCache:o,type:a,appContext:l}=t;let c;if(e[0]!=="$"){const f=o[e];if(f!==void 0)switch(f){case 1:return r[e];case 2:return s[e];case 4:return n[e];case 3:return i[e]}else{if(Oa(r,e))return o[e]=1,r[e];if(s!==we&&ae(s,e))return o[e]=2,s[e];if((c=t.propsOptions[0])&&ae(c,e))return o[e]=3,i[e];if(n!==we&&ae(n,e))return o[e]=4,n[e];_l&&(o[e]=0)}}const u=ys[e];let h,d;if(u)return e==="$attrs"&&pt(t,"get",e),u(t);if((h=a.__cssModules)&&(h=h[e]))return h;if(n!==we&&ae(n,e))return o[e]=4,n[e];if(d=l.config.globalProperties,ae(d,e))return d[e]},set({_:t},e,n){const{data:r,setupState:s,ctx:i}=t;return Oa(s,e)?(s[e]=n,!0):r!==we&&ae(r,e)?(r[e]=n,!0):ae(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:r,appContext:s,propsOptions:i}},o){let a;return!!n[o]||t!==we&&ae(t,o)||Oa(e,o)||(a=i[0])&&ae(a,o)||ae(r,o)||ae(ys,o)||ae(s.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:ae(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function nh(t){return H(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let _l=!0;function Vy(t){const e=wc(t),n=t.proxy,r=t.ctx;_l=!1,e.beforeCreate&&rh(e.beforeCreate,t,"bc");const{data:s,computed:i,methods:o,watch:a,provide:l,inject:c,created:u,beforeMount:h,mounted:d,beforeUpdate:f,updated:_,activated:m,deactivated:E,beforeDestroy:M,beforeUnmount:y,destroyed:R,unmounted:C,render:$,renderTracked:X,renderTriggered:G,errorCaptured:O,serverPrefetch:k,expose:ee,inheritAttrs:me,components:at,directives:It,filters:fe}=e;if(c&&My(c,r,null),o)for(const ve in o){const pe=o[ve];te(pe)&&(r[ve]=pe.bind(n))}if(s){const ve=s.call(n,n);Ae(ve)&&(t.data=pc(ve))}if(_l=!0,i)for(const ve in i){const pe=i[ve],Nn=te(pe)?pe.bind(n,n):te(pe.get)?pe.get.bind(n,n):Pt,Ci=!te(pe)&&te(pe.set)?pe.set.bind(n):Pt,On=fv({get:Nn,set:Ci});Object.defineProperty(r,ve,{enumerable:!0,configurable:!0,get:()=>On.value,set:Ot=>On.value=Ot})}if(a)for(const ve in a)xf(a[ve],r,n,ve);if(l){const ve=te(l)?l.call(n):l;Reflect.ownKeys(ve).forEach(pe=>{jy(pe,ve[pe])})}u&&rh(u,t,"c");function Fe(ve,pe){H(pe)?pe.forEach(Nn=>ve(Nn.bind(n))):pe&&ve(pe.bind(n))}if(Fe(Iy,h),Fe(Pf,d),Fe(Ty,f),Fe(Ay,_),Fe(vy,m),Fe(wy,E),Fe(Sy,O),Fe(Py,X),Fe(Cy,G),Fe(by,y),Fe(Sf,C),Fe(Ry,k),H(ee))if(ee.length){const ve=t.exposed||(t.exposed={});ee.forEach(pe=>{Object.defineProperty(ve,pe,{get:()=>n[pe],set:Nn=>n[pe]=Nn})})}else t.exposed||(t.exposed={});$&&t.render===Pt&&(t.render=$),me!=null&&(t.inheritAttrs=me),at&&(t.components=at),It&&(t.directives=It)}function My(t,e,n=Pt){H(t)&&(t=yl(t));for(const r in t){const s=t[r];let i;Ae(s)?"default"in s?i=Gi(s.from||r,s.default,!0):i=Gi(s.from||r):i=Gi(s),et(i)?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>i.value,set:o=>i.value=o}):e[r]=i}}function rh(t,e,n){St(H(t)?t.map(r=>r.bind(e.proxy)):t.bind(e.proxy),e,n)}function xf(t,e,n,r){const s=r.includes(".")?bf(n,r):()=>n[r];if(Oe(t)){const i=e[t];te(i)&&Na(s,i)}else if(te(t))Na(s,t.bind(n));else if(Ae(t))if(H(t))t.forEach(i=>xf(i,e,n,r));else{const i=te(t.handler)?t.handler.bind(n):e[t.handler];te(i)&&Na(s,i,t)}}function wc(t){const e=t.type,{mixins:n,extends:r}=e,{mixins:s,optionsCache:i,config:{optionMergeStrategies:o}}=t.appContext,a=i.get(e);let l;return a?l=a:!s.length&&!n&&!r?l=e:(l={},s.length&&s.forEach(c=>co(l,c,o,!0)),co(l,e,o)),Ae(e)&&i.set(e,l),l}function co(t,e,n,r=!1){const{mixins:s,extends:i}=e;i&&co(t,i,n,!0),s&&s.forEach(o=>co(t,o,n,!0));for(const o in e)if(!(r&&o==="expose")){const a=Ly[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const Ly={data:sh,props:ih,emits:ih,methods:cs,computed:cs,beforeCreate:lt,created:lt,beforeMount:lt,mounted:lt,beforeUpdate:lt,updated:lt,beforeDestroy:lt,beforeUnmount:lt,destroyed:lt,unmounted:lt,activated:lt,deactivated:lt,errorCaptured:lt,serverPrefetch:lt,components:cs,directives:cs,watch:Fy,provide:sh,inject:Uy};function sh(t,e){return e?t?function(){return We(te(t)?t.call(this,this):t,te(e)?e.call(this,this):e)}:e:t}function Uy(t,e){return cs(yl(t),yl(e))}function yl(t){if(H(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function lt(t,e){return t?[...new Set([].concat(t,e))]:e}function cs(t,e){return t?We(Object.create(null),t,e):e}function ih(t,e){return t?H(t)&&H(e)?[...new Set([...t,...e])]:We(Object.create(null),nh(t),nh(e??{})):e}function Fy(t,e){if(!t)return e;if(!e)return t;const n=We(Object.create(null),t);for(const r in e)n[r]=lt(t[r],e[r]);return n}function Df(){return{app:null,config:{isNativeTag:h_,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let $y=0;function By(t,e){return function(r,s=null){te(r)||(r=We({},r)),s!=null&&!Ae(s)&&(s=null);const i=Df(),o=new Set;let a=!1;const l=i.app={_uid:$y++,_component:r,_props:s,_container:null,_context:i,_instance:null,version:mv,get config(){return i.config},set config(c){},use(c,...u){return o.has(c)||(c&&te(c.install)?(o.add(c),c.install(l,...u)):te(c)&&(o.add(c),c(l,...u))),l},mixin(c){return i.mixins.includes(c)||i.mixins.push(c),l},component(c,u){return u?(i.components[c]=u,l):i.components[c]},directive(c,u){return u?(i.directives[c]=u,l):i.directives[c]},mount(c,u,h){if(!a){const d=je(r,s);return d.appContext=i,u&&e?e(d,c):t(d,c,h),a=!0,l._container=c,c.__vue_app__=l,zo(d.component)||d.component.proxy}},unmount(){a&&(t(null,l._container),delete l._container.__vue_app__)},provide(c,u){return i.provides[c]=u,l},runWithContext(c){uo=l;try{return c()}finally{uo=null}}};return l}}let uo=null;function jy(t,e){if(Ke){let n=Ke.provides;const r=Ke.parent&&Ke.parent.provides;r===n&&(n=Ke.provides=Object.create(r)),n[t]=e}}function Gi(t,e,n=!1){const r=Ke||wt;if(r||uo){const s=r?r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:uo._context.provides;if(s&&t in s)return s[t];if(arguments.length>1)return n&&te(e)?e.call(r&&r.proxy):e}}function qy(t,e,n,r=!1){const s={},i={};io(i,Ho,1),t.propsDefaults=Object.create(null),Nf(t,e,s,i);for(const o in t.propsOptions[0])o in s||(s[o]=void 0);n?t.props=r?s:Z_(s):t.type.props?t.props=s:t.props=i,t.attrs=i}function Ky(t,e,n,r){const{props:s,attrs:i,vnode:{patchFlag:o}}=t,a=ce(s),[l]=t.propsOptions;let c=!1;if((r||o>0)&&!(o&16)){if(o&8){const u=t.vnode.dynamicProps;for(let h=0;h<u.length;h++){let d=u[h];if(jo(t.emitsOptions,d))continue;const f=e[d];if(l)if(ae(i,d))f!==i[d]&&(i[d]=f,c=!0);else{const _=zt(d);s[_]=vl(l,a,_,f,t,!1)}else f!==i[d]&&(i[d]=f,c=!0)}}}else{Nf(t,e,s,i)&&(c=!0);let u;for(const h in a)(!e||!ae(e,h)&&((u=zr(h))===h||!ae(e,u)))&&(l?n&&(n[h]!==void 0||n[u]!==void 0)&&(s[h]=vl(l,a,h,void 0,t,!0)):delete s[h]);if(i!==a)for(const h in i)(!e||!ae(e,h))&&(delete i[h],c=!0)}c&&nn(t,"set","$attrs")}function Nf(t,e,n,r){const[s,i]=t.propsOptions;let o=!1,a;if(e)for(let l in e){if(Hi(l))continue;const c=e[l];let u;s&&ae(s,u=zt(l))?!i||!i.includes(u)?n[u]=c:(a||(a={}))[u]=c:jo(t.emitsOptions,l)||(!(l in r)||c!==r[l])&&(r[l]=c,o=!0)}if(i){const l=ce(n),c=a||we;for(let u=0;u<i.length;u++){const h=i[u];n[h]=vl(s,l,h,c[h],t,!ae(c,h))}}return o}function vl(t,e,n,r,s,i){const o=t[n];if(o!=null){const a=ae(o,"default");if(a&&r===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&te(l)){const{propsDefaults:c}=s;n in c?r=c[n]:(Nr(s),r=c[n]=l.call(null,e),Hn())}else r=l}o[0]&&(i&&!a?r=!1:o[1]&&(r===""||r===zr(n))&&(r=!0))}return r}function Of(t,e,n=!1){const r=e.propsCache,s=r.get(t);if(s)return s;const i=t.props,o={},a=[];let l=!1;if(!te(t)){const u=h=>{l=!0;const[d,f]=Of(h,e,!0);We(o,d),f&&a.push(...f)};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!i&&!l)return Ae(t)&&r.set(t,Er),Er;if(H(i))for(let u=0;u<i.length;u++){const h=zt(i[u]);oh(h)&&(o[h]=we)}else if(i)for(const u in i){const h=zt(u);if(oh(h)){const d=i[u],f=o[h]=H(d)||te(d)?{type:d}:We({},d);if(f){const _=ch(Boolean,f.type),m=ch(String,f.type);f[0]=_>-1,f[1]=m<0||_<m,(_>-1||ae(f,"default"))&&a.push(h)}}}const c=[o,a];return Ae(t)&&r.set(t,c),c}function oh(t){return t[0]!=="$"}function ah(t){const e=t&&t.toString().match(/^\s*(function|class) (\w+)/);return e?e[2]:t===null?"null":""}function lh(t,e){return ah(t)===ah(e)}function ch(t,e){return H(e)?e.findIndex(n=>lh(n,t)):te(e)&&lh(e,t)?0:-1}const Vf=t=>t[0]==="_"||t==="$stable",Ec=t=>H(t)?t.map(Lt):[Lt(t)],Hy=(t,e,n)=>{if(e._n)return e;const r=hy((...s)=>Ec(e(...s)),n);return r._c=!1,r},Mf=(t,e,n)=>{const r=t._ctx;for(const s in t){if(Vf(s))continue;const i=t[s];if(te(i))e[s]=Hy(s,i,r);else if(i!=null){const o=Ec(i);e[s]=()=>o}}},Lf=(t,e)=>{const n=Ec(e);t.slots.default=()=>n},zy=(t,e)=>{if(t.vnode.shapeFlag&32){const n=e._;n?(t.slots=ce(e),io(e,"_",n)):Mf(e,t.slots={})}else t.slots={},e&&Lf(t,e);io(t.slots,Ho,1)},Wy=(t,e,n)=>{const{vnode:r,slots:s}=t;let i=!0,o=we;if(r.shapeFlag&32){const a=e._;a?n&&a===1?i=!1:(We(s,e),!n&&a===1&&delete s._):(i=!e.$stable,Mf(e,s)),o=e}else e&&(Lf(t,e),o={default:1});if(i)for(const a in s)!Vf(a)&&!(a in o)&&delete s[a]};function wl(t,e,n,r,s=!1){if(H(t)){t.forEach((d,f)=>wl(d,e&&(H(e)?e[f]:e),n,r,s));return}if(Wi(r)&&!s)return;const i=r.shapeFlag&4?zo(r.component)||r.component.proxy:r.el,o=s?null:i,{i:a,r:l}=t,c=e&&e.r,u=a.refs===we?a.refs={}:a.refs,h=a.setupState;if(c!=null&&c!==l&&(Oe(c)?(u[c]=null,ae(h,c)&&(h[c]=null)):et(c)&&(c.value=null)),te(l))wn(l,a,12,[o,u]);else{const d=Oe(l),f=et(l);if(d||f){const _=()=>{if(t.f){const m=d?ae(h,l)?h[l]:u[l]:l.value;s?H(m)&&ic(m,i):H(m)?m.includes(i)||m.push(i):d?(u[l]=[i],ae(h,l)&&(h[l]=u[l])):(l.value=[i],t.k&&(u[t.k]=l.value))}else d?(u[l]=o,ae(h,l)&&(h[l]=o)):f&&(l.value=o,t.k&&(u[t.k]=o))};o?(_.id=-1,dt(_,n)):_()}}}const dt=_y;function Gy(t){return Qy(t)}function Qy(t,e){const n=ul();n.__VUE__=!0;const{insert:r,remove:s,patchProp:i,createElement:o,createText:a,createComment:l,setText:c,setElementText:u,parentNode:h,nextSibling:d,setScopeId:f=Pt,insertStaticContent:_}=t,m=(p,g,v,A=null,T=null,x=null,V=!1,S=null,D=!!g.dynamicChildren)=>{if(p===g)return;p&&!ss(p,g)&&(A=Pi(p),Ot(p,T,x,!0),p=null),g.patchFlag===-2&&(D=!1,g.dynamicChildren=null);const{type:P,ref:j,shapeFlag:F}=g;switch(P){case Ko:E(p,g,v,A);break;case Qn:M(p,g,v,A);break;case Qi:p==null&&y(g,v,A,V);break;case ct:at(p,g,v,A,T,x,V,S,D);break;default:F&1?$(p,g,v,A,T,x,V,S,D):F&6?It(p,g,v,A,T,x,V,S,D):(F&64||F&128)&&P.process(p,g,v,A,T,x,V,S,D,ur)}j!=null&&T&&wl(j,p&&p.ref,x,g||p,!g)},E=(p,g,v,A)=>{if(p==null)r(g.el=a(g.children),v,A);else{const T=g.el=p.el;g.children!==p.children&&c(T,g.children)}},M=(p,g,v,A)=>{p==null?r(g.el=l(g.children||""),v,A):g.el=p.el},y=(p,g,v,A)=>{[p.el,p.anchor]=_(p.children,g,v,A,p.el,p.anchor)},R=({el:p,anchor:g},v,A)=>{let T;for(;p&&p!==g;)T=d(p),r(p,v,A),p=T;r(g,v,A)},C=({el:p,anchor:g})=>{let v;for(;p&&p!==g;)v=d(p),s(p),p=v;s(g)},$=(p,g,v,A,T,x,V,S,D)=>{V=V||g.type==="svg",p==null?X(g,v,A,T,x,V,S,D):k(p,g,T,x,V,S,D)},X=(p,g,v,A,T,x,V,S)=>{let D,P;const{type:j,props:F,shapeFlag:q,transition:Y,dirs:ne}=p;if(D=p.el=o(p.type,x,F&&F.is,F),q&8?u(D,p.children):q&16&&O(p.children,D,null,A,T,x&&j!=="foreignObject",V,S),ne&&Vn(p,null,A,"created"),G(D,p,p.scopeId,V,A),F){for(const ge in F)ge!=="value"&&!Hi(ge)&&i(D,ge,null,F[ge],x,p.children,A,T,Qt);"value"in F&&i(D,"value",null,F.value),(P=F.onVnodeBeforeMount)&&Mt(P,A,p)}ne&&Vn(p,null,A,"beforeMount");const _e=(!T||T&&!T.pendingBranch)&&Y&&!Y.persisted;_e&&Y.beforeEnter(D),r(D,g,v),((P=F&&F.onVnodeMounted)||_e||ne)&&dt(()=>{P&&Mt(P,A,p),_e&&Y.enter(D),ne&&Vn(p,null,A,"mounted")},T)},G=(p,g,v,A,T)=>{if(v&&f(p,v),A)for(let x=0;x<A.length;x++)f(p,A[x]);if(T){let x=T.subTree;if(g===x){const V=T.vnode;G(p,V,V.scopeId,V.slotScopeIds,T.parent)}}},O=(p,g,v,A,T,x,V,S,D=0)=>{for(let P=D;P<p.length;P++){const j=p[P]=S?dn(p[P]):Lt(p[P]);m(null,j,g,v,A,T,x,V,S)}},k=(p,g,v,A,T,x,V)=>{const S=g.el=p.el;let{patchFlag:D,dynamicChildren:P,dirs:j}=g;D|=p.patchFlag&16;const F=p.props||we,q=g.props||we;let Y;v&&Mn(v,!1),(Y=q.onVnodeBeforeUpdate)&&Mt(Y,v,g,p),j&&Vn(g,p,v,"beforeUpdate"),v&&Mn(v,!0);const ne=T&&g.type!=="foreignObject";if(P?ee(p.dynamicChildren,P,S,v,A,ne,x):V||pe(p,g,S,null,v,A,ne,x,!1),D>0){if(D&16)me(S,g,F,q,v,A,T);else if(D&2&&F.class!==q.class&&i(S,"class",null,q.class,T),D&4&&i(S,"style",F.style,q.style,T),D&8){const _e=g.dynamicProps;for(let ge=0;ge<_e.length;ge++){const Se=_e[ge],Tt=F[Se],hr=q[Se];(hr!==Tt||Se==="value")&&i(S,Se,Tt,hr,T,p.children,v,A,Qt)}}D&1&&p.children!==g.children&&u(S,g.children)}else!V&&P==null&&me(S,g,F,q,v,A,T);((Y=q.onVnodeUpdated)||j)&&dt(()=>{Y&&Mt(Y,v,g,p),j&&Vn(g,p,v,"updated")},A)},ee=(p,g,v,A,T,x,V)=>{for(let S=0;S<g.length;S++){const D=p[S],P=g[S],j=D.el&&(D.type===ct||!ss(D,P)||D.shapeFlag&70)?h(D.el):v;m(D,P,j,null,A,T,x,V,!0)}},me=(p,g,v,A,T,x,V)=>{if(v!==A){if(v!==we)for(const S in v)!Hi(S)&&!(S in A)&&i(p,S,v[S],null,V,g.children,T,x,Qt);for(const S in A){if(Hi(S))continue;const D=A[S],P=v[S];D!==P&&S!=="value"&&i(p,S,P,D,V,g.children,T,x,Qt)}"value"in A&&i(p,"value",v.value,A.value)}},at=(p,g,v,A,T,x,V,S,D)=>{const P=g.el=p?p.el:a(""),j=g.anchor=p?p.anchor:a("");let{patchFlag:F,dynamicChildren:q,slotScopeIds:Y}=g;Y&&(S=S?S.concat(Y):Y),p==null?(r(P,v,A),r(j,v,A),O(g.children,v,j,T,x,V,S,D)):F>0&&F&64&&q&&p.dynamicChildren?(ee(p.dynamicChildren,q,v,T,x,V,S),(g.key!=null||T&&g===T.subTree)&&Uf(p,g,!0)):pe(p,g,v,j,T,x,V,S,D)},It=(p,g,v,A,T,x,V,S,D)=>{g.slotScopeIds=S,p==null?g.shapeFlag&512?T.ctx.activate(g,v,A,V,D):fe(g,v,A,T,x,V,D):cr(p,g,D)},fe=(p,g,v,A,T,x,V)=>{const S=p.component=ov(p,A,T);if(Rf(p)&&(S.ctx.renderer=ur),av(S),S.asyncDep){if(T&&T.registerDep(S,Fe),!p.el){const D=S.subTree=je(Qn);M(null,D,g,v)}return}Fe(S,p,g,v,T,x,V)},cr=(p,g,v)=>{const A=g.component=p.component;if(py(p,g,v))if(A.asyncDep&&!A.asyncResolved){ve(A,g,v);return}else A.next=g,ay(A.update),A.update();else g.el=p.el,A.vnode=g},Fe=(p,g,v,A,T,x,V)=>{const S=()=>{if(p.isMounted){let{next:j,bu:F,u:q,parent:Y,vnode:ne}=p,_e=j,ge;Mn(p,!1),j?(j.el=ne.el,ve(p,j,V)):j=ne,F&&zi(F),(ge=j.props&&j.props.onVnodeBeforeUpdate)&&Mt(ge,Y,j,ne),Mn(p,!0);const Se=Da(p),Tt=p.subTree;p.subTree=Se,m(Tt,Se,h(Tt.el),Pi(Tt),p,T,x),j.el=Se.el,_e===null&&gy(p,Se.el),q&&dt(q,T),(ge=j.props&&j.props.onVnodeUpdated)&&dt(()=>Mt(ge,Y,j,ne),T)}else{let j;const{el:F,props:q}=g,{bm:Y,m:ne,parent:_e}=p,ge=Wi(g);if(Mn(p,!1),Y&&zi(Y),!ge&&(j=q&&q.onVnodeBeforeMount)&&Mt(j,_e,g),Mn(p,!0),F&&ka){const Se=()=>{p.subTree=Da(p),ka(F,p.subTree,p,T,null)};ge?g.type.__asyncLoader().then(()=>!p.isUnmounted&&Se()):Se()}else{const Se=p.subTree=Da(p);m(null,Se,v,A,p,T,x),g.el=Se.el}if(ne&&dt(ne,T),!ge&&(j=q&&q.onVnodeMounted)){const Se=g;dt(()=>Mt(j,_e,Se),T)}(g.shapeFlag&256||_e&&Wi(_e.vnode)&&_e.vnode.shapeFlag&256)&&p.a&&dt(p.a,T),p.isMounted=!0,g=v=A=null}},D=p.effect=new uc(S,()=>yc(P),p.scope),P=p.update=()=>D.run();P.id=p.uid,Mn(p,!0),P()},ve=(p,g,v)=>{g.component=p;const A=p.vnode.props;p.vnode=g,p.next=null,Ky(p,g.props,A,v),Wy(p,g.children,v),Wr(),Zu(),Gr()},pe=(p,g,v,A,T,x,V,S,D=!1)=>{const P=p&&p.children,j=p?p.shapeFlag:0,F=g.children,{patchFlag:q,shapeFlag:Y}=g;if(q>0){if(q&128){Ci(P,F,v,A,T,x,V,S,D);return}else if(q&256){Nn(P,F,v,A,T,x,V,S,D);return}}Y&8?(j&16&&Qt(P,T,x),F!==P&&u(v,F)):j&16?Y&16?Ci(P,F,v,A,T,x,V,S,D):Qt(P,T,x,!0):(j&8&&u(v,""),Y&16&&O(F,v,A,T,x,V,S,D))},Nn=(p,g,v,A,T,x,V,S,D)=>{p=p||Er,g=g||Er;const P=p.length,j=g.length,F=Math.min(P,j);let q;for(q=0;q<F;q++){const Y=g[q]=D?dn(g[q]):Lt(g[q]);m(p[q],Y,v,null,T,x,V,S,D)}P>j?Qt(p,T,x,!0,!1,F):O(g,v,A,T,x,V,S,D,F)},Ci=(p,g,v,A,T,x,V,S,D)=>{let P=0;const j=g.length;let F=p.length-1,q=j-1;for(;P<=F&&P<=q;){const Y=p[P],ne=g[P]=D?dn(g[P]):Lt(g[P]);if(ss(Y,ne))m(Y,ne,v,null,T,x,V,S,D);else break;P++}for(;P<=F&&P<=q;){const Y=p[F],ne=g[q]=D?dn(g[q]):Lt(g[q]);if(ss(Y,ne))m(Y,ne,v,null,T,x,V,S,D);else break;F--,q--}if(P>F){if(P<=q){const Y=q+1,ne=Y<j?g[Y].el:A;for(;P<=q;)m(null,g[P]=D?dn(g[P]):Lt(g[P]),v,ne,T,x,V,S,D),P++}}else if(P>q)for(;P<=F;)Ot(p[P],T,x,!0),P++;else{const Y=P,ne=P,_e=new Map;for(P=ne;P<=q;P++){const gt=g[P]=D?dn(g[P]):Lt(g[P]);gt.key!=null&&_e.set(gt.key,P)}let ge,Se=0;const Tt=q-ne+1;let hr=!1,Bu=0;const rs=new Array(Tt);for(P=0;P<Tt;P++)rs[P]=0;for(P=Y;P<=F;P++){const gt=p[P];if(Se>=Tt){Ot(gt,T,x,!0);continue}let Vt;if(gt.key!=null)Vt=_e.get(gt.key);else for(ge=ne;ge<=q;ge++)if(rs[ge-ne]===0&&ss(gt,g[ge])){Vt=ge;break}Vt===void 0?Ot(gt,T,x,!0):(rs[Vt-ne]=P+1,Vt>=Bu?Bu=Vt:hr=!0,m(gt,g[Vt],v,null,T,x,V,S,D),Se++)}const ju=hr?Yy(rs):Er;for(ge=ju.length-1,P=Tt-1;P>=0;P--){const gt=ne+P,Vt=g[gt],qu=gt+1<j?g[gt+1].el:A;rs[P]===0?m(null,Vt,v,qu,T,x,V,S,D):hr&&(ge<0||P!==ju[ge]?On(Vt,v,qu,2):ge--)}}},On=(p,g,v,A,T=null)=>{const{el:x,type:V,transition:S,children:D,shapeFlag:P}=p;if(P&6){On(p.component.subTree,g,v,A);return}if(P&128){p.suspense.move(g,v,A);return}if(P&64){V.move(p,g,v,ur);return}if(V===ct){r(x,g,v);for(let F=0;F<D.length;F++)On(D[F],g,v,A);r(p.anchor,g,v);return}if(V===Qi){R(p,g,v);return}if(A!==2&&P&1&&S)if(A===0)S.beforeEnter(x),r(x,g,v),dt(()=>S.enter(x),T);else{const{leave:F,delayLeave:q,afterLeave:Y}=S,ne=()=>r(x,g,v),_e=()=>{F(x,()=>{ne(),Y&&Y()})};q?q(x,ne,_e):_e()}else r(x,g,v)},Ot=(p,g,v,A=!1,T=!1)=>{const{type:x,props:V,ref:S,children:D,dynamicChildren:P,shapeFlag:j,patchFlag:F,dirs:q}=p;if(S!=null&&wl(S,null,v,p,!0),j&256){g.ctx.deactivate(p);return}const Y=j&1&&q,ne=!Wi(p);let _e;if(ne&&(_e=V&&V.onVnodeBeforeUnmount)&&Mt(_e,g,p),j&6)u_(p.component,v,A);else{if(j&128){p.suspense.unmount(v,A);return}Y&&Vn(p,null,g,"beforeUnmount"),j&64?p.type.remove(p,g,v,T,ur,A):P&&(x!==ct||F>0&&F&64)?Qt(P,g,v,!1,!0):(x===ct&&F&384||!T&&j&16)&&Qt(D,g,v),A&&Fu(p)}(ne&&(_e=V&&V.onVnodeUnmounted)||Y)&&dt(()=>{_e&&Mt(_e,g,p),Y&&Vn(p,null,g,"unmounted")},v)},Fu=p=>{const{type:g,el:v,anchor:A,transition:T}=p;if(g===ct){c_(v,A);return}if(g===Qi){C(p);return}const x=()=>{s(v),T&&!T.persisted&&T.afterLeave&&T.afterLeave()};if(p.shapeFlag&1&&T&&!T.persisted){const{leave:V,delayLeave:S}=T,D=()=>V(v,x);S?S(p.el,x,D):D()}else x()},c_=(p,g)=>{let v;for(;p!==g;)v=d(p),s(p),p=v;s(g)},u_=(p,g,v)=>{const{bum:A,scope:T,update:x,subTree:V,um:S}=p;A&&zi(A),T.stop(),x&&(x.active=!1,Ot(V,p,g,v)),S&&dt(S,g),dt(()=>{p.isUnmounted=!0},g),g&&g.pendingBranch&&!g.isUnmounted&&p.asyncDep&&!p.asyncResolved&&p.suspenseId===g.pendingId&&(g.deps--,g.deps===0&&g.resolve())},Qt=(p,g,v,A=!1,T=!1,x=0)=>{for(let V=x;V<p.length;V++)Ot(p[V],g,v,A,T)},Pi=p=>p.shapeFlag&6?Pi(p.component.subTree):p.shapeFlag&128?p.suspense.next():d(p.anchor||p.el),$u=(p,g,v)=>{p==null?g._vnode&&Ot(g._vnode,null,null,!0):m(g._vnode||null,p,g,null,null,null,v),Zu(),wf(),g._vnode=p},ur={p:m,um:Ot,m:On,r:Fu,mt:fe,mc:O,pc:pe,pbc:ee,n:Pi,o:t};let Sa,ka;return e&&([Sa,ka]=e(ur)),{render:$u,hydrate:Sa,createApp:By($u,Sa)}}function Mn({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function Uf(t,e,n=!1){const r=t.children,s=e.children;if(H(r)&&H(s))for(let i=0;i<r.length;i++){const o=r[i];let a=s[i];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=s[i]=dn(s[i]),a.el=o.el),n||Uf(o,a)),a.type===Ko&&(a.el=o.el)}}function Yy(t){const e=t.slice(),n=[0];let r,s,i,o,a;const l=t.length;for(r=0;r<l;r++){const c=t[r];if(c!==0){if(s=n[n.length-1],t[s]<c){e[r]=s,n.push(r);continue}for(i=0,o=n.length-1;i<o;)a=i+o>>1,t[n[a]]<c?i=a+1:o=a;c<t[n[i]]&&(i>0&&(e[r]=n[i-1]),n[i]=r)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=e[o];return n}const Jy=t=>t.__isTeleport,ct=Symbol.for("v-fgt"),Ko=Symbol.for("v-txt"),Qn=Symbol.for("v-cmt"),Qi=Symbol.for("v-stc"),vs=[];let Rt=null;function ie(t=!1){vs.push(Rt=t?null:[])}function Xy(){vs.pop(),Rt=vs[vs.length-1]||null}let Ns=1;function uh(t){Ns+=t}function Ff(t){return t.dynamicChildren=Ns>0?Rt||Er:null,Xy(),Ns>0&&Rt&&Rt.push(t),t}function ue(t,e,n,r,s,i){return Ff(w(t,e,n,r,s,i,!0))}function ws(t,e,n,r,s){return Ff(je(t,e,n,r,s,!0))}function Zy(t){return t?t.__v_isVNode===!0:!1}function ss(t,e){return t.type===e.type&&t.key===e.key}const Ho="__vInternal",$f=({key:t})=>t??null,Yi=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?Oe(t)||et(t)||te(t)?{i:wt,r:t,k:e,f:!!n}:t:null);function w(t,e=null,n=null,r=0,s=null,i=t===ct?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&$f(e),ref:e&&Yi(e),scopeId:Tf,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:wt};return a?(Ic(l,n),i&128&&t.normalize(l)):n&&(l.shapeFlag|=Oe(n)?8:16),Ns>0&&!o&&Rt&&(l.patchFlag>0||i&6)&&l.patchFlag!==32&&Rt.push(l),l}const je=ev;function ev(t,e=null,n=null,r=0,s=null,i=!1){if((!t||t===Dy)&&(t=Qn),Zy(t)){const a=Dr(t,e,!0);return n&&Ic(a,n),Ns>0&&!i&&Rt&&(a.shapeFlag&6?Rt[Rt.indexOf(t)]=a:Rt.push(a)),a.patchFlag|=-2,a}if(dv(t)&&(t=t.__vccOpts),e){e=tv(e);let{class:a,style:l}=e;a&&!Oe(a)&&(e.class=ac(a)),Ae(l)&&(ff(l)&&!H(l)&&(l=We({},l)),e.style=Gn(l))}const o=Oe(t)?1:my(t)?128:Jy(t)?64:Ae(t)?4:te(t)?2:0;return w(t,e,n,r,s,o,i,!0)}function tv(t){return t?ff(t)||Ho in t?We({},t):t:null}function Dr(t,e,n=!1){const{props:r,ref:s,patchFlag:i,children:o}=t,a=e?rv(r||{},e):r;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:a,key:a&&$f(a),ref:e&&e.ref?n&&s?H(s)?s.concat(Yi(e)):[s,Yi(e)]:Yi(e):s,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:o,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==ct?i===-1?16:i|16:i,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&Dr(t.ssContent),ssFallback:t.ssFallback&&Dr(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce}}function El(t=" ",e=0){return je(Ko,null,t,e)}function nv(t,e){const n=je(Qi,null,t);return n.staticCount=e,n}function Xe(t="",e=!1){return e?(ie(),ws(Qn,null,t)):je(Qn,null,t)}function Lt(t){return t==null||typeof t=="boolean"?je(Qn):H(t)?je(ct,null,t.slice()):typeof t=="object"?dn(t):je(Ko,null,String(t))}function dn(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:Dr(t)}function Ic(t,e){let n=0;const{shapeFlag:r}=t;if(e==null)e=null;else if(H(e))n=16;else if(typeof e=="object")if(r&65){const s=e.default;s&&(s._c&&(s._d=!1),Ic(t,s()),s._c&&(s._d=!0));return}else{n=32;const s=e._;!s&&!(Ho in e)?e._ctx=wt:s===3&&wt&&(wt.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else te(e)?(e={default:e,_ctx:wt},n=32):(e=String(e),r&64?(n=16,e=[El(e)]):n=8);t.children=e,t.shapeFlag|=n}function rv(...t){const e={};for(let n=0;n<t.length;n++){const r=t[n];for(const s in r)if(s==="class")e.class!==r.class&&(e.class=ac([e.class,r.class]));else if(s==="style")e.style=Gn([e.style,r.style]);else if(Mo(s)){const i=e[s],o=r[s];o&&i!==o&&!(H(i)&&i.includes(o))&&(e[s]=i?[].concat(i,o):o)}else s!==""&&(e[s]=r[s])}return e}function Mt(t,e,n,r=null){St(t,e,7,[n,r])}const sv=Df();let iv=0;function ov(t,e,n){const r=t.type,s=(e?e.appContext:t.appContext)||sv,i={uid:iv++,vnode:t,type:r,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,scope:new A_(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Of(r,s),emitsOptions:If(r,s),emit:null,emitted:null,propsDefaults:we,inheritAttrs:r.inheritAttrs,ctx:we,data:we,props:we,attrs:we,slots:we,refs:we,setupState:we,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=uy.bind(null,i),t.ce&&t.ce(i),i}let Ke=null,Tc,dr,hh="__VUE_INSTANCE_SETTERS__";(dr=ul()[hh])||(dr=ul()[hh]=[]),dr.push(t=>Ke=t),Tc=t=>{dr.length>1?dr.forEach(e=>e(t)):dr[0](t)};const Nr=t=>{Tc(t),t.scope.on()},Hn=()=>{Ke&&Ke.scope.off(),Tc(null)};function Bf(t){return t.vnode.shapeFlag&4}let Os=!1;function av(t,e=!1){Os=e;const{props:n,children:r}=t.vnode,s=Bf(t);qy(t,n,s,e),zy(t,r);const i=s?lv(t,e):void 0;return Os=!1,i}function lv(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=pf(new Proxy(t.ctx,Oy));const{setup:r}=n;if(r){const s=t.setupContext=r.length>1?uv(t):null;Nr(t),Wr();const i=wn(r,t,0,[t.props,s]);if(Gr(),Hn(),Yd(i)){if(i.then(Hn,Hn),e)return i.then(o=>{dh(t,o,e)}).catch(o=>{$o(o,t,0)});t.asyncDep=i}else dh(t,i,e)}else jf(t,e)}function dh(t,e,n){te(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:Ae(e)&&(t.setupState=_f(e)),jf(t,n)}let fh;function jf(t,e,n){const r=t.type;if(!t.render){if(!e&&fh&&!r.render){const s=r.template||wc(t).template;if(s){const{isCustomElement:i,compilerOptions:o}=t.appContext.config,{delimiters:a,compilerOptions:l}=r,c=We(We({isCustomElement:i,delimiters:a},o),l);r.render=fh(s,c)}}t.render=r.render||Pt}Nr(t),Wr(),Vy(t),Gr(),Hn()}function cv(t){return t.attrsProxy||(t.attrsProxy=new Proxy(t.attrs,{get(e,n){return pt(t,"get","$attrs"),e[n]}}))}function uv(t){const e=n=>{t.exposed=n||{}};return{get attrs(){return cv(t)},slots:t.slots,emit:t.emit,expose:e}}function zo(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(_f(pf(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in ys)return ys[n](t)},has(e,n){return n in e||n in ys}}))}function hv(t,e=!0){return te(t)?t.displayName||t.name:t.name||e&&t.__name}function dv(t){return te(t)&&"__vccOpts"in t}const fv=(t,e)=>sy(t,e,Os),pv=Symbol.for("v-scx"),gv=()=>Gi(pv),mv="3.3.4",_v="http://www.w3.org/2000/svg",Fn=typeof document<"u"?document:null,ph=Fn&&Fn.createElement("template"),yv={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,r)=>{const s=e?Fn.createElementNS(_v,t):Fn.createElement(t,n?{is:n}:void 0);return t==="select"&&r&&r.multiple!=null&&s.setAttribute("multiple",r.multiple),s},createText:t=>Fn.createTextNode(t),createComment:t=>Fn.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>Fn.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,r,s,i){const o=n?n.previousSibling:e.lastChild;if(s&&(s===i||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),n),!(s===i||!(s=s.nextSibling)););else{ph.innerHTML=r?`<svg>${t}</svg>`:t;const a=ph.content;if(r){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}};function vv(t,e,n){const r=t._vtc;r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}function wv(t,e,n){const r=t.style,s=Oe(n);if(n&&!s){if(e&&!Oe(e))for(const i in e)n[i]==null&&Il(r,i,"");for(const i in n)Il(r,i,n[i])}else{const i=r.display;s?e!==n&&(r.cssText=n):e&&t.removeAttribute("style"),"_vod"in t&&(r.display=i)}}const gh=/\s*!important$/;function Il(t,e,n){if(H(n))n.forEach(r=>Il(t,e,r));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const r=Ev(t,e);gh.test(n)?t.setProperty(zr(r),n.replace(gh,""),"important"):t[r]=n}}const mh=["Webkit","Moz","ms"],Va={};function Ev(t,e){const n=Va[e];if(n)return n;let r=zt(e);if(r!=="filter"&&r in t)return Va[e]=r;r=Uo(r);for(let s=0;s<mh.length;s++){const i=mh[s]+r;if(i in t)return Va[e]=i}return e}const _h="http://www.w3.org/1999/xlink";function Iv(t,e,n,r,s){if(r&&e.startsWith("xlink:"))n==null?t.removeAttributeNS(_h,e.slice(6,e.length)):t.setAttributeNS(_h,e,n);else{const i=I_(e);n==null||i&&!Zd(n)?t.removeAttribute(e):t.setAttribute(e,i?"":n)}}function Tv(t,e,n,r,s,i,o){if(e==="innerHTML"||e==="textContent"){r&&o(r,s,i),t[e]=n??"";return}const a=t.tagName;if(e==="value"&&a!=="PROGRESS"&&!a.includes("-")){t._value=n;const c=a==="OPTION"?t.getAttribute("value"):t.value,u=n??"";c!==u&&(t.value=u),n==null&&t.removeAttribute(e);return}let l=!1;if(n===""||n==null){const c=typeof t[e];c==="boolean"?n=Zd(n):n==null&&c==="string"?(n="",l=!0):c==="number"&&(n=0,l=!0)}try{t[e]=n}catch{}l&&t.removeAttribute(e)}function fn(t,e,n,r){t.addEventListener(e,n,r)}function Av(t,e,n,r){t.removeEventListener(e,n,r)}function bv(t,e,n,r,s=null){const i=t._vei||(t._vei={}),o=i[e];if(r&&o)o.value=r;else{const[a,l]=Rv(e);if(r){const c=i[e]=Sv(r,s);fn(t,a,c,l)}else o&&(Av(t,a,o,l),i[e]=void 0)}}const yh=/(?:Once|Passive|Capture)$/;function Rv(t){let e;if(yh.test(t)){e={};let r;for(;r=t.match(yh);)t=t.slice(0,t.length-r[0].length),e[r[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):zr(t.slice(2)),e]}let Ma=0;const Cv=Promise.resolve(),Pv=()=>Ma||(Cv.then(()=>Ma=0),Ma=Date.now());function Sv(t,e){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;St(kv(r,n.value),e,5,[r])};return n.value=t,n.attached=Pv(),n}function kv(t,e){if(H(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(r=>s=>!s._stopped&&r&&r(s))}else return e}const vh=/^on[a-z]/,xv=(t,e,n,r,s=!1,i,o,a,l)=>{e==="class"?vv(t,r,s):e==="style"?wv(t,n,r):Mo(e)?sc(e)||bv(t,e,n,r,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):Dv(t,e,r,s))?Tv(t,e,r,i,o,a,l):(e==="true-value"?t._trueValue=r:e==="false-value"&&(t._falseValue=r),Iv(t,e,r,s))};function Dv(t,e,n,r){return r?!!(e==="innerHTML"||e==="textContent"||e in t&&vh.test(e)&&te(n)):e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA"||vh.test(e)&&Oe(n)?!1:e in t}const Or=t=>{const e=t.props["onUpdate:modelValue"]||!1;return H(e)?n=>zi(e,n):e};function Nv(t){t.target.composing=!0}function wh(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const tt={created(t,{modifiers:{lazy:e,trim:n,number:r}},s){t._assign=Or(s);const i=r||s.props&&s.props.type==="number";fn(t,e?"change":"input",o=>{if(o.target.composing)return;let a=t.value;n&&(a=a.trim()),i&&(a=oo(a)),t._assign(a)}),n&&fn(t,"change",()=>{t.value=t.value.trim()}),e||(fn(t,"compositionstart",Nv),fn(t,"compositionend",wh),fn(t,"change",wh))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,modifiers:{lazy:n,trim:r,number:s}},i){if(t._assign=Or(i),t.composing||document.activeElement===t&&t.type!=="range"&&(n||r&&t.value.trim()===e||(s||t.type==="number")&&oo(t.value)===e))return;const o=e??"";t.value!==o&&(t.value=o)}},Tl={deep:!0,created(t,e,n){t._assign=Or(n),fn(t,"change",()=>{const r=t._modelValue,s=Vs(t),i=t.checked,o=t._assign;if(H(r)){const a=lc(r,s),l=a!==-1;if(i&&!l)o(r.concat(s));else if(!i&&l){const c=[...r];c.splice(a,1),o(c)}}else if(Hr(r)){const a=new Set(r);i?a.add(s):a.delete(s),o(a)}else o(qf(t,i))})},mounted:Eh,beforeUpdate(t,e,n){t._assign=Or(n),Eh(t,e,n)}};function Eh(t,{value:e,oldValue:n},r){t._modelValue=e,H(e)?t.checked=lc(e,r.props.value)>-1:Hr(e)?t.checked=e.has(r.props.value):e!==n&&(t.checked=ri(e,qf(t,!0)))}const Ov={deep:!0,created(t,{value:e,modifiers:{number:n}},r){const s=Hr(e);fn(t,"change",()=>{const i=Array.prototype.filter.call(t.options,o=>o.selected).map(o=>n?oo(Vs(o)):Vs(o));t._assign(t.multiple?s?new Set(i):i:i[0])}),t._assign=Or(r)},mounted(t,{value:e}){Ih(t,e)},beforeUpdate(t,e,n){t._assign=Or(n)},updated(t,{value:e}){Ih(t,e)}};function Ih(t,e){const n=t.multiple;if(!(n&&!H(e)&&!Hr(e))){for(let r=0,s=t.options.length;r<s;r++){const i=t.options[r],o=Vs(i);if(n)H(e)?i.selected=lc(e,o)>-1:i.selected=e.has(o);else if(ri(Vs(i),e)){t.selectedIndex!==r&&(t.selectedIndex=r);return}}!n&&t.selectedIndex!==-1&&(t.selectedIndex=-1)}}function Vs(t){return"_value"in t?t._value:t.value}function qf(t,e){const n=e?"_trueValue":"_falseValue";return n in t?t[n]:e}const Vv=We({patchProp:xv},yv);let Th;function Mv(){return Th||(Th=Gy(Vv))}const Lv=(...t)=>{const e=Mv().createApp(...t),{mount:n}=e;return e.mount=r=>{const s=Uv(r);if(!s)return;const i=e._component;!te(i)&&!i.render&&!i.template&&(i.template=s.innerHTML),s.innerHTML="";const o=n(s,!1,s instanceof SVGElement);return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e};function Uv(t){return Oe(t)?document.querySelector(t):t}/**
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
 */const Kf=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},Fv=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=t[n++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=t[n++],o=t[n++],a=t[n++],l=((s&7)<<18|(i&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const i=t[n++],o=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},Hf={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const i=t[s],o=s+1<t.length,a=o?t[s+1]:0,l=s+2<t.length,c=l?t[s+2]:0,u=i>>2,h=(i&3)<<4|a>>4;let d=(a&15)<<2|c>>6,f=c&63;l||(f=64,o||(d=64)),r.push(n[u],n[h],n[d],n[f])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Kf(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):Fv(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const i=n[t.charAt(s++)],a=s<t.length?n[t.charAt(s)]:0;++s;const c=s<t.length?n[t.charAt(s)]:64;++s;const h=s<t.length?n[t.charAt(s)]:64;if(++s,i==null||a==null||c==null||h==null)throw new $v;const d=i<<2|a>>4;if(r.push(d),c!==64){const f=a<<4&240|c>>2;if(r.push(f),h!==64){const _=c<<6&192|h;r.push(_)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class $v extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Bv=function(t){const e=Kf(t);return Hf.encodeByteArray(e,!0)},ho=function(t){return Bv(t).replace(/\./g,"")},zf=function(t){try{return Hf.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function jv(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const qv=()=>jv().__FIREBASE_DEFAULTS__,Kv=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},Hv=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&zf(t[1]);return e&&JSON.parse(e)},Ac=()=>{try{return qv()||Kv()||Hv()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Wf=t=>{var e,n;return(n=(e=Ac())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},zv=t=>{const e=Wf(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},Gf=()=>{var t;return(t=Ac())===null||t===void 0?void 0:t.config},Qf=t=>{var e;return(e=Ac())===null||e===void 0?void 0:e[`_${t}`]};/**
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
 */class Wv{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function Gv(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",s=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},t),a="";return[ho(JSON.stringify(n)),ho(JSON.stringify(o)),a].join(".")}/**
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
 */function it(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Qv(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(it())}function Yv(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function Jv(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Xv(){const t=it();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function Zv(){try{return typeof indexedDB=="object"}catch{return!1}}function ew(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var i;e(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}/**
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
 */const tw="FirebaseError";class cn extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=tw,Object.setPrototypeOf(this,cn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,si.prototype.create)}}class si{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?nw(i,r):"Error",a=`${this.serviceName}: ${o} (${s}).`;return new cn(s,a,r)}}function nw(t,e){return t.replace(rw,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const rw=/\{\$([^}]+)}/g;function sw(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function fo(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const i=t[s],o=e[s];if(Ah(i)&&Ah(o)){if(!fo(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function Ah(t){return t!==null&&typeof t=="object"}/**
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
 */function ii(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function us(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[s,i]=r.split("=");e[decodeURIComponent(s)]=decodeURIComponent(i)}}),e}function hs(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function iw(t,e){const n=new ow(t,e);return n.subscribe.bind(n)}class ow{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let s;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");aw(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:r},s.next===void 0&&(s.next=La),s.error===void 0&&(s.error=La),s.complete===void 0&&(s.complete=La);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function aw(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function La(){}/**
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
 */function Ve(t){return t&&t._delegate?t._delegate:t}class Yn{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Ln="[DEFAULT]";/**
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
 */class lw{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new Wv;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(uw(e))try{this.getOrInitializeService({instanceIdentifier:Ln})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=Ln){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Ln){return this.instances.has(e)}getOptions(e=Ln){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(i);r===a&&o.resolve(s)}return s}onInit(e,n){var r;const s=this.normalizeInstanceIdentifier(n),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(e),this.onInitCallbacks.set(s,i);const o=this.instances.get(s);return o&&e(o,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:cw(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Ln){return this.component?this.component.multipleInstances?e:Ln:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function cw(t){return t===Ln?void 0:t}function uw(t){return t.instantiationMode==="EAGER"}/**
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
 */class hw{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new lw(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var se;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(se||(se={}));const dw={debug:se.DEBUG,verbose:se.VERBOSE,info:se.INFO,warn:se.WARN,error:se.ERROR,silent:se.SILENT},fw=se.INFO,pw={[se.DEBUG]:"log",[se.VERBOSE]:"log",[se.INFO]:"info",[se.WARN]:"warn",[se.ERROR]:"error"},gw=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=pw[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class bc{constructor(e){this.name=e,this._logLevel=fw,this._logHandler=gw,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in se))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?dw[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,se.DEBUG,...e),this._logHandler(this,se.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,se.VERBOSE,...e),this._logHandler(this,se.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,se.INFO,...e),this._logHandler(this,se.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,se.WARN,...e),this._logHandler(this,se.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,se.ERROR,...e),this._logHandler(this,se.ERROR,...e)}}const mw=(t,e)=>e.some(n=>t instanceof n);let bh,Rh;function _w(){return bh||(bh=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function yw(){return Rh||(Rh=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Yf=new WeakMap,Al=new WeakMap,Jf=new WeakMap,Ua=new WeakMap,Rc=new WeakMap;function vw(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(En(t.result)),s()},o=()=>{r(t.error),s()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&Yf.set(n,t)}).catch(()=>{}),Rc.set(e,t),e}function ww(t){if(Al.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),s()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});Al.set(t,e)}let bl={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Al.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Jf.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return En(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function Ew(t){bl=t(bl)}function Iw(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Fa(this),e,...n);return Jf.set(r,e.sort?e.sort():[e]),En(r)}:yw().includes(t)?function(...e){return t.apply(Fa(this),e),En(Yf.get(this))}:function(...e){return En(t.apply(Fa(this),e))}}function Tw(t){return typeof t=="function"?Iw(t):(t instanceof IDBTransaction&&ww(t),mw(t,_w())?new Proxy(t,bl):t)}function En(t){if(t instanceof IDBRequest)return vw(t);if(Ua.has(t))return Ua.get(t);const e=Tw(t);return e!==t&&(Ua.set(t,e),Rc.set(e,t)),e}const Fa=t=>Rc.get(t);function Aw(t,e,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(t,e),a=En(o);return r&&o.addEventListener("upgradeneeded",l=>{r(En(o.result),l.oldVersion,l.newVersion,En(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),a.then(l=>{i&&l.addEventListener("close",()=>i()),s&&l.addEventListener("versionchange",c=>s(c.oldVersion,c.newVersion,c))}).catch(()=>{}),a}const bw=["get","getKey","getAll","getAllKeys","count"],Rw=["put","add","delete","clear"],$a=new Map;function Ch(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if($a.get(e))return $a.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=Rw.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||bw.includes(n)))return;const i=async function(o,...a){const l=this.transaction(o,s?"readwrite":"readonly");let c=l.store;return r&&(c=c.index(a.shift())),(await Promise.all([c[n](...a),s&&l.done]))[0]};return $a.set(e,i),i}Ew(t=>({...t,get:(e,n,r)=>Ch(e,n)||t.get(e,n,r),has:(e,n)=>!!Ch(e,n)||t.has(e,n)}));/**
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
 */class Cw{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Pw(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function Pw(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Rl="@firebase/app",Ph="0.9.19";/**
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
 */const Jn=new bc("@firebase/app"),Sw="@firebase/app-compat",kw="@firebase/analytics-compat",xw="@firebase/analytics",Dw="@firebase/app-check-compat",Nw="@firebase/app-check",Ow="@firebase/auth",Vw="@firebase/auth-compat",Mw="@firebase/database",Lw="@firebase/database-compat",Uw="@firebase/functions",Fw="@firebase/functions-compat",$w="@firebase/installations",Bw="@firebase/installations-compat",jw="@firebase/messaging",qw="@firebase/messaging-compat",Kw="@firebase/performance",Hw="@firebase/performance-compat",zw="@firebase/remote-config",Ww="@firebase/remote-config-compat",Gw="@firebase/storage",Qw="@firebase/storage-compat",Yw="@firebase/firestore",Jw="@firebase/firestore-compat",Xw="firebase",Zw="10.4.0";/**
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
 */const Cl="[DEFAULT]",eE={[Rl]:"fire-core",[Sw]:"fire-core-compat",[xw]:"fire-analytics",[kw]:"fire-analytics-compat",[Nw]:"fire-app-check",[Dw]:"fire-app-check-compat",[Ow]:"fire-auth",[Vw]:"fire-auth-compat",[Mw]:"fire-rtdb",[Lw]:"fire-rtdb-compat",[Uw]:"fire-fn",[Fw]:"fire-fn-compat",[$w]:"fire-iid",[Bw]:"fire-iid-compat",[jw]:"fire-fcm",[qw]:"fire-fcm-compat",[Kw]:"fire-perf",[Hw]:"fire-perf-compat",[zw]:"fire-rc",[Ww]:"fire-rc-compat",[Gw]:"fire-gcs",[Qw]:"fire-gcs-compat",[Yw]:"fire-fst",[Jw]:"fire-fst-compat","fire-js":"fire-js",[Xw]:"fire-js-all"};/**
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
 */const po=new Map,Pl=new Map;function tE(t,e){try{t.container.addComponent(e)}catch(n){Jn.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Vr(t){const e=t.name;if(Pl.has(e))return Jn.debug(`There were multiple attempts to register component ${e}.`),!1;Pl.set(e,t);for(const n of po.values())tE(n,t);return!0}function Cc(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
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
 */const nE={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},In=new si("app","Firebase",nE);/**
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
 */class rE{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Yn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw In.create("app-deleted",{appName:this._name})}}/**
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
 */const Qr=Zw;function Xf(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Cl,automaticDataCollectionEnabled:!1},e),s=r.name;if(typeof s!="string"||!s)throw In.create("bad-app-name",{appName:String(s)});if(n||(n=Gf()),!n)throw In.create("no-options");const i=po.get(s);if(i){if(fo(n,i.options)&&fo(r,i.config))return i;throw In.create("duplicate-app",{appName:s})}const o=new hw(s);for(const l of Pl.values())o.addComponent(l);const a=new rE(n,r,o);return po.set(s,a),a}function Zf(t=Cl){const e=po.get(t);if(!e&&t===Cl&&Gf())return Xf();if(!e)throw In.create("no-app",{appName:t});return e}function Tn(t,e,n){var r;let s=(r=eE[t])!==null&&r!==void 0?r:t;n&&(s+=`-${n}`);const i=s.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const a=[`Unable to register library "${s}" with version "${e}":`];i&&a.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Jn.warn(a.join(" "));return}Vr(new Yn(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
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
 */const sE="firebase-heartbeat-database",iE=1,Ms="firebase-heartbeat-store";let Ba=null;function ep(){return Ba||(Ba=Aw(sE,iE,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Ms)}}}).catch(t=>{throw In.create("idb-open",{originalErrorMessage:t.message})})),Ba}async function oE(t){try{return await(await ep()).transaction(Ms).objectStore(Ms).get(tp(t))}catch(e){if(e instanceof cn)Jn.warn(e.message);else{const n=In.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Jn.warn(n.message)}}}async function Sh(t,e){try{const r=(await ep()).transaction(Ms,"readwrite");await r.objectStore(Ms).put(e,tp(t)),await r.done}catch(n){if(n instanceof cn)Jn.warn(n.message);else{const r=In.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Jn.warn(r.message)}}}function tp(t){return`${t.name}!${t.options.appId}`}/**
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
 */const aE=1024,lE=30*24*60*60*1e3;class cE{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new hE(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=kh();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(s=>s.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(s=>{const i=new Date(s.date).valueOf();return Date.now()-i<=lE}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=kh(),{heartbeatsToSend:n,unsentEntries:r}=uE(this._heartbeatsCache.heartbeats),s=ho(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}}function kh(){return new Date().toISOString().substring(0,10)}function uE(t,e=aE){const n=[];let r=t.slice();for(const s of t){const i=n.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),xh(n)>e){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),xh(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class hE{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Zv()?ew().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await oE(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return Sh(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return Sh(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function xh(t){return ho(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function dE(t){Vr(new Yn("platform-logger",e=>new Cw(e),"PRIVATE")),Vr(new Yn("heartbeat",e=>new cE(e),"PRIVATE")),Tn(Rl,Ph,t),Tn(Rl,Ph,"esm2017"),Tn("fire-js","")}dE("");function Pc(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(t);s<r.length;s++)e.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(t,r[s])&&(n[r[s]]=t[r[s]]);return n}function Dh(t){return t!==void 0&&t.enterprise!==void 0}class fE{constructor(e){if(this.siteKey="",this.emailPasswordEnabled=!1,e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.emailPasswordEnabled=e.recaptchaEnforcementState.some(n=>n.provider==="EMAIL_PASSWORD_PROVIDER"&&n.enforcementState!=="OFF")}}function np(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const pE=np,rp=new si("auth","Firebase",np());/**
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
 */const go=new bc("@firebase/auth");function gE(t,...e){go.logLevel<=se.WARN&&go.warn(`Auth (${Qr}): ${t}`,...e)}function Ji(t,...e){go.logLevel<=se.ERROR&&go.error(`Auth (${Qr}): ${t}`,...e)}/**
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
 */function kt(t,...e){throw Sc(t,...e)}function jt(t,...e){return Sc(t,...e)}function mE(t,e,n){const r=Object.assign(Object.assign({},pE()),{[e]:n});return new si("auth","Firebase",r).create(e,{appName:t.name})}function Sc(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return rp.create(t,...e)}function z(t,e,...n){if(!t)throw Sc(e,...n)}function Jt(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Ji(e),new Error(e)}function rn(t,e){t||Jt(e)}/**
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
 */function Sl(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function _E(){return Nh()==="http:"||Nh()==="https:"}function Nh(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function yE(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(_E()||Yv()||"connection"in navigator)?navigator.onLine:!0}function vE(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class oi{constructor(e,n){this.shortDelay=e,this.longDelay=n,rn(n>e,"Short delay should be less than long delay!"),this.isMobile=Qv()||Jv()}get(){return yE()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function kc(t,e){rn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class sp{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;Jt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;Jt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;Jt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const wE={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const EE=new oi(3e4,6e4);function rr(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Sn(t,e,n,r,s={}){return ip(t,s,async()=>{let i={},o={};r&&(e==="GET"?o=r:i={body:JSON.stringify(r)});const a=ii(Object.assign({key:t.config.apiKey},o)).slice(1),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode),sp.fetch()(op(t,t.config.apiHost,n,a),Object.assign({method:e,headers:l,referrerPolicy:"no-referrer"},i))})}async function ip(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},wE),e);try{const s=new IE(t),i=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw Vi(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const a=i.ok?o.errorMessage:o.error.message,[l,c]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw Vi(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw Vi(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw Vi(t,"user-disabled",o);const u=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw mE(t,u,c);kt(t,u)}}catch(s){if(s instanceof cn)throw s;kt(t,"network-request-failed",{message:String(s)})}}async function ai(t,e,n,r,s={}){const i=await Sn(t,e,n,r,s);return"mfaPendingCredential"in i&&kt(t,"multi-factor-auth-required",{_serverResponse:i}),i}function op(t,e,n,r){const s=`${e}${n}?${r}`;return t.config.emulator?kc(t.config,s):`${t.config.apiScheme}://${s}`}class IE{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(jt(this.auth,"network-request-failed")),EE.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Vi(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=jt(t,e,r);return s.customData._tokenResponse=n,s}async function TE(t,e){return Sn(t,"GET","/v2/recaptchaConfig",rr(t,e))}/**
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
 */async function AE(t,e){return Sn(t,"POST","/v1/accounts:delete",e)}async function bE(t,e){return Sn(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function Es(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function RE(t,e=!1){const n=Ve(t),r=await n.getIdToken(e),s=xc(r);z(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:Es(ja(s.auth_time)),issuedAtTime:Es(ja(s.iat)),expirationTime:Es(ja(s.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function ja(t){return Number(t)*1e3}function xc(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return Ji("JWT malformed, contained fewer than 3 sections"),null;try{const s=zf(n);return s?JSON.parse(s):(Ji("Failed to decode base64 JWT payload"),null)}catch(s){return Ji("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function CE(t){const e=xc(t);return z(e,"internal-error"),z(typeof e.exp<"u","internal-error"),z(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function Mr(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof cn&&PE(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function PE({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class SE{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const s=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class ap{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Es(this.lastLoginAt),this.creationTime=Es(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function mo(t){var e;const n=t.auth,r=await t.getIdToken(),s=await Mr(t,bE(n,{idToken:r}));z(s==null?void 0:s.users.length,n,"internal-error");const i=s.users[0];t._notifyReloadListener(i);const o=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?DE(i.providerUserInfo):[],a=xE(t.providerData,o),l=t.isAnonymous,c=!(t.email&&i.passwordHash)&&!(a!=null&&a.length),u=l?c:!1,h={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:a,metadata:new ap(i.createdAt,i.lastLoginAt),isAnonymous:u};Object.assign(t,h)}async function kE(t){const e=Ve(t);await mo(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function xE(t,e){return[...t.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function DE(t){return t.map(e=>{var{providerId:n}=e,r=Pc(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function NE(t,e){const n=await ip(t,{},async()=>{const r=ii({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=t.config,o=op(t,s,"/v1/token",`key=${i}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",sp.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
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
 */class Ls{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){z(e.idToken,"internal-error"),z(typeof e.idToken<"u","internal-error"),z(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):CE(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return z(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:s,expiresIn:i}=await NE(e,n);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:s,expirationTime:i}=n,o=new Ls;return r&&(z(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),s&&(z(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&(z(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Ls,this.toJSON())}_performRefresh(){return Jt("not implemented")}}/**
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
 */function hn(t,e){z(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class zn{constructor(e){var{uid:n,auth:r,stsTokenManager:s}=e,i=Pc(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new SE(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new ap(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await Mr(this,this.stsTokenManager.getToken(this.auth,e));return z(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return RE(this,e)}reload(){return kE(this)}_assign(e){this!==e&&(z(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new zn(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){z(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await mo(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await Mr(this,AE(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,s,i,o,a,l,c,u;const h=(r=n.displayName)!==null&&r!==void 0?r:void 0,d=(s=n.email)!==null&&s!==void 0?s:void 0,f=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,_=(o=n.photoURL)!==null&&o!==void 0?o:void 0,m=(a=n.tenantId)!==null&&a!==void 0?a:void 0,E=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,M=(c=n.createdAt)!==null&&c!==void 0?c:void 0,y=(u=n.lastLoginAt)!==null&&u!==void 0?u:void 0,{uid:R,emailVerified:C,isAnonymous:$,providerData:X,stsTokenManager:G}=n;z(R&&G,e,"internal-error");const O=Ls.fromJSON(this.name,G);z(typeof R=="string",e,"internal-error"),hn(h,e.name),hn(d,e.name),z(typeof C=="boolean",e,"internal-error"),z(typeof $=="boolean",e,"internal-error"),hn(f,e.name),hn(_,e.name),hn(m,e.name),hn(E,e.name),hn(M,e.name),hn(y,e.name);const k=new zn({uid:R,auth:e,email:d,emailVerified:C,displayName:h,isAnonymous:$,photoURL:_,phoneNumber:f,tenantId:m,stsTokenManager:O,createdAt:M,lastLoginAt:y});return X&&Array.isArray(X)&&(k.providerData=X.map(ee=>Object.assign({},ee))),E&&(k._redirectEventId=E),k}static async _fromIdTokenResponse(e,n,r=!1){const s=new Ls;s.updateFromServerResponse(n);const i=new zn({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await mo(i),i}}/**
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
 */const Oh=new Map;function Xt(t){rn(t instanceof Function,"Expected a class definition");let e=Oh.get(t);return e?(rn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Oh.set(t,e),e)}/**
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
 */class lp{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}lp.type="NONE";const Vh=lp;/**
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
 */function Xi(t,e,n){return`firebase:${t}:${e}:${n}`}class br{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=Xi(this.userKey,s.apiKey,i),this.fullPersistenceKey=Xi("persistence",s.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?zn._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new br(Xt(Vh),e,r);const s=(await Promise.all(n.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let i=s[0]||Xt(Vh);const o=Xi(r,e.config.apiKey,e.name);let a=null;for(const c of n)try{const u=await c._get(o);if(u){const h=zn._fromJSON(e,u);c!==i&&(a=h),i=c;break}}catch{}const l=s.filter(c=>c._shouldAllowMigration);return!i._shouldAllowMigration||!l.length?new br(i,e,r):(i=l[0],a&&await i._set(o,a.toJSON()),await Promise.all(n.map(async c=>{if(c!==i)try{await c._remove(o)}catch{}})),new br(i,e,r))}}/**
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
 */function Mh(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(hp(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(cp(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(fp(e))return"Blackberry";if(pp(e))return"Webos";if(Dc(e))return"Safari";if((e.includes("chrome/")||up(e))&&!e.includes("edge/"))return"Chrome";if(dp(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function cp(t=it()){return/firefox\//i.test(t)}function Dc(t=it()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function up(t=it()){return/crios\//i.test(t)}function hp(t=it()){return/iemobile/i.test(t)}function dp(t=it()){return/android/i.test(t)}function fp(t=it()){return/blackberry/i.test(t)}function pp(t=it()){return/webos/i.test(t)}function Wo(t=it()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function OE(t=it()){var e;return Wo(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function VE(){return Xv()&&document.documentMode===10}function gp(t=it()){return Wo(t)||dp(t)||pp(t)||fp(t)||/windows phone/i.test(t)||hp(t)}function ME(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
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
 */function mp(t,e=[]){let n;switch(t){case"Browser":n=Mh(it());break;case"Worker":n=`${Mh(it())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Qr}/${r}`}/**
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
 */class LE{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=i=>new Promise((o,a)=>{try{const l=e(i);o(l)}catch(l){a(l)}});r.onAbort=n,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const s of n)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function UE(t,e={}){return Sn(t,"GET","/v2/passwordPolicy",rr(t,e))}/**
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
 */const FE=6;class $E{constructor(e){var n,r,s,i;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:FE,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(s=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&s!==void 0?s:"",this.forceUpgradeOnSignin=(i=e.forceUpgradeOnSignin)!==null&&i!==void 0?i:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,s,i,o,a;const l={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,l),this.validatePasswordCharacterOptions(e,l),l.isValid&&(l.isValid=(n=l.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),l.isValid&&(l.isValid=(r=l.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),l.isValid&&(l.isValid=(s=l.containsLowercaseLetter)!==null&&s!==void 0?s:!0),l.isValid&&(l.isValid=(i=l.containsUppercaseLetter)!==null&&i!==void 0?i:!0),l.isValid&&(l.isValid=(o=l.containsNumericCharacter)!==null&&o!==void 0?o:!0),l.isValid&&(l.isValid=(a=l.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),l}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),s&&(n.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
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
 */class BE{constructor(e,n,r,s){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Lh(this),this.idTokenSubscription=new Lh(this),this.beforeStateQueue=new LE(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=rp,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Xt(n)),this._initializationPromise=this.queue(async()=>{var r,s;if(!this._deleted&&(this.persistenceManager=await br.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const r=await this.assertedPersistence.getCurrentUser();let s=r,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=s==null?void 0:s._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===a)&&(l!=null&&l.user)&&(s=l.user,i=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(s)}catch(o){s=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return z(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await mo(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=vE()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?Ve(e):null;return n&&z(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&z(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(Xt(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await UE(this),n=new $E(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new si("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Xt(e)||this._popupRedirectResolver;z(n,this,"argument-error"),this.redirectPersistenceManager=await br.create(this,[Xt(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,s){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(z(a,this,"internal-error"),a.then(()=>{o||i(this.currentUser)}),typeof n=="function"){const l=e.addObserver(n,r,s);return()=>{o=!0,l()}}else{const l=e.addObserver(n);return()=>{o=!0,l()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return z(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=mp(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const s=await this._getAppCheckToken();return s&&(n["X-Firebase-AppCheck"]=s),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&gE(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function sr(t){return Ve(t)}class Lh{constructor(e){this.auth=e,this.observer=null,this.addObserver=iw(n=>this.observer=n)}get next(){return z(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */function jE(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function _p(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=s=>{const i=jt("internal-error");i.customData=s,n(i)},r.type="text/javascript",r.charset="UTF-8",jE().appendChild(r)})}function qE(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const KE="https://www.google.com/recaptcha/enterprise.js?render=",HE="recaptcha-enterprise",zE="NO_RECAPTCHA";class WE{constructor(e){this.type=HE,this.auth=sr(e)}async verify(e="verify",n=!1){async function r(i){if(!n){if(i.tenantId==null&&i._agentRecaptchaConfig!=null)return i._agentRecaptchaConfig.siteKey;if(i.tenantId!=null&&i._tenantRecaptchaConfigs[i.tenantId]!==void 0)return i._tenantRecaptchaConfigs[i.tenantId].siteKey}return new Promise(async(o,a)=>{TE(i,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const c=new fE(l);return i.tenantId==null?i._agentRecaptchaConfig=c:i._tenantRecaptchaConfigs[i.tenantId]=c,o(c.siteKey)}}).catch(l=>{a(l)})})}function s(i,o,a){const l=window.grecaptcha;Dh(l)?l.enterprise.ready(()=>{l.enterprise.execute(i,{action:e}).then(c=>{o(c)}).catch(()=>{o(zE)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((i,o)=>{r(this.auth).then(a=>{if(!n&&Dh(window.grecaptcha))s(a,i,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}_p(KE+a).then(()=>{s(a,i,o)}).catch(l=>{o(l)})}}).catch(a=>{o(a)})})}}async function _o(t,e,n,r=!1){const s=new WE(t);let i;try{i=await s.verify(n)}catch{i=await s.verify(n,!0)}const o=Object.assign({},e);return r?Object.assign(o,{captchaResp:i}):Object.assign(o,{captchaResponse:i}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}/**
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
 */function GE(t,e){const n=Cc(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),i=n.getOptions();if(fo(i,e??{}))return s;kt(s,"already-initialized")}return n.initialize({options:e})}function QE(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Xt);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function YE(t,e,n){const r=sr(t);z(r._canInitEmulator,r,"emulator-config-failed"),z(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!!(n!=null&&n.disableWarnings),i=yp(e),{host:o,port:a}=JE(e),l=a===null?"":`:${a}`;r.config.emulator={url:`${i}//${o}${l}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})}),s||XE()}function yp(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function JE(t){const e=yp(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:Uh(r.substr(i.length+1))}}else{const[i,o]=r.split(":");return{host:i,port:Uh(o)}}}function Uh(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function XE(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class Nc{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Jt("not implemented")}_getIdTokenResponse(e){return Jt("not implemented")}_linkToIdToken(e,n){return Jt("not implemented")}_getReauthenticationResolver(e){return Jt("not implemented")}}async function ZE(t,e){return Sn(t,"POST","/v1/accounts:update",e)}/**
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
 */async function qa(t,e){return ai(t,"POST","/v1/accounts:signInWithPassword",rr(t,e))}/**
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
 */async function eI(t,e){return ai(t,"POST","/v1/accounts:signInWithEmailLink",rr(t,e))}async function tI(t,e){return ai(t,"POST","/v1/accounts:signInWithEmailLink",rr(t,e))}/**
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
 */class Us extends Nc{constructor(e,n,r,s=null){super("password",r),this._email=e,this._password=n,this._tenantId=s}static _fromEmailAndPassword(e,n){return new Us(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new Us(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){var n;switch(this.signInMethod){case"password":const r={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};if(!((n=e._getRecaptchaConfig())===null||n===void 0)&&n.emailPasswordEnabled){const s=await _o(e,r,"signInWithPassword");return qa(e,s)}else return qa(e,r).catch(async s=>{if(s.code==="auth/missing-recaptcha-token"){console.log("Sign-in with email address and password is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-in flow.");const i=await _o(e,r,"signInWithPassword");return qa(e,i)}else return Promise.reject(s)});case"emailLink":return eI(e,{email:this._email,oobCode:this._password});default:kt(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":return ZE(e,{idToken:n,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return tI(e,{idToken:n,email:this._email,oobCode:this._password});default:kt(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function Rr(t,e){return ai(t,"POST","/v1/accounts:signInWithIdp",rr(t,e))}/**
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
 */const nI="http://localhost";class Xn extends Nc{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Xn(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):kt("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s}=n,i=Pc(n,["providerId","signInMethod"]);if(!r||!s)return null;const o=new Xn(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Rr(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Rr(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Rr(e,n)}buildRequest(){const e={requestUri:nI,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=ii(n)}return e}}/**
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
 */function rI(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function sI(t){const e=us(hs(t)).link,n=e?us(hs(e)).deep_link_id:null,r=us(hs(t)).deep_link_id;return(r?us(hs(r)).link:null)||r||n||e||t}class Oc{constructor(e){var n,r,s,i,o,a;const l=us(hs(e)),c=(n=l.apiKey)!==null&&n!==void 0?n:null,u=(r=l.oobCode)!==null&&r!==void 0?r:null,h=rI((s=l.mode)!==null&&s!==void 0?s:null);z(c&&u&&h,"argument-error"),this.apiKey=c,this.operation=h,this.code=u,this.continueUrl=(i=l.continueUrl)!==null&&i!==void 0?i:null,this.languageCode=(o=l.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=l.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=sI(e);try{return new Oc(n)}catch{return null}}}/**
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
 */class Yr{constructor(){this.providerId=Yr.PROVIDER_ID}static credential(e,n){return Us._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=Oc.parseLink(n);return z(r,"argument-error"),Us._fromEmailAndCode(e,r.code,r.tenantId)}}Yr.PROVIDER_ID="password";Yr.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Yr.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class vp{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class li extends vp{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class pn extends li{constructor(){super("facebook.com")}static credential(e){return Xn._fromParams({providerId:pn.PROVIDER_ID,signInMethod:pn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return pn.credentialFromTaggedObject(e)}static credentialFromError(e){return pn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return pn.credential(e.oauthAccessToken)}catch{return null}}}pn.FACEBOOK_SIGN_IN_METHOD="facebook.com";pn.PROVIDER_ID="facebook.com";/**
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
 */class gn extends li{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Xn._fromParams({providerId:gn.PROVIDER_ID,signInMethod:gn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return gn.credentialFromTaggedObject(e)}static credentialFromError(e){return gn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return gn.credential(n,r)}catch{return null}}}gn.GOOGLE_SIGN_IN_METHOD="google.com";gn.PROVIDER_ID="google.com";/**
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
 */class mn extends li{constructor(){super("github.com")}static credential(e){return Xn._fromParams({providerId:mn.PROVIDER_ID,signInMethod:mn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return mn.credentialFromTaggedObject(e)}static credentialFromError(e){return mn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return mn.credential(e.oauthAccessToken)}catch{return null}}}mn.GITHUB_SIGN_IN_METHOD="github.com";mn.PROVIDER_ID="github.com";/**
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
 */class _n extends li{constructor(){super("twitter.com")}static credential(e,n){return Xn._fromParams({providerId:_n.PROVIDER_ID,signInMethod:_n.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return _n.credentialFromTaggedObject(e)}static credentialFromError(e){return _n.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return _n.credential(n,r)}catch{return null}}}_n.TWITTER_SIGN_IN_METHOD="twitter.com";_n.PROVIDER_ID="twitter.com";/**
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
 */async function Ka(t,e){return ai(t,"POST","/v1/accounts:signUp",rr(t,e))}/**
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
 */class Zn{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,s=!1){const i=await zn._fromIdTokenResponse(e,r,s),o=Fh(r);return new Zn({user:i,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const s=Fh(r);return new Zn({user:e,providerId:s,_tokenResponse:r,operationType:n})}}function Fh(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class yo extends cn{constructor(e,n,r,s){var i;super(n.code,n.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,yo.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,s){return new yo(e,n,r,s)}}function wp(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?yo._fromErrorAndOperation(t,i,e,r):i})}async function iI(t,e,n=!1){const r=await Mr(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Zn._forOperation(t,"link",r)}/**
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
 */async function oI(t,e,n=!1){const{auth:r}=t,s="reauthenticate";try{const i=await Mr(t,wp(r,s,e,t),n);z(i.idToken,r,"internal-error");const o=xc(i.idToken);z(o,r,"internal-error");const{sub:a}=o;return z(t.uid===a,r,"user-mismatch"),Zn._forOperation(t,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&kt(r,"user-mismatch"),i}}/**
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
 */async function Ep(t,e,n=!1){const r="signIn",s=await wp(t,r,e),i=await Zn._fromIdTokenResponse(t,r,s);return n||await t._updateCurrentUser(i.user),i}async function aI(t,e){return Ep(sr(t),e)}/**
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
 */async function Ip(t){const e=sr(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function lI(t,e,n){var r;const s=sr(t),i={returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"};let o;if(!((r=s._getRecaptchaConfig())===null||r===void 0)&&r.emailPasswordEnabled){const c=await _o(s,i,"signUpPassword");o=Ka(s,c)}else o=Ka(s,i).catch(async c=>{if(c.code==="auth/missing-recaptcha-token"){console.log("Sign-up is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-up flow.");const u=await _o(s,i,"signUpPassword");return Ka(s,u)}throw c});const a=await o.catch(c=>{throw c.code==="auth/password-does-not-meet-requirements"&&Ip(t),c}),l=await Zn._fromIdTokenResponse(s,"signIn",a);return await s._updateCurrentUser(l.user),l}function cI(t,e,n){return aI(Ve(t),Yr.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&Ip(t),r})}/**
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
 */async function uI(t,e){return Sn(t,"POST","/v1/accounts:update",e)}/**
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
 */async function Tp(t,{displayName:e,photoURL:n}){if(e===void 0&&n===void 0)return;const r=Ve(t),i={idToken:await r.getIdToken(),displayName:e,photoUrl:n,returnSecureToken:!0},o=await Mr(r,uI(r.auth,i));r.displayName=o.displayName||null,r.photoURL=o.photoUrl||null;const a=r.providerData.find(({providerId:l})=>l==="password");a&&(a.displayName=r.displayName,a.photoURL=r.photoURL),await r._updateTokensIfNecessary(o)}function hI(t,e,n,r){return Ve(t).onIdTokenChanged(e,n,r)}function dI(t,e,n){return Ve(t).beforeAuthStateChanged(e,n)}function fI(t,e,n,r){return Ve(t).onAuthStateChanged(e,n,r)}function pI(t){return Ve(t).signOut()}const vo="__sak";/**
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
 */class Ap{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(vo,"1"),this.storage.removeItem(vo),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */function gI(){const t=it();return Dc(t)||Wo(t)}const mI=1e3,_I=10;class bp extends Ap{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=gI()&&ME(),this.fallbackToPolling=gp(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),s=this.localCache[n];r!==s&&e(n,s,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const s=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);VE()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,_I):s()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},mI)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}bp.type="LOCAL";const yI=bp;/**
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
 */class Rp extends Ap{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}Rp.type="SESSION";const Cp=Rp;/**
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
 */function vI(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class Go{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const r=new Go(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:s,data:i}=n.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const a=Array.from(o).map(async c=>c(n.origin,i)),l=await vI(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Go.receivers=[];/**
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
 */function Vc(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class wI{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((a,l)=>{const c=Vc("",20);s.port1.start();const u=setTimeout(()=>{l(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(h){const d=h;if(d.data.eventId===c)switch(d.data.status){case"ack":clearTimeout(u),i=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),a(d.data.response);break;default:clearTimeout(u),clearTimeout(i),l(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:c,data:n},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function qt(){return window}function EI(t){qt().location.href=t}/**
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
 */function Pp(){return typeof qt().WorkerGlobalScope<"u"&&typeof qt().importScripts=="function"}async function II(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function TI(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function AI(){return Pp()?self:null}/**
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
 */const Sp="firebaseLocalStorageDb",bI=1,wo="firebaseLocalStorage",kp="fbase_key";class ci{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Qo(t,e){return t.transaction([wo],e?"readwrite":"readonly").objectStore(wo)}function RI(){const t=indexedDB.deleteDatabase(Sp);return new ci(t).toPromise()}function kl(){const t=indexedDB.open(Sp,bI);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(wo,{keyPath:kp})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(wo)?e(r):(r.close(),await RI(),e(await kl()))})})}async function $h(t,e,n){const r=Qo(t,!0).put({[kp]:e,value:n});return new ci(r).toPromise()}async function CI(t,e){const n=Qo(t,!1).get(e),r=await new ci(n).toPromise();return r===void 0?null:r.value}function Bh(t,e){const n=Qo(t,!0).delete(e);return new ci(n).toPromise()}const PI=800,SI=3;class xp{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await kl(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>SI)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Pp()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Go._getInstance(AI()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await II(),!this.activeServiceWorker)return;this.sender=new wI(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||TI()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await kl();return await $h(e,vo,"1"),await Bh(e,vo),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>$h(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>CI(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Bh(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=Qo(s,!1).getAll();return new ci(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),PI)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}xp.type="LOCAL";const kI=xp;new oi(3e4,6e4);/**
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
 */function xI(t,e){return e?Xt(e):(z(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class Mc extends Nc{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Rr(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Rr(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Rr(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function DI(t){return Ep(t.auth,new Mc(t),t.bypassAuthState)}function NI(t){const{auth:e,user:n}=t;return z(n,e,"internal-error"),oI(n,new Mc(t),t.bypassAuthState)}async function OI(t){const{auth:e,user:n}=t;return z(n,e,"internal-error"),iI(n,new Mc(t),t.bypassAuthState)}/**
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
 */class Dp{constructor(e,n,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:s,tenantId:i,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return DI;case"linkViaPopup":case"linkViaRedirect":return OI;case"reauthViaPopup":case"reauthViaRedirect":return NI;default:kt(this.auth,"internal-error")}}resolve(e){rn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){rn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const VI=new oi(2e3,1e4);class vr extends Dp{constructor(e,n,r,s,i){super(e,n,s,i),this.provider=r,this.authWindow=null,this.pollId=null,vr.currentPopupAction&&vr.currentPopupAction.cancel(),vr.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return z(e,this.auth,"internal-error"),e}async onExecution(){rn(this.filter.length===1,"Popup operations only handle one event");const e=Vc();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(jt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(jt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,vr.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(jt(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,VI.get())};e()}}vr.currentPopupAction=null;/**
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
 */const MI="pendingRedirect",Zi=new Map;class LI extends Dp{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=Zi.get(this.auth._key());if(!e){try{const r=await UI(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Zi.set(this.auth._key(),e)}return this.bypassAuthState||Zi.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function UI(t,e){const n=BI(e),r=$I(t);if(!await r._isAvailable())return!1;const s=await r._get(n)==="true";return await r._remove(n),s}function FI(t,e){Zi.set(t._key(),e)}function $I(t){return Xt(t._redirectPersistence)}function BI(t){return Xi(MI,t.config.apiKey,t.name)}async function jI(t,e,n=!1){const r=sr(t),s=xI(r,e),o=await new LI(r,s,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
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
 */const qI=10*60*1e3;class KI{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!HI(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!Np(e)){const s=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(jt(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=qI&&this.cachedEventUids.clear(),this.cachedEventUids.has(jh(e))}saveEventToCache(e){this.cachedEventUids.add(jh(e)),this.lastProcessedEventTime=Date.now()}}function jh(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function Np({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function HI(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Np(t);default:return!1}}/**
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
 */async function zI(t,e={}){return Sn(t,"GET","/v1/projects",e)}/**
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
 */const WI=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,GI=/^https?/;async function QI(t){if(t.config.emulator)return;const{authorizedDomains:e}=await zI(t);for(const n of e)try{if(YI(n))return}catch{}kt(t,"unauthorized-domain")}function YI(t){const e=Sl(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!GI.test(n))return!1;if(WI.test(t))return r===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
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
 */const JI=new oi(3e4,6e4);function qh(){const t=qt().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function XI(t){return new Promise((e,n)=>{var r,s,i;function o(){qh(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{qh(),n(jt(t,"network-request-failed"))},timeout:JI.get()})}if(!((s=(r=qt().gapi)===null||r===void 0?void 0:r.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((i=qt().gapi)===null||i===void 0)&&i.load)o();else{const a=qE("iframefcb");return qt()[a]=()=>{gapi.load?o():n(jt(t,"network-request-failed"))},_p(`https://apis.google.com/js/api.js?onload=${a}`).catch(l=>n(l))}}).catch(e=>{throw eo=null,e})}let eo=null;function ZI(t){return eo=eo||XI(t),eo}/**
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
 */const eT=new oi(5e3,15e3),tT="__/auth/iframe",nT="emulator/auth/iframe",rT={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},sT=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function iT(t){const e=t.config;z(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?kc(e,nT):`https://${t.config.authDomain}/${tT}`,r={apiKey:e.apiKey,appName:t.name,v:Qr},s=sT.get(t.config.apiHost);s&&(r.eid=s);const i=t._getFrameworks();return i.length&&(r.fw=i.join(",")),`${n}?${ii(r).slice(1)}`}async function oT(t){const e=await ZI(t),n=qt().gapi;return z(n,t,"internal-error"),e.open({where:document.body,url:iT(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:rT,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=jt(t,"network-request-failed"),a=qt().setTimeout(()=>{i(o)},eT.get());function l(){qt().clearTimeout(a),s(r)}r.ping(l).then(l,()=>{i(o)})}))}/**
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
 */const aT={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},lT=500,cT=600,uT="_blank",hT="http://localhost";class Kh{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function dT(t,e,n,r=lT,s=cT){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const l=Object.assign(Object.assign({},aT),{width:r.toString(),height:s.toString(),top:i,left:o}),c=it().toLowerCase();n&&(a=up(c)?uT:n),cp(c)&&(e=e||hT,l.scrollbars="yes");const u=Object.entries(l).reduce((d,[f,_])=>`${d}${f}=${_},`,"");if(OE(c)&&a!=="_self")return fT(e||"",a),new Kh(null);const h=window.open(e||"",a,u);z(h,t,"popup-blocked");try{h.focus()}catch{}return new Kh(h)}function fT(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const pT="__/auth/handler",gT="emulator/auth/handler",mT=encodeURIComponent("fac");async function Hh(t,e,n,r,s,i){z(t.config.authDomain,t,"auth-domain-config-required"),z(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Qr,eventId:s};if(e instanceof vp){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",sw(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[u,h]of Object.entries(i||{}))o[u]=h}if(e instanceof li){const u=e.getScopes().filter(h=>h!=="");u.length>0&&(o.scopes=u.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const u of Object.keys(a))a[u]===void 0&&delete a[u];const l=await t._getAppCheckToken(),c=l?`#${mT}=${encodeURIComponent(l)}`:"";return`${_T(t)}?${ii(a).slice(1)}${c}`}function _T({config:t}){return t.emulator?kc(t,gT):`https://${t.authDomain}/${pT}`}/**
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
 */const Ha="webStorageSupport";class yT{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Cp,this._completeRedirectFn=jI,this._overrideRedirectResult=FI}async _openPopup(e,n,r,s){var i;rn((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=await Hh(e,n,r,Sl(),s);return dT(e,o,Vc())}async _openRedirect(e,n,r,s){await this._originValidation(e);const i=await Hh(e,n,r,Sl(),s);return EI(i),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:i}=this.eventManagers[n];return s?Promise.resolve(s):(rn(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await oT(e),r=new KI(e);return n.register("authEvent",s=>(z(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Ha,{type:Ha},s=>{var i;const o=(i=s==null?void 0:s[0])===null||i===void 0?void 0:i[Ha];o!==void 0&&n(!!o),kt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=QI(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return gp()||Dc()||Wo()}}const vT=yT;var zh="@firebase/auth",Wh="1.3.0";/**
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
 */class wT{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){z(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function ET(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function IT(t){Vr(new Yn("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;z(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const l={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:mp(t)},c=new BE(r,s,i,l);return QE(c,n),c},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Vr(new Yn("auth-internal",e=>{const n=sr(e.getProvider("auth").getImmediate());return(r=>new wT(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Tn(zh,Wh,ET(t)),Tn(zh,Wh,"esm2017")}/**
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
 */const TT=5*60,AT=Qf("authIdTokenMaxAge")||TT;let Gh=null;const bT=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>AT)return;const s=n==null?void 0:n.token;Gh!==s&&(Gh=s,await fetch(t,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function RT(t=Zf()){const e=Cc(t,"auth");if(e.isInitialized())return e.getImmediate();const n=GE(t,{popupRedirectResolver:vT,persistence:[kI,yI,Cp]}),r=Qf("authTokenSyncURL");if(r){const i=bT(r);dI(n,i,()=>i(n.currentUser)),hI(n,o=>i(o))}const s=Wf("auth");return s&&YE(n,`http://${s}`),n}IT("Browser");var CT=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},N,Lc=Lc||{},Q=CT||self;function Yo(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function ui(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function PT(t){return Object.prototype.hasOwnProperty.call(t,za)&&t[za]||(t[za]=++ST)}var za="closure_uid_"+(1e9*Math.random()>>>0),ST=0;function kT(t,e,n){return t.call.apply(t.bind,arguments)}function xT(t,e,n){if(!t)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var s=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(s,r),t.apply(e,s)}}return function(){return t.apply(e,arguments)}}function nt(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?nt=kT:nt=xT,nt.apply(null,arguments)}function Mi(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var r=n.slice();return r.push.apply(r,arguments),t.apply(this,r)}}function Ue(t,e){function n(){}n.prototype=e.prototype,t.$=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.ac=function(r,s,i){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[s].apply(r,o)}}function kn(){this.s=this.s,this.o=this.o}var DT=0;kn.prototype.s=!1;kn.prototype.sa=function(){!this.s&&(this.s=!0,this.N(),DT!=0)&&PT(this)};kn.prototype.N=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const Op=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1};function Uc(t){const e=t.length;if(0<e){const n=Array(e);for(let r=0;r<e;r++)n[r]=t[r];return n}return[]}function Qh(t,e){for(let n=1;n<arguments.length;n++){const r=arguments[n];if(Yo(r)){const s=t.length||0,i=r.length||0;t.length=s+i;for(let o=0;o<i;o++)t[s+o]=r[o]}else t.push(r)}}function rt(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}rt.prototype.h=function(){this.defaultPrevented=!0};var NT=function(){if(!Q.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{Q.addEventListener("test",()=>{},e),Q.removeEventListener("test",()=>{},e)}catch{}return t}();function Fs(t){return/^[\s\xa0]*$/.test(t)}function Jo(){var t=Q.navigator;return t&&(t=t.userAgent)?t:""}function Ft(t){return Jo().indexOf(t)!=-1}function Fc(t){return Fc[" "](t),t}Fc[" "]=function(){};function OT(t,e){var n=R0;return Object.prototype.hasOwnProperty.call(n,t)?n[t]:n[t]=e(t)}var VT=Ft("Opera"),Lr=Ft("Trident")||Ft("MSIE"),Vp=Ft("Edge"),xl=Vp||Lr,Mp=Ft("Gecko")&&!(Jo().toLowerCase().indexOf("webkit")!=-1&&!Ft("Edge"))&&!(Ft("Trident")||Ft("MSIE"))&&!Ft("Edge"),MT=Jo().toLowerCase().indexOf("webkit")!=-1&&!Ft("Edge");function Lp(){var t=Q.document;return t?t.documentMode:void 0}var Dl;e:{var Wa="",Ga=function(){var t=Jo();if(Mp)return/rv:([^\);]+)(\)|;)/.exec(t);if(Vp)return/Edge\/([\d\.]+)/.exec(t);if(Lr)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(MT)return/WebKit\/(\S+)/.exec(t);if(VT)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(Ga&&(Wa=Ga?Ga[1]:""),Lr){var Qa=Lp();if(Qa!=null&&Qa>parseFloat(Wa)){Dl=String(Qa);break e}}Dl=Wa}var Nl;if(Q.document&&Lr){var Yh=Lp();Nl=Yh||parseInt(Dl,10)||void 0}else Nl=void 0;var LT=Nl;function $s(t,e){if(rt.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,r=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(Mp){e:{try{Fc(e.nodeName);var s=!0;break e}catch{}s=!1}s||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,r?(this.clientX=r.clientX!==void 0?r.clientX:r.pageX,this.clientY=r.clientY!==void 0?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:UT[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&$s.$.h.call(this)}}Ue($s,rt);var UT={2:"touch",3:"pen",4:"mouse"};$s.prototype.h=function(){$s.$.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var hi="closure_listenable_"+(1e6*Math.random()|0),FT=0;function $T(t,e,n,r,s){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!r,this.la=s,this.key=++FT,this.fa=this.ia=!1}function Xo(t){t.fa=!0,t.listener=null,t.proxy=null,t.src=null,t.la=null}function $c(t,e,n){for(const r in t)e.call(n,t[r],r,t)}function BT(t,e){for(const n in t)e.call(void 0,t[n],n,t)}function Up(t){const e={};for(const n in t)e[n]=t[n];return e}const Jh="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Fp(t,e){let n,r;for(let s=1;s<arguments.length;s++){r=arguments[s];for(n in r)t[n]=r[n];for(let i=0;i<Jh.length;i++)n=Jh[i],Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}}function Zo(t){this.src=t,this.g={},this.h=0}Zo.prototype.add=function(t,e,n,r,s){var i=t.toString();t=this.g[i],t||(t=this.g[i]=[],this.h++);var o=Vl(t,e,r,s);return-1<o?(e=t[o],n||(e.ia=!1)):(e=new $T(e,this.src,i,!!r,s),e.ia=n,t.push(e)),e};function Ol(t,e){var n=e.type;if(n in t.g){var r=t.g[n],s=Op(r,e),i;(i=0<=s)&&Array.prototype.splice.call(r,s,1),i&&(Xo(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function Vl(t,e,n,r){for(var s=0;s<t.length;++s){var i=t[s];if(!i.fa&&i.listener==e&&i.capture==!!n&&i.la==r)return s}return-1}var Bc="closure_lm_"+(1e6*Math.random()|0),Ya={};function $p(t,e,n,r,s){if(r&&r.once)return jp(t,e,n,r,s);if(Array.isArray(e)){for(var i=0;i<e.length;i++)$p(t,e[i],n,r,s);return null}return n=Kc(n),t&&t[hi]?t.O(e,n,ui(r)?!!r.capture:!!r,s):Bp(t,e,n,!1,r,s)}function Bp(t,e,n,r,s,i){if(!e)throw Error("Invalid event type");var o=ui(s)?!!s.capture:!!s,a=qc(t);if(a||(t[Bc]=a=new Zo(t)),n=a.add(e,n,r,o,i),n.proxy)return n;if(r=jT(),n.proxy=r,r.src=t,r.listener=n,t.addEventListener)NT||(s=o),s===void 0&&(s=!1),t.addEventListener(e.toString(),r,s);else if(t.attachEvent)t.attachEvent(Kp(e.toString()),r);else if(t.addListener&&t.removeListener)t.addListener(r);else throw Error("addEventListener and attachEvent are unavailable.");return n}function jT(){function t(n){return e.call(t.src,t.listener,n)}const e=qT;return t}function jp(t,e,n,r,s){if(Array.isArray(e)){for(var i=0;i<e.length;i++)jp(t,e[i],n,r,s);return null}return n=Kc(n),t&&t[hi]?t.P(e,n,ui(r)?!!r.capture:!!r,s):Bp(t,e,n,!0,r,s)}function qp(t,e,n,r,s){if(Array.isArray(e))for(var i=0;i<e.length;i++)qp(t,e[i],n,r,s);else r=ui(r)?!!r.capture:!!r,n=Kc(n),t&&t[hi]?(t=t.i,e=String(e).toString(),e in t.g&&(i=t.g[e],n=Vl(i,n,r,s),-1<n&&(Xo(i[n]),Array.prototype.splice.call(i,n,1),i.length==0&&(delete t.g[e],t.h--)))):t&&(t=qc(t))&&(e=t.g[e.toString()],t=-1,e&&(t=Vl(e,n,r,s)),(n=-1<t?e[t]:null)&&jc(n))}function jc(t){if(typeof t!="number"&&t&&!t.fa){var e=t.src;if(e&&e[hi])Ol(e.i,t);else{var n=t.type,r=t.proxy;e.removeEventListener?e.removeEventListener(n,r,t.capture):e.detachEvent?e.detachEvent(Kp(n),r):e.addListener&&e.removeListener&&e.removeListener(r),(n=qc(e))?(Ol(n,t),n.h==0&&(n.src=null,e[Bc]=null)):Xo(t)}}}function Kp(t){return t in Ya?Ya[t]:Ya[t]="on"+t}function qT(t,e){if(t.fa)t=!0;else{e=new $s(e,this);var n=t.listener,r=t.la||t.src;t.ia&&jc(t),t=n.call(r,e)}return t}function qc(t){return t=t[Bc],t instanceof Zo?t:null}var Ja="__closure_events_fn_"+(1e9*Math.random()>>>0);function Kc(t){return typeof t=="function"?t:(t[Ja]||(t[Ja]=function(e){return t.handleEvent(e)}),t[Ja])}function Le(){kn.call(this),this.i=new Zo(this),this.S=this,this.J=null}Ue(Le,kn);Le.prototype[hi]=!0;Le.prototype.removeEventListener=function(t,e,n,r){qp(this,t,e,n,r)};function ze(t,e){var n,r=t.J;if(r)for(n=[];r;r=r.J)n.push(r);if(t=t.S,r=e.type||e,typeof e=="string")e=new rt(e,t);else if(e instanceof rt)e.target=e.target||t;else{var s=e;e=new rt(r,t),Fp(e,s)}if(s=!0,n)for(var i=n.length-1;0<=i;i--){var o=e.g=n[i];s=Li(o,r,!0,e)&&s}if(o=e.g=t,s=Li(o,r,!0,e)&&s,s=Li(o,r,!1,e)&&s,n)for(i=0;i<n.length;i++)o=e.g=n[i],s=Li(o,r,!1,e)&&s}Le.prototype.N=function(){if(Le.$.N.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],r=0;r<n.length;r++)Xo(n[r]);delete t.g[e],t.h--}}this.J=null};Le.prototype.O=function(t,e,n,r){return this.i.add(String(t),e,!1,n,r)};Le.prototype.P=function(t,e,n,r){return this.i.add(String(t),e,!0,n,r)};function Li(t,e,n,r){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var s=!0,i=0;i<e.length;++i){var o=e[i];if(o&&!o.fa&&o.capture==n){var a=o.listener,l=o.la||o.src;o.ia&&Ol(t.i,o),s=a.call(l,r)!==!1&&s}}return s&&!r.defaultPrevented}var Hc=Q.JSON.stringify;class KT{constructor(e,n){this.i=e,this.j=n,this.h=0,this.g=null}get(){let e;return 0<this.h?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e}}function HT(){var t=zc;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class zT{constructor(){this.h=this.g=null}add(e,n){const r=Hp.get();r.set(e,n),this.h?this.h.next=r:this.g=r,this.h=r}}var Hp=new KT(()=>new WT,t=>t.reset());class WT{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function GT(t){var e=1;t=t.split(":");const n=[];for(;0<e&&t.length;)n.push(t.shift()),e--;return t.length&&n.push(t.join(":")),n}function QT(t){Q.setTimeout(()=>{throw t},0)}let Bs,js=!1,zc=new zT,zp=()=>{const t=Q.Promise.resolve(void 0);Bs=()=>{t.then(YT)}};var YT=()=>{for(var t;t=HT();){try{t.h.call(t.g)}catch(n){QT(n)}var e=Hp;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}js=!1};function ea(t,e){Le.call(this),this.h=t||1,this.g=e||Q,this.j=nt(this.qb,this),this.l=Date.now()}Ue(ea,Le);N=ea.prototype;N.ga=!1;N.T=null;N.qb=function(){if(this.ga){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.T=this.g.setTimeout(this.j,this.h-t):(this.T&&(this.g.clearTimeout(this.T),this.T=null),ze(this,"tick"),this.ga&&(Wc(this),this.start()))}};N.start=function(){this.ga=!0,this.T||(this.T=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function Wc(t){t.ga=!1,t.T&&(t.g.clearTimeout(t.T),t.T=null)}N.N=function(){ea.$.N.call(this),Wc(this),delete this.g};function Gc(t,e,n){if(typeof t=="function")n&&(t=nt(t,n));else if(t&&typeof t.handleEvent=="function")t=nt(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:Q.setTimeout(t,e||0)}function Wp(t){t.g=Gc(()=>{t.g=null,t.i&&(t.i=!1,Wp(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class JT extends kn{constructor(e,n){super(),this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:Wp(this)}N(){super.N(),this.g&&(Q.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function qs(t){kn.call(this),this.h=t,this.g={}}Ue(qs,kn);var Xh=[];function Gp(t,e,n,r){Array.isArray(n)||(n&&(Xh[0]=n.toString()),n=Xh);for(var s=0;s<n.length;s++){var i=$p(e,n[s],r||t.handleEvent,!1,t.h||t);if(!i)break;t.g[i.key]=i}}function Qp(t){$c(t.g,function(e,n){this.g.hasOwnProperty(n)&&jc(e)},t),t.g={}}qs.prototype.N=function(){qs.$.N.call(this),Qp(this)};qs.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function ta(){this.g=!0}ta.prototype.Ea=function(){this.g=!1};function XT(t,e,n,r,s,i){t.info(function(){if(t.g)if(i)for(var o="",a=i.split("&"),l=0;l<a.length;l++){var c=a[l].split("=");if(1<c.length){var u=c[0];c=c[1];var h=u.split("_");o=2<=h.length&&h[1]=="type"?o+(u+"="+c+"&"):o+(u+"=redacted&")}}else o=null;else o=i;return"XMLHTTP REQ ("+r+") [attempt "+s+"]: "+e+`
`+n+`
`+o})}function ZT(t,e,n,r,s,i,o){t.info(function(){return"XMLHTTP RESP ("+r+") [ attempt "+s+"]: "+e+`
`+n+`
`+i+" "+o})}function wr(t,e,n,r){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+t0(t,n)+(r?" "+r:"")})}function e0(t,e){t.info(function(){return"TIMEOUT: "+e})}ta.prototype.info=function(){};function t0(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var r=n[t];if(!(2>r.length)){var s=r[1];if(Array.isArray(s)&&!(1>s.length)){var i=s[0];if(i!="noop"&&i!="stop"&&i!="close")for(var o=1;o<s.length;o++)s[o]=""}}}}return Hc(n)}catch{return e}}var ir={},Zh=null;function na(){return Zh=Zh||new Le}ir.Ta="serverreachability";function Yp(t){rt.call(this,ir.Ta,t)}Ue(Yp,rt);function Ks(t){const e=na();ze(e,new Yp(e))}ir.STAT_EVENT="statevent";function Jp(t,e){rt.call(this,ir.STAT_EVENT,t),this.stat=e}Ue(Jp,rt);function ut(t){const e=na();ze(e,new Jp(e,t))}ir.Ua="timingevent";function Xp(t,e){rt.call(this,ir.Ua,t),this.size=e}Ue(Xp,rt);function di(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return Q.setTimeout(function(){t()},e)}var ra={NO_ERROR:0,rb:1,Eb:2,Db:3,yb:4,Cb:5,Fb:6,Qa:7,TIMEOUT:8,Ib:9},Zp={wb:"complete",Sb:"success",Ra:"error",Qa:"abort",Kb:"ready",Lb:"readystatechange",TIMEOUT:"timeout",Gb:"incrementaldata",Jb:"progress",zb:"downloadprogress",$b:"uploadprogress"};function Qc(){}Qc.prototype.h=null;function ed(t){return t.h||(t.h=t.i())}function eg(){}var fi={OPEN:"a",vb:"b",Ra:"c",Hb:"d"};function Yc(){rt.call(this,"d")}Ue(Yc,rt);function Jc(){rt.call(this,"c")}Ue(Jc,rt);var Ml;function sa(){}Ue(sa,Qc);sa.prototype.g=function(){return new XMLHttpRequest};sa.prototype.i=function(){return{}};Ml=new sa;function pi(t,e,n,r){this.l=t,this.j=e,this.m=n,this.W=r||1,this.U=new qs(this),this.P=n0,t=xl?125:void 0,this.V=new ea(t),this.I=null,this.i=!1,this.s=this.A=this.v=this.L=this.G=this.Y=this.B=null,this.F=[],this.g=null,this.C=0,this.o=this.u=null,this.ca=-1,this.J=!1,this.O=0,this.M=null,this.ba=this.K=this.aa=this.S=!1,this.h=new tg}function tg(){this.i=null,this.g="",this.h=!1}var n0=45e3,Ll={},Eo={};N=pi.prototype;N.setTimeout=function(t){this.P=t};function Ul(t,e,n){t.L=1,t.v=oa(sn(e)),t.s=n,t.S=!0,ng(t,null)}function ng(t,e){t.G=Date.now(),gi(t),t.A=sn(t.v);var n=t.A,r=t.W;Array.isArray(r)||(r=[String(r)]),ug(n.i,"t",r),t.C=0,n=t.l.J,t.h=new tg,t.g=xg(t.l,n?e:null,!t.s),0<t.O&&(t.M=new JT(nt(t.Pa,t,t.g),t.O)),Gp(t.U,t.g,"readystatechange",t.nb),e=t.I?Up(t.I):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.ha(t.A,t.u,t.s,e)):(t.u="GET",t.g.ha(t.A,t.u,null,e)),Ks(),XT(t.j,t.u,t.A,t.m,t.W,t.s)}N.nb=function(t){t=t.target;const e=this.M;e&&$t(t)==3?e.l():this.Pa(t)};N.Pa=function(t){try{if(t==this.g)e:{const u=$t(this.g);var e=this.g.Ia();const h=this.g.da();if(!(3>u)&&(u!=3||xl||this.g&&(this.h.h||this.g.ja()||sd(this.g)))){this.J||u!=4||e==7||(e==8||0>=h?Ks(3):Ks(2)),ia(this);var n=this.g.da();this.ca=n;t:if(rg(this)){var r=sd(this.g);t="";var s=r.length,i=$t(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Bn(this),Is(this);var o="";break t}this.h.i=new Q.TextDecoder}for(e=0;e<s;e++)this.h.h=!0,t+=this.h.i.decode(r[e],{stream:i&&e==s-1});r.splice(0,s),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.ja();if(this.i=n==200,ZT(this.j,this.u,this.A,this.m,this.W,u,n),this.i){if(this.aa&&!this.K){t:{if(this.g){var a,l=this.g;if((a=l.g?l.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!Fs(a)){var c=a;break t}}c=null}if(n=c)wr(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Fl(this,n);else{this.i=!1,this.o=3,ut(12),Bn(this),Is(this);break e}}this.S?(sg(this,u,o),xl&&this.i&&u==3&&(Gp(this.U,this.V,"tick",this.mb),this.V.start())):(wr(this.j,this.m,o,null),Fl(this,o)),u==4&&Bn(this),this.i&&!this.J&&(u==4?Cg(this.l,this):(this.i=!1,gi(this)))}else T0(this.g),n==400&&0<o.indexOf("Unknown SID")?(this.o=3,ut(12)):(this.o=0,ut(13)),Bn(this),Is(this)}}}catch{}finally{}};function rg(t){return t.g?t.u=="GET"&&t.L!=2&&t.l.Ha:!1}function sg(t,e,n){let r=!0,s;for(;!t.J&&t.C<n.length;)if(s=r0(t,n),s==Eo){e==4&&(t.o=4,ut(14),r=!1),wr(t.j,t.m,null,"[Incomplete Response]");break}else if(s==Ll){t.o=4,ut(15),wr(t.j,t.m,n,"[Invalid Chunk]"),r=!1;break}else wr(t.j,t.m,s,null),Fl(t,s);rg(t)&&s!=Eo&&s!=Ll&&(t.h.g="",t.C=0),e!=4||n.length!=0||t.h.h||(t.o=1,ut(16),r=!1),t.i=t.i&&r,r?0<n.length&&!t.ba&&(t.ba=!0,e=t.l,e.g==t&&e.ca&&!e.M&&(e.l.info("Great, no buffering proxy detected. Bytes received: "+n.length),ru(e),e.M=!0,ut(11))):(wr(t.j,t.m,n,"[Invalid Chunked Response]"),Bn(t),Is(t))}N.mb=function(){if(this.g){var t=$t(this.g),e=this.g.ja();this.C<e.length&&(ia(this),sg(this,t,e),this.i&&t!=4&&gi(this))}};function r0(t,e){var n=t.C,r=e.indexOf(`
`,n);return r==-1?Eo:(n=Number(e.substring(n,r)),isNaN(n)?Ll:(r+=1,r+n>e.length?Eo:(e=e.slice(r,r+n),t.C=r+n,e)))}N.cancel=function(){this.J=!0,Bn(this)};function gi(t){t.Y=Date.now()+t.P,ig(t,t.P)}function ig(t,e){if(t.B!=null)throw Error("WatchDog timer not null");t.B=di(nt(t.lb,t),e)}function ia(t){t.B&&(Q.clearTimeout(t.B),t.B=null)}N.lb=function(){this.B=null;const t=Date.now();0<=t-this.Y?(e0(this.j,this.A),this.L!=2&&(Ks(),ut(17)),Bn(this),this.o=2,Is(this)):ig(this,this.Y-t)};function Is(t){t.l.H==0||t.J||Cg(t.l,t)}function Bn(t){ia(t);var e=t.M;e&&typeof e.sa=="function"&&e.sa(),t.M=null,Wc(t.V),Qp(t.U),t.g&&(e=t.g,t.g=null,e.abort(),e.sa())}function Fl(t,e){try{var n=t.l;if(n.H!=0&&(n.g==t||$l(n.i,t))){if(!t.K&&$l(n.i,t)&&n.H==3){try{var r=n.Ja.g.parse(e)}catch{r=null}if(Array.isArray(r)&&r.length==3){var s=r;if(s[0]==0){e:if(!n.u){if(n.g)if(n.g.G+3e3<t.G)Ao(n),ua(n);else break e;nu(n),ut(18)}}else n.Fa=s[1],0<n.Fa-n.V&&37500>s[2]&&n.G&&n.A==0&&!n.v&&(n.v=di(nt(n.ib,n),6e3));if(1>=fg(n.i)&&n.oa){try{n.oa()}catch{}n.oa=void 0}}else jn(n,11)}else if((t.K||n.g==t)&&Ao(n),!Fs(e))for(s=n.Ja.g.parse(e),e=0;e<s.length;e++){let c=s[e];if(n.V=c[0],c=c[1],n.H==2)if(c[0]=="c"){n.K=c[1],n.pa=c[2];const u=c[3];u!=null&&(n.ra=u,n.l.info("VER="+n.ra));const h=c[4];h!=null&&(n.Ga=h,n.l.info("SVER="+n.Ga));const d=c[5];d!=null&&typeof d=="number"&&0<d&&(r=1.5*d,n.L=r,n.l.info("backChannelRequestTimeoutMs_="+r)),r=n;const f=t.g;if(f){const _=f.g?f.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(_){var i=r.i;i.g||_.indexOf("spdy")==-1&&_.indexOf("quic")==-1&&_.indexOf("h2")==-1||(i.j=i.l,i.g=new Set,i.h&&(Xc(i,i.h),i.h=null))}if(r.F){const m=f.g?f.g.getResponseHeader("X-HTTP-Session-Id"):null;m&&(r.Da=m,Ee(r.I,r.F,m))}}n.H=3,n.h&&n.h.Ba(),n.ca&&(n.S=Date.now()-t.G,n.l.info("Handshake RTT: "+n.S+"ms")),r=n;var o=t;if(r.wa=kg(r,r.J?r.pa:null,r.Y),o.K){pg(r.i,o);var a=o,l=r.L;l&&a.setTimeout(l),a.B&&(ia(a),gi(a)),r.g=o}else bg(r);0<n.j.length&&ha(n)}else c[0]!="stop"&&c[0]!="close"||jn(n,7);else n.H==3&&(c[0]=="stop"||c[0]=="close"?c[0]=="stop"?jn(n,7):tu(n):c[0]!="noop"&&n.h&&n.h.Aa(c),n.A=0)}}Ks(4)}catch{}}function s0(t){if(t.Z&&typeof t.Z=="function")return t.Z();if(typeof Map<"u"&&t instanceof Map||typeof Set<"u"&&t instanceof Set)return Array.from(t.values());if(typeof t=="string")return t.split("");if(Yo(t)){for(var e=[],n=t.length,r=0;r<n;r++)e.push(t[r]);return e}e=[],n=0;for(r in t)e[n++]=t[r];return e}function i0(t){if(t.ta&&typeof t.ta=="function")return t.ta();if(!t.Z||typeof t.Z!="function"){if(typeof Map<"u"&&t instanceof Map)return Array.from(t.keys());if(!(typeof Set<"u"&&t instanceof Set)){if(Yo(t)||typeof t=="string"){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const r in t)e[n++]=r;return e}}}function og(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(Yo(t)||typeof t=="string")Array.prototype.forEach.call(t,e,void 0);else for(var n=i0(t),r=s0(t),s=r.length,i=0;i<s;i++)e.call(void 0,r[i],n&&n[i],t)}var ag=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function o0(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var r=t[n].indexOf("="),s=null;if(0<=r){var i=t[n].substring(0,r);s=t[n].substring(r+1)}else i=t[n];e(i,s?decodeURIComponent(s.replace(/\+/g," ")):"")}}}function Wn(t){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof Wn){this.h=t.h,Io(this,t.j),this.s=t.s,this.g=t.g,To(this,t.m),this.l=t.l;var e=t.i,n=new Hs;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),td(this,n),this.o=t.o}else t&&(e=String(t).match(ag))?(this.h=!1,Io(this,e[1]||"",!0),this.s=ds(e[2]||""),this.g=ds(e[3]||"",!0),To(this,e[4]),this.l=ds(e[5]||"",!0),td(this,e[6]||"",!0),this.o=ds(e[7]||"")):(this.h=!1,this.i=new Hs(null,this.h))}Wn.prototype.toString=function(){var t=[],e=this.j;e&&t.push(fs(e,nd,!0),":");var n=this.g;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(fs(e,nd,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&t.push("/"),t.push(fs(n,n.charAt(0)=="/"?c0:l0,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.o)&&t.push("#",fs(n,h0)),t.join("")};function sn(t){return new Wn(t)}function Io(t,e,n){t.j=n?ds(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function To(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function td(t,e,n){e instanceof Hs?(t.i=e,d0(t.i,t.h)):(n||(e=fs(e,u0)),t.i=new Hs(e,t.h))}function Ee(t,e,n){t.i.set(e,n)}function oa(t){return Ee(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function ds(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function fs(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,a0),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function a0(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var nd=/[#\/\?@]/g,l0=/[#\?:]/g,c0=/[#\?]/g,u0=/[#\?@]/g,h0=/#/g;function Hs(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function xn(t){t.g||(t.g=new Map,t.h=0,t.i&&o0(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}N=Hs.prototype;N.add=function(t,e){xn(this),this.i=null,t=Jr(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function lg(t,e){xn(t),e=Jr(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function cg(t,e){return xn(t),e=Jr(t,e),t.g.has(e)}N.forEach=function(t,e){xn(this),this.g.forEach(function(n,r){n.forEach(function(s){t.call(e,s,r,this)},this)},this)};N.ta=function(){xn(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let r=0;r<e.length;r++){const s=t[r];for(let i=0;i<s.length;i++)n.push(e[r])}return n};N.Z=function(t){xn(this);let e=[];if(typeof t=="string")cg(this,t)&&(e=e.concat(this.g.get(Jr(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e};N.set=function(t,e){return xn(this),this.i=null,t=Jr(this,t),cg(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};N.get=function(t,e){return t?(t=this.Z(t),0<t.length?String(t[0]):e):e};function ug(t,e,n){lg(t,e),0<n.length&&(t.i=null,t.g.set(Jr(t,e),Uc(n)),t.h+=n.length)}N.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var r=e[n];const i=encodeURIComponent(String(r)),o=this.Z(r);for(r=0;r<o.length;r++){var s=i;o[r]!==""&&(s+="="+encodeURIComponent(String(o[r]))),t.push(s)}}return this.i=t.join("&")};function Jr(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function d0(t,e){e&&!t.j&&(xn(t),t.i=null,t.g.forEach(function(n,r){var s=r.toLowerCase();r!=s&&(lg(this,r),ug(this,s,n))},t)),t.j=e}var f0=class{constructor(t,e){this.g=t,this.map=e}};function hg(t){this.l=t||p0,Q.PerformanceNavigationTiming?(t=Q.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(Q.g&&Q.g.Ka&&Q.g.Ka()&&Q.g.Ka().dc),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var p0=10;function dg(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function fg(t){return t.h?1:t.g?t.g.size:0}function $l(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function Xc(t,e){t.g?t.g.add(e):t.h=e}function pg(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}hg.prototype.cancel=function(){if(this.i=gg(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function gg(t){if(t.h!=null)return t.i.concat(t.h.F);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.F);return e}return Uc(t.i)}var g0=class{stringify(t){return Q.JSON.stringify(t,void 0)}parse(t){return Q.JSON.parse(t,void 0)}};function m0(){this.g=new g0}function _0(t,e,n){const r=n||"";try{og(t,function(s,i){let o=s;ui(s)&&(o=Hc(s)),e.push(r+i+"="+encodeURIComponent(o))})}catch(s){throw e.push(r+"type="+encodeURIComponent("_badmap")),s}}function y0(t,e){const n=new ta;if(Q.Image){const r=new Image;r.onload=Mi(Ui,n,r,"TestLoadImage: loaded",!0,e),r.onerror=Mi(Ui,n,r,"TestLoadImage: error",!1,e),r.onabort=Mi(Ui,n,r,"TestLoadImage: abort",!1,e),r.ontimeout=Mi(Ui,n,r,"TestLoadImage: timeout",!1,e),Q.setTimeout(function(){r.ontimeout&&r.ontimeout()},1e4),r.src=t}else e(!1)}function Ui(t,e,n,r,s){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,s(r)}catch{}}function aa(t){this.l=t.ec||null,this.j=t.ob||!1}Ue(aa,Qc);aa.prototype.g=function(){return new la(this.l,this.j)};aa.prototype.i=function(t){return function(){return t}}({});function la(t,e){Le.call(this),this.F=t,this.u=e,this.m=void 0,this.readyState=Zc,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}Ue(la,Le);var Zc=0;N=la.prototype;N.open=function(t,e){if(this.readyState!=Zc)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,zs(this)};N.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.F||Q).fetch(new Request(this.B,e)).then(this.$a.bind(this),this.ka.bind(this))};N.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,mi(this)),this.readyState=Zc};N.$a=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,zs(this)),this.g&&(this.readyState=3,zs(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ya.bind(this),this.ka.bind(this));else if(typeof Q.ReadableStream<"u"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;mg(this)}else t.text().then(this.Za.bind(this),this.ka.bind(this))};function mg(t){t.j.read().then(t.Xa.bind(t)).catch(t.ka.bind(t))}N.Xa=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?mi(this):zs(this),this.readyState==3&&mg(this)}};N.Za=function(t){this.g&&(this.response=this.responseText=t,mi(this))};N.Ya=function(t){this.g&&(this.response=t,mi(this))};N.ka=function(){this.g&&mi(this)};function mi(t){t.readyState=4,t.l=null,t.j=null,t.A=null,zs(t)}N.setRequestHeader=function(t,e){this.v.append(t,e)};N.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};N.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function zs(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(la.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var v0=Q.JSON.parse;function Pe(t){Le.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.I="",this.m=0,this.j="",this.l=this.G=this.v=this.F=!1,this.B=0,this.A=null,this.K=_g,this.L=this.M=!1}Ue(Pe,Le);var _g="",w0=/^https?$/i,E0=["POST","PUT"];N=Pe.prototype;N.Oa=function(t){this.M=t};N.ha=function(t,e,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.I+"; newUri="+t);e=e?e.toUpperCase():"GET",this.I=t,this.j="",this.m=0,this.F=!1,this.h=!0,this.g=this.u?this.u.g():Ml.g(),this.C=this.u?ed(this.u):ed(Ml),this.g.onreadystatechange=nt(this.La,this);try{this.G=!0,this.g.open(e,String(t),!0),this.G=!1}catch(i){rd(this,i);return}if(t=n||"",n=new Map(this.headers),r)if(Object.getPrototypeOf(r)===Object.prototype)for(var s in r)n.set(s,r[s]);else if(typeof r.keys=="function"&&typeof r.get=="function")for(const i of r.keys())n.set(i,r.get(i));else throw Error("Unknown input type for opt_headers: "+String(r));r=Array.from(n.keys()).find(i=>i.toLowerCase()=="content-type"),s=Q.FormData&&t instanceof Q.FormData,!(0<=Op(E0,e))||r||s||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[i,o]of n)this.g.setRequestHeader(i,o);this.K&&(this.g.responseType=this.K),"withCredentials"in this.g&&this.g.withCredentials!==this.M&&(this.g.withCredentials=this.M);try{wg(this),0<this.B&&((this.L=I0(this.g))?(this.g.timeout=this.B,this.g.ontimeout=nt(this.ua,this)):this.A=Gc(this.ua,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(i){rd(this,i)}};function I0(t){return Lr&&typeof t.timeout=="number"&&t.ontimeout!==void 0}N.ua=function(){typeof Lc<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,ze(this,"timeout"),this.abort(8))};function rd(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,yg(t),ca(t)}function yg(t){t.F||(t.F=!0,ze(t,"complete"),ze(t,"error"))}N.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,ze(this,"complete"),ze(this,"abort"),ca(this))};N.N=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),ca(this,!0)),Pe.$.N.call(this)};N.La=function(){this.s||(this.G||this.v||this.l?vg(this):this.kb())};N.kb=function(){vg(this)};function vg(t){if(t.h&&typeof Lc<"u"&&(!t.C[1]||$t(t)!=4||t.da()!=2)){if(t.v&&$t(t)==4)Gc(t.La,0,t);else if(ze(t,"readystatechange"),$t(t)==4){t.h=!1;try{const o=t.da();e:switch(o){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var r;if(r=o===0){var s=String(t.I).match(ag)[1]||null;!s&&Q.self&&Q.self.location&&(s=Q.self.location.protocol.slice(0,-1)),r=!w0.test(s?s.toLowerCase():"")}n=r}if(n)ze(t,"complete"),ze(t,"success");else{t.m=6;try{var i=2<$t(t)?t.g.statusText:""}catch{i=""}t.j=i+" ["+t.da()+"]",yg(t)}}finally{ca(t)}}}}function ca(t,e){if(t.g){wg(t);const n=t.g,r=t.C[0]?()=>{}:null;t.g=null,t.C=null,e||ze(t,"ready");try{n.onreadystatechange=r}catch{}}}function wg(t){t.g&&t.L&&(t.g.ontimeout=null),t.A&&(Q.clearTimeout(t.A),t.A=null)}N.isActive=function(){return!!this.g};function $t(t){return t.g?t.g.readyState:0}N.da=function(){try{return 2<$t(this)?this.g.status:-1}catch{return-1}};N.ja=function(){try{return this.g?this.g.responseText:""}catch{return""}};N.Wa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),v0(e)}};function sd(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.K){case _g:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}function T0(t){const e={};t=(t.g&&2<=$t(t)&&t.g.getAllResponseHeaders()||"").split(`\r
`);for(let r=0;r<t.length;r++){if(Fs(t[r]))continue;var n=GT(t[r]);const s=n[0];if(n=n[1],typeof n!="string")continue;n=n.trim();const i=e[s]||[];e[s]=i,i.push(n)}BT(e,function(r){return r.join(", ")})}N.Ia=function(){return this.m};N.Sa=function(){return typeof this.j=="string"?this.j:String(this.j)};function Eg(t){let e="";return $c(t,function(n,r){e+=r,e+=":",e+=n,e+=`\r
`}),e}function eu(t,e,n){e:{for(r in n){var r=!1;break e}r=!0}r||(n=Eg(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):Ee(t,e,n))}function is(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function Ig(t){this.Ga=0,this.j=[],this.l=new ta,this.pa=this.wa=this.I=this.Y=this.g=this.Da=this.F=this.na=this.o=this.U=this.s=null,this.fb=this.W=0,this.cb=is("failFast",!1,t),this.G=this.v=this.u=this.m=this.h=null,this.aa=!0,this.Fa=this.V=-1,this.ba=this.A=this.C=0,this.ab=is("baseRetryDelayMs",5e3,t),this.hb=is("retryDelaySeedMs",1e4,t),this.eb=is("forwardChannelMaxRetries",2,t),this.xa=is("forwardChannelRequestTimeoutMs",2e4,t),this.va=t&&t.xmlHttpFactory||void 0,this.Ha=t&&t.useFetchStreams||!1,this.L=void 0,this.J=t&&t.supportsCrossDomainXhr||!1,this.K="",this.i=new hg(t&&t.concurrentRequestLimit),this.Ja=new m0,this.P=t&&t.fastHandshake||!1,this.O=t&&t.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.bb=t&&t.bc||!1,t&&t.Ea&&this.l.Ea(),t&&t.forceLongPolling&&(this.aa=!1),this.ca=!this.P&&this.aa&&t&&t.detectBufferingProxy||!1,this.qa=void 0,t&&t.longPollingTimeout&&0<t.longPollingTimeout&&(this.qa=t.longPollingTimeout),this.oa=void 0,this.S=0,this.M=!1,this.ma=this.B=null}N=Ig.prototype;N.ra=8;N.H=1;function tu(t){if(Tg(t),t.H==3){var e=t.W++,n=sn(t.I);if(Ee(n,"SID",t.K),Ee(n,"RID",e),Ee(n,"TYPE","terminate"),_i(t,n),e=new pi(t,t.l,e),e.L=2,e.v=oa(sn(n)),n=!1,Q.navigator&&Q.navigator.sendBeacon)try{n=Q.navigator.sendBeacon(e.v.toString(),"")}catch{}!n&&Q.Image&&(new Image().src=e.v,n=!0),n||(e.g=xg(e.l,null),e.g.ha(e.v)),e.G=Date.now(),gi(e)}Sg(t)}function ua(t){t.g&&(ru(t),t.g.cancel(),t.g=null)}function Tg(t){ua(t),t.u&&(Q.clearTimeout(t.u),t.u=null),Ao(t),t.i.cancel(),t.m&&(typeof t.m=="number"&&Q.clearTimeout(t.m),t.m=null)}function ha(t){if(!dg(t.i)&&!t.m){t.m=!0;var e=t.Na;Bs||zp(),js||(Bs(),js=!0),zc.add(e,t),t.C=0}}function A0(t,e){return fg(t.i)>=t.i.j-(t.m?1:0)?!1:t.m?(t.j=e.F.concat(t.j),!0):t.H==1||t.H==2||t.C>=(t.cb?0:t.eb)?!1:(t.m=di(nt(t.Na,t,e),Pg(t,t.C)),t.C++,!0)}N.Na=function(t){if(this.m)if(this.m=null,this.H==1){if(!t){this.W=Math.floor(1e5*Math.random()),t=this.W++;const s=new pi(this,this.l,t);let i=this.s;if(this.U&&(i?(i=Up(i),Fp(i,this.U)):i=this.U),this.o!==null||this.O||(s.I=i,i=null),this.P)e:{for(var e=0,n=0;n<this.j.length;n++){t:{var r=this.j[n];if("__data__"in r.map&&(r=r.map.__data__,typeof r=="string")){r=r.length;break t}r=void 0}if(r===void 0)break;if(e+=r,4096<e){e=n;break e}if(e===4096||n===this.j.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=Ag(this,s,e),n=sn(this.I),Ee(n,"RID",t),Ee(n,"CVER",22),this.F&&Ee(n,"X-HTTP-Session-Id",this.F),_i(this,n),i&&(this.O?e="headers="+encodeURIComponent(String(Eg(i)))+"&"+e:this.o&&eu(n,this.o,i)),Xc(this.i,s),this.bb&&Ee(n,"TYPE","init"),this.P?(Ee(n,"$req",e),Ee(n,"SID","null"),s.aa=!0,Ul(s,n,null)):Ul(s,n,e),this.H=2}}else this.H==3&&(t?id(this,t):this.j.length==0||dg(this.i)||id(this))};function id(t,e){var n;e?n=e.m:n=t.W++;const r=sn(t.I);Ee(r,"SID",t.K),Ee(r,"RID",n),Ee(r,"AID",t.V),_i(t,r),t.o&&t.s&&eu(r,t.o,t.s),n=new pi(t,t.l,n,t.C+1),t.o===null&&(n.I=t.s),e&&(t.j=e.F.concat(t.j)),e=Ag(t,n,1e3),n.setTimeout(Math.round(.5*t.xa)+Math.round(.5*t.xa*Math.random())),Xc(t.i,n),Ul(n,r,e)}function _i(t,e){t.na&&$c(t.na,function(n,r){Ee(e,r,n)}),t.h&&og({},function(n,r){Ee(e,r,n)})}function Ag(t,e,n){n=Math.min(t.j.length,n);var r=t.h?nt(t.h.Va,t.h,t):null;e:{var s=t.j;let i=-1;for(;;){const o=["count="+n];i==-1?0<n?(i=s[0].g,o.push("ofs="+i)):i=0:o.push("ofs="+i);let a=!0;for(let l=0;l<n;l++){let c=s[l].g;const u=s[l].map;if(c-=i,0>c)i=Math.max(0,s[l].g-100),a=!1;else try{_0(u,o,"req"+c+"_")}catch{r&&r(u)}}if(a){r=o.join("&");break e}}}return t=t.j.splice(0,n),e.F=t,r}function bg(t){if(!t.g&&!t.u){t.ba=1;var e=t.Ma;Bs||zp(),js||(Bs(),js=!0),zc.add(e,t),t.A=0}}function nu(t){return t.g||t.u||3<=t.A?!1:(t.ba++,t.u=di(nt(t.Ma,t),Pg(t,t.A)),t.A++,!0)}N.Ma=function(){if(this.u=null,Rg(this),this.ca&&!(this.M||this.g==null||0>=this.S)){var t=2*this.S;this.l.info("BP detection timer enabled: "+t),this.B=di(nt(this.jb,this),t)}};N.jb=function(){this.B&&(this.B=null,this.l.info("BP detection timeout reached."),this.l.info("Buffering proxy detected and switch to long-polling!"),this.G=!1,this.M=!0,ut(10),ua(this),Rg(this))};function ru(t){t.B!=null&&(Q.clearTimeout(t.B),t.B=null)}function Rg(t){t.g=new pi(t,t.l,"rpc",t.ba),t.o===null&&(t.g.I=t.s),t.g.O=0;var e=sn(t.wa);Ee(e,"RID","rpc"),Ee(e,"SID",t.K),Ee(e,"AID",t.V),Ee(e,"CI",t.G?"0":"1"),!t.G&&t.qa&&Ee(e,"TO",t.qa),Ee(e,"TYPE","xmlhttp"),_i(t,e),t.o&&t.s&&eu(e,t.o,t.s),t.L&&t.g.setTimeout(t.L);var n=t.g;t=t.pa,n.L=1,n.v=oa(sn(e)),n.s=null,n.S=!0,ng(n,t)}N.ib=function(){this.v!=null&&(this.v=null,ua(this),nu(this),ut(19))};function Ao(t){t.v!=null&&(Q.clearTimeout(t.v),t.v=null)}function Cg(t,e){var n=null;if(t.g==e){Ao(t),ru(t),t.g=null;var r=2}else if($l(t.i,e))n=e.F,pg(t.i,e),r=1;else return;if(t.H!=0){if(e.i)if(r==1){n=e.s?e.s.length:0,e=Date.now()-e.G;var s=t.C;r=na(),ze(r,new Xp(r,n)),ha(t)}else bg(t);else if(s=e.o,s==3||s==0&&0<e.ca||!(r==1&&A0(t,e)||r==2&&nu(t)))switch(n&&0<n.length&&(e=t.i,e.i=e.i.concat(n)),s){case 1:jn(t,5);break;case 4:jn(t,10);break;case 3:jn(t,6);break;default:jn(t,2)}}}function Pg(t,e){let n=t.ab+Math.floor(Math.random()*t.hb);return t.isActive()||(n*=2),n*e}function jn(t,e){if(t.l.info("Error code "+e),e==2){var n=null;t.h&&(n=null);var r=nt(t.pb,t);n||(n=new Wn("//www.google.com/images/cleardot.gif"),Q.location&&Q.location.protocol=="http"||Io(n,"https"),oa(n)),y0(n.toString(),r)}else ut(2);t.H=0,t.h&&t.h.za(e),Sg(t),Tg(t)}N.pb=function(t){t?(this.l.info("Successfully pinged google.com"),ut(2)):(this.l.info("Failed to ping google.com"),ut(1))};function Sg(t){if(t.H=0,t.ma=[],t.h){const e=gg(t.i);(e.length!=0||t.j.length!=0)&&(Qh(t.ma,e),Qh(t.ma,t.j),t.i.i.length=0,Uc(t.j),t.j.length=0),t.h.ya()}}function kg(t,e,n){var r=n instanceof Wn?sn(n):new Wn(n);if(r.g!="")e&&(r.g=e+"."+r.g),To(r,r.m);else{var s=Q.location;r=s.protocol,e=e?e+"."+s.hostname:s.hostname,s=+s.port;var i=new Wn(null);r&&Io(i,r),e&&(i.g=e),s&&To(i,s),n&&(i.l=n),r=i}return n=t.F,e=t.Da,n&&e&&Ee(r,n,e),Ee(r,"VER",t.ra),_i(t,r),r}function xg(t,e,n){if(e&&!t.J)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Ha&&!t.va?new Pe(new aa({ob:!0})):new Pe(t.va),e.Oa(t.J),e}N.isActive=function(){return!!this.h&&this.h.isActive(this)};function Dg(){}N=Dg.prototype;N.Ba=function(){};N.Aa=function(){};N.za=function(){};N.ya=function(){};N.isActive=function(){return!0};N.Va=function(){};function bo(){if(Lr&&!(10<=Number(LT)))throw Error("Environmental error: no available transport.")}bo.prototype.g=function(t,e){return new yt(t,e)};function yt(t,e){Le.call(this),this.g=new Ig(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.Ca&&(t?t["X-WebChannel-Client-Profile"]=e.Ca:t={"X-WebChannel-Client-Profile":e.Ca}),this.g.U=t,(t=e&&e.cc)&&!Fs(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!Fs(e)&&(this.g.F=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new Xr(this)}Ue(yt,Le);yt.prototype.m=function(){this.g.h=this.j,this.A&&(this.g.J=!0);var t=this.g,e=this.l,n=this.h||void 0;ut(0),t.Y=e,t.na=n||{},t.G=t.aa,t.I=kg(t,null,t.Y),ha(t)};yt.prototype.close=function(){tu(this.g)};yt.prototype.u=function(t){var e=this.g;if(typeof t=="string"){var n={};n.__data__=t,t=n}else this.v&&(n={},n.__data__=Hc(t),t=n);e.j.push(new f0(e.fb++,t)),e.H==3&&ha(e)};yt.prototype.N=function(){this.g.h=null,delete this.j,tu(this.g),delete this.g,yt.$.N.call(this)};function Ng(t){Yc.call(this),t.__headers__&&(this.headers=t.__headers__,this.statusCode=t.__status__,delete t.__headers__,delete t.__status__);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}Ue(Ng,Yc);function Og(){Jc.call(this),this.status=1}Ue(Og,Jc);function Xr(t){this.g=t}Ue(Xr,Dg);Xr.prototype.Ba=function(){ze(this.g,"a")};Xr.prototype.Aa=function(t){ze(this.g,new Ng(t))};Xr.prototype.za=function(t){ze(this.g,new Og)};Xr.prototype.ya=function(){ze(this.g,"b")};function b0(){this.blockSize=-1}function xt(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.m=Array(this.blockSize),this.i=this.h=0,this.reset()}Ue(xt,b0);xt.prototype.reset=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.i=this.h=0};function Xa(t,e,n){n||(n=0);var r=Array(16);if(typeof e=="string")for(var s=0;16>s;++s)r[s]=e.charCodeAt(n++)|e.charCodeAt(n++)<<8|e.charCodeAt(n++)<<16|e.charCodeAt(n++)<<24;else for(s=0;16>s;++s)r[s]=e[n++]|e[n++]<<8|e[n++]<<16|e[n++]<<24;e=t.g[0],n=t.g[1],s=t.g[2];var i=t.g[3],o=e+(i^n&(s^i))+r[0]+3614090360&4294967295;e=n+(o<<7&4294967295|o>>>25),o=i+(s^e&(n^s))+r[1]+3905402710&4294967295,i=e+(o<<12&4294967295|o>>>20),o=s+(n^i&(e^n))+r[2]+606105819&4294967295,s=i+(o<<17&4294967295|o>>>15),o=n+(e^s&(i^e))+r[3]+3250441966&4294967295,n=s+(o<<22&4294967295|o>>>10),o=e+(i^n&(s^i))+r[4]+4118548399&4294967295,e=n+(o<<7&4294967295|o>>>25),o=i+(s^e&(n^s))+r[5]+1200080426&4294967295,i=e+(o<<12&4294967295|o>>>20),o=s+(n^i&(e^n))+r[6]+2821735955&4294967295,s=i+(o<<17&4294967295|o>>>15),o=n+(e^s&(i^e))+r[7]+4249261313&4294967295,n=s+(o<<22&4294967295|o>>>10),o=e+(i^n&(s^i))+r[8]+1770035416&4294967295,e=n+(o<<7&4294967295|o>>>25),o=i+(s^e&(n^s))+r[9]+2336552879&4294967295,i=e+(o<<12&4294967295|o>>>20),o=s+(n^i&(e^n))+r[10]+4294925233&4294967295,s=i+(o<<17&4294967295|o>>>15),o=n+(e^s&(i^e))+r[11]+2304563134&4294967295,n=s+(o<<22&4294967295|o>>>10),o=e+(i^n&(s^i))+r[12]+1804603682&4294967295,e=n+(o<<7&4294967295|o>>>25),o=i+(s^e&(n^s))+r[13]+4254626195&4294967295,i=e+(o<<12&4294967295|o>>>20),o=s+(n^i&(e^n))+r[14]+2792965006&4294967295,s=i+(o<<17&4294967295|o>>>15),o=n+(e^s&(i^e))+r[15]+1236535329&4294967295,n=s+(o<<22&4294967295|o>>>10),o=e+(s^i&(n^s))+r[1]+4129170786&4294967295,e=n+(o<<5&4294967295|o>>>27),o=i+(n^s&(e^n))+r[6]+3225465664&4294967295,i=e+(o<<9&4294967295|o>>>23),o=s+(e^n&(i^e))+r[11]+643717713&4294967295,s=i+(o<<14&4294967295|o>>>18),o=n+(i^e&(s^i))+r[0]+3921069994&4294967295,n=s+(o<<20&4294967295|o>>>12),o=e+(s^i&(n^s))+r[5]+3593408605&4294967295,e=n+(o<<5&4294967295|o>>>27),o=i+(n^s&(e^n))+r[10]+38016083&4294967295,i=e+(o<<9&4294967295|o>>>23),o=s+(e^n&(i^e))+r[15]+3634488961&4294967295,s=i+(o<<14&4294967295|o>>>18),o=n+(i^e&(s^i))+r[4]+3889429448&4294967295,n=s+(o<<20&4294967295|o>>>12),o=e+(s^i&(n^s))+r[9]+568446438&4294967295,e=n+(o<<5&4294967295|o>>>27),o=i+(n^s&(e^n))+r[14]+3275163606&4294967295,i=e+(o<<9&4294967295|o>>>23),o=s+(e^n&(i^e))+r[3]+4107603335&4294967295,s=i+(o<<14&4294967295|o>>>18),o=n+(i^e&(s^i))+r[8]+1163531501&4294967295,n=s+(o<<20&4294967295|o>>>12),o=e+(s^i&(n^s))+r[13]+2850285829&4294967295,e=n+(o<<5&4294967295|o>>>27),o=i+(n^s&(e^n))+r[2]+4243563512&4294967295,i=e+(o<<9&4294967295|o>>>23),o=s+(e^n&(i^e))+r[7]+1735328473&4294967295,s=i+(o<<14&4294967295|o>>>18),o=n+(i^e&(s^i))+r[12]+2368359562&4294967295,n=s+(o<<20&4294967295|o>>>12),o=e+(n^s^i)+r[5]+4294588738&4294967295,e=n+(o<<4&4294967295|o>>>28),o=i+(e^n^s)+r[8]+2272392833&4294967295,i=e+(o<<11&4294967295|o>>>21),o=s+(i^e^n)+r[11]+1839030562&4294967295,s=i+(o<<16&4294967295|o>>>16),o=n+(s^i^e)+r[14]+4259657740&4294967295,n=s+(o<<23&4294967295|o>>>9),o=e+(n^s^i)+r[1]+2763975236&4294967295,e=n+(o<<4&4294967295|o>>>28),o=i+(e^n^s)+r[4]+1272893353&4294967295,i=e+(o<<11&4294967295|o>>>21),o=s+(i^e^n)+r[7]+4139469664&4294967295,s=i+(o<<16&4294967295|o>>>16),o=n+(s^i^e)+r[10]+3200236656&4294967295,n=s+(o<<23&4294967295|o>>>9),o=e+(n^s^i)+r[13]+681279174&4294967295,e=n+(o<<4&4294967295|o>>>28),o=i+(e^n^s)+r[0]+3936430074&4294967295,i=e+(o<<11&4294967295|o>>>21),o=s+(i^e^n)+r[3]+3572445317&4294967295,s=i+(o<<16&4294967295|o>>>16),o=n+(s^i^e)+r[6]+76029189&4294967295,n=s+(o<<23&4294967295|o>>>9),o=e+(n^s^i)+r[9]+3654602809&4294967295,e=n+(o<<4&4294967295|o>>>28),o=i+(e^n^s)+r[12]+3873151461&4294967295,i=e+(o<<11&4294967295|o>>>21),o=s+(i^e^n)+r[15]+530742520&4294967295,s=i+(o<<16&4294967295|o>>>16),o=n+(s^i^e)+r[2]+3299628645&4294967295,n=s+(o<<23&4294967295|o>>>9),o=e+(s^(n|~i))+r[0]+4096336452&4294967295,e=n+(o<<6&4294967295|o>>>26),o=i+(n^(e|~s))+r[7]+1126891415&4294967295,i=e+(o<<10&4294967295|o>>>22),o=s+(e^(i|~n))+r[14]+2878612391&4294967295,s=i+(o<<15&4294967295|o>>>17),o=n+(i^(s|~e))+r[5]+4237533241&4294967295,n=s+(o<<21&4294967295|o>>>11),o=e+(s^(n|~i))+r[12]+1700485571&4294967295,e=n+(o<<6&4294967295|o>>>26),o=i+(n^(e|~s))+r[3]+2399980690&4294967295,i=e+(o<<10&4294967295|o>>>22),o=s+(e^(i|~n))+r[10]+4293915773&4294967295,s=i+(o<<15&4294967295|o>>>17),o=n+(i^(s|~e))+r[1]+2240044497&4294967295,n=s+(o<<21&4294967295|o>>>11),o=e+(s^(n|~i))+r[8]+1873313359&4294967295,e=n+(o<<6&4294967295|o>>>26),o=i+(n^(e|~s))+r[15]+4264355552&4294967295,i=e+(o<<10&4294967295|o>>>22),o=s+(e^(i|~n))+r[6]+2734768916&4294967295,s=i+(o<<15&4294967295|o>>>17),o=n+(i^(s|~e))+r[13]+1309151649&4294967295,n=s+(o<<21&4294967295|o>>>11),o=e+(s^(n|~i))+r[4]+4149444226&4294967295,e=n+(o<<6&4294967295|o>>>26),o=i+(n^(e|~s))+r[11]+3174756917&4294967295,i=e+(o<<10&4294967295|o>>>22),o=s+(e^(i|~n))+r[2]+718787259&4294967295,s=i+(o<<15&4294967295|o>>>17),o=n+(i^(s|~e))+r[9]+3951481745&4294967295,t.g[0]=t.g[0]+e&4294967295,t.g[1]=t.g[1]+(s+(o<<21&4294967295|o>>>11))&4294967295,t.g[2]=t.g[2]+s&4294967295,t.g[3]=t.g[3]+i&4294967295}xt.prototype.j=function(t,e){e===void 0&&(e=t.length);for(var n=e-this.blockSize,r=this.m,s=this.h,i=0;i<e;){if(s==0)for(;i<=n;)Xa(this,t,i),i+=this.blockSize;if(typeof t=="string"){for(;i<e;)if(r[s++]=t.charCodeAt(i++),s==this.blockSize){Xa(this,r),s=0;break}}else for(;i<e;)if(r[s++]=t[i++],s==this.blockSize){Xa(this,r),s=0;break}}this.h=s,this.i+=e};xt.prototype.l=function(){var t=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);t[0]=128;for(var e=1;e<t.length-8;++e)t[e]=0;var n=8*this.i;for(e=t.length-8;e<t.length;++e)t[e]=n&255,n/=256;for(this.j(t),t=Array(16),e=n=0;4>e;++e)for(var r=0;32>r;r+=8)t[n++]=this.g[e]>>>r&255;return t};function de(t,e){this.h=e;for(var n=[],r=!0,s=t.length-1;0<=s;s--){var i=t[s]|0;r&&i==e||(n[s]=i,r=!1)}this.g=n}var R0={};function su(t){return-128<=t&&128>t?OT(t,function(e){return new de([e|0],0>e?-1:0)}):new de([t|0],0>t?-1:0)}function Bt(t){if(isNaN(t)||!isFinite(t))return Cr;if(0>t)return qe(Bt(-t));for(var e=[],n=1,r=0;t>=n;r++)e[r]=t/n|0,n*=Bl;return new de(e,0)}function Vg(t,e){if(t.length==0)throw Error("number format error: empty string");if(e=e||10,2>e||36<e)throw Error("radix out of range: "+e);if(t.charAt(0)=="-")return qe(Vg(t.substring(1),e));if(0<=t.indexOf("-"))throw Error('number format error: interior "-" character');for(var n=Bt(Math.pow(e,8)),r=Cr,s=0;s<t.length;s+=8){var i=Math.min(8,t.length-s),o=parseInt(t.substring(s,s+i),e);8>i?(i=Bt(Math.pow(e,i)),r=r.R(i).add(Bt(o))):(r=r.R(n),r=r.add(Bt(o)))}return r}var Bl=4294967296,Cr=su(0),jl=su(1),od=su(16777216);N=de.prototype;N.ea=function(){if(vt(this))return-qe(this).ea();for(var t=0,e=1,n=0;n<this.g.length;n++){var r=this.D(n);t+=(0<=r?r:Bl+r)*e,e*=Bl}return t};N.toString=function(t){if(t=t||10,2>t||36<t)throw Error("radix out of range: "+t);if(Zt(this))return"0";if(vt(this))return"-"+qe(this).toString(t);for(var e=Bt(Math.pow(t,6)),n=this,r="";;){var s=Co(n,e).g;n=Ro(n,s.R(e));var i=((0<n.g.length?n.g[0]:n.h)>>>0).toString(t);if(n=s,Zt(n))return i+r;for(;6>i.length;)i="0"+i;r=i+r}};N.D=function(t){return 0>t?0:t<this.g.length?this.g[t]:this.h};function Zt(t){if(t.h!=0)return!1;for(var e=0;e<t.g.length;e++)if(t.g[e]!=0)return!1;return!0}function vt(t){return t.h==-1}N.X=function(t){return t=Ro(this,t),vt(t)?-1:Zt(t)?0:1};function qe(t){for(var e=t.g.length,n=[],r=0;r<e;r++)n[r]=~t.g[r];return new de(n,~t.h).add(jl)}N.abs=function(){return vt(this)?qe(this):this};N.add=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0,s=0;s<=e;s++){var i=r+(this.D(s)&65535)+(t.D(s)&65535),o=(i>>>16)+(this.D(s)>>>16)+(t.D(s)>>>16);r=o>>>16,i&=65535,o&=65535,n[s]=o<<16|i}return new de(n,n[n.length-1]&-2147483648?-1:0)};function Ro(t,e){return t.add(qe(e))}N.R=function(t){if(Zt(this)||Zt(t))return Cr;if(vt(this))return vt(t)?qe(this).R(qe(t)):qe(qe(this).R(t));if(vt(t))return qe(this.R(qe(t)));if(0>this.X(od)&&0>t.X(od))return Bt(this.ea()*t.ea());for(var e=this.g.length+t.g.length,n=[],r=0;r<2*e;r++)n[r]=0;for(r=0;r<this.g.length;r++)for(var s=0;s<t.g.length;s++){var i=this.D(r)>>>16,o=this.D(r)&65535,a=t.D(s)>>>16,l=t.D(s)&65535;n[2*r+2*s]+=o*l,Fi(n,2*r+2*s),n[2*r+2*s+1]+=i*l,Fi(n,2*r+2*s+1),n[2*r+2*s+1]+=o*a,Fi(n,2*r+2*s+1),n[2*r+2*s+2]+=i*a,Fi(n,2*r+2*s+2)}for(r=0;r<e;r++)n[r]=n[2*r+1]<<16|n[2*r];for(r=e;r<2*e;r++)n[r]=0;return new de(n,0)};function Fi(t,e){for(;(t[e]&65535)!=t[e];)t[e+1]+=t[e]>>>16,t[e]&=65535,e++}function os(t,e){this.g=t,this.h=e}function Co(t,e){if(Zt(e))throw Error("division by zero");if(Zt(t))return new os(Cr,Cr);if(vt(t))return e=Co(qe(t),e),new os(qe(e.g),qe(e.h));if(vt(e))return e=Co(t,qe(e)),new os(qe(e.g),e.h);if(30<t.g.length){if(vt(t)||vt(e))throw Error("slowDivide_ only works with positive integers.");for(var n=jl,r=e;0>=r.X(t);)n=ad(n),r=ad(r);var s=fr(n,1),i=fr(r,1);for(r=fr(r,2),n=fr(n,2);!Zt(r);){var o=i.add(r);0>=o.X(t)&&(s=s.add(n),i=o),r=fr(r,1),n=fr(n,1)}return e=Ro(t,s.R(e)),new os(s,e)}for(s=Cr;0<=t.X(e);){for(n=Math.max(1,Math.floor(t.ea()/e.ea())),r=Math.ceil(Math.log(n)/Math.LN2),r=48>=r?1:Math.pow(2,r-48),i=Bt(n),o=i.R(e);vt(o)||0<o.X(t);)n-=r,i=Bt(n),o=i.R(e);Zt(i)&&(i=jl),s=s.add(i),t=Ro(t,o)}return new os(s,t)}N.gb=function(t){return Co(this,t).h};N.and=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)&t.D(r);return new de(n,this.h&t.h)};N.or=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)|t.D(r);return new de(n,this.h|t.h)};N.xor=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)^t.D(r);return new de(n,this.h^t.h)};function ad(t){for(var e=t.g.length+1,n=[],r=0;r<e;r++)n[r]=t.D(r)<<1|t.D(r-1)>>>31;return new de(n,t.h)}function fr(t,e){var n=e>>5;e%=32;for(var r=t.g.length-n,s=[],i=0;i<r;i++)s[i]=0<e?t.D(i+n)>>>e|t.D(i+n+1)<<32-e:t.D(i+n);return new de(s,t.h)}bo.prototype.createWebChannel=bo.prototype.g;yt.prototype.send=yt.prototype.u;yt.prototype.open=yt.prototype.m;yt.prototype.close=yt.prototype.close;ra.NO_ERROR=0;ra.TIMEOUT=8;ra.HTTP_ERROR=6;Zp.COMPLETE="complete";eg.EventType=fi;fi.OPEN="a";fi.CLOSE="b";fi.ERROR="c";fi.MESSAGE="d";Le.prototype.listen=Le.prototype.O;Pe.prototype.listenOnce=Pe.prototype.P;Pe.prototype.getLastError=Pe.prototype.Sa;Pe.prototype.getLastErrorCode=Pe.prototype.Ia;Pe.prototype.getStatus=Pe.prototype.da;Pe.prototype.getResponseJson=Pe.prototype.Wa;Pe.prototype.getResponseText=Pe.prototype.ja;Pe.prototype.send=Pe.prototype.ha;Pe.prototype.setWithCredentials=Pe.prototype.Oa;xt.prototype.digest=xt.prototype.l;xt.prototype.reset=xt.prototype.reset;xt.prototype.update=xt.prototype.j;de.prototype.add=de.prototype.add;de.prototype.multiply=de.prototype.R;de.prototype.modulo=de.prototype.gb;de.prototype.compare=de.prototype.X;de.prototype.toNumber=de.prototype.ea;de.prototype.toString=de.prototype.toString;de.prototype.getBits=de.prototype.D;de.fromNumber=Bt;de.fromString=Vg;var C0=function(){return new bo},P0=function(){return na()},Za=ra,S0=Zp,k0=ir,ld={xb:0,Ab:1,Bb:2,Ub:3,Zb:4,Wb:5,Xb:6,Vb:7,Tb:8,Yb:9,PROXY:10,NOPROXY:11,Rb:12,Nb:13,Ob:14,Mb:15,Pb:16,Qb:17,tb:18,sb:19,ub:20},$i=eg,x0=Pe,D0=xt,Pr=de;const cd="@firebase/firestore";/**
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
 */class Qe{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Qe.UNAUTHENTICATED=new Qe(null),Qe.GOOGLE_CREDENTIALS=new Qe("google-credentials-uid"),Qe.FIRST_PARTY=new Qe("first-party-uid"),Qe.MOCK_USER=new Qe("mock-user");/**
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
 */let Zr="10.4.0";/**
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
 */const er=new bc("@firebase/firestore");function as(){return er.logLevel}function U(t,...e){if(er.logLevel<=se.DEBUG){const n=e.map(iu);er.debug(`Firestore (${Zr}): ${t}`,...n)}}function on(t,...e){if(er.logLevel<=se.ERROR){const n=e.map(iu);er.error(`Firestore (${Zr}): ${t}`,...n)}}function Ur(t,...e){if(er.logLevel<=se.WARN){const n=e.map(iu);er.warn(`Firestore (${Zr}): ${t}`,...n)}}function iu(t){if(typeof t=="string")return t;try{/**
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
 */function W(t="Unexpected state"){const e=`FIRESTORE (${Zr}) INTERNAL ASSERTION FAILED: `+t;throw on(e),new Error(e)}function Te(t,e){t||W()}function Z(t,e){return t}/**
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
 */const I={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class L extends cn{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class en{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
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
 */class Mg{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class N0{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(Qe.UNAUTHENTICATED))}shutdown(){}}class O0{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class V0{constructor(e){this.t=e,this.currentUser=Qe.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let r=this.i;const s=l=>this.i!==r?(r=this.i,n(l)):Promise.resolve();let i=new en;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new en,e.enqueueRetryable(()=>s(this.currentUser))};const o=()=>{const l=i;e.enqueueRetryable(async()=>{await l.promise,await s(this.currentUser)})},a=l=>{U("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(l=>a(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?a(l):(U("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new en)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(U("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(Te(typeof r.accessToken=="string"),new Mg(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return Te(e===null||typeof e=="string"),new Qe(e)}}class M0{constructor(e,n,r){this.l=e,this.h=n,this.P=r,this.type="FirstParty",this.user=Qe.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class L0{constructor(e,n,r){this.l=e,this.h=n,this.P=r}getToken(){return Promise.resolve(new M0(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(Qe.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class U0{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class F0{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,n){const r=i=>{i.error!=null&&U("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.R;return this.R=i.token,U("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>r(i))};const s=i=>{U("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.appCheck.addTokenListener(this.o)};this.A.onInit(i=>s(i)),setTimeout(()=>{if(!this.appCheck){const i=this.A.getImmediate({optional:!0});i?s(i):U("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(Te(typeof n.token=="string"),this.R=n.token,new U0(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
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
 */function $0(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
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
 */class Lg{static V(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const s=$0(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<n&&(r+=e.charAt(s[i]%e.length))}return r}}function le(t,e){return t<e?-1:t>e?1:0}function Fr(t,e,n){return t.length===e.length&&t.every((r,s)=>n(r,e[s]))}/**
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
 */class he{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new L(I.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new L(I.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new L(I.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new L(I.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return he.fromMillis(Date.now())}static fromDate(e){return he.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new he(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?le(this.nanoseconds,e.nanoseconds):le(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class J{constructor(e){this.timestamp=e}static fromTimestamp(e){return new J(e)}static min(){return new J(new he(0,0))}static max(){return new J(new he(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */class Ws{constructor(e,n,r){n===void 0?n=0:n>e.length&&W(),r===void 0?r=e.length-n:r>e.length-n&&W(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return Ws.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof Ws?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let s=0;s<r;s++){const i=e.get(s),o=n.get(s);if(i<o)return-1;if(i>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class Ie extends Ws{construct(e,n,r){return new Ie(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new L(I.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(s=>s.length>0))}return new Ie(n)}static emptyPath(){return new Ie([])}}const B0=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Ze extends Ws{construct(e,n,r){return new Ze(e,n,r)}static isValidIdentifier(e){return B0.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Ze.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new Ze(["__name__"])}static fromServerFormat(e){const n=[];let r="",s=0;const i=()=>{if(r.length===0)throw new L(I.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;s<e.length;){const a=e[s];if(a==="\\"){if(s+1===e.length)throw new L(I.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[s+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new L(I.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=l,s+=2}else a==="`"?(o=!o,s++):a!=="."||o?(r+=a,s++):(i(),s++)}if(i(),o)throw new L(I.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Ze(n)}static emptyPath(){return new Ze([])}}/**
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
 */class B{constructor(e){this.path=e}static fromPath(e){return new B(Ie.fromString(e))}static fromName(e){return new B(Ie.fromString(e).popFirst(5))}static empty(){return new B(Ie.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Ie.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return Ie.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new B(new Ie(e.slice()))}}function j0(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,s=J.fromTimestamp(r===1e9?new he(n+1,0):new he(n,r));return new Rn(s,B.empty(),e)}function q0(t){return new Rn(t.readTime,t.key,-1)}class Rn{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new Rn(J.min(),B.empty(),-1)}static max(){return new Rn(J.max(),B.empty(),-1)}}function K0(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=B.comparator(t.documentKey,e.documentKey),n!==0?n:le(t.largestBatchId,e.largestBatchId))}/**
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
 */const H0="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class z0{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function yi(t){if(t.code!==I.FAILED_PRECONDITION||t.message!==H0)throw t;U("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class b{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&W(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new b((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(n,i).next(r,s)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof b?n:b.resolve(n)}catch(n){return b.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):b.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):b.reject(n)}static resolve(e){return new b((n,r)=>{n(e)})}static reject(e){return new b((n,r)=>{r(e)})}static waitFor(e){return new b((n,r)=>{let s=0,i=0,o=!1;e.forEach(a=>{++s,a.next(()=>{++i,o&&i===s&&n()},l=>r(l))}),o=!0,i===s&&n()})}static or(e){let n=b.resolve(!1);for(const r of e)n=n.next(s=>s?b.resolve(s):r());return n}static forEach(e,n){const r=[];return e.forEach((s,i)=>{r.push(n.call(this,s,i))}),this.waitFor(r)}static mapArray(e,n){return new b((r,s)=>{const i=e.length,o=new Array(i);let a=0;for(let l=0;l<i;l++){const c=l;n(e[c]).next(u=>{o[c]=u,++a,a===i&&r(o)},u=>s(u))}})}static doWhile(e,n){return new b((r,s)=>{const i=()=>{e()===!0?n().next(()=>{i()},s):r()};i()})}}function vi(t){return t.name==="IndexedDbTransactionError"}/**
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
 */class ou{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.oe(r),this._e=r=>n.writeSequenceNumber(r))}oe(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this._e&&this._e(e),e}}ou.ae=-1;function da(t){return t==null}function Po(t){return t===0&&1/t==-1/0}function W0(t){return typeof t=="number"&&Number.isInteger(t)&&!Po(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
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
 */function ud(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function or(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function Ug(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
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
 */class be{constructor(e,n){this.comparator=e,this.root=n||$e.EMPTY}insert(e,n){return new be(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,$e.BLACK,null,null))}remove(e){return new be(this.comparator,this.root.remove(e,this.comparator).copy(null,null,$e.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return n+r.left.size;s<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Bi(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Bi(this.root,e,this.comparator,!1)}getReverseIterator(){return new Bi(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Bi(this.root,e,this.comparator,!0)}}class Bi{constructor(e,n,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=n?r(e.key,n):1,n&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class $e{constructor(e,n,r,s,i){this.key=e,this.value=n,this.color=r??$e.RED,this.left=s??$e.EMPTY,this.right=i??$e.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,s,i){return new $e(e??this.key,n??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,n,r),null):i===0?s.copy(null,n,null,null,null):s.copy(null,null,null,null,s.right.insert(e,n,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return $e.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,s=this;if(n(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),n(e,s.key)===0){if(s.right.isEmpty())return $e.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,$e.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,$e.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw W();const e=this.left.check();if(e!==this.right.check())throw W();return e+(this.isRed()?0:1)}}$e.EMPTY=null,$e.RED=!0,$e.BLACK=!1;$e.EMPTY=new class{constructor(){this.size=0}get key(){throw W()}get value(){throw W()}get color(){throw W()}get left(){throw W()}get right(){throw W()}copy(e,n,r,s,i){return this}insert(e,n,r){return new $e(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class st{constructor(e){this.comparator=e,this.data=new be(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;n(s.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new hd(this.data.getIterator())}getIteratorFrom(e){return new hd(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof st)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new st(this.comparator);return n.data=e,n}}class hd{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class mt{constructor(e){this.fields=e,e.sort(Ze.comparator)}static empty(){return new mt([])}unionWith(e){let n=new st(Ze.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new mt(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return Fr(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
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
 */class Fg extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class ot{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new Fg("Invalid base64 string: "+i):i}}(e);return new ot(n)}static fromUint8Array(e){const n=function(s){let i="";for(let o=0;o<s.length;++o)i+=String.fromCharCode(s[o]);return i}(e);return new ot(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let s=0;s<n.length;s++)r[s]=n.charCodeAt(s);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return le(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}ot.EMPTY_BYTE_STRING=new ot("");const G0=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Cn(t){if(Te(!!t),typeof t=="string"){let e=0;const n=G0.exec(t);if(Te(!!n),n[1]){let s=n[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:xe(t.seconds),nanos:xe(t.nanos)}}function xe(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function tr(t){return typeof t=="string"?ot.fromBase64String(t):ot.fromUint8Array(t)}/**
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
 */function au(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function lu(t){const e=t.mapValue.fields.__previous_value__;return au(e)?lu(e):e}function Gs(t){const e=Cn(t.mapValue.fields.__local_write_time__.timestampValue);return new he(e.seconds,e.nanos)}/**
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
 */class Q0{constructor(e,n,r,s,i,o,a,l,c){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=l,this.useFetchStreams=c}}class Qs{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new Qs("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Qs&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const ji={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function nr(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?au(t)?4:Y0(t)?9007199254740991:10:W()}function Wt(t,e){if(t===e)return!0;const n=nr(t);if(n!==nr(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Gs(t).isEqual(Gs(e));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const o=Cn(s.timestampValue),a=Cn(i.timestampValue);return o.seconds===a.seconds&&o.nanos===a.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(s,i){return tr(s.bytesValue).isEqual(tr(i.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(s,i){return xe(s.geoPointValue.latitude)===xe(i.geoPointValue.latitude)&&xe(s.geoPointValue.longitude)===xe(i.geoPointValue.longitude)}(t,e);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return xe(s.integerValue)===xe(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const o=xe(s.doubleValue),a=xe(i.doubleValue);return o===a?Po(o)===Po(a):isNaN(o)&&isNaN(a)}return!1}(t,e);case 9:return Fr(t.arrayValue.values||[],e.arrayValue.values||[],Wt);case 10:return function(s,i){const o=s.mapValue.fields||{},a=i.mapValue.fields||{};if(ud(o)!==ud(a))return!1;for(const l in o)if(o.hasOwnProperty(l)&&(a[l]===void 0||!Wt(o[l],a[l])))return!1;return!0}(t,e);default:return W()}}function Ys(t,e){return(t.values||[]).find(n=>Wt(n,e))!==void 0}function $r(t,e){if(t===e)return 0;const n=nr(t),r=nr(e);if(n!==r)return le(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return le(t.booleanValue,e.booleanValue);case 2:return function(i,o){const a=xe(i.integerValue||i.doubleValue),l=xe(o.integerValue||o.doubleValue);return a<l?-1:a>l?1:a===l?0:isNaN(a)?isNaN(l)?0:-1:1}(t,e);case 3:return dd(t.timestampValue,e.timestampValue);case 4:return dd(Gs(t),Gs(e));case 5:return le(t.stringValue,e.stringValue);case 6:return function(i,o){const a=tr(i),l=tr(o);return a.compareTo(l)}(t.bytesValue,e.bytesValue);case 7:return function(i,o){const a=i.split("/"),l=o.split("/");for(let c=0;c<a.length&&c<l.length;c++){const u=le(a[c],l[c]);if(u!==0)return u}return le(a.length,l.length)}(t.referenceValue,e.referenceValue);case 8:return function(i,o){const a=le(xe(i.latitude),xe(o.latitude));return a!==0?a:le(xe(i.longitude),xe(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(i,o){const a=i.values||[],l=o.values||[];for(let c=0;c<a.length&&c<l.length;++c){const u=$r(a[c],l[c]);if(u)return u}return le(a.length,l.length)}(t.arrayValue,e.arrayValue);case 10:return function(i,o){if(i===ji.mapValue&&o===ji.mapValue)return 0;if(i===ji.mapValue)return 1;if(o===ji.mapValue)return-1;const a=i.fields||{},l=Object.keys(a),c=o.fields||{},u=Object.keys(c);l.sort(),u.sort();for(let h=0;h<l.length&&h<u.length;++h){const d=le(l[h],u[h]);if(d!==0)return d;const f=$r(a[l[h]],c[u[h]]);if(f!==0)return f}return le(l.length,u.length)}(t.mapValue,e.mapValue);default:throw W()}}function dd(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return le(t,e);const n=Cn(t),r=Cn(e),s=le(n.seconds,r.seconds);return s!==0?s:le(n.nanos,r.nanos)}function Br(t){return ql(t)}function ql(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=Cn(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return tr(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return B.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",s=!0;for(const i of n.values||[])s?s=!1:r+=",",r+=ql(i);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let s="{",i=!0;for(const o of r)i?i=!1:s+=",",s+=`${o}:${ql(n.fields[o])}`;return s+"}"}(t.mapValue):W()}function fd(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function Kl(t){return!!t&&"integerValue"in t}function cu(t){return!!t&&"arrayValue"in t}function pd(t){return!!t&&"nullValue"in t}function gd(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function to(t){return!!t&&"mapValue"in t}function Ts(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return or(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=Ts(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Ts(t.arrayValue.values[n]);return e}return Object.assign({},t)}function Y0(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
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
 */class ft{constructor(e){this.value=e}static empty(){return new ft({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!to(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Ts(n)}setAll(e){let n=Ze.emptyPath(),r={},s=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const l=this.getFieldsMap(n);this.applyChanges(l,r,s),r={},s=[],n=a.popLast()}o?r[a.lastSegment()]=Ts(o):s.push(a.lastSegment())});const i=this.getFieldsMap(n);this.applyChanges(i,r,s)}delete(e){const n=this.field(e.popLast());to(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return Wt(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=n.mapValue.fields[e.get(r)];to(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=s),n=s}return n.mapValue.fields}applyChanges(e,n,r){or(n,(s,i)=>e[s]=i);for(const s of r)delete e[s]}clone(){return new ft(Ts(this.value))}}function $g(t){const e=[];return or(t.fields,(n,r)=>{const s=new Ze([n]);if(to(r)){const i=$g(r.mapValue).fields;if(i.length===0)e.push(s);else for(const o of i)e.push(s.child(o))}else e.push(s)}),new mt(e)}/**
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
 */class Ye{constructor(e,n,r,s,i,o,a){this.key=e,this.documentType=n,this.version=r,this.readTime=s,this.createTime=i,this.data=o,this.documentState=a}static newInvalidDocument(e){return new Ye(e,0,J.min(),J.min(),J.min(),ft.empty(),0)}static newFoundDocument(e,n,r,s){return new Ye(e,1,n,J.min(),r,s,0)}static newNoDocument(e,n){return new Ye(e,2,n,J.min(),J.min(),ft.empty(),0)}static newUnknownDocument(e,n){return new Ye(e,3,n,J.min(),J.min(),ft.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(J.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=ft.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=ft.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=J.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Ye&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Ye(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class So{constructor(e,n){this.position=e,this.inclusive=n}}function md(t,e,n){let r=0;for(let s=0;s<t.position.length;s++){const i=e[s],o=t.position[s];if(i.field.isKeyField()?r=B.comparator(B.fromName(o.referenceValue),n.key):r=$r(o,n.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function _d(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!Wt(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class As{constructor(e,n="asc"){this.field=e,this.dir=n}}function J0(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
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
 */class Bg{}class De extends Bg{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new Z0(e,n,r):n==="array-contains"?new nA(e,r):n==="in"?new rA(e,r):n==="not-in"?new sA(e,r):n==="array-contains-any"?new iA(e,r):new De(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new eA(e,r):new tA(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison($r(n,this.value)):n!==null&&nr(this.value)===nr(n)&&this.matchesComparison($r(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return W()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}getFirstInequalityField(){return this.isInequality()?this.field:null}}class Dt extends Bg{constructor(e,n){super(),this.filters=e,this.op=n,this.ce=null}static create(e,n){return new Dt(e,n)}matches(e){return jg(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ce!==null||(this.ce=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ce}getFilters(){return Object.assign([],this.filters)}getFirstInequalityField(){const e=this.le(n=>n.isInequality());return e!==null?e.field:null}le(e){for(const n of this.getFlattenedFilters())if(e(n))return n;return null}}function jg(t){return t.op==="and"}function qg(t){return X0(t)&&jg(t)}function X0(t){for(const e of t.filters)if(e instanceof Dt)return!1;return!0}function Hl(t){if(t instanceof De)return t.field.canonicalString()+t.op.toString()+Br(t.value);if(qg(t))return t.filters.map(e=>Hl(e)).join(",");{const e=t.filters.map(n=>Hl(n)).join(",");return`${t.op}(${e})`}}function Kg(t,e){return t instanceof De?function(r,s){return s instanceof De&&r.op===s.op&&r.field.isEqual(s.field)&&Wt(r.value,s.value)}(t,e):t instanceof Dt?function(r,s){return s instanceof Dt&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce((i,o,a)=>i&&Kg(o,s.filters[a]),!0):!1}(t,e):void W()}function Hg(t){return t instanceof De?function(n){return`${n.field.canonicalString()} ${n.op} ${Br(n.value)}`}(t):t instanceof Dt?function(n){return n.op.toString()+" {"+n.getFilters().map(Hg).join(" ,")+"}"}(t):"Filter"}class Z0 extends De{constructor(e,n,r){super(e,n,r),this.key=B.fromName(r.referenceValue)}matches(e){const n=B.comparator(e.key,this.key);return this.matchesComparison(n)}}class eA extends De{constructor(e,n){super(e,"in",n),this.keys=zg("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class tA extends De{constructor(e,n){super(e,"not-in",n),this.keys=zg("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function zg(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>B.fromName(r.referenceValue))}class nA extends De{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return cu(n)&&Ys(n.arrayValue,this.value)}}class rA extends De{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Ys(this.value.arrayValue,n)}}class sA extends De{constructor(e,n){super(e,"not-in",n)}matches(e){if(Ys(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!Ys(this.value.arrayValue,n)}}class iA extends De{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!cu(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>Ys(this.value.arrayValue,r))}}/**
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
 */class oA{constructor(e,n=null,r=[],s=[],i=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=o,this.endAt=a,this.he=null}}function yd(t,e=null,n=[],r=[],s=null,i=null,o=null){return new oA(t,e,n,r,s,i,o)}function uu(t){const e=Z(t);if(e.he===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>Hl(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),da(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>Br(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>Br(r)).join(",")),e.he=n}return e.he}function hu(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!J0(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!Kg(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!_d(t.startAt,e.startAt)&&_d(t.endAt,e.endAt)}function zl(t){return B.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
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
 */class wi{constructor(e,n=null,r=[],s=[],i=null,o="F",a=null,l=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=o,this.startAt=a,this.endAt=l,this.Pe=null,this.Ie=null,this.de=null,this.startAt,this.endAt}}function aA(t,e,n,r,s,i,o,a){return new wi(t,e,n,r,s,i,o,a)}function du(t){return new wi(t)}function vd(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function Wg(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function fu(t){for(const e of t.filters){const n=e.getFirstInequalityField();if(n!==null)return n}return null}function Gg(t){return t.collectionGroup!==null}function bs(t){const e=Z(t);if(e.Pe===null){e.Pe=[];const n=fu(e),r=Wg(e);if(n!==null&&r===null)n.isKeyField()||e.Pe.push(new As(n)),e.Pe.push(new As(Ze.keyField(),"asc"));else{let s=!1;for(const i of e.explicitOrderBy)e.Pe.push(i),i.field.isKeyField()&&(s=!0);if(!s){const i=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.Pe.push(new As(Ze.keyField(),i))}}}return e.Pe}function Kt(t){const e=Z(t);return e.Ie||(e.Ie=lA(e,bs(t))),e.Ie}function lA(t,e){if(t.limitType==="F")return yd(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(s=>{const i=s.dir==="desc"?"asc":"desc";return new As(s.field,i)});const n=t.endAt?new So(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new So(t.startAt.position,t.startAt.inclusive):null;return yd(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function Wl(t,e){e.getFirstInequalityField(),fu(t);const n=t.filters.concat([e]);return new wi(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function Gl(t,e,n){return new wi(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function fa(t,e){return hu(Kt(t),Kt(e))&&t.limitType===e.limitType}function Qg(t){return`${uu(Kt(t))}|lt:${t.limitType}`}function mr(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(s=>Hg(s)).join(", ")}]`),da(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(s=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(s)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(s=>Br(s)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(s=>Br(s)).join(",")),`Target(${r})`}(Kt(t))}; limitType=${t.limitType})`}function pa(t,e){return e.isFoundDocument()&&function(r,s){const i=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(i):B.isDocumentKey(r.path)?r.path.isEqual(i):r.path.isImmediateParentOf(i)}(t,e)&&function(r,s){for(const i of bs(r))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(t,e)&&function(r,s){for(const i of r.filters)if(!i.matches(s))return!1;return!0}(t,e)&&function(r,s){return!(r.startAt&&!function(o,a,l){const c=md(o,a,l);return o.inclusive?c<=0:c<0}(r.startAt,bs(r),s)||r.endAt&&!function(o,a,l){const c=md(o,a,l);return o.inclusive?c>=0:c>0}(r.endAt,bs(r),s))}(t,e)}function cA(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function Yg(t){return(e,n)=>{let r=!1;for(const s of bs(t)){const i=uA(s,e,n);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function uA(t,e,n){const r=t.field.isKeyField()?B.comparator(e.key,n.key):function(i,o,a){const l=o.data.field(i),c=a.data.field(i);return l!==null&&c!==null?$r(l,c):W()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return W()}}/**
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
 */class es{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,n]);s.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[n]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){or(this.inner,(n,r)=>{for(const[s,i]of r)e(s,i)})}isEmpty(){return Ug(this.inner)}size(){return this.innerSize}}/**
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
 */const hA=new be(B.comparator);function an(){return hA}const Jg=new be(B.comparator);function ps(...t){let e=Jg;for(const n of t)e=e.insert(n.key,n);return e}function Xg(t){let e=Jg;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function qn(){return Rs()}function Zg(){return Rs()}function Rs(){return new es(t=>t.toString(),(t,e)=>t.isEqual(e))}const dA=new be(B.comparator),fA=new st(B.comparator);function re(...t){let e=fA;for(const n of t)e=e.add(n);return e}const pA=new st(le);function gA(){return pA}/**
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
 */function em(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Po(e)?"-0":e}}function tm(t){return{integerValue:""+t}}function mA(t,e){return W0(e)?tm(e):em(t,e)}/**
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
 */class ga{constructor(){this._=void 0}}function _A(t,e,n){return t instanceof ko?function(s,i){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&au(i)&&(i=lu(i)),i&&(o.fields.__previous_value__=i),{mapValue:o}}(n,e):t instanceof Js?rm(t,e):t instanceof Xs?sm(t,e):function(s,i){const o=nm(s,i),a=wd(o)+wd(s.Te);return Kl(o)&&Kl(s.Te)?tm(a):em(s.serializer,a)}(t,e)}function yA(t,e,n){return t instanceof Js?rm(t,e):t instanceof Xs?sm(t,e):n}function nm(t,e){return t instanceof xo?function(r){return Kl(r)||function(i){return!!i&&"doubleValue"in i}(r)}(e)?e:{integerValue:0}:null}class ko extends ga{}class Js extends ga{constructor(e){super(),this.elements=e}}function rm(t,e){const n=im(e);for(const r of t.elements)n.some(s=>Wt(s,r))||n.push(r);return{arrayValue:{values:n}}}class Xs extends ga{constructor(e){super(),this.elements=e}}function sm(t,e){let n=im(e);for(const r of t.elements)n=n.filter(s=>!Wt(s,r));return{arrayValue:{values:n}}}class xo extends ga{constructor(e,n){super(),this.serializer=e,this.Te=n}}function wd(t){return xe(t.integerValue||t.doubleValue)}function im(t){return cu(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function vA(t,e){return t.field.isEqual(e.field)&&function(r,s){return r instanceof Js&&s instanceof Js||r instanceof Xs&&s instanceof Xs?Fr(r.elements,s.elements,Wt):r instanceof xo&&s instanceof xo?Wt(r.Te,s.Te):r instanceof ko&&s instanceof ko}(t.transform,e.transform)}class wA{constructor(e,n){this.version=e,this.transformResults=n}}class Et{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new Et}static exists(e){return new Et(void 0,e)}static updateTime(e){return new Et(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function no(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class ma{}function om(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new pu(t.key,Et.none()):new Ei(t.key,t.data,Et.none());{const n=t.data,r=ft.empty();let s=new st(Ze.comparator);for(let i of e.fields)if(!s.has(i)){let o=n.field(i);o===null&&i.length>1&&(i=i.popLast(),o=n.field(i)),o===null?r.delete(i):r.set(i,o),s=s.add(i)}return new Dn(t.key,r,new mt(s.toArray()),Et.none())}}function EA(t,e,n){t instanceof Ei?function(s,i,o){const a=s.value.clone(),l=Id(s.fieldTransforms,i,o.transformResults);a.setAll(l),i.convertToFoundDocument(o.version,a).setHasCommittedMutations()}(t,e,n):t instanceof Dn?function(s,i,o){if(!no(s.precondition,i))return void i.convertToUnknownDocument(o.version);const a=Id(s.fieldTransforms,i,o.transformResults),l=i.data;l.setAll(am(s)),l.setAll(a),i.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(t,e,n):function(s,i,o){i.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function Cs(t,e,n,r){return t instanceof Ei?function(i,o,a,l){if(!no(i.precondition,o))return a;const c=i.value.clone(),u=Td(i.fieldTransforms,l,o);return c.setAll(u),o.convertToFoundDocument(o.version,c).setHasLocalMutations(),null}(t,e,n,r):t instanceof Dn?function(i,o,a,l){if(!no(i.precondition,o))return a;const c=Td(i.fieldTransforms,l,o),u=o.data;return u.setAll(am(i)),u.setAll(c),o.convertToFoundDocument(o.version,u).setHasLocalMutations(),a===null?null:a.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(h=>h.field))}(t,e,n,r):function(i,o,a){return no(i.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):a}(t,e,n)}function IA(t,e){let n=null;for(const r of t.fieldTransforms){const s=e.data.field(r.field),i=nm(r.transform,s||null);i!=null&&(n===null&&(n=ft.empty()),n.set(r.field,i))}return n||null}function Ed(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&Fr(r,s,(i,o)=>vA(i,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Ei extends ma{constructor(e,n,r,s=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class Dn extends ma{constructor(e,n,r,s,i=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function am(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function Id(t,e,n){const r=new Map;Te(t.length===n.length);for(let s=0;s<n.length;s++){const i=t[s],o=i.transform,a=e.data.field(i.field);r.set(i.field,yA(o,a,n[s]))}return r}function Td(t,e,n){const r=new Map;for(const s of t){const i=s.transform,o=n.data.field(s.field);r.set(s.field,_A(i,o,e))}return r}class pu extends ma{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class TA extends ma{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class AA{constructor(e,n,r,s){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&EA(i,e,r[s])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=Cs(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=Cs(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=Zg();return this.mutations.forEach(s=>{const i=e.get(s.key),o=i.overlayedDocument;let a=this.applyToLocalView(o,i.mutatedFields);a=n.has(s.key)?null:a;const l=om(o,a);l!==null&&r.set(s.key,l),o.isValidDocument()||o.convertToNoDocument(J.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),re())}isEqual(e){return this.batchId===e.batchId&&Fr(this.mutations,e.mutations,(n,r)=>Ed(n,r))&&Fr(this.baseMutations,e.baseMutations,(n,r)=>Ed(n,r))}}class gu{constructor(e,n,r,s){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=s}static from(e,n,r){Te(e.mutations.length===r.length);let s=function(){return dA}();const i=e.mutations;for(let o=0;o<i.length;o++)s=s.insert(i[o].key,r[o].version);return new gu(e,n,r,s)}}/**
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
 */class bA{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class RA{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
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
 */var ke,oe;function CA(t){switch(t){default:return W();case I.CANCELLED:case I.UNKNOWN:case I.DEADLINE_EXCEEDED:case I.RESOURCE_EXHAUSTED:case I.INTERNAL:case I.UNAVAILABLE:case I.UNAUTHENTICATED:return!1;case I.INVALID_ARGUMENT:case I.NOT_FOUND:case I.ALREADY_EXISTS:case I.PERMISSION_DENIED:case I.FAILED_PRECONDITION:case I.ABORTED:case I.OUT_OF_RANGE:case I.UNIMPLEMENTED:case I.DATA_LOSS:return!0}}function lm(t){if(t===void 0)return on("GRPC error has no .code"),I.UNKNOWN;switch(t){case ke.OK:return I.OK;case ke.CANCELLED:return I.CANCELLED;case ke.UNKNOWN:return I.UNKNOWN;case ke.DEADLINE_EXCEEDED:return I.DEADLINE_EXCEEDED;case ke.RESOURCE_EXHAUSTED:return I.RESOURCE_EXHAUSTED;case ke.INTERNAL:return I.INTERNAL;case ke.UNAVAILABLE:return I.UNAVAILABLE;case ke.UNAUTHENTICATED:return I.UNAUTHENTICATED;case ke.INVALID_ARGUMENT:return I.INVALID_ARGUMENT;case ke.NOT_FOUND:return I.NOT_FOUND;case ke.ALREADY_EXISTS:return I.ALREADY_EXISTS;case ke.PERMISSION_DENIED:return I.PERMISSION_DENIED;case ke.FAILED_PRECONDITION:return I.FAILED_PRECONDITION;case ke.ABORTED:return I.ABORTED;case ke.OUT_OF_RANGE:return I.OUT_OF_RANGE;case ke.UNIMPLEMENTED:return I.UNIMPLEMENTED;case ke.DATA_LOSS:return I.DATA_LOSS;default:return W()}}(oe=ke||(ke={}))[oe.OK=0]="OK",oe[oe.CANCELLED=1]="CANCELLED",oe[oe.UNKNOWN=2]="UNKNOWN",oe[oe.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",oe[oe.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",oe[oe.NOT_FOUND=5]="NOT_FOUND",oe[oe.ALREADY_EXISTS=6]="ALREADY_EXISTS",oe[oe.PERMISSION_DENIED=7]="PERMISSION_DENIED",oe[oe.UNAUTHENTICATED=16]="UNAUTHENTICATED",oe[oe.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",oe[oe.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",oe[oe.ABORTED=10]="ABORTED",oe[oe.OUT_OF_RANGE=11]="OUT_OF_RANGE",oe[oe.UNIMPLEMENTED=12]="UNIMPLEMENTED",oe[oe.INTERNAL=13]="INTERNAL",oe[oe.UNAVAILABLE=14]="UNAVAILABLE",oe[oe.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function PA(){return new TextEncoder}/**
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
 */const SA=new Pr([4294967295,4294967295],0);function Ad(t){const e=PA().encode(t),n=new D0;return n.update(e),new Uint8Array(n.digest())}function bd(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),s=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new Pr([n,r],0),new Pr([s,i],0)]}class mu{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new gs(`Invalid padding: ${n}`);if(r<0)throw new gs(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new gs(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new gs(`Invalid padding when bitmap length is 0: ${n}`);this.Ae=8*e.length-n,this.Re=Pr.fromNumber(this.Ae)}Ve(e,n,r){let s=e.add(n.multiply(Pr.fromNumber(r)));return s.compare(SA)===1&&(s=new Pr([s.getBits(0),s.getBits(1)],0)),s.modulo(this.Re).toNumber()}me(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Ae===0)return!1;const n=Ad(e),[r,s]=bd(n);for(let i=0;i<this.hashCount;i++){const o=this.Ve(r,s,i);if(!this.me(o))return!1}return!0}static create(e,n,r){const s=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),o=new mu(i,s,n);return r.forEach(a=>o.insert(a)),o}insert(e){if(this.Ae===0)return;const n=Ad(e),[r,s]=bd(n);for(let i=0;i<this.hashCount;i++){const o=this.Ve(r,s,i);this.fe(o)}}fe(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class gs extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class _a{constructor(e,n,r,s,i){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const s=new Map;return s.set(e,Ii.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new _a(J.min(),s,new be(le),an(),re())}}class Ii{constructor(e,n,r,s,i){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new Ii(r,n,re(),re(),re())}}/**
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
 */class ro{constructor(e,n,r,s){this.ge=e,this.removedTargetIds=n,this.key=r,this.pe=s}}class cm{constructor(e,n){this.targetId=e,this.ye=n}}class um{constructor(e,n,r=ot.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=s}}class Rd{constructor(){this.we=0,this.Se=Pd(),this.be=ot.EMPTY_BYTE_STRING,this.De=!1,this.Ce=!0}get current(){return this.De}get resumeToken(){return this.be}get ve(){return this.we!==0}get Fe(){return this.Ce}Me(e){e.approximateByteSize()>0&&(this.Ce=!0,this.be=e)}xe(){let e=re(),n=re(),r=re();return this.Se.forEach((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:n=n.add(s);break;case 1:r=r.add(s);break;default:W()}}),new Ii(this.be,this.De,e,n,r)}Oe(){this.Ce=!1,this.Se=Pd()}Ne(e,n){this.Ce=!0,this.Se=this.Se.insert(e,n)}Be(e){this.Ce=!0,this.Se=this.Se.remove(e)}Le(){this.we+=1}ke(){this.we-=1}qe(){this.Ce=!0,this.De=!0}}class kA{constructor(e){this.Qe=e,this.Ke=new Map,this.$e=an(),this.Ue=Cd(),this.We=new be(le)}Ge(e){for(const n of e.ge)e.pe&&e.pe.isFoundDocument()?this.ze(n,e.pe):this.je(n,e.key,e.pe);for(const n of e.removedTargetIds)this.je(n,e.key,e.pe)}He(e){this.forEachTarget(e,n=>{const r=this.Je(n);switch(e.state){case 0:this.Ye(n)&&r.Me(e.resumeToken);break;case 1:r.ke(),r.ve||r.Oe(),r.Me(e.resumeToken);break;case 2:r.ke(),r.ve||this.removeTarget(n);break;case 3:this.Ye(n)&&(r.qe(),r.Me(e.resumeToken));break;case 4:this.Ye(n)&&(this.Ze(n),r.Me(e.resumeToken));break;default:W()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Ke.forEach((r,s)=>{this.Ye(s)&&n(s)})}Xe(e){const n=e.targetId,r=e.ye.count,s=this.et(n);if(s){const i=s.target;if(zl(i))if(r===0){const o=new B(i.path);this.je(n,o,Ye.newNoDocument(o,J.min()))}else Te(r===1);else{const o=this.tt(n);if(o!==r){const a=this.nt(e),l=a?this.rt(a,e,o):1;if(l!==0){this.Ze(n);const c=l===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.We=this.We.insert(n,c)}}}}}nt(e){const n=e.ye.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:i=0}=n;let o,a;try{o=tr(r).toUint8Array()}catch(l){if(l instanceof Fg)return Ur("Decoding the base64 bloom filter in existence filter failed ("+l.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw l}try{a=new mu(o,s,i)}catch(l){return Ur(l instanceof gs?"BloomFilter error: ":"Applying bloom filter failed: ",l),null}return a.Ae===0?null:a}rt(e,n,r){return n.ye.count===r-this.ot(e,n.targetId)?0:2}ot(e,n){const r=this.Qe.getRemoteKeysForTarget(n);let s=0;return r.forEach(i=>{const o=this.Qe.st(),a=`projects/${o.projectId}/databases/${o.database}/documents/${i.path.canonicalString()}`;e.mightContain(a)||(this.je(n,i,null),s++)}),s}_t(e){const n=new Map;this.Ke.forEach((i,o)=>{const a=this.et(o);if(a){if(i.current&&zl(a.target)){const l=new B(a.target.path);this.$e.get(l)!==null||this.ut(o,l)||this.je(o,l,Ye.newNoDocument(l,e))}i.Fe&&(n.set(o,i.xe()),i.Oe())}});let r=re();this.Ue.forEach((i,o)=>{let a=!0;o.forEachWhile(l=>{const c=this.et(l);return!c||c.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)}),a&&(r=r.add(i))}),this.$e.forEach((i,o)=>o.setReadTime(e));const s=new _a(e,n,this.We,this.$e,r);return this.$e=an(),this.Ue=Cd(),this.We=new be(le),s}ze(e,n){if(!this.Ye(e))return;const r=this.ut(e,n.key)?2:0;this.Je(e).Ne(n.key,r),this.$e=this.$e.insert(n.key,n),this.Ue=this.Ue.insert(n.key,this.ct(n.key).add(e))}je(e,n,r){if(!this.Ye(e))return;const s=this.Je(e);this.ut(e,n)?s.Ne(n,1):s.Be(n),this.Ue=this.Ue.insert(n,this.ct(n).delete(e)),r&&(this.$e=this.$e.insert(n,r))}removeTarget(e){this.Ke.delete(e)}tt(e){const n=this.Je(e).xe();return this.Qe.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Le(e){this.Je(e).Le()}Je(e){let n=this.Ke.get(e);return n||(n=new Rd,this.Ke.set(e,n)),n}ct(e){let n=this.Ue.get(e);return n||(n=new st(le),this.Ue=this.Ue.insert(e,n)),n}Ye(e){const n=this.et(e)!==null;return n||U("WatchChangeAggregator","Detected inactive target",e),n}et(e){const n=this.Ke.get(e);return n&&n.ve?null:this.Qe.lt(e)}Ze(e){this.Ke.set(e,new Rd),this.Qe.getRemoteKeysForTarget(e).forEach(n=>{this.je(e,n,null)})}ut(e,n){return this.Qe.getRemoteKeysForTarget(e).has(n)}}function Cd(){return new be(B.comparator)}function Pd(){return new be(B.comparator)}const xA=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),DA=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))(),NA=(()=>({and:"AND",or:"OR"}))();class OA{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function Ql(t,e){return t.useProto3Json||da(e)?e:{value:e}}function Do(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function hm(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function VA(t,e){return Do(t,e.toTimestamp())}function Ht(t){return Te(!!t),J.fromTimestamp(function(n){const r=Cn(n);return new he(r.seconds,r.nanos)}(t))}function _u(t,e){return function(r){return new Ie(["projects",r.projectId,"databases",r.database])}(t).child("documents").child(e).canonicalString()}function dm(t){const e=Ie.fromString(t);return Te(mm(e)),e}function Yl(t,e){return _u(t.databaseId,e.path)}function el(t,e){const n=dm(e);if(n.get(1)!==t.databaseId.projectId)throw new L(I.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new L(I.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new B(fm(n))}function Jl(t,e){return _u(t.databaseId,e)}function MA(t){const e=dm(t);return e.length===4?Ie.emptyPath():fm(e)}function Xl(t){return new Ie(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function fm(t){return Te(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function Sd(t,e,n){return{name:Yl(t,e),fields:n.value.mapValue.fields}}function LA(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(c){return c==="NO_CHANGE"?0:c==="ADD"?1:c==="REMOVE"?2:c==="CURRENT"?3:c==="RESET"?4:W()}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=function(c,u){return c.useProto3Json?(Te(u===void 0||typeof u=="string"),ot.fromBase64String(u||"")):(Te(u===void 0||u instanceof Uint8Array),ot.fromUint8Array(u||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(c){const u=c.code===void 0?I.UNKNOWN:lm(c.code);return new L(u,c.message||"")}(o);n=new um(r,s,i,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=el(t,r.document.name),i=Ht(r.document.updateTime),o=r.document.createTime?Ht(r.document.createTime):J.min(),a=new ft({mapValue:{fields:r.document.fields}}),l=Ye.newFoundDocument(s,i,o,a),c=r.targetIds||[],u=r.removedTargetIds||[];n=new ro(c,u,l.key,l)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=el(t,r.document),i=r.readTime?Ht(r.readTime):J.min(),o=Ye.newNoDocument(s,i),a=r.removedTargetIds||[];n=new ro([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=el(t,r.document),i=r.removedTargetIds||[];n=new ro([],i,s,null)}else{if(!("filter"in e))return W();{e.filter;const r=e.filter;r.targetId;const{count:s=0,unchangedNames:i}=r,o=new RA(s,i),a=r.targetId;n=new cm(a,o)}}return n}function UA(t,e){let n;if(e instanceof Ei)n={update:Sd(t,e.key,e.value)};else if(e instanceof pu)n={delete:Yl(t,e.key)};else if(e instanceof Dn)n={update:Sd(t,e.key,e.data),updateMask:WA(e.fieldMask)};else{if(!(e instanceof TA))return W();n={verify:Yl(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(i,o){const a=o.transform;if(a instanceof ko)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(a instanceof Js)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:a.elements}};if(a instanceof Xs)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:a.elements}};if(a instanceof xo)return{fieldPath:o.field.canonicalString(),increment:a.Te};throw W()}(0,r))),e.precondition.isNone||(n.currentDocument=function(s,i){return i.updateTime!==void 0?{updateTime:VA(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:W()}(t,e.precondition)),n}function FA(t,e){return t&&t.length>0?(Te(e!==void 0),t.map(n=>function(s,i){let o=s.updateTime?Ht(s.updateTime):Ht(i);return o.isEqual(J.min())&&(o=Ht(i)),new wA(o,s.transformResults||[])}(n,e))):[]}function $A(t,e){return{documents:[Jl(t,e.path)]}}function BA(t,e){const n={structuredQuery:{}},r=e.path;e.collectionGroup!==null?(n.parent=Jl(t,r),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=Jl(t,r.popLast()),n.structuredQuery.from=[{collectionId:r.lastSegment()}]);const s=function(l){if(l.length!==0)return gm(Dt.create(l,"and"))}(e.filters);s&&(n.structuredQuery.where=s);const i=function(l){if(l.length!==0)return l.map(c=>function(h){return{field:_r(h.field),direction:KA(h.dir)}}(c))}(e.orderBy);i&&(n.structuredQuery.orderBy=i);const o=Ql(t,e.limit);return o!==null&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt=function(l){return{before:l.inclusive,values:l.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(l){return{before:!l.inclusive,values:l.position}}(e.endAt)),n}function jA(t){let e=MA(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let s=null;if(r>0){Te(r===1);const u=n.from[0];u.allDescendants?s=u.collectionId:e=e.child(u.collectionId)}let i=[];n.where&&(i=function(h){const d=pm(h);return d instanceof Dt&&qg(d)?d.getFilters():[d]}(n.where));let o=[];n.orderBy&&(o=function(h){return h.map(d=>function(_){return new As(yr(_.field),function(E){switch(E){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(_.direction))}(d))}(n.orderBy));let a=null;n.limit&&(a=function(h){let d;return d=typeof h=="object"?h.value:h,da(d)?null:d}(n.limit));let l=null;n.startAt&&(l=function(h){const d=!!h.before,f=h.values||[];return new So(f,d)}(n.startAt));let c=null;return n.endAt&&(c=function(h){const d=!h.before,f=h.values||[];return new So(f,d)}(n.endAt)),aA(e,s,o,i,a,"F",l,c)}function qA(t,e){const n=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return W()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function pm(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=yr(n.unaryFilter.field);return De.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=yr(n.unaryFilter.field);return De.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=yr(n.unaryFilter.field);return De.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=yr(n.unaryFilter.field);return De.create(o,"!=",{nullValue:"NULL_VALUE"});default:return W()}}(t):t.fieldFilter!==void 0?function(n){return De.create(yr(n.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return W()}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return Dt.create(n.compositeFilter.filters.map(r=>pm(r)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return W()}}(n.compositeFilter.op))}(t):W()}function KA(t){return xA[t]}function HA(t){return DA[t]}function zA(t){return NA[t]}function _r(t){return{fieldPath:t.canonicalString()}}function yr(t){return Ze.fromServerFormat(t.fieldPath)}function gm(t){return t instanceof De?function(n){if(n.op==="=="){if(gd(n.value))return{unaryFilter:{field:_r(n.field),op:"IS_NAN"}};if(pd(n.value))return{unaryFilter:{field:_r(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(gd(n.value))return{unaryFilter:{field:_r(n.field),op:"IS_NOT_NAN"}};if(pd(n.value))return{unaryFilter:{field:_r(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:_r(n.field),op:HA(n.op),value:n.value}}}(t):t instanceof Dt?function(n){const r=n.getFilters().map(s=>gm(s));return r.length===1?r[0]:{compositeFilter:{op:zA(n.op),filters:r}}}(t):W()}function WA(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function mm(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
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
 */class yn{constructor(e,n,r,s,i=J.min(),o=J.min(),a=ot.EMPTY_BYTE_STRING,l=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a,this.expectedCount=l}withSequenceNumber(e){return new yn(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new yn(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new yn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new yn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class GA{constructor(e){this.ht=e}}function QA(t){const e=jA({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?Gl(e,e.limit,"L"):e}/**
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
 */class YA{constructor(){this.an=new JA}addToCollectionParentIndex(e,n){return this.an.add(n),b.resolve()}getCollectionParents(e,n){return b.resolve(this.an.getEntries(n))}addFieldIndex(e,n){return b.resolve()}deleteFieldIndex(e,n){return b.resolve()}deleteAllFieldIndexes(e){return b.resolve()}createTargetIndexes(e,n){return b.resolve()}getDocumentsMatchingTarget(e,n){return b.resolve(null)}getIndexType(e,n){return b.resolve(0)}getFieldIndexes(e,n){return b.resolve([])}getNextCollectionGroupToUpdate(e){return b.resolve(null)}getMinOffset(e,n){return b.resolve(Rn.min())}getMinOffsetFromCollectionGroup(e,n){return b.resolve(Rn.min())}updateCollectionGroup(e,n,r){return b.resolve()}updateIndexEntries(e,n){return b.resolve()}}class JA{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n]||new st(Ie.comparator),i=!s.has(r);return this.index[n]=s.add(r),i}has(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n];return s&&s.has(r)}getEntries(e){return(this.index[e]||new st(Ie.comparator)).toArray()}}/**
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
 */class jr{constructor(e){this.Nn=e}next(){return this.Nn+=2,this.Nn}static Bn(){return new jr(0)}static Ln(){return new jr(-1)}}/**
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
 */class XA{constructor(){this.changes=new es(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,Ye.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?b.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class ZA{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
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
 */class eb{constructor(e,n,r,s){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=s}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(s=>(r=s,this.remoteDocumentCache.getEntry(e,n))).next(s=>(r!==null&&Cs(r.mutation,s,mt.empty(),he.now()),s))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,re()).next(()=>r))}getLocalViewOfDocuments(e,n,r=re()){const s=qn();return this.populateOverlays(e,s,n).next(()=>this.computeViews(e,n,s,r).next(i=>{let o=ps();return i.forEach((a,l)=>{o=o.insert(a,l.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=qn();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,re()))}populateOverlays(e,n,r){const s=[];return r.forEach(i=>{n.has(i)||s.push(i)}),this.documentOverlayCache.getOverlays(e,s).next(i=>{i.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,r,s){let i=an();const o=Rs(),a=function(){return Rs()}();return n.forEach((l,c)=>{const u=r.get(c.key);s.has(c.key)&&(u===void 0||u.mutation instanceof Dn)?i=i.insert(c.key,c):u!==void 0?(o.set(c.key,u.mutation.getFieldMask()),Cs(u.mutation,c,u.mutation.getFieldMask(),he.now())):o.set(c.key,mt.empty())}),this.recalculateAndSaveOverlays(e,i).next(l=>(l.forEach((c,u)=>o.set(c,u)),n.forEach((c,u)=>{var h;return a.set(c,new ZA(u,(h=o.get(c))!==null&&h!==void 0?h:null))}),a))}recalculateAndSaveOverlays(e,n){const r=Rs();let s=new be((o,a)=>o-a),i=re();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(l=>{const c=n.get(l);if(c===null)return;let u=r.get(l)||mt.empty();u=a.applyToLocalView(c,u),r.set(l,u);const h=(s.get(a.batchId)||re()).add(l);s=s.insert(a.batchId,h)})}).next(()=>{const o=[],a=s.getReverseIterator();for(;a.hasNext();){const l=a.getNext(),c=l.key,u=l.value,h=Zg();u.forEach(d=>{if(!i.has(d)){const f=om(n.get(d),r.get(d));f!==null&&h.set(d,f),i=i.add(d)}}),o.push(this.documentOverlayCache.saveOverlays(e,c,h))}return b.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,s){return function(o){return B.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):Gg(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,s):this.getDocumentsMatchingCollectionQuery(e,n,r,s)}getNextDocuments(e,n,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,s).next(i=>{const o=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,s-i.size):b.resolve(qn());let a=-1,l=i;return o.next(c=>b.forEach(c,(u,h)=>(a<h.largestBatchId&&(a=h.largestBatchId),i.get(u)?b.resolve():this.remoteDocumentCache.getEntry(e,u).next(d=>{l=l.insert(u,d)}))).next(()=>this.populateOverlays(e,c,i)).next(()=>this.computeViews(e,l,c,re())).next(u=>({batchId:a,changes:Xg(u)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new B(n)).next(r=>{let s=ps();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(e,n,r,s){const i=n.collectionGroup;let o=ps();return this.indexManager.getCollectionParents(e,i).next(a=>b.forEach(a,l=>{const c=function(h,d){return new wi(d,null,h.explicitOrderBy.slice(),h.filters.slice(),h.limit,h.limitType,h.startAt,h.endAt)}(n,l.child(i));return this.getDocumentsMatchingCollectionQuery(e,c,r,s).next(u=>{u.forEach((h,d)=>{o=o.insert(h,d)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r,s){let i;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(o=>(i=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,i,s))).next(o=>{i.forEach((l,c)=>{const u=c.getKey();o.get(u)===null&&(o=o.insert(u,Ye.newInvalidDocument(u)))});let a=ps();return o.forEach((l,c)=>{const u=i.get(l);u!==void 0&&Cs(u.mutation,c,mt.empty(),he.now()),pa(n,c)&&(a=a.insert(l,c))}),a})}}/**
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
 */class tb{constructor(e){this.serializer=e,this.lr=new Map,this.hr=new Map}getBundleMetadata(e,n){return b.resolve(this.lr.get(n))}saveBundleMetadata(e,n){return this.lr.set(n.id,function(s){return{id:s.id,version:s.version,createTime:Ht(s.createTime)}}(n)),b.resolve()}getNamedQuery(e,n){return b.resolve(this.hr.get(n))}saveNamedQuery(e,n){return this.hr.set(n.name,function(s){return{name:s.name,query:QA(s.bundledQuery),readTime:Ht(s.readTime)}}(n)),b.resolve()}}/**
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
 */class nb{constructor(){this.overlays=new be(B.comparator),this.Pr=new Map}getOverlay(e,n){return b.resolve(this.overlays.get(n))}getOverlays(e,n){const r=qn();return b.forEach(n,s=>this.getOverlay(e,s).next(i=>{i!==null&&r.set(s,i)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((s,i)=>{this.It(e,n,i)}),b.resolve()}removeOverlaysForBatchId(e,n,r){const s=this.Pr.get(r);return s!==void 0&&(s.forEach(i=>this.overlays=this.overlays.remove(i)),this.Pr.delete(r)),b.resolve()}getOverlaysForCollection(e,n,r){const s=qn(),i=n.length+1,o=new B(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const l=a.getNext().value,c=l.getKey();if(!n.isPrefixOf(c.path))break;c.path.length===i&&l.largestBatchId>r&&s.set(l.getKey(),l)}return b.resolve(s)}getOverlaysForCollectionGroup(e,n,r,s){let i=new be((c,u)=>c-u);const o=this.overlays.getIterator();for(;o.hasNext();){const c=o.getNext().value;if(c.getKey().getCollectionGroup()===n&&c.largestBatchId>r){let u=i.get(c.largestBatchId);u===null&&(u=qn(),i=i.insert(c.largestBatchId,u)),u.set(c.getKey(),c)}}const a=qn(),l=i.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach((c,u)=>a.set(c,u)),!(a.size()>=s)););return b.resolve(a)}It(e,n,r){const s=this.overlays.get(r.key);if(s!==null){const o=this.Pr.get(s.largestBatchId).delete(r.key);this.Pr.set(s.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new bA(n,r));let i=this.Pr.get(n);i===void 0&&(i=re(),this.Pr.set(n,i)),this.Pr.set(n,i.add(r.key))}}/**
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
 */class yu{constructor(){this.Ir=new st(Me.dr),this.Tr=new st(Me.Er)}isEmpty(){return this.Ir.isEmpty()}addReference(e,n){const r=new Me(e,n);this.Ir=this.Ir.add(r),this.Tr=this.Tr.add(r)}Ar(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.Rr(new Me(e,n))}Vr(e,n){e.forEach(r=>this.removeReference(r,n))}mr(e){const n=new B(new Ie([])),r=new Me(n,e),s=new Me(n,e+1),i=[];return this.Tr.forEachInRange([r,s],o=>{this.Rr(o),i.push(o.key)}),i}gr(){this.Ir.forEach(e=>this.Rr(e))}Rr(e){this.Ir=this.Ir.delete(e),this.Tr=this.Tr.delete(e)}pr(e){const n=new B(new Ie([])),r=new Me(n,e),s=new Me(n,e+1);let i=re();return this.Tr.forEachInRange([r,s],o=>{i=i.add(o.key)}),i}containsKey(e){const n=new Me(e,0),r=this.Ir.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class Me{constructor(e,n){this.key=e,this.yr=n}static dr(e,n){return B.comparator(e.key,n.key)||le(e.yr,n.yr)}static Er(e,n){return le(e.yr,n.yr)||B.comparator(e.key,n.key)}}/**
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
 */class rb{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.wr=1,this.Sr=new st(Me.dr)}checkEmpty(e){return b.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,s){const i=this.wr;this.wr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new AA(i,n,r,s);this.mutationQueue.push(o);for(const a of s)this.Sr=this.Sr.add(new Me(a.key,i)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return b.resolve(o)}lookupMutationBatch(e,n){return b.resolve(this.br(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,s=this.Dr(r),i=s<0?0:s;return b.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return b.resolve(this.mutationQueue.length===0?-1:this.wr-1)}getAllMutationBatches(e){return b.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new Me(n,0),s=new Me(n,Number.POSITIVE_INFINITY),i=[];return this.Sr.forEachInRange([r,s],o=>{const a=this.br(o.yr);i.push(a)}),b.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new st(le);return n.forEach(s=>{const i=new Me(s,0),o=new Me(s,Number.POSITIVE_INFINITY);this.Sr.forEachInRange([i,o],a=>{r=r.add(a.yr)})}),b.resolve(this.Cr(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,s=r.length+1;let i=r;B.isDocumentKey(i)||(i=i.child(""));const o=new Me(new B(i),0);let a=new st(le);return this.Sr.forEachWhile(l=>{const c=l.key.path;return!!r.isPrefixOf(c)&&(c.length===s&&(a=a.add(l.yr)),!0)},o),b.resolve(this.Cr(a))}Cr(e){const n=[];return e.forEach(r=>{const s=this.br(r);s!==null&&n.push(s)}),n}removeMutationBatch(e,n){Te(this.vr(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.Sr;return b.forEach(n.mutations,s=>{const i=new Me(s.key,n.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this.Sr=r})}xn(e){}containsKey(e,n){const r=new Me(n,0),s=this.Sr.firstAfterOrEqual(r);return b.resolve(n.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,b.resolve()}vr(e,n){return this.Dr(e)}Dr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}br(e){const n=this.Dr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
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
 */class sb{constructor(e){this.Fr=e,this.docs=function(){return new be(B.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,s=this.docs.get(r),i=s?s.size:0,o=this.Fr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return b.resolve(r?r.document.mutableCopy():Ye.newInvalidDocument(n))}getEntries(e,n){let r=an();return n.forEach(s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():Ye.newInvalidDocument(s))}),b.resolve(r)}getDocumentsMatchingQuery(e,n,r,s){let i=an();const o=n.path,a=new B(o.child("")),l=this.docs.getIteratorFrom(a);for(;l.hasNext();){const{key:c,value:{document:u}}=l.getNext();if(!o.isPrefixOf(c.path))break;c.path.length>o.length+1||K0(q0(u),r)<=0||(s.has(u.key)||pa(n,u))&&(i=i.insert(u.key,u.mutableCopy()))}return b.resolve(i)}getAllFromCollectionGroup(e,n,r,s){W()}Mr(e,n){return b.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new ib(this)}getSize(e){return b.resolve(this.size)}}class ib extends XA{constructor(e){super(),this.ur=e}applyChanges(e){const n=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?n.push(this.ur.addEntry(e,s)):this.ur.removeEntry(r)}),b.waitFor(n)}getFromCache(e,n){return this.ur.getEntry(e,n)}getAllFromCache(e,n){return this.ur.getEntries(e,n)}}/**
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
 */class ob{constructor(e){this.persistence=e,this.Or=new es(n=>uu(n),hu),this.lastRemoteSnapshotVersion=J.min(),this.highestTargetId=0,this.Nr=0,this.Br=new yu,this.targetCount=0,this.Lr=jr.Bn()}forEachTarget(e,n){return this.Or.forEach((r,s)=>n(s)),b.resolve()}getLastRemoteSnapshotVersion(e){return b.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return b.resolve(this.Nr)}allocateTargetId(e){return this.highestTargetId=this.Lr.next(),b.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Nr&&(this.Nr=n),b.resolve()}Qn(e){this.Or.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.Lr=new jr(n),this.highestTargetId=n),e.sequenceNumber>this.Nr&&(this.Nr=e.sequenceNumber)}addTargetData(e,n){return this.Qn(n),this.targetCount+=1,b.resolve()}updateTargetData(e,n){return this.Qn(n),b.resolve()}removeTargetData(e,n){return this.Or.delete(n.target),this.Br.mr(n.targetId),this.targetCount-=1,b.resolve()}removeTargets(e,n,r){let s=0;const i=[];return this.Or.forEach((o,a)=>{a.sequenceNumber<=n&&r.get(a.targetId)===null&&(this.Or.delete(o),i.push(this.removeMatchingKeysForTargetId(e,a.targetId)),s++)}),b.waitFor(i).next(()=>s)}getTargetCount(e){return b.resolve(this.targetCount)}getTargetData(e,n){const r=this.Or.get(n)||null;return b.resolve(r)}addMatchingKeys(e,n,r){return this.Br.Ar(n,r),b.resolve()}removeMatchingKeys(e,n,r){this.Br.Vr(n,r);const s=this.persistence.referenceDelegate,i=[];return s&&n.forEach(o=>{i.push(s.markPotentiallyOrphaned(e,o))}),b.waitFor(i)}removeMatchingKeysForTargetId(e,n){return this.Br.mr(n),b.resolve()}getMatchingKeysForTargetId(e,n){const r=this.Br.pr(n);return b.resolve(r)}containsKey(e,n){return b.resolve(this.Br.containsKey(n))}}/**
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
 */class ab{constructor(e,n){this.kr={},this.overlays={},this.qr=new ou(0),this.Qr=!1,this.Qr=!0,this.referenceDelegate=e(this),this.Kr=new ob(this),this.indexManager=new YA,this.remoteDocumentCache=function(s){return new sb(s)}(r=>this.referenceDelegate.$r(r)),this.serializer=new GA(n),this.Ur=new tb(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Qr=!1,Promise.resolve()}get started(){return this.Qr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new nb,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.kr[e.toKey()];return r||(r=new rb(n,this.referenceDelegate),this.kr[e.toKey()]=r),r}getTargetCache(){return this.Kr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ur}runTransaction(e,n,r){U("MemoryPersistence","Starting transaction:",e);const s=new lb(this.qr.next());return this.referenceDelegate.Wr(),r(s).next(i=>this.referenceDelegate.Gr(s).next(()=>i)).toPromise().then(i=>(s.raiseOnCommittedEvent(),i))}zr(e,n){return b.or(Object.values(this.kr).map(r=>()=>r.containsKey(e,n)))}}class lb extends z0{constructor(e){super(),this.currentSequenceNumber=e}}class vu{constructor(e){this.persistence=e,this.jr=new yu,this.Hr=null}static Jr(e){return new vu(e)}get Yr(){if(this.Hr)return this.Hr;throw W()}addReference(e,n,r){return this.jr.addReference(r,n),this.Yr.delete(r.toString()),b.resolve()}removeReference(e,n,r){return this.jr.removeReference(r,n),this.Yr.add(r.toString()),b.resolve()}markPotentiallyOrphaned(e,n){return this.Yr.add(n.toString()),b.resolve()}removeTarget(e,n){this.jr.mr(n.targetId).forEach(s=>this.Yr.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(s=>{s.forEach(i=>this.Yr.add(i.toString()))}).next(()=>r.removeTargetData(e,n))}Wr(){this.Hr=new Set}Gr(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return b.forEach(this.Yr,r=>{const s=B.fromPath(r);return this.Zr(e,s).next(i=>{i||n.removeEntry(s,J.min())})}).next(()=>(this.Hr=null,n.apply(e)))}updateLimboDocument(e,n){return this.Zr(e,n).next(r=>{r?this.Yr.delete(n.toString()):this.Yr.add(n.toString())})}$r(e){return 0}Zr(e,n){return b.or([()=>b.resolve(this.jr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.zr(e,n)])}}/**
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
 */class wu{constructor(e,n,r,s){this.targetId=e,this.fromCache=n,this.Qi=r,this.Ki=s}static $i(e,n){let r=re(),s=re();for(const i of n.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new wu(e,n.fromCache,r,s)}}/**
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
 */class cb{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class ub{constructor(){this.Ui=!1,this.Wi=!1,this.Gi=100,this.zi=8}initialize(e,n){this.ji=e,this.indexManager=n,this.Ui=!0}getDocumentsMatchingQuery(e,n,r,s){const i={result:null};return this.Hi(e,n).next(o=>{i.result=o}).next(()=>{if(!i.result)return this.Ji(e,n,s,r).next(o=>{i.result=o})}).next(()=>{if(i.result)return;const o=new cb;return this.Yi(e,n,o).next(a=>{if(i.result=a,this.Wi)return this.Zi(e,n,o,a.size)})}).next(()=>i.result)}Zi(e,n,r,s){return r.documentReadCount<this.Gi?(as()<=se.DEBUG&&U("QueryEngine","SDK will not create cache indexes for query:",mr(n),"since it only creates cache indexes for collection contains","more than or equal to",this.Gi,"documents"),b.resolve()):(as()<=se.DEBUG&&U("QueryEngine","Query:",mr(n),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.zi*s?(as()<=se.DEBUG&&U("QueryEngine","The SDK decides to create cache indexes for query:",mr(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Kt(n))):b.resolve())}Hi(e,n){if(vd(n))return b.resolve(null);let r=Kt(n);return this.indexManager.getIndexType(e,r).next(s=>s===0?null:(n.limit!==null&&s===1&&(n=Gl(n,null,"F"),r=Kt(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(i=>{const o=re(...i);return this.ji.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,r).next(l=>{const c=this.Xi(n,a);return this.es(n,c,o,l.readTime)?this.Hi(e,Gl(n,null,"F")):this.ts(e,c,n,l)}))})))}Ji(e,n,r,s){return vd(n)||s.isEqual(J.min())?b.resolve(null):this.ji.getDocuments(e,r).next(i=>{const o=this.Xi(n,i);return this.es(n,o,r,s)?b.resolve(null):(as()<=se.DEBUG&&U("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),mr(n)),this.ts(e,o,n,j0(s,-1)).next(a=>a))})}Xi(e,n){let r=new st(Yg(e));return n.forEach((s,i)=>{pa(e,i)&&(r=r.add(i))}),r}es(e,n,r,s){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const i=e.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}Yi(e,n,r){return as()<=se.DEBUG&&U("QueryEngine","Using full collection scan to execute query:",mr(n)),this.ji.getDocumentsMatchingQuery(e,n,Rn.min(),r)}ts(e,n,r,s){return this.ji.getDocumentsMatchingQuery(e,r,s).next(i=>(n.forEach(o=>{i=i.insert(o.key,o)}),i))}}/**
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
 */class hb{constructor(e,n,r,s){this.persistence=e,this.ns=n,this.serializer=s,this.rs=new be(le),this.ss=new es(i=>uu(i),hu),this.os=new Map,this._s=e.getRemoteDocumentCache(),this.Kr=e.getTargetCache(),this.Ur=e.getBundleCache(),this.us(r)}us(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new eb(this._s,this.mutationQueue,this.documentOverlayCache,this.indexManager),this._s.setIndexManager(this.indexManager),this.ns.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.rs))}}function db(t,e,n,r){return new hb(t,e,n,r)}async function _m(t,e){const n=Z(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let s;return n.mutationQueue.getAllMutationBatches(r).next(i=>(s=i,n.us(e),n.mutationQueue.getAllMutationBatches(r))).next(i=>{const o=[],a=[];let l=re();for(const c of s){o.push(c.batchId);for(const u of c.mutations)l=l.add(u.key)}for(const c of i){a.push(c.batchId);for(const u of c.mutations)l=l.add(u.key)}return n.localDocuments.getDocuments(r,l).next(c=>({cs:c,removedBatchIds:o,addedBatchIds:a}))})})}function fb(t,e){const n=Z(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const s=e.batch.keys(),i=n._s.newChangeBuffer({trackRemovals:!0});return function(a,l,c,u){const h=c.batch,d=h.keys();let f=b.resolve();return d.forEach(_=>{f=f.next(()=>u.getEntry(l,_)).next(m=>{const E=c.docVersions.get(_);Te(E!==null),m.version.compareTo(E)<0&&(h.applyToRemoteDocument(m,c),m.isValidDocument()&&(m.setReadTime(c.commitVersion),u.addEntry(m)))})}),f.next(()=>a.mutationQueue.removeMutationBatch(l,h))}(n,r,e,i).next(()=>i.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,s,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(a){let l=re();for(let c=0;c<a.mutationResults.length;++c)a.mutationResults[c].transformResults.length>0&&(l=l.add(a.batch.mutations[c].key));return l}(e))).next(()=>n.localDocuments.getDocuments(r,s))})}function ym(t){const e=Z(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Kr.getLastRemoteSnapshotVersion(n))}function pb(t,e){const n=Z(t),r=e.snapshotVersion;let s=n.rs;return n.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=n._s.newChangeBuffer({trackRemovals:!0});s=n.rs;const a=[];e.targetChanges.forEach((u,h)=>{const d=s.get(h);if(!d)return;a.push(n.Kr.removeMatchingKeys(i,u.removedDocuments,h).next(()=>n.Kr.addMatchingKeys(i,u.addedDocuments,h)));let f=d.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(h)!==null?f=f.withResumeToken(ot.EMPTY_BYTE_STRING,J.min()).withLastLimboFreeSnapshotVersion(J.min()):u.resumeToken.approximateByteSize()>0&&(f=f.withResumeToken(u.resumeToken,r)),s=s.insert(h,f),function(m,E,M){return m.resumeToken.approximateByteSize()===0||E.snapshotVersion.toMicroseconds()-m.snapshotVersion.toMicroseconds()>=3e8?!0:M.addedDocuments.size+M.modifiedDocuments.size+M.removedDocuments.size>0}(d,f,u)&&a.push(n.Kr.updateTargetData(i,f))});let l=an(),c=re();if(e.documentUpdates.forEach(u=>{e.resolvedLimboDocuments.has(u)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(i,u))}),a.push(gb(i,o,e.documentUpdates).next(u=>{l=u.ls,c=u.hs})),!r.isEqual(J.min())){const u=n.Kr.getLastRemoteSnapshotVersion(i).next(h=>n.Kr.setTargetsMetadata(i,i.currentSequenceNumber,r));a.push(u)}return b.waitFor(a).next(()=>o.apply(i)).next(()=>n.localDocuments.getLocalViewOfDocuments(i,l,c)).next(()=>l)}).then(i=>(n.rs=s,i))}function gb(t,e,n){let r=re(),s=re();return n.forEach(i=>r=r.add(i)),e.getEntries(t,r).next(i=>{let o=an();return n.forEach((a,l)=>{const c=i.get(a);l.isFoundDocument()!==c.isFoundDocument()&&(s=s.add(a)),l.isNoDocument()&&l.version.isEqual(J.min())?(e.removeEntry(a,l.readTime),o=o.insert(a,l)):!c.isValidDocument()||l.version.compareTo(c.version)>0||l.version.compareTo(c.version)===0&&c.hasPendingWrites?(e.addEntry(l),o=o.insert(a,l)):U("LocalStore","Ignoring outdated watch update for ",a,". Current version:",c.version," Watch version:",l.version)}),{ls:o,hs:s}})}function mb(t,e){const n=Z(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function _b(t,e){const n=Z(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return n.Kr.getTargetData(r,e).next(i=>i?(s=i,b.resolve(s)):n.Kr.allocateTargetId(r).next(o=>(s=new yn(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.Kr.addTargetData(r,s).next(()=>s))))}).then(r=>{const s=n.rs.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(n.rs=n.rs.insert(r.targetId,r),n.ss.set(e,r.targetId)),r})}async function Zl(t,e,n){const r=Z(t),s=r.rs.get(e),i=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",i,o=>r.persistence.referenceDelegate.removeTarget(o,s))}catch(o){if(!vi(o))throw o;U("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.rs=r.rs.remove(e),r.ss.delete(s.target)}function kd(t,e,n){const r=Z(t);let s=J.min(),i=re();return r.persistence.runTransaction("Execute query","readwrite",o=>function(l,c,u){const h=Z(l),d=h.ss.get(u);return d!==void 0?b.resolve(h.rs.get(d)):h.Kr.getTargetData(c,u)}(r,o,Kt(e)).next(a=>{if(a)return s=a.lastLimboFreeSnapshotVersion,r.Kr.getMatchingKeysForTargetId(o,a.targetId).next(l=>{i=l})}).next(()=>r.ns.getDocumentsMatchingQuery(o,e,n?s:J.min(),n?i:re())).next(a=>(yb(r,cA(e),a),{documents:a,Ps:i})))}function yb(t,e,n){let r=t.os.get(e)||J.min();n.forEach((s,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)}),t.os.set(e,r)}class xd{constructor(){this.activeTargetIds=gA()}Rs(e){this.activeTargetIds=this.activeTargetIds.add(e)}Vs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}As(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class vb{constructor(){this.ro=new xd,this.io={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e){return this.ro.Rs(e),this.io[e]||"not-current"}updateQueryState(e,n,r){this.io[e]=n}removeLocalQueryTarget(e){this.ro.Vs(e)}isLocalQueryTarget(e){return this.ro.activeTargetIds.has(e)}clearQueryState(e){delete this.io[e]}getAllActiveQueryTargets(){return this.ro.activeTargetIds}isActiveQueryTarget(e){return this.ro.activeTargetIds.has(e)}start(){return this.ro=new xd,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class wb{so(e){}shutdown(){}}/**
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
 */class Dd{constructor(){this.oo=()=>this._o(),this.ao=()=>this.uo(),this.co=[],this.lo()}so(e){this.co.push(e)}shutdown(){window.removeEventListener("online",this.oo),window.removeEventListener("offline",this.ao)}lo(){window.addEventListener("online",this.oo),window.addEventListener("offline",this.ao)}_o(){U("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.co)e(0)}uo(){U("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.co)e(1)}static C(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let qi=null;function tl(){return qi===null?qi=function(){return 268435456+Math.round(2147483648*Math.random())}():qi++,"0x"+qi.toString(16)}/**
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
 */const Eb={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
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
 */class Ib{constructor(e){this.ho=e.ho,this.Po=e.Po}Io(e){this.To=e}Eo(e){this.Ao=e}onMessage(e){this.Ro=e}close(){this.Po()}send(e){this.ho(e)}Vo(){this.To()}mo(e){this.Ao(e)}fo(e){this.Ro(e)}}/**
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
 */const Ge="WebChannelConnection";class Tb extends class{constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const r=n.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.po=r+"://"+n.host,this.yo=`projects/${s}/databases/${i}`,this.wo=this.databaseId.database==="(default)"?`project_id=${s}`:`project_id=${s}&database_id=${i}`}get So(){return!1}bo(n,r,s,i,o){const a=tl(),l=this.Do(n,r);U("RestConnection",`Sending RPC '${n}' ${a}:`,l,s);const c={"google-cloud-resource-prefix":this.yo,"x-goog-request-params":this.wo};return this.Co(c,i,o),this.vo(n,l,c,s).then(u=>(U("RestConnection",`Received RPC '${n}' ${a}: `,u),u),u=>{throw Ur("RestConnection",`RPC '${n}' ${a} failed with error: `,u,"url: ",l,"request:",s),u})}Fo(n,r,s,i,o,a){return this.bo(n,r,s,i,o)}Co(n,r,s){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Zr}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((i,o)=>n[o]=i),s&&s.headers.forEach((i,o)=>n[o]=i)}Do(n,r){const s=Eb[n];return`${this.po}/v1/${r}:${s}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}vo(e,n,r,s){const i=tl();return new Promise((o,a)=>{const l=new x0;l.setWithCredentials(!0),l.listenOnce(S0.COMPLETE,()=>{try{switch(l.getLastErrorCode()){case Za.NO_ERROR:const u=l.getResponseJson();U(Ge,`XHR for RPC '${e}' ${i} received:`,JSON.stringify(u)),o(u);break;case Za.TIMEOUT:U(Ge,`RPC '${e}' ${i} timed out`),a(new L(I.DEADLINE_EXCEEDED,"Request time out"));break;case Za.HTTP_ERROR:const h=l.getStatus();if(U(Ge,`RPC '${e}' ${i} failed with status:`,h,"response text:",l.getResponseText()),h>0){let d=l.getResponseJson();Array.isArray(d)&&(d=d[0]);const f=d==null?void 0:d.error;if(f&&f.status&&f.message){const _=function(E){const M=E.toLowerCase().replace(/_/g,"-");return Object.values(I).indexOf(M)>=0?M:I.UNKNOWN}(f.status);a(new L(_,f.message))}else a(new L(I.UNKNOWN,"Server responded with status "+l.getStatus()))}else a(new L(I.UNAVAILABLE,"Connection failed."));break;default:W()}}finally{U(Ge,`RPC '${e}' ${i} completed.`)}});const c=JSON.stringify(s);U(Ge,`RPC '${e}' ${i} sending request:`,s),l.send(n,"POST",c,r,15)})}Mo(e,n,r){const s=tl(),i=[this.po,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=C0(),a=P0(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},c=this.longPollingOptions.timeoutSeconds;c!==void 0&&(l.longPollingTimeout=Math.round(1e3*c)),this.useFetchStreams&&(l.useFetchStreams=!0),this.Co(l.initMessageHeaders,n,r),l.encodeInitMessageHeaders=!0;const u=i.join("");U(Ge,`Creating RPC '${e}' stream ${s}: ${u}`,l);const h=o.createWebChannel(u,l);let d=!1,f=!1;const _=new Ib({ho:E=>{f?U(Ge,`Not sending because RPC '${e}' stream ${s} is closed:`,E):(d||(U(Ge,`Opening RPC '${e}' stream ${s} transport.`),h.open(),d=!0),U(Ge,`RPC '${e}' stream ${s} sending:`,E),h.send(E))},Po:()=>h.close()}),m=(E,M,y)=>{E.listen(M,R=>{try{y(R)}catch(C){setTimeout(()=>{throw C},0)}})};return m(h,$i.EventType.OPEN,()=>{f||U(Ge,`RPC '${e}' stream ${s} transport opened.`)}),m(h,$i.EventType.CLOSE,()=>{f||(f=!0,U(Ge,`RPC '${e}' stream ${s} transport closed`),_.mo())}),m(h,$i.EventType.ERROR,E=>{f||(f=!0,Ur(Ge,`RPC '${e}' stream ${s} transport errored:`,E),_.mo(new L(I.UNAVAILABLE,"The operation could not be completed")))}),m(h,$i.EventType.MESSAGE,E=>{var M;if(!f){const y=E.data[0];Te(!!y);const R=y,C=R.error||((M=R[0])===null||M===void 0?void 0:M.error);if(C){U(Ge,`RPC '${e}' stream ${s} received error:`,C);const $=C.status;let X=function(k){const ee=ke[k];if(ee!==void 0)return lm(ee)}($),G=C.message;X===void 0&&(X=I.INTERNAL,G="Unknown error status: "+$+" with message "+C.message),f=!0,_.mo(new L(X,G)),h.close()}else U(Ge,`RPC '${e}' stream ${s} received:`,y),_.fo(y)}}),m(a,k0.STAT_EVENT,E=>{E.stat===ld.PROXY?U(Ge,`RPC '${e}' stream ${s} detected buffering proxy`):E.stat===ld.NOPROXY&&U(Ge,`RPC '${e}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{_.Vo()},0),_}}function nl(){return typeof document<"u"?document:null}/**
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
 */function ya(t){return new OA(t,!0)}/**
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
 */class vm{constructor(e,n,r=1e3,s=1.5,i=6e4){this._i=e,this.timerId=n,this.xo=r,this.Oo=s,this.No=i,this.Bo=0,this.Lo=null,this.ko=Date.now(),this.reset()}reset(){this.Bo=0}qo(){this.Bo=this.No}Qo(e){this.cancel();const n=Math.floor(this.Bo+this.Ko()),r=Math.max(0,Date.now()-this.ko),s=Math.max(0,n-r);s>0&&U("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.Bo} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.Lo=this._i.enqueueAfterDelay(this.timerId,s,()=>(this.ko=Date.now(),e())),this.Bo*=this.Oo,this.Bo<this.xo&&(this.Bo=this.xo),this.Bo>this.No&&(this.Bo=this.No)}$o(){this.Lo!==null&&(this.Lo.skipDelay(),this.Lo=null)}cancel(){this.Lo!==null&&(this.Lo.cancel(),this.Lo=null)}Ko(){return(Math.random()-.5)*this.Bo}}/**
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
 */class wm{constructor(e,n,r,s,i,o,a,l){this._i=e,this.Uo=r,this.Wo=s,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=l,this.state=0,this.Go=0,this.zo=null,this.jo=null,this.stream=null,this.Ho=new vm(e,n)}Jo(){return this.state===1||this.state===5||this.Yo()}Yo(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Zo()}async stop(){this.Jo()&&await this.close(0)}Xo(){this.state=0,this.Ho.reset()}e_(){this.Yo()&&this.zo===null&&(this.zo=this._i.enqueueAfterDelay(this.Uo,6e4,()=>this.t_()))}n_(e){this.r_(),this.stream.send(e)}async t_(){if(this.Yo())return this.close(0)}r_(){this.zo&&(this.zo.cancel(),this.zo=null)}i_(){this.jo&&(this.jo.cancel(),this.jo=null)}async close(e,n){this.r_(),this.i_(),this.Ho.cancel(),this.Go++,e!==4?this.Ho.reset():n&&n.code===I.RESOURCE_EXHAUSTED?(on(n.toString()),on("Using maximum backoff delay to prevent overloading the backend."),this.Ho.qo()):n&&n.code===I.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.s_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Eo(n)}s_(){}auth(){this.state=1;const e=this.o_(this.Go),n=this.Go;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.Go===n&&this.__(r,s)},r=>{e(()=>{const s=new L(I.UNKNOWN,"Fetching auth token failed: "+r.message);return this.a_(s)})})}__(e,n){const r=this.o_(this.Go);this.stream=this.u_(e,n),this.stream.Io(()=>{r(()=>(this.state=2,this.jo=this._i.enqueueAfterDelay(this.Wo,1e4,()=>(this.Yo()&&(this.state=3),Promise.resolve())),this.listener.Io()))}),this.stream.Eo(s=>{r(()=>this.a_(s))}),this.stream.onMessage(s=>{r(()=>this.onMessage(s))})}Zo(){this.state=5,this.Ho.Qo(async()=>{this.state=0,this.start()})}a_(e){return U("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}o_(e){return n=>{this._i.enqueueAndForget(()=>this.Go===e?n():(U("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class Ab extends wm{constructor(e,n,r,s,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}u_(e,n){return this.connection.Mo("Listen",e,n)}onMessage(e){this.Ho.reset();const n=LA(this.serializer,e),r=function(i){if(!("targetChange"in i))return J.min();const o=i.targetChange;return o.targetIds&&o.targetIds.length?J.min():o.readTime?Ht(o.readTime):J.min()}(e);return this.listener.c_(n,r)}l_(e){const n={};n.database=Xl(this.serializer),n.addTarget=function(i,o){let a;const l=o.target;if(a=zl(l)?{documents:$A(i,l)}:{query:BA(i,l)},a.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){a.resumeToken=hm(i,o.resumeToken);const c=Ql(i,o.expectedCount);c!==null&&(a.expectedCount=c)}else if(o.snapshotVersion.compareTo(J.min())>0){a.readTime=Do(i,o.snapshotVersion.toTimestamp());const c=Ql(i,o.expectedCount);c!==null&&(a.expectedCount=c)}return a}(this.serializer,e);const r=qA(this.serializer,e);r&&(n.labels=r),this.n_(n)}h_(e){const n={};n.database=Xl(this.serializer),n.removeTarget=e,this.n_(n)}}class bb extends wm{constructor(e,n,r,s,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i,this.P_=!1}get I_(){return this.P_}start(){this.P_=!1,this.lastStreamToken=void 0,super.start()}s_(){this.P_&&this.d_([])}u_(e,n){return this.connection.Mo("Write",e,n)}onMessage(e){if(Te(!!e.streamToken),this.lastStreamToken=e.streamToken,this.P_){this.Ho.reset();const n=FA(e.writeResults,e.commitTime),r=Ht(e.commitTime);return this.listener.T_(r,n)}return Te(!e.writeResults||e.writeResults.length===0),this.P_=!0,this.listener.E_()}A_(){const e={};e.database=Xl(this.serializer),this.n_(e)}d_(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>UA(this.serializer,r))};this.n_(n)}}/**
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
 */class Rb extends class{}{constructor(e,n,r,s){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=s,this.R_=!1}V_(){if(this.R_)throw new L(I.FAILED_PRECONDITION,"The client has already been terminated.")}bo(e,n,r){return this.V_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,i])=>this.connection.bo(e,n,r,s,i)).catch(s=>{throw s.name==="FirebaseError"?(s.code===I.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new L(I.UNKNOWN,s.toString())})}Fo(e,n,r,s){return this.V_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.connection.Fo(e,n,r,i,o,s)).catch(i=>{throw i.name==="FirebaseError"?(i.code===I.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new L(I.UNKNOWN,i.toString())})}terminate(){this.R_=!0}}class Cb{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.f_=0,this.g_=null,this.p_=!0}y_(){this.f_===0&&(this.w_("Unknown"),this.g_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.g_=null,this.S_("Backend didn't respond within 10 seconds."),this.w_("Offline"),Promise.resolve())))}b_(e){this.state==="Online"?this.w_("Unknown"):(this.f_++,this.f_>=1&&(this.D_(),this.S_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.w_("Offline")))}set(e){this.D_(),this.f_=0,e==="Online"&&(this.p_=!1),this.w_(e)}w_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}S_(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.p_?(on(n),this.p_=!1):U("OnlineStateTracker",n)}D_(){this.g_!==null&&(this.g_.cancel(),this.g_=null)}}/**
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
 */class Pb{constructor(e,n,r,s,i){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.C_=[],this.v_=new Map,this.F_=new Set,this.M_=[],this.x_=i,this.x_.so(o=>{r.enqueueAndForget(async()=>{ar(this)&&(U("RemoteStore","Restarting streams for network reachability change."),await async function(l){const c=Z(l);c.F_.add(4),await Ti(c),c.O_.set("Unknown"),c.F_.delete(4),await va(c)}(this))})}),this.O_=new Cb(r,s)}}async function va(t){if(ar(t))for(const e of t.M_)await e(!0)}async function Ti(t){for(const e of t.M_)await e(!1)}function Em(t,e){const n=Z(t);n.v_.has(e.targetId)||(n.v_.set(e.targetId,e),Tu(n)?Iu(n):ts(n).Yo()&&Eu(n,e))}function Im(t,e){const n=Z(t),r=ts(n);n.v_.delete(e),r.Yo()&&Tm(n,e),n.v_.size===0&&(r.Yo()?r.e_():ar(n)&&n.O_.set("Unknown"))}function Eu(t,e){if(t.N_.Le(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(J.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}ts(t).l_(e)}function Tm(t,e){t.N_.Le(e),ts(t).h_(e)}function Iu(t){t.N_=new kA({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),lt:e=>t.v_.get(e)||null,st:()=>t.datastore.serializer.databaseId}),ts(t).start(),t.O_.y_()}function Tu(t){return ar(t)&&!ts(t).Jo()&&t.v_.size>0}function ar(t){return Z(t).F_.size===0}function Am(t){t.N_=void 0}async function Sb(t){t.v_.forEach((e,n)=>{Eu(t,e)})}async function kb(t,e){Am(t),Tu(t)?(t.O_.b_(e),Iu(t)):t.O_.set("Unknown")}async function xb(t,e,n){if(t.O_.set("Online"),e instanceof um&&e.state===2&&e.cause)try{await async function(s,i){const o=i.cause;for(const a of i.targetIds)s.v_.has(a)&&(await s.remoteSyncer.rejectListen(a,o),s.v_.delete(a),s.N_.removeTarget(a))}(t,e)}catch(r){U("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await No(t,r)}else if(e instanceof ro?t.N_.Ge(e):e instanceof cm?t.N_.Xe(e):t.N_.He(e),!n.isEqual(J.min()))try{const r=await ym(t.localStore);n.compareTo(r)>=0&&await function(i,o){const a=i.N_._t(o);return a.targetChanges.forEach((l,c)=>{if(l.resumeToken.approximateByteSize()>0){const u=i.v_.get(c);u&&i.v_.set(c,u.withResumeToken(l.resumeToken,o))}}),a.targetMismatches.forEach((l,c)=>{const u=i.v_.get(l);if(!u)return;i.v_.set(l,u.withResumeToken(ot.EMPTY_BYTE_STRING,u.snapshotVersion)),Tm(i,l);const h=new yn(u.target,l,c,u.sequenceNumber);Eu(i,h)}),i.remoteSyncer.applyRemoteEvent(a)}(t,n)}catch(r){U("RemoteStore","Failed to raise snapshot:",r),await No(t,r)}}async function No(t,e,n){if(!vi(e))throw e;t.F_.add(1),await Ti(t),t.O_.set("Offline"),n||(n=()=>ym(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{U("RemoteStore","Retrying IndexedDB access"),await n(),t.F_.delete(1),await va(t)})}function bm(t,e){return e().catch(n=>No(t,n,e))}async function wa(t){const e=Z(t),n=Pn(e);let r=e.C_.length>0?e.C_[e.C_.length-1].batchId:-1;for(;Db(e);)try{const s=await mb(e.localStore,r);if(s===null){e.C_.length===0&&n.e_();break}r=s.batchId,Nb(e,s)}catch(s){await No(e,s)}Rm(e)&&Cm(e)}function Db(t){return ar(t)&&t.C_.length<10}function Nb(t,e){t.C_.push(e);const n=Pn(t);n.Yo()&&n.I_&&n.d_(e.mutations)}function Rm(t){return ar(t)&&!Pn(t).Jo()&&t.C_.length>0}function Cm(t){Pn(t).start()}async function Ob(t){Pn(t).A_()}async function Vb(t){const e=Pn(t);for(const n of t.C_)e.d_(n.mutations)}async function Mb(t,e,n){const r=t.C_.shift(),s=gu.from(r,e,n);await bm(t,()=>t.remoteSyncer.applySuccessfulWrite(s)),await wa(t)}async function Lb(t,e){e&&Pn(t).I_&&await async function(r,s){if(function(o){return CA(o)&&o!==I.ABORTED}(s.code)){const i=r.C_.shift();Pn(r).Xo(),await bm(r,()=>r.remoteSyncer.rejectFailedWrite(i.batchId,s)),await wa(r)}}(t,e),Rm(t)&&Cm(t)}async function Nd(t,e){const n=Z(t);n.asyncQueue.verifyOperationInProgress(),U("RemoteStore","RemoteStore received new credentials");const r=ar(n);n.F_.add(3),await Ti(n),r&&n.O_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.F_.delete(3),await va(n)}async function Ub(t,e){const n=Z(t);e?(n.F_.delete(2),await va(n)):e||(n.F_.add(2),await Ti(n),n.O_.set("Unknown"))}function ts(t){return t.B_||(t.B_=function(n,r,s){const i=Z(n);return i.V_(),new Ab(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{Io:Sb.bind(null,t),Eo:kb.bind(null,t),c_:xb.bind(null,t)}),t.M_.push(async e=>{e?(t.B_.Xo(),Tu(t)?Iu(t):t.O_.set("Unknown")):(await t.B_.stop(),Am(t))})),t.B_}function Pn(t){return t.L_||(t.L_=function(n,r,s){const i=Z(n);return i.V_(),new bb(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{Io:Ob.bind(null,t),Eo:Lb.bind(null,t),E_:Vb.bind(null,t),T_:Mb.bind(null,t)}),t.M_.push(async e=>{e?(t.L_.Xo(),await wa(t)):(await t.L_.stop(),t.C_.length>0&&(U("RemoteStore",`Stopping write stream with ${t.C_.length} pending writes`),t.C_=[]))})),t.L_}/**
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
 */class Au{constructor(e,n,r,s,i){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new en,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,s,i){const o=Date.now()+r,a=new Au(e,n,o,s,i);return a.start(r),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new L(I.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function bu(t,e){if(on("AsyncQueue",`${e}: ${t}`),vi(t))return new L(I.UNAVAILABLE,`${e}: ${t}`);throw t}/**
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
 */class Sr{constructor(e){this.comparator=e?(n,r)=>e(n,r)||B.comparator(n.key,r.key):(n,r)=>B.comparator(n.key,r.key),this.keyedMap=ps(),this.sortedSet=new be(this.comparator)}static emptySet(e){return new Sr(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof Sr)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new Sr;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
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
 */class Od{constructor(){this.k_=new be(B.comparator)}track(e){const n=e.doc.key,r=this.k_.get(n);r?e.type!==0&&r.type===3?this.k_=this.k_.insert(n,e):e.type===3&&r.type!==1?this.k_=this.k_.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.k_=this.k_.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.k_=this.k_.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.k_=this.k_.remove(n):e.type===1&&r.type===2?this.k_=this.k_.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.k_=this.k_.insert(n,{type:2,doc:e.doc}):W():this.k_=this.k_.insert(n,e)}q_(){const e=[];return this.k_.inorderTraversal((n,r)=>{e.push(r)}),e}}class qr{constructor(e,n,r,s,i,o,a,l,c){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=l,this.hasCachedResults=c}static fromInitialDocuments(e,n,r,s,i){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new qr(e,n,Sr.emptySet(n),o,r,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&fa(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let s=0;s<n.length;s++)if(n[s].type!==r[s].type||!n[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
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
 */class Fb{constructor(){this.Q_=void 0,this.listeners=[]}}class $b{constructor(){this.queries=new es(e=>Qg(e),fa),this.onlineState="Unknown",this.K_=new Set}}async function Pm(t,e){const n=Z(t),r=e.query;let s=!1,i=n.queries.get(r);if(i||(s=!0,i=new Fb),s)try{i.Q_=await n.onListen(r)}catch(o){const a=bu(o,`Initialization of query '${mr(e.query)}' failed`);return void e.onError(a)}n.queries.set(r,i),i.listeners.push(e),e.U_(n.onlineState),i.Q_&&e.W_(i.Q_)&&Ru(n)}async function Sm(t,e){const n=Z(t),r=e.query;let s=!1;const i=n.queries.get(r);if(i){const o=i.listeners.indexOf(e);o>=0&&(i.listeners.splice(o,1),s=i.listeners.length===0)}if(s)return n.queries.delete(r),n.onUnlisten(r)}function Bb(t,e){const n=Z(t);let r=!1;for(const s of e){const i=s.query,o=n.queries.get(i);if(o){for(const a of o.listeners)a.W_(s)&&(r=!0);o.Q_=s}}r&&Ru(n)}function jb(t,e,n){const r=Z(t),s=r.queries.get(e);if(s)for(const i of s.listeners)i.onError(n);r.queries.delete(e)}function Ru(t){t.K_.forEach(e=>{e.next()})}class km{constructor(e,n,r){this.query=e,this.G_=n,this.z_=!1,this.j_=null,this.onlineState="Unknown",this.options=r||{}}W_(e){if(!this.options.includeMetadataChanges){const r=[];for(const s of e.docChanges)s.type!==3&&r.push(s);e=new qr(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.z_?this.H_(e)&&(this.G_.next(e),n=!0):this.J_(e,this.onlineState)&&(this.Y_(e),n=!0),this.j_=e,n}onError(e){this.G_.error(e)}U_(e){this.onlineState=e;let n=!1;return this.j_&&!this.z_&&this.J_(this.j_,e)&&(this.Y_(this.j_),n=!0),n}J_(e,n){if(!e.fromCache)return!0;const r=n!=="Offline";return(!this.options.Z_||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}H_(e){if(e.docChanges.length>0)return!0;const n=this.j_&&this.j_.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}Y_(e){e=qr.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.z_=!0,this.G_.next(e)}}/**
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
 */class xm{constructor(e){this.key=e}}class Dm{constructor(e){this.key=e}}class qb{constructor(e,n){this.query=e,this.oa=n,this._a=null,this.hasCachedResults=!1,this.current=!1,this.aa=re(),this.mutatedKeys=re(),this.ua=Yg(e),this.ca=new Sr(this.ua)}get la(){return this.oa}ha(e,n){const r=n?n.Pa:new Od,s=n?n.ca:this.ca;let i=n?n.mutatedKeys:this.mutatedKeys,o=s,a=!1;const l=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,c=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal((u,h)=>{const d=s.get(u),f=pa(this.query,h)?h:null,_=!!d&&this.mutatedKeys.has(d.key),m=!!f&&(f.hasLocalMutations||this.mutatedKeys.has(f.key)&&f.hasCommittedMutations);let E=!1;d&&f?d.data.isEqual(f.data)?_!==m&&(r.track({type:3,doc:f}),E=!0):this.Ia(d,f)||(r.track({type:2,doc:f}),E=!0,(l&&this.ua(f,l)>0||c&&this.ua(f,c)<0)&&(a=!0)):!d&&f?(r.track({type:0,doc:f}),E=!0):d&&!f&&(r.track({type:1,doc:d}),E=!0,(l||c)&&(a=!0)),E&&(f?(o=o.add(f),i=m?i.add(u):i.delete(u)):(o=o.delete(u),i=i.delete(u)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const u=this.query.limitType==="F"?o.last():o.first();o=o.delete(u.key),i=i.delete(u.key),r.track({type:1,doc:u})}return{ca:o,Pa:r,es:a,mutatedKeys:i}}Ia(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r){const s=this.ca;this.ca=e.ca,this.mutatedKeys=e.mutatedKeys;const i=e.Pa.q_();i.sort((c,u)=>function(d,f){const _=m=>{switch(m){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return W()}};return _(d)-_(f)}(c.type,u.type)||this.ua(c.doc,u.doc)),this.da(r);const o=n?this.Ta():[],a=this.aa.size===0&&this.current?1:0,l=a!==this._a;return this._a=a,i.length!==0||l?{snapshot:new qr(this.query,e.ca,s,i,e.mutatedKeys,a===0,l,!1,!!r&&r.resumeToken.approximateByteSize()>0),Ea:o}:{Ea:o}}U_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({ca:this.ca,Pa:new Od,mutatedKeys:this.mutatedKeys,es:!1},!1)):{Ea:[]}}Aa(e){return!this.oa.has(e)&&!!this.ca.has(e)&&!this.ca.get(e).hasLocalMutations}da(e){e&&(e.addedDocuments.forEach(n=>this.oa=this.oa.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.oa=this.oa.delete(n)),this.current=e.current)}Ta(){if(!this.current)return[];const e=this.aa;this.aa=re(),this.ca.forEach(r=>{this.Aa(r.key)&&(this.aa=this.aa.add(r.key))});const n=[];return e.forEach(r=>{this.aa.has(r)||n.push(new Dm(r))}),this.aa.forEach(r=>{e.has(r)||n.push(new xm(r))}),n}Ra(e){this.oa=e.Ps,this.aa=re();const n=this.ha(e.documents);return this.applyChanges(n,!0)}Va(){return qr.fromInitialDocuments(this.query,this.ca,this.mutatedKeys,this._a===0,this.hasCachedResults)}}class Kb{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class Hb{constructor(e){this.key=e,this.ma=!1}}class zb{constructor(e,n,r,s,i,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.fa={},this.ga=new es(a=>Qg(a),fa),this.pa=new Map,this.ya=new Set,this.wa=new be(B.comparator),this.Sa=new Map,this.ba=new yu,this.Da={},this.Ca=new Map,this.va=jr.Ln(),this.onlineState="Unknown",this.Fa=void 0}get isPrimaryClient(){return this.Fa===!0}}async function Wb(t,e){const n=rR(t);let r,s;const i=n.ga.get(e);if(i)r=i.targetId,n.sharedClientState.addLocalQueryTarget(r),s=i.view.Va();else{const o=await _b(n.localStore,Kt(e)),a=n.sharedClientState.addLocalQueryTarget(o.targetId);r=o.targetId,s=await Gb(n,e,r,a==="current",o.resumeToken),n.isPrimaryClient&&Em(n.remoteStore,o)}return s}async function Gb(t,e,n,r,s){t.Ma=(h,d,f)=>async function(m,E,M,y){let R=E.view.ha(M);R.es&&(R=await kd(m.localStore,E.query,!1).then(({documents:X})=>E.view.ha(X,R)));const C=y&&y.targetChanges.get(E.targetId),$=E.view.applyChanges(R,m.isPrimaryClient,C);return Md(m,E.targetId,$.Ea),$.snapshot}(t,h,d,f);const i=await kd(t.localStore,e,!0),o=new qb(e,i.Ps),a=o.ha(i.documents),l=Ii.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",s),c=o.applyChanges(a,t.isPrimaryClient,l);Md(t,n,c.Ea);const u=new Kb(e,n,o);return t.ga.set(e,u),t.pa.has(n)?t.pa.get(n).push(e):t.pa.set(n,[e]),c.snapshot}async function Qb(t,e){const n=Z(t),r=n.ga.get(e),s=n.pa.get(r.targetId);if(s.length>1)return n.pa.set(r.targetId,s.filter(i=>!fa(i,e))),void n.ga.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(r.targetId),n.sharedClientState.isActiveQueryTarget(r.targetId)||await Zl(n.localStore,r.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(r.targetId),Im(n.remoteStore,r.targetId),ec(n,r.targetId)}).catch(yi)):(ec(n,r.targetId),await Zl(n.localStore,r.targetId,!0))}async function Yb(t,e,n){const r=sR(t);try{const s=await function(o,a){const l=Z(o),c=he.now(),u=a.reduce((f,_)=>f.add(_.key),re());let h,d;return l.persistence.runTransaction("Locally write mutations","readwrite",f=>{let _=an(),m=re();return l._s.getEntries(f,u).next(E=>{_=E,_.forEach((M,y)=>{y.isValidDocument()||(m=m.add(M))})}).next(()=>l.localDocuments.getOverlayedDocuments(f,_)).next(E=>{h=E;const M=[];for(const y of a){const R=IA(y,h.get(y.key).overlayedDocument);R!=null&&M.push(new Dn(y.key,R,$g(R.value.mapValue),Et.exists(!0)))}return l.mutationQueue.addMutationBatch(f,c,M,a)}).next(E=>{d=E;const M=E.applyToLocalDocumentSet(h,m);return l.documentOverlayCache.saveOverlays(f,E.batchId,M)})}).then(()=>({batchId:d.batchId,changes:Xg(h)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(s.batchId),function(o,a,l){let c=o.Da[o.currentUser.toKey()];c||(c=new be(le)),c=c.insert(a,l),o.Da[o.currentUser.toKey()]=c}(r,s.batchId,n),await Ai(r,s.changes),await wa(r.remoteStore)}catch(s){const i=bu(s,"Failed to persist write");n.reject(i)}}async function Nm(t,e){const n=Z(t);try{const r=await pb(n.localStore,e);e.targetChanges.forEach((s,i)=>{const o=n.Sa.get(i);o&&(Te(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1),s.addedDocuments.size>0?o.ma=!0:s.modifiedDocuments.size>0?Te(o.ma):s.removedDocuments.size>0&&(Te(o.ma),o.ma=!1))}),await Ai(n,r,e)}catch(r){await yi(r)}}function Vd(t,e,n){const r=Z(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const s=[];r.ga.forEach((i,o)=>{const a=o.view.U_(e);a.snapshot&&s.push(a.snapshot)}),function(o,a){const l=Z(o);l.onlineState=a;let c=!1;l.queries.forEach((u,h)=>{for(const d of h.listeners)d.U_(a)&&(c=!0)}),c&&Ru(l)}(r.eventManager,e),s.length&&r.fa.c_(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function Jb(t,e,n){const r=Z(t);r.sharedClientState.updateQueryState(e,"rejected",n);const s=r.Sa.get(e),i=s&&s.key;if(i){let o=new be(B.comparator);o=o.insert(i,Ye.newNoDocument(i,J.min()));const a=re().add(i),l=new _a(J.min(),new Map,new be(le),o,a);await Nm(r,l),r.wa=r.wa.remove(i),r.Sa.delete(e),Cu(r)}else await Zl(r.localStore,e,!1).then(()=>ec(r,e,n)).catch(yi)}async function Xb(t,e){const n=Z(t),r=e.batch.batchId;try{const s=await fb(n.localStore,e);Vm(n,r,null),Om(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await Ai(n,s)}catch(s){await yi(s)}}async function Zb(t,e,n){const r=Z(t);try{const s=await function(o,a){const l=Z(o);return l.persistence.runTransaction("Reject batch","readwrite-primary",c=>{let u;return l.mutationQueue.lookupMutationBatch(c,a).next(h=>(Te(h!==null),u=h.keys(),l.mutationQueue.removeMutationBatch(c,h))).next(()=>l.mutationQueue.performConsistencyCheck(c)).next(()=>l.documentOverlayCache.removeOverlaysForBatchId(c,u,a)).next(()=>l.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(c,u)).next(()=>l.localDocuments.getDocuments(c,u))})}(r.localStore,e);Vm(r,e,n),Om(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await Ai(r,s)}catch(s){await yi(s)}}function Om(t,e){(t.Ca.get(e)||[]).forEach(n=>{n.resolve()}),t.Ca.delete(e)}function Vm(t,e,n){const r=Z(t);let s=r.Da[r.currentUser.toKey()];if(s){const i=s.get(e);i&&(n?i.reject(n):i.resolve(),s=s.remove(e)),r.Da[r.currentUser.toKey()]=s}}function ec(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.pa.get(e))t.ga.delete(r),n&&t.fa.xa(r,n);t.pa.delete(e),t.isPrimaryClient&&t.ba.mr(e).forEach(r=>{t.ba.containsKey(r)||Mm(t,r)})}function Mm(t,e){t.ya.delete(e.path.canonicalString());const n=t.wa.get(e);n!==null&&(Im(t.remoteStore,n),t.wa=t.wa.remove(e),t.Sa.delete(n),Cu(t))}function Md(t,e,n){for(const r of n)r instanceof xm?(t.ba.addReference(r.key,e),eR(t,r)):r instanceof Dm?(U("SyncEngine","Document no longer in limbo: "+r.key),t.ba.removeReference(r.key,e),t.ba.containsKey(r.key)||Mm(t,r.key)):W()}function eR(t,e){const n=e.key,r=n.path.canonicalString();t.wa.get(n)||t.ya.has(r)||(U("SyncEngine","New document in limbo: "+n),t.ya.add(r),Cu(t))}function Cu(t){for(;t.ya.size>0&&t.wa.size<t.maxConcurrentLimboResolutions;){const e=t.ya.values().next().value;t.ya.delete(e);const n=new B(Ie.fromString(e)),r=t.va.next();t.Sa.set(r,new Hb(n)),t.wa=t.wa.insert(n,r),Em(t.remoteStore,new yn(Kt(du(n.path)),r,"TargetPurposeLimboResolution",ou.ae))}}async function Ai(t,e,n){const r=Z(t),s=[],i=[],o=[];r.ga.isEmpty()||(r.ga.forEach((a,l)=>{o.push(r.Ma(l,e,n).then(c=>{if((c||n)&&r.isPrimaryClient&&r.sharedClientState.updateQueryState(l.targetId,c!=null&&c.fromCache?"not-current":"current"),c){s.push(c);const u=wu.$i(l.targetId,c);i.push(u)}}))}),await Promise.all(o),r.fa.c_(s),await async function(l,c){const u=Z(l);try{await u.persistence.runTransaction("notifyLocalViewChanges","readwrite",h=>b.forEach(c,d=>b.forEach(d.Qi,f=>u.persistence.referenceDelegate.addReference(h,d.targetId,f)).next(()=>b.forEach(d.Ki,f=>u.persistence.referenceDelegate.removeReference(h,d.targetId,f)))))}catch(h){if(!vi(h))throw h;U("LocalStore","Failed to update sequence numbers: "+h)}for(const h of c){const d=h.targetId;if(!h.fromCache){const f=u.rs.get(d),_=f.snapshotVersion,m=f.withLastLimboFreeSnapshotVersion(_);u.rs=u.rs.insert(d,m)}}}(r.localStore,i))}async function tR(t,e){const n=Z(t);if(!n.currentUser.isEqual(e)){U("SyncEngine","User change. New user:",e.toKey());const r=await _m(n.localStore,e);n.currentUser=e,function(i,o){i.Ca.forEach(a=>{a.forEach(l=>{l.reject(new L(I.CANCELLED,o))})}),i.Ca.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await Ai(n,r.cs)}}function nR(t,e){const n=Z(t),r=n.Sa.get(e);if(r&&r.ma)return re().add(r.key);{let s=re();const i=n.pa.get(e);if(!i)return s;for(const o of i){const a=n.ga.get(o);s=s.unionWith(a.view.la)}return s}}function rR(t){const e=Z(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=Nm.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=nR.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=Jb.bind(null,e),e.fa.c_=Bb.bind(null,e.eventManager),e.fa.xa=jb.bind(null,e.eventManager),e}function sR(t){const e=Z(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=Xb.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=Zb.bind(null,e),e}class Ld{constructor(){this.synchronizeTabs=!1}async initialize(e){this.serializer=ya(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,n){return null}createIndexBackfillerScheduler(e,n){return null}createLocalStore(e){return db(this.persistence,new ub,e.initialUser,this.serializer)}createPersistence(e){return new ab(vu.Jr,this.serializer)}createSharedClientState(e){return new vb}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class iR{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Vd(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=tR.bind(null,this.syncEngine),await Ub(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new $b}()}createDatastore(e){const n=ya(e.databaseInfo.databaseId),r=function(i){return new Tb(i)}(e.databaseInfo);return function(i,o,a,l){return new Rb(i,o,a,l)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,s,i,o,a){return new Pb(r,s,i,o,a)}(this.localStore,this.datastore,e.asyncQueue,n=>Vd(this.syncEngine,n,0),function(){return Dd.C()?new Dd:new wb}())}createSyncEngine(e,n){return function(s,i,o,a,l,c,u){const h=new zb(s,i,o,a,l,c);return u&&(h.Fa=!0),h}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}terminate(){return async function(n){const r=Z(n);U("RemoteStore","RemoteStore shutting down."),r.F_.add(5),await Ti(r),r.x_.shutdown(),r.O_.set("Unknown")}(this.remoteStore)}}/**
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
 */class Lm{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Ba(this.observer.next,e)}error(e){this.observer.error?this.Ba(this.observer.error,e):on("Uncaught Error in snapshot listener:",e.toString())}La(){this.muted=!0}Ba(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
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
 */class oR{constructor(e,n,r,s){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=s,this.user=Qe.UNAUTHENTICATED,this.clientId=Lg.V(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async i=>{U("FirestoreClient","Received user=",i.uid),await this.authCredentialListener(i),this.user=i}),this.appCheckCredentials.start(r,i=>(U("FirestoreClient","Received new app check token=",i),this.appCheckCredentialListener(i,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new L(I.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new en;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=bu(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function rl(t,e){t.asyncQueue.verifyOperationInProgress(),U("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async s=>{r.isEqual(s)||(await _m(e.localStore,s),r=s)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function Ud(t,e){t.asyncQueue.verifyOperationInProgress();const n=await lR(t);U("FirestoreClient","Initializing OnlineComponentProvider");const r=await t.getConfiguration();await e.initialize(n,r),t.setCredentialChangeListener(s=>Nd(e.remoteStore,s)),t.setAppCheckTokenChangeListener((s,i)=>Nd(e.remoteStore,i)),t._onlineComponents=e}function aR(t){return t.name==="FirebaseError"?t.code===I.FAILED_PRECONDITION||t.code===I.UNIMPLEMENTED:!(typeof DOMException<"u"&&t instanceof DOMException)||t.code===22||t.code===20||t.code===11}async function lR(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){U("FirestoreClient","Using user provided OfflineComponentProvider");try{await rl(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!aR(n))throw n;Ur("Error using user provided cache. Falling back to memory cache: "+n),await rl(t,new Ld)}}else U("FirestoreClient","Using default OfflineComponentProvider"),await rl(t,new Ld);return t._offlineComponents}async function Um(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(U("FirestoreClient","Using user provided OnlineComponentProvider"),await Ud(t,t._uninitializedComponentsProvider._online)):(U("FirestoreClient","Using default OnlineComponentProvider"),await Ud(t,new iR))),t._onlineComponents}function cR(t){return Um(t).then(e=>e.syncEngine)}async function Fm(t){const e=await Um(t),n=e.eventManager;return n.onListen=Wb.bind(null,e.syncEngine),n.onUnlisten=Qb.bind(null,e.syncEngine),n}function uR(t,e,n={}){const r=new en;return t.asyncQueue.enqueueAndForget(async()=>function(i,o,a,l,c){const u=new Lm({next:d=>{o.enqueueAndForget(()=>Sm(i,h));const f=d.docs.has(a);!f&&d.fromCache?c.reject(new L(I.UNAVAILABLE,"Failed to get document because the client is offline.")):f&&d.fromCache&&l&&l.source==="server"?c.reject(new L(I.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):c.resolve(d)},error:d=>c.reject(d)}),h=new km(du(a.path),u,{includeMetadataChanges:!0,Z_:!0});return Pm(i,h)}(await Fm(t),t.asyncQueue,e,n,r)),r.promise}function hR(t,e,n={}){const r=new en;return t.asyncQueue.enqueueAndForget(async()=>function(i,o,a,l,c){const u=new Lm({next:d=>{o.enqueueAndForget(()=>Sm(i,h)),d.fromCache&&l.source==="server"?c.reject(new L(I.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):c.resolve(d)},error:d=>c.reject(d)}),h=new km(a,u,{includeMetadataChanges:!0,Z_:!0});return Pm(i,h)}(await Fm(t),t.asyncQueue,e,n,r)),r.promise}/**
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
 */function $m(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
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
 */const Fd=new Map;/**
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
 */function Bm(t,e,n){if(!n)throw new L(I.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function dR(t,e,n,r){if(e===!0&&r===!0)throw new L(I.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function $d(t){if(!B.isDocumentKey(t))throw new L(I.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function Bd(t){if(B.isDocumentKey(t))throw new L(I.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function Ea(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":W()}function Nt(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new L(I.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Ea(t);throw new L(I.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
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
 */class jd{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new L(I.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new L(I.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}dR("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=$m((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new L(I.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new L(I.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new L(I.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,s){return r.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Ia{constructor(e,n,r,s){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new jd({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new L(I.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new L(I.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new jd(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new N0;switch(r.type){case"firstParty":return new L0(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new L(I.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=Fd.get(n);r&&(U("ComponentProvider","Removing Datastore"),Fd.delete(n),r.terminate())}(this),Promise.resolve()}}function fR(t,e,n,r={}){var s;const i=(t=Nt(t,Ia))._getSettings(),o=`${e}:${n}`;if(i.host!=="firestore.googleapis.com"&&i.host!==o&&Ur("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},i),{host:o,ssl:!1})),r.mockUserToken){let a,l;if(typeof r.mockUserToken=="string")a=r.mockUserToken,l=Qe.MOCK_USER;else{a=Gv(r.mockUserToken,(s=t._app)===null||s===void 0?void 0:s.options.projectId);const c=r.mockUserToken.sub||r.mockUserToken.user_id;if(!c)throw new L(I.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");l=new Qe(c)}t._authCredentials=new O0(new Mg(a,l))}}/**
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
 */class ns{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new ns(this.firestore,e,this._query)}}class ht{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new An(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new ht(this.firestore,e,this._key)}}class An extends ns{constructor(e,n,r){super(e,n,du(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new ht(this.firestore,null,new B(e))}withConverter(e){return new An(this.firestore,e,this._path)}}function Ct(t,e,...n){if(t=Ve(t),Bm("collection","path",e),t instanceof Ia){const r=Ie.fromString(e,...n);return Bd(r),new An(t,null,r)}{if(!(t instanceof ht||t instanceof An))throw new L(I.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Ie.fromString(e,...n));return Bd(r),new An(t.firestore,null,r)}}function He(t,e,...n){if(t=Ve(t),arguments.length===1&&(e=Lg.V()),Bm("doc","path",e),t instanceof Ia){const r=Ie.fromString(e,...n);return $d(r),new ht(t,null,new B(r))}{if(!(t instanceof ht||t instanceof An))throw new L(I.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Ie.fromString(e,...n));return $d(r),new ht(t.firestore,t instanceof An?t.converter:null,new B(r))}}/**
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
 */class pR{constructor(){this.Za=Promise.resolve(),this.Xa=[],this.eu=!1,this.tu=[],this.nu=null,this.ru=!1,this.iu=!1,this.su=[],this.Ho=new vm(this,"async_queue_retry"),this.ou=()=>{const n=nl();n&&U("AsyncQueue","Visibility state changed to "+n.visibilityState),this.Ho.$o()};const e=nl();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.ou)}get isShuttingDown(){return this.eu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this._u(),this.au(e)}enterRestrictedMode(e){if(!this.eu){this.eu=!0,this.iu=e||!1;const n=nl();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.ou)}}enqueue(e){if(this._u(),this.eu)return new Promise(()=>{});const n=new en;return this.au(()=>this.eu&&this.iu?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Xa.push(e),this.uu()))}async uu(){if(this.Xa.length!==0){try{await this.Xa[0](),this.Xa.shift(),this.Ho.reset()}catch(e){if(!vi(e))throw e;U("AsyncQueue","Operation failed with retryable error: "+e)}this.Xa.length>0&&this.Ho.Qo(()=>this.uu())}}au(e){const n=this.Za.then(()=>(this.ru=!0,e().catch(r=>{this.nu=r,this.ru=!1;const s=function(o){let a=o.message||"";return o.stack&&(a=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),a}(r);throw on("INTERNAL UNHANDLED ERROR: ",s),r}).then(r=>(this.ru=!1,r))));return this.Za=n,n}enqueueAfterDelay(e,n,r){this._u(),this.su.indexOf(e)>-1&&(n=0);const s=Au.createAndSchedule(this,e,n,r,i=>this.cu(i));return this.tu.push(s),s}_u(){this.nu&&W()}verifyOperationInProgress(){}async lu(){let e;do e=this.Za,await e;while(e!==this.Za)}hu(e){for(const n of this.tu)if(n.timerId===e)return!0;return!1}Pu(e){return this.lu().then(()=>{this.tu.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.tu)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.lu()})}Iu(e){this.su.push(e)}cu(e){const n=this.tu.indexOf(e);this.tu.splice(n,1)}}class lr extends Ia{constructor(e,n,r,s){super(e,n,r,s),this.type="firestore",this._queue=function(){return new pR}(),this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||jm(this),this._firestoreClient.terminate()}}function gR(t,e){const n=typeof t=="object"?t:Zf(),r=typeof t=="string"?t:e||"(default)",s=Cc(n,"firestore").getImmediate({identifier:r});if(!s._initialized){const i=zv("firestore");i&&fR(s,...i)}return s}function Pu(t){return t._firestoreClient||jm(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function jm(t){var e,n,r;const s=t._freezeSettings(),i=function(a,l,c,u){return new Q0(a,l,c,u.host,u.ssl,u.experimentalForceLongPolling,u.experimentalAutoDetectLongPolling,$m(u.experimentalLongPollingOptions),u.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,s);t._firestoreClient=new oR(t._authCredentials,t._appCheckCredentials,t._queue,i),!((n=s.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=s.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._firestoreClient._uninitializedComponentsProvider={_offlineKind:s.localCache.kind,_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider})}/**
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
 */class Kr{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Kr(ot.fromBase64String(e))}catch(n){throw new L(I.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Kr(ot.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */class Ta{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new L(I.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Ze(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class Su{constructor(e){this._methodName=e}}/**
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
 */class ku{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new L(I.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new L(I.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return le(this._lat,e._lat)||le(this._long,e._long)}}/**
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
 */const mR=/^__.*__$/;class _R{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new Dn(e,this.data,this.fieldMask,n,this.fieldTransforms):new Ei(e,this.data,n,this.fieldTransforms)}}class qm{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new Dn(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function Km(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw W()}}class xu{constructor(e,n,r,s,i,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=s,i===void 0&&this.du(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Tu(){return this.settings.Tu}Eu(e){return new xu(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Au(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.Eu({path:r,Ru:!1});return s.Vu(e),s}mu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.Eu({path:r,Ru:!1});return s.du(),s}fu(e){return this.Eu({path:void 0,Ru:!0})}gu(e){return Oo(e,this.settings.methodName,this.settings.pu||!1,this.path,this.settings.yu)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}du(){if(this.path)for(let e=0;e<this.path.length;e++)this.Vu(this.path.get(e))}Vu(e){if(e.length===0)throw this.gu("Document fields must not be empty");if(Km(this.Tu)&&mR.test(e))throw this.gu('Document fields cannot begin and end with "__"')}}class yR{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||ya(e)}wu(e,n,r,s=!1){return new xu({Tu:e,methodName:n,yu:r,path:Ze.emptyPath(),Ru:!1,pu:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Aa(t){const e=t._freezeSettings(),n=ya(t._databaseId);return new yR(t._databaseId,!!e.ignoreUndefinedProperties,n)}function Hm(t,e,n,r,s,i={}){const o=t.wu(i.merge||i.mergeFields?2:0,e,n,s);Du("Data must be an object, but it was:",o,r);const a=zm(r,o);let l,c;if(i.merge)l=new mt(o.fieldMask),c=o.fieldTransforms;else if(i.mergeFields){const u=[];for(const h of i.mergeFields){const d=tc(e,h,n);if(!o.contains(d))throw new L(I.INVALID_ARGUMENT,`Field '${d}' is specified in your field mask but missing from your input data.`);Gm(u,d)||u.push(d)}l=new mt(u),c=o.fieldTransforms.filter(h=>l.covers(h.field))}else l=null,c=o.fieldTransforms;return new _R(new ft(a),l,c)}class ba extends Su{_toFieldTransform(e){if(e.Tu!==2)throw e.Tu===1?e.gu(`${this._methodName}() can only appear at the top level of your update data`):e.gu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof ba}}function vR(t,e,n,r){const s=t.wu(1,e,n);Du("Data must be an object, but it was:",s,r);const i=[],o=ft.empty();or(r,(l,c)=>{const u=Nu(e,l,n);c=Ve(c);const h=s.mu(u);if(c instanceof ba)i.push(u);else{const d=bi(c,h);d!=null&&(i.push(u),o.set(u,d))}});const a=new mt(i);return new qm(o,a,s.fieldTransforms)}function wR(t,e,n,r,s,i){const o=t.wu(1,e,n),a=[tc(e,r,n)],l=[s];if(i.length%2!=0)throw new L(I.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let d=0;d<i.length;d+=2)a.push(tc(e,i[d])),l.push(i[d+1]);const c=[],u=ft.empty();for(let d=a.length-1;d>=0;--d)if(!Gm(c,a[d])){const f=a[d];let _=l[d];_=Ve(_);const m=o.mu(f);if(_ instanceof ba)c.push(f);else{const E=bi(_,m);E!=null&&(c.push(f),u.set(f,E))}}const h=new mt(c);return new qm(u,h,o.fieldTransforms)}function ER(t,e,n,r=!1){return bi(n,t.wu(r?4:3,e))}function bi(t,e){if(Wm(t=Ve(t)))return Du("Unsupported field value:",e,t),zm(t,e);if(t instanceof Su)return function(r,s){if(!Km(s.Tu))throw s.gu(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.gu(`${r._methodName}() is not currently supported inside arrays`);const i=r._toFieldTransform(s);i&&s.fieldTransforms.push(i)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.Ru&&e.Tu!==4)throw e.gu("Nested arrays are not supported");return function(r,s){const i=[];let o=0;for(const a of r){let l=bi(a,s.fu(o));l==null&&(l={nullValue:"NULL_VALUE"}),i.push(l),o++}return{arrayValue:{values:i}}}(t,e)}return function(r,s){if((r=Ve(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return mA(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const i=he.fromDate(r);return{timestampValue:Do(s.serializer,i)}}if(r instanceof he){const i=new he(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Do(s.serializer,i)}}if(r instanceof ku)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Kr)return{bytesValue:hm(s.serializer,r._byteString)};if(r instanceof ht){const i=s.databaseId,o=r.firestore._databaseId;if(!o.isEqual(i))throw s.gu(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:_u(r.firestore._databaseId||s.databaseId,r._key.path)}}throw s.gu(`Unsupported field value: ${Ea(r)}`)}(t,e)}function zm(t,e){const n={};return Ug(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):or(t,(r,s)=>{const i=bi(s,e.Au(r));i!=null&&(n[r]=i)}),{mapValue:{fields:n}}}function Wm(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof he||t instanceof ku||t instanceof Kr||t instanceof ht||t instanceof Su)}function Du(t,e,n){if(!Wm(n)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(n)){const r=Ea(n);throw r==="an object"?e.gu(t+" a custom object"):e.gu(t+" "+r)}}function tc(t,e,n){if((e=Ve(e))instanceof Ta)return e._internalPath;if(typeof e=="string")return Nu(t,e);throw Oo("Field path arguments must be of type string or ",t,!1,void 0,n)}const IR=new RegExp("[~\\*/\\[\\]]");function Nu(t,e,n){if(e.search(IR)>=0)throw Oo(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Ta(...e.split("."))._internalPath}catch{throw Oo(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Oo(t,e,n,r,s){const i=r&&!r.isEmpty(),o=s!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let l="";return(i||o)&&(l+=" (found",i&&(l+=` in field ${r}`),o&&(l+=` in document ${s}`),l+=")"),new L(I.INVALID_ARGUMENT,a+t+l)}function Gm(t,e){return t.some(n=>n.isEqual(e))}/**
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
 */class Qm{constructor(e,n,r,s,i){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new ht(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new TR(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(Ou("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class TR extends Qm{data(){return super.data()}}function Ou(t,e){return typeof e=="string"?Nu(t,e):e instanceof Ta?e._internalPath:e._delegate._internalPath}/**
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
 */function AR(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new L(I.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Vu{}class bR extends Vu{}function RR(t,e,...n){let r=[];e instanceof Vu&&r.push(e),r=r.concat(n),function(i){const o=i.filter(l=>l instanceof Mu).length,a=i.filter(l=>l instanceof Ra).length;if(o>1||o>0&&a>0)throw new L(I.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const s of r)t=s._apply(t);return t}class Ra extends bR{constructor(e,n,r){super(),this._field=e,this._op=n,this._value=r,this.type="where"}static _create(e,n,r){return new Ra(e,n,r)}_apply(e){const n=this._parse(e);return Ym(e._query,n),new ns(e.firestore,e.converter,Wl(e._query,n))}_parse(e){const n=Aa(e.firestore);return function(i,o,a,l,c,u,h){let d;if(c.isKeyField()){if(u==="array-contains"||u==="array-contains-any")throw new L(I.INVALID_ARGUMENT,`Invalid Query. You can't perform '${u}' queries on documentId().`);if(u==="in"||u==="not-in"){Kd(h,u);const f=[];for(const _ of h)f.push(qd(l,i,_));d={arrayValue:{values:f}}}else d=qd(l,i,h)}else u!=="in"&&u!=="not-in"&&u!=="array-contains-any"||Kd(h,u),d=ER(a,o,h,u==="in"||u==="not-in");return De.create(c,u,d)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}function CR(t,e,n){const r=e,s=Ou("where",t);return Ra._create(s,r,n)}class Mu extends Vu{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new Mu(e,n)}_parse(e){const n=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return n.length===1?n[0]:Dt.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(s,i){let o=s;const a=i.getFlattenedFilters();for(const l of a)Ym(o,l),o=Wl(o,l)}(e._query,n),new ns(e.firestore,e.converter,Wl(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}function qd(t,e,n){if(typeof(n=Ve(n))=="string"){if(n==="")throw new L(I.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!Gg(e)&&n.indexOf("/")!==-1)throw new L(I.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(Ie.fromString(n));if(!B.isDocumentKey(r))throw new L(I.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return fd(t,new B(r))}if(n instanceof ht)return fd(t,n._key);throw new L(I.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Ea(n)}.`)}function Kd(t,e){if(!Array.isArray(t)||t.length===0)throw new L(I.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function Ym(t,e){if(e.isInequality()){const r=fu(t),s=e.field;if(r!==null&&!r.isEqual(s))throw new L(I.INVALID_ARGUMENT,`Invalid query. All where filters with an inequality (<, <=, !=, not-in, >, or >=) must be on the same field. But you have inequality filters on '${r.toString()}' and '${s.toString()}'`);const i=Wg(t);i!==null&&PR(t,s,i)}const n=function(s,i){for(const o of s)for(const a of o.getFlattenedFilters())if(i.indexOf(a.op)>=0)return a.op;return null}(t.filters,function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new L(I.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new L(I.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}function PR(t,e,n){if(!n.isEqual(e))throw new L(I.INVALID_ARGUMENT,`Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '${e.toString()}' and so you must also use '${e.toString()}' as your first argument to orderBy(), but your first orderBy() is on field '${n.toString()}' instead.`)}class SR{convertValue(e,n="none"){switch(nr(e)){case 0:return null;case 1:return e.booleanValue;case 2:return xe(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(tr(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw W()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return or(e,(s,i)=>{r[s]=this.convertValue(i,n)}),r}convertGeoPoint(e){return new ku(xe(e.latitude),xe(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=lu(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(Gs(e));default:return null}}convertTimestamp(e){const n=Cn(e);return new he(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=Ie.fromString(e);Te(mm(r));const s=new Qs(r.get(1),r.get(3)),i=new B(r.popFirst(5));return s.isEqual(n)||on(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
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
 */function Jm(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}/**
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
 */class ms{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Xm extends Qm{constructor(e,n,r,s,i,o){super(e,n,r,s,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new so(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(Ou("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class so extends Xm{data(e={}){return super.data(e)}}class kR{constructor(e,n,r,s){this._firestore=e,this._userDataWriter=n,this._snapshot=s,this.metadata=new ms(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new so(this._firestore,this._userDataWriter,r.key,r,new ms(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new L(I.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(s,i){if(s._snapshot.oldDocs.isEmpty()){let o=0;return s._snapshot.docChanges.map(a=>{const l=new so(s._firestore,s._userDataWriter,a.doc.key,a.doc,new ms(s._snapshot.mutatedKeys.has(a.doc.key),s._snapshot.fromCache),s.query.converter);return a.doc,{type:"added",doc:l,oldIndex:-1,newIndex:o++}})}{let o=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(a=>i||a.type!==3).map(a=>{const l=new so(s._firestore,s._userDataWriter,a.doc.key,a.doc,new ms(s._snapshot.mutatedKeys.has(a.doc.key),s._snapshot.fromCache),s.query.converter);let c=-1,u=-1;return a.type!==0&&(c=o.indexOf(a.doc.key),o=o.delete(a.doc.key)),a.type!==1&&(o=o.add(a.doc),u=o.indexOf(a.doc.key)),{type:xR(a.type),doc:l,oldIndex:c,newIndex:u}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function xR(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return W()}}/**
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
 */function Ca(t){t=Nt(t,ht);const e=Nt(t.firestore,lr);return uR(Pu(e),t._key).then(n=>NR(e,t,n))}class Zm extends SR{constructor(e){super(),this.firestore=e}convertBytes(e){return new Kr(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new ht(this.firestore,null,n)}}function kr(t){t=Nt(t,ns);const e=Nt(t.firestore,lr),n=Pu(e),r=new Zm(e);return AR(t._query),hR(n,t._query).then(s=>new kR(e,r,t,s))}function DR(t,e,n){t=Nt(t,ht);const r=Nt(t.firestore,lr),s=Jm(t.converter,e,n);return Pa(r,[Hm(Aa(r),"setDoc",t._key,s,t.converter!==null,n).toMutation(t._key,Et.none())])}function tn(t,e,n,...r){t=Nt(t,ht);const s=Nt(t.firestore,lr),i=Aa(s);let o;return o=typeof(e=Ve(e))=="string"||e instanceof Ta?wR(i,"updateDoc",t._key,e,n,r):vR(i,"updateDoc",t._key,e),Pa(s,[o.toMutation(t._key,Et.exists(!0))])}function Hd(t){return Pa(Nt(t.firestore,lr),[new pu(t._key,Et.none())])}function Zs(t,e){const n=Nt(t.firestore,lr),r=He(t),s=Jm(t.converter,e);return Pa(n,[Hm(Aa(t.firestore),"addDoc",r._key,s,t.converter!==null,{}).toMutation(r._key,Et.exists(!1))]).then(()=>r)}function Pa(t,e){return function(r,s){const i=new en;return r.asyncQueue.enqueueAndForget(async()=>Yb(await cR(r),s,i)),i.promise}(Pu(t),e)}function NR(t,e,n){const r=n.docs.get(e._key),s=new Zm(t);return new Xm(t,s,e._key,r,new ms(n.hasPendingWrites,n.fromCache),e.converter)}(function(e,n=!0){(function(s){Zr=s})(Qr),Vr(new Yn("firestore",(r,{instanceIdentifier:s,options:i})=>{const o=r.getProvider("app").getImmediate(),a=new lr(new V0(r.getProvider("auth-internal")),new F0(r.getProvider("app-check-internal")),function(c,u){if(!Object.prototype.hasOwnProperty.apply(c.options,["projectId"]))throw new L(I.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Qs(c.options.projectId,u)}(o,s),o);return i=Object.assign({useFetchStreams:n},i),a._setSettings(i),a},"PUBLIC").setMultipleInstances(!0)),Tn(cd,"4.2.0",e),Tn(cd,"4.2.0","esm2017")})();const OR={class:"fixed top-0 bottom-0 left-0 right-0 bg-gray-600 bg-opacity-50 z-50"},VR={class:"bg-gradient-to-br from-orange-600 to-green-400 p-3 rounded-md shadow-lg shadow-black fixed left-1/2 -translate-x-1/2 top-0 max-h-screen overflow-auto text-center w-[600px] max-w-[100vw]"},MR=nv('<p class="text-2xl">GUIDE</p><p class="text-sm mb-5">App version: 0.5.0</p><p class="text-xl">Adding Decks and Cards</p><p class="mb-5">Select a deck by clicking it. Click &#39;New Deck&#39; to create a new deck. <b>Add new cards by clicking the &#39;New Card&#39; button.</b> Input the front and back values and press &#39;Create&#39; or the &#39;enter&#39; key. Selecting &#39;Create Reversed&#39; will create another card with the front and back values swapped. Selecting &#39;Type Answer&#39; will require you to input the back value when reviewing. If &#39;Type Answer&#39; is selected, anything inside &#39;[]&#39; will not be required to input.</p><p class="text-xl">Reviews</p><p class="mb-5"><b>Clicking the &#39;Review&#39; button will allow you to review your cards.</b> The amount of reviews for the day is visible above the &#39;Review&#39; button When reviewing a card, try to guess the answer (the other side of the card). Click the card or press the &#39;space bar&#39; key to show the other side. If you answered correctly press the &#39;correct&#39; button (blue) or the &#39;space bar&#39; key. If you answered wrong press the &#39;wrong&#39; button (red) or the &#39;c&#39; key. If the card is a &#39;type answer&#39; card, type in the answer and press the &#39;enter&#39; key or press the &#39;Check&#39; button. The correct answer will then be visible. Click the card or press either the &#39;enter&#39; or &#39;space bar&#39; key to continue. Repeat until the panel closes. <b>Come back the next day to review more cards.</b> By answering correctly multiple times in a row you will see the card less frequently. Answering a card wrong will make it&#39;s &#39;streak&#39; reset.</p><p class="text-xl">Review Calculation and Settings</p><p class="mb-5"><b>Settings can be opened by pressing on the username.</b> Card reviews are calculated as follows: (time_multiplier^success_streak)*time_duration. Time multiplier and <del>time duration</del> can be changed in the settings. <b>The amount of new cards per day can also be changed in the settings.</b> The username can also be changed. The default values are 1.5 for time multiplier and 24 hours for time duration.</p><p class="text-xl">Editing and Deleting Cards and Decks</p><p class="mb-5"><b>Double clicking on a deck will open the deck options where you can edit the deck and its cards.</b> In the options, the card &#39;streak&#39; and the cards &#39;next review&#39; date are visible.</p><p class="text-xl">Notes</p><p class="mb-14">This app stores your data in Firebase. All decks, cards and settings are synced between devices. The app works on both desktop and mobile.</p>',12),LR={__name:"Guide",emits:["close"],setup(t,{emit:e}){return(n,r)=>(ie(),ue("div",OR,[w("div",VR,[w("button",{onClick:r[0]||(r[0]=s=>n.$emit("close")),class:"bg-gray-500 p-2 rounded-md shadow shadow-black mb-5"},"Close"),MR])]))}},Lu="/wSpaRe/assets/cancel-58c7ea43.svg",UR={key:0,class:"fixed top-0 bottom-0 left-0 right-0 bg-gray-600 bg-opacity-50 z-50"},FR={class:"fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-teal-500 to-teal-700 p-3 rounded-md inline-block text-center shadow-lg shadow-black"},$R=w("img",{src:Lu,alt:"close"},null,-1),BR=[$R],jR=w("br",null,null,-1),qR=w("br",null,null,-1),KR=w("br",null,null,-1),HR={__name:"SignInMenu",props:["auth"],emits:["loadDecks"],setup(t,{expose:e,emit:n}){const r=t,s=K(!1),i=K(""),o=K("");function a(){cI(r.auth,i.value,o.value).then(()=>{n("loadDecks"),c()}).catch(h=>{console.log(h),alert(h.code)})}function l(){s.value=!0}function c(){s.value=!1,i.value="",o.value=""}function u(h){h.code==="Enter"&&a()}return e({openMenu:l}),(h,d)=>{const f=kf("click-away");return s.value?(ie(),ue("div",UR,[Ce((ie(),ue("div",FR,[w("button",{onClick:d[0]||(d[0]=_=>c()),class:"scale-75"},BR),jR,Ce(w("input",{type:"text","onUpdate:modelValue":d[1]||(d[1]=_=>i.value=_),class:"bg-yellow-600 p-3 rounded mb-2 placeholder-white text-lg text-center shadow shadow-black",placeholder:"Email"},null,512),[[tt,i.value]]),qR,Ce(w("input",{type:"password","onUpdate:modelValue":d[2]||(d[2]=_=>o.value=_),onKeypress:d[3]||(d[3]=_=>u(_)),class:"bg-yellow-600 p-3 rounded mb-2 placeholder-white text-lg text-center shadow shadow-black",placeholder:"Password"},null,544),[[tt,o.value]]),KR,w("button",{onClick:d[4]||(d[4]=_=>a()),class:"bg-blue-400 p-3 rounded shadow shadow-black text-xl mt-3"},"Sign In")])),[[f,c]])])):Xe("",!0)}}},zR={key:0,class:"fixed top-0 bottom-0 left-0 right-0 bg-gray-600 bg-opacity-50 z-50"},WR={class:"fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-orange-300 to-orange-500 p-3 rounded-md inline-block text-center shadow-lg shadow-black"},GR=w("img",{src:Lu,alt:"close"},null,-1),QR=[GR],YR=w("br",null,null,-1),JR=w("br",null,null,-1),XR=w("br",null,null,-1),ZR=w("br",null,null,-1),eC=w("br",null,null,-1),tC={__name:"SignUpMenu",props:["auth","db"],emits:["loadDecks"],setup(t,{expose:e,emit:n}){const r=t,s=K(!1),i=K(""),o=K(""),a=K(""),l=K("");function c(){o.value===a.value?lI(r.auth,i.value,o.value).then(()=>{console.log("Account Created!"),Tp(r.auth.currentUser,{displayName:l.value}).then(()=>{console.log("Profile Updated!")}).catch(d=>{console.log(d)}),DR(He(r.db,"users",r.auth.currentUser.uid),{time_multiplier:1.5,time_duration:24,new_cards:20}).then(()=>{console.log("User Document Created!")}).catch(d=>{alert("Error when creating user document: "+d)}),n("loadDecks"),h(),console.log("Sign Up Successful!")}).catch(d=>{console.log(d.code),alert(d.message)}):alert("Passwords don't match up")}function u(){s.value=!0}function h(){s.value=!1,i.value="",o.value="",a.value="",l.value=""}return e({openMenu:u}),(d,f)=>{const _=kf("click-away");return s.value?(ie(),ue("div",zR,[Ce((ie(),ue("div",WR,[w("button",{onClick:f[0]||(f[0]=m=>h()),class:"scale-75"},QR),YR,Ce(w("input",{type:"text","onUpdate:modelValue":f[1]||(f[1]=m=>l.value=m),class:"bg-purple-600 p-3 rounded mb-2 placeholder-white text-lg text-center shadow shadow-black",placeholder:"Username"},null,512),[[tt,l.value]]),JR,Ce(w("input",{type:"text","onUpdate:modelValue":f[2]||(f[2]=m=>i.value=m),class:"bg-purple-600 p-3 rounded mb-2 placeholder-white text-lg text-center shadow shadow-black",placeholder:"Email"},null,512),[[tt,i.value]]),XR,Ce(w("input",{type:"password","onUpdate:modelValue":f[3]||(f[3]=m=>o.value=m),class:"bg-purple-600 p-3 rounded mb-2 placeholder-white text-lg text-center shadow shadow-black",placeholder:"Password"},null,512),[[tt,o.value]]),ZR,Ce(w("input",{type:"password","onUpdate:modelValue":f[4]||(f[4]=m=>a.value=m),class:"bg-purple-600 p-3 rounded mb-2 placeholder-white text-lg text-center shadow shadow-black",placeholder:"Verify Password"},null,512),[[tt,a.value]]),eC,w("button",{onClick:f[5]||(f[5]=m=>c()),class:"bg-red-400 p-3 rounded shadow shadow-black text-xl mt-3"},"Sign Up")])),[[_,h]])])):Xe("",!0)}}},nC={class:"text-center mt-8"},rC={key:0},sC={class:"text-white text-3xl select-none"},iC=w("br",null,null,-1),oC={key:1},aC={__name:"Account",props:["auth"],emits:["openSettings","openSignIn","openSignUp","signOut"],setup(t,{emit:e}){const n=t;function r(){pI(n.auth).then(()=>{alert("Signed out"),e("signOut")}).catch(s=>{alert(s)})}return(s,i)=>(ie(),ue("div",nC,[t.auth!==null&&t.auth.currentUser!==null?(ie(),ue("div",rC,[w("div",{onClick:i[0]||(i[0]=o=>s.$emit("openSettings")),class:"bg-sky-900 p-3 rounded shadow shadow-black inline-block mb-2 w-[400px] max-w-[100vw] min-h-[50px] overflow-hidden"},[w("p",sC,_t(t.auth.currentUser.displayName),1)]),iC,w("button",{onClick:i[1]||(i[1]=o=>r()),class:"bg-rose-700 px-3 py-2 rounded shadow shadow-black text-xl"},"Sign Out")])):(ie(),ue("div",oC,[w("button",{onClick:i[2]||(i[2]=o=>s.$emit("openSignIn")),class:"mr-5 bg-teal-500 px-3 py-2 rounded shadow shadow-black text-xl"},"Sign In"),w("button",{onClick:i[3]||(i[3]=o=>s.$emit("openSignUp")),class:"bg-orange-300 px-3 py-2 rounded shadow shadow-black text-xl"},"Sign Up")]))]))}},lC={key:0,class:"fixed top-0 bottom-0 left-0 right-0 bg-gray-600 bg-opacity-50 z-50"},cC={class:"fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-gray-600 to-gray-800 p-3 rounded-md inline-block text-center shadow-lg shadow-black"},uC=w("p",{class:"text-white text-xl mb-1"},"Email",-1),hC={class:"bg-gray-500 p-2 rounded text-white text-xl text-center shadow shadow-black max-w-[225px] mb-3"},dC=w("p",{class:"text-white text-xl mb-1"},"Username",-1),fC=w("p",{class:"text-white text-xl mb-1"},"Time Multiplier",-1),pC=w("p",{class:"text-white text-xl mb-1"},"Time Duration",-1),gC={class:"bg-pink-800 p-2 rounded text-white text-xl text-center shadow shadow-black mb-3"},mC=w("p",{class:"text-white text-xl mb-1"},"New Cards per Day",-1),_C=w("br",null,null,-1),yC={__name:"Settings",props:["auth","db"],emits:["saveSettings"],setup(t,{expose:e,emit:n}){const r=t,s=K(!1),i=K(""),o=K(1.5),a=K(24),l=K(20);async function c(){tn(He(r.db,"users/"+r.auth.currentUser.uid),{new_cards:l.value,time_multiplier:o.value}).catch(d=>{alert(d)}),await Tp(r.auth.currentUser,{displayName:i.value}).catch(d=>{alert(d)}),n("saveSettings"),s.value=!1}async function u(){const d=await Ca(He(r.db,"users/"+r.auth.currentUser.uid));o.value=d.data().time_multiplier,a.value=d.data().time_duration,l.value=d.data().new_cards}function h(){u(),i.value=r.auth.currentUser.displayName,s.value=!0}return e({openSettings:h}),(d,f)=>s.value?(ie(),ue("div",lC,[w("div",cC,[uC,w("p",hC,_t(t.auth.currentUser.email),1),dC,Ce(w("input",{type:"text",placeholder:"username","onUpdate:modelValue":f[0]||(f[0]=_=>i.value=_),class:"bg-gray-500 p-2 rounded text-white text-xl text-center shadow shadow-black placeholder-black max-w-[225px] mb-3"},null,512),[[tt,i.value]]),fC,Ce(w("input",{type:"text",placeholder:"multiplier","onUpdate:modelValue":f[1]||(f[1]=_=>o.value=_),class:"bg-pink-800 p-2 rounded text-white text-xl text-center shadow shadow-black placeholder-black max-w-[140px] mb-3"},null,512),[[tt,o.value,void 0,{number:!0}]]),pC,w("p",gC,_t(a.value)+"h",1),mC,Ce(w("input",{type:"text",placeholder:"new cards","onUpdate:modelValue":f[2]||(f[2]=_=>l.value=_),class:"bg-indigo-800 p-2 rounded text-white text-xl text-center shadow shadow-black placeholder-black max-w-[140px] mb-3"},null,512),[[tt,l.value,void 0,{number:!0}]]),_C,w("button",{onClick:f[3]||(f[3]=_=>c()),class:"bg-red-500 p-2 rounded-md text-lg shadow shadow-black mt-5"},"Close")])])):Xe("",!0)}};var _s=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function vC(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}function wC(t){if(t.__esModule)return t;var e=t.default;if(typeof e=="function"){var n=function r(){return this instanceof r?Reflect.construct(e,arguments,this.constructor):e.apply(this,arguments)};n.prototype=e.prototype}else n={};return Object.defineProperty(n,"__esModule",{value:!0}),Object.keys(t).forEach(function(r){var s=Object.getOwnPropertyDescriptor(t,r);Object.defineProperty(n,r,s.get?s:{enumerable:!0,get:function(){return t[r]}})}),n}var e_={exports:{}};function EC(t){throw new Error('Could not dynamically require "'+t+'". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.')}var sl={exports:{}};const IC={},TC=Object.freeze(Object.defineProperty({__proto__:null,default:IC},Symbol.toStringTag,{value:"Module"})),AC=wC(TC);var zd;function bC(){return zd||(zd=1,function(t,e){(function(n,r){t.exports=r()})(_s,function(){var n=n||function(r,s){var i;if(typeof window<"u"&&window.crypto&&(i=window.crypto),typeof self<"u"&&self.crypto&&(i=self.crypto),typeof globalThis<"u"&&globalThis.crypto&&(i=globalThis.crypto),!i&&typeof window<"u"&&window.msCrypto&&(i=window.msCrypto),!i&&typeof _s<"u"&&_s.crypto&&(i=_s.crypto),!i&&typeof EC=="function")try{i=AC}catch{}var o=function(){if(i){if(typeof i.getRandomValues=="function")try{return i.getRandomValues(new Uint32Array(1))[0]}catch{}if(typeof i.randomBytes=="function")try{return i.randomBytes(4).readInt32LE()}catch{}}throw new Error("Native crypto module could not be used to get secure random number.")},a=Object.create||function(){function y(){}return function(R){var C;return y.prototype=R,C=new y,y.prototype=null,C}}(),l={},c=l.lib={},u=c.Base=function(){return{extend:function(y){var R=a(this);return y&&R.mixIn(y),(!R.hasOwnProperty("init")||this.init===R.init)&&(R.init=function(){R.$super.init.apply(this,arguments)}),R.init.prototype=R,R.$super=this,R},create:function(){var y=this.extend();return y.init.apply(y,arguments),y},init:function(){},mixIn:function(y){for(var R in y)y.hasOwnProperty(R)&&(this[R]=y[R]);y.hasOwnProperty("toString")&&(this.toString=y.toString)},clone:function(){return this.init.prototype.extend(this)}}}(),h=c.WordArray=u.extend({init:function(y,R){y=this.words=y||[],R!=s?this.sigBytes=R:this.sigBytes=y.length*4},toString:function(y){return(y||f).stringify(this)},concat:function(y){var R=this.words,C=y.words,$=this.sigBytes,X=y.sigBytes;if(this.clamp(),$%4)for(var G=0;G<X;G++){var O=C[G>>>2]>>>24-G%4*8&255;R[$+G>>>2]|=O<<24-($+G)%4*8}else for(var k=0;k<X;k+=4)R[$+k>>>2]=C[k>>>2];return this.sigBytes+=X,this},clamp:function(){var y=this.words,R=this.sigBytes;y[R>>>2]&=4294967295<<32-R%4*8,y.length=r.ceil(R/4)},clone:function(){var y=u.clone.call(this);return y.words=this.words.slice(0),y},random:function(y){for(var R=[],C=0;C<y;C+=4)R.push(o());return new h.init(R,y)}}),d=l.enc={},f=d.Hex={stringify:function(y){for(var R=y.words,C=y.sigBytes,$=[],X=0;X<C;X++){var G=R[X>>>2]>>>24-X%4*8&255;$.push((G>>>4).toString(16)),$.push((G&15).toString(16))}return $.join("")},parse:function(y){for(var R=y.length,C=[],$=0;$<R;$+=2)C[$>>>3]|=parseInt(y.substr($,2),16)<<24-$%8*4;return new h.init(C,R/2)}},_=d.Latin1={stringify:function(y){for(var R=y.words,C=y.sigBytes,$=[],X=0;X<C;X++){var G=R[X>>>2]>>>24-X%4*8&255;$.push(String.fromCharCode(G))}return $.join("")},parse:function(y){for(var R=y.length,C=[],$=0;$<R;$++)C[$>>>2]|=(y.charCodeAt($)&255)<<24-$%4*8;return new h.init(C,R)}},m=d.Utf8={stringify:function(y){try{return decodeURIComponent(escape(_.stringify(y)))}catch{throw new Error("Malformed UTF-8 data")}},parse:function(y){return _.parse(unescape(encodeURIComponent(y)))}},E=c.BufferedBlockAlgorithm=u.extend({reset:function(){this._data=new h.init,this._nDataBytes=0},_append:function(y){typeof y=="string"&&(y=m.parse(y)),this._data.concat(y),this._nDataBytes+=y.sigBytes},_process:function(y){var R,C=this._data,$=C.words,X=C.sigBytes,G=this.blockSize,O=G*4,k=X/O;y?k=r.ceil(k):k=r.max((k|0)-this._minBufferSize,0);var ee=k*G,me=r.min(ee*4,X);if(ee){for(var at=0;at<ee;at+=G)this._doProcessBlock($,at);R=$.splice(0,ee),C.sigBytes-=me}return new h.init(R,me)},clone:function(){var y=u.clone.call(this);return y._data=this._data.clone(),y},_minBufferSize:0});c.Hasher=E.extend({cfg:u.extend(),init:function(y){this.cfg=this.cfg.extend(y),this.reset()},reset:function(){E.reset.call(this),this._doReset()},update:function(y){return this._append(y),this._process(),this},finalize:function(y){y&&this._append(y);var R=this._doFinalize();return R},blockSize:16,_createHelper:function(y){return function(R,C){return new y.init(C).finalize(R)}},_createHmacHelper:function(y){return function(R,C){return new M.HMAC.init(y,C).finalize(R)}}});var M=l.algo={};return l}(Math);return n})}(sl)),sl.exports}(function(t,e){(function(n,r){t.exports=r(bC())})(_s,function(n){return function(r){var s=n,i=s.lib,o=i.WordArray,a=i.Hasher,l=s.algo,c=[],u=[];(function(){function f(M){for(var y=r.sqrt(M),R=2;R<=y;R++)if(!(M%R))return!1;return!0}function _(M){return(M-(M|0))*4294967296|0}for(var m=2,E=0;E<64;)f(m)&&(E<8&&(c[E]=_(r.pow(m,1/2))),u[E]=_(r.pow(m,1/3)),E++),m++})();var h=[],d=l.SHA256=a.extend({_doReset:function(){this._hash=new o.init(c.slice(0))},_doProcessBlock:function(f,_){for(var m=this._hash.words,E=m[0],M=m[1],y=m[2],R=m[3],C=m[4],$=m[5],X=m[6],G=m[7],O=0;O<64;O++){if(O<16)h[O]=f[_+O]|0;else{var k=h[O-15],ee=(k<<25|k>>>7)^(k<<14|k>>>18)^k>>>3,me=h[O-2],at=(me<<15|me>>>17)^(me<<13|me>>>19)^me>>>10;h[O]=ee+h[O-7]+at+h[O-16]}var It=C&$^~C&X,fe=E&M^E&y^M&y,cr=(E<<30|E>>>2)^(E<<19|E>>>13)^(E<<10|E>>>22),Fe=(C<<26|C>>>6)^(C<<21|C>>>11)^(C<<7|C>>>25),ve=G+Fe+It+u[O]+h[O],pe=cr+fe;G=X,X=$,$=C,C=R+ve|0,R=y,y=M,M=E,E=ve+pe|0}m[0]=m[0]+E|0,m[1]=m[1]+M|0,m[2]=m[2]+y|0,m[3]=m[3]+R|0,m[4]=m[4]+C|0,m[5]=m[5]+$|0,m[6]=m[6]+X|0,m[7]=m[7]+G|0},_doFinalize:function(){var f=this._data,_=f.words,m=this._nDataBytes*8,E=f.sigBytes*8;return _[E>>>5]|=128<<24-E%32,_[(E+64>>>9<<4)+14]=r.floor(m/4294967296),_[(E+64>>>9<<4)+15]=m,f.sigBytes=_.length*4,this._process(),this._hash},clone:function(){var f=a.clone.call(this);return f._hash=this._hash.clone(),f}});s.SHA256=a._createHelper(d),s.HmacSHA256=a._createHmacHelper(d)}(Math),n.SHA256})})(e_);var RC=e_.exports;const Uu=vC(RC),CC={class:"fixed top-0 bottom-0 left-0 right-0 bg-gray-600 bg-opacity-50 z-50 overflow-auto"},PC={class:"absolute left-1/2 top-[20%] -translate-x-1/2 text-center"},SC={class:"bg-gradient-to-r from-green-900 to-blue-900 p-3 rounded-md inline-block text-center shadow-lg shadow-black"},kC=w("br",null,null,-1),xC=w("br",null,null,-1),DC=w("br",null,null,-1),NC=w("br",null,null,-1),OC={class:"mt-14 bg-gradient-to-r from-green-900 to-blue-900 py-3 px-8 rounded-md inline-block text-center shadow-lg shadow-black max-w-[80vw] overflow-auto"},VC=w("p",{class:"text-white text-xl mb-3"},"Cards",-1),MC={class:"whitespace-nowrap mb-6"},LC=["onUpdate:modelValue"],UC=["onUpdate:modelValue"],FC=["for"],$C=["onUpdate:modelValue","id"],BC={class:"bg-emerald-900 p-2 rounded-md text-center text-white shadow shadow-black mr-5 inline"},jC={class:"bg-yellow-900 p-2 rounded-md text-center text-white shadow shadow-black mr-5 inline"},qC=["onClick"],KC={__name:"EditDeckMenu",props:["auth","db","deck"],emits:["close"],setup(t,{expose:e,emit:n}){const r=t,s=K(r.deck.name),i=K(r.deck.color);let o=[];const a=K([]);async function l(){s.value!==r.deck.name&&(console.log("Name Updated!"),await tn(He(r.db,"users/"+r.auth.currentUser.uid+"/decks/"+r.deck.id),{name:s.value}));for(let f=0;f<a.value.length;f++)(a.value[f].front!==o[f].front||a.value[f].back!==o[f].back||a.value[f].type_answer!==o[f].type_answer)&&(console.log("Card Updated!"),await tn(He(r.db,"users/"+r.auth.currentUser.uid+"/decks/"+r.deck.id+"/cards/"+a.value[f].id),{front:a.value[f].front,back:a.value[f].back,type_answer:a.value[f].type_answer}));n("close")}function c(){prompt(`*Please read carefully*.

Deleting a deck will remove the deck, but the individual cards will NOT be deleted. If you want to delete the cards please do so BEFORE deleting the deck. To confirm you want to delete this deck by typing 'DELETE'`)==="DELETE"?Hd(He(r.db,"users/"+r.auth.currentUser.uid+"/decks/"+r.deck.id)).then(()=>{n("close")}):(alert("Not Deleted!"),n("close"))}function u(){kr(Ct(r.db,"users/"+r.auth.currentUser.uid+"/decks/"+r.deck.id+"/cards")).then(f=>{f.forEach(_=>{o.push({front:_.data().front,back:_.data().back,streak:_.data().streak,next_review:_.data().next_review.toDate(),type_answer:!!_.data().type_answer,id:_.id}),a.value.push({front:_.data().front,back:_.data().back,streak:_.data().streak,next_review:_.data().next_review.toDate(),type_answer:!!_.data().type_answer,id:_.id})})})}function h(f,_){confirm("Are you sure you want to delete this card?")?(Hd(He(r.db,"users/"+r.auth.currentUser.uid+"/decks/"+r.deck.id+"/cards/"+f)),a.value.splice(_,1),o.splice(_,1),console.log("Card Deleted!")):console.log("Not Deleted!")}function d(f){return"#"+Uu(f).toString().substring(0,6)}return e({loadAllCards:u}),(f,_)=>(ie(),ue("div",CC,[w("div",PC,[w("div",SC,[Ce(w("input",{type:"text","onUpdate:modelValue":_[0]||(_[0]=m=>s.value=m),onInput:_[1]||(_[1]=m=>i.value=d(s.value)),style:Gn({backgroundColor:i.value}),class:"bg-indigo-400 p-3 rounded shadow shadow-black placeholder-white text-center text-lg",placeholder:"Name"},null,36),[[tt,s.value]]),kC,w("p",{style:Gn({backgroundColor:d(t.deck.id)}),class:"mt-3 p-1 rounded text-black"},"Deck ID: "+_t(t.deck.id),5),xC,w("button",{onClick:_[2]||(_[2]=m=>c()),class:"mt-3 bg-red-700 p-3 rounded shadow shadow-black text-xl"},"DELETE"),DC,w("button",{onClick:_[3]||(_[3]=m=>f.$emit("close")),class:"mt-3 bg-orange-300 p-3 rounded shadow shadow-black text-xl mr-4"},"Cancel"),w("button",{onClick:_[4]||(_[4]=m=>l()),class:"mt-3 bg-rose-300 p-3 rounded shadow shadow-black text-xl"},"Update")]),NC,w("div",OC,[VC,(ie(!0),ue(ct,null,vc(a.value,(m,E)=>(ie(),ue("div",MC,[Ce(w("input",{type:"text",placeholder:"Card Front","onUpdate:modelValue":M=>m.front=M,class:"bg-rose-900 p-2 rounded-md text-center text-white placeholder-black shadow shadow-black mr-5 w-48 inline"},null,8,LC),[[tt,m.front]]),Ce(w("input",{type:"text",placeholder:"Card Back","onUpdate:modelValue":M=>m.back=M,class:"bg-purple-900 p-2 rounded-md text-center text-white placeholder-black shadow shadow-black mr-5 w-48 inline"},null,8,UC),[[tt,m.back]]),w("label",{for:"typeAnsSetting"+E,class:"text-center text-white mr-2"},"Type Answer",8,FC),Ce(w("input",{"onUpdate:modelValue":M=>m.type_answer=M,type:"checkbox",id:"typeAnsSetting"+E,class:"w-7 h-7 translate-y-1 mr-5"},null,8,$C),[[Tl,m.type_answer]]),w("p",BC,_t(m.streak),1),w("p",jC,_t(m.next_review.toLocaleDateString("en-GB")),1),w("button",{onClick:M=>h(m.id,E),class:"bg-red-900 p-2 rounded-md text-green-500 shadow shadow-black"},"Delete",8,qC)]))),256))])])]))}},HC={class:"fixed top-0 bottom-0 left-0 right-0 bg-gray-600 bg-opacity-50 z-50"},zC={class:"fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-green-900 to-blue-900 p-3 rounded-md inline-block text-center shadow-lg shadow-black"},WC=w("br",null,null,-1),GC={__name:"NewDeckMenu",props:["auth","db","newCards"],emits:["close","save"],setup(t,{emit:e}){const n=t,r=K("");function s(){Zs(Ct(n.db,"users/"+n.auth.currentUser.uid+"/decks"),{name:r.value,new_cards_today:n.newCards,last_update:he.fromDate(new Date(0))}),e("save"),e("close")}function i(o){return"#"+Uu(o).toString().substring(0,6)}return(o,a)=>(ie(),ue("div",HC,[w("div",zC,[Ce(w("input",{type:"text","onUpdate:modelValue":a[0]||(a[0]=l=>r.value=l),style:Gn({backgroundColor:i(r.value)}),class:"bg-indigo-400 p-3 rounded shadow shadow-black placeholder-white text-center text-lg",placeholder:"Name"},null,4),[[tt,r.value]]),WC,w("button",{onClick:a[1]||(a[1]=l=>o.$emit("close")),class:"mt-3 bg-orange-300 p-3 rounded shadow shadow-black text-xl mr-4"},"Cancel"),w("button",{onClick:s,class:"mt-3 bg-rose-300 p-3 rounded shadow shadow-black text-xl"},"Create")])]))}},QC={class:"fixed top-0 bottom-0 left-0 right-0 bg-gray-600 bg-opacity-50 z-50"},YC={class:"fixed left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 inline-block text-center p-3 rounded-md shadow-lg shadow-black bg-gradient-to-tr from-cyan-700 to-zinc-400"},JC=w("p",null,"Front",-1),XC=w("hr",{class:"border-2 border-gray-400 rounded mt-4 mb-4"},null,-1),ZC=w("p",null,"Back",-1),eP=w("hr",{class:"border-2 border-gray-400 rounded mt-4 mb-4"},null,-1),tP={class:"bg-gray-500 p-3 shadow shadow-black rounded-md"},nP=w("label",{for:"reversedCheck",class:"text-lg text-center text-white mr-3"},"Create Reversed",-1),rP=w("br",null,null,-1),sP=w("label",{for:"typeAnsCheck",class:"text-lg text-center text-white mr-3"},"Type Answer",-1),iP=w("hr",{class:"border-2 border-gray-400 rounded mt-4 mb-4"},null,-1),oP={__name:"NewCardMenu",props:["auth","db","deckId"],emits:["close"],setup(t,{emit:e}){const n=t,r=K(""),s=K(""),i=K(!1),o=K(!1),a=K(null);function l(){Zs(Ct(n.db,"users/"+n.auth.currentUser.uid+"/decks/"+n.deckId+"/cards/"),{front:r.value,back:s.value,streak:-1,next_review:he.fromDate(new Date),type_answer:o.value}).catch(u=>{alert(u)}),i.value&&Zs(Ct(n.db,"users/"+n.auth.currentUser.uid+"/decks/"+n.deckId+"/cards/"),{front:s.value,back:r.value,streak:-1,next_review:he.fromDate(new Date),type_answer:o.value}).catch(u=>{alert(u)}),r.value="",s.value="",a.value.focus()}function c(u){u.code=="Enter"&&l()}return(u,h)=>(ie(),ue("div",QC,[w("div",YC,[JC,Ce(w("input",{type:"text",ref_key:"front_field_ref",ref:a,"onUpdate:modelValue":h[0]||(h[0]=d=>r.value=d),class:"bg-gray-600 p-3 rounded shadow shadow-black text-lg text-center text-white"},null,512),[[tt,r.value]]),XC,ZC,Ce(w("input",{type:"text","onUpdate:modelValue":h[1]||(h[1]=d=>s.value=d),onKeypress:h[2]||(h[2]=d=>c(d)),class:"bg-gray-600 p-3 rounded shadow shadow-black text-lg text-center text-white"},null,544),[[tt,s.value]]),eP,w("div",tP,[nP,Ce(w("input",{"onUpdate:modelValue":h[3]||(h[3]=d=>i.value=d),type:"checkbox",id:"reversedCheck",class:"w-7 h-7 translate-y-1"},null,512),[[Tl,i.value]]),rP,sP,Ce(w("input",{"onUpdate:modelValue":h[4]||(h[4]=d=>o.value=d),type:"checkbox",id:"typeAnsCheck",class:"w-7 h-7 translate-y-1"},null,512),[[Tl,o.value]])]),iP,w("button",{onClick:h[5]||(h[5]=d=>u.$emit("close")),class:"bg-red-400 px-3 py-2 rounded text-white text-lg shadow-md shadow-gray-800 mr-10"},"Cancel"),w("button",{onClick:h[6]||(h[6]=d=>l()),class:"bg-green-600 px-3 py-2 rounded text-white text-lg shadow-md shadow-gray-800"},"Create")])]))}},aP={key:0,class:"mt-5 text-center overflow-auto whitespace-nowrap pb-3"},lP={class:"inline-block mb-3"},cP=["onClick","onDblclick"],uP={key:3,class:"mt-10"},hP={class:"flex justify-center text-center"},dP={class:"mr-10 text-lg"},fP={class:"text-lg"},pP={class:"flex justify-center"},gP={class:"mt-2"},mP={__name:"Decks",props:["auth","db","newCards"],emits:["loadSettings","review"],setup(t,{expose:e,emit:n}){const r=t,s=K([]),i=K(""),o=K(0),a=K(0),l=K(-1),c=K(!1),u=K(!1),h=K(null),d=K(null);async function f(G){i.value=G;const O=await kr(Ct(r.db,"users/"+r.auth.currentUser.uid+"/decks/"+i.value+"/cards"));o.value=0,a.value=0;const k=new Date;O.forEach(ee=>{k>=ee.data().next_review.toDate()&&(ee.data().streak!==-1?o.value+=1:a.value+=1)})}async function _(G){l.value=G,await Bo(),h.value.loadAllCards()}async function m(){let G=[];kr(Ct(r.db,"users/"+r.auth.currentUser.uid+"/decks")).then(O=>{O.forEach(k=>{G.push({name:k.data().name,color:X(k.data().name),id:k.id})}),s.value=G}),n("loadSettings")}function E(){l.value=-1,m()}function M(){c.value=!1}function y(){m()}async function R(){const G=await Ca(He(r.db,"users/"+r.auth.currentUser.uid+"/decks/"+i.value));let O=[],k=[],ee=G.data().new_cards_today;const me=new Date,at=new Date(me.getFullYear(),me.getMonth(),me.getDate());at>G.data().last_update.toDate()&&(tn(He(r.db,"users/"+r.auth.currentUser.uid+"/decks/"+i.value),{new_cards_today:r.newCards,last_update:he.fromDate(at)}),ee=r.newCards),(await kr(RR(Ct(r.db,"users/"+r.auth.currentUser.uid+"/decks/"+i.value+"/cards"),CR("next_review","<=",he.fromDate(me))))).forEach(fe=>{fe.data().streak!==-1?O.push({id:fe.id,front:fe.data().front,back:fe.data().back,streak:fe.data().streak,type_answer:!!fe.data().type_answer}):k.push({id:fe.id,front:fe.data().front,back:fe.data().back,streak:fe.data().streak,next_review:fe.data().next_review,type_answer:!!fe.data().type_answer})}),k.sort((fe,cr)=>fe.next_review.toDate()-cr.next_review.toDate());for(let fe=0;fe<k.length;fe++)ee>0&&(O.push({id:k[fe].id,front:k[fe].front,back:k[fe].back,streak:0,type_answer:k[fe].type_answer}),tn(He(r.db,"users/"+r.auth.currentUser.uid+"/decks/"+i.value+"/cards/"+k[fe].id),{streak:0}),ee-=1);tn(He(r.db,"users/"+r.auth.currentUser.uid+"/decks/"+i.value),{new_cards_today:ee}),O.length!==0?n("review",i.value,O):alert("No reviews on this deck at this time.")}function C(){u.value=!1}function $(){i.value="",s.value=[]}function X(G){return"#"+Uu(G).toString().substring(0,6)}return e({loadDecks:m,logout:$}),(G,O)=>(ie(),ue(ct,null,[t.auth!==null&&t.auth.currentUser!==null?(ie(),ue("div",aP,[(ie(!0),ue(ct,null,vc(s.value,(k,ee)=>(ie(),ue("div",lP,[w("button",{onClick:me=>f(k.id),onDblclick:me=>_(ee),style:Gn({backgroundColor:k.color,borderWidth:i.value==k.id?"4px":"0px"}),class:"bg-white p-5 rounded shadow-md shadow-black text-lg mr-5 border-white"},_t(k.name),45,cP)]))),256)),w("button",{onClick:O[0]||(O[0]=k=>c.value=!0),class:"bg-gradient-to-r from-emerald-700 to-lime-600 p-5 rounded shadow-md shadow-black text-lg text-white"},"New Deck")])):Xe("",!0),l.value!==-1?(ie(),ws(KC,{key:1,auth:t.auth,db:t.db,deck:s.value[l.value],onClose:O[1]||(O[1]=k=>E()),ref_key:"edit_deck_menu_ref",ref:h},null,8,["auth","db","deck"])):Xe("",!0),c.value?(ie(),ws(GC,{key:2,auth:t.auth,db:t.db,"new-cards":t.newCards,onClose:O[2]||(O[2]=k=>M()),onSave:O[3]||(O[3]=k=>y()),ref_key:"new_deck_menu_ref",ref:d},null,8,["auth","db","new-cards"])):Xe("",!0),i.value!==""?(ie(),ue("div",uP,[w("div",hP,[w("p",dP,[El("New Cards: "),w("b",null,_t(a.value),1)]),w("p",fP,[El("Reviews: "),w("b",null,_t(o.value),1)])]),w("div",pP,[w("div",gP,[w("button",{onClick:O[4]||(O[4]=k=>u.value=!0),class:"bg-gradient-to-tr from-orange-600 to-blue-500 rounded-lg p-3 text-2xl shadow-lg shadow-black text-white mr-5"},"New Card"),w("button",{onClick:O[5]||(O[5]=k=>R()),class:"bg-gradient-to-r from-green-500 to-amber-800 p-3 rounded-lg text-2xl shadow-lg shadow-black text-white"},"Review")])])])):Xe("",!0),u.value?(ie(),ws(oP,{key:4,auth:t.auth,db:t.db,"deck-id":i.value,onClose:O[6]||(O[6]=k=>C())},null,8,["auth","db","deck-id"])):Xe("",!0)],64))}},_P="/wSpaRe/assets/yes-6050e699.svg";var il=typeof navigator<"u"?navigator.userAgent.toLowerCase().indexOf("firefox")>0:!1;function ol(t,e,n,r){t.addEventListener?t.addEventListener(e,n,r):t.attachEvent&&t.attachEvent("on".concat(e),function(){n(window.event)})}function t_(t,e){for(var n=e.slice(0,e.length-1),r=0;r<n.length;r++)n[r]=t[n[r].toLowerCase()];return n}function n_(t){typeof t!="string"&&(t=""),t=t.replace(/\s/g,"");for(var e=t.split(","),n=e.lastIndexOf("");n>=0;)e[n-1]+=",",e.splice(n,1),n=e.lastIndexOf("");return e}function yP(t,e){for(var n=t.length>=e.length?t:e,r=t.length>=e.length?e:t,s=!0,i=0;i<n.length;i++)r.indexOf(n[i])===-1&&(s=!1);return s}var ei={backspace:8,"⌫":8,tab:9,clear:12,enter:13,"↩":13,return:13,esc:27,escape:27,space:32,left:37,up:38,right:39,down:40,del:46,delete:46,ins:45,insert:45,home:36,end:35,pageup:33,pagedown:34,capslock:20,num_0:96,num_1:97,num_2:98,num_3:99,num_4:100,num_5:101,num_6:102,num_7:103,num_8:104,num_9:105,num_multiply:106,num_add:107,num_enter:108,num_subtract:109,num_decimal:110,num_divide:111,"⇪":20,",":188,".":190,"/":191,"`":192,"-":il?173:189,"=":il?61:187,";":il?59:186,"'":222,"[":219,"]":221,"\\":220},Gt={"⇧":16,shift:16,"⌥":18,alt:18,option:18,"⌃":17,ctrl:17,control:17,"⌘":91,cmd:91,command:91},nc={16:"shiftKey",18:"altKey",17:"ctrlKey",91:"metaKey",shiftKey:16,ctrlKey:17,altKey:18,metaKey:91},Be={16:!1,18:!1,17:!1,91:!1},Re={};for(var Ki=1;Ki<20;Ki++)ei["f".concat(Ki)]=111+Ki;var ye=[],Wd=!1,r_="all",s_=[],Ri=function(e){return ei[e.toLowerCase()]||Gt[e.toLowerCase()]||e.toUpperCase().charCodeAt(0)},vP=function(e){return Object.keys(ei).find(function(n){return ei[n]===e})},wP=function(e){return Object.keys(Gt).find(function(n){return Gt[n]===e})};function i_(t){r_=t||"all"}function ti(){return r_||"all"}function EP(){return ye.slice(0)}function IP(){return ye.map(function(t){return vP(t)||wP(t)||String.fromCharCode(t)})}function TP(){var t=[];return Object.keys(Re).forEach(function(e){Re[e].forEach(function(n){var r=n.key,s=n.scope,i=n.mods,o=n.shortcut;t.push({scope:s,shortcut:o,mods:i,keys:r.split("+").map(function(a){return Ri(a)})})})}),t}function AP(t){var e=t.target||t.srcElement,n=e.tagName,r=!0;return(e.isContentEditable||(n==="INPUT"||n==="TEXTAREA"||n==="SELECT")&&!e.readOnly)&&(r=!1),r}function bP(t){return typeof t=="string"&&(t=Ri(t)),ye.indexOf(t)!==-1}function RP(t,e){var n,r;t||(t=ti());for(var s in Re)if(Object.prototype.hasOwnProperty.call(Re,s))for(n=Re[s],r=0;r<n.length;)n[r].scope===t?n.splice(r,1):r++;ti()===t&&i_(e||"all")}function CP(t){var e=t.keyCode||t.which||t.charCode,n=ye.indexOf(e);if(n>=0&&ye.splice(n,1),t.key&&t.key.toLowerCase()==="meta"&&ye.splice(0,ye.length),(e===93||e===224)&&(e=91),e in Be){Be[e]=!1;for(var r in Gt)Gt[r]===e&&(Ne[r]=!1)}}function PP(t){if(typeof t>"u")Object.keys(Re).forEach(function(o){return delete Re[o]});else if(Array.isArray(t))t.forEach(function(o){o.key&&al(o)});else if(typeof t=="object")t.key&&al(t);else if(typeof t=="string"){for(var e=arguments.length,n=new Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];var s=n[0],i=n[1];typeof s=="function"&&(i=s,s=""),al({key:t,scope:s,method:i,splitKey:"+"})}}var al=function(e){var n=e.key,r=e.scope,s=e.method,i=e.splitKey,o=i===void 0?"+":i,a=n_(n);a.forEach(function(l){var c=l.split(o),u=c.length,h=c[u-1],d=h==="*"?"*":Ri(h);if(Re[d]){r||(r=ti());var f=u>1?t_(Gt,c):[];Re[d]=Re[d].filter(function(_){var m=s?_.method===s:!0;return!(m&&_.scope===r&&yP(_.mods,f))})}})};function Gd(t,e,n,r){if(e.element===r){var s;if(e.scope===n||e.scope==="all"){s=e.mods.length>0;for(var i in Be)Object.prototype.hasOwnProperty.call(Be,i)&&(!Be[i]&&e.mods.indexOf(+i)>-1||Be[i]&&e.mods.indexOf(+i)===-1)&&(s=!1);(e.mods.length===0&&!Be[16]&&!Be[18]&&!Be[17]&&!Be[91]||s||e.shortcut==="*")&&(e.keys=[],e.keys=e.keys.concat(ye),e.method(t,e)===!1&&(t.preventDefault?t.preventDefault():t.returnValue=!1,t.stopPropagation&&t.stopPropagation(),t.cancelBubble&&(t.cancelBubble=!0)))}}}function Qd(t,e){var n=Re["*"],r=t.keyCode||t.which||t.charCode;if(Ne.filter.call(this,t)){if((r===93||r===224)&&(r=91),ye.indexOf(r)===-1&&r!==229&&ye.push(r),["ctrlKey","altKey","shiftKey","metaKey"].forEach(function(_){var m=nc[_];t[_]&&ye.indexOf(m)===-1?ye.push(m):!t[_]&&ye.indexOf(m)>-1?ye.splice(ye.indexOf(m),1):_==="metaKey"&&t[_]&&ye.length===3&&(t.ctrlKey||t.shiftKey||t.altKey||(ye=ye.slice(ye.indexOf(m))))}),r in Be){Be[r]=!0;for(var s in Gt)Gt[s]===r&&(Ne[s]=!0);if(!n)return}for(var i in Be)Object.prototype.hasOwnProperty.call(Be,i)&&(Be[i]=t[nc[i]]);t.getModifierState&&!(t.altKey&&!t.ctrlKey)&&t.getModifierState("AltGraph")&&(ye.indexOf(17)===-1&&ye.push(17),ye.indexOf(18)===-1&&ye.push(18),Be[17]=!0,Be[18]=!0);var o=ti();if(n)for(var a=0;a<n.length;a++)n[a].scope===o&&(t.type==="keydown"&&n[a].keydown||t.type==="keyup"&&n[a].keyup)&&Gd(t,n[a],o,e);if(r in Re){for(var l=0;l<Re[r].length;l++)if((t.type==="keydown"&&Re[r][l].keydown||t.type==="keyup"&&Re[r][l].keyup)&&Re[r][l].key){for(var c=Re[r][l],u=c.splitKey,h=c.key.split(u),d=[],f=0;f<h.length;f++)d.push(Ri(h[f]));d.sort().join("")===ye.sort().join("")&&Gd(t,c,o,e)}}}}function SP(t){return s_.indexOf(t)>-1}function Ne(t,e,n){ye=[];var r=n_(t),s=[],i="all",o=document,a=0,l=!1,c=!0,u="+",h=!1;for(n===void 0&&typeof e=="function"&&(n=e),Object.prototype.toString.call(e)==="[object Object]"&&(e.scope&&(i=e.scope),e.element&&(o=e.element),e.keyup&&(l=e.keyup),e.keydown!==void 0&&(c=e.keydown),e.capture!==void 0&&(h=e.capture),typeof e.splitKey=="string"&&(u=e.splitKey)),typeof e=="string"&&(i=e);a<r.length;a++)t=r[a].split(u),s=[],t.length>1&&(s=t_(Gt,t)),t=t[t.length-1],t=t==="*"?"*":Ri(t),t in Re||(Re[t]=[]),Re[t].push({keyup:l,keydown:c,scope:i,mods:s,shortcut:r[a],method:n,key:r[a],splitKey:u,element:o});typeof o<"u"&&!SP(o)&&window&&(s_.push(o),ol(o,"keydown",function(d){Qd(d,o)},h),Wd||(Wd=!0,ol(window,"focus",function(){ye=[]},h)),ol(o,"keyup",function(d){Qd(d,o),CP(d)},h))}function kP(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"all";Object.keys(Re).forEach(function(n){var r=Re[n].filter(function(s){return s.scope===e&&s.shortcut===t});r.forEach(function(s){s&&s.method&&s.method()})})}var ll={getPressedKeyString:IP,setScope:i_,getScope:ti,deleteScope:RP,getPressedKeyCodes:EP,getAllKeyCodes:TP,isPressed:bP,filter:AP,trigger:kP,unbind:PP,keyMap:ei,modifier:Gt,modifierMap:nc};for(var cl in ll)Object.prototype.hasOwnProperty.call(ll,cl)&&(Ne[cl]=ll[cl]);if(typeof window<"u"){var xP=window.hotkeys;Ne.noConflict=function(t){return t&&window.hotkeys===Ne&&(window.hotkeys=xP),Ne},window.hotkeys=Ne}const DP={key:0,class:"fixed top-0 bottom-0 left-0 right-0 bg-gray-600 bg-opacity-50 z-50"},NP={class:"text-white text-2xl mx-8 my-4 break-all max-h-[10vh] overflow-auto"},OP={key:0},VP=w("hr",{class:"border-2 border-white rounded-full mx-3"},null,-1),MP={class:"text-white text-2xl mx-8 my-4 break-all max-h-[10vh] overflow-auto"},LP=w("br",null,null,-1),UP={key:0,class:"mt-8"},FP=w("img",{height:"65",width:"65",src:Lu,alt:"No"},null,-1),$P=[FP],BP=w("img",{height:"65",width:"65",src:_P,alt:"Yes"},null,-1),jP=[BP],qP={key:1},KP=w("hr",{class:"border-2 border-white rounded-full mx-3"},null,-1),HP=w("br",null,null,-1),zP={__name:"Review",props:["auth","db","timeDuration","timeMultiplier"],emits:[],setup(t,{expose:e,emit:n}){const r=t;Ne("space","review",function(O,k){O.preventDefault(),c=!1,_()}),Ne("space","yes_no",function(O,k){O.preventDefault(),E(!0)}),Ne("c","yes_no",function(O,k){O.preventDefault(),E(!1)}),Ne("space","check_type_ans",function(O,k){O.preventDefault(),m()}),Ne("enter","check_type_ans",function(O,k){O.preventDefault(),m()});const s=K(!1),i=K(""),o=K([]),a=K(0),l=K(!1);let c=!1;const u=K(""),h=K(!1),d=K(null);function f(O,k){i.value=O,o.value=k,a.value=R(0,o.value.length),s.value=!0,Ne.setScope("review"),o.value[a.value].type_answer&&y()}function _(){o.value[a.value].type_answer===!1?c===!0?c=!1:(l.value=!0,Ne.setScope("yes_no"),c=!0):h.value?h.value=!1:Ne.getScope()=="check_type_ans"&&m()}function m(){const O=o.value[a.value].back.replace(/\[.*?\]/g,"");u.value===O?(E(!0),u.value=""):(E(!1),u.value="")}function E(O){const k=new Date,ee=new Date(k.getFullYear(),k.getMonth(),k.getDate());if(O===!0)if(o.value[a.value].streak===0)o.value[a.value].streak=.5,X();else if(o.value[a.value].streak==.5){let me=new Date(ee);me.setDate(me.getDate()+1),tn(He(r.db,"users/"+r.auth.currentUser.uid+"/decks/"+i.value+"/cards/"+o.value[a.value].id),{next_review:he.fromDate(me),streak:1}),$()}else{const me=Math.pow(r.timeMultiplier,o.value[a.value].streak)*r.timeDuration,at=Math.floor(me/24);let It=new Date(ee);It.setDate(It.getDate()+at),tn(He(r.db,"users/"+r.auth.currentUser.uid+"/decks/"+i.value+"/cards/"+o.value[a.value].id),{next_review:he.fromDate(It),streak:o.value[a.value].streak+1}),$()}else tn(He(r.db,"users/"+r.auth.currentUser.uid+"/decks/"+i.value+"/cards/"+o.value[a.value].id),{next_review:he.fromDate(new Date),streak:0}),o.value[a.value].streak=0,X();o.value.length>0&&o.value[a.value].type_answer&&y()}function M(){l.value=!0,Ne.setScope("check_type_ans")}async function y(){await Bo(),d.value.focus()}function R(O,k){return Math.floor(Math.random()*(k-O))+O}function C(){s.value=!1,l.value=!1,Ne.setScope("all")}function $(){o.value.splice(a.value,1),o.value.length!==0?X():(C(),alert("You're finished with reviews for now."))}function X(){a.value=R(0,o.value.length),l.value=!1,Ne.setScope("review")}function G(O){O.code=="Enter"&&M()}return e({reviewCards:f}),(O,k)=>s.value?(ie(),ue("div",DP,[w("button",{onClick:k[0]||(k[0]=ee=>C()),class:"fixed left-1/2 -translate-x-1/2 top-[20%] bg-gray-700 p-3 rounded text-white"},"Cancel"),w("div",{onClick:k[6]||(k[6]=ee=>_()),class:"fixed left-1/2 -translate-x-1/2 top-1/3 bg-gradient-to-t from-pink-700 to-purple-800 p-10 rounded-lg shadow-xl shadow-black text-center min-w-[300px]"},[w("p",NP,_t(o.value[a.value].front),1),l.value===!0?(ie(),ue("div",OP,[VP,w("p",MP,_t(o.value[a.value].back),1),LP,o.value[a.value].type_answer===!1?(ie(),ue("div",UP,[w("button",{onClick:k[1]||(k[1]=ee=>E(!1)),class:"bg-gradient-to-br from-pink-500 to-red-900 rounded-full p-1 shadow-md shadow-black mr-10"},$P),w("button",{onClick:k[2]||(k[2]=ee=>E(!0)),class:"bg-gradient-to-br from-purple-500 to-blue-900 rounded-full p-1 shadow-md shadow-black"},jP)])):Xe("",!0)])):Xe("",!0),o.value[a.value].type_answer===!0&&l.value===!1?(ie(),ue("div",qP,[KP,Ce(w("input",{ref_key:"answer_field_ref",ref:d,"onUpdate:modelValue":k[3]||(k[3]=ee=>u.value=ee),type:"text",placeholder:"Type Answer",onKeypress:k[4]||(k[4]=ee=>G(ee)),class:"my-4 bg-gradient-to-r from-purple-500 to-pink-500 p-3 rounded-md shadow shadow-black placeholder-black text-white text-center text-2xl w-[250px]"},null,544),[[tt,u.value]]),HP,w("button",{onClick:k[5]||(k[5]=ee=>{h.value=!0,M()}),class:"bg-gradient-to-br from-purple-500 to-blue-900 rounded-md p-3 text-xl text-white shadow-md shadow-black mt-2"},"Check")])):Xe("",!0)])])):Xe("",!0)}},WP={class:"fixed top-5 left-5"},GP={key:0,class:"fixed top-0 bottom-0 left-0 right-0 bg-gray-600 bg-opacity-50 z-50"},QP={class:"fixed left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 inline-block text-center p-3 rounded-md shadow-lg shadow-black bg-yellow-300"},YP=w("p",{class:"text-lg"},"Deck Migration Tool",-1),JP=w("p",null,"This tool migrates your old decks using unix time to new decks using timestamps. This will be removed in the future.",-1),XP=w("option",{selected:"",disabled:"",value:""},"Select Deck",-1),ZP=["value"],eS=w("br",null,null,-1),tS={key:1,class:"bg-amber-400 p-3 rounded mt-3"},nS={__name:"DeckMigration",props:["auth","db"],emits:["loadDecks"],setup(t,{emit:e}){const n=t,r=K(!1),s=K([]),i=K(null),o=K("");async function a(){s.value=[],(await kr(Ct(n.db,"users/"+n.auth.currentUser.uid+"/decks"))).forEach(h=>{s.value.push({name:h.data().name,id:h.id})}),r.value=!0}function l(){r.value=!1}async function c(){console.log(i.value),o.value="Getting Old Deck";const u=await Ca(He(n.db,"users/"+n.auth.currentUser.uid+"/decks/"+i.value));o.value="Creating New Deck";const h=await Zs(Ct(n.db,"users/"+n.auth.currentUser.uid+"/decks"),{name:u.data().name+"(new)",new_cards_today:u.data().new_cards_today,last_update:he.fromDate(new Date(u.data().last_update_nct))}).catch(m=>{alert(m)});o.value="Getting Old Cards";const d=await kr(Ct(n.db,"users/"+n.auth.currentUser.uid+"/decks/"+i.value+"/cards")),f=d.size;o.value="Creating New Cards 0/"+f;let _=0;d.forEach(async m=>{_+=1,o.value="Creating New Cards"+_+"/"+f,await Zs(Ct(n.db,"users/"+n.auth.currentUser.uid+"/decks/"+h.id+"/cards/"),{front:m.data().front,back:m.data().back,streak:m.data().streak,next_review:he.fromDate(new Date(m.data().next_review)),type_answer:!!m.data().type_answer}).catch(E=>{alert(E)})}),o.value="Done",e("loadDecks")}return(u,h)=>(ie(),ue(ct,null,[w("div",WP,[w("button",{onClick:h[0]||(h[0]=d=>a()),class:"bg-yellow-400 text-black p-3 rounded"},"Migrate Decks")]),r.value?(ie(),ue("div",GP,[w("div",QP,[w("button",{onClick:h[1]||(h[1]=d=>l()),class:"bg-red-400 p-3 rounded"},"Close"),YP,JP,Ce(w("select",{"onUpdate:modelValue":h[2]||(h[2]=d=>i.value=d),class:"bg-orange-300 p-3 rounded mt-3"},[XP,(ie(!0),ue(ct,null,vc(s.value,d=>(ie(),ue("option",{value:d.id},_t(d.name),9,ZP))),256))],512),[[Ov,i.value]]),eS,i.value?(ie(),ue("button",{key:0,onClick:h[3]||(h[3]=d=>c()),class:"bg-blue-500 p-3 rounded mt-3"},"Migrate")):Xe("",!0),o.value!==""?(ie(),ue("div",tS,[w("p",null,_t(o.value),1)])):Xe("",!0)])])):Xe("",!0)],64))}},rS=w("br",null,null,-1),sS={__name:"App",setup(t){const e=K(null);let n=!1;const r=K(null),s=K(null),i=K(null),o=K(null),a=K(null),l=K(!1),c=K(1.5),u=K(24),h=K(20);Pf(()=>{const f=RT();fI(f,async()=>{n||(n=!0,e.value=f,await Bo(),e.value.currentUser!==null&&o.value.loadDecks())})});async function d(){const f=await Ca(He(pr,"users/"+e.value.currentUser.uid));c.value=f.data().time_multiplier,u.value=f.data().time_duration,h.value=f.data().new_cards}return(f,_)=>(ie(),ue(ct,null,[je(aC,{auth:e.value,onOpenSettings:_[0]||(_[0]=m=>i.value.openSettings()),onOpenSignIn:_[1]||(_[1]=m=>r.value.openMenu()),onOpenSignUp:_[2]||(_[2]=m=>s.value.openMenu()),onSignOut:_[3]||(_[3]=m=>o.value.logout())},null,8,["auth"]),rS,je(mP,{auth:e.value,db:gr(pr),"new-cards":h.value,onLoadSettings:_[4]||(_[4]=m=>d()),onReview:_[5]||(_[5]=(m,E)=>a.value.reviewCards(m,E)),ref_key:"decks_ref",ref:o},null,8,["auth","db","new-cards"]),je(HR,{auth:e.value,onLoadDecks:_[6]||(_[6]=m=>o.value.loadDecks()),ref_key:"sign_in_menu_ref",ref:r},null,8,["auth"]),je(tC,{auth:e.value,db:gr(pr),onLoadDecks:_[7]||(_[7]=m=>o.value.loadDecks()),ref_key:"sign_up_menu_ref",ref:s},null,8,["auth","db"]),je(zP,{auth:e.value,db:gr(pr),"time-duration":u.value,"time-multiplier":c.value,ref_key:"review_ref",ref:a},null,8,["auth","db","time-duration","time-multiplier"]),je(yC,{auth:e.value,db:gr(pr),onSaveSettings:_[8]||(_[8]=m=>d()),ref_key:"settings_ref",ref:i},null,8,["auth","db"]),w("button",{onClick:_[9]||(_[9]=m=>l.value=!0),class:"fixed top-5 right-5 bg-gray-500 p-2 rounded-md shadow shadow-black"},"Guide"),l.value?(ie(),ws(LR,{key:0,onClose:_[10]||(_[10]=m=>l.value=!1)})):Xe("",!0),je(nS,{auth:e.value,db:gr(pr),onLoadDecks:_[11]||(_[11]=m=>o.value.loadDecks())},null,8,["auth","db"])],64))}};var iS="firebase",oS="10.4.0";/**
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
 */Tn(iS,oS,"app");const o_=function(){return document.ontouchstart!==null?"click":"touchstart"},Vo="__vue_click_away__",a_=function(t,e,n){l_(t);let r=n.context,s=e.value,i=!1;setTimeout(function(){i=!0},0),t[Vo]=function(o){if((!t||!t.contains(o.target))&&s&&i&&typeof s=="function")return s.call(r,o)},document.addEventListener(o_(),t[Vo],!1)},l_=function(t){document.removeEventListener(o_(),t[Vo],!1),delete t[Vo]},aS=function(t,e,n){e.value!==e.oldValue&&a_(t,e,n)},lS={install:function(t){t.directive("click-away",cS)}},cS={mounted:a_,updated:aS,unmounted:l_},uS={apiKey:"AIzaSyAGYqERiL1fj0l2m1ZmlkHFd5Vq8OiMubw",authDomain:"spare-a6401.firebaseapp.com",projectId:"spare-a6401",storageBucket:"spare-a6401.appspot.com",messagingSenderId:"277807224978",appId:"1:277807224978:web:6420ae19b4ca94e41c6e4b"},hS=Xf(uS),pr=gR(hS);Lv(sS).use(lS).mount("#app");
