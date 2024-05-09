import './polyfills.server.mjs';
import{$ as e2,A as f2,B as G4,Ba as we,C as E2,Ca as st,D as at,Da as Z3,E as L5,Ea as y3,F as Ce,Fa as k5,G as w5,Ga as z4,H as W3,I as be,Ia as D5,J as nt,Ja as Ae,K as M4,Ka as I5,L as C3,La as F5,M as q3,Ma as O5,N as W4,Na as $3,O as A5,Oa as X4,P as He,Pa as Te,Q as _e,Qa as Ee,R as U1,Ra as U5,S as U2,Sa as B5,T as ct,Ta as G5,U as D6,V as X3,W as R2,Wa as W5,X as T5,Y as E5,Z as B2,_ as q4,a as ze,aa as N5,ab as q5,b as M5,ba as rt,c as z5,ca as b3,d as x5,da as I6,e as P6,ea as Z1,f as C5,fa as $1,g as B3,ga as Q1,h as T2,ha as P5,i as b5,ia as G2,j as R6,ja as t3,k as H5,ka as ye,l as it,la as Ve,m as _5,ma as R5,n as y5,na as Y3,o as Q2,oa as H3,p as g4,pa as _3,q as k6,qa as h3,r as $2,ra as Se,s as V5,sa as Le,t as S5,ta as u3,u as e3,ua as h2,v as B4,w as x3,x as xe,y as X1,z as G3}from"./chunk-AK7IDCR3.mjs";import{a as z3,b as ge,h as Me}from"./chunk-VVCT4QZE.mjs";var C8="162";var bn=0,X5=1,Hn=2;var Mi=1,_n=2,T3=3,r4=0,F2=1,N3=2,m3=0,d6=1,Y5=2,Z5=3,$5=4,yn=5,S4=100,Vn=101,Sn=102,j5=103,J5=104,Ln=200,wn=201,An=202,Tn=203,Ut=204,Bt=205,En=206,Nn=207,Pn=208,Rn=209,kn=210,Dn=211,In=212,Fn=213,On=214,Un=0,Bn=1,Gn=2,t0=3,Wn=4,qn=5,Xn=6,Yn=7,zi=0,Zn=1,$n=2,n4=0,jn=1,Jn=2,Kn=3,Qn=4,ec=5,tc=6,ic=7;var K5=300,v6=301,g6=302,Gt=303,Wt=304,b0=306,qt=1e3,c3=1001,Xt=1002,P2=1003,Q5=1004;var F6=1005;var D2=1006,ot=1007;var w4=1008;var c4=1009,ac=1010,nc=1011,b8=1012,xi=1013,a4=1014,P3=1015,E4=1016,Ci=1017,bi=1018,A4=1020,cc=1021,r3=1023,rc=1024,sc=1025,T4=1026,M6=1027,oc=1028,Hi=1029,lc=1030,_i=1031,yi=1033,lt=33776,ft=33777,ht=33778,ut=33779,e7=35840,t7=35841,i7=35842,a7=35843,Vi=36196,n7=37492,c7=37496,r7=37808,s7=37809,o7=37810,l7=37811,f7=37812,h7=37813,u7=37814,d7=37815,p7=37816,m7=37817,v7=37818,g7=37819,M7=37820,z7=37821,dt=36492,x7=36494,C7=36495,fc=36283,b7=36284,H7=36285,_7=36286;var i0=2300,a0=2301,pt=2302,y7=2400,V7=2401,S7=2402;var hc=3200,uc=3201,dc=0,pc=1,i4="",d3="srgb",f4="srgb-linear",H8="display-p3",H0="display-p3-linear",n0="linear",t2="srgb",c0="rec709",r0="p3";var Y4=7680;var L7=519,mc=512,vc=513,gc=514,Si=515,Mc=516,zc=517,xc=518,Cc=519,w7=35044;var A7="300 es",Yt=1035,R3=2e3,s0=2001,s4=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;let i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;let n=this._listeners[e];if(n!==void 0){let c=n.indexOf(t);c!==-1&&n.splice(c,1)}}dispatchEvent(e){if(this._listeners===void 0)return;let i=this._listeners[e.type];if(i!==void 0){e.target=this;let n=i.slice(0);for(let c=0,r=n.length;c<r;c++)n[c].call(this,e);e.target=null}}},L2=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var mt=Math.PI/180,Zt=180/Math.PI;function j6(){let a=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(L2[a&255]+L2[a>>8&255]+L2[a>>16&255]+L2[a>>24&255]+"-"+L2[e&255]+L2[e>>8&255]+"-"+L2[e>>16&15|64]+L2[e>>24&255]+"-"+L2[t&63|128]+L2[t>>8&255]+"-"+L2[t>>16&255]+L2[t>>24&255]+L2[i&255]+L2[i>>8&255]+L2[i>>16&255]+L2[i>>24&255]).toLowerCase()}function I2(a,e,t){return Math.max(e,Math.min(t,a))}function bc(a,e){return(a%e+e)%e}function vt(a,e,t){return(1-t)*a+t*e}function T7(a){return(a&a-1)===0&&a!==0}function $t(a){return Math.pow(2,Math.floor(Math.log(a)/Math.LN2))}function O6(a,e){switch(e.constructor){case Float32Array:return a;case Uint32Array:return a/4294967295;case Uint16Array:return a/65535;case Uint8Array:return a/255;case Int32Array:return Math.max(a/2147483647,-1);case Int16Array:return Math.max(a/32767,-1);case Int8Array:return Math.max(a/127,-1);default:throw new Error("Invalid component type.")}}function k2(a,e){switch(e.constructor){case Float32Array:return a;case Uint32Array:return Math.round(a*4294967295);case Uint16Array:return Math.round(a*65535);case Uint8Array:return Math.round(a*255);case Int32Array:return Math.round(a*2147483647);case Int16Array:return Math.round(a*32767);case Int8Array:return Math.round(a*127);default:throw new Error("Invalid component type.")}}var W1=class a{constructor(e=0,t=0){a.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,i=this.y,n=e.elements;return this.x=n[0]*t+n[3]*i+n[6],this.y=n[1]*t+n[4]*i+n[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(I2(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let i=Math.cos(t),n=Math.sin(t),c=this.x-e.x,r=this.y-e.y;return this.x=c*i-r*n+e.x,this.y=c*n+r*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},P1=class a{constructor(e,t,i,n,c,r,s,o,l){a.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,n,c,r,s,o,l)}set(e,t,i,n,c,r,s,o,l){let f=this.elements;return f[0]=e,f[1]=n,f[2]=s,f[3]=t,f[4]=c,f[5]=o,f[6]=i,f[7]=r,f[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,n=t.elements,c=this.elements,r=i[0],s=i[3],o=i[6],l=i[1],f=i[4],h=i[7],d=i[2],m=i[5],g=i[8],z=n[0],p=n[3],u=n[6],_=n[1],C=n[4],H=n[7],A=n[2],S=n[5],V=n[8];return c[0]=r*z+s*_+o*A,c[3]=r*p+s*C+o*S,c[6]=r*u+s*H+o*V,c[1]=l*z+f*_+h*A,c[4]=l*p+f*C+h*S,c[7]=l*u+f*H+h*V,c[2]=d*z+m*_+g*A,c[5]=d*p+m*C+g*S,c[8]=d*u+m*H+g*V,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[1],n=e[2],c=e[3],r=e[4],s=e[5],o=e[6],l=e[7],f=e[8];return t*r*f-t*s*l-i*c*f+i*s*o+n*c*l-n*r*o}invert(){let e=this.elements,t=e[0],i=e[1],n=e[2],c=e[3],r=e[4],s=e[5],o=e[6],l=e[7],f=e[8],h=f*r-s*l,d=s*o-f*c,m=l*c-r*o,g=t*h+i*d+n*m;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let z=1/g;return e[0]=h*z,e[1]=(n*l-f*i)*z,e[2]=(s*i-n*r)*z,e[3]=d*z,e[4]=(f*t-n*o)*z,e[5]=(n*c-s*t)*z,e[6]=m*z,e[7]=(i*o-l*t)*z,e[8]=(r*t-i*c)*z,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,n,c,r,s){let o=Math.cos(c),l=Math.sin(c);return this.set(i*o,i*l,-i*(o*r+l*s)+r+e,-n*l,n*o,-n*(-l*r+o*s)+s+t,0,0,1),this}scale(e,t){return this.premultiply(gt.makeScale(e,t)),this}rotate(e){return this.premultiply(gt.makeRotation(-e)),this}translate(e,t){return this.premultiply(gt.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,i=e.elements;for(let n=0;n<9;n++)if(t[n]!==i[n])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}},gt=new P1;function Li(a){for(let e=a.length-1;e>=0;--e)if(a[e]>=65535)return!0;return!1}function o0(a){return document.createElementNS("http://www.w3.org/1999/xhtml",a)}function Hc(){let a=o0("canvas");return a.style.display="block",a}var E7={};function _c(a){a in E7||(E7[a]=!0,console.warn(a))}var N7=new P1().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),P7=new P1().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Ne={[f4]:{transfer:n0,primaries:c0,toReference:a=>a,fromReference:a=>a},[d3]:{transfer:t2,primaries:c0,toReference:a=>a.convertSRGBToLinear(),fromReference:a=>a.convertLinearToSRGB()},[H0]:{transfer:n0,primaries:r0,toReference:a=>a.applyMatrix3(P7),fromReference:a=>a.applyMatrix3(N7)},[H8]:{transfer:t2,primaries:r0,toReference:a=>a.convertSRGBToLinear().applyMatrix3(P7),fromReference:a=>a.applyMatrix3(N7).convertLinearToSRGB()}},yc=new Set([f4,H0]),j1={enabled:!0,_workingColorSpace:f4,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(a){if(!yc.has(a))throw new Error(`Unsupported working color space, "${a}".`);this._workingColorSpace=a},convert:function(a,e,t){if(this.enabled===!1||e===t||!e||!t)return a;let i=Ne[e].toReference,n=Ne[t].fromReference;return n(i(a))},fromWorkingColorSpace:function(a,e){return this.convert(a,this._workingColorSpace,e)},toWorkingColorSpace:function(a,e){return this.convert(a,e,this._workingColorSpace)},getPrimaries:function(a){return Ne[a].primaries},getTransfer:function(a){return a===i4?n0:Ne[a].transfer}};function p6(a){return a<.04045?a*.0773993808:Math.pow(a*.9478672986+.0521327014,2.4)}function Mt(a){return a<.0031308?a*12.92:1.055*Math.pow(a,.41666)-.055}var Z4,l0=class{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Z4===void 0&&(Z4=o0("canvas")),Z4.width=e.width,Z4.height=e.height;let i=Z4.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=Z4}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=o0("canvas");t.width=e.width,t.height=e.height;let i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);let n=i.getImageData(0,0,e.width,e.height),c=n.data;for(let r=0;r<c.length;r++)c[r]=p6(c[r]/255)*255;return i.putImageData(n,0,0),t}else if(e.data){let t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(p6(t[i]/255)*255):t[i]=p6(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},Vc=0,f0=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Vc++}),this.uuid=j6(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let i={uuid:this.uuid,url:""},n=this.data;if(n!==null){let c;if(Array.isArray(n)){c=[];for(let r=0,s=n.length;r<s;r++)n[r].isDataTexture?c.push(zt(n[r].image)):c.push(zt(n[r]))}else c=zt(n);i.url=c}return t||(e.images[this.uuid]=i),i}};function zt(a){return typeof HTMLImageElement<"u"&&a instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&a instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&a instanceof ImageBitmap?l0.getDataURL(a):a.data?{data:Array.from(a.data),width:a.width,height:a.height,type:a.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var Sc=0,D4=(()=>{class a extends s4{constructor(t=a.DEFAULT_IMAGE,i=a.DEFAULT_MAPPING,n=c3,c=c3,r=D2,s=w4,o=r3,l=c4,f=a.DEFAULT_ANISOTROPY,h=i4){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Sc++}),this.uuid=j6(),this.name="",this.source=new f0(t),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=n,this.wrapT=c,this.magFilter=r,this.minFilter=s,this.anisotropy=f,this.format=o,this.internalFormat=null,this.type=l,this.offset=new W1(0,0),this.repeat=new W1(1,1),this.center=new W1(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new P1,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){let i=t===void 0||typeof t=="string";if(!i&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),i||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==K5)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case qt:t.x=t.x-Math.floor(t.x);break;case c3:t.x=t.x<0?0:1;break;case Xt:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case qt:t.y=t.y-Math.floor(t.y);break;case c3:t.y=t.y<0?0:1;break;case Xt:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}}return a.DEFAULT_IMAGE=null,a.DEFAULT_MAPPING=K5,a.DEFAULT_ANISOTROPY=1,a})(),_2=class a{constructor(e=0,t=0,i=0,n=1){a.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=n}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,n){return this.x=e,this.y=t,this.z=i,this.w=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,i=this.y,n=this.z,c=this.w,r=e.elements;return this.x=r[0]*t+r[4]*i+r[8]*n+r[12]*c,this.y=r[1]*t+r[5]*i+r[9]*n+r[13]*c,this.z=r[2]*t+r[6]*i+r[10]*n+r[14]*c,this.w=r[3]*t+r[7]*i+r[11]*n+r[15]*c,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,n,c,o=e.elements,l=o[0],f=o[4],h=o[8],d=o[1],m=o[5],g=o[9],z=o[2],p=o[6],u=o[10];if(Math.abs(f-d)<.01&&Math.abs(h-z)<.01&&Math.abs(g-p)<.01){if(Math.abs(f+d)<.1&&Math.abs(h+z)<.1&&Math.abs(g+p)<.1&&Math.abs(l+m+u-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let C=(l+1)/2,H=(m+1)/2,A=(u+1)/2,S=(f+d)/4,V=(h+z)/4,F=(g+p)/4;return C>H&&C>A?C<.01?(i=0,n=.707106781,c=.707106781):(i=Math.sqrt(C),n=S/i,c=V/i):H>A?H<.01?(i=.707106781,n=0,c=.707106781):(n=Math.sqrt(H),i=S/n,c=F/n):A<.01?(i=.707106781,n=.707106781,c=0):(c=Math.sqrt(A),i=V/c,n=F/c),this.set(i,n,c,t),this}let _=Math.sqrt((p-g)*(p-g)+(h-z)*(h-z)+(d-f)*(d-f));return Math.abs(_)<.001&&(_=1),this.x=(p-g)/_,this.y=(h-z)/_,this.z=(d-f)/_,this.w=Math.acos((l+m+u-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},jt=class extends s4{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new _2(0,0,e,t),this.scissorTest=!1,this.viewport=new _2(0,0,e,t);let n={width:e,height:t,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:D2,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0,count:1},i);let c=new D4(n,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);c.flipY=!1,c.generateMipmaps=i.generateMipmaps,c.internalFormat=i.internalFormat,this.textures=[];let r=i.count;for(let s=0;s<r;s++)this.textures[s]=c.clone(),this.textures[s].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let n=0,c=this.textures.length;n<c;n++)this.textures[n].image.width=e,this.textures[n].image.height=t,this.textures[n].image.depth=i;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,n=e.textures.length;i<n;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;let t=Object.assign({},e.texture.image);return this.texture.source=new f0(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},s3=class extends jt{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}},h0=class extends D4{constructor(e=null,t=1,i=1,n=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:n},this.magFilter=P2,this.minFilter=P2,this.wrapR=c3,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Jt=class extends D4{constructor(e=null,t=1,i=1,n=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:n},this.magFilter=P2,this.minFilter=P2,this.wrapR=c3,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var o4=class{constructor(e=0,t=0,i=0,n=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=n}static slerpFlat(e,t,i,n,c,r,s){let o=i[n+0],l=i[n+1],f=i[n+2],h=i[n+3],d=c[r+0],m=c[r+1],g=c[r+2],z=c[r+3];if(s===0){e[t+0]=o,e[t+1]=l,e[t+2]=f,e[t+3]=h;return}if(s===1){e[t+0]=d,e[t+1]=m,e[t+2]=g,e[t+3]=z;return}if(h!==z||o!==d||l!==m||f!==g){let p=1-s,u=o*d+l*m+f*g+h*z,_=u>=0?1:-1,C=1-u*u;if(C>Number.EPSILON){let A=Math.sqrt(C),S=Math.atan2(A,u*_);p=Math.sin(p*S)/A,s=Math.sin(s*S)/A}let H=s*_;if(o=o*p+d*H,l=l*p+m*H,f=f*p+g*H,h=h*p+z*H,p===1-s){let A=1/Math.sqrt(o*o+l*l+f*f+h*h);o*=A,l*=A,f*=A,h*=A}}e[t]=o,e[t+1]=l,e[t+2]=f,e[t+3]=h}static multiplyQuaternionsFlat(e,t,i,n,c,r){let s=i[n],o=i[n+1],l=i[n+2],f=i[n+3],h=c[r],d=c[r+1],m=c[r+2],g=c[r+3];return e[t]=s*g+f*h+o*m-l*d,e[t+1]=o*g+f*d+l*h-s*m,e[t+2]=l*g+f*m+s*d-o*h,e[t+3]=f*g-s*h-o*d-l*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,n){return this._x=e,this._y=t,this._z=i,this._w=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let i=e._x,n=e._y,c=e._z,r=e._order,s=Math.cos,o=Math.sin,l=s(i/2),f=s(n/2),h=s(c/2),d=o(i/2),m=o(n/2),g=o(c/2);switch(r){case"XYZ":this._x=d*f*h+l*m*g,this._y=l*m*h-d*f*g,this._z=l*f*g+d*m*h,this._w=l*f*h-d*m*g;break;case"YXZ":this._x=d*f*h+l*m*g,this._y=l*m*h-d*f*g,this._z=l*f*g-d*m*h,this._w=l*f*h+d*m*g;break;case"ZXY":this._x=d*f*h-l*m*g,this._y=l*m*h+d*f*g,this._z=l*f*g+d*m*h,this._w=l*f*h-d*m*g;break;case"ZYX":this._x=d*f*h-l*m*g,this._y=l*m*h+d*f*g,this._z=l*f*g-d*m*h,this._w=l*f*h+d*m*g;break;case"YZX":this._x=d*f*h+l*m*g,this._y=l*m*h+d*f*g,this._z=l*f*g-d*m*h,this._w=l*f*h-d*m*g;break;case"XZY":this._x=d*f*h-l*m*g,this._y=l*m*h-d*f*g,this._z=l*f*g+d*m*h,this._w=l*f*h+d*m*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+r)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let i=t/2,n=Math.sin(i);return this._x=e.x*n,this._y=e.y*n,this._z=e.z*n,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,i=t[0],n=t[4],c=t[8],r=t[1],s=t[5],o=t[9],l=t[2],f=t[6],h=t[10],d=i+s+h;if(d>0){let m=.5/Math.sqrt(d+1);this._w=.25/m,this._x=(f-o)*m,this._y=(c-l)*m,this._z=(r-n)*m}else if(i>s&&i>h){let m=2*Math.sqrt(1+i-s-h);this._w=(f-o)/m,this._x=.25*m,this._y=(n+r)/m,this._z=(c+l)/m}else if(s>h){let m=2*Math.sqrt(1+s-i-h);this._w=(c-l)/m,this._x=(n+r)/m,this._y=.25*m,this._z=(o+f)/m}else{let m=2*Math.sqrt(1+h-i-s);this._w=(r-n)/m,this._x=(c+l)/m,this._y=(o+f)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(I2(this.dot(e),-1,1)))}rotateTowards(e,t){let i=this.angleTo(e);if(i===0)return this;let n=Math.min(1,t/i);return this.slerp(e,n),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let i=e._x,n=e._y,c=e._z,r=e._w,s=t._x,o=t._y,l=t._z,f=t._w;return this._x=i*f+r*s+n*l-c*o,this._y=n*f+r*o+c*s-i*l,this._z=c*f+r*l+i*o-n*s,this._w=r*f-i*s-n*o-c*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let i=this._x,n=this._y,c=this._z,r=this._w,s=r*e._w+i*e._x+n*e._y+c*e._z;if(s<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,s=-s):this.copy(e),s>=1)return this._w=r,this._x=i,this._y=n,this._z=c,this;let o=1-s*s;if(o<=Number.EPSILON){let m=1-t;return this._w=m*r+t*this._w,this._x=m*i+t*this._x,this._y=m*n+t*this._y,this._z=m*c+t*this._z,this.normalize(),this}let l=Math.sqrt(o),f=Math.atan2(l,s),h=Math.sin((1-t)*f)/l,d=Math.sin(t*f)/l;return this._w=r*h+this._w*d,this._x=i*h+this._x*d,this._y=n*h+this._y*d,this._z=c*h+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),n=Math.sqrt(1-i),c=Math.sqrt(i);return this.set(n*Math.sin(e),n*Math.cos(e),c*Math.sin(t),c*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},k=class a{constructor(e=0,t=0,i=0){a.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(R7.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(R7.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,i=this.y,n=this.z,c=e.elements;return this.x=c[0]*t+c[3]*i+c[6]*n,this.y=c[1]*t+c[4]*i+c[7]*n,this.z=c[2]*t+c[5]*i+c[8]*n,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,i=this.y,n=this.z,c=e.elements,r=1/(c[3]*t+c[7]*i+c[11]*n+c[15]);return this.x=(c[0]*t+c[4]*i+c[8]*n+c[12])*r,this.y=(c[1]*t+c[5]*i+c[9]*n+c[13])*r,this.z=(c[2]*t+c[6]*i+c[10]*n+c[14])*r,this}applyQuaternion(e){let t=this.x,i=this.y,n=this.z,c=e.x,r=e.y,s=e.z,o=e.w,l=2*(r*n-s*i),f=2*(s*t-c*n),h=2*(c*i-r*t);return this.x=t+o*l+r*h-s*f,this.y=i+o*f+s*l-c*h,this.z=n+o*h+c*f-r*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,i=this.y,n=this.z,c=e.elements;return this.x=c[0]*t+c[4]*i+c[8]*n,this.y=c[1]*t+c[5]*i+c[9]*n,this.z=c[2]*t+c[6]*i+c[10]*n,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let i=e.x,n=e.y,c=e.z,r=t.x,s=t.y,o=t.z;return this.x=n*o-c*s,this.y=c*r-i*o,this.z=i*s-n*r,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return xt.copy(this).projectOnVector(e),this.sub(xt)}reflect(e){return this.sub(xt.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(I2(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y,n=this.z-e.z;return t*t+i*i+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){let n=Math.sin(t)*e;return this.x=n*Math.sin(i),this.y=Math.cos(t)*e,this.z=n*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),n=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=n,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},xt=new k,R7=new o4,N4=class{constructor(e=new k(1/0,1/0,1/0),t=new k(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(i3.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(i3.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let i=i3.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let i=e.geometry;if(i!==void 0){let c=i.getAttribute("position");if(t===!0&&c!==void 0&&e.isInstancedMesh!==!0)for(let r=0,s=c.count;r<s;r++)e.isMesh===!0?e.getVertexPosition(r,i3):i3.fromBufferAttribute(c,r),i3.applyMatrix4(e.matrixWorld),this.expandByPoint(i3);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Pe.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Pe.copy(i.boundingBox)),Pe.applyMatrix4(e.matrixWorld),this.union(Pe)}let n=e.children;for(let c=0,r=n.length;c<r;c++)this.expandByObject(n[c],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,i3),i3.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(U6),Re.subVectors(this.max,U6),$4.subVectors(e.a,U6),j4.subVectors(e.b,U6),J4.subVectors(e.c,U6),j3.subVectors(j4,$4),J3.subVectors(J4,j4),x4.subVectors($4,J4);let t=[0,-j3.z,j3.y,0,-J3.z,J3.y,0,-x4.z,x4.y,j3.z,0,-j3.x,J3.z,0,-J3.x,x4.z,0,-x4.x,-j3.y,j3.x,0,-J3.y,J3.x,0,-x4.y,x4.x,0];return!Ct(t,$4,j4,J4,Re)||(t=[1,0,0,0,1,0,0,0,1],!Ct(t,$4,j4,J4,Re))?!1:(ke.crossVectors(j3,J3),t=[ke.x,ke.y,ke.z],Ct(t,$4,j4,J4,Re))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,i3).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(i3).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(V3[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),V3[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),V3[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),V3[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),V3[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),V3[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),V3[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),V3[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(V3),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}},V3=[new k,new k,new k,new k,new k,new k,new k,new k],i3=new k,Pe=new N4,$4=new k,j4=new k,J4=new k,j3=new k,J3=new k,x4=new k,U6=new k,Re=new k,ke=new k,C4=new k;function Ct(a,e,t,i,n){for(let c=0,r=a.length-3;c<=r;c+=3){C4.fromArray(a,c);let s=n.x*Math.abs(C4.x)+n.y*Math.abs(C4.y)+n.z*Math.abs(C4.z),o=e.dot(C4),l=t.dot(C4),f=i.dot(C4);if(Math.max(-Math.max(o,l,f),Math.min(o,l,f))>s)return!1}return!0}var Lc=new N4,B6=new k,bt=new k,X6=class{constructor(e=new k,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let i=this.center;t!==void 0?i.copy(t):Lc.setFromPoints(e).getCenter(i);let n=0;for(let c=0,r=e.length;c<r;c++)n=Math.max(n,i.distanceToSquared(e[c]));return this.radius=Math.sqrt(n),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;B6.subVectors(e,this.center);let t=B6.lengthSq();if(t>this.radius*this.radius){let i=Math.sqrt(t),n=(i-this.radius)*.5;this.center.addScaledVector(B6,n/i),this.radius+=n}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(bt.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(B6.copy(e.center).add(bt)),this.expandByPoint(B6.copy(e.center).sub(bt))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}},S3=new k,Ht=new k,De=new k,K3=new k,_t=new k,Ie=new k,yt=new k,Kt=class{constructor(e=new k,t=new k(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,S3)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=S3.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(S3.copy(this.origin).addScaledVector(this.direction,t),S3.distanceToSquared(e))}distanceSqToSegment(e,t,i,n){Ht.copy(e).add(t).multiplyScalar(.5),De.copy(t).sub(e).normalize(),K3.copy(this.origin).sub(Ht);let c=e.distanceTo(t)*.5,r=-this.direction.dot(De),s=K3.dot(this.direction),o=-K3.dot(De),l=K3.lengthSq(),f=Math.abs(1-r*r),h,d,m,g;if(f>0)if(h=r*o-s,d=r*s-o,g=c*f,h>=0)if(d>=-g)if(d<=g){let z=1/f;h*=z,d*=z,m=h*(h+r*d+2*s)+d*(r*h+d+2*o)+l}else d=c,h=Math.max(0,-(r*d+s)),m=-h*h+d*(d+2*o)+l;else d=-c,h=Math.max(0,-(r*d+s)),m=-h*h+d*(d+2*o)+l;else d<=-g?(h=Math.max(0,-(-r*c+s)),d=h>0?-c:Math.min(Math.max(-c,-o),c),m=-h*h+d*(d+2*o)+l):d<=g?(h=0,d=Math.min(Math.max(-c,-o),c),m=d*(d+2*o)+l):(h=Math.max(0,-(r*c+s)),d=h>0?c:Math.min(Math.max(-c,-o),c),m=-h*h+d*(d+2*o)+l);else d=r>0?-c:c,h=Math.max(0,-(r*d+s)),m=-h*h+d*(d+2*o)+l;return i&&i.copy(this.origin).addScaledVector(this.direction,h),n&&n.copy(Ht).addScaledVector(De,d),m}intersectSphere(e,t){S3.subVectors(e.center,this.origin);let i=S3.dot(this.direction),n=S3.dot(S3)-i*i,c=e.radius*e.radius;if(n>c)return null;let r=Math.sqrt(c-n),s=i-r,o=i+r;return o<0?null:s<0?this.at(o,t):this.at(s,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){let i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,n,c,r,s,o,l=1/this.direction.x,f=1/this.direction.y,h=1/this.direction.z,d=this.origin;return l>=0?(i=(e.min.x-d.x)*l,n=(e.max.x-d.x)*l):(i=(e.max.x-d.x)*l,n=(e.min.x-d.x)*l),f>=0?(c=(e.min.y-d.y)*f,r=(e.max.y-d.y)*f):(c=(e.max.y-d.y)*f,r=(e.min.y-d.y)*f),i>r||c>n||((c>i||isNaN(i))&&(i=c),(r<n||isNaN(n))&&(n=r),h>=0?(s=(e.min.z-d.z)*h,o=(e.max.z-d.z)*h):(s=(e.max.z-d.z)*h,o=(e.min.z-d.z)*h),i>o||s>n)||((s>i||i!==i)&&(i=s),(o<n||n!==n)&&(n=o),n<0)?null:this.at(i>=0?i:n,t)}intersectsBox(e){return this.intersectBox(e,S3)!==null}intersectTriangle(e,t,i,n,c){_t.subVectors(t,e),Ie.subVectors(i,e),yt.crossVectors(_t,Ie);let r=this.direction.dot(yt),s;if(r>0){if(n)return null;s=1}else if(r<0)s=-1,r=-r;else return null;K3.subVectors(this.origin,e);let o=s*this.direction.dot(Ie.crossVectors(K3,Ie));if(o<0)return null;let l=s*this.direction.dot(_t.cross(K3));if(l<0||o+l>r)return null;let f=-s*K3.dot(yt);return f<0?null:this.at(f/r,c)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},x2=class a{constructor(e,t,i,n,c,r,s,o,l,f,h,d,m,g,z,p){a.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,n,c,r,s,o,l,f,h,d,m,g,z,p)}set(e,t,i,n,c,r,s,o,l,f,h,d,m,g,z,p){let u=this.elements;return u[0]=e,u[4]=t,u[8]=i,u[12]=n,u[1]=c,u[5]=r,u[9]=s,u[13]=o,u[2]=l,u[6]=f,u[10]=h,u[14]=d,u[3]=m,u[7]=g,u[11]=z,u[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new a().fromArray(this.elements)}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){let t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,i=e.elements,n=1/K4.setFromMatrixColumn(e,0).length(),c=1/K4.setFromMatrixColumn(e,1).length(),r=1/K4.setFromMatrixColumn(e,2).length();return t[0]=i[0]*n,t[1]=i[1]*n,t[2]=i[2]*n,t[3]=0,t[4]=i[4]*c,t[5]=i[5]*c,t[6]=i[6]*c,t[7]=0,t[8]=i[8]*r,t[9]=i[9]*r,t[10]=i[10]*r,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,i=e.x,n=e.y,c=e.z,r=Math.cos(i),s=Math.sin(i),o=Math.cos(n),l=Math.sin(n),f=Math.cos(c),h=Math.sin(c);if(e.order==="XYZ"){let d=r*f,m=r*h,g=s*f,z=s*h;t[0]=o*f,t[4]=-o*h,t[8]=l,t[1]=m+g*l,t[5]=d-z*l,t[9]=-s*o,t[2]=z-d*l,t[6]=g+m*l,t[10]=r*o}else if(e.order==="YXZ"){let d=o*f,m=o*h,g=l*f,z=l*h;t[0]=d+z*s,t[4]=g*s-m,t[8]=r*l,t[1]=r*h,t[5]=r*f,t[9]=-s,t[2]=m*s-g,t[6]=z+d*s,t[10]=r*o}else if(e.order==="ZXY"){let d=o*f,m=o*h,g=l*f,z=l*h;t[0]=d-z*s,t[4]=-r*h,t[8]=g+m*s,t[1]=m+g*s,t[5]=r*f,t[9]=z-d*s,t[2]=-r*l,t[6]=s,t[10]=r*o}else if(e.order==="ZYX"){let d=r*f,m=r*h,g=s*f,z=s*h;t[0]=o*f,t[4]=g*l-m,t[8]=d*l+z,t[1]=o*h,t[5]=z*l+d,t[9]=m*l-g,t[2]=-l,t[6]=s*o,t[10]=r*o}else if(e.order==="YZX"){let d=r*o,m=r*l,g=s*o,z=s*l;t[0]=o*f,t[4]=z-d*h,t[8]=g*h+m,t[1]=h,t[5]=r*f,t[9]=-s*f,t[2]=-l*f,t[6]=m*h+g,t[10]=d-z*h}else if(e.order==="XZY"){let d=r*o,m=r*l,g=s*o,z=s*l;t[0]=o*f,t[4]=-h,t[8]=l*f,t[1]=d*h+z,t[5]=r*f,t[9]=m*h-g,t[2]=g*h-m,t[6]=s*f,t[10]=z*h+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(wc,e,Ac)}lookAt(e,t,i){let n=this.elements;return W2.subVectors(e,t),W2.lengthSq()===0&&(W2.z=1),W2.normalize(),Q3.crossVectors(i,W2),Q3.lengthSq()===0&&(Math.abs(i.z)===1?W2.x+=1e-4:W2.z+=1e-4,W2.normalize(),Q3.crossVectors(i,W2)),Q3.normalize(),Fe.crossVectors(W2,Q3),n[0]=Q3.x,n[4]=Fe.x,n[8]=W2.x,n[1]=Q3.y,n[5]=Fe.y,n[9]=W2.y,n[2]=Q3.z,n[6]=Fe.z,n[10]=W2.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,n=t.elements,c=this.elements,r=i[0],s=i[4],o=i[8],l=i[12],f=i[1],h=i[5],d=i[9],m=i[13],g=i[2],z=i[6],p=i[10],u=i[14],_=i[3],C=i[7],H=i[11],A=i[15],S=n[0],V=n[4],F=n[8],$=n[12],M=n[1],y=n[5],e1=n[9],K=n[13],w=n[2],G=n[6],U=n[10],X=n[14],B=n[3],q=n[7],Y=n[11],a1=n[15];return c[0]=r*S+s*M+o*w+l*B,c[4]=r*V+s*y+o*G+l*q,c[8]=r*F+s*e1+o*U+l*Y,c[12]=r*$+s*K+o*X+l*a1,c[1]=f*S+h*M+d*w+m*B,c[5]=f*V+h*y+d*G+m*q,c[9]=f*F+h*e1+d*U+m*Y,c[13]=f*$+h*K+d*X+m*a1,c[2]=g*S+z*M+p*w+u*B,c[6]=g*V+z*y+p*G+u*q,c[10]=g*F+z*e1+p*U+u*Y,c[14]=g*$+z*K+p*X+u*a1,c[3]=_*S+C*M+H*w+A*B,c[7]=_*V+C*y+H*G+A*q,c[11]=_*F+C*e1+H*U+A*Y,c[15]=_*$+C*K+H*X+A*a1,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[4],n=e[8],c=e[12],r=e[1],s=e[5],o=e[9],l=e[13],f=e[2],h=e[6],d=e[10],m=e[14],g=e[3],z=e[7],p=e[11],u=e[15];return g*(+c*o*h-n*l*h-c*s*d+i*l*d+n*s*m-i*o*m)+z*(+t*o*m-t*l*d+c*r*d-n*r*m+n*l*f-c*o*f)+p*(+t*l*h-t*s*m-c*r*h+i*r*m+c*s*f-i*l*f)+u*(-n*s*f-t*o*h+t*s*d+n*r*h-i*r*d+i*o*f)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){let n=this.elements;return e.isVector3?(n[12]=e.x,n[13]=e.y,n[14]=e.z):(n[12]=e,n[13]=t,n[14]=i),this}invert(){let e=this.elements,t=e[0],i=e[1],n=e[2],c=e[3],r=e[4],s=e[5],o=e[6],l=e[7],f=e[8],h=e[9],d=e[10],m=e[11],g=e[12],z=e[13],p=e[14],u=e[15],_=h*p*l-z*d*l+z*o*m-s*p*m-h*o*u+s*d*u,C=g*d*l-f*p*l-g*o*m+r*p*m+f*o*u-r*d*u,H=f*z*l-g*h*l+g*s*m-r*z*m-f*s*u+r*h*u,A=g*h*o-f*z*o-g*s*d+r*z*d+f*s*p-r*h*p,S=t*_+i*C+n*H+c*A;if(S===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let V=1/S;return e[0]=_*V,e[1]=(z*d*c-h*p*c-z*n*m+i*p*m+h*n*u-i*d*u)*V,e[2]=(s*p*c-z*o*c+z*n*l-i*p*l-s*n*u+i*o*u)*V,e[3]=(h*o*c-s*d*c-h*n*l+i*d*l+s*n*m-i*o*m)*V,e[4]=C*V,e[5]=(f*p*c-g*d*c+g*n*m-t*p*m-f*n*u+t*d*u)*V,e[6]=(g*o*c-r*p*c-g*n*l+t*p*l+r*n*u-t*o*u)*V,e[7]=(r*d*c-f*o*c+f*n*l-t*d*l-r*n*m+t*o*m)*V,e[8]=H*V,e[9]=(g*h*c-f*z*c-g*i*m+t*z*m+f*i*u-t*h*u)*V,e[10]=(r*z*c-g*s*c+g*i*l-t*z*l-r*i*u+t*s*u)*V,e[11]=(f*s*c-r*h*c-f*i*l+t*h*l+r*i*m-t*s*m)*V,e[12]=A*V,e[13]=(f*z*n-g*h*n+g*i*d-t*z*d-f*i*p+t*h*p)*V,e[14]=(g*s*n-r*z*n-g*i*o+t*z*o+r*i*p-t*s*p)*V,e[15]=(r*h*n-f*s*n+f*i*o-t*h*o-r*i*d+t*s*d)*V,this}scale(e){let t=this.elements,i=e.x,n=e.y,c=e.z;return t[0]*=i,t[4]*=n,t[8]*=c,t[1]*=i,t[5]*=n,t[9]*=c,t[2]*=i,t[6]*=n,t[10]*=c,t[3]*=i,t[7]*=n,t[11]*=c,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],n=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,n))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let i=Math.cos(t),n=Math.sin(t),c=1-i,r=e.x,s=e.y,o=e.z,l=c*r,f=c*s;return this.set(l*r+i,l*s-n*o,l*o+n*s,0,l*s+n*o,f*s+i,f*o-n*r,0,l*o-n*s,f*o+n*r,c*o*o+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,n,c,r){return this.set(1,i,c,0,e,1,r,0,t,n,1,0,0,0,0,1),this}compose(e,t,i){let n=this.elements,c=t._x,r=t._y,s=t._z,o=t._w,l=c+c,f=r+r,h=s+s,d=c*l,m=c*f,g=c*h,z=r*f,p=r*h,u=s*h,_=o*l,C=o*f,H=o*h,A=i.x,S=i.y,V=i.z;return n[0]=(1-(z+u))*A,n[1]=(m+H)*A,n[2]=(g-C)*A,n[3]=0,n[4]=(m-H)*S,n[5]=(1-(d+u))*S,n[6]=(p+_)*S,n[7]=0,n[8]=(g+C)*V,n[9]=(p-_)*V,n[10]=(1-(d+z))*V,n[11]=0,n[12]=e.x,n[13]=e.y,n[14]=e.z,n[15]=1,this}decompose(e,t,i){let n=this.elements,c=K4.set(n[0],n[1],n[2]).length(),r=K4.set(n[4],n[5],n[6]).length(),s=K4.set(n[8],n[9],n[10]).length();this.determinant()<0&&(c=-c),e.x=n[12],e.y=n[13],e.z=n[14],a3.copy(this);let l=1/c,f=1/r,h=1/s;return a3.elements[0]*=l,a3.elements[1]*=l,a3.elements[2]*=l,a3.elements[4]*=f,a3.elements[5]*=f,a3.elements[6]*=f,a3.elements[8]*=h,a3.elements[9]*=h,a3.elements[10]*=h,t.setFromRotationMatrix(a3),i.x=c,i.y=r,i.z=s,this}makePerspective(e,t,i,n,c,r,s=R3){let o=this.elements,l=2*c/(t-e),f=2*c/(i-n),h=(t+e)/(t-e),d=(i+n)/(i-n),m,g;if(s===R3)m=-(r+c)/(r-c),g=-2*r*c/(r-c);else if(s===s0)m=-r/(r-c),g=-r*c/(r-c);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+s);return o[0]=l,o[4]=0,o[8]=h,o[12]=0,o[1]=0,o[5]=f,o[9]=d,o[13]=0,o[2]=0,o[6]=0,o[10]=m,o[14]=g,o[3]=0,o[7]=0,o[11]=-1,o[15]=0,this}makeOrthographic(e,t,i,n,c,r,s=R3){let o=this.elements,l=1/(t-e),f=1/(i-n),h=1/(r-c),d=(t+e)*l,m=(i+n)*f,g,z;if(s===R3)g=(r+c)*h,z=-2*h;else if(s===s0)g=c*h,z=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+s);return o[0]=2*l,o[4]=0,o[8]=0,o[12]=-d,o[1]=0,o[5]=2*f,o[9]=0,o[13]=-m,o[2]=0,o[6]=0,o[10]=z,o[14]=-g,o[3]=0,o[7]=0,o[11]=0,o[15]=1,this}equals(e){let t=this.elements,i=e.elements;for(let n=0;n<16;n++)if(t[n]!==i[n])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}},K4=new k,a3=new x2,wc=new k(0,0,0),Ac=new k(1,1,1),Q3=new k,Fe=new k,W2=new k,k7=new x2,D7=new o4,z6=(()=>{class a{constructor(t=0,i=0,n=0,c=a.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=i,this._z=n,this._order=c}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,i,n,c=this._order){return this._x=t,this._y=i,this._z=n,this._order=c,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,i=this._order,n=!0){let c=t.elements,r=c[0],s=c[4],o=c[8],l=c[1],f=c[5],h=c[9],d=c[2],m=c[6],g=c[10];switch(i){case"XYZ":this._y=Math.asin(I2(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,g),this._z=Math.atan2(-s,r)):(this._x=Math.atan2(m,f),this._z=0);break;case"YXZ":this._x=Math.asin(-I2(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,g),this._z=Math.atan2(l,f)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(I2(m,-1,1)),Math.abs(m)<.9999999?(this._y=Math.atan2(-d,g),this._z=Math.atan2(-s,f)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-I2(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(m,g),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-s,f));break;case"YZX":this._z=Math.asin(I2(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,f),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(o,g));break;case"XZY":this._z=Math.asin(-I2(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(m,f),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,g),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,i,n){return k7.makeRotationFromQuaternion(t),this.setFromRotationMatrix(k7,i,n)}setFromVector3(t,i=this._order){return this.set(t.x,t.y,t.z,i)}reorder(t){return D7.setFromEuler(this),this.setFromQuaternion(D7,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}return a.DEFAULT_ORDER="XYZ",a})(),u0=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},Tc=0,I7=new k,Q4=new o4,L3=new x2,Oe=new k,G6=new k,Ec=new k,Nc=new o4,F7=new k(1,0,0),O7=new k(0,1,0),U7=new k(0,0,1),Pc={type:"added"},Rc={type:"removed"},Vt={type:"childadded",child:null},St={type:"childremoved",child:null},_6=(()=>{class a extends s4{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Tc++}),this.uuid=j6(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=a.DEFAULT_UP.clone();let t=new k,i=new z6,n=new o4,c=new k(1,1,1);function r(){n.setFromEuler(i,!1)}function s(){i.setFromQuaternion(n,void 0,!1)}i._onChange(r),n._onChange(s),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:c},modelViewMatrix:{value:new x2},normalMatrix:{value:new P1}}),this.matrix=new x2,this.matrixWorld=new x2,this.matrixAutoUpdate=a.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=a.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new u0,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,i){this.quaternion.setFromAxisAngle(t,i)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,i){return Q4.setFromAxisAngle(t,i),this.quaternion.multiply(Q4),this}rotateOnWorldAxis(t,i){return Q4.setFromAxisAngle(t,i),this.quaternion.premultiply(Q4),this}rotateX(t){return this.rotateOnAxis(F7,t)}rotateY(t){return this.rotateOnAxis(O7,t)}rotateZ(t){return this.rotateOnAxis(U7,t)}translateOnAxis(t,i){return I7.copy(t).applyQuaternion(this.quaternion),this.position.add(I7.multiplyScalar(i)),this}translateX(t){return this.translateOnAxis(F7,t)}translateY(t){return this.translateOnAxis(O7,t)}translateZ(t){return this.translateOnAxis(U7,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(L3.copy(this.matrixWorld).invert())}lookAt(t,i,n){t.isVector3?Oe.copy(t):Oe.set(t,i,n);let c=this.parent;this.updateWorldMatrix(!0,!1),G6.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?L3.lookAt(G6,Oe,this.up):L3.lookAt(Oe,G6,this.up),this.quaternion.setFromRotationMatrix(L3),c&&(L3.extractRotation(c.matrixWorld),Q4.setFromRotationMatrix(L3),this.quaternion.premultiply(Q4.invert()))}add(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.parent!==null&&t.parent.remove(t),t.parent=this,this.children.push(t),t.dispatchEvent(Pc),Vt.child=t,this.dispatchEvent(Vt),Vt.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let i=this.children.indexOf(t);return i!==-1&&(t.parent=null,this.children.splice(i,1),t.dispatchEvent(Rc),St.child=t,this.dispatchEvent(St),St.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),L3.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),L3.multiply(t.parent.matrixWorld)),t.applyMatrix4(L3),this.add(t),t.updateWorldMatrix(!1,!0),this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,i){if(this[t]===i)return this;for(let n=0,c=this.children.length;n<c;n++){let s=this.children[n].getObjectByProperty(t,i);if(s!==void 0)return s}}getObjectsByProperty(t,i,n=[]){this[t]===i&&n.push(this);let c=this.children;for(let r=0,s=c.length;r<s;r++)c[r].getObjectsByProperty(t,i,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(G6,t,Ec),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(G6,Nc,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let i=this.matrixWorld.elements;return t.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(t){t(this);let i=this.children;for(let n=0,c=i.length;n<c;n++)i[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let i=this.children;for(let n=0,c=i.length;n<c;n++)i[n].traverseVisible(t)}traverseAncestors(t){let i=this.parent;i!==null&&(t(i),i.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,t=!0);let i=this.children;for(let n=0,c=i.length;n<c;n++){let r=i[n];(r.matrixWorldAutoUpdate===!0||t===!0)&&r.updateMatrixWorld(t)}}updateWorldMatrix(t,i){let n=this.parent;if(t===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),i===!0){let c=this.children;for(let r=0,s=c.length;r<s;r++){let o=c[r];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(t){let i=t===void 0||typeof t=="string",n={};i&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let c={};c.uuid=this.uuid,c.type=this.type,this.name!==""&&(c.name=this.name),this.castShadow===!0&&(c.castShadow=!0),this.receiveShadow===!0&&(c.receiveShadow=!0),this.visible===!1&&(c.visible=!1),this.frustumCulled===!1&&(c.frustumCulled=!1),this.renderOrder!==0&&(c.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(c.userData=this.userData),c.layers=this.layers.mask,c.matrix=this.matrix.toArray(),c.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(c.matrixAutoUpdate=!1),this.isInstancedMesh&&(c.type="InstancedMesh",c.count=this.count,c.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(c.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(c.type="BatchedMesh",c.perObjectFrustumCulled=this.perObjectFrustumCulled,c.sortObjects=this.sortObjects,c.drawRanges=this._drawRanges,c.reservedRanges=this._reservedRanges,c.visibility=this._visibility,c.active=this._active,c.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),c.maxGeometryCount=this._maxGeometryCount,c.maxVertexCount=this._maxVertexCount,c.maxIndexCount=this._maxIndexCount,c.geometryInitialized=this._geometryInitialized,c.geometryCount=this._geometryCount,c.matricesTexture=this._matricesTexture.toJSON(t),this.boundingSphere!==null&&(c.boundingSphere={center:c.boundingSphere.center.toArray(),radius:c.boundingSphere.radius}),this.boundingBox!==null&&(c.boundingBox={min:c.boundingBox.min.toArray(),max:c.boundingBox.max.toArray()}));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?c.background=this.background.toJSON():this.background.isTexture&&(c.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(c.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){c.geometry=r(t.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let f=0,h=l.length;f<h;f++){let d=l[f];r(t.shapes,d)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(c.bindMode=this.bindMode,c.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),c.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,f=this.material.length;l<f;l++)o.push(r(t.materials,this.material[l]));c.material=o}else c.material=r(t.materials,this.material);if(this.children.length>0){c.children=[];for(let o=0;o<this.children.length;o++)c.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){c.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];c.animations.push(r(t.animations,l))}}if(i){let o=s(t.geometries),l=s(t.materials),f=s(t.textures),h=s(t.images),d=s(t.shapes),m=s(t.skeletons),g=s(t.animations),z=s(t.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),f.length>0&&(n.textures=f),h.length>0&&(n.images=h),d.length>0&&(n.shapes=d),m.length>0&&(n.skeletons=m),g.length>0&&(n.animations=g),z.length>0&&(n.nodes=z)}return n.object=c,n;function s(o){let l=[];for(let f in o){let h=o[f];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,i=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),i===!0)for(let n=0;n<t.children.length;n++){let c=t.children[n];this.add(c.clone())}return this}}return a.DEFAULT_UP=new k(0,1,0),a.DEFAULT_MATRIX_AUTO_UPDATE=!0,a.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0,a})(),n3=new k,w3=new k,Lt=new k,A3=new k,e6=new k,t6=new k,B7=new k,wt=new k,At=new k,Tt=new k,l6=class a{constructor(e=new k,t=new k,i=new k){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,n){n.subVectors(i,t),n3.subVectors(e,t),n.cross(n3);let c=n.lengthSq();return c>0?n.multiplyScalar(1/Math.sqrt(c)):n.set(0,0,0)}static getBarycoord(e,t,i,n,c){n3.subVectors(n,t),w3.subVectors(i,t),Lt.subVectors(e,t);let r=n3.dot(n3),s=n3.dot(w3),o=n3.dot(Lt),l=w3.dot(w3),f=w3.dot(Lt),h=r*l-s*s;if(h===0)return c.set(0,0,0),null;let d=1/h,m=(l*o-s*f)*d,g=(r*f-s*o)*d;return c.set(1-m-g,g,m)}static containsPoint(e,t,i,n){return this.getBarycoord(e,t,i,n,A3)===null?!1:A3.x>=0&&A3.y>=0&&A3.x+A3.y<=1}static getInterpolation(e,t,i,n,c,r,s,o){return this.getBarycoord(e,t,i,n,A3)===null?(o.x=0,o.y=0,"z"in o&&(o.z=0),"w"in o&&(o.w=0),null):(o.setScalar(0),o.addScaledVector(c,A3.x),o.addScaledVector(r,A3.y),o.addScaledVector(s,A3.z),o)}static isFrontFacing(e,t,i,n){return n3.subVectors(i,t),w3.subVectors(e,t),n3.cross(w3).dot(n)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,n){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[n]),this}setFromAttributeAndIndices(e,t,i,n){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,n),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return n3.subVectors(this.c,this.b),w3.subVectors(this.a,this.b),n3.cross(w3).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return a.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return a.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,n,c){return a.getInterpolation(e,this.a,this.b,this.c,t,i,n,c)}containsPoint(e){return a.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return a.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let i=this.a,n=this.b,c=this.c,r,s;e6.subVectors(n,i),t6.subVectors(c,i),wt.subVectors(e,i);let o=e6.dot(wt),l=t6.dot(wt);if(o<=0&&l<=0)return t.copy(i);At.subVectors(e,n);let f=e6.dot(At),h=t6.dot(At);if(f>=0&&h<=f)return t.copy(n);let d=o*h-f*l;if(d<=0&&o>=0&&f<=0)return r=o/(o-f),t.copy(i).addScaledVector(e6,r);Tt.subVectors(e,c);let m=e6.dot(Tt),g=t6.dot(Tt);if(g>=0&&m<=g)return t.copy(c);let z=m*l-o*g;if(z<=0&&l>=0&&g<=0)return s=l/(l-g),t.copy(i).addScaledVector(t6,s);let p=f*g-m*h;if(p<=0&&h-f>=0&&m-g>=0)return B7.subVectors(c,n),s=(h-f)/(h-f+(m-g)),t.copy(n).addScaledVector(B7,s);let u=1/(p+z+d);return r=z*u,s=d*u,t.copy(i).addScaledVector(e6,r).addScaledVector(t6,s)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},wi={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},e4={h:0,s:0,l:0},Ue={h:0,s:0,l:0};function Et(a,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?a+(e-a)*6*t:t<1/2?e:t<2/3?a+(e-a)*6*(2/3-t):a}var q1=class{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){let n=e;n&&n.isColor?this.copy(n):typeof n=="number"?this.setHex(n):typeof n=="string"&&this.setStyle(n)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=d3){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,j1.toWorkingColorSpace(this,t),this}setRGB(e,t,i,n=j1.workingColorSpace){return this.r=e,this.g=t,this.b=i,j1.toWorkingColorSpace(this,n),this}setHSL(e,t,i,n=j1.workingColorSpace){if(e=bc(e,1),t=I2(t,0,1),i=I2(i,0,1),t===0)this.r=this.g=this.b=i;else{let c=i<=.5?i*(1+t):i+t-i*t,r=2*i-c;this.r=Et(r,c,e+1/3),this.g=Et(r,c,e),this.b=Et(r,c,e-1/3)}return j1.toWorkingColorSpace(this,n),this}setStyle(e,t=d3){function i(c){c!==void 0&&parseFloat(c)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let n;if(n=/^(\w+)\(([^\)]*)\)/.exec(e)){let c,r=n[1],s=n[2];switch(r){case"rgb":case"rgba":if(c=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(s))return i(c[4]),this.setRGB(Math.min(255,parseInt(c[1],10))/255,Math.min(255,parseInt(c[2],10))/255,Math.min(255,parseInt(c[3],10))/255,t);if(c=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(s))return i(c[4]),this.setRGB(Math.min(100,parseInt(c[1],10))/100,Math.min(100,parseInt(c[2],10))/100,Math.min(100,parseInt(c[3],10))/100,t);break;case"hsl":case"hsla":if(c=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(s))return i(c[4]),this.setHSL(parseFloat(c[1])/360,parseFloat(c[2])/100,parseFloat(c[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(n=/^\#([A-Fa-f\d]+)$/.exec(e)){let c=n[1],r=c.length;if(r===3)return this.setRGB(parseInt(c.charAt(0),16)/15,parseInt(c.charAt(1),16)/15,parseInt(c.charAt(2),16)/15,t);if(r===6)return this.setHex(parseInt(c,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=d3){let i=wi[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=p6(e.r),this.g=p6(e.g),this.b=p6(e.b),this}copyLinearToSRGB(e){return this.r=Mt(e.r),this.g=Mt(e.g),this.b=Mt(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=d3){return j1.fromWorkingColorSpace(w2.copy(this),e),Math.round(I2(w2.r*255,0,255))*65536+Math.round(I2(w2.g*255,0,255))*256+Math.round(I2(w2.b*255,0,255))}getHexString(e=d3){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=j1.workingColorSpace){j1.fromWorkingColorSpace(w2.copy(this),t);let i=w2.r,n=w2.g,c=w2.b,r=Math.max(i,n,c),s=Math.min(i,n,c),o,l,f=(s+r)/2;if(s===r)o=0,l=0;else{let h=r-s;switch(l=f<=.5?h/(r+s):h/(2-r-s),r){case i:o=(n-c)/h+(n<c?6:0);break;case n:o=(c-i)/h+2;break;case c:o=(i-n)/h+4;break}o/=6}return e.h=o,e.s=l,e.l=f,e}getRGB(e,t=j1.workingColorSpace){return j1.fromWorkingColorSpace(w2.copy(this),t),e.r=w2.r,e.g=w2.g,e.b=w2.b,e}getStyle(e=d3){j1.fromWorkingColorSpace(w2.copy(this),e);let t=w2.r,i=w2.g,n=w2.b;return e!==d3?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${n.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(n*255)})`}offsetHSL(e,t,i){return this.getHSL(e4),this.setHSL(e4.h+e,e4.s+t,e4.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(e4),e.getHSL(Ue);let i=vt(e4.h,Ue.h,t),n=vt(e4.s,Ue.s,t),c=vt(e4.l,Ue.l,t);return this.setHSL(i,n,c),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,i=this.g,n=this.b,c=e.elements;return this.r=c[0]*t+c[3]*i+c[6]*n,this.g=c[1]*t+c[4]*i+c[7]*n,this.b=c[2]*t+c[5]*i+c[8]*n,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},w2=new q1;q1.NAMES=wi;var kc=0,x6=class extends s4{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:kc++}),this.uuid=j6(),this.name="",this.type="Material",this.blending=d6,this.side=r4,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ut,this.blendDst=Bt,this.blendEquation=S4,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new q1(0,0,0),this.blendAlpha=0,this.depthFunc=t0,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=L7,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Y4,this.stencilZFail=Y4,this.stencilZPass=Y4,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let n=this[t];if(n===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}n&&n.isColor?n.set(i):n&&n.isVector3&&i&&i.isVector3?n.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==d6&&(i.blending=this.blending),this.side!==r4&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Ut&&(i.blendSrc=this.blendSrc),this.blendDst!==Bt&&(i.blendDst=this.blendDst),this.blendEquation!==S4&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==t0&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==L7&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Y4&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Y4&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Y4&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function n(c){let r=[];for(let s in c){let o=c[s];delete o.metadata,r.push(o)}return r}if(t){let c=n(e.textures),r=n(e.images);c.length>0&&(i.textures=c),r.length>0&&(i.images=r)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,i=null;if(t!==null){let n=t.length;i=new Array(n);for(let c=0;c!==n;++c)i[c]=t[c].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},d0=class extends x6{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new q1(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new z6,this.combine=zi,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};var p2=new k,Be=new W1,J2=class{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=w7,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=P3,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return _c("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let n=0,c=this.itemSize;n<c;n++)this.array[e+n]=t.array[i+n];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Be.fromBufferAttribute(this,t),Be.applyMatrix3(e),this.setXY(t,Be.x,Be.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)p2.fromBufferAttribute(this,t),p2.applyMatrix3(e),this.setXYZ(t,p2.x,p2.y,p2.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)p2.fromBufferAttribute(this,t),p2.applyMatrix4(e),this.setXYZ(t,p2.x,p2.y,p2.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)p2.fromBufferAttribute(this,t),p2.applyNormalMatrix(e),this.setXYZ(t,p2.x,p2.y,p2.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)p2.fromBufferAttribute(this,t),p2.transformDirection(e),this.setXYZ(t,p2.x,p2.y,p2.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=O6(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=k2(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=O6(t,this.array)),t}setX(e,t){return this.normalized&&(t=k2(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=O6(t,this.array)),t}setY(e,t){return this.normalized&&(t=k2(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=O6(t,this.array)),t}setZ(e,t){return this.normalized&&(t=k2(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=O6(t,this.array)),t}setW(e,t){return this.normalized&&(t=k2(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=k2(t,this.array),i=k2(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,n){return e*=this.itemSize,this.normalized&&(t=k2(t,this.array),i=k2(i,this.array),n=k2(n,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=n,this}setXYZW(e,t,i,n,c){return e*=this.itemSize,this.normalized&&(t=k2(t,this.array),i=k2(i,this.array),n=k2(n,this.array),c=k2(c,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=n,this.array[e+3]=c,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==w7&&(e.usage=this.usage),e}};var p0=class extends J2{constructor(e,t,i){super(new Uint16Array(e),t,i)}};var m0=class extends J2{constructor(e,t,i){super(new Uint32Array(e),t,i)}};var K2=class extends J2{constructor(e,t,i){super(new Float32Array(e),t,i)}},Dc=0,j2=new x2,Nt=new _6,i6=new k,q2=new N4,W6=new N4,z2=new k,k3=class a extends s4{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Dc++}),this.uuid=j6(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Li(e)?m0:p0)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let c=new P1().getNormalMatrix(e);i.applyNormalMatrix(c),i.needsUpdate=!0}let n=this.attributes.tangent;return n!==void 0&&(n.transformDirection(e),n.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return j2.makeRotationFromQuaternion(e),this.applyMatrix4(j2),this}rotateX(e){return j2.makeRotationX(e),this.applyMatrix4(j2),this}rotateY(e){return j2.makeRotationY(e),this.applyMatrix4(j2),this}rotateZ(e){return j2.makeRotationZ(e),this.applyMatrix4(j2),this}translate(e,t,i){return j2.makeTranslation(e,t,i),this.applyMatrix4(j2),this}scale(e,t,i){return j2.makeScale(e,t,i),this.applyMatrix4(j2),this}lookAt(e){return Nt.lookAt(e),Nt.updateMatrix(),this.applyMatrix4(Nt.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(i6).negate(),this.translate(i6.x,i6.y,i6.z),this}setFromPoints(e){let t=[];for(let i=0,n=e.length;i<n;i++){let c=e[i];t.push(c.x,c.y,c.z||0)}return this.setAttribute("position",new K2(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new N4);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new k(-1/0,-1/0,-1/0),new k(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,n=t.length;i<n;i++){let c=t[i];q2.setFromBufferAttribute(c),this.morphTargetsRelative?(z2.addVectors(this.boundingBox.min,q2.min),this.boundingBox.expandByPoint(z2),z2.addVectors(this.boundingBox.max,q2.max),this.boundingBox.expandByPoint(z2)):(this.boundingBox.expandByPoint(q2.min),this.boundingBox.expandByPoint(q2.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new X6);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new k,1/0);return}if(e){let i=this.boundingSphere.center;if(q2.setFromBufferAttribute(e),t)for(let c=0,r=t.length;c<r;c++){let s=t[c];W6.setFromBufferAttribute(s),this.morphTargetsRelative?(z2.addVectors(q2.min,W6.min),q2.expandByPoint(z2),z2.addVectors(q2.max,W6.max),q2.expandByPoint(z2)):(q2.expandByPoint(W6.min),q2.expandByPoint(W6.max))}q2.getCenter(i);let n=0;for(let c=0,r=e.count;c<r;c++)z2.fromBufferAttribute(e,c),n=Math.max(n,i.distanceToSquared(z2));if(t)for(let c=0,r=t.length;c<r;c++){let s=t[c],o=this.morphTargetsRelative;for(let l=0,f=s.count;l<f;l++)z2.fromBufferAttribute(s,l),o&&(i6.fromBufferAttribute(e,l),z2.add(i6)),n=Math.max(n,i.distanceToSquared(z2))}this.boundingSphere.radius=Math.sqrt(n),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=t.position,n=t.normal,c=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new J2(new Float32Array(4*i.count),4));let r=this.getAttribute("tangent"),s=[],o=[];for(let F=0;F<i.count;F++)s[F]=new k,o[F]=new k;let l=new k,f=new k,h=new k,d=new W1,m=new W1,g=new W1,z=new k,p=new k;function u(F,$,M){l.fromBufferAttribute(i,F),f.fromBufferAttribute(i,$),h.fromBufferAttribute(i,M),d.fromBufferAttribute(c,F),m.fromBufferAttribute(c,$),g.fromBufferAttribute(c,M),f.sub(l),h.sub(l),m.sub(d),g.sub(d);let y=1/(m.x*g.y-g.x*m.y);isFinite(y)&&(z.copy(f).multiplyScalar(g.y).addScaledVector(h,-m.y).multiplyScalar(y),p.copy(h).multiplyScalar(m.x).addScaledVector(f,-g.x).multiplyScalar(y),s[F].add(z),s[$].add(z),s[M].add(z),o[F].add(p),o[$].add(p),o[M].add(p))}let _=this.groups;_.length===0&&(_=[{start:0,count:e.count}]);for(let F=0,$=_.length;F<$;++F){let M=_[F],y=M.start,e1=M.count;for(let K=y,w=y+e1;K<w;K+=3)u(e.getX(K+0),e.getX(K+1),e.getX(K+2))}let C=new k,H=new k,A=new k,S=new k;function V(F){A.fromBufferAttribute(n,F),S.copy(A);let $=s[F];C.copy($),C.sub(A.multiplyScalar(A.dot($))).normalize(),H.crossVectors(S,$);let y=H.dot(o[F])<0?-1:1;r.setXYZW(F,C.x,C.y,C.z,y)}for(let F=0,$=_.length;F<$;++F){let M=_[F],y=M.start,e1=M.count;for(let K=y,w=y+e1;K<w;K+=3)V(e.getX(K+0)),V(e.getX(K+1)),V(e.getX(K+2))}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new J2(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let d=0,m=i.count;d<m;d++)i.setXYZ(d,0,0,0);let n=new k,c=new k,r=new k,s=new k,o=new k,l=new k,f=new k,h=new k;if(e)for(let d=0,m=e.count;d<m;d+=3){let g=e.getX(d+0),z=e.getX(d+1),p=e.getX(d+2);n.fromBufferAttribute(t,g),c.fromBufferAttribute(t,z),r.fromBufferAttribute(t,p),f.subVectors(r,c),h.subVectors(n,c),f.cross(h),s.fromBufferAttribute(i,g),o.fromBufferAttribute(i,z),l.fromBufferAttribute(i,p),s.add(f),o.add(f),l.add(f),i.setXYZ(g,s.x,s.y,s.z),i.setXYZ(z,o.x,o.y,o.z),i.setXYZ(p,l.x,l.y,l.z)}else for(let d=0,m=t.count;d<m;d+=3)n.fromBufferAttribute(t,d+0),c.fromBufferAttribute(t,d+1),r.fromBufferAttribute(t,d+2),f.subVectors(r,c),h.subVectors(n,c),f.cross(h),i.setXYZ(d+0,f.x,f.y,f.z),i.setXYZ(d+1,f.x,f.y,f.z),i.setXYZ(d+2,f.x,f.y,f.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)z2.fromBufferAttribute(e,t),z2.normalize(),e.setXYZ(t,z2.x,z2.y,z2.z)}toNonIndexed(){function e(s,o){let l=s.array,f=s.itemSize,h=s.normalized,d=new l.constructor(o.length*f),m=0,g=0;for(let z=0,p=o.length;z<p;z++){s.isInterleavedBufferAttribute?m=o[z]*s.data.stride+s.offset:m=o[z]*f;for(let u=0;u<f;u++)d[g++]=l[m++]}return new J2(d,f,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new a,i=this.index.array,n=this.attributes;for(let s in n){let o=n[s],l=e(o,i);t.setAttribute(s,l)}let c=this.morphAttributes;for(let s in c){let o=[],l=c[s];for(let f=0,h=l.length;f<h;f++){let d=l[f],m=e(d,i);o.push(m)}t.morphAttributes[s]=o}t.morphTargetsRelative=this.morphTargetsRelative;let r=this.groups;for(let s=0,o=r.length;s<o;s++){let l=r[s];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){let e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let o=this.parameters;for(let l in o)o[l]!==void 0&&(e[l]=o[l]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let i=this.attributes;for(let o in i){let l=i[o];e.data.attributes[o]=l.toJSON(e.data)}let n={},c=!1;for(let o in this.morphAttributes){let l=this.morphAttributes[o],f=[];for(let h=0,d=l.length;h<d;h++){let m=l[h];f.push(m.toJSON(e.data))}f.length>0&&(n[o]=f,c=!0)}c&&(e.data.morphAttributes=n,e.data.morphTargetsRelative=this.morphTargetsRelative);let r=this.groups;r.length>0&&(e.data.groups=JSON.parse(JSON.stringify(r)));let s=this.boundingSphere;return s!==null&&(e.data.boundingSphere={center:s.center.toArray(),radius:s.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let i=e.index;i!==null&&this.setIndex(i.clone(t));let n=e.attributes;for(let l in n){let f=n[l];this.setAttribute(l,f.clone(t))}let c=e.morphAttributes;for(let l in c){let f=[],h=c[l];for(let d=0,m=h.length;d<m;d++)f.push(h[d].clone(t));this.morphAttributes[l]=f}this.morphTargetsRelative=e.morphTargetsRelative;let r=e.groups;for(let l=0,f=r.length;l<f;l++){let h=r[l];this.addGroup(h.start,h.count,h.materialIndex)}let s=e.boundingBox;s!==null&&(this.boundingBox=s.clone());let o=e.boundingSphere;return o!==null&&(this.boundingSphere=o.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},G7=new x2,b4=new Kt,Ge=new X6,W7=new k,a6=new k,n6=new k,c6=new k,Pt=new k,We=new k,qe=new W1,Xe=new W1,Ye=new W1,q7=new k,X7=new k,Y7=new k,Ze=new k,$e=new k,y2=class extends _6{constructor(e=new k3,t=new d0){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let n=t[i[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,r=n.length;c<r;c++){let s=n[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[s]=c}}}}getVertexPosition(e,t){let i=this.geometry,n=i.attributes.position,c=i.morphAttributes.position,r=i.morphTargetsRelative;t.fromBufferAttribute(n,e);let s=this.morphTargetInfluences;if(c&&s){We.set(0,0,0);for(let o=0,l=c.length;o<l;o++){let f=s[o],h=c[o];f!==0&&(Pt.fromBufferAttribute(h,e),r?We.addScaledVector(Pt,f):We.addScaledVector(Pt.sub(t),f))}t.add(We)}return t}raycast(e,t){let i=this.geometry,n=this.material,c=this.matrixWorld;n!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Ge.copy(i.boundingSphere),Ge.applyMatrix4(c),b4.copy(e.ray).recast(e.near),!(Ge.containsPoint(b4.origin)===!1&&(b4.intersectSphere(Ge,W7)===null||b4.origin.distanceToSquared(W7)>(e.far-e.near)**2))&&(G7.copy(c).invert(),b4.copy(e.ray).applyMatrix4(G7),!(i.boundingBox!==null&&b4.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,b4)))}_computeIntersections(e,t,i){let n,c=this.geometry,r=this.material,s=c.index,o=c.attributes.position,l=c.attributes.uv,f=c.attributes.uv1,h=c.attributes.normal,d=c.groups,m=c.drawRange;if(s!==null)if(Array.isArray(r))for(let g=0,z=d.length;g<z;g++){let p=d[g],u=r[p.materialIndex],_=Math.max(p.start,m.start),C=Math.min(s.count,Math.min(p.start+p.count,m.start+m.count));for(let H=_,A=C;H<A;H+=3){let S=s.getX(H),V=s.getX(H+1),F=s.getX(H+2);n=je(this,u,e,i,l,f,h,S,V,F),n&&(n.faceIndex=Math.floor(H/3),n.face.materialIndex=p.materialIndex,t.push(n))}}else{let g=Math.max(0,m.start),z=Math.min(s.count,m.start+m.count);for(let p=g,u=z;p<u;p+=3){let _=s.getX(p),C=s.getX(p+1),H=s.getX(p+2);n=je(this,r,e,i,l,f,h,_,C,H),n&&(n.faceIndex=Math.floor(p/3),t.push(n))}}else if(o!==void 0)if(Array.isArray(r))for(let g=0,z=d.length;g<z;g++){let p=d[g],u=r[p.materialIndex],_=Math.max(p.start,m.start),C=Math.min(o.count,Math.min(p.start+p.count,m.start+m.count));for(let H=_,A=C;H<A;H+=3){let S=H,V=H+1,F=H+2;n=je(this,u,e,i,l,f,h,S,V,F),n&&(n.faceIndex=Math.floor(H/3),n.face.materialIndex=p.materialIndex,t.push(n))}}else{let g=Math.max(0,m.start),z=Math.min(o.count,m.start+m.count);for(let p=g,u=z;p<u;p+=3){let _=p,C=p+1,H=p+2;n=je(this,r,e,i,l,f,h,_,C,H),n&&(n.faceIndex=Math.floor(p/3),t.push(n))}}}};function Ic(a,e,t,i,n,c,r,s){let o;if(e.side===F2?o=i.intersectTriangle(r,c,n,!0,s):o=i.intersectTriangle(n,c,r,e.side===r4,s),o===null)return null;$e.copy(s),$e.applyMatrix4(a.matrixWorld);let l=t.ray.origin.distanceTo($e);return l<t.near||l>t.far?null:{distance:l,point:$e.clone(),object:a}}function je(a,e,t,i,n,c,r,s,o,l){a.getVertexPosition(s,a6),a.getVertexPosition(o,n6),a.getVertexPosition(l,c6);let f=Ic(a,e,t,i,a6,n6,c6,Ze);if(f){n&&(qe.fromBufferAttribute(n,s),Xe.fromBufferAttribute(n,o),Ye.fromBufferAttribute(n,l),f.uv=l6.getInterpolation(Ze,a6,n6,c6,qe,Xe,Ye,new W1)),c&&(qe.fromBufferAttribute(c,s),Xe.fromBufferAttribute(c,o),Ye.fromBufferAttribute(c,l),f.uv1=l6.getInterpolation(Ze,a6,n6,c6,qe,Xe,Ye,new W1)),r&&(q7.fromBufferAttribute(r,s),X7.fromBufferAttribute(r,o),Y7.fromBufferAttribute(r,l),f.normal=l6.getInterpolation(Ze,a6,n6,c6,q7,X7,Y7,new k),f.normal.dot(i.direction)>0&&f.normal.multiplyScalar(-1));let h={a:s,b:o,c:l,normal:new k,materialIndex:0};l6.getNormal(a6,n6,c6,h.normal),f.face=h}return f}var Y6=class a extends k3{constructor(e=1,t=1,i=1,n=1,c=1,r=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:n,heightSegments:c,depthSegments:r};let s=this;n=Math.floor(n),c=Math.floor(c),r=Math.floor(r);let o=[],l=[],f=[],h=[],d=0,m=0;g("z","y","x",-1,-1,i,t,e,r,c,0),g("z","y","x",1,-1,i,t,-e,r,c,1),g("x","z","y",1,1,e,i,t,n,r,2),g("x","z","y",1,-1,e,i,-t,n,r,3),g("x","y","z",1,-1,e,t,i,n,c,4),g("x","y","z",-1,-1,e,t,-i,n,c,5),this.setIndex(o),this.setAttribute("position",new K2(l,3)),this.setAttribute("normal",new K2(f,3)),this.setAttribute("uv",new K2(h,2));function g(z,p,u,_,C,H,A,S,V,F,$){let M=H/V,y=A/F,e1=H/2,K=A/2,w=S/2,G=V+1,U=F+1,X=0,B=0,q=new k;for(let Y=0;Y<U;Y++){let a1=Y*y-K;for(let h1=0;h1<G;h1++){let w1=h1*M-e1;q[z]=w1*_,q[p]=a1*C,q[u]=w,l.push(q.x,q.y,q.z),q[z]=0,q[p]=0,q[u]=S>0?1:-1,f.push(q.x,q.y,q.z),h.push(h1/V),h.push(1-Y/F),X+=1}}for(let Y=0;Y<F;Y++)for(let a1=0;a1<V;a1++){let h1=d+a1+G*Y,w1=d+a1+G*(Y+1),I=d+(a1+1)+G*(Y+1),j=d+(a1+1)+G*Y;o.push(h1,w1,j),o.push(w1,I,j),B+=6}s.addGroup(m,B,$),m+=B,d+=X}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new a(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function C6(a){let e={};for(let t in a){e[t]={};for(let i in a[t]){let n=a[t][i];n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)?n.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=n.clone():Array.isArray(n)?e[t][i]=n.slice():e[t][i]=n}}return e}function N2(a){let e={};for(let t=0;t<a.length;t++){let i=C6(a[t]);for(let n in i)e[n]=i[n]}return e}function Fc(a){let e=[];for(let t=0;t<a.length;t++)e.push(a[t].clone());return e}function Ai(a){return a.getRenderTarget()===null?a.outputColorSpace:j1.workingColorSpace}var _8={clone:C6,merge:N2},Oc=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Uc=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,V2=class extends x6{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Oc,this.fragmentShader=Uc,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=C6(e.uniforms),this.uniformsGroups=Fc(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let n in this.uniforms){let r=this.uniforms[n].value;r&&r.isTexture?t.uniforms[n]={type:"t",value:r.toJSON(e).uuid}:r&&r.isColor?t.uniforms[n]={type:"c",value:r.getHex()}:r&&r.isVector2?t.uniforms[n]={type:"v2",value:r.toArray()}:r&&r.isVector3?t.uniforms[n]={type:"v3",value:r.toArray()}:r&&r.isVector4?t.uniforms[n]={type:"v4",value:r.toArray()}:r&&r.isMatrix3?t.uniforms[n]={type:"m3",value:r.toArray()}:r&&r.isMatrix4?t.uniforms[n]={type:"m4",value:r.toArray()}:t.uniforms[n]={value:r}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let i={};for(let n in this.extensions)this.extensions[n]===!0&&(i[n]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}},v0=class extends _6{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new x2,this.projectionMatrix=new x2,this.projectionMatrixInverse=new x2,this.coordinateSystem=R3}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},t4=new k,Z7=new W1,$7=new W1,H2=class extends v0{constructor(e=50,t=1,i=.1,n=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=n,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Zt*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(mt*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Zt*2*Math.atan(Math.tan(mt*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){t4.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(t4.x,t4.y).multiplyScalar(-e/t4.z),t4.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(t4.x,t4.y).multiplyScalar(-e/t4.z)}getViewSize(e,t){return this.getViewBounds(e,Z7,$7),t.subVectors($7,Z7)}setViewOffset(e,t,i,n,c,r){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=n,this.view.width=c,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(mt*.5*this.fov)/this.zoom,i=2*t,n=this.aspect*i,c=-.5*n,r=this.view;if(this.view!==null&&this.view.enabled){let o=r.fullWidth,l=r.fullHeight;c+=r.offsetX*n/o,t-=r.offsetY*i/l,n*=r.width/o,i*=r.height/l}let s=this.filmOffset;s!==0&&(c+=e*s/this.getFilmWidth()),this.projectionMatrix.makePerspective(c,c+n,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},r6=-90,s6=1,Qt=class extends _6{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let n=new H2(r6,s6,e,t);n.layers=this.layers,this.add(n);let c=new H2(r6,s6,e,t);c.layers=this.layers,this.add(c);let r=new H2(r6,s6,e,t);r.layers=this.layers,this.add(r);let s=new H2(r6,s6,e,t);s.layers=this.layers,this.add(s);let o=new H2(r6,s6,e,t);o.layers=this.layers,this.add(o);let l=new H2(r6,s6,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[i,n,c,r,s,o]=t;for(let l of t)this.remove(l);if(e===R3)i.up.set(0,1,0),i.lookAt(1,0,0),n.up.set(0,1,0),n.lookAt(-1,0,0),c.up.set(0,0,-1),c.lookAt(0,1,0),r.up.set(0,0,1),r.lookAt(0,-1,0),s.up.set(0,1,0),s.lookAt(0,0,1),o.up.set(0,1,0),o.lookAt(0,0,-1);else if(e===s0)i.up.set(0,-1,0),i.lookAt(-1,0,0),n.up.set(0,-1,0),n.lookAt(1,0,0),c.up.set(0,0,1),c.lookAt(0,1,0),r.up.set(0,0,-1),r.lookAt(0,-1,0),s.up.set(0,-1,0),s.lookAt(0,0,1),o.up.set(0,-1,0),o.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:n}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[c,r,s,o,l,f]=this.children,h=e.getRenderTarget(),d=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;let z=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,n),e.render(t,c),e.setRenderTarget(i,1,n),e.render(t,r),e.setRenderTarget(i,2,n),e.render(t,s),e.setRenderTarget(i,3,n),e.render(t,o),e.setRenderTarget(i,4,n),e.render(t,l),i.texture.generateMipmaps=z,e.setRenderTarget(i,5,n),e.render(t,f),e.setRenderTarget(h,d,m),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}},g0=class extends D4{constructor(e,t,i,n,c,r,s,o,l,f){e=e!==void 0?e:[],t=t!==void 0?t:v6,super(e,t,i,n,c,r,s,o,l,f),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},e8=class extends s3{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let i={width:e,height:e,depth:1},n=[i,i,i,i,i,i];this.texture=new g0(n,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:D2}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},n=new Y6(5,5,5),c=new V2({name:"CubemapFromEquirect",uniforms:C6(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:F2,blending:m3});c.uniforms.tEquirect.value=t;let r=new y2(n,c),s=t.minFilter;return t.minFilter===w4&&(t.minFilter=D2),new Qt(1,10,this).update(e,r),t.minFilter=s,r.geometry.dispose(),r.material.dispose(),this}clear(e,t,i,n){let c=e.getRenderTarget();for(let r=0;r<6;r++)e.setRenderTarget(this,r),e.clear(t,i,n);e.setRenderTarget(c)}},Rt=new k,Bc=new k,Gc=new P1,E3=class{constructor(e=new k(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,n){return this.normal.set(e,t,i),this.constant=n,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){let n=Rt.subVectors(i,t).cross(Bc.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(n,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let i=e.delta(Rt),n=this.normal.dot(i);if(n===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let c=-(e.start.dot(this.normal)+this.constant)/n;return c<0||c>1?null:t.copy(e.start).addScaledVector(i,c)}intersectsLine(e){let t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let i=t||Gc.getNormalMatrix(e),n=this.coplanarPoint(Rt).applyMatrix4(e),c=this.normal.applyMatrix3(i).normalize();return this.constant=-n.dot(c),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},H4=new X6,Je=new k,M0=class{constructor(e=new E3,t=new E3,i=new E3,n=new E3,c=new E3,r=new E3){this.planes=[e,t,i,n,c,r]}set(e,t,i,n,c,r){let s=this.planes;return s[0].copy(e),s[1].copy(t),s[2].copy(i),s[3].copy(n),s[4].copy(c),s[5].copy(r),this}copy(e){let t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=R3){let i=this.planes,n=e.elements,c=n[0],r=n[1],s=n[2],o=n[3],l=n[4],f=n[5],h=n[6],d=n[7],m=n[8],g=n[9],z=n[10],p=n[11],u=n[12],_=n[13],C=n[14],H=n[15];if(i[0].setComponents(o-c,d-l,p-m,H-u).normalize(),i[1].setComponents(o+c,d+l,p+m,H+u).normalize(),i[2].setComponents(o+r,d+f,p+g,H+_).normalize(),i[3].setComponents(o-r,d-f,p-g,H-_).normalize(),i[4].setComponents(o-s,d-h,p-z,H-C).normalize(),t===R3)i[5].setComponents(o+s,d+h,p+z,H+C).normalize();else if(t===s0)i[5].setComponents(s,h,z,C).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),H4.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),H4.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(H4)}intersectsSprite(e){return H4.center.set(0,0,0),H4.radius=.7071067811865476,H4.applyMatrix4(e.matrixWorld),this.intersectsSphere(H4)}intersectsSphere(e){let t=this.planes,i=e.center,n=-e.radius;for(let c=0;c<6;c++)if(t[c].distanceToPoint(i)<n)return!1;return!0}intersectsBox(e){let t=this.planes;for(let i=0;i<6;i++){let n=t[i];if(Je.x=n.normal.x>0?e.max.x:e.min.x,Je.y=n.normal.y>0?e.max.y:e.min.y,Je.z=n.normal.z>0?e.max.z:e.min.z,n.distanceToPoint(Je)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function Ti(){let a=null,e=!1,t=null,i=null;function n(c,r){t(c,r),i=a.requestAnimationFrame(n)}return{start:function(){e!==!0&&t!==null&&(i=a.requestAnimationFrame(n),e=!0)},stop:function(){a.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(c){t=c},setContext:function(c){a=c}}}function Wc(a,e){let t=e.isWebGL2,i=new WeakMap;function n(l,f){let h=l.array,d=l.usage,m=h.byteLength,g=a.createBuffer();a.bindBuffer(f,g),a.bufferData(f,h,d),l.onUploadCallback();let z;if(h instanceof Float32Array)z=a.FLOAT;else if(h instanceof Uint16Array)if(l.isFloat16BufferAttribute)if(t)z=a.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else z=a.UNSIGNED_SHORT;else if(h instanceof Int16Array)z=a.SHORT;else if(h instanceof Uint32Array)z=a.UNSIGNED_INT;else if(h instanceof Int32Array)z=a.INT;else if(h instanceof Int8Array)z=a.BYTE;else if(h instanceof Uint8Array)z=a.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)z=a.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:g,type:z,bytesPerElement:h.BYTES_PER_ELEMENT,version:l.version,size:m}}function c(l,f,h){let d=f.array,m=f._updateRange,g=f.updateRanges;if(a.bindBuffer(h,l),m.count===-1&&g.length===0&&a.bufferSubData(h,0,d),g.length!==0){for(let z=0,p=g.length;z<p;z++){let u=g[z];t?a.bufferSubData(h,u.start*d.BYTES_PER_ELEMENT,d,u.start,u.count):a.bufferSubData(h,u.start*d.BYTES_PER_ELEMENT,d.subarray(u.start,u.start+u.count))}f.clearUpdateRanges()}m.count!==-1&&(t?a.bufferSubData(h,m.offset*d.BYTES_PER_ELEMENT,d,m.offset,m.count):a.bufferSubData(h,m.offset*d.BYTES_PER_ELEMENT,d.subarray(m.offset,m.offset+m.count)),m.count=-1),f.onUploadCallback()}function r(l){return l.isInterleavedBufferAttribute&&(l=l.data),i.get(l)}function s(l){l.isInterleavedBufferAttribute&&(l=l.data);let f=i.get(l);f&&(a.deleteBuffer(f.buffer),i.delete(l))}function o(l,f){if(l.isGLBufferAttribute){let d=i.get(l);(!d||d.version<l.version)&&i.set(l,{buffer:l.buffer,type:l.type,bytesPerElement:l.elementSize,version:l.version});return}l.isInterleavedBufferAttribute&&(l=l.data);let h=i.get(l);if(h===void 0)i.set(l,n(l,f));else if(h.version<l.version){if(h.size!==l.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");c(h.buffer,l,f),h.version=l.version}}return{get:r,remove:s,update:o}}var l4=class a extends k3{constructor(e=1,t=1,i=1,n=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:n};let c=e/2,r=t/2,s=Math.floor(i),o=Math.floor(n),l=s+1,f=o+1,h=e/s,d=t/o,m=[],g=[],z=[],p=[];for(let u=0;u<f;u++){let _=u*d-r;for(let C=0;C<l;C++){let H=C*h-c;g.push(H,-_,0),z.push(0,0,1),p.push(C/s),p.push(1-u/o)}}for(let u=0;u<o;u++)for(let _=0;_<s;_++){let C=_+l*u,H=_+l*(u+1),A=_+1+l*(u+1),S=_+1+l*u;m.push(C,H,S),m.push(H,A,S)}this.setIndex(m),this.setAttribute("position",new K2(g,3)),this.setAttribute("normal",new K2(z,3)),this.setAttribute("uv",new K2(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new a(e.width,e.height,e.widthSegments,e.heightSegments)}},qc=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Xc=`#ifdef USE_ALPHAHASH
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
#endif`,Yc=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Zc=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,$c=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,jc=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Jc=`#ifdef USE_AOMAP
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
#endif`,Kc=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Qc=`#ifdef USE_BATCHING
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
#endif`,er=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,tr=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,ir=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,ar=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,nr=`#ifdef USE_IRIDESCENCE
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
#endif`,cr=`#ifdef USE_BUMPMAP
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
#endif`,rr=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,sr=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,or=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,lr=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,fr=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,hr=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,ur=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,dr=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,pr=`#define PI 3.141592653589793
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
} // validated`,mr=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,vr=`vec3 transformedNormal = objectNormal;
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
#endif`,gr=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Mr=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,zr=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,xr=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Cr="gl_FragColor = linearToOutputTexel( gl_FragColor );",br=`
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
}`,Hr=`#ifdef USE_ENVMAP
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
#endif`,_r=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,yr=`#ifdef USE_ENVMAP
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
#endif`,Vr=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Sr=`#ifdef USE_ENVMAP
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
#endif`,Lr=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,wr=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Ar=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Tr=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Er=`#ifdef USE_GRADIENTMAP
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
}`,Nr=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,Pr=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Rr=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,kr=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Dr=`uniform bool receiveShadow;
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
#endif`,Ir=`#ifdef USE_ENVMAP
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
#endif`,Fr=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Or=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Ur=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Br=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Gr=`PhysicalMaterial material;
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
#endif`,Wr=`struct PhysicalMaterial {
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
}`,qr=`
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
#endif`,Xr=`#if defined( RE_IndirectDiffuse )
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
#endif`,Yr=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Zr=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,$r=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,jr=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,Jr=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,Kr=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Qr=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,e9=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,t9=`#if defined( USE_POINTS_UV )
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
#endif`,i9=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,a9=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,n9=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[MORPHTARGETS_COUNT];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,c9=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,r9=`#ifdef USE_MORPHNORMALS
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
#endif`,s9=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
	#endif
	#ifdef MORPHTARGETS_TEXTURE
		#ifndef USE_INSTANCING_MORPH
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
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,o9=`#ifdef USE_MORPHTARGETS
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
#endif`,l9=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,f9=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,h9=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,u9=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,d9=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,p9=`#ifdef USE_NORMALMAP
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
#endif`,m9=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,v9=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,g9=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,M9=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,z9=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,x9=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,C9=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,b9=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,H9=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,_9=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,y9=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,V9=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,S9=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,L9=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,w9=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,A9=`float getShadowMask() {
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
}`,T9=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,E9=`#ifdef USE_SKINNING
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
#endif`,N9=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,P9=`#ifdef USE_SKINNING
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
#endif`,R9=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,k9=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,D9=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,I9=`#ifndef saturate
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
	float startCompression = 0.8 - 0.04;
	float desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min(color.r, min(color.g, color.b));
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max(color.r, max(color.g, color.b));
	if (peak < startCompression) return color;
	float d = 1. - startCompression;
	float newPeak = 1. - d * d / (peak + d - startCompression);
	color *= newPeak / peak;
	float g = 1. - 1. / (desaturation * (peak - newPeak) + 1.);
	return mix(color, vec3(1, 1, 1), g);
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,F9=`#ifdef USE_TRANSMISSION
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
#endif`,O9=`#ifdef USE_TRANSMISSION
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
#endif`,U9=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,B9=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,G9=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,W9=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,q9=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,X9=`uniform sampler2D t2D;
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
}`,Y9=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Z9=`#ifdef ENVMAP_TYPE_CUBE
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
}`,$9=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,j9=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,J9=`#include <common>
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
}`,K9=`#if DEPTH_PACKING == 3200
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
}`,Q9=`#define DISTANCE
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
}`,es=`#define DISTANCE
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
}`,ts=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,is=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,as=`uniform float scale;
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
}`,ns=`uniform vec3 diffuse;
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
}`,cs=`#include <common>
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
}`,rs=`uniform vec3 diffuse;
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
}`,ss=`#define LAMBERT
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
}`,os=`#define LAMBERT
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
}`,ls=`#define MATCAP
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
}`,fs=`#define MATCAP
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
}`,hs=`#define NORMAL
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
}`,us=`#define NORMAL
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
}`,ds=`#define PHONG
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
}`,ps=`#define PHONG
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
}`,ms=`#define STANDARD
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
}`,vs=`#define STANDARD
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
}`,gs=`#define TOON
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
}`,Ms=`#define TOON
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
}`,zs=`uniform float size;
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
}`,xs=`uniform vec3 diffuse;
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
}`,Cs=`#include <common>
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
}`,bs=`uniform vec3 color;
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
}`,Hs=`uniform float rotation;
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
}`,_s=`uniform vec3 diffuse;
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
}`,N1={alphahash_fragment:qc,alphahash_pars_fragment:Xc,alphamap_fragment:Yc,alphamap_pars_fragment:Zc,alphatest_fragment:$c,alphatest_pars_fragment:jc,aomap_fragment:Jc,aomap_pars_fragment:Kc,batching_pars_vertex:Qc,batching_vertex:er,begin_vertex:tr,beginnormal_vertex:ir,bsdfs:ar,iridescence_fragment:nr,bumpmap_pars_fragment:cr,clipping_planes_fragment:rr,clipping_planes_pars_fragment:sr,clipping_planes_pars_vertex:or,clipping_planes_vertex:lr,color_fragment:fr,color_pars_fragment:hr,color_pars_vertex:ur,color_vertex:dr,common:pr,cube_uv_reflection_fragment:mr,defaultnormal_vertex:vr,displacementmap_pars_vertex:gr,displacementmap_vertex:Mr,emissivemap_fragment:zr,emissivemap_pars_fragment:xr,colorspace_fragment:Cr,colorspace_pars_fragment:br,envmap_fragment:Hr,envmap_common_pars_fragment:_r,envmap_pars_fragment:yr,envmap_pars_vertex:Vr,envmap_physical_pars_fragment:Ir,envmap_vertex:Sr,fog_vertex:Lr,fog_pars_vertex:wr,fog_fragment:Ar,fog_pars_fragment:Tr,gradientmap_pars_fragment:Er,lightmap_fragment:Nr,lightmap_pars_fragment:Pr,lights_lambert_fragment:Rr,lights_lambert_pars_fragment:kr,lights_pars_begin:Dr,lights_toon_fragment:Fr,lights_toon_pars_fragment:Or,lights_phong_fragment:Ur,lights_phong_pars_fragment:Br,lights_physical_fragment:Gr,lights_physical_pars_fragment:Wr,lights_fragment_begin:qr,lights_fragment_maps:Xr,lights_fragment_end:Yr,logdepthbuf_fragment:Zr,logdepthbuf_pars_fragment:$r,logdepthbuf_pars_vertex:jr,logdepthbuf_vertex:Jr,map_fragment:Kr,map_pars_fragment:Qr,map_particle_fragment:e9,map_particle_pars_fragment:t9,metalnessmap_fragment:i9,metalnessmap_pars_fragment:a9,morphinstance_vertex:n9,morphcolor_vertex:c9,morphnormal_vertex:r9,morphtarget_pars_vertex:s9,morphtarget_vertex:o9,normal_fragment_begin:l9,normal_fragment_maps:f9,normal_pars_fragment:h9,normal_pars_vertex:u9,normal_vertex:d9,normalmap_pars_fragment:p9,clearcoat_normal_fragment_begin:m9,clearcoat_normal_fragment_maps:v9,clearcoat_pars_fragment:g9,iridescence_pars_fragment:M9,opaque_fragment:z9,packing:x9,premultiplied_alpha_fragment:C9,project_vertex:b9,dithering_fragment:H9,dithering_pars_fragment:_9,roughnessmap_fragment:y9,roughnessmap_pars_fragment:V9,shadowmap_pars_fragment:S9,shadowmap_pars_vertex:L9,shadowmap_vertex:w9,shadowmask_pars_fragment:A9,skinbase_vertex:T9,skinning_pars_vertex:E9,skinning_vertex:N9,skinnormal_vertex:P9,specularmap_fragment:R9,specularmap_pars_fragment:k9,tonemapping_fragment:D9,tonemapping_pars_fragment:I9,transmission_fragment:F9,transmission_pars_fragment:O9,uv_pars_fragment:U9,uv_pars_vertex:B9,uv_vertex:G9,worldpos_vertex:W9,background_vert:q9,background_frag:X9,backgroundCube_vert:Y9,backgroundCube_frag:Z9,cube_vert:$9,cube_frag:j9,depth_vert:J9,depth_frag:K9,distanceRGBA_vert:Q9,distanceRGBA_frag:es,equirect_vert:ts,equirect_frag:is,linedashed_vert:as,linedashed_frag:ns,meshbasic_vert:cs,meshbasic_frag:rs,meshlambert_vert:ss,meshlambert_frag:os,meshmatcap_vert:ls,meshmatcap_frag:fs,meshnormal_vert:hs,meshnormal_frag:us,meshphong_vert:ds,meshphong_frag:ps,meshphysical_vert:ms,meshphysical_frag:vs,meshtoon_vert:gs,meshtoon_frag:Ms,points_vert:zs,points_frag:xs,shadow_vert:Cs,shadow_frag:bs,sprite_vert:Hs,sprite_frag:_s},i1={common:{diffuse:{value:new q1(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new P1},alphaMap:{value:null},alphaMapTransform:{value:new P1},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new P1}},envmap:{envMap:{value:null},envMapRotation:{value:new P1},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new P1}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new P1}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new P1},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new P1},normalScale:{value:new W1(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new P1},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new P1}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new P1}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new P1}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new q1(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new q1(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new P1},alphaTest:{value:0},uvTransform:{value:new P1}},sprite:{diffuse:{value:new q1(16777215)},opacity:{value:1},center:{value:new W1(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new P1},alphaMap:{value:null},alphaMapTransform:{value:new P1},alphaTest:{value:0}}},p3={basic:{uniforms:N2([i1.common,i1.specularmap,i1.envmap,i1.aomap,i1.lightmap,i1.fog]),vertexShader:N1.meshbasic_vert,fragmentShader:N1.meshbasic_frag},lambert:{uniforms:N2([i1.common,i1.specularmap,i1.envmap,i1.aomap,i1.lightmap,i1.emissivemap,i1.bumpmap,i1.normalmap,i1.displacementmap,i1.fog,i1.lights,{emissive:{value:new q1(0)}}]),vertexShader:N1.meshlambert_vert,fragmentShader:N1.meshlambert_frag},phong:{uniforms:N2([i1.common,i1.specularmap,i1.envmap,i1.aomap,i1.lightmap,i1.emissivemap,i1.bumpmap,i1.normalmap,i1.displacementmap,i1.fog,i1.lights,{emissive:{value:new q1(0)},specular:{value:new q1(1118481)},shininess:{value:30}}]),vertexShader:N1.meshphong_vert,fragmentShader:N1.meshphong_frag},standard:{uniforms:N2([i1.common,i1.envmap,i1.aomap,i1.lightmap,i1.emissivemap,i1.bumpmap,i1.normalmap,i1.displacementmap,i1.roughnessmap,i1.metalnessmap,i1.fog,i1.lights,{emissive:{value:new q1(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:N1.meshphysical_vert,fragmentShader:N1.meshphysical_frag},toon:{uniforms:N2([i1.common,i1.aomap,i1.lightmap,i1.emissivemap,i1.bumpmap,i1.normalmap,i1.displacementmap,i1.gradientmap,i1.fog,i1.lights,{emissive:{value:new q1(0)}}]),vertexShader:N1.meshtoon_vert,fragmentShader:N1.meshtoon_frag},matcap:{uniforms:N2([i1.common,i1.bumpmap,i1.normalmap,i1.displacementmap,i1.fog,{matcap:{value:null}}]),vertexShader:N1.meshmatcap_vert,fragmentShader:N1.meshmatcap_frag},points:{uniforms:N2([i1.points,i1.fog]),vertexShader:N1.points_vert,fragmentShader:N1.points_frag},dashed:{uniforms:N2([i1.common,i1.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:N1.linedashed_vert,fragmentShader:N1.linedashed_frag},depth:{uniforms:N2([i1.common,i1.displacementmap]),vertexShader:N1.depth_vert,fragmentShader:N1.depth_frag},normal:{uniforms:N2([i1.common,i1.bumpmap,i1.normalmap,i1.displacementmap,{opacity:{value:1}}]),vertexShader:N1.meshnormal_vert,fragmentShader:N1.meshnormal_frag},sprite:{uniforms:N2([i1.sprite,i1.fog]),vertexShader:N1.sprite_vert,fragmentShader:N1.sprite_frag},background:{uniforms:{uvTransform:{value:new P1},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:N1.background_vert,fragmentShader:N1.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new P1}},vertexShader:N1.backgroundCube_vert,fragmentShader:N1.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:N1.cube_vert,fragmentShader:N1.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:N1.equirect_vert,fragmentShader:N1.equirect_frag},distanceRGBA:{uniforms:N2([i1.common,i1.displacementmap,{referencePosition:{value:new k},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:N1.distanceRGBA_vert,fragmentShader:N1.distanceRGBA_frag},shadow:{uniforms:N2([i1.lights,i1.fog,{color:{value:new q1(0)},opacity:{value:1}}]),vertexShader:N1.shadow_vert,fragmentShader:N1.shadow_frag}};p3.physical={uniforms:N2([p3.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new P1},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new P1},clearcoatNormalScale:{value:new W1(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new P1},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new P1},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new P1},sheen:{value:0},sheenColor:{value:new q1(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new P1},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new P1},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new P1},transmissionSamplerSize:{value:new W1},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new P1},attenuationDistance:{value:0},attenuationColor:{value:new q1(0)},specularColor:{value:new q1(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new P1},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new P1},anisotropyVector:{value:new W1},anisotropyMap:{value:null},anisotropyMapTransform:{value:new P1}}]),vertexShader:N1.meshphysical_vert,fragmentShader:N1.meshphysical_frag};var Ke={r:0,b:0,g:0},_4=new z6,ys=new x2;function Vs(a,e,t,i,n,c,r){let s=new q1(0),o=c===!0?0:1,l,f,h=null,d=0,m=null;function g(p,u){let _=!1,C=u.isScene===!0?u.background:null;C&&C.isTexture&&(C=(u.backgroundBlurriness>0?t:e).get(C)),C===null?z(s,o):C&&C.isColor&&(z(C,1),_=!0);let H=a.xr.getEnvironmentBlendMode();H==="additive"?i.buffers.color.setClear(0,0,0,1,r):H==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,r),(a.autoClear||_)&&a.clear(a.autoClearColor,a.autoClearDepth,a.autoClearStencil),C&&(C.isCubeTexture||C.mapping===b0)?(f===void 0&&(f=new y2(new Y6(1,1,1),new V2({name:"BackgroundCubeMaterial",uniforms:C6(p3.backgroundCube.uniforms),vertexShader:p3.backgroundCube.vertexShader,fragmentShader:p3.backgroundCube.fragmentShader,side:F2,depthTest:!1,depthWrite:!1,fog:!1})),f.geometry.deleteAttribute("normal"),f.geometry.deleteAttribute("uv"),f.onBeforeRender=function(A,S,V){this.matrixWorld.copyPosition(V.matrixWorld)},Object.defineProperty(f.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(f)),_4.copy(u.backgroundRotation),_4.x*=-1,_4.y*=-1,_4.z*=-1,C.isCubeTexture&&C.isRenderTargetTexture===!1&&(_4.y*=-1,_4.z*=-1),f.material.uniforms.envMap.value=C,f.material.uniforms.flipEnvMap.value=C.isCubeTexture&&C.isRenderTargetTexture===!1?-1:1,f.material.uniforms.backgroundBlurriness.value=u.backgroundBlurriness,f.material.uniforms.backgroundIntensity.value=u.backgroundIntensity,f.material.uniforms.backgroundRotation.value.setFromMatrix4(ys.makeRotationFromEuler(_4)),f.material.toneMapped=j1.getTransfer(C.colorSpace)!==t2,(h!==C||d!==C.version||m!==a.toneMapping)&&(f.material.needsUpdate=!0,h=C,d=C.version,m=a.toneMapping),f.layers.enableAll(),p.unshift(f,f.geometry,f.material,0,0,null)):C&&C.isTexture&&(l===void 0&&(l=new y2(new l4(2,2),new V2({name:"BackgroundMaterial",uniforms:C6(p3.background.uniforms),vertexShader:p3.background.vertexShader,fragmentShader:p3.background.fragmentShader,side:r4,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=C,l.material.uniforms.backgroundIntensity.value=u.backgroundIntensity,l.material.toneMapped=j1.getTransfer(C.colorSpace)!==t2,C.matrixAutoUpdate===!0&&C.updateMatrix(),l.material.uniforms.uvTransform.value.copy(C.matrix),(h!==C||d!==C.version||m!==a.toneMapping)&&(l.material.needsUpdate=!0,h=C,d=C.version,m=a.toneMapping),l.layers.enableAll(),p.unshift(l,l.geometry,l.material,0,0,null))}function z(p,u){p.getRGB(Ke,Ai(a)),i.buffers.color.setClear(Ke.r,Ke.g,Ke.b,u,r)}return{getClearColor:function(){return s},setClearColor:function(p,u=1){s.set(p),o=u,z(s,o)},getClearAlpha:function(){return o},setClearAlpha:function(p){o=p,z(s,o)},render:g}}function Ss(a,e,t,i){let n=a.getParameter(a.MAX_VERTEX_ATTRIBS),c=i.isWebGL2?null:e.get("OES_vertex_array_object"),r=i.isWebGL2||c!==null,s={},o=p(null),l=o,f=!1;function h(w,G,U,X,B){let q=!1;if(r){let Y=z(X,U,G);l!==Y&&(l=Y,m(l.object)),q=u(w,X,U,B),q&&_(w,X,U,B)}else{let Y=G.wireframe===!0;(l.geometry!==X.id||l.program!==U.id||l.wireframe!==Y)&&(l.geometry=X.id,l.program=U.id,l.wireframe=Y,q=!0)}B!==null&&t.update(B,a.ELEMENT_ARRAY_BUFFER),(q||f)&&(f=!1,F(w,G,U,X),B!==null&&a.bindBuffer(a.ELEMENT_ARRAY_BUFFER,t.get(B).buffer))}function d(){return i.isWebGL2?a.createVertexArray():c.createVertexArrayOES()}function m(w){return i.isWebGL2?a.bindVertexArray(w):c.bindVertexArrayOES(w)}function g(w){return i.isWebGL2?a.deleteVertexArray(w):c.deleteVertexArrayOES(w)}function z(w,G,U){let X=U.wireframe===!0,B=s[w.id];B===void 0&&(B={},s[w.id]=B);let q=B[G.id];q===void 0&&(q={},B[G.id]=q);let Y=q[X];return Y===void 0&&(Y=p(d()),q[X]=Y),Y}function p(w){let G=[],U=[],X=[];for(let B=0;B<n;B++)G[B]=0,U[B]=0,X[B]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:G,enabledAttributes:U,attributeDivisors:X,object:w,attributes:{},index:null}}function u(w,G,U,X){let B=l.attributes,q=G.attributes,Y=0,a1=U.getAttributes();for(let h1 in a1)if(a1[h1].location>=0){let I=B[h1],j=q[h1];if(j===void 0&&(h1==="instanceMatrix"&&w.instanceMatrix&&(j=w.instanceMatrix),h1==="instanceColor"&&w.instanceColor&&(j=w.instanceColor)),I===void 0||I.attribute!==j||j&&I.data!==j.data)return!0;Y++}return l.attributesNum!==Y||l.index!==X}function _(w,G,U,X){let B={},q=G.attributes,Y=0,a1=U.getAttributes();for(let h1 in a1)if(a1[h1].location>=0){let I=q[h1];I===void 0&&(h1==="instanceMatrix"&&w.instanceMatrix&&(I=w.instanceMatrix),h1==="instanceColor"&&w.instanceColor&&(I=w.instanceColor));let j={};j.attribute=I,I&&I.data&&(j.data=I.data),B[h1]=j,Y++}l.attributes=B,l.attributesNum=Y,l.index=X}function C(){let w=l.newAttributes;for(let G=0,U=w.length;G<U;G++)w[G]=0}function H(w){A(w,0)}function A(w,G){let U=l.newAttributes,X=l.enabledAttributes,B=l.attributeDivisors;U[w]=1,X[w]===0&&(a.enableVertexAttribArray(w),X[w]=1),B[w]!==G&&((i.isWebGL2?a:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](w,G),B[w]=G)}function S(){let w=l.newAttributes,G=l.enabledAttributes;for(let U=0,X=G.length;U<X;U++)G[U]!==w[U]&&(a.disableVertexAttribArray(U),G[U]=0)}function V(w,G,U,X,B,q,Y){Y===!0?a.vertexAttribIPointer(w,G,U,B,q):a.vertexAttribPointer(w,G,U,X,B,q)}function F(w,G,U,X){if(i.isWebGL2===!1&&(w.isInstancedMesh||X.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;C();let B=X.attributes,q=U.getAttributes(),Y=G.defaultAttributeValues;for(let a1 in q){let h1=q[a1];if(h1.location>=0){let w1=B[a1];if(w1===void 0&&(a1==="instanceMatrix"&&w.instanceMatrix&&(w1=w.instanceMatrix),a1==="instanceColor"&&w.instanceColor&&(w1=w.instanceColor)),w1!==void 0){let I=w1.normalized,j=w1.itemSize,f1=t.get(w1);if(f1===void 0)continue;let _1=f1.buffer,g1=f1.type,u1=f1.bytesPerElement,Y1=i.isWebGL2===!0&&(g1===a.INT||g1===a.UNSIGNED_INT||w1.gpuType===xi);if(w1.isInterleavedBufferAttribute){let y1=w1.data,E=y1.stride,C2=w1.offset;if(y1.isInstancedInterleavedBuffer){for(let z1=0;z1<h1.locationSize;z1++)A(h1.location+z1,y1.meshPerAttribute);w.isInstancedMesh!==!0&&X._maxInstanceCount===void 0&&(X._maxInstanceCount=y1.meshPerAttribute*y1.count)}else for(let z1=0;z1<h1.locationSize;z1++)H(h1.location+z1);a.bindBuffer(a.ARRAY_BUFFER,_1);for(let z1=0;z1<h1.locationSize;z1++)V(h1.location+z1,j/h1.locationSize,g1,I,E*u1,(C2+j/h1.locationSize*z1)*u1,Y1)}else{if(w1.isInstancedBufferAttribute){for(let y1=0;y1<h1.locationSize;y1++)A(h1.location+y1,w1.meshPerAttribute);w.isInstancedMesh!==!0&&X._maxInstanceCount===void 0&&(X._maxInstanceCount=w1.meshPerAttribute*w1.count)}else for(let y1=0;y1<h1.locationSize;y1++)H(h1.location+y1);a.bindBuffer(a.ARRAY_BUFFER,_1);for(let y1=0;y1<h1.locationSize;y1++)V(h1.location+y1,j/h1.locationSize,g1,I,j*u1,j/h1.locationSize*y1*u1,Y1)}}else if(Y!==void 0){let I=Y[a1];if(I!==void 0)switch(I.length){case 2:a.vertexAttrib2fv(h1.location,I);break;case 3:a.vertexAttrib3fv(h1.location,I);break;case 4:a.vertexAttrib4fv(h1.location,I);break;default:a.vertexAttrib1fv(h1.location,I)}}}}S()}function $(){e1();for(let w in s){let G=s[w];for(let U in G){let X=G[U];for(let B in X)g(X[B].object),delete X[B];delete G[U]}delete s[w]}}function M(w){if(s[w.id]===void 0)return;let G=s[w.id];for(let U in G){let X=G[U];for(let B in X)g(X[B].object),delete X[B];delete G[U]}delete s[w.id]}function y(w){for(let G in s){let U=s[G];if(U[w.id]===void 0)continue;let X=U[w.id];for(let B in X)g(X[B].object),delete X[B];delete U[w.id]}}function e1(){K(),f=!0,l!==o&&(l=o,m(l.object))}function K(){o.geometry=null,o.program=null,o.wireframe=!1}return{setup:h,reset:e1,resetDefaultState:K,dispose:$,releaseStatesOfGeometry:M,releaseStatesOfProgram:y,initAttributes:C,enableAttribute:H,disableUnusedAttributes:S}}function Ls(a,e,t,i){let n=i.isWebGL2,c;function r(f){c=f}function s(f,h){a.drawArrays(c,f,h),t.update(h,c,1)}function o(f,h,d){if(d===0)return;let m,g;if(n)m=a,g="drawArraysInstanced";else if(m=e.get("ANGLE_instanced_arrays"),g="drawArraysInstancedANGLE",m===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[g](c,f,h,d),t.update(h,c,d)}function l(f,h,d){if(d===0)return;let m=e.get("WEBGL_multi_draw");if(m===null)for(let g=0;g<d;g++)this.render(f[g],h[g]);else{m.multiDrawArraysWEBGL(c,f,0,h,0,d);let g=0;for(let z=0;z<d;z++)g+=h[z];t.update(g,c,1)}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=l}function ws(a,e,t){let i;function n(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){let V=e.get("EXT_texture_filter_anisotropic");i=a.getParameter(V.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function c(V){if(V==="highp"){if(a.getShaderPrecisionFormat(a.VERTEX_SHADER,a.HIGH_FLOAT).precision>0&&a.getShaderPrecisionFormat(a.FRAGMENT_SHADER,a.HIGH_FLOAT).precision>0)return"highp";V="mediump"}return V==="mediump"&&a.getShaderPrecisionFormat(a.VERTEX_SHADER,a.MEDIUM_FLOAT).precision>0&&a.getShaderPrecisionFormat(a.FRAGMENT_SHADER,a.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let r=typeof WebGL2RenderingContext<"u"&&a.constructor.name==="WebGL2RenderingContext",s=t.precision!==void 0?t.precision:"highp",o=c(s);o!==s&&(console.warn("THREE.WebGLRenderer:",s,"not supported, using",o,"instead."),s=o);let l=r||e.has("WEBGL_draw_buffers"),f=t.logarithmicDepthBuffer===!0,h=a.getParameter(a.MAX_TEXTURE_IMAGE_UNITS),d=a.getParameter(a.MAX_VERTEX_TEXTURE_IMAGE_UNITS),m=a.getParameter(a.MAX_TEXTURE_SIZE),g=a.getParameter(a.MAX_CUBE_MAP_TEXTURE_SIZE),z=a.getParameter(a.MAX_VERTEX_ATTRIBS),p=a.getParameter(a.MAX_VERTEX_UNIFORM_VECTORS),u=a.getParameter(a.MAX_VARYING_VECTORS),_=a.getParameter(a.MAX_FRAGMENT_UNIFORM_VECTORS),C=d>0,H=r||e.has("OES_texture_float"),A=C&&H,S=r?a.getParameter(a.MAX_SAMPLES):0;return{isWebGL2:r,drawBuffers:l,getMaxAnisotropy:n,getMaxPrecision:c,precision:s,logarithmicDepthBuffer:f,maxTextures:h,maxVertexTextures:d,maxTextureSize:m,maxCubemapSize:g,maxAttributes:z,maxVertexUniforms:p,maxVaryings:u,maxFragmentUniforms:_,vertexTextures:C,floatFragmentTextures:H,floatVertexTextures:A,maxSamples:S}}function As(a){let e=this,t=null,i=0,n=!1,c=!1,r=new E3,s=new P1,o={value:null,needsUpdate:!1};this.uniform=o,this.numPlanes=0,this.numIntersection=0,this.init=function(h,d){let m=h.length!==0||d||i!==0||n;return n=d,i=h.length,m},this.beginShadows=function(){c=!0,f(null)},this.endShadows=function(){c=!1},this.setGlobalState=function(h,d){t=f(h,d,0)},this.setState=function(h,d,m){let g=h.clippingPlanes,z=h.clipIntersection,p=h.clipShadows,u=a.get(h);if(!n||g===null||g.length===0||c&&!p)c?f(null):l();else{let _=c?0:i,C=_*4,H=u.clippingState||null;o.value=H,H=f(g,d,C,m);for(let A=0;A!==C;++A)H[A]=t[A];u.clippingState=H,this.numIntersection=z?this.numPlanes:0,this.numPlanes+=_}};function l(){o.value!==t&&(o.value=t,o.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function f(h,d,m,g){let z=h!==null?h.length:0,p=null;if(z!==0){if(p=o.value,g!==!0||p===null){let u=m+z*4,_=d.matrixWorldInverse;s.getNormalMatrix(_),(p===null||p.length<u)&&(p=new Float32Array(u));for(let C=0,H=m;C!==z;++C,H+=4)r.copy(h[C]).applyMatrix4(_,s),r.normal.toArray(p,H),p[H+3]=r.constant}o.value=p,o.needsUpdate=!0}return e.numPlanes=z,e.numIntersection=0,p}}function Ts(a){let e=new WeakMap;function t(r,s){return s===Gt?r.mapping=v6:s===Wt&&(r.mapping=g6),r}function i(r){if(r&&r.isTexture){let s=r.mapping;if(s===Gt||s===Wt)if(e.has(r)){let o=e.get(r).texture;return t(o,r.mapping)}else{let o=r.image;if(o&&o.height>0){let l=new e8(o.height);return l.fromEquirectangularTexture(a,r),e.set(r,l),r.addEventListener("dispose",n),t(l.texture,r.mapping)}else return null}}return r}function n(r){let s=r.target;s.removeEventListener("dispose",n);let o=e.get(s);o!==void 0&&(e.delete(s),o.dispose())}function c(){e=new WeakMap}return{get:i,dispose:c}}var Z6=class extends v0{constructor(e=-1,t=1,i=1,n=-1,c=.1,r=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=n,this.near=c,this.far=r,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,n,c,r){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=n,this.view.width=c,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,n=(this.top+this.bottom)/2,c=i-e,r=i+e,s=n+t,o=n-t;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,f=(this.top-this.bottom)/this.view.fullHeight/this.zoom;c+=l*this.view.offsetX,r=c+l*this.view.width,s-=f*this.view.offsetY,o=s-f*this.view.height}this.projectionMatrix.makeOrthographic(c,r,s,o,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},f6=4,j7=[.125,.215,.35,.446,.526,.582],L4=20,kt=new Z6,J7=new q1,Dt=null,It=0,Ft=0,V4=(1+Math.sqrt(5))/2,o6=1/V4,K7=[new k(1,1,1),new k(-1,1,1),new k(1,1,-1),new k(-1,1,-1),new k(0,V4,o6),new k(0,V4,-o6),new k(o6,0,V4),new k(-o6,0,V4),new k(V4,o6,0),new k(-V4,o6,0)],z0=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,n=100){Dt=this._renderer.getRenderTarget(),It=this._renderer.getActiveCubeFace(),Ft=this._renderer.getActiveMipmapLevel(),this._setSize(256);let c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(e,i,n,c),t>0&&this._blur(c,0,0,t),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=ti(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=ei(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Dt,It,Ft),e.scissorTest=!1,Qe(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===v6||e.mapping===g6?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Dt=this._renderer.getRenderTarget(),It=this._renderer.getActiveCubeFace(),Ft=this._renderer.getActiveMipmapLevel();let i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:D2,minFilter:D2,generateMipmaps:!1,type:E4,format:r3,colorSpace:f4,depthBuffer:!1},n=Q7(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Q7(e,t,i);let{_lodMax:c}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Es(c)),this._blurMaterial=Ns(c,e,t)}return n}_compileMaterial(e){let t=new y2(this._lodPlanes[0],e);this._renderer.compile(t,kt)}_sceneToCubeUV(e,t,i,n){let s=new H2(90,1,t,i),o=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],f=this._renderer,h=f.autoClear,d=f.toneMapping;f.getClearColor(J7),f.toneMapping=n4,f.autoClear=!1;let m=new d0({name:"PMREM.Background",side:F2,depthWrite:!1,depthTest:!1}),g=new y2(new Y6,m),z=!1,p=e.background;p?p.isColor&&(m.color.copy(p),e.background=null,z=!0):(m.color.copy(J7),z=!0);for(let u=0;u<6;u++){let _=u%3;_===0?(s.up.set(0,o[u],0),s.lookAt(l[u],0,0)):_===1?(s.up.set(0,0,o[u]),s.lookAt(0,l[u],0)):(s.up.set(0,o[u],0),s.lookAt(0,0,l[u]));let C=this._cubeSize;Qe(n,_*C,u>2?C:0,C,C),f.setRenderTarget(n),z&&f.render(g,s),f.render(e,s)}g.geometry.dispose(),g.material.dispose(),f.toneMapping=d,f.autoClear=h,e.background=p}_textureToCubeUV(e,t){let i=this._renderer,n=e.mapping===v6||e.mapping===g6;n?(this._cubemapMaterial===null&&(this._cubemapMaterial=ti()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=ei());let c=n?this._cubemapMaterial:this._equirectMaterial,r=new y2(this._lodPlanes[0],c),s=c.uniforms;s.envMap.value=e;let o=this._cubeSize;Qe(t,0,0,3*o,2*o),i.setRenderTarget(t),i.render(r,kt)}_applyPMREM(e){let t=this._renderer,i=t.autoClear;t.autoClear=!1;for(let n=1;n<this._lodPlanes.length;n++){let c=Math.sqrt(this._sigmas[n]*this._sigmas[n]-this._sigmas[n-1]*this._sigmas[n-1]),r=K7[(n-1)%K7.length];this._blur(e,n-1,n,c,r)}t.autoClear=i}_blur(e,t,i,n,c){let r=this._pingPongRenderTarget;this._halfBlur(e,r,t,i,n,"latitudinal",c),this._halfBlur(r,e,i,i,n,"longitudinal",c)}_halfBlur(e,t,i,n,c,r,s){let o=this._renderer,l=this._blurMaterial;r!=="latitudinal"&&r!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let f=3,h=new y2(this._lodPlanes[n],l),d=l.uniforms,m=this._sizeLods[i]-1,g=isFinite(c)?Math.PI/(2*m):2*Math.PI/(2*L4-1),z=c/g,p=isFinite(c)?1+Math.floor(f*z):L4;p>L4&&console.warn(`sigmaRadians, ${c}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${L4}`);let u=[],_=0;for(let V=0;V<L4;++V){let F=V/z,$=Math.exp(-F*F/2);u.push($),V===0?_+=$:V<p&&(_+=2*$)}for(let V=0;V<u.length;V++)u[V]=u[V]/_;d.envMap.value=e.texture,d.samples.value=p,d.weights.value=u,d.latitudinal.value=r==="latitudinal",s&&(d.poleAxis.value=s);let{_lodMax:C}=this;d.dTheta.value=g,d.mipInt.value=C-i;let H=this._sizeLods[n],A=3*H*(n>C-f6?n-C+f6:0),S=4*(this._cubeSize-H);Qe(t,A,S,3*H,2*H),o.setRenderTarget(t),o.render(h,kt)}};function Es(a){let e=[],t=[],i=[],n=a,c=a-f6+1+j7.length;for(let r=0;r<c;r++){let s=Math.pow(2,n);t.push(s);let o=1/s;r>a-f6?o=j7[r-a+f6-1]:r===0&&(o=0),i.push(o);let l=1/(s-2),f=-l,h=1+l,d=[f,f,h,f,h,h,f,f,h,h,f,h],m=6,g=6,z=3,p=2,u=1,_=new Float32Array(z*g*m),C=new Float32Array(p*g*m),H=new Float32Array(u*g*m);for(let S=0;S<m;S++){let V=S%3*2/3-1,F=S>2?0:-1,$=[V,F,0,V+2/3,F,0,V+2/3,F+1,0,V,F,0,V+2/3,F+1,0,V,F+1,0];_.set($,z*g*S),C.set(d,p*g*S);let M=[S,S,S,S,S,S];H.set(M,u*g*S)}let A=new k3;A.setAttribute("position",new J2(_,z)),A.setAttribute("uv",new J2(C,p)),A.setAttribute("faceIndex",new J2(H,u)),e.push(A),n>f6&&n--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function Q7(a,e,t){let i=new s3(a,e,t);return i.texture.mapping=b0,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Qe(a,e,t,i,n){a.viewport.set(e,t,i,n),a.scissor.set(e,t,i,n)}function Ns(a,e,t){let i=new Float32Array(L4),n=new k(0,1,0);return new V2({name:"SphericalGaussianBlur",defines:{n:L4,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${a}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:n}},vertexShader:y8(),fragmentShader:`

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
		`,blending:m3,depthTest:!1,depthWrite:!1})}function ei(){return new V2({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:y8(),fragmentShader:`

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
		`,blending:m3,depthTest:!1,depthWrite:!1})}function ti(){return new V2({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:y8(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:m3,depthTest:!1,depthWrite:!1})}function y8(){return`

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
	`}function Ps(a){let e=new WeakMap,t=null;function i(s){if(s&&s.isTexture){let o=s.mapping,l=o===Gt||o===Wt,f=o===v6||o===g6;if(l||f)if(s.isRenderTargetTexture&&s.needsPMREMUpdate===!0){s.needsPMREMUpdate=!1;let h=e.get(s);return t===null&&(t=new z0(a)),h=l?t.fromEquirectangular(s,h):t.fromCubemap(s,h),e.set(s,h),h.texture}else{if(e.has(s))return e.get(s).texture;{let h=s.image;if(l&&h&&h.height>0||f&&h&&n(h)){t===null&&(t=new z0(a));let d=l?t.fromEquirectangular(s):t.fromCubemap(s);return e.set(s,d),s.addEventListener("dispose",c),d.texture}else return null}}}return s}function n(s){let o=0,l=6;for(let f=0;f<l;f++)s[f]!==void 0&&o++;return o===l}function c(s){let o=s.target;o.removeEventListener("dispose",c);let l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function r(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:r}}function Rs(a){let e={};function t(i){if(e[i]!==void 0)return e[i];let n;switch(i){case"WEBGL_depth_texture":n=a.getExtension("WEBGL_depth_texture")||a.getExtension("MOZ_WEBGL_depth_texture")||a.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":n=a.getExtension("EXT_texture_filter_anisotropic")||a.getExtension("MOZ_EXT_texture_filter_anisotropic")||a.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":n=a.getExtension("WEBGL_compressed_texture_s3tc")||a.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||a.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":n=a.getExtension("WEBGL_compressed_texture_pvrtc")||a.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:n=a.getExtension(i)}return e[i]=n,n}return{has:function(i){return t(i)!==null},init:function(i){i.isWebGL2?(t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance")):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(i){let n=t(i);return n===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),n}}}function ks(a,e,t,i){let n={},c=new WeakMap;function r(h){let d=h.target;d.index!==null&&e.remove(d.index);for(let g in d.attributes)e.remove(d.attributes[g]);for(let g in d.morphAttributes){let z=d.morphAttributes[g];for(let p=0,u=z.length;p<u;p++)e.remove(z[p])}d.removeEventListener("dispose",r),delete n[d.id];let m=c.get(d);m&&(e.remove(m),c.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function s(h,d){return n[d.id]===!0||(d.addEventListener("dispose",r),n[d.id]=!0,t.memory.geometries++),d}function o(h){let d=h.attributes;for(let g in d)e.update(d[g],a.ARRAY_BUFFER);let m=h.morphAttributes;for(let g in m){let z=m[g];for(let p=0,u=z.length;p<u;p++)e.update(z[p],a.ARRAY_BUFFER)}}function l(h){let d=[],m=h.index,g=h.attributes.position,z=0;if(m!==null){let _=m.array;z=m.version;for(let C=0,H=_.length;C<H;C+=3){let A=_[C+0],S=_[C+1],V=_[C+2];d.push(A,S,S,V,V,A)}}else if(g!==void 0){let _=g.array;z=g.version;for(let C=0,H=_.length/3-1;C<H;C+=3){let A=C+0,S=C+1,V=C+2;d.push(A,S,S,V,V,A)}}else return;let p=new(Li(d)?m0:p0)(d,1);p.version=z;let u=c.get(h);u&&e.remove(u),c.set(h,p)}function f(h){let d=c.get(h);if(d){let m=h.index;m!==null&&d.version<m.version&&l(h)}else l(h);return c.get(h)}return{get:s,update:o,getWireframeAttribute:f}}function Ds(a,e,t,i){let n=i.isWebGL2,c;function r(m){c=m}let s,o;function l(m){s=m.type,o=m.bytesPerElement}function f(m,g){a.drawElements(c,g,s,m*o),t.update(g,c,1)}function h(m,g,z){if(z===0)return;let p,u;if(n)p=a,u="drawElementsInstanced";else if(p=e.get("ANGLE_instanced_arrays"),u="drawElementsInstancedANGLE",p===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}p[u](c,g,s,m*o,z),t.update(g,c,z)}function d(m,g,z){if(z===0)return;let p=e.get("WEBGL_multi_draw");if(p===null)for(let u=0;u<z;u++)this.render(m[u]/o,g[u]);else{p.multiDrawElementsWEBGL(c,g,0,s,m,0,z);let u=0;for(let _=0;_<z;_++)u+=g[_];t.update(u,c,1)}}this.setMode=r,this.setIndex=l,this.render=f,this.renderInstances=h,this.renderMultiDraw=d}function Is(a){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(c,r,s){switch(t.calls++,r){case a.TRIANGLES:t.triangles+=s*(c/3);break;case a.LINES:t.lines+=s*(c/2);break;case a.LINE_STRIP:t.lines+=s*(c-1);break;case a.LINE_LOOP:t.lines+=s*c;break;case a.POINTS:t.points+=s*c;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",r);break}}function n(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:n,update:i}}function Fs(a,e){return a[0]-e[0]}function Os(a,e){return Math.abs(e[1])-Math.abs(a[1])}function Us(a,e,t){let i={},n=new Float32Array(8),c=new WeakMap,r=new _2,s=[];for(let l=0;l<8;l++)s[l]=[l,0];function o(l,f,h){let d=l.morphTargetInfluences;if(e.isWebGL2===!0){let g=f.morphAttributes.position||f.morphAttributes.normal||f.morphAttributes.color,z=g!==void 0?g.length:0,p=c.get(f);if(p===void 0||p.count!==z){let K=function(){y.dispose(),c.delete(f),f.removeEventListener("dispose",K)};var m=K;p!==void 0&&p.texture.dispose();let u=f.morphAttributes.position!==void 0,_=f.morphAttributes.normal!==void 0,C=f.morphAttributes.color!==void 0,H=f.morphAttributes.position||[],A=f.morphAttributes.normal||[],S=f.morphAttributes.color||[],V=0;u===!0&&(V=1),_===!0&&(V=2),C===!0&&(V=3);let F=f.attributes.position.count*V,$=1;F>e.maxTextureSize&&($=Math.ceil(F/e.maxTextureSize),F=e.maxTextureSize);let M=new Float32Array(F*$*4*z),y=new h0(M,F,$,z);y.type=P3,y.needsUpdate=!0;let e1=V*4;for(let w=0;w<z;w++){let G=H[w],U=A[w],X=S[w],B=F*$*4*w;for(let q=0;q<G.count;q++){let Y=q*e1;u===!0&&(r.fromBufferAttribute(G,q),M[B+Y+0]=r.x,M[B+Y+1]=r.y,M[B+Y+2]=r.z,M[B+Y+3]=0),_===!0&&(r.fromBufferAttribute(U,q),M[B+Y+4]=r.x,M[B+Y+5]=r.y,M[B+Y+6]=r.z,M[B+Y+7]=0),C===!0&&(r.fromBufferAttribute(X,q),M[B+Y+8]=r.x,M[B+Y+9]=r.y,M[B+Y+10]=r.z,M[B+Y+11]=X.itemSize===4?r.w:1)}}p={count:z,texture:y,size:new W1(F,$)},c.set(f,p),f.addEventListener("dispose",K)}if(l.isInstancedMesh===!0&&l.morphTexture!==null)h.getUniforms().setValue(a,"morphTexture",l.morphTexture,t);else{let u=0;for(let C=0;C<d.length;C++)u+=d[C];let _=f.morphTargetsRelative?1:1-u;h.getUniforms().setValue(a,"morphTargetBaseInfluence",_),h.getUniforms().setValue(a,"morphTargetInfluences",d)}h.getUniforms().setValue(a,"morphTargetsTexture",p.texture,t),h.getUniforms().setValue(a,"morphTargetsTextureSize",p.size)}else{let g=d===void 0?0:d.length,z=i[f.id];if(z===void 0||z.length!==g){z=[];for(let H=0;H<g;H++)z[H]=[H,0];i[f.id]=z}for(let H=0;H<g;H++){let A=z[H];A[0]=H,A[1]=d[H]}z.sort(Os);for(let H=0;H<8;H++)H<g&&z[H][1]?(s[H][0]=z[H][0],s[H][1]=z[H][1]):(s[H][0]=Number.MAX_SAFE_INTEGER,s[H][1]=0);s.sort(Fs);let p=f.morphAttributes.position,u=f.morphAttributes.normal,_=0;for(let H=0;H<8;H++){let A=s[H],S=A[0],V=A[1];S!==Number.MAX_SAFE_INTEGER&&V?(p&&f.getAttribute("morphTarget"+H)!==p[S]&&f.setAttribute("morphTarget"+H,p[S]),u&&f.getAttribute("morphNormal"+H)!==u[S]&&f.setAttribute("morphNormal"+H,u[S]),n[H]=V,_+=V):(p&&f.hasAttribute("morphTarget"+H)===!0&&f.deleteAttribute("morphTarget"+H),u&&f.hasAttribute("morphNormal"+H)===!0&&f.deleteAttribute("morphNormal"+H),n[H]=0)}let C=f.morphTargetsRelative?1:1-_;h.getUniforms().setValue(a,"morphTargetBaseInfluence",C),h.getUniforms().setValue(a,"morphTargetInfluences",n)}}return{update:o}}function Bs(a,e,t,i){let n=new WeakMap;function c(o){let l=i.render.frame,f=o.geometry,h=e.get(o,f);if(n.get(h)!==l&&(e.update(h),n.set(h,l)),o.isInstancedMesh&&(o.hasEventListener("dispose",s)===!1&&o.addEventListener("dispose",s),n.get(o)!==l&&(t.update(o.instanceMatrix,a.ARRAY_BUFFER),o.instanceColor!==null&&t.update(o.instanceColor,a.ARRAY_BUFFER),n.set(o,l))),o.isSkinnedMesh){let d=o.skeleton;n.get(d)!==l&&(d.update(),n.set(d,l))}return h}function r(){n=new WeakMap}function s(o){let l=o.target;l.removeEventListener("dispose",s),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:c,dispose:r}}var x0=class extends D4{constructor(e,t,i,n,c,r,s,o,l,f){if(f=f!==void 0?f:T4,f!==T4&&f!==M6)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&f===T4&&(i=a4),i===void 0&&f===M6&&(i=A4),super(null,n,c,r,s,o,f,i,l),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=s!==void 0?s:P2,this.minFilter=o!==void 0?o:P2,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},Ei=new D4,Ni=new x0(1,1);Ni.compareFunction=Si;var Pi=new h0,Ri=new Jt,ki=new g0,ii=[],ai=[],ni=new Float32Array(16),ci=new Float32Array(9),ri=new Float32Array(4);function y6(a,e,t){let i=a[0];if(i<=0||i>0)return a;let n=e*t,c=ii[n];if(c===void 0&&(c=new Float32Array(n),ii[n]=c),e!==0){i.toArray(c,0);for(let r=1,s=0;r!==e;++r)s+=t,a[r].toArray(c,s)}return c}function m2(a,e){if(a.length!==e.length)return!1;for(let t=0,i=a.length;t<i;t++)if(a[t]!==e[t])return!1;return!0}function v2(a,e){for(let t=0,i=e.length;t<i;t++)a[t]=e[t]}function _0(a,e){let t=ai[e];t===void 0&&(t=new Int32Array(e),ai[e]=t);for(let i=0;i!==e;++i)t[i]=a.allocateTextureUnit();return t}function Gs(a,e){let t=this.cache;t[0]!==e&&(a.uniform1f(this.addr,e),t[0]=e)}function Ws(a,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(a.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(m2(t,e))return;a.uniform2fv(this.addr,e),v2(t,e)}}function qs(a,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(a.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(a.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(m2(t,e))return;a.uniform3fv(this.addr,e),v2(t,e)}}function Xs(a,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(a.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(m2(t,e))return;a.uniform4fv(this.addr,e),v2(t,e)}}function Ys(a,e){let t=this.cache,i=e.elements;if(i===void 0){if(m2(t,e))return;a.uniformMatrix2fv(this.addr,!1,e),v2(t,e)}else{if(m2(t,i))return;ri.set(i),a.uniformMatrix2fv(this.addr,!1,ri),v2(t,i)}}function Zs(a,e){let t=this.cache,i=e.elements;if(i===void 0){if(m2(t,e))return;a.uniformMatrix3fv(this.addr,!1,e),v2(t,e)}else{if(m2(t,i))return;ci.set(i),a.uniformMatrix3fv(this.addr,!1,ci),v2(t,i)}}function $s(a,e){let t=this.cache,i=e.elements;if(i===void 0){if(m2(t,e))return;a.uniformMatrix4fv(this.addr,!1,e),v2(t,e)}else{if(m2(t,i))return;ni.set(i),a.uniformMatrix4fv(this.addr,!1,ni),v2(t,i)}}function js(a,e){let t=this.cache;t[0]!==e&&(a.uniform1i(this.addr,e),t[0]=e)}function Js(a,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(a.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(m2(t,e))return;a.uniform2iv(this.addr,e),v2(t,e)}}function Ks(a,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(a.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(m2(t,e))return;a.uniform3iv(this.addr,e),v2(t,e)}}function Qs(a,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(a.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(m2(t,e))return;a.uniform4iv(this.addr,e),v2(t,e)}}function eo(a,e){let t=this.cache;t[0]!==e&&(a.uniform1ui(this.addr,e),t[0]=e)}function to(a,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(a.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(m2(t,e))return;a.uniform2uiv(this.addr,e),v2(t,e)}}function io(a,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(a.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(m2(t,e))return;a.uniform3uiv(this.addr,e),v2(t,e)}}function ao(a,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(a.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(m2(t,e))return;a.uniform4uiv(this.addr,e),v2(t,e)}}function no(a,e,t){let i=this.cache,n=t.allocateTextureUnit();i[0]!==n&&(a.uniform1i(this.addr,n),i[0]=n);let c=this.type===a.SAMPLER_2D_SHADOW?Ni:Ei;t.setTexture2D(e||c,n)}function co(a,e,t){let i=this.cache,n=t.allocateTextureUnit();i[0]!==n&&(a.uniform1i(this.addr,n),i[0]=n),t.setTexture3D(e||Ri,n)}function ro(a,e,t){let i=this.cache,n=t.allocateTextureUnit();i[0]!==n&&(a.uniform1i(this.addr,n),i[0]=n),t.setTextureCube(e||ki,n)}function so(a,e,t){let i=this.cache,n=t.allocateTextureUnit();i[0]!==n&&(a.uniform1i(this.addr,n),i[0]=n),t.setTexture2DArray(e||Pi,n)}function oo(a){switch(a){case 5126:return Gs;case 35664:return Ws;case 35665:return qs;case 35666:return Xs;case 35674:return Ys;case 35675:return Zs;case 35676:return $s;case 5124:case 35670:return js;case 35667:case 35671:return Js;case 35668:case 35672:return Ks;case 35669:case 35673:return Qs;case 5125:return eo;case 36294:return to;case 36295:return io;case 36296:return ao;case 35678:case 36198:case 36298:case 36306:case 35682:return no;case 35679:case 36299:case 36307:return co;case 35680:case 36300:case 36308:case 36293:return ro;case 36289:case 36303:case 36311:case 36292:return so}}function lo(a,e){a.uniform1fv(this.addr,e)}function fo(a,e){let t=y6(e,this.size,2);a.uniform2fv(this.addr,t)}function ho(a,e){let t=y6(e,this.size,3);a.uniform3fv(this.addr,t)}function uo(a,e){let t=y6(e,this.size,4);a.uniform4fv(this.addr,t)}function po(a,e){let t=y6(e,this.size,4);a.uniformMatrix2fv(this.addr,!1,t)}function mo(a,e){let t=y6(e,this.size,9);a.uniformMatrix3fv(this.addr,!1,t)}function vo(a,e){let t=y6(e,this.size,16);a.uniformMatrix4fv(this.addr,!1,t)}function go(a,e){a.uniform1iv(this.addr,e)}function Mo(a,e){a.uniform2iv(this.addr,e)}function zo(a,e){a.uniform3iv(this.addr,e)}function xo(a,e){a.uniform4iv(this.addr,e)}function Co(a,e){a.uniform1uiv(this.addr,e)}function bo(a,e){a.uniform2uiv(this.addr,e)}function Ho(a,e){a.uniform3uiv(this.addr,e)}function _o(a,e){a.uniform4uiv(this.addr,e)}function yo(a,e,t){let i=this.cache,n=e.length,c=_0(t,n);m2(i,c)||(a.uniform1iv(this.addr,c),v2(i,c));for(let r=0;r!==n;++r)t.setTexture2D(e[r]||Ei,c[r])}function Vo(a,e,t){let i=this.cache,n=e.length,c=_0(t,n);m2(i,c)||(a.uniform1iv(this.addr,c),v2(i,c));for(let r=0;r!==n;++r)t.setTexture3D(e[r]||Ri,c[r])}function So(a,e,t){let i=this.cache,n=e.length,c=_0(t,n);m2(i,c)||(a.uniform1iv(this.addr,c),v2(i,c));for(let r=0;r!==n;++r)t.setTextureCube(e[r]||ki,c[r])}function Lo(a,e,t){let i=this.cache,n=e.length,c=_0(t,n);m2(i,c)||(a.uniform1iv(this.addr,c),v2(i,c));for(let r=0;r!==n;++r)t.setTexture2DArray(e[r]||Pi,c[r])}function wo(a){switch(a){case 5126:return lo;case 35664:return fo;case 35665:return ho;case 35666:return uo;case 35674:return po;case 35675:return mo;case 35676:return vo;case 5124:case 35670:return go;case 35667:case 35671:return Mo;case 35668:case 35672:return zo;case 35669:case 35673:return xo;case 5125:return Co;case 36294:return bo;case 36295:return Ho;case 36296:return _o;case 35678:case 36198:case 36298:case 36306:case 35682:return yo;case 35679:case 36299:case 36307:return Vo;case 35680:case 36300:case 36308:case 36293:return So;case 36289:case 36303:case 36311:case 36292:return Lo}}var t8=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=oo(t.type)}},i8=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=wo(t.type)}},a8=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){let n=this.seq;for(let c=0,r=n.length;c!==r;++c){let s=n[c];s.setValue(e,t[s.id],i)}}},Ot=/(\w+)(\])?(\[|\.)?/g;function si(a,e){a.seq.push(e),a.map[e.id]=e}function Ao(a,e,t){let i=a.name,n=i.length;for(Ot.lastIndex=0;;){let c=Ot.exec(i),r=Ot.lastIndex,s=c[1],o=c[2]==="]",l=c[3];if(o&&(s=s|0),l===void 0||l==="["&&r+2===n){si(t,l===void 0?new t8(s,a,e):new i8(s,a,e));break}else{let h=t.map[s];h===void 0&&(h=new a8(s),si(t,h)),t=h}}}var m6=class{constructor(e,t){this.seq=[],this.map={};let i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let n=0;n<i;++n){let c=e.getActiveUniform(t,n),r=e.getUniformLocation(t,c.name);Ao(c,r,this)}}setValue(e,t,i,n){let c=this.map[t];c!==void 0&&c.setValue(e,i,n)}setOptional(e,t,i){let n=t[i];n!==void 0&&this.setValue(e,i,n)}static upload(e,t,i,n){for(let c=0,r=t.length;c!==r;++c){let s=t[c],o=i[s.id];o.needsUpdate!==!1&&s.setValue(e,o.value,n)}}static seqWithValue(e,t){let i=[];for(let n=0,c=e.length;n!==c;++n){let r=e[n];r.id in t&&i.push(r)}return i}};function oi(a,e,t){let i=a.createShader(e);return a.shaderSource(i,t),a.compileShader(i),i}var To=37297,Eo=0;function No(a,e){let t=a.split(`
`),i=[],n=Math.max(e-6,0),c=Math.min(e+6,t.length);for(let r=n;r<c;r++){let s=r+1;i.push(`${s===e?">":" "} ${s}: ${t[r]}`)}return i.join(`
`)}function Po(a){let e=j1.getPrimaries(j1.workingColorSpace),t=j1.getPrimaries(a),i;switch(e===t?i="":e===r0&&t===c0?i="LinearDisplayP3ToLinearSRGB":e===c0&&t===r0&&(i="LinearSRGBToLinearDisplayP3"),a){case f4:case H0:return[i,"LinearTransferOETF"];case d3:case H8:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",a),[i,"LinearTransferOETF"]}}function li(a,e,t){let i=a.getShaderParameter(e,a.COMPILE_STATUS),n=a.getShaderInfoLog(e).trim();if(i&&n==="")return"";let c=/ERROR: 0:(\d+)/.exec(n);if(c){let r=parseInt(c[1]);return t.toUpperCase()+`

`+n+`

`+No(a.getShaderSource(e),r)}else return n}function Ro(a,e){let t=Po(e);return`vec4 ${a}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function ko(a,e){let t;switch(e){case jn:t="Linear";break;case Jn:t="Reinhard";break;case Kn:t="OptimizedCineon";break;case Qn:t="ACESFilmic";break;case tc:t="AgX";break;case ic:t="Neutral";break;case ec:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+a+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function Do(a){return[a.extensionDerivatives||a.envMapCubeUVHeight||a.bumpMap||a.normalMapTangentSpace||a.clearcoatNormalMap||a.flatShading||a.alphaToCoverage||a.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(a.extensionFragDepth||a.logarithmicDepthBuffer)&&a.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",a.extensionDrawBuffers&&a.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(a.extensionShaderTextureLOD||a.envMap||a.transmission)&&a.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(h6).join(`
`)}function Io(a){return[a.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",a.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(h6).join(`
`)}function Fo(a){let e=[];for(let t in a){let i=a[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function Oo(a,e){let t={},i=a.getProgramParameter(e,a.ACTIVE_ATTRIBUTES);for(let n=0;n<i;n++){let c=a.getActiveAttrib(e,n),r=c.name,s=1;c.type===a.FLOAT_MAT2&&(s=2),c.type===a.FLOAT_MAT3&&(s=3),c.type===a.FLOAT_MAT4&&(s=4),t[r]={type:c.type,location:a.getAttribLocation(e,r),locationSize:s}}return t}function h6(a){return a!==""}function fi(a,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return a.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function hi(a,e){return a.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var Uo=/^[ \t]*#include +<([\w\d./]+)>/gm;function n8(a){return a.replace(Uo,Go)}var Bo=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function Go(a,e){let t=N1[e];if(t===void 0){let i=Bo.get(e);if(i!==void 0)t=N1[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return n8(t)}var Wo=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function ui(a){return a.replace(Wo,qo)}function qo(a,e,t,i){let n="";for(let c=parseInt(e);c<parseInt(t);c++)n+=i.replace(/\[\s*i\s*\]/g,"[ "+c+" ]").replace(/UNROLLED_LOOP_INDEX/g,c);return n}function di(a){let e=`precision ${a.precision} float;
	precision ${a.precision} int;
	precision ${a.precision} sampler2D;
	precision ${a.precision} samplerCube;
	`;return a.isWebGL2&&(e+=`precision ${a.precision} sampler3D;
		precision ${a.precision} sampler2DArray;
		precision ${a.precision} sampler2DShadow;
		precision ${a.precision} samplerCubeShadow;
		precision ${a.precision} sampler2DArrayShadow;
		precision ${a.precision} isampler2D;
		precision ${a.precision} isampler3D;
		precision ${a.precision} isamplerCube;
		precision ${a.precision} isampler2DArray;
		precision ${a.precision} usampler2D;
		precision ${a.precision} usampler3D;
		precision ${a.precision} usamplerCube;
		precision ${a.precision} usampler2DArray;
		`),a.precision==="highp"?e+=`
#define HIGH_PRECISION`:a.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:a.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Xo(a){let e="SHADOWMAP_TYPE_BASIC";return a.shadowMapType===Mi?e="SHADOWMAP_TYPE_PCF":a.shadowMapType===_n?e="SHADOWMAP_TYPE_PCF_SOFT":a.shadowMapType===T3&&(e="SHADOWMAP_TYPE_VSM"),e}function Yo(a){let e="ENVMAP_TYPE_CUBE";if(a.envMap)switch(a.envMapMode){case v6:case g6:e="ENVMAP_TYPE_CUBE";break;case b0:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Zo(a){let e="ENVMAP_MODE_REFLECTION";if(a.envMap)switch(a.envMapMode){case g6:e="ENVMAP_MODE_REFRACTION";break}return e}function $o(a){let e="ENVMAP_BLENDING_NONE";if(a.envMap)switch(a.combine){case zi:e="ENVMAP_BLENDING_MULTIPLY";break;case Zn:e="ENVMAP_BLENDING_MIX";break;case $n:e="ENVMAP_BLENDING_ADD";break}return e}function jo(a){let e=a.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function Jo(a,e,t,i){let n=a.getContext(),c=t.defines,r=t.vertexShader,s=t.fragmentShader,o=Xo(t),l=Yo(t),f=Zo(t),h=$o(t),d=jo(t),m=t.isWebGL2?"":Do(t),g=Io(t),z=Fo(c),p=n.createProgram(),u,_,C=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(u=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,z].filter(h6).join(`
`),u.length>0&&(u+=`
`),_=[m,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,z].filter(h6).join(`
`),_.length>0&&(_+=`
`)):(u=[di(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,z,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+f:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+o:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(h6).join(`
`),_=[m,di(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,z,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+f:"",t.envMap?"#define "+h:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+o:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==n4?"#define TONE_MAPPING":"",t.toneMapping!==n4?N1.tonemapping_pars_fragment:"",t.toneMapping!==n4?ko("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",N1.colorspace_pars_fragment,Ro("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(h6).join(`
`)),r=n8(r),r=fi(r,t),r=hi(r,t),s=n8(s),s=fi(s,t),s=hi(s,t),r=ui(r),s=ui(s),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(C=`#version 300 es
`,u=[g,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+u,_=["precision mediump sampler2DArray;","#define varying in",t.glslVersion===A7?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===A7?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+_);let H=C+u+r,A=C+_+s,S=oi(n,n.VERTEX_SHADER,H),V=oi(n,n.FRAGMENT_SHADER,A);n.attachShader(p,S),n.attachShader(p,V),t.index0AttributeName!==void 0?n.bindAttribLocation(p,0,t.index0AttributeName):t.morphTargets===!0&&n.bindAttribLocation(p,0,"position"),n.linkProgram(p);function F(e1){if(a.debug.checkShaderErrors){let K=n.getProgramInfoLog(p).trim(),w=n.getShaderInfoLog(S).trim(),G=n.getShaderInfoLog(V).trim(),U=!0,X=!0;if(n.getProgramParameter(p,n.LINK_STATUS)===!1)if(U=!1,typeof a.debug.onShaderError=="function")a.debug.onShaderError(n,p,S,V);else{let B=li(n,S,"vertex"),q=li(n,V,"fragment");console.error("THREE.WebGLProgram: Shader Error "+n.getError()+" - VALIDATE_STATUS "+n.getProgramParameter(p,n.VALIDATE_STATUS)+`

Material Name: `+e1.name+`
Material Type: `+e1.type+`

Program Info Log: `+K+`
`+B+`
`+q)}else K!==""?console.warn("THREE.WebGLProgram: Program Info Log:",K):(w===""||G==="")&&(X=!1);X&&(e1.diagnostics={runnable:U,programLog:K,vertexShader:{log:w,prefix:u},fragmentShader:{log:G,prefix:_}})}n.deleteShader(S),n.deleteShader(V),$=new m6(n,p),M=Oo(n,p)}let $;this.getUniforms=function(){return $===void 0&&F(this),$};let M;this.getAttributes=function(){return M===void 0&&F(this),M};let y=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return y===!1&&(y=n.getProgramParameter(p,To)),y},this.destroy=function(){i.releaseStatesOfProgram(this),n.deleteProgram(p),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Eo++,this.cacheKey=e,this.usedTimes=1,this.program=p,this.vertexShader=S,this.fragmentShader=V,this}var Ko=0,c8=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,i=e.fragmentShader,n=this._getShaderStage(t),c=this._getShaderStage(i),r=this._getShaderCacheForMaterial(e);return r.has(n)===!1&&(r.add(n),n.usedTimes++),r.has(c)===!1&&(r.add(c),c.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){let t=this.shaderCache,i=t.get(e);return i===void 0&&(i=new r8(e),t.set(e,i)),i}},r8=class{constructor(e){this.id=Ko++,this.code=e,this.usedTimes=0}};function Qo(a,e,t,i,n,c,r){let s=new u0,o=new c8,l=new Set,f=[],h=n.isWebGL2,d=n.logarithmicDepthBuffer,m=n.vertexTextures,g=n.precision,z={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(M){return l.add(M),M===0?"uv":`uv${M}`}function u(M,y,e1,K,w){let G=K.fog,U=w.geometry,X=M.isMeshStandardMaterial?K.environment:null,B=(M.isMeshStandardMaterial?t:e).get(M.envMap||X),q=B&&B.mapping===b0?B.image.height:null,Y=z[M.type];M.precision!==null&&(g=n.getMaxPrecision(M.precision),g!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",g,"instead."));let a1=U.morphAttributes.position||U.morphAttributes.normal||U.morphAttributes.color,h1=a1!==void 0?a1.length:0,w1=0;U.morphAttributes.position!==void 0&&(w1=1),U.morphAttributes.normal!==void 0&&(w1=2),U.morphAttributes.color!==void 0&&(w1=3);let I,j,f1,_1;if(Y){let J1=p3[Y];I=J1.vertexShader,j=J1.fragmentShader}else I=M.vertexShader,j=M.fragmentShader,o.update(M),f1=o.getVertexShaderID(M),_1=o.getFragmentShaderID(M);let g1=a.getRenderTarget(),u1=w.isInstancedMesh===!0,Y1=w.isBatchedMesh===!0,y1=!!M.map,E=!!M.matcap,C2=!!B,z1=!!M.aoMap,D1=!!M.lightMap,C1=!!M.bumpMap,B1=!!M.normalMap,R1=!!M.displacementMap,I1=!!M.emissiveMap,o2=!!M.metalnessMap,b=!!M.roughnessMap,v=M.anisotropy>0,O=M.clearcoat>0,W=M.iridescence>0,J=M.sheen>0,Z=M.transmission>0,A1=v&&!!M.anisotropyMap,b1=O&&!!M.clearcoatMap,n1=O&&!!M.clearcoatNormalMap,r1=O&&!!M.clearcoatRoughnessMap,T1=W&&!!M.iridescenceMap,Q=W&&!!M.iridescenceThicknessMap,d2=J&&!!M.sheenColorMap,F1=J&&!!M.sheenRoughnessMap,M1=!!M.specularMap,p1=!!M.specularColorMap,m1=!!M.specularIntensityMap,G1=Z&&!!M.transmissionMap,S1=Z&&!!M.thicknessMap,n2=!!M.gradientMap,L=!!M.alphaMap,c1=M.alphaTest>0,P=!!M.alphaHash,t1=!!M.extensions,s1=n4;M.toneMapped&&(g1===null||g1.isXRRenderTarget===!0)&&(s1=a.toneMapping);let O1={isWebGL2:h,shaderID:Y,shaderType:M.type,shaderName:M.name,vertexShader:I,fragmentShader:j,defines:M.defines,customVertexShaderID:f1,customFragmentShaderID:_1,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:g,batching:Y1,instancing:u1,instancingColor:u1&&w.instanceColor!==null,instancingMorph:u1&&w.morphTexture!==null,supportsVertexTextures:m,outputColorSpace:g1===null?a.outputColorSpace:g1.isXRRenderTarget===!0?g1.texture.colorSpace:f4,alphaToCoverage:!!M.alphaToCoverage,map:y1,matcap:E,envMap:C2,envMapMode:C2&&B.mapping,envMapCubeUVHeight:q,aoMap:z1,lightMap:D1,bumpMap:C1,normalMap:B1,displacementMap:m&&R1,emissiveMap:I1,normalMapObjectSpace:B1&&M.normalMapType===pc,normalMapTangentSpace:B1&&M.normalMapType===dc,metalnessMap:o2,roughnessMap:b,anisotropy:v,anisotropyMap:A1,clearcoat:O,clearcoatMap:b1,clearcoatNormalMap:n1,clearcoatRoughnessMap:r1,iridescence:W,iridescenceMap:T1,iridescenceThicknessMap:Q,sheen:J,sheenColorMap:d2,sheenRoughnessMap:F1,specularMap:M1,specularColorMap:p1,specularIntensityMap:m1,transmission:Z,transmissionMap:G1,thicknessMap:S1,gradientMap:n2,opaque:M.transparent===!1&&M.blending===d6&&M.alphaToCoverage===!1,alphaMap:L,alphaTest:c1,alphaHash:P,combine:M.combine,mapUv:y1&&p(M.map.channel),aoMapUv:z1&&p(M.aoMap.channel),lightMapUv:D1&&p(M.lightMap.channel),bumpMapUv:C1&&p(M.bumpMap.channel),normalMapUv:B1&&p(M.normalMap.channel),displacementMapUv:R1&&p(M.displacementMap.channel),emissiveMapUv:I1&&p(M.emissiveMap.channel),metalnessMapUv:o2&&p(M.metalnessMap.channel),roughnessMapUv:b&&p(M.roughnessMap.channel),anisotropyMapUv:A1&&p(M.anisotropyMap.channel),clearcoatMapUv:b1&&p(M.clearcoatMap.channel),clearcoatNormalMapUv:n1&&p(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:r1&&p(M.clearcoatRoughnessMap.channel),iridescenceMapUv:T1&&p(M.iridescenceMap.channel),iridescenceThicknessMapUv:Q&&p(M.iridescenceThicknessMap.channel),sheenColorMapUv:d2&&p(M.sheenColorMap.channel),sheenRoughnessMapUv:F1&&p(M.sheenRoughnessMap.channel),specularMapUv:M1&&p(M.specularMap.channel),specularColorMapUv:p1&&p(M.specularColorMap.channel),specularIntensityMapUv:m1&&p(M.specularIntensityMap.channel),transmissionMapUv:G1&&p(M.transmissionMap.channel),thicknessMapUv:S1&&p(M.thicknessMap.channel),alphaMapUv:L&&p(M.alphaMap.channel),vertexTangents:!!U.attributes.tangent&&(B1||v),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!U.attributes.color&&U.attributes.color.itemSize===4,pointsUvs:w.isPoints===!0&&!!U.attributes.uv&&(y1||L),fog:!!G,useFog:M.fog===!0,fogExp2:!!G&&G.isFogExp2,flatShading:M.flatShading===!0,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:d,skinning:w.isSkinnedMesh===!0,morphTargets:U.morphAttributes.position!==void 0,morphNormals:U.morphAttributes.normal!==void 0,morphColors:U.morphAttributes.color!==void 0,morphTargetsCount:h1,morphTextureStride:w1,numDirLights:y.directional.length,numPointLights:y.point.length,numSpotLights:y.spot.length,numSpotLightMaps:y.spotLightMap.length,numRectAreaLights:y.rectArea.length,numHemiLights:y.hemi.length,numDirLightShadows:y.directionalShadowMap.length,numPointLightShadows:y.pointShadowMap.length,numSpotLightShadows:y.spotShadowMap.length,numSpotLightShadowsWithMaps:y.numSpotLightShadowsWithMaps,numLightProbes:y.numLightProbes,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:M.dithering,shadowMapEnabled:a.shadowMap.enabled&&e1.length>0,shadowMapType:a.shadowMap.type,toneMapping:s1,useLegacyLights:a._useLegacyLights,decodeVideoTexture:y1&&M.map.isVideoTexture===!0&&j1.getTransfer(M.map.colorSpace)===t2,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===N3,flipSided:M.side===F2,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionDerivatives:t1&&M.extensions.derivatives===!0,extensionFragDepth:t1&&M.extensions.fragDepth===!0,extensionDrawBuffers:t1&&M.extensions.drawBuffers===!0,extensionShaderTextureLOD:t1&&M.extensions.shaderTextureLOD===!0,extensionClipCullDistance:t1&&M.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:t1&&M.extensions.multiDraw===!0&&i.has("WEBGL_multi_draw"),rendererExtensionFragDepth:h||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:h||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:h||i.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()};return O1.vertexUv1s=l.has(1),O1.vertexUv2s=l.has(2),O1.vertexUv3s=l.has(3),l.clear(),O1}function _(M){let y=[];if(M.shaderID?y.push(M.shaderID):(y.push(M.customVertexShaderID),y.push(M.customFragmentShaderID)),M.defines!==void 0)for(let e1 in M.defines)y.push(e1),y.push(M.defines[e1]);return M.isRawShaderMaterial===!1&&(C(y,M),H(y,M),y.push(a.outputColorSpace)),y.push(M.customProgramCacheKey),y.join()}function C(M,y){M.push(y.precision),M.push(y.outputColorSpace),M.push(y.envMapMode),M.push(y.envMapCubeUVHeight),M.push(y.mapUv),M.push(y.alphaMapUv),M.push(y.lightMapUv),M.push(y.aoMapUv),M.push(y.bumpMapUv),M.push(y.normalMapUv),M.push(y.displacementMapUv),M.push(y.emissiveMapUv),M.push(y.metalnessMapUv),M.push(y.roughnessMapUv),M.push(y.anisotropyMapUv),M.push(y.clearcoatMapUv),M.push(y.clearcoatNormalMapUv),M.push(y.clearcoatRoughnessMapUv),M.push(y.iridescenceMapUv),M.push(y.iridescenceThicknessMapUv),M.push(y.sheenColorMapUv),M.push(y.sheenRoughnessMapUv),M.push(y.specularMapUv),M.push(y.specularColorMapUv),M.push(y.specularIntensityMapUv),M.push(y.transmissionMapUv),M.push(y.thicknessMapUv),M.push(y.combine),M.push(y.fogExp2),M.push(y.sizeAttenuation),M.push(y.morphTargetsCount),M.push(y.morphAttributeCount),M.push(y.numDirLights),M.push(y.numPointLights),M.push(y.numSpotLights),M.push(y.numSpotLightMaps),M.push(y.numHemiLights),M.push(y.numRectAreaLights),M.push(y.numDirLightShadows),M.push(y.numPointLightShadows),M.push(y.numSpotLightShadows),M.push(y.numSpotLightShadowsWithMaps),M.push(y.numLightProbes),M.push(y.shadowMapType),M.push(y.toneMapping),M.push(y.numClippingPlanes),M.push(y.numClipIntersection),M.push(y.depthPacking)}function H(M,y){s.disableAll(),y.isWebGL2&&s.enable(0),y.supportsVertexTextures&&s.enable(1),y.instancing&&s.enable(2),y.instancingColor&&s.enable(3),y.instancingMorph&&s.enable(4),y.matcap&&s.enable(5),y.envMap&&s.enable(6),y.normalMapObjectSpace&&s.enable(7),y.normalMapTangentSpace&&s.enable(8),y.clearcoat&&s.enable(9),y.iridescence&&s.enable(10),y.alphaTest&&s.enable(11),y.vertexColors&&s.enable(12),y.vertexAlphas&&s.enable(13),y.vertexUv1s&&s.enable(14),y.vertexUv2s&&s.enable(15),y.vertexUv3s&&s.enable(16),y.vertexTangents&&s.enable(17),y.anisotropy&&s.enable(18),y.alphaHash&&s.enable(19),y.batching&&s.enable(20),M.push(s.mask),s.disableAll(),y.fog&&s.enable(0),y.useFog&&s.enable(1),y.flatShading&&s.enable(2),y.logarithmicDepthBuffer&&s.enable(3),y.skinning&&s.enable(4),y.morphTargets&&s.enable(5),y.morphNormals&&s.enable(6),y.morphColors&&s.enable(7),y.premultipliedAlpha&&s.enable(8),y.shadowMapEnabled&&s.enable(9),y.useLegacyLights&&s.enable(10),y.doubleSided&&s.enable(11),y.flipSided&&s.enable(12),y.useDepthPacking&&s.enable(13),y.dithering&&s.enable(14),y.transmission&&s.enable(15),y.sheen&&s.enable(16),y.opaque&&s.enable(17),y.pointsUvs&&s.enable(18),y.decodeVideoTexture&&s.enable(19),y.alphaToCoverage&&s.enable(20),M.push(s.mask)}function A(M){let y=z[M.type],e1;if(y){let K=p3[y];e1=_8.clone(K.uniforms)}else e1=M.uniforms;return e1}function S(M,y){let e1;for(let K=0,w=f.length;K<w;K++){let G=f[K];if(G.cacheKey===y){e1=G,++e1.usedTimes;break}}return e1===void 0&&(e1=new Jo(a,y,M,c),f.push(e1)),e1}function V(M){if(--M.usedTimes===0){let y=f.indexOf(M);f[y]=f[f.length-1],f.pop(),M.destroy()}}function F(M){o.remove(M)}function $(){o.dispose()}return{getParameters:u,getProgramCacheKey:_,getUniforms:A,acquireProgram:S,releaseProgram:V,releaseShaderCache:F,programs:f,dispose:$}}function el(){let a=new WeakMap;function e(c){let r=a.get(c);return r===void 0&&(r={},a.set(c,r)),r}function t(c){a.delete(c)}function i(c,r,s){a.get(c)[r]=s}function n(){a=new WeakMap}return{get:e,remove:t,update:i,dispose:n}}function tl(a,e){return a.groupOrder!==e.groupOrder?a.groupOrder-e.groupOrder:a.renderOrder!==e.renderOrder?a.renderOrder-e.renderOrder:a.material.id!==e.material.id?a.material.id-e.material.id:a.z!==e.z?a.z-e.z:a.id-e.id}function pi(a,e){return a.groupOrder!==e.groupOrder?a.groupOrder-e.groupOrder:a.renderOrder!==e.renderOrder?a.renderOrder-e.renderOrder:a.z!==e.z?e.z-a.z:a.id-e.id}function mi(){let a=[],e=0,t=[],i=[],n=[];function c(){e=0,t.length=0,i.length=0,n.length=0}function r(h,d,m,g,z,p){let u=a[e];return u===void 0?(u={id:h.id,object:h,geometry:d,material:m,groupOrder:g,renderOrder:h.renderOrder,z,group:p},a[e]=u):(u.id=h.id,u.object=h,u.geometry=d,u.material=m,u.groupOrder=g,u.renderOrder=h.renderOrder,u.z=z,u.group=p),e++,u}function s(h,d,m,g,z,p){let u=r(h,d,m,g,z,p);m.transmission>0?i.push(u):m.transparent===!0?n.push(u):t.push(u)}function o(h,d,m,g,z,p){let u=r(h,d,m,g,z,p);m.transmission>0?i.unshift(u):m.transparent===!0?n.unshift(u):t.unshift(u)}function l(h,d){t.length>1&&t.sort(h||tl),i.length>1&&i.sort(d||pi),n.length>1&&n.sort(d||pi)}function f(){for(let h=e,d=a.length;h<d;h++){let m=a[h];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:i,transparent:n,init:c,push:s,unshift:o,finish:f,sort:l}}function il(){let a=new WeakMap;function e(i,n){let c=a.get(i),r;return c===void 0?(r=new mi,a.set(i,[r])):n>=c.length?(r=new mi,c.push(r)):r=c[n],r}function t(){a=new WeakMap}return{get:e,dispose:t}}function al(){let a={};return{get:function(e){if(a[e.id]!==void 0)return a[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new k,color:new q1};break;case"SpotLight":t={position:new k,direction:new k,color:new q1,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new k,color:new q1,distance:0,decay:0};break;case"HemisphereLight":t={direction:new k,skyColor:new q1,groundColor:new q1};break;case"RectAreaLight":t={color:new q1,position:new k,halfWidth:new k,halfHeight:new k};break}return a[e.id]=t,t}}}function nl(){let a={};return{get:function(e){if(a[e.id]!==void 0)return a[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new W1};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new W1};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new W1,shadowCameraNear:1,shadowCameraFar:1e3};break}return a[e.id]=t,t}}}var cl=0;function rl(a,e){return(e.castShadow?2:0)-(a.castShadow?2:0)+(e.map?1:0)-(a.map?1:0)}function sl(a,e){let t=new al,i=nl(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let f=0;f<9;f++)n.probe.push(new k);let c=new k,r=new x2,s=new x2;function o(f,h){let d=0,m=0,g=0;for(let e1=0;e1<9;e1++)n.probe[e1].set(0,0,0);let z=0,p=0,u=0,_=0,C=0,H=0,A=0,S=0,V=0,F=0,$=0;f.sort(rl);let M=h===!0?Math.PI:1;for(let e1=0,K=f.length;e1<K;e1++){let w=f[e1],G=w.color,U=w.intensity,X=w.distance,B=w.shadow&&w.shadow.map?w.shadow.map.texture:null;if(w.isAmbientLight)d+=G.r*U*M,m+=G.g*U*M,g+=G.b*U*M;else if(w.isLightProbe){for(let q=0;q<9;q++)n.probe[q].addScaledVector(w.sh.coefficients[q],U);$++}else if(w.isDirectionalLight){let q=t.get(w);if(q.color.copy(w.color).multiplyScalar(w.intensity*M),w.castShadow){let Y=w.shadow,a1=i.get(w);a1.shadowBias=Y.bias,a1.shadowNormalBias=Y.normalBias,a1.shadowRadius=Y.radius,a1.shadowMapSize=Y.mapSize,n.directionalShadow[z]=a1,n.directionalShadowMap[z]=B,n.directionalShadowMatrix[z]=w.shadow.matrix,H++}n.directional[z]=q,z++}else if(w.isSpotLight){let q=t.get(w);q.position.setFromMatrixPosition(w.matrixWorld),q.color.copy(G).multiplyScalar(U*M),q.distance=X,q.coneCos=Math.cos(w.angle),q.penumbraCos=Math.cos(w.angle*(1-w.penumbra)),q.decay=w.decay,n.spot[u]=q;let Y=w.shadow;if(w.map&&(n.spotLightMap[V]=w.map,V++,Y.updateMatrices(w),w.castShadow&&F++),n.spotLightMatrix[u]=Y.matrix,w.castShadow){let a1=i.get(w);a1.shadowBias=Y.bias,a1.shadowNormalBias=Y.normalBias,a1.shadowRadius=Y.radius,a1.shadowMapSize=Y.mapSize,n.spotShadow[u]=a1,n.spotShadowMap[u]=B,S++}u++}else if(w.isRectAreaLight){let q=t.get(w);q.color.copy(G).multiplyScalar(U),q.halfWidth.set(w.width*.5,0,0),q.halfHeight.set(0,w.height*.5,0),n.rectArea[_]=q,_++}else if(w.isPointLight){let q=t.get(w);if(q.color.copy(w.color).multiplyScalar(w.intensity*M),q.distance=w.distance,q.decay=w.decay,w.castShadow){let Y=w.shadow,a1=i.get(w);a1.shadowBias=Y.bias,a1.shadowNormalBias=Y.normalBias,a1.shadowRadius=Y.radius,a1.shadowMapSize=Y.mapSize,a1.shadowCameraNear=Y.camera.near,a1.shadowCameraFar=Y.camera.far,n.pointShadow[p]=a1,n.pointShadowMap[p]=B,n.pointShadowMatrix[p]=w.shadow.matrix,A++}n.point[p]=q,p++}else if(w.isHemisphereLight){let q=t.get(w);q.skyColor.copy(w.color).multiplyScalar(U*M),q.groundColor.copy(w.groundColor).multiplyScalar(U*M),n.hemi[C]=q,C++}}_>0&&(e.isWebGL2?a.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=i1.LTC_FLOAT_1,n.rectAreaLTC2=i1.LTC_FLOAT_2):(n.rectAreaLTC1=i1.LTC_HALF_1,n.rectAreaLTC2=i1.LTC_HALF_2):a.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=i1.LTC_FLOAT_1,n.rectAreaLTC2=i1.LTC_FLOAT_2):a.has("OES_texture_half_float_linear")===!0?(n.rectAreaLTC1=i1.LTC_HALF_1,n.rectAreaLTC2=i1.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),n.ambient[0]=d,n.ambient[1]=m,n.ambient[2]=g;let y=n.hash;(y.directionalLength!==z||y.pointLength!==p||y.spotLength!==u||y.rectAreaLength!==_||y.hemiLength!==C||y.numDirectionalShadows!==H||y.numPointShadows!==A||y.numSpotShadows!==S||y.numSpotMaps!==V||y.numLightProbes!==$)&&(n.directional.length=z,n.spot.length=u,n.rectArea.length=_,n.point.length=p,n.hemi.length=C,n.directionalShadow.length=H,n.directionalShadowMap.length=H,n.pointShadow.length=A,n.pointShadowMap.length=A,n.spotShadow.length=S,n.spotShadowMap.length=S,n.directionalShadowMatrix.length=H,n.pointShadowMatrix.length=A,n.spotLightMatrix.length=S+V-F,n.spotLightMap.length=V,n.numSpotLightShadowsWithMaps=F,n.numLightProbes=$,y.directionalLength=z,y.pointLength=p,y.spotLength=u,y.rectAreaLength=_,y.hemiLength=C,y.numDirectionalShadows=H,y.numPointShadows=A,y.numSpotShadows=S,y.numSpotMaps=V,y.numLightProbes=$,n.version=cl++)}function l(f,h){let d=0,m=0,g=0,z=0,p=0,u=h.matrixWorldInverse;for(let _=0,C=f.length;_<C;_++){let H=f[_];if(H.isDirectionalLight){let A=n.directional[d];A.direction.setFromMatrixPosition(H.matrixWorld),c.setFromMatrixPosition(H.target.matrixWorld),A.direction.sub(c),A.direction.transformDirection(u),d++}else if(H.isSpotLight){let A=n.spot[g];A.position.setFromMatrixPosition(H.matrixWorld),A.position.applyMatrix4(u),A.direction.setFromMatrixPosition(H.matrixWorld),c.setFromMatrixPosition(H.target.matrixWorld),A.direction.sub(c),A.direction.transformDirection(u),g++}else if(H.isRectAreaLight){let A=n.rectArea[z];A.position.setFromMatrixPosition(H.matrixWorld),A.position.applyMatrix4(u),s.identity(),r.copy(H.matrixWorld),r.premultiply(u),s.extractRotation(r),A.halfWidth.set(H.width*.5,0,0),A.halfHeight.set(0,H.height*.5,0),A.halfWidth.applyMatrix4(s),A.halfHeight.applyMatrix4(s),z++}else if(H.isPointLight){let A=n.point[m];A.position.setFromMatrixPosition(H.matrixWorld),A.position.applyMatrix4(u),m++}else if(H.isHemisphereLight){let A=n.hemi[p];A.direction.setFromMatrixPosition(H.matrixWorld),A.direction.transformDirection(u),p++}}}return{setup:o,setupView:l,state:n}}function vi(a,e){let t=new sl(a,e),i=[],n=[];function c(){i.length=0,n.length=0}function r(h){i.push(h)}function s(h){n.push(h)}function o(h){t.setup(i,h)}function l(h){t.setupView(i,h)}return{init:c,state:{lightsArray:i,shadowsArray:n,lights:t},setupLights:o,setupLightsView:l,pushLight:r,pushShadow:s}}function ol(a,e){let t=new WeakMap;function i(c,r=0){let s=t.get(c),o;return s===void 0?(o=new vi(a,e),t.set(c,[o])):r>=s.length?(o=new vi(a,e),s.push(o)):o=s[r],o}function n(){t=new WeakMap}return{get:i,dispose:n}}var s8=class extends x6{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=hc,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},o8=class extends x6{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}},ll=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,fl=`uniform sampler2D shadow_pass;
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
}`;function hl(a,e,t){let i=new M0,n=new W1,c=new W1,r=new _2,s=new s8({depthPacking:uc}),o=new o8,l={},f=t.maxTextureSize,h={[r4]:F2,[F2]:r4,[N3]:N3},d=new V2({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new W1},radius:{value:4}},vertexShader:ll,fragmentShader:fl}),m=d.clone();m.defines.HORIZONTAL_PASS=1;let g=new k3;g.setAttribute("position",new J2(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let z=new y2(g,d),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Mi;let u=this.type;this.render=function(S,V,F){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||S.length===0)return;let $=a.getRenderTarget(),M=a.getActiveCubeFace(),y=a.getActiveMipmapLevel(),e1=a.state;e1.setBlending(m3),e1.buffers.color.setClear(1,1,1,1),e1.buffers.depth.setTest(!0),e1.setScissorTest(!1);let K=u!==T3&&this.type===T3,w=u===T3&&this.type!==T3;for(let G=0,U=S.length;G<U;G++){let X=S[G],B=X.shadow;if(B===void 0){console.warn("THREE.WebGLShadowMap:",X,"has no shadow.");continue}if(B.autoUpdate===!1&&B.needsUpdate===!1)continue;n.copy(B.mapSize);let q=B.getFrameExtents();if(n.multiply(q),c.copy(B.mapSize),(n.x>f||n.y>f)&&(n.x>f&&(c.x=Math.floor(f/q.x),n.x=c.x*q.x,B.mapSize.x=c.x),n.y>f&&(c.y=Math.floor(f/q.y),n.y=c.y*q.y,B.mapSize.y=c.y)),B.map===null||K===!0||w===!0){let a1=this.type!==T3?{minFilter:P2,magFilter:P2}:{};B.map!==null&&B.map.dispose(),B.map=new s3(n.x,n.y,a1),B.map.texture.name=X.name+".shadowMap",B.camera.updateProjectionMatrix()}a.setRenderTarget(B.map),a.clear();let Y=B.getViewportCount();for(let a1=0;a1<Y;a1++){let h1=B.getViewport(a1);r.set(c.x*h1.x,c.y*h1.y,c.x*h1.z,c.y*h1.w),e1.viewport(r),B.updateMatrices(X,a1),i=B.getFrustum(),H(V,F,B.camera,X,this.type)}B.isPointLightShadow!==!0&&this.type===T3&&_(B,F),B.needsUpdate=!1}u=this.type,p.needsUpdate=!1,a.setRenderTarget($,M,y)};function _(S,V){let F=e.update(z);d.defines.VSM_SAMPLES!==S.blurSamples&&(d.defines.VSM_SAMPLES=S.blurSamples,m.defines.VSM_SAMPLES=S.blurSamples,d.needsUpdate=!0,m.needsUpdate=!0),S.mapPass===null&&(S.mapPass=new s3(n.x,n.y)),d.uniforms.shadow_pass.value=S.map.texture,d.uniforms.resolution.value=S.mapSize,d.uniforms.radius.value=S.radius,a.setRenderTarget(S.mapPass),a.clear(),a.renderBufferDirect(V,null,F,d,z,null),m.uniforms.shadow_pass.value=S.mapPass.texture,m.uniforms.resolution.value=S.mapSize,m.uniforms.radius.value=S.radius,a.setRenderTarget(S.map),a.clear(),a.renderBufferDirect(V,null,F,m,z,null)}function C(S,V,F,$){let M=null,y=F.isPointLight===!0?S.customDistanceMaterial:S.customDepthMaterial;if(y!==void 0)M=y;else if(M=F.isPointLight===!0?o:s,a.localClippingEnabled&&V.clipShadows===!0&&Array.isArray(V.clippingPlanes)&&V.clippingPlanes.length!==0||V.displacementMap&&V.displacementScale!==0||V.alphaMap&&V.alphaTest>0||V.map&&V.alphaTest>0){let e1=M.uuid,K=V.uuid,w=l[e1];w===void 0&&(w={},l[e1]=w);let G=w[K];G===void 0&&(G=M.clone(),w[K]=G,V.addEventListener("dispose",A)),M=G}if(M.visible=V.visible,M.wireframe=V.wireframe,$===T3?M.side=V.shadowSide!==null?V.shadowSide:V.side:M.side=V.shadowSide!==null?V.shadowSide:h[V.side],M.alphaMap=V.alphaMap,M.alphaTest=V.alphaTest,M.map=V.map,M.clipShadows=V.clipShadows,M.clippingPlanes=V.clippingPlanes,M.clipIntersection=V.clipIntersection,M.displacementMap=V.displacementMap,M.displacementScale=V.displacementScale,M.displacementBias=V.displacementBias,M.wireframeLinewidth=V.wireframeLinewidth,M.linewidth=V.linewidth,F.isPointLight===!0&&M.isMeshDistanceMaterial===!0){let e1=a.properties.get(M);e1.light=F}return M}function H(S,V,F,$,M){if(S.visible===!1)return;if(S.layers.test(V.layers)&&(S.isMesh||S.isLine||S.isPoints)&&(S.castShadow||S.receiveShadow&&M===T3)&&(!S.frustumCulled||i.intersectsObject(S))){S.modelViewMatrix.multiplyMatrices(F.matrixWorldInverse,S.matrixWorld);let K=e.update(S),w=S.material;if(Array.isArray(w)){let G=K.groups;for(let U=0,X=G.length;U<X;U++){let B=G[U],q=w[B.materialIndex];if(q&&q.visible){let Y=C(S,q,$,M);S.onBeforeShadow(a,S,V,F,K,Y,B),a.renderBufferDirect(F,null,K,Y,S,B),S.onAfterShadow(a,S,V,F,K,Y,B)}}}else if(w.visible){let G=C(S,w,$,M);S.onBeforeShadow(a,S,V,F,K,G,null),a.renderBufferDirect(F,null,K,G,S,null),S.onAfterShadow(a,S,V,F,K,G,null)}}let e1=S.children;for(let K=0,w=e1.length;K<w;K++)H(e1[K],V,F,$,M)}function A(S){S.target.removeEventListener("dispose",A);for(let F in l){let $=l[F],M=S.target.uuid;M in $&&($[M].dispose(),delete $[M])}}}function ul(a,e,t){let i=t.isWebGL2;function n(){let L=!1,c1=new _2,P=null,t1=new _2(0,0,0,0);return{setMask:function(s1){P!==s1&&!L&&(a.colorMask(s1,s1,s1,s1),P=s1)},setLocked:function(s1){L=s1},setClear:function(s1,O1,J1,b2,Y2){Y2===!0&&(s1*=b2,O1*=b2,J1*=b2),c1.set(s1,O1,J1,b2),t1.equals(c1)===!1&&(a.clearColor(s1,O1,J1,b2),t1.copy(c1))},reset:function(){L=!1,P=null,t1.set(-1,0,0,0)}}}function c(){let L=!1,c1=null,P=null,t1=null;return{setTest:function(s1){s1?u1(a.DEPTH_TEST):Y1(a.DEPTH_TEST)},setMask:function(s1){c1!==s1&&!L&&(a.depthMask(s1),c1=s1)},setFunc:function(s1){if(P!==s1){switch(s1){case Un:a.depthFunc(a.NEVER);break;case Bn:a.depthFunc(a.ALWAYS);break;case Gn:a.depthFunc(a.LESS);break;case t0:a.depthFunc(a.LEQUAL);break;case Wn:a.depthFunc(a.EQUAL);break;case qn:a.depthFunc(a.GEQUAL);break;case Xn:a.depthFunc(a.GREATER);break;case Yn:a.depthFunc(a.NOTEQUAL);break;default:a.depthFunc(a.LEQUAL)}P=s1}},setLocked:function(s1){L=s1},setClear:function(s1){t1!==s1&&(a.clearDepth(s1),t1=s1)},reset:function(){L=!1,c1=null,P=null,t1=null}}}function r(){let L=!1,c1=null,P=null,t1=null,s1=null,O1=null,J1=null,b2=null,Y2=null;return{setTest:function(K1){L||(K1?u1(a.STENCIL_TEST):Y1(a.STENCIL_TEST))},setMask:function(K1){c1!==K1&&!L&&(a.stencilMask(K1),c1=K1)},setFunc:function(K1,A2,f3){(P!==K1||t1!==A2||s1!==f3)&&(a.stencilFunc(K1,A2,f3),P=K1,t1=A2,s1=f3)},setOp:function(K1,A2,f3){(O1!==K1||J1!==A2||b2!==f3)&&(a.stencilOp(K1,A2,f3),O1=K1,J1=A2,b2=f3)},setLocked:function(K1){L=K1},setClear:function(K1){Y2!==K1&&(a.clearStencil(K1),Y2=K1)},reset:function(){L=!1,c1=null,P=null,t1=null,s1=null,O1=null,J1=null,b2=null,Y2=null}}}let s=new n,o=new c,l=new r,f=new WeakMap,h=new WeakMap,d={},m={},g=new WeakMap,z=[],p=null,u=!1,_=null,C=null,H=null,A=null,S=null,V=null,F=null,$=new q1(0,0,0),M=0,y=!1,e1=null,K=null,w=null,G=null,U=null,X=a.getParameter(a.MAX_COMBINED_TEXTURE_IMAGE_UNITS),B=!1,q=0,Y=a.getParameter(a.VERSION);Y.indexOf("WebGL")!==-1?(q=parseFloat(/^WebGL (\d)/.exec(Y)[1]),B=q>=1):Y.indexOf("OpenGL ES")!==-1&&(q=parseFloat(/^OpenGL ES (\d)/.exec(Y)[1]),B=q>=2);let a1=null,h1={},w1=a.getParameter(a.SCISSOR_BOX),I=a.getParameter(a.VIEWPORT),j=new _2().fromArray(w1),f1=new _2().fromArray(I);function _1(L,c1,P,t1){let s1=new Uint8Array(4),O1=a.createTexture();a.bindTexture(L,O1),a.texParameteri(L,a.TEXTURE_MIN_FILTER,a.NEAREST),a.texParameteri(L,a.TEXTURE_MAG_FILTER,a.NEAREST);for(let J1=0;J1<P;J1++)i&&(L===a.TEXTURE_3D||L===a.TEXTURE_2D_ARRAY)?a.texImage3D(c1,0,a.RGBA,1,1,t1,0,a.RGBA,a.UNSIGNED_BYTE,s1):a.texImage2D(c1+J1,0,a.RGBA,1,1,0,a.RGBA,a.UNSIGNED_BYTE,s1);return O1}let g1={};g1[a.TEXTURE_2D]=_1(a.TEXTURE_2D,a.TEXTURE_2D,1),g1[a.TEXTURE_CUBE_MAP]=_1(a.TEXTURE_CUBE_MAP,a.TEXTURE_CUBE_MAP_POSITIVE_X,6),i&&(g1[a.TEXTURE_2D_ARRAY]=_1(a.TEXTURE_2D_ARRAY,a.TEXTURE_2D_ARRAY,1,1),g1[a.TEXTURE_3D]=_1(a.TEXTURE_3D,a.TEXTURE_3D,1,1)),s.setClear(0,0,0,1),o.setClear(1),l.setClear(0),u1(a.DEPTH_TEST),o.setFunc(t0),R1(!1),I1(X5),u1(a.CULL_FACE),C1(m3);function u1(L){d[L]!==!0&&(a.enable(L),d[L]=!0)}function Y1(L){d[L]!==!1&&(a.disable(L),d[L]=!1)}function y1(L,c1){return m[L]!==c1?(a.bindFramebuffer(L,c1),m[L]=c1,i&&(L===a.DRAW_FRAMEBUFFER&&(m[a.FRAMEBUFFER]=c1),L===a.FRAMEBUFFER&&(m[a.DRAW_FRAMEBUFFER]=c1)),!0):!1}function E(L,c1){let P=z,t1=!1;if(L){P=g.get(c1),P===void 0&&(P=[],g.set(c1,P));let s1=L.textures;if(P.length!==s1.length||P[0]!==a.COLOR_ATTACHMENT0){for(let O1=0,J1=s1.length;O1<J1;O1++)P[O1]=a.COLOR_ATTACHMENT0+O1;P.length=s1.length,t1=!0}}else P[0]!==a.BACK&&(P[0]=a.BACK,t1=!0);if(t1)if(t.isWebGL2)a.drawBuffers(P);else if(e.has("WEBGL_draw_buffers")===!0)e.get("WEBGL_draw_buffers").drawBuffersWEBGL(P);else throw new Error("THREE.WebGLState: Usage of gl.drawBuffers() require WebGL2 or WEBGL_draw_buffers extension")}function C2(L){return p!==L?(a.useProgram(L),p=L,!0):!1}let z1={[S4]:a.FUNC_ADD,[Vn]:a.FUNC_SUBTRACT,[Sn]:a.FUNC_REVERSE_SUBTRACT};if(i)z1[j5]=a.MIN,z1[J5]=a.MAX;else{let L=e.get("EXT_blend_minmax");L!==null&&(z1[j5]=L.MIN_EXT,z1[J5]=L.MAX_EXT)}let D1={[Ln]:a.ZERO,[wn]:a.ONE,[An]:a.SRC_COLOR,[Ut]:a.SRC_ALPHA,[kn]:a.SRC_ALPHA_SATURATE,[Pn]:a.DST_COLOR,[En]:a.DST_ALPHA,[Tn]:a.ONE_MINUS_SRC_COLOR,[Bt]:a.ONE_MINUS_SRC_ALPHA,[Rn]:a.ONE_MINUS_DST_COLOR,[Nn]:a.ONE_MINUS_DST_ALPHA,[Dn]:a.CONSTANT_COLOR,[In]:a.ONE_MINUS_CONSTANT_COLOR,[Fn]:a.CONSTANT_ALPHA,[On]:a.ONE_MINUS_CONSTANT_ALPHA};function C1(L,c1,P,t1,s1,O1,J1,b2,Y2,K1){if(L===m3){u===!0&&(Y1(a.BLEND),u=!1);return}if(u===!1&&(u1(a.BLEND),u=!0),L!==yn){if(L!==_||K1!==y){if((C!==S4||S!==S4)&&(a.blendEquation(a.FUNC_ADD),C=S4,S=S4),K1)switch(L){case d6:a.blendFuncSeparate(a.ONE,a.ONE_MINUS_SRC_ALPHA,a.ONE,a.ONE_MINUS_SRC_ALPHA);break;case Y5:a.blendFunc(a.ONE,a.ONE);break;case Z5:a.blendFuncSeparate(a.ZERO,a.ONE_MINUS_SRC_COLOR,a.ZERO,a.ONE);break;case $5:a.blendFuncSeparate(a.ZERO,a.SRC_COLOR,a.ZERO,a.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}else switch(L){case d6:a.blendFuncSeparate(a.SRC_ALPHA,a.ONE_MINUS_SRC_ALPHA,a.ONE,a.ONE_MINUS_SRC_ALPHA);break;case Y5:a.blendFunc(a.SRC_ALPHA,a.ONE);break;case Z5:a.blendFuncSeparate(a.ZERO,a.ONE_MINUS_SRC_COLOR,a.ZERO,a.ONE);break;case $5:a.blendFunc(a.ZERO,a.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}H=null,A=null,V=null,F=null,$.set(0,0,0),M=0,_=L,y=K1}return}s1=s1||c1,O1=O1||P,J1=J1||t1,(c1!==C||s1!==S)&&(a.blendEquationSeparate(z1[c1],z1[s1]),C=c1,S=s1),(P!==H||t1!==A||O1!==V||J1!==F)&&(a.blendFuncSeparate(D1[P],D1[t1],D1[O1],D1[J1]),H=P,A=t1,V=O1,F=J1),(b2.equals($)===!1||Y2!==M)&&(a.blendColor(b2.r,b2.g,b2.b,Y2),$.copy(b2),M=Y2),_=L,y=!1}function B1(L,c1){L.side===N3?Y1(a.CULL_FACE):u1(a.CULL_FACE);let P=L.side===F2;c1&&(P=!P),R1(P),L.blending===d6&&L.transparent===!1?C1(m3):C1(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.blendColor,L.blendAlpha,L.premultipliedAlpha),o.setFunc(L.depthFunc),o.setTest(L.depthTest),o.setMask(L.depthWrite),s.setMask(L.colorWrite);let t1=L.stencilWrite;l.setTest(t1),t1&&(l.setMask(L.stencilWriteMask),l.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),l.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),b(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?u1(a.SAMPLE_ALPHA_TO_COVERAGE):Y1(a.SAMPLE_ALPHA_TO_COVERAGE)}function R1(L){e1!==L&&(L?a.frontFace(a.CW):a.frontFace(a.CCW),e1=L)}function I1(L){L!==bn?(u1(a.CULL_FACE),L!==K&&(L===X5?a.cullFace(a.BACK):L===Hn?a.cullFace(a.FRONT):a.cullFace(a.FRONT_AND_BACK))):Y1(a.CULL_FACE),K=L}function o2(L){L!==w&&(B&&a.lineWidth(L),w=L)}function b(L,c1,P){L?(u1(a.POLYGON_OFFSET_FILL),(G!==c1||U!==P)&&(a.polygonOffset(c1,P),G=c1,U=P)):Y1(a.POLYGON_OFFSET_FILL)}function v(L){L?u1(a.SCISSOR_TEST):Y1(a.SCISSOR_TEST)}function O(L){L===void 0&&(L=a.TEXTURE0+X-1),a1!==L&&(a.activeTexture(L),a1=L)}function W(L,c1,P){P===void 0&&(a1===null?P=a.TEXTURE0+X-1:P=a1);let t1=h1[P];t1===void 0&&(t1={type:void 0,texture:void 0},h1[P]=t1),(t1.type!==L||t1.texture!==c1)&&(a1!==P&&(a.activeTexture(P),a1=P),a.bindTexture(L,c1||g1[L]),t1.type=L,t1.texture=c1)}function J(){let L=h1[a1];L!==void 0&&L.type!==void 0&&(a.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function Z(){try{a.compressedTexImage2D.apply(a,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function A1(){try{a.compressedTexImage3D.apply(a,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function b1(){try{a.texSubImage2D.apply(a,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function n1(){try{a.texSubImage3D.apply(a,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function r1(){try{a.compressedTexSubImage2D.apply(a,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function T1(){try{a.compressedTexSubImage3D.apply(a,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Q(){try{a.texStorage2D.apply(a,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function d2(){try{a.texStorage3D.apply(a,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function F1(){try{a.texImage2D.apply(a,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function M1(){try{a.texImage3D.apply(a,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function p1(L){j.equals(L)===!1&&(a.scissor(L.x,L.y,L.z,L.w),j.copy(L))}function m1(L){f1.equals(L)===!1&&(a.viewport(L.x,L.y,L.z,L.w),f1.copy(L))}function G1(L,c1){let P=h.get(c1);P===void 0&&(P=new WeakMap,h.set(c1,P));let t1=P.get(L);t1===void 0&&(t1=a.getUniformBlockIndex(c1,L.name),P.set(L,t1))}function S1(L,c1){let t1=h.get(c1).get(L);f.get(c1)!==t1&&(a.uniformBlockBinding(c1,t1,L.__bindingPointIndex),f.set(c1,t1))}function n2(){a.disable(a.BLEND),a.disable(a.CULL_FACE),a.disable(a.DEPTH_TEST),a.disable(a.POLYGON_OFFSET_FILL),a.disable(a.SCISSOR_TEST),a.disable(a.STENCIL_TEST),a.disable(a.SAMPLE_ALPHA_TO_COVERAGE),a.blendEquation(a.FUNC_ADD),a.blendFunc(a.ONE,a.ZERO),a.blendFuncSeparate(a.ONE,a.ZERO,a.ONE,a.ZERO),a.blendColor(0,0,0,0),a.colorMask(!0,!0,!0,!0),a.clearColor(0,0,0,0),a.depthMask(!0),a.depthFunc(a.LESS),a.clearDepth(1),a.stencilMask(4294967295),a.stencilFunc(a.ALWAYS,0,4294967295),a.stencilOp(a.KEEP,a.KEEP,a.KEEP),a.clearStencil(0),a.cullFace(a.BACK),a.frontFace(a.CCW),a.polygonOffset(0,0),a.activeTexture(a.TEXTURE0),a.bindFramebuffer(a.FRAMEBUFFER,null),i===!0&&(a.bindFramebuffer(a.DRAW_FRAMEBUFFER,null),a.bindFramebuffer(a.READ_FRAMEBUFFER,null)),a.useProgram(null),a.lineWidth(1),a.scissor(0,0,a.canvas.width,a.canvas.height),a.viewport(0,0,a.canvas.width,a.canvas.height),d={},a1=null,h1={},m={},g=new WeakMap,z=[],p=null,u=!1,_=null,C=null,H=null,A=null,S=null,V=null,F=null,$=new q1(0,0,0),M=0,y=!1,e1=null,K=null,w=null,G=null,U=null,j.set(0,0,a.canvas.width,a.canvas.height),f1.set(0,0,a.canvas.width,a.canvas.height),s.reset(),o.reset(),l.reset()}return{buffers:{color:s,depth:o,stencil:l},enable:u1,disable:Y1,bindFramebuffer:y1,drawBuffers:E,useProgram:C2,setBlending:C1,setMaterial:B1,setFlipSided:R1,setCullFace:I1,setLineWidth:o2,setPolygonOffset:b,setScissorTest:v,activeTexture:O,bindTexture:W,unbindTexture:J,compressedTexImage2D:Z,compressedTexImage3D:A1,texImage2D:F1,texImage3D:M1,updateUBOMapping:G1,uniformBlockBinding:S1,texStorage2D:Q,texStorage3D:d2,texSubImage2D:b1,texSubImage3D:n1,compressedTexSubImage2D:r1,compressedTexSubImage3D:T1,scissor:p1,viewport:m1,reset:n2}}function dl(a,e,t,i,n,c,r){let s=n.isWebGL2,o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),f=new W1,h=new WeakMap,d,m=new WeakMap,g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function z(b,v){return g?new OffscreenCanvas(b,v):o0("canvas")}function p(b,v,O,W){let J=1,Z=o2(b);if((Z.width>W||Z.height>W)&&(J=W/Math.max(Z.width,Z.height)),J<1||v===!0)if(typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&b instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&b instanceof ImageBitmap||typeof VideoFrame<"u"&&b instanceof VideoFrame){let A1=v?$t:Math.floor,b1=A1(J*Z.width),n1=A1(J*Z.height);d===void 0&&(d=z(b1,n1));let r1=O?z(b1,n1):d;return r1.width=b1,r1.height=n1,r1.getContext("2d").drawImage(b,0,0,b1,n1),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Z.width+"x"+Z.height+") to ("+b1+"x"+n1+")."),r1}else return"data"in b&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Z.width+"x"+Z.height+")."),b;return b}function u(b){let v=o2(b);return T7(v.width)&&T7(v.height)}function _(b){return s?!1:b.wrapS!==c3||b.wrapT!==c3||b.minFilter!==P2&&b.minFilter!==D2}function C(b,v){return b.generateMipmaps&&v&&b.minFilter!==P2&&b.minFilter!==D2}function H(b){a.generateMipmap(b)}function A(b,v,O,W,J=!1){if(s===!1)return v;if(b!==null){if(a[b]!==void 0)return a[b];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+b+"'")}let Z=v;if(v===a.RED&&(O===a.FLOAT&&(Z=a.R32F),O===a.HALF_FLOAT&&(Z=a.R16F),O===a.UNSIGNED_BYTE&&(Z=a.R8)),v===a.RED_INTEGER&&(O===a.UNSIGNED_BYTE&&(Z=a.R8UI),O===a.UNSIGNED_SHORT&&(Z=a.R16UI),O===a.UNSIGNED_INT&&(Z=a.R32UI),O===a.BYTE&&(Z=a.R8I),O===a.SHORT&&(Z=a.R16I),O===a.INT&&(Z=a.R32I)),v===a.RG&&(O===a.FLOAT&&(Z=a.RG32F),O===a.HALF_FLOAT&&(Z=a.RG16F),O===a.UNSIGNED_BYTE&&(Z=a.RG8)),v===a.RG_INTEGER&&(O===a.UNSIGNED_BYTE&&(Z=a.RG8UI),O===a.UNSIGNED_SHORT&&(Z=a.RG16UI),O===a.UNSIGNED_INT&&(Z=a.RG32UI),O===a.BYTE&&(Z=a.RG8I),O===a.SHORT&&(Z=a.RG16I),O===a.INT&&(Z=a.RG32I)),v===a.RGBA){let A1=J?n0:j1.getTransfer(W);O===a.FLOAT&&(Z=a.RGBA32F),O===a.HALF_FLOAT&&(Z=a.RGBA16F),O===a.UNSIGNED_BYTE&&(Z=A1===t2?a.SRGB8_ALPHA8:a.RGBA8),O===a.UNSIGNED_SHORT_4_4_4_4&&(Z=a.RGBA4),O===a.UNSIGNED_SHORT_5_5_5_1&&(Z=a.RGB5_A1)}return(Z===a.R16F||Z===a.R32F||Z===a.RG16F||Z===a.RG32F||Z===a.RGBA16F||Z===a.RGBA32F)&&e.get("EXT_color_buffer_float"),Z}function S(b,v,O){return C(b,O)===!0||b.isFramebufferTexture&&b.minFilter!==P2&&b.minFilter!==D2?Math.log2(Math.max(v.width,v.height))+1:b.mipmaps!==void 0&&b.mipmaps.length>0?b.mipmaps.length:b.isCompressedTexture&&Array.isArray(b.image)?v.mipmaps.length:1}function V(b){return b===P2||b===Q5||b===F6?a.NEAREST:a.LINEAR}function F(b){let v=b.target;v.removeEventListener("dispose",F),M(v),v.isVideoTexture&&h.delete(v)}function $(b){let v=b.target;v.removeEventListener("dispose",$),e1(v)}function M(b){let v=i.get(b);if(v.__webglInit===void 0)return;let O=b.source,W=m.get(O);if(W){let J=W[v.__cacheKey];J.usedTimes--,J.usedTimes===0&&y(b),Object.keys(W).length===0&&m.delete(O)}i.remove(b)}function y(b){let v=i.get(b);a.deleteTexture(v.__webglTexture);let O=b.source,W=m.get(O);delete W[v.__cacheKey],r.memory.textures--}function e1(b){let v=i.get(b);if(b.depthTexture&&b.depthTexture.dispose(),b.isWebGLCubeRenderTarget)for(let W=0;W<6;W++){if(Array.isArray(v.__webglFramebuffer[W]))for(let J=0;J<v.__webglFramebuffer[W].length;J++)a.deleteFramebuffer(v.__webglFramebuffer[W][J]);else a.deleteFramebuffer(v.__webglFramebuffer[W]);v.__webglDepthbuffer&&a.deleteRenderbuffer(v.__webglDepthbuffer[W])}else{if(Array.isArray(v.__webglFramebuffer))for(let W=0;W<v.__webglFramebuffer.length;W++)a.deleteFramebuffer(v.__webglFramebuffer[W]);else a.deleteFramebuffer(v.__webglFramebuffer);if(v.__webglDepthbuffer&&a.deleteRenderbuffer(v.__webglDepthbuffer),v.__webglMultisampledFramebuffer&&a.deleteFramebuffer(v.__webglMultisampledFramebuffer),v.__webglColorRenderbuffer)for(let W=0;W<v.__webglColorRenderbuffer.length;W++)v.__webglColorRenderbuffer[W]&&a.deleteRenderbuffer(v.__webglColorRenderbuffer[W]);v.__webglDepthRenderbuffer&&a.deleteRenderbuffer(v.__webglDepthRenderbuffer)}let O=b.textures;for(let W=0,J=O.length;W<J;W++){let Z=i.get(O[W]);Z.__webglTexture&&(a.deleteTexture(Z.__webglTexture),r.memory.textures--),i.remove(O[W])}i.remove(b)}let K=0;function w(){K=0}function G(){let b=K;return b>=n.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+b+" texture units while this GPU supports only "+n.maxTextures),K+=1,b}function U(b){let v=[];return v.push(b.wrapS),v.push(b.wrapT),v.push(b.wrapR||0),v.push(b.magFilter),v.push(b.minFilter),v.push(b.anisotropy),v.push(b.internalFormat),v.push(b.format),v.push(b.type),v.push(b.generateMipmaps),v.push(b.premultiplyAlpha),v.push(b.flipY),v.push(b.unpackAlignment),v.push(b.colorSpace),v.join()}function X(b,v){let O=i.get(b);if(b.isVideoTexture&&R1(b),b.isRenderTargetTexture===!1&&b.version>0&&O.__version!==b.version){let W=b.image;if(W===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(W.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{f1(O,b,v);return}}t.bindTexture(a.TEXTURE_2D,O.__webglTexture,a.TEXTURE0+v)}function B(b,v){let O=i.get(b);if(b.version>0&&O.__version!==b.version){f1(O,b,v);return}t.bindTexture(a.TEXTURE_2D_ARRAY,O.__webglTexture,a.TEXTURE0+v)}function q(b,v){let O=i.get(b);if(b.version>0&&O.__version!==b.version){f1(O,b,v);return}t.bindTexture(a.TEXTURE_3D,O.__webglTexture,a.TEXTURE0+v)}function Y(b,v){let O=i.get(b);if(b.version>0&&O.__version!==b.version){_1(O,b,v);return}t.bindTexture(a.TEXTURE_CUBE_MAP,O.__webglTexture,a.TEXTURE0+v)}let a1={[qt]:a.REPEAT,[c3]:a.CLAMP_TO_EDGE,[Xt]:a.MIRRORED_REPEAT},h1={[P2]:a.NEAREST,[Q5]:a.NEAREST_MIPMAP_NEAREST,[F6]:a.NEAREST_MIPMAP_LINEAR,[D2]:a.LINEAR,[ot]:a.LINEAR_MIPMAP_NEAREST,[w4]:a.LINEAR_MIPMAP_LINEAR},w1={[mc]:a.NEVER,[Cc]:a.ALWAYS,[vc]:a.LESS,[Si]:a.LEQUAL,[gc]:a.EQUAL,[xc]:a.GEQUAL,[Mc]:a.GREATER,[zc]:a.NOTEQUAL};function I(b,v,O){if(v.type===P3&&e.has("OES_texture_float_linear")===!1&&(v.magFilter===D2||v.magFilter===ot||v.magFilter===F6||v.magFilter===w4||v.minFilter===D2||v.minFilter===ot||v.minFilter===F6||v.minFilter===w4)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),O?(a.texParameteri(b,a.TEXTURE_WRAP_S,a1[v.wrapS]),a.texParameteri(b,a.TEXTURE_WRAP_T,a1[v.wrapT]),(b===a.TEXTURE_3D||b===a.TEXTURE_2D_ARRAY)&&a.texParameteri(b,a.TEXTURE_WRAP_R,a1[v.wrapR]),a.texParameteri(b,a.TEXTURE_MAG_FILTER,h1[v.magFilter]),a.texParameteri(b,a.TEXTURE_MIN_FILTER,h1[v.minFilter])):(a.texParameteri(b,a.TEXTURE_WRAP_S,a.CLAMP_TO_EDGE),a.texParameteri(b,a.TEXTURE_WRAP_T,a.CLAMP_TO_EDGE),(b===a.TEXTURE_3D||b===a.TEXTURE_2D_ARRAY)&&a.texParameteri(b,a.TEXTURE_WRAP_R,a.CLAMP_TO_EDGE),(v.wrapS!==c3||v.wrapT!==c3)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),a.texParameteri(b,a.TEXTURE_MAG_FILTER,V(v.magFilter)),a.texParameteri(b,a.TEXTURE_MIN_FILTER,V(v.minFilter)),v.minFilter!==P2&&v.minFilter!==D2&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),v.compareFunction&&(a.texParameteri(b,a.TEXTURE_COMPARE_MODE,a.COMPARE_REF_TO_TEXTURE),a.texParameteri(b,a.TEXTURE_COMPARE_FUNC,w1[v.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(v.magFilter===P2||v.minFilter!==F6&&v.minFilter!==w4||v.type===P3&&e.has("OES_texture_float_linear")===!1||s===!1&&v.type===E4&&e.has("OES_texture_half_float_linear")===!1)return;if(v.anisotropy>1||i.get(v).__currentAnisotropy){let W=e.get("EXT_texture_filter_anisotropic");a.texParameterf(b,W.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,n.getMaxAnisotropy())),i.get(v).__currentAnisotropy=v.anisotropy}}}function j(b,v){let O=!1;b.__webglInit===void 0&&(b.__webglInit=!0,v.addEventListener("dispose",F));let W=v.source,J=m.get(W);J===void 0&&(J={},m.set(W,J));let Z=U(v);if(Z!==b.__cacheKey){J[Z]===void 0&&(J[Z]={texture:a.createTexture(),usedTimes:0},r.memory.textures++,O=!0),J[Z].usedTimes++;let A1=J[b.__cacheKey];A1!==void 0&&(J[b.__cacheKey].usedTimes--,A1.usedTimes===0&&y(v)),b.__cacheKey=Z,b.__webglTexture=J[Z].texture}return O}function f1(b,v,O){let W=a.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&(W=a.TEXTURE_2D_ARRAY),v.isData3DTexture&&(W=a.TEXTURE_3D);let J=j(b,v),Z=v.source;t.bindTexture(W,b.__webglTexture,a.TEXTURE0+O);let A1=i.get(Z);if(Z.version!==A1.__version||J===!0){t.activeTexture(a.TEXTURE0+O);let b1=j1.getPrimaries(j1.workingColorSpace),n1=v.colorSpace===i4?null:j1.getPrimaries(v.colorSpace),r1=v.colorSpace===i4||b1===n1?a.NONE:a.BROWSER_DEFAULT_WEBGL;a.pixelStorei(a.UNPACK_FLIP_Y_WEBGL,v.flipY),a.pixelStorei(a.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),a.pixelStorei(a.UNPACK_ALIGNMENT,v.unpackAlignment),a.pixelStorei(a.UNPACK_COLORSPACE_CONVERSION_WEBGL,r1);let T1=_(v)&&u(v.image)===!1,Q=p(v.image,T1,!1,n.maxTextureSize);Q=I1(v,Q);let d2=u(Q)||s,F1=c.convert(v.format,v.colorSpace),M1=c.convert(v.type),p1=A(v.internalFormat,F1,M1,v.colorSpace,v.isVideoTexture);I(W,v,d2);let m1,G1=v.mipmaps,S1=s&&v.isVideoTexture!==!0&&p1!==Vi,n2=A1.__version===void 0||J===!0,L=Z.dataReady,c1=S(v,Q,d2);if(v.isDepthTexture)p1=a.DEPTH_COMPONENT,s?v.type===P3?p1=a.DEPTH_COMPONENT32F:v.type===a4?p1=a.DEPTH_COMPONENT24:v.type===A4?p1=a.DEPTH24_STENCIL8:p1=a.DEPTH_COMPONENT16:v.type===P3&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),v.format===T4&&p1===a.DEPTH_COMPONENT&&v.type!==b8&&v.type!==a4&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),v.type=a4,M1=c.convert(v.type)),v.format===M6&&p1===a.DEPTH_COMPONENT&&(p1=a.DEPTH_STENCIL,v.type!==A4&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),v.type=A4,M1=c.convert(v.type))),n2&&(S1?t.texStorage2D(a.TEXTURE_2D,1,p1,Q.width,Q.height):t.texImage2D(a.TEXTURE_2D,0,p1,Q.width,Q.height,0,F1,M1,null));else if(v.isDataTexture)if(G1.length>0&&d2){S1&&n2&&t.texStorage2D(a.TEXTURE_2D,c1,p1,G1[0].width,G1[0].height);for(let P=0,t1=G1.length;P<t1;P++)m1=G1[P],S1?L&&t.texSubImage2D(a.TEXTURE_2D,P,0,0,m1.width,m1.height,F1,M1,m1.data):t.texImage2D(a.TEXTURE_2D,P,p1,m1.width,m1.height,0,F1,M1,m1.data);v.generateMipmaps=!1}else S1?(n2&&t.texStorage2D(a.TEXTURE_2D,c1,p1,Q.width,Q.height),L&&t.texSubImage2D(a.TEXTURE_2D,0,0,0,Q.width,Q.height,F1,M1,Q.data)):t.texImage2D(a.TEXTURE_2D,0,p1,Q.width,Q.height,0,F1,M1,Q.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){S1&&n2&&t.texStorage3D(a.TEXTURE_2D_ARRAY,c1,p1,G1[0].width,G1[0].height,Q.depth);for(let P=0,t1=G1.length;P<t1;P++)m1=G1[P],v.format!==r3?F1!==null?S1?L&&t.compressedTexSubImage3D(a.TEXTURE_2D_ARRAY,P,0,0,0,m1.width,m1.height,Q.depth,F1,m1.data,0,0):t.compressedTexImage3D(a.TEXTURE_2D_ARRAY,P,p1,m1.width,m1.height,Q.depth,0,m1.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):S1?L&&t.texSubImage3D(a.TEXTURE_2D_ARRAY,P,0,0,0,m1.width,m1.height,Q.depth,F1,M1,m1.data):t.texImage3D(a.TEXTURE_2D_ARRAY,P,p1,m1.width,m1.height,Q.depth,0,F1,M1,m1.data)}else{S1&&n2&&t.texStorage2D(a.TEXTURE_2D,c1,p1,G1[0].width,G1[0].height);for(let P=0,t1=G1.length;P<t1;P++)m1=G1[P],v.format!==r3?F1!==null?S1?L&&t.compressedTexSubImage2D(a.TEXTURE_2D,P,0,0,m1.width,m1.height,F1,m1.data):t.compressedTexImage2D(a.TEXTURE_2D,P,p1,m1.width,m1.height,0,m1.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):S1?L&&t.texSubImage2D(a.TEXTURE_2D,P,0,0,m1.width,m1.height,F1,M1,m1.data):t.texImage2D(a.TEXTURE_2D,P,p1,m1.width,m1.height,0,F1,M1,m1.data)}else if(v.isDataArrayTexture)S1?(n2&&t.texStorage3D(a.TEXTURE_2D_ARRAY,c1,p1,Q.width,Q.height,Q.depth),L&&t.texSubImage3D(a.TEXTURE_2D_ARRAY,0,0,0,0,Q.width,Q.height,Q.depth,F1,M1,Q.data)):t.texImage3D(a.TEXTURE_2D_ARRAY,0,p1,Q.width,Q.height,Q.depth,0,F1,M1,Q.data);else if(v.isData3DTexture)S1?(n2&&t.texStorage3D(a.TEXTURE_3D,c1,p1,Q.width,Q.height,Q.depth),L&&t.texSubImage3D(a.TEXTURE_3D,0,0,0,0,Q.width,Q.height,Q.depth,F1,M1,Q.data)):t.texImage3D(a.TEXTURE_3D,0,p1,Q.width,Q.height,Q.depth,0,F1,M1,Q.data);else if(v.isFramebufferTexture){if(n2)if(S1)t.texStorage2D(a.TEXTURE_2D,c1,p1,Q.width,Q.height);else{let P=Q.width,t1=Q.height;for(let s1=0;s1<c1;s1++)t.texImage2D(a.TEXTURE_2D,s1,p1,P,t1,0,F1,M1,null),P>>=1,t1>>=1}}else if(G1.length>0&&d2){if(S1&&n2){let P=o2(G1[0]);t.texStorage2D(a.TEXTURE_2D,c1,p1,P.width,P.height)}for(let P=0,t1=G1.length;P<t1;P++)m1=G1[P],S1?L&&t.texSubImage2D(a.TEXTURE_2D,P,0,0,F1,M1,m1):t.texImage2D(a.TEXTURE_2D,P,p1,F1,M1,m1);v.generateMipmaps=!1}else if(S1){if(n2){let P=o2(Q);t.texStorage2D(a.TEXTURE_2D,c1,p1,P.width,P.height)}L&&t.texSubImage2D(a.TEXTURE_2D,0,0,0,F1,M1,Q)}else t.texImage2D(a.TEXTURE_2D,0,p1,F1,M1,Q);C(v,d2)&&H(W),A1.__version=Z.version,v.onUpdate&&v.onUpdate(v)}b.__version=v.version}function _1(b,v,O){if(v.image.length!==6)return;let W=j(b,v),J=v.source;t.bindTexture(a.TEXTURE_CUBE_MAP,b.__webglTexture,a.TEXTURE0+O);let Z=i.get(J);if(J.version!==Z.__version||W===!0){t.activeTexture(a.TEXTURE0+O);let A1=j1.getPrimaries(j1.workingColorSpace),b1=v.colorSpace===i4?null:j1.getPrimaries(v.colorSpace),n1=v.colorSpace===i4||A1===b1?a.NONE:a.BROWSER_DEFAULT_WEBGL;a.pixelStorei(a.UNPACK_FLIP_Y_WEBGL,v.flipY),a.pixelStorei(a.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),a.pixelStorei(a.UNPACK_ALIGNMENT,v.unpackAlignment),a.pixelStorei(a.UNPACK_COLORSPACE_CONVERSION_WEBGL,n1);let r1=v.isCompressedTexture||v.image[0].isCompressedTexture,T1=v.image[0]&&v.image[0].isDataTexture,Q=[];for(let P=0;P<6;P++)!r1&&!T1?Q[P]=p(v.image[P],!1,!0,n.maxCubemapSize):Q[P]=T1?v.image[P].image:v.image[P],Q[P]=I1(v,Q[P]);let d2=Q[0],F1=u(d2)||s,M1=c.convert(v.format,v.colorSpace),p1=c.convert(v.type),m1=A(v.internalFormat,M1,p1,v.colorSpace),G1=s&&v.isVideoTexture!==!0,S1=Z.__version===void 0||W===!0,n2=J.dataReady,L=S(v,d2,F1);I(a.TEXTURE_CUBE_MAP,v,F1);let c1;if(r1){G1&&S1&&t.texStorage2D(a.TEXTURE_CUBE_MAP,L,m1,d2.width,d2.height);for(let P=0;P<6;P++){c1=Q[P].mipmaps;for(let t1=0;t1<c1.length;t1++){let s1=c1[t1];v.format!==r3?M1!==null?G1?n2&&t.compressedTexSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+P,t1,0,0,s1.width,s1.height,M1,s1.data):t.compressedTexImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+P,t1,m1,s1.width,s1.height,0,s1.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):G1?n2&&t.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+P,t1,0,0,s1.width,s1.height,M1,p1,s1.data):t.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+P,t1,m1,s1.width,s1.height,0,M1,p1,s1.data)}}}else{if(c1=v.mipmaps,G1&&S1){c1.length>0&&L++;let P=o2(Q[0]);t.texStorage2D(a.TEXTURE_CUBE_MAP,L,m1,P.width,P.height)}for(let P=0;P<6;P++)if(T1){G1?n2&&t.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+P,0,0,0,Q[P].width,Q[P].height,M1,p1,Q[P].data):t.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+P,0,m1,Q[P].width,Q[P].height,0,M1,p1,Q[P].data);for(let t1=0;t1<c1.length;t1++){let O1=c1[t1].image[P].image;G1?n2&&t.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+P,t1+1,0,0,O1.width,O1.height,M1,p1,O1.data):t.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+P,t1+1,m1,O1.width,O1.height,0,M1,p1,O1.data)}}else{G1?n2&&t.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+P,0,0,0,M1,p1,Q[P]):t.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+P,0,m1,M1,p1,Q[P]);for(let t1=0;t1<c1.length;t1++){let s1=c1[t1];G1?n2&&t.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+P,t1+1,0,0,M1,p1,s1.image[P]):t.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+P,t1+1,m1,M1,p1,s1.image[P])}}}C(v,F1)&&H(a.TEXTURE_CUBE_MAP),Z.__version=J.version,v.onUpdate&&v.onUpdate(v)}b.__version=v.version}function g1(b,v,O,W,J,Z){let A1=c.convert(O.format,O.colorSpace),b1=c.convert(O.type),n1=A(O.internalFormat,A1,b1,O.colorSpace);if(!i.get(v).__hasExternalTextures){let T1=Math.max(1,v.width>>Z),Q=Math.max(1,v.height>>Z);J===a.TEXTURE_3D||J===a.TEXTURE_2D_ARRAY?t.texImage3D(J,Z,n1,T1,Q,v.depth,0,A1,b1,null):t.texImage2D(J,Z,n1,T1,Q,0,A1,b1,null)}t.bindFramebuffer(a.FRAMEBUFFER,b),B1(v)?o.framebufferTexture2DMultisampleEXT(a.FRAMEBUFFER,W,J,i.get(O).__webglTexture,0,C1(v)):(J===a.TEXTURE_2D||J>=a.TEXTURE_CUBE_MAP_POSITIVE_X&&J<=a.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&a.framebufferTexture2D(a.FRAMEBUFFER,W,J,i.get(O).__webglTexture,Z),t.bindFramebuffer(a.FRAMEBUFFER,null)}function u1(b,v,O){if(a.bindRenderbuffer(a.RENDERBUFFER,b),v.depthBuffer&&!v.stencilBuffer){let W=s===!0?a.DEPTH_COMPONENT24:a.DEPTH_COMPONENT16;if(O||B1(v)){let J=v.depthTexture;J&&J.isDepthTexture&&(J.type===P3?W=a.DEPTH_COMPONENT32F:J.type===a4&&(W=a.DEPTH_COMPONENT24));let Z=C1(v);B1(v)?o.renderbufferStorageMultisampleEXT(a.RENDERBUFFER,Z,W,v.width,v.height):a.renderbufferStorageMultisample(a.RENDERBUFFER,Z,W,v.width,v.height)}else a.renderbufferStorage(a.RENDERBUFFER,W,v.width,v.height);a.framebufferRenderbuffer(a.FRAMEBUFFER,a.DEPTH_ATTACHMENT,a.RENDERBUFFER,b)}else if(v.depthBuffer&&v.stencilBuffer){let W=C1(v);O&&B1(v)===!1?a.renderbufferStorageMultisample(a.RENDERBUFFER,W,a.DEPTH24_STENCIL8,v.width,v.height):B1(v)?o.renderbufferStorageMultisampleEXT(a.RENDERBUFFER,W,a.DEPTH24_STENCIL8,v.width,v.height):a.renderbufferStorage(a.RENDERBUFFER,a.DEPTH_STENCIL,v.width,v.height),a.framebufferRenderbuffer(a.FRAMEBUFFER,a.DEPTH_STENCIL_ATTACHMENT,a.RENDERBUFFER,b)}else{let W=v.textures;for(let J=0;J<W.length;J++){let Z=W[J],A1=c.convert(Z.format,Z.colorSpace),b1=c.convert(Z.type),n1=A(Z.internalFormat,A1,b1,Z.colorSpace),r1=C1(v);O&&B1(v)===!1?a.renderbufferStorageMultisample(a.RENDERBUFFER,r1,n1,v.width,v.height):B1(v)?o.renderbufferStorageMultisampleEXT(a.RENDERBUFFER,r1,n1,v.width,v.height):a.renderbufferStorage(a.RENDERBUFFER,n1,v.width,v.height)}}a.bindRenderbuffer(a.RENDERBUFFER,null)}function Y1(b,v){if(v&&v.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(a.FRAMEBUFFER,b),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(v.depthTexture).__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),X(v.depthTexture,0);let W=i.get(v.depthTexture).__webglTexture,J=C1(v);if(v.depthTexture.format===T4)B1(v)?o.framebufferTexture2DMultisampleEXT(a.FRAMEBUFFER,a.DEPTH_ATTACHMENT,a.TEXTURE_2D,W,0,J):a.framebufferTexture2D(a.FRAMEBUFFER,a.DEPTH_ATTACHMENT,a.TEXTURE_2D,W,0);else if(v.depthTexture.format===M6)B1(v)?o.framebufferTexture2DMultisampleEXT(a.FRAMEBUFFER,a.DEPTH_STENCIL_ATTACHMENT,a.TEXTURE_2D,W,0,J):a.framebufferTexture2D(a.FRAMEBUFFER,a.DEPTH_STENCIL_ATTACHMENT,a.TEXTURE_2D,W,0);else throw new Error("Unknown depthTexture format")}function y1(b){let v=i.get(b),O=b.isWebGLCubeRenderTarget===!0;if(b.depthTexture&&!v.__autoAllocateDepthBuffer){if(O)throw new Error("target.depthTexture not supported in Cube render targets");Y1(v.__webglFramebuffer,b)}else if(O){v.__webglDepthbuffer=[];for(let W=0;W<6;W++)t.bindFramebuffer(a.FRAMEBUFFER,v.__webglFramebuffer[W]),v.__webglDepthbuffer[W]=a.createRenderbuffer(),u1(v.__webglDepthbuffer[W],b,!1)}else t.bindFramebuffer(a.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer=a.createRenderbuffer(),u1(v.__webglDepthbuffer,b,!1);t.bindFramebuffer(a.FRAMEBUFFER,null)}function E(b,v,O){let W=i.get(b);v!==void 0&&g1(W.__webglFramebuffer,b,b.texture,a.COLOR_ATTACHMENT0,a.TEXTURE_2D,0),O!==void 0&&y1(b)}function C2(b){let v=b.texture,O=i.get(b),W=i.get(v);b.addEventListener("dispose",$);let J=b.textures,Z=b.isWebGLCubeRenderTarget===!0,A1=J.length>1,b1=u(b)||s;if(A1||(W.__webglTexture===void 0&&(W.__webglTexture=a.createTexture()),W.__version=v.version,r.memory.textures++),Z){O.__webglFramebuffer=[];for(let n1=0;n1<6;n1++)if(s&&v.mipmaps&&v.mipmaps.length>0){O.__webglFramebuffer[n1]=[];for(let r1=0;r1<v.mipmaps.length;r1++)O.__webglFramebuffer[n1][r1]=a.createFramebuffer()}else O.__webglFramebuffer[n1]=a.createFramebuffer()}else{if(s&&v.mipmaps&&v.mipmaps.length>0){O.__webglFramebuffer=[];for(let n1=0;n1<v.mipmaps.length;n1++)O.__webglFramebuffer[n1]=a.createFramebuffer()}else O.__webglFramebuffer=a.createFramebuffer();if(A1)if(n.drawBuffers)for(let n1=0,r1=J.length;n1<r1;n1++){let T1=i.get(J[n1]);T1.__webglTexture===void 0&&(T1.__webglTexture=a.createTexture(),r.memory.textures++)}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(s&&b.samples>0&&B1(b)===!1){O.__webglMultisampledFramebuffer=a.createFramebuffer(),O.__webglColorRenderbuffer=[],t.bindFramebuffer(a.FRAMEBUFFER,O.__webglMultisampledFramebuffer);for(let n1=0;n1<J.length;n1++){let r1=J[n1];O.__webglColorRenderbuffer[n1]=a.createRenderbuffer(),a.bindRenderbuffer(a.RENDERBUFFER,O.__webglColorRenderbuffer[n1]);let T1=c.convert(r1.format,r1.colorSpace),Q=c.convert(r1.type),d2=A(r1.internalFormat,T1,Q,r1.colorSpace,b.isXRRenderTarget===!0),F1=C1(b);a.renderbufferStorageMultisample(a.RENDERBUFFER,F1,d2,b.width,b.height),a.framebufferRenderbuffer(a.FRAMEBUFFER,a.COLOR_ATTACHMENT0+n1,a.RENDERBUFFER,O.__webglColorRenderbuffer[n1])}a.bindRenderbuffer(a.RENDERBUFFER,null),b.depthBuffer&&(O.__webglDepthRenderbuffer=a.createRenderbuffer(),u1(O.__webglDepthRenderbuffer,b,!0)),t.bindFramebuffer(a.FRAMEBUFFER,null)}}if(Z){t.bindTexture(a.TEXTURE_CUBE_MAP,W.__webglTexture),I(a.TEXTURE_CUBE_MAP,v,b1);for(let n1=0;n1<6;n1++)if(s&&v.mipmaps&&v.mipmaps.length>0)for(let r1=0;r1<v.mipmaps.length;r1++)g1(O.__webglFramebuffer[n1][r1],b,v,a.COLOR_ATTACHMENT0,a.TEXTURE_CUBE_MAP_POSITIVE_X+n1,r1);else g1(O.__webglFramebuffer[n1],b,v,a.COLOR_ATTACHMENT0,a.TEXTURE_CUBE_MAP_POSITIVE_X+n1,0);C(v,b1)&&H(a.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(A1){for(let n1=0,r1=J.length;n1<r1;n1++){let T1=J[n1],Q=i.get(T1);t.bindTexture(a.TEXTURE_2D,Q.__webglTexture),I(a.TEXTURE_2D,T1,b1),g1(O.__webglFramebuffer,b,T1,a.COLOR_ATTACHMENT0+n1,a.TEXTURE_2D,0),C(T1,b1)&&H(a.TEXTURE_2D)}t.unbindTexture()}else{let n1=a.TEXTURE_2D;if((b.isWebGL3DRenderTarget||b.isWebGLArrayRenderTarget)&&(s?n1=b.isWebGL3DRenderTarget?a.TEXTURE_3D:a.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(n1,W.__webglTexture),I(n1,v,b1),s&&v.mipmaps&&v.mipmaps.length>0)for(let r1=0;r1<v.mipmaps.length;r1++)g1(O.__webglFramebuffer[r1],b,v,a.COLOR_ATTACHMENT0,n1,r1);else g1(O.__webglFramebuffer,b,v,a.COLOR_ATTACHMENT0,n1,0);C(v,b1)&&H(n1),t.unbindTexture()}b.depthBuffer&&y1(b)}function z1(b){let v=u(b)||s,O=b.textures;for(let W=0,J=O.length;W<J;W++){let Z=O[W];if(C(Z,v)){let A1=b.isWebGLCubeRenderTarget?a.TEXTURE_CUBE_MAP:a.TEXTURE_2D,b1=i.get(Z).__webglTexture;t.bindTexture(A1,b1),H(A1),t.unbindTexture()}}}function D1(b){if(s&&b.samples>0&&B1(b)===!1){let v=b.textures,O=b.width,W=b.height,J=a.COLOR_BUFFER_BIT,Z=[],A1=b.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT,b1=i.get(b),n1=v.length>1;if(n1)for(let r1=0;r1<v.length;r1++)t.bindFramebuffer(a.FRAMEBUFFER,b1.__webglMultisampledFramebuffer),a.framebufferRenderbuffer(a.FRAMEBUFFER,a.COLOR_ATTACHMENT0+r1,a.RENDERBUFFER,null),t.bindFramebuffer(a.FRAMEBUFFER,b1.__webglFramebuffer),a.framebufferTexture2D(a.DRAW_FRAMEBUFFER,a.COLOR_ATTACHMENT0+r1,a.TEXTURE_2D,null,0);t.bindFramebuffer(a.READ_FRAMEBUFFER,b1.__webglMultisampledFramebuffer),t.bindFramebuffer(a.DRAW_FRAMEBUFFER,b1.__webglFramebuffer);for(let r1=0;r1<v.length;r1++){Z.push(a.COLOR_ATTACHMENT0+r1),b.depthBuffer&&Z.push(A1);let T1=b1.__ignoreDepthValues!==void 0?b1.__ignoreDepthValues:!1;if(T1===!1&&(b.depthBuffer&&(J|=a.DEPTH_BUFFER_BIT),b.stencilBuffer&&(J|=a.STENCIL_BUFFER_BIT)),n1&&a.framebufferRenderbuffer(a.READ_FRAMEBUFFER,a.COLOR_ATTACHMENT0,a.RENDERBUFFER,b1.__webglColorRenderbuffer[r1]),T1===!0&&(a.invalidateFramebuffer(a.READ_FRAMEBUFFER,[A1]),a.invalidateFramebuffer(a.DRAW_FRAMEBUFFER,[A1])),n1){let Q=i.get(v[r1]).__webglTexture;a.framebufferTexture2D(a.DRAW_FRAMEBUFFER,a.COLOR_ATTACHMENT0,a.TEXTURE_2D,Q,0)}a.blitFramebuffer(0,0,O,W,0,0,O,W,J,a.NEAREST),l&&a.invalidateFramebuffer(a.READ_FRAMEBUFFER,Z)}if(t.bindFramebuffer(a.READ_FRAMEBUFFER,null),t.bindFramebuffer(a.DRAW_FRAMEBUFFER,null),n1)for(let r1=0;r1<v.length;r1++){t.bindFramebuffer(a.FRAMEBUFFER,b1.__webglMultisampledFramebuffer),a.framebufferRenderbuffer(a.FRAMEBUFFER,a.COLOR_ATTACHMENT0+r1,a.RENDERBUFFER,b1.__webglColorRenderbuffer[r1]);let T1=i.get(v[r1]).__webglTexture;t.bindFramebuffer(a.FRAMEBUFFER,b1.__webglFramebuffer),a.framebufferTexture2D(a.DRAW_FRAMEBUFFER,a.COLOR_ATTACHMENT0+r1,a.TEXTURE_2D,T1,0)}t.bindFramebuffer(a.DRAW_FRAMEBUFFER,b1.__webglMultisampledFramebuffer)}}function C1(b){return Math.min(n.maxSamples,b.samples)}function B1(b){let v=i.get(b);return s&&b.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function R1(b){let v=r.render.frame;h.get(b)!==v&&(h.set(b,v),b.update())}function I1(b,v){let O=b.colorSpace,W=b.format,J=b.type;return b.isCompressedTexture===!0||b.isVideoTexture===!0||b.format===Yt||O!==f4&&O!==i4&&(j1.getTransfer(O)===t2?s===!1?e.has("EXT_sRGB")===!0&&W===r3?(b.format=Yt,b.minFilter=D2,b.generateMipmaps=!1):v=l0.sRGBToLinear(v):(W!==r3||J!==c4)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",O)),v}function o2(b){return typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement?(f.width=b.naturalWidth||b.width,f.height=b.naturalHeight||b.height):typeof VideoFrame<"u"&&b instanceof VideoFrame?(f.width=b.displayWidth,f.height=b.displayHeight):(f.width=b.width,f.height=b.height),f}this.allocateTextureUnit=G,this.resetTextureUnits=w,this.setTexture2D=X,this.setTexture2DArray=B,this.setTexture3D=q,this.setTextureCube=Y,this.rebindTextures=E,this.setupRenderTarget=C2,this.updateRenderTargetMipmap=z1,this.updateMultisampleRenderTarget=D1,this.setupDepthRenderbuffer=y1,this.setupFrameBufferTexture=g1,this.useMultisampledRTT=B1}function pl(a,e,t){let i=t.isWebGL2;function n(c,r=i4){let s,o=j1.getTransfer(r);if(c===c4)return a.UNSIGNED_BYTE;if(c===Ci)return a.UNSIGNED_SHORT_4_4_4_4;if(c===bi)return a.UNSIGNED_SHORT_5_5_5_1;if(c===ac)return a.BYTE;if(c===nc)return a.SHORT;if(c===b8)return a.UNSIGNED_SHORT;if(c===xi)return a.INT;if(c===a4)return a.UNSIGNED_INT;if(c===P3)return a.FLOAT;if(c===E4)return i?a.HALF_FLOAT:(s=e.get("OES_texture_half_float"),s!==null?s.HALF_FLOAT_OES:null);if(c===cc)return a.ALPHA;if(c===r3)return a.RGBA;if(c===rc)return a.LUMINANCE;if(c===sc)return a.LUMINANCE_ALPHA;if(c===T4)return a.DEPTH_COMPONENT;if(c===M6)return a.DEPTH_STENCIL;if(c===Yt)return s=e.get("EXT_sRGB"),s!==null?s.SRGB_ALPHA_EXT:null;if(c===oc)return a.RED;if(c===Hi)return a.RED_INTEGER;if(c===lc)return a.RG;if(c===_i)return a.RG_INTEGER;if(c===yi)return a.RGBA_INTEGER;if(c===lt||c===ft||c===ht||c===ut)if(o===t2)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(c===lt)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(c===ft)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(c===ht)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(c===ut)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(c===lt)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(c===ft)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(c===ht)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(c===ut)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(c===e7||c===t7||c===i7||c===a7)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(c===e7)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(c===t7)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(c===i7)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(c===a7)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(c===Vi)return s=e.get("WEBGL_compressed_texture_etc1"),s!==null?s.COMPRESSED_RGB_ETC1_WEBGL:null;if(c===n7||c===c7)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(c===n7)return o===t2?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(c===c7)return o===t2?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(c===r7||c===s7||c===o7||c===l7||c===f7||c===h7||c===u7||c===d7||c===p7||c===m7||c===v7||c===g7||c===M7||c===z7)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(c===r7)return o===t2?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(c===s7)return o===t2?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(c===o7)return o===t2?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(c===l7)return o===t2?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(c===f7)return o===t2?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(c===h7)return o===t2?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(c===u7)return o===t2?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(c===d7)return o===t2?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(c===p7)return o===t2?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(c===m7)return o===t2?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(c===v7)return o===t2?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(c===g7)return o===t2?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(c===M7)return o===t2?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(c===z7)return o===t2?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(c===dt||c===x7||c===C7)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(c===dt)return o===t2?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(c===x7)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(c===C7)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(c===fc||c===b7||c===H7||c===_7)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(c===dt)return s.COMPRESSED_RED_RGTC1_EXT;if(c===b7)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(c===H7)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(c===_7)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return c===A4?i?a.UNSIGNED_INT_24_8:(s=e.get("WEBGL_depth_texture"),s!==null?s.UNSIGNED_INT_24_8_WEBGL:null):a[c]!==void 0?a[c]:null}return{convert:n}}var l8=class extends H2{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}},u6=class extends _6{constructor(){super(),this.isGroup=!0,this.type="Group"}},ml={type:"move"},q6=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new u6,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new u6,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new k,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new k),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new u6,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new k,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new k),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let n=null,c=null,r=null,s=this._targetRay,o=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){r=!0;for(let z of e.hand.values()){let p=t.getJointPose(z,i),u=this._getHandJoint(l,z);p!==null&&(u.matrix.fromArray(p.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,u.jointRadius=p.radius),u.visible=p!==null}let f=l.joints["index-finger-tip"],h=l.joints["thumb-tip"],d=f.position.distanceTo(h.position),m=.02,g=.005;l.inputState.pinching&&d>m+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&d<=m-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else o!==null&&e.gripSpace&&(c=t.getPose(e.gripSpace,i),c!==null&&(o.matrix.fromArray(c.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,c.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(c.linearVelocity)):o.hasLinearVelocity=!1,c.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(c.angularVelocity)):o.hasAngularVelocity=!1));s!==null&&(n=t.getPose(e.targetRaySpace,i),n===null&&c!==null&&(n=c),n!==null&&(s.matrix.fromArray(n.transform.matrix),s.matrix.decompose(s.position,s.rotation,s.scale),s.matrixWorldNeedsUpdate=!0,n.linearVelocity?(s.hasLinearVelocity=!0,s.linearVelocity.copy(n.linearVelocity)):s.hasLinearVelocity=!1,n.angularVelocity?(s.hasAngularVelocity=!0,s.angularVelocity.copy(n.angularVelocity)):s.hasAngularVelocity=!1,this.dispatchEvent(ml)))}return s!==null&&(s.visible=n!==null),o!==null&&(o.visible=c!==null),l!==null&&(l.visible=r!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let i=new u6;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}},vl=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,gl=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepthEXT = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepthEXT = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,f8=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,i){if(this.texture===null){let n=new D4,c=e.properties.get(n);c.__webglTexture=t.texture,(t.depthNear!=i.depthNear||t.depthFar!=i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}render(e,t){if(this.texture!==null){if(this.mesh===null){let i=t.cameras[0].viewport,n=new V2({extensions:{fragDepth:!0},vertexShader:vl,fragmentShader:gl,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new y2(new l4(20,20),n)}e.render(this.mesh,t)}}reset(){this.texture=null,this.mesh=null}},h8=class extends s4{constructor(e,t){super();let i=this,n=null,c=1,r=null,s="local-floor",o=1,l=null,f=null,h=null,d=null,m=null,g=null,z=new f8,p=t.getContextAttributes(),u=null,_=null,C=[],H=[],A=new W1,S=null,V=new H2;V.layers.enable(1),V.viewport=new _2;let F=new H2;F.layers.enable(2),F.viewport=new _2;let $=[V,F],M=new l8;M.layers.enable(1),M.layers.enable(2);let y=null,e1=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(I){let j=C[I];return j===void 0&&(j=new q6,C[I]=j),j.getTargetRaySpace()},this.getControllerGrip=function(I){let j=C[I];return j===void 0&&(j=new q6,C[I]=j),j.getGripSpace()},this.getHand=function(I){let j=C[I];return j===void 0&&(j=new q6,C[I]=j),j.getHandSpace()};function K(I){let j=H.indexOf(I.inputSource);if(j===-1)return;let f1=C[j];f1!==void 0&&(f1.update(I.inputSource,I.frame,l||r),f1.dispatchEvent({type:I.type,data:I.inputSource}))}function w(){n.removeEventListener("select",K),n.removeEventListener("selectstart",K),n.removeEventListener("selectend",K),n.removeEventListener("squeeze",K),n.removeEventListener("squeezestart",K),n.removeEventListener("squeezeend",K),n.removeEventListener("end",w),n.removeEventListener("inputsourceschange",G);for(let I=0;I<C.length;I++){let j=H[I];j!==null&&(H[I]=null,C[I].disconnect(j))}y=null,e1=null,z.reset(),e.setRenderTarget(u),m=null,d=null,h=null,n=null,_=null,w1.stop(),i.isPresenting=!1,e.setPixelRatio(S),e.setSize(A.width,A.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(I){c=I,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(I){s=I,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||r},this.setReferenceSpace=function(I){l=I},this.getBaseLayer=function(){return d!==null?d:m},this.getBinding=function(){return h},this.getFrame=function(){return g},this.getSession=function(){return n},this.setSession=function(I){return Me(this,null,function*(){if(n=I,n!==null){if(u=e.getRenderTarget(),n.addEventListener("select",K),n.addEventListener("selectstart",K),n.addEventListener("selectend",K),n.addEventListener("squeeze",K),n.addEventListener("squeezestart",K),n.addEventListener("squeezeend",K),n.addEventListener("end",w),n.addEventListener("inputsourceschange",G),p.xrCompatible!==!0&&(yield t.makeXRCompatible()),S=e.getPixelRatio(),e.getSize(A),n.renderState.layers===void 0||e.capabilities.isWebGL2===!1){let j={antialias:n.renderState.layers===void 0?p.antialias:!0,alpha:!0,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:c};m=new XRWebGLLayer(n,t,j),n.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),_=new s3(m.framebufferWidth,m.framebufferHeight,{format:r3,type:c4,colorSpace:e.outputColorSpace,stencilBuffer:p.stencil})}else{let j=null,f1=null,_1=null;p.depth&&(_1=p.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,j=p.stencil?M6:T4,f1=p.stencil?A4:a4);let g1={colorFormat:t.RGBA8,depthFormat:_1,scaleFactor:c};h=new XRWebGLBinding(n,t),d=h.createProjectionLayer(g1),n.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),_=new s3(d.textureWidth,d.textureHeight,{format:r3,type:c4,depthTexture:new x0(d.textureWidth,d.textureHeight,f1,void 0,void 0,void 0,void 0,void 0,void 0,j),stencilBuffer:p.stencil,colorSpace:e.outputColorSpace,samples:p.antialias?4:0});let u1=e.properties.get(_);u1.__ignoreDepthValues=d.ignoreDepthValues}_.isXRRenderTarget=!0,this.setFoveation(o),l=null,r=yield n.requestReferenceSpace(s),w1.setContext(n),w1.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}})},this.getEnvironmentBlendMode=function(){if(n!==null)return n.environmentBlendMode};function G(I){for(let j=0;j<I.removed.length;j++){let f1=I.removed[j],_1=H.indexOf(f1);_1>=0&&(H[_1]=null,C[_1].disconnect(f1))}for(let j=0;j<I.added.length;j++){let f1=I.added[j],_1=H.indexOf(f1);if(_1===-1){for(let u1=0;u1<C.length;u1++)if(u1>=H.length){H.push(f1),_1=u1;break}else if(H[u1]===null){H[u1]=f1,_1=u1;break}if(_1===-1)break}let g1=C[_1];g1&&g1.connect(f1)}}let U=new k,X=new k;function B(I,j,f1){U.setFromMatrixPosition(j.matrixWorld),X.setFromMatrixPosition(f1.matrixWorld);let _1=U.distanceTo(X),g1=j.projectionMatrix.elements,u1=f1.projectionMatrix.elements,Y1=g1[14]/(g1[10]-1),y1=g1[14]/(g1[10]+1),E=(g1[9]+1)/g1[5],C2=(g1[9]-1)/g1[5],z1=(g1[8]-1)/g1[0],D1=(u1[8]+1)/u1[0],C1=Y1*z1,B1=Y1*D1,R1=_1/(-z1+D1),I1=R1*-z1;j.matrixWorld.decompose(I.position,I.quaternion,I.scale),I.translateX(I1),I.translateZ(R1),I.matrixWorld.compose(I.position,I.quaternion,I.scale),I.matrixWorldInverse.copy(I.matrixWorld).invert();let o2=Y1+R1,b=y1+R1,v=C1-I1,O=B1+(_1-I1),W=E*y1/b*o2,J=C2*y1/b*o2;I.projectionMatrix.makePerspective(v,O,W,J,o2,b),I.projectionMatrixInverse.copy(I.projectionMatrix).invert()}function q(I,j){j===null?I.matrixWorld.copy(I.matrix):I.matrixWorld.multiplyMatrices(j.matrixWorld,I.matrix),I.matrixWorldInverse.copy(I.matrixWorld).invert()}this.updateCamera=function(I){if(n===null)return;z.texture!==null&&(I.near=z.depthNear,I.far=z.depthFar),M.near=F.near=V.near=I.near,M.far=F.far=V.far=I.far,(y!==M.near||e1!==M.far)&&(n.updateRenderState({depthNear:M.near,depthFar:M.far}),y=M.near,e1=M.far,V.near=y,V.far=e1,F.near=y,F.far=e1,V.updateProjectionMatrix(),F.updateProjectionMatrix(),I.updateProjectionMatrix());let j=I.parent,f1=M.cameras;q(M,j);for(let _1=0;_1<f1.length;_1++)q(f1[_1],j);f1.length===2?B(M,V,F):M.projectionMatrix.copy(V.projectionMatrix),Y(I,M,j)};function Y(I,j,f1){f1===null?I.matrix.copy(j.matrixWorld):(I.matrix.copy(f1.matrixWorld),I.matrix.invert(),I.matrix.multiply(j.matrixWorld)),I.matrix.decompose(I.position,I.quaternion,I.scale),I.updateMatrixWorld(!0),I.projectionMatrix.copy(j.projectionMatrix),I.projectionMatrixInverse.copy(j.projectionMatrixInverse),I.isPerspectiveCamera&&(I.fov=Zt*2*Math.atan(1/I.projectionMatrix.elements[5]),I.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(d===null&&m===null))return o},this.setFoveation=function(I){o=I,d!==null&&(d.fixedFoveation=I),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=I)},this.hasDepthSensing=function(){return z.texture!==null};let a1=null;function h1(I,j){if(f=j.getViewerPose(l||r),g=j,f!==null){let f1=f.views;m!==null&&(e.setRenderTargetFramebuffer(_,m.framebuffer),e.setRenderTarget(_));let _1=!1;f1.length!==M.cameras.length&&(M.cameras.length=0,_1=!0);for(let u1=0;u1<f1.length;u1++){let Y1=f1[u1],y1=null;if(m!==null)y1=m.getViewport(Y1);else{let C2=h.getViewSubImage(d,Y1);y1=C2.viewport,u1===0&&(e.setRenderTargetTextures(_,C2.colorTexture,d.ignoreDepthValues?void 0:C2.depthStencilTexture),e.setRenderTarget(_))}let E=$[u1];E===void 0&&(E=new H2,E.layers.enable(u1),E.viewport=new _2,$[u1]=E),E.matrix.fromArray(Y1.transform.matrix),E.matrix.decompose(E.position,E.quaternion,E.scale),E.projectionMatrix.fromArray(Y1.projectionMatrix),E.projectionMatrixInverse.copy(E.projectionMatrix).invert(),E.viewport.set(y1.x,y1.y,y1.width,y1.height),u1===0&&(M.matrix.copy(E.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),_1===!0&&M.cameras.push(E)}let g1=n.enabledFeatures;if(g1&&g1.includes("depth-sensing")){let u1=h.getDepthInformation(f1[0]);u1&&u1.isValid&&u1.texture&&z.init(e,u1,n.renderState)}}for(let f1=0;f1<C.length;f1++){let _1=H[f1],g1=C[f1];_1!==null&&g1!==void 0&&g1.update(_1,j,l||r)}z.render(e,M),a1&&a1(I,j),j.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:j}),g=null}let w1=new Ti;w1.setAnimationLoop(h1),this.setAnimationLoop=function(I){a1=I},this.dispose=function(){}}},y4=new z6,Ml=new x2;function zl(a,e){function t(p,u){p.matrixAutoUpdate===!0&&p.updateMatrix(),u.value.copy(p.matrix)}function i(p,u){u.color.getRGB(p.fogColor.value,Ai(a)),u.isFog?(p.fogNear.value=u.near,p.fogFar.value=u.far):u.isFogExp2&&(p.fogDensity.value=u.density)}function n(p,u,_,C,H){u.isMeshBasicMaterial||u.isMeshLambertMaterial?c(p,u):u.isMeshToonMaterial?(c(p,u),h(p,u)):u.isMeshPhongMaterial?(c(p,u),f(p,u)):u.isMeshStandardMaterial?(c(p,u),d(p,u),u.isMeshPhysicalMaterial&&m(p,u,H)):u.isMeshMatcapMaterial?(c(p,u),g(p,u)):u.isMeshDepthMaterial?c(p,u):u.isMeshDistanceMaterial?(c(p,u),z(p,u)):u.isMeshNormalMaterial?c(p,u):u.isLineBasicMaterial?(r(p,u),u.isLineDashedMaterial&&s(p,u)):u.isPointsMaterial?o(p,u,_,C):u.isSpriteMaterial?l(p,u):u.isShadowMaterial?(p.color.value.copy(u.color),p.opacity.value=u.opacity):u.isShaderMaterial&&(u.uniformsNeedUpdate=!1)}function c(p,u){p.opacity.value=u.opacity,u.color&&p.diffuse.value.copy(u.color),u.emissive&&p.emissive.value.copy(u.emissive).multiplyScalar(u.emissiveIntensity),u.map&&(p.map.value=u.map,t(u.map,p.mapTransform)),u.alphaMap&&(p.alphaMap.value=u.alphaMap,t(u.alphaMap,p.alphaMapTransform)),u.bumpMap&&(p.bumpMap.value=u.bumpMap,t(u.bumpMap,p.bumpMapTransform),p.bumpScale.value=u.bumpScale,u.side===F2&&(p.bumpScale.value*=-1)),u.normalMap&&(p.normalMap.value=u.normalMap,t(u.normalMap,p.normalMapTransform),p.normalScale.value.copy(u.normalScale),u.side===F2&&p.normalScale.value.negate()),u.displacementMap&&(p.displacementMap.value=u.displacementMap,t(u.displacementMap,p.displacementMapTransform),p.displacementScale.value=u.displacementScale,p.displacementBias.value=u.displacementBias),u.emissiveMap&&(p.emissiveMap.value=u.emissiveMap,t(u.emissiveMap,p.emissiveMapTransform)),u.specularMap&&(p.specularMap.value=u.specularMap,t(u.specularMap,p.specularMapTransform)),u.alphaTest>0&&(p.alphaTest.value=u.alphaTest);let _=e.get(u),C=_.envMap,H=_.envMapRotation;if(C&&(p.envMap.value=C,y4.copy(H),y4.x*=-1,y4.y*=-1,y4.z*=-1,C.isCubeTexture&&C.isRenderTargetTexture===!1&&(y4.y*=-1,y4.z*=-1),p.envMapRotation.value.setFromMatrix4(Ml.makeRotationFromEuler(y4)),p.flipEnvMap.value=C.isCubeTexture&&C.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=u.reflectivity,p.ior.value=u.ior,p.refractionRatio.value=u.refractionRatio),u.lightMap){p.lightMap.value=u.lightMap;let A=a._useLegacyLights===!0?Math.PI:1;p.lightMapIntensity.value=u.lightMapIntensity*A,t(u.lightMap,p.lightMapTransform)}u.aoMap&&(p.aoMap.value=u.aoMap,p.aoMapIntensity.value=u.aoMapIntensity,t(u.aoMap,p.aoMapTransform))}function r(p,u){p.diffuse.value.copy(u.color),p.opacity.value=u.opacity,u.map&&(p.map.value=u.map,t(u.map,p.mapTransform))}function s(p,u){p.dashSize.value=u.dashSize,p.totalSize.value=u.dashSize+u.gapSize,p.scale.value=u.scale}function o(p,u,_,C){p.diffuse.value.copy(u.color),p.opacity.value=u.opacity,p.size.value=u.size*_,p.scale.value=C*.5,u.map&&(p.map.value=u.map,t(u.map,p.uvTransform)),u.alphaMap&&(p.alphaMap.value=u.alphaMap,t(u.alphaMap,p.alphaMapTransform)),u.alphaTest>0&&(p.alphaTest.value=u.alphaTest)}function l(p,u){p.diffuse.value.copy(u.color),p.opacity.value=u.opacity,p.rotation.value=u.rotation,u.map&&(p.map.value=u.map,t(u.map,p.mapTransform)),u.alphaMap&&(p.alphaMap.value=u.alphaMap,t(u.alphaMap,p.alphaMapTransform)),u.alphaTest>0&&(p.alphaTest.value=u.alphaTest)}function f(p,u){p.specular.value.copy(u.specular),p.shininess.value=Math.max(u.shininess,1e-4)}function h(p,u){u.gradientMap&&(p.gradientMap.value=u.gradientMap)}function d(p,u){p.metalness.value=u.metalness,u.metalnessMap&&(p.metalnessMap.value=u.metalnessMap,t(u.metalnessMap,p.metalnessMapTransform)),p.roughness.value=u.roughness,u.roughnessMap&&(p.roughnessMap.value=u.roughnessMap,t(u.roughnessMap,p.roughnessMapTransform)),e.get(u).envMap&&(p.envMapIntensity.value=u.envMapIntensity)}function m(p,u,_){p.ior.value=u.ior,u.sheen>0&&(p.sheenColor.value.copy(u.sheenColor).multiplyScalar(u.sheen),p.sheenRoughness.value=u.sheenRoughness,u.sheenColorMap&&(p.sheenColorMap.value=u.sheenColorMap,t(u.sheenColorMap,p.sheenColorMapTransform)),u.sheenRoughnessMap&&(p.sheenRoughnessMap.value=u.sheenRoughnessMap,t(u.sheenRoughnessMap,p.sheenRoughnessMapTransform))),u.clearcoat>0&&(p.clearcoat.value=u.clearcoat,p.clearcoatRoughness.value=u.clearcoatRoughness,u.clearcoatMap&&(p.clearcoatMap.value=u.clearcoatMap,t(u.clearcoatMap,p.clearcoatMapTransform)),u.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=u.clearcoatRoughnessMap,t(u.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),u.clearcoatNormalMap&&(p.clearcoatNormalMap.value=u.clearcoatNormalMap,t(u.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(u.clearcoatNormalScale),u.side===F2&&p.clearcoatNormalScale.value.negate())),u.iridescence>0&&(p.iridescence.value=u.iridescence,p.iridescenceIOR.value=u.iridescenceIOR,p.iridescenceThicknessMinimum.value=u.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=u.iridescenceThicknessRange[1],u.iridescenceMap&&(p.iridescenceMap.value=u.iridescenceMap,t(u.iridescenceMap,p.iridescenceMapTransform)),u.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=u.iridescenceThicknessMap,t(u.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),u.transmission>0&&(p.transmission.value=u.transmission,p.transmissionSamplerMap.value=_.texture,p.transmissionSamplerSize.value.set(_.width,_.height),u.transmissionMap&&(p.transmissionMap.value=u.transmissionMap,t(u.transmissionMap,p.transmissionMapTransform)),p.thickness.value=u.thickness,u.thicknessMap&&(p.thicknessMap.value=u.thicknessMap,t(u.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=u.attenuationDistance,p.attenuationColor.value.copy(u.attenuationColor)),u.anisotropy>0&&(p.anisotropyVector.value.set(u.anisotropy*Math.cos(u.anisotropyRotation),u.anisotropy*Math.sin(u.anisotropyRotation)),u.anisotropyMap&&(p.anisotropyMap.value=u.anisotropyMap,t(u.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=u.specularIntensity,p.specularColor.value.copy(u.specularColor),u.specularColorMap&&(p.specularColorMap.value=u.specularColorMap,t(u.specularColorMap,p.specularColorMapTransform)),u.specularIntensityMap&&(p.specularIntensityMap.value=u.specularIntensityMap,t(u.specularIntensityMap,p.specularIntensityMapTransform))}function g(p,u){u.matcap&&(p.matcap.value=u.matcap)}function z(p,u){let _=e.get(u).light;p.referencePosition.value.setFromMatrixPosition(_.matrixWorld),p.nearDistance.value=_.shadow.camera.near,p.farDistance.value=_.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:n}}function xl(a,e,t,i){let n={},c={},r=[],s=t.isWebGL2?a.getParameter(a.MAX_UNIFORM_BUFFER_BINDINGS):0;function o(_,C){let H=C.program;i.uniformBlockBinding(_,H)}function l(_,C){let H=n[_.id];H===void 0&&(g(_),H=f(_),n[_.id]=H,_.addEventListener("dispose",p));let A=C.program;i.updateUBOMapping(_,A);let S=e.render.frame;c[_.id]!==S&&(d(_),c[_.id]=S)}function f(_){let C=h();_.__bindingPointIndex=C;let H=a.createBuffer(),A=_.__size,S=_.usage;return a.bindBuffer(a.UNIFORM_BUFFER,H),a.bufferData(a.UNIFORM_BUFFER,A,S),a.bindBuffer(a.UNIFORM_BUFFER,null),a.bindBufferBase(a.UNIFORM_BUFFER,C,H),H}function h(){for(let _=0;_<s;_++)if(r.indexOf(_)===-1)return r.push(_),_;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(_){let C=n[_.id],H=_.uniforms,A=_.__cache;a.bindBuffer(a.UNIFORM_BUFFER,C);for(let S=0,V=H.length;S<V;S++){let F=Array.isArray(H[S])?H[S]:[H[S]];for(let $=0,M=F.length;$<M;$++){let y=F[$];if(m(y,S,$,A)===!0){let e1=y.__offset,K=Array.isArray(y.value)?y.value:[y.value],w=0;for(let G=0;G<K.length;G++){let U=K[G],X=z(U);typeof U=="number"||typeof U=="boolean"?(y.__data[0]=U,a.bufferSubData(a.UNIFORM_BUFFER,e1+w,y.__data)):U.isMatrix3?(y.__data[0]=U.elements[0],y.__data[1]=U.elements[1],y.__data[2]=U.elements[2],y.__data[3]=0,y.__data[4]=U.elements[3],y.__data[5]=U.elements[4],y.__data[6]=U.elements[5],y.__data[7]=0,y.__data[8]=U.elements[6],y.__data[9]=U.elements[7],y.__data[10]=U.elements[8],y.__data[11]=0):(U.toArray(y.__data,w),w+=X.storage/Float32Array.BYTES_PER_ELEMENT)}a.bufferSubData(a.UNIFORM_BUFFER,e1,y.__data)}}}a.bindBuffer(a.UNIFORM_BUFFER,null)}function m(_,C,H,A){let S=_.value,V=C+"_"+H;if(A[V]===void 0)return typeof S=="number"||typeof S=="boolean"?A[V]=S:A[V]=S.clone(),!0;{let F=A[V];if(typeof S=="number"||typeof S=="boolean"){if(F!==S)return A[V]=S,!0}else if(F.equals(S)===!1)return F.copy(S),!0}return!1}function g(_){let C=_.uniforms,H=0,A=16;for(let V=0,F=C.length;V<F;V++){let $=Array.isArray(C[V])?C[V]:[C[V]];for(let M=0,y=$.length;M<y;M++){let e1=$[M],K=Array.isArray(e1.value)?e1.value:[e1.value];for(let w=0,G=K.length;w<G;w++){let U=K[w],X=z(U),B=H%A;B!==0&&A-B<X.boundary&&(H+=A-B),e1.__data=new Float32Array(X.storage/Float32Array.BYTES_PER_ELEMENT),e1.__offset=H,H+=X.storage}}}let S=H%A;return S>0&&(H+=A-S),_.__size=H,_.__cache={},this}function z(_){let C={boundary:0,storage:0};return typeof _=="number"||typeof _=="boolean"?(C.boundary=4,C.storage=4):_.isVector2?(C.boundary=8,C.storage=8):_.isVector3||_.isColor?(C.boundary=16,C.storage=12):_.isVector4?(C.boundary=16,C.storage=16):_.isMatrix3?(C.boundary=48,C.storage=48):_.isMatrix4?(C.boundary=64,C.storage=64):_.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",_),C}function p(_){let C=_.target;C.removeEventListener("dispose",p);let H=r.indexOf(C.__bindingPointIndex);r.splice(H,1),a.deleteBuffer(n[C.id]),delete n[C.id],delete c[C.id]}function u(){for(let _ in n)a.deleteBuffer(n[_]);r=[],n={},c={}}return{bind:o,update:l,dispose:u}}var P4=class{constructor(e={}){let{canvas:t=Hc(),context:i=null,depth:n=!0,stencil:c=!0,alpha:r=!1,antialias:s=!1,premultipliedAlpha:o=!0,preserveDrawingBuffer:l=!1,powerPreference:f="default",failIfMajorPerformanceCaveat:h=!1}=e;this.isWebGLRenderer=!0;let d;i!==null?d=i.getContextAttributes().alpha:d=r;let m=new Uint32Array(4),g=new Int32Array(4),z=null,p=null,u=[],_=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=d3,this._useLegacyLights=!1,this.toneMapping=n4,this.toneMappingExposure=1;let C=this,H=!1,A=0,S=0,V=null,F=-1,$=null,M=new _2,y=new _2,e1=null,K=new q1(0),w=0,G=t.width,U=t.height,X=1,B=null,q=null,Y=new _2(0,0,G,U),a1=new _2(0,0,G,U),h1=!1,w1=new M0,I=!1,j=!1,f1=null,_1=new x2,g1=new W1,u1=new k,Y1={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function y1(){return V===null?X:1}let E=i;function C2(x,T){for(let R=0;R<x.length;R++){let D=x[R],N=t.getContext(D,T);if(N!==null)return N}return null}try{let x={alpha:!0,depth:n,stencil:c,antialias:s,premultipliedAlpha:o,preserveDrawingBuffer:l,powerPreference:f,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${C8}`),t.addEventListener("webglcontextlost",n2,!1),t.addEventListener("webglcontextrestored",L,!1),t.addEventListener("webglcontextcreationerror",c1,!1),E===null){let T=["webgl2","webgl","experimental-webgl"];if(C.isWebGL1Renderer===!0&&T.shift(),E=C2(T,x),E===null)throw C2(T)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&E instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),E.getShaderPrecisionFormat===void 0&&(E.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(x){throw console.error("THREE.WebGLRenderer: "+x.message),x}let z1,D1,C1,B1,R1,I1,o2,b,v,O,W,J,Z,A1,b1,n1,r1,T1,Q,d2,F1,M1,p1,m1;function G1(){z1=new Rs(E),D1=new ws(E,z1,e),z1.init(D1),M1=new pl(E,z1,D1),C1=new ul(E,z1,D1),B1=new Is(E),R1=new el,I1=new dl(E,z1,C1,R1,D1,M1,B1),o2=new Ts(C),b=new Ps(C),v=new Wc(E,D1),p1=new Ss(E,z1,v,D1),O=new ks(E,v,B1,p1),W=new Bs(E,O,v,B1),Q=new Us(E,D1,I1),n1=new As(R1),J=new Qo(C,o2,b,z1,D1,p1,n1),Z=new zl(C,R1),A1=new il,b1=new ol(z1,D1),T1=new Vs(C,o2,b,C1,W,d,o),r1=new hl(C,W,D1),m1=new xl(E,B1,D1,C1),d2=new Ls(E,z1,B1,D1),F1=new Ds(E,z1,B1,D1),B1.programs=J.programs,C.capabilities=D1,C.extensions=z1,C.properties=R1,C.renderLists=A1,C.shadowMap=r1,C.state=C1,C.info=B1}G1();let S1=new h8(C,E);this.xr=S1,this.getContext=function(){return E},this.getContextAttributes=function(){return E.getContextAttributes()},this.forceContextLoss=function(){let x=z1.get("WEBGL_lose_context");x&&x.loseContext()},this.forceContextRestore=function(){let x=z1.get("WEBGL_lose_context");x&&x.restoreContext()},this.getPixelRatio=function(){return X},this.setPixelRatio=function(x){x!==void 0&&(X=x,this.setSize(G,U,!1))},this.getSize=function(x){return x.set(G,U)},this.setSize=function(x,T,R=!0){if(S1.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}G=x,U=T,t.width=Math.floor(x*X),t.height=Math.floor(T*X),R===!0&&(t.style.width=x+"px",t.style.height=T+"px"),this.setViewport(0,0,x,T)},this.getDrawingBufferSize=function(x){return x.set(G*X,U*X).floor()},this.setDrawingBufferSize=function(x,T,R){G=x,U=T,X=R,t.width=Math.floor(x*R),t.height=Math.floor(T*R),this.setViewport(0,0,x,T)},this.getCurrentViewport=function(x){return x.copy(M)},this.getViewport=function(x){return x.copy(Y)},this.setViewport=function(x,T,R,D){x.isVector4?Y.set(x.x,x.y,x.z,x.w):Y.set(x,T,R,D),C1.viewport(M.copy(Y).multiplyScalar(X).round())},this.getScissor=function(x){return x.copy(a1)},this.setScissor=function(x,T,R,D){x.isVector4?a1.set(x.x,x.y,x.z,x.w):a1.set(x,T,R,D),C1.scissor(y.copy(a1).multiplyScalar(X).round())},this.getScissorTest=function(){return h1},this.setScissorTest=function(x){C1.setScissorTest(h1=x)},this.setOpaqueSort=function(x){B=x},this.setTransparentSort=function(x){q=x},this.getClearColor=function(x){return x.copy(T1.getClearColor())},this.setClearColor=function(){T1.setClearColor.apply(T1,arguments)},this.getClearAlpha=function(){return T1.getClearAlpha()},this.setClearAlpha=function(){T1.setClearAlpha.apply(T1,arguments)},this.clear=function(x=!0,T=!0,R=!0){let D=0;if(x){let N=!1;if(V!==null){let o1=V.texture.format;N=o1===yi||o1===_i||o1===Hi}if(N){let o1=V.texture.type,v1=o1===c4||o1===a4||o1===b8||o1===A4||o1===Ci||o1===bi,x1=T1.getClearColor(),H1=T1.getClearAlpha(),k1=x1.r,V1=x1.g,L1=x1.b;v1?(m[0]=k1,m[1]=V1,m[2]=L1,m[3]=H1,E.clearBufferuiv(E.COLOR,0,m)):(g[0]=k1,g[1]=V1,g[2]=L1,g[3]=H1,E.clearBufferiv(E.COLOR,0,g))}else D|=E.COLOR_BUFFER_BIT}T&&(D|=E.DEPTH_BUFFER_BIT),R&&(D|=E.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),E.clear(D)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",n2,!1),t.removeEventListener("webglcontextrestored",L,!1),t.removeEventListener("webglcontextcreationerror",c1,!1),A1.dispose(),b1.dispose(),R1.dispose(),o2.dispose(),b.dispose(),W.dispose(),p1.dispose(),m1.dispose(),J.dispose(),S1.dispose(),S1.removeEventListener("sessionstart",Y2),S1.removeEventListener("sessionend",K1),f1&&(f1.dispose(),f1=null),A2.stop()};function n2(x){x.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),H=!0}function L(){console.log("THREE.WebGLRenderer: Context Restored."),H=!1;let x=B1.autoReset,T=r1.enabled,R=r1.autoUpdate,D=r1.needsUpdate,N=r1.type;G1(),B1.autoReset=x,r1.enabled=T,r1.autoUpdate=R,r1.needsUpdate=D,r1.type=N}function c1(x){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",x.statusMessage)}function P(x){let T=x.target;T.removeEventListener("dispose",P),t1(T)}function t1(x){s1(x),R1.remove(x)}function s1(x){let T=R1.get(x).programs;T!==void 0&&(T.forEach(function(R){J.releaseProgram(R)}),x.isShaderMaterial&&J.releaseShaderCache(x))}this.renderBufferDirect=function(x,T,R,D,N,o1){T===null&&(T=Y1);let v1=N.isMesh&&N.matrixWorld.determinant()<0,x1=Mn(x,T,R,D,N);C1.setMaterial(D,v1);let H1=R.index,k1=1;if(D.wireframe===!0){if(H1=O.getWireframeAttribute(R),H1===void 0)return;k1=2}let V1=R.drawRange,L1=R.attributes.position,l2=V1.start*k1,O2=(V1.start+V1.count)*k1;o1!==null&&(l2=Math.max(l2,o1.start*k1),O2=Math.min(O2,(o1.start+o1.count)*k1)),H1!==null?(l2=Math.max(l2,0),O2=Math.min(O2,H1.count)):L1!=null&&(l2=Math.max(l2,0),O2=Math.min(O2,L1.count));let M2=O2-l2;if(M2<0||M2===1/0)return;p1.setup(N,D,x1,R,H1);let M3,r2=d2;if(H1!==null&&(M3=v.get(H1),r2=F1,r2.setIndex(M3)),N.isMesh)D.wireframe===!0?(C1.setLineWidth(D.wireframeLinewidth*y1()),r2.setMode(E.LINES)):r2.setMode(E.TRIANGLES);else if(N.isLine){let E1=D.linewidth;E1===void 0&&(E1=1),C1.setLineWidth(E1*y1()),N.isLineSegments?r2.setMode(E.LINES):N.isLineLoop?r2.setMode(E.LINE_LOOP):r2.setMode(E.LINE_STRIP)}else N.isPoints?r2.setMode(E.POINTS):N.isSprite&&r2.setMode(E.TRIANGLES);if(N.isBatchedMesh)r2.renderMultiDraw(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount);else if(N.isInstancedMesh)r2.renderInstances(l2,M2,N.count);else if(R.isInstancedBufferGeometry){let E1=R._maxInstanceCount!==void 0?R._maxInstanceCount:1/0,K0=Math.min(R.instanceCount,E1);r2.renderInstances(l2,M2,K0)}else r2.render(l2,M2)};function O1(x,T,R){x.transparent===!0&&x.side===N3&&x.forceSinglePass===!1?(x.side=F2,x.needsUpdate=!0,ve(x,T,R),x.side=r4,x.needsUpdate=!0,ve(x,T,R),x.side=N3):ve(x,T,R)}this.compile=function(x,T,R=null){R===null&&(R=x),p=b1.get(R),p.init(),_.push(p),R.traverseVisible(function(N){N.isLight&&N.layers.test(T.layers)&&(p.pushLight(N),N.castShadow&&p.pushShadow(N))}),x!==R&&x.traverseVisible(function(N){N.isLight&&N.layers.test(T.layers)&&(p.pushLight(N),N.castShadow&&p.pushShadow(N))}),p.setupLights(C._useLegacyLights);let D=new Set;return x.traverse(function(N){let o1=N.material;if(o1)if(Array.isArray(o1))for(let v1=0;v1<o1.length;v1++){let x1=o1[v1];O1(x1,R,N),D.add(x1)}else O1(o1,R,N),D.add(o1)}),_.pop(),p=null,D},this.compileAsync=function(x,T,R=null){let D=this.compile(x,T,R);return new Promise(N=>{function o1(){if(D.forEach(function(v1){R1.get(v1).currentProgram.isReady()&&D.delete(v1)}),D.size===0){N(x);return}setTimeout(o1,10)}z1.get("KHR_parallel_shader_compile")!==null?o1():setTimeout(o1,10)})};let J1=null;function b2(x){J1&&J1(x)}function Y2(){A2.stop()}function K1(){A2.start()}let A2=new Ti;A2.setAnimationLoop(b2),typeof self<"u"&&A2.setContext(self),this.setAnimationLoop=function(x){J1=x,S1.setAnimationLoop(x),x===null?A2.stop():A2.start()},S1.addEventListener("sessionstart",Y2),S1.addEventListener("sessionend",K1),this.render=function(x,T){if(T!==void 0&&T.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(H===!0)return;x.matrixWorldAutoUpdate===!0&&x.updateMatrixWorld(),T.parent===null&&T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),S1.enabled===!0&&S1.isPresenting===!0&&(S1.cameraAutoUpdate===!0&&S1.updateCamera(T),T=S1.getCamera()),x.isScene===!0&&x.onBeforeRender(C,x,T,V),p=b1.get(x,_.length),p.init(),_.push(p),_1.multiplyMatrices(T.projectionMatrix,T.matrixWorldInverse),w1.setFromProjectionMatrix(_1),j=this.localClippingEnabled,I=n1.init(this.clippingPlanes,j),z=A1.get(x,u.length),z.init(),u.push(z),f3(x,T,0,C.sortObjects),z.finish(),C.sortObjects===!0&&z.sort(B,q),this.info.render.frame++,I===!0&&n1.beginShadows();let R=p.state.shadowsArray;if(r1.render(R,x,T),I===!0&&n1.endShadows(),this.info.autoReset===!0&&this.info.reset(),(S1.enabled===!1||S1.isPresenting===!1||S1.hasDepthSensing()===!1)&&T1.render(z,x),p.setupLights(C._useLegacyLights),T.isArrayCamera){let D=T.cameras;for(let N=0,o1=D.length;N<o1;N++){let v1=D[N];u5(z,x,v1,v1.viewport)}}else u5(z,x,T);V!==null&&(I1.updateMultisampleRenderTarget(V),I1.updateRenderTargetMipmap(V)),x.isScene===!0&&x.onAfterRender(C,x,T),p1.resetDefaultState(),F=-1,$=null,_.pop(),_.length>0?p=_[_.length-1]:p=null,u.pop(),u.length>0?z=u[u.length-1]:z=null};function f3(x,T,R,D){if(x.visible===!1)return;if(x.layers.test(T.layers)){if(x.isGroup)R=x.renderOrder;else if(x.isLOD)x.autoUpdate===!0&&x.update(T);else if(x.isLight)p.pushLight(x),x.castShadow&&p.pushShadow(x);else if(x.isSprite){if(!x.frustumCulled||w1.intersectsSprite(x)){D&&u1.setFromMatrixPosition(x.matrixWorld).applyMatrix4(_1);let v1=W.update(x),x1=x.material;x1.visible&&z.push(x,v1,x1,R,u1.z,null)}}else if((x.isMesh||x.isLine||x.isPoints)&&(!x.frustumCulled||w1.intersectsObject(x))){let v1=W.update(x),x1=x.material;if(D&&(x.boundingSphere!==void 0?(x.boundingSphere===null&&x.computeBoundingSphere(),u1.copy(x.boundingSphere.center)):(v1.boundingSphere===null&&v1.computeBoundingSphere(),u1.copy(v1.boundingSphere.center)),u1.applyMatrix4(x.matrixWorld).applyMatrix4(_1)),Array.isArray(x1)){let H1=v1.groups;for(let k1=0,V1=H1.length;k1<V1;k1++){let L1=H1[k1],l2=x1[L1.materialIndex];l2&&l2.visible&&z.push(x,v1,l2,R,u1.z,L1)}}else x1.visible&&z.push(x,v1,x1,R,u1.z,null)}}let o1=x.children;for(let v1=0,x1=o1.length;v1<x1;v1++)f3(o1[v1],T,R,D)}function u5(x,T,R,D){let N=x.opaque,o1=x.transmissive,v1=x.transparent;p.setupLightsView(R),I===!0&&n1.setGlobalState(C.clippingPlanes,R),o1.length>0&&gn(N,o1,T,R),D&&C1.viewport(M.copy(D)),N.length>0&&me(N,T,R),o1.length>0&&me(o1,T,R),v1.length>0&&me(v1,T,R),C1.buffers.depth.setTest(!0),C1.buffers.depth.setMask(!0),C1.buffers.color.setMask(!0),C1.setPolygonOffset(!1)}function gn(x,T,R,D){if((R.isScene===!0?R.overrideMaterial:null)!==null)return;let o1=D1.isWebGL2;f1===null&&(f1=new s3(1,1,{generateMipmaps:!0,type:z1.has("EXT_color_buffer_half_float")?E4:c4,minFilter:w4,samples:o1?4:0})),C.getDrawingBufferSize(g1),o1?f1.setSize(g1.x,g1.y):f1.setSize($t(g1.x),$t(g1.y));let v1=C.getRenderTarget();C.setRenderTarget(f1),C.getClearColor(K),w=C.getClearAlpha(),w<1&&C.setClearColor(16777215,.5),C.clear();let x1=C.toneMapping;C.toneMapping=n4,me(x,R,D),I1.updateMultisampleRenderTarget(f1),I1.updateRenderTargetMipmap(f1);let H1=!1;for(let k1=0,V1=T.length;k1<V1;k1++){let L1=T[k1],l2=L1.object,O2=L1.geometry,M2=L1.material,M3=L1.group;if(M2.side===N3&&l2.layers.test(D.layers)){let r2=M2.side;M2.side=F2,M2.needsUpdate=!0,d5(l2,R,D,O2,M2,M3),M2.side=r2,M2.needsUpdate=!0,H1=!0}}H1===!0&&(I1.updateMultisampleRenderTarget(f1),I1.updateRenderTargetMipmap(f1)),C.setRenderTarget(v1),C.setClearColor(K,w),C.toneMapping=x1}function me(x,T,R){let D=T.isScene===!0?T.overrideMaterial:null;for(let N=0,o1=x.length;N<o1;N++){let v1=x[N],x1=v1.object,H1=v1.geometry,k1=D===null?v1.material:D,V1=v1.group;x1.layers.test(R.layers)&&d5(x1,T,R,H1,k1,V1)}}function d5(x,T,R,D,N,o1){x.onBeforeRender(C,T,R,D,N,o1),x.modelViewMatrix.multiplyMatrices(R.matrixWorldInverse,x.matrixWorld),x.normalMatrix.getNormalMatrix(x.modelViewMatrix),N.onBeforeRender(C,T,R,D,x,o1),N.transparent===!0&&N.side===N3&&N.forceSinglePass===!1?(N.side=F2,N.needsUpdate=!0,C.renderBufferDirect(R,T,D,N,x,o1),N.side=r4,N.needsUpdate=!0,C.renderBufferDirect(R,T,D,N,x,o1),N.side=N3):C.renderBufferDirect(R,T,D,N,x,o1),x.onAfterRender(C,T,R,D,N,o1)}function ve(x,T,R){T.isScene!==!0&&(T=Y1);let D=R1.get(x),N=p.state.lights,o1=p.state.shadowsArray,v1=N.state.version,x1=J.getParameters(x,N.state,o1,T,R),H1=J.getProgramCacheKey(x1),k1=D.programs;D.environment=x.isMeshStandardMaterial?T.environment:null,D.fog=T.fog,D.envMap=(x.isMeshStandardMaterial?b:o2).get(x.envMap||D.environment),D.envMapRotation=D.environment!==null&&x.envMap===null?T.environmentRotation:x.envMapRotation,k1===void 0&&(x.addEventListener("dispose",P),k1=new Map,D.programs=k1);let V1=k1.get(H1);if(V1!==void 0){if(D.currentProgram===V1&&D.lightsStateVersion===v1)return m5(x,x1),V1}else x1.uniforms=J.getUniforms(x),x.onBuild(R,x1,C),x.onBeforeCompile(x1,C),V1=J.acquireProgram(x1,H1),k1.set(H1,V1),D.uniforms=x1.uniforms;let L1=D.uniforms;return(!x.isShaderMaterial&&!x.isRawShaderMaterial||x.clipping===!0)&&(L1.clippingPlanes=n1.uniform),m5(x,x1),D.needsLights=xn(x),D.lightsStateVersion=v1,D.needsLights&&(L1.ambientLightColor.value=N.state.ambient,L1.lightProbe.value=N.state.probe,L1.directionalLights.value=N.state.directional,L1.directionalLightShadows.value=N.state.directionalShadow,L1.spotLights.value=N.state.spot,L1.spotLightShadows.value=N.state.spotShadow,L1.rectAreaLights.value=N.state.rectArea,L1.ltc_1.value=N.state.rectAreaLTC1,L1.ltc_2.value=N.state.rectAreaLTC2,L1.pointLights.value=N.state.point,L1.pointLightShadows.value=N.state.pointShadow,L1.hemisphereLights.value=N.state.hemi,L1.directionalShadowMap.value=N.state.directionalShadowMap,L1.directionalShadowMatrix.value=N.state.directionalShadowMatrix,L1.spotShadowMap.value=N.state.spotShadowMap,L1.spotLightMatrix.value=N.state.spotLightMatrix,L1.spotLightMap.value=N.state.spotLightMap,L1.pointShadowMap.value=N.state.pointShadowMap,L1.pointShadowMatrix.value=N.state.pointShadowMatrix),D.currentProgram=V1,D.uniformsList=null,V1}function p5(x){if(x.uniformsList===null){let T=x.currentProgram.getUniforms();x.uniformsList=m6.seqWithValue(T.seq,x.uniforms)}return x.uniformsList}function m5(x,T){let R=R1.get(x);R.outputColorSpace=T.outputColorSpace,R.batching=T.batching,R.instancing=T.instancing,R.instancingColor=T.instancingColor,R.instancingMorph=T.instancingMorph,R.skinning=T.skinning,R.morphTargets=T.morphTargets,R.morphNormals=T.morphNormals,R.morphColors=T.morphColors,R.morphTargetsCount=T.morphTargetsCount,R.numClippingPlanes=T.numClippingPlanes,R.numIntersection=T.numClipIntersection,R.vertexAlphas=T.vertexAlphas,R.vertexTangents=T.vertexTangents,R.toneMapping=T.toneMapping}function Mn(x,T,R,D,N){T.isScene!==!0&&(T=Y1),I1.resetTextureUnits();let o1=T.fog,v1=D.isMeshStandardMaterial?T.environment:null,x1=V===null?C.outputColorSpace:V.isXRRenderTarget===!0?V.texture.colorSpace:f4,H1=(D.isMeshStandardMaterial?b:o2).get(D.envMap||v1),k1=D.vertexColors===!0&&!!R.attributes.color&&R.attributes.color.itemSize===4,V1=!!R.attributes.tangent&&(!!D.normalMap||D.anisotropy>0),L1=!!R.morphAttributes.position,l2=!!R.morphAttributes.normal,O2=!!R.morphAttributes.color,M2=n4;D.toneMapped&&(V===null||V.isXRRenderTarget===!0)&&(M2=C.toneMapping);let M3=R.morphAttributes.position||R.morphAttributes.normal||R.morphAttributes.color,r2=M3!==void 0?M3.length:0,E1=R1.get(D),K0=p.state.lights;if(I===!0&&(j===!0||x!==$)){let Z2=x===$&&D.id===F;n1.setState(D,x,Z2)}let c2=!1;D.version===E1.__version?(E1.needsLights&&E1.lightsStateVersion!==K0.state.version||E1.outputColorSpace!==x1||N.isBatchedMesh&&E1.batching===!1||!N.isBatchedMesh&&E1.batching===!0||N.isInstancedMesh&&E1.instancing===!1||!N.isInstancedMesh&&E1.instancing===!0||N.isSkinnedMesh&&E1.skinning===!1||!N.isSkinnedMesh&&E1.skinning===!0||N.isInstancedMesh&&E1.instancingColor===!0&&N.instanceColor===null||N.isInstancedMesh&&E1.instancingColor===!1&&N.instanceColor!==null||N.isInstancedMesh&&E1.instancingMorph===!0&&N.morphTexture===null||N.isInstancedMesh&&E1.instancingMorph===!1&&N.morphTexture!==null||E1.envMap!==H1||D.fog===!0&&E1.fog!==o1||E1.numClippingPlanes!==void 0&&(E1.numClippingPlanes!==n1.numPlanes||E1.numIntersection!==n1.numIntersection)||E1.vertexAlphas!==k1||E1.vertexTangents!==V1||E1.morphTargets!==L1||E1.morphNormals!==l2||E1.morphColors!==O2||E1.toneMapping!==M2||D1.isWebGL2===!0&&E1.morphTargetsCount!==r2)&&(c2=!0):(c2=!0,E1.__version=D.version);let m4=E1.currentProgram;c2===!0&&(m4=ve(D,T,N));let v5=!1,N6=!1,Q0=!1,S2=m4.getUniforms(),v4=E1.uniforms;if(C1.useProgram(m4.program)&&(v5=!0,N6=!0,Q0=!0),D.id!==F&&(F=D.id,N6=!0),v5||$!==x){S2.setValue(E,"projectionMatrix",x.projectionMatrix),S2.setValue(E,"viewMatrix",x.matrixWorldInverse);let Z2=S2.map.cameraPosition;Z2!==void 0&&Z2.setValue(E,u1.setFromMatrixPosition(x.matrixWorld)),D1.logarithmicDepthBuffer&&S2.setValue(E,"logDepthBufFC",2/(Math.log(x.far+1)/Math.LN2)),(D.isMeshPhongMaterial||D.isMeshToonMaterial||D.isMeshLambertMaterial||D.isMeshBasicMaterial||D.isMeshStandardMaterial||D.isShaderMaterial)&&S2.setValue(E,"isOrthographic",x.isOrthographicCamera===!0),$!==x&&($=x,N6=!0,Q0=!0)}if(N.isSkinnedMesh){S2.setOptional(E,N,"bindMatrix"),S2.setOptional(E,N,"bindMatrixInverse");let Z2=N.skeleton;Z2&&(D1.floatVertexTextures?(Z2.boneTexture===null&&Z2.computeBoneTexture(),S2.setValue(E,"boneTexture",Z2.boneTexture,I1)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}N.isBatchedMesh&&(S2.setOptional(E,N,"batchingTexture"),S2.setValue(E,"batchingTexture",N._matricesTexture,I1));let et=R.morphAttributes;if((et.position!==void 0||et.normal!==void 0||et.color!==void 0&&D1.isWebGL2===!0)&&Q.update(N,R,m4),(N6||E1.receiveShadow!==N.receiveShadow)&&(E1.receiveShadow=N.receiveShadow,S2.setValue(E,"receiveShadow",N.receiveShadow)),D.isMeshGouraudMaterial&&D.envMap!==null&&(v4.envMap.value=H1,v4.flipEnvMap.value=H1.isCubeTexture&&H1.isRenderTargetTexture===!1?-1:1),N6&&(S2.setValue(E,"toneMappingExposure",C.toneMappingExposure),E1.needsLights&&zn(v4,Q0),o1&&D.fog===!0&&Z.refreshFogUniforms(v4,o1),Z.refreshMaterialUniforms(v4,D,X,U,f1),m6.upload(E,p5(E1),v4,I1)),D.isShaderMaterial&&D.uniformsNeedUpdate===!0&&(m6.upload(E,p5(E1),v4,I1),D.uniformsNeedUpdate=!1),D.isSpriteMaterial&&S2.setValue(E,"center",N.center),S2.setValue(E,"modelViewMatrix",N.modelViewMatrix),S2.setValue(E,"normalMatrix",N.normalMatrix),S2.setValue(E,"modelMatrix",N.matrixWorld),D.isShaderMaterial||D.isRawShaderMaterial){let Z2=D.uniformsGroups;for(let tt=0,Cn=Z2.length;tt<Cn;tt++)if(D1.isWebGL2){let g5=Z2[tt];m1.update(g5,m4),m1.bind(g5,m4)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return m4}function zn(x,T){x.ambientLightColor.needsUpdate=T,x.lightProbe.needsUpdate=T,x.directionalLights.needsUpdate=T,x.directionalLightShadows.needsUpdate=T,x.pointLights.needsUpdate=T,x.pointLightShadows.needsUpdate=T,x.spotLights.needsUpdate=T,x.spotLightShadows.needsUpdate=T,x.rectAreaLights.needsUpdate=T,x.hemisphereLights.needsUpdate=T}function xn(x){return x.isMeshLambertMaterial||x.isMeshToonMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isShadowMaterial||x.isShaderMaterial&&x.lights===!0}this.getActiveCubeFace=function(){return A},this.getActiveMipmapLevel=function(){return S},this.getRenderTarget=function(){return V},this.setRenderTargetTextures=function(x,T,R){R1.get(x.texture).__webglTexture=T,R1.get(x.depthTexture).__webglTexture=R;let D=R1.get(x);D.__hasExternalTextures=!0,D.__autoAllocateDepthBuffer=R===void 0,D.__autoAllocateDepthBuffer||z1.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),D.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(x,T){let R=R1.get(x);R.__webglFramebuffer=T,R.__useDefaultFramebuffer=T===void 0},this.setRenderTarget=function(x,T=0,R=0){V=x,A=T,S=R;let D=!0,N=null,o1=!1,v1=!1;if(x){let H1=R1.get(x);H1.__useDefaultFramebuffer!==void 0?(C1.bindFramebuffer(E.FRAMEBUFFER,null),D=!1):H1.__webglFramebuffer===void 0?I1.setupRenderTarget(x):H1.__hasExternalTextures&&I1.rebindTextures(x,R1.get(x.texture).__webglTexture,R1.get(x.depthTexture).__webglTexture);let k1=x.texture;(k1.isData3DTexture||k1.isDataArrayTexture||k1.isCompressedArrayTexture)&&(v1=!0);let V1=R1.get(x).__webglFramebuffer;x.isWebGLCubeRenderTarget?(Array.isArray(V1[T])?N=V1[T][R]:N=V1[T],o1=!0):D1.isWebGL2&&x.samples>0&&I1.useMultisampledRTT(x)===!1?N=R1.get(x).__webglMultisampledFramebuffer:Array.isArray(V1)?N=V1[R]:N=V1,M.copy(x.viewport),y.copy(x.scissor),e1=x.scissorTest}else M.copy(Y).multiplyScalar(X).floor(),y.copy(a1).multiplyScalar(X).floor(),e1=h1;if(C1.bindFramebuffer(E.FRAMEBUFFER,N)&&D1.drawBuffers&&D&&C1.drawBuffers(x,N),C1.viewport(M),C1.scissor(y),C1.setScissorTest(e1),o1){let H1=R1.get(x.texture);E.framebufferTexture2D(E.FRAMEBUFFER,E.COLOR_ATTACHMENT0,E.TEXTURE_CUBE_MAP_POSITIVE_X+T,H1.__webglTexture,R)}else if(v1){let H1=R1.get(x.texture),k1=T||0;E.framebufferTextureLayer(E.FRAMEBUFFER,E.COLOR_ATTACHMENT0,H1.__webglTexture,R||0,k1)}F=-1},this.readRenderTargetPixels=function(x,T,R,D,N,o1,v1){if(!(x&&x.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let x1=R1.get(x).__webglFramebuffer;if(x.isWebGLCubeRenderTarget&&v1!==void 0&&(x1=x1[v1]),x1){C1.bindFramebuffer(E.FRAMEBUFFER,x1);try{let H1=x.texture,k1=H1.format,V1=H1.type;if(k1!==r3&&M1.convert(k1)!==E.getParameter(E.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}let L1=V1===E4&&(z1.has("EXT_color_buffer_half_float")||D1.isWebGL2&&z1.has("EXT_color_buffer_float"));if(V1!==c4&&M1.convert(V1)!==E.getParameter(E.IMPLEMENTATION_COLOR_READ_TYPE)&&!(V1===P3&&(D1.isWebGL2||z1.has("OES_texture_float")||z1.has("WEBGL_color_buffer_float")))&&!L1){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}T>=0&&T<=x.width-D&&R>=0&&R<=x.height-N&&E.readPixels(T,R,D,N,M1.convert(k1),M1.convert(V1),o1)}finally{let H1=V!==null?R1.get(V).__webglFramebuffer:null;C1.bindFramebuffer(E.FRAMEBUFFER,H1)}}},this.copyFramebufferToTexture=function(x,T,R=0){let D=Math.pow(2,-R),N=Math.floor(T.image.width*D),o1=Math.floor(T.image.height*D);I1.setTexture2D(T,0),E.copyTexSubImage2D(E.TEXTURE_2D,R,0,0,x.x,x.y,N,o1),C1.unbindTexture()},this.copyTextureToTexture=function(x,T,R,D=0){let N=T.image.width,o1=T.image.height,v1=M1.convert(R.format),x1=M1.convert(R.type);I1.setTexture2D(R,0),E.pixelStorei(E.UNPACK_FLIP_Y_WEBGL,R.flipY),E.pixelStorei(E.UNPACK_PREMULTIPLY_ALPHA_WEBGL,R.premultiplyAlpha),E.pixelStorei(E.UNPACK_ALIGNMENT,R.unpackAlignment),T.isDataTexture?E.texSubImage2D(E.TEXTURE_2D,D,x.x,x.y,N,o1,v1,x1,T.image.data):T.isCompressedTexture?E.compressedTexSubImage2D(E.TEXTURE_2D,D,x.x,x.y,T.mipmaps[0].width,T.mipmaps[0].height,v1,T.mipmaps[0].data):E.texSubImage2D(E.TEXTURE_2D,D,x.x,x.y,v1,x1,T.image),D===0&&R.generateMipmaps&&E.generateMipmap(E.TEXTURE_2D),C1.unbindTexture()},this.copyTextureToTexture3D=function(x,T,R,D,N=0){if(C.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}let o1=Math.round(x.max.x-x.min.x),v1=Math.round(x.max.y-x.min.y),x1=x.max.z-x.min.z+1,H1=M1.convert(D.format),k1=M1.convert(D.type),V1;if(D.isData3DTexture)I1.setTexture3D(D,0),V1=E.TEXTURE_3D;else if(D.isDataArrayTexture||D.isCompressedArrayTexture)I1.setTexture2DArray(D,0),V1=E.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}E.pixelStorei(E.UNPACK_FLIP_Y_WEBGL,D.flipY),E.pixelStorei(E.UNPACK_PREMULTIPLY_ALPHA_WEBGL,D.premultiplyAlpha),E.pixelStorei(E.UNPACK_ALIGNMENT,D.unpackAlignment);let L1=E.getParameter(E.UNPACK_ROW_LENGTH),l2=E.getParameter(E.UNPACK_IMAGE_HEIGHT),O2=E.getParameter(E.UNPACK_SKIP_PIXELS),M2=E.getParameter(E.UNPACK_SKIP_ROWS),M3=E.getParameter(E.UNPACK_SKIP_IMAGES),r2=R.isCompressedTexture?R.mipmaps[N]:R.image;E.pixelStorei(E.UNPACK_ROW_LENGTH,r2.width),E.pixelStorei(E.UNPACK_IMAGE_HEIGHT,r2.height),E.pixelStorei(E.UNPACK_SKIP_PIXELS,x.min.x),E.pixelStorei(E.UNPACK_SKIP_ROWS,x.min.y),E.pixelStorei(E.UNPACK_SKIP_IMAGES,x.min.z),R.isDataTexture||R.isData3DTexture?E.texSubImage3D(V1,N,T.x,T.y,T.z,o1,v1,x1,H1,k1,r2.data):D.isCompressedArrayTexture?E.compressedTexSubImage3D(V1,N,T.x,T.y,T.z,o1,v1,x1,H1,r2.data):E.texSubImage3D(V1,N,T.x,T.y,T.z,o1,v1,x1,H1,k1,r2),E.pixelStorei(E.UNPACK_ROW_LENGTH,L1),E.pixelStorei(E.UNPACK_IMAGE_HEIGHT,l2),E.pixelStorei(E.UNPACK_SKIP_PIXELS,O2),E.pixelStorei(E.UNPACK_SKIP_ROWS,M2),E.pixelStorei(E.UNPACK_SKIP_IMAGES,M3),N===0&&D.generateMipmaps&&E.generateMipmap(V1),C1.unbindTexture()},this.initTexture=function(x){x.isCubeTexture?I1.setTextureCube(x,0):x.isData3DTexture?I1.setTexture3D(x,0):x.isDataArrayTexture||x.isCompressedArrayTexture?I1.setTexture2DArray(x,0):I1.setTexture2D(x,0),C1.unbindTexture()},this.resetState=function(){A=0,S=0,V=null,C1.reset(),p1.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return R3}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=e===H8?"display-p3":"srgb",t.unpackColorSpace=j1.workingColorSpace===H0?"display-p3":"srgb"}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}},u8=class extends P4{};u8.prototype.isWebGL1Renderer=!0;var b6=class extends _6{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new z6,this.environmentRotation=new z6,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentRotation=this.environmentRotation.toArray(),t}};function e0(a,e,t){return!a||!t&&a.constructor===e?a:typeof e.BYTES_PER_ELEMENT=="number"?new e(a):Array.prototype.slice.call(a)}function Cl(a){return ArrayBuffer.isView(a)&&!(a instanceof DataView)}var H6=class{constructor(e,t,i,n){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=n!==void 0?n:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,i=this._cachedIndex,n=t[i],c=t[i-1];i:{e:{let r;t:{a:if(!(e<n)){for(let s=i+2;;){if(n===void 0){if(e<c)break a;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===s)break;if(c=n,n=t[++i],e<n)break e}r=t.length;break t}if(!(e>=c)){let s=t[1];e<s&&(i=2,c=s);for(let o=i-2;;){if(c===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===o)break;if(n=c,c=t[--i-1],e>=c)break e}r=i,i=0;break t}break i}for(;i<r;){let s=i+r>>>1;e<t[s]?r=s:i=s+1}if(n=t[i],c=t[i-1],c===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,c,n)}return this.interpolate_(i,c,e,n)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,i=this.sampleValues,n=this.valueSize,c=e*n;for(let r=0;r!==n;++r)t[r]=i[c+r];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},d8=class extends H6{constructor(e,t,i,n){super(e,t,i,n),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:y7,endingEnd:y7}}intervalChanged_(e,t,i){let n=this.parameterPositions,c=e-2,r=e+1,s=n[c],o=n[r];if(s===void 0)switch(this.getSettings_().endingStart){case V7:c=e,s=2*t-i;break;case S7:c=n.length-2,s=t+n[c]-n[c+1];break;default:c=e,s=i}if(o===void 0)switch(this.getSettings_().endingEnd){case V7:r=e,o=2*i-t;break;case S7:r=1,o=i+n[1]-n[0];break;default:r=e-1,o=t}let l=(i-t)*.5,f=this.valueSize;this._weightPrev=l/(t-s),this._weightNext=l/(o-i),this._offsetPrev=c*f,this._offsetNext=r*f}interpolate_(e,t,i,n){let c=this.resultBuffer,r=this.sampleValues,s=this.valueSize,o=e*s,l=o-s,f=this._offsetPrev,h=this._offsetNext,d=this._weightPrev,m=this._weightNext,g=(i-t)/(n-t),z=g*g,p=z*g,u=-d*p+2*d*z-d*g,_=(1+d)*p+(-1.5-2*d)*z+(-.5+d)*g+1,C=(-1-m)*p+(1.5+m)*z+.5*g,H=m*p-m*z;for(let A=0;A!==s;++A)c[A]=u*r[f+A]+_*r[l+A]+C*r[o+A]+H*r[h+A];return c}},p8=class extends H6{constructor(e,t,i,n){super(e,t,i,n)}interpolate_(e,t,i,n){let c=this.resultBuffer,r=this.sampleValues,s=this.valueSize,o=e*s,l=o-s,f=(i-t)/(n-t),h=1-f;for(let d=0;d!==s;++d)c[d]=r[l+d]*h+r[o+d]*f;return c}},m8=class extends H6{constructor(e,t,i,n){super(e,t,i,n)}interpolate_(e){return this.copySampleValue_(e-1)}},o3=class{constructor(e,t,i,n){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=e0(t,this.TimeBufferType),this.values=e0(i,this.ValueBufferType),this.setInterpolation(n||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:e0(e.times,Array),values:e0(e.values,Array)};let n=e.getInterpolation();n!==e.DefaultInterpolation&&(i.interpolation=n)}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new m8(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new p8(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new d8(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case i0:t=this.InterpolantFactoryMethodDiscrete;break;case a0:t=this.InterpolantFactoryMethodLinear;break;case pt:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return console.warn("THREE.KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return i0;case this.InterpolantFactoryMethodLinear:return a0;case this.InterpolantFactoryMethodSmooth:return pt}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let i=0,n=t.length;i!==n;++i)t[i]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let i=0,n=t.length;i!==n;++i)t[i]*=e}return this}trim(e,t){let i=this.times,n=i.length,c=0,r=n-1;for(;c!==n&&i[c]<e;)++c;for(;r!==-1&&i[r]>t;)--r;if(++r,c!==0||r!==n){c>=r&&(r=Math.max(r,1),c=r-1);let s=this.getValueSize();this.times=i.slice(c,r),this.values=this.values.slice(c*s,r*s)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let i=this.times,n=this.values,c=i.length;c===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let r=null;for(let s=0;s!==c;s++){let o=i[s];if(typeof o=="number"&&isNaN(o)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,s,o),e=!1;break}if(r!==null&&r>o){console.error("THREE.KeyframeTrack: Out of order keys.",this,s,o,r),e=!1;break}r=o}if(n!==void 0&&Cl(n))for(let s=0,o=n.length;s!==o;++s){let l=n[s];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,s,l),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),n=this.getInterpolation()===pt,c=e.length-1,r=1;for(let s=1;s<c;++s){let o=!1,l=e[s],f=e[s+1];if(l!==f&&(s!==1||l!==e[0]))if(n)o=!0;else{let h=s*i,d=h-i,m=h+i;for(let g=0;g!==i;++g){let z=t[h+g];if(z!==t[d+g]||z!==t[m+g]){o=!0;break}}}if(o){if(s!==r){e[r]=e[s];let h=s*i,d=r*i;for(let m=0;m!==i;++m)t[d+m]=t[h+m]}++r}}if(c>0){e[r]=e[c];for(let s=c*i,o=r*i,l=0;l!==i;++l)t[o+l]=t[s+l];++r}return r!==e.length?(this.times=e.slice(0,r),this.values=t.slice(0,r*i)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),i=this.constructor,n=new i(this.name,e,t);return n.createInterpolant=this.createInterpolant,n}};o3.prototype.TimeBufferType=Float32Array;o3.prototype.ValueBufferType=Float32Array;o3.prototype.DefaultInterpolation=a0;var R4=class extends o3{};R4.prototype.ValueTypeName="bool";R4.prototype.ValueBufferType=Array;R4.prototype.DefaultInterpolation=i0;R4.prototype.InterpolantFactoryMethodLinear=void 0;R4.prototype.InterpolantFactoryMethodSmooth=void 0;var v8=class extends o3{};v8.prototype.ValueTypeName="color";var g8=class extends o3{};g8.prototype.ValueTypeName="number";var M8=class extends H6{constructor(e,t,i,n){super(e,t,i,n)}interpolate_(e,t,i,n){let c=this.resultBuffer,r=this.sampleValues,s=this.valueSize,o=(i-t)/(n-t),l=e*s;for(let f=l+s;l!==f;l+=4)o4.slerpFlat(c,0,r,l-s,r,l,o);return c}},$6=class extends o3{InterpolantFactoryMethodLinear(e){return new M8(this.times,this.values,this.getValueSize(),e)}};$6.prototype.ValueTypeName="quaternion";$6.prototype.DefaultInterpolation=a0;$6.prototype.InterpolantFactoryMethodSmooth=void 0;var k4=class extends o3{};k4.prototype.ValueTypeName="string";k4.prototype.ValueBufferType=Array;k4.prototype.DefaultInterpolation=i0;k4.prototype.InterpolantFactoryMethodLinear=void 0;k4.prototype.InterpolantFactoryMethodSmooth=void 0;var z8=class extends o3{};z8.prototype.ValueTypeName="vector";var C0=class{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=gi(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let t=gi();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}};function gi(){return(typeof performance>"u"?Date:performance).now()}var V8="\\[\\]\\.:\\/",bl=new RegExp("["+V8+"]","g"),S8="[^"+V8+"]",Hl="[^"+V8.replace("\\.","")+"]",_l=/((?:WC+[\/:])*)/.source.replace("WC",S8),yl=/(WCOD+)?/.source.replace("WCOD",Hl),Vl=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",S8),Sl=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",S8),Ll=new RegExp("^"+_l+yl+Vl+Sl+"$"),wl=["material","materials","bones","map"],x8=class{constructor(e,t,i){let n=i||u2.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,n)}getValue(e,t){this.bind();let i=this._targetGroup.nCachedObjects_,n=this._bindings[i];n!==void 0&&n.getValue(e,t)}setValue(e,t){let i=this._bindings;for(let n=this._targetGroup.nCachedObjects_,c=i.length;n!==c;++n)i[n].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}},u2=(()=>{class a{constructor(t,i,n){this.path=i,this.parsedPath=n||a.parseTrackName(i),this.node=a.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,i,n){return t&&t.isAnimationObjectGroup?new a.Composite(t,i,n):new a(t,i,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(bl,"")}static parseTrackName(t){let i=Ll.exec(t);if(i===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:i[2],objectName:i[3],objectIndex:i[4],propertyName:i[5],propertyIndex:i[6]},c=n.nodeName&&n.nodeName.lastIndexOf(".");if(c!==void 0&&c!==-1){let r=n.nodeName.substring(c+1);wl.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,c),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,i){if(i===void 0||i===""||i==="."||i===-1||i===t.name||i===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(i);if(n!==void 0)return n}if(t.children){let n=function(r){for(let s=0;s<r.length;s++){let o=r[s];if(o.name===i||o.uuid===i)return o;let l=n(o.children);if(l)return l}return null},c=n(t.children);if(c)return c}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,i){t[i]=this.targetObject[this.propertyName]}_getValue_array(t,i){let n=this.resolvedProperty;for(let c=0,r=n.length;c!==r;++c)t[i++]=n[c]}_getValue_arrayElement(t,i){t[i]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,i){this.resolvedProperty.toArray(t,i)}_setValue_direct(t,i){this.targetObject[this.propertyName]=t[i]}_setValue_direct_setNeedsUpdate(t,i){this.targetObject[this.propertyName]=t[i],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,i){this.targetObject[this.propertyName]=t[i],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,i){let n=this.resolvedProperty;for(let c=0,r=n.length;c!==r;++c)n[c]=t[i++]}_setValue_array_setNeedsUpdate(t,i){let n=this.resolvedProperty;for(let c=0,r=n.length;c!==r;++c)n[c]=t[i++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,i){let n=this.resolvedProperty;for(let c=0,r=n.length;c!==r;++c)n[c]=t[i++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,i){this.resolvedProperty[this.propertyIndex]=t[i]}_setValue_arrayElement_setNeedsUpdate(t,i){this.resolvedProperty[this.propertyIndex]=t[i],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,i){this.resolvedProperty[this.propertyIndex]=t[i],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,i){this.resolvedProperty.fromArray(t,i)}_setValue_fromArray_setNeedsUpdate(t,i){this.resolvedProperty.fromArray(t,i),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,i){this.resolvedProperty.fromArray(t,i),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,i){this.bind(),this.getValue(t,i)}_setValue_unbound(t,i){this.bind(),this.setValue(t,i)}bind(){let t=this.node,i=this.parsedPath,n=i.objectName,c=i.propertyName,r=i.propertyIndex;if(t||(t=a.findNode(this.rootNode,i.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let f=i.objectIndex;switch(n){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===f){f=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(f!==void 0){if(t[f]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[f]}}let s=t[c];if(s===void 0){let f=i.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+f+"."+c+" but it wasn't found.",t);return}let o=this.Versioning.None;this.targetObject=t,t.needsUpdate!==void 0?o=this.Versioning.NeedsUpdate:t.matrixWorldNeedsUpdate!==void 0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(c==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=s,this.propertyIndex=r}else s.fromArray!==void 0&&s.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=s):Array.isArray(s)?(l=this.BindingType.EntireArray,this.resolvedProperty=s):this.propertyName=c;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}return a.Composite=x8,a})();u2.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};u2.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};u2.prototype.GetterByBindingType=[u2.prototype._getValue_direct,u2.prototype._getValue_array,u2.prototype._getValue_arrayElement,u2.prototype._getValue_toArray];u2.prototype.SetterByBindingTypeAndVersioning=[[u2.prototype._setValue_direct,u2.prototype._setValue_direct_setNeedsUpdate,u2.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[u2.prototype._setValue_array,u2.prototype._setValue_array_setNeedsUpdate,u2.prototype._setValue_array_setMatrixWorldNeedsUpdate],[u2.prototype._setValue_arrayElement,u2.prototype._setValue_arrayElement_setNeedsUpdate,u2.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[u2.prototype._setValue_fromArray,u2.prototype._setValue_fromArray_setNeedsUpdate,u2.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Mu=new Float32Array(1);typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:C8}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=C8);var Ii={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};var D3=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},Al=new Z6(-1,1,1,-1,0,1),L8=class extends k3{constructor(){super(),this.setAttribute("position",new K2([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new K2([0,2,0,0,2,0],2))}},Tl=new L8,y0=class{constructor(e){this._mesh=new y2(Tl,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,Al)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}};var V0=class extends D3{constructor(e,t){super(),this.textureID=t!==void 0?t:"tDiffuse",e instanceof V2?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=_8.clone(e.uniforms),this.material=new V2({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this.fsQuad=new y0(this.material)}render(e,t,i){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=i.texture),this.fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}};var J6=class extends D3{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,i){let n=e.getContext(),c=e.state;c.buffers.color.setMask(!1),c.buffers.depth.setMask(!1),c.buffers.color.setLocked(!0),c.buffers.depth.setLocked(!0);let r,s;this.inverse?(r=0,s=1):(r=1,s=0),c.buffers.stencil.setTest(!0),c.buffers.stencil.setOp(n.REPLACE,n.REPLACE,n.REPLACE),c.buffers.stencil.setFunc(n.ALWAYS,r,4294967295),c.buffers.stencil.setClear(s),c.buffers.stencil.setLocked(!0),e.setRenderTarget(i),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),c.buffers.color.setLocked(!1),c.buffers.depth.setLocked(!1),c.buffers.color.setMask(!0),c.buffers.depth.setMask(!0),c.buffers.stencil.setLocked(!1),c.buffers.stencil.setFunc(n.EQUAL,1,4294967295),c.buffers.stencil.setOp(n.KEEP,n.KEEP,n.KEEP),c.buffers.stencil.setLocked(!0)}},S0=class extends D3{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}};var V6=class{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){let i=e.getSize(new W1);this._width=i.width,this._height=i.height,t=new s3(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:E4}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new V0(Ii),this.copyPass.material.blending=m3,this.clock=new C0}swapBuffers(){let e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){let t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());let t=this.renderer.getRenderTarget(),i=!1;for(let n=0,c=this.passes.length;n<c;n++){let r=this.passes[n];if(r.enabled!==!1){if(r.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(n),r.render(this.renderer,this.writeBuffer,this.readBuffer,e,i),r.needsSwap){if(i){let s=this.renderer.getContext(),o=this.renderer.state.buffers.stencil;o.setFunc(s.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),o.setFunc(s.EQUAL,1,4294967295)}this.swapBuffers()}J6!==void 0&&(r instanceof J6?i=!0:r instanceof S0&&(i=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){let t=this.renderer.getSize(new W1);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;let i=this._width*this._pixelRatio,n=this._height*this._pixelRatio;this.renderTarget1.setSize(i,n),this.renderTarget2.setSize(i,n);for(let c=0;c<this.passes.length;c++)this.passes[c].setSize(i,n)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}};var S6=class extends D3{constructor(e,t,i=null,n=null,c=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=i,this.clearColor=n,this.clearAlpha=c,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new q1}render(e,t,i){let n=e.autoClear;e.autoClear=!1;let c,r;this.overrideMaterial!==null&&(r=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor)),this.clearAlpha!==null&&(c=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:i),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(c),this.overrideMaterial!==null&&(this.scene.overrideMaterial=r),e.autoClear=n}};var Nl=["shaderContainer"],Fi=(()=>{let e=class e{constructor(i,n){this.platformId=i,this.http=n}ngOnInit(){if(X4(this.platformId)==!1)return;Promise.all([this.loadShader("/assets/shaders/shd_Nihilism.vert"),this.loadShader("/assets/shaders/shd_Nihilism.frag")]).then(([c,r])=>{this.initThree(c,r)}).catch(c=>console.error("Error loading shaders:",c))}loadShader(i){return this.http.get(i,{responseType:"text"}).toPromise().then(n=>n||"")}initThree(i,n){this.scene=new b6,this.camera=new H2(75,window.innerWidth/window.innerHeight,.1,1e3),this.renderer=new P4({antialias:!1}),this.renderer.setSize(window.innerWidth,window.innerHeight),this.containerRef.nativeElement.appendChild(this.renderer.domElement);let c=new V6(this.renderer);c.addPass(new S6(this.scene,this.camera));let r=new V2({uniforms:{time:{value:0},ratio:{value:window.innerWidth/window.innerHeight}},vertexShader:i,fragmentShader:n}),s=new l4(2*(window.innerWidth/window.innerHeight),2,1,1),o=new y2(s,r);this.scene.add(o),this.camera.position.set(0,0,1),this.camera.updateProjectionMatrix(),this.renderer.setPixelRatio(window.devicePixelRatio),this.animate(c,r)}animate(i,n){let c=Date.now(),r=()=>{requestAnimationFrame(r);let s=(Date.now()-c)*1e-5;n.uniforms.time.value=s,i.render()};r()}onResize(){let i=window.innerWidth/window.innerHeight;this.camera.aspect=i,this.camera.updateProjectionMatrix(),this.renderer.setPixelRatio(window.devicePixelRatio),this.renderer.setSize(window.innerWidth,window.innerHeight)}};e.\u0275fac=function(n){return new(n||e)(U2(W4),U2(Te))},e.\u0275cmp=f2({type:e,selectors:[["app-shader-background"]],viewQuery:function(n,c){if(n&1&&Y3(Nl,7),n&2){let r;H3(r=_3())&&(c.containerRef=r.first)}},hostBindings:function(n,c){n&1&&G2("resize",function(){return c.onResize()},!1,_e)},standalone:!0,features:[h2],decls:2,vars:0,consts:[["shaderContainer",""]],template:function(n,c){n&1&&Q1(0,"div",null,0)},dependencies:[Ee],styles:["html[_ngcontent-%COMP%], body[_ngcontent-%COMP%]{margin:0;padding:0;overflow:hidden;height:100%}"]});let a=e;return a})();function Oi(a,e){var t=Object.keys(a);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(a);e&&(i=i.filter(function(n){return Object.getOwnPropertyDescriptor(a,n).enumerable})),t.push.apply(t,i)}return t}function l1(a){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?arguments[e]:{};e%2?Oi(Object(t),!0).forEach(function(i){g2(a,i,t[i])}):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(t)):Oi(Object(t)).forEach(function(i){Object.defineProperty(a,i,Object.getOwnPropertyDescriptor(t,i))})}return a}function F0(a){"@babel/helpers - typeof";return F0=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},F0(a)}function Pl(a,e){if(!(a instanceof e))throw new TypeError("Cannot call a class as a function")}function Ui(a,e){for(var t=0;t<e.length;t++){var i=e[t];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(a,i.key,i)}}function Rl(a,e,t){return e&&Ui(a.prototype,e),t&&Ui(a,t),Object.defineProperty(a,"prototype",{writable:!1}),a}function g2(a,e,t){return e in a?Object.defineProperty(a,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):a[e]=t,a}function W8(a,e){return Dl(a)||Fl(a,e)||ua(a,e)||Ul()}function re(a){return kl(a)||Il(a)||ua(a)||Ol()}function kl(a){if(Array.isArray(a))return N8(a)}function Dl(a){if(Array.isArray(a))return a}function Il(a){if(typeof Symbol<"u"&&a[Symbol.iterator]!=null||a["@@iterator"]!=null)return Array.from(a)}function Fl(a,e){var t=a==null?null:typeof Symbol<"u"&&a[Symbol.iterator]||a["@@iterator"];if(t!=null){var i=[],n=!0,c=!1,r,s;try{for(t=t.call(a);!(n=(r=t.next()).done)&&(i.push(r.value),!(e&&i.length===e));n=!0);}catch(o){c=!0,s=o}finally{try{!n&&t.return!=null&&t.return()}finally{if(c)throw s}}return i}}function ua(a,e){if(a){if(typeof a=="string")return N8(a,e);var t=Object.prototype.toString.call(a).slice(8,-1);if(t==="Object"&&a.constructor&&(t=a.constructor.name),t==="Map"||t==="Set")return Array.from(a);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return N8(a,e)}}function N8(a,e){(e==null||e>a.length)&&(e=a.length);for(var t=0,i=new Array(e);t<e;t++)i[t]=a[t];return i}function Ol(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Ul(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var Bi=function(){},q8={},da={},pa=null,ma={mark:Bi,measure:Bi};try{typeof window<"u"&&(q8=window),typeof document<"u"&&(da=document),typeof MutationObserver<"u"&&(pa=MutationObserver),typeof performance<"u"&&(ma=performance)}catch{}var Bl=q8.navigator||{},Gi=Bl.userAgent,Wi=Gi===void 0?"":Gi,u4=q8,a2=da,qi=pa,L0=ma,Zu=!!u4.document,U3=!!a2.documentElement&&!!a2.head&&typeof a2.addEventListener=="function"&&typeof a2.createElement=="function",va=~Wi.indexOf("MSIE")||~Wi.indexOf("Trident/"),w0,A0,T0,E0,N0,I3="___FONT_AWESOME___",P8=16,ga="fa",Ma="svg-inline--fa",O4="data-fa-i2svg",R8="data-fa-pseudo-element",Gl="data-fa-pseudo-element-pending",X8="data-prefix",Y8="data-icon",Xi="fontawesome-i2svg",Wl="async",ql=["HTML","HEAD","STYLE","SCRIPT"],za=function(){try{return process.env.NODE_ENV==="production"}catch{return!1}}(),i2="classic",s2="sharp",Z8=[i2,s2];function se(a){return new Proxy(a,{get:function(t,i){return i in t?t[i]:t[i2]}})}var te=se((w0={},g2(w0,i2,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit",fakd:"kit","fa-kit":"kit","fa-kit-duotone":"kit"}),g2(w0,s2,{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"}),w0)),ie=se((A0={},g2(A0,i2,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),g2(A0,s2,{solid:"fass",regular:"fasr",light:"fasl",thin:"fast"}),A0)),ae=se((T0={},g2(T0,i2,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),g2(T0,s2,{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"}),T0)),Xl=se((E0={},g2(E0,i2,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),g2(E0,s2,{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"}),E0)),Yl=/fa(s|r|l|t|d|b|k|ss|sr|sl|st)?[\-\ ]/,xa="fa-layers-text",Zl=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,$l=se((N0={},g2(N0,i2,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),g2(N0,s2,{900:"fass",400:"fasr",300:"fasl",100:"fast"}),N0)),Ca=[1,2,3,4,5,6,7,8,9,10],jl=Ca.concat([11,12,13,14,15,16,17,18,19,20]),Jl=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],I4={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},ne=new Set;Object.keys(ie[i2]).map(ne.add.bind(ne));Object.keys(ie[s2]).map(ne.add.bind(ne));var Kl=[].concat(Z8,re(ne),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",I4.GROUP,I4.SWAP_OPACITY,I4.PRIMARY,I4.SECONDARY]).concat(Ca.map(function(a){return"".concat(a,"x")})).concat(jl.map(function(a){return"w-".concat(a)})),Q6=u4.FontAwesomeConfig||{};function Ql(a){var e=a2.querySelector("script["+a+"]");if(e)return e.getAttribute(a)}function ef(a){return a===""?!0:a==="false"?!1:a==="true"?!0:a}a2&&typeof a2.querySelector=="function"&&(Yi=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]],Yi.forEach(function(a){var e=W8(a,2),t=e[0],i=e[1],n=ef(Ql(t));n!=null&&(Q6[i]=n)}));var Yi,ba={styleDefault:"solid",familyDefault:"classic",cssPrefix:ga,replacementClass:Ma,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};Q6.familyPrefix&&(Q6.cssPrefix=Q6.familyPrefix);var T6=l1(l1({},ba),Q6);T6.autoReplaceSvg||(T6.observeMutations=!1);var d1={};Object.keys(ba).forEach(function(a){Object.defineProperty(d1,a,{enumerable:!0,set:function(t){T6[a]=t,ee.forEach(function(i){return i(d1)})},get:function(){return T6[a]}})});Object.defineProperty(d1,"familyPrefix",{enumerable:!0,set:function(e){T6.cssPrefix=e,ee.forEach(function(t){return t(d1)})},get:function(){return T6.cssPrefix}});u4.FontAwesomeConfig=d1;var ee=[];function tf(a){return ee.push(a),function(){ee.splice(ee.indexOf(a),1)}}var h4=P8,g3={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function af(a){if(!(!a||!U3)){var e=a2.createElement("style");e.setAttribute("type","text/css"),e.innerHTML=a;for(var t=a2.head.childNodes,i=null,n=t.length-1;n>-1;n--){var c=t[n],r=(c.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(r)>-1&&(i=c)}return a2.head.insertBefore(e,i),a}}var nf="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function ce(){for(var a=12,e="";a-- >0;)e+=nf[Math.random()*62|0];return e}function E6(a){for(var e=[],t=(a||[]).length>>>0;t--;)e[t]=a[t];return e}function $8(a){return a.classList?E6(a.classList):(a.getAttribute("class")||"").split(" ").filter(function(e){return e})}function Ha(a){return"".concat(a).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function cf(a){return Object.keys(a||{}).reduce(function(e,t){return e+"".concat(t,'="').concat(Ha(a[t]),'" ')},"").trim()}function B0(a){return Object.keys(a||{}).reduce(function(e,t){return e+"".concat(t,": ").concat(a[t].trim(),";")},"")}function j8(a){return a.size!==g3.size||a.x!==g3.x||a.y!==g3.y||a.rotate!==g3.rotate||a.flipX||a.flipY}function rf(a){var e=a.transform,t=a.containerWidth,i=a.iconWidth,n={transform:"translate(".concat(t/2," 256)")},c="translate(".concat(e.x*32,", ").concat(e.y*32,") "),r="scale(".concat(e.size/16*(e.flipX?-1:1),", ").concat(e.size/16*(e.flipY?-1:1),") "),s="rotate(".concat(e.rotate," 0 0)"),o={transform:"".concat(c," ").concat(r," ").concat(s)},l={transform:"translate(".concat(i/2*-1," -256)")};return{outer:n,inner:o,path:l}}function sf(a){var e=a.transform,t=a.width,i=t===void 0?P8:t,n=a.height,c=n===void 0?P8:n,r=a.startCentered,s=r===void 0?!1:r,o="";return s&&va?o+="translate(".concat(e.x/h4-i/2,"em, ").concat(e.y/h4-c/2,"em) "):s?o+="translate(calc(-50% + ".concat(e.x/h4,"em), calc(-50% + ").concat(e.y/h4,"em)) "):o+="translate(".concat(e.x/h4,"em, ").concat(e.y/h4,"em) "),o+="scale(".concat(e.size/h4*(e.flipX?-1:1),", ").concat(e.size/h4*(e.flipY?-1:1),") "),o+="rotate(".concat(e.rotate,"deg) "),o}var of=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Solid";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Regular";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Light";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Thin";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-thin: normal 100 1em/1 "Font Awesome 6 Sharp";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-counter-scale, 0.25));
          transform: scale(var(--fa-counter-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom right;
          transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom left;
          transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top left;
          transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(var(--fa-li-width, 2em) * -1);
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  -webkit-animation-name: fa-beat;
          animation-name: fa-beat;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  -webkit-animation-name: fa-bounce;
          animation-name: fa-bounce;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  -webkit-animation-name: fa-fade;
          animation-name: fa-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  -webkit-animation-name: fa-beat-fade;
          animation-name: fa-beat-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  -webkit-animation-name: fa-flip;
          animation-name: fa-flip;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  -webkit-animation-name: fa-shake;
          animation-name: fa-shake;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 2s);
          animation-duration: var(--fa-animation-duration, 2s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, steps(8));
          animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    -webkit-animation-delay: -1ms;
            animation-delay: -1ms;
    -webkit-animation-duration: 1ms;
            animation-duration: 1ms;
    -webkit-animation-iteration-count: 1;
            animation-iteration-count: 1;
    -webkit-transition-delay: 0s;
            transition-delay: 0s;
    -webkit-transition-duration: 0s;
            transition-duration: 0s;
  }
}
@-webkit-keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@-webkit-keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@-webkit-keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@-webkit-keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@-webkit-keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@-webkit-keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@-webkit-keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
@keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  -webkit-transform: rotate(90deg);
          transform: rotate(90deg);
}

.fa-rotate-180 {
  -webkit-transform: rotate(180deg);
          transform: rotate(180deg);
}

.fa-rotate-270 {
  -webkit-transform: rotate(270deg);
          transform: rotate(270deg);
}

.fa-flip-horizontal {
  -webkit-transform: scale(-1, 1);
          transform: scale(-1, 1);
}

.fa-flip-vertical {
  -webkit-transform: scale(1, -1);
          transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  -webkit-transform: scale(-1, -1);
          transform: scale(-1, -1);
}

.fa-rotate-by {
  -webkit-transform: rotate(var(--fa-rotate-angle, 0));
          transform: rotate(var(--fa-rotate-angle, 0));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.fad.fa-inverse,
.fa-duotone.fa-inverse {
  color: var(--fa-inverse, #fff);
}`;function _a(){var a=ga,e=Ma,t=d1.cssPrefix,i=d1.replacementClass,n=of;if(t!==a||i!==e){var c=new RegExp("\\.".concat(a,"\\-"),"g"),r=new RegExp("\\--".concat(a,"\\-"),"g"),s=new RegExp("\\.".concat(e),"g");n=n.replace(c,".".concat(t,"-")).replace(r,"--".concat(t,"-")).replace(s,".".concat(i))}return n}var Zi=!1;function w8(){d1.autoAddCss&&!Zi&&(af(_a()),Zi=!0)}var lf={mixout:function(){return{dom:{css:_a,insertCss:w8}}},hooks:function(){return{beforeDOMElementCreation:function(){w8()},beforeI2svg:function(){w8()}}}},F3=u4||{};F3[I3]||(F3[I3]={});F3[I3].styles||(F3[I3].styles={});F3[I3].hooks||(F3[I3].hooks={});F3[I3].shims||(F3[I3].shims=[]);var l3=F3[I3],ya=[],ff=function a(){a2.removeEventListener("DOMContentLoaded",a),O0=1,ya.map(function(e){return e()})},O0=!1;U3&&(O0=(a2.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(a2.readyState),O0||a2.addEventListener("DOMContentLoaded",ff));function hf(a){U3&&(O0?setTimeout(a,0):ya.push(a))}function oe(a){var e=a.tag,t=a.attributes,i=t===void 0?{}:t,n=a.children,c=n===void 0?[]:n;return typeof a=="string"?Ha(a):"<".concat(e," ").concat(cf(i),">").concat(c.map(oe).join(""),"</").concat(e,">")}function $i(a,e,t){if(a&&a[e]&&a[e][t])return{prefix:e,iconName:t,icon:a[e][t]}}var uf=function(e,t){return function(i,n,c,r){return e.call(t,i,n,c,r)}},A8=function(e,t,i,n){var c=Object.keys(e),r=c.length,s=n!==void 0?uf(t,n):t,o,l,f;for(i===void 0?(o=1,f=e[c[0]]):(o=0,f=i);o<r;o++)l=c[o],f=s(f,e[l],l,e);return f};function df(a){for(var e=[],t=0,i=a.length;t<i;){var n=a.charCodeAt(t++);if(n>=55296&&n<=56319&&t<i){var c=a.charCodeAt(t++);(c&64512)==56320?e.push(((n&1023)<<10)+(c&1023)+65536):(e.push(n),t--)}else e.push(n)}return e}function k8(a){var e=df(a);return e.length===1?e[0].toString(16):null}function pf(a,e){var t=a.length,i=a.charCodeAt(e),n;return i>=55296&&i<=56319&&t>e+1&&(n=a.charCodeAt(e+1),n>=56320&&n<=57343)?(i-55296)*1024+n-56320+65536:i}function ji(a){return Object.keys(a).reduce(function(e,t){var i=a[t],n=!!i.icon;return n?e[i.iconName]=i.icon:e[t]=i,e},{})}function D8(a,e){var t=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},i=t.skipHooks,n=i===void 0?!1:i,c=ji(e);typeof l3.hooks.addPack=="function"&&!n?l3.hooks.addPack(a,ji(e)):l3.styles[a]=l1(l1({},l3.styles[a]||{}),c),a==="fas"&&D8("fa",e)}var P0,R0,k0,L6=l3.styles,mf=l3.shims,vf=(P0={},g2(P0,i2,Object.values(ae[i2])),g2(P0,s2,Object.values(ae[s2])),P0),J8=null,Va={},Sa={},La={},wa={},Aa={},gf=(R0={},g2(R0,i2,Object.keys(te[i2])),g2(R0,s2,Object.keys(te[s2])),R0);function Mf(a){return~Kl.indexOf(a)}function zf(a,e){var t=e.split("-"),i=t[0],n=t.slice(1).join("-");return i===a&&n!==""&&!Mf(n)?n:null}var Ta=function(){var e=function(c){return A8(L6,function(r,s,o){return r[o]=A8(s,c,{}),r},{})};Va=e(function(n,c,r){if(c[3]&&(n[c[3]]=r),c[2]){var s=c[2].filter(function(o){return typeof o=="number"});s.forEach(function(o){n[o.toString(16)]=r})}return n}),Sa=e(function(n,c,r){if(n[r]=r,c[2]){var s=c[2].filter(function(o){return typeof o=="string"});s.forEach(function(o){n[o]=r})}return n}),Aa=e(function(n,c,r){var s=c[2];return n[r]=r,s.forEach(function(o){n[o]=r}),n});var t="far"in L6||d1.autoFetchSvg,i=A8(mf,function(n,c){var r=c[0],s=c[1],o=c[2];return s==="far"&&!t&&(s="fas"),typeof r=="string"&&(n.names[r]={prefix:s,iconName:o}),typeof r=="number"&&(n.unicodes[r.toString(16)]={prefix:s,iconName:o}),n},{names:{},unicodes:{}});La=i.names,wa=i.unicodes,J8=G0(d1.styleDefault,{family:d1.familyDefault})};tf(function(a){J8=G0(a.styleDefault,{family:d1.familyDefault})});Ta();function K8(a,e){return(Va[a]||{})[e]}function xf(a,e){return(Sa[a]||{})[e]}function F4(a,e){return(Aa[a]||{})[e]}function Ea(a){return La[a]||{prefix:null,iconName:null}}function Cf(a){var e=wa[a],t=K8("fas",a);return e||(t?{prefix:"fas",iconName:t}:null)||{prefix:null,iconName:null}}function d4(){return J8}var Q8=function(){return{prefix:null,iconName:null,rest:[]}};function G0(a){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},t=e.family,i=t===void 0?i2:t,n=te[i][a],c=ie[i][a]||ie[i][n],r=a in l3.styles?a:null;return c||r||null}var Ji=(k0={},g2(k0,i2,Object.keys(ae[i2])),g2(k0,s2,Object.keys(ae[s2])),k0);function W0(a){var e,t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=t.skipLookups,n=i===void 0?!1:i,c=(e={},g2(e,i2,"".concat(d1.cssPrefix,"-").concat(i2)),g2(e,s2,"".concat(d1.cssPrefix,"-").concat(s2)),e),r=null,s=i2;(a.includes(c[i2])||a.some(function(l){return Ji[i2].includes(l)}))&&(s=i2),(a.includes(c[s2])||a.some(function(l){return Ji[s2].includes(l)}))&&(s=s2);var o=a.reduce(function(l,f){var h=zf(d1.cssPrefix,f);if(L6[f]?(f=vf[s].includes(f)?Xl[s][f]:f,r=f,l.prefix=f):gf[s].indexOf(f)>-1?(r=f,l.prefix=G0(f,{family:s})):h?l.iconName=h:f!==d1.replacementClass&&f!==c[i2]&&f!==c[s2]&&l.rest.push(f),!n&&l.prefix&&l.iconName){var d=r==="fa"?Ea(l.iconName):{},m=F4(l.prefix,l.iconName);d.prefix&&(r=null),l.iconName=d.iconName||m||l.iconName,l.prefix=d.prefix||l.prefix,l.prefix==="far"&&!L6.far&&L6.fas&&!d1.autoFetchSvg&&(l.prefix="fas")}return l},Q8());return(a.includes("fa-brands")||a.includes("fab"))&&(o.prefix="fab"),(a.includes("fa-duotone")||a.includes("fad"))&&(o.prefix="fad"),!o.prefix&&s===s2&&(L6.fass||d1.autoFetchSvg)&&(o.prefix="fass",o.iconName=F4(o.prefix,o.iconName)||o.iconName),(o.prefix==="fa"||r==="fa")&&(o.prefix=d4()||"fas"),o}var bf=function(){function a(){Pl(this,a),this.definitions={}}return Rl(a,[{key:"add",value:function(){for(var t=this,i=arguments.length,n=new Array(i),c=0;c<i;c++)n[c]=arguments[c];var r=n.reduce(this._pullDefinitions,{});Object.keys(r).forEach(function(s){t.definitions[s]=l1(l1({},t.definitions[s]||{}),r[s]),D8(s,r[s]);var o=ae[i2][s];o&&D8(o,r[s]),Ta()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(t,i){var n=i.prefix&&i.iconName&&i.icon?{0:i}:i;return Object.keys(n).map(function(c){var r=n[c],s=r.prefix,o=r.iconName,l=r.icon,f=l[2];t[s]||(t[s]={}),f.length>0&&f.forEach(function(h){typeof h=="string"&&(t[s][h]=l)}),t[s][o]=l}),t}}]),a}(),Ki=[],w6={},A6={},Hf=Object.keys(A6);function _f(a,e){var t=e.mixoutsTo;return Ki=a,w6={},Object.keys(A6).forEach(function(i){Hf.indexOf(i)===-1&&delete A6[i]}),Ki.forEach(function(i){var n=i.mixout?i.mixout():{};if(Object.keys(n).forEach(function(r){typeof n[r]=="function"&&(t[r]=n[r]),F0(n[r])==="object"&&Object.keys(n[r]).forEach(function(s){t[r]||(t[r]={}),t[r][s]=n[r][s]})}),i.hooks){var c=i.hooks();Object.keys(c).forEach(function(r){w6[r]||(w6[r]=[]),w6[r].push(c[r])})}i.provides&&i.provides(A6)}),t}function I8(a,e){for(var t=arguments.length,i=new Array(t>2?t-2:0),n=2;n<t;n++)i[n-2]=arguments[n];var c=w6[a]||[];return c.forEach(function(r){e=r.apply(null,[e].concat(i))}),e}function U4(a){for(var e=arguments.length,t=new Array(e>1?e-1:0),i=1;i<e;i++)t[i-1]=arguments[i];var n=w6[a]||[];n.forEach(function(c){c.apply(null,t)})}function O3(){var a=arguments[0],e=Array.prototype.slice.call(arguments,1);return A6[a]?A6[a].apply(null,e):void 0}function F8(a){a.prefix==="fa"&&(a.prefix="fas");var e=a.iconName,t=a.prefix||d4();if(e)return e=F4(t,e)||e,$i(Na.definitions,t,e)||$i(l3.styles,t,e)}var Na=new bf,yf=function(){d1.autoReplaceSvg=!1,d1.observeMutations=!1,U4("noAuto")},Vf={i2svg:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return U3?(U4("beforeI2svg",e),O3("pseudoElements2svg",e),O3("i2svg",e)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},t=e.autoReplaceSvgRoot;d1.autoReplaceSvg===!1&&(d1.autoReplaceSvg=!0),d1.observeMutations=!0,hf(function(){Lf({autoReplaceSvgRoot:t}),U4("watch",e)})}},Sf={icon:function(e){if(e===null)return null;if(F0(e)==="object"&&e.prefix&&e.iconName)return{prefix:e.prefix,iconName:F4(e.prefix,e.iconName)||e.iconName};if(Array.isArray(e)&&e.length===2){var t=e[1].indexOf("fa-")===0?e[1].slice(3):e[1],i=G0(e[0]);return{prefix:i,iconName:F4(i,t)||t}}if(typeof e=="string"&&(e.indexOf("".concat(d1.cssPrefix,"-"))>-1||e.match(Yl))){var n=W0(e.split(" "),{skipLookups:!0});return{prefix:n.prefix||d4(),iconName:F4(n.prefix,n.iconName)||n.iconName}}if(typeof e=="string"){var c=d4();return{prefix:c,iconName:F4(c,e)||e}}}},X2={noAuto:yf,config:d1,dom:Vf,parse:Sf,library:Na,findIconDefinition:F8,toHtml:oe},Lf=function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},t=e.autoReplaceSvgRoot,i=t===void 0?a2:t;(Object.keys(l3.styles).length>0||d1.autoFetchSvg)&&U3&&d1.autoReplaceSvg&&X2.dom.i2svg({node:i})};function q0(a,e){return Object.defineProperty(a,"abstract",{get:e}),Object.defineProperty(a,"html",{get:function(){return a.abstract.map(function(i){return oe(i)})}}),Object.defineProperty(a,"node",{get:function(){if(U3){var i=a2.createElement("div");return i.innerHTML=a.html,i.children}}}),a}function wf(a){var e=a.children,t=a.main,i=a.mask,n=a.attributes,c=a.styles,r=a.transform;if(j8(r)&&t.found&&!i.found){var s=t.width,o=t.height,l={x:s/o/2,y:.5};n.style=B0(l1(l1({},c),{},{"transform-origin":"".concat(l.x+r.x/16,"em ").concat(l.y+r.y/16,"em")}))}return[{tag:"svg",attributes:n,children:e}]}function Af(a){var e=a.prefix,t=a.iconName,i=a.children,n=a.attributes,c=a.symbol,r=c===!0?"".concat(e,"-").concat(d1.cssPrefix,"-").concat(t):c;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:l1(l1({},n),{},{id:r}),children:i}]}]}function e5(a){var e=a.icons,t=e.main,i=e.mask,n=a.prefix,c=a.iconName,r=a.transform,s=a.symbol,o=a.title,l=a.maskId,f=a.titleId,h=a.extra,d=a.watchable,m=d===void 0?!1:d,g=i.found?i:t,z=g.width,p=g.height,u=n==="fak",_=[d1.replacementClass,c?"".concat(d1.cssPrefix,"-").concat(c):""].filter(function($){return h.classes.indexOf($)===-1}).filter(function($){return $!==""||!!$}).concat(h.classes).join(" "),C={children:[],attributes:l1(l1({},h.attributes),{},{"data-prefix":n,"data-icon":c,class:_,role:h.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(z," ").concat(p)})},H=u&&!~h.classes.indexOf("fa-fw")?{width:"".concat(z/p*16*.0625,"em")}:{};m&&(C.attributes[O4]=""),o&&(C.children.push({tag:"title",attributes:{id:C.attributes["aria-labelledby"]||"title-".concat(f||ce())},children:[o]}),delete C.attributes.title);var A=l1(l1({},C),{},{prefix:n,iconName:c,main:t,mask:i,maskId:l,transform:r,symbol:s,styles:l1(l1({},H),h.styles)}),S=i.found&&t.found?O3("generateAbstractMask",A)||{children:[],attributes:{}}:O3("generateAbstractIcon",A)||{children:[],attributes:{}},V=S.children,F=S.attributes;return A.children=V,A.attributes=F,s?Af(A):wf(A)}function Qi(a){var e=a.content,t=a.width,i=a.height,n=a.transform,c=a.title,r=a.extra,s=a.watchable,o=s===void 0?!1:s,l=l1(l1(l1({},r.attributes),c?{title:c}:{}),{},{class:r.classes.join(" ")});o&&(l[O4]="");var f=l1({},r.styles);j8(n)&&(f.transform=sf({transform:n,startCentered:!0,width:t,height:i}),f["-webkit-transform"]=f.transform);var h=B0(f);h.length>0&&(l.style=h);var d=[];return d.push({tag:"span",attributes:l,children:[e]}),c&&d.push({tag:"span",attributes:{class:"sr-only"},children:[c]}),d}function Tf(a){var e=a.content,t=a.title,i=a.extra,n=l1(l1(l1({},i.attributes),t?{title:t}:{}),{},{class:i.classes.join(" ")}),c=B0(i.styles);c.length>0&&(n.style=c);var r=[];return r.push({tag:"span",attributes:n,children:[e]}),t&&r.push({tag:"span",attributes:{class:"sr-only"},children:[t]}),r}var T8=l3.styles;function O8(a){var e=a[0],t=a[1],i=a.slice(4),n=W8(i,1),c=n[0],r=null;return Array.isArray(c)?r={tag:"g",attributes:{class:"".concat(d1.cssPrefix,"-").concat(I4.GROUP)},children:[{tag:"path",attributes:{class:"".concat(d1.cssPrefix,"-").concat(I4.SECONDARY),fill:"currentColor",d:c[0]}},{tag:"path",attributes:{class:"".concat(d1.cssPrefix,"-").concat(I4.PRIMARY),fill:"currentColor",d:c[1]}}]}:r={tag:"path",attributes:{fill:"currentColor",d:c}},{found:!0,width:e,height:t,icon:r}}var Ef={found:!1,width:512,height:512};function Nf(a,e){!za&&!d1.showMissingIcons&&a&&console.error('Icon with name "'.concat(a,'" and prefix "').concat(e,'" is missing.'))}function U8(a,e){var t=e;return e==="fa"&&d1.styleDefault!==null&&(e=d4()),new Promise(function(i,n){var c={found:!1,width:512,height:512,icon:O3("missingIconAbstract")||{}};if(t==="fa"){var r=Ea(a)||{};a=r.iconName||a,e=r.prefix||e}if(a&&e&&T8[e]&&T8[e][a]){var s=T8[e][a];return i(O8(s))}Nf(a,e),i(l1(l1({},Ef),{},{icon:d1.showMissingIcons&&a?O3("missingIconAbstract")||{}:{}}))})}var ea=function(){},B8=d1.measurePerformance&&L0&&L0.mark&&L0.measure?L0:{mark:ea,measure:ea},K6='FA "6.5.2"',Pf=function(e){return B8.mark("".concat(K6," ").concat(e," begins")),function(){return Pa(e)}},Pa=function(e){B8.mark("".concat(K6," ").concat(e," ends")),B8.measure("".concat(K6," ").concat(e),"".concat(K6," ").concat(e," begins"),"".concat(K6," ").concat(e," ends"))},t5={begin:Pf,end:Pa},D0=function(){};function ta(a){var e=a.getAttribute?a.getAttribute(O4):null;return typeof e=="string"}function Rf(a){var e=a.getAttribute?a.getAttribute(X8):null,t=a.getAttribute?a.getAttribute(Y8):null;return e&&t}function kf(a){return a&&a.classList&&a.classList.contains&&a.classList.contains(d1.replacementClass)}function Df(){if(d1.autoReplaceSvg===!0)return I0.replace;var a=I0[d1.autoReplaceSvg];return a||I0.replace}function If(a){return a2.createElementNS("http://www.w3.org/2000/svg",a)}function Ff(a){return a2.createElement(a)}function Ra(a){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},t=e.ceFn,i=t===void 0?a.tag==="svg"?If:Ff:t;if(typeof a=="string")return a2.createTextNode(a);var n=i(a.tag);Object.keys(a.attributes||[]).forEach(function(r){n.setAttribute(r,a.attributes[r])});var c=a.children||[];return c.forEach(function(r){n.appendChild(Ra(r,{ceFn:i}))}),n}function Of(a){var e=" ".concat(a.outerHTML," ");return e="".concat(e,"Font Awesome fontawesome.com "),e}var I0={replace:function(e){var t=e[0];if(t.parentNode)if(e[1].forEach(function(n){t.parentNode.insertBefore(Ra(n),t)}),t.getAttribute(O4)===null&&d1.keepOriginalSource){var i=a2.createComment(Of(t));t.parentNode.replaceChild(i,t)}else t.remove()},nest:function(e){var t=e[0],i=e[1];if(~$8(t).indexOf(d1.replacementClass))return I0.replace(e);var n=new RegExp("".concat(d1.cssPrefix,"-.*"));if(delete i[0].attributes.id,i[0].attributes.class){var c=i[0].attributes.class.split(" ").reduce(function(s,o){return o===d1.replacementClass||o.match(n)?s.toSvg.push(o):s.toNode.push(o),s},{toNode:[],toSvg:[]});i[0].attributes.class=c.toSvg.join(" "),c.toNode.length===0?t.removeAttribute("class"):t.setAttribute("class",c.toNode.join(" "))}var r=i.map(function(s){return oe(s)}).join(`
`);t.setAttribute(O4,""),t.innerHTML=r}};function ia(a){a()}function ka(a,e){var t=typeof e=="function"?e:D0;if(a.length===0)t();else{var i=ia;d1.mutateApproach===Wl&&(i=u4.requestAnimationFrame||ia),i(function(){var n=Df(),c=t5.begin("mutate");a.map(n),c(),t()})}}var i5=!1;function Da(){i5=!0}function G8(){i5=!1}var U0=null;function aa(a){if(qi&&d1.observeMutations){var e=a.treeCallback,t=e===void 0?D0:e,i=a.nodeCallback,n=i===void 0?D0:i,c=a.pseudoElementsCallback,r=c===void 0?D0:c,s=a.observeMutationsRoot,o=s===void 0?a2:s;U0=new qi(function(l){if(!i5){var f=d4();E6(l).forEach(function(h){if(h.type==="childList"&&h.addedNodes.length>0&&!ta(h.addedNodes[0])&&(d1.searchPseudoElements&&r(h.target),t(h.target)),h.type==="attributes"&&h.target.parentNode&&d1.searchPseudoElements&&r(h.target.parentNode),h.type==="attributes"&&ta(h.target)&&~Jl.indexOf(h.attributeName))if(h.attributeName==="class"&&Rf(h.target)){var d=W0($8(h.target)),m=d.prefix,g=d.iconName;h.target.setAttribute(X8,m||f),g&&h.target.setAttribute(Y8,g)}else kf(h.target)&&n(h.target)})}}),U3&&U0.observe(o,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function Uf(){U0&&U0.disconnect()}function Bf(a){var e=a.getAttribute("style"),t=[];return e&&(t=e.split(";").reduce(function(i,n){var c=n.split(":"),r=c[0],s=c.slice(1);return r&&s.length>0&&(i[r]=s.join(":").trim()),i},{})),t}function Gf(a){var e=a.getAttribute("data-prefix"),t=a.getAttribute("data-icon"),i=a.innerText!==void 0?a.innerText.trim():"",n=W0($8(a));return n.prefix||(n.prefix=d4()),e&&t&&(n.prefix=e,n.iconName=t),n.iconName&&n.prefix||(n.prefix&&i.length>0&&(n.iconName=xf(n.prefix,a.innerText)||K8(n.prefix,k8(a.innerText))),!n.iconName&&d1.autoFetchSvg&&a.firstChild&&a.firstChild.nodeType===Node.TEXT_NODE&&(n.iconName=a.firstChild.data)),n}function Wf(a){var e=E6(a.attributes).reduce(function(n,c){return n.name!=="class"&&n.name!=="style"&&(n[c.name]=c.value),n},{}),t=a.getAttribute("title"),i=a.getAttribute("data-fa-title-id");return d1.autoA11y&&(t?e["aria-labelledby"]="".concat(d1.replacementClass,"-title-").concat(i||ce()):(e["aria-hidden"]="true",e.focusable="false")),e}function qf(){return{iconName:null,title:null,titleId:null,prefix:null,transform:g3,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function na(a){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},t=Gf(a),i=t.iconName,n=t.prefix,c=t.rest,r=Wf(a),s=I8("parseNodeAttributes",{},a),o=e.styleParser?Bf(a):[];return l1({iconName:i,title:a.getAttribute("title"),titleId:a.getAttribute("data-fa-title-id"),prefix:n,transform:g3,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:c,styles:o,attributes:r}},s)}var Xf=l3.styles;function Ia(a){var e=d1.autoReplaceSvg==="nest"?na(a,{styleParser:!1}):na(a);return~e.extra.classes.indexOf(xa)?O3("generateLayersText",a,e):O3("generateSvgReplacementMutation",a,e)}var p4=new Set;Z8.map(function(a){p4.add("fa-".concat(a))});Object.keys(te[i2]).map(p4.add.bind(p4));Object.keys(te[s2]).map(p4.add.bind(p4));p4=re(p4);function ca(a){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!U3)return Promise.resolve();var t=a2.documentElement.classList,i=function(h){return t.add("".concat(Xi,"-").concat(h))},n=function(h){return t.remove("".concat(Xi,"-").concat(h))},c=d1.autoFetchSvg?p4:Z8.map(function(f){return"fa-".concat(f)}).concat(Object.keys(Xf));c.includes("fa")||c.push("fa");var r=[".".concat(xa,":not([").concat(O4,"])")].concat(c.map(function(f){return".".concat(f,":not([").concat(O4,"])")})).join(", ");if(r.length===0)return Promise.resolve();var s=[];try{s=E6(a.querySelectorAll(r))}catch{}if(s.length>0)i("pending"),n("complete");else return Promise.resolve();var o=t5.begin("onTree"),l=s.reduce(function(f,h){try{var d=Ia(h);d&&f.push(d)}catch(m){za||m.name==="MissingIcon"&&console.error(m)}return f},[]);return new Promise(function(f,h){Promise.all(l).then(function(d){ka(d,function(){i("active"),i("complete"),n("pending"),typeof e=="function"&&e(),o(),f()})}).catch(function(d){o(),h(d)})})}function Yf(a){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;Ia(a).then(function(t){t&&ka([t],e)})}function Zf(a){return function(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=(e||{}).icon?e:F8(e||{}),n=t.mask;return n&&(n=(n||{}).icon?n:F8(n||{})),a(i,l1(l1({},t),{},{mask:n}))}}var $f=function(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=t.transform,n=i===void 0?g3:i,c=t.symbol,r=c===void 0?!1:c,s=t.mask,o=s===void 0?null:s,l=t.maskId,f=l===void 0?null:l,h=t.title,d=h===void 0?null:h,m=t.titleId,g=m===void 0?null:m,z=t.classes,p=z===void 0?[]:z,u=t.attributes,_=u===void 0?{}:u,C=t.styles,H=C===void 0?{}:C;if(e){var A=e.prefix,S=e.iconName,V=e.icon;return q0(l1({type:"icon"},e),function(){return U4("beforeDOMElementCreation",{iconDefinition:e,params:t}),d1.autoA11y&&(d?_["aria-labelledby"]="".concat(d1.replacementClass,"-title-").concat(g||ce()):(_["aria-hidden"]="true",_.focusable="false")),e5({icons:{main:O8(V),mask:o?O8(o.icon):{found:!1,width:null,height:null,icon:{}}},prefix:A,iconName:S,transform:l1(l1({},g3),n),symbol:r,title:d,maskId:f,titleId:g,extra:{attributes:_,styles:H,classes:p}})})}},jf={mixout:function(){return{icon:Zf($f)}},hooks:function(){return{mutationObserverCallbacks:function(t){return t.treeCallback=ca,t.nodeCallback=Yf,t}}},provides:function(e){e.i2svg=function(t){var i=t.node,n=i===void 0?a2:i,c=t.callback,r=c===void 0?function(){}:c;return ca(n,r)},e.generateSvgReplacementMutation=function(t,i){var n=i.iconName,c=i.title,r=i.titleId,s=i.prefix,o=i.transform,l=i.symbol,f=i.mask,h=i.maskId,d=i.extra;return new Promise(function(m,g){Promise.all([U8(n,s),f.iconName?U8(f.iconName,f.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(z){var p=W8(z,2),u=p[0],_=p[1];m([t,e5({icons:{main:u,mask:_},prefix:s,iconName:n,transform:o,symbol:l,maskId:h,title:c,titleId:r,extra:d,watchable:!0})])}).catch(g)})},e.generateAbstractIcon=function(t){var i=t.children,n=t.attributes,c=t.main,r=t.transform,s=t.styles,o=B0(s);o.length>0&&(n.style=o);var l;return j8(r)&&(l=O3("generateAbstractTransformGrouping",{main:c,transform:r,containerWidth:c.width,iconWidth:c.width})),i.push(l||c.icon),{children:i,attributes:n}}}},Jf={mixout:function(){return{layer:function(t){var i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=i.classes,c=n===void 0?[]:n;return q0({type:"layer"},function(){U4("beforeDOMElementCreation",{assembler:t,params:i});var r=[];return t(function(s){Array.isArray(s)?s.map(function(o){r=r.concat(o.abstract)}):r=r.concat(s.abstract)}),[{tag:"span",attributes:{class:["".concat(d1.cssPrefix,"-layers")].concat(re(c)).join(" ")},children:r}]})}}}},Kf={mixout:function(){return{counter:function(t){var i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=i.title,c=n===void 0?null:n,r=i.classes,s=r===void 0?[]:r,o=i.attributes,l=o===void 0?{}:o,f=i.styles,h=f===void 0?{}:f;return q0({type:"counter",content:t},function(){return U4("beforeDOMElementCreation",{content:t,params:i}),Tf({content:t.toString(),title:c,extra:{attributes:l,styles:h,classes:["".concat(d1.cssPrefix,"-layers-counter")].concat(re(s))}})})}}}},Qf={mixout:function(){return{text:function(t){var i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=i.transform,c=n===void 0?g3:n,r=i.title,s=r===void 0?null:r,o=i.classes,l=o===void 0?[]:o,f=i.attributes,h=f===void 0?{}:f,d=i.styles,m=d===void 0?{}:d;return q0({type:"text",content:t},function(){return U4("beforeDOMElementCreation",{content:t,params:i}),Qi({content:t,transform:l1(l1({},g3),c),title:s,extra:{attributes:h,styles:m,classes:["".concat(d1.cssPrefix,"-layers-text")].concat(re(l))}})})}}},provides:function(e){e.generateLayersText=function(t,i){var n=i.title,c=i.transform,r=i.extra,s=null,o=null;if(va){var l=parseInt(getComputedStyle(t).fontSize,10),f=t.getBoundingClientRect();s=f.width/l,o=f.height/l}return d1.autoA11y&&!n&&(r.attributes["aria-hidden"]="true"),Promise.resolve([t,Qi({content:t.innerHTML,width:s,height:o,transform:c,title:n,extra:r,watchable:!0})])}}},eh=new RegExp('"',"ug"),ra=[1105920,1112319];function th(a){var e=a.replace(eh,""),t=pf(e,0),i=t>=ra[0]&&t<=ra[1],n=e.length===2?e[0]===e[1]:!1;return{value:k8(n?e[0]:e),isSecondary:i||n}}function sa(a,e){var t="".concat(Gl).concat(e.replace(":","-"));return new Promise(function(i,n){if(a.getAttribute(t)!==null)return i();var c=E6(a.children),r=c.filter(function(V){return V.getAttribute(R8)===e})[0],s=u4.getComputedStyle(a,e),o=s.getPropertyValue("font-family").match(Zl),l=s.getPropertyValue("font-weight"),f=s.getPropertyValue("content");if(r&&!o)return a.removeChild(r),i();if(o&&f!=="none"&&f!==""){var h=s.getPropertyValue("content"),d=~["Sharp"].indexOf(o[2])?s2:i2,m=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(o[2])?ie[d][o[2].toLowerCase()]:$l[d][l],g=th(h),z=g.value,p=g.isSecondary,u=o[0].startsWith("FontAwesome"),_=K8(m,z),C=_;if(u){var H=Cf(z);H.iconName&&H.prefix&&(_=H.iconName,m=H.prefix)}if(_&&!p&&(!r||r.getAttribute(X8)!==m||r.getAttribute(Y8)!==C)){a.setAttribute(t,C),r&&a.removeChild(r);var A=qf(),S=A.extra;S.attributes[R8]=e,U8(_,m).then(function(V){var F=e5(l1(l1({},A),{},{icons:{main:V,mask:Q8()},prefix:m,iconName:C,extra:S,watchable:!0})),$=a2.createElementNS("http://www.w3.org/2000/svg","svg");e==="::before"?a.insertBefore($,a.firstChild):a.appendChild($),$.outerHTML=F.map(function(M){return oe(M)}).join(`
`),a.removeAttribute(t),i()}).catch(n)}else i()}else i()})}function ih(a){return Promise.all([sa(a,"::before"),sa(a,"::after")])}function ah(a){return a.parentNode!==document.head&&!~ql.indexOf(a.tagName.toUpperCase())&&!a.getAttribute(R8)&&(!a.parentNode||a.parentNode.tagName!=="svg")}function oa(a){if(U3)return new Promise(function(e,t){var i=E6(a.querySelectorAll("*")).filter(ah).map(ih),n=t5.begin("searchPseudoElements");Da(),Promise.all(i).then(function(){n(),G8(),e()}).catch(function(){n(),G8(),t()})})}var nh={hooks:function(){return{mutationObserverCallbacks:function(t){return t.pseudoElementsCallback=oa,t}}},provides:function(e){e.pseudoElements2svg=function(t){var i=t.node,n=i===void 0?a2:i;d1.searchPseudoElements&&oa(n)}}},la=!1,ch={mixout:function(){return{dom:{unwatch:function(){Da(),la=!0}}}},hooks:function(){return{bootstrap:function(){aa(I8("mutationObserverCallbacks",{}))},noAuto:function(){Uf()},watch:function(t){var i=t.observeMutationsRoot;la?G8():aa(I8("mutationObserverCallbacks",{observeMutationsRoot:i}))}}}},fa=function(e){var t={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return e.toLowerCase().split(" ").reduce(function(i,n){var c=n.toLowerCase().split("-"),r=c[0],s=c.slice(1).join("-");if(r&&s==="h")return i.flipX=!0,i;if(r&&s==="v")return i.flipY=!0,i;if(s=parseFloat(s),isNaN(s))return i;switch(r){case"grow":i.size=i.size+s;break;case"shrink":i.size=i.size-s;break;case"left":i.x=i.x-s;break;case"right":i.x=i.x+s;break;case"up":i.y=i.y-s;break;case"down":i.y=i.y+s;break;case"rotate":i.rotate=i.rotate+s;break}return i},t)},rh={mixout:function(){return{parse:{transform:function(t){return fa(t)}}}},hooks:function(){return{parseNodeAttributes:function(t,i){var n=i.getAttribute("data-fa-transform");return n&&(t.transform=fa(n)),t}}},provides:function(e){e.generateAbstractTransformGrouping=function(t){var i=t.main,n=t.transform,c=t.containerWidth,r=t.iconWidth,s={transform:"translate(".concat(c/2," 256)")},o="translate(".concat(n.x*32,", ").concat(n.y*32,") "),l="scale(".concat(n.size/16*(n.flipX?-1:1),", ").concat(n.size/16*(n.flipY?-1:1),") "),f="rotate(".concat(n.rotate," 0 0)"),h={transform:"".concat(o," ").concat(l," ").concat(f)},d={transform:"translate(".concat(r/2*-1," -256)")},m={outer:s,inner:h,path:d};return{tag:"g",attributes:l1({},m.outer),children:[{tag:"g",attributes:l1({},m.inner),children:[{tag:i.icon.tag,children:i.icon.children,attributes:l1(l1({},i.icon.attributes),m.path)}]}]}}}},E8={x:0,y:0,width:"100%",height:"100%"};function ha(a){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return a.attributes&&(a.attributes.fill||e)&&(a.attributes.fill="black"),a}function sh(a){return a.tag==="g"?a.children:[a]}var oh={hooks:function(){return{parseNodeAttributes:function(t,i){var n=i.getAttribute("data-fa-mask"),c=n?W0(n.split(" ").map(function(r){return r.trim()})):Q8();return c.prefix||(c.prefix=d4()),t.mask=c,t.maskId=i.getAttribute("data-fa-mask-id"),t}}},provides:function(e){e.generateAbstractMask=function(t){var i=t.children,n=t.attributes,c=t.main,r=t.mask,s=t.maskId,o=t.transform,l=c.width,f=c.icon,h=r.width,d=r.icon,m=rf({transform:o,containerWidth:h,iconWidth:l}),g={tag:"rect",attributes:l1(l1({},E8),{},{fill:"white"})},z=f.children?{children:f.children.map(ha)}:{},p={tag:"g",attributes:l1({},m.inner),children:[ha(l1({tag:f.tag,attributes:l1(l1({},f.attributes),m.path)},z))]},u={tag:"g",attributes:l1({},m.outer),children:[p]},_="mask-".concat(s||ce()),C="clip-".concat(s||ce()),H={tag:"mask",attributes:l1(l1({},E8),{},{id:_,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[g,u]},A={tag:"defs",children:[{tag:"clipPath",attributes:{id:C},children:sh(d)},H]};return i.push(A,{tag:"rect",attributes:l1({fill:"currentColor","clip-path":"url(#".concat(C,")"),mask:"url(#".concat(_,")")},E8)}),{children:i,attributes:n}}}},lh={provides:function(e){var t=!1;u4.matchMedia&&(t=u4.matchMedia("(prefers-reduced-motion: reduce)").matches),e.missingIconAbstract=function(){var i=[],n={fill:"currentColor"},c={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};i.push({tag:"path",attributes:l1(l1({},n),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var r=l1(l1({},c),{},{attributeName:"opacity"}),s={tag:"circle",attributes:l1(l1({},n),{},{cx:"256",cy:"364",r:"28"}),children:[]};return t||s.children.push({tag:"animate",attributes:l1(l1({},c),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:l1(l1({},r),{},{values:"1;0;1;1;0;1;"})}),i.push(s),i.push({tag:"path",attributes:l1(l1({},n),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:t?[]:[{tag:"animate",attributes:l1(l1({},r),{},{values:"1;0;0;0;0;1;"})}]}),t||i.push({tag:"path",attributes:l1(l1({},n),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:l1(l1({},r),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:i}}}},fh={hooks:function(){return{parseNodeAttributes:function(t,i){var n=i.getAttribute("data-fa-symbol"),c=n===null?!1:n===""?!0:n;return t.symbol=c,t}}}},hh=[lf,jf,Jf,Kf,Qf,nh,ch,rh,oh,lh,fh];_f(hh,{mixoutsTo:X2});var $u=X2.noAuto,ju=X2.config,Ju=X2.library,Ku=X2.dom,Fa=X2.parse,Qu=X2.findIconDefinition,ed=X2.toHtml,Oa=X2.icon,td=X2.layer,uh=X2.text,dh=X2.counter;var ph=["*"],mh=a=>{throw new Error(`Could not find icon with iconName=${a.iconName} and prefix=${a.prefix} in the icon library.`)},vh=()=>{throw new Error("Property `icon` is required for `fa-icon`/`fa-duotone-icon` components.")},gh=a=>{let e={[`fa-${a.animation}`]:a.animation!=null&&!a.animation.startsWith("spin"),"fa-spin":a.animation==="spin"||a.animation==="spin-reverse","fa-spin-pulse":a.animation==="spin-pulse"||a.animation==="spin-pulse-reverse","fa-spin-reverse":a.animation==="spin-reverse"||a.animation==="spin-pulse-reverse","fa-pulse":a.animation==="spin-pulse"||a.animation==="spin-pulse-reverse","fa-fw":a.fixedWidth,"fa-border":a.border,"fa-inverse":a.inverse,"fa-layers-counter":a.counter,"fa-flip-horizontal":a.flip==="horizontal"||a.flip==="both","fa-flip-vertical":a.flip==="vertical"||a.flip==="both",[`fa-${a.size}`]:a.size!==null,[`fa-rotate-${a.rotate}`]:a.rotate!==null,[`fa-pull-${a.pull}`]:a.pull!==null,[`fa-stack-${a.stackItemSize}`]:a.stackItemSize!=null};return Object.keys(e).map(t=>e[t]?t:null).filter(t=>t)},Mh=a=>a.prefix!==void 0&&a.iconName!==void 0,zh=(a,e)=>Mh(a)?a:typeof a=="string"?{prefix:e,iconName:a}:{prefix:a[0],iconName:a[1]},xh=(()=>{let e=class e{constructor(){this.defaultPrefix="fas",this.fallbackIcon=null}};e.\u0275fac=function(n){return new(n||e)},e.\u0275prov=e3({token:e,factory:e.\u0275fac,providedIn:"root"});let a=e;return a})(),Ch=(()=>{let e=class e{constructor(){this.definitions={}}addIcons(...i){for(let n of i){n.prefix in this.definitions||(this.definitions[n.prefix]={}),this.definitions[n.prefix][n.iconName]=n;for(let c of n.icon[2])typeof c=="string"&&(this.definitions[n.prefix][c]=n)}}addIconPacks(...i){for(let n of i){let c=Object.keys(n).map(r=>n[r]);this.addIcons(...c)}}getIconDefinition(i,n){return i in this.definitions&&n in this.definitions[i]?this.definitions[i][n]:null}};e.\u0275fac=function(n){return new(n||e)},e.\u0275prov=e3({token:e,factory:e.\u0275fac,providedIn:"root"});let a=e;return a})(),bh=(()=>{let e=class e{constructor(){this.stackItemSize="1x"}ngOnChanges(i){if("size"in i)throw new Error('fa-icon is not allowed to customize size when used inside fa-stack. Set size on the enclosing fa-stack instead: <fa-stack size="4x">...</fa-stack>.')}};e.\u0275fac=function(n){return new(n||e)},e.\u0275dir=E2({type:e,selectors:[["fa-icon","stackItemSize",""],["fa-duotone-icon","stackItemSize",""]],inputs:{stackItemSize:"stackItemSize",size:"size"},standalone:!0,features:[Ce]});let a=e;return a})(),Hh=(()=>{let e=class e{constructor(i,n){this.renderer=i,this.elementRef=n}ngOnInit(){this.renderer.addClass(this.elementRef.nativeElement,"fa-stack")}ngOnChanges(i){"size"in i&&(i.size.currentValue!=null&&this.renderer.addClass(this.elementRef.nativeElement,`fa-${i.size.currentValue}`),i.size.previousValue!=null&&this.renderer.removeClass(this.elementRef.nativeElement,`fa-${i.size.previousValue}`))}};e.\u0275fac=function(n){return new(n||e)(U2(ct),U2(C3))},e.\u0275cmp=f2({type:e,selectors:[["fa-stack"]],inputs:{size:"size"},standalone:!0,features:[Ce,h2],ngContentSelectors:ph,decls:1,vars:0,template:function(n,c){n&1&&(ye(),Ve(0))},encapsulation:2});let a=e;return a})(),Ua=(()=>{let e=class e{set spin(i){this.animation=i?"spin":void 0}set pulse(i){this.animation=i?"spin-pulse":void 0}constructor(i,n,c,r,s){this.sanitizer=i,this.config=n,this.iconLibrary=c,this.stackItem=r,this.classes=[],s!=null&&r==null&&console.error('FontAwesome: fa-icon and fa-duotone-icon elements must specify stackItemSize attribute when wrapped into fa-stack. Example: <fa-icon stackItemSize="2x"></fa-icon>.')}ngOnChanges(i){if(this.icon==null&&this.config.fallbackIcon==null){vh();return}if(i){let n=this.icon!=null?this.icon:this.config.fallbackIcon,c=this.findIconDefinition(n);if(c!=null){let r=this.buildParams();this.renderIcon(c,r)}}}render(){this.ngOnChanges({})}findIconDefinition(i){let n=zh(i,this.config.defaultPrefix);if("icon"in n)return n;let c=this.iconLibrary.getIconDefinition(n.prefix,n.iconName);return c??(mh(n),null)}buildParams(){let i={flip:this.flip,animation:this.animation,border:this.border,inverse:this.inverse,size:this.size||null,pull:this.pull||null,rotate:this.rotate||null,fixedWidth:typeof this.fixedWidth=="boolean"?this.fixedWidth:this.config.fixedWidth,stackItemSize:this.stackItem!=null?this.stackItem.stackItemSize:null},n=typeof this.transform=="string"?Fa.transform(this.transform):this.transform;return{title:this.title,transform:n,classes:[...gh(i),...this.classes],mask:this.mask!=null?this.findIconDefinition(this.mask):null,styles:this.styles!=null?this.styles:{},symbol:this.symbol,attributes:{role:this.a11yRole}}}renderIcon(i,n){let c=Oa(i,n);this.renderedIconHTML=this.sanitizer.bypassSecurityTrustHtml(c.html.join(`
`))}};e.\u0275fac=function(n){return new(n||e)(U2(B5),U2(xh),U2(Ch),U2(bh,8),U2(Hh,8))},e.\u0275cmp=f2({type:e,selectors:[["fa-icon"]],hostAttrs:[1,"ng-fa-icon"],hostVars:2,hostBindings:function(n,c){n&2&&(P5("innerHTML",c.renderedIconHTML,A5),q4("title",c.title))},inputs:{icon:"icon",title:"title",animation:"animation",spin:"spin",pulse:"pulse",mask:"mask",styles:"styles",flip:"flip",size:"size",pull:"pull",border:"border",inverse:"inverse",symbol:"symbol",rotate:"rotate",fixedWidth:"fixedWidth",classes:"classes",transform:"transform",a11yRole:"a11yRole"},standalone:!0,features:[Ce,h2],decls:0,vars:0,template:function(n,c){},encapsulation:2});let a=e;return a})();var X0=(()=>{let e=class e{};e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=G4({type:e}),e.\u0275inj=B4({});let a=e;return a})();var Ba={prefix:"fas",iconName:"user",icon:[448,512,[128100,62144],"f007","M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z"]};var yh={prefix:"fas",iconName:"mug-saucer",icon:[640,512,["coffee"],"f0f4","M96 64c0-17.7 14.3-32 32-32H448h64c70.7 0 128 57.3 128 128s-57.3 128-128 128H480c0 53-43 96-96 96H192c-53 0-96-43-96-96V64zM480 224h32c35.3 0 64-28.7 64-64s-28.7-64-64-64H480V224zM32 416H544c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32z"]},Ga=yh;function Vh(a,e){if(a&1&&Q1(0,"fa-icon",4),a&2){let t=t3();e2("icon",t.iconDef)}}function Sh(a,e){if(a&1&&Q1(0,"img",5),a&2){let t=t3();e2("src",t.iconUrl,He)}}function Lh(a,e){a&1&&(Z1(0,"div",6),h3(1,"\u2B08"),$1())}function wh(a,e){a&1&&(Z1(0,"div",6),h3(1,"\u25BB"),$1())}var Wa=(()=>{let e=class e{constructor(){this.clickEvent=()=>{},this.panelText="",this.panelTextOut=new q3,this.name="Tab",this.iconDef=Ga,this.iconUrl="",this.buttonColor="blue",this.isExternalLink=!1,this.tabID=e.tabIDCounter++,this.outputTabID=new q3}onTabClick(){this.clickEvent(),this.emitTabID(),this.emitPanelText()}emitPanelText(){this.panelTextOut.emit(this.panelText)}emitTabID(){console.log("Emitting Tab ID: "+this.tabID),this.outputTabID.emit(String(this.tabID))}};e.tabIDCounter=0,e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=f2({type:e,selectors:[["app-tab"]],inputs:{clickEvent:"clickEvent",panelText:"panelText",name:"name",iconDef:"iconDef",iconUrl:"iconUrl",buttonColor:"buttonColor",isExternalLink:"isExternalLink",tabID:"tabID"},outputs:{panelTextOut:"panelTextOut",outputTabID:"outputTabID"},standalone:!0,features:[h2],decls:8,vars:7,consts:[["id","container",1,"app-tab",3,"click"],["id","block"],[3,"ngIf"],["id","text"],["id","icon",3,"icon"],["id","iconImage",3,"src"],["id","fold-arrow"]],template:function(n,c){n&1&&(Z1(0,"div",0),G2("click",function(){return c.emitTabID()})("click",function(){return c.onTabClick()}),Q1(1,"div",1),B2(2,Vh,1,1,"ng-template",2)(3,Sh,1,1,"ng-template",2),Z1(4,"div",3),h3(5),$1(),B2(6,Lh,2,0,"ng-template",2)(7,wh,2,0,"ng-template",2),$1()),n&2&&(U1(),N5("background-color",c.buttonColor),U1(),e2("ngIf",c.iconUrl===""),U1(),e2("ngIf",c.iconUrl!==""),U1(2),Se(c.name),U1(),e2("ngIf",c.isExternalLink===!0),U1(),e2("ngIf",c.isExternalLink===!1))},dependencies:[$3,Ae,X0,Ua],styles:["#container[_ngcontent-%COMP%]{--padding-horizontal: 1.5vw;--padding-vertical: 2vw;cursor:pointer;display:flex;align-items:center;padding:var(--padding-vertical) var(--padding-horizontal);border:none;position:relative;width:50%;margin-top:1vw;margin-left:2vw}#block[_ngcontent-%COMP%]{margin:auto;opacity:.6;border-radius:2vw;position:absolute;inset:0;transition:transform .2s,opacity .2s;z-index:0}#container[_ngcontent-%COMP%]:hover   #block[_ngcontent-%COMP%]{transform:scale(1.05);opacity:1}#container[_ngcontent-%COMP%]:not(:hover)   #block[_ngcontent-%COMP%]{transition:transform .5s,opacity .5s}#icon[_ngcontent-%COMP%], #text[_ngcontent-%COMP%], #fold-arrow[_ngcontent-%COMP%], #iconImage[_ngcontent-%COMP%]{-webkit-user-select:none;user-select:none;flex:1;display:flex;align-items:center;z-index:1}#icon[_ngcontent-%COMP%]{justify-content:flex-start}#iconImage[_ngcontent-%COMP%]{width:1.5vw;height:3.5vw;margin-right:1vw}#text[_ngcontent-%COMP%]{justify-content:center;text-align:center;white-space:nowrap}#fold-arrow[_ngcontent-%COMP%]{justify-content:flex-end;text-align:right}"]});let a=e;return a})();var n5;try{n5=typeof Intl<"u"&&Intl.v8BreakIterator}catch{n5=!1}var qa=(()=>{let e=class e{constructor(i){this._platformId=i,this.isBrowser=this._platformId?X4(this._platformId):typeof document=="object"&&!!document,this.EDGE=this.isBrowser&&/(edge)/i.test(navigator.userAgent),this.TRIDENT=this.isBrowser&&/(msie|trident)/i.test(navigator.userAgent),this.BLINK=this.isBrowser&&!!(window.chrome||n5)&&typeof CSS<"u"&&!this.EDGE&&!this.TRIDENT,this.WEBKIT=this.isBrowser&&/AppleWebKit/i.test(navigator.userAgent)&&!this.BLINK&&!this.EDGE&&!this.TRIDENT,this.IOS=this.isBrowser&&/iPad|iPhone|iPod/.test(navigator.userAgent)&&!("MSStream"in window),this.FIREFOX=this.isBrowser&&/(firefox|minefield)/i.test(navigator.userAgent),this.ANDROID=this.isBrowser&&/android/i.test(navigator.userAgent)&&!this.TRIDENT,this.SAFARI=this.isBrowser&&/safari/i.test(navigator.userAgent)&&this.WEBKIT}};e.\u0275fac=function(n){return new(n||e)(xe(W4))},e.\u0275prov=e3({token:e,factory:e.\u0275fac,providedIn:"root"});let a=e;return a})();var Ah=new x3("cdk-dir-doc",{providedIn:"root",factory:Th});function Th(){return X1(z4)}var Eh=/^(ar|ckb|dv|he|iw|fa|nqo|ps|sd|ug|ur|yi|.*[-_](Adlm|Arab|Hebr|Nkoo|Rohg|Thaa))(?!.*[-_](Latn|Cyrl)($|-|_))($|-|_)/i;function Nh(a){let e=a?.toLowerCase()||"";return e==="auto"&&typeof navigator<"u"&&navigator?.language?Eh.test(navigator.language)?"rtl":"ltr":e==="rtl"?"rtl":"ltr"}var Xa=(()=>{let e=class e{constructor(i){if(this.value="ltr",this.change=new q3,i){let n=i.body?i.body.dir:null,c=i.documentElement?i.documentElement.dir:null;this.value=Nh(n||c||"ltr")}}ngOnDestroy(){this.change.complete()}};e.\u0275fac=function(n){return new(n||e)(xe(Ah,8))},e.\u0275prov=e3({token:e,factory:e.\u0275fac,providedIn:"root"});let a=e;return a})();function c5(a,e){let t=!e?.manualCleanup;t&&!e?.injector&&L5(c5);let i=t?e?.injector?.get(nt)??X1(nt):null,n;e?.requireSync?n=X3({kind:0}):n=X3({kind:1,value:e?.initialValue});let c=a.subscribe({next:r=>n.set({kind:1,value:r}),error:r=>{if(e?.rejectErrors)throw r;n.set({kind:2,error:r})}});return i?.onDestroy(c.unsubscribe.bind(c)),Z3(()=>{let r=n();switch(r.kind){case 1:return r.value;case 2:throw r.error;case 0:throw new S5(601,"`toSignal()` called with `requireSync` but `Observable` did not emit synchronously.")}})}function Ya(a){return a instanceof C3?a.nativeElement:a}var Ph=4,Rh=.001,kh=1e-7,Dh=10,le=11,Y0=1/(le-1),Ih=typeof Float32Array=="function";function Za(a,e){return 1-3*e+3*a}function $a(a,e){return 3*e-6*a}function ja(a){return 3*a}function Z0(a,e,t){return((Za(e,t)*a+$a(e,t))*a+ja(e))*a}function Ja(a,e,t){return 3*Za(e,t)*a*a+2*$a(e,t)*a+ja(e)}function Fh(a,e,t,i,n){let c,r,s=0;do r=e+(t-e)/2,c=Z0(r,i,n)-a,c>0?t=r:e=r;while(Math.abs(c)>kh&&++s<Dh);return r}function Oh(a,e,t,i){for(let n=0;n<Ph;++n){let c=Ja(e,t,i);if(c===0)return e;let r=Z0(e,t,i)-a;e-=r/c}return e}function Uh(a){return a}function Bh(a,e,t,i){if(!(0<=a&&a<=1&&0<=t&&t<=1))throw new Error("bezier x values must be in [0, 1] range");if(a===e&&t===i)return Uh;let n=Ih?new Float32Array(le):new Array(le);for(let r=0;r<le;++r)n[r]=Z0(r*Y0,a,t);function c(r){let s=0,o=1,l=le-1;for(;o!==l&&n[o]<=r;++o)s+=Y0;--o;let f=(r-n[o])/(n[o+1]-n[o]),h=s+f*Y0,d=Ja(h,a,t);return d>=Rh?Oh(r,h,a,t):d===0?h:Fh(r,s,s+Y0,a,t)}return function(s){return s===0?0:s===1?1:Z0(c(s),e,i)}}var Gh=new x3("SMOOTH_SCROLL_OPTIONS");var Ka=(()=>{let e=class e{constructor(){this.document=X1(z4),this.zone=X1(D6),this._defaultOptions=z3({duration:468,easing:{x1:.42,y1:0,x2:.58,y2:1}},X1(Gh,{optional:!0})),this.onGoingScrolls=new Map}get now(){return this.document.defaultView.performance?.now?.bind(this.document.defaultView.performance)||Date.now}scrollElement(i,n,c){i.scrollLeft=n,i.scrollTop=c}getElement(i,n){return typeof i=="string"?(n||this.document).querySelector(i):Ya(i)}getScrollDestroyerRef(i){return this.onGoingScrolls.has(i)&&this.onGoingScrolls.get(i).next(),this.onGoingScrolls.set(i,new M5).get(i)}step(i){return new ze(n=>{let c=(this.now()-i.startTime)/i.duration;c=c>1?1:c;let r=i.easing(c);i.currentX=i.startX+(i.x-i.startX)*r,i.currentY=i.startY+(i.y-i.startY)*r,this.scrollElement(i.scrollable,i.currentX,i.currentY),requestAnimationFrame(()=>{n.next(),n.complete()})})}isReached(i,n){return i.currentX===i.x&&i.currentY===i.y?(n.next(),!0):!1}scrolling(i,n){return this.step(i).pipe(k6(()=>!this.isReached(i,n)),Q2(()=>this.scrolling(i,n)))}onScrollReached(i,n,c){c.complete(),this.onGoingScrolls.delete(i),this.zone.run(()=>n())}interrupted(i,n){return R6(T2(i,"wheel",{passive:!0,capture:!0}),T2(i,"touchmove",{passive:!0,capture:!0}),n).pipe(H5(1))}applyScrollToOptions(i,n){return n.duration?new Promise(c=>{this.zone.runOutsideAngular(()=>{let r=this.getScrollDestroyerRef(i),s={scrollable:i,startTime:this.now(),startX:i.scrollLeft,startY:i.scrollTop,x:n.left==null?i.scrollLeft:~~n.left,y:n.top==null?i.scrollTop:~~n.top,duration:n.duration,easing:Bh(n.easing.x1,n.easing.y1,n.easing.x2,n.easing.y2)};this.scrolling(s,r).pipe(g4(this.interrupted(i,r)),_5(()=>this.onScrollReached(i,c,r))).subscribe()})}):(this.scrollElement(i,n.left,n.top),Promise.resolve())}scrollTo(i,n){let c=this.getElement(i),r=getComputedStyle(c).direction==="rtl",s=ge(z3(z3({},this._defaultOptions),n),{left:n.left==null?r?n.end:n.start:n.left,right:n.right==null?r?n.start:n.end:n.right});return s.bottom!=null&&(s.top=c.scrollHeight-c.clientHeight-s.bottom),r?(s.left!=null&&(s.right=c.scrollWidth-c.clientWidth-s.left),s.left=s.right?-s.right:s.right):s.right!=null&&(s.left=c.scrollWidth-c.clientWidth-s.right),this.applyScrollToOptions(c,s)}scrollToElement(i,n,c={}){let r=this.getElement(i),s=this.getElement(n,r),o=s.getBoundingClientRect(),l=ge(z3({},c),{left:o.left+(c.left||0),top:o.top+(c.top||0)});return s?this.scrollTo(r,l):Promise.resolve()}};e.\u0275fac=function(n){return new(n||e)},e.\u0275prov=e3({token:e,factory:e.\u0275fac,providedIn:"root"});let a=e;return a})();var Wh=["scrollbarButton",""];function qh(a,e){if(a&1&&Q1(0,"button",5)(1,"button",6),a&2){let t=t3();b3("ng-scrollbar-button ",t.cmp.buttonClass,""),U1(),b3("ng-scrollbar-button ",t.cmp.buttonClass,"")}}function Xh(a,e){if(a&1&&Q1(0,"button",5)(1,"button",6),a&2){let t=t3();b3("ng-scrollbar-button ",t.cmp.buttonClass,""),U1(),b3("ng-scrollbar-button ",t.cmp.buttonClass,"")}}var Yh="[_nghost-%COMP%]{position:absolute;inset:0;pointer-events:none;min-width:calc(var(--viewport-width) * 1px);min-height:calc(var(--viewport-height) * 1px)}.ng-scrollbar-sticky[_ngcontent-%COMP%]{top:calc(var(--_scrollbar-wrapper-top) * 1px);left:calc(var(--_scrollbar-wrapper-left) * 1px);right:calc(var(--_scrollbar-wrapper-right) * 1px);height:calc(var(--_scrollbar-wrapper-height) * 1px);width:calc(var(--_scrollbar-wrapper-width) * 1px);position:sticky;z-index:100;opacity:var(--_scrollbar-hover-opacity);transition:var(--_scrollbar-opacity-transition)}.ng-scrollbar-track-wrapper[_ngcontent-%COMP%]{touch-action:none;-webkit-user-select:none;user-select:none;top:var(--_scrollbar-track-top);bottom:var(--_scrollbar-track-bottom);right:var(--_scrollbar-track-right);left:var(--_scrollbar-track-left);pointer-events:var(--_scrollbar-pointer-events);transition:var(--scrollbar-track-wrapper-transition);position:absolute;overflow:hidden;display:flex;place-items:center}.ng-scrollbar-track[_ngcontent-%COMP%]{position:relative;width:100%;height:100%;background-color:var(--scrollbar-track-color);border-radius:var(--scrollbar-border-radius);cursor:default;z-index:1;order:2}.ng-scrollbar-thumb[_ngcontent-%COMP%]{box-sizing:border-box;position:absolute;transition:var(--scrollbar-thumb-transition);border-radius:var(--scrollbar-border-radius);height:var(--_thumb-height);width:var(--_thumb-width);animation-name:_ngcontent-%COMP%_scrollbarThumbAnimation;animation-duration:1ms;animation-timing-function:linear}@keyframes _ngcontent-%COMP%_scrollbarThumbAnimation{0%{translate:var(--_scrollbar-thumb-transform-from)}to{translate:var(--_scrollbar-thumb-transform-to)}}";function Zh(a,e){a&1&&Q1(0,"scrollbar-y")}function $h(a,e){a&1&&Q1(0,"scrollbar-x")}var jh=["contentWrapper"],Jh=["*"];var Kh=(()=>{let e=class e{constructor(){this.nativeElement=X1(C3).nativeElement}};e.\u0275fac=function(n){return new(n||e)},e.\u0275dir=E2({type:e,selectors:[["","scrollViewport",""]],standalone:!0});let a=e;return a})(),he=function(a){return a.AfterInit="AfterInit",a.Resized="ResizeObserver",a}(he||{}),Qh=new x3("NG_SCROLLBAR_OPTIONS"),eu=new x3("NG_SCROLLBAR_POLYFILL");function tn({element:a,contentWrapper:e,throttleDuration:t}){let i=he.AfterInit,n,c=new ze(r=>(n=new ResizeObserver(()=>{r.next(i),i=he.Resized}),n.observe(a),e&&n.observe(e),()=>{n?.disconnect()}));return t?c.pipe(V5(t,null,{leading:!0,trailing:!0})):c}function o5(a){return $2(()=>a.onselectstart=()=>!1)}function l5(a){return $2(()=>a.onselectstart=null)}function fe(){return $2(a=>{a.preventDefault(),a.stopPropagation()})}var r5=function(a){return a.Viewport="ng-scroll-viewport",a.Content="ng-scroll-content",a}(r5||{}),s5=class{constructor(){this.initialized=X3(!1)}get offsetHeight(){return this.nativeElement.offsetHeight}get offsetWidth(){return this.nativeElement.offsetWidth}get scrollTop(){return this.nativeElement.scrollTop}get scrollLeft(){return this.nativeElement.scrollLeft}get contentHeight(){return this.contentWrapperElement.offsetHeight}get contentWidth(){return this.contentWrapperElement.offsetWidth}get scrollMaxX(){return this.contentWidth-this.offsetWidth}get scrollMaxY(){return this.contentHeight-this.offsetHeight}init(e,t,i){e.classList.add(r5.Viewport),this.nativeElement=e,t.classList.add(r5.Content),i?(i.style.position="relative",this.contentWrapperElement=i):this.contentWrapperElement=t,this.initialized.set(!0)}scrollYTo(e){this.nativeElement.scrollTop=e}scrollXTo(e){this.nativeElement.scrollLeft=e}},pe=new x3("NG_SCROLLBAR"),Qa={trackClass:"",thumbClass:"",buttonClass:"",orientation:"auto",appearance:"native",visibility:"native",position:"native",trackScrollDuration:50,sensorThrottleTime:0,disableSensor:!1,disableInteraction:!1,buttons:!1},tu=(()=>{let e=class e{constructor(){this.injectedOptions=X1(Qh,{optional:!0}),this.options=this.injectedOptions?z3(z3({},Qa),this.injectedOptions):Qa,this.zone=X1(D6),this.platform=X1(qa),this.injector=X1(be),this.isMobile=this.platform.IOS||this.platform.ANDROID,this.dir=X1(Xa),this.smoothScroll=X1(Ka),this.nativeElement=X1(C3).nativeElement,this.dragging=X3("none"),this.orientation=M4(this.options.orientation),this.visibility=M4(this.options.visibility),this.buttons=M4(this.options.buttons,{transform:we}),this.disableInteraction=M4(this.options.disableInteraction,{transform:we}),this.disableSensor=M4(this.options.disableSensor,{transform:we}),this.sensorThrottleTime=M4(this.options.sensorThrottleTime,{transform:st}),this.viewportDimension=X3({contentHeight:0,contentWidth:0,offsetHeight:0,offsetWidth:0}),this.state=Z3(()=>{let i=!1,n=!1,c=!1,r=!1,s=this.orientation(),o=this.visibility(),l=this.viewportDimension();return(s==="auto"||s==="vertical")&&(c=l.contentHeight>l.offsetHeight,i=o==="visible"||c),(s==="auto"||s==="horizontal")&&(r=l.contentWidth>l.offsetWidth,n=o==="visible"||r),{verticalUsed:i,horizontalUsed:n,isVerticallyScrollable:c,isHorizontallyScrollable:r}}),this.isVerticallyScrollable=Z3(()=>this.state().isVerticallyScrollable),this.isHorizontallyScrollable=Z3(()=>this.state().isHorizontallyScrollable),this.verticalUsed=Z3(()=>this.state().verticalUsed),this.horizontalUsed=Z3(()=>this.state().horizontalUsed),this.trackScrollDuration=this.options.trackScrollDuration,this.appearance=this.options.appearance,this.position=this.options.position,this.trackClass=this.options.trackClass,this.thumbClass=this.options.thumbClass,this.buttonClass=this.options.thumbClass,this.afterInit=new q3,this.afterUpdate=new q3,this.viewport=new s5}ngOnInit(){at(this.injector,()=>{this.direction=c5(this.dir.change.pipe(B3(()=>this.dir.value)),{initialValue:this.dir.value}),y3(i=>{this.disableSensor()?this.sizeChangeSub?.unsubscribe():this.platform.isBrowser&&this.viewport.initialized()&&(this.sizeChangeSub?.unsubscribe(),this.zone.runOutsideAngular(()=>{this.sizeChangeSub=tn({element:this.viewport.nativeElement,contentWrapper:this.viewport.contentWrapperElement,throttleDuration:this.sensorThrottleTime()}).pipe($2(n=>this.update(n))).subscribe()})),i(()=>this.sizeChangeSub?.unsubscribe())})})}ngAfterViewInit(){this.platform.isBrowser&&this.disableSensor()&&requestAnimationFrame(()=>{this.update(he.AfterInit)})}update(i){this.updateCSSVariables(),this.zone.run(()=>{this.viewportDimension.set({contentHeight:this.viewport.contentHeight,contentWidth:this.viewport.contentWidth,offsetHeight:this.viewport.offsetHeight,offsetWidth:this.viewport.offsetWidth}),i===he.AfterInit?this.afterInit.emit():this.afterUpdate.emit()})}scrollTo(i){return this.smoothScroll.scrollTo(this.viewport.nativeElement,i)}scrollToElement(i,n){return this.smoothScroll.scrollToElement(this.viewport.nativeElement,i,n)}updateCSSVariables(){this.nativeElement.style.setProperty("--content-height",`${this.viewport.contentHeight}`),this.nativeElement.style.setProperty("--content-width",`${this.viewport.contentWidth}`),this.nativeElement.style.setProperty("--viewport-height",`${this.viewport.offsetHeight}`),this.nativeElement.style.setProperty("--viewport-width",`${this.viewport.offsetWidth}`)}};e.\u0275fac=function(n){return new(n||e)},e.\u0275dir=E2({type:e,hostVars:14,hostBindings:function(n,c){n&2&&(q4("verticalUsed",c.verticalUsed())("horizontalUsed",c.horizontalUsed())("isVerticallyScrollable",c.isVerticallyScrollable())("isHorizontallyScrollable",c.isHorizontallyScrollable())("mobile",c.isMobile)("dir",c.direction())("position",c.position)("dragging",c.dragging())("appearance",c.appearance)("visibility",c.visibility())("orientation",c.orientation())("disableInteraction",c.disableInteraction()),rt("ng-scrollbar",!0))},inputs:{orientation:[G3.SignalBased,"orientation"],visibility:[G3.SignalBased,"visibility"],buttons:[G3.SignalBased,"buttons"],disableInteraction:[G3.SignalBased,"disableInteraction"],disableSensor:[G3.SignalBased,"disableSensor"],sensorThrottleTime:[G3.SignalBased,"sensorThrottleTime"],trackScrollDuration:[G3.HasDecoratorInputTransform,"trackScrollDuration","trackScrollDuration",st],appearance:"appearance",position:"position",trackClass:"trackClass",thumbClass:"thumbClass",buttonClass:"buttonClass"},outputs:{afterInit:"afterInit",afterUpdate:"afterUpdate"},features:[u3([{provide:pe,useExisting:e}]),E5]});let a=e;return a})(),iu="https://flackr.github.io/scroll-timeline/dist/scroll-timeline.js",an=(()=>{let e=class e{constructor(){this.isBrowser=X4(X1(W4)),this._polyfillUrl=X1(eu,{optional:!0})||iu,this.document=X1(z4),this.window=this.document.defaultView,this.scrollTimelinePolyfill=X3(null),this.isBrowser&&(!this.window.ScrollTimeline||!CSS.supports("animation-timeline","scroll()"))&&this.initPolyfill()}initPolyfill(){return Me(this,null,function*(){try{let i=this.document.createElement("script");i.src=this._polyfillUrl,yield new Promise((n,c)=>{i.onload=n,i.onerror=c,this.document.head.appendChild(i)}),this.window.ScrollTimeline?this.scrollTimelinePolyfill.set(this.window.ScrollTimeline):console.error("[NgScrollbar]: ScrollTimeline is not attached to the window object.")}catch(i){console.error("[NgScrollbar]: Error loading ScrollTimeline script:",i)}})}};e.\u0275fac=function(n){return new(n||e)},e.\u0275prov=e3({token:e,factory:e.\u0275fac,providedIn:"root"});let a=e;return a})(),f5=new x3("SCROLLBAR_CONTROL"),nn=(()=>{let e=class e{constructor(){this.cmp=X1(pe)}};e.\u0275fac=function(n){return new(n||e)},e.\u0275dir=E2({type:e});let a=e;return a})(),h5=(()=>{let e=class e{constructor(){this.cmp=X1(pe),this.control=X1(f5),this.document=X1(z4),this.zone=X1(D6),this.nativeElement=X1(C3).nativeElement,y3(i=>{this.cmp.disableInteraction()?this._pointerEventsSub?.unsubscribe():this.zone.runOutsideAngular(()=>{this._pointerEventsSub=this.pointerEvents.subscribe()}),i(()=>this._pointerEventsSub?.unsubscribe())})}};e.\u0275fac=function(n){return new(n||e)},e.\u0275dir=E2({type:e});let a=e;return a})(),ue=(()=>{let e=class e extends h5{get size(){return this.nativeElement[this.control.sizeProperty]}get trackMax(){return this.track.size-this.size}get pointerEvents(){return T2(this.nativeElement,"pointerdown").pipe(fe(),o5(this.document),Q2(i=>{let n,c,r=C5(i).pipe($2(()=>{n=this.trackMax,c=this.control.viewportScrollMax,this.setDragging(this.control.axis)})),s=T2(this.document,"pointermove").pipe(fe()),o=T2(this.document,"pointerup",{capture:!0}).pipe(fe(),l5(this.document),$2(()=>this.setDragging("none")));return r.pipe(B3(l=>l[this.control.offsetProperty]),Q2(l=>s.pipe(B3(f=>f[this.control.clientProperty]),B3(f=>f-this.track.offset),B3(f=>c*(f-l)/n),$2(f=>this.control.instantScrollTo(f,c)),g4(o))))}))}constructor(){y3(()=>{let i=this.manager.scrollTimelinePolyfill();i&&!this._animation&&(this._animation=au(i,this.nativeElement,this.cmp.viewport.nativeElement,this.control.axis))}),super(),this.manager=X1(an),this.track=X1(de)}setDragging(i){this.zone.run(()=>this.cmp.dragging.set(i))}};e.\u0275fac=function(n){return new(n||e)},e.\u0275dir=E2({type:e,features:[R2]});let a=e;return a})();function au(a,e,t,i){return e.animate({translate:["var(--_scrollbar-thumb-transform-from)","var(--_scrollbar-thumb-transform-to)"]},{fill:"both",easing:"linear",timeline:new a({source:t,axis:i})})}var de=(()=>{let e=class e extends h5{get viewportSize(){return this.cmp.viewport[this.control.sizeProperty]}get clientRect(){return this.nativeElement.getBoundingClientRect()}get offset(){return this.clientRect[this.control.clientRectProperty]}get size(){return this.nativeElement[this.control.sizeProperty]}get pointerEvents(){let i=T2(this.nativeElement,"pointerdown").pipe(fe(),o5(this.document)),n=T2(this.document,"pointerup",{passive:!0}).pipe(l5(this.document)),c=T2(this.nativeElement,"pointerover",{passive:!0}).pipe($2(l=>this.currMousePosition=l[this.control.offsetProperty]),B3(()=>!0)),r=T2(this.nativeElement,"pointerout",{passive:!0}).pipe(B3(()=>!1)),s=R6(c,r).pipe(y5(!0)),o=T2(this.nativeElement,"pointermove",{passive:!0}).pipe($2(l=>this.currMousePosition=l[this.control.offsetProperty]));return i.pipe(Q2(l=>(o.pipe(g4(n)).subscribe(),this.onTrackFirstClick(l).pipe(it(200),Q2(()=>s.pipe(Q2(f=>{let h=this.getScrollDirection(this.currMousePosition),d=this.scrollDirection===h;return f&&d?this.onTrackOngoingMousedown():x5}))),g4(n)))))}constructor(){y3(i=>{this.cmp.disableSensor()?(this.update(),this.sizeChangeSub?.unsubscribe()):this.zone.runOutsideAngular(()=>{this.sizeChangeSub=tn({element:this.nativeElement,throttleDuration:this.cmp.sensorThrottleTime()}).pipe($2(()=>this.update())).subscribe()}),i(()=>this.sizeChangeSub?.unsubscribe())}),super()}update(){this.cmp.nativeElement.style.setProperty(this.cssLengthProperty,`${this.size}`)}onTrackFirstClick(i){return this.currMousePosition=i[this.control.offsetProperty],this.scrollDirection=this.getScrollDirection(this.currMousePosition),this.scrollMax=this.control.viewportScrollMax,this.scrollTo(this.nextStep())}nextStep(){if(this.scrollDirection==="forward"){let n=this.getScrollForwardStep();return n>=this.scrollMax?this.scrollMax:n}let i=this.getScrollBackwardStep();return i<=0?0:i}onTrackOngoingMousedown(){let i=this.nextStep();return this.scrollTo(i).pipe(k6(()=>!this.isReached(i)),Q2(()=>this.onTrackOngoingMousedown()))}isReached(i){return this.scrollDirection==="forward"?i>=this.scrollMax:i<=0}};e.\u0275fac=function(n){return new(n||e)},e.\u0275dir=E2({type:e,contentQueries:function(n,c,r){if(n&1&&R5(r,ue,5),n&2){let s;H3(s=_3())&&(c.thumb=s.first)}},features:[R2]});let a=e;return a})(),nu=(()=>{let e=class e extends de{get viewportScrollSize(){return this.cmp.viewport.contentWidth}constructor(){y3(()=>{this.cmp.direction()==="rtl"?(this.getCurrPosition=()=>(this.viewportScrollSize-this.viewportSize-this.control.viewportScrollOffset)*this.size/this.viewportScrollSize,this.getScrollDirection=i=>i<this.getCurrPosition()?"forward":"backward"):(this.getCurrPosition=()=>this.control.viewportScrollOffset*this.size/this.viewportScrollSize,this.getScrollDirection=i=>i>this.getCurrPosition()?"forward":"backward")}),super(),this.cssLengthProperty="--track-x-length"}scrollTo(i){return P6(this.cmp.scrollTo({start:i,duration:this.cmp.trackScrollDuration}))}getScrollForwardStep(){return this.control.viewportScrollOffset+this.viewportSize}getScrollBackwardStep(){return this.control.viewportScrollOffset-this.viewportSize}};e.\u0275fac=function(n){return new(n||e)},e.\u0275dir=E2({type:e,selectors:[["","scrollbarTrackX",""]],standalone:!0,features:[u3([{provide:de,useExisting:e}]),R2]});let a=e;return a})(),cu=(()=>{let e=class e extends de{constructor(){super(...arguments),this.cssLengthProperty="--track-y-length"}get viewportScrollSize(){return this.cmp.viewport.contentHeight}getCurrPosition(){return this.control.viewportScrollOffset*this.size/this.viewportScrollSize}getScrollDirection(i){return i>this.getCurrPosition()?"forward":"backward"}scrollTo(i){return P6(this.cmp.scrollTo({top:i,duration:this.cmp.trackScrollDuration}))}getScrollForwardStep(){return this.control.viewportScrollOffset+this.viewportSize}getScrollBackwardStep(){return this.control.viewportScrollOffset-this.viewportSize}};e.\u0275fac=(()=>{let i;return function(c){return(i||(i=W3(e)))(c||e)}})(),e.\u0275dir=E2({type:e,selectors:[["","scrollbarTrackY",""]],standalone:!0,features:[u3([{provide:de,useExisting:e}]),R2]});let a=e;return a})(),ru=(()=>{let e=class e extends ue{};e.\u0275fac=(()=>{let i;return function(c){return(i||(i=W3(e)))(c||e)}})(),e.\u0275dir=E2({type:e,selectors:[["","scrollbarThumbX",""]],standalone:!0,features:[u3([{provide:ue,useExisting:e}]),R2]});let a=e;return a})(),su=(()=>{let e=class e extends ue{};e.\u0275fac=(()=>{let i;return function(c){return(i||(i=W3(e)))(c||e)}})(),e.\u0275dir=E2({type:e,selectors:[["","scrollbarThumbY",""]],standalone:!0,features:[u3([{provide:ue,useExisting:e}]),R2]});let a=e;return a})(),cn=(()=>{let e=class e extends h5{constructor(){super(...arguments),this.injector=X1(be),this.afterFirstClickDelay=120,this.firstClickDuration=100,this.scrollBy=50,this.onGoingScrollBy=12,this.canScrollFunc={forward:(i,n)=>i<n,backward:i=>i>0},this.scrollStepFunc={forward:(i,n)=>n+i,backward:(i,n)=>n-i},this.horizontalScrollStepFunc={rtl:{forward:(i,n,c)=>c-n-i,backward:(i,n,c)=>c-n+i},ltr:this.scrollStepFunc}}get pointerEvents(){let i=T2(this.nativeElement,"pointerdown").pipe(fe(),o5(this.document)),n=T2(this.document,"pointerup",{passive:!0}).pipe(l5(this.document)),c=T2(this.nativeElement,"pointerleave",{passive:!0}),r=R6(n,c);return i.pipe(Q2(()=>this.firstScrollStep().pipe(it(this.afterFirstClickDelay),Q2(()=>this.onOngoingPointerdown()),g4(r))))}ngOnInit(){this.canScroll=this.canScrollFunc[this.scrollDirection],this.control.axis==="x"?at(this.injector,()=>{y3(()=>{let i=this.cmp.direction();this.nextStep=this.horizontalScrollStepFunc[i][this.scrollDirection]})}):this.nextStep=this.scrollStepFunc[this.scrollDirection]}firstScrollStep(){let i=this.nextStep(this.scrollBy,this.control.viewportScrollOffset,this.control.viewportScrollMax);return this.control.scrollTo(i,this.firstClickDuration)}onGoingScrollStep(){let i=this.control.viewportScrollMax,n=this.nextStep(this.onGoingScrollBy,this.control.viewportScrollOffset,i);this.control.instantScrollTo(n,i)}onOngoingPointerdown(){return b5(0,z5).pipe(k6(()=>this.canScroll(this.control.viewportScrollOffset,this.control.viewportScrollMax)),$2(()=>this.onGoingScrollStep()))}};e.\u0275fac=(()=>{let i;return function(c){return(i||(i=W3(e)))(c||e)}})(),e.\u0275cmp=f2({type:e,selectors:[["button","scrollbarButton",""]],inputs:{scrollbarButton:"scrollbarButton",scrollDirection:"scrollDirection"},standalone:!0,features:[R2,h2],attrs:Wh,decls:3,vars:0,consts:[[1,"ng-scrollbar-button-icon"],["width","var(--scrollbar-button-size)","height","var(--scrollbar-button-size)","viewBox","0 0 512 512","xmlns","http://www.w3.org/2000/svg"],["d","M413.1,327.3l-1.8-2.1l-136-156.5c-4.6-5.3-11.5-8.6-19.2-8.6c-7.7,0-14.6,3.4-19.2,8.6L101,324.9l-2.3,2.6  C97,330,96,333,96,336.2c0,8.7,7.4,15.8,16.6,15.8v0h286.8v0c9.2,0,16.6-7.1,16.6-15.8C416,332.9,414.9,329.8,413.1,327.3z"]],template:function(n,c){n&1&&(Z1(0,"div",0),w5(),Z1(1,"svg",1),Q1(2,"path",2),$1()())},styles:["[_nghost-%COMP%]{--scrollbar-button-size: 20px;position:relative;border:none;margin:0;padding:0;border-radius:0;appearance:none;background-color:var(--scrollbar-button-color)}[_nghost-%COMP%]   svg[_ngcontent-%COMP%]{fill:var(--scrollbar-button-fill)}[_nghost-%COMP%]:hover{background:var(--scrollbar-button-hover-color)}[_nghost-%COMP%]:hover   svg[_ngcontent-%COMP%]{fill:var(--scrollbar-button-hover-fill)}[_nghost-%COMP%]:active{background:var(--scrollbar-button-active-color)}[_nghost-%COMP%]:active   svg[_ngcontent-%COMP%]{fill:var(--scrollbar-button-active-fill)}[scrollbarButton=top][_nghost-%COMP%], [scrollbarButton=start][_nghost-%COMP%]{order:1}[scrollbarButton=bottom][_nghost-%COMP%], [scrollbarButton=end][_nghost-%COMP%]{order:3}[scrollbarButton=top][_nghost-%COMP%], [scrollbarButton=bottom][_nghost-%COMP%]{width:100%;height:var(--scrollbar-button-size)}[scrollbarButton=start][_nghost-%COMP%], [scrollbarButton=end][_nghost-%COMP%]{width:var(--scrollbar-button-size);height:100%}[scrollbarButton=bottom][_nghost-%COMP%]{--_button-rotate: 180deg}[scrollbarButton=start][_nghost-%COMP%]{--_button-rotate: -90deg}[scrollbarButton=start][_nghost-%COMP%]   .ng-scrollbar-button-icon[_ngcontent-%COMP%]{writing-mode:vertical-lr}[scrollbarButton=end][_nghost-%COMP%]{--_button-rotate: 90deg}[scrollbarButton=end][_nghost-%COMP%]   .ng-scrollbar-button-icon[_ngcontent-%COMP%]{writing-mode:vertical-rl}.ng-scrollbar-button-icon[_ngcontent-%COMP%]{rotate:var(--_button-rotate);display:flex;place-content:center;place-items:center;width:100%;height:100%}"],changeDetection:0});let a=e;return a})(),ou=(()=>{let e=class e extends nn{constructor(){super(...arguments),this.clientRectProperty="top",this.sizeProperty="offsetHeight",this.clientProperty="clientY",this.offsetProperty="offsetY",this.axis="y"}get viewportScrollMax(){return this.cmp.viewport.scrollMaxY}get viewportScrollOffset(){return this.cmp.viewport.scrollTop}scrollTo(i,n){return P6(this.cmp.scrollTo({top:i,duration:n}))}instantScrollTo(i){this.cmp.viewport.scrollYTo(i)}};e.\u0275fac=(()=>{let i;return function(c){return(i||(i=W3(e)))(c||e)}})(),e.\u0275cmp=f2({type:e,selectors:[["scrollbar-y"]],standalone:!0,features:[u3([{provide:f5,useExisting:e}]),R2,h2],decls:6,vars:7,consts:[["sticky",""],[1,"ng-scrollbar-sticky"],[1,"ng-scrollbar-track-wrapper"],["scrollbarTrackY",""],["scrollbarThumbY",""],["scrollbarButton","top","scrollDirection","backward"],["scrollbarButton","bottom","scrollDirection","forward"]],template:function(n,c){n&1&&(Z1(0,"div",1,0)(2,"div",2)(3,"div",3),Q1(4,"div",4),$1(),B2(5,qh,2,6),$1()()),n&2&&(U1(3),b3("ng-scrollbar-track ",c.cmp.trackClass,""),U1(),b3("ng-scrollbar-thumb ",c.cmp.thumbClass,""),U1(),I6(5,c.cmp.buttons()?5:-1))},dependencies:[cu,su,cn],styles:["[_nghost-%COMP%]{position:absolute;inset:0;pointer-events:none;min-width:calc(var(--viewport-width) * 1px);min-height:calc(var(--viewport-height) * 1px)}.ng-scrollbar-sticky[_ngcontent-%COMP%]{top:calc(var(--_scrollbar-wrapper-top) * 1px);left:calc(var(--_scrollbar-wrapper-left) * 1px);right:calc(var(--_scrollbar-wrapper-right) * 1px);height:calc(var(--_scrollbar-wrapper-height) * 1px);width:calc(var(--_scrollbar-wrapper-width) * 1px);position:sticky;z-index:100;opacity:var(--_scrollbar-hover-opacity);transition:var(--_scrollbar-opacity-transition)}.ng-scrollbar-track-wrapper[_ngcontent-%COMP%]{touch-action:none;-webkit-user-select:none;user-select:none;top:var(--_scrollbar-track-top);bottom:var(--_scrollbar-track-bottom);right:var(--_scrollbar-track-right);left:var(--_scrollbar-track-left);pointer-events:var(--_scrollbar-pointer-events);transition:var(--scrollbar-track-wrapper-transition);position:absolute;overflow:hidden;display:flex;place-items:center}.ng-scrollbar-track[_ngcontent-%COMP%]{position:relative;width:100%;height:100%;background-color:var(--scrollbar-track-color);border-radius:var(--scrollbar-border-radius);cursor:default;z-index:1;order:2}.ng-scrollbar-thumb[_ngcontent-%COMP%]{box-sizing:border-box;position:absolute;transition:var(--scrollbar-thumb-transition);border-radius:var(--scrollbar-border-radius);height:var(--_thumb-height);width:var(--_thumb-width);animation-name:_ngcontent-%COMP%_scrollbarThumbAnimation;animation-duration:1ms;animation-timing-function:linear}@keyframes _ngcontent-%COMP%_scrollbarThumbAnimation{0%{translate:var(--_scrollbar-thumb-transform-from)}to{translate:var(--_scrollbar-thumb-transform-to)}}","[_nghost-%COMP%]{--_scrollbar-wrapper-top: 0;--_scrollbar-wrapper-left: var(--_scrollbar-wrapper-y-left);--_scrollbar-wrapper-right: var(--_scrollbar-wrapper-y-right);--_scrollbar-wrapper-height: var(--viewport-height);--_scrollbar-wrapper-width: var(--_scrollbar-thickness);--_scrollbar-track-top: var(--_vertical-top);--_scrollbar-track-bottom: var(--_vertical-bottom);--_scrollbar-track-right: var(--_vertical-right);--_scrollbar-track-left: var(--_vertical-left);--_thumb-height: calc(var(--thumb-y-length) * 1px);--_thumb-width: 100%;--_scrollbar-thumb-transform-from: 0 0;--_scrollbar-thumb-transform-to: 0 calc(var(--_scrollbar-y-thumb-transform-to-value) * 1px)}.ng-scrollbar-track-wrapper[_ngcontent-%COMP%]{width:var(--_track-y-thickness);flex-direction:column}.ng-scrollbar-track-wrapper[_ngcontent-%COMP%]:hover{--_track-y-thickness: var(--_scrollbar-hover-thickness-px);--_thumb-y-color: var(--scrollbar-thumb-hover-color)}.ng-scrollbar-thumb[_ngcontent-%COMP%]{animation-timeline:var(--_animation-timeline-y);min-height:calc(var(--scrollbar-thumb-min-size) * 1px);display:var(--_vertical-thumb-display);background-color:var(--_thumb-y-color)}"],changeDetection:0});let a=e;return a})(),lu=(()=>{let e=class e extends nn{get viewportScrollMax(){return this.cmp.viewport.scrollMaxX}get viewportScrollOffset(){return Math.abs(this.cmp.viewport.scrollLeft)}constructor(){y3(()=>{this.cmp.direction()==="rtl"?this.handlePosition=(i,n)=>-(n-i):this.handlePosition=i=>i}),super(),this.manager=X1(an),this.clientRectProperty="left",this.sizeProperty="offsetWidth",this.clientProperty="clientX",this.offsetProperty="offsetX",this.axis="x"}scrollTo(i,n){return P6(this.cmp.scrollTo({left:i,duration:n}))}instantScrollTo(i,n){this.cmp.viewport.scrollXTo(this.handlePosition(i,n))}};e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=f2({type:e,selectors:[["scrollbar-x"]],hostVars:1,hostBindings:function(n,c){n&2&&q4("dir",c.cmp.direction())},standalone:!0,features:[u3([{provide:f5,useExisting:e}]),R2,h2],decls:6,vars:7,consts:[["sticky",""],[1,"ng-scrollbar-sticky"],[1,"ng-scrollbar-track-wrapper"],["scrollbarTrackX",""],["scrollbarThumbX",""],["scrollbarButton","start","scrollDirection","backward"],["scrollbarButton","end","scrollDirection","forward"]],template:function(n,c){n&1&&(Z1(0,"div",1,0)(2,"div",2)(3,"div",3),Q1(4,"div",4),$1(),B2(5,Xh,2,6),$1()()),n&2&&(U1(3),b3("ng-scrollbar-track ",c.cmp.trackClass,""),U1(),b3("ng-scrollbar-thumb ",c.cmp.thumbClass,""),U1(),I6(5,c.cmp.buttons()?5:-1))},dependencies:[nu,ru,cn],styles:[Yh,"[_nghost-%COMP%]{--_scrollbar-wrapper-top: var(--_scrollbar-wrapper-x-top);--_scrollbar-wrapper-left: 0;--_scrollbar-wrapper-right: 0;--_scrollbar-wrapper-height: var(--_scrollbar-thickness);--_scrollbar-wrapper-width: var(--viewport-width);--_scrollbar-track-top: var(--_horizontal-top);--_scrollbar-track-bottom: var(--_horizontal-bottom);--_scrollbar-track-right: var(--_horizontal-right);--_scrollbar-track-left: var(--_horizontal-left);--_thumb-height: 100%;--_thumb-width: calc(var(--thumb-x-length) * 1px);--_scrollbar-thumb-transform-from: 0;--_scrollbar-thumb-transform-to: calc(var(--_scrollbar-x-thumb-transform-to-value) * 1px)}[_nghost-%COMP%]   .ng-scrollbar-button[scrollbarButton=start][_ngcontent-%COMP%]{_--button-rotate:90}[_nghost-%COMP%]   .ng-scrollbar-button[scrollbarButton=end][_ngcontent-%COMP%]{_--button-rotate:-90}[dir=rtl][_nghost-%COMP%]   .ng-scrollbar-thumb[_ngcontent-%COMP%]{animation-name:_ngcontent-%COMP%_scrollbarThumbRTLAnimation;will-change:right;--_scrollbar-thumb-transform-to: calc(var(--_scrollbar-x-thumb-transform-to-value) * -1px)}[dir=rtl][_nghost-%COMP%]   .ng-scrollbar-button[scrollbarButton=start][_ngcontent-%COMP%]{--_button-rotate: 90deg}[dir=rtl][_nghost-%COMP%]   .ng-scrollbar-button[scrollbarButton=end][_ngcontent-%COMP%]{--_button-rotate: -90deg}.ng-scrollbar-track-wrapper[_ngcontent-%COMP%]{height:var(--_track-x-thickness);flex-direction:row}.ng-scrollbar-track-wrapper[_ngcontent-%COMP%]:hover{--_track-x-thickness: var(--_scrollbar-hover-thickness-px);--_thumb-x-color: var(--scrollbar-thumb-hover-color)}.ng-scrollbar-thumb[_ngcontent-%COMP%]{animation-timeline:var(--_animation-timeline-x);min-width:calc(var(--scrollbar-thumb-min-size) * 1px);display:var(--_horizontal-thumb-display);background-color:var(--_thumb-x-color)}@keyframes _ngcontent-%COMP%_scrollbarThumbRTLAnimation{0%{right:var(--_scrollbar-thumb-transform-from)}to{right:calc(var(--_scrollbar-thumb-transform-to) * -1)}}"],changeDetection:0});let a=e;return a})(),en=(()=>{let e=class e{constructor(){this.cmp=X1(pe)}};e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=f2({type:e,selectors:[["scrollbars"]],standalone:!0,features:[h2],decls:2,vars:2,template:function(n,c){n&1&&B2(0,Zh,1,0,"scrollbar-y")(1,$h,1,0,"scrollbar-x"),n&2&&(I6(0,c.cmp.verticalUsed()?0:-1),U1(),I6(1,c.cmp.horizontalUsed()?1:-1))},dependencies:[lu,ou],styles:["[_nghost-%COMP%]{display:contents}"],changeDetection:0});let a=e;return a})(),$0=(()=>{let e=class e extends tu{ngOnInit(){this.viewport.init(this.nativeElement,this.contentWrapper.nativeElement),super.ngOnInit()}};e.\u0275fac=(()=>{let i;return function(c){return(i||(i=W3(e)))(c||e)}})(),e.\u0275cmp=f2({type:e,selectors:[["ng-scrollbar",3,"externalViewport",""]],viewQuery:function(n,c){if(n&1&&(Y3(jh,7),Y3(en,7)),n&2){let r;H3(r=_3())&&(c.contentWrapper=r.first),H3(r=_3())&&(c._scrollbars=r.first)}},exportAs:["ngScrollbar"],standalone:!0,features:[u3([{provide:pe,useExisting:e}]),T5([Kh]),R2,h2],ngContentSelectors:Jh,decls:4,vars:0,consts:[["contentWrapper",""]],template:function(n,c){n&1&&(ye(),Z1(0,"div",null,0),Ve(2),Q1(3,"scrollbars"),$1())},dependencies:[en],styles:["[_nghost-%COMP%]{display:block;position:relative;max-height:100%;max-width:100%;--scrollbar-border-radius: 0px;--scrollbar-thickness: 5;--scrollbar-offset: 0;--scrollbar-track-wrapper-transition: width 60ms linear, height 60ms linear;--scrollbar-track-color: transparent;--scrollbar-thumb-color: rgb(0 0 0 / 20%);--scrollbar-thumb-hover-color: var(--scrollbar-thumb-color);--scrollbar-hover-thickness: var(--scrollbar-thickness);--scrollbar-thumb-transition: none;--scrollbar-thumb-min-size: 20;--scrollbar-button-color: var(--scrollbar-thumb-color);--scrollbar-button-hover-color: var(--scrollbar-button-color);--scrollbar-button-active-color: var(--scrollbar-button-hover-color);--scrollbar-button-fill: white;--scrollbar-button-hover-fill: var(--scrollbar-button-fill);--scrollbar-button-active-fill: var(--scrollbar-button-hover-fill);--scrollbar-hover-opacity-transition-enter-duration: 0;--scrollbar-hover-opacity-transition-leave-duration: .4s;--scrollbar-hover-opacity-transition-leave-delay: 1s;--scrollbar-overscroll-behavior: initial;--scrollbar-mobile-overscroll-behavior: none;--_scrollbar-thickness: calc(var(--scrollbar-thickness) + var(--scrollbar-offset) * 2);--_scrollbar-pointer-events: auto;--_scrollbar-offset-px: calc(var(--scrollbar-offset) * 1px);--_scrollbar-thickness-px: calc(var(--scrollbar-thickness) * 1px);--_scrollbar-hover-thickness-px: calc(var(--scrollbar-hover-thickness) * 1px);--_viewport-padding-top: 0;--_viewport-padding-bottom: 0;--_viewport-padding-left: 0;--_viewport-padding-right: 0;--_horizontal-thumb-display: block;--_vertical-thumb-display: block;--_viewport-overflow: auto;--_thumb-x-color: var(--scrollbar-thumb-color);--_thumb-y-color: var(--scrollbar-thumb-color);--_track-y-thickness: var(--_scrollbar-thickness-px);--_track-x-thickness: var(--_scrollbar-thickness-px);--_viewport-overscroll-behavior: var(--scrollbar-overscroll-behavior);--_scrollbar-content-width: fit-content}[_nghost-%COMP%]{--_vertical-top: var(--_scrollbar-offset-px);--_vertical-bottom: var(--_scrollbar-offset-px);--_horizontal-left: var(--_scrollbar-offset-px);--_horizontal-right: var(--_scrollbar-offset-px);--_horizontal-top: initial;--_horizontal-bottom: var(--_scrollbar-offset-px);--_scrollbar-wrapper-x-top: calc(var(--viewport-height) - var(--_scrollbar-thickness));--reached-offset: 1px;--reached-offset-top: var(--reached-offset);--reached-offset-bottom: var(--reached-offset);--reached-offset-start: var(--reached-offset);--reached-offset-end: var(--reached-offset);--dropped-offset: 1px;--dropped-offset-top: var(--dropped-offset);--dropped-offset-bottom: var(--dropped-offset);--dropped-offset-start: var(--dropped-offset);--dropped-offset-end: var(--dropped-offset);--_viewport_scroll-timeline: unset;--_animation-timeline-y: unset;--_scrollbar-y-thumb-transform-to-value: unset;--_scrollbar-x-thumb-transform-to-value: unset;--_scrollbar-thumb-transform-from: unset;--_scrollbar-thumb-transform-to: unset}.ng-scrollbar-external-viewport[_nghost-%COMP%]     .ng-scroll-viewport{min-height:100%;min-width:100%;height:100%;max-height:100%;max-width:100%}.ng-scroll-viewport[_nghost-%COMP%], .ng-scrollbar-external-viewport[_nghost-%COMP%]     .ng-scroll-viewport{position:relative;overflow:var(--_viewport-overflow);scroll-timeline:var(--_viewport_scroll-timeline);box-sizing:border-box!important;-webkit-overflow-scrolling:touch;will-change:scroll-position;-webkit-user-select:var(--_viewport-user-select);user-select:var(--_viewport-user-select);overscroll-behavior:var(--_viewport-overscroll-behavior)}.ng-scroll-viewport[_nghost-%COMP%] > .ng-scroll-content[_ngcontent-%COMP%], .ng-scrollbar-external-viewport[_nghost-%COMP%]     .ng-scroll-viewport>.ng-scroll-content{width:var(--_scrollbar-content-width);z-index:1;min-width:100%;min-height:100%;contain:content;padding:var(--_viewport-padding-top, 0) var(--_viewport-padding-right, 0) var(--_viewport-padding-bottom, 0) var(--_viewport-padding-left, 0)}.ng-scroll-viewport[_nghost-%COMP%], .ng-scrollbar-external-viewport[_nghost-%COMP%]     .ng-scroll-viewport{scrollbar-width:none!important}.ng-scroll-viewport[_nghost-%COMP%]::-webkit-scrollbar, .ng-scrollbar-external-viewport[_nghost-%COMP%]     .ng-scroll-viewport::-webkit-scrollbar{display:none!important}[position=invertX][_nghost-%COMP%], [position=invertAll][_nghost-%COMP%]{--_horizontal-top: var(--_scrollbar-offset-px);--_horizontal-bottom: initial;--_scrollbar-wrapper-x-top: 0}[dir=ltr][_nghost-%COMP%]{--_scrollbar-wrapper-y-right: initial;--_vertical-right: var(--_scrollbar-offset-px);--_vertical-left: initial;--_scrollbar-wrapper-y-left: calc(var(--viewport-width) - var(--_scrollbar-thickness))}[dir=ltr][position=invertY][_nghost-%COMP%], [dir=ltr][position=invertAll][_nghost-%COMP%]{--_vertical-left: var(--_scrollbar-offset-px);--_vertical-right: initial;--_scrollbar-wrapper-y-left: 0}[dir=rtl][_nghost-%COMP%]{--_scrollbar-wrapper-y-left: initial;--_vertical-left: var(--_scrollbar-offset-px);--_vertical-right: initial;--_scrollbar-wrapper-y-right: calc(var(--viewport-width) - var(--_scrollbar-thickness))}[dir=rtl][position=invertY][_nghost-%COMP%], [dir=rtl][position=invertAll][_nghost-%COMP%]{--_vertical-right: var(--_scrollbar-offset-px);--_vertical-left: initial;--_scrollbar-wrapper-y-right: 0}[verticalUsed=true][horizontalUsed=true][_nghost-%COMP%]{--_scrollbar-thickness-margin: calc(var(--scrollbar-thickness) + var(--scrollbar-offset) * 3);--_scrollbar-thickness-margin-px: calc(var(--_scrollbar-thickness-margin) * 1px)}[horizontalUsed=true][_nghost-%COMP%]{--_vertical-top: var(--_scrollbar-offset-px);--_vertical-bottom: var(--_scrollbar-thickness-margin-px)}[horizontalUsed=true][position=invertX][_nghost-%COMP%], [horizontalUsed=true][position=invertAll][_nghost-%COMP%]{--_vertical-top: var(--_scrollbar-thickness-margin-px);--_vertical-bottom: var(--_scrollbar-offset-px)}[verticalUsed=true][dir=ltr][_nghost-%COMP%]{--_horizontal-left: var(--_scrollbar-offset-px);--_horizontal-right: var(--_scrollbar-thickness-margin-px)}[verticalUsed=true][dir=rtl][_nghost-%COMP%]{--_horizontal-left: var(--_scrollbar-thickness-margin-px);--_horizontal-right: var(--_scrollbar-offset-px)}[verticalUsed=true][position=invertY][dir=ltr][_nghost-%COMP%], [verticalUsed=true][position=invertAll][dir=ltr][_nghost-%COMP%]{--_horizontal-left: var(--_scrollbar-thickness-margin-px);--_horizontal-right: var(--_scrollbar-offset-px)}[verticalUsed=true][position=invertY][dir=rtl][_nghost-%COMP%], [verticalUsed=true][position=invertAll][dir=rtl][_nghost-%COMP%]{--_horizontal-left: var(--_scrollbar-offset-px);--_horizontal-right: var(--_scrollbar-thickness-margin-px)}[appearance=native][verticalUsed=true][dir=ltr][_nghost-%COMP%]{--_viewport-padding-left: 0;--_viewport-padding-right: calc(var(--_scrollbar-thickness) * 1px)}[appearance=native][verticalUsed=true][dir=rtl][_nghost-%COMP%]{--_viewport-padding-left: calc(var(--_scrollbar-thickness) * 1px);--_viewport-padding-right: 0}[appearance=native][verticalUsed=true][position=invertY][dir=ltr][_nghost-%COMP%], [appearance=native][verticalUsed=true][position=invertAll][dir=ltr][_nghost-%COMP%]{--_viewport-padding-left: calc(var(--_scrollbar-thickness) * 1px);--_viewport-padding-right: 0}[appearance=native][verticalUsed=true][position=invertY][dir=rtl][_nghost-%COMP%], [appearance=native][verticalUsed=true][position=invertAll][dir=rtl][_nghost-%COMP%]{--_viewport-padding-left: 0;--_viewport-padding-right: calc(var(--_scrollbar-thickness) * 1px)}[appearance=native][horizontalUsed=true][_nghost-%COMP%]{--_viewport-padding-top: 0;--_viewport-padding-bottom: calc(var(--_scrollbar-thickness) * 1px)}[appearance=native][horizontalUsed=true][position=invertX][_nghost-%COMP%], [appearance=native][horizontalUsed=true][position=invertAll][_nghost-%COMP%]{--_viewport-padding-top: calc(var(--_scrollbar-thickness) * 1px);--_viewport-padding-bottom: 0}[visibility=hover][_nghost-%COMP%]{--_scrollbar-hover-opacity: 0;--_scrollbar-opacity-transition: opacity var(--scrollbar-hover-opacity-transition-leave-duration) var(--scrollbar-hover-opacity-transition-leave-delay)}[visibility=hover][_nghost-%COMP%]:hover, [visibility=hover][_nghost-%COMP%]:active, [visibility=hover][_nghost-%COMP%]:focus{--_scrollbar-hover-opacity: 1;--_scrollbar-opacity-transition: opacity var(--scrollbar-hover-opacity-transition-enter-duration)}[dir=ltr][_nghost-%COMP%]     .scroll-reached-trigger-element[trigger=start], [dir=ltr][_nghost-%COMP%]     .scroll-dropped-trigger-element[trigger=start]{left:0;right:unset}[dir=ltr][_nghost-%COMP%]     .scroll-reached-trigger-element[trigger=end], [dir=ltr][_nghost-%COMP%]     .scroll-dropped-trigger-element[trigger=end]{right:0;left:unset}[dir=rtl][_nghost-%COMP%]     .scroll-reached-trigger-element[trigger=start], [dir=rtl][_nghost-%COMP%]     .scroll-dropped-trigger-element[trigger=start]{right:0;left:unset}[dir=rtl][_nghost-%COMP%]     .scroll-reached-trigger-element[trigger=end], [dir=rtl][_nghost-%COMP%]     .scroll-dropped-trigger-element[trigger=end]{left:0;right:unset}[_nghost-%COMP%]     .ng-scroll-reached-wrapper, [_nghost-%COMP%]     .ng-scroll-dropped-wrapper, [_nghost-%COMP%]     .scroll-reached-trigger-element, [_nghost-%COMP%]     .scroll-dropped-trigger-element{position:absolute;-webkit-user-select:none;user-select:none;pointer-events:none;z-index:-9999}[_nghost-%COMP%]     .ng-scroll-reached-wrapper, [_nghost-%COMP%]     .ng-scroll-dropped-wrapper{visibility:hidden;inset:0;min-width:calc(var(--viewport-width) * 1px);min-height:calc(var(--viewport-height) * 1px)}[_nghost-%COMP%]     [isHorizontallyScrollable=false] .scroll-reached-trigger-element[trigger=end], [_nghost-%COMP%]     [isHorizontallyScrollable=false] .scroll-dropped-trigger-element[trigger=end]{display:none}[_nghost-%COMP%]     [isVerticallyScrollable=false] .scroll-reached-trigger-element[trigger=bottom], [_nghost-%COMP%]     [isVerticallyScrollable=false] .scroll-dropped-trigger-element[trigger=bottom]{display:none}[_nghost-%COMP%]     .scroll-reached-trigger-element{background:red}[_nghost-%COMP%]     .scroll-reached-trigger-element[trigger=top], [_nghost-%COMP%]     .scroll-reached-trigger-element[trigger=bottom]{left:0;right:0}[_nghost-%COMP%]     .scroll-reached-trigger-element[trigger=start], [_nghost-%COMP%]     .scroll-reached-trigger-element[trigger=end]{top:0;bottom:0}[_nghost-%COMP%]     .scroll-reached-trigger-element[trigger=top]{top:0;height:var(--reached-offset-top)}[_nghost-%COMP%]     .scroll-reached-trigger-element[trigger=bottom]{bottom:0;height:var(--reached-offset-bottom)}[_nghost-%COMP%]     .scroll-reached-trigger-element[trigger=start]{width:var(--reached-offset-start)}[_nghost-%COMP%]     .scroll-reached-trigger-element[trigger=end]{width:var(--reached-offset-end)}[_nghost-%COMP%]   .scroll-dropped-trigger-element[_ngcontent-%COMP%]{background:#00f}[_nghost-%COMP%]   .scroll-dropped-trigger-element[trigger=top][_ngcontent-%COMP%], [_nghost-%COMP%]   .scroll-dropped-trigger-element[trigger=bottom][_ngcontent-%COMP%]{left:0;right:0}[_nghost-%COMP%]   .scroll-dropped-trigger-element[trigger=start][_ngcontent-%COMP%], [_nghost-%COMP%]   .scroll-dropped-trigger-element[trigger=end][_ngcontent-%COMP%]{top:0;bottom:0}[_nghost-%COMP%]   .scroll-dropped-trigger-element[trigger=top][_ngcontent-%COMP%]{top:0;height:var(--dropped-offset-top)}[_nghost-%COMP%]   .scroll-dropped-trigger-element[trigger=bottom][_ngcontent-%COMP%]{bottom:0;height:var(--dropped-offset-bottom)}[_nghost-%COMP%]   .scroll-dropped-trigger-element[trigger=start][_ngcontent-%COMP%]{width:var(--dropped-offset-start)}[_nghost-%COMP%]   .scroll-dropped-trigger-element[trigger=end][_ngcontent-%COMP%]{width:var(--dropped-offset-end)}[verticalUsed=true][_nghost-%COMP%]{--_timeline-scope: --scrollerY;--_animation-timeline-y: --scrollerY;--_viewport_scroll-timeline: --scrollerY y;--_scrollbar-y-thumb-transform-to-value: calc(var(--track-y-length) - var(--thumb-y-length))}[horizontalUsed=true][_nghost-%COMP%]{--_timeline-scope: --scrollerX;--_animation-timeline-x: --scrollerX;--_viewport_scroll-timeline: --scrollerX x;--_scrollbar-x-thumb-transform-to-value: calc(var(--track-x-length) - var(--thumb-x-length))}[verticalUsed=true][horizontalUsed=true][_nghost-%COMP%]{--_timeline-scope: --scrollerX, --scrollerY;--_viewport_scroll-timeline: --scrollerX x, --scrollerY y}[orientation=vertical][_nghost-%COMP%]{--_viewport-overflow: hidden auto;--_scrollbar-content-width: unset}[orientation=horizontal][_nghost-%COMP%]{--_viewport-overflow: auto hidden}[disableInteraction=true][_nghost-%COMP%]{--_scrollbar-pointer-events: none}[isVerticallyScrollable=false][_nghost-%COMP%]{--_vertical-thumb-display: none}[isHorizontallyScrollable=false][_nghost-%COMP%]{--_horizontal-thumb-display: none}[dragging=x][_nghost-%COMP%], [dragging=y][_nghost-%COMP%]{--_viewport-user-select: none}[horizontalUsed=true][_nghost-%COMP%]{--thumb-x-length: max(calc(var(--viewport-width) * var(--track-x-length) / var(--content-width)), var(--scrollbar-thumb-min-size))}[verticalUsed=true][_nghost-%COMP%]{--thumb-y-length: max(calc(var(--viewport-height) * var(--track-y-length) / var(--content-height)), var(--scrollbar-thumb-min-size))}[dragging=x][_nghost-%COMP%]{--_track-x-thickness: calc(var(--scrollbar-hover-thickness) * 1px);--_thumb-x-color: var(--scrollbar-thumb-hover-color)}[dragging=y][_nghost-%COMP%]{--_track-y-thickness: calc(var(--scrollbar-hover-thickness) * 1px);--_thumb-y-color: var(--scrollbar-thumb-hover-color)}[mobile=true][_nghost-%COMP%]{--_viewport-overscroll-behavior: var(--scrollbar-mobile-overscroll-behavior)}"],changeDetection:0});let a=e;return a})();var j0=(()=>{let e=class e{};e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=G4({type:e}),e.\u0275inj=B4({});let a=e;return a})();var J0=(()=>{let e=class e{constructor(){this.panelText=""}};e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=f2({type:e,selectors:[["app-panel"]],inputs:{panelText:"panelText"},standalone:!0,features:[h2],decls:3,vars:1,consts:[[1,"panel-face"],[1,"panel-text",2,"white-space","pre-wrap"]],template:function(n,c){n&1&&(Z1(0,"div",0)(1,"div",1),h3(2),$1()()),n&2&&(U1(2),Se(c.panelText))},styles:[".panel-face[_ngcontent-%COMP%]{color:#fff;background-color:#000000e5;border-radius:10px;margin-top:5dvh;margin-bottom:5dvh;width:60dvw;height:90dvh}.panel-text[_ngcontent-%COMP%]{padding-top:.5dvw;padding-left:2dvw;margin-right:1dvw;color:#e6e6e6;text-align:left;-webkit-user-select:none;user-select:none}"]});let a=e;return a})();var sn={prefix:"fab",iconName:"steam",icon:[496,512,[],"f1b6","M496 256c0 137-111.2 248-248.4 248-113.8 0-209.6-76.3-239-180.4l95.2 39.3c6.4 32.1 34.9 56.4 68.9 56.4 39.2 0 71.9-32.4 70.2-73.5l84.5-60.2c52.1 1.3 95.8-40.9 95.8-93.5 0-51.6-42-93.5-93.7-93.5s-93.7 42-93.7 93.5v1.2L176.6 279c-15.5-.9-30.7 3.4-43.5 12.1L0 236.1C10.2 108.4 117.1 8 247.6 8 384.8 8 496 119 496 256zM155.7 384.3l-30.5-12.6a52.79 52.79 0 0 0 27.2 25.8c26.9 11.2 57.8-1.6 69-28.4 5.4-13 5.5-27.3.1-40.3-5.4-13-15.5-23.2-28.5-28.6-12.9-5.4-26.7-5.2-38.9-.6l31.5 13c19.8 8.2 29.2 30.9 20.9 50.7-8.3 19.9-31 29.2-50.8 21zm173.8-129.9c-34.4 0-62.4-28-62.4-62.3s28-62.3 62.4-62.3 62.4 28 62.4 62.3-27.9 62.3-62.4 62.3zm.1-15.6c25.9 0 46.9-21 46.9-46.8 0-25.9-21-46.8-46.9-46.8s-46.9 21-46.9 46.8c.1 25.8 21.1 46.8 46.9 46.8z"]};var on={prefix:"fab",iconName:"linkedin",icon:[448,512,[],"f08c","M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"]};var ln={prefix:"fab",iconName:"github",icon:[496,512,[],"f09b","M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"]};var fn={prefix:"fab",iconName:"youtube",icon:[576,512,[61802],"f167","M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"]};var fu=["shaderViewport"],hu=["shaderCanvas"];function uu(a,e){if(a&1&&Q1(0,"img",5),a&2){let t=t3();e2("src",t.previewImageSrc,He)}}var hn=(()=>{let e=class e{constructor(i){this.http=i,this.name="[Unknown Shader!]",this.vertexShaderFilepath="",this.fragmentShaderFilepath="",this.previewImageSrc="",this.isAnimating=!1,this.requestId=-1}ngAfterViewInit(){Promise.all([this.loadShader(this.vertexShaderFilepath),this.loadShader(this.fragmentShaderFilepath)]).then(([i,n])=>{this.initThree(i,n)}).catch(i=>console.error("Error loading shaders:",i)),this.shaderViewport.nativeElement.addEventListener("mouseenter",this.startAnimation.bind(this)),this.shaderViewport.nativeElement.addEventListener("mouseleave",this.stopAnimation.bind(this))}startAnimation(){this.isAnimating==!1&&(this.isAnimating=!0,this.animate(this.composer,this.material))}stopAnimation(){this.requestId&&(cancelAnimationFrame(this.requestId),this.requestId=-1),this.isAnimating=!1}loadShader(i){return this.http.get(i,{responseType:"text"}).toPromise().then(n=>n||"")}onResize(){let n=2.5*(window.innerWidth/window.innerHeight);this.renderer.setSize(this.shaderCanvas.nativeElement.clientWidth,this.shaderCanvas.nativeElement.clientHeight),this.material.uniforms.ratio.value=.5*(1/.2)*(window.innerWidth/window.innerHeight)}initThree(i,n){this.renderer=new P4({canvas:this.shaderCanvas.nativeElement,alpha:!1,antialias:!1}),this.renderer.setPixelRatio(window.devicePixelRatio),this.renderer.setSize(this.shaderCanvas.nativeElement.clientWidth,this.shaderCanvas.nativeElement.clientHeight);let c=.2;this.scene=new b6,this.camera=new H2(75,c*this.shaderCanvas.nativeElement.clientWidth/this.shaderCanvas.nativeElement.clientHeight,.1,1e3),this.camera.position.z=1,this.composer=new V6(this.renderer),this.composer.addPass(new S6(this.scene,this.camera)),this.material=new V2({uniforms:{time:{value:0},ratio:{value:1/c/2*window.innerWidth/window.innerHeight}},vertexShader:i,fragmentShader:n});let r=new l4(2,2),s=new y2(r,this.material);this.scene.add(s),this.animate(this.composer,this.material),this.capturePreview()}animate(i,n){if(this.requestId<0){let c=Date.now(),r=()=>{if(this.isAnimating){this.requestId=requestAnimationFrame(r);let s=(Date.now()-c)*1e-5;n.uniforms.time.value=s,i.render()}else cancelAnimationFrame(this.requestId),this.requestId=-1};r()}}capturePreview(){let n=2.5*(window.innerWidth/window.innerHeight);this.renderer.setSize(this.shaderCanvas.nativeElement.clientWidth,this.shaderCanvas.nativeElement.clientHeight),this.material.uniforms.ratio.value=.5*(1/.2)*(window.innerWidth/window.innerHeight);let c=new Image;this.renderer.render(this.scene,this.camera),c.src=this.renderer.domElement.toDataURL(),this.previewImageSrc=c.src}};e.\u0275fac=function(n){return new(n||e)(U2(Te))},e.\u0275cmp=f2({type:e,selectors:[["app-shader-nub"]],viewQuery:function(n,c){if(n&1&&(Y3(fu,5),Y3(hu,5)),n&2){let r;H3(r=_3())&&(c.shaderViewport=r.first),H3(r=_3())&&(c.shaderCanvas=r.first)}},hostBindings:function(n,c){n&1&&G2("resize",function(){return c.onResize()},!1,_e)},inputs:{name:"name",vertexShaderFilepath:"vertexShaderFilepath",fragmentShaderFilepath:"fragmentShaderFilepath"},standalone:!0,features:[h2],decls:7,vars:2,consts:[["shaderViewport",""],["shaderCanvas",""],[1,"shader-container"],["id","text"],["class","preview-image","alt"," ",3,"src",4,"ngIf"],["alt"," ",1,"preview-image",3,"src"]],template:function(n,c){n&1&&(Z1(0,"div",2,0)(2,"div",3),h3(3),$1(),B2(4,uu,1,1,"img",4),Q1(5,"canvas",null,1),$1()),n&2&&(U1(3),Le(" ",c.name," "),U1(),e2("ngIf",!c.isAnimating))},dependencies:[$3,Ae,Ee],styles:[".shader-container[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center;border-radius:3vw;overflow:hidden;background-color:#000;width:100%;height:20vh;position:relative;z-index:0;box-shadow:0 4px 8px 4px #111;--blur-intensity: 3px}.preview-image[_ngcontent-%COMP%], canvas[_ngcontent-%COMP%]{transition:filter .25s ease-in-out;width:100%;height:20vh;position:absolute;filter:blur(var(--blur-intensity))}#text[_ngcontent-%COMP%]{transition:opacity .25s ease-in-out;opacity:1;font-size:2vw;color:#fff;text-align:center;margin:0;z-index:2;position:absolute;text-shadow:0px 0px 10px black,0px 0px 10px black,0px 0px 10px black,0px 0px 10px black,0px 0px 10px black,0px 0px 10px black}.shader-container[_ngcontent-%COMP%]:hover > #text[_ngcontent-%COMP%]{opacity:0}.shader-container[_ngcontent-%COMP%]:hover{--blur-intensity: 0px}canvas[_ngcontent-%COMP%]{pointer-events:auto}"]});let a=e;return a})();function du(a,e){if(a&1&&(Z1(0,"div",4),Q1(1,"app-shader-nub",5)(2,"br"),$1()),a&2){let t=e.$implicit;U1(),e2("name",t.name)("vertexShaderFilepath",t.vertexShaderFilepath)("fragmentShaderFilepath",t.fragmentShaderFilepath)}}var un=(()=>{let e=class e extends J0{constructor(){super(),this.nubs=[{name:"N I H I L I S M",vertexShaderFilepath:"/assets/shaders/shd_Default.vert",fragmentShaderFilepath:"/assets/shaders/shd_Nihilism.frag"},{name:"I N N E R - F I R E",vertexShaderFilepath:"/assets/shaders/shd_Default.vert",fragmentShaderFilepath:"/assets/shaders/shd_InnerFire.frag"},{name:"T H R U S T E R S",vertexShaderFilepath:"/assets/shaders/shd_Default.vert",fragmentShaderFilepath:"/assets/shaders/shd_Thrusters.frag"},{name:"R O C K E T",vertexShaderFilepath:"/assets/shaders/shd_Default.vert",fragmentShaderFilepath:"/assets/shaders/shd_Rocket.frag"},{name:"P S I - D R U M",vertexShaderFilepath:"/assets/shaders/shd_Default.vert",fragmentShaderFilepath:"/assets/shaders/shd_PsiDrum.frag"},{name:"S C A N N E R",vertexShaderFilepath:"/assets/shaders/shd_Default.vert",fragmentShaderFilepath:"/assets/shaders/shd_Scanner.frag"},{name:"M A T T E R F L O W E R",vertexShaderFilepath:"/assets/shaders/shd_Default.vert",fragmentShaderFilepath:"/assets/shaders/shd_Matterflower.frag"},{name:"L A T T I C E",vertexShaderFilepath:"/assets/shaders/shd_Default.vert",fragmentShaderFilepath:"/assets/shaders/shd_Lattice.frag"},{name:"G A L A C T I C - S E A M",vertexShaderFilepath:"/assets/shaders/shd_Default.vert",fragmentShaderFilepath:"/assets/shaders/shd_GalacticSeam.frag"},{name:"T U R B U L E N C E",vertexShaderFilepath:"/assets/shaders/shd_Default.vert",fragmentShaderFilepath:"/assets/shaders/shd_Turbulence.frag"}]}};e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=f2({type:e,selectors:[["app-panel-shader"]],standalone:!0,features:[R2,h2],decls:5,vars:2,consts:[[1,"panel-face"],[1,"panel-text",2,"white-space","pre-wrap"],[1,"scrollable-content"],["style","scale:0.90",4,"ngFor","ngForOf"],[2,"scale","0.90"],[3,"name","vertexShaderFilepath","fragmentShaderFilepath"]],template:function(n,c){n&1&&(Z1(0,"div",0)(1,"div",1),h3(2),Z1(3,"ng-scrollbar",2),B2(4,du,3,3,"div",3),$1()()()),n&2&&(U1(2),Le(" ",c.panelText," "),U1(2),e2("ngForOf",c.nubs))},dependencies:[$3,D5,hn,j0,$0],styles:[".scrollable-content[_ngcontent-%COMP%]{max-height:80dvh;overflow-y:auto}ng-scrollbar[_ngcontent-%COMP%]{visibility:always;width:100%;height:100%;--scrollbar-border-radius: 20px;--scrollbar-thickness: 10;--scrollbar-offset: 5;--scrollbar-track-wrapper-transition: width 60ms linear, height 60ms linear;--scrollbar-track-color: rgb(0 0 0 / 75%);--scrollbar-thumb-color: rgb(255 255 255 / 80%);--scrollbar-thumb-hover-colorIn: rgb(255 255 255 / 100%);--scrollbar-thumb-hover-color: var(--scrollbar-thumb-hover-colorIn);--scrollbar-hover-thickness: var(--scrollbar-thickness);--scrollbar-thumb-transition: none;--scrollbar-thumb-min-size: 20;--scrollbar-button-color: var(--scrollbar-thumb-color);--scrollbar-button-hover-color: var(--scrollbar-button-color);--scrollbar-button-active-color: var(--scrollbar-button-hover-color);--scrollbar-button-fill: white;--scrollbar-button-hover-fill: var(--scrollbar-button-fill);--scrollbar-button-active-fill: var(--scrollbar-button-hover-fill);--scrollbar-overscroll-behavior: initial;--scrollbar-mobile-overscroll-behavior: none;-webkit-mask-image:linear-gradient(to bottom,black calc(100% - 48px),transparent 100%);mask-image:linear-gradient(to bottom,black calc(100% - 48px),transparent 100%);-webkit-mask-image:linear-gradient(to bottom,transparent 0%,black 48px,black calc(100% - 48px),transparent 100%);mask-image:linear-gradient(to bottom,transparent 0%,black 48px,black calc(100% - 48px),transparent 100%)}",".panel-face[_ngcontent-%COMP%]{color:#fff;background-color:#000000e5;border-radius:10px;margin-top:5dvh;margin-bottom:5dvh;width:60dvw;height:90dvh}.panel-text[_ngcontent-%COMP%]{padding-top:.5dvw;padding-left:2dvw;margin-right:1dvw;color:#e6e6e6;text-align:left;-webkit-user-select:none;user-select:none}"]});let a=e;return a})();function pu(a,e){if(a&1&&Q1(0,"app-panel-shader",11),a&2){let t=t3();e2("panelText",t.panelText)}}function mu(a,e){if(a&1&&Q1(0,"app-panel",11),a&2){let t=t3();e2("panelText",t.panelText)}}var dn=(()=>{let e=class e{constructor(){this.faUser=Ba,this.faSteam=sn,this.faLinkedin=on,this.faGithub=ln,this.faYoutube=fn,this.title="PersonalPortfolioSite",this.panelTypeTargetName="Default",this.panelText=`Hello! Welcome to my website!

Click the buttons on the left to view additional information and content.

Buttons marked with (\u2197) will open a new tab in your browser.`,this.tabIDSelected=0,this.hovering=!1,this.onClickShaders=this.onClickShaders.bind(this)}onMouseEnter(){this.hovering=!0}onMouseLeave(){this.hovering=!1}handlePanelTextEvent(i){this.panelText=i}onClickShaders(i){this.panelTypeTargetName="shaderPanel"}onClickRingWar(i){window.open("https://store.steampowered.com/app/1909650/Ring_War/","_blank")}onClickLinkedIn(i){window.open("https://www.linkedin.com/in/aidan-cusack-74406728b/","_blank")}onClickGitHub(i){window.open("https://github.com/Ilverism/","_blank")}onClickYouTube(i){window.open("https://www.youtube.com/@IlverismOST/","_blank")}handleTabIDEvent(i){console.log("Received Tab ID: "+i),this.tabIDSelected=parseInt(i)}};e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=f2({type:e,selectors:[["app-root"]],standalone:!0,features:[h2],decls:16,vars:35,consts:[[1,"fullscreen-container"],[1,"overlay-content",2,"scale","0.90"],[3,"position","appearance"],[1,"scrollbar-elements"],[2,"display","block","margin","5.0dvh 0"],[3,"panelTextOut","outputTabID","name","panelText","iconDef","buttonColor","isExternalLink"],[3,"panelTextOut","outputTabID","name","panelText","iconUrl","buttonColor","isExternalLink","clickEvent"],[3,"outputTabID","name","iconDef","buttonColor","isExternalLink","clickEvent"],[3,"ngSwitch"],[3,"panelText",4,"ngSwitchCase"],[3,"panelText",4,"ngSwitchDefault"],[3,"panelText"]],template:function(n,c){n&1&&(Z1(0,"div",0),Q1(1,"app-shader-background"),Z1(2,"div",1)(3,"ng-scrollbar",2)(4,"div",3),Q1(5,"br",4),Z1(6,"app-tab",5),G2("panelTextOut",function(s){return c.handlePanelTextEvent(s)})("outputTabID",function(s){return c.handleTabIDEvent(s)}),$1(),Z1(7,"app-tab",6),G2("panelTextOut",function(s){return c.handlePanelTextEvent(s)})("outputTabID",function(s){return c.handleTabIDEvent(s)}),$1(),Z1(8,"app-tab",7),G2("outputTabID",function(s){return c.handleTabIDEvent(s)}),$1(),Z1(9,"app-tab",7),G2("outputTabID",function(s){return c.handleTabIDEvent(s)}),$1(),Z1(10,"app-tab",7),G2("outputTabID",function(s){return c.handleTabIDEvent(s)}),$1(),Z1(11,"app-tab",7),G2("outputTabID",function(s){return c.handleTabIDEvent(s)}),$1(),Q1(12,"br",4),$1()(),Z1(13,"div",8),B2(14,pu,1,1,"app-panel-shader",9)(15,mu,1,1,"app-panel",10),$1()()()),n&2&&(U1(3),e2("position","invertY")("appearance","compact"),U1(3),e2("name","About")("panelText","[TODO: Display About Page...]")("iconDef",c.faUser)("buttonColor","lightgray")("isExternalLink",!1),U1(),e2("name","Shaders")("panelText","")("iconUrl","assets/images/ShaderIconAlt.png")("buttonColor","gray")("isExternalLink",!1)("clickEvent",c.onClickShaders),U1(),e2("name","Ring War")("iconDef",c.faSteam)("buttonColor","#171a21")("isExternalLink",!0)("clickEvent",c.onClickRingWar),U1(),e2("name","LinkedIn")("iconDef",c.faLinkedin)("buttonColor","rgba(0, 123, 181, 1.00)")("isExternalLink",!0)("clickEvent",c.onClickLinkedIn),U1(),e2("name","GitHub")("iconDef",c.faGithub)("buttonColor","#333")("isExternalLink",!0)("clickEvent",c.onClickGitHub),U1(),e2("name","Music")("iconDef",c.faYoutube)("buttonColor","rgba(255, 0, 0, 1.00)")("isExternalLink",!0)("clickEvent",c.onClickYouTube),U1(2),e2("ngSwitch",c.panelTypeTargetName),U1(),e2("ngSwitchCase","shaderPanel"))},dependencies:[$3,I5,F5,O5,Fi,Wa,j0,$0,J0,un,X0],styles:['html[_ngcontent-%COMP%], body[_ngcontent-%COMP%]{margin:0;padding:0;height:10%}app-shader-background[_ngcontent-%COMP%]{position:absolute;top:0;left:0;width:100%;height:100%}.overlay-content[_ngcontent-%COMP%]{position:absolute;width:100%;height:100%;display:flex;color:#fff;font:3vw sans-serif;margin-left:1vw}.grid-container[_ngcontent-%COMP%]{display:grid;grid-template-columns:1fr;gap:1vw;align-content:start;overflow-y:hidden;max-height:80vh;padding:5vw}ng-scrollbar[_ngcontent-%COMP%]{visibility:always;width:40%;height:100%;--scrollbar-border-radius: 20px;--scrollbar-thickness: 20;--scrollbar-offset: 5;--scrollbar-track-wrapper-transition: width 60ms linear, height 60ms linear;--scrollbar-track-color: rgb(0 0 0 / 75%);--scrollbar-thumb-color: rgb(255 255 255 / 80%);--scrollbar-thumb-hover-colorIn: rgb(255 255 255 / 100%);--scrollbar-thumb-hover-color: var(--scrollbar-thumb-hover-colorIn);--scrollbar-hover-thickness: var(--scrollbar-thickness);--scrollbar-thumb-transition: none;--scrollbar-thumb-min-size: 20;--scrollbar-button-color: var(--scrollbar-thumb-color);--scrollbar-button-hover-color: var(--scrollbar-button-color);--scrollbar-button-active-color: var(--scrollbar-button-hover-color);--scrollbar-button-fill: white;--scrollbar-button-hover-fill: var(--scrollbar-button-fill);--scrollbar-button-active-fill: var(--scrollbar-button-hover-fill);--scrollbar-overscroll-behavior: initial;--scrollbar-mobile-overscroll-behavior: none;-webkit-mask-image:linear-gradient(to bottom,black calc(100% - 48px),transparent 100%);mask-image:linear-gradient(to bottom,black calc(100% - 48px),transparent 100%);-webkit-mask-image:linear-gradient(to bottom,transparent 0%,black 48px,black calc(100% - 48px),transparent 100%);mask-image:linear-gradient(to bottom,transparent 0%,black 48px,black calc(100% - 48px),transparent 100%);mask-border:url("./media/TriangleBorder-6N7FN5WN.svg") 30 repeat}.scrollbar-elements[_ngcontent-%COMP%]{padding-left:2vw}']});let a=e;return a})();var pn=[];var mn={providers:[q5(pn),G5()]};var vu={providers:[W5()]},vn=k5(mn,vu);var gu=()=>U5(dn,vn),Yp=gu;export{Yp as a};
