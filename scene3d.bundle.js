(()=>{var Sh=0,$l=1,_h=2;var tc=1,bh=2,$n=3,An=0,on=1,Xe=2,Xn=0,Vi=1,an=2,ec=3,nc=4,Eh=5,Ai=100,wh=101,Ah=102,Th=103,Rh=104,Ch=200,Ih=201,Ph=202,Fh=203,bo=204,Eo=205,Uh=206,Dh=207,Lh=208,Nh=209,Oh=210,Bh=211,zh=212,Hh=213,kh=214,ta=0,ea=1,na=2,Wi=3,ia=4,ra=5,sa=6,oa=7,ic=0,Gh=1,Vh=2,gi=0,aa=1,la=2,ca=3,Hr=4,ha=5,ua=6,fa=7;var rc=300,Zi=301,Qi=302,da=303,pa=304,Bs=306,fi=1e3,wi=1001,wo=1002,vn=1003,Wh=1004;var zs=1005;var Gn=1006,ma=1007;var Pi=1008;var ti=1009,sc=1010,oc=1011,kr=1012,ga=1013,Fi=1014,ei=1015,Nn=1016,xa=1017,va=1018,Gr=1020,ac=35902,lc=35899,cc=1021,hc=1022,On=1023,Tr=1026,Vr=1027,uc=1028,ya=1029,fc=1030,Ma=1031;var Sa=1033,Hs=33776,ks=33777,Gs=33778,Vs=33779,_a=35840,ba=35841,Ea=35842,wa=35843,Aa=36196,Ta=37492,Ra=37496,Ca=37808,Ia=37809,Pa=37810,Fa=37811,Ua=37812,Da=37813,La=37814,Na=37815,Oa=37816,Ba=37817,za=37818,Ha=37819,ka=37820,Ga=37821,Va=36492,Wa=36494,Xa=36495,Ka=36283,ja=36284,qa=36285,Ja=36286;var hs=2300,Ao=2301,_o=2302,Vl=2400,Wl=2401,Xl=2402;var Xh=3200,Kh=3201;var jh=0,qh=1,Kn="",$e="srgb",Xi="srgb-linear",us="linear",Me="srgb";var Gi=7680;var Kl=519,Jh=512,Yh=513,Zh=514,dc=515,Qh=516,$h=517,tu=518,eu=519,To=35044;var pc="300 es",kn=2e3,fs=2001;var di=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){let n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){let n=this._listeners;if(n===void 0)return;let r=n[t];if(r!==void 0){let s=r.indexOf(e);s!==-1&&r.splice(s,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let n=e[t.type];if(n!==void 0){t.target=this;let r=n.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,t);t.target=null}}},cn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var gl=Math.PI/180,Ro=180/Math.PI;function hi(){let i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(cn[i&255]+cn[i>>8&255]+cn[i>>16&255]+cn[i>>24&255]+"-"+cn[t&255]+cn[t>>8&255]+"-"+cn[t>>16&15|64]+cn[t>>24&255]+"-"+cn[e&63|128]+cn[e>>8&255]+"-"+cn[e>>16&255]+cn[e>>24&255]+cn[n&255]+cn[n>>8&255]+cn[n>>16&255]+cn[n>>24&255]).toLowerCase()}function se(i,t,e){return Math.max(t,Math.min(e,i))}function ff(i,t){return(i%t+t)%t}function xl(i,t,e){return(1-e)*i+e*t}function Jn(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Ae(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}var nt=class i{constructor(t=0,e=0){i.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6],this.y=r[1]*e+r[4]*n+r[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=se(this.x,t.x,e.x),this.y=se(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=se(this.x,t,e),this.y=se(this.y,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(se(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(se(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),r=Math.sin(e),s=this.x-t.x,o=this.y-t.y;return this.x=s*n-o*r+t.x,this.y=s*r+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Ln=class{constructor(t=0,e=0,n=0,r=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=r}static slerpFlat(t,e,n,r,s,o,a){let l=n[r+0],c=n[r+1],h=n[r+2],u=n[r+3],f=s[o+0],d=s[o+1],x=s[o+2],y=s[o+3];if(a===0){t[e+0]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u;return}if(a===1){t[e+0]=f,t[e+1]=d,t[e+2]=x,t[e+3]=y;return}if(u!==y||l!==f||c!==d||h!==x){let g=1-a,p=l*f+c*d+h*x+u*y,A=p>=0?1:-1,w=1-p*p;if(w>Number.EPSILON){let v=Math.sqrt(w),M=Math.atan2(v,p*A);g=Math.sin(g*M)/v,a=Math.sin(a*M)/v}let m=a*A;if(l=l*g+f*m,c=c*g+d*m,h=h*g+x*m,u=u*g+y*m,g===1-a){let v=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=v,c*=v,h*=v,u*=v}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,r,s,o){let a=n[r],l=n[r+1],c=n[r+2],h=n[r+3],u=s[o],f=s[o+1],d=s[o+2],x=s[o+3];return t[e]=a*x+h*u+l*d-c*f,t[e+1]=l*x+h*f+c*u-a*d,t[e+2]=c*x+h*d+a*f-l*u,t[e+3]=h*x-a*u-l*f-c*d,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,r){return this._x=t,this._y=e,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,r=t._y,s=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(r/2),u=a(s/2),f=l(n/2),d=l(r/2),x=l(s/2);switch(o){case"XYZ":this._x=f*h*u+c*d*x,this._y=c*d*u-f*h*x,this._z=c*h*x+f*d*u,this._w=c*h*u-f*d*x;break;case"YXZ":this._x=f*h*u+c*d*x,this._y=c*d*u-f*h*x,this._z=c*h*x-f*d*u,this._w=c*h*u+f*d*x;break;case"ZXY":this._x=f*h*u-c*d*x,this._y=c*d*u+f*h*x,this._z=c*h*x+f*d*u,this._w=c*h*u-f*d*x;break;case"ZYX":this._x=f*h*u-c*d*x,this._y=c*d*u+f*h*x,this._z=c*h*x-f*d*u,this._w=c*h*u+f*d*x;break;case"YZX":this._x=f*h*u+c*d*x,this._y=c*d*u+f*h*x,this._z=c*h*x-f*d*u,this._w=c*h*u-f*d*x;break;case"XZY":this._x=f*h*u-c*d*x,this._y=c*d*u-f*h*x,this._z=c*h*x+f*d*u,this._w=c*h*u+f*d*x;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,r=Math.sin(n);return this._x=t.x*r,this._y=t.y*r,this._z=t.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],r=e[4],s=e[8],o=e[1],a=e[5],l=e[9],c=e[2],h=e[6],u=e[10],f=n+a+u;if(f>0){let d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(h-l)*d,this._y=(s-c)*d,this._z=(o-r)*d}else if(n>a&&n>u){let d=2*Math.sqrt(1+n-a-u);this._w=(h-l)/d,this._x=.25*d,this._y=(r+o)/d,this._z=(s+c)/d}else if(a>u){let d=2*Math.sqrt(1+a-n-u);this._w=(s-c)/d,this._x=(r+o)/d,this._y=.25*d,this._z=(l+h)/d}else{let d=2*Math.sqrt(1+u-n-a);this._w=(o-r)/d,this._x=(s+c)/d,this._y=(l+h)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(se(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let r=Math.min(1,e/n);return this.slerp(t,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,r=t._y,s=t._z,o=t._w,a=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+o*a+r*c-s*l,this._y=r*h+o*l+s*a-n*c,this._z=s*h+o*c+n*l-r*a,this._w=o*h-n*a-r*l-s*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);let n=this._x,r=this._y,s=this._z,o=this._w,a=o*t._w+n*t._x+r*t._y+s*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=r,this._z=s,this;let l=1-a*a;if(l<=Number.EPSILON){let d=1-e;return this._w=d*o+e*this._w,this._x=d*n+e*this._x,this._y=d*r+e*this._y,this._z=d*s+e*this._z,this.normalize(),this}let c=Math.sqrt(l),h=Math.atan2(c,a),u=Math.sin((1-e)*h)/c,f=Math.sin(e*h)/c;return this._w=o*u+this._w*f,this._x=n*u+this._x*f,this._y=r*u+this._y*f,this._z=s*u+this._z*f,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(r*Math.sin(t),r*Math.cos(t),s*Math.sin(e),s*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},F=class i{constructor(t=0,e=0,n=0){i.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(jc.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(jc.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,r=this.z,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6]*r,this.y=s[1]*e+s[4]*n+s[7]*r,this.z=s[2]*e+s[5]*n+s[8]*r,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,r=this.z,s=t.elements,o=1/(s[3]*e+s[7]*n+s[11]*r+s[15]);return this.x=(s[0]*e+s[4]*n+s[8]*r+s[12])*o,this.y=(s[1]*e+s[5]*n+s[9]*r+s[13])*o,this.z=(s[2]*e+s[6]*n+s[10]*r+s[14])*o,this}applyQuaternion(t){let e=this.x,n=this.y,r=this.z,s=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*r-a*n),h=2*(a*e-s*r),u=2*(s*n-o*e);return this.x=e+l*c+o*u-a*h,this.y=n+l*h+a*c-s*u,this.z=r+l*u+s*h-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,r=this.z,s=t.elements;return this.x=s[0]*e+s[4]*n+s[8]*r,this.y=s[1]*e+s[5]*n+s[9]*r,this.z=s[2]*e+s[6]*n+s[10]*r,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=se(this.x,t.x,e.x),this.y=se(this.y,t.y,e.y),this.z=se(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=se(this.x,t,e),this.y=se(this.y,t,e),this.z=se(this.z,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(se(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,r=t.y,s=t.z,o=e.x,a=e.y,l=e.z;return this.x=r*l-s*a,this.y=s*o-n*l,this.z=n*a-r*o,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return vl.copy(this).projectOnVector(t),this.sub(vl)}reflect(t){return this.sub(vl.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(se(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,r=this.z-t.z;return e*e+n*n+r*r}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let r=Math.sin(e)*t;return this.x=r*Math.sin(n),this.y=Math.cos(e)*t,this.z=r*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),r=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=r,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},vl=new F,jc=new Ln,$t=class i{constructor(t,e,n,r,s,o,a,l,c){i.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,r,s,o,a,l,c)}set(t,e,n,r,s,o,a,l,c){let h=this.elements;return h[0]=t,h[1]=r,h[2]=a,h[3]=e,h[4]=s,h[5]=l,h[6]=n,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,r=e.elements,s=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],h=n[4],u=n[7],f=n[2],d=n[5],x=n[8],y=r[0],g=r[3],p=r[6],A=r[1],w=r[4],m=r[7],v=r[2],M=r[5],b=r[8];return s[0]=o*y+a*A+l*v,s[3]=o*g+a*w+l*M,s[6]=o*p+a*m+l*b,s[1]=c*y+h*A+u*v,s[4]=c*g+h*w+u*M,s[7]=c*p+h*m+u*b,s[2]=f*y+d*A+x*v,s[5]=f*g+d*w+x*M,s[8]=f*p+d*m+x*b,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],r=t[2],s=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8];return e*o*h-e*a*c-n*s*h+n*a*l+r*s*c-r*o*l}invert(){let t=this.elements,e=t[0],n=t[1],r=t[2],s=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],u=h*o-a*c,f=a*l-h*s,d=c*s-o*l,x=e*u+n*f+r*d;if(x===0)return this.set(0,0,0,0,0,0,0,0,0);let y=1/x;return t[0]=u*y,t[1]=(r*c-h*n)*y,t[2]=(a*n-r*o)*y,t[3]=f*y,t[4]=(h*e-r*l)*y,t[5]=(r*s-a*e)*y,t[6]=d*y,t[7]=(n*l-c*e)*y,t[8]=(o*e-n*s)*y,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,r,s,o,a){let l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*o+c*a)+o+t,-r*c,r*l,-r*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(yl.makeScale(t,e)),this}rotate(t){return this.premultiply(yl.makeRotation(-t)),this}translate(t,e){return this.premultiply(yl.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let r=0;r<9;r++)if(e[r]!==n[r])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}},yl=new $t;function mc(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function ds(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function nu(){let i=ds("canvas");return i.style.display="block",i}var qc={};function Rr(i){i in qc||(qc[i]=!0,console.warn(i))}function iu(i,t,e){return new Promise(function(n,r){function s(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:r();break;case i.TIMEOUT_EXPIRED:setTimeout(s,e);break;default:n()}}setTimeout(s,e)})}var Jc=new $t().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Yc=new $t().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function df(){let i={enabled:!0,workingColorSpace:Xi,spaces:{},convert:function(r,s,o){return this.enabled===!1||s===o||!s||!o||(this.spaces[s].transfer===Me&&(r.r=ui(r.r),r.g=ui(r.g),r.b=ui(r.b)),this.spaces[s].primaries!==this.spaces[o].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===Me&&(r.r=wr(r.r),r.g=wr(r.g),r.b=wr(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===Kn?us:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,o){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return Rr("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return Rr("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(r,s)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Xi]:{primaries:t,whitePoint:n,transfer:us,toXYZ:Jc,fromXYZ:Yc,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:$e},outputColorSpaceConfig:{drawingBufferColorSpace:$e}},[$e]:{primaries:t,whitePoint:n,transfer:Me,toXYZ:Jc,fromXYZ:Yc,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:$e}}}),i}var fe=df();function ui(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function wr(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var cr,Co=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{cr===void 0&&(cr=ds("canvas")),cr.width=t.width,cr.height=t.height;let r=cr.getContext("2d");t instanceof ImageData?r.putImageData(t,0,0):r.drawImage(t,0,0,t.width,t.height),n=cr}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=ds("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let r=n.getImageData(0,0,t.width,t.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=ui(s[o]/255)*255;return n.putImageData(r,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(ui(e[n]/255)*255):e[n]=ui(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},pf=0,Cr=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:pf++}),this.uuid=hi(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):e instanceof VideoFrame?t.set(e.displayHeight,e.displayWidth,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(Ml(r[o].image)):s.push(Ml(r[o]))}else s=Ml(r);n.url=s}return e||(t.images[this.uuid]=n),n}};function Ml(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Co.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var mf=0,Sl=new F,sn=class i extends di{constructor(t=i.DEFAULT_IMAGE,e=i.DEFAULT_MAPPING,n=wi,r=wi,s=Gn,o=Pi,a=On,l=ti,c=i.DEFAULT_ANISOTROPY,h=Kn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:mf++}),this.uuid=hi(),this.name="",this.source=new Cr(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new nt(0,0),this.repeat=new nt(1,1),this.center=new nt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new $t,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Sl).x}get height(){return this.source.getSize(Sl).y}get depth(){return this.source.getSize(Sl).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let n=t[e];if(n===void 0){console.warn(`THREE.Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let r=this[e];if(r===void 0){console.warn(`THREE.Texture.setValues(): property '${e}' does not exist.`);continue}r&&n&&r.isVector2&&n.isVector2||r&&n&&r.isVector3&&n.isVector3||r&&n&&r.isMatrix3&&n.isMatrix3?r.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==rc)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case fi:t.x=t.x-Math.floor(t.x);break;case wi:t.x=t.x<0?0:1;break;case wo:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case fi:t.y=t.y-Math.floor(t.y);break;case wi:t.y=t.y<0?0:1;break;case wo:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};sn.DEFAULT_IMAGE=null;sn.DEFAULT_MAPPING=rc;sn.DEFAULT_ANISOTROPY=1;var De=class i{constructor(t=0,e=0,n=0,r=1){i.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=r}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,r){return this.x=t,this.y=e,this.z=n,this.w=r,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,r=this.z,s=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*r+o[12]*s,this.y=o[1]*e+o[5]*n+o[9]*r+o[13]*s,this.z=o[2]*e+o[6]*n+o[10]*r+o[14]*s,this.w=o[3]*e+o[7]*n+o[11]*r+o[15]*s,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,r,s,l=t.elements,c=l[0],h=l[4],u=l[8],f=l[1],d=l[5],x=l[9],y=l[2],g=l[6],p=l[10];if(Math.abs(h-f)<.01&&Math.abs(u-y)<.01&&Math.abs(x-g)<.01){if(Math.abs(h+f)<.1&&Math.abs(u+y)<.1&&Math.abs(x+g)<.1&&Math.abs(c+d+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let w=(c+1)/2,m=(d+1)/2,v=(p+1)/2,M=(h+f)/4,b=(u+y)/4,R=(x+g)/4;return w>m&&w>v?w<.01?(n=0,r=.707106781,s=.707106781):(n=Math.sqrt(w),r=M/n,s=b/n):m>v?m<.01?(n=.707106781,r=0,s=.707106781):(r=Math.sqrt(m),n=M/r,s=R/r):v<.01?(n=.707106781,r=.707106781,s=0):(s=Math.sqrt(v),n=b/s,r=R/s),this.set(n,r,s,e),this}let A=Math.sqrt((g-x)*(g-x)+(u-y)*(u-y)+(f-h)*(f-h));return Math.abs(A)<.001&&(A=1),this.x=(g-x)/A,this.y=(u-y)/A,this.z=(f-h)/A,this.w=Math.acos((c+d+p-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=se(this.x,t.x,e.x),this.y=se(this.y,t.y,e.y),this.z=se(this.z,t.z,e.z),this.w=se(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=se(this.x,t,e),this.y=se(this.y,t,e),this.z=se(this.z,t,e),this.w=se(this.w,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(se(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Io=class extends di{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Gn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new De(0,0,t,e),this.scissorTest=!1,this.viewport=new De(0,0,t,e);let r={width:t,height:e,depth:n.depth},s=new sn(r);this.textures=[];let o=n.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(t={}){let e={minFilter:Gn,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=t,this.textures[r].image.height=e,this.textures[r].image.depth=n,this.textures[r].isArrayTexture=this.textures[r].image.depth>1;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let r=Object.assign({},t.textures[e].image);this.textures[e].source=new Cr(r)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},en=class extends Io{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},ps=class extends sn{constructor(t=null,e=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:r},this.magFilter=vn,this.minFilter=vn,this.wrapR=wi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var Po=class extends sn{constructor(t=null,e=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:r},this.magFilter=vn,this.minFilter=vn,this.wrapR=wi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Ti=class{constructor(t=new F(1/0,1/0,1/0),e=new F(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Bn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Bn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=Bn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let s=n.getAttribute("position");if(e===!0&&s!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,Bn):Bn.fromBufferAttribute(s,o),Bn.applyMatrix4(t.matrixWorld),this.expandByPoint(Bn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Js.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Js.copy(n.boundingBox)),Js.applyMatrix4(t.matrixWorld),this.union(Js)}let r=t.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Bn),Bn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(ts),Ys.subVectors(this.max,ts),hr.subVectors(t.a,ts),ur.subVectors(t.b,ts),fr.subVectors(t.c,ts),yi.subVectors(ur,hr),Mi.subVectors(fr,ur),Bi.subVectors(hr,fr);let e=[0,-yi.z,yi.y,0,-Mi.z,Mi.y,0,-Bi.z,Bi.y,yi.z,0,-yi.x,Mi.z,0,-Mi.x,Bi.z,0,-Bi.x,-yi.y,yi.x,0,-Mi.y,Mi.x,0,-Bi.y,Bi.x,0];return!_l(e,hr,ur,fr,Ys)||(e=[1,0,0,0,1,0,0,0,1],!_l(e,hr,ur,fr,Ys))?!1:(Zs.crossVectors(yi,Mi),e=[Zs.x,Zs.y,Zs.z],_l(e,hr,ur,fr,Ys))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Bn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Bn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(ri[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),ri[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),ri[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),ri[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),ri[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),ri[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),ri[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),ri[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(ri),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},ri=[new F,new F,new F,new F,new F,new F,new F,new F],Bn=new F,Js=new Ti,hr=new F,ur=new F,fr=new F,yi=new F,Mi=new F,Bi=new F,ts=new F,Ys=new F,Zs=new F,zi=new F;function _l(i,t,e,n,r){for(let s=0,o=i.length-3;s<=o;s+=3){zi.fromArray(i,s);let a=r.x*Math.abs(zi.x)+r.y*Math.abs(zi.y)+r.z*Math.abs(zi.z),l=t.dot(zi),c=e.dot(zi),h=n.dot(zi);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}var gf=new Ti,es=new F,bl=new F,Ki=class{constructor(t=new F,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):gf.setFromPoints(t).getCenter(n);let r=0;for(let s=0,o=t.length;s<o;s++)r=Math.max(r,n.distanceToSquared(t[s]));return this.radius=Math.sqrt(r),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;es.subVectors(t,this.center);let e=es.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),r=(n-this.radius)*.5;this.center.addScaledVector(es,r/n),this.radius+=r}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(bl.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(es.copy(t.center).add(bl)),this.expandByPoint(es.copy(t.center).sub(bl))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},si=new F,El=new F,Qs=new F,Si=new F,wl=new F,$s=new F,Al=new F,Ir=class{constructor(t=new F,e=new F(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,si)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=si.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(si.copy(this.origin).addScaledVector(this.direction,e),si.distanceToSquared(t))}distanceSqToSegment(t,e,n,r){El.copy(t).add(e).multiplyScalar(.5),Qs.copy(e).sub(t).normalize(),Si.copy(this.origin).sub(El);let s=t.distanceTo(e)*.5,o=-this.direction.dot(Qs),a=Si.dot(this.direction),l=-Si.dot(Qs),c=Si.lengthSq(),h=Math.abs(1-o*o),u,f,d,x;if(h>0)if(u=o*l-a,f=o*a-l,x=s*h,u>=0)if(f>=-x)if(f<=x){let y=1/h;u*=y,f*=y,d=u*(u+o*f+2*a)+f*(o*u+f+2*l)+c}else f=s,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*l)+c;else f=-s,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*l)+c;else f<=-x?(u=Math.max(0,-(-o*s+a)),f=u>0?-s:Math.min(Math.max(-s,-l),s),d=-u*u+f*(f+2*l)+c):f<=x?(u=0,f=Math.min(Math.max(-s,-l),s),d=f*(f+2*l)+c):(u=Math.max(0,-(o*s+a)),f=u>0?s:Math.min(Math.max(-s,-l),s),d=-u*u+f*(f+2*l)+c);else f=o>0?-s:s,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),r&&r.copy(El).addScaledVector(Qs,f),d}intersectSphere(t,e){si.subVectors(t.center,this.origin);let n=si.dot(this.direction),r=si.dot(si)-n*n,s=t.radius*t.radius;if(r>s)return null;let o=Math.sqrt(s-r),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,r,s,o,a,l,c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,f=this.origin;return c>=0?(n=(t.min.x-f.x)*c,r=(t.max.x-f.x)*c):(n=(t.max.x-f.x)*c,r=(t.min.x-f.x)*c),h>=0?(s=(t.min.y-f.y)*h,o=(t.max.y-f.y)*h):(s=(t.max.y-f.y)*h,o=(t.min.y-f.y)*h),n>o||s>r||((s>n||isNaN(n))&&(n=s),(o<r||isNaN(r))&&(r=o),u>=0?(a=(t.min.z-f.z)*u,l=(t.max.z-f.z)*u):(a=(t.max.z-f.z)*u,l=(t.min.z-f.z)*u),n>l||a>r)||((a>n||n!==n)&&(n=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(n>=0?n:r,e)}intersectsBox(t){return this.intersectBox(t,si)!==null}intersectTriangle(t,e,n,r,s){wl.subVectors(e,t),$s.subVectors(n,t),Al.crossVectors(wl,$s);let o=this.direction.dot(Al),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Si.subVectors(this.origin,t);let l=a*this.direction.dot($s.crossVectors(Si,$s));if(l<0)return null;let c=a*this.direction.dot(wl.cross(Si));if(c<0||l+c>o)return null;let h=-a*Si.dot(Al);return h<0?null:this.at(h/o,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},_e=class i{constructor(t,e,n,r,s,o,a,l,c,h,u,f,d,x,y,g){i.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,r,s,o,a,l,c,h,u,f,d,x,y,g)}set(t,e,n,r,s,o,a,l,c,h,u,f,d,x,y,g){let p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=r,p[1]=s,p[5]=o,p[9]=a,p[13]=l,p[2]=c,p[6]=h,p[10]=u,p[14]=f,p[3]=d,p[7]=x,p[11]=y,p[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){let e=this.elements,n=t.elements,r=1/dr.setFromMatrixColumn(t,0).length(),s=1/dr.setFromMatrixColumn(t,1).length(),o=1/dr.setFromMatrixColumn(t,2).length();return e[0]=n[0]*r,e[1]=n[1]*r,e[2]=n[2]*r,e[3]=0,e[4]=n[4]*s,e[5]=n[5]*s,e[6]=n[6]*s,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,r=t.y,s=t.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(r),c=Math.sin(r),h=Math.cos(s),u=Math.sin(s);if(t.order==="XYZ"){let f=o*h,d=o*u,x=a*h,y=a*u;e[0]=l*h,e[4]=-l*u,e[8]=c,e[1]=d+x*c,e[5]=f-y*c,e[9]=-a*l,e[2]=y-f*c,e[6]=x+d*c,e[10]=o*l}else if(t.order==="YXZ"){let f=l*h,d=l*u,x=c*h,y=c*u;e[0]=f+y*a,e[4]=x*a-d,e[8]=o*c,e[1]=o*u,e[5]=o*h,e[9]=-a,e[2]=d*a-x,e[6]=y+f*a,e[10]=o*l}else if(t.order==="ZXY"){let f=l*h,d=l*u,x=c*h,y=c*u;e[0]=f-y*a,e[4]=-o*u,e[8]=x+d*a,e[1]=d+x*a,e[5]=o*h,e[9]=y-f*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){let f=o*h,d=o*u,x=a*h,y=a*u;e[0]=l*h,e[4]=x*c-d,e[8]=f*c+y,e[1]=l*u,e[5]=y*c+f,e[9]=d*c-x,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){let f=o*l,d=o*c,x=a*l,y=a*c;e[0]=l*h,e[4]=y-f*u,e[8]=x*u+d,e[1]=u,e[5]=o*h,e[9]=-a*h,e[2]=-c*h,e[6]=d*u+x,e[10]=f-y*u}else if(t.order==="XZY"){let f=o*l,d=o*c,x=a*l,y=a*c;e[0]=l*h,e[4]=-u,e[8]=c*h,e[1]=f*u+y,e[5]=o*h,e[9]=d*u-x,e[2]=x*u-d,e[6]=a*h,e[10]=y*u+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(xf,t,vf)}lookAt(t,e,n){let r=this.elements;return En.subVectors(t,e),En.lengthSq()===0&&(En.z=1),En.normalize(),_i.crossVectors(n,En),_i.lengthSq()===0&&(Math.abs(n.z)===1?En.x+=1e-4:En.z+=1e-4,En.normalize(),_i.crossVectors(n,En)),_i.normalize(),to.crossVectors(En,_i),r[0]=_i.x,r[4]=to.x,r[8]=En.x,r[1]=_i.y,r[5]=to.y,r[9]=En.y,r[2]=_i.z,r[6]=to.z,r[10]=En.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,r=e.elements,s=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],h=n[1],u=n[5],f=n[9],d=n[13],x=n[2],y=n[6],g=n[10],p=n[14],A=n[3],w=n[7],m=n[11],v=n[15],M=r[0],b=r[4],R=r[8],S=r[12],E=r[1],P=r[5],D=r[9],H=r[13],O=r[2],X=r[6],z=r[10],tt=r[14],k=r[3],lt=r[7],dt=r[11],Rt=r[15];return s[0]=o*M+a*E+l*O+c*k,s[4]=o*b+a*P+l*X+c*lt,s[8]=o*R+a*D+l*z+c*dt,s[12]=o*S+a*H+l*tt+c*Rt,s[1]=h*M+u*E+f*O+d*k,s[5]=h*b+u*P+f*X+d*lt,s[9]=h*R+u*D+f*z+d*dt,s[13]=h*S+u*H+f*tt+d*Rt,s[2]=x*M+y*E+g*O+p*k,s[6]=x*b+y*P+g*X+p*lt,s[10]=x*R+y*D+g*z+p*dt,s[14]=x*S+y*H+g*tt+p*Rt,s[3]=A*M+w*E+m*O+v*k,s[7]=A*b+w*P+m*X+v*lt,s[11]=A*R+w*D+m*z+v*dt,s[15]=A*S+w*H+m*tt+v*Rt,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],r=t[8],s=t[12],o=t[1],a=t[5],l=t[9],c=t[13],h=t[2],u=t[6],f=t[10],d=t[14],x=t[3],y=t[7],g=t[11],p=t[15];return x*(+s*l*u-r*c*u-s*a*f+n*c*f+r*a*d-n*l*d)+y*(+e*l*d-e*c*f+s*o*f-r*o*d+r*c*h-s*l*h)+g*(+e*c*u-e*a*d-s*o*u+n*o*d+s*a*h-n*c*h)+p*(-r*a*h-e*l*u+e*a*f+r*o*u-n*o*f+n*l*h)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let r=this.elements;return t.isVector3?(r[12]=t.x,r[13]=t.y,r[14]=t.z):(r[12]=t,r[13]=e,r[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],r=t[2],s=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],u=t[9],f=t[10],d=t[11],x=t[12],y=t[13],g=t[14],p=t[15],A=u*g*c-y*f*c+y*l*d-a*g*d-u*l*p+a*f*p,w=x*f*c-h*g*c-x*l*d+o*g*d+h*l*p-o*f*p,m=h*y*c-x*u*c+x*a*d-o*y*d-h*a*p+o*u*p,v=x*u*l-h*y*l-x*a*f+o*y*f+h*a*g-o*u*g,M=e*A+n*w+r*m+s*v;if(M===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let b=1/M;return t[0]=A*b,t[1]=(y*f*s-u*g*s-y*r*d+n*g*d+u*r*p-n*f*p)*b,t[2]=(a*g*s-y*l*s+y*r*c-n*g*c-a*r*p+n*l*p)*b,t[3]=(u*l*s-a*f*s-u*r*c+n*f*c+a*r*d-n*l*d)*b,t[4]=w*b,t[5]=(h*g*s-x*f*s+x*r*d-e*g*d-h*r*p+e*f*p)*b,t[6]=(x*l*s-o*g*s-x*r*c+e*g*c+o*r*p-e*l*p)*b,t[7]=(o*f*s-h*l*s+h*r*c-e*f*c-o*r*d+e*l*d)*b,t[8]=m*b,t[9]=(x*u*s-h*y*s-x*n*d+e*y*d+h*n*p-e*u*p)*b,t[10]=(o*y*s-x*a*s+x*n*c-e*y*c-o*n*p+e*a*p)*b,t[11]=(h*a*s-o*u*s-h*n*c+e*u*c+o*n*d-e*a*d)*b,t[12]=v*b,t[13]=(h*y*r-x*u*r+x*n*f-e*y*f-h*n*g+e*u*g)*b,t[14]=(x*a*r-o*y*r-x*n*l+e*y*l+o*n*g-e*a*g)*b,t[15]=(o*u*r-h*a*r+h*n*l-e*u*l-o*n*f+e*a*f)*b,this}scale(t){let e=this.elements,n=t.x,r=t.y,s=t.z;return e[0]*=n,e[4]*=r,e[8]*=s,e[1]*=n,e[5]*=r,e[9]*=s,e[2]*=n,e[6]*=r,e[10]*=s,e[3]*=n,e[7]*=r,e[11]*=s,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],r=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,r))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),r=Math.sin(e),s=1-n,o=t.x,a=t.y,l=t.z,c=s*o,h=s*a;return this.set(c*o+n,c*a-r*l,c*l+r*a,0,c*a+r*l,h*a+n,h*l-r*o,0,c*l-r*a,h*l+r*o,s*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,r,s,o){return this.set(1,n,s,0,t,1,o,0,e,r,1,0,0,0,0,1),this}compose(t,e,n){let r=this.elements,s=e._x,o=e._y,a=e._z,l=e._w,c=s+s,h=o+o,u=a+a,f=s*c,d=s*h,x=s*u,y=o*h,g=o*u,p=a*u,A=l*c,w=l*h,m=l*u,v=n.x,M=n.y,b=n.z;return r[0]=(1-(y+p))*v,r[1]=(d+m)*v,r[2]=(x-w)*v,r[3]=0,r[4]=(d-m)*M,r[5]=(1-(f+p))*M,r[6]=(g+A)*M,r[7]=0,r[8]=(x+w)*b,r[9]=(g-A)*b,r[10]=(1-(f+y))*b,r[11]=0,r[12]=t.x,r[13]=t.y,r[14]=t.z,r[15]=1,this}decompose(t,e,n){let r=this.elements,s=dr.set(r[0],r[1],r[2]).length(),o=dr.set(r[4],r[5],r[6]).length(),a=dr.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),t.x=r[12],t.y=r[13],t.z=r[14],zn.copy(this);let c=1/s,h=1/o,u=1/a;return zn.elements[0]*=c,zn.elements[1]*=c,zn.elements[2]*=c,zn.elements[4]*=h,zn.elements[5]*=h,zn.elements[6]*=h,zn.elements[8]*=u,zn.elements[9]*=u,zn.elements[10]*=u,e.setFromRotationMatrix(zn),n.x=s,n.y=o,n.z=a,this}makePerspective(t,e,n,r,s,o,a=kn,l=!1){let c=this.elements,h=2*s/(e-t),u=2*s/(n-r),f=(e+t)/(e-t),d=(n+r)/(n-r),x,y;if(l)x=s/(o-s),y=o*s/(o-s);else if(a===kn)x=-(o+s)/(o-s),y=-2*o*s/(o-s);else if(a===fs)x=-o/(o-s),y=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=f,c[12]=0,c[1]=0,c[5]=u,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=x,c[14]=y,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,r,s,o,a=kn,l=!1){let c=this.elements,h=2/(e-t),u=2/(n-r),f=-(e+t)/(e-t),d=-(n+r)/(n-r),x,y;if(l)x=1/(o-s),y=o/(o-s);else if(a===kn)x=-2/(o-s),y=-(o+s)/(o-s);else if(a===fs)x=-1/(o-s),y=-s/(o-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=0,c[12]=f,c[1]=0,c[5]=u,c[9]=0,c[13]=d,c[2]=0,c[6]=0,c[10]=x,c[14]=y,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let r=0;r<16;r++)if(e[r]!==n[r])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}},dr=new F,zn=new _e,xf=new F(0,0,0),vf=new F(1,1,1),_i=new F,to=new F,En=new F,Zc=new _e,Qc=new Ln,Yn=class i{constructor(t=0,e=0,n=0,r=i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=r}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,r=this._order){return this._x=t,this._y=e,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let r=t.elements,s=r[0],o=r[4],a=r[8],l=r[1],c=r[5],h=r[9],u=r[2],f=r[6],d=r[10];switch(e){case"XYZ":this._y=Math.asin(se(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,d),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-se(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,s),this._z=0);break;case"ZXY":this._x=Math.asin(se(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-u,d),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-se(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(se(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,s)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-se(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-h,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Zc.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Zc,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Qc.setFromEuler(this),this.setFromQuaternion(Qc,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Yn.DEFAULT_ORDER="XYZ";var Pr=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},yf=0,$c=new F,pr=new Ln,oi=new _e,eo=new F,ns=new F,Mf=new F,Sf=new Ln,th=new F(1,0,0),eh=new F(0,1,0),nh=new F(0,0,1),ih={type:"added"},_f={type:"removed"},mr={type:"childadded",child:null},Tl={type:"childremoved",child:null},yn=class i extends di{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:yf++}),this.uuid=hi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let t=new F,e=new Yn,n=new Ln,r=new F(1,1,1);function s(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(s),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new _e},normalMatrix:{value:new $t}}),this.matrix=new _e,this.matrixWorld=new _e,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Pr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return pr.setFromAxisAngle(t,e),this.quaternion.multiply(pr),this}rotateOnWorldAxis(t,e){return pr.setFromAxisAngle(t,e),this.quaternion.premultiply(pr),this}rotateX(t){return this.rotateOnAxis(th,t)}rotateY(t){return this.rotateOnAxis(eh,t)}rotateZ(t){return this.rotateOnAxis(nh,t)}translateOnAxis(t,e){return $c.copy(t).applyQuaternion(this.quaternion),this.position.add($c.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(th,t)}translateY(t){return this.translateOnAxis(eh,t)}translateZ(t){return this.translateOnAxis(nh,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(oi.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?eo.copy(t):eo.set(t,e,n);let r=this.parent;this.updateWorldMatrix(!0,!1),ns.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?oi.lookAt(ns,eo,this.up):oi.lookAt(eo,ns,this.up),this.quaternion.setFromRotationMatrix(oi),r&&(oi.extractRotation(r.matrixWorld),pr.setFromRotationMatrix(oi),this.quaternion.premultiply(pr.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(ih),mr.child=t,this.dispatchEvent(mr),mr.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(_f),Tl.child=t,this.dispatchEvent(Tl),Tl.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),oi.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),oi.multiply(t.parent.matrixWorld)),t.applyMatrix4(oi),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(ih),mr.child=t,this.dispatchEvent(mr),mr.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,r=this.children.length;n<r;n++){let o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ns,t,Mf),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ns,Sf,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);let e=this.children;for(let n=0,r=e.length;n<r;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,r=e.length;n<r;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,r=e.length;n<r;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){let n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){let r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(a=>({...a})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(t),r.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(t.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let u=l[c];s(t.shapes,u)}else s(t.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(t.materials,this.material[l]));r.material=a}else r.material=s(t.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];r.animations.push(s(t.animations,l))}}if(e){let a=o(t.geometries),l=o(t.materials),c=o(t.textures),h=o(t.images),u=o(t.shapes),f=o(t.skeletons),d=o(t.animations),x=o(t.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),f.length>0&&(n.skeletons=f),d.length>0&&(n.animations=d),x.length>0&&(n.nodes=x)}return n.object=r,n;function o(a){let l=[];for(let c in a){let h=a[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let r=t.children[n];this.add(r.clone())}return this}};yn.DEFAULT_UP=new F(0,1,0);yn.DEFAULT_MATRIX_AUTO_UPDATE=!0;yn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Hn=new F,ai=new F,Rl=new F,li=new F,gr=new F,xr=new F,rh=new F,Cl=new F,Il=new F,Pl=new F,Fl=new De,Ul=new De,Dl=new De,ci=class i{constructor(t=new F,e=new F,n=new F){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,r){r.subVectors(n,e),Hn.subVectors(t,e),r.cross(Hn);let s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(t,e,n,r,s){Hn.subVectors(r,e),ai.subVectors(n,e),Rl.subVectors(t,e);let o=Hn.dot(Hn),a=Hn.dot(ai),l=Hn.dot(Rl),c=ai.dot(ai),h=ai.dot(Rl),u=o*c-a*a;if(u===0)return s.set(0,0,0),null;let f=1/u,d=(c*l-a*h)*f,x=(o*h-a*l)*f;return s.set(1-d-x,x,d)}static containsPoint(t,e,n,r){return this.getBarycoord(t,e,n,r,li)===null?!1:li.x>=0&&li.y>=0&&li.x+li.y<=1}static getInterpolation(t,e,n,r,s,o,a,l){return this.getBarycoord(t,e,n,r,li)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,li.x),l.addScaledVector(o,li.y),l.addScaledVector(a,li.z),l)}static getInterpolatedAttribute(t,e,n,r,s,o){return Fl.setScalar(0),Ul.setScalar(0),Dl.setScalar(0),Fl.fromBufferAttribute(t,e),Ul.fromBufferAttribute(t,n),Dl.fromBufferAttribute(t,r),o.setScalar(0),o.addScaledVector(Fl,s.x),o.addScaledVector(Ul,s.y),o.addScaledVector(Dl,s.z),o}static isFrontFacing(t,e,n,r){return Hn.subVectors(n,e),ai.subVectors(t,e),Hn.cross(ai).dot(r)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,r){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[r]),this}setFromAttributeAndIndices(t,e,n,r){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,r),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Hn.subVectors(this.c,this.b),ai.subVectors(this.a,this.b),Hn.cross(ai).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return i.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,r,s){return i.getInterpolation(t,this.a,this.b,this.c,e,n,r,s)}containsPoint(t){return i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,r=this.b,s=this.c,o,a;gr.subVectors(r,n),xr.subVectors(s,n),Cl.subVectors(t,n);let l=gr.dot(Cl),c=xr.dot(Cl);if(l<=0&&c<=0)return e.copy(n);Il.subVectors(t,r);let h=gr.dot(Il),u=xr.dot(Il);if(h>=0&&u<=h)return e.copy(r);let f=l*u-h*c;if(f<=0&&l>=0&&h<=0)return o=l/(l-h),e.copy(n).addScaledVector(gr,o);Pl.subVectors(t,s);let d=gr.dot(Pl),x=xr.dot(Pl);if(x>=0&&d<=x)return e.copy(s);let y=d*c-l*x;if(y<=0&&c>=0&&x<=0)return a=c/(c-x),e.copy(n).addScaledVector(xr,a);let g=h*x-d*u;if(g<=0&&u-h>=0&&d-x>=0)return rh.subVectors(s,r),a=(u-h)/(u-h+(d-x)),e.copy(r).addScaledVector(rh,a);let p=1/(g+y+f);return o=y*p,a=f*p,e.copy(n).addScaledVector(gr,o).addScaledVector(xr,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},ru={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},bi={h:0,s:0,l:0},no={h:0,s:0,l:0};function Ll(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}var vt=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let r=t;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=$e){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,fe.colorSpaceToWorking(this,e),this}setRGB(t,e,n,r=fe.workingColorSpace){return this.r=t,this.g=e,this.b=n,fe.colorSpaceToWorking(this,r),this}setHSL(t,e,n,r=fe.workingColorSpace){if(t=ff(t,1),e=se(e,0,1),n=se(n,0,1),e===0)this.r=this.g=this.b=n;else{let s=n<=.5?n*(1+e):n+e-n*e,o=2*n-s;this.r=Ll(o,s,t+1/3),this.g=Ll(o,s,t),this.b=Ll(o,s,t-1/3)}return fe.colorSpaceToWorking(this,r),this}setStyle(t,e=$e){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(t)){let s,o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,e);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,e);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(t)){let s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(s,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=$e){let n=ru[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=ui(t.r),this.g=ui(t.g),this.b=ui(t.b),this}copyLinearToSRGB(t){return this.r=wr(t.r),this.g=wr(t.g),this.b=wr(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=$e){return fe.workingToColorSpace(hn.copy(this),t),Math.round(se(hn.r*255,0,255))*65536+Math.round(se(hn.g*255,0,255))*256+Math.round(se(hn.b*255,0,255))}getHexString(t=$e){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=fe.workingColorSpace){fe.workingToColorSpace(hn.copy(this),e);let n=hn.r,r=hn.g,s=hn.b,o=Math.max(n,r,s),a=Math.min(n,r,s),l,c,h=(a+o)/2;if(a===o)l=0,c=0;else{let u=o-a;switch(c=h<=.5?u/(o+a):u/(2-o-a),o){case n:l=(r-s)/u+(r<s?6:0);break;case r:l=(s-n)/u+2;break;case s:l=(n-r)/u+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=fe.workingColorSpace){return fe.workingToColorSpace(hn.copy(this),e),t.r=hn.r,t.g=hn.g,t.b=hn.b,t}getStyle(t=$e){fe.workingToColorSpace(hn.copy(this),t);let e=hn.r,n=hn.g,r=hn.b;return t!==$e?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(t,e,n){return this.getHSL(bi),this.setHSL(bi.h+t,bi.s+e,bi.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(bi),t.getHSL(no);let n=xl(bi.h,no.h,e),r=xl(bi.s,no.s,e),s=xl(bi.l,no.l,e);return this.setHSL(n,r,s),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,r=this.b,s=t.elements;return this.r=s[0]*e+s[3]*n+s[6]*r,this.g=s[1]*e+s[4]*n+s[7]*r,this.b=s[2]*e+s[5]*n+s[8]*r,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},hn=new vt;vt.NAMES=ru;var bf=0,pi=class extends di{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:bf++}),this.uuid=hi(),this.name="",this.type="Material",this.blending=Vi,this.side=An,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=bo,this.blendDst=Eo,this.blendEquation=Ai,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new vt(0,0,0),this.blendAlpha=0,this.depthFunc=Wi,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Kl,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Gi,this.stencilZFail=Gi,this.stencilZPass=Gi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}let r=this[e];if(r===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Vi&&(n.blending=this.blending),this.side!==An&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==bo&&(n.blendSrc=this.blendSrc),this.blendDst!==Eo&&(n.blendDst=this.blendDst),this.blendEquation!==Ai&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Wi&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Kl&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Gi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Gi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Gi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(s){let o=[];for(let a in s){let l=s[a];delete l.metadata,o.push(l)}return o}if(e){let s=r(t.textures),o=r(t.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let r=e.length;n=new Array(r);for(let s=0;s!==r;++s)n[s]=e[s].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}},Re=class extends pi{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new vt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Yn,this.combine=ic,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};var Ve=new F,io=new nt,Ef=0,Le=class{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Ef++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=To,this.updateRanges=[],this.gpuType=ei,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[t+r]=e.array[n+r];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)io.fromBufferAttribute(this,e),io.applyMatrix3(t),this.setXY(e,io.x,io.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Ve.fromBufferAttribute(this,e),Ve.applyMatrix3(t),this.setXYZ(e,Ve.x,Ve.y,Ve.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Ve.fromBufferAttribute(this,e),Ve.applyMatrix4(t),this.setXYZ(e,Ve.x,Ve.y,Ve.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Ve.fromBufferAttribute(this,e),Ve.applyNormalMatrix(t),this.setXYZ(e,Ve.x,Ve.y,Ve.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Ve.fromBufferAttribute(this,e),Ve.transformDirection(t),this.setXYZ(e,Ve.x,Ve.y,Ve.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Jn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Ae(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Jn(e,this.array)),e}setX(t,e){return this.normalized&&(e=Ae(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Jn(e,this.array)),e}setY(t,e){return this.normalized&&(e=Ae(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Jn(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Ae(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Jn(e,this.array)),e}setW(t,e){return this.normalized&&(e=Ae(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Ae(e,this.array),n=Ae(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,r){return t*=this.itemSize,this.normalized&&(e=Ae(e,this.array),n=Ae(n,this.array),r=Ae(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=r,this}setXYZW(t,e,n,r,s){return t*=this.itemSize,this.normalized&&(e=Ae(e,this.array),n=Ae(n,this.array),r=Ae(r,this.array),s=Ae(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=r,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==To&&(t.usage=this.usage),t}};var ms=class extends Le{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var gs=class extends Le{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var Jt=class extends Le{constructor(t,e,n){super(new Float32Array(t),e,n)}},wf=0,Dn=new _e,Nl=new yn,vr=new F,wn=new Ti,is=new Ti,Qe=new F,Ce=class i extends di{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:wf++}),this.uuid=hi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(mc(t)?gs:ms)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let s=new $t().getNormalMatrix(t);n.applyNormalMatrix(s),n.needsUpdate=!0}let r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(t),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Dn.makeRotationFromQuaternion(t),this.applyMatrix4(Dn),this}rotateX(t){return Dn.makeRotationX(t),this.applyMatrix4(Dn),this}rotateY(t){return Dn.makeRotationY(t),this.applyMatrix4(Dn),this}rotateZ(t){return Dn.makeRotationZ(t),this.applyMatrix4(Dn),this}translate(t,e,n){return Dn.makeTranslation(t,e,n),this.applyMatrix4(Dn),this}scale(t,e,n){return Dn.makeScale(t,e,n),this.applyMatrix4(Dn),this}lookAt(t){return Nl.lookAt(t),Nl.updateMatrix(),this.applyMatrix4(Nl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(vr).negate(),this.translate(vr.x,vr.y,vr.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let r=0,s=t.length;r<s;r++){let o=t[r];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Jt(n,3))}else{let n=Math.min(t.length,e.count);for(let r=0;r<n;r++){let s=t[r];e.setXYZ(r,s.x,s.y,s.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ti);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new F(-1/0,-1/0,-1/0),new F(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,r=e.length;n<r;n++){let s=e[n];wn.setFromBufferAttribute(s),this.morphTargetsRelative?(Qe.addVectors(this.boundingBox.min,wn.min),this.boundingBox.expandByPoint(Qe),Qe.addVectors(this.boundingBox.max,wn.max),this.boundingBox.expandByPoint(Qe)):(this.boundingBox.expandByPoint(wn.min),this.boundingBox.expandByPoint(wn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ki);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new F,1/0);return}if(t){let n=this.boundingSphere.center;if(wn.setFromBufferAttribute(t),e)for(let s=0,o=e.length;s<o;s++){let a=e[s];is.setFromBufferAttribute(a),this.morphTargetsRelative?(Qe.addVectors(wn.min,is.min),wn.expandByPoint(Qe),Qe.addVectors(wn.max,is.max),wn.expandByPoint(Qe)):(wn.expandByPoint(is.min),wn.expandByPoint(is.max))}wn.getCenter(n);let r=0;for(let s=0,o=t.count;s<o;s++)Qe.fromBufferAttribute(t,s),r=Math.max(r,n.distanceToSquared(Qe));if(e)for(let s=0,o=e.length;s<o;s++){let a=e[s],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)Qe.fromBufferAttribute(a,c),l&&(vr.fromBufferAttribute(t,c),Qe.add(vr)),r=Math.max(r,n.distanceToSquared(Qe))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,r=e.normal,s=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Le(new Float32Array(4*n.count),4));let o=this.getAttribute("tangent"),a=[],l=[];for(let R=0;R<n.count;R++)a[R]=new F,l[R]=new F;let c=new F,h=new F,u=new F,f=new nt,d=new nt,x=new nt,y=new F,g=new F;function p(R,S,E){c.fromBufferAttribute(n,R),h.fromBufferAttribute(n,S),u.fromBufferAttribute(n,E),f.fromBufferAttribute(s,R),d.fromBufferAttribute(s,S),x.fromBufferAttribute(s,E),h.sub(c),u.sub(c),d.sub(f),x.sub(f);let P=1/(d.x*x.y-x.x*d.y);isFinite(P)&&(y.copy(h).multiplyScalar(x.y).addScaledVector(u,-d.y).multiplyScalar(P),g.copy(u).multiplyScalar(d.x).addScaledVector(h,-x.x).multiplyScalar(P),a[R].add(y),a[S].add(y),a[E].add(y),l[R].add(g),l[S].add(g),l[E].add(g))}let A=this.groups;A.length===0&&(A=[{start:0,count:t.count}]);for(let R=0,S=A.length;R<S;++R){let E=A[R],P=E.start,D=E.count;for(let H=P,O=P+D;H<O;H+=3)p(t.getX(H+0),t.getX(H+1),t.getX(H+2))}let w=new F,m=new F,v=new F,M=new F;function b(R){v.fromBufferAttribute(r,R),M.copy(v);let S=a[R];w.copy(S),w.sub(v.multiplyScalar(v.dot(S))).normalize(),m.crossVectors(M,S);let P=m.dot(l[R])<0?-1:1;o.setXYZW(R,w.x,w.y,w.z,P)}for(let R=0,S=A.length;R<S;++R){let E=A[R],P=E.start,D=E.count;for(let H=P,O=P+D;H<O;H+=3)b(t.getX(H+0)),b(t.getX(H+1)),b(t.getX(H+2))}}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Le(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let f=0,d=n.count;f<d;f++)n.setXYZ(f,0,0,0);let r=new F,s=new F,o=new F,a=new F,l=new F,c=new F,h=new F,u=new F;if(t)for(let f=0,d=t.count;f<d;f+=3){let x=t.getX(f+0),y=t.getX(f+1),g=t.getX(f+2);r.fromBufferAttribute(e,x),s.fromBufferAttribute(e,y),o.fromBufferAttribute(e,g),h.subVectors(o,s),u.subVectors(r,s),h.cross(u),a.fromBufferAttribute(n,x),l.fromBufferAttribute(n,y),c.fromBufferAttribute(n,g),a.add(h),l.add(h),c.add(h),n.setXYZ(x,a.x,a.y,a.z),n.setXYZ(y,l.x,l.y,l.z),n.setXYZ(g,c.x,c.y,c.z)}else for(let f=0,d=e.count;f<d;f+=3)r.fromBufferAttribute(e,f+0),s.fromBufferAttribute(e,f+1),o.fromBufferAttribute(e,f+2),h.subVectors(o,s),u.subVectors(r,s),h.cross(u),n.setXYZ(f+0,h.x,h.y,h.z),n.setXYZ(f+1,h.x,h.y,h.z),n.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Qe.fromBufferAttribute(t,e),Qe.normalize(),t.setXYZ(e,Qe.x,Qe.y,Qe.z)}toNonIndexed(){function t(a,l){let c=a.array,h=a.itemSize,u=a.normalized,f=new c.constructor(l.length*h),d=0,x=0;for(let y=0,g=l.length;y<g;y++){a.isInterleavedBufferAttribute?d=l[y]*a.data.stride+a.offset:d=l[y]*h;for(let p=0;p<h;p++)f[x++]=c[d++]}return new Le(f,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new i,n=this.index.array,r=this.attributes;for(let a in r){let l=r[a],c=t(l,n);e.setAttribute(a,c)}let s=this.morphAttributes;for(let a in s){let l=[],c=s[a];for(let h=0,u=c.length;h<u;h++){let f=c[h],d=t(f,n);l.push(d)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let l in n){let c=n[l];t.data.attributes[l]=c.toJSON(t.data)}let r={},s=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let u=0,f=c.length;u<f;u++){let d=c[u];h.push(d.toJSON(t.data))}h.length>0&&(r[l]=h,s=!0)}s&&(t.data.morphAttributes=r,t.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(t.data.boundingSphere=a.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone());let r=t.attributes;for(let c in r){let h=r[c];this.setAttribute(c,h.clone(e))}let s=t.morphAttributes;for(let c in s){let h=[],u=s[c];for(let f=0,d=u.length;f<d;f++)h.push(u[f].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;let o=t.groups;for(let c=0,h=o.length;c<h;c++){let u=o[c];this.addGroup(u.start,u.count,u.materialIndex)}let a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},sh=new _e,Hi=new Ir,ro=new Ki,oh=new F,so=new F,oo=new F,ao=new F,Ol=new F,lo=new F,ah=new F,co=new F,Wt=class extends yn{constructor(t=new Ce,e=new Re){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let r=e[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){let a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(t,e){let n=this.geometry,r=n.attributes.position,s=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(r,t);let a=this.morphTargetInfluences;if(s&&a){lo.set(0,0,0);for(let l=0,c=s.length;l<c;l++){let h=a[l],u=s[l];h!==0&&(Ol.fromBufferAttribute(u,t),o?lo.addScaledVector(Ol,h):lo.addScaledVector(Ol.sub(e),h))}e.add(lo)}return e}raycast(t,e){let n=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),ro.copy(n.boundingSphere),ro.applyMatrix4(s),Hi.copy(t.ray).recast(t.near),!(ro.containsPoint(Hi.origin)===!1&&(Hi.intersectSphere(ro,oh)===null||Hi.origin.distanceToSquared(oh)>(t.far-t.near)**2))&&(sh.copy(s).invert(),Hi.copy(t.ray).applyMatrix4(sh),!(n.boundingBox!==null&&Hi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Hi)))}_computeIntersections(t,e,n){let r,s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,h=s.attributes.uv1,u=s.attributes.normal,f=s.groups,d=s.drawRange;if(a!==null)if(Array.isArray(o))for(let x=0,y=f.length;x<y;x++){let g=f[x],p=o[g.materialIndex],A=Math.max(g.start,d.start),w=Math.min(a.count,Math.min(g.start+g.count,d.start+d.count));for(let m=A,v=w;m<v;m+=3){let M=a.getX(m),b=a.getX(m+1),R=a.getX(m+2);r=ho(this,p,t,n,c,h,u,M,b,R),r&&(r.faceIndex=Math.floor(m/3),r.face.materialIndex=g.materialIndex,e.push(r))}}else{let x=Math.max(0,d.start),y=Math.min(a.count,d.start+d.count);for(let g=x,p=y;g<p;g+=3){let A=a.getX(g),w=a.getX(g+1),m=a.getX(g+2);r=ho(this,o,t,n,c,h,u,A,w,m),r&&(r.faceIndex=Math.floor(g/3),e.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let x=0,y=f.length;x<y;x++){let g=f[x],p=o[g.materialIndex],A=Math.max(g.start,d.start),w=Math.min(l.count,Math.min(g.start+g.count,d.start+d.count));for(let m=A,v=w;m<v;m+=3){let M=m,b=m+1,R=m+2;r=ho(this,p,t,n,c,h,u,M,b,R),r&&(r.faceIndex=Math.floor(m/3),r.face.materialIndex=g.materialIndex,e.push(r))}}else{let x=Math.max(0,d.start),y=Math.min(l.count,d.start+d.count);for(let g=x,p=y;g<p;g+=3){let A=g,w=g+1,m=g+2;r=ho(this,o,t,n,c,h,u,A,w,m),r&&(r.faceIndex=Math.floor(g/3),e.push(r))}}}};function Af(i,t,e,n,r,s,o,a){let l;if(t.side===on?l=n.intersectTriangle(o,s,r,!0,a):l=n.intersectTriangle(r,s,o,t.side===An,a),l===null)return null;co.copy(a),co.applyMatrix4(i.matrixWorld);let c=e.ray.origin.distanceTo(co);return c<e.near||c>e.far?null:{distance:c,point:co.clone(),object:i}}function ho(i,t,e,n,r,s,o,a,l,c){i.getVertexPosition(a,so),i.getVertexPosition(l,oo),i.getVertexPosition(c,ao);let h=Af(i,t,e,n,so,oo,ao,ah);if(h){let u=new F;ci.getBarycoord(ah,so,oo,ao,u),r&&(h.uv=ci.getInterpolatedAttribute(r,a,l,c,u,new nt)),s&&(h.uv1=ci.getInterpolatedAttribute(s,a,l,c,u,new nt)),o&&(h.normal=ci.getInterpolatedAttribute(o,a,l,c,u,new F),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let f={a,b:l,c,normal:new F,materialIndex:0};ci.getNormal(so,oo,ao,f.normal),h.face=f,h.barycoord=u}return h}var We=class i extends Ce{constructor(t=1,e=1,n=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:r,heightSegments:s,depthSegments:o};let a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);let l=[],c=[],h=[],u=[],f=0,d=0;x("z","y","x",-1,-1,n,e,t,o,s,0),x("z","y","x",1,-1,n,e,-t,o,s,1),x("x","z","y",1,1,t,n,e,r,o,2),x("x","z","y",1,-1,t,n,-e,r,o,3),x("x","y","z",1,-1,t,e,n,r,s,4),x("x","y","z",-1,-1,t,e,-n,r,s,5),this.setIndex(l),this.setAttribute("position",new Jt(c,3)),this.setAttribute("normal",new Jt(h,3)),this.setAttribute("uv",new Jt(u,2));function x(y,g,p,A,w,m,v,M,b,R,S){let E=m/b,P=v/R,D=m/2,H=v/2,O=M/2,X=b+1,z=R+1,tt=0,k=0,lt=new F;for(let dt=0;dt<z;dt++){let Rt=dt*P-H;for(let te=0;te<X;te++){let ge=te*E-D;lt[y]=ge*A,lt[g]=Rt*w,lt[p]=O,c.push(lt.x,lt.y,lt.z),lt[y]=0,lt[g]=0,lt[p]=M>0?1:-1,h.push(lt.x,lt.y,lt.z),u.push(te/b),u.push(1-dt/R),tt+=1}}for(let dt=0;dt<R;dt++)for(let Rt=0;Rt<b;Rt++){let te=f+Rt+X*dt,ge=f+Rt+X*(dt+1),Ie=f+(Rt+1)+X*(dt+1),ce=f+(Rt+1)+X*dt;l.push(te,ge,ce),l.push(ge,Ie,ce),k+=6}a.addGroup(d,k,S),d+=k,f+=tt}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};function $i(i){let t={};for(let e in i){t[e]={};for(let n in i[e]){let r=i[e][n];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=r.clone():Array.isArray(r)?t[e][n]=r.slice():t[e][n]=r}}return t}function un(i){let t={};for(let e=0;e<i.length;e++){let n=$i(i[e]);for(let r in n)t[r]=n[r]}return t}function Tf(i){let t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function gc(i){let t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:fe.workingColorSpace}var fn={clone:$i,merge:un},Rf=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Cf=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Se=class extends pi{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Rf,this.fragmentShader=Cf,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=$i(t.uniforms),this.uniformsGroups=Tf(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let r in this.uniforms){let o=this.uniforms[r].value;o&&o.isTexture?e.uniforms[r]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[r]={type:"m4",value:o.toArray()}:e.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}},xs=class extends yn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new _e,this.projectionMatrix=new _e,this.projectionMatrixInverse=new _e,this.coordinateSystem=kn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Ei=new F,lh=new nt,ch=new nt,tn=class extends xs{constructor(t=50,e=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=Ro*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(gl*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Ro*2*Math.atan(Math.tan(gl*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Ei.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Ei.x,Ei.y).multiplyScalar(-t/Ei.z),Ei.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Ei.x,Ei.y).multiplyScalar(-t/Ei.z)}getViewSize(t,e){return this.getViewBounds(t,lh,ch),e.subVectors(ch,lh)}setViewOffset(t,e,n,r,s,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(gl*.5*this.fov)/this.zoom,n=2*e,r=this.aspect*n,s=-.5*r,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,e-=o.offsetY*n/c,r*=o.width/l,n*=o.height/c}let a=this.filmOffset;a!==0&&(s+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},yr=-90,Mr=1,Fo=class extends yn{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let r=new tn(yr,Mr,t,e);r.layers=this.layers,this.add(r);let s=new tn(yr,Mr,t,e);s.layers=this.layers,this.add(s);let o=new tn(yr,Mr,t,e);o.layers=this.layers,this.add(o);let a=new tn(yr,Mr,t,e);a.layers=this.layers,this.add(a);let l=new tn(yr,Mr,t,e);l.layers=this.layers,this.add(l);let c=new tn(yr,Mr,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,r,s,o,a,l]=e;for(let c of e)this.remove(c);if(t===kn)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===fs)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[s,o,a,l,c,h]=this.children,u=t.getRenderTarget(),f=t.getActiveCubeFace(),d=t.getActiveMipmapLevel(),x=t.xr.enabled;t.xr.enabled=!1;let y=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,r),t.render(e,s),t.setRenderTarget(n,1,r),t.render(e,o),t.setRenderTarget(n,2,r),t.render(e,a),t.setRenderTarget(n,3,r),t.render(e,l),t.setRenderTarget(n,4,r),t.render(e,c),n.texture.generateMipmaps=y,t.setRenderTarget(n,5,r),t.render(e,h),t.setRenderTarget(u,f,d),t.xr.enabled=x,n.texture.needsPMREMUpdate=!0}},vs=class extends sn{constructor(t=[],e=Zi,n,r,s,o,a,l,c,h){super(t,e,n,r,s,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},Uo=class extends en{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},r=[n,n,n,n,n,n];this.texture=new vs(r),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new We(5,5,5),s=new Se({name:"CubemapFromEquirect",uniforms:$i(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:on,blending:Xn});s.uniforms.tEquirect.value=e;let o=new Wt(r,s),a=e.minFilter;return e.minFilter===Pi&&(e.minFilter=Gn),new Fo(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e=!0,n=!0,r=!0){let s=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,r);t.setRenderTarget(s)}},xn=class extends yn{constructor(){super(),this.isGroup=!0,this.type="Group"}},If={type:"move"},Fr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new xn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new xn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new F,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new F),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new xn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new F,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new F),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let r=null,s=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(let y of t.hand.values()){let g=e.getJointPose(y,n),p=this._getHandJoint(c,y);g!==null&&(p.matrix.fromArray(g.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=g.radius),p.visible=g!==null}let h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],f=h.position.distanceTo(u.position),d=.02,x=.005;c.inputState.pinching&&f>d+x?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&f<=d-x&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(s=e.getPose(t.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=e.getPose(t.targetRaySpace,n),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(If)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new xn;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},ys=class i{constructor(t,e=25e-5){this.isFogExp2=!0,this.name="",this.color=new vt(t),this.density=e}clone(){return new i(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}};var Ms=class extends yn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Yn,this.environmentIntensity=1,this.environmentRotation=new Yn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}},Ss=class{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=To,this.updateRanges=[],this.version=0,this.uuid=hi()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let r=0,s=this.stride;r<s;r++)this.array[t+r]=e.array[n+r];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=hi()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=hi()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},pn=new F,Ur=class i{constructor(t,e,n,r=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=r}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)pn.fromBufferAttribute(this,e),pn.applyMatrix4(t),this.setXYZ(e,pn.x,pn.y,pn.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)pn.fromBufferAttribute(this,e),pn.applyNormalMatrix(t),this.setXYZ(e,pn.x,pn.y,pn.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)pn.fromBufferAttribute(this,e),pn.transformDirection(t),this.setXYZ(e,pn.x,pn.y,pn.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=Jn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Ae(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=Ae(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=Ae(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=Ae(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=Ae(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=Jn(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=Jn(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=Jn(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=Jn(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=Ae(e,this.array),n=Ae(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=Ae(e,this.array),n=Ae(n,this.array),r=Ae(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=r,this}setXYZW(t,e,n,r,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=Ae(e,this.array),n=Ae(n,this.array),r=Ae(r,this.array),s=Ae(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=r,this.data.array[t+3]=s,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let r=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)e.push(this.data.array[r+s])}return new Le(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new i(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let r=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)e.push(this.data.array[r+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},Vn=class extends pi{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new vt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},Sr,rs=new F,_r=new F,br=new F,Er=new nt,ss=new nt,su=new _e,uo=new F,os=new F,fo=new F,hh=new nt,Bl=new nt,uh=new nt,Zn=class extends yn{constructor(t=new Vn){if(super(),this.isSprite=!0,this.type="Sprite",Sr===void 0){Sr=new Ce;let e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new Ss(e,5);Sr.setIndex([0,1,2,0,2,3]),Sr.setAttribute("position",new Ur(n,3,0,!1)),Sr.setAttribute("uv",new Ur(n,2,3,!1))}this.geometry=Sr,this.material=t,this.center=new nt(.5,.5),this.count=1}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),_r.setFromMatrixScale(this.matrixWorld),su.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),br.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&_r.multiplyScalar(-br.z);let n=this.material.rotation,r,s;n!==0&&(s=Math.cos(n),r=Math.sin(n));let o=this.center;po(uo.set(-.5,-.5,0),br,o,_r,r,s),po(os.set(.5,-.5,0),br,o,_r,r,s),po(fo.set(.5,.5,0),br,o,_r,r,s),hh.set(0,0),Bl.set(1,0),uh.set(1,1);let a=t.ray.intersectTriangle(uo,os,fo,!1,rs);if(a===null&&(po(os.set(-.5,.5,0),br,o,_r,r,s),Bl.set(0,1),a=t.ray.intersectTriangle(uo,fo,os,!1,rs),a===null))return;let l=t.ray.origin.distanceTo(rs);l<t.near||l>t.far||e.push({distance:l,point:rs.clone(),uv:ci.getInterpolation(rs,uo,os,fo,hh,Bl,uh,new nt),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}};function po(i,t,e,n,r,s){Er.subVectors(i,e).addScalar(.5).multiply(n),r!==void 0?(ss.x=s*Er.x-r*Er.y,ss.y=r*Er.x+s*Er.y):ss.copy(Er),i.copy(t),i.x+=ss.x,i.y+=ss.y,i.applyMatrix4(su)}var Dr=class extends sn{constructor(t=null,e=1,n=1,r,s,o,a,l,c=vn,h=vn,u,f){super(null,o,a,l,c,h,r,s,u,f),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var zl=new F,Pf=new F,Ff=new $t,gn=class{constructor(t=new F(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,r){return this.normal.set(t,e,n),this.constant=r,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let r=zl.subVectors(n,e).cross(Pf.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(r,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){let n=t.delta(zl),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let s=-(t.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:e.copy(t.start).addScaledVector(n,s)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||Ff.getNormalMatrix(t),r=this.coplanarPoint(zl).applyMatrix4(t),s=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},ki=new Ki,Uf=new nt(.5,.5),mo=new F,_s=class{constructor(t=new gn,e=new gn,n=new gn,r=new gn,s=new gn,o=new gn){this.planes=[t,e,n,r,s,o]}set(t,e,n,r,s,o){let a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=kn,n=!1){let r=this.planes,s=t.elements,o=s[0],a=s[1],l=s[2],c=s[3],h=s[4],u=s[5],f=s[6],d=s[7],x=s[8],y=s[9],g=s[10],p=s[11],A=s[12],w=s[13],m=s[14],v=s[15];if(r[0].setComponents(c-o,d-h,p-x,v-A).normalize(),r[1].setComponents(c+o,d+h,p+x,v+A).normalize(),r[2].setComponents(c+a,d+u,p+y,v+w).normalize(),r[3].setComponents(c-a,d-u,p-y,v-w).normalize(),n)r[4].setComponents(l,f,g,m).normalize(),r[5].setComponents(c-l,d-f,p-g,v-m).normalize();else if(r[4].setComponents(c-l,d-f,p-g,v-m).normalize(),e===kn)r[5].setComponents(c+l,d+f,p+g,v+m).normalize();else if(e===fs)r[5].setComponents(l,f,g,m).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),ki.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),ki.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(ki)}intersectsSprite(t){ki.center.set(0,0,0);let e=Uf.distanceTo(t.center);return ki.radius=.7071067811865476+e,ki.applyMatrix4(t.matrixWorld),this.intersectsSphere(ki)}intersectsSphere(t){let e=this.planes,n=t.center,r=-t.radius;for(let s=0;s<6;s++)if(e[s].distanceToPoint(n)<r)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let r=e[n];if(mo.x=r.normal.x>0?t.max.x:t.min.x,mo.y=r.normal.y>0?t.max.y:t.min.y,mo.z=r.normal.z>0?t.max.z:t.min.z,r.distanceToPoint(mo)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var Do=class extends pi{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new vt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},fh=new _e,jl=new Ir,go=new Ki,xo=new F,Lr=class extends yn{constructor(t=new Ce,e=new Do){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){let n=this.geometry,r=this.matrixWorld,s=t.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),go.copy(n.boundingSphere),go.applyMatrix4(r),go.radius+=s,t.ray.intersectsSphere(go)===!1)return;fh.copy(r).invert(),jl.copy(t.ray).applyMatrix4(fh);let a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,u=n.attributes.position;if(c!==null){let f=Math.max(0,o.start),d=Math.min(c.count,o.start+o.count);for(let x=f,y=d;x<y;x++){let g=c.getX(x);xo.fromBufferAttribute(u,g),dh(xo,g,l,r,t,e,this)}}else{let f=Math.max(0,o.start),d=Math.min(u.count,o.start+o.count);for(let x=f,y=d;x<y;x++)xo.fromBufferAttribute(u,x),dh(xo,x,l,r,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let r=e[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){let a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}};function dh(i,t,e,n,r,s,o){let a=jl.distanceSqToPoint(i);if(a<e){let l=new F;jl.closestPointToPoint(i,l),l.applyMatrix4(n);let c=r.ray.origin.distanceTo(l);if(c<r.near||c>r.far)return;s.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}var Qn=class extends sn{constructor(t,e,n,r,s,o,a,l,c){super(t,e,n,r,s,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},bs=class extends sn{constructor(t,e,n=Fi,r,s,o,a=vn,l=vn,c,h=Tr,u=1){if(h!==Tr&&h!==Vr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let f={width:t,height:e,depth:u};super(f,r,s,o,a,l,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Cr(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}},Es=class extends sn{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}};var Tn=class i extends Ce{constructor(t=1,e=32,n=0,r=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:r},e=Math.max(3,e);let s=[],o=[],a=[],l=[],c=new F,h=new nt;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let u=0,f=3;u<=e;u++,f+=3){let d=n+u/e*r;c.x=t*Math.cos(d),c.y=t*Math.sin(d),o.push(c.x,c.y,c.z),a.push(0,0,1),h.x=(o[f]/t+1)/2,h.y=(o[f+1]/t+1)/2,l.push(h.x,h.y)}for(let u=1;u<=e;u++)s.push(u,u+1,0);this.setIndex(s),this.setAttribute("position",new Jt(o,3)),this.setAttribute("normal",new Jt(a,3)),this.setAttribute("uv",new Jt(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.segments,t.thetaStart,t.thetaLength)}},ke=class i extends Ce{constructor(t=1,e=1,n=1,r=32,s=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:r,heightSegments:s,openEnded:o,thetaStart:a,thetaLength:l};let c=this;r=Math.floor(r),s=Math.floor(s);let h=[],u=[],f=[],d=[],x=0,y=[],g=n/2,p=0;A(),o===!1&&(t>0&&w(!0),e>0&&w(!1)),this.setIndex(h),this.setAttribute("position",new Jt(u,3)),this.setAttribute("normal",new Jt(f,3)),this.setAttribute("uv",new Jt(d,2));function A(){let m=new F,v=new F,M=0,b=(e-t)/n;for(let R=0;R<=s;R++){let S=[],E=R/s,P=E*(e-t)+t;for(let D=0;D<=r;D++){let H=D/r,O=H*l+a,X=Math.sin(O),z=Math.cos(O);v.x=P*X,v.y=-E*n+g,v.z=P*z,u.push(v.x,v.y,v.z),m.set(X,b,z).normalize(),f.push(m.x,m.y,m.z),d.push(H,1-E),S.push(x++)}y.push(S)}for(let R=0;R<r;R++)for(let S=0;S<s;S++){let E=y[S][R],P=y[S+1][R],D=y[S+1][R+1],H=y[S][R+1];(t>0||S!==0)&&(h.push(E,P,H),M+=3),(e>0||S!==s-1)&&(h.push(P,D,H),M+=3)}c.addGroup(p,M,0),p+=M}function w(m){let v=x,M=new nt,b=new F,R=0,S=m===!0?t:e,E=m===!0?1:-1;for(let D=1;D<=r;D++)u.push(0,g*E,0),f.push(0,E,0),d.push(.5,.5),x++;let P=x;for(let D=0;D<=r;D++){let O=D/r*l+a,X=Math.cos(O),z=Math.sin(O);b.x=S*z,b.y=g*E,b.z=S*X,u.push(b.x,b.y,b.z),f.push(0,E,0),M.x=X*.5+.5,M.y=z*.5*E+.5,d.push(M.x,M.y),x++}for(let D=0;D<r;D++){let H=v+D,O=P+D;m===!0?h.push(O,O+1,H):h.push(O+1,O,H),R+=3}c.addGroup(p,R,m===!0?1:2),p+=R}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},ji=class i extends ke{constructor(t=1,e=1,n=32,r=1,s=!1,o=0,a=Math.PI*2){super(0,t,e,n,r,s,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:r,openEnded:s,thetaStart:o,thetaLength:a}}static fromJSON(t){return new i(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Lo=class i extends Ce{constructor(t=[],e=[],n=1,r=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:r};let s=[],o=[];a(r),c(n),h(),this.setAttribute("position",new Jt(s,3)),this.setAttribute("normal",new Jt(s.slice(),3)),this.setAttribute("uv",new Jt(o,2)),r===0?this.computeVertexNormals():this.normalizeNormals();function a(A){let w=new F,m=new F,v=new F;for(let M=0;M<e.length;M+=3)d(e[M+0],w),d(e[M+1],m),d(e[M+2],v),l(w,m,v,A)}function l(A,w,m,v){let M=v+1,b=[];for(let R=0;R<=M;R++){b[R]=[];let S=A.clone().lerp(m,R/M),E=w.clone().lerp(m,R/M),P=M-R;for(let D=0;D<=P;D++)D===0&&R===M?b[R][D]=S:b[R][D]=S.clone().lerp(E,D/P)}for(let R=0;R<M;R++)for(let S=0;S<2*(M-R)-1;S++){let E=Math.floor(S/2);S%2===0?(f(b[R][E+1]),f(b[R+1][E]),f(b[R][E])):(f(b[R][E+1]),f(b[R+1][E+1]),f(b[R+1][E]))}}function c(A){let w=new F;for(let m=0;m<s.length;m+=3)w.x=s[m+0],w.y=s[m+1],w.z=s[m+2],w.normalize().multiplyScalar(A),s[m+0]=w.x,s[m+1]=w.y,s[m+2]=w.z}function h(){let A=new F;for(let w=0;w<s.length;w+=3){A.x=s[w+0],A.y=s[w+1],A.z=s[w+2];let m=g(A)/2/Math.PI+.5,v=p(A)/Math.PI+.5;o.push(m,1-v)}x(),u()}function u(){for(let A=0;A<o.length;A+=6){let w=o[A+0],m=o[A+2],v=o[A+4],M=Math.max(w,m,v),b=Math.min(w,m,v);M>.9&&b<.1&&(w<.2&&(o[A+0]+=1),m<.2&&(o[A+2]+=1),v<.2&&(o[A+4]+=1))}}function f(A){s.push(A.x,A.y,A.z)}function d(A,w){let m=A*3;w.x=t[m+0],w.y=t[m+1],w.z=t[m+2]}function x(){let A=new F,w=new F,m=new F,v=new F,M=new nt,b=new nt,R=new nt;for(let S=0,E=0;S<s.length;S+=9,E+=6){A.set(s[S+0],s[S+1],s[S+2]),w.set(s[S+3],s[S+4],s[S+5]),m.set(s[S+6],s[S+7],s[S+8]),M.set(o[E+0],o[E+1]),b.set(o[E+2],o[E+3]),R.set(o[E+4],o[E+5]),v.copy(A).add(w).add(m).divideScalar(3);let P=g(v);y(M,E+0,A,P),y(b,E+2,w,P),y(R,E+4,m,P)}}function y(A,w,m,v){v<0&&A.x===1&&(o[w]=A.x-1),m.x===0&&m.z===0&&(o[w]=v/2/Math.PI+.5)}function g(A){return Math.atan2(A.z,-A.x)}function p(A){return Math.atan2(-A.y,Math.sqrt(A.x*A.x+A.z*A.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.vertices,t.indices,t.radius,t.details)}};var Rn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){console.warn("THREE.Curve: .getPoint() not implemented.")}getPointAt(t,e){let n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],n,r=this.getPoint(0),s=0;e.push(0);for(let o=1;o<=t;o++)n=this.getPoint(o/t),s+=n.distanceTo(r),e.push(s),r=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){let n=this.getLengths(),r=0,s=n.length,o;e?o=e:o=t*n[s-1];let a=0,l=s-1,c;for(;a<=l;)if(r=Math.floor(a+(l-a)/2),c=n[r]-o,c<0)a=r+1;else if(c>0)l=r-1;else{l=r;break}if(r=l,n[r]===o)return r/(s-1);let h=n[r],f=n[r+1]-h,d=(o-h)/f;return(r+d)/(s-1)}getTangent(t,e){let r=t-1e-4,s=t+1e-4;r<0&&(r=0),s>1&&(s=1);let o=this.getPoint(r),a=this.getPoint(s),l=e||(o.isVector2?new nt:new F);return l.copy(a).sub(o).normalize(),l}getTangentAt(t,e){let n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e=!1){let n=new F,r=[],s=[],o=[],a=new F,l=new _e;for(let d=0;d<=t;d++){let x=d/t;r[d]=this.getTangentAt(x,new F)}s[0]=new F,o[0]=new F;let c=Number.MAX_VALUE,h=Math.abs(r[0].x),u=Math.abs(r[0].y),f=Math.abs(r[0].z);h<=c&&(c=h,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),f<=c&&n.set(0,0,1),a.crossVectors(r[0],n).normalize(),s[0].crossVectors(r[0],a),o[0].crossVectors(r[0],s[0]);for(let d=1;d<=t;d++){if(s[d]=s[d-1].clone(),o[d]=o[d-1].clone(),a.crossVectors(r[d-1],r[d]),a.length()>Number.EPSILON){a.normalize();let x=Math.acos(se(r[d-1].dot(r[d]),-1,1));s[d].applyMatrix4(l.makeRotationAxis(a,x))}o[d].crossVectors(r[d],s[d])}if(e===!0){let d=Math.acos(se(s[0].dot(s[t]),-1,1));d/=t,r[0].dot(a.crossVectors(s[0],s[t]))>0&&(d=-d);for(let x=1;x<=t;x++)s[x].applyMatrix4(l.makeRotationAxis(r[x],d*x)),o[x].crossVectors(r[x],s[x])}return{tangents:r,normals:s,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){let t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}},Nr=class extends Rn{constructor(t=0,e=0,n=1,r=1,s=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=r,this.aStartAngle=s,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(t,e=new nt){let n=e,r=Math.PI*2,s=this.aEndAngle-this.aStartAngle,o=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=r;for(;s>r;)s-=r;s<Number.EPSILON&&(o?s=0:s=r),this.aClockwise===!0&&!o&&(s===r?s=-r:s=s-r);let a=this.aStartAngle+t*s,l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),f=l-this.aX,d=c-this.aY;l=f*h-d*u+this.aX,c=f*u+d*h+this.aY}return n.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},No=class extends Nr{constructor(t,e,n,r,s,o){super(t,e,n,n,r,s,o),this.isArcCurve=!0,this.type="ArcCurve"}};function xc(){let i=0,t=0,e=0,n=0;function r(s,o,a,l){i=s,t=a,e=-3*s+3*o-2*a-l,n=2*s-2*o+a+l}return{initCatmullRom:function(s,o,a,l,c){r(o,a,c*(a-s),c*(l-o))},initNonuniformCatmullRom:function(s,o,a,l,c,h,u){let f=(o-s)/c-(a-s)/(c+h)+(a-o)/h,d=(a-o)/h-(l-o)/(h+u)+(l-a)/u;f*=h,d*=h,r(o,a,f,d)},calc:function(s){let o=s*s,a=o*s;return i+t*s+e*o+n*a}}}var vo=new F,Hl=new xc,kl=new xc,Gl=new xc,Oo=class extends Rn{constructor(t=[],e=!1,n="centripetal",r=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=r}getPoint(t,e=new F){let n=e,r=this.points,s=r.length,o=(s-(this.closed?0:1))*t,a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/s)+1)*s:l===0&&a===s-1&&(a=s-2,l=1);let c,h;this.closed||a>0?c=r[(a-1)%s]:(vo.subVectors(r[0],r[1]).add(r[0]),c=vo);let u=r[a%s],f=r[(a+1)%s];if(this.closed||a+2<s?h=r[(a+2)%s]:(vo.subVectors(r[s-1],r[s-2]).add(r[s-1]),h=vo),this.curveType==="centripetal"||this.curveType==="chordal"){let d=this.curveType==="chordal"?.5:.25,x=Math.pow(c.distanceToSquared(u),d),y=Math.pow(u.distanceToSquared(f),d),g=Math.pow(f.distanceToSquared(h),d);y<1e-4&&(y=1),x<1e-4&&(x=y),g<1e-4&&(g=y),Hl.initNonuniformCatmullRom(c.x,u.x,f.x,h.x,x,y,g),kl.initNonuniformCatmullRom(c.y,u.y,f.y,h.y,x,y,g),Gl.initNonuniformCatmullRom(c.z,u.z,f.z,h.z,x,y,g)}else this.curveType==="catmullrom"&&(Hl.initCatmullRom(c.x,u.x,f.x,h.x,this.tension),kl.initCatmullRom(c.y,u.y,f.y,h.y,this.tension),Gl.initCatmullRom(c.z,u.z,f.z,h.z,this.tension));return n.set(Hl.calc(l),kl.calc(l),Gl.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let r=t.points[e];this.points.push(r.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let r=this.points[e];t.points.push(r.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let r=t.points[e];this.points.push(new F().fromArray(r))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function ph(i,t,e,n,r){let s=(n-t)*.5,o=(r-e)*.5,a=i*i,l=i*a;return(2*e-2*n+s+o)*l+(-3*e+3*n-2*s-o)*a+s*i+e}function Df(i,t){let e=1-i;return e*e*t}function Lf(i,t){return 2*(1-i)*i*t}function Nf(i,t){return i*i*t}function ls(i,t,e,n){return Df(i,t)+Lf(i,e)+Nf(i,n)}function Of(i,t){let e=1-i;return e*e*e*t}function Bf(i,t){let e=1-i;return 3*e*e*i*t}function zf(i,t){return 3*(1-i)*i*i*t}function Hf(i,t){return i*i*i*t}function cs(i,t,e,n,r){return Of(i,t)+Bf(i,e)+zf(i,n)+Hf(i,r)}var ws=class extends Rn{constructor(t=new nt,e=new nt,n=new nt,r=new nt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=r}getPoint(t,e=new nt){let n=e,r=this.v0,s=this.v1,o=this.v2,a=this.v3;return n.set(cs(t,r.x,s.x,o.x,a.x),cs(t,r.y,s.y,o.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Bo=class extends Rn{constructor(t=new F,e=new F,n=new F,r=new F){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=r}getPoint(t,e=new F){let n=e,r=this.v0,s=this.v1,o=this.v2,a=this.v3;return n.set(cs(t,r.x,s.x,o.x,a.x),cs(t,r.y,s.y,o.y,a.y),cs(t,r.z,s.z,o.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},As=class extends Rn{constructor(t=new nt,e=new nt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new nt){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new nt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},zo=class extends Rn{constructor(t=new F,e=new F){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new F){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new F){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Ts=class extends Rn{constructor(t=new nt,e=new nt,n=new nt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new nt){let n=e,r=this.v0,s=this.v1,o=this.v2;return n.set(ls(t,r.x,s.x,o.x),ls(t,r.y,s.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Ho=class extends Rn{constructor(t=new F,e=new F,n=new F){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new F){let n=e,r=this.v0,s=this.v1,o=this.v2;return n.set(ls(t,r.x,s.x,o.x),ls(t,r.y,s.y,o.y),ls(t,r.z,s.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Rs=class extends Rn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new nt){let n=e,r=this.points,s=(r.length-1)*t,o=Math.floor(s),a=s-o,l=r[o===0?o:o-1],c=r[o],h=r[o>r.length-2?r.length-1:o+1],u=r[o>r.length-3?r.length-1:o+2];return n.set(ph(a,l.x,c.x,h.x,u.x),ph(a,l.y,c.y,h.y,u.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let r=t.points[e];this.points.push(r.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let r=this.points[e];t.points.push(r.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let r=t.points[e];this.points.push(new nt().fromArray(r))}return this}},mh=Object.freeze({__proto__:null,ArcCurve:No,CatmullRomCurve3:Oo,CubicBezierCurve:ws,CubicBezierCurve3:Bo,EllipseCurve:Nr,LineCurve:As,LineCurve3:zo,QuadraticBezierCurve:Ts,QuadraticBezierCurve3:Ho,SplineCurve:Rs}),ko=class extends Rn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){let t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){let n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new mh[n](e,t))}return this}getPoint(t,e){let n=t*this.getLength(),r=this.getCurveLengths(),s=0;for(;s<r.length;){if(r[s]>=n){let o=r[s]-n,a=this.curves[s],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,e)}s++}return null}getLength(){let t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let t=[],e=0;for(let n=0,r=this.curves.length;n<r;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){let e=[],n;for(let r=0,s=this.curves;r<s.length;r++){let o=s[r],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,l=o.getPoints(a);for(let c=0;c<l.length;c++){let h=l[c];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let r=t.curves[e];this.curves.push(r.clone())}return this.autoClose=t.autoClose,this}toJSON(){let t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){let r=this.curves[e];t.curves.push(r.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let r=t.curves[e];this.curves.push(new mh[r.type]().fromJSON(r))}return this}},Cs=class extends ko{constructor(t){super(),this.type="Path",this.currentPoint=new nt,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){let n=new As(this.currentPoint.clone(),new nt(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,r){let s=new Ts(this.currentPoint.clone(),new nt(t,e),new nt(n,r));return this.curves.push(s),this.currentPoint.set(n,r),this}bezierCurveTo(t,e,n,r,s,o){let a=new ws(this.currentPoint.clone(),new nt(t,e),new nt(n,r),new nt(s,o));return this.curves.push(a),this.currentPoint.set(s,o),this}splineThru(t){let e=[this.currentPoint.clone()].concat(t),n=new Rs(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,r,s,o){let a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+a,e+l,n,r,s,o),this}absarc(t,e,n,r,s,o){return this.absellipse(t,e,n,n,r,s,o),this}ellipse(t,e,n,r,s,o,a,l){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+c,e+h,n,r,s,o,a,l),this}absellipse(t,e,n,r,s,o,a,l){let c=new Nr(t,e,n,r,s,o,a,l);if(this.curves.length>0){let u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){let t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}},Or=class extends Cs{constructor(t){super(t),this.uuid=hi(),this.type="Shape",this.holes=[]}getPointsHoles(t){let e=[];for(let n=0,r=this.holes.length;n<r;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let r=t.holes[e];this.holes.push(r.clone())}return this}toJSON(){let t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){let r=this.holes[e];t.holes.push(r.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let r=t.holes[e];this.holes.push(new Cs().fromJSON(r))}return this}};function kf(i,t,e=2){let n=t&&t.length,r=n?t[0]*e:i.length,s=ou(i,0,r,e,!0),o=[];if(!s||s.next===s.prev)return o;let a,l,c;if(n&&(s=Kf(i,t,s,e)),i.length>80*e){a=1/0,l=1/0;let h=-1/0,u=-1/0;for(let f=e;f<r;f+=e){let d=i[f],x=i[f+1];d<a&&(a=d),x<l&&(l=x),d>h&&(h=d),x>u&&(u=x)}c=Math.max(h-a,u-l),c=c!==0?32767/c:0}return Is(s,o,e,a,l,c,0),o}function ou(i,t,e,n,r){let s;if(r===id(i,t,e,n)>0)for(let o=t;o<e;o+=n)s=gh(o/n|0,i[o],i[o+1],s);else for(let o=e-n;o>=t;o-=n)s=gh(o/n|0,i[o],i[o+1],s);return s&&Br(s,s.next)&&(Fs(s),s=s.next),s}function qi(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(Br(e,e.next)||ze(e.prev,e,e.next)===0)){if(Fs(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function Is(i,t,e,n,r,s,o){if(!i)return;!o&&s&&Zf(i,n,r,s);let a=i;for(;i.prev!==i.next;){let l=i.prev,c=i.next;if(s?Vf(i,n,r,s):Gf(i)){t.push(l.i,i.i,c.i),Fs(i),i=c.next,a=c.next;continue}if(i=c,i===a){o?o===1?(i=Wf(qi(i),t),Is(i,t,e,n,r,s,2)):o===2&&Xf(i,t,e,n,r,s):Is(qi(i),t,e,n,r,s,1);break}}}function Gf(i){let t=i.prev,e=i,n=i.next;if(ze(t,e,n)>=0)return!1;let r=t.x,s=e.x,o=n.x,a=t.y,l=e.y,c=n.y,h=Math.min(r,s,o),u=Math.min(a,l,c),f=Math.max(r,s,o),d=Math.max(a,l,c),x=n.next;for(;x!==t;){if(x.x>=h&&x.x<=f&&x.y>=u&&x.y<=d&&as(r,a,s,l,o,c,x.x,x.y)&&ze(x.prev,x,x.next)>=0)return!1;x=x.next}return!0}function Vf(i,t,e,n){let r=i.prev,s=i,o=i.next;if(ze(r,s,o)>=0)return!1;let a=r.x,l=s.x,c=o.x,h=r.y,u=s.y,f=o.y,d=Math.min(a,l,c),x=Math.min(h,u,f),y=Math.max(a,l,c),g=Math.max(h,u,f),p=ql(d,x,t,e,n),A=ql(y,g,t,e,n),w=i.prevZ,m=i.nextZ;for(;w&&w.z>=p&&m&&m.z<=A;){if(w.x>=d&&w.x<=y&&w.y>=x&&w.y<=g&&w!==r&&w!==o&&as(a,h,l,u,c,f,w.x,w.y)&&ze(w.prev,w,w.next)>=0||(w=w.prevZ,m.x>=d&&m.x<=y&&m.y>=x&&m.y<=g&&m!==r&&m!==o&&as(a,h,l,u,c,f,m.x,m.y)&&ze(m.prev,m,m.next)>=0))return!1;m=m.nextZ}for(;w&&w.z>=p;){if(w.x>=d&&w.x<=y&&w.y>=x&&w.y<=g&&w!==r&&w!==o&&as(a,h,l,u,c,f,w.x,w.y)&&ze(w.prev,w,w.next)>=0)return!1;w=w.prevZ}for(;m&&m.z<=A;){if(m.x>=d&&m.x<=y&&m.y>=x&&m.y<=g&&m!==r&&m!==o&&as(a,h,l,u,c,f,m.x,m.y)&&ze(m.prev,m,m.next)>=0)return!1;m=m.nextZ}return!0}function Wf(i,t){let e=i;do{let n=e.prev,r=e.next.next;!Br(n,r)&&lu(n,e,e.next,r)&&Ps(n,r)&&Ps(r,n)&&(t.push(n.i,e.i,r.i),Fs(e),Fs(e.next),e=i=r),e=e.next}while(e!==i);return qi(e)}function Xf(i,t,e,n,r,s){let o=i;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&td(o,a)){let l=cu(o,a);o=qi(o,o.next),l=qi(l,l.next),Is(o,t,e,n,r,s,0),Is(l,t,e,n,r,s,0);return}a=a.next}o=o.next}while(o!==i)}function Kf(i,t,e,n){let r=[];for(let s=0,o=t.length;s<o;s++){let a=t[s]*n,l=s<o-1?t[s+1]*n:i.length,c=ou(i,a,l,n,!1);c===c.next&&(c.steiner=!0),r.push($f(c))}r.sort(jf);for(let s=0;s<r.length;s++)e=qf(r[s],e);return e}function jf(i,t){let e=i.x-t.x;if(e===0&&(e=i.y-t.y,e===0)){let n=(i.next.y-i.y)/(i.next.x-i.x),r=(t.next.y-t.y)/(t.next.x-t.x);e=n-r}return e}function qf(i,t){let e=Jf(i,t);if(!e)return t;let n=cu(e,i);return qi(n,n.next),qi(e,e.next)}function Jf(i,t){let e=t,n=i.x,r=i.y,s=-1/0,o;if(Br(i,e))return e;do{if(Br(i,e.next))return e.next;if(r<=e.y&&r>=e.next.y&&e.next.y!==e.y){let u=e.x+(r-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(u<=n&&u>s&&(s=u,o=e.x<e.next.x?e:e.next,u===n))return o}e=e.next}while(e!==t);if(!o)return null;let a=o,l=o.x,c=o.y,h=1/0;e=o;do{if(n>=e.x&&e.x>=l&&n!==e.x&&au(r<c?n:s,r,l,c,r<c?s:n,r,e.x,e.y)){let u=Math.abs(r-e.y)/(n-e.x);Ps(e,i)&&(u<h||u===h&&(e.x>o.x||e.x===o.x&&Yf(o,e)))&&(o=e,h=u)}e=e.next}while(e!==a);return o}function Yf(i,t){return ze(i.prev,i,t.prev)<0&&ze(t.next,i,i.next)<0}function Zf(i,t,e,n){let r=i;do r.z===0&&(r.z=ql(r.x,r.y,t,e,n)),r.prevZ=r.prev,r.nextZ=r.next,r=r.next;while(r!==i);r.prevZ.nextZ=null,r.prevZ=null,Qf(r)}function Qf(i){let t,e=1;do{let n=i,r;i=null;let s=null;for(t=0;n;){t++;let o=n,a=0;for(let c=0;c<e&&(a++,o=o.nextZ,!!o);c++);let l=e;for(;a>0||l>0&&o;)a!==0&&(l===0||!o||n.z<=o.z)?(r=n,n=n.nextZ,a--):(r=o,o=o.nextZ,l--),s?s.nextZ=r:i=r,r.prevZ=s,s=r;n=o}s.nextZ=null,e*=2}while(t>1);return i}function ql(i,t,e,n,r){return i=(i-e)*r|0,t=(t-n)*r|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function $f(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function au(i,t,e,n,r,s,o,a){return(r-o)*(t-a)>=(i-o)*(s-a)&&(i-o)*(n-a)>=(e-o)*(t-a)&&(e-o)*(s-a)>=(r-o)*(n-a)}function as(i,t,e,n,r,s,o,a){return!(i===o&&t===a)&&au(i,t,e,n,r,s,o,a)}function td(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!ed(i,t)&&(Ps(i,t)&&Ps(t,i)&&nd(i,t)&&(ze(i.prev,i,t.prev)||ze(i,t.prev,t))||Br(i,t)&&ze(i.prev,i,i.next)>0&&ze(t.prev,t,t.next)>0)}function ze(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function Br(i,t){return i.x===t.x&&i.y===t.y}function lu(i,t,e,n){let r=Mo(ze(i,t,e)),s=Mo(ze(i,t,n)),o=Mo(ze(e,n,i)),a=Mo(ze(e,n,t));return!!(r!==s&&o!==a||r===0&&yo(i,e,t)||s===0&&yo(i,n,t)||o===0&&yo(e,i,n)||a===0&&yo(e,t,n))}function yo(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function Mo(i){return i>0?1:i<0?-1:0}function ed(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&lu(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function Ps(i,t){return ze(i.prev,i,i.next)<0?ze(i,t,i.next)>=0&&ze(i,i.prev,t)>=0:ze(i,t,i.prev)<0||ze(i,i.next,t)<0}function nd(i,t){let e=i,n=!1,r=(i.x+t.x)/2,s=(i.y+t.y)/2;do e.y>s!=e.next.y>s&&e.next.y!==e.y&&r<(e.next.x-e.x)*(s-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function cu(i,t){let e=Jl(i.i,i.x,i.y),n=Jl(t.i,t.x,t.y),r=i.next,s=t.prev;return i.next=t,t.prev=i,e.next=r,r.prev=e,n.next=e,e.prev=n,s.next=n,n.prev=s,n}function gh(i,t,e,n){let r=Jl(i,t,e);return n?(r.next=n.next,r.prev=n,n.next.prev=r,n.next=r):(r.prev=r,r.next=r),r}function Fs(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function Jl(i,t,e){return{i,x:t,y:e,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function id(i,t,e,n){let r=0;for(let s=t,o=e-n;s<e;s+=n)r+=(i[o]-i[s])*(i[s+1]+i[o+1]),o=s;return r}var Yl=class{static triangulate(t,e,n=2){return kf(t,e,n)}},Ar=class i{static area(t){let e=t.length,n=0;for(let r=e-1,s=0;s<e;r=s++)n+=t[r].x*t[s].y-t[s].x*t[r].y;return n*.5}static isClockWise(t){return i.area(t)<0}static triangulateShape(t,e){let n=[],r=[],s=[];xh(t),vh(n,t);let o=t.length;e.forEach(xh);for(let l=0;l<e.length;l++)r.push(o),o+=e[l].length,vh(n,e[l]);let a=Yl.triangulate(n,r);for(let l=0;l<a.length;l+=3)s.push(a.slice(l,l+3));return s}};function xh(i){let t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function vh(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}var Ri=class i extends Lo{constructor(t=1,e=0){let n=(1+Math.sqrt(5))/2,r=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],s=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(r,s,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new i(t.radius,t.detail)}},mi=class i extends Ce{constructor(t=[new nt(0,-.5),new nt(.5,0),new nt(0,.5)],e=12,n=0,r=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:r},e=Math.floor(e),r=se(r,0,Math.PI*2);let s=[],o=[],a=[],l=[],c=[],h=1/e,u=new F,f=new nt,d=new F,x=new F,y=new F,g=0,p=0;for(let A=0;A<=t.length-1;A++)switch(A){case 0:g=t[A+1].x-t[A].x,p=t[A+1].y-t[A].y,d.x=p*1,d.y=-g,d.z=p*0,y.copy(d),d.normalize(),l.push(d.x,d.y,d.z);break;case t.length-1:l.push(y.x,y.y,y.z);break;default:g=t[A+1].x-t[A].x,p=t[A+1].y-t[A].y,d.x=p*1,d.y=-g,d.z=p*0,x.copy(d),d.x+=y.x,d.y+=y.y,d.z+=y.z,d.normalize(),l.push(d.x,d.y,d.z),y.copy(x)}for(let A=0;A<=e;A++){let w=n+A*h*r,m=Math.sin(w),v=Math.cos(w);for(let M=0;M<=t.length-1;M++){u.x=t[M].x*m,u.y=t[M].y,u.z=t[M].x*v,o.push(u.x,u.y,u.z),f.x=A/e,f.y=M/(t.length-1),a.push(f.x,f.y);let b=l[3*M+0]*m,R=l[3*M+1],S=l[3*M+0]*v;c.push(b,R,S)}}for(let A=0;A<e;A++)for(let w=0;w<t.length-1;w++){let m=w+A*t.length,v=m,M=m+t.length,b=m+t.length+1,R=m+1;s.push(v,M,R),s.push(b,R,M)}this.setIndex(s),this.setAttribute("position",new Jt(o,3)),this.setAttribute("uv",new Jt(a,2)),this.setAttribute("normal",new Jt(c,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.points,t.segments,t.phiStart,t.phiLength)}};var Mn=class i extends Ce{constructor(t=1,e=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:r};let s=t/2,o=e/2,a=Math.floor(n),l=Math.floor(r),c=a+1,h=l+1,u=t/a,f=e/l,d=[],x=[],y=[],g=[];for(let p=0;p<h;p++){let A=p*f-o;for(let w=0;w<c;w++){let m=w*u-s;x.push(m,-A,0),y.push(0,0,1),g.push(w/a),g.push(1-p/l)}}for(let p=0;p<l;p++)for(let A=0;A<a;A++){let w=A+c*p,m=A+c*(p+1),v=A+1+c*(p+1),M=A+1+c*p;d.push(w,m,M),d.push(m,v,M)}this.setIndex(d),this.setAttribute("position",new Jt(x,3)),this.setAttribute("normal",new Jt(y,3)),this.setAttribute("uv",new Jt(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.widthSegments,t.heightSegments)}},Ji=class i extends Ce{constructor(t=.5,e=1,n=32,r=1,s=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:r,thetaStart:s,thetaLength:o},n=Math.max(3,n),r=Math.max(1,r);let a=[],l=[],c=[],h=[],u=t,f=(e-t)/r,d=new F,x=new nt;for(let y=0;y<=r;y++){for(let g=0;g<=n;g++){let p=s+g/n*o;d.x=u*Math.cos(p),d.y=u*Math.sin(p),l.push(d.x,d.y,d.z),c.push(0,0,1),x.x=(d.x/e+1)/2,x.y=(d.y/e+1)/2,h.push(x.x,x.y)}u+=f}for(let y=0;y<r;y++){let g=y*(n+1);for(let p=0;p<n;p++){let A=p+g,w=A,m=A+n+1,v=A+n+2,M=A+1;a.push(w,m,M),a.push(m,v,M)}}this.setIndex(a),this.setAttribute("position",new Jt(l,3)),this.setAttribute("normal",new Jt(c,3)),this.setAttribute("uv",new Jt(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}},Us=class i extends Ce{constructor(t=new Or([new nt(0,.5),new nt(-.5,-.5),new nt(.5,-.5)]),e=12){super(),this.type="ShapeGeometry",this.parameters={shapes:t,curveSegments:e};let n=[],r=[],s=[],o=[],a=0,l=0;if(Array.isArray(t)===!1)c(t);else for(let h=0;h<t.length;h++)c(t[h]),this.addGroup(a,l,h),a+=l,l=0;this.setIndex(n),this.setAttribute("position",new Jt(r,3)),this.setAttribute("normal",new Jt(s,3)),this.setAttribute("uv",new Jt(o,2));function c(h){let u=r.length/3,f=h.extractPoints(e),d=f.shape,x=f.holes;Ar.isClockWise(d)===!1&&(d=d.reverse());for(let g=0,p=x.length;g<p;g++){let A=x[g];Ar.isClockWise(A)===!0&&(x[g]=A.reverse())}let y=Ar.triangulateShape(d,x);for(let g=0,p=x.length;g<p;g++){let A=x[g];d=d.concat(A)}for(let g=0,p=d.length;g<p;g++){let A=d[g];r.push(A.x,A.y,0),s.push(0,0,1),o.push(A.x,A.y)}for(let g=0,p=y.length;g<p;g++){let A=y[g],w=A[0]+u,m=A[1]+u,v=A[2]+u;n.push(w,m,v),l+=3}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes;return rd(e,t)}static fromJSON(t,e){let n=[];for(let r=0,s=t.shapes.length;r<s;r++){let o=e[t.shapes[r]];n.push(o)}return new i(n,t.curveSegments)}};function rd(i,t){if(t.shapes=[],Array.isArray(i))for(let e=0,n=i.length;e<n;e++){let r=i[e];t.shapes.push(r.uuid)}else t.shapes.push(i.uuid);return t}var Sn=class i extends Ce{constructor(t=1,e=32,n=16,r=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:r,phiLength:s,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let l=Math.min(o+a,Math.PI),c=0,h=[],u=new F,f=new F,d=[],x=[],y=[],g=[];for(let p=0;p<=n;p++){let A=[],w=p/n,m=0;p===0&&o===0?m=.5/e:p===n&&l===Math.PI&&(m=-.5/e);for(let v=0;v<=e;v++){let M=v/e;u.x=-t*Math.cos(r+M*s)*Math.sin(o+w*a),u.y=t*Math.cos(o+w*a),u.z=t*Math.sin(r+M*s)*Math.sin(o+w*a),x.push(u.x,u.y,u.z),f.copy(u).normalize(),y.push(f.x,f.y,f.z),g.push(M+m,1-w),A.push(c++)}h.push(A)}for(let p=0;p<n;p++)for(let A=0;A<e;A++){let w=h[p][A+1],m=h[p][A],v=h[p+1][A],M=h[p+1][A+1];(p!==0||o>0)&&d.push(w,m,M),(p!==n-1||l<Math.PI)&&d.push(m,v,M)}this.setIndex(d),this.setAttribute("position",new Jt(x,3)),this.setAttribute("normal",new Jt(y,3)),this.setAttribute("uv",new Jt(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var Wn=class i extends Ce{constructor(t=1,e=.4,n=12,r=48,s=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:r,arc:s},n=Math.floor(n),r=Math.floor(r);let o=[],a=[],l=[],c=[],h=new F,u=new F,f=new F;for(let d=0;d<=n;d++)for(let x=0;x<=r;x++){let y=x/r*s,g=d/n*Math.PI*2;u.x=(t+e*Math.cos(g))*Math.cos(y),u.y=(t+e*Math.cos(g))*Math.sin(y),u.z=e*Math.sin(g),a.push(u.x,u.y,u.z),h.x=t*Math.cos(y),h.y=t*Math.sin(y),f.subVectors(u,h).normalize(),l.push(f.x,f.y,f.z),c.push(x/r),c.push(d/n)}for(let d=1;d<=n;d++)for(let x=1;x<=r;x++){let y=(r+1)*d+x-1,g=(r+1)*(d-1)+x-1,p=(r+1)*(d-1)+x,A=(r+1)*d+x;o.push(y,g,A),o.push(g,p,A)}this.setIndex(o),this.setAttribute("position",new Jt(a,3)),this.setAttribute("normal",new Jt(l,3)),this.setAttribute("uv",new Jt(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}};var Ds=class extends Se{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}};var Go=class extends pi{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Xh,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},Vo=class extends pi{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function So(i,t){return!i||i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function sd(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}var Yi=class{constructor(t,e,n,r){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=r!==void 0?r:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,r=e[n],s=e[n-1];n:{t:{let o;e:{i:if(!(t<r)){for(let a=n+2;;){if(r===void 0){if(t<s)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(s=r,r=e[++n],t<r)break t}o=e.length;break e}if(!(t>=s)){let a=e[1];t<a&&(n=2,s=a);for(let l=n-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(r=s,s=e[--n-1],t>=s)break t}o=n,n=0;break e}break n}for(;n<o;){let a=n+o>>>1;t<e[a]?o=a:n=a+1}if(r=e[n],s=e[n-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,s,r)}return this.interpolate_(n,s,t,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,r=this.valueSize,s=t*r;for(let o=0;o!==r;++o)e[o]=n[s+o];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},Wo=class extends Yi{constructor(t,e,n,r){super(t,e,n,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Vl,endingEnd:Vl}}intervalChanged_(t,e,n){let r=this.parameterPositions,s=t-2,o=t+1,a=r[s],l=r[o];if(a===void 0)switch(this.getSettings_().endingStart){case Wl:s=t,a=2*e-n;break;case Xl:s=r.length-2,a=e+r[s]-r[s+1];break;default:s=t,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Wl:o=t,l=2*n-e;break;case Xl:o=1,l=n+r[1]-r[0];break;default:o=t-1,l=e}let c=(n-e)*.5,h=this.valueSize;this._weightPrev=c/(e-a),this._weightNext=c/(l-n),this._offsetPrev=s*h,this._offsetNext=o*h}interpolate_(t,e,n,r){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=this._offsetPrev,u=this._offsetNext,f=this._weightPrev,d=this._weightNext,x=(n-e)/(r-e),y=x*x,g=y*x,p=-f*g+2*f*y-f*x,A=(1+f)*g+(-1.5-2*f)*y+(-.5+f)*x+1,w=(-1-d)*g+(1.5+d)*y+.5*x,m=d*g-d*y;for(let v=0;v!==a;++v)s[v]=p*o[h+v]+A*o[c+v]+w*o[l+v]+m*o[u+v];return s}},Xo=class extends Yi{constructor(t,e,n,r){super(t,e,n,r)}interpolate_(t,e,n,r){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=(n-e)/(r-e),u=1-h;for(let f=0;f!==a;++f)s[f]=o[c+f]*u+o[l+f]*h;return s}},Ko=class extends Yi{constructor(t,e,n,r){super(t,e,n,r)}interpolate_(t){return this.copySampleValue_(t-1)}},Cn=class{constructor(t,e,n,r){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=So(e,this.TimeBufferType),this.values=So(n,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:So(t.times,Array),values:So(t.values,Array)};let r=t.getInterpolation();r!==t.DefaultInterpolation&&(n.interpolation=r)}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new Ko(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new Xo(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new Wo(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case hs:e=this.InterpolantFactoryMethodDiscrete;break;case Ao:e=this.InterpolantFactoryMethodLinear;break;case _o:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return hs;case this.InterpolantFactoryMethodLinear:return Ao;case this.InterpolantFactoryMethodSmooth:return _o}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,r=e.length;n!==r;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,r=e.length;n!==r;++n)e[n]*=t}return this}trim(t,e){let n=this.times,r=n.length,s=0,o=r-1;for(;s!==r&&n[s]<t;)++s;for(;o!==-1&&n[o]>e;)--o;if(++o,s!==0||o!==r){s>=o&&(o=Math.max(o,1),s=o-1);let a=this.getValueSize();this.times=n.slice(s,o),this.values=this.values.slice(s*a,o*a)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,r=this.values,s=n.length;s===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==s;a++){let l=n[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),t=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),t=!1;break}o=l}if(r!==void 0&&sd(r))for(let a=0,l=r.length;a!==l;++a){let c=r[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),r=this.getInterpolation()===_o,s=t.length-1,o=1;for(let a=1;a<s;++a){let l=!1,c=t[a],h=t[a+1];if(c!==h&&(a!==1||c!==t[0]))if(r)l=!0;else{let u=a*n,f=u-n,d=u+n;for(let x=0;x!==n;++x){let y=e[u+x];if(y!==e[f+x]||y!==e[d+x]){l=!0;break}}}if(l){if(a!==o){t[o]=t[a];let u=a*n,f=o*n;for(let d=0;d!==n;++d)e[f+d]=e[u+d]}++o}}if(s>0){t[o]=t[s];for(let a=s*n,l=o*n,c=0;c!==n;++c)e[l+c]=e[a+c];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,r=new n(this.name,t,e);return r.createInterpolant=this.createInterpolant,r}};Cn.prototype.ValueTypeName="";Cn.prototype.TimeBufferType=Float32Array;Cn.prototype.ValueBufferType=Float32Array;Cn.prototype.DefaultInterpolation=Ao;var Ci=class extends Cn{constructor(t,e,n){super(t,e,n)}};Ci.prototype.ValueTypeName="bool";Ci.prototype.ValueBufferType=Array;Ci.prototype.DefaultInterpolation=hs;Ci.prototype.InterpolantFactoryMethodLinear=void 0;Ci.prototype.InterpolantFactoryMethodSmooth=void 0;var jo=class extends Cn{constructor(t,e,n,r){super(t,e,n,r)}};jo.prototype.ValueTypeName="color";var qo=class extends Cn{constructor(t,e,n,r){super(t,e,n,r)}};qo.prototype.ValueTypeName="number";var Jo=class extends Yi{constructor(t,e,n,r){super(t,e,n,r)}interpolate_(t,e,n,r){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-e)/(r-e),c=t*a;for(let h=c+a;c!==h;c+=4)Ln.slerpFlat(s,0,o,c-a,o,c,l);return s}},Ls=class extends Cn{constructor(t,e,n,r){super(t,e,n,r)}InterpolantFactoryMethodLinear(t){return new Jo(this.times,this.values,this.getValueSize(),t)}};Ls.prototype.ValueTypeName="quaternion";Ls.prototype.InterpolantFactoryMethodSmooth=void 0;var Ii=class extends Cn{constructor(t,e,n){super(t,e,n)}};Ii.prototype.ValueTypeName="string";Ii.prototype.ValueBufferType=Array;Ii.prototype.DefaultInterpolation=hs;Ii.prototype.InterpolantFactoryMethodLinear=void 0;Ii.prototype.InterpolantFactoryMethodSmooth=void 0;var Yo=class extends Cn{constructor(t,e,n,r){super(t,e,n,r)}};Yo.prototype.ValueTypeName="vector";var Zo=class{constructor(t,e,n){let r=this,s=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.abortController=new AbortController,this.itemStart=function(h){a++,s===!1&&r.onStart!==void 0&&r.onStart(h,o,a),s=!0},this.itemEnd=function(h){o++,r.onProgress!==void 0&&r.onProgress(h,o,a),o===a&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(h){r.onError!==void 0&&r.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){let u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,f=c.length;u<f;u+=2){let d=c[u],x=c[u+1];if(d.global&&(d.lastIndex=0),d.test(h))return x}return null},this.abort=function(){return this.abortController.abort(),this.abortController=new AbortController,this}}},hu=new Zo,Qo=class{constructor(t){this.manager=t!==void 0?t:hu,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){let n=this;return new Promise(function(r,s){n.load(t,r,e,s)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}};Qo.DEFAULT_MATERIAL_NAME="__DEFAULT";var zr=class extends xs{constructor(t=-1,e=1,n=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2,s=n-t,o=n+t,a=r+e,l=r-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}};var $o=class extends tn{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}},Ns=class{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let e=performance.now();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}};var vc="\\[\\]\\.:\\/",od=new RegExp("["+vc+"]","g"),yc="[^"+vc+"]",ad="[^"+vc.replace("\\.","")+"]",ld=/((?:WC+[\/:])*)/.source.replace("WC",yc),cd=/(WCOD+)?/.source.replace("WCOD",ad),hd=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",yc),ud=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",yc),fd=new RegExp("^"+ld+cd+hd+ud+"$"),dd=["material","materials","bones","map"],Zl=class{constructor(t,e,n){let r=n||Ue.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,r)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,r=this._bindings[n];r!==void 0&&r.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let r=this._targetGroup.nCachedObjects_,s=n.length;r!==s;++r)n[r].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},Ue=class i{constructor(t,e,n){this.path=e,this.parsedPath=n||i.parseTrackName(e),this.node=i.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new i.Composite(t,e,n):new i(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(od,"")}static parseTrackName(t){let e=fd.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},r=n.nodeName&&n.nodeName.lastIndexOf(".");if(r!==void 0&&r!==-1){let s=n.nodeName.substring(r+1);dd.indexOf(s)!==-1&&(n.nodeName=n.nodeName.substring(0,r),n.objectName=s)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(s){for(let o=0;o<s.length;o++){let a=s[o];if(a.name===e||a.uuid===e)return a;let l=n(a.children);if(l)return l}return null},r=n(t.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)t[e++]=n[r]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)n[r]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)n[r]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)n[r]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,r=e.propertyName,s=e.propertyIndex;if(t||(t=i.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=e.objectIndex;switch(n){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===c){c=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(c!==void 0){if(t[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let o=t[r];if(o===void 0){let c=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+r+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?a=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(s!==void 0){if(r==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[s]!==void 0&&(s=t.morphTargetDictionary[s])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=s}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=r;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Ue.Composite=Zl;Ue.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Ue.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Ue.prototype.GetterByBindingType=[Ue.prototype._getValue_direct,Ue.prototype._getValue_array,Ue.prototype._getValue_arrayElement,Ue.prototype._getValue_toArray];Ue.prototype.SetterByBindingTypeAndVersioning=[[Ue.prototype._setValue_direct,Ue.prototype._setValue_direct_setNeedsUpdate,Ue.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Ue.prototype._setValue_array,Ue.prototype._setValue_array_setNeedsUpdate,Ue.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Ue.prototype._setValue_arrayElement,Ue.prototype._setValue_arrayElement_setNeedsUpdate,Ue.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Ue.prototype._setValue_fromArray,Ue.prototype._setValue_fromArray_setNeedsUpdate,Ue.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var sx=new Float32Array(1);var yh=new _e,Os=class{constructor(t,e,n=0,r=1/0){this.ray=new Ir(t,e),this.near=n,this.far=r,this.camera=null,this.layers=new Pr,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return yh.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(yh),this}intersectObject(t,e=!0,n=[]){return Ql(t,this,n,e),n.sort(Mh),n}intersectObjects(t,e=!0,n=[]){for(let r=0,s=t.length;r<s;r++)Ql(t[r],this,n,e);return n.sort(Mh),n}};function Mh(i,t){return i.distance-t.distance}function Ql(i,t,e,n){let r=!0;if(i.layers.test(t.layers)&&i.raycast(t,e)===!1&&(r=!1),r===!0&&n===!0){let s=i.children;for(let o=0,a=s.length;o<a;o++)Ql(s[o],t,e,!0)}}function Mc(i,t,e,n){let r=pd(n);switch(e){case cc:return i*t;case uc:return i*t/r.components*r.byteLength;case ya:return i*t/r.components*r.byteLength;case fc:return i*t*2/r.components*r.byteLength;case Ma:return i*t*2/r.components*r.byteLength;case hc:return i*t*3/r.components*r.byteLength;case On:return i*t*4/r.components*r.byteLength;case Sa:return i*t*4/r.components*r.byteLength;case Hs:case ks:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Gs:case Vs:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case ba:case wa:return Math.max(i,16)*Math.max(t,8)/4;case _a:case Ea:return Math.max(i,8)*Math.max(t,8)/2;case Aa:case Ta:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Ra:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Ca:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Ia:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case Pa:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case Fa:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case Ua:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case Da:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case La:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case Na:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case Oa:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case Ba:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case za:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case Ha:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case ka:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case Ga:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case Va:case Wa:case Xa:return Math.ceil(i/4)*Math.ceil(t/4)*16;case Ka:case ja:return Math.ceil(i/4)*Math.ceil(t/4)*8;case qa:case Ja:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function pd(i){switch(i){case ti:case sc:return{byteLength:1,components:1};case kr:case oc:case Nn:return{byteLength:2,components:1};case xa:case va:return{byteLength:2,components:4};case Fi:case ga:case ei:return{byteLength:4,components:1};case ac:case lc:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"180"}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="180");function Du(){let i=null,t=!1,e=null,n=null;function r(s,o){e(s,o),n=i.requestAnimationFrame(r)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(r),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(s){e=s},setContext:function(s){i=s}}}function Md(i){let t=new WeakMap;function e(a,l){let c=a.array,h=a.usage,u=c.byteLength,f=i.createBuffer();i.bindBuffer(l,f),i.bufferData(l,c,h),a.onUploadCallback();let d;if(c instanceof Float32Array)d=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)d=i.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?d=i.HALF_FLOAT:d=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=i.SHORT;else if(c instanceof Uint32Array)d=i.UNSIGNED_INT;else if(c instanceof Int32Array)d=i.INT;else if(c instanceof Int8Array)d=i.BYTE;else if(c instanceof Uint8Array)d=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:u}}function n(a,l,c){let h=l.array,u=l.updateRanges;if(i.bindBuffer(c,a),u.length===0)i.bufferSubData(c,0,h);else{u.sort((d,x)=>d.start-x.start);let f=0;for(let d=1;d<u.length;d++){let x=u[f],y=u[d];y.start<=x.start+x.count+1?x.count=Math.max(x.count,y.start+y.count-x.start):(++f,u[f]=y)}u.length=f+1;for(let d=0,x=u.length;d<x;d++){let y=u[d];i.bufferSubData(c,y.start*h.BYTES_PER_ELEMENT,h,y.start,y.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=t.get(a);l&&(i.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:r,remove:s,update:o}}var Sd=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,_d=`#ifdef USE_ALPHAHASH
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
#endif`,bd=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Ed=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,wd=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Ad=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Td=`#ifdef USE_AOMAP
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
#endif`,Rd=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Cd=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
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
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
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
#endif`,Id=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Pd=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Fd=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Ud=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Dd=`#ifdef USE_IRIDESCENCE
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
#endif`,Ld=`#ifdef USE_BUMPMAP
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
#endif`,Nd=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Od=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Bd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,zd=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Hd=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,kd=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Gd=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Vd=`#if defined( USE_COLOR_ALPHA )
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
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,Wd=`#define PI 3.141592653589793
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
} // validated`,Xd=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Kd=`vec3 transformedNormal = objectNormal;
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
#endif`,jd=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,qd=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Jd=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Yd=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Zd="gl_FragColor = linearToOutputTexel( gl_FragColor );",Qd=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,$d=`#ifdef USE_ENVMAP
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
#endif`,tp=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,ep=`#ifdef USE_ENVMAP
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
#endif`,np=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,ip=`#ifdef USE_ENVMAP
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
#endif`,rp=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,sp=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,op=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,ap=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,lp=`#ifdef USE_GRADIENTMAP
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
}`,cp=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,hp=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,up=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,fp=`uniform bool receiveShadow;
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
#endif`,dp=`#ifdef USE_ENVMAP
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
#endif`,pp=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,mp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,gp=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,xp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,vp=`PhysicalMaterial material;
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
#endif`,yp=`struct PhysicalMaterial {
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
}`,Mp=`
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
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
#endif`,Sp=`#if defined( RE_IndirectDiffuse )
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
#endif`,_p=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,bp=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Ep=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,wp=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ap=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Tp=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Rp=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Cp=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Ip=`#if defined( USE_POINTS_UV )
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
#endif`,Pp=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Fp=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Up=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Dp=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Lp=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Np=`#ifdef USE_MORPHTARGETS
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
#endif`,Op=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Bp=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,zp=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Hp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,kp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Gp=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Vp=`#ifdef USE_NORMALMAP
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
#endif`,Wp=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Xp=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Kp=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,jp=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,qp=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Jp=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
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
}`,Yp=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Zp=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Qp=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,$p=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,tm=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,em=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,nm=`#if NUM_SPOT_LIGHT_COORDS > 0
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
			float shadowIntensity;
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
			float shadowIntensity;
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
			float shadowIntensity;
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
		float depth = unpackRGBAToDepth( texture2D( depths, uv ) );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			return step( depth, compare );
		#else
			return step( compare, depth );
		#endif
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow( sampler2D shadow, vec2 uv, float compare ) {
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			float hard_shadow = step( distribution.x, compare );
		#else
			float hard_shadow = step( compare, distribution.x );
		#endif
		if ( hard_shadow != 1.0 ) {
			float distance = compare - distribution.x;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
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
		return mix( 1.0, shadow, shadowIntensity );
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
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
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
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,im=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
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
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,rm=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,sm=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,om=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,am=`#ifdef USE_SKINNING
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
#endif`,lm=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,cm=`#ifdef USE_SKINNING
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
#endif`,hm=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,um=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,fm=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,dm=`#ifndef saturate
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
vec3 CineonToneMapping( vec3 color ) {
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,pm=`#ifdef USE_TRANSMISSION
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
#endif`,mm=`#ifdef USE_TRANSMISSION
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
#endif`,gm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,xm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,vm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,ym=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Mm=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Sm=`uniform sampler2D t2D;
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
}`,_m=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,bm=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Em=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,wm=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Am=`#include <common>
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
}`,Tm=`#if DEPTH_PACKING == 3200
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
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Rm=`#define DISTANCE
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
}`,Cm=`#define DISTANCE
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
}`,Im=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Pm=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Fm=`uniform float scale;
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
}`,Um=`uniform vec3 diffuse;
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
}`,Dm=`#include <common>
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
}`,Lm=`uniform vec3 diffuse;
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
}`,Nm=`#define LAMBERT
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
}`,Om=`#define LAMBERT
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
}`,Bm=`#define MATCAP
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
}`,zm=`#define MATCAP
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
}`,Hm=`#define NORMAL
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
}`,km=`#define NORMAL
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
}`,Gm=`#define PHONG
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
}`,Vm=`#define PHONG
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
}`,Wm=`#define STANDARD
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
}`,Xm=`#define STANDARD
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
}`,Km=`#define TOON
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
}`,jm=`#define TOON
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
}`,qm=`uniform float size;
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
}`,Jm=`uniform vec3 diffuse;
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
}`,Ym=`#include <common>
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
}`,Zm=`uniform vec3 color;
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
}`,Qm=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
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
}`,$m=`uniform vec3 diffuse;
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
}`,ee={alphahash_fragment:Sd,alphahash_pars_fragment:_d,alphamap_fragment:bd,alphamap_pars_fragment:Ed,alphatest_fragment:wd,alphatest_pars_fragment:Ad,aomap_fragment:Td,aomap_pars_fragment:Rd,batching_pars_vertex:Cd,batching_vertex:Id,begin_vertex:Pd,beginnormal_vertex:Fd,bsdfs:Ud,iridescence_fragment:Dd,bumpmap_pars_fragment:Ld,clipping_planes_fragment:Nd,clipping_planes_pars_fragment:Od,clipping_planes_pars_vertex:Bd,clipping_planes_vertex:zd,color_fragment:Hd,color_pars_fragment:kd,color_pars_vertex:Gd,color_vertex:Vd,common:Wd,cube_uv_reflection_fragment:Xd,defaultnormal_vertex:Kd,displacementmap_pars_vertex:jd,displacementmap_vertex:qd,emissivemap_fragment:Jd,emissivemap_pars_fragment:Yd,colorspace_fragment:Zd,colorspace_pars_fragment:Qd,envmap_fragment:$d,envmap_common_pars_fragment:tp,envmap_pars_fragment:ep,envmap_pars_vertex:np,envmap_physical_pars_fragment:dp,envmap_vertex:ip,fog_vertex:rp,fog_pars_vertex:sp,fog_fragment:op,fog_pars_fragment:ap,gradientmap_pars_fragment:lp,lightmap_pars_fragment:cp,lights_lambert_fragment:hp,lights_lambert_pars_fragment:up,lights_pars_begin:fp,lights_toon_fragment:pp,lights_toon_pars_fragment:mp,lights_phong_fragment:gp,lights_phong_pars_fragment:xp,lights_physical_fragment:vp,lights_physical_pars_fragment:yp,lights_fragment_begin:Mp,lights_fragment_maps:Sp,lights_fragment_end:_p,logdepthbuf_fragment:bp,logdepthbuf_pars_fragment:Ep,logdepthbuf_pars_vertex:wp,logdepthbuf_vertex:Ap,map_fragment:Tp,map_pars_fragment:Rp,map_particle_fragment:Cp,map_particle_pars_fragment:Ip,metalnessmap_fragment:Pp,metalnessmap_pars_fragment:Fp,morphinstance_vertex:Up,morphcolor_vertex:Dp,morphnormal_vertex:Lp,morphtarget_pars_vertex:Np,morphtarget_vertex:Op,normal_fragment_begin:Bp,normal_fragment_maps:zp,normal_pars_fragment:Hp,normal_pars_vertex:kp,normal_vertex:Gp,normalmap_pars_fragment:Vp,clearcoat_normal_fragment_begin:Wp,clearcoat_normal_fragment_maps:Xp,clearcoat_pars_fragment:Kp,iridescence_pars_fragment:jp,opaque_fragment:qp,packing:Jp,premultiplied_alpha_fragment:Yp,project_vertex:Zp,dithering_fragment:Qp,dithering_pars_fragment:$p,roughnessmap_fragment:tm,roughnessmap_pars_fragment:em,shadowmap_pars_fragment:nm,shadowmap_pars_vertex:im,shadowmap_vertex:rm,shadowmask_pars_fragment:sm,skinbase_vertex:om,skinning_pars_vertex:am,skinning_vertex:lm,skinnormal_vertex:cm,specularmap_fragment:hm,specularmap_pars_fragment:um,tonemapping_fragment:fm,tonemapping_pars_fragment:dm,transmission_fragment:pm,transmission_pars_fragment:mm,uv_pars_fragment:gm,uv_pars_vertex:xm,uv_vertex:vm,worldpos_vertex:ym,background_vert:Mm,background_frag:Sm,backgroundCube_vert:_m,backgroundCube_frag:bm,cube_vert:Em,cube_frag:wm,depth_vert:Am,depth_frag:Tm,distanceRGBA_vert:Rm,distanceRGBA_frag:Cm,equirect_vert:Im,equirect_frag:Pm,linedashed_vert:Fm,linedashed_frag:Um,meshbasic_vert:Dm,meshbasic_frag:Lm,meshlambert_vert:Nm,meshlambert_frag:Om,meshmatcap_vert:Bm,meshmatcap_frag:zm,meshnormal_vert:Hm,meshnormal_frag:km,meshphong_vert:Gm,meshphong_frag:Vm,meshphysical_vert:Wm,meshphysical_frag:Xm,meshtoon_vert:Km,meshtoon_frag:jm,points_vert:qm,points_frag:Jm,shadow_vert:Ym,shadow_frag:Zm,sprite_vert:Qm,sprite_frag:$m},ht={common:{diffuse:{value:new vt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new $t},alphaMap:{value:null},alphaMapTransform:{value:new $t},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new $t}},envmap:{envMap:{value:null},envMapRotation:{value:new $t},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new $t}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new $t}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new $t},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new $t},normalScale:{value:new nt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new $t},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new $t}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new $t}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new $t}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new vt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new vt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new $t},alphaTest:{value:0},uvTransform:{value:new $t}},sprite:{diffuse:{value:new vt(16777215)},opacity:{value:1},center:{value:new nt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new $t},alphaMap:{value:null},alphaMapTransform:{value:new $t},alphaTest:{value:0}}},ni={basic:{uniforms:un([ht.common,ht.specularmap,ht.envmap,ht.aomap,ht.lightmap,ht.fog]),vertexShader:ee.meshbasic_vert,fragmentShader:ee.meshbasic_frag},lambert:{uniforms:un([ht.common,ht.specularmap,ht.envmap,ht.aomap,ht.lightmap,ht.emissivemap,ht.bumpmap,ht.normalmap,ht.displacementmap,ht.fog,ht.lights,{emissive:{value:new vt(0)}}]),vertexShader:ee.meshlambert_vert,fragmentShader:ee.meshlambert_frag},phong:{uniforms:un([ht.common,ht.specularmap,ht.envmap,ht.aomap,ht.lightmap,ht.emissivemap,ht.bumpmap,ht.normalmap,ht.displacementmap,ht.fog,ht.lights,{emissive:{value:new vt(0)},specular:{value:new vt(1118481)},shininess:{value:30}}]),vertexShader:ee.meshphong_vert,fragmentShader:ee.meshphong_frag},standard:{uniforms:un([ht.common,ht.envmap,ht.aomap,ht.lightmap,ht.emissivemap,ht.bumpmap,ht.normalmap,ht.displacementmap,ht.roughnessmap,ht.metalnessmap,ht.fog,ht.lights,{emissive:{value:new vt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ee.meshphysical_vert,fragmentShader:ee.meshphysical_frag},toon:{uniforms:un([ht.common,ht.aomap,ht.lightmap,ht.emissivemap,ht.bumpmap,ht.normalmap,ht.displacementmap,ht.gradientmap,ht.fog,ht.lights,{emissive:{value:new vt(0)}}]),vertexShader:ee.meshtoon_vert,fragmentShader:ee.meshtoon_frag},matcap:{uniforms:un([ht.common,ht.bumpmap,ht.normalmap,ht.displacementmap,ht.fog,{matcap:{value:null}}]),vertexShader:ee.meshmatcap_vert,fragmentShader:ee.meshmatcap_frag},points:{uniforms:un([ht.points,ht.fog]),vertexShader:ee.points_vert,fragmentShader:ee.points_frag},dashed:{uniforms:un([ht.common,ht.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ee.linedashed_vert,fragmentShader:ee.linedashed_frag},depth:{uniforms:un([ht.common,ht.displacementmap]),vertexShader:ee.depth_vert,fragmentShader:ee.depth_frag},normal:{uniforms:un([ht.common,ht.bumpmap,ht.normalmap,ht.displacementmap,{opacity:{value:1}}]),vertexShader:ee.meshnormal_vert,fragmentShader:ee.meshnormal_frag},sprite:{uniforms:un([ht.sprite,ht.fog]),vertexShader:ee.sprite_vert,fragmentShader:ee.sprite_frag},background:{uniforms:{uvTransform:{value:new $t},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ee.background_vert,fragmentShader:ee.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new $t}},vertexShader:ee.backgroundCube_vert,fragmentShader:ee.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ee.cube_vert,fragmentShader:ee.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ee.equirect_vert,fragmentShader:ee.equirect_frag},distanceRGBA:{uniforms:un([ht.common,ht.displacementmap,{referencePosition:{value:new F},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ee.distanceRGBA_vert,fragmentShader:ee.distanceRGBA_frag},shadow:{uniforms:un([ht.lights,ht.fog,{color:{value:new vt(0)},opacity:{value:1}}]),vertexShader:ee.shadow_vert,fragmentShader:ee.shadow_frag}};ni.physical={uniforms:un([ni.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new $t},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new $t},clearcoatNormalScale:{value:new nt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new $t},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new $t},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new $t},sheen:{value:0},sheenColor:{value:new vt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new $t},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new $t},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new $t},transmissionSamplerSize:{value:new nt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new $t},attenuationDistance:{value:0},attenuationColor:{value:new vt(0)},specularColor:{value:new vt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new $t},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new $t},anisotropyVector:{value:new nt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new $t}}]),vertexShader:ee.meshphysical_vert,fragmentShader:ee.meshphysical_frag};var Ya={r:0,b:0,g:0},tr=new Yn,t0=new _e;function e0(i,t,e,n,r,s,o){let a=new vt(0),l=s===!0?0:1,c,h,u=null,f=0,d=null;function x(w){let m=w.isScene===!0?w.background:null;return m&&m.isTexture&&(m=(w.backgroundBlurriness>0?e:t).get(m)),m}function y(w){let m=!1,v=x(w);v===null?p(a,l):v&&v.isColor&&(p(v,1),m=!0);let M=i.xr.getEnvironmentBlendMode();M==="additive"?n.buffers.color.setClear(0,0,0,1,o):M==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||m)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function g(w,m){let v=x(m);v&&(v.isCubeTexture||v.mapping===Bs)?(h===void 0&&(h=new Wt(new We(1,1,1),new Se({name:"BackgroundCubeMaterial",uniforms:$i(ni.backgroundCube.uniforms),vertexShader:ni.backgroundCube.vertexShader,fragmentShader:ni.backgroundCube.fragmentShader,side:on,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(M,b,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(h)),tr.copy(m.backgroundRotation),tr.x*=-1,tr.y*=-1,tr.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(tr.y*=-1,tr.z*=-1),h.material.uniforms.envMap.value=v,h.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=m.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=m.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(t0.makeRotationFromEuler(tr)),h.material.toneMapped=fe.getTransfer(v.colorSpace)!==Me,(u!==v||f!==v.version||d!==i.toneMapping)&&(h.material.needsUpdate=!0,u=v,f=v.version,d=i.toneMapping),h.layers.enableAll(),w.unshift(h,h.geometry,h.material,0,0,null)):v&&v.isTexture&&(c===void 0&&(c=new Wt(new Mn(2,2),new Se({name:"BackgroundMaterial",uniforms:$i(ni.background.uniforms),vertexShader:ni.background.vertexShader,fragmentShader:ni.background.fragmentShader,side:An,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=v,c.material.uniforms.backgroundIntensity.value=m.backgroundIntensity,c.material.toneMapped=fe.getTransfer(v.colorSpace)!==Me,v.matrixAutoUpdate===!0&&v.updateMatrix(),c.material.uniforms.uvTransform.value.copy(v.matrix),(u!==v||f!==v.version||d!==i.toneMapping)&&(c.material.needsUpdate=!0,u=v,f=v.version,d=i.toneMapping),c.layers.enableAll(),w.unshift(c,c.geometry,c.material,0,0,null))}function p(w,m){w.getRGB(Ya,gc(i)),n.buffers.color.setClear(Ya.r,Ya.g,Ya.b,m,o)}function A(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(w,m=1){a.set(w),l=m,p(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(w){l=w,p(a,l)},render:y,addToRenderList:g,dispose:A}}function n0(i,t){let e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},r=f(null),s=r,o=!1;function a(E,P,D,H,O){let X=!1,z=u(H,D,P);s!==z&&(s=z,c(s.object)),X=d(E,H,D,O),X&&x(E,H,D,O),O!==null&&t.update(O,i.ELEMENT_ARRAY_BUFFER),(X||o)&&(o=!1,m(E,P,D,H),O!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(O).buffer))}function l(){return i.createVertexArray()}function c(E){return i.bindVertexArray(E)}function h(E){return i.deleteVertexArray(E)}function u(E,P,D){let H=D.wireframe===!0,O=n[E.id];O===void 0&&(O={},n[E.id]=O);let X=O[P.id];X===void 0&&(X={},O[P.id]=X);let z=X[H];return z===void 0&&(z=f(l()),X[H]=z),z}function f(E){let P=[],D=[],H=[];for(let O=0;O<e;O++)P[O]=0,D[O]=0,H[O]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:P,enabledAttributes:D,attributeDivisors:H,object:E,attributes:{},index:null}}function d(E,P,D,H){let O=s.attributes,X=P.attributes,z=0,tt=D.getAttributes();for(let k in tt)if(tt[k].location>=0){let dt=O[k],Rt=X[k];if(Rt===void 0&&(k==="instanceMatrix"&&E.instanceMatrix&&(Rt=E.instanceMatrix),k==="instanceColor"&&E.instanceColor&&(Rt=E.instanceColor)),dt===void 0||dt.attribute!==Rt||Rt&&dt.data!==Rt.data)return!0;z++}return s.attributesNum!==z||s.index!==H}function x(E,P,D,H){let O={},X=P.attributes,z=0,tt=D.getAttributes();for(let k in tt)if(tt[k].location>=0){let dt=X[k];dt===void 0&&(k==="instanceMatrix"&&E.instanceMatrix&&(dt=E.instanceMatrix),k==="instanceColor"&&E.instanceColor&&(dt=E.instanceColor));let Rt={};Rt.attribute=dt,dt&&dt.data&&(Rt.data=dt.data),O[k]=Rt,z++}s.attributes=O,s.attributesNum=z,s.index=H}function y(){let E=s.newAttributes;for(let P=0,D=E.length;P<D;P++)E[P]=0}function g(E){p(E,0)}function p(E,P){let D=s.newAttributes,H=s.enabledAttributes,O=s.attributeDivisors;D[E]=1,H[E]===0&&(i.enableVertexAttribArray(E),H[E]=1),O[E]!==P&&(i.vertexAttribDivisor(E,P),O[E]=P)}function A(){let E=s.newAttributes,P=s.enabledAttributes;for(let D=0,H=P.length;D<H;D++)P[D]!==E[D]&&(i.disableVertexAttribArray(D),P[D]=0)}function w(E,P,D,H,O,X,z){z===!0?i.vertexAttribIPointer(E,P,D,O,X):i.vertexAttribPointer(E,P,D,H,O,X)}function m(E,P,D,H){y();let O=H.attributes,X=D.getAttributes(),z=P.defaultAttributeValues;for(let tt in X){let k=X[tt];if(k.location>=0){let lt=O[tt];if(lt===void 0&&(tt==="instanceMatrix"&&E.instanceMatrix&&(lt=E.instanceMatrix),tt==="instanceColor"&&E.instanceColor&&(lt=E.instanceColor)),lt!==void 0){let dt=lt.normalized,Rt=lt.itemSize,te=t.get(lt);if(te===void 0)continue;let ge=te.buffer,Ie=te.type,ce=te.bytesPerElement,q=Ie===i.INT||Ie===i.UNSIGNED_INT||lt.gpuType===ga;if(lt.isInterleavedBufferAttribute){let Y=lt.data,St=Y.stride,Pt=lt.offset;if(Y.isInstancedInterleavedBuffer){for(let yt=0;yt<k.locationSize;yt++)p(k.location+yt,Y.meshPerAttribute);E.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=Y.meshPerAttribute*Y.count)}else for(let yt=0;yt<k.locationSize;yt++)g(k.location+yt);i.bindBuffer(i.ARRAY_BUFFER,ge);for(let yt=0;yt<k.locationSize;yt++)w(k.location+yt,Rt/k.locationSize,Ie,dt,St*ce,(Pt+Rt/k.locationSize*yt)*ce,q)}else{if(lt.isInstancedBufferAttribute){for(let Y=0;Y<k.locationSize;Y++)p(k.location+Y,lt.meshPerAttribute);E.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=lt.meshPerAttribute*lt.count)}else for(let Y=0;Y<k.locationSize;Y++)g(k.location+Y);i.bindBuffer(i.ARRAY_BUFFER,ge);for(let Y=0;Y<k.locationSize;Y++)w(k.location+Y,Rt/k.locationSize,Ie,dt,Rt*ce,Rt/k.locationSize*Y*ce,q)}}else if(z!==void 0){let dt=z[tt];if(dt!==void 0)switch(dt.length){case 2:i.vertexAttrib2fv(k.location,dt);break;case 3:i.vertexAttrib3fv(k.location,dt);break;case 4:i.vertexAttrib4fv(k.location,dt);break;default:i.vertexAttrib1fv(k.location,dt)}}}}A()}function v(){R();for(let E in n){let P=n[E];for(let D in P){let H=P[D];for(let O in H)h(H[O].object),delete H[O];delete P[D]}delete n[E]}}function M(E){if(n[E.id]===void 0)return;let P=n[E.id];for(let D in P){let H=P[D];for(let O in H)h(H[O].object),delete H[O];delete P[D]}delete n[E.id]}function b(E){for(let P in n){let D=n[P];if(D[E.id]===void 0)continue;let H=D[E.id];for(let O in H)h(H[O].object),delete H[O];delete D[E.id]}}function R(){S(),o=!0,s!==r&&(s=r,c(s.object))}function S(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:R,resetDefaultState:S,dispose:v,releaseStatesOfGeometry:M,releaseStatesOfProgram:b,initAttributes:y,enableAttribute:g,disableUnusedAttributes:A}}function i0(i,t,e){let n;function r(c){n=c}function s(c,h){i.drawArrays(n,c,h),e.update(h,n,1)}function o(c,h,u){u!==0&&(i.drawArraysInstanced(n,c,h,u),e.update(h,n,u))}function a(c,h,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,u);let d=0;for(let x=0;x<u;x++)d+=h[x];e.update(d,n,1)}function l(c,h,u,f){if(u===0)return;let d=t.get("WEBGL_multi_draw");if(d===null)for(let x=0;x<c.length;x++)o(c[x],h[x],f[x]);else{d.multiDrawArraysInstancedWEBGL(n,c,0,h,0,f,0,u);let x=0;for(let y=0;y<u;y++)x+=h[y]*f[y];e.update(x,n,1)}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function r0(i,t,e,n){let r;function s(){if(r!==void 0)return r;if(t.has("EXT_texture_filter_anisotropic")===!0){let b=t.get("EXT_texture_filter_anisotropic");r=i.getParameter(b.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(b){return!(b!==On&&n.convert(b)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(b){let R=b===Nn&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(b!==ti&&n.convert(b)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&b!==ei&&!R)}function l(b){if(b==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";b="mediump"}return b==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp",h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let u=e.logarithmicDepthBuffer===!0,f=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),d=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),x=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),y=i.getParameter(i.MAX_TEXTURE_SIZE),g=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),A=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),w=i.getParameter(i.MAX_VARYING_VECTORS),m=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),v=x>0,M=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:u,reversedDepthBuffer:f,maxTextures:d,maxVertexTextures:x,maxTextureSize:y,maxCubemapSize:g,maxAttributes:p,maxVertexUniforms:A,maxVaryings:w,maxFragmentUniforms:m,vertexTextures:v,maxSamples:M}}function s0(i){let t=this,e=null,n=0,r=!1,s=!1,o=new gn,a=new $t,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,f){let d=u.length!==0||f||n!==0||r;return r=f,n=u.length,d},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(u,f){e=h(u,f,0)},this.setState=function(u,f,d){let x=u.clippingPlanes,y=u.clipIntersection,g=u.clipShadows,p=i.get(u);if(!r||x===null||x.length===0||s&&!g)s?h(null):c();else{let A=s?0:n,w=A*4,m=p.clippingState||null;l.value=m,m=h(x,f,w,d);for(let v=0;v!==w;++v)m[v]=e[v];p.clippingState=m,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=A}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,f,d,x){let y=u!==null?u.length:0,g=null;if(y!==0){if(g=l.value,x!==!0||g===null){let p=d+y*4,A=f.matrixWorldInverse;a.getNormalMatrix(A),(g===null||g.length<p)&&(g=new Float32Array(p));for(let w=0,m=d;w!==y;++w,m+=4)o.copy(u[w]).applyMatrix4(A,a),o.normal.toArray(g,m),g[m+3]=o.constant}l.value=g,l.needsUpdate=!0}return t.numPlanes=y,t.numIntersection=0,g}}function o0(i){let t=new WeakMap;function e(o,a){return a===da?o.mapping=Zi:a===pa&&(o.mapping=Qi),o}function n(o){if(o&&o.isTexture){let a=o.mapping;if(a===da||a===pa)if(t.has(o)){let l=t.get(o).texture;return e(l,o.mapping)}else{let l=o.image;if(l&&l.height>0){let c=new Uo(l.height);return c.fromEquirectangularTexture(i,o),t.set(o,c),o.addEventListener("dispose",r),e(c.texture,o.mapping)}else return null}}return o}function r(o){let a=o.target;a.removeEventListener("dispose",r);let l=t.get(a);l!==void 0&&(t.delete(a),l.dispose())}function s(){t=new WeakMap}return{get:n,dispose:s}}var Xr=4,uu=[.125,.215,.35,.446,.526,.582],ir=20,Sc=new zr,fu=new vt,_c=null,bc=0,Ec=0,wc=!1,nr=(1+Math.sqrt(5))/2,Wr=1/nr,du=[new F(-nr,Wr,0),new F(nr,Wr,0),new F(-Wr,0,nr),new F(Wr,0,nr),new F(0,nr,-Wr),new F(0,nr,Wr),new F(-1,1,-1),new F(1,1,-1),new F(-1,1,1),new F(1,1,1)],a0=new F,$a=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,r=100,s={}){let{size:o=256,position:a=a0}=s;_c=this._renderer.getRenderTarget(),bc=this._renderer.getActiveCubeFace(),Ec=this._renderer.getActiveMipmapLevel(),wc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(t,n,r,l,a),e>0&&this._blur(l,0,0,e),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=gu(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=mu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(_c,bc,Ec),this._renderer.xr.enabled=wc,t.scissorTest=!1,Za(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Zi||t.mapping===Qi?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),_c=this._renderer.getRenderTarget(),bc=this._renderer.getActiveCubeFace(),Ec=this._renderer.getActiveMipmapLevel(),wc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Gn,minFilter:Gn,generateMipmaps:!1,type:Nn,format:On,colorSpace:Xi,depthBuffer:!1},r=pu(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=pu(t,e,n);let{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=l0(s)),this._blurMaterial=c0(s,t,e)}return r}_compileMaterial(t){let e=new Wt(this._lodPlanes[0],t);this._renderer.compile(e,Sc)}_sceneToCubeUV(t,e,n,r,s){let l=new tn(90,1,e,n),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],u=this._renderer,f=u.autoClear,d=u.toneMapping;u.getClearColor(fu),u.toneMapping=gi,u.autoClear=!1,u.state.buffers.depth.getReversed()&&(u.setRenderTarget(r),u.clearDepth(),u.setRenderTarget(null));let y=new Re({name:"PMREM.Background",side:on,depthWrite:!1,depthTest:!1}),g=new Wt(new We,y),p=!1,A=t.background;A?A.isColor&&(y.color.copy(A),t.background=null,p=!0):(y.color.copy(fu),p=!0);for(let w=0;w<6;w++){let m=w%3;m===0?(l.up.set(0,c[w],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+h[w],s.y,s.z)):m===1?(l.up.set(0,0,c[w]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+h[w],s.z)):(l.up.set(0,c[w],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+h[w]));let v=this._cubeSize;Za(r,m*v,w>2?v:0,v,v),u.setRenderTarget(r),p&&u.render(g,l),u.render(t,l)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=d,u.autoClear=f,t.background=A}_textureToCubeUV(t,e){let n=this._renderer,r=t.mapping===Zi||t.mapping===Qi;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=gu()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=mu());let s=r?this._cubemapMaterial:this._equirectMaterial,o=new Wt(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=t;let l=this._cubeSize;Za(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(o,Sc)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let r=this._lodPlanes.length;for(let s=1;s<r;s++){let o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=du[(r-s-1)%du.length];this._blur(t,s-1,s,o,a)}e.autoClear=n}_blur(t,e,n,r,s){let o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,r,"latitudinal",s),this._halfBlur(o,t,n,n,r,"longitudinal",s)}_halfBlur(t,e,n,r,s,o,a){let l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,u=new Wt(this._lodPlanes[r],c),f=c.uniforms,d=this._sizeLods[n]-1,x=isFinite(s)?Math.PI/(2*d):2*Math.PI/(2*ir-1),y=s/x,g=isFinite(s)?1+Math.floor(h*y):ir;g>ir&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${ir}`);let p=[],A=0;for(let b=0;b<ir;++b){let R=b/y,S=Math.exp(-R*R/2);p.push(S),b===0?A+=S:b<g&&(A+=2*S)}for(let b=0;b<p.length;b++)p[b]=p[b]/A;f.envMap.value=t.texture,f.samples.value=g,f.weights.value=p,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);let{_lodMax:w}=this;f.dTheta.value=x,f.mipInt.value=w-n;let m=this._sizeLods[r],v=3*m*(r>w-Xr?r-w+Xr:0),M=4*(this._cubeSize-m);Za(e,v,M,3*m,2*m),l.setRenderTarget(e),l.render(u,Sc)}};function l0(i){let t=[],e=[],n=[],r=i,s=i-Xr+1+uu.length;for(let o=0;o<s;o++){let a=Math.pow(2,r);e.push(a);let l=1/a;o>i-Xr?l=uu[o-i+Xr-1]:o===0&&(l=0),n.push(l);let c=1/(a-2),h=-c,u=1+c,f=[h,h,u,h,u,u,h,h,u,u,h,u],d=6,x=6,y=3,g=2,p=1,A=new Float32Array(y*x*d),w=new Float32Array(g*x*d),m=new Float32Array(p*x*d);for(let M=0;M<d;M++){let b=M%3*2/3-1,R=M>2?0:-1,S=[b,R,0,b+2/3,R,0,b+2/3,R+1,0,b,R,0,b+2/3,R+1,0,b,R+1,0];A.set(S,y*x*M),w.set(f,g*x*M);let E=[M,M,M,M,M,M];m.set(E,p*x*M)}let v=new Ce;v.setAttribute("position",new Le(A,y)),v.setAttribute("uv",new Le(w,g)),v.setAttribute("faceIndex",new Le(m,p)),t.push(v),r>Xr&&r--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function pu(i,t,e){let n=new en(i,t,e);return n.texture.mapping=Bs,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Za(i,t,e,n,r){i.viewport.set(t,e,n,r),i.scissor.set(t,e,n,r)}function c0(i,t,e){let n=new Float32Array(ir),r=new F(0,1,0);return new Se({name:"SphericalGaussianBlur",defines:{n:ir,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Lc(),fragmentShader:`

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
		`,blending:Xn,depthTest:!1,depthWrite:!1})}function mu(){return new Se({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Lc(),fragmentShader:`

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
		`,blending:Xn,depthTest:!1,depthWrite:!1})}function gu(){return new Se({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Lc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Xn,depthTest:!1,depthWrite:!1})}function Lc(){return`

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
	`}function h0(i){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){let l=a.mapping,c=l===da||l===pa,h=l===Zi||l===Qi;if(c||h){let u=t.get(a),f=u!==void 0?u.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==f)return e===null&&(e=new $a(i)),u=c?e.fromEquirectangular(a,u):e.fromCubemap(a,u),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),u.texture;if(u!==void 0)return u.texture;{let d=a.image;return c&&d&&d.height>0||h&&d&&r(d)?(e===null&&(e=new $a(i)),u=c?e.fromEquirectangular(a):e.fromCubemap(a),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),a.addEventListener("dispose",s),u.texture):null}}}return a}function r(a){let l=0,c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function s(a){let l=a.target;l.removeEventListener("dispose",s);let c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function u0(i){let t={};function e(n){if(t[n]!==void 0)return t[n];let r;switch(n){case"WEBGL_depth_texture":r=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=i.getExtension(n)}return t[n]=r,r}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let r=e(n);return r===null&&Rr("THREE.WebGLRenderer: "+n+" extension not supported."),r}}}function f0(i,t,e,n){let r={},s=new WeakMap;function o(u){let f=u.target;f.index!==null&&t.remove(f.index);for(let x in f.attributes)t.remove(f.attributes[x]);f.removeEventListener("dispose",o),delete r[f.id];let d=s.get(f);d&&(t.remove(d),s.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function a(u,f){return r[f.id]===!0||(f.addEventListener("dispose",o),r[f.id]=!0,e.memory.geometries++),f}function l(u){let f=u.attributes;for(let d in f)t.update(f[d],i.ARRAY_BUFFER)}function c(u){let f=[],d=u.index,x=u.attributes.position,y=0;if(d!==null){let A=d.array;y=d.version;for(let w=0,m=A.length;w<m;w+=3){let v=A[w+0],M=A[w+1],b=A[w+2];f.push(v,M,M,b,b,v)}}else if(x!==void 0){let A=x.array;y=x.version;for(let w=0,m=A.length/3-1;w<m;w+=3){let v=w+0,M=w+1,b=w+2;f.push(v,M,M,b,b,v)}}else return;let g=new(mc(f)?gs:ms)(f,1);g.version=y;let p=s.get(u);p&&t.remove(p),s.set(u,g)}function h(u){let f=s.get(u);if(f){let d=u.index;d!==null&&f.version<d.version&&c(u)}else c(u);return s.get(u)}return{get:a,update:l,getWireframeAttribute:h}}function d0(i,t,e){let n;function r(f){n=f}let s,o;function a(f){s=f.type,o=f.bytesPerElement}function l(f,d){i.drawElements(n,d,s,f*o),e.update(d,n,1)}function c(f,d,x){x!==0&&(i.drawElementsInstanced(n,d,s,f*o,x),e.update(d,n,x))}function h(f,d,x){if(x===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,s,f,0,x);let g=0;for(let p=0;p<x;p++)g+=d[p];e.update(g,n,1)}function u(f,d,x,y){if(x===0)return;let g=t.get("WEBGL_multi_draw");if(g===null)for(let p=0;p<f.length;p++)c(f[p]/o,d[p],y[p]);else{g.multiDrawElementsInstancedWEBGL(n,d,0,s,f,0,y,0,x);let p=0;for(let A=0;A<x;A++)p+=d[A]*y[A];e.update(p,n,1)}}this.setMode=r,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function p0(i){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,a){switch(e.calls++,o){case i.TRIANGLES:e.triangles+=a*(s/3);break;case i.LINES:e.lines+=a*(s/2);break;case i.LINE_STRIP:e.lines+=a*(s-1);break;case i.LINE_LOOP:e.lines+=a*s;break;case i.POINTS:e.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:r,update:n}}function m0(i,t,e){let n=new WeakMap,r=new De;function s(o,a,l){let c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0,f=n.get(a);if(f===void 0||f.count!==u){let S=function(){b.dispose(),n.delete(a),a.removeEventListener("dispose",S)};f!==void 0&&f.texture.dispose();let d=a.morphAttributes.position!==void 0,x=a.morphAttributes.normal!==void 0,y=a.morphAttributes.color!==void 0,g=a.morphAttributes.position||[],p=a.morphAttributes.normal||[],A=a.morphAttributes.color||[],w=0;d===!0&&(w=1),x===!0&&(w=2),y===!0&&(w=3);let m=a.attributes.position.count*w,v=1;m>t.maxTextureSize&&(v=Math.ceil(m/t.maxTextureSize),m=t.maxTextureSize);let M=new Float32Array(m*v*4*u),b=new ps(M,m,v,u);b.type=ei,b.needsUpdate=!0;let R=w*4;for(let E=0;E<u;E++){let P=g[E],D=p[E],H=A[E],O=m*v*4*E;for(let X=0;X<P.count;X++){let z=X*R;d===!0&&(r.fromBufferAttribute(P,X),M[O+z+0]=r.x,M[O+z+1]=r.y,M[O+z+2]=r.z,M[O+z+3]=0),x===!0&&(r.fromBufferAttribute(D,X),M[O+z+4]=r.x,M[O+z+5]=r.y,M[O+z+6]=r.z,M[O+z+7]=0),y===!0&&(r.fromBufferAttribute(H,X),M[O+z+8]=r.x,M[O+z+9]=r.y,M[O+z+10]=r.z,M[O+z+11]=H.itemSize===4?r.w:1)}}f={count:u,texture:b,size:new nt(m,v)},n.set(a,f),a.addEventListener("dispose",S)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",o.morphTexture,e);else{let d=0;for(let y=0;y<c.length;y++)d+=c[y];let x=a.morphTargetsRelative?1:1-d;l.getUniforms().setValue(i,"morphTargetBaseInfluence",x),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",f.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",f.size)}return{update:s}}function g0(i,t,e,n){let r=new WeakMap;function s(l){let c=n.render.frame,h=l.geometry,u=t.get(l,h);if(r.get(u)!==c&&(t.update(u),r.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==c&&(e.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,i.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){let f=l.skeleton;r.get(f)!==c&&(f.update(),r.set(f,c))}return u}function o(){r=new WeakMap}function a(l){let c=l.target;c.removeEventListener("dispose",a),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:s,dispose:o}}var Lu=new sn,xu=new bs(1,1),Nu=new ps,Ou=new Po,Bu=new vs,vu=[],yu=[],Mu=new Float32Array(16),Su=new Float32Array(9),_u=new Float32Array(4);function jr(i,t,e){let n=i[0];if(n<=0||n>0)return i;let r=t*e,s=vu[r];if(s===void 0&&(s=new Float32Array(r),vu[r]=s),t!==0){n.toArray(s,0);for(let o=1,a=0;o!==t;++o)a+=e,i[o].toArray(s,a)}return s}function Ye(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Ze(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function el(i,t){let e=yu[t];e===void 0&&(e=new Int32Array(t),yu[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function x0(i,t){let e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function v0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ye(e,t))return;i.uniform2fv(this.addr,t),Ze(e,t)}}function y0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Ye(e,t))return;i.uniform3fv(this.addr,t),Ze(e,t)}}function M0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ye(e,t))return;i.uniform4fv(this.addr,t),Ze(e,t)}}function S0(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Ye(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Ze(e,t)}else{if(Ye(e,n))return;_u.set(n),i.uniformMatrix2fv(this.addr,!1,_u),Ze(e,n)}}function _0(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Ye(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Ze(e,t)}else{if(Ye(e,n))return;Su.set(n),i.uniformMatrix3fv(this.addr,!1,Su),Ze(e,n)}}function b0(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Ye(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Ze(e,t)}else{if(Ye(e,n))return;Mu.set(n),i.uniformMatrix4fv(this.addr,!1,Mu),Ze(e,n)}}function E0(i,t){let e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function w0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ye(e,t))return;i.uniform2iv(this.addr,t),Ze(e,t)}}function A0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ye(e,t))return;i.uniform3iv(this.addr,t),Ze(e,t)}}function T0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ye(e,t))return;i.uniform4iv(this.addr,t),Ze(e,t)}}function R0(i,t){let e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function C0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ye(e,t))return;i.uniform2uiv(this.addr,t),Ze(e,t)}}function I0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ye(e,t))return;i.uniform3uiv(this.addr,t),Ze(e,t)}}function P0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ye(e,t))return;i.uniform4uiv(this.addr,t),Ze(e,t)}}function F0(i,t,e){let n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r);let s;this.type===i.SAMPLER_2D_SHADOW?(xu.compareFunction=dc,s=xu):s=Lu,e.setTexture2D(t||s,r)}function U0(i,t,e){let n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),e.setTexture3D(t||Ou,r)}function D0(i,t,e){let n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),e.setTextureCube(t||Bu,r)}function L0(i,t,e){let n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),e.setTexture2DArray(t||Nu,r)}function N0(i){switch(i){case 5126:return x0;case 35664:return v0;case 35665:return y0;case 35666:return M0;case 35674:return S0;case 35675:return _0;case 35676:return b0;case 5124:case 35670:return E0;case 35667:case 35671:return w0;case 35668:case 35672:return A0;case 35669:case 35673:return T0;case 5125:return R0;case 36294:return C0;case 36295:return I0;case 36296:return P0;case 35678:case 36198:case 36298:case 36306:case 35682:return F0;case 35679:case 36299:case 36307:return U0;case 35680:case 36300:case 36308:case 36293:return D0;case 36289:case 36303:case 36311:case 36292:return L0}}function O0(i,t){i.uniform1fv(this.addr,t)}function B0(i,t){let e=jr(t,this.size,2);i.uniform2fv(this.addr,e)}function z0(i,t){let e=jr(t,this.size,3);i.uniform3fv(this.addr,e)}function H0(i,t){let e=jr(t,this.size,4);i.uniform4fv(this.addr,e)}function k0(i,t){let e=jr(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function G0(i,t){let e=jr(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function V0(i,t){let e=jr(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function W0(i,t){i.uniform1iv(this.addr,t)}function X0(i,t){i.uniform2iv(this.addr,t)}function K0(i,t){i.uniform3iv(this.addr,t)}function j0(i,t){i.uniform4iv(this.addr,t)}function q0(i,t){i.uniform1uiv(this.addr,t)}function J0(i,t){i.uniform2uiv(this.addr,t)}function Y0(i,t){i.uniform3uiv(this.addr,t)}function Z0(i,t){i.uniform4uiv(this.addr,t)}function Q0(i,t,e){let n=this.cache,r=t.length,s=el(e,r);Ye(n,s)||(i.uniform1iv(this.addr,s),Ze(n,s));for(let o=0;o!==r;++o)e.setTexture2D(t[o]||Lu,s[o])}function $0(i,t,e){let n=this.cache,r=t.length,s=el(e,r);Ye(n,s)||(i.uniform1iv(this.addr,s),Ze(n,s));for(let o=0;o!==r;++o)e.setTexture3D(t[o]||Ou,s[o])}function tg(i,t,e){let n=this.cache,r=t.length,s=el(e,r);Ye(n,s)||(i.uniform1iv(this.addr,s),Ze(n,s));for(let o=0;o!==r;++o)e.setTextureCube(t[o]||Bu,s[o])}function eg(i,t,e){let n=this.cache,r=t.length,s=el(e,r);Ye(n,s)||(i.uniform1iv(this.addr,s),Ze(n,s));for(let o=0;o!==r;++o)e.setTexture2DArray(t[o]||Nu,s[o])}function ng(i){switch(i){case 5126:return O0;case 35664:return B0;case 35665:return z0;case 35666:return H0;case 35674:return k0;case 35675:return G0;case 35676:return V0;case 5124:case 35670:return W0;case 35667:case 35671:return X0;case 35668:case 35672:return K0;case 35669:case 35673:return j0;case 5125:return q0;case 36294:return J0;case 36295:return Y0;case 36296:return Z0;case 35678:case 36198:case 36298:case 36306:case 35682:return Q0;case 35679:case 36299:case 36307:return $0;case 35680:case 36300:case 36308:case 36293:return tg;case 36289:case 36303:case 36311:case 36292:return eg}}var Tc=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=N0(e.type)}},Rc=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=ng(e.type)}},Cc=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let r=this.seq;for(let s=0,o=r.length;s!==o;++s){let a=r[s];a.setValue(t,e[a.id],n)}}},Ac=/(\w+)(\])?(\[|\.)?/g;function bu(i,t){i.seq.push(t),i.map[t.id]=t}function ig(i,t,e){let n=i.name,r=n.length;for(Ac.lastIndex=0;;){let s=Ac.exec(n),o=Ac.lastIndex,a=s[1],l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){bu(e,c===void 0?new Tc(a,i,t):new Rc(a,i,t));break}else{let u=e.map[a];u===void 0&&(u=new Cc(a),bu(e,u)),e=u}}}var Kr=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){let s=t.getActiveUniform(e,r),o=t.getUniformLocation(e,s.name);ig(s,o,this)}}setValue(t,e,n,r){let s=this.map[e];s!==void 0&&s.setValue(t,n,r)}setOptional(t,e,n){let r=e[n];r!==void 0&&this.setValue(t,n,r)}static upload(t,e,n,r){for(let s=0,o=e.length;s!==o;++s){let a=e[s],l=n[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,r)}}static seqWithValue(t,e){let n=[];for(let r=0,s=t.length;r!==s;++r){let o=t[r];o.id in e&&n.push(o)}return n}};function Eu(i,t,e){let n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}var rg=37297,sg=0;function og(i,t){let e=i.split(`
`),n=[],r=Math.max(t-6,0),s=Math.min(t+6,e.length);for(let o=r;o<s;o++){let a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}var wu=new $t;function ag(i){fe._getMatrix(wu,fe.workingColorSpace,i);let t=`mat3( ${wu.elements.map(e=>e.toFixed(4))} )`;switch(fe.getTransfer(i)){case us:return[t,"LinearTransferOETF"];case Me:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function Au(i,t,e){let n=i.getShaderParameter(t,i.COMPILE_STATUS),s=(i.getShaderInfoLog(t)||"").trim();if(n&&s==="")return"";let o=/ERROR: 0:(\d+)/.exec(s);if(o){let a=parseInt(o[1]);return e.toUpperCase()+`

`+s+`

`+og(i.getShaderSource(t),a)}else return s}function lg(i,t){let e=ag(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function cg(i,t){let e;switch(t){case aa:e="Linear";break;case la:e="Reinhard";break;case ca:e="Cineon";break;case Hr:e="ACESFilmic";break;case ua:e="AgX";break;case fa:e="Neutral";break;case ha:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var Qa=new F;function hg(){fe.getLuminanceCoefficients(Qa);let i=Qa.x.toFixed(4),t=Qa.y.toFixed(4),e=Qa.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function ug(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ws).join(`
`)}function fg(i){let t=[];for(let e in i){let n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function dg(i,t){let e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){let s=i.getActiveAttrib(t,r),o=s.name,a=1;s.type===i.FLOAT_MAT2&&(a=2),s.type===i.FLOAT_MAT3&&(a=3),s.type===i.FLOAT_MAT4&&(a=4),e[o]={type:s.type,location:i.getAttribLocation(t,o),locationSize:a}}return e}function Ws(i){return i!==""}function Tu(i,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Ru(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var pg=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ic(i){return i.replace(pg,gg)}var mg=new Map;function gg(i,t){let e=ee[t];if(e===void 0){let n=mg.get(t);if(n!==void 0)e=ee[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return Ic(e)}var xg=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Cu(i){return i.replace(xg,vg)}function vg(i,t,e,n){let r="";for(let s=parseInt(t);s<parseInt(e);s++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Iu(i){let t=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function yg(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===tc?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===bh?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===$n&&(t="SHADOWMAP_TYPE_VSM"),t}function Mg(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Zi:case Qi:t="ENVMAP_TYPE_CUBE";break;case Bs:t="ENVMAP_TYPE_CUBE_UV";break}return t}function Sg(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case Qi:t="ENVMAP_MODE_REFRACTION";break}return t}function _g(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case ic:t="ENVMAP_BLENDING_MULTIPLY";break;case Gh:t="ENVMAP_BLENDING_MIX";break;case Vh:t="ENVMAP_BLENDING_ADD";break}return t}function bg(i){let t=i.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function Eg(i,t,e,n){let r=i.getContext(),s=e.defines,o=e.vertexShader,a=e.fragmentShader,l=yg(e),c=Mg(e),h=Sg(e),u=_g(e),f=bg(e),d=ug(e),x=fg(s),y=r.createProgram(),g,p,A=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(g=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,x].filter(Ws).join(`
`),g.length>0&&(g+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,x].filter(Ws).join(`
`),p.length>0&&(p+=`
`)):(g=[Iu(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,x,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ws).join(`
`),p=[Iu(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,x,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==gi?"#define TONE_MAPPING":"",e.toneMapping!==gi?ee.tonemapping_pars_fragment:"",e.toneMapping!==gi?cg("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",ee.colorspace_pars_fragment,lg("linearToOutputTexel",e.outputColorSpace),hg(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Ws).join(`
`)),o=Ic(o),o=Tu(o,e),o=Ru(o,e),a=Ic(a),a=Tu(a,e),a=Ru(a,e),o=Cu(o),a=Cu(a),e.isRawShaderMaterial!==!0&&(A=`#version 300 es
`,g=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,p=["#define varying in",e.glslVersion===pc?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===pc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let w=A+g+o,m=A+p+a,v=Eu(r,r.VERTEX_SHADER,w),M=Eu(r,r.FRAGMENT_SHADER,m);r.attachShader(y,v),r.attachShader(y,M),e.index0AttributeName!==void 0?r.bindAttribLocation(y,0,e.index0AttributeName):e.morphTargets===!0&&r.bindAttribLocation(y,0,"position"),r.linkProgram(y);function b(P){if(i.debug.checkShaderErrors){let D=r.getProgramInfoLog(y)||"",H=r.getShaderInfoLog(v)||"",O=r.getShaderInfoLog(M)||"",X=D.trim(),z=H.trim(),tt=O.trim(),k=!0,lt=!0;if(r.getProgramParameter(y,r.LINK_STATUS)===!1)if(k=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,y,v,M);else{let dt=Au(r,v,"vertex"),Rt=Au(r,M,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(y,r.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+X+`
`+dt+`
`+Rt)}else X!==""?console.warn("THREE.WebGLProgram: Program Info Log:",X):(z===""||tt==="")&&(lt=!1);lt&&(P.diagnostics={runnable:k,programLog:X,vertexShader:{log:z,prefix:g},fragmentShader:{log:tt,prefix:p}})}r.deleteShader(v),r.deleteShader(M),R=new Kr(r,y),S=dg(r,y)}let R;this.getUniforms=function(){return R===void 0&&b(this),R};let S;this.getAttributes=function(){return S===void 0&&b(this),S};let E=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return E===!1&&(E=r.getProgramParameter(y,rg)),E},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(y),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=sg++,this.cacheKey=t,this.usedTimes=1,this.program=y,this.vertexShader=v,this.fragmentShader=M,this}var wg=0,Pc=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){let e=t.vertexShader,n=t.fragmentShader,r=this._getShaderStage(e),s=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new Fc(t),e.set(t,n)),n}},Fc=class{constructor(t){this.id=wg++,this.code=t,this.usedTimes=0}};function Ag(i,t,e,n,r,s,o){let a=new Pr,l=new Pc,c=new Set,h=[],u=r.logarithmicDepthBuffer,f=r.vertexTextures,d=r.precision,x={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function y(S){return c.add(S),S===0?"uv":`uv${S}`}function g(S,E,P,D,H){let O=D.fog,X=H.geometry,z=S.isMeshStandardMaterial?D.environment:null,tt=(S.isMeshStandardMaterial?e:t).get(S.envMap||z),k=tt&&tt.mapping===Bs?tt.image.height:null,lt=x[S.type];S.precision!==null&&(d=r.getMaxPrecision(S.precision),d!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",d,"instead."));let dt=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,Rt=dt!==void 0?dt.length:0,te=0;X.morphAttributes.position!==void 0&&(te=1),X.morphAttributes.normal!==void 0&&(te=2),X.morphAttributes.color!==void 0&&(te=3);let ge,Ie,ce,q;if(lt){let ve=ni[lt];ge=ve.vertexShader,Ie=ve.fragmentShader}else ge=S.vertexShader,Ie=S.fragmentShader,l.update(S),ce=l.getVertexShaderID(S),q=l.getFragmentShaderID(S);let Y=i.getRenderTarget(),St=i.state.buffers.depth.getReversed(),Pt=H.isInstancedMesh===!0,yt=H.isBatchedMesh===!0,oe=!!S.map,qe=!!S.matcap,I=!!tt,ie=!!S.aoMap,Ft=!!S.lightMap,Dt=!!S.bumpMap,xt=!!S.normalMap,re=!!S.displacementMap,bt=!!S.emissiveMap,Kt=!!S.metalnessMap,Ne=!!S.roughnessMap,Zt=S.anisotropy>0,C=S.clearcoat>0,_=S.dispersion>0,B=S.iridescence>0,j=S.sheen>0,et=S.transmission>0,K=Zt&&!!S.anisotropyMap,At=C&&!!S.clearcoatMap,rt=C&&!!S.clearcoatNormalMap,Tt=C&&!!S.clearcoatRoughnessMap,It=B&&!!S.iridescenceMap,ot=B&&!!S.iridescenceThicknessMap,pt=j&&!!S.sheenColorMap,Ot=j&&!!S.sheenRoughnessMap,Et=!!S.specularMap,ft=!!S.specularColorMap,jt=!!S.specularIntensityMap,U=et&&!!S.transmissionMap,st=et&&!!S.thicknessMap,ct=!!S.gradientMap,Mt=!!S.alphaMap,it=S.alphaTest>0,J=!!S.alphaHash,wt=!!S.extensions,qt=gi;S.toneMapped&&(Y===null||Y.isXRRenderTarget===!0)&&(qt=i.toneMapping);let xe={shaderID:lt,shaderType:S.type,shaderName:S.name,vertexShader:ge,fragmentShader:Ie,defines:S.defines,customVertexShaderID:ce,customFragmentShaderID:q,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:d,batching:yt,batchingColor:yt&&H._colorsTexture!==null,instancing:Pt,instancingColor:Pt&&H.instanceColor!==null,instancingMorph:Pt&&H.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:Y===null?i.outputColorSpace:Y.isXRRenderTarget===!0?Y.texture.colorSpace:Xi,alphaToCoverage:!!S.alphaToCoverage,map:oe,matcap:qe,envMap:I,envMapMode:I&&tt.mapping,envMapCubeUVHeight:k,aoMap:ie,lightMap:Ft,bumpMap:Dt,normalMap:xt,displacementMap:f&&re,emissiveMap:bt,normalMapObjectSpace:xt&&S.normalMapType===qh,normalMapTangentSpace:xt&&S.normalMapType===jh,metalnessMap:Kt,roughnessMap:Ne,anisotropy:Zt,anisotropyMap:K,clearcoat:C,clearcoatMap:At,clearcoatNormalMap:rt,clearcoatRoughnessMap:Tt,dispersion:_,iridescence:B,iridescenceMap:It,iridescenceThicknessMap:ot,sheen:j,sheenColorMap:pt,sheenRoughnessMap:Ot,specularMap:Et,specularColorMap:ft,specularIntensityMap:jt,transmission:et,transmissionMap:U,thicknessMap:st,gradientMap:ct,opaque:S.transparent===!1&&S.blending===Vi&&S.alphaToCoverage===!1,alphaMap:Mt,alphaTest:it,alphaHash:J,combine:S.combine,mapUv:oe&&y(S.map.channel),aoMapUv:ie&&y(S.aoMap.channel),lightMapUv:Ft&&y(S.lightMap.channel),bumpMapUv:Dt&&y(S.bumpMap.channel),normalMapUv:xt&&y(S.normalMap.channel),displacementMapUv:re&&y(S.displacementMap.channel),emissiveMapUv:bt&&y(S.emissiveMap.channel),metalnessMapUv:Kt&&y(S.metalnessMap.channel),roughnessMapUv:Ne&&y(S.roughnessMap.channel),anisotropyMapUv:K&&y(S.anisotropyMap.channel),clearcoatMapUv:At&&y(S.clearcoatMap.channel),clearcoatNormalMapUv:rt&&y(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Tt&&y(S.clearcoatRoughnessMap.channel),iridescenceMapUv:It&&y(S.iridescenceMap.channel),iridescenceThicknessMapUv:ot&&y(S.iridescenceThicknessMap.channel),sheenColorMapUv:pt&&y(S.sheenColorMap.channel),sheenRoughnessMapUv:Ot&&y(S.sheenRoughnessMap.channel),specularMapUv:Et&&y(S.specularMap.channel),specularColorMapUv:ft&&y(S.specularColorMap.channel),specularIntensityMapUv:jt&&y(S.specularIntensityMap.channel),transmissionMapUv:U&&y(S.transmissionMap.channel),thicknessMapUv:st&&y(S.thicknessMap.channel),alphaMapUv:Mt&&y(S.alphaMap.channel),vertexTangents:!!X.attributes.tangent&&(xt||Zt),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,pointsUvs:H.isPoints===!0&&!!X.attributes.uv&&(oe||Mt),fog:!!O,useFog:S.fog===!0,fogExp2:!!O&&O.isFogExp2,flatShading:S.flatShading===!0&&S.wireframe===!1,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:St,skinning:H.isSkinnedMesh===!0,morphTargets:X.morphAttributes.position!==void 0,morphNormals:X.morphAttributes.normal!==void 0,morphColors:X.morphAttributes.color!==void 0,morphTargetsCount:Rt,morphTextureStride:te,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:S.dithering,shadowMapEnabled:i.shadowMap.enabled&&P.length>0,shadowMapType:i.shadowMap.type,toneMapping:qt,decodeVideoTexture:oe&&S.map.isVideoTexture===!0&&fe.getTransfer(S.map.colorSpace)===Me,decodeVideoTextureEmissive:bt&&S.emissiveMap.isVideoTexture===!0&&fe.getTransfer(S.emissiveMap.colorSpace)===Me,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===Xe,flipSided:S.side===on,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionClipCullDistance:wt&&S.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(wt&&S.extensions.multiDraw===!0||yt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return xe.vertexUv1s=c.has(1),xe.vertexUv2s=c.has(2),xe.vertexUv3s=c.has(3),c.clear(),xe}function p(S){let E=[];if(S.shaderID?E.push(S.shaderID):(E.push(S.customVertexShaderID),E.push(S.customFragmentShaderID)),S.defines!==void 0)for(let P in S.defines)E.push(P),E.push(S.defines[P]);return S.isRawShaderMaterial===!1&&(A(E,S),w(E,S),E.push(i.outputColorSpace)),E.push(S.customProgramCacheKey),E.join()}function A(S,E){S.push(E.precision),S.push(E.outputColorSpace),S.push(E.envMapMode),S.push(E.envMapCubeUVHeight),S.push(E.mapUv),S.push(E.alphaMapUv),S.push(E.lightMapUv),S.push(E.aoMapUv),S.push(E.bumpMapUv),S.push(E.normalMapUv),S.push(E.displacementMapUv),S.push(E.emissiveMapUv),S.push(E.metalnessMapUv),S.push(E.roughnessMapUv),S.push(E.anisotropyMapUv),S.push(E.clearcoatMapUv),S.push(E.clearcoatNormalMapUv),S.push(E.clearcoatRoughnessMapUv),S.push(E.iridescenceMapUv),S.push(E.iridescenceThicknessMapUv),S.push(E.sheenColorMapUv),S.push(E.sheenRoughnessMapUv),S.push(E.specularMapUv),S.push(E.specularColorMapUv),S.push(E.specularIntensityMapUv),S.push(E.transmissionMapUv),S.push(E.thicknessMapUv),S.push(E.combine),S.push(E.fogExp2),S.push(E.sizeAttenuation),S.push(E.morphTargetsCount),S.push(E.morphAttributeCount),S.push(E.numDirLights),S.push(E.numPointLights),S.push(E.numSpotLights),S.push(E.numSpotLightMaps),S.push(E.numHemiLights),S.push(E.numRectAreaLights),S.push(E.numDirLightShadows),S.push(E.numPointLightShadows),S.push(E.numSpotLightShadows),S.push(E.numSpotLightShadowsWithMaps),S.push(E.numLightProbes),S.push(E.shadowMapType),S.push(E.toneMapping),S.push(E.numClippingPlanes),S.push(E.numClipIntersection),S.push(E.depthPacking)}function w(S,E){a.disableAll(),E.supportsVertexTextures&&a.enable(0),E.instancing&&a.enable(1),E.instancingColor&&a.enable(2),E.instancingMorph&&a.enable(3),E.matcap&&a.enable(4),E.envMap&&a.enable(5),E.normalMapObjectSpace&&a.enable(6),E.normalMapTangentSpace&&a.enable(7),E.clearcoat&&a.enable(8),E.iridescence&&a.enable(9),E.alphaTest&&a.enable(10),E.vertexColors&&a.enable(11),E.vertexAlphas&&a.enable(12),E.vertexUv1s&&a.enable(13),E.vertexUv2s&&a.enable(14),E.vertexUv3s&&a.enable(15),E.vertexTangents&&a.enable(16),E.anisotropy&&a.enable(17),E.alphaHash&&a.enable(18),E.batching&&a.enable(19),E.dispersion&&a.enable(20),E.batchingColor&&a.enable(21),E.gradientMap&&a.enable(22),S.push(a.mask),a.disableAll(),E.fog&&a.enable(0),E.useFog&&a.enable(1),E.flatShading&&a.enable(2),E.logarithmicDepthBuffer&&a.enable(3),E.reversedDepthBuffer&&a.enable(4),E.skinning&&a.enable(5),E.morphTargets&&a.enable(6),E.morphNormals&&a.enable(7),E.morphColors&&a.enable(8),E.premultipliedAlpha&&a.enable(9),E.shadowMapEnabled&&a.enable(10),E.doubleSided&&a.enable(11),E.flipSided&&a.enable(12),E.useDepthPacking&&a.enable(13),E.dithering&&a.enable(14),E.transmission&&a.enable(15),E.sheen&&a.enable(16),E.opaque&&a.enable(17),E.pointsUvs&&a.enable(18),E.decodeVideoTexture&&a.enable(19),E.decodeVideoTextureEmissive&&a.enable(20),E.alphaToCoverage&&a.enable(21),S.push(a.mask)}function m(S){let E=x[S.type],P;if(E){let D=ni[E];P=fn.clone(D.uniforms)}else P=S.uniforms;return P}function v(S,E){let P;for(let D=0,H=h.length;D<H;D++){let O=h[D];if(O.cacheKey===E){P=O,++P.usedTimes;break}}return P===void 0&&(P=new Eg(i,E,S,s),h.push(P)),P}function M(S){if(--S.usedTimes===0){let E=h.indexOf(S);h[E]=h[h.length-1],h.pop(),S.destroy()}}function b(S){l.remove(S)}function R(){l.dispose()}return{getParameters:g,getProgramCacheKey:p,getUniforms:m,acquireProgram:v,releaseProgram:M,releaseShaderCache:b,programs:h,dispose:R}}function Tg(){let i=new WeakMap;function t(o){return i.has(o)}function e(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function r(o,a,l){i.get(o)[a]=l}function s(){i=new WeakMap}return{has:t,get:e,remove:n,update:r,dispose:s}}function Rg(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function Pu(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function Fu(){let i=[],t=0,e=[],n=[],r=[];function s(){t=0,e.length=0,n.length=0,r.length=0}function o(u,f,d,x,y,g){let p=i[t];return p===void 0?(p={id:u.id,object:u,geometry:f,material:d,groupOrder:x,renderOrder:u.renderOrder,z:y,group:g},i[t]=p):(p.id=u.id,p.object=u,p.geometry=f,p.material=d,p.groupOrder=x,p.renderOrder=u.renderOrder,p.z=y,p.group=g),t++,p}function a(u,f,d,x,y,g){let p=o(u,f,d,x,y,g);d.transmission>0?n.push(p):d.transparent===!0?r.push(p):e.push(p)}function l(u,f,d,x,y,g){let p=o(u,f,d,x,y,g);d.transmission>0?n.unshift(p):d.transparent===!0?r.unshift(p):e.unshift(p)}function c(u,f){e.length>1&&e.sort(u||Rg),n.length>1&&n.sort(f||Pu),r.length>1&&r.sort(f||Pu)}function h(){for(let u=t,f=i.length;u<f;u++){let d=i[u];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:e,transmissive:n,transparent:r,init:s,push:a,unshift:l,finish:h,sort:c}}function Cg(){let i=new WeakMap;function t(n,r){let s=i.get(n),o;return s===void 0?(o=new Fu,i.set(n,[o])):r>=s.length?(o=new Fu,s.push(o)):o=s[r],o}function e(){i=new WeakMap}return{get:t,dispose:e}}function Ig(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new F,color:new vt};break;case"SpotLight":e={position:new F,direction:new F,color:new vt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new F,color:new vt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new F,skyColor:new vt,groundColor:new vt};break;case"RectAreaLight":e={color:new vt,position:new F,halfWidth:new F,halfHeight:new F};break}return i[t.id]=e,e}}}function Pg(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new nt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new nt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new nt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}var Fg=0;function Ug(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function Dg(i){let t=new Ig,e=Pg(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new F);let r=new F,s=new _e,o=new _e;function a(c){let h=0,u=0,f=0;for(let S=0;S<9;S++)n.probe[S].set(0,0,0);let d=0,x=0,y=0,g=0,p=0,A=0,w=0,m=0,v=0,M=0,b=0;c.sort(Ug);for(let S=0,E=c.length;S<E;S++){let P=c[S],D=P.color,H=P.intensity,O=P.distance,X=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)h+=D.r*H,u+=D.g*H,f+=D.b*H;else if(P.isLightProbe){for(let z=0;z<9;z++)n.probe[z].addScaledVector(P.sh.coefficients[z],H);b++}else if(P.isDirectionalLight){let z=t.get(P);if(z.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){let tt=P.shadow,k=e.get(P);k.shadowIntensity=tt.intensity,k.shadowBias=tt.bias,k.shadowNormalBias=tt.normalBias,k.shadowRadius=tt.radius,k.shadowMapSize=tt.mapSize,n.directionalShadow[d]=k,n.directionalShadowMap[d]=X,n.directionalShadowMatrix[d]=P.shadow.matrix,A++}n.directional[d]=z,d++}else if(P.isSpotLight){let z=t.get(P);z.position.setFromMatrixPosition(P.matrixWorld),z.color.copy(D).multiplyScalar(H),z.distance=O,z.coneCos=Math.cos(P.angle),z.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),z.decay=P.decay,n.spot[y]=z;let tt=P.shadow;if(P.map&&(n.spotLightMap[v]=P.map,v++,tt.updateMatrices(P),P.castShadow&&M++),n.spotLightMatrix[y]=tt.matrix,P.castShadow){let k=e.get(P);k.shadowIntensity=tt.intensity,k.shadowBias=tt.bias,k.shadowNormalBias=tt.normalBias,k.shadowRadius=tt.radius,k.shadowMapSize=tt.mapSize,n.spotShadow[y]=k,n.spotShadowMap[y]=X,m++}y++}else if(P.isRectAreaLight){let z=t.get(P);z.color.copy(D).multiplyScalar(H),z.halfWidth.set(P.width*.5,0,0),z.halfHeight.set(0,P.height*.5,0),n.rectArea[g]=z,g++}else if(P.isPointLight){let z=t.get(P);if(z.color.copy(P.color).multiplyScalar(P.intensity),z.distance=P.distance,z.decay=P.decay,P.castShadow){let tt=P.shadow,k=e.get(P);k.shadowIntensity=tt.intensity,k.shadowBias=tt.bias,k.shadowNormalBias=tt.normalBias,k.shadowRadius=tt.radius,k.shadowMapSize=tt.mapSize,k.shadowCameraNear=tt.camera.near,k.shadowCameraFar=tt.camera.far,n.pointShadow[x]=k,n.pointShadowMap[x]=X,n.pointShadowMatrix[x]=P.shadow.matrix,w++}n.point[x]=z,x++}else if(P.isHemisphereLight){let z=t.get(P);z.skyColor.copy(P.color).multiplyScalar(H),z.groundColor.copy(P.groundColor).multiplyScalar(H),n.hemi[p]=z,p++}}g>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ht.LTC_FLOAT_1,n.rectAreaLTC2=ht.LTC_FLOAT_2):(n.rectAreaLTC1=ht.LTC_HALF_1,n.rectAreaLTC2=ht.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=f;let R=n.hash;(R.directionalLength!==d||R.pointLength!==x||R.spotLength!==y||R.rectAreaLength!==g||R.hemiLength!==p||R.numDirectionalShadows!==A||R.numPointShadows!==w||R.numSpotShadows!==m||R.numSpotMaps!==v||R.numLightProbes!==b)&&(n.directional.length=d,n.spot.length=y,n.rectArea.length=g,n.point.length=x,n.hemi.length=p,n.directionalShadow.length=A,n.directionalShadowMap.length=A,n.pointShadow.length=w,n.pointShadowMap.length=w,n.spotShadow.length=m,n.spotShadowMap.length=m,n.directionalShadowMatrix.length=A,n.pointShadowMatrix.length=w,n.spotLightMatrix.length=m+v-M,n.spotLightMap.length=v,n.numSpotLightShadowsWithMaps=M,n.numLightProbes=b,R.directionalLength=d,R.pointLength=x,R.spotLength=y,R.rectAreaLength=g,R.hemiLength=p,R.numDirectionalShadows=A,R.numPointShadows=w,R.numSpotShadows=m,R.numSpotMaps=v,R.numLightProbes=b,n.version=Fg++)}function l(c,h){let u=0,f=0,d=0,x=0,y=0,g=h.matrixWorldInverse;for(let p=0,A=c.length;p<A;p++){let w=c[p];if(w.isDirectionalLight){let m=n.directional[u];m.direction.setFromMatrixPosition(w.matrixWorld),r.setFromMatrixPosition(w.target.matrixWorld),m.direction.sub(r),m.direction.transformDirection(g),u++}else if(w.isSpotLight){let m=n.spot[d];m.position.setFromMatrixPosition(w.matrixWorld),m.position.applyMatrix4(g),m.direction.setFromMatrixPosition(w.matrixWorld),r.setFromMatrixPosition(w.target.matrixWorld),m.direction.sub(r),m.direction.transformDirection(g),d++}else if(w.isRectAreaLight){let m=n.rectArea[x];m.position.setFromMatrixPosition(w.matrixWorld),m.position.applyMatrix4(g),o.identity(),s.copy(w.matrixWorld),s.premultiply(g),o.extractRotation(s),m.halfWidth.set(w.width*.5,0,0),m.halfHeight.set(0,w.height*.5,0),m.halfWidth.applyMatrix4(o),m.halfHeight.applyMatrix4(o),x++}else if(w.isPointLight){let m=n.point[f];m.position.setFromMatrixPosition(w.matrixWorld),m.position.applyMatrix4(g),f++}else if(w.isHemisphereLight){let m=n.hemi[y];m.direction.setFromMatrixPosition(w.matrixWorld),m.direction.transformDirection(g),y++}}}return{setup:a,setupView:l,state:n}}function Uu(i){let t=new Dg(i),e=[],n=[];function r(h){c.camera=h,e.length=0,n.length=0}function s(h){e.push(h)}function o(h){n.push(h)}function a(){t.setup(e)}function l(h){t.setupView(e,h)}let c={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:r,state:c,setupLights:a,setupLightsView:l,pushLight:s,pushShadow:o}}function Lg(i){let t=new WeakMap;function e(r,s=0){let o=t.get(r),a;return o===void 0?(a=new Uu(i),t.set(r,[a])):s>=o.length?(a=new Uu(i),o.push(a)):a=o[s],a}function n(){t=new WeakMap}return{get:e,dispose:n}}var Ng=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Og=`uniform sampler2D shadow_pass;
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
}`;function Bg(i,t,e){let n=new _s,r=new nt,s=new nt,o=new De,a=new Go({depthPacking:Kh}),l=new Vo,c={},h=e.maxTextureSize,u={[An]:on,[on]:An,[Xe]:Xe},f=new Se({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new nt},radius:{value:4}},vertexShader:Ng,fragmentShader:Og}),d=f.clone();d.defines.HORIZONTAL_PASS=1;let x=new Ce;x.setAttribute("position",new Le(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let y=new Wt(x,f),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=tc;let p=this.type;this.render=function(M,b,R){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||M.length===0)return;let S=i.getRenderTarget(),E=i.getActiveCubeFace(),P=i.getActiveMipmapLevel(),D=i.state;D.setBlending(Xn),D.buffers.depth.getReversed()===!0?D.buffers.color.setClear(0,0,0,0):D.buffers.color.setClear(1,1,1,1),D.buffers.depth.setTest(!0),D.setScissorTest(!1);let H=p!==$n&&this.type===$n,O=p===$n&&this.type!==$n;for(let X=0,z=M.length;X<z;X++){let tt=M[X],k=tt.shadow;if(k===void 0){console.warn("THREE.WebGLShadowMap:",tt,"has no shadow.");continue}if(k.autoUpdate===!1&&k.needsUpdate===!1)continue;r.copy(k.mapSize);let lt=k.getFrameExtents();if(r.multiply(lt),s.copy(k.mapSize),(r.x>h||r.y>h)&&(r.x>h&&(s.x=Math.floor(h/lt.x),r.x=s.x*lt.x,k.mapSize.x=s.x),r.y>h&&(s.y=Math.floor(h/lt.y),r.y=s.y*lt.y,k.mapSize.y=s.y)),k.map===null||H===!0||O===!0){let Rt=this.type!==$n?{minFilter:vn,magFilter:vn}:{};k.map!==null&&k.map.dispose(),k.map=new en(r.x,r.y,Rt),k.map.texture.name=tt.name+".shadowMap",k.camera.updateProjectionMatrix()}i.setRenderTarget(k.map),i.clear();let dt=k.getViewportCount();for(let Rt=0;Rt<dt;Rt++){let te=k.getViewport(Rt);o.set(s.x*te.x,s.y*te.y,s.x*te.z,s.y*te.w),D.viewport(o),k.updateMatrices(tt,Rt),n=k.getFrustum(),m(b,R,k.camera,tt,this.type)}k.isPointLightShadow!==!0&&this.type===$n&&A(k,R),k.needsUpdate=!1}p=this.type,g.needsUpdate=!1,i.setRenderTarget(S,E,P)};function A(M,b){let R=t.update(y);f.defines.VSM_SAMPLES!==M.blurSamples&&(f.defines.VSM_SAMPLES=M.blurSamples,d.defines.VSM_SAMPLES=M.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),M.mapPass===null&&(M.mapPass=new en(r.x,r.y)),f.uniforms.shadow_pass.value=M.map.texture,f.uniforms.resolution.value=M.mapSize,f.uniforms.radius.value=M.radius,i.setRenderTarget(M.mapPass),i.clear(),i.renderBufferDirect(b,null,R,f,y,null),d.uniforms.shadow_pass.value=M.mapPass.texture,d.uniforms.resolution.value=M.mapSize,d.uniforms.radius.value=M.radius,i.setRenderTarget(M.map),i.clear(),i.renderBufferDirect(b,null,R,d,y,null)}function w(M,b,R,S){let E=null,P=R.isPointLight===!0?M.customDistanceMaterial:M.customDepthMaterial;if(P!==void 0)E=P;else if(E=R.isPointLight===!0?l:a,i.localClippingEnabled&&b.clipShadows===!0&&Array.isArray(b.clippingPlanes)&&b.clippingPlanes.length!==0||b.displacementMap&&b.displacementScale!==0||b.alphaMap&&b.alphaTest>0||b.map&&b.alphaTest>0||b.alphaToCoverage===!0){let D=E.uuid,H=b.uuid,O=c[D];O===void 0&&(O={},c[D]=O);let X=O[H];X===void 0&&(X=E.clone(),O[H]=X,b.addEventListener("dispose",v)),E=X}if(E.visible=b.visible,E.wireframe=b.wireframe,S===$n?E.side=b.shadowSide!==null?b.shadowSide:b.side:E.side=b.shadowSide!==null?b.shadowSide:u[b.side],E.alphaMap=b.alphaMap,E.alphaTest=b.alphaToCoverage===!0?.5:b.alphaTest,E.map=b.map,E.clipShadows=b.clipShadows,E.clippingPlanes=b.clippingPlanes,E.clipIntersection=b.clipIntersection,E.displacementMap=b.displacementMap,E.displacementScale=b.displacementScale,E.displacementBias=b.displacementBias,E.wireframeLinewidth=b.wireframeLinewidth,E.linewidth=b.linewidth,R.isPointLight===!0&&E.isMeshDistanceMaterial===!0){let D=i.properties.get(E);D.light=R}return E}function m(M,b,R,S,E){if(M.visible===!1)return;if(M.layers.test(b.layers)&&(M.isMesh||M.isLine||M.isPoints)&&(M.castShadow||M.receiveShadow&&E===$n)&&(!M.frustumCulled||n.intersectsObject(M))){M.modelViewMatrix.multiplyMatrices(R.matrixWorldInverse,M.matrixWorld);let H=t.update(M),O=M.material;if(Array.isArray(O)){let X=H.groups;for(let z=0,tt=X.length;z<tt;z++){let k=X[z],lt=O[k.materialIndex];if(lt&&lt.visible){let dt=w(M,lt,S,E);M.onBeforeShadow(i,M,b,R,H,dt,k),i.renderBufferDirect(R,null,H,dt,M,k),M.onAfterShadow(i,M,b,R,H,dt,k)}}}else if(O.visible){let X=w(M,O,S,E);M.onBeforeShadow(i,M,b,R,H,X,null),i.renderBufferDirect(R,null,H,X,M,null),M.onAfterShadow(i,M,b,R,H,X,null)}}let D=M.children;for(let H=0,O=D.length;H<O;H++)m(D[H],b,R,S,E)}function v(M){M.target.removeEventListener("dispose",v);for(let R in c){let S=c[R],E=M.target.uuid;E in S&&(S[E].dispose(),delete S[E])}}}var zg={[ta]:ea,[na]:sa,[ia]:oa,[Wi]:ra,[ea]:ta,[sa]:na,[oa]:ia,[ra]:Wi};function Hg(i,t){function e(){let U=!1,st=new De,ct=null,Mt=new De(0,0,0,0);return{setMask:function(it){ct!==it&&!U&&(i.colorMask(it,it,it,it),ct=it)},setLocked:function(it){U=it},setClear:function(it,J,wt,qt,xe){xe===!0&&(it*=qt,J*=qt,wt*=qt),st.set(it,J,wt,qt),Mt.equals(st)===!1&&(i.clearColor(it,J,wt,qt),Mt.copy(st))},reset:function(){U=!1,ct=null,Mt.set(-1,0,0,0)}}}function n(){let U=!1,st=!1,ct=null,Mt=null,it=null;return{setReversed:function(J){if(st!==J){let wt=t.get("EXT_clip_control");J?wt.clipControlEXT(wt.LOWER_LEFT_EXT,wt.ZERO_TO_ONE_EXT):wt.clipControlEXT(wt.LOWER_LEFT_EXT,wt.NEGATIVE_ONE_TO_ONE_EXT),st=J;let qt=it;it=null,this.setClear(qt)}},getReversed:function(){return st},setTest:function(J){J?Y(i.DEPTH_TEST):St(i.DEPTH_TEST)},setMask:function(J){ct!==J&&!U&&(i.depthMask(J),ct=J)},setFunc:function(J){if(st&&(J=zg[J]),Mt!==J){switch(J){case ta:i.depthFunc(i.NEVER);break;case ea:i.depthFunc(i.ALWAYS);break;case na:i.depthFunc(i.LESS);break;case Wi:i.depthFunc(i.LEQUAL);break;case ia:i.depthFunc(i.EQUAL);break;case ra:i.depthFunc(i.GEQUAL);break;case sa:i.depthFunc(i.GREATER);break;case oa:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Mt=J}},setLocked:function(J){U=J},setClear:function(J){it!==J&&(st&&(J=1-J),i.clearDepth(J),it=J)},reset:function(){U=!1,ct=null,Mt=null,it=null,st=!1}}}function r(){let U=!1,st=null,ct=null,Mt=null,it=null,J=null,wt=null,qt=null,xe=null;return{setTest:function(ve){U||(ve?Y(i.STENCIL_TEST):St(i.STENCIL_TEST))},setMask:function(ve){st!==ve&&!U&&(i.stencilMask(ve),st=ve)},setFunc:function(ve,Pn,W){(ct!==ve||Mt!==Pn||it!==W)&&(i.stencilFunc(ve,Pn,W),ct=ve,Mt=Pn,it=W)},setOp:function(ve,Pn,W){(J!==ve||wt!==Pn||qt!==W)&&(i.stencilOp(ve,Pn,W),J=ve,wt=Pn,qt=W)},setLocked:function(ve){U=ve},setClear:function(ve){xe!==ve&&(i.clearStencil(ve),xe=ve)},reset:function(){U=!1,st=null,ct=null,Mt=null,it=null,J=null,wt=null,qt=null,xe=null}}}let s=new e,o=new n,a=new r,l=new WeakMap,c=new WeakMap,h={},u={},f=new WeakMap,d=[],x=null,y=!1,g=null,p=null,A=null,w=null,m=null,v=null,M=null,b=new vt(0,0,0),R=0,S=!1,E=null,P=null,D=null,H=null,O=null,X=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),z=!1,tt=0,k=i.getParameter(i.VERSION);k.indexOf("WebGL")!==-1?(tt=parseFloat(/^WebGL (\d)/.exec(k)[1]),z=tt>=1):k.indexOf("OpenGL ES")!==-1&&(tt=parseFloat(/^OpenGL ES (\d)/.exec(k)[1]),z=tt>=2);let lt=null,dt={},Rt=i.getParameter(i.SCISSOR_BOX),te=i.getParameter(i.VIEWPORT),ge=new De().fromArray(Rt),Ie=new De().fromArray(te);function ce(U,st,ct,Mt){let it=new Uint8Array(4),J=i.createTexture();i.bindTexture(U,J),i.texParameteri(U,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(U,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let wt=0;wt<ct;wt++)U===i.TEXTURE_3D||U===i.TEXTURE_2D_ARRAY?i.texImage3D(st,0,i.RGBA,1,1,Mt,0,i.RGBA,i.UNSIGNED_BYTE,it):i.texImage2D(st+wt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,it);return J}let q={};q[i.TEXTURE_2D]=ce(i.TEXTURE_2D,i.TEXTURE_2D,1),q[i.TEXTURE_CUBE_MAP]=ce(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),q[i.TEXTURE_2D_ARRAY]=ce(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),q[i.TEXTURE_3D]=ce(i.TEXTURE_3D,i.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),Y(i.DEPTH_TEST),o.setFunc(Wi),Dt(!1),xt($l),Y(i.CULL_FACE),ie(Xn);function Y(U){h[U]!==!0&&(i.enable(U),h[U]=!0)}function St(U){h[U]!==!1&&(i.disable(U),h[U]=!1)}function Pt(U,st){return u[U]!==st?(i.bindFramebuffer(U,st),u[U]=st,U===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=st),U===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=st),!0):!1}function yt(U,st){let ct=d,Mt=!1;if(U){ct=f.get(st),ct===void 0&&(ct=[],f.set(st,ct));let it=U.textures;if(ct.length!==it.length||ct[0]!==i.COLOR_ATTACHMENT0){for(let J=0,wt=it.length;J<wt;J++)ct[J]=i.COLOR_ATTACHMENT0+J;ct.length=it.length,Mt=!0}}else ct[0]!==i.BACK&&(ct[0]=i.BACK,Mt=!0);Mt&&i.drawBuffers(ct)}function oe(U){return x!==U?(i.useProgram(U),x=U,!0):!1}let qe={[Ai]:i.FUNC_ADD,[wh]:i.FUNC_SUBTRACT,[Ah]:i.FUNC_REVERSE_SUBTRACT};qe[Th]=i.MIN,qe[Rh]=i.MAX;let I={[Ch]:i.ZERO,[Ih]:i.ONE,[Ph]:i.SRC_COLOR,[bo]:i.SRC_ALPHA,[Oh]:i.SRC_ALPHA_SATURATE,[Lh]:i.DST_COLOR,[Uh]:i.DST_ALPHA,[Fh]:i.ONE_MINUS_SRC_COLOR,[Eo]:i.ONE_MINUS_SRC_ALPHA,[Nh]:i.ONE_MINUS_DST_COLOR,[Dh]:i.ONE_MINUS_DST_ALPHA,[Bh]:i.CONSTANT_COLOR,[zh]:i.ONE_MINUS_CONSTANT_COLOR,[Hh]:i.CONSTANT_ALPHA,[kh]:i.ONE_MINUS_CONSTANT_ALPHA};function ie(U,st,ct,Mt,it,J,wt,qt,xe,ve){if(U===Xn){y===!0&&(St(i.BLEND),y=!1);return}if(y===!1&&(Y(i.BLEND),y=!0),U!==Eh){if(U!==g||ve!==S){if((p!==Ai||m!==Ai)&&(i.blendEquation(i.FUNC_ADD),p=Ai,m=Ai),ve)switch(U){case Vi:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case an:i.blendFunc(i.ONE,i.ONE);break;case ec:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case nc:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}else switch(U){case Vi:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case an:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case ec:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case nc:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}A=null,w=null,v=null,M=null,b.set(0,0,0),R=0,g=U,S=ve}return}it=it||st,J=J||ct,wt=wt||Mt,(st!==p||it!==m)&&(i.blendEquationSeparate(qe[st],qe[it]),p=st,m=it),(ct!==A||Mt!==w||J!==v||wt!==M)&&(i.blendFuncSeparate(I[ct],I[Mt],I[J],I[wt]),A=ct,w=Mt,v=J,M=wt),(qt.equals(b)===!1||xe!==R)&&(i.blendColor(qt.r,qt.g,qt.b,xe),b.copy(qt),R=xe),g=U,S=!1}function Ft(U,st){U.side===Xe?St(i.CULL_FACE):Y(i.CULL_FACE);let ct=U.side===on;st&&(ct=!ct),Dt(ct),U.blending===Vi&&U.transparent===!1?ie(Xn):ie(U.blending,U.blendEquation,U.blendSrc,U.blendDst,U.blendEquationAlpha,U.blendSrcAlpha,U.blendDstAlpha,U.blendColor,U.blendAlpha,U.premultipliedAlpha),o.setFunc(U.depthFunc),o.setTest(U.depthTest),o.setMask(U.depthWrite),s.setMask(U.colorWrite);let Mt=U.stencilWrite;a.setTest(Mt),Mt&&(a.setMask(U.stencilWriteMask),a.setFunc(U.stencilFunc,U.stencilRef,U.stencilFuncMask),a.setOp(U.stencilFail,U.stencilZFail,U.stencilZPass)),bt(U.polygonOffset,U.polygonOffsetFactor,U.polygonOffsetUnits),U.alphaToCoverage===!0?Y(i.SAMPLE_ALPHA_TO_COVERAGE):St(i.SAMPLE_ALPHA_TO_COVERAGE)}function Dt(U){E!==U&&(U?i.frontFace(i.CW):i.frontFace(i.CCW),E=U)}function xt(U){U!==Sh?(Y(i.CULL_FACE),U!==P&&(U===$l?i.cullFace(i.BACK):U===_h?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):St(i.CULL_FACE),P=U}function re(U){U!==D&&(z&&i.lineWidth(U),D=U)}function bt(U,st,ct){U?(Y(i.POLYGON_OFFSET_FILL),(H!==st||O!==ct)&&(i.polygonOffset(st,ct),H=st,O=ct)):St(i.POLYGON_OFFSET_FILL)}function Kt(U){U?Y(i.SCISSOR_TEST):St(i.SCISSOR_TEST)}function Ne(U){U===void 0&&(U=i.TEXTURE0+X-1),lt!==U&&(i.activeTexture(U),lt=U)}function Zt(U,st,ct){ct===void 0&&(lt===null?ct=i.TEXTURE0+X-1:ct=lt);let Mt=dt[ct];Mt===void 0&&(Mt={type:void 0,texture:void 0},dt[ct]=Mt),(Mt.type!==U||Mt.texture!==st)&&(lt!==ct&&(i.activeTexture(ct),lt=ct),i.bindTexture(U,st||q[U]),Mt.type=U,Mt.texture=st)}function C(){let U=dt[lt];U!==void 0&&U.type!==void 0&&(i.bindTexture(U.type,null),U.type=void 0,U.texture=void 0)}function _(){try{i.compressedTexImage2D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function B(){try{i.compressedTexImage3D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function j(){try{i.texSubImage2D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function et(){try{i.texSubImage3D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function K(){try{i.compressedTexSubImage2D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function At(){try{i.compressedTexSubImage3D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function rt(){try{i.texStorage2D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Tt(){try{i.texStorage3D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function It(){try{i.texImage2D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ot(){try{i.texImage3D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function pt(U){ge.equals(U)===!1&&(i.scissor(U.x,U.y,U.z,U.w),ge.copy(U))}function Ot(U){Ie.equals(U)===!1&&(i.viewport(U.x,U.y,U.z,U.w),Ie.copy(U))}function Et(U,st){let ct=c.get(st);ct===void 0&&(ct=new WeakMap,c.set(st,ct));let Mt=ct.get(U);Mt===void 0&&(Mt=i.getUniformBlockIndex(st,U.name),ct.set(U,Mt))}function ft(U,st){let Mt=c.get(st).get(U);l.get(st)!==Mt&&(i.uniformBlockBinding(st,Mt,U.__bindingPointIndex),l.set(st,Mt))}function jt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),h={},lt=null,dt={},u={},f=new WeakMap,d=[],x=null,y=!1,g=null,p=null,A=null,w=null,m=null,v=null,M=null,b=new vt(0,0,0),R=0,S=!1,E=null,P=null,D=null,H=null,O=null,ge.set(0,0,i.canvas.width,i.canvas.height),Ie.set(0,0,i.canvas.width,i.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:Y,disable:St,bindFramebuffer:Pt,drawBuffers:yt,useProgram:oe,setBlending:ie,setMaterial:Ft,setFlipSided:Dt,setCullFace:xt,setLineWidth:re,setPolygonOffset:bt,setScissorTest:Kt,activeTexture:Ne,bindTexture:Zt,unbindTexture:C,compressedTexImage2D:_,compressedTexImage3D:B,texImage2D:It,texImage3D:ot,updateUBOMapping:Et,uniformBlockBinding:ft,texStorage2D:rt,texStorage3D:Tt,texSubImage2D:j,texSubImage3D:et,compressedTexSubImage2D:K,compressedTexSubImage3D:At,scissor:pt,viewport:Ot,reset:jt}}function kg(i,t,e,n,r,s,o){let a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new nt,h=new WeakMap,u,f=new WeakMap,d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(C,_){return d?new OffscreenCanvas(C,_):ds("canvas")}function y(C,_,B){let j=1,et=Zt(C);if((et.width>B||et.height>B)&&(j=B/Math.max(et.width,et.height)),j<1)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap||typeof VideoFrame<"u"&&C instanceof VideoFrame){let K=Math.floor(j*et.width),At=Math.floor(j*et.height);u===void 0&&(u=x(K,At));let rt=_?x(K,At):u;return rt.width=K,rt.height=At,rt.getContext("2d").drawImage(C,0,0,K,At),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+et.width+"x"+et.height+") to ("+K+"x"+At+")."),rt}else return"data"in C&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+et.width+"x"+et.height+")."),C;return C}function g(C){return C.generateMipmaps}function p(C){i.generateMipmap(C)}function A(C){return C.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:C.isWebGL3DRenderTarget?i.TEXTURE_3D:C.isWebGLArrayRenderTarget||C.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function w(C,_,B,j,et=!1){if(C!==null){if(i[C]!==void 0)return i[C];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let K=_;if(_===i.RED&&(B===i.FLOAT&&(K=i.R32F),B===i.HALF_FLOAT&&(K=i.R16F),B===i.UNSIGNED_BYTE&&(K=i.R8)),_===i.RED_INTEGER&&(B===i.UNSIGNED_BYTE&&(K=i.R8UI),B===i.UNSIGNED_SHORT&&(K=i.R16UI),B===i.UNSIGNED_INT&&(K=i.R32UI),B===i.BYTE&&(K=i.R8I),B===i.SHORT&&(K=i.R16I),B===i.INT&&(K=i.R32I)),_===i.RG&&(B===i.FLOAT&&(K=i.RG32F),B===i.HALF_FLOAT&&(K=i.RG16F),B===i.UNSIGNED_BYTE&&(K=i.RG8)),_===i.RG_INTEGER&&(B===i.UNSIGNED_BYTE&&(K=i.RG8UI),B===i.UNSIGNED_SHORT&&(K=i.RG16UI),B===i.UNSIGNED_INT&&(K=i.RG32UI),B===i.BYTE&&(K=i.RG8I),B===i.SHORT&&(K=i.RG16I),B===i.INT&&(K=i.RG32I)),_===i.RGB_INTEGER&&(B===i.UNSIGNED_BYTE&&(K=i.RGB8UI),B===i.UNSIGNED_SHORT&&(K=i.RGB16UI),B===i.UNSIGNED_INT&&(K=i.RGB32UI),B===i.BYTE&&(K=i.RGB8I),B===i.SHORT&&(K=i.RGB16I),B===i.INT&&(K=i.RGB32I)),_===i.RGBA_INTEGER&&(B===i.UNSIGNED_BYTE&&(K=i.RGBA8UI),B===i.UNSIGNED_SHORT&&(K=i.RGBA16UI),B===i.UNSIGNED_INT&&(K=i.RGBA32UI),B===i.BYTE&&(K=i.RGBA8I),B===i.SHORT&&(K=i.RGBA16I),B===i.INT&&(K=i.RGBA32I)),_===i.RGB&&(B===i.UNSIGNED_INT_5_9_9_9_REV&&(K=i.RGB9_E5),B===i.UNSIGNED_INT_10F_11F_11F_REV&&(K=i.R11F_G11F_B10F)),_===i.RGBA){let At=et?us:fe.getTransfer(j);B===i.FLOAT&&(K=i.RGBA32F),B===i.HALF_FLOAT&&(K=i.RGBA16F),B===i.UNSIGNED_BYTE&&(K=At===Me?i.SRGB8_ALPHA8:i.RGBA8),B===i.UNSIGNED_SHORT_4_4_4_4&&(K=i.RGBA4),B===i.UNSIGNED_SHORT_5_5_5_1&&(K=i.RGB5_A1)}return(K===i.R16F||K===i.R32F||K===i.RG16F||K===i.RG32F||K===i.RGBA16F||K===i.RGBA32F)&&t.get("EXT_color_buffer_float"),K}function m(C,_){let B;return C?_===null||_===Fi||_===Gr?B=i.DEPTH24_STENCIL8:_===ei?B=i.DEPTH32F_STENCIL8:_===kr&&(B=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):_===null||_===Fi||_===Gr?B=i.DEPTH_COMPONENT24:_===ei?B=i.DEPTH_COMPONENT32F:_===kr&&(B=i.DEPTH_COMPONENT16),B}function v(C,_){return g(C)===!0||C.isFramebufferTexture&&C.minFilter!==vn&&C.minFilter!==Gn?Math.log2(Math.max(_.width,_.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?_.mipmaps.length:1}function M(C){let _=C.target;_.removeEventListener("dispose",M),R(_),_.isVideoTexture&&h.delete(_)}function b(C){let _=C.target;_.removeEventListener("dispose",b),E(_)}function R(C){let _=n.get(C);if(_.__webglInit===void 0)return;let B=C.source,j=f.get(B);if(j){let et=j[_.__cacheKey];et.usedTimes--,et.usedTimes===0&&S(C),Object.keys(j).length===0&&f.delete(B)}n.remove(C)}function S(C){let _=n.get(C);i.deleteTexture(_.__webglTexture);let B=C.source,j=f.get(B);delete j[_.__cacheKey],o.memory.textures--}function E(C){let _=n.get(C);if(C.depthTexture&&(C.depthTexture.dispose(),n.remove(C.depthTexture)),C.isWebGLCubeRenderTarget)for(let j=0;j<6;j++){if(Array.isArray(_.__webglFramebuffer[j]))for(let et=0;et<_.__webglFramebuffer[j].length;et++)i.deleteFramebuffer(_.__webglFramebuffer[j][et]);else i.deleteFramebuffer(_.__webglFramebuffer[j]);_.__webglDepthbuffer&&i.deleteRenderbuffer(_.__webglDepthbuffer[j])}else{if(Array.isArray(_.__webglFramebuffer))for(let j=0;j<_.__webglFramebuffer.length;j++)i.deleteFramebuffer(_.__webglFramebuffer[j]);else i.deleteFramebuffer(_.__webglFramebuffer);if(_.__webglDepthbuffer&&i.deleteRenderbuffer(_.__webglDepthbuffer),_.__webglMultisampledFramebuffer&&i.deleteFramebuffer(_.__webglMultisampledFramebuffer),_.__webglColorRenderbuffer)for(let j=0;j<_.__webglColorRenderbuffer.length;j++)_.__webglColorRenderbuffer[j]&&i.deleteRenderbuffer(_.__webglColorRenderbuffer[j]);_.__webglDepthRenderbuffer&&i.deleteRenderbuffer(_.__webglDepthRenderbuffer)}let B=C.textures;for(let j=0,et=B.length;j<et;j++){let K=n.get(B[j]);K.__webglTexture&&(i.deleteTexture(K.__webglTexture),o.memory.textures--),n.remove(B[j])}n.remove(C)}let P=0;function D(){P=0}function H(){let C=P;return C>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+r.maxTextures),P+=1,C}function O(C){let _=[];return _.push(C.wrapS),_.push(C.wrapT),_.push(C.wrapR||0),_.push(C.magFilter),_.push(C.minFilter),_.push(C.anisotropy),_.push(C.internalFormat),_.push(C.format),_.push(C.type),_.push(C.generateMipmaps),_.push(C.premultiplyAlpha),_.push(C.flipY),_.push(C.unpackAlignment),_.push(C.colorSpace),_.join()}function X(C,_){let B=n.get(C);if(C.isVideoTexture&&Kt(C),C.isRenderTargetTexture===!1&&C.isExternalTexture!==!0&&C.version>0&&B.__version!==C.version){let j=C.image;if(j===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(j.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{q(B,C,_);return}}else C.isExternalTexture&&(B.__webglTexture=C.sourceTexture?C.sourceTexture:null);e.bindTexture(i.TEXTURE_2D,B.__webglTexture,i.TEXTURE0+_)}function z(C,_){let B=n.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&B.__version!==C.version){q(B,C,_);return}e.bindTexture(i.TEXTURE_2D_ARRAY,B.__webglTexture,i.TEXTURE0+_)}function tt(C,_){let B=n.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&B.__version!==C.version){q(B,C,_);return}e.bindTexture(i.TEXTURE_3D,B.__webglTexture,i.TEXTURE0+_)}function k(C,_){let B=n.get(C);if(C.version>0&&B.__version!==C.version){Y(B,C,_);return}e.bindTexture(i.TEXTURE_CUBE_MAP,B.__webglTexture,i.TEXTURE0+_)}let lt={[fi]:i.REPEAT,[wi]:i.CLAMP_TO_EDGE,[wo]:i.MIRRORED_REPEAT},dt={[vn]:i.NEAREST,[Wh]:i.NEAREST_MIPMAP_NEAREST,[zs]:i.NEAREST_MIPMAP_LINEAR,[Gn]:i.LINEAR,[ma]:i.LINEAR_MIPMAP_NEAREST,[Pi]:i.LINEAR_MIPMAP_LINEAR},Rt={[Jh]:i.NEVER,[eu]:i.ALWAYS,[Yh]:i.LESS,[dc]:i.LEQUAL,[Zh]:i.EQUAL,[tu]:i.GEQUAL,[Qh]:i.GREATER,[$h]:i.NOTEQUAL};function te(C,_){if(_.type===ei&&t.has("OES_texture_float_linear")===!1&&(_.magFilter===Gn||_.magFilter===ma||_.magFilter===zs||_.magFilter===Pi||_.minFilter===Gn||_.minFilter===ma||_.minFilter===zs||_.minFilter===Pi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(C,i.TEXTURE_WRAP_S,lt[_.wrapS]),i.texParameteri(C,i.TEXTURE_WRAP_T,lt[_.wrapT]),(C===i.TEXTURE_3D||C===i.TEXTURE_2D_ARRAY)&&i.texParameteri(C,i.TEXTURE_WRAP_R,lt[_.wrapR]),i.texParameteri(C,i.TEXTURE_MAG_FILTER,dt[_.magFilter]),i.texParameteri(C,i.TEXTURE_MIN_FILTER,dt[_.minFilter]),_.compareFunction&&(i.texParameteri(C,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(C,i.TEXTURE_COMPARE_FUNC,Rt[_.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(_.magFilter===vn||_.minFilter!==zs&&_.minFilter!==Pi||_.type===ei&&t.has("OES_texture_float_linear")===!1)return;if(_.anisotropy>1||n.get(_).__currentAnisotropy){let B=t.get("EXT_texture_filter_anisotropic");i.texParameterf(C,B.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(_.anisotropy,r.getMaxAnisotropy())),n.get(_).__currentAnisotropy=_.anisotropy}}}function ge(C,_){let B=!1;C.__webglInit===void 0&&(C.__webglInit=!0,_.addEventListener("dispose",M));let j=_.source,et=f.get(j);et===void 0&&(et={},f.set(j,et));let K=O(_);if(K!==C.__cacheKey){et[K]===void 0&&(et[K]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,B=!0),et[K].usedTimes++;let At=et[C.__cacheKey];At!==void 0&&(et[C.__cacheKey].usedTimes--,At.usedTimes===0&&S(_)),C.__cacheKey=K,C.__webglTexture=et[K].texture}return B}function Ie(C,_,B){return Math.floor(Math.floor(C/B)/_)}function ce(C,_,B,j){let K=C.updateRanges;if(K.length===0)e.texSubImage2D(i.TEXTURE_2D,0,0,0,_.width,_.height,B,j,_.data);else{K.sort((ot,pt)=>ot.start-pt.start);let At=0;for(let ot=1;ot<K.length;ot++){let pt=K[At],Ot=K[ot],Et=pt.start+pt.count,ft=Ie(Ot.start,_.width,4),jt=Ie(pt.start,_.width,4);Ot.start<=Et+1&&ft===jt&&Ie(Ot.start+Ot.count-1,_.width,4)===ft?pt.count=Math.max(pt.count,Ot.start+Ot.count-pt.start):(++At,K[At]=Ot)}K.length=At+1;let rt=i.getParameter(i.UNPACK_ROW_LENGTH),Tt=i.getParameter(i.UNPACK_SKIP_PIXELS),It=i.getParameter(i.UNPACK_SKIP_ROWS);i.pixelStorei(i.UNPACK_ROW_LENGTH,_.width);for(let ot=0,pt=K.length;ot<pt;ot++){let Ot=K[ot],Et=Math.floor(Ot.start/4),ft=Math.ceil(Ot.count/4),jt=Et%_.width,U=Math.floor(Et/_.width),st=ft,ct=1;i.pixelStorei(i.UNPACK_SKIP_PIXELS,jt),i.pixelStorei(i.UNPACK_SKIP_ROWS,U),e.texSubImage2D(i.TEXTURE_2D,0,jt,U,st,ct,B,j,_.data)}C.clearUpdateRanges(),i.pixelStorei(i.UNPACK_ROW_LENGTH,rt),i.pixelStorei(i.UNPACK_SKIP_PIXELS,Tt),i.pixelStorei(i.UNPACK_SKIP_ROWS,It)}}function q(C,_,B){let j=i.TEXTURE_2D;(_.isDataArrayTexture||_.isCompressedArrayTexture)&&(j=i.TEXTURE_2D_ARRAY),_.isData3DTexture&&(j=i.TEXTURE_3D);let et=ge(C,_),K=_.source;e.bindTexture(j,C.__webglTexture,i.TEXTURE0+B);let At=n.get(K);if(K.version!==At.__version||et===!0){e.activeTexture(i.TEXTURE0+B);let rt=fe.getPrimaries(fe.workingColorSpace),Tt=_.colorSpace===Kn?null:fe.getPrimaries(_.colorSpace),It=_.colorSpace===Kn||rt===Tt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,_.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,_.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,It);let ot=y(_.image,!1,r.maxTextureSize);ot=Ne(_,ot);let pt=s.convert(_.format,_.colorSpace),Ot=s.convert(_.type),Et=w(_.internalFormat,pt,Ot,_.colorSpace,_.isVideoTexture);te(j,_);let ft,jt=_.mipmaps,U=_.isVideoTexture!==!0,st=At.__version===void 0||et===!0,ct=K.dataReady,Mt=v(_,ot);if(_.isDepthTexture)Et=m(_.format===Vr,_.type),st&&(U?e.texStorage2D(i.TEXTURE_2D,1,Et,ot.width,ot.height):e.texImage2D(i.TEXTURE_2D,0,Et,ot.width,ot.height,0,pt,Ot,null));else if(_.isDataTexture)if(jt.length>0){U&&st&&e.texStorage2D(i.TEXTURE_2D,Mt,Et,jt[0].width,jt[0].height);for(let it=0,J=jt.length;it<J;it++)ft=jt[it],U?ct&&e.texSubImage2D(i.TEXTURE_2D,it,0,0,ft.width,ft.height,pt,Ot,ft.data):e.texImage2D(i.TEXTURE_2D,it,Et,ft.width,ft.height,0,pt,Ot,ft.data);_.generateMipmaps=!1}else U?(st&&e.texStorage2D(i.TEXTURE_2D,Mt,Et,ot.width,ot.height),ct&&ce(_,ot,pt,Ot)):e.texImage2D(i.TEXTURE_2D,0,Et,ot.width,ot.height,0,pt,Ot,ot.data);else if(_.isCompressedTexture)if(_.isCompressedArrayTexture){U&&st&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Mt,Et,jt[0].width,jt[0].height,ot.depth);for(let it=0,J=jt.length;it<J;it++)if(ft=jt[it],_.format!==On)if(pt!==null)if(U){if(ct)if(_.layerUpdates.size>0){let wt=Mc(ft.width,ft.height,_.format,_.type);for(let qt of _.layerUpdates){let xe=ft.data.subarray(qt*wt/ft.data.BYTES_PER_ELEMENT,(qt+1)*wt/ft.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,it,0,0,qt,ft.width,ft.height,1,pt,xe)}_.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,it,0,0,0,ft.width,ft.height,ot.depth,pt,ft.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,it,Et,ft.width,ft.height,ot.depth,0,ft.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else U?ct&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,it,0,0,0,ft.width,ft.height,ot.depth,pt,Ot,ft.data):e.texImage3D(i.TEXTURE_2D_ARRAY,it,Et,ft.width,ft.height,ot.depth,0,pt,Ot,ft.data)}else{U&&st&&e.texStorage2D(i.TEXTURE_2D,Mt,Et,jt[0].width,jt[0].height);for(let it=0,J=jt.length;it<J;it++)ft=jt[it],_.format!==On?pt!==null?U?ct&&e.compressedTexSubImage2D(i.TEXTURE_2D,it,0,0,ft.width,ft.height,pt,ft.data):e.compressedTexImage2D(i.TEXTURE_2D,it,Et,ft.width,ft.height,0,ft.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):U?ct&&e.texSubImage2D(i.TEXTURE_2D,it,0,0,ft.width,ft.height,pt,Ot,ft.data):e.texImage2D(i.TEXTURE_2D,it,Et,ft.width,ft.height,0,pt,Ot,ft.data)}else if(_.isDataArrayTexture)if(U){if(st&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Mt,Et,ot.width,ot.height,ot.depth),ct)if(_.layerUpdates.size>0){let it=Mc(ot.width,ot.height,_.format,_.type);for(let J of _.layerUpdates){let wt=ot.data.subarray(J*it/ot.data.BYTES_PER_ELEMENT,(J+1)*it/ot.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,J,ot.width,ot.height,1,pt,Ot,wt)}_.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,ot.width,ot.height,ot.depth,pt,Ot,ot.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,Et,ot.width,ot.height,ot.depth,0,pt,Ot,ot.data);else if(_.isData3DTexture)U?(st&&e.texStorage3D(i.TEXTURE_3D,Mt,Et,ot.width,ot.height,ot.depth),ct&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,ot.width,ot.height,ot.depth,pt,Ot,ot.data)):e.texImage3D(i.TEXTURE_3D,0,Et,ot.width,ot.height,ot.depth,0,pt,Ot,ot.data);else if(_.isFramebufferTexture){if(st)if(U)e.texStorage2D(i.TEXTURE_2D,Mt,Et,ot.width,ot.height);else{let it=ot.width,J=ot.height;for(let wt=0;wt<Mt;wt++)e.texImage2D(i.TEXTURE_2D,wt,Et,it,J,0,pt,Ot,null),it>>=1,J>>=1}}else if(jt.length>0){if(U&&st){let it=Zt(jt[0]);e.texStorage2D(i.TEXTURE_2D,Mt,Et,it.width,it.height)}for(let it=0,J=jt.length;it<J;it++)ft=jt[it],U?ct&&e.texSubImage2D(i.TEXTURE_2D,it,0,0,pt,Ot,ft):e.texImage2D(i.TEXTURE_2D,it,Et,pt,Ot,ft);_.generateMipmaps=!1}else if(U){if(st){let it=Zt(ot);e.texStorage2D(i.TEXTURE_2D,Mt,Et,it.width,it.height)}ct&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,pt,Ot,ot)}else e.texImage2D(i.TEXTURE_2D,0,Et,pt,Ot,ot);g(_)&&p(j),At.__version=K.version,_.onUpdate&&_.onUpdate(_)}C.__version=_.version}function Y(C,_,B){if(_.image.length!==6)return;let j=ge(C,_),et=_.source;e.bindTexture(i.TEXTURE_CUBE_MAP,C.__webglTexture,i.TEXTURE0+B);let K=n.get(et);if(et.version!==K.__version||j===!0){e.activeTexture(i.TEXTURE0+B);let At=fe.getPrimaries(fe.workingColorSpace),rt=_.colorSpace===Kn?null:fe.getPrimaries(_.colorSpace),Tt=_.colorSpace===Kn||At===rt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,_.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,_.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Tt);let It=_.isCompressedTexture||_.image[0].isCompressedTexture,ot=_.image[0]&&_.image[0].isDataTexture,pt=[];for(let J=0;J<6;J++)!It&&!ot?pt[J]=y(_.image[J],!0,r.maxCubemapSize):pt[J]=ot?_.image[J].image:_.image[J],pt[J]=Ne(_,pt[J]);let Ot=pt[0],Et=s.convert(_.format,_.colorSpace),ft=s.convert(_.type),jt=w(_.internalFormat,Et,ft,_.colorSpace),U=_.isVideoTexture!==!0,st=K.__version===void 0||j===!0,ct=et.dataReady,Mt=v(_,Ot);te(i.TEXTURE_CUBE_MAP,_);let it;if(It){U&&st&&e.texStorage2D(i.TEXTURE_CUBE_MAP,Mt,jt,Ot.width,Ot.height);for(let J=0;J<6;J++){it=pt[J].mipmaps;for(let wt=0;wt<it.length;wt++){let qt=it[wt];_.format!==On?Et!==null?U?ct&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,wt,0,0,qt.width,qt.height,Et,qt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,wt,jt,qt.width,qt.height,0,qt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):U?ct&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,wt,0,0,qt.width,qt.height,Et,ft,qt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,wt,jt,qt.width,qt.height,0,Et,ft,qt.data)}}}else{if(it=_.mipmaps,U&&st){it.length>0&&Mt++;let J=Zt(pt[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,Mt,jt,J.width,J.height)}for(let J=0;J<6;J++)if(ot){U?ct&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,0,0,pt[J].width,pt[J].height,Et,ft,pt[J].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,jt,pt[J].width,pt[J].height,0,Et,ft,pt[J].data);for(let wt=0;wt<it.length;wt++){let xe=it[wt].image[J].image;U?ct&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,wt+1,0,0,xe.width,xe.height,Et,ft,xe.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,wt+1,jt,xe.width,xe.height,0,Et,ft,xe.data)}}else{U?ct&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,0,0,Et,ft,pt[J]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,jt,Et,ft,pt[J]);for(let wt=0;wt<it.length;wt++){let qt=it[wt];U?ct&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,wt+1,0,0,Et,ft,qt.image[J]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,wt+1,jt,Et,ft,qt.image[J])}}}g(_)&&p(i.TEXTURE_CUBE_MAP),K.__version=et.version,_.onUpdate&&_.onUpdate(_)}C.__version=_.version}function St(C,_,B,j,et,K){let At=s.convert(B.format,B.colorSpace),rt=s.convert(B.type),Tt=w(B.internalFormat,At,rt,B.colorSpace),It=n.get(_),ot=n.get(B);if(ot.__renderTarget=_,!It.__hasExternalTextures){let pt=Math.max(1,_.width>>K),Ot=Math.max(1,_.height>>K);et===i.TEXTURE_3D||et===i.TEXTURE_2D_ARRAY?e.texImage3D(et,K,Tt,pt,Ot,_.depth,0,At,rt,null):e.texImage2D(et,K,Tt,pt,Ot,0,At,rt,null)}e.bindFramebuffer(i.FRAMEBUFFER,C),bt(_)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,j,et,ot.__webglTexture,0,re(_)):(et===i.TEXTURE_2D||et>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&et<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,j,et,ot.__webglTexture,K),e.bindFramebuffer(i.FRAMEBUFFER,null)}function Pt(C,_,B){if(i.bindRenderbuffer(i.RENDERBUFFER,C),_.depthBuffer){let j=_.depthTexture,et=j&&j.isDepthTexture?j.type:null,K=m(_.stencilBuffer,et),At=_.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,rt=re(_);bt(_)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,rt,K,_.width,_.height):B?i.renderbufferStorageMultisample(i.RENDERBUFFER,rt,K,_.width,_.height):i.renderbufferStorage(i.RENDERBUFFER,K,_.width,_.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,At,i.RENDERBUFFER,C)}else{let j=_.textures;for(let et=0;et<j.length;et++){let K=j[et],At=s.convert(K.format,K.colorSpace),rt=s.convert(K.type),Tt=w(K.internalFormat,At,rt,K.colorSpace),It=re(_);B&&bt(_)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,It,Tt,_.width,_.height):bt(_)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,It,Tt,_.width,_.height):i.renderbufferStorage(i.RENDERBUFFER,Tt,_.width,_.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function yt(C,_){if(_&&_.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,C),!(_.depthTexture&&_.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let j=n.get(_.depthTexture);j.__renderTarget=_,(!j.__webglTexture||_.depthTexture.image.width!==_.width||_.depthTexture.image.height!==_.height)&&(_.depthTexture.image.width=_.width,_.depthTexture.image.height=_.height,_.depthTexture.needsUpdate=!0),X(_.depthTexture,0);let et=j.__webglTexture,K=re(_);if(_.depthTexture.format===Tr)bt(_)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,et,0,K):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,et,0);else if(_.depthTexture.format===Vr)bt(_)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,et,0,K):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,et,0);else throw new Error("Unknown depthTexture format")}function oe(C){let _=n.get(C),B=C.isWebGLCubeRenderTarget===!0;if(_.__boundDepthTexture!==C.depthTexture){let j=C.depthTexture;if(_.__depthDisposeCallback&&_.__depthDisposeCallback(),j){let et=()=>{delete _.__boundDepthTexture,delete _.__depthDisposeCallback,j.removeEventListener("dispose",et)};j.addEventListener("dispose",et),_.__depthDisposeCallback=et}_.__boundDepthTexture=j}if(C.depthTexture&&!_.__autoAllocateDepthBuffer){if(B)throw new Error("target.depthTexture not supported in Cube render targets");let j=C.texture.mipmaps;j&&j.length>0?yt(_.__webglFramebuffer[0],C):yt(_.__webglFramebuffer,C)}else if(B){_.__webglDepthbuffer=[];for(let j=0;j<6;j++)if(e.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer[j]),_.__webglDepthbuffer[j]===void 0)_.__webglDepthbuffer[j]=i.createRenderbuffer(),Pt(_.__webglDepthbuffer[j],C,!1);else{let et=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,K=_.__webglDepthbuffer[j];i.bindRenderbuffer(i.RENDERBUFFER,K),i.framebufferRenderbuffer(i.FRAMEBUFFER,et,i.RENDERBUFFER,K)}}else{let j=C.texture.mipmaps;if(j&&j.length>0?e.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer[0]):e.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer),_.__webglDepthbuffer===void 0)_.__webglDepthbuffer=i.createRenderbuffer(),Pt(_.__webglDepthbuffer,C,!1);else{let et=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,K=_.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,K),i.framebufferRenderbuffer(i.FRAMEBUFFER,et,i.RENDERBUFFER,K)}}e.bindFramebuffer(i.FRAMEBUFFER,null)}function qe(C,_,B){let j=n.get(C);_!==void 0&&St(j.__webglFramebuffer,C,C.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),B!==void 0&&oe(C)}function I(C){let _=C.texture,B=n.get(C),j=n.get(_);C.addEventListener("dispose",b);let et=C.textures,K=C.isWebGLCubeRenderTarget===!0,At=et.length>1;if(At||(j.__webglTexture===void 0&&(j.__webglTexture=i.createTexture()),j.__version=_.version,o.memory.textures++),K){B.__webglFramebuffer=[];for(let rt=0;rt<6;rt++)if(_.mipmaps&&_.mipmaps.length>0){B.__webglFramebuffer[rt]=[];for(let Tt=0;Tt<_.mipmaps.length;Tt++)B.__webglFramebuffer[rt][Tt]=i.createFramebuffer()}else B.__webglFramebuffer[rt]=i.createFramebuffer()}else{if(_.mipmaps&&_.mipmaps.length>0){B.__webglFramebuffer=[];for(let rt=0;rt<_.mipmaps.length;rt++)B.__webglFramebuffer[rt]=i.createFramebuffer()}else B.__webglFramebuffer=i.createFramebuffer();if(At)for(let rt=0,Tt=et.length;rt<Tt;rt++){let It=n.get(et[rt]);It.__webglTexture===void 0&&(It.__webglTexture=i.createTexture(),o.memory.textures++)}if(C.samples>0&&bt(C)===!1){B.__webglMultisampledFramebuffer=i.createFramebuffer(),B.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,B.__webglMultisampledFramebuffer);for(let rt=0;rt<et.length;rt++){let Tt=et[rt];B.__webglColorRenderbuffer[rt]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,B.__webglColorRenderbuffer[rt]);let It=s.convert(Tt.format,Tt.colorSpace),ot=s.convert(Tt.type),pt=w(Tt.internalFormat,It,ot,Tt.colorSpace,C.isXRRenderTarget===!0),Ot=re(C);i.renderbufferStorageMultisample(i.RENDERBUFFER,Ot,pt,C.width,C.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+rt,i.RENDERBUFFER,B.__webglColorRenderbuffer[rt])}i.bindRenderbuffer(i.RENDERBUFFER,null),C.depthBuffer&&(B.__webglDepthRenderbuffer=i.createRenderbuffer(),Pt(B.__webglDepthRenderbuffer,C,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(K){e.bindTexture(i.TEXTURE_CUBE_MAP,j.__webglTexture),te(i.TEXTURE_CUBE_MAP,_);for(let rt=0;rt<6;rt++)if(_.mipmaps&&_.mipmaps.length>0)for(let Tt=0;Tt<_.mipmaps.length;Tt++)St(B.__webglFramebuffer[rt][Tt],C,_,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+rt,Tt);else St(B.__webglFramebuffer[rt],C,_,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+rt,0);g(_)&&p(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(At){for(let rt=0,Tt=et.length;rt<Tt;rt++){let It=et[rt],ot=n.get(It),pt=i.TEXTURE_2D;(C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(pt=C.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(pt,ot.__webglTexture),te(pt,It),St(B.__webglFramebuffer,C,It,i.COLOR_ATTACHMENT0+rt,pt,0),g(It)&&p(pt)}e.unbindTexture()}else{let rt=i.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(rt=C.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(rt,j.__webglTexture),te(rt,_),_.mipmaps&&_.mipmaps.length>0)for(let Tt=0;Tt<_.mipmaps.length;Tt++)St(B.__webglFramebuffer[Tt],C,_,i.COLOR_ATTACHMENT0,rt,Tt);else St(B.__webglFramebuffer,C,_,i.COLOR_ATTACHMENT0,rt,0);g(_)&&p(rt),e.unbindTexture()}C.depthBuffer&&oe(C)}function ie(C){let _=C.textures;for(let B=0,j=_.length;B<j;B++){let et=_[B];if(g(et)){let K=A(C),At=n.get(et).__webglTexture;e.bindTexture(K,At),p(K),e.unbindTexture()}}}let Ft=[],Dt=[];function xt(C){if(C.samples>0){if(bt(C)===!1){let _=C.textures,B=C.width,j=C.height,et=i.COLOR_BUFFER_BIT,K=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,At=n.get(C),rt=_.length>1;if(rt)for(let It=0;It<_.length;It++)e.bindFramebuffer(i.FRAMEBUFFER,At.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+It,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,At.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+It,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,At.__webglMultisampledFramebuffer);let Tt=C.texture.mipmaps;Tt&&Tt.length>0?e.bindFramebuffer(i.DRAW_FRAMEBUFFER,At.__webglFramebuffer[0]):e.bindFramebuffer(i.DRAW_FRAMEBUFFER,At.__webglFramebuffer);for(let It=0;It<_.length;It++){if(C.resolveDepthBuffer&&(C.depthBuffer&&(et|=i.DEPTH_BUFFER_BIT),C.stencilBuffer&&C.resolveStencilBuffer&&(et|=i.STENCIL_BUFFER_BIT)),rt){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,At.__webglColorRenderbuffer[It]);let ot=n.get(_[It]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,ot,0)}i.blitFramebuffer(0,0,B,j,0,0,B,j,et,i.NEAREST),l===!0&&(Ft.length=0,Dt.length=0,Ft.push(i.COLOR_ATTACHMENT0+It),C.depthBuffer&&C.resolveDepthBuffer===!1&&(Ft.push(K),Dt.push(K),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,Dt)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Ft))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),rt)for(let It=0;It<_.length;It++){e.bindFramebuffer(i.FRAMEBUFFER,At.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+It,i.RENDERBUFFER,At.__webglColorRenderbuffer[It]);let ot=n.get(_[It]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,At.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+It,i.TEXTURE_2D,ot,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,At.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.resolveDepthBuffer===!1&&l){let _=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[_])}}}function re(C){return Math.min(r.maxSamples,C.samples)}function bt(C){let _=n.get(C);return C.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&_.__useRenderToTexture!==!1}function Kt(C){let _=o.render.frame;h.get(C)!==_&&(h.set(C,_),C.update())}function Ne(C,_){let B=C.colorSpace,j=C.format,et=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||B!==Xi&&B!==Kn&&(fe.getTransfer(B)===Me?(j!==On||et!==ti)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",B)),_}function Zt(C){return typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement?(c.width=C.naturalWidth||C.width,c.height=C.naturalHeight||C.height):typeof VideoFrame<"u"&&C instanceof VideoFrame?(c.width=C.displayWidth,c.height=C.displayHeight):(c.width=C.width,c.height=C.height),c}this.allocateTextureUnit=H,this.resetTextureUnits=D,this.setTexture2D=X,this.setTexture2DArray=z,this.setTexture3D=tt,this.setTextureCube=k,this.rebindTextures=qe,this.setupRenderTarget=I,this.updateRenderTargetMipmap=ie,this.updateMultisampleRenderTarget=xt,this.setupDepthRenderbuffer=oe,this.setupFrameBufferTexture=St,this.useMultisampledRTT=bt}function Gg(i,t){function e(n,r=Kn){let s,o=fe.getTransfer(r);if(n===ti)return i.UNSIGNED_BYTE;if(n===xa)return i.UNSIGNED_SHORT_4_4_4_4;if(n===va)return i.UNSIGNED_SHORT_5_5_5_1;if(n===ac)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===lc)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===sc)return i.BYTE;if(n===oc)return i.SHORT;if(n===kr)return i.UNSIGNED_SHORT;if(n===ga)return i.INT;if(n===Fi)return i.UNSIGNED_INT;if(n===ei)return i.FLOAT;if(n===Nn)return i.HALF_FLOAT;if(n===cc)return i.ALPHA;if(n===hc)return i.RGB;if(n===On)return i.RGBA;if(n===Tr)return i.DEPTH_COMPONENT;if(n===Vr)return i.DEPTH_STENCIL;if(n===uc)return i.RED;if(n===ya)return i.RED_INTEGER;if(n===fc)return i.RG;if(n===Ma)return i.RG_INTEGER;if(n===Sa)return i.RGBA_INTEGER;if(n===Hs||n===ks||n===Gs||n===Vs)if(o===Me)if(s=t.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===Hs)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===ks)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Gs)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Vs)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=t.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===Hs)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===ks)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Gs)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Vs)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===_a||n===ba||n===Ea||n===wa)if(s=t.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===_a)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===ba)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Ea)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===wa)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Aa||n===Ta||n===Ra)if(s=t.get("WEBGL_compressed_texture_etc"),s!==null){if(n===Aa||n===Ta)return o===Me?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===Ra)return o===Me?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Ca||n===Ia||n===Pa||n===Fa||n===Ua||n===Da||n===La||n===Na||n===Oa||n===Ba||n===za||n===Ha||n===ka||n===Ga)if(s=t.get("WEBGL_compressed_texture_astc"),s!==null){if(n===Ca)return o===Me?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Ia)return o===Me?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Pa)return o===Me?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Fa)return o===Me?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Ua)return o===Me?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Da)return o===Me?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===La)return o===Me?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Na)return o===Me?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Oa)return o===Me?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Ba)return o===Me?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===za)return o===Me?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Ha)return o===Me?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===ka)return o===Me?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Ga)return o===Me?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Va||n===Wa||n===Xa)if(s=t.get("EXT_texture_compression_bptc"),s!==null){if(n===Va)return o===Me?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Wa)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Xa)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Ka||n===ja||n===qa||n===Ja)if(s=t.get("EXT_texture_compression_rgtc"),s!==null){if(n===Ka)return s.COMPRESSED_RED_RGTC1_EXT;if(n===ja)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===qa)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Ja)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Gr?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}var Vg=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Wg=`
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

}`,Uc=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let n=new Es(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new Se({vertexShader:Vg,fragmentShader:Wg,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Wt(new Mn(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Dc=class extends di{constructor(t,e){super();let n=this,r=null,s=1,o=null,a="local-floor",l=1,c=null,h=null,u=null,f=null,d=null,x=null,y=typeof XRWebGLBinding<"u",g=new Uc,p={},A=e.getContextAttributes(),w=null,m=null,v=[],M=[],b=new nt,R=null,S=new tn;S.viewport=new De;let E=new tn;E.viewport=new De;let P=[S,E],D=new $o,H=null,O=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(q){let Y=v[q];return Y===void 0&&(Y=new Fr,v[q]=Y),Y.getTargetRaySpace()},this.getControllerGrip=function(q){let Y=v[q];return Y===void 0&&(Y=new Fr,v[q]=Y),Y.getGripSpace()},this.getHand=function(q){let Y=v[q];return Y===void 0&&(Y=new Fr,v[q]=Y),Y.getHandSpace()};function X(q){let Y=M.indexOf(q.inputSource);if(Y===-1)return;let St=v[Y];St!==void 0&&(St.update(q.inputSource,q.frame,c||o),St.dispatchEvent({type:q.type,data:q.inputSource}))}function z(){r.removeEventListener("select",X),r.removeEventListener("selectstart",X),r.removeEventListener("selectend",X),r.removeEventListener("squeeze",X),r.removeEventListener("squeezestart",X),r.removeEventListener("squeezeend",X),r.removeEventListener("end",z),r.removeEventListener("inputsourceschange",tt);for(let q=0;q<v.length;q++){let Y=M[q];Y!==null&&(M[q]=null,v[q].disconnect(Y))}H=null,O=null,g.reset();for(let q in p)delete p[q];t.setRenderTarget(w),d=null,f=null,u=null,r=null,m=null,ce.stop(),n.isPresenting=!1,t.setPixelRatio(R),t.setSize(b.width,b.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(q){s=q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(q){a=q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(q){c=q},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return u===null&&y&&(u=new XRWebGLBinding(r,e)),u},this.getFrame=function(){return x},this.getSession=function(){return r},this.setSession=async function(q){if(r=q,r!==null){if(w=t.getRenderTarget(),r.addEventListener("select",X),r.addEventListener("selectstart",X),r.addEventListener("selectend",X),r.addEventListener("squeeze",X),r.addEventListener("squeezestart",X),r.addEventListener("squeezeend",X),r.addEventListener("end",z),r.addEventListener("inputsourceschange",tt),A.xrCompatible!==!0&&await e.makeXRCompatible(),R=t.getPixelRatio(),t.getSize(b),y&&"createProjectionLayer"in XRWebGLBinding.prototype){let St=null,Pt=null,yt=null;A.depth&&(yt=A.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,St=A.stencil?Vr:Tr,Pt=A.stencil?Gr:Fi);let oe={colorFormat:e.RGBA8,depthFormat:yt,scaleFactor:s};u=this.getBinding(),f=u.createProjectionLayer(oe),r.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),m=new en(f.textureWidth,f.textureHeight,{format:On,type:ti,depthTexture:new bs(f.textureWidth,f.textureHeight,Pt,void 0,void 0,void 0,void 0,void 0,void 0,St),stencilBuffer:A.stencil,colorSpace:t.outputColorSpace,samples:A.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}else{let St={antialias:A.antialias,alpha:!0,depth:A.depth,stencil:A.stencil,framebufferScaleFactor:s};d=new XRWebGLLayer(r,e,St),r.updateRenderState({baseLayer:d}),t.setPixelRatio(1),t.setSize(d.framebufferWidth,d.framebufferHeight,!1),m=new en(d.framebufferWidth,d.framebufferHeight,{format:On,type:ti,colorSpace:t.outputColorSpace,stencilBuffer:A.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}m.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await r.requestReferenceSpace(a),ce.setContext(r),ce.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function tt(q){for(let Y=0;Y<q.removed.length;Y++){let St=q.removed[Y],Pt=M.indexOf(St);Pt>=0&&(M[Pt]=null,v[Pt].disconnect(St))}for(let Y=0;Y<q.added.length;Y++){let St=q.added[Y],Pt=M.indexOf(St);if(Pt===-1){for(let oe=0;oe<v.length;oe++)if(oe>=M.length){M.push(St),Pt=oe;break}else if(M[oe]===null){M[oe]=St,Pt=oe;break}if(Pt===-1)break}let yt=v[Pt];yt&&yt.connect(St)}}let k=new F,lt=new F;function dt(q,Y,St){k.setFromMatrixPosition(Y.matrixWorld),lt.setFromMatrixPosition(St.matrixWorld);let Pt=k.distanceTo(lt),yt=Y.projectionMatrix.elements,oe=St.projectionMatrix.elements,qe=yt[14]/(yt[10]-1),I=yt[14]/(yt[10]+1),ie=(yt[9]+1)/yt[5],Ft=(yt[9]-1)/yt[5],Dt=(yt[8]-1)/yt[0],xt=(oe[8]+1)/oe[0],re=qe*Dt,bt=qe*xt,Kt=Pt/(-Dt+xt),Ne=Kt*-Dt;if(Y.matrixWorld.decompose(q.position,q.quaternion,q.scale),q.translateX(Ne),q.translateZ(Kt),q.matrixWorld.compose(q.position,q.quaternion,q.scale),q.matrixWorldInverse.copy(q.matrixWorld).invert(),yt[10]===-1)q.projectionMatrix.copy(Y.projectionMatrix),q.projectionMatrixInverse.copy(Y.projectionMatrixInverse);else{let Zt=qe+Kt,C=I+Kt,_=re-Ne,B=bt+(Pt-Ne),j=ie*I/C*Zt,et=Ft*I/C*Zt;q.projectionMatrix.makePerspective(_,B,j,et,Zt,C),q.projectionMatrixInverse.copy(q.projectionMatrix).invert()}}function Rt(q,Y){Y===null?q.matrixWorld.copy(q.matrix):q.matrixWorld.multiplyMatrices(Y.matrixWorld,q.matrix),q.matrixWorldInverse.copy(q.matrixWorld).invert()}this.updateCamera=function(q){if(r===null)return;let Y=q.near,St=q.far;g.texture!==null&&(g.depthNear>0&&(Y=g.depthNear),g.depthFar>0&&(St=g.depthFar)),D.near=E.near=S.near=Y,D.far=E.far=S.far=St,(H!==D.near||O!==D.far)&&(r.updateRenderState({depthNear:D.near,depthFar:D.far}),H=D.near,O=D.far),D.layers.mask=q.layers.mask|6,S.layers.mask=D.layers.mask&3,E.layers.mask=D.layers.mask&5;let Pt=q.parent,yt=D.cameras;Rt(D,Pt);for(let oe=0;oe<yt.length;oe++)Rt(yt[oe],Pt);yt.length===2?dt(D,S,E):D.projectionMatrix.copy(S.projectionMatrix),te(q,D,Pt)};function te(q,Y,St){St===null?q.matrix.copy(Y.matrixWorld):(q.matrix.copy(St.matrixWorld),q.matrix.invert(),q.matrix.multiply(Y.matrixWorld)),q.matrix.decompose(q.position,q.quaternion,q.scale),q.updateMatrixWorld(!0),q.projectionMatrix.copy(Y.projectionMatrix),q.projectionMatrixInverse.copy(Y.projectionMatrixInverse),q.isPerspectiveCamera&&(q.fov=Ro*2*Math.atan(1/q.projectionMatrix.elements[5]),q.zoom=1)}this.getCamera=function(){return D},this.getFoveation=function(){if(!(f===null&&d===null))return l},this.setFoveation=function(q){l=q,f!==null&&(f.fixedFoveation=q),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=q)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(D)},this.getCameraTexture=function(q){return p[q]};let ge=null;function Ie(q,Y){if(h=Y.getViewerPose(c||o),x=Y,h!==null){let St=h.views;d!==null&&(t.setRenderTargetFramebuffer(m,d.framebuffer),t.setRenderTarget(m));let Pt=!1;St.length!==D.cameras.length&&(D.cameras.length=0,Pt=!0);for(let I=0;I<St.length;I++){let ie=St[I],Ft=null;if(d!==null)Ft=d.getViewport(ie);else{let xt=u.getViewSubImage(f,ie);Ft=xt.viewport,I===0&&(t.setRenderTargetTextures(m,xt.colorTexture,xt.depthStencilTexture),t.setRenderTarget(m))}let Dt=P[I];Dt===void 0&&(Dt=new tn,Dt.layers.enable(I),Dt.viewport=new De,P[I]=Dt),Dt.matrix.fromArray(ie.transform.matrix),Dt.matrix.decompose(Dt.position,Dt.quaternion,Dt.scale),Dt.projectionMatrix.fromArray(ie.projectionMatrix),Dt.projectionMatrixInverse.copy(Dt.projectionMatrix).invert(),Dt.viewport.set(Ft.x,Ft.y,Ft.width,Ft.height),I===0&&(D.matrix.copy(Dt.matrix),D.matrix.decompose(D.position,D.quaternion,D.scale)),Pt===!0&&D.cameras.push(Dt)}let yt=r.enabledFeatures;if(yt&&yt.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&y){u=n.getBinding();let I=u.getDepthInformation(St[0]);I&&I.isValid&&I.texture&&g.init(I,r.renderState)}if(yt&&yt.includes("camera-access")&&y){t.state.unbindTexture(),u=n.getBinding();for(let I=0;I<St.length;I++){let ie=St[I].camera;if(ie){let Ft=p[ie];Ft||(Ft=new Es,p[ie]=Ft);let Dt=u.getCameraImage(ie);Ft.sourceTexture=Dt}}}}for(let St=0;St<v.length;St++){let Pt=M[St],yt=v[St];Pt!==null&&yt!==void 0&&yt.update(Pt,Y,c||o)}ge&&ge(q,Y),Y.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:Y}),x=null}let ce=new Du;ce.setAnimationLoop(Ie),this.setAnimationLoop=function(q){ge=q},this.dispose=function(){}}},er=new Yn,Xg=new _e;function Kg(i,t){function e(g,p){g.matrixAutoUpdate===!0&&g.updateMatrix(),p.value.copy(g.matrix)}function n(g,p){p.color.getRGB(g.fogColor.value,gc(i)),p.isFog?(g.fogNear.value=p.near,g.fogFar.value=p.far):p.isFogExp2&&(g.fogDensity.value=p.density)}function r(g,p,A,w,m){p.isMeshBasicMaterial||p.isMeshLambertMaterial?s(g,p):p.isMeshToonMaterial?(s(g,p),u(g,p)):p.isMeshPhongMaterial?(s(g,p),h(g,p)):p.isMeshStandardMaterial?(s(g,p),f(g,p),p.isMeshPhysicalMaterial&&d(g,p,m)):p.isMeshMatcapMaterial?(s(g,p),x(g,p)):p.isMeshDepthMaterial?s(g,p):p.isMeshDistanceMaterial?(s(g,p),y(g,p)):p.isMeshNormalMaterial?s(g,p):p.isLineBasicMaterial?(o(g,p),p.isLineDashedMaterial&&a(g,p)):p.isPointsMaterial?l(g,p,A,w):p.isSpriteMaterial?c(g,p):p.isShadowMaterial?(g.color.value.copy(p.color),g.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(g,p){g.opacity.value=p.opacity,p.color&&g.diffuse.value.copy(p.color),p.emissive&&g.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(g.map.value=p.map,e(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,e(p.alphaMap,g.alphaMapTransform)),p.bumpMap&&(g.bumpMap.value=p.bumpMap,e(p.bumpMap,g.bumpMapTransform),g.bumpScale.value=p.bumpScale,p.side===on&&(g.bumpScale.value*=-1)),p.normalMap&&(g.normalMap.value=p.normalMap,e(p.normalMap,g.normalMapTransform),g.normalScale.value.copy(p.normalScale),p.side===on&&g.normalScale.value.negate()),p.displacementMap&&(g.displacementMap.value=p.displacementMap,e(p.displacementMap,g.displacementMapTransform),g.displacementScale.value=p.displacementScale,g.displacementBias.value=p.displacementBias),p.emissiveMap&&(g.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,g.emissiveMapTransform)),p.specularMap&&(g.specularMap.value=p.specularMap,e(p.specularMap,g.specularMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest);let A=t.get(p),w=A.envMap,m=A.envMapRotation;w&&(g.envMap.value=w,er.copy(m),er.x*=-1,er.y*=-1,er.z*=-1,w.isCubeTexture&&w.isRenderTargetTexture===!1&&(er.y*=-1,er.z*=-1),g.envMapRotation.value.setFromMatrix4(Xg.makeRotationFromEuler(er)),g.flipEnvMap.value=w.isCubeTexture&&w.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=p.reflectivity,g.ior.value=p.ior,g.refractionRatio.value=p.refractionRatio),p.lightMap&&(g.lightMap.value=p.lightMap,g.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,g.lightMapTransform)),p.aoMap&&(g.aoMap.value=p.aoMap,g.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,g.aoMapTransform))}function o(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,p.map&&(g.map.value=p.map,e(p.map,g.mapTransform))}function a(g,p){g.dashSize.value=p.dashSize,g.totalSize.value=p.dashSize+p.gapSize,g.scale.value=p.scale}function l(g,p,A,w){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.size.value=p.size*A,g.scale.value=w*.5,p.map&&(g.map.value=p.map,e(p.map,g.uvTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,e(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function c(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.rotation.value=p.rotation,p.map&&(g.map.value=p.map,e(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,e(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function h(g,p){g.specular.value.copy(p.specular),g.shininess.value=Math.max(p.shininess,1e-4)}function u(g,p){p.gradientMap&&(g.gradientMap.value=p.gradientMap)}function f(g,p){g.metalness.value=p.metalness,p.metalnessMap&&(g.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,g.metalnessMapTransform)),g.roughness.value=p.roughness,p.roughnessMap&&(g.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,g.roughnessMapTransform)),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)}function d(g,p,A){g.ior.value=p.ior,p.sheen>0&&(g.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),g.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(g.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,g.sheenColorMapTransform)),p.sheenRoughnessMap&&(g.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,g.sheenRoughnessMapTransform))),p.clearcoat>0&&(g.clearcoat.value=p.clearcoat,g.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(g.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,g.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(g.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===on&&g.clearcoatNormalScale.value.negate())),p.dispersion>0&&(g.dispersion.value=p.dispersion),p.iridescence>0&&(g.iridescence.value=p.iridescence,g.iridescenceIOR.value=p.iridescenceIOR,g.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(g.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,g.iridescenceMapTransform)),p.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),p.transmission>0&&(g.transmission.value=p.transmission,g.transmissionSamplerMap.value=A.texture,g.transmissionSamplerSize.value.set(A.width,A.height),p.transmissionMap&&(g.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,g.transmissionMapTransform)),g.thickness.value=p.thickness,p.thicknessMap&&(g.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=p.attenuationDistance,g.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(g.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(g.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=p.specularIntensity,g.specularColor.value.copy(p.specularColor),p.specularColorMap&&(g.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,g.specularColorMapTransform)),p.specularIntensityMap&&(g.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,g.specularIntensityMapTransform))}function x(g,p){p.matcap&&(g.matcap.value=p.matcap)}function y(g,p){let A=t.get(p).light;g.referencePosition.value.setFromMatrixPosition(A.matrixWorld),g.nearDistance.value=A.shadow.camera.near,g.farDistance.value=A.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function jg(i,t,e,n){let r={},s={},o=[],a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(A,w){let m=w.program;n.uniformBlockBinding(A,m)}function c(A,w){let m=r[A.id];m===void 0&&(x(A),m=h(A),r[A.id]=m,A.addEventListener("dispose",g));let v=w.program;n.updateUBOMapping(A,v);let M=t.render.frame;s[A.id]!==M&&(f(A),s[A.id]=M)}function h(A){let w=u();A.__bindingPointIndex=w;let m=i.createBuffer(),v=A.__size,M=A.usage;return i.bindBuffer(i.UNIFORM_BUFFER,m),i.bufferData(i.UNIFORM_BUFFER,v,M),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,w,m),m}function u(){for(let A=0;A<a;A++)if(o.indexOf(A)===-1)return o.push(A),A;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(A){let w=r[A.id],m=A.uniforms,v=A.__cache;i.bindBuffer(i.UNIFORM_BUFFER,w);for(let M=0,b=m.length;M<b;M++){let R=Array.isArray(m[M])?m[M]:[m[M]];for(let S=0,E=R.length;S<E;S++){let P=R[S];if(d(P,M,S,v)===!0){let D=P.__offset,H=Array.isArray(P.value)?P.value:[P.value],O=0;for(let X=0;X<H.length;X++){let z=H[X],tt=y(z);typeof z=="number"||typeof z=="boolean"?(P.__data[0]=z,i.bufferSubData(i.UNIFORM_BUFFER,D+O,P.__data)):z.isMatrix3?(P.__data[0]=z.elements[0],P.__data[1]=z.elements[1],P.__data[2]=z.elements[2],P.__data[3]=0,P.__data[4]=z.elements[3],P.__data[5]=z.elements[4],P.__data[6]=z.elements[5],P.__data[7]=0,P.__data[8]=z.elements[6],P.__data[9]=z.elements[7],P.__data[10]=z.elements[8],P.__data[11]=0):(z.toArray(P.__data,O),O+=tt.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,D,P.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function d(A,w,m,v){let M=A.value,b=w+"_"+m;if(v[b]===void 0)return typeof M=="number"||typeof M=="boolean"?v[b]=M:v[b]=M.clone(),!0;{let R=v[b];if(typeof M=="number"||typeof M=="boolean"){if(R!==M)return v[b]=M,!0}else if(R.equals(M)===!1)return R.copy(M),!0}return!1}function x(A){let w=A.uniforms,m=0,v=16;for(let b=0,R=w.length;b<R;b++){let S=Array.isArray(w[b])?w[b]:[w[b]];for(let E=0,P=S.length;E<P;E++){let D=S[E],H=Array.isArray(D.value)?D.value:[D.value];for(let O=0,X=H.length;O<X;O++){let z=H[O],tt=y(z),k=m%v,lt=k%tt.boundary,dt=k+lt;m+=lt,dt!==0&&v-dt<tt.storage&&(m+=v-dt),D.__data=new Float32Array(tt.storage/Float32Array.BYTES_PER_ELEMENT),D.__offset=m,m+=tt.storage}}}let M=m%v;return M>0&&(m+=v-M),A.__size=m,A.__cache={},this}function y(A){let w={boundary:0,storage:0};return typeof A=="number"||typeof A=="boolean"?(w.boundary=4,w.storage=4):A.isVector2?(w.boundary=8,w.storage=8):A.isVector3||A.isColor?(w.boundary=16,w.storage=12):A.isVector4?(w.boundary=16,w.storage=16):A.isMatrix3?(w.boundary=48,w.storage=48):A.isMatrix4?(w.boundary=64,w.storage=64):A.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",A),w}function g(A){let w=A.target;w.removeEventListener("dispose",g);let m=o.indexOf(w.__bindingPointIndex);o.splice(m,1),i.deleteBuffer(r[w.id]),delete r[w.id],delete s[w.id]}function p(){for(let A in r)i.deleteBuffer(r[A]);o=[],r={},s={}}return{bind:l,update:c,dispose:p}}var tl=class{constructor(t={}){let{canvas:e=nu(),context:n=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:f=!1}=t;this.isWebGLRenderer=!0;let d;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=n.getContextAttributes().alpha}else d=o;let x=new Uint32Array(4),y=new Int32Array(4),g=null,p=null,A=[],w=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=gi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let m=this,v=!1;this._outputColorSpace=$e;let M=0,b=0,R=null,S=-1,E=null,P=new De,D=new De,H=null,O=new vt(0),X=0,z=e.width,tt=e.height,k=1,lt=null,dt=null,Rt=new De(0,0,z,tt),te=new De(0,0,z,tt),ge=!1,Ie=new _s,ce=!1,q=!1,Y=new _e,St=new F,Pt=new De,yt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},oe=!1;function qe(){return R===null?k:1}let I=n;function ie(T,L){return e.getContext(T,L)}try{let T={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${"180"}`),e.addEventListener("webglcontextlost",ct,!1),e.addEventListener("webglcontextrestored",Mt,!1),e.addEventListener("webglcontextcreationerror",it,!1),I===null){let L="webgl2";if(I=ie(L,T),I===null)throw ie(L)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(T){throw console.error("THREE.WebGLRenderer: "+T.message),T}let Ft,Dt,xt,re,bt,Kt,Ne,Zt,C,_,B,j,et,K,At,rt,Tt,It,ot,pt,Ot,Et,ft,jt;function U(){Ft=new u0(I),Ft.init(),Et=new Gg(I,Ft),Dt=new r0(I,Ft,t,Et),xt=new Hg(I,Ft),Dt.reversedDepthBuffer&&f&&xt.buffers.depth.setReversed(!0),re=new p0(I),bt=new Tg,Kt=new kg(I,Ft,xt,bt,Dt,Et,re),Ne=new o0(m),Zt=new h0(m),C=new Md(I),ft=new n0(I,C),_=new f0(I,C,re,ft),B=new g0(I,_,C,re),ot=new m0(I,Dt,Kt),rt=new s0(bt),j=new Ag(m,Ne,Zt,Ft,Dt,ft,rt),et=new Kg(m,bt),K=new Cg,At=new Lg(Ft),It=new e0(m,Ne,Zt,xt,B,d,l),Tt=new Bg(m,B,Dt),jt=new jg(I,re,Dt,xt),pt=new i0(I,Ft,re),Ot=new d0(I,Ft,re),re.programs=j.programs,m.capabilities=Dt,m.extensions=Ft,m.properties=bt,m.renderLists=K,m.shadowMap=Tt,m.state=xt,m.info=re}U();let st=new Dc(m,I);this.xr=st,this.getContext=function(){return I},this.getContextAttributes=function(){return I.getContextAttributes()},this.forceContextLoss=function(){let T=Ft.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){let T=Ft.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return k},this.setPixelRatio=function(T){T!==void 0&&(k=T,this.setSize(z,tt,!1))},this.getSize=function(T){return T.set(z,tt)},this.setSize=function(T,L,G=!0){if(st.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}z=T,tt=L,e.width=Math.floor(T*k),e.height=Math.floor(L*k),G===!0&&(e.style.width=T+"px",e.style.height=L+"px"),this.setViewport(0,0,T,L)},this.getDrawingBufferSize=function(T){return T.set(z*k,tt*k).floor()},this.setDrawingBufferSize=function(T,L,G){z=T,tt=L,k=G,e.width=Math.floor(T*G),e.height=Math.floor(L*G),this.setViewport(0,0,T,L)},this.getCurrentViewport=function(T){return T.copy(P)},this.getViewport=function(T){return T.copy(Rt)},this.setViewport=function(T,L,G,V){T.isVector4?Rt.set(T.x,T.y,T.z,T.w):Rt.set(T,L,G,V),xt.viewport(P.copy(Rt).multiplyScalar(k).round())},this.getScissor=function(T){return T.copy(te)},this.setScissor=function(T,L,G,V){T.isVector4?te.set(T.x,T.y,T.z,T.w):te.set(T,L,G,V),xt.scissor(D.copy(te).multiplyScalar(k).round())},this.getScissorTest=function(){return ge},this.setScissorTest=function(T){xt.setScissorTest(ge=T)},this.setOpaqueSort=function(T){lt=T},this.setTransparentSort=function(T){dt=T},this.getClearColor=function(T){return T.copy(It.getClearColor())},this.setClearColor=function(){It.setClearColor(...arguments)},this.getClearAlpha=function(){return It.getClearAlpha()},this.setClearAlpha=function(){It.setClearAlpha(...arguments)},this.clear=function(T=!0,L=!0,G=!0){let V=0;if(T){let N=!1;if(R!==null){let at=R.texture.format;N=at===Sa||at===Ma||at===ya}if(N){let at=R.texture.type,mt=at===ti||at===Fi||at===kr||at===Gr||at===xa||at===va,Ct=It.getClearColor(),_t=It.getClearAlpha(),Ht=Ct.r,kt=Ct.g,Lt=Ct.b;mt?(x[0]=Ht,x[1]=kt,x[2]=Lt,x[3]=_t,I.clearBufferuiv(I.COLOR,0,x)):(y[0]=Ht,y[1]=kt,y[2]=Lt,y[3]=_t,I.clearBufferiv(I.COLOR,0,y))}else V|=I.COLOR_BUFFER_BIT}L&&(V|=I.DEPTH_BUFFER_BIT),G&&(V|=I.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),I.clear(V)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",ct,!1),e.removeEventListener("webglcontextrestored",Mt,!1),e.removeEventListener("webglcontextcreationerror",it,!1),It.dispose(),K.dispose(),At.dispose(),bt.dispose(),Ne.dispose(),Zt.dispose(),B.dispose(),ft.dispose(),jt.dispose(),j.dispose(),st.dispose(),st.removeEventListener("sessionstart",W),st.removeEventListener("sessionend",Q),Z.stop()};function ct(T){T.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),v=!0}function Mt(){console.log("THREE.WebGLRenderer: Context Restored."),v=!1;let T=re.autoReset,L=Tt.enabled,G=Tt.autoUpdate,V=Tt.needsUpdate,N=Tt.type;U(),re.autoReset=T,Tt.enabled=L,Tt.autoUpdate=G,Tt.needsUpdate=V,Tt.type=N}function it(T){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function J(T){let L=T.target;L.removeEventListener("dispose",J),wt(L)}function wt(T){qt(T),bt.remove(T)}function qt(T){let L=bt.get(T).programs;L!==void 0&&(L.forEach(function(G){j.releaseProgram(G)}),T.isShaderMaterial&&j.releaseShaderCache(T))}this.renderBufferDirect=function(T,L,G,V,N,at){L===null&&(L=yt);let mt=N.isMesh&&N.matrixWorld.determinant()<0,Ct=Je(T,L,G,V,N);xt.setMaterial(V,mt);let _t=G.index,Ht=1;if(V.wireframe===!0){if(_t=_.getWireframeAttribute(G),_t===void 0)return;Ht=2}let kt=G.drawRange,Lt=G.attributes.position,he=kt.start*Ht,we=(kt.start+kt.count)*Ht;at!==null&&(he=Math.max(he,at.start*Ht),we=Math.min(we,(at.start+at.count)*Ht)),_t!==null?(he=Math.max(he,0),we=Math.min(we,_t.count)):Lt!=null&&(he=Math.max(he,0),we=Math.min(we,Lt.count));let He=we-he;if(He<0||He===1/0)return;ft.setup(N,V,Ct,G,_t);let Fe,Te=pt;if(_t!==null&&(Fe=C.get(_t),Te=Ot,Te.setIndex(Fe)),N.isMesh)V.wireframe===!0?(xt.setLineWidth(V.wireframeLinewidth*qe()),Te.setMode(I.LINES)):Te.setMode(I.TRIANGLES);else if(N.isLine){let Bt=V.linewidth;Bt===void 0&&(Bt=1),xt.setLineWidth(Bt*qe()),N.isLineSegments?Te.setMode(I.LINES):N.isLineLoop?Te.setMode(I.LINE_LOOP):Te.setMode(I.LINE_STRIP)}else N.isPoints?Te.setMode(I.POINTS):N.isSprite&&Te.setMode(I.TRIANGLES);if(N.isBatchedMesh)if(N._multiDrawInstances!==null)Rr("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Te.renderMultiDrawInstances(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount,N._multiDrawInstances);else if(Ft.get("WEBGL_multi_draw"))Te.renderMultiDraw(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount);else{let Bt=N._multiDrawStarts,Oe=N._multiDrawCounts,ye=N._multiDrawCount,_n=_t?C.get(_t).bytesPerElement:1,lr=bt.get(V).currentProgram.getUniforms();for(let bn=0;bn<ye;bn++)lr.setValue(I,"_gl_DrawID",bn),Te.render(Bt[bn]/_n,Oe[bn])}else if(N.isInstancedMesh)Te.renderInstances(he,He,N.count);else if(G.isInstancedBufferGeometry){let Bt=G._maxInstanceCount!==void 0?G._maxInstanceCount:1/0,Oe=Math.min(G.instanceCount,Bt);Te.renderInstances(he,He,Oe)}else Te.render(he,He)};function xe(T,L,G){T.transparent===!0&&T.side===Xe&&T.forceSinglePass===!1?(T.side=on,T.needsUpdate=!0,pe(T,L,G),T.side=An,T.needsUpdate=!0,pe(T,L,G),T.side=Xe):pe(T,L,G)}this.compile=function(T,L,G=null){G===null&&(G=T),p=At.get(G),p.init(L),w.push(p),G.traverseVisible(function(N){N.isLight&&N.layers.test(L.layers)&&(p.pushLight(N),N.castShadow&&p.pushShadow(N))}),T!==G&&T.traverseVisible(function(N){N.isLight&&N.layers.test(L.layers)&&(p.pushLight(N),N.castShadow&&p.pushShadow(N))}),p.setupLights();let V=new Set;return T.traverse(function(N){if(!(N.isMesh||N.isPoints||N.isLine||N.isSprite))return;let at=N.material;if(at)if(Array.isArray(at))for(let mt=0;mt<at.length;mt++){let Ct=at[mt];xe(Ct,G,N),V.add(Ct)}else xe(at,G,N),V.add(at)}),p=w.pop(),V},this.compileAsync=function(T,L,G=null){let V=this.compile(T,L,G);return new Promise(N=>{function at(){if(V.forEach(function(mt){bt.get(mt).currentProgram.isReady()&&V.delete(mt)}),V.size===0){N(T);return}setTimeout(at,10)}Ft.get("KHR_parallel_shader_compile")!==null?at():setTimeout(at,10)})};let ve=null;function Pn(T){ve&&ve(T)}function W(){Z.stop()}function Q(){Z.start()}let Z=new Du;Z.setAnimationLoop(Pn),typeof self<"u"&&Z.setContext(self),this.setAnimationLoop=function(T){ve=T,st.setAnimationLoop(T),T===null?Z.stop():Z.start()},st.addEventListener("sessionstart",W),st.addEventListener("sessionend",Q),this.render=function(T,L){if(L!==void 0&&L.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(v===!0)return;if(T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),L.parent===null&&L.matrixWorldAutoUpdate===!0&&L.updateMatrixWorld(),st.enabled===!0&&st.isPresenting===!0&&(st.cameraAutoUpdate===!0&&st.updateCamera(L),L=st.getCamera()),T.isScene===!0&&T.onBeforeRender(m,T,L,R),p=At.get(T,w.length),p.init(L),w.push(p),Y.multiplyMatrices(L.projectionMatrix,L.matrixWorldInverse),Ie.setFromProjectionMatrix(Y,kn,L.reversedDepth),q=this.localClippingEnabled,ce=rt.init(this.clippingPlanes,q),g=K.get(T,A.length),g.init(),A.push(g),st.enabled===!0&&st.isPresenting===!0){let at=m.xr.getDepthSensingMesh();at!==null&&Ut(at,L,-1/0,m.sortObjects)}Ut(T,L,0,m.sortObjects),g.finish(),m.sortObjects===!0&&g.sort(lt,dt),oe=st.enabled===!1||st.isPresenting===!1||st.hasDepthSensing()===!1,oe&&It.addToRenderList(g,T),this.info.render.frame++,ce===!0&&rt.beginShadows();let G=p.state.shadowsArray;Tt.render(G,T,L),ce===!0&&rt.endShadows(),this.info.autoReset===!0&&this.info.reset();let V=g.opaque,N=g.transmissive;if(p.setupLights(),L.isArrayCamera){let at=L.cameras;if(N.length>0)for(let mt=0,Ct=at.length;mt<Ct;mt++){let _t=at[mt];Vt(V,N,T,_t)}oe&&It.render(T);for(let mt=0,Ct=at.length;mt<Ct;mt++){let _t=at[mt];zt(g,T,_t,_t.viewport)}}else N.length>0&&Vt(V,N,T,L),oe&&It.render(T),zt(g,T,L);R!==null&&b===0&&(Kt.updateMultisampleRenderTarget(R),Kt.updateRenderTargetMipmap(R)),T.isScene===!0&&T.onAfterRender(m,T,L),ft.resetDefaultState(),S=-1,E=null,w.pop(),w.length>0?(p=w[w.length-1],ce===!0&&rt.setGlobalState(m.clippingPlanes,p.state.camera)):p=null,A.pop(),A.length>0?g=A[A.length-1]:g=null};function Ut(T,L,G,V){if(T.visible===!1)return;if(T.layers.test(L.layers)){if(T.isGroup)G=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(L);else if(T.isLight)p.pushLight(T),T.castShadow&&p.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||Ie.intersectsSprite(T)){V&&Pt.setFromMatrixPosition(T.matrixWorld).applyMatrix4(Y);let mt=B.update(T),Ct=T.material;Ct.visible&&g.push(T,mt,Ct,G,Pt.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||Ie.intersectsObject(T))){let mt=B.update(T),Ct=T.material;if(V&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),Pt.copy(T.boundingSphere.center)):(mt.boundingSphere===null&&mt.computeBoundingSphere(),Pt.copy(mt.boundingSphere.center)),Pt.applyMatrix4(T.matrixWorld).applyMatrix4(Y)),Array.isArray(Ct)){let _t=mt.groups;for(let Ht=0,kt=_t.length;Ht<kt;Ht++){let Lt=_t[Ht],he=Ct[Lt.materialIndex];he&&he.visible&&g.push(T,mt,he,G,Pt.z,Lt)}}else Ct.visible&&g.push(T,mt,Ct,G,Pt.z,null)}}let at=T.children;for(let mt=0,Ct=at.length;mt<Ct;mt++)Ut(at[mt],L,G,V)}function zt(T,L,G,V){let N=T.opaque,at=T.transmissive,mt=T.transparent;p.setupLightsView(G),ce===!0&&rt.setGlobalState(m.clippingPlanes,G),V&&xt.viewport(P.copy(V)),N.length>0&&ae(N,L,G),at.length>0&&ae(at,L,G),mt.length>0&&ae(mt,L,G),xt.buffers.depth.setTest(!0),xt.buffers.depth.setMask(!0),xt.buffers.color.setMask(!0),xt.setPolygonOffset(!1)}function Vt(T,L,G,V){if((G.isScene===!0?G.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[V.id]===void 0&&(p.state.transmissionRenderTarget[V.id]=new en(1,1,{generateMipmaps:!0,type:Ft.has("EXT_color_buffer_half_float")||Ft.has("EXT_color_buffer_float")?Nn:ti,minFilter:Pi,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:fe.workingColorSpace}));let at=p.state.transmissionRenderTarget[V.id],mt=V.viewport||P;at.setSize(mt.z*m.transmissionResolutionScale,mt.w*m.transmissionResolutionScale);let Ct=m.getRenderTarget(),_t=m.getActiveCubeFace(),Ht=m.getActiveMipmapLevel();m.setRenderTarget(at),m.getClearColor(O),X=m.getClearAlpha(),X<1&&m.setClearColor(16777215,.5),m.clear(),oe&&It.render(G);let kt=m.toneMapping;m.toneMapping=gi;let Lt=V.viewport;if(V.viewport!==void 0&&(V.viewport=void 0),p.setupLightsView(V),ce===!0&&rt.setGlobalState(m.clippingPlanes,V),ae(T,G,V),Kt.updateMultisampleRenderTarget(at),Kt.updateRenderTargetMipmap(at),Ft.has("WEBGL_multisampled_render_to_texture")===!1){let he=!1;for(let we=0,He=L.length;we<He;we++){let Fe=L[we],Te=Fe.object,Bt=Fe.geometry,Oe=Fe.material,ye=Fe.group;if(Oe.side===Xe&&Te.layers.test(V.layers)){let _n=Oe.side;Oe.side=on,Oe.needsUpdate=!0,Pe(Te,G,V,Bt,Oe,ye),Oe.side=_n,Oe.needsUpdate=!0,he=!0}}he===!0&&(Kt.updateMultisampleRenderTarget(at),Kt.updateRenderTargetMipmap(at))}m.setRenderTarget(Ct,_t,Ht),m.setClearColor(O,X),Lt!==void 0&&(V.viewport=Lt),m.toneMapping=kt}function ae(T,L,G){let V=L.isScene===!0?L.overrideMaterial:null;for(let N=0,at=T.length;N<at;N++){let mt=T[N],Ct=mt.object,_t=mt.geometry,Ht=mt.group,kt=mt.material;kt.allowOverride===!0&&V!==null&&(kt=V),Ct.layers.test(G.layers)&&Pe(Ct,L,G,_t,kt,Ht)}}function Pe(T,L,G,V,N,at){T.onBeforeRender(m,L,G,V,N,at),T.modelViewMatrix.multiplyMatrices(G.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),N.onBeforeRender(m,L,G,V,T,at),N.transparent===!0&&N.side===Xe&&N.forceSinglePass===!1?(N.side=on,N.needsUpdate=!0,m.renderBufferDirect(G,L,V,N,T,at),N.side=An,N.needsUpdate=!0,m.renderBufferDirect(G,L,V,N,T,at),N.side=Xe):m.renderBufferDirect(G,L,V,N,T,at),T.onAfterRender(m,L,G,V,N,at)}function pe(T,L,G){L.isScene!==!0&&(L=yt);let V=bt.get(T),N=p.state.lights,at=p.state.shadowsArray,mt=N.state.version,Ct=j.getParameters(T,N.state,at,L,G),_t=j.getProgramCacheKey(Ct),Ht=V.programs;V.environment=T.isMeshStandardMaterial?L.environment:null,V.fog=L.fog,V.envMap=(T.isMeshStandardMaterial?Zt:Ne).get(T.envMap||V.environment),V.envMapRotation=V.environment!==null&&T.envMap===null?L.environmentRotation:T.envMapRotation,Ht===void 0&&(T.addEventListener("dispose",J),Ht=new Map,V.programs=Ht);let kt=Ht.get(_t);if(kt!==void 0){if(V.currentProgram===kt&&V.lightsStateVersion===mt)return me(T,Ct),kt}else Ct.uniforms=j.getUniforms(T),T.onBeforeCompile(Ct,m),kt=j.acquireProgram(Ct,_t),Ht.set(_t,kt),V.uniforms=Ct.uniforms;let Lt=V.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(Lt.clippingPlanes=rt.uniform),me(T,Ct),V.needsLights=qs(T),V.lightsStateVersion=mt,V.needsLights&&(Lt.ambientLightColor.value=N.state.ambient,Lt.lightProbe.value=N.state.probe,Lt.directionalLights.value=N.state.directional,Lt.directionalLightShadows.value=N.state.directionalShadow,Lt.spotLights.value=N.state.spot,Lt.spotLightShadows.value=N.state.spotShadow,Lt.rectAreaLights.value=N.state.rectArea,Lt.ltc_1.value=N.state.rectAreaLTC1,Lt.ltc_2.value=N.state.rectAreaLTC2,Lt.pointLights.value=N.state.point,Lt.pointLightShadows.value=N.state.pointShadow,Lt.hemisphereLights.value=N.state.hemi,Lt.directionalShadowMap.value=N.state.directionalShadowMap,Lt.directionalShadowMatrix.value=N.state.directionalShadowMatrix,Lt.spotShadowMap.value=N.state.spotShadowMap,Lt.spotLightMatrix.value=N.state.spotLightMatrix,Lt.spotLightMap.value=N.state.spotLightMap,Lt.pointShadowMap.value=N.state.pointShadowMap,Lt.pointShadowMatrix.value=N.state.pointShadowMatrix),V.currentProgram=kt,V.uniformsList=null,kt}function Qt(T){if(T.uniformsList===null){let L=T.currentProgram.getUniforms();T.uniformsList=Kr.seqWithValue(L.seq,T.uniforms)}return T.uniformsList}function me(T,L){let G=bt.get(T);G.outputColorSpace=L.outputColorSpace,G.batching=L.batching,G.batchingColor=L.batchingColor,G.instancing=L.instancing,G.instancingColor=L.instancingColor,G.instancingMorph=L.instancingMorph,G.skinning=L.skinning,G.morphTargets=L.morphTargets,G.morphNormals=L.morphNormals,G.morphColors=L.morphColors,G.morphTargetsCount=L.morphTargetsCount,G.numClippingPlanes=L.numClippingPlanes,G.numIntersection=L.numClipIntersection,G.vertexAlphas=L.vertexAlphas,G.vertexTangents=L.vertexTangents,G.toneMapping=L.toneMapping}function Je(T,L,G,V,N){L.isScene!==!0&&(L=yt),Kt.resetTextureUnits();let at=L.fog,mt=V.isMeshStandardMaterial?L.environment:null,Ct=R===null?m.outputColorSpace:R.isXRRenderTarget===!0?R.texture.colorSpace:Xi,_t=(V.isMeshStandardMaterial?Zt:Ne).get(V.envMap||mt),Ht=V.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,kt=!!G.attributes.tangent&&(!!V.normalMap||V.anisotropy>0),Lt=!!G.morphAttributes.position,he=!!G.morphAttributes.normal,we=!!G.morphAttributes.color,He=gi;V.toneMapped&&(R===null||R.isXRRenderTarget===!0)&&(He=m.toneMapping);let Fe=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,Te=Fe!==void 0?Fe.length:0,Bt=bt.get(V),Oe=p.state.lights;if(ce===!0&&(q===!0||T!==E)){let dn=T===E&&V.id===S;rt.setState(V,T,dn)}let ye=!1;V.version===Bt.__version?(Bt.needsLights&&Bt.lightsStateVersion!==Oe.state.version||Bt.outputColorSpace!==Ct||N.isBatchedMesh&&Bt.batching===!1||!N.isBatchedMesh&&Bt.batching===!0||N.isBatchedMesh&&Bt.batchingColor===!0&&N.colorTexture===null||N.isBatchedMesh&&Bt.batchingColor===!1&&N.colorTexture!==null||N.isInstancedMesh&&Bt.instancing===!1||!N.isInstancedMesh&&Bt.instancing===!0||N.isSkinnedMesh&&Bt.skinning===!1||!N.isSkinnedMesh&&Bt.skinning===!0||N.isInstancedMesh&&Bt.instancingColor===!0&&N.instanceColor===null||N.isInstancedMesh&&Bt.instancingColor===!1&&N.instanceColor!==null||N.isInstancedMesh&&Bt.instancingMorph===!0&&N.morphTexture===null||N.isInstancedMesh&&Bt.instancingMorph===!1&&N.morphTexture!==null||Bt.envMap!==_t||V.fog===!0&&Bt.fog!==at||Bt.numClippingPlanes!==void 0&&(Bt.numClippingPlanes!==rt.numPlanes||Bt.numIntersection!==rt.numIntersection)||Bt.vertexAlphas!==Ht||Bt.vertexTangents!==kt||Bt.morphTargets!==Lt||Bt.morphNormals!==he||Bt.morphColors!==we||Bt.toneMapping!==He||Bt.morphTargetsCount!==Te)&&(ye=!0):(ye=!0,Bt.__version=V.version);let _n=Bt.currentProgram;ye===!0&&(_n=pe(V,L,N));let lr=!1,bn=!1,$r=!1,Be=_n.getUniforms(),Fn=Bt.uniforms;if(xt.useProgram(_n.program)&&(lr=!0,bn=!0,$r=!0),V.id!==S&&(S=V.id,bn=!0),lr||E!==T){xt.buffers.depth.getReversed()&&T.reversedDepth!==!0&&(T._reversedDepth=!0,T.updateProjectionMatrix()),Be.setValue(I,"projectionMatrix",T.projectionMatrix),Be.setValue(I,"viewMatrix",T.matrixWorldInverse);let mn=Be.map.cameraPosition;mn!==void 0&&mn.setValue(I,St.setFromMatrixPosition(T.matrixWorld)),Dt.logarithmicDepthBuffer&&Be.setValue(I,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(V.isMeshPhongMaterial||V.isMeshToonMaterial||V.isMeshLambertMaterial||V.isMeshBasicMaterial||V.isMeshStandardMaterial||V.isShaderMaterial)&&Be.setValue(I,"isOrthographic",T.isOrthographicCamera===!0),E!==T&&(E=T,bn=!0,$r=!0)}if(N.isSkinnedMesh){Be.setOptional(I,N,"bindMatrix"),Be.setOptional(I,N,"bindMatrixInverse");let dn=N.skeleton;dn&&(dn.boneTexture===null&&dn.computeBoneTexture(),Be.setValue(I,"boneTexture",dn.boneTexture,Kt))}N.isBatchedMesh&&(Be.setOptional(I,N,"batchingTexture"),Be.setValue(I,"batchingTexture",N._matricesTexture,Kt),Be.setOptional(I,N,"batchingIdTexture"),Be.setValue(I,"batchingIdTexture",N._indirectTexture,Kt),Be.setOptional(I,N,"batchingColorTexture"),N._colorsTexture!==null&&Be.setValue(I,"batchingColorTexture",N._colorsTexture,Kt));let Un=G.morphAttributes;if((Un.position!==void 0||Un.normal!==void 0||Un.color!==void 0)&&ot.update(N,G,_n),(bn||Bt.receiveShadow!==N.receiveShadow)&&(Bt.receiveShadow=N.receiveShadow,Be.setValue(I,"receiveShadow",N.receiveShadow)),V.isMeshGouraudMaterial&&V.envMap!==null&&(Fn.envMap.value=_t,Fn.flipEnvMap.value=_t.isCubeTexture&&_t.isRenderTargetTexture===!1?-1:1),V.isMeshStandardMaterial&&V.envMap===null&&L.environment!==null&&(Fn.envMapIntensity.value=L.environmentIntensity),bn&&(Be.setValue(I,"toneMappingExposure",m.toneMappingExposure),Bt.needsLights&&Ni(Fn,$r),at&&V.fog===!0&&et.refreshFogUniforms(Fn,at),et.refreshMaterialUniforms(Fn,V,k,tt,p.state.transmissionRenderTarget[T.id]),Kr.upload(I,Qt(Bt),Fn,Kt)),V.isShaderMaterial&&V.uniformsNeedUpdate===!0&&(Kr.upload(I,Qt(Bt),Fn,Kt),V.uniformsNeedUpdate=!1),V.isSpriteMaterial&&Be.setValue(I,"center",N.center),Be.setValue(I,"modelViewMatrix",N.modelViewMatrix),Be.setValue(I,"normalMatrix",N.normalMatrix),Be.setValue(I,"modelMatrix",N.matrixWorld),V.isShaderMaterial||V.isRawShaderMaterial){let dn=V.uniformsGroups;for(let mn=0,ml=dn.length;mn<ml;mn++){let Oi=dn[mn];jt.update(Oi,_n),jt.bind(Oi,_n)}}return _n}function Ni(T,L){T.ambientLightColor.needsUpdate=L,T.lightProbe.needsUpdate=L,T.directionalLights.needsUpdate=L,T.directionalLightShadows.needsUpdate=L,T.pointLights.needsUpdate=L,T.pointLightShadows.needsUpdate=L,T.spotLights.needsUpdate=L,T.spotLightShadows.needsUpdate=L,T.rectAreaLights.needsUpdate=L,T.hemisphereLights.needsUpdate=L}function qs(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return M},this.getActiveMipmapLevel=function(){return b},this.getRenderTarget=function(){return R},this.setRenderTargetTextures=function(T,L,G){let V=bt.get(T);V.__autoAllocateDepthBuffer=T.resolveDepthBuffer===!1,V.__autoAllocateDepthBuffer===!1&&(V.__useRenderToTexture=!1),bt.get(T.texture).__webglTexture=L,bt.get(T.depthTexture).__webglTexture=V.__autoAllocateDepthBuffer?void 0:G,V.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(T,L){let G=bt.get(T);G.__webglFramebuffer=L,G.__useDefaultFramebuffer=L===void 0};let ar=I.createFramebuffer();this.setRenderTarget=function(T,L=0,G=0){R=T,M=L,b=G;let V=!0,N=null,at=!1,mt=!1;if(T){let _t=bt.get(T);if(_t.__useDefaultFramebuffer!==void 0)xt.bindFramebuffer(I.FRAMEBUFFER,null),V=!1;else if(_t.__webglFramebuffer===void 0)Kt.setupRenderTarget(T);else if(_t.__hasExternalTextures)Kt.rebindTextures(T,bt.get(T.texture).__webglTexture,bt.get(T.depthTexture).__webglTexture);else if(T.depthBuffer){let Lt=T.depthTexture;if(_t.__boundDepthTexture!==Lt){if(Lt!==null&&bt.has(Lt)&&(T.width!==Lt.image.width||T.height!==Lt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");Kt.setupDepthRenderbuffer(T)}}let Ht=T.texture;(Ht.isData3DTexture||Ht.isDataArrayTexture||Ht.isCompressedArrayTexture)&&(mt=!0);let kt=bt.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(kt[L])?N=kt[L][G]:N=kt[L],at=!0):T.samples>0&&Kt.useMultisampledRTT(T)===!1?N=bt.get(T).__webglMultisampledFramebuffer:Array.isArray(kt)?N=kt[G]:N=kt,P.copy(T.viewport),D.copy(T.scissor),H=T.scissorTest}else P.copy(Rt).multiplyScalar(k).floor(),D.copy(te).multiplyScalar(k).floor(),H=ge;if(G!==0&&(N=ar),xt.bindFramebuffer(I.FRAMEBUFFER,N)&&V&&xt.drawBuffers(T,N),xt.viewport(P),xt.scissor(D),xt.setScissorTest(H),at){let _t=bt.get(T.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_CUBE_MAP_POSITIVE_X+L,_t.__webglTexture,G)}else if(mt){let _t=L;for(let Ht=0;Ht<T.textures.length;Ht++){let kt=bt.get(T.textures[Ht]);I.framebufferTextureLayer(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0+Ht,kt.__webglTexture,G,_t)}}else if(T!==null&&G!==0){let _t=bt.get(T.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,_t.__webglTexture,G)}S=-1},this.readRenderTargetPixels=function(T,L,G,V,N,at,mt,Ct=0){if(!(T&&T.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let _t=bt.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&mt!==void 0&&(_t=_t[mt]),_t){xt.bindFramebuffer(I.FRAMEBUFFER,_t);try{let Ht=T.textures[Ct],kt=Ht.format,Lt=Ht.type;if(!Dt.textureFormatReadable(kt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Dt.textureTypeReadable(Lt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}L>=0&&L<=T.width-V&&G>=0&&G<=T.height-N&&(T.textures.length>1&&I.readBuffer(I.COLOR_ATTACHMENT0+Ct),I.readPixels(L,G,V,N,Et.convert(kt),Et.convert(Lt),at))}finally{let Ht=R!==null?bt.get(R).__webglFramebuffer:null;xt.bindFramebuffer(I.FRAMEBUFFER,Ht)}}},this.readRenderTargetPixelsAsync=async function(T,L,G,V,N,at,mt,Ct=0){if(!(T&&T.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let _t=bt.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&mt!==void 0&&(_t=_t[mt]),_t)if(L>=0&&L<=T.width-V&&G>=0&&G<=T.height-N){xt.bindFramebuffer(I.FRAMEBUFFER,_t);let Ht=T.textures[Ct],kt=Ht.format,Lt=Ht.type;if(!Dt.textureFormatReadable(kt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Dt.textureTypeReadable(Lt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let he=I.createBuffer();I.bindBuffer(I.PIXEL_PACK_BUFFER,he),I.bufferData(I.PIXEL_PACK_BUFFER,at.byteLength,I.STREAM_READ),T.textures.length>1&&I.readBuffer(I.COLOR_ATTACHMENT0+Ct),I.readPixels(L,G,V,N,Et.convert(kt),Et.convert(Lt),0);let we=R!==null?bt.get(R).__webglFramebuffer:null;xt.bindFramebuffer(I.FRAMEBUFFER,we);let He=I.fenceSync(I.SYNC_GPU_COMMANDS_COMPLETE,0);return I.flush(),await iu(I,He,4),I.bindBuffer(I.PIXEL_PACK_BUFFER,he),I.getBufferSubData(I.PIXEL_PACK_BUFFER,0,at),I.deleteBuffer(he),I.deleteSync(He),at}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(T,L=null,G=0){let V=Math.pow(2,-G),N=Math.floor(T.image.width*V),at=Math.floor(T.image.height*V),mt=L!==null?L.x:0,Ct=L!==null?L.y:0;Kt.setTexture2D(T,0),I.copyTexSubImage2D(I.TEXTURE_2D,G,0,0,mt,Ct,N,at),xt.unbindTexture()};let pl=I.createFramebuffer(),uf=I.createFramebuffer();this.copyTextureToTexture=function(T,L,G=null,V=null,N=0,at=null){at===null&&(N!==0?(Rr("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),at=N,N=0):at=0);let mt,Ct,_t,Ht,kt,Lt,he,we,He,Fe=T.isCompressedTexture?T.mipmaps[at]:T.image;if(G!==null)mt=G.max.x-G.min.x,Ct=G.max.y-G.min.y,_t=G.isBox3?G.max.z-G.min.z:1,Ht=G.min.x,kt=G.min.y,Lt=G.isBox3?G.min.z:0;else{let Un=Math.pow(2,-N);mt=Math.floor(Fe.width*Un),Ct=Math.floor(Fe.height*Un),T.isDataArrayTexture?_t=Fe.depth:T.isData3DTexture?_t=Math.floor(Fe.depth*Un):_t=1,Ht=0,kt=0,Lt=0}V!==null?(he=V.x,we=V.y,He=V.z):(he=0,we=0,He=0);let Te=Et.convert(L.format),Bt=Et.convert(L.type),Oe;L.isData3DTexture?(Kt.setTexture3D(L,0),Oe=I.TEXTURE_3D):L.isDataArrayTexture||L.isCompressedArrayTexture?(Kt.setTexture2DArray(L,0),Oe=I.TEXTURE_2D_ARRAY):(Kt.setTexture2D(L,0),Oe=I.TEXTURE_2D),I.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,L.flipY),I.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,L.premultiplyAlpha),I.pixelStorei(I.UNPACK_ALIGNMENT,L.unpackAlignment);let ye=I.getParameter(I.UNPACK_ROW_LENGTH),_n=I.getParameter(I.UNPACK_IMAGE_HEIGHT),lr=I.getParameter(I.UNPACK_SKIP_PIXELS),bn=I.getParameter(I.UNPACK_SKIP_ROWS),$r=I.getParameter(I.UNPACK_SKIP_IMAGES);I.pixelStorei(I.UNPACK_ROW_LENGTH,Fe.width),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,Fe.height),I.pixelStorei(I.UNPACK_SKIP_PIXELS,Ht),I.pixelStorei(I.UNPACK_SKIP_ROWS,kt),I.pixelStorei(I.UNPACK_SKIP_IMAGES,Lt);let Be=T.isDataArrayTexture||T.isData3DTexture,Fn=L.isDataArrayTexture||L.isData3DTexture;if(T.isDepthTexture){let Un=bt.get(T),dn=bt.get(L),mn=bt.get(Un.__renderTarget),ml=bt.get(dn.__renderTarget);xt.bindFramebuffer(I.READ_FRAMEBUFFER,mn.__webglFramebuffer),xt.bindFramebuffer(I.DRAW_FRAMEBUFFER,ml.__webglFramebuffer);for(let Oi=0;Oi<_t;Oi++)Be&&(I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,bt.get(T).__webglTexture,N,Lt+Oi),I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,bt.get(L).__webglTexture,at,He+Oi)),I.blitFramebuffer(Ht,kt,mt,Ct,he,we,mt,Ct,I.DEPTH_BUFFER_BIT,I.NEAREST);xt.bindFramebuffer(I.READ_FRAMEBUFFER,null),xt.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else if(N!==0||T.isRenderTargetTexture||bt.has(T)){let Un=bt.get(T),dn=bt.get(L);xt.bindFramebuffer(I.READ_FRAMEBUFFER,pl),xt.bindFramebuffer(I.DRAW_FRAMEBUFFER,uf);for(let mn=0;mn<_t;mn++)Be?I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,Un.__webglTexture,N,Lt+mn):I.framebufferTexture2D(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,Un.__webglTexture,N),Fn?I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,dn.__webglTexture,at,He+mn):I.framebufferTexture2D(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,dn.__webglTexture,at),N!==0?I.blitFramebuffer(Ht,kt,mt,Ct,he,we,mt,Ct,I.COLOR_BUFFER_BIT,I.NEAREST):Fn?I.copyTexSubImage3D(Oe,at,he,we,He+mn,Ht,kt,mt,Ct):I.copyTexSubImage2D(Oe,at,he,we,Ht,kt,mt,Ct);xt.bindFramebuffer(I.READ_FRAMEBUFFER,null),xt.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else Fn?T.isDataTexture||T.isData3DTexture?I.texSubImage3D(Oe,at,he,we,He,mt,Ct,_t,Te,Bt,Fe.data):L.isCompressedArrayTexture?I.compressedTexSubImage3D(Oe,at,he,we,He,mt,Ct,_t,Te,Fe.data):I.texSubImage3D(Oe,at,he,we,He,mt,Ct,_t,Te,Bt,Fe):T.isDataTexture?I.texSubImage2D(I.TEXTURE_2D,at,he,we,mt,Ct,Te,Bt,Fe.data):T.isCompressedTexture?I.compressedTexSubImage2D(I.TEXTURE_2D,at,he,we,Fe.width,Fe.height,Te,Fe.data):I.texSubImage2D(I.TEXTURE_2D,at,he,we,mt,Ct,Te,Bt,Fe);I.pixelStorei(I.UNPACK_ROW_LENGTH,ye),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,_n),I.pixelStorei(I.UNPACK_SKIP_PIXELS,lr),I.pixelStorei(I.UNPACK_SKIP_ROWS,bn),I.pixelStorei(I.UNPACK_SKIP_IMAGES,$r),at===0&&L.generateMipmaps&&I.generateMipmap(Oe),xt.unbindTexture()},this.initRenderTarget=function(T){bt.get(T).__webglFramebuffer===void 0&&Kt.setupRenderTarget(T)},this.initTexture=function(T){T.isCubeTexture?Kt.setTextureCube(T,0):T.isData3DTexture?Kt.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?Kt.setTexture2DArray(T,0):Kt.setTexture2D(T,0),xt.unbindTexture()},this.resetState=function(){M=0,b=0,R=null,xt.reset(),ft.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return kn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=fe._getDrawingBufferColorSpace(t),e.unpackColorSpace=fe._getUnpackColorSpace()}};var qr={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};var In=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},qg=new zr(-1,1,1,-1,0,1),Nc=class extends Ce{constructor(){super(),this.setAttribute("position",new Jt([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new Jt([0,2,0,0,2,0],2))}},Jg=new Nc,Ui=class{constructor(t){this._mesh=new Wt(Jg,t)}dispose(){this._mesh.geometry.dispose()}render(t){t.render(this._mesh,qg)}get material(){return this._mesh.material}set material(t){this._mesh.material=t}};var nl=class extends In{constructor(t,e="tDiffuse"){super(),this.textureID=e,this.uniforms=null,this.material=null,t instanceof Se?(this.uniforms=t.uniforms,this.material=t):t&&(this.uniforms=fn.clone(t.uniforms),this.material=new Se({name:t.name!==void 0?t.name:"unspecified",defines:Object.assign({},t.defines),uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader})),this._fsQuad=new Ui(this.material)}render(t,e,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this._fsQuad.material=this.material,this.renderToScreen?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this._fsQuad.render(t))}dispose(){this.material.dispose(),this._fsQuad.dispose()}};var Xs=class extends In{constructor(t,e){super(),this.scene=t,this.camera=e,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(t,e,n){let r=t.getContext(),s=t.state;s.buffers.color.setMask(!1),s.buffers.depth.setMask(!1),s.buffers.color.setLocked(!0),s.buffers.depth.setLocked(!0);let o,a;this.inverse?(o=0,a=1):(o=1,a=0),s.buffers.stencil.setTest(!0),s.buffers.stencil.setOp(r.REPLACE,r.REPLACE,r.REPLACE),s.buffers.stencil.setFunc(r.ALWAYS,o,4294967295),s.buffers.stencil.setClear(a),s.buffers.stencil.setLocked(!0),t.setRenderTarget(n),this.clear&&t.clear(),t.render(this.scene,this.camera),t.setRenderTarget(e),this.clear&&t.clear(),t.render(this.scene,this.camera),s.buffers.color.setLocked(!1),s.buffers.depth.setLocked(!1),s.buffers.color.setMask(!0),s.buffers.depth.setMask(!0),s.buffers.stencil.setLocked(!1),s.buffers.stencil.setFunc(r.EQUAL,1,4294967295),s.buffers.stencil.setOp(r.KEEP,r.KEEP,r.KEEP),s.buffers.stencil.setLocked(!0)}},il=class extends In{constructor(){super(),this.needsSwap=!1}render(t){t.state.buffers.stencil.setLocked(!1),t.state.buffers.stencil.setTest(!1)}};var rl=class{constructor(t,e){if(this.renderer=t,this._pixelRatio=t.getPixelRatio(),e===void 0){let n=t.getSize(new nt);this._width=n.width,this._height=n.height,e=new en(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:Nn}),e.texture.name="EffectComposer.rt1"}else this._width=e.width,this._height=e.height;this.renderTarget1=e,this.renderTarget2=e.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new nl(qr),this.copyPass.material.blending=Xn,this.clock=new Ns}swapBuffers(){let t=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=t}addPass(t){this.passes.push(t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(t,e){this.passes.splice(e,0,t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(t){let e=this.passes.indexOf(t);e!==-1&&this.passes.splice(e,1)}isLastEnabledPass(t){for(let e=t+1;e<this.passes.length;e++)if(this.passes[e].enabled)return!1;return!0}render(t){t===void 0&&(t=this.clock.getDelta());let e=this.renderer.getRenderTarget(),n=!1;for(let r=0,s=this.passes.length;r<s;r++){let o=this.passes[r];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(r),o.render(this.renderer,this.writeBuffer,this.readBuffer,t,n),o.needsSwap){if(n){let a=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,t),l.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}Xs!==void 0&&(o instanceof Xs?n=!0:o instanceof il&&(n=!1))}}this.renderer.setRenderTarget(e)}reset(t){if(t===void 0){let e=this.renderer.getSize(new nt);this._pixelRatio=this.renderer.getPixelRatio(),this._width=e.width,this._height=e.height,t=this.renderTarget1.clone(),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=t,this.renderTarget2=t.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(t,e){this._width=t,this._height=e;let n=this._width*this._pixelRatio,r=this._height*this._pixelRatio;this.renderTarget1.setSize(n,r),this.renderTarget2.setSize(n,r);for(let s=0;s<this.passes.length;s++)this.passes[s].setSize(n,r)}setPixelRatio(t){this._pixelRatio=t,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}};var sl=class extends In{constructor(t,e,n=null,r=null,s=null){super(),this.scene=t,this.camera=e,this.overrideMaterial=n,this.clearColor=r,this.clearAlpha=s,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new vt}render(t,e,n){let r=t.autoClear;t.autoClear=!1;let s,o;this.overrideMaterial!==null&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(t.getClearColor(this._oldClearColor),t.setClearColor(this.clearColor,t.getClearAlpha())),this.clearAlpha!==null&&(s=t.getClearAlpha(),t.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&t.clearDepth(),t.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),t.render(this.scene,this.camera),this.clearColor!==null&&t.setClearColor(this._oldClearColor),this.clearAlpha!==null&&t.setClearAlpha(s),this.overrideMaterial!==null&&(this.scene.overrideMaterial=o),t.autoClear=r}};var zu={name:"LuminosityHighPassShader",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new vt(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			float v = luminance( texel.xyz );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`};var Jr=class i extends In{constructor(t,e=1,n,r){super(),this.strength=e,this.radius=n,this.threshold=r,this.resolution=t!==void 0?new nt(t.x,t.y):new nt(256,256),this.clearColor=new vt(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let s=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);this.renderTargetBright=new en(s,o,{type:Nn}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let h=0;h<this.nMips;h++){let u=new en(s,o,{type:Nn});u.texture.name="UnrealBloomPass.h"+h,u.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(u);let f=new en(s,o,{type:Nn});f.texture.name="UnrealBloomPass.v"+h,f.texture.generateMipmaps=!1,this.renderTargetsVertical.push(f),s=Math.round(s/2),o=Math.round(o/2)}let a=zu;this.highPassUniforms=fn.clone(a.uniforms),this.highPassUniforms.luminosityThreshold.value=r,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new Se({uniforms:this.highPassUniforms,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader}),this.separableBlurMaterials=[];let l=[3,5,7,9,11];s=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);for(let h=0;h<this.nMips;h++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(l[h])),this.separableBlurMaterials[h].uniforms.invSize.value=new nt(1/s,1/o),s=Math.round(s/2),o=Math.round(o/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=e,this.compositeMaterial.uniforms.bloomRadius.value=.1;let c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new F(1,1,1),new F(1,1,1),new F(1,1,1),new F(1,1,1),new F(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=fn.clone(qr.uniforms),this.blendMaterial=new Se({uniforms:this.copyUniforms,vertexShader:qr.vertexShader,fragmentShader:qr.fragmentShader,blending:an,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new vt,this._oldClearAlpha=1,this._basic=new Re,this._fsQuad=new Ui(null)}dispose(){for(let t=0;t<this.renderTargetsHorizontal.length;t++)this.renderTargetsHorizontal[t].dispose();for(let t=0;t<this.renderTargetsVertical.length;t++)this.renderTargetsVertical[t].dispose();this.renderTargetBright.dispose();for(let t=0;t<this.separableBlurMaterials.length;t++)this.separableBlurMaterials[t].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(t,e){let n=Math.round(t/2),r=Math.round(e/2);this.renderTargetBright.setSize(n,r);for(let s=0;s<this.nMips;s++)this.renderTargetsHorizontal[s].setSize(n,r),this.renderTargetsVertical[s].setSize(n,r),this.separableBlurMaterials[s].uniforms.invSize.value=new nt(1/n,1/r),n=Math.round(n/2),r=Math.round(r/2)}render(t,e,n,r,s){t.getClearColor(this._oldClearColor),this._oldClearAlpha=t.getClearAlpha();let o=t.autoClear;t.autoClear=!1,t.setClearColor(this.clearColor,0),s&&t.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=n.texture,t.setRenderTarget(null),t.clear(),this._fsQuad.render(t)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,t.setRenderTarget(this.renderTargetBright),t.clear(),this._fsQuad.render(t);let a=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this._fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=a.texture,this.separableBlurMaterials[l].uniforms.direction.value=i.BlurDirectionX,t.setRenderTarget(this.renderTargetsHorizontal[l]),t.clear(),this._fsQuad.render(t),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=i.BlurDirectionY,t.setRenderTarget(this.renderTargetsVertical[l]),t.clear(),this._fsQuad.render(t),a=this.renderTargetsVertical[l];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,t.setRenderTarget(this.renderTargetsHorizontal[0]),t.clear(),this._fsQuad.render(t),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,s&&t.state.buffers.stencil.setTest(!0),this.renderToScreen?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(n),this._fsQuad.render(t)),t.setClearColor(this._oldClearColor,this._oldClearAlpha),t.autoClear=o}_getSeparableBlurMaterial(t){let e=[];for(let n=0;n<t;n++)e.push(.39894*Math.exp(-.5*n*n/(t*t))/t);return new Se({defines:{KERNEL_RADIUS:t},uniforms:{colorTexture:{value:null},invSize:{value:new nt(.5,.5)},direction:{value:new nt(.5,.5)},gaussianCoefficients:{value:e}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`#include <common>
				varying vec2 vUv;
				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float gaussianCoefficients[KERNEL_RADIUS];

				void main() {
					float weightSum = gaussianCoefficients[0];
					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * weightSum;
					for( int i = 1; i < KERNEL_RADIUS; i ++ ) {
						float x = float(i);
						float w = gaussianCoefficients[i];
						vec2 uvOffset = direction * invSize * x;
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += (sample1 + sample2) * w;
						weightSum += 2.0 * w;
					}
					gl_FragColor = vec4(diffuseSum/weightSum, 1.0);
				}`})}_getCompositeMaterial(t){return new Se({defines:{NUM_MIPS:t},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`varying vec2 vUv;
				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor(const in float factor) {
					float mirrorFactor = 1.2 - factor;
					return mix(factor, mirrorFactor, bloomRadius);
				}

				void main() {
					gl_FragColor = bloomStrength * ( lerpBloomFactor(bloomFactors[0]) * vec4(bloomTintColors[0], 1.0) * texture2D(blurTexture1, vUv) +
						lerpBloomFactor(bloomFactors[1]) * vec4(bloomTintColors[1], 1.0) * texture2D(blurTexture2, vUv) +
						lerpBloomFactor(bloomFactors[2]) * vec4(bloomTintColors[2], 1.0) * texture2D(blurTexture3, vUv) +
						lerpBloomFactor(bloomFactors[3]) * vec4(bloomTintColors[3], 1.0) * texture2D(blurTexture4, vUv) +
						lerpBloomFactor(bloomFactors[4]) * vec4(bloomTintColors[4], 1.0) * texture2D(blurTexture5, vUv) );
				}`})}};Jr.BlurDirectionX=new nt(1,0);Jr.BlurDirectionY=new nt(0,1);var Ks={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
		precision highp float;

		uniform mat4 modelViewMatrix;
		uniform mat4 projectionMatrix;

		attribute vec3 position;
		attribute vec2 uv;

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		precision highp float;

		uniform sampler2D tDiffuse;

		#include <tonemapping_pars_fragment>
		#include <colorspace_pars_fragment>

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );

			// tone mapping

			#ifdef LINEAR_TONE_MAPPING

				gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );

			#elif defined( REINHARD_TONE_MAPPING )

				gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );

			#elif defined( CINEON_TONE_MAPPING )

				gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );

			#elif defined( ACES_FILMIC_TONE_MAPPING )

				gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );

			#elif defined( AGX_TONE_MAPPING )

				gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );

			#elif defined( NEUTRAL_TONE_MAPPING )

				gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );

			#elif defined( CUSTOM_TONE_MAPPING )

				gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );

			#endif

			// color space

			#ifdef SRGB_TRANSFER

				gl_FragColor = sRGBTransferOETF( gl_FragColor );

			#endif

		}`};var ol=class extends In{constructor(){super(),this.uniforms=fn.clone(Ks.uniforms),this.material=new Ds({name:Ks.name,uniforms:this.uniforms,vertexShader:Ks.vertexShader,fragmentShader:Ks.fragmentShader}),this._fsQuad=new Ui(this.material),this._outputColorSpace=null,this._toneMapping=null}render(t,e,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=t.toneMappingExposure,(this._outputColorSpace!==t.outputColorSpace||this._toneMapping!==t.toneMapping)&&(this._outputColorSpace=t.outputColorSpace,this._toneMapping=t.toneMapping,this.material.defines={},fe.getTransfer(this._outputColorSpace)===Me&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===aa?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===la?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===ca?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===Hr?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===ua?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===fa?this.material.defines.NEUTRAL_TONE_MAPPING="":this._toneMapping===ha&&(this.material.defines.CUSTOM_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this._fsQuad.render(t))}dispose(){this.material.dispose(),this._fsQuad.dispose()}};var al=class extends Wt{constructor(t,e={}){super(t),this.isWater=!0;let n=this,r=e.textureWidth!==void 0?e.textureWidth:512,s=e.textureHeight!==void 0?e.textureHeight:512,o=e.clipBias!==void 0?e.clipBias:0,a=e.alpha!==void 0?e.alpha:1,l=e.time!==void 0?e.time:0,c=e.waterNormals!==void 0?e.waterNormals:null,h=e.sunDirection!==void 0?e.sunDirection:new F(.70707,.70707,0),u=new vt(e.sunColor!==void 0?e.sunColor:16777215),f=new vt(e.waterColor!==void 0?e.waterColor:8355711),d=e.eye!==void 0?e.eye:new F(0,0,0),x=e.distortionScale!==void 0?e.distortionScale:20,y=e.side!==void 0?e.side:An,g=e.fog!==void 0?e.fog:!1,p=new gn,A=new F,w=new F,m=new F,v=new _e,M=new F(0,0,-1),b=new De,R=new F,S=new F,E=new De,P=new _e,D=new tn,H=new en(r,s),O={name:"MirrorShader",uniforms:fn.merge([ht.fog,ht.lights,{normalSampler:{value:null},mirrorSampler:{value:null},alpha:{value:1},time:{value:0},size:{value:1},distortionScale:{value:20},textureMatrix:{value:new _e},sunColor:{value:new vt(8355711)},sunDirection:{value:new F(.70707,.70707,0)},eye:{value:new F},waterColor:{value:new vt(5592405)}}]),vertexShader:`
				uniform mat4 textureMatrix;
				uniform float time;

				varying vec4 mirrorCoord;
				varying vec4 worldPosition;

				#include <common>
				#include <fog_pars_vertex>
				#include <shadowmap_pars_vertex>
				#include <logdepthbuf_pars_vertex>

				void main() {
					mirrorCoord = modelMatrix * vec4( position, 1.0 );
					worldPosition = mirrorCoord.xyzw;
					mirrorCoord = textureMatrix * mirrorCoord;
					vec4 mvPosition =  modelViewMatrix * vec4( position, 1.0 );
					gl_Position = projectionMatrix * mvPosition;

				#include <beginnormal_vertex>
				#include <defaultnormal_vertex>
				#include <logdepthbuf_vertex>
				#include <fog_vertex>
				#include <shadowmap_vertex>
			}`,fragmentShader:`
				uniform sampler2D mirrorSampler;
				uniform float alpha;
				uniform float time;
				uniform float size;
				uniform float distortionScale;
				uniform sampler2D normalSampler;
				uniform vec3 sunColor;
				uniform vec3 sunDirection;
				uniform vec3 eye;
				uniform vec3 waterColor;

				varying vec4 mirrorCoord;
				varying vec4 worldPosition;

				vec4 getNoise( vec2 uv ) {
					vec2 uv0 = ( uv / 103.0 ) + vec2(time / 17.0, time / 29.0);
					vec2 uv1 = uv / 107.0-vec2( time / -19.0, time / 31.0 );
					vec2 uv2 = uv / vec2( 8907.0, 9803.0 ) + vec2( time / 101.0, time / 97.0 );
					vec2 uv3 = uv / vec2( 1091.0, 1027.0 ) - vec2( time / 109.0, time / -113.0 );
					vec4 noise = texture2D( normalSampler, uv0 ) +
						texture2D( normalSampler, uv1 ) +
						texture2D( normalSampler, uv2 ) +
						texture2D( normalSampler, uv3 );
					return noise * 0.5 - 1.0;
				}

				void sunLight( const vec3 surfaceNormal, const vec3 eyeDirection, float shiny, float spec, float diffuse, inout vec3 diffuseColor, inout vec3 specularColor ) {
					vec3 reflection = normalize( reflect( -sunDirection, surfaceNormal ) );
					float direction = max( 0.0, dot( eyeDirection, reflection ) );
					specularColor += pow( direction, shiny ) * sunColor * spec;
					diffuseColor += max( dot( sunDirection, surfaceNormal ), 0.0 ) * sunColor * diffuse;
				}

				#include <common>
				#include <packing>
				#include <bsdfs>
				#include <fog_pars_fragment>
				#include <logdepthbuf_pars_fragment>
				#include <lights_pars_begin>
				#include <shadowmap_pars_fragment>
				#include <shadowmask_pars_fragment>

				void main() {

					#include <logdepthbuf_fragment>
					vec4 noise = getNoise( worldPosition.xz * size );
					vec3 surfaceNormal = normalize( noise.xzy * vec3( 1.5, 1.0, 1.5 ) );

					vec3 diffuseLight = vec3(0.0);
					vec3 specularLight = vec3(0.0);

					vec3 worldToEye = eye-worldPosition.xyz;
					vec3 eyeDirection = normalize( worldToEye );
					sunLight( surfaceNormal, eyeDirection, 100.0, 2.0, 0.5, diffuseLight, specularLight );

					float distance = length(worldToEye);

					vec2 distortion = surfaceNormal.xz * ( 0.001 + 1.0 / distance ) * distortionScale;
					vec3 reflectionSample = vec3( texture2D( mirrorSampler, mirrorCoord.xy / mirrorCoord.w + distortion ) );

					float theta = max( dot( eyeDirection, surfaceNormal ), 0.0 );
					float rf0 = 0.3;
					float reflectance = rf0 + ( 1.0 - rf0 ) * pow( ( 1.0 - theta ), 5.0 );
					vec3 scatter = max( 0.0, dot( surfaceNormal, eyeDirection ) ) * waterColor;
					vec3 albedo = mix( ( sunColor * diffuseLight * 0.3 + scatter ) * getShadowMask(), ( vec3( 0.1 ) + reflectionSample * 0.9 + reflectionSample * specularLight ), reflectance);
					vec3 outgoingLight = albedo;
					gl_FragColor = vec4( outgoingLight, alpha );

					#include <tonemapping_fragment>
					#include <colorspace_fragment>
					#include <fog_fragment>	
				}`},X=new Se({name:O.name,uniforms:fn.clone(O.uniforms),vertexShader:O.vertexShader,fragmentShader:O.fragmentShader,lights:!0,side:y,fog:g});X.uniforms.mirrorSampler.value=H.texture,X.uniforms.textureMatrix.value=P,X.uniforms.alpha.value=a,X.uniforms.time.value=l,X.uniforms.normalSampler.value=c,X.uniforms.sunColor.value=u,X.uniforms.waterColor.value=f,X.uniforms.sunDirection.value=h,X.uniforms.distortionScale.value=x,X.uniforms.eye.value=d,n.material=X,n.onBeforeRender=function(z,tt,k){if(w.setFromMatrixPosition(n.matrixWorld),m.setFromMatrixPosition(k.matrixWorld),v.extractRotation(n.matrixWorld),A.set(0,0,1),A.applyMatrix4(v),R.subVectors(w,m),R.dot(A)>0)return;R.reflect(A).negate(),R.add(w),v.extractRotation(k.matrixWorld),M.set(0,0,-1),M.applyMatrix4(v),M.add(m),S.subVectors(w,M),S.reflect(A).negate(),S.add(w),D.position.copy(R),D.up.set(0,1,0),D.up.applyMatrix4(v),D.up.reflect(A),D.lookAt(S),D.far=k.far,D.updateMatrixWorld(),D.projectionMatrix.copy(k.projectionMatrix),P.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),P.multiply(D.projectionMatrix),P.multiply(D.matrixWorldInverse),p.setFromNormalAndCoplanarPoint(A,w),p.applyMatrix4(D.matrixWorldInverse),b.set(p.normal.x,p.normal.y,p.normal.z,p.constant);let lt=D.projectionMatrix;E.x=(Math.sign(b.x)+lt.elements[8])/lt.elements[0],E.y=(Math.sign(b.y)+lt.elements[9])/lt.elements[5],E.z=-1,E.w=(1+lt.elements[10])/lt.elements[14],b.multiplyScalar(2/b.dot(E)),lt.elements[2]=b.x,lt.elements[6]=b.y,lt.elements[10]=b.z+1-o,lt.elements[14]=b.w,d.setFromMatrixPosition(k.matrixWorld);let dt=z.getRenderTarget(),Rt=z.xr.enabled,te=z.shadowMap.autoUpdate;n.visible=!1,z.xr.enabled=!1,z.shadowMap.autoUpdate=!1,z.setRenderTarget(H),z.state.buffers.depth.setMask(!0),z.autoClear===!1&&z.clear(),z.render(tt,D),n.visible=!0,z.xr.enabled=Rt,z.shadowMap.autoUpdate=te,z.setRenderTarget(dt);let ge=k.viewport;ge!==void 0&&z.state.viewport(ge)}}};function ku(i,t=!1){let e=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),r=new Set(Object.keys(i[0].morphAttributes)),s={},o={},a=i[0].morphTargetsRelative,l=new Ce,c=0;for(let h=0;h<i.length;++h){let u=i[h],f=0;if(e!==(u.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let d in u.attributes){if(!n.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+d+'" attribute exists among all geometries, or in none of them.'),null;s[d]===void 0&&(s[d]=[]),s[d].push(u.attributes[d]),f++}if(f!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(a!==u.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let d in u.morphAttributes){if(!r.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;o[d]===void 0&&(o[d]=[]),o[d].push(u.morphAttributes[d])}if(t){let d;if(e)d=u.index.count;else if(u.attributes.position!==void 0)d=u.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,d,h),c+=d}}if(e){let h=0,u=[];for(let f=0;f<i.length;++f){let d=i[f].index;for(let x=0;x<d.count;++x)u.push(d.getX(x)+h);h+=i[f].attributes.position.count}l.setIndex(u)}for(let h in s){let u=Hu(s[h]);if(!u)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;l.setAttribute(h,u)}for(let h in o){let u=o[h][0].length;if(u===0)break;l.morphAttributes=l.morphAttributes||{},l.morphAttributes[h]=[];for(let f=0;f<u;++f){let d=[];for(let y=0;y<o[h].length;++y)d.push(o[h][y][f]);let x=Hu(d);if(!x)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;l.morphAttributes[h].push(x)}}return l}function Hu(i){let t,e,n,r=-1,s=0;for(let c=0;c<i.length;++c){let h=i[c];if(t===void 0&&(t=h.array.constructor),t!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=h.itemSize),e!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(r===-1&&(r=h.gpuType),r!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;s+=h.count*e}let o=new t(s),a=new Le(o,e,n),l=0;for(let c=0;c<i.length;++c){let h=i[c];if(h.isInterleavedBufferAttribute){let u=l/e;for(let f=0,d=h.count;f<d;f++)for(let x=0;x<e;x++){let y=h.getComponent(f,x);a.setComponent(f+u,x,y)}}else o.set(h.array,l);l+=h.count*e}return r!==void 0&&(a.gpuType=r),a}var nn=Math.PI/180,gt=150,de=(i,t=gt,e=0)=>new F(Math.cos(i*nn)*t,e,-Math.sin(i*nn)*t);function Ge(i){return()=>{i|=0,i=i+1831565813|0;let t=Math.imul(i^i>>>15,1|i);return t=t+Math.imul(t^t>>>7,61|t)^t,((t^t>>>14)>>>0)/4294967296}}var Xt=new vt(1,.7,.36),Ee=new vt(1,.8,.52),ln=new vt(.72,.84,1),hl=new vt(1,.2,.12),ii=new vt(.3,1,.85),Yr=new vt(1,.4,.6),Gu=new F(0,1,0),Vu=[],zc=[],cl=new Dr(new Uint8Array([255,255,255,255]),1,1);cl.needsUpdate=!0;cl.colorSpace=$e;var ll=new Dr(new Uint8Array([0,0,0,255]),1,1);ll.needsUpdate=!0;var Hc=[],Oc=new Map;function ut({map:i=cl,emissiveMap:t=ll,glow:e=1.5,tint:n=16777215,side:r=An,key:s=null}={}){let o=s||(i===cl&&t===ll?"plain"+n+r:null);if(o&&Oc.has(o))return Oc.get(o);let a=new Se({uniforms:fn.merge([ht.fog,{map:{value:null},emissiveMap:{value:null},glow:{value:e},tint:{value:new vt(n)}}]),vertexShader:`varying vec3 vC; varying vec2 vUv;
      #include <fog_pars_vertex>
      void main() { vC = color; vUv = uv; vec4 mvPosition = modelViewMatrix * vec4(position, 1.0); gl_Position = projectionMatrix * mvPosition;
      #include <fog_vertex>
      }`,fragmentShader:`uniform sampler2D map; uniform sampler2D emissiveMap; uniform float glow; uniform vec3 tint; varying vec3 vC; varying vec2 vUv;
      #include <fog_pars_fragment>
      void main() { gl_FragColor = vec4(texture2D(map, vUv).rgb * tint * vC + texture2D(emissiveMap, vUv).rgb * glow, 1.0);
      #include <fog_fragment>
      #include <tonemapping_fragment>
      #include <colorspace_fragment>
      }`,vertexColors:!0,fog:!0,side:r});return a.uniforms.map.value=i,a.uniforms.emissiveMap.value=t,a.userData.glow=e,t!==ll&&Hc.push(a),o&&Oc.set(o,a),a}var Bc=new Map;function ne(i,t,e){let n=i+","+t+","+e;return Bc.has(n)||Bc.set(n,new Re({color:new vt(i,t,e)})),Bc.get(n)}var ue=class{constructor(){this.bins=new Map,this.lights=[],this.sparks=[]}put(t,...e){this.bins.has(t)||this.bins.set(t,[]);let n=this.bins.get(t);for(let r of e.flat(3))n.push(r);return this}light(t,e,n,r,s,o,a=0){return this.lights.push({x:t,y:e,z:n,colour:r,power:s,reach:o}),a&&this.spark(t,e,n,r,a),this}spark(t,e,n,r,s,o=0,a=0){return this.sparks.push({x:t,y:e,z:n,colour:r,size:s,flicker:o,drift:a}),this}stamp(t,e=0,n=0,r=0,s=1,o=0){let a=new _e().compose(new F(e,o,n),new Ln().setFromAxisAngle(Gu,r),new F(s,s,s)),l=new F;for(let[c,h]of t.bins)this.put(c,h.map(u=>u.clone().applyMatrix4(a)));for(let c of t.lights)l.set(c.x,c.y,c.z).applyMatrix4(a),this.lights.push({...c,x:l.x,y:l.y,z:l.z,reach:c.reach*s});for(let c of t.sparks)l.set(c.x,c.y,c.z).applyMatrix4(a),this.sparks.push({...c,x:l.x,y:l.y,z:l.z,size:c.size*s});return this}build(){for(let e of this.lights)Vu.push({x:e.x,y:e.y,z:e.z,r:e.colour.r*e.power,g:e.colour.g*e.power,b:e.colour.b*e.power,reach2:e.reach*e.reach,far:e.reach*6});zc.push(...this.sparks);let t=new xn;for(let[e,n]of this.bins)n.length&&t.add(new Wt(ku(n.map(r=>r.index?r.toNonIndexed():r),!1),e));return t}};function Wu(i){let e=new Map,n=(c,h)=>c*4096+h;for(let c of Vu)for(let h=Math.floor((c.x-c.far)/48);h<=Math.floor((c.x+c.far)/48);h++)for(let u=Math.floor((c.z-c.far)/48);u<=Math.floor((c.z+c.far)/48);u++){let f=n(h+2048,u+2048);e.has(f)||e.set(f,[]),e.get(f).push(c)}i.updateMatrixWorld(!0);let r=new F,s=new F,o=new $t,a=new F(-.35,.62,.7).normalize(),l=[];i.traverse(c=>{if(!c.isMesh||!c.material.vertexColors||c.userData.lit)return;let h=c.geometry,u=h.attributes.position,f=h.attributes.normal,d=new Float32Array(u.count*3);o.getNormalMatrix(c.matrixWorld);for(let x=0;x<u.count;x++){r.fromBufferAttribute(u,x).applyMatrix4(c.matrixWorld),s.fromBufferAttribute(f,x).applyMatrix3(o).normalize();let y=.55+.45*s.y,g=Math.max(0,s.dot(a))*.5,p=.03*y+.05*g,A=.04*y+.062*g,w=.075*y+.1*g;for(let m of e.get(n(Math.floor(r.x/48)+2048,Math.floor(r.z/48)+2048))||l){let v=m.x-r.x,M=m.y-r.y,b=m.z-r.z,R=v*v+M*M+b*b;if(R>m.far*m.far)continue;let S=Math.sqrt(R)||1,E=Math.max(0,((s.x*v+s.y*M+s.z*b)/S+.22)/1.22),P=E/(1+R/m.reach2);p+=m.r*P,A+=m.g*P,w+=m.b*P}d[x*3]=p,d[x*3+1]=A,d[x*3+2]=w}h.setAttribute("color",new Le(d,3)),c.userData.lit=!0})}var be=i=>{let t=i.attributes.uv;if(t)for(let e=0;e<t.count;e++)t.setXY(e,.004,.004);return i};function rn(i,t,e,n,r,s,o,a=0){let l=new We(i,t,e,Math.max(1,Math.round(i/5)),Math.max(1,Math.round(t/3)),Math.max(1,Math.round(e/6))),c=l.attributes.uv,h=l.attributes.normal,u=l.attributes.position;for(let f=0;f<c.count;f++){if(Math.abs(h.getY(f))>.5||!o){c.setXY(f,.004,.004);continue}let d=Math.abs(h.getX(f))>.5?u.getZ(f)+e/2+7:u.getX(f)+i/2;c.setXY(f,d/o.u+a,(u.getY(f)+t/2)/o.v)}return l.translate(n,r+t/2,s)}var Yt=(i,t,e,n,r,s)=>rn(i,t,e,n,r,s,null),$=(i,t,e,n,r,s)=>be(new We(i,t,e)).translate(n,r+t/2,s);function Nt(i,t,e,n,r,s=8,o=null,a=i){let l=new ke(a,i,t,s,Math.max(1,Math.round(t/4))),c=l.attributes.uv,h=l.attributes.normal;for(let u=0;u<c.count;u++)!o||Math.abs(h.getY(u))>.9?c.setXY(u,.004,.004):c.setXY(u,c.getX(u)*2*Math.PI*i/o.u,c.getY(u)*t/o.v);return l.rotateY(Math.PI/s).translate(e,n+t/2,r)}var le=(i,t,e,n,r=10)=>be(new Sn(i,r,Math.max(6,r-2))).translate(t,e,n),jn=(i,t,e,n,r,s=8)=>be(new ji(i,t,s)).rotateY(Math.PI/s).translate(e,n+t/2,r);function Gt(i,t,e=.08,n=5){let r=new F(...i),s=new F(...t),o=s.clone().sub(r);return be(new ke(e,e,o.length(),n)).applyQuaternion(new Ln().setFromUnitVectors(Gu,o.clone().normalize())).translate((r.x+s.x)/2,(r.y+s.y)/2,(r.z+s.z)/2)}function Ke(i,t,e,n,r,{seg:s=20,swell:o=.1,finial:a=.32}={}){let l=[];for(let h=0;h<=18;h++){let u=h/18;l.push(new nt(Math.max(.001,i*Math.sqrt(1-Math.pow(u,1.75))*(.93+o*2.6*Math.sin(Math.PI*Math.min(1,u*1.5))*(1-u))),t*u))}let c=[be(new mi(l,s)).translate(e,n,r)];if(a){let h=t*a;c.push(be(new ke(.02*i,.09*i,h,6)).translate(e,n+t+h/2-.05,r),le(.11*i,e,n+t+h*.25,r,8),le(.07*i,e,n+t+h*.62,r,6))}return c}function qn(i,t,e,n,r){let s=i*.42,o=i*.1,a=[];for(let[l,c]of[[-1,-1],[1,-1],[-1,1],[1,1]])a.push($(o,t,o,e+l*s,n,r+c*s));return a.push($(i*1.28,i*.12,i*1.28,e,n+t,r),...Ke(i*.56,i*.72,e,n+t+i*.12,r,{seg:10})),a}function je(i,t,e,n,r,s=0){let o=new Or,a=i/2,l=t-a*(1+s);return o.moveTo(-a,0),o.lineTo(-a,l),s?(o.quadraticCurveTo(-a,l+a*.9,0,t),o.quadraticCurveTo(a,l+a*.9,a,l)):o.absarc(0,l,a,Math.PI,0,!0),o.lineTo(a,0),o.lineTo(-a,0),be(new Us(o,10)).translate(e,n,r)}var Di=(i,t,e,n=0,r=360,s=96)=>be(new Ji(i,t,Math.max(3,Math.round(s*r/360)),2,n*nn,r*nn)).rotateX(-Math.PI/2).translate(0,e,0);function kc(i,t,e,n=0,r=360,s=96){let o=be(new ke(i,i,e,Math.max(3,Math.round(s*r/360)),1,!0,(n+90)*nn,r*nn)).translate(0,t+e/2,0),a=o.attributes.normal.array;for(let l=0;l<a.length;l++)a[l]=-a[l];return o}var sr=(i,t=!0,e=8)=>{let n=new Qn(i);return t&&(n.wrapS=n.wrapT=fi),n.colorSpace=$e,n.anisotropy=e,n};function or({cols:i=8,rows:t=4,lit:e=.3,seed:n=1,stone:r=[205,172,128],shadow:s=[46,34,26],glow:o=["#ffd27a","#ffb65a","#ffe2a8"],opening:a=.5,pointed:l=!1,jali:c=.25}){let f=Ge(n),d=i*64,x=t*96,y=document.createElement("canvas"),g=document.createElement("canvas");y.width=g.width=d,y.height=g.height=x;let p=y.getContext("2d"),A=g.getContext("2d");A.fillStyle="#000",A.fillRect(0,0,d,x);let w=(v,M)=>"rgb("+v.map(b=>Math.max(0,Math.min(255,b*M))|0).join(",")+")";p.fillStyle=w(r,1),p.fillRect(0,0,d,x);for(let v=0;v<3200;v++)p.fillStyle=w(r,.9+f()*.2),p.fillRect(f()*d,f()*x,2+f()*5,1+f()*2);let m=(v,M,b,R,S)=>{v.beginPath(),v.moveTo(M-R/2,b),v.lineTo(M-R/2,b-S+R/2),l?(v.quadraticCurveTo(M-R/2,b-S+R*.05,M,b-S),v.quadraticCurveTo(M+R/2,b-S+R*.05,M+R/2,b-S+R/2)):v.arc(M,b-S+R/2,R/2,Math.PI,0),v.lineTo(M+R/2,b),v.closePath()};for(let v=0;v<t;v++)for(let M=0;M<i;M++){let b=M*64+32,R=(v+1)*96-14,S=64*a,E=96*.62;if(v*i+M!==0){if(p.fillStyle=w(r,.8),m(p,b,R+2,S+12,E+9),p.fill(),p.fillStyle=w(r,1.12),m(p,b,R,S+8,E+5),p.fill(),p.fillStyle=w(s,1),m(p,b,R,S,E),p.fill(),f()<c){p.strokeStyle=w(r,.62),p.lineWidth=1;for(let P=-S/2+4;P<S/2;P+=5)p.beginPath(),p.moveTo(b+P,R-9),p.lineTo(b+P,R-E*.62),p.stroke()}if(p.fillStyle=w(r,.78),p.fillRect(b-S/2-2,R-10,S+4,4),p.fillStyle=w(r,1.1),p.fillRect(b-S/2-3,R-12,S+6,2),p.fillStyle=w(r,1.16),p.beginPath(),p.arc(b,R-E-7,3,0,7),p.fill(),f()<e){let P=A.createLinearGradient(0,R-E,0,R),D=o[f()*o.length|0];P.addColorStop(0,D),P.addColorStop(1,"#7a4a1c"),A.fillStyle=P,A.globalAlpha=.55+f()*.45,m(A,b,R-11,S-2,E-12),A.fill(),A.globalAlpha=1}p.fillStyle=w(r,.84),p.fillRect(M*64,v*96,3,96),p.fillStyle=w(r,1.1),p.fillRect(M*64+3,v*96,2,96)}}for(let v=0;v<t;v++){p.fillStyle=w(r,1.16),p.fillRect(0,v*96,d,5),p.fillStyle=w(r,.68),p.fillRect(0,v*96+5,d,2);for(let M=0;M<d;M+=8)p.fillStyle=w(r,.8),p.fillRect(M,v*96+8,4,3)}return{map:sr(y),emissiveMap:sr(g),cols:i,rows:t}}function Xu({cols:i=8,rows:t=8,lit:e=.16,seed:n=1,wall:r=[84,90,110]}){let a=Ge(n),l=document.createElement("canvas"),c=document.createElement("canvas");l.width=c.width=i*32,l.height=c.height=t*32;let h=l.getContext("2d"),u=c.getContext("2d");u.fillStyle="#000",u.fillRect(0,0,c.width,c.height);let f=d=>"rgb("+r.map(x=>x*d|0).join(",")+")";h.fillStyle=f(1),h.fillRect(0,0,l.width,l.height);for(let d=0;d<900;d++)h.fillStyle=f(.86+a()*.26),h.fillRect(a()*l.width,a()*l.height,3+a()*8,1+a()*3);for(let d=0;d<t;d++){h.fillStyle=f(.7),h.fillRect(0,d*32,l.width,2);for(let x=0;x<i;x++){if(x+d===0)continue;let y=x*32+8,g=d*32+8;h.fillStyle=f(.36),h.fillRect(y,g,16,17),h.fillStyle=f(1.2),h.fillRect(y-1,g+17,18,2),a()<.3&&(h.fillStyle=f(.75),h.fillRect(y-3,g+19,22,3)),a()<e&&(u.fillStyle=a()<.78?["#ffcf80","#ffb45c","#ffe0a6"][a()*3|0]:"#9fd0ff",u.globalAlpha=.35+a()*.65,u.fillRect(y+1,g+1,14,15),u.globalAlpha=1,a()<.5&&(u.fillStyle="#000",u.fillRect(y+7,g+1,1,15)))}}return{map:sr(l,!0,4),emissiveMap:sr(c,!0,4)}}function xi(i=128,t=0,e=1){let n=document.createElement("canvas");n.width=n.height=i;let r=n.getContext("2d"),s=r.createRadialGradient(i/2,i/2,i*t,i/2,i/2,i/2);return s.addColorStop(0,"rgba(255,255,255,1)"),s.addColorStop(.25*e,"rgba(255,255,255,.42)"),s.addColorStop(Math.min(.99,.6*e),"rgba(255,255,255,.1)"),s.addColorStop(1,"rgba(255,255,255,0)"),r.fillStyle=s,r.fillRect(0,0,i,i),sr(n,!1,1)}function Zr(i,t,e=8,n=!0){let r=document.createElement("canvas");r.width=r.height=64;let s=r.getContext("2d");for(let o=0;o<e;o++)s.fillStyle=o%2?i:t,n?s.fillRect(o*64/e,0,64/e+1,64):s.fillRect(0,o*64/e,64,64/e+1);return sr(r)}function Ku(i,{w:t=1024,h:e=320,ground:n="#0d1326",edge:r="#f2c66a"}={}){let s=document.createElement("canvas");s.width=t,s.height=e;let o=s.getContext("2d");o.fillStyle=n,o.fillRect(0,0,t,e),r&&(o.strokeStyle=r,o.lineWidth=6,o.strokeRect(9,9,t-18,e-18));for(let{text:a,y:l,size:c,colour:h,font:u="Geist, Arial, sans-serif",weight:f=600,fit:d=t-108}of i){let x=c;do o.font=f+" "+x+"px "+u,x-=4;while(o.measureText(a).width>d&&x>24);o.fillStyle=h,o.textBaseline="middle",o.fillText(a,54,l)}return sr(s,!1)}function ju(){let i=or({cols:8,rows:4,lit:.22,seed:3}),t={u:8*3.3,v:24},e=ut({map:i.map,emissiveMap:i.emissiveMap,glow:1.5,key:"palace"}),n=ut({tint:14467222}),r=ut({tint:10191192}),s=ne(1.3,.82,.36),o=ne(1.9,1.35,.42),a=new ue,l=Ge(8),c=(m,v,M,b,R,{cupolas:S=!0,balconies:E=!0}={})=>{let P=v-m,D=(m+v)/2,H=R-b/2;a.put(e,rn(P,M,b,D,0,H,t,m*.031));for(let O=6;O<M-1;O+=6)a.put(n,Yt(P+.8,.42,b+.8,D,O-.2,H));a.put(n,Yt(P+1.1,.6,b+1.1,D,M-.1,H),$(P+.6,.14,.2,D,M+1.25,R+.2));for(let O=m+.4;O<=v-.2;O+=1.3)a.put(n,$(.2,.78,.2,O,M+.5,R+.2));for(let O=m+.15;O<=v;O+=3.3)a.put(n,$(.36,M,.28,O,0,R+.14));if(S)for(let O=m+2.6;O<v-1.5;O+=5.6)a.put(n,qn(1.5,1.6,O,M+.5,R-1.5));if(E)for(let O=m+4.95;O<v-3;O+=9.9){a.put(n,$(2.9,.3,1.5,O,6.3,R+.75),$(2.5,.9,.12,O,6.6,R+1.44),$(3.1,.25,1.7,O,9.7,R+.85),Ke(1.1,.9,O,9.95,R+.8,{seg:8,finial:.5}));for(let X of[-1.25,1.25])a.put(n,$(.16,3.1,.16,O+X,6.6,R+1.36));a.put(r,$(.5,.8,1.1,O-1,5.5,R+.55),$(.5,.8,1.1,O+1,5.5,R+.55)),l()<.55&&a.put(s,je(1.5,2.5,O,6.75,R+.33))}},h=(m,v,M,b=1)=>a.put(o,le(.32*b,m,v,M,8)),u=(m,v,M,b,R)=>{a.put(e,Nt(R,b-M,m,M,v,8,t)),a.put(n,Nt(R+.5,.5,m,b,v,8),Ke(R*1.05,R*1.5,m,b+.5,v)),h(m,b+.5+R*1.5*1.3,v)};a.put(n,Yt(158,1.2,46,0,0,-14));for(let m=0;m<5;m++)a.put(n,$(16-m*.6,.24,1.1,12.5,.96-m*.24,6.2+m*1.1));c(-75,-67,7,6,3,{cupolas:!1,balconies:!1}),a.put(s,je(3.4,5.2,-71,1.2,3.06)),c(-67,-26,16,24,0);for(let[m,v,M,b]of[[-58,7,20,3.2],[-46,10,21.5,4.8],[-33,7,19.5,3.2]]){let R=1.5-v/2;a.put(e,rn(v,M,v,m,0,R,t,m*.07)),a.put(n,Yt(v+1,.6,v+1,m,M,R)),a.put(e,Nt(b,b*.8,m,M+.6,R,8,t)),a.put(n,Nt(b+.4,.4,m,M+.6+b*.8,R,8),Ke(b*1.06,b*1.55,m,M+1+b*.8,R)),h(m,M+1+b*.8+b*1.55*1.3,R,b/3.2);for(let[S,E]of[[-1,1],[1,1],[-1,-1],[1,-1]])a.put(n,qn(1.3,1.5,m+S*(v/2-.8),M+.6,R+E*(v/2-.8)));a.put(s,je(v*.34,4.4,m,12.6,1.56))}c(-26,-4,19,22,0);let f=-19.5,d=-2.5;for(let[m,v,M]of[[8.6,0,30],[7.6,30.8,38],[6.8,38.7,45]]){a.put(e,rn(m,M-v,m,f,v,d,t,.2+v)),a.put(n,Yt(m+2.6,.75,m+2.6,f,M,d));for(let b of[-1,1])a.put(r,$(.5,.9,.9,f+b*(m/2+.7),M-.9,d+m/2+.6),$(.9,.9,.5,f+b*(m/2+.6),M-.9,d+m/2+.7));for(let b=-m/2-1.1;b<=m/2+1.1;b+=1.1)a.put(n,$(.16,.8,.16,f+b,M+.75,d+m/2+1.2));a.put(s,je(m*.26,3.4,f,M-5.6,d+m/2+.06))}for(let[m,v]of[[-1,-1],[1,-1],[-1,1],[1,1]])a.put(n,Nt(.8,3.6,f+m*4.1,45.7,d+v*4.1,8),Ke(.9,1.5,f+m*4.1,49.3,d+v*4.1,{seg:8})),h(f+m*4.1,51.4,d+v*4.1,.6);a.put(e,Nt(3.2,5.3,f,45.7,d,8,t)),a.put(n,Nt(4.3,.6,f,51,d,8),Ke(3.3,4.6,f,51.6,d)),h(f,57.7,d,1.2),a.put(n,Gt([f,57.6,d],[f,62.5,d],.07)),a.put(ne(1.6,.5,.2),$(2.6,1.5,.05,f+1.35,60.8,d)),c(-4,30,21,34,5,{balconies:!1}),a.put(e,rn(19,7,20,12.5,21,-5,t,.4)),a.put(n,Yt(20.2,.6,21.2,12.5,28,-5)),a.put(s,je(8.4,15,12.5,1.2,5.08),je(2.6,5.6,5.2,13,5.08),je(2.6,5.6,19.8,13,5.08),je(2.2,4.4,1.2,2,5.08),je(2.2,4.4,23.8,2,5.08)),a.put(n,$(11,.5,2.2,12.5,12.2,6.1));for(let m=-5.2;m<=5.2;m+=1.3)a.put(n,$(.18,.9,.18,12.5+m,12.7,7.1));for(let m of[-5.2,5.2])a.put(n,Nt(.6,11,12.5+m,1.2,6.4,10));for(let[m,v]of[[-1,-1],[1,-1],[-1,1],[1,1]])a.put(n,qn(2.6,3,12.5+m*8,28.6,-5+v*8.4));a.put(e,Nt(6.8,5.4,12.5,28.6,-5,8,t)),a.put(n,Nt(7.6,.7,12.5,34,-5,8),Ke(6.9,9.4,12.5,34.7,-5,{seg:28,swell:.12})),h(12.5,47.2,-5,1.6);for(let m=0;m<8;m++){let v=(m+.5)*Math.PI/4;a.put(n,qn(1.5,1.5,12.5+Math.cos(v)*7.9,34.7,-5+Math.sin(v)*7.9))}u(.6,3.6,0,22.5,2.6),u(24.6,3.6,0,22.5,2.6),c(30,42,16.5,22,0),c(42,75,19,26,2,{cupolas:!1,balconies:!1});for(let[m,v]of[[47.2,2.5],[58.2,3.3],[69.2,2.5]])a.put(s,je(6.2,11.5,m,1.2,2.08)),a.put(n,$(7.4,.5,.5,m,13.4,2.3)),a.put(e,Nt(v,v*.75,m,19.5,-2,8,t)),a.put(n,Nt(v+.4,.4,m,19.5+v*.75,-2,8),Ke(v*1.05,v*1.5,m,19.9+v*.75,-2)),h(m,19.9+v*.75+v*1.5*1.32,-2,v/3);for(let m of[42.8,52.7,63.7,74.2])a.put(n,qn(1.8,2,m,19.5,.4));u(-67,.4,0,17.5,1.6),u(75,2.4,0,20.5,1.7);let x=ut({tint:2906682}),y=ut({tint:12035980}),g=ut({tint:2050604}),p=ut({tint:7297604}),A=ne(.35,.6,.9),w=ut({tint:3355965});a.put(x,Yt(160,.3,30,0,1.36,24)),a.put(y,Yt(7,.34,30,12.5,1.36,24),Yt(150,.34,3.4,0,1.36,11.4));for(let m=12;m<=37;m+=5)for(let v of[-4.3,4.3])a.put(w,$(.16,.9,.16,12.5+v,1.7,m)),a.put(ne(1.8,1.4,.8),le(.16,12.5+v,2.7,m,6)),a.light(12.5+v,2.7,m,Ee,.5,3.2,1.4);for(let m of[-32,52]){a.put(y,Nt(5.2,.7,m,1.6,24,16),Nt(1.1,1.3,m,2.3,24,10)),a.put(A,Yg(new Tn(4.7,20)).rotateX(-Math.PI/2).translate(m,2.32,24)),a.light(m,3.2,24,ln,.8,5);for(let v=0;v<14;v++)a.spark(m+(l()-.5)*1.4,3.6+l()*3.6,24+(l()-.5)*1.4,ln,.9,1)}for(let m=-70;m<=70;m+=14)if(Math.abs(m-12.5)>8){let v=17+(Math.abs(m)%28?0:3);a.put(p,Gt([m,1.6,v],[m+.5,9.6,v+.3],.3,6));for(let M=0;M<8;M++){let b=M*Math.PI/4;a.put(g,Gt([m+.5,9.5,v+.3],[m+.5+Math.cos(b)*3.6,8.2+M%2*.7,v+.3+Math.sin(b)*3.6],.22,4))}a.put(g,le(.8,m+.5,9.6,v+.3,6))}for(let m=-76;m<=76;m+=4)Math.abs(m-12.5)>5&&a.put(g,$(3.6,1.3,1.5,m,1.6,38.2));for(let m of[-5.2,5.2])a.put(n,$(1.8,5.4,1.8,12.5+m,1.5,38.4),$(2.3,.4,2.3,12.5+m,6.9,38.4),Ke(.9,1.1,12.5+m,7.3,38.4,{seg:8})),a.put(ne(1.8,1.4,.8),le(.34,12.5+m,6.3,39.5,8)),a.light(12.5+m,6.3,39.8,Ee,.8,5,2.4);for(let m=-72;m<=72;m+=9)a.light(m,.6,20,Xt,.36,17);return a.light(f,24,14,Xt,.55,13).light(f,40,11,Xt,.5,10).light(f,52,9,Xt,.4,8).light(12.5,30,16,Xt,.7,13).light(12.5,40,12,Xt,.45,10).light(58,20,14,Xt,.4,9).light(-46,21,13,Xt,.4,9).light(-58,20,12,Xt,.3,8).light(-33,20,12,Xt,.3,8),a}var Yg=i=>{let t=i.attributes.uv;for(let e=0;e<t.count;e++)t.setXY(e,.004,.004);return i};var Li=()=>ne(1.9,1.35,.42),qu=()=>ne(1.8,1.4,.8);function Ju(){let i=or({cols:6,rows:2,lit:.16,seed:9,stone:[208,196,172],opening:.36,jali:.5}),t={u:6*4.4,v:2*8.5},e=ut({map:i.map,emissiveMap:i.emissiveMap,glow:1.3,key:"kirti"}),n=ut({tint:14274747}),r=ne(1.25,.8,.36),s=new ue;s.put(e,rn(40,17,26,0,0,-13,t),rn(22,5,16,0,17,-12,t,.3)),s.put(n,Yt(42,.7,28,0,8.3,-13),Yt(43,.8,29,0,17,-13),Yt(24,.6,18,0,22,-12),Yt(46,1,32,0,0,-13));for(let a=-20.6;a<=20.6;a+=1.4)s.put(n,$(.2,.8,.2,a,17.8,1.1));s.put(n,$(42,.14,.22,0,18.6,1.1));for(let a=0;a<6;a++)s.put(n,$(12-a*.5,.26,1,0,.9-a*.2,1+a));s.put(r,je(6.4,11,0,1,.08,.5)),s.put(n,$(9,.6,2.4,0,12.4,1.2));for(let a of[-3.9,3.9])s.put(n,Nt(.45,11.4,a,1,1.9,8));for(let a of[-1,1]){let l=a*14.2;s.put(n,Yt(10.4,1.4,10.4,l,17.8,-6));for(let[c,h]of[[-1,-1],[1,-1],[-1,1],[1,1],[0,1],[0,-1],[1,0],[-1,0]])s.put(n,$(.7,5,.7,l+c*4.2,19.2,-6+h*4.2));s.put(n,Yt(12.4,.7,12.4,l,24.2,-6),Ke(4.6,3.6,l,24.9,-6,{seg:12,swell:.02})),s.put(Li(),le(.4,l,29.9,-6,8)),s.put(r,$(5,.2,5,l,19.3,-6)),s.light(l,21,-6,Xt,.6,5);for(let c of[-1,1])s.put(n,qn(1.6,1.7,a*20,17.8,-13+c*11.5))}let o=[];for(let a=0;a<=22;a++){let l=a/22;o.push(new nt(Math.max(.5,9.2*(1-Math.pow(l,1.9)*.93)),20*l))}s.put(n,be(new mi(o,16)).translate(0,22.6,-12),Nt(1.9,1.1,0,42.6,-12,12),le(1.1,0,44.7,-12));for(let a=0;a<8;a++){let l=a*Math.PI/4;s.put(n,Ke(1.3,2.2,Math.cos(l)*8.2,22.6,-12+Math.sin(l)*8.2,{seg:8}))}s.put(Li(),be(new Wn(1,.16,6,14,Math.PI)).rotateZ(Math.PI).translate(0,47.2,-12),le(.75,0,48.3,-12),le(.5,0,46.2,-12,8));for(let a=-16;a<=16;a+=8)s.light(a,.6,16,Ee,.34,15);return s.light(0,26,9,Ee,.6,13).light(0,38,4,Ee,.4,9).light(-14,19,4,Ee,.35,7).light(14,19,4,Ee,.35,7),s}function Yu(){let i=ut({tint:15130834}),t=ne(1.25,.8,.36),e=ut({tint:7031350}),n=new ue;n.put(i,Yt(34,10.5,34,0,0,-17),Yt(35.5,1.6,35.5,0,10.5,-17));for(let s of[-10.5,0,10.5]){n.put(t,je(7.6,8.2,s,.3,.08,.55));let o=je(7.6,8.2,0,.3,0,.55).rotateY(Math.PI/2).translate(17.08,0,-17+s);n.put(t,o,o.clone().rotateY(Math.PI).translate(0,0,-34))}for(let s=-17;s<=17;s+=1.7)n.put(i,$(.4,.5,.6,s,9.9,.3));let r=12.1;for(let[s,o]of[[21,6.2],[14,5.6],[7,4.8]]){n.put(i,Yt(s,o,s,0,r,-17)),n.put(e,$(s-1.4,o*.34,s+.1,0,r+o*.56,-17),$(s+.1,o*.34,s-1.4,0,r+o*.56,-17)),n.put(i,Yt(s+4.4,.5,s+4.4,0,r+o,-17));for(let a=-s/2-1.6;a<=s/2+1.6;a+=1.3)n.put(e,$(.1,1,.1,a,r,-17+s/2+1.7));n.put(e,$(s+3.4,.1,.1,0,r+1,-17+s/2+1.7)),r+=o+.5}n.put(i,$(2.6,2.6,2.6,0,r,-17),Ke(1.7,1.6,0,r+2.6,-17,{seg:8,swell:0})),n.put(Li(),le(.3,0,r+5,-17,8)),n.put(qu(),be(new Tn(1.25,20)).translate(0,r-2.9,-13.45)),n.put(e,$(.1,.9,.05,0,r-2.9,-13.4),$(.7,.1,.05,.3,r-2.9,-13.4));for(let s of[-2.8,2.8])n.put(e,Gt([s,r-8,-15],[s,r-4.6,-15],.05)),n.put(ne(1.5,.3,.2),$(1.3,.8,.04,s+.7,r-5.4,-15));n.put(i,Nt(3.3,13.4,16.2,0,-1,14),Nt(3.7,.6,16.2,13.4,-1,14),qn(3.2,2.4,16.2,14,-1));for(let s of[-12,0,12])n.light(s,.6,14,Ee,.36,14);return n.light(0,16,9,Ee,.5,12).light(22,3,-6,Ee,.4,12).light(-22,3,-17,Ee,.3,12).light(0,4,-4,Xt,.7,9),n}function Zu(){let i=or({cols:8,rows:2,lit:.26,seed:15,stone:[196,150,112],opening:.46,pointed:!0,jali:.1}),t={u:8*3.4,v:14},e=ut({map:i.map,emissiveMap:i.emissiveMap,glow:1.4,key:"nyay"}),n=ut({tint:14205600}),r=ut({tint:9132612}),s=ne(1.25,.8,.36),o=new ue;o.put(e,rn(72,14,24,0,0,-12,t),rn(18,18.5,28,0,0,-11,t,.2)),o.put(n,Yt(74,.6,26,0,6.9,-12),Yt(75,.8,27,0,14,-12),Yt(20,.8,30,0,18.5,-11),Yt(76,1,30,0,0,-12));for(let a=-36;a<=36;a+=1.5)Math.abs(a)>10&&o.put(n,$(.2,.8,.2,a,14.8,.4));o.put(s,je(7,10.5,0,1,3.08,.5),je(2.4,4.6,-5.6,9.4,3.08,.5),je(2.4,4.6,5.6,9.4,3.08,.5));for(let a=0;a<5;a++)o.put(n,$(13-a*.6,.24,1,0,.8-a*.2,3.6+a));o.put(e,Nt(6.4,4.4,0,19.3,-11,12,t)),o.put(n,Nt(7,.6,0,23.7,-11,12),Ke(6.4,7.2,0,24.3,-11,{seg:24,swell:.03})),o.put(Li(),le(.5,0,33.8,-11,8));for(let a of[-1,1])o.put(e,rn(9,20,9,a*33,0,-3.5,t,.6)),o.put(n,Yt(10.2,.6,10.2,a*33,20,-3.5)),o.put(r,jn(6.4,6,a*33,20.6,-3.5,4)),o.put(Li(),le(.34,a*33,27,-3.5,8)),o.put(e,Nt(2.6,2.4,a*17,14.8,-8,8,t)),o.put(n,Ke(2.7,3,a*17,17.2,-8,{seg:12}));for(let a=-32;a<=32;a+=8)o.light(a,.6,15,Xt,.34,14);return o.light(0,22,8,Xt,.55,11).light(-33,18,8,Xt,.3,8).light(33,18,8,Xt,.3,8),o}function Qu(){let i=or({cols:8,rows:3,lit:.24,seed:21,stone:[178,104,78],shadow:[40,24,20],opening:.44,jali:.15}),t={u:8*3.2,v:3*5.4},e=ut({map:i.map,emissiveMap:i.emissiveMap,glow:1.4,key:"arts"}),n=ut({tint:14733230}),r=ut({tint:11823696}),s=ne(1.25,.8,.36),o=new ue;o.put(e,rn(30,19,30,0,0,-15,t),rn(24,11,20,-27,0,-12,t,.3),rn(24,11,20,27,0,-12,t,.5)),o.put(n,Yt(31.4,.7,31.4,0,19,-15),Yt(25.2,.6,21.2,-27,11,-12),Yt(25.2,.6,21.2,27,11,-12),Yt(82,1,34,0,0,-14));for(let a of[5.4,10.8])o.put(n,Yt(30.8,.4,30.8,0,a,-15));o.put(n,Yt(24.8,.4,20.8,-27,5.4,-12),Yt(24.8,.4,20.8,27,5.4,-12)),o.put(s,je(6,12,0,1,.08,.4)),o.put(e,Nt(12,8,0,19.7,-15,16,t));for(let a of[22.3,25])o.put(n,Nt(12.3,.4,0,a,-15,16));o.put(n,Nt(13,.8,0,27.7,-15,16),Ke(12,13,0,28.5,-15,{seg:32,swell:.02,finial:.2})),o.put(Li(),le(.7,0,44.6,-15,8));for(let[a,l]of[[-1,-1],[1,-1],[-1,1],[1,1]]){let c=a*13.4,h=-15+l*13.4;o.put(r,Nt(2.3,25,c,0,h,8)),o.put(n,Nt(2.8,.5,c,25,h,8),qn(3,2.6,c,25.5,h))}for(let a of[-1,1]){o.put(r,Nt(2,15,a*38.5,0,-3,8)),o.put(n,Ke(2.2,2.6,a*38.5,15,-3,{seg:10}));for(let l=16;l<=38;l+=5.5)o.put(n,qn(1.4,1.5,a*l,11.6,-3.2))}for(let a=-36;a<=36;a+=9)o.light(a,.6,15,Xt,.36,15);return o.light(0,24,8,Xt,.6,13).light(0,36,4,Xt,.5,12).light(-13,26,2,Xt,.3,7).light(13,26,2,Xt,.3,7),o}function $u(){let i=or({cols:6,rows:1,lit:.5,seed:31,stone:[170,96,74],shadow:[34,22,18],opening:.56}),t={u:18,v:6},e=ut({map:i.map,emissiveMap:i.emissiveMap,glow:1.5,key:"clock"}),n=ut({tint:14865076}),r=ut({tint:11561554}),s=ut({tint:7293504}),o=new ue;o.put(e,rn(34,6,14,0,0,-7,t)),o.put(n,Yt(35,.5,15,0,6,-7)),o.put(s,$(33,1.6,13,0,6.5,-7));let a=0;for(let[l,c]of[[8,16],[7.2,8],[6.4,6]]){o.put(r,Yt(l,c,l,0,a,-7)),o.put(n,Yt(l+1.4,.6,l+1.4,0,a+c,-7));for(let h of[-1,1])o.put(n,$(.5,c,.5,h*(l/2-.1),a,-7+l/2-.1));a+=c+.6}for(let[l,c,h]of[[0,1,0],[1,0,Math.PI/2],[-1,0,-Math.PI/2]]){let u=be(new Tn(2.1,24)).rotateY(h).translate(l*3.25,27.8,-7+c*3.25);o.put(ne(1.7,1.5,1.1),u),o.put(s,$(.14,1.5,.14,l*3.3,27.8,-7+c*3.3),be(new We(1.1,.14,.14)).rotateY(h).translate(l*3.3+(c?.45:0),27.9,-7+c*3.3+(l?-l*.45:0)))}o.put(s,jn(5,6.4,0,a,-7,4)),o.put(Li(),le(.4,0,a+6.7,-7,8)),o.put(n,Gt([0,a+6.6,-7],[0,a+9.4,-7],.06));for(let l of[-12,0,12])o.light(l,.6,9,Ee,.34,11);return o.light(0,14,6,Xt,.5,11).light(0,26,5,Ee,.5,8).light(0,3,1.5,Ee,.6,7,2.2),o}function tf(){let i=ut({tint:14015202}),t=ut({tint:12175062}),e=new ue;e.put(i,Yt(30,1.2,30,0,0,-15),Yt(24,5.4,24,0,1.2,-15),Yt(26,.5,26,0,6.6,-15));let n=new Ri(10,2),r=n.attributes.position;for(let o=0;o<r.count;o++)r.getY(o)<0&&r.setY(o,0);n.computeVertexNormals(),be(n);let s=n.toNonIndexed();s.computeVertexNormals(),e.put(t,s.scale(1,.92,1).translate(0,7.1,-15)),e.put(Li(),le(.55,0,16.9,-15,8),jn(.3,1.6,0,16.9,-15,6));for(let o=0;o<4;o++)e.put(i,$(8-o*.4,.3,1,0,.9-o*.3,.6+o));e.put(ne(.9,1.1,1.4),je(3.2,4.4,0,1.2,-2.94));for(let[o,a]of[[-13,-2],[13,-2],[-13,-28],[13,-28]])e.put(i,Nt(.25,4.6,o,1.2,a,6)),e.put(ne(1.2,1.5,1.9),le(.4,o,6.2,a,8)),e.light(o,6.2,a,ln,.9,6,2.6);for(let o of[-9,0,9])e.light(o,.8,4,ln,.5,12);return e.light(0,12,2,ln,.8,11).light(-12,9,-15,ln,.4,9).light(12,9,-15,ln,.4,9),e}function ef(){let i=ut({tint:12035980}),t=ut({tint:3354926}),e=ut({tint:3355965}),n=new ue;n.put(i,Yt(7,.6,10,0,0,0),$(3.6,5,6.6,0,.6,0),$(4.4,.5,7.4,0,5.6,0),$(3.2,.5,6,0,6.1,0));let r=6.6,s=o=>n.put(t,o);s(be(new Sn(1,12,10)).scale(.95,1.05,2.3).translate(0,r+3.2,0)),s(Gt([0,r+3.7,1.7],[0,r+5.5,2.8],.55,8)),s(be(new Sn(.5,8,6)).scale(.8,.85,1.5).translate(0,r+5.7,3.4));for(let[o,a,l]of[[-.55,1.5,.7],[.55,1.5,0],[-.55,-1.6,0],[.55,-1.6,0]])s(Gt([o,r+2.6,a],[o,r+1.3+l,a+(l?.7:.1)],.24,6)),s(Gt([o,r+1.3+l,a+(l?.7:.1)],[o,r+l*1.2,a+(l?.3:0)],.19,6));s(Gt([0,r+3.6,-2.1],[0,r+1.9,-2.9],.2,6)),s(Gt([0,r+4,.1],[0,r+5.9,0],.5,8)),s(le(.42,0,r+6.5,.05,8)),s(be(new Sn(.5,8,6)).scale(1,.5,1).translate(0,r+6.85,0)),s(Gt([-.5,r+5.5,.1],[-.6,r+4.4,1.2],.15,5)),s(Gt([.5,r+5.5,.1],[.6,r+4.4,1.2],.15,5));for(let o=0;o<16;o++){let a=o*Math.PI/8,l=Math.cos(a)*6.4,c=Math.sin(a)*6.4;n.put(e,$(.12,1.1,.12,l,.6,c))}n.put(e,be(new Wn(6.4,.05,4,32)).rotateX(Math.PI/2).translate(0,1.7,0));for(let[o,a]of[[-4.6,6],[4.6,6],[-4.6,-6],[4.6,-6]])n.put(e,$(.14,3.4,.14,o,.6,a)),n.put(qu(),le(.3,o,4.2,a,8)),n.light(o,4.2,a,Ee,.7,5,2);return n.light(0,2,8,Xt,.7,8).light(0,2,-8,Xt,.4,8),n}function Gc(i=4){let t=ut({tint:6969414}),e=ut({tint:1918512}),n=ut({tint:2775610}),r=ut({tint:10524292}),s=new ue,o=Ge(i);s.put(r,Nt(8.5,1.1,0,0,0,20),Nt(9.3,.3,0,1.1,0,20));for(let a=0;a<7;a++){let l=o()*6.28,c=a?1.2+o()*3:0,h=Math.cos(l)*c,u=Math.sin(l)*c;s.put(t,Gt([h,1.2,u],[h*1.9+(o()-.5)*2,11+o()*3,u*1.9+(o()-.5)*2],a?.5+o()*.5:1.3,7))}for(let a=0;a<9;a++){let l=a/9*6.28+o(),c=9+o()*9;s.put(t,Gt([Math.cos(l)*2,10,Math.sin(l)*2],[Math.cos(l)*c,11.5+o()*3,Math.sin(l)*c],.34,5))}for(let a=0;a<26;a++){let l=o()*6.28,c=4+o()*15,h=3.6+o()*3.4;s.put(o()<.5?e:n,be(new Ri(h,1)).scale(1.15,.7,1.15).translate(Math.cos(l)*c,13.5+o()*5,Math.sin(l)*c))}for(let a=0;a<46;a++){let l=o()*6.28,c=5+o()*13,h=Math.cos(l)*c,u=Math.sin(l)*c,f=11+o()*2;s.put(t,Gt([h,f,u],[h+(o()-.5)*.6,c>9.5?0:1.3+o()*5,u+(o()-.5)*.6],.05+o()*.07,4))}for(let a=0;a<16;a++){let l=o()*6.28,c=3+o()*13,h=Math.cos(l)*c,u=Math.sin(l)*c,f=6.5+o()*3.5;s.put(t,Gt([h,f,u],[h,11.5,u],.03,3)),s.put(ne(2,1.3,.5),le(.24,h,f,u,6)),s.light(h,f,u,Xt,.5,4.2,1.9)}return s.light(0,2.4,7,Xt,.5,8).light(0,2.4,-7,Xt,.4,8),s}var nf=[],fl=(i,t,e,n)=>nf.push({x:i,z:t,hw:e,hd:n}),dl=(i,t,e=0)=>nf.every(n=>Math.abs(i-n.x)>n.hw+e||Math.abs(t-n.z)>n.hd+e),Vc=i=>{let t=(i%360+360)%360;return t>204&&t<336};function Zg(){let i=new ue,t=ut({tint:3158586});i.put(t,Nt(.34,.7,0,0,0,8,null,.2),Gt([0,.7,0],[0,5.6,0],.09,6),Gt([-.95,5.3,0],[.95,5.3,0],.05,4),$(.2,.3,.2,0,5.6,0),jn(.16,.5,0,5.9,0,6));for(let e of[-1,1])i.put(t,Gt([e*.95,5.3,0],[e*.95,4.95,0],.03,4)),i.put(ne(1.9,1.5,.9),le(.3,e*.95,4.7,0,8));return i.light(0,4.9,0,Ee,.95,6.2).spark(-.95,4.7,0,Ee,4.2).spark(.95,4.7,0,Ee,4.2),i}function Qg(){let i=new ue,t=ut({tint:8019008}),e=ut({tint:3158586});i.put(t,$(2.2,.1,.6,0,.5,0),$(2.2,.5,.08,0,.72,-.3));for(let n of[-.95,.95])i.put(e,$(.08,.5,.6,n,0,0));return i}function ul(i,t=1){let e=new ue,n=Ge(i),r=ut({tint:6048314}),s=[ut({tint:1918512}),ut({tint:2775610}),ut({tint:2314042})],o=(4+n()*3)*t;e.put(r,Gt([0,0,0],[n()*.6-.3,o,n()*.6-.3],.3*t,6));for(let a=0;a<4+(n()*3|0);a++){let l=(2+n()*2.2)*t;e.put(s[a%3],be(new Ri(l,1)).scale(1,.78+n()*.3,1).translate((n()-.5)*3.4*t,o+n()*2.6*t,(n()-.5)*3.4*t))}return e}function Wc(i){let t=new ue,e=Ge(i),n=ut({tint:7297604}),r=ut({tint:2446650}),s=8+e()*4,o=(e()-.5)*1.6;t.put(n,Gt([0,0,0],[o*.4,s*.5,0],.26,6),Gt([o*.4,s*.5,0],[o,s,0],.2,6)),t.put(r,le(.6,o,s,0,6));for(let a=0;a<9;a++){let l=a/9*6.28+e(),c=3+e()*1.2;t.put(r,Gt([o,s,0],[o+Math.cos(l)*c*.6,s+.5,Math.sin(l)*c*.6],.16,4),Gt([o+Math.cos(l)*c*.6,s+.5,Math.sin(l)*c*.6],[o+Math.cos(l)*c,s-1-e(),Math.sin(l)*c],.11,4))}return t}function $g(i){let t=Ge(i),e=new ue,n=ut({tint:[8138554,3100028,12035194,3107413,9080732,11822126,5913194][t()*7|0]}),r=ut({tint:10119756}),s=ut({tint:2763830}),o=t()<.4;return e.put(s,o?jn(.34,.95,0,0,0,7):[$(.16,.85,.2,-.11,0,0),$(.16,.85,.2,.11,0,0)]),e.put(n,Nt(.2,.62,0,.85,0,7,null,.24),Gt([-.27,1.4,0],[-.31,.86,.06],.065,4),Gt([.27,1.4,0],[.31,.86,.06],.065,4)),e.put(r,le(.14,0,1.63,0,7)),e}function tx(i){let t=Ge(i),e=new ue,n=ut({tint:7031860}),r=ut({tint:11120054}),s=ut({tint:3158586}),o=ut({map:Zr(["#b33a2e","#1f6f6a","#c98a1e","#2e4f9a"][i%4],"#efe6d2",8),key:"awning"+i%4,side:Xe});e.put(n,$(2.6,.16,1.4,0,.9,0),$(2.6,.5,.06,0,.42,.7));for(let[c,h]of[[-1,.72],[1,.72],[-1,-.72],[1,-.72]])e.put(s,be(new ke(.34,.34,.06,10)).rotateX(Math.PI/2).translate(c,.34,h));for(let[c,h]of[[-1.25,.66],[1.25,.66],[-1.25,-.66],[1.25,-.66]])e.put(s,Gt([c,1,h],[c,2.7,h],.03,4));let a=new Mn(3.1,1.2);a.rotateX(-Math.PI/2+.28).translate(0,2.78,.42);let l=new Mn(3.1,1.2);l.rotateX(-Math.PI/2-.28).translate(0,2.78,-.42),e.put(o,a,l);for(let c=0;c<5;c++)e.put(r,Nt(.16+t()*.1,.16+t()*.2,-1+c*.5,1.06,(t()-.5)*.7,8));return e.put(r,Nt(.3,.1,.9,1.06,.2,10)),e.put(ne(2.2,1.7,.9),le(.11,0,2.3,.2,6)),e.light(0,2.3,.2,Xt,1.1,3.4,2.6),e}function ex(){let i=new ue,t=ut({tint:3111498}),e=ut({tint:14856762}),n=ut({tint:1842466});i.put(t,$(1.3,.75,2.2,0,.3,0)),i.put(e,$(1.3,.12,2.3,0,1.75,-.05),$(1.2,.7,.08,0,1.05,-1.1)),i.put(n,$(1.22,.7,1.2,0,1.05,-.45),$(.5,.5,.5,0,.5,1.2));for(let[r,s]of[[0,1.35],[-.62,-.75],[.62,-.75]])i.put(n,be(new ke(.26,.26,.14,10)).rotateZ(Math.PI/2).translate(r,.26,s));for(let r of[-.6,.6])i.put(n,Gt([r,1.05,.2],[r,1.75,.5],.03,4));return i.put(ne(2,1.8,1.3),le(.09,0,.9,1.46,6)),i}function nx(){let i=new ue,t=ut({map:Zr("#8a6a4c","#73573d",10),key:"planks"}),e=ut({tint:4866104}),n=ut({tint:12166524}),r=new We(5.4,.36,21),s=r.attributes.uv,o=r.attributes.position;for(let a=0;a<s.count;a++)s.setXY(a,o.getZ(a)/3.2,o.getX(a)/5.4);i.put(t,r.translate(0,1.22,10.5));for(let a=1.5;a<=20;a+=3.7)for(let l of[-2.5,2.5])i.put(e,Nt(.22,3.6,l,-1.4,a,6)),a>2&&i.put(n,Gt([l,2.1,a-3.7],[l,2.1,a],.035,3));for(let a of[-2.5,2.5])i.put(e,Gt([a,1.4,20.2],[a,5.2,20.2],.07,5)),i.put(ne(1.9,1.45,.85),le(.3,a,5.4,20.2,8)),i.light(a,5.4,20.2,Ee,.85,5.6,3.6);return i.put(e,$(1,.8,1,1.4,1.4,3),$(.8,.7,.8,1.6,1.4,4.2),$(.7,.6,.7,1.5,2.2,3.1)),i.put(n,be(new Wn(.45,.12,5,10)).rotateX(Math.PI/2).translate(-1.6,1.52,5)),i}function rf(i){let t=new ue,e=Ge(21),n=ut({tint:9274488}),r=ut({tint:11774098}),s=ut({tint:5591114,side:Xe}),o=ut({tint:3158586}),a=ut({tint:3355708}),l=ut({tint:1848100}),c=ut({tint:10326914,side:Xe});t.put(n,Di(gt+.6,gt+16,1.7,0,360,240)),t.put(r,Di(gt-.6,gt+.6,1.96,0,360,240),Di(gt+15.6,gt+16.4,1.86,0,360,240)),t.put(s,kc(gt-.6,-1.2,3.2,0,360,240)),t.put(a,Di(gt+16.4,gt+27,1.6,0,360,240)),t.put(r,Di(gt+27,gt+28,1.78,0,360,240)),t.put(l,Di(gt+28,960,1.5,0,360,96));for(let m=0;m<360;m+=2){let v=de(m,gt+.2);t.put(o,$(.13,1.15,.13,v.x,1.96,v.z))}for(let m of[2.55,3.05])t.put(o,be(new Wn(gt+.2,.045,4,360)).rotateX(Math.PI/2).translate(0,m,0));for(let m of[114,66,41,-27,144,180,222,318,250,292])for(let v=0;v<7;v++)t.put(c,Di(gt-.6-(v+1)*1.05,gt-.6-v*1.05,1.7-(v+1)*.32,m-4.2,8.4,240),kc(gt-.6-(v+1)*1.05,1.7-(v+2)*.32,.32,m-4.2,8.4,240));let h=Zg(),u=Qg(),f=m=>Math.atan2(-Math.cos(m*nn),Math.sin(m*nn));for(let m=3;m<360;m+=7.5){let v=de(m,gt+3.2);t.stamp(h,v.x,v.z,f(m)+Math.PI/2,1,1.7);let M=de(m+3.75,gt+2.6);t.stamp(u,M.x,M.z,f(m+3.75),1,1.7)}for(let m=0;m<360;m+=10){let v=de(m,gt+27.6),M=de(m,gt+25.2);t.put(o,Gt([v.x,1.7,v.z],[v.x,8.2,v.z],.1,5),Gt([v.x,8.2,v.z],[M.x,8.5,M.z],.07,4)),t.put(ne(1.5,1.7,1.9),le(.26,M.x,8.4,M.z,6)),t.light(M.x,8.3,M.z,ln,.75,8.5,4.4)}let d=[ul(1),ul(2),ul(3),ul(4,1.35)],x=[Wc(1),Wc(2),Wc(3)];for(let m=1.5;m<360;m+=5){if(Vc(m)&&e()<.6)continue;let v=de(m+e()*2,gt+13.4+e()*1.4);t.stamp(d[e()*3|0],v.x,v.z,e()*6.28,Vc(m)?.62:.8+e()*.3,1.7)}for(let m=0;m<520;m++){let v=e()*360,M=gt+32+e()*e()*300,b=de(v,M);Vc(v)||!dl(b.x,b.z,8)||t.stamp(d[e()*4|0],b.x,b.z,e()*6.28,.9+e()*.7,1.5)}for(let m of[118,110,70,62,45,37,-23,-31,148,140,184,176]){let v=de(m,gt+8+e()*4);t.stamp(x[e()*3|0],v.x,v.z,e()*6.28,1,1.7)}let y=[0,1,2,3,4,5].map(tx),g=Array.from({length:14},(m,v)=>$g(v+1)),p=ex(),A=(m,v,M,b)=>{for(let R=0;R<M;R++){let S=m+(e()-.5)*b,E=de(S,v+(e()-.5)*5);t.stamp(g[e()*14|0],E.x,E.z,e()*6.28,.92+e()*.2,1.7)}};for(let[m,v,M]of[[212,332,9.5],[-12,34,11],[136,196,12],[50,130,13]])for(let b=m;b<=v;b+=M){let R=de(b+e()*2,gt+11.5);if(t.stamp(y[e()*6|0],R.x,R.z,f(b),1.15,1.7),A(b,gt+8.6,4+(e()*4|0),3.4),e()<.7){let S=de(b+3.5,gt+18.2);t.stamp(p,S.x,S.z,f(b)+Math.PI/2,1.2,1.6)}}for(let m=0;m<360;m+=3.1)e()<.75&&A(m,gt+5+e()*6,1+(e()*2|0),2);for(let[m,v]of[[214,330],[-10,32],[140,192]])for(let M=m;M<v;M+=7.5)for(let b=1;b<12;b++){let R=b/12,S=de(M+3+R*7.5,gt+3.2),E=Math.sin(R*Math.PI)*1.1;t.spark(S.x,7.2-E,S.z,[Xt,Xt,Yr,ii,Ee][b%5],1.5,1)}let w=nx();for(let m of i){let v=de(m,gt+.6);t.stamp(w,v.x,v.z,f(m),1,0)}return t}var ix=i=>{let t=(i%360+360)%360;return t>204&&t<336};function sf(){let i=new ue,t=Ge(5),e={u:8*3.3,v:8*3.2},n=[[84,90,110],[104,94,84],[72,84,104],[112,104,96]].map((M,b)=>{let R=Xu({seed:40+b,lit:.13+b*.04,wall:M});return ut({map:R.map,emissiveMap:R.emissiveMap,glow:1.3,key:"block"+b})}),r=ut({tint:4869208}),s=ut({tint:1842468}),o=ut({tint:6975356}),a=ut({tint:3158586}),l=[ne(1.9,1.2,.5),ne(1.8,.35,.3),ne(.4,1.6,1.4),ne(1.7,.5,1.1),ne(1.5,1.6,1.8),ne(.5,1.5,.5)],c=[Xt,hl,ii,Yr,ln,ii],h=0;for(let M=0;M<620&&h<430;M++){let b=t()*360,R=t()<.36,S=R?gt+32+t()*10:gt+44+t()*t()*420,E=de(b,S);if(ix(b)||!dl(E.x,E.z,12))continue;let P=10+t()*22,D=9+t()*16,H=R?7+t()*9:6+t()*t()*(S>gt+130?52:24),O=t()*4|0,X=Math.atan2(-Math.cos(b*nn),Math.sin(b*nn))+(t()-.5)*.4,z=new ue;if(z.put(n[O],rn(P,H,D,0,0,-D/2,e,t()*3)),z.put(r,$(P+.5,.5,D+.5,0,H,-D/2)),t()<.7){let tt=(t()-.5)*(P-4),k=-D/2+(t()-.5)*(D-4);z.put(o,$(2.2,1.1,2.2,tt,H+.5,k)),z.put(s,Nt(.9,1.5,tt,H+1.6,k,10))}if(t()<.6&&z.put(n[O],$(3,2.6,3.4,(t()-.5)*(P-5),H+.5,-D/2+(t()-.5)*(D-5))),t()<.3){let tt=(t()-.5)*(P-2);z.put(a,Gt([tt,H,-D/2],[tt,H+4+t()*3,-D/2],.04,3))}if(t()<.25)for(let tt=0;tt<3;tt++)z.put(o,$(.9,.6,.5,-P/2+2+tt*3,3+tt*3.2,.25));if(R||t()<.2){let tt=t()*6|0;z.put(ne(1.5,1.1,.6),$(P-1.2,2.3,.08,0,.4,.05)),z.put(r,$(P,.2,1.6,0,3,.8));for(let k=0;k<1+(t()*3|0);k++)z.put(l[(tt+k)%6],$(2.4+t()*3,.9,.12,(t()-.5)*(P-5),3.3+t()*1.2,.12));z.light(0,2,2.6,c[tt],.7,7).light(0,2,2.6,Xt,.5,9)}i.stamp(z,E.x,E.z,X,1,1.5),h++,t()<.2&&i.light(E.x+(t()-.5)*14,4.5,E.z+(t()-.5)*14,Ee,.5,9,3.4)}let u=ut({tint:13351322}),f=ut({tint:14672614}),d=ut({tint:4160092}),x=ne(1.9,1.35,.42),y=ut({tint:9080988}),g=(M,b,R)=>{let S=de(M,b);dl(S.x,S.z,6)&&i.stamp(R(),S.x,S.z,Math.atan2(-Math.cos(M*nn),Math.sin(M*nn)),1,1.5)},p=()=>{let M=new ue,b=[];for(let R=0;R<=12;R++){let S=R/12;b.push(new nt(Math.max(.3,3.4*(1-Math.pow(S,1.7)*.93)),11*S))}return M.put(u,$(8,5,8,0,0,0),be(new mi(b,10)).translate(0,5,0),$(5,4,5,0,0,5.5),jn(3.6,3,0,4,5.5,4)),M.put(x,le(.4,0,16.4,0,8)),M.put(ne(1.7,.6,.2),$(1.2,.8,.04,.7,17.6,0)),M.put(y,Gt([0,16.4,0],[0,18.4,0],.04,3)),M.light(0,3,9,Xt,.7,9).light(0,9,5,Xt,.5,8,3),M},A=()=>{let M=new ue;return M.put(f,$(12,6,12,0,0,0),Nt(4.2,1.2,0,6,0,12),Ke(4.2,4.6,0,7.2,0,{seg:16,swell:.06}),Nt(1,19,7.5,0,5,8),Nt(1.5,.5,7.5,13,5,8),Nt(1.5,.5,7.5,17,5,8)),M.put(d,jn(1.2,3,7.5,19,5,8)),M.put(x,le(.3,7.5,22.2,5,6),le(.34,0,12.6,0,6)),M.put(ne(.5,1.7,.8),$(.5,1.2,.5,7.5,14,5)),M.light(0,3,9,ii,.5,9).light(7.5,15,5,ii,.6,6,3.2),M},w=()=>{let M=new ue;for(let[b,R]of[[-2.6,-2.6],[2.6,-2.6],[-2.6,2.6],[2.6,2.6]])M.put(f,Gt([b,0,R],[b*.8,17,R*.8],.32,6));for(let b of[6,12])M.put(f,$(5.4,.3,.3,0,b,2.4),$(5.4,.3,.3,0,b,-2.4),$(.3,.3,5.4,2.4,b,0),$(.3,.3,5.4,-2.4,b,0));return M.put(f,Nt(4.6,5,0,17,0,14,null,5.2),jn(5.4,1.6,0,22,0,14)),M.light(0,2,6,Ee,.4,9),M},m=()=>{let M=new ue;for(let[b,R]of[[-1.5,-1.5],[1.5,-1.5],[-1.5,1.5],[1.5,1.5]])M.put(y,Gt([b,0,R],[b*.2,44,R*.2],.09,4));for(let b=4;b<44;b+=5){let R=1.5*(1-b/55);M.put(y,Gt([-R,b,-R],[R,b+5,-R],.05,3),Gt([R,b,R],[-R,b+5,R],.05,3),Gt([R,b,-R],[R,b+5,R],.05,3),Gt([-R,b,R],[-R,b+5,-R],.05,3))}for(let b of[30,36,40])M.put(f,$(.5,2,.3,.9,b,0),$(.5,2,.3,-.9,b,0));return M.spark(0,45,0,hl,5,2).spark(0,24,0,hl,3.4,2),M},v=M=>()=>{let b=new ue,R=Ge(M),S=R()*6|0;for(let E of[-4.5,4.5])b.put(y,Gt([E,0,0],[E,13,0],.16,5));return b.put(y,$(11.4,5.6,.3,0,8.4,-.2)),b.put(ne(.5,.52,.6),$(11,5.2,.1,0,8.6,.05)),b.put(l[S],$(11,1.6,.12,0,8.6,.08),$(3,3.4,.12,-3.2,10.4,.08)),b.light(0,11,5,c[S],.8,10).light(0,9,4,ln,.5,9),b};for(let[M,b]of[[20,96],[74,150],[112,170],[146,110],[176,84],[60,240],[128,250],[-12,130]])g(M,gt+b,p);for(let[M,b]of[[32,128],[100,220],[166,150],[-24,100]])g(M,gt+b,A);for(let[M,b]of[[24,200],[140,200],[84,280]])g(M,gt+b,w);for(let[M,b]of[[40,170],[118,130],[158,230],[4,210],[78,330]])g(M,gt+b,m);return[[26,34],[64,36],[120,34],[150,60],[186,36],[-4,34],[-30,64],[96,150]].forEach(([M,b],R)=>g(M,gt+b,v(R+3))),i}var vi={cols:96,rows:246,aspect:.38971,height:"data:image/png;base64,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",mask:"data:image/png;base64,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",shade:"data:image/jpeg;base64,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"};var Xc=i=>new Promise(t=>{let e=new Image;e.onload=()=>t(e),e.src=i});async function of(i){let[t,e,n]=await Promise.all([Xc(vi.height),Xc(vi.mask),Xc(vi.shade)]),r=document.createElement("canvas");r.width=vi.cols,r.height=vi.rows;let s=r.getContext("2d",{willReadFrequently:!0});s.drawImage(t,0,0);let o=s.getImageData(0,0,r.width,r.height).data,a=31,l=a*vi.aspect,c=2.2,h=vi.cols,u=vi.rows,f=(m,v)=>o[(Math.max(0,Math.min(u-1,v))*h+Math.max(0,Math.min(h-1,m)))*4]/255,d=[],x=[],y=[];for(let m=0;m<u;m++)for(let v=0;v<h;v++)d.push((v/(h-1)-.5)*l,(1-m/(u-1))*a,f(v,m)*c),x.push(v/(h-1),1-m/(u-1));for(let m=0;m<u-1;m++)for(let v=0;v<h-1;v++){let M=m*h+v;y.push(M,M+h,M+1,M+1,M+h,M+h+1)}let g=new Ce;g.setAttribute("position",new Jt(d,3)),g.setAttribute("uv",new Jt(x,2)),g.setIndex(y);let p=m=>{let v=new sn(m);return v.needsUpdate=!0,v.anisotropy=8,v.colorSpace=Kn,v},A=new Se({uniforms:fn.merge([ht.fog,{shade:{value:null},mask:{value:null}}]),fog:!0,vertexShader:`varying vec2 vUv;
      #include <fog_pars_vertex>
      void main() { vUv = uv; vec4 mvPosition = modelViewMatrix * vec4(position, 1.0); gl_Position = projectionMatrix * mvPosition;
      #include <fog_vertex>
      }`,fragmentShader:`uniform sampler2D shade; uniform sampler2D mask; varying vec2 vUv;
      #include <fog_pars_fragment>
      void main() { if (texture2D(mask, vUv).r < 0.5) discard; float l = texture2D(shade, vUv).r;
        vec3 c = mix(vec3(0.15, 0.065, 0.008), vec3(0.98, 0.62, 0.15), smoothstep(0.04, 0.86, l)); c += pow(l, 6.0) * vec3(1.0, 0.9, 0.6) * 0.75;
        c *= mix(1.3, 0.8, smoothstep(0.0, 1.0, vUv.y)); c += vec3(0.05, 0.08, 0.16) * smoothstep(0.55, 1.0, vUv.y) * (1.0 - l);
        gl_FragColor = vec4(c, 1.0);
      #include <fog_fragment>
      #include <tonemapping_fragment>
      #include <colorspace_fragment>
      }`});A.uniforms.shade.value=p(n),A.uniforms.mask.value=p(e);let w=new Wt(g,A);w.position.set(.6,16.6,0),i.add(w)}function af(){let i=new ue,t=ut({tint:9208696}),e=ut({tint:11818558}),n=ut({tint:9322544}),r=ut({tint:13220256}),s=ut({tint:3158586}),o=ne(1.9,1.4,.8),a=ne(1.7,.7,.15);i.put(t,Yt(58,1,22,0,3.2,0),Yt(62,.5,26,0,4.2,0));for(let l=-26;l<=26;l+=6.5)for(let c of[-9,9])i.put(t,Nt(.55,3.4,l,-.2,c,8));for(let l=0;l<7;l++)i.put(t,$(14-l*.2,.5,1.2,0,3.7-l*.55,11.6+l*1.2));for(let l=-30.5;l<=30.5;l+=1.9)for(let c of[-12.6,12.6])(Math.abs(l)>7.5||c<0)&&i.put(s,$(.12,1.1,.12,l,4.7,c));for(let l=-12.6;l<=12.6;l+=1.8)for(let c of[-30.5,30.5])i.put(s,$(.12,1.1,.12,c,4.7,l));for(let l of[-12.6,12.6])i.put(s,$(61,.07,.07,0,5.75,l));for(let l of[-30.5,30.5])i.put(s,$(.07,.07,25.2,l,5.75,0));i.put(e,Yt(18,6,18,0,4.7,0),Yt(14.6,4.6,14.6,0,11.4,0)),i.put(n,$(19.4,.7,19.4,0,10.7,0),$(16,.7,16,0,16,0),$(19,.5,19,0,4.7,0));for(let l=-6.6;l<=6.6;l+=3.3)i.put(n,$(2.4,3.6,.2,l,6,9.06));for(let l=-4.8;l<=4.8;l+=3.2)i.put(n,$(2.2,2.8,.2,l,12.2,7.36));for(let[l,c]of[[-24,8],[24,8],[-24,-8],[24,-8],[-12,10.5],[12,10.5]])i.put(r,Nt(.5,5.2,l,4.7,c,8),Nt(.8,.3,l,9.8,c,8)),i.put(o,le(.62,l,10.6,c,10)),i.light(l,10.6,c,Ee,.9,7,5.5);for(let l of[-28,28])i.put(s,Gt([l,4.7,-10],[l,13.5,-10],.07,4)),i.put(a,$(2.6,1.5,.06,l+1.35,11.9,-10));for(let l of[-52,52])for(let c of[26,-22]){for(let h=0;h<4;h++){i.put(r,Nt(1.9-h*.3,.5,l,2.2+h*2.6,c,10));for(let u=0;u<6;u++){let f=u*Math.PI/3;i.spark(l+Math.cos(f)*(1.9-h*.3),2.9+h*2.6,c+Math.sin(f)*(1.9-h*.3),Xt,1.3,1)}}i.put(r,Nt(.55,11,l,0,c,8)),i.put(o,le(.8,l,11.6,c,10)),i.light(l,11.6,c,Ee,.9,7,6)}return i.light(0,6,15,Xt,.7,11).light(-11,5,12,Xt,.5,8).light(11,5,12,Xt,.5,8),i}function lf(i){let t=new ue,e=Ge(77),n=ut({tint:9208696});for(let o=0;o<150;o++){let a=e()*6.28,l=52+e()*80;t.spark(Math.cos(a)*l,.35,Math.sin(a)*l,Xt,1.25,3)}for(let o of i.concat([114,66,41,-27,144,180]))for(let a=0;a<12;a++){let l=de(o+(e()-.5)*8,gt-8-e()*16);t.spark(l.x,.35,l.z,Xt,1.35,3)}for(let o=0;o<46;o++){let a=e()*6.28,l=36+e()*12;t.spark(Math.cos(a)*l*1.3,.35,Math.sin(a)*l,Xt,1.3,3)}let r=-78,s=-46;t.put(n,Nt(7,.5,r,-.1,s,20),Nt(1.2,1.4,r,0,s,10));for(let o=0;o<10;o++){let a=o/10*6.28;for(let l=0;l<9;l++){let c=l/8,h=6-c*5.2;t.spark(r+Math.cos(a)*h,.6+Math.sin(c*Math.PI*.62)*7.5,s+Math.sin(a)*h,[ln,ii,Yr][o%3],1.6,1)}}for(let o=0;o<16;o++)t.spark(r+(e()-.5)*.6,1.5+o*.95,s+(e()-.5)*.6,ln,1.9,1);return t.light(r,2,s,ii,.9,8),t}function cf(i){let t=[],e=xi(64);return[[14240570,86,44,.05,.3],[3837913,-64,78,-.04,2.1],[14856762,30,-84,.045,4],[4829306,-98,-8,-.05,5.2],[15262418,100,-52,.04,1.2]].forEach(([n,r,s,o,a])=>{let l=new xn,c=new Re({color:new vt(n).multiplyScalar(.55)}),h=new Re({color:new vt(n).multiplyScalar(.85)}),u=new Wt(new Sn(1,12,6,0,Math.PI*2,Math.PI/2,Math.PI/2).scale(1.3,.8,2.2),c);u.position.y=.7,l.add(u);let f=new Wt(new We(2.3,.14,2.8),h);f.position.y=2.5,l.add(f);for(let[x,y]of[[-1,-1.2],[1,-1.2],[-1,1.2],[1,1.2]]){let g=new Wt(new ke(.05,.05,1.8),c);g.position.set(x,1.6,y),l.add(g)}let d=new Zn(new Vn({map:e,color:16760944,blending:an,depthWrite:!1,transparent:!0}));d.scale.set(5,5,1),d.position.set(0,2.2,0),l.add(d),l.scale.setScalar(1.5),i.add(l),t.push({g:l,cx:r,cz:s,speed:o,phase:a,rx:16+Math.abs(r)*.1,rz:11})}),t}function hf(){let i=new xn,t=Zr("#7a4e2c","#63401f",12,!1),e=new Re({map:t}),n=new Re({color:13081186}),r=new Re({color:4007959}),s=new Re({color:new vt(3,2,.9)}),o=new Re({map:Zr("#b33a2e","#efe6d2",8),side:Xe}),a=new Wt(new Sn(1,20,10,0,Math.PI*2,Math.PI/2,Math.PI/2).scale(1.75,1.15,5.4),e);a.position.y=1,i.add(a);let l=new Wt(new Tn(1,24).rotateX(-Math.PI/2).scale(1.62,1,5.2),r);l.position.y=.86,i.add(l);let c=new Wt(new Wn(1,.07,6,40).rotateX(Math.PI/2).scale(1.75,1,5.4),n);c.position.y=1.02,i.add(c);for(let y of[-2.6,-.6,1.6,3.2]){let g=new Wt(new We(3.3-Math.abs(y)*.32,.14,.6),n);g.position.set(0,.98,y),i.add(g)}let h=new Wt(new ke(1.7,1.7,3.6,14,1,!0,-Math.PI/2,Math.PI).rotateX(Math.PI/2).rotateZ(Math.PI/2),o);h.position.set(0,1.5,.4),h.scale.set(1,.9,1),i.add(h);for(let[y,g]of[[-1.5,-1.4],[1.5,-1.4],[-1.5,2.2],[1.5,2.2]]){let p=new Wt(new ke(.05,.05,1.6),n);p.position.set(y,1.8,g),i.add(p)}for(let y of[-1,1]){let g=new Wt(new ke(.05,.05,4.4),n);g.position.set(y*2.6,1,-.8),g.rotation.set(.25,0,y*1.15),i.add(g);let p=new Wt(new We(.5,.06,1),n);p.position.set(y*4.5,.2,-1.3),i.add(p)}let u=[];for(let[y,g,p]of[[5,3.4,12],[-4.8,4.2,15]]){let A=new Wt(new ke(.06,.06,g-.9),n);A.position.set(0,.9+(g-.9)/2,y),i.add(A);let w=new Wt(new We(.56,.74,.56),s);w.position.set(0,g+.3,y),i.add(w);let m=new Wt(new ji(.5,.36,4).rotateY(Math.PI/4),r);m.position.set(0,g+.86,y),i.add(m);let v=new Zn(new Vn({map:xi(),color:16758880,blending:an,depthWrite:!1,transparent:!0,opacity:.9}));v.scale.set(p,p,1),v.position.copy(w.position),i.add(v),u.push(v)}let f=new Wt(new Mn(1.5,.8),new Re({color:14609752,side:Xe}));f.position.set(.8,5.6,-4.8),i.add(f);let d=new Wt(new ke(.03,.03,1.4),n);d.position.set(0,5.4,-4.8),i.add(d);let x=new Wt(new Tn(12,24).rotateX(-Math.PI/2),new Re({map:xi(),color:16752704,blending:an,transparent:!0,opacity:.2,depthWrite:!1}));return x.position.set(0,.12,0),i.add(x),i.scale.setScalar(1.7),i.userData={lights:u,flag:f},i}var js=[126,102,78,54,28,6,-16,-38,162,-90],Kc=[9,8,0,1,2,3,4,5,6,7],Qr={zenith:263692,mid:660006,horizon:1780302,fog:1186872,water:264726};function rx(i,t,e={}){let n=new tl({canvas:i,antialias:!1,powerPreference:"high-performance"});n.toneMapping=Hr,n.toneMappingExposure=1.12,n.outputColorSpace=$e;let r=new Ms;r.fog=new ys(Qr.fog,8e-4),r.background=new vt(Qr.mid);let s=new tn(38,1,2,4200),o=matchMedia("(prefers-reduced-motion: reduce)"),a=Ge(11);r.add(new Wt(new Sn(3600,32,16),new Se({side:on,depthWrite:!1,fog:!1,uniforms:{zenith:{value:new vt(Qr.zenith)},mid:{value:new vt(Qr.mid)},horizon:{value:new vt(Qr.horizon)}},vertexShader:"varying vec3 d; void main(){ d = normalize(position); gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",fragmentShader:`uniform vec3 zenith; uniform vec3 mid; uniform vec3 horizon; varying vec3 d;
      void main(){ float y = max(d.y, 0.0); vec3 c = mix(horizon, mid, smoothstep(0.0, 0.22, y)); c = mix(c, zenith, smoothstep(0.18, 0.8, y)); c += vec3(0.16, 0.09, 0.05) * exp(-y * 18.0) * 0.3; gl_FragColor = vec4(c, 1.0);
      #include <tonemapping_fragment>
      #include <colorspace_fragment>
      }`})));let l=[],c=[],h=[];for(let W=0;W<3200;W++){let Q=a()*2-1,Z=a()*Math.PI*2,Ut=Math.abs(Q)*.96+.035,zt=Math.sqrt(1-Ut*Ut);l.push(Math.cos(Z)*zt*3300,Ut*3300,Math.sin(Z)*zt*3300);let Vt=a();c.push(Vt<.03?3.6:Vt<.2?2.3:1.35),h.push(a()*6.28)}let u=new Ce;u.setAttribute("position",new Jt(l,3)),u.setAttribute("size",new Jt(c,1)),u.setAttribute("phase",new Jt(h,1));let f=new Lr(u,new Se({transparent:!0,depthWrite:!1,fog:!1,blending:an,uniforms:{time:{value:0},dpr:{value:1}},vertexShader:"attribute float size; attribute float phase; uniform float time; uniform float dpr; varying float tw; void main(){ tw = 0.72 + 0.28 * sin(time * (0.6 + phase * 0.25) + phase * 9.0); gl_PointSize = size * dpr; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",fragmentShader:"varying float tw; void main(){ float d = length(gl_PointCoord - 0.5); float a = smoothstep(0.5, 0.05, d) * tw; gl_FragColor = vec4(vec3(0.92, 0.95, 1.0) * a * 1.5, a); }"}));r.add(f);let d=document.createElement("canvas");d.width=d.height=256;{let W=d.getContext("2d");W.fillStyle="#fff6e0",W.beginPath(),W.arc(128,128,96,0,7),W.fill(),W.fillStyle="rgba(190,180,160,.5)";for(let[Q,Z,Ut]of[[150,100,16],[176,150,11],[130,170,9],[190,110,7]])W.beginPath(),W.arc(Q,Z,Ut,0,7),W.fill();W.globalCompositeOperation="destination-out",W.beginPath(),W.arc(72,116,92,0,7),W.fill()}let x=new Zn(new Vn({map:new Qn(d),color:new vt(2.4,2.3,2),fog:!1,depthWrite:!1}));x.scale.set(150,150,1),x.position.set(980,1050,-2900),r.add(x);let y=new Zn(new Vn({map:xi(256),color:7311320,fog:!1,depthWrite:!1,blending:an,opacity:.32}));y.scale.set(1500,1500,1),y.position.copy(x.position),r.add(y);let g=document.createElement("canvas");g.width=g.height=256;{let W=g.getContext("2d"),Q=W.createImageData(256,256),Z=Ge(19),Ut=[];for(let zt=0;zt<22;zt++)Ut.push([1+(Z()*5|0),1+(Z()*5|0),Z()*6.28,Z()]);for(let zt=0;zt<256;zt++)for(let Vt=0;Vt<256;Vt++){let ae=0;for(let[Qt,me,Je,Ni]of Ut)ae+=Math.sin((Vt*Qt+zt*me)/256*6.2832+Je)*Ni/(Qt+me);let Pe=Math.max(0,Math.min(1,ae*.9-.12)),pe=(zt*256+Vt)*4;Q.data[pe]=150,Q.data[pe+1]=170,Q.data[pe+2]=215,Q.data[pe+3]=Pe*Pe*255}W.putImageData(Q,0,0)}let p=new Qn(g);p.wrapS=p.wrapT=fi,p.repeat.set(3,3);let A=new Wt(new Mn(9e3,9e3).rotateX(Math.PI/2),new Re({map:p,transparent:!0,opacity:.2,depthWrite:!1,fog:!1}));A.position.y=620,r.add(A);let w=document.createElement("canvas");w.width=w.height=256;{let W=w.getContext("2d"),Q=W.createImageData(256,256),Z=Ge(3),Ut=[];for(let Vt=0;Vt<30;Vt++)Ut.push([3+(Z()*14|0),3+(Z()*14|0),Z()*6.28,.4+Z()]);let zt=(Vt,ae)=>{let Pe=0;for(let[pe,Qt,me,Je]of Ut)Pe+=Math.sin((Vt*pe+ae*Qt)/256*6.2832+me)*Je/(pe+Qt);return Pe};for(let Vt=0;Vt<256;Vt++)for(let ae=0;ae<256;ae++){let Pe=zt(ae+1,Vt)-zt(ae-1,Vt),pe=zt(ae,Vt+1)-zt(ae,Vt-1),Qt=Math.hypot(Pe*4,pe*4,1),me=(Vt*256+ae)*4;Q.data[me]=(-Pe*4/Qt*.5+.5)*255,Q.data[me+1]=(-pe*4/Qt*.5+.5)*255,Q.data[me+2]=(1/Qt*.5+.5)*255,Q.data[me+3]=255}W.putImageData(Q,0,0)}let m=new Qn(w);m.wrapS=m.wrapT=fi;let v=new al(new Tn(gt+1,96),{textureWidth:1024,textureHeight:1024,waterNormals:m,sunDirection:new F(.3,.34,-.9).normalize(),sunColor:6255796,waterColor:Qr.water,distortionScale:1.5,fog:!0});v.rotation.x=-Math.PI/2,v.material.uniforms.size.value=.55,r.add(v);let M=new ue,b=W=>{let Q=de(W,1);return Math.atan2(-Q.x,-Q.z)*.62},R=(W,Q,Z,Ut,zt=b(Q))=>{let Vt=de(Q,Z),ae=de(Q,Z+Ut[2]);return fl(ae.x,ae.z,Ut[0],Ut[1]),M.stamp(W(),Vt.x,Vt.z,zt,1,1.5),Vt};fl(0,-(gt+68),86,44),M.stamp(ju(),0,-(gt+70),0,1,.3),R(Ju,134,gt+44,[30,30,14]),R(Zu,198,gt+46,[44,36,14]),R(Qu,48,gt+54,[48,42,15]),R(Yu,14,gt+44,[26,26,17]),R($u,-14,gt+40,[24,18,7]),R(tf,-38,gt+42,[22,22,15]),R(()=>Gc(4),171,gt+47,[21,21,0],0),R(()=>Gc(9),86,gt+150,[21,21,0],0);{let W=de(153,gt+8);fl(W.x,W.z,7,7),M.stamp(ef(),W.x,W.z,Math.atan2(-W.x,-W.z),1,1.7)}M.stamp(af()),M.stamp(lf(js)),M.stamp(rf(js)),M.stamp(sf());let S=M.build();r.add(S),Wu(S);let E=new xn;r.add(E),of(E);let P=()=>new Se({transparent:!0,depthWrite:!1,fog:!1,blending:an,uniforms:{map:{value:xi(64)},time:{value:0},scale:{value:800}},vertexShader:`attribute vec3 tint; attribute float size; attribute float phase; attribute float mode; uniform float time; uniform float scale; varying vec3 vC;
      void main(){ vec3 p = position; float k = 1.0;
        if (mode > 2.5) { p.x += sin(time * 0.11 + phase * 6.0) * 2.4; p.z += cos(time * 0.09 + phase * 4.0) * 2.4; k = 0.72 + 0.28 * sin(time * 7.0 + phase * 30.0); }
        else if (mode > 1.5) { k = step(0.5, fract(time * 0.7 + phase)); }
        else if (mode > 0.5) { k = 0.72 + 0.28 * sin(time * 9.0 + phase * 40.0) * sin(time * 5.3 + phase * 17.0); }
        vC = tint * k; vec4 mv = modelViewMatrix * vec4(p, 1.0); gl_PointSize = min(size * scale / -mv.z, 96.0); gl_Position = projectionMatrix * mv; }`,fragmentShader:"uniform sampler2D map; varying vec3 vC; void main(){ float a = texture2D(map, gl_PointCoord).a; gl_FragColor = vec4(vC * a, a); }"}),D=W=>{let Q=W.length,Z=new Ce,Ut=new Float32Array(Q*3),zt=new Float32Array(Q*3),Vt=new Float32Array(Q),ae=new Float32Array(Q),Pe=new Float32Array(Q);W.forEach((Qt,me)=>{Ut.set([Qt.x,Qt.y,Qt.z],me*3),zt.set([Qt.colour.r,Qt.colour.g,Qt.colour.b],me*3),Vt[me]=Qt.size,ae[me]=a(),Pe[me]=Qt.flicker||0}),Z.setAttribute("position",new Le(Ut,3)),Z.setAttribute("tint",new Le(zt,3)),Z.setAttribute("size",new Le(Vt,1)),Z.setAttribute("phase",new Le(ae,1)),Z.setAttribute("mode",new Le(Pe,1));let pe=new Lr(Z,P());return pe.frustumCulled=!1,r.add(pe),pe},H=D(zc),O=new vt(1,.95,.85),X=new vt(1,.16,.1),z=[];for(let W=0;W<26;W++)z.push({a:a()*360,v:(W%2?1:-1)*(5+a()*5),d:W%2?gt+19.4:gt+24});let tt=D(z.flatMap(()=>[{x:0,y:2.3,z:0,colour:O,size:3.2},{x:0,y:2.3,z:0,colour:X,size:2.4}])),k=document.createElement("canvas");k.width=4,k.height=128;{let W=k.getContext("2d"),Q=W.createLinearGradient(0,128,0,0);Q.addColorStop(0,"rgba(255,255,255,1)"),Q.addColorStop(.3,"rgba(255,255,255,.4)"),Q.addColorStop(.7,"rgba(255,255,255,.08)"),Q.addColorStop(1,"rgba(255,255,255,0)"),W.fillStyle=Q,W.fillRect(0,0,4,128)}let lt=new Qn(k),dt=(W,Q,Z,Ut,zt=16761466,Vt=.07)=>{let ae=new Wt(new ke(Ut,1.2,Z,20,1,!0),new Re({map:lt,color:zt,transparent:!0,opacity:Vt,depthWrite:!1,blending:an,side:Xe,fog:!1}));return ae.position.set(W,Z/2+1,Q),r.add(ae),ae},Rt=-(gt+70);for(let[W,Q,Z,Ut]of[[-19.5,Rt+6,74,9],[12.5,Rt+8,62,12],[-46,Rt+8,44,8],[58,Rt+8,40,8]])dt(W,Q,Z,Ut);{let W=de(134,gt+50),Q=de(48,gt+62),Z=de(-14,gt+44),Ut=de(-38,gt+52);dt(W.x,W.z,60,9),dt(Q.x,Q.z,58,12),dt(Z.x,Z.z,50,6),dt(Ut.x,Ut.z,40,10,10470655,.06)}let te=xi(256,0,1.6),ge=[];for(let W=0;W<10;W++){let Q=new Zn(new Vn({map:te,color:3360890,transparent:!0,opacity:.11,depthWrite:!1,blending:an})),Z=de(10+W*17+a()*10,gt-14-a()*22,5);Q.position.copy(Z),Q.scale.set(190+a()*110,26+a()*10,1),Q.userData.a=a()*6.28,ge.push(Q),r.add(Q)}t.forEach((W,Q)=>{let Z=js[Q],Ut=Math.sin(Z*nn)<-.3,zt=de(Ut?Z+11:Z,gt+9,Ut?7.6:10.2),Vt=Ku([{text:String(Q+1).padStart(2,"0")+"   "+W.group.toUpperCase(),y:84,size:44,colour:"#f2c66a",font:'"Geist Mono", ui-monospace, monospace',weight:500},{text:W.name,y:206,size:132,colour:"#fff6e2"}]),ae=new Wt(new Mn(19.2,6),new Re({map:Vt,color:new vt(1.5,1.5,1.5)}));ae.position.copy(zt),r.add(ae);for(let Pe of[-8.6,8.6]){let pe=new Wt(new ke(.2,.2,zt.y-1.4),new Re({color:1711402}));pe.position.set(zt.x+Pe,(zt.y+1.4)/2-1.4,zt.z-.1),r.add(pe)}for(let Pe of[-7,0,7]){let pe=new Wt(new We(1.2,.2,.5),new Re({color:new vt(2,1.6,.9)}));pe.position.set(zt.x+Pe,zt.y+3.4,zt.z+.9),r.add(pe)}});let Ie=cf(r),ce=hf();r.add(ce);let q=[];for(let W=0;W<30;W++){let Q=new Wt(new Ji(.82,1,28).rotateX(-Math.PI/2),new Re({color:10336767,transparent:!0,opacity:0,depthWrite:!1,blending:an}));Q.position.y=.07,Q.userData.age=9,q.push(Q),r.add(Q)}let Y=new Wt(new Mn(1,1),new Re({map:xi(64,0,.6),color:14674175,transparent:!0,opacity:0,depthWrite:!1,blending:an,fog:!1,side:Xe}));Y.scale.set(260,5,1),r.add(Y);let St=9+a()*6,Pt=-1,yt=new rl(n);yt.addPass(new sl(r,s));let oe=new Jr(new nt(256,256),.34,.55,1);yt.addPass(oe),yt.addPass(new ol);let qe=de(js[9],gt-27),I=new nt(qe.x,qe.z),ie=new nt,Ft=new Set,Dt=Math.PI,xt=null,re=9,bt=0,Kt=3.5,Ne=-99,Zt=0,C=0,_=!0,B=W=>{let Q=de(js[W],gt-27);return new nt(Q.x,Q.z)},j=W=>{xt={i:W,p:B(W)},re=-1};function et(W){let Q=0,Z=0;if((Ft.has("ArrowUp")||Ft.has("w"))&&(Z-=1),(Ft.has("ArrowDown")||Ft.has("s"))&&(Z+=1),(Ft.has("ArrowLeft")||Ft.has("a"))&&(Q-=1),(Ft.has("ArrowRight")||Ft.has("d"))&&(Q+=1),Q||Z)xt=null,Ne=Zt,re>=0&&(re=-1,e.leave&&e.leave());else if(xt){let Qt=xt.p.clone().sub(I),me=Qt.length();if(me<2.2&&ie.length()<2.5)xt.i!==void 0&&(re=xt.i,Kt=6.5,e.arrive&&e.arrive(re)),xt=null;else{let Je=Qt.clone().normalize(),Ni=-I.dot(Je);if(Ni>0&&Ni<me){let ar=I.clone().addScaledVector(Je,Ni);if(ar.length()<62){let pl=ar.lengthSq()>1?ar.clone().normalize():new nt(-Je.y,Je.x);Je.addScaledVector(pl,1.5*(1-ar.length()/62)+.35).normalize()}}let qs=Math.min(1,me/26);Q=Je.x*qs,Z=Je.y*qs}}else o.matches||(Kt-=W,Kt<=0&&Zt-Ne>9&&(bt=re>=0?(Kc.indexOf(re)+1)%Kc.length:bt,re>=0&&e.leave&&e.leave(),j(Kc[bt])));let Ut=Math.hypot(Q,Z)||1;Ut>1&&(Q/=Ut,Z/=Ut),ie.x+=(Q*30-ie.x*1.5)*W,ie.y+=(Z*30-ie.y*1.5)*W,I.addScaledVector(ie,W);let zt=I.length();if(zt>gt-12){I.multiplyScalar((gt-12)/zt);let Qt=I.clone().normalize();ie.addScaledVector(Qt,-Math.max(0,ie.dot(Qt)))}let Vt=I.x/44,ae=I.y/26,Pe=Math.hypot(Vt,ae);if(Pe<1){let Qt=new nt(Vt/44,ae/26).normalize();I.set(I.x/Math.max(Pe,.01),I.y/Math.max(Pe,.01)),ie.addScaledVector(Qt,-Math.min(0,ie.dot(Qt)))}let pe=ie.length();if(pe>.6){let me=Math.atan2(ie.x,ie.y)-Dt;me=Math.atan2(Math.sin(me),Math.cos(me)),Dt+=me*Math.min(1,W*3.2)}ce.position.set(I.x,Math.sin(Zt*1.7)*.06-.12,I.y),ce.rotation.set(Math.sin(Zt*1.3)*.02-Math.min(.06,pe*.003),Dt,Math.sin(Zt*1.1)*.03),ce.userData.flag.rotation.y=Math.sin(Zt*6)*.3;for(let Qt of ce.userData.lights)Qt.material.opacity=.82+Math.sin(Zt*11+Qt.position.z)*.08;if(C-=W,pe>2&&C<=0){C=.16;let Qt=q.reduce((me,Je)=>me.userData.age>Je.userData.age?me:Je);Qt.userData.age=0,Qt.position.set(I.x-Math.sin(Dt)*7,.07,I.y-Math.cos(Dt)*7),Qt.userData.s=Math.min(1,pe/16)}for(let Qt of q){Qt.userData.age+=W;let me=Qt.userData.age,Je=Math.min(1,me/3.2);Qt.scale.setScalar(1.6+Je*11),Qt.material.opacity=me<3.2?(1-Je)*.3*(Qt.userData.s||0):0}}let K=new F;function At(W){v.material.uniforms.time.value=Zt*.42,f.material.uniforms.time.value=Zt,H.material.uniforms.time.value=Zt,p.offset.x=Zt*.0016;for(let Z of Hc)Z.uniforms.glow.value=Z.userData.glow*(.94+Math.sin(Zt*.7+Z.id)*.08);for(let Z of ge)Z.position.x+=Math.sin(Zt*.05+Z.userData.a)*W*1.2;let Q=tt.geometry.attributes.position;z.forEach((Z,Ut)=>{Z.a+=Z.v/Z.d/nn*W;let zt=Z.v>0?.55:-.55,Vt=de(Z.a+zt,Z.d),ae=de(Z.a-zt,Z.d);Q.setXYZ(Ut*2,Vt.x,2.3,Vt.z),Q.setXYZ(Ut*2+1,ae.x,2.3,ae.z)}),Q.needsUpdate=!0;for(let Z of Ie){let Ut=Zt*Z.speed+Z.phase;Z.g.position.set(Z.cx+Math.cos(Ut)*Z.rx,Math.sin(Zt*1.5+Z.phase)*.05,Z.cz+Math.sin(Ut)*Z.rz),Z.g.rotation.y=Math.atan2(-Math.sin(Ut)*Z.rx*Math.sign(Z.speed),Math.cos(Ut)*Z.rz*Math.sign(Z.speed))}if(St-=W,St<=0&&Pt<0&&(Pt=0,St=14+a()*16,Y.userData={x:(a()-.5)*2400,y:1500+a()*500,vx:(a()<.5?-1:1)*(700+a()*500)},Y.rotation.z=Y.userData.vx>0?-.32:.32),Pt>=0){Pt+=W;let Z=Y.userData;Y.position.set(Z.x+Z.vx*Pt,Z.y-380*Pt,-3e3),Y.material.opacity=Math.max(0,Math.sin(Math.min(1,Pt/.9)*Math.PI))*.9,Pt>.9&&(Pt=-1)}}let rt=new F,Tt=new F(0,-.035,-1).normalize(),It=200,ot=36,pt=0,Ot=1.6,Et=0,ft=0;function jt(){let W=i.clientWidth,Q=i.clientHeight,Z=Q>W;s.aspect=W/Q,s.fov=Z?58:W/Q<1.5?44:38,It=Z?240:200,ot=Z?24:36,s.updateProjectionMatrix();let Ut=Math.min(devicePixelRatio||1,Z?Ot+.4:Ot);n.setPixelRatio(Ut),n.setSize(W,Q,!1),yt.setPixelRatio(Ut),yt.setSize(W,Q),f.material.uniforms.dpr.value=Ut;let zt=Q*Ut/(2*Math.tan(s.fov*nn/2));H.material.uniforms.scale.value=zt,tt.material.uniforms.scale.value=zt}function U(W,Q){let Z=i.clientHeight>i.clientWidth,Ut=I.x*(Z?.55:.86)+pt,zt=Math.max(I.y+It,Z?150:105),Vt=Q?1:1-Math.exp(-W*1.7);rt.x+=(Ut-rt.x)*Vt,rt.z+=(zt-rt.z)*Vt,rt.y=ot+Math.sin(Zt*.31)*.5,s.position.copy(rt),s.lookAt(rt.x+Tt.x*100,rt.y+Tt.y*100,rt.z+Tt.z*100)}let st=performance.now(),ct=0;function Mt(W){ct=requestAnimationFrame(Mt);let Q=Math.min(.05,(W-st)/1e3);st=W,Zt+=Q,et(Q),U(Q),At(Q),yt.render(),Zt>4&&(Et=Q>.034?Et+Q:Math.max(0,Et-Q*.5),Et>2.5&&ft<3&&(ft++,Et=0,Ot=[1.6,1.25,1,1][ft],ft===3&&(oe.enabled=!1),jt()))}let it=()=>{cancelAnimationFrame(ct),st=performance.now(),_&&!document.hidden&&(o.matches?(et(.016),U(0,!0),At(0),yt.render()):ct=requestAnimationFrame(Mt))};addEventListener("resize",()=>{jt(),o.matches&&it()}),document.addEventListener("visibilitychange",it),o.addEventListener("change",it),addEventListener("keydown",W=>{let Q=W.key.length===1?W.key.toLowerCase():W.key;["ArrowUp","ArrowDown","ArrowLeft","ArrowRight","w","a","s","d"].includes(Q)&&!W.metaKey&&!W.ctrlKey&&!/^(INPUT|TEXTAREA|SELECT)$/.test(document.activeElement.tagName)&&(Ft.add(Q),Q.startsWith("Arrow")&&W.preventDefault())}),addEventListener("keyup",W=>Ft.delete(W.key.length===1?W.key.toLowerCase():W.key)),addEventListener("blur",()=>Ft.clear());let J=new Os,wt=new nt,qt=new gn(new F(0,1,0),0),xe=new F;i.addEventListener("pointerdown",W=>{let Q=i.getBoundingClientRect();if(wt.set((W.clientX-Q.left)/Q.width*2-1,-((W.clientY-Q.top)/Q.height)*2+1),J.setFromCamera(wt,s),J.ray.intersectPlane(qt,xe)&&Math.hypot(xe.x,xe.z)<gt+30){let Z=new nt(xe.x,xe.z),Ut=Z.length();Ut>gt-14&&Z.multiplyScalar((gt-14)/Ut),Math.hypot(Z.x/48,Z.y/30)<1&&Z.multiplyScalar(1/Math.max(.05,Math.hypot(Z.x/48,Z.y/30)));let zt=-1,Vt=22;t.forEach((ae,Pe)=>{let pe=B(Pe).distanceTo(Z);pe<Vt&&(Vt=pe,zt=Pe)}),Ne=Zt,re>=0&&e.leave&&e.leave(),zt>=0?j(zt):(xt={p:Z},re=-1)}}),addEventListener("pointermove",W=>{pt=(W.clientX/innerWidth-.5)*10});let ve=W=>{Zt+=W,et(W),U(W),At(W),yt.render()},Pn={step(W){_=!1,cancelAnimationFrame(ct),ve(W)},skip(W){for(let Q=0;Q<W;Q+=1/30)Zt+=1/30,et(1/30),U(1/30);At(1/30),yt.render()},sail(W){Ne=Zt,re!==W&&(re>=0&&e.leave&&e.leave(),o.matches?(Pn.jump(W),e.arrive&&e.arrive(W),At(0),yt.render()):j(W))},stop(){_=!1,it()},resume(){_=!0,it()},where:()=>({x:I.x,z:I.y,docked:re}),jump(W){let Q=B(W);I.copy(Q),ie.set(0,0),xt=null,re=W,Kt=1e9,U(0,!0)},renderer:n,scene:r,camera:s};return jt(),U(0,!0),it(),Pn}window.Scene3D={start:rx};})();
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2025 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
