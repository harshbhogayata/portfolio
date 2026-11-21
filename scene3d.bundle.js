(()=>{var _h=0,tc=1,bh=2;var ec=1,Eh=2,Qn=3,En=0,sn=1,Xe=2,Vn=0,Gi=1,on=2,nc=3,ic=4,wh=5,Ai=100,Ah=101,Th=102,Rh=103,Ch=104,Ih=200,Ph=201,Fh=202,Uh=203,wo=204,Ao=205,Dh=206,Lh=207,Nh=208,Bh=209,Oh=210,Hh=211,zh=212,kh=213,Gh=214,na=0,ia=1,ra=2,Vi=3,sa=4,oa=5,aa=6,la=7,rc=0,Vh=1,Wh=2,mi=0,ca=1,ha=2,ua=3,zr=4,fa=5,da=6,pa=7;var sc=300,Yi=301,Zi=302,ma=303,ga=304,zs=306,ui=1e3,wi=1001,To=1002,xn=1003,Xh=1004;var ks=1005;var kn=1006,xa=1007;var Pi=1008;var $n=1009,oc=1010,ac=1011,kr=1012,va=1013,Fi=1014,ti=1015,Ln=1016,ya=1017,Ma=1018,Gr=1020,lc=35902,cc=35899,hc=1021,uc=1022,Nn=1023,Tr=1026,Vr=1027,fc=1028,Sa=1029,dc=1030,_a=1031;var ba=1033,Gs=33776,Vs=33777,Ws=33778,Xs=33779,Ea=35840,wa=35841,Aa=35842,Ta=35843,Ra=36196,Ca=37492,Ia=37496,Pa=37808,Fa=37809,Ua=37810,Da=37811,La=37812,Na=37813,Ba=37814,Oa=37815,Ha=37816,za=37817,ka=37818,Ga=37819,Va=37820,Wa=37821,Xa=36492,Ka=36494,ja=36495,qa=36283,Ja=36284,Ya=36285,Za=36286;var fs=2300,Ro=2301,Eo=2302,Wl=2400,Xl=2401,Kl=2402;var Kh=3200,jh=3201;var qh=0,Jh=1,Wn="",Ze="srgb",Wi="srgb-linear",ds="linear",ye="srgb";var ki=7680;var jl=519,Yh=512,Zh=513,Qh=514,pc=515,$h=516,tu=517,eu=518,nu=519,Co=35044;var mc="300 es",zn=2e3,ps=2001;var fi=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){let n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){let n=this._listeners;if(n===void 0)return;let r=n[t];if(r!==void 0){let s=r.indexOf(e);s!==-1&&r.splice(s,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let n=e[t.type];if(n!==void 0){t.target=this;let r=n.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,t);t.target=null}}},ln=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var xl=Math.PI/180,Io=180/Math.PI;function ci(){let i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(ln[i&255]+ln[i>>8&255]+ln[i>>16&255]+ln[i>>24&255]+"-"+ln[t&255]+ln[t>>8&255]+"-"+ln[t>>16&15|64]+ln[t>>24&255]+"-"+ln[e&63|128]+ln[e>>8&255]+"-"+ln[e>>16&255]+ln[e>>24&255]+ln[n&255]+ln[n>>8&255]+ln[n>>16&255]+ln[n>>24&255]).toLowerCase()}function re(i,t,e){return Math.max(t,Math.min(e,i))}function pf(i,t){return(i%t+t)%t}function vl(i,t,e){return(1-e)*i+e*t}function qn(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Ae(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}var nt=class i{constructor(t=0,e=0){i.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6],this.y=r[1]*e+r[4]*n+r[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=re(this.x,t.x,e.x),this.y=re(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=re(this.x,t,e),this.y=re(this.y,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(re(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(re(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),r=Math.sin(e),s=this.x-t.x,o=this.y-t.y;return this.x=s*n-o*r+t.x,this.y=s*r+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Dn=class{constructor(t=0,e=0,n=0,r=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=r}static slerpFlat(t,e,n,r,s,o,a){let l=n[r+0],c=n[r+1],h=n[r+2],u=n[r+3],f=s[o+0],d=s[o+1],x=s[o+2],M=s[o+3];if(a===0){t[e+0]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u;return}if(a===1){t[e+0]=f,t[e+1]=d,t[e+2]=x,t[e+3]=M;return}if(u!==M||l!==f||c!==d||h!==x){let m=1-a,p=l*f+c*d+h*x+u*M,T=p>=0?1:-1,A=1-p*p;if(A>Number.EPSILON){let y=Math.sqrt(A),v=Math.atan2(y,p*T);m=Math.sin(m*v)/y,a=Math.sin(a*v)/y}let g=a*T;if(l=l*m+f*g,c=c*m+d*g,h=h*m+x*g,u=u*m+M*g,m===1-a){let y=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=y,c*=y,h*=y,u*=y}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,r,s,o){let a=n[r],l=n[r+1],c=n[r+2],h=n[r+3],u=s[o],f=s[o+1],d=s[o+2],x=s[o+3];return t[e]=a*x+h*u+l*d-c*f,t[e+1]=l*x+h*f+c*u-a*d,t[e+2]=c*x+h*d+a*f-l*u,t[e+3]=h*x-a*u-l*f-c*d,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,r){return this._x=t,this._y=e,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,r=t._y,s=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(r/2),u=a(s/2),f=l(n/2),d=l(r/2),x=l(s/2);switch(o){case"XYZ":this._x=f*h*u+c*d*x,this._y=c*d*u-f*h*x,this._z=c*h*x+f*d*u,this._w=c*h*u-f*d*x;break;case"YXZ":this._x=f*h*u+c*d*x,this._y=c*d*u-f*h*x,this._z=c*h*x-f*d*u,this._w=c*h*u+f*d*x;break;case"ZXY":this._x=f*h*u-c*d*x,this._y=c*d*u+f*h*x,this._z=c*h*x+f*d*u,this._w=c*h*u-f*d*x;break;case"ZYX":this._x=f*h*u-c*d*x,this._y=c*d*u+f*h*x,this._z=c*h*x-f*d*u,this._w=c*h*u+f*d*x;break;case"YZX":this._x=f*h*u+c*d*x,this._y=c*d*u+f*h*x,this._z=c*h*x-f*d*u,this._w=c*h*u-f*d*x;break;case"XZY":this._x=f*h*u-c*d*x,this._y=c*d*u-f*h*x,this._z=c*h*x+f*d*u,this._w=c*h*u+f*d*x;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,r=Math.sin(n);return this._x=t.x*r,this._y=t.y*r,this._z=t.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],r=e[4],s=e[8],o=e[1],a=e[5],l=e[9],c=e[2],h=e[6],u=e[10],f=n+a+u;if(f>0){let d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(h-l)*d,this._y=(s-c)*d,this._z=(o-r)*d}else if(n>a&&n>u){let d=2*Math.sqrt(1+n-a-u);this._w=(h-l)/d,this._x=.25*d,this._y=(r+o)/d,this._z=(s+c)/d}else if(a>u){let d=2*Math.sqrt(1+a-n-u);this._w=(s-c)/d,this._x=(r+o)/d,this._y=.25*d,this._z=(l+h)/d}else{let d=2*Math.sqrt(1+u-n-a);this._w=(o-r)/d,this._x=(s+c)/d,this._y=(l+h)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(re(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let r=Math.min(1,e/n);return this.slerp(t,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,r=t._y,s=t._z,o=t._w,a=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+o*a+r*c-s*l,this._y=r*h+o*l+s*a-n*c,this._z=s*h+o*c+n*l-r*a,this._w=o*h-n*a-r*l-s*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);let n=this._x,r=this._y,s=this._z,o=this._w,a=o*t._w+n*t._x+r*t._y+s*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=r,this._z=s,this;let l=1-a*a;if(l<=Number.EPSILON){let d=1-e;return this._w=d*o+e*this._w,this._x=d*n+e*this._x,this._y=d*r+e*this._y,this._z=d*s+e*this._z,this.normalize(),this}let c=Math.sqrt(l),h=Math.atan2(c,a),u=Math.sin((1-e)*h)/c,f=Math.sin(e*h)/c;return this._w=o*u+this._w*f,this._x=n*u+this._x*f,this._y=r*u+this._y*f,this._z=s*u+this._z*f,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(r*Math.sin(t),r*Math.cos(t),s*Math.sin(e),s*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},P=class i{constructor(t=0,e=0,n=0){i.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(qc.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(qc.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,r=this.z,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6]*r,this.y=s[1]*e+s[4]*n+s[7]*r,this.z=s[2]*e+s[5]*n+s[8]*r,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,r=this.z,s=t.elements,o=1/(s[3]*e+s[7]*n+s[11]*r+s[15]);return this.x=(s[0]*e+s[4]*n+s[8]*r+s[12])*o,this.y=(s[1]*e+s[5]*n+s[9]*r+s[13])*o,this.z=(s[2]*e+s[6]*n+s[10]*r+s[14])*o,this}applyQuaternion(t){let e=this.x,n=this.y,r=this.z,s=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*r-a*n),h=2*(a*e-s*r),u=2*(s*n-o*e);return this.x=e+l*c+o*u-a*h,this.y=n+l*h+a*c-s*u,this.z=r+l*u+s*h-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,r=this.z,s=t.elements;return this.x=s[0]*e+s[4]*n+s[8]*r,this.y=s[1]*e+s[5]*n+s[9]*r,this.z=s[2]*e+s[6]*n+s[10]*r,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=re(this.x,t.x,e.x),this.y=re(this.y,t.y,e.y),this.z=re(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=re(this.x,t,e),this.y=re(this.y,t,e),this.z=re(this.z,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(re(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,r=t.y,s=t.z,o=e.x,a=e.y,l=e.z;return this.x=r*l-s*a,this.y=s*o-n*l,this.z=n*a-r*o,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return yl.copy(this).projectOnVector(t),this.sub(yl)}reflect(t){return this.sub(yl.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(re(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,r=this.z-t.z;return e*e+n*n+r*r}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let r=Math.sin(e)*t;return this.x=r*Math.sin(n),this.y=Math.cos(e)*t,this.z=r*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),r=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=r,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},yl=new P,qc=new Dn,Qt=class i{constructor(t,e,n,r,s,o,a,l,c){i.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,r,s,o,a,l,c)}set(t,e,n,r,s,o,a,l,c){let h=this.elements;return h[0]=t,h[1]=r,h[2]=a,h[3]=e,h[4]=s,h[5]=l,h[6]=n,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,r=e.elements,s=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],h=n[4],u=n[7],f=n[2],d=n[5],x=n[8],M=r[0],m=r[3],p=r[6],T=r[1],A=r[4],g=r[7],y=r[2],v=r[5],E=r[8];return s[0]=o*M+a*T+l*y,s[3]=o*m+a*A+l*v,s[6]=o*p+a*g+l*E,s[1]=c*M+h*T+u*y,s[4]=c*m+h*A+u*v,s[7]=c*p+h*g+u*E,s[2]=f*M+d*T+x*y,s[5]=f*m+d*A+x*v,s[8]=f*p+d*g+x*E,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],r=t[2],s=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8];return e*o*h-e*a*c-n*s*h+n*a*l+r*s*c-r*o*l}invert(){let t=this.elements,e=t[0],n=t[1],r=t[2],s=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],u=h*o-a*c,f=a*l-h*s,d=c*s-o*l,x=e*u+n*f+r*d;if(x===0)return this.set(0,0,0,0,0,0,0,0,0);let M=1/x;return t[0]=u*M,t[1]=(r*c-h*n)*M,t[2]=(a*n-r*o)*M,t[3]=f*M,t[4]=(h*e-r*l)*M,t[5]=(r*s-a*e)*M,t[6]=d*M,t[7]=(n*l-c*e)*M,t[8]=(o*e-n*s)*M,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,r,s,o,a){let l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*o+c*a)+o+t,-r*c,r*l,-r*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(Ml.makeScale(t,e)),this}rotate(t){return this.premultiply(Ml.makeRotation(-t)),this}translate(t,e){return this.premultiply(Ml.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let r=0;r<9;r++)if(e[r]!==n[r])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}},Ml=new Qt;function gc(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function ms(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function iu(){let i=ms("canvas");return i.style.display="block",i}var Jc={};function Rr(i){i in Jc||(Jc[i]=!0,console.warn(i))}function ru(i,t,e){return new Promise(function(n,r){function s(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:r();break;case i.TIMEOUT_EXPIRED:setTimeout(s,e);break;default:n()}}setTimeout(s,e)})}var Yc=new Qt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Zc=new Qt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function mf(){let i={enabled:!0,workingColorSpace:Wi,spaces:{},convert:function(r,s,o){return this.enabled===!1||s===o||!s||!o||(this.spaces[s].transfer===ye&&(r.r=hi(r.r),r.g=hi(r.g),r.b=hi(r.b)),this.spaces[s].primaries!==this.spaces[o].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===ye&&(r.r=wr(r.r),r.g=wr(r.g),r.b=wr(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===Wn?ds:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,o){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return Rr("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return Rr("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(r,s)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Wi]:{primaries:t,whitePoint:n,transfer:ds,toXYZ:Yc,fromXYZ:Zc,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:Ze},outputColorSpaceConfig:{drawingBufferColorSpace:Ze}},[Ze]:{primaries:t,whitePoint:n,transfer:ye,toXYZ:Yc,fromXYZ:Zc,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:Ze}}}),i}var ue=mf();function hi(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function wr(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var cr,Po=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{cr===void 0&&(cr=ms("canvas")),cr.width=t.width,cr.height=t.height;let r=cr.getContext("2d");t instanceof ImageData?r.putImageData(t,0,0):r.drawImage(t,0,0,t.width,t.height),n=cr}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=ms("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let r=n.getImageData(0,0,t.width,t.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=hi(s[o]/255)*255;return n.putImageData(r,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(hi(e[n]/255)*255):e[n]=hi(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},gf=0,Cr=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:gf++}),this.uuid=ci(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):e instanceof VideoFrame?t.set(e.displayHeight,e.displayWidth,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(Sl(r[o].image)):s.push(Sl(r[o]))}else s=Sl(r);n.url=s}return e||(t.images[this.uuid]=n),n}};function Sl(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Po.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var xf=0,_l=new P,rn=class i extends fi{constructor(t=i.DEFAULT_IMAGE,e=i.DEFAULT_MAPPING,n=wi,r=wi,s=kn,o=Pi,a=Nn,l=$n,c=i.DEFAULT_ANISOTROPY,h=Wn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:xf++}),this.uuid=ci(),this.name="",this.source=new Cr(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new nt(0,0),this.repeat=new nt(1,1),this.center=new nt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Qt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(_l).x}get height(){return this.source.getSize(_l).y}get depth(){return this.source.getSize(_l).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let n=t[e];if(n===void 0){console.warn(`THREE.Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let r=this[e];if(r===void 0){console.warn(`THREE.Texture.setValues(): property '${e}' does not exist.`);continue}r&&n&&r.isVector2&&n.isVector2||r&&n&&r.isVector3&&n.isVector3||r&&n&&r.isMatrix3&&n.isMatrix3?r.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==sc)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case ui:t.x=t.x-Math.floor(t.x);break;case wi:t.x=t.x<0?0:1;break;case To:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case ui:t.y=t.y-Math.floor(t.y);break;case wi:t.y=t.y<0?0:1;break;case To:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};rn.DEFAULT_IMAGE=null;rn.DEFAULT_MAPPING=sc;rn.DEFAULT_ANISOTROPY=1;var Le=class i{constructor(t=0,e=0,n=0,r=1){i.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=r}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,r){return this.x=t,this.y=e,this.z=n,this.w=r,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,r=this.z,s=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*r+o[12]*s,this.y=o[1]*e+o[5]*n+o[9]*r+o[13]*s,this.z=o[2]*e+o[6]*n+o[10]*r+o[14]*s,this.w=o[3]*e+o[7]*n+o[11]*r+o[15]*s,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,r,s,l=t.elements,c=l[0],h=l[4],u=l[8],f=l[1],d=l[5],x=l[9],M=l[2],m=l[6],p=l[10];if(Math.abs(h-f)<.01&&Math.abs(u-M)<.01&&Math.abs(x-m)<.01){if(Math.abs(h+f)<.1&&Math.abs(u+M)<.1&&Math.abs(x+m)<.1&&Math.abs(c+d+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let A=(c+1)/2,g=(d+1)/2,y=(p+1)/2,v=(h+f)/4,E=(u+M)/4,R=(x+m)/4;return A>g&&A>y?A<.01?(n=0,r=.707106781,s=.707106781):(n=Math.sqrt(A),r=v/n,s=E/n):g>y?g<.01?(n=.707106781,r=0,s=.707106781):(r=Math.sqrt(g),n=v/r,s=R/r):y<.01?(n=.707106781,r=.707106781,s=0):(s=Math.sqrt(y),n=E/s,r=R/s),this.set(n,r,s,e),this}let T=Math.sqrt((m-x)*(m-x)+(u-M)*(u-M)+(f-h)*(f-h));return Math.abs(T)<.001&&(T=1),this.x=(m-x)/T,this.y=(u-M)/T,this.z=(f-h)/T,this.w=Math.acos((c+d+p-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=re(this.x,t.x,e.x),this.y=re(this.y,t.y,e.y),this.z=re(this.z,t.z,e.z),this.w=re(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=re(this.x,t,e),this.y=re(this.y,t,e),this.z=re(this.z,t,e),this.w=re(this.w,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(re(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Fo=class extends fi{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:kn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new Le(0,0,t,e),this.scissorTest=!1,this.viewport=new Le(0,0,t,e);let r={width:t,height:e,depth:n.depth},s=new rn(r);this.textures=[];let o=n.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(t={}){let e={minFilter:kn,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=t,this.textures[r].image.height=e,this.textures[r].image.depth=n,this.textures[r].isArrayTexture=this.textures[r].image.depth>1;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let r=Object.assign({},t.textures[e].image);this.textures[e].source=new Cr(r)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},$e=class extends Fo{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},gs=class extends rn{constructor(t=null,e=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:r},this.magFilter=xn,this.minFilter=xn,this.wrapR=wi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var Uo=class extends rn{constructor(t=null,e=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:r},this.magFilter=xn,this.minFilter=xn,this.wrapR=wi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Ti=class{constructor(t=new P(1/0,1/0,1/0),e=new P(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Bn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Bn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=Bn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let s=n.getAttribute("position");if(e===!0&&s!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,Bn):Bn.fromBufferAttribute(s,o),Bn.applyMatrix4(t.matrixWorld),this.expandByPoint(Bn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Zs.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Zs.copy(n.boundingBox)),Zs.applyMatrix4(t.matrixWorld),this.union(Zs)}let r=t.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Bn),Bn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(ns),Qs.subVectors(this.max,ns),hr.subVectors(t.a,ns),ur.subVectors(t.b,ns),fr.subVectors(t.c,ns),yi.subVectors(ur,hr),Mi.subVectors(fr,ur),Bi.subVectors(hr,fr);let e=[0,-yi.z,yi.y,0,-Mi.z,Mi.y,0,-Bi.z,Bi.y,yi.z,0,-yi.x,Mi.z,0,-Mi.x,Bi.z,0,-Bi.x,-yi.y,yi.x,0,-Mi.y,Mi.x,0,-Bi.y,Bi.x,0];return!bl(e,hr,ur,fr,Qs)||(e=[1,0,0,0,1,0,0,0,1],!bl(e,hr,ur,fr,Qs))?!1:($s.crossVectors(yi,Mi),e=[$s.x,$s.y,$s.z],bl(e,hr,ur,fr,Qs))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Bn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Bn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(ii[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),ii[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),ii[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),ii[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),ii[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),ii[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),ii[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),ii[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(ii),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},ii=[new P,new P,new P,new P,new P,new P,new P,new P],Bn=new P,Zs=new Ti,hr=new P,ur=new P,fr=new P,yi=new P,Mi=new P,Bi=new P,ns=new P,Qs=new P,$s=new P,Oi=new P;function bl(i,t,e,n,r){for(let s=0,o=i.length-3;s<=o;s+=3){Oi.fromArray(i,s);let a=r.x*Math.abs(Oi.x)+r.y*Math.abs(Oi.y)+r.z*Math.abs(Oi.z),l=t.dot(Oi),c=e.dot(Oi),h=n.dot(Oi);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}var vf=new Ti,is=new P,El=new P,Xi=class{constructor(t=new P,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):vf.setFromPoints(t).getCenter(n);let r=0;for(let s=0,o=t.length;s<o;s++)r=Math.max(r,n.distanceToSquared(t[s]));return this.radius=Math.sqrt(r),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;is.subVectors(t,this.center);let e=is.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),r=(n-this.radius)*.5;this.center.addScaledVector(is,r/n),this.radius+=r}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(El.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(is.copy(t.center).add(El)),this.expandByPoint(is.copy(t.center).sub(El))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},ri=new P,wl=new P,to=new P,Si=new P,Al=new P,eo=new P,Tl=new P,Ir=class{constructor(t=new P,e=new P(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,ri)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=ri.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(ri.copy(this.origin).addScaledVector(this.direction,e),ri.distanceToSquared(t))}distanceSqToSegment(t,e,n,r){wl.copy(t).add(e).multiplyScalar(.5),to.copy(e).sub(t).normalize(),Si.copy(this.origin).sub(wl);let s=t.distanceTo(e)*.5,o=-this.direction.dot(to),a=Si.dot(this.direction),l=-Si.dot(to),c=Si.lengthSq(),h=Math.abs(1-o*o),u,f,d,x;if(h>0)if(u=o*l-a,f=o*a-l,x=s*h,u>=0)if(f>=-x)if(f<=x){let M=1/h;u*=M,f*=M,d=u*(u+o*f+2*a)+f*(o*u+f+2*l)+c}else f=s,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*l)+c;else f=-s,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*l)+c;else f<=-x?(u=Math.max(0,-(-o*s+a)),f=u>0?-s:Math.min(Math.max(-s,-l),s),d=-u*u+f*(f+2*l)+c):f<=x?(u=0,f=Math.min(Math.max(-s,-l),s),d=f*(f+2*l)+c):(u=Math.max(0,-(o*s+a)),f=u>0?s:Math.min(Math.max(-s,-l),s),d=-u*u+f*(f+2*l)+c);else f=o>0?-s:s,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),r&&r.copy(wl).addScaledVector(to,f),d}intersectSphere(t,e){ri.subVectors(t.center,this.origin);let n=ri.dot(this.direction),r=ri.dot(ri)-n*n,s=t.radius*t.radius;if(r>s)return null;let o=Math.sqrt(s-r),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,r,s,o,a,l,c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,f=this.origin;return c>=0?(n=(t.min.x-f.x)*c,r=(t.max.x-f.x)*c):(n=(t.max.x-f.x)*c,r=(t.min.x-f.x)*c),h>=0?(s=(t.min.y-f.y)*h,o=(t.max.y-f.y)*h):(s=(t.max.y-f.y)*h,o=(t.min.y-f.y)*h),n>o||s>r||((s>n||isNaN(n))&&(n=s),(o<r||isNaN(r))&&(r=o),u>=0?(a=(t.min.z-f.z)*u,l=(t.max.z-f.z)*u):(a=(t.max.z-f.z)*u,l=(t.min.z-f.z)*u),n>l||a>r)||((a>n||n!==n)&&(n=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(n>=0?n:r,e)}intersectsBox(t){return this.intersectBox(t,ri)!==null}intersectTriangle(t,e,n,r,s){Al.subVectors(e,t),eo.subVectors(n,t),Tl.crossVectors(Al,eo);let o=this.direction.dot(Tl),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Si.subVectors(this.origin,t);let l=a*this.direction.dot(eo.crossVectors(Si,eo));if(l<0)return null;let c=a*this.direction.dot(Al.cross(Si));if(c<0||l+c>o)return null;let h=-a*Si.dot(Tl);return h<0?null:this.at(h/o,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},be=class i{constructor(t,e,n,r,s,o,a,l,c,h,u,f,d,x,M,m){i.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,r,s,o,a,l,c,h,u,f,d,x,M,m)}set(t,e,n,r,s,o,a,l,c,h,u,f,d,x,M,m){let p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=r,p[1]=s,p[5]=o,p[9]=a,p[13]=l,p[2]=c,p[6]=h,p[10]=u,p[14]=f,p[3]=d,p[7]=x,p[11]=M,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){let e=this.elements,n=t.elements,r=1/dr.setFromMatrixColumn(t,0).length(),s=1/dr.setFromMatrixColumn(t,1).length(),o=1/dr.setFromMatrixColumn(t,2).length();return e[0]=n[0]*r,e[1]=n[1]*r,e[2]=n[2]*r,e[3]=0,e[4]=n[4]*s,e[5]=n[5]*s,e[6]=n[6]*s,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,r=t.y,s=t.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(r),c=Math.sin(r),h=Math.cos(s),u=Math.sin(s);if(t.order==="XYZ"){let f=o*h,d=o*u,x=a*h,M=a*u;e[0]=l*h,e[4]=-l*u,e[8]=c,e[1]=d+x*c,e[5]=f-M*c,e[9]=-a*l,e[2]=M-f*c,e[6]=x+d*c,e[10]=o*l}else if(t.order==="YXZ"){let f=l*h,d=l*u,x=c*h,M=c*u;e[0]=f+M*a,e[4]=x*a-d,e[8]=o*c,e[1]=o*u,e[5]=o*h,e[9]=-a,e[2]=d*a-x,e[6]=M+f*a,e[10]=o*l}else if(t.order==="ZXY"){let f=l*h,d=l*u,x=c*h,M=c*u;e[0]=f-M*a,e[4]=-o*u,e[8]=x+d*a,e[1]=d+x*a,e[5]=o*h,e[9]=M-f*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){let f=o*h,d=o*u,x=a*h,M=a*u;e[0]=l*h,e[4]=x*c-d,e[8]=f*c+M,e[1]=l*u,e[5]=M*c+f,e[9]=d*c-x,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){let f=o*l,d=o*c,x=a*l,M=a*c;e[0]=l*h,e[4]=M-f*u,e[8]=x*u+d,e[1]=u,e[5]=o*h,e[9]=-a*h,e[2]=-c*h,e[6]=d*u+x,e[10]=f-M*u}else if(t.order==="XZY"){let f=o*l,d=o*c,x=a*l,M=a*c;e[0]=l*h,e[4]=-u,e[8]=c*h,e[1]=f*u+M,e[5]=o*h,e[9]=d*u-x,e[2]=x*u-d,e[6]=a*h,e[10]=M*u+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(yf,t,Mf)}lookAt(t,e,n){let r=this.elements;return _n.subVectors(t,e),_n.lengthSq()===0&&(_n.z=1),_n.normalize(),_i.crossVectors(n,_n),_i.lengthSq()===0&&(Math.abs(n.z)===1?_n.x+=1e-4:_n.z+=1e-4,_n.normalize(),_i.crossVectors(n,_n)),_i.normalize(),no.crossVectors(_n,_i),r[0]=_i.x,r[4]=no.x,r[8]=_n.x,r[1]=_i.y,r[5]=no.y,r[9]=_n.y,r[2]=_i.z,r[6]=no.z,r[10]=_n.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,r=e.elements,s=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],h=n[1],u=n[5],f=n[9],d=n[13],x=n[2],M=n[6],m=n[10],p=n[14],T=n[3],A=n[7],g=n[11],y=n[15],v=r[0],E=r[4],R=r[8],b=r[12],w=r[1],I=r[5],L=r[9],k=r[13],O=r[2],X=r[6],z=r[10],$=r[14],G=r[3],at=r[7],xt=r[11],It=r[15];return s[0]=o*v+a*w+l*O+c*G,s[4]=o*E+a*I+l*X+c*at,s[8]=o*R+a*L+l*z+c*xt,s[12]=o*b+a*k+l*$+c*It,s[1]=h*v+u*w+f*O+d*G,s[5]=h*E+u*I+f*X+d*at,s[9]=h*R+u*L+f*z+d*xt,s[13]=h*b+u*k+f*$+d*It,s[2]=x*v+M*w+m*O+p*G,s[6]=x*E+M*I+m*X+p*at,s[10]=x*R+M*L+m*z+p*xt,s[14]=x*b+M*k+m*$+p*It,s[3]=T*v+A*w+g*O+y*G,s[7]=T*E+A*I+g*X+y*at,s[11]=T*R+A*L+g*z+y*xt,s[15]=T*b+A*k+g*$+y*It,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],r=t[8],s=t[12],o=t[1],a=t[5],l=t[9],c=t[13],h=t[2],u=t[6],f=t[10],d=t[14],x=t[3],M=t[7],m=t[11],p=t[15];return x*(+s*l*u-r*c*u-s*a*f+n*c*f+r*a*d-n*l*d)+M*(+e*l*d-e*c*f+s*o*f-r*o*d+r*c*h-s*l*h)+m*(+e*c*u-e*a*d-s*o*u+n*o*d+s*a*h-n*c*h)+p*(-r*a*h-e*l*u+e*a*f+r*o*u-n*o*f+n*l*h)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let r=this.elements;return t.isVector3?(r[12]=t.x,r[13]=t.y,r[14]=t.z):(r[12]=t,r[13]=e,r[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],r=t[2],s=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],u=t[9],f=t[10],d=t[11],x=t[12],M=t[13],m=t[14],p=t[15],T=u*m*c-M*f*c+M*l*d-a*m*d-u*l*p+a*f*p,A=x*f*c-h*m*c-x*l*d+o*m*d+h*l*p-o*f*p,g=h*M*c-x*u*c+x*a*d-o*M*d-h*a*p+o*u*p,y=x*u*l-h*M*l-x*a*f+o*M*f+h*a*m-o*u*m,v=e*T+n*A+r*g+s*y;if(v===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let E=1/v;return t[0]=T*E,t[1]=(M*f*s-u*m*s-M*r*d+n*m*d+u*r*p-n*f*p)*E,t[2]=(a*m*s-M*l*s+M*r*c-n*m*c-a*r*p+n*l*p)*E,t[3]=(u*l*s-a*f*s-u*r*c+n*f*c+a*r*d-n*l*d)*E,t[4]=A*E,t[5]=(h*m*s-x*f*s+x*r*d-e*m*d-h*r*p+e*f*p)*E,t[6]=(x*l*s-o*m*s-x*r*c+e*m*c+o*r*p-e*l*p)*E,t[7]=(o*f*s-h*l*s+h*r*c-e*f*c-o*r*d+e*l*d)*E,t[8]=g*E,t[9]=(x*u*s-h*M*s-x*n*d+e*M*d+h*n*p-e*u*p)*E,t[10]=(o*M*s-x*a*s+x*n*c-e*M*c-o*n*p+e*a*p)*E,t[11]=(h*a*s-o*u*s-h*n*c+e*u*c+o*n*d-e*a*d)*E,t[12]=y*E,t[13]=(h*M*r-x*u*r+x*n*f-e*M*f-h*n*m+e*u*m)*E,t[14]=(x*a*r-o*M*r-x*n*l+e*M*l+o*n*m-e*a*m)*E,t[15]=(o*u*r-h*a*r+h*n*l-e*u*l-o*n*f+e*a*f)*E,this}scale(t){let e=this.elements,n=t.x,r=t.y,s=t.z;return e[0]*=n,e[4]*=r,e[8]*=s,e[1]*=n,e[5]*=r,e[9]*=s,e[2]*=n,e[6]*=r,e[10]*=s,e[3]*=n,e[7]*=r,e[11]*=s,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],r=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,r))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),r=Math.sin(e),s=1-n,o=t.x,a=t.y,l=t.z,c=s*o,h=s*a;return this.set(c*o+n,c*a-r*l,c*l+r*a,0,c*a+r*l,h*a+n,h*l-r*o,0,c*l-r*a,h*l+r*o,s*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,r,s,o){return this.set(1,n,s,0,t,1,o,0,e,r,1,0,0,0,0,1),this}compose(t,e,n){let r=this.elements,s=e._x,o=e._y,a=e._z,l=e._w,c=s+s,h=o+o,u=a+a,f=s*c,d=s*h,x=s*u,M=o*h,m=o*u,p=a*u,T=l*c,A=l*h,g=l*u,y=n.x,v=n.y,E=n.z;return r[0]=(1-(M+p))*y,r[1]=(d+g)*y,r[2]=(x-A)*y,r[3]=0,r[4]=(d-g)*v,r[5]=(1-(f+p))*v,r[6]=(m+T)*v,r[7]=0,r[8]=(x+A)*E,r[9]=(m-T)*E,r[10]=(1-(f+M))*E,r[11]=0,r[12]=t.x,r[13]=t.y,r[14]=t.z,r[15]=1,this}decompose(t,e,n){let r=this.elements,s=dr.set(r[0],r[1],r[2]).length(),o=dr.set(r[4],r[5],r[6]).length(),a=dr.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),t.x=r[12],t.y=r[13],t.z=r[14],On.copy(this);let c=1/s,h=1/o,u=1/a;return On.elements[0]*=c,On.elements[1]*=c,On.elements[2]*=c,On.elements[4]*=h,On.elements[5]*=h,On.elements[6]*=h,On.elements[8]*=u,On.elements[9]*=u,On.elements[10]*=u,e.setFromRotationMatrix(On),n.x=s,n.y=o,n.z=a,this}makePerspective(t,e,n,r,s,o,a=zn,l=!1){let c=this.elements,h=2*s/(e-t),u=2*s/(n-r),f=(e+t)/(e-t),d=(n+r)/(n-r),x,M;if(l)x=s/(o-s),M=o*s/(o-s);else if(a===zn)x=-(o+s)/(o-s),M=-2*o*s/(o-s);else if(a===ps)x=-o/(o-s),M=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=f,c[12]=0,c[1]=0,c[5]=u,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=x,c[14]=M,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,r,s,o,a=zn,l=!1){let c=this.elements,h=2/(e-t),u=2/(n-r),f=-(e+t)/(e-t),d=-(n+r)/(n-r),x,M;if(l)x=1/(o-s),M=o/(o-s);else if(a===zn)x=-2/(o-s),M=-(o+s)/(o-s);else if(a===ps)x=-1/(o-s),M=-s/(o-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=0,c[12]=f,c[1]=0,c[5]=u,c[9]=0,c[13]=d,c[2]=0,c[6]=0,c[10]=x,c[14]=M,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let r=0;r<16;r++)if(e[r]!==n[r])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}},dr=new P,On=new be,yf=new P(0,0,0),Mf=new P(1,1,1),_i=new P,no=new P,_n=new P,Qc=new be,$c=new Dn,Jn=class i{constructor(t=0,e=0,n=0,r=i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=r}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,r=this._order){return this._x=t,this._y=e,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let r=t.elements,s=r[0],o=r[4],a=r[8],l=r[1],c=r[5],h=r[9],u=r[2],f=r[6],d=r[10];switch(e){case"XYZ":this._y=Math.asin(re(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,d),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-re(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,s),this._z=0);break;case"ZXY":this._x=Math.asin(re(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-u,d),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-re(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(re(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,s)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-re(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-h,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Qc.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Qc,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return $c.setFromEuler(this),this.setFromQuaternion($c,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Jn.DEFAULT_ORDER="XYZ";var Pr=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},Sf=0,th=new P,pr=new Dn,si=new be,io=new P,rs=new P,_f=new P,bf=new Dn,eh=new P(1,0,0),nh=new P(0,1,0),ih=new P(0,0,1),rh={type:"added"},Ef={type:"removed"},mr={type:"childadded",child:null},Rl={type:"childremoved",child:null},vn=class i extends fi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Sf++}),this.uuid=ci(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let t=new P,e=new Jn,n=new Dn,r=new P(1,1,1);function s(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(s),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new be},normalMatrix:{value:new Qt}}),this.matrix=new be,this.matrixWorld=new be,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Pr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return pr.setFromAxisAngle(t,e),this.quaternion.multiply(pr),this}rotateOnWorldAxis(t,e){return pr.setFromAxisAngle(t,e),this.quaternion.premultiply(pr),this}rotateX(t){return this.rotateOnAxis(eh,t)}rotateY(t){return this.rotateOnAxis(nh,t)}rotateZ(t){return this.rotateOnAxis(ih,t)}translateOnAxis(t,e){return th.copy(t).applyQuaternion(this.quaternion),this.position.add(th.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(eh,t)}translateY(t){return this.translateOnAxis(nh,t)}translateZ(t){return this.translateOnAxis(ih,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(si.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?io.copy(t):io.set(t,e,n);let r=this.parent;this.updateWorldMatrix(!0,!1),rs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?si.lookAt(rs,io,this.up):si.lookAt(io,rs,this.up),this.quaternion.setFromRotationMatrix(si),r&&(si.extractRotation(r.matrixWorld),pr.setFromRotationMatrix(si),this.quaternion.premultiply(pr.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(rh),mr.child=t,this.dispatchEvent(mr),mr.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Ef),Rl.child=t,this.dispatchEvent(Rl),Rl.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),si.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),si.multiply(t.parent.matrixWorld)),t.applyMatrix4(si),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(rh),mr.child=t,this.dispatchEvent(mr),mr.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,r=this.children.length;n<r;n++){let o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(rs,t,_f),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(rs,bf,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);let e=this.children;for(let n=0,r=e.length;n<r;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,r=e.length;n<r;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,r=e.length;n<r;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){let n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){let r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(a=>({...a})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(t),r.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(t.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let u=l[c];s(t.shapes,u)}else s(t.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(t.materials,this.material[l]));r.material=a}else r.material=s(t.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];r.animations.push(s(t.animations,l))}}if(e){let a=o(t.geometries),l=o(t.materials),c=o(t.textures),h=o(t.images),u=o(t.shapes),f=o(t.skeletons),d=o(t.animations),x=o(t.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),f.length>0&&(n.skeletons=f),d.length>0&&(n.animations=d),x.length>0&&(n.nodes=x)}return n.object=r,n;function o(a){let l=[];for(let c in a){let h=a[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let r=t.children[n];this.add(r.clone())}return this}};vn.DEFAULT_UP=new P(0,1,0);vn.DEFAULT_MATRIX_AUTO_UPDATE=!0;vn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Hn=new P,oi=new P,Cl=new P,ai=new P,gr=new P,xr=new P,sh=new P,Il=new P,Pl=new P,Fl=new P,Ul=new Le,Dl=new Le,Ll=new Le,li=class i{constructor(t=new P,e=new P,n=new P){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,r){r.subVectors(n,e),Hn.subVectors(t,e),r.cross(Hn);let s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(t,e,n,r,s){Hn.subVectors(r,e),oi.subVectors(n,e),Cl.subVectors(t,e);let o=Hn.dot(Hn),a=Hn.dot(oi),l=Hn.dot(Cl),c=oi.dot(oi),h=oi.dot(Cl),u=o*c-a*a;if(u===0)return s.set(0,0,0),null;let f=1/u,d=(c*l-a*h)*f,x=(o*h-a*l)*f;return s.set(1-d-x,x,d)}static containsPoint(t,e,n,r){return this.getBarycoord(t,e,n,r,ai)===null?!1:ai.x>=0&&ai.y>=0&&ai.x+ai.y<=1}static getInterpolation(t,e,n,r,s,o,a,l){return this.getBarycoord(t,e,n,r,ai)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,ai.x),l.addScaledVector(o,ai.y),l.addScaledVector(a,ai.z),l)}static getInterpolatedAttribute(t,e,n,r,s,o){return Ul.setScalar(0),Dl.setScalar(0),Ll.setScalar(0),Ul.fromBufferAttribute(t,e),Dl.fromBufferAttribute(t,n),Ll.fromBufferAttribute(t,r),o.setScalar(0),o.addScaledVector(Ul,s.x),o.addScaledVector(Dl,s.y),o.addScaledVector(Ll,s.z),o}static isFrontFacing(t,e,n,r){return Hn.subVectors(n,e),oi.subVectors(t,e),Hn.cross(oi).dot(r)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,r){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[r]),this}setFromAttributeAndIndices(t,e,n,r){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,r),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Hn.subVectors(this.c,this.b),oi.subVectors(this.a,this.b),Hn.cross(oi).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return i.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,r,s){return i.getInterpolation(t,this.a,this.b,this.c,e,n,r,s)}containsPoint(t){return i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,r=this.b,s=this.c,o,a;gr.subVectors(r,n),xr.subVectors(s,n),Il.subVectors(t,n);let l=gr.dot(Il),c=xr.dot(Il);if(l<=0&&c<=0)return e.copy(n);Pl.subVectors(t,r);let h=gr.dot(Pl),u=xr.dot(Pl);if(h>=0&&u<=h)return e.copy(r);let f=l*u-h*c;if(f<=0&&l>=0&&h<=0)return o=l/(l-h),e.copy(n).addScaledVector(gr,o);Fl.subVectors(t,s);let d=gr.dot(Fl),x=xr.dot(Fl);if(x>=0&&d<=x)return e.copy(s);let M=d*c-l*x;if(M<=0&&c>=0&&x<=0)return a=c/(c-x),e.copy(n).addScaledVector(xr,a);let m=h*x-d*u;if(m<=0&&u-h>=0&&d-x>=0)return sh.subVectors(s,r),a=(u-h)/(u-h+(d-x)),e.copy(r).addScaledVector(sh,a);let p=1/(m+M+f);return o=M*p,a=f*p,e.copy(n).addScaledVector(gr,o).addScaledVector(xr,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},su={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},bi={h:0,s:0,l:0},ro={h:0,s:0,l:0};function Nl(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}var yt=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let r=t;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Ze){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,ue.colorSpaceToWorking(this,e),this}setRGB(t,e,n,r=ue.workingColorSpace){return this.r=t,this.g=e,this.b=n,ue.colorSpaceToWorking(this,r),this}setHSL(t,e,n,r=ue.workingColorSpace){if(t=pf(t,1),e=re(e,0,1),n=re(n,0,1),e===0)this.r=this.g=this.b=n;else{let s=n<=.5?n*(1+e):n+e-n*e,o=2*n-s;this.r=Nl(o,s,t+1/3),this.g=Nl(o,s,t),this.b=Nl(o,s,t-1/3)}return ue.colorSpaceToWorking(this,r),this}setStyle(t,e=Ze){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(t)){let s,o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,e);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,e);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(t)){let s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(s,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Ze){let n=su[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=hi(t.r),this.g=hi(t.g),this.b=hi(t.b),this}copyLinearToSRGB(t){return this.r=wr(t.r),this.g=wr(t.g),this.b=wr(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Ze){return ue.workingToColorSpace(cn.copy(this),t),Math.round(re(cn.r*255,0,255))*65536+Math.round(re(cn.g*255,0,255))*256+Math.round(re(cn.b*255,0,255))}getHexString(t=Ze){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=ue.workingColorSpace){ue.workingToColorSpace(cn.copy(this),e);let n=cn.r,r=cn.g,s=cn.b,o=Math.max(n,r,s),a=Math.min(n,r,s),l,c,h=(a+o)/2;if(a===o)l=0,c=0;else{let u=o-a;switch(c=h<=.5?u/(o+a):u/(2-o-a),o){case n:l=(r-s)/u+(r<s?6:0);break;case r:l=(s-n)/u+2;break;case s:l=(n-r)/u+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=ue.workingColorSpace){return ue.workingToColorSpace(cn.copy(this),e),t.r=cn.r,t.g=cn.g,t.b=cn.b,t}getStyle(t=Ze){ue.workingToColorSpace(cn.copy(this),t);let e=cn.r,n=cn.g,r=cn.b;return t!==Ze?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(t,e,n){return this.getHSL(bi),this.setHSL(bi.h+t,bi.s+e,bi.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(bi),t.getHSL(ro);let n=vl(bi.h,ro.h,e),r=vl(bi.s,ro.s,e),s=vl(bi.l,ro.l,e);return this.setHSL(n,r,s),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,r=this.b,s=t.elements;return this.r=s[0]*e+s[3]*n+s[6]*r,this.g=s[1]*e+s[4]*n+s[7]*r,this.b=s[2]*e+s[5]*n+s[8]*r,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},cn=new yt;yt.NAMES=su;var wf=0,di=class extends fi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:wf++}),this.uuid=ci(),this.name="",this.type="Material",this.blending=Gi,this.side=En,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=wo,this.blendDst=Ao,this.blendEquation=Ai,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new yt(0,0,0),this.blendAlpha=0,this.depthFunc=Vi,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=jl,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ki,this.stencilZFail=ki,this.stencilZPass=ki,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}let r=this[e];if(r===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Gi&&(n.blending=this.blending),this.side!==En&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==wo&&(n.blendSrc=this.blendSrc),this.blendDst!==Ao&&(n.blendDst=this.blendDst),this.blendEquation!==Ai&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Vi&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==jl&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ki&&(n.stencilFail=this.stencilFail),this.stencilZFail!==ki&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==ki&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(s){let o=[];for(let a in s){let l=s[a];delete l.metadata,o.push(l)}return o}if(e){let s=r(t.textures),o=r(t.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let r=e.length;n=new Array(r);for(let s=0;s!==r;++s)n[s]=e[s].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}},me=class extends di{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new yt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Jn,this.combine=rc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};var We=new P,so=new nt,Af=0,Ne=class{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Af++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Co,this.updateRanges=[],this.gpuType=ti,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[t+r]=e.array[n+r];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)so.fromBufferAttribute(this,e),so.applyMatrix3(t),this.setXY(e,so.x,so.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)We.fromBufferAttribute(this,e),We.applyMatrix3(t),this.setXYZ(e,We.x,We.y,We.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)We.fromBufferAttribute(this,e),We.applyMatrix4(t),this.setXYZ(e,We.x,We.y,We.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)We.fromBufferAttribute(this,e),We.applyNormalMatrix(t),this.setXYZ(e,We.x,We.y,We.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)We.fromBufferAttribute(this,e),We.transformDirection(t),this.setXYZ(e,We.x,We.y,We.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=qn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Ae(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=qn(e,this.array)),e}setX(t,e){return this.normalized&&(e=Ae(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=qn(e,this.array)),e}setY(t,e){return this.normalized&&(e=Ae(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=qn(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Ae(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=qn(e,this.array)),e}setW(t,e){return this.normalized&&(e=Ae(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Ae(e,this.array),n=Ae(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,r){return t*=this.itemSize,this.normalized&&(e=Ae(e,this.array),n=Ae(n,this.array),r=Ae(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=r,this}setXYZW(t,e,n,r,s){return t*=this.itemSize,this.normalized&&(e=Ae(e,this.array),n=Ae(n,this.array),r=Ae(r,this.array),s=Ae(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=r,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Co&&(t.usage=this.usage),t}};var xs=class extends Ne{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var vs=class extends Ne{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var Jt=class extends Ne{constructor(t,e,n){super(new Float32Array(t),e,n)}},Tf=0,Un=new be,Bl=new vn,vr=new P,bn=new Ti,ss=new Ti,Ye=new P,Ie=class i extends fi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Tf++}),this.uuid=ci(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(gc(t)?vs:xs)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let s=new Qt().getNormalMatrix(t);n.applyNormalMatrix(s),n.needsUpdate=!0}let r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(t),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Un.makeRotationFromQuaternion(t),this.applyMatrix4(Un),this}rotateX(t){return Un.makeRotationX(t),this.applyMatrix4(Un),this}rotateY(t){return Un.makeRotationY(t),this.applyMatrix4(Un),this}rotateZ(t){return Un.makeRotationZ(t),this.applyMatrix4(Un),this}translate(t,e,n){return Un.makeTranslation(t,e,n),this.applyMatrix4(Un),this}scale(t,e,n){return Un.makeScale(t,e,n),this.applyMatrix4(Un),this}lookAt(t){return Bl.lookAt(t),Bl.updateMatrix(),this.applyMatrix4(Bl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(vr).negate(),this.translate(vr.x,vr.y,vr.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let r=0,s=t.length;r<s;r++){let o=t[r];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Jt(n,3))}else{let n=Math.min(t.length,e.count);for(let r=0;r<n;r++){let s=t[r];e.setXYZ(r,s.x,s.y,s.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ti);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new P(-1/0,-1/0,-1/0),new P(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,r=e.length;n<r;n++){let s=e[n];bn.setFromBufferAttribute(s),this.morphTargetsRelative?(Ye.addVectors(this.boundingBox.min,bn.min),this.boundingBox.expandByPoint(Ye),Ye.addVectors(this.boundingBox.max,bn.max),this.boundingBox.expandByPoint(Ye)):(this.boundingBox.expandByPoint(bn.min),this.boundingBox.expandByPoint(bn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Xi);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new P,1/0);return}if(t){let n=this.boundingSphere.center;if(bn.setFromBufferAttribute(t),e)for(let s=0,o=e.length;s<o;s++){let a=e[s];ss.setFromBufferAttribute(a),this.morphTargetsRelative?(Ye.addVectors(bn.min,ss.min),bn.expandByPoint(Ye),Ye.addVectors(bn.max,ss.max),bn.expandByPoint(Ye)):(bn.expandByPoint(ss.min),bn.expandByPoint(ss.max))}bn.getCenter(n);let r=0;for(let s=0,o=t.count;s<o;s++)Ye.fromBufferAttribute(t,s),r=Math.max(r,n.distanceToSquared(Ye));if(e)for(let s=0,o=e.length;s<o;s++){let a=e[s],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)Ye.fromBufferAttribute(a,c),l&&(vr.fromBufferAttribute(t,c),Ye.add(vr)),r=Math.max(r,n.distanceToSquared(Ye))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,r=e.normal,s=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ne(new Float32Array(4*n.count),4));let o=this.getAttribute("tangent"),a=[],l=[];for(let R=0;R<n.count;R++)a[R]=new P,l[R]=new P;let c=new P,h=new P,u=new P,f=new nt,d=new nt,x=new nt,M=new P,m=new P;function p(R,b,w){c.fromBufferAttribute(n,R),h.fromBufferAttribute(n,b),u.fromBufferAttribute(n,w),f.fromBufferAttribute(s,R),d.fromBufferAttribute(s,b),x.fromBufferAttribute(s,w),h.sub(c),u.sub(c),d.sub(f),x.sub(f);let I=1/(d.x*x.y-x.x*d.y);isFinite(I)&&(M.copy(h).multiplyScalar(x.y).addScaledVector(u,-d.y).multiplyScalar(I),m.copy(u).multiplyScalar(d.x).addScaledVector(h,-x.x).multiplyScalar(I),a[R].add(M),a[b].add(M),a[w].add(M),l[R].add(m),l[b].add(m),l[w].add(m))}let T=this.groups;T.length===0&&(T=[{start:0,count:t.count}]);for(let R=0,b=T.length;R<b;++R){let w=T[R],I=w.start,L=w.count;for(let k=I,O=I+L;k<O;k+=3)p(t.getX(k+0),t.getX(k+1),t.getX(k+2))}let A=new P,g=new P,y=new P,v=new P;function E(R){y.fromBufferAttribute(r,R),v.copy(y);let b=a[R];A.copy(b),A.sub(y.multiplyScalar(y.dot(b))).normalize(),g.crossVectors(v,b);let I=g.dot(l[R])<0?-1:1;o.setXYZW(R,A.x,A.y,A.z,I)}for(let R=0,b=T.length;R<b;++R){let w=T[R],I=w.start,L=w.count;for(let k=I,O=I+L;k<O;k+=3)E(t.getX(k+0)),E(t.getX(k+1)),E(t.getX(k+2))}}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Ne(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let f=0,d=n.count;f<d;f++)n.setXYZ(f,0,0,0);let r=new P,s=new P,o=new P,a=new P,l=new P,c=new P,h=new P,u=new P;if(t)for(let f=0,d=t.count;f<d;f+=3){let x=t.getX(f+0),M=t.getX(f+1),m=t.getX(f+2);r.fromBufferAttribute(e,x),s.fromBufferAttribute(e,M),o.fromBufferAttribute(e,m),h.subVectors(o,s),u.subVectors(r,s),h.cross(u),a.fromBufferAttribute(n,x),l.fromBufferAttribute(n,M),c.fromBufferAttribute(n,m),a.add(h),l.add(h),c.add(h),n.setXYZ(x,a.x,a.y,a.z),n.setXYZ(M,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let f=0,d=e.count;f<d;f+=3)r.fromBufferAttribute(e,f+0),s.fromBufferAttribute(e,f+1),o.fromBufferAttribute(e,f+2),h.subVectors(o,s),u.subVectors(r,s),h.cross(u),n.setXYZ(f+0,h.x,h.y,h.z),n.setXYZ(f+1,h.x,h.y,h.z),n.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Ye.fromBufferAttribute(t,e),Ye.normalize(),t.setXYZ(e,Ye.x,Ye.y,Ye.z)}toNonIndexed(){function t(a,l){let c=a.array,h=a.itemSize,u=a.normalized,f=new c.constructor(l.length*h),d=0,x=0;for(let M=0,m=l.length;M<m;M++){a.isInterleavedBufferAttribute?d=l[M]*a.data.stride+a.offset:d=l[M]*h;for(let p=0;p<h;p++)f[x++]=c[d++]}return new Ne(f,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new i,n=this.index.array,r=this.attributes;for(let a in r){let l=r[a],c=t(l,n);e.setAttribute(a,c)}let s=this.morphAttributes;for(let a in s){let l=[],c=s[a];for(let h=0,u=c.length;h<u;h++){let f=c[h],d=t(f,n);l.push(d)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let l in n){let c=n[l];t.data.attributes[l]=c.toJSON(t.data)}let r={},s=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let u=0,f=c.length;u<f;u++){let d=c[u];h.push(d.toJSON(t.data))}h.length>0&&(r[l]=h,s=!0)}s&&(t.data.morphAttributes=r,t.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(t.data.boundingSphere=a.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone());let r=t.attributes;for(let c in r){let h=r[c];this.setAttribute(c,h.clone(e))}let s=t.morphAttributes;for(let c in s){let h=[],u=s[c];for(let f=0,d=u.length;f<d;f++)h.push(u[f].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;let o=t.groups;for(let c=0,h=o.length;c<h;c++){let u=o[c];this.addGroup(u.start,u.count,u.materialIndex)}let a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},oh=new be,Hi=new Ir,oo=new Xi,ah=new P,ao=new P,lo=new P,co=new P,Ol=new P,ho=new P,lh=new P,uo=new P,Nt=class extends vn{constructor(t=new Ie,e=new me){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let r=e[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){let a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(t,e){let n=this.geometry,r=n.attributes.position,s=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(r,t);let a=this.morphTargetInfluences;if(s&&a){ho.set(0,0,0);for(let l=0,c=s.length;l<c;l++){let h=a[l],u=s[l];h!==0&&(Ol.fromBufferAttribute(u,t),o?ho.addScaledVector(Ol,h):ho.addScaledVector(Ol.sub(e),h))}e.add(ho)}return e}raycast(t,e){let n=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),oo.copy(n.boundingSphere),oo.applyMatrix4(s),Hi.copy(t.ray).recast(t.near),!(oo.containsPoint(Hi.origin)===!1&&(Hi.intersectSphere(oo,ah)===null||Hi.origin.distanceToSquared(ah)>(t.far-t.near)**2))&&(oh.copy(s).invert(),Hi.copy(t.ray).applyMatrix4(oh),!(n.boundingBox!==null&&Hi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Hi)))}_computeIntersections(t,e,n){let r,s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,h=s.attributes.uv1,u=s.attributes.normal,f=s.groups,d=s.drawRange;if(a!==null)if(Array.isArray(o))for(let x=0,M=f.length;x<M;x++){let m=f[x],p=o[m.materialIndex],T=Math.max(m.start,d.start),A=Math.min(a.count,Math.min(m.start+m.count,d.start+d.count));for(let g=T,y=A;g<y;g+=3){let v=a.getX(g),E=a.getX(g+1),R=a.getX(g+2);r=fo(this,p,t,n,c,h,u,v,E,R),r&&(r.faceIndex=Math.floor(g/3),r.face.materialIndex=m.materialIndex,e.push(r))}}else{let x=Math.max(0,d.start),M=Math.min(a.count,d.start+d.count);for(let m=x,p=M;m<p;m+=3){let T=a.getX(m),A=a.getX(m+1),g=a.getX(m+2);r=fo(this,o,t,n,c,h,u,T,A,g),r&&(r.faceIndex=Math.floor(m/3),e.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let x=0,M=f.length;x<M;x++){let m=f[x],p=o[m.materialIndex],T=Math.max(m.start,d.start),A=Math.min(l.count,Math.min(m.start+m.count,d.start+d.count));for(let g=T,y=A;g<y;g+=3){let v=g,E=g+1,R=g+2;r=fo(this,p,t,n,c,h,u,v,E,R),r&&(r.faceIndex=Math.floor(g/3),r.face.materialIndex=m.materialIndex,e.push(r))}}else{let x=Math.max(0,d.start),M=Math.min(l.count,d.start+d.count);for(let m=x,p=M;m<p;m+=3){let T=m,A=m+1,g=m+2;r=fo(this,o,t,n,c,h,u,T,A,g),r&&(r.faceIndex=Math.floor(m/3),e.push(r))}}}};function Rf(i,t,e,n,r,s,o,a){let l;if(t.side===sn?l=n.intersectTriangle(o,s,r,!0,a):l=n.intersectTriangle(r,s,o,t.side===En,a),l===null)return null;uo.copy(a),uo.applyMatrix4(i.matrixWorld);let c=e.ray.origin.distanceTo(uo);return c<e.near||c>e.far?null:{distance:c,point:uo.clone(),object:i}}function fo(i,t,e,n,r,s,o,a,l,c){i.getVertexPosition(a,ao),i.getVertexPosition(l,lo),i.getVertexPosition(c,co);let h=Rf(i,t,e,n,ao,lo,co,lh);if(h){let u=new P;li.getBarycoord(lh,ao,lo,co,u),r&&(h.uv=li.getInterpolatedAttribute(r,a,l,c,u,new nt)),s&&(h.uv1=li.getInterpolatedAttribute(s,a,l,c,u,new nt)),o&&(h.normal=li.getInterpolatedAttribute(o,a,l,c,u,new P),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let f={a,b:l,c,normal:new P,materialIndex:0};li.getNormal(ao,lo,co,f.normal),h.face=f,h.barycoord=u}return h}var Te=class i extends Ie{constructor(t=1,e=1,n=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:r,heightSegments:s,depthSegments:o};let a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);let l=[],c=[],h=[],u=[],f=0,d=0;x("z","y","x",-1,-1,n,e,t,o,s,0),x("z","y","x",1,-1,n,e,-t,o,s,1),x("x","z","y",1,1,t,n,e,r,o,2),x("x","z","y",1,-1,t,n,-e,r,o,3),x("x","y","z",1,-1,t,e,n,r,s,4),x("x","y","z",-1,-1,t,e,-n,r,s,5),this.setIndex(l),this.setAttribute("position",new Jt(c,3)),this.setAttribute("normal",new Jt(h,3)),this.setAttribute("uv",new Jt(u,2));function x(M,m,p,T,A,g,y,v,E,R,b){let w=g/E,I=y/R,L=g/2,k=y/2,O=v/2,X=E+1,z=R+1,$=0,G=0,at=new P;for(let xt=0;xt<z;xt++){let It=xt*I-k;for(let $t=0;$t<X;$t++){let ge=$t*w-L;at[M]=ge*T,at[m]=It*A,at[p]=O,c.push(at.x,at.y,at.z),at[M]=0,at[m]=0,at[p]=v>0?1:-1,h.push(at.x,at.y,at.z),u.push($t/E),u.push(1-xt/R),$+=1}}for(let xt=0;xt<R;xt++)for(let It=0;It<E;It++){let $t=f+It+X*xt,ge=f+It+X*(xt+1),Fe=f+(It+1)+X*(xt+1),ae=f+(It+1)+X*xt;l.push($t,ge,ae),l.push(ge,Fe,ae),G+=6}a.addGroup(d,G,b),d+=G,f+=$}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};function Qi(i){let t={};for(let e in i){t[e]={};for(let n in i[e]){let r=i[e][n];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=r.clone():Array.isArray(r)?t[e][n]=r.slice():t[e][n]=r}}return t}function hn(i){let t={};for(let e=0;e<i.length;e++){let n=Qi(i[e]);for(let r in n)t[r]=n[r]}return t}function Cf(i){let t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function xc(i){let t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:ue.workingColorSpace}var un={clone:Qi,merge:hn},If=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Pf=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,_e=class extends di{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=If,this.fragmentShader=Pf,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Qi(t.uniforms),this.uniformsGroups=Cf(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let r in this.uniforms){let o=this.uniforms[r].value;o&&o.isTexture?e.uniforms[r]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[r]={type:"m4",value:o.toArray()}:e.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}},ys=class extends vn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new be,this.projectionMatrix=new be,this.projectionMatrixInverse=new be,this.coordinateSystem=zn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Ei=new P,ch=new nt,hh=new nt,Qe=class extends ys{constructor(t=50,e=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=Io*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(xl*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Io*2*Math.atan(Math.tan(xl*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Ei.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Ei.x,Ei.y).multiplyScalar(-t/Ei.z),Ei.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Ei.x,Ei.y).multiplyScalar(-t/Ei.z)}getViewSize(t,e){return this.getViewBounds(t,ch,hh),e.subVectors(hh,ch)}setViewOffset(t,e,n,r,s,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(xl*.5*this.fov)/this.zoom,n=2*e,r=this.aspect*n,s=-.5*r,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,e-=o.offsetY*n/c,r*=o.width/l,n*=o.height/c}let a=this.filmOffset;a!==0&&(s+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},yr=-90,Mr=1,Do=class extends vn{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let r=new Qe(yr,Mr,t,e);r.layers=this.layers,this.add(r);let s=new Qe(yr,Mr,t,e);s.layers=this.layers,this.add(s);let o=new Qe(yr,Mr,t,e);o.layers=this.layers,this.add(o);let a=new Qe(yr,Mr,t,e);a.layers=this.layers,this.add(a);let l=new Qe(yr,Mr,t,e);l.layers=this.layers,this.add(l);let c=new Qe(yr,Mr,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,r,s,o,a,l]=e;for(let c of e)this.remove(c);if(t===zn)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===ps)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[s,o,a,l,c,h]=this.children,u=t.getRenderTarget(),f=t.getActiveCubeFace(),d=t.getActiveMipmapLevel(),x=t.xr.enabled;t.xr.enabled=!1;let M=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,r),t.render(e,s),t.setRenderTarget(n,1,r),t.render(e,o),t.setRenderTarget(n,2,r),t.render(e,a),t.setRenderTarget(n,3,r),t.render(e,l),t.setRenderTarget(n,4,r),t.render(e,c),n.texture.generateMipmaps=M,t.setRenderTarget(n,5,r),t.render(e,h),t.setRenderTarget(u,f,d),t.xr.enabled=x,n.texture.needsPMREMUpdate=!0}},Ms=class extends rn{constructor(t=[],e=Yi,n,r,s,o,a,l,c,h){super(t,e,n,r,s,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},Lo=class extends $e{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},r=[n,n,n,n,n,n];this.texture=new Ms(r),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Te(5,5,5),s=new _e({name:"CubemapFromEquirect",uniforms:Qi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:sn,blending:Vn});s.uniforms.tEquirect.value=e;let o=new Nt(r,s),a=e.minFilter;return e.minFilter===Pi&&(e.minFilter=kn),new Do(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e=!0,n=!0,r=!0){let s=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,r);t.setRenderTarget(s)}},nn=class extends vn{constructor(){super(),this.isGroup=!0,this.type="Group"}},Ff={type:"move"},Fr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new nn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new nn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new P,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new P),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new nn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new P,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new P),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let r=null,s=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(let M of t.hand.values()){let m=e.getJointPose(M,n),p=this._getHandJoint(c,M);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}let h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],f=h.position.distanceTo(u.position),d=.02,x=.005;c.inputState.pinching&&f>d+x?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&f<=d-x&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(s=e.getPose(t.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=e.getPose(t.targetRaySpace,n),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Ff)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new nn;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},Ss=class i{constructor(t,e=25e-5){this.isFogExp2=!0,this.name="",this.color=new yt(t),this.density=e}clone(){return new i(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}};var _s=class extends vn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Jn,this.environmentIntensity=1,this.environmentRotation=new Jn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}},bs=class{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=Co,this.updateRanges=[],this.version=0,this.uuid=ci()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let r=0,s=this.stride;r<s;r++)this.array[t+r]=e.array[n+r];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ci()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ci()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},dn=new P,Ur=class i{constructor(t,e,n,r=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=r}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)dn.fromBufferAttribute(this,e),dn.applyMatrix4(t),this.setXYZ(e,dn.x,dn.y,dn.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)dn.fromBufferAttribute(this,e),dn.applyNormalMatrix(t),this.setXYZ(e,dn.x,dn.y,dn.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)dn.fromBufferAttribute(this,e),dn.transformDirection(t),this.setXYZ(e,dn.x,dn.y,dn.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=qn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Ae(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=Ae(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=Ae(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=Ae(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=Ae(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=qn(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=qn(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=qn(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=qn(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=Ae(e,this.array),n=Ae(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=Ae(e,this.array),n=Ae(n,this.array),r=Ae(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=r,this}setXYZW(t,e,n,r,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=Ae(e,this.array),n=Ae(n,this.array),r=Ae(r,this.array),s=Ae(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=r,this.data.array[t+3]=s,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let r=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)e.push(this.data.array[r+s])}return new Ne(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new i(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let r=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)e.push(this.data.array[r+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},Gn=class extends di{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new yt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},Sr,os=new P,_r=new P,br=new P,Er=new nt,as=new nt,ou=new be,po=new P,ls=new P,mo=new P,uh=new nt,Hl=new nt,fh=new nt,Yn=class extends vn{constructor(t=new Gn){if(super(),this.isSprite=!0,this.type="Sprite",Sr===void 0){Sr=new Ie;let e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new bs(e,5);Sr.setIndex([0,1,2,0,2,3]),Sr.setAttribute("position",new Ur(n,3,0,!1)),Sr.setAttribute("uv",new Ur(n,2,3,!1))}this.geometry=Sr,this.material=t,this.center=new nt(.5,.5),this.count=1}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),_r.setFromMatrixScale(this.matrixWorld),ou.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),br.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&_r.multiplyScalar(-br.z);let n=this.material.rotation,r,s;n!==0&&(s=Math.cos(n),r=Math.sin(n));let o=this.center;go(po.set(-.5,-.5,0),br,o,_r,r,s),go(ls.set(.5,-.5,0),br,o,_r,r,s),go(mo.set(.5,.5,0),br,o,_r,r,s),uh.set(0,0),Hl.set(1,0),fh.set(1,1);let a=t.ray.intersectTriangle(po,ls,mo,!1,os);if(a===null&&(go(ls.set(-.5,.5,0),br,o,_r,r,s),Hl.set(0,1),a=t.ray.intersectTriangle(po,mo,ls,!1,os),a===null))return;let l=t.ray.origin.distanceTo(os);l<t.near||l>t.far||e.push({distance:l,point:os.clone(),uv:li.getInterpolation(os,po,ls,mo,uh,Hl,fh,new nt),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}};function go(i,t,e,n,r,s){Er.subVectors(i,e).addScalar(.5).multiply(n),r!==void 0?(as.x=s*Er.x-r*Er.y,as.y=r*Er.x+s*Er.y):as.copy(Er),i.copy(t),i.x+=as.x,i.y+=as.y,i.applyMatrix4(ou)}var Dr=class extends rn{constructor(t=null,e=1,n=1,r,s,o,a,l,c=xn,h=xn,u,f){super(null,o,a,l,c,h,r,s,u,f),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var zl=new P,Uf=new P,Df=new Qt,gn=class{constructor(t=new P(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,r){return this.normal.set(t,e,n),this.constant=r,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let r=zl.subVectors(n,e).cross(Uf.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(r,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){let n=t.delta(zl),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let s=-(t.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:e.copy(t.start).addScaledVector(n,s)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||Df.getNormalMatrix(t),r=this.coplanarPoint(zl).applyMatrix4(t),s=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},zi=new Xi,Lf=new nt(.5,.5),xo=new P,Es=class{constructor(t=new gn,e=new gn,n=new gn,r=new gn,s=new gn,o=new gn){this.planes=[t,e,n,r,s,o]}set(t,e,n,r,s,o){let a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=zn,n=!1){let r=this.planes,s=t.elements,o=s[0],a=s[1],l=s[2],c=s[3],h=s[4],u=s[5],f=s[6],d=s[7],x=s[8],M=s[9],m=s[10],p=s[11],T=s[12],A=s[13],g=s[14],y=s[15];if(r[0].setComponents(c-o,d-h,p-x,y-T).normalize(),r[1].setComponents(c+o,d+h,p+x,y+T).normalize(),r[2].setComponents(c+a,d+u,p+M,y+A).normalize(),r[3].setComponents(c-a,d-u,p-M,y-A).normalize(),n)r[4].setComponents(l,f,m,g).normalize(),r[5].setComponents(c-l,d-f,p-m,y-g).normalize();else if(r[4].setComponents(c-l,d-f,p-m,y-g).normalize(),e===zn)r[5].setComponents(c+l,d+f,p+m,y+g).normalize();else if(e===ps)r[5].setComponents(l,f,m,g).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),zi.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),zi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(zi)}intersectsSprite(t){zi.center.set(0,0,0);let e=Lf.distanceTo(t.center);return zi.radius=.7071067811865476+e,zi.applyMatrix4(t.matrixWorld),this.intersectsSphere(zi)}intersectsSphere(t){let e=this.planes,n=t.center,r=-t.radius;for(let s=0;s<6;s++)if(e[s].distanceToPoint(n)<r)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let r=e[n];if(xo.x=r.normal.x>0?t.max.x:t.min.x,xo.y=r.normal.y>0?t.max.y:t.min.y,xo.z=r.normal.z>0?t.max.z:t.min.z,r.distanceToPoint(xo)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var No=class extends di{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new yt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},dh=new be,ql=new Ir,vo=new Xi,yo=new P,Lr=class extends vn{constructor(t=new Ie,e=new No){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){let n=this.geometry,r=this.matrixWorld,s=t.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),vo.copy(n.boundingSphere),vo.applyMatrix4(r),vo.radius+=s,t.ray.intersectsSphere(vo)===!1)return;dh.copy(r).invert(),ql.copy(t.ray).applyMatrix4(dh);let a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,u=n.attributes.position;if(c!==null){let f=Math.max(0,o.start),d=Math.min(c.count,o.start+o.count);for(let x=f,M=d;x<M;x++){let m=c.getX(x);yo.fromBufferAttribute(u,m),ph(yo,m,l,r,t,e,this)}}else{let f=Math.max(0,o.start),d=Math.min(u.count,o.start+o.count);for(let x=f,M=d;x<M;x++)yo.fromBufferAttribute(u,x),ph(yo,x,l,r,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let r=e[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){let a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}};function ph(i,t,e,n,r,s,o){let a=ql.distanceSqToPoint(i);if(a<e){let l=new P;ql.closestPointToPoint(i,l),l.applyMatrix4(n);let c=r.ray.origin.distanceTo(l);if(c<r.near||c>r.far)return;s.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}var Zn=class extends rn{constructor(t,e,n,r,s,o,a,l,c){super(t,e,n,r,s,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},ws=class extends rn{constructor(t,e,n=Fi,r,s,o,a=xn,l=xn,c,h=Tr,u=1){if(h!==Tr&&h!==Vr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let f={width:t,height:e,depth:u};super(f,r,s,o,a,l,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Cr(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}},As=class extends rn{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}};var wn=class i extends Ie{constructor(t=1,e=32,n=0,r=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:r},e=Math.max(3,e);let s=[],o=[],a=[],l=[],c=new P,h=new nt;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let u=0,f=3;u<=e;u++,f+=3){let d=n+u/e*r;c.x=t*Math.cos(d),c.y=t*Math.sin(d),o.push(c.x,c.y,c.z),a.push(0,0,1),h.x=(o[f]/t+1)/2,h.y=(o[f+1]/t+1)/2,l.push(h.x,h.y)}for(let u=1;u<=e;u++)s.push(u,u+1,0);this.setIndex(s),this.setAttribute("position",new Jt(o,3)),this.setAttribute("normal",new Jt(a,3)),this.setAttribute("uv",new Jt(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.segments,t.thetaStart,t.thetaLength)}},Pe=class i extends Ie{constructor(t=1,e=1,n=1,r=32,s=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:r,heightSegments:s,openEnded:o,thetaStart:a,thetaLength:l};let c=this;r=Math.floor(r),s=Math.floor(s);let h=[],u=[],f=[],d=[],x=0,M=[],m=n/2,p=0;T(),o===!1&&(t>0&&A(!0),e>0&&A(!1)),this.setIndex(h),this.setAttribute("position",new Jt(u,3)),this.setAttribute("normal",new Jt(f,3)),this.setAttribute("uv",new Jt(d,2));function T(){let g=new P,y=new P,v=0,E=(e-t)/n;for(let R=0;R<=s;R++){let b=[],w=R/s,I=w*(e-t)+t;for(let L=0;L<=r;L++){let k=L/r,O=k*l+a,X=Math.sin(O),z=Math.cos(O);y.x=I*X,y.y=-w*n+m,y.z=I*z,u.push(y.x,y.y,y.z),g.set(X,E,z).normalize(),f.push(g.x,g.y,g.z),d.push(k,1-w),b.push(x++)}M.push(b)}for(let R=0;R<r;R++)for(let b=0;b<s;b++){let w=M[b][R],I=M[b+1][R],L=M[b+1][R+1],k=M[b][R+1];(t>0||b!==0)&&(h.push(w,I,k),v+=3),(e>0||b!==s-1)&&(h.push(I,L,k),v+=3)}c.addGroup(p,v,0),p+=v}function A(g){let y=x,v=new nt,E=new P,R=0,b=g===!0?t:e,w=g===!0?1:-1;for(let L=1;L<=r;L++)u.push(0,m*w,0),f.push(0,w,0),d.push(.5,.5),x++;let I=x;for(let L=0;L<=r;L++){let O=L/r*l+a,X=Math.cos(O),z=Math.sin(O);E.x=b*z,E.y=m*w,E.z=b*X,u.push(E.x,E.y,E.z),f.push(0,w,0),v.x=X*.5+.5,v.y=z*.5*w+.5,d.push(v.x,v.y),x++}for(let L=0;L<r;L++){let k=y+L,O=I+L;g===!0?h.push(O,O+1,k):h.push(O+1,O,k),R+=3}c.addGroup(p,R,g===!0?1:2),p+=R}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Ki=class i extends Pe{constructor(t=1,e=1,n=32,r=1,s=!1,o=0,a=Math.PI*2){super(0,t,e,n,r,s,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:r,openEnded:s,thetaStart:o,thetaLength:a}}static fromJSON(t){return new i(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Bo=class i extends Ie{constructor(t=[],e=[],n=1,r=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:r};let s=[],o=[];a(r),c(n),h(),this.setAttribute("position",new Jt(s,3)),this.setAttribute("normal",new Jt(s.slice(),3)),this.setAttribute("uv",new Jt(o,2)),r===0?this.computeVertexNormals():this.normalizeNormals();function a(T){let A=new P,g=new P,y=new P;for(let v=0;v<e.length;v+=3)d(e[v+0],A),d(e[v+1],g),d(e[v+2],y),l(A,g,y,T)}function l(T,A,g,y){let v=y+1,E=[];for(let R=0;R<=v;R++){E[R]=[];let b=T.clone().lerp(g,R/v),w=A.clone().lerp(g,R/v),I=v-R;for(let L=0;L<=I;L++)L===0&&R===v?E[R][L]=b:E[R][L]=b.clone().lerp(w,L/I)}for(let R=0;R<v;R++)for(let b=0;b<2*(v-R)-1;b++){let w=Math.floor(b/2);b%2===0?(f(E[R][w+1]),f(E[R+1][w]),f(E[R][w])):(f(E[R][w+1]),f(E[R+1][w+1]),f(E[R+1][w]))}}function c(T){let A=new P;for(let g=0;g<s.length;g+=3)A.x=s[g+0],A.y=s[g+1],A.z=s[g+2],A.normalize().multiplyScalar(T),s[g+0]=A.x,s[g+1]=A.y,s[g+2]=A.z}function h(){let T=new P;for(let A=0;A<s.length;A+=3){T.x=s[A+0],T.y=s[A+1],T.z=s[A+2];let g=m(T)/2/Math.PI+.5,y=p(T)/Math.PI+.5;o.push(g,1-y)}x(),u()}function u(){for(let T=0;T<o.length;T+=6){let A=o[T+0],g=o[T+2],y=o[T+4],v=Math.max(A,g,y),E=Math.min(A,g,y);v>.9&&E<.1&&(A<.2&&(o[T+0]+=1),g<.2&&(o[T+2]+=1),y<.2&&(o[T+4]+=1))}}function f(T){s.push(T.x,T.y,T.z)}function d(T,A){let g=T*3;A.x=t[g+0],A.y=t[g+1],A.z=t[g+2]}function x(){let T=new P,A=new P,g=new P,y=new P,v=new nt,E=new nt,R=new nt;for(let b=0,w=0;b<s.length;b+=9,w+=6){T.set(s[b+0],s[b+1],s[b+2]),A.set(s[b+3],s[b+4],s[b+5]),g.set(s[b+6],s[b+7],s[b+8]),v.set(o[w+0],o[w+1]),E.set(o[w+2],o[w+3]),R.set(o[w+4],o[w+5]),y.copy(T).add(A).add(g).divideScalar(3);let I=m(y);M(v,w+0,T,I),M(E,w+2,A,I),M(R,w+4,g,I)}}function M(T,A,g,y){y<0&&T.x===1&&(o[A]=T.x-1),g.x===0&&g.z===0&&(o[A]=y/2/Math.PI+.5)}function m(T){return Math.atan2(T.z,-T.x)}function p(T){return Math.atan2(-T.y,Math.sqrt(T.x*T.x+T.z*T.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.vertices,t.indices,t.radius,t.details)}};var An=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){console.warn("THREE.Curve: .getPoint() not implemented.")}getPointAt(t,e){let n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],n,r=this.getPoint(0),s=0;e.push(0);for(let o=1;o<=t;o++)n=this.getPoint(o/t),s+=n.distanceTo(r),e.push(s),r=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){let n=this.getLengths(),r=0,s=n.length,o;e?o=e:o=t*n[s-1];let a=0,l=s-1,c;for(;a<=l;)if(r=Math.floor(a+(l-a)/2),c=n[r]-o,c<0)a=r+1;else if(c>0)l=r-1;else{l=r;break}if(r=l,n[r]===o)return r/(s-1);let h=n[r],f=n[r+1]-h,d=(o-h)/f;return(r+d)/(s-1)}getTangent(t,e){let r=t-1e-4,s=t+1e-4;r<0&&(r=0),s>1&&(s=1);let o=this.getPoint(r),a=this.getPoint(s),l=e||(o.isVector2?new nt:new P);return l.copy(a).sub(o).normalize(),l}getTangentAt(t,e){let n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e=!1){let n=new P,r=[],s=[],o=[],a=new P,l=new be;for(let d=0;d<=t;d++){let x=d/t;r[d]=this.getTangentAt(x,new P)}s[0]=new P,o[0]=new P;let c=Number.MAX_VALUE,h=Math.abs(r[0].x),u=Math.abs(r[0].y),f=Math.abs(r[0].z);h<=c&&(c=h,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),f<=c&&n.set(0,0,1),a.crossVectors(r[0],n).normalize(),s[0].crossVectors(r[0],a),o[0].crossVectors(r[0],s[0]);for(let d=1;d<=t;d++){if(s[d]=s[d-1].clone(),o[d]=o[d-1].clone(),a.crossVectors(r[d-1],r[d]),a.length()>Number.EPSILON){a.normalize();let x=Math.acos(re(r[d-1].dot(r[d]),-1,1));s[d].applyMatrix4(l.makeRotationAxis(a,x))}o[d].crossVectors(r[d],s[d])}if(e===!0){let d=Math.acos(re(s[0].dot(s[t]),-1,1));d/=t,r[0].dot(a.crossVectors(s[0],s[t]))>0&&(d=-d);for(let x=1;x<=t;x++)s[x].applyMatrix4(l.makeRotationAxis(r[x],d*x)),o[x].crossVectors(r[x],s[x])}return{tangents:r,normals:s,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){let t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}},Nr=class extends An{constructor(t=0,e=0,n=1,r=1,s=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=r,this.aStartAngle=s,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(t,e=new nt){let n=e,r=Math.PI*2,s=this.aEndAngle-this.aStartAngle,o=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=r;for(;s>r;)s-=r;s<Number.EPSILON&&(o?s=0:s=r),this.aClockwise===!0&&!o&&(s===r?s=-r:s=s-r);let a=this.aStartAngle+t*s,l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),f=l-this.aX,d=c-this.aY;l=f*h-d*u+this.aX,c=f*u+d*h+this.aY}return n.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},Oo=class extends Nr{constructor(t,e,n,r,s,o){super(t,e,n,n,r,s,o),this.isArcCurve=!0,this.type="ArcCurve"}};function vc(){let i=0,t=0,e=0,n=0;function r(s,o,a,l){i=s,t=a,e=-3*s+3*o-2*a-l,n=2*s-2*o+a+l}return{initCatmullRom:function(s,o,a,l,c){r(o,a,c*(a-s),c*(l-o))},initNonuniformCatmullRom:function(s,o,a,l,c,h,u){let f=(o-s)/c-(a-s)/(c+h)+(a-o)/h,d=(a-o)/h-(l-o)/(h+u)+(l-a)/u;f*=h,d*=h,r(o,a,f,d)},calc:function(s){let o=s*s,a=o*s;return i+t*s+e*o+n*a}}}var Mo=new P,kl=new vc,Gl=new vc,Vl=new vc,Ho=class extends An{constructor(t=[],e=!1,n="centripetal",r=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=r}getPoint(t,e=new P){let n=e,r=this.points,s=r.length,o=(s-(this.closed?0:1))*t,a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/s)+1)*s:l===0&&a===s-1&&(a=s-2,l=1);let c,h;this.closed||a>0?c=r[(a-1)%s]:(Mo.subVectors(r[0],r[1]).add(r[0]),c=Mo);let u=r[a%s],f=r[(a+1)%s];if(this.closed||a+2<s?h=r[(a+2)%s]:(Mo.subVectors(r[s-1],r[s-2]).add(r[s-1]),h=Mo),this.curveType==="centripetal"||this.curveType==="chordal"){let d=this.curveType==="chordal"?.5:.25,x=Math.pow(c.distanceToSquared(u),d),M=Math.pow(u.distanceToSquared(f),d),m=Math.pow(f.distanceToSquared(h),d);M<1e-4&&(M=1),x<1e-4&&(x=M),m<1e-4&&(m=M),kl.initNonuniformCatmullRom(c.x,u.x,f.x,h.x,x,M,m),Gl.initNonuniformCatmullRom(c.y,u.y,f.y,h.y,x,M,m),Vl.initNonuniformCatmullRom(c.z,u.z,f.z,h.z,x,M,m)}else this.curveType==="catmullrom"&&(kl.initCatmullRom(c.x,u.x,f.x,h.x,this.tension),Gl.initCatmullRom(c.y,u.y,f.y,h.y,this.tension),Vl.initCatmullRom(c.z,u.z,f.z,h.z,this.tension));return n.set(kl.calc(l),Gl.calc(l),Vl.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let r=t.points[e];this.points.push(r.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let r=this.points[e];t.points.push(r.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let r=t.points[e];this.points.push(new P().fromArray(r))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function mh(i,t,e,n,r){let s=(n-t)*.5,o=(r-e)*.5,a=i*i,l=i*a;return(2*e-2*n+s+o)*l+(-3*e+3*n-2*s-o)*a+s*i+e}function Nf(i,t){let e=1-i;return e*e*t}function Bf(i,t){return 2*(1-i)*i*t}function Of(i,t){return i*i*t}function hs(i,t,e,n){return Nf(i,t)+Bf(i,e)+Of(i,n)}function Hf(i,t){let e=1-i;return e*e*e*t}function zf(i,t){let e=1-i;return 3*e*e*i*t}function kf(i,t){return 3*(1-i)*i*i*t}function Gf(i,t){return i*i*i*t}function us(i,t,e,n,r){return Hf(i,t)+zf(i,e)+kf(i,n)+Gf(i,r)}var Ts=class extends An{constructor(t=new nt,e=new nt,n=new nt,r=new nt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=r}getPoint(t,e=new nt){let n=e,r=this.v0,s=this.v1,o=this.v2,a=this.v3;return n.set(us(t,r.x,s.x,o.x,a.x),us(t,r.y,s.y,o.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},zo=class extends An{constructor(t=new P,e=new P,n=new P,r=new P){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=r}getPoint(t,e=new P){let n=e,r=this.v0,s=this.v1,o=this.v2,a=this.v3;return n.set(us(t,r.x,s.x,o.x,a.x),us(t,r.y,s.y,o.y,a.y),us(t,r.z,s.z,o.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Rs=class extends An{constructor(t=new nt,e=new nt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new nt){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new nt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},ko=class extends An{constructor(t=new P,e=new P){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new P){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new P){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Cs=class extends An{constructor(t=new nt,e=new nt,n=new nt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new nt){let n=e,r=this.v0,s=this.v1,o=this.v2;return n.set(hs(t,r.x,s.x,o.x),hs(t,r.y,s.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Go=class extends An{constructor(t=new P,e=new P,n=new P){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new P){let n=e,r=this.v0,s=this.v1,o=this.v2;return n.set(hs(t,r.x,s.x,o.x),hs(t,r.y,s.y,o.y),hs(t,r.z,s.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Is=class extends An{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new nt){let n=e,r=this.points,s=(r.length-1)*t,o=Math.floor(s),a=s-o,l=r[o===0?o:o-1],c=r[o],h=r[o>r.length-2?r.length-1:o+1],u=r[o>r.length-3?r.length-1:o+2];return n.set(mh(a,l.x,c.x,h.x,u.x),mh(a,l.y,c.y,h.y,u.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let r=t.points[e];this.points.push(r.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let r=this.points[e];t.points.push(r.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let r=t.points[e];this.points.push(new nt().fromArray(r))}return this}},gh=Object.freeze({__proto__:null,ArcCurve:Oo,CatmullRomCurve3:Ho,CubicBezierCurve:Ts,CubicBezierCurve3:zo,EllipseCurve:Nr,LineCurve:Rs,LineCurve3:ko,QuadraticBezierCurve:Cs,QuadraticBezierCurve3:Go,SplineCurve:Is}),Vo=class extends An{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){let t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){let n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new gh[n](e,t))}return this}getPoint(t,e){let n=t*this.getLength(),r=this.getCurveLengths(),s=0;for(;s<r.length;){if(r[s]>=n){let o=r[s]-n,a=this.curves[s],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,e)}s++}return null}getLength(){let t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let t=[],e=0;for(let n=0,r=this.curves.length;n<r;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){let e=[],n;for(let r=0,s=this.curves;r<s.length;r++){let o=s[r],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,l=o.getPoints(a);for(let c=0;c<l.length;c++){let h=l[c];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let r=t.curves[e];this.curves.push(r.clone())}return this.autoClose=t.autoClose,this}toJSON(){let t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){let r=this.curves[e];t.curves.push(r.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let r=t.curves[e];this.curves.push(new gh[r.type]().fromJSON(r))}return this}},Ps=class extends Vo{constructor(t){super(),this.type="Path",this.currentPoint=new nt,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){let n=new Rs(this.currentPoint.clone(),new nt(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,r){let s=new Cs(this.currentPoint.clone(),new nt(t,e),new nt(n,r));return this.curves.push(s),this.currentPoint.set(n,r),this}bezierCurveTo(t,e,n,r,s,o){let a=new Ts(this.currentPoint.clone(),new nt(t,e),new nt(n,r),new nt(s,o));return this.curves.push(a),this.currentPoint.set(s,o),this}splineThru(t){let e=[this.currentPoint.clone()].concat(t),n=new Is(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,r,s,o){let a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+a,e+l,n,r,s,o),this}absarc(t,e,n,r,s,o){return this.absellipse(t,e,n,n,r,s,o),this}ellipse(t,e,n,r,s,o,a,l){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+c,e+h,n,r,s,o,a,l),this}absellipse(t,e,n,r,s,o,a,l){let c=new Nr(t,e,n,r,s,o,a,l);if(this.curves.length>0){let u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){let t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}},Br=class extends Ps{constructor(t){super(t),this.uuid=ci(),this.type="Shape",this.holes=[]}getPointsHoles(t){let e=[];for(let n=0,r=this.holes.length;n<r;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let r=t.holes[e];this.holes.push(r.clone())}return this}toJSON(){let t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){let r=this.holes[e];t.holes.push(r.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let r=t.holes[e];this.holes.push(new Ps().fromJSON(r))}return this}};function Vf(i,t,e=2){let n=t&&t.length,r=n?t[0]*e:i.length,s=au(i,0,r,e,!0),o=[];if(!s||s.next===s.prev)return o;let a,l,c;if(n&&(s=qf(i,t,s,e)),i.length>80*e){a=1/0,l=1/0;let h=-1/0,u=-1/0;for(let f=e;f<r;f+=e){let d=i[f],x=i[f+1];d<a&&(a=d),x<l&&(l=x),d>h&&(h=d),x>u&&(u=x)}c=Math.max(h-a,u-l),c=c!==0?32767/c:0}return Fs(s,o,e,a,l,c,0),o}function au(i,t,e,n,r){let s;if(r===sd(i,t,e,n)>0)for(let o=t;o<e;o+=n)s=xh(o/n|0,i[o],i[o+1],s);else for(let o=e-n;o>=t;o-=n)s=xh(o/n|0,i[o],i[o+1],s);return s&&Or(s,s.next)&&(Ds(s),s=s.next),s}function ji(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(Or(e,e.next)||He(e.prev,e,e.next)===0)){if(Ds(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function Fs(i,t,e,n,r,s,o){if(!i)return;!o&&s&&$f(i,n,r,s);let a=i;for(;i.prev!==i.next;){let l=i.prev,c=i.next;if(s?Xf(i,n,r,s):Wf(i)){t.push(l.i,i.i,c.i),Ds(i),i=c.next,a=c.next;continue}if(i=c,i===a){o?o===1?(i=Kf(ji(i),t),Fs(i,t,e,n,r,s,2)):o===2&&jf(i,t,e,n,r,s):Fs(ji(i),t,e,n,r,s,1);break}}}function Wf(i){let t=i.prev,e=i,n=i.next;if(He(t,e,n)>=0)return!1;let r=t.x,s=e.x,o=n.x,a=t.y,l=e.y,c=n.y,h=Math.min(r,s,o),u=Math.min(a,l,c),f=Math.max(r,s,o),d=Math.max(a,l,c),x=n.next;for(;x!==t;){if(x.x>=h&&x.x<=f&&x.y>=u&&x.y<=d&&cs(r,a,s,l,o,c,x.x,x.y)&&He(x.prev,x,x.next)>=0)return!1;x=x.next}return!0}function Xf(i,t,e,n){let r=i.prev,s=i,o=i.next;if(He(r,s,o)>=0)return!1;let a=r.x,l=s.x,c=o.x,h=r.y,u=s.y,f=o.y,d=Math.min(a,l,c),x=Math.min(h,u,f),M=Math.max(a,l,c),m=Math.max(h,u,f),p=Jl(d,x,t,e,n),T=Jl(M,m,t,e,n),A=i.prevZ,g=i.nextZ;for(;A&&A.z>=p&&g&&g.z<=T;){if(A.x>=d&&A.x<=M&&A.y>=x&&A.y<=m&&A!==r&&A!==o&&cs(a,h,l,u,c,f,A.x,A.y)&&He(A.prev,A,A.next)>=0||(A=A.prevZ,g.x>=d&&g.x<=M&&g.y>=x&&g.y<=m&&g!==r&&g!==o&&cs(a,h,l,u,c,f,g.x,g.y)&&He(g.prev,g,g.next)>=0))return!1;g=g.nextZ}for(;A&&A.z>=p;){if(A.x>=d&&A.x<=M&&A.y>=x&&A.y<=m&&A!==r&&A!==o&&cs(a,h,l,u,c,f,A.x,A.y)&&He(A.prev,A,A.next)>=0)return!1;A=A.prevZ}for(;g&&g.z<=T;){if(g.x>=d&&g.x<=M&&g.y>=x&&g.y<=m&&g!==r&&g!==o&&cs(a,h,l,u,c,f,g.x,g.y)&&He(g.prev,g,g.next)>=0)return!1;g=g.nextZ}return!0}function Kf(i,t){let e=i;do{let n=e.prev,r=e.next.next;!Or(n,r)&&cu(n,e,e.next,r)&&Us(n,r)&&Us(r,n)&&(t.push(n.i,e.i,r.i),Ds(e),Ds(e.next),e=i=r),e=e.next}while(e!==i);return ji(e)}function jf(i,t,e,n,r,s){let o=i;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&nd(o,a)){let l=hu(o,a);o=ji(o,o.next),l=ji(l,l.next),Fs(o,t,e,n,r,s,0),Fs(l,t,e,n,r,s,0);return}a=a.next}o=o.next}while(o!==i)}function qf(i,t,e,n){let r=[];for(let s=0,o=t.length;s<o;s++){let a=t[s]*n,l=s<o-1?t[s+1]*n:i.length,c=au(i,a,l,n,!1);c===c.next&&(c.steiner=!0),r.push(ed(c))}r.sort(Jf);for(let s=0;s<r.length;s++)e=Yf(r[s],e);return e}function Jf(i,t){let e=i.x-t.x;if(e===0&&(e=i.y-t.y,e===0)){let n=(i.next.y-i.y)/(i.next.x-i.x),r=(t.next.y-t.y)/(t.next.x-t.x);e=n-r}return e}function Yf(i,t){let e=Zf(i,t);if(!e)return t;let n=hu(e,i);return ji(n,n.next),ji(e,e.next)}function Zf(i,t){let e=t,n=i.x,r=i.y,s=-1/0,o;if(Or(i,e))return e;do{if(Or(i,e.next))return e.next;if(r<=e.y&&r>=e.next.y&&e.next.y!==e.y){let u=e.x+(r-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(u<=n&&u>s&&(s=u,o=e.x<e.next.x?e:e.next,u===n))return o}e=e.next}while(e!==t);if(!o)return null;let a=o,l=o.x,c=o.y,h=1/0;e=o;do{if(n>=e.x&&e.x>=l&&n!==e.x&&lu(r<c?n:s,r,l,c,r<c?s:n,r,e.x,e.y)){let u=Math.abs(r-e.y)/(n-e.x);Us(e,i)&&(u<h||u===h&&(e.x>o.x||e.x===o.x&&Qf(o,e)))&&(o=e,h=u)}e=e.next}while(e!==a);return o}function Qf(i,t){return He(i.prev,i,t.prev)<0&&He(t.next,i,i.next)<0}function $f(i,t,e,n){let r=i;do r.z===0&&(r.z=Jl(r.x,r.y,t,e,n)),r.prevZ=r.prev,r.nextZ=r.next,r=r.next;while(r!==i);r.prevZ.nextZ=null,r.prevZ=null,td(r)}function td(i){let t,e=1;do{let n=i,r;i=null;let s=null;for(t=0;n;){t++;let o=n,a=0;for(let c=0;c<e&&(a++,o=o.nextZ,!!o);c++);let l=e;for(;a>0||l>0&&o;)a!==0&&(l===0||!o||n.z<=o.z)?(r=n,n=n.nextZ,a--):(r=o,o=o.nextZ,l--),s?s.nextZ=r:i=r,r.prevZ=s,s=r;n=o}s.nextZ=null,e*=2}while(t>1);return i}function Jl(i,t,e,n,r){return i=(i-e)*r|0,t=(t-n)*r|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function ed(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function lu(i,t,e,n,r,s,o,a){return(r-o)*(t-a)>=(i-o)*(s-a)&&(i-o)*(n-a)>=(e-o)*(t-a)&&(e-o)*(s-a)>=(r-o)*(n-a)}function cs(i,t,e,n,r,s,o,a){return!(i===o&&t===a)&&lu(i,t,e,n,r,s,o,a)}function nd(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!id(i,t)&&(Us(i,t)&&Us(t,i)&&rd(i,t)&&(He(i.prev,i,t.prev)||He(i,t.prev,t))||Or(i,t)&&He(i.prev,i,i.next)>0&&He(t.prev,t,t.next)>0)}function He(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function Or(i,t){return i.x===t.x&&i.y===t.y}function cu(i,t,e,n){let r=_o(He(i,t,e)),s=_o(He(i,t,n)),o=_o(He(e,n,i)),a=_o(He(e,n,t));return!!(r!==s&&o!==a||r===0&&So(i,e,t)||s===0&&So(i,n,t)||o===0&&So(e,i,n)||a===0&&So(e,t,n))}function So(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function _o(i){return i>0?1:i<0?-1:0}function id(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&cu(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function Us(i,t){return He(i.prev,i,i.next)<0?He(i,t,i.next)>=0&&He(i,i.prev,t)>=0:He(i,t,i.prev)<0||He(i,i.next,t)<0}function rd(i,t){let e=i,n=!1,r=(i.x+t.x)/2,s=(i.y+t.y)/2;do e.y>s!=e.next.y>s&&e.next.y!==e.y&&r<(e.next.x-e.x)*(s-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function hu(i,t){let e=Yl(i.i,i.x,i.y),n=Yl(t.i,t.x,t.y),r=i.next,s=t.prev;return i.next=t,t.prev=i,e.next=r,r.prev=e,n.next=e,e.prev=n,s.next=n,n.prev=s,n}function xh(i,t,e,n){let r=Yl(i,t,e);return n?(r.next=n.next,r.prev=n,n.next.prev=r,n.next=r):(r.prev=r,r.next=r),r}function Ds(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function Yl(i,t,e){return{i,x:t,y:e,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function sd(i,t,e,n){let r=0;for(let s=t,o=e-n;s<e;s+=n)r+=(i[o]-i[s])*(i[s+1]+i[o+1]),o=s;return r}var Zl=class{static triangulate(t,e,n=2){return Vf(t,e,n)}},Ar=class i{static area(t){let e=t.length,n=0;for(let r=e-1,s=0;s<e;r=s++)n+=t[r].x*t[s].y-t[s].x*t[r].y;return n*.5}static isClockWise(t){return i.area(t)<0}static triangulateShape(t,e){let n=[],r=[],s=[];vh(t),yh(n,t);let o=t.length;e.forEach(vh);for(let l=0;l<e.length;l++)r.push(o),o+=e[l].length,yh(n,e[l]);let a=Zl.triangulate(n,r);for(let l=0;l<a.length;l+=3)s.push(a.slice(l,l+3));return s}};function vh(i){let t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function yh(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}var Ri=class i extends Bo{constructor(t=1,e=0){let n=(1+Math.sqrt(5))/2,r=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],s=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(r,s,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new i(t.radius,t.detail)}},pi=class i extends Ie{constructor(t=[new nt(0,-.5),new nt(.5,0),new nt(0,.5)],e=12,n=0,r=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:r},e=Math.floor(e),r=re(r,0,Math.PI*2);let s=[],o=[],a=[],l=[],c=[],h=1/e,u=new P,f=new nt,d=new P,x=new P,M=new P,m=0,p=0;for(let T=0;T<=t.length-1;T++)switch(T){case 0:m=t[T+1].x-t[T].x,p=t[T+1].y-t[T].y,d.x=p*1,d.y=-m,d.z=p*0,M.copy(d),d.normalize(),l.push(d.x,d.y,d.z);break;case t.length-1:l.push(M.x,M.y,M.z);break;default:m=t[T+1].x-t[T].x,p=t[T+1].y-t[T].y,d.x=p*1,d.y=-m,d.z=p*0,x.copy(d),d.x+=M.x,d.y+=M.y,d.z+=M.z,d.normalize(),l.push(d.x,d.y,d.z),M.copy(x)}for(let T=0;T<=e;T++){let A=n+T*h*r,g=Math.sin(A),y=Math.cos(A);for(let v=0;v<=t.length-1;v++){u.x=t[v].x*g,u.y=t[v].y,u.z=t[v].x*y,o.push(u.x,u.y,u.z),f.x=T/e,f.y=v/(t.length-1),a.push(f.x,f.y);let E=l[3*v+0]*g,R=l[3*v+1],b=l[3*v+0]*y;c.push(E,R,b)}}for(let T=0;T<e;T++)for(let A=0;A<t.length-1;A++){let g=A+T*t.length,y=g,v=g+t.length,E=g+t.length+1,R=g+1;s.push(y,v,R),s.push(E,R,v)}this.setIndex(s),this.setAttribute("position",new Jt(o,3)),this.setAttribute("uv",new Jt(a,2)),this.setAttribute("normal",new Jt(c,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.points,t.segments,t.phiStart,t.phiLength)}};var yn=class i extends Ie{constructor(t=1,e=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:r};let s=t/2,o=e/2,a=Math.floor(n),l=Math.floor(r),c=a+1,h=l+1,u=t/a,f=e/l,d=[],x=[],M=[],m=[];for(let p=0;p<h;p++){let T=p*f-o;for(let A=0;A<c;A++){let g=A*u-s;x.push(g,-T,0),M.push(0,0,1),m.push(A/a),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let T=0;T<a;T++){let A=T+c*p,g=T+c*(p+1),y=T+1+c*(p+1),v=T+1+c*p;d.push(A,g,v),d.push(g,y,v)}this.setIndex(d),this.setAttribute("position",new Jt(x,3)),this.setAttribute("normal",new Jt(M,3)),this.setAttribute("uv",new Jt(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.widthSegments,t.heightSegments)}},qi=class i extends Ie{constructor(t=.5,e=1,n=32,r=1,s=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:r,thetaStart:s,thetaLength:o},n=Math.max(3,n),r=Math.max(1,r);let a=[],l=[],c=[],h=[],u=t,f=(e-t)/r,d=new P,x=new nt;for(let M=0;M<=r;M++){for(let m=0;m<=n;m++){let p=s+m/n*o;d.x=u*Math.cos(p),d.y=u*Math.sin(p),l.push(d.x,d.y,d.z),c.push(0,0,1),x.x=(d.x/e+1)/2,x.y=(d.y/e+1)/2,h.push(x.x,x.y)}u+=f}for(let M=0;M<r;M++){let m=M*(n+1);for(let p=0;p<n;p++){let T=p+m,A=T,g=T+n+1,y=T+n+2,v=T+1;a.push(A,g,v),a.push(g,y,v)}}this.setIndex(a),this.setAttribute("position",new Jt(l,3)),this.setAttribute("normal",new Jt(c,3)),this.setAttribute("uv",new Jt(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}},Ls=class i extends Ie{constructor(t=new Br([new nt(0,.5),new nt(-.5,-.5),new nt(.5,-.5)]),e=12){super(),this.type="ShapeGeometry",this.parameters={shapes:t,curveSegments:e};let n=[],r=[],s=[],o=[],a=0,l=0;if(Array.isArray(t)===!1)c(t);else for(let h=0;h<t.length;h++)c(t[h]),this.addGroup(a,l,h),a+=l,l=0;this.setIndex(n),this.setAttribute("position",new Jt(r,3)),this.setAttribute("normal",new Jt(s,3)),this.setAttribute("uv",new Jt(o,2));function c(h){let u=r.length/3,f=h.extractPoints(e),d=f.shape,x=f.holes;Ar.isClockWise(d)===!1&&(d=d.reverse());for(let m=0,p=x.length;m<p;m++){let T=x[m];Ar.isClockWise(T)===!0&&(x[m]=T.reverse())}let M=Ar.triangulateShape(d,x);for(let m=0,p=x.length;m<p;m++){let T=x[m];d=d.concat(T)}for(let m=0,p=d.length;m<p;m++){let T=d[m];r.push(T.x,T.y,0),s.push(0,0,1),o.push(T.x,T.y)}for(let m=0,p=M.length;m<p;m++){let T=M[m],A=T[0]+u,g=T[1]+u,y=T[2]+u;n.push(A,g,y),l+=3}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes;return od(e,t)}static fromJSON(t,e){let n=[];for(let r=0,s=t.shapes.length;r<s;r++){let o=e[t.shapes[r]];n.push(o)}return new i(n,t.curveSegments)}};function od(i,t){if(t.shapes=[],Array.isArray(i))for(let e=0,n=i.length;e<n;e++){let r=i[e];t.shapes.push(r.uuid)}else t.shapes.push(i.uuid);return t}var pn=class i extends Ie{constructor(t=1,e=32,n=16,r=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:r,phiLength:s,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let l=Math.min(o+a,Math.PI),c=0,h=[],u=new P,f=new P,d=[],x=[],M=[],m=[];for(let p=0;p<=n;p++){let T=[],A=p/n,g=0;p===0&&o===0?g=.5/e:p===n&&l===Math.PI&&(g=-.5/e);for(let y=0;y<=e;y++){let v=y/e;u.x=-t*Math.cos(r+v*s)*Math.sin(o+A*a),u.y=t*Math.cos(o+A*a),u.z=t*Math.sin(r+v*s)*Math.sin(o+A*a),x.push(u.x,u.y,u.z),f.copy(u).normalize(),M.push(f.x,f.y,f.z),m.push(v+g,1-A),T.push(c++)}h.push(T)}for(let p=0;p<n;p++)for(let T=0;T<e;T++){let A=h[p][T+1],g=h[p][T],y=h[p+1][T],v=h[p+1][T+1];(p!==0||o>0)&&d.push(A,g,v),(p!==n-1||l<Math.PI)&&d.push(g,y,v)}this.setIndex(d),this.setAttribute("position",new Jt(x,3)),this.setAttribute("normal",new Jt(M,3)),this.setAttribute("uv",new Jt(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var Tn=class i extends Ie{constructor(t=1,e=.4,n=12,r=48,s=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:r,arc:s},n=Math.floor(n),r=Math.floor(r);let o=[],a=[],l=[],c=[],h=new P,u=new P,f=new P;for(let d=0;d<=n;d++)for(let x=0;x<=r;x++){let M=x/r*s,m=d/n*Math.PI*2;u.x=(t+e*Math.cos(m))*Math.cos(M),u.y=(t+e*Math.cos(m))*Math.sin(M),u.z=e*Math.sin(m),a.push(u.x,u.y,u.z),h.x=t*Math.cos(M),h.y=t*Math.sin(M),f.subVectors(u,h).normalize(),l.push(f.x,f.y,f.z),c.push(x/r),c.push(d/n)}for(let d=1;d<=n;d++)for(let x=1;x<=r;x++){let M=(r+1)*d+x-1,m=(r+1)*(d-1)+x-1,p=(r+1)*(d-1)+x,T=(r+1)*d+x;o.push(M,m,T),o.push(m,p,T)}this.setIndex(o),this.setAttribute("position",new Jt(a,3)),this.setAttribute("normal",new Jt(l,3)),this.setAttribute("uv",new Jt(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}};var Ns=class extends _e{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}};var Wo=class extends di{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Kh,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},Xo=class extends di{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function bo(i,t){return!i||i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function ad(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}var Ji=class{constructor(t,e,n,r){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=r!==void 0?r:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,r=e[n],s=e[n-1];n:{t:{let o;e:{i:if(!(t<r)){for(let a=n+2;;){if(r===void 0){if(t<s)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(s=r,r=e[++n],t<r)break t}o=e.length;break e}if(!(t>=s)){let a=e[1];t<a&&(n=2,s=a);for(let l=n-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(r=s,s=e[--n-1],t>=s)break t}o=n,n=0;break e}break n}for(;n<o;){let a=n+o>>>1;t<e[a]?o=a:n=a+1}if(r=e[n],s=e[n-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,s,r)}return this.interpolate_(n,s,t,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,r=this.valueSize,s=t*r;for(let o=0;o!==r;++o)e[o]=n[s+o];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},Ko=class extends Ji{constructor(t,e,n,r){super(t,e,n,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Wl,endingEnd:Wl}}intervalChanged_(t,e,n){let r=this.parameterPositions,s=t-2,o=t+1,a=r[s],l=r[o];if(a===void 0)switch(this.getSettings_().endingStart){case Xl:s=t,a=2*e-n;break;case Kl:s=r.length-2,a=e+r[s]-r[s+1];break;default:s=t,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Xl:o=t,l=2*n-e;break;case Kl:o=1,l=n+r[1]-r[0];break;default:o=t-1,l=e}let c=(n-e)*.5,h=this.valueSize;this._weightPrev=c/(e-a),this._weightNext=c/(l-n),this._offsetPrev=s*h,this._offsetNext=o*h}interpolate_(t,e,n,r){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=this._offsetPrev,u=this._offsetNext,f=this._weightPrev,d=this._weightNext,x=(n-e)/(r-e),M=x*x,m=M*x,p=-f*m+2*f*M-f*x,T=(1+f)*m+(-1.5-2*f)*M+(-.5+f)*x+1,A=(-1-d)*m+(1.5+d)*M+.5*x,g=d*m-d*M;for(let y=0;y!==a;++y)s[y]=p*o[h+y]+T*o[c+y]+A*o[l+y]+g*o[u+y];return s}},jo=class extends Ji{constructor(t,e,n,r){super(t,e,n,r)}interpolate_(t,e,n,r){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=(n-e)/(r-e),u=1-h;for(let f=0;f!==a;++f)s[f]=o[c+f]*u+o[l+f]*h;return s}},qo=class extends Ji{constructor(t,e,n,r){super(t,e,n,r)}interpolate_(t){return this.copySampleValue_(t-1)}},Rn=class{constructor(t,e,n,r){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=bo(e,this.TimeBufferType),this.values=bo(n,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:bo(t.times,Array),values:bo(t.values,Array)};let r=t.getInterpolation();r!==t.DefaultInterpolation&&(n.interpolation=r)}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new qo(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new jo(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new Ko(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case fs:e=this.InterpolantFactoryMethodDiscrete;break;case Ro:e=this.InterpolantFactoryMethodLinear;break;case Eo:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return fs;case this.InterpolantFactoryMethodLinear:return Ro;case this.InterpolantFactoryMethodSmooth:return Eo}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,r=e.length;n!==r;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,r=e.length;n!==r;++n)e[n]*=t}return this}trim(t,e){let n=this.times,r=n.length,s=0,o=r-1;for(;s!==r&&n[s]<t;)++s;for(;o!==-1&&n[o]>e;)--o;if(++o,s!==0||o!==r){s>=o&&(o=Math.max(o,1),s=o-1);let a=this.getValueSize();this.times=n.slice(s,o),this.values=this.values.slice(s*a,o*a)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,r=this.values,s=n.length;s===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==s;a++){let l=n[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),t=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),t=!1;break}o=l}if(r!==void 0&&ad(r))for(let a=0,l=r.length;a!==l;++a){let c=r[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),r=this.getInterpolation()===Eo,s=t.length-1,o=1;for(let a=1;a<s;++a){let l=!1,c=t[a],h=t[a+1];if(c!==h&&(a!==1||c!==t[0]))if(r)l=!0;else{let u=a*n,f=u-n,d=u+n;for(let x=0;x!==n;++x){let M=e[u+x];if(M!==e[f+x]||M!==e[d+x]){l=!0;break}}}if(l){if(a!==o){t[o]=t[a];let u=a*n,f=o*n;for(let d=0;d!==n;++d)e[f+d]=e[u+d]}++o}}if(s>0){t[o]=t[s];for(let a=s*n,l=o*n,c=0;c!==n;++c)e[l+c]=e[a+c];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,r=new n(this.name,t,e);return r.createInterpolant=this.createInterpolant,r}};Rn.prototype.ValueTypeName="";Rn.prototype.TimeBufferType=Float32Array;Rn.prototype.ValueBufferType=Float32Array;Rn.prototype.DefaultInterpolation=Ro;var Ci=class extends Rn{constructor(t,e,n){super(t,e,n)}};Ci.prototype.ValueTypeName="bool";Ci.prototype.ValueBufferType=Array;Ci.prototype.DefaultInterpolation=fs;Ci.prototype.InterpolantFactoryMethodLinear=void 0;Ci.prototype.InterpolantFactoryMethodSmooth=void 0;var Jo=class extends Rn{constructor(t,e,n,r){super(t,e,n,r)}};Jo.prototype.ValueTypeName="color";var Yo=class extends Rn{constructor(t,e,n,r){super(t,e,n,r)}};Yo.prototype.ValueTypeName="number";var Zo=class extends Ji{constructor(t,e,n,r){super(t,e,n,r)}interpolate_(t,e,n,r){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-e)/(r-e),c=t*a;for(let h=c+a;c!==h;c+=4)Dn.slerpFlat(s,0,o,c-a,o,c,l);return s}},Bs=class extends Rn{constructor(t,e,n,r){super(t,e,n,r)}InterpolantFactoryMethodLinear(t){return new Zo(this.times,this.values,this.getValueSize(),t)}};Bs.prototype.ValueTypeName="quaternion";Bs.prototype.InterpolantFactoryMethodSmooth=void 0;var Ii=class extends Rn{constructor(t,e,n){super(t,e,n)}};Ii.prototype.ValueTypeName="string";Ii.prototype.ValueBufferType=Array;Ii.prototype.DefaultInterpolation=fs;Ii.prototype.InterpolantFactoryMethodLinear=void 0;Ii.prototype.InterpolantFactoryMethodSmooth=void 0;var Qo=class extends Rn{constructor(t,e,n,r){super(t,e,n,r)}};Qo.prototype.ValueTypeName="vector";var $o=class{constructor(t,e,n){let r=this,s=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.abortController=new AbortController,this.itemStart=function(h){a++,s===!1&&r.onStart!==void 0&&r.onStart(h,o,a),s=!0},this.itemEnd=function(h){o++,r.onProgress!==void 0&&r.onProgress(h,o,a),o===a&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(h){r.onError!==void 0&&r.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){let u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,f=c.length;u<f;u+=2){let d=c[u],x=c[u+1];if(d.global&&(d.lastIndex=0),d.test(h))return x}return null},this.abort=function(){return this.abortController.abort(),this.abortController=new AbortController,this}}},uu=new $o,ta=class{constructor(t){this.manager=t!==void 0?t:uu,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){let n=this;return new Promise(function(r,s){n.load(t,r,e,s)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}};ta.DEFAULT_MATERIAL_NAME="__DEFAULT";var Hr=class extends ys{constructor(t=-1,e=1,n=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2,s=n-t,o=n+t,a=r+e,l=r-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}};var ea=class extends Qe{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}},Os=class{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let e=performance.now();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}};var yc="\\[\\]\\.:\\/",ld=new RegExp("["+yc+"]","g"),Mc="[^"+yc+"]",cd="[^"+yc.replace("\\.","")+"]",hd=/((?:WC+[\/:])*)/.source.replace("WC",Mc),ud=/(WCOD+)?/.source.replace("WCOD",cd),fd=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Mc),dd=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Mc),pd=new RegExp("^"+hd+ud+fd+dd+"$"),md=["material","materials","bones","map"],Ql=class{constructor(t,e,n){let r=n||De.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,r)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,r=this._bindings[n];r!==void 0&&r.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let r=this._targetGroup.nCachedObjects_,s=n.length;r!==s;++r)n[r].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},De=class i{constructor(t,e,n){this.path=e,this.parsedPath=n||i.parseTrackName(e),this.node=i.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new i.Composite(t,e,n):new i(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(ld,"")}static parseTrackName(t){let e=pd.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},r=n.nodeName&&n.nodeName.lastIndexOf(".");if(r!==void 0&&r!==-1){let s=n.nodeName.substring(r+1);md.indexOf(s)!==-1&&(n.nodeName=n.nodeName.substring(0,r),n.objectName=s)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(s){for(let o=0;o<s.length;o++){let a=s[o];if(a.name===e||a.uuid===e)return a;let l=n(a.children);if(l)return l}return null},r=n(t.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)t[e++]=n[r]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)n[r]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)n[r]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)n[r]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,r=e.propertyName,s=e.propertyIndex;if(t||(t=i.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=e.objectIndex;switch(n){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===c){c=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(c!==void 0){if(t[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let o=t[r];if(o===void 0){let c=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+r+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?a=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(s!==void 0){if(r==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[s]!==void 0&&(s=t.morphTargetDictionary[s])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=s}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=r;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};De.Composite=Ql;De.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};De.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};De.prototype.GetterByBindingType=[De.prototype._getValue_direct,De.prototype._getValue_array,De.prototype._getValue_arrayElement,De.prototype._getValue_toArray];De.prototype.SetterByBindingTypeAndVersioning=[[De.prototype._setValue_direct,De.prototype._setValue_direct_setNeedsUpdate,De.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[De.prototype._setValue_array,De.prototype._setValue_array_setNeedsUpdate,De.prototype._setValue_array_setMatrixWorldNeedsUpdate],[De.prototype._setValue_arrayElement,De.prototype._setValue_arrayElement_setNeedsUpdate,De.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[De.prototype._setValue_fromArray,De.prototype._setValue_fromArray_setNeedsUpdate,De.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var ax=new Float32Array(1);var Mh=new be,Hs=class{constructor(t,e,n=0,r=1/0){this.ray=new Ir(t,e),this.near=n,this.far=r,this.camera=null,this.layers=new Pr,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return Mh.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Mh),this}intersectObject(t,e=!0,n=[]){return $l(t,this,n,e),n.sort(Sh),n}intersectObjects(t,e=!0,n=[]){for(let r=0,s=t.length;r<s;r++)$l(t[r],this,n,e);return n.sort(Sh),n}};function Sh(i,t){return i.distance-t.distance}function $l(i,t,e,n){let r=!0;if(i.layers.test(t.layers)&&i.raycast(t,e)===!1&&(r=!1),r===!0&&n===!0){let s=i.children;for(let o=0,a=s.length;o<a;o++)$l(s[o],t,e,!0)}}function Sc(i,t,e,n){let r=gd(n);switch(e){case hc:return i*t;case fc:return i*t/r.components*r.byteLength;case Sa:return i*t/r.components*r.byteLength;case dc:return i*t*2/r.components*r.byteLength;case _a:return i*t*2/r.components*r.byteLength;case uc:return i*t*3/r.components*r.byteLength;case Nn:return i*t*4/r.components*r.byteLength;case ba:return i*t*4/r.components*r.byteLength;case Gs:case Vs:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Ws:case Xs:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case wa:case Ta:return Math.max(i,16)*Math.max(t,8)/4;case Ea:case Aa:return Math.max(i,8)*Math.max(t,8)/2;case Ra:case Ca:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Ia:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Pa:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Fa:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case Ua:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case Da:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case La:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case Na:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case Ba:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case Oa:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case Ha:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case za:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case ka:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case Ga:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case Va:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case Wa:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case Xa:case Ka:case ja:return Math.ceil(i/4)*Math.ceil(t/4)*16;case qa:case Ja:return Math.ceil(i/4)*Math.ceil(t/4)*8;case Ya:case Za:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function gd(i){switch(i){case $n:case oc:return{byteLength:1,components:1};case kr:case ac:case Ln:return{byteLength:2,components:1};case ya:case Ma:return{byteLength:2,components:4};case Fi:case va:case ti:return{byteLength:4,components:1};case lc:case cc:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"180"}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="180");function Lu(){let i=null,t=!1,e=null,n=null;function r(s,o){e(s,o),n=i.requestAnimationFrame(r)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(r),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(s){e=s},setContext:function(s){i=s}}}function _d(i){let t=new WeakMap;function e(a,l){let c=a.array,h=a.usage,u=c.byteLength,f=i.createBuffer();i.bindBuffer(l,f),i.bufferData(l,c,h),a.onUploadCallback();let d;if(c instanceof Float32Array)d=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)d=i.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?d=i.HALF_FLOAT:d=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=i.SHORT;else if(c instanceof Uint32Array)d=i.UNSIGNED_INT;else if(c instanceof Int32Array)d=i.INT;else if(c instanceof Int8Array)d=i.BYTE;else if(c instanceof Uint8Array)d=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:u}}function n(a,l,c){let h=l.array,u=l.updateRanges;if(i.bindBuffer(c,a),u.length===0)i.bufferSubData(c,0,h);else{u.sort((d,x)=>d.start-x.start);let f=0;for(let d=1;d<u.length;d++){let x=u[f],M=u[d];M.start<=x.start+x.count+1?x.count=Math.max(x.count,M.start+M.count-x.start):(++f,u[f]=M)}u.length=f+1;for(let d=0,x=u.length;d<x;d++){let M=u[d];i.bufferSubData(c,M.start*h.BYTES_PER_ELEMENT,h,M.start,M.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=t.get(a);l&&(i.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:r,remove:s,update:o}}var bd=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Ed=`#ifdef USE_ALPHAHASH
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
#endif`,wd=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Ad=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Td=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Rd=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Cd=`#ifdef USE_AOMAP
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
#endif`,Id=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Pd=`#ifdef USE_BATCHING
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
#endif`,Fd=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Ud=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Dd=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Ld=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Nd=`#ifdef USE_IRIDESCENCE
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
#endif`,Bd=`#ifdef USE_BUMPMAP
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
#endif`,Od=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Hd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,zd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,kd=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Gd=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Vd=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Wd=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Xd=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Kd=`#define PI 3.141592653589793
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
} // validated`,jd=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,qd=`vec3 transformedNormal = objectNormal;
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
#endif`,Jd=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Yd=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Zd=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Qd=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,$d="gl_FragColor = linearToOutputTexel( gl_FragColor );",tp=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,ep=`#ifdef USE_ENVMAP
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
#endif`,np=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,ip=`#ifdef USE_ENVMAP
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
#endif`,rp=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,sp=`#ifdef USE_ENVMAP
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
#endif`,op=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,ap=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,lp=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,cp=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,hp=`#ifdef USE_GRADIENTMAP
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
}`,up=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,fp=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,dp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,pp=`uniform bool receiveShadow;
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
#endif`,mp=`#ifdef USE_ENVMAP
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
#endif`,gp=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,xp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,vp=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,yp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Mp=`PhysicalMaterial material;
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
#endif`,Sp=`struct PhysicalMaterial {
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
}`,_p=`
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
#endif`,bp=`#if defined( RE_IndirectDiffuse )
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
#endif`,Ep=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,wp=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Ap=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Tp=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Rp=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Cp=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Ip=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Pp=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Fp=`#if defined( USE_POINTS_UV )
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
#endif`,Up=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Dp=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Lp=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Np=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Bp=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Op=`#ifdef USE_MORPHTARGETS
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
#endif`,Hp=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,zp=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,kp=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Gp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Vp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Wp=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Xp=`#ifdef USE_NORMALMAP
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
#endif`,Kp=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,jp=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,qp=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Jp=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Yp=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Zp=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Qp=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,$p=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,tm=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,em=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,nm=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,im=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,rm=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,sm=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,om=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,am=`float getShadowMask() {
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
}`,lm=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,cm=`#ifdef USE_SKINNING
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
#endif`,hm=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,um=`#ifdef USE_SKINNING
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
#endif`,fm=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,dm=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,pm=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,mm=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,gm=`#ifdef USE_TRANSMISSION
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
#endif`,xm=`#ifdef USE_TRANSMISSION
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
#endif`,vm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,ym=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Mm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Sm=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,_m=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,bm=`uniform sampler2D t2D;
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
}`,Em=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,wm=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Am=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Tm=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Rm=`#include <common>
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
}`,Cm=`#if DEPTH_PACKING == 3200
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
}`,Im=`#define DISTANCE
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
}`,Pm=`#define DISTANCE
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
}`,Fm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Um=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Dm=`uniform float scale;
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
}`,Lm=`uniform vec3 diffuse;
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
}`,Nm=`#include <common>
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
}`,Bm=`uniform vec3 diffuse;
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
}`,Om=`#define LAMBERT
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
}`,Hm=`#define LAMBERT
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
}`,zm=`#define MATCAP
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
}`,km=`#define MATCAP
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
}`,Gm=`#define NORMAL
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
}`,Vm=`#define NORMAL
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
}`,Wm=`#define PHONG
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
}`,Xm=`#define PHONG
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
}`,Km=`#define STANDARD
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
}`,jm=`#define STANDARD
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
}`,qm=`#define TOON
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
}`,Jm=`#define TOON
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
}`,Ym=`uniform float size;
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
}`,Zm=`uniform vec3 diffuse;
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
}`,Qm=`#include <common>
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
}`,$m=`uniform vec3 color;
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
}`,t0=`uniform float rotation;
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
}`,e0=`uniform vec3 diffuse;
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
}`,ie={alphahash_fragment:bd,alphahash_pars_fragment:Ed,alphamap_fragment:wd,alphamap_pars_fragment:Ad,alphatest_fragment:Td,alphatest_pars_fragment:Rd,aomap_fragment:Cd,aomap_pars_fragment:Id,batching_pars_vertex:Pd,batching_vertex:Fd,begin_vertex:Ud,beginnormal_vertex:Dd,bsdfs:Ld,iridescence_fragment:Nd,bumpmap_pars_fragment:Bd,clipping_planes_fragment:Od,clipping_planes_pars_fragment:Hd,clipping_planes_pars_vertex:zd,clipping_planes_vertex:kd,color_fragment:Gd,color_pars_fragment:Vd,color_pars_vertex:Wd,color_vertex:Xd,common:Kd,cube_uv_reflection_fragment:jd,defaultnormal_vertex:qd,displacementmap_pars_vertex:Jd,displacementmap_vertex:Yd,emissivemap_fragment:Zd,emissivemap_pars_fragment:Qd,colorspace_fragment:$d,colorspace_pars_fragment:tp,envmap_fragment:ep,envmap_common_pars_fragment:np,envmap_pars_fragment:ip,envmap_pars_vertex:rp,envmap_physical_pars_fragment:mp,envmap_vertex:sp,fog_vertex:op,fog_pars_vertex:ap,fog_fragment:lp,fog_pars_fragment:cp,gradientmap_pars_fragment:hp,lightmap_pars_fragment:up,lights_lambert_fragment:fp,lights_lambert_pars_fragment:dp,lights_pars_begin:pp,lights_toon_fragment:gp,lights_toon_pars_fragment:xp,lights_phong_fragment:vp,lights_phong_pars_fragment:yp,lights_physical_fragment:Mp,lights_physical_pars_fragment:Sp,lights_fragment_begin:_p,lights_fragment_maps:bp,lights_fragment_end:Ep,logdepthbuf_fragment:wp,logdepthbuf_pars_fragment:Ap,logdepthbuf_pars_vertex:Tp,logdepthbuf_vertex:Rp,map_fragment:Cp,map_pars_fragment:Ip,map_particle_fragment:Pp,map_particle_pars_fragment:Fp,metalnessmap_fragment:Up,metalnessmap_pars_fragment:Dp,morphinstance_vertex:Lp,morphcolor_vertex:Np,morphnormal_vertex:Bp,morphtarget_pars_vertex:Op,morphtarget_vertex:Hp,normal_fragment_begin:zp,normal_fragment_maps:kp,normal_pars_fragment:Gp,normal_pars_vertex:Vp,normal_vertex:Wp,normalmap_pars_fragment:Xp,clearcoat_normal_fragment_begin:Kp,clearcoat_normal_fragment_maps:jp,clearcoat_pars_fragment:qp,iridescence_pars_fragment:Jp,opaque_fragment:Yp,packing:Zp,premultiplied_alpha_fragment:Qp,project_vertex:$p,dithering_fragment:tm,dithering_pars_fragment:em,roughnessmap_fragment:nm,roughnessmap_pars_fragment:im,shadowmap_pars_fragment:rm,shadowmap_pars_vertex:sm,shadowmap_vertex:om,shadowmask_pars_fragment:am,skinbase_vertex:lm,skinning_pars_vertex:cm,skinning_vertex:hm,skinnormal_vertex:um,specularmap_fragment:fm,specularmap_pars_fragment:dm,tonemapping_fragment:pm,tonemapping_pars_fragment:mm,transmission_fragment:gm,transmission_pars_fragment:xm,uv_pars_fragment:vm,uv_pars_vertex:ym,uv_vertex:Mm,worldpos_vertex:Sm,background_vert:_m,background_frag:bm,backgroundCube_vert:Em,backgroundCube_frag:wm,cube_vert:Am,cube_frag:Tm,depth_vert:Rm,depth_frag:Cm,distanceRGBA_vert:Im,distanceRGBA_frag:Pm,equirect_vert:Fm,equirect_frag:Um,linedashed_vert:Dm,linedashed_frag:Lm,meshbasic_vert:Nm,meshbasic_frag:Bm,meshlambert_vert:Om,meshlambert_frag:Hm,meshmatcap_vert:zm,meshmatcap_frag:km,meshnormal_vert:Gm,meshnormal_frag:Vm,meshphong_vert:Wm,meshphong_frag:Xm,meshphysical_vert:Km,meshphysical_frag:jm,meshtoon_vert:qm,meshtoon_frag:Jm,points_vert:Ym,points_frag:Zm,shadow_vert:Qm,shadow_frag:$m,sprite_vert:t0,sprite_frag:e0},ft={common:{diffuse:{value:new yt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Qt},alphaMap:{value:null},alphaMapTransform:{value:new Qt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Qt}},envmap:{envMap:{value:null},envMapRotation:{value:new Qt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Qt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Qt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Qt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Qt},normalScale:{value:new nt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Qt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Qt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Qt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Qt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new yt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new yt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Qt},alphaTest:{value:0},uvTransform:{value:new Qt}},sprite:{diffuse:{value:new yt(16777215)},opacity:{value:1},center:{value:new nt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Qt},alphaMap:{value:null},alphaMapTransform:{value:new Qt},alphaTest:{value:0}}},ei={basic:{uniforms:hn([ft.common,ft.specularmap,ft.envmap,ft.aomap,ft.lightmap,ft.fog]),vertexShader:ie.meshbasic_vert,fragmentShader:ie.meshbasic_frag},lambert:{uniforms:hn([ft.common,ft.specularmap,ft.envmap,ft.aomap,ft.lightmap,ft.emissivemap,ft.bumpmap,ft.normalmap,ft.displacementmap,ft.fog,ft.lights,{emissive:{value:new yt(0)}}]),vertexShader:ie.meshlambert_vert,fragmentShader:ie.meshlambert_frag},phong:{uniforms:hn([ft.common,ft.specularmap,ft.envmap,ft.aomap,ft.lightmap,ft.emissivemap,ft.bumpmap,ft.normalmap,ft.displacementmap,ft.fog,ft.lights,{emissive:{value:new yt(0)},specular:{value:new yt(1118481)},shininess:{value:30}}]),vertexShader:ie.meshphong_vert,fragmentShader:ie.meshphong_frag},standard:{uniforms:hn([ft.common,ft.envmap,ft.aomap,ft.lightmap,ft.emissivemap,ft.bumpmap,ft.normalmap,ft.displacementmap,ft.roughnessmap,ft.metalnessmap,ft.fog,ft.lights,{emissive:{value:new yt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ie.meshphysical_vert,fragmentShader:ie.meshphysical_frag},toon:{uniforms:hn([ft.common,ft.aomap,ft.lightmap,ft.emissivemap,ft.bumpmap,ft.normalmap,ft.displacementmap,ft.gradientmap,ft.fog,ft.lights,{emissive:{value:new yt(0)}}]),vertexShader:ie.meshtoon_vert,fragmentShader:ie.meshtoon_frag},matcap:{uniforms:hn([ft.common,ft.bumpmap,ft.normalmap,ft.displacementmap,ft.fog,{matcap:{value:null}}]),vertexShader:ie.meshmatcap_vert,fragmentShader:ie.meshmatcap_frag},points:{uniforms:hn([ft.points,ft.fog]),vertexShader:ie.points_vert,fragmentShader:ie.points_frag},dashed:{uniforms:hn([ft.common,ft.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ie.linedashed_vert,fragmentShader:ie.linedashed_frag},depth:{uniforms:hn([ft.common,ft.displacementmap]),vertexShader:ie.depth_vert,fragmentShader:ie.depth_frag},normal:{uniforms:hn([ft.common,ft.bumpmap,ft.normalmap,ft.displacementmap,{opacity:{value:1}}]),vertexShader:ie.meshnormal_vert,fragmentShader:ie.meshnormal_frag},sprite:{uniforms:hn([ft.sprite,ft.fog]),vertexShader:ie.sprite_vert,fragmentShader:ie.sprite_frag},background:{uniforms:{uvTransform:{value:new Qt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ie.background_vert,fragmentShader:ie.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Qt}},vertexShader:ie.backgroundCube_vert,fragmentShader:ie.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ie.cube_vert,fragmentShader:ie.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ie.equirect_vert,fragmentShader:ie.equirect_frag},distanceRGBA:{uniforms:hn([ft.common,ft.displacementmap,{referencePosition:{value:new P},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ie.distanceRGBA_vert,fragmentShader:ie.distanceRGBA_frag},shadow:{uniforms:hn([ft.lights,ft.fog,{color:{value:new yt(0)},opacity:{value:1}}]),vertexShader:ie.shadow_vert,fragmentShader:ie.shadow_frag}};ei.physical={uniforms:hn([ei.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Qt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Qt},clearcoatNormalScale:{value:new nt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Qt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Qt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Qt},sheen:{value:0},sheenColor:{value:new yt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Qt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Qt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Qt},transmissionSamplerSize:{value:new nt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Qt},attenuationDistance:{value:0},attenuationColor:{value:new yt(0)},specularColor:{value:new yt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Qt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Qt},anisotropyVector:{value:new nt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Qt}}]),vertexShader:ie.meshphysical_vert,fragmentShader:ie.meshphysical_frag};var Qa={r:0,b:0,g:0},$i=new Jn,n0=new be;function i0(i,t,e,n,r,s,o){let a=new yt(0),l=s===!0?0:1,c,h,u=null,f=0,d=null;function x(A){let g=A.isScene===!0?A.background:null;return g&&g.isTexture&&(g=(A.backgroundBlurriness>0?e:t).get(g)),g}function M(A){let g=!1,y=x(A);y===null?p(a,l):y&&y.isColor&&(p(y,1),g=!0);let v=i.xr.getEnvironmentBlendMode();v==="additive"?n.buffers.color.setClear(0,0,0,1,o):v==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||g)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(A,g){let y=x(g);y&&(y.isCubeTexture||y.mapping===zs)?(h===void 0&&(h=new Nt(new Te(1,1,1),new _e({name:"BackgroundCubeMaterial",uniforms:Qi(ei.backgroundCube.uniforms),vertexShader:ei.backgroundCube.vertexShader,fragmentShader:ei.backgroundCube.fragmentShader,side:sn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(v,E,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(h)),$i.copy(g.backgroundRotation),$i.x*=-1,$i.y*=-1,$i.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&($i.y*=-1,$i.z*=-1),h.material.uniforms.envMap.value=y,h.material.uniforms.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=g.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=g.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(n0.makeRotationFromEuler($i)),h.material.toneMapped=ue.getTransfer(y.colorSpace)!==ye,(u!==y||f!==y.version||d!==i.toneMapping)&&(h.material.needsUpdate=!0,u=y,f=y.version,d=i.toneMapping),h.layers.enableAll(),A.unshift(h,h.geometry,h.material,0,0,null)):y&&y.isTexture&&(c===void 0&&(c=new Nt(new yn(2,2),new _e({name:"BackgroundMaterial",uniforms:Qi(ei.background.uniforms),vertexShader:ei.background.vertexShader,fragmentShader:ei.background.fragmentShader,side:En,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=y,c.material.uniforms.backgroundIntensity.value=g.backgroundIntensity,c.material.toneMapped=ue.getTransfer(y.colorSpace)!==ye,y.matrixAutoUpdate===!0&&y.updateMatrix(),c.material.uniforms.uvTransform.value.copy(y.matrix),(u!==y||f!==y.version||d!==i.toneMapping)&&(c.material.needsUpdate=!0,u=y,f=y.version,d=i.toneMapping),c.layers.enableAll(),A.unshift(c,c.geometry,c.material,0,0,null))}function p(A,g){A.getRGB(Qa,xc(i)),n.buffers.color.setClear(Qa.r,Qa.g,Qa.b,g,o)}function T(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(A,g=1){a.set(A),l=g,p(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(A){l=A,p(a,l)},render:M,addToRenderList:m,dispose:T}}function r0(i,t){let e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},r=f(null),s=r,o=!1;function a(w,I,L,k,O){let X=!1,z=u(k,L,I);s!==z&&(s=z,c(s.object)),X=d(w,k,L,O),X&&x(w,k,L,O),O!==null&&t.update(O,i.ELEMENT_ARRAY_BUFFER),(X||o)&&(o=!1,g(w,I,L,k),O!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(O).buffer))}function l(){return i.createVertexArray()}function c(w){return i.bindVertexArray(w)}function h(w){return i.deleteVertexArray(w)}function u(w,I,L){let k=L.wireframe===!0,O=n[w.id];O===void 0&&(O={},n[w.id]=O);let X=O[I.id];X===void 0&&(X={},O[I.id]=X);let z=X[k];return z===void 0&&(z=f(l()),X[k]=z),z}function f(w){let I=[],L=[],k=[];for(let O=0;O<e;O++)I[O]=0,L[O]=0,k[O]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:I,enabledAttributes:L,attributeDivisors:k,object:w,attributes:{},index:null}}function d(w,I,L,k){let O=s.attributes,X=I.attributes,z=0,$=L.getAttributes();for(let G in $)if($[G].location>=0){let xt=O[G],It=X[G];if(It===void 0&&(G==="instanceMatrix"&&w.instanceMatrix&&(It=w.instanceMatrix),G==="instanceColor"&&w.instanceColor&&(It=w.instanceColor)),xt===void 0||xt.attribute!==It||It&&xt.data!==It.data)return!0;z++}return s.attributesNum!==z||s.index!==k}function x(w,I,L,k){let O={},X=I.attributes,z=0,$=L.getAttributes();for(let G in $)if($[G].location>=0){let xt=X[G];xt===void 0&&(G==="instanceMatrix"&&w.instanceMatrix&&(xt=w.instanceMatrix),G==="instanceColor"&&w.instanceColor&&(xt=w.instanceColor));let It={};It.attribute=xt,xt&&xt.data&&(It.data=xt.data),O[G]=It,z++}s.attributes=O,s.attributesNum=z,s.index=k}function M(){let w=s.newAttributes;for(let I=0,L=w.length;I<L;I++)w[I]=0}function m(w){p(w,0)}function p(w,I){let L=s.newAttributes,k=s.enabledAttributes,O=s.attributeDivisors;L[w]=1,k[w]===0&&(i.enableVertexAttribArray(w),k[w]=1),O[w]!==I&&(i.vertexAttribDivisor(w,I),O[w]=I)}function T(){let w=s.newAttributes,I=s.enabledAttributes;for(let L=0,k=I.length;L<k;L++)I[L]!==w[L]&&(i.disableVertexAttribArray(L),I[L]=0)}function A(w,I,L,k,O,X,z){z===!0?i.vertexAttribIPointer(w,I,L,O,X):i.vertexAttribPointer(w,I,L,k,O,X)}function g(w,I,L,k){M();let O=k.attributes,X=L.getAttributes(),z=I.defaultAttributeValues;for(let $ in X){let G=X[$];if(G.location>=0){let at=O[$];if(at===void 0&&($==="instanceMatrix"&&w.instanceMatrix&&(at=w.instanceMatrix),$==="instanceColor"&&w.instanceColor&&(at=w.instanceColor)),at!==void 0){let xt=at.normalized,It=at.itemSize,$t=t.get(at);if($t===void 0)continue;let ge=$t.buffer,Fe=$t.type,ae=$t.bytesPerElement,J=Fe===i.INT||Fe===i.UNSIGNED_INT||at.gpuType===va;if(at.isInterleavedBufferAttribute){let et=at.data,Mt=et.stride,zt=at.offset;if(et.isInstancedInterleavedBuffer){for(let bt=0;bt<G.locationSize;bt++)p(G.location+bt,et.meshPerAttribute);w.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=et.meshPerAttribute*et.count)}else for(let bt=0;bt<G.locationSize;bt++)m(G.location+bt);i.bindBuffer(i.ARRAY_BUFFER,ge);for(let bt=0;bt<G.locationSize;bt++)A(G.location+bt,It/G.locationSize,Fe,xt,Mt*ae,(zt+It/G.locationSize*bt)*ae,J)}else{if(at.isInstancedBufferAttribute){for(let et=0;et<G.locationSize;et++)p(G.location+et,at.meshPerAttribute);w.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=at.meshPerAttribute*at.count)}else for(let et=0;et<G.locationSize;et++)m(G.location+et);i.bindBuffer(i.ARRAY_BUFFER,ge);for(let et=0;et<G.locationSize;et++)A(G.location+et,It/G.locationSize,Fe,xt,It*ae,It/G.locationSize*et*ae,J)}}else if(z!==void 0){let xt=z[$];if(xt!==void 0)switch(xt.length){case 2:i.vertexAttrib2fv(G.location,xt);break;case 3:i.vertexAttrib3fv(G.location,xt);break;case 4:i.vertexAttrib4fv(G.location,xt);break;default:i.vertexAttrib1fv(G.location,xt)}}}}T()}function y(){R();for(let w in n){let I=n[w];for(let L in I){let k=I[L];for(let O in k)h(k[O].object),delete k[O];delete I[L]}delete n[w]}}function v(w){if(n[w.id]===void 0)return;let I=n[w.id];for(let L in I){let k=I[L];for(let O in k)h(k[O].object),delete k[O];delete I[L]}delete n[w.id]}function E(w){for(let I in n){let L=n[I];if(L[w.id]===void 0)continue;let k=L[w.id];for(let O in k)h(k[O].object),delete k[O];delete L[w.id]}}function R(){b(),o=!0,s!==r&&(s=r,c(s.object))}function b(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:R,resetDefaultState:b,dispose:y,releaseStatesOfGeometry:v,releaseStatesOfProgram:E,initAttributes:M,enableAttribute:m,disableUnusedAttributes:T}}function s0(i,t,e){let n;function r(c){n=c}function s(c,h){i.drawArrays(n,c,h),e.update(h,n,1)}function o(c,h,u){u!==0&&(i.drawArraysInstanced(n,c,h,u),e.update(h,n,u))}function a(c,h,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,u);let d=0;for(let x=0;x<u;x++)d+=h[x];e.update(d,n,1)}function l(c,h,u,f){if(u===0)return;let d=t.get("WEBGL_multi_draw");if(d===null)for(let x=0;x<c.length;x++)o(c[x],h[x],f[x]);else{d.multiDrawArraysInstancedWEBGL(n,c,0,h,0,f,0,u);let x=0;for(let M=0;M<u;M++)x+=h[M]*f[M];e.update(x,n,1)}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function o0(i,t,e,n){let r;function s(){if(r!==void 0)return r;if(t.has("EXT_texture_filter_anisotropic")===!0){let E=t.get("EXT_texture_filter_anisotropic");r=i.getParameter(E.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(E){return!(E!==Nn&&n.convert(E)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(E){let R=E===Ln&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(E!==$n&&n.convert(E)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&E!==ti&&!R)}function l(E){if(E==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";E="mediump"}return E==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp",h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let u=e.logarithmicDepthBuffer===!0,f=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),d=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),x=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),M=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),T=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),A=i.getParameter(i.MAX_VARYING_VECTORS),g=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),y=x>0,v=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:u,reversedDepthBuffer:f,maxTextures:d,maxVertexTextures:x,maxTextureSize:M,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:T,maxVaryings:A,maxFragmentUniforms:g,vertexTextures:y,maxSamples:v}}function a0(i){let t=this,e=null,n=0,r=!1,s=!1,o=new gn,a=new Qt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,f){let d=u.length!==0||f||n!==0||r;return r=f,n=u.length,d},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(u,f){e=h(u,f,0)},this.setState=function(u,f,d){let x=u.clippingPlanes,M=u.clipIntersection,m=u.clipShadows,p=i.get(u);if(!r||x===null||x.length===0||s&&!m)s?h(null):c();else{let T=s?0:n,A=T*4,g=p.clippingState||null;l.value=g,g=h(x,f,A,d);for(let y=0;y!==A;++y)g[y]=e[y];p.clippingState=g,this.numIntersection=M?this.numPlanes:0,this.numPlanes+=T}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,f,d,x){let M=u!==null?u.length:0,m=null;if(M!==0){if(m=l.value,x!==!0||m===null){let p=d+M*4,T=f.matrixWorldInverse;a.getNormalMatrix(T),(m===null||m.length<p)&&(m=new Float32Array(p));for(let A=0,g=d;A!==M;++A,g+=4)o.copy(u[A]).applyMatrix4(T,a),o.normal.toArray(m,g),m[g+3]=o.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=M,t.numIntersection=0,m}}function l0(i){let t=new WeakMap;function e(o,a){return a===ma?o.mapping=Yi:a===ga&&(o.mapping=Zi),o}function n(o){if(o&&o.isTexture){let a=o.mapping;if(a===ma||a===ga)if(t.has(o)){let l=t.get(o).texture;return e(l,o.mapping)}else{let l=o.image;if(l&&l.height>0){let c=new Lo(l.height);return c.fromEquirectangularTexture(i,o),t.set(o,c),o.addEventListener("dispose",r),e(c.texture,o.mapping)}else return null}}return o}function r(o){let a=o.target;a.removeEventListener("dispose",r);let l=t.get(a);l!==void 0&&(t.delete(a),l.dispose())}function s(){t=new WeakMap}return{get:n,dispose:s}}var Xr=4,fu=[.125,.215,.35,.446,.526,.582],nr=20,_c=new Hr,du=new yt,bc=null,Ec=0,wc=0,Ac=!1,er=(1+Math.sqrt(5))/2,Wr=1/er,pu=[new P(-er,Wr,0),new P(er,Wr,0),new P(-Wr,0,er),new P(Wr,0,er),new P(0,er,-Wr),new P(0,er,Wr),new P(-1,1,-1),new P(1,1,-1),new P(-1,1,1),new P(1,1,1)],c0=new P,el=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,r=100,s={}){let{size:o=256,position:a=c0}=s;bc=this._renderer.getRenderTarget(),Ec=this._renderer.getActiveCubeFace(),wc=this._renderer.getActiveMipmapLevel(),Ac=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(t,n,r,l,a),e>0&&this._blur(l,0,0,e),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=xu(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=gu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(bc,Ec,wc),this._renderer.xr.enabled=Ac,t.scissorTest=!1,$a(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Yi||t.mapping===Zi?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),bc=this._renderer.getRenderTarget(),Ec=this._renderer.getActiveCubeFace(),wc=this._renderer.getActiveMipmapLevel(),Ac=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:kn,minFilter:kn,generateMipmaps:!1,type:Ln,format:Nn,colorSpace:Wi,depthBuffer:!1},r=mu(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=mu(t,e,n);let{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=h0(s)),this._blurMaterial=u0(s,t,e)}return r}_compileMaterial(t){let e=new Nt(this._lodPlanes[0],t);this._renderer.compile(e,_c)}_sceneToCubeUV(t,e,n,r,s){let l=new Qe(90,1,e,n),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],u=this._renderer,f=u.autoClear,d=u.toneMapping;u.getClearColor(du),u.toneMapping=mi,u.autoClear=!1,u.state.buffers.depth.getReversed()&&(u.setRenderTarget(r),u.clearDepth(),u.setRenderTarget(null));let M=new me({name:"PMREM.Background",side:sn,depthWrite:!1,depthTest:!1}),m=new Nt(new Te,M),p=!1,T=t.background;T?T.isColor&&(M.color.copy(T),t.background=null,p=!0):(M.color.copy(du),p=!0);for(let A=0;A<6;A++){let g=A%3;g===0?(l.up.set(0,c[A],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+h[A],s.y,s.z)):g===1?(l.up.set(0,0,c[A]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+h[A],s.z)):(l.up.set(0,c[A],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+h[A]));let y=this._cubeSize;$a(r,g*y,A>2?y:0,y,y),u.setRenderTarget(r),p&&u.render(m,l),u.render(t,l)}m.geometry.dispose(),m.material.dispose(),u.toneMapping=d,u.autoClear=f,t.background=T}_textureToCubeUV(t,e){let n=this._renderer,r=t.mapping===Yi||t.mapping===Zi;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=xu()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=gu());let s=r?this._cubemapMaterial:this._equirectMaterial,o=new Nt(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=t;let l=this._cubeSize;$a(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(o,_c)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let r=this._lodPlanes.length;for(let s=1;s<r;s++){let o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=pu[(r-s-1)%pu.length];this._blur(t,s-1,s,o,a)}e.autoClear=n}_blur(t,e,n,r,s){let o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,r,"latitudinal",s),this._halfBlur(o,t,n,n,r,"longitudinal",s)}_halfBlur(t,e,n,r,s,o,a){let l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,u=new Nt(this._lodPlanes[r],c),f=c.uniforms,d=this._sizeLods[n]-1,x=isFinite(s)?Math.PI/(2*d):2*Math.PI/(2*nr-1),M=s/x,m=isFinite(s)?1+Math.floor(h*M):nr;m>nr&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${nr}`);let p=[],T=0;for(let E=0;E<nr;++E){let R=E/M,b=Math.exp(-R*R/2);p.push(b),E===0?T+=b:E<m&&(T+=2*b)}for(let E=0;E<p.length;E++)p[E]=p[E]/T;f.envMap.value=t.texture,f.samples.value=m,f.weights.value=p,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);let{_lodMax:A}=this;f.dTheta.value=x,f.mipInt.value=A-n;let g=this._sizeLods[r],y=3*g*(r>A-Xr?r-A+Xr:0),v=4*(this._cubeSize-g);$a(e,y,v,3*g,2*g),l.setRenderTarget(e),l.render(u,_c)}};function h0(i){let t=[],e=[],n=[],r=i,s=i-Xr+1+fu.length;for(let o=0;o<s;o++){let a=Math.pow(2,r);e.push(a);let l=1/a;o>i-Xr?l=fu[o-i+Xr-1]:o===0&&(l=0),n.push(l);let c=1/(a-2),h=-c,u=1+c,f=[h,h,u,h,u,u,h,h,u,u,h,u],d=6,x=6,M=3,m=2,p=1,T=new Float32Array(M*x*d),A=new Float32Array(m*x*d),g=new Float32Array(p*x*d);for(let v=0;v<d;v++){let E=v%3*2/3-1,R=v>2?0:-1,b=[E,R,0,E+2/3,R,0,E+2/3,R+1,0,E,R,0,E+2/3,R+1,0,E,R+1,0];T.set(b,M*x*v),A.set(f,m*x*v);let w=[v,v,v,v,v,v];g.set(w,p*x*v)}let y=new Ie;y.setAttribute("position",new Ne(T,M)),y.setAttribute("uv",new Ne(A,m)),y.setAttribute("faceIndex",new Ne(g,p)),t.push(y),r>Xr&&r--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function mu(i,t,e){let n=new $e(i,t,e);return n.texture.mapping=zs,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function $a(i,t,e,n,r){i.viewport.set(t,e,n,r),i.scissor.set(t,e,n,r)}function u0(i,t,e){let n=new Float32Array(nr),r=new P(0,1,0);return new _e({name:"SphericalGaussianBlur",defines:{n:nr,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Nc(),fragmentShader:`

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
		`,blending:Vn,depthTest:!1,depthWrite:!1})}function gu(){return new _e({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Nc(),fragmentShader:`

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
		`,blending:Vn,depthTest:!1,depthWrite:!1})}function xu(){return new _e({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Nc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Vn,depthTest:!1,depthWrite:!1})}function Nc(){return`

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
	`}function f0(i){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){let l=a.mapping,c=l===ma||l===ga,h=l===Yi||l===Zi;if(c||h){let u=t.get(a),f=u!==void 0?u.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==f)return e===null&&(e=new el(i)),u=c?e.fromEquirectangular(a,u):e.fromCubemap(a,u),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),u.texture;if(u!==void 0)return u.texture;{let d=a.image;return c&&d&&d.height>0||h&&d&&r(d)?(e===null&&(e=new el(i)),u=c?e.fromEquirectangular(a):e.fromCubemap(a),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),a.addEventListener("dispose",s),u.texture):null}}}return a}function r(a){let l=0,c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function s(a){let l=a.target;l.removeEventListener("dispose",s);let c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function d0(i){let t={};function e(n){if(t[n]!==void 0)return t[n];let r;switch(n){case"WEBGL_depth_texture":r=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=i.getExtension(n)}return t[n]=r,r}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let r=e(n);return r===null&&Rr("THREE.WebGLRenderer: "+n+" extension not supported."),r}}}function p0(i,t,e,n){let r={},s=new WeakMap;function o(u){let f=u.target;f.index!==null&&t.remove(f.index);for(let x in f.attributes)t.remove(f.attributes[x]);f.removeEventListener("dispose",o),delete r[f.id];let d=s.get(f);d&&(t.remove(d),s.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function a(u,f){return r[f.id]===!0||(f.addEventListener("dispose",o),r[f.id]=!0,e.memory.geometries++),f}function l(u){let f=u.attributes;for(let d in f)t.update(f[d],i.ARRAY_BUFFER)}function c(u){let f=[],d=u.index,x=u.attributes.position,M=0;if(d!==null){let T=d.array;M=d.version;for(let A=0,g=T.length;A<g;A+=3){let y=T[A+0],v=T[A+1],E=T[A+2];f.push(y,v,v,E,E,y)}}else if(x!==void 0){let T=x.array;M=x.version;for(let A=0,g=T.length/3-1;A<g;A+=3){let y=A+0,v=A+1,E=A+2;f.push(y,v,v,E,E,y)}}else return;let m=new(gc(f)?vs:xs)(f,1);m.version=M;let p=s.get(u);p&&t.remove(p),s.set(u,m)}function h(u){let f=s.get(u);if(f){let d=u.index;d!==null&&f.version<d.version&&c(u)}else c(u);return s.get(u)}return{get:a,update:l,getWireframeAttribute:h}}function m0(i,t,e){let n;function r(f){n=f}let s,o;function a(f){s=f.type,o=f.bytesPerElement}function l(f,d){i.drawElements(n,d,s,f*o),e.update(d,n,1)}function c(f,d,x){x!==0&&(i.drawElementsInstanced(n,d,s,f*o,x),e.update(d,n,x))}function h(f,d,x){if(x===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,s,f,0,x);let m=0;for(let p=0;p<x;p++)m+=d[p];e.update(m,n,1)}function u(f,d,x,M){if(x===0)return;let m=t.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<f.length;p++)c(f[p]/o,d[p],M[p]);else{m.multiDrawElementsInstancedWEBGL(n,d,0,s,f,0,M,0,x);let p=0;for(let T=0;T<x;T++)p+=d[T]*M[T];e.update(p,n,1)}}this.setMode=r,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function g0(i){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,a){switch(e.calls++,o){case i.TRIANGLES:e.triangles+=a*(s/3);break;case i.LINES:e.lines+=a*(s/2);break;case i.LINE_STRIP:e.lines+=a*(s-1);break;case i.LINE_LOOP:e.lines+=a*s;break;case i.POINTS:e.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:r,update:n}}function x0(i,t,e){let n=new WeakMap,r=new Le;function s(o,a,l){let c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0,f=n.get(a);if(f===void 0||f.count!==u){let b=function(){E.dispose(),n.delete(a),a.removeEventListener("dispose",b)};f!==void 0&&f.texture.dispose();let d=a.morphAttributes.position!==void 0,x=a.morphAttributes.normal!==void 0,M=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],p=a.morphAttributes.normal||[],T=a.morphAttributes.color||[],A=0;d===!0&&(A=1),x===!0&&(A=2),M===!0&&(A=3);let g=a.attributes.position.count*A,y=1;g>t.maxTextureSize&&(y=Math.ceil(g/t.maxTextureSize),g=t.maxTextureSize);let v=new Float32Array(g*y*4*u),E=new gs(v,g,y,u);E.type=ti,E.needsUpdate=!0;let R=A*4;for(let w=0;w<u;w++){let I=m[w],L=p[w],k=T[w],O=g*y*4*w;for(let X=0;X<I.count;X++){let z=X*R;d===!0&&(r.fromBufferAttribute(I,X),v[O+z+0]=r.x,v[O+z+1]=r.y,v[O+z+2]=r.z,v[O+z+3]=0),x===!0&&(r.fromBufferAttribute(L,X),v[O+z+4]=r.x,v[O+z+5]=r.y,v[O+z+6]=r.z,v[O+z+7]=0),M===!0&&(r.fromBufferAttribute(k,X),v[O+z+8]=r.x,v[O+z+9]=r.y,v[O+z+10]=r.z,v[O+z+11]=k.itemSize===4?r.w:1)}}f={count:u,texture:E,size:new nt(g,y)},n.set(a,f),a.addEventListener("dispose",b)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",o.morphTexture,e);else{let d=0;for(let M=0;M<c.length;M++)d+=c[M];let x=a.morphTargetsRelative?1:1-d;l.getUniforms().setValue(i,"morphTargetBaseInfluence",x),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",f.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",f.size)}return{update:s}}function v0(i,t,e,n){let r=new WeakMap;function s(l){let c=n.render.frame,h=l.geometry,u=t.get(l,h);if(r.get(u)!==c&&(t.update(u),r.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==c&&(e.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,i.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){let f=l.skeleton;r.get(f)!==c&&(f.update(),r.set(f,c))}return u}function o(){r=new WeakMap}function a(l){let c=l.target;c.removeEventListener("dispose",a),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:s,dispose:o}}var Nu=new rn,vu=new ws(1,1),Bu=new gs,Ou=new Uo,Hu=new Ms,yu=[],Mu=[],Su=new Float32Array(16),_u=new Float32Array(9),bu=new Float32Array(4);function jr(i,t,e){let n=i[0];if(n<=0||n>0)return i;let r=t*e,s=yu[r];if(s===void 0&&(s=new Float32Array(r),yu[r]=s),t!==0){n.toArray(s,0);for(let o=1,a=0;o!==t;++o)a+=e,i[o].toArray(s,a)}return s}function qe(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Je(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function il(i,t){let e=Mu[t];e===void 0&&(e=new Int32Array(t),Mu[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function y0(i,t){let e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function M0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(qe(e,t))return;i.uniform2fv(this.addr,t),Je(e,t)}}function S0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(qe(e,t))return;i.uniform3fv(this.addr,t),Je(e,t)}}function _0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(qe(e,t))return;i.uniform4fv(this.addr,t),Je(e,t)}}function b0(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(qe(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Je(e,t)}else{if(qe(e,n))return;bu.set(n),i.uniformMatrix2fv(this.addr,!1,bu),Je(e,n)}}function E0(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(qe(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Je(e,t)}else{if(qe(e,n))return;_u.set(n),i.uniformMatrix3fv(this.addr,!1,_u),Je(e,n)}}function w0(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(qe(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Je(e,t)}else{if(qe(e,n))return;Su.set(n),i.uniformMatrix4fv(this.addr,!1,Su),Je(e,n)}}function A0(i,t){let e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function T0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(qe(e,t))return;i.uniform2iv(this.addr,t),Je(e,t)}}function R0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(qe(e,t))return;i.uniform3iv(this.addr,t),Je(e,t)}}function C0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(qe(e,t))return;i.uniform4iv(this.addr,t),Je(e,t)}}function I0(i,t){let e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function P0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(qe(e,t))return;i.uniform2uiv(this.addr,t),Je(e,t)}}function F0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(qe(e,t))return;i.uniform3uiv(this.addr,t),Je(e,t)}}function U0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(qe(e,t))return;i.uniform4uiv(this.addr,t),Je(e,t)}}function D0(i,t,e){let n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r);let s;this.type===i.SAMPLER_2D_SHADOW?(vu.compareFunction=pc,s=vu):s=Nu,e.setTexture2D(t||s,r)}function L0(i,t,e){let n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),e.setTexture3D(t||Ou,r)}function N0(i,t,e){let n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),e.setTextureCube(t||Hu,r)}function B0(i,t,e){let n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),e.setTexture2DArray(t||Bu,r)}function O0(i){switch(i){case 5126:return y0;case 35664:return M0;case 35665:return S0;case 35666:return _0;case 35674:return b0;case 35675:return E0;case 35676:return w0;case 5124:case 35670:return A0;case 35667:case 35671:return T0;case 35668:case 35672:return R0;case 35669:case 35673:return C0;case 5125:return I0;case 36294:return P0;case 36295:return F0;case 36296:return U0;case 35678:case 36198:case 36298:case 36306:case 35682:return D0;case 35679:case 36299:case 36307:return L0;case 35680:case 36300:case 36308:case 36293:return N0;case 36289:case 36303:case 36311:case 36292:return B0}}function H0(i,t){i.uniform1fv(this.addr,t)}function z0(i,t){let e=jr(t,this.size,2);i.uniform2fv(this.addr,e)}function k0(i,t){let e=jr(t,this.size,3);i.uniform3fv(this.addr,e)}function G0(i,t){let e=jr(t,this.size,4);i.uniform4fv(this.addr,e)}function V0(i,t){let e=jr(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function W0(i,t){let e=jr(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function X0(i,t){let e=jr(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function K0(i,t){i.uniform1iv(this.addr,t)}function j0(i,t){i.uniform2iv(this.addr,t)}function q0(i,t){i.uniform3iv(this.addr,t)}function J0(i,t){i.uniform4iv(this.addr,t)}function Y0(i,t){i.uniform1uiv(this.addr,t)}function Z0(i,t){i.uniform2uiv(this.addr,t)}function Q0(i,t){i.uniform3uiv(this.addr,t)}function $0(i,t){i.uniform4uiv(this.addr,t)}function tg(i,t,e){let n=this.cache,r=t.length,s=il(e,r);qe(n,s)||(i.uniform1iv(this.addr,s),Je(n,s));for(let o=0;o!==r;++o)e.setTexture2D(t[o]||Nu,s[o])}function eg(i,t,e){let n=this.cache,r=t.length,s=il(e,r);qe(n,s)||(i.uniform1iv(this.addr,s),Je(n,s));for(let o=0;o!==r;++o)e.setTexture3D(t[o]||Ou,s[o])}function ng(i,t,e){let n=this.cache,r=t.length,s=il(e,r);qe(n,s)||(i.uniform1iv(this.addr,s),Je(n,s));for(let o=0;o!==r;++o)e.setTextureCube(t[o]||Hu,s[o])}function ig(i,t,e){let n=this.cache,r=t.length,s=il(e,r);qe(n,s)||(i.uniform1iv(this.addr,s),Je(n,s));for(let o=0;o!==r;++o)e.setTexture2DArray(t[o]||Bu,s[o])}function rg(i){switch(i){case 5126:return H0;case 35664:return z0;case 35665:return k0;case 35666:return G0;case 35674:return V0;case 35675:return W0;case 35676:return X0;case 5124:case 35670:return K0;case 35667:case 35671:return j0;case 35668:case 35672:return q0;case 35669:case 35673:return J0;case 5125:return Y0;case 36294:return Z0;case 36295:return Q0;case 36296:return $0;case 35678:case 36198:case 36298:case 36306:case 35682:return tg;case 35679:case 36299:case 36307:return eg;case 35680:case 36300:case 36308:case 36293:return ng;case 36289:case 36303:case 36311:case 36292:return ig}}var Rc=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=O0(e.type)}},Cc=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=rg(e.type)}},Ic=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let r=this.seq;for(let s=0,o=r.length;s!==o;++s){let a=r[s];a.setValue(t,e[a.id],n)}}},Tc=/(\w+)(\])?(\[|\.)?/g;function Eu(i,t){i.seq.push(t),i.map[t.id]=t}function sg(i,t,e){let n=i.name,r=n.length;for(Tc.lastIndex=0;;){let s=Tc.exec(n),o=Tc.lastIndex,a=s[1],l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){Eu(e,c===void 0?new Rc(a,i,t):new Cc(a,i,t));break}else{let u=e.map[a];u===void 0&&(u=new Ic(a),Eu(e,u)),e=u}}}var Kr=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){let s=t.getActiveUniform(e,r),o=t.getUniformLocation(e,s.name);sg(s,o,this)}}setValue(t,e,n,r){let s=this.map[e];s!==void 0&&s.setValue(t,n,r)}setOptional(t,e,n){let r=e[n];r!==void 0&&this.setValue(t,n,r)}static upload(t,e,n,r){for(let s=0,o=e.length;s!==o;++s){let a=e[s],l=n[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,r)}}static seqWithValue(t,e){let n=[];for(let r=0,s=t.length;r!==s;++r){let o=t[r];o.id in e&&n.push(o)}return n}};function wu(i,t,e){let n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}var og=37297,ag=0;function lg(i,t){let e=i.split(`
`),n=[],r=Math.max(t-6,0),s=Math.min(t+6,e.length);for(let o=r;o<s;o++){let a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}var Au=new Qt;function cg(i){ue._getMatrix(Au,ue.workingColorSpace,i);let t=`mat3( ${Au.elements.map(e=>e.toFixed(4))} )`;switch(ue.getTransfer(i)){case ds:return[t,"LinearTransferOETF"];case ye:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function Tu(i,t,e){let n=i.getShaderParameter(t,i.COMPILE_STATUS),s=(i.getShaderInfoLog(t)||"").trim();if(n&&s==="")return"";let o=/ERROR: 0:(\d+)/.exec(s);if(o){let a=parseInt(o[1]);return e.toUpperCase()+`

`+s+`

`+lg(i.getShaderSource(t),a)}else return s}function hg(i,t){let e=cg(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function ug(i,t){let e;switch(t){case ca:e="Linear";break;case ha:e="Reinhard";break;case ua:e="Cineon";break;case zr:e="ACESFilmic";break;case da:e="AgX";break;case pa:e="Neutral";break;case fa:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var tl=new P;function fg(){ue.getLuminanceCoefficients(tl);let i=tl.x.toFixed(4),t=tl.y.toFixed(4),e=tl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function dg(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ks).join(`
`)}function pg(i){let t=[];for(let e in i){let n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function mg(i,t){let e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){let s=i.getActiveAttrib(t,r),o=s.name,a=1;s.type===i.FLOAT_MAT2&&(a=2),s.type===i.FLOAT_MAT3&&(a=3),s.type===i.FLOAT_MAT4&&(a=4),e[o]={type:s.type,location:i.getAttribLocation(t,o),locationSize:a}}return e}function Ks(i){return i!==""}function Ru(i,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Cu(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var gg=/^[ \t]*#include +<([\w\d./]+)>/gm;function Pc(i){return i.replace(gg,vg)}var xg=new Map;function vg(i,t){let e=ie[t];if(e===void 0){let n=xg.get(t);if(n!==void 0)e=ie[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return Pc(e)}var yg=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Iu(i){return i.replace(yg,Mg)}function Mg(i,t,e,n){let r="";for(let s=parseInt(t);s<parseInt(e);s++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Pu(i){let t=`precision ${i.precision} float;
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
#define LOW_PRECISION`),t}function Sg(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===ec?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===Eh?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Qn&&(t="SHADOWMAP_TYPE_VSM"),t}function _g(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Yi:case Zi:t="ENVMAP_TYPE_CUBE";break;case zs:t="ENVMAP_TYPE_CUBE_UV";break}return t}function bg(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case Zi:t="ENVMAP_MODE_REFRACTION";break}return t}function Eg(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case rc:t="ENVMAP_BLENDING_MULTIPLY";break;case Vh:t="ENVMAP_BLENDING_MIX";break;case Wh:t="ENVMAP_BLENDING_ADD";break}return t}function wg(i){let t=i.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function Ag(i,t,e,n){let r=i.getContext(),s=e.defines,o=e.vertexShader,a=e.fragmentShader,l=Sg(e),c=_g(e),h=bg(e),u=Eg(e),f=wg(e),d=dg(e),x=pg(s),M=r.createProgram(),m,p,T=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,x].filter(Ks).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,x].filter(Ks).join(`
`),p.length>0&&(p+=`
`)):(m=[Pu(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,x,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ks).join(`
`),p=[Pu(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,x,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==mi?"#define TONE_MAPPING":"",e.toneMapping!==mi?ie.tonemapping_pars_fragment:"",e.toneMapping!==mi?ug("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",ie.colorspace_pars_fragment,hg("linearToOutputTexel",e.outputColorSpace),fg(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Ks).join(`
`)),o=Pc(o),o=Ru(o,e),o=Cu(o,e),a=Pc(a),a=Ru(a,e),a=Cu(a,e),o=Iu(o),a=Iu(a),e.isRawShaderMaterial!==!0&&(T=`#version 300 es
`,m=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",e.glslVersion===mc?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===mc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let A=T+m+o,g=T+p+a,y=wu(r,r.VERTEX_SHADER,A),v=wu(r,r.FRAGMENT_SHADER,g);r.attachShader(M,y),r.attachShader(M,v),e.index0AttributeName!==void 0?r.bindAttribLocation(M,0,e.index0AttributeName):e.morphTargets===!0&&r.bindAttribLocation(M,0,"position"),r.linkProgram(M);function E(I){if(i.debug.checkShaderErrors){let L=r.getProgramInfoLog(M)||"",k=r.getShaderInfoLog(y)||"",O=r.getShaderInfoLog(v)||"",X=L.trim(),z=k.trim(),$=O.trim(),G=!0,at=!0;if(r.getProgramParameter(M,r.LINK_STATUS)===!1)if(G=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,M,y,v);else{let xt=Tu(r,y,"vertex"),It=Tu(r,v,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(M,r.VALIDATE_STATUS)+`

Material Name: `+I.name+`
Material Type: `+I.type+`

Program Info Log: `+X+`
`+xt+`
`+It)}else X!==""?console.warn("THREE.WebGLProgram: Program Info Log:",X):(z===""||$==="")&&(at=!1);at&&(I.diagnostics={runnable:G,programLog:X,vertexShader:{log:z,prefix:m},fragmentShader:{log:$,prefix:p}})}r.deleteShader(y),r.deleteShader(v),R=new Kr(r,M),b=mg(r,M)}let R;this.getUniforms=function(){return R===void 0&&E(this),R};let b;this.getAttributes=function(){return b===void 0&&E(this),b};let w=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return w===!1&&(w=r.getProgramParameter(M,og)),w},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(M),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=ag++,this.cacheKey=t,this.usedTimes=1,this.program=M,this.vertexShader=y,this.fragmentShader=v,this}var Tg=0,Fc=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){let e=t.vertexShader,n=t.fragmentShader,r=this._getShaderStage(e),s=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new Uc(t),e.set(t,n)),n}},Uc=class{constructor(t){this.id=Tg++,this.code=t,this.usedTimes=0}};function Rg(i,t,e,n,r,s,o){let a=new Pr,l=new Fc,c=new Set,h=[],u=r.logarithmicDepthBuffer,f=r.vertexTextures,d=r.precision,x={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function M(b){return c.add(b),b===0?"uv":`uv${b}`}function m(b,w,I,L,k){let O=L.fog,X=k.geometry,z=b.isMeshStandardMaterial?L.environment:null,$=(b.isMeshStandardMaterial?e:t).get(b.envMap||z),G=$&&$.mapping===zs?$.image.height:null,at=x[b.type];b.precision!==null&&(d=r.getMaxPrecision(b.precision),d!==b.precision&&console.warn("THREE.WebGLProgram.getParameters:",b.precision,"not supported, using",d,"instead."));let xt=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,It=xt!==void 0?xt.length:0,$t=0;X.morphAttributes.position!==void 0&&($t=1),X.morphAttributes.normal!==void 0&&($t=2),X.morphAttributes.color!==void 0&&($t=3);let ge,Fe,ae,J;if(at){let he=ei[at];ge=he.vertexShader,Fe=he.fragmentShader}else ge=b.vertexShader,Fe=b.fragmentShader,l.update(b),ae=l.getVertexShaderID(b),J=l.getFragmentShaderID(b);let et=i.getRenderTarget(),Mt=i.state.buffers.depth.getReversed(),zt=k.isInstancedMesh===!0,bt=k.isBatchedMesh===!0,ne=!!b.map,je=!!b.matcap,F=!!$,Ee=!!b.aoMap,jt=!!b.lightMap,kt=!!b.bumpMap,St=!!b.normalMap,Re=!!b.displacementMap,Rt=!!b.emissiveMap,Ct=!!b.metalnessMap,de=!!b.roughnessMap,pe=b.anisotropy>0,C=b.clearcoat>0,_=b.dispersion>0,B=b.iridescence>0,j=b.sheen>0,tt=b.transmission>0,K=pe&&!!b.anisotropyMap,dt=C&&!!b.clearcoatMap,lt=C&&!!b.clearcoatNormalMap,At=C&&!!b.clearcoatRoughnessMap,Pt=B&&!!b.iridescenceMap,st=B&&!!b.iridescenceThicknessMap,mt=j&&!!b.sheenColorMap,Gt=j&&!!b.sheenRoughnessMap,Tt=!!b.specularMap,ht=!!b.specularColorMap,Zt=!!b.specularIntensityMap,D=tt&&!!b.transmissionMap,ot=tt&&!!b.thicknessMap,ut=!!b.gradientMap,_t=!!b.alphaMap,it=b.alphaTest>0,Y=!!b.alphaHash,wt=!!b.extensions,Ht=mi;b.toneMapped&&(et===null||et.isXRRenderTarget===!0)&&(Ht=i.toneMapping);let Se={shaderID:at,shaderType:b.type,shaderName:b.name,vertexShader:ge,fragmentShader:Fe,defines:b.defines,customVertexShaderID:ae,customFragmentShaderID:J,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:d,batching:bt,batchingColor:bt&&k._colorsTexture!==null,instancing:zt,instancingColor:zt&&k.instanceColor!==null,instancingMorph:zt&&k.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:et===null?i.outputColorSpace:et.isXRRenderTarget===!0?et.texture.colorSpace:Wi,alphaToCoverage:!!b.alphaToCoverage,map:ne,matcap:je,envMap:F,envMapMode:F&&$.mapping,envMapCubeUVHeight:G,aoMap:Ee,lightMap:jt,bumpMap:kt,normalMap:St,displacementMap:f&&Re,emissiveMap:Rt,normalMapObjectSpace:St&&b.normalMapType===Jh,normalMapTangentSpace:St&&b.normalMapType===qh,metalnessMap:Ct,roughnessMap:de,anisotropy:pe,anisotropyMap:K,clearcoat:C,clearcoatMap:dt,clearcoatNormalMap:lt,clearcoatRoughnessMap:At,dispersion:_,iridescence:B,iridescenceMap:Pt,iridescenceThicknessMap:st,sheen:j,sheenColorMap:mt,sheenRoughnessMap:Gt,specularMap:Tt,specularColorMap:ht,specularIntensityMap:Zt,transmission:tt,transmissionMap:D,thicknessMap:ot,gradientMap:ut,opaque:b.transparent===!1&&b.blending===Gi&&b.alphaToCoverage===!1,alphaMap:_t,alphaTest:it,alphaHash:Y,combine:b.combine,mapUv:ne&&M(b.map.channel),aoMapUv:Ee&&M(b.aoMap.channel),lightMapUv:jt&&M(b.lightMap.channel),bumpMapUv:kt&&M(b.bumpMap.channel),normalMapUv:St&&M(b.normalMap.channel),displacementMapUv:Re&&M(b.displacementMap.channel),emissiveMapUv:Rt&&M(b.emissiveMap.channel),metalnessMapUv:Ct&&M(b.metalnessMap.channel),roughnessMapUv:de&&M(b.roughnessMap.channel),anisotropyMapUv:K&&M(b.anisotropyMap.channel),clearcoatMapUv:dt&&M(b.clearcoatMap.channel),clearcoatNormalMapUv:lt&&M(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:At&&M(b.clearcoatRoughnessMap.channel),iridescenceMapUv:Pt&&M(b.iridescenceMap.channel),iridescenceThicknessMapUv:st&&M(b.iridescenceThicknessMap.channel),sheenColorMapUv:mt&&M(b.sheenColorMap.channel),sheenRoughnessMapUv:Gt&&M(b.sheenRoughnessMap.channel),specularMapUv:Tt&&M(b.specularMap.channel),specularColorMapUv:ht&&M(b.specularColorMap.channel),specularIntensityMapUv:Zt&&M(b.specularIntensityMap.channel),transmissionMapUv:D&&M(b.transmissionMap.channel),thicknessMapUv:ot&&M(b.thicknessMap.channel),alphaMapUv:_t&&M(b.alphaMap.channel),vertexTangents:!!X.attributes.tangent&&(St||pe),vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,pointsUvs:k.isPoints===!0&&!!X.attributes.uv&&(ne||_t),fog:!!O,useFog:b.fog===!0,fogExp2:!!O&&O.isFogExp2,flatShading:b.flatShading===!0&&b.wireframe===!1,sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:Mt,skinning:k.isSkinnedMesh===!0,morphTargets:X.morphAttributes.position!==void 0,morphNormals:X.morphAttributes.normal!==void 0,morphColors:X.morphAttributes.color!==void 0,morphTargetsCount:It,morphTextureStride:$t,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:b.dithering,shadowMapEnabled:i.shadowMap.enabled&&I.length>0,shadowMapType:i.shadowMap.type,toneMapping:Ht,decodeVideoTexture:ne&&b.map.isVideoTexture===!0&&ue.getTransfer(b.map.colorSpace)===ye,decodeVideoTextureEmissive:Rt&&b.emissiveMap.isVideoTexture===!0&&ue.getTransfer(b.emissiveMap.colorSpace)===ye,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===Xe,flipSided:b.side===sn,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionClipCullDistance:wt&&b.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(wt&&b.extensions.multiDraw===!0||bt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()};return Se.vertexUv1s=c.has(1),Se.vertexUv2s=c.has(2),Se.vertexUv3s=c.has(3),c.clear(),Se}function p(b){let w=[];if(b.shaderID?w.push(b.shaderID):(w.push(b.customVertexShaderID),w.push(b.customFragmentShaderID)),b.defines!==void 0)for(let I in b.defines)w.push(I),w.push(b.defines[I]);return b.isRawShaderMaterial===!1&&(T(w,b),A(w,b),w.push(i.outputColorSpace)),w.push(b.customProgramCacheKey),w.join()}function T(b,w){b.push(w.precision),b.push(w.outputColorSpace),b.push(w.envMapMode),b.push(w.envMapCubeUVHeight),b.push(w.mapUv),b.push(w.alphaMapUv),b.push(w.lightMapUv),b.push(w.aoMapUv),b.push(w.bumpMapUv),b.push(w.normalMapUv),b.push(w.displacementMapUv),b.push(w.emissiveMapUv),b.push(w.metalnessMapUv),b.push(w.roughnessMapUv),b.push(w.anisotropyMapUv),b.push(w.clearcoatMapUv),b.push(w.clearcoatNormalMapUv),b.push(w.clearcoatRoughnessMapUv),b.push(w.iridescenceMapUv),b.push(w.iridescenceThicknessMapUv),b.push(w.sheenColorMapUv),b.push(w.sheenRoughnessMapUv),b.push(w.specularMapUv),b.push(w.specularColorMapUv),b.push(w.specularIntensityMapUv),b.push(w.transmissionMapUv),b.push(w.thicknessMapUv),b.push(w.combine),b.push(w.fogExp2),b.push(w.sizeAttenuation),b.push(w.morphTargetsCount),b.push(w.morphAttributeCount),b.push(w.numDirLights),b.push(w.numPointLights),b.push(w.numSpotLights),b.push(w.numSpotLightMaps),b.push(w.numHemiLights),b.push(w.numRectAreaLights),b.push(w.numDirLightShadows),b.push(w.numPointLightShadows),b.push(w.numSpotLightShadows),b.push(w.numSpotLightShadowsWithMaps),b.push(w.numLightProbes),b.push(w.shadowMapType),b.push(w.toneMapping),b.push(w.numClippingPlanes),b.push(w.numClipIntersection),b.push(w.depthPacking)}function A(b,w){a.disableAll(),w.supportsVertexTextures&&a.enable(0),w.instancing&&a.enable(1),w.instancingColor&&a.enable(2),w.instancingMorph&&a.enable(3),w.matcap&&a.enable(4),w.envMap&&a.enable(5),w.normalMapObjectSpace&&a.enable(6),w.normalMapTangentSpace&&a.enable(7),w.clearcoat&&a.enable(8),w.iridescence&&a.enable(9),w.alphaTest&&a.enable(10),w.vertexColors&&a.enable(11),w.vertexAlphas&&a.enable(12),w.vertexUv1s&&a.enable(13),w.vertexUv2s&&a.enable(14),w.vertexUv3s&&a.enable(15),w.vertexTangents&&a.enable(16),w.anisotropy&&a.enable(17),w.alphaHash&&a.enable(18),w.batching&&a.enable(19),w.dispersion&&a.enable(20),w.batchingColor&&a.enable(21),w.gradientMap&&a.enable(22),b.push(a.mask),a.disableAll(),w.fog&&a.enable(0),w.useFog&&a.enable(1),w.flatShading&&a.enable(2),w.logarithmicDepthBuffer&&a.enable(3),w.reversedDepthBuffer&&a.enable(4),w.skinning&&a.enable(5),w.morphTargets&&a.enable(6),w.morphNormals&&a.enable(7),w.morphColors&&a.enable(8),w.premultipliedAlpha&&a.enable(9),w.shadowMapEnabled&&a.enable(10),w.doubleSided&&a.enable(11),w.flipSided&&a.enable(12),w.useDepthPacking&&a.enable(13),w.dithering&&a.enable(14),w.transmission&&a.enable(15),w.sheen&&a.enable(16),w.opaque&&a.enable(17),w.pointsUvs&&a.enable(18),w.decodeVideoTexture&&a.enable(19),w.decodeVideoTextureEmissive&&a.enable(20),w.alphaToCoverage&&a.enable(21),b.push(a.mask)}function g(b){let w=x[b.type],I;if(w){let L=ei[w];I=un.clone(L.uniforms)}else I=b.uniforms;return I}function y(b,w){let I;for(let L=0,k=h.length;L<k;L++){let O=h[L];if(O.cacheKey===w){I=O,++I.usedTimes;break}}return I===void 0&&(I=new Ag(i,w,b,s),h.push(I)),I}function v(b){if(--b.usedTimes===0){let w=h.indexOf(b);h[w]=h[h.length-1],h.pop(),b.destroy()}}function E(b){l.remove(b)}function R(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:g,acquireProgram:y,releaseProgram:v,releaseShaderCache:E,programs:h,dispose:R}}function Cg(){let i=new WeakMap;function t(o){return i.has(o)}function e(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function r(o,a,l){i.get(o)[a]=l}function s(){i=new WeakMap}return{has:t,get:e,remove:n,update:r,dispose:s}}function Ig(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function Fu(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function Uu(){let i=[],t=0,e=[],n=[],r=[];function s(){t=0,e.length=0,n.length=0,r.length=0}function o(u,f,d,x,M,m){let p=i[t];return p===void 0?(p={id:u.id,object:u,geometry:f,material:d,groupOrder:x,renderOrder:u.renderOrder,z:M,group:m},i[t]=p):(p.id=u.id,p.object=u,p.geometry=f,p.material=d,p.groupOrder=x,p.renderOrder=u.renderOrder,p.z=M,p.group=m),t++,p}function a(u,f,d,x,M,m){let p=o(u,f,d,x,M,m);d.transmission>0?n.push(p):d.transparent===!0?r.push(p):e.push(p)}function l(u,f,d,x,M,m){let p=o(u,f,d,x,M,m);d.transmission>0?n.unshift(p):d.transparent===!0?r.unshift(p):e.unshift(p)}function c(u,f){e.length>1&&e.sort(u||Ig),n.length>1&&n.sort(f||Fu),r.length>1&&r.sort(f||Fu)}function h(){for(let u=t,f=i.length;u<f;u++){let d=i[u];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:e,transmissive:n,transparent:r,init:s,push:a,unshift:l,finish:h,sort:c}}function Pg(){let i=new WeakMap;function t(n,r){let s=i.get(n),o;return s===void 0?(o=new Uu,i.set(n,[o])):r>=s.length?(o=new Uu,s.push(o)):o=s[r],o}function e(){i=new WeakMap}return{get:t,dispose:e}}function Fg(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new P,color:new yt};break;case"SpotLight":e={position:new P,direction:new P,color:new yt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new P,color:new yt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new P,skyColor:new yt,groundColor:new yt};break;case"RectAreaLight":e={color:new yt,position:new P,halfWidth:new P,halfHeight:new P};break}return i[t.id]=e,e}}}function Ug(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new nt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new nt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new nt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}var Dg=0;function Lg(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function Ng(i){let t=new Fg,e=Ug(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new P);let r=new P,s=new be,o=new be;function a(c){let h=0,u=0,f=0;for(let b=0;b<9;b++)n.probe[b].set(0,0,0);let d=0,x=0,M=0,m=0,p=0,T=0,A=0,g=0,y=0,v=0,E=0;c.sort(Lg);for(let b=0,w=c.length;b<w;b++){let I=c[b],L=I.color,k=I.intensity,O=I.distance,X=I.shadow&&I.shadow.map?I.shadow.map.texture:null;if(I.isAmbientLight)h+=L.r*k,u+=L.g*k,f+=L.b*k;else if(I.isLightProbe){for(let z=0;z<9;z++)n.probe[z].addScaledVector(I.sh.coefficients[z],k);E++}else if(I.isDirectionalLight){let z=t.get(I);if(z.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){let $=I.shadow,G=e.get(I);G.shadowIntensity=$.intensity,G.shadowBias=$.bias,G.shadowNormalBias=$.normalBias,G.shadowRadius=$.radius,G.shadowMapSize=$.mapSize,n.directionalShadow[d]=G,n.directionalShadowMap[d]=X,n.directionalShadowMatrix[d]=I.shadow.matrix,T++}n.directional[d]=z,d++}else if(I.isSpotLight){let z=t.get(I);z.position.setFromMatrixPosition(I.matrixWorld),z.color.copy(L).multiplyScalar(k),z.distance=O,z.coneCos=Math.cos(I.angle),z.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),z.decay=I.decay,n.spot[M]=z;let $=I.shadow;if(I.map&&(n.spotLightMap[y]=I.map,y++,$.updateMatrices(I),I.castShadow&&v++),n.spotLightMatrix[M]=$.matrix,I.castShadow){let G=e.get(I);G.shadowIntensity=$.intensity,G.shadowBias=$.bias,G.shadowNormalBias=$.normalBias,G.shadowRadius=$.radius,G.shadowMapSize=$.mapSize,n.spotShadow[M]=G,n.spotShadowMap[M]=X,g++}M++}else if(I.isRectAreaLight){let z=t.get(I);z.color.copy(L).multiplyScalar(k),z.halfWidth.set(I.width*.5,0,0),z.halfHeight.set(0,I.height*.5,0),n.rectArea[m]=z,m++}else if(I.isPointLight){let z=t.get(I);if(z.color.copy(I.color).multiplyScalar(I.intensity),z.distance=I.distance,z.decay=I.decay,I.castShadow){let $=I.shadow,G=e.get(I);G.shadowIntensity=$.intensity,G.shadowBias=$.bias,G.shadowNormalBias=$.normalBias,G.shadowRadius=$.radius,G.shadowMapSize=$.mapSize,G.shadowCameraNear=$.camera.near,G.shadowCameraFar=$.camera.far,n.pointShadow[x]=G,n.pointShadowMap[x]=X,n.pointShadowMatrix[x]=I.shadow.matrix,A++}n.point[x]=z,x++}else if(I.isHemisphereLight){let z=t.get(I);z.skyColor.copy(I.color).multiplyScalar(k),z.groundColor.copy(I.groundColor).multiplyScalar(k),n.hemi[p]=z,p++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ft.LTC_FLOAT_1,n.rectAreaLTC2=ft.LTC_FLOAT_2):(n.rectAreaLTC1=ft.LTC_HALF_1,n.rectAreaLTC2=ft.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=f;let R=n.hash;(R.directionalLength!==d||R.pointLength!==x||R.spotLength!==M||R.rectAreaLength!==m||R.hemiLength!==p||R.numDirectionalShadows!==T||R.numPointShadows!==A||R.numSpotShadows!==g||R.numSpotMaps!==y||R.numLightProbes!==E)&&(n.directional.length=d,n.spot.length=M,n.rectArea.length=m,n.point.length=x,n.hemi.length=p,n.directionalShadow.length=T,n.directionalShadowMap.length=T,n.pointShadow.length=A,n.pointShadowMap.length=A,n.spotShadow.length=g,n.spotShadowMap.length=g,n.directionalShadowMatrix.length=T,n.pointShadowMatrix.length=A,n.spotLightMatrix.length=g+y-v,n.spotLightMap.length=y,n.numSpotLightShadowsWithMaps=v,n.numLightProbes=E,R.directionalLength=d,R.pointLength=x,R.spotLength=M,R.rectAreaLength=m,R.hemiLength=p,R.numDirectionalShadows=T,R.numPointShadows=A,R.numSpotShadows=g,R.numSpotMaps=y,R.numLightProbes=E,n.version=Dg++)}function l(c,h){let u=0,f=0,d=0,x=0,M=0,m=h.matrixWorldInverse;for(let p=0,T=c.length;p<T;p++){let A=c[p];if(A.isDirectionalLight){let g=n.directional[u];g.direction.setFromMatrixPosition(A.matrixWorld),r.setFromMatrixPosition(A.target.matrixWorld),g.direction.sub(r),g.direction.transformDirection(m),u++}else if(A.isSpotLight){let g=n.spot[d];g.position.setFromMatrixPosition(A.matrixWorld),g.position.applyMatrix4(m),g.direction.setFromMatrixPosition(A.matrixWorld),r.setFromMatrixPosition(A.target.matrixWorld),g.direction.sub(r),g.direction.transformDirection(m),d++}else if(A.isRectAreaLight){let g=n.rectArea[x];g.position.setFromMatrixPosition(A.matrixWorld),g.position.applyMatrix4(m),o.identity(),s.copy(A.matrixWorld),s.premultiply(m),o.extractRotation(s),g.halfWidth.set(A.width*.5,0,0),g.halfHeight.set(0,A.height*.5,0),g.halfWidth.applyMatrix4(o),g.halfHeight.applyMatrix4(o),x++}else if(A.isPointLight){let g=n.point[f];g.position.setFromMatrixPosition(A.matrixWorld),g.position.applyMatrix4(m),f++}else if(A.isHemisphereLight){let g=n.hemi[M];g.direction.setFromMatrixPosition(A.matrixWorld),g.direction.transformDirection(m),M++}}}return{setup:a,setupView:l,state:n}}function Du(i){let t=new Ng(i),e=[],n=[];function r(h){c.camera=h,e.length=0,n.length=0}function s(h){e.push(h)}function o(h){n.push(h)}function a(){t.setup(e)}function l(h){t.setupView(e,h)}let c={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:r,state:c,setupLights:a,setupLightsView:l,pushLight:s,pushShadow:o}}function Bg(i){let t=new WeakMap;function e(r,s=0){let o=t.get(r),a;return o===void 0?(a=new Du(i),t.set(r,[a])):s>=o.length?(a=new Du(i),o.push(a)):a=o[s],a}function n(){t=new WeakMap}return{get:e,dispose:n}}var Og=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Hg=`uniform sampler2D shadow_pass;
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
}`;function zg(i,t,e){let n=new Es,r=new nt,s=new nt,o=new Le,a=new Wo({depthPacking:jh}),l=new Xo,c={},h=e.maxTextureSize,u={[En]:sn,[sn]:En,[Xe]:Xe},f=new _e({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new nt},radius:{value:4}},vertexShader:Og,fragmentShader:Hg}),d=f.clone();d.defines.HORIZONTAL_PASS=1;let x=new Ie;x.setAttribute("position",new Ne(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let M=new Nt(x,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ec;let p=this.type;this.render=function(v,E,R){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||v.length===0)return;let b=i.getRenderTarget(),w=i.getActiveCubeFace(),I=i.getActiveMipmapLevel(),L=i.state;L.setBlending(Vn),L.buffers.depth.getReversed()===!0?L.buffers.color.setClear(0,0,0,0):L.buffers.color.setClear(1,1,1,1),L.buffers.depth.setTest(!0),L.setScissorTest(!1);let k=p!==Qn&&this.type===Qn,O=p===Qn&&this.type!==Qn;for(let X=0,z=v.length;X<z;X++){let $=v[X],G=$.shadow;if(G===void 0){console.warn("THREE.WebGLShadowMap:",$,"has no shadow.");continue}if(G.autoUpdate===!1&&G.needsUpdate===!1)continue;r.copy(G.mapSize);let at=G.getFrameExtents();if(r.multiply(at),s.copy(G.mapSize),(r.x>h||r.y>h)&&(r.x>h&&(s.x=Math.floor(h/at.x),r.x=s.x*at.x,G.mapSize.x=s.x),r.y>h&&(s.y=Math.floor(h/at.y),r.y=s.y*at.y,G.mapSize.y=s.y)),G.map===null||k===!0||O===!0){let It=this.type!==Qn?{minFilter:xn,magFilter:xn}:{};G.map!==null&&G.map.dispose(),G.map=new $e(r.x,r.y,It),G.map.texture.name=$.name+".shadowMap",G.camera.updateProjectionMatrix()}i.setRenderTarget(G.map),i.clear();let xt=G.getViewportCount();for(let It=0;It<xt;It++){let $t=G.getViewport(It);o.set(s.x*$t.x,s.y*$t.y,s.x*$t.z,s.y*$t.w),L.viewport(o),G.updateMatrices($,It),n=G.getFrustum(),g(E,R,G.camera,$,this.type)}G.isPointLightShadow!==!0&&this.type===Qn&&T(G,R),G.needsUpdate=!1}p=this.type,m.needsUpdate=!1,i.setRenderTarget(b,w,I)};function T(v,E){let R=t.update(M);f.defines.VSM_SAMPLES!==v.blurSamples&&(f.defines.VSM_SAMPLES=v.blurSamples,d.defines.VSM_SAMPLES=v.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),v.mapPass===null&&(v.mapPass=new $e(r.x,r.y)),f.uniforms.shadow_pass.value=v.map.texture,f.uniforms.resolution.value=v.mapSize,f.uniforms.radius.value=v.radius,i.setRenderTarget(v.mapPass),i.clear(),i.renderBufferDirect(E,null,R,f,M,null),d.uniforms.shadow_pass.value=v.mapPass.texture,d.uniforms.resolution.value=v.mapSize,d.uniforms.radius.value=v.radius,i.setRenderTarget(v.map),i.clear(),i.renderBufferDirect(E,null,R,d,M,null)}function A(v,E,R,b){let w=null,I=R.isPointLight===!0?v.customDistanceMaterial:v.customDepthMaterial;if(I!==void 0)w=I;else if(w=R.isPointLight===!0?l:a,i.localClippingEnabled&&E.clipShadows===!0&&Array.isArray(E.clippingPlanes)&&E.clippingPlanes.length!==0||E.displacementMap&&E.displacementScale!==0||E.alphaMap&&E.alphaTest>0||E.map&&E.alphaTest>0||E.alphaToCoverage===!0){let L=w.uuid,k=E.uuid,O=c[L];O===void 0&&(O={},c[L]=O);let X=O[k];X===void 0&&(X=w.clone(),O[k]=X,E.addEventListener("dispose",y)),w=X}if(w.visible=E.visible,w.wireframe=E.wireframe,b===Qn?w.side=E.shadowSide!==null?E.shadowSide:E.side:w.side=E.shadowSide!==null?E.shadowSide:u[E.side],w.alphaMap=E.alphaMap,w.alphaTest=E.alphaToCoverage===!0?.5:E.alphaTest,w.map=E.map,w.clipShadows=E.clipShadows,w.clippingPlanes=E.clippingPlanes,w.clipIntersection=E.clipIntersection,w.displacementMap=E.displacementMap,w.displacementScale=E.displacementScale,w.displacementBias=E.displacementBias,w.wireframeLinewidth=E.wireframeLinewidth,w.linewidth=E.linewidth,R.isPointLight===!0&&w.isMeshDistanceMaterial===!0){let L=i.properties.get(w);L.light=R}return w}function g(v,E,R,b,w){if(v.visible===!1)return;if(v.layers.test(E.layers)&&(v.isMesh||v.isLine||v.isPoints)&&(v.castShadow||v.receiveShadow&&w===Qn)&&(!v.frustumCulled||n.intersectsObject(v))){v.modelViewMatrix.multiplyMatrices(R.matrixWorldInverse,v.matrixWorld);let k=t.update(v),O=v.material;if(Array.isArray(O)){let X=k.groups;for(let z=0,$=X.length;z<$;z++){let G=X[z],at=O[G.materialIndex];if(at&&at.visible){let xt=A(v,at,b,w);v.onBeforeShadow(i,v,E,R,k,xt,G),i.renderBufferDirect(R,null,k,xt,v,G),v.onAfterShadow(i,v,E,R,k,xt,G)}}}else if(O.visible){let X=A(v,O,b,w);v.onBeforeShadow(i,v,E,R,k,X,null),i.renderBufferDirect(R,null,k,X,v,null),v.onAfterShadow(i,v,E,R,k,X,null)}}let L=v.children;for(let k=0,O=L.length;k<O;k++)g(L[k],E,R,b,w)}function y(v){v.target.removeEventListener("dispose",y);for(let R in c){let b=c[R],w=v.target.uuid;w in b&&(b[w].dispose(),delete b[w])}}}var kg={[na]:ia,[ra]:aa,[sa]:la,[Vi]:oa,[ia]:na,[aa]:ra,[la]:sa,[oa]:Vi};function Gg(i,t){function e(){let D=!1,ot=new Le,ut=null,_t=new Le(0,0,0,0);return{setMask:function(it){ut!==it&&!D&&(i.colorMask(it,it,it,it),ut=it)},setLocked:function(it){D=it},setClear:function(it,Y,wt,Ht,Se){Se===!0&&(it*=Ht,Y*=Ht,wt*=Ht),ot.set(it,Y,wt,Ht),_t.equals(ot)===!1&&(i.clearColor(it,Y,wt,Ht),_t.copy(ot))},reset:function(){D=!1,ut=null,_t.set(-1,0,0,0)}}}function n(){let D=!1,ot=!1,ut=null,_t=null,it=null;return{setReversed:function(Y){if(ot!==Y){let wt=t.get("EXT_clip_control");Y?wt.clipControlEXT(wt.LOWER_LEFT_EXT,wt.ZERO_TO_ONE_EXT):wt.clipControlEXT(wt.LOWER_LEFT_EXT,wt.NEGATIVE_ONE_TO_ONE_EXT),ot=Y;let Ht=it;it=null,this.setClear(Ht)}},getReversed:function(){return ot},setTest:function(Y){Y?et(i.DEPTH_TEST):Mt(i.DEPTH_TEST)},setMask:function(Y){ut!==Y&&!D&&(i.depthMask(Y),ut=Y)},setFunc:function(Y){if(ot&&(Y=kg[Y]),_t!==Y){switch(Y){case na:i.depthFunc(i.NEVER);break;case ia:i.depthFunc(i.ALWAYS);break;case ra:i.depthFunc(i.LESS);break;case Vi:i.depthFunc(i.LEQUAL);break;case sa:i.depthFunc(i.EQUAL);break;case oa:i.depthFunc(i.GEQUAL);break;case aa:i.depthFunc(i.GREATER);break;case la:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}_t=Y}},setLocked:function(Y){D=Y},setClear:function(Y){it!==Y&&(ot&&(Y=1-Y),i.clearDepth(Y),it=Y)},reset:function(){D=!1,ut=null,_t=null,it=null,ot=!1}}}function r(){let D=!1,ot=null,ut=null,_t=null,it=null,Y=null,wt=null,Ht=null,Se=null;return{setTest:function(he){D||(he?et(i.STENCIL_TEST):Mt(i.STENCIL_TEST))},setMask:function(he){ot!==he&&!D&&(i.stencilMask(he),ot=he)},setFunc:function(he,In,en){(ut!==he||_t!==In||it!==en)&&(i.stencilFunc(he,In,en),ut=he,_t=In,it=en)},setOp:function(he,In,en){(Y!==he||wt!==In||Ht!==en)&&(i.stencilOp(he,In,en),Y=he,wt=In,Ht=en)},setLocked:function(he){D=he},setClear:function(he){Se!==he&&(i.clearStencil(he),Se=he)},reset:function(){D=!1,ot=null,ut=null,_t=null,it=null,Y=null,wt=null,Ht=null,Se=null}}}let s=new e,o=new n,a=new r,l=new WeakMap,c=new WeakMap,h={},u={},f=new WeakMap,d=[],x=null,M=!1,m=null,p=null,T=null,A=null,g=null,y=null,v=null,E=new yt(0,0,0),R=0,b=!1,w=null,I=null,L=null,k=null,O=null,X=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),z=!1,$=0,G=i.getParameter(i.VERSION);G.indexOf("WebGL")!==-1?($=parseFloat(/^WebGL (\d)/.exec(G)[1]),z=$>=1):G.indexOf("OpenGL ES")!==-1&&($=parseFloat(/^OpenGL ES (\d)/.exec(G)[1]),z=$>=2);let at=null,xt={},It=i.getParameter(i.SCISSOR_BOX),$t=i.getParameter(i.VIEWPORT),ge=new Le().fromArray(It),Fe=new Le().fromArray($t);function ae(D,ot,ut,_t){let it=new Uint8Array(4),Y=i.createTexture();i.bindTexture(D,Y),i.texParameteri(D,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(D,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let wt=0;wt<ut;wt++)D===i.TEXTURE_3D||D===i.TEXTURE_2D_ARRAY?i.texImage3D(ot,0,i.RGBA,1,1,_t,0,i.RGBA,i.UNSIGNED_BYTE,it):i.texImage2D(ot+wt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,it);return Y}let J={};J[i.TEXTURE_2D]=ae(i.TEXTURE_2D,i.TEXTURE_2D,1),J[i.TEXTURE_CUBE_MAP]=ae(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),J[i.TEXTURE_2D_ARRAY]=ae(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),J[i.TEXTURE_3D]=ae(i.TEXTURE_3D,i.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),et(i.DEPTH_TEST),o.setFunc(Vi),kt(!1),St(tc),et(i.CULL_FACE),Ee(Vn);function et(D){h[D]!==!0&&(i.enable(D),h[D]=!0)}function Mt(D){h[D]!==!1&&(i.disable(D),h[D]=!1)}function zt(D,ot){return u[D]!==ot?(i.bindFramebuffer(D,ot),u[D]=ot,D===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=ot),D===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=ot),!0):!1}function bt(D,ot){let ut=d,_t=!1;if(D){ut=f.get(ot),ut===void 0&&(ut=[],f.set(ot,ut));let it=D.textures;if(ut.length!==it.length||ut[0]!==i.COLOR_ATTACHMENT0){for(let Y=0,wt=it.length;Y<wt;Y++)ut[Y]=i.COLOR_ATTACHMENT0+Y;ut.length=it.length,_t=!0}}else ut[0]!==i.BACK&&(ut[0]=i.BACK,_t=!0);_t&&i.drawBuffers(ut)}function ne(D){return x!==D?(i.useProgram(D),x=D,!0):!1}let je={[Ai]:i.FUNC_ADD,[Ah]:i.FUNC_SUBTRACT,[Th]:i.FUNC_REVERSE_SUBTRACT};je[Rh]=i.MIN,je[Ch]=i.MAX;let F={[Ih]:i.ZERO,[Ph]:i.ONE,[Fh]:i.SRC_COLOR,[wo]:i.SRC_ALPHA,[Oh]:i.SRC_ALPHA_SATURATE,[Nh]:i.DST_COLOR,[Dh]:i.DST_ALPHA,[Uh]:i.ONE_MINUS_SRC_COLOR,[Ao]:i.ONE_MINUS_SRC_ALPHA,[Bh]:i.ONE_MINUS_DST_COLOR,[Lh]:i.ONE_MINUS_DST_ALPHA,[Hh]:i.CONSTANT_COLOR,[zh]:i.ONE_MINUS_CONSTANT_COLOR,[kh]:i.CONSTANT_ALPHA,[Gh]:i.ONE_MINUS_CONSTANT_ALPHA};function Ee(D,ot,ut,_t,it,Y,wt,Ht,Se,he){if(D===Vn){M===!0&&(Mt(i.BLEND),M=!1);return}if(M===!1&&(et(i.BLEND),M=!0),D!==wh){if(D!==m||he!==b){if((p!==Ai||g!==Ai)&&(i.blendEquation(i.FUNC_ADD),p=Ai,g=Ai),he)switch(D){case Gi:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case on:i.blendFunc(i.ONE,i.ONE);break;case nc:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case ic:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}else switch(D){case Gi:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case on:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case nc:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case ic:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}T=null,A=null,y=null,v=null,E.set(0,0,0),R=0,m=D,b=he}return}it=it||ot,Y=Y||ut,wt=wt||_t,(ot!==p||it!==g)&&(i.blendEquationSeparate(je[ot],je[it]),p=ot,g=it),(ut!==T||_t!==A||Y!==y||wt!==v)&&(i.blendFuncSeparate(F[ut],F[_t],F[Y],F[wt]),T=ut,A=_t,y=Y,v=wt),(Ht.equals(E)===!1||Se!==R)&&(i.blendColor(Ht.r,Ht.g,Ht.b,Se),E.copy(Ht),R=Se),m=D,b=!1}function jt(D,ot){D.side===Xe?Mt(i.CULL_FACE):et(i.CULL_FACE);let ut=D.side===sn;ot&&(ut=!ut),kt(ut),D.blending===Gi&&D.transparent===!1?Ee(Vn):Ee(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.blendColor,D.blendAlpha,D.premultipliedAlpha),o.setFunc(D.depthFunc),o.setTest(D.depthTest),o.setMask(D.depthWrite),s.setMask(D.colorWrite);let _t=D.stencilWrite;a.setTest(_t),_t&&(a.setMask(D.stencilWriteMask),a.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),a.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),Rt(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?et(i.SAMPLE_ALPHA_TO_COVERAGE):Mt(i.SAMPLE_ALPHA_TO_COVERAGE)}function kt(D){w!==D&&(D?i.frontFace(i.CW):i.frontFace(i.CCW),w=D)}function St(D){D!==_h?(et(i.CULL_FACE),D!==I&&(D===tc?i.cullFace(i.BACK):D===bh?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Mt(i.CULL_FACE),I=D}function Re(D){D!==L&&(z&&i.lineWidth(D),L=D)}function Rt(D,ot,ut){D?(et(i.POLYGON_OFFSET_FILL),(k!==ot||O!==ut)&&(i.polygonOffset(ot,ut),k=ot,O=ut)):Mt(i.POLYGON_OFFSET_FILL)}function Ct(D){D?et(i.SCISSOR_TEST):Mt(i.SCISSOR_TEST)}function de(D){D===void 0&&(D=i.TEXTURE0+X-1),at!==D&&(i.activeTexture(D),at=D)}function pe(D,ot,ut){ut===void 0&&(at===null?ut=i.TEXTURE0+X-1:ut=at);let _t=xt[ut];_t===void 0&&(_t={type:void 0,texture:void 0},xt[ut]=_t),(_t.type!==D||_t.texture!==ot)&&(at!==ut&&(i.activeTexture(ut),at=ut),i.bindTexture(D,ot||J[D]),_t.type=D,_t.texture=ot)}function C(){let D=xt[at];D!==void 0&&D.type!==void 0&&(i.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function _(){try{i.compressedTexImage2D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function B(){try{i.compressedTexImage3D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function j(){try{i.texSubImage2D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function tt(){try{i.texSubImage3D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function K(){try{i.compressedTexSubImage2D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function dt(){try{i.compressedTexSubImage3D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function lt(){try{i.texStorage2D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function At(){try{i.texStorage3D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Pt(){try{i.texImage2D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function st(){try{i.texImage3D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function mt(D){ge.equals(D)===!1&&(i.scissor(D.x,D.y,D.z,D.w),ge.copy(D))}function Gt(D){Fe.equals(D)===!1&&(i.viewport(D.x,D.y,D.z,D.w),Fe.copy(D))}function Tt(D,ot){let ut=c.get(ot);ut===void 0&&(ut=new WeakMap,c.set(ot,ut));let _t=ut.get(D);_t===void 0&&(_t=i.getUniformBlockIndex(ot,D.name),ut.set(D,_t))}function ht(D,ot){let _t=c.get(ot).get(D);l.get(ot)!==_t&&(i.uniformBlockBinding(ot,_t,D.__bindingPointIndex),l.set(ot,_t))}function Zt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),h={},at=null,xt={},u={},f=new WeakMap,d=[],x=null,M=!1,m=null,p=null,T=null,A=null,g=null,y=null,v=null,E=new yt(0,0,0),R=0,b=!1,w=null,I=null,L=null,k=null,O=null,ge.set(0,0,i.canvas.width,i.canvas.height),Fe.set(0,0,i.canvas.width,i.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:et,disable:Mt,bindFramebuffer:zt,drawBuffers:bt,useProgram:ne,setBlending:Ee,setMaterial:jt,setFlipSided:kt,setCullFace:St,setLineWidth:Re,setPolygonOffset:Rt,setScissorTest:Ct,activeTexture:de,bindTexture:pe,unbindTexture:C,compressedTexImage2D:_,compressedTexImage3D:B,texImage2D:Pt,texImage3D:st,updateUBOMapping:Tt,uniformBlockBinding:ht,texStorage2D:lt,texStorage3D:At,texSubImage2D:j,texSubImage3D:tt,compressedTexSubImage2D:K,compressedTexSubImage3D:dt,scissor:mt,viewport:Gt,reset:Zt}}function Vg(i,t,e,n,r,s,o){let a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new nt,h=new WeakMap,u,f=new WeakMap,d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(C,_){return d?new OffscreenCanvas(C,_):ms("canvas")}function M(C,_,B){let j=1,tt=pe(C);if((tt.width>B||tt.height>B)&&(j=B/Math.max(tt.width,tt.height)),j<1)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap||typeof VideoFrame<"u"&&C instanceof VideoFrame){let K=Math.floor(j*tt.width),dt=Math.floor(j*tt.height);u===void 0&&(u=x(K,dt));let lt=_?x(K,dt):u;return lt.width=K,lt.height=dt,lt.getContext("2d").drawImage(C,0,0,K,dt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+tt.width+"x"+tt.height+") to ("+K+"x"+dt+")."),lt}else return"data"in C&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+tt.width+"x"+tt.height+")."),C;return C}function m(C){return C.generateMipmaps}function p(C){i.generateMipmap(C)}function T(C){return C.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:C.isWebGL3DRenderTarget?i.TEXTURE_3D:C.isWebGLArrayRenderTarget||C.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function A(C,_,B,j,tt=!1){if(C!==null){if(i[C]!==void 0)return i[C];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let K=_;if(_===i.RED&&(B===i.FLOAT&&(K=i.R32F),B===i.HALF_FLOAT&&(K=i.R16F),B===i.UNSIGNED_BYTE&&(K=i.R8)),_===i.RED_INTEGER&&(B===i.UNSIGNED_BYTE&&(K=i.R8UI),B===i.UNSIGNED_SHORT&&(K=i.R16UI),B===i.UNSIGNED_INT&&(K=i.R32UI),B===i.BYTE&&(K=i.R8I),B===i.SHORT&&(K=i.R16I),B===i.INT&&(K=i.R32I)),_===i.RG&&(B===i.FLOAT&&(K=i.RG32F),B===i.HALF_FLOAT&&(K=i.RG16F),B===i.UNSIGNED_BYTE&&(K=i.RG8)),_===i.RG_INTEGER&&(B===i.UNSIGNED_BYTE&&(K=i.RG8UI),B===i.UNSIGNED_SHORT&&(K=i.RG16UI),B===i.UNSIGNED_INT&&(K=i.RG32UI),B===i.BYTE&&(K=i.RG8I),B===i.SHORT&&(K=i.RG16I),B===i.INT&&(K=i.RG32I)),_===i.RGB_INTEGER&&(B===i.UNSIGNED_BYTE&&(K=i.RGB8UI),B===i.UNSIGNED_SHORT&&(K=i.RGB16UI),B===i.UNSIGNED_INT&&(K=i.RGB32UI),B===i.BYTE&&(K=i.RGB8I),B===i.SHORT&&(K=i.RGB16I),B===i.INT&&(K=i.RGB32I)),_===i.RGBA_INTEGER&&(B===i.UNSIGNED_BYTE&&(K=i.RGBA8UI),B===i.UNSIGNED_SHORT&&(K=i.RGBA16UI),B===i.UNSIGNED_INT&&(K=i.RGBA32UI),B===i.BYTE&&(K=i.RGBA8I),B===i.SHORT&&(K=i.RGBA16I),B===i.INT&&(K=i.RGBA32I)),_===i.RGB&&(B===i.UNSIGNED_INT_5_9_9_9_REV&&(K=i.RGB9_E5),B===i.UNSIGNED_INT_10F_11F_11F_REV&&(K=i.R11F_G11F_B10F)),_===i.RGBA){let dt=tt?ds:ue.getTransfer(j);B===i.FLOAT&&(K=i.RGBA32F),B===i.HALF_FLOAT&&(K=i.RGBA16F),B===i.UNSIGNED_BYTE&&(K=dt===ye?i.SRGB8_ALPHA8:i.RGBA8),B===i.UNSIGNED_SHORT_4_4_4_4&&(K=i.RGBA4),B===i.UNSIGNED_SHORT_5_5_5_1&&(K=i.RGB5_A1)}return(K===i.R16F||K===i.R32F||K===i.RG16F||K===i.RG32F||K===i.RGBA16F||K===i.RGBA32F)&&t.get("EXT_color_buffer_float"),K}function g(C,_){let B;return C?_===null||_===Fi||_===Gr?B=i.DEPTH24_STENCIL8:_===ti?B=i.DEPTH32F_STENCIL8:_===kr&&(B=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):_===null||_===Fi||_===Gr?B=i.DEPTH_COMPONENT24:_===ti?B=i.DEPTH_COMPONENT32F:_===kr&&(B=i.DEPTH_COMPONENT16),B}function y(C,_){return m(C)===!0||C.isFramebufferTexture&&C.minFilter!==xn&&C.minFilter!==kn?Math.log2(Math.max(_.width,_.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?_.mipmaps.length:1}function v(C){let _=C.target;_.removeEventListener("dispose",v),R(_),_.isVideoTexture&&h.delete(_)}function E(C){let _=C.target;_.removeEventListener("dispose",E),w(_)}function R(C){let _=n.get(C);if(_.__webglInit===void 0)return;let B=C.source,j=f.get(B);if(j){let tt=j[_.__cacheKey];tt.usedTimes--,tt.usedTimes===0&&b(C),Object.keys(j).length===0&&f.delete(B)}n.remove(C)}function b(C){let _=n.get(C);i.deleteTexture(_.__webglTexture);let B=C.source,j=f.get(B);delete j[_.__cacheKey],o.memory.textures--}function w(C){let _=n.get(C);if(C.depthTexture&&(C.depthTexture.dispose(),n.remove(C.depthTexture)),C.isWebGLCubeRenderTarget)for(let j=0;j<6;j++){if(Array.isArray(_.__webglFramebuffer[j]))for(let tt=0;tt<_.__webglFramebuffer[j].length;tt++)i.deleteFramebuffer(_.__webglFramebuffer[j][tt]);else i.deleteFramebuffer(_.__webglFramebuffer[j]);_.__webglDepthbuffer&&i.deleteRenderbuffer(_.__webglDepthbuffer[j])}else{if(Array.isArray(_.__webglFramebuffer))for(let j=0;j<_.__webglFramebuffer.length;j++)i.deleteFramebuffer(_.__webglFramebuffer[j]);else i.deleteFramebuffer(_.__webglFramebuffer);if(_.__webglDepthbuffer&&i.deleteRenderbuffer(_.__webglDepthbuffer),_.__webglMultisampledFramebuffer&&i.deleteFramebuffer(_.__webglMultisampledFramebuffer),_.__webglColorRenderbuffer)for(let j=0;j<_.__webglColorRenderbuffer.length;j++)_.__webglColorRenderbuffer[j]&&i.deleteRenderbuffer(_.__webglColorRenderbuffer[j]);_.__webglDepthRenderbuffer&&i.deleteRenderbuffer(_.__webglDepthRenderbuffer)}let B=C.textures;for(let j=0,tt=B.length;j<tt;j++){let K=n.get(B[j]);K.__webglTexture&&(i.deleteTexture(K.__webglTexture),o.memory.textures--),n.remove(B[j])}n.remove(C)}let I=0;function L(){I=0}function k(){let C=I;return C>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+r.maxTextures),I+=1,C}function O(C){let _=[];return _.push(C.wrapS),_.push(C.wrapT),_.push(C.wrapR||0),_.push(C.magFilter),_.push(C.minFilter),_.push(C.anisotropy),_.push(C.internalFormat),_.push(C.format),_.push(C.type),_.push(C.generateMipmaps),_.push(C.premultiplyAlpha),_.push(C.flipY),_.push(C.unpackAlignment),_.push(C.colorSpace),_.join()}function X(C,_){let B=n.get(C);if(C.isVideoTexture&&Ct(C),C.isRenderTargetTexture===!1&&C.isExternalTexture!==!0&&C.version>0&&B.__version!==C.version){let j=C.image;if(j===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(j.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{J(B,C,_);return}}else C.isExternalTexture&&(B.__webglTexture=C.sourceTexture?C.sourceTexture:null);e.bindTexture(i.TEXTURE_2D,B.__webglTexture,i.TEXTURE0+_)}function z(C,_){let B=n.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&B.__version!==C.version){J(B,C,_);return}e.bindTexture(i.TEXTURE_2D_ARRAY,B.__webglTexture,i.TEXTURE0+_)}function $(C,_){let B=n.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&B.__version!==C.version){J(B,C,_);return}e.bindTexture(i.TEXTURE_3D,B.__webglTexture,i.TEXTURE0+_)}function G(C,_){let B=n.get(C);if(C.version>0&&B.__version!==C.version){et(B,C,_);return}e.bindTexture(i.TEXTURE_CUBE_MAP,B.__webglTexture,i.TEXTURE0+_)}let at={[ui]:i.REPEAT,[wi]:i.CLAMP_TO_EDGE,[To]:i.MIRRORED_REPEAT},xt={[xn]:i.NEAREST,[Xh]:i.NEAREST_MIPMAP_NEAREST,[ks]:i.NEAREST_MIPMAP_LINEAR,[kn]:i.LINEAR,[xa]:i.LINEAR_MIPMAP_NEAREST,[Pi]:i.LINEAR_MIPMAP_LINEAR},It={[Yh]:i.NEVER,[nu]:i.ALWAYS,[Zh]:i.LESS,[pc]:i.LEQUAL,[Qh]:i.EQUAL,[eu]:i.GEQUAL,[$h]:i.GREATER,[tu]:i.NOTEQUAL};function $t(C,_){if(_.type===ti&&t.has("OES_texture_float_linear")===!1&&(_.magFilter===kn||_.magFilter===xa||_.magFilter===ks||_.magFilter===Pi||_.minFilter===kn||_.minFilter===xa||_.minFilter===ks||_.minFilter===Pi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(C,i.TEXTURE_WRAP_S,at[_.wrapS]),i.texParameteri(C,i.TEXTURE_WRAP_T,at[_.wrapT]),(C===i.TEXTURE_3D||C===i.TEXTURE_2D_ARRAY)&&i.texParameteri(C,i.TEXTURE_WRAP_R,at[_.wrapR]),i.texParameteri(C,i.TEXTURE_MAG_FILTER,xt[_.magFilter]),i.texParameteri(C,i.TEXTURE_MIN_FILTER,xt[_.minFilter]),_.compareFunction&&(i.texParameteri(C,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(C,i.TEXTURE_COMPARE_FUNC,It[_.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(_.magFilter===xn||_.minFilter!==ks&&_.minFilter!==Pi||_.type===ti&&t.has("OES_texture_float_linear")===!1)return;if(_.anisotropy>1||n.get(_).__currentAnisotropy){let B=t.get("EXT_texture_filter_anisotropic");i.texParameterf(C,B.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(_.anisotropy,r.getMaxAnisotropy())),n.get(_).__currentAnisotropy=_.anisotropy}}}function ge(C,_){let B=!1;C.__webglInit===void 0&&(C.__webglInit=!0,_.addEventListener("dispose",v));let j=_.source,tt=f.get(j);tt===void 0&&(tt={},f.set(j,tt));let K=O(_);if(K!==C.__cacheKey){tt[K]===void 0&&(tt[K]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,B=!0),tt[K].usedTimes++;let dt=tt[C.__cacheKey];dt!==void 0&&(tt[C.__cacheKey].usedTimes--,dt.usedTimes===0&&b(_)),C.__cacheKey=K,C.__webglTexture=tt[K].texture}return B}function Fe(C,_,B){return Math.floor(Math.floor(C/B)/_)}function ae(C,_,B,j){let K=C.updateRanges;if(K.length===0)e.texSubImage2D(i.TEXTURE_2D,0,0,0,_.width,_.height,B,j,_.data);else{K.sort((st,mt)=>st.start-mt.start);let dt=0;for(let st=1;st<K.length;st++){let mt=K[dt],Gt=K[st],Tt=mt.start+mt.count,ht=Fe(Gt.start,_.width,4),Zt=Fe(mt.start,_.width,4);Gt.start<=Tt+1&&ht===Zt&&Fe(Gt.start+Gt.count-1,_.width,4)===ht?mt.count=Math.max(mt.count,Gt.start+Gt.count-mt.start):(++dt,K[dt]=Gt)}K.length=dt+1;let lt=i.getParameter(i.UNPACK_ROW_LENGTH),At=i.getParameter(i.UNPACK_SKIP_PIXELS),Pt=i.getParameter(i.UNPACK_SKIP_ROWS);i.pixelStorei(i.UNPACK_ROW_LENGTH,_.width);for(let st=0,mt=K.length;st<mt;st++){let Gt=K[st],Tt=Math.floor(Gt.start/4),ht=Math.ceil(Gt.count/4),Zt=Tt%_.width,D=Math.floor(Tt/_.width),ot=ht,ut=1;i.pixelStorei(i.UNPACK_SKIP_PIXELS,Zt),i.pixelStorei(i.UNPACK_SKIP_ROWS,D),e.texSubImage2D(i.TEXTURE_2D,0,Zt,D,ot,ut,B,j,_.data)}C.clearUpdateRanges(),i.pixelStorei(i.UNPACK_ROW_LENGTH,lt),i.pixelStorei(i.UNPACK_SKIP_PIXELS,At),i.pixelStorei(i.UNPACK_SKIP_ROWS,Pt)}}function J(C,_,B){let j=i.TEXTURE_2D;(_.isDataArrayTexture||_.isCompressedArrayTexture)&&(j=i.TEXTURE_2D_ARRAY),_.isData3DTexture&&(j=i.TEXTURE_3D);let tt=ge(C,_),K=_.source;e.bindTexture(j,C.__webglTexture,i.TEXTURE0+B);let dt=n.get(K);if(K.version!==dt.__version||tt===!0){e.activeTexture(i.TEXTURE0+B);let lt=ue.getPrimaries(ue.workingColorSpace),At=_.colorSpace===Wn?null:ue.getPrimaries(_.colorSpace),Pt=_.colorSpace===Wn||lt===At?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,_.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,_.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Pt);let st=M(_.image,!1,r.maxTextureSize);st=de(_,st);let mt=s.convert(_.format,_.colorSpace),Gt=s.convert(_.type),Tt=A(_.internalFormat,mt,Gt,_.colorSpace,_.isVideoTexture);$t(j,_);let ht,Zt=_.mipmaps,D=_.isVideoTexture!==!0,ot=dt.__version===void 0||tt===!0,ut=K.dataReady,_t=y(_,st);if(_.isDepthTexture)Tt=g(_.format===Vr,_.type),ot&&(D?e.texStorage2D(i.TEXTURE_2D,1,Tt,st.width,st.height):e.texImage2D(i.TEXTURE_2D,0,Tt,st.width,st.height,0,mt,Gt,null));else if(_.isDataTexture)if(Zt.length>0){D&&ot&&e.texStorage2D(i.TEXTURE_2D,_t,Tt,Zt[0].width,Zt[0].height);for(let it=0,Y=Zt.length;it<Y;it++)ht=Zt[it],D?ut&&e.texSubImage2D(i.TEXTURE_2D,it,0,0,ht.width,ht.height,mt,Gt,ht.data):e.texImage2D(i.TEXTURE_2D,it,Tt,ht.width,ht.height,0,mt,Gt,ht.data);_.generateMipmaps=!1}else D?(ot&&e.texStorage2D(i.TEXTURE_2D,_t,Tt,st.width,st.height),ut&&ae(_,st,mt,Gt)):e.texImage2D(i.TEXTURE_2D,0,Tt,st.width,st.height,0,mt,Gt,st.data);else if(_.isCompressedTexture)if(_.isCompressedArrayTexture){D&&ot&&e.texStorage3D(i.TEXTURE_2D_ARRAY,_t,Tt,Zt[0].width,Zt[0].height,st.depth);for(let it=0,Y=Zt.length;it<Y;it++)if(ht=Zt[it],_.format!==Nn)if(mt!==null)if(D){if(ut)if(_.layerUpdates.size>0){let wt=Sc(ht.width,ht.height,_.format,_.type);for(let Ht of _.layerUpdates){let Se=ht.data.subarray(Ht*wt/ht.data.BYTES_PER_ELEMENT,(Ht+1)*wt/ht.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,it,0,0,Ht,ht.width,ht.height,1,mt,Se)}_.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,it,0,0,0,ht.width,ht.height,st.depth,mt,ht.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,it,Tt,ht.width,ht.height,st.depth,0,ht.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else D?ut&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,it,0,0,0,ht.width,ht.height,st.depth,mt,Gt,ht.data):e.texImage3D(i.TEXTURE_2D_ARRAY,it,Tt,ht.width,ht.height,st.depth,0,mt,Gt,ht.data)}else{D&&ot&&e.texStorage2D(i.TEXTURE_2D,_t,Tt,Zt[0].width,Zt[0].height);for(let it=0,Y=Zt.length;it<Y;it++)ht=Zt[it],_.format!==Nn?mt!==null?D?ut&&e.compressedTexSubImage2D(i.TEXTURE_2D,it,0,0,ht.width,ht.height,mt,ht.data):e.compressedTexImage2D(i.TEXTURE_2D,it,Tt,ht.width,ht.height,0,ht.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):D?ut&&e.texSubImage2D(i.TEXTURE_2D,it,0,0,ht.width,ht.height,mt,Gt,ht.data):e.texImage2D(i.TEXTURE_2D,it,Tt,ht.width,ht.height,0,mt,Gt,ht.data)}else if(_.isDataArrayTexture)if(D){if(ot&&e.texStorage3D(i.TEXTURE_2D_ARRAY,_t,Tt,st.width,st.height,st.depth),ut)if(_.layerUpdates.size>0){let it=Sc(st.width,st.height,_.format,_.type);for(let Y of _.layerUpdates){let wt=st.data.subarray(Y*it/st.data.BYTES_PER_ELEMENT,(Y+1)*it/st.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,Y,st.width,st.height,1,mt,Gt,wt)}_.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,st.width,st.height,st.depth,mt,Gt,st.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,Tt,st.width,st.height,st.depth,0,mt,Gt,st.data);else if(_.isData3DTexture)D?(ot&&e.texStorage3D(i.TEXTURE_3D,_t,Tt,st.width,st.height,st.depth),ut&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,st.width,st.height,st.depth,mt,Gt,st.data)):e.texImage3D(i.TEXTURE_3D,0,Tt,st.width,st.height,st.depth,0,mt,Gt,st.data);else if(_.isFramebufferTexture){if(ot)if(D)e.texStorage2D(i.TEXTURE_2D,_t,Tt,st.width,st.height);else{let it=st.width,Y=st.height;for(let wt=0;wt<_t;wt++)e.texImage2D(i.TEXTURE_2D,wt,Tt,it,Y,0,mt,Gt,null),it>>=1,Y>>=1}}else if(Zt.length>0){if(D&&ot){let it=pe(Zt[0]);e.texStorage2D(i.TEXTURE_2D,_t,Tt,it.width,it.height)}for(let it=0,Y=Zt.length;it<Y;it++)ht=Zt[it],D?ut&&e.texSubImage2D(i.TEXTURE_2D,it,0,0,mt,Gt,ht):e.texImage2D(i.TEXTURE_2D,it,Tt,mt,Gt,ht);_.generateMipmaps=!1}else if(D){if(ot){let it=pe(st);e.texStorage2D(i.TEXTURE_2D,_t,Tt,it.width,it.height)}ut&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,mt,Gt,st)}else e.texImage2D(i.TEXTURE_2D,0,Tt,mt,Gt,st);m(_)&&p(j),dt.__version=K.version,_.onUpdate&&_.onUpdate(_)}C.__version=_.version}function et(C,_,B){if(_.image.length!==6)return;let j=ge(C,_),tt=_.source;e.bindTexture(i.TEXTURE_CUBE_MAP,C.__webglTexture,i.TEXTURE0+B);let K=n.get(tt);if(tt.version!==K.__version||j===!0){e.activeTexture(i.TEXTURE0+B);let dt=ue.getPrimaries(ue.workingColorSpace),lt=_.colorSpace===Wn?null:ue.getPrimaries(_.colorSpace),At=_.colorSpace===Wn||dt===lt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,_.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,_.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,At);let Pt=_.isCompressedTexture||_.image[0].isCompressedTexture,st=_.image[0]&&_.image[0].isDataTexture,mt=[];for(let Y=0;Y<6;Y++)!Pt&&!st?mt[Y]=M(_.image[Y],!0,r.maxCubemapSize):mt[Y]=st?_.image[Y].image:_.image[Y],mt[Y]=de(_,mt[Y]);let Gt=mt[0],Tt=s.convert(_.format,_.colorSpace),ht=s.convert(_.type),Zt=A(_.internalFormat,Tt,ht,_.colorSpace),D=_.isVideoTexture!==!0,ot=K.__version===void 0||j===!0,ut=tt.dataReady,_t=y(_,Gt);$t(i.TEXTURE_CUBE_MAP,_);let it;if(Pt){D&&ot&&e.texStorage2D(i.TEXTURE_CUBE_MAP,_t,Zt,Gt.width,Gt.height);for(let Y=0;Y<6;Y++){it=mt[Y].mipmaps;for(let wt=0;wt<it.length;wt++){let Ht=it[wt];_.format!==Nn?Tt!==null?D?ut&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Y,wt,0,0,Ht.width,Ht.height,Tt,Ht.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Y,wt,Zt,Ht.width,Ht.height,0,Ht.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):D?ut&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Y,wt,0,0,Ht.width,Ht.height,Tt,ht,Ht.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Y,wt,Zt,Ht.width,Ht.height,0,Tt,ht,Ht.data)}}}else{if(it=_.mipmaps,D&&ot){it.length>0&&_t++;let Y=pe(mt[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,_t,Zt,Y.width,Y.height)}for(let Y=0;Y<6;Y++)if(st){D?ut&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0,0,0,mt[Y].width,mt[Y].height,Tt,ht,mt[Y].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0,Zt,mt[Y].width,mt[Y].height,0,Tt,ht,mt[Y].data);for(let wt=0;wt<it.length;wt++){let Se=it[wt].image[Y].image;D?ut&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Y,wt+1,0,0,Se.width,Se.height,Tt,ht,Se.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Y,wt+1,Zt,Se.width,Se.height,0,Tt,ht,Se.data)}}else{D?ut&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0,0,0,Tt,ht,mt[Y]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0,Zt,Tt,ht,mt[Y]);for(let wt=0;wt<it.length;wt++){let Ht=it[wt];D?ut&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Y,wt+1,0,0,Tt,ht,Ht.image[Y]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Y,wt+1,Zt,Tt,ht,Ht.image[Y])}}}m(_)&&p(i.TEXTURE_CUBE_MAP),K.__version=tt.version,_.onUpdate&&_.onUpdate(_)}C.__version=_.version}function Mt(C,_,B,j,tt,K){let dt=s.convert(B.format,B.colorSpace),lt=s.convert(B.type),At=A(B.internalFormat,dt,lt,B.colorSpace),Pt=n.get(_),st=n.get(B);if(st.__renderTarget=_,!Pt.__hasExternalTextures){let mt=Math.max(1,_.width>>K),Gt=Math.max(1,_.height>>K);tt===i.TEXTURE_3D||tt===i.TEXTURE_2D_ARRAY?e.texImage3D(tt,K,At,mt,Gt,_.depth,0,dt,lt,null):e.texImage2D(tt,K,At,mt,Gt,0,dt,lt,null)}e.bindFramebuffer(i.FRAMEBUFFER,C),Rt(_)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,j,tt,st.__webglTexture,0,Re(_)):(tt===i.TEXTURE_2D||tt>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&tt<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,j,tt,st.__webglTexture,K),e.bindFramebuffer(i.FRAMEBUFFER,null)}function zt(C,_,B){if(i.bindRenderbuffer(i.RENDERBUFFER,C),_.depthBuffer){let j=_.depthTexture,tt=j&&j.isDepthTexture?j.type:null,K=g(_.stencilBuffer,tt),dt=_.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,lt=Re(_);Rt(_)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,lt,K,_.width,_.height):B?i.renderbufferStorageMultisample(i.RENDERBUFFER,lt,K,_.width,_.height):i.renderbufferStorage(i.RENDERBUFFER,K,_.width,_.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,dt,i.RENDERBUFFER,C)}else{let j=_.textures;for(let tt=0;tt<j.length;tt++){let K=j[tt],dt=s.convert(K.format,K.colorSpace),lt=s.convert(K.type),At=A(K.internalFormat,dt,lt,K.colorSpace),Pt=Re(_);B&&Rt(_)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Pt,At,_.width,_.height):Rt(_)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Pt,At,_.width,_.height):i.renderbufferStorage(i.RENDERBUFFER,At,_.width,_.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function bt(C,_){if(_&&_.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,C),!(_.depthTexture&&_.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let j=n.get(_.depthTexture);j.__renderTarget=_,(!j.__webglTexture||_.depthTexture.image.width!==_.width||_.depthTexture.image.height!==_.height)&&(_.depthTexture.image.width=_.width,_.depthTexture.image.height=_.height,_.depthTexture.needsUpdate=!0),X(_.depthTexture,0);let tt=j.__webglTexture,K=Re(_);if(_.depthTexture.format===Tr)Rt(_)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,tt,0,K):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,tt,0);else if(_.depthTexture.format===Vr)Rt(_)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,tt,0,K):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,tt,0);else throw new Error("Unknown depthTexture format")}function ne(C){let _=n.get(C),B=C.isWebGLCubeRenderTarget===!0;if(_.__boundDepthTexture!==C.depthTexture){let j=C.depthTexture;if(_.__depthDisposeCallback&&_.__depthDisposeCallback(),j){let tt=()=>{delete _.__boundDepthTexture,delete _.__depthDisposeCallback,j.removeEventListener("dispose",tt)};j.addEventListener("dispose",tt),_.__depthDisposeCallback=tt}_.__boundDepthTexture=j}if(C.depthTexture&&!_.__autoAllocateDepthBuffer){if(B)throw new Error("target.depthTexture not supported in Cube render targets");let j=C.texture.mipmaps;j&&j.length>0?bt(_.__webglFramebuffer[0],C):bt(_.__webglFramebuffer,C)}else if(B){_.__webglDepthbuffer=[];for(let j=0;j<6;j++)if(e.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer[j]),_.__webglDepthbuffer[j]===void 0)_.__webglDepthbuffer[j]=i.createRenderbuffer(),zt(_.__webglDepthbuffer[j],C,!1);else{let tt=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,K=_.__webglDepthbuffer[j];i.bindRenderbuffer(i.RENDERBUFFER,K),i.framebufferRenderbuffer(i.FRAMEBUFFER,tt,i.RENDERBUFFER,K)}}else{let j=C.texture.mipmaps;if(j&&j.length>0?e.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer[0]):e.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer),_.__webglDepthbuffer===void 0)_.__webglDepthbuffer=i.createRenderbuffer(),zt(_.__webglDepthbuffer,C,!1);else{let tt=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,K=_.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,K),i.framebufferRenderbuffer(i.FRAMEBUFFER,tt,i.RENDERBUFFER,K)}}e.bindFramebuffer(i.FRAMEBUFFER,null)}function je(C,_,B){let j=n.get(C);_!==void 0&&Mt(j.__webglFramebuffer,C,C.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),B!==void 0&&ne(C)}function F(C){let _=C.texture,B=n.get(C),j=n.get(_);C.addEventListener("dispose",E);let tt=C.textures,K=C.isWebGLCubeRenderTarget===!0,dt=tt.length>1;if(dt||(j.__webglTexture===void 0&&(j.__webglTexture=i.createTexture()),j.__version=_.version,o.memory.textures++),K){B.__webglFramebuffer=[];for(let lt=0;lt<6;lt++)if(_.mipmaps&&_.mipmaps.length>0){B.__webglFramebuffer[lt]=[];for(let At=0;At<_.mipmaps.length;At++)B.__webglFramebuffer[lt][At]=i.createFramebuffer()}else B.__webglFramebuffer[lt]=i.createFramebuffer()}else{if(_.mipmaps&&_.mipmaps.length>0){B.__webglFramebuffer=[];for(let lt=0;lt<_.mipmaps.length;lt++)B.__webglFramebuffer[lt]=i.createFramebuffer()}else B.__webglFramebuffer=i.createFramebuffer();if(dt)for(let lt=0,At=tt.length;lt<At;lt++){let Pt=n.get(tt[lt]);Pt.__webglTexture===void 0&&(Pt.__webglTexture=i.createTexture(),o.memory.textures++)}if(C.samples>0&&Rt(C)===!1){B.__webglMultisampledFramebuffer=i.createFramebuffer(),B.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,B.__webglMultisampledFramebuffer);for(let lt=0;lt<tt.length;lt++){let At=tt[lt];B.__webglColorRenderbuffer[lt]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,B.__webglColorRenderbuffer[lt]);let Pt=s.convert(At.format,At.colorSpace),st=s.convert(At.type),mt=A(At.internalFormat,Pt,st,At.colorSpace,C.isXRRenderTarget===!0),Gt=Re(C);i.renderbufferStorageMultisample(i.RENDERBUFFER,Gt,mt,C.width,C.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+lt,i.RENDERBUFFER,B.__webglColorRenderbuffer[lt])}i.bindRenderbuffer(i.RENDERBUFFER,null),C.depthBuffer&&(B.__webglDepthRenderbuffer=i.createRenderbuffer(),zt(B.__webglDepthRenderbuffer,C,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(K){e.bindTexture(i.TEXTURE_CUBE_MAP,j.__webglTexture),$t(i.TEXTURE_CUBE_MAP,_);for(let lt=0;lt<6;lt++)if(_.mipmaps&&_.mipmaps.length>0)for(let At=0;At<_.mipmaps.length;At++)Mt(B.__webglFramebuffer[lt][At],C,_,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+lt,At);else Mt(B.__webglFramebuffer[lt],C,_,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+lt,0);m(_)&&p(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(dt){for(let lt=0,At=tt.length;lt<At;lt++){let Pt=tt[lt],st=n.get(Pt),mt=i.TEXTURE_2D;(C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(mt=C.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(mt,st.__webglTexture),$t(mt,Pt),Mt(B.__webglFramebuffer,C,Pt,i.COLOR_ATTACHMENT0+lt,mt,0),m(Pt)&&p(mt)}e.unbindTexture()}else{let lt=i.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(lt=C.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(lt,j.__webglTexture),$t(lt,_),_.mipmaps&&_.mipmaps.length>0)for(let At=0;At<_.mipmaps.length;At++)Mt(B.__webglFramebuffer[At],C,_,i.COLOR_ATTACHMENT0,lt,At);else Mt(B.__webglFramebuffer,C,_,i.COLOR_ATTACHMENT0,lt,0);m(_)&&p(lt),e.unbindTexture()}C.depthBuffer&&ne(C)}function Ee(C){let _=C.textures;for(let B=0,j=_.length;B<j;B++){let tt=_[B];if(m(tt)){let K=T(C),dt=n.get(tt).__webglTexture;e.bindTexture(K,dt),p(K),e.unbindTexture()}}}let jt=[],kt=[];function St(C){if(C.samples>0){if(Rt(C)===!1){let _=C.textures,B=C.width,j=C.height,tt=i.COLOR_BUFFER_BIT,K=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,dt=n.get(C),lt=_.length>1;if(lt)for(let Pt=0;Pt<_.length;Pt++)e.bindFramebuffer(i.FRAMEBUFFER,dt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Pt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,dt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Pt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,dt.__webglMultisampledFramebuffer);let At=C.texture.mipmaps;At&&At.length>0?e.bindFramebuffer(i.DRAW_FRAMEBUFFER,dt.__webglFramebuffer[0]):e.bindFramebuffer(i.DRAW_FRAMEBUFFER,dt.__webglFramebuffer);for(let Pt=0;Pt<_.length;Pt++){if(C.resolveDepthBuffer&&(C.depthBuffer&&(tt|=i.DEPTH_BUFFER_BIT),C.stencilBuffer&&C.resolveStencilBuffer&&(tt|=i.STENCIL_BUFFER_BIT)),lt){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,dt.__webglColorRenderbuffer[Pt]);let st=n.get(_[Pt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,st,0)}i.blitFramebuffer(0,0,B,j,0,0,B,j,tt,i.NEAREST),l===!0&&(jt.length=0,kt.length=0,jt.push(i.COLOR_ATTACHMENT0+Pt),C.depthBuffer&&C.resolveDepthBuffer===!1&&(jt.push(K),kt.push(K),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,kt)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,jt))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),lt)for(let Pt=0;Pt<_.length;Pt++){e.bindFramebuffer(i.FRAMEBUFFER,dt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Pt,i.RENDERBUFFER,dt.__webglColorRenderbuffer[Pt]);let st=n.get(_[Pt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,dt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Pt,i.TEXTURE_2D,st,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,dt.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.resolveDepthBuffer===!1&&l){let _=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[_])}}}function Re(C){return Math.min(r.maxSamples,C.samples)}function Rt(C){let _=n.get(C);return C.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&_.__useRenderToTexture!==!1}function Ct(C){let _=o.render.frame;h.get(C)!==_&&(h.set(C,_),C.update())}function de(C,_){let B=C.colorSpace,j=C.format,tt=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||B!==Wi&&B!==Wn&&(ue.getTransfer(B)===ye?(j!==Nn||tt!==$n)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",B)),_}function pe(C){return typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement?(c.width=C.naturalWidth||C.width,c.height=C.naturalHeight||C.height):typeof VideoFrame<"u"&&C instanceof VideoFrame?(c.width=C.displayWidth,c.height=C.displayHeight):(c.width=C.width,c.height=C.height),c}this.allocateTextureUnit=k,this.resetTextureUnits=L,this.setTexture2D=X,this.setTexture2DArray=z,this.setTexture3D=$,this.setTextureCube=G,this.rebindTextures=je,this.setupRenderTarget=F,this.updateRenderTargetMipmap=Ee,this.updateMultisampleRenderTarget=St,this.setupDepthRenderbuffer=ne,this.setupFrameBufferTexture=Mt,this.useMultisampledRTT=Rt}function Wg(i,t){function e(n,r=Wn){let s,o=ue.getTransfer(r);if(n===$n)return i.UNSIGNED_BYTE;if(n===ya)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Ma)return i.UNSIGNED_SHORT_5_5_5_1;if(n===lc)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===cc)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===oc)return i.BYTE;if(n===ac)return i.SHORT;if(n===kr)return i.UNSIGNED_SHORT;if(n===va)return i.INT;if(n===Fi)return i.UNSIGNED_INT;if(n===ti)return i.FLOAT;if(n===Ln)return i.HALF_FLOAT;if(n===hc)return i.ALPHA;if(n===uc)return i.RGB;if(n===Nn)return i.RGBA;if(n===Tr)return i.DEPTH_COMPONENT;if(n===Vr)return i.DEPTH_STENCIL;if(n===fc)return i.RED;if(n===Sa)return i.RED_INTEGER;if(n===dc)return i.RG;if(n===_a)return i.RG_INTEGER;if(n===ba)return i.RGBA_INTEGER;if(n===Gs||n===Vs||n===Ws||n===Xs)if(o===ye)if(s=t.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===Gs)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Vs)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Ws)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Xs)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=t.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===Gs)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Vs)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Ws)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Xs)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Ea||n===wa||n===Aa||n===Ta)if(s=t.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===Ea)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===wa)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Aa)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Ta)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Ra||n===Ca||n===Ia)if(s=t.get("WEBGL_compressed_texture_etc"),s!==null){if(n===Ra||n===Ca)return o===ye?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===Ia)return o===ye?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Pa||n===Fa||n===Ua||n===Da||n===La||n===Na||n===Ba||n===Oa||n===Ha||n===za||n===ka||n===Ga||n===Va||n===Wa)if(s=t.get("WEBGL_compressed_texture_astc"),s!==null){if(n===Pa)return o===ye?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Fa)return o===ye?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Ua)return o===ye?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Da)return o===ye?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===La)return o===ye?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Na)return o===ye?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Ba)return o===ye?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Oa)return o===ye?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Ha)return o===ye?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===za)return o===ye?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===ka)return o===ye?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Ga)return o===ye?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Va)return o===ye?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Wa)return o===ye?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Xa||n===Ka||n===ja)if(s=t.get("EXT_texture_compression_bptc"),s!==null){if(n===Xa)return o===ye?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Ka)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===ja)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===qa||n===Ja||n===Ya||n===Za)if(s=t.get("EXT_texture_compression_rgtc"),s!==null){if(n===qa)return s.COMPRESSED_RED_RGTC1_EXT;if(n===Ja)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Ya)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Za)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Gr?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}var Xg=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Kg=`
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

}`,Dc=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let n=new As(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new _e({vertexShader:Xg,fragmentShader:Kg,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Nt(new yn(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Lc=class extends fi{constructor(t,e){super();let n=this,r=null,s=1,o=null,a="local-floor",l=1,c=null,h=null,u=null,f=null,d=null,x=null,M=typeof XRWebGLBinding<"u",m=new Dc,p={},T=e.getContextAttributes(),A=null,g=null,y=[],v=[],E=new nt,R=null,b=new Qe;b.viewport=new Le;let w=new Qe;w.viewport=new Le;let I=[b,w],L=new ea,k=null,O=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(J){let et=y[J];return et===void 0&&(et=new Fr,y[J]=et),et.getTargetRaySpace()},this.getControllerGrip=function(J){let et=y[J];return et===void 0&&(et=new Fr,y[J]=et),et.getGripSpace()},this.getHand=function(J){let et=y[J];return et===void 0&&(et=new Fr,y[J]=et),et.getHandSpace()};function X(J){let et=v.indexOf(J.inputSource);if(et===-1)return;let Mt=y[et];Mt!==void 0&&(Mt.update(J.inputSource,J.frame,c||o),Mt.dispatchEvent({type:J.type,data:J.inputSource}))}function z(){r.removeEventListener("select",X),r.removeEventListener("selectstart",X),r.removeEventListener("selectend",X),r.removeEventListener("squeeze",X),r.removeEventListener("squeezestart",X),r.removeEventListener("squeezeend",X),r.removeEventListener("end",z),r.removeEventListener("inputsourceschange",$);for(let J=0;J<y.length;J++){let et=v[J];et!==null&&(v[J]=null,y[J].disconnect(et))}k=null,O=null,m.reset();for(let J in p)delete p[J];t.setRenderTarget(A),d=null,f=null,u=null,r=null,g=null,ae.stop(),n.isPresenting=!1,t.setPixelRatio(R),t.setSize(E.width,E.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(J){s=J,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(J){a=J,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(J){c=J},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return u===null&&M&&(u=new XRWebGLBinding(r,e)),u},this.getFrame=function(){return x},this.getSession=function(){return r},this.setSession=async function(J){if(r=J,r!==null){if(A=t.getRenderTarget(),r.addEventListener("select",X),r.addEventListener("selectstart",X),r.addEventListener("selectend",X),r.addEventListener("squeeze",X),r.addEventListener("squeezestart",X),r.addEventListener("squeezeend",X),r.addEventListener("end",z),r.addEventListener("inputsourceschange",$),T.xrCompatible!==!0&&await e.makeXRCompatible(),R=t.getPixelRatio(),t.getSize(E),M&&"createProjectionLayer"in XRWebGLBinding.prototype){let Mt=null,zt=null,bt=null;T.depth&&(bt=T.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,Mt=T.stencil?Vr:Tr,zt=T.stencil?Gr:Fi);let ne={colorFormat:e.RGBA8,depthFormat:bt,scaleFactor:s};u=this.getBinding(),f=u.createProjectionLayer(ne),r.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),g=new $e(f.textureWidth,f.textureHeight,{format:Nn,type:$n,depthTexture:new ws(f.textureWidth,f.textureHeight,zt,void 0,void 0,void 0,void 0,void 0,void 0,Mt),stencilBuffer:T.stencil,colorSpace:t.outputColorSpace,samples:T.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}else{let Mt={antialias:T.antialias,alpha:!0,depth:T.depth,stencil:T.stencil,framebufferScaleFactor:s};d=new XRWebGLLayer(r,e,Mt),r.updateRenderState({baseLayer:d}),t.setPixelRatio(1),t.setSize(d.framebufferWidth,d.framebufferHeight,!1),g=new $e(d.framebufferWidth,d.framebufferHeight,{format:Nn,type:$n,colorSpace:t.outputColorSpace,stencilBuffer:T.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}g.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await r.requestReferenceSpace(a),ae.setContext(r),ae.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function $(J){for(let et=0;et<J.removed.length;et++){let Mt=J.removed[et],zt=v.indexOf(Mt);zt>=0&&(v[zt]=null,y[zt].disconnect(Mt))}for(let et=0;et<J.added.length;et++){let Mt=J.added[et],zt=v.indexOf(Mt);if(zt===-1){for(let ne=0;ne<y.length;ne++)if(ne>=v.length){v.push(Mt),zt=ne;break}else if(v[ne]===null){v[ne]=Mt,zt=ne;break}if(zt===-1)break}let bt=y[zt];bt&&bt.connect(Mt)}}let G=new P,at=new P;function xt(J,et,Mt){G.setFromMatrixPosition(et.matrixWorld),at.setFromMatrixPosition(Mt.matrixWorld);let zt=G.distanceTo(at),bt=et.projectionMatrix.elements,ne=Mt.projectionMatrix.elements,je=bt[14]/(bt[10]-1),F=bt[14]/(bt[10]+1),Ee=(bt[9]+1)/bt[5],jt=(bt[9]-1)/bt[5],kt=(bt[8]-1)/bt[0],St=(ne[8]+1)/ne[0],Re=je*kt,Rt=je*St,Ct=zt/(-kt+St),de=Ct*-kt;if(et.matrixWorld.decompose(J.position,J.quaternion,J.scale),J.translateX(de),J.translateZ(Ct),J.matrixWorld.compose(J.position,J.quaternion,J.scale),J.matrixWorldInverse.copy(J.matrixWorld).invert(),bt[10]===-1)J.projectionMatrix.copy(et.projectionMatrix),J.projectionMatrixInverse.copy(et.projectionMatrixInverse);else{let pe=je+Ct,C=F+Ct,_=Re-de,B=Rt+(zt-de),j=Ee*F/C*pe,tt=jt*F/C*pe;J.projectionMatrix.makePerspective(_,B,j,tt,pe,C),J.projectionMatrixInverse.copy(J.projectionMatrix).invert()}}function It(J,et){et===null?J.matrixWorld.copy(J.matrix):J.matrixWorld.multiplyMatrices(et.matrixWorld,J.matrix),J.matrixWorldInverse.copy(J.matrixWorld).invert()}this.updateCamera=function(J){if(r===null)return;let et=J.near,Mt=J.far;m.texture!==null&&(m.depthNear>0&&(et=m.depthNear),m.depthFar>0&&(Mt=m.depthFar)),L.near=w.near=b.near=et,L.far=w.far=b.far=Mt,(k!==L.near||O!==L.far)&&(r.updateRenderState({depthNear:L.near,depthFar:L.far}),k=L.near,O=L.far),L.layers.mask=J.layers.mask|6,b.layers.mask=L.layers.mask&3,w.layers.mask=L.layers.mask&5;let zt=J.parent,bt=L.cameras;It(L,zt);for(let ne=0;ne<bt.length;ne++)It(bt[ne],zt);bt.length===2?xt(L,b,w):L.projectionMatrix.copy(b.projectionMatrix),$t(J,L,zt)};function $t(J,et,Mt){Mt===null?J.matrix.copy(et.matrixWorld):(J.matrix.copy(Mt.matrixWorld),J.matrix.invert(),J.matrix.multiply(et.matrixWorld)),J.matrix.decompose(J.position,J.quaternion,J.scale),J.updateMatrixWorld(!0),J.projectionMatrix.copy(et.projectionMatrix),J.projectionMatrixInverse.copy(et.projectionMatrixInverse),J.isPerspectiveCamera&&(J.fov=Io*2*Math.atan(1/J.projectionMatrix.elements[5]),J.zoom=1)}this.getCamera=function(){return L},this.getFoveation=function(){if(!(f===null&&d===null))return l},this.setFoveation=function(J){l=J,f!==null&&(f.fixedFoveation=J),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=J)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(L)},this.getCameraTexture=function(J){return p[J]};let ge=null;function Fe(J,et){if(h=et.getViewerPose(c||o),x=et,h!==null){let Mt=h.views;d!==null&&(t.setRenderTargetFramebuffer(g,d.framebuffer),t.setRenderTarget(g));let zt=!1;Mt.length!==L.cameras.length&&(L.cameras.length=0,zt=!0);for(let F=0;F<Mt.length;F++){let Ee=Mt[F],jt=null;if(d!==null)jt=d.getViewport(Ee);else{let St=u.getViewSubImage(f,Ee);jt=St.viewport,F===0&&(t.setRenderTargetTextures(g,St.colorTexture,St.depthStencilTexture),t.setRenderTarget(g))}let kt=I[F];kt===void 0&&(kt=new Qe,kt.layers.enable(F),kt.viewport=new Le,I[F]=kt),kt.matrix.fromArray(Ee.transform.matrix),kt.matrix.decompose(kt.position,kt.quaternion,kt.scale),kt.projectionMatrix.fromArray(Ee.projectionMatrix),kt.projectionMatrixInverse.copy(kt.projectionMatrix).invert(),kt.viewport.set(jt.x,jt.y,jt.width,jt.height),F===0&&(L.matrix.copy(kt.matrix),L.matrix.decompose(L.position,L.quaternion,L.scale)),zt===!0&&L.cameras.push(kt)}let bt=r.enabledFeatures;if(bt&&bt.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&M){u=n.getBinding();let F=u.getDepthInformation(Mt[0]);F&&F.isValid&&F.texture&&m.init(F,r.renderState)}if(bt&&bt.includes("camera-access")&&M){t.state.unbindTexture(),u=n.getBinding();for(let F=0;F<Mt.length;F++){let Ee=Mt[F].camera;if(Ee){let jt=p[Ee];jt||(jt=new As,p[Ee]=jt);let kt=u.getCameraImage(Ee);jt.sourceTexture=kt}}}}for(let Mt=0;Mt<y.length;Mt++){let zt=v[Mt],bt=y[Mt];zt!==null&&bt!==void 0&&bt.update(zt,et,c||o)}ge&&ge(J,et),et.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:et}),x=null}let ae=new Lu;ae.setAnimationLoop(Fe),this.setAnimationLoop=function(J){ge=J},this.dispose=function(){}}},tr=new Jn,jg=new be;function qg(i,t){function e(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,xc(i)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function r(m,p,T,A,g){p.isMeshBasicMaterial||p.isMeshLambertMaterial?s(m,p):p.isMeshToonMaterial?(s(m,p),u(m,p)):p.isMeshPhongMaterial?(s(m,p),h(m,p)):p.isMeshStandardMaterial?(s(m,p),f(m,p),p.isMeshPhysicalMaterial&&d(m,p,g)):p.isMeshMatcapMaterial?(s(m,p),x(m,p)):p.isMeshDepthMaterial?s(m,p):p.isMeshDistanceMaterial?(s(m,p),M(m,p)):p.isMeshNormalMaterial?s(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?l(m,p,T,A):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,e(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===sn&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,e(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===sn&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,e(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,e(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);let T=t.get(p),A=T.envMap,g=T.envMapRotation;A&&(m.envMap.value=A,tr.copy(g),tr.x*=-1,tr.y*=-1,tr.z*=-1,A.isCubeTexture&&A.isRenderTargetTexture===!1&&(tr.y*=-1,tr.z*=-1),m.envMapRotation.value.setFromMatrix4(jg.makeRotationFromEuler(tr)),m.flipEnvMap.value=A.isCubeTexture&&A.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,T,A){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*T,m.scale.value=A*.5,p.map&&(m.map.value=p.map,e(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function u(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function f(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function d(m,p,T){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===sn&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=T.texture,m.transmissionSamplerSize.value.set(T.width,T.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,m.specularIntensityMapTransform))}function x(m,p){p.matcap&&(m.matcap.value=p.matcap)}function M(m,p){let T=t.get(p).light;m.referencePosition.value.setFromMatrixPosition(T.matrixWorld),m.nearDistance.value=T.shadow.camera.near,m.farDistance.value=T.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function Jg(i,t,e,n){let r={},s={},o=[],a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(T,A){let g=A.program;n.uniformBlockBinding(T,g)}function c(T,A){let g=r[T.id];g===void 0&&(x(T),g=h(T),r[T.id]=g,T.addEventListener("dispose",m));let y=A.program;n.updateUBOMapping(T,y);let v=t.render.frame;s[T.id]!==v&&(f(T),s[T.id]=v)}function h(T){let A=u();T.__bindingPointIndex=A;let g=i.createBuffer(),y=T.__size,v=T.usage;return i.bindBuffer(i.UNIFORM_BUFFER,g),i.bufferData(i.UNIFORM_BUFFER,y,v),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,A,g),g}function u(){for(let T=0;T<a;T++)if(o.indexOf(T)===-1)return o.push(T),T;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(T){let A=r[T.id],g=T.uniforms,y=T.__cache;i.bindBuffer(i.UNIFORM_BUFFER,A);for(let v=0,E=g.length;v<E;v++){let R=Array.isArray(g[v])?g[v]:[g[v]];for(let b=0,w=R.length;b<w;b++){let I=R[b];if(d(I,v,b,y)===!0){let L=I.__offset,k=Array.isArray(I.value)?I.value:[I.value],O=0;for(let X=0;X<k.length;X++){let z=k[X],$=M(z);typeof z=="number"||typeof z=="boolean"?(I.__data[0]=z,i.bufferSubData(i.UNIFORM_BUFFER,L+O,I.__data)):z.isMatrix3?(I.__data[0]=z.elements[0],I.__data[1]=z.elements[1],I.__data[2]=z.elements[2],I.__data[3]=0,I.__data[4]=z.elements[3],I.__data[5]=z.elements[4],I.__data[6]=z.elements[5],I.__data[7]=0,I.__data[8]=z.elements[6],I.__data[9]=z.elements[7],I.__data[10]=z.elements[8],I.__data[11]=0):(z.toArray(I.__data,O),O+=$.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,L,I.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function d(T,A,g,y){let v=T.value,E=A+"_"+g;if(y[E]===void 0)return typeof v=="number"||typeof v=="boolean"?y[E]=v:y[E]=v.clone(),!0;{let R=y[E];if(typeof v=="number"||typeof v=="boolean"){if(R!==v)return y[E]=v,!0}else if(R.equals(v)===!1)return R.copy(v),!0}return!1}function x(T){let A=T.uniforms,g=0,y=16;for(let E=0,R=A.length;E<R;E++){let b=Array.isArray(A[E])?A[E]:[A[E]];for(let w=0,I=b.length;w<I;w++){let L=b[w],k=Array.isArray(L.value)?L.value:[L.value];for(let O=0,X=k.length;O<X;O++){let z=k[O],$=M(z),G=g%y,at=G%$.boundary,xt=G+at;g+=at,xt!==0&&y-xt<$.storage&&(g+=y-xt),L.__data=new Float32Array($.storage/Float32Array.BYTES_PER_ELEMENT),L.__offset=g,g+=$.storage}}}let v=g%y;return v>0&&(g+=y-v),T.__size=g,T.__cache={},this}function M(T){let A={boundary:0,storage:0};return typeof T=="number"||typeof T=="boolean"?(A.boundary=4,A.storage=4):T.isVector2?(A.boundary=8,A.storage=8):T.isVector3||T.isColor?(A.boundary=16,A.storage=12):T.isVector4?(A.boundary=16,A.storage=16):T.isMatrix3?(A.boundary=48,A.storage=48):T.isMatrix4?(A.boundary=64,A.storage=64):T.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",T),A}function m(T){let A=T.target;A.removeEventListener("dispose",m);let g=o.indexOf(A.__bindingPointIndex);o.splice(g,1),i.deleteBuffer(r[A.id]),delete r[A.id],delete s[A.id]}function p(){for(let T in r)i.deleteBuffer(r[T]);o=[],r={},s={}}return{bind:l,update:c,dispose:p}}var nl=class{constructor(t={}){let{canvas:e=iu(),context:n=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:f=!1}=t;this.isWebGLRenderer=!0;let d;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=n.getContextAttributes().alpha}else d=o;let x=new Uint32Array(4),M=new Int32Array(4),m=null,p=null,T=[],A=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=mi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let g=this,y=!1;this._outputColorSpace=Ze;let v=0,E=0,R=null,b=-1,w=null,I=new Le,L=new Le,k=null,O=new yt(0),X=0,z=e.width,$=e.height,G=1,at=null,xt=null,It=new Le(0,0,z,$),$t=new Le(0,0,z,$),ge=!1,Fe=new Es,ae=!1,J=!1,et=new be,Mt=new P,zt=new Le,bt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},ne=!1;function je(){return R===null?G:1}let F=n;function Ee(S,U){return e.getContext(S,U)}try{let S={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${"180"}`),e.addEventListener("webglcontextlost",ut,!1),e.addEventListener("webglcontextrestored",_t,!1),e.addEventListener("webglcontextcreationerror",it,!1),F===null){let U="webgl2";if(F=Ee(U,S),F===null)throw Ee(U)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(S){throw console.error("THREE.WebGLRenderer: "+S.message),S}let jt,kt,St,Re,Rt,Ct,de,pe,C,_,B,j,tt,K,dt,lt,At,Pt,st,mt,Gt,Tt,ht,Zt;function D(){jt=new d0(F),jt.init(),Tt=new Wg(F,jt),kt=new o0(F,jt,t,Tt),St=new Gg(F,jt),kt.reversedDepthBuffer&&f&&St.buffers.depth.setReversed(!0),Re=new g0(F),Rt=new Cg,Ct=new Vg(F,jt,St,Rt,kt,Tt,Re),de=new l0(g),pe=new f0(g),C=new _d(F),ht=new r0(F,C),_=new p0(F,C,Re,ht),B=new v0(F,_,C,Re),st=new x0(F,kt,Ct),lt=new a0(Rt),j=new Rg(g,de,pe,jt,kt,ht,lt),tt=new qg(g,Rt),K=new Pg,dt=new Bg(jt),Pt=new i0(g,de,pe,St,B,d,l),At=new zg(g,B,kt),Zt=new Jg(F,Re,kt,St),mt=new s0(F,jt,Re),Gt=new m0(F,jt,Re),Re.programs=j.programs,g.capabilities=kt,g.extensions=jt,g.properties=Rt,g.renderLists=K,g.shadowMap=At,g.state=St,g.info=Re}D();let ot=new Lc(g,F);this.xr=ot,this.getContext=function(){return F},this.getContextAttributes=function(){return F.getContextAttributes()},this.forceContextLoss=function(){let S=jt.get("WEBGL_lose_context");S&&S.loseContext()},this.forceContextRestore=function(){let S=jt.get("WEBGL_lose_context");S&&S.restoreContext()},this.getPixelRatio=function(){return G},this.setPixelRatio=function(S){S!==void 0&&(G=S,this.setSize(z,$,!1))},this.getSize=function(S){return S.set(z,$)},this.setSize=function(S,U,H=!0){if(ot.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}z=S,$=U,e.width=Math.floor(S*G),e.height=Math.floor(U*G),H===!0&&(e.style.width=S+"px",e.style.height=U+"px"),this.setViewport(0,0,S,U)},this.getDrawingBufferSize=function(S){return S.set(z*G,$*G).floor()},this.setDrawingBufferSize=function(S,U,H){z=S,$=U,G=H,e.width=Math.floor(S*H),e.height=Math.floor(U*H),this.setViewport(0,0,S,U)},this.getCurrentViewport=function(S){return S.copy(I)},this.getViewport=function(S){return S.copy(It)},this.setViewport=function(S,U,H,V){S.isVector4?It.set(S.x,S.y,S.z,S.w):It.set(S,U,H,V),St.viewport(I.copy(It).multiplyScalar(G).round())},this.getScissor=function(S){return S.copy($t)},this.setScissor=function(S,U,H,V){S.isVector4?$t.set(S.x,S.y,S.z,S.w):$t.set(S,U,H,V),St.scissor(L.copy($t).multiplyScalar(G).round())},this.getScissorTest=function(){return ge},this.setScissorTest=function(S){St.setScissorTest(ge=S)},this.setOpaqueSort=function(S){at=S},this.setTransparentSort=function(S){xt=S},this.getClearColor=function(S){return S.copy(Pt.getClearColor())},this.setClearColor=function(){Pt.setClearColor(...arguments)},this.getClearAlpha=function(){return Pt.getClearAlpha()},this.setClearAlpha=function(){Pt.setClearAlpha(...arguments)},this.clear=function(S=!0,U=!0,H=!0){let V=0;if(S){let N=!1;if(R!==null){let rt=R.texture.format;N=rt===ba||rt===_a||rt===Sa}if(N){let rt=R.texture.type,vt=rt===$n||rt===Fi||rt===kr||rt===Gr||rt===ya||rt===Ma,Ft=Pt.getClearColor(),Et=Pt.getClearAlpha(),Vt=Ft.r,Kt=Ft.g,Bt=Ft.b;vt?(x[0]=Vt,x[1]=Kt,x[2]=Bt,x[3]=Et,F.clearBufferuiv(F.COLOR,0,x)):(M[0]=Vt,M[1]=Kt,M[2]=Bt,M[3]=Et,F.clearBufferiv(F.COLOR,0,M))}else V|=F.COLOR_BUFFER_BIT}U&&(V|=F.DEPTH_BUFFER_BIT),H&&(V|=F.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),F.clear(V)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",ut,!1),e.removeEventListener("webglcontextrestored",_t,!1),e.removeEventListener("webglcontextcreationerror",it,!1),Pt.dispose(),K.dispose(),dt.dispose(),Rt.dispose(),de.dispose(),pe.dispose(),B.dispose(),ht.dispose(),Zt.dispose(),j.dispose(),ot.dispose(),ot.removeEventListener("sessionstart",en),ot.removeEventListener("sessionend",$r),jn.stop()};function ut(S){S.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),y=!0}function _t(){console.log("THREE.WebGLRenderer: Context Restored."),y=!1;let S=Re.autoReset,U=At.enabled,H=At.autoUpdate,V=At.needsUpdate,N=At.type;D(),Re.autoReset=S,At.enabled=U,At.autoUpdate=H,At.needsUpdate=V,At.type=N}function it(S){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",S.statusMessage)}function Y(S){let U=S.target;U.removeEventListener("dispose",Y),wt(U)}function wt(S){Ht(S),Rt.remove(S)}function Ht(S){let U=Rt.get(S).programs;U!==void 0&&(U.forEach(function(H){j.releaseProgram(H)}),S.isShaderMaterial&&j.releaseShaderCache(S))}this.renderBufferDirect=function(S,U,H,V,N,rt){U===null&&(U=bt);let vt=N.isMesh&&N.matrixWorld.determinant()<0,Ft=Ut(S,U,H,V,N);St.setMaterial(V,vt);let Et=H.index,Vt=1;if(V.wireframe===!0){if(Et=_.getWireframeAttribute(H),Et===void 0)return;Vt=2}let Kt=H.drawRange,Bt=H.attributes.position,le=Kt.start*Vt,we=(Kt.start+Kt.count)*Vt;rt!==null&&(le=Math.max(le,rt.start*Vt),we=Math.min(we,(rt.start+rt.count)*Vt)),Et!==null?(le=Math.max(le,0),we=Math.min(we,Et.count)):Bt!=null&&(le=Math.max(le,0),we=Math.min(we,Bt.count));let ke=we-le;if(ke<0||ke===1/0)return;ht.setup(N,V,Ft,H,Et);let Ue,Ce=mt;if(Et!==null&&(Ue=C.get(Et),Ce=Gt,Ce.setIndex(Ue)),N.isMesh)V.wireframe===!0?(St.setLineWidth(V.wireframeLinewidth*je()),Ce.setMode(F.LINES)):Ce.setMode(F.TRIANGLES);else if(N.isLine){let Ot=V.linewidth;Ot===void 0&&(Ot=1),St.setLineWidth(Ot*je()),N.isLineSegments?Ce.setMode(F.LINES):N.isLineLoop?Ce.setMode(F.LINE_LOOP):Ce.setMode(F.LINE_STRIP)}else N.isPoints?Ce.setMode(F.POINTS):N.isSprite&&Ce.setMode(F.TRIANGLES);if(N.isBatchedMesh)if(N._multiDrawInstances!==null)Rr("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Ce.renderMultiDrawInstances(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount,N._multiDrawInstances);else if(jt.get("WEBGL_multi_draw"))Ce.renderMultiDraw(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount);else{let Ot=N._multiDrawStarts,Be=N._multiDrawCounts,xe=N._multiDrawCount,Mn=Et?C.get(Et).bytesPerElement:1,lr=Rt.get(V).currentProgram.getUniforms();for(let Sn=0;Sn<xe;Sn++)lr.setValue(F,"_gl_DrawID",Sn),Ce.render(Ot[Sn]/Mn,Be[Sn])}else if(N.isInstancedMesh)Ce.renderInstances(le,ke,N.count);else if(H.isInstancedBufferGeometry){let Ot=H._maxInstanceCount!==void 0?H._maxInstanceCount:1/0,Be=Math.min(H.instanceCount,Ot);Ce.renderInstances(le,ke,Be)}else Ce.render(le,ke)};function Se(S,U,H){S.transparent===!0&&S.side===Xe&&S.forceSinglePass===!1?(S.side=sn,S.needsUpdate=!0,W(S,U,H),S.side=En,S.needsUpdate=!0,W(S,U,H),S.side=Xe):W(S,U,H)}this.compile=function(S,U,H=null){H===null&&(H=S),p=dt.get(H),p.init(U),A.push(p),H.traverseVisible(function(N){N.isLight&&N.layers.test(U.layers)&&(p.pushLight(N),N.castShadow&&p.pushShadow(N))}),S!==H&&S.traverseVisible(function(N){N.isLight&&N.layers.test(U.layers)&&(p.pushLight(N),N.castShadow&&p.pushShadow(N))}),p.setupLights();let V=new Set;return S.traverse(function(N){if(!(N.isMesh||N.isPoints||N.isLine||N.isSprite))return;let rt=N.material;if(rt)if(Array.isArray(rt))for(let vt=0;vt<rt.length;vt++){let Ft=rt[vt];Se(Ft,H,N),V.add(Ft)}else Se(rt,H,N),V.add(rt)}),p=A.pop(),V},this.compileAsync=function(S,U,H=null){let V=this.compile(S,U,H);return new Promise(N=>{function rt(){if(V.forEach(function(vt){Rt.get(vt).currentProgram.isReady()&&V.delete(vt)}),V.size===0){N(S);return}setTimeout(rt,10)}jt.get("KHR_parallel_shader_compile")!==null?rt():setTimeout(rt,10)})};let he=null;function In(S){he&&he(S)}function en(){jn.stop()}function $r(){jn.start()}let jn=new Lu;jn.setAnimationLoop(In),typeof self<"u"&&jn.setContext(self),this.setAnimationLoop=function(S){he=S,ot.setAnimationLoop(S),S===null?jn.stop():jn.start()},ot.addEventListener("sessionstart",en),ot.addEventListener("sessionend",$r),this.render=function(S,U){if(U!==void 0&&U.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(y===!0)return;if(S.matrixWorldAutoUpdate===!0&&S.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),ot.enabled===!0&&ot.isPresenting===!0&&(ot.cameraAutoUpdate===!0&&ot.updateCamera(U),U=ot.getCamera()),S.isScene===!0&&S.onBeforeRender(g,S,U,R),p=dt.get(S,A.length),p.init(U),A.push(p),et.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),Fe.setFromProjectionMatrix(et,zn,U.reversedDepth),J=this.localClippingEnabled,ae=lt.init(this.clippingPlanes,J),m=K.get(S,T.length),m.init(),T.push(m),ot.enabled===!0&&ot.isPresenting===!0){let rt=g.xr.getDepthSensingMesh();rt!==null&&or(rt,U,-1/0,g.sortObjects)}or(S,U,0,g.sortObjects),m.finish(),g.sortObjects===!0&&m.sort(at,xt),ne=ot.enabled===!1||ot.isPresenting===!1||ot.hasDepthSensing()===!1,ne&&Pt.addToRenderList(m,S),this.info.render.frame++,ae===!0&&lt.beginShadows();let H=p.state.shadowsArray;At.render(H,S,U),ae===!0&&lt.endShadows(),this.info.autoReset===!0&&this.info.reset();let V=m.opaque,N=m.transmissive;if(p.setupLights(),U.isArrayCamera){let rt=U.cameras;if(N.length>0)for(let vt=0,Ft=rt.length;vt<Ft;vt++){let Et=rt[vt];vi(V,N,S,Et)}ne&&Pt.render(S);for(let vt=0,Ft=rt.length;vt<Ft;vt++){let Et=rt[vt];Ys(m,S,Et,Et.viewport)}}else N.length>0&&vi(V,N,S,U),ne&&Pt.render(S),Ys(m,S,U);R!==null&&E===0&&(Ct.updateMultisampleRenderTarget(R),Ct.updateRenderTargetMipmap(R)),S.isScene===!0&&S.onAfterRender(g,S,U),ht.resetDefaultState(),b=-1,w=null,A.pop(),A.length>0?(p=A[A.length-1],ae===!0&&lt.setGlobalState(g.clippingPlanes,p.state.camera)):p=null,T.pop(),T.length>0?m=T[T.length-1]:m=null};function or(S,U,H,V){if(S.visible===!1)return;if(S.layers.test(U.layers)){if(S.isGroup)H=S.renderOrder;else if(S.isLOD)S.autoUpdate===!0&&S.update(U);else if(S.isLight)p.pushLight(S),S.castShadow&&p.pushShadow(S);else if(S.isSprite){if(!S.frustumCulled||Fe.intersectsSprite(S)){V&&zt.setFromMatrixPosition(S.matrixWorld).applyMatrix4(et);let vt=B.update(S),Ft=S.material;Ft.visible&&m.push(S,vt,Ft,H,zt.z,null)}}else if((S.isMesh||S.isLine||S.isPoints)&&(!S.frustumCulled||Fe.intersectsObject(S))){let vt=B.update(S),Ft=S.material;if(V&&(S.boundingSphere!==void 0?(S.boundingSphere===null&&S.computeBoundingSphere(),zt.copy(S.boundingSphere.center)):(vt.boundingSphere===null&&vt.computeBoundingSphere(),zt.copy(vt.boundingSphere.center)),zt.applyMatrix4(S.matrixWorld).applyMatrix4(et)),Array.isArray(Ft)){let Et=vt.groups;for(let Vt=0,Kt=Et.length;Vt<Kt;Vt++){let Bt=Et[Vt],le=Ft[Bt.materialIndex];le&&le.visible&&m.push(S,vt,le,H,zt.z,Bt)}}else Ft.visible&&m.push(S,vt,Ft,H,zt.z,null)}}let rt=S.children;for(let vt=0,Ft=rt.length;vt<Ft;vt++)or(rt[vt],U,H,V)}function Ys(S,U,H,V){let N=S.opaque,rt=S.transmissive,vt=S.transparent;p.setupLightsView(H),ae===!0&&lt.setGlobalState(g.clippingPlanes,H),V&&St.viewport(I.copy(V)),N.length>0&&ar(N,U,H),rt.length>0&&ar(rt,U,H),vt.length>0&&ar(vt,U,H),St.buffers.depth.setTest(!0),St.buffers.depth.setMask(!0),St.buffers.color.setMask(!0),St.setPolygonOffset(!1)}function vi(S,U,H,V){if((H.isScene===!0?H.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[V.id]===void 0&&(p.state.transmissionRenderTarget[V.id]=new $e(1,1,{generateMipmaps:!0,type:jt.has("EXT_color_buffer_half_float")||jt.has("EXT_color_buffer_float")?Ln:$n,minFilter:Pi,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ue.workingColorSpace}));let rt=p.state.transmissionRenderTarget[V.id],vt=V.viewport||I;rt.setSize(vt.z*g.transmissionResolutionScale,vt.w*g.transmissionResolutionScale);let Ft=g.getRenderTarget(),Et=g.getActiveCubeFace(),Vt=g.getActiveMipmapLevel();g.setRenderTarget(rt),g.getClearColor(O),X=g.getClearAlpha(),X<1&&g.setClearColor(16777215,.5),g.clear(),ne&&Pt.render(H);let Kt=g.toneMapping;g.toneMapping=mi;let Bt=V.viewport;if(V.viewport!==void 0&&(V.viewport=void 0),p.setupLightsView(V),ae===!0&&lt.setGlobalState(g.clippingPlanes,V),ar(S,H,V),Ct.updateMultisampleRenderTarget(rt),Ct.updateRenderTargetMipmap(rt),jt.has("WEBGL_multisampled_render_to_texture")===!1){let le=!1;for(let we=0,ke=U.length;we<ke;we++){let Ue=U[we],Ce=Ue.object,Ot=Ue.geometry,Be=Ue.material,xe=Ue.group;if(Be.side===Xe&&Ce.layers.test(V.layers)){let Mn=Be.side;Be.side=sn,Be.needsUpdate=!0,ts(Ce,H,V,Ot,Be,xe),Be.side=Mn,Be.needsUpdate=!0,le=!0}}le===!0&&(Ct.updateMultisampleRenderTarget(rt),Ct.updateRenderTargetMipmap(rt))}g.setRenderTarget(Ft,Et,Vt),g.setClearColor(O,X),Bt!==void 0&&(V.viewport=Bt),g.toneMapping=Kt}function ar(S,U,H){let V=U.isScene===!0?U.overrideMaterial:null;for(let N=0,rt=S.length;N<rt;N++){let vt=S[N],Ft=vt.object,Et=vt.geometry,Vt=vt.group,Kt=vt.material;Kt.allowOverride===!0&&V!==null&&(Kt=V),Ft.layers.test(H.layers)&&ts(Ft,U,H,Et,Kt,Vt)}}function ts(S,U,H,V,N,rt){S.onBeforeRender(g,U,H,V,N,rt),S.modelViewMatrix.multiplyMatrices(H.matrixWorldInverse,S.matrixWorld),S.normalMatrix.getNormalMatrix(S.modelViewMatrix),N.onBeforeRender(g,U,H,V,S,rt),N.transparent===!0&&N.side===Xe&&N.forceSinglePass===!1?(N.side=sn,N.needsUpdate=!0,g.renderBufferDirect(H,U,V,N,S,rt),N.side=En,N.needsUpdate=!0,g.renderBufferDirect(H,U,V,N,S,rt),N.side=Xe):g.renderBufferDirect(H,U,V,N,S,rt),S.onAfterRender(g,U,H,V,N,rt)}function W(S,U,H){U.isScene!==!0&&(U=bt);let V=Rt.get(S),N=p.state.lights,rt=p.state.shadowsArray,vt=N.state.version,Ft=j.getParameters(S,N.state,rt,U,H),Et=j.getProgramCacheKey(Ft),Vt=V.programs;V.environment=S.isMeshStandardMaterial?U.environment:null,V.fog=U.fog,V.envMap=(S.isMeshStandardMaterial?pe:de).get(S.envMap||V.environment),V.envMapRotation=V.environment!==null&&S.envMap===null?U.environmentRotation:S.envMapRotation,Vt===void 0&&(S.addEventListener("dispose",Y),Vt=new Map,V.programs=Vt);let Kt=Vt.get(Et);if(Kt!==void 0){if(V.currentProgram===Kt&&V.lightsStateVersion===vt)return Z(S,Ft),Kt}else Ft.uniforms=j.getUniforms(S),S.onBeforeCompile(Ft,g),Kt=j.acquireProgram(Ft,Et),Vt.set(Et,Kt),V.uniforms=Ft.uniforms;let Bt=V.uniforms;return(!S.isShaderMaterial&&!S.isRawShaderMaterial||S.clipping===!0)&&(Bt.clippingPlanes=lt.uniform),Z(S,Ft),V.needsLights=Lt(S),V.lightsStateVersion=vt,V.needsLights&&(Bt.ambientLightColor.value=N.state.ambient,Bt.lightProbe.value=N.state.probe,Bt.directionalLights.value=N.state.directional,Bt.directionalLightShadows.value=N.state.directionalShadow,Bt.spotLights.value=N.state.spot,Bt.spotLightShadows.value=N.state.spotShadow,Bt.rectAreaLights.value=N.state.rectArea,Bt.ltc_1.value=N.state.rectAreaLTC1,Bt.ltc_2.value=N.state.rectAreaLTC2,Bt.pointLights.value=N.state.point,Bt.pointLightShadows.value=N.state.pointShadow,Bt.hemisphereLights.value=N.state.hemi,Bt.directionalShadowMap.value=N.state.directionalShadowMap,Bt.directionalShadowMatrix.value=N.state.directionalShadowMatrix,Bt.spotShadowMap.value=N.state.spotShadowMap,Bt.spotLightMatrix.value=N.state.spotLightMatrix,Bt.spotLightMap.value=N.state.spotLightMap,Bt.pointShadowMap.value=N.state.pointShadowMap,Bt.pointShadowMatrix.value=N.state.pointShadowMatrix),V.currentProgram=Kt,V.uniformsList=null,Kt}function q(S){if(S.uniformsList===null){let U=S.currentProgram.getUniforms();S.uniformsList=Kr.seqWithValue(U.seq,S.uniforms)}return S.uniformsList}function Z(S,U){let H=Rt.get(S);H.outputColorSpace=U.outputColorSpace,H.batching=U.batching,H.batchingColor=U.batchingColor,H.instancing=U.instancing,H.instancingColor=U.instancingColor,H.instancingMorph=U.instancingMorph,H.skinning=U.skinning,H.morphTargets=U.morphTargets,H.morphNormals=U.morphNormals,H.morphColors=U.morphColors,H.morphTargetsCount=U.morphTargetsCount,H.numClippingPlanes=U.numClippingPlanes,H.numIntersection=U.numClipIntersection,H.vertexAlphas=U.vertexAlphas,H.vertexTangents=U.vertexTangents,H.toneMapping=U.toneMapping}function Ut(S,U,H,V,N){U.isScene!==!0&&(U=bt),Ct.resetTextureUnits();let rt=U.fog,vt=V.isMeshStandardMaterial?U.environment:null,Ft=R===null?g.outputColorSpace:R.isXRRenderTarget===!0?R.texture.colorSpace:Wi,Et=(V.isMeshStandardMaterial?pe:de).get(V.envMap||vt),Vt=V.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,Kt=!!H.attributes.tangent&&(!!V.normalMap||V.anisotropy>0),Bt=!!H.morphAttributes.position,le=!!H.morphAttributes.normal,we=!!H.morphAttributes.color,ke=mi;V.toneMapped&&(R===null||R.isXRRenderTarget===!0)&&(ke=g.toneMapping);let Ue=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,Ce=Ue!==void 0?Ue.length:0,Ot=Rt.get(V),Be=p.state.lights;if(ae===!0&&(J===!0||S!==w)){let fn=S===w&&V.id===b;lt.setState(V,S,fn)}let xe=!1;V.version===Ot.__version?(Ot.needsLights&&Ot.lightsStateVersion!==Be.state.version||Ot.outputColorSpace!==Ft||N.isBatchedMesh&&Ot.batching===!1||!N.isBatchedMesh&&Ot.batching===!0||N.isBatchedMesh&&Ot.batchingColor===!0&&N.colorTexture===null||N.isBatchedMesh&&Ot.batchingColor===!1&&N.colorTexture!==null||N.isInstancedMesh&&Ot.instancing===!1||!N.isInstancedMesh&&Ot.instancing===!0||N.isSkinnedMesh&&Ot.skinning===!1||!N.isSkinnedMesh&&Ot.skinning===!0||N.isInstancedMesh&&Ot.instancingColor===!0&&N.instanceColor===null||N.isInstancedMesh&&Ot.instancingColor===!1&&N.instanceColor!==null||N.isInstancedMesh&&Ot.instancingMorph===!0&&N.morphTexture===null||N.isInstancedMesh&&Ot.instancingMorph===!1&&N.morphTexture!==null||Ot.envMap!==Et||V.fog===!0&&Ot.fog!==rt||Ot.numClippingPlanes!==void 0&&(Ot.numClippingPlanes!==lt.numPlanes||Ot.numIntersection!==lt.numIntersection)||Ot.vertexAlphas!==Vt||Ot.vertexTangents!==Kt||Ot.morphTargets!==Bt||Ot.morphNormals!==le||Ot.morphColors!==we||Ot.toneMapping!==ke||Ot.morphTargetsCount!==Ce)&&(xe=!0):(xe=!0,Ot.__version=V.version);let Mn=Ot.currentProgram;xe===!0&&(Mn=W(V,U,N));let lr=!1,Sn=!1,es=!1,Oe=Mn.getUniforms(),Pn=Ot.uniforms;if(St.useProgram(Mn.program)&&(lr=!0,Sn=!0,es=!0),V.id!==b&&(b=V.id,Sn=!0),lr||w!==S){St.buffers.depth.getReversed()&&S.reversedDepth!==!0&&(S._reversedDepth=!0,S.updateProjectionMatrix()),Oe.setValue(F,"projectionMatrix",S.projectionMatrix),Oe.setValue(F,"viewMatrix",S.matrixWorldInverse);let mn=Oe.map.cameraPosition;mn!==void 0&&mn.setValue(F,Mt.setFromMatrixPosition(S.matrixWorld)),kt.logarithmicDepthBuffer&&Oe.setValue(F,"logDepthBufFC",2/(Math.log(S.far+1)/Math.LN2)),(V.isMeshPhongMaterial||V.isMeshToonMaterial||V.isMeshLambertMaterial||V.isMeshBasicMaterial||V.isMeshStandardMaterial||V.isShaderMaterial)&&Oe.setValue(F,"isOrthographic",S.isOrthographicCamera===!0),w!==S&&(w=S,Sn=!0,es=!0)}if(N.isSkinnedMesh){Oe.setOptional(F,N,"bindMatrix"),Oe.setOptional(F,N,"bindMatrixInverse");let fn=N.skeleton;fn&&(fn.boneTexture===null&&fn.computeBoneTexture(),Oe.setValue(F,"boneTexture",fn.boneTexture,Ct))}N.isBatchedMesh&&(Oe.setOptional(F,N,"batchingTexture"),Oe.setValue(F,"batchingTexture",N._matricesTexture,Ct),Oe.setOptional(F,N,"batchingIdTexture"),Oe.setValue(F,"batchingIdTexture",N._indirectTexture,Ct),Oe.setOptional(F,N,"batchingColorTexture"),N._colorsTexture!==null&&Oe.setValue(F,"batchingColorTexture",N._colorsTexture,Ct));let Fn=H.morphAttributes;if((Fn.position!==void 0||Fn.normal!==void 0||Fn.color!==void 0)&&st.update(N,H,Mn),(Sn||Ot.receiveShadow!==N.receiveShadow)&&(Ot.receiveShadow=N.receiveShadow,Oe.setValue(F,"receiveShadow",N.receiveShadow)),V.isMeshGouraudMaterial&&V.envMap!==null&&(Pn.envMap.value=Et,Pn.flipEnvMap.value=Et.isCubeTexture&&Et.isRenderTargetTexture===!1?-1:1),V.isMeshStandardMaterial&&V.envMap===null&&U.environment!==null&&(Pn.envMapIntensity.value=U.environmentIntensity),Sn&&(Oe.setValue(F,"toneMappingExposure",g.toneMappingExposure),Ot.needsLights&&gt(Pn,es),rt&&V.fog===!0&&tt.refreshFogUniforms(Pn,rt),tt.refreshMaterialUniforms(Pn,V,G,$,p.state.transmissionRenderTarget[S.id]),Kr.upload(F,q(Ot),Pn,Ct)),V.isShaderMaterial&&V.uniformsNeedUpdate===!0&&(Kr.upload(F,q(Ot),Pn,Ct),V.uniformsNeedUpdate=!1),V.isSpriteMaterial&&Oe.setValue(F,"center",N.center),Oe.setValue(F,"modelViewMatrix",N.modelViewMatrix),Oe.setValue(F,"normalMatrix",N.normalMatrix),Oe.setValue(F,"modelMatrix",N.matrixWorld),V.isShaderMaterial||V.isRawShaderMaterial){let fn=V.uniformsGroups;for(let mn=0,gl=fn.length;mn<gl;mn++){let Ni=fn[mn];Zt.update(Ni,Mn),Zt.bind(Ni,Mn)}}return Mn}function gt(S,U){S.ambientLightColor.needsUpdate=U,S.lightProbe.needsUpdate=U,S.directionalLights.needsUpdate=U,S.directionalLightShadows.needsUpdate=U,S.pointLights.needsUpdate=U,S.pointLightShadows.needsUpdate=U,S.spotLights.needsUpdate=U,S.spotLightShadows.needsUpdate=U,S.rectAreaLights.needsUpdate=U,S.hemisphereLights.needsUpdate=U}function Lt(S){return S.isMeshLambertMaterial||S.isMeshToonMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isShadowMaterial||S.isShaderMaterial&&S.lights===!0}this.getActiveCubeFace=function(){return v},this.getActiveMipmapLevel=function(){return E},this.getRenderTarget=function(){return R},this.setRenderTargetTextures=function(S,U,H){let V=Rt.get(S);V.__autoAllocateDepthBuffer=S.resolveDepthBuffer===!1,V.__autoAllocateDepthBuffer===!1&&(V.__useRenderToTexture=!1),Rt.get(S.texture).__webglTexture=U,Rt.get(S.depthTexture).__webglTexture=V.__autoAllocateDepthBuffer?void 0:H,V.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(S,U){let H=Rt.get(S);H.__webglFramebuffer=U,H.__useDefaultFramebuffer=U===void 0};let te=F.createFramebuffer();this.setRenderTarget=function(S,U=0,H=0){R=S,v=U,E=H;let V=!0,N=null,rt=!1,vt=!1;if(S){let Et=Rt.get(S);if(Et.__useDefaultFramebuffer!==void 0)St.bindFramebuffer(F.FRAMEBUFFER,null),V=!1;else if(Et.__webglFramebuffer===void 0)Ct.setupRenderTarget(S);else if(Et.__hasExternalTextures)Ct.rebindTextures(S,Rt.get(S.texture).__webglTexture,Rt.get(S.depthTexture).__webglTexture);else if(S.depthBuffer){let Bt=S.depthTexture;if(Et.__boundDepthTexture!==Bt){if(Bt!==null&&Rt.has(Bt)&&(S.width!==Bt.image.width||S.height!==Bt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");Ct.setupDepthRenderbuffer(S)}}let Vt=S.texture;(Vt.isData3DTexture||Vt.isDataArrayTexture||Vt.isCompressedArrayTexture)&&(vt=!0);let Kt=Rt.get(S).__webglFramebuffer;S.isWebGLCubeRenderTarget?(Array.isArray(Kt[U])?N=Kt[U][H]:N=Kt[U],rt=!0):S.samples>0&&Ct.useMultisampledRTT(S)===!1?N=Rt.get(S).__webglMultisampledFramebuffer:Array.isArray(Kt)?N=Kt[H]:N=Kt,I.copy(S.viewport),L.copy(S.scissor),k=S.scissorTest}else I.copy(It).multiplyScalar(G).floor(),L.copy($t).multiplyScalar(G).floor(),k=ge;if(H!==0&&(N=te),St.bindFramebuffer(F.FRAMEBUFFER,N)&&V&&St.drawBuffers(S,N),St.viewport(I),St.scissor(L),St.setScissorTest(k),rt){let Et=Rt.get(S.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_CUBE_MAP_POSITIVE_X+U,Et.__webglTexture,H)}else if(vt){let Et=U;for(let Vt=0;Vt<S.textures.length;Vt++){let Kt=Rt.get(S.textures[Vt]);F.framebufferTextureLayer(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0+Vt,Kt.__webglTexture,H,Et)}}else if(S!==null&&H!==0){let Et=Rt.get(S.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,Et.__webglTexture,H)}b=-1},this.readRenderTargetPixels=function(S,U,H,V,N,rt,vt,Ft=0){if(!(S&&S.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Et=Rt.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&vt!==void 0&&(Et=Et[vt]),Et){St.bindFramebuffer(F.FRAMEBUFFER,Et);try{let Vt=S.textures[Ft],Kt=Vt.format,Bt=Vt.type;if(!kt.textureFormatReadable(Kt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!kt.textureTypeReadable(Bt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=S.width-V&&H>=0&&H<=S.height-N&&(S.textures.length>1&&F.readBuffer(F.COLOR_ATTACHMENT0+Ft),F.readPixels(U,H,V,N,Tt.convert(Kt),Tt.convert(Bt),rt))}finally{let Vt=R!==null?Rt.get(R).__webglFramebuffer:null;St.bindFramebuffer(F.FRAMEBUFFER,Vt)}}},this.readRenderTargetPixelsAsync=async function(S,U,H,V,N,rt,vt,Ft=0){if(!(S&&S.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Et=Rt.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&vt!==void 0&&(Et=Et[vt]),Et)if(U>=0&&U<=S.width-V&&H>=0&&H<=S.height-N){St.bindFramebuffer(F.FRAMEBUFFER,Et);let Vt=S.textures[Ft],Kt=Vt.format,Bt=Vt.type;if(!kt.textureFormatReadable(Kt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!kt.textureTypeReadable(Bt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let le=F.createBuffer();F.bindBuffer(F.PIXEL_PACK_BUFFER,le),F.bufferData(F.PIXEL_PACK_BUFFER,rt.byteLength,F.STREAM_READ),S.textures.length>1&&F.readBuffer(F.COLOR_ATTACHMENT0+Ft),F.readPixels(U,H,V,N,Tt.convert(Kt),Tt.convert(Bt),0);let we=R!==null?Rt.get(R).__webglFramebuffer:null;St.bindFramebuffer(F.FRAMEBUFFER,we);let ke=F.fenceSync(F.SYNC_GPU_COMMANDS_COMPLETE,0);return F.flush(),await ru(F,ke,4),F.bindBuffer(F.PIXEL_PACK_BUFFER,le),F.getBufferSubData(F.PIXEL_PACK_BUFFER,0,rt),F.deleteBuffer(le),F.deleteSync(ke),rt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(S,U=null,H=0){let V=Math.pow(2,-H),N=Math.floor(S.image.width*V),rt=Math.floor(S.image.height*V),vt=U!==null?U.x:0,Ft=U!==null?U.y:0;Ct.setTexture2D(S,0),F.copyTexSubImage2D(F.TEXTURE_2D,H,0,0,vt,Ft,N,rt),St.unbindTexture()};let ve=F.createFramebuffer(),se=F.createFramebuffer();this.copyTextureToTexture=function(S,U,H=null,V=null,N=0,rt=null){rt===null&&(N!==0?(Rr("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),rt=N,N=0):rt=0);let vt,Ft,Et,Vt,Kt,Bt,le,we,ke,Ue=S.isCompressedTexture?S.mipmaps[rt]:S.image;if(H!==null)vt=H.max.x-H.min.x,Ft=H.max.y-H.min.y,Et=H.isBox3?H.max.z-H.min.z:1,Vt=H.min.x,Kt=H.min.y,Bt=H.isBox3?H.min.z:0;else{let Fn=Math.pow(2,-N);vt=Math.floor(Ue.width*Fn),Ft=Math.floor(Ue.height*Fn),S.isDataArrayTexture?Et=Ue.depth:S.isData3DTexture?Et=Math.floor(Ue.depth*Fn):Et=1,Vt=0,Kt=0,Bt=0}V!==null?(le=V.x,we=V.y,ke=V.z):(le=0,we=0,ke=0);let Ce=Tt.convert(U.format),Ot=Tt.convert(U.type),Be;U.isData3DTexture?(Ct.setTexture3D(U,0),Be=F.TEXTURE_3D):U.isDataArrayTexture||U.isCompressedArrayTexture?(Ct.setTexture2DArray(U,0),Be=F.TEXTURE_2D_ARRAY):(Ct.setTexture2D(U,0),Be=F.TEXTURE_2D),F.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,U.flipY),F.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),F.pixelStorei(F.UNPACK_ALIGNMENT,U.unpackAlignment);let xe=F.getParameter(F.UNPACK_ROW_LENGTH),Mn=F.getParameter(F.UNPACK_IMAGE_HEIGHT),lr=F.getParameter(F.UNPACK_SKIP_PIXELS),Sn=F.getParameter(F.UNPACK_SKIP_ROWS),es=F.getParameter(F.UNPACK_SKIP_IMAGES);F.pixelStorei(F.UNPACK_ROW_LENGTH,Ue.width),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,Ue.height),F.pixelStorei(F.UNPACK_SKIP_PIXELS,Vt),F.pixelStorei(F.UNPACK_SKIP_ROWS,Kt),F.pixelStorei(F.UNPACK_SKIP_IMAGES,Bt);let Oe=S.isDataArrayTexture||S.isData3DTexture,Pn=U.isDataArrayTexture||U.isData3DTexture;if(S.isDepthTexture){let Fn=Rt.get(S),fn=Rt.get(U),mn=Rt.get(Fn.__renderTarget),gl=Rt.get(fn.__renderTarget);St.bindFramebuffer(F.READ_FRAMEBUFFER,mn.__webglFramebuffer),St.bindFramebuffer(F.DRAW_FRAMEBUFFER,gl.__webglFramebuffer);for(let Ni=0;Ni<Et;Ni++)Oe&&(F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Rt.get(S).__webglTexture,N,Bt+Ni),F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Rt.get(U).__webglTexture,rt,ke+Ni)),F.blitFramebuffer(Vt,Kt,vt,Ft,le,we,vt,Ft,F.DEPTH_BUFFER_BIT,F.NEAREST);St.bindFramebuffer(F.READ_FRAMEBUFFER,null),St.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else if(N!==0||S.isRenderTargetTexture||Rt.has(S)){let Fn=Rt.get(S),fn=Rt.get(U);St.bindFramebuffer(F.READ_FRAMEBUFFER,ve),St.bindFramebuffer(F.DRAW_FRAMEBUFFER,se);for(let mn=0;mn<Et;mn++)Oe?F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Fn.__webglTexture,N,Bt+mn):F.framebufferTexture2D(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,Fn.__webglTexture,N),Pn?F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,fn.__webglTexture,rt,ke+mn):F.framebufferTexture2D(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,fn.__webglTexture,rt),N!==0?F.blitFramebuffer(Vt,Kt,vt,Ft,le,we,vt,Ft,F.COLOR_BUFFER_BIT,F.NEAREST):Pn?F.copyTexSubImage3D(Be,rt,le,we,ke+mn,Vt,Kt,vt,Ft):F.copyTexSubImage2D(Be,rt,le,we,Vt,Kt,vt,Ft);St.bindFramebuffer(F.READ_FRAMEBUFFER,null),St.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else Pn?S.isDataTexture||S.isData3DTexture?F.texSubImage3D(Be,rt,le,we,ke,vt,Ft,Et,Ce,Ot,Ue.data):U.isCompressedArrayTexture?F.compressedTexSubImage3D(Be,rt,le,we,ke,vt,Ft,Et,Ce,Ue.data):F.texSubImage3D(Be,rt,le,we,ke,vt,Ft,Et,Ce,Ot,Ue):S.isDataTexture?F.texSubImage2D(F.TEXTURE_2D,rt,le,we,vt,Ft,Ce,Ot,Ue.data):S.isCompressedTexture?F.compressedTexSubImage2D(F.TEXTURE_2D,rt,le,we,Ue.width,Ue.height,Ce,Ue.data):F.texSubImage2D(F.TEXTURE_2D,rt,le,we,vt,Ft,Ce,Ot,Ue);F.pixelStorei(F.UNPACK_ROW_LENGTH,xe),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,Mn),F.pixelStorei(F.UNPACK_SKIP_PIXELS,lr),F.pixelStorei(F.UNPACK_SKIP_ROWS,Sn),F.pixelStorei(F.UNPACK_SKIP_IMAGES,es),rt===0&&U.generateMipmaps&&F.generateMipmap(Be),St.unbindTexture()},this.initRenderTarget=function(S){Rt.get(S).__webglFramebuffer===void 0&&Ct.setupRenderTarget(S)},this.initTexture=function(S){S.isCubeTexture?Ct.setTextureCube(S,0):S.isData3DTexture?Ct.setTexture3D(S,0):S.isDataArrayTexture||S.isCompressedArrayTexture?Ct.setTexture2DArray(S,0):Ct.setTexture2D(S,0),St.unbindTexture()},this.resetState=function(){v=0,E=0,R=null,St.reset(),ht.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return zn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=ue._getDrawingBufferColorSpace(t),e.unpackColorSpace=ue._getUnpackColorSpace()}};var qr={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};var Cn=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},Yg=new Hr(-1,1,1,-1,0,1),Bc=class extends Ie{constructor(){super(),this.setAttribute("position",new Jt([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new Jt([0,2,0,0,2,0],2))}},Zg=new Bc,Ui=class{constructor(t){this._mesh=new Nt(Zg,t)}dispose(){this._mesh.geometry.dispose()}render(t){t.render(this._mesh,Yg)}get material(){return this._mesh.material}set material(t){this._mesh.material=t}};var rl=class extends Cn{constructor(t,e="tDiffuse"){super(),this.textureID=e,this.uniforms=null,this.material=null,t instanceof _e?(this.uniforms=t.uniforms,this.material=t):t&&(this.uniforms=un.clone(t.uniforms),this.material=new _e({name:t.name!==void 0?t.name:"unspecified",defines:Object.assign({},t.defines),uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader})),this._fsQuad=new Ui(this.material)}render(t,e,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this._fsQuad.material=this.material,this.renderToScreen?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this._fsQuad.render(t))}dispose(){this.material.dispose(),this._fsQuad.dispose()}};var js=class extends Cn{constructor(t,e){super(),this.scene=t,this.camera=e,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(t,e,n){let r=t.getContext(),s=t.state;s.buffers.color.setMask(!1),s.buffers.depth.setMask(!1),s.buffers.color.setLocked(!0),s.buffers.depth.setLocked(!0);let o,a;this.inverse?(o=0,a=1):(o=1,a=0),s.buffers.stencil.setTest(!0),s.buffers.stencil.setOp(r.REPLACE,r.REPLACE,r.REPLACE),s.buffers.stencil.setFunc(r.ALWAYS,o,4294967295),s.buffers.stencil.setClear(a),s.buffers.stencil.setLocked(!0),t.setRenderTarget(n),this.clear&&t.clear(),t.render(this.scene,this.camera),t.setRenderTarget(e),this.clear&&t.clear(),t.render(this.scene,this.camera),s.buffers.color.setLocked(!1),s.buffers.depth.setLocked(!1),s.buffers.color.setMask(!0),s.buffers.depth.setMask(!0),s.buffers.stencil.setLocked(!1),s.buffers.stencil.setFunc(r.EQUAL,1,4294967295),s.buffers.stencil.setOp(r.KEEP,r.KEEP,r.KEEP),s.buffers.stencil.setLocked(!0)}},sl=class extends Cn{constructor(){super(),this.needsSwap=!1}render(t){t.state.buffers.stencil.setLocked(!1),t.state.buffers.stencil.setTest(!1)}};var ol=class{constructor(t,e){if(this.renderer=t,this._pixelRatio=t.getPixelRatio(),e===void 0){let n=t.getSize(new nt);this._width=n.width,this._height=n.height,e=new $e(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:Ln}),e.texture.name="EffectComposer.rt1"}else this._width=e.width,this._height=e.height;this.renderTarget1=e,this.renderTarget2=e.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new rl(qr),this.copyPass.material.blending=Vn,this.clock=new Os}swapBuffers(){let t=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=t}addPass(t){this.passes.push(t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(t,e){this.passes.splice(e,0,t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(t){let e=this.passes.indexOf(t);e!==-1&&this.passes.splice(e,1)}isLastEnabledPass(t){for(let e=t+1;e<this.passes.length;e++)if(this.passes[e].enabled)return!1;return!0}render(t){t===void 0&&(t=this.clock.getDelta());let e=this.renderer.getRenderTarget(),n=!1;for(let r=0,s=this.passes.length;r<s;r++){let o=this.passes[r];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(r),o.render(this.renderer,this.writeBuffer,this.readBuffer,t,n),o.needsSwap){if(n){let a=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,t),l.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}js!==void 0&&(o instanceof js?n=!0:o instanceof sl&&(n=!1))}}this.renderer.setRenderTarget(e)}reset(t){if(t===void 0){let e=this.renderer.getSize(new nt);this._pixelRatio=this.renderer.getPixelRatio(),this._width=e.width,this._height=e.height,t=this.renderTarget1.clone(),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=t,this.renderTarget2=t.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(t,e){this._width=t,this._height=e;let n=this._width*this._pixelRatio,r=this._height*this._pixelRatio;this.renderTarget1.setSize(n,r),this.renderTarget2.setSize(n,r);for(let s=0;s<this.passes.length;s++)this.passes[s].setSize(n,r)}setPixelRatio(t){this._pixelRatio=t,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}};var al=class extends Cn{constructor(t,e,n=null,r=null,s=null){super(),this.scene=t,this.camera=e,this.overrideMaterial=n,this.clearColor=r,this.clearAlpha=s,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new yt}render(t,e,n){let r=t.autoClear;t.autoClear=!1;let s,o;this.overrideMaterial!==null&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(t.getClearColor(this._oldClearColor),t.setClearColor(this.clearColor,t.getClearAlpha())),this.clearAlpha!==null&&(s=t.getClearAlpha(),t.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&t.clearDepth(),t.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),t.render(this.scene,this.camera),this.clearColor!==null&&t.setClearColor(this._oldClearColor),this.clearAlpha!==null&&t.setClearAlpha(s),this.overrideMaterial!==null&&(this.scene.overrideMaterial=o),t.autoClear=r}};var zu={name:"LuminosityHighPassShader",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new yt(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};var Jr=class i extends Cn{constructor(t,e=1,n,r){super(),this.strength=e,this.radius=n,this.threshold=r,this.resolution=t!==void 0?new nt(t.x,t.y):new nt(256,256),this.clearColor=new yt(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let s=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);this.renderTargetBright=new $e(s,o,{type:Ln}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let h=0;h<this.nMips;h++){let u=new $e(s,o,{type:Ln});u.texture.name="UnrealBloomPass.h"+h,u.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(u);let f=new $e(s,o,{type:Ln});f.texture.name="UnrealBloomPass.v"+h,f.texture.generateMipmaps=!1,this.renderTargetsVertical.push(f),s=Math.round(s/2),o=Math.round(o/2)}let a=zu;this.highPassUniforms=un.clone(a.uniforms),this.highPassUniforms.luminosityThreshold.value=r,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new _e({uniforms:this.highPassUniforms,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader}),this.separableBlurMaterials=[];let l=[3,5,7,9,11];s=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);for(let h=0;h<this.nMips;h++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(l[h])),this.separableBlurMaterials[h].uniforms.invSize.value=new nt(1/s,1/o),s=Math.round(s/2),o=Math.round(o/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=e,this.compositeMaterial.uniforms.bloomRadius.value=.1;let c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new P(1,1,1),new P(1,1,1),new P(1,1,1),new P(1,1,1),new P(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=un.clone(qr.uniforms),this.blendMaterial=new _e({uniforms:this.copyUniforms,vertexShader:qr.vertexShader,fragmentShader:qr.fragmentShader,blending:on,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new yt,this._oldClearAlpha=1,this._basic=new me,this._fsQuad=new Ui(null)}dispose(){for(let t=0;t<this.renderTargetsHorizontal.length;t++)this.renderTargetsHorizontal[t].dispose();for(let t=0;t<this.renderTargetsVertical.length;t++)this.renderTargetsVertical[t].dispose();this.renderTargetBright.dispose();for(let t=0;t<this.separableBlurMaterials.length;t++)this.separableBlurMaterials[t].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(t,e){let n=Math.round(t/2),r=Math.round(e/2);this.renderTargetBright.setSize(n,r);for(let s=0;s<this.nMips;s++)this.renderTargetsHorizontal[s].setSize(n,r),this.renderTargetsVertical[s].setSize(n,r),this.separableBlurMaterials[s].uniforms.invSize.value=new nt(1/n,1/r),n=Math.round(n/2),r=Math.round(r/2)}render(t,e,n,r,s){t.getClearColor(this._oldClearColor),this._oldClearAlpha=t.getClearAlpha();let o=t.autoClear;t.autoClear=!1,t.setClearColor(this.clearColor,0),s&&t.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=n.texture,t.setRenderTarget(null),t.clear(),this._fsQuad.render(t)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,t.setRenderTarget(this.renderTargetBright),t.clear(),this._fsQuad.render(t);let a=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this._fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=a.texture,this.separableBlurMaterials[l].uniforms.direction.value=i.BlurDirectionX,t.setRenderTarget(this.renderTargetsHorizontal[l]),t.clear(),this._fsQuad.render(t),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=i.BlurDirectionY,t.setRenderTarget(this.renderTargetsVertical[l]),t.clear(),this._fsQuad.render(t),a=this.renderTargetsVertical[l];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,t.setRenderTarget(this.renderTargetsHorizontal[0]),t.clear(),this._fsQuad.render(t),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,s&&t.state.buffers.stencil.setTest(!0),this.renderToScreen?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(n),this._fsQuad.render(t)),t.setClearColor(this._oldClearColor,this._oldClearAlpha),t.autoClear=o}_getSeparableBlurMaterial(t){let e=[];for(let n=0;n<t;n++)e.push(.39894*Math.exp(-.5*n*n/(t*t))/t);return new _e({defines:{KERNEL_RADIUS:t},uniforms:{colorTexture:{value:null},invSize:{value:new nt(.5,.5)},direction:{value:new nt(.5,.5)},gaussianCoefficients:{value:e}},vertexShader:`varying vec2 vUv;
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
				}`})}_getCompositeMaterial(t){return new _e({defines:{NUM_MIPS:t},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
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
				}`})}};Jr.BlurDirectionX=new nt(1,0);Jr.BlurDirectionY=new nt(0,1);var qs={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		}`};var ll=class extends Cn{constructor(){super(),this.uniforms=un.clone(qs.uniforms),this.material=new Ns({name:qs.name,uniforms:this.uniforms,vertexShader:qs.vertexShader,fragmentShader:qs.fragmentShader}),this._fsQuad=new Ui(this.material),this._outputColorSpace=null,this._toneMapping=null}render(t,e,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=t.toneMappingExposure,(this._outputColorSpace!==t.outputColorSpace||this._toneMapping!==t.toneMapping)&&(this._outputColorSpace=t.outputColorSpace,this._toneMapping=t.toneMapping,this.material.defines={},ue.getTransfer(this._outputColorSpace)===ye&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===ca?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===ha?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===ua?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===zr?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===da?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===pa?this.material.defines.NEUTRAL_TONE_MAPPING="":this._toneMapping===fa&&(this.material.defines.CUSTOM_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this._fsQuad.render(t))}dispose(){this.material.dispose(),this._fsQuad.dispose()}};var cl=class extends Nt{constructor(t,e={}){super(t),this.isWater=!0;let n=this,r=e.textureWidth!==void 0?e.textureWidth:512,s=e.textureHeight!==void 0?e.textureHeight:512,o=e.clipBias!==void 0?e.clipBias:0,a=e.alpha!==void 0?e.alpha:1,l=e.time!==void 0?e.time:0,c=e.waterNormals!==void 0?e.waterNormals:null,h=e.sunDirection!==void 0?e.sunDirection:new P(.70707,.70707,0),u=new yt(e.sunColor!==void 0?e.sunColor:16777215),f=new yt(e.waterColor!==void 0?e.waterColor:8355711),d=e.eye!==void 0?e.eye:new P(0,0,0),x=e.distortionScale!==void 0?e.distortionScale:20,M=e.side!==void 0?e.side:En,m=e.fog!==void 0?e.fog:!1,p=new gn,T=new P,A=new P,g=new P,y=new be,v=new P(0,0,-1),E=new Le,R=new P,b=new P,w=new Le,I=new be,L=new Qe,k=new $e(r,s),O={name:"MirrorShader",uniforms:un.merge([ft.fog,ft.lights,{normalSampler:{value:null},mirrorSampler:{value:null},alpha:{value:1},time:{value:0},size:{value:1},distortionScale:{value:20},textureMatrix:{value:new be},sunColor:{value:new yt(8355711)},sunDirection:{value:new P(.70707,.70707,0)},eye:{value:new P},waterColor:{value:new yt(5592405)}}]),vertexShader:`
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
				}`},X=new _e({name:O.name,uniforms:un.clone(O.uniforms),vertexShader:O.vertexShader,fragmentShader:O.fragmentShader,lights:!0,side:M,fog:m});X.uniforms.mirrorSampler.value=k.texture,X.uniforms.textureMatrix.value=I,X.uniforms.alpha.value=a,X.uniforms.time.value=l,X.uniforms.normalSampler.value=c,X.uniforms.sunColor.value=u,X.uniforms.waterColor.value=f,X.uniforms.sunDirection.value=h,X.uniforms.distortionScale.value=x,X.uniforms.eye.value=d,n.material=X,n.onBeforeRender=function(z,$,G){if(A.setFromMatrixPosition(n.matrixWorld),g.setFromMatrixPosition(G.matrixWorld),y.extractRotation(n.matrixWorld),T.set(0,0,1),T.applyMatrix4(y),R.subVectors(A,g),R.dot(T)>0)return;R.reflect(T).negate(),R.add(A),y.extractRotation(G.matrixWorld),v.set(0,0,-1),v.applyMatrix4(y),v.add(g),b.subVectors(A,v),b.reflect(T).negate(),b.add(A),L.position.copy(R),L.up.set(0,1,0),L.up.applyMatrix4(y),L.up.reflect(T),L.lookAt(b),L.far=G.far,L.updateMatrixWorld(),L.projectionMatrix.copy(G.projectionMatrix),I.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),I.multiply(L.projectionMatrix),I.multiply(L.matrixWorldInverse),p.setFromNormalAndCoplanarPoint(T,A),p.applyMatrix4(L.matrixWorldInverse),E.set(p.normal.x,p.normal.y,p.normal.z,p.constant);let at=L.projectionMatrix;w.x=(Math.sign(E.x)+at.elements[8])/at.elements[0],w.y=(Math.sign(E.y)+at.elements[9])/at.elements[5],w.z=-1,w.w=(1+at.elements[10])/at.elements[14],E.multiplyScalar(2/E.dot(w)),at.elements[2]=E.x,at.elements[6]=E.y,at.elements[10]=E.z+1-o,at.elements[14]=E.w,d.setFromMatrixPosition(G.matrixWorld);let xt=z.getRenderTarget(),It=z.xr.enabled,$t=z.shadowMap.autoUpdate;n.visible=!1,z.xr.enabled=!1,z.shadowMap.autoUpdate=!1,z.setRenderTarget(k),z.state.buffers.depth.setMask(!0),z.autoClear===!1&&z.clear(),z.render($,L),n.visible=!0,z.xr.enabled=It,z.shadowMap.autoUpdate=$t,z.setRenderTarget(xt);let ge=G.viewport;ge!==void 0&&z.state.viewport(ge)}}};function Gu(i,t=!1){let e=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),r=new Set(Object.keys(i[0].morphAttributes)),s={},o={},a=i[0].morphTargetsRelative,l=new Ie,c=0;for(let h=0;h<i.length;++h){let u=i[h],f=0;if(e!==(u.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let d in u.attributes){if(!n.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+d+'" attribute exists among all geometries, or in none of them.'),null;s[d]===void 0&&(s[d]=[]),s[d].push(u.attributes[d]),f++}if(f!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(a!==u.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let d in u.morphAttributes){if(!r.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;o[d]===void 0&&(o[d]=[]),o[d].push(u.morphAttributes[d])}if(t){let d;if(e)d=u.index.count;else if(u.attributes.position!==void 0)d=u.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,d,h),c+=d}}if(e){let h=0,u=[];for(let f=0;f<i.length;++f){let d=i[f].index;for(let x=0;x<d.count;++x)u.push(d.getX(x)+h);h+=i[f].attributes.position.count}l.setIndex(u)}for(let h in s){let u=ku(s[h]);if(!u)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;l.setAttribute(h,u)}for(let h in o){let u=o[h][0].length;if(u===0)break;l.morphAttributes=l.morphAttributes||{},l.morphAttributes[h]=[];for(let f=0;f<u;++f){let d=[];for(let M=0;M<o[h].length;++M)d.push(o[h][M][f]);let x=ku(d);if(!x)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;l.morphAttributes[h].push(x)}}return l}function ku(i){let t,e,n,r=-1,s=0;for(let c=0;c<i.length;++c){let h=i[c];if(t===void 0&&(t=h.array.constructor),t!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=h.itemSize),e!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(r===-1&&(r=h.gpuType),r!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;s+=h.count*e}let o=new t(s),a=new Ne(o,e,n),l=0;for(let c=0;c<i.length;++c){let h=i[c];if(h.isInterleavedBufferAttribute){let u=l/e;for(let f=0,d=h.count;f<d;f++)for(let x=0;x<e;x++){let M=h.getComponent(f,x);a.setComponent(f+u,x,M)}}else o.set(h.array,l);l+=h.count*e}return r!==void 0&&(a.gpuType=r),a}var ze=Math.PI/180,pt=150,fe=(i,t=pt,e=0)=>new P(Math.cos(i*ze)*t,e,-Math.sin(i*ze)*t);function Ge(i){return()=>{i|=0,i=i+1831565813|0;let t=Math.imul(i^i>>>15,1|i);return t=t+Math.imul(t^t>>>7,61|t)^t,((t^t>>>14)>>>0)/4294967296}}var Wt=new yt(1,.7,.36),Me=new yt(1,.8,.52),an=new yt(.72,.84,1),fl=new yt(1,.2,.12),ni=new yt(.3,1,.85),Yr=new yt(1,.4,.6),Vu=new P(0,1,0),Wu=[],zc=[],ul=new Dr(new Uint8Array([255,255,255,255]),1,1);ul.needsUpdate=!0;ul.colorSpace=Ze;var hl=new Dr(new Uint8Array([0,0,0,255]),1,1);hl.needsUpdate=!0;var kc=[],Oc=new Map;function ct({map:i=ul,emissiveMap:t=hl,glow:e=1.5,tint:n=16777215,side:r=En,key:s=null}={}){let o=s||(i===ul&&t===hl?"plain"+n+r:null);if(o&&Oc.has(o))return Oc.get(o);let a=new _e({uniforms:un.merge([ft.fog,{map:{value:null},emissiveMap:{value:null},glow:{value:e},tint:{value:new yt(n)}}]),vertexShader:`varying vec3 vC; varying vec2 vUv;
      #include <fog_pars_vertex>
      void main() { vC = color; vUv = uv; vec4 mvPosition = modelViewMatrix * vec4(position, 1.0); gl_Position = projectionMatrix * mvPosition;
      #include <fog_vertex>
      }`,fragmentShader:`uniform sampler2D map; uniform sampler2D emissiveMap; uniform float glow; uniform vec3 tint; varying vec3 vC; varying vec2 vUv;
      #include <fog_pars_fragment>
      void main() { gl_FragColor = vec4(texture2D(map, vUv).rgb * tint * vC + texture2D(emissiveMap, vUv).rgb * glow, 1.0);
      #include <fog_fragment>
      #include <tonemapping_fragment>
      #include <colorspace_fragment>
      }`,vertexColors:!0,fog:!0,side:r});return a.uniforms.map.value=i,a.uniforms.emissiveMap.value=t,a.userData.glow=e,t!==hl&&kc.push(a),o&&Oc.set(o,a),a}var Hc=new Map;function qt(i,t,e){let n=i+","+t+","+e;return Hc.has(n)||Hc.set(n,new me({color:new yt(i,t,e)})),Hc.get(n)}var oe=class{constructor(){this.bins=new Map,this.lights=[],this.sparks=[]}put(t,...e){this.bins.has(t)||this.bins.set(t,[]);let n=this.bins.get(t);for(let r of e.flat(3))n.push(r);return this}light(t,e,n,r,s,o,a=0){return this.lights.push({x:t,y:e,z:n,colour:r,power:s,reach:o}),a&&this.spark(t,e,n,r,a),this}spark(t,e,n,r,s,o=0,a=0){return this.sparks.push({x:t,y:e,z:n,colour:r,size:s,flicker:o,drift:a}),this}stamp(t,e=0,n=0,r=0,s=1,o=0){let a=new be().compose(new P(e,o,n),new Dn().setFromAxisAngle(Vu,r),new P(s,s,s)),l=new P;for(let[c,h]of t.bins)this.put(c,h.map(u=>u.clone().applyMatrix4(a)));for(let c of t.lights)l.set(c.x,c.y,c.z).applyMatrix4(a),this.lights.push({...c,x:l.x,y:l.y,z:l.z,reach:c.reach*s});for(let c of t.sparks)l.set(c.x,c.y,c.z).applyMatrix4(a),this.sparks.push({...c,x:l.x,y:l.y,z:l.z,size:c.size*s});return this}build(){for(let e of this.lights)Wu.push({x:e.x,y:e.y,z:e.z,r:e.colour.r*e.power,g:e.colour.g*e.power,b:e.colour.b*e.power,reach2:e.reach*e.reach,far:e.reach*6});zc.push(...this.sparks);let t=new nn;for(let[e,n]of this.bins)n.length&&t.add(new Nt(Gu(n.map(r=>r.index?r.toNonIndexed():r),!1),e));return t}};function Xu(i){let e=new Map,n=(c,h)=>c*4096+h;for(let c of Wu)for(let h=Math.floor((c.x-c.far)/48);h<=Math.floor((c.x+c.far)/48);h++)for(let u=Math.floor((c.z-c.far)/48);u<=Math.floor((c.z+c.far)/48);u++){let f=n(h+2048,u+2048);e.has(f)||e.set(f,[]),e.get(f).push(c)}i.updateMatrixWorld(!0);let r=new P,s=new P,o=new Qt,a=new P(-.35,.62,.7).normalize(),l=[];i.traverse(c=>{if(!c.isMesh||!c.material.vertexColors||c.userData.lit)return;let h=c.geometry,u=h.attributes.position,f=h.attributes.normal,d=new Float32Array(u.count*3);o.getNormalMatrix(c.matrixWorld);for(let x=0;x<u.count;x++){r.fromBufferAttribute(u,x).applyMatrix4(c.matrixWorld),s.fromBufferAttribute(f,x).applyMatrix3(o).normalize();let M=.55+.45*s.y,m=Math.max(0,s.dot(a))*.5,p=.03*M+.05*m,T=.04*M+.062*m,A=.075*M+.1*m;for(let g of e.get(n(Math.floor(r.x/48)+2048,Math.floor(r.z/48)+2048))||l){let y=g.x-r.x,v=g.y-r.y,E=g.z-r.z,R=y*y+v*v+E*E;if(R>g.far*g.far)continue;let b=Math.sqrt(R)||1,w=Math.max(0,((s.x*y+s.y*v+s.z*E)/b+.22)/1.22),I=w/(1+R/g.reach2);p+=g.r*I,T+=g.g*I,A+=g.b*I}d[x*3]=p,d[x*3+1]=T,d[x*3+2]=A}h.setAttribute("color",new Ne(d,3)),c.userData.lit=!0})}var ce=i=>{let t=i.attributes.uv;if(t)for(let e=0;e<t.count;e++)t.setXY(e,.004,.004);return i};function tn(i,t,e,n,r,s,o,a=0){let l=new Te(i,t,e,Math.max(1,Math.round(i/5)),Math.max(1,Math.round(t/3)),Math.max(1,Math.round(e/6))),c=l.attributes.uv,h=l.attributes.normal,u=l.attributes.position;for(let f=0;f<c.count;f++){if(Math.abs(h.getY(f))>.5||!o){c.setXY(f,.004,.004);continue}let d=Math.abs(h.getX(f))>.5?u.getZ(f)+e/2+7:u.getX(f)+i/2;c.setXY(f,d/o.u+a,(u.getY(f)+t/2)/o.v)}return l.translate(n,r+t/2,s)}var Yt=(i,t,e,n,r,s)=>tn(i,t,e,n,r,s,null),Q=(i,t,e,n,r,s)=>ce(new Te(i,t,e)).translate(n,r+t/2,s);function Dt(i,t,e,n,r,s=8,o=null,a=i){let l=new Pe(a,i,t,s,Math.max(1,Math.round(t/4))),c=l.attributes.uv,h=l.attributes.normal;for(let u=0;u<c.count;u++)!o||Math.abs(h.getY(u))>.9?c.setXY(u,.004,.004):c.setXY(u,c.getX(u)*2*Math.PI*i/o.u,c.getY(u)*t/o.v);return l.rotateY(Math.PI/s).translate(e,n+t/2,r)}var ee=(i,t,e,n,r=10)=>ce(new pn(i,r,Math.max(6,r-2))).translate(t,e,n),Xn=(i,t,e,n,r,s=8)=>ce(new Ki(i,t,s)).rotateY(Math.PI/s).translate(e,n+t/2,r);function Xt(i,t,e=.08,n=5){let r=new P(...i),s=new P(...t),o=s.clone().sub(r);return ce(new Pe(e,e,o.length(),n)).applyQuaternion(new Dn().setFromUnitVectors(Vu,o.clone().normalize())).translate((r.x+s.x)/2,(r.y+s.y)/2,(r.z+s.z)/2)}function Ve(i,t,e,n,r,{seg:s=20,swell:o=.1,finial:a=.32}={}){let l=[];for(let h=0;h<=18;h++){let u=h/18;l.push(new nt(Math.max(.001,i*Math.sqrt(1-Math.pow(u,1.75))*(.93+o*2.6*Math.sin(Math.PI*Math.min(1,u*1.5))*(1-u))),t*u))}let c=[ce(new pi(l,s)).translate(e,n,r)];if(a){let h=t*a;c.push(ce(new Pe(.02*i,.09*i,h,6)).translate(e,n+t+h/2-.05,r),ee(.11*i,e,n+t+h*.25,r,8),ee(.07*i,e,n+t+h*.62,r,6))}return c}function Kn(i,t,e,n,r){let s=i*.42,o=i*.1,a=[];for(let[l,c]of[[-1,-1],[1,-1],[-1,1],[1,1]])a.push(Q(o,t,o,e+l*s,n,r+c*s));return a.push(Q(i*1.28,i*.12,i*1.28,e,n+t,r),...Ve(i*.56,i*.72,e,n+t+i*.12,r,{seg:10})),a}function Ke(i,t,e,n,r,s=0){let o=new Br,a=i/2,l=t-a*(1+s);return o.moveTo(-a,0),o.lineTo(-a,l),s?(o.quadraticCurveTo(-a,l+a*.9,0,t),o.quadraticCurveTo(a,l+a*.9,a,l)):o.absarc(0,l,a,Math.PI,0,!0),o.lineTo(a,0),o.lineTo(-a,0),ce(new Ls(o,10)).translate(e,n,r)}var Di=(i,t,e,n=0,r=360,s=96)=>ce(new qi(i,t,Math.max(3,Math.round(s*r/360)),2,n*ze,r*ze)).rotateX(-Math.PI/2).translate(0,e,0);function Gc(i,t,e,n=0,r=360,s=96){let o=ce(new Pe(i,i,e,Math.max(3,Math.round(s*r/360)),1,!0,(n+90)*ze,r*ze)).translate(0,t+e/2,0),a=o.attributes.normal.array;for(let l=0;l<a.length;l++)a[l]=-a[l];return o}var rr=(i,t=!0,e=8)=>{let n=new Zn(i);return t&&(n.wrapS=n.wrapT=ui),n.colorSpace=Ze,n.anisotropy=e,n};function sr({cols:i=8,rows:t=4,lit:e=.3,seed:n=1,stone:r=[205,172,128],shadow:s=[46,34,26],glow:o=["#ffd27a","#ffb65a","#ffe2a8"],opening:a=.5,pointed:l=!1,jali:c=.25}){let f=Ge(n),d=i*64,x=t*96,M=document.createElement("canvas"),m=document.createElement("canvas");M.width=m.width=d,M.height=m.height=x;let p=M.getContext("2d"),T=m.getContext("2d");T.fillStyle="#000",T.fillRect(0,0,d,x);let A=(y,v)=>"rgb("+y.map(E=>Math.max(0,Math.min(255,E*v))|0).join(",")+")";p.fillStyle=A(r,1),p.fillRect(0,0,d,x);for(let y=0;y<3200;y++)p.fillStyle=A(r,.9+f()*.2),p.fillRect(f()*d,f()*x,2+f()*5,1+f()*2);let g=(y,v,E,R,b)=>{y.beginPath(),y.moveTo(v-R/2,E),y.lineTo(v-R/2,E-b+R/2),l?(y.quadraticCurveTo(v-R/2,E-b+R*.05,v,E-b),y.quadraticCurveTo(v+R/2,E-b+R*.05,v+R/2,E-b+R/2)):y.arc(v,E-b+R/2,R/2,Math.PI,0),y.lineTo(v+R/2,E),y.closePath()};for(let y=0;y<t;y++)for(let v=0;v<i;v++){let E=v*64+32,R=(y+1)*96-14,b=64*a,w=96*.62;if(y*i+v!==0){if(p.fillStyle=A(r,.8),g(p,E,R+2,b+12,w+9),p.fill(),p.fillStyle=A(r,1.12),g(p,E,R,b+8,w+5),p.fill(),p.fillStyle=A(s,1),g(p,E,R,b,w),p.fill(),f()<c){p.strokeStyle=A(r,.62),p.lineWidth=1;for(let I=-b/2+4;I<b/2;I+=5)p.beginPath(),p.moveTo(E+I,R-9),p.lineTo(E+I,R-w*.62),p.stroke()}if(p.fillStyle=A(r,.78),p.fillRect(E-b/2-2,R-10,b+4,4),p.fillStyle=A(r,1.1),p.fillRect(E-b/2-3,R-12,b+6,2),p.fillStyle=A(r,1.16),p.beginPath(),p.arc(E,R-w-7,3,0,7),p.fill(),f()<e){let I=T.createLinearGradient(0,R-w,0,R),L=o[f()*o.length|0];I.addColorStop(0,L),I.addColorStop(1,"#7a4a1c"),T.fillStyle=I,T.globalAlpha=.55+f()*.45,g(T,E,R-11,b-2,w-12),T.fill(),T.globalAlpha=1}p.fillStyle=A(r,.84),p.fillRect(v*64,y*96,3,96),p.fillStyle=A(r,1.1),p.fillRect(v*64+3,y*96,2,96)}}for(let y=0;y<t;y++){p.fillStyle=A(r,1.16),p.fillRect(0,y*96,d,5),p.fillStyle=A(r,.68),p.fillRect(0,y*96+5,d,2);for(let v=0;v<d;v+=8)p.fillStyle=A(r,.8),p.fillRect(v,y*96+8,4,3)}return{map:rr(M),emissiveMap:rr(m),cols:i,rows:t}}function Ku({cols:i=8,rows:t=8,lit:e=.16,seed:n=1,wall:r=[84,90,110]}){let a=Ge(n),l=document.createElement("canvas"),c=document.createElement("canvas");l.width=c.width=i*32,l.height=c.height=t*32;let h=l.getContext("2d"),u=c.getContext("2d");u.fillStyle="#000",u.fillRect(0,0,c.width,c.height);let f=d=>"rgb("+r.map(x=>x*d|0).join(",")+")";h.fillStyle=f(1),h.fillRect(0,0,l.width,l.height);for(let d=0;d<900;d++)h.fillStyle=f(.86+a()*.26),h.fillRect(a()*l.width,a()*l.height,3+a()*8,1+a()*3);for(let d=0;d<t;d++){h.fillStyle=f(.7),h.fillRect(0,d*32,l.width,2);for(let x=0;x<i;x++){if(x+d===0)continue;let M=x*32+8,m=d*32+8;h.fillStyle=f(.36),h.fillRect(M,m,16,17),h.fillStyle=f(1.2),h.fillRect(M-1,m+17,18,2),a()<.3&&(h.fillStyle=f(.75),h.fillRect(M-3,m+19,22,3)),a()<e&&(u.fillStyle=a()<.78?["#ffcf80","#ffb45c","#ffe0a6"][a()*3|0]:"#9fd0ff",u.globalAlpha=.35+a()*.65,u.fillRect(M+1,m+1,14,15),u.globalAlpha=1,a()<.5&&(u.fillStyle="#000",u.fillRect(M+7,m+1,1,15)))}}return{map:rr(l,!0,4),emissiveMap:rr(c,!0,4)}}function gi(i=128,t=0,e=1){let n=document.createElement("canvas");n.width=n.height=i;let r=n.getContext("2d"),s=r.createRadialGradient(i/2,i/2,i*t,i/2,i/2,i/2);return s.addColorStop(0,"rgba(255,255,255,1)"),s.addColorStop(.25*e,"rgba(255,255,255,.42)"),s.addColorStop(Math.min(.99,.6*e),"rgba(255,255,255,.1)"),s.addColorStop(1,"rgba(255,255,255,0)"),r.fillStyle=s,r.fillRect(0,0,i,i),rr(n,!1,1)}function Zr(i,t,e=8,n=!0){let r=document.createElement("canvas");r.width=r.height=64;let s=r.getContext("2d");for(let o=0;o<e;o++)s.fillStyle=o%2?i:t,n?s.fillRect(o*64/e,0,64/e+1,64):s.fillRect(0,o*64/e,64,64/e+1);return rr(r)}function ju(i,{w:t=1024,h:e=320,ground:n="#0d1326",edge:r="#f2c66a"}={}){let s=document.createElement("canvas");s.width=t,s.height=e;let o=s.getContext("2d");o.fillStyle=n,o.fillRect(0,0,t,e),r&&(o.strokeStyle=r,o.lineWidth=6,o.strokeRect(9,9,t-18,e-18));for(let{text:a,y:l,size:c,colour:h,font:u="Geist, Arial, sans-serif",weight:f=600,fit:d=t-108}of i){let x=c;do o.font=f+" "+x+"px "+u,x-=4;while(o.measureText(a).width>d&&x>24);o.fillStyle=h,o.textBaseline="middle",o.fillText(a,54,l)}return rr(s,!1)}function qu(){let i=sr({cols:8,rows:4,lit:.22,seed:3}),t={u:8*3.3,v:24},e=ct({map:i.map,emissiveMap:i.emissiveMap,glow:1.5,key:"palace"}),n=ct({tint:14467222}),r=ct({tint:10191192}),s=qt(1.3,.82,.36),o=qt(1.9,1.35,.42),a=new oe,l=Ge(8),c=(g,y,v,E,R,{cupolas:b=!0,balconies:w=!0}={})=>{let I=y-g,L=(g+y)/2,k=R-E/2;a.put(e,tn(I,v,E,L,0,k,t,g*.031));for(let O=6;O<v-1;O+=6)a.put(n,Yt(I+.8,.42,E+.8,L,O-.2,k));a.put(n,Yt(I+1.1,.6,E+1.1,L,v-.1,k),Q(I+.6,.14,.2,L,v+1.25,R+.2));for(let O=g+.4;O<=y-.2;O+=1.3)a.put(n,Q(.2,.78,.2,O,v+.5,R+.2));for(let O=g+.15;O<=y;O+=3.3)a.put(n,Q(.36,v,.28,O,0,R+.14));if(b)for(let O=g+2.6;O<y-1.5;O+=5.6)a.put(n,Kn(1.5,1.6,O,v+.5,R-1.5));if(w)for(let O=g+4.95;O<y-3;O+=9.9){a.put(n,Q(2.9,.3,1.5,O,6.3,R+.75),Q(2.5,.9,.12,O,6.6,R+1.44),Q(3.1,.25,1.7,O,9.7,R+.85),Ve(1.1,.9,O,9.95,R+.8,{seg:8,finial:.5}));for(let X of[-1.25,1.25])a.put(n,Q(.16,3.1,.16,O+X,6.6,R+1.36));a.put(r,Q(.5,.8,1.1,O-1,5.5,R+.55),Q(.5,.8,1.1,O+1,5.5,R+.55)),l()<.55&&a.put(s,Ke(1.5,2.5,O,6.75,R+.33))}},h=(g,y,v,E=1)=>a.put(o,ee(.32*E,g,y,v,8)),u=(g,y,v,E,R)=>{a.put(e,Dt(R,E-v,g,v,y,8,t)),a.put(n,Dt(R+.5,.5,g,E,y,8),Ve(R*1.05,R*1.5,g,E+.5,y)),h(g,E+.5+R*1.5*1.3,y)};a.put(n,Yt(158,1.2,46,0,0,-14));for(let g=0;g<5;g++)a.put(n,Q(16-g*.6,.24,1.1,12.5,.96-g*.24,6.2+g*1.1));c(-75,-67,7,6,3,{cupolas:!1,balconies:!1}),a.put(s,Ke(3.4,5.2,-71,1.2,3.06)),c(-67,-26,16,24,0);for(let[g,y,v,E]of[[-58,7,20,3.2],[-46,10,21.5,4.8],[-33,7,19.5,3.2]]){let R=1.5-y/2;a.put(e,tn(y,v,y,g,0,R,t,g*.07)),a.put(n,Yt(y+1,.6,y+1,g,v,R)),a.put(e,Dt(E,E*.8,g,v+.6,R,8,t)),a.put(n,Dt(E+.4,.4,g,v+.6+E*.8,R,8),Ve(E*1.06,E*1.55,g,v+1+E*.8,R)),h(g,v+1+E*.8+E*1.55*1.3,R,E/3.2);for(let[b,w]of[[-1,1],[1,1],[-1,-1],[1,-1]])a.put(n,Kn(1.3,1.5,g+b*(y/2-.8),v+.6,R+w*(y/2-.8)));a.put(s,Ke(y*.34,4.4,g,12.6,1.56))}c(-26,-4,19,22,0);let f=-19.5,d=-2.5;for(let[g,y,v]of[[8.6,0,30],[7.6,30.8,38],[6.8,38.7,45]]){a.put(e,tn(g,v-y,g,f,y,d,t,.2+y)),a.put(n,Yt(g+2.6,.75,g+2.6,f,v,d));for(let E of[-1,1])a.put(r,Q(.5,.9,.9,f+E*(g/2+.7),v-.9,d+g/2+.6),Q(.9,.9,.5,f+E*(g/2+.6),v-.9,d+g/2+.7));for(let E=-g/2-1.1;E<=g/2+1.1;E+=1.1)a.put(n,Q(.16,.8,.16,f+E,v+.75,d+g/2+1.2));a.put(s,Ke(g*.26,3.4,f,v-5.6,d+g/2+.06))}for(let[g,y]of[[-1,-1],[1,-1],[-1,1],[1,1]])a.put(n,Dt(.8,3.6,f+g*4.1,45.7,d+y*4.1,8),Ve(.9,1.5,f+g*4.1,49.3,d+y*4.1,{seg:8})),h(f+g*4.1,51.4,d+y*4.1,.6);a.put(e,Dt(3.2,5.3,f,45.7,d,8,t)),a.put(n,Dt(4.3,.6,f,51,d,8),Ve(3.3,4.6,f,51.6,d)),h(f,57.7,d,1.2),a.put(n,Xt([f,57.6,d],[f,62.5,d],.07)),a.put(qt(1.6,.5,.2),Q(2.6,1.5,.05,f+1.35,60.8,d)),c(-4,30,21,34,5,{balconies:!1}),a.put(e,tn(19,7,20,12.5,21,-5,t,.4)),a.put(n,Yt(20.2,.6,21.2,12.5,28,-5)),a.put(s,Ke(8.4,15,12.5,1.2,5.08),Ke(2.6,5.6,5.2,13,5.08),Ke(2.6,5.6,19.8,13,5.08),Ke(2.2,4.4,1.2,2,5.08),Ke(2.2,4.4,23.8,2,5.08)),a.put(n,Q(11,.5,2.2,12.5,12.2,6.1));for(let g=-5.2;g<=5.2;g+=1.3)a.put(n,Q(.18,.9,.18,12.5+g,12.7,7.1));for(let g of[-5.2,5.2])a.put(n,Dt(.6,11,12.5+g,1.2,6.4,10));for(let[g,y]of[[-1,-1],[1,-1],[-1,1],[1,1]])a.put(n,Kn(2.6,3,12.5+g*8,28.6,-5+y*8.4));a.put(e,Dt(6.8,5.4,12.5,28.6,-5,8,t)),a.put(n,Dt(7.6,.7,12.5,34,-5,8),Ve(6.9,9.4,12.5,34.7,-5,{seg:28,swell:.12})),h(12.5,47.2,-5,1.6);for(let g=0;g<8;g++){let y=(g+.5)*Math.PI/4;a.put(n,Kn(1.5,1.5,12.5+Math.cos(y)*7.9,34.7,-5+Math.sin(y)*7.9))}u(.6,3.6,0,22.5,2.6),u(24.6,3.6,0,22.5,2.6),c(30,42,16.5,22,0),c(42,75,19,26,2,{cupolas:!1,balconies:!1});for(let[g,y]of[[47.2,2.5],[58.2,3.3],[69.2,2.5]])a.put(s,Ke(6.2,11.5,g,1.2,2.08)),a.put(n,Q(7.4,.5,.5,g,13.4,2.3)),a.put(e,Dt(y,y*.75,g,19.5,-2,8,t)),a.put(n,Dt(y+.4,.4,g,19.5+y*.75,-2,8),Ve(y*1.05,y*1.5,g,19.9+y*.75,-2)),h(g,19.9+y*.75+y*1.5*1.32,-2,y/3);for(let g of[42.8,52.7,63.7,74.2])a.put(n,Kn(1.8,2,g,19.5,.4));u(-67,.4,0,17.5,1.6),u(75,2.4,0,20.5,1.7);let x=ct({tint:2906682}),M=ct({tint:12035980}),m=ct({tint:2050604}),p=ct({tint:7297604}),T=qt(.35,.6,.9),A=ct({tint:3355965});a.put(x,Yt(160,.3,30,0,1.36,24)),a.put(M,Yt(7,.34,30,12.5,1.36,24),Yt(150,.34,3.4,0,1.36,11.4));for(let g=12;g<=37;g+=5)for(let y of[-4.3,4.3])a.put(A,Q(.16,.9,.16,12.5+y,1.7,g)),a.put(qt(1.8,1.4,.8),ee(.16,12.5+y,2.7,g,6)),a.light(12.5+y,2.7,g,Me,.5,3.2,1.4);for(let g of[-32,52]){a.put(M,Dt(5.2,.7,g,1.6,24,16),Dt(1.1,1.3,g,2.3,24,10)),a.put(T,Qg(new wn(4.7,20)).rotateX(-Math.PI/2).translate(g,2.32,24)),a.light(g,3.2,24,an,.8,5);for(let y=0;y<14;y++)a.spark(g+(l()-.5)*1.4,3.6+l()*3.6,24+(l()-.5)*1.4,an,.9,1)}for(let g=-70;g<=70;g+=14)if(Math.abs(g-12.5)>8){let y=17+(Math.abs(g)%28?0:3);a.put(p,Xt([g,1.6,y],[g+.5,9.6,y+.3],.3,6));for(let v=0;v<8;v++){let E=v*Math.PI/4;a.put(m,Xt([g+.5,9.5,y+.3],[g+.5+Math.cos(E)*3.6,8.2+v%2*.7,y+.3+Math.sin(E)*3.6],.22,4))}a.put(m,ee(.8,g+.5,9.6,y+.3,6))}for(let g=-76;g<=76;g+=4)Math.abs(g-12.5)>5&&a.put(m,Q(3.6,1.3,1.5,g,1.6,38.2));for(let g of[-5.2,5.2])a.put(n,Q(1.8,5.4,1.8,12.5+g,1.5,38.4),Q(2.3,.4,2.3,12.5+g,6.9,38.4),Ve(.9,1.1,12.5+g,7.3,38.4,{seg:8})),a.put(qt(1.8,1.4,.8),ee(.34,12.5+g,6.3,39.5,8)),a.light(12.5+g,6.3,39.8,Me,.8,5,2.4);for(let g=-72;g<=72;g+=9)a.light(g,.6,20,Wt,.36,17);return a.light(f,24,14,Wt,.55,13).light(f,40,11,Wt,.5,10).light(f,52,9,Wt,.4,8).light(12.5,30,16,Wt,.7,13).light(12.5,40,12,Wt,.45,10).light(58,20,14,Wt,.4,9).light(-46,21,13,Wt,.4,9).light(-58,20,12,Wt,.3,8).light(-33,20,12,Wt,.3,8),a}var Qg=i=>{let t=i.attributes.uv;for(let e=0;e<t.count;e++)t.setXY(e,.004,.004);return i};var Li=()=>qt(1.9,1.35,.42),Ju=()=>qt(1.8,1.4,.8);function Yu(){let i=sr({cols:6,rows:2,lit:.16,seed:9,stone:[208,196,172],opening:.36,jali:.5}),t={u:6*4.4,v:2*8.5},e=ct({map:i.map,emissiveMap:i.emissiveMap,glow:1.3,key:"kirti"}),n=ct({tint:14274747}),r=qt(1.25,.8,.36),s=new oe;s.put(e,tn(40,17,26,0,0,-13,t),tn(22,5,16,0,17,-12,t,.3)),s.put(n,Yt(42,.7,28,0,8.3,-13),Yt(43,.8,29,0,17,-13),Yt(24,.6,18,0,22,-12),Yt(46,1,32,0,0,-13));for(let a=-20.6;a<=20.6;a+=1.4)s.put(n,Q(.2,.8,.2,a,17.8,1.1));s.put(n,Q(42,.14,.22,0,18.6,1.1));for(let a=0;a<6;a++)s.put(n,Q(12-a*.5,.26,1,0,.9-a*.2,1+a));s.put(r,Ke(6.4,11,0,1,.08,.5)),s.put(n,Q(9,.6,2.4,0,12.4,1.2));for(let a of[-3.9,3.9])s.put(n,Dt(.45,11.4,a,1,1.9,8));for(let a of[-1,1]){let l=a*14.2;s.put(n,Yt(10.4,1.4,10.4,l,17.8,-6));for(let[c,h]of[[-1,-1],[1,-1],[-1,1],[1,1],[0,1],[0,-1],[1,0],[-1,0]])s.put(n,Q(.7,5,.7,l+c*4.2,19.2,-6+h*4.2));s.put(n,Yt(12.4,.7,12.4,l,24.2,-6),Ve(4.6,3.6,l,24.9,-6,{seg:12,swell:.02})),s.put(Li(),ee(.4,l,29.9,-6,8)),s.put(r,Q(5,.2,5,l,19.3,-6)),s.light(l,21,-6,Wt,.6,5);for(let c of[-1,1])s.put(n,Kn(1.6,1.7,a*20,17.8,-13+c*11.5))}let o=[];for(let a=0;a<=22;a++){let l=a/22;o.push(new nt(Math.max(.5,9.2*(1-Math.pow(l,1.9)*.93)),20*l))}s.put(n,ce(new pi(o,16)).translate(0,22.6,-12),Dt(1.9,1.1,0,42.6,-12,12),ee(1.1,0,44.7,-12));for(let a=0;a<8;a++){let l=a*Math.PI/4;s.put(n,Ve(1.3,2.2,Math.cos(l)*8.2,22.6,-12+Math.sin(l)*8.2,{seg:8}))}s.put(Li(),ce(new Tn(1,.16,6,14,Math.PI)).rotateZ(Math.PI).translate(0,47.2,-12),ee(.75,0,48.3,-12),ee(.5,0,46.2,-12,8));for(let a=-16;a<=16;a+=8)s.light(a,.6,16,Me,.34,15);return s.light(0,26,9,Me,.6,13).light(0,38,4,Me,.4,9).light(-14,19,4,Me,.35,7).light(14,19,4,Me,.35,7),s}function Zu(){let i=ct({tint:15130834}),t=qt(1.25,.8,.36),e=ct({tint:7031350}),n=new oe;n.put(i,Yt(34,10.5,34,0,0,-17),Yt(35.5,1.6,35.5,0,10.5,-17));for(let s of[-10.5,0,10.5]){n.put(t,Ke(7.6,8.2,s,.3,.08,.55));let o=Ke(7.6,8.2,0,.3,0,.55).rotateY(Math.PI/2).translate(17.08,0,-17+s);n.put(t,o,o.clone().rotateY(Math.PI).translate(0,0,-34))}for(let s=-17;s<=17;s+=1.7)n.put(i,Q(.4,.5,.6,s,9.9,.3));let r=12.1;for(let[s,o]of[[21,6.2],[14,5.6],[7,4.8]]){n.put(i,Yt(s,o,s,0,r,-17)),n.put(e,Q(s-1.4,o*.34,s+.1,0,r+o*.56,-17),Q(s+.1,o*.34,s-1.4,0,r+o*.56,-17)),n.put(i,Yt(s+4.4,.5,s+4.4,0,r+o,-17));for(let a=-s/2-1.6;a<=s/2+1.6;a+=1.3)n.put(e,Q(.1,1,.1,a,r,-17+s/2+1.7));n.put(e,Q(s+3.4,.1,.1,0,r+1,-17+s/2+1.7)),r+=o+.5}n.put(i,Q(2.6,2.6,2.6,0,r,-17),Ve(1.7,1.6,0,r+2.6,-17,{seg:8,swell:0})),n.put(Li(),ee(.3,0,r+5,-17,8)),n.put(Ju(),ce(new wn(1.25,20)).translate(0,r-2.9,-13.45)),n.put(e,Q(.1,.9,.05,0,r-2.9,-13.4),Q(.7,.1,.05,.3,r-2.9,-13.4));for(let s of[-2.8,2.8])n.put(e,Xt([s,r-8,-15],[s,r-4.6,-15],.05)),n.put(qt(1.5,.3,.2),Q(1.3,.8,.04,s+.7,r-5.4,-15));n.put(i,Dt(3.3,13.4,16.2,0,-1,14),Dt(3.7,.6,16.2,13.4,-1,14),Kn(3.2,2.4,16.2,14,-1));for(let s of[-12,0,12])n.light(s,.6,14,Me,.36,14);return n.light(0,16,9,Me,.5,12).light(22,3,-6,Me,.4,12).light(-22,3,-17,Me,.3,12).light(0,4,-4,Wt,.7,9),n}function Qu(){let i=sr({cols:8,rows:2,lit:.26,seed:15,stone:[196,150,112],opening:.46,pointed:!0,jali:.1}),t={u:8*3.4,v:14},e=ct({map:i.map,emissiveMap:i.emissiveMap,glow:1.4,key:"nyay"}),n=ct({tint:14205600}),r=ct({tint:9132612}),s=qt(1.25,.8,.36),o=new oe;o.put(e,tn(72,14,24,0,0,-12,t),tn(18,18.5,28,0,0,-11,t,.2)),o.put(n,Yt(74,.6,26,0,6.9,-12),Yt(75,.8,27,0,14,-12),Yt(20,.8,30,0,18.5,-11),Yt(76,1,30,0,0,-12));for(let a=-36;a<=36;a+=1.5)Math.abs(a)>10&&o.put(n,Q(.2,.8,.2,a,14.8,.4));o.put(s,Ke(7,10.5,0,1,3.08,.5),Ke(2.4,4.6,-5.6,9.4,3.08,.5),Ke(2.4,4.6,5.6,9.4,3.08,.5));for(let a=0;a<5;a++)o.put(n,Q(13-a*.6,.24,1,0,.8-a*.2,3.6+a));o.put(e,Dt(6.4,4.4,0,19.3,-11,12,t)),o.put(n,Dt(7,.6,0,23.7,-11,12),Ve(6.4,7.2,0,24.3,-11,{seg:24,swell:.03})),o.put(Li(),ee(.5,0,33.8,-11,8));for(let a of[-1,1])o.put(e,tn(9,20,9,a*33,0,-3.5,t,.6)),o.put(n,Yt(10.2,.6,10.2,a*33,20,-3.5)),o.put(r,Xn(6.4,6,a*33,20.6,-3.5,4)),o.put(Li(),ee(.34,a*33,27,-3.5,8)),o.put(e,Dt(2.6,2.4,a*17,14.8,-8,8,t)),o.put(n,Ve(2.7,3,a*17,17.2,-8,{seg:12}));for(let a=-32;a<=32;a+=8)o.light(a,.6,15,Wt,.34,14);return o.light(0,22,8,Wt,.55,11).light(-33,18,8,Wt,.3,8).light(33,18,8,Wt,.3,8),o}function $u(){let i=sr({cols:8,rows:3,lit:.24,seed:21,stone:[178,104,78],shadow:[40,24,20],opening:.44,jali:.15}),t={u:8*3.2,v:3*5.4},e=ct({map:i.map,emissiveMap:i.emissiveMap,glow:1.4,key:"arts"}),n=ct({tint:14733230}),r=ct({tint:11823696}),s=qt(1.25,.8,.36),o=new oe;o.put(e,tn(30,19,30,0,0,-15,t),tn(24,11,20,-27,0,-12,t,.3),tn(24,11,20,27,0,-12,t,.5)),o.put(n,Yt(31.4,.7,31.4,0,19,-15),Yt(25.2,.6,21.2,-27,11,-12),Yt(25.2,.6,21.2,27,11,-12),Yt(82,1,34,0,0,-14));for(let a of[5.4,10.8])o.put(n,Yt(30.8,.4,30.8,0,a,-15));o.put(n,Yt(24.8,.4,20.8,-27,5.4,-12),Yt(24.8,.4,20.8,27,5.4,-12)),o.put(s,Ke(6,12,0,1,.08,.4)),o.put(e,Dt(12,8,0,19.7,-15,16,t));for(let a of[22.3,25])o.put(n,Dt(12.3,.4,0,a,-15,16));o.put(n,Dt(13,.8,0,27.7,-15,16),Ve(12,13,0,28.5,-15,{seg:32,swell:.02,finial:.2})),o.put(Li(),ee(.7,0,44.6,-15,8));for(let[a,l]of[[-1,-1],[1,-1],[-1,1],[1,1]]){let c=a*13.4,h=-15+l*13.4;o.put(r,Dt(2.3,25,c,0,h,8)),o.put(n,Dt(2.8,.5,c,25,h,8),Kn(3,2.6,c,25.5,h))}for(let a of[-1,1]){o.put(r,Dt(2,15,a*38.5,0,-3,8)),o.put(n,Ve(2.2,2.6,a*38.5,15,-3,{seg:10}));for(let l=16;l<=38;l+=5.5)o.put(n,Kn(1.4,1.5,a*l,11.6,-3.2))}for(let a=-36;a<=36;a+=9)o.light(a,.6,15,Wt,.36,15);return o.light(0,24,8,Wt,.6,13).light(0,36,4,Wt,.5,12).light(-13,26,2,Wt,.3,7).light(13,26,2,Wt,.3,7),o}function tf(){let i=sr({cols:6,rows:1,lit:.5,seed:31,stone:[170,96,74],shadow:[34,22,18],opening:.56}),t={u:18,v:6},e=ct({map:i.map,emissiveMap:i.emissiveMap,glow:1.5,key:"clock"}),n=ct({tint:14865076}),r=ct({tint:11561554}),s=ct({tint:7293504}),o=new oe;o.put(e,tn(34,6,14,0,0,-7,t)),o.put(n,Yt(35,.5,15,0,6,-7)),o.put(s,Q(33,1.6,13,0,6.5,-7));let a=0;for(let[l,c]of[[8,16],[7.2,8],[6.4,6]]){o.put(r,Yt(l,c,l,0,a,-7)),o.put(n,Yt(l+1.4,.6,l+1.4,0,a+c,-7));for(let h of[-1,1])o.put(n,Q(.5,c,.5,h*(l/2-.1),a,-7+l/2-.1));a+=c+.6}for(let[l,c,h]of[[0,1,0],[1,0,Math.PI/2],[-1,0,-Math.PI/2]]){let u=ce(new wn(2.1,24)).rotateY(h).translate(l*3.25,27.8,-7+c*3.25);o.put(qt(1.7,1.5,1.1),u),o.put(s,Q(.14,1.5,.14,l*3.3,27.8,-7+c*3.3),ce(new Te(1.1,.14,.14)).rotateY(h).translate(l*3.3+(c?.45:0),27.9,-7+c*3.3+(l?-l*.45:0)))}o.put(s,Xn(5,6.4,0,a,-7,4)),o.put(Li(),ee(.4,0,a+6.7,-7,8)),o.put(n,Xt([0,a+6.6,-7],[0,a+9.4,-7],.06));for(let l of[-12,0,12])o.light(l,.6,9,Me,.34,11);return o.light(0,14,6,Wt,.5,11).light(0,26,5,Me,.5,8).light(0,3,1.5,Me,.6,7,2.2),o}function ef(){let i=ct({tint:14015202}),t=ct({tint:12175062}),e=new oe;e.put(i,Yt(30,1.2,30,0,0,-15),Yt(24,5.4,24,0,1.2,-15),Yt(26,.5,26,0,6.6,-15));let n=new Ri(10,2),r=n.attributes.position;for(let o=0;o<r.count;o++)r.getY(o)<0&&r.setY(o,0);n.computeVertexNormals(),ce(n);let s=n.toNonIndexed();s.computeVertexNormals(),e.put(t,s.scale(1,.92,1).translate(0,7.1,-15)),e.put(Li(),ee(.55,0,16.9,-15,8),Xn(.3,1.6,0,16.9,-15,6));for(let o=0;o<4;o++)e.put(i,Q(8-o*.4,.3,1,0,.9-o*.3,.6+o));e.put(qt(.9,1.1,1.4),Ke(3.2,4.4,0,1.2,-2.94));for(let[o,a]of[[-13,-2],[13,-2],[-13,-28],[13,-28]])e.put(i,Dt(.25,4.6,o,1.2,a,6)),e.put(qt(1.2,1.5,1.9),ee(.4,o,6.2,a,8)),e.light(o,6.2,a,an,.9,6,2.6);for(let o of[-9,0,9])e.light(o,.8,4,an,.5,12);return e.light(0,12,2,an,.8,11).light(-12,9,-15,an,.4,9).light(12,9,-15,an,.4,9),e}function nf(){let i=ct({tint:12035980}),t=ct({tint:3354926}),e=ct({tint:3355965}),n=new oe;n.put(i,Yt(7,.6,10,0,0,0),Q(3.6,5,6.6,0,.6,0),Q(4.4,.5,7.4,0,5.6,0),Q(3.2,.5,6,0,6.1,0));let r=6.6,s=o=>n.put(t,o);s(ce(new pn(1,12,10)).scale(.95,1.05,2.3).translate(0,r+3.2,0)),s(Xt([0,r+3.7,1.7],[0,r+5.5,2.8],.55,8)),s(ce(new pn(.5,8,6)).scale(.8,.85,1.5).translate(0,r+5.7,3.4));for(let[o,a,l]of[[-.55,1.5,.7],[.55,1.5,0],[-.55,-1.6,0],[.55,-1.6,0]])s(Xt([o,r+2.6,a],[o,r+1.3+l,a+(l?.7:.1)],.24,6)),s(Xt([o,r+1.3+l,a+(l?.7:.1)],[o,r+l*1.2,a+(l?.3:0)],.19,6));s(Xt([0,r+3.6,-2.1],[0,r+1.9,-2.9],.2,6)),s(Xt([0,r+4,.1],[0,r+5.9,0],.5,8)),s(ee(.42,0,r+6.5,.05,8)),s(ce(new pn(.5,8,6)).scale(1,.5,1).translate(0,r+6.85,0)),s(Xt([-.5,r+5.5,.1],[-.6,r+4.4,1.2],.15,5)),s(Xt([.5,r+5.5,.1],[.6,r+4.4,1.2],.15,5));for(let o=0;o<16;o++){let a=o*Math.PI/8,l=Math.cos(a)*6.4,c=Math.sin(a)*6.4;n.put(e,Q(.12,1.1,.12,l,.6,c))}n.put(e,ce(new Tn(6.4,.05,4,32)).rotateX(Math.PI/2).translate(0,1.7,0));for(let[o,a]of[[-4.6,6],[4.6,6],[-4.6,-6],[4.6,-6]])n.put(e,Q(.14,3.4,.14,o,.6,a)),n.put(Ju(),ee(.3,o,4.2,a,8)),n.light(o,4.2,a,Me,.7,5,2);return n.light(0,2,8,Wt,.7,8).light(0,2,-8,Wt,.4,8),n}function Vc(i=4){let t=ct({tint:6969414}),e=ct({tint:1918512}),n=ct({tint:2775610}),r=ct({tint:10524292}),s=new oe,o=Ge(i);s.put(r,Dt(8.5,1.1,0,0,0,20),Dt(9.3,.3,0,1.1,0,20));for(let a=0;a<7;a++){let l=o()*6.28,c=a?1.2+o()*3:0,h=Math.cos(l)*c,u=Math.sin(l)*c;s.put(t,Xt([h,1.2,u],[h*1.9+(o()-.5)*2,11+o()*3,u*1.9+(o()-.5)*2],a?.5+o()*.5:1.3,7))}for(let a=0;a<9;a++){let l=a/9*6.28+o(),c=9+o()*9;s.put(t,Xt([Math.cos(l)*2,10,Math.sin(l)*2],[Math.cos(l)*c,11.5+o()*3,Math.sin(l)*c],.34,5))}for(let a=0;a<26;a++){let l=o()*6.28,c=4+o()*15,h=3.6+o()*3.4;s.put(o()<.5?e:n,ce(new Ri(h,1)).scale(1.15,.7,1.15).translate(Math.cos(l)*c,13.5+o()*5,Math.sin(l)*c))}for(let a=0;a<46;a++){let l=o()*6.28,c=5+o()*13,h=Math.cos(l)*c,u=Math.sin(l)*c,f=11+o()*2;s.put(t,Xt([h,f,u],[h+(o()-.5)*.6,c>9.5?0:1.3+o()*5,u+(o()-.5)*.6],.05+o()*.07,4))}for(let a=0;a<16;a++){let l=o()*6.28,c=3+o()*13,h=Math.cos(l)*c,u=Math.sin(l)*c,f=6.5+o()*3.5;s.put(t,Xt([h,f,u],[h,11.5,u],.03,3)),s.put(qt(2,1.3,.5),ee(.24,h,f,u,6)),s.light(h,f,u,Wt,.5,4.2,1.9)}return s.light(0,2.4,7,Wt,.5,8).light(0,2.4,-7,Wt,.4,8),s}function rf(){let i=ct({tint:2906682}),t=ct({tint:12035980}),e=ct({tint:14866626}),n=ct({tint:3158586}),r=ct({tint:4864556}),s=[qt(1.6,.5,.6),qt(1.7,1.3,.3),qt(1,.5,1.5)],o=new oe;o.put(i,Dt(34,.3,0,0,0,40)),o.put(t,Dt(27.2,.36,0,0,0,40)),o.put(i,Dt(24.8,.42,0,0,0,40));for(let a=0;a<72;a++){let l=a/72*6.283;o.put(r,ce(new Te(2,.12,.34)).rotateY(-l).translate(Math.cos(l)*26,.42,Math.sin(l)*26))}for(let a of[25.4,26.6])o.put(n,ce(new Tn(a,.06,4,96)).rotateX(Math.PI/2).translate(0,.52,0));o.put(e,Dt(6.4,1.1,0,.4,0,8),Dt(7.4,.4,0,6.2,0,8),Ve(6.6,3.4,0,6.6,0,{seg:16,swell:.02})),o.put(qt(1.9,1.35,.42),ee(.34,0,11.4,0,8));for(let a=0;a<8;a++){let l=(a+.5)*Math.PI/4;o.put(e,Dt(.24,4.7,Math.cos(l)*5.6,1.5,Math.sin(l)*5.6,8)),o.put(qt(1.8,1.4,.8),ee(.22,Math.cos(l)*5.6,5.6,Math.sin(l)*5.6,6))}o.light(0,5,0,Wt,1.1,8,3).light(0,3,9,Wt,.5,8),o.put(i,ce(new Pe(6,6,.5,28)).rotateX(.5).translate(0,1.5,15.5));for(let a=0;a<12;a++){let l=a/12*6.283;o.put(s[a%3],ee(.34,Math.sin(l)*4.8,1.75+Math.cos(l)*2.3,15.9-Math.cos(l)*4.2+4.1,6))}o.put(e,ce(new Te(.2,.1,3.4)).rotateX(.5).translate(0,2.4,14.4),ce(new Te(2.4,.1,.2)).rotateX(.5).translate(1.2,1.8,15.6)),o.light(0,5,20,Me,.9,8,3);for(let a=0;a<16;a++){let l=a/16*6.283,c=Math.cos(l)*31,h=Math.sin(l)*31;o.put(n,Xt([c,.3,h],[c,4.6,h],.07,4)),o.put(qt(1.8,1.4,.8),ee(.26,c,4.8,h,6)),o.light(c,4.8,h,Me,.7,5.5,3.2)}return o}function sf(){let i=new nn,t=[];return[[12597547,1],[3046747,0],[14262305,0],[3104680,0]].forEach(([e,n],r)=>{let s=new nn,o=new me({color:new yt(e).multiplyScalar(.7)}),a=new me({color:15260864}),l=new me({color:1381914}),c=new Nt(new Te(1.6,n?1.5:.9,3.2),o);if(c.position.y=n?1.25:.95,s.add(c),n){let h=new Nt(new Pe(.6,.6,1.8,10).rotateX(Math.PI/2),o);h.position.set(0,1.5,1.9),s.add(h);let u=new Nt(new Pe(.22,.16,.9,8),l);u.position.set(0,2.5,2.3),s.add(u);let f=new Nt(new pn(.2,8,6),new me({color:new yt(3,2.6,1.8)}));f.position.set(0,1.6,2.9),s.add(f)}else{let h=new Nt(new Te(1.8,.12,3.3),a);h.position.y=2.6,s.add(h);for(let[f,d]of[[-.75,-1.5],[.75,-1.5],[-.75,1.5],[.75,1.5]]){let x=new Nt(new Te(.08,1.3,.08),a);x.position.set(f,2,d),s.add(x)}let u=new Nt(new Te(1.5,.08,3),new me({color:new yt(2.4,1.7,.8)}));u.position.y=2.5,s.add(u)}for(let h of[-1,1]){let u=new Nt(new Pe(.36,.36,1.8,10).rotateZ(Math.PI/2),l);u.position.set(0,.5,h),s.add(u)}i.add(s),t.push(s)}),{g:i,cars:t}}var of=[],pl=(i,t,e,n)=>of.push({x:i,z:t,hw:e,hd:n}),ml=(i,t,e=0)=>of.every(n=>Math.abs(i-n.x)>n.hw+e||Math.abs(t-n.z)>n.hd+e),Wc=i=>{let t=(i%360+360)%360;return t>204&&t<336};function $g(){let i=new oe,t=ct({tint:3158586});i.put(t,Dt(.34,.7,0,0,0,8,null,.2),Xt([0,.7,0],[0,5.6,0],.09,6),Xt([-.95,5.3,0],[.95,5.3,0],.05,4),Q(.2,.3,.2,0,5.6,0),Xn(.16,.5,0,5.9,0,6));for(let e of[-1,1])i.put(t,Xt([e*.95,5.3,0],[e*.95,4.95,0],.03,4)),i.put(qt(1.9,1.5,.9),ee(.3,e*.95,4.7,0,8));return i.light(0,4.9,0,Me,.95,6.2).spark(-.95,4.7,0,Me,4.2).spark(.95,4.7,0,Me,4.2),i}function tx(){let i=new oe,t=ct({tint:8019008}),e=ct({tint:3158586});i.put(t,Q(2.2,.1,.6,0,.5,0),Q(2.2,.5,.08,0,.72,-.3));for(let n of[-.95,.95])i.put(e,Q(.08,.5,.6,n,0,0));return i}function dl(i,t=1){let e=new oe,n=Ge(i),r=ct({tint:6048314}),s=[ct({tint:1918512}),ct({tint:2775610}),ct({tint:2314042})],o=(4+n()*3)*t;e.put(r,Xt([0,0,0],[n()*.6-.3,o,n()*.6-.3],.3*t,6));for(let a=0;a<4+(n()*3|0);a++){let l=(2+n()*2.2)*t;e.put(s[a%3],ce(new Ri(l,1)).scale(1,.78+n()*.3,1).translate((n()-.5)*3.4*t,o+n()*2.6*t,(n()-.5)*3.4*t))}return e}function Xc(i){let t=new oe,e=Ge(i),n=ct({tint:7297604}),r=ct({tint:2446650}),s=8+e()*4,o=(e()-.5)*1.6;t.put(n,Xt([0,0,0],[o*.4,s*.5,0],.26,6),Xt([o*.4,s*.5,0],[o,s,0],.2,6)),t.put(r,ee(.6,o,s,0,6));for(let a=0;a<9;a++){let l=a/9*6.28+e(),c=3+e()*1.2;t.put(r,Xt([o,s,0],[o+Math.cos(l)*c*.6,s+.5,Math.sin(l)*c*.6],.16,4),Xt([o+Math.cos(l)*c*.6,s+.5,Math.sin(l)*c*.6],[o+Math.cos(l)*c,s-1-e(),Math.sin(l)*c],.11,4))}return t}function ex(i){let t=Ge(i),e=new oe,n=ct({tint:[8138554,3100028,12035194,3107413,9080732,11822126,5913194][t()*7|0]}),r=ct({tint:10119756}),s=ct({tint:2763830}),o=t()<.4;return e.put(s,o?Xn(.34,.95,0,0,0,7):[Q(.16,.85,.2,-.11,0,0),Q(.16,.85,.2,.11,0,0)]),e.put(n,Dt(.2,.62,0,.85,0,7,null,.24),Xt([-.27,1.4,0],[-.31,.86,.06],.065,4),Xt([.27,1.4,0],[.31,.86,.06],.065,4)),e.put(r,ee(.14,0,1.63,0,7)),e}function nx(i){let t=Ge(i),e=new oe,n=ct({tint:7031860}),r=ct({tint:11120054}),s=ct({tint:3158586}),o=ct({map:Zr(["#b33a2e","#1f6f6a","#c98a1e","#2e4f9a"][i%4],"#efe6d2",8),key:"awning"+i%4,side:Xe});e.put(n,Q(2.6,.16,1.4,0,.9,0),Q(2.6,.5,.06,0,.42,.7));for(let[c,h]of[[-1,.72],[1,.72],[-1,-.72],[1,-.72]])e.put(s,ce(new Pe(.34,.34,.06,10)).rotateX(Math.PI/2).translate(c,.34,h));for(let[c,h]of[[-1.25,.66],[1.25,.66],[-1.25,-.66],[1.25,-.66]])e.put(s,Xt([c,1,h],[c,2.7,h],.03,4));let a=new yn(3.1,1.2);a.rotateX(-Math.PI/2+.28).translate(0,2.78,.42);let l=new yn(3.1,1.2);l.rotateX(-Math.PI/2-.28).translate(0,2.78,-.42),e.put(o,a,l);for(let c=0;c<5;c++)e.put(r,Dt(.16+t()*.1,.16+t()*.2,-1+c*.5,1.06,(t()-.5)*.7,8));return e.put(r,Dt(.3,.1,.9,1.06,.2,10)),e.put(qt(2.2,1.7,.9),ee(.11,0,2.3,.2,6)),e.light(0,2.3,.2,Wt,1.1,3.4,2.6),e}function ix(){let i=new oe,t=ct({tint:3111498}),e=ct({tint:14856762}),n=ct({tint:1842466});i.put(t,Q(1.3,.75,2.2,0,.3,0)),i.put(e,Q(1.3,.12,2.3,0,1.75,-.05),Q(1.2,.7,.08,0,1.05,-1.1)),i.put(n,Q(1.22,.7,1.2,0,1.05,-.45),Q(.5,.5,.5,0,.5,1.2));for(let[r,s]of[[0,1.35],[-.62,-.75],[.62,-.75]])i.put(n,ce(new Pe(.26,.26,.14,10)).rotateZ(Math.PI/2).translate(r,.26,s));for(let r of[-.6,.6])i.put(n,Xt([r,1.05,.2],[r,1.75,.5],.03,4));return i.put(qt(2,1.8,1.3),ee(.09,0,.9,1.46,6)),i}function rx(){let i=new oe,t=ct({map:Zr("#8a6a4c","#73573d",10),key:"planks"}),e=ct({tint:4866104}),n=ct({tint:12166524}),r=new Te(5.4,.36,21),s=r.attributes.uv,o=r.attributes.position;for(let a=0;a<s.count;a++)s.setXY(a,o.getZ(a)/3.2,o.getX(a)/5.4);i.put(t,r.translate(0,1.22,10.5));for(let a=1.5;a<=20;a+=3.7)for(let l of[-2.5,2.5])i.put(e,Dt(.22,3.6,l,-1.4,a,6)),a>2&&i.put(n,Xt([l,2.1,a-3.7],[l,2.1,a],.035,3));for(let a of[-2.5,2.5])i.put(e,Xt([a,1.4,20.2],[a,5.2,20.2],.07,5)),i.put(qt(1.9,1.45,.85),ee(.3,a,5.4,20.2,8)),i.light(a,5.4,20.2,Me,.85,5.6,3.6);return i.put(e,Q(1,.8,1,1.4,1.4,3),Q(.8,.7,.8,1.6,1.4,4.2),Q(.7,.6,.7,1.5,2.2,3.1)),i.put(n,ce(new Tn(.45,.12,5,10)).rotateX(Math.PI/2).translate(-1.6,1.52,5)),i}function af(i){let t=new oe,e=Ge(21),n=ct({tint:9274488}),r=ct({tint:11774098}),s=ct({tint:5591114,side:Xe}),o=ct({tint:3158586}),a=ct({tint:3355708}),l=ct({tint:1848100}),c=ct({tint:10326914,side:Xe});t.put(n,Di(pt+.6,pt+16,1.7,0,360,240)),t.put(r,Di(pt-.6,pt+.6,1.96,0,360,240),Di(pt+15.6,pt+16.4,1.86,0,360,240)),t.put(s,Gc(pt-.6,-1.2,3.2,0,360,240)),t.put(a,Di(pt+16.4,pt+27,1.6,0,360,240)),t.put(r,Di(pt+27,pt+28,1.78,0,360,240)),t.put(l,Di(pt+28,960,1.5,0,360,96));for(let y=0;y<360;y+=2){let v=fe(y,pt+.2);t.put(o,Q(.13,1.15,.13,v.x,1.96,v.z))}for(let y of[2.55,3.05])t.put(o,ce(new Tn(pt+.2,.045,4,360)).rotateX(Math.PI/2).translate(0,y,0));let h=ct({tint:4864556});for(let y=0;y<660;y++){let v=y/660*360,E=fe(v,pt+14.9);t.put(h,ce(new Te(.3,.1,1.5)).rotateY(v*ze).translate(E.x,1.74,E.z))}for(let y of[14.4,15.4])t.put(o,ce(new Tn(pt+y,.05,4,360)).rotateX(Math.PI/2).translate(0,1.84,0));for(let y of[114,66,41,-27,144,180,222,318,250,292])for(let v=0;v<7;v++)t.put(c,Di(pt-.6-(v+1)*1.05,pt-.6-v*1.05,1.7-(v+1)*.32,y-4.2,8.4,240),Gc(pt-.6-(v+1)*1.05,1.7-(v+2)*.32,.32,y-4.2,8.4,240));let u=$g(),f=tx(),d=y=>Math.atan2(-Math.cos(y*ze),Math.sin(y*ze));for(let y=3;y<360;y+=7.5){let v=fe(y,pt+3.2);t.stamp(u,v.x,v.z,d(y)+Math.PI/2,1,1.7);let E=fe(y+3.75,pt+2.6);t.stamp(f,E.x,E.z,d(y+3.75),1,1.7)}for(let y=0;y<360;y+=10){let v=fe(y,pt+27.6),E=fe(y,pt+25.2);t.put(o,Xt([v.x,1.7,v.z],[v.x,8.2,v.z],.1,5),Xt([v.x,8.2,v.z],[E.x,8.5,E.z],.07,4)),t.put(qt(1.5,1.7,1.9),ee(.26,E.x,8.4,E.z,6)),t.light(E.x,8.3,E.z,an,.75,8.5,4.4)}let x=[dl(1),dl(2),dl(3),dl(4,1.35)],M=[Xc(1),Xc(2),Xc(3)];for(let y=1.5;y<360;y+=5){if(Wc(y)&&e()<.6)continue;let v=fe(y+e()*2,pt+12.2+e()*1.2);t.stamp(x[e()*3|0],v.x,v.z,e()*6.28,Wc(y)?.62:.8+e()*.3,1.7)}for(let y=0;y<520;y++){let v=e()*360,E=pt+32+e()*e()*300,R=fe(v,E);Wc(v)||!ml(R.x,R.z,8)||t.stamp(x[e()*4|0],R.x,R.z,e()*6.28,.9+e()*.7,1.5)}for(let y of[118,110,70,62,45,37,-23,-31,148,140,184,176]){let v=fe(y,pt+8+e()*4);t.stamp(M[e()*3|0],v.x,v.z,e()*6.28,1,1.7)}let m=[0,1,2,3,4,5].map(nx),p=Array.from({length:14},(y,v)=>ex(v+1)),T=ix(),A=(y,v,E,R)=>{for(let b=0;b<E;b++){let w=y+(e()-.5)*R,I=fe(w,v+(e()-.5)*5);t.stamp(p[e()*14|0],I.x,I.z,e()*6.28,.92+e()*.2,1.7)}};for(let[y,v,E]of[[212,332,9.5],[-12,34,11],[136,196,12],[50,130,13]])for(let R=y;R<=v;R+=E){let b=fe(R+e()*2,pt+11.5);if(t.stamp(m[e()*6|0],b.x,b.z,d(R),1.15,1.7),A(R,pt+8.6,4+(e()*4|0),3.4),e()<.7){let w=fe(R+3.5,pt+18.2);t.stamp(T,w.x,w.z,d(R)+Math.PI/2,1.2,1.6)}}for(let y=0;y<360;y+=3.1)e()<.75&&A(y,pt+5+e()*6,1+(e()*2|0),2);for(let[y,v]of[[214,330],[-10,32],[140,192]])for(let E=y;E<v;E+=7.5)for(let R=1;R<12;R++){let b=R/12,w=fe(E+3+b*7.5,pt+3.2),I=Math.sin(b*Math.PI)*1.1;t.spark(w.x,7.2-I,w.z,[Wt,Wt,Yr,ni,Me][R%5],1.5,1)}let g=rx();for(let y of i){let v=fe(y,pt+.6);t.stamp(g,v.x,v.z,d(y),1,0)}return t}var sx=i=>{let t=(i%360+360)%360;return t>204&&t<336};function lf(){let i=new oe,t=Ge(5),e={u:8*3.3,v:8*3.2},n=[[84,90,110],[104,94,84],[72,84,104],[112,104,96]].map((v,E)=>{let R=Ku({seed:40+E,lit:.13+E*.04,wall:v});return ct({map:R.map,emissiveMap:R.emissiveMap,glow:1.3,key:"block"+E})}),r=ct({tint:4869208}),s=ct({tint:1842468}),o=ct({tint:6975356}),a=ct({tint:3158586}),l=[qt(1.9,1.2,.5),qt(1.8,.35,.3),qt(.4,1.6,1.4),qt(1.7,.5,1.1),qt(1.5,1.6,1.8),qt(.5,1.5,.5)],c=[Wt,fl,ni,Yr,an,ni],h=0;for(let v=0;v<620&&h<430;v++){let E=t()*360,R=t()<.36,b=R?pt+32+t()*10:pt+44+t()*t()*420,w=fe(E,b);if(sx(E)||!ml(w.x,w.z,12))continue;let I=10+t()*22,L=9+t()*16,k=R?7+t()*9:6+t()*t()*(b>pt+130?52:24),O=t()*4|0,X=Math.atan2(-Math.cos(E*ze),Math.sin(E*ze))+(t()-.5)*.4,z=new oe;if(z.put(n[O],tn(I,k,L,0,0,-L/2,e,t()*3)),z.put(r,Q(I+.5,.5,L+.5,0,k,-L/2)),t()<.7){let $=(t()-.5)*(I-4),G=-L/2+(t()-.5)*(L-4);z.put(o,Q(2.2,1.1,2.2,$,k+.5,G)),z.put(s,Dt(.9,1.5,$,k+1.6,G,10))}if(t()<.6&&z.put(n[O],Q(3,2.6,3.4,(t()-.5)*(I-5),k+.5,-L/2+(t()-.5)*(L-5))),t()<.3){let $=(t()-.5)*(I-2);z.put(a,Xt([$,k,-L/2],[$,k+4+t()*3,-L/2],.04,3))}if(t()<.25)for(let $=0;$<3;$++)z.put(o,Q(.9,.6,.5,-I/2+2+$*3,3+$*3.2,.25));if(R||t()<.2){let $=t()*6|0;z.put(qt(1.5,1.1,.6),Q(I-1.2,2.3,.08,0,.4,.05)),z.put(r,Q(I,.2,1.6,0,3,.8));for(let G=0;G<1+(t()*3|0);G++)z.put(l[($+G)%6],Q(2.4+t()*3,.9,.12,(t()-.5)*(I-5),3.3+t()*1.2,.12));z.light(0,2,2.6,c[$],.7,7).light(0,2,2.6,Wt,.5,9)}i.stamp(z,w.x,w.z,X,1,1.5),h++,t()<.2&&i.light(w.x+(t()-.5)*14,4.5,w.z+(t()-.5)*14,Me,.5,9,3.4)}let u=ct({tint:13351322}),f=ct({tint:14672614}),d=ct({tint:4160092}),x=qt(1.9,1.35,.42),M=ct({tint:9080988}),m=(v,E,R)=>{let b=fe(v,E);ml(b.x,b.z,6)&&i.stamp(R(),b.x,b.z,Math.atan2(-Math.cos(v*ze),Math.sin(v*ze)),1,1.5)},p=()=>{let v=new oe,E=[];for(let R=0;R<=12;R++){let b=R/12;E.push(new nt(Math.max(.3,3.4*(1-Math.pow(b,1.7)*.93)),11*b))}return v.put(u,Q(8,5,8,0,0,0),ce(new pi(E,10)).translate(0,5,0),Q(5,4,5,0,0,5.5),Xn(3.6,3,0,4,5.5,4)),v.put(x,ee(.4,0,16.4,0,8)),v.put(qt(1.7,.6,.2),Q(1.2,.8,.04,.7,17.6,0)),v.put(M,Xt([0,16.4,0],[0,18.4,0],.04,3)),v.light(0,3,9,Wt,.7,9).light(0,9,5,Wt,.5,8,3),v},T=()=>{let v=new oe;return v.put(f,Q(12,6,12,0,0,0),Dt(4.2,1.2,0,6,0,12),Ve(4.2,4.6,0,7.2,0,{seg:16,swell:.06}),Dt(1,19,7.5,0,5,8),Dt(1.5,.5,7.5,13,5,8),Dt(1.5,.5,7.5,17,5,8)),v.put(d,Xn(1.2,3,7.5,19,5,8)),v.put(x,ee(.3,7.5,22.2,5,6),ee(.34,0,12.6,0,6)),v.put(qt(.5,1.7,.8),Q(.5,1.2,.5,7.5,14,5)),v.light(0,3,9,ni,.5,9).light(7.5,15,5,ni,.6,6,3.2),v},A=()=>{let v=new oe;for(let[E,R]of[[-2.6,-2.6],[2.6,-2.6],[-2.6,2.6],[2.6,2.6]])v.put(f,Xt([E,0,R],[E*.8,17,R*.8],.32,6));for(let E of[6,12])v.put(f,Q(5.4,.3,.3,0,E,2.4),Q(5.4,.3,.3,0,E,-2.4),Q(.3,.3,5.4,2.4,E,0),Q(.3,.3,5.4,-2.4,E,0));return v.put(f,Dt(4.6,5,0,17,0,14,null,5.2),Xn(5.4,1.6,0,22,0,14)),v.light(0,2,6,Me,.4,9),v},g=()=>{let v=new oe;for(let[E,R]of[[-1.5,-1.5],[1.5,-1.5],[-1.5,1.5],[1.5,1.5]])v.put(M,Xt([E,0,R],[E*.2,44,R*.2],.09,4));for(let E=4;E<44;E+=5){let R=1.5*(1-E/55);v.put(M,Xt([-R,E,-R],[R,E+5,-R],.05,3),Xt([R,E,R],[-R,E+5,R],.05,3),Xt([R,E,-R],[R,E+5,R],.05,3),Xt([-R,E,R],[-R,E+5,-R],.05,3))}for(let E of[30,36,40])v.put(f,Q(.5,2,.3,.9,E,0),Q(.5,2,.3,-.9,E,0));return v.spark(0,45,0,fl,5,2).spark(0,24,0,fl,3.4,2),v},y=v=>()=>{let E=new oe,R=Ge(v),b=R()*6|0;for(let w of[-4.5,4.5])E.put(M,Xt([w,0,0],[w,13,0],.16,5));return E.put(M,Q(11.4,5.6,.3,0,8.4,-.2)),E.put(qt(.5,.52,.6),Q(11,5.2,.1,0,8.6,.05)),E.put(l[b],Q(11,1.6,.12,0,8.6,.08),Q(3,3.4,.12,-3.2,10.4,.08)),E.light(0,11,5,c[b],.8,10).light(0,9,4,an,.5,9),E};for(let[v,E]of[[20,96],[74,150],[112,170],[146,110],[176,84],[60,240],[128,250],[-12,130]])m(v,pt+E,p);for(let[v,E]of[[32,128],[100,220],[166,150],[-24,100]])m(v,pt+E,T);for(let[v,E]of[[24,200],[140,200],[84,280]])m(v,pt+E,A);for(let[v,E]of[[40,170],[118,130],[158,230],[4,210],[78,330]])m(v,pt+E,g);return[[26,34],[64,36],[120,34],[150,60],[186,36],[-4,34],[-30,64],[96,150]].forEach(([v,E],R)=>m(v,pt+E,y(R+3))),i}var xi={cols:96,rows:246,aspect:.38971,height:"data:image/png;base64,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",mask:"data:image/png;base64,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",shade:"data:image/jpeg;base64,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"};var Kc=i=>new Promise(t=>{let e=new Image;e.onload=()=>t(e),e.src=i});async function cf(i){let[t,e,n]=await Promise.all([Kc(xi.height),Kc(xi.mask),Kc(xi.shade)]),r=document.createElement("canvas");r.width=xi.cols,r.height=xi.rows;let s=r.getContext("2d",{willReadFrequently:!0});s.drawImage(t,0,0);let o=s.getImageData(0,0,r.width,r.height).data,a=31,l=a*xi.aspect,c=2.2,h=xi.cols,u=xi.rows,f=(g,y)=>o[(Math.max(0,Math.min(u-1,y))*h+Math.max(0,Math.min(h-1,g)))*4]/255,d=[],x=[],M=[];for(let g=0;g<u;g++)for(let y=0;y<h;y++)d.push((y/(h-1)-.5)*l,(1-g/(u-1))*a,f(y,g)*c),x.push(y/(h-1),1-g/(u-1));for(let g=0;g<u-1;g++)for(let y=0;y<h-1;y++){let v=g*h+y;M.push(v,v+h,v+1,v+1,v+h,v+h+1)}let m=new Ie;m.setAttribute("position",new Jt(d,3)),m.setAttribute("uv",new Jt(x,2)),m.setIndex(M);let p=g=>{let y=new rn(g);return y.needsUpdate=!0,y.anisotropy=8,y.colorSpace=Wn,y},T=new _e({uniforms:un.merge([ft.fog,{shade:{value:null},mask:{value:null}}]),fog:!0,vertexShader:`varying vec2 vUv;
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
      }`});T.uniforms.shade.value=p(n),T.uniforms.mask.value=p(e);let A=new Nt(m,T);A.position.set(.6,16.6,0),i.add(A)}function hf(){let i=new oe,t=ct({tint:9208696}),e=ct({tint:11818558}),n=ct({tint:9322544}),r=ct({tint:13220256}),s=ct({tint:3158586}),o=qt(1.9,1.4,.8),a=qt(1.7,.7,.15);i.put(t,Yt(58,1,22,0,3.2,0),Yt(62,.5,26,0,4.2,0));for(let l=-26;l<=26;l+=6.5)for(let c of[-9,9])i.put(t,Dt(.55,3.4,l,-.2,c,8));for(let l=0;l<7;l++)i.put(t,Q(14-l*.2,.5,1.2,0,3.7-l*.55,11.6+l*1.2));for(let l=-30.5;l<=30.5;l+=1.9)for(let c of[-12.6,12.6])(Math.abs(l)>7.5||c<0)&&i.put(s,Q(.12,1.1,.12,l,4.7,c));for(let l=-12.6;l<=12.6;l+=1.8)for(let c of[-30.5,30.5])i.put(s,Q(.12,1.1,.12,c,4.7,l));for(let l of[-12.6,12.6])i.put(s,Q(61,.07,.07,0,5.75,l));for(let l of[-30.5,30.5])i.put(s,Q(.07,.07,25.2,l,5.75,0));i.put(e,Yt(18,6,18,0,4.7,0),Yt(14.6,4.6,14.6,0,11.4,0)),i.put(n,Q(19.4,.7,19.4,0,10.7,0),Q(16,.7,16,0,16,0),Q(19,.5,19,0,4.7,0));for(let l=-6.6;l<=6.6;l+=3.3)i.put(n,Q(2.4,3.6,.2,l,6,9.06));for(let l=-4.8;l<=4.8;l+=3.2)i.put(n,Q(2.2,2.8,.2,l,12.2,7.36));for(let[l,c]of[[-24,8],[24,8],[-24,-8],[24,-8],[-12,10.5],[12,10.5]])i.put(r,Dt(.5,5.2,l,4.7,c,8),Dt(.8,.3,l,9.8,c,8)),i.put(o,ee(.62,l,10.6,c,10)),i.light(l,10.6,c,Me,.9,7,5.5);for(let l of[-28,28])i.put(s,Xt([l,4.7,-10],[l,13.5,-10],.07,4)),i.put(a,Q(2.6,1.5,.06,l+1.35,11.9,-10));for(let l of[-52,52])for(let c of[26,-22]){for(let h=0;h<4;h++){i.put(r,Dt(1.9-h*.3,.5,l,2.2+h*2.6,c,10));for(let u=0;u<6;u++){let f=u*Math.PI/3;i.spark(l+Math.cos(f)*(1.9-h*.3),2.9+h*2.6,c+Math.sin(f)*(1.9-h*.3),Wt,1.3,1)}}i.put(r,Dt(.55,11,l,0,c,8)),i.put(o,ee(.8,l,11.6,c,10)),i.light(l,11.6,c,Me,.9,7,6)}return i.light(0,6,15,Wt,.7,11).light(-11,5,12,Wt,.5,8).light(11,5,12,Wt,.5,8),i}function uf(i){let t=new oe,e=Ge(77),n=ct({tint:9208696});for(let o=0;o<150;o++){let a=e()*6.28,l=52+e()*80;t.spark(Math.cos(a)*l,.35,Math.sin(a)*l,Wt,1.25,3)}for(let o of i.concat([114,66,41,-27,144,180]))for(let a=0;a<12;a++){let l=fe(o+(e()-.5)*8,pt-8-e()*16);t.spark(l.x,.35,l.z,Wt,1.35,3)}for(let o=0;o<46;o++){let a=e()*6.28,l=36+e()*12;t.spark(Math.cos(a)*l*1.3,.35,Math.sin(a)*l,Wt,1.3,3)}let r=-78,s=-46;t.put(n,Dt(7,.5,r,-.1,s,20),Dt(1.2,1.4,r,0,s,10));for(let o=0;o<10;o++){let a=o/10*6.28;for(let l=0;l<9;l++){let c=l/8,h=6-c*5.2;t.spark(r+Math.cos(a)*h,.6+Math.sin(c*Math.PI*.62)*7.5,s+Math.sin(a)*h,[an,ni,Yr][o%3],1.6,1)}}for(let o=0;o<16;o++)t.spark(r+(e()-.5)*.6,1.5+o*.95,s+(e()-.5)*.6,an,1.9,1);return t.light(r,2,s,ni,.9,8),t}function ff(i){let t=[],e=gi(64);return[[14240570,86,44,.05,.3],[3837913,-64,78,-.04,2.1],[14856762,30,-84,.045,4],[4829306,-98,-8,-.05,5.2],[15262418,100,-52,.04,1.2]].forEach(([n,r,s,o,a])=>{let l=new nn,c=new me({color:new yt(n).multiplyScalar(.55)}),h=new me({color:new yt(n).multiplyScalar(.85)}),u=new Nt(new pn(1,12,6,0,Math.PI*2,Math.PI/2,Math.PI/2).scale(1.3,.8,2.2),c);u.position.y=.7,l.add(u);let f=new Nt(new Te(2.3,.14,2.8),h);f.position.y=2.5,l.add(f);for(let[x,M]of[[-1,-1.2],[1,-1.2],[-1,1.2],[1,1.2]]){let m=new Nt(new Pe(.05,.05,1.8),c);m.position.set(x,1.6,M),l.add(m)}let d=new Yn(new Gn({map:e,color:16760944,blending:on,depthWrite:!1,transparent:!0}));d.scale.set(5,5,1),d.position.set(0,2.2,0),l.add(d),l.scale.setScalar(1.5),i.add(l),t.push({g:l,cx:r,cz:s,speed:o,phase:a,rx:16+Math.abs(r)*.1,rz:11})}),t}function df(){let i=new nn,t=Zr("#7a4e2c","#63401f",12,!1),e=new me({map:t}),n=new me({color:13081186}),r=new me({color:4007959}),s=new me({color:new yt(3,2,.9)}),o=new me({map:Zr("#b33a2e","#efe6d2",8),side:Xe}),a=new Nt(new pn(1,20,10,0,Math.PI*2,Math.PI/2,Math.PI/2).scale(1.75,1.15,5.4),e);a.position.y=1,i.add(a);let l=new Nt(new wn(1,24).rotateX(-Math.PI/2).scale(1.62,1,5.2),r);l.position.y=.86,i.add(l);let c=new Nt(new Tn(1,.07,6,40).rotateX(Math.PI/2).scale(1.75,1,5.4),n);c.position.y=1.02,i.add(c);for(let M of[-2.6,-.6,1.6,3.2]){let m=new Nt(new Te(3.3-Math.abs(M)*.32,.14,.6),n);m.position.set(0,.98,M),i.add(m)}let h=new Nt(new Pe(1.7,1.7,3.6,14,1,!0,-Math.PI/2,Math.PI).rotateX(Math.PI/2).rotateZ(Math.PI/2),o);h.position.set(0,1.5,.4),h.scale.set(1,.9,1),i.add(h);for(let[M,m]of[[-1.5,-1.4],[1.5,-1.4],[-1.5,2.2],[1.5,2.2]]){let p=new Nt(new Pe(.05,.05,1.6),n);p.position.set(M,1.8,m),i.add(p)}for(let M of[-1,1]){let m=new Nt(new Pe(.05,.05,4.4),n);m.position.set(M*2.6,1,-.8),m.rotation.set(.25,0,M*1.15),i.add(m);let p=new Nt(new Te(.5,.06,1),n);p.position.set(M*4.5,.2,-1.3),i.add(p)}let u=[];for(let[M,m,p]of[[5,3.4,12],[-4.8,4.2,15]]){let T=new Nt(new Pe(.06,.06,m-.9),n);T.position.set(0,.9+(m-.9)/2,M),i.add(T);let A=new Nt(new Te(.56,.74,.56),s);A.position.set(0,m+.3,M),i.add(A);let g=new Nt(new Ki(.5,.36,4).rotateY(Math.PI/4),r);g.position.set(0,m+.86,M),i.add(g);let y=new Yn(new Gn({map:gi(),color:16758880,blending:on,depthWrite:!1,transparent:!0,opacity:.9}));y.scale.set(p,p,1),y.position.copy(A.position),i.add(y),u.push(y)}let f=new Nt(new yn(1.5,.8),new me({color:14609752,side:Xe}));f.position.set(.8,5.6,-4.8),i.add(f);let d=new Nt(new Pe(.03,.03,1.4),n);d.position.set(0,5.4,-4.8),i.add(d);let x=new Nt(new wn(12,24).rotateX(-Math.PI/2),new me({map:gi(),color:16752704,blending:on,transparent:!0,opacity:.2,depthWrite:!1}));return x.position.set(0,.12,0),i.add(x),i.scale.setScalar(1.7),i.userData={lights:u,flag:f},i}var Js=[126,102,78,54,28,6,-16,-38,162,-90],jc=[9,8,0,1,2,3,4,5,6,7],Qr={zenith:263692,mid:660006,horizon:1780302,fog:1186872,water:264726};function ox(i,t,e={}){let n=new nl({canvas:i,antialias:!1,powerPreference:"high-performance"});n.toneMapping=zr,n.toneMappingExposure=1.12,n.outputColorSpace=Ze;let r=new _s;r.fog=new Ss(Qr.fog,8e-4),r.background=new yt(Qr.mid);let s=new Qe(38,1,2,4200),o=matchMedia("(prefers-reduced-motion: reduce)"),a=Ge(11);r.add(new Nt(new pn(3600,32,16),new _e({side:sn,depthWrite:!1,fog:!1,uniforms:{zenith:{value:new yt(Qr.zenith)},mid:{value:new yt(Qr.mid)},horizon:{value:new yt(Qr.horizon)}},vertexShader:"varying vec3 d; void main(){ d = normalize(position); gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",fragmentShader:`uniform vec3 zenith; uniform vec3 mid; uniform vec3 horizon; varying vec3 d;
      void main(){ float y = max(d.y, 0.0); vec3 c = mix(horizon, mid, smoothstep(0.0, 0.22, y)); c = mix(c, zenith, smoothstep(0.18, 0.8, y)); c += vec3(0.16, 0.09, 0.05) * exp(-y * 18.0) * 0.3; gl_FragColor = vec4(c, 1.0);
      #include <tonemapping_fragment>
      #include <colorspace_fragment>
      }`})));let l=[],c=[],h=[];for(let W=0;W<3200;W++){let q=a()*2-1,Z=a()*Math.PI*2,Ut=Math.abs(q)*.96+.035,gt=Math.sqrt(1-Ut*Ut);l.push(Math.cos(Z)*gt*3300,Ut*3300,Math.sin(Z)*gt*3300);let Lt=a();c.push(Lt<.03?3.6:Lt<.2?2.3:1.35),h.push(a()*6.28)}let u=new Ie;u.setAttribute("position",new Jt(l,3)),u.setAttribute("size",new Jt(c,1)),u.setAttribute("phase",new Jt(h,1));let f=new Lr(u,new _e({transparent:!0,depthWrite:!1,fog:!1,blending:on,uniforms:{time:{value:0},dpr:{value:1}},vertexShader:"attribute float size; attribute float phase; uniform float time; uniform float dpr; varying float tw; void main(){ tw = 0.72 + 0.28 * sin(time * (0.6 + phase * 0.25) + phase * 9.0); gl_PointSize = size * dpr; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",fragmentShader:"varying float tw; void main(){ float d = length(gl_PointCoord - 0.5); float a = smoothstep(0.5, 0.05, d) * tw; gl_FragColor = vec4(vec3(0.92, 0.95, 1.0) * a * 1.5, a); }"}));r.add(f);let d=document.createElement("canvas");d.width=d.height=256;{let W=d.getContext("2d");W.fillStyle="#fff6e0",W.beginPath(),W.arc(128,128,96,0,7),W.fill(),W.fillStyle="rgba(190,180,160,.5)";for(let[q,Z,Ut]of[[150,100,16],[176,150,11],[130,170,9],[190,110,7]])W.beginPath(),W.arc(q,Z,Ut,0,7),W.fill();W.globalCompositeOperation="destination-out",W.beginPath(),W.arc(72,116,92,0,7),W.fill()}let x=new Yn(new Gn({map:new Zn(d),color:new yt(2.4,2.3,2),fog:!1,depthWrite:!1}));x.scale.set(150,150,1),x.position.set(980,1050,-2900),r.add(x);let M=new Yn(new Gn({map:gi(256),color:7311320,fog:!1,depthWrite:!1,blending:on,opacity:.32}));M.scale.set(1500,1500,1),M.position.copy(x.position),r.add(M);let m=document.createElement("canvas");m.width=m.height=256;{let W=m.getContext("2d"),q=W.createImageData(256,256),Z=Ge(19),Ut=[];for(let gt=0;gt<22;gt++)Ut.push([1+(Z()*5|0),1+(Z()*5|0),Z()*6.28,Z()]);for(let gt=0;gt<256;gt++)for(let Lt=0;Lt<256;Lt++){let te=0;for(let[S,U,H,V]of Ut)te+=Math.sin((Lt*S+gt*U)/256*6.2832+H)*V/(S+U);let ve=Math.max(0,Math.min(1,te*.9-.12)),se=(gt*256+Lt)*4;q.data[se]=150,q.data[se+1]=170,q.data[se+2]=215,q.data[se+3]=ve*ve*255}W.putImageData(q,0,0)}let p=new Zn(m);p.wrapS=p.wrapT=ui,p.repeat.set(3,3);let T=new Nt(new yn(9e3,9e3).rotateX(Math.PI/2),new me({map:p,transparent:!0,opacity:.2,depthWrite:!1,fog:!1}));T.position.y=620,r.add(T);let A=document.createElement("canvas");A.width=A.height=256;{let W=A.getContext("2d"),q=W.createImageData(256,256),Z=Ge(3),Ut=[];for(let Lt=0;Lt<30;Lt++)Ut.push([3+(Z()*14|0),3+(Z()*14|0),Z()*6.28,.4+Z()]);let gt=(Lt,te)=>{let ve=0;for(let[se,S,U,H]of Ut)ve+=Math.sin((Lt*se+te*S)/256*6.2832+U)*H/(se+S);return ve};for(let Lt=0;Lt<256;Lt++)for(let te=0;te<256;te++){let ve=gt(te+1,Lt)-gt(te-1,Lt),se=gt(te,Lt+1)-gt(te,Lt-1),S=Math.hypot(ve*4,se*4,1),U=(Lt*256+te)*4;q.data[U]=(-ve*4/S*.5+.5)*255,q.data[U+1]=(-se*4/S*.5+.5)*255,q.data[U+2]=(1/S*.5+.5)*255,q.data[U+3]=255}W.putImageData(q,0,0)}let g=new Zn(A);g.wrapS=g.wrapT=ui;let y=new cl(new wn(pt+1,96),{textureWidth:1024,textureHeight:1024,waterNormals:g,sunDirection:new P(.3,.34,-.9).normalize(),sunColor:6255796,waterColor:Qr.water,distortionScale:1.5,fog:!0});y.rotation.x=-Math.PI/2,y.material.uniforms.size.value=.55,r.add(y);let v=new oe,E=W=>{let q=fe(W,1);return Math.atan2(-q.x,-q.z)*.62},R=(W,q,Z,Ut,gt=E(q))=>{let Lt=fe(q,Z),te=fe(q,Z+Ut[2]);return pl(te.x,te.z,Ut[0],Ut[1]),v.stamp(W(),Lt.x,Lt.z,gt,1,1.5),Lt};pl(0,-(pt+68),86,44),v.stamp(qu(),0,-(pt+70),0,1,.3),R(Yu,134,pt+44,[30,30,14]),R(Qu,198,pt+46,[44,36,14]),R($u,48,pt+54,[48,42,15]),R(Zu,14,pt+44,[26,26,17]),R(tf,-14,pt+40,[24,18,7]),R(ef,-38,pt+42,[22,22,15]),R(()=>Vc(4),171,pt+47,[21,21,0],0),R(()=>Vc(9),86,pt+150,[21,21,0],0),R(rf,152,pt+74,[36,36,0],0);{let W=fe(153,pt+8);pl(W.x,W.z,7,7),v.stamp(nf(),W.x,W.z,Math.atan2(-W.x,-W.z),1,1.7)}v.stamp(hf()),v.stamp(uf(Js)),v.stamp(af(Js)),v.stamp(lf());let b=v.build();r.add(b),Xu(b);let w=new nn;r.add(w),cf(w);let I=()=>new _e({transparent:!0,depthWrite:!1,fog:!1,blending:on,uniforms:{map:{value:gi(64)},time:{value:0},scale:{value:800}},vertexShader:`attribute vec3 tint; attribute float size; attribute float phase; attribute float mode; uniform float time; uniform float scale; varying vec3 vC;
      void main(){ vec3 p = position; float k = 1.0;
        if (mode > 2.5) { p.x += sin(time * 0.11 + phase * 6.0) * 2.4; p.z += cos(time * 0.09 + phase * 4.0) * 2.4; k = 0.72 + 0.28 * sin(time * 7.0 + phase * 30.0); }
        else if (mode > 1.5) { k = step(0.5, fract(time * 0.7 + phase)); }
        else if (mode > 0.5) { k = 0.72 + 0.28 * sin(time * 9.0 + phase * 40.0) * sin(time * 5.3 + phase * 17.0); }
        vC = tint * k; vec4 mv = modelViewMatrix * vec4(p, 1.0); gl_PointSize = min(size * scale / -mv.z, 96.0); gl_Position = projectionMatrix * mv; }`,fragmentShader:"uniform sampler2D map; varying vec3 vC; void main(){ float a = texture2D(map, gl_PointCoord).a; gl_FragColor = vec4(vC * a, a); }"}),L=W=>{let q=W.length,Z=new Ie,Ut=new Float32Array(q*3),gt=new Float32Array(q*3),Lt=new Float32Array(q),te=new Float32Array(q),ve=new Float32Array(q);W.forEach((S,U)=>{Ut.set([S.x,S.y,S.z],U*3),gt.set([S.colour.r,S.colour.g,S.colour.b],U*3),Lt[U]=S.size,te[U]=a(),ve[U]=S.flicker||0}),Z.setAttribute("position",new Ne(Ut,3)),Z.setAttribute("tint",new Ne(gt,3)),Z.setAttribute("size",new Ne(Lt,1)),Z.setAttribute("phase",new Ne(te,1)),Z.setAttribute("mode",new Ne(ve,1));let se=new Lr(Z,I());return se.frustumCulled=!1,r.add(se),se},k=L(zc),O=new yt(1,.95,.85),X=new yt(1,.16,.1),z=[];for(let W=0;W<26;W++)z.push({a:a()*360,v:(W%2?1:-1)*(5+a()*5),d:W%2?pt+19.4:pt+24});let $=L(z.flatMap(()=>[{x:0,y:2.3,z:0,colour:O,size:3.2},{x:0,y:2.3,z:0,colour:X,size:2.4}])),G=document.createElement("canvas");G.width=4,G.height=128;{let W=G.getContext("2d"),q=W.createLinearGradient(0,128,0,0);q.addColorStop(0,"rgba(255,255,255,1)"),q.addColorStop(.3,"rgba(255,255,255,.4)"),q.addColorStop(.7,"rgba(255,255,255,.08)"),q.addColorStop(1,"rgba(255,255,255,0)"),W.fillStyle=q,W.fillRect(0,0,4,128)}let at=new Zn(G),xt=(W,q,Z,Ut,gt=16761466,Lt=.07)=>{let te=new Nt(new Pe(Ut,1.2,Z,20,1,!0),new me({map:at,color:gt,transparent:!0,opacity:Lt,depthWrite:!1,blending:on,side:Xe,fog:!1}));return te.position.set(W,Z/2+1,q),r.add(te),te},It=-(pt+70);for(let[W,q,Z,Ut]of[[-19.5,It+6,74,9],[12.5,It+8,62,12],[-46,It+8,44,8],[58,It+8,40,8]])xt(W,q,Z,Ut);{let W=fe(134,pt+50),q=fe(48,pt+62),Z=fe(-14,pt+44),Ut=fe(-38,pt+52);xt(W.x,W.z,60,9),xt(q.x,q.z,58,12),xt(Z.x,Z.z,50,6),xt(Ut.x,Ut.z,40,10,10470655,.06)}let $t=gi(256,0,1.6),ge=[];for(let W=0;W<10;W++){let q=new Yn(new Gn({map:$t,color:3360890,transparent:!0,opacity:.11,depthWrite:!1,blending:on})),Z=fe(10+W*17+a()*10,pt-14-a()*22,5);q.position.copy(Z),q.scale.set(190+a()*110,26+a()*10,1),q.userData.a=a()*6.28,ge.push(q),r.add(q)}t.forEach((W,q)=>{let Z=Js[q],Ut=Math.sin(Z*ze)<-.3,gt=fe(Ut?Z+11:Z,pt+9,Ut?7.6:10.2),Lt=ju([{text:String(q+1).padStart(2,"0")+"   "+W.group.toUpperCase(),y:84,size:44,colour:"#f2c66a",font:'"Geist Mono", ui-monospace, monospace',weight:500},{text:W.name,y:206,size:132,colour:"#fff6e2"}]),te=new Nt(new yn(19.2,6),new me({map:Lt,color:new yt(1.5,1.5,1.5)}));te.position.copy(gt),r.add(te);for(let ve of[-8.6,8.6]){let se=new Nt(new Pe(.2,.2,gt.y-1.4),new me({color:1711402}));se.position.set(gt.x+ve,(gt.y+1.4)/2-1.4,gt.z-.1),r.add(se)}for(let ve of[-7,0,7]){let se=new Nt(new Te(1.2,.2,.5),new me({color:new yt(2,1.6,.9)}));se.position.set(gt.x+ve,gt.y+3.4,gt.z+.9),r.add(se)}});let Fe=ff(r),ae=df();r.add(ae);let J=sf();r.add(J.g);let et=[];for(let W=0;W<30;W++){let q=new Nt(new qi(.82,1,28).rotateX(-Math.PI/2),new me({color:10336767,transparent:!0,opacity:0,depthWrite:!1,blending:on}));q.position.y=.07,q.userData.age=9,et.push(q),r.add(q)}let Mt=new Nt(new yn(1,1),new me({map:gi(64,0,.6),color:14674175,transparent:!0,opacity:0,depthWrite:!1,blending:on,fog:!1,side:Xe}));Mt.scale.set(260,5,1),r.add(Mt);let zt=9+a()*6,bt=-1,ne=70,je=[0,1,2].map(()=>({t:-1,o:new P,c:[1,1,1]})),F=[];for(let W=0;W<3*ne;W++){let q=a()*2-1,Z=a()*6.283,Ut=Math.sqrt(1-q*q),gt=.55+a()*.45;F.push(Math.cos(Z)*Ut*gt,q*gt,Math.sin(Z)*Ut*gt)}let Ee=L(F.map((W,q)=>q%3?null:{x:0,y:-80,z:0,colour:new yt(0,0,0),size:6.5}).filter(Boolean)),jt=7;function kt(W){if(jt-=W,jt<=0){let gt=je.find(Lt=>Lt.t<0);gt&&(gt.t=0,gt.o.set((a()-.5)*300,120+a()*80,-(pt+170)-a()*130),gt.c=[[1,.7,.3],[1,.35,.3],[.5,.9,1],[1,.5,.9],[.7,1,.5],[1,.95,.8]][a()*6|0]),jt=a()<.55?.5+a()*.9:10+a()*14}let q=Ee.geometry.attributes.position,Z=Ee.geometry.attributes.tint,Ut=!1;je.forEach((gt,Lt)=>{if(gt.t<0)return;gt.t+=W,Ut=!0;let te=gt.t/2.4,ve=66*(1-Math.exp(-gt.t*2.6)),se=te>=1?0:Math.pow(1-te,1.4)*2.2;for(let S=0;S<ne;S++){let U=(Lt*ne+S)*3;q.setXYZ(Lt*ne+S,gt.o.x+F[U]*ve,gt.o.y+F[U+1]*ve-7*gt.t*gt.t,gt.o.z+F[U+2]*ve),Z.setXYZ(Lt*ne+S,gt.c[0]*se,gt.c[1]*se,gt.c[2]*se)}te>=1&&(gt.t=-1)}),Ut&&(q.needsUpdate=!0,Z.needsUpdate=!0)}let St=new ol(n);St.addPass(new al(r,s));let Re=new Jr(new nt(256,256),.34,.55,1);St.addPass(Re),St.addPass(new ll);let Rt=fe(Js[9],pt-27),Ct=new nt(Rt.x,Rt.z),de=new nt,pe=new Set,C=Math.PI,_=null,B=9,j=0,tt=3.5,K=-99,dt=0,lt=0,At=!0,Pt=W=>{let q=fe(Js[W],pt-27);return new nt(q.x,q.z)},st=W=>{_={i:W,p:Pt(W)},B=-1};function mt(W){let q=0,Z=0;if((pe.has("ArrowUp")||pe.has("w"))&&(Z-=1),(pe.has("ArrowDown")||pe.has("s"))&&(Z+=1),(pe.has("ArrowLeft")||pe.has("a"))&&(q-=1),(pe.has("ArrowRight")||pe.has("d"))&&(q+=1),q||Z)_=null,K=dt,B>=0&&(B=-1,e.leave&&e.leave());else if(_){let S=_.p.clone().sub(Ct),U=S.length();if(U<2.2&&de.length()<2.5)_.i!==void 0&&(B=_.i,tt=6.5,e.arrive&&e.arrive(B)),_=null;else{let H=S.clone().normalize(),V=-Ct.dot(H);if(V>0&&V<U){let rt=Ct.clone().addScaledVector(H,V);if(rt.length()<62){let vt=rt.lengthSq()>1?rt.clone().normalize():new nt(-H.y,H.x);H.addScaledVector(vt,1.5*(1-rt.length()/62)+.35).normalize()}}let N=Math.min(1,U/26);q=H.x*N,Z=H.y*N}}else o.matches||(tt-=W,tt<=0&&dt-K>9&&(j=B>=0?(jc.indexOf(B)+1)%jc.length:j,B>=0&&e.leave&&e.leave(),st(jc[j])));let Ut=Math.hypot(q,Z)||1;Ut>1&&(q/=Ut,Z/=Ut),de.x+=(q*30-de.x*1.5)*W,de.y+=(Z*30-de.y*1.5)*W,Ct.addScaledVector(de,W);let gt=Ct.length();if(gt>pt-12){Ct.multiplyScalar((pt-12)/gt);let S=Ct.clone().normalize();de.addScaledVector(S,-Math.max(0,de.dot(S)))}let Lt=Ct.x/44,te=Ct.y/26,ve=Math.hypot(Lt,te);if(ve<1){let S=new nt(Lt/44,te/26).normalize();Ct.set(Ct.x/Math.max(ve,.01),Ct.y/Math.max(ve,.01)),de.addScaledVector(S,-Math.min(0,de.dot(S)))}let se=de.length();if(se>.6){let U=Math.atan2(de.x,de.y)-C;U=Math.atan2(Math.sin(U),Math.cos(U)),C+=U*Math.min(1,W*3.2)}ae.position.set(Ct.x,Math.sin(dt*1.7)*.06-.12,Ct.y),ae.rotation.set(Math.sin(dt*1.3)*.02-Math.min(.06,se*.003),C,Math.sin(dt*1.1)*.03),ae.userData.flag.rotation.y=Math.sin(dt*6)*.3;for(let S of ae.userData.lights)S.material.opacity=.82+Math.sin(dt*11+S.position.z)*.08;if(lt-=W,se>2&&lt<=0){lt=.16;let S=et.reduce((U,H)=>U.userData.age>H.userData.age?U:H);S.userData.age=0,S.position.set(Ct.x-Math.sin(C)*7,.07,Ct.y-Math.cos(C)*7),S.userData.s=Math.min(1,se/16)}for(let S of et){S.userData.age+=W;let U=S.userData.age,H=Math.min(1,U/3.2);S.scale.setScalar(1.6+H*11),S.material.opacity=U<3.2?(1-H)*.3*(S.userData.s||0):0}}let Gt=new P;function Tt(W){y.material.uniforms.time.value=dt*.42,f.material.uniforms.time.value=dt,k.material.uniforms.time.value=dt,p.offset.x=dt*.0016;for(let Z of kc)Z.uniforms.glow.value=Z.userData.glow*(.94+Math.sin(dt*.7+Z.id)*.08);for(let Z of ge)Z.position.x+=Math.sin(dt*.05+Z.userData.a)*W*1.2;let q=$.geometry.attributes.position;z.forEach((Z,Ut)=>{Z.a+=Z.v/Z.d/ze*W;let gt=Z.v>0?.55:-.55,Lt=fe(Z.a+gt,Z.d),te=fe(Z.a-gt,Z.d);q.setXYZ(Ut*2,Lt.x,2.3,Lt.z),q.setXYZ(Ut*2+1,te.x,2.3,te.z)}),q.needsUpdate=!0;for(let Z of Fe){let Ut=dt*Z.speed+Z.phase;Z.g.position.set(Z.cx+Math.cos(Ut)*Z.rx,Math.sin(dt*1.5+Z.phase)*.05,Z.cz+Math.sin(Ut)*Z.rz),Z.g.rotation.y=Math.atan2(-Math.sin(Ut)*Z.rx*Math.sign(Z.speed),Math.cos(Ut)*Z.rz*Math.sign(Z.speed))}if(o.matches||kt(W),J.cars.forEach((Z,Ut)=>{let gt=2.2+dt*.05-Ut*.0245;Z.position.set(Math.cos(gt)*(pt+14.9),1.42,Math.sin(gt)*(pt+14.9)),Z.rotation.y=-gt}),zt-=W,zt<=0&&bt<0&&(bt=0,zt=14+a()*16,Mt.userData={x:(a()-.5)*2400,y:1500+a()*500,vx:(a()<.5?-1:1)*(700+a()*500)},Mt.rotation.z=Mt.userData.vx>0?-.32:.32),bt>=0){bt+=W;let Z=Mt.userData;Mt.position.set(Z.x+Z.vx*bt,Z.y-380*bt,-3e3),Mt.material.opacity=Math.max(0,Math.sin(Math.min(1,bt/.9)*Math.PI))*.9,bt>.9&&(bt=-1)}}let ht=new P,Zt=200,D=36,ot=-.035,ut=0,_t=1.6,it=0,Y=0;function wt(){let W=i.clientWidth,q=i.clientHeight,Z=q>W;if(s.aspect=W/q,s.fov=W/q<1.5?44:38,Zt=Z?240:200,D=Z?24:36,ot=-.035,Z){let Lt=e.band&&e.band(),te=Lt?Lt[0]:q*.42,ve=Lt?Lt[1]:q*.74,se=4.6*ze,S=7.4*ze,U=Math.max(80,ve-te)/(Math.tan(se)+Math.tan(S));s.fov=Math.min(48,Math.max(34,2*Math.atan(q/2/U)/ze)),U=q/2/Math.tan(s.fov*ze/2),ot=Math.tan((se-S)/2-Math.atan((q/2-(te+ve)/2)/U))}s.updateProjectionMatrix();let Ut=Math.min(devicePixelRatio||1,Z?_t+.4:_t);n.setPixelRatio(Ut),n.setSize(W,q,!1),St.setPixelRatio(Ut),St.setSize(W,q),f.material.uniforms.dpr.value=Ut;let gt=q*Ut/(2*Math.tan(s.fov*ze/2));k.material.uniforms.scale.value=gt,$.material.uniforms.scale.value=gt,Ee.material.uniforms.scale.value=gt}function Ht(W,q){let Z=i.clientHeight>i.clientWidth,Ut=Ct.x*(Z?.9:.86)+ut,gt=Math.max(Ct.y+Zt,Z?240:105),Lt=q?1:1-Math.exp(-W*1.7);ht.x+=(Ut-ht.x)*Lt,ht.z+=(gt-ht.z)*Lt,ht.y=D+Math.sin(dt*.31)*.5,s.position.copy(ht),s.lookAt(ht.x,ht.y+ot*100,ht.z-100)}let Se=performance.now(),he=0;function In(W){he=requestAnimationFrame(In);let q=Math.min(.05,(W-Se)/1e3);Se=W,dt+=q,mt(q),Ht(q),Tt(q),St.render(),dt>4&&(it=q>.034?it+q:Math.max(0,it-q*.5),it>2.5&&Y<3&&(Y++,it=0,_t=[1.6,1.25,1,1][Y],Y===3&&(Re.enabled=!1),wt()))}let en=()=>{cancelAnimationFrame(he),Se=performance.now(),At&&!document.hidden&&(o.matches?(mt(.016),Ht(0,!0),Tt(0),St.render()):he=requestAnimationFrame(In))},$r=()=>{wt(),o.matches&&en()};addEventListener("resize",$r),document.fonts&&document.fonts.ready&&document.fonts.ready.then($r),document.addEventListener("visibilitychange",en),o.addEventListener("change",en),addEventListener("keydown",W=>{let q=W.key.length===1?W.key.toLowerCase():W.key;["ArrowUp","ArrowDown","ArrowLeft","ArrowRight","w","a","s","d"].includes(q)&&!W.metaKey&&!W.ctrlKey&&!/^(INPUT|TEXTAREA|SELECT)$/.test(document.activeElement.tagName)&&(pe.add(q),q.startsWith("Arrow")&&W.preventDefault())}),addEventListener("keyup",W=>pe.delete(W.key.length===1?W.key.toLowerCase():W.key)),addEventListener("blur",()=>pe.clear());let jn=new Hs,or=new nt,Ys=new gn(new P(0,1,0),0),vi=new P;i.addEventListener("pointerdown",W=>{let q=i.getBoundingClientRect();if(or.set((W.clientX-q.left)/q.width*2-1,-((W.clientY-q.top)/q.height)*2+1),jn.setFromCamera(or,s),jn.ray.intersectPlane(Ys,vi)&&Math.hypot(vi.x,vi.z)<pt+30){let Z=new nt(vi.x,vi.z),Ut=Z.length();Ut>pt-14&&Z.multiplyScalar((pt-14)/Ut),Math.hypot(Z.x/48,Z.y/30)<1&&Z.multiplyScalar(1/Math.max(.05,Math.hypot(Z.x/48,Z.y/30)));let gt=-1,Lt=22;t.forEach((te,ve)=>{let se=Pt(ve).distanceTo(Z);se<Lt&&(Lt=se,gt=ve)}),K=dt,B>=0&&e.leave&&e.leave(),gt>=0?st(gt):(_={p:Z},B=-1)}}),addEventListener("pointermove",W=>{ut=(W.clientX/innerWidth-.5)*10});let ar=W=>{dt+=W,mt(W),Ht(W),Tt(W),St.render()},ts={step(W){At=!1,cancelAnimationFrame(he),ar(W)},skip(W){for(let q=0;q<W;q+=1/30)dt+=1/30,mt(1/30),Ht(1/30);Tt(1/30),St.render()},sail(W){K=dt,B!==W&&(B>=0&&e.leave&&e.leave(),o.matches?(ts.jump(W),e.arrive&&e.arrive(W),Tt(0),St.render()):st(W))},stop(){At=!1,en()},resume(){At=!0,en()},where:()=>({x:Ct.x,z:Ct.y,docked:B}),jump(W){let q=Pt(W);Ct.copy(q),de.set(0,0),_=null,B=W,tt=1e9,Ht(0,!0)},renderer:n,scene:r,camera:s};return wt(),Ht(0,!0),en(),ts}window.Scene3D={start:ox};})();
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2025 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
