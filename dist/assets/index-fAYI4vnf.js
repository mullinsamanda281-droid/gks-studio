var gc=Object.defineProperty;var wc=(r,t,e)=>t in r?gc(r,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):r[t]=e;var vc=(r,t)=>()=>(t||r((t={exports:{}}).exports,t),t.exports);var it=(r,t,e)=>wc(r,typeof t!="symbol"?t+"":t,e);var ap=vc((lp,ac)=>{(function(){const r=document.createElement("link").relList;if(!(r&&r.supports&&r.supports("modulepreload"))){for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver(e=>{for(const i of e)if(i.type==="childList")for(const n of i.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&t(n)}).observe(document,{childList:!0,subtree:!0})}function t(e){if(e.ep)return;e.ep=!0;const i=function(n){const s={};return n.integrity&&(s.integrity=n.integrity),n.referrerPolicy&&(s.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?s.credentials="include":n.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}(e);fetch(e.href,i)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Ms="165",yc=0,bc=1,xc=2,Ui=100,Sc=101,Mc=102,Ec=200,Tc=201,Ac=202,Rc=203,Cc=204,Pc=205,Lc=206,Ic=207,Dc=208,Uc=209,Nc=210,Oc=211,Fc=212,zc=213,Bc=214,Ji=301,Ki=302,or=306,Es=1e3,Un=1001,Ts=1002,ze=1003,kc=1004,lr=1005,Ke=1006,As=1007,Nn=1008,Zi=1009,cr=1012,$a=1013,$i=1014,wi=1015,hr=1016,Qi=1020,vi=1023,On=1026,tn=1027,Rs=33776,Cs=33777,Ps=33778,Ls=33779,Is=36492,en="",Ze="srgb",yi="srgb-linear",Ds="display-p3",dr="display-p3-linear",ur="linear",$t="srgb",pr="rec709",_r="p3",nn=7680,Hc=512,Gc=513,Vc=514,Wc=515,jc=516,Xc=517,qc=518,Yc=519,Qa="300 es",rn=2e3,mr=2001;class sn{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const i=this._listeners;return i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const i=this._listeners[t];if(i!==void 0){const n=i.indexOf(e);n!==-1&&i.splice(n,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const e=this._listeners[t.type];if(e!==void 0){t.target=this;const i=e.slice(0);for(let n=0,s=i.length;n<s;n++)i[n].call(this,t);t.target=null}}}const Se=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let to=1234567;const Fn=Math.PI/180,zn=180/Math.PI;function an(){const r=4294967295*Math.random()|0,t=4294967295*Math.random()|0,e=4294967295*Math.random()|0,i=4294967295*Math.random()|0;return(Se[255&r]+Se[r>>8&255]+Se[r>>16&255]+Se[r>>24&255]+"-"+Se[255&t]+Se[t>>8&255]+"-"+Se[t>>16&15|64]+Se[t>>24&255]+"-"+Se[63&e|128]+Se[e>>8&255]+"-"+Se[e>>16&255]+Se[e>>24&255]+Se[255&i]+Se[i>>8&255]+Se[i>>16&255]+Se[i>>24&255]).toLowerCase()}function we(r,t,e){return Math.max(t,Math.min(e,r))}function Us(r,t){return(r%t+t)%t}function Bn(r,t,e){return(1-e)*r+e*t}function on(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function Te(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return Math.round(4294967295*r);case Uint16Array:return Math.round(65535*r);case Uint8Array:return Math.round(255*r);case Int32Array:return Math.round(2147483647*r);case Int16Array:return Math.round(32767*r);case Int8Array:return Math.round(127*r);default:throw new Error("Invalid component type.")}}const Jc={DEG2RAD:Fn,RAD2DEG:zn,generateUUID:an,clamp:we,euclideanModulo:Us,mapLinear:function(r,t,e,i,n){return i+(r-t)*(n-i)/(e-t)},inverseLerp:function(r,t,e){return r!==t?(e-r)/(t-r):0},lerp:Bn,damp:function(r,t,e,i){return Bn(r,t,1-Math.exp(-e*i))},pingpong:function(r,t=1){return t-Math.abs(Us(r,2*t)-t)},smoothstep:function(r,t,e){return r<=t?0:r>=e?1:(r=(r-t)/(e-t))*r*(3-2*r)},smootherstep:function(r,t,e){return r<=t?0:r>=e?1:(r=(r-t)/(e-t))*r*r*(r*(6*r-15)+10)},randInt:function(r,t){return r+Math.floor(Math.random()*(t-r+1))},randFloat:function(r,t){return r+Math.random()*(t-r)},randFloatSpread:function(r){return r*(.5-Math.random())},seededRandom:function(r){r!==void 0&&(to=r);let t=to+=1831565813;return t=Math.imul(t^t>>>15,1|t),t^=t+Math.imul(t^t>>>7,61|t),((t^t>>>14)>>>0)/4294967296},degToRad:function(r){return r*Fn},radToDeg:function(r){return r*zn},isPowerOfTwo:function(r){return!(r&r-1)&&r!==0},ceilPowerOfTwo:function(r){return Math.pow(2,Math.ceil(Math.log(r)/Math.LN2))},floorPowerOfTwo:function(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))},setQuaternionFromProperEuler:function(r,t,e,i,n){const s=Math.cos,a=Math.sin,o=s(e/2),l=a(e/2),c=s((t+i)/2),h=a((t+i)/2),d=s((t-i)/2),p=a((t-i)/2),_=s((i-t)/2),f=a((i-t)/2);switch(n){case"XYX":r.set(o*h,l*d,l*p,o*c);break;case"YZY":r.set(l*p,o*h,l*d,o*c);break;case"ZXZ":r.set(l*d,l*p,o*h,o*c);break;case"XZX":r.set(o*h,l*f,l*_,o*c);break;case"YXY":r.set(l*_,o*h,l*f,o*c);break;case"ZYZ":r.set(l*f,l*_,o*h,o*c)}},normalize:Te,denormalize:on};class ut{constructor(t=0,e=0){ut.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,i=this.y,n=t.elements;return this.x=n[0]*e+n[3]*i+n[6],this.y=n[1]*e+n[4]*i+n[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(we(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const i=Math.cos(e),n=Math.sin(e),s=this.x-t.x,a=this.y-t.y;return this.x=s*i-a*n+t.x,this.y=s*n+a*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Lt{constructor(t,e,i,n,s,a,o,l,c){Lt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,n,s,a,o,l,c)}set(t,e,i,n,s,a,o,l,c){const h=this.elements;return h[0]=t,h[1]=n,h[2]=o,h[3]=e,h[4]=s,h[5]=l,h[6]=i,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,n=e.elements,s=this.elements,a=i[0],o=i[3],l=i[6],c=i[1],h=i[4],d=i[7],p=i[2],_=i[5],f=i[8],g=n[0],m=n[3],y=n[6],w=n[1],v=n[4],R=n[7],N=n[2],A=n[5],C=n[8];return s[0]=a*g+o*w+l*N,s[3]=a*m+o*v+l*A,s[6]=a*y+o*R+l*C,s[1]=c*g+h*w+d*N,s[4]=c*m+h*v+d*A,s[7]=c*y+h*R+d*C,s[2]=p*g+_*w+f*N,s[5]=p*m+_*v+f*A,s[8]=p*y+_*R+f*C,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[1],n=t[2],s=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8];return e*a*h-e*o*c-i*s*h+i*o*l+n*s*c-n*a*l}invert(){const t=this.elements,e=t[0],i=t[1],n=t[2],s=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],d=h*a-o*c,p=o*l-h*s,_=c*s-a*l,f=e*d+i*p+n*_;if(f===0)return this.set(0,0,0,0,0,0,0,0,0);const g=1/f;return t[0]=d*g,t[1]=(n*c-h*i)*g,t[2]=(o*i-n*a)*g,t[3]=p*g,t[4]=(h*e-n*l)*g,t[5]=(n*s-o*e)*g,t[6]=_*g,t[7]=(i*l-c*e)*g,t[8]=(a*e-i*s)*g,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,n,s,a,o){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*a+c*o)+a+t,-n*c,n*l,-n*(-c*a+l*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(Ns.makeScale(t,e)),this}rotate(t){return this.premultiply(Ns.makeRotation(-t)),this}translate(t,e){return this.premultiply(Ns.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,i=t.elements;for(let n=0;n<9;n++)if(e[n]!==i[n])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Ns=new Lt;function eo(r){for(let t=r.length-1;t>=0;--t)if(r[t]>=65535)return!0;return!1}function fr(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function Kc(){const r=fr("canvas");return r.style.display="block",r}const io={};function no(r){r in io||(io[r]=!0)}const ro=new Lt().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),so=new Lt().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),gr={[yi]:{transfer:ur,primaries:pr,toReference:r=>r,fromReference:r=>r},[Ze]:{transfer:$t,primaries:pr,toReference:r=>r.convertSRGBToLinear(),fromReference:r=>r.convertLinearToSRGB()},[dr]:{transfer:ur,primaries:_r,toReference:r=>r.applyMatrix3(so),fromReference:r=>r.applyMatrix3(ro)},[Ds]:{transfer:$t,primaries:_r,toReference:r=>r.convertSRGBToLinear().applyMatrix3(so),fromReference:r=>r.applyMatrix3(ro).convertLinearToSRGB()}},Zc=new Set([yi,dr]),Xt={enabled:!0,_workingColorSpace:yi,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(r){if(!Zc.has(r))throw new Error(`Unsupported working color space, "${r}".`);this._workingColorSpace=r},convert:function(r,t,e){if(this.enabled===!1||t===e||!t||!e)return r;const i=gr[t].toReference;return(0,gr[e].fromReference)(i(r))},fromWorkingColorSpace:function(r,t){return this.convert(r,this._workingColorSpace,t)},toWorkingColorSpace:function(r,t){return this.convert(r,t,this._workingColorSpace)},getPrimaries:function(r){return gr[r].primaries},getTransfer:function(r){return r===en?ur:gr[r].transfer}};function ln(r){return r<.04045?.0773993808*r:Math.pow(.9478672986*r+.0521327014,2.4)}function Os(r){return r<.0031308?12.92*r:1.055*Math.pow(r,.41666)-.055}let cn;class $c{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{cn===void 0&&(cn=fr("canvas")),cn.width=t.width,cn.height=t.height;const i=cn.getContext("2d");t instanceof ImageData?i.putImageData(t,0,0):i.drawImage(t,0,0,t.width,t.height),e=cn}return e.width>2048||e.height>2048?e.toDataURL("image/jpeg",.6):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=fr("canvas");e.width=t.width,e.height=t.height;const i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);const n=i.getImageData(0,0,t.width,t.height),s=n.data;for(let a=0;a<s.length;a++)s[a]=255*ln(s[a]/255);return i.putImageData(n,0,0),e}if(t.data){const e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(255*ln(e[i]/255)):e[i]=ln(e[i]);return{data:e,width:t.width,height:t.height}}return t}}let Qc=0;class ao{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Qc++}),this.uuid=an(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const i={uuid:this.uuid,url:""},n=this.data;if(n!==null){let s;if(Array.isArray(n)){s=[];for(let a=0,o=n.length;a<o;a++)n[a].isDataTexture?s.push(Fs(n[a].image)):s.push(Fs(n[a]))}else s=Fs(n);i.url=s}return e||(t.images[this.uuid]=i),i}}function Fs(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?$c.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:{}}let th=0;class Ce extends sn{constructor(t=Ce.DEFAULT_IMAGE,e=Ce.DEFAULT_MAPPING,i=1001,n=1001,s=1006,a=1008,o=1023,l=1009,c=Ce.DEFAULT_ANISOTROPY,h=""){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:th++}),this.uuid=an(),this.name="",this.source=new ao(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=n,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new ut(0,0),this.repeat=new ut(1,1),this.center=new ut(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Lt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==300)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Es:t.x=t.x-Math.floor(t.x);break;case Un:t.x=t.x<0?0:1;break;case Ts:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x)}if(t.y<0||t.y>1)switch(this.wrapT){case Es:t.y=t.y-Math.floor(t.y);break;case Un:t.y=t.y<0?0:1;break;case Ts:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y)}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Ce.DEFAULT_IMAGE=null,Ce.DEFAULT_MAPPING=300,Ce.DEFAULT_ANISOTROPY=1;class te{constructor(t=0,e=0,i=0,n=1){te.prototype.isVector4=!0,this.x=t,this.y=e,this.z=i,this.w=n}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,n){return this.x=t,this.y=e,this.z=i,this.w=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,i=this.y,n=this.z,s=this.w,a=t.elements;return this.x=a[0]*e+a[4]*i+a[8]*n+a[12]*s,this.y=a[1]*e+a[5]*i+a[9]*n+a[13]*s,this.z=a[2]*e+a[6]*i+a[10]*n+a[14]*s,this.w=a[3]*e+a[7]*i+a[11]*n+a[15]*s,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,n,s;const l=t.elements,c=l[0],h=l[4],d=l[8],p=l[1],_=l[5],f=l[9],g=l[2],m=l[6],y=l[10];if(Math.abs(h-p)<.01&&Math.abs(d-g)<.01&&Math.abs(f-m)<.01){if(Math.abs(h+p)<.1&&Math.abs(d+g)<.1&&Math.abs(f+m)<.1&&Math.abs(c+_+y-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const v=(c+1)/2,R=(_+1)/2,N=(y+1)/2,A=(h+p)/4,C=(d+g)/4,k=(f+m)/4;return v>R&&v>N?v<.01?(i=0,n=.707106781,s=.707106781):(i=Math.sqrt(v),n=A/i,s=C/i):R>N?R<.01?(i=.707106781,n=0,s=.707106781):(n=Math.sqrt(R),i=A/n,s=k/n):N<.01?(i=.707106781,n=.707106781,s=0):(s=Math.sqrt(N),i=C/s,n=k/s),this.set(i,n,s,e),this}let w=Math.sqrt((m-f)*(m-f)+(d-g)*(d-g)+(p-h)*(p-h));return Math.abs(w)<.001&&(w=1),this.x=(m-f)/w,this.y=(d-g)/w,this.z=(p-h)/w,this.w=Math.acos((c+_+y-1)/2),this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class eh extends sn{constructor(t=1,e=1,i={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new te(0,0,t,e),this.scissorTest=!1,this.viewport=new te(0,0,t,e);const n={width:t,height:e,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ke,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const s=new Ce(n,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);s.flipY=!1,s.generateMipmaps=i.generateMipmaps,s.internalFormat=i.internalFormat,this.textures=[];const a=i.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,i=1){if(this.width!==t||this.height!==e||this.depth!==i){this.width=t,this.height=e,this.depth=i;for(let n=0,s=this.textures.length;n<s;n++)this.textures[n].image.width=t,this.textures[n].image.height=e,this.textures[n].image.depth=i;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let i=0,n=t.textures.length;i<n;i++)this.textures[i]=t.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new ao(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ni extends eh{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}}class oo extends Ce{constructor(t=null,e=1,i=1,n=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:n},this.magFilter=ze,this.minFilter=ze,this.wrapR=Un,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class ih extends Ce{constructor(t=null,e=1,i=1,n=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:n},this.magFilter=ze,this.minFilter=ze,this.wrapR=Un,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}let kn=class{constructor(r=0,t=0,e=0,i=1){this.isQuaternion=!0,this._x=r,this._y=t,this._z=e,this._w=i}static slerpFlat(r,t,e,i,n,s,a){let o=e[i+0],l=e[i+1],c=e[i+2],h=e[i+3];const d=n[s+0],p=n[s+1],_=n[s+2],f=n[s+3];if(a===0)return r[t+0]=o,r[t+1]=l,r[t+2]=c,void(r[t+3]=h);if(a===1)return r[t+0]=d,r[t+1]=p,r[t+2]=_,void(r[t+3]=f);if(h!==f||o!==d||l!==p||c!==_){let g=1-a;const m=o*d+l*p+c*_+h*f,y=m>=0?1:-1,w=1-m*m;if(w>Number.EPSILON){const R=Math.sqrt(w),N=Math.atan2(R,m*y);g=Math.sin(g*N)/R,a=Math.sin(a*N)/R}const v=a*y;if(o=o*g+d*v,l=l*g+p*v,c=c*g+_*v,h=h*g+f*v,g===1-a){const R=1/Math.sqrt(o*o+l*l+c*c+h*h);o*=R,l*=R,c*=R,h*=R}}r[t]=o,r[t+1]=l,r[t+2]=c,r[t+3]=h}static multiplyQuaternionsFlat(r,t,e,i,n,s){const a=e[i],o=e[i+1],l=e[i+2],c=e[i+3],h=n[s],d=n[s+1],p=n[s+2],_=n[s+3];return r[t]=a*_+c*h+o*p-l*d,r[t+1]=o*_+c*d+l*h-a*p,r[t+2]=l*_+c*p+a*d-o*h,r[t+3]=c*_-a*h-o*d-l*p,r}get x(){return this._x}set x(r){this._x=r,this._onChangeCallback()}get y(){return this._y}set y(r){this._y=r,this._onChangeCallback()}get z(){return this._z}set z(r){this._z=r,this._onChangeCallback()}get w(){return this._w}set w(r){this._w=r,this._onChangeCallback()}set(r,t,e,i){return this._x=r,this._y=t,this._z=e,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(r){return this._x=r.x,this._y=r.y,this._z=r.z,this._w=r.w,this._onChangeCallback(),this}setFromEuler(r,t=!0){const e=r._x,i=r._y,n=r._z,s=r._order,a=Math.cos,o=Math.sin,l=a(e/2),c=a(i/2),h=a(n/2),d=o(e/2),p=o(i/2),_=o(n/2);switch(s){case"XYZ":this._x=d*c*h+l*p*_,this._y=l*p*h-d*c*_,this._z=l*c*_+d*p*h,this._w=l*c*h-d*p*_;break;case"YXZ":this._x=d*c*h+l*p*_,this._y=l*p*h-d*c*_,this._z=l*c*_-d*p*h,this._w=l*c*h+d*p*_;break;case"ZXY":this._x=d*c*h-l*p*_,this._y=l*p*h+d*c*_,this._z=l*c*_+d*p*h,this._w=l*c*h-d*p*_;break;case"ZYX":this._x=d*c*h-l*p*_,this._y=l*p*h+d*c*_,this._z=l*c*_-d*p*h,this._w=l*c*h+d*p*_;break;case"YZX":this._x=d*c*h+l*p*_,this._y=l*p*h+d*c*_,this._z=l*c*_-d*p*h,this._w=l*c*h-d*p*_;break;case"XZY":this._x=d*c*h-l*p*_,this._y=l*p*h-d*c*_,this._z=l*c*_+d*p*h,this._w=l*c*h+d*p*_}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(r,t){const e=t/2,i=Math.sin(e);return this._x=r.x*i,this._y=r.y*i,this._z=r.z*i,this._w=Math.cos(e),this._onChangeCallback(),this}setFromRotationMatrix(r){const t=r.elements,e=t[0],i=t[4],n=t[8],s=t[1],a=t[5],o=t[9],l=t[2],c=t[6],h=t[10],d=e+a+h;if(d>0){const p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(c-o)*p,this._y=(n-l)*p,this._z=(s-i)*p}else if(e>a&&e>h){const p=2*Math.sqrt(1+e-a-h);this._w=(c-o)/p,this._x=.25*p,this._y=(i+s)/p,this._z=(n+l)/p}else if(a>h){const p=2*Math.sqrt(1+a-e-h);this._w=(n-l)/p,this._x=(i+s)/p,this._y=.25*p,this._z=(o+c)/p}else{const p=2*Math.sqrt(1+h-e-a);this._w=(s-i)/p,this._x=(n+l)/p,this._y=(o+c)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(r,t){let e=r.dot(t)+1;return e<Number.EPSILON?(e=0,Math.abs(r.x)>Math.abs(r.z)?(this._x=-r.y,this._y=r.x,this._z=0,this._w=e):(this._x=0,this._y=-r.z,this._z=r.y,this._w=e)):(this._x=r.y*t.z-r.z*t.y,this._y=r.z*t.x-r.x*t.z,this._z=r.x*t.y-r.y*t.x,this._w=e),this.normalize()}angleTo(r){return 2*Math.acos(Math.abs(we(this.dot(r),-1,1)))}rotateTowards(r,t){const e=this.angleTo(r);if(e===0)return this;const i=Math.min(1,t/e);return this.slerp(r,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(r){return this._x*r._x+this._y*r._y+this._z*r._z+this._w*r._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let r=this.length();return r===0?(this._x=0,this._y=0,this._z=0,this._w=1):(r=1/r,this._x=this._x*r,this._y=this._y*r,this._z=this._z*r,this._w=this._w*r),this._onChangeCallback(),this}multiply(r){return this.multiplyQuaternions(this,r)}premultiply(r){return this.multiplyQuaternions(r,this)}multiplyQuaternions(r,t){const e=r._x,i=r._y,n=r._z,s=r._w,a=t._x,o=t._y,l=t._z,c=t._w;return this._x=e*c+s*a+i*l-n*o,this._y=i*c+s*o+n*a-e*l,this._z=n*c+s*l+e*o-i*a,this._w=s*c-e*a-i*o-n*l,this._onChangeCallback(),this}slerp(r,t){if(t===0)return this;if(t===1)return this.copy(r);const e=this._x,i=this._y,n=this._z,s=this._w;let a=s*r._w+e*r._x+i*r._y+n*r._z;if(a<0?(this._w=-r._w,this._x=-r._x,this._y=-r._y,this._z=-r._z,a=-a):this.copy(r),a>=1)return this._w=s,this._x=e,this._y=i,this._z=n,this;const o=1-a*a;if(o<=Number.EPSILON){const p=1-t;return this._w=p*s+t*this._w,this._x=p*e+t*this._x,this._y=p*i+t*this._y,this._z=p*n+t*this._z,this.normalize(),this}const l=Math.sqrt(o),c=Math.atan2(l,a),h=Math.sin((1-t)*c)/l,d=Math.sin(t*c)/l;return this._w=s*h+this._w*d,this._x=e*h+this._x*d,this._y=i*h+this._y*d,this._z=n*h+this._z*d,this._onChangeCallback(),this}slerpQuaternions(r,t,e){return this.copy(r).slerp(t,e)}random(){const r=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),e=Math.random(),i=Math.sqrt(1-e),n=Math.sqrt(e);return this.set(i*Math.sin(r),i*Math.cos(r),n*Math.sin(t),n*Math.cos(t))}equals(r){return r._x===this._x&&r._y===this._y&&r._z===this._z&&r._w===this._w}fromArray(r,t=0){return this._x=r[t],this._y=r[t+1],this._z=r[t+2],this._w=r[t+3],this._onChangeCallback(),this}toArray(r=[],t=0){return r[t]=this._x,r[t+1]=this._y,r[t+2]=this._z,r[t+3]=this._w,r}fromBufferAttribute(r,t){return this._x=r.getX(t),this._y=r.getY(t),this._z=r.getZ(t),this._w=r.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(r){return this._onChangeCallback=r,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},E=class sc{constructor(t=0,e=0,i=0){sc.prototype.isVector3=!0,this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(lo.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(lo.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,i=this.y,n=this.z,s=t.elements;return this.x=s[0]*e+s[3]*i+s[6]*n,this.y=s[1]*e+s[4]*i+s[7]*n,this.z=s[2]*e+s[5]*i+s[8]*n,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,i=this.y,n=this.z,s=t.elements,a=1/(s[3]*e+s[7]*i+s[11]*n+s[15]);return this.x=(s[0]*e+s[4]*i+s[8]*n+s[12])*a,this.y=(s[1]*e+s[5]*i+s[9]*n+s[13])*a,this.z=(s[2]*e+s[6]*i+s[10]*n+s[14])*a,this}applyQuaternion(t){const e=this.x,i=this.y,n=this.z,s=t.x,a=t.y,o=t.z,l=t.w,c=2*(a*n-o*i),h=2*(o*e-s*n),d=2*(s*i-a*e);return this.x=e+l*c+a*d-o*h,this.y=i+l*h+o*c-s*d,this.z=n+l*d+s*h-a*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,i=this.y,n=this.z,s=t.elements;return this.x=s[0]*e+s[4]*i+s[8]*n,this.y=s[1]*e+s[5]*i+s[9]*n,this.z=s[2]*e+s[6]*i+s[10]*n,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const i=t.x,n=t.y,s=t.z,a=e.x,o=e.y,l=e.z;return this.x=n*l-s*o,this.y=s*a-i*l,this.z=i*o-n*a,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return zs.copy(this).projectOnVector(t),this.sub(zs)}reflect(t){return this.sub(zs.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(we(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y,n=this.z-t.z;return e*e+i*i+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){const n=Math.sin(e)*t;return this.x=n*Math.sin(i),this.y=Math.cos(e)*t,this.z=n*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),n=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=n,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,4*e)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,3*e)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=2*Math.random()-1,i=Math.sqrt(1-e*e);return this.x=i*Math.cos(t),this.y=e,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};const zs=new E,lo=new kn;class Hn{constructor(t=new E(1/0,1/0,1/0),e=new E(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(Ge.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(Ge.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const i=Ge.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const i=t.geometry;if(i!==void 0){const s=i.getAttribute("position");if(e===!0&&s!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,Ge):Ge.fromBufferAttribute(s,a),Ge.applyMatrix4(t.matrixWorld),this.expandByPoint(Ge);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),wr.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),wr.copy(i.boundingBox)),wr.applyMatrix4(t.matrixWorld),this.union(wr)}const n=t.children;for(let s=0,a=n.length;s<a;s++)this.expandByObject(n[s],e);return this}containsPoint(t){return!(t.x<this.min.x||t.x>this.max.x||t.y<this.min.y||t.y>this.max.y||t.z<this.min.z||t.z>this.max.z)}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return!(t.max.x<this.min.x||t.min.x>this.max.x||t.max.y<this.min.y||t.min.y>this.max.y||t.max.z<this.min.z||t.min.z>this.max.z)}intersectsSphere(t){return this.clampPoint(t.center,Ge),Ge.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Gn),vr.subVectors(this.max,Gn),hn.subVectors(t.a,Gn),dn.subVectors(t.b,Gn),un.subVectors(t.c,Gn),bi.subVectors(dn,hn),xi.subVectors(un,dn),Oi.subVectors(hn,un);let e=[0,-bi.z,bi.y,0,-xi.z,xi.y,0,-Oi.z,Oi.y,bi.z,0,-bi.x,xi.z,0,-xi.x,Oi.z,0,-Oi.x,-bi.y,bi.x,0,-xi.y,xi.x,0,-Oi.y,Oi.x,0];return!!Bs(e,hn,dn,un,vr)&&(e=[1,0,0,0,1,0,0,0,1],!!Bs(e,hn,dn,un,vr)&&(yr.crossVectors(bi,xi),e=[yr.x,yr.y,yr.z],Bs(e,hn,dn,un,vr)))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Ge).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=.5*this.getSize(Ge).length()),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()||(ai[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),ai[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),ai[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),ai[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),ai[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),ai[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),ai[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),ai[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(ai)),this}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const ai=[new E,new E,new E,new E,new E,new E,new E,new E],Ge=new E,wr=new Hn,hn=new E,dn=new E,un=new E,bi=new E,xi=new E,Oi=new E,Gn=new E,vr=new E,yr=new E,Fi=new E;function Bs(r,t,e,i,n){for(let s=0,a=r.length-3;s<=a;s+=3){Fi.fromArray(r,s);const o=n.x*Math.abs(Fi.x)+n.y*Math.abs(Fi.y)+n.z*Math.abs(Fi.z),l=t.dot(Fi),c=e.dot(Fi),h=i.dot(Fi);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}const nh=new Hn,Vn=new E,ks=new E;class br{constructor(t=new E,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const i=this.center;e!==void 0?i.copy(e):nh.setFromPoints(t).getCenter(i);let n=0;for(let s=0,a=t.length;s<a;s++)n=Math.max(n,i.distanceToSquared(t[s]));return this.radius=Math.sqrt(n),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Vn.subVectors(t,this.center);const e=Vn.lengthSq();if(e>this.radius*this.radius){const i=Math.sqrt(e),n=.5*(i-this.radius);this.center.addScaledVector(Vn,n/i),this.radius+=n}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(ks.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Vn.copy(t.center).add(ks)),this.expandByPoint(Vn.copy(t.center).sub(ks))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const oi=new E,Hs=new E,xr=new E,Si=new E,Gs=new E,Sr=new E,Vs=new E;let co=class{constructor(r=new E,t=new E(0,0,-1)){this.origin=r,this.direction=t}set(r,t){return this.origin.copy(r),this.direction.copy(t),this}copy(r){return this.origin.copy(r.origin),this.direction.copy(r.direction),this}at(r,t){return t.copy(this.origin).addScaledVector(this.direction,r)}lookAt(r){return this.direction.copy(r).sub(this.origin).normalize(),this}recast(r){return this.origin.copy(this.at(r,oi)),this}closestPointToPoint(r,t){t.subVectors(r,this.origin);const e=t.dot(this.direction);return e<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,e)}distanceToPoint(r){return Math.sqrt(this.distanceSqToPoint(r))}distanceSqToPoint(r){const t=oi.subVectors(r,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(r):(oi.copy(this.origin).addScaledVector(this.direction,t),oi.distanceToSquared(r))}distanceSqToSegment(r,t,e,i){Hs.copy(r).add(t).multiplyScalar(.5),xr.copy(t).sub(r).normalize(),Si.copy(this.origin).sub(Hs);const n=.5*r.distanceTo(t),s=-this.direction.dot(xr),a=Si.dot(this.direction),o=-Si.dot(xr),l=Si.lengthSq(),c=Math.abs(1-s*s);let h,d,p,_;if(c>0)if(h=s*o-a,d=s*a-o,_=n*c,h>=0)if(d>=-_)if(d<=_){const f=1/c;h*=f,d*=f,p=h*(h+s*d+2*a)+d*(s*h+d+2*o)+l}else d=n,h=Math.max(0,-(s*d+a)),p=-h*h+d*(d+2*o)+l;else d=-n,h=Math.max(0,-(s*d+a)),p=-h*h+d*(d+2*o)+l;else d<=-_?(h=Math.max(0,-(-s*n+a)),d=h>0?-n:Math.min(Math.max(-n,-o),n),p=-h*h+d*(d+2*o)+l):d<=_?(h=0,d=Math.min(Math.max(-n,-o),n),p=d*(d+2*o)+l):(h=Math.max(0,-(s*n+a)),d=h>0?n:Math.min(Math.max(-n,-o),n),p=-h*h+d*(d+2*o)+l);else d=s>0?-n:n,h=Math.max(0,-(s*d+a)),p=-h*h+d*(d+2*o)+l;return e&&e.copy(this.origin).addScaledVector(this.direction,h),i&&i.copy(Hs).addScaledVector(xr,d),p}intersectSphere(r,t){oi.subVectors(r.center,this.origin);const e=oi.dot(this.direction),i=oi.dot(oi)-e*e,n=r.radius*r.radius;if(i>n)return null;const s=Math.sqrt(n-i),a=e-s,o=e+s;return o<0?null:a<0?this.at(o,t):this.at(a,t)}intersectsSphere(r){return this.distanceSqToPoint(r.center)<=r.radius*r.radius}distanceToPlane(r){const t=r.normal.dot(this.direction);if(t===0)return r.distanceToPoint(this.origin)===0?0:null;const e=-(this.origin.dot(r.normal)+r.constant)/t;return e>=0?e:null}intersectPlane(r,t){const e=this.distanceToPlane(r);return e===null?null:this.at(e,t)}intersectsPlane(r){const t=r.distanceToPoint(this.origin);return t===0?!0:r.normal.dot(this.direction)*t<0}intersectBox(r,t){let e,i,n,s,a,o;const l=1/this.direction.x,c=1/this.direction.y,h=1/this.direction.z,d=this.origin;return l>=0?(e=(r.min.x-d.x)*l,i=(r.max.x-d.x)*l):(e=(r.max.x-d.x)*l,i=(r.min.x-d.x)*l),c>=0?(n=(r.min.y-d.y)*c,s=(r.max.y-d.y)*c):(n=(r.max.y-d.y)*c,s=(r.min.y-d.y)*c),e>s||n>i?null:((n>e||isNaN(e))&&(e=n),(s<i||isNaN(i))&&(i=s),h>=0?(a=(r.min.z-d.z)*h,o=(r.max.z-d.z)*h):(a=(r.max.z-d.z)*h,o=(r.min.z-d.z)*h),e>o||a>i?null:((a>e||e!=e)&&(e=a),(o<i||i!=i)&&(i=o),i<0?null:this.at(e>=0?e:i,t)))}intersectsBox(r){return this.intersectBox(r,oi)!==null}intersectTriangle(r,t,e,i,n){Gs.subVectors(t,r),Sr.subVectors(e,r),Vs.crossVectors(Gs,Sr);let s,a=this.direction.dot(Vs);if(a>0){if(i)return null;s=1}else{if(!(a<0))return null;s=-1,a=-a}Si.subVectors(this.origin,r);const o=s*this.direction.dot(Sr.crossVectors(Si,Sr));if(o<0)return null;const l=s*this.direction.dot(Gs.cross(Si));if(l<0||o+l>a)return null;const c=-s*Si.dot(Vs);return c<0?null:this.at(c/a,n)}applyMatrix4(r){return this.origin.applyMatrix4(r),this.direction.transformDirection(r),this}equals(r){return r.origin.equals(this.origin)&&r.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}};class ee{constructor(t,e,i,n,s,a,o,l,c,h,d,p,_,f,g,m){ee.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,n,s,a,o,l,c,h,d,p,_,f,g,m)}set(t,e,i,n,s,a,o,l,c,h,d,p,_,f,g,m){const y=this.elements;return y[0]=t,y[4]=e,y[8]=i,y[12]=n,y[1]=s,y[5]=a,y[9]=o,y[13]=l,y[2]=c,y[6]=h,y[10]=d,y[14]=p,y[3]=_,y[7]=f,y[11]=g,y[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ee().fromArray(this.elements)}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){const e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,i=t.elements,n=1/pn.setFromMatrixColumn(t,0).length(),s=1/pn.setFromMatrixColumn(t,1).length(),a=1/pn.setFromMatrixColumn(t,2).length();return e[0]=i[0]*n,e[1]=i[1]*n,e[2]=i[2]*n,e[3]=0,e[4]=i[4]*s,e[5]=i[5]*s,e[6]=i[6]*s,e[7]=0,e[8]=i[8]*a,e[9]=i[9]*a,e[10]=i[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,i=t.x,n=t.y,s=t.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(n),c=Math.sin(n),h=Math.cos(s),d=Math.sin(s);if(t.order==="XYZ"){const p=a*h,_=a*d,f=o*h,g=o*d;e[0]=l*h,e[4]=-l*d,e[8]=c,e[1]=_+f*c,e[5]=p-g*c,e[9]=-o*l,e[2]=g-p*c,e[6]=f+_*c,e[10]=a*l}else if(t.order==="YXZ"){const p=l*h,_=l*d,f=c*h,g=c*d;e[0]=p+g*o,e[4]=f*o-_,e[8]=a*c,e[1]=a*d,e[5]=a*h,e[9]=-o,e[2]=_*o-f,e[6]=g+p*o,e[10]=a*l}else if(t.order==="ZXY"){const p=l*h,_=l*d,f=c*h,g=c*d;e[0]=p-g*o,e[4]=-a*d,e[8]=f+_*o,e[1]=_+f*o,e[5]=a*h,e[9]=g-p*o,e[2]=-a*c,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){const p=a*h,_=a*d,f=o*h,g=o*d;e[0]=l*h,e[4]=f*c-_,e[8]=p*c+g,e[1]=l*d,e[5]=g*c+p,e[9]=_*c-f,e[2]=-c,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){const p=a*l,_=a*c,f=o*l,g=o*c;e[0]=l*h,e[4]=g-p*d,e[8]=f*d+_,e[1]=d,e[5]=a*h,e[9]=-o*h,e[2]=-c*h,e[6]=_*d+f,e[10]=p-g*d}else if(t.order==="XZY"){const p=a*l,_=a*c,f=o*l,g=o*c;e[0]=l*h,e[4]=-d,e[8]=c*h,e[1]=p*d+g,e[5]=a*h,e[9]=_*d-f,e[2]=f*d-_,e[6]=o*h,e[10]=g*d+p}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(rh,t,sh)}lookAt(t,e,i){const n=this.elements;return Ie.subVectors(t,e),Ie.lengthSq()===0&&(Ie.z=1),Ie.normalize(),Mi.crossVectors(i,Ie),Mi.lengthSq()===0&&(Math.abs(i.z)===1?Ie.x+=1e-4:Ie.z+=1e-4,Ie.normalize(),Mi.crossVectors(i,Ie)),Mi.normalize(),Mr.crossVectors(Ie,Mi),n[0]=Mi.x,n[4]=Mr.x,n[8]=Ie.x,n[1]=Mi.y,n[5]=Mr.y,n[9]=Ie.y,n[2]=Mi.z,n[6]=Mr.z,n[10]=Ie.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,n=e.elements,s=this.elements,a=i[0],o=i[4],l=i[8],c=i[12],h=i[1],d=i[5],p=i[9],_=i[13],f=i[2],g=i[6],m=i[10],y=i[14],w=i[3],v=i[7],R=i[11],N=i[15],A=n[0],C=n[4],k=n[8],D=n[12],V=n[1],Y=n[5],H=n[9],Z=n[13],W=n[2],Q=n[6],K=n[10],at=n[14],lt=n[3],wt=n[7],At=n[11],tt=n[15];return s[0]=a*A+o*V+l*W+c*lt,s[4]=a*C+o*Y+l*Q+c*wt,s[8]=a*k+o*H+l*K+c*At,s[12]=a*D+o*Z+l*at+c*tt,s[1]=h*A+d*V+p*W+_*lt,s[5]=h*C+d*Y+p*Q+_*wt,s[9]=h*k+d*H+p*K+_*At,s[13]=h*D+d*Z+p*at+_*tt,s[2]=f*A+g*V+m*W+y*lt,s[6]=f*C+g*Y+m*Q+y*wt,s[10]=f*k+g*H+m*K+y*At,s[14]=f*D+g*Z+m*at+y*tt,s[3]=w*A+v*V+R*W+N*lt,s[7]=w*C+v*Y+R*Q+N*wt,s[11]=w*k+v*H+R*K+N*At,s[15]=w*D+v*Z+R*at+N*tt,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[4],n=t[8],s=t[12],a=t[1],o=t[5],l=t[9],c=t[13],h=t[2],d=t[6],p=t[10],_=t[14];return t[3]*(+s*l*d-n*c*d-s*o*p+i*c*p+n*o*_-i*l*_)+t[7]*(+e*l*_-e*c*p+s*a*p-n*a*_+n*c*h-s*l*h)+t[11]*(+e*c*d-e*o*_-s*a*d+i*a*_+s*o*h-i*c*h)+t[15]*(-n*o*h-e*l*d+e*o*p+n*a*d-i*a*p+i*l*h)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){const n=this.elements;return t.isVector3?(n[12]=t.x,n[13]=t.y,n[14]=t.z):(n[12]=t,n[13]=e,n[14]=i),this}invert(){const t=this.elements,e=t[0],i=t[1],n=t[2],s=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],d=t[9],p=t[10],_=t[11],f=t[12],g=t[13],m=t[14],y=t[15],w=d*m*c-g*p*c+g*l*_-o*m*_-d*l*y+o*p*y,v=f*p*c-h*m*c-f*l*_+a*m*_+h*l*y-a*p*y,R=h*g*c-f*d*c+f*o*_-a*g*_-h*o*y+a*d*y,N=f*d*l-h*g*l-f*o*p+a*g*p+h*o*m-a*d*m,A=e*w+i*v+n*R+s*N;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const C=1/A;return t[0]=w*C,t[1]=(g*p*s-d*m*s-g*n*_+i*m*_+d*n*y-i*p*y)*C,t[2]=(o*m*s-g*l*s+g*n*c-i*m*c-o*n*y+i*l*y)*C,t[3]=(d*l*s-o*p*s-d*n*c+i*p*c+o*n*_-i*l*_)*C,t[4]=v*C,t[5]=(h*m*s-f*p*s+f*n*_-e*m*_-h*n*y+e*p*y)*C,t[6]=(f*l*s-a*m*s-f*n*c+e*m*c+a*n*y-e*l*y)*C,t[7]=(a*p*s-h*l*s+h*n*c-e*p*c-a*n*_+e*l*_)*C,t[8]=R*C,t[9]=(f*d*s-h*g*s-f*i*_+e*g*_+h*i*y-e*d*y)*C,t[10]=(a*g*s-f*o*s+f*i*c-e*g*c-a*i*y+e*o*y)*C,t[11]=(h*o*s-a*d*s-h*i*c+e*d*c+a*i*_-e*o*_)*C,t[12]=N*C,t[13]=(h*g*n-f*d*n+f*i*p-e*g*p-h*i*m+e*d*m)*C,t[14]=(f*o*n-a*g*n-f*i*l+e*g*l+a*i*m-e*o*m)*C,t[15]=(a*d*n-h*o*n+h*i*l-e*d*l-a*i*p+e*o*p)*C,this}scale(t){const e=this.elements,i=t.x,n=t.y,s=t.z;return e[0]*=i,e[4]*=n,e[8]*=s,e[1]*=i,e[5]*=n,e[9]*=s,e[2]*=i,e[6]*=n,e[10]*=s,e[3]*=i,e[7]*=n,e[11]*=s,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],n=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,n))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const i=Math.cos(e),n=Math.sin(e),s=1-i,a=t.x,o=t.y,l=t.z,c=s*a,h=s*o;return this.set(c*a+i,c*o-n*l,c*l+n*o,0,c*o+n*l,h*o+i,h*l-n*a,0,c*l-n*o,h*l+n*a,s*l*l+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,n,s,a){return this.set(1,i,s,0,t,1,a,0,e,n,1,0,0,0,0,1),this}compose(t,e,i){const n=this.elements,s=e._x,a=e._y,o=e._z,l=e._w,c=s+s,h=a+a,d=o+o,p=s*c,_=s*h,f=s*d,g=a*h,m=a*d,y=o*d,w=l*c,v=l*h,R=l*d,N=i.x,A=i.y,C=i.z;return n[0]=(1-(g+y))*N,n[1]=(_+R)*N,n[2]=(f-v)*N,n[3]=0,n[4]=(_-R)*A,n[5]=(1-(p+y))*A,n[6]=(m+w)*A,n[7]=0,n[8]=(f+v)*C,n[9]=(m-w)*C,n[10]=(1-(p+g))*C,n[11]=0,n[12]=t.x,n[13]=t.y,n[14]=t.z,n[15]=1,this}decompose(t,e,i){const n=this.elements;let s=pn.set(n[0],n[1],n[2]).length();const a=pn.set(n[4],n[5],n[6]).length(),o=pn.set(n[8],n[9],n[10]).length();this.determinant()<0&&(s=-s),t.x=n[12],t.y=n[13],t.z=n[14],Ve.copy(this);const l=1/s,c=1/a,h=1/o;return Ve.elements[0]*=l,Ve.elements[1]*=l,Ve.elements[2]*=l,Ve.elements[4]*=c,Ve.elements[5]*=c,Ve.elements[6]*=c,Ve.elements[8]*=h,Ve.elements[9]*=h,Ve.elements[10]*=h,e.setFromRotationMatrix(Ve),i.x=s,i.y=a,i.z=o,this}makePerspective(t,e,i,n,s,a,o=2e3){const l=this.elements,c=2*s/(e-t),h=2*s/(i-n),d=(e+t)/(e-t),p=(i+n)/(i-n);let _,f;if(o===rn)_=-(a+s)/(a-s),f=-2*a*s/(a-s);else{if(o!==mr)throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);_=-a/(a-s),f=-a*s/(a-s)}return l[0]=c,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=h,l[9]=p,l[13]=0,l[2]=0,l[6]=0,l[10]=_,l[14]=f,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,i,n,s,a,o=2e3){const l=this.elements,c=1/(e-t),h=1/(i-n),d=1/(a-s),p=(e+t)*c,_=(i+n)*h;let f,g;if(o===rn)f=(a+s)*d,g=-2*d;else{if(o!==mr)throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);f=s*d,g=-1*d}return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-p,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-_,l[2]=0,l[6]=0,l[10]=g,l[14]=-f,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,i=t.elements;for(let n=0;n<16;n++)if(e[n]!==i[n])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}}const pn=new E,Ve=new ee,rh=new E(0,0,0),sh=new E(1,1,1),Mi=new E,Mr=new E,Ie=new E,ho=new ee,uo=new kn;class ni{constructor(t=0,e=0,i=0,n=ni.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=n}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,n=this._order){return this._x=t,this._y=e,this._z=i,this._order=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){const n=t.elements,s=n[0],a=n[4],o=n[8],l=n[1],c=n[5],h=n[9],d=n[2],p=n[6],_=n[10];switch(e){case"XYZ":this._y=Math.asin(we(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,_),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(p,c),this._z=0);break;case"YXZ":this._x=Math.asin(-we(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,_),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,s),this._z=0);break;case"ZXY":this._x=Math.asin(we(p,-1,1)),Math.abs(p)<.9999999?(this._y=Math.atan2(-d,_),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-we(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(p,_),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(we(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-d,s)):(this._x=0,this._y=Math.atan2(o,_));break;case"XZY":this._z=Math.asin(-we(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(p,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-h,_),this._y=0)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return ho.makeRotationFromQuaternion(t),this.setFromRotationMatrix(ho,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return uo.setFromEuler(this),this.setFromQuaternion(uo,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ni.DEFAULT_ORDER="XYZ";class po{constructor(){this.mask=1}set(t){this.mask=1<<t>>>0}enable(t){this.mask|=1<<t}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t}disable(t){this.mask&=~(1<<t)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return!!(this.mask&1<<t)}}let ah=0;const _o=new E,_n=new kn,li=new ee,Er=new E,Wn=new E,oh=new E,lh=new kn,mo=new E(1,0,0),fo=new E(0,1,0),go=new E(0,0,1),wo={type:"added"},ch={type:"removed"},mn={type:"childadded",child:null},Ws={type:"childremoved",child:null};class xe extends sn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:ah++}),this.uuid=an(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=xe.DEFAULT_UP.clone();const t=new E,e=new ni,i=new kn,n=new E(1,1,1);e._onChange(function(){i.setFromEuler(e,!1)}),i._onChange(function(){e.setFromQuaternion(i,void 0,!1)}),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:n},modelViewMatrix:{value:new ee},normalMatrix:{value:new Lt}}),this.matrix=new ee,this.matrixWorld=new ee,this.matrixAutoUpdate=xe.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=xe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new po,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return _n.setFromAxisAngle(t,e),this.quaternion.multiply(_n),this}rotateOnWorldAxis(t,e){return _n.setFromAxisAngle(t,e),this.quaternion.premultiply(_n),this}rotateX(t){return this.rotateOnAxis(mo,t)}rotateY(t){return this.rotateOnAxis(fo,t)}rotateZ(t){return this.rotateOnAxis(go,t)}translateOnAxis(t,e){return _o.copy(t).applyQuaternion(this.quaternion),this.position.add(_o.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(mo,t)}translateY(t){return this.translateOnAxis(fo,t)}translateZ(t){return this.translateOnAxis(go,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(li.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?Er.copy(t):Er.set(t,e,i);const n=this.parent;this.updateWorldMatrix(!0,!1),Wn.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?li.lookAt(Wn,Er,this.up):li.lookAt(Er,Wn,this.up),this.quaternion.setFromRotationMatrix(li),n&&(li.extractRotation(n.matrixWorld),_n.setFromRotationMatrix(li),this.quaternion.premultiply(_n.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this||t&&t.isObject3D&&(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(wo),mn.child=t,this.dispatchEvent(mn),mn.child=null),this}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(ch),Ws.child=t,this.dispatchEvent(Ws),Ws.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),li.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),li.multiply(t.parent.matrixWorld)),t.applyMatrix4(li),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(wo),mn.child=t,this.dispatchEvent(mn),mn.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,n=this.children.length;i<n;i++){const s=this.children[i].getObjectByProperty(t,e);if(s!==void 0)return s}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);const n=this.children;for(let s=0,a=n.length;s<a;s++)n[s].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Wn,t,oh),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Wn,lh,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let i=0,n=e.length;i<n;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let i=0,n=e.length;i<n;i++)e[i].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let i=0,n=e.length;i<n;i++){const s=e[i];s.matrixWorldAutoUpdate!==!0&&t!==!0||s.updateMatrixWorld(t)}}updateWorldMatrix(t,e){const i=this.parent;if(t===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),e===!0){const n=this.children;for(let s=0,a=n.length;s<a;s++){const o=n[s];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(t){const e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const n={};function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.castShadow===!0&&(n.castShadow=!0),this.receiveShadow===!0&&(n.receiveShadow=!0),this.visible===!1&&(n.visible=!1),this.frustumCulled===!1&&(n.frustumCulled=!1),this.renderOrder!==0&&(n.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(n.userData=this.userData),n.layers=this.layers.mask,n.matrix=this.matrix.toArray(),n.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(n.matrixAutoUpdate=!1),this.isInstancedMesh&&(n.type="InstancedMesh",n.count=this.count,n.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(n.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(n.type="BatchedMesh",n.perObjectFrustumCulled=this.perObjectFrustumCulled,n.sortObjects=this.sortObjects,n.drawRanges=this._drawRanges,n.reservedRanges=this._reservedRanges,n.visibility=this._visibility,n.active=this._active,n.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),n.maxGeometryCount=this._maxGeometryCount,n.maxVertexCount=this._maxVertexCount,n.maxIndexCount=this._maxIndexCount,n.geometryInitialized=this._geometryInitialized,n.geometryCount=this._geometryCount,n.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(n.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(n.boundingSphere={center:n.boundingSphere.center.toArray(),radius:n.boundingSphere.radius}),this.boundingBox!==null&&(n.boundingBox={min:n.boundingBox.min.toArray(),max:n.boundingBox.max.toArray()})),this.isScene)this.background&&(this.background.isColor?n.background=this.background.toJSON():this.background.isTexture&&(n.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(n.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){n.geometry=s(t.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const d=l[c];s(t.shapes,d)}else s(t.shapes,l)}}if(this.isSkinnedMesh&&(n.bindMode=this.bindMode,n.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),n.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(t.materials,this.material[l]));n.material=o}else n.material=s(t.materials,this.material);if(this.children.length>0){n.children=[];for(let o=0;o<this.children.length;o++)n.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){n.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];n.animations.push(s(t.animations,l))}}if(e){const o=a(t.geometries),l=a(t.materials),c=a(t.textures),h=a(t.images),d=a(t.shapes),p=a(t.skeletons),_=a(t.animations),f=a(t.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),h.length>0&&(i.images=h),d.length>0&&(i.shapes=d),p.length>0&&(i.skeletons=p),_.length>0&&(i.animations=_),f.length>0&&(i.nodes=f)}return i.object=n,i;function a(o){const l=[];for(const c in o){const h=o[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){const n=t.children[i];this.add(n.clone())}return this}}xe.DEFAULT_UP=new E(0,1,0),xe.DEFAULT_MATRIX_AUTO_UPDATE=!0,xe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const We=new E,ci=new E,js=new E,hi=new E,fn=new E,gn=new E,vo=new E,Xs=new E,qs=new E,Ys=new E;let Tr=class Pn{constructor(t=new E,e=new E,i=new E){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,n){n.subVectors(i,e),We.subVectors(t,e),n.cross(We);const s=n.lengthSq();return s>0?n.multiplyScalar(1/Math.sqrt(s)):n.set(0,0,0)}static getBarycoord(t,e,i,n,s){We.subVectors(n,e),ci.subVectors(i,e),js.subVectors(t,e);const a=We.dot(We),o=We.dot(ci),l=We.dot(js),c=ci.dot(ci),h=ci.dot(js),d=a*c-o*o;if(d===0)return s.set(0,0,0),null;const p=1/d,_=(c*l-o*h)*p,f=(a*h-o*l)*p;return s.set(1-_-f,f,_)}static containsPoint(t,e,i,n){return this.getBarycoord(t,e,i,n,hi)!==null&&hi.x>=0&&hi.y>=0&&hi.x+hi.y<=1}static getInterpolation(t,e,i,n,s,a,o,l){return this.getBarycoord(t,e,i,n,hi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,hi.x),l.addScaledVector(a,hi.y),l.addScaledVector(o,hi.z),l)}static isFrontFacing(t,e,i,n){return We.subVectors(i,e),ci.subVectors(t,e),We.cross(ci).dot(n)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,n){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[n]),this}setFromAttributeAndIndices(t,e,i,n){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,n),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return We.subVectors(this.c,this.b),ci.subVectors(this.a,this.b),.5*We.cross(ci).length()}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Pn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return Pn.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,i,n,s){return Pn.getInterpolation(t,this.a,this.b,this.c,e,i,n,s)}containsPoint(t){return Pn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Pn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const i=this.a,n=this.b,s=this.c;let a,o;fn.subVectors(n,i),gn.subVectors(s,i),Xs.subVectors(t,i);const l=fn.dot(Xs),c=gn.dot(Xs);if(l<=0&&c<=0)return e.copy(i);qs.subVectors(t,n);const h=fn.dot(qs),d=gn.dot(qs);if(h>=0&&d<=h)return e.copy(n);const p=l*d-h*c;if(p<=0&&l>=0&&h<=0)return a=l/(l-h),e.copy(i).addScaledVector(fn,a);Ys.subVectors(t,s);const _=fn.dot(Ys),f=gn.dot(Ys);if(f>=0&&_<=f)return e.copy(s);const g=_*c-l*f;if(g<=0&&c>=0&&f<=0)return o=c/(c-f),e.copy(i).addScaledVector(gn,o);const m=h*f-_*d;if(m<=0&&d-h>=0&&_-f>=0)return vo.subVectors(s,n),o=(d-h)/(d-h+(_-f)),e.copy(n).addScaledVector(vo,o);const y=1/(m+g+p);return a=g*y,o=p*y,e.copy(i).addScaledVector(fn,a).addScaledVector(gn,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}};const yo={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ei={h:0,s:0,l:0},Ar={h:0,s:0,l:0};function Js(r,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?r+6*(t-r)*e:e<.5?t:e<2/3?r+6*(t-r)*(2/3-e):r}class kt{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){const n=t;n&&n.isColor?this.copy(n):typeof n=="number"?this.setHex(n):typeof n=="string"&&this.setStyle(n)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Ze){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(255&t)/255,Xt.toWorkingColorSpace(this,e),this}setRGB(t,e,i,n=Xt.workingColorSpace){return this.r=t,this.g=e,this.b=i,Xt.toWorkingColorSpace(this,n),this}setHSL(t,e,i,n=Xt.workingColorSpace){if(t=Us(t,1),e=we(e,0,1),i=we(i,0,1),e===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+e):i+e-i*e,a=2*i-s;this.r=Js(a,s,t+1/3),this.g=Js(a,s,t),this.b=Js(a,s,t-1/3)}return Xt.toWorkingColorSpace(this,n),this}setStyle(t,e=Ze){function i(s){s!==void 0&&parseFloat(s)}let n;if(n=/^(\w+)\(([^\)]*)\)/.exec(t)){let s;const a=n[1],o=n[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,e);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,e);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,e)}}else if(n=/^\#([A-Fa-f\d]+)$/.exec(t)){const s=n[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(s,16),e)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Ze){const i=yo[t.toLowerCase()];return i!==void 0&&this.setHex(i,e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=ln(t.r),this.g=ln(t.g),this.b=ln(t.b),this}copyLinearToSRGB(t){return this.r=Os(t.r),this.g=Os(t.g),this.b=Os(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Ze){return Xt.fromWorkingColorSpace(Me.copy(this),t),65536*Math.round(we(255*Me.r,0,255))+256*Math.round(we(255*Me.g,0,255))+Math.round(we(255*Me.b,0,255))}getHexString(t=Ze){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Xt.workingColorSpace){Xt.fromWorkingColorSpace(Me.copy(this),e);const i=Me.r,n=Me.g,s=Me.b,a=Math.max(i,n,s),o=Math.min(i,n,s);let l,c;const h=(o+a)/2;if(o===a)l=0,c=0;else{const d=a-o;switch(c=h<=.5?d/(a+o):d/(2-a-o),a){case i:l=(n-s)/d+(n<s?6:0);break;case n:l=(s-i)/d+2;break;case s:l=(i-n)/d+4}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=Xt.workingColorSpace){return Xt.fromWorkingColorSpace(Me.copy(this),e),t.r=Me.r,t.g=Me.g,t.b=Me.b,t}getStyle(t=Ze){Xt.fromWorkingColorSpace(Me.copy(this),t);const e=Me.r,i=Me.g,n=Me.b;return t!==Ze?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${n.toFixed(3)})`:`rgb(${Math.round(255*e)},${Math.round(255*i)},${Math.round(255*n)})`}offsetHSL(t,e,i){return this.getHSL(Ei),this.setHSL(Ei.h+t,Ei.s+e,Ei.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(Ei),t.getHSL(Ar);const i=Bn(Ei.h,Ar.h,e),n=Bn(Ei.s,Ar.s,e),s=Bn(Ei.l,Ar.l,e);return this.setHSL(i,n,s),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,i=this.g,n=this.b,s=t.elements;return this.r=s[0]*e+s[3]*i+s[6]*n,this.g=s[1]*e+s[4]*i+s[7]*n,this.b=s[2]*e+s[5]*i+s[8]*n,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Me=new kt;kt.NAMES=yo;let hh=0;class wn extends sn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:hh++}),this.uuid=an(),this.name="",this.type="Material",this.blending=1,this.side=0,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=204,this.blendDst=205,this.blendEquation=Ui,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new kt(0,0,0),this.blendAlpha=0,this.depthFunc=3,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=519,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=nn,this.stencilZFail=nn,this.stencilZPass=nn,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const i=t[e];if(i===void 0)continue;const n=this[e];n!==void 0&&(n&&n.isColor?n.set(i):n&&n.isVector3&&i&&i.isVector3?n.copy(i):this[e]=i)}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};function n(s){const a=[];for(const o in s){const l=s[o];delete l.metadata,a.push(l)}return a}if(i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==1&&(i.blending=this.blending),this.side!==0&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==204&&(i.blendSrc=this.blendSrc),this.blendDst!==205&&(i.blendDst=this.blendDst),this.blendEquation!==Ui&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==3&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==519&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==nn&&(i.stencilFail=this.stencilFail),this.stencilZFail!==nn&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==nn&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData),e){const s=n(t.textures),a=n(t.images);s.length>0&&(i.textures=s),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let i=null;if(e!==null){const n=e.length;i=new Array(n);for(let s=0;s!==n;++s)i[s]=e[s].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class je extends wn{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new kt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ni,this.combine=0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const ue=new E,Rr=new ut;class Xe{constructor(t,e,i=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=35044,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=wi,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}get updateRange(){return no("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let n=0,s=this.itemSize;n<s;n++)this.array[t+n]=e.array[i+n];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)Rr.fromBufferAttribute(this,e),Rr.applyMatrix3(t),this.setXY(e,Rr.x,Rr.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)ue.fromBufferAttribute(this,e),ue.applyMatrix3(t),this.setXYZ(e,ue.x,ue.y,ue.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)ue.fromBufferAttribute(this,e),ue.applyMatrix4(t),this.setXYZ(e,ue.x,ue.y,ue.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)ue.fromBufferAttribute(this,e),ue.applyNormalMatrix(t),this.setXYZ(e,ue.x,ue.y,ue.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)ue.fromBufferAttribute(this,e),ue.transformDirection(t),this.setXYZ(e,ue.x,ue.y,ue.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=on(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=Te(i,this.array)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=on(e,this.array)),e}setX(t,e){return this.normalized&&(e=Te(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=on(e,this.array)),e}setY(t,e){return this.normalized&&(e=Te(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=on(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Te(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=on(e,this.array)),e}setW(t,e){return this.normalized&&(e=Te(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=Te(e,this.array),i=Te(i,this.array)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,n){return t*=this.itemSize,this.normalized&&(e=Te(e,this.array),i=Te(i,this.array),n=Te(n,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=n,this}setXYZW(t,e,i,n,s){return t*=this.itemSize,this.normalized&&(e=Te(e,this.array),i=Te(i,this.array),n=Te(n,this.array),s=Te(s,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=n,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==35044&&(t.usage=this.usage),t}}class bo extends Xe{constructor(t,e,i){super(new Uint16Array(t),e,i)}}class xo extends Xe{constructor(t,e,i){super(new Uint32Array(t),e,i)}}class ae extends Xe{constructor(t,e,i){super(new Float32Array(t),e,i)}}let dh=0;const Be=new ee,Ks=new xe,vn=new E,De=new Hn,jn=new Hn,ve=new E;class Re extends sn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:dh++}),this.uuid=an(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(eo(t)?xo:bo)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Lt().getNormalMatrix(t);i.applyNormalMatrix(s),i.needsUpdate=!0}const n=this.attributes.tangent;return n!==void 0&&(n.transformDirection(t),n.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Be.makeRotationFromQuaternion(t),this.applyMatrix4(Be),this}rotateX(t){return Be.makeRotationX(t),this.applyMatrix4(Be),this}rotateY(t){return Be.makeRotationY(t),this.applyMatrix4(Be),this}rotateZ(t){return Be.makeRotationZ(t),this.applyMatrix4(Be),this}translate(t,e,i){return Be.makeTranslation(t,e,i),this.applyMatrix4(Be),this}scale(t,e,i){return Be.makeScale(t,e,i),this.applyMatrix4(Be),this}lookAt(t){return Ks.lookAt(t),Ks.updateMatrix(),this.applyMatrix4(Ks.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(vn).negate(),this.translate(vn.x,vn.y,vn.z),this}setFromPoints(t){const e=[];for(let i=0,n=t.length;i<n;i++){const s=t[i];e.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new ae(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Hn);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute)this.boundingBox.set(new E(-1/0,-1/0,-1/0),new E(1/0,1/0,1/0));else{if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,n=e.length;i<n;i++){const s=e[i];De.setFromBufferAttribute(s),this.morphTargetsRelative?(ve.addVectors(this.boundingBox.min,De.min),this.boundingBox.expandByPoint(ve),ve.addVectors(this.boundingBox.max,De.max),this.boundingBox.expandByPoint(ve)):(this.boundingBox.expandByPoint(De.min),this.boundingBox.expandByPoint(De.max))}}else this.boundingBox.makeEmpty();isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z)}}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new br);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute)this.boundingSphere.set(new E,1/0);else if(t){const i=this.boundingSphere.center;if(De.setFromBufferAttribute(t),e)for(let s=0,a=e.length;s<a;s++){const o=e[s];jn.setFromBufferAttribute(o),this.morphTargetsRelative?(ve.addVectors(De.min,jn.min),De.expandByPoint(ve),ve.addVectors(De.max,jn.max),De.expandByPoint(ve)):(De.expandByPoint(jn.min),De.expandByPoint(jn.max))}De.getCenter(i);let n=0;for(let s=0,a=t.count;s<a;s++)ve.fromBufferAttribute(t,s),n=Math.max(n,i.distanceToSquared(ve));if(e)for(let s=0,a=e.length;s<a;s++){const o=e[s],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)ve.fromBufferAttribute(o,c),l&&(vn.fromBufferAttribute(t,c),ve.add(vn)),n=Math.max(n,i.distanceToSquared(ve))}this.boundingSphere.radius=Math.sqrt(n),isNaN(this.boundingSphere.radius)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0)return;const i=e.position,n=e.normal,s=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Xe(new Float32Array(4*i.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let k=0;k<i.count;k++)o[k]=new E,l[k]=new E;const c=new E,h=new E,d=new E,p=new ut,_=new ut,f=new ut,g=new E,m=new E;function y(k,D,V){c.fromBufferAttribute(i,k),h.fromBufferAttribute(i,D),d.fromBufferAttribute(i,V),p.fromBufferAttribute(s,k),_.fromBufferAttribute(s,D),f.fromBufferAttribute(s,V),h.sub(c),d.sub(c),_.sub(p),f.sub(p);const Y=1/(_.x*f.y-f.x*_.y);isFinite(Y)&&(g.copy(h).multiplyScalar(f.y).addScaledVector(d,-_.y).multiplyScalar(Y),m.copy(d).multiplyScalar(_.x).addScaledVector(h,-f.x).multiplyScalar(Y),o[k].add(g),o[D].add(g),o[V].add(g),l[k].add(m),l[D].add(m),l[V].add(m))}let w=this.groups;w.length===0&&(w=[{start:0,count:t.count}]);for(let k=0,D=w.length;k<D;++k){const V=w[k],Y=V.start;for(let H=Y,Z=Y+V.count;H<Z;H+=3)y(t.getX(H+0),t.getX(H+1),t.getX(H+2))}const v=new E,R=new E,N=new E,A=new E;function C(k){N.fromBufferAttribute(n,k),A.copy(N);const D=o[k];v.copy(D),v.sub(N.multiplyScalar(N.dot(D))).normalize(),R.crossVectors(A,D);const V=R.dot(l[k])<0?-1:1;a.setXYZW(k,v.x,v.y,v.z,V)}for(let k=0,D=w.length;k<D;++k){const V=w[k],Y=V.start;for(let H=Y,Z=Y+V.count;H<Z;H+=3)C(t.getX(H+0)),C(t.getX(H+1)),C(t.getX(H+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Xe(new Float32Array(3*e.count),3),this.setAttribute("normal",i);else for(let p=0,_=i.count;p<_;p++)i.setXYZ(p,0,0,0);const n=new E,s=new E,a=new E,o=new E,l=new E,c=new E,h=new E,d=new E;if(t)for(let p=0,_=t.count;p<_;p+=3){const f=t.getX(p+0),g=t.getX(p+1),m=t.getX(p+2);n.fromBufferAttribute(e,f),s.fromBufferAttribute(e,g),a.fromBufferAttribute(e,m),h.subVectors(a,s),d.subVectors(n,s),h.cross(d),o.fromBufferAttribute(i,f),l.fromBufferAttribute(i,g),c.fromBufferAttribute(i,m),o.add(h),l.add(h),c.add(h),i.setXYZ(f,o.x,o.y,o.z),i.setXYZ(g,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let p=0,_=e.count;p<_;p+=3)n.fromBufferAttribute(e,p+0),s.fromBufferAttribute(e,p+1),a.fromBufferAttribute(e,p+2),h.subVectors(a,s),d.subVectors(n,s),h.cross(d),i.setXYZ(p+0,h.x,h.y,h.z),i.setXYZ(p+1,h.x,h.y,h.z),i.setXYZ(p+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)ve.fromBufferAttribute(t,e),ve.normalize(),t.setXYZ(e,ve.x,ve.y,ve.z)}toNonIndexed(){function t(o,l){const c=o.array,h=o.itemSize,d=o.normalized,p=new c.constructor(l.length*h);let _=0,f=0;for(let g=0,m=l.length;g<m;g++){_=o.isInterleavedBufferAttribute?l[g]*o.data.stride+o.offset:l[g]*h;for(let y=0;y<h;y++)p[f++]=c[_++]}return new Xe(p,h,d)}if(this.index===null)return this;const e=new Re,i=this.index.array,n=this.attributes;for(const o in n){const l=t(n[o],i);e.setAttribute(o,l)}const s=this.morphAttributes;for(const o in s){const l=[],c=s[o];for(let h=0,d=c.length;h<d;h++){const p=t(c[h],i);l.push(p)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const i=this.attributes;for(const l in i){const c=i[l];t.data.attributes[l]=c.toJSON(t.data)}const n={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let d=0,p=c.length;d<p;d++){const _=c[d];h.push(_.toJSON(t.data))}h.length>0&&(n[l]=h,s=!0)}s&&(t.data.morphAttributes=n,t.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(t.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const i=t.index;i!==null&&this.setIndex(i.clone(e));const n=t.attributes;for(const c in n){const h=n[c];this.setAttribute(c,h.clone(e))}const s=t.morphAttributes;for(const c in s){const h=[],d=s[c];for(let p=0,_=d.length;p<_;p++)h.push(d[p].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;const a=t.groups;for(let c=0,h=a.length;c<h;c++){const d=a[c];this.addGroup(d.start,d.count,d.materialIndex)}const o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const So=new ee,zi=new co,Cr=new br,Mo=new E,yn=new E,bn=new E,xn=new E,Zs=new E,Pr=new E,Lr=new ut,Ir=new ut,Dr=new ut,Eo=new E,To=new E,Ao=new E,Ur=new E,Nr=new E;class Ht extends xe{constructor(t=new Re,e=new je){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,e=Object.keys(t);if(e.length>0){const i=t[e[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let n=0,s=i.length;n<s;n++){const a=i[n].name||String(n);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=n}}}}getVertexPosition(t,e){const i=this.geometry,n=i.attributes.position,s=i.morphAttributes.position,a=i.morphTargetsRelative;e.fromBufferAttribute(n,t);const o=this.morphTargetInfluences;if(s&&o){Pr.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const h=o[l],d=s[l];h!==0&&(Zs.fromBufferAttribute(d,t),a?Pr.addScaledVector(Zs,h):Pr.addScaledVector(Zs.sub(e),h))}e.add(Pr)}return e}raycast(t,e){const i=this.geometry,n=this.material,s=this.matrixWorld;if(n!==void 0){if(i.boundingSphere===null&&i.computeBoundingSphere(),Cr.copy(i.boundingSphere),Cr.applyMatrix4(s),zi.copy(t.ray).recast(t.near),Cr.containsPoint(zi.origin)===!1&&(zi.intersectSphere(Cr,Mo)===null||zi.origin.distanceToSquared(Mo)>(t.far-t.near)**2))return;So.copy(s).invert(),zi.copy(t.ray).applyMatrix4(So),i.boundingBox!==null&&zi.intersectsBox(i.boundingBox)===!1||this._computeIntersections(t,e,zi)}}_computeIntersections(t,e,i){let n;const s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,h=s.attributes.uv1,d=s.attributes.normal,p=s.groups,_=s.drawRange;if(o!==null)if(Array.isArray(a))for(let f=0,g=p.length;f<g;f++){const m=p[f],y=a[m.materialIndex];for(let w=Math.max(m.start,_.start),v=Math.min(o.count,Math.min(m.start+m.count,_.start+_.count));w<v;w+=3)n=Or(this,y,t,i,c,h,d,o.getX(w),o.getX(w+1),o.getX(w+2)),n&&(n.faceIndex=Math.floor(w/3),n.face.materialIndex=m.materialIndex,e.push(n))}else for(let f=Math.max(0,_.start),g=Math.min(o.count,_.start+_.count);f<g;f+=3)n=Or(this,a,t,i,c,h,d,o.getX(f),o.getX(f+1),o.getX(f+2)),n&&(n.faceIndex=Math.floor(f/3),e.push(n));else if(l!==void 0)if(Array.isArray(a))for(let f=0,g=p.length;f<g;f++){const m=p[f],y=a[m.materialIndex];for(let w=Math.max(m.start,_.start),v=Math.min(l.count,Math.min(m.start+m.count,_.start+_.count));w<v;w+=3)n=Or(this,y,t,i,c,h,d,w,w+1,w+2),n&&(n.faceIndex=Math.floor(w/3),n.face.materialIndex=m.materialIndex,e.push(n))}else for(let f=Math.max(0,_.start),g=Math.min(l.count,_.start+_.count);f<g;f+=3)n=Or(this,a,t,i,c,h,d,f,f+1,f+2),n&&(n.faceIndex=Math.floor(f/3),e.push(n))}}function Or(r,t,e,i,n,s,a,o,l,c){r.getVertexPosition(o,yn),r.getVertexPosition(l,bn),r.getVertexPosition(c,xn);const h=function(d,p,_,f,g,m,y,w){let v;if(v=p.side===1?f.intersectTriangle(y,m,g,!0,w):f.intersectTriangle(g,m,y,p.side===0,w),v===null)return null;Nr.copy(w),Nr.applyMatrix4(d.matrixWorld);const R=_.ray.origin.distanceTo(Nr);return R<_.near||R>_.far?null:{distance:R,point:Nr.clone(),object:d}}(r,t,e,i,yn,bn,xn,Ur);if(h){n&&(Lr.fromBufferAttribute(n,o),Ir.fromBufferAttribute(n,l),Dr.fromBufferAttribute(n,c),h.uv=Tr.getInterpolation(Ur,yn,bn,xn,Lr,Ir,Dr,new ut)),s&&(Lr.fromBufferAttribute(s,o),Ir.fromBufferAttribute(s,l),Dr.fromBufferAttribute(s,c),h.uv1=Tr.getInterpolation(Ur,yn,bn,xn,Lr,Ir,Dr,new ut)),a&&(Eo.fromBufferAttribute(a,o),To.fromBufferAttribute(a,l),Ao.fromBufferAttribute(a,c),h.normal=Tr.getInterpolation(Ur,yn,bn,xn,Eo,To,Ao,new E),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));const d={a:o,b:l,c,normal:new E,materialIndex:0};Tr.getNormal(yn,bn,xn,d.normal),h.face=d}return h}class Ci extends Re{constructor(t=1,e=1,i=1,n=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:n,heightSegments:s,depthSegments:a};const o=this;n=Math.floor(n),s=Math.floor(s),a=Math.floor(a);const l=[],c=[],h=[],d=[];let p=0,_=0;function f(g,m,y,w,v,R,N,A,C,k,D){const V=R/C,Y=N/k,H=R/2,Z=N/2,W=A/2,Q=C+1,K=k+1;let at=0,lt=0;const wt=new E;for(let At=0;At<K;At++){const tt=At*Y-Z;for(let nt=0;nt<Q;nt++){const _t=nt*V-H;wt[g]=_t*w,wt[m]=tt*v,wt[y]=W,c.push(wt.x,wt.y,wt.z),wt[g]=0,wt[m]=0,wt[y]=A>0?1:-1,h.push(wt.x,wt.y,wt.z),d.push(nt/C),d.push(1-At/k),at+=1}}for(let At=0;At<k;At++)for(let tt=0;tt<C;tt++){const nt=p+tt+Q*At,_t=p+tt+Q*(At+1),st=p+(tt+1)+Q*(At+1),M=p+(tt+1)+Q*At;l.push(nt,_t,M),l.push(_t,st,M),lt+=6}o.addGroup(_,lt,D),_+=lt,p+=at}f("z","y","x",-1,-1,i,e,t,a,s,0),f("z","y","x",1,-1,i,e,-t,a,s,1),f("x","z","y",1,1,t,i,e,n,a,2),f("x","z","y",1,-1,t,i,-e,n,a,3),f("x","y","z",1,-1,t,e,i,n,s,4),f("x","y","z",-1,-1,t,e,-i,n,s,5),this.setIndex(l),this.setAttribute("position",new ae(c,3)),this.setAttribute("normal",new ae(h,3)),this.setAttribute("uv",new ae(d,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ci(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Sn(r){const t={};for(const e in r){t[e]={};for(const i in r[e]){const n=r[e][i];n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)?n.isRenderTargetTexture?t[e][i]=null:t[e][i]=n.clone():Array.isArray(n)?t[e][i]=n.slice():t[e][i]=n}}return t}function Ae(r){const t={};for(let e=0;e<r.length;e++){const i=Sn(r[e]);for(const n in i)t[n]=i[n]}return t}function Ro(r){const t=r.getRenderTarget();return t===null?r.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Xt.workingColorSpace}const uh={clone:Sn,merge:Ae};class Ti extends wn{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,this.fragmentShader=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Sn(t.uniforms),this.uniformsGroups=function(e){const i=[];for(let n=0;n<e.length;n++)i.push(e[n].clone());return i}(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const n in this.uniforms){const s=this.uniforms[n].value;s&&s.isTexture?e.uniforms[n]={type:"t",value:s.toJSON(t).uuid}:s&&s.isColor?e.uniforms[n]={type:"c",value:s.getHex()}:s&&s.isVector2?e.uniforms[n]={type:"v2",value:s.toArray()}:s&&s.isVector3?e.uniforms[n]={type:"v3",value:s.toArray()}:s&&s.isVector4?e.uniforms[n]={type:"v4",value:s.toArray()}:s&&s.isMatrix3?e.uniforms[n]={type:"m3",value:s.toArray()}:s&&s.isMatrix4?e.uniforms[n]={type:"m4",value:s.toArray()}:e.uniforms[n]={value:s}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const i={};for(const n in this.extensions)this.extensions[n]===!0&&(i[n]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}}class Co extends xe{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ee,this.projectionMatrix=new ee,this.projectionMatrixInverse=new ee,this.coordinateSystem=rn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Ai=new E,Po=new ut,Lo=new ut;class Ue extends Co{constructor(t=50,e=1,i=.1,n=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=n,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=2*zn*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(.5*Fn*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return 2*zn*Math.atan(Math.tan(.5*Fn*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,i){Ai.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Ai.x,Ai.y).multiplyScalar(-t/Ai.z),Ai.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Ai.x,Ai.y).multiplyScalar(-t/Ai.z)}getViewSize(t,e){return this.getViewBounds(t,Po,Lo),e.subVectors(Lo,Po)}setViewOffset(t,e,i,n,s,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=n,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(.5*Fn*this.fov)/this.zoom,i=2*e,n=this.aspect*i,s=-.5*n;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*n/l,e-=a.offsetY*i/c,n*=a.width/l,i*=a.height/c}const o=this.filmOffset;o!==0&&(s+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+n,e,e-i,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const Mn=-90;class ph extends xe{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const n=new Ue(Mn,1,t,e);n.layers=this.layers,this.add(n);const s=new Ue(Mn,1,t,e);s.layers=this.layers,this.add(s);const a=new Ue(Mn,1,t,e);a.layers=this.layers,this.add(a);const o=new Ue(Mn,1,t,e);o.layers=this.layers,this.add(o);const l=new Ue(Mn,1,t,e);l.layers=this.layers,this.add(l);const c=new Ue(Mn,1,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[i,n,s,a,o,l]=e;for(const c of e)this.remove(c);if(t===rn)i.up.set(0,1,0),i.lookAt(1,0,0),n.up.set(0,1,0),n.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else{if(t!==mr)throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);i.up.set(0,-1,0),i.lookAt(-1,0,0),n.up.set(0,-1,0),n.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1)}for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:n}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,l,c,h]=this.children,d=t.getRenderTarget(),p=t.getActiveCubeFace(),_=t.getActiveMipmapLevel(),f=t.xr.enabled;t.xr.enabled=!1;const g=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,t.setRenderTarget(i,0,n),t.render(e,s),t.setRenderTarget(i,1,n),t.render(e,a),t.setRenderTarget(i,2,n),t.render(e,o),t.setRenderTarget(i,3,n),t.render(e,l),t.setRenderTarget(i,4,n),t.render(e,c),i.texture.generateMipmaps=g,t.setRenderTarget(i,5,n),t.render(e,h),t.setRenderTarget(d,p,_),t.xr.enabled=f,i.texture.needsPMREMUpdate=!0}}class Io extends Ce{constructor(t,e,i,n,s,a,o,l,c,h){super(t=t!==void 0?t:[],e=e!==void 0?e:Ji,i,n,s,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class _h extends Ni{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const i={width:t,height:t,depth:1},n=[i,i,i,i,i,i];this.texture=new Io(n,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0&&e.generateMipmaps,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:Ke}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},n=new Ci(5,5,5),s=new Ti({name:"CubemapFromEquirect",uniforms:Sn(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:1,blending:0});s.uniforms.tEquirect.value=e;const a=new Ht(n,s),o=e.minFilter;return e.minFilter===Nn&&(e.minFilter=Ke),new ph(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e,i,n){const s=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,i,n);t.setRenderTarget(s)}}const $s=new E,mh=new E,fh=new Lt;class Bi{constructor(t=new E(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,n){return this.normal.set(t,e,i),this.constant=n,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){const n=$s.subVectors(i,e).cross(mh.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(n,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const i=t.delta($s),n=this.normal.dot(i);if(n===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const s=-(t.start.dot(this.normal)+this.constant)/n;return s<0||s>1?null:e.copy(t.start).addScaledVector(i,s)}intersectsLine(t){const e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const i=e||fh.getNormalMatrix(t),n=this.coplanarPoint($s).applyMatrix4(t),s=this.normal.applyMatrix3(i).normalize();return this.constant=-n.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ki=new br,Fr=new E;class Qs{constructor(t=new Bi,e=new Bi,i=new Bi,n=new Bi,s=new Bi,a=new Bi){this.planes=[t,e,i,n,s,a]}set(t,e,i,n,s,a){const o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(i),o[3].copy(n),o[4].copy(s),o[5].copy(a),this}copy(t){const e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=2e3){const i=this.planes,n=t.elements,s=n[0],a=n[1],o=n[2],l=n[3],c=n[4],h=n[5],d=n[6],p=n[7],_=n[8],f=n[9],g=n[10],m=n[11],y=n[12],w=n[13],v=n[14],R=n[15];if(i[0].setComponents(l-s,p-c,m-_,R-y).normalize(),i[1].setComponents(l+s,p+c,m+_,R+y).normalize(),i[2].setComponents(l+a,p+h,m+f,R+w).normalize(),i[3].setComponents(l-a,p-h,m-f,R-w).normalize(),i[4].setComponents(l-o,p-d,m-g,R-v).normalize(),e===rn)i[5].setComponents(l+o,p+d,m+g,R+v).normalize();else{if(e!==mr)throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);i[5].setComponents(o,d,g,v).normalize()}return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),ki.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),ki.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(ki)}intersectsSprite(t){return ki.center.set(0,0,0),ki.radius=.7071067811865476,ki.applyMatrix4(t.matrixWorld),this.intersectsSphere(ki)}intersectsSphere(t){const e=this.planes,i=t.center,n=-t.radius;for(let s=0;s<6;s++)if(e[s].distanceToPoint(i)<n)return!1;return!0}intersectsBox(t){const e=this.planes;for(let i=0;i<6;i++){const n=e[i];if(Fr.x=n.normal.x>0?t.max.x:t.min.x,Fr.y=n.normal.y>0?t.max.y:t.min.y,Fr.z=n.normal.z>0?t.max.z:t.min.z,n.distanceToPoint(Fr)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Do(){let r=null,t=!1,e=null,i=null;function n(s,a){e(s,a),i=r.requestAnimationFrame(n)}return{start:function(){t!==!0&&e!==null&&(i=r.requestAnimationFrame(n),t=!0)},stop:function(){r.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(s){e=s},setContext:function(s){r=s}}}function gh(r){const t=new WeakMap;return{get:function(e){return e.isInterleavedBufferAttribute&&(e=e.data),t.get(e)},remove:function(e){e.isInterleavedBufferAttribute&&(e=e.data);const i=t.get(e);i&&(r.deleteBuffer(i.buffer),t.delete(e))},update:function(e,i){if(e.isGLBufferAttribute){const s=t.get(e);return void((!s||s.version<e.version)&&t.set(e,{buffer:e.buffer,type:e.type,bytesPerElement:e.elementSize,version:e.version}))}e.isInterleavedBufferAttribute&&(e=e.data);const n=t.get(e);if(n===void 0)t.set(e,function(s,a){const o=s.array,l=s.usage,c=o.byteLength,h=r.createBuffer();let d;if(r.bindBuffer(a,h),r.bufferData(a,o,l),s.onUploadCallback(),o instanceof Float32Array)d=r.FLOAT;else if(o instanceof Uint16Array)d=s.isFloat16BufferAttribute?r.HALF_FLOAT:r.UNSIGNED_SHORT;else if(o instanceof Int16Array)d=r.SHORT;else if(o instanceof Uint32Array)d=r.UNSIGNED_INT;else if(o instanceof Int32Array)d=r.INT;else if(o instanceof Int8Array)d=r.BYTE;else if(o instanceof Uint8Array)d=r.UNSIGNED_BYTE;else{if(!(o instanceof Uint8ClampedArray))throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+o);d=r.UNSIGNED_BYTE}return{buffer:h,type:d,bytesPerElement:o.BYTES_PER_ELEMENT,version:s.version,size:c}}(e,i));else if(n.version<e.version){if(n.size!==e.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");(function(s,a,o){const l=a.array,c=a._updateRange,h=a.updateRanges;if(r.bindBuffer(o,s),c.count===-1&&h.length===0&&r.bufferSubData(o,0,l),h.length!==0){for(let d=0,p=h.length;d<p;d++){const _=h[d];r.bufferSubData(o,_.start*l.BYTES_PER_ELEMENT,l,_.start,_.count)}a.clearUpdateRanges()}c.count!==-1&&(r.bufferSubData(o,c.offset*l.BYTES_PER_ELEMENT,l,c.offset,c.count),c.count=-1),a.onUploadCallback()})(n.buffer,e,i),n.version=e.version}}}}class tr extends Re{constructor(t=1,e=1,i=1,n=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:n};const s=t/2,a=e/2,o=Math.floor(i),l=Math.floor(n),c=o+1,h=l+1,d=t/o,p=e/l,_=[],f=[],g=[],m=[];for(let y=0;y<h;y++){const w=y*p-a;for(let v=0;v<c;v++){const R=v*d-s;f.push(R,-w,0),g.push(0,0,1),m.push(v/o),m.push(1-y/l)}}for(let y=0;y<l;y++)for(let w=0;w<o;w++){const v=w+c*y,R=w+c*(y+1),N=w+1+c*(y+1),A=w+1+c*y;_.push(v,R,A),_.push(R,N,A)}this.setIndex(_),this.setAttribute("position",new ae(f,3)),this.setAttribute("normal",new ae(g,3)),this.setAttribute("uv",new ae(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new tr(t.width,t.height,t.widthSegments,t.heightSegments)}}const Pt={alphahash_fragment:`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,alphahash_pars_fragment:`#ifdef USE_ALPHAHASH
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
#endif`,alphamap_fragment:`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,alphamap_pars_fragment:`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,alphatest_fragment:`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,alphatest_pars_fragment:`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,aomap_fragment:`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,aomap_pars_fragment:`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,batching_pars_vertex:`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,batching_vertex:`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,begin_vertex:`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,beginnormal_vertex:`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,bsdfs:`float G_BlinnPhong_Implicit( ) {
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
} // validated`,iridescence_fragment:`#ifdef USE_IRIDESCENCE
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
#endif`,bumpmap_pars_fragment:`#ifdef USE_BUMPMAP
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
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,clipping_planes_fragment:`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
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
	#endif
#endif`,clipping_planes_pars_fragment:`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,clipping_planes_pars_vertex:`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,clipping_planes_vertex:`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,color_fragment:`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,color_pars_fragment:`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,color_pars_vertex:`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,color_vertex:`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( batchId );
	vColor.xyz *= batchingColor.xyz;
#endif`,common:`#define PI 3.141592653589793
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
} // validated`,cube_uv_reflection_fragment:`#ifdef ENVMAP_TYPE_CUBE_UV
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
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
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
#endif`,defaultnormal_vertex:`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,displacementmap_pars_vertex:`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,displacementmap_vertex:`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,emissivemap_fragment:`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,emissivemap_pars_fragment:`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,colorspace_fragment:"gl_FragColor = linearToOutputTexel( gl_FragColor );",colorspace_pars_fragment:`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,envmap_fragment:`#ifdef USE_ENVMAP
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
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
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
#endif`,envmap_common_pars_fragment:`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,envmap_pars_fragment:`#ifdef USE_ENVMAP
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
#endif`,envmap_pars_vertex:`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,envmap_physical_pars_fragment:`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
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
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
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
#endif`,envmap_vertex:`#ifdef USE_ENVMAP
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
#endif`,fog_vertex:`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,fog_pars_vertex:`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,fog_fragment:`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,fog_pars_fragment:`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,gradientmap_pars_fragment:`#ifdef USE_GRADIENTMAP
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
}`,lightmap_pars_fragment:`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,lights_lambert_fragment:`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,lights_lambert_pars_fragment:`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,lights_pars_begin:`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
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
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
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
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
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
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
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
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
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
#endif`,lights_toon_fragment:`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,lights_toon_pars_fragment:`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,lights_phong_fragment:`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,lights_phong_pars_fragment:`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,lights_physical_fragment:`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
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
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
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
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,lights_physical_pars_fragment:`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
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
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
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
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
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
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
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
}`,lights_fragment_begin:`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
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
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
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
		getSpotLightInfo( spotLight, geometryPosition, directLight );
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
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
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
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,lights_fragment_maps:`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,lights_fragment_end:`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,logdepthbuf_fragment:`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,logdepthbuf_pars_fragment:`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,logdepthbuf_pars_vertex:`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,logdepthbuf_vertex:`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,map_fragment:`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,map_pars_fragment:`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,map_particle_fragment:`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,map_particle_pars_fragment:`#if defined( USE_POINTS_UV )
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
#endif`,metalnessmap_fragment:`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,metalnessmap_pars_fragment:`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,morphinstance_vertex:`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,morphcolor_vertex:`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,morphnormal_vertex:`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,morphtarget_pars_vertex:`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,morphtarget_vertex:`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,normal_fragment_begin:`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,normal_fragment_maps:`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,normal_pars_fragment:`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,normal_pars_vertex:`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,normal_vertex:`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,normalmap_pars_fragment:`#ifdef USE_NORMALMAP
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
#endif`,clearcoat_normal_fragment_begin:`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,clearcoat_normal_fragment_maps:`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,clearcoat_pars_fragment:`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,iridescence_pars_fragment:`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,opaque_fragment:`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,packing:`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,premultiplied_alpha_fragment:`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,project_vertex:`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,dithering_fragment:`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,dithering_pars_fragment:`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,roughnessmap_fragment:`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,roughnessmap_pars_fragment:`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,shadowmap_pars_fragment:`#if NUM_SPOT_LIGHT_COORDS > 0
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
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
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
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return shadow;
	}
#endif`,shadowmap_pars_vertex:`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,shadowmap_vertex:`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,shadowmask_pars_fragment:`float getShadowMask() {
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
}`,skinbase_vertex:`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,skinning_pars_vertex:`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,skinning_vertex:`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,skinnormal_vertex:`#ifdef USE_SKINNING
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
#endif`,specularmap_fragment:`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,specularmap_pars_fragment:`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,tonemapping_fragment:`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,tonemapping_pars_fragment:`#ifndef saturate
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
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,transmission_fragment:`#ifdef USE_TRANSMISSION
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
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,transmission_pars_fragment:`#ifdef USE_TRANSMISSION
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
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,uv_pars_fragment:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,uv_pars_vertex:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,uv_vertex:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,worldpos_vertex:`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,background_vert:`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,background_frag:`uniform sampler2D t2D;
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
}`,backgroundCube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,backgroundCube_frag:`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,cube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,cube_frag:`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,depth_vert:`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
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
}`,depth_frag:`#if DEPTH_PACKING == 3200
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
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
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
}`,distanceRGBA_vert:`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
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
}`,distanceRGBA_frag:`#define DISTANCE
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
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,equirect_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,equirect_frag:`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,linedashed_vert:`uniform float scale;
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
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,linedashed_frag:`uniform vec3 diffuse;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,meshbasic_vert:`#include <common>
#include <batching_pars_vertex>
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
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,meshbasic_frag:`uniform vec3 diffuse;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,meshlambert_vert:`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
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
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,meshlambert_frag:`#define LAMBERT
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,meshmatcap_vert:`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
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
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,meshmatcap_frag:`#define MATCAP
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,meshnormal_vert:`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
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
}`,meshnormal_frag:`#define NORMAL
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
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,meshphong_vert:`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
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
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
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
}`,meshphong_frag:`#define PHONG
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,meshphysical_vert:`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
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
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,meshphysical_frag:`#define STANDARD
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
#ifdef USE_DISPERSION
	uniform float dispersion;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshtoon_vert:`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
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
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,meshtoon_frag:`#define TOON
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,points_vert:`uniform float size;
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
	#include <morphinstance_vertex>
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
}`,points_frag:`uniform vec3 diffuse;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
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
}`,shadow_vert:`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
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
}`,shadow_frag:`uniform vec3 color;
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
}`,sprite_vert:`uniform float rotation;
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
}`,sprite_frag:`uniform vec3 diffuse;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
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
}`},ht={common:{diffuse:{value:new kt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Lt},alphaMap:{value:null},alphaMapTransform:{value:new Lt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Lt}},envmap:{envMap:{value:null},envMapRotation:{value:new Lt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Lt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Lt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Lt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Lt},normalScale:{value:new ut(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Lt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Lt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Lt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Lt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new kt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new kt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Lt},alphaTest:{value:0},uvTransform:{value:new Lt}},sprite:{diffuse:{value:new kt(16777215)},opacity:{value:1},center:{value:new ut(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Lt},alphaMap:{value:null},alphaMapTransform:{value:new Lt},alphaTest:{value:0}}},$e={basic:{uniforms:Ae([ht.common,ht.specularmap,ht.envmap,ht.aomap,ht.lightmap,ht.fog]),vertexShader:Pt.meshbasic_vert,fragmentShader:Pt.meshbasic_frag},lambert:{uniforms:Ae([ht.common,ht.specularmap,ht.envmap,ht.aomap,ht.lightmap,ht.emissivemap,ht.bumpmap,ht.normalmap,ht.displacementmap,ht.fog,ht.lights,{emissive:{value:new kt(0)}}]),vertexShader:Pt.meshlambert_vert,fragmentShader:Pt.meshlambert_frag},phong:{uniforms:Ae([ht.common,ht.specularmap,ht.envmap,ht.aomap,ht.lightmap,ht.emissivemap,ht.bumpmap,ht.normalmap,ht.displacementmap,ht.fog,ht.lights,{emissive:{value:new kt(0)},specular:{value:new kt(1118481)},shininess:{value:30}}]),vertexShader:Pt.meshphong_vert,fragmentShader:Pt.meshphong_frag},standard:{uniforms:Ae([ht.common,ht.envmap,ht.aomap,ht.lightmap,ht.emissivemap,ht.bumpmap,ht.normalmap,ht.displacementmap,ht.roughnessmap,ht.metalnessmap,ht.fog,ht.lights,{emissive:{value:new kt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Pt.meshphysical_vert,fragmentShader:Pt.meshphysical_frag},toon:{uniforms:Ae([ht.common,ht.aomap,ht.lightmap,ht.emissivemap,ht.bumpmap,ht.normalmap,ht.displacementmap,ht.gradientmap,ht.fog,ht.lights,{emissive:{value:new kt(0)}}]),vertexShader:Pt.meshtoon_vert,fragmentShader:Pt.meshtoon_frag},matcap:{uniforms:Ae([ht.common,ht.bumpmap,ht.normalmap,ht.displacementmap,ht.fog,{matcap:{value:null}}]),vertexShader:Pt.meshmatcap_vert,fragmentShader:Pt.meshmatcap_frag},points:{uniforms:Ae([ht.points,ht.fog]),vertexShader:Pt.points_vert,fragmentShader:Pt.points_frag},dashed:{uniforms:Ae([ht.common,ht.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Pt.linedashed_vert,fragmentShader:Pt.linedashed_frag},depth:{uniforms:Ae([ht.common,ht.displacementmap]),vertexShader:Pt.depth_vert,fragmentShader:Pt.depth_frag},normal:{uniforms:Ae([ht.common,ht.bumpmap,ht.normalmap,ht.displacementmap,{opacity:{value:1}}]),vertexShader:Pt.meshnormal_vert,fragmentShader:Pt.meshnormal_frag},sprite:{uniforms:Ae([ht.sprite,ht.fog]),vertexShader:Pt.sprite_vert,fragmentShader:Pt.sprite_frag},background:{uniforms:{uvTransform:{value:new Lt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Pt.background_vert,fragmentShader:Pt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Lt}},vertexShader:Pt.backgroundCube_vert,fragmentShader:Pt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Pt.cube_vert,fragmentShader:Pt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Pt.equirect_vert,fragmentShader:Pt.equirect_frag},distanceRGBA:{uniforms:Ae([ht.common,ht.displacementmap,{referencePosition:{value:new E},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Pt.distanceRGBA_vert,fragmentShader:Pt.distanceRGBA_frag},shadow:{uniforms:Ae([ht.lights,ht.fog,{color:{value:new kt(0)},opacity:{value:1}}]),vertexShader:Pt.shadow_vert,fragmentShader:Pt.shadow_frag}};$e.physical={uniforms:Ae([$e.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Lt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Lt},clearcoatNormalScale:{value:new ut(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Lt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Lt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Lt},sheen:{value:0},sheenColor:{value:new kt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Lt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Lt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Lt},transmissionSamplerSize:{value:new ut},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Lt},attenuationDistance:{value:0},attenuationColor:{value:new kt(0)},specularColor:{value:new kt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Lt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Lt},anisotropyVector:{value:new ut},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Lt}}]),vertexShader:Pt.meshphysical_vert,fragmentShader:Pt.meshphysical_frag};const zr={r:0,b:0,g:0},Hi=new ni,wh=new ee;function vh(r,t,e,i,n,s,a){const o=new kt(0);let l,c,h=s===!0?0:1,d=null,p=0,_=null;function f(m){let y=m.isScene===!0?m.background:null;return y&&y.isTexture&&(y=(m.backgroundBlurriness>0?e:t).get(y)),y}function g(m,y){m.getRGB(zr,Ro(r)),i.buffers.color.setClear(zr.r,zr.g,zr.b,y,a)}return{getClearColor:function(){return o},setClearColor:function(m,y=1){o.set(m),h=y,g(o,h)},getClearAlpha:function(){return h},setClearAlpha:function(m){h=m,g(o,h)},render:function(m){let y=!1;const w=f(m);w===null?g(o,h):w&&w.isColor&&(g(w,1),y=!0);const v=r.xr.getEnvironmentBlendMode();v==="additive"?i.buffers.color.setClear(0,0,0,1,a):v==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,a),(r.autoClear||y)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))},addToRenderList:function(m,y){const w=f(y);w&&(w.isCubeTexture||w.mapping===or)?(c===void 0&&(c=new Ht(new Ci(1,1,1),new Ti({name:"BackgroundCubeMaterial",uniforms:Sn($e.backgroundCube.uniforms),vertexShader:$e.backgroundCube.vertexShader,fragmentShader:$e.backgroundCube.fragmentShader,side:1,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(v,R,N){this.matrixWorld.copyPosition(N.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),Hi.copy(y.backgroundRotation),Hi.x*=-1,Hi.y*=-1,Hi.z*=-1,w.isCubeTexture&&w.isRenderTargetTexture===!1&&(Hi.y*=-1,Hi.z*=-1),c.material.uniforms.envMap.value=w,c.material.uniforms.flipEnvMap.value=w.isCubeTexture&&w.isRenderTargetTexture===!1?-1:1,c.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(wh.makeRotationFromEuler(Hi)),c.material.toneMapped=Xt.getTransfer(w.colorSpace)!==$t,d===w&&p===w.version&&_===r.toneMapping||(c.material.needsUpdate=!0,d=w,p=w.version,_=r.toneMapping),c.layers.enableAll(),m.unshift(c,c.geometry,c.material,0,0,null)):w&&w.isTexture&&(l===void 0&&(l=new Ht(new tr(2,2),new Ti({name:"BackgroundMaterial",uniforms:Sn($e.background.uniforms),vertexShader:$e.background.vertexShader,fragmentShader:$e.background.fragmentShader,side:0,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=w,l.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,l.material.toneMapped=Xt.getTransfer(w.colorSpace)!==$t,w.matrixAutoUpdate===!0&&w.updateMatrix(),l.material.uniforms.uvTransform.value.copy(w.matrix),d===w&&p===w.version&&_===r.toneMapping||(l.material.needsUpdate=!0,d=w,p=w.version,_=r.toneMapping),l.layers.enableAll(),m.unshift(l,l.geometry,l.material,0,0,null))}}}function yh(r,t){const e=r.getParameter(r.MAX_VERTEX_ATTRIBS),i={},n=c(null);let s=n,a=!1;function o(y){return r.bindVertexArray(y)}function l(y){return r.deleteVertexArray(y)}function c(y){const w=[],v=[],R=[];for(let N=0;N<e;N++)w[N]=0,v[N]=0,R[N]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:w,enabledAttributes:v,attributeDivisors:R,object:y,attributes:{},index:null}}function h(){const y=s.newAttributes;for(let w=0,v=y.length;w<v;w++)y[w]=0}function d(y){p(y,0)}function p(y,w){const v=s.newAttributes,R=s.enabledAttributes,N=s.attributeDivisors;v[y]=1,R[y]===0&&(r.enableVertexAttribArray(y),R[y]=1),N[y]!==w&&(r.vertexAttribDivisor(y,w),N[y]=w)}function _(){const y=s.newAttributes,w=s.enabledAttributes;for(let v=0,R=w.length;v<R;v++)w[v]!==y[v]&&(r.disableVertexAttribArray(v),w[v]=0)}function f(y,w,v,R,N,A,C){C===!0?r.vertexAttribIPointer(y,w,v,N,A):r.vertexAttribPointer(y,w,v,R,N,A)}function g(){m(),a=!0,s!==n&&(s=n,o(s.object))}function m(){n.geometry=null,n.program=null,n.wireframe=!1}return{setup:function(y,w,v,R,N){let A=!1;const C=function(k,D,V){const Y=V.wireframe===!0;let H=i[k.id];H===void 0&&(H={},i[k.id]=H);let Z=H[D.id];Z===void 0&&(Z={},H[D.id]=Z);let W=Z[Y];return W===void 0&&(W=c(r.createVertexArray()),Z[Y]=W),W}(R,v,w);s!==C&&(s=C,o(s.object)),A=function(k,D,V,Y){const H=s.attributes,Z=D.attributes;let W=0;const Q=V.getAttributes();for(const K in Q)if(Q[K].location>=0){const at=H[K];let lt=Z[K];if(lt===void 0&&(K==="instanceMatrix"&&k.instanceMatrix&&(lt=k.instanceMatrix),K==="instanceColor"&&k.instanceColor&&(lt=k.instanceColor)),at===void 0||at.attribute!==lt||lt&&at.data!==lt.data)return!0;W++}return s.attributesNum!==W||s.index!==Y}(y,R,v,N),A&&function(k,D,V,Y){const H={},Z=D.attributes;let W=0;const Q=V.getAttributes();for(const K in Q)if(Q[K].location>=0){let at=Z[K];at===void 0&&(K==="instanceMatrix"&&k.instanceMatrix&&(at=k.instanceMatrix),K==="instanceColor"&&k.instanceColor&&(at=k.instanceColor));const lt={};lt.attribute=at,at&&at.data&&(lt.data=at.data),H[K]=lt,W++}s.attributes=H,s.attributesNum=W,s.index=Y}(y,R,v,N),N!==null&&t.update(N,r.ELEMENT_ARRAY_BUFFER),(A||a)&&(a=!1,function(k,D,V,Y){h();const H=Y.attributes,Z=V.getAttributes(),W=D.defaultAttributeValues;for(const Q in Z){const K=Z[Q];if(K.location>=0){let at=H[Q];if(at===void 0&&(Q==="instanceMatrix"&&k.instanceMatrix&&(at=k.instanceMatrix),Q==="instanceColor"&&k.instanceColor&&(at=k.instanceColor)),at!==void 0){const lt=at.normalized,wt=at.itemSize,At=t.get(at);if(At===void 0)continue;const tt=At.buffer,nt=At.type,_t=At.bytesPerElement,st=nt===r.INT||nt===r.UNSIGNED_INT||at.gpuType===$a;if(at.isInterleavedBufferAttribute){const M=at.data,x=M.stride,O=at.offset;if(M.isInstancedInterleavedBuffer){for(let J=0;J<K.locationSize;J++)p(K.location+J,M.meshPerAttribute);k.isInstancedMesh!==!0&&Y._maxInstanceCount===void 0&&(Y._maxInstanceCount=M.meshPerAttribute*M.count)}else for(let J=0;J<K.locationSize;J++)d(K.location+J);r.bindBuffer(r.ARRAY_BUFFER,tt);for(let J=0;J<K.locationSize;J++)f(K.location+J,wt/K.locationSize,nt,lt,x*_t,(O+wt/K.locationSize*J)*_t,st)}else{if(at.isInstancedBufferAttribute){for(let M=0;M<K.locationSize;M++)p(K.location+M,at.meshPerAttribute);k.isInstancedMesh!==!0&&Y._maxInstanceCount===void 0&&(Y._maxInstanceCount=at.meshPerAttribute*at.count)}else for(let M=0;M<K.locationSize;M++)d(K.location+M);r.bindBuffer(r.ARRAY_BUFFER,tt);for(let M=0;M<K.locationSize;M++)f(K.location+M,wt/K.locationSize,nt,lt,wt*_t,wt/K.locationSize*M*_t,st)}}else if(W!==void 0){const lt=W[Q];if(lt!==void 0)switch(lt.length){case 2:r.vertexAttrib2fv(K.location,lt);break;case 3:r.vertexAttrib3fv(K.location,lt);break;case 4:r.vertexAttrib4fv(K.location,lt);break;default:r.vertexAttrib1fv(K.location,lt)}}}}_()}(y,w,v,R),N!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,t.get(N).buffer))},reset:g,resetDefaultState:m,dispose:function(){g();for(const y in i){const w=i[y];for(const v in w){const R=w[v];for(const N in R)l(R[N].object),delete R[N];delete w[v]}delete i[y]}},releaseStatesOfGeometry:function(y){if(i[y.id]===void 0)return;const w=i[y.id];for(const v in w){const R=w[v];for(const N in R)l(R[N].object),delete R[N];delete w[v]}delete i[y.id]},releaseStatesOfProgram:function(y){for(const w in i){const v=i[w];if(v[y.id]===void 0)continue;const R=v[y.id];for(const N in R)l(R[N].object),delete R[N];delete v[y.id]}},initAttributes:h,enableAttribute:d,disableUnusedAttributes:_}}function bh(r,t,e){let i;function n(s,a,o){o!==0&&(r.drawArraysInstanced(i,s,a,o),e.update(a,i,o))}this.setMode=function(s){i=s},this.render=function(s,a){r.drawArrays(i,s,a),e.update(a,i,1)},this.renderInstances=n,this.renderMultiDraw=function(s,a,o){if(o===0)return;const l=t.get("WEBGL_multi_draw");if(l===null)for(let c=0;c<o;c++)this.render(s[c],a[c]);else{l.multiDrawArraysWEBGL(i,s,0,a,0,o);let c=0;for(let h=0;h<o;h++)c+=a[h];e.update(c,i,1)}},this.renderMultiDrawInstances=function(s,a,o,l){if(o===0)return;const c=t.get("WEBGL_multi_draw");if(c===null)for(let h=0;h<s.length;h++)n(s[h],a[h],l[h]);else{c.multiDrawArraysInstancedWEBGL(i,s,0,a,0,l,0,o);let h=0;for(let d=0;d<o;d++)h+=a[d];for(let d=0;d<l.length;d++)e.update(h,i,l[d])}}}function xh(r,t,e,i){let n;function s(d){if(d==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";d="mediump"}return d==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let a=e.precision!==void 0?e.precision:"highp";const o=s(a);o!==a&&(a=o);const l=e.logarithmicDepthBuffer===!0,c=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),h=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS);return{isWebGL2:!0,getMaxAnisotropy:function(){if(n!==void 0)return n;if(t.has("EXT_texture_filter_anisotropic")===!0){const d=t.get("EXT_texture_filter_anisotropic");n=r.getParameter(d.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n},getMaxPrecision:s,textureFormatReadable:function(d){return d===vi||i.convert(d)===r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT)},textureTypeReadable:function(d){const p=d===hr&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(d!==Zi&&i.convert(d)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&d!==wi&&!p)},precision:a,logarithmicDepthBuffer:l,maxTextures:c,maxVertexTextures:h,maxTextureSize:r.getParameter(r.MAX_TEXTURE_SIZE),maxCubemapSize:r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),maxAttributes:r.getParameter(r.MAX_VERTEX_ATTRIBS),maxVertexUniforms:r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),maxVaryings:r.getParameter(r.MAX_VARYING_VECTORS),maxFragmentUniforms:r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),vertexTextures:h>0,maxSamples:r.getParameter(r.MAX_SAMPLES)}}function Sh(r){const t=this;let e=null,i=0,n=!1,s=!1;const a=new Bi,o=new Lt,l={value:null,needsUpdate:!1};function c(h,d,p,_){const f=h!==null?h.length:0;let g=null;if(f!==0){if(g=l.value,_!==!0||g===null){const m=p+4*f,y=d.matrixWorldInverse;o.getNormalMatrix(y),(g===null||g.length<m)&&(g=new Float32Array(m));for(let w=0,v=p;w!==f;++w,v+=4)a.copy(h[w]).applyMatrix4(y,o),a.normal.toArray(g,v),g[v+3]=a.constant}l.value=g,l.needsUpdate=!0}return t.numPlanes=f,t.numIntersection=0,g}this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,d){const p=h.length!==0||d||i!==0||n;return n=d,i=h.length,p},this.beginShadows=function(){s=!0,c(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,d){e=c(h,d,0)},this.setState=function(h,d,p){const _=h.clippingPlanes,f=h.clipIntersection,g=h.clipShadows,m=r.get(h);if(!n||_===null||_.length===0||s&&!g)s?c(null):function(){l.value!==e&&(l.value=e,l.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}();else{const y=s?0:i,w=4*y;let v=m.clippingState||null;l.value=v,v=c(_,d,w,p);for(let R=0;R!==w;++R)v[R]=e[R];m.clippingState=v,this.numIntersection=f?this.numPlanes:0,this.numPlanes+=y}}}function Mh(r){let t=new WeakMap;function e(n,s){return s===303?n.mapping=Ji:s===304&&(n.mapping=Ki),n}function i(n){const s=n.target;s.removeEventListener("dispose",i);const a=t.get(s);a!==void 0&&(t.delete(s),a.dispose())}return{get:function(n){if(n&&n.isTexture){const s=n.mapping;if(s===303||s===304){if(t.has(n))return e(t.get(n).texture,n.mapping);{const a=n.image;if(a&&a.height>0){const o=new _h(a.height);return o.fromEquirectangularTexture(r,n),t.set(n,o),n.addEventListener("dispose",i),e(o.texture,n.mapping)}return null}}}return n},dispose:function(){t=new WeakMap}}}class Uo extends Co{constructor(t=-1,e=1,i=1,n=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=n,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,n,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=n,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,n=(this.top+this.bottom)/2;let s=i-t,a=i+t,o=n+e,l=n-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const No=[.125,.215,.35,.446,.526,.582],Br=20,ta=new Uo,Oo=new kt;let ea=null,ia=0,na=0,ra=!1;const Gi=(1+Math.sqrt(5))/2,En=1/Gi,Fo=[new E(-Gi,En,0),new E(Gi,En,0),new E(-En,0,Gi),new E(En,0,Gi),new E(0,Gi,-En),new E(0,Gi,En),new E(-1,1,-1),new E(1,1,-1),new E(-1,1,1),new E(1,1,1)];class zo{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,i=.1,n=100){ea=this._renderer.getRenderTarget(),ia=this._renderer.getActiveCubeFace(),na=this._renderer.getActiveMipmapLevel(),ra=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(t,i,n,s),e>0&&this._blur(s,0,0,e),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Ho(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=ko(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(ea,ia,na),this._renderer.xr.enabled=ra,t.scissorTest=!1,kr(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Ji||t.mapping===Ki?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),ea=this._renderer.getRenderTarget(),ia=this._renderer.getActiveCubeFace(),na=this._renderer.getActiveMipmapLevel(),ra=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=e||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,i={magFilter:Ke,minFilter:Ke,generateMipmaps:!1,type:hr,format:vi,colorSpace:yi,depthBuffer:!1},n=Bo(t,e,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Bo(t,e,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=function(a){const o=[],l=[],c=[];let h=a;const d=a-4+1+No.length;for(let p=0;p<d;p++){const _=Math.pow(2,h);l.push(_);let f=1/_;p>a-4?f=No[p-a+4-1]:p===0&&(f=0),c.push(f);const g=1/(_-2),m=-g,y=1+g,w=[m,m,y,m,y,y,m,m,y,y,m,y],v=6,R=6,N=3,A=2,C=1,k=new Float32Array(N*R*v),D=new Float32Array(A*R*v),V=new Float32Array(C*R*v);for(let H=0;H<v;H++){const Z=H%3*2/3-1,W=H>2?0:-1,Q=[Z,W,0,Z+2/3,W,0,Z+2/3,W+1,0,Z,W,0,Z+2/3,W+1,0,Z,W+1,0];k.set(Q,N*R*H),D.set(w,A*R*H);const K=[H,H,H,H,H,H];V.set(K,C*R*H)}const Y=new Re;Y.setAttribute("position",new Xe(k,N)),Y.setAttribute("uv",new Xe(D,A)),Y.setAttribute("faceIndex",new Xe(V,C)),o.push(Y),h>4&&h--}return{lodPlanes:o,sizeLods:l,sigmas:c}}(s)),this._blurMaterial=function(a,o,l){const c=new Float32Array(Br),h=new E(0,1,0);return new Ti({name:"SphericalGaussianBlur",defines:{n:Br,CUBEUV_TEXEL_WIDTH:1/o,CUBEUV_TEXEL_HEIGHT:1/l,CUBEUV_MAX_MIP:`${a}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:c},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:h}},vertexShader:sa(),fragmentShader:`

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
		`,blending:0,depthTest:!1,depthWrite:!1})}(s,t,e)}return n}_compileMaterial(t){const e=new Ht(this._lodPlanes[0],t);this._renderer.compile(e,ta)}_sceneToCubeUV(t,e,i,n){const s=new Ue(90,1,e,i),a=[1,-1,1,1,1,1],o=[1,1,1,-1,-1,-1],l=this._renderer,c=l.autoClear,h=l.toneMapping;l.getClearColor(Oo),l.toneMapping=0,l.autoClear=!1;const d=new je({name:"PMREM.Background",side:1,depthWrite:!1,depthTest:!1}),p=new Ht(new Ci,d);let _=!1;const f=t.background;f?f.isColor&&(d.color.copy(f),t.background=null,_=!0):(d.color.copy(Oo),_=!0);for(let g=0;g<6;g++){const m=g%3;m===0?(s.up.set(0,a[g],0),s.lookAt(o[g],0,0)):m===1?(s.up.set(0,0,a[g]),s.lookAt(0,o[g],0)):(s.up.set(0,a[g],0),s.lookAt(0,0,o[g]));const y=this._cubeSize;kr(n,m*y,g>2?y:0,y,y),l.setRenderTarget(n),_&&l.render(p,s),l.render(t,s)}p.geometry.dispose(),p.material.dispose(),l.toneMapping=h,l.autoClear=c,t.background=f}_textureToCubeUV(t,e){const i=this._renderer,n=t.mapping===Ji||t.mapping===Ki;n?(this._cubemapMaterial===null&&(this._cubemapMaterial=Ho()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=ko());const s=n?this._cubemapMaterial:this._equirectMaterial,a=new Ht(this._lodPlanes[0],s);s.uniforms.envMap.value=t;const o=this._cubeSize;kr(e,0,0,3*o,2*o),i.setRenderTarget(e),i.render(a,ta)}_applyPMREM(t){const e=this._renderer,i=e.autoClear;e.autoClear=!1;const n=this._lodPlanes.length;for(let s=1;s<n;s++){const a=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),o=Fo[(n-s-1)%Fo.length];this._blur(t,s-1,s,a,o)}e.autoClear=i}_blur(t,e,i,n,s){const a=this._pingPongRenderTarget;this._halfBlur(t,a,e,i,n,"latitudinal",s),this._halfBlur(a,t,i,i,n,"longitudinal",s)}_halfBlur(t,e,i,n,s,a,o){const l=this._renderer,c=this._blurMaterial,h=new Ht(this._lodPlanes[n],c),d=c.uniforms,p=this._sizeLods[i]-1,_=isFinite(s)?Math.PI/(2*p):2*Math.PI/39,f=s/_,g=isFinite(s)?1+Math.floor(3*f):Br,m=[];let y=0;for(let R=0;R<Br;++R){const N=R/f,A=Math.exp(-N*N/2);m.push(A),R===0?y+=A:R<g&&(y+=2*A)}for(let R=0;R<m.length;R++)m[R]=m[R]/y;d.envMap.value=t.texture,d.samples.value=g,d.weights.value=m,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);const{_lodMax:w}=this;d.dTheta.value=_,d.mipInt.value=w-i;const v=this._sizeLods[n];kr(e,3*v*(n>w-4?n-w+4:0),4*(this._cubeSize-v),3*v,2*v),l.setRenderTarget(e),l.render(h,ta)}}function Bo(r,t,e){const i=new Ni(r,t,e);return i.texture.mapping=or,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function kr(r,t,e,i,n){r.viewport.set(t,e,i,n),r.scissor.set(t,e,i,n)}function ko(){return new Ti({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:sa(),fragmentShader:`

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
		`,blending:0,depthTest:!1,depthWrite:!1})}function Ho(){return new Ti({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:sa(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function sa(){return`

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
	`}function Eh(r){let t=new WeakMap,e=null;function i(n){const s=n.target;s.removeEventListener("dispose",i);const a=t.get(s);a!==void 0&&(t.delete(s),a.dispose())}return{get:function(n){if(n&&n.isTexture){const s=n.mapping,a=s===303||s===304,o=s===Ji||s===Ki;if(a||o){let l=t.get(n);const c=l!==void 0?l.texture.pmremVersion:0;if(n.isRenderTargetTexture&&n.pmremVersion!==c)return e===null&&(e=new zo(r)),l=a?e.fromEquirectangular(n,l):e.fromCubemap(n,l),l.texture.pmremVersion=n.pmremVersion,t.set(n,l),l.texture;if(l!==void 0)return l.texture;{const h=n.image;return a&&h&&h.height>0||o&&h&&function(d){let p=0;const _=6;for(let f=0;f<_;f++)d[f]!==void 0&&p++;return p===_}(h)?(e===null&&(e=new zo(r)),l=a?e.fromEquirectangular(n):e.fromCubemap(n),l.texture.pmremVersion=n.pmremVersion,t.set(n,l),n.addEventListener("dispose",i),l.texture):null}}}return n},dispose:function(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}}}function Th(r){const t={};function e(i){if(t[i]!==void 0)return t[i];let n;switch(i){case"WEBGL_depth_texture":n=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":n=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":n=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":n=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:n=r.getExtension(i)}return t[i]=n,n}return{has:function(i){return e(i)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(i){const n=e(i);return n===null&&no("THREE.WebGLRenderer: "+i+" extension not supported."),n}}}function Ah(r,t,e,i){const n={},s=new WeakMap;function a(l){const c=l.target;c.index!==null&&t.remove(c.index);for(const d in c.attributes)t.remove(c.attributes[d]);for(const d in c.morphAttributes){const p=c.morphAttributes[d];for(let _=0,f=p.length;_<f;_++)t.remove(p[_])}c.removeEventListener("dispose",a),delete n[c.id];const h=s.get(c);h&&(t.remove(h),s.delete(c)),i.releaseStatesOfGeometry(c),c.isInstancedBufferGeometry===!0&&delete c._maxInstanceCount,e.memory.geometries--}function o(l){const c=[],h=l.index,d=l.attributes.position;let p=0;if(h!==null){const g=h.array;p=h.version;for(let m=0,y=g.length;m<y;m+=3){const w=g[m+0],v=g[m+1],R=g[m+2];c.push(w,v,v,R,R,w)}}else{if(d===void 0)return;{const g=d.array;p=d.version;for(let m=0,y=g.length/3-1;m<y;m+=3){const w=m+0,v=m+1,R=m+2;c.push(w,v,v,R,R,w)}}}const _=new(eo(c)?xo:bo)(c,1);_.version=p;const f=s.get(l);f&&t.remove(f),s.set(l,_)}return{get:function(l,c){return n[c.id]===!0||(c.addEventListener("dispose",a),n[c.id]=!0,e.memory.geometries++),c},update:function(l){const c=l.attributes;for(const d in c)t.update(c[d],r.ARRAY_BUFFER);const h=l.morphAttributes;for(const d in h){const p=h[d];for(let _=0,f=p.length;_<f;_++)t.update(p[_],r.ARRAY_BUFFER)}},getWireframeAttribute:function(l){const c=s.get(l);if(c){const h=l.index;h!==null&&c.version<h.version&&o(l)}else o(l);return s.get(l)}}}function Rh(r,t,e){let i,n,s;function a(o,l,c){c!==0&&(r.drawElementsInstanced(i,l,n,o*s,c),e.update(l,i,c))}this.setMode=function(o){i=o},this.setIndex=function(o){n=o.type,s=o.bytesPerElement},this.render=function(o,l){r.drawElements(i,l,n,o*s),e.update(l,i,1)},this.renderInstances=a,this.renderMultiDraw=function(o,l,c){if(c===0)return;const h=t.get("WEBGL_multi_draw");if(h===null)for(let d=0;d<c;d++)this.render(o[d]/s,l[d]);else{h.multiDrawElementsWEBGL(i,l,0,n,o,0,c);let d=0;for(let p=0;p<c;p++)d+=l[p];e.update(d,i,1)}},this.renderMultiDrawInstances=function(o,l,c,h){if(c===0)return;const d=t.get("WEBGL_multi_draw");if(d===null)for(let p=0;p<o.length;p++)a(o[p]/s,l[p],h[p]);else{d.multiDrawElementsInstancedWEBGL(i,l,0,n,o,0,h,0,c);let p=0;for(let _=0;_<c;_++)p+=l[_];for(let _=0;_<h.length;_++)e.update(p,i,h[_])}}}function Ch(r){const t={frame:0,calls:0,triangles:0,points:0,lines:0};return{memory:{geometries:0,textures:0},render:t,programs:null,autoReset:!0,reset:function(){t.calls=0,t.triangles=0,t.points=0,t.lines=0},update:function(e,i,n){switch(t.calls++,i){case r.TRIANGLES:t.triangles+=n*(e/3);break;case r.LINES:t.lines+=n*(e/2);break;case r.LINE_STRIP:t.lines+=n*(e-1);break;case r.LINE_LOOP:t.lines+=n*e;break;case r.POINTS:t.points+=n*e}}}}function Ph(r,t,e){const i=new WeakMap,n=new te;return{update:function(s,a,o){const l=s.morphTargetInfluences,c=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=c!==void 0?c.length:0;let d=i.get(a);if(d===void 0||d.count!==h){let D=function(){C.dispose(),i.delete(a),a.removeEventListener("dispose",D)};var p=D;d!==void 0&&d.texture.dispose();const _=a.morphAttributes.position!==void 0,f=a.morphAttributes.normal!==void 0,g=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],y=a.morphAttributes.normal||[],w=a.morphAttributes.color||[];let v=0;_===!0&&(v=1),f===!0&&(v=2),g===!0&&(v=3);let R=a.attributes.position.count*v,N=1;R>t.maxTextureSize&&(N=Math.ceil(R/t.maxTextureSize),R=t.maxTextureSize);const A=new Float32Array(R*N*4*h),C=new oo(A,R,N,h);C.type=wi,C.needsUpdate=!0;const k=4*v;for(let V=0;V<h;V++){const Y=m[V],H=y[V],Z=w[V],W=R*N*4*V;for(let Q=0;Q<Y.count;Q++){const K=Q*k;_===!0&&(n.fromBufferAttribute(Y,Q),A[W+K+0]=n.x,A[W+K+1]=n.y,A[W+K+2]=n.z,A[W+K+3]=0),f===!0&&(n.fromBufferAttribute(H,Q),A[W+K+4]=n.x,A[W+K+5]=n.y,A[W+K+6]=n.z,A[W+K+7]=0),g===!0&&(n.fromBufferAttribute(Z,Q),A[W+K+8]=n.x,A[W+K+9]=n.y,A[W+K+10]=n.z,A[W+K+11]=Z.itemSize===4?n.w:1)}}d={count:h,texture:C,size:new ut(R,N)},i.set(a,d),a.addEventListener("dispose",D)}if(s.isInstancedMesh===!0&&s.morphTexture!==null)o.getUniforms().setValue(r,"morphTexture",s.morphTexture,e);else{let _=0;for(let g=0;g<l.length;g++)_+=l[g];const f=a.morphTargetsRelative?1:1-_;o.getUniforms().setValue(r,"morphTargetBaseInfluence",f),o.getUniforms().setValue(r,"morphTargetInfluences",l)}o.getUniforms().setValue(r,"morphTargetsTexture",d.texture,e),o.getUniforms().setValue(r,"morphTargetsTextureSize",d.size)}}}function Lh(r,t,e,i){let n=new WeakMap;function s(a){const o=a.target;o.removeEventListener("dispose",s),e.remove(o.instanceMatrix),o.instanceColor!==null&&e.remove(o.instanceColor)}return{update:function(a){const o=i.render.frame,l=a.geometry,c=t.get(a,l);if(n.get(c)!==o&&(t.update(c),n.set(c,o)),a.isInstancedMesh&&(a.hasEventListener("dispose",s)===!1&&a.addEventListener("dispose",s),n.get(a)!==o&&(e.update(a.instanceMatrix,r.ARRAY_BUFFER),a.instanceColor!==null&&e.update(a.instanceColor,r.ARRAY_BUFFER),n.set(a,o))),a.isSkinnedMesh){const h=a.skeleton;n.get(h)!==o&&(h.update(),n.set(h,o))}return c},dispose:function(){n=new WeakMap}}}class Go extends Ce{constructor(t,e,i,n,s,a,o,l,c,h=1026){if(h!==On&&h!==tn)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&h===On&&(i=$i),i===void 0&&h===tn&&(i=Qi),super(null,n,s,a,o,l,h,i,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=o!==void 0?o:ze,this.minFilter=l!==void 0?l:ze,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const Vo=new Ce,Wo=new Go(1,1);Wo.compareFunction=515;const jo=new oo,Xo=new ih,qo=new Io,Yo=[],Jo=[],Ko=new Float32Array(16),Zo=new Float32Array(9),$o=new Float32Array(4);function Tn(r,t,e){const i=r[0];if(i<=0||i>0)return r;const n=t*e;let s=Yo[n];if(s===void 0&&(s=new Float32Array(n),Yo[n]=s),t!==0){i.toArray(s,0);for(let a=1,o=0;a!==t;++a)o+=e,r[a].toArray(s,o)}return s}function _e(r,t){if(r.length!==t.length)return!1;for(let e=0,i=r.length;e<i;e++)if(r[e]!==t[e])return!1;return!0}function me(r,t){for(let e=0,i=t.length;e<i;e++)r[e]=t[e]}function Hr(r,t){let e=Jo[t];e===void 0&&(e=new Int32Array(t),Jo[t]=e);for(let i=0;i!==t;++i)e[i]=r.allocateTextureUnit();return e}function Ih(r,t){const e=this.cache;e[0]!==t&&(r.uniform1f(this.addr,t),e[0]=t)}function Dh(r,t){const e=this.cache;if(t.x!==void 0)e[0]===t.x&&e[1]===t.y||(r.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(_e(e,t))return;r.uniform2fv(this.addr,t),me(e,t)}}function Uh(r,t){const e=this.cache;if(t.x!==void 0)e[0]===t.x&&e[1]===t.y&&e[2]===t.z||(r.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)e[0]===t.r&&e[1]===t.g&&e[2]===t.b||(r.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(_e(e,t))return;r.uniform3fv(this.addr,t),me(e,t)}}function Nh(r,t){const e=this.cache;if(t.x!==void 0)e[0]===t.x&&e[1]===t.y&&e[2]===t.z&&e[3]===t.w||(r.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(_e(e,t))return;r.uniform4fv(this.addr,t),me(e,t)}}function Oh(r,t){const e=this.cache,i=t.elements;if(i===void 0){if(_e(e,t))return;r.uniformMatrix2fv(this.addr,!1,t),me(e,t)}else{if(_e(e,i))return;$o.set(i),r.uniformMatrix2fv(this.addr,!1,$o),me(e,i)}}function Fh(r,t){const e=this.cache,i=t.elements;if(i===void 0){if(_e(e,t))return;r.uniformMatrix3fv(this.addr,!1,t),me(e,t)}else{if(_e(e,i))return;Zo.set(i),r.uniformMatrix3fv(this.addr,!1,Zo),me(e,i)}}function zh(r,t){const e=this.cache,i=t.elements;if(i===void 0){if(_e(e,t))return;r.uniformMatrix4fv(this.addr,!1,t),me(e,t)}else{if(_e(e,i))return;Ko.set(i),r.uniformMatrix4fv(this.addr,!1,Ko),me(e,i)}}function Bh(r,t){const e=this.cache;e[0]!==t&&(r.uniform1i(this.addr,t),e[0]=t)}function kh(r,t){const e=this.cache;if(t.x!==void 0)e[0]===t.x&&e[1]===t.y||(r.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(_e(e,t))return;r.uniform2iv(this.addr,t),me(e,t)}}function Hh(r,t){const e=this.cache;if(t.x!==void 0)e[0]===t.x&&e[1]===t.y&&e[2]===t.z||(r.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(_e(e,t))return;r.uniform3iv(this.addr,t),me(e,t)}}function Gh(r,t){const e=this.cache;if(t.x!==void 0)e[0]===t.x&&e[1]===t.y&&e[2]===t.z&&e[3]===t.w||(r.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(_e(e,t))return;r.uniform4iv(this.addr,t),me(e,t)}}function Vh(r,t){const e=this.cache;e[0]!==t&&(r.uniform1ui(this.addr,t),e[0]=t)}function Wh(r,t){const e=this.cache;if(t.x!==void 0)e[0]===t.x&&e[1]===t.y||(r.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(_e(e,t))return;r.uniform2uiv(this.addr,t),me(e,t)}}function jh(r,t){const e=this.cache;if(t.x!==void 0)e[0]===t.x&&e[1]===t.y&&e[2]===t.z||(r.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(_e(e,t))return;r.uniform3uiv(this.addr,t),me(e,t)}}function Xh(r,t){const e=this.cache;if(t.x!==void 0)e[0]===t.x&&e[1]===t.y&&e[2]===t.z&&e[3]===t.w||(r.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(_e(e,t))return;r.uniform4uiv(this.addr,t),me(e,t)}}function qh(r,t,e){const i=this.cache,n=e.allocateTextureUnit();i[0]!==n&&(r.uniform1i(this.addr,n),i[0]=n);const s=this.type===r.SAMPLER_2D_SHADOW?Wo:Vo;e.setTexture2D(t||s,n)}function Yh(r,t,e){const i=this.cache,n=e.allocateTextureUnit();i[0]!==n&&(r.uniform1i(this.addr,n),i[0]=n),e.setTexture3D(t||Xo,n)}function Jh(r,t,e){const i=this.cache,n=e.allocateTextureUnit();i[0]!==n&&(r.uniform1i(this.addr,n),i[0]=n),e.setTextureCube(t||qo,n)}function Kh(r,t,e){const i=this.cache,n=e.allocateTextureUnit();i[0]!==n&&(r.uniform1i(this.addr,n),i[0]=n),e.setTexture2DArray(t||jo,n)}function Zh(r,t){r.uniform1fv(this.addr,t)}function $h(r,t){const e=Tn(t,this.size,2);r.uniform2fv(this.addr,e)}function Qh(r,t){const e=Tn(t,this.size,3);r.uniform3fv(this.addr,e)}function td(r,t){const e=Tn(t,this.size,4);r.uniform4fv(this.addr,e)}function ed(r,t){const e=Tn(t,this.size,4);r.uniformMatrix2fv(this.addr,!1,e)}function id(r,t){const e=Tn(t,this.size,9);r.uniformMatrix3fv(this.addr,!1,e)}function nd(r,t){const e=Tn(t,this.size,16);r.uniformMatrix4fv(this.addr,!1,e)}function rd(r,t){r.uniform1iv(this.addr,t)}function sd(r,t){r.uniform2iv(this.addr,t)}function ad(r,t){r.uniform3iv(this.addr,t)}function od(r,t){r.uniform4iv(this.addr,t)}function ld(r,t){r.uniform1uiv(this.addr,t)}function cd(r,t){r.uniform2uiv(this.addr,t)}function hd(r,t){r.uniform3uiv(this.addr,t)}function dd(r,t){r.uniform4uiv(this.addr,t)}function ud(r,t,e){const i=this.cache,n=t.length,s=Hr(e,n);_e(i,s)||(r.uniform1iv(this.addr,s),me(i,s));for(let a=0;a!==n;++a)e.setTexture2D(t[a]||Vo,s[a])}function pd(r,t,e){const i=this.cache,n=t.length,s=Hr(e,n);_e(i,s)||(r.uniform1iv(this.addr,s),me(i,s));for(let a=0;a!==n;++a)e.setTexture3D(t[a]||Xo,s[a])}function _d(r,t,e){const i=this.cache,n=t.length,s=Hr(e,n);_e(i,s)||(r.uniform1iv(this.addr,s),me(i,s));for(let a=0;a!==n;++a)e.setTextureCube(t[a]||qo,s[a])}function md(r,t,e){const i=this.cache,n=t.length,s=Hr(e,n);_e(i,s)||(r.uniform1iv(this.addr,s),me(i,s));for(let a=0;a!==n;++a)e.setTexture2DArray(t[a]||jo,s[a])}class fd{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=function(n){switch(n){case 5126:return Ih;case 35664:return Dh;case 35665:return Uh;case 35666:return Nh;case 35674:return Oh;case 35675:return Fh;case 35676:return zh;case 5124:case 35670:return Bh;case 35667:case 35671:return kh;case 35668:case 35672:return Hh;case 35669:case 35673:return Gh;case 5125:return Vh;case 36294:return Wh;case 36295:return jh;case 36296:return Xh;case 35678:case 36198:case 36298:case 36306:case 35682:return qh;case 35679:case 36299:case 36307:return Yh;case 35680:case 36300:case 36308:case 36293:return Jh;case 36289:case 36303:case 36311:case 36292:return Kh}}(e.type)}}class gd{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=function(n){switch(n){case 5126:return Zh;case 35664:return $h;case 35665:return Qh;case 35666:return td;case 35674:return ed;case 35675:return id;case 35676:return nd;case 5124:case 35670:return rd;case 35667:case 35671:return sd;case 35668:case 35672:return ad;case 35669:case 35673:return od;case 5125:return ld;case 36294:return cd;case 36295:return hd;case 36296:return dd;case 35678:case 36198:case 36298:case 36306:case 35682:return ud;case 35679:case 36299:case 36307:return pd;case 35680:case 36300:case 36308:case 36293:return _d;case 36289:case 36303:case 36311:case 36292:return md}}(e.type)}}class wd{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){const n=this.seq;for(let s=0,a=n.length;s!==a;++s){const o=n[s];o.setValue(t,e[o.id],i)}}}const aa=/(\w+)(\])?(\[|\.)?/g;function Qo(r,t){r.seq.push(t),r.map[t.id]=t}function vd(r,t,e){const i=r.name,n=i.length;for(aa.lastIndex=0;;){const s=aa.exec(i),a=aa.lastIndex;let o=s[1];const l=s[2]==="]",c=s[3];if(l&&(o|=0),c===void 0||c==="["&&a+2===n){Qo(e,c===void 0?new fd(o,r,t):new gd(o,r,t));break}{let h=e.map[o];h===void 0&&(h=new wd(o),Qo(e,h)),e=h}}}class Gr{constructor(t,e){this.seq=[],this.map={};const i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let n=0;n<i;++n){const s=t.getActiveUniform(e,n);vd(s,t.getUniformLocation(e,s.name),this)}}setValue(t,e,i,n){const s=this.map[e];s!==void 0&&s.setValue(t,i,n)}setOptional(t,e,i){const n=e[i];n!==void 0&&this.setValue(t,i,n)}static upload(t,e,i,n){for(let s=0,a=e.length;s!==a;++s){const o=e[s],l=i[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,n)}}static seqWithValue(t,e){const i=[];for(let n=0,s=t.length;n!==s;++n){const a=t[n];a.id in e&&i.push(a)}return i}}function tl(r,t,e){const i=r.createShader(t);return r.shaderSource(i,e),r.compileShader(i),i}let yd=0;function el(r,t,e){const i=r.getShaderParameter(t,r.COMPILE_STATUS),n=r.getShaderInfoLog(t).trim();if(i&&n==="")return"";const s=/ERROR: 0:(\d+)/.exec(n);if(s){const a=parseInt(s[1]);return e.toUpperCase()+`

`+n+`

`+function(o,l){const c=o.split(`
`),h=[],d=Math.max(l-6,0),p=Math.min(l+6,c.length);for(let _=d;_<p;_++){const f=_+1;h.push(`${f===l?">":" "} ${f}: ${c[_]}`)}return h.join(`
`)}(r.getShaderSource(t),a)}return n}function bd(r,t){const e=function(i){const n=Xt.getPrimaries(Xt.workingColorSpace),s=Xt.getPrimaries(i);let a;switch(n===s?a="":n===_r&&s===pr?a="LinearDisplayP3ToLinearSRGB":n===pr&&s===_r&&(a="LinearSRGBToLinearDisplayP3"),i){case yi:case dr:return[a,"LinearTransferOETF"];case Ze:case Ds:return[a,"sRGBTransferOETF"];default:return[a,"LinearTransferOETF"]}}(t);return`vec4 ${r}( vec4 value ) { return ${e[0]}( ${e[1]}( value ) ); }`}function xd(r,t){let e;switch(t){case 1:default:e="Linear";break;case 2:e="Reinhard";break;case 3:e="OptimizedCineon";break;case 4:e="ACESFilmic";break;case 6:e="AgX";break;case 7:e="Neutral";break;case 5:e="Custom"}return"vec3 "+r+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}function Xn(r){return r!==""}function il(r,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function nl(r,t){return r.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const Sd=/^[ \t]*#include +<([\w\d./]+)>/gm;function oa(r){return r.replace(Sd,Ed)}const Md=new Map;function Ed(r,t){let e=Pt[t];if(e===void 0){const i=Md.get(t);if(i===void 0)throw new Error("Can not resolve #include <"+t+">");e=Pt[i]}return oa(e)}const Td=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function rl(r){return r.replace(Td,Ad)}function Ad(r,t,e,i){let n="";for(let s=parseInt(t);s<parseInt(e);s++)n+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return n}function sl(r){let t=`precision ${r.precision} float;
	precision ${r.precision} int;
	precision ${r.precision} sampler2D;
	precision ${r.precision} samplerCube;
	precision ${r.precision} sampler3D;
	precision ${r.precision} sampler2DArray;
	precision ${r.precision} sampler2DShadow;
	precision ${r.precision} samplerCubeShadow;
	precision ${r.precision} sampler2DArrayShadow;
	precision ${r.precision} isampler2D;
	precision ${r.precision} isampler3D;
	precision ${r.precision} isamplerCube;
	precision ${r.precision} isampler2DArray;
	precision ${r.precision} usampler2D;
	precision ${r.precision} usampler3D;
	precision ${r.precision} usamplerCube;
	precision ${r.precision} usampler2DArray;
	`;return r.precision==="highp"?t+=`
#define HIGH_PRECISION`:r.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function Rd(r,t,e,i){const n=r.getContext(),s=e.defines;let a=e.vertexShader,o=e.fragmentShader;const l=function(Y){let H="SHADOWMAP_TYPE_BASIC";return Y.shadowMapType===1?H="SHADOWMAP_TYPE_PCF":Y.shadowMapType===2?H="SHADOWMAP_TYPE_PCF_SOFT":Y.shadowMapType===3&&(H="SHADOWMAP_TYPE_VSM"),H}(e),c=function(Y){let H="ENVMAP_TYPE_CUBE";if(Y.envMap)switch(Y.envMapMode){case Ji:case Ki:H="ENVMAP_TYPE_CUBE";break;case or:H="ENVMAP_TYPE_CUBE_UV"}return H}(e),h=function(Y){let H="ENVMAP_MODE_REFLECTION";return Y.envMap&&Y.envMapMode===Ki&&(H="ENVMAP_MODE_REFRACTION"),H}(e),d=function(Y){let H="ENVMAP_BLENDING_NONE";if(Y.envMap)switch(Y.combine){case 0:H="ENVMAP_BLENDING_MULTIPLY";break;case 1:H="ENVMAP_BLENDING_MIX";break;case 2:H="ENVMAP_BLENDING_ADD"}return H}(e),p=function(Y){const H=Y.envMapCubeUVHeight;if(H===null)return null;const Z=Math.log2(H)-2,W=1/H;return{texelWidth:1/(3*Math.max(Math.pow(2,Z),112)),texelHeight:W,maxMip:Z}}(e),_=function(Y){return[Y.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",Y.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Xn).join(`
`)}(e),f=function(Y){const H=[];for(const Z in Y){const W=Y[Z];W!==!1&&H.push("#define "+Z+" "+W)}return H.join(`
`)}(s),g=n.createProgram();let m,y,w=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,f].filter(Xn).join(`
`),m.length>0&&(m+=`
`),y=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,f].filter(Xn).join(`
`),y.length>0&&(y+=`
`)):(m=[sl(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,f,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Xn).join(`
`),y=[sl(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,f,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+d:"",p?"#define CUBEUV_TEXEL_WIDTH "+p.texelWidth:"",p?"#define CUBEUV_TEXEL_HEIGHT "+p.texelHeight:"",p?"#define CUBEUV_MAX_MIP "+p.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==0?"#define TONE_MAPPING":"",e.toneMapping!==0?Pt.tonemapping_pars_fragment:"",e.toneMapping!==0?xd("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Pt.colorspace_pars_fragment,bd("linearToOutputTexel",e.outputColorSpace),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Xn).join(`
`)),a=oa(a),a=il(a,e),a=nl(a,e),o=oa(o),o=il(o,e),o=nl(o,e),a=rl(a),o=rl(o),e.isRawShaderMaterial!==!0&&(w=`#version 300 es
`,m=[_,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,y=["#define varying in",e.glslVersion===Qa?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Qa?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+y);const v=w+m+a,R=w+y+o,N=tl(n,n.VERTEX_SHADER,v),A=tl(n,n.FRAGMENT_SHADER,R);function C(Y){if(r.debug.checkShaderErrors){const H=n.getProgramInfoLog(g).trim(),Z=n.getShaderInfoLog(N).trim(),W=n.getShaderInfoLog(A).trim();let Q=!0,K=!0;n.getProgramParameter(g,n.LINK_STATUS)===!1?(Q=!1,typeof r.debug.onShaderError=="function"?r.debug.onShaderError(n,g,N,A):(el(n,N,"vertex"),el(n,A,"fragment"))):H!==""||Z!==""&&W!==""||(K=!1),K&&(Y.diagnostics={runnable:Q,programLog:H,vertexShader:{log:Z,prefix:m},fragmentShader:{log:W,prefix:y}})}n.deleteShader(N),n.deleteShader(A),k=new Gr(n,g),D=function(H,Z){const W={},Q=H.getProgramParameter(Z,H.ACTIVE_ATTRIBUTES);for(let K=0;K<Q;K++){const at=H.getActiveAttrib(Z,K),lt=at.name;let wt=1;at.type===H.FLOAT_MAT2&&(wt=2),at.type===H.FLOAT_MAT3&&(wt=3),at.type===H.FLOAT_MAT4&&(wt=4),W[lt]={type:at.type,location:H.getAttribLocation(Z,lt),locationSize:wt}}return W}(n,g)}let k,D;n.attachShader(g,N),n.attachShader(g,A),e.index0AttributeName!==void 0?n.bindAttribLocation(g,0,e.index0AttributeName):e.morphTargets===!0&&n.bindAttribLocation(g,0,"position"),n.linkProgram(g),this.getUniforms=function(){return k===void 0&&C(this),k},this.getAttributes=function(){return D===void 0&&C(this),D};let V=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return V===!1&&(V=n.getProgramParameter(g,37297)),V},this.destroy=function(){i.releaseStatesOfProgram(this),n.deleteProgram(g),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=yd++,this.cacheKey=t,this.usedTimes=1,this.program=g,this.vertexShader=N,this.fragmentShader=A,this}let Cd=0;class Pd{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,i=t.fragmentShader,n=this._getShaderStage(e),s=this._getShaderStage(i),a=this._getShaderCacheForMaterial(t);return a.has(n)===!1&&(a.add(n),n.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){const e=this.shaderCache;let i=e.get(t);return i===void 0&&(i=new Ld(t),e.set(t,i)),i}}class Ld{constructor(t){this.id=Cd++,this.code=t,this.usedTimes=0}}function Id(r,t,e,i,n,s,a){const o=new po,l=new Pd,c=new Set,h=[],d=n.logarithmicDepthBuffer,p=n.vertexTextures;let _=n.precision;const f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(m){return c.add(m),m===0?"uv":`uv${m}`}return{getParameters:function(m,y,w,v,R){const N=v.fog,A=R.geometry,C=m.isMeshStandardMaterial?v.environment:null,k=(m.isMeshStandardMaterial?e:t).get(m.envMap||C),D=k&&k.mapping===or?k.image.height:null,V=f[m.type];m.precision!==null&&(_=n.getMaxPrecision(m.precision),m.precision);const Y=A.morphAttributes.position||A.morphAttributes.normal||A.morphAttributes.color,H=Y!==void 0?Y.length:0;let Z,W,Q,K,at=0;if(A.morphAttributes.position!==void 0&&(at=1),A.morphAttributes.normal!==void 0&&(at=2),A.morphAttributes.color!==void 0&&(at=3),V){const ce=$e[V];Z=ce.vertexShader,W=ce.fragmentShader}else Z=m.vertexShader,W=m.fragmentShader,l.update(m),Q=l.getVertexShaderID(m),K=l.getFragmentShaderID(m);const lt=r.getRenderTarget(),wt=R.isInstancedMesh===!0,At=R.isBatchedMesh===!0,tt=!!m.map,nt=!!m.matcap,_t=!!k,st=!!m.aoMap,M=!!m.lightMap,x=!!m.bumpMap,O=!!m.normalMap,J=!!m.displacementMap,B=!!m.emissiveMap,q=!!m.metalnessMap,S=!!m.roughnessMap,F=m.anisotropy>0,z=m.clearcoat>0,ot=m.dispersion>0,G=m.iridescence>0,rt=m.sheen>0,mt=m.transmission>0,ct=F&&!!m.anisotropyMap,pt=z&&!!m.clearcoatMap,yt=z&&!!m.clearcoatNormalMap,bt=z&&!!m.clearcoatRoughnessMap,Rt=G&&!!m.iridescenceMap,qt=G&&!!m.iridescenceThicknessMap,jt=rt&&!!m.sheenColorMap,vt=rt&&!!m.sheenRoughnessMap,Ft=!!m.specularMap,zt=!!m.specularColorMap,ne=!!m.specularIntensityMap,Mt=mt&&!!m.transmissionMap,Kt=mt&&!!m.thicknessMap,Yt=!!m.gradientMap,Ee=!!m.alphaMap,si=m.alphaTest>0,Yi=!!m.alphaHash,L=!!m.extensions;let Ln=0;m.toneMapped&&(lt!==null&&lt.isXRRenderTarget!==!0||(Ln=r.toneMapping));const Li={shaderID:V,shaderType:m.type,shaderName:m.name,vertexShader:Z,fragmentShader:W,defines:m.defines,customVertexShaderID:Q,customFragmentShaderID:K,isRawShaderMaterial:m.isRawShaderMaterial===!0,glslVersion:m.glslVersion,precision:_,batching:At,batchingColor:At&&R._colorsTexture!==null,instancing:wt,instancingColor:wt&&R.instanceColor!==null,instancingMorph:wt&&R.morphTexture!==null,supportsVertexTextures:p,outputColorSpace:lt===null?r.outputColorSpace:lt.isXRRenderTarget===!0?lt.texture.colorSpace:yi,alphaToCoverage:!!m.alphaToCoverage,map:tt,matcap:nt,envMap:_t,envMapMode:_t&&k.mapping,envMapCubeUVHeight:D,aoMap:st,lightMap:M,bumpMap:x,normalMap:O,displacementMap:p&&J,emissiveMap:B,normalMapObjectSpace:O&&m.normalMapType===1,normalMapTangentSpace:O&&m.normalMapType===0,metalnessMap:q,roughnessMap:S,anisotropy:F,anisotropyMap:ct,clearcoat:z,clearcoatMap:pt,clearcoatNormalMap:yt,clearcoatRoughnessMap:bt,dispersion:ot,iridescence:G,iridescenceMap:Rt,iridescenceThicknessMap:qt,sheen:rt,sheenColorMap:jt,sheenRoughnessMap:vt,specularMap:Ft,specularColorMap:zt,specularIntensityMap:ne,transmission:mt,transmissionMap:Mt,thicknessMap:Kt,gradientMap:Yt,opaque:m.transparent===!1&&m.blending===1&&m.alphaToCoverage===!1,alphaMap:Ee,alphaTest:si,alphaHash:Yi,combine:m.combine,mapUv:tt&&g(m.map.channel),aoMapUv:st&&g(m.aoMap.channel),lightMapUv:M&&g(m.lightMap.channel),bumpMapUv:x&&g(m.bumpMap.channel),normalMapUv:O&&g(m.normalMap.channel),displacementMapUv:J&&g(m.displacementMap.channel),emissiveMapUv:B&&g(m.emissiveMap.channel),metalnessMapUv:q&&g(m.metalnessMap.channel),roughnessMapUv:S&&g(m.roughnessMap.channel),anisotropyMapUv:ct&&g(m.anisotropyMap.channel),clearcoatMapUv:pt&&g(m.clearcoatMap.channel),clearcoatNormalMapUv:yt&&g(m.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:bt&&g(m.clearcoatRoughnessMap.channel),iridescenceMapUv:Rt&&g(m.iridescenceMap.channel),iridescenceThicknessMapUv:qt&&g(m.iridescenceThicknessMap.channel),sheenColorMapUv:jt&&g(m.sheenColorMap.channel),sheenRoughnessMapUv:vt&&g(m.sheenRoughnessMap.channel),specularMapUv:Ft&&g(m.specularMap.channel),specularColorMapUv:zt&&g(m.specularColorMap.channel),specularIntensityMapUv:ne&&g(m.specularIntensityMap.channel),transmissionMapUv:Mt&&g(m.transmissionMap.channel),thicknessMapUv:Kt&&g(m.thicknessMap.channel),alphaMapUv:Ee&&g(m.alphaMap.channel),vertexTangents:!!A.attributes.tangent&&(O||F),vertexColors:m.vertexColors,vertexAlphas:m.vertexColors===!0&&!!A.attributes.color&&A.attributes.color.itemSize===4,pointsUvs:R.isPoints===!0&&!!A.attributes.uv&&(tt||Ee),fog:!!N,useFog:m.fog===!0,fogExp2:!!N&&N.isFogExp2,flatShading:m.flatShading===!0,sizeAttenuation:m.sizeAttenuation===!0,logarithmicDepthBuffer:d,skinning:R.isSkinnedMesh===!0,morphTargets:A.morphAttributes.position!==void 0,morphNormals:A.morphAttributes.normal!==void 0,morphColors:A.morphAttributes.color!==void 0,morphTargetsCount:H,morphTextureStride:at,numDirLights:y.directional.length,numPointLights:y.point.length,numSpotLights:y.spot.length,numSpotLightMaps:y.spotLightMap.length,numRectAreaLights:y.rectArea.length,numHemiLights:y.hemi.length,numDirLightShadows:y.directionalShadowMap.length,numPointLightShadows:y.pointShadowMap.length,numSpotLightShadows:y.spotShadowMap.length,numSpotLightShadowsWithMaps:y.numSpotLightShadowsWithMaps,numLightProbes:y.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:m.dithering,shadowMapEnabled:r.shadowMap.enabled&&w.length>0,shadowMapType:r.shadowMap.type,toneMapping:Ln,decodeVideoTexture:tt&&m.map.isVideoTexture===!0&&Xt.getTransfer(m.map.colorSpace)===$t,premultipliedAlpha:m.premultipliedAlpha,doubleSided:m.side===2,flipSided:m.side===1,useDepthPacking:m.depthPacking>=0,depthPacking:m.depthPacking||0,index0AttributeName:m.index0AttributeName,extensionClipCullDistance:L&&m.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:L&&m.extensions.multiDraw===!0&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:m.customProgramCacheKey()};return Li.vertexUv1s=c.has(1),Li.vertexUv2s=c.has(2),Li.vertexUv3s=c.has(3),c.clear(),Li},getProgramCacheKey:function(m){const y=[];if(m.shaderID?y.push(m.shaderID):(y.push(m.customVertexShaderID),y.push(m.customFragmentShaderID)),m.defines!==void 0)for(const w in m.defines)y.push(w),y.push(m.defines[w]);return m.isRawShaderMaterial===!1&&(function(w,v){w.push(v.precision),w.push(v.outputColorSpace),w.push(v.envMapMode),w.push(v.envMapCubeUVHeight),w.push(v.mapUv),w.push(v.alphaMapUv),w.push(v.lightMapUv),w.push(v.aoMapUv),w.push(v.bumpMapUv),w.push(v.normalMapUv),w.push(v.displacementMapUv),w.push(v.emissiveMapUv),w.push(v.metalnessMapUv),w.push(v.roughnessMapUv),w.push(v.anisotropyMapUv),w.push(v.clearcoatMapUv),w.push(v.clearcoatNormalMapUv),w.push(v.clearcoatRoughnessMapUv),w.push(v.iridescenceMapUv),w.push(v.iridescenceThicknessMapUv),w.push(v.sheenColorMapUv),w.push(v.sheenRoughnessMapUv),w.push(v.specularMapUv),w.push(v.specularColorMapUv),w.push(v.specularIntensityMapUv),w.push(v.transmissionMapUv),w.push(v.thicknessMapUv),w.push(v.combine),w.push(v.fogExp2),w.push(v.sizeAttenuation),w.push(v.morphTargetsCount),w.push(v.morphAttributeCount),w.push(v.numDirLights),w.push(v.numPointLights),w.push(v.numSpotLights),w.push(v.numSpotLightMaps),w.push(v.numHemiLights),w.push(v.numRectAreaLights),w.push(v.numDirLightShadows),w.push(v.numPointLightShadows),w.push(v.numSpotLightShadows),w.push(v.numSpotLightShadowsWithMaps),w.push(v.numLightProbes),w.push(v.shadowMapType),w.push(v.toneMapping),w.push(v.numClippingPlanes),w.push(v.numClipIntersection),w.push(v.depthPacking)}(y,m),function(w,v){o.disableAll(),v.supportsVertexTextures&&o.enable(0),v.instancing&&o.enable(1),v.instancingColor&&o.enable(2),v.instancingMorph&&o.enable(3),v.matcap&&o.enable(4),v.envMap&&o.enable(5),v.normalMapObjectSpace&&o.enable(6),v.normalMapTangentSpace&&o.enable(7),v.clearcoat&&o.enable(8),v.iridescence&&o.enable(9),v.alphaTest&&o.enable(10),v.vertexColors&&o.enable(11),v.vertexAlphas&&o.enable(12),v.vertexUv1s&&o.enable(13),v.vertexUv2s&&o.enable(14),v.vertexUv3s&&o.enable(15),v.vertexTangents&&o.enable(16),v.anisotropy&&o.enable(17),v.alphaHash&&o.enable(18),v.batching&&o.enable(19),v.dispersion&&o.enable(20),v.batchingColor&&o.enable(21),w.push(o.mask),o.disableAll(),v.fog&&o.enable(0),v.useFog&&o.enable(1),v.flatShading&&o.enable(2),v.logarithmicDepthBuffer&&o.enable(3),v.skinning&&o.enable(4),v.morphTargets&&o.enable(5),v.morphNormals&&o.enable(6),v.morphColors&&o.enable(7),v.premultipliedAlpha&&o.enable(8),v.shadowMapEnabled&&o.enable(9),v.doubleSided&&o.enable(10),v.flipSided&&o.enable(11),v.useDepthPacking&&o.enable(12),v.dithering&&o.enable(13),v.transmission&&o.enable(14),v.sheen&&o.enable(15),v.opaque&&o.enable(16),v.pointsUvs&&o.enable(17),v.decodeVideoTexture&&o.enable(18),v.alphaToCoverage&&o.enable(19),w.push(o.mask)}(y,m),y.push(r.outputColorSpace)),y.push(m.customProgramCacheKey),y.join()},getUniforms:function(m){const y=f[m.type];let w;if(y){const v=$e[y];w=uh.clone(v.uniforms)}else w=m.uniforms;return w},acquireProgram:function(m,y){let w;for(let v=0,R=h.length;v<R;v++){const N=h[v];if(N.cacheKey===y){w=N,++w.usedTimes;break}}return w===void 0&&(w=new Rd(r,y,m,s),h.push(w)),w},releaseProgram:function(m){if(--m.usedTimes===0){const y=h.indexOf(m);h[y]=h[h.length-1],h.pop(),m.destroy()}},releaseShaderCache:function(m){l.remove(m)},programs:h,dispose:function(){l.dispose()}}}function Dd(){let r=new WeakMap;return{get:function(t){let e=r.get(t);return e===void 0&&(e={},r.set(t,e)),e},remove:function(t){r.delete(t)},update:function(t,e,i){r.get(t)[e]=i},dispose:function(){r=new WeakMap}}}function Ud(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.material.id!==t.material.id?r.material.id-t.material.id:r.z!==t.z?r.z-t.z:r.id-t.id}function al(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.z!==t.z?t.z-r.z:r.id-t.id}function ol(){const r=[];let t=0;const e=[],i=[],n=[];function s(a,o,l,c,h,d){let p=r[t];return p===void 0?(p={id:a.id,object:a,geometry:o,material:l,groupOrder:c,renderOrder:a.renderOrder,z:h,group:d},r[t]=p):(p.id=a.id,p.object=a,p.geometry=o,p.material=l,p.groupOrder=c,p.renderOrder=a.renderOrder,p.z=h,p.group=d),t++,p}return{opaque:e,transmissive:i,transparent:n,init:function(){t=0,e.length=0,i.length=0,n.length=0},push:function(a,o,l,c,h,d){const p=s(a,o,l,c,h,d);l.transmission>0?i.push(p):l.transparent===!0?n.push(p):e.push(p)},unshift:function(a,o,l,c,h,d){const p=s(a,o,l,c,h,d);l.transmission>0?i.unshift(p):l.transparent===!0?n.unshift(p):e.unshift(p)},finish:function(){for(let a=t,o=r.length;a<o;a++){const l=r[a];if(l.id===null)break;l.id=null,l.object=null,l.geometry=null,l.material=null,l.group=null}},sort:function(a,o){e.length>1&&e.sort(a||Ud),i.length>1&&i.sort(o||al),n.length>1&&n.sort(o||al)}}}function Nd(){let r=new WeakMap;return{get:function(t,e){const i=r.get(t);let n;return i===void 0?(n=new ol,r.set(t,[n])):e>=i.length?(n=new ol,i.push(n)):n=i[e],n},dispose:function(){r=new WeakMap}}}function Od(){const r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new E,color:new kt};break;case"SpotLight":e={position:new E,direction:new E,color:new kt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new E,color:new kt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new E,skyColor:new kt,groundColor:new kt};break;case"RectAreaLight":e={color:new kt,position:new E,halfWidth:new E,halfHeight:new E}}return r[t.id]=e,e}}}let Fd=0;function zd(r,t){return(t.castShadow?2:0)-(r.castShadow?2:0)+(t.map?1:0)-(r.map?1:0)}function Bd(r){const t=new Od,e=function(){const o={};return{get:function(l){if(o[l.id]!==void 0)return o[l.id];let c;switch(l.type){case"DirectionalLight":case"SpotLight":c={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ut};break;case"PointLight":c={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ut,shadowCameraNear:1,shadowCameraFar:1e3}}return o[l.id]=c,c}}}(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let o=0;o<9;o++)i.probe.push(new E);const n=new E,s=new ee,a=new ee;return{setup:function(o){let l=0,c=0,h=0;for(let C=0;C<9;C++)i.probe[C].set(0,0,0);let d=0,p=0,_=0,f=0,g=0,m=0,y=0,w=0,v=0,R=0,N=0;o.sort(zd);for(let C=0,k=o.length;C<k;C++){const D=o[C],V=D.color,Y=D.intensity,H=D.distance,Z=D.shadow&&D.shadow.map?D.shadow.map.texture:null;if(D.isAmbientLight)l+=V.r*Y,c+=V.g*Y,h+=V.b*Y;else if(D.isLightProbe){for(let W=0;W<9;W++)i.probe[W].addScaledVector(D.sh.coefficients[W],Y);N++}else if(D.isDirectionalLight){const W=t.get(D);if(W.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){const Q=D.shadow,K=e.get(D);K.shadowBias=Q.bias,K.shadowNormalBias=Q.normalBias,K.shadowRadius=Q.radius,K.shadowMapSize=Q.mapSize,i.directionalShadow[d]=K,i.directionalShadowMap[d]=Z,i.directionalShadowMatrix[d]=D.shadow.matrix,m++}i.directional[d]=W,d++}else if(D.isSpotLight){const W=t.get(D);W.position.setFromMatrixPosition(D.matrixWorld),W.color.copy(V).multiplyScalar(Y),W.distance=H,W.coneCos=Math.cos(D.angle),W.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),W.decay=D.decay,i.spot[_]=W;const Q=D.shadow;if(D.map&&(i.spotLightMap[v]=D.map,v++,Q.updateMatrices(D),D.castShadow&&R++),i.spotLightMatrix[_]=Q.matrix,D.castShadow){const K=e.get(D);K.shadowBias=Q.bias,K.shadowNormalBias=Q.normalBias,K.shadowRadius=Q.radius,K.shadowMapSize=Q.mapSize,i.spotShadow[_]=K,i.spotShadowMap[_]=Z,w++}_++}else if(D.isRectAreaLight){const W=t.get(D);W.color.copy(V).multiplyScalar(Y),W.halfWidth.set(.5*D.width,0,0),W.halfHeight.set(0,.5*D.height,0),i.rectArea[f]=W,f++}else if(D.isPointLight){const W=t.get(D);if(W.color.copy(D.color).multiplyScalar(D.intensity),W.distance=D.distance,W.decay=D.decay,D.castShadow){const Q=D.shadow,K=e.get(D);K.shadowBias=Q.bias,K.shadowNormalBias=Q.normalBias,K.shadowRadius=Q.radius,K.shadowMapSize=Q.mapSize,K.shadowCameraNear=Q.camera.near,K.shadowCameraFar=Q.camera.far,i.pointShadow[p]=K,i.pointShadowMap[p]=Z,i.pointShadowMatrix[p]=D.shadow.matrix,y++}i.point[p]=W,p++}else if(D.isHemisphereLight){const W=t.get(D);W.skyColor.copy(D.color).multiplyScalar(Y),W.groundColor.copy(D.groundColor).multiplyScalar(Y),i.hemi[g]=W,g++}}f>0&&(r.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ht.LTC_FLOAT_1,i.rectAreaLTC2=ht.LTC_FLOAT_2):(i.rectAreaLTC1=ht.LTC_HALF_1,i.rectAreaLTC2=ht.LTC_HALF_2)),i.ambient[0]=l,i.ambient[1]=c,i.ambient[2]=h;const A=i.hash;A.directionalLength===d&&A.pointLength===p&&A.spotLength===_&&A.rectAreaLength===f&&A.hemiLength===g&&A.numDirectionalShadows===m&&A.numPointShadows===y&&A.numSpotShadows===w&&A.numSpotMaps===v&&A.numLightProbes===N||(i.directional.length=d,i.spot.length=_,i.rectArea.length=f,i.point.length=p,i.hemi.length=g,i.directionalShadow.length=m,i.directionalShadowMap.length=m,i.pointShadow.length=y,i.pointShadowMap.length=y,i.spotShadow.length=w,i.spotShadowMap.length=w,i.directionalShadowMatrix.length=m,i.pointShadowMatrix.length=y,i.spotLightMatrix.length=w+v-R,i.spotLightMap.length=v,i.numSpotLightShadowsWithMaps=R,i.numLightProbes=N,A.directionalLength=d,A.pointLength=p,A.spotLength=_,A.rectAreaLength=f,A.hemiLength=g,A.numDirectionalShadows=m,A.numPointShadows=y,A.numSpotShadows=w,A.numSpotMaps=v,A.numLightProbes=N,i.version=Fd++)},setupView:function(o,l){let c=0,h=0,d=0,p=0,_=0;const f=l.matrixWorldInverse;for(let g=0,m=o.length;g<m;g++){const y=o[g];if(y.isDirectionalLight){const w=i.directional[c];w.direction.setFromMatrixPosition(y.matrixWorld),n.setFromMatrixPosition(y.target.matrixWorld),w.direction.sub(n),w.direction.transformDirection(f),c++}else if(y.isSpotLight){const w=i.spot[d];w.position.setFromMatrixPosition(y.matrixWorld),w.position.applyMatrix4(f),w.direction.setFromMatrixPosition(y.matrixWorld),n.setFromMatrixPosition(y.target.matrixWorld),w.direction.sub(n),w.direction.transformDirection(f),d++}else if(y.isRectAreaLight){const w=i.rectArea[p];w.position.setFromMatrixPosition(y.matrixWorld),w.position.applyMatrix4(f),a.identity(),s.copy(y.matrixWorld),s.premultiply(f),a.extractRotation(s),w.halfWidth.set(.5*y.width,0,0),w.halfHeight.set(0,.5*y.height,0),w.halfWidth.applyMatrix4(a),w.halfHeight.applyMatrix4(a),p++}else if(y.isPointLight){const w=i.point[h];w.position.setFromMatrixPosition(y.matrixWorld),w.position.applyMatrix4(f),h++}else if(y.isHemisphereLight){const w=i.hemi[_];w.direction.setFromMatrixPosition(y.matrixWorld),w.direction.transformDirection(f),_++}}},state:i}}function ll(r){const t=new Bd(r),e=[],i=[],n={lightsArray:e,shadowsArray:i,camera:null,lights:t,transmissionRenderTarget:{}};return{init:function(s){n.camera=s,e.length=0,i.length=0},state:n,setupLights:function(){t.setup(e)},setupLightsView:function(s){t.setupView(e,s)},pushLight:function(s){e.push(s)},pushShadow:function(s){i.push(s)}}}function kd(r){let t=new WeakMap;return{get:function(e,i=0){const n=t.get(e);let s;return n===void 0?(s=new ll(r),t.set(e,[s])):i>=n.length?(s=new ll(r),n.push(s)):s=n[i],s},dispose:function(){t=new WeakMap}}}class Hd extends wn{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=3200,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class Gd extends wn{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}function Vd(r,t,e){let i=new Qs;const n=new ut,s=new ut,a=new te,o=new Hd({depthPacking:3201}),l=new Gd,c={},h=e.maxTextureSize,d={[yc]:1,[bc]:0,[xc]:2},p=new Ti({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ut},radius:{value:4}},vertexShader:`void main() {
	gl_Position = vec4( position, 1.0 );
}`,fragmentShader:`uniform sampler2D shadow_pass;
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
}`}),_=p.clone();_.defines.HORIZONTAL_PASS=1;const f=new Re;f.setAttribute("position",new Xe(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const g=new Ht(f,p),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=1;let y=this.type;function w(A,C){const k=t.update(g);p.defines.VSM_SAMPLES!==A.blurSamples&&(p.defines.VSM_SAMPLES=A.blurSamples,_.defines.VSM_SAMPLES=A.blurSamples,p.needsUpdate=!0,_.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new Ni(n.x,n.y)),p.uniforms.shadow_pass.value=A.map.texture,p.uniforms.resolution.value=A.mapSize,p.uniforms.radius.value=A.radius,r.setRenderTarget(A.mapPass),r.clear(),r.renderBufferDirect(C,null,k,p,g,null),_.uniforms.shadow_pass.value=A.mapPass.texture,_.uniforms.resolution.value=A.mapSize,_.uniforms.radius.value=A.radius,r.setRenderTarget(A.map),r.clear(),r.renderBufferDirect(C,null,k,_,g,null)}function v(A,C,k,D){let V=null;const Y=k.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(Y!==void 0)V=Y;else if(V=k.isPointLight===!0?l:o,r.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0){const H=V.uuid,Z=C.uuid;let W=c[H];W===void 0&&(W={},c[H]=W);let Q=W[Z];Q===void 0&&(Q=V.clone(),W[Z]=Q,C.addEventListener("dispose",N)),V=Q}return V.visible=C.visible,V.wireframe=C.wireframe,V.side=D===3?C.shadowSide!==null?C.shadowSide:C.side:C.shadowSide!==null?C.shadowSide:d[C.side],V.alphaMap=C.alphaMap,V.alphaTest=C.alphaTest,V.map=C.map,V.clipShadows=C.clipShadows,V.clippingPlanes=C.clippingPlanes,V.clipIntersection=C.clipIntersection,V.displacementMap=C.displacementMap,V.displacementScale=C.displacementScale,V.displacementBias=C.displacementBias,V.wireframeLinewidth=C.wireframeLinewidth,V.linewidth=C.linewidth,k.isPointLight===!0&&V.isMeshDistanceMaterial===!0&&(r.properties.get(V).light=k),V}function R(A,C,k,D,V){if(A.visible===!1)return;if(A.layers.test(C.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&V===3)&&(!A.frustumCulled||i.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(k.matrixWorldInverse,A.matrixWorld);const H=t.update(A),Z=A.material;if(Array.isArray(Z)){const W=H.groups;for(let Q=0,K=W.length;Q<K;Q++){const at=W[Q],lt=Z[at.materialIndex];if(lt&&lt.visible){const wt=v(A,lt,D,V);A.onBeforeShadow(r,A,C,k,H,wt,at),r.renderBufferDirect(k,null,H,wt,A,at),A.onAfterShadow(r,A,C,k,H,wt,at)}}}else if(Z.visible){const W=v(A,Z,D,V);A.onBeforeShadow(r,A,C,k,H,W,null),r.renderBufferDirect(k,null,H,W,A,null),A.onAfterShadow(r,A,C,k,H,W,null)}}const Y=A.children;for(let H=0,Z=Y.length;H<Z;H++)R(Y[H],C,k,D,V)}function N(A){A.target.removeEventListener("dispose",N);for(const C in c){const k=c[C],D=A.target.uuid;D in k&&(k[D].dispose(),delete k[D])}}this.render=function(A,C,k){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||A.length===0)return;const D=r.getRenderTarget(),V=r.getActiveCubeFace(),Y=r.getActiveMipmapLevel(),H=r.state;H.setBlending(0),H.buffers.color.setClear(1,1,1,1),H.buffers.depth.setTest(!0),H.setScissorTest(!1);const Z=y!==3&&this.type===3,W=y===3&&this.type!==3;for(let Q=0,K=A.length;Q<K;Q++){const at=A[Q],lt=at.shadow;if(lt===void 0||lt.autoUpdate===!1&&lt.needsUpdate===!1)continue;n.copy(lt.mapSize);const wt=lt.getFrameExtents();if(n.multiply(wt),s.copy(lt.mapSize),(n.x>h||n.y>h)&&(n.x>h&&(s.x=Math.floor(h/wt.x),n.x=s.x*wt.x,lt.mapSize.x=s.x),n.y>h&&(s.y=Math.floor(h/wt.y),n.y=s.y*wt.y,lt.mapSize.y=s.y)),lt.map===null||Z===!0||W===!0){const tt=this.type!==3?{minFilter:ze,magFilter:ze}:{};lt.map!==null&&lt.map.dispose(),lt.map=new Ni(n.x,n.y,tt),lt.map.texture.name=at.name+".shadowMap",lt.camera.updateProjectionMatrix()}r.setRenderTarget(lt.map),r.clear();const At=lt.getViewportCount();for(let tt=0;tt<At;tt++){const nt=lt.getViewport(tt);a.set(s.x*nt.x,s.y*nt.y,s.x*nt.z,s.y*nt.w),H.viewport(a),lt.updateMatrices(at,tt),i=lt.getFrustum(),R(C,k,lt.camera,at,this.type)}lt.isPointLightShadow!==!0&&this.type===3&&w(lt,k),lt.needsUpdate=!1}y=this.type,m.needsUpdate=!1,r.setRenderTarget(D,V,Y)}}function Wd(r){const t=new function(){let S=!1;const F=new te;let z=null;const ot=new te(0,0,0,0);return{setMask:function(G){z===G||S||(r.colorMask(G,G,G,G),z=G)},setLocked:function(G){S=G},setClear:function(G,rt,mt,ct,pt){pt===!0&&(G*=ct,rt*=ct,mt*=ct),F.set(G,rt,mt,ct),ot.equals(F)===!1&&(r.clearColor(G,rt,mt,ct),ot.copy(F))},reset:function(){S=!1,z=null,ot.set(-1,0,0,0)}}},e=new function(){let S=!1,F=null,z=null,ot=null;return{setTest:function(G){G?_t(r.DEPTH_TEST):st(r.DEPTH_TEST)},setMask:function(G){F===G||S||(r.depthMask(G),F=G)},setFunc:function(G){if(z!==G){switch(G){case 0:r.depthFunc(r.NEVER);break;case 1:r.depthFunc(r.ALWAYS);break;case 2:r.depthFunc(r.LESS);break;case 3:default:r.depthFunc(r.LEQUAL);break;case 4:r.depthFunc(r.EQUAL);break;case 5:r.depthFunc(r.GEQUAL);break;case 6:r.depthFunc(r.GREATER);break;case 7:r.depthFunc(r.NOTEQUAL)}z=G}},setLocked:function(G){S=G},setClear:function(G){ot!==G&&(r.clearDepth(G),ot=G)},reset:function(){S=!1,F=null,z=null,ot=null}}},i=new function(){let S=!1,F=null,z=null,ot=null,G=null,rt=null,mt=null,ct=null,pt=null;return{setTest:function(yt){S||(yt?_t(r.STENCIL_TEST):st(r.STENCIL_TEST))},setMask:function(yt){F===yt||S||(r.stencilMask(yt),F=yt)},setFunc:function(yt,bt,Rt){z===yt&&ot===bt&&G===Rt||(r.stencilFunc(yt,bt,Rt),z=yt,ot=bt,G=Rt)},setOp:function(yt,bt,Rt){rt===yt&&mt===bt&&ct===Rt||(r.stencilOp(yt,bt,Rt),rt=yt,mt=bt,ct=Rt)},setLocked:function(yt){S=yt},setClear:function(yt){pt!==yt&&(r.clearStencil(yt),pt=yt)},reset:function(){S=!1,F=null,z=null,ot=null,G=null,rt=null,mt=null,ct=null,pt=null}}},n=new WeakMap,s=new WeakMap;let a={},o={},l=new WeakMap,c=[],h=null,d=!1,p=null,_=null,f=null,g=null,m=null,y=null,w=null,v=new kt(0,0,0),R=0,N=!1,A=null,C=null,k=null,D=null,V=null;const Y=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let H=!1,Z=0;const W=r.getParameter(r.VERSION);W.indexOf("WebGL")!==-1?(Z=parseFloat(/^WebGL (\d)/.exec(W)[1]),H=Z>=1):W.indexOf("OpenGL ES")!==-1&&(Z=parseFloat(/^OpenGL ES (\d)/.exec(W)[1]),H=Z>=2);let Q=null,K={};const at=r.getParameter(r.SCISSOR_BOX),lt=r.getParameter(r.VIEWPORT),wt=new te().fromArray(at),At=new te().fromArray(lt);function tt(S,F,z,ot){const G=new Uint8Array(4),rt=r.createTexture();r.bindTexture(S,rt),r.texParameteri(S,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(S,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let mt=0;mt<z;mt++)S===r.TEXTURE_3D||S===r.TEXTURE_2D_ARRAY?r.texImage3D(F,0,r.RGBA,1,1,ot,0,r.RGBA,r.UNSIGNED_BYTE,G):r.texImage2D(F+mt,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,G);return rt}const nt={};function _t(S){a[S]!==!0&&(r.enable(S),a[S]=!0)}function st(S){a[S]!==!1&&(r.disable(S),a[S]=!1)}nt[r.TEXTURE_2D]=tt(r.TEXTURE_2D,r.TEXTURE_2D,1),nt[r.TEXTURE_CUBE_MAP]=tt(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),nt[r.TEXTURE_2D_ARRAY]=tt(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),nt[r.TEXTURE_3D]=tt(r.TEXTURE_3D,r.TEXTURE_3D,1,1),t.setClear(0,0,0,1),e.setClear(1),i.setClear(0),_t(r.DEPTH_TEST),e.setFunc(3),J(!1),B(1),_t(r.CULL_FACE),O(0);const M={[Ui]:r.FUNC_ADD,[Sc]:r.FUNC_SUBTRACT,[Mc]:r.FUNC_REVERSE_SUBTRACT};M[103]=r.MIN,M[104]=r.MAX;const x={[Ec]:r.ZERO,[Tc]:r.ONE,[Ac]:r.SRC_COLOR,[Cc]:r.SRC_ALPHA,[Nc]:r.SRC_ALPHA_SATURATE,[Dc]:r.DST_COLOR,[Lc]:r.DST_ALPHA,[Rc]:r.ONE_MINUS_SRC_COLOR,[Pc]:r.ONE_MINUS_SRC_ALPHA,[Uc]:r.ONE_MINUS_DST_COLOR,[Ic]:r.ONE_MINUS_DST_ALPHA,[Oc]:r.CONSTANT_COLOR,[Fc]:r.ONE_MINUS_CONSTANT_COLOR,[zc]:r.CONSTANT_ALPHA,[Bc]:r.ONE_MINUS_CONSTANT_ALPHA};function O(S,F,z,ot,G,rt,mt,ct,pt,yt){if(S!==0){if(d===!1&&(_t(r.BLEND),d=!0),S===5)G=G||F,rt=rt||z,mt=mt||ot,F===_&&G===m||(r.blendEquationSeparate(M[F],M[G]),_=F,m=G),z===f&&ot===g&&rt===y&&mt===w||(r.blendFuncSeparate(x[z],x[ot],x[rt],x[mt]),f=z,g=ot,y=rt,w=mt),ct.equals(v)!==!1&&pt===R||(r.blendColor(ct.r,ct.g,ct.b,pt),v.copy(ct),R=pt),p=S,N=!1;else if(S!==p||yt!==N){if(_===Ui&&m===Ui||(r.blendEquation(r.FUNC_ADD),_=Ui,m=Ui),yt)switch(S){case 1:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case 2:r.blendFunc(r.ONE,r.ONE);break;case 3:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case 4:r.blendFuncSeparate(r.ZERO,r.SRC_COLOR,r.ZERO,r.SRC_ALPHA)}else switch(S){case 1:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case 2:r.blendFunc(r.SRC_ALPHA,r.ONE);break;case 3:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case 4:r.blendFunc(r.ZERO,r.SRC_COLOR)}f=null,g=null,y=null,w=null,v.set(0,0,0),R=0,p=S,N=yt}}else d===!0&&(st(r.BLEND),d=!1)}function J(S){A!==S&&(S?r.frontFace(r.CW):r.frontFace(r.CCW),A=S)}function B(S){S!==0?(_t(r.CULL_FACE),S!==C&&(S===1?r.cullFace(r.BACK):S===2?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):st(r.CULL_FACE),C=S}function q(S,F,z){S?(_t(r.POLYGON_OFFSET_FILL),D===F&&V===z||(r.polygonOffset(F,z),D=F,V=z)):st(r.POLYGON_OFFSET_FILL)}return{buffers:{color:t,depth:e,stencil:i},enable:_t,disable:st,bindFramebuffer:function(S,F){return o[S]!==F&&(r.bindFramebuffer(S,F),o[S]=F,S===r.DRAW_FRAMEBUFFER&&(o[r.FRAMEBUFFER]=F),S===r.FRAMEBUFFER&&(o[r.DRAW_FRAMEBUFFER]=F),!0)},drawBuffers:function(S,F){let z=c,ot=!1;if(S){z=l.get(F),z===void 0&&(z=[],l.set(F,z));const G=S.textures;if(z.length!==G.length||z[0]!==r.COLOR_ATTACHMENT0){for(let rt=0,mt=G.length;rt<mt;rt++)z[rt]=r.COLOR_ATTACHMENT0+rt;z.length=G.length,ot=!0}}else z[0]!==r.BACK&&(z[0]=r.BACK,ot=!0);ot&&r.drawBuffers(z)},useProgram:function(S){return h!==S&&(r.useProgram(S),h=S,!0)},setBlending:O,setMaterial:function(S,F){S.side===2?st(r.CULL_FACE):_t(r.CULL_FACE);let z=S.side===1;F&&(z=!z),J(z),S.blending===1&&S.transparent===!1?O(0):O(S.blending,S.blendEquation,S.blendSrc,S.blendDst,S.blendEquationAlpha,S.blendSrcAlpha,S.blendDstAlpha,S.blendColor,S.blendAlpha,S.premultipliedAlpha),e.setFunc(S.depthFunc),e.setTest(S.depthTest),e.setMask(S.depthWrite),t.setMask(S.colorWrite);const ot=S.stencilWrite;i.setTest(ot),ot&&(i.setMask(S.stencilWriteMask),i.setFunc(S.stencilFunc,S.stencilRef,S.stencilFuncMask),i.setOp(S.stencilFail,S.stencilZFail,S.stencilZPass)),q(S.polygonOffset,S.polygonOffsetFactor,S.polygonOffsetUnits),S.alphaToCoverage===!0?_t(r.SAMPLE_ALPHA_TO_COVERAGE):st(r.SAMPLE_ALPHA_TO_COVERAGE)},setFlipSided:J,setCullFace:B,setLineWidth:function(S){S!==k&&(H&&r.lineWidth(S),k=S)},setPolygonOffset:q,setScissorTest:function(S){S?_t(r.SCISSOR_TEST):st(r.SCISSOR_TEST)},activeTexture:function(S){S===void 0&&(S=r.TEXTURE0+Y-1),Q!==S&&(r.activeTexture(S),Q=S)},bindTexture:function(S,F,z){z===void 0&&(z=Q===null?r.TEXTURE0+Y-1:Q);let ot=K[z];ot===void 0&&(ot={type:void 0,texture:void 0},K[z]=ot),ot.type===S&&ot.texture===F||(Q!==z&&(r.activeTexture(z),Q=z),r.bindTexture(S,F||nt[S]),ot.type=S,ot.texture=F)},unbindTexture:function(){const S=K[Q];S!==void 0&&S.type!==void 0&&(r.bindTexture(S.type,null),S.type=void 0,S.texture=void 0)},compressedTexImage2D:function(){try{r.compressedTexImage2D.apply(r,arguments)}catch{}},compressedTexImage3D:function(){try{r.compressedTexImage3D.apply(r,arguments)}catch{}},texImage2D:function(){try{r.texImage2D.apply(r,arguments)}catch{}},texImage3D:function(){try{r.texImage3D.apply(r,arguments)}catch{}},updateUBOMapping:function(S,F){let z=s.get(F);z===void 0&&(z=new WeakMap,s.set(F,z));let ot=z.get(S);ot===void 0&&(ot=r.getUniformBlockIndex(F,S.name),z.set(S,ot))},uniformBlockBinding:function(S,F){const z=s.get(F).get(S);n.get(F)!==z&&(r.uniformBlockBinding(F,z,S.__bindingPointIndex),n.set(F,z))},texStorage2D:function(){try{r.texStorage2D.apply(r,arguments)}catch{}},texStorage3D:function(){try{r.texStorage3D.apply(r,arguments)}catch{}},texSubImage2D:function(){try{r.texSubImage2D.apply(r,arguments)}catch{}},texSubImage3D:function(){try{r.texSubImage3D.apply(r,arguments)}catch{}},compressedTexSubImage2D:function(){try{r.compressedTexSubImage2D.apply(r,arguments)}catch{}},compressedTexSubImage3D:function(){try{r.compressedTexSubImage3D.apply(r,arguments)}catch{}},scissor:function(S){wt.equals(S)===!1&&(r.scissor(S.x,S.y,S.z,S.w),wt.copy(S))},viewport:function(S){At.equals(S)===!1&&(r.viewport(S.x,S.y,S.z,S.w),At.copy(S))},reset:function(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),a={},Q=null,K={},o={},l=new WeakMap,c=[],h=null,d=!1,p=null,_=null,f=null,g=null,m=null,y=null,w=null,v=new kt(0,0,0),R=0,N=!1,A=null,C=null,k=null,D=null,V=null,wt.set(0,0,r.canvas.width,r.canvas.height),At.set(0,0,r.canvas.width,r.canvas.height),t.reset(),e.reset(),i.reset()}}}function jd(r,t,e,i,n,s,a){const o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator<"u"&&/OculusBrowser/g.test(navigator.userAgent),c=new ut,h=new WeakMap;let d;const p=new WeakMap;let _=!1;try{_=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function f(M,x){return _?new OffscreenCanvas(M,x):fr("canvas")}function g(M,x,O){let J=1;const B=st(M);if((B.width>O||B.height>O)&&(J=O/Math.max(B.width,B.height)),J<1){if(typeof HTMLImageElement<"u"&&M instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&M instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&M instanceof ImageBitmap||typeof VideoFrame<"u"&&M instanceof VideoFrame){const q=Math.floor(J*B.width),S=Math.floor(J*B.height);d===void 0&&(d=f(q,S));const F=x?f(q,S):d;return F.width=q,F.height=S,F.getContext("2d").drawImage(M,0,0,q,S),F}return M}return M}function m(M){return M.generateMipmaps&&M.minFilter!==ze&&M.minFilter!==Ke}function y(M){r.generateMipmap(M)}function w(M,x,O,J,B=!1){if(M!==null&&r[M]!==void 0)return r[M];let q=x;if(x===r.RED&&(O===r.FLOAT&&(q=r.R32F),O===r.HALF_FLOAT&&(q=r.R16F),O===r.UNSIGNED_BYTE&&(q=r.R8)),x===r.RED_INTEGER&&(O===r.UNSIGNED_BYTE&&(q=r.R8UI),O===r.UNSIGNED_SHORT&&(q=r.R16UI),O===r.UNSIGNED_INT&&(q=r.R32UI),O===r.BYTE&&(q=r.R8I),O===r.SHORT&&(q=r.R16I),O===r.INT&&(q=r.R32I)),x===r.RG&&(O===r.FLOAT&&(q=r.RG32F),O===r.HALF_FLOAT&&(q=r.RG16F),O===r.UNSIGNED_BYTE&&(q=r.RG8)),x===r.RG_INTEGER&&(O===r.UNSIGNED_BYTE&&(q=r.RG8UI),O===r.UNSIGNED_SHORT&&(q=r.RG16UI),O===r.UNSIGNED_INT&&(q=r.RG32UI),O===r.BYTE&&(q=r.RG8I),O===r.SHORT&&(q=r.RG16I),O===r.INT&&(q=r.RG32I)),x===r.RGB&&O===r.UNSIGNED_INT_5_9_9_9_REV&&(q=r.RGB9_E5),x===r.RGBA){const S=B?ur:Xt.getTransfer(J);O===r.FLOAT&&(q=r.RGBA32F),O===r.HALF_FLOAT&&(q=r.RGBA16F),O===r.UNSIGNED_BYTE&&(q=S===$t?r.SRGB8_ALPHA8:r.RGBA8),O===r.UNSIGNED_SHORT_4_4_4_4&&(q=r.RGBA4),O===r.UNSIGNED_SHORT_5_5_5_1&&(q=r.RGB5_A1)}return q!==r.R16F&&q!==r.R32F&&q!==r.RG16F&&q!==r.RG32F&&q!==r.RGBA16F&&q!==r.RGBA32F||t.get("EXT_color_buffer_float"),q}function v(M,x){let O;return M?x===null||x===$i||x===Qi?O=r.DEPTH24_STENCIL8:x===wi?O=r.DEPTH32F_STENCIL8:x===cr&&(O=r.DEPTH24_STENCIL8):x===null||x===$i||x===Qi?O=r.DEPTH_COMPONENT24:x===wi?O=r.DEPTH_COMPONENT32F:x===cr&&(O=r.DEPTH_COMPONENT16),O}function R(M,x){return m(M)===!0||M.isFramebufferTexture&&M.minFilter!==ze&&M.minFilter!==Ke?Math.log2(Math.max(x.width,x.height))+1:M.mipmaps!==void 0&&M.mipmaps.length>0?M.mipmaps.length:M.isCompressedTexture&&Array.isArray(M.image)?x.mipmaps.length:1}function N(M){const x=M.target;x.removeEventListener("dispose",N),function(O){const J=i.get(O);if(J.__webglInit===void 0)return;const B=O.source,q=p.get(B);if(q){const S=q[J.__cacheKey];S.usedTimes--,S.usedTimes===0&&C(O),Object.keys(q).length===0&&p.delete(B)}i.remove(O)}(x),x.isVideoTexture&&h.delete(x)}function A(M){const x=M.target;x.removeEventListener("dispose",A),function(O){const J=i.get(O);if(O.depthTexture&&O.depthTexture.dispose(),O.isWebGLCubeRenderTarget)for(let q=0;q<6;q++){if(Array.isArray(J.__webglFramebuffer[q]))for(let S=0;S<J.__webglFramebuffer[q].length;S++)r.deleteFramebuffer(J.__webglFramebuffer[q][S]);else r.deleteFramebuffer(J.__webglFramebuffer[q]);J.__webglDepthbuffer&&r.deleteRenderbuffer(J.__webglDepthbuffer[q])}else{if(Array.isArray(J.__webglFramebuffer))for(let q=0;q<J.__webglFramebuffer.length;q++)r.deleteFramebuffer(J.__webglFramebuffer[q]);else r.deleteFramebuffer(J.__webglFramebuffer);if(J.__webglDepthbuffer&&r.deleteRenderbuffer(J.__webglDepthbuffer),J.__webglMultisampledFramebuffer&&r.deleteFramebuffer(J.__webglMultisampledFramebuffer),J.__webglColorRenderbuffer)for(let q=0;q<J.__webglColorRenderbuffer.length;q++)J.__webglColorRenderbuffer[q]&&r.deleteRenderbuffer(J.__webglColorRenderbuffer[q]);J.__webglDepthRenderbuffer&&r.deleteRenderbuffer(J.__webglDepthRenderbuffer)}const B=O.textures;for(let q=0,S=B.length;q<S;q++){const F=i.get(B[q]);F.__webglTexture&&(r.deleteTexture(F.__webglTexture),a.memory.textures--),i.remove(B[q])}i.remove(O)}(x)}function C(M){const x=i.get(M);r.deleteTexture(x.__webglTexture);const O=M.source;delete p.get(O)[x.__cacheKey],a.memory.textures--}let k=0;function D(M,x){const O=i.get(M);if(M.isVideoTexture&&function(J){const B=a.render.frame;h.get(J)!==B&&(h.set(J,B),J.update())}(M),M.isRenderTargetTexture===!1&&M.version>0&&O.__version!==M.version){const J=M.image;if(J!==null){if(J.complete!==!1)return void Q(O,M,x)}}e.bindTexture(r.TEXTURE_2D,O.__webglTexture,r.TEXTURE0+x)}const V={[Es]:r.REPEAT,[Un]:r.CLAMP_TO_EDGE,[Ts]:r.MIRRORED_REPEAT},Y={[ze]:r.NEAREST,[kc]:r.NEAREST_MIPMAP_NEAREST,[lr]:r.NEAREST_MIPMAP_LINEAR,[Ke]:r.LINEAR,[As]:r.LINEAR_MIPMAP_NEAREST,[Nn]:r.LINEAR_MIPMAP_LINEAR},H={[Hc]:r.NEVER,[Yc]:r.ALWAYS,[Gc]:r.LESS,[Wc]:r.LEQUAL,[Vc]:r.EQUAL,[qc]:r.GEQUAL,[jc]:r.GREATER,[Xc]:r.NOTEQUAL};function Z(M,x){if(x.type===wi&&t.has("OES_texture_float_linear")===!1&&(x.magFilter===Ke||x.magFilter===As||x.magFilter===lr||x.magFilter===Nn||x.minFilter===Ke||x.minFilter===As||x.minFilter===lr||x.minFilter),r.texParameteri(M,r.TEXTURE_WRAP_S,V[x.wrapS]),r.texParameteri(M,r.TEXTURE_WRAP_T,V[x.wrapT]),M!==r.TEXTURE_3D&&M!==r.TEXTURE_2D_ARRAY||r.texParameteri(M,r.TEXTURE_WRAP_R,V[x.wrapR]),r.texParameteri(M,r.TEXTURE_MAG_FILTER,Y[x.magFilter]),r.texParameteri(M,r.TEXTURE_MIN_FILTER,Y[x.minFilter]),x.compareFunction&&(r.texParameteri(M,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(M,r.TEXTURE_COMPARE_FUNC,H[x.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(x.magFilter===ze||x.minFilter!==lr&&x.minFilter!==Nn||x.type===wi&&t.has("OES_texture_float_linear")===!1)return;if(x.anisotropy>1||i.get(x).__currentAnisotropy){const O=t.get("EXT_texture_filter_anisotropic");r.texParameterf(M,O.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,n.getMaxAnisotropy())),i.get(x).__currentAnisotropy=x.anisotropy}}}function W(M,x){let O=!1;M.__webglInit===void 0&&(M.__webglInit=!0,x.addEventListener("dispose",N));const J=x.source;let B=p.get(J);B===void 0&&(B={},p.set(J,B));const q=function(S){const F=[];return F.push(S.wrapS),F.push(S.wrapT),F.push(S.wrapR||0),F.push(S.magFilter),F.push(S.minFilter),F.push(S.anisotropy),F.push(S.internalFormat),F.push(S.format),F.push(S.type),F.push(S.generateMipmaps),F.push(S.premultiplyAlpha),F.push(S.flipY),F.push(S.unpackAlignment),F.push(S.colorSpace),F.join()}(x);if(q!==M.__cacheKey){B[q]===void 0&&(B[q]={texture:r.createTexture(),usedTimes:0},a.memory.textures++,O=!0),B[q].usedTimes++;const S=B[M.__cacheKey];S!==void 0&&(B[M.__cacheKey].usedTimes--,S.usedTimes===0&&C(x)),M.__cacheKey=q,M.__webglTexture=B[q].texture}return O}function Q(M,x,O){let J=r.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(J=r.TEXTURE_2D_ARRAY),x.isData3DTexture&&(J=r.TEXTURE_3D);const B=W(M,x),q=x.source;e.bindTexture(J,M.__webglTexture,r.TEXTURE0+O);const S=i.get(q);if(q.version!==S.__version||B===!0){e.activeTexture(r.TEXTURE0+O);const F=Xt.getPrimaries(Xt.workingColorSpace),z=x.colorSpace===en?null:Xt.getPrimaries(x.colorSpace),ot=x.colorSpace===en||F===z?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,x.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,x.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,ot);let G=g(x.image,!1,n.maxTextureSize);G=_t(x,G);const rt=s.convert(x.format,x.colorSpace),mt=s.convert(x.type);let ct,pt=w(x.internalFormat,rt,mt,x.colorSpace,x.isVideoTexture);Z(J,x);const yt=x.mipmaps,bt=x.isVideoTexture!==!0,Rt=S.__version===void 0||B===!0,qt=q.dataReady,jt=R(x,G);if(x.isDepthTexture)pt=v(x.format===tn,x.type),Rt&&(bt?e.texStorage2D(r.TEXTURE_2D,1,pt,G.width,G.height):e.texImage2D(r.TEXTURE_2D,0,pt,G.width,G.height,0,rt,mt,null));else if(x.isDataTexture)if(yt.length>0){bt&&Rt&&e.texStorage2D(r.TEXTURE_2D,jt,pt,yt[0].width,yt[0].height);for(let vt=0,Ft=yt.length;vt<Ft;vt++)ct=yt[vt],bt?qt&&e.texSubImage2D(r.TEXTURE_2D,vt,0,0,ct.width,ct.height,rt,mt,ct.data):e.texImage2D(r.TEXTURE_2D,vt,pt,ct.width,ct.height,0,rt,mt,ct.data);x.generateMipmaps=!1}else bt?(Rt&&e.texStorage2D(r.TEXTURE_2D,jt,pt,G.width,G.height),qt&&e.texSubImage2D(r.TEXTURE_2D,0,0,0,G.width,G.height,rt,mt,G.data)):e.texImage2D(r.TEXTURE_2D,0,pt,G.width,G.height,0,rt,mt,G.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){bt&&Rt&&e.texStorage3D(r.TEXTURE_2D_ARRAY,jt,pt,yt[0].width,yt[0].height,G.depth);for(let vt=0,Ft=yt.length;vt<Ft;vt++)if(ct=yt[vt],x.format!==vi){if(rt!==null)if(bt){if(qt)if(x.layerUpdates.size>0){for(const zt of x.layerUpdates){const ne=ct.width*ct.height;e.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,vt,0,0,zt,ct.width,ct.height,1,rt,ct.data.slice(ne*zt,ne*(zt+1)),0,0)}x.clearLayerUpdates()}else e.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,vt,0,0,0,ct.width,ct.height,G.depth,rt,ct.data,0,0)}else e.compressedTexImage3D(r.TEXTURE_2D_ARRAY,vt,pt,ct.width,ct.height,G.depth,0,ct.data,0,0)}else bt?qt&&e.texSubImage3D(r.TEXTURE_2D_ARRAY,vt,0,0,0,ct.width,ct.height,G.depth,rt,mt,ct.data):e.texImage3D(r.TEXTURE_2D_ARRAY,vt,pt,ct.width,ct.height,G.depth,0,rt,mt,ct.data)}else{bt&&Rt&&e.texStorage2D(r.TEXTURE_2D,jt,pt,yt[0].width,yt[0].height);for(let vt=0,Ft=yt.length;vt<Ft;vt++)ct=yt[vt],x.format!==vi?rt!==null&&(bt?qt&&e.compressedTexSubImage2D(r.TEXTURE_2D,vt,0,0,ct.width,ct.height,rt,ct.data):e.compressedTexImage2D(r.TEXTURE_2D,vt,pt,ct.width,ct.height,0,ct.data)):bt?qt&&e.texSubImage2D(r.TEXTURE_2D,vt,0,0,ct.width,ct.height,rt,mt,ct.data):e.texImage2D(r.TEXTURE_2D,vt,pt,ct.width,ct.height,0,rt,mt,ct.data)}else if(x.isDataArrayTexture)if(bt){if(Rt&&e.texStorage3D(r.TEXTURE_2D_ARRAY,jt,pt,G.width,G.height,G.depth),qt)if(x.layerUpdates.size>0){let vt;switch(mt){case r.UNSIGNED_BYTE:switch(rt){case r.ALPHA:case r.LUMINANCE:vt=1;break;case r.LUMINANCE_ALPHA:vt=2;break;case r.RGB:vt=3;break;case r.RGBA:vt=4;break;default:throw new Error(`Unknown texel size for format ${rt}.`)}break;case r.UNSIGNED_SHORT_4_4_4_4:case r.UNSIGNED_SHORT_5_5_5_1:case r.UNSIGNED_SHORT_5_6_5:vt=1;break;default:throw new Error(`Unknown texel size for type ${mt}.`)}const Ft=G.width*G.height*vt;for(const zt of x.layerUpdates)e.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,zt,G.width,G.height,1,rt,mt,G.data.slice(Ft*zt,Ft*(zt+1)));x.clearLayerUpdates()}else e.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,G.width,G.height,G.depth,rt,mt,G.data)}else e.texImage3D(r.TEXTURE_2D_ARRAY,0,pt,G.width,G.height,G.depth,0,rt,mt,G.data);else if(x.isData3DTexture)bt?(Rt&&e.texStorage3D(r.TEXTURE_3D,jt,pt,G.width,G.height,G.depth),qt&&e.texSubImage3D(r.TEXTURE_3D,0,0,0,0,G.width,G.height,G.depth,rt,mt,G.data)):e.texImage3D(r.TEXTURE_3D,0,pt,G.width,G.height,G.depth,0,rt,mt,G.data);else if(x.isFramebufferTexture){if(Rt)if(bt)e.texStorage2D(r.TEXTURE_2D,jt,pt,G.width,G.height);else{let vt=G.width,Ft=G.height;for(let zt=0;zt<jt;zt++)e.texImage2D(r.TEXTURE_2D,zt,pt,vt,Ft,0,rt,mt,null),vt>>=1,Ft>>=1}}else if(yt.length>0){if(bt&&Rt){const vt=st(yt[0]);e.texStorage2D(r.TEXTURE_2D,jt,pt,vt.width,vt.height)}for(let vt=0,Ft=yt.length;vt<Ft;vt++)ct=yt[vt],bt?qt&&e.texSubImage2D(r.TEXTURE_2D,vt,0,0,rt,mt,ct):e.texImage2D(r.TEXTURE_2D,vt,pt,rt,mt,ct);x.generateMipmaps=!1}else if(bt){if(Rt){const vt=st(G);e.texStorage2D(r.TEXTURE_2D,jt,pt,vt.width,vt.height)}qt&&e.texSubImage2D(r.TEXTURE_2D,0,0,0,rt,mt,G)}else e.texImage2D(r.TEXTURE_2D,0,pt,rt,mt,G);m(x)&&y(J),S.__version=q.version,x.onUpdate&&x.onUpdate(x)}M.__version=x.version}function K(M,x,O,J,B,q){const S=s.convert(O.format,O.colorSpace),F=s.convert(O.type),z=w(O.internalFormat,S,F,O.colorSpace);if(!i.get(x).__hasExternalTextures){const ot=Math.max(1,x.width>>q),G=Math.max(1,x.height>>q);B===r.TEXTURE_3D||B===r.TEXTURE_2D_ARRAY?e.texImage3D(B,q,z,ot,G,x.depth,0,S,F,null):e.texImage2D(B,q,z,ot,G,0,S,F,null)}e.bindFramebuffer(r.FRAMEBUFFER,M),nt(x)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,J,B,i.get(O).__webglTexture,0,tt(x)):(B===r.TEXTURE_2D||B>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&B<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,J,B,i.get(O).__webglTexture,q),e.bindFramebuffer(r.FRAMEBUFFER,null)}function at(M,x,O){if(r.bindRenderbuffer(r.RENDERBUFFER,M),x.depthBuffer){const J=x.depthTexture,B=J&&J.isDepthTexture?J.type:null,q=v(x.stencilBuffer,B),S=x.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,F=tt(x);nt(x)?o.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,F,q,x.width,x.height):O?r.renderbufferStorageMultisample(r.RENDERBUFFER,F,q,x.width,x.height):r.renderbufferStorage(r.RENDERBUFFER,q,x.width,x.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,S,r.RENDERBUFFER,M)}else{const J=x.textures;for(let B=0;B<J.length;B++){const q=J[B],S=s.convert(q.format,q.colorSpace),F=s.convert(q.type),z=w(q.internalFormat,S,F,q.colorSpace),ot=tt(x);O&&nt(x)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,ot,z,x.width,x.height):nt(x)?o.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,ot,z,x.width,x.height):r.renderbufferStorage(r.RENDERBUFFER,z,x.width,x.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function lt(M){const x=i.get(M),O=M.isWebGLCubeRenderTarget===!0;if(M.depthTexture&&!x.__autoAllocateDepthBuffer){if(O)throw new Error("target.depthTexture not supported in Cube render targets");(function(J,B){if(B&&B.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(r.FRAMEBUFFER,J),!B.depthTexture||!B.depthTexture.isDepthTexture)throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");i.get(B.depthTexture).__webglTexture&&B.depthTexture.image.width===B.width&&B.depthTexture.image.height===B.height||(B.depthTexture.image.width=B.width,B.depthTexture.image.height=B.height,B.depthTexture.needsUpdate=!0),D(B.depthTexture,0);const q=i.get(B.depthTexture).__webglTexture,S=tt(B);if(B.depthTexture.format===On)nt(B)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,q,0,S):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,q,0);else{if(B.depthTexture.format!==tn)throw new Error("Unknown depthTexture format");nt(B)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,q,0,S):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,q,0)}})(x.__webglFramebuffer,M)}else if(O){x.__webglDepthbuffer=[];for(let J=0;J<6;J++)e.bindFramebuffer(r.FRAMEBUFFER,x.__webglFramebuffer[J]),x.__webglDepthbuffer[J]=r.createRenderbuffer(),at(x.__webglDepthbuffer[J],M,!1)}else e.bindFramebuffer(r.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer=r.createRenderbuffer(),at(x.__webglDepthbuffer,M,!1);e.bindFramebuffer(r.FRAMEBUFFER,null)}const wt=[],At=[];function tt(M){return Math.min(n.maxSamples,M.samples)}function nt(M){const x=i.get(M);return M.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function _t(M,x){const O=M.colorSpace;return M.format,M.type,M.isCompressedTexture===!0||M.isVideoTexture===!0||O!==yi&&O!==en&&Xt.getTransfer(O),x}function st(M){return typeof HTMLImageElement<"u"&&M instanceof HTMLImageElement?(c.width=M.naturalWidth||M.width,c.height=M.naturalHeight||M.height):typeof VideoFrame<"u"&&M instanceof VideoFrame?(c.width=M.displayWidth,c.height=M.displayHeight):(c.width=M.width,c.height=M.height),c}this.allocateTextureUnit=function(){const M=k;return n.maxTextures,k+=1,M},this.resetTextureUnits=function(){k=0},this.setTexture2D=D,this.setTexture2DArray=function(M,x){const O=i.get(M);M.version>0&&O.__version!==M.version?Q(O,M,x):e.bindTexture(r.TEXTURE_2D_ARRAY,O.__webglTexture,r.TEXTURE0+x)},this.setTexture3D=function(M,x){const O=i.get(M);M.version>0&&O.__version!==M.version?Q(O,M,x):e.bindTexture(r.TEXTURE_3D,O.__webglTexture,r.TEXTURE0+x)},this.setTextureCube=function(M,x){const O=i.get(M);M.version>0&&O.__version!==M.version?function(J,B,q){if(B.image.length!==6)return;const S=W(J,B),F=B.source;e.bindTexture(r.TEXTURE_CUBE_MAP,J.__webglTexture,r.TEXTURE0+q);const z=i.get(F);if(F.version!==z.__version||S===!0){e.activeTexture(r.TEXTURE0+q);const ot=Xt.getPrimaries(Xt.workingColorSpace),G=B.colorSpace===en?null:Xt.getPrimaries(B.colorSpace),rt=B.colorSpace===en||ot===G?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,B.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,B.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,B.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,rt);const mt=B.isCompressedTexture||B.image[0].isCompressedTexture,ct=B.image[0]&&B.image[0].isDataTexture,pt=[];for(let Mt=0;Mt<6;Mt++)pt[Mt]=mt||ct?ct?B.image[Mt].image:B.image[Mt]:g(B.image[Mt],!0,n.maxCubemapSize),pt[Mt]=_t(B,pt[Mt]);const yt=pt[0],bt=s.convert(B.format,B.colorSpace),Rt=s.convert(B.type),qt=w(B.internalFormat,bt,Rt,B.colorSpace),jt=B.isVideoTexture!==!0,vt=z.__version===void 0||S===!0,Ft=F.dataReady;let zt,ne=R(B,yt);if(Z(r.TEXTURE_CUBE_MAP,B),mt){jt&&vt&&e.texStorage2D(r.TEXTURE_CUBE_MAP,ne,qt,yt.width,yt.height);for(let Mt=0;Mt<6;Mt++){zt=pt[Mt].mipmaps;for(let Kt=0;Kt<zt.length;Kt++){const Yt=zt[Kt];B.format!==vi?bt!==null&&(jt?Ft&&e.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Mt,Kt,0,0,Yt.width,Yt.height,bt,Yt.data):e.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Mt,Kt,qt,Yt.width,Yt.height,0,Yt.data)):jt?Ft&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Mt,Kt,0,0,Yt.width,Yt.height,bt,Rt,Yt.data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Mt,Kt,qt,Yt.width,Yt.height,0,bt,Rt,Yt.data)}}}else{if(zt=B.mipmaps,jt&&vt){zt.length>0&&ne++;const Mt=st(pt[0]);e.texStorage2D(r.TEXTURE_CUBE_MAP,ne,qt,Mt.width,Mt.height)}for(let Mt=0;Mt<6;Mt++)if(ct){jt?Ft&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Mt,0,0,0,pt[Mt].width,pt[Mt].height,bt,Rt,pt[Mt].data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Mt,0,qt,pt[Mt].width,pt[Mt].height,0,bt,Rt,pt[Mt].data);for(let Kt=0;Kt<zt.length;Kt++){const Yt=zt[Kt].image[Mt].image;jt?Ft&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Mt,Kt+1,0,0,Yt.width,Yt.height,bt,Rt,Yt.data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Mt,Kt+1,qt,Yt.width,Yt.height,0,bt,Rt,Yt.data)}}else{jt?Ft&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Mt,0,0,0,bt,Rt,pt[Mt]):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Mt,0,qt,bt,Rt,pt[Mt]);for(let Kt=0;Kt<zt.length;Kt++){const Yt=zt[Kt];jt?Ft&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Mt,Kt+1,0,0,bt,Rt,Yt.image[Mt]):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Mt,Kt+1,qt,bt,Rt,Yt.image[Mt])}}}m(B)&&y(r.TEXTURE_CUBE_MAP),z.__version=F.version,B.onUpdate&&B.onUpdate(B)}J.__version=B.version}(O,M,x):e.bindTexture(r.TEXTURE_CUBE_MAP,O.__webglTexture,r.TEXTURE0+x)},this.rebindTextures=function(M,x,O){const J=i.get(M);x!==void 0&&K(J.__webglFramebuffer,M,M.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),O!==void 0&&lt(M)},this.setupRenderTarget=function(M){const x=M.texture,O=i.get(M),J=i.get(x);M.addEventListener("dispose",A);const B=M.textures,q=M.isWebGLCubeRenderTarget===!0,S=B.length>1;if(S||(J.__webglTexture===void 0&&(J.__webglTexture=r.createTexture()),J.__version=x.version,a.memory.textures++),q){O.__webglFramebuffer=[];for(let F=0;F<6;F++)if(x.mipmaps&&x.mipmaps.length>0){O.__webglFramebuffer[F]=[];for(let z=0;z<x.mipmaps.length;z++)O.__webglFramebuffer[F][z]=r.createFramebuffer()}else O.__webglFramebuffer[F]=r.createFramebuffer()}else{if(x.mipmaps&&x.mipmaps.length>0){O.__webglFramebuffer=[];for(let F=0;F<x.mipmaps.length;F++)O.__webglFramebuffer[F]=r.createFramebuffer()}else O.__webglFramebuffer=r.createFramebuffer();if(S)for(let F=0,z=B.length;F<z;F++){const ot=i.get(B[F]);ot.__webglTexture===void 0&&(ot.__webglTexture=r.createTexture(),a.memory.textures++)}if(M.samples>0&&nt(M)===!1){O.__webglMultisampledFramebuffer=r.createFramebuffer(),O.__webglColorRenderbuffer=[],e.bindFramebuffer(r.FRAMEBUFFER,O.__webglMultisampledFramebuffer);for(let F=0;F<B.length;F++){const z=B[F];O.__webglColorRenderbuffer[F]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,O.__webglColorRenderbuffer[F]);const ot=s.convert(z.format,z.colorSpace),G=s.convert(z.type),rt=w(z.internalFormat,ot,G,z.colorSpace,M.isXRRenderTarget===!0),mt=tt(M);r.renderbufferStorageMultisample(r.RENDERBUFFER,mt,rt,M.width,M.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+F,r.RENDERBUFFER,O.__webglColorRenderbuffer[F])}r.bindRenderbuffer(r.RENDERBUFFER,null),M.depthBuffer&&(O.__webglDepthRenderbuffer=r.createRenderbuffer(),at(O.__webglDepthRenderbuffer,M,!0)),e.bindFramebuffer(r.FRAMEBUFFER,null)}}if(q){e.bindTexture(r.TEXTURE_CUBE_MAP,J.__webglTexture),Z(r.TEXTURE_CUBE_MAP,x);for(let F=0;F<6;F++)if(x.mipmaps&&x.mipmaps.length>0)for(let z=0;z<x.mipmaps.length;z++)K(O.__webglFramebuffer[F][z],M,x,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+F,z);else K(O.__webglFramebuffer[F],M,x,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+F,0);m(x)&&y(r.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(S){for(let F=0,z=B.length;F<z;F++){const ot=B[F],G=i.get(ot);e.bindTexture(r.TEXTURE_2D,G.__webglTexture),Z(r.TEXTURE_2D,ot),K(O.__webglFramebuffer,M,ot,r.COLOR_ATTACHMENT0+F,r.TEXTURE_2D,0),m(ot)&&y(r.TEXTURE_2D)}e.unbindTexture()}else{let F=r.TEXTURE_2D;if((M.isWebGL3DRenderTarget||M.isWebGLArrayRenderTarget)&&(F=M.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),e.bindTexture(F,J.__webglTexture),Z(F,x),x.mipmaps&&x.mipmaps.length>0)for(let z=0;z<x.mipmaps.length;z++)K(O.__webglFramebuffer[z],M,x,r.COLOR_ATTACHMENT0,F,z);else K(O.__webglFramebuffer,M,x,r.COLOR_ATTACHMENT0,F,0);m(x)&&y(F),e.unbindTexture()}M.depthBuffer&&lt(M)},this.updateRenderTargetMipmap=function(M){const x=M.textures;for(let O=0,J=x.length;O<J;O++){const B=x[O];if(m(B)){const q=M.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:r.TEXTURE_2D,S=i.get(B).__webglTexture;e.bindTexture(q,S),y(q),e.unbindTexture()}}},this.updateMultisampleRenderTarget=function(M){if(M.samples>0){if(nt(M)===!1){const x=M.textures,O=M.width,J=M.height;let B=r.COLOR_BUFFER_BIT;const q=M.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,S=i.get(M),F=x.length>1;if(F)for(let z=0;z<x.length;z++)e.bindFramebuffer(r.FRAMEBUFFER,S.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+z,r.RENDERBUFFER,null),e.bindFramebuffer(r.FRAMEBUFFER,S.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+z,r.TEXTURE_2D,null,0);e.bindFramebuffer(r.READ_FRAMEBUFFER,S.__webglMultisampledFramebuffer),e.bindFramebuffer(r.DRAW_FRAMEBUFFER,S.__webglFramebuffer);for(let z=0;z<x.length;z++){if(M.resolveDepthBuffer&&(M.depthBuffer&&(B|=r.DEPTH_BUFFER_BIT),M.stencilBuffer&&M.resolveStencilBuffer&&(B|=r.STENCIL_BUFFER_BIT)),F){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,S.__webglColorRenderbuffer[z]);const ot=i.get(x[z]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,ot,0)}r.blitFramebuffer(0,0,O,J,0,0,O,J,B,r.NEAREST),l===!0&&(wt.length=0,At.length=0,wt.push(r.COLOR_ATTACHMENT0+z),M.depthBuffer&&M.resolveDepthBuffer===!1&&(wt.push(q),At.push(q),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,At)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,wt))}if(e.bindFramebuffer(r.READ_FRAMEBUFFER,null),e.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),F)for(let z=0;z<x.length;z++){e.bindFramebuffer(r.FRAMEBUFFER,S.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+z,r.RENDERBUFFER,S.__webglColorRenderbuffer[z]);const ot=i.get(x[z]).__webglTexture;e.bindFramebuffer(r.FRAMEBUFFER,S.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+z,r.TEXTURE_2D,ot,0)}e.bindFramebuffer(r.DRAW_FRAMEBUFFER,S.__webglMultisampledFramebuffer)}else if(M.depthBuffer&&M.resolveDepthBuffer===!1&&l){const x=M.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[x])}}},this.setupDepthRenderbuffer=lt,this.setupFrameBufferTexture=K,this.useMultisampledRTT=nt}function Xd(r,t){return{convert:function(e,i=""){let n;const s=Xt.getTransfer(i);if(e===Zi)return r.UNSIGNED_BYTE;if(e===1017)return r.UNSIGNED_SHORT_4_4_4_4;if(e===1018)return r.UNSIGNED_SHORT_5_5_5_1;if(e===35902)return r.UNSIGNED_INT_5_9_9_9_REV;if(e===1010)return r.BYTE;if(e===1011)return r.SHORT;if(e===cr)return r.UNSIGNED_SHORT;if(e===$a)return r.INT;if(e===$i)return r.UNSIGNED_INT;if(e===wi)return r.FLOAT;if(e===hr)return r.HALF_FLOAT;if(e===1021)return r.ALPHA;if(e===1022)return r.RGB;if(e===vi)return r.RGBA;if(e===1024)return r.LUMINANCE;if(e===1025)return r.LUMINANCE_ALPHA;if(e===On)return r.DEPTH_COMPONENT;if(e===tn)return r.DEPTH_STENCIL;if(e===1028)return r.RED;if(e===1029)return r.RED_INTEGER;if(e===1030)return r.RG;if(e===1031)return r.RG_INTEGER;if(e===1033)return r.RGBA_INTEGER;if(e===Rs||e===Cs||e===Ps||e===Ls)if(s===$t){if(n=t.get("WEBGL_compressed_texture_s3tc_srgb"),n===null)return null;if(e===Rs)return n.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(e===Cs)return n.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(e===Ps)return n.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(e===Ls)return n.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else{if(n=t.get("WEBGL_compressed_texture_s3tc"),n===null)return null;if(e===Rs)return n.COMPRESSED_RGB_S3TC_DXT1_EXT;if(e===Cs)return n.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(e===Ps)return n.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(e===Ls)return n.COMPRESSED_RGBA_S3TC_DXT5_EXT}if(e===35840||e===35841||e===35842||e===35843){if(n=t.get("WEBGL_compressed_texture_pvrtc"),n===null)return null;if(e===35840)return n.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(e===35841)return n.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(e===35842)return n.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(e===35843)return n.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}if(e===36196||e===37492||e===37496){if(n=t.get("WEBGL_compressed_texture_etc"),n===null)return null;if(e===36196||e===37492)return s===$t?n.COMPRESSED_SRGB8_ETC2:n.COMPRESSED_RGB8_ETC2;if(e===37496)return s===$t?n.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:n.COMPRESSED_RGBA8_ETC2_EAC}if(e===37808||e===37809||e===37810||e===37811||e===37812||e===37813||e===37814||e===37815||e===37816||e===37817||e===37818||e===37819||e===37820||e===37821){if(n=t.get("WEBGL_compressed_texture_astc"),n===null)return null;if(e===37808)return s===$t?n.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:n.COMPRESSED_RGBA_ASTC_4x4_KHR;if(e===37809)return s===$t?n.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:n.COMPRESSED_RGBA_ASTC_5x4_KHR;if(e===37810)return s===$t?n.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:n.COMPRESSED_RGBA_ASTC_5x5_KHR;if(e===37811)return s===$t?n.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:n.COMPRESSED_RGBA_ASTC_6x5_KHR;if(e===37812)return s===$t?n.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:n.COMPRESSED_RGBA_ASTC_6x6_KHR;if(e===37813)return s===$t?n.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:n.COMPRESSED_RGBA_ASTC_8x5_KHR;if(e===37814)return s===$t?n.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:n.COMPRESSED_RGBA_ASTC_8x6_KHR;if(e===37815)return s===$t?n.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:n.COMPRESSED_RGBA_ASTC_8x8_KHR;if(e===37816)return s===$t?n.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:n.COMPRESSED_RGBA_ASTC_10x5_KHR;if(e===37817)return s===$t?n.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:n.COMPRESSED_RGBA_ASTC_10x6_KHR;if(e===37818)return s===$t?n.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:n.COMPRESSED_RGBA_ASTC_10x8_KHR;if(e===37819)return s===$t?n.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:n.COMPRESSED_RGBA_ASTC_10x10_KHR;if(e===37820)return s===$t?n.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:n.COMPRESSED_RGBA_ASTC_12x10_KHR;if(e===37821)return s===$t?n.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:n.COMPRESSED_RGBA_ASTC_12x12_KHR}if(e===Is||e===36494||e===36495){if(n=t.get("EXT_texture_compression_bptc"),n===null)return null;if(e===Is)return s===$t?n.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:n.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(e===36494)return n.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(e===36495)return n.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}if(e===36283||e===36284||e===36285||e===36286){if(n=t.get("EXT_texture_compression_rgtc"),n===null)return null;if(e===Is)return n.COMPRESSED_RED_RGTC1_EXT;if(e===36284)return n.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(e===36285)return n.COMPRESSED_RED_GREEN_RGTC2_EXT;if(e===36286)return n.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}return e===Qi?r.UNSIGNED_INT_24_8:r[e]!==void 0?r[e]:null}}}class qd extends Ue{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class An extends xe{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Yd={type:"move"};class la{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new An,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new An,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new E,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new E),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new An,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new E,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new E),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let n=null,s=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(const g of t.hand.values()){const m=e.getJointPose(g,i),y=this._getHandJoint(c,g);m!==null&&(y.matrix.fromArray(m.transform.matrix),y.matrix.decompose(y.position,y.rotation,y.scale),y.matrixWorldNeedsUpdate=!0,y.jointRadius=m.radius),y.visible=m!==null}const h=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],p=h.position.distanceTo(d.position),_=.02,f=.005;c.inputState.pinching&&p>_+f?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&p<=_-f&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(s=e.getPose(t.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(n=e.getPose(t.targetRaySpace,i),n===null&&s!==null&&(n=s),n!==null&&(o.matrix.fromArray(n.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,n.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(n.linearVelocity)):o.hasLinearVelocity=!1,n.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(n.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Yd)))}return o!==null&&(o.visible=n!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const i=new An;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}}class Jd{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,i){if(this.texture===null){const n=new Ce;t.properties.get(n).__webglTexture=e.texture,e.depthNear==i.depthNear&&e.depthFar==i.depthFar||(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,i=new Ti({vertexShader:`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,fragmentShader:`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Ht(new tr(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}}class Kd extends sn{constructor(t,e){super();const i=this;let n=null,s=1,a=null,o="local-floor",l=1,c=null,h=null,d=null,p=null,_=null,f=null;const g=new Jd,m=e.getContextAttributes();let y=null,w=null;const v=[],R=[],N=new ut;let A=null;const C=new Ue;C.layers.enable(1),C.viewport=new te;const k=new Ue;k.layers.enable(2),k.viewport=new te;const D=[C,k],V=new qd;V.layers.enable(1),V.layers.enable(2);let Y=null,H=null;function Z(tt){const nt=R.indexOf(tt.inputSource);if(nt===-1)return;const _t=v[nt];_t!==void 0&&(_t.update(tt.inputSource,tt.frame,c||a),_t.dispatchEvent({type:tt.type,data:tt.inputSource}))}function W(){n.removeEventListener("select",Z),n.removeEventListener("selectstart",Z),n.removeEventListener("selectend",Z),n.removeEventListener("squeeze",Z),n.removeEventListener("squeezestart",Z),n.removeEventListener("squeezeend",Z),n.removeEventListener("end",W),n.removeEventListener("inputsourceschange",Q);for(let tt=0;tt<v.length;tt++){const nt=R[tt];nt!==null&&(R[tt]=null,v[tt].disconnect(nt))}Y=null,H=null,g.reset(),t.setRenderTarget(y),_=null,p=null,d=null,n=null,w=null,At.stop(),i.isPresenting=!1,t.setPixelRatio(A),t.setSize(N.width,N.height,!1),i.dispatchEvent({type:"sessionend"})}function Q(tt){for(let nt=0;nt<tt.removed.length;nt++){const _t=tt.removed[nt],st=R.indexOf(_t);st>=0&&(R[st]=null,v[st].disconnect(_t))}for(let nt=0;nt<tt.added.length;nt++){const _t=tt.added[nt];let st=R.indexOf(_t);if(st===-1){for(let x=0;x<v.length;x++){if(x>=R.length){R.push(_t),st=x;break}if(R[x]===null){R[x]=_t,st=x;break}}if(st===-1)break}const M=v[st];M&&M.connect(_t)}}this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(tt){let nt=v[tt];return nt===void 0&&(nt=new la,v[tt]=nt),nt.getTargetRaySpace()},this.getControllerGrip=function(tt){let nt=v[tt];return nt===void 0&&(nt=new la,v[tt]=nt),nt.getGripSpace()},this.getHand=function(tt){let nt=v[tt];return nt===void 0&&(nt=new la,v[tt]=nt),nt.getHandSpace()},this.setFramebufferScaleFactor=function(tt){s=tt,i.isPresenting},this.setReferenceSpaceType=function(tt){o=tt,i.isPresenting},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(tt){c=tt},this.getBaseLayer=function(){return p!==null?p:_},this.getBinding=function(){return d},this.getFrame=function(){return f},this.getSession=function(){return n},this.setSession=async function(tt){if(n=tt,n!==null){if(y=t.getRenderTarget(),n.addEventListener("select",Z),n.addEventListener("selectstart",Z),n.addEventListener("selectend",Z),n.addEventListener("squeeze",Z),n.addEventListener("squeezestart",Z),n.addEventListener("squeezeend",Z),n.addEventListener("end",W),n.addEventListener("inputsourceschange",Q),m.xrCompatible!==!0&&await e.makeXRCompatible(),A=t.getPixelRatio(),t.getSize(N),n.renderState.layers===void 0){const nt={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:s};_=new XRWebGLLayer(n,e,nt),n.updateRenderState({baseLayer:_}),t.setPixelRatio(1),t.setSize(_.framebufferWidth,_.framebufferHeight,!1),w=new Ni(_.framebufferWidth,_.framebufferHeight,{format:vi,type:Zi,colorSpace:t.outputColorSpace,stencilBuffer:m.stencil})}else{let nt=null,_t=null,st=null;m.depth&&(st=m.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,nt=m.stencil?tn:On,_t=m.stencil?Qi:$i);const M={colorFormat:e.RGBA8,depthFormat:st,scaleFactor:s};d=new XRWebGLBinding(n,e),p=d.createProjectionLayer(M),n.updateRenderState({layers:[p]}),t.setPixelRatio(1),t.setSize(p.textureWidth,p.textureHeight,!1),w=new Ni(p.textureWidth,p.textureHeight,{format:vi,type:Zi,depthTexture:new Go(p.textureWidth,p.textureHeight,_t,void 0,void 0,void 0,void 0,void 0,void 0,nt),stencilBuffer:m.stencil,colorSpace:t.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:p.ignoreDepthValues===!1})}w.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await n.requestReferenceSpace(o),At.setContext(n),At.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(n!==null)return n.environmentBlendMode};const K=new E,at=new E;function lt(tt,nt){nt===null?tt.matrixWorld.copy(tt.matrix):tt.matrixWorld.multiplyMatrices(nt.matrixWorld,tt.matrix),tt.matrixWorldInverse.copy(tt.matrixWorld).invert()}this.updateCamera=function(tt){if(n===null)return;g.texture!==null&&(tt.near=g.depthNear,tt.far=g.depthFar),V.near=k.near=C.near=tt.near,V.far=k.far=C.far=tt.far,Y===V.near&&H===V.far||(n.updateRenderState({depthNear:V.near,depthFar:V.far}),Y=V.near,H=V.far,C.near=Y,C.far=H,k.near=Y,k.far=H,C.updateProjectionMatrix(),k.updateProjectionMatrix(),tt.updateProjectionMatrix());const nt=tt.parent,_t=V.cameras;lt(V,nt);for(let st=0;st<_t.length;st++)lt(_t[st],nt);_t.length===2?function(st,M,x){K.setFromMatrixPosition(M.matrixWorld),at.setFromMatrixPosition(x.matrixWorld);const O=K.distanceTo(at),J=M.projectionMatrix.elements,B=x.projectionMatrix.elements,q=J[14]/(J[10]-1),S=J[14]/(J[10]+1),F=(J[9]+1)/J[5],z=(J[9]-1)/J[5],ot=(J[8]-1)/J[0],G=(B[8]+1)/B[0],rt=q*ot,mt=q*G,ct=O/(-ot+G),pt=ct*-ot;M.matrixWorld.decompose(st.position,st.quaternion,st.scale),st.translateX(pt),st.translateZ(ct),st.matrixWorld.compose(st.position,st.quaternion,st.scale),st.matrixWorldInverse.copy(st.matrixWorld).invert();const yt=q+ct,bt=S+ct,Rt=rt-pt,qt=mt+(O-pt),jt=F*S/bt*yt,vt=z*S/bt*yt;st.projectionMatrix.makePerspective(Rt,qt,jt,vt,yt,bt),st.projectionMatrixInverse.copy(st.projectionMatrix).invert()}(V,C,k):V.projectionMatrix.copy(C.projectionMatrix),function(st,M,x){x===null?st.matrix.copy(M.matrixWorld):(st.matrix.copy(x.matrixWorld),st.matrix.invert(),st.matrix.multiply(M.matrixWorld)),st.matrix.decompose(st.position,st.quaternion,st.scale),st.updateMatrixWorld(!0),st.projectionMatrix.copy(M.projectionMatrix),st.projectionMatrixInverse.copy(M.projectionMatrixInverse),st.isPerspectiveCamera&&(st.fov=2*zn*Math.atan(1/st.projectionMatrix.elements[5]),st.zoom=1)}(tt,V,nt)},this.getCamera=function(){return V},this.getFoveation=function(){if(p!==null||_!==null)return l},this.setFoveation=function(tt){l=tt,p!==null&&(p.fixedFoveation=tt),_!==null&&_.fixedFoveation!==void 0&&(_.fixedFoveation=tt)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(V)};let wt=null;const At=new Do;At.setAnimationLoop(function(tt,nt){if(h=nt.getViewerPose(c||a),f=nt,h!==null){const _t=h.views;_!==null&&(t.setRenderTargetFramebuffer(w,_.framebuffer),t.setRenderTarget(w));let st=!1;_t.length!==V.cameras.length&&(V.cameras.length=0,st=!0);for(let x=0;x<_t.length;x++){const O=_t[x];let J=null;if(_!==null)J=_.getViewport(O);else{const q=d.getViewSubImage(p,O);J=q.viewport,x===0&&(t.setRenderTargetTextures(w,q.colorTexture,p.ignoreDepthValues?void 0:q.depthStencilTexture),t.setRenderTarget(w))}let B=D[x];B===void 0&&(B=new Ue,B.layers.enable(x),B.viewport=new te,D[x]=B),B.matrix.fromArray(O.transform.matrix),B.matrix.decompose(B.position,B.quaternion,B.scale),B.projectionMatrix.fromArray(O.projectionMatrix),B.projectionMatrixInverse.copy(B.projectionMatrix).invert(),B.viewport.set(J.x,J.y,J.width,J.height),x===0&&(V.matrix.copy(B.matrix),V.matrix.decompose(V.position,V.quaternion,V.scale)),st===!0&&V.cameras.push(B)}const M=n.enabledFeatures;if(M&&M.includes("depth-sensing")){const x=d.getDepthInformation(_t[0]);x&&x.isValid&&x.texture&&g.init(t,x,n.renderState)}}for(let _t=0;_t<v.length;_t++){const st=R[_t],M=v[_t];st!==null&&M!==void 0&&M.update(st,nt,c||a)}wt&&wt(tt,nt),nt.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:nt}),f=null}),this.setAnimationLoop=function(tt){wt=tt},this.dispose=function(){}}}const Vi=new ni,Zd=new ee;function $d(r,t){function e(n,s){n.matrixAutoUpdate===!0&&n.updateMatrix(),s.value.copy(n.matrix)}function i(n,s){n.opacity.value=s.opacity,s.color&&n.diffuse.value.copy(s.color),s.emissive&&n.emissive.value.copy(s.emissive).multiplyScalar(s.emissiveIntensity),s.map&&(n.map.value=s.map,e(s.map,n.mapTransform)),s.alphaMap&&(n.alphaMap.value=s.alphaMap,e(s.alphaMap,n.alphaMapTransform)),s.bumpMap&&(n.bumpMap.value=s.bumpMap,e(s.bumpMap,n.bumpMapTransform),n.bumpScale.value=s.bumpScale,s.side===1&&(n.bumpScale.value*=-1)),s.normalMap&&(n.normalMap.value=s.normalMap,e(s.normalMap,n.normalMapTransform),n.normalScale.value.copy(s.normalScale),s.side===1&&n.normalScale.value.negate()),s.displacementMap&&(n.displacementMap.value=s.displacementMap,e(s.displacementMap,n.displacementMapTransform),n.displacementScale.value=s.displacementScale,n.displacementBias.value=s.displacementBias),s.emissiveMap&&(n.emissiveMap.value=s.emissiveMap,e(s.emissiveMap,n.emissiveMapTransform)),s.specularMap&&(n.specularMap.value=s.specularMap,e(s.specularMap,n.specularMapTransform)),s.alphaTest>0&&(n.alphaTest.value=s.alphaTest);const a=t.get(s),o=a.envMap,l=a.envMapRotation;o&&(n.envMap.value=o,Vi.copy(l),Vi.x*=-1,Vi.y*=-1,Vi.z*=-1,o.isCubeTexture&&o.isRenderTargetTexture===!1&&(Vi.y*=-1,Vi.z*=-1),n.envMapRotation.value.setFromMatrix4(Zd.makeRotationFromEuler(Vi)),n.flipEnvMap.value=o.isCubeTexture&&o.isRenderTargetTexture===!1?-1:1,n.reflectivity.value=s.reflectivity,n.ior.value=s.ior,n.refractionRatio.value=s.refractionRatio),s.lightMap&&(n.lightMap.value=s.lightMap,n.lightMapIntensity.value=s.lightMapIntensity,e(s.lightMap,n.lightMapTransform)),s.aoMap&&(n.aoMap.value=s.aoMap,n.aoMapIntensity.value=s.aoMapIntensity,e(s.aoMap,n.aoMapTransform))}return{refreshFogUniforms:function(n,s){s.color.getRGB(n.fogColor.value,Ro(r)),s.isFog?(n.fogNear.value=s.near,n.fogFar.value=s.far):s.isFogExp2&&(n.fogDensity.value=s.density)},refreshMaterialUniforms:function(n,s,a,o,l){s.isMeshBasicMaterial||s.isMeshLambertMaterial?i(n,s):s.isMeshToonMaterial?(i(n,s),function(c,h){h.gradientMap&&(c.gradientMap.value=h.gradientMap)}(n,s)):s.isMeshPhongMaterial?(i(n,s),function(c,h){c.specular.value.copy(h.specular),c.shininess.value=Math.max(h.shininess,1e-4)}(n,s)):s.isMeshStandardMaterial?(i(n,s),function(c,h){c.metalness.value=h.metalness,h.metalnessMap&&(c.metalnessMap.value=h.metalnessMap,e(h.metalnessMap,c.metalnessMapTransform)),c.roughness.value=h.roughness,h.roughnessMap&&(c.roughnessMap.value=h.roughnessMap,e(h.roughnessMap,c.roughnessMapTransform)),h.envMap&&(c.envMapIntensity.value=h.envMapIntensity)}(n,s),s.isMeshPhysicalMaterial&&function(c,h,d){c.ior.value=h.ior,h.sheen>0&&(c.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen),c.sheenRoughness.value=h.sheenRoughness,h.sheenColorMap&&(c.sheenColorMap.value=h.sheenColorMap,e(h.sheenColorMap,c.sheenColorMapTransform)),h.sheenRoughnessMap&&(c.sheenRoughnessMap.value=h.sheenRoughnessMap,e(h.sheenRoughnessMap,c.sheenRoughnessMapTransform))),h.clearcoat>0&&(c.clearcoat.value=h.clearcoat,c.clearcoatRoughness.value=h.clearcoatRoughness,h.clearcoatMap&&(c.clearcoatMap.value=h.clearcoatMap,e(h.clearcoatMap,c.clearcoatMapTransform)),h.clearcoatRoughnessMap&&(c.clearcoatRoughnessMap.value=h.clearcoatRoughnessMap,e(h.clearcoatRoughnessMap,c.clearcoatRoughnessMapTransform)),h.clearcoatNormalMap&&(c.clearcoatNormalMap.value=h.clearcoatNormalMap,e(h.clearcoatNormalMap,c.clearcoatNormalMapTransform),c.clearcoatNormalScale.value.copy(h.clearcoatNormalScale),h.side===1&&c.clearcoatNormalScale.value.negate())),h.dispersion>0&&(c.dispersion.value=h.dispersion),h.iridescence>0&&(c.iridescence.value=h.iridescence,c.iridescenceIOR.value=h.iridescenceIOR,c.iridescenceThicknessMinimum.value=h.iridescenceThicknessRange[0],c.iridescenceThicknessMaximum.value=h.iridescenceThicknessRange[1],h.iridescenceMap&&(c.iridescenceMap.value=h.iridescenceMap,e(h.iridescenceMap,c.iridescenceMapTransform)),h.iridescenceThicknessMap&&(c.iridescenceThicknessMap.value=h.iridescenceThicknessMap,e(h.iridescenceThicknessMap,c.iridescenceThicknessMapTransform))),h.transmission>0&&(c.transmission.value=h.transmission,c.transmissionSamplerMap.value=d.texture,c.transmissionSamplerSize.value.set(d.width,d.height),h.transmissionMap&&(c.transmissionMap.value=h.transmissionMap,e(h.transmissionMap,c.transmissionMapTransform)),c.thickness.value=h.thickness,h.thicknessMap&&(c.thicknessMap.value=h.thicknessMap,e(h.thicknessMap,c.thicknessMapTransform)),c.attenuationDistance.value=h.attenuationDistance,c.attenuationColor.value.copy(h.attenuationColor)),h.anisotropy>0&&(c.anisotropyVector.value.set(h.anisotropy*Math.cos(h.anisotropyRotation),h.anisotropy*Math.sin(h.anisotropyRotation)),h.anisotropyMap&&(c.anisotropyMap.value=h.anisotropyMap,e(h.anisotropyMap,c.anisotropyMapTransform))),c.specularIntensity.value=h.specularIntensity,c.specularColor.value.copy(h.specularColor),h.specularColorMap&&(c.specularColorMap.value=h.specularColorMap,e(h.specularColorMap,c.specularColorMapTransform)),h.specularIntensityMap&&(c.specularIntensityMap.value=h.specularIntensityMap,e(h.specularIntensityMap,c.specularIntensityMapTransform))}(n,s,l)):s.isMeshMatcapMaterial?(i(n,s),function(c,h){h.matcap&&(c.matcap.value=h.matcap)}(n,s)):s.isMeshDepthMaterial?i(n,s):s.isMeshDistanceMaterial?(i(n,s),function(c,h){const d=t.get(h).light;c.referencePosition.value.setFromMatrixPosition(d.matrixWorld),c.nearDistance.value=d.shadow.camera.near,c.farDistance.value=d.shadow.camera.far}(n,s)):s.isMeshNormalMaterial?i(n,s):s.isLineBasicMaterial?(function(c,h){c.diffuse.value.copy(h.color),c.opacity.value=h.opacity,h.map&&(c.map.value=h.map,e(h.map,c.mapTransform))}(n,s),s.isLineDashedMaterial&&function(c,h){c.dashSize.value=h.dashSize,c.totalSize.value=h.dashSize+h.gapSize,c.scale.value=h.scale}(n,s)):s.isPointsMaterial?function(c,h,d,p){c.diffuse.value.copy(h.color),c.opacity.value=h.opacity,c.size.value=h.size*d,c.scale.value=.5*p,h.map&&(c.map.value=h.map,e(h.map,c.uvTransform)),h.alphaMap&&(c.alphaMap.value=h.alphaMap,e(h.alphaMap,c.alphaMapTransform)),h.alphaTest>0&&(c.alphaTest.value=h.alphaTest)}(n,s,a,o):s.isSpriteMaterial?function(c,h){c.diffuse.value.copy(h.color),c.opacity.value=h.opacity,c.rotation.value=h.rotation,h.map&&(c.map.value=h.map,e(h.map,c.mapTransform)),h.alphaMap&&(c.alphaMap.value=h.alphaMap,e(h.alphaMap,c.alphaMapTransform)),h.alphaTest>0&&(c.alphaTest.value=h.alphaTest)}(n,s):s.isShadowMaterial?(n.color.value.copy(s.color),n.opacity.value=s.opacity):s.isShaderMaterial&&(s.uniformsNeedUpdate=!1)}}}function Qd(r,t,e,i){let n={},s={},a=[];const o=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function l(d,p,_,f){const g=d.value,m=p+"_"+_;if(f[m]===void 0)return f[m]=typeof g=="number"||typeof g=="boolean"?g:g.clone(),!0;{const y=f[m];if(typeof g=="number"||typeof g=="boolean"){if(y!==g)return f[m]=g,!0}else if(y.equals(g)===!1)return y.copy(g),!0}return!1}function c(d){const p={boundary:0,storage:0};return typeof d=="number"||typeof d=="boolean"?(p.boundary=4,p.storage=4):d.isVector2?(p.boundary=8,p.storage=8):d.isVector3||d.isColor?(p.boundary=16,p.storage=12):d.isVector4?(p.boundary=16,p.storage=16):d.isMatrix3?(p.boundary=48,p.storage=48):d.isMatrix4?(p.boundary=64,p.storage=64):d.isTexture,p}function h(d){const p=d.target;p.removeEventListener("dispose",h);const _=a.indexOf(p.__bindingPointIndex);a.splice(_,1),r.deleteBuffer(n[p.id]),delete n[p.id],delete s[p.id]}return{bind:function(d,p){const _=p.program;i.uniformBlockBinding(d,_)},update:function(d,p){let _=n[d.id];_===void 0&&(function(m){const y=m.uniforms;let w=0;const v=16;for(let N=0,A=y.length;N<A;N++){const C=Array.isArray(y[N])?y[N]:[y[N]];for(let k=0,D=C.length;k<D;k++){const V=C[k],Y=Array.isArray(V.value)?V.value:[V.value];for(let H=0,Z=Y.length;H<Z;H++){const W=c(Y[H]),Q=w%v;Q!==0&&v-Q<W.boundary&&(w+=v-Q),V.__data=new Float32Array(W.storage/Float32Array.BYTES_PER_ELEMENT),V.__offset=w,w+=W.storage}}}const R=w%v;R>0&&(w+=v-R),m.__size=w,m.__cache={}}(d),_=function(m){const y=function(){for(let N=0;N<o;N++)if(a.indexOf(N)===-1)return a.push(N),N;return 0}();m.__bindingPointIndex=y;const w=r.createBuffer(),v=m.__size,R=m.usage;return r.bindBuffer(r.UNIFORM_BUFFER,w),r.bufferData(r.UNIFORM_BUFFER,v,R),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,y,w),w}(d),n[d.id]=_,d.addEventListener("dispose",h));const f=p.program;i.updateUBOMapping(d,f);const g=t.render.frame;s[d.id]!==g&&(function(m){const y=n[m.id],w=m.uniforms,v=m.__cache;r.bindBuffer(r.UNIFORM_BUFFER,y);for(let R=0,N=w.length;R<N;R++){const A=Array.isArray(w[R])?w[R]:[w[R]];for(let C=0,k=A.length;C<k;C++){const D=A[C];if(l(D,R,C,v)===!0){const V=D.__offset,Y=Array.isArray(D.value)?D.value:[D.value];let H=0;for(let Z=0;Z<Y.length;Z++){const W=Y[Z],Q=c(W);typeof W=="number"||typeof W=="boolean"?(D.__data[0]=W,r.bufferSubData(r.UNIFORM_BUFFER,V+H,D.__data)):W.isMatrix3?(D.__data[0]=W.elements[0],D.__data[1]=W.elements[1],D.__data[2]=W.elements[2],D.__data[3]=0,D.__data[4]=W.elements[3],D.__data[5]=W.elements[4],D.__data[6]=W.elements[5],D.__data[7]=0,D.__data[8]=W.elements[6],D.__data[9]=W.elements[7],D.__data[10]=W.elements[8],D.__data[11]=0):(W.toArray(D.__data,H),H+=Q.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,V,D.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}(d),s[d.id]=g)},dispose:function(){for(const d in n)r.deleteBuffer(n[d]);a=[],n={},s={}}}}class tu{constructor(t={}){const{canvas:e=Kc(),context:i=null,depth:n=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1}=t;let p;if(this.isWebGLRenderer=!0,i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=i.getContextAttributes().alpha}else p=a;const _=new Uint32Array(4),f=new Int32Array(4);let g=null,m=null;const y=[],w=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Ze,this.toneMapping=0,this.toneMappingExposure=1;const v=this;let R=!1,N=0,A=0,C=null,k=-1,D=null;const V=new te,Y=new te;let H=null;const Z=new kt(0);let W=0,Q=e.width,K=e.height,at=1,lt=null,wt=null;const At=new te(0,0,Q,K),tt=new te(0,0,Q,K);let nt=!1;const _t=new Qs;let st=!1,M=!1;const x=new ee,O=new E,J={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let B=!1;function q(){return C===null?at:1}let S,F,z,ot,G,rt,mt,ct,pt,yt,bt,Rt,qt,jt,vt,Ft,zt,ne,Mt,Kt,Yt,Ee,si,Yi,L=i;function Ln(b,U){return e.getContext(b,U)}try{const b={alpha:!0,depth:n,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Ms}`),e.addEventListener("webglcontextlost",Oa,!1),e.addEventListener("webglcontextrestored",Fa,!1),e.addEventListener("webglcontextcreationerror",za,!1),L===null){const U="webgl2";if(L=Ln(U,b),L===null)throw Ln(U)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(b){throw b}function Li(){S=new Th(L),S.init(),Ee=new Xd(L,S),F=new xh(L,S,t,Ee),z=new Wd(L),ot=new Ch(L),G=new Dd,rt=new jd(L,S,z,G,F,Ee,ot),mt=new Mh(v),ct=new Eh(v),pt=new gh(L),si=new yh(L,pt),yt=new Ah(L,pt,ot,si),bt=new Lh(L,yt,pt,ot),Mt=new Ph(L,F,rt),Ft=new Sh(G),Rt=new Id(v,mt,ct,S,F,si,Ft),qt=new $d(v,G),jt=new Nd,vt=new kd(S),ne=new vh(v,mt,ct,z,bt,p,l),zt=new Vd(v,bt,F),Yi=new Qd(L,ot,F,z),Kt=new bh(L,S,ot),Yt=new Rh(L,S,ot),ot.programs=Rt.programs,v.capabilities=F,v.extensions=S,v.properties=G,v.renderLists=jt,v.shadowMap=zt,v.state=z,v.info=ot}Li();const ce=new Kd(v,L);function Oa(b){b.preventDefault(),R=!0}function Fa(){R=!1;const b=ot.autoReset,U=zt.enabled,j=zt.autoUpdate,$=zt.needsUpdate,X=zt.type;Li(),ot.autoReset=b,zt.enabled=U,zt.autoUpdate=j,zt.needsUpdate=$,zt.type=X}function za(b){}function Ba(b){const U=b.target;U.removeEventListener("dispose",Ba),function(j){(function($){const X=G.get($).programs;X!==void 0&&(X.forEach(function(et){Rt.releaseProgram(et)}),$.isShaderMaterial&&Rt.releaseShaderCache($))})(j),G.remove(j)}(U)}function ka(b,U,j){b.transparent===!0&&b.side===2&&b.forceSinglePass===!1?(b.side=1,b.needsUpdate=!0,sr(b,U,j),b.side=0,b.needsUpdate=!0,sr(b,U,j),b.side=2):sr(b,U,j)}this.xr=ce,this.getContext=function(){return L},this.getContextAttributes=function(){return L.getContextAttributes()},this.forceContextLoss=function(){const b=S.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){const b=S.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return at},this.setPixelRatio=function(b){b!==void 0&&(at=b,this.setSize(Q,K,!1))},this.getSize=function(b){return b.set(Q,K)},this.setSize=function(b,U,j=!0){ce.isPresenting||(Q=b,K=U,e.width=Math.floor(b*at),e.height=Math.floor(U*at),j===!0&&(e.style.width=b+"px",e.style.height=U+"px"),this.setViewport(0,0,b,U))},this.getDrawingBufferSize=function(b){return b.set(Q*at,K*at).floor()},this.setDrawingBufferSize=function(b,U,j){Q=b,K=U,at=j,e.width=Math.floor(b*j),e.height=Math.floor(U*j),this.setViewport(0,0,b,U)},this.getCurrentViewport=function(b){return b.copy(V)},this.getViewport=function(b){return b.copy(At)},this.setViewport=function(b,U,j,$){b.isVector4?At.set(b.x,b.y,b.z,b.w):At.set(b,U,j,$),z.viewport(V.copy(At).multiplyScalar(at).round())},this.getScissor=function(b){return b.copy(tt)},this.setScissor=function(b,U,j,$){b.isVector4?tt.set(b.x,b.y,b.z,b.w):tt.set(b,U,j,$),z.scissor(Y.copy(tt).multiplyScalar(at).round())},this.getScissorTest=function(){return nt},this.setScissorTest=function(b){z.setScissorTest(nt=b)},this.setOpaqueSort=function(b){lt=b},this.setTransparentSort=function(b){wt=b},this.getClearColor=function(b){return b.copy(ne.getClearColor())},this.setClearColor=function(){ne.setClearColor.apply(ne,arguments)},this.getClearAlpha=function(){return ne.getClearAlpha()},this.setClearAlpha=function(){ne.setClearAlpha.apply(ne,arguments)},this.clear=function(b=!0,U=!0,j=!0){let $=0;if(b){let X=!1;if(C!==null){const et=C.texture.format;X=et===1033||et===1031||et===1029}if(X){const et=C.texture.type,dt=et===Zi||et===$i||et===cr||et===Qi||et===1017||et===1018,gt=ne.getClearColor(),St=ne.getClearAlpha(),Ct=gt.r,It=gt.g,Tt=gt.b;dt?(_[0]=Ct,_[1]=It,_[2]=Tt,_[3]=St,L.clearBufferuiv(L.COLOR,0,_)):(f[0]=Ct,f[1]=It,f[2]=Tt,f[3]=St,L.clearBufferiv(L.COLOR,0,f))}else $|=L.COLOR_BUFFER_BIT}U&&($|=L.DEPTH_BUFFER_BIT),j&&($|=L.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),L.clear($)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",Oa,!1),e.removeEventListener("webglcontextrestored",Fa,!1),e.removeEventListener("webglcontextcreationerror",za,!1),jt.dispose(),vt.dispose(),G.dispose(),mt.dispose(),ct.dispose(),bt.dispose(),si.dispose(),Yi.dispose(),Rt.dispose(),ce.dispose(),ce.removeEventListener("sessionstart",Ha),ce.removeEventListener("sessionend",Ga),Ii.stop()},this.renderBufferDirect=function(b,U,j,$,X,et){U===null&&(U=J);const dt=X.isMesh&&X.matrixWorld.determinant()<0,gt=function(Wt,he,Le,Ut,Dt){he.isScene!==!0&&(he=J),rt.resetTextureUnits();const In=he.fog,oc=Ut.isMeshStandardMaterial?he.environment:null,lc=C===null?v.outputColorSpace:C.isXRRenderTarget===!0?C.texture.colorSpace:yi,ar=(Ut.isMeshStandardMaterial?ct:mt).get(Ut.envMap||oc),cc=Ut.vertexColors===!0&&!!Le.attributes.color&&Le.attributes.color.itemSize===4,hc=!!Le.attributes.tangent&&(!!Ut.normalMap||Ut.anisotropy>0),dc=!!Le.morphAttributes.position,uc=!!Le.morphAttributes.normal,pc=!!Le.morphAttributes.color;let Ya=0;Ut.toneMapped&&(C!==null&&C.isXRRenderTarget!==!0||(Ya=v.toneMapping));const Ja=Le.morphAttributes.position||Le.morphAttributes.normal||Le.morphAttributes.color,_c=Ja!==void 0?Ja.length:0,Bt=G.get(Ut),mc=m.state.lights;if(st===!0&&(M===!0||Wt!==D)){const Fe=Wt===D&&Ut.id===k;Ft.setState(Ut,Wt,Fe)}let ke=!1;Ut.version===Bt.__version?Bt.needsLights&&Bt.lightsStateVersion!==mc.state.version||Bt.outputColorSpace!==lc||Dt.isBatchedMesh&&Bt.batching===!1?ke=!0:Dt.isBatchedMesh||Bt.batching!==!0?Dt.isBatchedMesh&&Bt.batchingColor===!0&&Dt.colorTexture===null||Dt.isBatchedMesh&&Bt.batchingColor===!1&&Dt.colorTexture!==null||Dt.isInstancedMesh&&Bt.instancing===!1?ke=!0:Dt.isInstancedMesh||Bt.instancing!==!0?Dt.isSkinnedMesh&&Bt.skinning===!1?ke=!0:Dt.isSkinnedMesh||Bt.skinning!==!0?Dt.isInstancedMesh&&Bt.instancingColor===!0&&Dt.instanceColor===null||Dt.isInstancedMesh&&Bt.instancingColor===!1&&Dt.instanceColor!==null||Dt.isInstancedMesh&&Bt.instancingMorph===!0&&Dt.morphTexture===null||Dt.isInstancedMesh&&Bt.instancingMorph===!1&&Dt.morphTexture!==null||Bt.envMap!==ar||Ut.fog===!0&&Bt.fog!==In?ke=!0:Bt.numClippingPlanes===void 0||Bt.numClippingPlanes===Ft.numPlanes&&Bt.numIntersection===Ft.numIntersection?(Bt.vertexAlphas!==cc||Bt.vertexTangents!==hc||Bt.morphTargets!==dc||Bt.morphNormals!==uc||Bt.morphColors!==pc||Bt.toneMapping!==Ya||Bt.morphTargetsCount!==_c)&&(ke=!0):ke=!0:ke=!0:ke=!0:ke=!0:(ke=!0,Bt.__version=Ut.version);let Di=Bt.currentProgram;ke===!0&&(Di=sr(Ut,he,Dt));let Ka=!1,Dn=!1,bs=!1;const ge=Di.getUniforms(),gi=Bt.uniforms;if(z.useProgram(Di.program)&&(Ka=!0,Dn=!0,bs=!0),Ut.id!==k&&(k=Ut.id,Dn=!0),Ka||D!==Wt){ge.setValue(L,"projectionMatrix",Wt.projectionMatrix),ge.setValue(L,"viewMatrix",Wt.matrixWorldInverse);const Fe=ge.map.cameraPosition;Fe!==void 0&&Fe.setValue(L,O.setFromMatrixPosition(Wt.matrixWorld)),F.logarithmicDepthBuffer&&ge.setValue(L,"logDepthBufFC",2/(Math.log(Wt.far+1)/Math.LN2)),(Ut.isMeshPhongMaterial||Ut.isMeshToonMaterial||Ut.isMeshLambertMaterial||Ut.isMeshBasicMaterial||Ut.isMeshStandardMaterial||Ut.isShaderMaterial)&&ge.setValue(L,"isOrthographic",Wt.isOrthographicCamera===!0),D!==Wt&&(D=Wt,Dn=!0,bs=!0)}if(Dt.isSkinnedMesh){ge.setOptional(L,Dt,"bindMatrix"),ge.setOptional(L,Dt,"bindMatrixInverse");const Fe=Dt.skeleton;Fe&&(Fe.boneTexture===null&&Fe.computeBoneTexture(),ge.setValue(L,"boneTexture",Fe.boneTexture,rt))}Dt.isBatchedMesh&&(ge.setOptional(L,Dt,"batchingTexture"),ge.setValue(L,"batchingTexture",Dt._matricesTexture,rt),ge.setOptional(L,Dt,"batchingColorTexture"),Dt._colorsTexture!==null&&ge.setValue(L,"batchingColorTexture",Dt._colorsTexture,rt));const xs=Le.morphAttributes;xs.position===void 0&&xs.normal===void 0&&xs.color===void 0||Mt.update(Dt,Le,Di),(Dn||Bt.receiveShadow!==Dt.receiveShadow)&&(Bt.receiveShadow=Dt.receiveShadow,ge.setValue(L,"receiveShadow",Dt.receiveShadow)),Ut.isMeshGouraudMaterial&&Ut.envMap!==null&&(gi.envMap.value=ar,gi.flipEnvMap.value=ar.isCubeTexture&&ar.isRenderTargetTexture===!1?-1:1),Ut.isMeshStandardMaterial&&Ut.envMap===null&&he.environment!==null&&(gi.envMapIntensity.value=he.environmentIntensity),Dn&&(ge.setValue(L,"toneMappingExposure",v.toneMappingExposure),Bt.needsLights&&(He=bs,(Je=gi).ambientLightColor.needsUpdate=He,Je.lightProbe.needsUpdate=He,Je.directionalLights.needsUpdate=He,Je.directionalLightShadows.needsUpdate=He,Je.pointLights.needsUpdate=He,Je.pointLightShadows.needsUpdate=He,Je.spotLights.needsUpdate=He,Je.spotLightShadows.needsUpdate=He,Je.rectAreaLights.needsUpdate=He,Je.hemisphereLights.needsUpdate=He),In&&Ut.fog===!0&&qt.refreshFogUniforms(gi,In),qt.refreshMaterialUniforms(gi,Ut,at,K,m.state.transmissionRenderTarget[Wt.id]),Gr.upload(L,Xa(Bt),gi,rt));var Je,He;if(Ut.isShaderMaterial&&Ut.uniformsNeedUpdate===!0&&(Gr.upload(L,Xa(Bt),gi,rt),Ut.uniformsNeedUpdate=!1),Ut.isSpriteMaterial&&ge.setValue(L,"center",Dt.center),ge.setValue(L,"modelViewMatrix",Dt.modelViewMatrix),ge.setValue(L,"normalMatrix",Dt.normalMatrix),ge.setValue(L,"modelMatrix",Dt.matrixWorld),Ut.isShaderMaterial||Ut.isRawShaderMaterial){const Fe=Ut.uniformsGroups;for(let Ss=0,fc=Fe.length;Ss<fc;Ss++){const Za=Fe[Ss];Yi.update(Za,Di),Yi.bind(Za,Di)}}return Di}(b,U,j,$,X);z.setMaterial($,dt);let St=j.index,Ct=1;if($.wireframe===!0){if(St=yt.getWireframeAttribute(j),St===void 0)return;Ct=2}const It=j.drawRange,Tt=j.attributes.position;let Gt=It.start*Ct,re=(It.start+It.count)*Ct;et!==null&&(Gt=Math.max(Gt,et.start*Ct),re=Math.min(re,(et.start+et.count)*Ct)),St!==null?(Gt=Math.max(Gt,0),re=Math.min(re,St.count)):Tt!=null&&(Gt=Math.max(Gt,0),re=Math.min(re,Tt.count));const de=re-Gt;if(de<0||de===1/0)return;let pe;si.setup(X,$,gt,j,St);let se=Kt;if(St!==null&&(pe=pt.get(St),se=Yt,se.setIndex(pe)),X.isMesh)$.wireframe===!0?(z.setLineWidth($.wireframeLinewidth*q()),se.setMode(L.LINES)):se.setMode(L.TRIANGLES);else if(X.isLine){let Wt=$.linewidth;Wt===void 0&&(Wt=1),z.setLineWidth(Wt*q()),X.isLineSegments?se.setMode(L.LINES):X.isLineLoop?se.setMode(L.LINE_LOOP):se.setMode(L.LINE_STRIP)}else X.isPoints?se.setMode(L.POINTS):X.isSprite&&se.setMode(L.TRIANGLES);if(X.isBatchedMesh)X._multiDrawInstances!==null?se.renderMultiDrawInstances(X._multiDrawStarts,X._multiDrawCounts,X._multiDrawCount,X._multiDrawInstances):se.renderMultiDraw(X._multiDrawStarts,X._multiDrawCounts,X._multiDrawCount);else if(X.isInstancedMesh)se.renderInstances(Gt,de,X.count);else if(j.isInstancedBufferGeometry){const Wt=j._maxInstanceCount!==void 0?j._maxInstanceCount:1/0,he=Math.min(j.instanceCount,Wt);se.renderInstances(Gt,de,he)}else se.render(Gt,de)},this.compile=function(b,U,j=null){j===null&&(j=b),m=vt.get(j),m.init(U),w.push(m),j.traverseVisible(function(X){X.isLight&&X.layers.test(U.layers)&&(m.pushLight(X),X.castShadow&&m.pushShadow(X))}),b!==j&&b.traverseVisible(function(X){X.isLight&&X.layers.test(U.layers)&&(m.pushLight(X),X.castShadow&&m.pushShadow(X))}),m.setupLights();const $=new Set;return b.traverse(function(X){const et=X.material;if(et)if(Array.isArray(et))for(let dt=0;dt<et.length;dt++){const gt=et[dt];ka(gt,j,X),$.add(gt)}else ka(et,j,X),$.add(et)}),w.pop(),m=null,$},this.compileAsync=function(b,U,j=null){const $=this.compile(b,U,j);return new Promise(X=>{function et(){$.forEach(function(dt){G.get(dt).currentProgram.isReady()&&$.delete(dt)}),$.size!==0?setTimeout(et,10):X(b)}S.get("KHR_parallel_shader_compile")!==null?et():setTimeout(et,10)})};let vs=null;function Ha(){Ii.stop()}function Ga(){Ii.start()}const Ii=new Do;function ys(b,U,j,$){if(b.visible===!1)return;if(b.layers.test(U.layers)){if(b.isGroup)j=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(U);else if(b.isLight)m.pushLight(b),b.castShadow&&m.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||_t.intersectsSprite(b)){$&&O.setFromMatrixPosition(b.matrixWorld).applyMatrix4(x);const et=bt.update(b),dt=b.material;dt.visible&&g.push(b,et,dt,j,O.z,null)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||_t.intersectsObject(b))){const et=bt.update(b),dt=b.material;if($&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),O.copy(b.boundingSphere.center)):(et.boundingSphere===null&&et.computeBoundingSphere(),O.copy(et.boundingSphere.center)),O.applyMatrix4(b.matrixWorld).applyMatrix4(x)),Array.isArray(dt)){const gt=et.groups;for(let St=0,Ct=gt.length;St<Ct;St++){const It=gt[St],Tt=dt[It.materialIndex];Tt&&Tt.visible&&g.push(b,et,Tt,j,O.z,It)}}else dt.visible&&g.push(b,et,dt,j,O.z,null)}}const X=b.children;for(let et=0,dt=X.length;et<dt;et++)ys(X[et],U,j,$)}function Va(b,U,j,$){const X=b.opaque,et=b.transmissive,dt=b.transparent;m.setupLightsView(j),st===!0&&Ft.setGlobalState(v.clippingPlanes,j),$&&z.viewport(V.copy($)),X.length>0&&rr(X,U,j),et.length>0&&rr(et,U,j),dt.length>0&&rr(dt,U,j),z.buffers.depth.setTest(!0),z.buffers.depth.setMask(!0),z.buffers.color.setMask(!0),z.setPolygonOffset(!1)}function Wa(b,U,j,$){if((j.isScene===!0?j.overrideMaterial:null)!==null)return;m.state.transmissionRenderTarget[$.id]===void 0&&(m.state.transmissionRenderTarget[$.id]=new Ni(1,1,{generateMipmaps:!0,type:S.has("EXT_color_buffer_half_float")||S.has("EXT_color_buffer_float")?hr:Zi,minFilter:Nn,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Xt.workingColorSpace}));const X=m.state.transmissionRenderTarget[$.id],et=$.viewport||V;X.setSize(et.z,et.w);const dt=v.getRenderTarget();v.setRenderTarget(X),v.getClearColor(Z),W=v.getClearAlpha(),W<1&&v.setClearColor(16777215,.5),B?ne.render(j):v.clear();const gt=v.toneMapping;v.toneMapping=0;const St=$.viewport;if($.viewport!==void 0&&($.viewport=void 0),m.setupLightsView($),st===!0&&Ft.setGlobalState(v.clippingPlanes,$),rr(b,j,$),rt.updateMultisampleRenderTarget(X),rt.updateRenderTargetMipmap(X),S.has("WEBGL_multisampled_render_to_texture")===!1){let Ct=!1;for(let It=0,Tt=U.length;It<Tt;It++){const Gt=U[It],re=Gt.object,de=Gt.geometry,pe=Gt.material,se=Gt.group;if(pe.side===2&&re.layers.test($.layers)){const Wt=pe.side;pe.side=1,pe.needsUpdate=!0,ja(re,j,$,de,pe,se),pe.side=Wt,pe.needsUpdate=!0,Ct=!0}}Ct===!0&&(rt.updateMultisampleRenderTarget(X),rt.updateRenderTargetMipmap(X))}v.setRenderTarget(dt),v.setClearColor(Z,W),St!==void 0&&($.viewport=St),v.toneMapping=gt}function rr(b,U,j){const $=U.isScene===!0?U.overrideMaterial:null;for(let X=0,et=b.length;X<et;X++){const dt=b[X],gt=dt.object,St=dt.geometry,Ct=$===null?dt.material:$,It=dt.group;gt.layers.test(j.layers)&&ja(gt,U,j,St,Ct,It)}}function ja(b,U,j,$,X,et){b.onBeforeRender(v,U,j,$,X,et),b.modelViewMatrix.multiplyMatrices(j.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),X.onBeforeRender(v,U,j,$,b,et),X.transparent===!0&&X.side===2&&X.forceSinglePass===!1?(X.side=1,X.needsUpdate=!0,v.renderBufferDirect(j,U,$,X,b,et),X.side=0,X.needsUpdate=!0,v.renderBufferDirect(j,U,$,X,b,et),X.side=2):v.renderBufferDirect(j,U,$,X,b,et),b.onAfterRender(v,U,j,$,X,et)}function sr(b,U,j){U.isScene!==!0&&(U=J);const $=G.get(b),X=m.state.lights,et=m.state.shadowsArray,dt=X.state.version,gt=Rt.getParameters(b,X.state,et,U,j),St=Rt.getProgramCacheKey(gt);let Ct=$.programs;$.environment=b.isMeshStandardMaterial?U.environment:null,$.fog=U.fog,$.envMap=(b.isMeshStandardMaterial?ct:mt).get(b.envMap||$.environment),$.envMapRotation=$.environment!==null&&b.envMap===null?U.environmentRotation:b.envMapRotation,Ct===void 0&&(b.addEventListener("dispose",Ba),Ct=new Map,$.programs=Ct);let It=Ct.get(St);if(It!==void 0){if($.currentProgram===It&&$.lightsStateVersion===dt)return qa(b,gt),It}else gt.uniforms=Rt.getUniforms(b),b.onBuild(j,gt,v),b.onBeforeCompile(gt,v),It=Rt.acquireProgram(gt,St),Ct.set(St,It),$.uniforms=gt.uniforms;const Tt=$.uniforms;return(b.isShaderMaterial||b.isRawShaderMaterial)&&b.clipping!==!0||(Tt.clippingPlanes=Ft.uniform),qa(b,gt),$.needsLights=function(Gt){return Gt.isMeshLambertMaterial||Gt.isMeshToonMaterial||Gt.isMeshPhongMaterial||Gt.isMeshStandardMaterial||Gt.isShadowMaterial||Gt.isShaderMaterial&&Gt.lights===!0}(b),$.lightsStateVersion=dt,$.needsLights&&(Tt.ambientLightColor.value=X.state.ambient,Tt.lightProbe.value=X.state.probe,Tt.directionalLights.value=X.state.directional,Tt.directionalLightShadows.value=X.state.directionalShadow,Tt.spotLights.value=X.state.spot,Tt.spotLightShadows.value=X.state.spotShadow,Tt.rectAreaLights.value=X.state.rectArea,Tt.ltc_1.value=X.state.rectAreaLTC1,Tt.ltc_2.value=X.state.rectAreaLTC2,Tt.pointLights.value=X.state.point,Tt.pointLightShadows.value=X.state.pointShadow,Tt.hemisphereLights.value=X.state.hemi,Tt.directionalShadowMap.value=X.state.directionalShadowMap,Tt.directionalShadowMatrix.value=X.state.directionalShadowMatrix,Tt.spotShadowMap.value=X.state.spotShadowMap,Tt.spotLightMatrix.value=X.state.spotLightMatrix,Tt.spotLightMap.value=X.state.spotLightMap,Tt.pointShadowMap.value=X.state.pointShadowMap,Tt.pointShadowMatrix.value=X.state.pointShadowMatrix),$.currentProgram=It,$.uniformsList=null,It}function Xa(b){if(b.uniformsList===null){const U=b.currentProgram.getUniforms();b.uniformsList=Gr.seqWithValue(U.seq,b.uniforms)}return b.uniformsList}function qa(b,U){const j=G.get(b);j.outputColorSpace=U.outputColorSpace,j.batching=U.batching,j.batchingColor=U.batchingColor,j.instancing=U.instancing,j.instancingColor=U.instancingColor,j.instancingMorph=U.instancingMorph,j.skinning=U.skinning,j.morphTargets=U.morphTargets,j.morphNormals=U.morphNormals,j.morphColors=U.morphColors,j.morphTargetsCount=U.morphTargetsCount,j.numClippingPlanes=U.numClippingPlanes,j.numIntersection=U.numClipIntersection,j.vertexAlphas=U.vertexAlphas,j.vertexTangents=U.vertexTangents,j.toneMapping=U.toneMapping}Ii.setAnimationLoop(function(b){vs&&vs(b)}),typeof self<"u"&&Ii.setContext(self),this.setAnimationLoop=function(b){vs=b,ce.setAnimationLoop(b),b===null?Ii.stop():Ii.start()},ce.addEventListener("sessionstart",Ha),ce.addEventListener("sessionend",Ga),this.render=function(b,U){if(U!==void 0&&U.isCamera!==!0||R===!0)return;if(b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),ce.enabled===!0&&ce.isPresenting===!0&&(ce.cameraAutoUpdate===!0&&ce.updateCamera(U),U=ce.getCamera()),b.isScene===!0&&b.onBeforeRender(v,b,U,C),m=vt.get(b,w.length),m.init(U),w.push(m),x.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),_t.setFromProjectionMatrix(x),M=this.localClippingEnabled,st=Ft.init(this.clippingPlanes,M),g=jt.get(b,y.length),g.init(),y.push(g),ce.enabled===!0&&ce.isPresenting===!0){const et=v.xr.getDepthSensingMesh();et!==null&&ys(et,U,-1/0,v.sortObjects)}ys(b,U,0,v.sortObjects),g.finish(),v.sortObjects===!0&&g.sort(lt,wt),B=ce.enabled===!1||ce.isPresenting===!1||ce.hasDepthSensing()===!1,B&&ne.addToRenderList(g,b),this.info.render.frame++,st===!0&&Ft.beginShadows();const j=m.state.shadowsArray;zt.render(j,b,U),st===!0&&Ft.endShadows(),this.info.autoReset===!0&&this.info.reset();const $=g.opaque,X=g.transmissive;if(m.setupLights(),U.isArrayCamera){const et=U.cameras;if(X.length>0)for(let dt=0,gt=et.length;dt<gt;dt++)Wa($,X,b,et[dt]);B&&ne.render(b);for(let dt=0,gt=et.length;dt<gt;dt++){const St=et[dt];Va(g,b,St,St.viewport)}}else X.length>0&&Wa($,X,b,U),B&&ne.render(b),Va(g,b,U);C!==null&&(rt.updateMultisampleRenderTarget(C),rt.updateRenderTargetMipmap(C)),b.isScene===!0&&b.onAfterRender(v,b,U),si.resetDefaultState(),k=-1,D=null,w.pop(),w.length>0?(m=w[w.length-1],st===!0&&Ft.setGlobalState(v.clippingPlanes,m.state.camera)):m=null,y.pop(),g=y.length>0?y[y.length-1]:null},this.getActiveCubeFace=function(){return N},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return C},this.setRenderTargetTextures=function(b,U,j){G.get(b.texture).__webglTexture=U,G.get(b.depthTexture).__webglTexture=j;const $=G.get(b);$.__hasExternalTextures=!0,$.__autoAllocateDepthBuffer=j===void 0,$.__autoAllocateDepthBuffer||S.has("WEBGL_multisampled_render_to_texture")===!0&&($.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(b,U){const j=G.get(b);j.__webglFramebuffer=U,j.__useDefaultFramebuffer=U===void 0},this.setRenderTarget=function(b,U=0,j=0){C=b,N=U,A=j;let $=!0,X=null,et=!1,dt=!1;if(b){const gt=G.get(b);gt.__useDefaultFramebuffer!==void 0?(z.bindFramebuffer(L.FRAMEBUFFER,null),$=!1):gt.__webglFramebuffer===void 0?rt.setupRenderTarget(b):gt.__hasExternalTextures&&rt.rebindTextures(b,G.get(b.texture).__webglTexture,G.get(b.depthTexture).__webglTexture);const St=b.texture;(St.isData3DTexture||St.isDataArrayTexture||St.isCompressedArrayTexture)&&(dt=!0);const Ct=G.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(X=Array.isArray(Ct[U])?Ct[U][j]:Ct[U],et=!0):X=b.samples>0&&rt.useMultisampledRTT(b)===!1?G.get(b).__webglMultisampledFramebuffer:Array.isArray(Ct)?Ct[j]:Ct,V.copy(b.viewport),Y.copy(b.scissor),H=b.scissorTest}else V.copy(At).multiplyScalar(at).floor(),Y.copy(tt).multiplyScalar(at).floor(),H=nt;if(z.bindFramebuffer(L.FRAMEBUFFER,X)&&$&&z.drawBuffers(b,X),z.viewport(V),z.scissor(Y),z.setScissorTest(H),et){const gt=G.get(b.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_CUBE_MAP_POSITIVE_X+U,gt.__webglTexture,j)}else if(dt){const gt=G.get(b.texture),St=U||0;L.framebufferTextureLayer(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,gt.__webglTexture,j||0,St)}k=-1},this.readRenderTargetPixels=function(b,U,j,$,X,et,dt){if(!b||!b.isWebGLRenderTarget)return;let gt=G.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&dt!==void 0&&(gt=gt[dt]),gt){z.bindFramebuffer(L.FRAMEBUFFER,gt);try{const St=b.texture,Ct=St.format,It=St.type;if(!F.textureFormatReadable(Ct)||!F.textureTypeReadable(It))return;U>=0&&U<=b.width-$&&j>=0&&j<=b.height-X&&L.readPixels(U,j,$,X,Ee.convert(Ct),Ee.convert(It),et)}finally{const St=C!==null?G.get(C).__webglFramebuffer:null;z.bindFramebuffer(L.FRAMEBUFFER,St)}}},this.readRenderTargetPixelsAsync=async function(b,U,j,$,X,et,dt){if(!b||!b.isWebGLRenderTarget)throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let gt=G.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&dt!==void 0&&(gt=gt[dt]),gt){z.bindFramebuffer(L.FRAMEBUFFER,gt);try{const St=b.texture,Ct=St.format,It=St.type;if(!F.textureFormatReadable(Ct))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!F.textureTypeReadable(It))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(U>=0&&U<=b.width-$&&j>=0&&j<=b.height-X){const Tt=L.createBuffer();L.bindBuffer(L.PIXEL_PACK_BUFFER,Tt),L.bufferData(L.PIXEL_PACK_BUFFER,et.byteLength,L.STREAM_READ),L.readPixels(U,j,$,X,Ee.convert(Ct),Ee.convert(It),0),L.flush();const Gt=L.fenceSync(L.SYNC_GPU_COMMANDS_COMPLETE,0);await function(re,de,pe){return new Promise(function(se,Wt){setTimeout(function he(){switch(re.clientWaitSync(de,re.SYNC_FLUSH_COMMANDS_BIT,0)){case re.WAIT_FAILED:Wt();break;case re.TIMEOUT_EXPIRED:setTimeout(he,pe);break;default:se()}},pe)})}(L,Gt,4);try{L.bindBuffer(L.PIXEL_PACK_BUFFER,Tt),L.getBufferSubData(L.PIXEL_PACK_BUFFER,0,et)}finally{L.deleteBuffer(Tt),L.deleteSync(Gt)}return et}}finally{const St=C!==null?G.get(C).__webglFramebuffer:null;z.bindFramebuffer(L.FRAMEBUFFER,St)}}},this.copyFramebufferToTexture=function(b,U=null,j=0){b.isTexture!==!0&&(U=arguments[0]||null,b=arguments[1]);const $=Math.pow(2,-j),X=Math.floor(b.image.width*$),et=Math.floor(b.image.height*$),dt=U!==null?U.x:0,gt=U!==null?U.y:0;rt.setTexture2D(b,0),L.copyTexSubImage2D(L.TEXTURE_2D,j,0,0,dt,gt,X,et),z.unbindTexture()},this.copyTextureToTexture=function(b,U,j=null,$=null,X=0){let et,dt,gt,St,Ct,It;b.isTexture!==!0&&($=arguments[0]||null,b=arguments[1],U=arguments[2],X=arguments[3]||0,j=null),j!==null?(et=j.max.x-j.min.x,dt=j.max.y-j.min.y,gt=j.min.x,St=j.min.y):(et=b.image.width,dt=b.image.height,gt=0,St=0),$!==null?(Ct=$.x,It=$.y):(Ct=0,It=0);const Tt=Ee.convert(U.format),Gt=Ee.convert(U.type);rt.setTexture2D(U,0),L.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,U.flipY),L.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),L.pixelStorei(L.UNPACK_ALIGNMENT,U.unpackAlignment);const re=L.getParameter(L.UNPACK_ROW_LENGTH),de=L.getParameter(L.UNPACK_IMAGE_HEIGHT),pe=L.getParameter(L.UNPACK_SKIP_PIXELS),se=L.getParameter(L.UNPACK_SKIP_ROWS),Wt=L.getParameter(L.UNPACK_SKIP_IMAGES),he=b.isCompressedTexture?b.mipmaps[X]:b.image;L.pixelStorei(L.UNPACK_ROW_LENGTH,he.width),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,he.height),L.pixelStorei(L.UNPACK_SKIP_PIXELS,gt),L.pixelStorei(L.UNPACK_SKIP_ROWS,St),b.isDataTexture?L.texSubImage2D(L.TEXTURE_2D,X,Ct,It,et,dt,Tt,Gt,he.data):b.isCompressedTexture?L.compressedTexSubImage2D(L.TEXTURE_2D,X,Ct,It,he.width,he.height,Tt,he.data):L.texSubImage2D(L.TEXTURE_2D,X,Ct,It,Tt,Gt,he),L.pixelStorei(L.UNPACK_ROW_LENGTH,re),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,de),L.pixelStorei(L.UNPACK_SKIP_PIXELS,pe),L.pixelStorei(L.UNPACK_SKIP_ROWS,se),L.pixelStorei(L.UNPACK_SKIP_IMAGES,Wt),X===0&&U.generateMipmaps&&L.generateMipmap(L.TEXTURE_2D),z.unbindTexture()},this.copyTextureToTexture3D=function(b,U,j=null,$=null,X=0){let et,dt,gt,St,Ct,It,Tt,Gt,re;b.isTexture!==!0&&(j=arguments[0]||null,$=arguments[1]||null,b=arguments[2],U=arguments[3],X=arguments[4]||0);const de=b.isCompressedTexture?b.mipmaps[X]:b.image;j!==null?(et=j.max.x-j.min.x,dt=j.max.y-j.min.y,gt=j.max.z-j.min.z,St=j.min.x,Ct=j.min.y,It=j.min.z):(et=de.width,dt=de.height,gt=de.depth,St=0,Ct=0,It=0),$!==null?(Tt=$.x,Gt=$.y,re=$.z):(Tt=0,Gt=0,re=0);const pe=Ee.convert(U.format),se=Ee.convert(U.type);let Wt;if(U.isData3DTexture)rt.setTexture3D(U,0),Wt=L.TEXTURE_3D;else{if(!U.isDataArrayTexture&&!U.isCompressedArrayTexture)return;rt.setTexture2DArray(U,0),Wt=L.TEXTURE_2D_ARRAY}L.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,U.flipY),L.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),L.pixelStorei(L.UNPACK_ALIGNMENT,U.unpackAlignment);const he=L.getParameter(L.UNPACK_ROW_LENGTH),Le=L.getParameter(L.UNPACK_IMAGE_HEIGHT),Ut=L.getParameter(L.UNPACK_SKIP_PIXELS),Dt=L.getParameter(L.UNPACK_SKIP_ROWS),In=L.getParameter(L.UNPACK_SKIP_IMAGES);L.pixelStorei(L.UNPACK_ROW_LENGTH,de.width),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,de.height),L.pixelStorei(L.UNPACK_SKIP_PIXELS,St),L.pixelStorei(L.UNPACK_SKIP_ROWS,Ct),L.pixelStorei(L.UNPACK_SKIP_IMAGES,It),b.isDataTexture||b.isData3DTexture?L.texSubImage3D(Wt,X,Tt,Gt,re,et,dt,gt,pe,se,de.data):U.isCompressedArrayTexture?L.compressedTexSubImage3D(Wt,X,Tt,Gt,re,et,dt,gt,pe,de.data):L.texSubImage3D(Wt,X,Tt,Gt,re,et,dt,gt,pe,se,de),L.pixelStorei(L.UNPACK_ROW_LENGTH,he),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,Le),L.pixelStorei(L.UNPACK_SKIP_PIXELS,Ut),L.pixelStorei(L.UNPACK_SKIP_ROWS,Dt),L.pixelStorei(L.UNPACK_SKIP_IMAGES,In),X===0&&U.generateMipmaps&&L.generateMipmap(Wt),z.unbindTexture()},this.initRenderTarget=function(b){G.get(b).__webglFramebuffer===void 0&&rt.setupRenderTarget(b)},this.initTexture=function(b){b.isCubeTexture?rt.setTextureCube(b,0):b.isData3DTexture?rt.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?rt.setTexture2DArray(b,0):rt.setTexture2D(b,0),z.unbindTexture()},this.resetState=function(){N=0,A=0,C=null,z.reset(),si.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return rn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=t===Ds?"display-p3":"srgb",e.unpackColorSpace=Xt.workingColorSpace===dr?"display-p3":"srgb"}}class Ta{constructor(t,e=1,i=1e3){this.isFog=!0,this.name="",this.color=new kt(t),this.near=e,this.far=i}clone(){return new Ta(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class eu extends xe{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ni,this.environmentIntensity=1,this.environmentRotation=new ni,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class ca extends wn{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new kt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const Vr=new E,Wr=new E,cl=new ee,qn=new co,jr=new br,ha=new E,hl=new E;class dl extends xe{constructor(t=new Re,e=new ca){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,i=[0];for(let n=1,s=e.count;n<s;n++)Vr.fromBufferAttribute(e,n-1),Wr.fromBufferAttribute(e,n),i[n]=i[n-1],i[n]+=Vr.distanceTo(Wr);t.setAttribute("lineDistance",new ae(i,1))}return this}raycast(t,e){const i=this.geometry,n=this.matrixWorld,s=t.params.Line.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),jr.copy(i.boundingSphere),jr.applyMatrix4(n),jr.radius+=s,t.ray.intersectsSphere(jr)===!1)return;cl.copy(n).invert(),qn.copy(t.ray).applyMatrix4(cl);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,h=i.index,d=i.attributes.position;if(h!==null){const p=Math.max(0,a.start),_=Math.min(h.count,a.start+a.count);for(let f=p,g=_-1;f<g;f+=c){const m=h.getX(f),y=h.getX(f+1),w=Xr(this,t,qn,l,m,y);w&&e.push(w)}if(this.isLineLoop){const f=h.getX(_-1),g=h.getX(p),m=Xr(this,t,qn,l,f,g);m&&e.push(m)}}else{const p=Math.max(0,a.start),_=Math.min(d.count,a.start+a.count);for(let f=p,g=_-1;f<g;f+=c){const m=Xr(this,t,qn,l,f,f+1);m&&e.push(m)}if(this.isLineLoop){const f=Xr(this,t,qn,l,_-1,p);f&&e.push(f)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,e=Object.keys(t);if(e.length>0){const i=t[e[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let n=0,s=i.length;n<s;n++){const a=i[n].name||String(n);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=n}}}}}function Xr(r,t,e,i,n,s){const a=r.geometry.attributes.position;if(Vr.fromBufferAttribute(a,n),Wr.fromBufferAttribute(a,s),e.distanceSqToSegment(Vr,Wr,ha,hl)>i)return;ha.applyMatrix4(r.matrixWorld);const o=t.ray.origin.distanceTo(ha);return o<t.near||o>t.far?void 0:{distance:o,point:hl.clone().applyMatrix4(r.matrixWorld),index:n,face:null,faceIndex:null,object:r}}const ul=new E,pl=new E;class iu extends dl{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,i=[];for(let n=0,s=e.count;n<s;n+=2)ul.fromBufferAttribute(e,n),pl.fromBufferAttribute(e,n+1),i[n]=n===0?0:i[n-1],i[n+1]=i[n]+ul.distanceTo(pl);t.setAttribute("lineDistance",new ae(i,1))}return this}}class Qe{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return null}getPointAt(t,e){const i=this.getUtoTmapping(t);return this.getPoint(i,e)}getPoints(t=5){const e=[];for(let i=0;i<=t;i++)e.push(this.getPoint(i/t));return e}getSpacedPoints(t=5){const e=[];for(let i=0;i<=t;i++)e.push(this.getPointAt(i/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let i,n=this.getPoint(0),s=0;e.push(0);for(let a=1;a<=t;a++)i=this.getPoint(a/t),s+=i.distanceTo(n),e.push(s),n=i;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){const i=this.getLengths();let n=0;const s=i.length;let a;a=e||t*i[s-1];let o,l=0,c=s-1;for(;l<=c;)if(n=Math.floor(l+(c-l)/2),o=i[n]-a,o<0)l=n+1;else{if(!(o>0)){c=n;break}c=n-1}if(n=c,i[n]===a)return n/(s-1);const h=i[n];return(n+(a-h)/(i[n+1]-h))/(s-1)}getTangent(t,e){let n=t-1e-4,s=t+1e-4;n<0&&(n=0),s>1&&(s=1);const a=this.getPoint(n),o=this.getPoint(s),l=e||(a.isVector2?new ut:new E);return l.copy(o).sub(a).normalize(),l}getTangentAt(t,e){const i=this.getUtoTmapping(t);return this.getTangent(i,e)}computeFrenetFrames(t,e){const i=new E,n=[],s=[],a=[],o=new E,l=new ee;for(let _=0;_<=t;_++){const f=_/t;n[_]=this.getTangentAt(f,new E)}s[0]=new E,a[0]=new E;let c=Number.MAX_VALUE;const h=Math.abs(n[0].x),d=Math.abs(n[0].y),p=Math.abs(n[0].z);h<=c&&(c=h,i.set(1,0,0)),d<=c&&(c=d,i.set(0,1,0)),p<=c&&i.set(0,0,1),o.crossVectors(n[0],i).normalize(),s[0].crossVectors(n[0],o),a[0].crossVectors(n[0],s[0]);for(let _=1;_<=t;_++){if(s[_]=s[_-1].clone(),a[_]=a[_-1].clone(),o.crossVectors(n[_-1],n[_]),o.length()>Number.EPSILON){o.normalize();const f=Math.acos(we(n[_-1].dot(n[_]),-1,1));s[_].applyMatrix4(l.makeRotationAxis(o,f))}a[_].crossVectors(n[_],s[_])}if(e===!0){let _=Math.acos(we(s[0].dot(s[t]),-1,1));_/=t,n[0].dot(o.crossVectors(s[0],s[t]))>0&&(_=-_);for(let f=1;f<=t;f++)s[f].applyMatrix4(l.makeRotationAxis(n[f],_*f)),a[f].crossVectors(n[f],s[f])}return{tangents:n,normals:s,binormals:a}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class da extends Qe{constructor(t=0,e=0,i=1,n=1,s=0,a=2*Math.PI,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=i,this.yRadius=n,this.aStartAngle=s,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(t,e=new ut){const i=e,n=2*Math.PI;let s=this.aEndAngle-this.aStartAngle;const a=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=n;for(;s>n;)s-=n;s<Number.EPSILON&&(s=a?0:n),this.aClockwise!==!0||a||(s===n?s=-n:s-=n);const o=this.aStartAngle+t*s;let l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){const h=Math.cos(this.aRotation),d=Math.sin(this.aRotation),p=l-this.aX,_=c-this.aY;l=p*h-_*d+this.aX,c=p*d+_*h+this.aY}return i.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}function ua(){let r=0,t=0,e=0,i=0;function n(s,a,o,l){r=s,t=o,e=-3*s+3*a-2*o-l,i=2*s-2*a+o+l}return{initCatmullRom:function(s,a,o,l,c){n(a,o,c*(o-s),c*(l-a))},initNonuniformCatmullRom:function(s,a,o,l,c,h,d){let p=(a-s)/c-(o-s)/(c+h)+(o-a)/h,_=(o-a)/h-(l-a)/(h+d)+(l-o)/d;p*=h,_*=h,n(a,o,p,_)},calc:function(s){const a=s*s;return r+t*s+e*a+i*(a*s)}}}const qr=new E,pa=new ua,_a=new ua,ma=new ua;function _l(r,t,e,i,n){const s=.5*(i-t),a=.5*(n-e),o=r*r;return(2*e-2*i+s+a)*(r*o)+(-3*e+3*i-2*s-a)*o+s*r+e}function Yn(r,t,e,i){return function(n,s){const a=1-n;return a*a*s}(r,t)+function(n,s){return 2*(1-n)*n*s}(r,e)+function(n,s){return n*n*s}(r,i)}function Jn(r,t,e,i,n){return function(s,a){const o=1-s;return o*o*o*a}(r,t)+function(s,a){const o=1-s;return 3*o*o*s*a}(r,e)+function(s,a){return 3*(1-s)*s*s*a}(r,i)+function(s,a){return s*s*s*a}(r,n)}class ml extends Qe{constructor(t=new ut,e=new ut,i=new ut,n=new ut){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=i,this.v3=n}getPoint(t,e=new ut){const i=e,n=this.v0,s=this.v1,a=this.v2,o=this.v3;return i.set(Jn(t,n.x,s.x,a.x,o.x),Jn(t,n.y,s.y,a.y,o.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class fl extends Qe{constructor(t=new ut,e=new ut){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new ut){const i=e;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new ut){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class gl extends Qe{constructor(t=new ut,e=new ut,i=new ut){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=i}getPoint(t,e=new ut){const i=e,n=this.v0,s=this.v1,a=this.v2;return i.set(Yn(t,n.x,s.x,a.x),Yn(t,n.y,s.y,a.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class wl extends Qe{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new ut){const i=e,n=this.points,s=(n.length-1)*t,a=Math.floor(s),o=s-a,l=n[a===0?a:a-1],c=n[a],h=n[a>n.length-2?n.length-1:a+1],d=n[a>n.length-3?n.length-1:a+2];return i.set(_l(o,l.x,c.x,h.x,d.x),_l(o,l.y,c.y,h.y,d.y)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const n=t.points[e];this.points.push(n.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){const n=this.points[e];t.points.push(n.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const n=t.points[e];this.points.push(new ut().fromArray(n))}return this}}var vl=Object.freeze({__proto__:null,ArcCurve:class extends da{constructor(r,t,e,i,n,s){super(r,t,e,e,i,n,s),this.isArcCurve=!0,this.type="ArcCurve"}},CatmullRomCurve3:class extends Qe{constructor(r=[],t=!1,e="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=r,this.closed=t,this.curveType=e,this.tension=i}getPoint(r,t=new E){const e=t,i=this.points,n=i.length,s=(n-(this.closed?0:1))*r;let a,o,l=Math.floor(s),c=s-l;this.closed?l+=l>0?0:(Math.floor(Math.abs(l)/n)+1)*n:c===0&&l===n-1&&(l=n-2,c=1),this.closed||l>0?a=i[(l-1)%n]:(qr.subVectors(i[0],i[1]).add(i[0]),a=qr);const h=i[l%n],d=i[(l+1)%n];if(this.closed||l+2<n?o=i[(l+2)%n]:(qr.subVectors(i[n-1],i[n-2]).add(i[n-1]),o=qr),this.curveType==="centripetal"||this.curveType==="chordal"){const p=this.curveType==="chordal"?.5:.25;let _=Math.pow(a.distanceToSquared(h),p),f=Math.pow(h.distanceToSquared(d),p),g=Math.pow(d.distanceToSquared(o),p);f<1e-4&&(f=1),_<1e-4&&(_=f),g<1e-4&&(g=f),pa.initNonuniformCatmullRom(a.x,h.x,d.x,o.x,_,f,g),_a.initNonuniformCatmullRom(a.y,h.y,d.y,o.y,_,f,g),ma.initNonuniformCatmullRom(a.z,h.z,d.z,o.z,_,f,g)}else this.curveType==="catmullrom"&&(pa.initCatmullRom(a.x,h.x,d.x,o.x,this.tension),_a.initCatmullRom(a.y,h.y,d.y,o.y,this.tension),ma.initCatmullRom(a.z,h.z,d.z,o.z,this.tension));return e.set(pa.calc(c),_a.calc(c),ma.calc(c)),e}copy(r){super.copy(r),this.points=[];for(let t=0,e=r.points.length;t<e;t++){const i=r.points[t];this.points.push(i.clone())}return this.closed=r.closed,this.curveType=r.curveType,this.tension=r.tension,this}toJSON(){const r=super.toJSON();r.points=[];for(let t=0,e=this.points.length;t<e;t++){const i=this.points[t];r.points.push(i.toArray())}return r.closed=this.closed,r.curveType=this.curveType,r.tension=this.tension,r}fromJSON(r){super.fromJSON(r),this.points=[];for(let t=0,e=r.points.length;t<e;t++){const i=r.points[t];this.points.push(new E().fromArray(i))}return this.closed=r.closed,this.curveType=r.curveType,this.tension=r.tension,this}},CubicBezierCurve:ml,CubicBezierCurve3:class extends Qe{constructor(r=new E,t=new E,e=new E,i=new E){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=r,this.v1=t,this.v2=e,this.v3=i}getPoint(r,t=new E){const e=t,i=this.v0,n=this.v1,s=this.v2,a=this.v3;return e.set(Jn(r,i.x,n.x,s.x,a.x),Jn(r,i.y,n.y,s.y,a.y),Jn(r,i.z,n.z,s.z,a.z)),e}copy(r){return super.copy(r),this.v0.copy(r.v0),this.v1.copy(r.v1),this.v2.copy(r.v2),this.v3.copy(r.v3),this}toJSON(){const r=super.toJSON();return r.v0=this.v0.toArray(),r.v1=this.v1.toArray(),r.v2=this.v2.toArray(),r.v3=this.v3.toArray(),r}fromJSON(r){return super.fromJSON(r),this.v0.fromArray(r.v0),this.v1.fromArray(r.v1),this.v2.fromArray(r.v2),this.v3.fromArray(r.v3),this}},EllipseCurve:da,LineCurve:fl,LineCurve3:class extends Qe{constructor(r=new E,t=new E){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=r,this.v2=t}getPoint(r,t=new E){const e=t;return r===1?e.copy(this.v2):(e.copy(this.v2).sub(this.v1),e.multiplyScalar(r).add(this.v1)),e}getPointAt(r,t){return this.getPoint(r,t)}getTangent(r,t=new E){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(r,t){return this.getTangent(r,t)}copy(r){return super.copy(r),this.v1.copy(r.v1),this.v2.copy(r.v2),this}toJSON(){const r=super.toJSON();return r.v1=this.v1.toArray(),r.v2=this.v2.toArray(),r}fromJSON(r){return super.fromJSON(r),this.v1.fromArray(r.v1),this.v2.fromArray(r.v2),this}},QuadraticBezierCurve:gl,QuadraticBezierCurve3:class extends Qe{constructor(r=new E,t=new E,e=new E){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=r,this.v1=t,this.v2=e}getPoint(r,t=new E){const e=t,i=this.v0,n=this.v1,s=this.v2;return e.set(Yn(r,i.x,n.x,s.x),Yn(r,i.y,n.y,s.y),Yn(r,i.z,n.z,s.z)),e}copy(r){return super.copy(r),this.v0.copy(r.v0),this.v1.copy(r.v1),this.v2.copy(r.v2),this}toJSON(){const r=super.toJSON();return r.v0=this.v0.toArray(),r.v1=this.v1.toArray(),r.v2=this.v2.toArray(),r}fromJSON(r){return super.fromJSON(r),this.v0.fromArray(r.v0),this.v1.fromArray(r.v1),this.v2.fromArray(r.v2),this}},SplineCurve:wl});class nu extends Qe{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){const i=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new vl[i](e,t))}return this}getPoint(t,e){const i=t*this.getLength(),n=this.getCurveLengths();let s=0;for(;s<n.length;){if(n[s]>=i){const a=n[s]-i,o=this.curves[s],l=o.getLength(),c=l===0?0:1-a/l;return o.getPointAt(c,e)}s++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let i=0,n=this.curves.length;i<n;i++)e+=this.curves[i].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let i=0;i<=t;i++)e.push(this.getPoint(i/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let i;for(let n=0,s=this.curves;n<s.length;n++){const a=s[n],o=a.isEllipseCurve?2*t:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?t*a.points.length:t,l=a.getPoints(o);for(let c=0;c<l.length;c++){const h=l[c];i&&i.equals(h)||(e.push(h),i=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,i=t.curves.length;e<i;e++){const n=t.curves[e];this.curves.push(n.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,i=this.curves.length;e<i;e++){const n=this.curves[e];t.curves.push(n.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,i=t.curves.length;e<i;e++){const n=t.curves[e];this.curves.push(new vl[n.type]().fromJSON(n))}return this}}class ru extends nu{constructor(t){super(),this.type="Path",this.currentPoint=new ut,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,i=t.length;e<i;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const i=new fl(this.currentPoint.clone(),new ut(t,e));return this.curves.push(i),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,i,n){const s=new gl(this.currentPoint.clone(),new ut(t,e),new ut(i,n));return this.curves.push(s),this.currentPoint.set(i,n),this}bezierCurveTo(t,e,i,n,s,a){const o=new ml(this.currentPoint.clone(),new ut(t,e),new ut(i,n),new ut(s,a));return this.curves.push(o),this.currentPoint.set(s,a),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),i=new wl(e);return this.curves.push(i),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,i,n,s,a){const o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+o,e+l,i,n,s,a),this}absarc(t,e,i,n,s,a){return this.absellipse(t,e,i,i,n,s,a),this}ellipse(t,e,i,n,s,a,o,l){const c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+c,e+h,i,n,s,a,o,l),this}absellipse(t,e,i,n,s,a,o,l){const c=new da(t,e,i,n,s,a,o,l);if(this.curves.length>0){const d=c.getPoint(0);d.equals(this.currentPoint)||this.lineTo(d.x,d.y)}this.curves.push(c);const h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class Aa extends Re{constructor(t=[new ut(0,-.5),new ut(.5,0),new ut(0,.5)],e=12,i=0,n=2*Math.PI){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:i,phiLength:n},e=Math.floor(e),n=we(n,0,2*Math.PI);const s=[],a=[],o=[],l=[],c=[],h=1/e,d=new E,p=new ut,_=new E,f=new E,g=new E;let m=0,y=0;for(let w=0;w<=t.length-1;w++)switch(w){case 0:m=t[w+1].x-t[w].x,y=t[w+1].y-t[w].y,_.x=1*y,_.y=-m,_.z=0*y,g.copy(_),_.normalize(),l.push(_.x,_.y,_.z);break;case t.length-1:l.push(g.x,g.y,g.z);break;default:m=t[w+1].x-t[w].x,y=t[w+1].y-t[w].y,_.x=1*y,_.y=-m,_.z=0*y,f.copy(_),_.x+=g.x,_.y+=g.y,_.z+=g.z,_.normalize(),l.push(_.x,_.y,_.z),g.copy(f)}for(let w=0;w<=e;w++){const v=i+w*h*n,R=Math.sin(v),N=Math.cos(v);for(let A=0;A<=t.length-1;A++){d.x=t[A].x*R,d.y=t[A].y,d.z=t[A].x*N,a.push(d.x,d.y,d.z),p.x=w/e,p.y=A/(t.length-1),o.push(p.x,p.y);const C=l[3*A+0]*R,k=l[3*A+1],D=l[3*A+0]*N;c.push(C,k,D)}}for(let w=0;w<e;w++)for(let v=0;v<t.length-1;v++){const R=v+w*t.length,N=R,A=R+t.length,C=R+t.length+1,k=R+1;s.push(N,A,k),s.push(C,k,A)}this.setIndex(s),this.setAttribute("position",new ae(a,3)),this.setAttribute("uv",new ae(o,2)),this.setAttribute("normal",new ae(c,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Aa(t.points,t.segments,t.phiStart,t.phiLength)}}class Ra extends Aa{constructor(t=1,e=1,i=4,n=8){const s=new ru;s.absarc(0,-e/2,t,1.5*Math.PI,0),s.absarc(0,e/2,t,0,.5*Math.PI),super(s.getPoints(i),n),this.type="CapsuleGeometry",this.parameters={radius:t,length:e,capSegments:i,radialSegments:n}}static fromJSON(t){return new Ra(t.radius,t.length,t.capSegments,t.radialSegments)}}class pi extends Re{constructor(t=1,e=1,i=1,n=32,s=1,a=!1,o=0,l=2*Math.PI){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:i,radialSegments:n,heightSegments:s,openEnded:a,thetaStart:o,thetaLength:l};const c=this;n=Math.floor(n),s=Math.floor(s);const h=[],d=[],p=[],_=[];let f=0;const g=[],m=i/2;let y=0;function w(v){const R=f,N=new ut,A=new E;let C=0;const k=v===!0?t:e,D=v===!0?1:-1;for(let Y=1;Y<=n;Y++)d.push(0,m*D,0),p.push(0,D,0),_.push(.5,.5),f++;const V=f;for(let Y=0;Y<=n;Y++){const H=Y/n*l+o,Z=Math.cos(H),W=Math.sin(H);A.x=k*W,A.y=m*D,A.z=k*Z,d.push(A.x,A.y,A.z),p.push(0,D,0),N.x=.5*Z+.5,N.y=.5*W*D+.5,_.push(N.x,N.y),f++}for(let Y=0;Y<n;Y++){const H=R+Y,Z=V+Y;v===!0?h.push(Z,Z+1,H):h.push(Z+1,Z,H),C+=3}c.addGroup(y,C,v===!0?1:2),y+=C}(function(){const v=new E,R=new E;let N=0;const A=(e-t)/i;for(let C=0;C<=s;C++){const k=[],D=C/s,V=D*(e-t)+t;for(let Y=0;Y<=n;Y++){const H=Y/n,Z=H*l+o,W=Math.sin(Z),Q=Math.cos(Z);R.x=V*W,R.y=-D*i+m,R.z=V*Q,d.push(R.x,R.y,R.z),v.set(W,A,Q).normalize(),p.push(v.x,v.y,v.z),_.push(H,1-D),k.push(f++)}g.push(k)}for(let C=0;C<n;C++)for(let k=0;k<s;k++){const D=g[k][C],V=g[k+1][C],Y=g[k+1][C+1],H=g[k][C+1];h.push(D,V,H),h.push(V,Y,H),N+=6}c.addGroup(y,N,0),y+=N})(),a===!1&&(t>0&&w(!0),e>0&&w(!1)),this.setIndex(h),this.setAttribute("position",new ae(d,3)),this.setAttribute("normal",new ae(p,3)),this.setAttribute("uv",new ae(_,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new pi(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Oe extends Re{constructor(t=1,e=32,i=16,n=0,s=2*Math.PI,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:i,phiStart:n,phiLength:s,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),i=Math.max(2,Math.floor(i));const l=Math.min(a+o,Math.PI);let c=0;const h=[],d=new E,p=new E,_=[],f=[],g=[],m=[];for(let y=0;y<=i;y++){const w=[],v=y/i;let R=0;y===0&&a===0?R=.5/e:y===i&&l===Math.PI&&(R=-.5/e);for(let N=0;N<=e;N++){const A=N/e;d.x=-t*Math.cos(n+A*s)*Math.sin(a+v*o),d.y=t*Math.cos(a+v*o),d.z=t*Math.sin(n+A*s)*Math.sin(a+v*o),f.push(d.x,d.y,d.z),p.copy(d).normalize(),g.push(p.x,p.y,p.z),m.push(A+R,1-v),w.push(c++)}h.push(w)}for(let y=0;y<i;y++)for(let w=0;w<e;w++){const v=h[y][w+1],R=h[y][w],N=h[y+1][w],A=h[y+1][w+1];(y!==0||a>0)&&_.push(v,R,A),(y!==i-1||l<Math.PI)&&_.push(R,N,A)}this.setIndex(_),this.setAttribute("position",new ae(f,3)),this.setAttribute("normal",new ae(g,3)),this.setAttribute("uv",new ae(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Oe(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class Ca extends Re{constructor(t=1,e=.4,i=12,n=48,s=2*Math.PI){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:i,tubularSegments:n,arc:s},i=Math.floor(i),n=Math.floor(n);const a=[],o=[],l=[],c=[],h=new E,d=new E,p=new E;for(let _=0;_<=i;_++)for(let f=0;f<=n;f++){const g=f/n*s,m=_/i*Math.PI*2;d.x=(t+e*Math.cos(m))*Math.cos(g),d.y=(t+e*Math.cos(m))*Math.sin(g),d.z=e*Math.sin(m),o.push(d.x,d.y,d.z),h.x=t*Math.cos(g),h.y=t*Math.sin(g),p.subVectors(d,h).normalize(),l.push(p.x,p.y,p.z),c.push(f/n),c.push(_/i)}for(let _=1;_<=i;_++)for(let f=1;f<=n;f++){const g=(n+1)*_+f-1,m=(n+1)*(_-1)+f-1,y=(n+1)*(_-1)+f,w=(n+1)*_+f;a.push(g,m,w),a.push(m,y,w)}this.setIndex(a),this.setAttribute("position",new ae(o,3)),this.setAttribute("normal",new ae(l,3)),this.setAttribute("uv",new ae(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ca(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class ti extends wn{constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new kt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new kt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new ut(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ni,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class fa extends xe{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new kt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),e}}const ga=new ee,yl=new E,bl=new E;class xl{constructor(t){this.camera=t,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ut(512,512),this.map=null,this.mapPass=null,this.matrix=new ee,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Qs,this._frameExtents=new ut(1,1),this._viewportCount=1,this._viewports=[new te(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,i=this.matrix;yl.setFromMatrixPosition(t.matrixWorld),e.position.copy(yl),bl.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(bl),e.updateMatrixWorld(),ga.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ga),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(ga)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),this.mapSize.x===512&&this.mapSize.y===512||(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const Sl=new ee,Kn=new E,wa=new E;class su extends xl{constructor(){super(new Ue(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new ut(4,2),this._viewportCount=6,this._viewports=[new te(2,1,1,1),new te(0,1,1,1),new te(3,1,1,1),new te(1,1,1,1),new te(3,0,1,1),new te(1,0,1,1)],this._cubeDirections=[new E(1,0,0),new E(-1,0,0),new E(0,0,1),new E(0,0,-1),new E(0,1,0),new E(0,-1,0)],this._cubeUps=[new E(0,1,0),new E(0,1,0),new E(0,1,0),new E(0,1,0),new E(0,0,1),new E(0,0,-1)]}updateMatrices(t,e=0){const i=this.camera,n=this.matrix,s=t.distance||i.far;s!==i.far&&(i.far=s,i.updateProjectionMatrix()),Kn.setFromMatrixPosition(t.matrixWorld),i.position.copy(Kn),wa.copy(i.position),wa.add(this._cubeDirections[e]),i.up.copy(this._cubeUps[e]),i.lookAt(wa),i.updateMatrixWorld(),n.makeTranslation(-Kn.x,-Kn.y,-Kn.z),Sl.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Sl)}}class au extends fa{constructor(t,e,i=0,n=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=n,this.shadow=new su}get power(){return 4*this.intensity*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class ou extends xl{constructor(){super(new Uo(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Ml extends fa{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(xe.DEFAULT_UP),this.updateMatrix(),this.target=new xe,this.shadow=new ou}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class lu extends fa{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}class cu{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=El(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=El();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}function El(){return(typeof performance>"u"?Date:performance).now()}class hu extends iu{constructor(t=10,e=10,i=4473924,n=8947848){i=new kt(i),n=new kt(n);const s=e/2,a=t/e,o=t/2,l=[],c=[];for(let d=0,p=0,_=-o;d<=e;d++,_+=a){l.push(-o,0,_,o,0,_),l.push(_,0,-o,_,0,o);const f=d===s?i:n;f.toArray(c,p),p+=3,f.toArray(c,p),p+=3,f.toArray(c,p),p+=3,f.toArray(c,p),p+=3}const h=new Re;h.setAttribute("position",new ae(l,3)),h.setAttribute("color",new ae(c,3)),super(h,new ca({vertexColors:!0,toneMapped:!1})),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}let u;typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Ms}})),typeof window<"u"&&(window.__THREE__||(window.__THREE__=Ms));const Vt=new Array(128).fill(void 0);Vt.push(void 0,null,!0,!1);let Zn=Vt.length;function Rn(r){Zn===Vt.length&&Vt.push(Vt.length+1);const t=Zn;return Zn=Vt[t],Vt[t]=r,t}function Yr(r){const t=function(e){return Vt[e]}(r);return function(e){e<132||(Vt[e]=Zn,Zn=e)}(r),t}function ft(r){return r==null}let Jr=null;function Kr(){return Jr!==null&&Jr.byteLength!==0||(Jr=new Float64Array(u.memory.buffer)),Jr}let Zr=null;function Et(){return Zr!==null&&Zr.byteLength!==0||(Zr=new Int32Array(u.memory.buffer)),Zr}function T(r,t){if(!(r instanceof t))throw new Error(`expected instance of ${t.name}`);return r.ptr}new(typeof TextDecoder>"u"?(0,ac.require)("util").TextDecoder:TextDecoder)("utf-8",{ignoreBOM:!0,fatal:!0}).decode();let $r=null;function Zt(){return $r!==null&&$r.byteLength!==0||($r=new Float32Array(u.memory.buffer)),$r}let Jt=128;function Qt(r){if(Jt==1)throw new Error("out of js stack");return Vt[--Jt]=r,Jt}function Tl(r,t){return r>>>=0,Zt().subarray(r/4,r/4+t)}let Qr=null;function Al(){return Qr!==null&&Qr.byteLength!==0||(Qr=new Uint32Array(u.memory.buffer)),Qr}let Ne=0;function Wi(r,t){const e=t(4*r.length,4)>>>0;return Zt().set(r,e/4),Ne=r.length,e}function ts(r,t){const e=t(4*r.length,4)>>>0;return Al().set(r,e/4),Ne=r.length,e}const be=Object.freeze({Ball:0,0:"Ball",Cuboid:1,1:"Cuboid",Capsule:2,2:"Capsule",Segment:3,3:"Segment",Polyline:4,4:"Polyline",Triangle:5,5:"Triangle",TriMesh:6,6:"TriMesh",HeightField:7,7:"HeightField",Compound:8,8:"Compound",ConvexPolyhedron:9,9:"ConvexPolyhedron",Cylinder:10,10:"Cylinder",Cone:11,11:"Cone",RoundCuboid:12,12:"RoundCuboid",RoundTriangle:13,13:"RoundTriangle",RoundCylinder:14,14:"RoundCylinder",RoundCone:15,15:"RoundCone",RoundConvexPolyhedron:16,16:"RoundConvexPolyhedron",HalfSpace:17,17:"HalfSpace"}),qe=Object.freeze({Revolute:0,0:"Revolute",Fixed:1,1:"Fixed",Prismatic:2,2:"Prismatic",Rope:3,3:"Rope",Spring:4,4:"Spring",Spherical:5,5:"Spherical",Generic:6,6:"Generic"}),es=Object.freeze({X:0,0:"X",Y:1,1:"Y",Z:2,2:"Z",AngX:3,3:"AngX",AngY:4,4:"AngY",AngZ:5,5:"AngZ"});class ji{static __wrap(t){t>>>=0;const e=Object.create(ji.prototype);return e.__wbg_ptr=t,e}__destroy_into_raw(){const t=this.__wbg_ptr;return this.__wbg_ptr=0,t}free(){const t=this.__destroy_into_raw();u.__wbg_rawbroadphase_free(t)}constructor(){const t=u.rawbroadphase_new();return this.__wbg_ptr=t>>>0,this}}class va{__destroy_into_raw(){const t=this.__wbg_ptr;return this.__wbg_ptr=0,t}free(){const t=this.__destroy_into_raw();u.__wbg_rawccdsolver_free(t)}constructor(){const t=u.rawccdsolver_new();return this.__wbg_ptr=t>>>0,this}}class Rl{__destroy_into_raw(){const t=this.__wbg_ptr;return this.__wbg_ptr=0,t}free(){const t=this.__destroy_into_raw();u.__wbg_rawcharactercollision_free(t)}constructor(){const t=u.rawcharactercollision_new();return this.__wbg_ptr=t>>>0,this}handle(){return u.rawcharactercollision_handle(this.__wbg_ptr)}translationDeltaApplied(){const t=u.rawcharactercollision_translationDeltaApplied(this.__wbg_ptr);return P.__wrap(t)}translationDeltaRemaining(){const t=u.rawcharactercollision_translationDeltaRemaining(this.__wbg_ptr);return P.__wrap(t)}toi(){return u.rawcharactercollision_toi(this.__wbg_ptr)}worldWitness1(){const t=u.rawcharactercollision_worldWitness1(this.__wbg_ptr);return P.__wrap(t)}worldWitness2(){const t=u.rawcharactercollision_worldWitness2(this.__wbg_ptr);return P.__wrap(t)}worldNormal1(){const t=u.rawcharactercollision_worldNormal1(this.__wbg_ptr);return P.__wrap(t)}worldNormal2(){const t=u.rawcharactercollision_worldNormal2(this.__wbg_ptr);return P.__wrap(t)}}class oe{static __wrap(t){t>>>=0;const e=Object.create(oe.prototype);return e.__wbg_ptr=t,e}__destroy_into_raw(){const t=this.__wbg_ptr;return this.__wbg_ptr=0,t}free(){const t=this.__destroy_into_raw();u.__wbg_rawcolliderset_free(t)}coTranslation(t){const e=u.rawcolliderset_coTranslation(this.__wbg_ptr,t);return P.__wrap(e)}coRotation(t){const e=u.rawcolliderset_coRotation(this.__wbg_ptr,t);return Ot.__wrap(e)}coSetTranslation(t,e,i,n){u.rawcolliderset_coSetTranslation(this.__wbg_ptr,t,e,i,n)}coSetTranslationWrtParent(t,e,i,n){u.rawcolliderset_coSetTranslationWrtParent(this.__wbg_ptr,t,e,i,n)}coSetRotation(t,e,i,n,s){u.rawcolliderset_coSetRotation(this.__wbg_ptr,t,e,i,n,s)}coSetRotationWrtParent(t,e,i,n,s){u.rawcolliderset_coSetRotationWrtParent(this.__wbg_ptr,t,e,i,n,s)}coIsSensor(t){return u.rawcolliderset_coIsSensor(this.__wbg_ptr,t)!==0}coShapeType(t){return u.rawcolliderset_coShapeType(this.__wbg_ptr,t)}coHalfspaceNormal(t){const e=u.rawcolliderset_coHalfspaceNormal(this.__wbg_ptr,t);return e===0?void 0:P.__wrap(e)}coHalfExtents(t){const e=u.rawcolliderset_coHalfExtents(this.__wbg_ptr,t);return e===0?void 0:P.__wrap(e)}coSetHalfExtents(t,e){T(e,P),u.rawcolliderset_coSetHalfExtents(this.__wbg_ptr,t,e.__wbg_ptr)}coRadius(t){try{const n=u.__wbindgen_add_to_stack_pointer(-16);u.rawcolliderset_coRadius(n,this.__wbg_ptr,t);var e=Et()[n/4+0],i=Zt()[n/4+1];return e===0?void 0:i}finally{u.__wbindgen_add_to_stack_pointer(16)}}coSetRadius(t,e){u.rawcolliderset_coSetRadius(this.__wbg_ptr,t,e)}coHalfHeight(t){try{const n=u.__wbindgen_add_to_stack_pointer(-16);u.rawcolliderset_coHalfHeight(n,this.__wbg_ptr,t);var e=Et()[n/4+0],i=Zt()[n/4+1];return e===0?void 0:i}finally{u.__wbindgen_add_to_stack_pointer(16)}}coSetHalfHeight(t,e){u.rawcolliderset_coSetHalfHeight(this.__wbg_ptr,t,e)}coRoundRadius(t){try{const n=u.__wbindgen_add_to_stack_pointer(-16);u.rawcolliderset_coRoundRadius(n,this.__wbg_ptr,t);var e=Et()[n/4+0],i=Zt()[n/4+1];return e===0?void 0:i}finally{u.__wbindgen_add_to_stack_pointer(16)}}coSetRoundRadius(t,e){u.rawcolliderset_coSetRoundRadius(this.__wbg_ptr,t,e)}coVertices(t){try{const n=u.__wbindgen_add_to_stack_pointer(-16);u.rawcolliderset_coVertices(n,this.__wbg_ptr,t);var e=Et()[n/4+0],i=Et()[n/4+1];let s;return e!==0&&(s=Tl(e,i).slice(),u.__wbindgen_free(e,4*i,4)),s}finally{u.__wbindgen_add_to_stack_pointer(16)}}coIndices(t){try{const a=u.__wbindgen_add_to_stack_pointer(-16);u.rawcolliderset_coIndices(a,this.__wbg_ptr,t);var e=Et()[a/4+0],i=Et()[a/4+1];let o;return e!==0&&(o=(n=e,s=i,n>>>=0,Al().subarray(n/4,n/4+s)).slice(),u.__wbindgen_free(e,4*i,4)),o}finally{u.__wbindgen_add_to_stack_pointer(16)}var n,s}coTriMeshFlags(t){try{const n=u.__wbindgen_add_to_stack_pointer(-16);u.rawcolliderset_coTriMeshFlags(n,this.__wbg_ptr,t);var e=Et()[n/4+0],i=Et()[n/4+1];return e===0?void 0:i>>>0}finally{u.__wbindgen_add_to_stack_pointer(16)}}coHeightFieldFlags(t){try{const n=u.__wbindgen_add_to_stack_pointer(-16);u.rawcolliderset_coHeightFieldFlags(n,this.__wbg_ptr,t);var e=Et()[n/4+0],i=Et()[n/4+1];return e===0?void 0:i>>>0}finally{u.__wbindgen_add_to_stack_pointer(16)}}coHeightfieldHeights(t){try{const n=u.__wbindgen_add_to_stack_pointer(-16);u.rawcolliderset_coHeightfieldHeights(n,this.__wbg_ptr,t);var e=Et()[n/4+0],i=Et()[n/4+1];let s;return e!==0&&(s=Tl(e,i).slice(),u.__wbindgen_free(e,4*i,4)),s}finally{u.__wbindgen_add_to_stack_pointer(16)}}coHeightfieldScale(t){const e=u.rawcolliderset_coHeightfieldScale(this.__wbg_ptr,t);return e===0?void 0:P.__wrap(e)}coHeightfieldNRows(t){try{const n=u.__wbindgen_add_to_stack_pointer(-16);u.rawcolliderset_coHeightfieldNRows(n,this.__wbg_ptr,t);var e=Et()[n/4+0],i=Et()[n/4+1];return e===0?void 0:i>>>0}finally{u.__wbindgen_add_to_stack_pointer(16)}}coHeightfieldNCols(t){try{const n=u.__wbindgen_add_to_stack_pointer(-16);u.rawcolliderset_coHeightfieldNCols(n,this.__wbg_ptr,t);var e=Et()[n/4+0],i=Et()[n/4+1];return e===0?void 0:i>>>0}finally{u.__wbindgen_add_to_stack_pointer(16)}}coParent(t){try{const n=u.__wbindgen_add_to_stack_pointer(-16);u.rawcolliderset_coParent(n,this.__wbg_ptr,t);var e=Et()[n/4+0],i=Kr()[n/8+1];return e===0?void 0:i}finally{u.__wbindgen_add_to_stack_pointer(16)}}coSetEnabled(t,e){u.rawcolliderset_coSetEnabled(this.__wbg_ptr,t,e)}coIsEnabled(t){return u.rawcolliderset_coIsEnabled(this.__wbg_ptr,t)!==0}coSetContactSkin(t,e){u.rawcolliderset_coSetContactSkin(this.__wbg_ptr,t,e)}coContactSkin(t){return u.rawcolliderset_coContactSkin(this.__wbg_ptr,t)}coFriction(t){return u.rawcolliderset_coFriction(this.__wbg_ptr,t)}coRestitution(t){return u.rawcolliderset_coRestitution(this.__wbg_ptr,t)}coDensity(t){return u.rawcolliderset_coDensity(this.__wbg_ptr,t)}coMass(t){return u.rawcolliderset_coMass(this.__wbg_ptr,t)}coVolume(t){return u.rawcolliderset_coVolume(this.__wbg_ptr,t)}coCollisionGroups(t){return u.rawcolliderset_coCollisionGroups(this.__wbg_ptr,t)>>>0}coSolverGroups(t){return u.rawcolliderset_coSolverGroups(this.__wbg_ptr,t)>>>0}coActiveHooks(t){return u.rawcolliderset_coActiveHooks(this.__wbg_ptr,t)>>>0}coActiveCollisionTypes(t){return u.rawcolliderset_coActiveCollisionTypes(this.__wbg_ptr,t)}coActiveEvents(t){return u.rawcolliderset_coActiveEvents(this.__wbg_ptr,t)>>>0}coContactForceEventThreshold(t){return u.rawcolliderset_coContactForceEventThreshold(this.__wbg_ptr,t)}coContainsPoint(t,e){return T(e,P),u.rawcolliderset_coContainsPoint(this.__wbg_ptr,t,e.__wbg_ptr)!==0}coCastShape(t,e,i,n,s,a,o,l,c){T(e,P),T(i,xt),T(n,P),T(s,Ot),T(a,P);const h=u.rawcolliderset_coCastShape(this.__wbg_ptr,t,e.__wbg_ptr,i.__wbg_ptr,n.__wbg_ptr,s.__wbg_ptr,a.__wbg_ptr,o,l,c);return h===0?void 0:us.__wrap(h)}coCastCollider(t,e,i,n,s,a,o){T(e,P),T(n,P);const l=u.rawcolliderset_coCastCollider(this.__wbg_ptr,t,e.__wbg_ptr,i,n.__wbg_ptr,s,a,o);return l===0?void 0:os.__wrap(l)}coIntersectsShape(t,e,i,n){return T(e,xt),T(i,P),T(n,Ot),u.rawcolliderset_coIntersectsShape(this.__wbg_ptr,t,e.__wbg_ptr,i.__wbg_ptr,n.__wbg_ptr)!==0}coContactShape(t,e,i,n,s){T(e,xt),T(i,P),T(n,Ot);const a=u.rawcolliderset_coContactShape(this.__wbg_ptr,t,e.__wbg_ptr,i.__wbg_ptr,n.__wbg_ptr,s);return a===0?void 0:er.__wrap(a)}coContactCollider(t,e,i){const n=u.rawcolliderset_coContactCollider(this.__wbg_ptr,t,e,i);return n===0?void 0:er.__wrap(n)}coProjectPoint(t,e,i){T(e,P);const n=u.rawcolliderset_coProjectPoint(this.__wbg_ptr,t,e.__wbg_ptr,i);return cs.__wrap(n)}coIntersectsRay(t,e,i,n){return T(e,P),T(i,P),u.rawcolliderset_coIntersectsRay(this.__wbg_ptr,t,e.__wbg_ptr,i.__wbg_ptr,n)!==0}coCastRay(t,e,i,n,s){return T(e,P),T(i,P),u.rawcolliderset_coCastRay(this.__wbg_ptr,t,e.__wbg_ptr,i.__wbg_ptr,n,s)}coCastRayAndGetNormal(t,e,i,n,s){T(e,P),T(i,P);const a=u.rawcolliderset_coCastRayAndGetNormal(this.__wbg_ptr,t,e.__wbg_ptr,i.__wbg_ptr,n,s);return a===0?void 0:hs.__wrap(a)}coSetSensor(t,e){u.rawcolliderset_coSetSensor(this.__wbg_ptr,t,e)}coSetRestitution(t,e){u.rawcolliderset_coSetRestitution(this.__wbg_ptr,t,e)}coSetFriction(t,e){u.rawcolliderset_coSetFriction(this.__wbg_ptr,t,e)}coFrictionCombineRule(t){return u.rawcolliderset_coFrictionCombineRule(this.__wbg_ptr,t)>>>0}coSetFrictionCombineRule(t,e){u.rawcolliderset_coSetFrictionCombineRule(this.__wbg_ptr,t,e)}coRestitutionCombineRule(t){return u.rawcolliderset_coRestitutionCombineRule(this.__wbg_ptr,t)>>>0}coSetRestitutionCombineRule(t,e){u.rawcolliderset_coSetRestitutionCombineRule(this.__wbg_ptr,t,e)}coSetCollisionGroups(t,e){u.rawcolliderset_coSetCollisionGroups(this.__wbg_ptr,t,e)}coSetSolverGroups(t,e){u.rawcolliderset_coSetSolverGroups(this.__wbg_ptr,t,e)}coSetActiveHooks(t,e){u.rawcolliderset_coSetActiveHooks(this.__wbg_ptr,t,e)}coSetActiveEvents(t,e){u.rawcolliderset_coSetActiveEvents(this.__wbg_ptr,t,e)}coSetActiveCollisionTypes(t,e){u.rawcolliderset_coSetActiveCollisionTypes(this.__wbg_ptr,t,e)}coSetShape(t,e){T(e,xt),u.rawcolliderset_coSetShape(this.__wbg_ptr,t,e.__wbg_ptr)}coSetContactForceEventThreshold(t,e){u.rawcolliderset_coSetContactForceEventThreshold(this.__wbg_ptr,t,e)}coSetDensity(t,e){u.rawcolliderset_coSetDensity(this.__wbg_ptr,t,e)}coSetMass(t,e){u.rawcolliderset_coSetMass(this.__wbg_ptr,t,e)}coSetMassProperties(t,e,i,n,s){T(i,P),T(n,P),T(s,Ot),u.rawcolliderset_coSetMassProperties(this.__wbg_ptr,t,e,i.__wbg_ptr,n.__wbg_ptr,s.__wbg_ptr)}constructor(){const t=u.rawcolliderset_new();return this.__wbg_ptr=t>>>0,this}len(){return u.rawcolliderset_len(this.__wbg_ptr)>>>0}contains(t){return u.rawcolliderset_contains(this.__wbg_ptr,t)!==0}createCollider(t,e,i,n,s,a,o,l,c,h,d,p,_,f,g,m,y,w,v,R,N,A,C,k,D){try{const H=u.__wbindgen_add_to_stack_pointer(-16);T(e,xt),T(i,P),T(n,Ot),T(o,P),T(l,P),T(c,Ot),T(D,le),u.rawcolliderset_createCollider(H,this.__wbg_ptr,t,e.__wbg_ptr,i.__wbg_ptr,n.__wbg_ptr,s,a,o.__wbg_ptr,l.__wbg_ptr,c.__wbg_ptr,h,d,p,_,f,g,m,y,w,v,R,N,A,C,k,D.__wbg_ptr);var V=Et()[H/4+0],Y=Kr()[H/8+1];return V===0?void 0:Y}finally{u.__wbindgen_add_to_stack_pointer(16)}}remove(t,e,i,n){T(e,mi),T(i,le),u.rawcolliderset_remove(this.__wbg_ptr,t,e.__wbg_ptr,i.__wbg_ptr,n)}isHandleValid(t){return u.rawcolliderset_contains(this.__wbg_ptr,t)!==0}forEachColliderHandle(t){try{u.rawcolliderset_forEachColliderHandle(this.__wbg_ptr,Qt(t))}finally{Vt[Jt++]=void 0}}}class os{static __wrap(t){t>>>=0;const e=Object.create(os.prototype);return e.__wbg_ptr=t,e}__destroy_into_raw(){const t=this.__wbg_ptr;return this.__wbg_ptr=0,t}free(){const t=this.__destroy_into_raw();u.__wbg_rawcollidershapecasthit_free(t)}colliderHandle(){return u.rawcharactercollision_handle(this.__wbg_ptr)}time_of_impact(){return u.rawcollidershapecasthit_time_of_impact(this.__wbg_ptr)}witness1(){const t=u.rawcollidershapecasthit_witness1(this.__wbg_ptr);return P.__wrap(t)}witness2(){const t=u.rawcollidershapecasthit_witness2(this.__wbg_ptr);return P.__wrap(t)}normal1(){const t=u.rawcharactercollision_translationDeltaApplied(this.__wbg_ptr);return P.__wrap(t)}normal2(){const t=u.rawcharactercollision_translationDeltaRemaining(this.__wbg_ptr);return P.__wrap(t)}}class Pa{static __wrap(t){t>>>=0;const e=Object.create(Pa.prototype);return e.__wbg_ptr=t,e}__destroy_into_raw(){const t=this.__wbg_ptr;return this.__wbg_ptr=0,t}free(){const t=this.__destroy_into_raw();u.__wbg_rawcontactmanifold_free(t)}normal(){const t=u.rawcontactmanifold_normal(this.__wbg_ptr);return P.__wrap(t)}local_n1(){const t=u.rawcontactmanifold_local_n1(this.__wbg_ptr);return P.__wrap(t)}local_n2(){const t=u.rawcontactmanifold_local_n2(this.__wbg_ptr);return P.__wrap(t)}subshape1(){return u.rawcontactmanifold_subshape1(this.__wbg_ptr)>>>0}subshape2(){return u.rawcontactmanifold_subshape2(this.__wbg_ptr)>>>0}num_contacts(){return u.rawcontactmanifold_num_contacts(this.__wbg_ptr)>>>0}contact_local_p1(t){const e=u.rawcontactmanifold_contact_local_p1(this.__wbg_ptr,t);return e===0?void 0:P.__wrap(e)}contact_local_p2(t){const e=u.rawcontactmanifold_contact_local_p2(this.__wbg_ptr,t);return e===0?void 0:P.__wrap(e)}contact_dist(t){return u.rawcontactmanifold_contact_dist(this.__wbg_ptr,t)}contact_fid1(t){return u.rawcontactmanifold_contact_fid1(this.__wbg_ptr,t)>>>0}contact_fid2(t){return u.rawcontactmanifold_contact_fid2(this.__wbg_ptr,t)>>>0}contact_impulse(t){return u.rawcontactmanifold_contact_impulse(this.__wbg_ptr,t)}contact_tangent_impulse_x(t){return u.rawcontactmanifold_contact_tangent_impulse_x(this.__wbg_ptr,t)}contact_tangent_impulse_y(t){return u.rawcontactmanifold_contact_tangent_impulse_y(this.__wbg_ptr,t)}num_solver_contacts(){return u.rawcontactmanifold_num_solver_contacts(this.__wbg_ptr)>>>0}solver_contact_point(t){const e=u.rawcontactmanifold_solver_contact_point(this.__wbg_ptr,t);return e===0?void 0:P.__wrap(e)}solver_contact_dist(t){return u.rawcontactmanifold_solver_contact_dist(this.__wbg_ptr,t)}solver_contact_friction(t){return u.rawcontactmanifold_solver_contact_friction(this.__wbg_ptr,t)}solver_contact_restitution(t){return u.rawcontactmanifold_solver_contact_restitution(this.__wbg_ptr,t)}solver_contact_tangent_velocity(t){const e=u.rawcontactmanifold_solver_contact_tangent_velocity(this.__wbg_ptr,t);return P.__wrap(e)}}class La{static __wrap(t){t>>>=0;const e=Object.create(La.prototype);return e.__wbg_ptr=t,e}__destroy_into_raw(){const t=this.__wbg_ptr;return this.__wbg_ptr=0,t}free(){const t=this.__destroy_into_raw();u.__wbg_rawcontactpair_free(t)}collider1(){return u.rawcontactpair_collider1(this.__wbg_ptr)}collider2(){return u.rawcontactpair_collider2(this.__wbg_ptr)}numContactManifolds(){return u.rawcontactpair_numContactManifolds(this.__wbg_ptr)>>>0}contactManifold(t){const e=u.rawcontactpair_contactManifold(this.__wbg_ptr,t);return e===0?void 0:Pa.__wrap(e)}}class du{__destroy_into_raw(){const t=this.__wbg_ptr;return this.__wbg_ptr=0,t}free(){const t=this.__destroy_into_raw();u.__wbg_rawdebugrenderpipeline_free(t)}constructor(){const t=u.rawdebugrenderpipeline_new();return this.__wbg_ptr=t>>>0,this}vertices(){return Yr(u.rawdebugrenderpipeline_vertices(this.__wbg_ptr))}colors(){return Yr(u.rawdebugrenderpipeline_colors(this.__wbg_ptr))}render(t,e,i,n,s){T(t,le),T(e,oe),T(i,_i),T(n,fi),T(s,Pi),u.rawdebugrenderpipeline_render(this.__wbg_ptr,t.__wbg_ptr,e.__wbg_ptr,i.__wbg_ptr,n.__wbg_ptr,s.__wbg_ptr)}}class Ia{static __wrap(t){t>>>=0;const e=Object.create(Ia.prototype);return e.__wbg_ptr=t,e}__destroy_into_raw(){const t=this.__wbg_ptr;return this.__wbg_ptr=0,t}free(){const t=this.__destroy_into_raw();u.__wbg_rawdeserializedworld_free(t)}takeGravity(){const t=u.rawdeserializedworld_takeGravity(this.__wbg_ptr);return t===0?void 0:P.__wrap(t)}takeIntegrationParameters(){const t=u.rawdeserializedworld_takeIntegrationParameters(this.__wbg_ptr);return t===0?void 0:Xi.__wrap(t)}takeIslandManager(){const t=u.rawdeserializedworld_takeIslandManager(this.__wbg_ptr);return t===0?void 0:mi.__wrap(t)}takeBroadPhase(){const t=u.rawdeserializedworld_takeBroadPhase(this.__wbg_ptr);return t===0?void 0:ji.__wrap(t)}takeNarrowPhase(){const t=u.rawdeserializedworld_takeNarrowPhase(this.__wbg_ptr);return t===0?void 0:Pi.__wrap(t)}takeBodies(){const t=u.rawdeserializedworld_takeBodies(this.__wbg_ptr);return t===0?void 0:le.__wrap(t)}takeColliders(){const t=u.rawdeserializedworld_takeColliders(this.__wbg_ptr);return t===0?void 0:oe.__wrap(t)}takeImpulseJoints(){const t=u.rawdeserializedworld_takeImpulseJoints(this.__wbg_ptr);return t===0?void 0:_i.__wrap(t)}takeMultibodyJoints(){const t=u.rawdeserializedworld_takeMultibodyJoints(this.__wbg_ptr);return t===0?void 0:fi.__wrap(t)}}class uu{__destroy_into_raw(){const t=this.__wbg_ptr;return this.__wbg_ptr=0,t}free(){const t=this.__destroy_into_raw();u.__wbg_rawdynamicraycastvehiclecontroller_free(t)}constructor(t){const e=u.rawdynamicraycastvehiclecontroller_new(t);return this.__wbg_ptr=e>>>0,this}current_vehicle_speed(){return u.rawdynamicraycastvehiclecontroller_current_vehicle_speed(this.__wbg_ptr)}chassis(){return u.rawdynamicraycastvehiclecontroller_chassis(this.__wbg_ptr)}index_up_axis(){return u.rawdynamicraycastvehiclecontroller_index_up_axis(this.__wbg_ptr)>>>0}set_index_up_axis(t){u.rawdynamicraycastvehiclecontroller_set_index_up_axis(this.__wbg_ptr,t)}index_forward_axis(){return u.rawdynamicraycastvehiclecontroller_index_forward_axis(this.__wbg_ptr)>>>0}set_index_forward_axis(t){u.rawdynamicraycastvehiclecontroller_set_index_forward_axis(this.__wbg_ptr,t)}add_wheel(t,e,i,n,s){T(t,P),T(e,P),T(i,P),u.rawdynamicraycastvehiclecontroller_add_wheel(this.__wbg_ptr,t.__wbg_ptr,e.__wbg_ptr,i.__wbg_ptr,n,s)}num_wheels(){return u.rawdynamicraycastvehiclecontroller_num_wheels(this.__wbg_ptr)>>>0}update_vehicle(t,e,i,n,s,a,o){try{T(e,le),T(i,oe),T(n,ya),u.rawdynamicraycastvehiclecontroller_update_vehicle(this.__wbg_ptr,t,e.__wbg_ptr,i.__wbg_ptr,n.__wbg_ptr,s,!ft(a),ft(a)?0:a,Qt(o))}finally{Vt[Jt++]=void 0}}wheel_chassis_connection_point_cs(t){const e=u.rawdynamicraycastvehiclecontroller_wheel_chassis_connection_point_cs(this.__wbg_ptr,t);return e===0?void 0:P.__wrap(e)}set_wheel_chassis_connection_point_cs(t,e){T(e,P),u.rawdynamicraycastvehiclecontroller_set_wheel_chassis_connection_point_cs(this.__wbg_ptr,t,e.__wbg_ptr)}wheel_suspension_rest_length(t){try{const n=u.__wbindgen_add_to_stack_pointer(-16);u.rawdynamicraycastvehiclecontroller_wheel_suspension_rest_length(n,this.__wbg_ptr,t);var e=Et()[n/4+0],i=Zt()[n/4+1];return e===0?void 0:i}finally{u.__wbindgen_add_to_stack_pointer(16)}}set_wheel_suspension_rest_length(t,e){u.rawdynamicraycastvehiclecontroller_set_wheel_suspension_rest_length(this.__wbg_ptr,t,e)}wheel_max_suspension_travel(t){try{const n=u.__wbindgen_add_to_stack_pointer(-16);u.rawdynamicraycastvehiclecontroller_wheel_max_suspension_travel(n,this.__wbg_ptr,t);var e=Et()[n/4+0],i=Zt()[n/4+1];return e===0?void 0:i}finally{u.__wbindgen_add_to_stack_pointer(16)}}set_wheel_max_suspension_travel(t,e){u.rawdynamicraycastvehiclecontroller_set_wheel_max_suspension_travel(this.__wbg_ptr,t,e)}wheel_radius(t){try{const n=u.__wbindgen_add_to_stack_pointer(-16);u.rawdynamicraycastvehiclecontroller_wheel_radius(n,this.__wbg_ptr,t);var e=Et()[n/4+0],i=Zt()[n/4+1];return e===0?void 0:i}finally{u.__wbindgen_add_to_stack_pointer(16)}}set_wheel_radius(t,e){u.rawdynamicraycastvehiclecontroller_set_wheel_radius(this.__wbg_ptr,t,e)}wheel_suspension_stiffness(t){try{const n=u.__wbindgen_add_to_stack_pointer(-16);u.rawdynamicraycastvehiclecontroller_wheel_suspension_stiffness(n,this.__wbg_ptr,t);var e=Et()[n/4+0],i=Zt()[n/4+1];return e===0?void 0:i}finally{u.__wbindgen_add_to_stack_pointer(16)}}set_wheel_suspension_stiffness(t,e){u.rawdynamicraycastvehiclecontroller_set_wheel_suspension_stiffness(this.__wbg_ptr,t,e)}wheel_suspension_compression(t){try{const n=u.__wbindgen_add_to_stack_pointer(-16);u.rawdynamicraycastvehiclecontroller_wheel_suspension_compression(n,this.__wbg_ptr,t);var e=Et()[n/4+0],i=Zt()[n/4+1];return e===0?void 0:i}finally{u.__wbindgen_add_to_stack_pointer(16)}}set_wheel_suspension_compression(t,e){u.rawdynamicraycastvehiclecontroller_set_wheel_suspension_compression(this.__wbg_ptr,t,e)}wheel_suspension_relaxation(t){try{const n=u.__wbindgen_add_to_stack_pointer(-16);u.rawdynamicraycastvehiclecontroller_wheel_suspension_relaxation(n,this.__wbg_ptr,t);var e=Et()[n/4+0],i=Zt()[n/4+1];return e===0?void 0:i}finally{u.__wbindgen_add_to_stack_pointer(16)}}set_wheel_suspension_relaxation(t,e){u.rawdynamicraycastvehiclecontroller_set_wheel_suspension_relaxation(this.__wbg_ptr,t,e)}wheel_max_suspension_force(t){try{const n=u.__wbindgen_add_to_stack_pointer(-16);u.rawdynamicraycastvehiclecontroller_wheel_max_suspension_force(n,this.__wbg_ptr,t);var e=Et()[n/4+0],i=Zt()[n/4+1];return e===0?void 0:i}finally{u.__wbindgen_add_to_stack_pointer(16)}}set_wheel_max_suspension_force(t,e){u.rawdynamicraycastvehiclecontroller_set_wheel_max_suspension_force(this.__wbg_ptr,t,e)}wheel_brake(t){try{const n=u.__wbindgen_add_to_stack_pointer(-16);u.rawdynamicraycastvehiclecontroller_wheel_brake(n,this.__wbg_ptr,t);var e=Et()[n/4+0],i=Zt()[n/4+1];return e===0?void 0:i}finally{u.__wbindgen_add_to_stack_pointer(16)}}set_wheel_brake(t,e){u.rawdynamicraycastvehiclecontroller_set_wheel_brake(this.__wbg_ptr,t,e)}wheel_steering(t){try{const n=u.__wbindgen_add_to_stack_pointer(-16);u.rawdynamicraycastvehiclecontroller_wheel_steering(n,this.__wbg_ptr,t);var e=Et()[n/4+0],i=Zt()[n/4+1];return e===0?void 0:i}finally{u.__wbindgen_add_to_stack_pointer(16)}}set_wheel_steering(t,e){u.rawdynamicraycastvehiclecontroller_set_wheel_steering(this.__wbg_ptr,t,e)}wheel_engine_force(t){try{const n=u.__wbindgen_add_to_stack_pointer(-16);u.rawdynamicraycastvehiclecontroller_wheel_engine_force(n,this.__wbg_ptr,t);var e=Et()[n/4+0],i=Zt()[n/4+1];return e===0?void 0:i}finally{u.__wbindgen_add_to_stack_pointer(16)}}set_wheel_engine_force(t,e){u.rawdynamicraycastvehiclecontroller_set_wheel_engine_force(this.__wbg_ptr,t,e)}wheel_direction_cs(t){const e=u.rawdynamicraycastvehiclecontroller_wheel_direction_cs(this.__wbg_ptr,t);return e===0?void 0:P.__wrap(e)}set_wheel_direction_cs(t,e){T(e,P),u.rawdynamicraycastvehiclecontroller_set_wheel_direction_cs(this.__wbg_ptr,t,e.__wbg_ptr)}wheel_axle_cs(t){const e=u.rawdynamicraycastvehiclecontroller_wheel_axle_cs(this.__wbg_ptr,t);return e===0?void 0:P.__wrap(e)}set_wheel_axle_cs(t,e){T(e,P),u.rawdynamicraycastvehiclecontroller_set_wheel_axle_cs(this.__wbg_ptr,t,e.__wbg_ptr)}wheel_friction_slip(t){try{const n=u.__wbindgen_add_to_stack_pointer(-16);u.rawdynamicraycastvehiclecontroller_wheel_friction_slip(n,this.__wbg_ptr,t);var e=Et()[n/4+0],i=Zt()[n/4+1];return e===0?void 0:i}finally{u.__wbindgen_add_to_stack_pointer(16)}}set_wheel_friction_slip(t,e){u.rawdynamicraycastvehiclecontroller_set_wheel_friction_slip(this.__wbg_ptr,t,e)}wheel_side_friction_stiffness(t){try{const n=u.__wbindgen_add_to_stack_pointer(-16);u.rawdynamicraycastvehiclecontroller_wheel_side_friction_stiffness(n,this.__wbg_ptr,t);var e=Et()[n/4+0],i=Zt()[n/4+1];return e===0?void 0:i}finally{u.__wbindgen_add_to_stack_pointer(16)}}set_wheel_side_friction_stiffness(t,e){u.rawdynamicraycastvehiclecontroller_set_wheel_side_friction_stiffness(this.__wbg_ptr,t,e)}wheel_rotation(t){try{const n=u.__wbindgen_add_to_stack_pointer(-16);u.rawdynamicraycastvehiclecontroller_wheel_rotation(n,this.__wbg_ptr,t);var e=Et()[n/4+0],i=Zt()[n/4+1];return e===0?void 0:i}finally{u.__wbindgen_add_to_stack_pointer(16)}}wheel_forward_impulse(t){try{const n=u.__wbindgen_add_to_stack_pointer(-16);u.rawdynamicraycastvehiclecontroller_wheel_forward_impulse(n,this.__wbg_ptr,t);var e=Et()[n/4+0],i=Zt()[n/4+1];return e===0?void 0:i}finally{u.__wbindgen_add_to_stack_pointer(16)}}wheel_side_impulse(t){try{const n=u.__wbindgen_add_to_stack_pointer(-16);u.rawdynamicraycastvehiclecontroller_wheel_side_impulse(n,this.__wbg_ptr,t);var e=Et()[n/4+0],i=Zt()[n/4+1];return e===0?void 0:i}finally{u.__wbindgen_add_to_stack_pointer(16)}}wheel_suspension_force(t){try{const n=u.__wbindgen_add_to_stack_pointer(-16);u.rawdynamicraycastvehiclecontroller_wheel_suspension_force(n,this.__wbg_ptr,t);var e=Et()[n/4+0],i=Zt()[n/4+1];return e===0?void 0:i}finally{u.__wbindgen_add_to_stack_pointer(16)}}wheel_contact_normal_ws(t){const e=u.rawdynamicraycastvehiclecontroller_wheel_contact_normal_ws(this.__wbg_ptr,t);return e===0?void 0:P.__wrap(e)}wheel_contact_point_ws(t){const e=u.rawdynamicraycastvehiclecontroller_wheel_contact_point_ws(this.__wbg_ptr,t);return e===0?void 0:P.__wrap(e)}wheel_suspension_length(t){try{const n=u.__wbindgen_add_to_stack_pointer(-16);u.rawdynamicraycastvehiclecontroller_wheel_suspension_length(n,this.__wbg_ptr,t);var e=Et()[n/4+0],i=Zt()[n/4+1];return e===0?void 0:i}finally{u.__wbindgen_add_to_stack_pointer(16)}}wheel_hard_point_ws(t){const e=u.rawdynamicraycastvehiclecontroller_wheel_hard_point_ws(this.__wbg_ptr,t);return e===0?void 0:P.__wrap(e)}wheel_is_in_contact(t){return u.rawdynamicraycastvehiclecontroller_wheel_is_in_contact(this.__wbg_ptr,t)!==0}wheel_ground_object(t){try{const n=u.__wbindgen_add_to_stack_pointer(-16);u.rawdynamicraycastvehiclecontroller_wheel_ground_object(n,this.__wbg_ptr,t);var e=Et()[n/4+0],i=Kr()[n/8+1];return e===0?void 0:i}finally{u.__wbindgen_add_to_stack_pointer(16)}}}class pu{__destroy_into_raw(){const t=this.__wbg_ptr;return this.__wbg_ptr=0,t}free(){const t=this.__destroy_into_raw();u.__wbg_raweventqueue_free(t)}constructor(t){const e=u.raweventqueue_new(t);return this.__wbg_ptr=e>>>0,this}drainCollisionEvents(t){try{u.raweventqueue_drainCollisionEvents(this.__wbg_ptr,Qt(t))}finally{Vt[Jt++]=void 0}}drainContactForceEvents(t){try{u.raweventqueue_drainContactForceEvents(this.__wbg_ptr,Qt(t))}finally{Vt[Jt++]=void 0}}clear(){u.raweventqueue_clear(this.__wbg_ptr)}}class Ye{static __wrap(t){t>>>=0;const e=Object.create(Ye.prototype);return e.__wbg_ptr=t,e}__destroy_into_raw(){const t=this.__wbg_ptr;return this.__wbg_ptr=0,t}free(){const t=this.__destroy_into_raw();u.__wbg_rawgenericjoint_free(t)}static generic(t,e,i,n){T(t,P),T(e,P),T(i,P);const s=u.rawgenericjoint_generic(t.__wbg_ptr,e.__wbg_ptr,i.__wbg_ptr,n);return s===0?void 0:Ye.__wrap(s)}static spring(t,e,i,n,s){T(n,P),T(s,P);const a=u.rawgenericjoint_spring(t,e,i,n.__wbg_ptr,s.__wbg_ptr);return Ye.__wrap(a)}static rope(t,e,i){T(e,P),T(i,P);const n=u.rawgenericjoint_rope(t,e.__wbg_ptr,i.__wbg_ptr);return Ye.__wrap(n)}static spherical(t,e){T(t,P),T(e,P);const i=u.rawgenericjoint_spherical(t.__wbg_ptr,e.__wbg_ptr);return Ye.__wrap(i)}static prismatic(t,e,i,n,s,a){T(t,P),T(e,P),T(i,P);const o=u.rawgenericjoint_prismatic(t.__wbg_ptr,e.__wbg_ptr,i.__wbg_ptr,n,s,a);return o===0?void 0:Ye.__wrap(o)}static fixed(t,e,i,n){T(t,P),T(e,Ot),T(i,P),T(n,Ot);const s=u.rawgenericjoint_fixed(t.__wbg_ptr,e.__wbg_ptr,i.__wbg_ptr,n.__wbg_ptr);return Ye.__wrap(s)}static revolute(t,e,i){T(t,P),T(e,P),T(i,P);const n=u.rawgenericjoint_revolute(t.__wbg_ptr,e.__wbg_ptr,i.__wbg_ptr);return n===0?void 0:Ye.__wrap(n)}}class _i{static __wrap(t){t>>>=0;const e=Object.create(_i.prototype);return e.__wbg_ptr=t,e}__destroy_into_raw(){const t=this.__wbg_ptr;return this.__wbg_ptr=0,t}free(){const t=this.__destroy_into_raw();u.__wbg_rawimpulsejointset_free(t)}jointType(t){return u.rawimpulsejointset_jointType(this.__wbg_ptr,t)}jointBodyHandle1(t){return u.rawimpulsejointset_jointBodyHandle1(this.__wbg_ptr,t)}jointBodyHandle2(t){return u.rawimpulsejointset_jointBodyHandle2(this.__wbg_ptr,t)}jointFrameX1(t){const e=u.rawimpulsejointset_jointFrameX1(this.__wbg_ptr,t);return Ot.__wrap(e)}jointFrameX2(t){const e=u.rawimpulsejointset_jointFrameX2(this.__wbg_ptr,t);return Ot.__wrap(e)}jointAnchor1(t){const e=u.rawimpulsejointset_jointAnchor1(this.__wbg_ptr,t);return P.__wrap(e)}jointAnchor2(t){const e=u.rawimpulsejointset_jointAnchor2(this.__wbg_ptr,t);return P.__wrap(e)}jointSetAnchor1(t,e){T(e,P),u.rawimpulsejointset_jointSetAnchor1(this.__wbg_ptr,t,e.__wbg_ptr)}jointSetAnchor2(t,e){T(e,P),u.rawimpulsejointset_jointSetAnchor2(this.__wbg_ptr,t,e.__wbg_ptr)}jointContactsEnabled(t){return u.rawimpulsejointset_jointContactsEnabled(this.__wbg_ptr,t)!==0}jointSetContactsEnabled(t,e){u.rawimpulsejointset_jointSetContactsEnabled(this.__wbg_ptr,t,e)}jointLimitsEnabled(t,e){return u.rawimpulsejointset_jointLimitsEnabled(this.__wbg_ptr,t,e)!==0}jointLimitsMin(t,e){return u.rawimpulsejointset_jointLimitsMin(this.__wbg_ptr,t,e)}jointLimitsMax(t,e){return u.rawimpulsejointset_jointLimitsMax(this.__wbg_ptr,t,e)}jointSetLimits(t,e,i,n){u.rawimpulsejointset_jointSetLimits(this.__wbg_ptr,t,e,i,n)}jointConfigureMotorModel(t,e,i){u.rawimpulsejointset_jointConfigureMotorModel(this.__wbg_ptr,t,e,i)}jointConfigureMotorVelocity(t,e,i,n){u.rawimpulsejointset_jointConfigureMotorVelocity(this.__wbg_ptr,t,e,i,n)}jointConfigureMotorPosition(t,e,i,n,s){u.rawimpulsejointset_jointConfigureMotorPosition(this.__wbg_ptr,t,e,i,n,s)}jointConfigureMotor(t,e,i,n,s,a){u.rawimpulsejointset_jointConfigureMotor(this.__wbg_ptr,t,e,i,n,s,a)}constructor(){const t=u.rawimpulsejointset_new();return this.__wbg_ptr=t>>>0,this}createJoint(t,e,i,n){return T(t,Ye),u.rawimpulsejointset_createJoint(this.__wbg_ptr,t.__wbg_ptr,e,i,n)}remove(t,e){u.rawimpulsejointset_remove(this.__wbg_ptr,t,e)}len(){return u.rawimpulsejointset_len(this.__wbg_ptr)>>>0}contains(t){return u.rawimpulsejointset_contains(this.__wbg_ptr,t)!==0}forEachJointHandle(t){try{u.rawimpulsejointset_forEachJointHandle(this.__wbg_ptr,Qt(t))}finally{Vt[Jt++]=void 0}}forEachJointAttachedToRigidBody(t,e){try{u.rawimpulsejointset_forEachJointAttachedToRigidBody(this.__wbg_ptr,t,Qt(e))}finally{Vt[Jt++]=void 0}}}class Xi{static __wrap(t){t>>>=0;const e=Object.create(Xi.prototype);return e.__wbg_ptr=t,e}__destroy_into_raw(){const t=this.__wbg_ptr;return this.__wbg_ptr=0,t}free(){const t=this.__destroy_into_raw();u.__wbg_rawintegrationparameters_free(t)}constructor(){const t=u.rawintegrationparameters_new();return this.__wbg_ptr=t>>>0,this}get dt(){return u.rawintegrationparameters_dt(this.__wbg_ptr)}get erp(){return u.rawintegrationparameters_erp(this.__wbg_ptr)}get normalizedAllowedLinearError(){return u.rawdynamicraycastvehiclecontroller_current_vehicle_speed(this.__wbg_ptr)}get normalizedPredictionDistance(){return u.rawcontactforceevent_max_force_magnitude(this.__wbg_ptr)}get numSolverIterations(){return u.rawintegrationparameters_numSolverIterations(this.__wbg_ptr)>>>0}get numAdditionalFrictionIterations(){return u.rawdynamicraycastvehiclecontroller_index_up_axis(this.__wbg_ptr)>>>0}get numInternalPgsIterations(){return u.rawdynamicraycastvehiclecontroller_index_forward_axis(this.__wbg_ptr)>>>0}get minIslandSize(){return u.rawimpulsejointset_len(this.__wbg_ptr)>>>0}get maxCcdSubsteps(){return u.rawintegrationparameters_maxCcdSubsteps(this.__wbg_ptr)>>>0}get lengthUnit(){return u.rawintegrationparameters_lengthUnit(this.__wbg_ptr)}set dt(t){u.rawintegrationparameters_set_dt(this.__wbg_ptr,t)}set erp(t){u.rawintegrationparameters_set_erp(this.__wbg_ptr,t)}set normalizedAllowedLinearError(t){u.rawintegrationparameters_set_normalizedAllowedLinearError(this.__wbg_ptr,t)}set normalizedPredictionDistance(t){u.rawintegrationparameters_set_normalizedPredictionDistance(this.__wbg_ptr,t)}set numSolverIterations(t){u.rawintegrationparameters_set_numSolverIterations(this.__wbg_ptr,t)}set numAdditionalFrictionIterations(t){u.rawdynamicraycastvehiclecontroller_set_index_up_axis(this.__wbg_ptr,t)}set numInternalPgsIterations(t){u.rawdynamicraycastvehiclecontroller_set_index_forward_axis(this.__wbg_ptr,t)}set minIslandSize(t){u.rawintegrationparameters_set_minIslandSize(this.__wbg_ptr,t)}set maxCcdSubsteps(t){u.rawintegrationparameters_set_maxCcdSubsteps(this.__wbg_ptr,t)}set lengthUnit(t){u.rawintegrationparameters_set_lengthUnit(this.__wbg_ptr,t)}switchToStandardPgsSolver(){u.rawintegrationparameters_switchToStandardPgsSolver(this.__wbg_ptr)}switchToSmallStepsPgsSolver(){u.rawintegrationparameters_switchToSmallStepsPgsSolver(this.__wbg_ptr)}switchToSmallStepsPgsSolverWithoutWarmstart(){u.rawintegrationparameters_switchToSmallStepsPgsSolverWithoutWarmstart(this.__wbg_ptr)}}class mi{static __wrap(t){t>>>=0;const e=Object.create(mi.prototype);return e.__wbg_ptr=t,e}__destroy_into_raw(){const t=this.__wbg_ptr;return this.__wbg_ptr=0,t}free(){const t=this.__destroy_into_raw();u.__wbg_rawislandmanager_free(t)}constructor(){const t=u.rawislandmanager_new();return this.__wbg_ptr=t>>>0,this}forEachActiveRigidBodyHandle(t){try{u.rawislandmanager_forEachActiveRigidBodyHandle(this.__wbg_ptr,Qt(t))}finally{Vt[Jt++]=void 0}}}class _u{__destroy_into_raw(){const t=this.__wbg_ptr;return this.__wbg_ptr=0,t}free(){const t=this.__destroy_into_raw();u.__wbg_rawkinematiccharactercontroller_free(t)}constructor(t){const e=u.rawkinematiccharactercontroller_new(t);return this.__wbg_ptr=e>>>0,this}up(){const t=u.rawcharactercollision_translationDeltaApplied(this.__wbg_ptr);return P.__wrap(t)}setUp(t){T(t,P),u.rawkinematiccharactercontroller_setUp(this.__wbg_ptr,t.__wbg_ptr)}normalNudgeFactor(){return u.rawkinematiccharactercontroller_normalNudgeFactor(this.__wbg_ptr)}setNormalNudgeFactor(t){u.rawkinematiccharactercontroller_setNormalNudgeFactor(this.__wbg_ptr,t)}offset(){return u.rawintegrationparameters_dt(this.__wbg_ptr)}setOffset(t){u.rawkinematiccharactercontroller_setOffset(this.__wbg_ptr,t)}slideEnabled(){return u.rawkinematiccharactercontroller_slideEnabled(this.__wbg_ptr)!==0}setSlideEnabled(t){u.rawkinematiccharactercontroller_setSlideEnabled(this.__wbg_ptr,t)}autostepMaxHeight(){try{const i=u.__wbindgen_add_to_stack_pointer(-16);u.rawkinematiccharactercontroller_autostepMaxHeight(i,this.__wbg_ptr);var t=Et()[i/4+0],e=Zt()[i/4+1];return t===0?void 0:e}finally{u.__wbindgen_add_to_stack_pointer(16)}}autostepMinWidth(){try{const i=u.__wbindgen_add_to_stack_pointer(-16);u.rawkinematiccharactercontroller_autostepMinWidth(i,this.__wbg_ptr);var t=Et()[i/4+0],e=Zt()[i/4+1];return t===0?void 0:e}finally{u.__wbindgen_add_to_stack_pointer(16)}}autostepIncludesDynamicBodies(){const t=u.rawkinematiccharactercontroller_autostepIncludesDynamicBodies(this.__wbg_ptr);return t===16777215?void 0:t!==0}autostepEnabled(){return u.rawkinematiccharactercontroller_autostepEnabled(this.__wbg_ptr)!==0}enableAutostep(t,e,i){u.rawkinematiccharactercontroller_enableAutostep(this.__wbg_ptr,t,e,i)}disableAutostep(){u.rawkinematiccharactercontroller_disableAutostep(this.__wbg_ptr)}maxSlopeClimbAngle(){return u.rawkinematiccharactercontroller_maxSlopeClimbAngle(this.__wbg_ptr)}setMaxSlopeClimbAngle(t){u.rawkinematiccharactercontroller_setMaxSlopeClimbAngle(this.__wbg_ptr,t)}minSlopeSlideAngle(){return u.rawkinematiccharactercontroller_minSlopeSlideAngle(this.__wbg_ptr)}setMinSlopeSlideAngle(t){u.rawkinematiccharactercontroller_setMinSlopeSlideAngle(this.__wbg_ptr,t)}snapToGroundDistance(){try{const i=u.__wbindgen_add_to_stack_pointer(-16);u.rawkinematiccharactercontroller_snapToGroundDistance(i,this.__wbg_ptr);var t=Et()[i/4+0],e=Zt()[i/4+1];return t===0?void 0:e}finally{u.__wbindgen_add_to_stack_pointer(16)}}enableSnapToGround(t){u.rawkinematiccharactercontroller_enableSnapToGround(this.__wbg_ptr,t)}disableSnapToGround(){u.rawkinematiccharactercontroller_disableSnapToGround(this.__wbg_ptr)}snapToGroundEnabled(){return u.rawkinematiccharactercontroller_snapToGroundEnabled(this.__wbg_ptr)!==0}computeColliderMovement(t,e,i,n,s,a,o,l,c,h,d){try{T(e,le),T(i,oe),T(n,ya),T(a,P),u.rawkinematiccharactercontroller_computeColliderMovement(this.__wbg_ptr,t,e.__wbg_ptr,i.__wbg_ptr,n.__wbg_ptr,s,a.__wbg_ptr,o,!ft(l),ft(l)?0:l,c,!ft(h),ft(h)?0:h,Qt(d))}finally{Vt[Jt++]=void 0}}computedMovement(){const t=u.rawkinematiccharactercontroller_computedMovement(this.__wbg_ptr);return P.__wrap(t)}computedGrounded(){return u.rawkinematiccharactercontroller_computedGrounded(this.__wbg_ptr)!==0}numComputedCollisions(){return u.rawkinematiccharactercontroller_numComputedCollisions(this.__wbg_ptr)>>>0}computedCollision(t,e){return T(e,Rl),u.rawkinematiccharactercontroller_computedCollision(this.__wbg_ptr,t,e.__wbg_ptr)!==0}}class fi{static __wrap(t){t>>>=0;const e=Object.create(fi.prototype);return e.__wbg_ptr=t,e}__destroy_into_raw(){const t=this.__wbg_ptr;return this.__wbg_ptr=0,t}free(){const t=this.__destroy_into_raw();u.__wbg_rawmultibodyjointset_free(t)}jointType(t){return u.rawmultibodyjointset_jointType(this.__wbg_ptr,t)}jointFrameX1(t){const e=u.rawmultibodyjointset_jointFrameX1(this.__wbg_ptr,t);return Ot.__wrap(e)}jointFrameX2(t){const e=u.rawmultibodyjointset_jointFrameX2(this.__wbg_ptr,t);return Ot.__wrap(e)}jointAnchor1(t){const e=u.rawmultibodyjointset_jointAnchor1(this.__wbg_ptr,t);return P.__wrap(e)}jointAnchor2(t){const e=u.rawmultibodyjointset_jointAnchor2(this.__wbg_ptr,t);return P.__wrap(e)}jointContactsEnabled(t){return u.rawmultibodyjointset_jointContactsEnabled(this.__wbg_ptr,t)!==0}jointSetContactsEnabled(t,e){u.rawmultibodyjointset_jointSetContactsEnabled(this.__wbg_ptr,t,e)}jointLimitsEnabled(t,e){return u.rawmultibodyjointset_jointLimitsEnabled(this.__wbg_ptr,t,e)!==0}jointLimitsMin(t,e){return u.rawmultibodyjointset_jointLimitsMin(this.__wbg_ptr,t,e)}jointLimitsMax(t,e){return u.rawmultibodyjointset_jointLimitsMax(this.__wbg_ptr,t,e)}constructor(){const t=u.rawmultibodyjointset_new();return this.__wbg_ptr=t>>>0,this}createJoint(t,e,i,n){return T(t,Ye),u.rawmultibodyjointset_createJoint(this.__wbg_ptr,t.__wbg_ptr,e,i,n)}remove(t,e){u.rawmultibodyjointset_remove(this.__wbg_ptr,t,e)}contains(t){return u.rawmultibodyjointset_contains(this.__wbg_ptr,t)!==0}forEachJointHandle(t){try{u.rawmultibodyjointset_forEachJointHandle(this.__wbg_ptr,Qt(t))}finally{Vt[Jt++]=void 0}}forEachJointAttachedToRigidBody(t,e){try{u.rawmultibodyjointset_forEachJointAttachedToRigidBody(this.__wbg_ptr,t,Qt(e))}finally{Vt[Jt++]=void 0}}}class Pi{static __wrap(t){t>>>=0;const e=Object.create(Pi.prototype);return e.__wbg_ptr=t,e}__destroy_into_raw(){const t=this.__wbg_ptr;return this.__wbg_ptr=0,t}free(){const t=this.__destroy_into_raw();u.__wbg_rawnarrowphase_free(t)}constructor(){const t=u.rawnarrowphase_new();return this.__wbg_ptr=t>>>0,this}contact_pairs_with(t,e){u.rawnarrowphase_contact_pairs_with(this.__wbg_ptr,t,Rn(e))}contact_pair(t,e){const i=u.rawnarrowphase_contact_pair(this.__wbg_ptr,t,e);return i===0?void 0:La.__wrap(i)}intersection_pairs_with(t,e){u.rawnarrowphase_intersection_pairs_with(this.__wbg_ptr,t,Rn(e))}intersection_pair(t,e){return u.rawnarrowphase_intersection_pair(this.__wbg_ptr,t,e)!==0}}class mu{__destroy_into_raw(){const t=this.__wbg_ptr;return this.__wbg_ptr=0,t}free(){const t=this.__destroy_into_raw();u.__wbg_rawphysicspipeline_free(t)}constructor(){const t=u.rawphysicspipeline_new();return this.__wbg_ptr=t>>>0,this}step(t,e,i,n,s,a,o,l,c,h){T(t,P),T(e,Xi),T(i,mi),T(n,ji),T(s,Pi),T(a,le),T(o,oe),T(l,_i),T(c,fi),T(h,va),u.rawphysicspipeline_step(this.__wbg_ptr,t.__wbg_ptr,e.__wbg_ptr,i.__wbg_ptr,n.__wbg_ptr,s.__wbg_ptr,a.__wbg_ptr,o.__wbg_ptr,l.__wbg_ptr,c.__wbg_ptr,h.__wbg_ptr)}stepWithEvents(t,e,i,n,s,a,o,l,c,h,d,p,_,f){T(t,P),T(e,Xi),T(i,mi),T(n,ji),T(s,Pi),T(a,le),T(o,oe),T(l,_i),T(c,fi),T(h,va),T(d,pu),u.rawphysicspipeline_stepWithEvents(this.__wbg_ptr,t.__wbg_ptr,e.__wbg_ptr,i.__wbg_ptr,n.__wbg_ptr,s.__wbg_ptr,a.__wbg_ptr,o.__wbg_ptr,l.__wbg_ptr,c.__wbg_ptr,h.__wbg_ptr,d.__wbg_ptr,Rn(p),Rn(_),Rn(f))}}class ls{static __wrap(t){t>>>=0;const e=Object.create(ls.prototype);return e.__wbg_ptr=t,e}__destroy_into_raw(){const t=this.__wbg_ptr;return this.__wbg_ptr=0,t}free(){const t=this.__destroy_into_raw();u.__wbg_rawpointcolliderprojection_free(t)}colliderHandle(){return u.rawpointcolliderprojection_colliderHandle(this.__wbg_ptr)}point(){const t=u.rawpointcolliderprojection_point(this.__wbg_ptr);return P.__wrap(t)}isInside(){return u.rawpointcolliderprojection_isInside(this.__wbg_ptr)!==0}featureType(){return u.rawpointcolliderprojection_featureType(this.__wbg_ptr)}featureId(){try{const i=u.__wbindgen_add_to_stack_pointer(-16);u.rawpointcolliderprojection_featureId(i,this.__wbg_ptr);var t=Et()[i/4+0],e=Et()[i/4+1];return t===0?void 0:e>>>0}finally{u.__wbindgen_add_to_stack_pointer(16)}}}class cs{static __wrap(t){t>>>=0;const e=Object.create(cs.prototype);return e.__wbg_ptr=t,e}__destroy_into_raw(){const t=this.__wbg_ptr;return this.__wbg_ptr=0,t}free(){const t=this.__destroy_into_raw();u.__wbg_rawpointprojection_free(t)}point(){const t=u.rawpointprojection_point(this.__wbg_ptr);return P.__wrap(t)}isInside(){return u.rawpointprojection_isInside(this.__wbg_ptr)!==0}}class ya{__destroy_into_raw(){const t=this.__wbg_ptr;return this.__wbg_ptr=0,t}free(){const t=this.__destroy_into_raw();u.__wbg_rawquerypipeline_free(t)}constructor(){const t=u.rawquerypipeline_new();return this.__wbg_ptr=t>>>0,this}update(t,e){T(t,le),T(e,oe),u.rawquerypipeline_update(this.__wbg_ptr,t.__wbg_ptr,e.__wbg_ptr)}castRay(t,e,i,n,s,a,o,l,c,h,d){try{T(t,le),T(e,oe),T(i,P),T(n,P);const p=u.rawquerypipeline_castRay(this.__wbg_ptr,t.__wbg_ptr,e.__wbg_ptr,i.__wbg_ptr,n.__wbg_ptr,s,a,o,!ft(l),ft(l)?0:l,!ft(c),ft(c)?0:c,!ft(h),ft(h)?0:h,Qt(d));return p===0?void 0:Da.__wrap(p)}finally{Vt[Jt++]=void 0}}castRayAndGetNormal(t,e,i,n,s,a,o,l,c,h,d){try{T(t,le),T(e,oe),T(i,P),T(n,P);const p=u.rawquerypipeline_castRayAndGetNormal(this.__wbg_ptr,t.__wbg_ptr,e.__wbg_ptr,i.__wbg_ptr,n.__wbg_ptr,s,a,o,!ft(l),ft(l)?0:l,!ft(c),ft(c)?0:c,!ft(h),ft(h)?0:h,Qt(d));return p===0?void 0:Ua.__wrap(p)}finally{Vt[Jt++]=void 0}}intersectionsWithRay(t,e,i,n,s,a,o,l,c,h,d,p){try{T(t,le),T(e,oe),T(i,P),T(n,P),u.rawquerypipeline_intersectionsWithRay(this.__wbg_ptr,t.__wbg_ptr,e.__wbg_ptr,i.__wbg_ptr,n.__wbg_ptr,s,a,Qt(o),l,!ft(c),ft(c)?0:c,!ft(h),ft(h)?0:h,!ft(d),ft(d)?0:d,Qt(p))}finally{Vt[Jt++]=void 0,Vt[Jt++]=void 0}}intersectionWithShape(t,e,i,n,s,a,o,l,c,h){try{const _=u.__wbindgen_add_to_stack_pointer(-16);T(t,le),T(e,oe),T(i,P),T(n,Ot),T(s,xt),u.rawquerypipeline_intersectionWithShape(_,this.__wbg_ptr,t.__wbg_ptr,e.__wbg_ptr,i.__wbg_ptr,n.__wbg_ptr,s.__wbg_ptr,a,!ft(o),ft(o)?0:o,!ft(l),ft(l)?0:l,!ft(c),ft(c)?0:c,Qt(h));var d=Et()[_/4+0],p=Kr()[_/8+1];return d===0?void 0:p}finally{u.__wbindgen_add_to_stack_pointer(16),Vt[Jt++]=void 0}}projectPoint(t,e,i,n,s,a,o,l,c){try{T(t,le),T(e,oe),T(i,P);const h=u.rawquerypipeline_projectPoint(this.__wbg_ptr,t.__wbg_ptr,e.__wbg_ptr,i.__wbg_ptr,n,s,!ft(a),ft(a)?0:a,!ft(o),ft(o)?0:o,!ft(l),ft(l)?0:l,Qt(c));return h===0?void 0:ls.__wrap(h)}finally{Vt[Jt++]=void 0}}projectPointAndGetFeature(t,e,i,n,s,a,o,l){try{T(t,le),T(e,oe),T(i,P);const c=u.rawquerypipeline_projectPointAndGetFeature(this.__wbg_ptr,t.__wbg_ptr,e.__wbg_ptr,i.__wbg_ptr,n,!ft(s),ft(s)?0:s,!ft(a),ft(a)?0:a,!ft(o),ft(o)?0:o,Qt(l));return c===0?void 0:ls.__wrap(c)}finally{Vt[Jt++]=void 0}}intersectionsWithPoint(t,e,i,n,s,a,o,l,c){try{T(t,le),T(e,oe),T(i,P),u.rawquerypipeline_intersectionsWithPoint(this.__wbg_ptr,t.__wbg_ptr,e.__wbg_ptr,i.__wbg_ptr,Qt(n),s,!ft(a),ft(a)?0:a,!ft(o),ft(o)?0:o,!ft(l),ft(l)?0:l,Qt(c))}finally{Vt[Jt++]=void 0,Vt[Jt++]=void 0}}castShape(t,e,i,n,s,a,o,l,c,h,d,p,_,f){try{T(t,le),T(e,oe),T(i,P),T(n,Ot),T(s,P),T(a,xt);const g=u.rawquerypipeline_castShape(this.__wbg_ptr,t.__wbg_ptr,e.__wbg_ptr,i.__wbg_ptr,n.__wbg_ptr,s.__wbg_ptr,a.__wbg_ptr,o,l,c,h,!ft(d),ft(d)?0:d,!ft(p),ft(p)?0:p,!ft(_),ft(_)?0:_,Qt(f));return g===0?void 0:os.__wrap(g)}finally{Vt[Jt++]=void 0}}intersectionsWithShape(t,e,i,n,s,a,o,l,c,h,d){try{T(t,le),T(e,oe),T(i,P),T(n,Ot),T(s,xt),u.rawquerypipeline_intersectionsWithShape(this.__wbg_ptr,t.__wbg_ptr,e.__wbg_ptr,i.__wbg_ptr,n.__wbg_ptr,s.__wbg_ptr,Qt(a),o,!ft(l),ft(l)?0:l,!ft(c),ft(c)?0:c,!ft(h),ft(h)?0:h,Qt(d))}finally{Vt[Jt++]=void 0,Vt[Jt++]=void 0}}collidersWithAabbIntersectingAabb(t,e,i){try{T(t,P),T(e,P),u.rawquerypipeline_collidersWithAabbIntersectingAabb(this.__wbg_ptr,t.__wbg_ptr,e.__wbg_ptr,Qt(i))}finally{Vt[Jt++]=void 0}}}class Da{static __wrap(t){t>>>=0;const e=Object.create(Da.prototype);return e.__wbg_ptr=t,e}__destroy_into_raw(){const t=this.__wbg_ptr;return this.__wbg_ptr=0,t}free(){const t=this.__destroy_into_raw();u.__wbg_rawraycolliderhit_free(t)}colliderHandle(){return u.rawcharactercollision_handle(this.__wbg_ptr)}timeOfImpact(){return u.rawcollidershapecasthit_time_of_impact(this.__wbg_ptr)}}class Ua{static __wrap(t){t>>>=0;const e=Object.create(Ua.prototype);return e.__wbg_ptr=t,e}__destroy_into_raw(){const t=this.__wbg_ptr;return this.__wbg_ptr=0,t}free(){const t=this.__destroy_into_raw();u.__wbg_rawraycolliderintersection_free(t)}colliderHandle(){return u.rawpointcolliderprojection_colliderHandle(this.__wbg_ptr)}normal(){const t=u.rawcollidershapecasthit_witness1(this.__wbg_ptr);return P.__wrap(t)}time_of_impact(){return u.rawcollidershapecasthit_time_of_impact(this.__wbg_ptr)}featureType(){return u.rawpointcolliderprojection_featureType(this.__wbg_ptr)}featureId(){try{const i=u.__wbindgen_add_to_stack_pointer(-16);u.rawpointcolliderprojection_featureId(i,this.__wbg_ptr);var t=Et()[i/4+0],e=Et()[i/4+1];return t===0?void 0:e>>>0}finally{u.__wbindgen_add_to_stack_pointer(16)}}}class hs{static __wrap(t){t>>>=0;const e=Object.create(hs.prototype);return e.__wbg_ptr=t,e}__destroy_into_raw(){const t=this.__wbg_ptr;return this.__wbg_ptr=0,t}free(){const t=this.__destroy_into_raw();u.__wbg_rawrayintersection_free(t)}normal(){const t=u.rawcollidershapecasthit_witness1(this.__wbg_ptr);return P.__wrap(t)}time_of_impact(){return u.rawcollidershapecasthit_time_of_impact(this.__wbg_ptr)}featureType(){return u.rawpointcolliderprojection_featureType(this.__wbg_ptr)}featureId(){try{const i=u.__wbindgen_add_to_stack_pointer(-16);u.rawpointcolliderprojection_featureId(i,this.__wbg_ptr);var t=Et()[i/4+0],e=Et()[i/4+1];return t===0?void 0:e>>>0}finally{u.__wbindgen_add_to_stack_pointer(16)}}}class le{static __wrap(t){t>>>=0;const e=Object.create(le.prototype);return e.__wbg_ptr=t,e}__destroy_into_raw(){const t=this.__wbg_ptr;return this.__wbg_ptr=0,t}free(){const t=this.__destroy_into_raw();u.__wbg_rawrigidbodyset_free(t)}rbTranslation(t){const e=u.rawrigidbodyset_rbTranslation(this.__wbg_ptr,t);return P.__wrap(e)}rbRotation(t){const e=u.rawrigidbodyset_rbRotation(this.__wbg_ptr,t);return Ot.__wrap(e)}rbSleep(t){u.rawrigidbodyset_rbSleep(this.__wbg_ptr,t)}rbIsSleeping(t){return u.rawrigidbodyset_rbIsSleeping(this.__wbg_ptr,t)!==0}rbIsMoving(t){return u.rawrigidbodyset_rbIsMoving(this.__wbg_ptr,t)!==0}rbNextTranslation(t){const e=u.rawrigidbodyset_rbNextTranslation(this.__wbg_ptr,t);return P.__wrap(e)}rbNextRotation(t){const e=u.rawrigidbodyset_rbNextRotation(this.__wbg_ptr,t);return Ot.__wrap(e)}rbSetTranslation(t,e,i,n,s){u.rawrigidbodyset_rbSetTranslation(this.__wbg_ptr,t,e,i,n,s)}rbSetRotation(t,e,i,n,s,a){u.rawrigidbodyset_rbSetRotation(this.__wbg_ptr,t,e,i,n,s,a)}rbSetLinvel(t,e,i){T(e,P),u.rawrigidbodyset_rbSetLinvel(this.__wbg_ptr,t,e.__wbg_ptr,i)}rbSetAngvel(t,e,i){T(e,P),u.rawrigidbodyset_rbSetAngvel(this.__wbg_ptr,t,e.__wbg_ptr,i)}rbSetNextKinematicTranslation(t,e,i,n){u.rawrigidbodyset_rbSetNextKinematicTranslation(this.__wbg_ptr,t,e,i,n)}rbSetNextKinematicRotation(t,e,i,n,s){u.rawrigidbodyset_rbSetNextKinematicRotation(this.__wbg_ptr,t,e,i,n,s)}rbRecomputeMassPropertiesFromColliders(t,e){T(e,oe),u.rawrigidbodyset_rbRecomputeMassPropertiesFromColliders(this.__wbg_ptr,t,e.__wbg_ptr)}rbSetAdditionalMass(t,e,i){u.rawrigidbodyset_rbSetAdditionalMass(this.__wbg_ptr,t,e,i)}rbSetAdditionalMassProperties(t,e,i,n,s,a){T(i,P),T(n,P),T(s,Ot),u.rawrigidbodyset_rbSetAdditionalMassProperties(this.__wbg_ptr,t,e,i.__wbg_ptr,n.__wbg_ptr,s.__wbg_ptr,a)}rbLinvel(t){const e=u.rawrigidbodyset_rbLinvel(this.__wbg_ptr,t);return P.__wrap(e)}rbAngvel(t){const e=u.rawrigidbodyset_rbAngvel(this.__wbg_ptr,t);return P.__wrap(e)}rbLockTranslations(t,e,i){u.rawrigidbodyset_rbLockTranslations(this.__wbg_ptr,t,e,i)}rbSetEnabledTranslations(t,e,i,n,s){u.rawrigidbodyset_rbSetEnabledTranslations(this.__wbg_ptr,t,e,i,n,s)}rbLockRotations(t,e,i){u.rawrigidbodyset_rbLockRotations(this.__wbg_ptr,t,e,i)}rbSetEnabledRotations(t,e,i,n,s){u.rawrigidbodyset_rbSetEnabledRotations(this.__wbg_ptr,t,e,i,n,s)}rbDominanceGroup(t){return u.rawrigidbodyset_rbDominanceGroup(this.__wbg_ptr,t)}rbSetDominanceGroup(t,e){u.rawrigidbodyset_rbSetDominanceGroup(this.__wbg_ptr,t,e)}rbEnableCcd(t,e){u.rawrigidbodyset_rbEnableCcd(this.__wbg_ptr,t,e)}rbSetSoftCcdPrediction(t,e){u.rawrigidbodyset_rbSetSoftCcdPrediction(this.__wbg_ptr,t,e)}rbMass(t){return u.rawrigidbodyset_rbMass(this.__wbg_ptr,t)}rbInvMass(t){return u.rawrigidbodyset_rbInvMass(this.__wbg_ptr,t)}rbEffectiveInvMass(t){const e=u.rawrigidbodyset_rbEffectiveInvMass(this.__wbg_ptr,t);return P.__wrap(e)}rbLocalCom(t){const e=u.rawrigidbodyset_rbLocalCom(this.__wbg_ptr,t);return P.__wrap(e)}rbWorldCom(t){const e=u.rawrigidbodyset_rbWorldCom(this.__wbg_ptr,t);return P.__wrap(e)}rbInvPrincipalInertiaSqrt(t){const e=u.rawrigidbodyset_rbInvPrincipalInertiaSqrt(this.__wbg_ptr,t);return P.__wrap(e)}rbPrincipalInertiaLocalFrame(t){const e=u.rawrigidbodyset_rbPrincipalInertiaLocalFrame(this.__wbg_ptr,t);return Ot.__wrap(e)}rbPrincipalInertia(t){const e=u.rawrigidbodyset_rbPrincipalInertia(this.__wbg_ptr,t);return P.__wrap(e)}rbEffectiveWorldInvInertiaSqrt(t){const e=u.rawrigidbodyset_rbEffectiveWorldInvInertiaSqrt(this.__wbg_ptr,t);return ds.__wrap(e)}rbEffectiveAngularInertia(t){const e=u.rawrigidbodyset_rbEffectiveAngularInertia(this.__wbg_ptr,t);return ds.__wrap(e)}rbWakeUp(t){u.rawrigidbodyset_rbWakeUp(this.__wbg_ptr,t)}rbIsCcdEnabled(t){return u.rawrigidbodyset_rbIsCcdEnabled(this.__wbg_ptr,t)!==0}rbSoftCcdPrediction(t){return u.rawrigidbodyset_rbSoftCcdPrediction(this.__wbg_ptr,t)}rbNumColliders(t){return u.rawrigidbodyset_rbNumColliders(this.__wbg_ptr,t)>>>0}rbCollider(t,e){return u.rawrigidbodyset_rbCollider(this.__wbg_ptr,t,e)}rbBodyType(t){return u.rawrigidbodyset_rbBodyType(this.__wbg_ptr,t)}rbSetBodyType(t,e,i){u.rawrigidbodyset_rbSetBodyType(this.__wbg_ptr,t,e,i)}rbIsFixed(t){return u.rawrigidbodyset_rbIsFixed(this.__wbg_ptr,t)!==0}rbIsKinematic(t){return u.rawrigidbodyset_rbIsKinematic(this.__wbg_ptr,t)!==0}rbIsDynamic(t){return u.rawrigidbodyset_rbIsDynamic(this.__wbg_ptr,t)!==0}rbLinearDamping(t){return u.rawrigidbodyset_rbLinearDamping(this.__wbg_ptr,t)}rbAngularDamping(t){return u.rawrigidbodyset_rbAngularDamping(this.__wbg_ptr,t)}rbSetLinearDamping(t,e){u.rawrigidbodyset_rbSetLinearDamping(this.__wbg_ptr,t,e)}rbSetAngularDamping(t,e){u.rawrigidbodyset_rbSetAngularDamping(this.__wbg_ptr,t,e)}rbSetEnabled(t,e){u.rawrigidbodyset_rbSetEnabled(this.__wbg_ptr,t,e)}rbIsEnabled(t){return u.rawrigidbodyset_rbIsEnabled(this.__wbg_ptr,t)!==0}rbGravityScale(t){return u.rawrigidbodyset_rbGravityScale(this.__wbg_ptr,t)}rbSetGravityScale(t,e,i){u.rawrigidbodyset_rbSetGravityScale(this.__wbg_ptr,t,e,i)}rbResetForces(t,e){u.rawrigidbodyset_rbResetForces(this.__wbg_ptr,t,e)}rbResetTorques(t,e){u.rawrigidbodyset_rbResetTorques(this.__wbg_ptr,t,e)}rbAddForce(t,e,i){T(e,P),u.rawrigidbodyset_rbAddForce(this.__wbg_ptr,t,e.__wbg_ptr,i)}rbApplyImpulse(t,e,i){T(e,P),u.rawrigidbodyset_rbApplyImpulse(this.__wbg_ptr,t,e.__wbg_ptr,i)}rbAddTorque(t,e,i){T(e,P),u.rawrigidbodyset_rbAddTorque(this.__wbg_ptr,t,e.__wbg_ptr,i)}rbApplyTorqueImpulse(t,e,i){T(e,P),u.rawrigidbodyset_rbApplyTorqueImpulse(this.__wbg_ptr,t,e.__wbg_ptr,i)}rbAddForceAtPoint(t,e,i,n){T(e,P),T(i,P),u.rawrigidbodyset_rbAddForceAtPoint(this.__wbg_ptr,t,e.__wbg_ptr,i.__wbg_ptr,n)}rbApplyImpulseAtPoint(t,e,i,n){T(e,P),T(i,P),u.rawrigidbodyset_rbApplyImpulseAtPoint(this.__wbg_ptr,t,e.__wbg_ptr,i.__wbg_ptr,n)}rbAdditionalSolverIterations(t){return u.rawrigidbodyset_rbAdditionalSolverIterations(this.__wbg_ptr,t)>>>0}rbSetAdditionalSolverIterations(t,e){u.rawrigidbodyset_rbSetAdditionalSolverIterations(this.__wbg_ptr,t,e)}rbUserData(t){return u.rawrigidbodyset_rbUserData(this.__wbg_ptr,t)>>>0}rbSetUserData(t,e){u.rawrigidbodyset_rbSetUserData(this.__wbg_ptr,t,e)}constructor(){const t=u.rawrigidbodyset_new();return this.__wbg_ptr=t>>>0,this}createRigidBody(t,e,i,n,s,a,o,l,c,h,d,p,_,f,g,m,y,w,v,R,N,A,C,k,D,V){return T(e,P),T(i,Ot),T(o,P),T(l,P),T(c,P),T(h,P),T(d,Ot),u.rawrigidbodyset_createRigidBody(this.__wbg_ptr,t,e.__wbg_ptr,i.__wbg_ptr,n,s,a,o.__wbg_ptr,l.__wbg_ptr,c.__wbg_ptr,h.__wbg_ptr,d.__wbg_ptr,p,_,f,g,m,y,w,v,R,N,A,C,k,D,V)}remove(t,e,i,n,s){T(e,mi),T(i,oe),T(n,_i),T(s,fi),u.rawrigidbodyset_remove(this.__wbg_ptr,t,e.__wbg_ptr,i.__wbg_ptr,n.__wbg_ptr,s.__wbg_ptr)}len(){return u.rawcolliderset_len(this.__wbg_ptr)>>>0}contains(t){return u.rawrigidbodyset_contains(this.__wbg_ptr,t)!==0}forEachRigidBodyHandle(t){try{u.rawrigidbodyset_forEachRigidBodyHandle(this.__wbg_ptr,Qt(t))}finally{Vt[Jt++]=void 0}}propagateModifiedBodyPositionsToColliders(t){T(t,oe),u.rawrigidbodyset_propagateModifiedBodyPositionsToColliders(this.__wbg_ptr,t.__wbg_ptr)}}class Ot{static __wrap(t){t>>>=0;const e=Object.create(Ot.prototype);return e.__wbg_ptr=t,e}__destroy_into_raw(){const t=this.__wbg_ptr;return this.__wbg_ptr=0,t}free(){const t=this.__destroy_into_raw();u.__wbg_rawrotation_free(t)}constructor(t,e,i,n){const s=u.rawrotation_new(t,e,i,n);return this.__wbg_ptr=s>>>0,this}static identity(){const t=u.rawrotation_identity();return Ot.__wrap(t)}get x(){return u.rawrotation_x(this.__wbg_ptr)}get y(){return u.rawintegrationparameters_dt(this.__wbg_ptr)}get z(){return u.rawcollidershapecasthit_time_of_impact(this.__wbg_ptr)}get w(){return u.rawintegrationparameters_erp(this.__wbg_ptr)}}class ds{static __wrap(t){t>>>=0;const e=Object.create(ds.prototype);return e.__wbg_ptr=t,e}__destroy_into_raw(){const t=this.__wbg_ptr;return this.__wbg_ptr=0,t}free(){const t=this.__destroy_into_raw();u.__wbg_rawsdpmatrix3_free(t)}elements(){return Yr(u.rawsdpmatrix3_elements(this.__wbg_ptr))}}class fu{__destroy_into_raw(){const t=this.__wbg_ptr;return this.__wbg_ptr=0,t}free(){const t=this.__destroy_into_raw();u.__wbg_rawserializationpipeline_free(t)}constructor(){const t=u.rawserializationpipeline_new();return this.__wbg_ptr=t>>>0,this}serializeAll(t,e,i,n,s,a,o,l,c){return T(t,P),T(e,Xi),T(i,mi),T(n,ji),T(s,Pi),T(a,le),T(o,oe),T(l,_i),T(c,fi),Yr(u.rawserializationpipeline_serializeAll(this.__wbg_ptr,t.__wbg_ptr,e.__wbg_ptr,i.__wbg_ptr,n.__wbg_ptr,s.__wbg_ptr,a.__wbg_ptr,o.__wbg_ptr,l.__wbg_ptr,c.__wbg_ptr))}deserializeAll(t){const e=u.rawserializationpipeline_deserializeAll(this.__wbg_ptr,Rn(t));return e===0?void 0:Ia.__wrap(e)}}class xt{static __wrap(t){t>>>=0;const e=Object.create(xt.prototype);return e.__wbg_ptr=t,e}__destroy_into_raw(){const t=this.__wbg_ptr;return this.__wbg_ptr=0,t}free(){const t=this.__destroy_into_raw();u.__wbg_rawshape_free(t)}static cuboid(t,e,i){const n=u.rawshape_cuboid(t,e,i);return xt.__wrap(n)}static roundCuboid(t,e,i,n){const s=u.rawshape_roundCuboid(t,e,i,n);return xt.__wrap(s)}static ball(t){const e=u.rawshape_ball(t);return xt.__wrap(e)}static halfspace(t){T(t,P);const e=u.rawshape_halfspace(t.__wbg_ptr);return xt.__wrap(e)}static capsule(t,e){const i=u.rawshape_capsule(t,e);return xt.__wrap(i)}static cylinder(t,e){const i=u.rawshape_cylinder(t,e);return xt.__wrap(i)}static roundCylinder(t,e,i){const n=u.rawshape_roundCylinder(t,e,i);return xt.__wrap(n)}static cone(t,e){const i=u.rawshape_cone(t,e);return xt.__wrap(i)}static roundCone(t,e,i){const n=u.rawshape_roundCone(t,e,i);return xt.__wrap(n)}static polyline(t,e){const i=Wi(t,u.__wbindgen_malloc),n=Ne,s=ts(e,u.__wbindgen_malloc),a=Ne,o=u.rawshape_polyline(i,n,s,a);return xt.__wrap(o)}static trimesh(t,e,i){const n=Wi(t,u.__wbindgen_malloc),s=Ne,a=ts(e,u.__wbindgen_malloc),o=Ne,l=u.rawshape_trimesh(n,s,a,o,i);return xt.__wrap(l)}static heightfield(t,e,i,n,s){const a=Wi(i,u.__wbindgen_malloc),o=Ne;T(n,P);const l=u.rawshape_heightfield(t,e,a,o,n.__wbg_ptr,s);return xt.__wrap(l)}static segment(t,e){T(t,P),T(e,P);const i=u.rawshape_segment(t.__wbg_ptr,e.__wbg_ptr);return xt.__wrap(i)}static triangle(t,e,i){T(t,P),T(e,P),T(i,P);const n=u.rawshape_triangle(t.__wbg_ptr,e.__wbg_ptr,i.__wbg_ptr);return xt.__wrap(n)}static roundTriangle(t,e,i,n){T(t,P),T(e,P),T(i,P);const s=u.rawshape_roundTriangle(t.__wbg_ptr,e.__wbg_ptr,i.__wbg_ptr,n);return xt.__wrap(s)}static convexHull(t){const e=Wi(t,u.__wbindgen_malloc),i=Ne,n=u.rawshape_convexHull(e,i);return n===0?void 0:xt.__wrap(n)}static roundConvexHull(t,e){const i=Wi(t,u.__wbindgen_malloc),n=Ne,s=u.rawshape_roundConvexHull(i,n,e);return s===0?void 0:xt.__wrap(s)}static convexMesh(t,e){const i=Wi(t,u.__wbindgen_malloc),n=Ne,s=ts(e,u.__wbindgen_malloc),a=Ne,o=u.rawshape_convexMesh(i,n,s,a);return o===0?void 0:xt.__wrap(o)}static roundConvexMesh(t,e,i){const n=Wi(t,u.__wbindgen_malloc),s=Ne,a=ts(e,u.__wbindgen_malloc),o=Ne,l=u.rawshape_roundConvexMesh(n,s,a,o,i);return l===0?void 0:xt.__wrap(l)}castShape(t,e,i,n,s,a,o,l,c,h){T(t,P),T(e,Ot),T(i,P),T(n,xt),T(s,P),T(a,Ot),T(o,P);const d=u.rawshape_castShape(this.__wbg_ptr,t.__wbg_ptr,e.__wbg_ptr,i.__wbg_ptr,n.__wbg_ptr,s.__wbg_ptr,a.__wbg_ptr,o.__wbg_ptr,l,c,h);return d===0?void 0:us.__wrap(d)}intersectsShape(t,e,i,n,s){return T(t,P),T(e,Ot),T(i,xt),T(n,P),T(s,Ot),u.rawshape_intersectsShape(this.__wbg_ptr,t.__wbg_ptr,e.__wbg_ptr,i.__wbg_ptr,n.__wbg_ptr,s.__wbg_ptr)!==0}contactShape(t,e,i,n,s,a){T(t,P),T(e,Ot),T(i,xt),T(n,P),T(s,Ot);const o=u.rawshape_contactShape(this.__wbg_ptr,t.__wbg_ptr,e.__wbg_ptr,i.__wbg_ptr,n.__wbg_ptr,s.__wbg_ptr,a);return o===0?void 0:er.__wrap(o)}containsPoint(t,e,i){return T(t,P),T(e,Ot),T(i,P),u.rawshape_containsPoint(this.__wbg_ptr,t.__wbg_ptr,e.__wbg_ptr,i.__wbg_ptr)!==0}projectPoint(t,e,i,n){T(t,P),T(e,Ot),T(i,P);const s=u.rawshape_projectPoint(this.__wbg_ptr,t.__wbg_ptr,e.__wbg_ptr,i.__wbg_ptr,n);return cs.__wrap(s)}intersectsRay(t,e,i,n,s){return T(t,P),T(e,Ot),T(i,P),T(n,P),u.rawshape_intersectsRay(this.__wbg_ptr,t.__wbg_ptr,e.__wbg_ptr,i.__wbg_ptr,n.__wbg_ptr,s)!==0}castRay(t,e,i,n,s,a){return T(t,P),T(e,Ot),T(i,P),T(n,P),u.rawshape_castRay(this.__wbg_ptr,t.__wbg_ptr,e.__wbg_ptr,i.__wbg_ptr,n.__wbg_ptr,s,a)}castRayAndGetNormal(t,e,i,n,s,a){T(t,P),T(e,Ot),T(i,P),T(n,P);const o=u.rawshape_castRayAndGetNormal(this.__wbg_ptr,t.__wbg_ptr,e.__wbg_ptr,i.__wbg_ptr,n.__wbg_ptr,s,a);return o===0?void 0:hs.__wrap(o)}}class us{static __wrap(t){t>>>=0;const e=Object.create(us.prototype);return e.__wbg_ptr=t,e}__destroy_into_raw(){const t=this.__wbg_ptr;return this.__wbg_ptr=0,t}free(){const t=this.__destroy_into_raw();u.__wbg_rawshapecasthit_free(t)}time_of_impact(){return u.rawrotation_x(this.__wbg_ptr)}witness1(){const t=u.rawshapecasthit_witness1(this.__wbg_ptr);return P.__wrap(t)}witness2(){const t=u.rawcontactforceevent_total_force(this.__wbg_ptr);return P.__wrap(t)}normal1(){const t=u.rawshapecasthit_normal1(this.__wbg_ptr);return P.__wrap(t)}normal2(){const t=u.rawshapecasthit_normal2(this.__wbg_ptr);return P.__wrap(t)}}class er{static __wrap(t){t>>>=0;const e=Object.create(er.prototype);return e.__wbg_ptr=t,e}__destroy_into_raw(){const t=this.__wbg_ptr;return this.__wbg_ptr=0,t}free(){const t=this.__destroy_into_raw();u.__wbg_rawshapecontact_free(t)}distance(){return u.rawkinematiccharactercontroller_maxSlopeClimbAngle(this.__wbg_ptr)}point1(){const t=u.rawpointprojection_point(this.__wbg_ptr);return P.__wrap(t)}point2(){const t=u.rawcollidershapecasthit_witness1(this.__wbg_ptr);return P.__wrap(t)}normal1(){const t=u.rawcollidershapecasthit_witness2(this.__wbg_ptr);return P.__wrap(t)}normal2(){const t=u.rawcharactercollision_translationDeltaApplied(this.__wbg_ptr);return P.__wrap(t)}}class P{static __wrap(t){t>>>=0;const e=Object.create(P.prototype);return e.__wbg_ptr=t,e}__destroy_into_raw(){const t=this.__wbg_ptr;return this.__wbg_ptr=0,t}free(){const t=this.__destroy_into_raw();u.__wbg_rawvector_free(t)}static zero(){const t=u.rawvector_zero();return P.__wrap(t)}constructor(t,e,i){const n=u.rawvector_new(t,e,i);return this.__wbg_ptr=n>>>0,this}get x(){return u.rawrotation_x(this.__wbg_ptr)}set x(t){u.rawvector_set_x(this.__wbg_ptr,t)}get y(){return u.rawintegrationparameters_dt(this.__wbg_ptr)}set y(t){u.rawintegrationparameters_set_dt(this.__wbg_ptr,t)}get z(){return u.rawcollidershapecasthit_time_of_impact(this.__wbg_ptr)}set z(t){u.rawvector_set_z(this.__wbg_ptr,t)}xyz(){const t=u.rawvector_xyz(this.__wbg_ptr);return P.__wrap(t)}yxz(){const t=u.rawvector_yxz(this.__wbg_ptr);return P.__wrap(t)}zxy(){const t=u.rawvector_zxy(this.__wbg_ptr);return P.__wrap(t)}xzy(){const t=u.rawvector_xzy(this.__wbg_ptr);return P.__wrap(t)}yzx(){const t=u.rawvector_yzx(this.__wbg_ptr);return P.__wrap(t)}zyx(){const t=u.rawvector_zyx(this.__wbg_ptr);return P.__wrap(t)}}class gu{constructor(t,e,i){this.x=t,this.y=e,this.z=i}}class I{static new(t,e,i){return new gu(t,e,i)}static intoRaw(t){return new P(t.x,t.y,t.z)}static zeros(){return I.new(0,0,0)}static fromRaw(t){if(!t)return null;let e=I.new(t.x,t.y,t.z);return t.free(),e}static copy(t,e){t.x=e.x,t.y=e.y,t.z=e.z}}class Cl{constructor(t,e,i,n){this.x=t,this.y=e,this.z=i,this.w=n}}class Nt{static identity(){return new Cl(0,0,0,1)}static fromRaw(t){if(!t)return null;let e=new Cl(t.x,t.y,t.z,t.w);return t.free(),e}static intoRaw(t){return new Ot(t.x,t.y,t.z,t.w)}static copy(t,e){t.x=e.x,t.y=e.y,t.z=e.z,t.w=e.w}}class wu{constructor(t){this.elements=t}get m11(){return this.elements[0]}get m12(){return this.elements[1]}get m21(){return this.m12}get m13(){return this.elements[2]}get m31(){return this.m13}get m22(){return this.elements[3]}get m23(){return this.elements[4]}get m32(){return this.m23}get m33(){return this.elements[5]}}class Pl{static fromRaw(t){const e=new wu(t.elements());return t.free(),e}}var ei,Ll,Il,Dl,is,$n,fe,Ul,Nl,ns,ba,xa,Ol,Sa,Cn;(function(r){r[r.Dynamic=0]="Dynamic",r[r.Fixed=1]="Fixed",r[r.KinematicPositionBased=2]="KinematicPositionBased",r[r.KinematicVelocityBased=3]="KinematicVelocityBased"})(ei||(ei={}));class Fl{constructor(t,e,i){this.rawSet=t,this.colliderSet=e,this.handle=i}finalizeDeserialization(t){this.colliderSet=t}isValid(){return this.rawSet.contains(this.handle)}lockTranslations(t,e){return this.rawSet.rbLockTranslations(this.handle,t,e)}lockRotations(t,e){return this.rawSet.rbLockRotations(this.handle,t,e)}setEnabledTranslations(t,e,i,n){return this.rawSet.rbSetEnabledTranslations(this.handle,t,e,i,n)}restrictTranslations(t,e,i,n){this.setEnabledTranslations(t,e,i,n)}setEnabledRotations(t,e,i,n){return this.rawSet.rbSetEnabledRotations(this.handle,t,e,i,n)}restrictRotations(t,e,i,n){this.setEnabledRotations(t,e,i,n)}dominanceGroup(){return this.rawSet.rbDominanceGroup(this.handle)}setDominanceGroup(t){this.rawSet.rbSetDominanceGroup(this.handle,t)}additionalSolverIterations(){return this.rawSet.rbAdditionalSolverIterations(this.handle)}setAdditionalSolverIterations(t){this.rawSet.rbSetAdditionalSolverIterations(this.handle,t)}enableCcd(t){this.rawSet.rbEnableCcd(this.handle,t)}setSoftCcdPrediction(t){this.rawSet.rbSetSoftCcdPrediction(this.handle,t)}softCcdPrediction(){return this.rawSet.rbSoftCcdPrediction(this.handle)}translation(){let t=this.rawSet.rbTranslation(this.handle);return I.fromRaw(t)}rotation(){let t=this.rawSet.rbRotation(this.handle);return Nt.fromRaw(t)}nextTranslation(){let t=this.rawSet.rbNextTranslation(this.handle);return I.fromRaw(t)}nextRotation(){let t=this.rawSet.rbNextRotation(this.handle);return Nt.fromRaw(t)}setTranslation(t,e){this.rawSet.rbSetTranslation(this.handle,t.x,t.y,t.z,e)}setLinvel(t,e){let i=I.intoRaw(t);this.rawSet.rbSetLinvel(this.handle,i,e),i.free()}gravityScale(){return this.rawSet.rbGravityScale(this.handle)}setGravityScale(t,e){this.rawSet.rbSetGravityScale(this.handle,t,e)}setRotation(t,e){this.rawSet.rbSetRotation(this.handle,t.x,t.y,t.z,t.w,e)}setAngvel(t,e){let i=I.intoRaw(t);this.rawSet.rbSetAngvel(this.handle,i,e),i.free()}setNextKinematicTranslation(t){this.rawSet.rbSetNextKinematicTranslation(this.handle,t.x,t.y,t.z)}setNextKinematicRotation(t){this.rawSet.rbSetNextKinematicRotation(this.handle,t.x,t.y,t.z,t.w)}linvel(){return I.fromRaw(this.rawSet.rbLinvel(this.handle))}angvel(){return I.fromRaw(this.rawSet.rbAngvel(this.handle))}mass(){return this.rawSet.rbMass(this.handle)}effectiveInvMass(){return I.fromRaw(this.rawSet.rbEffectiveInvMass(this.handle))}invMass(){return this.rawSet.rbInvMass(this.handle)}localCom(){return I.fromRaw(this.rawSet.rbLocalCom(this.handle))}worldCom(){return I.fromRaw(this.rawSet.rbWorldCom(this.handle))}invPrincipalInertiaSqrt(){return I.fromRaw(this.rawSet.rbInvPrincipalInertiaSqrt(this.handle))}principalInertia(){return I.fromRaw(this.rawSet.rbPrincipalInertia(this.handle))}principalInertiaLocalFrame(){return Nt.fromRaw(this.rawSet.rbPrincipalInertiaLocalFrame(this.handle))}effectiveWorldInvInertiaSqrt(){return Pl.fromRaw(this.rawSet.rbEffectiveWorldInvInertiaSqrt(this.handle))}effectiveAngularInertia(){return Pl.fromRaw(this.rawSet.rbEffectiveAngularInertia(this.handle))}sleep(){this.rawSet.rbSleep(this.handle)}wakeUp(){this.rawSet.rbWakeUp(this.handle)}isCcdEnabled(){return this.rawSet.rbIsCcdEnabled(this.handle)}numColliders(){return this.rawSet.rbNumColliders(this.handle)}collider(t){return this.colliderSet.get(this.rawSet.rbCollider(this.handle,t))}setEnabled(t){this.rawSet.rbSetEnabled(this.handle,t)}isEnabled(){return this.rawSet.rbIsEnabled(this.handle)}bodyType(){return this.rawSet.rbBodyType(this.handle)}setBodyType(t,e){return this.rawSet.rbSetBodyType(this.handle,t,e)}isSleeping(){return this.rawSet.rbIsSleeping(this.handle)}isMoving(){return this.rawSet.rbIsMoving(this.handle)}isFixed(){return this.rawSet.rbIsFixed(this.handle)}isKinematic(){return this.rawSet.rbIsKinematic(this.handle)}isDynamic(){return this.rawSet.rbIsDynamic(this.handle)}linearDamping(){return this.rawSet.rbLinearDamping(this.handle)}angularDamping(){return this.rawSet.rbAngularDamping(this.handle)}setLinearDamping(t){this.rawSet.rbSetLinearDamping(this.handle,t)}recomputeMassPropertiesFromColliders(){this.rawSet.rbRecomputeMassPropertiesFromColliders(this.handle,this.colliderSet.raw)}setAdditionalMass(t,e){this.rawSet.rbSetAdditionalMass(this.handle,t,e)}setAdditionalMassProperties(t,e,i,n,s){let a=I.intoRaw(e),o=I.intoRaw(i),l=Nt.intoRaw(n);this.rawSet.rbSetAdditionalMassProperties(this.handle,t,a,o,l,s),a.free(),o.free(),l.free()}setAngularDamping(t){this.rawSet.rbSetAngularDamping(this.handle,t)}resetForces(t){this.rawSet.rbResetForces(this.handle,t)}resetTorques(t){this.rawSet.rbResetTorques(this.handle,t)}addForce(t,e){const i=I.intoRaw(t);this.rawSet.rbAddForce(this.handle,i,e),i.free()}applyImpulse(t,e){const i=I.intoRaw(t);this.rawSet.rbApplyImpulse(this.handle,i,e),i.free()}addTorque(t,e){const i=I.intoRaw(t);this.rawSet.rbAddTorque(this.handle,i,e),i.free()}applyTorqueImpulse(t,e){const i=I.intoRaw(t);this.rawSet.rbApplyTorqueImpulse(this.handle,i,e),i.free()}addForceAtPoint(t,e,i){const n=I.intoRaw(t),s=I.intoRaw(e);this.rawSet.rbAddForceAtPoint(this.handle,n,s,i),n.free(),s.free()}applyImpulseAtPoint(t,e,i){const n=I.intoRaw(t),s=I.intoRaw(e);this.rawSet.rbApplyImpulseAtPoint(this.handle,n,s,i),n.free(),s.free()}}class Pe{constructor(t){this.enabled=!0,this.status=t,this.translation=I.zeros(),this.rotation=Nt.identity(),this.gravityScale=1,this.linvel=I.zeros(),this.mass=0,this.massOnly=!1,this.centerOfMass=I.zeros(),this.translationsEnabledX=!0,this.translationsEnabledY=!0,this.angvel=I.zeros(),this.principalAngularInertia=I.zeros(),this.angularInertiaLocalFrame=Nt.identity(),this.translationsEnabledZ=!0,this.rotationsEnabledX=!0,this.rotationsEnabledY=!0,this.rotationsEnabledZ=!0,this.linearDamping=0,this.angularDamping=0,this.canSleep=!0,this.sleeping=!1,this.ccdEnabled=!1,this.softCcdPrediction=0,this.dominanceGroup=0,this.additionalSolverIterations=0}static dynamic(){return new Pe(ei.Dynamic)}static kinematicPositionBased(){return new Pe(ei.KinematicPositionBased)}static kinematicVelocityBased(){return new Pe(ei.KinematicVelocityBased)}static fixed(){return new Pe(ei.Fixed)}static newDynamic(){return new Pe(ei.Dynamic)}static newKinematicPositionBased(){return new Pe(ei.KinematicPositionBased)}static newKinematicVelocityBased(){return new Pe(ei.KinematicVelocityBased)}static newStatic(){return new Pe(ei.Fixed)}setDominanceGroup(t){return this.dominanceGroup=t,this}setAdditionalSolverIterations(t){return this.additionalSolverIterations=t,this}setEnabled(t){return this.enabled=t,this}setTranslation(t,e,i){if(typeof t!="number"||typeof e!="number"||typeof i!="number")throw TypeError("The translation components must be numbers.");return this.translation={x:t,y:e,z:i},this}setRotation(t){return Nt.copy(this.rotation,t),this}setGravityScale(t){return this.gravityScale=t,this}setAdditionalMass(t){return this.mass=t,this.massOnly=!0,this}setLinvel(t,e,i){if(typeof t!="number"||typeof e!="number"||typeof i!="number")throw TypeError("The linvel components must be numbers.");return this.linvel={x:t,y:e,z:i},this}setAngvel(t){return I.copy(this.angvel,t),this}setAdditionalMassProperties(t,e,i,n){return this.mass=t,I.copy(this.centerOfMass,e),I.copy(this.principalAngularInertia,i),Nt.copy(this.angularInertiaLocalFrame,n),this.massOnly=!1,this}enabledTranslations(t,e,i){return this.translationsEnabledX=t,this.translationsEnabledY=e,this.translationsEnabledZ=i,this}restrictTranslations(t,e,i){return this.enabledTranslations(t,e,i)}lockTranslations(){return this.enabledTranslations(!1,!1,!1)}enabledRotations(t,e,i){return this.rotationsEnabledX=t,this.rotationsEnabledY=e,this.rotationsEnabledZ=i,this}restrictRotations(t,e,i){return this.enabledRotations(t,e,i)}lockRotations(){return this.restrictRotations(!1,!1,!1)}setLinearDamping(t){return this.linearDamping=t,this}setAngularDamping(t){return this.angularDamping=t,this}setCanSleep(t){return this.canSleep=t,this}setSleeping(t){return this.sleeping=t,this}setCcdEnabled(t){return this.ccdEnabled=t,this}setSoftCcdPrediction(t){return this.softCcdPrediction=t,this}setUserData(t){return this.userData=t,this}}class rs{constructor(){this.fconv=new Float64Array(1),this.uconv=new Uint32Array(this.fconv.buffer),this.data=new Array,this.size=0}set(t,e){let i=this.index(t);for(;this.data.length<=i;)this.data.push(null);this.data[i]==null&&(this.size+=1),this.data[i]=e}len(){return this.size}delete(t){let e=this.index(t);e<this.data.length&&(this.data[e]!=null&&(this.size-=1),this.data[e]=null)}clear(){this.data=new Array}get(t){let e=this.index(t);return e<this.data.length?this.data[e]:null}forEach(t){for(const e of this.data)e!=null&&t(e)}getAll(){return this.data.filter(t=>t!=null)}index(t){return this.fconv[0]=t,this.uconv[0]}}class vu{constructor(t){this.raw=t||new le,this.map=new rs,t&&t.forEachRigidBodyHandle(e=>{this.map.set(e,new Fl(t,null,e))})}free(){this.raw&&this.raw.free(),this.raw=void 0,this.map&&this.map.clear(),this.map=void 0}finalizeDeserialization(t){this.map.forEach(e=>e.finalizeDeserialization(t))}createRigidBody(t,e){let i=I.intoRaw(e.translation),n=Nt.intoRaw(e.rotation),s=I.intoRaw(e.linvel),a=I.intoRaw(e.centerOfMass),o=I.intoRaw(e.angvel),l=I.intoRaw(e.principalAngularInertia),c=Nt.intoRaw(e.angularInertiaLocalFrame),h=this.raw.createRigidBody(e.enabled,i,n,e.gravityScale,e.mass,e.massOnly,a,s,o,l,c,e.translationsEnabledX,e.translationsEnabledY,e.translationsEnabledZ,e.rotationsEnabledX,e.rotationsEnabledY,e.rotationsEnabledZ,e.linearDamping,e.angularDamping,e.status,e.canSleep,e.sleeping,e.softCcdPrediction,e.ccdEnabled,e.dominanceGroup,e.additionalSolverIterations);i.free(),n.free(),s.free(),a.free(),o.free(),l.free(),c.free();const d=new Fl(this.raw,t,h);return d.userData=e.userData,this.map.set(h,d),d}remove(t,e,i,n,s){for(let a=0;a<this.raw.rbNumColliders(t);a+=1)i.unmap(this.raw.rbCollider(t,a));n.forEachJointHandleAttachedToRigidBody(t,a=>n.unmap(a)),s.forEachJointHandleAttachedToRigidBody(t,a=>s.unmap(a)),this.raw.remove(t,e.raw,i.raw,n.raw,s.raw),this.map.delete(t)}len(){return this.map.len()}contains(t){return this.get(t)!=null}get(t){return this.map.get(t)}forEach(t){this.map.forEach(t)}forEachActiveRigidBody(t,e){t.forEachActiveRigidBodyHandle(i=>{e(this.get(i))})}getAll(){return this.map.getAll()}}class yu{constructor(t){this.raw=t||new Xi}free(){this.raw&&this.raw.free(),this.raw=void 0}get dt(){return this.raw.dt}get erp(){return this.raw.erp}get lengthUnit(){return this.raw.lengthUnit}get normalizedAllowedLinearError(){return this.raw.normalizedAllowedLinearError}get normalizedPredictionDistance(){return this.raw.normalizedPredictionDistance}get numSolverIterations(){return this.raw.numSolverIterations}get numAdditionalFrictionIterations(){return this.raw.numAdditionalFrictionIterations}get numInternalPgsIterations(){return this.raw.numInternalPgsIterations}get minIslandSize(){return this.raw.minIslandSize}get maxCcdSubsteps(){return this.raw.maxCcdSubsteps}set dt(t){this.raw.dt=t}set erp(t){this.raw.erp=t}set lengthUnit(t){this.raw.lengthUnit=t}set normalizedAllowedLinearError(t){this.raw.normalizedAllowedLinearError=t}set normalizedPredictionDistance(t){this.raw.normalizedPredictionDistance=t}set numSolverIterations(t){this.raw.numSolverIterations=t}set numAdditionalFrictionIterations(t){this.raw.numAdditionalFrictionIterations=t}set numInternalPgsIterations(t){this.raw.numInternalPgsIterations=t}set minIslandSize(t){this.raw.minIslandSize=t}set maxCcdSubsteps(t){this.raw.maxCcdSubsteps=t}switchToStandardPgsSolver(){this.raw.switchToStandardPgsSolver()}switchToSmallStepsPgsSolver(){this.raw.switchToSmallStepsPgsSolver()}switchToSmallStepsPgsSolverWithoutWarmstart(){this.raw.switchToSmallStepsPgsSolverWithoutWarmstart()}}(function(r){r[r.Revolute=0]="Revolute",r[r.Fixed=1]="Fixed",r[r.Prismatic=2]="Prismatic",r[r.Rope=3]="Rope",r[r.Spring=4]="Spring",r[r.Spherical=5]="Spherical",r[r.Generic=6]="Generic"})(Ll||(Ll={})),function(r){r[r.AccelerationBased=0]="AccelerationBased",r[r.ForceBased=1]="ForceBased"}(Il||(Il={})),function(r){r[r.X=1]="X",r[r.Y=2]="Y",r[r.Z=4]="Z",r[r.AngX=8]="AngX",r[r.AngY=16]="AngY",r[r.AngZ=32]="AngZ"}(Dl||(Dl={}));class ri{constructor(t,e,i){this.rawSet=t,this.bodySet=e,this.handle=i}static newTyped(t,e,i){switch(t.jointType(i)){case qe.Revolute:return new Eu(t,e,i);case qe.Prismatic:return new Mu(t,e,i);case qe.Fixed:return new bu(t,e,i);case qe.Spring:return new Su(t,e,i);case qe.Rope:return new xu(t,e,i);case qe.Spherical:return new Au(t,e,i);case qe.Generic:return new Tu(t,e,i);default:return new ri(t,e,i)}}finalizeDeserialization(t){this.bodySet=t}isValid(){return this.rawSet.contains(this.handle)}body1(){return this.bodySet.get(this.rawSet.jointBodyHandle1(this.handle))}body2(){return this.bodySet.get(this.rawSet.jointBodyHandle2(this.handle))}type(){return this.rawSet.jointType(this.handle)}frameX1(){return Nt.fromRaw(this.rawSet.jointFrameX1(this.handle))}frameX2(){return Nt.fromRaw(this.rawSet.jointFrameX2(this.handle))}anchor1(){return I.fromRaw(this.rawSet.jointAnchor1(this.handle))}anchor2(){return I.fromRaw(this.rawSet.jointAnchor2(this.handle))}setAnchor1(t){const e=I.intoRaw(t);this.rawSet.jointSetAnchor1(this.handle,e),e.free()}setAnchor2(t){const e=I.intoRaw(t);this.rawSet.jointSetAnchor2(this.handle,e),e.free()}setContactsEnabled(t){this.rawSet.jointSetContactsEnabled(this.handle,t)}contactsEnabled(){return this.rawSet.jointContactsEnabled(this.handle)}}class zl extends ri{limitsEnabled(){return this.rawSet.jointLimitsEnabled(this.handle,this.rawAxis())}limitsMin(){return this.rawSet.jointLimitsMin(this.handle,this.rawAxis())}limitsMax(){return this.rawSet.jointLimitsMax(this.handle,this.rawAxis())}setLimits(t,e){this.rawSet.jointSetLimits(this.handle,this.rawAxis(),t,e)}configureMotorModel(t){this.rawSet.jointConfigureMotorModel(this.handle,this.rawAxis(),t)}configureMotorVelocity(t,e){this.rawSet.jointConfigureMotorVelocity(this.handle,this.rawAxis(),t,e)}configureMotorPosition(t,e,i){this.rawSet.jointConfigureMotorPosition(this.handle,this.rawAxis(),t,e,i)}configureMotor(t,e,i,n){this.rawSet.jointConfigureMotor(this.handle,this.rawAxis(),t,e,i,n)}}class bu extends ri{}class xu extends ri{}class Su extends ri{}class Mu extends zl{rawAxis(){return es.X}}class Eu extends zl{rawAxis(){return es.AngX}}class Tu extends ri{}class Au extends ri{}class Ru{constructor(t){this.raw=t||new _i,this.map=new rs,t&&t.forEachJointHandle(e=>{this.map.set(e,ri.newTyped(t,null,e))})}free(){this.raw&&this.raw.free(),this.raw=void 0,this.map&&this.map.clear(),this.map=void 0}finalizeDeserialization(t){this.map.forEach(e=>e.finalizeDeserialization(t))}createJoint(t,e,i,n,s){const a=e.intoRaw(),o=this.raw.createJoint(a,i,n,s);a.free();let l=ri.newTyped(this.raw,t,o);return this.map.set(o,l),l}remove(t,e){this.raw.remove(t,e),this.unmap(t)}forEachJointHandleAttachedToRigidBody(t,e){this.raw.forEachJointAttachedToRigidBody(t,e)}unmap(t){this.map.delete(t)}len(){return this.map.len()}contains(t){return this.get(t)!=null}get(t){return this.map.get(t)}forEach(t){this.map.forEach(t)}getAll(){return this.map.getAll()}}class qi{constructor(t,e){this.rawSet=t,this.handle=e}static newTyped(t,e){switch(t.jointType(e)){case qe.Revolute:return new Lu(t,e);case qe.Prismatic:return new Pu(t,e);case qe.Fixed:return new Cu(t,e);case qe.Spherical:return new Iu(t,e);default:return new qi(t,e)}}isValid(){return this.rawSet.contains(this.handle)}setContactsEnabled(t){this.rawSet.jointSetContactsEnabled(this.handle,t)}contactsEnabled(){return this.rawSet.jointContactsEnabled(this.handle)}}class Bl extends qi{}class Cu extends qi{}class Pu extends Bl{rawAxis(){return es.X}}class Lu extends Bl{rawAxis(){return es.AngX}}class Iu extends qi{}class Du{constructor(t){this.raw=t||new fi,this.map=new rs,t&&t.forEachJointHandle(e=>{this.map.set(e,qi.newTyped(this.raw,e))})}free(){this.raw&&this.raw.free(),this.raw=void 0,this.map&&this.map.clear(),this.map=void 0}createJoint(t,e,i,n){const s=t.intoRaw(),a=this.raw.createJoint(s,e,i,n);s.free();let o=qi.newTyped(this.raw,a);return this.map.set(a,o),o}remove(t,e){this.raw.remove(t,e),this.map.delete(t)}unmap(t){this.map.delete(t)}len(){return this.map.len()}contains(t){return this.get(t)!=null}get(t){return this.map.get(t)}forEach(t){this.map.forEach(t)}forEachJointHandleAttachedToRigidBody(t,e){this.raw.forEachJointAttachedToRigidBody(t,e)}getAll(){return this.map.getAll()}}(function(r){r[r.Average=0]="Average",r[r.Min=1]="Min",r[r.Multiply=2]="Multiply",r[r.Max=3]="Max"})(is||(is={}));class Uu{constructor(t){this.raw=t||new va}free(){this.raw&&this.raw.free(),this.raw=void 0}}class Nu{constructor(t){this.raw=t||new mi}free(){this.raw&&this.raw.free(),this.raw=void 0}forEachActiveRigidBodyHandle(t){this.raw.forEachActiveRigidBodyHandle(t)}}class Ou{constructor(t){this.raw=t||new ji}free(){this.raw&&this.raw.free(),this.raw=void 0}}class Fu{constructor(t){this.raw=t||new Pi,this.tempManifold=new zu(null)}free(){this.raw&&this.raw.free(),this.raw=void 0}contactPairsWith(t,e){this.raw.contact_pairs_with(t,e)}intersectionPairsWith(t,e){this.raw.intersection_pairs_with(t,e)}contactPair(t,e,i){const n=this.raw.contact_pair(t,e);if(n){const s=n.collider1()!=t;let a;for(a=0;a<n.numContactManifolds();++a)this.tempManifold.raw=n.contactManifold(a),this.tempManifold.raw&&i(this.tempManifold,s),this.tempManifold.free();n.free()}}intersectionPair(t,e){return this.raw.intersection_pair(t,e)}}class zu{constructor(t){this.raw=t}free(){this.raw&&this.raw.free(),this.raw=void 0}normal(){return I.fromRaw(this.raw.normal())}localNormal1(){return I.fromRaw(this.raw.local_n1())}localNormal2(){return I.fromRaw(this.raw.local_n2())}subshape1(){return this.raw.subshape1()}subshape2(){return this.raw.subshape2()}numContacts(){return this.raw.num_contacts()}localContactPoint1(t){return I.fromRaw(this.raw.contact_local_p1(t))}localContactPoint2(t){return I.fromRaw(this.raw.contact_local_p2(t))}contactDist(t){return this.raw.contact_dist(t)}contactFid1(t){return this.raw.contact_fid1(t)}contactFid2(t){return this.raw.contact_fid2(t)}contactImpulse(t){return this.raw.contact_impulse(t)}contactTangentImpulseX(t){return this.raw.contact_tangent_impulse_x(t)}contactTangentImpulseY(t){return this.raw.contact_tangent_impulse_y(t)}numSolverContacts(){return this.raw.num_solver_contacts()}solverContactPoint(t){return I.fromRaw(this.raw.solver_contact_point(t))}solverContactDist(t){return this.raw.solver_contact_dist(t)}solverContactFriction(t){return this.raw.solver_contact_friction(t)}solverContactRestitution(t){return this.raw.solver_contact_restitution(t)}solverContactTangentVelocity(t){return I.fromRaw(this.raw.solver_contact_tangent_velocity(t))}}class ir{constructor(t,e,i,n,s){this.distance=t,this.point1=e,this.point2=i,this.normal1=n,this.normal2=s}static fromRaw(t){if(!t)return null;const e=new ir(t.distance(),I.fromRaw(t.point1()),I.fromRaw(t.point2()),I.fromRaw(t.normal1()),I.fromRaw(t.normal2()));return t.free(),e}}(function(r){r[r.Vertex=0]="Vertex",r[r.Edge=1]="Edge",r[r.Face=2]="Face",r[r.Unknown=3]="Unknown"})($n||($n={}));class ps{constructor(t,e){this.point=t,this.isInside=e}static fromRaw(t){if(!t)return null;const e=new ps(I.fromRaw(t.point()),t.isInside());return t.free(),e}}class _s{constructor(t,e,i,n,s){this.featureType=$n.Unknown,this.featureId=void 0,this.collider=t,this.point=e,this.isInside=i,s!==void 0&&(this.featureId=s),n!==void 0&&(this.featureType=n)}static fromRaw(t,e){if(!e)return null;const i=new _s(t.get(e.colliderHandle()),I.fromRaw(e.point()),e.isInside(),e.featureType(),e.featureId());return e.free(),i}}class kl{constructor(t,e){this.origin=t,this.dir=e}pointAt(t){return{x:this.origin.x+this.dir.x*t,y:this.origin.y+this.dir.y*t,z:this.origin.z+this.dir.z*t}}}class ms{constructor(t,e,i,n){this.featureType=$n.Unknown,this.featureId=void 0,this.timeOfImpact=t,this.normal=e,n!==void 0&&(this.featureId=n),i!==void 0&&(this.featureType=i)}static fromRaw(t){if(!t)return null;const e=new ms(t.time_of_impact(),I.fromRaw(t.normal()),t.featureType(),t.featureId());return t.free(),e}}class fs{constructor(t,e,i,n,s){this.featureType=$n.Unknown,this.featureId=void 0,this.collider=t,this.timeOfImpact=e,this.normal=i,s!==void 0&&(this.featureId=s),n!==void 0&&(this.featureType=n)}static fromRaw(t,e){if(!e)return null;const i=new fs(t.get(e.colliderHandle()),e.time_of_impact(),I.fromRaw(e.normal()),e.featureType(),e.featureId());return e.free(),i}}class Na{constructor(t,e){this.collider=t,this.timeOfImpact=e}static fromRaw(t,e){if(!e)return null;const i=new Na(t.get(e.colliderHandle()),e.timeOfImpact());return e.free(),i}}class nr{constructor(t,e,i,n,s){this.time_of_impact=t,this.witness1=e,this.witness2=i,this.normal1=n,this.normal2=s}static fromRaw(t,e){if(!e)return null;const i=new nr(e.time_of_impact(),I.fromRaw(e.witness1()),I.fromRaw(e.witness2()),I.fromRaw(e.normal1()),I.fromRaw(e.normal2()));return e.free(),i}}class gs extends nr{constructor(t,e,i,n,s,a){super(e,i,n,s,a),this.collider=t}static fromRaw(t,e){if(!e)return null;const i=new gs(t.get(e.colliderHandle()),e.time_of_impact(),I.fromRaw(e.witness1()),I.fromRaw(e.witness2()),I.fromRaw(e.normal1()),I.fromRaw(e.normal2()));return e.free(),i}}class ye{static fromRaw(t,e){const i=t.coShapeType(e);let n,s,a,o,l,c,h;switch(i){case be.Ball:return new Hl(t.coRadius(e));case be.Cuboid:return n=t.coHalfExtents(e),new Gl(n.x,n.y,n.z);case be.RoundCuboid:return n=t.coHalfExtents(e),s=t.coRoundRadius(e),new Vl(n.x,n.y,n.z,s);case be.Capsule:return l=t.coHalfHeight(e),c=t.coRadius(e),new Wl(l,c);case be.Segment:return a=t.coVertices(e),new jl(I.new(a[0],a[1],a[2]),I.new(a[3],a[4],a[5]));case be.Polyline:return a=t.coVertices(e),o=t.coIndices(e),new Yl(a,o);case be.Triangle:return a=t.coVertices(e),new Xl(I.new(a[0],a[1],a[2]),I.new(a[3],a[4],a[5]),I.new(a[6],a[7],a[8]));case be.RoundTriangle:return a=t.coVertices(e),s=t.coRoundRadius(e),new ql(I.new(a[0],a[1],a[2]),I.new(a[3],a[4],a[5]),I.new(a[6],a[7],a[8]),s);case be.HalfSpace:return h=I.fromRaw(t.coHalfspaceNormal(e)),new Bu(h);case be.TriMesh:a=t.coVertices(e),o=t.coIndices(e);const d=t.coTriMeshFlags(e);return new Jl(a,o,d);case be.HeightField:const p=t.coHeightfieldScale(e),_=t.coHeightfieldHeights(e),f=t.coHeightfieldNRows(e),g=t.coHeightfieldNCols(e),m=t.coHeightFieldFlags(e);return new Kl(f,g,_,p,m);case be.ConvexPolyhedron:return a=t.coVertices(e),o=t.coIndices(e),new Ma(a,o);case be.RoundConvexPolyhedron:return a=t.coVertices(e),o=t.coIndices(e),s=t.coRoundRadius(e),new Ea(a,o,s);case be.Cylinder:return l=t.coHalfHeight(e),c=t.coRadius(e),new Zl(l,c);case be.RoundCylinder:return l=t.coHalfHeight(e),c=t.coRadius(e),s=t.coRoundRadius(e),new $l(l,c,s);case be.Cone:return l=t.coHalfHeight(e),c=t.coRadius(e),new Ql(l,c);case be.RoundCone:return l=t.coHalfHeight(e),c=t.coRadius(e),s=t.coRoundRadius(e),new tc(l,c,s);default:throw new Error("unknown shape type: "+i)}}castShape(t,e,i,n,s,a,o,l,c,h){let d=I.intoRaw(t),p=Nt.intoRaw(e),_=I.intoRaw(i),f=I.intoRaw(s),g=Nt.intoRaw(a),m=I.intoRaw(o),y=this.intoRaw(),w=n.intoRaw(),v=nr.fromRaw(null,y.castShape(d,p,_,w,f,g,m,l,c,h));return d.free(),p.free(),_.free(),f.free(),g.free(),m.free(),y.free(),w.free(),v}intersectsShape(t,e,i,n,s){let a=I.intoRaw(t),o=Nt.intoRaw(e),l=I.intoRaw(n),c=Nt.intoRaw(s),h=this.intoRaw(),d=i.intoRaw(),p=h.intersectsShape(a,o,d,l,c);return a.free(),o.free(),l.free(),c.free(),h.free(),d.free(),p}contactShape(t,e,i,n,s,a){let o=I.intoRaw(t),l=Nt.intoRaw(e),c=I.intoRaw(n),h=Nt.intoRaw(s),d=this.intoRaw(),p=i.intoRaw(),_=ir.fromRaw(d.contactShape(o,l,p,c,h,a));return o.free(),l.free(),c.free(),h.free(),d.free(),p.free(),_}containsPoint(t,e,i){let n=I.intoRaw(t),s=Nt.intoRaw(e),a=I.intoRaw(i),o=this.intoRaw(),l=o.containsPoint(n,s,a);return n.free(),s.free(),a.free(),o.free(),l}projectPoint(t,e,i,n){let s=I.intoRaw(t),a=Nt.intoRaw(e),o=I.intoRaw(i),l=this.intoRaw(),c=ps.fromRaw(l.projectPoint(s,a,o,n));return s.free(),a.free(),o.free(),l.free(),c}intersectsRay(t,e,i,n){let s=I.intoRaw(e),a=Nt.intoRaw(i),o=I.intoRaw(t.origin),l=I.intoRaw(t.dir),c=this.intoRaw(),h=c.intersectsRay(s,a,o,l,n);return s.free(),a.free(),o.free(),l.free(),c.free(),h}castRay(t,e,i,n,s){let a=I.intoRaw(e),o=Nt.intoRaw(i),l=I.intoRaw(t.origin),c=I.intoRaw(t.dir),h=this.intoRaw(),d=h.castRay(a,o,l,c,n,s);return a.free(),o.free(),l.free(),c.free(),h.free(),d}castRayAndGetNormal(t,e,i,n,s){let a=I.intoRaw(e),o=Nt.intoRaw(i),l=I.intoRaw(t.origin),c=I.intoRaw(t.dir),h=this.intoRaw(),d=ms.fromRaw(h.castRayAndGetNormal(a,o,l,c,n,s));return a.free(),o.free(),l.free(),c.free(),h.free(),d}}(function(r){r[r.Ball=0]="Ball",r[r.Cuboid=1]="Cuboid",r[r.Capsule=2]="Capsule",r[r.Segment=3]="Segment",r[r.Polyline=4]="Polyline",r[r.Triangle=5]="Triangle",r[r.TriMesh=6]="TriMesh",r[r.HeightField=7]="HeightField",r[r.ConvexPolyhedron=9]="ConvexPolyhedron",r[r.Cylinder=10]="Cylinder",r[r.Cone=11]="Cone",r[r.RoundCuboid=12]="RoundCuboid",r[r.RoundTriangle=13]="RoundTriangle",r[r.RoundCylinder=14]="RoundCylinder",r[r.RoundCone=15]="RoundCone",r[r.RoundConvexPolyhedron=16]="RoundConvexPolyhedron",r[r.HalfSpace=17]="HalfSpace"})(fe||(fe={})),function(r){r[r.FIX_INTERNAL_EDGES=1]="FIX_INTERNAL_EDGES"}(Ul||(Ul={})),function(r){r[r.DELETE_BAD_TOPOLOGY_TRIANGLES=4]="DELETE_BAD_TOPOLOGY_TRIANGLES",r[r.ORIENTED=8]="ORIENTED",r[r.MERGE_DUPLICATE_VERTICES=16]="MERGE_DUPLICATE_VERTICES",r[r.DELETE_DEGENERATE_TRIANGLES=32]="DELETE_DEGENERATE_TRIANGLES",r[r.DELETE_DUPLICATE_TRIANGLES=64]="DELETE_DUPLICATE_TRIANGLES",r[r.FIX_INTERNAL_EDGES=152]="FIX_INTERNAL_EDGES"}(Nl||(Nl={}));class Hl extends ye{constructor(t){super(),this.type=fe.Ball,this.radius=t}intoRaw(){return xt.ball(this.radius)}}class Bu extends ye{constructor(t){super(),this.type=fe.HalfSpace,this.normal=t}intoRaw(){let t=I.intoRaw(this.normal),e=xt.halfspace(t);return t.free(),e}}class Gl extends ye{constructor(t,e,i){super(),this.type=fe.Cuboid,this.halfExtents=I.new(t,e,i)}intoRaw(){return xt.cuboid(this.halfExtents.x,this.halfExtents.y,this.halfExtents.z)}}class Vl extends ye{constructor(t,e,i,n){super(),this.type=fe.RoundCuboid,this.halfExtents=I.new(t,e,i),this.borderRadius=n}intoRaw(){return xt.roundCuboid(this.halfExtents.x,this.halfExtents.y,this.halfExtents.z,this.borderRadius)}}class Wl extends ye{constructor(t,e){super(),this.type=fe.Capsule,this.halfHeight=t,this.radius=e}intoRaw(){return xt.capsule(this.halfHeight,this.radius)}}class jl extends ye{constructor(t,e){super(),this.type=fe.Segment,this.a=t,this.b=e}intoRaw(){let t=I.intoRaw(this.a),e=I.intoRaw(this.b),i=xt.segment(t,e);return t.free(),e.free(),i}}class Xl extends ye{constructor(t,e,i){super(),this.type=fe.Triangle,this.a=t,this.b=e,this.c=i}intoRaw(){let t=I.intoRaw(this.a),e=I.intoRaw(this.b),i=I.intoRaw(this.c),n=xt.triangle(t,e,i);return t.free(),e.free(),i.free(),n}}class ql extends ye{constructor(t,e,i,n){super(),this.type=fe.RoundTriangle,this.a=t,this.b=e,this.c=i,this.borderRadius=n}intoRaw(){let t=I.intoRaw(this.a),e=I.intoRaw(this.b),i=I.intoRaw(this.c),n=xt.roundTriangle(t,e,i,this.borderRadius);return t.free(),e.free(),i.free(),n}}class Yl extends ye{constructor(t,e){super(),this.type=fe.Polyline,this.vertices=t,this.indices=e??new Uint32Array(0)}intoRaw(){return xt.polyline(this.vertices,this.indices)}}class Jl extends ye{constructor(t,e,i){super(),this.type=fe.TriMesh,this.vertices=t,this.indices=e,this.flags=i}intoRaw(){return xt.trimesh(this.vertices,this.indices,this.flags)}}class Ma extends ye{constructor(t,e){super(),this.type=fe.ConvexPolyhedron,this.vertices=t,this.indices=e}intoRaw(){return this.indices?xt.convexMesh(this.vertices,this.indices):xt.convexHull(this.vertices)}}class Ea extends ye{constructor(t,e,i){super(),this.type=fe.RoundConvexPolyhedron,this.vertices=t,this.indices=e,this.borderRadius=i}intoRaw(){return this.indices?xt.roundConvexMesh(this.vertices,this.indices,this.borderRadius):xt.roundConvexHull(this.vertices,this.borderRadius)}}class Kl extends ye{constructor(t,e,i,n,s){super(),this.type=fe.HeightField,this.nrows=t,this.ncols=e,this.heights=i,this.scale=n,this.flags=s}intoRaw(){let t=I.intoRaw(this.scale),e=xt.heightfield(this.nrows,this.ncols,this.heights,t,this.flags);return t.free(),e}}class Zl extends ye{constructor(t,e){super(),this.type=fe.Cylinder,this.halfHeight=t,this.radius=e}intoRaw(){return xt.cylinder(this.halfHeight,this.radius)}}class $l extends ye{constructor(t,e,i){super(),this.type=fe.RoundCylinder,this.borderRadius=i,this.halfHeight=t,this.radius=e}intoRaw(){return xt.roundCylinder(this.halfHeight,this.radius,this.borderRadius)}}class Ql extends ye{constructor(t,e){super(),this.type=fe.Cone,this.halfHeight=t,this.radius=e}intoRaw(){return xt.cone(this.halfHeight,this.radius)}}class tc extends ye{constructor(t,e,i){super(),this.type=fe.RoundCone,this.halfHeight=t,this.radius=e,this.borderRadius=i}intoRaw(){return xt.roundCone(this.halfHeight,this.radius,this.borderRadius)}}class ku{constructor(t){this.raw=t||new mu}free(){this.raw&&this.raw.free(),this.raw=void 0}step(t,e,i,n,s,a,o,l,c,h,d,p){let _=I.intoRaw(t);d?this.raw.stepWithEvents(_,e.raw,i.raw,n.raw,s.raw,a.raw,o.raw,l.raw,c.raw,h.raw,d.raw,p,p?p.filterContactPair:null,p?p.filterIntersectionPair:null):this.raw.step(_,e.raw,i.raw,n.raw,s.raw,a.raw,o.raw,l.raw,c.raw,h.raw),_.free()}}(function(r){r[r.EXCLUDE_FIXED=1]="EXCLUDE_FIXED",r[r.EXCLUDE_KINEMATIC=2]="EXCLUDE_KINEMATIC",r[r.EXCLUDE_DYNAMIC=4]="EXCLUDE_DYNAMIC",r[r.EXCLUDE_SENSORS=8]="EXCLUDE_SENSORS",r[r.EXCLUDE_SOLIDS=16]="EXCLUDE_SOLIDS",r[r.ONLY_DYNAMIC=3]="ONLY_DYNAMIC",r[r.ONLY_KINEMATIC=5]="ONLY_KINEMATIC",r[r.ONLY_FIXED=6]="ONLY_FIXED"})(ns||(ns={}));class Hu{constructor(t){this.raw=t||new ya}free(){this.raw&&this.raw.free(),this.raw=void 0}update(t,e){this.raw.update(t.raw,e.raw)}castRay(t,e,i,n,s,a,o,l,c,h){let d=I.intoRaw(i.origin),p=I.intoRaw(i.dir),_=Na.fromRaw(e,this.raw.castRay(t.raw,e.raw,d,p,n,s,a,o,l,c,h));return d.free(),p.free(),_}castRayAndGetNormal(t,e,i,n,s,a,o,l,c,h){let d=I.intoRaw(i.origin),p=I.intoRaw(i.dir),_=fs.fromRaw(e,this.raw.castRayAndGetNormal(t.raw,e.raw,d,p,n,s,a,o,l,c,h));return d.free(),p.free(),_}intersectionsWithRay(t,e,i,n,s,a,o,l,c,h,d){let p=I.intoRaw(i.origin),_=I.intoRaw(i.dir);this.raw.intersectionsWithRay(t.raw,e.raw,p,_,n,s,f=>a(fs.fromRaw(e,f)),o,l,c,h,d),p.free(),_.free()}intersectionWithShape(t,e,i,n,s,a,o,l,c,h){let d=I.intoRaw(i),p=Nt.intoRaw(n),_=s.intoRaw(),f=this.raw.intersectionWithShape(t.raw,e.raw,d,p,_,a,o,l,c,h);return d.free(),p.free(),_.free(),f}projectPoint(t,e,i,n,s,a,o,l,c){let h=I.intoRaw(i),d=_s.fromRaw(e,this.raw.projectPoint(t.raw,e.raw,h,n,s,a,o,l,c));return h.free(),d}projectPointAndGetFeature(t,e,i,n,s,a,o,l){let c=I.intoRaw(i),h=_s.fromRaw(e,this.raw.projectPointAndGetFeature(t.raw,e.raw,c,n,s,a,o,l));return c.free(),h}intersectionsWithPoint(t,e,i,n,s,a,o,l,c){let h=I.intoRaw(i);this.raw.intersectionsWithPoint(t.raw,e.raw,h,n,s,a,o,l,c),h.free()}castShape(t,e,i,n,s,a,o,l,c,h,d,p,_,f){let g=I.intoRaw(i),m=Nt.intoRaw(n),y=I.intoRaw(s),w=a.intoRaw(),v=gs.fromRaw(e,this.raw.castShape(t.raw,e.raw,g,m,y,w,o,l,c,h,d,p,_,f));return g.free(),m.free(),y.free(),w.free(),v}intersectionsWithShape(t,e,i,n,s,a,o,l,c,h,d){let p=I.intoRaw(i),_=Nt.intoRaw(n),f=s.intoRaw();this.raw.intersectionsWithShape(t.raw,e.raw,p,_,f,a,o,l,c,h,d),p.free(),_.free(),f.free()}collidersWithAabbIntersectingAabb(t,e,i){let n=I.intoRaw(t),s=I.intoRaw(e);this.raw.collidersWithAabbIntersectingAabb(n,s,i),n.free(),s.free()}}class ec{constructor(t){this.raw=t||new fu}free(){this.raw&&this.raw.free(),this.raw=void 0}serializeAll(t,e,i,n,s,a,o,l,c){let h=I.intoRaw(t);const d=this.raw.serializeAll(h,e.raw,i.raw,n.raw,s.raw,a.raw,o.raw,l.raw,c.raw);return h.free(),d}deserializeAll(t){return ws.fromRaw(this.raw.deserializeAll(t))}}class Gu{constructor(t,e){this.vertices=t,this.colors=e}}class Vu{constructor(t){this.raw=t||new du}free(){this.raw&&this.raw.free(),this.raw=void 0,this.vertices=void 0,this.colors=void 0}render(t,e,i,n,s){this.raw.render(t.raw,e.raw,i.raw,n.raw,s.raw),this.vertices=this.raw.vertices(),this.colors=this.raw.colors()}}class Wu{}class ju{constructor(t,e,i,n,s){this.params=e,this.bodies=i,this.colliders=n,this.queries=s,this.raw=new _u(t),this.rawCharacterCollision=new Rl,this._applyImpulsesToDynamicBodies=!1,this._characterMass=null}free(){this.raw&&(this.raw.free(),this.rawCharacterCollision.free()),this.raw=void 0,this.rawCharacterCollision=void 0}up(){return this.raw.up()}setUp(t){let e=I.intoRaw(t);return this.raw.setUp(e)}applyImpulsesToDynamicBodies(){return this._applyImpulsesToDynamicBodies}setApplyImpulsesToDynamicBodies(t){this._applyImpulsesToDynamicBodies=t}characterMass(){return this._characterMass}setCharacterMass(t){this._characterMass=t}offset(){return this.raw.offset()}setOffset(t){this.raw.setOffset(t)}normalNudgeFactor(){return this.raw.normalNudgeFactor()}setNormalNudgeFactor(t){this.raw.setNormalNudgeFactor(t)}slideEnabled(){return this.raw.slideEnabled()}setSlideEnabled(t){this.raw.setSlideEnabled(t)}autostepMaxHeight(){return this.raw.autostepMaxHeight()}autostepMinWidth(){return this.raw.autostepMinWidth()}autostepIncludesDynamicBodies(){return this.raw.autostepIncludesDynamicBodies()}autostepEnabled(){return this.raw.autostepEnabled()}enableAutostep(t,e,i){this.raw.enableAutostep(t,e,i)}disableAutostep(){return this.raw.disableAutostep()}maxSlopeClimbAngle(){return this.raw.maxSlopeClimbAngle()}setMaxSlopeClimbAngle(t){this.raw.setMaxSlopeClimbAngle(t)}minSlopeSlideAngle(){return this.raw.minSlopeSlideAngle()}setMinSlopeSlideAngle(t){this.raw.setMinSlopeSlideAngle(t)}snapToGroundDistance(){return this.raw.snapToGroundDistance()}enableSnapToGround(t){this.raw.enableSnapToGround(t)}disableSnapToGround(){this.raw.disableSnapToGround()}snapToGroundEnabled(){return this.raw.snapToGroundEnabled()}computeColliderMovement(t,e,i,n,s){let a=I.intoRaw(e);this.raw.computeColliderMovement(this.params.dt,this.bodies.raw,this.colliders.raw,this.queries.raw,t.handle,a,this._applyImpulsesToDynamicBodies,this._characterMass,i,n,this.colliders.castClosure(s)),a.free()}computedMovement(){return I.fromRaw(this.raw.computedMovement())}computedGrounded(){return this.raw.computedGrounded()}numComputedCollisions(){return this.raw.numComputedCollisions()}computedCollision(t,e){if(this.raw.computedCollision(t,this.rawCharacterCollision)){let i=this.rawCharacterCollision;return(e=e??new Wu).translationDeltaApplied=I.fromRaw(i.translationDeltaApplied()),e.translationDeltaRemaining=I.fromRaw(i.translationDeltaRemaining()),e.toi=i.toi(),e.witness1=I.fromRaw(i.worldWitness1()),e.witness2=I.fromRaw(i.worldWitness2()),e.normal1=I.fromRaw(i.worldNormal1()),e.normal2=I.fromRaw(i.worldNormal2()),e.collider=this.colliders.get(i.handle()),e}return null}}class Xu{constructor(t,e,i,n){this.raw=new uu(t.handle),this.bodies=e,this.colliders=i,this.queries=n,this._chassis=t}free(){this.raw&&this.raw.free(),this.raw=void 0}updateVehicle(t,e,i,n){this.raw.update_vehicle(t,this.bodies.raw,this.colliders.raw,this.queries.raw,e,i,this.colliders.castClosure(n))}currentVehicleSpeed(){return this.raw.current_vehicle_speed()}chassis(){return this._chassis}get indexUpAxis(){return this.raw.index_up_axis()}set indexUpAxis(t){this.raw.set_index_up_axis(t)}get indexForwardAxis(){return this.raw.index_forward_axis()}set setIndexForwardAxis(t){this.raw.set_index_forward_axis(t)}addWheel(t,e,i,n,s){let a=I.intoRaw(t),o=I.intoRaw(e),l=I.intoRaw(i);this.raw.add_wheel(a,o,l,n,s),a.free(),o.free(),l.free()}numWheels(){return this.raw.num_wheels()}wheelChassisConnectionPointCs(t){return I.fromRaw(this.raw.wheel_chassis_connection_point_cs(t))}setWheelChassisConnectionPointCs(t,e){let i=I.intoRaw(e);this.raw.set_wheel_chassis_connection_point_cs(t,i),i.free()}wheelSuspensionRestLength(t){return this.raw.wheel_suspension_rest_length(t)}setWheelSuspensionRestLength(t,e){this.raw.set_wheel_suspension_rest_length(t,e)}wheelMaxSuspensionTravel(t){return this.raw.wheel_max_suspension_travel(t)}setWheelMaxSuspensionTravel(t,e){this.raw.set_wheel_max_suspension_travel(t,e)}wheelRadius(t){return this.raw.wheel_radius(t)}setWheelRadius(t,e){this.raw.set_wheel_radius(t,e)}wheelSuspensionStiffness(t){return this.raw.wheel_suspension_stiffness(t)}setWheelSuspensionStiffness(t,e){this.raw.set_wheel_suspension_stiffness(t,e)}wheelSuspensionCompression(t){return this.raw.wheel_suspension_compression(t)}setWheelSuspensionCompression(t,e){this.raw.set_wheel_suspension_compression(t,e)}wheelSuspensionRelaxation(t){return this.raw.wheel_suspension_relaxation(t)}setWheelSuspensionRelaxation(t,e){this.raw.set_wheel_suspension_relaxation(t,e)}wheelMaxSuspensionForce(t){return this.raw.wheel_max_suspension_force(t)}setWheelMaxSuspensionForce(t,e){this.raw.set_wheel_max_suspension_force(t,e)}wheelBrake(t){return this.raw.wheel_brake(t)}setWheelBrake(t,e){this.raw.set_wheel_brake(t,e)}wheelSteering(t){return this.raw.wheel_steering(t)}setWheelSteering(t,e){this.raw.set_wheel_steering(t,e)}wheelEngineForce(t){return this.raw.wheel_engine_force(t)}setWheelEngineForce(t,e){this.raw.set_wheel_engine_force(t,e)}wheelDirectionCs(t){return I.fromRaw(this.raw.wheel_direction_cs(t))}setWheelDirectionCs(t,e){let i=I.intoRaw(e);this.raw.set_wheel_direction_cs(t,i),i.free()}wheelAxleCs(t){return I.fromRaw(this.raw.wheel_axle_cs(t))}setWheelAxleCs(t,e){let i=I.intoRaw(e);this.raw.set_wheel_axle_cs(t,i),i.free()}wheelFrictionSlip(t){return this.raw.wheel_friction_slip(t)}setWheelFrictionSlip(t,e){this.raw.set_wheel_friction_slip(t,e)}wheelSideFrictionStiffness(t){return this.raw.wheel_side_friction_stiffness(t)}setWheelSideFrictionStiffness(t,e){this.raw.set_wheel_side_friction_stiffness(t,e)}wheelRotation(t){return this.raw.wheel_rotation(t)}wheelForwardImpulse(t){return this.raw.wheel_forward_impulse(t)}wheelSideImpulse(t){return this.raw.wheel_side_impulse(t)}wheelSuspensionForce(t){return this.raw.wheel_suspension_force(t)}wheelContactNormal(t){return I.fromRaw(this.raw.wheel_contact_normal_ws(t))}wheelContactPoint(t){return I.fromRaw(this.raw.wheel_contact_point_ws(t))}wheelSuspensionLength(t){return this.raw.wheel_suspension_length(t)}wheelHardPoint(t){return I.fromRaw(this.raw.wheel_hard_point_ws(t))}wheelIsInContact(t){return this.raw.wheel_is_in_contact(t)}wheelGroundObject(t){return this.colliders.get(this.raw.wheel_ground_object(t))}}class ws{constructor(t,e,i,n,s,a,o,l,c,h,d,p,_,f){this.gravity=t,this.integrationParameters=new yu(e),this.islands=new Nu(i),this.broadPhase=new Ou(n),this.narrowPhase=new Fu(s),this.bodies=new vu(a),this.colliders=new qu(o),this.impulseJoints=new Ru(l),this.multibodyJoints=new Du(c),this.ccdSolver=new Uu(h),this.queryPipeline=new Hu(d),this.physicsPipeline=new ku(p),this.serializationPipeline=new ec(_),this.debugRenderPipeline=new Vu(f),this.characterControllers=new Set,this.vehicleControllers=new Set,this.impulseJoints.finalizeDeserialization(this.bodies),this.bodies.finalizeDeserialization(this.colliders),this.colliders.finalizeDeserialization(this.bodies)}free(){this.integrationParameters.free(),this.islands.free(),this.broadPhase.free(),this.narrowPhase.free(),this.bodies.free(),this.colliders.free(),this.impulseJoints.free(),this.multibodyJoints.free(),this.ccdSolver.free(),this.queryPipeline.free(),this.physicsPipeline.free(),this.serializationPipeline.free(),this.debugRenderPipeline.free(),this.characterControllers.forEach(t=>t.free()),this.vehicleControllers.forEach(t=>t.free()),this.integrationParameters=void 0,this.islands=void 0,this.broadPhase=void 0,this.narrowPhase=void 0,this.bodies=void 0,this.colliders=void 0,this.ccdSolver=void 0,this.impulseJoints=void 0,this.multibodyJoints=void 0,this.queryPipeline=void 0,this.physicsPipeline=void 0,this.serializationPipeline=void 0,this.debugRenderPipeline=void 0,this.characterControllers=void 0,this.vehicleControllers=void 0}static fromRaw(t){return t?new ws(I.fromRaw(t.takeGravity()),t.takeIntegrationParameters(),t.takeIslandManager(),t.takeBroadPhase(),t.takeNarrowPhase(),t.takeBodies(),t.takeColliders(),t.takeImpulseJoints(),t.takeMultibodyJoints()):null}takeSnapshot(){return this.serializationPipeline.serializeAll(this.gravity,this.integrationParameters,this.islands,this.broadPhase,this.narrowPhase,this.bodies,this.colliders,this.impulseJoints,this.multibodyJoints)}static restoreSnapshot(t){return new ec().deserializeAll(t)}debugRender(){return this.debugRenderPipeline.render(this.bodies,this.colliders,this.impulseJoints,this.multibodyJoints,this.narrowPhase),new Gu(this.debugRenderPipeline.vertices,this.debugRenderPipeline.colors)}step(t,e){this.physicsPipeline.step(this.gravity,this.integrationParameters,this.islands,this.broadPhase,this.narrowPhase,this.bodies,this.colliders,this.impulseJoints,this.multibodyJoints,this.ccdSolver,t,e),this.queryPipeline.update(this.bodies,this.colliders)}propagateModifiedBodyPositionsToColliders(){this.bodies.raw.propagateModifiedBodyPositionsToColliders(this.colliders.raw)}updateSceneQueries(){this.propagateModifiedBodyPositionsToColliders(),this.queryPipeline.update(this.bodies,this.colliders)}get timestep(){return this.integrationParameters.dt}set timestep(t){this.integrationParameters.dt=t}get lengthUnit(){return this.integrationParameters.lengthUnit}set lengthUnit(t){this.integrationParameters.lengthUnit=t}get numSolverIterations(){return this.integrationParameters.numSolverIterations}set numSolverIterations(t){this.integrationParameters.numSolverIterations=t}get numAdditionalFrictionIterations(){return this.integrationParameters.numAdditionalFrictionIterations}set numAdditionalFrictionIterations(t){this.integrationParameters.numAdditionalFrictionIterations=t}get numInternalPgsIterations(){return this.integrationParameters.numInternalPgsIterations}set numInternalPgsIterations(t){this.integrationParameters.numInternalPgsIterations=t}switchToStandardPgsSolver(){this.integrationParameters.switchToStandardPgsSolver()}switchToSmallStepsPgsSolver(){this.integrationParameters.switchToSmallStepsPgsSolver()}switchToSmallStepsPgsSolverWithoutWarmstart(){this.integrationParameters.switchToSmallStepsPgsSolverWithoutWarmstart()}createRigidBody(t){return this.bodies.createRigidBody(this.colliders,t)}createCharacterController(t){let e=new ju(t,this.integrationParameters,this.bodies,this.colliders,this.queryPipeline);return this.characterControllers.add(e),e}removeCharacterController(t){this.characterControllers.delete(t),t.free()}createVehicleController(t){let e=new Xu(t,this.bodies,this.colliders,this.queryPipeline);return this.vehicleControllers.add(e),e}removeVehicleController(t){this.vehicleControllers.delete(t),t.free()}createCollider(t,e){let i=e?e.handle:void 0;return this.colliders.createCollider(this.bodies,t,i)}createImpulseJoint(t,e,i,n){return this.impulseJoints.createJoint(this.bodies,t,e.handle,i.handle,n)}createMultibodyJoint(t,e,i,n){return this.multibodyJoints.createJoint(t,e.handle,i.handle,n)}getRigidBody(t){return this.bodies.get(t)}getCollider(t){return this.colliders.get(t)}getImpulseJoint(t){return this.impulseJoints.get(t)}getMultibodyJoint(t){return this.multibodyJoints.get(t)}removeRigidBody(t){this.bodies&&this.bodies.remove(t.handle,this.islands,this.colliders,this.impulseJoints,this.multibodyJoints)}removeCollider(t,e){this.colliders&&this.colliders.remove(t.handle,this.islands,this.bodies,e)}removeImpulseJoint(t,e){this.impulseJoints&&this.impulseJoints.remove(t.handle,e)}removeMultibodyJoint(t,e){this.impulseJoints&&this.multibodyJoints.remove(t.handle,e)}forEachCollider(t){this.colliders.forEach(t)}forEachRigidBody(t){this.bodies.forEach(t)}forEachActiveRigidBody(t){this.bodies.forEachActiveRigidBody(this.islands,t)}castRay(t,e,i,n,s,a,o,l){return this.queryPipeline.castRay(this.bodies,this.colliders,t,e,i,n,s,a?a.handle:null,o?o.handle:null,this.colliders.castClosure(l))}castRayAndGetNormal(t,e,i,n,s,a,o,l){return this.queryPipeline.castRayAndGetNormal(this.bodies,this.colliders,t,e,i,n,s,a?a.handle:null,o?o.handle:null,this.colliders.castClosure(l))}intersectionsWithRay(t,e,i,n,s,a,o,l,c){this.queryPipeline.intersectionsWithRay(this.bodies,this.colliders,t,e,i,n,s,a,o?o.handle:null,l?l.handle:null,this.colliders.castClosure(c))}intersectionWithShape(t,e,i,n,s,a,o,l){let c=this.queryPipeline.intersectionWithShape(this.bodies,this.colliders,t,e,i,n,s,a?a.handle:null,o?o.handle:null,this.colliders.castClosure(l));return c!=null?this.colliders.get(c):null}projectPoint(t,e,i,n,s,a,o){return this.queryPipeline.projectPoint(this.bodies,this.colliders,t,e,i,n,s?s.handle:null,a?a.handle:null,this.colliders.castClosure(o))}projectPointAndGetFeature(t,e,i,n,s,a){return this.queryPipeline.projectPointAndGetFeature(this.bodies,this.colliders,t,e,i,n?n.handle:null,s?s.handle:null,this.colliders.castClosure(a))}intersectionsWithPoint(t,e,i,n,s,a,o){this.queryPipeline.intersectionsWithPoint(this.bodies,this.colliders,t,this.colliders.castClosure(e),i,n,s?s.handle:null,a?a.handle:null,this.colliders.castClosure(o))}castShape(t,e,i,n,s,a,o,l,c,h,d,p){return this.queryPipeline.castShape(this.bodies,this.colliders,t,e,i,n,s,a,o,l,c,h?h.handle:null,d?d.handle:null,this.colliders.castClosure(p))}intersectionsWithShape(t,e,i,n,s,a,o,l,c){this.queryPipeline.intersectionsWithShape(this.bodies,this.colliders,t,e,i,this.colliders.castClosure(n),s,a,o?o.handle:null,l?l.handle:null,this.colliders.castClosure(c))}collidersWithAabbIntersectingAabb(t,e,i){this.queryPipeline.collidersWithAabbIntersectingAabb(t,e,this.colliders.castClosure(i))}contactPairsWith(t,e){this.narrowPhase.contactPairsWith(t.handle,this.colliders.castClosure(e))}intersectionPairsWith(t,e){this.narrowPhase.intersectionPairsWith(t.handle,this.colliders.castClosure(e))}contactPair(t,e,i){this.narrowPhase.contactPair(t.handle,e.handle,i)}intersectionPair(t,e){return this.narrowPhase.intersectionPair(t.handle,e.handle)}}(function(r){r[r.NONE=0]="NONE",r[r.COLLISION_EVENTS=1]="COLLISION_EVENTS",r[r.CONTACT_FORCE_EVENTS=2]="CONTACT_FORCE_EVENTS"})(ba||(ba={})),function(r){r[r.NONE=0]="NONE",r[r.FILTER_CONTACT_PAIRS=1]="FILTER_CONTACT_PAIRS",r[r.FILTER_INTERSECTION_PAIRS=2]="FILTER_INTERSECTION_PAIRS"}(xa||(xa={})),function(r){r[r.EMPTY=0]="EMPTY",r[r.COMPUTE_IMPULSE=1]="COMPUTE_IMPULSE"}(Ol||(Ol={})),function(r){r[r.DYNAMIC_DYNAMIC=1]="DYNAMIC_DYNAMIC",r[r.DYNAMIC_KINEMATIC=12]="DYNAMIC_KINEMATIC",r[r.DYNAMIC_FIXED=2]="DYNAMIC_FIXED",r[r.KINEMATIC_KINEMATIC=52224]="KINEMATIC_KINEMATIC",r[r.KINEMATIC_FIXED=8704]="KINEMATIC_FIXED",r[r.FIXED_FIXED=32]="FIXED_FIXED",r[r.DEFAULT=15]="DEFAULT",r[r.ALL=60943]="ALL"}(Sa||(Sa={}));class ic{constructor(t,e,i,n){this.colliderSet=t,this.handle=e,this._parent=i,this._shape=n}finalizeDeserialization(t){this.handle!=null&&(this._parent=t.get(this.colliderSet.raw.coParent(this.handle)))}ensureShapeIsCached(){this._shape||(this._shape=ye.fromRaw(this.colliderSet.raw,this.handle))}get shape(){return this.ensureShapeIsCached(),this._shape}isValid(){return this.colliderSet.raw.contains(this.handle)}translation(){return I.fromRaw(this.colliderSet.raw.coTranslation(this.handle))}rotation(){return Nt.fromRaw(this.colliderSet.raw.coRotation(this.handle))}isSensor(){return this.colliderSet.raw.coIsSensor(this.handle)}setSensor(t){this.colliderSet.raw.coSetSensor(this.handle,t)}setShape(t){let e=t.intoRaw();this.colliderSet.raw.coSetShape(this.handle,e),e.free(),this._shape=t}setEnabled(t){this.colliderSet.raw.coSetEnabled(this.handle,t)}isEnabled(){return this.colliderSet.raw.coIsEnabled(this.handle)}setRestitution(t){this.colliderSet.raw.coSetRestitution(this.handle,t)}setFriction(t){this.colliderSet.raw.coSetFriction(this.handle,t)}frictionCombineRule(){return this.colliderSet.raw.coFrictionCombineRule(this.handle)}setFrictionCombineRule(t){this.colliderSet.raw.coSetFrictionCombineRule(this.handle,t)}restitutionCombineRule(){return this.colliderSet.raw.coRestitutionCombineRule(this.handle)}setRestitutionCombineRule(t){this.colliderSet.raw.coSetRestitutionCombineRule(this.handle,t)}setCollisionGroups(t){this.colliderSet.raw.coSetCollisionGroups(this.handle,t)}setSolverGroups(t){this.colliderSet.raw.coSetSolverGroups(this.handle,t)}contactSkin(){return this.colliderSet.raw.coContactSkin(this.handle)}setContactSkin(t){return this.colliderSet.raw.coSetContactSkin(this.handle,t)}activeHooks(){return this.colliderSet.raw.coActiveHooks(this.handle)}setActiveHooks(t){this.colliderSet.raw.coSetActiveHooks(this.handle,t)}activeEvents(){return this.colliderSet.raw.coActiveEvents(this.handle)}setActiveEvents(t){this.colliderSet.raw.coSetActiveEvents(this.handle,t)}activeCollisionTypes(){return this.colliderSet.raw.coActiveCollisionTypes(this.handle)}setContactForceEventThreshold(t){return this.colliderSet.raw.coSetContactForceEventThreshold(this.handle,t)}contactForceEventThreshold(){return this.colliderSet.raw.coContactForceEventThreshold(this.handle)}setActiveCollisionTypes(t){this.colliderSet.raw.coSetActiveCollisionTypes(this.handle,t)}setDensity(t){this.colliderSet.raw.coSetDensity(this.handle,t)}setMass(t){this.colliderSet.raw.coSetMass(this.handle,t)}setMassProperties(t,e,i,n){let s=I.intoRaw(e),a=I.intoRaw(i),o=Nt.intoRaw(n);this.colliderSet.raw.coSetMassProperties(this.handle,t,s,a,o),s.free(),a.free(),o.free()}setTranslation(t){this.colliderSet.raw.coSetTranslation(this.handle,t.x,t.y,t.z)}setTranslationWrtParent(t){this.colliderSet.raw.coSetTranslationWrtParent(this.handle,t.x,t.y,t.z)}setRotation(t){this.colliderSet.raw.coSetRotation(this.handle,t.x,t.y,t.z,t.w)}setRotationWrtParent(t){this.colliderSet.raw.coSetRotationWrtParent(this.handle,t.x,t.y,t.z,t.w)}shapeType(){return this.colliderSet.raw.coShapeType(this.handle)}halfExtents(){return I.fromRaw(this.colliderSet.raw.coHalfExtents(this.handle))}setHalfExtents(t){const e=I.intoRaw(t);this.colliderSet.raw.coSetHalfExtents(this.handle,e)}radius(){return this.colliderSet.raw.coRadius(this.handle)}setRadius(t){this.colliderSet.raw.coSetRadius(this.handle,t)}roundRadius(){return this.colliderSet.raw.coRoundRadius(this.handle)}setRoundRadius(t){this.colliderSet.raw.coSetRoundRadius(this.handle,t)}halfHeight(){return this.colliderSet.raw.coHalfHeight(this.handle)}setHalfHeight(t){this.colliderSet.raw.coSetHalfHeight(this.handle,t)}vertices(){return this.colliderSet.raw.coVertices(this.handle)}indices(){return this.colliderSet.raw.coIndices(this.handle)}heightfieldHeights(){return this.colliderSet.raw.coHeightfieldHeights(this.handle)}heightfieldScale(){let t=this.colliderSet.raw.coHeightfieldScale(this.handle);return I.fromRaw(t)}heightfieldNRows(){return this.colliderSet.raw.coHeightfieldNRows(this.handle)}heightfieldNCols(){return this.colliderSet.raw.coHeightfieldNCols(this.handle)}parent(){return this._parent}friction(){return this.colliderSet.raw.coFriction(this.handle)}restitution(){return this.colliderSet.raw.coRestitution(this.handle)}density(){return this.colliderSet.raw.coDensity(this.handle)}mass(){return this.colliderSet.raw.coMass(this.handle)}volume(){return this.colliderSet.raw.coVolume(this.handle)}collisionGroups(){return this.colliderSet.raw.coCollisionGroups(this.handle)}solverGroups(){return this.colliderSet.raw.coSolverGroups(this.handle)}containsPoint(t){let e=I.intoRaw(t),i=this.colliderSet.raw.coContainsPoint(this.handle,e);return e.free(),i}projectPoint(t,e){let i=I.intoRaw(t),n=ps.fromRaw(this.colliderSet.raw.coProjectPoint(this.handle,i,e));return i.free(),n}intersectsRay(t,e){let i=I.intoRaw(t.origin),n=I.intoRaw(t.dir),s=this.colliderSet.raw.coIntersectsRay(this.handle,i,n,e);return i.free(),n.free(),s}castShape(t,e,i,n,s,a,o,l){let c=I.intoRaw(t),h=I.intoRaw(i),d=Nt.intoRaw(n),p=I.intoRaw(s),_=e.intoRaw(),f=nr.fromRaw(this.colliderSet,this.colliderSet.raw.coCastShape(this.handle,c,_,h,d,p,a,o,l));return c.free(),h.free(),d.free(),p.free(),_.free(),f}castCollider(t,e,i,n,s,a){let o=I.intoRaw(t),l=I.intoRaw(i),c=gs.fromRaw(this.colliderSet,this.colliderSet.raw.coCastCollider(this.handle,o,e.handle,l,n,s,a));return o.free(),l.free(),c}intersectsShape(t,e,i){let n=I.intoRaw(e),s=Nt.intoRaw(i),a=t.intoRaw(),o=this.colliderSet.raw.coIntersectsShape(this.handle,a,n,s);return n.free(),s.free(),a.free(),o}contactShape(t,e,i,n){let s=I.intoRaw(e),a=Nt.intoRaw(i),o=t.intoRaw(),l=ir.fromRaw(this.colliderSet.raw.coContactShape(this.handle,o,s,a,n));return s.free(),a.free(),o.free(),l}contactCollider(t,e){return ir.fromRaw(this.colliderSet.raw.coContactCollider(this.handle,t.handle,e))}castRay(t,e,i){let n=I.intoRaw(t.origin),s=I.intoRaw(t.dir),a=this.colliderSet.raw.coCastRay(this.handle,n,s,e,i);return n.free(),s.free(),a}castRayAndGetNormal(t,e,i){let n=I.intoRaw(t.origin),s=I.intoRaw(t.dir),a=ms.fromRaw(this.colliderSet.raw.coCastRayAndGetNormal(this.handle,n,s,e,i));return n.free(),s.free(),a}}(function(r){r[r.Density=0]="Density",r[r.Mass=1]="Mass",r[r.MassProps=2]="MassProps"})(Cn||(Cn={}));class ie{constructor(t){this.enabled=!0,this.shape=t,this.massPropsMode=Cn.Density,this.density=1,this.friction=.5,this.restitution=0,this.rotation=Nt.identity(),this.translation=I.zeros(),this.isSensor=!1,this.collisionGroups=4294967295,this.solverGroups=4294967295,this.frictionCombineRule=is.Average,this.restitutionCombineRule=is.Average,this.activeCollisionTypes=Sa.DEFAULT,this.activeEvents=ba.NONE,this.activeHooks=xa.NONE,this.mass=0,this.centerOfMass=I.zeros(),this.contactForceEventThreshold=0,this.contactSkin=0,this.principalAngularInertia=I.zeros(),this.angularInertiaLocalFrame=Nt.identity()}static ball(t){const e=new Hl(t);return new ie(e)}static capsule(t,e){const i=new Wl(t,e);return new ie(i)}static segment(t,e){const i=new jl(t,e);return new ie(i)}static triangle(t,e,i){const n=new Xl(t,e,i);return new ie(n)}static roundTriangle(t,e,i,n){const s=new ql(t,e,i,n);return new ie(s)}static polyline(t,e){const i=new Yl(t,e);return new ie(i)}static trimesh(t,e,i){const n=new Jl(t,e,i);return new ie(n)}static cuboid(t,e,i){const n=new Gl(t,e,i);return new ie(n)}static roundCuboid(t,e,i,n){const s=new Vl(t,e,i,n);return new ie(s)}static heightfield(t,e,i,n,s){const a=new Kl(t,e,i,n,s);return new ie(a)}static cylinder(t,e){const i=new Zl(t,e);return new ie(i)}static roundCylinder(t,e,i){const n=new $l(t,e,i);return new ie(n)}static cone(t,e){const i=new Ql(t,e);return new ie(i)}static roundCone(t,e,i){const n=new tc(t,e,i);return new ie(n)}static convexHull(t){const e=new Ma(t,null);return new ie(e)}static convexMesh(t,e){const i=new Ma(t,e);return new ie(i)}static roundConvexHull(t,e){const i=new Ea(t,null,e);return new ie(i)}static roundConvexMesh(t,e,i){const n=new Ea(t,e,i);return new ie(n)}setTranslation(t,e,i){if(typeof t!="number"||typeof e!="number"||typeof i!="number")throw TypeError("The translation components must be numbers.");return this.translation={x:t,y:e,z:i},this}setRotation(t){return Nt.copy(this.rotation,t),this}setSensor(t){return this.isSensor=t,this}setEnabled(t){return this.enabled=t,this}setContactSkin(t){return this.contactSkin=t,this}setDensity(t){return this.massPropsMode=Cn.Density,this.density=t,this}setMass(t){return this.massPropsMode=Cn.Mass,this.mass=t,this}setMassProperties(t,e,i,n){return this.massPropsMode=Cn.MassProps,this.mass=t,I.copy(this.centerOfMass,e),I.copy(this.principalAngularInertia,i),Nt.copy(this.angularInertiaLocalFrame,n),this}setRestitution(t){return this.restitution=t,this}setFriction(t){return this.friction=t,this}setFrictionCombineRule(t){return this.frictionCombineRule=t,this}setRestitutionCombineRule(t){return this.restitutionCombineRule=t,this}setCollisionGroups(t){return this.collisionGroups=t,this}setSolverGroups(t){return this.solverGroups=t,this}setActiveHooks(t){return this.activeHooks=t,this}setActiveEvents(t){return this.activeEvents=t,this}setActiveCollisionTypes(t){return this.activeCollisionTypes=t,this}setContactForceEventThreshold(t){return this.contactForceEventThreshold=t,this}}class qu{constructor(t){this.raw=t||new oe,this.map=new rs,t&&t.forEachColliderHandle(e=>{this.map.set(e,new ic(this,e,null))})}free(){this.raw&&this.raw.free(),this.raw=void 0,this.map&&this.map.clear(),this.map=void 0}castClosure(t){return e=>t?t(this.get(e)):void 0}finalizeDeserialization(t){this.map.forEach(e=>e.finalizeDeserialization(t))}createCollider(t,e,i){let n=i!=null&&i!=null;if(n&&isNaN(i))throw Error("Cannot create a collider with a parent rigid-body handle that is not a number.");let s=e.shape.intoRaw(),a=I.intoRaw(e.translation),o=Nt.intoRaw(e.rotation),l=I.intoRaw(e.centerOfMass),c=I.intoRaw(e.principalAngularInertia),h=Nt.intoRaw(e.angularInertiaLocalFrame),d=this.raw.createCollider(e.enabled,s,a,o,e.massPropsMode,e.mass,l,c,h,e.density,e.friction,e.restitution,e.frictionCombineRule,e.restitutionCombineRule,e.isSensor,e.collisionGroups,e.solverGroups,e.activeCollisionTypes,e.activeHooks,e.activeEvents,e.contactForceEventThreshold,e.contactSkin,n,n?i:0,t.raw);s.free(),a.free(),o.free(),l.free(),c.free(),h.free();let p=n?t.get(i):null,_=new ic(this,d,p,e.shape);return this.map.set(d,_),_}remove(t,e,i,n){this.raw.remove(t,e.raw,i.raw,n),this.unmap(t)}unmap(t){this.map.delete(t)}get(t){return this.map.get(t)}len(){return this.map.len()}contains(t){return this.get(t)!=null}forEach(t){this.map.forEach(t)}getAll(){return this.map.getAll()}}const di=1,ui=2,Ri=4,ii=8,Yu=16,Qn=(r,t)=>(r&t)<<16|t;class Ju{constructor(){it(this,"world")}init(){this.world=new ws({x:0,y:-14.7,z:0})}step(){this.world.step()}body(t){return this.world.createRigidBody(t)}col(t,e){return this.world.createCollider(t,e)}rm(t){this.world.removeRigidBody(t)}ray(t,e,i,n){const s=new kl({x:t.x,y:t.y,z:t.z},{x:e.x,y:e.y,z:e.z});return this.world.castRay(s,i,!0,ns.EXCLUDE_SENSORS,n)}hp(t,e,i){return new E(t.x+e.x*i.timeOfImpact,t.y+e.y*i.timeOfImpact,t.z+e.z*i.timeOfImpact)}}class Ku{static build(t){const e=new An,i=new ti({color:t,roughness:.6,flatShading:!0}),n=new Ht(new Ra(.22,.5,3,8),i);n.position.y=.4;const s=new Ht(new Oe(.26,10,8),i);s.position.y=1.15;const a=new pi(.07,.07,.75,6),o=new pi(.09,.09,.8,6),l=new Ht(a,i);l.position.set(.3,.55,0),l.rotation.z=-.3;const c=new Ht(a,i);c.position.set(-.3,.55,0),c.rotation.z=.3;const h=new Ht(o,i);h.position.set(.15,-.35,0);const d=new Ht(o,i);return d.position.set(-.15,-.35,0),[n,s,l,c,h,d].forEach(p=>{p.castShadow=!0,e.add(p)}),e}}class nc{constructor(t,e,i,n,s,a,o){it(this,"body");it(this,"model");it(this,"hp",100);it(this,"alive",!0);it(this,"yaw",0);it(this,"grounded",!1);it(this,"respawnT",0);it(this,"health",100);it(this,"dying",!1);it(this,"pos");this.s=t,this.pw=e,this.group=o,this.model=Ku.build(i),this.s.add(this.model),this.model.visible=!1,this.body=e.body(Pe.dynamic().setTranslation(n,s,a).setLinearDamping(.1).setAngularDamping(.5).setCcdEnabled(!0)),e.col(ie.capsule(.5,.35).setMass(3).setFriction(.2).setRestitution(.1).setCollisionGroups(Qn(this.group,ii|di|ui)),this.body),this.pos=new E(n,s,a)}isGrounded(){const t=this.body.translation();return((e,i,n,s,a)=>{const o=new kl(i,n);return e.castRay(o,s,!0,ns.EXCLUDE_SENSORS,a)})(this.pw.world,{x:t.x,y:t.y-.8,z:t.z},{x:0,y:-1,z:0},.6,ii)!==null}die(){this.alive=!1,this.respawnT=3,this.model.visible=!1}sync(){const t=this.body.translation();this.pos.set(t.x,t.y,t.z),this.model.position.set(t.x,t.y-.85,t.z)}teleport(t,e,i){this.body.setTranslation({x:t,y:e,z:i},!0),this.body.setLinvel({x:0,y:0,z:0},!0),this.hp=100,this.alive=!0,this.dying=!1,this.model.visible=!0}}class Zu{constructor(t,e){it(this,"spawns",[]);it(this,"barrels",[]);it(this,"n",40);this.s=t,this.pw=e,t.userData.arena=this}box(t,e,i,n,s,a,o){const l=this.pw.body(Pe.fixed().setTranslation(t,e,i));this.pw.col(ie.cuboid(n/2,s/2,a/2).setFriction(.5).setRestitution(.1).setCollisionGroups(Qn(ii,di|ui|Ri|Yu)),l);const c=new Ht(new Ci(n,s,a),new ti({color:o,roughness:.8,flatShading:!0}));c.position.set(t,e,i),c.castShadow=c.receiveShadow=!0,this.s.add(c)}build(){this.box(0,-.5,0,this.n,1,this.n,2964042);const t=new Ht(new tr(this.n,this.n),new ti({color:3426654,roughness:.9}));t.rotation.x=-Math.PI/2,t.position.y=.01,t.receiveShadow=!0,this.s.add(t);const e=new hu(this.n,20,4877194,3822192);e.position.y=.02,this.s.add(e);const i=5,n=1;[[0,i/2,-this.n/2,this.n+2,i,n],[0,i/2,this.n/2,this.n+2,i,n],[-this.n/2,i/2,0,n,i,this.n+2],[this.n/2,i/2,0,n,i,this.n+2]].forEach(([c,h,d,p,_,f])=>this.box(c,h,d,p,_,f,4478310)),[[-10,2.5,-8,5,.4,3],[10,2.5,8,5,.4,3],[-10,4.5,8,4,.4,2],[10,4.5,-8,4,.4,2],[0,6,0,3,.4,3]].forEach(([c,h,d,p,_])=>this.box(c,h,d,p,.4,_,9323693)),[[-5,.5,3,1],[5,.5,-3,1],[-3,.5,-5,1.5],[3,.5,5,1.5],[0,.5,8,1],[0,1.5,8,1],[8,.5,0,1],[-8,.5,0,1],[0,.5,-8,1],[0,1,-8,1]].forEach(([c,h,d,p])=>this.box(c,h,d,p,p,p,12597547));const s=new Float32Array([0,0,6,4,0,6,0,2.5,0,4,0,6,4,2.5,0,0,2.5,0,0,0,6,0,2.5,0,0,0,0,4,2.5,0,4,0,6,0,2.5,0]),a=new Uint32Array([0,1,2,1,3,2,4,5,6,7,8,9]),o=(c,h,d)=>{const p=new Ht(new Re,new ti({color:15105570,roughness:.7,flatShading:!0,side:2}));p.geometry.setAttribute("position",new Xe(s,3)),p.geometry.computeVertexNormals(),p.position.set(c,0,h),p.rotation.y=d,p.castShadow=!0,this.s.add(p);const _=this.pw.body(Pe.fixed().setTranslation(c,0,h).setRotation({x:0,y:d,z:0,w:Math.cos(d/2)}));this.pw.col(ie.trimesh(s,a).setFriction(.6).setCollisionGroups(Qn(ii,di|ui|Ri)),_)};o(-15,-12,0),o(15,12,Math.PI),o(-15,12,Math.PI/2),o(15,-12,-Math.PI/2),[[-12,-5],[12,5],[-6,10],[6,-10],[0,-13],[0,13]].forEach(([c,h])=>{const d=this.pw.body(Pe.dynamic().setTranslation(c,.7,h).setLinearDamping(.5).setAngularDamping(.5));this.pw.col(ie.cylinder(.6,.4).setMass(5).setFriction(.6).setRestitution(.3).setCollisionGroups(Qn(ii,di|ui|Ri)),d);const p=new Ht(new pi(.4,.4,1.2,10),new ti({color:14431557,roughness:.4,flatShading:!0}));p.position.set(c,.7,h),p.castShadow=!0,this.s.add(p);const _=new Ht(new pi(.42,.42,.1,10),new ti({color:10823736}));_.position.set(c,1.25,h),this.s.add(_),this.barrels.push({b:d,m:p})}),this.spawns=[[-16,-16],[16,-16],[-16,16],[16,16],[0,-17],[0,17],[-17,0],[17,0]].map(([c,h])=>({x:c,y:1,z:h}));const l=[16739179,5164484,4569041,16370212];[[-10,8,-10],[10,8,-10],[-10,8,10],[10,8,10]].forEach(([c,h,d],p)=>{const _=new au(l[p],30,25,2);_.position.set(c,h,d),this.s.add(_)})}}const ss={pistol:{n:"Pistol",d:20,r:50,a:12,rpm:4,sp:.02,kb:6,melee:!1,ps:0,er:0,c:13421772},shotgun:{n:"Shotgun",d:12,r:20,a:6,rpm:1.2,sp:.12,kb:16,melee:!1,ps:0,er:0,c:12597547},smg:{n:"SMG",d:10,r:35,a:40,rpm:12,sp:.06,kb:4,melee:!1,ps:0,er:0,c:3066993},rifle:{n:"Rifle",d:15,r:45,a:30,rpm:7,sp:.035,kb:5,melee:!1,ps:0,er:0,c:3447003},sword:{n:"Sword",d:35,r:2.5,a:1/0,rpm:2.2,sp:0,kb:10,melee:!0,ps:0,er:0,c:15965202},rocket:{n:"Rocket",d:50,r:60,a:4,rpm:.8,sp:.005,kb:25,melee:!1,ps:28,er:6,c:15158332}};class rc{constructor(t,e,i,n,s,a){it(this,"cfg");it(this,"ammo");it(this,"last",0);it(this,"mesh");this.s=e,this.pw=i,this.owner=n,this.fx=s,this.audio=a,this.cfg=t,this.ammo=t.a,this.mesh=this.mk()}mk(){const t=new An,e=new ti({color:this.cfg.c,roughness:.4,metalness:.3});if(this.cfg.melee){const i=new Ht(new Ci(.06,.06,1.4),e);i.position.z=-.7,t.add(i);const n=new Ht(new pi(.05,.05,.3,6),e);n.rotation.x=Math.PI/2,t.add(n)}else{const i=new Ht(new Ci(.12,.14,.6),e);t.add(i);const n=new Ht(new pi(.04,.04,.4,8),new ti({color:3355443}));if(n.rotation.x=Math.PI/2,n.position.z=-.5,t.add(n),this.cfg.c===15158332){const s=new Ht(new pi(.12,.12,.8,10),new ti({color:8359053,metalness:.6}));s.rotation.x=Math.PI/2,t.add(s)}}return t}fire(t,e,i,n){return!(t-this.last<1/this.cfg.rpm)&&(!this.cfg.melee&&this.ammo<=0?(this.audio.play("empty"),!1):(this.last=t,this.cfg.melee?this.melee(e,i,n):this.cfg.ps>0?this.rocket(e,i,n):this.hitscan(e,i,n),this.cfg.melee||this.ammo--,this.fx.flash(i,e),this.audio.play("shot"),!0))}hitscan(t,e,i){var c;const{d:n,r:s,sp:a,kb:o}=this.cfg,l=this.cfg.c===12597547?8:1;for(let h=0;h<l;h++){const d=t.clone();a&&(d.x+=(Math.random()-.5)*a*2,d.y+=(Math.random()-.5)*a*2,d.z+=(Math.random()-.5)*a*2,d.normalize());const p=this.pw.ray(e,d,s,ui|ii|di|Ri),_=p?this.pw.hp(e,d,p):e.clone().add(d.clone().multiplyScalar(s));if(this.fx.trail(e,_),p){this.fx.spark(_,d);const f=(c=p.collider)==null?void 0:c.rigidBody;for(const g of i)f===g.body&&(g.hp-=n)}}}rocket(t,e,i){const n=this.pw.body(Pe.dynamic().setTranslation(e.x,e.y,e.z).setLinvel(28*t.x,28*t.y,28*t.z).setCcdEnabled(!0));this.pw.col(ie.ball(.15).setRestitution(.2).setCollisionGroups(Qn(Ri,ii|ui|di|Ri)),n);const s=new Ht(new Oe(.15,6,6),new ti({color:16733986,emissive:16733986,emissiveIntensity:.5}));this.s.add(s);const a=performance.now(),o=()=>{const l=n.translation();s.position.set(l.x,l.y,l.z);const c=i.map(h=>({c:h,d:Math.hypot(h.body.translation().x-l.x,h.body.translation().y-l.y,h.body.translation().z-l.z)})).find(h=>h.d<1.2);if(c||(performance.now()-a)/1e3>3||this.pw.ray(new E(l.x,l.y,l.z),t,1.5,ui|Ri))return c&&(c.c.hp-=this.cfg.d),this.fx.explode(new E(l.x,l.y,l.z),this.cfg.er),this.s.remove(s),void this.pw.rm(n);requestAnimationFrame(o)};o()}melee(t,e,i){var s;const n=this.pw.ray(e,t,this.cfg.r,ui|di);if(n){const a=(s=n.collider)==null?void 0:s.rigidBody;for(const o of i)a===o.body&&(o.hp-=this.cfg.d,this.fx.spark(this.pw.hp(e,t,n),t))}this.fx.slash(e,t,this.cfg.r)}explode(t,e,i){this.fx.explode(t,e),this.audio.play("explosion");for(const n of i){const s=n.body.translation(),a=Math.hypot(s.x-t.x,s.y-t.y,s.z-t.z);if(a<e){const o=1-a/e;n.hp-=this.cfg.d*o}}}}class $u{constructor(t,e,i,n,s,a){it(this,"guns",[]);it(this,"idx",0);it(this,"drops",[]);it(this,"onPickup",null);this.s=t,this.pw=e,this.player=i,this.fx=n,this.audio=s,this.targets=a}init(){const t=[[-10,-10],[10,-10],[-10,10],[10,10],[0,0],[-16,0],[16,0],[0,-16],[0,16]];["pistol","shotgun","smg","rifle","sword"].forEach((i,n)=>this.drops.push({x:t[n][0],z:t[n][1],t:i,timer:0}));const e=new rc(ss.pistol,this.s,this.pw,this.player,this.fx,this.audio);this.guns.push(e),this.player.model.add(e.mesh),e.mesh.position.set(.35,.65,.1),e.mesh.rotation.y=Math.PI}update(t){for(const e of this.drops)if(e.timer-=t,e.timer<=0){const i=new rc(ss[e.t],this.s,this.pw,this.player,this.fx,this.audio);i.mesh.position.set(e.x,1.5,e.z),i.mesh.rotation.y=6.28*Math.random(),this.s.add(i.mesh);const n=new Ht(new Oe(.45,10,8),new je({color:ss[e.t].c,transparent:!0,opacity:.3}));n.position.copy(i.mesh.position),this.s.add(n);const s=()=>{var o;const a=this.player.body.translation();if(Math.hypot(a.x-e.x,a.y-1.5,a.z-e.z)<1.5&&this.player.alive)return this.s.remove(i.mesh),this.s.remove(n),void((o=this.onPickup)==null?void 0:o.call(this,i.cfg.n));requestAnimationFrame(s)};s(),e.timer=10+10*Math.random()}this.guns[this.idx]&&this.player.alive}get current(){return this.guns[this.idx]??null}fire(t,e){const i=this.guns[this.idx];return!!i&&i.fire(performance.now()/1e3,t,e,this.targets)}}const as={smoke:new je({color:13421772,transparent:!0,opacity:.7}),spark:new je({color:16768324}),blood:new je({color:13378082})};class Qu{constructor(t){it(this,"parts",[]);it(this,"trails",[]);it(this,"line",new ca({color:16755251,transparent:!0,opacity:.8}));it(this,"shake",0);this.s=t}p(t,e,i,n){this.parts.push({m:t,v:e,l:i,ml:i,sc:n}),this.s.add(t)}flash(t,e){const i=new Ht(new Oe(.12,5,5),new je({color:16763972,transparent:!0,opacity:.9}));i.position.copy(t).add(e.clone().multiplyScalar(.5)),this.p(i,new E(0,.5,0),.08,2)}trail(t,e){const i=new dl(new Re().setFromPoints([t,e]),this.line);this.s.add(i),this.trails.push({m:i,l:.06,ml:.06})}spark(t,e){for(let i=0;i<6;i++){const n=new Ht(new Oe(.04,4,4),as.spark);n.position.copy(t),this.p(n,e.clone().multiplyScalar(3+4*Math.random()).add(new E(3*(Math.random()-.5),3*Math.random(),3*(Math.random()-.5))),.2+.2*Math.random(),1)}}blood(t){for(let e=0;e<5;e++){const i=new Ht(new Oe(.05,4,4),as.blood);i.position.set(t.x,t.y+.5,t.z),this.p(i,new E(4*(Math.random()-.5),4*Math.random()+1,4*(Math.random()-.5)),.4+.3*Math.random(),1)}}death(t){for(let e=0;e<15;e++){const i=new Ht(new Oe(.06,4,4),as.spark);i.position.set(t.x,t.y,t.z),this.p(i,new E(8*(Math.random()-.5),6*Math.random()+2,8*(Math.random()-.5)),.6+.4*Math.random(),1.5)}}dust(t){for(let e=0;e<4;e++){const i=new Ht(new Oe(.05,4,4),as.smoke);i.position.set(t.x+.3*(Math.random()-.5),t.y-.8,t.z+.3*(Math.random()-.5)),this.p(i,new E(2*(Math.random()-.5),.5,2*(Math.random()-.5)),.3,.5)}}dash(t){for(let e=0;e<8;e++){const i=new Ht(new Oe(.08,4,4),new je({color:5227511,transparent:!0,opacity:.7}));i.position.set(t.x+.5*(Math.random()-.5),t.y+.5*(Math.random()-.5),t.z+.5*(Math.random()-.5)),this.p(i,new E(2*(Math.random()-.5),Math.random()-.5,2*(Math.random()-.5)),.4,.5)}}slash(t,e,i){const n=new Ht(new Ca(.5*i,.02,4,12,Math.PI/2),new je({color:16768324,transparent:!0,opacity:.8}));n.position.copy(t),n.lookAt(t.clone().add(e)),this.p(n,new E,.15,1)}explode(t,e){for(let n=0;n<25;n++){const s=new Ht(new Oe(.08+.06*Math.random(),5,5),new je({color:Math.random()<.5?16737843:16763972,transparent:!0,opacity:.9}));s.position.copy(t);const a=6.28*Math.random(),o=Math.acos(2*Math.random()-1);this.p(s,new E(Math.sin(o)*Math.cos(a)*(5+5*Math.random()),Math.sin(o)*Math.sin(a)*(5+5*Math.random())+2,Math.cos(o)*(5+5*Math.random())),.8+.6*Math.random(),1)}const i=new Ht(new Oe(.4*e,12,10),new je({color:16737843,transparent:!0,opacity:.5}));i.position.copy(t),this.p(i,new E,.3,6),this.addShake(Math.min(.15*e,1.5))}addShake(t){this.shake=Math.min(this.shake+t,2)}update(t){for(let e=this.parts.length-1;e>=0;e--){const i=this.parts[e];i.l-=t,i.m.position.add(i.v.clone().multiplyScalar(t)),i.v.multiplyScalar(1-2*t),i.m.scale.setScalar(i.sc*(i.l/i.ml));const n=i.m.material;n.transparent&&(n.opacity=Math.max(0,i.l/i.ml*.9)),i.l<=0&&(this.s.remove(i.m),this.parts.splice(e,1))}for(let e=this.trails.length-1;e>=0;e--){const i=this.trails[e];i.l-=t,i.m.material.opacity=Math.max(0,i.l/i.ml*.8),i.l<=0&&(this.s.remove(i.m),this.trails.splice(e,1))}this.shake=Math.max(0,this.shake-3*t)}}class tp{constructor(){it(this,"ctx",null);it(this,"master",null);it(this,"noise",null);it(this,"enabled",!0)}async init(){this.ctx=new AudioContext,this.master=this.ctx.createGain(),this.master.gain.value=.5,this.master.connect(this.ctx.destination);const t=this.ctx.createBuffer(1,.5*this.ctx.sampleRate,this.ctx.sampleRate),e=t.getChannelData(0);for(let i=0;i<e.length;i++)e[i]=2*Math.random()-1;this.noise=t}osc(t,e,i,n,s,a=0){const o=this.ctx.currentTime+a,l=this.ctx.createOscillator(),c=this.ctx.createGain();l.type=t,l.frequency.setValueAtTime(e,o),l.frequency.exponentialRampToValueAtTime(i,o+n),c.gain.setValueAtTime(s,o),c.gain.exponentialRampToValueAtTime(.001,o+n),l.connect(c).connect(this.master),l.start(o),l.stop(o+n+.05)}nz(t,e,i){const n=this.ctx.currentTime,s=this.ctx.createBufferSource();s.buffer=this.noise;let a=s;if(i){const l=this.ctx.createBiquadFilter();l.type="lowpass",l.frequency.value=i,s.connect(l),a=l}const o=this.ctx.createGain();o.gain.setValueAtTime(e,n),o.gain.exponentialRampToValueAtTime(.001,n+t),a.connect(o).connect(this.master),s.start(n)}play(t,e=1){if(!this.enabled||!this.ctx||!this.master)return;this.ctx.state==="suspended"&&this.ctx.resume();const i=this.master.gain.value;if(this.master.gain.value=i*e,t==="shot")this.osc("sawtooth",220,60,.1,.6),this.nz(.1,.4);else if(t==="explosion")this.osc("sine",120,30,.5,1),this.nz(.5,.8,400);else if(t==="hit")this.osc("square",300,80,.08,.4);else if(t==="jump")this.osc("triangle",200,400,.1,.25);else if(t==="dash")this.osc("sine",600,200,.2,.2);else if(t==="death")this.osc("sawtooth",400,50,.4,.5);else if(t==="hurt")this.osc("square",180,60,.15,.3);else if(t==="empty")this.osc("square",400,200,.05,.15);else if(t==="pickup")this.osc("sine",400,800,.15,.3);else if(t==="cheer")for(let n=0;n<8;n++)this.osc("sine",400+800*Math.random(),400+800*Math.random(),.3,.15,.1*n);this.master.gain.value=i}}class ep{constructor(){it(this,"keys",new Set);it(this,"st",{f:!1,b:!1,l:!1,r:!1,jump:!1,sprint:!1,dash:!1,attack:!1,aim:!1});it(this,"mouse",{x:0,y:0,locked:!1});it(this,"up",t=>this.keys.add(t.code));it(this,"down",t=>this.keys.delete(t.code))}init(){addEventListener("keydown",this.up),addEventListener("keyup",this.down),addEventListener("mousedown",t=>{this.mouse.locked||t.button!==0||document.body.requestPointerLock(),t.button===0&&(this.st.attack=!0),t.button===2&&(this.st.aim=!0)}),addEventListener("mouseup",t=>{t.button===0&&(this.st.attack=!1),t.button===2&&(this.st.aim=!1)}),addEventListener("mousemove",t=>{this.mouse.locked&&(this.mouse.x+=.002*t.movementX,this.mouse.y=Math.max(-1.2,Math.min(1.2,this.mouse.y+.002*t.movementY)))}),addEventListener("contextmenu",t=>t.preventDefault()),addEventListener("pointerlockchange",()=>this.mouse.locked=document.pointerLockElement===document.body)}read(){this.st.f=this.keys.has("KeyW"),this.st.b=this.keys.has("KeyS"),this.st.l=this.keys.has("KeyA"),this.st.r=this.keys.has("KeyD"),this.st.jump=this.keys.has("Space"),this.st.sprint=this.keys.has("ShiftLeft"),this.st.dash=this.keys.has("KeyE")}}class ip extends nc{constructor(e,i,n,s,a,o){super(e,i,5227511,0,3,0,di);it(this,"jumps",0);it(this,"coyote",0);it(this,"dashT",0);it(this,"dashCd",0);it(this,"wallN",new E);it(this,"canWall",!1);it(this,"jumpBuf",!1);it(this,"dashBuf",!1);it(this,"kills",0);it(this,"respawnP",{x:0,y:3,z:0});it(this,"pitch",0);this.input=n,this.cam=s,this.fx=a,this.audio=o}fix(e){if(!this.alive)return this.respawnT-=e,void(this.respawnT<=0&&this.teleport(this.respawnP.x,this.respawnP.y,this.respawnP.z));this.body.translation(),this.grounded=this.isGrounded(),this.grounded?(this.jumps=0,this.coyote=.12,this.canWall=!1):this.coyote-=e,this.input.read();const i=this.input.st;let n=0,s=0;i.f&&(s-=1),i.b&&(s+=1),i.l&&(n-=1),i.r&&(n+=1);const a=new E(n,0,s).normalize(),o=Math.sin(this.yaw),l=Math.cos(this.yaw),c=new E(a.x*l-a.z*o,0,a.x*o+a.z*l),h=i.sprint&&this.grounded?12:8,d=this.body.linvel(),p=1-Math.exp(-(this.grounded?12:3.5)*e);if(this.body.setLinvel({x:d.x+(c.x*h-d.x)*p,y:d.y,z:d.z+(c.z*h-d.z)*p},!0),i.jump&&!this.jumpBuf&&(this.jumpBuf=!0),i.dash&&!this.dashBuf&&(this.dashBuf=!0),this.jumpBuf&&(this.jumpBuf=!1,this.grounded||this.coyote>0?(this.body.setLinvel({x:d.x,y:9,z:d.z},!0),this.grounded=!1,this.coyote=0,this.fx.dust(this.body.translation()),this.audio.play("jump")):this.jumps<1?(this.jumps++,this.body.setLinvel({x:d.x,y:8.5,z:d.z},!0),this.fx.dust(this.body.translation()),this.audio.play("jump")):this.canWall&&(this.body.setLinvel({x:12*-this.wallN.x,y:9.9,z:12*-this.wallN.z},!0),this.canWall=!1,this.audio.play("jump"))),this.dashBuf&&this.dashCd<=0){this.dashBuf=!1;const g=new E(n,0,s);g.lengthSq()===0&&g.set(o,0,l),g.normalize();const m=new E(g.x*l-g.z*o,0,g.x*o+g.z*l).multiplyScalar(20);m.y=.5*d.y,this.body.setLinvel(m,!0),this.dashT=.18,this.dashCd=.6,this.fx.dash(this.body.translation()),this.audio.play("dash")}if(this.dashT>0&&(this.dashT-=e,this.dashT<=0)){const g=this.body.linvel();this.body.setLinvel({x:.5*g.x,y:.3*g.y,z:.5*g.z},!0)}if(this.dashCd-=e,!this.grounded)if(Math.hypot(d.x,d.z)>=3){const g=new E(d.x,0,d.z).normalize();this.pw.ray(this.pos,g,.7,ii)?(this.canWall=!0,this.wallN.copy(g).negate(),d.y<0&&this.body.setLinvel({x:d.x,y:.6*d.y,z:d.z},!0)):this.canWall=!1}else this.canWall=!1;const _=this.body.linvel(),f=Math.max(Math.abs(_.x),Math.abs(_.z));if(f>30){const g=30/f;this.body.setLinvel({x:_.x*g,y:_.y,z:_.z*g},!0)}this.sync()}up(e){this.input.mouse.locked&&(this.yaw+=this.input.mouse.x,this.pitch+=this.input.mouse.y,this.pitch=Math.max(-1.2,Math.min(1.2,this.pitch)));const i=this.body.translation(),n=new E(i.x+.4*Math.sin(this.yaw+Math.PI/2),i.y+1.1,i.z+.4*Math.cos(this.yaw+Math.PI/2)),s=new E(i.x-Math.sin(this.yaw)*Math.cos(this.pitch)*6,i.y+1.3+6*Math.sin(this.pitch),i.z-Math.cos(this.yaw)*Math.cos(this.pitch)*6);this.cam.position.lerp(s,1-Math.exp(-10*e)),this.cam.lookAt(n),this.pos.set(i.x,i.y,i.z)}die(){super.die(),this.respawnT=1}}class np extends nc{constructor(e,i,n,s,a,o,l,c=1){super(e,i,15158332,o,3,l,ui);it(this,"state","idle");it(this,"stT",0);it(this,"lastSeen",-999);it(this,"fireCd",0);it(this,"patrol",new E);it(this,"strafeDir",1);it(this,"strafeT",0);it(this,"stuck",0);it(this,"lastPos",new E);this.player=n,this.fx=s,this.audio=a,this.diff=c,this.patrol.set(o,0,l),this.stT=1.5*Math.random()}fix(e){if(!this.alive)return void(this.respawnT-=e);this.stT-=e,this.fireCd-=e,this.stuck+=e;const i=this.body.translation();this.grounded=this.isGrounded();const n=this.player.body.translation(),s=Math.hypot(n.x-i.x,n.z-i.z),a=this.canSee(i,n,s);a&&(this.lastSeen=performance.now());const o=(performance.now()-this.lastSeen)/1e3,l=this.hp<30,c=this.body.linvel(),h=5+1.5*this.diff;switch(this.state){case"idle":a?this.state="attack":this.stT<=0&&(this.state="patrol",this.patrol.set(i.x+20*(Math.random()-.5),0,i.z+20*(Math.random()-.5)),this.stT=3+3*Math.random());break;case"patrol":a?this.state="attack":this.stT<=0?(this.state="idle",this.stT=2*Math.random()):this.moveTo(this.patrol,h,e,i);break;case"attack":!a&&o>2?(this.state="patrol",this.stT=4,this.patrol.set(n.x,0,n.z)):l?(this.state="retreat",this.stT=2.5):(this.yaw=Math.atan2(n.x-i.x,n.z-i.z),this.moveTo(new E(n.x,0,n.z),.8*h,e,i),this.fireCd<=0&&s<25&&(this.shoot(n,i),this.fireCd=(1-.15*this.diff)*(.7+.6*Math.random())),Math.random()<.02&&this.body.setLinvel({x:c.x,y:7,z:c.z},!0));break;case"retreat":if(this.stT<=0||this.hp>60)this.state="attack";else{const d=i.x-n.x,p=i.z-n.z,_=Math.hypot(d,p)||1;this.yaw=Math.atan2(-d,-p),this.body.setLinvel({x:d/_*h*1.2,y:c.y,z:p/_*h*1.2},!0)}}if(this.sync(),this.stuck>2){const d=this.body.translation();Math.hypot(d.x-this.lastPos.x,d.z-this.lastPos.z)<.3&&this.body.setLinvel({x:5*Math.sin(this.yaw+1.57),y:4,z:5*Math.cos(this.yaw+1.57)},!0),this.stuck=0,this.lastPos.set(d.x,d.y,d.z)}}moveTo(e,i,n,s){const a=e.x-s.x,o=e.z-s.z,l=Math.hypot(a,o);if(l<.5)return;const c=this.body.linvel(),h=1-Math.exp(-8*n);this.body.setLinvel({x:c.x+(a/l*i-c.x)*h,y:c.y,z:c.z+(o/l*i-c.z)*h},!0)}shoot(e,i){var l;const n=.65+.25*this.diff,s=new E(e.x-i.x+(Math.random()-.5)*(1-n)*6,e.y-i.y+(Math.random()-.5)*(1-n)*4,e.z-i.z+(Math.random()-.5)*(1-n)*6).normalize(),a=new E(i.x,i.y+1,i.z),o=this.pw.ray(a,s,60,di|ii|Ri);this.fx.flash(a,s),this.fx.trail(a,o?this.pw.hp(a,s,o):a.clone().add(s.clone().multiplyScalar(60))),this.audio.play("shot",.4),o&&((l=o.collider)==null?void 0:l.rigidBody)===this.player.body&&(this.player.hp-=10*this.diff)}canSee(e,i,n){if(n>30||!this.player.alive)return!1;const s=new E(Math.sin(this.yaw),0,Math.cos(this.yaw)),a=new E(i.x-e.x,0,i.z-e.z).normalize();return!(Math.acos(Jc.clamp(s.dot(a),-1,1))*(180/Math.PI)>40)&&!this.pw.ray(new E(e.x,e.y+1,e.z),new E(i.x-e.x,i.y-e.y,i.z-e.z).normalize(),n,ii)}}class rp{constructor(t){it(this,"time",180);it(this,"over",!1);it(this,"winner","");it(this,"score",0);it(this,"combo",0);it(this,"comboT",0);this.game=t}kill(t){this.score+=100,this.combo=Math.min(5,this.combo+1),this.comboT=5,this.game.fx.addShake(.3+.15*this.combo),this.game.player.kills++,this.game.audio.play("death",.3),this.game.ui.kill("You killed Bot")}fix(t){this.over||(this.time-=t,this.comboT>0&&(this.comboT-=t),this.comboT<=0&&(this.combo=0),this.time<=0&&this.end())}end(){this.over||(this.over=!0,this.winner=this.score>0?"PLAYER":"NOBODY",this.game.audio.play("cheer"),this.game.ui.end(this.winner,this.score))}restart(){this.over=!1,this.time=180,this.score=0,this.combo=0,this.comboT=0,this.game.player.teleport(0,3,0),this.game.ui.hideEnd()}}class sp{constructor(t){it(this,"h",document.getElementById("healthFill"));it(this,"a",document.getElementById("ammoDisplay"));it(this,"w",document.getElementById("weaponName"));it(this,"t",document.getElementById("timer"));it(this,"kf",document.getElementById("killFeed"));it(this,"cb",document.getElementById("comboDisplay"));it(this,"me",document.getElementById("matchEnd"));it(this,"wt",document.getElementById("winnerText"));it(this,"rb",document.getElementById("restartBtn"));it(this,"flash");this.game=t,this.flash=document.createElement("div"),this.flash.style.cssText="position:fixed;inset:0;background:rgba(255,0,0,0.3);pointer-events:none;opacity:0;z-index:150;",document.body.appendChild(this.flash),this.rb.onclick=()=>t.match.restart()}kill(t){const e=document.createElement("div");e.textContent=t,this.kf.prepend(e),setTimeout(()=>e.remove(),3e3)}end(t,e){this.wt.textContent=`${t} WINS! Score: ${e}`,this.me.classList.add("show")}hideEnd(){this.me.classList.remove("show")}up(t){const e=this.game.player;this.h.style.width=`${Math.max(0,e.hp)}%`,this.h.style.background=e.hp>50?"#2ecc71":e.hp>25?"#f39c12":"#e74c3c",this.flash.style.opacity=e.hp<35?"0.3":"0";const i=this.game.wm.current;i&&(this.a.textContent=i.cfg.melee?"\u221E / \u221E":`${i.ammo} / ${ss[i.cfg.n].a}`,this.w.textContent=i.cfg.n);const n=this.game.match.time;this.t.textContent=`${Math.floor(Math.max(0,n)/60)}:${Math.floor(Math.max(0,n)%60).toString().padStart(2,"0")}`,this.game.match.combo>=2?(this.cb.textContent=`COMBO x${this.game.match.combo}`,this.cb.style.opacity="1"):this.cb.style.opacity="0"}}new class{constructor(){it(this,"pw",new Ju);it(this,"audio",new tp);it(this,"fx");it(this,"player");it(this,"wm");it(this,"match");it(this,"ui");it(this,"scene",new eu);it(this,"cam");it(this,"input",new ep);it(this,"renderer");it(this,"enemies",[]);it(this,"clock",new cu);it(this,"acc",0);it(this,"loop",()=>{requestAnimationFrame(this.loop);const r=Math.min(this.clock.getDelta(),.1);for(this.acc+=r;this.acc>=1/60;){this.pw.step(),this.player.fix(1/60);for(const i of this.enemies)i.fix(1/60);for(let i=this.enemies.length-1;i>=0;i--){const n=this.enemies[i];if(!n.alive&&n.hp<=0&&!n.dying&&(n.dying=!0,n.die(),this.killed(n)),!n.alive&&n.respawnT<=0){const s=this.scene.userData.arena.spawns[Math.floor(Math.random()*this.scene.userData.arena.spawns.length)];n.teleport(s.x,s.y,s.z),n.dying=!1}}this.player.alive&&this.player.hp<=0&&this.player.die(),this.match.fix(1/60),this.acc-=1/60}this.player.up(r);const t=this.input.st;if(t.attack&&this.player.alive){const i=new E;this.cam.getWorldDirection(i);const n=this.player.body.translation();this.wm.fire(i,new E(n.x,n.y+1,n.z))&&(t.attack=!1)}this.wm.update(r),this.fx.update(r),this.ui.up(r);const e=this.fx.shake;e>0&&this.cam.position.add(new E((Math.random()-.5)*e*.15,(Math.random()-.5)*e*.15,0)),this.renderer.render(this.scene,this.cam)})}killed(r){this.match.kill(r),this.fx.death(r.body.translation())}async init(){this.renderer=new tu({canvas:document.getElementById("canvas"),antialias:!0,powerPreference:"high-performance"}),this.renderer.setSize(innerWidth,innerHeight),this.renderer.setPixelRatio(Math.min(devicePixelRatio,2)),this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=2,this.renderer.toneMapping=4,this.renderer.toneMappingExposure=1.2,this.scene.background=new kt(1710638),this.scene.fog=new Ta(1710638,30,80),this.cam=new Ue(70,innerWidth/innerHeight,.1,200),this.cam.position.set(0,5,10);const r=new lu(16777215,.5);this.scene.add(r);const t=new Ml(16777198,1.5);t.position.set(30,50,20),t.castShadow=!0,t.shadow.mapSize.set(2048,2048),t.shadow.camera.left=t.shadow.camera.bottom=-40,t.shadow.camera.right=t.shadow.camera.top=40,this.scene.add(t);const e=new Ml(8956671,.3);e.position.set(-20,20,-20),this.scene.add(e),await this.audio.init(),this.pw.init(),this.input.init(),this.fx=new Qu(this.scene),new Zu(this.scene,this.pw).build(),this.player=new ip(this.scene,this.pw,this.input,this.cam,this.fx,this.audio),this.match=new rp(this),this.ui=new sp(this);const i=this.scene.userData.arena.spawns;this.wm=new $u(this.scene,this.pw,this.player,this.fx,this.audio,this.targets()),this.wm.onPickup=n=>{this.ui.kill(`Picked up ${n}`),this.audio.play("pickup")},this.wm.init();for(let n=0;n<6;n++){const s=i[Math.floor(Math.random()*i.length)];this.enemies.push(new np(this.scene,this.pw,this.player,this.fx,this.audio,s.x,s.z,1+.6*Math.random()))}addEventListener("resize",()=>{this.cam.aspect=innerWidth/innerHeight,this.cam.updateProjectionMatrix(),this.renderer.setSize(innerWidth,innerHeight)}),this.loop()}targets(){return[this.player,...this.enemies]}}().init()});export default ap();
