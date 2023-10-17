(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Ur="156",Qa=0,qr=1,eo=2,_a=1,to=2,$t=3,ln=0,vt=1,Kt=2,sn=0,Wn=1,jr=2,$r=3,Kr=4,no=5,Gn=100,io=101,ro=102,Zr=103,Jr=104,so=200,ao=201,oo=202,lo=203,va=204,xa=205,co=206,uo=207,ho=208,fo=209,po=210,mo=0,go=1,_o=2,wr=3,vo=4,xo=5,yo=6,Mo=7,ya=0,Eo=1,So=2,an=0,To=1,bo=2,wo=3,Ao=4,Ro=5,Ma=300,Xn=301,qn=302,Ar=303,Rr=304,Vi=306,Cr=1e3,Ut=1001,Lr=1002,gt=1003,Qr=1004,Ji=1005,At=1006,Co=1007,ui=1008,on=1009,Lo=1010,Po=1011,Nr=1012,Ea=1013,nn=1014,rn=1015,di=1016,Sa=1017,Ta=1018,xn=1020,Do=1021,Nt=1023,Io=1024,Uo=1025,yn=1026,jn=1027,No=1028,ba=1029,Fo=1030,wa=1031,Aa=1033,Qi=33776,er=33777,tr=33778,nr=33779,es=35840,ts=35841,ns=35842,is=35843,Oo=36196,rs=37492,ss=37496,as=37808,os=37809,ls=37810,cs=37811,us=37812,ds=37813,hs=37814,fs=37815,ps=37816,ms=37817,gs=37818,_s=37819,vs=37820,xs=37821,ir=36492,ys=36494,Ms=36495,Bo=36283,Es=36284,Ss=36285,Ts=36286,Ra=3e3,Mn=3001,zo=3200,ko=3201,Go=0,Ho=1,En="",qe="srgb",Gt="srgb-linear",Wi="display-p3",rr=7680,Vo=519,Wo=512,Yo=513,Xo=514,qo=515,jo=516,$o=517,Ko=518,Zo=519,bs=35044,ws="300 es",Pr=1035,Zt=2e3,zi=2001;class Kn{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const r=n.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const ct=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let As=1234567;const oi=Math.PI/180,hi=180/Math.PI;function Zn(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(ct[i&255]+ct[i>>8&255]+ct[i>>16&255]+ct[i>>24&255]+"-"+ct[e&255]+ct[e>>8&255]+"-"+ct[e>>16&15|64]+ct[e>>24&255]+"-"+ct[t&63|128]+ct[t>>8&255]+"-"+ct[t>>16&255]+ct[t>>24&255]+ct[n&255]+ct[n>>8&255]+ct[n>>16&255]+ct[n>>24&255]).toLowerCase()}function dt(i,e,t){return Math.max(e,Math.min(t,i))}function Fr(i,e){return(i%e+e)%e}function Jo(i,e,t,n,r){return n+(i-e)*(r-n)/(t-e)}function Qo(i,e,t){return i!==e?(t-i)/(e-i):0}function li(i,e,t){return(1-t)*i+t*e}function el(i,e,t,n){return li(i,e,1-Math.exp(-t*n))}function tl(i,e=1){return e-Math.abs(Fr(i,e*2)-e)}function nl(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function il(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function rl(i,e){return i+Math.floor(Math.random()*(e-i+1))}function sl(i,e){return i+Math.random()*(e-i)}function al(i){return i*(.5-Math.random())}function ol(i){i!==void 0&&(As=i);let e=As+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function ll(i){return i*oi}function cl(i){return i*hi}function Dr(i){return(i&i-1)===0&&i!==0}function ul(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function ki(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function dl(i,e,t,n,r){const s=Math.cos,o=Math.sin,a=s(t/2),l=o(t/2),u=s((e+n)/2),c=o((e+n)/2),f=s((e-n)/2),h=o((e-n)/2),m=s((n-e)/2),_=o((n-e)/2);switch(r){case"XYX":i.set(a*c,l*f,l*h,a*u);break;case"YZY":i.set(l*h,a*c,l*f,a*u);break;case"ZXZ":i.set(l*f,l*h,a*c,a*u);break;case"XZX":i.set(a*c,l*_,l*m,a*u);break;case"YXY":i.set(l*m,a*c,l*_,a*u);break;case"ZYZ":i.set(l*_,l*m,a*c,a*u);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function Hn(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function pt(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const Ft={DEG2RAD:oi,RAD2DEG:hi,generateUUID:Zn,clamp:dt,euclideanModulo:Fr,mapLinear:Jo,inverseLerp:Qo,lerp:li,damp:el,pingpong:tl,smoothstep:nl,smootherstep:il,randInt:rl,randFloat:sl,randFloatSpread:al,seededRandom:ol,degToRad:ll,radToDeg:cl,isPowerOfTwo:Dr,ceilPowerOfTwo:ul,floorPowerOfTwo:ki,setQuaternionFromProperEuler:dl,normalize:pt,denormalize:Hn};class Ye{constructor(e=0,t=0){Ye.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(dt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),r=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*n-o*r+e.x,this.y=s*r+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Oe{constructor(e,t,n,r,s,o,a,l,u){Oe.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,o,a,l,u)}set(e,t,n,r,s,o,a,l,u){const c=this.elements;return c[0]=e,c[1]=r,c[2]=a,c[3]=t,c[4]=s,c[5]=l,c[6]=n,c[7]=o,c[8]=u,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,s=this.elements,o=n[0],a=n[3],l=n[6],u=n[1],c=n[4],f=n[7],h=n[2],m=n[5],_=n[8],g=r[0],p=r[3],d=r[6],T=r[1],M=r[4],E=r[7],v=r[2],A=r[5],R=r[8];return s[0]=o*g+a*T+l*v,s[3]=o*p+a*M+l*A,s[6]=o*d+a*E+l*R,s[1]=u*g+c*T+f*v,s[4]=u*p+c*M+f*A,s[7]=u*d+c*E+f*R,s[2]=h*g+m*T+_*v,s[5]=h*p+m*M+_*A,s[8]=h*d+m*E+_*R,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],u=e[7],c=e[8];return t*o*c-t*a*u-n*s*c+n*a*l+r*s*u-r*o*l}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],u=e[7],c=e[8],f=c*o-a*u,h=a*l-c*s,m=u*s-o*l,_=t*f+n*h+r*m;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const g=1/_;return e[0]=f*g,e[1]=(r*u-c*n)*g,e[2]=(a*n-r*o)*g,e[3]=h*g,e[4]=(c*t-r*l)*g,e[5]=(r*s-a*t)*g,e[6]=m*g,e[7]=(n*l-u*t)*g,e[8]=(o*t-n*s)*g,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,s,o,a){const l=Math.cos(s),u=Math.sin(s);return this.set(n*l,n*u,-n*(l*o+u*a)+o+e,-r*u,r*l,-r*(-u*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(sr.makeScale(e,t)),this}rotate(e){return this.premultiply(sr.makeRotation(-e)),this}translate(e,t){return this.premultiply(sr.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<9;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const sr=new Oe;function Ca(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function fi(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function hl(){const i=fi("canvas");return i.style.display="block",i}const Rs={};function ci(i){i in Rs||(Rs[i]=!0,console.warn(i))}function Yn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function ar(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}const fl=new Oe().fromArray([.8224621,.0331941,.0170827,.177538,.9668058,.0723974,-1e-7,1e-7,.9105199]),pl=new Oe().fromArray([1.2249401,-.0420569,-.0196376,-.2249404,1.0420571,-.0786361,1e-7,0,1.0982735]);function ml(i){return i.convertSRGBToLinear().applyMatrix3(pl)}function gl(i){return i.applyMatrix3(fl).convertLinearToSRGB()}const _l={[Gt]:i=>i,[qe]:i=>i.convertSRGBToLinear(),[Wi]:ml},vl={[Gt]:i=>i,[qe]:i=>i.convertLinearToSRGB(),[Wi]:gl},Ct={enabled:!0,get legacyMode(){return console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),!this.enabled},set legacyMode(i){console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),this.enabled=!i},get workingColorSpace(){return Gt},set workingColorSpace(i){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(i,e,t){if(this.enabled===!1||e===t||!e||!t)return i;const n=_l[e],r=vl[t];if(n===void 0||r===void 0)throw new Error(`Unsupported color space conversion, "${e}" to "${t}".`);return r(n(i))},fromWorkingColorSpace:function(i,e){return this.convert(i,this.workingColorSpace,e)},toWorkingColorSpace:function(i,e){return this.convert(i,e,this.workingColorSpace)}};let bn;class La{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{bn===void 0&&(bn=fi("canvas")),bn.width=e.width,bn.height=e.height;const n=bn.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=bn}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=fi("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const r=n.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=Yn(s[o]/255)*255;return n.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Yn(t[n]/255)*255):t[n]=Yn(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let xl=0;class Pa{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:xl++}),this.uuid=Zn(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(or(r[o].image)):s.push(or(r[o]))}else s=or(r);n.url=s}return t||(e.images[this.uuid]=n),n}}function or(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?La.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let yl=0;class xt extends Kn{constructor(e=xt.DEFAULT_IMAGE,t=xt.DEFAULT_MAPPING,n=Ut,r=Ut,s=At,o=ui,a=Nt,l=on,u=xt.DEFAULT_ANISOTROPY,c=En){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:yl++}),this.uuid=Zn(),this.name="",this.source=new Pa(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=u,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Ye(0,0),this.repeat=new Ye(1,1),this.center=new Ye(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Oe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof c=="string"?this.colorSpace=c:(ci("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=c===Mn?qe:En),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Ma)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Cr:e.x=e.x-Math.floor(e.x);break;case Ut:e.x=e.x<0?0:1;break;case Lr:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Cr:e.y=e.y-Math.floor(e.y);break;case Ut:e.y=e.y<0?0:1;break;case Lr:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return ci("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===qe?Mn:Ra}set encoding(e){ci("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===Mn?qe:En}}xt.DEFAULT_IMAGE=null;xt.DEFAULT_MAPPING=Ma;xt.DEFAULT_ANISOTROPY=1;class ot{constructor(e=0,t=0,n=0,r=1){ot.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*r+o[12]*s,this.y=o[1]*t+o[5]*n+o[9]*r+o[13]*s,this.z=o[2]*t+o[6]*n+o[10]*r+o[14]*s,this.w=o[3]*t+o[7]*n+o[11]*r+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,s;const l=e.elements,u=l[0],c=l[4],f=l[8],h=l[1],m=l[5],_=l[9],g=l[2],p=l[6],d=l[10];if(Math.abs(c-h)<.01&&Math.abs(f-g)<.01&&Math.abs(_-p)<.01){if(Math.abs(c+h)<.1&&Math.abs(f+g)<.1&&Math.abs(_+p)<.1&&Math.abs(u+m+d-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const M=(u+1)/2,E=(m+1)/2,v=(d+1)/2,A=(c+h)/4,R=(f+g)/4,O=(_+p)/4;return M>E&&M>v?M<.01?(n=0,r=.707106781,s=.707106781):(n=Math.sqrt(M),r=A/n,s=R/n):E>v?E<.01?(n=.707106781,r=0,s=.707106781):(r=Math.sqrt(E),n=A/r,s=O/r):v<.01?(n=.707106781,r=.707106781,s=0):(s=Math.sqrt(v),n=R/s,r=O/s),this.set(n,r,s,t),this}let T=Math.sqrt((p-_)*(p-_)+(f-g)*(f-g)+(h-c)*(h-c));return Math.abs(T)<.001&&(T=1),this.x=(p-_)/T,this.y=(f-g)/T,this.z=(h-c)/T,this.w=Math.acos((u+m+d-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Ml extends Kn{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new ot(0,0,e,t),this.scissorTest=!1,this.viewport=new ot(0,0,e,t);const r={width:e,height:t,depth:1};n.encoding!==void 0&&(ci("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===Mn?qe:En),this.texture=new xt(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.internalFormat=n.internalFormat!==void 0?n.internalFormat:null,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:At,this.depthBuffer=n.depthBuffer!==void 0?n.depthBuffer:!0,this.stencilBuffer=n.stencilBuffer!==void 0?n.stencilBuffer:!1,this.depthTexture=n.depthTexture!==void 0?n.depthTexture:null,this.samples=n.samples!==void 0?n.samples:0}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Pa(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Sn extends Ml{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class Da extends xt{constructor(e=null,t=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=gt,this.minFilter=gt,this.wrapR=Ut,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class El extends xt{constructor(e=null,t=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=gt,this.minFilter=gt,this.wrapR=Ut,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Jn{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,s,o,a){let l=n[r+0],u=n[r+1],c=n[r+2],f=n[r+3];const h=s[o+0],m=s[o+1],_=s[o+2],g=s[o+3];if(a===0){e[t+0]=l,e[t+1]=u,e[t+2]=c,e[t+3]=f;return}if(a===1){e[t+0]=h,e[t+1]=m,e[t+2]=_,e[t+3]=g;return}if(f!==g||l!==h||u!==m||c!==_){let p=1-a;const d=l*h+u*m+c*_+f*g,T=d>=0?1:-1,M=1-d*d;if(M>Number.EPSILON){const v=Math.sqrt(M),A=Math.atan2(v,d*T);p=Math.sin(p*A)/v,a=Math.sin(a*A)/v}const E=a*T;if(l=l*p+h*E,u=u*p+m*E,c=c*p+_*E,f=f*p+g*E,p===1-a){const v=1/Math.sqrt(l*l+u*u+c*c+f*f);l*=v,u*=v,c*=v,f*=v}}e[t]=l,e[t+1]=u,e[t+2]=c,e[t+3]=f}static multiplyQuaternionsFlat(e,t,n,r,s,o){const a=n[r],l=n[r+1],u=n[r+2],c=n[r+3],f=s[o],h=s[o+1],m=s[o+2],_=s[o+3];return e[t]=a*_+c*f+l*m-u*h,e[t+1]=l*_+c*h+u*f-a*m,e[t+2]=u*_+c*m+a*h-l*f,e[t+3]=c*_-a*f-l*h-u*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){const n=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,u=a(n/2),c=a(r/2),f=a(s/2),h=l(n/2),m=l(r/2),_=l(s/2);switch(o){case"XYZ":this._x=h*c*f+u*m*_,this._y=u*m*f-h*c*_,this._z=u*c*_+h*m*f,this._w=u*c*f-h*m*_;break;case"YXZ":this._x=h*c*f+u*m*_,this._y=u*m*f-h*c*_,this._z=u*c*_-h*m*f,this._w=u*c*f+h*m*_;break;case"ZXY":this._x=h*c*f-u*m*_,this._y=u*m*f+h*c*_,this._z=u*c*_+h*m*f,this._w=u*c*f-h*m*_;break;case"ZYX":this._x=h*c*f-u*m*_,this._y=u*m*f+h*c*_,this._z=u*c*_-h*m*f,this._w=u*c*f+h*m*_;break;case"YZX":this._x=h*c*f+u*m*_,this._y=u*m*f+h*c*_,this._z=u*c*_-h*m*f,this._w=u*c*f-h*m*_;break;case"XZY":this._x=h*c*f-u*m*_,this._y=u*m*f-h*c*_,this._z=u*c*_+h*m*f,this._w=u*c*f+h*m*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],r=t[4],s=t[8],o=t[1],a=t[5],l=t[9],u=t[2],c=t[6],f=t[10],h=n+a+f;if(h>0){const m=.5/Math.sqrt(h+1);this._w=.25/m,this._x=(c-l)*m,this._y=(s-u)*m,this._z=(o-r)*m}else if(n>a&&n>f){const m=2*Math.sqrt(1+n-a-f);this._w=(c-l)/m,this._x=.25*m,this._y=(r+o)/m,this._z=(s+u)/m}else if(a>f){const m=2*Math.sqrt(1+a-n-f);this._w=(s-u)/m,this._x=(r+o)/m,this._y=.25*m,this._z=(l+c)/m}else{const m=2*Math.sqrt(1+f-n-a);this._w=(o-r)/m,this._x=(s+u)/m,this._y=(l+c)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(dt(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,r=e._y,s=e._z,o=e._w,a=t._x,l=t._y,u=t._z,c=t._w;return this._x=n*c+o*a+r*u-s*l,this._y=r*c+o*l+s*a-n*u,this._z=s*c+o*u+n*l-r*a,this._w=o*c-n*a-r*l-s*u,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+n*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const m=1-t;return this._w=m*o+t*this._w,this._x=m*n+t*this._x,this._y=m*r+t*this._y,this._z=m*s+t*this._z,this.normalize(),this._onChangeCallback(),this}const u=Math.sqrt(l),c=Math.atan2(u,a),f=Math.sin((1-t)*c)/u,h=Math.sin(t*c)/u;return this._w=o*f+this._w*h,this._x=n*f+this._x*h,this._y=r*f+this._y*h,this._z=s*f+this._z*h,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),r=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(t*Math.cos(r),n*Math.sin(s),n*Math.cos(s),t*Math.sin(r))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class N{constructor(e=0,t=0,n=0){N.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Cs.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Cs.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*r,this.y=s[1]*t+s[4]*n+s[7]*r,this.z=s[2]*t+s[5]*n+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,s=e.elements,o=1/(s[3]*t+s[7]*n+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*r+s[12])*o,this.y=(s[1]*t+s[5]*n+s[9]*r+s[13])*o,this.z=(s[2]*t+s[6]*n+s[10]*r+s[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,u=l*t+o*r-a*n,c=l*n+a*t-s*r,f=l*r+s*n-o*t,h=-s*t-o*n-a*r;return this.x=u*l+h*-s+c*-a-f*-o,this.y=c*l+h*-o+f*-s-u*-a,this.z=f*l+h*-a+u*-o-c*-s,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*r,this.y=s[1]*t+s[5]*n+s[9]*r,this.z=s[2]*t+s[6]*n+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,r=e.y,s=e.z,o=t.x,a=t.y,l=t.z;return this.x=r*l-s*a,this.y=s*o-n*l,this.z=n*a-r*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return lr.copy(this).projectOnVector(e),this.sub(lr)}reflect(e){return this.sub(lr.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(dt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const lr=new N,Cs=new Jn;class pi{constructor(e=new N(1/0,1/0,1/0),t=new N(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Wt.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Wt.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Wt.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){if(e.updateWorldMatrix(!1,!1),e.boundingBox!==void 0)e.boundingBox===null&&e.computeBoundingBox(),wn.copy(e.boundingBox),wn.applyMatrix4(e.matrixWorld),this.union(wn);else{const r=e.geometry;if(r!==void 0)if(t&&r.attributes!==void 0&&r.attributes.position!==void 0){const s=r.attributes.position;for(let o=0,a=s.count;o<a;o++)Wt.fromBufferAttribute(s,o).applyMatrix4(e.matrixWorld),this.expandByPoint(Wt)}else r.boundingBox===null&&r.computeBoundingBox(),wn.copy(r.boundingBox),wn.applyMatrix4(e.matrixWorld),this.union(wn)}const n=e.children;for(let r=0,s=n.length;r<s;r++)this.expandByObject(n[r],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Wt),Wt.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ti),vi.subVectors(this.max,ti),An.subVectors(e.a,ti),Rn.subVectors(e.b,ti),Cn.subVectors(e.c,ti),Jt.subVectors(Rn,An),Qt.subVectors(Cn,Rn),hn.subVectors(An,Cn);let t=[0,-Jt.z,Jt.y,0,-Qt.z,Qt.y,0,-hn.z,hn.y,Jt.z,0,-Jt.x,Qt.z,0,-Qt.x,hn.z,0,-hn.x,-Jt.y,Jt.x,0,-Qt.y,Qt.x,0,-hn.y,hn.x,0];return!cr(t,An,Rn,Cn,vi)||(t=[1,0,0,0,1,0,0,0,1],!cr(t,An,Rn,Cn,vi))?!1:(xi.crossVectors(Jt,Qt),t=[xi.x,xi.y,xi.z],cr(t,An,Rn,Cn,vi))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Wt).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Wt).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Vt[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Vt[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Vt[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Vt[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Vt[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Vt[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Vt[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Vt[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Vt),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Vt=[new N,new N,new N,new N,new N,new N,new N,new N],Wt=new N,wn=new pi,An=new N,Rn=new N,Cn=new N,Jt=new N,Qt=new N,hn=new N,ti=new N,vi=new N,xi=new N,fn=new N;function cr(i,e,t,n,r){for(let s=0,o=i.length-3;s<=o;s+=3){fn.fromArray(i,s);const a=r.x*Math.abs(fn.x)+r.y*Math.abs(fn.y)+r.z*Math.abs(fn.z),l=e.dot(fn),u=t.dot(fn),c=n.dot(fn);if(Math.max(-Math.max(l,u,c),Math.min(l,u,c))>a)return!1}return!0}const Sl=new pi,ni=new N,ur=new N;class Or{constructor(e=new N,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):Sl.setFromPoints(e).getCenter(n);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ni.subVectors(e,this.center);const t=ni.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),r=(n-this.radius)*.5;this.center.addScaledVector(ni,r/n),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(ur.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ni.copy(e.center).add(ur)),this.expandByPoint(ni.copy(e.center).sub(ur))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Yt=new N,dr=new N,yi=new N,en=new N,hr=new N,Mi=new N,fr=new N;class Tl{constructor(e=new N,t=new N(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Yt)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Yt.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Yt.copy(this.origin).addScaledVector(this.direction,t),Yt.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){dr.copy(e).add(t).multiplyScalar(.5),yi.copy(t).sub(e).normalize(),en.copy(this.origin).sub(dr);const s=e.distanceTo(t)*.5,o=-this.direction.dot(yi),a=en.dot(this.direction),l=-en.dot(yi),u=en.lengthSq(),c=Math.abs(1-o*o);let f,h,m,_;if(c>0)if(f=o*l-a,h=o*a-l,_=s*c,f>=0)if(h>=-_)if(h<=_){const g=1/c;f*=g,h*=g,m=f*(f+o*h+2*a)+h*(o*f+h+2*l)+u}else h=s,f=Math.max(0,-(o*h+a)),m=-f*f+h*(h+2*l)+u;else h=-s,f=Math.max(0,-(o*h+a)),m=-f*f+h*(h+2*l)+u;else h<=-_?(f=Math.max(0,-(-o*s+a)),h=f>0?-s:Math.min(Math.max(-s,-l),s),m=-f*f+h*(h+2*l)+u):h<=_?(f=0,h=Math.min(Math.max(-s,-l),s),m=h*(h+2*l)+u):(f=Math.max(0,-(o*s+a)),h=f>0?s:Math.min(Math.max(-s,-l),s),m=-f*f+h*(h+2*l)+u);else h=o>0?-s:s,f=Math.max(0,-(o*h+a)),m=-f*f+h*(h+2*l)+u;return n&&n.copy(this.origin).addScaledVector(this.direction,f),r&&r.copy(dr).addScaledVector(yi,h),m}intersectSphere(e,t){Yt.subVectors(e.center,this.origin);const n=Yt.dot(this.direction),r=Yt.dot(Yt)-n*n,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,s,o,a,l;const u=1/this.direction.x,c=1/this.direction.y,f=1/this.direction.z,h=this.origin;return u>=0?(n=(e.min.x-h.x)*u,r=(e.max.x-h.x)*u):(n=(e.max.x-h.x)*u,r=(e.min.x-h.x)*u),c>=0?(s=(e.min.y-h.y)*c,o=(e.max.y-h.y)*c):(s=(e.max.y-h.y)*c,o=(e.min.y-h.y)*c),n>o||s>r||((s>n||isNaN(n))&&(n=s),(o<r||isNaN(r))&&(r=o),f>=0?(a=(e.min.z-h.z)*f,l=(e.max.z-h.z)*f):(a=(e.max.z-h.z)*f,l=(e.min.z-h.z)*f),n>l||a>r)||((a>n||n!==n)&&(n=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,Yt)!==null}intersectTriangle(e,t,n,r,s){hr.subVectors(t,e),Mi.subVectors(n,e),fr.crossVectors(hr,Mi);let o=this.direction.dot(fr),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;en.subVectors(this.origin,e);const l=a*this.direction.dot(Mi.crossVectors(en,Mi));if(l<0)return null;const u=a*this.direction.dot(hr.cross(en));if(u<0||l+u>o)return null;const c=-a*en.dot(fr);return c<0?null:this.at(c/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class lt{constructor(e,t,n,r,s,o,a,l,u,c,f,h,m,_,g,p){lt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,o,a,l,u,c,f,h,m,_,g,p)}set(e,t,n,r,s,o,a,l,u,c,f,h,m,_,g,p){const d=this.elements;return d[0]=e,d[4]=t,d[8]=n,d[12]=r,d[1]=s,d[5]=o,d[9]=a,d[13]=l,d[2]=u,d[6]=c,d[10]=f,d[14]=h,d[3]=m,d[7]=_,d[11]=g,d[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new lt().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,r=1/Ln.setFromMatrixColumn(e,0).length(),s=1/Ln.setFromMatrixColumn(e,1).length(),o=1/Ln.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,r=e.y,s=e.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(r),u=Math.sin(r),c=Math.cos(s),f=Math.sin(s);if(e.order==="XYZ"){const h=o*c,m=o*f,_=a*c,g=a*f;t[0]=l*c,t[4]=-l*f,t[8]=u,t[1]=m+_*u,t[5]=h-g*u,t[9]=-a*l,t[2]=g-h*u,t[6]=_+m*u,t[10]=o*l}else if(e.order==="YXZ"){const h=l*c,m=l*f,_=u*c,g=u*f;t[0]=h+g*a,t[4]=_*a-m,t[8]=o*u,t[1]=o*f,t[5]=o*c,t[9]=-a,t[2]=m*a-_,t[6]=g+h*a,t[10]=o*l}else if(e.order==="ZXY"){const h=l*c,m=l*f,_=u*c,g=u*f;t[0]=h-g*a,t[4]=-o*f,t[8]=_+m*a,t[1]=m+_*a,t[5]=o*c,t[9]=g-h*a,t[2]=-o*u,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const h=o*c,m=o*f,_=a*c,g=a*f;t[0]=l*c,t[4]=_*u-m,t[8]=h*u+g,t[1]=l*f,t[5]=g*u+h,t[9]=m*u-_,t[2]=-u,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const h=o*l,m=o*u,_=a*l,g=a*u;t[0]=l*c,t[4]=g-h*f,t[8]=_*f+m,t[1]=f,t[5]=o*c,t[9]=-a*c,t[2]=-u*c,t[6]=m*f+_,t[10]=h-g*f}else if(e.order==="XZY"){const h=o*l,m=o*u,_=a*l,g=a*u;t[0]=l*c,t[4]=-f,t[8]=u*c,t[1]=h*f+g,t[5]=o*c,t[9]=m*f-_,t[2]=_*f-m,t[6]=a*c,t[10]=g*f+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(bl,e,wl)}lookAt(e,t,n){const r=this.elements;return Mt.subVectors(e,t),Mt.lengthSq()===0&&(Mt.z=1),Mt.normalize(),tn.crossVectors(n,Mt),tn.lengthSq()===0&&(Math.abs(n.z)===1?Mt.x+=1e-4:Mt.z+=1e-4,Mt.normalize(),tn.crossVectors(n,Mt)),tn.normalize(),Ei.crossVectors(Mt,tn),r[0]=tn.x,r[4]=Ei.x,r[8]=Mt.x,r[1]=tn.y,r[5]=Ei.y,r[9]=Mt.y,r[2]=tn.z,r[6]=Ei.z,r[10]=Mt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,s=this.elements,o=n[0],a=n[4],l=n[8],u=n[12],c=n[1],f=n[5],h=n[9],m=n[13],_=n[2],g=n[6],p=n[10],d=n[14],T=n[3],M=n[7],E=n[11],v=n[15],A=r[0],R=r[4],O=r[8],y=r[12],w=r[1],ne=r[5],$=r[9],z=r[13],V=r[2],U=r[6],te=r[10],J=r[14],Q=r[3],ie=r[7],H=r[11],B=r[15];return s[0]=o*A+a*w+l*V+u*Q,s[4]=o*R+a*ne+l*U+u*ie,s[8]=o*O+a*$+l*te+u*H,s[12]=o*y+a*z+l*J+u*B,s[1]=c*A+f*w+h*V+m*Q,s[5]=c*R+f*ne+h*U+m*ie,s[9]=c*O+f*$+h*te+m*H,s[13]=c*y+f*z+h*J+m*B,s[2]=_*A+g*w+p*V+d*Q,s[6]=_*R+g*ne+p*U+d*ie,s[10]=_*O+g*$+p*te+d*H,s[14]=_*y+g*z+p*J+d*B,s[3]=T*A+M*w+E*V+v*Q,s[7]=T*R+M*ne+E*U+v*ie,s[11]=T*O+M*$+E*te+v*H,s[15]=T*y+M*z+E*J+v*B,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],u=e[13],c=e[2],f=e[6],h=e[10],m=e[14],_=e[3],g=e[7],p=e[11],d=e[15];return _*(+s*l*f-r*u*f-s*a*h+n*u*h+r*a*m-n*l*m)+g*(+t*l*m-t*u*h+s*o*h-r*o*m+r*u*c-s*l*c)+p*(+t*u*f-t*a*m-s*o*f+n*o*m+s*a*c-n*u*c)+d*(-r*a*c-t*l*f+t*a*h+r*o*f-n*o*h+n*l*c)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],u=e[7],c=e[8],f=e[9],h=e[10],m=e[11],_=e[12],g=e[13],p=e[14],d=e[15],T=f*p*u-g*h*u+g*l*m-a*p*m-f*l*d+a*h*d,M=_*h*u-c*p*u-_*l*m+o*p*m+c*l*d-o*h*d,E=c*g*u-_*f*u+_*a*m-o*g*m-c*a*d+o*f*d,v=_*f*l-c*g*l-_*a*h+o*g*h+c*a*p-o*f*p,A=t*T+n*M+r*E+s*v;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const R=1/A;return e[0]=T*R,e[1]=(g*h*s-f*p*s-g*r*m+n*p*m+f*r*d-n*h*d)*R,e[2]=(a*p*s-g*l*s+g*r*u-n*p*u-a*r*d+n*l*d)*R,e[3]=(f*l*s-a*h*s-f*r*u+n*h*u+a*r*m-n*l*m)*R,e[4]=M*R,e[5]=(c*p*s-_*h*s+_*r*m-t*p*m-c*r*d+t*h*d)*R,e[6]=(_*l*s-o*p*s-_*r*u+t*p*u+o*r*d-t*l*d)*R,e[7]=(o*h*s-c*l*s+c*r*u-t*h*u-o*r*m+t*l*m)*R,e[8]=E*R,e[9]=(_*f*s-c*g*s-_*n*m+t*g*m+c*n*d-t*f*d)*R,e[10]=(o*g*s-_*a*s+_*n*u-t*g*u-o*n*d+t*a*d)*R,e[11]=(c*a*s-o*f*s-c*n*u+t*f*u+o*n*m-t*a*m)*R,e[12]=v*R,e[13]=(c*g*r-_*f*r+_*n*h-t*g*h-c*n*p+t*f*p)*R,e[14]=(_*a*r-o*g*r-_*n*l+t*g*l+o*n*p-t*a*p)*R,e[15]=(o*f*r-c*a*r+c*n*l-t*f*l-o*n*h+t*a*h)*R,this}scale(e){const t=this.elements,n=e.x,r=e.y,s=e.z;return t[0]*=n,t[4]*=r,t[8]*=s,t[1]*=n,t[5]*=r,t[9]*=s,t[2]*=n,t[6]*=r,t[10]*=s,t[3]*=n,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),r=Math.sin(t),s=1-n,o=e.x,a=e.y,l=e.z,u=s*o,c=s*a;return this.set(u*o+n,u*a-r*l,u*l+r*a,0,u*a+r*l,c*a+n,c*l-r*o,0,u*l-r*a,c*l+r*o,s*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,s,o){return this.set(1,n,s,0,e,1,o,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){const r=this.elements,s=t._x,o=t._y,a=t._z,l=t._w,u=s+s,c=o+o,f=a+a,h=s*u,m=s*c,_=s*f,g=o*c,p=o*f,d=a*f,T=l*u,M=l*c,E=l*f,v=n.x,A=n.y,R=n.z;return r[0]=(1-(g+d))*v,r[1]=(m+E)*v,r[2]=(_-M)*v,r[3]=0,r[4]=(m-E)*A,r[5]=(1-(h+d))*A,r[6]=(p+T)*A,r[7]=0,r[8]=(_+M)*R,r[9]=(p-T)*R,r[10]=(1-(h+g))*R,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){const r=this.elements;let s=Ln.set(r[0],r[1],r[2]).length();const o=Ln.set(r[4],r[5],r[6]).length(),a=Ln.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],Lt.copy(this);const u=1/s,c=1/o,f=1/a;return Lt.elements[0]*=u,Lt.elements[1]*=u,Lt.elements[2]*=u,Lt.elements[4]*=c,Lt.elements[5]*=c,Lt.elements[6]*=c,Lt.elements[8]*=f,Lt.elements[9]*=f,Lt.elements[10]*=f,t.setFromRotationMatrix(Lt),n.x=s,n.y=o,n.z=a,this}makePerspective(e,t,n,r,s,o,a=Zt){const l=this.elements,u=2*s/(t-e),c=2*s/(n-r),f=(t+e)/(t-e),h=(n+r)/(n-r);let m,_;if(a===Zt)m=-(o+s)/(o-s),_=-2*o*s/(o-s);else if(a===zi)m=-o/(o-s),_=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=u,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=c,l[9]=h,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,r,s,o,a=Zt){const l=this.elements,u=1/(t-e),c=1/(n-r),f=1/(o-s),h=(t+e)*u,m=(n+r)*c;let _,g;if(a===Zt)_=(o+s)*f,g=-2*f;else if(a===zi)_=s*f,g=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*u,l[4]=0,l[8]=0,l[12]=-h,l[1]=0,l[5]=2*c,l[9]=0,l[13]=-m,l[2]=0,l[6]=0,l[10]=g,l[14]=-_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<16;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const Ln=new N,Lt=new lt,bl=new N(0,0,0),wl=new N(1,1,1),tn=new N,Ei=new N,Mt=new N,Ls=new lt,Ps=new Jn;class Yi{constructor(e=0,t=0,n=0,r=Yi.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],u=r[5],c=r[9],f=r[2],h=r[6],m=r[10];switch(t){case"XYZ":this._y=Math.asin(dt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-c,m),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(h,u),this._z=0);break;case"YXZ":this._x=Math.asin(-dt(c,-1,1)),Math.abs(c)<.9999999?(this._y=Math.atan2(a,m),this._z=Math.atan2(l,u)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(dt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-f,m),this._z=Math.atan2(-o,u)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-dt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(h,m),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,u));break;case"YZX":this._z=Math.asin(dt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-c,u),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(a,m));break;case"XZY":this._z=Math.asin(-dt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(h,u),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-c,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Ls.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Ls,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Ps.setFromEuler(this),this.setFromQuaternion(Ps,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Yi.DEFAULT_ORDER="XYZ";class Ia{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Al=0;const Ds=new N,Pn=new Jn,Xt=new lt,Si=new N,ii=new N,Rl=new N,Cl=new Jn,Is=new N(1,0,0),Us=new N(0,1,0),Ns=new N(0,0,1),Ll={type:"added"},Pl={type:"removed"};class St extends Kn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Al++}),this.uuid=Zn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=St.DEFAULT_UP.clone();const e=new N,t=new Yi,n=new Jn,r=new N(1,1,1);function s(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new lt},normalMatrix:{value:new Oe}}),this.matrix=new lt,this.matrixWorld=new lt,this.matrixAutoUpdate=St.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=St.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.layers=new Ia,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Pn.setFromAxisAngle(e,t),this.quaternion.multiply(Pn),this}rotateOnWorldAxis(e,t){return Pn.setFromAxisAngle(e,t),this.quaternion.premultiply(Pn),this}rotateX(e){return this.rotateOnAxis(Is,e)}rotateY(e){return this.rotateOnAxis(Us,e)}rotateZ(e){return this.rotateOnAxis(Ns,e)}translateOnAxis(e,t){return Ds.copy(e).applyQuaternion(this.quaternion),this.position.add(Ds.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Is,e)}translateY(e){return this.translateOnAxis(Us,e)}translateZ(e){return this.translateOnAxis(Ns,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Xt.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Si.copy(e):Si.set(e,t,n);const r=this.parent;this.updateWorldMatrix(!0,!1),ii.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Xt.lookAt(ii,Si,this.up):Xt.lookAt(Si,ii,this.up),this.quaternion.setFromRotationMatrix(Xt),r&&(Xt.extractRotation(r.matrixWorld),Pn.setFromRotationMatrix(Xt),this.quaternion.premultiply(Pn.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(Ll)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Pl)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Xt.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Xt.multiply(e.parent.matrixWorld)),e.applyMatrix4(Xt),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t){let n=[];this[e]===t&&n.push(this);for(let r=0,s=this.children.length;r<s;r++){const o=this.children[r].getObjectsByProperty(e,t);o.length>0&&(n=n.concat(o))}return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ii,e,Rl),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ii,Cl,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,r=t.length;n<r;n++){const s=t[n];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++){const a=r[s];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON()));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let u=0,c=l.length;u<c;u++){const f=l[u];s(e.shapes,f)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,u=this.material.length;l<u;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),u=o(e.textures),c=o(e.images),f=o(e.shapes),h=o(e.skeletons),m=o(e.animations),_=o(e.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),u.length>0&&(n.textures=u),c.length>0&&(n.images=c),f.length>0&&(n.shapes=f),h.length>0&&(n.skeletons=h),m.length>0&&(n.animations=m),_.length>0&&(n.nodes=_)}return n.object=r,n;function o(a){const l=[];for(const u in a){const c=a[u];delete c.metadata,l.push(c)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const r=e.children[n];this.add(r.clone())}return this}}St.DEFAULT_UP=new N(0,1,0);St.DEFAULT_MATRIX_AUTO_UPDATE=!0;St.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Pt=new N,qt=new N,pr=new N,jt=new N,Dn=new N,In=new N,Fs=new N,mr=new N,gr=new N,_r=new N;let Ti=!1;class It{constructor(e=new N,t=new N,n=new N){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),Pt.subVectors(e,t),r.cross(Pt);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,n,r,s){Pt.subVectors(r,t),qt.subVectors(n,t),pr.subVectors(e,t);const o=Pt.dot(Pt),a=Pt.dot(qt),l=Pt.dot(pr),u=qt.dot(qt),c=qt.dot(pr),f=o*u-a*a;if(f===0)return s.set(-2,-1,-1);const h=1/f,m=(u*l-a*c)*h,_=(o*c-a*l)*h;return s.set(1-m-_,_,m)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,jt),jt.x>=0&&jt.y>=0&&jt.x+jt.y<=1}static getUV(e,t,n,r,s,o,a,l){return Ti===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Ti=!0),this.getInterpolation(e,t,n,r,s,o,a,l)}static getInterpolation(e,t,n,r,s,o,a,l){return this.getBarycoord(e,t,n,r,jt),l.setScalar(0),l.addScaledVector(s,jt.x),l.addScaledVector(o,jt.y),l.addScaledVector(a,jt.z),l}static isFrontFacing(e,t,n,r){return Pt.subVectors(n,t),qt.subVectors(e,t),Pt.cross(qt).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Pt.subVectors(this.c,this.b),qt.subVectors(this.a,this.b),Pt.cross(qt).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return It.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return It.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,n,r,s){return Ti===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Ti=!0),It.getInterpolation(e,this.a,this.b,this.c,t,n,r,s)}getInterpolation(e,t,n,r,s){return It.getInterpolation(e,this.a,this.b,this.c,t,n,r,s)}containsPoint(e){return It.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return It.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,r=this.b,s=this.c;let o,a;Dn.subVectors(r,n),In.subVectors(s,n),mr.subVectors(e,n);const l=Dn.dot(mr),u=In.dot(mr);if(l<=0&&u<=0)return t.copy(n);gr.subVectors(e,r);const c=Dn.dot(gr),f=In.dot(gr);if(c>=0&&f<=c)return t.copy(r);const h=l*f-c*u;if(h<=0&&l>=0&&c<=0)return o=l/(l-c),t.copy(n).addScaledVector(Dn,o);_r.subVectors(e,s);const m=Dn.dot(_r),_=In.dot(_r);if(_>=0&&m<=_)return t.copy(s);const g=m*u-l*_;if(g<=0&&u>=0&&_<=0)return a=u/(u-_),t.copy(n).addScaledVector(In,a);const p=c*_-m*f;if(p<=0&&f-c>=0&&m-_>=0)return Fs.subVectors(s,r),a=(f-c)/(f-c+(m-_)),t.copy(r).addScaledVector(Fs,a);const d=1/(p+g+h);return o=g*d,a=h*d,t.copy(n).addScaledVector(Dn,o).addScaledVector(In,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}let Dl=0;class Xi extends Kn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Dl++}),this.uuid=Zn(),this.name="",this.type="Material",this.blending=Wn,this.side=ln,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=va,this.blendDst=xa,this.blendEquation=Gn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=wr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Vo,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=rr,this.stencilZFail=rr,this.stencilZPass=rr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Wn&&(n.blending=this.blending),this.side!==ln&&(n.side=this.side),this.vertexColors&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=this.transparent),n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.stencilWrite=this.stencilWrite,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=this.alphaHash),this.alphaToCoverage===!0&&(n.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=this.premultipliedAlpha),this.forceSinglePass===!0&&(n.forceSinglePass=this.forceSinglePass),this.wireframe===!0&&(n.wireframe=this.wireframe),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=this.flatShading),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(t){const s=r(e.textures),o=r(e.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const r=t.length;n=new Array(r);for(let s=0;s!==r;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const Ua={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Dt={h:0,s:0,l:0},bi={h:0,s:0,l:0};function vr(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class je{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=qe){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ct.toWorkingColorSpace(this,t),this}setRGB(e,t,n,r=Ct.workingColorSpace){return this.r=e,this.g=t,this.b=n,Ct.toWorkingColorSpace(this,r),this}setHSL(e,t,n,r=Ct.workingColorSpace){if(e=Fr(e,1),t=dt(t,0,1),n=dt(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,o=2*n-s;this.r=vr(o,s,e+1/3),this.g=vr(o,s,e),this.b=vr(o,s,e-1/3)}return Ct.toWorkingColorSpace(this,r),this}setStyle(e,t=qe){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=qe){const n=Ua[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Yn(e.r),this.g=Yn(e.g),this.b=Yn(e.b),this}copyLinearToSRGB(e){return this.r=ar(e.r),this.g=ar(e.g),this.b=ar(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=qe){return Ct.fromWorkingColorSpace(ut.copy(this),e),Math.round(dt(ut.r*255,0,255))*65536+Math.round(dt(ut.g*255,0,255))*256+Math.round(dt(ut.b*255,0,255))}getHexString(e=qe){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Ct.workingColorSpace){Ct.fromWorkingColorSpace(ut.copy(this),t);const n=ut.r,r=ut.g,s=ut.b,o=Math.max(n,r,s),a=Math.min(n,r,s);let l,u;const c=(a+o)/2;if(a===o)l=0,u=0;else{const f=o-a;switch(u=c<=.5?f/(o+a):f/(2-o-a),o){case n:l=(r-s)/f+(r<s?6:0);break;case r:l=(s-n)/f+2;break;case s:l=(n-r)/f+4;break}l/=6}return e.h=l,e.s=u,e.l=c,e}getRGB(e,t=Ct.workingColorSpace){return Ct.fromWorkingColorSpace(ut.copy(this),t),e.r=ut.r,e.g=ut.g,e.b=ut.b,e}getStyle(e=qe){Ct.fromWorkingColorSpace(ut.copy(this),e);const t=ut.r,n=ut.g,r=ut.b;return e!==qe?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(e,t,n){return this.getHSL(Dt),Dt.h+=e,Dt.s+=t,Dt.l+=n,this.setHSL(Dt.h,Dt.s,Dt.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Dt),e.getHSL(bi);const n=li(Dt.h,bi.h,t),r=li(Dt.s,bi.s,t),s=li(Dt.l,bi.l,t);return this.setHSL(n,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*r,this.g=s[1]*t+s[4]*n+s[7]*r,this.b=s[2]*t+s[5]*n+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const ut=new je;je.NAMES=Ua;class Gi extends Xi{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new je(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=ya,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const et=new N,wi=new Ye;class zt{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=bs,this.updateRange={offset:0,count:-1},this.gpuType=rn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)wi.fromBufferAttribute(this,t),wi.applyMatrix3(e),this.setXY(t,wi.x,wi.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)et.fromBufferAttribute(this,t),et.applyMatrix3(e),this.setXYZ(t,et.x,et.y,et.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)et.fromBufferAttribute(this,t),et.applyMatrix4(e),this.setXYZ(t,et.x,et.y,et.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)et.fromBufferAttribute(this,t),et.applyNormalMatrix(e),this.setXYZ(t,et.x,et.y,et.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)et.fromBufferAttribute(this,t),et.transformDirection(e),this.setXYZ(t,et.x,et.y,et.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Hn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=pt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Hn(t,this.array)),t}setX(e,t){return this.normalized&&(t=pt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Hn(t,this.array)),t}setY(e,t){return this.normalized&&(t=pt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Hn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=pt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Hn(t,this.array)),t}setW(e,t){return this.normalized&&(t=pt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=pt(t,this.array),n=pt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=pt(t,this.array),n=pt(n,this.array),r=pt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,s){return e*=this.itemSize,this.normalized&&(t=pt(t,this.array),n=pt(n,this.array),r=pt(r,this.array),s=pt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==bs&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}}class Na extends zt{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Fa extends zt{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class kt extends zt{constructor(e,t,n){super(new Float32Array(e),t,n)}}let Il=0;const wt=new lt,xr=new St,Un=new N,Et=new pi,ri=new pi,st=new N;class cn extends Kn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Il++}),this.uuid=Zn(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Ca(e)?Fa:Na)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new Oe().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return wt.makeRotationFromQuaternion(e),this.applyMatrix4(wt),this}rotateX(e){return wt.makeRotationX(e),this.applyMatrix4(wt),this}rotateY(e){return wt.makeRotationY(e),this.applyMatrix4(wt),this}rotateZ(e){return wt.makeRotationZ(e),this.applyMatrix4(wt),this}translate(e,t,n){return wt.makeTranslation(e,t,n),this.applyMatrix4(wt),this}scale(e,t,n){return wt.makeScale(e,t,n),this.applyMatrix4(wt),this}lookAt(e){return xr.lookAt(e),xr.updateMatrix(),this.applyMatrix4(xr.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Un).negate(),this.translate(Un.x,Un.y,Un.z),this}setFromPoints(e){const t=[];for(let n=0,r=e.length;n<r;n++){const s=e[n];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new kt(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new pi);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new N(-1/0,-1/0,-1/0),new N(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,r=t.length;n<r;n++){const s=t[n];Et.setFromBufferAttribute(s),this.morphTargetsRelative?(st.addVectors(this.boundingBox.min,Et.min),this.boundingBox.expandByPoint(st),st.addVectors(this.boundingBox.max,Et.max),this.boundingBox.expandByPoint(st)):(this.boundingBox.expandByPoint(Et.min),this.boundingBox.expandByPoint(Et.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Or);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new N,1/0);return}if(e){const n=this.boundingSphere.center;if(Et.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const a=t[s];ri.setFromBufferAttribute(a),this.morphTargetsRelative?(st.addVectors(Et.min,ri.min),Et.expandByPoint(st),st.addVectors(Et.max,ri.max),Et.expandByPoint(st)):(Et.expandByPoint(ri.min),Et.expandByPoint(ri.max))}Et.getCenter(n);let r=0;for(let s=0,o=e.count;s<o;s++)st.fromBufferAttribute(e,s),r=Math.max(r,n.distanceToSquared(st));if(t)for(let s=0,o=t.length;s<o;s++){const a=t[s],l=this.morphTargetsRelative;for(let u=0,c=a.count;u<c;u++)st.fromBufferAttribute(a,u),l&&(Un.fromBufferAttribute(e,u),st.add(Un)),r=Math.max(r,n.distanceToSquared(st))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.array,r=t.position.array,s=t.normal.array,o=t.uv.array,a=r.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new zt(new Float32Array(4*a),4));const l=this.getAttribute("tangent").array,u=[],c=[];for(let w=0;w<a;w++)u[w]=new N,c[w]=new N;const f=new N,h=new N,m=new N,_=new Ye,g=new Ye,p=new Ye,d=new N,T=new N;function M(w,ne,$){f.fromArray(r,w*3),h.fromArray(r,ne*3),m.fromArray(r,$*3),_.fromArray(o,w*2),g.fromArray(o,ne*2),p.fromArray(o,$*2),h.sub(f),m.sub(f),g.sub(_),p.sub(_);const z=1/(g.x*p.y-p.x*g.y);isFinite(z)&&(d.copy(h).multiplyScalar(p.y).addScaledVector(m,-g.y).multiplyScalar(z),T.copy(m).multiplyScalar(g.x).addScaledVector(h,-p.x).multiplyScalar(z),u[w].add(d),u[ne].add(d),u[$].add(d),c[w].add(T),c[ne].add(T),c[$].add(T))}let E=this.groups;E.length===0&&(E=[{start:0,count:n.length}]);for(let w=0,ne=E.length;w<ne;++w){const $=E[w],z=$.start,V=$.count;for(let U=z,te=z+V;U<te;U+=3)M(n[U+0],n[U+1],n[U+2])}const v=new N,A=new N,R=new N,O=new N;function y(w){R.fromArray(s,w*3),O.copy(R);const ne=u[w];v.copy(ne),v.sub(R.multiplyScalar(R.dot(ne))).normalize(),A.crossVectors(O,ne);const z=A.dot(c[w])<0?-1:1;l[w*4]=v.x,l[w*4+1]=v.y,l[w*4+2]=v.z,l[w*4+3]=z}for(let w=0,ne=E.length;w<ne;++w){const $=E[w],z=$.start,V=$.count;for(let U=z,te=z+V;U<te;U+=3)y(n[U+0]),y(n[U+1]),y(n[U+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new zt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let h=0,m=n.count;h<m;h++)n.setXYZ(h,0,0,0);const r=new N,s=new N,o=new N,a=new N,l=new N,u=new N,c=new N,f=new N;if(e)for(let h=0,m=e.count;h<m;h+=3){const _=e.getX(h+0),g=e.getX(h+1),p=e.getX(h+2);r.fromBufferAttribute(t,_),s.fromBufferAttribute(t,g),o.fromBufferAttribute(t,p),c.subVectors(o,s),f.subVectors(r,s),c.cross(f),a.fromBufferAttribute(n,_),l.fromBufferAttribute(n,g),u.fromBufferAttribute(n,p),a.add(c),l.add(c),u.add(c),n.setXYZ(_,a.x,a.y,a.z),n.setXYZ(g,l.x,l.y,l.z),n.setXYZ(p,u.x,u.y,u.z)}else for(let h=0,m=t.count;h<m;h+=3)r.fromBufferAttribute(t,h+0),s.fromBufferAttribute(t,h+1),o.fromBufferAttribute(t,h+2),c.subVectors(o,s),f.subVectors(r,s),c.cross(f),n.setXYZ(h+0,c.x,c.y,c.z),n.setXYZ(h+1,c.x,c.y,c.z),n.setXYZ(h+2,c.x,c.y,c.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)st.fromBufferAttribute(e,t),st.normalize(),e.setXYZ(t,st.x,st.y,st.z)}toNonIndexed(){function e(a,l){const u=a.array,c=a.itemSize,f=a.normalized,h=new u.constructor(l.length*c);let m=0,_=0;for(let g=0,p=l.length;g<p;g++){a.isInterleavedBufferAttribute?m=l[g]*a.data.stride+a.offset:m=l[g]*c;for(let d=0;d<c;d++)h[_++]=u[m++]}return new zt(h,c,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new cn,n=this.index.array,r=this.attributes;for(const a in r){const l=r[a],u=e(l,n);t.setAttribute(a,u)}const s=this.morphAttributes;for(const a in s){const l=[],u=s[a];for(let c=0,f=u.length;c<f;c++){const h=u[c],m=e(h,n);l.push(m)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const u=o[a];t.addGroup(u.start,u.count,u.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const u in l)l[u]!==void 0&&(e[u]=l[u]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const u=n[l];e.data.attributes[l]=u.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const u=this.morphAttributes[l],c=[];for(let f=0,h=u.length;f<h;f++){const m=u[f];c.push(m.toJSON(e.data))}c.length>0&&(r[l]=c,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const r=e.attributes;for(const u in r){const c=r[u];this.setAttribute(u,c.clone(t))}const s=e.morphAttributes;for(const u in s){const c=[],f=s[u];for(let h=0,m=f.length;h<m;h++)c.push(f[h].clone(t));this.morphAttributes[u]=c}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let u=0,c=o.length;u<c;u++){const f=o[u];this.addGroup(f.start,f.count,f.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Os=new lt,pn=new Tl,Ai=new Or,Bs=new N,Nn=new N,Fn=new N,On=new N,yr=new N,Ri=new N,Ci=new Ye,Li=new Ye,Pi=new Ye,zs=new N,ks=new N,Gs=new N,Di=new N,Ii=new N;class Bt extends St{constructor(e=new cn,t=new Gi){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){const n=this.geometry,r=n.attributes.position,s=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){Ri.set(0,0,0);for(let l=0,u=s.length;l<u;l++){const c=a[l],f=s[l];c!==0&&(yr.fromBufferAttribute(f,e),o?Ri.addScaledVector(yr,c):Ri.addScaledVector(yr.sub(t),c))}t.add(Ri)}return t}raycast(e,t){const n=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Ai.copy(n.boundingSphere),Ai.applyMatrix4(s),pn.copy(e.ray).recast(e.near),!(Ai.containsPoint(pn.origin)===!1&&(pn.intersectSphere(Ai,Bs)===null||pn.origin.distanceToSquared(Bs)>(e.far-e.near)**2))&&(Os.copy(s).invert(),pn.copy(e.ray).applyMatrix4(Os),!(n.boundingBox!==null&&pn.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,pn)))}_computeIntersections(e,t,n){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,u=s.attributes.uv,c=s.attributes.uv1,f=s.attributes.normal,h=s.groups,m=s.drawRange;if(a!==null)if(Array.isArray(o))for(let _=0,g=h.length;_<g;_++){const p=h[_],d=o[p.materialIndex],T=Math.max(p.start,m.start),M=Math.min(a.count,Math.min(p.start+p.count,m.start+m.count));for(let E=T,v=M;E<v;E+=3){const A=a.getX(E),R=a.getX(E+1),O=a.getX(E+2);r=Ui(this,d,e,n,u,c,f,A,R,O),r&&(r.faceIndex=Math.floor(E/3),r.face.materialIndex=p.materialIndex,t.push(r))}}else{const _=Math.max(0,m.start),g=Math.min(a.count,m.start+m.count);for(let p=_,d=g;p<d;p+=3){const T=a.getX(p),M=a.getX(p+1),E=a.getX(p+2);r=Ui(this,o,e,n,u,c,f,T,M,E),r&&(r.faceIndex=Math.floor(p/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let _=0,g=h.length;_<g;_++){const p=h[_],d=o[p.materialIndex],T=Math.max(p.start,m.start),M=Math.min(l.count,Math.min(p.start+p.count,m.start+m.count));for(let E=T,v=M;E<v;E+=3){const A=E,R=E+1,O=E+2;r=Ui(this,d,e,n,u,c,f,A,R,O),r&&(r.faceIndex=Math.floor(E/3),r.face.materialIndex=p.materialIndex,t.push(r))}}else{const _=Math.max(0,m.start),g=Math.min(l.count,m.start+m.count);for(let p=_,d=g;p<d;p+=3){const T=p,M=p+1,E=p+2;r=Ui(this,o,e,n,u,c,f,T,M,E),r&&(r.faceIndex=Math.floor(p/3),t.push(r))}}}}function Ul(i,e,t,n,r,s,o,a){let l;if(e.side===vt?l=n.intersectTriangle(o,s,r,!0,a):l=n.intersectTriangle(r,s,o,e.side===ln,a),l===null)return null;Ii.copy(a),Ii.applyMatrix4(i.matrixWorld);const u=t.ray.origin.distanceTo(Ii);return u<t.near||u>t.far?null:{distance:u,point:Ii.clone(),object:i}}function Ui(i,e,t,n,r,s,o,a,l,u){i.getVertexPosition(a,Nn),i.getVertexPosition(l,Fn),i.getVertexPosition(u,On);const c=Ul(i,e,t,n,Nn,Fn,On,Di);if(c){r&&(Ci.fromBufferAttribute(r,a),Li.fromBufferAttribute(r,l),Pi.fromBufferAttribute(r,u),c.uv=It.getInterpolation(Di,Nn,Fn,On,Ci,Li,Pi,new Ye)),s&&(Ci.fromBufferAttribute(s,a),Li.fromBufferAttribute(s,l),Pi.fromBufferAttribute(s,u),c.uv1=It.getInterpolation(Di,Nn,Fn,On,Ci,Li,Pi,new Ye),c.uv2=c.uv1),o&&(zs.fromBufferAttribute(o,a),ks.fromBufferAttribute(o,l),Gs.fromBufferAttribute(o,u),c.normal=It.getInterpolation(Di,Nn,Fn,On,zs,ks,Gs,new N),c.normal.dot(n.direction)>0&&c.normal.multiplyScalar(-1));const f={a,b:l,c:u,normal:new N,materialIndex:0};It.getNormal(Nn,Fn,On,f.normal),c.face=f}return c}class mi extends cn{constructor(e=1,t=1,n=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],u=[],c=[],f=[];let h=0,m=0;_("z","y","x",-1,-1,n,t,e,o,s,0),_("z","y","x",1,-1,n,t,-e,o,s,1),_("x","z","y",1,1,e,n,t,r,o,2),_("x","z","y",1,-1,e,n,-t,r,o,3),_("x","y","z",1,-1,e,t,n,r,s,4),_("x","y","z",-1,-1,e,t,-n,r,s,5),this.setIndex(l),this.setAttribute("position",new kt(u,3)),this.setAttribute("normal",new kt(c,3)),this.setAttribute("uv",new kt(f,2));function _(g,p,d,T,M,E,v,A,R,O,y){const w=E/R,ne=v/O,$=E/2,z=v/2,V=A/2,U=R+1,te=O+1;let J=0,Q=0;const ie=new N;for(let H=0;H<te;H++){const B=H*ne-z;for(let W=0;W<U;W++){const fe=W*w-$;ie[g]=fe*T,ie[p]=B*M,ie[d]=V,u.push(ie.x,ie.y,ie.z),ie[g]=0,ie[p]=0,ie[d]=A>0?1:-1,c.push(ie.x,ie.y,ie.z),f.push(W/R),f.push(1-H/O),J+=1}}for(let H=0;H<O;H++)for(let B=0;B<R;B++){const W=h+B+U*H,fe=h+B+U*(H+1),pe=h+(B+1)+U*(H+1),me=h+(B+1)+U*H;l.push(W,fe,me),l.push(fe,pe,me),Q+=6}a.addGroup(m,Q,y),m+=Q,h+=J}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new mi(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function $n(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const r=i[t][n];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=r.clone():Array.isArray(r)?e[t][n]=r.slice():e[t][n]=r}}return e}function mt(i){const e={};for(let t=0;t<i.length;t++){const n=$n(i[t]);for(const r in n)e[r]=n[r]}return e}function Nl(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function Oa(i){return i.getRenderTarget()===null?i.outputColorSpace:Gt}const Fl={clone:$n,merge:mt};var Ol=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Bl=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Tn extends Xi{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Ol,this.fragmentShader=Bl,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=$n(e.uniforms),this.uniformsGroups=Nl(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?t.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[r]={type:"m4",value:o.toArray()}:t.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class Ba extends St{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new lt,this.projectionMatrix=new lt,this.projectionMatrixInverse=new lt,this.coordinateSystem=Zt}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(-t[8],-t[9],-t[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class Rt extends Ba{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=hi*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(oi*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return hi*2*Math.atan(Math.tan(oi*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,n,r,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(oi*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,u=o.fullHeight;s+=o.offsetX*r/l,t-=o.offsetY*n/u,r*=o.width/l,n*=o.height/u}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Bn=-90,zn=1;class zl extends St{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null;const r=new Rt(Bn,zn,e,t);r.layers=this.layers,this.add(r);const s=new Rt(Bn,zn,e,t);s.layers=this.layers,this.add(s);const o=new Rt(Bn,zn,e,t);o.layers=this.layers,this.add(o);const a=new Rt(Bn,zn,e,t);a.layers=this.layers,this.add(a);const l=new Rt(Bn,zn,e,t);l.layers=this.layers,this.add(l);const u=new Rt(Bn,zn,e,t);u.layers=this.layers,this.add(u)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,r,s,o,a,l]=t;for(const u of t)this.remove(u);if(e===Zt)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===zi)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const u of t)this.add(u),u.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const n=this.renderTarget;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,s,o,a,l,u]=this.children,c=e.getRenderTarget(),f=e.xr.enabled;e.xr.enabled=!1;const h=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0),e.render(t,r),e.setRenderTarget(n,1),e.render(t,s),e.setRenderTarget(n,2),e.render(t,o),e.setRenderTarget(n,3),e.render(t,a),e.setRenderTarget(n,4),e.render(t,l),n.texture.generateMipmaps=h,e.setRenderTarget(n,5),e.render(t,u),e.setRenderTarget(c),e.xr.enabled=f,n.texture.needsPMREMUpdate=!0}}class za extends xt{constructor(e,t,n,r,s,o,a,l,u,c){e=e!==void 0?e:[],t=t!==void 0?t:Xn,super(e,t,n,r,s,o,a,l,u,c),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class kl extends Sn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];t.encoding!==void 0&&(ci("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===Mn?qe:En),this.texture=new za(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:At}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new mi(5,5,5),s=new Tn({name:"CubemapFromEquirect",uniforms:$n(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:vt,blending:sn});s.uniforms.tEquirect.value=t;const o=new Bt(r,s),a=t.minFilter;return t.minFilter===ui&&(t.minFilter=At),new zl(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,n,r){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,r);e.setRenderTarget(s)}}const Mr=new N,Gl=new N,Hl=new Oe;class gn{constructor(e=new N(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const r=Mr.subVectors(n,t).cross(Gl.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(Mr),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(n,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||Hl.getNormalMatrix(e),r=this.coplanarPoint(Mr).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const mn=new Or,Ni=new N;class ka{constructor(e=new gn,t=new gn,n=new gn,r=new gn,s=new gn,o=new gn){this.planes=[e,t,n,r,s,o]}set(e,t,n,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Zt){const n=this.planes,r=e.elements,s=r[0],o=r[1],a=r[2],l=r[3],u=r[4],c=r[5],f=r[6],h=r[7],m=r[8],_=r[9],g=r[10],p=r[11],d=r[12],T=r[13],M=r[14],E=r[15];if(n[0].setComponents(l-s,h-u,p-m,E-d).normalize(),n[1].setComponents(l+s,h+u,p+m,E+d).normalize(),n[2].setComponents(l+o,h+c,p+_,E+T).normalize(),n[3].setComponents(l-o,h-c,p-_,E-T).normalize(),n[4].setComponents(l-a,h-f,p-g,E-M).normalize(),t===Zt)n[5].setComponents(l+a,h+f,p+g,E+M).normalize();else if(t===zi)n[5].setComponents(a,f,g,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),mn.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),mn.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(mn)}intersectsSprite(e){return mn.center.set(0,0,0),mn.radius=.7071067811865476,mn.applyMatrix4(e.matrixWorld),this.intersectsSphere(mn)}intersectsSphere(e){const t=this.planes,n=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const r=t[n];if(Ni.x=r.normal.x>0?e.max.x:e.min.x,Ni.y=r.normal.y>0?e.max.y:e.min.y,Ni.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Ni)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Ga(){let i=null,e=!1,t=null,n=null;function r(s,o){t(s,o),n=i.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(r),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){i=s}}}function Vl(i,e){const t=e.isWebGL2,n=new WeakMap;function r(u,c){const f=u.array,h=u.usage,m=i.createBuffer();i.bindBuffer(c,m),i.bufferData(c,f,h),u.onUploadCallback();let _;if(f instanceof Float32Array)_=i.FLOAT;else if(f instanceof Uint16Array)if(u.isFloat16BufferAttribute)if(t)_=i.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else _=i.UNSIGNED_SHORT;else if(f instanceof Int16Array)_=i.SHORT;else if(f instanceof Uint32Array)_=i.UNSIGNED_INT;else if(f instanceof Int32Array)_=i.INT;else if(f instanceof Int8Array)_=i.BYTE;else if(f instanceof Uint8Array)_=i.UNSIGNED_BYTE;else if(f instanceof Uint8ClampedArray)_=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+f);return{buffer:m,type:_,bytesPerElement:f.BYTES_PER_ELEMENT,version:u.version}}function s(u,c,f){const h=c.array,m=c.updateRange;i.bindBuffer(f,u),m.count===-1?i.bufferSubData(f,0,h):(t?i.bufferSubData(f,m.offset*h.BYTES_PER_ELEMENT,h,m.offset,m.count):i.bufferSubData(f,m.offset*h.BYTES_PER_ELEMENT,h.subarray(m.offset,m.offset+m.count)),m.count=-1),c.onUploadCallback()}function o(u){return u.isInterleavedBufferAttribute&&(u=u.data),n.get(u)}function a(u){u.isInterleavedBufferAttribute&&(u=u.data);const c=n.get(u);c&&(i.deleteBuffer(c.buffer),n.delete(u))}function l(u,c){if(u.isGLBufferAttribute){const h=n.get(u);(!h||h.version<u.version)&&n.set(u,{buffer:u.buffer,type:u.type,bytesPerElement:u.elementSize,version:u.version});return}u.isInterleavedBufferAttribute&&(u=u.data);const f=n.get(u);f===void 0?n.set(u,r(u,c)):f.version<u.version&&(s(f.buffer,u,c),f.version=u.version)}return{get:o,remove:a,update:l}}class Br extends cn{constructor(e=1,t=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};const s=e/2,o=t/2,a=Math.floor(n),l=Math.floor(r),u=a+1,c=l+1,f=e/a,h=t/l,m=[],_=[],g=[],p=[];for(let d=0;d<c;d++){const T=d*h-o;for(let M=0;M<u;M++){const E=M*f-s;_.push(E,-T,0),g.push(0,0,1),p.push(M/a),p.push(1-d/l)}}for(let d=0;d<l;d++)for(let T=0;T<a;T++){const M=T+u*d,E=T+u*(d+1),v=T+1+u*(d+1),A=T+1+u*d;m.push(M,E,A),m.push(E,v,A)}this.setIndex(m),this.setAttribute("position",new kt(_,3)),this.setAttribute("normal",new kt(g,3)),this.setAttribute("uv",new kt(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Br(e.width,e.height,e.widthSegments,e.heightSegments)}}var Wl=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Yl=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Xl=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,ql=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,jl=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,$l=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Kl=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Zl=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Jl=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Ql=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,ec=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,tc=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,nc=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = dFdx( surf_pos.xyz );
		vec3 vSigmaY = dFdy( surf_pos.xyz );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,ic=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,rc=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,sc=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,ac=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,oc=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,lc=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,cc=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,uc=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,dc=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal;
#endif
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,hc=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_v0 0.339
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_v1 0.276
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_v4 0.046
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_v5 0.016
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_v6 0.0038
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,fc=`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,pc=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,mc=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,gc=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,_c=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,vc="gl_FragColor = linearToOutputTexel( gl_FragColor );",xc=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,yc=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Mc=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Ec=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Sc=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Tc=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,bc=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,wc=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Ac=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Rc=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Cc=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Lc=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,Pc=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Dc=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Ic=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Uc=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometry.position;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometry.position;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Nc=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Fc=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Oc=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Bc=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,zc=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,kc=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	anisotropyV /= material.anisotropy;
	material.anisotropy = saturate( material.anisotropy );
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x - tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x + tbn[ 0 ] * anisotropyV.y;
#endif`,Gc=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecular = vec3( 0.0 );
vec3 sheenSpecular = vec3( 0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecular += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometry.clearcoatNormal, geometry.viewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * material.sheenColor * IBLSheenBRDF( geometry.normal, geometry.viewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Hc=`
GeometricContext geometry;
geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
#ifdef USE_CLEARCOAT
	geometry.clearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometry.viewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometry, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	irradiance += getLightProbeIrradiance( lightProbe, geometry.normal );
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Vc=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometry.normal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometry.viewDir, geometry.normal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometry.viewDir, geometry.normal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Wc=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,Yc=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Xc=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,qc=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,jc=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,$c=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Kc=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Zc=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Jc=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Qc=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,eu=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,tu=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,nu=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,iu=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,ru=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,su=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 geometryNormal = normal;`,au=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,ou=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,lu=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,cu=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,uu=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,du=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,hu=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,fu=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,pu=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,mu=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,gu=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,_u=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,vu=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,xu=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,yu=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Mu=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Eu=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Su=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,Tu=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,bu=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,wu=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Au=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Ru=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	uniform int boneTextureSize;
	mat4 getBoneMatrix( const in float i ) {
		float j = i * 4.0;
		float x = mod( j, float( boneTextureSize ) );
		float y = floor( j / float( boneTextureSize ) );
		float dx = 1.0 / float( boneTextureSize );
		float dy = 1.0 / float( boneTextureSize );
		y = dy * ( y + 0.5 );
		vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
		vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
		vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
		vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
		mat4 bone = mat4( v1, v2, v3, v4 );
		return bone;
	}
#endif`,Cu=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Lu=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Pu=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Du=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Iu=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Uu=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Nu=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Fu=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Ou=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Bu=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,zu=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,ku=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Gu=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Hu=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Vu=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Wu=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Yu=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Xu=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,qu=`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,ju=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,$u=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Ku=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Zu=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Ju=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Qu=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,ed=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,td=`#include <common>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,nd=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,id=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,rd=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,sd=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,ad=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,od=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,ld=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,cd=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,ud=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,dd=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,hd=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,fd=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,pd=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,md=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,gd=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,_d=`#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,vd=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,xd=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,yd=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Ne={alphahash_fragment:Wl,alphahash_pars_fragment:Yl,alphamap_fragment:Xl,alphamap_pars_fragment:ql,alphatest_fragment:jl,alphatest_pars_fragment:$l,aomap_fragment:Kl,aomap_pars_fragment:Zl,begin_vertex:Jl,beginnormal_vertex:Ql,bsdfs:ec,iridescence_fragment:tc,bumpmap_pars_fragment:nc,clipping_planes_fragment:ic,clipping_planes_pars_fragment:rc,clipping_planes_pars_vertex:sc,clipping_planes_vertex:ac,color_fragment:oc,color_pars_fragment:lc,color_pars_vertex:cc,color_vertex:uc,common:dc,cube_uv_reflection_fragment:hc,defaultnormal_vertex:fc,displacementmap_pars_vertex:pc,displacementmap_vertex:mc,emissivemap_fragment:gc,emissivemap_pars_fragment:_c,colorspace_fragment:vc,colorspace_pars_fragment:xc,envmap_fragment:yc,envmap_common_pars_fragment:Mc,envmap_pars_fragment:Ec,envmap_pars_vertex:Sc,envmap_physical_pars_fragment:Nc,envmap_vertex:Tc,fog_vertex:bc,fog_pars_vertex:wc,fog_fragment:Ac,fog_pars_fragment:Rc,gradientmap_pars_fragment:Cc,lightmap_fragment:Lc,lightmap_pars_fragment:Pc,lights_lambert_fragment:Dc,lights_lambert_pars_fragment:Ic,lights_pars_begin:Uc,lights_toon_fragment:Fc,lights_toon_pars_fragment:Oc,lights_phong_fragment:Bc,lights_phong_pars_fragment:zc,lights_physical_fragment:kc,lights_physical_pars_fragment:Gc,lights_fragment_begin:Hc,lights_fragment_maps:Vc,lights_fragment_end:Wc,logdepthbuf_fragment:Yc,logdepthbuf_pars_fragment:Xc,logdepthbuf_pars_vertex:qc,logdepthbuf_vertex:jc,map_fragment:$c,map_pars_fragment:Kc,map_particle_fragment:Zc,map_particle_pars_fragment:Jc,metalnessmap_fragment:Qc,metalnessmap_pars_fragment:eu,morphcolor_vertex:tu,morphnormal_vertex:nu,morphtarget_pars_vertex:iu,morphtarget_vertex:ru,normal_fragment_begin:su,normal_fragment_maps:au,normal_pars_fragment:ou,normal_pars_vertex:lu,normal_vertex:cu,normalmap_pars_fragment:uu,clearcoat_normal_fragment_begin:du,clearcoat_normal_fragment_maps:hu,clearcoat_pars_fragment:fu,iridescence_pars_fragment:pu,opaque_fragment:mu,packing:gu,premultiplied_alpha_fragment:_u,project_vertex:vu,dithering_fragment:xu,dithering_pars_fragment:yu,roughnessmap_fragment:Mu,roughnessmap_pars_fragment:Eu,shadowmap_pars_fragment:Su,shadowmap_pars_vertex:Tu,shadowmap_vertex:bu,shadowmask_pars_fragment:wu,skinbase_vertex:Au,skinning_pars_vertex:Ru,skinning_vertex:Cu,skinnormal_vertex:Lu,specularmap_fragment:Pu,specularmap_pars_fragment:Du,tonemapping_fragment:Iu,tonemapping_pars_fragment:Uu,transmission_fragment:Nu,transmission_pars_fragment:Fu,uv_pars_fragment:Ou,uv_pars_vertex:Bu,uv_vertex:zu,worldpos_vertex:ku,background_vert:Gu,background_frag:Hu,backgroundCube_vert:Vu,backgroundCube_frag:Wu,cube_vert:Yu,cube_frag:Xu,depth_vert:qu,depth_frag:ju,distanceRGBA_vert:$u,distanceRGBA_frag:Ku,equirect_vert:Zu,equirect_frag:Ju,linedashed_vert:Qu,linedashed_frag:ed,meshbasic_vert:td,meshbasic_frag:nd,meshlambert_vert:id,meshlambert_frag:rd,meshmatcap_vert:sd,meshmatcap_frag:ad,meshnormal_vert:od,meshnormal_frag:ld,meshphong_vert:cd,meshphong_frag:ud,meshphysical_vert:dd,meshphysical_frag:hd,meshtoon_vert:fd,meshtoon_frag:pd,points_vert:md,points_frag:gd,shadow_vert:_d,shadow_frag:vd,sprite_vert:xd,sprite_frag:yd},he={common:{diffuse:{value:new je(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Oe},alphaMap:{value:null},alphaMapTransform:{value:new Oe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Oe}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Oe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Oe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Oe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Oe},normalScale:{value:new Ye(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Oe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Oe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Oe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Oe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new je(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new je(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Oe},alphaTest:{value:0},uvTransform:{value:new Oe}},sprite:{diffuse:{value:new je(16777215)},opacity:{value:1},center:{value:new Ye(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Oe},alphaMap:{value:null},alphaMapTransform:{value:new Oe},alphaTest:{value:0}}},Ot={basic:{uniforms:mt([he.common,he.specularmap,he.envmap,he.aomap,he.lightmap,he.fog]),vertexShader:Ne.meshbasic_vert,fragmentShader:Ne.meshbasic_frag},lambert:{uniforms:mt([he.common,he.specularmap,he.envmap,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.fog,he.lights,{emissive:{value:new je(0)}}]),vertexShader:Ne.meshlambert_vert,fragmentShader:Ne.meshlambert_frag},phong:{uniforms:mt([he.common,he.specularmap,he.envmap,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.fog,he.lights,{emissive:{value:new je(0)},specular:{value:new je(1118481)},shininess:{value:30}}]),vertexShader:Ne.meshphong_vert,fragmentShader:Ne.meshphong_frag},standard:{uniforms:mt([he.common,he.envmap,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.roughnessmap,he.metalnessmap,he.fog,he.lights,{emissive:{value:new je(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ne.meshphysical_vert,fragmentShader:Ne.meshphysical_frag},toon:{uniforms:mt([he.common,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.gradientmap,he.fog,he.lights,{emissive:{value:new je(0)}}]),vertexShader:Ne.meshtoon_vert,fragmentShader:Ne.meshtoon_frag},matcap:{uniforms:mt([he.common,he.bumpmap,he.normalmap,he.displacementmap,he.fog,{matcap:{value:null}}]),vertexShader:Ne.meshmatcap_vert,fragmentShader:Ne.meshmatcap_frag},points:{uniforms:mt([he.points,he.fog]),vertexShader:Ne.points_vert,fragmentShader:Ne.points_frag},dashed:{uniforms:mt([he.common,he.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ne.linedashed_vert,fragmentShader:Ne.linedashed_frag},depth:{uniforms:mt([he.common,he.displacementmap]),vertexShader:Ne.depth_vert,fragmentShader:Ne.depth_frag},normal:{uniforms:mt([he.common,he.bumpmap,he.normalmap,he.displacementmap,{opacity:{value:1}}]),vertexShader:Ne.meshnormal_vert,fragmentShader:Ne.meshnormal_frag},sprite:{uniforms:mt([he.sprite,he.fog]),vertexShader:Ne.sprite_vert,fragmentShader:Ne.sprite_frag},background:{uniforms:{uvTransform:{value:new Oe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ne.background_vert,fragmentShader:Ne.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Ne.backgroundCube_vert,fragmentShader:Ne.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ne.cube_vert,fragmentShader:Ne.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ne.equirect_vert,fragmentShader:Ne.equirect_frag},distanceRGBA:{uniforms:mt([he.common,he.displacementmap,{referencePosition:{value:new N},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ne.distanceRGBA_vert,fragmentShader:Ne.distanceRGBA_frag},shadow:{uniforms:mt([he.lights,he.fog,{color:{value:new je(0)},opacity:{value:1}}]),vertexShader:Ne.shadow_vert,fragmentShader:Ne.shadow_frag}};Ot.physical={uniforms:mt([Ot.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Oe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Oe},clearcoatNormalScale:{value:new Ye(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Oe},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Oe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Oe},sheen:{value:0},sheenColor:{value:new je(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Oe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Oe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Oe},transmissionSamplerSize:{value:new Ye},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Oe},attenuationDistance:{value:0},attenuationColor:{value:new je(0)},specularColor:{value:new je(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Oe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Oe},anisotropyVector:{value:new Ye},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Oe}}]),vertexShader:Ne.meshphysical_vert,fragmentShader:Ne.meshphysical_frag};const Fi={r:0,b:0,g:0};function Md(i,e,t,n,r,s,o){const a=new je(0);let l=s===!0?0:1,u,c,f=null,h=0,m=null;function _(p,d){let T=!1,M=d.isScene===!0?d.background:null;M&&M.isTexture&&(M=(d.backgroundBlurriness>0?t:e).get(M)),M===null?g(a,l):M&&M.isColor&&(g(M,1),T=!0);const E=i.xr.getEnvironmentBlendMode();E==="additive"?n.buffers.color.setClear(0,0,0,1,o):E==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||T)&&i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil),M&&(M.isCubeTexture||M.mapping===Vi)?(c===void 0&&(c=new Bt(new mi(1,1,1),new Tn({name:"BackgroundCubeMaterial",uniforms:$n(Ot.backgroundCube.uniforms),vertexShader:Ot.backgroundCube.vertexShader,fragmentShader:Ot.backgroundCube.fragmentShader,side:vt,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(v,A,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(c)),c.material.uniforms.envMap.value=M,c.material.uniforms.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,c.material.uniforms.backgroundBlurriness.value=d.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=d.backgroundIntensity,c.material.toneMapped=M.colorSpace!==qe,(f!==M||h!==M.version||m!==i.toneMapping)&&(c.material.needsUpdate=!0,f=M,h=M.version,m=i.toneMapping),c.layers.enableAll(),p.unshift(c,c.geometry,c.material,0,0,null)):M&&M.isTexture&&(u===void 0&&(u=new Bt(new Br(2,2),new Tn({name:"BackgroundMaterial",uniforms:$n(Ot.background.uniforms),vertexShader:Ot.background.vertexShader,fragmentShader:Ot.background.fragmentShader,side:ln,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),Object.defineProperty(u.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(u)),u.material.uniforms.t2D.value=M,u.material.uniforms.backgroundIntensity.value=d.backgroundIntensity,u.material.toneMapped=M.colorSpace!==qe,M.matrixAutoUpdate===!0&&M.updateMatrix(),u.material.uniforms.uvTransform.value.copy(M.matrix),(f!==M||h!==M.version||m!==i.toneMapping)&&(u.material.needsUpdate=!0,f=M,h=M.version,m=i.toneMapping),u.layers.enableAll(),p.unshift(u,u.geometry,u.material,0,0,null))}function g(p,d){p.getRGB(Fi,Oa(i)),n.buffers.color.setClear(Fi.r,Fi.g,Fi.b,d,o)}return{getClearColor:function(){return a},setClearColor:function(p,d=1){a.set(p),l=d,g(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(p){l=p,g(a,l)},render:_}}function Ed(i,e,t,n){const r=i.getParameter(i.MAX_VERTEX_ATTRIBS),s=n.isWebGL2?null:e.get("OES_vertex_array_object"),o=n.isWebGL2||s!==null,a={},l=p(null);let u=l,c=!1;function f(V,U,te,J,Q){let ie=!1;if(o){const H=g(J,te,U);u!==H&&(u=H,m(u.object)),ie=d(V,J,te,Q),ie&&T(V,J,te,Q)}else{const H=U.wireframe===!0;(u.geometry!==J.id||u.program!==te.id||u.wireframe!==H)&&(u.geometry=J.id,u.program=te.id,u.wireframe=H,ie=!0)}Q!==null&&t.update(Q,i.ELEMENT_ARRAY_BUFFER),(ie||c)&&(c=!1,O(V,U,te,J),Q!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(Q).buffer))}function h(){return n.isWebGL2?i.createVertexArray():s.createVertexArrayOES()}function m(V){return n.isWebGL2?i.bindVertexArray(V):s.bindVertexArrayOES(V)}function _(V){return n.isWebGL2?i.deleteVertexArray(V):s.deleteVertexArrayOES(V)}function g(V,U,te){const J=te.wireframe===!0;let Q=a[V.id];Q===void 0&&(Q={},a[V.id]=Q);let ie=Q[U.id];ie===void 0&&(ie={},Q[U.id]=ie);let H=ie[J];return H===void 0&&(H=p(h()),ie[J]=H),H}function p(V){const U=[],te=[],J=[];for(let Q=0;Q<r;Q++)U[Q]=0,te[Q]=0,J[Q]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:U,enabledAttributes:te,attributeDivisors:J,object:V,attributes:{},index:null}}function d(V,U,te,J){const Q=u.attributes,ie=U.attributes;let H=0;const B=te.getAttributes();for(const W in B)if(B[W].location>=0){const pe=Q[W];let me=ie[W];if(me===void 0&&(W==="instanceMatrix"&&V.instanceMatrix&&(me=V.instanceMatrix),W==="instanceColor"&&V.instanceColor&&(me=V.instanceColor)),pe===void 0||pe.attribute!==me||me&&pe.data!==me.data)return!0;H++}return u.attributesNum!==H||u.index!==J}function T(V,U,te,J){const Q={},ie=U.attributes;let H=0;const B=te.getAttributes();for(const W in B)if(B[W].location>=0){let pe=ie[W];pe===void 0&&(W==="instanceMatrix"&&V.instanceMatrix&&(pe=V.instanceMatrix),W==="instanceColor"&&V.instanceColor&&(pe=V.instanceColor));const me={};me.attribute=pe,pe&&pe.data&&(me.data=pe.data),Q[W]=me,H++}u.attributes=Q,u.attributesNum=H,u.index=J}function M(){const V=u.newAttributes;for(let U=0,te=V.length;U<te;U++)V[U]=0}function E(V){v(V,0)}function v(V,U){const te=u.newAttributes,J=u.enabledAttributes,Q=u.attributeDivisors;te[V]=1,J[V]===0&&(i.enableVertexAttribArray(V),J[V]=1),Q[V]!==U&&((n.isWebGL2?i:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](V,U),Q[V]=U)}function A(){const V=u.newAttributes,U=u.enabledAttributes;for(let te=0,J=U.length;te<J;te++)U[te]!==V[te]&&(i.disableVertexAttribArray(te),U[te]=0)}function R(V,U,te,J,Q,ie,H){H===!0?i.vertexAttribIPointer(V,U,te,Q,ie):i.vertexAttribPointer(V,U,te,J,Q,ie)}function O(V,U,te,J){if(n.isWebGL2===!1&&(V.isInstancedMesh||J.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;M();const Q=J.attributes,ie=te.getAttributes(),H=U.defaultAttributeValues;for(const B in ie){const W=ie[B];if(W.location>=0){let fe=Q[B];if(fe===void 0&&(B==="instanceMatrix"&&V.instanceMatrix&&(fe=V.instanceMatrix),B==="instanceColor"&&V.instanceColor&&(fe=V.instanceColor)),fe!==void 0){const pe=fe.normalized,me=fe.itemSize,Me=t.get(fe);if(Me===void 0)continue;const K=Me.buffer,Y=Me.type,ee=Me.bytesPerElement,be=n.isWebGL2===!0&&(Y===i.INT||Y===i.UNSIGNED_INT||fe.gpuType===Ea);if(fe.isInterleavedBufferAttribute){const xe=fe.data,P=xe.stride,Fe=fe.offset;if(xe.isInstancedInterleavedBuffer){for(let Se=0;Se<W.locationSize;Se++)v(W.location+Se,xe.meshPerAttribute);V.isInstancedMesh!==!0&&J._maxInstanceCount===void 0&&(J._maxInstanceCount=xe.meshPerAttribute*xe.count)}else for(let Se=0;Se<W.locationSize;Se++)E(W.location+Se);i.bindBuffer(i.ARRAY_BUFFER,K);for(let Se=0;Se<W.locationSize;Se++)R(W.location+Se,me/W.locationSize,Y,pe,P*ee,(Fe+me/W.locationSize*Se)*ee,be)}else{if(fe.isInstancedBufferAttribute){for(let xe=0;xe<W.locationSize;xe++)v(W.location+xe,fe.meshPerAttribute);V.isInstancedMesh!==!0&&J._maxInstanceCount===void 0&&(J._maxInstanceCount=fe.meshPerAttribute*fe.count)}else for(let xe=0;xe<W.locationSize;xe++)E(W.location+xe);i.bindBuffer(i.ARRAY_BUFFER,K);for(let xe=0;xe<W.locationSize;xe++)R(W.location+xe,me/W.locationSize,Y,pe,me*ee,me/W.locationSize*xe*ee,be)}}else if(H!==void 0){const pe=H[B];if(pe!==void 0)switch(pe.length){case 2:i.vertexAttrib2fv(W.location,pe);break;case 3:i.vertexAttrib3fv(W.location,pe);break;case 4:i.vertexAttrib4fv(W.location,pe);break;default:i.vertexAttrib1fv(W.location,pe)}}}}A()}function y(){$();for(const V in a){const U=a[V];for(const te in U){const J=U[te];for(const Q in J)_(J[Q].object),delete J[Q];delete U[te]}delete a[V]}}function w(V){if(a[V.id]===void 0)return;const U=a[V.id];for(const te in U){const J=U[te];for(const Q in J)_(J[Q].object),delete J[Q];delete U[te]}delete a[V.id]}function ne(V){for(const U in a){const te=a[U];if(te[V.id]===void 0)continue;const J=te[V.id];for(const Q in J)_(J[Q].object),delete J[Q];delete te[V.id]}}function $(){z(),c=!0,u!==l&&(u=l,m(u.object))}function z(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:f,reset:$,resetDefaultState:z,dispose:y,releaseStatesOfGeometry:w,releaseStatesOfProgram:ne,initAttributes:M,enableAttribute:E,disableUnusedAttributes:A}}function Sd(i,e,t,n){const r=n.isWebGL2;let s;function o(u){s=u}function a(u,c){i.drawArrays(s,u,c),t.update(c,s,1)}function l(u,c,f){if(f===0)return;let h,m;if(r)h=i,m="drawArraysInstanced";else if(h=e.get("ANGLE_instanced_arrays"),m="drawArraysInstancedANGLE",h===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}h[m](s,u,c,f),t.update(c,s,f)}this.setMode=o,this.render=a,this.renderInstances=l}function Td(i,e,t){let n;function r(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){const R=e.get("EXT_texture_filter_anisotropic");n=i.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function s(R){if(R==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&i.constructor.name==="WebGL2RenderingContext";let a=t.precision!==void 0?t.precision:"highp";const l=s(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);const u=o||e.has("WEBGL_draw_buffers"),c=t.logarithmicDepthBuffer===!0,f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),h=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),m=i.getParameter(i.MAX_TEXTURE_SIZE),_=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),g=i.getParameter(i.MAX_VERTEX_ATTRIBS),p=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),d=i.getParameter(i.MAX_VARYING_VECTORS),T=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),M=h>0,E=o||e.has("OES_texture_float"),v=M&&E,A=o?i.getParameter(i.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:u,getMaxAnisotropy:r,getMaxPrecision:s,precision:a,logarithmicDepthBuffer:c,maxTextures:f,maxVertexTextures:h,maxTextureSize:m,maxCubemapSize:_,maxAttributes:g,maxVertexUniforms:p,maxVaryings:d,maxFragmentUniforms:T,vertexTextures:M,floatFragmentTextures:E,floatVertexTextures:v,maxSamples:A}}function bd(i){const e=this;let t=null,n=0,r=!1,s=!1;const o=new gn,a=new Oe,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,h){const m=f.length!==0||h||n!==0||r;return r=h,n=f.length,m},this.beginShadows=function(){s=!0,c(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,h){t=c(f,h,0)},this.setState=function(f,h,m){const _=f.clippingPlanes,g=f.clipIntersection,p=f.clipShadows,d=i.get(f);if(!r||_===null||_.length===0||s&&!p)s?c(null):u();else{const T=s?0:n,M=T*4;let E=d.clippingState||null;l.value=E,E=c(_,h,M,m);for(let v=0;v!==M;++v)E[v]=t[v];d.clippingState=E,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=T}};function u(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function c(f,h,m,_){const g=f!==null?f.length:0;let p=null;if(g!==0){if(p=l.value,_!==!0||p===null){const d=m+g*4,T=h.matrixWorldInverse;a.getNormalMatrix(T),(p===null||p.length<d)&&(p=new Float32Array(d));for(let M=0,E=m;M!==g;++M,E+=4)o.copy(f[M]).applyMatrix4(T,a),o.normal.toArray(p,E),p[E+3]=o.constant}l.value=p,l.needsUpdate=!0}return e.numPlanes=g,e.numIntersection=0,p}}function wd(i){let e=new WeakMap;function t(o,a){return a===Ar?o.mapping=Xn:a===Rr&&(o.mapping=qn),o}function n(o){if(o&&o.isTexture&&o.isRenderTargetTexture===!1){const a=o.mapping;if(a===Ar||a===Rr)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const u=new kl(l.height/2);return u.fromEquirectangularTexture(i,o),e.set(o,u),o.addEventListener("dispose",r),t(u.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}class Ad extends Ba{constructor(e=-1,t=1,n=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=n-e,o=n+e,a=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const u=(this.right-this.left)/this.view.fullWidth/this.zoom,c=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=u*this.view.offsetX,o=s+u*this.view.width,a-=c*this.view.offsetY,l=a-c*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Vn=4,Hs=[.125,.215,.35,.446,.526,.582],vn=20,Er=new Ad,Vs=new je;let Sr=null;const _n=(1+Math.sqrt(5))/2,kn=1/_n,Ws=[new N(1,1,1),new N(-1,1,1),new N(1,1,-1),new N(-1,1,-1),new N(0,_n,kn),new N(0,_n,-kn),new N(kn,0,_n),new N(-kn,0,_n),new N(_n,kn,0),new N(-_n,kn,0)];class Ys{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,r=100){Sr=this._renderer.getRenderTarget(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,n,r,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=js(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=qs(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Sr),e.scissorTest=!1,Oi(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Xn||e.mapping===qn?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Sr=this._renderer.getRenderTarget();const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:At,minFilter:At,generateMipmaps:!1,type:di,format:Nt,colorSpace:Gt,depthBuffer:!1},r=Xs(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Xs(e,t,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Rd(s)),this._blurMaterial=Cd(s,e,t)}return r}_compileMaterial(e){const t=new Bt(this._lodPlanes[0],e);this._renderer.compile(t,Er)}_sceneToCubeUV(e,t,n,r){const a=new Rt(90,1,t,n),l=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],c=this._renderer,f=c.autoClear,h=c.toneMapping;c.getClearColor(Vs),c.toneMapping=an,c.autoClear=!1;const m=new Gi({name:"PMREM.Background",side:vt,depthWrite:!1,depthTest:!1}),_=new Bt(new mi,m);let g=!1;const p=e.background;p?p.isColor&&(m.color.copy(p),e.background=null,g=!0):(m.color.copy(Vs),g=!0);for(let d=0;d<6;d++){const T=d%3;T===0?(a.up.set(0,l[d],0),a.lookAt(u[d],0,0)):T===1?(a.up.set(0,0,l[d]),a.lookAt(0,u[d],0)):(a.up.set(0,l[d],0),a.lookAt(0,0,u[d]));const M=this._cubeSize;Oi(r,T*M,d>2?M:0,M,M),c.setRenderTarget(r),g&&c.render(_,a),c.render(e,a)}_.geometry.dispose(),_.material.dispose(),c.toneMapping=h,c.autoClear=f,e.background=p}_textureToCubeUV(e,t){const n=this._renderer,r=e.mapping===Xn||e.mapping===qn;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=js()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=qs());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new Bt(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;Oi(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(o,Er)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){const s=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=Ws[(r-1)%Ws.length];this._blur(e,r-1,r,s,o)}t.autoClear=n}_blur(e,t,n,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,r,"latitudinal",s),this._halfBlur(o,e,n,n,r,"longitudinal",s)}_halfBlur(e,t,n,r,s,o,a){const l=this._renderer,u=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const c=3,f=new Bt(this._lodPlanes[r],u),h=u.uniforms,m=this._sizeLods[n]-1,_=isFinite(s)?Math.PI/(2*m):2*Math.PI/(2*vn-1),g=s/_,p=isFinite(s)?1+Math.floor(c*g):vn;p>vn&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${vn}`);const d=[];let T=0;for(let R=0;R<vn;++R){const O=R/g,y=Math.exp(-O*O/2);d.push(y),R===0?T+=y:R<p&&(T+=2*y)}for(let R=0;R<d.length;R++)d[R]=d[R]/T;h.envMap.value=e.texture,h.samples.value=p,h.weights.value=d,h.latitudinal.value=o==="latitudinal",a&&(h.poleAxis.value=a);const{_lodMax:M}=this;h.dTheta.value=_,h.mipInt.value=M-n;const E=this._sizeLods[r],v=3*E*(r>M-Vn?r-M+Vn:0),A=4*(this._cubeSize-E);Oi(t,v,A,3*E,2*E),l.setRenderTarget(t),l.render(f,Er)}}function Rd(i){const e=[],t=[],n=[];let r=i;const s=i-Vn+1+Hs.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);t.push(a);let l=1/a;o>i-Vn?l=Hs[o-i+Vn-1]:o===0&&(l=0),n.push(l);const u=1/(a-2),c=-u,f=1+u,h=[c,c,f,c,f,f,c,c,f,f,c,f],m=6,_=6,g=3,p=2,d=1,T=new Float32Array(g*_*m),M=new Float32Array(p*_*m),E=new Float32Array(d*_*m);for(let A=0;A<m;A++){const R=A%3*2/3-1,O=A>2?0:-1,y=[R,O,0,R+2/3,O,0,R+2/3,O+1,0,R,O,0,R+2/3,O+1,0,R,O+1,0];T.set(y,g*_*A),M.set(h,p*_*A);const w=[A,A,A,A,A,A];E.set(w,d*_*A)}const v=new cn;v.setAttribute("position",new zt(T,g)),v.setAttribute("uv",new zt(M,p)),v.setAttribute("faceIndex",new zt(E,d)),e.push(v),r>Vn&&r--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Xs(i,e,t){const n=new Sn(i,e,t);return n.texture.mapping=Vi,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Oi(i,e,t,n,r){i.viewport.set(e,t,n,r),i.scissor.set(e,t,n,r)}function Cd(i,e,t){const n=new Float32Array(vn),r=new N(0,1,0);return new Tn({name:"SphericalGaussianBlur",defines:{n:vn,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:zr(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:sn,depthTest:!1,depthWrite:!1})}function qs(){return new Tn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:zr(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:sn,depthTest:!1,depthWrite:!1})}function js(){return new Tn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:zr(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:sn,depthTest:!1,depthWrite:!1})}function zr(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Ld(i){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){const l=a.mapping,u=l===Ar||l===Rr,c=l===Xn||l===qn;if(u||c)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let f=e.get(a);return t===null&&(t=new Ys(i)),f=u?t.fromEquirectangular(a,f):t.fromCubemap(a,f),e.set(a,f),f.texture}else{if(e.has(a))return e.get(a).texture;{const f=a.image;if(u&&f&&f.height>0||c&&f&&r(f)){t===null&&(t=new Ys(i));const h=u?t.fromEquirectangular(a):t.fromCubemap(a);return e.set(a,h),a.addEventListener("dispose",s),h.texture}else return null}}}return a}function r(a){let l=0;const u=6;for(let c=0;c<u;c++)a[c]!==void 0&&l++;return l===u}function s(a){const l=a.target;l.removeEventListener("dispose",s);const u=e.get(l);u!==void 0&&(e.delete(l),u.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function Pd(i){const e={};function t(n){if(e[n]!==void 0)return e[n];let r;switch(n){case"WEBGL_depth_texture":r=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=i.getExtension(n)}return e[n]=r,r}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){const r=t(n);return r===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),r}}}function Dd(i,e,t,n){const r={},s=new WeakMap;function o(f){const h=f.target;h.index!==null&&e.remove(h.index);for(const _ in h.attributes)e.remove(h.attributes[_]);for(const _ in h.morphAttributes){const g=h.morphAttributes[_];for(let p=0,d=g.length;p<d;p++)e.remove(g[p])}h.removeEventListener("dispose",o),delete r[h.id];const m=s.get(h);m&&(e.remove(m),s.delete(h)),n.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function a(f,h){return r[h.id]===!0||(h.addEventListener("dispose",o),r[h.id]=!0,t.memory.geometries++),h}function l(f){const h=f.attributes;for(const _ in h)e.update(h[_],i.ARRAY_BUFFER);const m=f.morphAttributes;for(const _ in m){const g=m[_];for(let p=0,d=g.length;p<d;p++)e.update(g[p],i.ARRAY_BUFFER)}}function u(f){const h=[],m=f.index,_=f.attributes.position;let g=0;if(m!==null){const T=m.array;g=m.version;for(let M=0,E=T.length;M<E;M+=3){const v=T[M+0],A=T[M+1],R=T[M+2];h.push(v,A,A,R,R,v)}}else if(_!==void 0){const T=_.array;g=_.version;for(let M=0,E=T.length/3-1;M<E;M+=3){const v=M+0,A=M+1,R=M+2;h.push(v,A,A,R,R,v)}}else return;const p=new(Ca(h)?Fa:Na)(h,1);p.version=g;const d=s.get(f);d&&e.remove(d),s.set(f,p)}function c(f){const h=s.get(f);if(h){const m=f.index;m!==null&&h.version<m.version&&u(f)}else u(f);return s.get(f)}return{get:a,update:l,getWireframeAttribute:c}}function Id(i,e,t,n){const r=n.isWebGL2;let s;function o(h){s=h}let a,l;function u(h){a=h.type,l=h.bytesPerElement}function c(h,m){i.drawElements(s,m,a,h*l),t.update(m,s,1)}function f(h,m,_){if(_===0)return;let g,p;if(r)g=i,p="drawElementsInstanced";else if(g=e.get("ANGLE_instanced_arrays"),p="drawElementsInstancedANGLE",g===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}g[p](s,m,a,h*l,_),t.update(m,s,_)}this.setMode=o,this.setIndex=u,this.render=c,this.renderInstances=f}function Ud(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,a){switch(t.calls++,o){case i.TRIANGLES:t.triangles+=a*(s/3);break;case i.LINES:t.lines+=a*(s/2);break;case i.LINE_STRIP:t.lines+=a*(s-1);break;case i.LINE_LOOP:t.lines+=a*s;break;case i.POINTS:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:n}}function Nd(i,e){return i[0]-e[0]}function Fd(i,e){return Math.abs(e[1])-Math.abs(i[1])}function Od(i,e,t){const n={},r=new Float32Array(8),s=new WeakMap,o=new ot,a=[];for(let u=0;u<8;u++)a[u]=[u,0];function l(u,c,f){const h=u.morphTargetInfluences;if(e.isWebGL2===!0){const _=c.morphAttributes.position||c.morphAttributes.normal||c.morphAttributes.color,g=_!==void 0?_.length:0;let p=s.get(c);if(p===void 0||p.count!==g){let U=function(){z.dispose(),s.delete(c),c.removeEventListener("dispose",U)};var m=U;p!==void 0&&p.texture.dispose();const M=c.morphAttributes.position!==void 0,E=c.morphAttributes.normal!==void 0,v=c.morphAttributes.color!==void 0,A=c.morphAttributes.position||[],R=c.morphAttributes.normal||[],O=c.morphAttributes.color||[];let y=0;M===!0&&(y=1),E===!0&&(y=2),v===!0&&(y=3);let w=c.attributes.position.count*y,ne=1;w>e.maxTextureSize&&(ne=Math.ceil(w/e.maxTextureSize),w=e.maxTextureSize);const $=new Float32Array(w*ne*4*g),z=new Da($,w,ne,g);z.type=rn,z.needsUpdate=!0;const V=y*4;for(let te=0;te<g;te++){const J=A[te],Q=R[te],ie=O[te],H=w*ne*4*te;for(let B=0;B<J.count;B++){const W=B*V;M===!0&&(o.fromBufferAttribute(J,B),$[H+W+0]=o.x,$[H+W+1]=o.y,$[H+W+2]=o.z,$[H+W+3]=0),E===!0&&(o.fromBufferAttribute(Q,B),$[H+W+4]=o.x,$[H+W+5]=o.y,$[H+W+6]=o.z,$[H+W+7]=0),v===!0&&(o.fromBufferAttribute(ie,B),$[H+W+8]=o.x,$[H+W+9]=o.y,$[H+W+10]=o.z,$[H+W+11]=ie.itemSize===4?o.w:1)}}p={count:g,texture:z,size:new Ye(w,ne)},s.set(c,p),c.addEventListener("dispose",U)}let d=0;for(let M=0;M<h.length;M++)d+=h[M];const T=c.morphTargetsRelative?1:1-d;f.getUniforms().setValue(i,"morphTargetBaseInfluence",T),f.getUniforms().setValue(i,"morphTargetInfluences",h),f.getUniforms().setValue(i,"morphTargetsTexture",p.texture,t),f.getUniforms().setValue(i,"morphTargetsTextureSize",p.size)}else{const _=h===void 0?0:h.length;let g=n[c.id];if(g===void 0||g.length!==_){g=[];for(let E=0;E<_;E++)g[E]=[E,0];n[c.id]=g}for(let E=0;E<_;E++){const v=g[E];v[0]=E,v[1]=h[E]}g.sort(Fd);for(let E=0;E<8;E++)E<_&&g[E][1]?(a[E][0]=g[E][0],a[E][1]=g[E][1]):(a[E][0]=Number.MAX_SAFE_INTEGER,a[E][1]=0);a.sort(Nd);const p=c.morphAttributes.position,d=c.morphAttributes.normal;let T=0;for(let E=0;E<8;E++){const v=a[E],A=v[0],R=v[1];A!==Number.MAX_SAFE_INTEGER&&R?(p&&c.getAttribute("morphTarget"+E)!==p[A]&&c.setAttribute("morphTarget"+E,p[A]),d&&c.getAttribute("morphNormal"+E)!==d[A]&&c.setAttribute("morphNormal"+E,d[A]),r[E]=R,T+=R):(p&&c.hasAttribute("morphTarget"+E)===!0&&c.deleteAttribute("morphTarget"+E),d&&c.hasAttribute("morphNormal"+E)===!0&&c.deleteAttribute("morphNormal"+E),r[E]=0)}const M=c.morphTargetsRelative?1:1-T;f.getUniforms().setValue(i,"morphTargetBaseInfluence",M),f.getUniforms().setValue(i,"morphTargetInfluences",r)}}return{update:l}}function Bd(i,e,t,n){let r=new WeakMap;function s(l){const u=n.render.frame,c=l.geometry,f=e.get(l,c);if(r.get(f)!==u&&(e.update(f),r.set(f,u)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==u&&(t.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,i.ARRAY_BUFFER),r.set(l,u))),l.isSkinnedMesh){const h=l.skeleton;r.get(h)!==u&&(h.update(),r.set(h,u))}return f}function o(){r=new WeakMap}function a(l){const u=l.target;u.removeEventListener("dispose",a),t.remove(u.instanceMatrix),u.instanceColor!==null&&t.remove(u.instanceColor)}return{update:s,dispose:o}}const Ha=new xt,Va=new Da,Wa=new El,Ya=new za,$s=[],Ks=[],Zs=new Float32Array(16),Js=new Float32Array(9),Qs=new Float32Array(4);function Qn(i,e,t){const n=i[0];if(n<=0||n>0)return i;const r=e*t;let s=$s[r];if(s===void 0&&(s=new Float32Array(r),$s[r]=s),e!==0){n.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,i[o].toArray(s,a)}return s}function nt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function it(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function qi(i,e){let t=Ks[e];t===void 0&&(t=new Int32Array(e),Ks[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function zd(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function kd(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(nt(t,e))return;i.uniform2fv(this.addr,e),it(t,e)}}function Gd(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(nt(t,e))return;i.uniform3fv(this.addr,e),it(t,e)}}function Hd(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(nt(t,e))return;i.uniform4fv(this.addr,e),it(t,e)}}function Vd(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(nt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),it(t,e)}else{if(nt(t,n))return;Qs.set(n),i.uniformMatrix2fv(this.addr,!1,Qs),it(t,n)}}function Wd(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(nt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),it(t,e)}else{if(nt(t,n))return;Js.set(n),i.uniformMatrix3fv(this.addr,!1,Js),it(t,n)}}function Yd(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(nt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),it(t,e)}else{if(nt(t,n))return;Zs.set(n),i.uniformMatrix4fv(this.addr,!1,Zs),it(t,n)}}function Xd(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function qd(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(nt(t,e))return;i.uniform2iv(this.addr,e),it(t,e)}}function jd(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(nt(t,e))return;i.uniform3iv(this.addr,e),it(t,e)}}function $d(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(nt(t,e))return;i.uniform4iv(this.addr,e),it(t,e)}}function Kd(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function Zd(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(nt(t,e))return;i.uniform2uiv(this.addr,e),it(t,e)}}function Jd(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(nt(t,e))return;i.uniform3uiv(this.addr,e),it(t,e)}}function Qd(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(nt(t,e))return;i.uniform4uiv(this.addr,e),it(t,e)}}function eh(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture2D(e||Ha,r)}function th(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture3D(e||Wa,r)}function nh(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTextureCube(e||Ya,r)}function ih(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture2DArray(e||Va,r)}function rh(i){switch(i){case 5126:return zd;case 35664:return kd;case 35665:return Gd;case 35666:return Hd;case 35674:return Vd;case 35675:return Wd;case 35676:return Yd;case 5124:case 35670:return Xd;case 35667:case 35671:return qd;case 35668:case 35672:return jd;case 35669:case 35673:return $d;case 5125:return Kd;case 36294:return Zd;case 36295:return Jd;case 36296:return Qd;case 35678:case 36198:case 36298:case 36306:case 35682:return eh;case 35679:case 36299:case 36307:return th;case 35680:case 36300:case 36308:case 36293:return nh;case 36289:case 36303:case 36311:case 36292:return ih}}function sh(i,e){i.uniform1fv(this.addr,e)}function ah(i,e){const t=Qn(e,this.size,2);i.uniform2fv(this.addr,t)}function oh(i,e){const t=Qn(e,this.size,3);i.uniform3fv(this.addr,t)}function lh(i,e){const t=Qn(e,this.size,4);i.uniform4fv(this.addr,t)}function ch(i,e){const t=Qn(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function uh(i,e){const t=Qn(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function dh(i,e){const t=Qn(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function hh(i,e){i.uniform1iv(this.addr,e)}function fh(i,e){i.uniform2iv(this.addr,e)}function ph(i,e){i.uniform3iv(this.addr,e)}function mh(i,e){i.uniform4iv(this.addr,e)}function gh(i,e){i.uniform1uiv(this.addr,e)}function _h(i,e){i.uniform2uiv(this.addr,e)}function vh(i,e){i.uniform3uiv(this.addr,e)}function xh(i,e){i.uniform4uiv(this.addr,e)}function yh(i,e,t){const n=this.cache,r=e.length,s=qi(t,r);nt(n,s)||(i.uniform1iv(this.addr,s),it(n,s));for(let o=0;o!==r;++o)t.setTexture2D(e[o]||Ha,s[o])}function Mh(i,e,t){const n=this.cache,r=e.length,s=qi(t,r);nt(n,s)||(i.uniform1iv(this.addr,s),it(n,s));for(let o=0;o!==r;++o)t.setTexture3D(e[o]||Wa,s[o])}function Eh(i,e,t){const n=this.cache,r=e.length,s=qi(t,r);nt(n,s)||(i.uniform1iv(this.addr,s),it(n,s));for(let o=0;o!==r;++o)t.setTextureCube(e[o]||Ya,s[o])}function Sh(i,e,t){const n=this.cache,r=e.length,s=qi(t,r);nt(n,s)||(i.uniform1iv(this.addr,s),it(n,s));for(let o=0;o!==r;++o)t.setTexture2DArray(e[o]||Va,s[o])}function Th(i){switch(i){case 5126:return sh;case 35664:return ah;case 35665:return oh;case 35666:return lh;case 35674:return ch;case 35675:return uh;case 35676:return dh;case 5124:case 35670:return hh;case 35667:case 35671:return fh;case 35668:case 35672:return ph;case 35669:case 35673:return mh;case 5125:return gh;case 36294:return _h;case 36295:return vh;case 36296:return xh;case 35678:case 36198:case 36298:case 36306:case 35682:return yh;case 35679:case 36299:case 36307:return Mh;case 35680:case 36300:case 36308:case 36293:return Eh;case 36289:case 36303:case 36311:case 36292:return Sh}}class bh{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.setValue=rh(t.type)}}class wh{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.size=t.size,this.setValue=Th(t.type)}}class Ah{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,t[a.id],n)}}}const Tr=/(\w+)(\])?(\[|\.)?/g;function ea(i,e){i.seq.push(e),i.map[e.id]=e}function Rh(i,e,t){const n=i.name,r=n.length;for(Tr.lastIndex=0;;){const s=Tr.exec(n),o=Tr.lastIndex;let a=s[1];const l=s[2]==="]",u=s[3];if(l&&(a=a|0),u===void 0||u==="["&&o+2===r){ea(t,u===void 0?new bh(a,i,e):new wh(a,i,e));break}else{let f=t.map[a];f===void 0&&(f=new Ah(a),ea(t,f)),t=f}}}class Bi{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){const s=e.getActiveUniform(t,r),o=e.getUniformLocation(t,s.name);Rh(s,o,this)}}setValue(e,t,n,r){const s=this.map[t];s!==void 0&&s.setValue(e,n,r)}setOptional(e,t,n){const r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let s=0,o=t.length;s!==o;++s){const a=t[s],l=n[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,t){const n=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in t&&n.push(o)}return n}}function ta(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}let Ch=0;function Lh(i,e){const t=i.split(`
`),n=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=r;o<s;o++){const a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}function Ph(i){switch(i){case Gt:return["Linear","( value )"];case qe:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",i),["Linear","( value )"]}}function na(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),r=i.getShaderInfoLog(e).trim();if(n&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+Lh(i.getShaderSource(e),o)}else return r}function Dh(i,e){const t=Ph(e);return"vec4 "+i+"( vec4 value ) { return LinearTo"+t[0]+t[1]+"; }"}function Ih(i,e){let t;switch(e){case To:t="Linear";break;case bo:t="Reinhard";break;case wo:t="OptimizedCineon";break;case Ao:t="ACESFilmic";break;case Ro:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function Uh(i){return[i.extensionDerivatives||i.envMapCubeUVHeight||i.bumpMap||i.normalMapTangentSpace||i.clearcoatNormalMap||i.flatShading||i.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(i.extensionFragDepth||i.logarithmicDepthBuffer)&&i.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",i.extensionDrawBuffers&&i.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(i.extensionShaderTextureLOD||i.envMap||i.transmission)&&i.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(si).join(`
`)}function Nh(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Fh(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){const s=i.getActiveAttrib(e,r),o=s.name;let a=1;s.type===i.FLOAT_MAT2&&(a=2),s.type===i.FLOAT_MAT3&&(a=3),s.type===i.FLOAT_MAT4&&(a=4),t[o]={type:s.type,location:i.getAttribLocation(e,o),locationSize:a}}return t}function si(i){return i!==""}function ia(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function ra(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Oh=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ir(i){return i.replace(Oh,zh)}const Bh=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function zh(i,e){let t=Ne[e];if(t===void 0){const n=Bh.get(e);if(n!==void 0)t=Ne[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Ir(t)}const kh=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function sa(i){return i.replace(kh,Gh)}function Gh(i,e,t,n){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function aa(i){let e="precision "+i.precision+` float;
precision `+i.precision+" int;";return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Hh(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===_a?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===to?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===$t&&(e="SHADOWMAP_TYPE_VSM"),e}function Vh(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Xn:case qn:e="ENVMAP_TYPE_CUBE";break;case Vi:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Wh(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case qn:e="ENVMAP_MODE_REFRACTION";break}return e}function Yh(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case ya:e="ENVMAP_BLENDING_MULTIPLY";break;case Eo:e="ENVMAP_BLENDING_MIX";break;case So:e="ENVMAP_BLENDING_ADD";break}return e}function Xh(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function qh(i,e,t,n){const r=i.getContext(),s=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=Hh(t),u=Vh(t),c=Wh(t),f=Yh(t),h=Xh(t),m=t.isWebGL2?"":Uh(t),_=Nh(s),g=r.createProgram();let p,d,T=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(si).join(`
`),p.length>0&&(p+=`
`),d=[m,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(si).join(`
`),d.length>0&&(d+=`
`)):(p=[aa(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(si).join(`
`),d=[m,aa(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.envMap?"#define "+c:"",t.envMap?"#define "+f:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==an?"#define TONE_MAPPING":"",t.toneMapping!==an?Ne.tonemapping_pars_fragment:"",t.toneMapping!==an?Ih("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ne.colorspace_pars_fragment,Dh("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(si).join(`
`)),o=Ir(o),o=ia(o,t),o=ra(o,t),a=Ir(a),a=ia(a,t),a=ra(a,t),o=sa(o),a=sa(a),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(T=`#version 300 es
`,p=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,d=["#define varying in",t.glslVersion===ws?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===ws?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);const M=T+p+o,E=T+d+a,v=ta(r,r.VERTEX_SHADER,M),A=ta(r,r.FRAGMENT_SHADER,E);if(r.attachShader(g,v),r.attachShader(g,A),t.index0AttributeName!==void 0?r.bindAttribLocation(g,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(g,0,"position"),r.linkProgram(g),i.debug.checkShaderErrors){const y=r.getProgramInfoLog(g).trim(),w=r.getShaderInfoLog(v).trim(),ne=r.getShaderInfoLog(A).trim();let $=!0,z=!0;if(r.getProgramParameter(g,r.LINK_STATUS)===!1)if($=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,g,v,A);else{const V=na(r,v,"vertex"),U=na(r,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(g,r.VALIDATE_STATUS)+`

Program Info Log: `+y+`
`+V+`
`+U)}else y!==""?console.warn("THREE.WebGLProgram: Program Info Log:",y):(w===""||ne==="")&&(z=!1);z&&(this.diagnostics={runnable:$,programLog:y,vertexShader:{log:w,prefix:p},fragmentShader:{log:ne,prefix:d}})}r.deleteShader(v),r.deleteShader(A);let R;this.getUniforms=function(){return R===void 0&&(R=new Bi(r,g)),R};let O;return this.getAttributes=function(){return O===void 0&&(O=Fh(r,g)),O},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(g),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Ch++,this.cacheKey=e,this.usedTimes=1,this.program=g,this.vertexShader=v,this.fragmentShader=A,this}let jh=0;class $h{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new Kh(e),t.set(e,n)),n}}class Kh{constructor(e){this.id=jh++,this.code=e,this.usedTimes=0}}function Zh(i,e,t,n,r,s,o){const a=new Ia,l=new $h,u=[],c=r.isWebGL2,f=r.logarithmicDepthBuffer,h=r.vertexTextures;let m=r.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(y){return y===0?"uv":`uv${y}`}function p(y,w,ne,$,z){const V=$.fog,U=z.geometry,te=y.isMeshStandardMaterial?$.environment:null,J=(y.isMeshStandardMaterial?t:e).get(y.envMap||te),Q=J&&J.mapping===Vi?J.image.height:null,ie=_[y.type];y.precision!==null&&(m=r.getMaxPrecision(y.precision),m!==y.precision&&console.warn("THREE.WebGLProgram.getParameters:",y.precision,"not supported, using",m,"instead."));const H=U.morphAttributes.position||U.morphAttributes.normal||U.morphAttributes.color,B=H!==void 0?H.length:0;let W=0;U.morphAttributes.position!==void 0&&(W=1),U.morphAttributes.normal!==void 0&&(W=2),U.morphAttributes.color!==void 0&&(W=3);let fe,pe,me,Me;if(ie){const He=Ot[ie];fe=He.vertexShader,pe=He.fragmentShader}else fe=y.vertexShader,pe=y.fragmentShader,l.update(y),me=l.getVertexShaderID(y),Me=l.getFragmentShaderID(y);const K=i.getRenderTarget(),Y=z.isInstancedMesh===!0,ee=!!y.map,be=!!y.matcap,xe=!!J,P=!!y.aoMap,Fe=!!y.lightMap,Se=!!y.bumpMap,Ce=!!y.normalMap,Ae=!!y.displacementMap,Ge=!!y.emissiveMap,Be=!!y.metalnessMap,Ie=!!y.roughnessMap,Ve=y.anisotropy>0,$e=y.clearcoat>0,rt=y.iridescence>0,b=y.sheen>0,x=y.transmission>0,k=Ve&&!!y.anisotropyMap,ae=$e&&!!y.clearcoatMap,re=$e&&!!y.clearcoatNormalMap,oe=$e&&!!y.clearcoatRoughnessMap,Ee=rt&&!!y.iridescenceMap,le=rt&&!!y.iridescenceThicknessMap,G=b&&!!y.sheenColorMap,ye=b&&!!y.sheenRoughnessMap,L=!!y.specularMap,Z=!!y.specularColorMap,X=!!y.specularIntensityMap,ce=x&&!!y.transmissionMap,ge=x&&!!y.thicknessMap,Te=!!y.gradientMap,C=!!y.alphaMap,se=y.alphaTest>0,D=!!y.alphaHash,ue=!!y.extensions,de=!!U.attributes.uv1,Re=!!U.attributes.uv2,We=!!U.attributes.uv3;let Xe=an;return y.toneMapped&&(K===null||K.isXRRenderTarget===!0)&&(Xe=i.toneMapping),{isWebGL2:c,shaderID:ie,shaderType:y.type,shaderName:y.name,vertexShader:fe,fragmentShader:pe,defines:y.defines,customVertexShaderID:me,customFragmentShaderID:Me,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:m,instancing:Y,instancingColor:Y&&z.instanceColor!==null,supportsVertexTextures:h,outputColorSpace:K===null?i.outputColorSpace:K.isXRRenderTarget===!0?K.texture.colorSpace:Gt,map:ee,matcap:be,envMap:xe,envMapMode:xe&&J.mapping,envMapCubeUVHeight:Q,aoMap:P,lightMap:Fe,bumpMap:Se,normalMap:Ce,displacementMap:h&&Ae,emissiveMap:Ge,normalMapObjectSpace:Ce&&y.normalMapType===Ho,normalMapTangentSpace:Ce&&y.normalMapType===Go,metalnessMap:Be,roughnessMap:Ie,anisotropy:Ve,anisotropyMap:k,clearcoat:$e,clearcoatMap:ae,clearcoatNormalMap:re,clearcoatRoughnessMap:oe,iridescence:rt,iridescenceMap:Ee,iridescenceThicknessMap:le,sheen:b,sheenColorMap:G,sheenRoughnessMap:ye,specularMap:L,specularColorMap:Z,specularIntensityMap:X,transmission:x,transmissionMap:ce,thicknessMap:ge,gradientMap:Te,opaque:y.transparent===!1&&y.blending===Wn,alphaMap:C,alphaTest:se,alphaHash:D,combine:y.combine,mapUv:ee&&g(y.map.channel),aoMapUv:P&&g(y.aoMap.channel),lightMapUv:Fe&&g(y.lightMap.channel),bumpMapUv:Se&&g(y.bumpMap.channel),normalMapUv:Ce&&g(y.normalMap.channel),displacementMapUv:Ae&&g(y.displacementMap.channel),emissiveMapUv:Ge&&g(y.emissiveMap.channel),metalnessMapUv:Be&&g(y.metalnessMap.channel),roughnessMapUv:Ie&&g(y.roughnessMap.channel),anisotropyMapUv:k&&g(y.anisotropyMap.channel),clearcoatMapUv:ae&&g(y.clearcoatMap.channel),clearcoatNormalMapUv:re&&g(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:oe&&g(y.clearcoatRoughnessMap.channel),iridescenceMapUv:Ee&&g(y.iridescenceMap.channel),iridescenceThicknessMapUv:le&&g(y.iridescenceThicknessMap.channel),sheenColorMapUv:G&&g(y.sheenColorMap.channel),sheenRoughnessMapUv:ye&&g(y.sheenRoughnessMap.channel),specularMapUv:L&&g(y.specularMap.channel),specularColorMapUv:Z&&g(y.specularColorMap.channel),specularIntensityMapUv:X&&g(y.specularIntensityMap.channel),transmissionMapUv:ce&&g(y.transmissionMap.channel),thicknessMapUv:ge&&g(y.thicknessMap.channel),alphaMapUv:C&&g(y.alphaMap.channel),vertexTangents:!!U.attributes.tangent&&(Ce||Ve),vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!U.attributes.color&&U.attributes.color.itemSize===4,vertexUv1s:de,vertexUv2s:Re,vertexUv3s:We,pointsUvs:z.isPoints===!0&&!!U.attributes.uv&&(ee||C),fog:!!V,useFog:y.fog===!0,fogExp2:V&&V.isFogExp2,flatShading:y.flatShading===!0,sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:f,skinning:z.isSkinnedMesh===!0,morphTargets:U.morphAttributes.position!==void 0,morphNormals:U.morphAttributes.normal!==void 0,morphColors:U.morphAttributes.color!==void 0,morphTargetsCount:B,morphTextureStride:W,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:y.dithering,shadowMapEnabled:i.shadowMap.enabled&&ne.length>0,shadowMapType:i.shadowMap.type,toneMapping:Xe,useLegacyLights:i._useLegacyLights,decodeVideoTexture:ee&&y.map.isVideoTexture===!0&&y.map.colorSpace===qe,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===Kt,flipSided:y.side===vt,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionDerivatives:ue&&y.extensions.derivatives===!0,extensionFragDepth:ue&&y.extensions.fragDepth===!0,extensionDrawBuffers:ue&&y.extensions.drawBuffers===!0,extensionShaderTextureLOD:ue&&y.extensions.shaderTextureLOD===!0,rendererExtensionFragDepth:c||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:c||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:c||n.has("EXT_shader_texture_lod"),customProgramCacheKey:y.customProgramCacheKey()}}function d(y){const w=[];if(y.shaderID?w.push(y.shaderID):(w.push(y.customVertexShaderID),w.push(y.customFragmentShaderID)),y.defines!==void 0)for(const ne in y.defines)w.push(ne),w.push(y.defines[ne]);return y.isRawShaderMaterial===!1&&(T(w,y),M(w,y),w.push(i.outputColorSpace)),w.push(y.customProgramCacheKey),w.join()}function T(y,w){y.push(w.precision),y.push(w.outputColorSpace),y.push(w.envMapMode),y.push(w.envMapCubeUVHeight),y.push(w.mapUv),y.push(w.alphaMapUv),y.push(w.lightMapUv),y.push(w.aoMapUv),y.push(w.bumpMapUv),y.push(w.normalMapUv),y.push(w.displacementMapUv),y.push(w.emissiveMapUv),y.push(w.metalnessMapUv),y.push(w.roughnessMapUv),y.push(w.anisotropyMapUv),y.push(w.clearcoatMapUv),y.push(w.clearcoatNormalMapUv),y.push(w.clearcoatRoughnessMapUv),y.push(w.iridescenceMapUv),y.push(w.iridescenceThicknessMapUv),y.push(w.sheenColorMapUv),y.push(w.sheenRoughnessMapUv),y.push(w.specularMapUv),y.push(w.specularColorMapUv),y.push(w.specularIntensityMapUv),y.push(w.transmissionMapUv),y.push(w.thicknessMapUv),y.push(w.combine),y.push(w.fogExp2),y.push(w.sizeAttenuation),y.push(w.morphTargetsCount),y.push(w.morphAttributeCount),y.push(w.numDirLights),y.push(w.numPointLights),y.push(w.numSpotLights),y.push(w.numSpotLightMaps),y.push(w.numHemiLights),y.push(w.numRectAreaLights),y.push(w.numDirLightShadows),y.push(w.numPointLightShadows),y.push(w.numSpotLightShadows),y.push(w.numSpotLightShadowsWithMaps),y.push(w.shadowMapType),y.push(w.toneMapping),y.push(w.numClippingPlanes),y.push(w.numClipIntersection),y.push(w.depthPacking)}function M(y,w){a.disableAll(),w.isWebGL2&&a.enable(0),w.supportsVertexTextures&&a.enable(1),w.instancing&&a.enable(2),w.instancingColor&&a.enable(3),w.matcap&&a.enable(4),w.envMap&&a.enable(5),w.normalMapObjectSpace&&a.enable(6),w.normalMapTangentSpace&&a.enable(7),w.clearcoat&&a.enable(8),w.iridescence&&a.enable(9),w.alphaTest&&a.enable(10),w.vertexColors&&a.enable(11),w.vertexAlphas&&a.enable(12),w.vertexUv1s&&a.enable(13),w.vertexUv2s&&a.enable(14),w.vertexUv3s&&a.enable(15),w.vertexTangents&&a.enable(16),w.anisotropy&&a.enable(17),y.push(a.mask),a.disableAll(),w.fog&&a.enable(0),w.useFog&&a.enable(1),w.flatShading&&a.enable(2),w.logarithmicDepthBuffer&&a.enable(3),w.skinning&&a.enable(4),w.morphTargets&&a.enable(5),w.morphNormals&&a.enable(6),w.morphColors&&a.enable(7),w.premultipliedAlpha&&a.enable(8),w.shadowMapEnabled&&a.enable(9),w.useLegacyLights&&a.enable(10),w.doubleSided&&a.enable(11),w.flipSided&&a.enable(12),w.useDepthPacking&&a.enable(13),w.dithering&&a.enable(14),w.transmission&&a.enable(15),w.sheen&&a.enable(16),w.opaque&&a.enable(17),w.pointsUvs&&a.enable(18),w.decodeVideoTexture&&a.enable(19),y.push(a.mask)}function E(y){const w=_[y.type];let ne;if(w){const $=Ot[w];ne=Fl.clone($.uniforms)}else ne=y.uniforms;return ne}function v(y,w){let ne;for(let $=0,z=u.length;$<z;$++){const V=u[$];if(V.cacheKey===w){ne=V,++ne.usedTimes;break}}return ne===void 0&&(ne=new qh(i,w,y,s),u.push(ne)),ne}function A(y){if(--y.usedTimes===0){const w=u.indexOf(y);u[w]=u[u.length-1],u.pop(),y.destroy()}}function R(y){l.remove(y)}function O(){l.dispose()}return{getParameters:p,getProgramCacheKey:d,getUniforms:E,acquireProgram:v,releaseProgram:A,releaseShaderCache:R,programs:u,dispose:O}}function Jh(){let i=new WeakMap;function e(s){let o=i.get(s);return o===void 0&&(o={},i.set(s,o)),o}function t(s){i.delete(s)}function n(s,o,a){i.get(s)[o]=a}function r(){i=new WeakMap}return{get:e,remove:t,update:n,dispose:r}}function Qh(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function oa(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function la(){const i=[];let e=0;const t=[],n=[],r=[];function s(){e=0,t.length=0,n.length=0,r.length=0}function o(f,h,m,_,g,p){let d=i[e];return d===void 0?(d={id:f.id,object:f,geometry:h,material:m,groupOrder:_,renderOrder:f.renderOrder,z:g,group:p},i[e]=d):(d.id=f.id,d.object=f,d.geometry=h,d.material=m,d.groupOrder=_,d.renderOrder=f.renderOrder,d.z=g,d.group=p),e++,d}function a(f,h,m,_,g,p){const d=o(f,h,m,_,g,p);m.transmission>0?n.push(d):m.transparent===!0?r.push(d):t.push(d)}function l(f,h,m,_,g,p){const d=o(f,h,m,_,g,p);m.transmission>0?n.unshift(d):m.transparent===!0?r.unshift(d):t.unshift(d)}function u(f,h){t.length>1&&t.sort(f||Qh),n.length>1&&n.sort(h||oa),r.length>1&&r.sort(h||oa)}function c(){for(let f=e,h=i.length;f<h;f++){const m=i[f];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:n,transparent:r,init:s,push:a,unshift:l,finish:c,sort:u}}function ef(){let i=new WeakMap;function e(n,r){const s=i.get(n);let o;return s===void 0?(o=new la,i.set(n,[o])):r>=s.length?(o=new la,s.push(o)):o=s[r],o}function t(){i=new WeakMap}return{get:e,dispose:t}}function tf(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new N,color:new je};break;case"SpotLight":t={position:new N,direction:new N,color:new je,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new N,color:new je,distance:0,decay:0};break;case"HemisphereLight":t={direction:new N,skyColor:new je,groundColor:new je};break;case"RectAreaLight":t={color:new je,position:new N,halfWidth:new N,halfHeight:new N};break}return i[e.id]=t,t}}}function nf(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ye};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ye};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ye,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let rf=0;function sf(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function af(i,e){const t=new tf,n=nf(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0};for(let c=0;c<9;c++)r.probe.push(new N);const s=new N,o=new lt,a=new lt;function l(c,f){let h=0,m=0,_=0;for(let ne=0;ne<9;ne++)r.probe[ne].set(0,0,0);let g=0,p=0,d=0,T=0,M=0,E=0,v=0,A=0,R=0,O=0;c.sort(sf);const y=f===!0?Math.PI:1;for(let ne=0,$=c.length;ne<$;ne++){const z=c[ne],V=z.color,U=z.intensity,te=z.distance,J=z.shadow&&z.shadow.map?z.shadow.map.texture:null;if(z.isAmbientLight)h+=V.r*U*y,m+=V.g*U*y,_+=V.b*U*y;else if(z.isLightProbe)for(let Q=0;Q<9;Q++)r.probe[Q].addScaledVector(z.sh.coefficients[Q],U);else if(z.isDirectionalLight){const Q=t.get(z);if(Q.color.copy(z.color).multiplyScalar(z.intensity*y),z.castShadow){const ie=z.shadow,H=n.get(z);H.shadowBias=ie.bias,H.shadowNormalBias=ie.normalBias,H.shadowRadius=ie.radius,H.shadowMapSize=ie.mapSize,r.directionalShadow[g]=H,r.directionalShadowMap[g]=J,r.directionalShadowMatrix[g]=z.shadow.matrix,E++}r.directional[g]=Q,g++}else if(z.isSpotLight){const Q=t.get(z);Q.position.setFromMatrixPosition(z.matrixWorld),Q.color.copy(V).multiplyScalar(U*y),Q.distance=te,Q.coneCos=Math.cos(z.angle),Q.penumbraCos=Math.cos(z.angle*(1-z.penumbra)),Q.decay=z.decay,r.spot[d]=Q;const ie=z.shadow;if(z.map&&(r.spotLightMap[R]=z.map,R++,ie.updateMatrices(z),z.castShadow&&O++),r.spotLightMatrix[d]=ie.matrix,z.castShadow){const H=n.get(z);H.shadowBias=ie.bias,H.shadowNormalBias=ie.normalBias,H.shadowRadius=ie.radius,H.shadowMapSize=ie.mapSize,r.spotShadow[d]=H,r.spotShadowMap[d]=J,A++}d++}else if(z.isRectAreaLight){const Q=t.get(z);Q.color.copy(V).multiplyScalar(U),Q.halfWidth.set(z.width*.5,0,0),Q.halfHeight.set(0,z.height*.5,0),r.rectArea[T]=Q,T++}else if(z.isPointLight){const Q=t.get(z);if(Q.color.copy(z.color).multiplyScalar(z.intensity*y),Q.distance=z.distance,Q.decay=z.decay,z.castShadow){const ie=z.shadow,H=n.get(z);H.shadowBias=ie.bias,H.shadowNormalBias=ie.normalBias,H.shadowRadius=ie.radius,H.shadowMapSize=ie.mapSize,H.shadowCameraNear=ie.camera.near,H.shadowCameraFar=ie.camera.far,r.pointShadow[p]=H,r.pointShadowMap[p]=J,r.pointShadowMatrix[p]=z.shadow.matrix,v++}r.point[p]=Q,p++}else if(z.isHemisphereLight){const Q=t.get(z);Q.skyColor.copy(z.color).multiplyScalar(U*y),Q.groundColor.copy(z.groundColor).multiplyScalar(U*y),r.hemi[M]=Q,M++}}T>0&&(e.isWebGL2||i.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=he.LTC_FLOAT_1,r.rectAreaLTC2=he.LTC_FLOAT_2):i.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=he.LTC_HALF_1,r.rectAreaLTC2=he.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=h,r.ambient[1]=m,r.ambient[2]=_;const w=r.hash;(w.directionalLength!==g||w.pointLength!==p||w.spotLength!==d||w.rectAreaLength!==T||w.hemiLength!==M||w.numDirectionalShadows!==E||w.numPointShadows!==v||w.numSpotShadows!==A||w.numSpotMaps!==R)&&(r.directional.length=g,r.spot.length=d,r.rectArea.length=T,r.point.length=p,r.hemi.length=M,r.directionalShadow.length=E,r.directionalShadowMap.length=E,r.pointShadow.length=v,r.pointShadowMap.length=v,r.spotShadow.length=A,r.spotShadowMap.length=A,r.directionalShadowMatrix.length=E,r.pointShadowMatrix.length=v,r.spotLightMatrix.length=A+R-O,r.spotLightMap.length=R,r.numSpotLightShadowsWithMaps=O,w.directionalLength=g,w.pointLength=p,w.spotLength=d,w.rectAreaLength=T,w.hemiLength=M,w.numDirectionalShadows=E,w.numPointShadows=v,w.numSpotShadows=A,w.numSpotMaps=R,r.version=rf++)}function u(c,f){let h=0,m=0,_=0,g=0,p=0;const d=f.matrixWorldInverse;for(let T=0,M=c.length;T<M;T++){const E=c[T];if(E.isDirectionalLight){const v=r.directional[h];v.direction.setFromMatrixPosition(E.matrixWorld),s.setFromMatrixPosition(E.target.matrixWorld),v.direction.sub(s),v.direction.transformDirection(d),h++}else if(E.isSpotLight){const v=r.spot[_];v.position.setFromMatrixPosition(E.matrixWorld),v.position.applyMatrix4(d),v.direction.setFromMatrixPosition(E.matrixWorld),s.setFromMatrixPosition(E.target.matrixWorld),v.direction.sub(s),v.direction.transformDirection(d),_++}else if(E.isRectAreaLight){const v=r.rectArea[g];v.position.setFromMatrixPosition(E.matrixWorld),v.position.applyMatrix4(d),a.identity(),o.copy(E.matrixWorld),o.premultiply(d),a.extractRotation(o),v.halfWidth.set(E.width*.5,0,0),v.halfHeight.set(0,E.height*.5,0),v.halfWidth.applyMatrix4(a),v.halfHeight.applyMatrix4(a),g++}else if(E.isPointLight){const v=r.point[m];v.position.setFromMatrixPosition(E.matrixWorld),v.position.applyMatrix4(d),m++}else if(E.isHemisphereLight){const v=r.hemi[p];v.direction.setFromMatrixPosition(E.matrixWorld),v.direction.transformDirection(d),p++}}}return{setup:l,setupView:u,state:r}}function ca(i,e){const t=new af(i,e),n=[],r=[];function s(){n.length=0,r.length=0}function o(f){n.push(f)}function a(f){r.push(f)}function l(f){t.setup(n,f)}function u(f){t.setupView(n,f)}return{init:s,state:{lightsArray:n,shadowsArray:r,lights:t},setupLights:l,setupLightsView:u,pushLight:o,pushShadow:a}}function of(i,e){let t=new WeakMap;function n(s,o=0){const a=t.get(s);let l;return a===void 0?(l=new ca(i,e),t.set(s,[l])):o>=a.length?(l=new ca(i,e),a.push(l)):l=a[o],l}function r(){t=new WeakMap}return{get:n,dispose:r}}class lf extends Xi{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=zo,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class cf extends Xi{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const uf=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,df=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function hf(i,e,t){let n=new ka;const r=new Ye,s=new Ye,o=new ot,a=new lf({depthPacking:ko}),l=new cf,u={},c=t.maxTextureSize,f={[ln]:vt,[vt]:ln,[Kt]:Kt},h=new Tn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ye},radius:{value:4}},vertexShader:uf,fragmentShader:df}),m=h.clone();m.defines.HORIZONTAL_PASS=1;const _=new cn;_.setAttribute("position",new zt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const g=new Bt(_,h),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=_a;let d=this.type;this.render=function(v,A,R){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||v.length===0)return;const O=i.getRenderTarget(),y=i.getActiveCubeFace(),w=i.getActiveMipmapLevel(),ne=i.state;ne.setBlending(sn),ne.buffers.color.setClear(1,1,1,1),ne.buffers.depth.setTest(!0),ne.setScissorTest(!1);const $=d!==$t&&this.type===$t,z=d===$t&&this.type!==$t;for(let V=0,U=v.length;V<U;V++){const te=v[V],J=te.shadow;if(J===void 0){console.warn("THREE.WebGLShadowMap:",te,"has no shadow.");continue}if(J.autoUpdate===!1&&J.needsUpdate===!1)continue;r.copy(J.mapSize);const Q=J.getFrameExtents();if(r.multiply(Q),s.copy(J.mapSize),(r.x>c||r.y>c)&&(r.x>c&&(s.x=Math.floor(c/Q.x),r.x=s.x*Q.x,J.mapSize.x=s.x),r.y>c&&(s.y=Math.floor(c/Q.y),r.y=s.y*Q.y,J.mapSize.y=s.y)),J.map===null||$===!0||z===!0){const H=this.type!==$t?{minFilter:gt,magFilter:gt}:{};J.map!==null&&J.map.dispose(),J.map=new Sn(r.x,r.y,H),J.map.texture.name=te.name+".shadowMap",J.camera.updateProjectionMatrix()}i.setRenderTarget(J.map),i.clear();const ie=J.getViewportCount();for(let H=0;H<ie;H++){const B=J.getViewport(H);o.set(s.x*B.x,s.y*B.y,s.x*B.z,s.y*B.w),ne.viewport(o),J.updateMatrices(te,H),n=J.getFrustum(),E(A,R,J.camera,te,this.type)}J.isPointLightShadow!==!0&&this.type===$t&&T(J,R),J.needsUpdate=!1}d=this.type,p.needsUpdate=!1,i.setRenderTarget(O,y,w)};function T(v,A){const R=e.update(g);h.defines.VSM_SAMPLES!==v.blurSamples&&(h.defines.VSM_SAMPLES=v.blurSamples,m.defines.VSM_SAMPLES=v.blurSamples,h.needsUpdate=!0,m.needsUpdate=!0),v.mapPass===null&&(v.mapPass=new Sn(r.x,r.y)),h.uniforms.shadow_pass.value=v.map.texture,h.uniforms.resolution.value=v.mapSize,h.uniforms.radius.value=v.radius,i.setRenderTarget(v.mapPass),i.clear(),i.renderBufferDirect(A,null,R,h,g,null),m.uniforms.shadow_pass.value=v.mapPass.texture,m.uniforms.resolution.value=v.mapSize,m.uniforms.radius.value=v.radius,i.setRenderTarget(v.map),i.clear(),i.renderBufferDirect(A,null,R,m,g,null)}function M(v,A,R,O){let y=null;const w=R.isPointLight===!0?v.customDistanceMaterial:v.customDepthMaterial;if(w!==void 0)y=w;else if(y=R.isPointLight===!0?l:a,i.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0){const ne=y.uuid,$=A.uuid;let z=u[ne];z===void 0&&(z={},u[ne]=z);let V=z[$];V===void 0&&(V=y.clone(),z[$]=V),y=V}if(y.visible=A.visible,y.wireframe=A.wireframe,O===$t?y.side=A.shadowSide!==null?A.shadowSide:A.side:y.side=A.shadowSide!==null?A.shadowSide:f[A.side],y.alphaMap=A.alphaMap,y.alphaTest=A.alphaTest,y.map=A.map,y.clipShadows=A.clipShadows,y.clippingPlanes=A.clippingPlanes,y.clipIntersection=A.clipIntersection,y.displacementMap=A.displacementMap,y.displacementScale=A.displacementScale,y.displacementBias=A.displacementBias,y.wireframeLinewidth=A.wireframeLinewidth,y.linewidth=A.linewidth,R.isPointLight===!0&&y.isMeshDistanceMaterial===!0){const ne=i.properties.get(y);ne.light=R}return y}function E(v,A,R,O,y){if(v.visible===!1)return;if(v.layers.test(A.layers)&&(v.isMesh||v.isLine||v.isPoints)&&(v.castShadow||v.receiveShadow&&y===$t)&&(!v.frustumCulled||n.intersectsObject(v))){v.modelViewMatrix.multiplyMatrices(R.matrixWorldInverse,v.matrixWorld);const $=e.update(v),z=v.material;if(Array.isArray(z)){const V=$.groups;for(let U=0,te=V.length;U<te;U++){const J=V[U],Q=z[J.materialIndex];if(Q&&Q.visible){const ie=M(v,Q,O,y);i.renderBufferDirect(R,null,$,ie,v,J)}}}else if(z.visible){const V=M(v,z,O,y);i.renderBufferDirect(R,null,$,V,v,null)}}const ne=v.children;for(let $=0,z=ne.length;$<z;$++)E(ne[$],A,R,O,y)}}function ff(i,e,t){const n=t.isWebGL2;function r(){let C=!1;const se=new ot;let D=null;const ue=new ot(0,0,0,0);return{setMask:function(de){D!==de&&!C&&(i.colorMask(de,de,de,de),D=de)},setLocked:function(de){C=de},setClear:function(de,Re,We,Xe,Tt){Tt===!0&&(de*=Xe,Re*=Xe,We*=Xe),se.set(de,Re,We,Xe),ue.equals(se)===!1&&(i.clearColor(de,Re,We,Xe),ue.copy(se))},reset:function(){C=!1,D=null,ue.set(-1,0,0,0)}}}function s(){let C=!1,se=null,D=null,ue=null;return{setTest:function(de){de?K(i.DEPTH_TEST):Y(i.DEPTH_TEST)},setMask:function(de){se!==de&&!C&&(i.depthMask(de),se=de)},setFunc:function(de){if(D!==de){switch(de){case mo:i.depthFunc(i.NEVER);break;case go:i.depthFunc(i.ALWAYS);break;case _o:i.depthFunc(i.LESS);break;case wr:i.depthFunc(i.LEQUAL);break;case vo:i.depthFunc(i.EQUAL);break;case xo:i.depthFunc(i.GEQUAL);break;case yo:i.depthFunc(i.GREATER);break;case Mo:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}D=de}},setLocked:function(de){C=de},setClear:function(de){ue!==de&&(i.clearDepth(de),ue=de)},reset:function(){C=!1,se=null,D=null,ue=null}}}function o(){let C=!1,se=null,D=null,ue=null,de=null,Re=null,We=null,Xe=null,Tt=null;return{setTest:function(He){C||(He?K(i.STENCIL_TEST):Y(i.STENCIL_TEST))},setMask:function(He){se!==He&&!C&&(i.stencilMask(He),se=He)},setFunc:function(He,at,ht){(D!==He||ue!==at||de!==ht)&&(i.stencilFunc(He,at,ht),D=He,ue=at,de=ht)},setOp:function(He,at,ht){(Re!==He||We!==at||Xe!==ht)&&(i.stencilOp(He,at,ht),Re=He,We=at,Xe=ht)},setLocked:function(He){C=He},setClear:function(He){Tt!==He&&(i.clearStencil(He),Tt=He)},reset:function(){C=!1,se=null,D=null,ue=null,de=null,Re=null,We=null,Xe=null,Tt=null}}}const a=new r,l=new s,u=new o,c=new WeakMap,f=new WeakMap;let h={},m={},_=new WeakMap,g=[],p=null,d=!1,T=null,M=null,E=null,v=null,A=null,R=null,O=null,y=!1,w=null,ne=null,$=null,z=null,V=null;const U=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let te=!1,J=0;const Q=i.getParameter(i.VERSION);Q.indexOf("WebGL")!==-1?(J=parseFloat(/^WebGL (\d)/.exec(Q)[1]),te=J>=1):Q.indexOf("OpenGL ES")!==-1&&(J=parseFloat(/^OpenGL ES (\d)/.exec(Q)[1]),te=J>=2);let ie=null,H={};const B=i.getParameter(i.SCISSOR_BOX),W=i.getParameter(i.VIEWPORT),fe=new ot().fromArray(B),pe=new ot().fromArray(W);function me(C,se,D,ue){const de=new Uint8Array(4),Re=i.createTexture();i.bindTexture(C,Re),i.texParameteri(C,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(C,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let We=0;We<D;We++)n&&(C===i.TEXTURE_3D||C===i.TEXTURE_2D_ARRAY)?i.texImage3D(se,0,i.RGBA,1,1,ue,0,i.RGBA,i.UNSIGNED_BYTE,de):i.texImage2D(se+We,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,de);return Re}const Me={};Me[i.TEXTURE_2D]=me(i.TEXTURE_2D,i.TEXTURE_2D,1),Me[i.TEXTURE_CUBE_MAP]=me(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),n&&(Me[i.TEXTURE_2D_ARRAY]=me(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Me[i.TEXTURE_3D]=me(i.TEXTURE_3D,i.TEXTURE_3D,1,1)),a.setClear(0,0,0,1),l.setClear(1),u.setClear(0),K(i.DEPTH_TEST),l.setFunc(wr),Ae(!1),Ge(qr),K(i.CULL_FACE),Se(sn);function K(C){h[C]!==!0&&(i.enable(C),h[C]=!0)}function Y(C){h[C]!==!1&&(i.disable(C),h[C]=!1)}function ee(C,se){return m[C]!==se?(i.bindFramebuffer(C,se),m[C]=se,n&&(C===i.DRAW_FRAMEBUFFER&&(m[i.FRAMEBUFFER]=se),C===i.FRAMEBUFFER&&(m[i.DRAW_FRAMEBUFFER]=se)),!0):!1}function be(C,se){let D=g,ue=!1;if(C)if(D=_.get(se),D===void 0&&(D=[],_.set(se,D)),C.isWebGLMultipleRenderTargets){const de=C.texture;if(D.length!==de.length||D[0]!==i.COLOR_ATTACHMENT0){for(let Re=0,We=de.length;Re<We;Re++)D[Re]=i.COLOR_ATTACHMENT0+Re;D.length=de.length,ue=!0}}else D[0]!==i.COLOR_ATTACHMENT0&&(D[0]=i.COLOR_ATTACHMENT0,ue=!0);else D[0]!==i.BACK&&(D[0]=i.BACK,ue=!0);ue&&(t.isWebGL2?i.drawBuffers(D):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(D))}function xe(C){return p!==C?(i.useProgram(C),p=C,!0):!1}const P={[Gn]:i.FUNC_ADD,[io]:i.FUNC_SUBTRACT,[ro]:i.FUNC_REVERSE_SUBTRACT};if(n)P[Zr]=i.MIN,P[Jr]=i.MAX;else{const C=e.get("EXT_blend_minmax");C!==null&&(P[Zr]=C.MIN_EXT,P[Jr]=C.MAX_EXT)}const Fe={[so]:i.ZERO,[ao]:i.ONE,[oo]:i.SRC_COLOR,[va]:i.SRC_ALPHA,[po]:i.SRC_ALPHA_SATURATE,[ho]:i.DST_COLOR,[co]:i.DST_ALPHA,[lo]:i.ONE_MINUS_SRC_COLOR,[xa]:i.ONE_MINUS_SRC_ALPHA,[fo]:i.ONE_MINUS_DST_COLOR,[uo]:i.ONE_MINUS_DST_ALPHA};function Se(C,se,D,ue,de,Re,We,Xe){if(C===sn){d===!0&&(Y(i.BLEND),d=!1);return}if(d===!1&&(K(i.BLEND),d=!0),C!==no){if(C!==T||Xe!==y){if((M!==Gn||A!==Gn)&&(i.blendEquation(i.FUNC_ADD),M=Gn,A=Gn),Xe)switch(C){case Wn:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case jr:i.blendFunc(i.ONE,i.ONE);break;case $r:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Kr:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",C);break}else switch(C){case Wn:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case jr:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case $r:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Kr:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",C);break}E=null,v=null,R=null,O=null,T=C,y=Xe}return}de=de||se,Re=Re||D,We=We||ue,(se!==M||de!==A)&&(i.blendEquationSeparate(P[se],P[de]),M=se,A=de),(D!==E||ue!==v||Re!==R||We!==O)&&(i.blendFuncSeparate(Fe[D],Fe[ue],Fe[Re],Fe[We]),E=D,v=ue,R=Re,O=We),T=C,y=!1}function Ce(C,se){C.side===Kt?Y(i.CULL_FACE):K(i.CULL_FACE);let D=C.side===vt;se&&(D=!D),Ae(D),C.blending===Wn&&C.transparent===!1?Se(sn):Se(C.blending,C.blendEquation,C.blendSrc,C.blendDst,C.blendEquationAlpha,C.blendSrcAlpha,C.blendDstAlpha,C.premultipliedAlpha),l.setFunc(C.depthFunc),l.setTest(C.depthTest),l.setMask(C.depthWrite),a.setMask(C.colorWrite);const ue=C.stencilWrite;u.setTest(ue),ue&&(u.setMask(C.stencilWriteMask),u.setFunc(C.stencilFunc,C.stencilRef,C.stencilFuncMask),u.setOp(C.stencilFail,C.stencilZFail,C.stencilZPass)),Ie(C.polygonOffset,C.polygonOffsetFactor,C.polygonOffsetUnits),C.alphaToCoverage===!0?K(i.SAMPLE_ALPHA_TO_COVERAGE):Y(i.SAMPLE_ALPHA_TO_COVERAGE)}function Ae(C){w!==C&&(C?i.frontFace(i.CW):i.frontFace(i.CCW),w=C)}function Ge(C){C!==Qa?(K(i.CULL_FACE),C!==ne&&(C===qr?i.cullFace(i.BACK):C===eo?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Y(i.CULL_FACE),ne=C}function Be(C){C!==$&&(te&&i.lineWidth(C),$=C)}function Ie(C,se,D){C?(K(i.POLYGON_OFFSET_FILL),(z!==se||V!==D)&&(i.polygonOffset(se,D),z=se,V=D)):Y(i.POLYGON_OFFSET_FILL)}function Ve(C){C?K(i.SCISSOR_TEST):Y(i.SCISSOR_TEST)}function $e(C){C===void 0&&(C=i.TEXTURE0+U-1),ie!==C&&(i.activeTexture(C),ie=C)}function rt(C,se,D){D===void 0&&(ie===null?D=i.TEXTURE0+U-1:D=ie);let ue=H[D];ue===void 0&&(ue={type:void 0,texture:void 0},H[D]=ue),(ue.type!==C||ue.texture!==se)&&(ie!==D&&(i.activeTexture(D),ie=D),i.bindTexture(C,se||Me[C]),ue.type=C,ue.texture=se)}function b(){const C=H[ie];C!==void 0&&C.type!==void 0&&(i.bindTexture(C.type,null),C.type=void 0,C.texture=void 0)}function x(){try{i.compressedTexImage2D.apply(i,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function k(){try{i.compressedTexImage3D.apply(i,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function ae(){try{i.texSubImage2D.apply(i,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function re(){try{i.texSubImage3D.apply(i,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function oe(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function Ee(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function le(){try{i.texStorage2D.apply(i,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function G(){try{i.texStorage3D.apply(i,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function ye(){try{i.texImage2D.apply(i,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function L(){try{i.texImage3D.apply(i,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function Z(C){fe.equals(C)===!1&&(i.scissor(C.x,C.y,C.z,C.w),fe.copy(C))}function X(C){pe.equals(C)===!1&&(i.viewport(C.x,C.y,C.z,C.w),pe.copy(C))}function ce(C,se){let D=f.get(se);D===void 0&&(D=new WeakMap,f.set(se,D));let ue=D.get(C);ue===void 0&&(ue=i.getUniformBlockIndex(se,C.name),D.set(C,ue))}function ge(C,se){const ue=f.get(se).get(C);c.get(se)!==ue&&(i.uniformBlockBinding(se,ue,C.__bindingPointIndex),c.set(se,ue))}function Te(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),n===!0&&(i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null)),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),h={},ie=null,H={},m={},_=new WeakMap,g=[],p=null,d=!1,T=null,M=null,E=null,v=null,A=null,R=null,O=null,y=!1,w=null,ne=null,$=null,z=null,V=null,fe.set(0,0,i.canvas.width,i.canvas.height),pe.set(0,0,i.canvas.width,i.canvas.height),a.reset(),l.reset(),u.reset()}return{buffers:{color:a,depth:l,stencil:u},enable:K,disable:Y,bindFramebuffer:ee,drawBuffers:be,useProgram:xe,setBlending:Se,setMaterial:Ce,setFlipSided:Ae,setCullFace:Ge,setLineWidth:Be,setPolygonOffset:Ie,setScissorTest:Ve,activeTexture:$e,bindTexture:rt,unbindTexture:b,compressedTexImage2D:x,compressedTexImage3D:k,texImage2D:ye,texImage3D:L,updateUBOMapping:ce,uniformBlockBinding:ge,texStorage2D:le,texStorage3D:G,texSubImage2D:ae,texSubImage3D:re,compressedTexSubImage2D:oe,compressedTexSubImage3D:Ee,scissor:Z,viewport:X,reset:Te}}function pf(i,e,t,n,r,s,o){const a=r.isWebGL2,l=r.maxTextures,u=r.maxCubemapSize,c=r.maxTextureSize,f=r.maxSamples,h=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),_=new WeakMap;let g;const p=new WeakMap;let d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function T(b,x){return d?new OffscreenCanvas(b,x):fi("canvas")}function M(b,x,k,ae){let re=1;if((b.width>ae||b.height>ae)&&(re=ae/Math.max(b.width,b.height)),re<1||x===!0)if(typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&b instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&b instanceof ImageBitmap){const oe=x?ki:Math.floor,Ee=oe(re*b.width),le=oe(re*b.height);g===void 0&&(g=T(Ee,le));const G=k?T(Ee,le):g;return G.width=Ee,G.height=le,G.getContext("2d").drawImage(b,0,0,Ee,le),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+b.width+"x"+b.height+") to ("+Ee+"x"+le+")."),G}else return"data"in b&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+b.width+"x"+b.height+")."),b;return b}function E(b){return Dr(b.width)&&Dr(b.height)}function v(b){return a?!1:b.wrapS!==Ut||b.wrapT!==Ut||b.minFilter!==gt&&b.minFilter!==At}function A(b,x){return b.generateMipmaps&&x&&b.minFilter!==gt&&b.minFilter!==At}function R(b){i.generateMipmap(b)}function O(b,x,k,ae,re=!1){if(a===!1)return x;if(b!==null){if(i[b]!==void 0)return i[b];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+b+"'")}let oe=x;return x===i.RED&&(k===i.FLOAT&&(oe=i.R32F),k===i.HALF_FLOAT&&(oe=i.R16F),k===i.UNSIGNED_BYTE&&(oe=i.R8)),x===i.RED_INTEGER&&(k===i.UNSIGNED_BYTE&&(oe=i.R8UI),k===i.UNSIGNED_SHORT&&(oe=i.R16UI),k===i.UNSIGNED_INT&&(oe=i.R32UI),k===i.BYTE&&(oe=i.R8I),k===i.SHORT&&(oe=i.R16I),k===i.INT&&(oe=i.R32I)),x===i.RG&&(k===i.FLOAT&&(oe=i.RG32F),k===i.HALF_FLOAT&&(oe=i.RG16F),k===i.UNSIGNED_BYTE&&(oe=i.RG8)),x===i.RGBA&&(k===i.FLOAT&&(oe=i.RGBA32F),k===i.HALF_FLOAT&&(oe=i.RGBA16F),k===i.UNSIGNED_BYTE&&(oe=ae===qe&&re===!1?i.SRGB8_ALPHA8:i.RGBA8),k===i.UNSIGNED_SHORT_4_4_4_4&&(oe=i.RGBA4),k===i.UNSIGNED_SHORT_5_5_5_1&&(oe=i.RGB5_A1)),(oe===i.R16F||oe===i.R32F||oe===i.RG16F||oe===i.RG32F||oe===i.RGBA16F||oe===i.RGBA32F)&&e.get("EXT_color_buffer_float"),oe}function y(b,x,k){return A(b,k)===!0||b.isFramebufferTexture&&b.minFilter!==gt&&b.minFilter!==At?Math.log2(Math.max(x.width,x.height))+1:b.mipmaps!==void 0&&b.mipmaps.length>0?b.mipmaps.length:b.isCompressedTexture&&Array.isArray(b.image)?x.mipmaps.length:1}function w(b){return b===gt||b===Qr||b===Ji?i.NEAREST:i.LINEAR}function ne(b){const x=b.target;x.removeEventListener("dispose",ne),z(x),x.isVideoTexture&&_.delete(x)}function $(b){const x=b.target;x.removeEventListener("dispose",$),U(x)}function z(b){const x=n.get(b);if(x.__webglInit===void 0)return;const k=b.source,ae=p.get(k);if(ae){const re=ae[x.__cacheKey];re.usedTimes--,re.usedTimes===0&&V(b),Object.keys(ae).length===0&&p.delete(k)}n.remove(b)}function V(b){const x=n.get(b);i.deleteTexture(x.__webglTexture);const k=b.source,ae=p.get(k);delete ae[x.__cacheKey],o.memory.textures--}function U(b){const x=b.texture,k=n.get(b),ae=n.get(x);if(ae.__webglTexture!==void 0&&(i.deleteTexture(ae.__webglTexture),o.memory.textures--),b.depthTexture&&b.depthTexture.dispose(),b.isWebGLCubeRenderTarget)for(let re=0;re<6;re++){if(Array.isArray(k.__webglFramebuffer[re]))for(let oe=0;oe<k.__webglFramebuffer[re].length;oe++)i.deleteFramebuffer(k.__webglFramebuffer[re][oe]);else i.deleteFramebuffer(k.__webglFramebuffer[re]);k.__webglDepthbuffer&&i.deleteRenderbuffer(k.__webglDepthbuffer[re])}else{if(Array.isArray(k.__webglFramebuffer))for(let re=0;re<k.__webglFramebuffer.length;re++)i.deleteFramebuffer(k.__webglFramebuffer[re]);else i.deleteFramebuffer(k.__webglFramebuffer);if(k.__webglDepthbuffer&&i.deleteRenderbuffer(k.__webglDepthbuffer),k.__webglMultisampledFramebuffer&&i.deleteFramebuffer(k.__webglMultisampledFramebuffer),k.__webglColorRenderbuffer)for(let re=0;re<k.__webglColorRenderbuffer.length;re++)k.__webglColorRenderbuffer[re]&&i.deleteRenderbuffer(k.__webglColorRenderbuffer[re]);k.__webglDepthRenderbuffer&&i.deleteRenderbuffer(k.__webglDepthRenderbuffer)}if(b.isWebGLMultipleRenderTargets)for(let re=0,oe=x.length;re<oe;re++){const Ee=n.get(x[re]);Ee.__webglTexture&&(i.deleteTexture(Ee.__webglTexture),o.memory.textures--),n.remove(x[re])}n.remove(x),n.remove(b)}let te=0;function J(){te=0}function Q(){const b=te;return b>=l&&console.warn("THREE.WebGLTextures: Trying to use "+b+" texture units while this GPU supports only "+l),te+=1,b}function ie(b){const x=[];return x.push(b.wrapS),x.push(b.wrapT),x.push(b.wrapR||0),x.push(b.magFilter),x.push(b.minFilter),x.push(b.anisotropy),x.push(b.internalFormat),x.push(b.format),x.push(b.type),x.push(b.generateMipmaps),x.push(b.premultiplyAlpha),x.push(b.flipY),x.push(b.unpackAlignment),x.push(b.colorSpace),x.join()}function H(b,x){const k=n.get(b);if(b.isVideoTexture&&$e(b),b.isRenderTargetTexture===!1&&b.version>0&&k.__version!==b.version){const ae=b.image;if(ae===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ae.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ee(k,b,x);return}}t.bindTexture(i.TEXTURE_2D,k.__webglTexture,i.TEXTURE0+x)}function B(b,x){const k=n.get(b);if(b.version>0&&k.__version!==b.version){ee(k,b,x);return}t.bindTexture(i.TEXTURE_2D_ARRAY,k.__webglTexture,i.TEXTURE0+x)}function W(b,x){const k=n.get(b);if(b.version>0&&k.__version!==b.version){ee(k,b,x);return}t.bindTexture(i.TEXTURE_3D,k.__webglTexture,i.TEXTURE0+x)}function fe(b,x){const k=n.get(b);if(b.version>0&&k.__version!==b.version){be(k,b,x);return}t.bindTexture(i.TEXTURE_CUBE_MAP,k.__webglTexture,i.TEXTURE0+x)}const pe={[Cr]:i.REPEAT,[Ut]:i.CLAMP_TO_EDGE,[Lr]:i.MIRRORED_REPEAT},me={[gt]:i.NEAREST,[Qr]:i.NEAREST_MIPMAP_NEAREST,[Ji]:i.NEAREST_MIPMAP_LINEAR,[At]:i.LINEAR,[Co]:i.LINEAR_MIPMAP_NEAREST,[ui]:i.LINEAR_MIPMAP_LINEAR},Me={[Wo]:i.NEVER,[Zo]:i.ALWAYS,[Yo]:i.LESS,[qo]:i.LEQUAL,[Xo]:i.EQUAL,[Ko]:i.GEQUAL,[jo]:i.GREATER,[$o]:i.NOTEQUAL};function K(b,x,k){if(k?(i.texParameteri(b,i.TEXTURE_WRAP_S,pe[x.wrapS]),i.texParameteri(b,i.TEXTURE_WRAP_T,pe[x.wrapT]),(b===i.TEXTURE_3D||b===i.TEXTURE_2D_ARRAY)&&i.texParameteri(b,i.TEXTURE_WRAP_R,pe[x.wrapR]),i.texParameteri(b,i.TEXTURE_MAG_FILTER,me[x.magFilter]),i.texParameteri(b,i.TEXTURE_MIN_FILTER,me[x.minFilter])):(i.texParameteri(b,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(b,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE),(b===i.TEXTURE_3D||b===i.TEXTURE_2D_ARRAY)&&i.texParameteri(b,i.TEXTURE_WRAP_R,i.CLAMP_TO_EDGE),(x.wrapS!==Ut||x.wrapT!==Ut)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),i.texParameteri(b,i.TEXTURE_MAG_FILTER,w(x.magFilter)),i.texParameteri(b,i.TEXTURE_MIN_FILTER,w(x.minFilter)),x.minFilter!==gt&&x.minFilter!==At&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),x.compareFunction&&(i.texParameteri(b,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(b,i.TEXTURE_COMPARE_FUNC,Me[x.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){const ae=e.get("EXT_texture_filter_anisotropic");if(x.magFilter===gt||x.minFilter!==Ji&&x.minFilter!==ui||x.type===rn&&e.has("OES_texture_float_linear")===!1||a===!1&&x.type===di&&e.has("OES_texture_half_float_linear")===!1)return;(x.anisotropy>1||n.get(x).__currentAnisotropy)&&(i.texParameterf(b,ae.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,r.getMaxAnisotropy())),n.get(x).__currentAnisotropy=x.anisotropy)}}function Y(b,x){let k=!1;b.__webglInit===void 0&&(b.__webglInit=!0,x.addEventListener("dispose",ne));const ae=x.source;let re=p.get(ae);re===void 0&&(re={},p.set(ae,re));const oe=ie(x);if(oe!==b.__cacheKey){re[oe]===void 0&&(re[oe]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,k=!0),re[oe].usedTimes++;const Ee=re[b.__cacheKey];Ee!==void 0&&(re[b.__cacheKey].usedTimes--,Ee.usedTimes===0&&V(x)),b.__cacheKey=oe,b.__webglTexture=re[oe].texture}return k}function ee(b,x,k){let ae=i.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(ae=i.TEXTURE_2D_ARRAY),x.isData3DTexture&&(ae=i.TEXTURE_3D);const re=Y(b,x),oe=x.source;t.bindTexture(ae,b.__webglTexture,i.TEXTURE0+k);const Ee=n.get(oe);if(oe.version!==Ee.__version||re===!0){t.activeTexture(i.TEXTURE0+k),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,x.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,x.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.NONE);const le=v(x)&&E(x.image)===!1;let G=M(x.image,le,!1,c);G=rt(x,G);const ye=E(G)||a,L=s.convert(x.format,x.colorSpace);let Z=s.convert(x.type),X=O(x.internalFormat,L,Z,x.colorSpace,x.isVideoTexture);K(ae,x,ye);let ce;const ge=x.mipmaps,Te=a&&x.isVideoTexture!==!0,C=Ee.__version===void 0||re===!0,se=y(x,G,ye);if(x.isDepthTexture)X=i.DEPTH_COMPONENT,a?x.type===rn?X=i.DEPTH_COMPONENT32F:x.type===nn?X=i.DEPTH_COMPONENT24:x.type===xn?X=i.DEPTH24_STENCIL8:X=i.DEPTH_COMPONENT16:x.type===rn&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),x.format===yn&&X===i.DEPTH_COMPONENT&&x.type!==Nr&&x.type!==nn&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),x.type=nn,Z=s.convert(x.type)),x.format===jn&&X===i.DEPTH_COMPONENT&&(X=i.DEPTH_STENCIL,x.type!==xn&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),x.type=xn,Z=s.convert(x.type))),C&&(Te?t.texStorage2D(i.TEXTURE_2D,1,X,G.width,G.height):t.texImage2D(i.TEXTURE_2D,0,X,G.width,G.height,0,L,Z,null));else if(x.isDataTexture)if(ge.length>0&&ye){Te&&C&&t.texStorage2D(i.TEXTURE_2D,se,X,ge[0].width,ge[0].height);for(let D=0,ue=ge.length;D<ue;D++)ce=ge[D],Te?t.texSubImage2D(i.TEXTURE_2D,D,0,0,ce.width,ce.height,L,Z,ce.data):t.texImage2D(i.TEXTURE_2D,D,X,ce.width,ce.height,0,L,Z,ce.data);x.generateMipmaps=!1}else Te?(C&&t.texStorage2D(i.TEXTURE_2D,se,X,G.width,G.height),t.texSubImage2D(i.TEXTURE_2D,0,0,0,G.width,G.height,L,Z,G.data)):t.texImage2D(i.TEXTURE_2D,0,X,G.width,G.height,0,L,Z,G.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){Te&&C&&t.texStorage3D(i.TEXTURE_2D_ARRAY,se,X,ge[0].width,ge[0].height,G.depth);for(let D=0,ue=ge.length;D<ue;D++)ce=ge[D],x.format!==Nt?L!==null?Te?t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,D,0,0,0,ce.width,ce.height,G.depth,L,ce.data,0,0):t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,D,X,ce.width,ce.height,G.depth,0,ce.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Te?t.texSubImage3D(i.TEXTURE_2D_ARRAY,D,0,0,0,ce.width,ce.height,G.depth,L,Z,ce.data):t.texImage3D(i.TEXTURE_2D_ARRAY,D,X,ce.width,ce.height,G.depth,0,L,Z,ce.data)}else{Te&&C&&t.texStorage2D(i.TEXTURE_2D,se,X,ge[0].width,ge[0].height);for(let D=0,ue=ge.length;D<ue;D++)ce=ge[D],x.format!==Nt?L!==null?Te?t.compressedTexSubImage2D(i.TEXTURE_2D,D,0,0,ce.width,ce.height,L,ce.data):t.compressedTexImage2D(i.TEXTURE_2D,D,X,ce.width,ce.height,0,ce.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Te?t.texSubImage2D(i.TEXTURE_2D,D,0,0,ce.width,ce.height,L,Z,ce.data):t.texImage2D(i.TEXTURE_2D,D,X,ce.width,ce.height,0,L,Z,ce.data)}else if(x.isDataArrayTexture)Te?(C&&t.texStorage3D(i.TEXTURE_2D_ARRAY,se,X,G.width,G.height,G.depth),t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,G.width,G.height,G.depth,L,Z,G.data)):t.texImage3D(i.TEXTURE_2D_ARRAY,0,X,G.width,G.height,G.depth,0,L,Z,G.data);else if(x.isData3DTexture)Te?(C&&t.texStorage3D(i.TEXTURE_3D,se,X,G.width,G.height,G.depth),t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,G.width,G.height,G.depth,L,Z,G.data)):t.texImage3D(i.TEXTURE_3D,0,X,G.width,G.height,G.depth,0,L,Z,G.data);else if(x.isFramebufferTexture){if(C)if(Te)t.texStorage2D(i.TEXTURE_2D,se,X,G.width,G.height);else{let D=G.width,ue=G.height;for(let de=0;de<se;de++)t.texImage2D(i.TEXTURE_2D,de,X,D,ue,0,L,Z,null),D>>=1,ue>>=1}}else if(ge.length>0&&ye){Te&&C&&t.texStorage2D(i.TEXTURE_2D,se,X,ge[0].width,ge[0].height);for(let D=0,ue=ge.length;D<ue;D++)ce=ge[D],Te?t.texSubImage2D(i.TEXTURE_2D,D,0,0,L,Z,ce):t.texImage2D(i.TEXTURE_2D,D,X,L,Z,ce);x.generateMipmaps=!1}else Te?(C&&t.texStorage2D(i.TEXTURE_2D,se,X,G.width,G.height),t.texSubImage2D(i.TEXTURE_2D,0,0,0,L,Z,G)):t.texImage2D(i.TEXTURE_2D,0,X,L,Z,G);A(x,ye)&&R(ae),Ee.__version=oe.version,x.onUpdate&&x.onUpdate(x)}b.__version=x.version}function be(b,x,k){if(x.image.length!==6)return;const ae=Y(b,x),re=x.source;t.bindTexture(i.TEXTURE_CUBE_MAP,b.__webglTexture,i.TEXTURE0+k);const oe=n.get(re);if(re.version!==oe.__version||ae===!0){t.activeTexture(i.TEXTURE0+k),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,x.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,x.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.NONE);const Ee=x.isCompressedTexture||x.image[0].isCompressedTexture,le=x.image[0]&&x.image[0].isDataTexture,G=[];for(let D=0;D<6;D++)!Ee&&!le?G[D]=M(x.image[D],!1,!0,u):G[D]=le?x.image[D].image:x.image[D],G[D]=rt(x,G[D]);const ye=G[0],L=E(ye)||a,Z=s.convert(x.format,x.colorSpace),X=s.convert(x.type),ce=O(x.internalFormat,Z,X,x.colorSpace),ge=a&&x.isVideoTexture!==!0,Te=oe.__version===void 0||ae===!0;let C=y(x,ye,L);K(i.TEXTURE_CUBE_MAP,x,L);let se;if(Ee){ge&&Te&&t.texStorage2D(i.TEXTURE_CUBE_MAP,C,ce,ye.width,ye.height);for(let D=0;D<6;D++){se=G[D].mipmaps;for(let ue=0;ue<se.length;ue++){const de=se[ue];x.format!==Nt?Z!==null?ge?t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+D,ue,0,0,de.width,de.height,Z,de.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+D,ue,ce,de.width,de.height,0,de.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):ge?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+D,ue,0,0,de.width,de.height,Z,X,de.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+D,ue,ce,de.width,de.height,0,Z,X,de.data)}}}else{se=x.mipmaps,ge&&Te&&(se.length>0&&C++,t.texStorage2D(i.TEXTURE_CUBE_MAP,C,ce,G[0].width,G[0].height));for(let D=0;D<6;D++)if(le){ge?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+D,0,0,0,G[D].width,G[D].height,Z,X,G[D].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+D,0,ce,G[D].width,G[D].height,0,Z,X,G[D].data);for(let ue=0;ue<se.length;ue++){const Re=se[ue].image[D].image;ge?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+D,ue+1,0,0,Re.width,Re.height,Z,X,Re.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+D,ue+1,ce,Re.width,Re.height,0,Z,X,Re.data)}}else{ge?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+D,0,0,0,Z,X,G[D]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+D,0,ce,Z,X,G[D]);for(let ue=0;ue<se.length;ue++){const de=se[ue];ge?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+D,ue+1,0,0,Z,X,de.image[D]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+D,ue+1,ce,Z,X,de.image[D])}}}A(x,L)&&R(i.TEXTURE_CUBE_MAP),oe.__version=re.version,x.onUpdate&&x.onUpdate(x)}b.__version=x.version}function xe(b,x,k,ae,re,oe){const Ee=s.convert(k.format,k.colorSpace),le=s.convert(k.type),G=O(k.internalFormat,Ee,le,k.colorSpace);if(!n.get(x).__hasExternalTextures){const L=Math.max(1,x.width>>oe),Z=Math.max(1,x.height>>oe);re===i.TEXTURE_3D||re===i.TEXTURE_2D_ARRAY?t.texImage3D(re,oe,G,L,Z,x.depth,0,Ee,le,null):t.texImage2D(re,oe,G,L,Z,0,Ee,le,null)}t.bindFramebuffer(i.FRAMEBUFFER,b),Ve(x)?h.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ae,re,n.get(k).__webglTexture,0,Ie(x)):(re===i.TEXTURE_2D||re>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&re<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,ae,re,n.get(k).__webglTexture,oe),t.bindFramebuffer(i.FRAMEBUFFER,null)}function P(b,x,k){if(i.bindRenderbuffer(i.RENDERBUFFER,b),x.depthBuffer&&!x.stencilBuffer){let ae=i.DEPTH_COMPONENT16;if(k||Ve(x)){const re=x.depthTexture;re&&re.isDepthTexture&&(re.type===rn?ae=i.DEPTH_COMPONENT32F:re.type===nn&&(ae=i.DEPTH_COMPONENT24));const oe=Ie(x);Ve(x)?h.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,oe,ae,x.width,x.height):i.renderbufferStorageMultisample(i.RENDERBUFFER,oe,ae,x.width,x.height)}else i.renderbufferStorage(i.RENDERBUFFER,ae,x.width,x.height);i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.RENDERBUFFER,b)}else if(x.depthBuffer&&x.stencilBuffer){const ae=Ie(x);k&&Ve(x)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,ae,i.DEPTH24_STENCIL8,x.width,x.height):Ve(x)?h.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ae,i.DEPTH24_STENCIL8,x.width,x.height):i.renderbufferStorage(i.RENDERBUFFER,i.DEPTH_STENCIL,x.width,x.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.RENDERBUFFER,b)}else{const ae=x.isWebGLMultipleRenderTargets===!0?x.texture:[x.texture];for(let re=0;re<ae.length;re++){const oe=ae[re],Ee=s.convert(oe.format,oe.colorSpace),le=s.convert(oe.type),G=O(oe.internalFormat,Ee,le,oe.colorSpace),ye=Ie(x);k&&Ve(x)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,ye,G,x.width,x.height):Ve(x)?h.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ye,G,x.width,x.height):i.renderbufferStorage(i.RENDERBUFFER,G,x.width,x.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Fe(b,x){if(x&&x.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,b),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(x.depthTexture).__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),H(x.depthTexture,0);const ae=n.get(x.depthTexture).__webglTexture,re=Ie(x);if(x.depthTexture.format===yn)Ve(x)?h.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ae,0,re):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ae,0);else if(x.depthTexture.format===jn)Ve(x)?h.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ae,0,re):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ae,0);else throw new Error("Unknown depthTexture format")}function Se(b){const x=n.get(b),k=b.isWebGLCubeRenderTarget===!0;if(b.depthTexture&&!x.__autoAllocateDepthBuffer){if(k)throw new Error("target.depthTexture not supported in Cube render targets");Fe(x.__webglFramebuffer,b)}else if(k){x.__webglDepthbuffer=[];for(let ae=0;ae<6;ae++)t.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer[ae]),x.__webglDepthbuffer[ae]=i.createRenderbuffer(),P(x.__webglDepthbuffer[ae],b,!1)}else t.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer=i.createRenderbuffer(),P(x.__webglDepthbuffer,b,!1);t.bindFramebuffer(i.FRAMEBUFFER,null)}function Ce(b,x,k){const ae=n.get(b);x!==void 0&&xe(ae.__webglFramebuffer,b,b.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),k!==void 0&&Se(b)}function Ae(b){const x=b.texture,k=n.get(b),ae=n.get(x);b.addEventListener("dispose",$),b.isWebGLMultipleRenderTargets!==!0&&(ae.__webglTexture===void 0&&(ae.__webglTexture=i.createTexture()),ae.__version=x.version,o.memory.textures++);const re=b.isWebGLCubeRenderTarget===!0,oe=b.isWebGLMultipleRenderTargets===!0,Ee=E(b)||a;if(re){k.__webglFramebuffer=[];for(let le=0;le<6;le++)if(a&&x.mipmaps&&x.mipmaps.length>0){k.__webglFramebuffer[le]=[];for(let G=0;G<x.mipmaps.length;G++)k.__webglFramebuffer[le][G]=i.createFramebuffer()}else k.__webglFramebuffer[le]=i.createFramebuffer()}else{if(a&&x.mipmaps&&x.mipmaps.length>0){k.__webglFramebuffer=[];for(let le=0;le<x.mipmaps.length;le++)k.__webglFramebuffer[le]=i.createFramebuffer()}else k.__webglFramebuffer=i.createFramebuffer();if(oe)if(r.drawBuffers){const le=b.texture;for(let G=0,ye=le.length;G<ye;G++){const L=n.get(le[G]);L.__webglTexture===void 0&&(L.__webglTexture=i.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&b.samples>0&&Ve(b)===!1){const le=oe?x:[x];k.__webglMultisampledFramebuffer=i.createFramebuffer(),k.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,k.__webglMultisampledFramebuffer);for(let G=0;G<le.length;G++){const ye=le[G];k.__webglColorRenderbuffer[G]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,k.__webglColorRenderbuffer[G]);const L=s.convert(ye.format,ye.colorSpace),Z=s.convert(ye.type),X=O(ye.internalFormat,L,Z,ye.colorSpace,b.isXRRenderTarget===!0),ce=Ie(b);i.renderbufferStorageMultisample(i.RENDERBUFFER,ce,X,b.width,b.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+G,i.RENDERBUFFER,k.__webglColorRenderbuffer[G])}i.bindRenderbuffer(i.RENDERBUFFER,null),b.depthBuffer&&(k.__webglDepthRenderbuffer=i.createRenderbuffer(),P(k.__webglDepthRenderbuffer,b,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(re){t.bindTexture(i.TEXTURE_CUBE_MAP,ae.__webglTexture),K(i.TEXTURE_CUBE_MAP,x,Ee);for(let le=0;le<6;le++)if(a&&x.mipmaps&&x.mipmaps.length>0)for(let G=0;G<x.mipmaps.length;G++)xe(k.__webglFramebuffer[le][G],b,x,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+le,G);else xe(k.__webglFramebuffer[le],b,x,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+le,0);A(x,Ee)&&R(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(oe){const le=b.texture;for(let G=0,ye=le.length;G<ye;G++){const L=le[G],Z=n.get(L);t.bindTexture(i.TEXTURE_2D,Z.__webglTexture),K(i.TEXTURE_2D,L,Ee),xe(k.__webglFramebuffer,b,L,i.COLOR_ATTACHMENT0+G,i.TEXTURE_2D,0),A(L,Ee)&&R(i.TEXTURE_2D)}t.unbindTexture()}else{let le=i.TEXTURE_2D;if((b.isWebGL3DRenderTarget||b.isWebGLArrayRenderTarget)&&(a?le=b.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(le,ae.__webglTexture),K(le,x,Ee),a&&x.mipmaps&&x.mipmaps.length>0)for(let G=0;G<x.mipmaps.length;G++)xe(k.__webglFramebuffer[G],b,x,i.COLOR_ATTACHMENT0,le,G);else xe(k.__webglFramebuffer,b,x,i.COLOR_ATTACHMENT0,le,0);A(x,Ee)&&R(le),t.unbindTexture()}b.depthBuffer&&Se(b)}function Ge(b){const x=E(b)||a,k=b.isWebGLMultipleRenderTargets===!0?b.texture:[b.texture];for(let ae=0,re=k.length;ae<re;ae++){const oe=k[ae];if(A(oe,x)){const Ee=b.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:i.TEXTURE_2D,le=n.get(oe).__webglTexture;t.bindTexture(Ee,le),R(Ee),t.unbindTexture()}}}function Be(b){if(a&&b.samples>0&&Ve(b)===!1){const x=b.isWebGLMultipleRenderTargets?b.texture:[b.texture],k=b.width,ae=b.height;let re=i.COLOR_BUFFER_BIT;const oe=[],Ee=b.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,le=n.get(b),G=b.isWebGLMultipleRenderTargets===!0;if(G)for(let ye=0;ye<x.length;ye++)t.bindFramebuffer(i.FRAMEBUFFER,le.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ye,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,le.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ye,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,le.__webglMultisampledFramebuffer),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,le.__webglFramebuffer);for(let ye=0;ye<x.length;ye++){oe.push(i.COLOR_ATTACHMENT0+ye),b.depthBuffer&&oe.push(Ee);const L=le.__ignoreDepthValues!==void 0?le.__ignoreDepthValues:!1;if(L===!1&&(b.depthBuffer&&(re|=i.DEPTH_BUFFER_BIT),b.stencilBuffer&&(re|=i.STENCIL_BUFFER_BIT)),G&&i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,le.__webglColorRenderbuffer[ye]),L===!0&&(i.invalidateFramebuffer(i.READ_FRAMEBUFFER,[Ee]),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[Ee])),G){const Z=n.get(x[ye]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Z,0)}i.blitFramebuffer(0,0,k,ae,0,0,k,ae,re,i.NEAREST),m&&i.invalidateFramebuffer(i.READ_FRAMEBUFFER,oe)}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),G)for(let ye=0;ye<x.length;ye++){t.bindFramebuffer(i.FRAMEBUFFER,le.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ye,i.RENDERBUFFER,le.__webglColorRenderbuffer[ye]);const L=n.get(x[ye]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,le.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ye,i.TEXTURE_2D,L,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,le.__webglMultisampledFramebuffer)}}function Ie(b){return Math.min(f,b.samples)}function Ve(b){const x=n.get(b);return a&&b.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function $e(b){const x=o.render.frame;_.get(b)!==x&&(_.set(b,x),b.update())}function rt(b,x){const k=b.colorSpace,ae=b.format,re=b.type;return b.isCompressedTexture===!0||b.isVideoTexture===!0||b.format===Pr||k!==Gt&&k!==En&&(k===qe||k===Wi?a===!1?e.has("EXT_sRGB")===!0&&ae===Nt?(b.format=Pr,b.minFilter=At,b.generateMipmaps=!1):x=La.sRGBToLinear(x):(ae!==Nt||re!==on)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",k)),x}this.allocateTextureUnit=Q,this.resetTextureUnits=J,this.setTexture2D=H,this.setTexture2DArray=B,this.setTexture3D=W,this.setTextureCube=fe,this.rebindTextures=Ce,this.setupRenderTarget=Ae,this.updateRenderTargetMipmap=Ge,this.updateMultisampleRenderTarget=Be,this.setupDepthRenderbuffer=Se,this.setupFrameBufferTexture=xe,this.useMultisampledRTT=Ve}const mf=0,tt=1;function gf(i,e,t){const n=t.isWebGL2;function r(s,o=En){let a;const l=o===qe||o===Wi?tt:mf;if(s===on)return i.UNSIGNED_BYTE;if(s===Sa)return i.UNSIGNED_SHORT_4_4_4_4;if(s===Ta)return i.UNSIGNED_SHORT_5_5_5_1;if(s===Lo)return i.BYTE;if(s===Po)return i.SHORT;if(s===Nr)return i.UNSIGNED_SHORT;if(s===Ea)return i.INT;if(s===nn)return i.UNSIGNED_INT;if(s===rn)return i.FLOAT;if(s===di)return n?i.HALF_FLOAT:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(s===Do)return i.ALPHA;if(s===Nt)return i.RGBA;if(s===Io)return i.LUMINANCE;if(s===Uo)return i.LUMINANCE_ALPHA;if(s===yn)return i.DEPTH_COMPONENT;if(s===jn)return i.DEPTH_STENCIL;if(s===Pr)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(s===No)return i.RED;if(s===ba)return i.RED_INTEGER;if(s===Fo)return i.RG;if(s===wa)return i.RG_INTEGER;if(s===Aa)return i.RGBA_INTEGER;if(s===Qi||s===er||s===tr||s===nr)if(l===tt)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(s===Qi)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===er)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===tr)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===nr)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(s===Qi)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===er)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===tr)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===nr)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===es||s===ts||s===ns||s===is)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(s===es)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===ts)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===ns)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===is)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===Oo)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===rs||s===ss)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(s===rs)return l===tt?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(s===ss)return l===tt?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===as||s===os||s===ls||s===cs||s===us||s===ds||s===hs||s===fs||s===ps||s===ms||s===gs||s===_s||s===vs||s===xs)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(s===as)return l===tt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===os)return l===tt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===ls)return l===tt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===cs)return l===tt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===us)return l===tt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===ds)return l===tt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===hs)return l===tt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===fs)return l===tt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===ps)return l===tt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===ms)return l===tt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===gs)return l===tt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===_s)return l===tt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===vs)return l===tt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===xs)return l===tt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===ir||s===ys||s===Ms)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(s===ir)return l===tt?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===ys)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===Ms)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===Bo||s===Es||s===Ss||s===Ts)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(s===ir)return a.COMPRESSED_RED_RGTC1_EXT;if(s===Es)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===Ss)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===Ts)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===xn?n?i.UNSIGNED_INT_24_8:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):i[s]!==void 0?i[s]:null}return{convert:r}}class _f extends Rt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class ai extends St{constructor(){super(),this.isGroup=!0,this.type="Group"}}const vf={type:"move"};class br{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ai,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ai,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new N,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new N),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ai,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new N,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new N),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,u=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(u&&e.hand){o=!0;for(const g of e.hand.values()){const p=t.getJointPose(g,n),d=this._getHandJoint(u,g);p!==null&&(d.matrix.fromArray(p.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=p.radius),d.visible=p!==null}const c=u.joints["index-finger-tip"],f=u.joints["thumb-tip"],h=c.position.distanceTo(f.position),m=.02,_=.005;u.inputState.pinching&&h>m+_?(u.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!u.inputState.pinching&&h<=m-_&&(u.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(vf)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),u!==null&&(u.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new ai;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class xf extends xt{constructor(e,t,n,r,s,o,a,l,u,c){if(c=c!==void 0?c:yn,c!==yn&&c!==jn)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&c===yn&&(n=nn),n===void 0&&c===jn&&(n=xn),super(null,r,s,o,a,l,c,n,u),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:gt,this.minFilter=l!==void 0?l:gt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class yf extends Kn{constructor(e,t){super();const n=this;let r=null,s=1,o=null,a="local-floor",l=1,u=null,c=null,f=null,h=null,m=null,_=null;const g=t.getContextAttributes();let p=null,d=null;const T=[],M=[],E=new Rt;E.layers.enable(1),E.viewport=new ot;const v=new Rt;v.layers.enable(2),v.viewport=new ot;const A=[E,v],R=new _f;R.layers.enable(1),R.layers.enable(2);let O=null,y=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(B){let W=T[B];return W===void 0&&(W=new br,T[B]=W),W.getTargetRaySpace()},this.getControllerGrip=function(B){let W=T[B];return W===void 0&&(W=new br,T[B]=W),W.getGripSpace()},this.getHand=function(B){let W=T[B];return W===void 0&&(W=new br,T[B]=W),W.getHandSpace()};function w(B){const W=M.indexOf(B.inputSource);if(W===-1)return;const fe=T[W];fe!==void 0&&(fe.update(B.inputSource,B.frame,u||o),fe.dispatchEvent({type:B.type,data:B.inputSource}))}function ne(){r.removeEventListener("select",w),r.removeEventListener("selectstart",w),r.removeEventListener("selectend",w),r.removeEventListener("squeeze",w),r.removeEventListener("squeezestart",w),r.removeEventListener("squeezeend",w),r.removeEventListener("end",ne),r.removeEventListener("inputsourceschange",$);for(let B=0;B<T.length;B++){const W=M[B];W!==null&&(M[B]=null,T[B].disconnect(W))}O=null,y=null,e.setRenderTarget(p),m=null,h=null,f=null,r=null,d=null,H.stop(),n.isPresenting=!1,n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(B){s=B,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(B){a=B,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return u||o},this.setReferenceSpace=function(B){u=B},this.getBaseLayer=function(){return h!==null?h:m},this.getBinding=function(){return f},this.getFrame=function(){return _},this.getSession=function(){return r},this.setSession=async function(B){if(r=B,r!==null){if(p=e.getRenderTarget(),r.addEventListener("select",w),r.addEventListener("selectstart",w),r.addEventListener("selectend",w),r.addEventListener("squeeze",w),r.addEventListener("squeezestart",w),r.addEventListener("squeezeend",w),r.addEventListener("end",ne),r.addEventListener("inputsourceschange",$),g.xrCompatible!==!0&&await t.makeXRCompatible(),r.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const W={antialias:r.renderState.layers===void 0?g.antialias:!0,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:s};m=new XRWebGLLayer(r,t,W),r.updateRenderState({baseLayer:m}),d=new Sn(m.framebufferWidth,m.framebufferHeight,{format:Nt,type:on,colorSpace:e.outputColorSpace,stencilBuffer:g.stencil})}else{let W=null,fe=null,pe=null;g.depth&&(pe=g.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,W=g.stencil?jn:yn,fe=g.stencil?xn:nn);const me={colorFormat:t.RGBA8,depthFormat:pe,scaleFactor:s};f=new XRWebGLBinding(r,t),h=f.createProjectionLayer(me),r.updateRenderState({layers:[h]}),d=new Sn(h.textureWidth,h.textureHeight,{format:Nt,type:on,depthTexture:new xf(h.textureWidth,h.textureHeight,fe,void 0,void 0,void 0,void 0,void 0,void 0,W),stencilBuffer:g.stencil,colorSpace:e.outputColorSpace,samples:g.antialias?4:0});const Me=e.properties.get(d);Me.__ignoreDepthValues=h.ignoreDepthValues}d.isXRRenderTarget=!0,this.setFoveation(l),u=null,o=await r.requestReferenceSpace(a),H.setContext(r),H.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode};function $(B){for(let W=0;W<B.removed.length;W++){const fe=B.removed[W],pe=M.indexOf(fe);pe>=0&&(M[pe]=null,T[pe].disconnect(fe))}for(let W=0;W<B.added.length;W++){const fe=B.added[W];let pe=M.indexOf(fe);if(pe===-1){for(let Me=0;Me<T.length;Me++)if(Me>=M.length){M.push(fe),pe=Me;break}else if(M[Me]===null){M[Me]=fe,pe=Me;break}if(pe===-1)break}const me=T[pe];me&&me.connect(fe)}}const z=new N,V=new N;function U(B,W,fe){z.setFromMatrixPosition(W.matrixWorld),V.setFromMatrixPosition(fe.matrixWorld);const pe=z.distanceTo(V),me=W.projectionMatrix.elements,Me=fe.projectionMatrix.elements,K=me[14]/(me[10]-1),Y=me[14]/(me[10]+1),ee=(me[9]+1)/me[5],be=(me[9]-1)/me[5],xe=(me[8]-1)/me[0],P=(Me[8]+1)/Me[0],Fe=K*xe,Se=K*P,Ce=pe/(-xe+P),Ae=Ce*-xe;W.matrixWorld.decompose(B.position,B.quaternion,B.scale),B.translateX(Ae),B.translateZ(Ce),B.matrixWorld.compose(B.position,B.quaternion,B.scale),B.matrixWorldInverse.copy(B.matrixWorld).invert();const Ge=K+Ce,Be=Y+Ce,Ie=Fe-Ae,Ve=Se+(pe-Ae),$e=ee*Y/Be*Ge,rt=be*Y/Be*Ge;B.projectionMatrix.makePerspective(Ie,Ve,$e,rt,Ge,Be),B.projectionMatrixInverse.copy(B.projectionMatrix).invert()}function te(B,W){W===null?B.matrixWorld.copy(B.matrix):B.matrixWorld.multiplyMatrices(W.matrixWorld,B.matrix),B.matrixWorldInverse.copy(B.matrixWorld).invert()}this.updateCamera=function(B){if(r===null)return;R.near=v.near=E.near=B.near,R.far=v.far=E.far=B.far,(O!==R.near||y!==R.far)&&(r.updateRenderState({depthNear:R.near,depthFar:R.far}),O=R.near,y=R.far);const W=B.parent,fe=R.cameras;te(R,W);for(let pe=0;pe<fe.length;pe++)te(fe[pe],W);fe.length===2?U(R,E,v):R.projectionMatrix.copy(E.projectionMatrix),J(B,R,W)};function J(B,W,fe){fe===null?B.matrix.copy(W.matrixWorld):(B.matrix.copy(fe.matrixWorld),B.matrix.invert(),B.matrix.multiply(W.matrixWorld)),B.matrix.decompose(B.position,B.quaternion,B.scale),B.updateMatrixWorld(!0),B.projectionMatrix.copy(W.projectionMatrix),B.projectionMatrixInverse.copy(W.projectionMatrixInverse),B.isPerspectiveCamera&&(B.fov=hi*2*Math.atan(1/B.projectionMatrix.elements[5]),B.zoom=1)}this.getCamera=function(){return R},this.getFoveation=function(){if(!(h===null&&m===null))return l},this.setFoveation=function(B){l=B,h!==null&&(h.fixedFoveation=B),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=B)};let Q=null;function ie(B,W){if(c=W.getViewerPose(u||o),_=W,c!==null){const fe=c.views;m!==null&&(e.setRenderTargetFramebuffer(d,m.framebuffer),e.setRenderTarget(d));let pe=!1;fe.length!==R.cameras.length&&(R.cameras.length=0,pe=!0);for(let me=0;me<fe.length;me++){const Me=fe[me];let K=null;if(m!==null)K=m.getViewport(Me);else{const ee=f.getViewSubImage(h,Me);K=ee.viewport,me===0&&(e.setRenderTargetTextures(d,ee.colorTexture,h.ignoreDepthValues?void 0:ee.depthStencilTexture),e.setRenderTarget(d))}let Y=A[me];Y===void 0&&(Y=new Rt,Y.layers.enable(me),Y.viewport=new ot,A[me]=Y),Y.matrix.fromArray(Me.transform.matrix),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale),Y.projectionMatrix.fromArray(Me.projectionMatrix),Y.projectionMatrixInverse.copy(Y.projectionMatrix).invert(),Y.viewport.set(K.x,K.y,K.width,K.height),me===0&&(R.matrix.copy(Y.matrix),R.matrix.decompose(R.position,R.quaternion,R.scale)),pe===!0&&R.cameras.push(Y)}}for(let fe=0;fe<T.length;fe++){const pe=M[fe],me=T[fe];pe!==null&&me!==void 0&&me.update(pe,W,u||o)}Q&&Q(B,W),W.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:W}),_=null}const H=new Ga;H.setAnimationLoop(ie),this.setAnimationLoop=function(B){Q=B},this.dispose=function(){}}}function Mf(i,e){function t(p,d){p.matrixAutoUpdate===!0&&p.updateMatrix(),d.value.copy(p.matrix)}function n(p,d){d.color.getRGB(p.fogColor.value,Oa(i)),d.isFog?(p.fogNear.value=d.near,p.fogFar.value=d.far):d.isFogExp2&&(p.fogDensity.value=d.density)}function r(p,d,T,M,E){d.isMeshBasicMaterial||d.isMeshLambertMaterial?s(p,d):d.isMeshToonMaterial?(s(p,d),f(p,d)):d.isMeshPhongMaterial?(s(p,d),c(p,d)):d.isMeshStandardMaterial?(s(p,d),h(p,d),d.isMeshPhysicalMaterial&&m(p,d,E)):d.isMeshMatcapMaterial?(s(p,d),_(p,d)):d.isMeshDepthMaterial?s(p,d):d.isMeshDistanceMaterial?(s(p,d),g(p,d)):d.isMeshNormalMaterial?s(p,d):d.isLineBasicMaterial?(o(p,d),d.isLineDashedMaterial&&a(p,d)):d.isPointsMaterial?l(p,d,T,M):d.isSpriteMaterial?u(p,d):d.isShadowMaterial?(p.color.value.copy(d.color),p.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function s(p,d){p.opacity.value=d.opacity,d.color&&p.diffuse.value.copy(d.color),d.emissive&&p.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(p.map.value=d.map,t(d.map,p.mapTransform)),d.alphaMap&&(p.alphaMap.value=d.alphaMap,t(d.alphaMap,p.alphaMapTransform)),d.bumpMap&&(p.bumpMap.value=d.bumpMap,t(d.bumpMap,p.bumpMapTransform),p.bumpScale.value=d.bumpScale,d.side===vt&&(p.bumpScale.value*=-1)),d.normalMap&&(p.normalMap.value=d.normalMap,t(d.normalMap,p.normalMapTransform),p.normalScale.value.copy(d.normalScale),d.side===vt&&p.normalScale.value.negate()),d.displacementMap&&(p.displacementMap.value=d.displacementMap,t(d.displacementMap,p.displacementMapTransform),p.displacementScale.value=d.displacementScale,p.displacementBias.value=d.displacementBias),d.emissiveMap&&(p.emissiveMap.value=d.emissiveMap,t(d.emissiveMap,p.emissiveMapTransform)),d.specularMap&&(p.specularMap.value=d.specularMap,t(d.specularMap,p.specularMapTransform)),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest);const T=e.get(d).envMap;if(T&&(p.envMap.value=T,p.flipEnvMap.value=T.isCubeTexture&&T.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=d.reflectivity,p.ior.value=d.ior,p.refractionRatio.value=d.refractionRatio),d.lightMap){p.lightMap.value=d.lightMap;const M=i._useLegacyLights===!0?Math.PI:1;p.lightMapIntensity.value=d.lightMapIntensity*M,t(d.lightMap,p.lightMapTransform)}d.aoMap&&(p.aoMap.value=d.aoMap,p.aoMapIntensity.value=d.aoMapIntensity,t(d.aoMap,p.aoMapTransform))}function o(p,d){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity,d.map&&(p.map.value=d.map,t(d.map,p.mapTransform))}function a(p,d){p.dashSize.value=d.dashSize,p.totalSize.value=d.dashSize+d.gapSize,p.scale.value=d.scale}function l(p,d,T,M){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity,p.size.value=d.size*T,p.scale.value=M*.5,d.map&&(p.map.value=d.map,t(d.map,p.uvTransform)),d.alphaMap&&(p.alphaMap.value=d.alphaMap,t(d.alphaMap,p.alphaMapTransform)),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest)}function u(p,d){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity,p.rotation.value=d.rotation,d.map&&(p.map.value=d.map,t(d.map,p.mapTransform)),d.alphaMap&&(p.alphaMap.value=d.alphaMap,t(d.alphaMap,p.alphaMapTransform)),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest)}function c(p,d){p.specular.value.copy(d.specular),p.shininess.value=Math.max(d.shininess,1e-4)}function f(p,d){d.gradientMap&&(p.gradientMap.value=d.gradientMap)}function h(p,d){p.metalness.value=d.metalness,d.metalnessMap&&(p.metalnessMap.value=d.metalnessMap,t(d.metalnessMap,p.metalnessMapTransform)),p.roughness.value=d.roughness,d.roughnessMap&&(p.roughnessMap.value=d.roughnessMap,t(d.roughnessMap,p.roughnessMapTransform)),e.get(d).envMap&&(p.envMapIntensity.value=d.envMapIntensity)}function m(p,d,T){p.ior.value=d.ior,d.sheen>0&&(p.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),p.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(p.sheenColorMap.value=d.sheenColorMap,t(d.sheenColorMap,p.sheenColorMapTransform)),d.sheenRoughnessMap&&(p.sheenRoughnessMap.value=d.sheenRoughnessMap,t(d.sheenRoughnessMap,p.sheenRoughnessMapTransform))),d.clearcoat>0&&(p.clearcoat.value=d.clearcoat,p.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(p.clearcoatMap.value=d.clearcoatMap,t(d.clearcoatMap,p.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,t(d.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(p.clearcoatNormalMap.value=d.clearcoatNormalMap,t(d.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===vt&&p.clearcoatNormalScale.value.negate())),d.iridescence>0&&(p.iridescence.value=d.iridescence,p.iridescenceIOR.value=d.iridescenceIOR,p.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(p.iridescenceMap.value=d.iridescenceMap,t(d.iridescenceMap,p.iridescenceMapTransform)),d.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=d.iridescenceThicknessMap,t(d.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),d.transmission>0&&(p.transmission.value=d.transmission,p.transmissionSamplerMap.value=T.texture,p.transmissionSamplerSize.value.set(T.width,T.height),d.transmissionMap&&(p.transmissionMap.value=d.transmissionMap,t(d.transmissionMap,p.transmissionMapTransform)),p.thickness.value=d.thickness,d.thicknessMap&&(p.thicknessMap.value=d.thicknessMap,t(d.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=d.attenuationDistance,p.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(p.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(p.anisotropyMap.value=d.anisotropyMap,t(d.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=d.specularIntensity,p.specularColor.value.copy(d.specularColor),d.specularColorMap&&(p.specularColorMap.value=d.specularColorMap,t(d.specularColorMap,p.specularColorMapTransform)),d.specularIntensityMap&&(p.specularIntensityMap.value=d.specularIntensityMap,t(d.specularIntensityMap,p.specularIntensityMapTransform))}function _(p,d){d.matcap&&(p.matcap.value=d.matcap)}function g(p,d){const T=e.get(d).light;p.referencePosition.value.setFromMatrixPosition(T.matrixWorld),p.nearDistance.value=T.shadow.camera.near,p.farDistance.value=T.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function Ef(i,e,t,n){let r={},s={},o=[];const a=t.isWebGL2?i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(T,M){const E=M.program;n.uniformBlockBinding(T,E)}function u(T,M){let E=r[T.id];E===void 0&&(_(T),E=c(T),r[T.id]=E,T.addEventListener("dispose",p));const v=M.program;n.updateUBOMapping(T,v);const A=e.render.frame;s[T.id]!==A&&(h(T),s[T.id]=A)}function c(T){const M=f();T.__bindingPointIndex=M;const E=i.createBuffer(),v=T.__size,A=T.usage;return i.bindBuffer(i.UNIFORM_BUFFER,E),i.bufferData(i.UNIFORM_BUFFER,v,A),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,M,E),E}function f(){for(let T=0;T<a;T++)if(o.indexOf(T)===-1)return o.push(T),T;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(T){const M=r[T.id],E=T.uniforms,v=T.__cache;i.bindBuffer(i.UNIFORM_BUFFER,M);for(let A=0,R=E.length;A<R;A++){const O=E[A];if(m(O,A,v)===!0){const y=O.__offset,w=Array.isArray(O.value)?O.value:[O.value];let ne=0;for(let $=0;$<w.length;$++){const z=w[$],V=g(z);typeof z=="number"?(O.__data[0]=z,i.bufferSubData(i.UNIFORM_BUFFER,y+ne,O.__data)):z.isMatrix3?(O.__data[0]=z.elements[0],O.__data[1]=z.elements[1],O.__data[2]=z.elements[2],O.__data[3]=z.elements[0],O.__data[4]=z.elements[3],O.__data[5]=z.elements[4],O.__data[6]=z.elements[5],O.__data[7]=z.elements[0],O.__data[8]=z.elements[6],O.__data[9]=z.elements[7],O.__data[10]=z.elements[8],O.__data[11]=z.elements[0]):(z.toArray(O.__data,ne),ne+=V.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,y,O.__data)}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function m(T,M,E){const v=T.value;if(E[M]===void 0){if(typeof v=="number")E[M]=v;else{const A=Array.isArray(v)?v:[v],R=[];for(let O=0;O<A.length;O++)R.push(A[O].clone());E[M]=R}return!0}else if(typeof v=="number"){if(E[M]!==v)return E[M]=v,!0}else{const A=Array.isArray(E[M])?E[M]:[E[M]],R=Array.isArray(v)?v:[v];for(let O=0;O<A.length;O++){const y=A[O];if(y.equals(R[O])===!1)return y.copy(R[O]),!0}}return!1}function _(T){const M=T.uniforms;let E=0;const v=16;let A=0;for(let R=0,O=M.length;R<O;R++){const y=M[R],w={boundary:0,storage:0},ne=Array.isArray(y.value)?y.value:[y.value];for(let $=0,z=ne.length;$<z;$++){const V=ne[$],U=g(V);w.boundary+=U.boundary,w.storage+=U.storage}if(y.__data=new Float32Array(w.storage/Float32Array.BYTES_PER_ELEMENT),y.__offset=E,R>0){A=E%v;const $=v-A;A!==0&&$-w.boundary<0&&(E+=v-A,y.__offset=E)}E+=w.storage}return A=E%v,A>0&&(E+=v-A),T.__size=E,T.__cache={},this}function g(T){const M={boundary:0,storage:0};return typeof T=="number"?(M.boundary=4,M.storage=4):T.isVector2?(M.boundary=8,M.storage=8):T.isVector3||T.isColor?(M.boundary=16,M.storage=12):T.isVector4?(M.boundary=16,M.storage=16):T.isMatrix3?(M.boundary=48,M.storage=48):T.isMatrix4?(M.boundary=64,M.storage=64):T.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",T),M}function p(T){const M=T.target;M.removeEventListener("dispose",p);const E=o.indexOf(M.__bindingPointIndex);o.splice(E,1),i.deleteBuffer(r[M.id]),delete r[M.id],delete s[M.id]}function d(){for(const T in r)i.deleteBuffer(r[T]);o=[],r={},s={}}return{bind:l,update:u,dispose:d}}class Xa{constructor(e={}){const{canvas:t=hl(),context:n=null,depth:r=!0,stencil:s=!0,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:u=!1,powerPreference:c="default",failIfMajorPerformanceCaveat:f=!1}=e;this.isWebGLRenderer=!0;let h;n!==null?h=n.getContextAttributes().alpha:h=o;const m=new Uint32Array(4),_=new Int32Array(4);let g=null,p=null;const d=[],T=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputColorSpace=qe,this._useLegacyLights=!1,this.toneMapping=an,this.toneMappingExposure=1;const M=this;let E=!1,v=0,A=0,R=null,O=-1,y=null;const w=new ot,ne=new ot;let $=null;const z=new je(0);let V=0,U=t.width,te=t.height,J=1,Q=null,ie=null;const H=new ot(0,0,U,te),B=new ot(0,0,U,te);let W=!1;const fe=new ka;let pe=!1,me=!1,Me=null;const K=new lt,Y=new Ye,ee=new N,be={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function xe(){return R===null?J:1}let P=n;function Fe(S,I){for(let q=0;q<S.length;q++){const F=S[q],j=t.getContext(F,I);if(j!==null)return j}return null}try{const S={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:u,powerPreference:c,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Ur}`),t.addEventListener("webglcontextlost",se,!1),t.addEventListener("webglcontextrestored",D,!1),t.addEventListener("webglcontextcreationerror",ue,!1),P===null){const I=["webgl2","webgl","experimental-webgl"];if(M.isWebGL1Renderer===!0&&I.shift(),P=Fe(I,S),P===null)throw Fe(I)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&P instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),P.getShaderPrecisionFormat===void 0&&(P.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(S){throw console.error("THREE.WebGLRenderer: "+S.message),S}let Se,Ce,Ae,Ge,Be,Ie,Ve,$e,rt,b,x,k,ae,re,oe,Ee,le,G,ye,L,Z,X,ce,ge;function Te(){Se=new Pd(P),Ce=new Td(P,Se,e),Se.init(Ce),X=new gf(P,Se,Ce),Ae=new ff(P,Se,Ce),Ge=new Ud(P),Be=new Jh,Ie=new pf(P,Se,Ae,Be,Ce,X,Ge),Ve=new wd(M),$e=new Ld(M),rt=new Vl(P,Ce),ce=new Ed(P,Se,rt,Ce),b=new Dd(P,rt,Ge,ce),x=new Bd(P,b,rt,Ge),ye=new Od(P,Ce,Ie),Ee=new bd(Be),k=new Zh(M,Ve,$e,Se,Ce,ce,Ee),ae=new Mf(M,Be),re=new ef,oe=new of(Se,Ce),G=new Md(M,Ve,$e,Ae,x,h,l),le=new hf(M,x,Ce),ge=new Ef(P,Ge,Ce,Ae),L=new Sd(P,Se,Ge,Ce),Z=new Id(P,Se,Ge,Ce),Ge.programs=k.programs,M.capabilities=Ce,M.extensions=Se,M.properties=Be,M.renderLists=re,M.shadowMap=le,M.state=Ae,M.info=Ge}Te();const C=new yf(M,P);this.xr=C,this.getContext=function(){return P},this.getContextAttributes=function(){return P.getContextAttributes()},this.forceContextLoss=function(){const S=Se.get("WEBGL_lose_context");S&&S.loseContext()},this.forceContextRestore=function(){const S=Se.get("WEBGL_lose_context");S&&S.restoreContext()},this.getPixelRatio=function(){return J},this.setPixelRatio=function(S){S!==void 0&&(J=S,this.setSize(U,te,!1))},this.getSize=function(S){return S.set(U,te)},this.setSize=function(S,I,q=!0){if(C.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}U=S,te=I,t.width=Math.floor(S*J),t.height=Math.floor(I*J),q===!0&&(t.style.width=S+"px",t.style.height=I+"px"),this.setViewport(0,0,S,I)},this.getDrawingBufferSize=function(S){return S.set(U*J,te*J).floor()},this.setDrawingBufferSize=function(S,I,q){U=S,te=I,J=q,t.width=Math.floor(S*q),t.height=Math.floor(I*q),this.setViewport(0,0,S,I)},this.getCurrentViewport=function(S){return S.copy(w)},this.getViewport=function(S){return S.copy(H)},this.setViewport=function(S,I,q,F){S.isVector4?H.set(S.x,S.y,S.z,S.w):H.set(S,I,q,F),Ae.viewport(w.copy(H).multiplyScalar(J).floor())},this.getScissor=function(S){return S.copy(B)},this.setScissor=function(S,I,q,F){S.isVector4?B.set(S.x,S.y,S.z,S.w):B.set(S,I,q,F),Ae.scissor(ne.copy(B).multiplyScalar(J).floor())},this.getScissorTest=function(){return W},this.setScissorTest=function(S){Ae.setScissorTest(W=S)},this.setOpaqueSort=function(S){Q=S},this.setTransparentSort=function(S){ie=S},this.getClearColor=function(S){return S.copy(G.getClearColor())},this.setClearColor=function(){G.setClearColor.apply(G,arguments)},this.getClearAlpha=function(){return G.getClearAlpha()},this.setClearAlpha=function(){G.setClearAlpha.apply(G,arguments)},this.clear=function(S=!0,I=!0,q=!0){let F=0;if(S){let j=!1;if(R!==null){const _e=R.texture.format;j=_e===Aa||_e===wa||_e===ba}if(j){const _e=R.texture.type,we=_e===on||_e===nn||_e===Nr||_e===xn||_e===Sa||_e===Ta,Pe=G.getClearColor(),De=G.getClearAlpha(),ze=Pe.r,Le=Pe.g,Ue=Pe.b;we?(m[0]=ze,m[1]=Le,m[2]=Ue,m[3]=De,P.clearBufferuiv(P.COLOR,0,m)):(_[0]=ze,_[1]=Le,_[2]=Ue,_[3]=De,P.clearBufferiv(P.COLOR,0,_))}else F|=P.COLOR_BUFFER_BIT}I&&(F|=P.DEPTH_BUFFER_BIT),q&&(F|=P.STENCIL_BUFFER_BIT),P.clear(F)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",se,!1),t.removeEventListener("webglcontextrestored",D,!1),t.removeEventListener("webglcontextcreationerror",ue,!1),re.dispose(),oe.dispose(),Be.dispose(),Ve.dispose(),$e.dispose(),x.dispose(),ce.dispose(),ge.dispose(),k.dispose(),C.dispose(),C.removeEventListener("sessionstart",He),C.removeEventListener("sessionend",at),Me&&(Me.dispose(),Me=null),ht.stop()};function se(S){S.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),E=!0}function D(){console.log("THREE.WebGLRenderer: Context Restored."),E=!1;const S=Ge.autoReset,I=le.enabled,q=le.autoUpdate,F=le.needsUpdate,j=le.type;Te(),Ge.autoReset=S,le.enabled=I,le.autoUpdate=q,le.needsUpdate=F,le.type=j}function ue(S){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",S.statusMessage)}function de(S){const I=S.target;I.removeEventListener("dispose",de),Re(I)}function Re(S){We(S),Be.remove(S)}function We(S){const I=Be.get(S).programs;I!==void 0&&(I.forEach(function(q){k.releaseProgram(q)}),S.isShaderMaterial&&k.releaseShaderCache(S))}this.renderBufferDirect=function(S,I,q,F,j,_e){I===null&&(I=be);const we=j.isMesh&&j.matrixWorld.determinant()<0,Pe=$a(S,I,q,F,j);Ae.setMaterial(F,we);let De=q.index,ze=1;if(F.wireframe===!0){if(De=b.getWireframeAttribute(q),De===void 0)return;ze=2}const Le=q.drawRange,Ue=q.attributes.position;let Ke=Le.start*ze,Ze=(Le.start+Le.count)*ze;_e!==null&&(Ke=Math.max(Ke,_e.start*ze),Ze=Math.min(Ze,(_e.start+_e.count)*ze)),De!==null?(Ke=Math.max(Ke,0),Ze=Math.min(Ze,De.count)):Ue!=null&&(Ke=Math.max(Ke,0),Ze=Math.min(Ze,Ue.count));const bt=Ze-Ke;if(bt<0||bt===1/0)return;ce.setup(j,F,Pe,q,De);let Ht,Je=L;if(De!==null&&(Ht=rt.get(De),Je=Z,Je.setIndex(Ht)),j.isMesh)F.wireframe===!0?(Ae.setLineWidth(F.wireframeLinewidth*xe()),Je.setMode(P.LINES)):Je.setMode(P.TRIANGLES);else if(j.isLine){let ke=F.linewidth;ke===void 0&&(ke=1),Ae.setLineWidth(ke*xe()),j.isLineSegments?Je.setMode(P.LINES):j.isLineLoop?Je.setMode(P.LINE_LOOP):Je.setMode(P.LINE_STRIP)}else j.isPoints?Je.setMode(P.POINTS):j.isSprite&&Je.setMode(P.TRIANGLES);if(j.isInstancedMesh)Je.renderInstances(Ke,bt,j.count);else if(q.isInstancedBufferGeometry){const ke=q._maxInstanceCount!==void 0?q._maxInstanceCount:1/0,ji=Math.min(q.instanceCount,ke);Je.renderInstances(Ke,bt,ji)}else Je.render(Ke,bt)},this.compile=function(S,I){function q(F,j,_e){F.transparent===!0&&F.side===Kt&&F.forceSinglePass===!1?(F.side=vt,F.needsUpdate=!0,_i(F,j,_e),F.side=ln,F.needsUpdate=!0,_i(F,j,_e),F.side=Kt):_i(F,j,_e)}p=oe.get(S),p.init(),T.push(p),S.traverseVisible(function(F){F.isLight&&F.layers.test(I.layers)&&(p.pushLight(F),F.castShadow&&p.pushShadow(F))}),p.setupLights(M._useLegacyLights),S.traverse(function(F){const j=F.material;if(j)if(Array.isArray(j))for(let _e=0;_e<j.length;_e++){const we=j[_e];q(we,S,F)}else q(j,S,F)}),T.pop(),p=null};let Xe=null;function Tt(S){Xe&&Xe(S)}function He(){ht.stop()}function at(){ht.start()}const ht=new Ga;ht.setAnimationLoop(Tt),typeof self<"u"&&ht.setContext(self),this.setAnimationLoop=function(S){Xe=S,C.setAnimationLoop(S),S===null?ht.stop():ht.start()},C.addEventListener("sessionstart",He),C.addEventListener("sessionend",at),this.render=function(S,I){if(I!==void 0&&I.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(E===!0)return;S.matrixWorldAutoUpdate===!0&&S.updateMatrixWorld(),I.parent===null&&I.matrixWorldAutoUpdate===!0&&I.updateMatrixWorld(),C.enabled===!0&&C.isPresenting===!0&&(C.cameraAutoUpdate===!0&&C.updateCamera(I),I=C.getCamera()),S.isScene===!0&&S.onBeforeRender(M,S,I,R),p=oe.get(S,T.length),p.init(),T.push(p),K.multiplyMatrices(I.projectionMatrix,I.matrixWorldInverse),fe.setFromProjectionMatrix(K),me=this.localClippingEnabled,pe=Ee.init(this.clippingPlanes,me),g=re.get(S,d.length),g.init(),d.push(g),Gr(S,I,0,M.sortObjects),g.finish(),M.sortObjects===!0&&g.sort(Q,ie),this.info.render.frame++,pe===!0&&Ee.beginShadows();const q=p.state.shadowsArray;if(le.render(q,S,I),pe===!0&&Ee.endShadows(),this.info.autoReset===!0&&this.info.reset(),G.render(g,S),p.setupLights(M._useLegacyLights),I.isArrayCamera){const F=I.cameras;for(let j=0,_e=F.length;j<_e;j++){const we=F[j];Hr(g,S,we,we.viewport)}}else Hr(g,S,I);R!==null&&(Ie.updateMultisampleRenderTarget(R),Ie.updateRenderTargetMipmap(R)),S.isScene===!0&&S.onAfterRender(M,S,I),ce.resetDefaultState(),O=-1,y=null,T.pop(),T.length>0?p=T[T.length-1]:p=null,d.pop(),d.length>0?g=d[d.length-1]:g=null};function Gr(S,I,q,F){if(S.visible===!1)return;if(S.layers.test(I.layers)){if(S.isGroup)q=S.renderOrder;else if(S.isLOD)S.autoUpdate===!0&&S.update(I);else if(S.isLight)p.pushLight(S),S.castShadow&&p.pushShadow(S);else if(S.isSprite){if(!S.frustumCulled||fe.intersectsSprite(S)){F&&ee.setFromMatrixPosition(S.matrixWorld).applyMatrix4(K);const we=x.update(S),Pe=S.material;Pe.visible&&g.push(S,we,Pe,q,ee.z,null)}}else if((S.isMesh||S.isLine||S.isPoints)&&(!S.frustumCulled||fe.intersectsObject(S))){const we=x.update(S),Pe=S.material;if(F&&(S.boundingSphere!==void 0?(S.boundingSphere===null&&S.computeBoundingSphere(),ee.copy(S.boundingSphere.center)):(we.boundingSphere===null&&we.computeBoundingSphere(),ee.copy(we.boundingSphere.center)),ee.applyMatrix4(S.matrixWorld).applyMatrix4(K)),Array.isArray(Pe)){const De=we.groups;for(let ze=0,Le=De.length;ze<Le;ze++){const Ue=De[ze],Ke=Pe[Ue.materialIndex];Ke&&Ke.visible&&g.push(S,we,Ke,q,ee.z,Ue)}}else Pe.visible&&g.push(S,we,Pe,q,ee.z,null)}}const _e=S.children;for(let we=0,Pe=_e.length;we<Pe;we++)Gr(_e[we],I,q,F)}function Hr(S,I,q,F){const j=S.opaque,_e=S.transmissive,we=S.transparent;p.setupLightsView(q),pe===!0&&Ee.setGlobalState(M.clippingPlanes,q),_e.length>0&&ja(j,_e,I,q),F&&Ae.viewport(w.copy(F)),j.length>0&&gi(j,I,q),_e.length>0&&gi(_e,I,q),we.length>0&&gi(we,I,q),Ae.buffers.depth.setTest(!0),Ae.buffers.depth.setMask(!0),Ae.buffers.color.setMask(!0),Ae.setPolygonOffset(!1)}function ja(S,I,q,F){const j=Ce.isWebGL2;Me===null&&(Me=new Sn(1,1,{generateMipmaps:!0,type:Se.has("EXT_color_buffer_half_float")?di:on,minFilter:ui,samples:j?4:0})),M.getDrawingBufferSize(Y),j?Me.setSize(Y.x,Y.y):Me.setSize(ki(Y.x),ki(Y.y));const _e=M.getRenderTarget();M.setRenderTarget(Me),M.getClearColor(z),V=M.getClearAlpha(),V<1&&M.setClearColor(16777215,.5),M.clear();const we=M.toneMapping;M.toneMapping=an,gi(S,q,F),Ie.updateMultisampleRenderTarget(Me),Ie.updateRenderTargetMipmap(Me);let Pe=!1;for(let De=0,ze=I.length;De<ze;De++){const Le=I[De],Ue=Le.object,Ke=Le.geometry,Ze=Le.material,bt=Le.group;if(Ze.side===Kt&&Ue.layers.test(F.layers)){const Ht=Ze.side;Ze.side=vt,Ze.needsUpdate=!0,Vr(Ue,q,F,Ke,Ze,bt),Ze.side=Ht,Ze.needsUpdate=!0,Pe=!0}}Pe===!0&&(Ie.updateMultisampleRenderTarget(Me),Ie.updateRenderTargetMipmap(Me)),M.setRenderTarget(_e),M.setClearColor(z,V),M.toneMapping=we}function gi(S,I,q){const F=I.isScene===!0?I.overrideMaterial:null;for(let j=0,_e=S.length;j<_e;j++){const we=S[j],Pe=we.object,De=we.geometry,ze=F===null?we.material:F,Le=we.group;Pe.layers.test(q.layers)&&Vr(Pe,I,q,De,ze,Le)}}function Vr(S,I,q,F,j,_e){S.onBeforeRender(M,I,q,F,j,_e),S.modelViewMatrix.multiplyMatrices(q.matrixWorldInverse,S.matrixWorld),S.normalMatrix.getNormalMatrix(S.modelViewMatrix),j.onBeforeRender(M,I,q,F,S,_e),j.transparent===!0&&j.side===Kt&&j.forceSinglePass===!1?(j.side=vt,j.needsUpdate=!0,M.renderBufferDirect(q,I,F,j,S,_e),j.side=ln,j.needsUpdate=!0,M.renderBufferDirect(q,I,F,j,S,_e),j.side=Kt):M.renderBufferDirect(q,I,F,j,S,_e),S.onAfterRender(M,I,q,F,j,_e)}function _i(S,I,q){I.isScene!==!0&&(I=be);const F=Be.get(S),j=p.state.lights,_e=p.state.shadowsArray,we=j.state.version,Pe=k.getParameters(S,j.state,_e,I,q),De=k.getProgramCacheKey(Pe);let ze=F.programs;F.environment=S.isMeshStandardMaterial?I.environment:null,F.fog=I.fog,F.envMap=(S.isMeshStandardMaterial?$e:Ve).get(S.envMap||F.environment),ze===void 0&&(S.addEventListener("dispose",de),ze=new Map,F.programs=ze);let Le=ze.get(De);if(Le!==void 0){if(F.currentProgram===Le&&F.lightsStateVersion===we)return Wr(S,Pe),Le}else Pe.uniforms=k.getUniforms(S),S.onBuild(q,Pe,M),S.onBeforeCompile(Pe,M),Le=k.acquireProgram(Pe,De),ze.set(De,Le),F.uniforms=Pe.uniforms;const Ue=F.uniforms;(!S.isShaderMaterial&&!S.isRawShaderMaterial||S.clipping===!0)&&(Ue.clippingPlanes=Ee.uniform),Wr(S,Pe),F.needsLights=Za(S),F.lightsStateVersion=we,F.needsLights&&(Ue.ambientLightColor.value=j.state.ambient,Ue.lightProbe.value=j.state.probe,Ue.directionalLights.value=j.state.directional,Ue.directionalLightShadows.value=j.state.directionalShadow,Ue.spotLights.value=j.state.spot,Ue.spotLightShadows.value=j.state.spotShadow,Ue.rectAreaLights.value=j.state.rectArea,Ue.ltc_1.value=j.state.rectAreaLTC1,Ue.ltc_2.value=j.state.rectAreaLTC2,Ue.pointLights.value=j.state.point,Ue.pointLightShadows.value=j.state.pointShadow,Ue.hemisphereLights.value=j.state.hemi,Ue.directionalShadowMap.value=j.state.directionalShadowMap,Ue.directionalShadowMatrix.value=j.state.directionalShadowMatrix,Ue.spotShadowMap.value=j.state.spotShadowMap,Ue.spotLightMatrix.value=j.state.spotLightMatrix,Ue.spotLightMap.value=j.state.spotLightMap,Ue.pointShadowMap.value=j.state.pointShadowMap,Ue.pointShadowMatrix.value=j.state.pointShadowMatrix);const Ke=Le.getUniforms(),Ze=Bi.seqWithValue(Ke.seq,Ue);return F.currentProgram=Le,F.uniformsList=Ze,Le}function Wr(S,I){const q=Be.get(S);q.outputColorSpace=I.outputColorSpace,q.instancing=I.instancing,q.instancingColor=I.instancingColor,q.skinning=I.skinning,q.morphTargets=I.morphTargets,q.morphNormals=I.morphNormals,q.morphColors=I.morphColors,q.morphTargetsCount=I.morphTargetsCount,q.numClippingPlanes=I.numClippingPlanes,q.numIntersection=I.numClipIntersection,q.vertexAlphas=I.vertexAlphas,q.vertexTangents=I.vertexTangents,q.toneMapping=I.toneMapping}function $a(S,I,q,F,j){I.isScene!==!0&&(I=be),Ie.resetTextureUnits();const _e=I.fog,we=F.isMeshStandardMaterial?I.environment:null,Pe=R===null?M.outputColorSpace:R.isXRRenderTarget===!0?R.texture.colorSpace:Gt,De=(F.isMeshStandardMaterial?$e:Ve).get(F.envMap||we),ze=F.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,Le=!!q.attributes.tangent&&(!!F.normalMap||F.anisotropy>0),Ue=!!q.morphAttributes.position,Ke=!!q.morphAttributes.normal,Ze=!!q.morphAttributes.color;let bt=an;F.toneMapped&&(R===null||R.isXRRenderTarget===!0)&&(bt=M.toneMapping);const Ht=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,Je=Ht!==void 0?Ht.length:0,ke=Be.get(F),ji=p.state.lights;if(pe===!0&&(me===!0||S!==y)){const yt=S===y&&F.id===O;Ee.setState(F,S,yt)}let Qe=!1;F.version===ke.__version?(ke.needsLights&&ke.lightsStateVersion!==ji.state.version||ke.outputColorSpace!==Pe||j.isInstancedMesh&&ke.instancing===!1||!j.isInstancedMesh&&ke.instancing===!0||j.isSkinnedMesh&&ke.skinning===!1||!j.isSkinnedMesh&&ke.skinning===!0||j.isInstancedMesh&&ke.instancingColor===!0&&j.instanceColor===null||j.isInstancedMesh&&ke.instancingColor===!1&&j.instanceColor!==null||ke.envMap!==De||F.fog===!0&&ke.fog!==_e||ke.numClippingPlanes!==void 0&&(ke.numClippingPlanes!==Ee.numPlanes||ke.numIntersection!==Ee.numIntersection)||ke.vertexAlphas!==ze||ke.vertexTangents!==Le||ke.morphTargets!==Ue||ke.morphNormals!==Ke||ke.morphColors!==Ze||ke.toneMapping!==bt||Ce.isWebGL2===!0&&ke.morphTargetsCount!==Je)&&(Qe=!0):(Qe=!0,ke.__version=F.version);let un=ke.currentProgram;Qe===!0&&(un=_i(F,I,j));let Yr=!1,ei=!1,$i=!1;const ft=un.getUniforms(),dn=ke.uniforms;if(Ae.useProgram(un.program)&&(Yr=!0,ei=!0,$i=!0),F.id!==O&&(O=F.id,ei=!0),Yr||y!==S){ft.setValue(P,"projectionMatrix",S.projectionMatrix),ft.setValue(P,"viewMatrix",S.matrixWorldInverse);const yt=ft.map.cameraPosition;yt!==void 0&&yt.setValue(P,ee.setFromMatrixPosition(S.matrixWorld)),Ce.logarithmicDepthBuffer&&ft.setValue(P,"logDepthBufFC",2/(Math.log(S.far+1)/Math.LN2)),(F.isMeshPhongMaterial||F.isMeshToonMaterial||F.isMeshLambertMaterial||F.isMeshBasicMaterial||F.isMeshStandardMaterial||F.isShaderMaterial)&&ft.setValue(P,"isOrthographic",S.isOrthographicCamera===!0),y!==S&&(y=S,ei=!0,$i=!0)}if(j.isSkinnedMesh){ft.setOptional(P,j,"bindMatrix"),ft.setOptional(P,j,"bindMatrixInverse");const yt=j.skeleton;yt&&(Ce.floatVertexTextures?(yt.boneTexture===null&&yt.computeBoneTexture(),ft.setValue(P,"boneTexture",yt.boneTexture,Ie),ft.setValue(P,"boneTextureSize",yt.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const Ki=q.morphAttributes;if((Ki.position!==void 0||Ki.normal!==void 0||Ki.color!==void 0&&Ce.isWebGL2===!0)&&ye.update(j,q,un),(ei||ke.receiveShadow!==j.receiveShadow)&&(ke.receiveShadow=j.receiveShadow,ft.setValue(P,"receiveShadow",j.receiveShadow)),F.isMeshGouraudMaterial&&F.envMap!==null&&(dn.envMap.value=De,dn.flipEnvMap.value=De.isCubeTexture&&De.isRenderTargetTexture===!1?-1:1),ei&&(ft.setValue(P,"toneMappingExposure",M.toneMappingExposure),ke.needsLights&&Ka(dn,$i),_e&&F.fog===!0&&ae.refreshFogUniforms(dn,_e),ae.refreshMaterialUniforms(dn,F,J,te,Me),Bi.upload(P,ke.uniformsList,dn,Ie)),F.isShaderMaterial&&F.uniformsNeedUpdate===!0&&(Bi.upload(P,ke.uniformsList,dn,Ie),F.uniformsNeedUpdate=!1),F.isSpriteMaterial&&ft.setValue(P,"center",j.center),ft.setValue(P,"modelViewMatrix",j.modelViewMatrix),ft.setValue(P,"normalMatrix",j.normalMatrix),ft.setValue(P,"modelMatrix",j.matrixWorld),F.isShaderMaterial||F.isRawShaderMaterial){const yt=F.uniformsGroups;for(let Zi=0,Ja=yt.length;Zi<Ja;Zi++)if(Ce.isWebGL2){const Xr=yt[Zi];ge.update(Xr,un),ge.bind(Xr,un)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return un}function Ka(S,I){S.ambientLightColor.needsUpdate=I,S.lightProbe.needsUpdate=I,S.directionalLights.needsUpdate=I,S.directionalLightShadows.needsUpdate=I,S.pointLights.needsUpdate=I,S.pointLightShadows.needsUpdate=I,S.spotLights.needsUpdate=I,S.spotLightShadows.needsUpdate=I,S.rectAreaLights.needsUpdate=I,S.hemisphereLights.needsUpdate=I}function Za(S){return S.isMeshLambertMaterial||S.isMeshToonMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isShadowMaterial||S.isShaderMaterial&&S.lights===!0}this.getActiveCubeFace=function(){return v},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return R},this.setRenderTargetTextures=function(S,I,q){Be.get(S.texture).__webglTexture=I,Be.get(S.depthTexture).__webglTexture=q;const F=Be.get(S);F.__hasExternalTextures=!0,F.__hasExternalTextures&&(F.__autoAllocateDepthBuffer=q===void 0,F.__autoAllocateDepthBuffer||Se.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),F.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(S,I){const q=Be.get(S);q.__webglFramebuffer=I,q.__useDefaultFramebuffer=I===void 0},this.setRenderTarget=function(S,I=0,q=0){R=S,v=I,A=q;let F=!0,j=null,_e=!1,we=!1;if(S){const De=Be.get(S);De.__useDefaultFramebuffer!==void 0?(Ae.bindFramebuffer(P.FRAMEBUFFER,null),F=!1):De.__webglFramebuffer===void 0?Ie.setupRenderTarget(S):De.__hasExternalTextures&&Ie.rebindTextures(S,Be.get(S.texture).__webglTexture,Be.get(S.depthTexture).__webglTexture);const ze=S.texture;(ze.isData3DTexture||ze.isDataArrayTexture||ze.isCompressedArrayTexture)&&(we=!0);const Le=Be.get(S).__webglFramebuffer;S.isWebGLCubeRenderTarget?(Array.isArray(Le[I])?j=Le[I][q]:j=Le[I],_e=!0):Ce.isWebGL2&&S.samples>0&&Ie.useMultisampledRTT(S)===!1?j=Be.get(S).__webglMultisampledFramebuffer:Array.isArray(Le)?j=Le[q]:j=Le,w.copy(S.viewport),ne.copy(S.scissor),$=S.scissorTest}else w.copy(H).multiplyScalar(J).floor(),ne.copy(B).multiplyScalar(J).floor(),$=W;if(Ae.bindFramebuffer(P.FRAMEBUFFER,j)&&Ce.drawBuffers&&F&&Ae.drawBuffers(S,j),Ae.viewport(w),Ae.scissor(ne),Ae.setScissorTest($),_e){const De=Be.get(S.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_CUBE_MAP_POSITIVE_X+I,De.__webglTexture,q)}else if(we){const De=Be.get(S.texture),ze=I||0;P.framebufferTextureLayer(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,De.__webglTexture,q||0,ze)}O=-1},this.readRenderTargetPixels=function(S,I,q,F,j,_e,we){if(!(S&&S.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Pe=Be.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&we!==void 0&&(Pe=Pe[we]),Pe){Ae.bindFramebuffer(P.FRAMEBUFFER,Pe);try{const De=S.texture,ze=De.format,Le=De.type;if(ze!==Nt&&X.convert(ze)!==P.getParameter(P.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Ue=Le===di&&(Se.has("EXT_color_buffer_half_float")||Ce.isWebGL2&&Se.has("EXT_color_buffer_float"));if(Le!==on&&X.convert(Le)!==P.getParameter(P.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Le===rn&&(Ce.isWebGL2||Se.has("OES_texture_float")||Se.has("WEBGL_color_buffer_float")))&&!Ue){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}I>=0&&I<=S.width-F&&q>=0&&q<=S.height-j&&P.readPixels(I,q,F,j,X.convert(ze),X.convert(Le),_e)}finally{const De=R!==null?Be.get(R).__webglFramebuffer:null;Ae.bindFramebuffer(P.FRAMEBUFFER,De)}}},this.copyFramebufferToTexture=function(S,I,q=0){const F=Math.pow(2,-q),j=Math.floor(I.image.width*F),_e=Math.floor(I.image.height*F);Ie.setTexture2D(I,0),P.copyTexSubImage2D(P.TEXTURE_2D,q,0,0,S.x,S.y,j,_e),Ae.unbindTexture()},this.copyTextureToTexture=function(S,I,q,F=0){const j=I.image.width,_e=I.image.height,we=X.convert(q.format),Pe=X.convert(q.type);Ie.setTexture2D(q,0),P.pixelStorei(P.UNPACK_FLIP_Y_WEBGL,q.flipY),P.pixelStorei(P.UNPACK_PREMULTIPLY_ALPHA_WEBGL,q.premultiplyAlpha),P.pixelStorei(P.UNPACK_ALIGNMENT,q.unpackAlignment),I.isDataTexture?P.texSubImage2D(P.TEXTURE_2D,F,S.x,S.y,j,_e,we,Pe,I.image.data):I.isCompressedTexture?P.compressedTexSubImage2D(P.TEXTURE_2D,F,S.x,S.y,I.mipmaps[0].width,I.mipmaps[0].height,we,I.mipmaps[0].data):P.texSubImage2D(P.TEXTURE_2D,F,S.x,S.y,we,Pe,I.image),F===0&&q.generateMipmaps&&P.generateMipmap(P.TEXTURE_2D),Ae.unbindTexture()},this.copyTextureToTexture3D=function(S,I,q,F,j=0){if(M.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const _e=S.max.x-S.min.x+1,we=S.max.y-S.min.y+1,Pe=S.max.z-S.min.z+1,De=X.convert(F.format),ze=X.convert(F.type);let Le;if(F.isData3DTexture)Ie.setTexture3D(F,0),Le=P.TEXTURE_3D;else if(F.isDataArrayTexture)Ie.setTexture2DArray(F,0),Le=P.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}P.pixelStorei(P.UNPACK_FLIP_Y_WEBGL,F.flipY),P.pixelStorei(P.UNPACK_PREMULTIPLY_ALPHA_WEBGL,F.premultiplyAlpha),P.pixelStorei(P.UNPACK_ALIGNMENT,F.unpackAlignment);const Ue=P.getParameter(P.UNPACK_ROW_LENGTH),Ke=P.getParameter(P.UNPACK_IMAGE_HEIGHT),Ze=P.getParameter(P.UNPACK_SKIP_PIXELS),bt=P.getParameter(P.UNPACK_SKIP_ROWS),Ht=P.getParameter(P.UNPACK_SKIP_IMAGES),Je=q.isCompressedTexture?q.mipmaps[0]:q.image;P.pixelStorei(P.UNPACK_ROW_LENGTH,Je.width),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,Je.height),P.pixelStorei(P.UNPACK_SKIP_PIXELS,S.min.x),P.pixelStorei(P.UNPACK_SKIP_ROWS,S.min.y),P.pixelStorei(P.UNPACK_SKIP_IMAGES,S.min.z),q.isDataTexture||q.isData3DTexture?P.texSubImage3D(Le,j,I.x,I.y,I.z,_e,we,Pe,De,ze,Je.data):q.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),P.compressedTexSubImage3D(Le,j,I.x,I.y,I.z,_e,we,Pe,De,Je.data)):P.texSubImage3D(Le,j,I.x,I.y,I.z,_e,we,Pe,De,ze,Je),P.pixelStorei(P.UNPACK_ROW_LENGTH,Ue),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,Ke),P.pixelStorei(P.UNPACK_SKIP_PIXELS,Ze),P.pixelStorei(P.UNPACK_SKIP_ROWS,bt),P.pixelStorei(P.UNPACK_SKIP_IMAGES,Ht),j===0&&F.generateMipmaps&&P.generateMipmap(Le),Ae.unbindTexture()},this.initTexture=function(S){S.isCubeTexture?Ie.setTextureCube(S,0):S.isData3DTexture?Ie.setTexture3D(S,0):S.isDataArrayTexture||S.isCompressedArrayTexture?Ie.setTexture2DArray(S,0):Ie.setTexture2D(S,0),Ae.unbindTexture()},this.resetState=function(){v=0,A=0,R=null,Ae.reset(),ce.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Zt}get physicallyCorrectLights(){return console.warn("THREE.WebGLRenderer: The property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),!this.useLegacyLights}set physicallyCorrectLights(e){console.warn("THREE.WebGLRenderer: The property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),this.useLegacyLights=!e}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===qe?Mn:Ra}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===Mn?qe:Gt}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class Sf extends Xa{}Sf.prototype.isWebGL1Renderer=!0;class Tf extends St{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}}class Hi extends cn{constructor(e=1,t=32,n=16,r=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:r,phiLength:s,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const l=Math.min(o+a,Math.PI);let u=0;const c=[],f=new N,h=new N,m=[],_=[],g=[],p=[];for(let d=0;d<=n;d++){const T=[],M=d/n;let E=0;d===0&&o===0?E=.5/t:d===n&&l===Math.PI&&(E=-.5/t);for(let v=0;v<=t;v++){const A=v/t;f.x=-e*Math.cos(r+A*s)*Math.sin(o+M*a),f.y=e*Math.cos(o+M*a),f.z=e*Math.sin(r+A*s)*Math.sin(o+M*a),_.push(f.x,f.y,f.z),h.copy(f).normalize(),g.push(h.x,h.y,h.z),p.push(A+E,1-M),T.push(u++)}c.push(T)}for(let d=0;d<n;d++)for(let T=0;T<t;T++){const M=c[d][T+1],E=c[d][T],v=c[d+1][T],A=c[d+1][T+1];(d!==0||o>0)&&m.push(M,E,A),(d!==n-1||l<Math.PI)&&m.push(E,v,A)}this.setIndex(m),this.setAttribute("position",new kt(_,3)),this.setAttribute("normal",new kt(g,3)),this.setAttribute("uv",new kt(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Hi(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}const ua={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(this.files[i]=e)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};class qa{constructor(e,t,n){const r=this;let s=!1,o=0,a=0,l;const u=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(c){a++,s===!1&&r.onStart!==void 0&&r.onStart(c,o,a),s=!0},this.itemEnd=function(c){o++,r.onProgress!==void 0&&r.onProgress(c,o,a),o===a&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(c){r.onError!==void 0&&r.onError(c)},this.resolveURL=function(c){return l?l(c):c},this.setURLModifier=function(c){return l=c,this},this.addHandler=function(c,f){return u.push(c,f),this},this.removeHandler=function(c){const f=u.indexOf(c);return f!==-1&&u.splice(f,2),this},this.getHandler=function(c){for(let f=0,h=u.length;f<h;f+=2){const m=u[f],_=u[f+1];if(m.global&&(m.lastIndex=0),m.test(c))return _}return null}}}const bf=new qa;class kr{constructor(e){this.manager=e!==void 0?e:bf,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(r,s){n.load(e,r,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}kr.DEFAULT_MATERIAL_NAME="__DEFAULT";class wf extends kr{constructor(e){super(e)}load(e,t,n,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,o=ua.get(e);if(o!==void 0)return s.manager.itemStart(e),setTimeout(function(){t&&t(o),s.manager.itemEnd(e)},0),o;const a=fi("img");function l(){c(),ua.add(e,this),t&&t(this),s.manager.itemEnd(e)}function u(f){c(),r&&r(f),s.manager.itemError(e),s.manager.itemEnd(e)}function c(){a.removeEventListener("load",l,!1),a.removeEventListener("error",u,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",u,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),s.manager.itemStart(e),a.src=e,a}}class da extends kr{constructor(e){super(e)}load(e,t,n,r){const s=new xt,o=new wf(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){s.image=a,s.needsUpdate=!0,t!==void 0&&t(s)},n,r),s}}class ha{constructor(e=1,t=0,n=0){return this.radius=e,this.phi=t,this.theta=n,this}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(dt(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Ur}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Ur);var Af=function(i,e){this.object=i,this.rotateSpeed=.35,this.dampingFactor=.1,this.thetaMin=1/0,this.thetaMax=-1/0,this.phiMin=Ft.degToRad(170),this.phiMax=Ft.degToRad(10),this.enabled=!0,this.target=new ai,this.update=function(){if(h.enabled===!1){n.theta=0,n.phi=0;return}t.theta+=n.theta*h.dampingFactor,t.phi+=n.phi*h.dampingFactor,t.theta=Math.max(h.thetaMax,Math.min(h.thetaMin,t.theta)),t.phi=Math.max(h.phiMax,Math.min(h.phiMin,t.phi)),o.setFromSphericalCoords(Math.PI,t.phi,t.theta).add(h.target.position),n.theta*=1-h.dampingFactor,n.phi*=1-h.dampingFactor,i.lookAt(o)},this.setCameraRotation=function(g){t.theta+=Ft.degToRad(g)},this.resetCameraRotation=function(g){t.theta=Ft.degToRad(g),t.phi=Ft.degToRad(90)},this.resetCameraViewLimit=function(){h.thetaMin=r.thetaMin,h.thetaMax=r.thetaMax,h.phiMin=r.phiMin,h.phiMax=r.phiMax},this.getRotation=function(){let g=Ft.radToDeg(t.theta);return g%=360,g<0&&(g+=360),g};var t=new ha,n=new ha,r={thetaMin:0,thetaMax:0,phiMin:0,phiMax:0},s=new N,o=new N,a=new Jn,l=!1,u=!1,c=0,f=0,h=this;function m(){a=i.quaternion,s.set(0,0,-1).applyQuaternion(a),t.setFromVector3(s),h.target.add(i),r={thetaMin:h.thetaMin,thetaMax:h.thetaMax,phiMin:h.phiMin,phiMax:h.phiMax}}var _={onMouseDown:function(g){g.preventDefault(),c=g.clientX,f=g.clientY,l=!0},onMouseMove:function(g){if(l&&h.enabled){g.preventDefault();var p=c-g.clientX,d=f-g.clientY;c=g.clientX,f=g.clientY,n.theta-=2*Math.PI*p/e.clientWidth*h.rotateSpeed,n.phi-=-(2*Math.PI*d/e.clientHeight)*h.rotateSpeed}},onMouseUp:function(g){g.preventDefault(),l=!1},onContextMenu:function(g){g.preventDefault()},onTouchStart:function(g){g.preventDefault(),u=!0,c=g.touches[0].clientX,f=g.touches[0].clientY},onTouchMove:function(g){if(g.touches.length==1&&u&&h.enabled){g.preventDefault();var p=c-g.touches[0].clientX,d=f-g.touches[0].clientY;c=g.touches[0].clientX,f=g.touches[0].clientY,n.theta-=2*Math.PI*p/e.clientWidth*h.rotateSpeed,n.phi-=-(2*Math.PI*d/e.clientHeight)*h.rotateSpeed}},onTouchCancel:function(g){g.preventDefault(),u=!1},onTouchEnd:function(g){g.preventDefault(),u=!1}};m(),e.addEventListener("mousedown",_.onMouseDown,!1),e.addEventListener("mousemove",_.onMouseMove,!1),e.addEventListener("mouseup",_.onMouseUp,!1),e.addEventListener("contextmenu",_.onContextMenu,!1),e.addEventListener("touchstart",_.onTouchStart,{passive:!1}),e.addEventListener("touchmove",_.onTouchMove,{passive:!1}),e.addEventListener("touchcancel",_.onTouchCancel,!1),e.addEventListener("touchend",_.onTouchEnd,!1)},Rf=function(i){this.preload=function(K,Y,ee,be,xe,P){be!==void 0&&be(),s.map=new da().load(K,function(Fe){xe!==void 0&&xe(),W(),Y!==void 0&&B(Y),pe(),ee!==void 0&&fe(ee),Fe.colorSpace=qe},void 0,function(Fe){P!==void 0&&P(Fe),console.log("Failed to load texture panorama : "+Fe.target.statusText)})},this.load=function(K,Y,ee,be,xe,P){be!==void 0&&(be(),l.map=s.map,l.opacity=1,c=0,m=0),new da(e).load(K,function(Fe){xe!==void 0&&xe(),W(),R=Y,pe(),te=ee,a.visible=!0,u=!0,Fe.colorSpace=qe,s.map=Fe},void 0,function(Fe){P!==void 0&&P(Fe),console.log("Failed to load texture panorama : "+Fe.target.statusText)})},this.panoramaOffset=function(K){var Y=Ft.degToRad(K);o.rotateOnAxis(new N(0,1,0),Y),a.rotateOnAxis(new N(0,1,0),Y)},this.panoramaCameraRotation=function(K){g.setCameraRotation(K)},this.resetCamera=function(K){g.resetCameraRotation(K)},this.setCameraViewLimit=function(K,Y,ee,be){K!==null&&(g.thetaMin=K),Y!==null&&(g.thetaMax=Y),ee!==null&&(g.phiMin=ee),be!==null&&(g.phiMax=be)},this.resetCameraViewLimit=function(){g.resetCameraViewLimit()},this.update=function(){if(E)for(let ee=0;ee<A.length;ee++){var K=new N(v[ee].coordinate.x,v[ee].coordinate.y,v[ee].coordinate.z);if(K.project(t),Math.abs(K.z)>1)A[ee].style.display="none";else{const be=(K.x*.5+.5)*r.domElement.clientWidth,xe=(K.y*-.5+.5)*r.domElement.clientHeight;A[ee].style.left=-(parseInt(A[ee].clientWidth,10)/2)+be+"px",A[ee].style.top=-(parseInt(A[ee].clientHeight,10)/2)+xe+"px",A[ee].style.display=""}}if(z)for(let ee=0;ee<U.length;ee++){let be=new N(V[ee].coordinate.x,V[ee].coordinate.y,V[ee].coordinate.z);if(be.project(t),Math.abs(be.z)>1)U[ee].style.display="none";else{const xe=(be.x*.5+.5)*r.domElement.clientWidth,P=(be.y*-.5+.5)*r.domElement.clientHeight;U[ee].style.left=-(parseInt(U[ee].clientWidth,10)/2)+xe+"px",U[ee].style.top=-(parseInt(U[ee].clientHeight,10)/2)+P+"px",U[ee].style.display=""}}if(u&&(m+=.005,m>_&&(m=_),g.target.position.lerp(h,m),o.position.copy(g.target.position),m>_*.35)){c+=.01,c>f&&(c=f);var Y=Ft.lerp(1,0,c/f);if(l.opacity=Y,c===f){if(u=!1,a.visible=!1,g.target.position.set(0,0,0),o.position.set(0,0,0),a.position.set(0,0,0),h.set(0,0,0),g.enabled=!0,R!==void 0)if(B(R),O===!0)for(let ee=0;ee<A.length;ee++)A[ee].style.visibility="visible";else for(let ee=0;ee<A.length;ee++)A[ee].style.visibility="hidden";if(te!==void 0)if(fe(te),J===!0)for(let ee=0;ee<U.length;ee++)U[ee].style.visibility="visible";else for(let ee=0;ee<U.length;ee++)U[ee].style.visibility="hidden"}}g.update(),r.render(n,t)},this.setActive=function(K){g.enabled=K,p=K},this.showNavigationPoints=function(K){if(A.length!==0)if(O=K,O===!0)for(let Y=0;Y<A.length;Y++)A[Y].style.visibility="visible";else for(let Y=0;Y<A.length;Y++)A[Y].style.visibility="hidden"},this.isShowNavigationPoints=function(){return O},this.showInfoPoints=function(K){if(U.length!==0)if(J=K,J===!0)for(let Y=0;Y<U.length;Y++)U[Y].style.visibility="visible";else for(let Y=0;Y<A.length;Y++)U[Y].style.visibility="hidden"},this.isShowInfoPoints=function(){return J},this.onLabelClicked=function(K){$=K},this.onInfoLabelClicked=function(K){Q=K},this.getCameraRotation=function(){return g.getRotation()};var e=null,t=null,n=null,r=null,s=null,o=null,a=null,l=null,u=!1,c=0,f=.3,h=new N,m=0,_=.3,g=null,p=!1,d=!1,T=0,M=document.getElementById(i),E=!1,v=void 0,A=[],R=[],O=!0,y=!1,w=0,ne=0,$=void 0,z=!1,V=void 0,U=[],te=[],J=!0,Q=void 0;function ie(){r=new Xa,r.setPixelRatio(window.devicePixelRatio),r.setSize(window.innerWidth,window.innerHeight),M.appendChild(r.domElement),t=new Rt(75,window.innerWidth/window.innerHeight,.1,1e3),g=new Af(t,M),g.rotateSpeed=.3,g.dampingFactor=.1,g.update(),e=new qa,e.onStart=function(ee,be,xe){g.enabled=!1},e.onLoad=function(){},e.onProgress=void 0;var K=new Hi(150,60,40);K.scale(-1,1,1);var Y=new Hi(100,60,40);Y.scale(-1,1,1),s=new Gi,l=new Gi({transparent:!0,opacity:1}),o=new Bt(K,s),a=new Bt(Y,l),a.visible=!1,n=new Tf,n.add(o),n.add(a),n.add(g.target)}function H(K){if(p!==!1){var Y=t.fov+K;t.fov=Ft.clamp(Y,50,75),t.updateProjectionMatrix()}}function B(K){A=[K.length];for(var Y=0;Y<K.length;Y++)if(K[Y].url!==""){const ee=K[Y].url,be=K[Y].coordinate,xe=K[Y].lockY;A[Y]=document.createElement("div"),A[Y].className=xe===!0?"panorama-navigation-point unselectable":"panorama-navigation-point-fly unselectable",M.appendChild(A[Y]),A[Y].classList.add("panorama-navigation-point--clickable"),A[Y].addEventListener("click",function(){var P=xe===!0?t.position.y:be.y,Fe=new N(be.x,P,be.z),Se=t.position.clone(),Ce=new N().subVectors(Fe,Se).normalize().multiplyScalar(50);h.set(Ce.x,Ce.y,Ce.z),$!==void 0&&$(ee)},!1),A[Y].addEventListener("touchend",function(P){y&&P.target.click(),P.preventDefault()},!1)}setTimeout(function(){for(var ee=0;ee<A.length;ee++)A[ee].classList.add("panorama-navigation-point-transition")},10),v=K,E=!0}function W(){for(var K=A.length,Y=0;Y<K;Y++)M.removeChild(A[Y]);E=!1,v=void 0,A=[]}function fe(K){U=[K.length];for(var Y=0;Y<K.length;Y++)if(K[Y].url!==""){const ee=K[Y].content,be=K[Y].name,xe=K[Y].width,P=K[Y].height;U[Y]=document.createElement("div"),U[Y].className="panorama-info-point unselectable",M.appendChild(U[Y]),U[Y].classList.add("panorama-info-point--clickable"),U[Y].addEventListener("click",function(){Q!==void 0&&Q(be,ee,xe,P)},!1),U[Y].addEventListener("touchend",function(Fe){y&&Fe.target.click(),Fe.preventDefault()},!1)}setTimeout(function(){for(var ee=0;ee<U.length;ee++)U[ee].classList.add("panorama-info-point-transition")},10),V=K,z=!0}function pe(){for(var K=U.length,Y=0;Y<K;Y++)M.removeChild(U[Y]);z=!1,V=void 0,U=[]}var me={onResize:function(){t.aspect=window.innerWidth/window.innerHeight,t.updateProjectionMatrix(),r.setSize(window.innerWidth,window.innerHeight)}},Me={onTouchStart:function(K){y=!0,w=K.touches[0].clientX,ne=K.touches[0].clientY,K.preventDefault()},onTouchMove:function(K){var Y=K.touches[0].clientX-w,ee=K.touches[0].clientY-ne,be=30;if(Math.sqrt(Y*Y+ee*ee)>be&&(y=!1),K.touches.length==2){var xe=K.touches[0].clientX-K.touches[1].clientX,P=K.touches[0].clientY-K.touches[1].clientY,Fe=Math.sqrt(xe*xe+P*P);d===!1&&(d=!0,T=Fe);var Se=T-Fe;T=Fe,H(Se*.2)}K.preventDefault()},onTouchEnd:function(K){y=!1,d=!1,K.preventDefault()},onTouchCancel:function(K){y=!1,d=!1,K.preventDefault()},onMouseDown:function(K){M.style.cursor="move"},onMouseUp:function(K){M.style.cursor="default"},onMouseWheel:function(K){var Y=0;K.deltaY>.1?Y=5:K.deltaY<-.1&&(Y=-5),H(Y)}};ie(),window.addEventListener("resize",me.onResize,!1),M.addEventListener("touchstart",Me.onTouchStart,{passive:!1}),M.addEventListener("touchmove",Me.onTouchMove,{passive:!1}),M.addEventListener("touchend",Me.onTouchCancel,!1),M.addEventListener("touchcancel",Me.onTouchEnd,!1),M.addEventListener("mousedown",Me.onMouseDown,!1),M.addEventListener("mouseup",Me.onMouseUp,!1),M.addEventListener("wheel",Me.onMouseWheel,{passive:!1})},fa=function(i,e,t,n,r,s,o){this.maxScale=1,this.dampingFactor=.2,this.init=function(v){f.width=s,f.height=o,n.style.width=`${s}px`,n.style.height=`${o}px`,i.style.display=v?"block":"none",h=Math.min(e.clientWidth/s,e.clientHeight/o),h>d.maxScale&&(h=d.maxScale),m=h,t.style.transform=`scale(${h}) translate(-50%, -50%)`,T=!1},this.setImage=function(v,A,R){f.width=A,f.height=R,l.x=0,l.y=0,r.src=v,n.style.width=`${A}px`,n.style.height=`${R}px`,i.style.display="block",h=Math.min(e.clientWidth/A,e.clientHeight/R),m=h,t.style.transform=`scale(${h}) translate(-50%, -50%)`,T=!1},this.setContentPoints=function(v,A){for(let R=0;R<v.length;R++){if(v[R].clickable===!1)continue;let O=document.createElement("a");O.innerText=v[R].name,O.classList.add("content-label"),O.addEventListener("click",function(){A!==void 0&&A(v[R].url)}),M.push(O),n.appendChild(O),O.style.left=v[R].coordinate.x+"px",O.style.top=v[R].coordinate.y+"px"}},this.update=function(){if(T===!1){c={x:0,y:0},_=0;return}h+=_*d.dampingFactor,h=Math.min(Math.max(m,h),d.maxScale),l.x-=c.x/h*d.dampingFactor,l.y-=c.y/h*d.dampingFactor;let v={w:h*f.width,h:h*f.height},A=2*h;if(v.w>e.clientWidth){let R=(v.w-e.clientWidth)/A;l.x=Math.min(Math.max(l.x,-R),R)}else l.x=0;if(v.h>e.clientHeight){let R=(v.h-e.clientHeight)/A;l.y=Math.min(Math.max(l.y,-R),R)}else l.y=0;t.style.transform=`scale(${h}) translate(calc(-50% + ${l.x}px), calc(-50% + ${l.y}px))`,_*=1-d.dampingFactor,c.x*=1-d.dampingFactor,c.y*=1-d.dampingFactor},this.resize=function(){l={x:0,y:0},h=Math.min(e.clientWidth/f.width,e.clientHeight/f.height),h>d.maxScale&&(h=d.maxScale),m=h,t.style.transform=`scale(${h}) translate(calc(-50% + ${l.x}px), calc(-50% + ${l.y}px))`},this.enabled=function(v){T=v},this.reset=function(v){T=!1,m=Math.min(e.clientWidth/f.width,e.clientHeight/f.height);let A=(1-v)*h+v*m,R=(1-v)*l.x+v*0,O=(1-v)*l.y+v*0;t.style.transform=`scale(${A}) translate(calc(-50% + ${R}px), calc(-50% + ${O}px))`,e.style.cursor="pointer"},this.showPoints=function(v){for(let A=0;A<M.length;A++)M[A].style.display=v?"block":"none"},this.clearPoints=function(){for(let v=0;v<M.length;v++)n.removeChild(M[v]);M=[]};let a=!1,l={x:0,y:0},u={x:0,y:0},c={x:0,y:0},f={width:0,height:0},h=0,m=0,_=0,g=!1,p=0,d=this,T=!1,M=[];window.addEventListener("resize",function(){d.resize()}),i.addEventListener("contextmenu",v=>v.preventDefault());let E={onMouseWheel:function(v){v.deltaY>.01?_-=.05:v.deltaY<-.01&&(_+=.05),v.preventDefault()},onMouseDown:function(v){a=!0,u.x=v.clientX,u.y=v.clientY,T&&(this.style.cursor="grabbing")},onMouseMove:function(v){a&&(c.x+=u.x-v.clientX,c.y+=u.y-v.clientY,u.x=v.clientX,u.y=v.clientY,v.preventDefault())},onMouseUp:function(v){a=!1,T&&(this.style.cursor="grab")},onMouseOut:function(v){a=!1,T&&(this.style.cursor="grab")},onTouchStart:function(v){u.x=v.touches[0].clientX,u.y=v.touches[0].clientY,v.touches.length===2&&v.preventDefault()},onTouchMove:function(v){if(v.touches.length===1)c.x+=u.x-v.touches[0].clientX,c.y+=u.y-v.touches[0].clientY,u.x=v.touches[0].clientX,u.y=v.touches[0].clientY;else if(v.touches.length===2){const A=v.touches[0].clientX-v.touches[1].clientX,R=v.touches[0].clientY-v.touches[1].clientY,O=Math.sqrt(A*A+R*R);g===!1&&(g=!0,p=O);let y=p-O;p=O,_-=y*.002}v.preventDefault()},onTouchCancel:function(v){v.touches.length===2&&v.preventDefault(),g=!1,v.touches.length>0&&(u.x=v.touches[0].clientX,u.y=v.touches[0].clientY)},onTouchEnd:function(v){v.touches.length===2&&v.preventDefault(),g=!1,v.touches.length>0&&(u.x=v.touches[0].clientX,u.y=v.touches[0].clientY)}};e.addEventListener("wheel",E.onMouseWheel,{passive:!1}),e.addEventListener("mousedown",E.onMouseDown),e.addEventListener("mousemove",E.onMouseMove),e.addEventListener("mouseup",E.onMouseUp),e.addEventListener("mouseout",E.onMouseOut),e.addEventListener("touchstart",E.onTouchStart,{passive:!1}),e.addEventListener("touchmove",E.onTouchMove,{passive:!1}),e.addEventListener("touchcancel",E.onTouchCancel,!1),e.addEventListener("touchend",E.onTouchEnd,!1)},pa=function(i,e,t,n){this.recompute=function(){const p=window.getComputedStyle(i),d=window.getComputedStyle(e);if(r=parseInt(p.getPropertyValue("height"),10),s=parseInt(d.getPropertyValue("height"),10),r>s)t.style.display="none",n.style.height="0px",n.style.top="0px",e.style.top="0px",h=!1,f=0;else{t.style.display="block",h=!0;const T=Math.min(Math.max(r/s,0),1);a=Math.round(T*r),o=r-a,f=Math.min(Math.max(f,0),s-r);const M=f/(s-r);n.style.height=`${a}px`,n.style.top=`${Math.round(M*o)}px`,e.style.top=`${-1*f}px`}},this.isSliding=function(){return u};let r=0,s=0,o=0,a=0,l=!1,u=!1,c=0,f=0,h=!1;function m(){const p=window.getComputedStyle(i),d=window.getComputedStyle(e);if(r=parseInt(p.getPropertyValue("height"),10),s=parseInt(d.getPropertyValue("height"),10),r>s)t.style.display="none",h=!1;else{t.style.display="block",h=!0;const T=Math.min(Math.max(r/s,0),1);a=Math.round(T*r),o=r-a,n.style.height=`${a}px`}}let _={onMousedown:function(p){l=!0,u=!1,c=p.clientY},onMousemove:function(p){if(l&&h){u=!0;let d=c-p.clientY;f+=d,f=Math.min(Math.max(f,0),s-r);const T=f/(s-r);n.style.top=`${Math.round(T*o)}px`,e.style.top=`${-1*f}px`,c=p.clientY}p.preventDefault()},onMouseup:function(p){l=!1},onWheelScroll:function(p){if(h){f+=p.deltaY*.3,f=Math.min(Math.max(f,0),s-r);const d=f/(s-r);n.style.top=`${Math.round(d*o)}px`,e.style.top=`${-1*f}px`,c=p.clientY}}},g={onTouchstart:function(p){l=!0,u=!1,c=p.touches[0].clientY},onTouchmove:function(p){if(l&&h){u=!0;let d=c-p.touches[0].clientY;f+=d,f=Math.min(Math.max(f,0),s-r);const T=f/(s-r);n.style.top=`${Math.round(T*o)}px`,e.style.top=`${-1*f}px`,c=p.touches[0].clientY}p.preventDefault()},onTouchendOrCancel:function(p){l=!1}};m(),e.addEventListener("mousedown",_.onMousedown),e.addEventListener("mousemove",_.onMousemove),e.addEventListener("wheel",_.onWheelScroll),e.addEventListener("mouseup",_.onMouseup),e.addEventListener("touchstart",g.onTouchstart,{passive:!1}),e.addEventListener("touchmove",g.onTouchmove,{passive:!1}),e.addEventListener("touchend",g.onTouchendOrCancel,!1),e.addEventListener("touchcancel",g.onTouchendOrCancel,!1),e.addEventListener("contextmenu",function(p){p.preventDefault()})},_t=function(i,e,t,n){this.update=function(h){l=h},this.start=function(h){a===0&&(a=h);const m=(h-a)*.001;o+=m,o=Math.max(Math.min(o,s),0);let _=e-i;const g=f(o,i,_,s);l(g),a=h,o===s?u!==void 0&&u():window.requestAnimationFrame(r.start)},this.onCompleted=function(h){u=h},this.reset=function(){o=0,a=0};let r=this,s=0,o=0,a=0,l,u;function c(){s=t,u=n}function f(h,m,_,g){return h/=g/2,h<1?_/2*h*h+m:(h--,-_/2*(h*(h-2)-1)+m)}c()},Cf=function(i,e,t,n){this.reset=function(){a[c.y][c.x].style.display="none",c={x:0,y:0},a[c.y][c.x].style.display="block"},this.init=function(){if(!(s||r)){f!==void 0&&f();for(let E=0;E<n;E++){a.push([]);for(let v=0;v<t;v++)o.push(new Promise((A,R)=>{const O=e[E][v],y=new Image;y.classList.add("image-sequence"),y.style.display="none",y.src=O,y.addEventListener("load",()=>{A(!0),l++,h!==void 0&&h(l,u)}),y.addEventListener("error",R),a[E].push(y)}))}Promise.all(o).then(E=>{for(let v=0;v<a.length;v++)for(let A=0;A<a[v].length;A++)i.appendChild(a[v][A]);a[0][0].style.display="block",s=!0,m!==void 0&&m()}),r=!0}},this.onInit=function(E){f=E},this.onProgress=function(E){h=E},this.onLoadComplete=function(E){m=E};let r=!1,s=!1,o=[],a=[],l=0;const u=t*n;let c={x:0,y:0},f,h,m,_=!1,g={x:0,y:0},p={onMouseDown:E=>{s!==!1&&(_=!0,g.x=E.clientX,g.y=E.clientY,E.preventDefault())},onMouseMove:E=>{if(_){let v=g.x-E.clientX,A=g.y-E.clientY;Math.abs(v)>25&&(v>0?(a[c.y][c.x].style.display="none",c.x+=1,c.x>=t&&(c.x-=t),a[c.y][c.x].style.display="block"):(a[c.y][c.x].style.display="none",c.x-=1,c.x<0&&(c.x+=t),a[c.y][c.x].style.display="block"),g.x=E.clientX,v=0),Math.abs(A)>25&&(A>0?(a[c.y][c.x].style.display="none",c.y-=1,c.y<0&&(c.y=0),a[c.y][c.x].style.display="block"):(a[c.y][c.x].style.display="none",c.y+=1,c.y>=n&&(c.y=n-1),a[c.y][c.x].style.display="block"),g.y=E.clientY,A=0)}E.preventDefault()},onMouseUp:E=>{_=!1}};i.addEventListener("mousedown",p.onMouseDown),i.addEventListener("mousemove",p.onMouseMove),i.addEventListener("mouseup",p.onMouseUp),i.addEventListener("contextmenu",E=>E.preventDefault());let d=!1,T={x:0,y:0},M={onTouchStart:E=>{s!==!1&&(d=!0,T.x=E.touches[0].clientX,T.y=E.touches[0].clientY,E.preventDefault())},onTouchMove:E=>{if(d){let v=T.x-E.touches[0].clientX,A=T.y-E.touches[0].clientY;Math.abs(v)>15&&(v>0?(a[c.y][c.x].style.display="none",c.x+=1,c.x>=t&&(c.x-=t),a[c.y][c.x].style.display="block"):(a[c.y][c.x].style.display="none",c.x-=1,c.x<0&&(c.x+=t),a[c.y][c.x].style.display="block"),T.x=E.touches[0].clientX,v=0),Math.abs(A)>20&&(A>0?(a[c.y][c.x].style.display="none",c.y-=1,c.y<0&&(c.y=0),a[c.y][c.x].style.display="block"):(a[c.y][c.x].style.display="none",c.y+=1,c.y>=n&&(c.y=n-1),a[c.y][c.x].style.display="block"),T.y=E.touches[0].clientY,v=0)}E.preventDefault()},onTouchCancel:E=>{d=!1},onTouchEnd:E=>{d=!1}};i.addEventListener("touchstart",M.onTouchStart),i.addEventListener("touchmove",M.onTouchMove),i.addEventListener("touchcancel",M.onTouchCancel),i.addEventListener("touchend",M.onTouchEnd)};const ma={name:"grandlobby",map:{src:"map/grand_lobby_map.png",width:2398,height:958,lookDirectionOffset:270,points:[{clickable:!0,name:"VIEW",url:"#p9",coordinate:{x:1355,y:516}},{clickable:!0,name:"VIEW",url:"#p2",coordinate:{x:1261,y:670}},{clickable:!0,name:"VIEW",url:"#p3",coordinate:{x:1246,y:550}},{clickable:!0,name:"VIEW",url:"#p6",coordinate:{x:1369,y:680}},{clickable:!0,name:"VIEW",url:"#p19",coordinate:{x:1324,y:253}},{clickable:!0,name:"VIEW",url:"#p20",coordinate:{x:476,y:583}},{clickable:!0,name:"VIEW",url:"#p15",coordinate:{x:941,y:623}},{clickable:!0,name:"VIEW",url:"#p16",coordinate:{x:941,y:392}},{clickable:!0,name:"VIEW",url:"#p11",coordinate:{x:603,y:392}},{clickable:!0,name:"VIEW",url:"#p13",coordinate:{x:612,y:506}},{clickable:!0,name:"VIEW",url:"#p18",coordinate:{x:1157,y:361}}]},defaultPoint:"p1",defaultViewAngle:180,sources:{p1:{day:"panos/grandlobby/GrandLobby_01.jpg",night:null,views:[{url:"#p2",coordinate:{x:77.86577761699213,y:-30.944422132472617,z:-124.07230451411112},lockY:!0},{url:"#p3",coordinate:{x:-65.98897836364169,y:-30.10142628216687,z:-130.9458614863532},lockY:!0}],infos:null,inMapCoordinate:{x:1245,y:630}},p2:{day:"panos/grandlobby/GrandLobby_02.jpg",night:null,views:[{url:"#p1",coordinate:{x:-81.2135537966358,y:-38.24232960618593,z:119.85049116065764},lockY:!0},{url:"#p4",coordinate:{x:-94.85460514527043,y:-34.87600708983962,z:-110.6479808070033},lockY:!0},{url:"#p5",coordinate:{x:-37.78693629758685,y:-39.549653748017036,z:-139.34711290388677},lockY:!0}],infos:null,inMapCoordinate:{x:1279,y:699}},p3:{day:"panos/grandlobby/GrandLobby_03.jpg",night:null,views:[{url:"#p1",coordinate:{x:75.15746835140303,y:-37.511159861466396,z:124.02890284422476},lockY:!0},{url:"#p4",coordinate:{x:48.0140710154945,y:-33.42906526991959,z:-137.92521596596723},lockY:!0}],infos:null,inMapCoordinate:{x:1264,y:579}},p4:{day:"panos/grandlobby/GrandLobby_04.jpg",night:null,views:[{url:"#p2",coordinate:{x:89.35456351713137,y:-35.742591505562466,z:114.80280478055371},lockY:!0},{url:"#p3",coordinate:{x:-57.572889236173424,y:-33.42870915711144,z:134.25600718703308},lockY:!0},{url:"#p5",coordinate:{x:107.88328600035987,y:-81.04730367382174,z:-65.1053941436968},lockY:!0},{url:"#p7",coordinate:{x:-12.99932402649747,y:-45.76441566397393,z:-142.14308621347095},lockY:!0}],infos:null,inMapCoordinate:{x:1331,y:628}},p5:{day:"panos/grandlobby/GrandLobby_05.jpg",night:null,views:[{url:"#p2",coordinate:{x:35.81779342696506,y:-29.619023110095643,z:142.3064604827968},lockY:!0},{url:"#p4",coordinate:{x:-114.72632345089076,y:-80.51942740071568,z:53.01389150460635},lockY:!0},{url:"#p6",coordinate:{x:142.83135671337592,y:-45.15115174270756,z:3.1665310772827797},lockY:!0},{url:"#p7",coordinate:{x:-81.03728009476812,y:-49.70385427837368,z:-115.76921598956932},lockY:!0}],infos:null,inMapCoordinate:{x:1350,y:630}},p6:{day:"panos/grandlobby/GrandLobby_06.jpg",night:null,views:[{url:"#p5",coordinate:{x:-144.02653294578295,y:-41.388736528223106,z:.6083636597069194},lockY:!0}],infos:null,inMapCoordinate:{x:1387,y:709}},p7:{day:"panos/grandlobby/GrandLobby_07.jpg",night:null,views:[{url:"#p4",coordinate:{x:-1.5499089144219402,y:-46.521358195485796,z:142.51497447787824},lockY:!0},{url:"#p5",coordinate:{x:73.9317050495289,y:-46.798187980393266,z:121.66004434460086},lockY:!0},{url:"#p8",coordinate:{x:-24.565972086799892,y:-41.17825696548493,z:-141.8233892507497},lockY:!0},{url:"#p9",coordinate:{x:-135.32837431350575,y:-64.05301310741021,z:3.5803489099016663},lockY:!0}],infos:null,inMapCoordinate:{x:1373,y:618}},p8:{day:"panos/grandlobby/GrandLobby_08.jpg",night:null,views:[{url:"#p7",coordinate:{x:18.180966045097023,y:-42.59081351530086,z:142.43188019872179},lockY:!0}],infos:null,inMapCoordinate:{x:1460,y:630}},p9:{day:"panos/grandlobby/GrandLobby_09.jpg",night:null,views:[{url:"#p7",coordinate:{x:136.53803595474346,y:-61.605981630589426,z:-2.023932359073364},lockY:!0}],infos:null,inMapCoordinate:{x:1373,y:545}},p11:{day:"panos/grandlobby/Panorama1.jpg",night:null,views:[{url:"#p17",coordinate:{x:-30.75231085141607,y:-36.68727050409334,z:142.0666448140047},lockY:!0},{url:"#p13",coordinate:{x:-147.82611544198355,y:-23.4609735349667,z:-6.251574249503733},lockY:!0}],infos:null,inMapCoordinate:{x:621,y:421}},p13:{day:"panos/grandlobby/Panorama3.jpg",night:null,views:[{url:"#p11",coordinate:{x:147.10901634545903,y:-24.885733338385617,z:14.533573696268268},lockY:!0},{url:"#p14",coordinate:{x:-111.58435898438194,y:-13.121699807584324,z:99.24266062386968},lockY:!0}],infos:null,inMapCoordinate:{x:631,y:535}},p14:{day:"panos/grandlobby/Panorama4.jpg",night:null,views:[{url:"#p13",coordinate:{x:105.88900533992926,y:-19.643820955488124,z:-103.98294137043989},lockY:!0}],infos:null,inMapCoordinate:{x:735,y:658}},p15:{day:"panos/grandlobby/Panorama5.jpg",night:null,views:[{url:"#p16",coordinate:{x:148.3518303705908,y:-21.398837232069653,z:.8773866861156421},lockY:!0}],infos:null,inMapCoordinate:{x:960,y:652}},p16:{day:"panos/grandlobby/Panorama6.jpg",night:null,views:[{url:"#p17",coordinate:{x:-2.0817051363339627,y:-10.772054859721564,z:-149.467664992701},lockY:!0},{url:"#p15",coordinate:{x:-148.48282859715252,y:-20.366285380859207,z:.7096996517030221},lockY:!0},{url:"#p18",coordinate:{x:9.354614134847967,y:-11.426810359665113,z:149.06078209284848},lockY:!0}],infos:null,inMapCoordinate:{x:960,y:421}},p17:{day:"panos/grandlobby/Panorama7.jpg",night:null,views:[{url:"#p11",coordinate:{x:-2.7775784150100593,y:-35.71403712522966,z:-145.51327751932106},lockY:!0},{url:"#p16",coordinate:{x:16.04046034547768,y:-10.916912753637504,z:148.68739618452312},lockY:!0}],infos:null,inMapCoordinate:{x:732,y:421}},p18:{day:"panos/grandlobby/Panorama8.jpg",night:null,views:[{url:"#p16",coordinate:{x:-13.68591282918137,y:-11.831963879610832,z:-148.8128804109012},lockY:!0}],infos:null,inMapCoordinate:{x:1176,y:390}},p19:{day:"panos/grandlobby/Panorama9.jpg",night:null,views:null,infos:null,inMapCoordinate:{x:1342,y:282}},p20:{day:"panos/grandlobby/Panorama10.jpg",night:null,views:null,infos:null,inMapCoordinate:{x:495,y:612}}}},Lf={name:"rooftopclub",map:{src:"map/roof_top_club_map.png",width:2731,height:875,lookDirectionOffset:90,points:[{clickable:!0,name:"VIEW",url:"#p4",coordinate:{x:1202,y:300}},{clickable:!0,name:"VIEW",url:"#p9",coordinate:{x:1182,y:530}},{clickable:!0,name:"VIEW",url:"#p101",coordinate:{x:902,y:371}},{clickable:!0,name:"VIEW",url:"#p103",coordinate:{x:676,y:374}},{clickable:!0,name:"VIEW",url:"#p107",coordinate:{x:270,y:295}},{clickable:!0,name:"VIEW",url:"#p201",coordinate:{x:1612,y:611}},{clickable:!0,name:"VIEW",url:"#p203",coordinate:{x:1442,y:527}},{clickable:!0,name:"VIEW",url:"#p301",coordinate:{x:1862,y:561}},{clickable:!0,name:"VIEW",url:"#p302",coordinate:{x:2542,y:429}}]},defaultPoint:"p4",defaultViewAngle:240,sources:{p1:{day:"panos/rooftopclub/RT_CLUB1.jpg",night:null,views:[{url:"#p2",coordinate:{x:136.36867038841564,y:-54.09032796362865,z:-30.48557432338008},lockY:!0},{url:"#p7",coordinate:{x:7.761511263468999,y:-47.104499809857636,z:141.97430708769045},lockY:!0},{url:"#p3",coordinate:{x:115.361266338722,y:-48.46229689846974,z:82.50530285306046},lockY:!0}],infos:null,inMapCoordinate:{x:1055,y:410}},p2:{day:"panos/rooftopclub/RT_CLUB2.jpg",night:null,views:[{url:"#p1",coordinate:{x:-137.05526489070826,y:-60.31940365245816,z:-3.471936815643637},lockY:!0},{url:"#p3",coordinate:{x:-1.7568853528450044,y:-59.319648785134845,z:137.60604026251752},lockY:!0}],infos:null,inMapCoordinate:{x:1055,y:329}},p3:{day:"panos/rooftopclub/RT_CLUB3.jpg",night:null,views:[{url:"#p2",coordinate:{x:.6298781587392824,y:-54.739380708327445,z:-139.53139812741554},lockY:!0},{url:"#p4",coordinate:{x:3.1092967346312235,y:-45.674247722240025,z:142.68682791465454},lockY:!0},{url:"#p7",coordinate:{x:-113.03121836334476,y:-55.26815974537995,z:81.48952562285862},lockY:!0},{url:"#p1",coordinate:{x:-109.50612150126265,y:-48.14511091106694,z:-90.09770440789589},lockY:!0}],infos:null,inMapCoordinate:{x:1152,y:329}},p4:{day:"panos/rooftopclub/RT_CLUB4.jpg",night:null,views:[{url:"#p3",coordinate:{x:-.7709984458018417,y:-50.28312210396719,z:-141.16800509094236},lockY:!0},{url:"#p5",coordinate:{x:124.27311801024578,y:-83.31667324521332,z:-6.122006167754371},lockY:!0},{url:"#p6",coordinate:{x:-131.9323119275985,y:-70.78563808266132,z:4.080334266096554},lockY:!0},{url:"#p7",coordinate:{x:-114.22054722800794,y:-52.372742620633616,z:-81.6166869445771},lockY:!0}],infos:null,inMapCoordinate:{x:1220,y:329}},p5:{day:"panos/rooftopclub/RT_CLUB5.jpg",night:null,views:[{url:"#p4",coordinate:{x:-123.94883892775994,y:-84.0045516937704,z:3.5394384525245086},lockY:!0}],infos:null,inMapCoordinate:{x:1220,y:296}},p6:{day:"panos/rooftopclub/RT_CLUB6.jpg",night:null,views:[{url:"#p4",coordinate:{x:131.55136905989826,y:-71.72334220173644,z:-1.3289253960939147},lockY:!0},{url:"#p7",coordinate:{x:-35.70292657623667,y:-79.08364366725938,z:-122.16999547776709},lockY:!0}],infos:null,inMapCoordinate:{x:1220,y:406}},p7:{day:"panos/rooftopclub/RT_CLUB7.jpg",night:null,views:[{url:"#p1",coordinate:{x:2.511023258536153,y:-38.754614995846076,z:-144.6697173645364},lockY:!0},{url:"#p6",coordinate:{x:40.04218372020852,y:-75.67671756165879,z:123.05295484737802},lockY:!0},{url:"#p8",coordinate:{x:-136.28945206970823,y:-61.354133942579196,z:-8.982541543484928},lockY:!0},{url:"#p4",coordinate:{x:118.90025472843055,y:-48.02577727922011,z:77.3510197970176},lockY:!0},{url:"#p3",coordinate:{x:125.04874441145714,y:-48.07793930572916,z:-66.97951803806014},lockY:!0}],infos:null,inMapCoordinate:{x:1186,y:406}},p8:{day:"panos/rooftopclub/RT_CLUB8.jpg",night:null,views:[{url:"#p7",coordinate:{x:136.84055763876884,y:-60.096823712492046,z:-9.526899237391287},lockY:!0},{url:"#p9",coordinate:{x:-131.96606610369432,y:-71.09466451041412,z:-.13407047709407188},lockY:!0}],infos:null,inMapCoordinate:{x:1200,y:500}},p9:{day:"panos/rooftopclub/RT_CLUB9.jpg",night:null,views:[{url:"#p8",coordinate:{x:131.539445367472,y:-71.2932093411963,z:-6.152767544776576},lockY:!0}],infos:null,inMapCoordinate:{x:1200,y:559}},p101:{day:"panos/rooftopclub/POOL1.jpg",night:"panos/rooftopclub/POOL1_NITE.jpg",views:[{url:"#p102",coordinate:{x:-10.365107307769126,y:-19.149096551641286,z:-148.12087848647664},lockY:!0}],infos:null,inMapCoordinate:{x:920,y:400}},p102:{day:"panos/rooftopclub/POOL2.jpg",night:"panos/rooftopclub/POOL2_NITE.jpg",views:[{url:"#p101",coordinate:{x:-12.044401873473959,y:-18.14930611676061,z:148.15120750100493},lockY:!0},{url:"#p103",coordinate:{x:-128.08259487755222,y:-37.29288020546833,z:-68.04576737673624},lockY:!0},{url:"#p104",coordinate:{x:37.11121650228911,y:-22.604192399057382,z:-143.33076108657485},lockY:!0},{url:"#p110",coordinate:{x:109.2120569748554,y:-29.039616888952835,z:98.4551720508094},lockY:!0}],infos:null,inMapCoordinate:{x:732,y:347}},p103:{day:"panos/rooftopclub/POOL3.jpg",night:"panos/rooftopclub/POOL3_NITE.jpg",views:[{url:"#p102",coordinate:{x:122.66413666682398,y:-33.44177224326906,z:79.12333881617448},lockY:!0}],infos:null,inMapCoordinate:{x:694,y:403}},p104:{day:"panos/rooftopclub/POOL4.jpg",night:"panos/rooftopclub/POOL4_NITE.jpg",views:[{url:"#p102",coordinate:{x:-33.87352364646455,y:-18.774949111808194,z:144.66686680796477},lockY:!0},{url:"#p106",coordinate:{x:-36.58758250589264,y:-26.723567574165596,z:-142.69563619253069},lockY:!0},{url:"#p108",coordinate:{x:114.78166299937095,y:-44.92161452228643,z:-85.27273990341583},lockY:!0}],infos:null,inMapCoordinate:{x:555,y:340}},p106:{day:"panos/rooftopclub/POOL6.jpg",night:"panos/rooftopclub/POOL6_NITE.jpg",views:[{url:"#p104",coordinate:{x:37.91783315199192,y:-28.157626307735466,z:142.04428822482234},lockY:!0},{url:"#p107",coordinate:{x:22.709550271874235,y:-35.83397548653427,z:-143.64135383217018},lockY:!0}],infos:null,inMapCoordinate:{x:504,y:370}},p107:{day:"panos/rooftopclub/POOL7.jpg",night:"panos/rooftopclub/POOL7_NITE.jpg",views:[{url:"#p106",coordinate:{x:-24.592300893442065,y:-29.6964480407352,z:144.6461871660359},lockY:!0}],infos:null,inMapCoordinate:{x:288,y:324}},p108:{day:"panos/rooftopclub/POOL8.jpg",night:"panos/rooftopclub/POOL8_NITE.jpg",views:[{url:"#p104",coordinate:{x:-137.23166273430968,y:-56.02058442187214,z:21.472394566818423},lockY:!0},{url:"#p109",coordinate:{x:4.5532444456035766,y:-47.8345483954999,z:141.8731148441238},lockY:!0}],infos:null,inMapCoordinate:{x:572,y:234}},p109:{day:"panos/rooftopclub/POOL9.jpg",night:"panos/rooftopclub/POOL9_NITE.jpg",views:[{url:"#p108",coordinate:{x:1.48547573050311,y:-32.87358236124492,z:-146.2039462769602},lockY:!0},{url:"#p110",coordinate:{x:7.745361003210344,y:-21.342063907486974,z:147.99861833155214},lockY:!0}],infos:null,inMapCoordinate:{x:677,y:234}},p110:{day:"panos/rooftopclub/POOL10.jpg",night:"panos/rooftopclub/POOL10_NITE.jpg",views:[{url:"#p102",coordinate:{x:-125.66713207439454,y:-23.65615673400214,z:-78.06811987170565},lockY:!0},{url:"#p109",coordinate:{x:-4.532423223976935,y:-21.913476987165787,z:-148.09936757681922},lockY:!0}],infos:null,inMapCoordinate:{x:769,y:234}},p201:{day:"panos/rooftopclub/GYM1.jpg",night:null,views:[{url:"#p202",coordinate:{x:16.141723827424283,y:-34.3104169821831,z:-145.05667855335128},lockY:!0},{url:"#p204",coordinate:{x:136.9683056996297,y:-47.80184458666652,z:-37.19897330420937},lockY:!0}],infos:null,inMapCoordinate:{x:1630,y:640}},p202:{day:"panos/rooftopclub/GYM2.jpg",night:null,views:[{url:"#p203",coordinate:{x:144.11560705624987,y:-40.670741374540555,z:-2.772569143861225},lockY:!0},{url:"#p201",coordinate:{x:7.387060515352726,y:-27.399860850365403,z:146.9834537910901},lockY:!0}],infos:null,inMapCoordinate:{x:1500,y:670}},p203:{day:"panos/rooftopclub/GYM3.jpg",night:null,views:[{url:"#p202",coordinate:{x:-143.05243287909732,y:-38.18290523301986,z:22.198882091807665},lockY:!0},{url:"#p204",coordinate:{x:-15.976340981668386,y:-18.14264484837778,z:147.90096949658235},lockY:!0}],infos:null,inMapCoordinate:{x:1460,y:556}},p204:{day:"panos/rooftopclub/GYM4.jpg",night:null,views:[{url:"#p201",coordinate:{x:-135.0853597124383,y:-44.952775667903296,z:-46.72335396041612},lockY:!0},{url:"#p203",coordinate:{x:32.17442430913493,y:-20.061979275916222,z:-144.96464950279196},lockY:!0}],infos:null,inMapCoordinate:{x:1600,y:575}},p301:{day:"panos/rooftopclub/Pool_Right_01.jpg",night:"panos/rooftopclub/Pool_Right_Night_01.jpg",views:[{url:"#p302",coordinate:{x:3.212894854931917,y:-5.33586068074585,z:149.62197157093925},lockY:!0}],infos:null,inMapCoordinate:{x:1880,y:590}},p302:{day:"panos/rooftopclub/Pool_Right_02.jpg",night:"panos/rooftopclub/Pool_Right_Night_02.jpg",views:[{url:"#p301",coordinate:{x:-2.444542423666854,y:-9.60355952154838,z:-149.4945600329763},lockY:!0}],infos:null,inMapCoordinate:{x:2561,y:458}}}},Pf={name:"carpark",map:{src:"map/car_park_map.png",width:2868,height:1008,lookDirectionOffset:90,points:[{clickable:!0,name:"VIEW",url:"#p0",coordinate:{x:2435,y:259}},{clickable:!0,name:"VIEW",url:"#p1",coordinate:{x:2503,y:396}},{clickable:!0,name:"VIEW",url:"#p2",coordinate:{x:2163,y:468}},{clickable:!0,name:"VIEW",url:"#p3",coordinate:{x:1162,y:651}}]},defaultPoint:"p0",defaultViewAngle:220,sources:{p0:{day:"panos/carpark/Carpark_00.jpg",night:null,views:[{url:"#p1",coordinate:{x:-147.69003020695706,y:-2.332781781013589,z:24.490623224021405},lockY:!0}],infos:null,inMapCoordinate:{x:2454,y:288}},p1:{day:"panos/carpark/Carpark_01.jpg",night:null,views:[{url:"#p0",coordinate:{x:145.8416550676906,y:-14.939397923652505,z:-31.240756325488498},lockY:!0},{url:"#p2",coordinate:{x:-149.93032849838673,y:-1.3878693591400137,z:-.28892028283441606},lockY:!0}],infos:null,inMapCoordinate:{x:2522,y:425}},p2:{day:"panos/carpark/Carpark_02.jpg",night:null,views:[{url:"#p1",coordinate:{x:144.23887346204776,y:-35.78355057518151,z:19.027735436812176},lockY:!0},{url:"#p3",coordinate:{x:-4.730568036625882,y:-10.414637768102098,z:-149.34288688025092},lockY:!0}],infos:null,inMapCoordinate:{x:2182,y:497}},p3:{day:"panos/carpark/Carpark_03.jpg",night:null,views:[{url:"#p2",coordinate:{x:10.903002244285936,y:-14.940045695254616,z:148.59085973452878},lockY:!0}],infos:null,inMapCoordinate:{x:1181,y:680}}}},Df={name:"showunit",map:{src:"map/show_unit_map.png",width:2916,height:820,lookDirectionOffset:100,points:[{clickable:!0,name:"VIEW",url:"#p1",coordinate:{x:1164,y:286}},{clickable:!0,name:"VIEW",url:"#p5",coordinate:{x:1185,y:396}},{clickable:!0,name:"VIEW",url:"#p9",coordinate:{x:1257,y:387}},{clickable:!0,name:"VIEW",url:"#p100",coordinate:{x:1226,y:236}},{clickable:!0,name:"VIEW",url:"#p102",coordinate:{x:1590,y:308}}]},defaultPoint:"p2",defaultViewAngle:270,sources:{p1:{day:"panos/showunit/TYPE_B_01.jpg",night:null,views:[{url:"#p2",coordinate:{x:-8.907820704881308,y:-73.34953557061785,z:130.2434619031357},lockY:!0}],infos:[{name:"MARBLE",coordinate:{x:-129.6789653576991,y:-50.99361078183373,z:54.93624216551096},content:"materials/KitchenTexture_Marble.jpg",width:1e3,height:1e3},{name:"SOLID WOOD",coordinate:{x:-97.99581892402155,y:-31.814613847297046,z:108.88677280192758},content:"materials/KitchenTexure_Wood.jpg",width:1e3,height:1e3},{name:"LAMINATED",coordinate:{x:-105.57918428805809,y:-97.5067318259856,z:42.56874874570049},content:"materials/KitchenTexure_Laminated.jpg",width:1e3,height:1e3}],inMapCoordinate:{x:1183,y:315}},p2:{day:"panos/showunit/TYPE_B_02.jpg",night:null,views:[{url:"#p1",coordinate:{x:5.8011492410028636,y:-72.17129619436565,z:-131.06612290910297},lockY:!0},{url:"#p3",coordinate:{x:-121.98135078093163,y:-86.78275183535312,z:-5.660379691984936},lockY:!0},{url:"#p100",coordinate:{x:115.34197118917403,y:-4.060184308168907,z:-95.33709490312624},lockY:!0}],infos:null,inMapCoordinate:{x:1240,y:322}},p3:{day:"panos/showunit/TYPE_B_03.jpg",night:null,views:[{url:"#p2",coordinate:{x:117.73265665288478,y:-92.2480525527518,z:-7.694865426050945},lockY:!0},{url:"#p11",coordinate:{x:4.943443020002926,y:-67.91529425450703,z:133.4764001089856},lockY:!0},{url:"#p4",coordinate:{x:-119.70857990558972,y:-86.25963916053848,z:-26.38858180009143},lockY:!0}],infos:null,inMapCoordinate:{x:1240,y:356}},p4:{day:"panos/showunit/TYPE_B_04.jpg",night:null,views:[{url:"#p3",coordinate:{x:113.69648476573481,y:-92.29293425018969,z:31.35905397408695},lockY:!0},{url:"#p5",coordinate:{x:-125.63855128010385,y:-68.14824281960954,z:-45.05521078289418},lockY:!0},{url:"#p7",coordinate:{x:-10.495896149694007,y:-82.5836458733105,z:124.53368708079675},lockY:!0}],infos:null,inMapCoordinate:{x:1245,y:393}},p5:{day:"panos/showunit/TYPE_B_05.jpg",night:null,views:[{url:"#p4",coordinate:{x:125.1835615118245,y:-71.72912231456979,z:40.64368584982834},lockY:!0},{url:"#p6",coordinate:{x:-109.55912301515858,y:-101.76130619542583,z:-9.275890521213746},lockY:!0}],infos:null,inMapCoordinate:{x:1203,y:425}},p6:{day:"panos/showunit/TYPE_B_06.jpg",night:null,views:[{url:"#p5",coordinate:{x:94.45987124482963,y:-116.29139641077086,z:-2.441592390538614},lockY:!0}],infos:null,inMapCoordinate:{x:1214,y:466}},p7:{day:"panos/showunit/TYPE_B_07.jpg",night:null,views:[{url:"#p4",coordinate:{x:11.743341588658978,y:-81.49729281685272,z:-125.19418919562332},lockY:!0},{url:"#p9",coordinate:{x:-91.3306482605969,y:-117.56857213487059,z:16.83846073635233},lockY:!0},{url:"#p8",coordinate:{x:14.5250885829633,y:-109.37183879681574,z:101.3245922365379},lockY:!0}],infos:null,inMapCoordinate:{x:1275,y:392}},p8:{day:"panos/showunit/TYPE_B_08.jpg",night:null,views:[{url:"#p7",coordinate:{x:-1.7780160826380225,y:-114.2771647270484,z:-97.04969058648796},lockY:!0},{url:"#p11",coordinate:{x:127.19060939087933,y:-79.09022615523754,z:-4.3385613624015065},lockY:!0}],infos:null,inMapCoordinate:{x:1284,y:381}},p9:{day:"panos/showunit/TYPE_B_09.jpg",night:null,views:[{url:"#p7",coordinate:{x:78.1343313155663,y:-125.58620861206107,z:-24.13868862519128},lockY:!0},{url:"#p10",coordinate:{x:-111.83027073043597,y:-98.6008869912604,z:-15.076221340388454},lockY:!0}],infos:null,inMapCoordinate:{x:1275,y:416}},p10:{day:"panos/showunit/TYPE_B_10.jpg",night:null,views:[{url:"#p9",coordinate:{x:110.38860341797539,y:-99.46291329606233,z:-19.09170823441355},lockY:!0}],infos:null,inMapCoordinate:{x:1275,y:433}},p11:{day:"panos/showunit/TYPE_B_11.jpg",night:null,views:[{url:"#p3",coordinate:{x:-8.801112673087127,y:-63.73961439215189,z:-135.1992441657249},lockY:!0},{url:"#p8",coordinate:{x:-127.36565145727194,y:-78.55893686421425,z:7.772285612999029},lockY:!0}],infos:null,inMapCoordinate:{x:1297,y:353}},p100:{day:"panos/showunit/CORRIDOR_00.jpg",night:null,views:[{url:"#p2",coordinate:{x:-147.53874752026488,y:-24.51611192250016,z:7.736612065282194},lockY:!0},{url:"#p101",coordinate:{x:-3.947053471080828,y:-14.354918296190691,z:149.02466388441604},lockY:!0}],infos:null,inMapCoordinate:{x:1244,y:265}},p101:{day:"panos/showunit/CORRIDOR_01.jpg",night:null,views:[{url:"#p100",coordinate:{x:-1.9681318689493,y:-11.937591073856328,z:-149.41448198664395},lockY:!0},{url:"#p102",coordinate:{x:-143.88389618048254,y:-40.60348920846223,z:7.555791086462154},lockY:!0}],infos:null,inMapCoordinate:{x:1609,y:266}},p102:{day:"panos/showunit/CORRIDOR_02.jpg",night:null,views:[{url:"#p101",coordinate:{x:142.74948691091475,y:-44.140065209500165,z:-10.169811584365167},lockY:!0},{url:"#p103",coordinate:{x:-144.82360709695632,y:-27.00900692865224,z:26.88456212276062},lockY:!0}],infos:null,inMapCoordinate:{x:1609,y:337}},p103:{day:"panos/showunit/CORRIDOR_03.jpg",night:null,views:[{url:"#p102",coordinate:{x:125.87320970048772,y:-43.082358484044654,z:-68.79030090606436},lockY:!0}],infos:null,inMapCoordinate:{x:1645,y:467}}}},If={name:"skylounge",map:{src:"map/sky_lounge_map.png",width:2763,height:743,lookDirectionOffset:90,points:[{clickable:!0,name:"VIEW",url:"#p23",coordinate:{x:1276,y:127}},{clickable:!0,name:"VIEW",url:"#p6",coordinate:{x:1108,y:276}},{clickable:!0,name:"VIEW",url:"#p9",coordinate:{x:988,y:171}},{clickable:!0,name:"VIEW",url:"#p8",coordinate:{x:988,y:246}},{clickable:!0,name:"VIEW",url:"#p20",coordinate:{x:1161,y:164}},{clickable:!0,name:"VIEW",url:"#p101",coordinate:{x:750,y:141}},{clickable:!0,name:"VIEW",url:"#p105",coordinate:{x:447,y:340}},{clickable:!0,name:"VIEW",url:"#p108",coordinate:{x:129,y:230}},{clickable:!0,name:"VIEW",url:"#p201",coordinate:{x:1549,y:420}},{clickable:!0,name:"VIEW",url:"#p203",coordinate:{x:1789,y:360}},{clickable:!0,name:"VIEW",url:"#p205",coordinate:{x:2084,y:294}},{clickable:!0,name:"VIEW",url:"#p206",coordinate:{x:2252,y:254}}]},defaultPoint:"p1",defaultViewAngle:180,sources:{p1:{day:"panos/skylounge/S_LOUNGE1.jpg",night:null,views:[{url:"#p2",coordinate:{x:.6805046695925928,y:-70.5528188396009,z:-132.24087688786037},lockY:!0},{url:"#p23",coordinate:{x:138.17305484727032,y:-58.10242289778646,z:1.644956767779394},lockY:!0}],infos:null,inMapCoordinate:{x:1299,y:226}},p2:{day:"panos/skylounge/S_LOUNGE2.jpg",night:null,views:[{url:"#p1",coordinate:{x:-.9126061847949614,y:-72.14405346992196,z:131.33757833753722},lockY:!0},{url:"#p3",coordinate:{x:-127.74468348869227,y:-78.43129997181335,z:-2.1672650625680996},lockY:!0},{url:"#p22",coordinate:{x:22.67622470153188,y:-54.62812411343115,z:-137.56039187606837},lockY:!0}],infos:null,inMapCoordinate:{x:1239,y:226}},p3:{day:"panos/skylounge/S_LOUNGE3.jpg",night:null,views:[{url:"#p2",coordinate:{x:128.14229848734763,y:-77.7031497224541,z:-2.4779155847772785},lockY:!0},{url:"#p4",coordinate:{x:-123.4667159439993,y:-84.7212503349597,z:-3.6012808891156474},lockY:!0}],infos:null,inMapCoordinate:{x:1242,y:299}},p4:{day:"panos/skylounge/S_LOUNGE4.jpg",night:null,views:[{url:"#p3",coordinate:{x:122.85242285215716,y:-85.71238081783804,z:-2.6861312826608916},lockY:!0}],infos:null,inMapCoordinate:{x:1242,y:360}},p5:{day:"panos/skylounge/S_LOUNGE5.jpg",night:null,views:[{url:"#p6",coordinate:{x:101.26252387561001,y:-110.42015525054967,z:-1.778637362168955},lockY:!0}],infos:null,inMapCoordinate:{x:1126,y:366}},p6:{day:"panos/skylounge/S_LOUNGE6.jpg",night:null,views:[{url:"#p5",coordinate:{x:-98.35600170757074,y:-112.72051969329364,z:-9.754610489109872},lockY:!0},{url:"#p7",coordinate:{x:126.96468398671234,y:-78.96028030208129,z:10.30622040876322},lockY:!0},{url:"#p8",coordinate:{x:101.72544925543137,y:-57.777200851638284,z:-93.74645615807937},lockY:!0}],infos:null,inMapCoordinate:{x:1126,y:305}},p7:{day:"panos/skylounge/S_LOUNGE7.jpg",night:null,views:[{url:"#p6",coordinate:{x:-126.63356906332632,y:-76.96439903047896,z:-21.95819787547242},lockY:!0},{url:"#p8",coordinate:{x:3.9074475355082123,y:-71.36741400174697,z:-131.6155640072898},lockY:!0},{url:"#p22",coordinate:{x:102.41916002333335,y:-83.77905846300112,z:70.1726091698301},lockY:!0}],infos:null,inMapCoordinate:{x:1126,y:275}},p8:{day:"panos/skylounge/S_LOUNGE8.jpg",night:null,views:[{url:"#p6",coordinate:{x:-98.86900886220127,y:-60.06640777836673,z:95.11246890896456},lockY:!0},{url:"#p7",coordinate:{x:-2.262834684058322,y:-74.34100496637632,z:130.03646315149732},lockY:!0},{url:"#p9",coordinate:{x:123.30485036275334,y:-85.12731879640003,z:-1.5126234351031107},lockY:!0}],infos:null,inMapCoordinate:{x:1006,y:275}},p9:{day:"panos/skylounge/S_LOUNGE9.jpg",night:null,views:[{url:"#p8",coordinate:{x:-122.26237667143788,y:-86.58378896791788,z:-2.834777781930119},lockY:!0},{url:"#p10",coordinate:{x:6.06334470202368,y:-92.78928434711442,z:117.39148857101141},lockY:!0}],infos:null,inMapCoordinate:{x:1006,y:200}},p10:{day:"panos/skylounge/S_LOUNGE10.jpg",night:null,views:[{url:"#p9",coordinate:{x:3.3762163713385323,y:-87.73980723686297,z:-121.46157363566377},lockY:!0},{url:"#p11",coordinate:{x:125.41483192490199,y:-82.00837294733213,z:1.0171647335276917},lockY:!0}],infos:null,inMapCoordinate:{x:1057,y:200}},p11:{day:"panos/skylounge/S_LOUNGE11.jpg",night:null,views:[{url:"#p10",coordinate:{x:-123.0504135625806,y:-85.13514843186327,z:-6.2677686249011515},lockY:!0},{url:"#p12",coordinate:{x:122.15860421291507,y:-86.6702982345359,z:-3.711902924991896},lockY:!0},{url:"#p14",coordinate:{x:4.595833774518114,y:-109.36127738080236,z:102.26036858339324},lockY:!0}],infos:null,inMapCoordinate:{x:1057,y:153}},p12:{day:"panos/skylounge/S_LOUNGE12.jpg",night:null,views:[{url:"#p11",coordinate:{x:-123.50820832140856,y:-84.69906534109165,z:-3.092407685202507},lockY:!0},{url:"#p13",coordinate:{x:4.2563074184841465,y:-97.29068817321969,z:-113.9375717829},lockY:!0}],infos:null,inMapCoordinate:{x:1057,y:123}},p13:{day:"panos/skylounge/S_LOUNGE13.jpg",night:null,views:[{url:"#p12",coordinate:{x:3.7387683021453753,y:-97.91226127963114,z:113.40733190989447},lockY:!0}],infos:null,inMapCoordinate:{x:1017,y:123}},p14:{day:"panos/skylounge/S_LOUNGE14.jpg",night:null,views:[{url:"#p11",coordinate:{x:-11.191881536882413,y:-115.98859738595495,z:-94.25136964934346},lockY:!0},{url:"#p15",coordinate:{x:112.93641274104347,y:-98.4357407529218,z:-3.491088747205611},lockY:!0},{url:"#p21",coordinate:{x:-106.0678301901507,y:-101.54966341244165,z:29.503829315175434},lockY:!0}],infos:null,inMapCoordinate:{x:1127,y:151}},p15:{day:"panos/skylounge/S_LOUNGE15.jpg",night:null,views:[{url:"#p14",coordinate:{x:-117.82314381274439,y:-92.16962656621648,z:-7.147944113266794},lockY:!0},{url:"#p16",coordinate:{x:1.9080710627321875,y:-69.58575827233958,z:132.71812199326746},lockY:!0}],infos:null,inMapCoordinate:{x:1127,y:127}},p16:{day:"panos/skylounge/S_LOUNGE16.jpg",night:null,views:[{url:"#p15",coordinate:{x:-1.569159088069154,y:-76.00555092559907,z:-129.14062568166565},lockY:!0},{url:"#p17",coordinate:{x:-6.433801534392701,y:-70.45993182655563,z:131.99137617068877},lockY:!0}],infos:null,inMapCoordinate:{x:1179,y:127}},p17:{day:"panos/skylounge/S_LOUNGE17.jpg",night:null,views:[{url:"#p16",coordinate:{x:-3.374605106986407,y:-73.75176838255643,z:-130.30818457347033},lockY:!0},{url:"#p18",coordinate:{x:-111.98607361159915,y:-99.24509861996135,z:7.348827543674994},lockY:!0}],infos:null,inMapCoordinate:{x:1240,y:127}},p18:{day:"panos/skylounge/S_LOUNGE18.jpg",night:null,views:[{url:"#p17",coordinate:{x:99.75837742227142,y:-111.67281716107571,z:4.62220102189982},lockY:!0},{url:"#p19",coordinate:{x:-109.80940731249196,y:-101.94449325939537,z:1.269046508393106},lockY:!0},{url:"#p23",coordinate:{x:-7.671031391793213,y:-111.33534249246009,z:99.96367322471275},lockY:!0}],infos:null,inMapCoordinate:{x:1240,y:153}},p19:{day:"panos/skylounge/S_LOUNGE19.jpg",night:null,views:[{url:"#p18",coordinate:{x:108.68583087671657,y:-102.8786111890378,z:-6.231785815252896},lockY:!0},{url:"#p20",coordinate:{x:-10.441412335680667,y:-74.38686192967755,z:-129.58215715227362},lockY:!0}],infos:null,inMapCoordinate:{x:1240,y:193}},p20:{day:"panos/skylounge/S_LOUNGE20.jpg",night:null,views:[{url:"#p19",coordinate:{x:7.450775558723823,y:-68.60511028967716,z:132.9768272984169},lockY:!0},{url:"#p21",coordinate:{x:-4.865978717094911,y:-75.61983922945824,z:-129.18385419278505},lockY:!0}],infos:null,inMapCoordinate:{x:1179,y:193}},p21:{day:"panos/skylounge/S_LOUNGE21.jpg",night:null,views:[{url:"#p14",coordinate:{x:101.19629490847512,y:-102.51497909497233,z:-41.08577382420858},lockY:!0},{url:"#p20",coordinate:{x:5.156266058069184,y:-71.28483030559083,z:131.5963628869805},lockY:!0},{url:"#p22",coordinate:{x:-91.39684495850621,y:-118.72011453582944,z:2.1021284711605768},lockY:!0}],infos:null,inMapCoordinate:{x:1129,y:193}},p22:{day:"panos/skylounge/S_LOUNGE22.jpg",night:null,views:[{url:"#p2",coordinate:{x:-24.11916476044788,y:-53.79895130472226,z:137.6411392557819},lockY:!0},{url:"#p7",coordinate:{x:-110.37944196359973,y:-77.24059778019354,z:-65.70051424161043},lockY:!0},{url:"#p21",coordinate:{x:81.05605360515439,y:-126.07742500494177,z:.7720152715693036},lockY:!0}],infos:null,inMapCoordinate:{x:1129,y:226}},p23:{day:"panos/skylounge/S_LOUNGE23.jpg",night:null,views:[{url:"#p1",coordinate:{x:-136.13554875251313,y:-61.3933822612204,z:-11.573980036122494},lockY:!0},{url:"#p18",coordinate:{x:-1.4103983609162738,y:-113.96031055285117,z:-97.452104752997},lockY:!0},{url:"#p24",coordinate:{x:120.61340969011292,y:-88.73767752306908,z:-5.531084258204911},lockY:!0}],infos:null,inMapCoordinate:{x:1294,y:156}},p24:{day:"panos/skylounge/S_LOUNGE24.jpg",night:null,views:[{url:"#p23",coordinate:{x:-118.33661304064483,y:-91.85591694743411,z:-2.069299492822757},lockY:!0}],infos:null,inMapCoordinate:{x:1299,y:124}},p101:{day:"panos/skylounge/S_L_GARDEN01.jpg",night:null,views:[{url:"#p103",coordinate:{x:-144.5676171059556,y:-25.958244463214292,z:-29.835081992556713},lockY:!0}],infos:null,inMapCoordinate:{x:768,y:170}},p103:{day:"panos/skylounge/S_L_GARDEN03.jpg",night:null,views:[{url:"#p101",coordinate:{x:145.28030272286082,y:-21.126911138164697,z:30.267749348348605},lockY:!0},{url:"#p105",coordinate:{x:7.192258455929342,y:-14.647149492610732,z:-148.82000217068043},lockY:!0}],infos:null,inMapCoordinate:{x:765,y:369}},p105:{day:"panos/skylounge/S_L_GARDEN05.jpg",night:null,views:[{url:"#p103",coordinate:{x:-11.416848727218888,y:-17.490330439761625,z:148.26209051184205},lockY:!0},{url:"#p107",coordinate:{x:-4.38459004680649,y:-16.307669324839573,z:-148.77060607286742},lockY:!0}],infos:null,inMapCoordinate:{x:465,y:369}},p107:{day:"panos/skylounge/S_L_GARDEN07.jpg",night:null,views:[{url:"#p105",coordinate:{x:-2.64123989892215,y:-15.286038426611881,z:148.9828922603456},lockY:!0},{url:"#p108",coordinate:{x:85.99343648432041,y:-35.89416789991905,z:-117.46965667804743},lockY:!0}],infos:null,inMapCoordinate:{x:215,y:369}},p108:{day:"panos/skylounge/S_L_GARDEN08.jpg",night:null,views:[{url:"#p107",coordinate:{x:-114.86488908527824,y:-41.762816580404696,z:86.58363592431071},lockY:!0}],infos:null,inMapCoordinate:{x:147,y:259}},p201:{day:"panos/skylounge/S_R_GARDEN01.jpg",night:null,views:[{url:"#p203",coordinate:{x:-.9530146308778368,y:-22.692953160809253,z:148.19469771721552},lockY:!0}],infos:null,inMapCoordinate:{x:1567,y:449}},p203:{day:"panos/skylounge/S_R_GARDEN03.jpg",night:null,views:[{url:"#p201",coordinate:{x:-1.5743228510255958,y:-26.413638944985017,z:-147.48425249685226},lockY:!0},{url:"#p205",coordinate:{x:-4.501074257630035,y:-33.27249369114474,z:145.96655723191444},lockY:!0}],infos:null,inMapCoordinate:{x:1807,y:389}},p205:{day:"panos/skylounge/S_R_GARDEN05.jpg",night:null,views:[{url:"#p203",coordinate:{x:-3.54350375514897,y:-20.875251788143377,z:-148.2740748194531},lockY:!0},{url:"#p206",coordinate:{x:-11.769749657675852,y:-30.11090315386253,z:146.21450370633164},lockY:!0}],infos:null,inMapCoordinate:{x:2102,y:323}},p206:{day:"panos/skylounge/S_R_GARDEN06.jpg",night:null,views:[{url:"#p205",coordinate:{x:-8.529837483825734,y:-38.12229791638741,z:-144.5326158172118},lockY:!0}],infos:null,inMapCoordinate:{x:2270,y:283}}}},Uf={name:"levelview",map:null,defaultPoint:"lv36",defaultViewAngle:240,sources:{lv36:{day:"panos/levelview/DJI_0188.jpg",night:"panos/levelview/DJI_0191.jpg",views:null,infos:null},lv30:{day:"panos/levelview/DJI_0186.jpg",night:null,views:null,infos:null},lv25:{day:"panos/levelview/DJI_0185.jpg",night:null,views:null,infos:null},lv20:{day:"panos/levelview/DJI_0184.jpg",night:null,views:null,infos:null},lv15:{day:"panos/levelview/DJI_0183.jpg",night:null,views:null,infos:null},lv10:{day:"panos/levelview/DJI_0182.jpg",night:null,views:null,infos:null}}},Nf={grandlobby:"grand-lobby",carpark:"car-park",showunit:"show-unit",skylounge:"sky-lounge",rooftopclub:"rooftop-club",levelview:"level-view"},ga={lv36:"ctv-36-btn",lv30:"ctv-30-btn",lv25:"ctv-25-btn",lv20:"ctv-20-btn",lv15:"ctv-15-btn",lv10:"ctv-10-btn"};window.addEventListener("load",function(){let i=!1,e=!1;document.getElementById("panorama-content").addEventListener("contextmenu",L=>L.preventDefault()),document.getElementById("scene-loading").addEventListener("click",L=>L.preventDefault()),document.getElementById("scene-loading").addEventListener("touchstart",L=>L.preventDefault()),document.getElementById("scene-loading").addEventListener("contextmenu",L=>L.preventDefault()),document.getElementById("entrance-page").addEventListener("contextmenu",L=>L.preventDefault()),document.getElementById("entrance-page").addEventListener("mousedown",L=>L.preventDefault()),document.getElementById("entrance-page").addEventListener("touchmove",L=>L.preventDefault());let t=new _t(0,1,.5);t.update(L=>{document.getElementById("scene-loading").style.opacity=L});let n=new _t(1,0,.5,()=>{document.getElementById("scene-loading").style.display="none"});n.update(L=>{document.getElementById("scene-loading").style.opacity=L});let r=document.getElementById("clm-viewport"),s=document.getElementById("clm-viewport-content"),o=document.getElementById("clm-viewport-track"),a=document.getElementById("clm-viewport-track-slider"),l=new pa(r,s,o,a);window.addEventListener("resize",l.recompute);let u=ga[ve.getParameters(window.location.href).point];(u===void 0||u==="")&&(u="ctv-36-btn"),document.getElementById(u).querySelector("span.icon").classList.add("highlight");let c=s.querySelectorAll("button.item");for(let L=0;L<c.length;L++){let Z=c[L].getAttribute("data-target-url");c[L].addEventListener("click",function(X){ve.preventPopState=!0,window.location.href=Z,w.hideMenu(),w.showButton(),O.show(),setTimeout(()=>P(),600);for(let ce=0;ce<c.length;ce++)c[ce].querySelector("span.icon").classList.remove("highlight");c[L].querySelector("span.icon").classList.add("highlight")})}let f=document.getElementById("nav-viewport"),h=document.getElementById("nav-viewport-content"),m=document.getElementById("nav-viewport-track"),_=document.getElementById("nav-viewport-track-slider"),g=new pa(f,h,m,_);window.addEventListener("resize",g.recompute);let p=Nf[ve.getParameters(window.location.href).scene];(p===void 0||p==="")&&(p="grand-lobby"),h.querySelector(`button.item>span.icon.${p}`).classList.add("highlight");let d=h.querySelectorAll("button.item");for(let L=0;L<d.length;L++){let Z=d[L].getAttribute("data-target-url");Z!==null&&d[L].addEventListener("click",function(X){if(!g.isSliding()){ve.preventPopState=!0,window.location.href=Z,T.close(),O.show(),document.getElementById("scene-loading").style.display="block",t.reset(),t.onCompleted(Fe),window.requestAnimationFrame(t.start);for(let ce=0;ce<d.length;ce++)d[ce].querySelector("span.icon").classList.remove("highlight");d[L].querySelector("span.icon").classList.add("highlight"),ve.history.scene==="levelview"&&w.showButton()}})}const T={isOpen:!1,open:function(){document.getElementById("navigation-menu").style.left="0px",T.isOpen=!0},close:function(){document.getElementById("navigation-menu").style.left="-185px",T.isOpen=!1}},M=document.getElementById("tools-menu"),E=document.getElementById("open-menu-btn"),v=document.getElementById("toggle-daytime-btn"),A=document.getElementById("fullscreen-btn"),R=document.getElementById("hide-all-gui-btn");E.addEventListener("click",function(L){T.isOpen?(T.close(),O.show(),w.showButton()):(T.open(),O.hide(),w.hideButton(),w.hideMenu())}),A.addEventListener("click",function(){var L=window.document,Z=L.documentElement,X=Z.requestFullscreen||Z.mozRequestFullScreen||Z.webkitRequestFullScreen||Z.msRequestFullscreen,ce=L.exitFullscreen||L.mozCancelFullScreen||L.webkitExitFullscreen||L.msExitFullscreen;!L.fullscreenElement&&!L.mozFullScreenElement&&!L.webkitFullscreenElement&&!L.msFullscreenElement?X.call(Z):ce.call(L)});const O={isShow:!0,show:function(){document.getElementById("tools-menu").style.bottom="10px",O.isShow=!0},hide:function(){if(window.innerWidth<730){const L=document.getElementById("tools-menu"),X=window.getComputedStyle(L).getPropertyValue("height");L.style.bottom=`-${parseInt(X,10)+10}px`,O.isShow=!1}},forcedHide:function(){const L=document.getElementById("tools-menu"),X=window.getComputedStyle(L).getPropertyValue("height");L.style.bottom=`-${parseInt(X,10)+10}px`,O.isShow=!1}};M.addEventListener("contextmenu",function(L){L.preventDefault()}),v.addEventListener("click",function(L){if(e!==!1)if(ve.preventPopState=!0,i){i=!1,this.classList.remove("night");let Z=`#${ve.global.scene}`;ve.global.point!==void 0&&(Z+=`.${ve.global.point}`),window.location.href=Z,P()}else{i=!0,this.classList.add("night");let Z=`#${ve.global.scene}.${ve.global.point}.night`;window.location.href=Z,P()}}),document.getElementById("level-view-button").addEventListener("click",function(L){w.showMenu(),w.hideButton()});const w={showButton:function(){ve.getParameters(window.location.href).scene==="levelview"&&(document.getElementById("level-view-button").classList.add("show"),document.getElementById("level-view-button").disabled=!1)},hideButton:function(){document.getElementById("level-view-button").classList.remove("show"),document.getElementById("level-view-button").disabled=!0},showMenu:function(){if(ve.getParameters(window.location.href).scene==="levelview"&&(document.getElementById("level-view-menu").classList.add("show"),window.innerWidth<730)){const Z=document.getElementById("tools-menu"),ce=window.getComputedStyle(Z).getPropertyValue("height");Z.style.bottom=`-${parseInt(ce,10)+10}px`,O.isShow=!1}},hideMenu:function(){document.getElementById("level-view-menu").classList.remove("show")}},ne=document.getElementById("panorama-content");ne.addEventListener("mousedown",function(){T.close(),w.hideMenu(),w.showButton(),O.show()}),ne.addEventListener("touchstart",function(){T.close(),w.hideMenu(),w.showButton(),O.show()});let $=document.getElementById("map"),z=document.getElementById("map-background"),V=document.getElementById("map-viewport"),U=document.getElementById("map-content"),te=document.getElementById("map-zoomable"),J=document.getElementById("map-content-image"),Q=document.getElementById("map-close-button"),ie=!1,H=new fa($,V,U,te,J,863,245);H.init(!0),V.addEventListener("click",function(){if(ie||G)return;ie=!0,O.forcedHide(),T.close(),document.getElementById("scene-name").style.display="none";let L=new _t(0,1,.7);L.update(function(Z){$.style.top=`${10-Z*10}px`,$.style.right=`${10-Z*10}px`,$.style.width=`${30+70*Z}%`,$.style.height=`${30+70*Z}%`,z.style.borderRadius=`${5-Z*5}px`,H.resize(),document.getElementById("content-current-location-indicator").classList.remove("mini-map")}),L.onCompleted(()=>{H.enabled(!0),H.showPoints(!0),Q.classList.add("show")}),window.requestAnimationFrame(L.start)}),Q.addEventListener("click",function(){Q.classList.remove("show"),H.showPoints(!1);let L=new _t(1,0,.5);L.update(function(Z){$.style.top=`${10-Z*10}px`,$.style.right=`${10-Z*10}px`,$.style.width=`${30+70*Z}%`,$.style.height=`${30+70*Z}%`,z.style.borderRadius=`${(1-Z)*5}px`,H.reset(1-Z),document.getElementById("content-current-location-indicator").classList.add("mini-map")}),L.onCompleted(()=>{ie=!1,O.show(),document.getElementById("scene-name").style.display="block",H.resize()}),window.requestAnimationFrame(L.start)});let B=document.getElementById("material-info"),W=document.getElementById("material-info-viewport"),fe=document.getElementById("material-info-content"),pe=document.getElementById("material-info-zoomable"),me=document.getElementById("material-content-image"),Me=document.getElementById("material-info-title"),K=document.getElementById("material-info-close-button"),Y=!1,ee=new fa(B,W,fe,pe,me,1e3,1e3);ee.init(!1),K.addEventListener("click",function(L){let Z=new _t(1,0,.5,function(){B.style.display="none",ee.enabled(!1)});Z.update(function(X){B.style.opacity=X}),window.requestAnimationFrame(Z.start),Y=!1});let be=new Rf("panorama-content");be.onLabelClicked(function(L){ve.preventPopState=!0,window.location.href=L,P()}),be.onInfoLabelClicked(function(L,Z,X,ce){Me.innerText=L,ee.setImage(Z,X,ce),ee.enabled(!0),B.style.display="block";let ge=new _t(0,1,.5,void 0);ge.update(function(Te){B.style.opacity=Te}),window.requestAnimationFrame(ge.start),Y=!0}),be.setActive(!0);function xe(){let L=ve.getParameters(window.location.href),Z=ve.loadScene(L.scene),X=Z.data,ce=Z.status;const ge=X.defaultViewAngle,Te=X.sources[L.point]===void 0||ce===101?X.sources[X.defaultPoint]:X.sources[L.point],C=L.daytime==="night"&&Te.night!==null?Te.night:Te.day,se=L.daytime==="night"&&Te.night!==null;e=se;const D=X.map,ue=Te.views!==null?ve.updateUrl(Te.views,X.name,se):void 0,de=Te.infos!==null?Te.infos:void 0;be.preload(C,ue,de,function(){D!==null?(H.clearPoints(),H.setImage(D.src,D.width,D.height),$.style.display="block",ve.global.hasMap=!0,ve.global.lookDirectionOffset=D.lookDirectionOffset,D.points!==null&&H.setContentPoints(D.points,function(Re){Q.classList.remove("show"),H.showPoints(!1);let We=new _t(1,0,.5);We.update(function(He){$.style.top=`${10-He*10}px`,$.style.right=`${10-He*10}px`,$.style.width=`${30+70*He}%`,$.style.height=`${30+70*He}%`,z.style.borderRadius=`${(1-He)*5}px`,H.reset(1-He),document.getElementById("content-current-location-indicator").classList.add("mini-map")}),We.onCompleted(()=>{ie=!1,O.show(),document.getElementById("scene-name").style.display="block",H.resize(),P()}),window.requestAnimationFrame(We.start),ve.preventPopState=!0;let Xe=Re.substring(1,Re.length),Tt=X.sources[Xe].night!==null;Re=`#${X.name}.${Xe}`,e&&Tt&&(Re+=".night"),window.location.href=Re}),document.getElementById("scene-name").classList.remove("no-map"),H.showPoints(!1)):(ve.global.hasMap=!1,ve.global.lookDirectionOffset=0,H.enabled(!1),$.style.display="none",document.getElementById("scene-name").classList.add("no-map"),R.classList.add("disabled")),L.daytime==="night"&&(v.classList.add("night"),i=!0)},function(){be.resetCamera(ge),setTimeout(()=>{window.requestAnimationFrame(n.start)},2e3),Se(X),D!==null&&ve.setCurrentLocationInMap(Te.inMapCoordinate)},Re=>console.log(Re))}xe();function P(){let L=ve.getParameters(window.location.href),Z=ve.loadScene(L.scene),X=Z.data,ce=Z.status;const ge=X.sources[L.point]===void 0||ce===101?X.sources[X.defaultPoint]:X.sources[L.point],Te=L.daytime==="night"&&ge.night!==null?ge.night:ge.day,C=L.daytime==="night"&&ge.night!==null;e=C;const se=X.map,D=ge.views!==null?ve.updateUrl(ge.views,X.name,C):void 0,ue=ge.infos!==null?ge.infos:void 0;be.load(Te,D,ue,function(){document.getElementById("loading-icon").style.display="block"},function(){document.getElementById("loading-icon").style.display="none",Se(X),se!==null&&ve.setCurrentLocationInMap(ge.inMapCoordinate)},de=>console.log(de))}function Fe(){let L=ve.getParameters(window.location.href),Z=ve.loadScene(L.scene),X=Z.data,ce=Z.status;const ge=X.defaultViewAngle,Te=X.sources[L.point]===void 0||ce===101?X.sources[X.defaultPoint]:X.sources[L.point],C=L.daytime==="night"&&Te.night!==null?Te.night:Te.day,se=L.daytime==="night"&&Te.night!==null,D=X.map,ue=Te.views!==null?ve.updateUrl(Te.views,X.name,se):void 0,de=Te.infos!==null?Te.infos:void 0;be.load(C,ue,de,function(){D!==null?(H.clearPoints(),H.setImage(D.src,D.width,D.height),$.style.display="block",$.classList.remove("hide"),ve.global.hasMap=!0,ve.global.lookDirectionOffset=D.lookDirectionOffset,D.points!==null&&H.setContentPoints(D.points,function(Re){Q.classList.remove("show"),H.showPoints(!1);let We=new _t(1,0,.5);We.update(function(at){$.style.top=`${10-at*10}px`,$.style.right=`${10-at*10}px`,$.style.width=`${30+70*at}%`,$.style.height=`${30+70*at}%`,z.style.borderRadius=`${(1-at)*5}px`,H.reset(1-at),document.getElementById("content-current-location-indicator").classList.add("mini-map")}),We.onCompleted(()=>{ie=!1,O.show(),document.getElementById("scene-name").style.display="block",H.resize(),P()}),window.requestAnimationFrame(We.start),ve.preventPopState=!0;let Xe=Re.substring(1,Re.length),Tt=X.sources[Xe].night!==null,He=ve.getParameters(window.location.href).daytime==="night";Re=`#${X.name}.${Xe}`,He&&Tt&&(Re+=".night"),window.location.href=Re}),document.getElementById("scene-name").classList.remove("no-map"),H.showPoints(!1),R.classList.remove("disabled")):(ve.global.hasMap=!1,ve.global.lookDirectionOffset=0,H.enabled(!1),$.style.display="none",document.getElementById("scene-name").classList.add("no-map"),R.classList.add("disabled")),G=!1,v.classList.remove("night"),i=!1},function(){be.resetCamera(ge),setTimeout(()=>{n.reset(),window.requestAnimationFrame(n.start)},2e3),Se(X),D!==null&&ve.setCurrentLocationInMap(Te.inMapCoordinate)},Re=>console.log(Re))}function Se(L){ve.global.scene=L.name;const Z=ve.getParameters(window.location.href).point;L.sources[Z]===void 0?ve.global.point=L.defaultPoint:ve.global.point=Z;const X=ve.global.scene;if(X==="levelview"){ve.history.scene!=="levelview"&&(w.showButton(),be.setCameraViewLimit(null,null,null,Ft.degToRad(95)));for(let se=0;se<c.length;se++)c[se].querySelector("span.icon").classList.remove("highlight");let C=ga[ve.getParameters(window.location.href).point];(C===void 0||C==="")&&(C="ctv-36-btn"),document.getElementById(C).querySelector("span.icon").classList.add("highlight")}else be.resetCameraViewLimit();let ce={grandlobby:"GRAND LOBBY",carpark:"CAR PARK",skylounge:"SKY LOUNGE",rooftopclub:"ROOFTOP CLUB",showunit:"SHOW UNIT",levelview:"LEVEL VIEW"},ge="";if(X==="levelview"){let C={lv36:"36",lv30:"30",lv25:"25",lv20:"20",lv15:"15",lv10:"10"},se=C[ve.getParameters(window.location.href).point];(se==null||se==="")&&(se=C.lv36),ge=" - "+se}document.getElementById("scene-name").innerText=ce[X]+ge,ve.history.scene=X;const Te=ve.getParameters(window.location.href);L.sources[Te.point]!==void 0?L.sources[Te.point].night!==null!==!1?(v.classList.remove("disabled"),e=!0):(v.classList.add("disabled"),v.classList.remove("night"),i=!1,e=!1):L.sources[L.defaultPoint].night!==null!==!1?(v.classList.remove("disabled"),e=!0):(v.classList.add("disabled"),v.classList.remove("night"),i=!1,e=!1)}function Ce(L){if(be.update(),H.update(),ee.update(),ve.global.hasMap===!0){let X=ve.global.lookDirectionOffset-be.getCameraRotation();X%=360,X<0&&(X+=360),document.getElementById("content-current-location-indicator").style.transform=`rotate(${X}deg)`}window.requestAnimationFrame(Ce)}window.requestAnimationFrame(Ce),window.addEventListener("popstate",function(){if(ve.preventPopState===!1){let X=ve.getParameters(window.location.href).scene;if(ve.isSceneExist(X)===!1&&(X="grandlobby"),ie){Q.classList.remove("show"),H.showPoints(!1);let ce=new _t(1,0,.5);ce.update(function(ge){$.style.top=`${10-ge*10}px`,$.style.right=`${10-ge*10}px`,$.style.width=`${30+70*ge}%`,$.style.height=`${30+70*ge}%`,z.style.borderRadius=`${(1-ge)*5}px`,H.reset(1-ge),document.getElementById("content-current-location-indicator").classList.add("mini-map")}),ce.onCompleted(()=>{ie=!1,O.show(),document.getElementById("scene-name").style.display="block",H.resize()}),window.requestAnimationFrame(ce.start)}X!==ve.history.scene?(T.close(),O.show(),X!=="levelview"&&(w.hideButton(),w.hideMenu()),document.getElementById("scene-loading").style.display="block",t.reset(),t.onCompleted(Fe),window.requestAnimationFrame(t.start),G=!1,ve.global.hasMap&&($.style.display="block",setTimeout(function(){$.classList.remove("hide"),H.resize()},250),document.getElementById("scene-name").classList.remove("no-map"))):(P(),ve.getParameters(window.location.href).daytime==="night"&&e?(v.classList.add("night"),i=!0):(v.classList.remove("night"),i=!1))}const L=document.getElementById("overlay-video"),Z=document.getElementById("video-player");L.style.display==="block"&&(L.style.display="none",L.style.opacity=0,Z.pause(),Z.currentTime=0),Y&&(B.style.display="none",B.style.opacity=0,ee.enabled(!1),Y=!1),ve.preventPopState=!1},!1),document.getElementById("entrance-page-button").addEventListener("click",function(){let L=document.getElementById("entrance-page"),Z=new _t(1,0,.4);Z.update(function(X){L.style.opacity=X,X===0&&L.remove()}),window.requestAnimationFrame(Z.start)});const Ae=document.getElementById("overlay-video");document.getElementById("overlay-video-content");const Ge=document.getElementById("video-player"),Be=document.getElementById("video"),Ie=document.getElementById("overlay-video-close-button");Ge.preload="auto",Ge.addEventListener("contextmenu",L=>L.preventDefault()),Be.addEventListener("click",function(L){T.close(),O.show(),ve.history.scene==="levelview"&&w.showButton(),Ae.style.display="block";let Z=new _t(0,1,.5);Z.update(function(X){Ae.style.opacity=X}),window.requestAnimationFrame(Z.start)}),Ie.addEventListener("click",function(L){let Z=new _t(0,1,.5,()=>{Ae.style.display="none",Ge.pause(),Ge.currentTime=0});Z.update(function(X){Ae.style.opacity=1-X}),window.requestAnimationFrame(Z.start)});let Ve;function $e(){Ve!==void 0&&clearTimeout(Ve),Ie.style.opacity=1,Ie.disabled=!1,Ve=setTimeout(function(){Ge.paused===!1&&(Ie.style.opacity=0,Ie.disabled=!0)},2e3)}Ge.addEventListener("play",$e),Ge.addEventListener("pause",$e),Ge.addEventListener("seeking",$e),Ge.addEventListener("mousemove",$e),Ge.addEventListener("touchend",$e),Ge.addEventListener("touchcancel",$e);const rt=document.getElementById("overlay-sequence-viewer-content"),b=document.getElementById("overlay-sequence-viewer"),x=document.getElementById("exterior-view"),k=document.getElementById("overlay-sequence-viewer-close-button"),ae=document.getElementById("overlay-sequence-viewer-loading"),re=[];for(let L=1;L<=15;L++)re.push(`sequence_image/middle/Horizon${L}.jpg`);const oe=[];for(let L=1;L<=15;L++)oe.push(`sequence_image/top/Vertical${L}.jpg`);const Ee=[re,oe];var le=new Cf(rt,Ee,15,2);le.onInit(()=>{ae.innerText="Loading..."}),le.onProgress((L,Z)=>{}),le.onLoadComplete(()=>{ae.style.display="none"}),x.addEventListener("click",function(){T.close(),O.show(),ve.history.scene==="levelview"&&w.showButton(),b.style.display="block";let L=new _t(0,1,.5,()=>{le.init()});L.update(function(Z){b.style.opacity=Z}),window.requestAnimationFrame(L.start)}),k.addEventListener("click",function(){let L=new _t(0,1,.5,()=>{b.style.display="none",le.reset()});L.update(function(Z){b.style.opacity=1-Z}),window.requestAnimationFrame(L.start)}),document.getElementById("register").addEventListener("click",function(L){window.open("https://www.crownpenang.com/")});let G=!1,ye;R.addEventListener("click",function(L){G===!1?(G=!0,ve.global.hasMap&&(ye!==void 0&&clearTimeout(ye),H.enabled(!1),$.classList.add("hide"),ye=setTimeout(function(){$.style.display="none"},500),document.getElementById("scene-name").classList.add("no-map"))):(G=!1,ve.global.hasMap&&(ye!==void 0&&clearTimeout(ye),$.style.display="block",ye=setTimeout(function(){$.classList.remove("hide"),H.resize()},250),document.getElementById("scene-name").classList.remove("no-map")))})});var ve={global:{scene:void 0,point:void 0,hasMap:!1,lookDirectionOffset:0},preventPopState:!1,history:{scene:null,point:null},getParameters:function(i){let e=i.match(/#.*/),n=(e!==null?e[0].substring(1,e[0].length):"").split("."),r=n.length>0?n[0]:void 0,s=n.length>1?n[1]:void 0,o=n.length>2?n[2]:void 0;return{scene:r,point:s,daytime:o}},loadScene:function(i){let e,t=200;switch(i){case"grandlobby":e=ma;break;case"carpark":e=Pf;break;case"showunit":e=Df;break;case"skylounge":e=If;break;case"rooftopclub":e=Lf;break;case"levelview":e=Uf;break;default:e=ma,t=101;break}return{data:e,status:t}},isSceneExist:function(i){switch(i){case"grandlobby":case"showunit":case"skylounge":case"rooftopclub":case"levelview":return!0;default:return!1}},updateUrl:function(i,e,t){let n=[i.length],s=ve.getParameters(window.location.href).daytime==="night"&&t?".night":"";for(let o=0;o<i.length;o++)n[o]={url:`#${e}.${i[o].url.substring(1,i[o].url.length)}${s}`,coordinate:i[o].coordinate,lockY:i[o].lockY};return n},setCurrentLocationInMap:function({x:i,y:e}){let t=document.getElementById("content-current-location-indicator");t.style.left=`${i}px`,t.style.top=`${e}px`,t.style.display="block"}};
