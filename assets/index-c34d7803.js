(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();function oc(t,e){const n=Object.create(null),r=t.split(",");for(let s=0;s<r.length;s++)n[r[s]]=!0;return e?s=>!!n[s.toLowerCase()]:s=>!!n[s]}const Ee={},Rr=[],St=()=>{},d_=()=>!1,f_=/^on[^a-z]/,$o=t=>f_.test(t),ac=t=>t.startsWith("onUpdate:"),Xe=Object.assign,lc=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},p_=Object.prototype.hasOwnProperty,le=(t,e)=>p_.call(t,e),H=Array.isArray,kr=t=>ii(t)==="[object Map]",Qr=t=>ii(t)==="[object Set]",Hu=t=>ii(t)==="[object Date]",ee=t=>typeof t=="function",Be=t=>typeof t=="string",Ss=t=>typeof t=="symbol",Ae=t=>t!==null&&typeof t=="object",Qd=t=>Ae(t)&&ee(t.then)&&ee(t.catch),Yd=Object.prototype.toString,ii=t=>Yd.call(t),g_=t=>ii(t).slice(8,-1),Jd=t=>ii(t)==="[object Object]",cc=t=>Be(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,zi=oc(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Bo=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},m_=/-(\w)/g,Gt=Bo(t=>t.replace(m_,(e,n)=>n?n.toUpperCase():"")),__=/\B([A-Z])/g,Yr=Bo(t=>t.replace(__,"-$1").toLowerCase()),jo=Bo(t=>t.charAt(0).toUpperCase()+t.slice(1)),Va=Bo(t=>t?`on${jo(t)}`:""),xs=(t,e)=>!Object.is(t,e),Gi=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},lo=(t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})},co=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let Wu;const pl=()=>Wu||(Wu=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Zn(t){if(H(t)){const e={};for(let n=0;n<t.length;n++){const r=t[n],s=Be(r)?E_(r):Zn(r);if(s)for(const i in s)e[i]=s[i]}return e}else{if(Be(t))return t;if(Ae(t))return t}}const y_=/;(?![^(]*\))/g,v_=/:([^]+)/,w_=/\/\*[^]*?\*\//g;function E_(t){const e={};return t.replace(w_,"").split(y_).forEach(n=>{if(n){const r=n.split(v_);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function uc(t){let e="";if(Be(t))e=t;else if(H(t))for(let n=0;n<t.length;n++){const r=uc(t[n]);r&&(e+=r+" ")}else if(Ae(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const I_="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",T_=oc(I_);function Xd(t){return!!t||t===""}function b_(t,e){if(t.length!==e.length)return!1;let n=!0;for(let r=0;n&&r<t.length;r++)n=oi(t[r],e[r]);return n}function oi(t,e){if(t===e)return!0;let n=Hu(t),r=Hu(e);if(n||r)return n&&r?t.getTime()===e.getTime():!1;if(n=Ss(t),r=Ss(e),n||r)return t===e;if(n=H(t),r=H(e),n||r)return n&&r?b_(t,e):!1;if(n=Ae(t),r=Ae(e),n||r){if(!n||!r)return!1;const s=Object.keys(t).length,i=Object.keys(e).length;if(s!==i)return!1;for(const o in t){const a=t.hasOwnProperty(o),l=e.hasOwnProperty(o);if(a&&!l||!a&&l||!oi(t[o],e[o]))return!1}}return String(t)===String(e)}function hc(t,e){return t.findIndex(n=>oi(n,e))}const qe=t=>Be(t)?t:t==null?"":H(t)||Ae(t)&&(t.toString===Yd||!ee(t.toString))?JSON.stringify(t,Zd,2):String(t),Zd=(t,e)=>e&&e.__v_isRef?Zd(t,e.value):kr(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[r,s])=>(n[`${r} =>`]=s,n),{})}:Qr(e)?{[`Set(${e.size})`]:[...e.values()]}:Ae(e)&&!H(e)&&!Jd(e)?String(e):e;let kt;class A_{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this.parent=kt,!e&&kt&&(this.index=(kt.scopes||(kt.scopes=[])).push(this)-1)}get active(){return this._active}run(e){if(this._active){const n=kt;try{return kt=this,e()}finally{kt=n}}}on(){kt=this}off(){kt=this.parent}stop(e){if(this._active){let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.scopes)for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0,this._active=!1}}}function R_(t,e=kt){e&&e.active&&e.effects.push(t)}function k_(){return kt}const dc=t=>{const e=new Set(t);return e.w=0,e.n=0,e},ef=t=>(t.w&Cn)>0,tf=t=>(t.n&Cn)>0,C_=({deps:t})=>{if(t.length)for(let e=0;e<t.length;e++)t[e].w|=Cn},P_=t=>{const{deps:e}=t;if(e.length){let n=0;for(let r=0;r<e.length;r++){const s=e[r];ef(s)&&!tf(s)?s.delete(t):e[n++]=s,s.w&=~Cn,s.n&=~Cn}e.length=n}},gl=new WeakMap;let ds=0,Cn=1;const ml=30;let Ct;const Gn=Symbol(""),_l=Symbol("");class fc{constructor(e,n=null,r){this.fn=e,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,R_(this,r)}run(){if(!this.active)return this.fn();let e=Ct,n=In;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=Ct,Ct=this,In=!0,Cn=1<<++ds,ds<=ml?C_(this):zu(this),this.fn()}finally{ds<=ml&&P_(this),Cn=1<<--ds,Ct=this.parent,In=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){Ct===this?this.deferStop=!0:this.active&&(zu(this),this.onStop&&this.onStop(),this.active=!1)}}function zu(t){const{deps:e}=t;if(e.length){for(let n=0;n<e.length;n++)e[n].delete(t);e.length=0}}let In=!0;const nf=[];function Jr(){nf.push(In),In=!1}function Xr(){const t=nf.pop();In=t===void 0?!0:t}function _t(t,e,n){if(In&&Ct){let r=gl.get(t);r||gl.set(t,r=new Map);let s=r.get(n);s||r.set(n,s=dc()),rf(s)}}function rf(t,e){let n=!1;ds<=ml?tf(t)||(t.n|=Cn,n=!ef(t)):n=!t.has(Ct),n&&(t.add(Ct),Ct.deps.push(t))}function sn(t,e,n,r,s,i){const o=gl.get(t);if(!o)return;let a=[];if(e==="clear")a=[...o.values()];else if(n==="length"&&H(t)){const l=Number(r);o.forEach((c,u)=>{(u==="length"||u>=l)&&a.push(c)})}else switch(n!==void 0&&a.push(o.get(n)),e){case"add":H(t)?cc(n)&&a.push(o.get("length")):(a.push(o.get(Gn)),kr(t)&&a.push(o.get(_l)));break;case"delete":H(t)||(a.push(o.get(Gn)),kr(t)&&a.push(o.get(_l)));break;case"set":kr(t)&&a.push(o.get(Gn));break}if(a.length===1)a[0]&&yl(a[0]);else{const l=[];for(const c of a)c&&l.push(...c);yl(dc(l))}}function yl(t,e){const n=H(t)?t:[...t];for(const r of n)r.computed&&Gu(r);for(const r of n)r.computed||Gu(r)}function Gu(t,e){(t!==Ct||t.allowRecurse)&&(t.scheduler?t.scheduler():t.run())}const S_=oc("__proto__,__v_isRef,__isVue"),sf=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(Ss)),x_=pc(),D_=pc(!1,!0),N_=pc(!0),Qu=O_();function O_(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const r=he(this);for(let i=0,o=this.length;i<o;i++)_t(r,"get",i+"");const s=r[e](...n);return s===-1||s===!1?r[e](...n.map(he)):s}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){Jr();const r=he(this)[e].apply(this,n);return Xr(),r}}),t}function V_(t){const e=he(this);return _t(e,"has",t),e.hasOwnProperty(t)}function pc(t=!1,e=!1){return function(r,s,i){if(s==="__v_isReactive")return!t;if(s==="__v_isReadonly")return t;if(s==="__v_isShallow")return e;if(s==="__v_raw"&&i===(t?e?J_:uf:e?cf:lf).get(r))return r;const o=H(r);if(!t){if(o&&le(Qu,s))return Reflect.get(Qu,s,i);if(s==="hasOwnProperty")return V_}const a=Reflect.get(r,s,i);return(Ss(s)?sf.has(s):S_(s))||(t||_t(r,"get",s),e)?a:ot(a)?o&&cc(s)?a:a.value:Ae(a)?t?hf(a):_c(a):a}}const M_=of(),L_=of(!0);function of(t=!1){return function(n,r,s,i){let o=n[r];if(Vr(o)&&ot(o)&&!ot(s))return!1;if(!t&&(!uo(s)&&!Vr(s)&&(o=he(o),s=he(s)),!H(n)&&ot(o)&&!ot(s)))return o.value=s,!0;const a=H(n)&&cc(r)?Number(r)<n.length:le(n,r),l=Reflect.set(n,r,s,i);return n===he(i)&&(a?xs(s,o)&&sn(n,"set",r,s):sn(n,"add",r,s)),l}}function U_(t,e){const n=le(t,e);t[e];const r=Reflect.deleteProperty(t,e);return r&&n&&sn(t,"delete",e,void 0),r}function F_(t,e){const n=Reflect.has(t,e);return(!Ss(e)||!sf.has(e))&&_t(t,"has",e),n}function $_(t){return _t(t,"iterate",H(t)?"length":Gn),Reflect.ownKeys(t)}const af={get:x_,set:M_,deleteProperty:U_,has:F_,ownKeys:$_},B_={get:N_,set(t,e){return!0},deleteProperty(t,e){return!0}},j_=Xe({},af,{get:D_,set:L_}),gc=t=>t,qo=t=>Reflect.getPrototypeOf(t);function xi(t,e,n=!1,r=!1){t=t.__v_raw;const s=he(t),i=he(e);n||(e!==i&&_t(s,"get",e),_t(s,"get",i));const{has:o}=qo(s),a=r?gc:n?vc:Ds;if(o.call(s,e))return a(t.get(e));if(o.call(s,i))return a(t.get(i));t!==s&&t.get(e)}function Di(t,e=!1){const n=this.__v_raw,r=he(n),s=he(t);return e||(t!==s&&_t(r,"has",t),_t(r,"has",s)),t===s?n.has(t):n.has(t)||n.has(s)}function Ni(t,e=!1){return t=t.__v_raw,!e&&_t(he(t),"iterate",Gn),Reflect.get(t,"size",t)}function Yu(t){t=he(t);const e=he(this);return qo(e).has.call(e,t)||(e.add(t),sn(e,"add",t,t)),this}function Ju(t,e){e=he(e);const n=he(this),{has:r,get:s}=qo(n);let i=r.call(n,t);i||(t=he(t),i=r.call(n,t));const o=s.call(n,t);return n.set(t,e),i?xs(e,o)&&sn(n,"set",t,e):sn(n,"add",t,e),this}function Xu(t){const e=he(this),{has:n,get:r}=qo(e);let s=n.call(e,t);s||(t=he(t),s=n.call(e,t)),r&&r.call(e,t);const i=e.delete(t);return s&&sn(e,"delete",t,void 0),i}function Zu(){const t=he(this),e=t.size!==0,n=t.clear();return e&&sn(t,"clear",void 0,void 0),n}function Oi(t,e){return function(r,s){const i=this,o=i.__v_raw,a=he(o),l=e?gc:t?vc:Ds;return!t&&_t(a,"iterate",Gn),o.forEach((c,u)=>r.call(s,l(c),l(u),i))}}function Vi(t,e,n){return function(...r){const s=this.__v_raw,i=he(s),o=kr(i),a=t==="entries"||t===Symbol.iterator&&o,l=t==="keys"&&o,c=s[t](...r),u=n?gc:e?vc:Ds;return!e&&_t(i,"iterate",l?_l:Gn),{next(){const{value:h,done:d}=c.next();return d?{value:h,done:d}:{value:a?[u(h[0]),u(h[1])]:u(h),done:d}},[Symbol.iterator](){return this}}}}function fn(t){return function(...e){return t==="delete"?!1:this}}function q_(){const t={get(i){return xi(this,i)},get size(){return Ni(this)},has:Di,add:Yu,set:Ju,delete:Xu,clear:Zu,forEach:Oi(!1,!1)},e={get(i){return xi(this,i,!1,!0)},get size(){return Ni(this)},has:Di,add:Yu,set:Ju,delete:Xu,clear:Zu,forEach:Oi(!1,!0)},n={get(i){return xi(this,i,!0)},get size(){return Ni(this,!0)},has(i){return Di.call(this,i,!0)},add:fn("add"),set:fn("set"),delete:fn("delete"),clear:fn("clear"),forEach:Oi(!0,!1)},r={get(i){return xi(this,i,!0,!0)},get size(){return Ni(this,!0)},has(i){return Di.call(this,i,!0)},add:fn("add"),set:fn("set"),delete:fn("delete"),clear:fn("clear"),forEach:Oi(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{t[i]=Vi(i,!1,!1),n[i]=Vi(i,!0,!1),e[i]=Vi(i,!1,!0),r[i]=Vi(i,!0,!0)}),[t,n,e,r]}const[K_,H_,W_,z_]=q_();function mc(t,e){const n=e?t?z_:W_:t?H_:K_;return(r,s,i)=>s==="__v_isReactive"?!t:s==="__v_isReadonly"?t:s==="__v_raw"?r:Reflect.get(le(n,s)&&s in r?n:r,s,i)}const G_={get:mc(!1,!1)},Q_={get:mc(!1,!0)},Y_={get:mc(!0,!1)},lf=new WeakMap,cf=new WeakMap,uf=new WeakMap,J_=new WeakMap;function X_(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Z_(t){return t.__v_skip||!Object.isExtensible(t)?0:X_(g_(t))}function _c(t){return Vr(t)?t:yc(t,!1,af,G_,lf)}function ey(t){return yc(t,!1,j_,Q_,cf)}function hf(t){return yc(t,!0,B_,Y_,uf)}function yc(t,e,n,r,s){if(!Ae(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=s.get(t);if(i)return i;const o=Z_(t);if(o===0)return t;const a=new Proxy(t,o===2?r:n);return s.set(t,a),a}function Cr(t){return Vr(t)?Cr(t.__v_raw):!!(t&&t.__v_isReactive)}function Vr(t){return!!(t&&t.__v_isReadonly)}function uo(t){return!!(t&&t.__v_isShallow)}function df(t){return Cr(t)||Vr(t)}function he(t){const e=t&&t.__v_raw;return e?he(e):t}function ff(t){return lo(t,"__v_skip",!0),t}const Ds=t=>Ae(t)?_c(t):t,vc=t=>Ae(t)?hf(t):t;function pf(t){In&&Ct&&(t=he(t),rf(t.dep||(t.dep=dc())))}function gf(t,e){t=he(t);const n=t.dep;n&&yl(n)}function ot(t){return!!(t&&t.__v_isRef===!0)}function M(t){return ty(t,!1)}function ty(t,e){return ot(t)?t:new ny(t,e)}class ny{constructor(e,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:he(e),this._value=n?e:Ds(e)}get value(){return pf(this),this._value}set value(e){const n=this.__v_isShallow||uo(e)||Vr(e);e=n?e:he(e),xs(e,this._rawValue)&&(this._rawValue=e,this._value=n?e:Ds(e),gf(this))}}function vr(t){return ot(t)?t.value:t}const ry={get:(t,e,n)=>vr(Reflect.get(t,e,n)),set:(t,e,n,r)=>{const s=t[e];return ot(s)&&!ot(n)?(s.value=n,!0):Reflect.set(t,e,n,r)}};function mf(t){return Cr(t)?t:new Proxy(t,ry)}class sy{constructor(e,n,r,s){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this._dirty=!0,this.effect=new fc(e,()=>{this._dirty||(this._dirty=!0,gf(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!s,this.__v_isReadonly=r}get value(){const e=he(this);return pf(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}function iy(t,e,n=!1){let r,s;const i=ee(t);return i?(r=t,s=St):(r=t.get,s=t.set),new sy(r,s,i||!s,n)}function Tn(t,e,n,r){let s;try{s=r?t(...r):t()}catch(i){Ko(i,e,n)}return s}function xt(t,e,n,r){if(ee(t)){const i=Tn(t,e,n,r);return i&&Qd(i)&&i.catch(o=>{Ko(o,e,n)}),i}const s=[];for(let i=0;i<t.length;i++)s.push(xt(t[i],e,n,r));return s}function Ko(t,e,n,r=!0){const s=e?e.vnode:null;if(e){let i=e.parent;const o=e.proxy,a=n;for(;i;){const c=i.ec;if(c){for(let u=0;u<c.length;u++)if(c[u](t,o,a)===!1)return}i=i.parent}const l=e.appContext.config.errorHandler;if(l){Tn(l,null,10,[t,o,a]);return}}oy(t,n,s,r)}function oy(t,e,n,r=!0){console.error(t)}let Ns=!1,vl=!1;const st=[];let $t=0;const Pr=[];let Zt=null,Bn=0;const _f=Promise.resolve();let wc=null;function Ho(t){const e=wc||_f;return t?e.then(this?t.bind(this):t):e}function ay(t){let e=$t+1,n=st.length;for(;e<n;){const r=e+n>>>1;Os(st[r])<t?e=r+1:n=r}return e}function Ec(t){(!st.length||!st.includes(t,Ns&&t.allowRecurse?$t+1:$t))&&(t.id==null?st.push(t):st.splice(ay(t.id),0,t),yf())}function yf(){!Ns&&!vl&&(vl=!0,wc=_f.then(wf))}function ly(t){const e=st.indexOf(t);e>$t&&st.splice(e,1)}function cy(t){H(t)?Pr.push(...t):(!Zt||!Zt.includes(t,t.allowRecurse?Bn+1:Bn))&&Pr.push(t),yf()}function eh(t,e=Ns?$t+1:0){for(;e<st.length;e++){const n=st[e];n&&n.pre&&(st.splice(e,1),e--,n())}}function vf(t){if(Pr.length){const e=[...new Set(Pr)];if(Pr.length=0,Zt){Zt.push(...e);return}for(Zt=e,Zt.sort((n,r)=>Os(n)-Os(r)),Bn=0;Bn<Zt.length;Bn++)Zt[Bn]();Zt=null,Bn=0}}const Os=t=>t.id==null?1/0:t.id,uy=(t,e)=>{const n=Os(t)-Os(e);if(n===0){if(t.pre&&!e.pre)return-1;if(e.pre&&!t.pre)return 1}return n};function wf(t){vl=!1,Ns=!0,st.sort(uy);const e=St;try{for($t=0;$t<st.length;$t++){const n=st[$t];n&&n.active!==!1&&Tn(n,null,14)}}finally{$t=0,st.length=0,vf(),Ns=!1,wc=null,(st.length||Pr.length)&&wf()}}function hy(t,e,...n){if(t.isUnmounted)return;const r=t.vnode.props||Ee;let s=n;const i=e.startsWith("update:"),o=i&&e.slice(7);if(o&&o in r){const u=`${o==="modelValue"?"model":o}Modifiers`,{number:h,trim:d}=r[u]||Ee;d&&(s=n.map(f=>Be(f)?f.trim():f)),h&&(s=n.map(co))}let a,l=r[a=Va(e)]||r[a=Va(Gt(e))];!l&&i&&(l=r[a=Va(Yr(e))]),l&&xt(l,t,6,s);const c=r[a+"Once"];if(c){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,xt(c,t,6,s)}}function Ef(t,e,n=!1){const r=e.emitsCache,s=r.get(t);if(s!==void 0)return s;const i=t.emits;let o={},a=!1;if(!ee(t)){const l=c=>{const u=Ef(c,e,!0);u&&(a=!0,Xe(o,u))};!n&&e.mixins.length&&e.mixins.forEach(l),t.extends&&l(t.extends),t.mixins&&t.mixins.forEach(l)}return!i&&!a?(Ae(t)&&r.set(t,null),null):(H(i)?i.forEach(l=>o[l]=null):Xe(o,i),Ae(t)&&r.set(t,o),o)}function Wo(t,e){return!t||!$o(e)?!1:(e=e.slice(2).replace(/Once$/,""),le(t,e[0].toLowerCase()+e.slice(1))||le(t,Yr(e))||le(t,e))}let Tt=null,If=null;function ho(t){const e=Tt;return Tt=t,If=t&&t.type.__scopeId||null,e}function dy(t,e=Tt,n){if(!e||t._n)return t;const r=(...s)=>{r._d&&hh(-1);const i=ho(e);let o;try{o=t(...s)}finally{ho(i),r._d&&hh(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function Ma(t){const{type:e,vnode:n,proxy:r,withProxy:s,props:i,propsOptions:[o],slots:a,attrs:l,emit:c,render:u,renderCache:h,data:d,setupState:f,ctx:w,inheritAttrs:y}=t;let k,U;const O=ho(t);try{if(n.shapeFlag&4){const F=s||r;k=Ft(u.call(F,F,h,i,f,d,w)),U=l}else{const F=e;k=Ft(F.length>1?F(i,{attrs:l,slots:a,emit:c}):F(i,null)),U=e.props?l:fy(l)}}catch(F){Is.length=0,Ko(F,t,1),k=Ge(er)}let B=k;if(U&&y!==!1){const F=Object.keys(U),{shapeFlag:Re}=B;F.length&&Re&7&&(o&&F.some(ac)&&(U=py(U,o)),B=Mr(B,U))}return n.dirs&&(B=Mr(B),B.dirs=B.dirs?B.dirs.concat(n.dirs):n.dirs),n.transition&&(B.transition=n.transition),k=B,ho(O),k}const fy=t=>{let e;for(const n in t)(n==="class"||n==="style"||$o(n))&&((e||(e={}))[n]=t[n]);return e},py=(t,e)=>{const n={};for(const r in t)(!ac(r)||!(r.slice(9)in e))&&(n[r]=t[r]);return n};function gy(t,e,n){const{props:r,children:s,component:i}=t,{props:o,children:a,patchFlag:l}=e,c=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return r?th(r,o,c):!!o;if(l&8){const u=e.dynamicProps;for(let h=0;h<u.length;h++){const d=u[h];if(o[d]!==r[d]&&!Wo(c,d))return!0}}}else return(s||a)&&(!a||!a.$stable)?!0:r===o?!1:r?o?th(r,o,c):!0:!!o;return!1}function th(t,e,n){const r=Object.keys(e);if(r.length!==Object.keys(t).length)return!0;for(let s=0;s<r.length;s++){const i=r[s];if(e[i]!==t[i]&&!Wo(n,i))return!0}return!1}function my({vnode:t,parent:e},n){for(;e&&e.subTree===t;)(t=e.vnode).el=n,e=e.parent}const _y=t=>t.__isSuspense;function yy(t,e){e&&e.pendingBranch?H(t)?e.effects.push(...t):e.effects.push(t):cy(t)}const Mi={};function Qi(t,e,n){return Tf(t,e,n)}function Tf(t,e,{immediate:n,deep:r,flush:s,onTrack:i,onTrigger:o}=Ee){var a;const l=k_()===((a=Ye)==null?void 0:a.scope)?Ye:null;let c,u=!1,h=!1;if(ot(t)?(c=()=>t.value,u=uo(t)):Cr(t)?(c=()=>t,r=!0):H(t)?(h=!0,u=t.some(F=>Cr(F)||uo(F)),c=()=>t.map(F=>{if(ot(F))return F.value;if(Cr(F))return qn(F);if(ee(F))return Tn(F,l,2)})):ee(t)?e?c=()=>Tn(t,l,2):c=()=>{if(!(l&&l.isUnmounted))return d&&d(),xt(t,l,3,[f])}:c=St,e&&r){const F=c;c=()=>qn(F())}let d,f=F=>{d=O.onStop=()=>{Tn(F,l,4)}},w;if(Ms)if(f=St,e?n&&xt(e,l,3,[c(),h?[]:void 0,f]):c(),s==="sync"){const F=mv();w=F.__watcherHandles||(F.__watcherHandles=[])}else return St;let y=h?new Array(t.length).fill(Mi):Mi;const k=()=>{if(O.active)if(e){const F=O.run();(r||u||(h?F.some((Re,ke)=>xs(Re,y[ke])):xs(F,y)))&&(d&&d(),xt(e,l,3,[F,y===Mi?void 0:h&&y[0]===Mi?[]:y,f]),y=F)}else O.run()};k.allowRecurse=!!e;let U;s==="sync"?U=k:s==="post"?U=()=>gt(k,l&&l.suspense):(k.pre=!0,l&&(k.id=l.uid),U=()=>Ec(k));const O=new fc(c,U);e?n?k():y=O.run():s==="post"?gt(O.run.bind(O),l&&l.suspense):O.run();const B=()=>{O.stop(),l&&l.scope&&lc(l.scope.effects,O)};return w&&w.push(B),B}function vy(t,e,n){const r=this.proxy,s=Be(t)?t.includes(".")?bf(r,t):()=>r[t]:t.bind(r,r);let i;ee(e)?i=e:(i=e.handler,n=e);const o=Ye;Lr(this);const a=Tf(s,i.bind(r),n);return o?Lr(o):Qn(),a}function bf(t,e){const n=e.split(".");return()=>{let r=t;for(let s=0;s<n.length&&r;s++)r=r[n[s]];return r}}function qn(t,e){if(!Ae(t)||t.__v_skip||(e=e||new Set,e.has(t)))return t;if(e.add(t),ot(t))qn(t.value,e);else if(H(t))for(let n=0;n<t.length;n++)qn(t[n],e);else if(Qr(t)||kr(t))t.forEach(n=>{qn(n,e)});else if(Jd(t))for(const n in t)qn(t[n],e);return t}function fe(t,e){const n=Tt;if(n===null)return t;const r=Jo(n)||n.proxy,s=t.dirs||(t.dirs=[]);for(let i=0;i<e.length;i++){let[o,a,l,c=Ee]=e[i];o&&(ee(o)&&(o={mounted:o,updated:o}),o.deep&&qn(a),s.push({dir:o,instance:r,value:a,oldValue:void 0,arg:l,modifiers:c}))}return t}function Un(t,e,n,r){const s=t.dirs,i=e&&e.dirs;for(let o=0;o<s.length;o++){const a=s[o];i&&(a.oldValue=i[o].value);let l=a.dir[r];l&&(Jr(),xt(l,n,8,[t.el,a,t,e]),Xr())}}const Yi=t=>!!t.type.__asyncLoader,Af=t=>t.type.__isKeepAlive;function wy(t,e){Rf(t,"a",e)}function Ey(t,e){Rf(t,"da",e)}function Rf(t,e,n=Ye){const r=t.__wdc||(t.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return t()});if(zo(e,r,n),n){let s=n.parent;for(;s&&s.parent;)Af(s.parent.vnode)&&Iy(r,e,n,s),s=s.parent}}function Iy(t,e,n,r){const s=zo(e,t,r,!0);Cf(()=>{lc(r[e],s)},n)}function zo(t,e,n=Ye,r=!1){if(n){const s=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...o)=>{if(n.isUnmounted)return;Jr(),Lr(n);const a=xt(e,n,t,o);return Qn(),Xr(),a});return r?s.unshift(i):s.push(i),i}}const un=t=>(e,n=Ye)=>(!Ms||t==="sp")&&zo(t,(...r)=>e(...r),n),Ty=un("bm"),kf=un("m"),by=un("bu"),Ay=un("u"),Ry=un("bum"),Cf=un("um"),ky=un("sp"),Cy=un("rtg"),Py=un("rtc");function Sy(t,e=Ye){zo("ec",t,e)}const xy="components",Dy="directives",Ny=Symbol.for("v-ndc");function Pf(t){return Oy(Dy,t)}function Oy(t,e,n=!0,r=!1){const s=Tt||Ye;if(s){const i=s.type;if(t===xy){const a=dv(i,!1);if(a&&(a===e||a===Gt(e)||a===jo(Gt(e))))return i}const o=nh(s[t]||i[t],e)||nh(s.appContext[t],e);return!o&&r?i:o}}function nh(t,e){return t&&(t[e]||t[Gt(e)]||t[jo(Gt(e))])}function Go(t,e,n,r){let s;const i=n&&n[r];if(H(t)||Be(t)){s=new Array(t.length);for(let o=0,a=t.length;o<a;o++)s[o]=e(t[o],o,void 0,i&&i[o])}else if(typeof t=="number"){s=new Array(t);for(let o=0;o<t;o++)s[o]=e(o+1,o,void 0,i&&i[o])}else if(Ae(t))if(t[Symbol.iterator])s=Array.from(t,(o,a)=>e(o,a,void 0,i&&i[a]));else{const o=Object.keys(t);s=new Array(o.length);for(let a=0,l=o.length;a<l;a++){const c=o[a];s[a]=e(t[c],c,a,i&&i[a])}}else s=[];return n&&(n[r]=s),s}const wl=t=>t?$f(t)?Jo(t)||t.proxy:wl(t.parent):null,Es=Xe(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>wl(t.parent),$root:t=>wl(t.root),$emit:t=>t.emit,$options:t=>Ic(t),$forceUpdate:t=>t.f||(t.f=()=>Ec(t.update)),$nextTick:t=>t.n||(t.n=Ho.bind(t.proxy)),$watch:t=>vy.bind(t)}),La=(t,e)=>t!==Ee&&!t.__isScriptSetup&&le(t,e),Vy={get({_:t},e){const{ctx:n,setupState:r,data:s,props:i,accessCache:o,type:a,appContext:l}=t;let c;if(e[0]!=="$"){const f=o[e];if(f!==void 0)switch(f){case 1:return r[e];case 2:return s[e];case 4:return n[e];case 3:return i[e]}else{if(La(r,e))return o[e]=1,r[e];if(s!==Ee&&le(s,e))return o[e]=2,s[e];if((c=t.propsOptions[0])&&le(c,e))return o[e]=3,i[e];if(n!==Ee&&le(n,e))return o[e]=4,n[e];El&&(o[e]=0)}}const u=Es[e];let h,d;if(u)return e==="$attrs"&&_t(t,"get",e),u(t);if((h=a.__cssModules)&&(h=h[e]))return h;if(n!==Ee&&le(n,e))return o[e]=4,n[e];if(d=l.config.globalProperties,le(d,e))return d[e]},set({_:t},e,n){const{data:r,setupState:s,ctx:i}=t;return La(s,e)?(s[e]=n,!0):r!==Ee&&le(r,e)?(r[e]=n,!0):le(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:r,appContext:s,propsOptions:i}},o){let a;return!!n[o]||t!==Ee&&le(t,o)||La(e,o)||(a=i[0])&&le(a,o)||le(r,o)||le(Es,o)||le(s.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:le(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function rh(t){return H(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let El=!0;function My(t){const e=Ic(t),n=t.proxy,r=t.ctx;El=!1,e.beforeCreate&&sh(e.beforeCreate,t,"bc");const{data:s,computed:i,methods:o,watch:a,provide:l,inject:c,created:u,beforeMount:h,mounted:d,beforeUpdate:f,updated:w,activated:y,deactivated:k,beforeDestroy:U,beforeUnmount:O,destroyed:B,unmounted:F,render:Re,renderTracked:ke,renderTriggered:Ue,errorCaptured:C,serverPrefetch:_,expose:b,inheritAttrs:te,components:de,directives:we,filters:Ze}=e;if(c&&Ly(c,r,null),o)for(const ce in o){const me=o[ce];ee(me)&&(r[ce]=me.bind(n))}if(s){const ce=s.call(n,n);Ae(ce)&&(t.data=_c(ce))}if(El=!0,i)for(const ce in i){const me=i[ce],Jt=ee(me)?me.bind(n,n):ee(me.get)?me.get.bind(n,n):St,fr=!ee(me)&&ee(me.set)?me.set.bind(n):St,Ln=pv({get:Jt,set:fr});Object.defineProperty(r,ce,{enumerable:!0,configurable:!0,get:()=>Ln.value,set:Mt=>Ln.value=Mt})}if(a)for(const ce in a)Sf(a[ce],r,n,ce);if(l){const ce=ee(l)?l.call(n):l;Reflect.ownKeys(ce).forEach(me=>{qy(me,ce[me])})}u&&sh(u,t,"c");function z(ce,me){H(me)?me.forEach(Jt=>ce(Jt.bind(n))):me&&ce(me.bind(n))}if(z(Ty,h),z(kf,d),z(by,f),z(Ay,w),z(wy,y),z(Ey,k),z(Sy,C),z(Py,ke),z(Cy,Ue),z(Ry,O),z(Cf,F),z(ky,_),H(b))if(b.length){const ce=t.exposed||(t.exposed={});b.forEach(me=>{Object.defineProperty(ce,me,{get:()=>n[me],set:Jt=>n[me]=Jt})})}else t.exposed||(t.exposed={});Re&&t.render===St&&(t.render=Re),te!=null&&(t.inheritAttrs=te),de&&(t.components=de),we&&(t.directives=we)}function Ly(t,e,n=St){H(t)&&(t=Il(t));for(const r in t){const s=t[r];let i;Ae(s)?"default"in s?i=Ji(s.from||r,s.default,!0):i=Ji(s.from||r):i=Ji(s),ot(i)?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>i.value,set:o=>i.value=o}):e[r]=i}}function sh(t,e,n){xt(H(t)?t.map(r=>r.bind(e.proxy)):t.bind(e.proxy),e,n)}function Sf(t,e,n,r){const s=r.includes(".")?bf(n,r):()=>n[r];if(Be(t)){const i=e[t];ee(i)&&Qi(s,i)}else if(ee(t))Qi(s,t.bind(n));else if(Ae(t))if(H(t))t.forEach(i=>Sf(i,e,n,r));else{const i=ee(t.handler)?t.handler.bind(n):e[t.handler];ee(i)&&Qi(s,i,t)}}function Ic(t){const e=t.type,{mixins:n,extends:r}=e,{mixins:s,optionsCache:i,config:{optionMergeStrategies:o}}=t.appContext,a=i.get(e);let l;return a?l=a:!s.length&&!n&&!r?l=e:(l={},s.length&&s.forEach(c=>fo(l,c,o,!0)),fo(l,e,o)),Ae(e)&&i.set(e,l),l}function fo(t,e,n,r=!1){const{mixins:s,extends:i}=e;i&&fo(t,i,n,!0),s&&s.forEach(o=>fo(t,o,n,!0));for(const o in e)if(!(r&&o==="expose")){const a=Uy[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const Uy={data:ih,props:oh,emits:oh,methods:fs,computed:fs,beforeCreate:dt,created:dt,beforeMount:dt,mounted:dt,beforeUpdate:dt,updated:dt,beforeDestroy:dt,beforeUnmount:dt,destroyed:dt,unmounted:dt,activated:dt,deactivated:dt,errorCaptured:dt,serverPrefetch:dt,components:fs,directives:fs,watch:$y,provide:ih,inject:Fy};function ih(t,e){return e?t?function(){return Xe(ee(t)?t.call(this,this):t,ee(e)?e.call(this,this):e)}:e:t}function Fy(t,e){return fs(Il(t),Il(e))}function Il(t){if(H(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function dt(t,e){return t?[...new Set([].concat(t,e))]:e}function fs(t,e){return t?Xe(Object.create(null),t,e):e}function oh(t,e){return t?H(t)&&H(e)?[...new Set([...t,...e])]:Xe(Object.create(null),rh(t),rh(e??{})):e}function $y(t,e){if(!t)return e;if(!e)return t;const n=Xe(Object.create(null),t);for(const r in e)n[r]=dt(t[r],e[r]);return n}function xf(){return{app:null,config:{isNativeTag:d_,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let By=0;function jy(t,e){return function(r,s=null){ee(r)||(r=Xe({},r)),s!=null&&!Ae(s)&&(s=null);const i=xf(),o=new Set;let a=!1;const l=i.app={_uid:By++,_component:r,_props:s,_container:null,_context:i,_instance:null,version:_v,get config(){return i.config},set config(c){},use(c,...u){return o.has(c)||(c&&ee(c.install)?(o.add(c),c.install(l,...u)):ee(c)&&(o.add(c),c(l,...u))),l},mixin(c){return i.mixins.includes(c)||i.mixins.push(c),l},component(c,u){return u?(i.components[c]=u,l):i.components[c]},directive(c,u){return u?(i.directives[c]=u,l):i.directives[c]},mount(c,u,h){if(!a){const d=Ge(r,s);return d.appContext=i,u&&e?e(d,c):t(d,c,h),a=!0,l._container=c,c.__vue_app__=l,Jo(d.component)||d.component.proxy}},unmount(){a&&(t(null,l._container),delete l._container.__vue_app__)},provide(c,u){return i.provides[c]=u,l},runWithContext(c){po=l;try{return c()}finally{po=null}}};return l}}let po=null;function qy(t,e){if(Ye){let n=Ye.provides;const r=Ye.parent&&Ye.parent.provides;r===n&&(n=Ye.provides=Object.create(r)),n[t]=e}}function Ji(t,e,n=!1){const r=Ye||Tt;if(r||po){const s=r?r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:po._context.provides;if(s&&t in s)return s[t];if(arguments.length>1)return n&&ee(e)?e.call(r&&r.proxy):e}}function Ky(t,e,n,r=!1){const s={},i={};lo(i,Yo,1),t.propsDefaults=Object.create(null),Df(t,e,s,i);for(const o in t.propsOptions[0])o in s||(s[o]=void 0);n?t.props=r?s:ey(s):t.type.props?t.props=s:t.props=i,t.attrs=i}function Hy(t,e,n,r){const{props:s,attrs:i,vnode:{patchFlag:o}}=t,a=he(s),[l]=t.propsOptions;let c=!1;if((r||o>0)&&!(o&16)){if(o&8){const u=t.vnode.dynamicProps;for(let h=0;h<u.length;h++){let d=u[h];if(Wo(t.emitsOptions,d))continue;const f=e[d];if(l)if(le(i,d))f!==i[d]&&(i[d]=f,c=!0);else{const w=Gt(d);s[w]=Tl(l,a,w,f,t,!1)}else f!==i[d]&&(i[d]=f,c=!0)}}}else{Df(t,e,s,i)&&(c=!0);let u;for(const h in a)(!e||!le(e,h)&&((u=Yr(h))===h||!le(e,u)))&&(l?n&&(n[h]!==void 0||n[u]!==void 0)&&(s[h]=Tl(l,a,h,void 0,t,!0)):delete s[h]);if(i!==a)for(const h in i)(!e||!le(e,h))&&(delete i[h],c=!0)}c&&sn(t,"set","$attrs")}function Df(t,e,n,r){const[s,i]=t.propsOptions;let o=!1,a;if(e)for(let l in e){if(zi(l))continue;const c=e[l];let u;s&&le(s,u=Gt(l))?!i||!i.includes(u)?n[u]=c:(a||(a={}))[u]=c:Wo(t.emitsOptions,l)||(!(l in r)||c!==r[l])&&(r[l]=c,o=!0)}if(i){const l=he(n),c=a||Ee;for(let u=0;u<i.length;u++){const h=i[u];n[h]=Tl(s,l,h,c[h],t,!le(c,h))}}return o}function Tl(t,e,n,r,s,i){const o=t[n];if(o!=null){const a=le(o,"default");if(a&&r===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&ee(l)){const{propsDefaults:c}=s;n in c?r=c[n]:(Lr(s),r=c[n]=l.call(null,e),Qn())}else r=l}o[0]&&(i&&!a?r=!1:o[1]&&(r===""||r===Yr(n))&&(r=!0))}return r}function Nf(t,e,n=!1){const r=e.propsCache,s=r.get(t);if(s)return s;const i=t.props,o={},a=[];let l=!1;if(!ee(t)){const u=h=>{l=!0;const[d,f]=Nf(h,e,!0);Xe(o,d),f&&a.push(...f)};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!i&&!l)return Ae(t)&&r.set(t,Rr),Rr;if(H(i))for(let u=0;u<i.length;u++){const h=Gt(i[u]);ah(h)&&(o[h]=Ee)}else if(i)for(const u in i){const h=Gt(u);if(ah(h)){const d=i[u],f=o[h]=H(d)||ee(d)?{type:d}:Xe({},d);if(f){const w=uh(Boolean,f.type),y=uh(String,f.type);f[0]=w>-1,f[1]=y<0||w<y,(w>-1||le(f,"default"))&&a.push(h)}}}const c=[o,a];return Ae(t)&&r.set(t,c),c}function ah(t){return t[0]!=="$"}function lh(t){const e=t&&t.toString().match(/^\s*(function|class) (\w+)/);return e?e[2]:t===null?"null":""}function ch(t,e){return lh(t)===lh(e)}function uh(t,e){return H(e)?e.findIndex(n=>ch(n,t)):ee(e)&&ch(e,t)?0:-1}const Of=t=>t[0]==="_"||t==="$stable",Tc=t=>H(t)?t.map(Ft):[Ft(t)],Wy=(t,e,n)=>{if(e._n)return e;const r=dy((...s)=>Tc(e(...s)),n);return r._c=!1,r},Vf=(t,e,n)=>{const r=t._ctx;for(const s in t){if(Of(s))continue;const i=t[s];if(ee(i))e[s]=Wy(s,i,r);else if(i!=null){const o=Tc(i);e[s]=()=>o}}},Mf=(t,e)=>{const n=Tc(e);t.slots.default=()=>n},zy=(t,e)=>{if(t.vnode.shapeFlag&32){const n=e._;n?(t.slots=he(e),lo(e,"_",n)):Vf(e,t.slots={})}else t.slots={},e&&Mf(t,e);lo(t.slots,Yo,1)},Gy=(t,e,n)=>{const{vnode:r,slots:s}=t;let i=!0,o=Ee;if(r.shapeFlag&32){const a=e._;a?n&&a===1?i=!1:(Xe(s,e),!n&&a===1&&delete s._):(i=!e.$stable,Vf(e,s)),o=e}else e&&(Mf(t,e),o={default:1});if(i)for(const a in s)!Of(a)&&!(a in o)&&delete s[a]};function bl(t,e,n,r,s=!1){if(H(t)){t.forEach((d,f)=>bl(d,e&&(H(e)?e[f]:e),n,r,s));return}if(Yi(r)&&!s)return;const i=r.shapeFlag&4?Jo(r.component)||r.component.proxy:r.el,o=s?null:i,{i:a,r:l}=t,c=e&&e.r,u=a.refs===Ee?a.refs={}:a.refs,h=a.setupState;if(c!=null&&c!==l&&(Be(c)?(u[c]=null,le(h,c)&&(h[c]=null)):ot(c)&&(c.value=null)),ee(l))Tn(l,a,12,[o,u]);else{const d=Be(l),f=ot(l);if(d||f){const w=()=>{if(t.f){const y=d?le(h,l)?h[l]:u[l]:l.value;s?H(y)&&lc(y,i):H(y)?y.includes(i)||y.push(i):d?(u[l]=[i],le(h,l)&&(h[l]=u[l])):(l.value=[i],t.k&&(u[t.k]=l.value))}else d?(u[l]=o,le(h,l)&&(h[l]=o)):f&&(l.value=o,t.k&&(u[t.k]=o))};o?(w.id=-1,gt(w,n)):w()}}}const gt=yy;function Qy(t){return Yy(t)}function Yy(t,e){const n=pl();n.__VUE__=!0;const{insert:r,remove:s,patchProp:i,createElement:o,createText:a,createComment:l,setText:c,setElementText:u,parentNode:h,nextSibling:d,setScopeId:f=St,insertStaticContent:w}=t,y=(p,g,v,T=null,I=null,S=null,N=!1,P=null,x=!!g.dynamicChildren)=>{if(p===g)return;p&&!ls(p,g)&&(T=Si(p),Mt(p,I,S,!0),p=null),g.patchFlag===-2&&(x=!1,g.dynamicChildren=null);const{type:R,ref:q,shapeFlag:$}=g;switch(R){case Qo:k(p,g,v,T);break;case er:U(p,g,v,T);break;case Xi:p==null&&O(g,v,T,N);break;case nt:de(p,g,v,T,I,S,N,P,x);break;default:$&1?Re(p,g,v,T,I,S,N,P,x):$&6?we(p,g,v,T,I,S,N,P,x):($&64||$&128)&&R.process(p,g,v,T,I,S,N,P,x,pr)}q!=null&&I&&bl(q,p&&p.ref,S,g||p,!g)},k=(p,g,v,T)=>{if(p==null)r(g.el=a(g.children),v,T);else{const I=g.el=p.el;g.children!==p.children&&c(I,g.children)}},U=(p,g,v,T)=>{p==null?r(g.el=l(g.children||""),v,T):g.el=p.el},O=(p,g,v,T)=>{[p.el,p.anchor]=w(p.children,g,v,T,p.el,p.anchor)},B=({el:p,anchor:g},v,T)=>{let I;for(;p&&p!==g;)I=d(p),r(p,v,T),p=I;r(g,v,T)},F=({el:p,anchor:g})=>{let v;for(;p&&p!==g;)v=d(p),s(p),p=v;s(g)},Re=(p,g,v,T,I,S,N,P,x)=>{N=N||g.type==="svg",p==null?ke(g,v,T,I,S,N,P,x):_(p,g,I,S,N,P,x)},ke=(p,g,v,T,I,S,N,P)=>{let x,R;const{type:q,props:$,shapeFlag:K,transition:Y,dirs:ne}=p;if(x=p.el=o(p.type,S,$&&$.is,$),K&8?u(x,p.children):K&16&&C(p.children,x,null,T,I,S&&q!=="foreignObject",N,P),ne&&Un(p,null,T,"created"),Ue(x,p,p.scopeId,N,T),$){for(const _e in $)_e!=="value"&&!zi(_e)&&i(x,_e,null,$[_e],S,p.children,T,I,Xt);"value"in $&&i(x,"value",null,$.value),(R=$.onVnodeBeforeMount)&&Ut(R,T,p)}ne&&Un(p,null,T,"beforeMount");const ye=(!I||I&&!I.pendingBranch)&&Y&&!Y.persisted;ye&&Y.beforeEnter(x),r(x,g,v),((R=$&&$.onVnodeMounted)||ye||ne)&&gt(()=>{R&&Ut(R,T,p),ye&&Y.enter(x),ne&&Un(p,null,T,"mounted")},I)},Ue=(p,g,v,T,I)=>{if(v&&f(p,v),T)for(let S=0;S<T.length;S++)f(p,T[S]);if(I){let S=I.subTree;if(g===S){const N=I.vnode;Ue(p,N,N.scopeId,N.slotScopeIds,I.parent)}}},C=(p,g,v,T,I,S,N,P,x=0)=>{for(let R=x;R<p.length;R++){const q=p[R]=P?gn(p[R]):Ft(p[R]);y(null,q,g,v,T,I,S,N,P)}},_=(p,g,v,T,I,S,N)=>{const P=g.el=p.el;let{patchFlag:x,dynamicChildren:R,dirs:q}=g;x|=p.patchFlag&16;const $=p.props||Ee,K=g.props||Ee;let Y;v&&Fn(v,!1),(Y=K.onVnodeBeforeUpdate)&&Ut(Y,v,g,p),q&&Un(g,p,v,"beforeUpdate"),v&&Fn(v,!0);const ne=I&&g.type!=="foreignObject";if(R?b(p.dynamicChildren,R,P,v,T,ne,S):N||me(p,g,P,null,v,T,ne,S,!1),x>0){if(x&16)te(P,g,$,K,v,T,I);else if(x&2&&$.class!==K.class&&i(P,"class",null,K.class,I),x&4&&i(P,"style",$.style,K.style,I),x&8){const ye=g.dynamicProps;for(let _e=0;_e<ye.length;_e++){const Oe=ye[_e],Rt=$[Oe],gr=K[Oe];(gr!==Rt||Oe==="value")&&i(P,Oe,Rt,gr,I,p.children,v,T,Xt)}}x&1&&p.children!==g.children&&u(P,g.children)}else!N&&R==null&&te(P,g,$,K,v,T,I);((Y=K.onVnodeUpdated)||q)&&gt(()=>{Y&&Ut(Y,v,g,p),q&&Un(g,p,v,"updated")},T)},b=(p,g,v,T,I,S,N)=>{for(let P=0;P<g.length;P++){const x=p[P],R=g[P],q=x.el&&(x.type===nt||!ls(x,R)||x.shapeFlag&70)?h(x.el):v;y(x,R,q,null,T,I,S,N,!0)}},te=(p,g,v,T,I,S,N)=>{if(v!==T){if(v!==Ee)for(const P in v)!zi(P)&&!(P in T)&&i(p,P,v[P],null,N,g.children,I,S,Xt);for(const P in T){if(zi(P))continue;const x=T[P],R=v[P];x!==R&&P!=="value"&&i(p,P,R,x,N,g.children,I,S,Xt)}"value"in T&&i(p,"value",v.value,T.value)}},de=(p,g,v,T,I,S,N,P,x)=>{const R=g.el=p?p.el:a(""),q=g.anchor=p?p.anchor:a("");let{patchFlag:$,dynamicChildren:K,slotScopeIds:Y}=g;Y&&(P=P?P.concat(Y):Y),p==null?(r(R,v,T),r(q,v,T),C(g.children,v,q,I,S,N,P,x)):$>0&&$&64&&K&&p.dynamicChildren?(b(p.dynamicChildren,K,v,I,S,N,P),(g.key!=null||I&&g===I.subTree)&&Lf(p,g,!0)):me(p,g,v,q,I,S,N,P,x)},we=(p,g,v,T,I,S,N,P,x)=>{g.slotScopeIds=P,p==null?g.shapeFlag&512?I.ctx.activate(g,v,T,N,x):Ze(g,v,T,I,S,N,x):ae(p,g,x)},Ze=(p,g,v,T,I,S,N)=>{const P=p.component=av(p,T,I);if(Af(p)&&(P.ctx.renderer=pr),lv(P),P.asyncDep){if(I&&I.registerDep(P,z),!p.el){const x=P.subTree=Ge(er);U(null,x,g,v)}return}z(P,p,g,v,I,S,N)},ae=(p,g,v)=>{const T=g.component=p.component;if(gy(p,g,v))if(T.asyncDep&&!T.asyncResolved){ce(T,g,v);return}else T.next=g,ly(T.update),T.update();else g.el=p.el,T.vnode=g},z=(p,g,v,T,I,S,N)=>{const P=()=>{if(p.isMounted){let{next:q,bu:$,u:K,parent:Y,vnode:ne}=p,ye=q,_e;Fn(p,!1),q?(q.el=ne.el,ce(p,q,N)):q=ne,$&&Gi($),(_e=q.props&&q.props.onVnodeBeforeUpdate)&&Ut(_e,Y,q,ne),Fn(p,!0);const Oe=Ma(p),Rt=p.subTree;p.subTree=Oe,y(Rt,Oe,h(Rt.el),Si(Rt),p,I,S),q.el=Oe.el,ye===null&&my(p,Oe.el),K&&gt(K,I),(_e=q.props&&q.props.onVnodeUpdated)&&gt(()=>Ut(_e,Y,q,ne),I)}else{let q;const{el:$,props:K}=g,{bm:Y,m:ne,parent:ye}=p,_e=Yi(g);if(Fn(p,!1),Y&&Gi(Y),!_e&&(q=K&&K.onVnodeBeforeMount)&&Ut(q,ye,g),Fn(p,!0),$&&Oa){const Oe=()=>{p.subTree=Ma(p),Oa($,p.subTree,p,I,null)};_e?g.type.__asyncLoader().then(()=>!p.isUnmounted&&Oe()):Oe()}else{const Oe=p.subTree=Ma(p);y(null,Oe,v,T,p,I,S),g.el=Oe.el}if(ne&&gt(ne,I),!_e&&(q=K&&K.onVnodeMounted)){const Oe=g;gt(()=>Ut(q,ye,Oe),I)}(g.shapeFlag&256||ye&&Yi(ye.vnode)&&ye.vnode.shapeFlag&256)&&p.a&&gt(p.a,I),p.isMounted=!0,g=v=T=null}},x=p.effect=new fc(P,()=>Ec(R),p.scope),R=p.update=()=>x.run();R.id=p.uid,Fn(p,!0),R()},ce=(p,g,v)=>{g.component=p;const T=p.vnode.props;p.vnode=g,p.next=null,Hy(p,g.props,T,v),Gy(p,g.children,v),Jr(),eh(),Xr()},me=(p,g,v,T,I,S,N,P,x=!1)=>{const R=p&&p.children,q=p?p.shapeFlag:0,$=g.children,{patchFlag:K,shapeFlag:Y}=g;if(K>0){if(K&128){fr(R,$,v,T,I,S,N,P,x);return}else if(K&256){Jt(R,$,v,T,I,S,N,P,x);return}}Y&8?(q&16&&Xt(R,I,S),$!==R&&u(v,$)):q&16?Y&16?fr(R,$,v,T,I,S,N,P,x):Xt(R,I,S,!0):(q&8&&u(v,""),Y&16&&C($,v,T,I,S,N,P,x))},Jt=(p,g,v,T,I,S,N,P,x)=>{p=p||Rr,g=g||Rr;const R=p.length,q=g.length,$=Math.min(R,q);let K;for(K=0;K<$;K++){const Y=g[K]=x?gn(g[K]):Ft(g[K]);y(p[K],Y,v,null,I,S,N,P,x)}R>q?Xt(p,I,S,!0,!1,$):C(g,v,T,I,S,N,P,x,$)},fr=(p,g,v,T,I,S,N,P,x)=>{let R=0;const q=g.length;let $=p.length-1,K=q-1;for(;R<=$&&R<=K;){const Y=p[R],ne=g[R]=x?gn(g[R]):Ft(g[R]);if(ls(Y,ne))y(Y,ne,v,null,I,S,N,P,x);else break;R++}for(;R<=$&&R<=K;){const Y=p[$],ne=g[K]=x?gn(g[K]):Ft(g[K]);if(ls(Y,ne))y(Y,ne,v,null,I,S,N,P,x);else break;$--,K--}if(R>$){if(R<=K){const Y=K+1,ne=Y<q?g[Y].el:T;for(;R<=K;)y(null,g[R]=x?gn(g[R]):Ft(g[R]),v,ne,I,S,N,P,x),R++}}else if(R>K)for(;R<=$;)Mt(p[R],I,S,!0),R++;else{const Y=R,ne=R,ye=new Map;for(R=ne;R<=K;R++){const yt=g[R]=x?gn(g[R]):Ft(g[R]);yt.key!=null&&ye.set(yt.key,R)}let _e,Oe=0;const Rt=K-ne+1;let gr=!1,ju=0;const as=new Array(Rt);for(R=0;R<Rt;R++)as[R]=0;for(R=Y;R<=$;R++){const yt=p[R];if(Oe>=Rt){Mt(yt,I,S,!0);continue}let Lt;if(yt.key!=null)Lt=ye.get(yt.key);else for(_e=ne;_e<=K;_e++)if(as[_e-ne]===0&&ls(yt,g[_e])){Lt=_e;break}Lt===void 0?Mt(yt,I,S,!0):(as[Lt-ne]=R+1,Lt>=ju?ju=Lt:gr=!0,y(yt,g[Lt],v,null,I,S,N,P,x),Oe++)}const qu=gr?Jy(as):Rr;for(_e=qu.length-1,R=Rt-1;R>=0;R--){const yt=ne+R,Lt=g[yt],Ku=yt+1<q?g[yt+1].el:T;as[R]===0?y(null,Lt,v,Ku,I,S,N,P,x):gr&&(_e<0||R!==qu[_e]?Ln(Lt,v,Ku,2):_e--)}}},Ln=(p,g,v,T,I=null)=>{const{el:S,type:N,transition:P,children:x,shapeFlag:R}=p;if(R&6){Ln(p.component.subTree,g,v,T);return}if(R&128){p.suspense.move(g,v,T);return}if(R&64){N.move(p,g,v,pr);return}if(N===nt){r(S,g,v);for(let $=0;$<x.length;$++)Ln(x[$],g,v,T);r(p.anchor,g,v);return}if(N===Xi){B(p,g,v);return}if(T!==2&&R&1&&P)if(T===0)P.beforeEnter(S),r(S,g,v),gt(()=>P.enter(S),I);else{const{leave:$,delayLeave:K,afterLeave:Y}=P,ne=()=>r(S,g,v),ye=()=>{$(S,()=>{ne(),Y&&Y()})};K?K(S,ne,ye):ye()}else r(S,g,v)},Mt=(p,g,v,T=!1,I=!1)=>{const{type:S,props:N,ref:P,children:x,dynamicChildren:R,shapeFlag:q,patchFlag:$,dirs:K}=p;if(P!=null&&bl(P,null,v,p,!0),q&256){g.ctx.deactivate(p);return}const Y=q&1&&K,ne=!Yi(p);let ye;if(ne&&(ye=N&&N.onVnodeBeforeUnmount)&&Ut(ye,g,p),q&6)h_(p.component,v,T);else{if(q&128){p.suspense.unmount(v,T);return}Y&&Un(p,null,g,"beforeUnmount"),q&64?p.type.remove(p,g,v,I,pr,T):R&&(S!==nt||$>0&&$&64)?Xt(R,g,v,!1,!0):(S===nt&&$&384||!I&&q&16)&&Xt(x,g,v),T&&$u(p)}(ne&&(ye=N&&N.onVnodeUnmounted)||Y)&&gt(()=>{ye&&Ut(ye,g,p),Y&&Un(p,null,g,"unmounted")},v)},$u=p=>{const{type:g,el:v,anchor:T,transition:I}=p;if(g===nt){u_(v,T);return}if(g===Xi){F(p);return}const S=()=>{s(v),I&&!I.persisted&&I.afterLeave&&I.afterLeave()};if(p.shapeFlag&1&&I&&!I.persisted){const{leave:N,delayLeave:P}=I,x=()=>N(v,S);P?P(p.el,S,x):x()}else S()},u_=(p,g)=>{let v;for(;p!==g;)v=d(p),s(p),p=v;s(g)},h_=(p,g,v)=>{const{bum:T,scope:I,update:S,subTree:N,um:P}=p;T&&Gi(T),I.stop(),S&&(S.active=!1,Mt(N,p,g,v)),P&&gt(P,g),gt(()=>{p.isUnmounted=!0},g),g&&g.pendingBranch&&!g.isUnmounted&&p.asyncDep&&!p.asyncResolved&&p.suspenseId===g.pendingId&&(g.deps--,g.deps===0&&g.resolve())},Xt=(p,g,v,T=!1,I=!1,S=0)=>{for(let N=S;N<p.length;N++)Mt(p[N],g,v,T,I)},Si=p=>p.shapeFlag&6?Si(p.component.subTree):p.shapeFlag&128?p.suspense.next():d(p.anchor||p.el),Bu=(p,g,v)=>{p==null?g._vnode&&Mt(g._vnode,null,null,!0):y(g._vnode||null,p,g,null,null,null,v),eh(),vf(),g._vnode=p},pr={p:y,um:Mt,m:Ln,r:$u,mt:Ze,mc:C,pc:me,pbc:b,n:Si,o:t};let Na,Oa;return e&&([Na,Oa]=e(pr)),{render:Bu,hydrate:Na,createApp:jy(Bu,Na)}}function Fn({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function Lf(t,e,n=!1){const r=t.children,s=e.children;if(H(r)&&H(s))for(let i=0;i<r.length;i++){const o=r[i];let a=s[i];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=s[i]=gn(s[i]),a.el=o.el),n||Lf(o,a)),a.type===Qo&&(a.el=o.el)}}function Jy(t){const e=t.slice(),n=[0];let r,s,i,o,a;const l=t.length;for(r=0;r<l;r++){const c=t[r];if(c!==0){if(s=n[n.length-1],t[s]<c){e[r]=s,n.push(r);continue}for(i=0,o=n.length-1;i<o;)a=i+o>>1,t[n[a]]<c?i=a+1:o=a;c<t[n[i]]&&(i>0&&(e[r]=n[i-1]),n[i]=r)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=e[o];return n}const Xy=t=>t.__isTeleport,nt=Symbol.for("v-fgt"),Qo=Symbol.for("v-txt"),er=Symbol.for("v-cmt"),Xi=Symbol.for("v-stc"),Is=[];let Pt=null;function Z(t=!1){Is.push(Pt=t?null:[])}function Zy(){Is.pop(),Pt=Is[Is.length-1]||null}let Vs=1;function hh(t){Vs+=t}function Uf(t){return t.dynamicChildren=Vs>0?Pt||Rr:null,Zy(),Vs>0&&Pt&&Pt.push(t),t}function ie(t,e,n,r,s,i){return Uf(m(t,e,n,r,s,i,!0))}function Tr(t,e,n,r,s){return Uf(Ge(t,e,n,r,s,!0))}function ev(t){return t?t.__v_isVNode===!0:!1}function ls(t,e){return t.type===e.type&&t.key===e.key}const Yo="__vInternal",Ff=({key:t})=>t??null,Zi=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?Be(t)||ot(t)||ee(t)?{i:Tt,r:t,k:e,f:!!n}:t:null);function m(t,e=null,n=null,r=0,s=null,i=t===nt?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&Ff(e),ref:e&&Zi(e),scopeId:If,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:Tt};return a?(bc(l,n),i&128&&t.normalize(l)):n&&(l.shapeFlag|=Be(n)?8:16),Vs>0&&!o&&Pt&&(l.patchFlag>0||i&6)&&l.patchFlag!==32&&Pt.push(l),l}const Ge=tv;function tv(t,e=null,n=null,r=0,s=null,i=!1){if((!t||t===Ny)&&(t=er),ev(t)){const a=Mr(t,e,!0);return n&&bc(a,n),Vs>0&&!i&&Pt&&(a.shapeFlag&6?Pt[Pt.indexOf(t)]=a:Pt.push(a)),a.patchFlag|=-2,a}if(fv(t)&&(t=t.__vccOpts),e){e=nv(e);let{class:a,style:l}=e;a&&!Be(a)&&(e.class=uc(a)),Ae(l)&&(df(l)&&!H(l)&&(l=Xe({},l)),e.style=Zn(l))}const o=Be(t)?1:_y(t)?128:Xy(t)?64:Ae(t)?4:ee(t)?2:0;return m(t,e,n,r,s,o,i,!0)}function nv(t){return t?df(t)||Yo in t?Xe({},t):t:null}function Mr(t,e,n=!1){const{props:r,ref:s,patchFlag:i,children:o}=t,a=e?sv(r||{},e):r;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:a,key:a&&Ff(a),ref:e&&e.ref?n&&s?H(s)?s.concat(Zi(e)):[s,Zi(e)]:Zi(e):s,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:o,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==nt?i===-1?16:i|16:i,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&Mr(t.ssContent),ssFallback:t.ssFallback&&Mr(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce}}function Kn(t=" ",e=0){return Ge(Qo,null,t,e)}function rv(t,e){const n=Ge(Xi,null,t);return n.staticCount=e,n}function $e(t="",e=!1){return e?(Z(),Tr(er,null,t)):Ge(er,null,t)}function Ft(t){return t==null||typeof t=="boolean"?Ge(er):H(t)?Ge(nt,null,t.slice()):typeof t=="object"?gn(t):Ge(Qo,null,String(t))}function gn(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:Mr(t)}function bc(t,e){let n=0;const{shapeFlag:r}=t;if(e==null)e=null;else if(H(e))n=16;else if(typeof e=="object")if(r&65){const s=e.default;s&&(s._c&&(s._d=!1),bc(t,s()),s._c&&(s._d=!0));return}else{n=32;const s=e._;!s&&!(Yo in e)?e._ctx=Tt:s===3&&Tt&&(Tt.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else ee(e)?(e={default:e,_ctx:Tt},n=32):(e=String(e),r&64?(n=16,e=[Kn(e)]):n=8);t.children=e,t.shapeFlag|=n}function sv(...t){const e={};for(let n=0;n<t.length;n++){const r=t[n];for(const s in r)if(s==="class")e.class!==r.class&&(e.class=uc([e.class,r.class]));else if(s==="style")e.style=Zn([e.style,r.style]);else if($o(s)){const i=e[s],o=r[s];o&&i!==o&&!(H(i)&&i.includes(o))&&(e[s]=i?[].concat(i,o):o)}else s!==""&&(e[s]=r[s])}return e}function Ut(t,e,n,r=null){xt(t,e,7,[n,r])}const iv=xf();let ov=0;function av(t,e,n){const r=t.type,s=(e?e.appContext:t.appContext)||iv,i={uid:ov++,vnode:t,type:r,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,scope:new A_(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Nf(r,s),emitsOptions:Ef(r,s),emit:null,emitted:null,propsDefaults:Ee,inheritAttrs:r.inheritAttrs,ctx:Ee,data:Ee,props:Ee,attrs:Ee,slots:Ee,refs:Ee,setupState:Ee,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=hy.bind(null,i),t.ce&&t.ce(i),i}let Ye=null,Ac,mr,dh="__VUE_INSTANCE_SETTERS__";(mr=pl()[dh])||(mr=pl()[dh]=[]),mr.push(t=>Ye=t),Ac=t=>{mr.length>1?mr.forEach(e=>e(t)):mr[0](t)};const Lr=t=>{Ac(t),t.scope.on()},Qn=()=>{Ye&&Ye.scope.off(),Ac(null)};function $f(t){return t.vnode.shapeFlag&4}let Ms=!1;function lv(t,e=!1){Ms=e;const{props:n,children:r}=t.vnode,s=$f(t);Ky(t,n,s,e),zy(t,r);const i=s?cv(t,e):void 0;return Ms=!1,i}function cv(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=ff(new Proxy(t.ctx,Vy));const{setup:r}=n;if(r){const s=t.setupContext=r.length>1?hv(t):null;Lr(t),Jr();const i=Tn(r,t,0,[t.props,s]);if(Xr(),Qn(),Qd(i)){if(i.then(Qn,Qn),e)return i.then(o=>{fh(t,o,e)}).catch(o=>{Ko(o,t,0)});t.asyncDep=i}else fh(t,i,e)}else Bf(t,e)}function fh(t,e,n){ee(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:Ae(e)&&(t.setupState=mf(e)),Bf(t,n)}let ph;function Bf(t,e,n){const r=t.type;if(!t.render){if(!e&&ph&&!r.render){const s=r.template||Ic(t).template;if(s){const{isCustomElement:i,compilerOptions:o}=t.appContext.config,{delimiters:a,compilerOptions:l}=r,c=Xe(Xe({isCustomElement:i,delimiters:a},o),l);r.render=ph(s,c)}}t.render=r.render||St}Lr(t),Jr(),My(t),Xr(),Qn()}function uv(t){return t.attrsProxy||(t.attrsProxy=new Proxy(t.attrs,{get(e,n){return _t(t,"get","$attrs"),e[n]}}))}function hv(t){const e=n=>{t.exposed=n||{}};return{get attrs(){return uv(t)},slots:t.slots,emit:t.emit,expose:e}}function Jo(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(mf(ff(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in Es)return Es[n](t)},has(e,n){return n in e||n in Es}}))}function dv(t,e=!0){return ee(t)?t.displayName||t.name:t.name||e&&t.__name}function fv(t){return ee(t)&&"__vccOpts"in t}const pv=(t,e)=>iy(t,e,Ms),gv=Symbol.for("v-scx"),mv=()=>Ji(gv),_v="3.3.4",yv="http://www.w3.org/2000/svg",jn=typeof document<"u"?document:null,gh=jn&&jn.createElement("template"),vv={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,r)=>{const s=e?jn.createElementNS(yv,t):jn.createElement(t,n?{is:n}:void 0);return t==="select"&&r&&r.multiple!=null&&s.setAttribute("multiple",r.multiple),s},createText:t=>jn.createTextNode(t),createComment:t=>jn.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>jn.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,r,s,i){const o=n?n.previousSibling:e.lastChild;if(s&&(s===i||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),n),!(s===i||!(s=s.nextSibling)););else{gh.innerHTML=r?`<svg>${t}</svg>`:t;const a=gh.content;if(r){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}};function wv(t,e,n){const r=t._vtc;r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}function Ev(t,e,n){const r=t.style,s=Be(n);if(n&&!s){if(e&&!Be(e))for(const i in e)n[i]==null&&Al(r,i,"");for(const i in n)Al(r,i,n[i])}else{const i=r.display;s?e!==n&&(r.cssText=n):e&&t.removeAttribute("style"),"_vod"in t&&(r.display=i)}}const mh=/\s*!important$/;function Al(t,e,n){if(H(n))n.forEach(r=>Al(t,e,r));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const r=Iv(t,e);mh.test(n)?t.setProperty(Yr(r),n.replace(mh,""),"important"):t[r]=n}}const _h=["Webkit","Moz","ms"],Ua={};function Iv(t,e){const n=Ua[e];if(n)return n;let r=Gt(e);if(r!=="filter"&&r in t)return Ua[e]=r;r=jo(r);for(let s=0;s<_h.length;s++){const i=_h[s]+r;if(i in t)return Ua[e]=i}return e}const yh="http://www.w3.org/1999/xlink";function Tv(t,e,n,r,s){if(r&&e.startsWith("xlink:"))n==null?t.removeAttributeNS(yh,e.slice(6,e.length)):t.setAttributeNS(yh,e,n);else{const i=T_(e);n==null||i&&!Xd(n)?t.removeAttribute(e):t.setAttribute(e,i?"":n)}}function bv(t,e,n,r,s,i,o){if(e==="innerHTML"||e==="textContent"){r&&o(r,s,i),t[e]=n??"";return}const a=t.tagName;if(e==="value"&&a!=="PROGRESS"&&!a.includes("-")){t._value=n;const c=a==="OPTION"?t.getAttribute("value"):t.value,u=n??"";c!==u&&(t.value=u),n==null&&t.removeAttribute(e);return}let l=!1;if(n===""||n==null){const c=typeof t[e];c==="boolean"?n=Xd(n):n==null&&c==="string"?(n="",l=!0):c==="number"&&(n=0,l=!0)}try{t[e]=n}catch{}l&&t.removeAttribute(e)}function mn(t,e,n,r){t.addEventListener(e,n,r)}function Av(t,e,n,r){t.removeEventListener(e,n,r)}function Rv(t,e,n,r,s=null){const i=t._vei||(t._vei={}),o=i[e];if(r&&o)o.value=r;else{const[a,l]=kv(e);if(r){const c=i[e]=Sv(r,s);mn(t,a,c,l)}else o&&(Av(t,a,o,l),i[e]=void 0)}}const vh=/(?:Once|Passive|Capture)$/;function kv(t){let e;if(vh.test(t)){e={};let r;for(;r=t.match(vh);)t=t.slice(0,t.length-r[0].length),e[r[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):Yr(t.slice(2)),e]}let Fa=0;const Cv=Promise.resolve(),Pv=()=>Fa||(Cv.then(()=>Fa=0),Fa=Date.now());function Sv(t,e){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;xt(xv(r,n.value),e,5,[r])};return n.value=t,n.attached=Pv(),n}function xv(t,e){if(H(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(r=>s=>!s._stopped&&r&&r(s))}else return e}const wh=/^on[a-z]/,Dv=(t,e,n,r,s=!1,i,o,a,l)=>{e==="class"?wv(t,r,s):e==="style"?Ev(t,n,r):$o(e)?ac(e)||Rv(t,e,n,r,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):Nv(t,e,r,s))?bv(t,e,r,i,o,a,l):(e==="true-value"?t._trueValue=r:e==="false-value"&&(t._falseValue=r),Tv(t,e,r,s))};function Nv(t,e,n,r){return r?!!(e==="innerHTML"||e==="textContent"||e in t&&wh.test(e)&&ee(n)):e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA"||wh.test(e)&&Be(n)?!1:e in t}const Ur=t=>{const e=t.props["onUpdate:modelValue"]||!1;return H(e)?n=>Gi(e,n):e};function Ov(t){t.target.composing=!0}function Eh(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const Se={created(t,{modifiers:{lazy:e,trim:n,number:r}},s){t._assign=Ur(s);const i=r||s.props&&s.props.type==="number";mn(t,e?"change":"input",o=>{if(o.target.composing)return;let a=t.value;n&&(a=a.trim()),i&&(a=co(a)),t._assign(a)}),n&&mn(t,"change",()=>{t.value=t.value.trim()}),e||(mn(t,"compositionstart",Ov),mn(t,"compositionend",Eh),mn(t,"change",Eh))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,modifiers:{lazy:n,trim:r,number:s}},i){if(t._assign=Ur(i),t.composing||document.activeElement===t&&t.type!=="range"&&(n||r&&t.value.trim()===e||(s||t.type==="number")&&co(t.value)===e))return;const o=e??"";t.value!==o&&(t.value=o)}},go={deep:!0,created(t,e,n){t._assign=Ur(n),mn(t,"change",()=>{const r=t._modelValue,s=Ls(t),i=t.checked,o=t._assign;if(H(r)){const a=hc(r,s),l=a!==-1;if(i&&!l)o(r.concat(s));else if(!i&&l){const c=[...r];c.splice(a,1),o(c)}}else if(Qr(r)){const a=new Set(r);i?a.add(s):a.delete(s),o(a)}else o(qf(t,i))})},mounted:Ih,beforeUpdate(t,e,n){t._assign=Ur(n),Ih(t,e,n)}};function Ih(t,{value:e,oldValue:n},r){t._modelValue=e,H(e)?t.checked=hc(e,r.props.value)>-1:Qr(e)?t.checked=e.has(r.props.value):e!==n&&(t.checked=oi(e,qf(t,!0)))}const jf={deep:!0,created(t,{value:e,modifiers:{number:n}},r){const s=Qr(e);mn(t,"change",()=>{const i=Array.prototype.filter.call(t.options,o=>o.selected).map(o=>n?co(Ls(o)):Ls(o));t._assign(t.multiple?s?new Set(i):i:i[0])}),t._assign=Ur(r)},mounted(t,{value:e}){Th(t,e)},beforeUpdate(t,e,n){t._assign=Ur(n)},updated(t,{value:e}){Th(t,e)}};function Th(t,e){const n=t.multiple;if(!(n&&!H(e)&&!Qr(e))){for(let r=0,s=t.options.length;r<s;r++){const i=t.options[r],o=Ls(i);if(n)H(e)?i.selected=hc(e,o)>-1:i.selected=e.has(o);else if(oi(Ls(i),e)){t.selectedIndex!==r&&(t.selectedIndex=r);return}}!n&&t.selectedIndex!==-1&&(t.selectedIndex=-1)}}function Ls(t){return"_value"in t?t._value:t.value}function qf(t,e){const n=e?"_trueValue":"_falseValue";return n in t?t[n]:e}const Vv=Xe({patchProp:Dv},vv);let bh;function Mv(){return bh||(bh=Qy(Vv))}const Lv=(...t)=>{const e=Mv().createApp(...t),{mount:n}=e;return e.mount=r=>{const s=Uv(r);if(!s)return;const i=e._component;!ee(i)&&!i.render&&!i.template&&(i.template=s.innerHTML),s.innerHTML="";const o=n(s,!1,s instanceof SVGElement);return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e};function Uv(t){return Be(t)?document.querySelector(t):t}/**
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
 */const Kf=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},Fv=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=t[n++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=t[n++],o=t[n++],a=t[n++],l=((s&7)<<18|(i&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const i=t[n++],o=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},Hf={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const i=t[s],o=s+1<t.length,a=o?t[s+1]:0,l=s+2<t.length,c=l?t[s+2]:0,u=i>>2,h=(i&3)<<4|a>>4;let d=(a&15)<<2|c>>6,f=c&63;l||(f=64,o||(d=64)),r.push(n[u],n[h],n[d],n[f])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Kf(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):Fv(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const i=n[t.charAt(s++)],a=s<t.length?n[t.charAt(s)]:0;++s;const c=s<t.length?n[t.charAt(s)]:64;++s;const h=s<t.length?n[t.charAt(s)]:64;if(++s,i==null||a==null||c==null||h==null)throw new $v;const d=i<<2|a>>4;if(r.push(d),c!==64){const f=a<<4&240|c>>2;if(r.push(f),h!==64){const w=c<<6&192|h;r.push(w)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class $v extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Bv=function(t){const e=Kf(t);return Hf.encodeByteArray(e,!0)},mo=function(t){return Bv(t).replace(/\./g,"")},Wf=function(t){try{return Hf.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */const qv=()=>jv().__FIREBASE_DEFAULTS__,Kv=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},Hv=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Wf(t[1]);return e&&JSON.parse(e)},Rc=()=>{try{return qv()||Kv()||Hv()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},zf=t=>{var e,n;return(n=(e=Rc())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},Wv=t=>{const e=zf(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},Gf=()=>{var t;return(t=Rc())===null||t===void 0?void 0:t.config},Qf=t=>{var e;return(e=Rc())===null||e===void 0?void 0:e[`_${t}`]};/**
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
 */class zv{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function Gv(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",s=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},t),a="";return[mo(JSON.stringify(n)),mo(JSON.stringify(o)),a].join(".")}/**
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
 */function ut(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Qv(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(ut())}function Yv(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function Jv(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Xv(){const t=ut();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function Zv(){try{return typeof indexedDB=="object"}catch{return!1}}function ew(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var i;e(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}/**
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
 */const tw="FirebaseError";class hn extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=tw,Object.setPrototypeOf(this,hn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,ai.prototype.create)}}class ai{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?nw(i,r):"Error",a=`${this.serviceName}: ${o} (${s}).`;return new hn(s,a,r)}}function nw(t,e){return t.replace(rw,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const rw=/\{\$([^}]+)}/g;function sw(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function _o(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const i=t[s],o=e[s];if(Ah(i)&&Ah(o)){if(!_o(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function Ah(t){return t!==null&&typeof t=="object"}/**
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
 */function li(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function ps(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[s,i]=r.split("=");e[decodeURIComponent(s)]=decodeURIComponent(i)}}),e}function gs(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function iw(t,e){const n=new ow(t,e);return n.subscribe.bind(n)}class ow{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let s;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");aw(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:r},s.next===void 0&&(s.next=$a),s.error===void 0&&(s.error=$a),s.complete===void 0&&(s.complete=$a);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function aw(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function $a(){}/**
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
 */function De(t){return t&&t._delegate?t._delegate:t}class tr{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const $n="[DEFAULT]";/**
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
 */class lw{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new zv;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(uw(e))try{this.getOrInitializeService({instanceIdentifier:$n})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=$n){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=$n){return this.instances.has(e)}getOptions(e=$n){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(i);r===a&&o.resolve(s)}return s}onInit(e,n){var r;const s=this.normalizeInstanceIdentifier(n),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(e),this.onInitCallbacks.set(s,i);const o=this.instances.get(s);return o&&e(o,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:cw(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=$n){return this.component?this.component.multipleInstances?e:$n:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function cw(t){return t===$n?void 0:t}function uw(t){return t.instantiationMode==="EAGER"}/**
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
 */var se;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(se||(se={}));const dw={debug:se.DEBUG,verbose:se.VERBOSE,info:se.INFO,warn:se.WARN,error:se.ERROR,silent:se.SILENT},fw=se.INFO,pw={[se.DEBUG]:"log",[se.VERBOSE]:"log",[se.INFO]:"info",[se.WARN]:"warn",[se.ERROR]:"error"},gw=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=pw[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class kc{constructor(e){this.name=e,this._logLevel=fw,this._logHandler=gw,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in se))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?dw[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,se.DEBUG,...e),this._logHandler(this,se.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,se.VERBOSE,...e),this._logHandler(this,se.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,se.INFO,...e),this._logHandler(this,se.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,se.WARN,...e),this._logHandler(this,se.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,se.ERROR,...e),this._logHandler(this,se.ERROR,...e)}}const mw=(t,e)=>e.some(n=>t instanceof n);let Rh,kh;function _w(){return Rh||(Rh=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function yw(){return kh||(kh=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Yf=new WeakMap,Rl=new WeakMap,Jf=new WeakMap,Ba=new WeakMap,Cc=new WeakMap;function vw(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(bn(t.result)),s()},o=()=>{r(t.error),s()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&Yf.set(n,t)}).catch(()=>{}),Cc.set(e,t),e}function ww(t){if(Rl.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),s()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});Rl.set(t,e)}let kl={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Rl.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Jf.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return bn(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function Ew(t){kl=t(kl)}function Iw(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(ja(this),e,...n);return Jf.set(r,e.sort?e.sort():[e]),bn(r)}:yw().includes(t)?function(...e){return t.apply(ja(this),e),bn(Yf.get(this))}:function(...e){return bn(t.apply(ja(this),e))}}function Tw(t){return typeof t=="function"?Iw(t):(t instanceof IDBTransaction&&ww(t),mw(t,_w())?new Proxy(t,kl):t)}function bn(t){if(t instanceof IDBRequest)return vw(t);if(Ba.has(t))return Ba.get(t);const e=Tw(t);return e!==t&&(Ba.set(t,e),Cc.set(e,t)),e}const ja=t=>Cc.get(t);function bw(t,e,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(t,e),a=bn(o);return r&&o.addEventListener("upgradeneeded",l=>{r(bn(o.result),l.oldVersion,l.newVersion,bn(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),a.then(l=>{i&&l.addEventListener("close",()=>i()),s&&l.addEventListener("versionchange",c=>s(c.oldVersion,c.newVersion,c))}).catch(()=>{}),a}const Aw=["get","getKey","getAll","getAllKeys","count"],Rw=["put","add","delete","clear"],qa=new Map;function Ch(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(qa.get(e))return qa.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=Rw.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||Aw.includes(n)))return;const i=async function(o,...a){const l=this.transaction(o,s?"readwrite":"readonly");let c=l.store;return r&&(c=c.index(a.shift())),(await Promise.all([c[n](...a),s&&l.done]))[0]};return qa.set(e,i),i}Ew(t=>({...t,get:(e,n,r)=>Ch(e,n)||t.get(e,n,r),has:(e,n)=>!!Ch(e,n)||t.has(e,n)}));/**
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
 */class kw{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Cw(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function Cw(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Cl="@firebase/app",Ph="0.9.19";/**
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
 */const nr=new kc("@firebase/app"),Pw="@firebase/app-compat",Sw="@firebase/analytics-compat",xw="@firebase/analytics",Dw="@firebase/app-check-compat",Nw="@firebase/app-check",Ow="@firebase/auth",Vw="@firebase/auth-compat",Mw="@firebase/database",Lw="@firebase/database-compat",Uw="@firebase/functions",Fw="@firebase/functions-compat",$w="@firebase/installations",Bw="@firebase/installations-compat",jw="@firebase/messaging",qw="@firebase/messaging-compat",Kw="@firebase/performance",Hw="@firebase/performance-compat",Ww="@firebase/remote-config",zw="@firebase/remote-config-compat",Gw="@firebase/storage",Qw="@firebase/storage-compat",Yw="@firebase/firestore",Jw="@firebase/firestore-compat",Xw="firebase",Zw="10.4.0";/**
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
 */const Pl="[DEFAULT]",eE={[Cl]:"fire-core",[Pw]:"fire-core-compat",[xw]:"fire-analytics",[Sw]:"fire-analytics-compat",[Nw]:"fire-app-check",[Dw]:"fire-app-check-compat",[Ow]:"fire-auth",[Vw]:"fire-auth-compat",[Mw]:"fire-rtdb",[Lw]:"fire-rtdb-compat",[Uw]:"fire-fn",[Fw]:"fire-fn-compat",[$w]:"fire-iid",[Bw]:"fire-iid-compat",[jw]:"fire-fcm",[qw]:"fire-fcm-compat",[Kw]:"fire-perf",[Hw]:"fire-perf-compat",[Ww]:"fire-rc",[zw]:"fire-rc-compat",[Gw]:"fire-gcs",[Qw]:"fire-gcs-compat",[Yw]:"fire-fst",[Jw]:"fire-fst-compat","fire-js":"fire-js",[Xw]:"fire-js-all"};/**
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
 */const yo=new Map,Sl=new Map;function tE(t,e){try{t.container.addComponent(e)}catch(n){nr.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Fr(t){const e=t.name;if(Sl.has(e))return nr.debug(`There were multiple attempts to register component ${e}.`),!1;Sl.set(e,t);for(const n of yo.values())tE(n,t);return!0}function Pc(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
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
 */const nE={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},An=new ai("app","Firebase",nE);/**
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
 */class rE{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new tr("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw An.create("app-deleted",{appName:this._name})}}/**
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
 */const Zr=Zw;function Xf(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Pl,automaticDataCollectionEnabled:!1},e),s=r.name;if(typeof s!="string"||!s)throw An.create("bad-app-name",{appName:String(s)});if(n||(n=Gf()),!n)throw An.create("no-options");const i=yo.get(s);if(i){if(_o(n,i.options)&&_o(r,i.config))return i;throw An.create("duplicate-app",{appName:s})}const o=new hw(s);for(const l of Sl.values())o.addComponent(l);const a=new rE(n,r,o);return yo.set(s,a),a}function Zf(t=Pl){const e=yo.get(t);if(!e&&t===Pl&&Gf())return Xf();if(!e)throw An.create("no-app",{appName:t});return e}function Rn(t,e,n){var r;let s=(r=eE[t])!==null&&r!==void 0?r:t;n&&(s+=`-${n}`);const i=s.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const a=[`Unable to register library "${s}" with version "${e}":`];i&&a.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),nr.warn(a.join(" "));return}Fr(new tr(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
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
 */const sE="firebase-heartbeat-database",iE=1,Us="firebase-heartbeat-store";let Ka=null;function ep(){return Ka||(Ka=bw(sE,iE,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Us)}}}).catch(t=>{throw An.create("idb-open",{originalErrorMessage:t.message})})),Ka}async function oE(t){try{return await(await ep()).transaction(Us).objectStore(Us).get(tp(t))}catch(e){if(e instanceof hn)nr.warn(e.message);else{const n=An.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});nr.warn(n.message)}}}async function Sh(t,e){try{const r=(await ep()).transaction(Us,"readwrite");await r.objectStore(Us).put(e,tp(t)),await r.done}catch(n){if(n instanceof hn)nr.warn(n.message);else{const r=An.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});nr.warn(r.message)}}}function tp(t){return`${t.name}!${t.options.appId}`}/**
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
 */const aE=1024,lE=30*24*60*60*1e3;class cE{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new hE(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=xh();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(s=>s.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(s=>{const i=new Date(s.date).valueOf();return Date.now()-i<=lE}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=xh(),{heartbeatsToSend:n,unsentEntries:r}=uE(this._heartbeatsCache.heartbeats),s=mo(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}}function xh(){return new Date().toISOString().substring(0,10)}function uE(t,e=aE){const n=[];let r=t.slice();for(const s of t){const i=n.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),Dh(n)>e){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),Dh(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class hE{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Zv()?ew().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await oE(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return Sh(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return Sh(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function Dh(t){return mo(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function dE(t){Fr(new tr("platform-logger",e=>new kw(e),"PRIVATE")),Fr(new tr("heartbeat",e=>new cE(e),"PRIVATE")),Rn(Cl,Ph,t),Rn(Cl,Ph,"esm2017"),Rn("fire-js","")}dE("");function Sc(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(t);s<r.length;s++)e.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(t,r[s])&&(n[r[s]]=t[r[s]]);return n}function Nh(t){return t!==void 0&&t.enterprise!==void 0}class fE{constructor(e){if(this.siteKey="",this.emailPasswordEnabled=!1,e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.emailPasswordEnabled=e.recaptchaEnforcementState.some(n=>n.provider==="EMAIL_PASSWORD_PROVIDER"&&n.enforcementState!=="OFF")}}function np(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const pE=np,rp=new ai("auth","Firebase",np());/**
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
 */const vo=new kc("@firebase/auth");function gE(t,...e){vo.logLevel<=se.WARN&&vo.warn(`Auth (${Zr}): ${t}`,...e)}function eo(t,...e){vo.logLevel<=se.ERROR&&vo.error(`Auth (${Zr}): ${t}`,...e)}/**
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
 */function Dt(t,...e){throw xc(t,...e)}function Kt(t,...e){return xc(t,...e)}function mE(t,e,n){const r=Object.assign(Object.assign({},pE()),{[e]:n});return new ai("auth","Firebase",r).create(e,{appName:t.name})}function xc(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return rp.create(t,...e)}function W(t,e,...n){if(!t)throw xc(e,...n)}function en(t){const e="INTERNAL ASSERTION FAILED: "+t;throw eo(e),new Error(e)}function on(t,e){t||en(e)}/**
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
 */function xl(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function _E(){return Oh()==="http:"||Oh()==="https:"}function Oh(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */class ci{constructor(e,n){this.shortDelay=e,this.longDelay=n,on(n>e,"Short delay should be less than long delay!"),this.isMobile=Qv()||Jv()}get(){return yE()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Dc(t,e){on(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class sp{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;en("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;en("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;en("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const EE=new ci(3e4,6e4);function Dn(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function dn(t,e,n,r,s={}){return ip(t,s,async()=>{let i={},o={};r&&(e==="GET"?o=r:i={body:JSON.stringify(r)});const a=li(Object.assign({key:t.config.apiKey},o)).slice(1),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode),sp.fetch()(op(t,t.config.apiHost,n,a),Object.assign({method:e,headers:l,referrerPolicy:"no-referrer"},i))})}async function ip(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},wE),e);try{const s=new IE(t),i=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw Li(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const a=i.ok?o.errorMessage:o.error.message,[l,c]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw Li(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw Li(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw Li(t,"user-disabled",o);const u=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw mE(t,u,c);Dt(t,u)}}catch(s){if(s instanceof hn)throw s;Dt(t,"network-request-failed",{message:String(s)})}}async function ui(t,e,n,r,s={}){const i=await dn(t,e,n,r,s);return"mfaPendingCredential"in i&&Dt(t,"multi-factor-auth-required",{_serverResponse:i}),i}function op(t,e,n,r){const s=`${e}${n}?${r}`;return t.config.emulator?Dc(t.config,s):`${t.config.apiScheme}://${s}`}class IE{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(Kt(this.auth,"network-request-failed")),EE.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Li(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=Kt(t,e,r);return s.customData._tokenResponse=n,s}async function TE(t,e){return dn(t,"GET","/v2/recaptchaConfig",Dn(t,e))}/**
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
 */async function bE(t,e){return dn(t,"POST","/v1/accounts:delete",e)}async function AE(t,e){return dn(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function Ts(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function RE(t,e=!1){const n=De(t),r=await n.getIdToken(e),s=Nc(r);W(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:Ts(Ha(s.auth_time)),issuedAtTime:Ts(Ha(s.iat)),expirationTime:Ts(Ha(s.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function Ha(t){return Number(t)*1e3}function Nc(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return eo("JWT malformed, contained fewer than 3 sections"),null;try{const s=Wf(n);return s?JSON.parse(s):(eo("Failed to decode base64 JWT payload"),null)}catch(s){return eo("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function kE(t){const e=Nc(t);return W(e,"internal-error"),W(typeof e.exp<"u","internal-error"),W(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function rr(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof hn&&CE(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function CE({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class PE{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const s=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class ap{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Ts(this.lastLoginAt),this.creationTime=Ts(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function wo(t){var e;const n=t.auth,r=await t.getIdToken(),s=await rr(t,AE(n,{idToken:r}));W(s==null?void 0:s.users.length,n,"internal-error");const i=s.users[0];t._notifyReloadListener(i);const o=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?DE(i.providerUserInfo):[],a=xE(t.providerData,o),l=t.isAnonymous,c=!(t.email&&i.passwordHash)&&!(a!=null&&a.length),u=l?c:!1,h={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:a,metadata:new ap(i.createdAt,i.lastLoginAt),isAnonymous:u};Object.assign(t,h)}async function SE(t){const e=De(t);await wo(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function xE(t,e){return[...t.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function DE(t){return t.map(e=>{var{providerId:n}=e,r=Sc(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function NE(t,e){const n=await ip(t,{},async()=>{const r=li({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=t.config,o=op(t,s,"/v1/token",`key=${i}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",sp.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
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
 */class Fs{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){W(e.idToken,"internal-error"),W(typeof e.idToken<"u","internal-error"),W(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):kE(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return W(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:s,expiresIn:i}=await NE(e,n);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:s,expirationTime:i}=n,o=new Fs;return r&&(W(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),s&&(W(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&(W(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Fs,this.toJSON())}_performRefresh(){return en("not implemented")}}/**
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
 */function pn(t,e){W(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Yn{constructor(e){var{uid:n,auth:r,stsTokenManager:s}=e,i=Sc(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new PE(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new ap(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await rr(this,this.stsTokenManager.getToken(this.auth,e));return W(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return RE(this,e)}reload(){return SE(this)}_assign(e){this!==e&&(W(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Yn(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){W(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await wo(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await rr(this,bE(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,s,i,o,a,l,c,u;const h=(r=n.displayName)!==null&&r!==void 0?r:void 0,d=(s=n.email)!==null&&s!==void 0?s:void 0,f=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,w=(o=n.photoURL)!==null&&o!==void 0?o:void 0,y=(a=n.tenantId)!==null&&a!==void 0?a:void 0,k=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,U=(c=n.createdAt)!==null&&c!==void 0?c:void 0,O=(u=n.lastLoginAt)!==null&&u!==void 0?u:void 0,{uid:B,emailVerified:F,isAnonymous:Re,providerData:ke,stsTokenManager:Ue}=n;W(B&&Ue,e,"internal-error");const C=Fs.fromJSON(this.name,Ue);W(typeof B=="string",e,"internal-error"),pn(h,e.name),pn(d,e.name),W(typeof F=="boolean",e,"internal-error"),W(typeof Re=="boolean",e,"internal-error"),pn(f,e.name),pn(w,e.name),pn(y,e.name),pn(k,e.name),pn(U,e.name),pn(O,e.name);const _=new Yn({uid:B,auth:e,email:d,emailVerified:F,displayName:h,isAnonymous:Re,photoURL:w,phoneNumber:f,tenantId:y,stsTokenManager:C,createdAt:U,lastLoginAt:O});return ke&&Array.isArray(ke)&&(_.providerData=ke.map(b=>Object.assign({},b))),k&&(_._redirectEventId=k),_}static async _fromIdTokenResponse(e,n,r=!1){const s=new Fs;s.updateFromServerResponse(n);const i=new Yn({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await wo(i),i}}/**
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
 */const Vh=new Map;function tn(t){on(t instanceof Function,"Expected a class definition");let e=Vh.get(t);return e?(on(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Vh.set(t,e),e)}/**
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
 */class lp{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}lp.type="NONE";const Mh=lp;/**
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
 */function to(t,e,n){return`firebase:${t}:${e}:${n}`}class Sr{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=to(this.userKey,s.apiKey,i),this.fullPersistenceKey=to("persistence",s.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Yn._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Sr(tn(Mh),e,r);const s=(await Promise.all(n.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let i=s[0]||tn(Mh);const o=to(r,e.config.apiKey,e.name);let a=null;for(const c of n)try{const u=await c._get(o);if(u){const h=Yn._fromJSON(e,u);c!==i&&(a=h),i=c;break}}catch{}const l=s.filter(c=>c._shouldAllowMigration);return!i._shouldAllowMigration||!l.length?new Sr(i,e,r):(i=l[0],a&&await i._set(o,a.toJSON()),await Promise.all(n.map(async c=>{if(c!==i)try{await c._remove(o)}catch{}})),new Sr(i,e,r))}}/**
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
 */function Lh(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(hp(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(cp(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(fp(e))return"Blackberry";if(pp(e))return"Webos";if(Oc(e))return"Safari";if((e.includes("chrome/")||up(e))&&!e.includes("edge/"))return"Chrome";if(dp(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function cp(t=ut()){return/firefox\//i.test(t)}function Oc(t=ut()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function up(t=ut()){return/crios\//i.test(t)}function hp(t=ut()){return/iemobile/i.test(t)}function dp(t=ut()){return/android/i.test(t)}function fp(t=ut()){return/blackberry/i.test(t)}function pp(t=ut()){return/webos/i.test(t)}function Xo(t=ut()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function OE(t=ut()){var e;return Xo(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function VE(){return Xv()&&document.documentMode===10}function gp(t=ut()){return Xo(t)||dp(t)||pp(t)||fp(t)||/windows phone/i.test(t)||hp(t)}function ME(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
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
 */function mp(t,e=[]){let n;switch(t){case"Browser":n=Lh(ut());break;case"Worker":n=`${Lh(ut())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Zr}/${r}`}/**
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
 */async function UE(t,e={}){return dn(t,"GET","/v2/passwordPolicy",Dn(t,e))}/**
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
 */class BE{constructor(e,n,r,s){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Uh(this),this.idTokenSubscription=new Uh(this),this.beforeStateQueue=new LE(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=rp,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=tn(n)),this._initializationPromise=this.queue(async()=>{var r,s;if(!this._deleted&&(this.persistenceManager=await Sr.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const r=await this.assertedPersistence.getCurrentUser();let s=r,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=s==null?void 0:s._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===a)&&(l!=null&&l.user)&&(s=l.user,i=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(s)}catch(o){s=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return W(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await wo(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=vE()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?De(e):null;return n&&W(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&W(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(tn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await UE(this),n=new $E(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new ai("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&tn(e)||this._popupRedirectResolver;W(n,this,"argument-error"),this.redirectPersistenceManager=await Sr.create(this,[tn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,s){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(W(a,this,"internal-error"),a.then(()=>{o||i(this.currentUser)}),typeof n=="function"){const l=e.addObserver(n,r,s);return()=>{o=!0,l()}}else{const l=e.addObserver(n);return()=>{o=!0,l()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return W(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=mp(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const s=await this._getAppCheckToken();return s&&(n["X-Firebase-AppCheck"]=s),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&gE(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Nn(t){return De(t)}class Uh{constructor(e){this.auth=e,this.observer=null,this.addObserver=iw(n=>this.observer=n)}get next(){return W(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */function jE(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function _p(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=s=>{const i=Kt("internal-error");i.customData=s,n(i)},r.type="text/javascript",r.charset="UTF-8",jE().appendChild(r)})}function qE(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const KE="https://www.google.com/recaptcha/enterprise.js?render=",HE="recaptcha-enterprise",WE="NO_RECAPTCHA";class zE{constructor(e){this.type=HE,this.auth=Nn(e)}async verify(e="verify",n=!1){async function r(i){if(!n){if(i.tenantId==null&&i._agentRecaptchaConfig!=null)return i._agentRecaptchaConfig.siteKey;if(i.tenantId!=null&&i._tenantRecaptchaConfigs[i.tenantId]!==void 0)return i._tenantRecaptchaConfigs[i.tenantId].siteKey}return new Promise(async(o,a)=>{TE(i,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const c=new fE(l);return i.tenantId==null?i._agentRecaptchaConfig=c:i._tenantRecaptchaConfigs[i.tenantId]=c,o(c.siteKey)}}).catch(l=>{a(l)})})}function s(i,o,a){const l=window.grecaptcha;Nh(l)?l.enterprise.ready(()=>{l.enterprise.execute(i,{action:e}).then(c=>{o(c)}).catch(()=>{o(WE)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((i,o)=>{r(this.auth).then(a=>{if(!n&&Nh(window.grecaptcha))s(a,i,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}_p(KE+a).then(()=>{s(a,i,o)}).catch(l=>{o(l)})}}).catch(a=>{o(a)})})}}async function $r(t,e,n,r=!1){const s=new zE(t);let i;try{i=await s.verify(n)}catch{i=await s.verify(n,!0)}const o=Object.assign({},e);return r?Object.assign(o,{captchaResp:i}):Object.assign(o,{captchaResponse:i}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}/**
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
 */function GE(t,e){const n=Pc(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),i=n.getOptions();if(_o(i,e??{}))return s;Dt(s,"already-initialized")}return n.initialize({options:e})}function QE(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(tn);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function YE(t,e,n){const r=Nn(t);W(r._canInitEmulator,r,"emulator-config-failed"),W(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!!(n!=null&&n.disableWarnings),i=yp(e),{host:o,port:a}=JE(e),l=a===null?"":`:${a}`;r.config.emulator={url:`${i}//${o}${l}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})}),s||XE()}function yp(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function JE(t){const e=yp(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:Fh(r.substr(i.length+1))}}else{const[i,o]=r.split(":");return{host:i,port:Fh(o)}}}function Fh(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function XE(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class Vc{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return en("not implemented")}_getIdTokenResponse(e){return en("not implemented")}_linkToIdToken(e,n){return en("not implemented")}_getReauthenticationResolver(e){return en("not implemented")}}async function vp(t,e){return dn(t,"POST","/v1/accounts:update",e)}/**
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
 */async function Wa(t,e){return ui(t,"POST","/v1/accounts:signInWithPassword",Dn(t,e))}async function ZE(t,e){return dn(t,"POST","/v1/accounts:sendOobCode",Dn(t,e))}async function za(t,e){return ZE(t,e)}/**
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
 */async function eI(t,e){return ui(t,"POST","/v1/accounts:signInWithEmailLink",Dn(t,e))}async function tI(t,e){return ui(t,"POST","/v1/accounts:signInWithEmailLink",Dn(t,e))}/**
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
 */class $s extends Vc{constructor(e,n,r,s=null){super("password",r),this._email=e,this._password=n,this._tenantId=s}static _fromEmailAndPassword(e,n){return new $s(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new $s(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){var n;switch(this.signInMethod){case"password":const r={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};if(!((n=e._getRecaptchaConfig())===null||n===void 0)&&n.emailPasswordEnabled){const s=await $r(e,r,"signInWithPassword");return Wa(e,s)}else return Wa(e,r).catch(async s=>{if(s.code==="auth/missing-recaptcha-token"){console.log("Sign-in with email address and password is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-in flow.");const i=await $r(e,r,"signInWithPassword");return Wa(e,i)}else return Promise.reject(s)});case"emailLink":return eI(e,{email:this._email,oobCode:this._password});default:Dt(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":return vp(e,{idToken:n,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return tI(e,{idToken:n,email:this._email,oobCode:this._password});default:Dt(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function xr(t,e){return ui(t,"POST","/v1/accounts:signInWithIdp",Dn(t,e))}/**
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
 */const nI="http://localhost";class sr extends Vc{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new sr(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Dt("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s}=n,i=Sc(n,["providerId","signInMethod"]);if(!r||!s)return null;const o=new sr(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return xr(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,xr(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,xr(e,n)}buildRequest(){const e={requestUri:nI,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=li(n)}return e}}/**
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
 */function rI(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function sI(t){const e=ps(gs(t)).link,n=e?ps(gs(e)).deep_link_id:null,r=ps(gs(t)).deep_link_id;return(r?ps(gs(r)).link:null)||r||n||e||t}class Mc{constructor(e){var n,r,s,i,o,a;const l=ps(gs(e)),c=(n=l.apiKey)!==null&&n!==void 0?n:null,u=(r=l.oobCode)!==null&&r!==void 0?r:null,h=rI((s=l.mode)!==null&&s!==void 0?s:null);W(c&&u&&h,"argument-error"),this.apiKey=c,this.operation=h,this.code=u,this.continueUrl=(i=l.continueUrl)!==null&&i!==void 0?i:null,this.languageCode=(o=l.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=l.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=sI(e);try{return new Mc(n)}catch{return null}}}/**
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
 */class es{constructor(){this.providerId=es.PROVIDER_ID}static credential(e,n){return $s._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=Mc.parseLink(n);return W(r,"argument-error"),$s._fromEmailAndCode(e,r.code,r.tenantId)}}es.PROVIDER_ID="password";es.EMAIL_PASSWORD_SIGN_IN_METHOD="password";es.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class wp{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class hi extends wp{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class _n extends hi{constructor(){super("facebook.com")}static credential(e){return sr._fromParams({providerId:_n.PROVIDER_ID,signInMethod:_n.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return _n.credentialFromTaggedObject(e)}static credentialFromError(e){return _n.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return _n.credential(e.oauthAccessToken)}catch{return null}}}_n.FACEBOOK_SIGN_IN_METHOD="facebook.com";_n.PROVIDER_ID="facebook.com";/**
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
 */class yn extends hi{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return sr._fromParams({providerId:yn.PROVIDER_ID,signInMethod:yn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return yn.credentialFromTaggedObject(e)}static credentialFromError(e){return yn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return yn.credential(n,r)}catch{return null}}}yn.GOOGLE_SIGN_IN_METHOD="google.com";yn.PROVIDER_ID="google.com";/**
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
 */class vn extends hi{constructor(){super("github.com")}static credential(e){return sr._fromParams({providerId:vn.PROVIDER_ID,signInMethod:vn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return vn.credentialFromTaggedObject(e)}static credentialFromError(e){return vn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return vn.credential(e.oauthAccessToken)}catch{return null}}}vn.GITHUB_SIGN_IN_METHOD="github.com";vn.PROVIDER_ID="github.com";/**
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
 */class wn extends hi{constructor(){super("twitter.com")}static credential(e,n){return sr._fromParams({providerId:wn.PROVIDER_ID,signInMethod:wn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return wn.credentialFromTaggedObject(e)}static credentialFromError(e){return wn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return wn.credential(n,r)}catch{return null}}}wn.TWITTER_SIGN_IN_METHOD="twitter.com";wn.PROVIDER_ID="twitter.com";/**
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
 */async function Ga(t,e){return ui(t,"POST","/v1/accounts:signUp",Dn(t,e))}/**
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
 */class ir{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,s=!1){const i=await Yn._fromIdTokenResponse(e,r,s),o=$h(r);return new ir({user:i,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const s=$h(r);return new ir({user:e,providerId:s,_tokenResponse:r,operationType:n})}}function $h(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class Eo extends hn{constructor(e,n,r,s){var i;super(n.code,n.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,Eo.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,s){return new Eo(e,n,r,s)}}function Ep(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?Eo._fromErrorAndOperation(t,i,e,r):i})}async function iI(t,e,n=!1){const r=await rr(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return ir._forOperation(t,"link",r)}/**
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
 */async function oI(t,e,n=!1){const{auth:r}=t,s="reauthenticate";try{const i=await rr(t,Ep(r,s,e,t),n);W(i.idToken,r,"internal-error");const o=Nc(i.idToken);W(o,r,"internal-error");const{sub:a}=o;return W(t.uid===a,r,"user-mismatch"),ir._forOperation(t,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&Dt(r,"user-mismatch"),i}}/**
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
 */async function Ip(t,e,n=!1){const r="signIn",s=await Ep(t,r,e),i=await ir._fromIdTokenResponse(t,r,s);return n||await t._updateCurrentUser(i.user),i}async function aI(t,e){return Ip(Nn(t),e)}/**
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
 */function Qa(t,e,n){var r;W(((r=n.url)===null||r===void 0?void 0:r.length)>0,t,"invalid-continue-uri"),W(typeof n.dynamicLinkDomain>"u"||n.dynamicLinkDomain.length>0,t,"invalid-dynamic-link-domain"),e.continueUrl=n.url,e.dynamicLinkDomain=n.dynamicLinkDomain,e.canHandleCodeInApp=n.handleCodeInApp,n.iOS&&(W(n.iOS.bundleId.length>0,t,"missing-ios-bundle-id"),e.iOSBundleId=n.iOS.bundleId),n.android&&(W(n.android.packageName.length>0,t,"missing-android-pkg-name"),e.androidInstallApp=n.android.installApp,e.androidMinimumVersionCode=n.android.minimumVersion,e.androidPackageName=n.android.packageName)}/**
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
 */async function Tp(t){const e=Nn(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function lI(t,e,n){var r;const s=Nn(t),i={requestType:"PASSWORD_RESET",email:e,clientType:"CLIENT_TYPE_WEB"};if(!((r=s._getRecaptchaConfig())===null||r===void 0)&&r.emailPasswordEnabled){const o=await $r(s,i,"getOobCode",!0);n&&Qa(s,o,n),await za(s,o)}else n&&Qa(s,i,n),await za(s,i).catch(async o=>{if(o.code==="auth/missing-recaptcha-token"){console.log("Password resets are protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the password reset flow.");const a=await $r(s,i,"getOobCode",!0);n&&Qa(s,a,n),await za(s,a)}else return Promise.reject(o)})}async function cI(t,e,n){var r;const s=Nn(t),i={returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"};let o;if(!((r=s._getRecaptchaConfig())===null||r===void 0)&&r.emailPasswordEnabled){const c=await $r(s,i,"signUpPassword");o=Ga(s,c)}else o=Ga(s,i).catch(async c=>{if(c.code==="auth/missing-recaptcha-token"){console.log("Sign-up is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-up flow.");const u=await $r(s,i,"signUpPassword");return Ga(s,u)}throw c});const a=await o.catch(c=>{throw c.code==="auth/password-does-not-meet-requirements"&&Tp(t),c}),l=await ir._fromIdTokenResponse(s,"signIn",a);return await s._updateCurrentUser(l.user),l}function uI(t,e,n){return aI(De(t),es.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&Tp(t),r})}/**
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
 */async function hI(t,e){return dn(t,"POST","/v1/accounts:update",e)}/**
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
 */async function bp(t,{displayName:e,photoURL:n}){if(e===void 0&&n===void 0)return;const r=De(t),i={idToken:await r.getIdToken(),displayName:e,photoUrl:n,returnSecureToken:!0},o=await rr(r,hI(r.auth,i));r.displayName=o.displayName||null,r.photoURL=o.photoUrl||null;const a=r.providerData.find(({providerId:l})=>l==="password");a&&(a.displayName=r.displayName,a.photoURL=r.photoURL),await r._updateTokensIfNecessary(o)}function dI(t,e){return Ap(De(t),e,null)}function fI(t,e){return Ap(De(t),null,e)}async function Ap(t,e,n){const{auth:r}=t,i={idToken:await t.getIdToken(),returnSecureToken:!0};e&&(i.email=e),n&&(i.password=n);const o=await rr(t,vp(r,i));await t._updateTokensIfNecessary(o,!0)}function pI(t,e,n,r){return De(t).onIdTokenChanged(e,n,r)}function gI(t,e,n){return De(t).beforeAuthStateChanged(e,n)}function mI(t,e,n,r){return De(t).onAuthStateChanged(e,n,r)}function _I(t){return De(t).signOut()}async function yI(t){return De(t).delete()}const Io="__sak";/**
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
 */class Rp{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Io,"1"),this.storage.removeItem(Io),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */function vI(){const t=ut();return Oc(t)||Xo(t)}const wI=1e3,EI=10;class kp extends Rp{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=vI()&&ME(),this.fallbackToPolling=gp(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),s=this.localCache[n];r!==s&&e(n,s,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const s=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);VE()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,EI):s()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},wI)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}kp.type="LOCAL";const II=kp;/**
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
 */class Cp extends Rp{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}Cp.type="SESSION";const Pp=Cp;/**
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
 */function TI(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class Zo{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const r=new Zo(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:s,data:i}=n.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const a=Array.from(o).map(async c=>c(n.origin,i)),l=await TI(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Zo.receivers=[];/**
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
 */function Lc(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class bI{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((a,l)=>{const c=Lc("",20);s.port1.start();const u=setTimeout(()=>{l(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(h){const d=h;if(d.data.eventId===c)switch(d.data.status){case"ack":clearTimeout(u),i=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),a(d.data.response);break;default:clearTimeout(u),clearTimeout(i),l(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:c,data:n},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function Ht(){return window}function AI(t){Ht().location.href=t}/**
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
 */function Sp(){return typeof Ht().WorkerGlobalScope<"u"&&typeof Ht().importScripts=="function"}async function RI(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function kI(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function CI(){return Sp()?self:null}/**
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
 */const xp="firebaseLocalStorageDb",PI=1,To="firebaseLocalStorage",Dp="fbase_key";class di{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function ea(t,e){return t.transaction([To],e?"readwrite":"readonly").objectStore(To)}function SI(){const t=indexedDB.deleteDatabase(xp);return new di(t).toPromise()}function Dl(){const t=indexedDB.open(xp,PI);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(To,{keyPath:Dp})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(To)?e(r):(r.close(),await SI(),e(await Dl()))})})}async function Bh(t,e,n){const r=ea(t,!0).put({[Dp]:e,value:n});return new di(r).toPromise()}async function xI(t,e){const n=ea(t,!1).get(e),r=await new di(n).toPromise();return r===void 0?null:r.value}function jh(t,e){const n=ea(t,!0).delete(e);return new di(n).toPromise()}const DI=800,NI=3;class Np{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Dl(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>NI)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Sp()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Zo._getInstance(CI()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await RI(),!this.activeServiceWorker)return;this.sender=new bI(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||kI()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Dl();return await Bh(e,Io,"1"),await jh(e,Io),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Bh(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>xI(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>jh(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=ea(s,!1).getAll();return new di(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),DI)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Np.type="LOCAL";const OI=Np;new ci(3e4,6e4);/**
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
 */function VI(t,e){return e?tn(e):(W(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class Uc extends Vc{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return xr(e,this._buildIdpRequest())}_linkToIdToken(e,n){return xr(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return xr(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function MI(t){return Ip(t.auth,new Uc(t),t.bypassAuthState)}function LI(t){const{auth:e,user:n}=t;return W(n,e,"internal-error"),oI(n,new Uc(t),t.bypassAuthState)}async function UI(t){const{auth:e,user:n}=t;return W(n,e,"internal-error"),iI(n,new Uc(t),t.bypassAuthState)}/**
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
 */class Op{constructor(e,n,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:s,tenantId:i,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return MI;case"linkViaPopup":case"linkViaRedirect":return UI;case"reauthViaPopup":case"reauthViaRedirect":return LI;default:Dt(this.auth,"internal-error")}}resolve(e){on(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){on(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const FI=new ci(2e3,1e4);class br extends Op{constructor(e,n,r,s,i){super(e,n,s,i),this.provider=r,this.authWindow=null,this.pollId=null,br.currentPopupAction&&br.currentPopupAction.cancel(),br.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return W(e,this.auth,"internal-error"),e}async onExecution(){on(this.filter.length===1,"Popup operations only handle one event");const e=Lc();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Kt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Kt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,br.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Kt(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,FI.get())};e()}}br.currentPopupAction=null;/**
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
 */const $I="pendingRedirect",no=new Map;class BI extends Op{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=no.get(this.auth._key());if(!e){try{const r=await jI(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}no.set(this.auth._key(),e)}return this.bypassAuthState||no.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function jI(t,e){const n=HI(e),r=KI(t);if(!await r._isAvailable())return!1;const s=await r._get(n)==="true";return await r._remove(n),s}function qI(t,e){no.set(t._key(),e)}function KI(t){return tn(t._redirectPersistence)}function HI(t){return to($I,t.config.apiKey,t.name)}async function WI(t,e,n=!1){const r=Nn(t),s=VI(r,e),o=await new BI(r,s,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
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
 */const zI=10*60*1e3;class GI{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!QI(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!Vp(e)){const s=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(Kt(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=zI&&this.cachedEventUids.clear(),this.cachedEventUids.has(qh(e))}saveEventToCache(e){this.cachedEventUids.add(qh(e)),this.lastProcessedEventTime=Date.now()}}function qh(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function Vp({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function QI(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Vp(t);default:return!1}}/**
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
 */async function YI(t,e={}){return dn(t,"GET","/v1/projects",e)}/**
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
 */const JI=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,XI=/^https?/;async function ZI(t){if(t.config.emulator)return;const{authorizedDomains:e}=await YI(t);for(const n of e)try{if(eT(n))return}catch{}Dt(t,"unauthorized-domain")}function eT(t){const e=xl(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!XI.test(n))return!1;if(JI.test(t))return r===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
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
 */const tT=new ci(3e4,6e4);function Kh(){const t=Ht().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function nT(t){return new Promise((e,n)=>{var r,s,i;function o(){Kh(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Kh(),n(Kt(t,"network-request-failed"))},timeout:tT.get()})}if(!((s=(r=Ht().gapi)===null||r===void 0?void 0:r.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((i=Ht().gapi)===null||i===void 0)&&i.load)o();else{const a=qE("iframefcb");return Ht()[a]=()=>{gapi.load?o():n(Kt(t,"network-request-failed"))},_p(`https://apis.google.com/js/api.js?onload=${a}`).catch(l=>n(l))}}).catch(e=>{throw ro=null,e})}let ro=null;function rT(t){return ro=ro||nT(t),ro}/**
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
 */const sT=new ci(5e3,15e3),iT="__/auth/iframe",oT="emulator/auth/iframe",aT={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},lT=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function cT(t){const e=t.config;W(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Dc(e,oT):`https://${t.config.authDomain}/${iT}`,r={apiKey:e.apiKey,appName:t.name,v:Zr},s=lT.get(t.config.apiHost);s&&(r.eid=s);const i=t._getFrameworks();return i.length&&(r.fw=i.join(",")),`${n}?${li(r).slice(1)}`}async function uT(t){const e=await rT(t),n=Ht().gapi;return W(n,t,"internal-error"),e.open({where:document.body,url:cT(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:aT,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=Kt(t,"network-request-failed"),a=Ht().setTimeout(()=>{i(o)},sT.get());function l(){Ht().clearTimeout(a),s(r)}r.ping(l).then(l,()=>{i(o)})}))}/**
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
 */const hT={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},dT=500,fT=600,pT="_blank",gT="http://localhost";class Hh{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function mT(t,e,n,r=dT,s=fT){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const l=Object.assign(Object.assign({},hT),{width:r.toString(),height:s.toString(),top:i,left:o}),c=ut().toLowerCase();n&&(a=up(c)?pT:n),cp(c)&&(e=e||gT,l.scrollbars="yes");const u=Object.entries(l).reduce((d,[f,w])=>`${d}${f}=${w},`,"");if(OE(c)&&a!=="_self")return _T(e||"",a),new Hh(null);const h=window.open(e||"",a,u);W(h,t,"popup-blocked");try{h.focus()}catch{}return new Hh(h)}function _T(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const yT="__/auth/handler",vT="emulator/auth/handler",wT=encodeURIComponent("fac");async function Wh(t,e,n,r,s,i){W(t.config.authDomain,t,"auth-domain-config-required"),W(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Zr,eventId:s};if(e instanceof wp){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",sw(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[u,h]of Object.entries(i||{}))o[u]=h}if(e instanceof hi){const u=e.getScopes().filter(h=>h!=="");u.length>0&&(o.scopes=u.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const u of Object.keys(a))a[u]===void 0&&delete a[u];const l=await t._getAppCheckToken(),c=l?`#${wT}=${encodeURIComponent(l)}`:"";return`${ET(t)}?${li(a).slice(1)}${c}`}function ET({config:t}){return t.emulator?Dc(t,vT):`https://${t.authDomain}/${yT}`}/**
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
 */const Ya="webStorageSupport";class IT{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Pp,this._completeRedirectFn=WI,this._overrideRedirectResult=qI}async _openPopup(e,n,r,s){var i;on((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=await Wh(e,n,r,xl(),s);return mT(e,o,Lc())}async _openRedirect(e,n,r,s){await this._originValidation(e);const i=await Wh(e,n,r,xl(),s);return AI(i),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:i}=this.eventManagers[n];return s?Promise.resolve(s):(on(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await uT(e),r=new GI(e);return n.register("authEvent",s=>(W(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Ya,{type:Ya},s=>{var i;const o=(i=s==null?void 0:s[0])===null||i===void 0?void 0:i[Ya];o!==void 0&&n(!!o),Dt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=ZI(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return gp()||Oc()||Xo()}}const TT=IT;var zh="@firebase/auth",Gh="1.3.0";/**
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
 */class bT{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){W(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function AT(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function RT(t){Fr(new tr("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;W(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const l={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:mp(t)},c=new BE(r,s,i,l);return QE(c,n),c},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Fr(new tr("auth-internal",e=>{const n=Nn(e.getProvider("auth").getImmediate());return(r=>new bT(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Rn(zh,Gh,AT(t)),Rn(zh,Gh,"esm2017")}/**
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
 */const kT=5*60,CT=Qf("authIdTokenMaxAge")||kT;let Qh=null;const PT=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>CT)return;const s=n==null?void 0:n.token;Qh!==s&&(Qh=s,await fetch(t,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function ST(t=Zf()){const e=Pc(t,"auth");if(e.isInitialized())return e.getImmediate();const n=GE(t,{popupRedirectResolver:TT,persistence:[OI,II,Pp]}),r=Qf("authTokenSyncURL");if(r){const i=PT(r);gI(n,i,()=>i(n.currentUser)),pI(n,o=>i(o))}const s=zf("auth");return s&&YE(n,`http://${s}`),n}RT("Browser");var xT=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},D,Fc=Fc||{},Q=xT||self;function ta(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function fi(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function DT(t){return Object.prototype.hasOwnProperty.call(t,Ja)&&t[Ja]||(t[Ja]=++NT)}var Ja="closure_uid_"+(1e9*Math.random()>>>0),NT=0;function OT(t,e,n){return t.call.apply(t.bind,arguments)}function VT(t,e,n){if(!t)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var s=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(s,r),t.apply(e,s)}}return function(){return t.apply(e,arguments)}}function at(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?at=OT:at=VT,at.apply(null,arguments)}function Ui(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var r=n.slice();return r.push.apply(r,arguments),t.apply(this,r)}}function He(t,e){function n(){}n.prototype=e.prototype,t.$=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.ac=function(r,s,i){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[s].apply(r,o)}}function On(){this.s=this.s,this.o=this.o}var MT=0;On.prototype.s=!1;On.prototype.sa=function(){!this.s&&(this.s=!0,this.N(),MT!=0)&&DT(this)};On.prototype.N=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const Mp=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1};function $c(t){const e=t.length;if(0<e){const n=Array(e);for(let r=0;r<e;r++)n[r]=t[r];return n}return[]}function Yh(t,e){for(let n=1;n<arguments.length;n++){const r=arguments[n];if(ta(r)){const s=t.length||0,i=r.length||0;t.length=s+i;for(let o=0;o<i;o++)t[s+o]=r[o]}else t.push(r)}}function lt(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}lt.prototype.h=function(){this.defaultPrevented=!0};var LT=function(){if(!Q.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{Q.addEventListener("test",()=>{},e),Q.removeEventListener("test",()=>{},e)}catch{}return t}();function Bs(t){return/^[\s\xa0]*$/.test(t)}function na(){var t=Q.navigator;return t&&(t=t.userAgent)?t:""}function Bt(t){return na().indexOf(t)!=-1}function Bc(t){return Bc[" "](t),t}Bc[" "]=function(){};function UT(t,e){var n=S0;return Object.prototype.hasOwnProperty.call(n,t)?n[t]:n[t]=e(t)}var FT=Bt("Opera"),Br=Bt("Trident")||Bt("MSIE"),Lp=Bt("Edge"),Nl=Lp||Br,Up=Bt("Gecko")&&!(na().toLowerCase().indexOf("webkit")!=-1&&!Bt("Edge"))&&!(Bt("Trident")||Bt("MSIE"))&&!Bt("Edge"),$T=na().toLowerCase().indexOf("webkit")!=-1&&!Bt("Edge");function Fp(){var t=Q.document;return t?t.documentMode:void 0}var Ol;e:{var Xa="",Za=function(){var t=na();if(Up)return/rv:([^\);]+)(\)|;)/.exec(t);if(Lp)return/Edge\/([\d\.]+)/.exec(t);if(Br)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if($T)return/WebKit\/(\S+)/.exec(t);if(FT)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(Za&&(Xa=Za?Za[1]:""),Br){var el=Fp();if(el!=null&&el>parseFloat(Xa)){Ol=String(el);break e}}Ol=Xa}var Vl;if(Q.document&&Br){var Jh=Fp();Vl=Jh||parseInt(Ol,10)||void 0}else Vl=void 0;var BT=Vl;function js(t,e){if(lt.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,r=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(Up){e:{try{Bc(e.nodeName);var s=!0;break e}catch{}s=!1}s||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,r?(this.clientX=r.clientX!==void 0?r.clientX:r.pageX,this.clientY=r.clientY!==void 0?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:jT[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&js.$.h.call(this)}}He(js,lt);var jT={2:"touch",3:"pen",4:"mouse"};js.prototype.h=function(){js.$.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var pi="closure_listenable_"+(1e6*Math.random()|0),qT=0;function KT(t,e,n,r,s){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!r,this.la=s,this.key=++qT,this.fa=this.ia=!1}function ra(t){t.fa=!0,t.listener=null,t.proxy=null,t.src=null,t.la=null}function jc(t,e,n){for(const r in t)e.call(n,t[r],r,t)}function HT(t,e){for(const n in t)e.call(void 0,t[n],n,t)}function $p(t){const e={};for(const n in t)e[n]=t[n];return e}const Xh="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Bp(t,e){let n,r;for(let s=1;s<arguments.length;s++){r=arguments[s];for(n in r)t[n]=r[n];for(let i=0;i<Xh.length;i++)n=Xh[i],Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}}function sa(t){this.src=t,this.g={},this.h=0}sa.prototype.add=function(t,e,n,r,s){var i=t.toString();t=this.g[i],t||(t=this.g[i]=[],this.h++);var o=Ll(t,e,r,s);return-1<o?(e=t[o],n||(e.ia=!1)):(e=new KT(e,this.src,i,!!r,s),e.ia=n,t.push(e)),e};function Ml(t,e){var n=e.type;if(n in t.g){var r=t.g[n],s=Mp(r,e),i;(i=0<=s)&&Array.prototype.splice.call(r,s,1),i&&(ra(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function Ll(t,e,n,r){for(var s=0;s<t.length;++s){var i=t[s];if(!i.fa&&i.listener==e&&i.capture==!!n&&i.la==r)return s}return-1}var qc="closure_lm_"+(1e6*Math.random()|0),tl={};function jp(t,e,n,r,s){if(r&&r.once)return Kp(t,e,n,r,s);if(Array.isArray(e)){for(var i=0;i<e.length;i++)jp(t,e[i],n,r,s);return null}return n=Wc(n),t&&t[pi]?t.O(e,n,fi(r)?!!r.capture:!!r,s):qp(t,e,n,!1,r,s)}function qp(t,e,n,r,s,i){if(!e)throw Error("Invalid event type");var o=fi(s)?!!s.capture:!!s,a=Hc(t);if(a||(t[qc]=a=new sa(t)),n=a.add(e,n,r,o,i),n.proxy)return n;if(r=WT(),n.proxy=r,r.src=t,r.listener=n,t.addEventListener)LT||(s=o),s===void 0&&(s=!1),t.addEventListener(e.toString(),r,s);else if(t.attachEvent)t.attachEvent(Wp(e.toString()),r);else if(t.addListener&&t.removeListener)t.addListener(r);else throw Error("addEventListener and attachEvent are unavailable.");return n}function WT(){function t(n){return e.call(t.src,t.listener,n)}const e=zT;return t}function Kp(t,e,n,r,s){if(Array.isArray(e)){for(var i=0;i<e.length;i++)Kp(t,e[i],n,r,s);return null}return n=Wc(n),t&&t[pi]?t.P(e,n,fi(r)?!!r.capture:!!r,s):qp(t,e,n,!0,r,s)}function Hp(t,e,n,r,s){if(Array.isArray(e))for(var i=0;i<e.length;i++)Hp(t,e[i],n,r,s);else r=fi(r)?!!r.capture:!!r,n=Wc(n),t&&t[pi]?(t=t.i,e=String(e).toString(),e in t.g&&(i=t.g[e],n=Ll(i,n,r,s),-1<n&&(ra(i[n]),Array.prototype.splice.call(i,n,1),i.length==0&&(delete t.g[e],t.h--)))):t&&(t=Hc(t))&&(e=t.g[e.toString()],t=-1,e&&(t=Ll(e,n,r,s)),(n=-1<t?e[t]:null)&&Kc(n))}function Kc(t){if(typeof t!="number"&&t&&!t.fa){var e=t.src;if(e&&e[pi])Ml(e.i,t);else{var n=t.type,r=t.proxy;e.removeEventListener?e.removeEventListener(n,r,t.capture):e.detachEvent?e.detachEvent(Wp(n),r):e.addListener&&e.removeListener&&e.removeListener(r),(n=Hc(e))?(Ml(n,t),n.h==0&&(n.src=null,e[qc]=null)):ra(t)}}}function Wp(t){return t in tl?tl[t]:tl[t]="on"+t}function zT(t,e){if(t.fa)t=!0;else{e=new js(e,this);var n=t.listener,r=t.la||t.src;t.ia&&Kc(t),t=n.call(r,e)}return t}function Hc(t){return t=t[qc],t instanceof sa?t:null}var nl="__closure_events_fn_"+(1e9*Math.random()>>>0);function Wc(t){return typeof t=="function"?t:(t[nl]||(t[nl]=function(e){return t.handleEvent(e)}),t[nl])}function Ke(){On.call(this),this.i=new sa(this),this.S=this,this.J=null}He(Ke,On);Ke.prototype[pi]=!0;Ke.prototype.removeEventListener=function(t,e,n,r){Hp(this,t,e,n,r)};function Je(t,e){var n,r=t.J;if(r)for(n=[];r;r=r.J)n.push(r);if(t=t.S,r=e.type||e,typeof e=="string")e=new lt(e,t);else if(e instanceof lt)e.target=e.target||t;else{var s=e;e=new lt(r,t),Bp(e,s)}if(s=!0,n)for(var i=n.length-1;0<=i;i--){var o=e.g=n[i];s=Fi(o,r,!0,e)&&s}if(o=e.g=t,s=Fi(o,r,!0,e)&&s,s=Fi(o,r,!1,e)&&s,n)for(i=0;i<n.length;i++)o=e.g=n[i],s=Fi(o,r,!1,e)&&s}Ke.prototype.N=function(){if(Ke.$.N.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],r=0;r<n.length;r++)ra(n[r]);delete t.g[e],t.h--}}this.J=null};Ke.prototype.O=function(t,e,n,r){return this.i.add(String(t),e,!1,n,r)};Ke.prototype.P=function(t,e,n,r){return this.i.add(String(t),e,!0,n,r)};function Fi(t,e,n,r){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var s=!0,i=0;i<e.length;++i){var o=e[i];if(o&&!o.fa&&o.capture==n){var a=o.listener,l=o.la||o.src;o.ia&&Ml(t.i,o),s=a.call(l,r)!==!1&&s}}return s&&!r.defaultPrevented}var zc=Q.JSON.stringify;class GT{constructor(e,n){this.i=e,this.j=n,this.h=0,this.g=null}get(){let e;return 0<this.h?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e}}function QT(){var t=Gc;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class YT{constructor(){this.h=this.g=null}add(e,n){const r=zp.get();r.set(e,n),this.h?this.h.next=r:this.g=r,this.h=r}}var zp=new GT(()=>new JT,t=>t.reset());class JT{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function XT(t){var e=1;t=t.split(":");const n=[];for(;0<e&&t.length;)n.push(t.shift()),e--;return t.length&&n.push(t.join(":")),n}function ZT(t){Q.setTimeout(()=>{throw t},0)}let qs,Ks=!1,Gc=new YT,Gp=()=>{const t=Q.Promise.resolve(void 0);qs=()=>{t.then(e0)}};var e0=()=>{for(var t;t=QT();){try{t.h.call(t.g)}catch(n){ZT(n)}var e=zp;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}Ks=!1};function ia(t,e){Ke.call(this),this.h=t||1,this.g=e||Q,this.j=at(this.qb,this),this.l=Date.now()}He(ia,Ke);D=ia.prototype;D.ga=!1;D.T=null;D.qb=function(){if(this.ga){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.T=this.g.setTimeout(this.j,this.h-t):(this.T&&(this.g.clearTimeout(this.T),this.T=null),Je(this,"tick"),this.ga&&(Qc(this),this.start()))}};D.start=function(){this.ga=!0,this.T||(this.T=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function Qc(t){t.ga=!1,t.T&&(t.g.clearTimeout(t.T),t.T=null)}D.N=function(){ia.$.N.call(this),Qc(this),delete this.g};function Yc(t,e,n){if(typeof t=="function")n&&(t=at(t,n));else if(t&&typeof t.handleEvent=="function")t=at(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:Q.setTimeout(t,e||0)}function Qp(t){t.g=Yc(()=>{t.g=null,t.i&&(t.i=!1,Qp(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class t0 extends On{constructor(e,n){super(),this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:Qp(this)}N(){super.N(),this.g&&(Q.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Hs(t){On.call(this),this.h=t,this.g={}}He(Hs,On);var Zh=[];function Yp(t,e,n,r){Array.isArray(n)||(n&&(Zh[0]=n.toString()),n=Zh);for(var s=0;s<n.length;s++){var i=jp(e,n[s],r||t.handleEvent,!1,t.h||t);if(!i)break;t.g[i.key]=i}}function Jp(t){jc(t.g,function(e,n){this.g.hasOwnProperty(n)&&Kc(e)},t),t.g={}}Hs.prototype.N=function(){Hs.$.N.call(this),Jp(this)};Hs.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function oa(){this.g=!0}oa.prototype.Ea=function(){this.g=!1};function n0(t,e,n,r,s,i){t.info(function(){if(t.g)if(i)for(var o="",a=i.split("&"),l=0;l<a.length;l++){var c=a[l].split("=");if(1<c.length){var u=c[0];c=c[1];var h=u.split("_");o=2<=h.length&&h[1]=="type"?o+(u+"="+c+"&"):o+(u+"=redacted&")}}else o=null;else o=i;return"XMLHTTP REQ ("+r+") [attempt "+s+"]: "+e+`
`+n+`
`+o})}function r0(t,e,n,r,s,i,o){t.info(function(){return"XMLHTTP RESP ("+r+") [ attempt "+s+"]: "+e+`
`+n+`
`+i+" "+o})}function Ar(t,e,n,r){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+i0(t,n)+(r?" "+r:"")})}function s0(t,e){t.info(function(){return"TIMEOUT: "+e})}oa.prototype.info=function(){};function i0(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var r=n[t];if(!(2>r.length)){var s=r[1];if(Array.isArray(s)&&!(1>s.length)){var i=s[0];if(i!="noop"&&i!="stop"&&i!="close")for(var o=1;o<s.length;o++)s[o]=""}}}}return zc(n)}catch{return e}}var cr={},ed=null;function aa(){return ed=ed||new Ke}cr.Ta="serverreachability";function Xp(t){lt.call(this,cr.Ta,t)}He(Xp,lt);function Ws(t){const e=aa();Je(e,new Xp(e))}cr.STAT_EVENT="statevent";function Zp(t,e){lt.call(this,cr.STAT_EVENT,t),this.stat=e}He(Zp,lt);function ft(t){const e=aa();Je(e,new Zp(e,t))}cr.Ua="timingevent";function eg(t,e){lt.call(this,cr.Ua,t),this.size=e}He(eg,lt);function gi(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return Q.setTimeout(function(){t()},e)}var la={NO_ERROR:0,rb:1,Eb:2,Db:3,yb:4,Cb:5,Fb:6,Qa:7,TIMEOUT:8,Ib:9},tg={wb:"complete",Sb:"success",Ra:"error",Qa:"abort",Kb:"ready",Lb:"readystatechange",TIMEOUT:"timeout",Gb:"incrementaldata",Jb:"progress",zb:"downloadprogress",$b:"uploadprogress"};function Jc(){}Jc.prototype.h=null;function td(t){return t.h||(t.h=t.i())}function ng(){}var mi={OPEN:"a",vb:"b",Ra:"c",Hb:"d"};function Xc(){lt.call(this,"d")}He(Xc,lt);function Zc(){lt.call(this,"c")}He(Zc,lt);var Ul;function ca(){}He(ca,Jc);ca.prototype.g=function(){return new XMLHttpRequest};ca.prototype.i=function(){return{}};Ul=new ca;function _i(t,e,n,r){this.l=t,this.j=e,this.m=n,this.W=r||1,this.U=new Hs(this),this.P=o0,t=Nl?125:void 0,this.V=new ia(t),this.I=null,this.i=!1,this.s=this.A=this.v=this.L=this.G=this.Y=this.B=null,this.F=[],this.g=null,this.C=0,this.o=this.u=null,this.ca=-1,this.J=!1,this.O=0,this.M=null,this.ba=this.K=this.aa=this.S=!1,this.h=new rg}function rg(){this.i=null,this.g="",this.h=!1}var o0=45e3,Fl={},bo={};D=_i.prototype;D.setTimeout=function(t){this.P=t};function $l(t,e,n){t.L=1,t.v=ha(an(e)),t.s=n,t.S=!0,sg(t,null)}function sg(t,e){t.G=Date.now(),yi(t),t.A=an(t.v);var n=t.A,r=t.W;Array.isArray(r)||(r=[String(r)]),dg(n.i,"t",r),t.C=0,n=t.l.J,t.h=new rg,t.g=Ng(t.l,n?e:null,!t.s),0<t.O&&(t.M=new t0(at(t.Pa,t,t.g),t.O)),Yp(t.U,t.g,"readystatechange",t.nb),e=t.I?$p(t.I):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.ha(t.A,t.u,t.s,e)):(t.u="GET",t.g.ha(t.A,t.u,null,e)),Ws(),n0(t.j,t.u,t.A,t.m,t.W,t.s)}D.nb=function(t){t=t.target;const e=this.M;e&&jt(t)==3?e.l():this.Pa(t)};D.Pa=function(t){try{if(t==this.g)e:{const u=jt(this.g);var e=this.g.Ia();const h=this.g.da();if(!(3>u)&&(u!=3||Nl||this.g&&(this.h.h||this.g.ja()||id(this.g)))){this.J||u!=4||e==7||(e==8||0>=h?Ws(3):Ws(2)),ua(this);var n=this.g.da();this.ca=n;t:if(ig(this)){var r=id(this.g);t="";var s=r.length,i=jt(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Hn(this),bs(this);var o="";break t}this.h.i=new Q.TextDecoder}for(e=0;e<s;e++)this.h.h=!0,t+=this.h.i.decode(r[e],{stream:i&&e==s-1});r.splice(0,s),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.ja();if(this.i=n==200,r0(this.j,this.u,this.A,this.m,this.W,u,n),this.i){if(this.aa&&!this.K){t:{if(this.g){var a,l=this.g;if((a=l.g?l.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!Bs(a)){var c=a;break t}}c=null}if(n=c)Ar(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Bl(this,n);else{this.i=!1,this.o=3,ft(12),Hn(this),bs(this);break e}}this.S?(og(this,u,o),Nl&&this.i&&u==3&&(Yp(this.U,this.V,"tick",this.mb),this.V.start())):(Ar(this.j,this.m,o,null),Bl(this,o)),u==4&&Hn(this),this.i&&!this.J&&(u==4?Pg(this.l,this):(this.i=!1,yi(this)))}else k0(this.g),n==400&&0<o.indexOf("Unknown SID")?(this.o=3,ft(12)):(this.o=0,ft(13)),Hn(this),bs(this)}}}catch{}finally{}};function ig(t){return t.g?t.u=="GET"&&t.L!=2&&t.l.Ha:!1}function og(t,e,n){let r=!0,s;for(;!t.J&&t.C<n.length;)if(s=a0(t,n),s==bo){e==4&&(t.o=4,ft(14),r=!1),Ar(t.j,t.m,null,"[Incomplete Response]");break}else if(s==Fl){t.o=4,ft(15),Ar(t.j,t.m,n,"[Invalid Chunk]"),r=!1;break}else Ar(t.j,t.m,s,null),Bl(t,s);ig(t)&&s!=bo&&s!=Fl&&(t.h.g="",t.C=0),e!=4||n.length!=0||t.h.h||(t.o=1,ft(16),r=!1),t.i=t.i&&r,r?0<n.length&&!t.ba&&(t.ba=!0,e=t.l,e.g==t&&e.ca&&!e.M&&(e.l.info("Great, no buffering proxy detected. Bytes received: "+n.length),iu(e),e.M=!0,ft(11))):(Ar(t.j,t.m,n,"[Invalid Chunked Response]"),Hn(t),bs(t))}D.mb=function(){if(this.g){var t=jt(this.g),e=this.g.ja();this.C<e.length&&(ua(this),og(this,t,e),this.i&&t!=4&&yi(this))}};function a0(t,e){var n=t.C,r=e.indexOf(`
`,n);return r==-1?bo:(n=Number(e.substring(n,r)),isNaN(n)?Fl:(r+=1,r+n>e.length?bo:(e=e.slice(r,r+n),t.C=r+n,e)))}D.cancel=function(){this.J=!0,Hn(this)};function yi(t){t.Y=Date.now()+t.P,ag(t,t.P)}function ag(t,e){if(t.B!=null)throw Error("WatchDog timer not null");t.B=gi(at(t.lb,t),e)}function ua(t){t.B&&(Q.clearTimeout(t.B),t.B=null)}D.lb=function(){this.B=null;const t=Date.now();0<=t-this.Y?(s0(this.j,this.A),this.L!=2&&(Ws(),ft(17)),Hn(this),this.o=2,bs(this)):ag(this,this.Y-t)};function bs(t){t.l.H==0||t.J||Pg(t.l,t)}function Hn(t){ua(t);var e=t.M;e&&typeof e.sa=="function"&&e.sa(),t.M=null,Qc(t.V),Jp(t.U),t.g&&(e=t.g,t.g=null,e.abort(),e.sa())}function Bl(t,e){try{var n=t.l;if(n.H!=0&&(n.g==t||jl(n.i,t))){if(!t.K&&jl(n.i,t)&&n.H==3){try{var r=n.Ja.g.parse(e)}catch{r=null}if(Array.isArray(r)&&r.length==3){var s=r;if(s[0]==0){e:if(!n.u){if(n.g)if(n.g.G+3e3<t.G)ko(n),ga(n);else break e;su(n),ft(18)}}else n.Fa=s[1],0<n.Fa-n.V&&37500>s[2]&&n.G&&n.A==0&&!n.v&&(n.v=gi(at(n.ib,n),6e3));if(1>=gg(n.i)&&n.oa){try{n.oa()}catch{}n.oa=void 0}}else Wn(n,11)}else if((t.K||n.g==t)&&ko(n),!Bs(e))for(s=n.Ja.g.parse(e),e=0;e<s.length;e++){let c=s[e];if(n.V=c[0],c=c[1],n.H==2)if(c[0]=="c"){n.K=c[1],n.pa=c[2];const u=c[3];u!=null&&(n.ra=u,n.l.info("VER="+n.ra));const h=c[4];h!=null&&(n.Ga=h,n.l.info("SVER="+n.Ga));const d=c[5];d!=null&&typeof d=="number"&&0<d&&(r=1.5*d,n.L=r,n.l.info("backChannelRequestTimeoutMs_="+r)),r=n;const f=t.g;if(f){const w=f.g?f.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(w){var i=r.i;i.g||w.indexOf("spdy")==-1&&w.indexOf("quic")==-1&&w.indexOf("h2")==-1||(i.j=i.l,i.g=new Set,i.h&&(eu(i,i.h),i.h=null))}if(r.F){const y=f.g?f.g.getResponseHeader("X-HTTP-Session-Id"):null;y&&(r.Da=y,Ie(r.I,r.F,y))}}n.H=3,n.h&&n.h.Ba(),n.ca&&(n.S=Date.now()-t.G,n.l.info("Handshake RTT: "+n.S+"ms")),r=n;var o=t;if(r.wa=Dg(r,r.J?r.pa:null,r.Y),o.K){mg(r.i,o);var a=o,l=r.L;l&&a.setTimeout(l),a.B&&(ua(a),yi(a)),r.g=o}else kg(r);0<n.j.length&&ma(n)}else c[0]!="stop"&&c[0]!="close"||Wn(n,7);else n.H==3&&(c[0]=="stop"||c[0]=="close"?c[0]=="stop"?Wn(n,7):ru(n):c[0]!="noop"&&n.h&&n.h.Aa(c),n.A=0)}}Ws(4)}catch{}}function l0(t){if(t.Z&&typeof t.Z=="function")return t.Z();if(typeof Map<"u"&&t instanceof Map||typeof Set<"u"&&t instanceof Set)return Array.from(t.values());if(typeof t=="string")return t.split("");if(ta(t)){for(var e=[],n=t.length,r=0;r<n;r++)e.push(t[r]);return e}e=[],n=0;for(r in t)e[n++]=t[r];return e}function c0(t){if(t.ta&&typeof t.ta=="function")return t.ta();if(!t.Z||typeof t.Z!="function"){if(typeof Map<"u"&&t instanceof Map)return Array.from(t.keys());if(!(typeof Set<"u"&&t instanceof Set)){if(ta(t)||typeof t=="string"){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const r in t)e[n++]=r;return e}}}function lg(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(ta(t)||typeof t=="string")Array.prototype.forEach.call(t,e,void 0);else for(var n=c0(t),r=l0(t),s=r.length,i=0;i<s;i++)e.call(void 0,r[i],n&&n[i],t)}var cg=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function u0(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var r=t[n].indexOf("="),s=null;if(0<=r){var i=t[n].substring(0,r);s=t[n].substring(r+1)}else i=t[n];e(i,s?decodeURIComponent(s.replace(/\+/g," ")):"")}}}function Jn(t){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof Jn){this.h=t.h,Ao(this,t.j),this.s=t.s,this.g=t.g,Ro(this,t.m),this.l=t.l;var e=t.i,n=new zs;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),nd(this,n),this.o=t.o}else t&&(e=String(t).match(cg))?(this.h=!1,Ao(this,e[1]||"",!0),this.s=ms(e[2]||""),this.g=ms(e[3]||"",!0),Ro(this,e[4]),this.l=ms(e[5]||"",!0),nd(this,e[6]||"",!0),this.o=ms(e[7]||"")):(this.h=!1,this.i=new zs(null,this.h))}Jn.prototype.toString=function(){var t=[],e=this.j;e&&t.push(_s(e,rd,!0),":");var n=this.g;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(_s(e,rd,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&t.push("/"),t.push(_s(n,n.charAt(0)=="/"?f0:d0,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.o)&&t.push("#",_s(n,g0)),t.join("")};function an(t){return new Jn(t)}function Ao(t,e,n){t.j=n?ms(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function Ro(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function nd(t,e,n){e instanceof zs?(t.i=e,m0(t.i,t.h)):(n||(e=_s(e,p0)),t.i=new zs(e,t.h))}function Ie(t,e,n){t.i.set(e,n)}function ha(t){return Ie(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function ms(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function _s(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,h0),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function h0(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var rd=/[#\/\?@]/g,d0=/[#\?:]/g,f0=/[#\?]/g,p0=/[#\?@]/g,g0=/#/g;function zs(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function Vn(t){t.g||(t.g=new Map,t.h=0,t.i&&u0(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}D=zs.prototype;D.add=function(t,e){Vn(this),this.i=null,t=ts(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function ug(t,e){Vn(t),e=ts(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function hg(t,e){return Vn(t),e=ts(t,e),t.g.has(e)}D.forEach=function(t,e){Vn(this),this.g.forEach(function(n,r){n.forEach(function(s){t.call(e,s,r,this)},this)},this)};D.ta=function(){Vn(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let r=0;r<e.length;r++){const s=t[r];for(let i=0;i<s.length;i++)n.push(e[r])}return n};D.Z=function(t){Vn(this);let e=[];if(typeof t=="string")hg(this,t)&&(e=e.concat(this.g.get(ts(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e};D.set=function(t,e){return Vn(this),this.i=null,t=ts(this,t),hg(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};D.get=function(t,e){return t?(t=this.Z(t),0<t.length?String(t[0]):e):e};function dg(t,e,n){ug(t,e),0<n.length&&(t.i=null,t.g.set(ts(t,e),$c(n)),t.h+=n.length)}D.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var r=e[n];const i=encodeURIComponent(String(r)),o=this.Z(r);for(r=0;r<o.length;r++){var s=i;o[r]!==""&&(s+="="+encodeURIComponent(String(o[r]))),t.push(s)}}return this.i=t.join("&")};function ts(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function m0(t,e){e&&!t.j&&(Vn(t),t.i=null,t.g.forEach(function(n,r){var s=r.toLowerCase();r!=s&&(ug(this,r),dg(this,s,n))},t)),t.j=e}var _0=class{constructor(t,e){this.g=t,this.map=e}};function fg(t){this.l=t||y0,Q.PerformanceNavigationTiming?(t=Q.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(Q.g&&Q.g.Ka&&Q.g.Ka()&&Q.g.Ka().dc),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var y0=10;function pg(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function gg(t){return t.h?1:t.g?t.g.size:0}function jl(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function eu(t,e){t.g?t.g.add(e):t.h=e}function mg(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}fg.prototype.cancel=function(){if(this.i=_g(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function _g(t){if(t.h!=null)return t.i.concat(t.h.F);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.F);return e}return $c(t.i)}var v0=class{stringify(t){return Q.JSON.stringify(t,void 0)}parse(t){return Q.JSON.parse(t,void 0)}};function w0(){this.g=new v0}function E0(t,e,n){const r=n||"";try{lg(t,function(s,i){let o=s;fi(s)&&(o=zc(s)),e.push(r+i+"="+encodeURIComponent(o))})}catch(s){throw e.push(r+"type="+encodeURIComponent("_badmap")),s}}function I0(t,e){const n=new oa;if(Q.Image){const r=new Image;r.onload=Ui($i,n,r,"TestLoadImage: loaded",!0,e),r.onerror=Ui($i,n,r,"TestLoadImage: error",!1,e),r.onabort=Ui($i,n,r,"TestLoadImage: abort",!1,e),r.ontimeout=Ui($i,n,r,"TestLoadImage: timeout",!1,e),Q.setTimeout(function(){r.ontimeout&&r.ontimeout()},1e4),r.src=t}else e(!1)}function $i(t,e,n,r,s){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,s(r)}catch{}}function da(t){this.l=t.ec||null,this.j=t.ob||!1}He(da,Jc);da.prototype.g=function(){return new fa(this.l,this.j)};da.prototype.i=function(t){return function(){return t}}({});function fa(t,e){Ke.call(this),this.F=t,this.u=e,this.m=void 0,this.readyState=tu,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}He(fa,Ke);var tu=0;D=fa.prototype;D.open=function(t,e){if(this.readyState!=tu)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,Gs(this)};D.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.F||Q).fetch(new Request(this.B,e)).then(this.$a.bind(this),this.ka.bind(this))};D.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,vi(this)),this.readyState=tu};D.$a=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,Gs(this)),this.g&&(this.readyState=3,Gs(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ya.bind(this),this.ka.bind(this));else if(typeof Q.ReadableStream<"u"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;yg(this)}else t.text().then(this.Za.bind(this),this.ka.bind(this))};function yg(t){t.j.read().then(t.Xa.bind(t)).catch(t.ka.bind(t))}D.Xa=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?vi(this):Gs(this),this.readyState==3&&yg(this)}};D.Za=function(t){this.g&&(this.response=this.responseText=t,vi(this))};D.Ya=function(t){this.g&&(this.response=t,vi(this))};D.ka=function(){this.g&&vi(this)};function vi(t){t.readyState=4,t.l=null,t.j=null,t.A=null,Gs(t)}D.setRequestHeader=function(t,e){this.v.append(t,e)};D.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};D.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function Gs(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(fa.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var T0=Q.JSON.parse;function Ne(t){Ke.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.I="",this.m=0,this.j="",this.l=this.G=this.v=this.F=!1,this.B=0,this.A=null,this.K=vg,this.L=this.M=!1}He(Ne,Ke);var vg="",b0=/^https?$/i,A0=["POST","PUT"];D=Ne.prototype;D.Oa=function(t){this.M=t};D.ha=function(t,e,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.I+"; newUri="+t);e=e?e.toUpperCase():"GET",this.I=t,this.j="",this.m=0,this.F=!1,this.h=!0,this.g=this.u?this.u.g():Ul.g(),this.C=this.u?td(this.u):td(Ul),this.g.onreadystatechange=at(this.La,this);try{this.G=!0,this.g.open(e,String(t),!0),this.G=!1}catch(i){sd(this,i);return}if(t=n||"",n=new Map(this.headers),r)if(Object.getPrototypeOf(r)===Object.prototype)for(var s in r)n.set(s,r[s]);else if(typeof r.keys=="function"&&typeof r.get=="function")for(const i of r.keys())n.set(i,r.get(i));else throw Error("Unknown input type for opt_headers: "+String(r));r=Array.from(n.keys()).find(i=>i.toLowerCase()=="content-type"),s=Q.FormData&&t instanceof Q.FormData,!(0<=Mp(A0,e))||r||s||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[i,o]of n)this.g.setRequestHeader(i,o);this.K&&(this.g.responseType=this.K),"withCredentials"in this.g&&this.g.withCredentials!==this.M&&(this.g.withCredentials=this.M);try{Ig(this),0<this.B&&((this.L=R0(this.g))?(this.g.timeout=this.B,this.g.ontimeout=at(this.ua,this)):this.A=Yc(this.ua,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(i){sd(this,i)}};function R0(t){return Br&&typeof t.timeout=="number"&&t.ontimeout!==void 0}D.ua=function(){typeof Fc<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,Je(this,"timeout"),this.abort(8))};function sd(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,wg(t),pa(t)}function wg(t){t.F||(t.F=!0,Je(t,"complete"),Je(t,"error"))}D.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,Je(this,"complete"),Je(this,"abort"),pa(this))};D.N=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),pa(this,!0)),Ne.$.N.call(this)};D.La=function(){this.s||(this.G||this.v||this.l?Eg(this):this.kb())};D.kb=function(){Eg(this)};function Eg(t){if(t.h&&typeof Fc<"u"&&(!t.C[1]||jt(t)!=4||t.da()!=2)){if(t.v&&jt(t)==4)Yc(t.La,0,t);else if(Je(t,"readystatechange"),jt(t)==4){t.h=!1;try{const o=t.da();e:switch(o){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var r;if(r=o===0){var s=String(t.I).match(cg)[1]||null;!s&&Q.self&&Q.self.location&&(s=Q.self.location.protocol.slice(0,-1)),r=!b0.test(s?s.toLowerCase():"")}n=r}if(n)Je(t,"complete"),Je(t,"success");else{t.m=6;try{var i=2<jt(t)?t.g.statusText:""}catch{i=""}t.j=i+" ["+t.da()+"]",wg(t)}}finally{pa(t)}}}}function pa(t,e){if(t.g){Ig(t);const n=t.g,r=t.C[0]?()=>{}:null;t.g=null,t.C=null,e||Je(t,"ready");try{n.onreadystatechange=r}catch{}}}function Ig(t){t.g&&t.L&&(t.g.ontimeout=null),t.A&&(Q.clearTimeout(t.A),t.A=null)}D.isActive=function(){return!!this.g};function jt(t){return t.g?t.g.readyState:0}D.da=function(){try{return 2<jt(this)?this.g.status:-1}catch{return-1}};D.ja=function(){try{return this.g?this.g.responseText:""}catch{return""}};D.Wa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),T0(e)}};function id(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.K){case vg:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}function k0(t){const e={};t=(t.g&&2<=jt(t)&&t.g.getAllResponseHeaders()||"").split(`\r
`);for(let r=0;r<t.length;r++){if(Bs(t[r]))continue;var n=XT(t[r]);const s=n[0];if(n=n[1],typeof n!="string")continue;n=n.trim();const i=e[s]||[];e[s]=i,i.push(n)}HT(e,function(r){return r.join(", ")})}D.Ia=function(){return this.m};D.Sa=function(){return typeof this.j=="string"?this.j:String(this.j)};function Tg(t){let e="";return jc(t,function(n,r){e+=r,e+=":",e+=n,e+=`\r
`}),e}function nu(t,e,n){e:{for(r in n){var r=!1;break e}r=!0}r||(n=Tg(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):Ie(t,e,n))}function cs(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function bg(t){this.Ga=0,this.j=[],this.l=new oa,this.pa=this.wa=this.I=this.Y=this.g=this.Da=this.F=this.na=this.o=this.U=this.s=null,this.fb=this.W=0,this.cb=cs("failFast",!1,t),this.G=this.v=this.u=this.m=this.h=null,this.aa=!0,this.Fa=this.V=-1,this.ba=this.A=this.C=0,this.ab=cs("baseRetryDelayMs",5e3,t),this.hb=cs("retryDelaySeedMs",1e4,t),this.eb=cs("forwardChannelMaxRetries",2,t),this.xa=cs("forwardChannelRequestTimeoutMs",2e4,t),this.va=t&&t.xmlHttpFactory||void 0,this.Ha=t&&t.useFetchStreams||!1,this.L=void 0,this.J=t&&t.supportsCrossDomainXhr||!1,this.K="",this.i=new fg(t&&t.concurrentRequestLimit),this.Ja=new w0,this.P=t&&t.fastHandshake||!1,this.O=t&&t.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.bb=t&&t.bc||!1,t&&t.Ea&&this.l.Ea(),t&&t.forceLongPolling&&(this.aa=!1),this.ca=!this.P&&this.aa&&t&&t.detectBufferingProxy||!1,this.qa=void 0,t&&t.longPollingTimeout&&0<t.longPollingTimeout&&(this.qa=t.longPollingTimeout),this.oa=void 0,this.S=0,this.M=!1,this.ma=this.B=null}D=bg.prototype;D.ra=8;D.H=1;function ru(t){if(Ag(t),t.H==3){var e=t.W++,n=an(t.I);if(Ie(n,"SID",t.K),Ie(n,"RID",e),Ie(n,"TYPE","terminate"),wi(t,n),e=new _i(t,t.l,e),e.L=2,e.v=ha(an(n)),n=!1,Q.navigator&&Q.navigator.sendBeacon)try{n=Q.navigator.sendBeacon(e.v.toString(),"")}catch{}!n&&Q.Image&&(new Image().src=e.v,n=!0),n||(e.g=Ng(e.l,null),e.g.ha(e.v)),e.G=Date.now(),yi(e)}xg(t)}function ga(t){t.g&&(iu(t),t.g.cancel(),t.g=null)}function Ag(t){ga(t),t.u&&(Q.clearTimeout(t.u),t.u=null),ko(t),t.i.cancel(),t.m&&(typeof t.m=="number"&&Q.clearTimeout(t.m),t.m=null)}function ma(t){if(!pg(t.i)&&!t.m){t.m=!0;var e=t.Na;qs||Gp(),Ks||(qs(),Ks=!0),Gc.add(e,t),t.C=0}}function C0(t,e){return gg(t.i)>=t.i.j-(t.m?1:0)?!1:t.m?(t.j=e.F.concat(t.j),!0):t.H==1||t.H==2||t.C>=(t.cb?0:t.eb)?!1:(t.m=gi(at(t.Na,t,e),Sg(t,t.C)),t.C++,!0)}D.Na=function(t){if(this.m)if(this.m=null,this.H==1){if(!t){this.W=Math.floor(1e5*Math.random()),t=this.W++;const s=new _i(this,this.l,t);let i=this.s;if(this.U&&(i?(i=$p(i),Bp(i,this.U)):i=this.U),this.o!==null||this.O||(s.I=i,i=null),this.P)e:{for(var e=0,n=0;n<this.j.length;n++){t:{var r=this.j[n];if("__data__"in r.map&&(r=r.map.__data__,typeof r=="string")){r=r.length;break t}r=void 0}if(r===void 0)break;if(e+=r,4096<e){e=n;break e}if(e===4096||n===this.j.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=Rg(this,s,e),n=an(this.I),Ie(n,"RID",t),Ie(n,"CVER",22),this.F&&Ie(n,"X-HTTP-Session-Id",this.F),wi(this,n),i&&(this.O?e="headers="+encodeURIComponent(String(Tg(i)))+"&"+e:this.o&&nu(n,this.o,i)),eu(this.i,s),this.bb&&Ie(n,"TYPE","init"),this.P?(Ie(n,"$req",e),Ie(n,"SID","null"),s.aa=!0,$l(s,n,null)):$l(s,n,e),this.H=2}}else this.H==3&&(t?od(this,t):this.j.length==0||pg(this.i)||od(this))};function od(t,e){var n;e?n=e.m:n=t.W++;const r=an(t.I);Ie(r,"SID",t.K),Ie(r,"RID",n),Ie(r,"AID",t.V),wi(t,r),t.o&&t.s&&nu(r,t.o,t.s),n=new _i(t,t.l,n,t.C+1),t.o===null&&(n.I=t.s),e&&(t.j=e.F.concat(t.j)),e=Rg(t,n,1e3),n.setTimeout(Math.round(.5*t.xa)+Math.round(.5*t.xa*Math.random())),eu(t.i,n),$l(n,r,e)}function wi(t,e){t.na&&jc(t.na,function(n,r){Ie(e,r,n)}),t.h&&lg({},function(n,r){Ie(e,r,n)})}function Rg(t,e,n){n=Math.min(t.j.length,n);var r=t.h?at(t.h.Va,t.h,t):null;e:{var s=t.j;let i=-1;for(;;){const o=["count="+n];i==-1?0<n?(i=s[0].g,o.push("ofs="+i)):i=0:o.push("ofs="+i);let a=!0;for(let l=0;l<n;l++){let c=s[l].g;const u=s[l].map;if(c-=i,0>c)i=Math.max(0,s[l].g-100),a=!1;else try{E0(u,o,"req"+c+"_")}catch{r&&r(u)}}if(a){r=o.join("&");break e}}}return t=t.j.splice(0,n),e.F=t,r}function kg(t){if(!t.g&&!t.u){t.ba=1;var e=t.Ma;qs||Gp(),Ks||(qs(),Ks=!0),Gc.add(e,t),t.A=0}}function su(t){return t.g||t.u||3<=t.A?!1:(t.ba++,t.u=gi(at(t.Ma,t),Sg(t,t.A)),t.A++,!0)}D.Ma=function(){if(this.u=null,Cg(this),this.ca&&!(this.M||this.g==null||0>=this.S)){var t=2*this.S;this.l.info("BP detection timer enabled: "+t),this.B=gi(at(this.jb,this),t)}};D.jb=function(){this.B&&(this.B=null,this.l.info("BP detection timeout reached."),this.l.info("Buffering proxy detected and switch to long-polling!"),this.G=!1,this.M=!0,ft(10),ga(this),Cg(this))};function iu(t){t.B!=null&&(Q.clearTimeout(t.B),t.B=null)}function Cg(t){t.g=new _i(t,t.l,"rpc",t.ba),t.o===null&&(t.g.I=t.s),t.g.O=0;var e=an(t.wa);Ie(e,"RID","rpc"),Ie(e,"SID",t.K),Ie(e,"AID",t.V),Ie(e,"CI",t.G?"0":"1"),!t.G&&t.qa&&Ie(e,"TO",t.qa),Ie(e,"TYPE","xmlhttp"),wi(t,e),t.o&&t.s&&nu(e,t.o,t.s),t.L&&t.g.setTimeout(t.L);var n=t.g;t=t.pa,n.L=1,n.v=ha(an(e)),n.s=null,n.S=!0,sg(n,t)}D.ib=function(){this.v!=null&&(this.v=null,ga(this),su(this),ft(19))};function ko(t){t.v!=null&&(Q.clearTimeout(t.v),t.v=null)}function Pg(t,e){var n=null;if(t.g==e){ko(t),iu(t),t.g=null;var r=2}else if(jl(t.i,e))n=e.F,mg(t.i,e),r=1;else return;if(t.H!=0){if(e.i)if(r==1){n=e.s?e.s.length:0,e=Date.now()-e.G;var s=t.C;r=aa(),Je(r,new eg(r,n)),ma(t)}else kg(t);else if(s=e.o,s==3||s==0&&0<e.ca||!(r==1&&C0(t,e)||r==2&&su(t)))switch(n&&0<n.length&&(e=t.i,e.i=e.i.concat(n)),s){case 1:Wn(t,5);break;case 4:Wn(t,10);break;case 3:Wn(t,6);break;default:Wn(t,2)}}}function Sg(t,e){let n=t.ab+Math.floor(Math.random()*t.hb);return t.isActive()||(n*=2),n*e}function Wn(t,e){if(t.l.info("Error code "+e),e==2){var n=null;t.h&&(n=null);var r=at(t.pb,t);n||(n=new Jn("//www.google.com/images/cleardot.gif"),Q.location&&Q.location.protocol=="http"||Ao(n,"https"),ha(n)),I0(n.toString(),r)}else ft(2);t.H=0,t.h&&t.h.za(e),xg(t),Ag(t)}D.pb=function(t){t?(this.l.info("Successfully pinged google.com"),ft(2)):(this.l.info("Failed to ping google.com"),ft(1))};function xg(t){if(t.H=0,t.ma=[],t.h){const e=_g(t.i);(e.length!=0||t.j.length!=0)&&(Yh(t.ma,e),Yh(t.ma,t.j),t.i.i.length=0,$c(t.j),t.j.length=0),t.h.ya()}}function Dg(t,e,n){var r=n instanceof Jn?an(n):new Jn(n);if(r.g!="")e&&(r.g=e+"."+r.g),Ro(r,r.m);else{var s=Q.location;r=s.protocol,e=e?e+"."+s.hostname:s.hostname,s=+s.port;var i=new Jn(null);r&&Ao(i,r),e&&(i.g=e),s&&Ro(i,s),n&&(i.l=n),r=i}return n=t.F,e=t.Da,n&&e&&Ie(r,n,e),Ie(r,"VER",t.ra),wi(t,r),r}function Ng(t,e,n){if(e&&!t.J)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Ha&&!t.va?new Ne(new da({ob:!0})):new Ne(t.va),e.Oa(t.J),e}D.isActive=function(){return!!this.h&&this.h.isActive(this)};function Og(){}D=Og.prototype;D.Ba=function(){};D.Aa=function(){};D.za=function(){};D.ya=function(){};D.isActive=function(){return!0};D.Va=function(){};function Co(){if(Br&&!(10<=Number(BT)))throw Error("Environmental error: no available transport.")}Co.prototype.g=function(t,e){return new wt(t,e)};function wt(t,e){Ke.call(this),this.g=new bg(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.Ca&&(t?t["X-WebChannel-Client-Profile"]=e.Ca:t={"X-WebChannel-Client-Profile":e.Ca}),this.g.U=t,(t=e&&e.cc)&&!Bs(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!Bs(e)&&(this.g.F=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new ns(this)}He(wt,Ke);wt.prototype.m=function(){this.g.h=this.j,this.A&&(this.g.J=!0);var t=this.g,e=this.l,n=this.h||void 0;ft(0),t.Y=e,t.na=n||{},t.G=t.aa,t.I=Dg(t,null,t.Y),ma(t)};wt.prototype.close=function(){ru(this.g)};wt.prototype.u=function(t){var e=this.g;if(typeof t=="string"){var n={};n.__data__=t,t=n}else this.v&&(n={},n.__data__=zc(t),t=n);e.j.push(new _0(e.fb++,t)),e.H==3&&ma(e)};wt.prototype.N=function(){this.g.h=null,delete this.j,ru(this.g),delete this.g,wt.$.N.call(this)};function Vg(t){Xc.call(this),t.__headers__&&(this.headers=t.__headers__,this.statusCode=t.__status__,delete t.__headers__,delete t.__status__);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}He(Vg,Xc);function Mg(){Zc.call(this),this.status=1}He(Mg,Zc);function ns(t){this.g=t}He(ns,Og);ns.prototype.Ba=function(){Je(this.g,"a")};ns.prototype.Aa=function(t){Je(this.g,new Vg(t))};ns.prototype.za=function(t){Je(this.g,new Mg)};ns.prototype.ya=function(){Je(this.g,"b")};function P0(){this.blockSize=-1}function Nt(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.m=Array(this.blockSize),this.i=this.h=0,this.reset()}He(Nt,P0);Nt.prototype.reset=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.i=this.h=0};function rl(t,e,n){n||(n=0);var r=Array(16);if(typeof e=="string")for(var s=0;16>s;++s)r[s]=e.charCodeAt(n++)|e.charCodeAt(n++)<<8|e.charCodeAt(n++)<<16|e.charCodeAt(n++)<<24;else for(s=0;16>s;++s)r[s]=e[n++]|e[n++]<<8|e[n++]<<16|e[n++]<<24;e=t.g[0],n=t.g[1],s=t.g[2];var i=t.g[3],o=e+(i^n&(s^i))+r[0]+3614090360&4294967295;e=n+(o<<7&4294967295|o>>>25),o=i+(s^e&(n^s))+r[1]+3905402710&4294967295,i=e+(o<<12&4294967295|o>>>20),o=s+(n^i&(e^n))+r[2]+606105819&4294967295,s=i+(o<<17&4294967295|o>>>15),o=n+(e^s&(i^e))+r[3]+3250441966&4294967295,n=s+(o<<22&4294967295|o>>>10),o=e+(i^n&(s^i))+r[4]+4118548399&4294967295,e=n+(o<<7&4294967295|o>>>25),o=i+(s^e&(n^s))+r[5]+1200080426&4294967295,i=e+(o<<12&4294967295|o>>>20),o=s+(n^i&(e^n))+r[6]+2821735955&4294967295,s=i+(o<<17&4294967295|o>>>15),o=n+(e^s&(i^e))+r[7]+4249261313&4294967295,n=s+(o<<22&4294967295|o>>>10),o=e+(i^n&(s^i))+r[8]+1770035416&4294967295,e=n+(o<<7&4294967295|o>>>25),o=i+(s^e&(n^s))+r[9]+2336552879&4294967295,i=e+(o<<12&4294967295|o>>>20),o=s+(n^i&(e^n))+r[10]+4294925233&4294967295,s=i+(o<<17&4294967295|o>>>15),o=n+(e^s&(i^e))+r[11]+2304563134&4294967295,n=s+(o<<22&4294967295|o>>>10),o=e+(i^n&(s^i))+r[12]+1804603682&4294967295,e=n+(o<<7&4294967295|o>>>25),o=i+(s^e&(n^s))+r[13]+4254626195&4294967295,i=e+(o<<12&4294967295|o>>>20),o=s+(n^i&(e^n))+r[14]+2792965006&4294967295,s=i+(o<<17&4294967295|o>>>15),o=n+(e^s&(i^e))+r[15]+1236535329&4294967295,n=s+(o<<22&4294967295|o>>>10),o=e+(s^i&(n^s))+r[1]+4129170786&4294967295,e=n+(o<<5&4294967295|o>>>27),o=i+(n^s&(e^n))+r[6]+3225465664&4294967295,i=e+(o<<9&4294967295|o>>>23),o=s+(e^n&(i^e))+r[11]+643717713&4294967295,s=i+(o<<14&4294967295|o>>>18),o=n+(i^e&(s^i))+r[0]+3921069994&4294967295,n=s+(o<<20&4294967295|o>>>12),o=e+(s^i&(n^s))+r[5]+3593408605&4294967295,e=n+(o<<5&4294967295|o>>>27),o=i+(n^s&(e^n))+r[10]+38016083&4294967295,i=e+(o<<9&4294967295|o>>>23),o=s+(e^n&(i^e))+r[15]+3634488961&4294967295,s=i+(o<<14&4294967295|o>>>18),o=n+(i^e&(s^i))+r[4]+3889429448&4294967295,n=s+(o<<20&4294967295|o>>>12),o=e+(s^i&(n^s))+r[9]+568446438&4294967295,e=n+(o<<5&4294967295|o>>>27),o=i+(n^s&(e^n))+r[14]+3275163606&4294967295,i=e+(o<<9&4294967295|o>>>23),o=s+(e^n&(i^e))+r[3]+4107603335&4294967295,s=i+(o<<14&4294967295|o>>>18),o=n+(i^e&(s^i))+r[8]+1163531501&4294967295,n=s+(o<<20&4294967295|o>>>12),o=e+(s^i&(n^s))+r[13]+2850285829&4294967295,e=n+(o<<5&4294967295|o>>>27),o=i+(n^s&(e^n))+r[2]+4243563512&4294967295,i=e+(o<<9&4294967295|o>>>23),o=s+(e^n&(i^e))+r[7]+1735328473&4294967295,s=i+(o<<14&4294967295|o>>>18),o=n+(i^e&(s^i))+r[12]+2368359562&4294967295,n=s+(o<<20&4294967295|o>>>12),o=e+(n^s^i)+r[5]+4294588738&4294967295,e=n+(o<<4&4294967295|o>>>28),o=i+(e^n^s)+r[8]+2272392833&4294967295,i=e+(o<<11&4294967295|o>>>21),o=s+(i^e^n)+r[11]+1839030562&4294967295,s=i+(o<<16&4294967295|o>>>16),o=n+(s^i^e)+r[14]+4259657740&4294967295,n=s+(o<<23&4294967295|o>>>9),o=e+(n^s^i)+r[1]+2763975236&4294967295,e=n+(o<<4&4294967295|o>>>28),o=i+(e^n^s)+r[4]+1272893353&4294967295,i=e+(o<<11&4294967295|o>>>21),o=s+(i^e^n)+r[7]+4139469664&4294967295,s=i+(o<<16&4294967295|o>>>16),o=n+(s^i^e)+r[10]+3200236656&4294967295,n=s+(o<<23&4294967295|o>>>9),o=e+(n^s^i)+r[13]+681279174&4294967295,e=n+(o<<4&4294967295|o>>>28),o=i+(e^n^s)+r[0]+3936430074&4294967295,i=e+(o<<11&4294967295|o>>>21),o=s+(i^e^n)+r[3]+3572445317&4294967295,s=i+(o<<16&4294967295|o>>>16),o=n+(s^i^e)+r[6]+76029189&4294967295,n=s+(o<<23&4294967295|o>>>9),o=e+(n^s^i)+r[9]+3654602809&4294967295,e=n+(o<<4&4294967295|o>>>28),o=i+(e^n^s)+r[12]+3873151461&4294967295,i=e+(o<<11&4294967295|o>>>21),o=s+(i^e^n)+r[15]+530742520&4294967295,s=i+(o<<16&4294967295|o>>>16),o=n+(s^i^e)+r[2]+3299628645&4294967295,n=s+(o<<23&4294967295|o>>>9),o=e+(s^(n|~i))+r[0]+4096336452&4294967295,e=n+(o<<6&4294967295|o>>>26),o=i+(n^(e|~s))+r[7]+1126891415&4294967295,i=e+(o<<10&4294967295|o>>>22),o=s+(e^(i|~n))+r[14]+2878612391&4294967295,s=i+(o<<15&4294967295|o>>>17),o=n+(i^(s|~e))+r[5]+4237533241&4294967295,n=s+(o<<21&4294967295|o>>>11),o=e+(s^(n|~i))+r[12]+1700485571&4294967295,e=n+(o<<6&4294967295|o>>>26),o=i+(n^(e|~s))+r[3]+2399980690&4294967295,i=e+(o<<10&4294967295|o>>>22),o=s+(e^(i|~n))+r[10]+4293915773&4294967295,s=i+(o<<15&4294967295|o>>>17),o=n+(i^(s|~e))+r[1]+2240044497&4294967295,n=s+(o<<21&4294967295|o>>>11),o=e+(s^(n|~i))+r[8]+1873313359&4294967295,e=n+(o<<6&4294967295|o>>>26),o=i+(n^(e|~s))+r[15]+4264355552&4294967295,i=e+(o<<10&4294967295|o>>>22),o=s+(e^(i|~n))+r[6]+2734768916&4294967295,s=i+(o<<15&4294967295|o>>>17),o=n+(i^(s|~e))+r[13]+1309151649&4294967295,n=s+(o<<21&4294967295|o>>>11),o=e+(s^(n|~i))+r[4]+4149444226&4294967295,e=n+(o<<6&4294967295|o>>>26),o=i+(n^(e|~s))+r[11]+3174756917&4294967295,i=e+(o<<10&4294967295|o>>>22),o=s+(e^(i|~n))+r[2]+718787259&4294967295,s=i+(o<<15&4294967295|o>>>17),o=n+(i^(s|~e))+r[9]+3951481745&4294967295,t.g[0]=t.g[0]+e&4294967295,t.g[1]=t.g[1]+(s+(o<<21&4294967295|o>>>11))&4294967295,t.g[2]=t.g[2]+s&4294967295,t.g[3]=t.g[3]+i&4294967295}Nt.prototype.j=function(t,e){e===void 0&&(e=t.length);for(var n=e-this.blockSize,r=this.m,s=this.h,i=0;i<e;){if(s==0)for(;i<=n;)rl(this,t,i),i+=this.blockSize;if(typeof t=="string"){for(;i<e;)if(r[s++]=t.charCodeAt(i++),s==this.blockSize){rl(this,r),s=0;break}}else for(;i<e;)if(r[s++]=t[i++],s==this.blockSize){rl(this,r),s=0;break}}this.h=s,this.i+=e};Nt.prototype.l=function(){var t=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);t[0]=128;for(var e=1;e<t.length-8;++e)t[e]=0;var n=8*this.i;for(e=t.length-8;e<t.length;++e)t[e]=n&255,n/=256;for(this.j(t),t=Array(16),e=n=0;4>e;++e)for(var r=0;32>r;r+=8)t[n++]=this.g[e]>>>r&255;return t};function ge(t,e){this.h=e;for(var n=[],r=!0,s=t.length-1;0<=s;s--){var i=t[s]|0;r&&i==e||(n[s]=i,r=!1)}this.g=n}var S0={};function ou(t){return-128<=t&&128>t?UT(t,function(e){return new ge([e|0],0>e?-1:0)}):new ge([t|0],0>t?-1:0)}function qt(t){if(isNaN(t)||!isFinite(t))return Dr;if(0>t)return Qe(qt(-t));for(var e=[],n=1,r=0;t>=n;r++)e[r]=t/n|0,n*=ql;return new ge(e,0)}function Lg(t,e){if(t.length==0)throw Error("number format error: empty string");if(e=e||10,2>e||36<e)throw Error("radix out of range: "+e);if(t.charAt(0)=="-")return Qe(Lg(t.substring(1),e));if(0<=t.indexOf("-"))throw Error('number format error: interior "-" character');for(var n=qt(Math.pow(e,8)),r=Dr,s=0;s<t.length;s+=8){var i=Math.min(8,t.length-s),o=parseInt(t.substring(s,s+i),e);8>i?(i=qt(Math.pow(e,i)),r=r.R(i).add(qt(o))):(r=r.R(n),r=r.add(qt(o)))}return r}var ql=4294967296,Dr=ou(0),Kl=ou(1),ad=ou(16777216);D=ge.prototype;D.ea=function(){if(Et(this))return-Qe(this).ea();for(var t=0,e=1,n=0;n<this.g.length;n++){var r=this.D(n);t+=(0<=r?r:ql+r)*e,e*=ql}return t};D.toString=function(t){if(t=t||10,2>t||36<t)throw Error("radix out of range: "+t);if(nn(this))return"0";if(Et(this))return"-"+Qe(this).toString(t);for(var e=qt(Math.pow(t,6)),n=this,r="";;){var s=So(n,e).g;n=Po(n,s.R(e));var i=((0<n.g.length?n.g[0]:n.h)>>>0).toString(t);if(n=s,nn(n))return i+r;for(;6>i.length;)i="0"+i;r=i+r}};D.D=function(t){return 0>t?0:t<this.g.length?this.g[t]:this.h};function nn(t){if(t.h!=0)return!1;for(var e=0;e<t.g.length;e++)if(t.g[e]!=0)return!1;return!0}function Et(t){return t.h==-1}D.X=function(t){return t=Po(this,t),Et(t)?-1:nn(t)?0:1};function Qe(t){for(var e=t.g.length,n=[],r=0;r<e;r++)n[r]=~t.g[r];return new ge(n,~t.h).add(Kl)}D.abs=function(){return Et(this)?Qe(this):this};D.add=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0,s=0;s<=e;s++){var i=r+(this.D(s)&65535)+(t.D(s)&65535),o=(i>>>16)+(this.D(s)>>>16)+(t.D(s)>>>16);r=o>>>16,i&=65535,o&=65535,n[s]=o<<16|i}return new ge(n,n[n.length-1]&-2147483648?-1:0)};function Po(t,e){return t.add(Qe(e))}D.R=function(t){if(nn(this)||nn(t))return Dr;if(Et(this))return Et(t)?Qe(this).R(Qe(t)):Qe(Qe(this).R(t));if(Et(t))return Qe(this.R(Qe(t)));if(0>this.X(ad)&&0>t.X(ad))return qt(this.ea()*t.ea());for(var e=this.g.length+t.g.length,n=[],r=0;r<2*e;r++)n[r]=0;for(r=0;r<this.g.length;r++)for(var s=0;s<t.g.length;s++){var i=this.D(r)>>>16,o=this.D(r)&65535,a=t.D(s)>>>16,l=t.D(s)&65535;n[2*r+2*s]+=o*l,Bi(n,2*r+2*s),n[2*r+2*s+1]+=i*l,Bi(n,2*r+2*s+1),n[2*r+2*s+1]+=o*a,Bi(n,2*r+2*s+1),n[2*r+2*s+2]+=i*a,Bi(n,2*r+2*s+2)}for(r=0;r<e;r++)n[r]=n[2*r+1]<<16|n[2*r];for(r=e;r<2*e;r++)n[r]=0;return new ge(n,0)};function Bi(t,e){for(;(t[e]&65535)!=t[e];)t[e+1]+=t[e]>>>16,t[e]&=65535,e++}function us(t,e){this.g=t,this.h=e}function So(t,e){if(nn(e))throw Error("division by zero");if(nn(t))return new us(Dr,Dr);if(Et(t))return e=So(Qe(t),e),new us(Qe(e.g),Qe(e.h));if(Et(e))return e=So(t,Qe(e)),new us(Qe(e.g),e.h);if(30<t.g.length){if(Et(t)||Et(e))throw Error("slowDivide_ only works with positive integers.");for(var n=Kl,r=e;0>=r.X(t);)n=ld(n),r=ld(r);var s=_r(n,1),i=_r(r,1);for(r=_r(r,2),n=_r(n,2);!nn(r);){var o=i.add(r);0>=o.X(t)&&(s=s.add(n),i=o),r=_r(r,1),n=_r(n,1)}return e=Po(t,s.R(e)),new us(s,e)}for(s=Dr;0<=t.X(e);){for(n=Math.max(1,Math.floor(t.ea()/e.ea())),r=Math.ceil(Math.log(n)/Math.LN2),r=48>=r?1:Math.pow(2,r-48),i=qt(n),o=i.R(e);Et(o)||0<o.X(t);)n-=r,i=qt(n),o=i.R(e);nn(i)&&(i=Kl),s=s.add(i),t=Po(t,o)}return new us(s,t)}D.gb=function(t){return So(this,t).h};D.and=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)&t.D(r);return new ge(n,this.h&t.h)};D.or=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)|t.D(r);return new ge(n,this.h|t.h)};D.xor=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)^t.D(r);return new ge(n,this.h^t.h)};function ld(t){for(var e=t.g.length+1,n=[],r=0;r<e;r++)n[r]=t.D(r)<<1|t.D(r-1)>>>31;return new ge(n,t.h)}function _r(t,e){var n=e>>5;e%=32;for(var r=t.g.length-n,s=[],i=0;i<r;i++)s[i]=0<e?t.D(i+n)>>>e|t.D(i+n+1)<<32-e:t.D(i+n);return new ge(s,t.h)}Co.prototype.createWebChannel=Co.prototype.g;wt.prototype.send=wt.prototype.u;wt.prototype.open=wt.prototype.m;wt.prototype.close=wt.prototype.close;la.NO_ERROR=0;la.TIMEOUT=8;la.HTTP_ERROR=6;tg.COMPLETE="complete";ng.EventType=mi;mi.OPEN="a";mi.CLOSE="b";mi.ERROR="c";mi.MESSAGE="d";Ke.prototype.listen=Ke.prototype.O;Ne.prototype.listenOnce=Ne.prototype.P;Ne.prototype.getLastError=Ne.prototype.Sa;Ne.prototype.getLastErrorCode=Ne.prototype.Ia;Ne.prototype.getStatus=Ne.prototype.da;Ne.prototype.getResponseJson=Ne.prototype.Wa;Ne.prototype.getResponseText=Ne.prototype.ja;Ne.prototype.send=Ne.prototype.ha;Ne.prototype.setWithCredentials=Ne.prototype.Oa;Nt.prototype.digest=Nt.prototype.l;Nt.prototype.reset=Nt.prototype.reset;Nt.prototype.update=Nt.prototype.j;ge.prototype.add=ge.prototype.add;ge.prototype.multiply=ge.prototype.R;ge.prototype.modulo=ge.prototype.gb;ge.prototype.compare=ge.prototype.X;ge.prototype.toNumber=ge.prototype.ea;ge.prototype.toString=ge.prototype.toString;ge.prototype.getBits=ge.prototype.D;ge.fromNumber=qt;ge.fromString=Lg;var x0=function(){return new Co},D0=function(){return aa()},sl=la,N0=tg,O0=cr,cd={xb:0,Ab:1,Bb:2,Ub:3,Zb:4,Wb:5,Xb:6,Vb:7,Tb:8,Yb:9,PROXY:10,NOPROXY:11,Rb:12,Nb:13,Ob:14,Mb:15,Pb:16,Qb:17,tb:18,sb:19,ub:20},ji=ng,V0=Ne,M0=Nt,Nr=ge;const ud="@firebase/firestore";/**
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
 */class tt{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}tt.UNAUTHENTICATED=new tt(null),tt.GOOGLE_CREDENTIALS=new tt("google-credentials-uid"),tt.FIRST_PARTY=new tt("first-party-uid"),tt.MOCK_USER=new tt("mock-user");/**
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
 */let rs="10.4.0";/**
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
 */const or=new kc("@firebase/firestore");function hs(){return or.logLevel}function L(t,...e){if(or.logLevel<=se.DEBUG){const n=e.map(au);or.debug(`Firestore (${rs}): ${t}`,...n)}}function ln(t,...e){if(or.logLevel<=se.ERROR){const n=e.map(au);or.error(`Firestore (${rs}): ${t}`,...n)}}function jr(t,...e){if(or.logLevel<=se.WARN){const n=e.map(au);or.warn(`Firestore (${rs}): ${t}`,...n)}}function au(t){if(typeof t=="string")return t;try{/**
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
 */function G(t="Unexpected state"){const e=`FIRESTORE (${rs}) INTERNAL ASSERTION FAILED: `+t;throw ln(e),new Error(e)}function be(t,e){t||G()}function X(t,e){return t}/**
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
 */const E={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class V extends hn{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class rn{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
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
 */class Ug{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class L0{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(tt.UNAUTHENTICATED))}shutdown(){}}class U0{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class F0{constructor(e){this.t=e,this.currentUser=tt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let r=this.i;const s=l=>this.i!==r?(r=this.i,n(l)):Promise.resolve();let i=new rn;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new rn,e.enqueueRetryable(()=>s(this.currentUser))};const o=()=>{const l=i;e.enqueueRetryable(async()=>{await l.promise,await s(this.currentUser)})},a=l=>{L("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(l=>a(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?a(l):(L("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new rn)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(L("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(be(typeof r.accessToken=="string"),new Ug(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return be(e===null||typeof e=="string"),new tt(e)}}class $0{constructor(e,n,r){this.l=e,this.h=n,this.P=r,this.type="FirstParty",this.user=tt.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class B0{constructor(e,n,r){this.l=e,this.h=n,this.P=r}getToken(){return Promise.resolve(new $0(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(tt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class j0{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class q0{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,n){const r=i=>{i.error!=null&&L("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.R;return this.R=i.token,L("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>r(i))};const s=i=>{L("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.appCheck.addTokenListener(this.o)};this.A.onInit(i=>s(i)),setTimeout(()=>{if(!this.appCheck){const i=this.A.getImmediate({optional:!0});i?s(i):L("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(be(typeof n.token=="string"),this.R=n.token,new j0(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
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
 */function K0(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
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
 */class Fg{static V(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const s=K0(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<n&&(r+=e.charAt(s[i]%e.length))}return r}}function ue(t,e){return t<e?-1:t>e?1:0}function qr(t,e,n){return t.length===e.length&&t.every((r,s)=>n(r,e[s]))}/**
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
 */class pe{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new V(E.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new V(E.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new V(E.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new V(E.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return pe.fromMillis(Date.now())}static fromDate(e){return pe.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new pe(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?ue(this.nanoseconds,e.nanoseconds):ue(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class J{constructor(e){this.timestamp=e}static fromTimestamp(e){return new J(e)}static min(){return new J(new pe(0,0))}static max(){return new J(new pe(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */class Qs{constructor(e,n,r){n===void 0?n=0:n>e.length&&G(),r===void 0?r=e.length-n:r>e.length-n&&G(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return Qs.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof Qs?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let s=0;s<r;s++){const i=e.get(s),o=n.get(s);if(i<o)return-1;if(i>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class Te extends Qs{construct(e,n,r){return new Te(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new V(E.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(s=>s.length>0))}return new Te(n)}static emptyPath(){return new Te([])}}const H0=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class it extends Qs{construct(e,n,r){return new it(e,n,r)}static isValidIdentifier(e){return H0.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),it.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new it(["__name__"])}static fromServerFormat(e){const n=[];let r="",s=0;const i=()=>{if(r.length===0)throw new V(E.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;s<e.length;){const a=e[s];if(a==="\\"){if(s+1===e.length)throw new V(E.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[s+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new V(E.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=l,s+=2}else a==="`"?(o=!o,s++):a!=="."||o?(r+=a,s++):(i(),s++)}if(i(),o)throw new V(E.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new it(n)}static emptyPath(){return new it([])}}/**
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
 */class j{constructor(e){this.path=e}static fromPath(e){return new j(Te.fromString(e))}static fromName(e){return new j(Te.fromString(e).popFirst(5))}static empty(){return new j(Te.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Te.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return Te.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new j(new Te(e.slice()))}}function W0(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,s=J.fromTimestamp(r===1e9?new pe(n+1,0):new pe(n,r));return new Pn(s,j.empty(),e)}function z0(t){return new Pn(t.readTime,t.key,-1)}class Pn{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new Pn(J.min(),j.empty(),-1)}static max(){return new Pn(J.max(),j.empty(),-1)}}function G0(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=j.comparator(t.documentKey,e.documentKey),n!==0?n:ue(t.largestBatchId,e.largestBatchId))}/**
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
 */const Q0="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Y0{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function Ei(t){if(t.code!==E.FAILED_PRECONDITION||t.message!==Q0)throw t;L("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class A{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&G(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new A((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(n,i).next(r,s)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof A?n:A.resolve(n)}catch(n){return A.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):A.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):A.reject(n)}static resolve(e){return new A((n,r)=>{n(e)})}static reject(e){return new A((n,r)=>{r(e)})}static waitFor(e){return new A((n,r)=>{let s=0,i=0,o=!1;e.forEach(a=>{++s,a.next(()=>{++i,o&&i===s&&n()},l=>r(l))}),o=!0,i===s&&n()})}static or(e){let n=A.resolve(!1);for(const r of e)n=n.next(s=>s?A.resolve(s):r());return n}static forEach(e,n){const r=[];return e.forEach((s,i)=>{r.push(n.call(this,s,i))}),this.waitFor(r)}static mapArray(e,n){return new A((r,s)=>{const i=e.length,o=new Array(i);let a=0;for(let l=0;l<i;l++){const c=l;n(e[c]).next(u=>{o[c]=u,++a,a===i&&r(o)},u=>s(u))}})}static doWhile(e,n){return new A((r,s)=>{const i=()=>{e()===!0?n().next(()=>{i()},s):r()};i()})}}function Ii(t){return t.name==="IndexedDbTransactionError"}/**
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
 */class lu{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.oe(r),this._e=r=>n.writeSequenceNumber(r))}oe(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this._e&&this._e(e),e}}lu.ae=-1;function _a(t){return t==null}function xo(t){return t===0&&1/t==-1/0}function J0(t){return typeof t=="number"&&Number.isInteger(t)&&!xo(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
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
 */function hd(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function ur(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function $g(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
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
 */class Ce{constructor(e,n){this.comparator=e,this.root=n||We.EMPTY}insert(e,n){return new Ce(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,We.BLACK,null,null))}remove(e){return new Ce(this.comparator,this.root.remove(e,this.comparator).copy(null,null,We.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return n+r.left.size;s<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new qi(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new qi(this.root,e,this.comparator,!1)}getReverseIterator(){return new qi(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new qi(this.root,e,this.comparator,!0)}}class qi{constructor(e,n,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=n?r(e.key,n):1,n&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class We{constructor(e,n,r,s,i){this.key=e,this.value=n,this.color=r??We.RED,this.left=s??We.EMPTY,this.right=i??We.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,s,i){return new We(e??this.key,n??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,n,r),null):i===0?s.copy(null,n,null,null,null):s.copy(null,null,null,null,s.right.insert(e,n,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return We.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,s=this;if(n(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),n(e,s.key)===0){if(s.right.isEmpty())return We.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,We.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,We.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw G();const e=this.left.check();if(e!==this.right.check())throw G();return e+(this.isRed()?0:1)}}We.EMPTY=null,We.RED=!0,We.BLACK=!1;We.EMPTY=new class{constructor(){this.size=0}get key(){throw G()}get value(){throw G()}get color(){throw G()}get left(){throw G()}get right(){throw G()}copy(e,n,r,s,i){return this}insert(e,n,r){return new We(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class ct{constructor(e){this.comparator=e,this.data=new Ce(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;n(s.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new dd(this.data.getIterator())}getIteratorFrom(e){return new dd(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof ct)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new ct(this.comparator);return n.data=e,n}}class dd{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class vt{constructor(e){this.fields=e,e.sort(it.comparator)}static empty(){return new vt([])}unionWith(e){let n=new ct(it.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new vt(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return qr(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
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
 */class Bg extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class ht{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new Bg("Invalid base64 string: "+i):i}}(e);return new ht(n)}static fromUint8Array(e){const n=function(s){let i="";for(let o=0;o<s.length;++o)i+=String.fromCharCode(s[o]);return i}(e);return new ht(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let s=0;s<n.length;s++)r[s]=n.charCodeAt(s);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return ue(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}ht.EMPTY_BYTE_STRING=new ht("");const X0=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Sn(t){if(be(!!t),typeof t=="string"){let e=0;const n=X0.exec(t);if(be(!!n),n[1]){let s=n[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Me(t.seconds),nanos:Me(t.nanos)}}function Me(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function ar(t){return typeof t=="string"?ht.fromBase64String(t):ht.fromUint8Array(t)}/**
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
 */function cu(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function uu(t){const e=t.mapValue.fields.__previous_value__;return cu(e)?uu(e):e}function Ys(t){const e=Sn(t.mapValue.fields.__local_write_time__.timestampValue);return new pe(e.seconds,e.nanos)}/**
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
 */class Z0{constructor(e,n,r,s,i,o,a,l,c){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=l,this.useFetchStreams=c}}class Js{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new Js("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Js&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const Ki={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function lr(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?cu(t)?4:eb(t)?9007199254740991:10:G()}function Qt(t,e){if(t===e)return!0;const n=lr(t);if(n!==lr(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Ys(t).isEqual(Ys(e));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const o=Sn(s.timestampValue),a=Sn(i.timestampValue);return o.seconds===a.seconds&&o.nanos===a.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(s,i){return ar(s.bytesValue).isEqual(ar(i.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(s,i){return Me(s.geoPointValue.latitude)===Me(i.geoPointValue.latitude)&&Me(s.geoPointValue.longitude)===Me(i.geoPointValue.longitude)}(t,e);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return Me(s.integerValue)===Me(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const o=Me(s.doubleValue),a=Me(i.doubleValue);return o===a?xo(o)===xo(a):isNaN(o)&&isNaN(a)}return!1}(t,e);case 9:return qr(t.arrayValue.values||[],e.arrayValue.values||[],Qt);case 10:return function(s,i){const o=s.mapValue.fields||{},a=i.mapValue.fields||{};if(hd(o)!==hd(a))return!1;for(const l in o)if(o.hasOwnProperty(l)&&(a[l]===void 0||!Qt(o[l],a[l])))return!1;return!0}(t,e);default:return G()}}function Xs(t,e){return(t.values||[]).find(n=>Qt(n,e))!==void 0}function Kr(t,e){if(t===e)return 0;const n=lr(t),r=lr(e);if(n!==r)return ue(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return ue(t.booleanValue,e.booleanValue);case 2:return function(i,o){const a=Me(i.integerValue||i.doubleValue),l=Me(o.integerValue||o.doubleValue);return a<l?-1:a>l?1:a===l?0:isNaN(a)?isNaN(l)?0:-1:1}(t,e);case 3:return fd(t.timestampValue,e.timestampValue);case 4:return fd(Ys(t),Ys(e));case 5:return ue(t.stringValue,e.stringValue);case 6:return function(i,o){const a=ar(i),l=ar(o);return a.compareTo(l)}(t.bytesValue,e.bytesValue);case 7:return function(i,o){const a=i.split("/"),l=o.split("/");for(let c=0;c<a.length&&c<l.length;c++){const u=ue(a[c],l[c]);if(u!==0)return u}return ue(a.length,l.length)}(t.referenceValue,e.referenceValue);case 8:return function(i,o){const a=ue(Me(i.latitude),Me(o.latitude));return a!==0?a:ue(Me(i.longitude),Me(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(i,o){const a=i.values||[],l=o.values||[];for(let c=0;c<a.length&&c<l.length;++c){const u=Kr(a[c],l[c]);if(u)return u}return ue(a.length,l.length)}(t.arrayValue,e.arrayValue);case 10:return function(i,o){if(i===Ki.mapValue&&o===Ki.mapValue)return 0;if(i===Ki.mapValue)return 1;if(o===Ki.mapValue)return-1;const a=i.fields||{},l=Object.keys(a),c=o.fields||{},u=Object.keys(c);l.sort(),u.sort();for(let h=0;h<l.length&&h<u.length;++h){const d=ue(l[h],u[h]);if(d!==0)return d;const f=Kr(a[l[h]],c[u[h]]);if(f!==0)return f}return ue(l.length,u.length)}(t.mapValue,e.mapValue);default:throw G()}}function fd(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return ue(t,e);const n=Sn(t),r=Sn(e),s=ue(n.seconds,r.seconds);return s!==0?s:ue(n.nanos,r.nanos)}function Hr(t){return Hl(t)}function Hl(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=Sn(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return ar(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return j.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",s=!0;for(const i of n.values||[])s?s=!1:r+=",",r+=Hl(i);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let s="{",i=!0;for(const o of r)i?i=!1:s+=",",s+=`${o}:${Hl(n.fields[o])}`;return s+"}"}(t.mapValue):G()}function pd(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function Wl(t){return!!t&&"integerValue"in t}function hu(t){return!!t&&"arrayValue"in t}function gd(t){return!!t&&"nullValue"in t}function md(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function so(t){return!!t&&"mapValue"in t}function As(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return ur(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=As(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=As(t.arrayValue.values[n]);return e}return Object.assign({},t)}function eb(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
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
 */class mt{constructor(e){this.value=e}static empty(){return new mt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!so(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=As(n)}setAll(e){let n=it.emptyPath(),r={},s=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const l=this.getFieldsMap(n);this.applyChanges(l,r,s),r={},s=[],n=a.popLast()}o?r[a.lastSegment()]=As(o):s.push(a.lastSegment())});const i=this.getFieldsMap(n);this.applyChanges(i,r,s)}delete(e){const n=this.field(e.popLast());so(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return Qt(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=n.mapValue.fields[e.get(r)];so(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=s),n=s}return n.mapValue.fields}applyChanges(e,n,r){ur(n,(s,i)=>e[s]=i);for(const s of r)delete e[s]}clone(){return new mt(As(this.value))}}function jg(t){const e=[];return ur(t.fields,(n,r)=>{const s=new it([n]);if(so(r)){const i=jg(r.mapValue).fields;if(i.length===0)e.push(s);else for(const o of i)e.push(s.child(o))}else e.push(s)}),new vt(e)}/**
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
 */class rt{constructor(e,n,r,s,i,o,a){this.key=e,this.documentType=n,this.version=r,this.readTime=s,this.createTime=i,this.data=o,this.documentState=a}static newInvalidDocument(e){return new rt(e,0,J.min(),J.min(),J.min(),mt.empty(),0)}static newFoundDocument(e,n,r,s){return new rt(e,1,n,J.min(),r,s,0)}static newNoDocument(e,n){return new rt(e,2,n,J.min(),J.min(),mt.empty(),0)}static newUnknownDocument(e,n){return new rt(e,3,n,J.min(),J.min(),mt.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(J.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=mt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=mt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=J.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof rt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new rt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Do{constructor(e,n){this.position=e,this.inclusive=n}}function _d(t,e,n){let r=0;for(let s=0;s<t.position.length;s++){const i=e[s],o=t.position[s];if(i.field.isKeyField()?r=j.comparator(j.fromName(o.referenceValue),n.key):r=Kr(o,n.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function yd(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!Qt(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class Rs{constructor(e,n="asc"){this.field=e,this.dir=n}}function tb(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
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
 */class qg{}class Le extends qg{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new rb(e,n,r):n==="array-contains"?new ob(e,r):n==="in"?new ab(e,r):n==="not-in"?new lb(e,r):n==="array-contains-any"?new cb(e,r):new Le(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new sb(e,r):new ib(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(Kr(n,this.value)):n!==null&&lr(this.value)===lr(n)&&this.matchesComparison(Kr(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return G()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}getFirstInequalityField(){return this.isInequality()?this.field:null}}class Ot extends qg{constructor(e,n){super(),this.filters=e,this.op=n,this.ce=null}static create(e,n){return new Ot(e,n)}matches(e){return Kg(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ce!==null||(this.ce=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ce}getFilters(){return Object.assign([],this.filters)}getFirstInequalityField(){const e=this.le(n=>n.isInequality());return e!==null?e.field:null}le(e){for(const n of this.getFlattenedFilters())if(e(n))return n;return null}}function Kg(t){return t.op==="and"}function Hg(t){return nb(t)&&Kg(t)}function nb(t){for(const e of t.filters)if(e instanceof Ot)return!1;return!0}function zl(t){if(t instanceof Le)return t.field.canonicalString()+t.op.toString()+Hr(t.value);if(Hg(t))return t.filters.map(e=>zl(e)).join(",");{const e=t.filters.map(n=>zl(n)).join(",");return`${t.op}(${e})`}}function Wg(t,e){return t instanceof Le?function(r,s){return s instanceof Le&&r.op===s.op&&r.field.isEqual(s.field)&&Qt(r.value,s.value)}(t,e):t instanceof Ot?function(r,s){return s instanceof Ot&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce((i,o,a)=>i&&Wg(o,s.filters[a]),!0):!1}(t,e):void G()}function zg(t){return t instanceof Le?function(n){return`${n.field.canonicalString()} ${n.op} ${Hr(n.value)}`}(t):t instanceof Ot?function(n){return n.op.toString()+" {"+n.getFilters().map(zg).join(" ,")+"}"}(t):"Filter"}class rb extends Le{constructor(e,n,r){super(e,n,r),this.key=j.fromName(r.referenceValue)}matches(e){const n=j.comparator(e.key,this.key);return this.matchesComparison(n)}}class sb extends Le{constructor(e,n){super(e,"in",n),this.keys=Gg("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class ib extends Le{constructor(e,n){super(e,"not-in",n),this.keys=Gg("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function Gg(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>j.fromName(r.referenceValue))}class ob extends Le{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return hu(n)&&Xs(n.arrayValue,this.value)}}class ab extends Le{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Xs(this.value.arrayValue,n)}}class lb extends Le{constructor(e,n){super(e,"not-in",n)}matches(e){if(Xs(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!Xs(this.value.arrayValue,n)}}class cb extends Le{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!hu(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>Xs(this.value.arrayValue,r))}}/**
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
 */class ub{constructor(e,n=null,r=[],s=[],i=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=o,this.endAt=a,this.he=null}}function vd(t,e=null,n=[],r=[],s=null,i=null,o=null){return new ub(t,e,n,r,s,i,o)}function du(t){const e=X(t);if(e.he===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>zl(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),_a(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>Hr(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>Hr(r)).join(",")),e.he=n}return e.he}function fu(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!tb(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!Wg(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!yd(t.startAt,e.startAt)&&yd(t.endAt,e.endAt)}function Gl(t){return j.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
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
 */class Ti{constructor(e,n=null,r=[],s=[],i=null,o="F",a=null,l=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=o,this.startAt=a,this.endAt=l,this.Pe=null,this.Ie=null,this.de=null,this.startAt,this.endAt}}function hb(t,e,n,r,s,i,o,a){return new Ti(t,e,n,r,s,i,o,a)}function pu(t){return new Ti(t)}function wd(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function Qg(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function gu(t){for(const e of t.filters){const n=e.getFirstInequalityField();if(n!==null)return n}return null}function Yg(t){return t.collectionGroup!==null}function ks(t){const e=X(t);if(e.Pe===null){e.Pe=[];const n=gu(e),r=Qg(e);if(n!==null&&r===null)n.isKeyField()||e.Pe.push(new Rs(n)),e.Pe.push(new Rs(it.keyField(),"asc"));else{let s=!1;for(const i of e.explicitOrderBy)e.Pe.push(i),i.field.isKeyField()&&(s=!0);if(!s){const i=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.Pe.push(new Rs(it.keyField(),i))}}}return e.Pe}function Wt(t){const e=X(t);return e.Ie||(e.Ie=db(e,ks(t))),e.Ie}function db(t,e){if(t.limitType==="F")return vd(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(s=>{const i=s.dir==="desc"?"asc":"desc";return new Rs(s.field,i)});const n=t.endAt?new Do(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new Do(t.startAt.position,t.startAt.inclusive):null;return vd(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function Ql(t,e){e.getFirstInequalityField(),gu(t);const n=t.filters.concat([e]);return new Ti(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function Yl(t,e,n){return new Ti(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function ya(t,e){return fu(Wt(t),Wt(e))&&t.limitType===e.limitType}function Jg(t){return`${du(Wt(t))}|lt:${t.limitType}`}function wr(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(s=>zg(s)).join(", ")}]`),_a(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(s=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(s)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(s=>Hr(s)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(s=>Hr(s)).join(",")),`Target(${r})`}(Wt(t))}; limitType=${t.limitType})`}function va(t,e){return e.isFoundDocument()&&function(r,s){const i=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(i):j.isDocumentKey(r.path)?r.path.isEqual(i):r.path.isImmediateParentOf(i)}(t,e)&&function(r,s){for(const i of ks(r))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(t,e)&&function(r,s){for(const i of r.filters)if(!i.matches(s))return!1;return!0}(t,e)&&function(r,s){return!(r.startAt&&!function(o,a,l){const c=_d(o,a,l);return o.inclusive?c<=0:c<0}(r.startAt,ks(r),s)||r.endAt&&!function(o,a,l){const c=_d(o,a,l);return o.inclusive?c>=0:c>0}(r.endAt,ks(r),s))}(t,e)}function fb(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function Xg(t){return(e,n)=>{let r=!1;for(const s of ks(t)){const i=pb(s,e,n);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function pb(t,e,n){const r=t.field.isKeyField()?j.comparator(e.key,n.key):function(i,o,a){const l=o.data.field(i),c=a.data.field(i);return l!==null&&c!==null?Kr(l,c):G()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return G()}}/**
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
 */class ss{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,n]);s.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[n]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){ur(this.inner,(n,r)=>{for(const[s,i]of r)e(s,i)})}isEmpty(){return $g(this.inner)}size(){return this.innerSize}}/**
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
 */const gb=new Ce(j.comparator);function cn(){return gb}const Zg=new Ce(j.comparator);function ys(...t){let e=Zg;for(const n of t)e=e.insert(n.key,n);return e}function em(t){let e=Zg;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function zn(){return Cs()}function tm(){return Cs()}function Cs(){return new ss(t=>t.toString(),(t,e)=>t.isEqual(e))}const mb=new Ce(j.comparator),_b=new ct(j.comparator);function re(...t){let e=_b;for(const n of t)e=e.add(n);return e}const yb=new ct(ue);function vb(){return yb}/**
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
 */function nm(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:xo(e)?"-0":e}}function rm(t){return{integerValue:""+t}}function wb(t,e){return J0(e)?rm(e):nm(t,e)}/**
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
 */class wa{constructor(){this._=void 0}}function Eb(t,e,n){return t instanceof No?function(s,i){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&cu(i)&&(i=uu(i)),i&&(o.fields.__previous_value__=i),{mapValue:o}}(n,e):t instanceof Zs?im(t,e):t instanceof ei?om(t,e):function(s,i){const o=sm(s,i),a=Ed(o)+Ed(s.Te);return Wl(o)&&Wl(s.Te)?rm(a):nm(s.serializer,a)}(t,e)}function Ib(t,e,n){return t instanceof Zs?im(t,e):t instanceof ei?om(t,e):n}function sm(t,e){return t instanceof Oo?function(r){return Wl(r)||function(i){return!!i&&"doubleValue"in i}(r)}(e)?e:{integerValue:0}:null}class No extends wa{}class Zs extends wa{constructor(e){super(),this.elements=e}}function im(t,e){const n=am(e);for(const r of t.elements)n.some(s=>Qt(s,r))||n.push(r);return{arrayValue:{values:n}}}class ei extends wa{constructor(e){super(),this.elements=e}}function om(t,e){let n=am(e);for(const r of t.elements)n=n.filter(s=>!Qt(s,r));return{arrayValue:{values:n}}}class Oo extends wa{constructor(e,n){super(),this.serializer=e,this.Te=n}}function Ed(t){return Me(t.integerValue||t.doubleValue)}function am(t){return hu(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function Tb(t,e){return t.field.isEqual(e.field)&&function(r,s){return r instanceof Zs&&s instanceof Zs||r instanceof ei&&s instanceof ei?qr(r.elements,s.elements,Qt):r instanceof Oo&&s instanceof Oo?Qt(r.Te,s.Te):r instanceof No&&s instanceof No}(t.transform,e.transform)}class bb{constructor(e,n){this.version=e,this.transformResults=n}}class At{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new At}static exists(e){return new At(void 0,e)}static updateTime(e){return new At(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function io(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class Ea{}function lm(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new mu(t.key,At.none()):new bi(t.key,t.data,At.none());{const n=t.data,r=mt.empty();let s=new ct(it.comparator);for(let i of e.fields)if(!s.has(i)){let o=n.field(i);o===null&&i.length>1&&(i=i.popLast(),o=n.field(i)),o===null?r.delete(i):r.set(i,o),s=s.add(i)}return new Mn(t.key,r,new vt(s.toArray()),At.none())}}function Ab(t,e,n){t instanceof bi?function(s,i,o){const a=s.value.clone(),l=Td(s.fieldTransforms,i,o.transformResults);a.setAll(l),i.convertToFoundDocument(o.version,a).setHasCommittedMutations()}(t,e,n):t instanceof Mn?function(s,i,o){if(!io(s.precondition,i))return void i.convertToUnknownDocument(o.version);const a=Td(s.fieldTransforms,i,o.transformResults),l=i.data;l.setAll(cm(s)),l.setAll(a),i.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(t,e,n):function(s,i,o){i.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function Ps(t,e,n,r){return t instanceof bi?function(i,o,a,l){if(!io(i.precondition,o))return a;const c=i.value.clone(),u=bd(i.fieldTransforms,l,o);return c.setAll(u),o.convertToFoundDocument(o.version,c).setHasLocalMutations(),null}(t,e,n,r):t instanceof Mn?function(i,o,a,l){if(!io(i.precondition,o))return a;const c=bd(i.fieldTransforms,l,o),u=o.data;return u.setAll(cm(i)),u.setAll(c),o.convertToFoundDocument(o.version,u).setHasLocalMutations(),a===null?null:a.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(h=>h.field))}(t,e,n,r):function(i,o,a){return io(i.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):a}(t,e,n)}function Rb(t,e){let n=null;for(const r of t.fieldTransforms){const s=e.data.field(r.field),i=sm(r.transform,s||null);i!=null&&(n===null&&(n=mt.empty()),n.set(r.field,i))}return n||null}function Id(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&qr(r,s,(i,o)=>Tb(i,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class bi extends Ea{constructor(e,n,r,s=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class Mn extends Ea{constructor(e,n,r,s,i=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function cm(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function Td(t,e,n){const r=new Map;be(t.length===n.length);for(let s=0;s<n.length;s++){const i=t[s],o=i.transform,a=e.data.field(i.field);r.set(i.field,Ib(o,a,n[s]))}return r}function bd(t,e,n){const r=new Map;for(const s of t){const i=s.transform,o=n.data.field(s.field);r.set(s.field,Eb(i,o,e))}return r}class mu extends Ea{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class kb extends Ea{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class Cb{constructor(e,n,r,s){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&Ab(i,e,r[s])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=Ps(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=Ps(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=tm();return this.mutations.forEach(s=>{const i=e.get(s.key),o=i.overlayedDocument;let a=this.applyToLocalView(o,i.mutatedFields);a=n.has(s.key)?null:a;const l=lm(o,a);l!==null&&r.set(s.key,l),o.isValidDocument()||o.convertToNoDocument(J.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),re())}isEqual(e){return this.batchId===e.batchId&&qr(this.mutations,e.mutations,(n,r)=>Id(n,r))&&qr(this.baseMutations,e.baseMutations,(n,r)=>Id(n,r))}}class _u{constructor(e,n,r,s){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=s}static from(e,n,r){be(e.mutations.length===r.length);let s=function(){return mb}();const i=e.mutations;for(let o=0;o<i.length;o++)s=s.insert(i[o].key,r[o].version);return new _u(e,n,r,s)}}/**
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
 */class Pb{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class Sb{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
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
 */var Ve,oe;function xb(t){switch(t){default:return G();case E.CANCELLED:case E.UNKNOWN:case E.DEADLINE_EXCEEDED:case E.RESOURCE_EXHAUSTED:case E.INTERNAL:case E.UNAVAILABLE:case E.UNAUTHENTICATED:return!1;case E.INVALID_ARGUMENT:case E.NOT_FOUND:case E.ALREADY_EXISTS:case E.PERMISSION_DENIED:case E.FAILED_PRECONDITION:case E.ABORTED:case E.OUT_OF_RANGE:case E.UNIMPLEMENTED:case E.DATA_LOSS:return!0}}function um(t){if(t===void 0)return ln("GRPC error has no .code"),E.UNKNOWN;switch(t){case Ve.OK:return E.OK;case Ve.CANCELLED:return E.CANCELLED;case Ve.UNKNOWN:return E.UNKNOWN;case Ve.DEADLINE_EXCEEDED:return E.DEADLINE_EXCEEDED;case Ve.RESOURCE_EXHAUSTED:return E.RESOURCE_EXHAUSTED;case Ve.INTERNAL:return E.INTERNAL;case Ve.UNAVAILABLE:return E.UNAVAILABLE;case Ve.UNAUTHENTICATED:return E.UNAUTHENTICATED;case Ve.INVALID_ARGUMENT:return E.INVALID_ARGUMENT;case Ve.NOT_FOUND:return E.NOT_FOUND;case Ve.ALREADY_EXISTS:return E.ALREADY_EXISTS;case Ve.PERMISSION_DENIED:return E.PERMISSION_DENIED;case Ve.FAILED_PRECONDITION:return E.FAILED_PRECONDITION;case Ve.ABORTED:return E.ABORTED;case Ve.OUT_OF_RANGE:return E.OUT_OF_RANGE;case Ve.UNIMPLEMENTED:return E.UNIMPLEMENTED;case Ve.DATA_LOSS:return E.DATA_LOSS;default:return G()}}(oe=Ve||(Ve={}))[oe.OK=0]="OK",oe[oe.CANCELLED=1]="CANCELLED",oe[oe.UNKNOWN=2]="UNKNOWN",oe[oe.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",oe[oe.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",oe[oe.NOT_FOUND=5]="NOT_FOUND",oe[oe.ALREADY_EXISTS=6]="ALREADY_EXISTS",oe[oe.PERMISSION_DENIED=7]="PERMISSION_DENIED",oe[oe.UNAUTHENTICATED=16]="UNAUTHENTICATED",oe[oe.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",oe[oe.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",oe[oe.ABORTED=10]="ABORTED",oe[oe.OUT_OF_RANGE=11]="OUT_OF_RANGE",oe[oe.UNIMPLEMENTED=12]="UNIMPLEMENTED",oe[oe.INTERNAL=13]="INTERNAL",oe[oe.UNAVAILABLE=14]="UNAVAILABLE",oe[oe.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function Db(){return new TextEncoder}/**
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
 */const Nb=new Nr([4294967295,4294967295],0);function Ad(t){const e=Db().encode(t),n=new M0;return n.update(e),new Uint8Array(n.digest())}function Rd(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),s=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new Nr([n,r],0),new Nr([s,i],0)]}class yu{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new vs(`Invalid padding: ${n}`);if(r<0)throw new vs(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new vs(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new vs(`Invalid padding when bitmap length is 0: ${n}`);this.Ae=8*e.length-n,this.Re=Nr.fromNumber(this.Ae)}Ve(e,n,r){let s=e.add(n.multiply(Nr.fromNumber(r)));return s.compare(Nb)===1&&(s=new Nr([s.getBits(0),s.getBits(1)],0)),s.modulo(this.Re).toNumber()}me(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Ae===0)return!1;const n=Ad(e),[r,s]=Rd(n);for(let i=0;i<this.hashCount;i++){const o=this.Ve(r,s,i);if(!this.me(o))return!1}return!0}static create(e,n,r){const s=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),o=new yu(i,s,n);return r.forEach(a=>o.insert(a)),o}insert(e){if(this.Ae===0)return;const n=Ad(e),[r,s]=Rd(n);for(let i=0;i<this.hashCount;i++){const o=this.Ve(r,s,i);this.fe(o)}}fe(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class vs extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class Ia{constructor(e,n,r,s,i){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const s=new Map;return s.set(e,Ai.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new Ia(J.min(),s,new Ce(ue),cn(),re())}}class Ai{constructor(e,n,r,s,i){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new Ai(r,n,re(),re(),re())}}/**
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
 */class oo{constructor(e,n,r,s){this.ge=e,this.removedTargetIds=n,this.key=r,this.pe=s}}class hm{constructor(e,n){this.targetId=e,this.ye=n}}class dm{constructor(e,n,r=ht.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=s}}class kd{constructor(){this.we=0,this.Se=Pd(),this.be=ht.EMPTY_BYTE_STRING,this.De=!1,this.Ce=!0}get current(){return this.De}get resumeToken(){return this.be}get ve(){return this.we!==0}get Fe(){return this.Ce}Me(e){e.approximateByteSize()>0&&(this.Ce=!0,this.be=e)}xe(){let e=re(),n=re(),r=re();return this.Se.forEach((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:n=n.add(s);break;case 1:r=r.add(s);break;default:G()}}),new Ai(this.be,this.De,e,n,r)}Oe(){this.Ce=!1,this.Se=Pd()}Ne(e,n){this.Ce=!0,this.Se=this.Se.insert(e,n)}Be(e){this.Ce=!0,this.Se=this.Se.remove(e)}Le(){this.we+=1}ke(){this.we-=1}qe(){this.Ce=!0,this.De=!0}}class Ob{constructor(e){this.Qe=e,this.Ke=new Map,this.$e=cn(),this.Ue=Cd(),this.We=new Ce(ue)}Ge(e){for(const n of e.ge)e.pe&&e.pe.isFoundDocument()?this.ze(n,e.pe):this.je(n,e.key,e.pe);for(const n of e.removedTargetIds)this.je(n,e.key,e.pe)}He(e){this.forEachTarget(e,n=>{const r=this.Je(n);switch(e.state){case 0:this.Ye(n)&&r.Me(e.resumeToken);break;case 1:r.ke(),r.ve||r.Oe(),r.Me(e.resumeToken);break;case 2:r.ke(),r.ve||this.removeTarget(n);break;case 3:this.Ye(n)&&(r.qe(),r.Me(e.resumeToken));break;case 4:this.Ye(n)&&(this.Ze(n),r.Me(e.resumeToken));break;default:G()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Ke.forEach((r,s)=>{this.Ye(s)&&n(s)})}Xe(e){const n=e.targetId,r=e.ye.count,s=this.et(n);if(s){const i=s.target;if(Gl(i))if(r===0){const o=new j(i.path);this.je(n,o,rt.newNoDocument(o,J.min()))}else be(r===1);else{const o=this.tt(n);if(o!==r){const a=this.nt(e),l=a?this.rt(a,e,o):1;if(l!==0){this.Ze(n);const c=l===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.We=this.We.insert(n,c)}}}}}nt(e){const n=e.ye.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:i=0}=n;let o,a;try{o=ar(r).toUint8Array()}catch(l){if(l instanceof Bg)return jr("Decoding the base64 bloom filter in existence filter failed ("+l.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw l}try{a=new yu(o,s,i)}catch(l){return jr(l instanceof vs?"BloomFilter error: ":"Applying bloom filter failed: ",l),null}return a.Ae===0?null:a}rt(e,n,r){return n.ye.count===r-this.ot(e,n.targetId)?0:2}ot(e,n){const r=this.Qe.getRemoteKeysForTarget(n);let s=0;return r.forEach(i=>{const o=this.Qe.st(),a=`projects/${o.projectId}/databases/${o.database}/documents/${i.path.canonicalString()}`;e.mightContain(a)||(this.je(n,i,null),s++)}),s}_t(e){const n=new Map;this.Ke.forEach((i,o)=>{const a=this.et(o);if(a){if(i.current&&Gl(a.target)){const l=new j(a.target.path);this.$e.get(l)!==null||this.ut(o,l)||this.je(o,l,rt.newNoDocument(l,e))}i.Fe&&(n.set(o,i.xe()),i.Oe())}});let r=re();this.Ue.forEach((i,o)=>{let a=!0;o.forEachWhile(l=>{const c=this.et(l);return!c||c.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)}),a&&(r=r.add(i))}),this.$e.forEach((i,o)=>o.setReadTime(e));const s=new Ia(e,n,this.We,this.$e,r);return this.$e=cn(),this.Ue=Cd(),this.We=new Ce(ue),s}ze(e,n){if(!this.Ye(e))return;const r=this.ut(e,n.key)?2:0;this.Je(e).Ne(n.key,r),this.$e=this.$e.insert(n.key,n),this.Ue=this.Ue.insert(n.key,this.ct(n.key).add(e))}je(e,n,r){if(!this.Ye(e))return;const s=this.Je(e);this.ut(e,n)?s.Ne(n,1):s.Be(n),this.Ue=this.Ue.insert(n,this.ct(n).delete(e)),r&&(this.$e=this.$e.insert(n,r))}removeTarget(e){this.Ke.delete(e)}tt(e){const n=this.Je(e).xe();return this.Qe.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Le(e){this.Je(e).Le()}Je(e){let n=this.Ke.get(e);return n||(n=new kd,this.Ke.set(e,n)),n}ct(e){let n=this.Ue.get(e);return n||(n=new ct(ue),this.Ue=this.Ue.insert(e,n)),n}Ye(e){const n=this.et(e)!==null;return n||L("WatchChangeAggregator","Detected inactive target",e),n}et(e){const n=this.Ke.get(e);return n&&n.ve?null:this.Qe.lt(e)}Ze(e){this.Ke.set(e,new kd),this.Qe.getRemoteKeysForTarget(e).forEach(n=>{this.je(e,n,null)})}ut(e,n){return this.Qe.getRemoteKeysForTarget(e).has(n)}}function Cd(){return new Ce(j.comparator)}function Pd(){return new Ce(j.comparator)}const Vb=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),Mb=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))(),Lb=(()=>({and:"AND",or:"OR"}))();class Ub{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function Jl(t,e){return t.useProto3Json||_a(e)?e:{value:e}}function Vo(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function fm(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function Fb(t,e){return Vo(t,e.toTimestamp())}function zt(t){return be(!!t),J.fromTimestamp(function(n){const r=Sn(n);return new pe(r.seconds,r.nanos)}(t))}function vu(t,e){return function(r){return new Te(["projects",r.projectId,"databases",r.database])}(t).child("documents").child(e).canonicalString()}function pm(t){const e=Te.fromString(t);return be(ym(e)),e}function Xl(t,e){return vu(t.databaseId,e.path)}function il(t,e){const n=pm(e);if(n.get(1)!==t.databaseId.projectId)throw new V(E.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new V(E.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new j(gm(n))}function Zl(t,e){return vu(t.databaseId,e)}function $b(t){const e=pm(t);return e.length===4?Te.emptyPath():gm(e)}function ec(t){return new Te(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function gm(t){return be(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function Sd(t,e,n){return{name:Xl(t,e),fields:n.value.mapValue.fields}}function Bb(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(c){return c==="NO_CHANGE"?0:c==="ADD"?1:c==="REMOVE"?2:c==="CURRENT"?3:c==="RESET"?4:G()}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=function(c,u){return c.useProto3Json?(be(u===void 0||typeof u=="string"),ht.fromBase64String(u||"")):(be(u===void 0||u instanceof Uint8Array),ht.fromUint8Array(u||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(c){const u=c.code===void 0?E.UNKNOWN:um(c.code);return new V(u,c.message||"")}(o);n=new dm(r,s,i,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=il(t,r.document.name),i=zt(r.document.updateTime),o=r.document.createTime?zt(r.document.createTime):J.min(),a=new mt({mapValue:{fields:r.document.fields}}),l=rt.newFoundDocument(s,i,o,a),c=r.targetIds||[],u=r.removedTargetIds||[];n=new oo(c,u,l.key,l)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=il(t,r.document),i=r.readTime?zt(r.readTime):J.min(),o=rt.newNoDocument(s,i),a=r.removedTargetIds||[];n=new oo([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=il(t,r.document),i=r.removedTargetIds||[];n=new oo([],i,s,null)}else{if(!("filter"in e))return G();{e.filter;const r=e.filter;r.targetId;const{count:s=0,unchangedNames:i}=r,o=new Sb(s,i),a=r.targetId;n=new hm(a,o)}}return n}function jb(t,e){let n;if(e instanceof bi)n={update:Sd(t,e.key,e.value)};else if(e instanceof mu)n={delete:Xl(t,e.key)};else if(e instanceof Mn)n={update:Sd(t,e.key,e.data),updateMask:Jb(e.fieldMask)};else{if(!(e instanceof kb))return G();n={verify:Xl(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(i,o){const a=o.transform;if(a instanceof No)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(a instanceof Zs)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:a.elements}};if(a instanceof ei)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:a.elements}};if(a instanceof Oo)return{fieldPath:o.field.canonicalString(),increment:a.Te};throw G()}(0,r))),e.precondition.isNone||(n.currentDocument=function(s,i){return i.updateTime!==void 0?{updateTime:Fb(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:G()}(t,e.precondition)),n}function qb(t,e){return t&&t.length>0?(be(e!==void 0),t.map(n=>function(s,i){let o=s.updateTime?zt(s.updateTime):zt(i);return o.isEqual(J.min())&&(o=zt(i)),new bb(o,s.transformResults||[])}(n,e))):[]}function Kb(t,e){return{documents:[Zl(t,e.path)]}}function Hb(t,e){const n={structuredQuery:{}},r=e.path;e.collectionGroup!==null?(n.parent=Zl(t,r),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=Zl(t,r.popLast()),n.structuredQuery.from=[{collectionId:r.lastSegment()}]);const s=function(l){if(l.length!==0)return _m(Ot.create(l,"and"))}(e.filters);s&&(n.structuredQuery.where=s);const i=function(l){if(l.length!==0)return l.map(c=>function(h){return{field:Er(h.field),direction:Gb(h.dir)}}(c))}(e.orderBy);i&&(n.structuredQuery.orderBy=i);const o=Jl(t,e.limit);return o!==null&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt=function(l){return{before:l.inclusive,values:l.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(l){return{before:!l.inclusive,values:l.position}}(e.endAt)),n}function Wb(t){let e=$b(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let s=null;if(r>0){be(r===1);const u=n.from[0];u.allDescendants?s=u.collectionId:e=e.child(u.collectionId)}let i=[];n.where&&(i=function(h){const d=mm(h);return d instanceof Ot&&Hg(d)?d.getFilters():[d]}(n.where));let o=[];n.orderBy&&(o=function(h){return h.map(d=>function(w){return new Rs(Ir(w.field),function(k){switch(k){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(w.direction))}(d))}(n.orderBy));let a=null;n.limit&&(a=function(h){let d;return d=typeof h=="object"?h.value:h,_a(d)?null:d}(n.limit));let l=null;n.startAt&&(l=function(h){const d=!!h.before,f=h.values||[];return new Do(f,d)}(n.startAt));let c=null;return n.endAt&&(c=function(h){const d=!h.before,f=h.values||[];return new Do(f,d)}(n.endAt)),hb(e,s,o,i,a,"F",l,c)}function zb(t,e){const n=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return G()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function mm(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=Ir(n.unaryFilter.field);return Le.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=Ir(n.unaryFilter.field);return Le.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=Ir(n.unaryFilter.field);return Le.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=Ir(n.unaryFilter.field);return Le.create(o,"!=",{nullValue:"NULL_VALUE"});default:return G()}}(t):t.fieldFilter!==void 0?function(n){return Le.create(Ir(n.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return G()}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return Ot.create(n.compositeFilter.filters.map(r=>mm(r)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return G()}}(n.compositeFilter.op))}(t):G()}function Gb(t){return Vb[t]}function Qb(t){return Mb[t]}function Yb(t){return Lb[t]}function Er(t){return{fieldPath:t.canonicalString()}}function Ir(t){return it.fromServerFormat(t.fieldPath)}function _m(t){return t instanceof Le?function(n){if(n.op==="=="){if(md(n.value))return{unaryFilter:{field:Er(n.field),op:"IS_NAN"}};if(gd(n.value))return{unaryFilter:{field:Er(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(md(n.value))return{unaryFilter:{field:Er(n.field),op:"IS_NOT_NAN"}};if(gd(n.value))return{unaryFilter:{field:Er(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Er(n.field),op:Qb(n.op),value:n.value}}}(t):t instanceof Ot?function(n){const r=n.getFilters().map(s=>_m(s));return r.length===1?r[0]:{compositeFilter:{op:Yb(n.op),filters:r}}}(t):G()}function Jb(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function ym(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
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
 */class En{constructor(e,n,r,s,i=J.min(),o=J.min(),a=ht.EMPTY_BYTE_STRING,l=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a,this.expectedCount=l}withSequenceNumber(e){return new En(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new En(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new En(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new En(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class Xb{constructor(e){this.ht=e}}function Zb(t){const e=Wb({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?Yl(e,e.limit,"L"):e}/**
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
 */class eA{constructor(){this.an=new tA}addToCollectionParentIndex(e,n){return this.an.add(n),A.resolve()}getCollectionParents(e,n){return A.resolve(this.an.getEntries(n))}addFieldIndex(e,n){return A.resolve()}deleteFieldIndex(e,n){return A.resolve()}deleteAllFieldIndexes(e){return A.resolve()}createTargetIndexes(e,n){return A.resolve()}getDocumentsMatchingTarget(e,n){return A.resolve(null)}getIndexType(e,n){return A.resolve(0)}getFieldIndexes(e,n){return A.resolve([])}getNextCollectionGroupToUpdate(e){return A.resolve(null)}getMinOffset(e,n){return A.resolve(Pn.min())}getMinOffsetFromCollectionGroup(e,n){return A.resolve(Pn.min())}updateCollectionGroup(e,n,r){return A.resolve()}updateIndexEntries(e,n){return A.resolve()}}class tA{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n]||new ct(Te.comparator),i=!s.has(r);return this.index[n]=s.add(r),i}has(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n];return s&&s.has(r)}getEntries(e){return(this.index[e]||new ct(Te.comparator)).toArray()}}/**
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
 */class nA{constructor(){this.changes=new ss(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,rt.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?A.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class rA{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
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
 */class sA{constructor(e,n,r,s){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=s}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(s=>(r=s,this.remoteDocumentCache.getEntry(e,n))).next(s=>(r!==null&&Ps(r.mutation,s,vt.empty(),pe.now()),s))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,re()).next(()=>r))}getLocalViewOfDocuments(e,n,r=re()){const s=zn();return this.populateOverlays(e,s,n).next(()=>this.computeViews(e,n,s,r).next(i=>{let o=ys();return i.forEach((a,l)=>{o=o.insert(a,l.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=zn();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,re()))}populateOverlays(e,n,r){const s=[];return r.forEach(i=>{n.has(i)||s.push(i)}),this.documentOverlayCache.getOverlays(e,s).next(i=>{i.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,r,s){let i=cn();const o=Cs(),a=function(){return Cs()}();return n.forEach((l,c)=>{const u=r.get(c.key);s.has(c.key)&&(u===void 0||u.mutation instanceof Mn)?i=i.insert(c.key,c):u!==void 0?(o.set(c.key,u.mutation.getFieldMask()),Ps(u.mutation,c,u.mutation.getFieldMask(),pe.now())):o.set(c.key,vt.empty())}),this.recalculateAndSaveOverlays(e,i).next(l=>(l.forEach((c,u)=>o.set(c,u)),n.forEach((c,u)=>{var h;return a.set(c,new rA(u,(h=o.get(c))!==null&&h!==void 0?h:null))}),a))}recalculateAndSaveOverlays(e,n){const r=Cs();let s=new Ce((o,a)=>o-a),i=re();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(l=>{const c=n.get(l);if(c===null)return;let u=r.get(l)||vt.empty();u=a.applyToLocalView(c,u),r.set(l,u);const h=(s.get(a.batchId)||re()).add(l);s=s.insert(a.batchId,h)})}).next(()=>{const o=[],a=s.getReverseIterator();for(;a.hasNext();){const l=a.getNext(),c=l.key,u=l.value,h=tm();u.forEach(d=>{if(!i.has(d)){const f=lm(n.get(d),r.get(d));f!==null&&h.set(d,f),i=i.add(d)}}),o.push(this.documentOverlayCache.saveOverlays(e,c,h))}return A.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,s){return function(o){return j.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):Yg(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,s):this.getDocumentsMatchingCollectionQuery(e,n,r,s)}getNextDocuments(e,n,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,s).next(i=>{const o=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,s-i.size):A.resolve(zn());let a=-1,l=i;return o.next(c=>A.forEach(c,(u,h)=>(a<h.largestBatchId&&(a=h.largestBatchId),i.get(u)?A.resolve():this.remoteDocumentCache.getEntry(e,u).next(d=>{l=l.insert(u,d)}))).next(()=>this.populateOverlays(e,c,i)).next(()=>this.computeViews(e,l,c,re())).next(u=>({batchId:a,changes:em(u)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new j(n)).next(r=>{let s=ys();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(e,n,r,s){const i=n.collectionGroup;let o=ys();return this.indexManager.getCollectionParents(e,i).next(a=>A.forEach(a,l=>{const c=function(h,d){return new Ti(d,null,h.explicitOrderBy.slice(),h.filters.slice(),h.limit,h.limitType,h.startAt,h.endAt)}(n,l.child(i));return this.getDocumentsMatchingCollectionQuery(e,c,r,s).next(u=>{u.forEach((h,d)=>{o=o.insert(h,d)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r,s){let i;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(o=>(i=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,i,s))).next(o=>{i.forEach((l,c)=>{const u=c.getKey();o.get(u)===null&&(o=o.insert(u,rt.newInvalidDocument(u)))});let a=ys();return o.forEach((l,c)=>{const u=i.get(l);u!==void 0&&Ps(u.mutation,c,vt.empty(),pe.now()),va(n,c)&&(a=a.insert(l,c))}),a})}}/**
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
 */class iA{constructor(e){this.serializer=e,this.lr=new Map,this.hr=new Map}getBundleMetadata(e,n){return A.resolve(this.lr.get(n))}saveBundleMetadata(e,n){return this.lr.set(n.id,function(s){return{id:s.id,version:s.version,createTime:zt(s.createTime)}}(n)),A.resolve()}getNamedQuery(e,n){return A.resolve(this.hr.get(n))}saveNamedQuery(e,n){return this.hr.set(n.name,function(s){return{name:s.name,query:Zb(s.bundledQuery),readTime:zt(s.readTime)}}(n)),A.resolve()}}/**
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
 */class oA{constructor(){this.overlays=new Ce(j.comparator),this.Pr=new Map}getOverlay(e,n){return A.resolve(this.overlays.get(n))}getOverlays(e,n){const r=zn();return A.forEach(n,s=>this.getOverlay(e,s).next(i=>{i!==null&&r.set(s,i)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((s,i)=>{this.It(e,n,i)}),A.resolve()}removeOverlaysForBatchId(e,n,r){const s=this.Pr.get(r);return s!==void 0&&(s.forEach(i=>this.overlays=this.overlays.remove(i)),this.Pr.delete(r)),A.resolve()}getOverlaysForCollection(e,n,r){const s=zn(),i=n.length+1,o=new j(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const l=a.getNext().value,c=l.getKey();if(!n.isPrefixOf(c.path))break;c.path.length===i&&l.largestBatchId>r&&s.set(l.getKey(),l)}return A.resolve(s)}getOverlaysForCollectionGroup(e,n,r,s){let i=new Ce((c,u)=>c-u);const o=this.overlays.getIterator();for(;o.hasNext();){const c=o.getNext().value;if(c.getKey().getCollectionGroup()===n&&c.largestBatchId>r){let u=i.get(c.largestBatchId);u===null&&(u=zn(),i=i.insert(c.largestBatchId,u)),u.set(c.getKey(),c)}}const a=zn(),l=i.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach((c,u)=>a.set(c,u)),!(a.size()>=s)););return A.resolve(a)}It(e,n,r){const s=this.overlays.get(r.key);if(s!==null){const o=this.Pr.get(s.largestBatchId).delete(r.key);this.Pr.set(s.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new Pb(n,r));let i=this.Pr.get(n);i===void 0&&(i=re(),this.Pr.set(n,i)),this.Pr.set(n,i.add(r.key))}}/**
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
 */class wu{constructor(){this.Ir=new ct(je.dr),this.Tr=new ct(je.Er)}isEmpty(){return this.Ir.isEmpty()}addReference(e,n){const r=new je(e,n);this.Ir=this.Ir.add(r),this.Tr=this.Tr.add(r)}Ar(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.Rr(new je(e,n))}Vr(e,n){e.forEach(r=>this.removeReference(r,n))}mr(e){const n=new j(new Te([])),r=new je(n,e),s=new je(n,e+1),i=[];return this.Tr.forEachInRange([r,s],o=>{this.Rr(o),i.push(o.key)}),i}gr(){this.Ir.forEach(e=>this.Rr(e))}Rr(e){this.Ir=this.Ir.delete(e),this.Tr=this.Tr.delete(e)}pr(e){const n=new j(new Te([])),r=new je(n,e),s=new je(n,e+1);let i=re();return this.Tr.forEachInRange([r,s],o=>{i=i.add(o.key)}),i}containsKey(e){const n=new je(e,0),r=this.Ir.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class je{constructor(e,n){this.key=e,this.yr=n}static dr(e,n){return j.comparator(e.key,n.key)||ue(e.yr,n.yr)}static Er(e,n){return ue(e.yr,n.yr)||j.comparator(e.key,n.key)}}/**
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
 */class aA{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.wr=1,this.Sr=new ct(je.dr)}checkEmpty(e){return A.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,s){const i=this.wr;this.wr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new Cb(i,n,r,s);this.mutationQueue.push(o);for(const a of s)this.Sr=this.Sr.add(new je(a.key,i)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return A.resolve(o)}lookupMutationBatch(e,n){return A.resolve(this.br(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,s=this.Dr(r),i=s<0?0:s;return A.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return A.resolve(this.mutationQueue.length===0?-1:this.wr-1)}getAllMutationBatches(e){return A.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new je(n,0),s=new je(n,Number.POSITIVE_INFINITY),i=[];return this.Sr.forEachInRange([r,s],o=>{const a=this.br(o.yr);i.push(a)}),A.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new ct(ue);return n.forEach(s=>{const i=new je(s,0),o=new je(s,Number.POSITIVE_INFINITY);this.Sr.forEachInRange([i,o],a=>{r=r.add(a.yr)})}),A.resolve(this.Cr(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,s=r.length+1;let i=r;j.isDocumentKey(i)||(i=i.child(""));const o=new je(new j(i),0);let a=new ct(ue);return this.Sr.forEachWhile(l=>{const c=l.key.path;return!!r.isPrefixOf(c)&&(c.length===s&&(a=a.add(l.yr)),!0)},o),A.resolve(this.Cr(a))}Cr(e){const n=[];return e.forEach(r=>{const s=this.br(r);s!==null&&n.push(s)}),n}removeMutationBatch(e,n){be(this.vr(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.Sr;return A.forEach(n.mutations,s=>{const i=new je(s.key,n.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this.Sr=r})}xn(e){}containsKey(e,n){const r=new je(n,0),s=this.Sr.firstAfterOrEqual(r);return A.resolve(n.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,A.resolve()}vr(e,n){return this.Dr(e)}Dr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}br(e){const n=this.Dr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
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
 */class lA{constructor(e){this.Fr=e,this.docs=function(){return new Ce(j.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,s=this.docs.get(r),i=s?s.size:0,o=this.Fr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return A.resolve(r?r.document.mutableCopy():rt.newInvalidDocument(n))}getEntries(e,n){let r=cn();return n.forEach(s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():rt.newInvalidDocument(s))}),A.resolve(r)}getDocumentsMatchingQuery(e,n,r,s){let i=cn();const o=n.path,a=new j(o.child("")),l=this.docs.getIteratorFrom(a);for(;l.hasNext();){const{key:c,value:{document:u}}=l.getNext();if(!o.isPrefixOf(c.path))break;c.path.length>o.length+1||G0(z0(u),r)<=0||(s.has(u.key)||va(n,u))&&(i=i.insert(u.key,u.mutableCopy()))}return A.resolve(i)}getAllFromCollectionGroup(e,n,r,s){G()}Mr(e,n){return A.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new cA(this)}getSize(e){return A.resolve(this.size)}}class cA extends nA{constructor(e){super(),this.ur=e}applyChanges(e){const n=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?n.push(this.ur.addEntry(e,s)):this.ur.removeEntry(r)}),A.waitFor(n)}getFromCache(e,n){return this.ur.getEntry(e,n)}getAllFromCache(e,n){return this.ur.getEntries(e,n)}}/**
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
 */class uA{constructor(e){this.persistence=e,this.Or=new ss(n=>du(n),fu),this.lastRemoteSnapshotVersion=J.min(),this.highestTargetId=0,this.Nr=0,this.Br=new wu,this.targetCount=0,this.Lr=Wr.Bn()}forEachTarget(e,n){return this.Or.forEach((r,s)=>n(s)),A.resolve()}getLastRemoteSnapshotVersion(e){return A.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return A.resolve(this.Nr)}allocateTargetId(e){return this.highestTargetId=this.Lr.next(),A.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Nr&&(this.Nr=n),A.resolve()}Qn(e){this.Or.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.Lr=new Wr(n),this.highestTargetId=n),e.sequenceNumber>this.Nr&&(this.Nr=e.sequenceNumber)}addTargetData(e,n){return this.Qn(n),this.targetCount+=1,A.resolve()}updateTargetData(e,n){return this.Qn(n),A.resolve()}removeTargetData(e,n){return this.Or.delete(n.target),this.Br.mr(n.targetId),this.targetCount-=1,A.resolve()}removeTargets(e,n,r){let s=0;const i=[];return this.Or.forEach((o,a)=>{a.sequenceNumber<=n&&r.get(a.targetId)===null&&(this.Or.delete(o),i.push(this.removeMatchingKeysForTargetId(e,a.targetId)),s++)}),A.waitFor(i).next(()=>s)}getTargetCount(e){return A.resolve(this.targetCount)}getTargetData(e,n){const r=this.Or.get(n)||null;return A.resolve(r)}addMatchingKeys(e,n,r){return this.Br.Ar(n,r),A.resolve()}removeMatchingKeys(e,n,r){this.Br.Vr(n,r);const s=this.persistence.referenceDelegate,i=[];return s&&n.forEach(o=>{i.push(s.markPotentiallyOrphaned(e,o))}),A.waitFor(i)}removeMatchingKeysForTargetId(e,n){return this.Br.mr(n),A.resolve()}getMatchingKeysForTargetId(e,n){const r=this.Br.pr(n);return A.resolve(r)}containsKey(e,n){return A.resolve(this.Br.containsKey(n))}}/**
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
 */class hA{constructor(e,n){this.kr={},this.overlays={},this.qr=new lu(0),this.Qr=!1,this.Qr=!0,this.referenceDelegate=e(this),this.Kr=new uA(this),this.indexManager=new eA,this.remoteDocumentCache=function(s){return new lA(s)}(r=>this.referenceDelegate.$r(r)),this.serializer=new Xb(n),this.Ur=new iA(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Qr=!1,Promise.resolve()}get started(){return this.Qr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new oA,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.kr[e.toKey()];return r||(r=new aA(n,this.referenceDelegate),this.kr[e.toKey()]=r),r}getTargetCache(){return this.Kr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ur}runTransaction(e,n,r){L("MemoryPersistence","Starting transaction:",e);const s=new dA(this.qr.next());return this.referenceDelegate.Wr(),r(s).next(i=>this.referenceDelegate.Gr(s).next(()=>i)).toPromise().then(i=>(s.raiseOnCommittedEvent(),i))}zr(e,n){return A.or(Object.values(this.kr).map(r=>()=>r.containsKey(e,n)))}}class dA extends Y0{constructor(e){super(),this.currentSequenceNumber=e}}class Eu{constructor(e){this.persistence=e,this.jr=new wu,this.Hr=null}static Jr(e){return new Eu(e)}get Yr(){if(this.Hr)return this.Hr;throw G()}addReference(e,n,r){return this.jr.addReference(r,n),this.Yr.delete(r.toString()),A.resolve()}removeReference(e,n,r){return this.jr.removeReference(r,n),this.Yr.add(r.toString()),A.resolve()}markPotentiallyOrphaned(e,n){return this.Yr.add(n.toString()),A.resolve()}removeTarget(e,n){this.jr.mr(n.targetId).forEach(s=>this.Yr.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(s=>{s.forEach(i=>this.Yr.add(i.toString()))}).next(()=>r.removeTargetData(e,n))}Wr(){this.Hr=new Set}Gr(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return A.forEach(this.Yr,r=>{const s=j.fromPath(r);return this.Zr(e,s).next(i=>{i||n.removeEntry(s,J.min())})}).next(()=>(this.Hr=null,n.apply(e)))}updateLimboDocument(e,n){return this.Zr(e,n).next(r=>{r?this.Yr.delete(n.toString()):this.Yr.add(n.toString())})}$r(e){return 0}Zr(e,n){return A.or([()=>A.resolve(this.jr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.zr(e,n)])}}/**
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
 */class Iu{constructor(e,n,r,s){this.targetId=e,this.fromCache=n,this.Qi=r,this.Ki=s}static $i(e,n){let r=re(),s=re();for(const i of n.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new Iu(e,n.fromCache,r,s)}}/**
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
 */class fA{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class pA{constructor(){this.Ui=!1,this.Wi=!1,this.Gi=100,this.zi=8}initialize(e,n){this.ji=e,this.indexManager=n,this.Ui=!0}getDocumentsMatchingQuery(e,n,r,s){const i={result:null};return this.Hi(e,n).next(o=>{i.result=o}).next(()=>{if(!i.result)return this.Ji(e,n,s,r).next(o=>{i.result=o})}).next(()=>{if(i.result)return;const o=new fA;return this.Yi(e,n,o).next(a=>{if(i.result=a,this.Wi)return this.Zi(e,n,o,a.size)})}).next(()=>i.result)}Zi(e,n,r,s){return r.documentReadCount<this.Gi?(hs()<=se.DEBUG&&L("QueryEngine","SDK will not create cache indexes for query:",wr(n),"since it only creates cache indexes for collection contains","more than or equal to",this.Gi,"documents"),A.resolve()):(hs()<=se.DEBUG&&L("QueryEngine","Query:",wr(n),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.zi*s?(hs()<=se.DEBUG&&L("QueryEngine","The SDK decides to create cache indexes for query:",wr(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Wt(n))):A.resolve())}Hi(e,n){if(wd(n))return A.resolve(null);let r=Wt(n);return this.indexManager.getIndexType(e,r).next(s=>s===0?null:(n.limit!==null&&s===1&&(n=Yl(n,null,"F"),r=Wt(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(i=>{const o=re(...i);return this.ji.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,r).next(l=>{const c=this.Xi(n,a);return this.es(n,c,o,l.readTime)?this.Hi(e,Yl(n,null,"F")):this.ts(e,c,n,l)}))})))}Ji(e,n,r,s){return wd(n)||s.isEqual(J.min())?A.resolve(null):this.ji.getDocuments(e,r).next(i=>{const o=this.Xi(n,i);return this.es(n,o,r,s)?A.resolve(null):(hs()<=se.DEBUG&&L("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),wr(n)),this.ts(e,o,n,W0(s,-1)).next(a=>a))})}Xi(e,n){let r=new ct(Xg(e));return n.forEach((s,i)=>{va(e,i)&&(r=r.add(i))}),r}es(e,n,r,s){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const i=e.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}Yi(e,n,r){return hs()<=se.DEBUG&&L("QueryEngine","Using full collection scan to execute query:",wr(n)),this.ji.getDocumentsMatchingQuery(e,n,Pn.min(),r)}ts(e,n,r,s){return this.ji.getDocumentsMatchingQuery(e,r,s).next(i=>(n.forEach(o=>{i=i.insert(o.key,o)}),i))}}/**
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
 */class gA{constructor(e,n,r,s){this.persistence=e,this.ns=n,this.serializer=s,this.rs=new Ce(ue),this.ss=new ss(i=>du(i),fu),this.os=new Map,this._s=e.getRemoteDocumentCache(),this.Kr=e.getTargetCache(),this.Ur=e.getBundleCache(),this.us(r)}us(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new sA(this._s,this.mutationQueue,this.documentOverlayCache,this.indexManager),this._s.setIndexManager(this.indexManager),this.ns.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.rs))}}function mA(t,e,n,r){return new gA(t,e,n,r)}async function vm(t,e){const n=X(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let s;return n.mutationQueue.getAllMutationBatches(r).next(i=>(s=i,n.us(e),n.mutationQueue.getAllMutationBatches(r))).next(i=>{const o=[],a=[];let l=re();for(const c of s){o.push(c.batchId);for(const u of c.mutations)l=l.add(u.key)}for(const c of i){a.push(c.batchId);for(const u of c.mutations)l=l.add(u.key)}return n.localDocuments.getDocuments(r,l).next(c=>({cs:c,removedBatchIds:o,addedBatchIds:a}))})})}function _A(t,e){const n=X(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const s=e.batch.keys(),i=n._s.newChangeBuffer({trackRemovals:!0});return function(a,l,c,u){const h=c.batch,d=h.keys();let f=A.resolve();return d.forEach(w=>{f=f.next(()=>u.getEntry(l,w)).next(y=>{const k=c.docVersions.get(w);be(k!==null),y.version.compareTo(k)<0&&(h.applyToRemoteDocument(y,c),y.isValidDocument()&&(y.setReadTime(c.commitVersion),u.addEntry(y)))})}),f.next(()=>a.mutationQueue.removeMutationBatch(l,h))}(n,r,e,i).next(()=>i.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,s,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(a){let l=re();for(let c=0;c<a.mutationResults.length;++c)a.mutationResults[c].transformResults.length>0&&(l=l.add(a.batch.mutations[c].key));return l}(e))).next(()=>n.localDocuments.getDocuments(r,s))})}function wm(t){const e=X(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Kr.getLastRemoteSnapshotVersion(n))}function yA(t,e){const n=X(t),r=e.snapshotVersion;let s=n.rs;return n.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=n._s.newChangeBuffer({trackRemovals:!0});s=n.rs;const a=[];e.targetChanges.forEach((u,h)=>{const d=s.get(h);if(!d)return;a.push(n.Kr.removeMatchingKeys(i,u.removedDocuments,h).next(()=>n.Kr.addMatchingKeys(i,u.addedDocuments,h)));let f=d.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(h)!==null?f=f.withResumeToken(ht.EMPTY_BYTE_STRING,J.min()).withLastLimboFreeSnapshotVersion(J.min()):u.resumeToken.approximateByteSize()>0&&(f=f.withResumeToken(u.resumeToken,r)),s=s.insert(h,f),function(y,k,U){return y.resumeToken.approximateByteSize()===0||k.snapshotVersion.toMicroseconds()-y.snapshotVersion.toMicroseconds()>=3e8?!0:U.addedDocuments.size+U.modifiedDocuments.size+U.removedDocuments.size>0}(d,f,u)&&a.push(n.Kr.updateTargetData(i,f))});let l=cn(),c=re();if(e.documentUpdates.forEach(u=>{e.resolvedLimboDocuments.has(u)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(i,u))}),a.push(vA(i,o,e.documentUpdates).next(u=>{l=u.ls,c=u.hs})),!r.isEqual(J.min())){const u=n.Kr.getLastRemoteSnapshotVersion(i).next(h=>n.Kr.setTargetsMetadata(i,i.currentSequenceNumber,r));a.push(u)}return A.waitFor(a).next(()=>o.apply(i)).next(()=>n.localDocuments.getLocalViewOfDocuments(i,l,c)).next(()=>l)}).then(i=>(n.rs=s,i))}function vA(t,e,n){let r=re(),s=re();return n.forEach(i=>r=r.add(i)),e.getEntries(t,r).next(i=>{let o=cn();return n.forEach((a,l)=>{const c=i.get(a);l.isFoundDocument()!==c.isFoundDocument()&&(s=s.add(a)),l.isNoDocument()&&l.version.isEqual(J.min())?(e.removeEntry(a,l.readTime),o=o.insert(a,l)):!c.isValidDocument()||l.version.compareTo(c.version)>0||l.version.compareTo(c.version)===0&&c.hasPendingWrites?(e.addEntry(l),o=o.insert(a,l)):L("LocalStore","Ignoring outdated watch update for ",a,". Current version:",c.version," Watch version:",l.version)}),{ls:o,hs:s}})}function wA(t,e){const n=X(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function EA(t,e){const n=X(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return n.Kr.getTargetData(r,e).next(i=>i?(s=i,A.resolve(s)):n.Kr.allocateTargetId(r).next(o=>(s=new En(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.Kr.addTargetData(r,s).next(()=>s))))}).then(r=>{const s=n.rs.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(n.rs=n.rs.insert(r.targetId,r),n.ss.set(e,r.targetId)),r})}async function tc(t,e,n){const r=X(t),s=r.rs.get(e),i=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",i,o=>r.persistence.referenceDelegate.removeTarget(o,s))}catch(o){if(!Ii(o))throw o;L("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.rs=r.rs.remove(e),r.ss.delete(s.target)}function xd(t,e,n){const r=X(t);let s=J.min(),i=re();return r.persistence.runTransaction("Execute query","readwrite",o=>function(l,c,u){const h=X(l),d=h.ss.get(u);return d!==void 0?A.resolve(h.rs.get(d)):h.Kr.getTargetData(c,u)}(r,o,Wt(e)).next(a=>{if(a)return s=a.lastLimboFreeSnapshotVersion,r.Kr.getMatchingKeysForTargetId(o,a.targetId).next(l=>{i=l})}).next(()=>r.ns.getDocumentsMatchingQuery(o,e,n?s:J.min(),n?i:re())).next(a=>(IA(r,fb(e),a),{documents:a,Ps:i})))}function IA(t,e,n){let r=t.os.get(e)||J.min();n.forEach((s,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)}),t.os.set(e,r)}class Dd{constructor(){this.activeTargetIds=vb()}Rs(e){this.activeTargetIds=this.activeTargetIds.add(e)}Vs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}As(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class TA{constructor(){this.ro=new Dd,this.io={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e){return this.ro.Rs(e),this.io[e]||"not-current"}updateQueryState(e,n,r){this.io[e]=n}removeLocalQueryTarget(e){this.ro.Vs(e)}isLocalQueryTarget(e){return this.ro.activeTargetIds.has(e)}clearQueryState(e){delete this.io[e]}getAllActiveQueryTargets(){return this.ro.activeTargetIds}isActiveQueryTarget(e){return this.ro.activeTargetIds.has(e)}start(){return this.ro=new Dd,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class bA{so(e){}shutdown(){}}/**
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
 */class Nd{constructor(){this.oo=()=>this._o(),this.ao=()=>this.uo(),this.co=[],this.lo()}so(e){this.co.push(e)}shutdown(){window.removeEventListener("online",this.oo),window.removeEventListener("offline",this.ao)}lo(){window.addEventListener("online",this.oo),window.addEventListener("offline",this.ao)}_o(){L("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.co)e(0)}uo(){L("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.co)e(1)}static C(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let Hi=null;function ol(){return Hi===null?Hi=function(){return 268435456+Math.round(2147483648*Math.random())}():Hi++,"0x"+Hi.toString(16)}/**
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
 */const AA={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
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
 */class RA{constructor(e){this.ho=e.ho,this.Po=e.Po}Io(e){this.To=e}Eo(e){this.Ao=e}onMessage(e){this.Ro=e}close(){this.Po()}send(e){this.ho(e)}Vo(){this.To()}mo(e){this.Ao(e)}fo(e){this.Ro(e)}}/**
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
 */const et="WebChannelConnection";class kA extends class{constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const r=n.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.po=r+"://"+n.host,this.yo=`projects/${s}/databases/${i}`,this.wo=this.databaseId.database==="(default)"?`project_id=${s}`:`project_id=${s}&database_id=${i}`}get So(){return!1}bo(n,r,s,i,o){const a=ol(),l=this.Do(n,r);L("RestConnection",`Sending RPC '${n}' ${a}:`,l,s);const c={"google-cloud-resource-prefix":this.yo,"x-goog-request-params":this.wo};return this.Co(c,i,o),this.vo(n,l,c,s).then(u=>(L("RestConnection",`Received RPC '${n}' ${a}: `,u),u),u=>{throw jr("RestConnection",`RPC '${n}' ${a} failed with error: `,u,"url: ",l,"request:",s),u})}Fo(n,r,s,i,o,a){return this.bo(n,r,s,i,o)}Co(n,r,s){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+rs}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((i,o)=>n[o]=i),s&&s.headers.forEach((i,o)=>n[o]=i)}Do(n,r){const s=AA[n];return`${this.po}/v1/${r}:${s}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}vo(e,n,r,s){const i=ol();return new Promise((o,a)=>{const l=new V0;l.setWithCredentials(!0),l.listenOnce(N0.COMPLETE,()=>{try{switch(l.getLastErrorCode()){case sl.NO_ERROR:const u=l.getResponseJson();L(et,`XHR for RPC '${e}' ${i} received:`,JSON.stringify(u)),o(u);break;case sl.TIMEOUT:L(et,`RPC '${e}' ${i} timed out`),a(new V(E.DEADLINE_EXCEEDED,"Request time out"));break;case sl.HTTP_ERROR:const h=l.getStatus();if(L(et,`RPC '${e}' ${i} failed with status:`,h,"response text:",l.getResponseText()),h>0){let d=l.getResponseJson();Array.isArray(d)&&(d=d[0]);const f=d==null?void 0:d.error;if(f&&f.status&&f.message){const w=function(k){const U=k.toLowerCase().replace(/_/g,"-");return Object.values(E).indexOf(U)>=0?U:E.UNKNOWN}(f.status);a(new V(w,f.message))}else a(new V(E.UNKNOWN,"Server responded with status "+l.getStatus()))}else a(new V(E.UNAVAILABLE,"Connection failed."));break;default:G()}}finally{L(et,`RPC '${e}' ${i} completed.`)}});const c=JSON.stringify(s);L(et,`RPC '${e}' ${i} sending request:`,s),l.send(n,"POST",c,r,15)})}Mo(e,n,r){const s=ol(),i=[this.po,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=x0(),a=D0(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},c=this.longPollingOptions.timeoutSeconds;c!==void 0&&(l.longPollingTimeout=Math.round(1e3*c)),this.useFetchStreams&&(l.useFetchStreams=!0),this.Co(l.initMessageHeaders,n,r),l.encodeInitMessageHeaders=!0;const u=i.join("");L(et,`Creating RPC '${e}' stream ${s}: ${u}`,l);const h=o.createWebChannel(u,l);let d=!1,f=!1;const w=new RA({ho:k=>{f?L(et,`Not sending because RPC '${e}' stream ${s} is closed:`,k):(d||(L(et,`Opening RPC '${e}' stream ${s} transport.`),h.open(),d=!0),L(et,`RPC '${e}' stream ${s} sending:`,k),h.send(k))},Po:()=>h.close()}),y=(k,U,O)=>{k.listen(U,B=>{try{O(B)}catch(F){setTimeout(()=>{throw F},0)}})};return y(h,ji.EventType.OPEN,()=>{f||L(et,`RPC '${e}' stream ${s} transport opened.`)}),y(h,ji.EventType.CLOSE,()=>{f||(f=!0,L(et,`RPC '${e}' stream ${s} transport closed`),w.mo())}),y(h,ji.EventType.ERROR,k=>{f||(f=!0,jr(et,`RPC '${e}' stream ${s} transport errored:`,k),w.mo(new V(E.UNAVAILABLE,"The operation could not be completed")))}),y(h,ji.EventType.MESSAGE,k=>{var U;if(!f){const O=k.data[0];be(!!O);const B=O,F=B.error||((U=B[0])===null||U===void 0?void 0:U.error);if(F){L(et,`RPC '${e}' stream ${s} received error:`,F);const Re=F.status;let ke=function(_){const b=Ve[_];if(b!==void 0)return um(b)}(Re),Ue=F.message;ke===void 0&&(ke=E.INTERNAL,Ue="Unknown error status: "+Re+" with message "+F.message),f=!0,w.mo(new V(ke,Ue)),h.close()}else L(et,`RPC '${e}' stream ${s} received:`,O),w.fo(O)}}),y(a,O0.STAT_EVENT,k=>{k.stat===cd.PROXY?L(et,`RPC '${e}' stream ${s} detected buffering proxy`):k.stat===cd.NOPROXY&&L(et,`RPC '${e}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{w.Vo()},0),w}}function al(){return typeof document<"u"?document:null}/**
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
 */function Ta(t){return new Ub(t,!0)}/**
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
 */class Em{constructor(e,n,r=1e3,s=1.5,i=6e4){this._i=e,this.timerId=n,this.xo=r,this.Oo=s,this.No=i,this.Bo=0,this.Lo=null,this.ko=Date.now(),this.reset()}reset(){this.Bo=0}qo(){this.Bo=this.No}Qo(e){this.cancel();const n=Math.floor(this.Bo+this.Ko()),r=Math.max(0,Date.now()-this.ko),s=Math.max(0,n-r);s>0&&L("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.Bo} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.Lo=this._i.enqueueAfterDelay(this.timerId,s,()=>(this.ko=Date.now(),e())),this.Bo*=this.Oo,this.Bo<this.xo&&(this.Bo=this.xo),this.Bo>this.No&&(this.Bo=this.No)}$o(){this.Lo!==null&&(this.Lo.skipDelay(),this.Lo=null)}cancel(){this.Lo!==null&&(this.Lo.cancel(),this.Lo=null)}Ko(){return(Math.random()-.5)*this.Bo}}/**
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
 */class Im{constructor(e,n,r,s,i,o,a,l){this._i=e,this.Uo=r,this.Wo=s,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=l,this.state=0,this.Go=0,this.zo=null,this.jo=null,this.stream=null,this.Ho=new Em(e,n)}Jo(){return this.state===1||this.state===5||this.Yo()}Yo(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Zo()}async stop(){this.Jo()&&await this.close(0)}Xo(){this.state=0,this.Ho.reset()}e_(){this.Yo()&&this.zo===null&&(this.zo=this._i.enqueueAfterDelay(this.Uo,6e4,()=>this.t_()))}n_(e){this.r_(),this.stream.send(e)}async t_(){if(this.Yo())return this.close(0)}r_(){this.zo&&(this.zo.cancel(),this.zo=null)}i_(){this.jo&&(this.jo.cancel(),this.jo=null)}async close(e,n){this.r_(),this.i_(),this.Ho.cancel(),this.Go++,e!==4?this.Ho.reset():n&&n.code===E.RESOURCE_EXHAUSTED?(ln(n.toString()),ln("Using maximum backoff delay to prevent overloading the backend."),this.Ho.qo()):n&&n.code===E.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.s_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Eo(n)}s_(){}auth(){this.state=1;const e=this.o_(this.Go),n=this.Go;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.Go===n&&this.__(r,s)},r=>{e(()=>{const s=new V(E.UNKNOWN,"Fetching auth token failed: "+r.message);return this.a_(s)})})}__(e,n){const r=this.o_(this.Go);this.stream=this.u_(e,n),this.stream.Io(()=>{r(()=>(this.state=2,this.jo=this._i.enqueueAfterDelay(this.Wo,1e4,()=>(this.Yo()&&(this.state=3),Promise.resolve())),this.listener.Io()))}),this.stream.Eo(s=>{r(()=>this.a_(s))}),this.stream.onMessage(s=>{r(()=>this.onMessage(s))})}Zo(){this.state=5,this.Ho.Qo(async()=>{this.state=0,this.start()})}a_(e){return L("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}o_(e){return n=>{this._i.enqueueAndForget(()=>this.Go===e?n():(L("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class CA extends Im{constructor(e,n,r,s,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}u_(e,n){return this.connection.Mo("Listen",e,n)}onMessage(e){this.Ho.reset();const n=Bb(this.serializer,e),r=function(i){if(!("targetChange"in i))return J.min();const o=i.targetChange;return o.targetIds&&o.targetIds.length?J.min():o.readTime?zt(o.readTime):J.min()}(e);return this.listener.c_(n,r)}l_(e){const n={};n.database=ec(this.serializer),n.addTarget=function(i,o){let a;const l=o.target;if(a=Gl(l)?{documents:Kb(i,l)}:{query:Hb(i,l)},a.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){a.resumeToken=fm(i,o.resumeToken);const c=Jl(i,o.expectedCount);c!==null&&(a.expectedCount=c)}else if(o.snapshotVersion.compareTo(J.min())>0){a.readTime=Vo(i,o.snapshotVersion.toTimestamp());const c=Jl(i,o.expectedCount);c!==null&&(a.expectedCount=c)}return a}(this.serializer,e);const r=zb(this.serializer,e);r&&(n.labels=r),this.n_(n)}h_(e){const n={};n.database=ec(this.serializer),n.removeTarget=e,this.n_(n)}}class PA extends Im{constructor(e,n,r,s,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i,this.P_=!1}get I_(){return this.P_}start(){this.P_=!1,this.lastStreamToken=void 0,super.start()}s_(){this.P_&&this.d_([])}u_(e,n){return this.connection.Mo("Write",e,n)}onMessage(e){if(be(!!e.streamToken),this.lastStreamToken=e.streamToken,this.P_){this.Ho.reset();const n=qb(e.writeResults,e.commitTime),r=zt(e.commitTime);return this.listener.T_(r,n)}return be(!e.writeResults||e.writeResults.length===0),this.P_=!0,this.listener.E_()}A_(){const e={};e.database=ec(this.serializer),this.n_(e)}d_(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>jb(this.serializer,r))};this.n_(n)}}/**
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
 */class SA extends class{}{constructor(e,n,r,s){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=s,this.R_=!1}V_(){if(this.R_)throw new V(E.FAILED_PRECONDITION,"The client has already been terminated.")}bo(e,n,r){return this.V_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,i])=>this.connection.bo(e,n,r,s,i)).catch(s=>{throw s.name==="FirebaseError"?(s.code===E.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new V(E.UNKNOWN,s.toString())})}Fo(e,n,r,s){return this.V_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.connection.Fo(e,n,r,i,o,s)).catch(i=>{throw i.name==="FirebaseError"?(i.code===E.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new V(E.UNKNOWN,i.toString())})}terminate(){this.R_=!0}}class xA{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.f_=0,this.g_=null,this.p_=!0}y_(){this.f_===0&&(this.w_("Unknown"),this.g_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.g_=null,this.S_("Backend didn't respond within 10 seconds."),this.w_("Offline"),Promise.resolve())))}b_(e){this.state==="Online"?this.w_("Unknown"):(this.f_++,this.f_>=1&&(this.D_(),this.S_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.w_("Offline")))}set(e){this.D_(),this.f_=0,e==="Online"&&(this.p_=!1),this.w_(e)}w_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}S_(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.p_?(ln(n),this.p_=!1):L("OnlineStateTracker",n)}D_(){this.g_!==null&&(this.g_.cancel(),this.g_=null)}}/**
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
 */class DA{constructor(e,n,r,s,i){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.C_=[],this.v_=new Map,this.F_=new Set,this.M_=[],this.x_=i,this.x_.so(o=>{r.enqueueAndForget(async()=>{hr(this)&&(L("RemoteStore","Restarting streams for network reachability change."),await async function(l){const c=X(l);c.F_.add(4),await Ri(c),c.O_.set("Unknown"),c.F_.delete(4),await ba(c)}(this))})}),this.O_=new xA(r,s)}}async function ba(t){if(hr(t))for(const e of t.M_)await e(!0)}async function Ri(t){for(const e of t.M_)await e(!1)}function Tm(t,e){const n=X(t);n.v_.has(e.targetId)||(n.v_.set(e.targetId,e),Au(n)?bu(n):is(n).Yo()&&Tu(n,e))}function bm(t,e){const n=X(t),r=is(n);n.v_.delete(e),r.Yo()&&Am(n,e),n.v_.size===0&&(r.Yo()?r.e_():hr(n)&&n.O_.set("Unknown"))}function Tu(t,e){if(t.N_.Le(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(J.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}is(t).l_(e)}function Am(t,e){t.N_.Le(e),is(t).h_(e)}function bu(t){t.N_=new Ob({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),lt:e=>t.v_.get(e)||null,st:()=>t.datastore.serializer.databaseId}),is(t).start(),t.O_.y_()}function Au(t){return hr(t)&&!is(t).Jo()&&t.v_.size>0}function hr(t){return X(t).F_.size===0}function Rm(t){t.N_=void 0}async function NA(t){t.v_.forEach((e,n)=>{Tu(t,e)})}async function OA(t,e){Rm(t),Au(t)?(t.O_.b_(e),bu(t)):t.O_.set("Unknown")}async function VA(t,e,n){if(t.O_.set("Online"),e instanceof dm&&e.state===2&&e.cause)try{await async function(s,i){const o=i.cause;for(const a of i.targetIds)s.v_.has(a)&&(await s.remoteSyncer.rejectListen(a,o),s.v_.delete(a),s.N_.removeTarget(a))}(t,e)}catch(r){L("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Mo(t,r)}else if(e instanceof oo?t.N_.Ge(e):e instanceof hm?t.N_.Xe(e):t.N_.He(e),!n.isEqual(J.min()))try{const r=await wm(t.localStore);n.compareTo(r)>=0&&await function(i,o){const a=i.N_._t(o);return a.targetChanges.forEach((l,c)=>{if(l.resumeToken.approximateByteSize()>0){const u=i.v_.get(c);u&&i.v_.set(c,u.withResumeToken(l.resumeToken,o))}}),a.targetMismatches.forEach((l,c)=>{const u=i.v_.get(l);if(!u)return;i.v_.set(l,u.withResumeToken(ht.EMPTY_BYTE_STRING,u.snapshotVersion)),Am(i,l);const h=new En(u.target,l,c,u.sequenceNumber);Tu(i,h)}),i.remoteSyncer.applyRemoteEvent(a)}(t,n)}catch(r){L("RemoteStore","Failed to raise snapshot:",r),await Mo(t,r)}}async function Mo(t,e,n){if(!Ii(e))throw e;t.F_.add(1),await Ri(t),t.O_.set("Offline"),n||(n=()=>wm(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{L("RemoteStore","Retrying IndexedDB access"),await n(),t.F_.delete(1),await ba(t)})}function km(t,e){return e().catch(n=>Mo(t,n,e))}async function Aa(t){const e=X(t),n=xn(e);let r=e.C_.length>0?e.C_[e.C_.length-1].batchId:-1;for(;MA(e);)try{const s=await wA(e.localStore,r);if(s===null){e.C_.length===0&&n.e_();break}r=s.batchId,LA(e,s)}catch(s){await Mo(e,s)}Cm(e)&&Pm(e)}function MA(t){return hr(t)&&t.C_.length<10}function LA(t,e){t.C_.push(e);const n=xn(t);n.Yo()&&n.I_&&n.d_(e.mutations)}function Cm(t){return hr(t)&&!xn(t).Jo()&&t.C_.length>0}function Pm(t){xn(t).start()}async function UA(t){xn(t).A_()}async function FA(t){const e=xn(t);for(const n of t.C_)e.d_(n.mutations)}async function $A(t,e,n){const r=t.C_.shift(),s=_u.from(r,e,n);await km(t,()=>t.remoteSyncer.applySuccessfulWrite(s)),await Aa(t)}async function BA(t,e){e&&xn(t).I_&&await async function(r,s){if(function(o){return xb(o)&&o!==E.ABORTED}(s.code)){const i=r.C_.shift();xn(r).Xo(),await km(r,()=>r.remoteSyncer.rejectFailedWrite(i.batchId,s)),await Aa(r)}}(t,e),Cm(t)&&Pm(t)}async function Od(t,e){const n=X(t);n.asyncQueue.verifyOperationInProgress(),L("RemoteStore","RemoteStore received new credentials");const r=hr(n);n.F_.add(3),await Ri(n),r&&n.O_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.F_.delete(3),await ba(n)}async function jA(t,e){const n=X(t);e?(n.F_.delete(2),await ba(n)):e||(n.F_.add(2),await Ri(n),n.O_.set("Unknown"))}function is(t){return t.B_||(t.B_=function(n,r,s){const i=X(n);return i.V_(),new CA(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{Io:NA.bind(null,t),Eo:OA.bind(null,t),c_:VA.bind(null,t)}),t.M_.push(async e=>{e?(t.B_.Xo(),Au(t)?bu(t):t.O_.set("Unknown")):(await t.B_.stop(),Rm(t))})),t.B_}function xn(t){return t.L_||(t.L_=function(n,r,s){const i=X(n);return i.V_(),new PA(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{Io:UA.bind(null,t),Eo:BA.bind(null,t),E_:FA.bind(null,t),T_:$A.bind(null,t)}),t.M_.push(async e=>{e?(t.L_.Xo(),await Aa(t)):(await t.L_.stop(),t.C_.length>0&&(L("RemoteStore",`Stopping write stream with ${t.C_.length} pending writes`),t.C_=[]))})),t.L_}/**
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
 */class Ru{constructor(e,n,r,s,i){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new rn,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,s,i){const o=Date.now()+r,a=new Ru(e,n,o,s,i);return a.start(r),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new V(E.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function ku(t,e){if(ln("AsyncQueue",`${e}: ${t}`),Ii(t))return new V(E.UNAVAILABLE,`${e}: ${t}`);throw t}/**
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
 */class Or{constructor(e){this.comparator=e?(n,r)=>e(n,r)||j.comparator(n.key,r.key):(n,r)=>j.comparator(n.key,r.key),this.keyedMap=ys(),this.sortedSet=new Ce(this.comparator)}static emptySet(e){return new Or(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof Or)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new Or;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
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
 */class Vd{constructor(){this.k_=new Ce(j.comparator)}track(e){const n=e.doc.key,r=this.k_.get(n);r?e.type!==0&&r.type===3?this.k_=this.k_.insert(n,e):e.type===3&&r.type!==1?this.k_=this.k_.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.k_=this.k_.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.k_=this.k_.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.k_=this.k_.remove(n):e.type===1&&r.type===2?this.k_=this.k_.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.k_=this.k_.insert(n,{type:2,doc:e.doc}):G():this.k_=this.k_.insert(n,e)}q_(){const e=[];return this.k_.inorderTraversal((n,r)=>{e.push(r)}),e}}class zr{constructor(e,n,r,s,i,o,a,l,c){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=l,this.hasCachedResults=c}static fromInitialDocuments(e,n,r,s,i){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new zr(e,n,Or.emptySet(n),o,r,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&ya(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let s=0;s<n.length;s++)if(n[s].type!==r[s].type||!n[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
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
 */class qA{constructor(){this.Q_=void 0,this.listeners=[]}}class KA{constructor(){this.queries=new ss(e=>Jg(e),ya),this.onlineState="Unknown",this.K_=new Set}}async function Sm(t,e){const n=X(t),r=e.query;let s=!1,i=n.queries.get(r);if(i||(s=!0,i=new qA),s)try{i.Q_=await n.onListen(r)}catch(o){const a=ku(o,`Initialization of query '${wr(e.query)}' failed`);return void e.onError(a)}n.queries.set(r,i),i.listeners.push(e),e.U_(n.onlineState),i.Q_&&e.W_(i.Q_)&&Cu(n)}async function xm(t,e){const n=X(t),r=e.query;let s=!1;const i=n.queries.get(r);if(i){const o=i.listeners.indexOf(e);o>=0&&(i.listeners.splice(o,1),s=i.listeners.length===0)}if(s)return n.queries.delete(r),n.onUnlisten(r)}function HA(t,e){const n=X(t);let r=!1;for(const s of e){const i=s.query,o=n.queries.get(i);if(o){for(const a of o.listeners)a.W_(s)&&(r=!0);o.Q_=s}}r&&Cu(n)}function WA(t,e,n){const r=X(t),s=r.queries.get(e);if(s)for(const i of s.listeners)i.onError(n);r.queries.delete(e)}function Cu(t){t.K_.forEach(e=>{e.next()})}class Dm{constructor(e,n,r){this.query=e,this.G_=n,this.z_=!1,this.j_=null,this.onlineState="Unknown",this.options=r||{}}W_(e){if(!this.options.includeMetadataChanges){const r=[];for(const s of e.docChanges)s.type!==3&&r.push(s);e=new zr(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.z_?this.H_(e)&&(this.G_.next(e),n=!0):this.J_(e,this.onlineState)&&(this.Y_(e),n=!0),this.j_=e,n}onError(e){this.G_.error(e)}U_(e){this.onlineState=e;let n=!1;return this.j_&&!this.z_&&this.J_(this.j_,e)&&(this.Y_(this.j_),n=!0),n}J_(e,n){if(!e.fromCache)return!0;const r=n!=="Offline";return(!this.options.Z_||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}H_(e){if(e.docChanges.length>0)return!0;const n=this.j_&&this.j_.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}Y_(e){e=zr.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.z_=!0,this.G_.next(e)}}/**
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
 */class Nm{constructor(e){this.key=e}}class Om{constructor(e){this.key=e}}class zA{constructor(e,n){this.query=e,this.oa=n,this._a=null,this.hasCachedResults=!1,this.current=!1,this.aa=re(),this.mutatedKeys=re(),this.ua=Xg(e),this.ca=new Or(this.ua)}get la(){return this.oa}ha(e,n){const r=n?n.Pa:new Vd,s=n?n.ca:this.ca;let i=n?n.mutatedKeys:this.mutatedKeys,o=s,a=!1;const l=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,c=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal((u,h)=>{const d=s.get(u),f=va(this.query,h)?h:null,w=!!d&&this.mutatedKeys.has(d.key),y=!!f&&(f.hasLocalMutations||this.mutatedKeys.has(f.key)&&f.hasCommittedMutations);let k=!1;d&&f?d.data.isEqual(f.data)?w!==y&&(r.track({type:3,doc:f}),k=!0):this.Ia(d,f)||(r.track({type:2,doc:f}),k=!0,(l&&this.ua(f,l)>0||c&&this.ua(f,c)<0)&&(a=!0)):!d&&f?(r.track({type:0,doc:f}),k=!0):d&&!f&&(r.track({type:1,doc:d}),k=!0,(l||c)&&(a=!0)),k&&(f?(o=o.add(f),i=y?i.add(u):i.delete(u)):(o=o.delete(u),i=i.delete(u)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const u=this.query.limitType==="F"?o.last():o.first();o=o.delete(u.key),i=i.delete(u.key),r.track({type:1,doc:u})}return{ca:o,Pa:r,es:a,mutatedKeys:i}}Ia(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r){const s=this.ca;this.ca=e.ca,this.mutatedKeys=e.mutatedKeys;const i=e.Pa.q_();i.sort((c,u)=>function(d,f){const w=y=>{switch(y){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return G()}};return w(d)-w(f)}(c.type,u.type)||this.ua(c.doc,u.doc)),this.da(r);const o=n?this.Ta():[],a=this.aa.size===0&&this.current?1:0,l=a!==this._a;return this._a=a,i.length!==0||l?{snapshot:new zr(this.query,e.ca,s,i,e.mutatedKeys,a===0,l,!1,!!r&&r.resumeToken.approximateByteSize()>0),Ea:o}:{Ea:o}}U_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({ca:this.ca,Pa:new Vd,mutatedKeys:this.mutatedKeys,es:!1},!1)):{Ea:[]}}Aa(e){return!this.oa.has(e)&&!!this.ca.has(e)&&!this.ca.get(e).hasLocalMutations}da(e){e&&(e.addedDocuments.forEach(n=>this.oa=this.oa.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.oa=this.oa.delete(n)),this.current=e.current)}Ta(){if(!this.current)return[];const e=this.aa;this.aa=re(),this.ca.forEach(r=>{this.Aa(r.key)&&(this.aa=this.aa.add(r.key))});const n=[];return e.forEach(r=>{this.aa.has(r)||n.push(new Om(r))}),this.aa.forEach(r=>{e.has(r)||n.push(new Nm(r))}),n}Ra(e){this.oa=e.Ps,this.aa=re();const n=this.ha(e.documents);return this.applyChanges(n,!0)}Va(){return zr.fromInitialDocuments(this.query,this.ca,this.mutatedKeys,this._a===0,this.hasCachedResults)}}class GA{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class QA{constructor(e){this.key=e,this.ma=!1}}class YA{constructor(e,n,r,s,i,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.fa={},this.ga=new ss(a=>Jg(a),ya),this.pa=new Map,this.ya=new Set,this.wa=new Ce(j.comparator),this.Sa=new Map,this.ba=new wu,this.Da={},this.Ca=new Map,this.va=Wr.Ln(),this.onlineState="Unknown",this.Fa=void 0}get isPrimaryClient(){return this.Fa===!0}}async function JA(t,e){const n=aR(t);let r,s;const i=n.ga.get(e);if(i)r=i.targetId,n.sharedClientState.addLocalQueryTarget(r),s=i.view.Va();else{const o=await EA(n.localStore,Wt(e)),a=n.sharedClientState.addLocalQueryTarget(o.targetId);r=o.targetId,s=await XA(n,e,r,a==="current",o.resumeToken),n.isPrimaryClient&&Tm(n.remoteStore,o)}return s}async function XA(t,e,n,r,s){t.Ma=(h,d,f)=>async function(y,k,U,O){let B=k.view.ha(U);B.es&&(B=await xd(y.localStore,k.query,!1).then(({documents:ke})=>k.view.ha(ke,B)));const F=O&&O.targetChanges.get(k.targetId),Re=k.view.applyChanges(B,y.isPrimaryClient,F);return Ld(y,k.targetId,Re.Ea),Re.snapshot}(t,h,d,f);const i=await xd(t.localStore,e,!0),o=new zA(e,i.Ps),a=o.ha(i.documents),l=Ai.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",s),c=o.applyChanges(a,t.isPrimaryClient,l);Ld(t,n,c.Ea);const u=new GA(e,n,o);return t.ga.set(e,u),t.pa.has(n)?t.pa.get(n).push(e):t.pa.set(n,[e]),c.snapshot}async function ZA(t,e){const n=X(t),r=n.ga.get(e),s=n.pa.get(r.targetId);if(s.length>1)return n.pa.set(r.targetId,s.filter(i=>!ya(i,e))),void n.ga.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(r.targetId),n.sharedClientState.isActiveQueryTarget(r.targetId)||await tc(n.localStore,r.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(r.targetId),bm(n.remoteStore,r.targetId),nc(n,r.targetId)}).catch(Ei)):(nc(n,r.targetId),await tc(n.localStore,r.targetId,!0))}async function eR(t,e,n){const r=lR(t);try{const s=await function(o,a){const l=X(o),c=pe.now(),u=a.reduce((f,w)=>f.add(w.key),re());let h,d;return l.persistence.runTransaction("Locally write mutations","readwrite",f=>{let w=cn(),y=re();return l._s.getEntries(f,u).next(k=>{w=k,w.forEach((U,O)=>{O.isValidDocument()||(y=y.add(U))})}).next(()=>l.localDocuments.getOverlayedDocuments(f,w)).next(k=>{h=k;const U=[];for(const O of a){const B=Rb(O,h.get(O.key).overlayedDocument);B!=null&&U.push(new Mn(O.key,B,jg(B.value.mapValue),At.exists(!0)))}return l.mutationQueue.addMutationBatch(f,c,U,a)}).next(k=>{d=k;const U=k.applyToLocalDocumentSet(h,y);return l.documentOverlayCache.saveOverlays(f,k.batchId,U)})}).then(()=>({batchId:d.batchId,changes:em(h)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(s.batchId),function(o,a,l){let c=o.Da[o.currentUser.toKey()];c||(c=new Ce(ue)),c=c.insert(a,l),o.Da[o.currentUser.toKey()]=c}(r,s.batchId,n),await ki(r,s.changes),await Aa(r.remoteStore)}catch(s){const i=ku(s,"Failed to persist write");n.reject(i)}}async function Vm(t,e){const n=X(t);try{const r=await yA(n.localStore,e);e.targetChanges.forEach((s,i)=>{const o=n.Sa.get(i);o&&(be(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1),s.addedDocuments.size>0?o.ma=!0:s.modifiedDocuments.size>0?be(o.ma):s.removedDocuments.size>0&&(be(o.ma),o.ma=!1))}),await ki(n,r,e)}catch(r){await Ei(r)}}function Md(t,e,n){const r=X(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const s=[];r.ga.forEach((i,o)=>{const a=o.view.U_(e);a.snapshot&&s.push(a.snapshot)}),function(o,a){const l=X(o);l.onlineState=a;let c=!1;l.queries.forEach((u,h)=>{for(const d of h.listeners)d.U_(a)&&(c=!0)}),c&&Cu(l)}(r.eventManager,e),s.length&&r.fa.c_(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function tR(t,e,n){const r=X(t);r.sharedClientState.updateQueryState(e,"rejected",n);const s=r.Sa.get(e),i=s&&s.key;if(i){let o=new Ce(j.comparator);o=o.insert(i,rt.newNoDocument(i,J.min()));const a=re().add(i),l=new Ia(J.min(),new Map,new Ce(ue),o,a);await Vm(r,l),r.wa=r.wa.remove(i),r.Sa.delete(e),Pu(r)}else await tc(r.localStore,e,!1).then(()=>nc(r,e,n)).catch(Ei)}async function nR(t,e){const n=X(t),r=e.batch.batchId;try{const s=await _A(n.localStore,e);Lm(n,r,null),Mm(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await ki(n,s)}catch(s){await Ei(s)}}async function rR(t,e,n){const r=X(t);try{const s=await function(o,a){const l=X(o);return l.persistence.runTransaction("Reject batch","readwrite-primary",c=>{let u;return l.mutationQueue.lookupMutationBatch(c,a).next(h=>(be(h!==null),u=h.keys(),l.mutationQueue.removeMutationBatch(c,h))).next(()=>l.mutationQueue.performConsistencyCheck(c)).next(()=>l.documentOverlayCache.removeOverlaysForBatchId(c,u,a)).next(()=>l.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(c,u)).next(()=>l.localDocuments.getDocuments(c,u))})}(r.localStore,e);Lm(r,e,n),Mm(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await ki(r,s)}catch(s){await Ei(s)}}function Mm(t,e){(t.Ca.get(e)||[]).forEach(n=>{n.resolve()}),t.Ca.delete(e)}function Lm(t,e,n){const r=X(t);let s=r.Da[r.currentUser.toKey()];if(s){const i=s.get(e);i&&(n?i.reject(n):i.resolve(),s=s.remove(e)),r.Da[r.currentUser.toKey()]=s}}function nc(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.pa.get(e))t.ga.delete(r),n&&t.fa.xa(r,n);t.pa.delete(e),t.isPrimaryClient&&t.ba.mr(e).forEach(r=>{t.ba.containsKey(r)||Um(t,r)})}function Um(t,e){t.ya.delete(e.path.canonicalString());const n=t.wa.get(e);n!==null&&(bm(t.remoteStore,n),t.wa=t.wa.remove(e),t.Sa.delete(n),Pu(t))}function Ld(t,e,n){for(const r of n)r instanceof Nm?(t.ba.addReference(r.key,e),sR(t,r)):r instanceof Om?(L("SyncEngine","Document no longer in limbo: "+r.key),t.ba.removeReference(r.key,e),t.ba.containsKey(r.key)||Um(t,r.key)):G()}function sR(t,e){const n=e.key,r=n.path.canonicalString();t.wa.get(n)||t.ya.has(r)||(L("SyncEngine","New document in limbo: "+n),t.ya.add(r),Pu(t))}function Pu(t){for(;t.ya.size>0&&t.wa.size<t.maxConcurrentLimboResolutions;){const e=t.ya.values().next().value;t.ya.delete(e);const n=new j(Te.fromString(e)),r=t.va.next();t.Sa.set(r,new QA(n)),t.wa=t.wa.insert(n,r),Tm(t.remoteStore,new En(Wt(pu(n.path)),r,"TargetPurposeLimboResolution",lu.ae))}}async function ki(t,e,n){const r=X(t),s=[],i=[],o=[];r.ga.isEmpty()||(r.ga.forEach((a,l)=>{o.push(r.Ma(l,e,n).then(c=>{if((c||n)&&r.isPrimaryClient&&r.sharedClientState.updateQueryState(l.targetId,c!=null&&c.fromCache?"not-current":"current"),c){s.push(c);const u=Iu.$i(l.targetId,c);i.push(u)}}))}),await Promise.all(o),r.fa.c_(s),await async function(l,c){const u=X(l);try{await u.persistence.runTransaction("notifyLocalViewChanges","readwrite",h=>A.forEach(c,d=>A.forEach(d.Qi,f=>u.persistence.referenceDelegate.addReference(h,d.targetId,f)).next(()=>A.forEach(d.Ki,f=>u.persistence.referenceDelegate.removeReference(h,d.targetId,f)))))}catch(h){if(!Ii(h))throw h;L("LocalStore","Failed to update sequence numbers: "+h)}for(const h of c){const d=h.targetId;if(!h.fromCache){const f=u.rs.get(d),w=f.snapshotVersion,y=f.withLastLimboFreeSnapshotVersion(w);u.rs=u.rs.insert(d,y)}}}(r.localStore,i))}async function iR(t,e){const n=X(t);if(!n.currentUser.isEqual(e)){L("SyncEngine","User change. New user:",e.toKey());const r=await vm(n.localStore,e);n.currentUser=e,function(i,o){i.Ca.forEach(a=>{a.forEach(l=>{l.reject(new V(E.CANCELLED,o))})}),i.Ca.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await ki(n,r.cs)}}function oR(t,e){const n=X(t),r=n.Sa.get(e);if(r&&r.ma)return re().add(r.key);{let s=re();const i=n.pa.get(e);if(!i)return s;for(const o of i){const a=n.ga.get(o);s=s.unionWith(a.view.la)}return s}}function aR(t){const e=X(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=Vm.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=oR.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=tR.bind(null,e),e.fa.c_=HA.bind(null,e.eventManager),e.fa.xa=WA.bind(null,e.eventManager),e}function lR(t){const e=X(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=nR.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=rR.bind(null,e),e}class Ud{constructor(){this.synchronizeTabs=!1}async initialize(e){this.serializer=Ta(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,n){return null}createIndexBackfillerScheduler(e,n){return null}createLocalStore(e){return mA(this.persistence,new pA,e.initialUser,this.serializer)}createPersistence(e){return new hA(Eu.Jr,this.serializer)}createSharedClientState(e){return new TA}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class cR{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Md(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=iR.bind(null,this.syncEngine),await jA(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new KA}()}createDatastore(e){const n=Ta(e.databaseInfo.databaseId),r=function(i){return new kA(i)}(e.databaseInfo);return function(i,o,a,l){return new SA(i,o,a,l)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,s,i,o,a){return new DA(r,s,i,o,a)}(this.localStore,this.datastore,e.asyncQueue,n=>Md(this.syncEngine,n,0),function(){return Nd.C()?new Nd:new bA}())}createSyncEngine(e,n){return function(s,i,o,a,l,c,u){const h=new YA(s,i,o,a,l,c);return u&&(h.Fa=!0),h}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}terminate(){return async function(n){const r=X(n);L("RemoteStore","RemoteStore shutting down."),r.F_.add(5),await Ri(r),r.x_.shutdown(),r.O_.set("Unknown")}(this.remoteStore)}}/**
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
 */class Fm{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Ba(this.observer.next,e)}error(e){this.observer.error?this.Ba(this.observer.error,e):ln("Uncaught Error in snapshot listener:",e.toString())}La(){this.muted=!0}Ba(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
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
 */class uR{constructor(e,n,r,s){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=s,this.user=tt.UNAUTHENTICATED,this.clientId=Fg.V(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async i=>{L("FirestoreClient","Received user=",i.uid),await this.authCredentialListener(i),this.user=i}),this.appCheckCredentials.start(r,i=>(L("FirestoreClient","Received new app check token=",i),this.appCheckCredentialListener(i,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new V(E.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new rn;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=ku(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function ll(t,e){t.asyncQueue.verifyOperationInProgress(),L("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async s=>{r.isEqual(s)||(await vm(e.localStore,s),r=s)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function Fd(t,e){t.asyncQueue.verifyOperationInProgress();const n=await dR(t);L("FirestoreClient","Initializing OnlineComponentProvider");const r=await t.getConfiguration();await e.initialize(n,r),t.setCredentialChangeListener(s=>Od(e.remoteStore,s)),t.setAppCheckTokenChangeListener((s,i)=>Od(e.remoteStore,i)),t._onlineComponents=e}function hR(t){return t.name==="FirebaseError"?t.code===E.FAILED_PRECONDITION||t.code===E.UNIMPLEMENTED:!(typeof DOMException<"u"&&t instanceof DOMException)||t.code===22||t.code===20||t.code===11}async function dR(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){L("FirestoreClient","Using user provided OfflineComponentProvider");try{await ll(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!hR(n))throw n;jr("Error using user provided cache. Falling back to memory cache: "+n),await ll(t,new Ud)}}else L("FirestoreClient","Using default OfflineComponentProvider"),await ll(t,new Ud);return t._offlineComponents}async function $m(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(L("FirestoreClient","Using user provided OnlineComponentProvider"),await Fd(t,t._uninitializedComponentsProvider._online)):(L("FirestoreClient","Using default OnlineComponentProvider"),await Fd(t,new cR))),t._onlineComponents}function fR(t){return $m(t).then(e=>e.syncEngine)}async function Bm(t){const e=await $m(t),n=e.eventManager;return n.onListen=JA.bind(null,e.syncEngine),n.onUnlisten=ZA.bind(null,e.syncEngine),n}function pR(t,e,n={}){const r=new rn;return t.asyncQueue.enqueueAndForget(async()=>function(i,o,a,l,c){const u=new Fm({next:d=>{o.enqueueAndForget(()=>xm(i,h));const f=d.docs.has(a);!f&&d.fromCache?c.reject(new V(E.UNAVAILABLE,"Failed to get document because the client is offline.")):f&&d.fromCache&&l&&l.source==="server"?c.reject(new V(E.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):c.resolve(d)},error:d=>c.reject(d)}),h=new Dm(pu(a.path),u,{includeMetadataChanges:!0,Z_:!0});return Sm(i,h)}(await Bm(t),t.asyncQueue,e,n,r)),r.promise}function gR(t,e,n={}){const r=new rn;return t.asyncQueue.enqueueAndForget(async()=>function(i,o,a,l,c){const u=new Fm({next:d=>{o.enqueueAndForget(()=>xm(i,h)),d.fromCache&&l.source==="server"?c.reject(new V(E.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):c.resolve(d)},error:d=>c.reject(d)}),h=new Dm(a,u,{includeMetadataChanges:!0,Z_:!0});return Sm(i,h)}(await Bm(t),t.asyncQueue,e,n,r)),r.promise}/**
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
 */function jm(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
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
 */const $d=new Map;/**
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
 */function qm(t,e,n){if(!n)throw new V(E.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function mR(t,e,n,r){if(e===!0&&r===!0)throw new V(E.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function Bd(t){if(!j.isDocumentKey(t))throw new V(E.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function jd(t){if(j.isDocumentKey(t))throw new V(E.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function Ra(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":G()}function Vt(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new V(E.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Ra(t);throw new V(E.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
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
 */class qd{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new V(E.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new V(E.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}mR("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=jm((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new V(E.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new V(E.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new V(E.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,s){return r.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class ka{constructor(e,n,r,s){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new qd({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new V(E.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new V(E.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new qd(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new L0;switch(r.type){case"firstParty":return new B0(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new V(E.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=$d.get(n);r&&(L("ComponentProvider","Removing Datastore"),$d.delete(n),r.terminate())}(this),Promise.resolve()}}function _R(t,e,n,r={}){var s;const i=(t=Vt(t,ka))._getSettings(),o=`${e}:${n}`;if(i.host!=="firestore.googleapis.com"&&i.host!==o&&jr("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},i),{host:o,ssl:!1})),r.mockUserToken){let a,l;if(typeof r.mockUserToken=="string")a=r.mockUserToken,l=tt.MOCK_USER;else{a=Gv(r.mockUserToken,(s=t._app)===null||s===void 0?void 0:s.options.projectId);const c=r.mockUserToken.sub||r.mockUserToken.user_id;if(!c)throw new V(E.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");l=new tt(c)}t._authCredentials=new U0(new Ug(a,l))}}/**
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
 */class os{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new os(this.firestore,e,this._query)}}class pt{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new kn(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new pt(this.firestore,e,this._key)}}class kn extends os{constructor(e,n,r){super(e,n,pu(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new pt(this.firestore,null,new j(e))}withConverter(e){return new kn(this.firestore,e,this._path)}}function It(t,e,...n){if(t=De(t),qm("collection","path",e),t instanceof ka){const r=Te.fromString(e,...n);return jd(r),new kn(t,null,r)}{if(!(t instanceof pt||t instanceof kn))throw new V(E.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Te.fromString(e,...n));return jd(r),new kn(t.firestore,null,r)}}function xe(t,e,...n){if(t=De(t),arguments.length===1&&(e=Fg.V()),qm("doc","path",e),t instanceof ka){const r=Te.fromString(e,...n);return Bd(r),new pt(t,null,new j(r))}{if(!(t instanceof pt||t instanceof kn))throw new V(E.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Te.fromString(e,...n));return Bd(r),new pt(t.firestore,t instanceof kn?t.converter:null,new j(r))}}/**
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
 */class yR{constructor(){this.Za=Promise.resolve(),this.Xa=[],this.eu=!1,this.tu=[],this.nu=null,this.ru=!1,this.iu=!1,this.su=[],this.Ho=new Em(this,"async_queue_retry"),this.ou=()=>{const n=al();n&&L("AsyncQueue","Visibility state changed to "+n.visibilityState),this.Ho.$o()};const e=al();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.ou)}get isShuttingDown(){return this.eu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this._u(),this.au(e)}enterRestrictedMode(e){if(!this.eu){this.eu=!0,this.iu=e||!1;const n=al();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.ou)}}enqueue(e){if(this._u(),this.eu)return new Promise(()=>{});const n=new rn;return this.au(()=>this.eu&&this.iu?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Xa.push(e),this.uu()))}async uu(){if(this.Xa.length!==0){try{await this.Xa[0](),this.Xa.shift(),this.Ho.reset()}catch(e){if(!Ii(e))throw e;L("AsyncQueue","Operation failed with retryable error: "+e)}this.Xa.length>0&&this.Ho.Qo(()=>this.uu())}}au(e){const n=this.Za.then(()=>(this.ru=!0,e().catch(r=>{this.nu=r,this.ru=!1;const s=function(o){let a=o.message||"";return o.stack&&(a=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),a}(r);throw ln("INTERNAL UNHANDLED ERROR: ",s),r}).then(r=>(this.ru=!1,r))));return this.Za=n,n}enqueueAfterDelay(e,n,r){this._u(),this.su.indexOf(e)>-1&&(n=0);const s=Ru.createAndSchedule(this,e,n,r,i=>this.cu(i));return this.tu.push(s),s}_u(){this.nu&&G()}verifyOperationInProgress(){}async lu(){let e;do e=this.Za,await e;while(e!==this.Za)}hu(e){for(const n of this.tu)if(n.timerId===e)return!0;return!1}Pu(e){return this.lu().then(()=>{this.tu.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.tu)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.lu()})}Iu(e){this.su.push(e)}cu(e){const n=this.tu.indexOf(e);this.tu.splice(n,1)}}class dr extends ka{constructor(e,n,r,s){super(e,n,r,s),this.type="firestore",this._queue=function(){return new yR}(),this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||Km(this),this._firestoreClient.terminate()}}function vR(t,e){const n=typeof t=="object"?t:Zf(),r=typeof t=="string"?t:e||"(default)",s=Pc(n,"firestore").getImmediate({identifier:r});if(!s._initialized){const i=Wv("firestore");i&&_R(s,...i)}return s}function Su(t){return t._firestoreClient||Km(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function Km(t){var e,n,r;const s=t._freezeSettings(),i=function(a,l,c,u){return new Z0(a,l,c,u.host,u.ssl,u.experimentalForceLongPolling,u.experimentalAutoDetectLongPolling,jm(u.experimentalLongPollingOptions),u.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,s);t._firestoreClient=new uR(t._authCredentials,t._appCheckCredentials,t._queue,i),!((n=s.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=s.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._firestoreClient._uninitializedComponentsProvider={_offlineKind:s.localCache.kind,_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider})}/**
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
 */class Gr{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Gr(ht.fromBase64String(e))}catch(n){throw new V(E.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Gr(ht.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */class Ca{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new V(E.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new it(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class xu{constructor(e){this._methodName=e}}/**
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
 */class Du{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new V(E.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new V(E.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return ue(this._lat,e._lat)||ue(this._long,e._long)}}/**
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
 */const wR=/^__.*__$/;class ER{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new Mn(e,this.data,this.fieldMask,n,this.fieldTransforms):new bi(e,this.data,n,this.fieldTransforms)}}class Hm{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new Mn(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function Wm(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw G()}}class Nu{constructor(e,n,r,s,i,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=s,i===void 0&&this.du(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Tu(){return this.settings.Tu}Eu(e){return new Nu(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Au(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.Eu({path:r,Ru:!1});return s.Vu(e),s}mu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.Eu({path:r,Ru:!1});return s.du(),s}fu(e){return this.Eu({path:void 0,Ru:!0})}gu(e){return Lo(e,this.settings.methodName,this.settings.pu||!1,this.path,this.settings.yu)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}du(){if(this.path)for(let e=0;e<this.path.length;e++)this.Vu(this.path.get(e))}Vu(e){if(e.length===0)throw this.gu("Document fields must not be empty");if(Wm(this.Tu)&&wR.test(e))throw this.gu('Document fields cannot begin and end with "__"')}}class IR{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||Ta(e)}wu(e,n,r,s=!1){return new Nu({Tu:e,methodName:n,yu:r,path:it.emptyPath(),Ru:!1,pu:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Pa(t){const e=t._freezeSettings(),n=Ta(t._databaseId);return new IR(t._databaseId,!!e.ignoreUndefinedProperties,n)}function zm(t,e,n,r,s,i={}){const o=t.wu(i.merge||i.mergeFields?2:0,e,n,s);Ou("Data must be an object, but it was:",o,r);const a=Gm(r,o);let l,c;if(i.merge)l=new vt(o.fieldMask),c=o.fieldTransforms;else if(i.mergeFields){const u=[];for(const h of i.mergeFields){const d=rc(e,h,n);if(!o.contains(d))throw new V(E.INVALID_ARGUMENT,`Field '${d}' is specified in your field mask but missing from your input data.`);Ym(u,d)||u.push(d)}l=new vt(u),c=o.fieldTransforms.filter(h=>l.covers(h.field))}else l=null,c=o.fieldTransforms;return new ER(new mt(a),l,c)}class Sa extends xu{_toFieldTransform(e){if(e.Tu!==2)throw e.Tu===1?e.gu(`${this._methodName}() can only appear at the top level of your update data`):e.gu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Sa}}function TR(t,e,n,r){const s=t.wu(1,e,n);Ou("Data must be an object, but it was:",s,r);const i=[],o=mt.empty();ur(r,(l,c)=>{const u=Vu(e,l,n);c=De(c);const h=s.mu(u);if(c instanceof Sa)i.push(u);else{const d=Ci(c,h);d!=null&&(i.push(u),o.set(u,d))}});const a=new vt(i);return new Hm(o,a,s.fieldTransforms)}function bR(t,e,n,r,s,i){const o=t.wu(1,e,n),a=[rc(e,r,n)],l=[s];if(i.length%2!=0)throw new V(E.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let d=0;d<i.length;d+=2)a.push(rc(e,i[d])),l.push(i[d+1]);const c=[],u=mt.empty();for(let d=a.length-1;d>=0;--d)if(!Ym(c,a[d])){const f=a[d];let w=l[d];w=De(w);const y=o.mu(f);if(w instanceof Sa)c.push(f);else{const k=Ci(w,y);k!=null&&(c.push(f),u.set(f,k))}}const h=new vt(c);return new Hm(u,h,o.fieldTransforms)}function AR(t,e,n,r=!1){return Ci(n,t.wu(r?4:3,e))}function Ci(t,e){if(Qm(t=De(t)))return Ou("Unsupported field value:",e,t),Gm(t,e);if(t instanceof xu)return function(r,s){if(!Wm(s.Tu))throw s.gu(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.gu(`${r._methodName}() is not currently supported inside arrays`);const i=r._toFieldTransform(s);i&&s.fieldTransforms.push(i)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.Ru&&e.Tu!==4)throw e.gu("Nested arrays are not supported");return function(r,s){const i=[];let o=0;for(const a of r){let l=Ci(a,s.fu(o));l==null&&(l={nullValue:"NULL_VALUE"}),i.push(l),o++}return{arrayValue:{values:i}}}(t,e)}return function(r,s){if((r=De(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return wb(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const i=pe.fromDate(r);return{timestampValue:Vo(s.serializer,i)}}if(r instanceof pe){const i=new pe(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Vo(s.serializer,i)}}if(r instanceof Du)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Gr)return{bytesValue:fm(s.serializer,r._byteString)};if(r instanceof pt){const i=s.databaseId,o=r.firestore._databaseId;if(!o.isEqual(i))throw s.gu(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:vu(r.firestore._databaseId||s.databaseId,r._key.path)}}throw s.gu(`Unsupported field value: ${Ra(r)}`)}(t,e)}function Gm(t,e){const n={};return $g(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):ur(t,(r,s)=>{const i=Ci(s,e.Au(r));i!=null&&(n[r]=i)}),{mapValue:{fields:n}}}function Qm(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof pe||t instanceof Du||t instanceof Gr||t instanceof pt||t instanceof xu)}function Ou(t,e,n){if(!Qm(n)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(n)){const r=Ra(n);throw r==="an object"?e.gu(t+" a custom object"):e.gu(t+" "+r)}}function rc(t,e,n){if((e=De(e))instanceof Ca)return e._internalPath;if(typeof e=="string")return Vu(t,e);throw Lo("Field path arguments must be of type string or ",t,!1,void 0,n)}const RR=new RegExp("[~\\*/\\[\\]]");function Vu(t,e,n){if(e.search(RR)>=0)throw Lo(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Ca(...e.split("."))._internalPath}catch{throw Lo(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Lo(t,e,n,r,s){const i=r&&!r.isEmpty(),o=s!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let l="";return(i||o)&&(l+=" (found",i&&(l+=` in field ${r}`),o&&(l+=` in document ${s}`),l+=")"),new V(E.INVALID_ARGUMENT,a+t+l)}function Ym(t,e){return t.some(n=>n.isEqual(e))}/**
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
 */class Jm{constructor(e,n,r,s,i){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new pt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new kR(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(Mu("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class kR extends Jm{data(){return super.data()}}function Mu(t,e){return typeof e=="string"?Vu(t,e):e instanceof Ca?e._internalPath:e._delegate._internalPath}/**
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
 */function CR(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new V(E.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Lu{}class PR extends Lu{}function SR(t,e,...n){let r=[];e instanceof Lu&&r.push(e),r=r.concat(n),function(i){const o=i.filter(l=>l instanceof Uu).length,a=i.filter(l=>l instanceof xa).length;if(o>1||o>0&&a>0)throw new V(E.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const s of r)t=s._apply(t);return t}class xa extends PR{constructor(e,n,r){super(),this._field=e,this._op=n,this._value=r,this.type="where"}static _create(e,n,r){return new xa(e,n,r)}_apply(e){const n=this._parse(e);return Xm(e._query,n),new os(e.firestore,e.converter,Ql(e._query,n))}_parse(e){const n=Pa(e.firestore);return function(i,o,a,l,c,u,h){let d;if(c.isKeyField()){if(u==="array-contains"||u==="array-contains-any")throw new V(E.INVALID_ARGUMENT,`Invalid Query. You can't perform '${u}' queries on documentId().`);if(u==="in"||u==="not-in"){Hd(h,u);const f=[];for(const w of h)f.push(Kd(l,i,w));d={arrayValue:{values:f}}}else d=Kd(l,i,h)}else u!=="in"&&u!=="not-in"&&u!=="array-contains-any"||Hd(h,u),d=AR(a,o,h,u==="in"||u==="not-in");return Le.create(c,u,d)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}function xR(t,e,n){const r=e,s=Mu("where",t);return xa._create(s,r,n)}class Uu extends Lu{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new Uu(e,n)}_parse(e){const n=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return n.length===1?n[0]:Ot.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(s,i){let o=s;const a=i.getFlattenedFilters();for(const l of a)Xm(o,l),o=Ql(o,l)}(e._query,n),new os(e.firestore,e.converter,Ql(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}function Kd(t,e,n){if(typeof(n=De(n))=="string"){if(n==="")throw new V(E.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!Yg(e)&&n.indexOf("/")!==-1)throw new V(E.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(Te.fromString(n));if(!j.isDocumentKey(r))throw new V(E.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return pd(t,new j(r))}if(n instanceof pt)return pd(t,n._key);throw new V(E.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Ra(n)}.`)}function Hd(t,e){if(!Array.isArray(t)||t.length===0)throw new V(E.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function Xm(t,e){if(e.isInequality()){const r=gu(t),s=e.field;if(r!==null&&!r.isEqual(s))throw new V(E.INVALID_ARGUMENT,`Invalid query. All where filters with an inequality (<, <=, !=, not-in, >, or >=) must be on the same field. But you have inequality filters on '${r.toString()}' and '${s.toString()}'`);const i=Qg(t);i!==null&&DR(t,s,i)}const n=function(s,i){for(const o of s)for(const a of o.getFlattenedFilters())if(i.indexOf(a.op)>=0)return a.op;return null}(t.filters,function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new V(E.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new V(E.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}function DR(t,e,n){if(!n.isEqual(e))throw new V(E.INVALID_ARGUMENT,`Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '${e.toString()}' and so you must also use '${e.toString()}' as your first argument to orderBy(), but your first orderBy() is on field '${n.toString()}' instead.`)}class NR{convertValue(e,n="none"){switch(lr(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Me(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(ar(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw G()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return ur(e,(s,i)=>{r[s]=this.convertValue(i,n)}),r}convertGeoPoint(e){return new Du(Me(e.latitude),Me(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=uu(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(Ys(e));default:return null}}convertTimestamp(e){const n=Sn(e);return new pe(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=Te.fromString(e);be(ym(r));const s=new Js(r.get(1),r.get(3)),i=new j(r.popFirst(5));return s.isEqual(n)||ln(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
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
 */function Zm(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}/**
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
 */class ws{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class e_ extends Jm{constructor(e,n,r,s,i,o){super(e,n,r,s,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new ao(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(Mu("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class ao extends e_{data(e={}){return super.data(e)}}class OR{constructor(e,n,r,s){this._firestore=e,this._userDataWriter=n,this._snapshot=s,this.metadata=new ws(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new ao(this._firestore,this._userDataWriter,r.key,r,new ws(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new V(E.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(s,i){if(s._snapshot.oldDocs.isEmpty()){let o=0;return s._snapshot.docChanges.map(a=>{const l=new ao(s._firestore,s._userDataWriter,a.doc.key,a.doc,new ws(s._snapshot.mutatedKeys.has(a.doc.key),s._snapshot.fromCache),s.query.converter);return a.doc,{type:"added",doc:l,oldIndex:-1,newIndex:o++}})}{let o=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(a=>i||a.type!==3).map(a=>{const l=new ao(s._firestore,s._userDataWriter,a.doc.key,a.doc,new ws(s._snapshot.mutatedKeys.has(a.doc.key),s._snapshot.fromCache),s.query.converter);let c=-1,u=-1;return a.type!==0&&(c=o.indexOf(a.doc.key),o=o.delete(a.doc.key)),a.type!==1&&(o=o.add(a.doc),u=o.indexOf(a.doc.key)),{type:VR(a.type),doc:l,oldIndex:c,newIndex:u}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function VR(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return G()}}/**
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
 */function ti(t){t=Vt(t,pt);const e=Vt(t.firestore,dr);return pR(Su(e),t._key).then(n=>LR(e,t,n))}class t_ extends NR{constructor(e){super(),this.firestore=e}convertBytes(e){return new Gr(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new pt(this.firestore,null,n)}}function Xn(t){t=Vt(t,os);const e=Vt(t.firestore,dr),n=Su(e),r=new t_(e);return CR(t._query),gR(n,t._query).then(s=>new OR(e,r,t,s))}function MR(t,e,n){t=Vt(t,pt);const r=Vt(t.firestore,dr),s=Zm(t.converter,e,n);return Da(r,[zm(Pa(r),"setDoc",t._key,s,t.converter!==null,n).toMutation(t._key,At.none())])}function bt(t,e,n,...r){t=Vt(t,pt);const s=Vt(t.firestore,dr),i=Pa(s);let o;return o=typeof(e=De(e))=="string"||e instanceof Ca?bR(i,"updateDoc",t._key,e,n,r):TR(i,"updateDoc",t._key,e),Da(s,[o.toMutation(t._key,At.exists(!0))])}function sc(t){return Da(Vt(t.firestore,dr),[new mu(t._key,At.none())])}function ni(t,e){const n=Vt(t.firestore,dr),r=xe(t),s=Zm(t.converter,e);return Da(n,[zm(Pa(t.firestore),"addDoc",r._key,s,t.converter!==null,{}).toMutation(r._key,At.exists(!1))]).then(()=>r)}function Da(t,e){return function(r,s){const i=new rn;return r.asyncQueue.enqueueAndForget(async()=>eR(await fR(r),s,i)),i.promise}(Su(t),e)}function LR(t,e,n){const r=n.docs.get(e._key),s=new t_(t);return new e_(t,s,e._key,r,new ws(n.hasPendingWrites,n.fromCache),e.converter)}(function(e,n=!0){(function(s){rs=s})(Zr),Fr(new tr("firestore",(r,{instanceIdentifier:s,options:i})=>{const o=r.getProvider("app").getImmediate(),a=new dr(new F0(r.getProvider("auth-internal")),new q0(r.getProvider("app-check-internal")),function(c,u){if(!Object.prototype.hasOwnProperty.apply(c.options,["projectId"]))throw new V(E.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Js(c.options.projectId,u)}(o,s),o);return i=Object.assign({useFetchStreams:n},i),a._setSettings(i),a},"PUBLIC").setMultipleInstances(!0)),Rn(ud,"4.2.0",e),Rn(ud,"4.2.0","esm2017")})();const UR={class:"fixed bottom-0 left-0 right-0 top-0 z-50 bg-gray-600 bg-opacity-50"},FR={class:"fixed left-1/2 top-0 max-h-screen w-[600px] max-w-[100vw] -translate-x-1/2 overflow-auto rounded-md bg-gradient-to-br from-orange-600 to-green-400 p-3 text-center shadow-lg shadow-black"},$R=rv('<p class="text-2xl">GUIDE</p><p class="mb-5 text-sm">App version: 0.6.0</p><p class="text-xl">Adding Decks and Cards</p><p class="mb-5"> Select a deck by clicking it. Click &#39;New Deck&#39; to create a new deck. <b>Add new cards by clicking the &#39;New Card&#39; button.</b> Input the front and back values and press &#39;Create&#39; or the &#39;enter&#39; key. Selecting &#39;Create Reversed&#39; will create another card with the front and back values swapped. Selecting &#39;Type Answer&#39; will require you to input the back value when reviewing. If &#39;Type Answer&#39; is selected, anything inside &#39;[]&#39; will not be required to input. </p><p class="text-xl">Reviews</p><p class="mb-5"><b>Clicking the &#39;Review&#39; button will allow you to review your cards.</b> The amount of reviews for the day is visible above the &#39;Review&#39; button When reviewing a card, try to guess the answer (the other side of the card). Click the card or press the &#39;space bar&#39; key to show the other side. If you answered correctly press the &#39;correct&#39; button (blue) or the &#39;space bar&#39; key. If you answered wrong press the &#39;wrong&#39; button (red) or the &#39;c&#39; key. If the card is a &#39;type answer&#39; card, type in the answer and press the &#39;enter&#39; key or press the &#39;Check&#39; button. The correct answer will then be visible. Click the card or press either the &#39;enter&#39; or &#39;space bar&#39; key to continue. Repeat until the panel closes. <b>Come back the next day to review more cards.</b> By answering correctly multiple times in a row you will see the card less frequently. Answering a card wrong will make it&#39;s &#39;streak&#39; reset. </p><p class="text-xl">Review Calculation and Settings</p><p class="mb-5"><b>Settings can be opened by pressing on the username.</b> Card reviews are calculated as follows: (time_multiplier^success_streak)*time_duration. Time multiplier and <del>time duration</del> can be changed in the settings. <b>The amount of new cards per day can also be changed in the settings.</b> The username can also be changed. The default values are 1.5 for time multiplier and 24 hours for time duration. </p><p class="text-xl">Editing and Deleting Cards and Decks</p><p class="mb-5"><b>Double clicking on a deck will open the deck options where you can edit the deck and its cards.</b> In the options, the card &#39;streak&#39; and the cards &#39;next review&#39; date are visible. </p><p class="text-xl">Searching Cards</p><p> When searching cards, the cards front and back values will be searched. <b>You can also use options in search to search for more specific information</b> (eg. &quot;streak:2 front:cat&quot;). The options are: </p><div class="mx-10"><ul class="list-disc"><li> &#39;<b>f</b>&#39;, &#39;<b>front</b>&#39; for searching only the <b>front fields</b>, input string, (eg. &quot;f:apple&quot;) </li><li> &#39;<b>b</b>&#39;, &#39;<b>back</b>&#39; for searching only the <b>back fields</b>, input string, (eg. &quot;b:orange&quot;) </li><li> &#39;<b>s</b>&#39;, &#39;<b>streak</b>&#39; for searching <b>streaks</b>, input number, (eg. &quot;s:4&quot;) </li><li> &#39;<b>nr</b>&#39;, &#39;<b>next_review</b>&#39; for searching <b>next reviews</b>, input date, format &#39;<b>DD/MM/YYYY</b>&#39;, (eg. &quot;nr:08/12/2024&quot;, &quot;nr:22/01&quot;) </li><ul class="ml-5 list-disc"><li> &#39;<b>nr:d</b>&#39;, &#39;<b>day</b>&#39; for searching next reviews on <b>specific day</b>, input number, (eg. &quot;nr:d:7&quot;) </li><li> &#39;<b>nr:m</b>&#39;, &#39;<b>month</b>&#39; for searching next reviews on <b>specific month</b>, input number (<b>1 for January, 12 for December</b>), (eg. &quot;nr:m:3&quot;) </li><li> &#39;<b>nr:y</b>&#39;, &#39;<b>year</b>&#39; for searching next reviews on <b>specific year</b>, input number, (eg. &quot;nr:y:2025&quot;) </li></ul><li> &#39;<b>t</b>&#39;, &#39;<b>type_answer</b>&#39; for searching cards that <b>are/aren&#39;t type answer</b> cards, input <b>[&#39;true&#39;, &#39;false&#39;, &#39;yes&#39;, &#39;no&#39;]</b>, (eg. &quot;t:true&quot;) </li></ul></div><p class="mb-5"> A search can include both options and regular search. <b>The options are separated by spaces</b>. (eg. &quot;s:2 nr:d:4 dog&quot;) </p><p class="text-xl">Notes</p><p class="mb-14"> This app stores your data in <b>Firebase</b>. All decks, cards and settings are synced between devices. The app works on both desktop and mobile. </p>',16),BR={__name:"Guide",emits:["close"],setup(t,{emit:e}){return(n,r)=>(Z(),ie("div",UR,[m("div",FR,[m("button",{onClick:r[0]||(r[0]=s=>n.$emit("close")),class:"mb-5 rounded-md bg-gray-500 p-2 shadow shadow-black"}," Close "),$R])]))}},Fu="/wSpaRe/assets/cancel-58c7ea43.svg",jR={key:0,class:"fixed bottom-0 left-0 right-0 top-0 z-50 bg-gray-600 bg-opacity-50"},qR={class:"fixed left-1/2 top-1/2 inline-block -translate-x-1/2 -translate-y-1/2 rounded-md bg-gradient-to-r from-teal-500 to-teal-700 p-3 text-center shadow-lg shadow-black"},KR=m("img",{src:Fu,alt:"close"},null,-1),HR=[KR],WR=m("br",null,null,-1),zR=m("br",null,null,-1),GR=m("br",null,null,-1),QR=m("br",null,null,-1),YR={__name:"SignInMenu",props:["auth"],emits:["loadDecks"],setup(t,{expose:e,emit:n}){const r=t,s=M(!1),i=M(""),o=M("");function a(){uI(r.auth,i.value,o.value).then(()=>{n("loadDecks"),c()}).catch(d=>{console.log(d),alert(d.code)})}function l(){s.value=!0}function c(){s.value=!1,i.value="",o.value=""}function u(d){d.code==="Enter"&&a()}function h(){i.value!==""?lI(r.auth,i.value).then(()=>{alert("Reset link sent to email.")}).catch(d=>{alert(d)}):alert("Write email in email field.")}return e({openMenu:l}),(d,f)=>{const w=Pf("click-away");return s.value?(Z(),ie("div",jR,[fe((Z(),ie("div",qR,[m("button",{onClick:f[0]||(f[0]=y=>c()),class:"scale-75"},HR),WR,fe(m("input",{type:"text","onUpdate:modelValue":f[1]||(f[1]=y=>i.value=y),class:"mb-2 rounded bg-yellow-600 p-3 text-center text-lg placeholder-white shadow shadow-black",placeholder:"Email"},null,512),[[Se,i.value]]),zR,fe(m("input",{type:"password","onUpdate:modelValue":f[2]||(f[2]=y=>o.value=y),onKeypress:f[3]||(f[3]=y=>u(y)),class:"mb-2 rounded bg-yellow-600 p-3 text-center text-lg placeholder-white shadow shadow-black",placeholder:"Password"},null,544),[[Se,o.value]]),GR,m("button",{onClick:f[4]||(f[4]=y=>a()),class:"mt-3 rounded bg-blue-400 p-3 text-xl shadow shadow-black"}," Sign In "),QR,m("button",{onClick:f[5]||(f[5]=y=>h()),class:"mt-5"},"Forgot Password")])),[[w,c]])])):$e("",!0)}}},JR={key:0,class:"fixed bottom-0 left-0 right-0 top-0 z-50 bg-gray-600 bg-opacity-50"},XR={class:"fixed left-1/2 top-1/2 inline-block -translate-x-1/2 -translate-y-1/2 rounded-md bg-gradient-to-r from-orange-300 to-orange-500 p-3 text-center shadow-lg shadow-black"},ZR=m("img",{src:Fu,alt:"close"},null,-1),ek=[ZR],tk=m("br",null,null,-1),nk=m("br",null,null,-1),rk=m("br",null,null,-1),sk=m("br",null,null,-1),ik=m("br",null,null,-1),ok={__name:"SignUpMenu",props:["auth","db"],emits:["loadDecks"],setup(t,{expose:e,emit:n}){const r=t,s=M(!1),i=M(""),o=M(""),a=M(""),l=M("");function c(){o.value===a.value?cI(r.auth,i.value,o.value).then(async()=>{console.log("Account Created!"),await bp(r.auth.currentUser,{displayName:l.value}).then(()=>{console.log("Profile Updated!")}).catch(d=>{console.log(d)}),await MR(xe(r.db,"users",r.auth.currentUser.uid),{time_multiplier:1.5,time_duration:24}).then(()=>{console.log("User Document Created!")}).catch(d=>{alert(`Error when creating user document: ${d}`)}),n("loadDecks"),h(),console.log("Sign Up Successful!")}).catch(d=>{console.log(d.code),alert(d.message)}):alert("Passwords don't match up")}function u(){s.value=!0}function h(){s.value=!1,i.value="",o.value="",a.value="",l.value=""}return e({openMenu:u}),(d,f)=>{const w=Pf("click-away");return s.value?(Z(),ie("div",JR,[fe((Z(),ie("div",XR,[m("button",{onClick:f[0]||(f[0]=y=>h()),class:"scale-75"},ek),tk,fe(m("input",{type:"text","onUpdate:modelValue":f[1]||(f[1]=y=>l.value=y),class:"mb-2 rounded bg-purple-600 p-3 text-center text-lg placeholder-white shadow shadow-black",placeholder:"Username"},null,512),[[Se,l.value]]),nk,fe(m("input",{type:"text","onUpdate:modelValue":f[2]||(f[2]=y=>i.value=y),class:"mb-2 rounded bg-purple-600 p-3 text-center text-lg placeholder-white shadow shadow-black",placeholder:"Email"},null,512),[[Se,i.value]]),rk,fe(m("input",{type:"password","onUpdate:modelValue":f[3]||(f[3]=y=>o.value=y),class:"mb-2 rounded bg-purple-600 p-3 text-center text-lg placeholder-white shadow shadow-black",placeholder:"Password"},null,512),[[Se,o.value]]),sk,fe(m("input",{type:"password","onUpdate:modelValue":f[4]||(f[4]=y=>a.value=y),class:"mb-2 rounded bg-purple-600 p-3 text-center text-lg placeholder-white shadow shadow-black",placeholder:"Verify Password"},null,512),[[Se,a.value]]),ik,m("button",{onClick:f[5]||(f[5]=y=>c()),class:"mt-3 rounded bg-red-400 p-3 text-xl shadow shadow-black"}," Sign Up ")])),[[w,h]])])):$e("",!0)}}},ak={class:"text-center"},lk={key:0},ck={class:"select-none text-3xl text-white"},uk=m("br",null,null,-1),hk={key:1},dk={__name:"Account",props:["auth"],emits:["openSettings","openSignIn","openSignUp","signOut"],setup(t,{emit:e}){const n=t;function r(){_I(n.auth).then(()=>{alert("Signed out"),e("signOut")}).catch(s=>{alert(s)})}return(s,i)=>(Z(),ie("div",ak,[t.auth!==null&&t.auth.currentUser!==null?(Z(),ie("div",lk,[m("div",{onClick:i[0]||(i[0]=o=>s.$emit("openSettings")),class:"mb-2 inline-block min-h-[50px] w-[400px] max-w-[100vw] overflow-hidden rounded bg-sky-900 p-3 shadow shadow-black"},[m("p",ck,qe(t.auth.currentUser.displayName),1)]),uk,m("button",{onClick:i[1]||(i[1]=o=>r()),class:"rounded bg-rose-700 px-3 py-2 text-xl shadow shadow-black"}," Sign Out ")])):(Z(),ie("div",hk,[m("button",{onClick:i[2]||(i[2]=o=>s.$emit("openSignIn")),class:"mr-5 rounded bg-teal-500 px-3 py-2 text-xl shadow shadow-black"}," Sign In "),m("button",{onClick:i[3]||(i[3]=o=>s.$emit("openSignUp")),class:"rounded bg-orange-300 px-3 py-2 text-xl shadow shadow-black"}," Sign Up ")]))]))}},fk={key:0,class:"fixed bottom-0 left-0 right-0 top-0 z-50 bg-gray-600 bg-opacity-50"},pk={class:"fixed left-1/2 top-1/2 inline-block max-h-[100vh] -translate-x-1/2 -translate-y-1/2 overflow-auto rounded-md bg-gradient-to-r from-gray-600 to-gray-800 p-3 text-center shadow-lg shadow-black"},gk=m("p",{class:"mb-1 text-xl text-white"},"Email",-1),mk=m("p",{class:"mb-1 text-xl text-white"},"Username",-1),_k=m("p",{class:"mb-1 text-xl text-white"},"Time Multiplier",-1),yk=m("p",{class:"mb-1 text-xl text-white"},"Time Duration",-1),vk={class:"mb-3 rounded bg-pink-800 p-2 text-center text-xl text-white shadow shadow-black"},wk=m("p",{class:"mb-1 text-xl text-white"},"Change Password",-1),Ek=m("br",null,null,-1),Ik=m("br",null,null,-1),Tk=m("br",null,null,-1),bk={class:"mt-5"},Ak={__name:"Settings",props:["auth","db"],emits:["saveSettings"],setup(t,{expose:e,emit:n}){const r=t,s=M(!1),i=M(""),o=M(""),a=M(1.5);let l=1.5;const c=M(24),u=M(""),h=M("");async function d(){let U=!1;a.value!==l&&(console.log("Update User Document"),await bt(xe(r.db,`users/${r.auth.currentUser.uid}`),{time_multiplier:a.value}).catch(O=>{alert(O)})),o.value!==r.auth.currentUser.displayName&&(console.log("Update Username"),await bp(r.auth.currentUser,{displayName:o.value}).catch(O=>{alert(O)})),i.value!==r.auth.currentUser.email&&(console.log("Update Email!"),await dI(r.auth.currentUser,i.value).catch(O=>{alert(O)})),u.value!==""&&h.value!==""&&(console.log("Update Password!"),u.value===h.value?await fI(r.auth.currentUser,u.value).catch(O=>{alert(O)}):(U=!0,alert("Passwords don't match!"))),n("saveSettings"),U||y()}async function f(){const U=await ti(xe(r.db,`users/${r.auth.currentUser.uid}`));a.value=U.data().time_multiplier,l=U.data().time_multiplier,c.value=U.data().time_duration}function w(){f(),i.value=r.auth.currentUser.email,o.value=r.auth.currentUser.displayName,s.value=!0}function y(){s.value=!1,u.value="",h.value=""}function k(){confirm("Are you sure you want to delete your account?")&&prompt("Are you really sure you want to DELETE your account. This will permanently delete your account and user document. Your decks and cards WILL NOT be deleted. If you want those deleted, do so first. If you want to continue deleting your account type 'DELETE MY ACCOUNT'")==="DELETE MY ACCOUNT"&&confirm("Confirm this to delete your account. This action is irreversible.")?sc(xe(r.db,`users/${r.auth.currentUser.uid}`)).then(()=>{console.log("User Doc Deleted"),yI(r.auth.currentUser).then(()=>{alert("Account Deleted!"),window.location.reload()}).catch(F=>{alert(F)})}).catch(F=>{alert(F)}):alert("Not Deleted!")}return e({openSettings:w}),(U,O)=>s.value?(Z(),ie("div",fk,[m("div",pk,[gk,fe(m("input",{type:"text","onUpdate:modelValue":O[0]||(O[0]=B=>i.value=B),placeholder:"email",class:"mb-3 max-w-[225px] rounded bg-gray-500 p-2 text-center text-xl text-white shadow shadow-black"},null,512),[[Se,i.value]]),mk,fe(m("input",{type:"text",placeholder:"username","onUpdate:modelValue":O[1]||(O[1]=B=>o.value=B),class:"mb-3 max-w-[225px] rounded bg-gray-500 p-2 text-center text-xl text-white placeholder-black shadow shadow-black"},null,512),[[Se,o.value]]),_k,fe(m("input",{type:"text",placeholder:"multiplier","onUpdate:modelValue":O[2]||(O[2]=B=>a.value=B),class:"mb-3 max-w-[140px] rounded bg-pink-800 p-2 text-center text-xl text-white placeholder-black shadow shadow-black"},null,512),[[Se,a.value,void 0,{number:!0}]]),yk,m("p",vk,qe(c.value)+"h ",1),wk,fe(m("input",{type:"password",placeholder:"New Password","onUpdate:modelValue":O[3]||(O[3]=B=>u.value=B),class:"mb-3 max-w-[16ch] rounded bg-orange-500 p-2 text-center text-xl text-white placeholder-black shadow shadow-black"},null,512),[[Se,u.value]]),Ek,fe(m("input",{type:"password",placeholder:"Verify Password","onUpdate:modelValue":O[4]||(O[4]=B=>h.value=B),class:"mb-5 max-w-[16ch] rounded bg-orange-600 p-2 text-center text-xl text-white placeholder-black shadow shadow-black"},null,512),[[Se,h.value]]),Ik,m("button",{onClick:O[5]||(O[5]=B=>k()),class:"mb-3 rounded bg-red-400 p-2 text-center text-xl text-white shadow shadow-black"}," Delete Account "),Tk,m("div",bk,[m("button",{onClick:O[6]||(O[6]=B=>y()),class:"rounded-md bg-red-500 p-2 text-lg shadow shadow-black"}," Close "),m("button",{onClick:O[7]||(O[7]=B=>d()),class:"ml-3 rounded-md bg-green-600 p-2 text-lg shadow shadow-black"}," Save ")])])])):$e("",!0)}};async function Uo(t){return`#${(await Rk(t)).substring(0,6)}`}async function Rk(t){const e=new TextEncoder().encode(t),n=await crypto.subtle.digest("SHA-256",e);return Array.from(new Uint8Array(n)).map(i=>i.toString(16).padStart(2,"0")).join("")}const kk={class:"fixed bottom-0 left-0 right-0 top-0 z-50 overflow-auto bg-gray-600 bg-opacity-50"},Ck={class:"absolute left-1/2 top-[20%] -translate-x-1/2 text-center"},Pk={class:"inline-block rounded-md bg-gradient-to-r from-green-900 to-blue-900 p-3 text-center shadow-lg shadow-black"},Sk={class:"mt-3 flex items-center justify-center rounded bg-purple-600 p-1"},xk=m("p",{class:""},"Index:",-1),Dk={class:"mt-3 flex items-center justify-center rounded bg-cyan-400 p-3 text-lg shadow shadow-black"},Nk=m("p",{class:"mr-1"},"New Cards Per Day:",-1),Ok=m("br",null,null,-1),Vk=m("br",null,null,-1),Mk=m("br",null,null,-1),Lk={class:"mt-14 inline-block max-w-[80vw] overflow-auto rounded-md bg-gradient-to-r from-green-900 to-blue-900 px-8 py-3 text-center shadow-lg shadow-black"},Uk=m("p",{class:"mb-3 text-xl text-white"},"Cards",-1),Fk={class:"mb-6 flex flex-wrap justify-center rounded-md bg-neutral-400 p-2"},$k={class:"ml-3 mt-1 flex flex-wrap items-center justify-center rounded-md bg-cyan-600 p-2"},Bk=m("p",{class:"mr-1"},"Sort",-1),jk=m("option",{value:"front-alpha"},"Front Alphabetical",-1),qk=m("option",{value:"back-alpha"},"Back Alphabetical",-1),Kk=m("option",{value:"streak"},"Streak",-1),Hk=m("option",{value:"next-review"},"Next Review",-1),Wk=[jk,qk,Kk,Hk],zk=m("label",{for:"reversed_sort_elem",class:"ml-1 mr-1 select-none"},"reverse:",-1),Gk={class:"mb-6 whitespace-nowrap"},Qk=["onUpdate:modelValue"],Yk=["onUpdate:modelValue"],Jk=["for"],Xk=["onUpdate:modelValue","id"],Zk={class:"mr-5 inline rounded-md bg-emerald-900 p-2 text-center text-white shadow shadow-black"},eC={class:"mr-5 inline rounded-md bg-yellow-900 p-2 text-center text-white shadow shadow-black"},tC=["onClick"],nC={__name:"EditDeckMenu",props:["auth","db","deck"],emits:["close"],setup(t,{expose:e,emit:n}){const r=t,s=M(r.deck.name),i=M(r.deck.color),o=M(""),a=M(r.deck.index);let l=[];const c=M([]),u=M(r.deck.new_cards_per_day),h=M(""),d=M("front-alpha"),f=M(!1);let w=[];const y=M([]);async function k(){s.value!==r.deck.name&&(console.log("Name Updated!"),await bt(xe(r.db,`users/${r.auth.currentUser.uid}/decks/${r.deck.id}`),{name:s.value})),a.value!==r.deck.index&&(console.log("Index Updated!"),await bt(xe(r.db,`users/${r.auth.currentUser.uid}/decks/${r.deck.id}`),{index:a.value})),u.value!==r.deck.new_cards_per_day&&(console.log("New Cards Per Day Updated!"),await bt(xe(r.db,`users/${r.auth.currentUser.uid}/decks/${r.deck.id}`),{new_cards_per_day:u.value}));for(let C=0;C<c.value.length;C++)(c.value[C].front!==l[C].front||c.value[C].back!==l[C].back||c.value[C].type_answer!==l[C].type_answer)&&(console.log("Card Updated!"),await bt(xe(r.db,`users/${r.auth.currentUser.uid}/decks/${r.deck.id}/cards/${c.value[C].id}`),{front:c.value[C].front,back:c.value[C].back,type_answer:c.value[C].type_answer}));n("close")}function U(){prompt(`*Please read carefully*.

Deleting a deck will remove the deck, but the individual cards will NOT be deleted. If you want to delete the cards please do so BEFORE deleting the deck. To confirm you want to delete this deck by typing 'DELETE'`)==="DELETE"?sc(xe(r.db,`users/${r.auth.currentUser.uid}/decks/${r.deck.id}`)).then(()=>{n("close")}):(alert("Not Deleted!"),n("close"))}function O(){Xn(It(r.db,`users/${r.auth.currentUser.uid}/decks/${r.deck.id}/cards`)).then(C=>{C.forEach(_=>{l.push({front:_.data().front,back:_.data().back,streak:_.data().streak,next_review:_.data().next_review.toDate(),type_answer:!!_.data().type_answer,id:_.id}),c.value.push({front:_.data().front,back:_.data().back,streak:_.data().streak,next_review:_.data().next_review.toDate(),type_answer:!!_.data().type_answer,id:_.id})}),c.value.forEach((_,b)=>{w.push({front:_.front,back:_.back,streak:_.streak,next_review:_.next_review,type_answer:_.type_answer,id:_.id,index:b})}),y.value=[...w],Ue()}),Re()}function B(C){confirm("Are you sure you want to delete this card?")?(sc(xe(r.db,`users/${r.auth.currentUser.uid}/decks/${r.deck.id}/cards/${C}`)),c.value.splice(c.value.map(_=>_.id).indexOf(C),1),l.splice(l.map(_=>_.id).indexOf(C),1),w=[],c.value.forEach((_,b)=>{w.push({front:_.front,back:_.back,streak:_.streak,next_review:_.next_review,type_answer:_.type_answer,id:_.id,index:b})}),ke(),console.log("Card Deleted!")):console.log("Not Deleted!")}async function F(){i.value=await Uo(s.value)}async function Re(){o.value=await Uo(r.deck.id)}function ke(){const C=h.value.split(" ");let _=[],b=h.value,te=!1;C.forEach((de,we)=>{if(de.includes(":")&&de.split(":")[1]!==""){let ae="";C.length!==1?we!==0?ae=` ${de}`:(te=!0,ae=de):ae=de,b=b.replace(ae,"")}}),te&&(b=b.substring(1));for(let de=0;de<w.length;de++){const we=w[de];let Ze=!0;C.forEach(ae=>{if(ae.includes(":")){const z=ae.split(":");if(z[1]!=="")if(z[0]==="s"||z[0]==="streak")we.streak!==Number(z[1])&&(Ze=!1);else if(z[0]==="nr"||z[0]==="next_review"){const ce=we.next_review.toLocaleDateString("en-GB"),me=we.next_review.getDate(),Jt=we.next_review.getMonth()+1,fr=we.next_review.getFullYear();z.length>2?z[1]==="d"||z[1]==="day"?me!==Number(z[2])&&(Ze=!1):z[1]==="m"||z[1]==="month"?Jt!==Number(z[2])&&(Ze=!1):(z[1]==="y"||z[1]==="year")&&fr!==Number(z[2])&&(Ze=!1):ce.includes(z[1])||(Ze=!1)}else if(z[0]==="t"||z[0]==="type_answer"){let ce=null;z[1]==="true"?ce=!0:z[1]==="false"?ce=!1:z[1]==="yes"?ce=!0:z[1]==="no"&&(ce=!1),ce!==null&&we.type_answer!==ce&&(Ze=!1)}else z[0]==="f"||z[0]==="front"?we.front.includes(z[1])||(Ze=!1):(z[0]==="b"||z[0]==="back")&&(we.back.includes(z[1])||(Ze=!1))}}),b!==""&&(we.front.includes(b)||we.back.includes(b)||(Ze=!1)),Ze&&_.push(we)}y.value=[..._],Ue()}function Ue(){d.value==="front-alpha"?f.value?y.value.sort((C,_)=>_.front.localeCompare(C.front)):y.value.sort((C,_)=>C.front.localeCompare(_.front)):d.value==="back-alpha"?f.value?y.value.sort((C,_)=>_.back.localeCompare(C.back)):y.value.sort((C,_)=>C.back.localeCompare(_.back)):d.value==="streak"?f.value?y.value.sort((C,_)=>_.streak-C.streak):y.value.sort((C,_)=>C.streak-_.streak):d.value==="next-review"&&(f.value?y.value.sort((C,_)=>_.next_review-C.next_review):y.value.sort((C,_)=>C.next_review-_.next_review))}return e({loadAllCards:O}),(C,_)=>(Z(),ie("div",kk,[m("div",Ck,[m("div",Pk,[fe(m("input",{type:"text","onUpdate:modelValue":_[0]||(_[0]=b=>s.value=b),onInput:_[1]||(_[1]=b=>F()),style:Zn({backgroundColor:i.value}),class:"rounded bg-indigo-400 p-3 text-center text-lg placeholder-white shadow shadow-black",placeholder:"Name"},null,36),[[Se,s.value]]),m("p",{style:Zn({backgroundColor:o.value}),class:"mt-3 rounded p-1 text-black"}," Deck ID: "+qe(t.deck.id),5),m("div",Sk,[xk,fe(m("input",{type:"number","onUpdate:modelValue":_[2]||(_[2]=b=>a.value=b),placeholder:"?",class:"w-[4ch] rounded bg-inherit p-1 text-center text-white placeholder-black"},null,512),[[Se,a.value,void 0,{number:!0}]])]),m("div",null,[m("div",Dk,[Nk,fe(m("input",{type:"text","onUpdate:modelValue":_[3]||(_[3]=b=>u.value=b),class:"w-[5ch] rounded bg-cyan-500 p-1 text-center placeholder-white",placeholder:"?"},null,512),[[Se,u.value,void 0,{number:!0}]])])]),Ok,m("button",{onClick:_[4]||(_[4]=b=>U()),class:"mt-3 rounded bg-red-700 p-3 text-xl shadow shadow-black"}," DELETE "),Vk,m("button",{onClick:_[5]||(_[5]=b=>C.$emit("close")),class:"mr-4 mt-3 rounded bg-orange-300 p-3 text-xl shadow shadow-black"}," Cancel "),m("button",{onClick:_[6]||(_[6]=b=>k()),class:"mt-3 rounded bg-rose-300 p-3 text-xl shadow shadow-black"}," Update ")]),Mk,m("div",Lk,[Uk,m("div",Fk,[fe(m("input",{type:"text",placeholder:"Search","onUpdate:modelValue":_[7]||(_[7]=b=>h.value=b),onInput:_[8]||(_[8]=b=>ke()),class:"max-w-full flex-1 rounded-md bg-gray-700 p-3 text-white"},null,544),[[Se,h.value]]),m("div",$k,[Bk,fe(m("select",{"onUpdate:modelValue":_[9]||(_[9]=b=>d.value=b),onChange:_[10]||(_[10]=b=>Ue()),class:"rounded-md bg-cyan-700 p-1"},Wk,544),[[jf,d.value]]),zk,fe(m("input",{type:"checkbox",id:"reversed_sort_elem","onUpdate:modelValue":_[11]||(_[11]=b=>f.value=b),onChange:_[12]||(_[12]=b=>Ue())},null,544),[[go,f.value]])])]),(Z(!0),ie(nt,null,Go(y.value,(b,te)=>(Z(),ie("div",Gk,[fe(m("input",{type:"text",placeholder:"Card Front","onUpdate:modelValue":de=>c.value[b.index].front=de,class:"mr-5 inline w-48 rounded-md bg-rose-900 p-2 text-center text-white placeholder-black shadow shadow-black"},null,8,Qk),[[Se,c.value[b.index].front]]),fe(m("input",{type:"text",placeholder:"Card Back","onUpdate:modelValue":de=>c.value[b.index].back=de,class:"mr-5 inline w-48 rounded-md bg-purple-900 p-2 text-center text-white placeholder-black shadow shadow-black"},null,8,Yk),[[Se,c.value[b.index].back]]),m("label",{for:`typeAnsSetting${te}`,class:"mr-2 select-none text-center text-white"},"Type Answer",8,Jk),fe(m("input",{"onUpdate:modelValue":de=>c.value[b.index].type_answer=de,type:"checkbox",id:`typeAnsSetting${te}`,class:"mr-5 h-7 w-7 translate-y-1"},null,8,Xk),[[go,c.value[b.index].type_answer]]),m("p",Zk,qe(b.streak),1),m("p",eC,qe(b.next_review.toLocaleDateString("en-GB")),1),m("button",{onClick:de=>B(b.id),class:"rounded-md bg-red-900 p-2 text-green-500 shadow shadow-black"}," Delete ",8,tC)]))),256))])])]))}},rC={class:"fixed bottom-0 left-0 right-0 top-0 z-50 bg-gray-600 bg-opacity-50"},sC={class:"fixed left-1/2 top-1/2 inline-block -translate-x-1/2 -translate-y-1/2 rounded-md bg-gradient-to-r from-green-900 to-blue-900 p-3 text-center shadow-lg shadow-black"},iC={class:"mt-3 flex items-center justify-center rounded bg-cyan-400 p-3 text-lg shadow shadow-black"},oC=m("p",{class:"mr-1"},"New Cards Per Day:",-1),aC={__name:"NewDeckMenu",props:["auth","db","decksLength"],emits:["close","save"],setup(t,{emit:e}){const n=t,r=M(""),s=M(""),i=M(10);function o(){r.value!==""?i.value!==""?ni(It(n.db,`users/${n.auth.currentUser.uid}/decks`),{name:r.value,new_cards_per_day:i.value,new_cards_today:i.value,last_update:pe.fromDate(new Date(0)),index:n.decksLength}).then(()=>{e("save"),e("close")}):alert("New cards per day cannot be empty."):alert("Name cannot be empty.")}async function a(){s.value=await Uo(r.value)}return(l,c)=>(Z(),ie("div",rC,[m("div",sC,[fe(m("input",{type:"text","onUpdate:modelValue":c[0]||(c[0]=u=>r.value=u),onInput:c[1]||(c[1]=u=>a()),style:Zn({backgroundColor:s.value}),class:"rounded bg-indigo-400 p-3 text-center text-lg placeholder-white shadow shadow-black",placeholder:"Name"},null,36),[[Se,r.value]]),m("div",iC,[oC,fe(m("input",{type:"number","onUpdate:modelValue":c[2]||(c[2]=u=>i.value=u),class:"w-[5ch] rounded bg-cyan-500 p-1 text-center placeholder-white",placeholder:"?"},null,512),[[Se,i.value,void 0,{number:!0}]])]),m("div",null,[m("button",{onClick:c[3]||(c[3]=u=>l.$emit("close")),class:"mr-4 mt-3 rounded bg-orange-300 p-3 text-xl shadow shadow-black"}," Cancel "),m("button",{onClick:o,class:"mt-3 rounded bg-rose-300 p-3 text-xl shadow shadow-black"}," Create ")])])]))}},lC={class:"fixed bottom-0 left-0 right-0 top-0 z-50 bg-gray-600 bg-opacity-50"},cC={class:"fixed left-1/2 top-1/2 inline-block -translate-x-1/2 -translate-y-1/2 rounded-md bg-gradient-to-tr from-cyan-700 to-zinc-400 p-3 text-center shadow-lg shadow-black"},uC=m("p",null,"Front",-1),hC=m("hr",{class:"mb-4 mt-4 rounded border-2 border-gray-400"},null,-1),dC=m("p",null,"Back",-1),fC=m("hr",{class:"mb-4 mt-4 rounded border-2 border-gray-400"},null,-1),pC={class:"rounded-md bg-gray-500 p-3 shadow shadow-black"},gC=m("label",{for:"reversedCheck",class:"mr-3 text-center text-lg text-white"},"Create Reversed",-1),mC=m("br",null,null,-1),_C=m("label",{for:"typeAnsCheck",class:"mr-3 text-center text-lg text-white"},"Type Answer",-1),yC=m("hr",{class:"mb-4 mt-4 rounded border-2 border-gray-400"},null,-1),vC={__name:"NewCardMenu",props:["auth","db","deckId"],emits:["close"],setup(t,{emit:e}){const n=t,r=M(""),s=M(""),i=M(!1),o=M(!1),a=M(null);function l(){ni(It(n.db,`users/${n.auth.currentUser.uid}/decks/${n.deckId}/cards/`),{front:r.value,back:s.value,streak:-1,next_review:pe.fromDate(new Date),type_answer:o.value}).catch(u=>{alert(u)}),i.value&&ni(It(n.db,`users/${n.auth.currentUser.uid}/decks/${n.deckId}/cards/`),{front:s.value,back:r.value,streak:-1,next_review:pe.fromDate(new Date),type_answer:o.value}).catch(u=>{alert(u)}),r.value="",s.value="",a.value.focus()}function c(u){u.code=="Enter"&&l()}return(u,h)=>(Z(),ie("div",lC,[m("div",cC,[uC,fe(m("input",{type:"text",ref_key:"front_field_ref",ref:a,"onUpdate:modelValue":h[0]||(h[0]=d=>r.value=d),class:"rounded bg-gray-600 p-3 text-center text-lg text-white shadow shadow-black"},null,512),[[Se,r.value]]),hC,dC,fe(m("input",{type:"text","onUpdate:modelValue":h[1]||(h[1]=d=>s.value=d),onKeypress:h[2]||(h[2]=d=>c(d)),class:"rounded bg-gray-600 p-3 text-center text-lg text-white shadow shadow-black"},null,544),[[Se,s.value]]),fC,m("div",pC,[gC,fe(m("input",{"onUpdate:modelValue":h[3]||(h[3]=d=>i.value=d),type:"checkbox",id:"reversedCheck",class:"h-7 w-7 translate-y-1"},null,512),[[go,i.value]]),mC,_C,fe(m("input",{"onUpdate:modelValue":h[4]||(h[4]=d=>o.value=d),type:"checkbox",id:"typeAnsCheck",class:"h-7 w-7 translate-y-1"},null,512),[[go,o.value]])]),yC,m("button",{onClick:h[5]||(h[5]=d=>u.$emit("close")),class:"mr-10 rounded bg-red-400 px-3 py-2 text-lg text-white shadow-md shadow-gray-800"}," Cancel "),m("button",{onClick:h[6]||(h[6]=d=>l()),class:"rounded bg-green-600 px-3 py-2 text-lg text-white shadow-md shadow-gray-800"}," Create ")])]))}},wC={class:"flex justify-center"},EC={class:"mt-8 inline-block rounded-xl bg-sky-600 p-3 text-center"},IC=m("p",{class:"text-lg text-white"},"Timeline",-1),TC={class:"mt-1 rounded-xl bg-blue-200 p-1 text-xl"},bC={class:"mt-3"},AC=m("p",{class:"text-lg text-white"},"New Card Forecast",-1),RC={class:"rounded-xl bg-green-200 p-1"},kC={class:"text-lg"},CC={__name:"Timeline",props:["cards","showDays","newCards"],setup(t){const e=t,n=M([]);return Qi(e,()=>{n.value=[];const r=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],s=new Date,i=new Date(s.getFullYear(),s.getMonth(),s.getDate()),o=i.getDay();for(let a=0;a<e.showDays;a++){let l=o+a;l>=r.length&&(l-=r.length),n.value.push({name:r[l],reviews:0})}e.cards.forEach(a=>{for(let l=0;l<e.showDays;l++){let c=new Date(i);c.setDate(c.getDate()+l);let u=new Date(c);u.setDate(u.getDate()+1),l===0?a.streak!==-1&&a.next_review<=s&&(n.value[0].reviews+=1):a.next_review>=c&&a.next_review<u&&(n.value[l].reviews+=1)}})}),(r,s)=>(Z(),ie("div",wC,[m("div",EC,[m("div",null,[IC,(Z(!0),ie(nt,null,Go(n.value,(i,o)=>(Z(),ie("p",TC,[Kn(" Reviews "+qe(o===0?"Now":o===1?"Tomorrow":`on ${i.name}`)+": ",1),m("b",null,qe(i.reviews),1)]))),256))]),m("div",bC,[AC,m("div",RC,[m("p",null," At the rate of "+qe(t.newCards)+" new cards per day, you will accumulate... ",1),m("div",kC,[m("p",null,[m("b",null,qe(t.newCards*7),1),Kn(" per Week ")]),m("p",null,[m("b",null,qe(t.newCards*30),1),Kn(" per Month ")]),m("p",null,[m("b",null,qe(t.newCards*365),1),Kn(" per Year ")])])])])])]))}},PC={key:0,class:"mt-5 overflow-auto whitespace-nowrap pb-3 text-center"},SC=["onClick","onDblclick"],xC={key:3,class:"mt-10"},DC={class:"flex justify-center text-center"},NC={class:"mr-10 text-lg"},OC={class:"text-lg"},VC={class:"flex justify-center"},MC={class:"mt-2"},LC={__name:"Decks",props:["auth","db"],emits:["loadSettings","review"],setup(t,{expose:e,emit:n}){const r=t,s=M([]),i=M(""),o=M(0),a=M(0),l=M(-1),c=M(!1),u=M(!1),h=M(null),d=M(null),f=M([]),w=M(0);async function y(C){i.value=C;const _=await Xn(It(r.db,`users/${r.auth.currentUser.uid}/decks/${i.value}/cards`));o.value=0,a.value=0,f.value=[];const b=new Date;_.forEach(te=>{b>=te.data().next_review.toDate()&&(te.data().streak!==-1?o.value+=1:a.value+=1),f.value.push({id:te.id,front:te.data().front,back:te.data().back,streak:te.data().streak,next_review:te.data().next_review.toDate(),type_answer:!!te.data().type_answer})}),ti(xe(r.db,`users/${r.auth.currentUser.uid}/decks/${i.value}`)).then(te=>{w.value=te.data().new_cards_per_day})}async function k(C){l.value=C,await Ho(),h.value.loadAllCards()}async function U(){let C=[];Xn(It(r.db,`users/${r.auth.currentUser.uid}/decks`)).then(async _=>{await Promise.all(_.docs.map(async b=>{C.push({name:b.data().name,color:await Uo(b.data().name),new_cards_per_day:b.data().new_cards_per_day,id:b.id,index:b.data().index})})),C.sort((b,te)=>b.index-te.index),s.value=C}),n("loadSettings")}function O(){l.value=-1,U()}function B(){c.value=!1}function F(){U()}async function Re(){const C=await ti(xe(r.db,`users/${r.auth.currentUser.uid}/decks/${i.value}`));let _=[],b=[],te=C.data().new_cards_today;const de=new Date,we=new Date(de.getFullYear(),de.getMonth(),de.getDate());we>C.data().last_update.toDate()&&(bt(xe(r.db,`users/${r.auth.currentUser.uid}/decks/${i.value}`),{new_cards_today:C.data().new_cards_per_day,last_update:pe.fromDate(we)}),te=C.data().new_cards_per_day),(await Xn(SR(It(r.db,`users/${r.auth.currentUser.uid}/decks/${i.value}/cards`),xR("next_review","<=",pe.fromDate(de))))).forEach(ae=>{ae.data().streak!==-1?_.push({id:ae.id,front:ae.data().front,back:ae.data().back,streak:ae.data().streak,type_answer:!!ae.data().type_answer}):b.push({id:ae.id,front:ae.data().front,back:ae.data().back,streak:ae.data().streak,next_review:ae.data().next_review,type_answer:!!ae.data().type_answer})}),b.sort((ae,z)=>ae.next_review.toDate()-z.next_review.toDate());for(let ae=0;ae<b.length;ae++)te>0&&(_.push({id:b[ae].id,front:b[ae].front,back:b[ae].back,streak:0,type_answer:b[ae].type_answer}),bt(xe(r.db,`users/${r.auth.currentUser.uid}/decks/${i.value}/cards/${b[ae].id}`),{streak:0}),te-=1);bt(xe(r.db,`users/${r.auth.currentUser.uid}/decks/${i.value}`),{new_cards_today:te}),_.length!==0?n("review",i.value,_):alert("No reviews on this deck at this time.")}function ke(){u.value=!1}function Ue(){i.value="",s.value=[]}return e({loadDecks:U,logout:Ue}),(C,_)=>(Z(),ie(nt,null,[t.auth!==null&&t.auth.currentUser!==null?(Z(),ie("div",PC,[(Z(!0),ie(nt,null,Go(s.value,(b,te)=>(Z(),ie("div",{key:b.id,class:"mb-3 inline-block"},[m("button",{onClick:de=>y(b.id),onDblclick:de=>k(te),style:Zn({backgroundColor:b.color,borderWidth:i.value==b.id?"4px":"0px"}),class:"mr-5 rounded border-white bg-white p-5 text-lg shadow-md shadow-black"},qe(b.name),45,SC)]))),128)),m("button",{onClick:_[0]||(_[0]=b=>c.value=!0),class:"rounded bg-gradient-to-r from-emerald-700 to-lime-600 p-5 text-lg text-white shadow-md shadow-black"}," New Deck ")])):$e("",!0),l.value!==-1?(Z(),Tr(nC,{key:1,auth:t.auth,db:t.db,deck:s.value[l.value],onClose:_[1]||(_[1]=b=>O()),ref_key:"edit_deck_menu_ref",ref:h},null,8,["auth","db","deck"])):$e("",!0),c.value?(Z(),Tr(aC,{key:2,auth:t.auth,db:t.db,"decks-length":s.value.length,onClose:_[2]||(_[2]=b=>B()),onSave:_[3]||(_[3]=b=>F()),ref_key:"new_deck_menu_ref",ref:d},null,8,["auth","db","decks-length"])):$e("",!0),i.value!==""?(Z(),ie("div",xC,[m("div",DC,[m("p",NC,[Kn(" New Cards: "),m("b",null,qe(a.value),1)]),m("p",OC,[Kn(" Reviews: "),m("b",null,qe(o.value),1)])]),m("div",VC,[m("div",MC,[m("button",{onClick:_[4]||(_[4]=b=>u.value=!0),class:"mr-5 rounded-lg bg-gradient-to-tr from-orange-600 to-blue-500 p-3 text-2xl text-white shadow-lg shadow-black"}," New Card "),m("button",{onClick:_[5]||(_[5]=b=>Re()),class:"rounded-lg bg-gradient-to-r from-green-500 to-amber-800 p-3 text-2xl text-white shadow-lg shadow-black"}," Review ")])])])):$e("",!0),u.value?(Z(),Tr(vC,{key:4,auth:t.auth,db:t.db,"deck-id":i.value,onClose:_[6]||(_[6]=b=>ke())},null,8,["auth","db","deck-id"])):$e("",!0),i.value!==""?(Z(),Tr(CC,{key:5,cards:f.value,"show-days":7,"new-cards":w.value},null,8,["cards","new-cards"])):$e("",!0)],64))}},UC="/wSpaRe/assets/yes-6050e699.svg";var cl=typeof navigator<"u"?navigator.userAgent.toLowerCase().indexOf("firefox")>0:!1;function ul(t,e,n,r){t.addEventListener?t.addEventListener(e,n,r):t.attachEvent&&t.attachEvent("on".concat(e),function(){n(window.event)})}function n_(t,e){for(var n=e.slice(0,e.length-1),r=0;r<n.length;r++)n[r]=t[n[r].toLowerCase()];return n}function r_(t){typeof t!="string"&&(t=""),t=t.replace(/\s/g,"");for(var e=t.split(","),n=e.lastIndexOf("");n>=0;)e[n-1]+=",",e.splice(n,1),n=e.lastIndexOf("");return e}function FC(t,e){for(var n=t.length>=e.length?t:e,r=t.length>=e.length?e:t,s=!0,i=0;i<n.length;i++)r.indexOf(n[i])===-1&&(s=!1);return s}var ri={backspace:8,"⌫":8,tab:9,clear:12,enter:13,"↩":13,return:13,esc:27,escape:27,space:32,left:37,up:38,right:39,down:40,del:46,delete:46,ins:45,insert:45,home:36,end:35,pageup:33,pagedown:34,capslock:20,num_0:96,num_1:97,num_2:98,num_3:99,num_4:100,num_5:101,num_6:102,num_7:103,num_8:104,num_9:105,num_multiply:106,num_add:107,num_enter:108,num_subtract:109,num_decimal:110,num_divide:111,"⇪":20,",":188,".":190,"/":191,"`":192,"-":cl?173:189,"=":cl?61:187,";":cl?59:186,"'":222,"[":219,"]":221,"\\":220},Yt={"⇧":16,shift:16,"⌥":18,alt:18,option:18,"⌃":17,ctrl:17,control:17,"⌘":91,cmd:91,command:91},ic={16:"shiftKey",18:"altKey",17:"ctrlKey",91:"metaKey",shiftKey:16,ctrlKey:17,altKey:18,metaKey:91},ze={16:!1,18:!1,17:!1,91:!1},Pe={};for(var Wi=1;Wi<20;Wi++)ri["f".concat(Wi)]=111+Wi;var ve=[],Wd=!1,s_="all",i_=[],Pi=function(e){return ri[e.toLowerCase()]||Yt[e.toLowerCase()]||e.toUpperCase().charCodeAt(0)},$C=function(e){return Object.keys(ri).find(function(n){return ri[n]===e})},BC=function(e){return Object.keys(Yt).find(function(n){return Yt[n]===e})};function o_(t){s_=t||"all"}function si(){return s_||"all"}function jC(){return ve.slice(0)}function qC(){return ve.map(function(t){return $C(t)||BC(t)||String.fromCharCode(t)})}function KC(){var t=[];return Object.keys(Pe).forEach(function(e){Pe[e].forEach(function(n){var r=n.key,s=n.scope,i=n.mods,o=n.shortcut;t.push({scope:s,shortcut:o,mods:i,keys:r.split("+").map(function(a){return Pi(a)})})})}),t}function HC(t){var e=t.target||t.srcElement,n=e.tagName,r=!0;return(e.isContentEditable||(n==="INPUT"||n==="TEXTAREA"||n==="SELECT")&&!e.readOnly)&&(r=!1),r}function WC(t){return typeof t=="string"&&(t=Pi(t)),ve.indexOf(t)!==-1}function zC(t,e){var n,r;t||(t=si());for(var s in Pe)if(Object.prototype.hasOwnProperty.call(Pe,s))for(n=Pe[s],r=0;r<n.length;)n[r].scope===t?n.splice(r,1):r++;si()===t&&o_(e||"all")}function GC(t){var e=t.keyCode||t.which||t.charCode,n=ve.indexOf(e);if(n>=0&&ve.splice(n,1),t.key&&t.key.toLowerCase()==="meta"&&ve.splice(0,ve.length),(e===93||e===224)&&(e=91),e in ze){ze[e]=!1;for(var r in Yt)Yt[r]===e&&(Fe[r]=!1)}}function QC(t){if(typeof t>"u")Object.keys(Pe).forEach(function(o){return delete Pe[o]});else if(Array.isArray(t))t.forEach(function(o){o.key&&hl(o)});else if(typeof t=="object")t.key&&hl(t);else if(typeof t=="string"){for(var e=arguments.length,n=new Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];var s=n[0],i=n[1];typeof s=="function"&&(i=s,s=""),hl({key:t,scope:s,method:i,splitKey:"+"})}}var hl=function(e){var n=e.key,r=e.scope,s=e.method,i=e.splitKey,o=i===void 0?"+":i,a=r_(n);a.forEach(function(l){var c=l.split(o),u=c.length,h=c[u-1],d=h==="*"?"*":Pi(h);if(Pe[d]){r||(r=si());var f=u>1?n_(Yt,c):[];Pe[d]=Pe[d].filter(function(w){var y=s?w.method===s:!0;return!(y&&w.scope===r&&FC(w.mods,f))})}})};function zd(t,e,n,r){if(e.element===r){var s;if(e.scope===n||e.scope==="all"){s=e.mods.length>0;for(var i in ze)Object.prototype.hasOwnProperty.call(ze,i)&&(!ze[i]&&e.mods.indexOf(+i)>-1||ze[i]&&e.mods.indexOf(+i)===-1)&&(s=!1);(e.mods.length===0&&!ze[16]&&!ze[18]&&!ze[17]&&!ze[91]||s||e.shortcut==="*")&&(e.keys=[],e.keys=e.keys.concat(ve),e.method(t,e)===!1&&(t.preventDefault?t.preventDefault():t.returnValue=!1,t.stopPropagation&&t.stopPropagation(),t.cancelBubble&&(t.cancelBubble=!0)))}}}function Gd(t,e){var n=Pe["*"],r=t.keyCode||t.which||t.charCode;if(Fe.filter.call(this,t)){if((r===93||r===224)&&(r=91),ve.indexOf(r)===-1&&r!==229&&ve.push(r),["ctrlKey","altKey","shiftKey","metaKey"].forEach(function(w){var y=ic[w];t[w]&&ve.indexOf(y)===-1?ve.push(y):!t[w]&&ve.indexOf(y)>-1?ve.splice(ve.indexOf(y),1):w==="metaKey"&&t[w]&&ve.length===3&&(t.ctrlKey||t.shiftKey||t.altKey||(ve=ve.slice(ve.indexOf(y))))}),r in ze){ze[r]=!0;for(var s in Yt)Yt[s]===r&&(Fe[s]=!0);if(!n)return}for(var i in ze)Object.prototype.hasOwnProperty.call(ze,i)&&(ze[i]=t[ic[i]]);t.getModifierState&&!(t.altKey&&!t.ctrlKey)&&t.getModifierState("AltGraph")&&(ve.indexOf(17)===-1&&ve.push(17),ve.indexOf(18)===-1&&ve.push(18),ze[17]=!0,ze[18]=!0);var o=si();if(n)for(var a=0;a<n.length;a++)n[a].scope===o&&(t.type==="keydown"&&n[a].keydown||t.type==="keyup"&&n[a].keyup)&&zd(t,n[a],o,e);if(r in Pe){for(var l=0;l<Pe[r].length;l++)if((t.type==="keydown"&&Pe[r][l].keydown||t.type==="keyup"&&Pe[r][l].keyup)&&Pe[r][l].key){for(var c=Pe[r][l],u=c.splitKey,h=c.key.split(u),d=[],f=0;f<h.length;f++)d.push(Pi(h[f]));d.sort().join("")===ve.sort().join("")&&zd(t,c,o,e)}}}}function YC(t){return i_.indexOf(t)>-1}function Fe(t,e,n){ve=[];var r=r_(t),s=[],i="all",o=document,a=0,l=!1,c=!0,u="+",h=!1;for(n===void 0&&typeof e=="function"&&(n=e),Object.prototype.toString.call(e)==="[object Object]"&&(e.scope&&(i=e.scope),e.element&&(o=e.element),e.keyup&&(l=e.keyup),e.keydown!==void 0&&(c=e.keydown),e.capture!==void 0&&(h=e.capture),typeof e.splitKey=="string"&&(u=e.splitKey)),typeof e=="string"&&(i=e);a<r.length;a++)t=r[a].split(u),s=[],t.length>1&&(s=n_(Yt,t)),t=t[t.length-1],t=t==="*"?"*":Pi(t),t in Pe||(Pe[t]=[]),Pe[t].push({keyup:l,keydown:c,scope:i,mods:s,shortcut:r[a],method:n,key:r[a],splitKey:u,element:o});typeof o<"u"&&!YC(o)&&window&&(i_.push(o),ul(o,"keydown",function(d){Gd(d,o)},h),Wd||(Wd=!0,ul(window,"focus",function(){ve=[]},h)),ul(o,"keyup",function(d){Gd(d,o),GC(d)},h))}function JC(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"all";Object.keys(Pe).forEach(function(n){var r=Pe[n].filter(function(s){return s.scope===e&&s.shortcut===t});r.forEach(function(s){s&&s.method&&s.method()})})}var dl={getPressedKeyString:qC,setScope:o_,getScope:si,deleteScope:zC,getPressedKeyCodes:jC,getAllKeyCodes:KC,isPressed:WC,filter:HC,trigger:JC,unbind:QC,keyMap:ri,modifier:Yt,modifierMap:ic};for(var fl in dl)Object.prototype.hasOwnProperty.call(dl,fl)&&(Fe[fl]=dl[fl]);if(typeof window<"u"){var XC=window.hotkeys;Fe.noConflict=function(t){return t&&window.hotkeys===Fe&&(window.hotkeys=XC),Fe},window.hotkeys=Fe}const ZC={key:0,class:"fixed bottom-0 left-0 right-0 top-0 z-50 bg-gray-600 bg-opacity-50"},eP={class:"mx-8 my-4 max-h-[10vh] overflow-auto break-all text-2xl text-white"},tP={key:0},nP=m("hr",{class:"mx-3 rounded-full border-2 border-white"},null,-1),rP={class:"mx-8 my-4 max-h-[10vh] overflow-auto break-all text-2xl text-white"},sP=m("br",null,null,-1),iP={key:0,class:"mt-8"},oP=m("img",{height:"65",width:"65",src:Fu,alt:"No"},null,-1),aP=[oP],lP=m("img",{height:"65",width:"65",src:UC,alt:"Yes"},null,-1),cP=[lP],uP={key:1},hP=m("hr",{class:"mx-3 rounded-full border-2 border-white"},null,-1),dP=m("br",null,null,-1),fP={__name:"Review",props:["auth","db","timeDuration","timeMultiplier"],emits:[],setup(t,{expose:e,emit:n}){const r=t;Fe("space","review",function(C,_){C.preventDefault(),c=!1,w()}),Fe("space","yes_no",function(C,_){C.preventDefault(),k(!0)}),Fe("c","yes_no",function(C,_){C.preventDefault(),k(!1)}),Fe("space","check_type_ans",function(C,_){C.preventDefault(),y()}),Fe("enter","check_type_ans",function(C,_){C.preventDefault(),y()});const s=M(!1),i=M(""),o=M([]),a=M(0),l=M(!1);let c=!1;const u=M(""),h=M(!1),d=M(null);function f(C,_){i.value=C,o.value=_,a.value=B(0,o.value.length),s.value=!0,Fe.setScope("review"),o.value[a.value].type_answer&&O()}function w(){o.value[a.value].type_answer===!1?c===!0?c=!1:(l.value=!0,Fe.setScope("yes_no"),c=!0):h.value?h.value=!1:Fe.getScope()=="check_type_ans"&&y()}function y(){const C=o.value[a.value].back.replace(/\[.*?\]/g,"");u.value===C?(k(!0),u.value=""):(k(!1),u.value="")}function k(C){const _=new Date,b=new Date(_.getFullYear(),_.getMonth(),_.getDate());if(C===!0)if(o.value[a.value].streak===0)o.value[a.value].streak=.5,ke(!0);else if(o.value[a.value].streak===.5){let te=new Date(b);te.setDate(te.getDate()+1),bt(xe(r.db,`users/${r.auth.currentUser.uid}/decks/${i.value}/cards/${o.value[a.value].id}`),{next_review:pe.fromDate(te),streak:1}),Re()}else{const te=Math.pow(r.timeMultiplier,o.value[a.value].streak)*r.timeDuration,de=Math.floor(te/24);let we=new Date(b);we.setDate(we.getDate()+de),bt(xe(r.db,`users/${r.auth.currentUser.uid}/decks/${i.value}/cards/${o.value[a.value].id}`),{next_review:pe.fromDate(we),streak:o.value[a.value].streak+1}),Re()}else bt(xe(r.db,`users/${r.auth.currentUser.uid}/decks/${i.value}/cards/${o.value[a.value].id}`),{next_review:pe.fromDate(new Date),streak:0}),o.value[a.value].streak=0,ke(!0);o.value.length>0&&o.value[a.value].type_answer&&O()}function U(){l.value=!0,Fe.setScope("check_type_ans")}async function O(){await Ho(),d.value.focus()}function B(C,_){return Math.floor(Math.random()*(_-C))+C}function F(){s.value=!1,l.value=!1,Fe.setScope("all")}function Re(){o.value.splice(a.value,1),o.value.length!==0?ke(!1):(F(),alert("You're finished with reviews for now."))}function ke(C){if(C)if(o.value.length!==1){let _=B(0,o.value.length);for(;_===a.value;)_=B(0,o.value.length);a.value=_}else a.value=0;else a.value=B(0,o.value.length);l.value=!1,Fe.setScope("review")}function Ue(C){C.code=="Enter"&&U()}return e({reviewCards:f}),(C,_)=>s.value?(Z(),ie("div",ZC,[m("button",{onClick:_[0]||(_[0]=b=>F()),class:"fixed left-1/2 top-[20%] -translate-x-1/2 rounded bg-gray-700 p-3 text-white"}," Cancel "),m("div",{onClick:_[6]||(_[6]=b=>w()),class:"fixed left-1/2 top-1/3 min-w-[300px] -translate-x-1/2 rounded-lg bg-gradient-to-t from-pink-700 to-purple-800 p-10 text-center shadow-xl shadow-black"},[m("p",eP,qe(o.value[a.value].front),1),l.value===!0?(Z(),ie("div",tP,[nP,m("p",rP,qe(o.value[a.value].back),1),sP,o.value[a.value].type_answer===!1?(Z(),ie("div",iP,[m("button",{onClick:_[1]||(_[1]=b=>k(!1)),class:"mr-10 rounded-full bg-gradient-to-br from-pink-500 to-red-900 p-1 shadow-md shadow-black"},aP),m("button",{onClick:_[2]||(_[2]=b=>k(!0)),class:"rounded-full bg-gradient-to-br from-purple-500 to-blue-900 p-1 shadow-md shadow-black"},cP)])):$e("",!0)])):$e("",!0),o.value[a.value].type_answer===!0&&l.value===!1?(Z(),ie("div",uP,[hP,fe(m("input",{ref_key:"answer_field_ref",ref:d,"onUpdate:modelValue":_[3]||(_[3]=b=>u.value=b),type:"text",placeholder:"Type Answer",onKeypress:_[4]||(_[4]=b=>Ue(b)),class:"my-4 w-[250px] rounded-md bg-gradient-to-r from-purple-500 to-pink-500 p-3 text-center text-2xl text-white placeholder-black shadow shadow-black"},null,544),[[Se,u.value]]),dP,m("button",{onClick:_[5]||(_[5]=b=>{h.value=!0,U()}),class:"mt-2 rounded-md bg-gradient-to-br from-purple-500 to-blue-900 p-3 text-xl text-white shadow-md shadow-black"}," Check ")])):$e("",!0)])])):$e("",!0)}},pP={key:0,class:"absolute left-5 top-5"},gP={key:1,class:"fixed bottom-0 left-0 right-0 top-0 z-50 bg-gray-600 bg-opacity-50"},mP={class:"fixed left-1/2 top-1/2 inline-block -translate-x-1/2 -translate-y-1/2 rounded-md bg-yellow-300 p-3 text-center shadow-lg shadow-black"},_P=m("p",{class:"text-lg"},"Deck Migration Tool",-1),yP=m("p",null," This tool migrates your old decks using unix time to new decks using timestamps. This will be removed in the future. ",-1),vP=m("p",null,"The second tool sets your decks cards hours to 0",-1),wP=m("option",{selected:"",disabled:"",value:""},"Select Deck",-1),EP=["value"],IP=m("br",null,null,-1),TP={key:0,class:"mt-3 rounded bg-amber-400 p-3"},bP={__name:"DeckMigration",props:["auth","db"],emits:["loadDecks"],setup(t,{emit:e}){const n=t,r=M(!1),s=M([]),i=M(null),o=M("");async function a(){s.value=[],(await Xn(It(n.db,"users/"+n.auth.currentUser.uid+"/decks"))).forEach(d=>{s.value.push({name:d.data().name,id:d.id})}),r.value=!0}function l(){r.value=!1}async function c(){console.log(i.value),o.value="Getting Old Deck";const h=await ti(xe(n.db,"users/"+n.auth.currentUser.uid+"/decks/"+i.value));o.value="Creating New Deck";const d=await ni(It(n.db,"users/"+n.auth.currentUser.uid+"/decks"),{name:h.data().name+"(new)",new_cards_today:h.data().new_cards_today,last_update:pe.fromDate(new Date(h.data().last_update_nct))}).catch(k=>{alert(k)});o.value="Getting Old Cards";const f=await Xn(It(n.db,"users/"+n.auth.currentUser.uid+"/decks/"+i.value+"/cards")),w=f.size;o.value="Creating New Cards 0/"+w;let y=0;f.forEach(async k=>{y+=1,o.value="Creating New Cards"+y+"/"+w,await ni(It(n.db,"users/"+n.auth.currentUser.uid+"/decks/"+d.id+"/cards/"),{front:k.data().front,back:k.data().back,streak:k.data().streak,next_review:pe.fromDate(new Date(k.data().next_review)),type_answer:!!k.data().type_answer}).catch(U=>{alert(U)})}),o.value="Done",e("loadDecks")}async function u(){o.value="Loading Cards";const h=await Xn(It(n.db,"users/"+n.auth.currentUser.uid+"/decks/"+i.value+"/cards")),d=h.size;let f=0;o.value="Updating Cards 0/"+d,h.forEach(async w=>{if(f+=1,o.value="Updating Cards "+f+"/"+d,w.data().streak!==-1){const y=w.data().next_review.toDate(),k=new Date(y.getFullYear(),y.getMonth(),y.getDate());await bt(xe(n.db,"users/"+n.auth.currentUser.uid+"/decks/"+i.value+"/cards/"+w.id),{next_review:pe.fromDate(k)})}}),o.value="Done"}return(h,d)=>(Z(),ie(nt,null,[t.auth!==null&&t.auth.currentUser!==null?(Z(),ie("div",pP,[m("button",{onClick:d[0]||(d[0]=f=>a()),class:"rounded bg-yellow-400 p-3 text-black"}," Migrate Decks ")])):$e("",!0),r.value?(Z(),ie("div",gP,[m("div",mP,[m("button",{onClick:d[1]||(d[1]=f=>l()),class:"rounded bg-red-400 p-3"}," Close "),_P,yP,vP,fe(m("select",{"onUpdate:modelValue":d[2]||(d[2]=f=>i.value=f),class:"mt-3 rounded bg-orange-300 p-3"},[wP,(Z(!0),ie(nt,null,Go(s.value,f=>(Z(),ie("option",{value:f.id},qe(f.name),9,EP))),256))],512),[[jf,i.value]]),IP,m("div",null,[i.value?(Z(),ie("button",{key:0,onClick:d[3]||(d[3]=f=>c()),class:"mt-3 rounded bg-blue-500 p-3"}," Migrate ")):$e("",!0),i.value?(Z(),ie("button",{key:1,onClick:d[4]||(d[4]=f=>u()),class:"ml-3 rounded bg-green-500 p-3"}," Zero ")):$e("",!0)]),o.value!==""?(Z(),ie("div",TP,[m("p",null,qe(o.value),1)])):$e("",!0)])])):$e("",!0)],64))}},AP={class:"mb-5 mt-8"},RP=m("br",null,null,-1),kP={__name:"App",setup(t){const e=M(null);let n=!1;const r=M(null),s=M(null),i=M(null),o=M(null),a=M(null),l=M(!1),c=M(1.5),u=M(24);kf(()=>{const d=ST();mI(d,async()=>{n||(n=!0,e.value=d,await Ho(),e.value.currentUser!==null&&o.value.loadDecks())})});async function h(){const d=await ti(xe(yr,`users/${e.value.currentUser.uid}`));c.value=d.data().time_multiplier,u.value=d.data().time_duration}return(d,f)=>(Z(),ie(nt,null,[m("div",AP,[Ge(dk,{auth:e.value,onOpenSettings:f[0]||(f[0]=w=>i.value.openSettings()),onOpenSignIn:f[1]||(f[1]=w=>r.value.openMenu()),onOpenSignUp:f[2]||(f[2]=w=>s.value.openMenu()),onSignOut:f[3]||(f[3]=w=>o.value.logout())},null,8,["auth"]),RP,Ge(LC,{auth:e.value,db:vr(yr),onLoadSettings:f[4]||(f[4]=w=>h()),onReview:f[5]||(f[5]=(w,y)=>a.value.reviewCards(w,y)),ref_key:"decks_ref",ref:o},null,8,["auth","db"])]),Ge(YR,{auth:e.value,onLoadDecks:f[6]||(f[6]=w=>o.value.loadDecks()),ref_key:"sign_in_menu_ref",ref:r},null,8,["auth"]),Ge(ok,{auth:e.value,db:vr(yr),onLoadDecks:f[7]||(f[7]=w=>o.value.loadDecks()),ref_key:"sign_up_menu_ref",ref:s},null,8,["auth","db"]),Ge(fP,{auth:e.value,db:vr(yr),"time-duration":u.value,"time-multiplier":c.value,ref_key:"review_ref",ref:a},null,8,["auth","db","time-duration","time-multiplier"]),Ge(Ak,{auth:e.value,db:vr(yr),onSaveSettings:f[8]||(f[8]=w=>h()),ref_key:"settings_ref",ref:i},null,8,["auth","db"]),m("div",null,[m("button",{onClick:f[9]||(f[9]=w=>l.value=!0),class:"absolute right-5 top-5 rounded-md bg-gray-500 p-2 shadow shadow-black"}," Guide "),l.value?(Z(),Tr(BR,{key:0,onClose:f[10]||(f[10]=w=>l.value=!1)})):$e("",!0)]),Ge(bP,{auth:e.value,db:vr(yr),onLoadDecks:f[11]||(f[11]=w=>o.value.loadDecks())},null,8,["auth","db"])],64))}};var CP="firebase",PP="10.4.0";/**
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
 */Rn(CP,PP,"app");const a_=function(){return document.ontouchstart!==null?"click":"touchstart"},Fo="__vue_click_away__",l_=function(t,e,n){c_(t);let r=n.context,s=e.value,i=!1;setTimeout(function(){i=!0},0),t[Fo]=function(o){if((!t||!t.contains(o.target))&&s&&i&&typeof s=="function")return s.call(r,o)},document.addEventListener(a_(),t[Fo],!1)},c_=function(t){document.removeEventListener(a_(),t[Fo],!1),delete t[Fo]},SP=function(t,e,n){e.value!==e.oldValue&&l_(t,e,n)},xP={install:function(t){t.directive("click-away",DP)}},DP={mounted:l_,updated:SP,unmounted:c_},NP={apiKey:"AIzaSyAGYqERiL1fj0l2m1ZmlkHFd5Vq8OiMubw",authDomain:"spare-a6401.firebaseapp.com",projectId:"spare-a6401",storageBucket:"spare-a6401.appspot.com",messagingSenderId:"277807224978",appId:"1:277807224978:web:6420ae19b4ca94e41c6e4b"},OP=Xf(NP),yr=vR(OP);Lv(kP).use(xP).mount("#app");
